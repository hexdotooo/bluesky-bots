import { recite } from '../../common/text.js'
import { items } from './data/poem.js'

export default function howl ({ demoMode }) {
	return recite({ botName: 'howl-bot', items, demoMode })
}
