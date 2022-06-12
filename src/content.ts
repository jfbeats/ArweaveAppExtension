const postMessageWrapper = (subject: string) => window.dispatchEvent(new Event('arweave-app-extension:' + subject))



let injectWrapperPromise: Promise<void>
const injectWrapper = () => injectWrapperPromise ??= new Promise<void>(res => {
	const el = document.createElement('script')
	el.src = chrome.runtime.getURL('wrapper.js')
	el.onload = () => { el.remove(); res() }
	(document.head || document.documentElement).appendChild(el)
})



chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if (msg.from !== 'popup') { return }
	if (msg.subject === 'connect') { injectWrapper().then(() => postMessageWrapper('connect')).then(sendResponse) }
})