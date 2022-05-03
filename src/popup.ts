const remoteOrigin = 'http://localhost:8080'



window.addEventListener('DOMContentLoaded', () => {
	const iframeWindow = document.querySelector('iframe').contentWindow
	
	const shareState = async () => {
		const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
		iframeWindow.postMessage({
			origin: new URL(tabs[0].url).origin,
		}, remoteOrigin)
		console.log('heu')
	}
	
	

	const postMessageContent = async (subject: string) => {
		const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
		chrome.tabs.sendMessage(tabs[0].id, { from: 'popup', subject })
		window.close()
	}

	top.window.addEventListener('message', e => {
		if (e.source !== iframeWindow || e.origin !== remoteOrigin) { return }
		if (e.data === 'arweave-app-extension:connect') { postMessageContent('connect') }
		if (e.data === 'arweave-app-extension:permissions') { chrome.runtime.openOptionsPage() }
		if (e.data === 'arweave-app-extension:state') { shareState() }
	});
});