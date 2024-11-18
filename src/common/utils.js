import chalk from 'chalk'

const padBotName = botName => botName.padEnd(15, ' ')

export function logDemo ({ bot, text }) {
	console.info(`${chalk.yellow('[Demo:')} ${chalk.cyan(padBotName(bot))}${chalk.yellow(']')} ${text}`)
}

export function logPost ({ bot, text }) {
	console.info(`${chalk.green('[' + padBotName(bot) + ']')} [${timestamp()}] ${text}`)
}

export function errorQuit (message) {
	console.error(`${chalk.red('[Error]')} ${message}`)
	process.exit(0)
}

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export function timestamp () {
	const pad = num => num.toString().padStart(2, '0')

	const date = new Date()

	return `${pad(date.getUTCDate())}/${pad(date.getUTCMonth() + 1)}/${date.getUTCFullYear()} `
		+ `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())} UTC`
}
