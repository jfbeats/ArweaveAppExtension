import type { ArweaveWebWallet } from 'arweave-wallet-connector'



const selector = [
	'link[rel*="icon"][href]',
	'link[rel="apple-touch-icon"][href]',
	'link[rel="apple-touch-icon-precomposed"][href]',
	'link[rel="apple-touch-startup-image"][href]',
	'link[rel="mask-icon"][href]',
	'link[rel="fluid-icon"][href]',
	'meta[name="msapplication-TileImage"][content]',
	'meta[itemprop="image"][content]',
].join(', ')

let arweaveWallet: InstanceType<typeof ArweaveWebWallet>
let oldAddress: string



const isSvg = (el: HTMLLinkElement & HTMLMetaElement) => {
	const link = el.href || el.content
	const arr = link.split('.')
	return link.startsWith('data:image/svg') || arr[arr.length - 1] === 'svg'
}

const getAppInfo = () => {
	const hostData = window.location.host.split('.')
	const hostName = hostData[hostData.length - 2] || hostData[0]
	const name = hostName.charAt(0).toUpperCase() + hostName.slice(1)
	const nodes = document.querySelectorAll(selector) as NodeListOf<HTMLLinkElement & HTMLMetaElement>
	const sorted = Array.from(nodes)
		.reverse()
		.sort((a, b) => +b.rel?.includes('apple') - +a.rel?.includes('apple'))
		.sort((a, b) => +b.sizes?.value?.split('x')?.[0] - +a.sizes?.value?.split('x')?.[0])
		.sort((a, b) => +isSvg(b) - +isSvg(a))
	let logo = sorted[0]?.href || sorted[0]?.content
	if (logo && !logo.includes('://') && !logo.startsWith('data:image')) { logo = location.origin + (logo[0] !== '/' ? '/' : '') + logo }
	return { name, logo }
}

const run = async () => {
	const { ArweaveWebWallet } = await import('arweave-wallet-connector')
	if (!arweaveWallet) {
		arweaveWallet = new ArweaveWebWallet(getAppInfo())
		arweaveWallet.on('change', address => {
			if (!oldAddress) { return oldAddress = address }
			oldAddress = address
			dispatchEvent(new CustomEvent('walletSwitch', { detail: { address } }))
		})
	}
	arweaveWallet.setUrl('http://localhost:8080')
	await arweaveWallet.connect()
	dispatchEvent(new CustomEvent('arweaveWalletLoaded', { detail: {} }))
}



window.addEventListener('arweave-app-extension:connect', run)