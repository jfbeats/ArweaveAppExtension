window.addEventListener('DOMContentLoaded', () => {
	const iframeWindow = document.querySelector('iframe').contentWindow;
	top.window.addEventListener('message', e => {
		if (e.source !== iframeWindow || e.origin !== 'https://arweave.app') { return };
		if (e.data !== 'arweave-wallet-connector:connect') { return };
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			chrome.tabs.sendMessage(tabs[0].id, { from: 'popup', subject: 'connect' });
		});
	});
});