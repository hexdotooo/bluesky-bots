import { Temporal } from 'temporal-polyfill'

export const ONE_SECOND = 1000
export const ONE_MINUTE = ONE_SECOND * 60
export const ONE_HOUR = ONE_MINUTE * 60

// TODO: Configurable locale and time zone
export const timestamp = () => Temporal.Now.instant().toLocaleString(
	'en-GB',
	{
		timeZone:     'UTC',
		timeZoneName: 'short',
		year:         'numeric',
		month:        '2-digit',
		day:          '2-digit',
		hour:         '2-digit',
		minute:       '2-digit',
		second:       '2-digit',
	}
)

export const getCurrentMinute = () => Temporal.Now.instant().toLocaleString(
	'en-GB',
	{ minute: 'numeric' }
)
