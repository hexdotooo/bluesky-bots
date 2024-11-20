import minimist from 'minimist-lite'

import danceBandsBot from './bots/dance-bands-bot/index.js' // TODO: fix path
import everyTmnt from './bots/every-tmnt/index.js'
import howlBot from './bots/howl-bot/index.js'

import { post } from './common/bluesky.js'
import { errorQuit, getCurrentMinute, timestamp } from './common/utils.js'

import { ONE_HOUR, ONE_SECOND } from './common/constants.js'

const argv = minimist(process.argv.slice(2))

const bots = {
	'dance-bands-bot': {
		generator: danceBandsBot
	},
	'every-tmnt': {
		generator: everyTmnt
	},
	'howl-bot': {
		generator: howlBot,
		type: 'recital'
	}
}

const demo = argv.live === undefined

for (let bot in bots) {
	if (bots[bot].type === 'recital') {
		recitalBotFirstRun()
	}

	setInterval(
		() => post({
			bot,
			demo,
			text: bots[bot].generator({ demo })
		}),
		demo ? ONE_SECOND * 2 : ONE_HOUR
	)
}

function recitalBotFirstRun () {
// 	const currentMinute = getCurrentMinute()
// 	const statePath = get bot state path here
// 	const outputState = getOutputState(statePath)
// 	const outputMinute = outputState[mode].minute
//
// 	if !outputMinute set it to currentMinute - how? setOutputState I guess
//
// 	if outputMinute === currentMinute recite()
// 	else setTimeout to go next time the minute comes - calculate how long
// 	*then* setInterval
}
