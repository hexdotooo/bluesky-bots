import { loadRecipes, makeRecipe } from '../../common/text.js'

const recipeNames = await loadRecipes('dance-bands-bot')

export default function generate () {
	const out = makeRecipe(recipeNames.BAND_NAME)

	const boring = /^(?:[\w']+ ){1,2}\w+$/

	// Pobody's nerfect
	if (boring.test(out)) return generate()

	return out
}
