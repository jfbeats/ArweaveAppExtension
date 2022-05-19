window.addEventListener('DOMContentLoaded', () => {
	const iframe = document.querySelector('iframe')
	const iframeWindow = iframe.contentWindow
	iframe.src = process.env.remoteOrigin + '/extension'
	
	const shareState = async () => {
		const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
		iframeWindow.postMessage({
			origin: new URL(tabs[0].url).origin,
		}, process.env.remoteOrigin)
	}
	
	

	const postMessageContent = async (subject: string) => {
		const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
		chrome.tabs.sendMessage(tabs[0].id, { from: 'popup', subject })
		window.close()
	}

	top.window.addEventListener('message', e => {
		if (e.source !== iframeWindow || e.origin !== process.env.remoteOrigin) { return }
		if (e.data === 'arweave-app-extension:connect') { postMessageContent('connect') }
		if (e.data === 'arweave-app-extension:permissions') { chrome.runtime.openOptionsPage() }
		if (e.data === 'arweave-app-extension:state') { shareState() }
	});
});