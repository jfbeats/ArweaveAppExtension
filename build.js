import fs from 'fs'
import { build } from 'esbuild'



const env = {}
env.dev = false
env.remoteOrigin = env.dev ? 'http://localhost:8080' : 'https://arweave.app'



const define = {}
for (const k in env) { define[`process.env.${k}`] = JSON.stringify(env[k]) }



const manifest = (config) => {
	const json = fs.readFileSync('manifest.json')
	const manifest = JSON.parse(json)

	const result = JSON.stringify(manifest, null, 2)
	fs.mkdirSync(config.outdir)
	fs.writeFileSync(config.outdir + '/manifest.json', result)
}



export const runBuild = (config) => {
	fs.rmSync(config.outdir, { recursive: true, force: true })
	manifest(config)
	fs.readdirSync('static').forEach(file => fs.copyFileSync('static/' + file, config.outdir + '/' + file))
	build({ ...config, entryPoints: fs.readdirSync('src').filter(src => src.endsWith('.ts')).map(file => 'src/' + file)})
	.catch((e) => {
		console.log(e)
		process.exit(1)
	})
}



runBuild({
	minify: true,
	bundle: true,
	platform: 'browser',
	target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
	outdir: 'build',
	sourcemap: 'linked',
	define
})