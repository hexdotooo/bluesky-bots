import { BskyAgent } from '@atproto/api'

import { logPost, errorQuit } from './utils.js'

const sessions = {}

export async function post ({ botName, interval, text }) {
	const agent = new BskyAgent({
		service:        'https://bsky.social',
		persistSession: (_, sessionData) => {
			sessions[botName] = sessionData
		},
	})

	if (!sessions[botName])
		try {
			const password = process.env[`PASSWORD_${botName.toUpperCase()}`]

			if (!password) errorQuit(`Can't log in! password_${botName} not set in .env`)

			await agent.login({
				identifier: `${botName}.bsky.social`,
				password,
			})
		} catch (error) {
			errorQuit(`Couldn't log in as ${botName}! Error was: ${error.message}`)
		}
	else
		try {
			await agent.resumeSession(sessions[botName])
		} catch (error) {
			errorQuit(`Couldn't resume session for ${botName}! Error was: ${error.message}`)
		}

	try {
		await agent.post({ text })
	} catch (error) {
		errorQuit(`Couldn't post to ${botName}! Error was: ${error.message}`)
	}

	logPost({ botName, interval, text })
}
