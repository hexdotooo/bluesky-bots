import dotenvx from '@dotenvx/dotenvx'
import minimist from 'minimist-lite'

import danceBandsBot from './bots/dance-bands-bot/index.js'
import everyTmnt     from './bots/every-tmnt/index.js'
import howlBot       from './bots/howl-bot/index.js'

import { post                             } from './common/bluesky.js'
import { errorQuit                        } from './common/utils.js'
import { getMinutesUntilPostingTime       } from './common/state.js'
import { ONE_SECOND, ONE_MINUTE, ONE_HOUR } from './common/time.js'

dotenvx.config({ path: '.env.live' })

// TODO: Build this from a config file
// TODO: Posting minute
const bots = {
	'dance-bands-bot': {
		generator: danceBandsBot,
	},
	'every-tmnt': {
		generator: everyTmnt,
	},
	'howl-bot': {
		generator: howlBot,
		stateful:  true,
		interval:  3,
	},
}

let botNames = Object.keys(bots)

const options = minimist(process.argv.slice(2), {
	alias: {
		b: 'bot',
		c: 'count',
	},
})

// TODO: --help
const {
	bot: singleBotName,
	demo: demoMode,
	once: runOnce,
} = options

let {
	count: runCount,
} = options

// Option error checking. Typeof checks are because minimist-lite will combine
// values given to both forms of an aliased option into an array

if (singleBotName) {
	if (!demoMode)
		errorQuit('Demo mode is required to run a single bot only')
	if (typeof singleBotName !== 'string')
		errorQuit('Multiple names given for single bot mode')
	if (!botNames.includes(singleBotName))
		errorQuit(`Unknown bot requested, valid options are: ${botNames.sort().join(', ')}`)

	botNames = [ singleBotName ]
}

if (runCount) {
	if (typeof runCount !== 'number')
		errorQuit('Multiple values given for --count')
	if (runOnce)
		errorQuit('Specify either of --once or --count')
}

if (runOnce) runCount = 1

const botRuns = {}

for (const botName of botNames) {
	let firstPostDelay = ONE_MINUTE * getMinutesUntilPostingTime(botName)
	let postingInterval = ONE_HOUR

	const { interval: intervalHours } = bots[botName]

	if (intervalHours) {
		if (intervalHours % 1 !== 0)
			errorQuit(`Interval for ${botName} is not a round number`)

		postingInterval = ONE_HOUR * intervalHours
	}

	if (demoMode) {
		firstPostDelay = 0
		postingInterval = ONE_SECOND * 2
	}

	setTimeout(startRun, firstPostDelay, botName, postingInterval)
}

function startRun (botName, postingInterval) {
	botRuns[botName] = 0

	doPost(botName)
	setInterval(doPost, postingInterval, botName)
}

function doPost (botName) {
	if (runCount && botRuns[botName] === runCount)
		process.exit(0)

	const { generator, interval = 1 } = bots[botName]
	const text = generator({ demoMode })

	post({
		botName,
		demoMode,
		interval,
		text,
	})

	botRuns[botName]++
}
