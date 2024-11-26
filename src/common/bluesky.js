import { BskyAgent } from '@atproto/api'
import { env } from 'node:process'

import { logPost, errorQuit, timestamp } from './utils.js'

let sessions = {}

async function login ({ agent, bot }) {
	const password = env[`password_${bot}`]

	if (!password) errorQuit(`Can't log in! password_${bot} not set in .env`)

	await agent.login({
		identifier: `${bot}.bsky.social`,
		password:   password
	})
}

export async function post ({ botName, demo, text }) {
	if (demo) {
		logPost({ botName, demo, text })
		return
	}

	const agent = new BskyAgent({
		service: 'https://bsky.social',
		persistSession: (_, sessionData) => {
			sessions[botName] = sessionData
		}
	})

	if (!sessions[botName]) {
		try {
			login({ agent, botName })
		} catch(error) {
			errorQuit(`Couldn't log in as ${botName}! Error was: ${error.message}`)
		}
	} else {
		try {
			await agent.resumeSession(sessions[botName])
		} catch(error) {
			errorQuit(`Couldn't resume session for ${botName}! Error was: ${error.message}`)
		}
	}

	try {
		await agent.post({ text })
	} catch(error) {
		errorQuit(`Couldn't post to ${bot}! Error was: ${error.message}`)
	}

	logPost({ bot, text })
}
