import { dirname, resolve             } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import chalk from 'chalk'

import { timestamp } from './time.js'

export const random = max => Math.floor(Math.random() * Math.floor(max))

export const randomItem = items => items[random(items.length)]

export const oneIn = chance => random(chance) === 1

export function logPost ({ botName, interval, demoMode, text }) {
	const padBotName = botName => botName.padEnd(15, ' ')

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

export async function dynamicImport (path) {
	const importPath = pathToFileURL(
		resolve(
			dirname(
				fileURLToPath(import.meta.url)
			), path
		)
	).href

	let imported

	try {
		imported = await import(importPath)
	} catch (error) {
		errorQuit(`Couldn't import ${path}: ${error}`)
	}

	return imported
}

export function errorQuit (message) {
	console.error(`${chalk.red('[Error]')} ${message}`)
	process.exit(0)
}
