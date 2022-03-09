window.addEventListener('DOMContentLoaded', () => {
	const iframeWindow = document.querySelector('iframe').contentWindow;
	top.window.addEventListener('message', e => {
		if (e.source !== iframeWindow || e.origin !== 'http://localhost:8080') { return };
		if (e.data !== 'arweave-wallet-connector:connect') { return };
		console.log('received');
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			console.log(tabs)
			chrome.tabs.sendMessage(tabs[0].id, { from: 'popup', subject: 'connect' });
		});
	});
});