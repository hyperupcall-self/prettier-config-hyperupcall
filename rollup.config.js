import nodeResolve from '@rollup/plugin-node-resolve'
import pkg from './package.json' with { type: 'json'}

export default {
	input: './index.js',
	output: [
		{ file: pkg.exports['.'].import, format: 'es' },
		{ file: pkg.exports['.'].require, format: 'cjs' },
	],
	external: [/^node:/, /\/node_modules\//],
	plugins: [nodeResolve()]
}

