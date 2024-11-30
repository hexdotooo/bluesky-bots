import { readFileSync, writeFileSync } from 'node:fs'
import { resolve }                     from 'node:path'

import { getCurrentMinute } from './time.js'
import { errorQuit }        from './utils.js'

const getBotStatePath = botName => `./src/bots/${botName}/state.json`

export function getBotState (botName) {
	const minute = getCurrentMinute()

	let state = {
		minute,
		item: {
			demo: 0,
			live: 0,
		},
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

	if (outputMinute > currentMinute)
		minutesToWait = outputMinute - currentMinute
	else if (outputMinute < currentMinute)
		minutesToWait = 60 - currentMinute + outputMinute
	else if (outputMinute === 0)
		minutesToWait = 60 - currentMinute

	return minutesToWait
}
