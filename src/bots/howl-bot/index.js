import { recite } from '../../common/text.js'
import { lines } from './data/poem.js'

const howl = ({ mode }) => recite ({ bot: 'howl-bot', lines, mode})
export default howl
