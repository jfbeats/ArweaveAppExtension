const el = document.createElement('script');
el.src = chrome.runtime.getURL('build/wrapper.js');
el.onload = () => el.remove();
(document.head || document.documentElement).appendChild(el);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if (msg.from !== 'popup') { return sendResponse() };
	if (msg.subject === 'connect') { window.dispatchEvent(new Event('arweave-app-extension:connect')) };
	sendResponse();
});
