import plur from 'plur'

import { randomWord } from '../../common/text.js'
import { oneIn      } from '../../common/utils.js'

import { a1 } from './data/adjectives-1-syllable.js'
import { a2 } from './data/adjectives-2-syllables.js'
import { n1 } from './data/nouns-1-syllable.js'
import { n2 } from './data/nouns-2-syllables.js'

function pluralCheck (word, generator) {
	const pluralAddsSyllable = /(?:[cgs]e|ch|s|x)$/

	while (word)
		if (pluralAddsSyllable.test(word))
			word = generator()
		else
			break

	return word
}

function adjNoun ({ capitalize, plural } = {}) {
	const adj = randomWord(a1, { capitalize })

	const makeNoun = () => randomWord(n1, { capitalize })

	let noun = makeNoun()

	if (plural) {
		noun = pluralCheck(noun, makeNoun)
		noun = plur(noun)
	}

	return `${adj} ${noun}`
}

export default function generate () {
	const makeAdj           = () => randomWord(a2, { capitalize: true })
	const makeNoun          = ({ capitalize } = {}) => randomWord(n2, { capitalize })
	const makeAdjNoun       = ({ capitalize } = {}) => adjNoun({ capitalize })
	const makeAdjPluralNoun = ({ capitalize } = {}) => adjNoun({ capitalize, plural: true })

	const makeThing = () => oneIn(5) ? makeAdjNoun() : makeNoun()

	function makeThings ({ capitalize } = {}) {
		let things

		if (oneIn(5))
			things = makeAdjPluralNoun({ capitalize })
		else {
			things = makeNoun({ capitalize })
			things = pluralCheck(things, makeNoun)
			things = plur(things)
		}

		return things
	}

	const mainThings = makeThings({ capitalize: true })

	let out = `${makeAdj()} ${makeAdj()} ${makeAdj()} ${mainThings}`

	if (oneIn(5)) {
		const inThing = makeThing()

		const article = /^[aeiou]/.test(inThing) ? 'an' : 'a'

		out += `, ${makeThings()} in ${article} ${inThing}, ${makeThing()} power!`
	}

	return out
}
