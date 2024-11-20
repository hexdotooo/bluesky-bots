import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import chalk from 'chalk'
import { Temporal } from 'temporal-polyfill'

const padBotName = botName => botName.padEnd(15, ' ')

export function logPost ({ bot, demo, text }) {
	let logEntry = demo
		? chalk.red('[Demo: ')
		: chalk.hex('#FFCC33')('[')
	logEntry += chalk.hex('#FF9900').bold(padBotName(bot))
	logEntry += ' ' + timestamp()
	logEntry += demo
		? chalk.red('] ')
		: chalk.hex('#FFCC33')('] ')
	logEntry += text

	console.info(logEntry)
}

export function errorQuit (message) {
	console.error(`${chalk.red('[Error]')} ${message}`)
	process.exit(0)
}

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export function timestamp () {
	const pad = num => num.toString().padStart(2, '0')

	return Temporal.Now.instant().toLocaleString('en-GB', {
		timeZone: 'UTC',
		timeZoneName: 'short',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	})
}

export const getCurrentMinute = () => Temporal.Now.instant().minute

export function getOutputState (path) {
	const minute = getCurrentMinute()

	let outputState = {
		demo: {
			line: null,
			minute
		},
		live: {
			line: null,
			minute
		}
	}

	try {
		outputState = JSON.parse(
			readFileSync(
				resolve(path),
				{ encoding: 'utf8' }
			)
		)
	} catch (error) {
		if (error.code !== 'ENOENT') errorQuit(error.message)
	}

	return outputState
}

export function setOutputState ({ outputState, path }) {
	writeFileSync(path, JSON.stringify(outputState), 'utf8', error => {
		if (error) errorQuit(error.message)
	})
}
