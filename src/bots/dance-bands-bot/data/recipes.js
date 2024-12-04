import recipeNames    from './recipeNames.js'
import { band }       from './band.js'
import { base }       from './base.js'
import { instrument } from './instrument.js'
import { leader }     from './leader.js'
import { names }      from './names.js'
import { orchestra }  from './orchestra.js'
import { place }      from './place.js'

const recipes = Object.assign(
	{}, band, base, instrument, leader, names, band, orchestra, place
)

export default { recipeNames, recipes }
