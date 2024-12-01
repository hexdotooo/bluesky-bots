import { oneIn, randomItem } from '../../common/utils.js'

import { recipes } from './recipes/index.js'

export default function generateBand () {
	const out = makeRecipe('bandName')

	// TODO: Eliminate whatever lead to this

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

	const recipe = recipes[name]

	// TODO: Change hardcoded "rare" and "extra rare" items into an array:
	// rareItems: [ { chance: 75, items: [] }, { chance: 50, items: [] } ]
	// Process in decreasing order of rarity until one is hit (or none are)

	const rareType = recipe.extraRare
		? 'extraRare'
		: recipe.rare
			? 'rare'
			: undefined

	let selectedItem

	if (rareType && oneIn(recipe[rareType].chance))
		selectedItem = randomItem(recipe[rareType].items)
	else if (recipe.chance)
		selectedItem = oneIn(recipe.chance) ? randomItem(recipe.items) : ''
	else
		selectedItem = randomItem(recipe.items)

	return processItem(selectedItem)
}
