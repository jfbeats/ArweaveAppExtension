import fs from 'fs'
import { build } from 'esbuild'
import rimraf from 'rimraf'

const clean = async () => {
	return new Promise(resolve => {
		rimraf('./build', () => resolve())
	})
}

export const runBuild = async (doClean = false) => {
	if (doClean) await clean()
	build({
		entryPoints: fs.readdirSync("src").filter(src => src.endsWith(".ts")).map(file => 'src/' + file),
		minify: true,
		bundle: true,
		platform: 'browser',
		target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
		outdir: 'build',
		sourcemap: true
	}).catch((e) => {
		console.log(e)
		process.exit(1)
	})
}
runBuild(true)