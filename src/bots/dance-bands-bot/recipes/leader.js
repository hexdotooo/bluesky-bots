import r from './recipeNames.js'

export const leader = {
	[r.LEADER_POSSESSIVE_OR_THE]: {
		items: [
			[ r.LEADER_SINGULAR_POSSESSIVE ],
			[ r.LEADERS, ' and their ' ],
			[ 'The ' ],
		],
	},
	[r.LEADER_SINGULAR_POSSESSIVE]: {
		items: [
			[ r.FEMALE_NAME, ' and her ' ],
			[ r.MALE_NAME, ' and his ' ],
			[ r.LAST_NAME, "'s " ],
			[ r.LEADER_NAME, r.SINGULAR_POSSESSIVE_UNGENDERED ],
		],
	},
	[r.LEADER_NAME]: {
		items: [
			[ r.MALE_NAME ],
			[ r.FEMALE_NAME ],
		],
	},
	[r.SINGULAR_POSSESSIVE_UNGENDERED]: {
		items: [
			[ "'s " ],
			[ ' and the ' ],
			[ ' with the ' ],
		],
	},
	[r.LEADERS]: {
		items: [
			[ r.MALE_NAME, ' and ', r.MALE_NAME ],
			[ r.MALE_FIRST_NAME, ' and ', r.MALE_NAME ],
			[ r.FEMALE_FIRST_NAME, ' and ', r.FEMALE_NAME ],
			[ r.LAST_NAME, ' and ', r.LAST_NAME ],
			[ 'The ', r.LAST_NAME, r.SIBLINGS ],
			[ 'The King\'s Jesters' ],
		],
	},
	[r.SIBLINGS]: {
		items: [ ' Brothers', ' Sisters' ],
	},
}
