import chalk from 'chalk'

import { timestamp } from './time.js'

function random (max) {
	return Math.floor(Math.random() * Math.floor(max))
}

export function randomItem (items) {
	return items[random(items.length)]
}

// TODO: Better name
export function getChance (chance) {
	return random(chance) === 1
}

const padBotName = botName => botName.padEnd(15, ' ')

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
	process.exit(0)
}
