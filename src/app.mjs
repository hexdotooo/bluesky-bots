import minimist from 'minimist-lite'

import danceBandsBot from './bots/dance-bands-bot/index.js'
import everyTmnt from './bots/every-tmnt/index.js'
import howlBot from './bots/howl-bot/index.js'

import { post } from './common/bluesky.js'
import { errorQuit, getMinutesUntilPostingTime } from './common/utils.js'

import { ONE_HOUR, ONE_SECOND } from './common/constants.js'

const argv = minimist(process.argv.slice(2))

// TODO: Build this from a config file
// TODO: Interval
// TODO: Posting minute
const bots = {
	'dance-bands-bot': {
		generator: danceBandsBot
	},
	'every-tmnt': {
		generator: everyTmnt
	},
	'howl-bot': {
		generator: howlBot,
		stateful: true
	}
}

// TODO: --help
const { bot, demo } = argv

let botNames = Object.keys(bots)

if (bot) {
	if (!demo) errorQuit('Demo mode is required to run a single bot only.')
	if (!botNames.includes(bot))
		errorQuit(`Unknown bot requested, valid options are: ${botNames.sort().join(', ')}`)

	botNames = [ bot ]
}

for (let botName of botNames) {
	let firstPostDelay = 0
	let postingInterval = ONE_HOUR

	if (demo)
		postingInterval = ONE_SECOND * 2
	else
		firstPostDelay = getMinutesUntilPostingTime(botName) * 60 * 1000

	setTimeout(() => {
		doPost(botName)
		setInterval(() => doPost(botName), postingInterval)
	}, firstPostDelay)
}

function doPost (botName) {
	post({
		botName,
		demo,
		text: bots[botName].generator({ mode: demo ? 'demo' : 'live' })
	})
}
