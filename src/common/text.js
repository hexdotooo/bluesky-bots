import natsort from 'natsort'
const { default: natSort } = natsort // CJS export workaround

import { getBotState, setBotState         } from './state.js'
import { dynamicImport, oneIn, randomItem } from './utils.js'

export function randomWord (list, options) {
	const word = randomItem(list)

	if (options?.capitalize)
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

	const text = items[currentItem].replace('<br>', '\n')

	currentItem++

	if (currentItem === items.length) currentItem = 0
	state.item[mode] = currentItem

	setBotState({ state, botName })

	return text
}

export const loadRecipes =
	async botName => await dynamicImport(`./src/bots/${botName}/data/recipes.js`)

// Process a recipe (grammar) for generating text, which may include other
// recipes within it
export function makeRecipe ({ recipes, recipeName }) {
	const recipeReducer = (itemsOut, element) => recipes[element]
		? itemsOut + makeRecipe({ recipes, recipeName: element })
		: itemsOut + element

	const processItem = element => Array.isArray(element)
		? element.reduce(recipeReducer, '')
		: element

	let { rare, items } = recipes[recipeName]

	// Try for rare items, in increasing order of likeliness
	if (rare)
		for (const chance in Object.keys(rare).sort(natSort({ desc: true })))
			if (oneIn(chance)) { // eg. chance value 10 means a 1 in 10 chance
				items = rare[chance].items
				break
			}

	// We may be processing a recipe that only contains rare items, so if the
	// gamble failed then there's nothing to process
	return items.length
		? processItem(randomItem(items))
		: ''
}
