const postMessageWrapper = (subject: string) => window.dispatchEvent(new Event('arweave-app-extension:' + subject))



chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if (msg.from !== 'popup') { return sendResponse() }
	if (msg.subject === 'connect') { postMessageWrapper('connect') }
	sendResponse()
})



const injectWrapper = () => {
	const el = document.createElement('script')
	el.src = chrome.runtime.getURL('build/wrapper.js')
	el.onload = () => { el.remove() }
	(document.head || document.documentElement).appendChild(el)
}
injectWrapper()