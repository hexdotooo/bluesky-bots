import minimist from 'minimist-lite'

import danceBandsBot from './bots/dance-bands-bot/index.js' // TODO: fix path
import everyTmnt from './bots/every-tmnt/index.js'
import howlBot from './bots/howl-bot/index.js'

import { post } from './common/bluesky.js'
import { errorQuit, timestamp } from './common/utils.js'

import { ONE_HOUR, ONE_SECOND } from './common/constants.js'

const argv = minimist(process.argv.slice(2))

// TODO: Configuration file
const bots = {
	danceBandsBot, everyTmnt, howlBot
}

const mode = argv.production ? 'production' : 'demo'

for (let bot in bots) {
	setInterval(
		() => post({
			bot,
			text: bots[bot]({ mode }),
			mode
		}),
		mode === 'production' ? ONE_HOUR : ONE_SECOND * 2
	)
}
