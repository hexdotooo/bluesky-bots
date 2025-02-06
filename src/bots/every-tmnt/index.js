import plur from 'plur'

import { randomWord } from '../../common/text.js'
import { oneIn      } from '../../common/utils.js'

import { adjectives } from './data/adjectives.js'
import { nouns }      from './data/nouns.js'

// TODO: 1-syl adj 1-syl nouns
export default function generate () {
	const word = list => randomWord(list, { capitalize: true })

	let object = word(nouns)

	const pluralAddsSyllable = /(?:[cgs]e|ch|s|x)$/
	const startsWithVowel    = /^[aeiou]/

	while (object)
		if (pluralAddsSyllable.test(object))
			object = word(nouns)
		else
			break

	let out = `${word(adjectives)} ${word(adjectives)} ${word(adjectives)} ${plur(object)}`

	if (oneIn(10)) {
		const specialObject = word(nouns).toLowerCase()
		out += `, ${word(nouns).toLowerCase()}s in ${startsWithVowel.test(specialObject) ? 'an' : 'a'} ${specialObject}, ${word(nouns).toLowerCase()} power!`
	}

	return out
}
