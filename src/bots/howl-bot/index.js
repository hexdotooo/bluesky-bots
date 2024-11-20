import { recite } from '../../common/text.js'
import { lines } from './data/poem.js'

export default function howl ({ demo }) {
	return recite({ bot: 'howl-bot', lines, demo })
}
