import { readFileSync, writeFileSync } from 'node:fs'
import { resolve }                     from 'node:path'

import { getCurrentMinute } from './time.js'
import { errorQuit }        from './utils.js'

const getBotStatePath = botName => `./src/bots/${botName}/state.json`

// Bot state contains the minute of the hour it posts on and, for recital
// bots, the current line number of the text it's reciting in both live mode
// and demo mode
export function getBotState (botName) {
	let state = {
		// If not set in state, use current minute number for when to post
		minute: getCurrentMinute(),
		item:   {
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
