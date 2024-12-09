import { afterEach, beforeEach, describe, expect, vi, assert, test } from 'vitest'

import * as Process from 'node:process'

import {
	dynamicImport,
	errorQuit,
	logPost,
	padBotName,
	random,
	randomItem
} from '../../src/common/utils.js'

vi.mock('node:process', () => ({
	__esModule: true,
	exit:       vi.fn(),
}))

vi.mock('console', () => ({
	__esModule: true,
	error:      vi.fn(),
	info:       vi.fn(),
}))

const mockTimestamp = '01/01/2000, 12:00:00 UTC'

vi.mock('../../src/common/time.js', () => ({
	timestamp: vi.fn(() => mockTimestamp),
}))

describe('Logging', () => {
	let logInfoSpy

	const botName = 'test'
	const mockBotName = botName.padEnd(15, ' ')

	beforeEach(() => {
		logInfoSpy = vi.spyOn(console, 'info')
	})

	afterEach(() => {
		logInfoSpy.mockReset()
	})

	test('Pad bot name for log entries', () => {
		assert.strictEqual(
			padBotName(botName),
			mockBotName
		)
	})

	const mockText = 'Lorem ipsum'
	const mockInterval = '01'
	const mockMetadata = `${mockBotName} (${mockInterval}h) ${mockTimestamp}`

	test('Log a post, live mode', () => {
		logPost({
			botName,
			interval: 1,
			text:     mockText,
		})

		expect(logInfoSpy).toHaveBeenCalled()
		expect(logInfoSpy).toHaveBeenCalledWith(`[${mockMetadata}] ${mockText}`)
	})

	test('Log a post, demo mode', () => {
		logPost({
			botName,
			interval: 1,
			demoMode: true,
			text:     mockText,
		})

		expect(logInfoSpy).toHaveBeenCalled()
		expect(logInfoSpy).toHaveBeenCalledWith(`[Demo: ${mockMetadata}] ${mockText}`)
	})
})

describe('Dynamic imports', () => {
	test('Import a JS module', async () => {
		assert.strictEqual(
			(await dynamicImport('./test/common/__mocks__/mockModule.js')).mockFunction(),
			5
		)
	})

	test('Import a JSON module', async () => {
		assert.strictEqual(
			(await dynamicImport('./test/common/__mocks__/mockJson.json')).mockData,
			5
		)
	})
})

describe('General utilities', () => {
	let exitSpy, errorLogSpy

	beforeEach(() => {
		exitSpy = vi.spyOn(Process, 'exit')
		errorLogSpy = vi.spyOn(console, 'error')
	})

	afterEach(() => {
		exitSpy.mockReset()
		errorLogSpy.mockReset()
	})

	test('Quit with an error message', () => {
		errorQuit('Exit reason')

		expect(errorLogSpy).toHaveBeenCalled()
		expect(errorLogSpy).toHaveBeenCalledWith('[Error] Exit reason')
		expect(exitSpy).toHaveBeenCalled()
		expect(exitSpy).toHaveBeenCalledWith(1)
	})
})

describe('Random functions', () => {
	test('Pick a random number', () => {
		const aRandomNumber = random(1000)

		assert.isNumber(aRandomNumber)

		const unique = new Set();

		[ ...Array(1000).keys() ].forEach(num => {
			unique.add(random(1000))
		})

		assert(
			[ ...unique.keys() ].length > 500
		)
	})

	test('Pick a random item', () => {
		const unique = new Set()

		const thousand = [ ...Array(1000).keys() ]

		thousand.forEach(num => {
			unique.add(randomItem(thousand))
		})

		assert.isAtLeast(
			[ ...unique.keys() ].length, 500
		)
	})
})
