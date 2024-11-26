import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import chalk from 'chalk'
import { Temporal } from 'temporal-polyfill'

const padBotName = botName => botName.padEnd(15, ' ')

export function logPost ({ botName, demoMode, text }) {
	let logEntry = demoMode
		? chalk.red('[Demo: ')
		: chalk.hex('#FFCC33')('[')
	logEntry += chalk.hex('#FF9900').bold(padBotName(botName))
	logEntry += ' ' + timestamp()
	logEntry += demoMode
		? chalk.red('] ')
		: chalk.hex('#FFCC33')('] ')
	logEntry += text

	console.info(logEntry)
}

export function errorQuit (message) {
	console.error(`${chalk.red('[Error]')} ${message}`)
	process.exit(0)
}

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// TODO: Configurable locale and time zone
export const timestamp = () => Temporal.Now.instant().toLocaleString(
	'en-GB',
	{
		timeZone: 'UTC',
		timeZoneName: 'short',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	}
)

export const getCurrentMinute = () => Temporal.Now.instant().toLocaleString('en-GB', { minute: 'numeric' })

const getBotStatePath = botName => `./src/bots/${botName}/state.json`

export function getBotState (botName) {
	const minute = getCurrentMinute()

	let state = {
		minute,
		item: {
			demo: 0,
			live: 0
		}
	}

	try {
		state = JSON.parse(
			readFileSync(
				resolve(getBotStatePath(botName)),
				{ encoding: 'utf8' }
			)
		)
	} catch (error) {
		if (error.code !== 'ENOENT') errorQuit(error.message)
	}

	return state
}

export function setBotState ({ state, botName }) {
	writeFileSync(getBotStatePath(botName), JSON.stringify(state), 'utf8', error => {
		if (error) errorQuit(error.message)
	})
}

export function getMinutesUntilPostingTime (botName) {
	const currentMinute = getCurrentMinute()

	const outputMinute = getBotState(botName).minute

	let minutesToWait = 0

	if (outputMinute > currentMinute) {
		minutesToWait = outputMinute - currentMinute
	} else if (outputMinute < currentMinute) {
		minutesToWait = 60 - currentMinute + outputMinute
	} else if (outputMinute === 0) {
		minutesToWait = 60 - current
	}

	return minutesToWait
}
