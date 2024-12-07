import { afterEach, beforeEach, describe, expect, vi, assert, test } from 'vitest'

import { errorQuit, random, randomItem } from '../../src/common/utils.js'

import * as Process from 'node:process'

vi.mock('node:process', () => ({
	__esModule: true,
	exit:       vi.fn(),
}))

vi.mock('console', () => ({
	__esModule: true,
	error:      vi.fn(),
}))

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

	test('errorQuit()', () => {
		errorQuit('Exit reason')

		expect(errorLogSpy).toHaveBeenCalled()
		expect(errorLogSpy).toHaveBeenCalledWith('[Error] Exit reason')
		expect(exitSpy).toHaveBeenCalled()
		expect(exitSpy).toHaveBeenCalledWith(1)
	})
})

describe('Random functions', () => {
	test('random()', () => {
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

	test('randomItem()', () => {
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
