import type { ArweaveWebWallet } from 'arweave-wallet-connector'

let arweaveWallet: ArweaveWebWallet

const run = async () => {
	const { ArweaveWebWallet } = await import('arweave-wallet-connector')
	const logo = 'https://arweave.app/arweaveViewLandscape.svg'
	if (!arweaveWallet) { arweaveWallet = new ArweaveWebWallet({ name: document.title, logo }) }
	arweaveWallet.setUrl('https://arweave.app')
	arweaveWallet.connect()
}

window.addEventListener('arweave-app-extension:connect', run)