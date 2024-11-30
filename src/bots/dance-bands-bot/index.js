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
	const recipe = recipes[name]

	let itemsToProcess = recipe.items

	// TODO: Change hardcoded "rare" and "extra rare" items into an array:
	// rareItems: [ { chance: 75, items: [] }, { chance: 50, items: [] } ]
	// Process in decreasing order of rarity until one is hit (or none are)

	if (recipe.extraRare && oneIn(recipe.extraRare.chance))
		itemsToProcess = recipe.extraRare.items
	else if (recipe.rare && oneIn(recipe.rare.chance))
		itemsToProcess = recipe.rare.items

	// TODO: Processing the entire tree and picking one item is not efficient.
	// A random item should be chosen first, then processed

	const recipeItems = itemsToProcess.map( item => {
		if (Array.isArray(item))
			return item.reduce( (itemsOut, recipe) => {
				return recipes[recipe]
					? itemsOut + makeRecipe(recipe)
					: itemsOut + recipe
			}, '')
		else
			return item
	})

	if (!recipe.chance) return randomItem(recipeItems)

	let out = ''

	if (oneIn(recipe.chance)) {
		out = randomItem(recipeItems)
		out = recipe.space === 'before' ? ` ${out}` : `${out} `
	}

	return out
}
