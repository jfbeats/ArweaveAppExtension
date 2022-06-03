declare const browser: any

window.addEventListener('DOMContentLoaded', () => {
	const iframe = document.querySelector('iframe')
	const iframeWindow = iframe.contentWindow
	iframe.src = process.env.remoteOrigin + '/extension'

	const getTabs = async () => {
		let tabs = await chrome.tabs.query({ active: true, currentWindow: true })
		tabs ??= await browser.tabs.query({ active: true, currentWindow: true })
		return tabs
	}
	
	const shareState = async () => {
		const tabs = await getTabs()
		iframeWindow.postMessage({
			origin: new URL(tabs[0].url).origin,
		}, process.env.remoteOrigin)
	}

	const postMessageContent = async (subject: string) => {
		const tabs = await getTabs()
		chrome.tabs.sendMessage(tabs[0].id, { from: 'popup', subject })
	}

	top.window.addEventListener('message', e => {
		if (e.source !== iframeWindow || e.origin !== process.env.remoteOrigin) { return }
		if (e.data === 'arweave-app-extension:connect') { postMessageContent('connect') }
		if (e.data === 'arweave-app-extension:permissions') { chrome.runtime.openOptionsPage() }
		if (e.data === 'arweave-app-extension:state') { shareState() }
		if (e.data === 'arweave-app-extension:close') { window.close() }
	});
});