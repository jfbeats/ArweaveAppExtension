const el = document.createElement('script');
el.src = chrome.runtime.getURL('build/build.min.js');
el.onload = () => el.remove();
(document.head || document.documentElement).appendChild(el);

chrome.runtime.onMessage.addListener(msg => {
	if (msg.from !== 'popup' || msg.subject !== 'connect') { return };
	window.dispatchEvent(new Event('arweave-wallet-connector:connect'));
});
