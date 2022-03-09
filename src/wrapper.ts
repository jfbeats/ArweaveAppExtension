import type { ArweaveWebWallet } from 'arweave-wallet-connector'

let arweaveWallet: ArweaveWebWallet

const run = async () => {
	const { ArweaveWebWallet } = await import('arweave-wallet-connector')
	if (arweaveWallet) { arweaveWallet.disconnect() }
	arweaveWallet = new ArweaveWebWallet()
	arweaveWallet.setUrl('http://localhost:8080')
	arweaveWallet.connect()
}

window.addEventListener('arweave-wallet-connector:connect', run)