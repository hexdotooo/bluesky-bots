import dotenvx  from '@dotenvx/dotenvx'
import minimist from 'minimist-lite'

import { post                             } from './common/bluesky.js'
import { dynamicImport, errorQuit         } from './common/utils.js'
import { getMinutesUntilPostingTime       } from './common/state.js'
import { ONE_SECOND, ONE_MINUTE, ONE_HOUR } from './common/time.js'

const config = await dynamicImport('./bots.config.json')

// TODO: Test whether DOTENV_PRIVATE_KEY LIVE is set, if not, demo mode
try {
	dotenvx.config({ path: config.envPath, strict: true })
} catch (error) {
	errorQuit(`Can't run: ${error.message}`)
}

// TODO: Config: posting minute

for (const botName of Object.keys(config.bots))
	try {
		config.bots[botName].generate =
			await dynamicImport(`./src/bots/${botName}/index.js`)
	} catch (error) {
		errorQuit(error)
	}

const options = minimist(process.argv.slice(2), {
	alias: {
		b: 'bot',
		c: 'count',
	},
})

// TODO: --help
const {
	demo: demoMode,      // Output to console only
	bot:  singleBotName, // Only demo a specific bot
	once: runOnce,       // Alias for --count 1
} = options

let {
	count: runCount,     // How many times to run in demo mode
} = options

// Option error checking. Typeof checks are because minimist-lite will combine
// values given to both forms of an aliased option into an array

let botNames = Object.keys(config.bots)

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

// TODO: State storage location outside of src/bots/bot-name
const botRuns = {}

// Run the bots - if a minute of the hour at when to post is in bot state,
// wait for it to come around - except in demo mode
for (const botName of botNames) {
	let firstPostDelay = ONE_MINUTE * getMinutesUntilPostingTime(botName)
	let postingInterval = ONE_HOUR

	const { interval: intervalHours } = config.bots[botName]

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

// Post for the first time, then schedule subsequent posts
function startRun (botName, postingInterval) {
	botRuns[botName] = 0

	doPost(botName)
	setInterval(doPost, postingInterval, botName)
}

function doPost (botName) {
	if (runCount && botRuns[botName] === runCount)
		process.exit(0)

	const { generate, interval = 1 } = config.bots[botName]
	const text = generate({ demoMode })

	post({
		botName,
		demoMode,
		interval,
		text,
	})

	botRuns[botName]++
}
