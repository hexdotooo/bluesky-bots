import { randomWord } from '../../common/text.js'
import { oneIn      } from '../../common/utils.js'

import { adjectives } from './data/adjectives.js'
import { nouns }      from './data/nouns.js'

export default function generate () {
	const word = list => randomWord(list, { capitalize: true })

	let out = `${word(adjectives)} ${word(adjectives)} ${word(adjectives)} ${word(nouns)}s`

	if (oneIn(10))
		out += `, ${word(nouns).toLowerCase()}s in a ${word(nouns).toLowerCase()}, ${word(nouns).toLowerCase()} power!`

	return out
}
