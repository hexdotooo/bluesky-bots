import { assert, test } from 'vitest'
import { getCurrentMinute, timestamp } from '../../src/common/time.js'

test('Get current minute', () => {
	const minute = getCurrentMinute()

	assert.include(
		[ ...Array(60).keys() ], parseInt(minute)
	)
})

test('Timestamp', t => {
	assert.isTrue(
		/^\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2} UTC/.test(timestamp())
	)
})
