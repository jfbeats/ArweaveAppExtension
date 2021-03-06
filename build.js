import fs from 'fs'
import { build } from 'esbuild'
import archiver from 'archiver'



const manifest = JSON.parse(fs.readFileSync('manifest.json'))
const args = process.argv.slice(2)

const env = {}
env.dev = args.includes('dev')
env.remoteOrigin = env.dev ? 'http://localhost:8080' : 'https://arweave.app'

const define = {}
for (const k in env) { define[`process.env.${k}`] = JSON.stringify(env[k]) }



const versionNumber = () => {
	const date = new Date()
	const month = date.getMonth() + 1
	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	const hours = date.getHours() === 0 ? '' : date.getHours()
	const minutes = date.getMinutes() < 10 && hours ? '0' + date.getMinutes() : date.getMinutes()
	return [manifest.version, date.getFullYear(), '' + month + day, '' + hours + minutes].join('.')
}



const baseConfig = {
	version: versionNumber(),
	platform: null,
	esbuild: {
		minify: true,
		bundle: true,
		platform: 'browser',
		target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
		outdir: 'build',
		sourcemap: 'linked',
		define
	},
	archive: {
		outdir: 'archive',
		name: 'build.zip',
	}
}



const runManifest = (config) => {
	const manifest = JSON.parse(fs.readFileSync('manifest.json'))
	manifest.version = config.version
	if (config.platform === 'firefox') {
		manifest.browser_specific_settings = { gecko: { id: '{167f5c4a-4e51-4e7c-bb71-24f087e4cd83}' } }
		manifest.manifest_version = 2
		manifest.web_accessible_resources = manifest.web_accessible_resources.map(r => r.resources).flat()
		manifest.browser_action = manifest.action
		delete manifest.action
		delete manifest.host_permissions
	}
	const result = JSON.stringify(manifest, null, 2)
	fs.writeFileSync(config.esbuild.outdir + '/manifest.json', result)
}



const runArchive = async (config) => {
	if (!config.archive.name) { return }
	return new Promise(res => {
		try { fs.mkdirSync(config.archive.outdir) } catch (e) { }
		const output = fs.createWriteStream(config.archive.outdir + '/' + config.archive.name)
		const archive = archiver('zip', { zlib: { level: 9 } })
		output.on('close', () => res())
		archive.pipe(output)
		archive.directory(config.esbuild.outdir, false)
		archive.finalize()
	})
}



const runBuild = async (config) => {
	fs.rmSync(config.esbuild.outdir, { recursive: true, force: true })
	fs.mkdirSync(config.esbuild.outdir)
	runManifest(config)
	fs.readdirSync('static').forEach(file => fs.copyFileSync('static/' + file, config.esbuild.outdir + '/' + file))
	await build({ ...config.esbuild, entryPoints: fs.readdirSync('src').filter(src => src.endsWith('.ts')).map(file => 'src/' + file)})
	.catch((e) => { console.log(e); process.exit(1) })
	await runArchive(config)
}



const initConfig = (platform, archiveName) => {
	baseConfig.platform = platform
	baseConfig.archive.name = archiveName
	baseConfig.esbuild.define['process.env.platform'] = JSON.stringify(platform)
}



const main = async () => {
	const devPlatform = 'chrome'
	if (args.includes('dev')) {
		initConfig(args[1] || devPlatform, '')
		return runBuild(baseConfig)
	}
	for (const platform of args) {
		initConfig(platform, platform + 'Build.zip')
		await runBuild(baseConfig)
	}
}
main()