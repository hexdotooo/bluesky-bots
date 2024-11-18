
import { randomWord } from '../../common/text.js'

import { adjectives } from './data/adjectives.js'
import { nouns } from './data/nouns.js'

export default function everyTmnt () {
	const word = list => randomWord(list, { capitalize: true })

	return `${word(adjectives)} ${word(adjectives)} ${word(adjectives)} ${word(nouns)}s`
}
