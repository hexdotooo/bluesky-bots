import { BskyAgent } from '@atproto/api'
import { env } from 'node:process'

import { logDemo, logPost, errorQuit, timestamp } from './utils.js'

let sessions = {}

function makeAgent (bot) {
	return new BskyAgent({
		service: 'https://bsky.social',
		persistSession: (_, sessionData) => {
			sessions[bot] = sessionData
		}
	})
}

async function login ({ agent, bot }) {
	const botName = bot.toLowerCase()

	const usernameField = `${botName}_username`
	const passwordField = `${botName}_password`

	if (!env[usernameField]) errorQuit(`Can't log in, ${botName} username not set in .env`)
	if (!env[passwordField]) errorQuit(`Can't log in, ${botName} password not set in .env`)

	await agent.login({
		identifier: env[usernameField],
		password:   env[passwordField]
	})
}

export async function post ({ bot, mode, text }) {
	if (mode === 'demo') {
		logDemo({ bot, text })
		return
	}

	const agent = makeAgent(bot)

	if (!sessions[bot]) {
		try {
			login({ agent, bot })
		} catch(error) {
			errorQuit(`Couldn't log in as ${bot}! Error was: ${error.message}`)
		}
	} else {
		try {
			await agent.resumeSession(sessions[bot])
		} catch(error) {
			errorQuit(`Couldn't resume session for ${bot}! Error was: ${error.message}`)
		}
	}

	try {
		await agent.post({ text })
	} catch(error) {
		errorQuit(`Couldn't post to ${bot}! Error was: ${error.message}`)
	}

	logPost(bot, text)
}
