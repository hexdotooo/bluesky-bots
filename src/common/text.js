import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { errorQuit } from './utils.js'

export function randomWord (list, options) {
	const word = list[Math.floor(Math.random() * list.length)]

	if (options.capitalize)
		return word[0].toUpperCase() + word.slice(1)
	else
		return word
}

function getCurrentLines (path) {
	let currentLines = {}

	try {
		currentLines = JSON.parse(
			readFileSync(
				resolve(path),
				{ encoding: 'utf8' }
			)
		)
	} catch (error) {
		if (error.code !== 'ENOENT') errorQuit(error.message)

		currentLines = { demo: 0, live: 0 }
	}

	return currentLines
}

function setCurrentLines ({ currentLines, path }) {
	writeFileSync(path, JSON.stringify(currentLines), 'utf8', error => {
		if (error) errorQuit(error.message)
	})
}

export function recite ({ bot, lines, mode }) {
	if (!/^[\w-]+$/.test(bot)) errorQuit(`Can't recite, invalid bot name specified: ${bot}`)

	const path = `./src/bots/${bot}/status.json`
	const currentLines = getCurrentLines(path)
	const startAt = currentLines[mode]

	let lineNumber = startAt ?? 0

	let text = lines[lineNumber]

	lineNumber++

	if (lineNumber === lines.length) lineNumber = 0

	currentLines[mode] = lineNumber

	setCurrentLines({ currentLines, path })

	return text
}
