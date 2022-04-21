import type { ArweaveWebWallet } from 'arweave-wallet-connector'

let arweaveWallet: InstanceType<typeof ArweaveWebWallet>
let oldAddress: string

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
	arweaveWallet.setUrl('https://arweave.app')
	await arweaveWallet.connect()
	dispatchEvent(new CustomEvent('arweaveWalletLoaded', { detail: {} }))
}

const getAppInfo = () => {
	const hostData = window.location.host.split('.')
	const hostName = hostData[hostData.length - 2] || hostData[0]
	const name = hostName.charAt(0).toUpperCase() + hostName.slice(1)
	const nodes = document.querySelectorAll("link[rel*='icon']") as NodeListOf<HTMLLinkElement>
	const sorted = Array.from(nodes)
		.sort((a, b) => +a.sizes?.value?.split('x')?.[0] - +b.sizes?.value?.split('x')?.[0])
		.sort((a, b) => +a.rel.includes('apple') - +b.rel.includes('apple'))
		.reverse()
	const logo = sorted[0]?.href
	return { name, logo }
}

window.addEventListener('arweave-app-extension:connect', run)