import { oneIn, randomItem } from '../../common/utils.js'

import { recipes } from './recipes/index.js'
import r from './recipes/recipeNames.js'

export default function generateBand () {
	const out = makeRecipe(r.BAND_NAME)

	const boring = /^(?:\w+ ){1,2}\w+$/

	if (boring.test(out)) return generateBand()

	return out
}

function makeRecipe (name) {
	const recipeReducer = (itemsOut, element) => recipes[element]
		? itemsOut + makeRecipe(element)
		: itemsOut + element

	const processItem = element => Array.isArray(element)
		? element.reduce(recipeReducer, '')
		: element

	let { rare, items } = recipes[name]

	if (rare)
		for (const chance in Object.keys(rare).sort((a, b) => b - a))
			if (oneIn(chance)) {
				items = rare[chance].items
				break
			}

	return items.length
		? processItem(randomItem(items))
		: ''
}
