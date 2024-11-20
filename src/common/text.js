import { errorQuit, getOutputState, setOutputState } from './utils.js'

export function randomWord (list, options) {
	const word = list[Math.floor(Math.random() * list.length)]

	if (options.capitalize)
		return word[0].toUpperCase() + word.slice(1)
	else
		return word
}

export function recite ({ bot, demo, lines }) {
	if (!/^[\w-]+$/.test(bot)) errorQuit(`Can't recite, invalid bot name specified: ${bot}`)

	const mode = demo ? 'demo' : 'live'

	const path = `./src/bots/${bot}/state.json`
	const outputState = getOutputState(path)
	const startAt = outputState[mode].line

	let lineNumber = startAt ?? 0

	let text = lines[lineNumber]

	lineNumber++

	if (lineNumber === lines.length) lineNumber = 0

	outputState[mode].line = lineNumber

	setOutputState({ outputState, path })

	return text
}
