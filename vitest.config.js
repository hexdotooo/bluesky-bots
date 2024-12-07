import { configDefaults, coverageConfigDefaults, defineConfig } from 'vitest/config'

const dataFilesGlob = '**/data/*.js'

export default defineConfig({
	test: {
		exclude: [
			...configDefaults.exclude,
			dataFilesGlob,
		],
		coverage: {
			exclude: [
				...coverageConfigDefaults.exclude,
				dataFilesGlob,
			],
		},
		onConsoleLog (log) {
			return !(/^\[Error\]/.test(log))
		},
	},
})
