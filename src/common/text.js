import { getBotState, setBotState } from './state.js'
import { randomItem               } from './utils.js'

export function randomWord (list, options) {
	const word = randomItem(list)

	if (options.capitalize)
		return word[0].toUpperCase() + word.slice(1)
	else
		return word
}

// Recite an array of items sequentially, maintaining position across
// process runs
export function recite ({ botName, demoMode, items }) {
	const mode = demoMode ? 'demo' : 'live'

	const state = getBotState(botName)
	let currentItem = state.item[mode]

	const text = items[currentItem]

	currentItem++

	if (currentItem === items.length) currentItem = 0

	state.item[mode] = currentItem

	setBotState({ state, botName })

	return text
}
