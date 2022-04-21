window.addEventListener('DOMContentLoaded', () => {
	const iframeWindow = document.querySelector('iframe').contentWindow;

	const postExtension = async (subject: string) => {
		const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
		chrome.tabs.sendMessage(tabs[0].id, { from: 'popup', subject });
		window.close()
	};

	const shareState = async () => {
		const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
		iframeWindow.postMessage({
			origin: new URL(tabs[0].url).origin,
		});
	};

	top.window.addEventListener('message', e => {
		if (e.source !== iframeWindow || e.origin !== 'https://arweave.app') { return };
		if (e.data === 'arweave-app-extension:connect') { postExtension('connect'); };
		if (e.data === 'arweave-app-extension:permissions') { chrome.runtime.openOptionsPage(); };
		if (e.data === 'arweave-app-extension:state') { shareState(); };
	});
});