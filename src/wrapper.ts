import type { ArweaveWebWallet } from 'arweave-wallet-connector'

let arweaveWallet: ArweaveWebWallet

const run = async () => {
	const { ArweaveWebWallet } = await import('arweave-wallet-connector')
	if (!arweaveWallet) { arweaveWallet = new ArweaveWebWallet() }
	arweaveWallet.setUrl('https://arweave.app')
	arweaveWallet.connect()
}

window.addEventListener('arweave-app-extension:connect', run)