import { exit,                        } from 'node:process'
import { resolve                      } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import chalk from 'chalk'

import { timestamp } from './time.js'

// Suppress warnings about JSON module imports being experimental - requires
// app to be run with node --no-warnings
process.on('warning', warning => {
	warning.name !== 'ExperimentalWarning' && console.warn(warning)
})

// Path is relative to bluesky-bots root
export async function dynamicImport (path) {
	const importPath = pathToFileURL(resolve(path)).href

	const moduleIsJson = /\.json$/.test(path)

	// Import attributes are currently at TC39 stage 3 and ESLint only
	// adds syntax support at stage 4. Seems like there's no way to stop
	// it complaining here short of transpiling. I can live with it
	const imported = await import(
		importPath,	moduleIsJson ? { with: { type: 'json' } } : {}
	)

	return imported.default
}

export const random = max => Math.floor(Math.random() * Math.floor(max))

export const randomItem = items => items[random(items.length)]

export const oneIn = chance => random(chance) === 1

export const padBotName = botName => botName.padEnd(15, ' ')

export function logPost ({ botName, interval, demoMode, text }) {
	let logEntry = demoMode
		? chalk.red('[Demo: ')
		: chalk.hex('#FFCC33')('[')
	logEntry += chalk.hex('#FF9900').bold(padBotName(botName))
	logEntry += ` (${interval.toString().padStart(2, '0')}h)`
	logEntry += ' ' + timestamp()
	logEntry += demoMode
		? chalk.red('] ')
		: chalk.hex('#FFCC33')('] ')
	logEntry += text

	console.info(logEntry)
}

export function errorQuit (message) {
	console.error(`${chalk.red('[Error]')} ${message}`)
	exit(1)
}
