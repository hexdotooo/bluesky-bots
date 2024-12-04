import r from './recipeNames.js'

export const base = {
	[r.BAND_NAME]: {
		items: [
			[ r.LEADER_POSSESSIVE_OR_THE, r.BAND_LABEL ],
		],
		rare: {
			chance: 50,
			items:  [
				[ r.FEMALE_LEADER_AND_HER, r.INSTRUMENT ],
				[ r.MALE_LEADER_AND_HIS, r.INSTRUMENT ],
				[ r.LEADER_SINGULAR_POSSESSIVE, ' Original ', r.BAND_LABEL ],
				[ r.LEADER_NAME, ' with string band' ],
				[ r.ALLITERATIVE_BAND ],
				[ r.NUMBER, ' ', r.LAST_NAME, r.SIBLINGS ],
			],
		},
		extraRare: {
			chance: 100,
			items:  [
				[
					'Happy ', r.LAST_NAME, r.SINGULAR_POSSESSIVE_UNGENDERED,
					'Happy-Go-Lucky ', r.MEMBER_NOUNS_H,
				],
				[
					'Rocky ', r.LAST_NAME, r.SINGULAR_POSSESSIVE_UNGENDERED,
					'Rocky Road ', r.MEMBER_NOUNS_R,
				],
			],
		},
	},
	[r.BAND_LABEL]: {
		items: [
			[ r.MEMBER_NOUNS ],
			[ r.MEMBER_NOUN_PREFIX, r.MEMBER_NOUNS ],
			[ r.PLACE, ' ', r.MEMBER_NOUN_PREFIX, r.MEMBER_NOUNS ],
			[ r.PLACE, ' ', r.MEMBER_NOUNS ],
			[ r.NUMBER, ' ', r.MEMBER_NOUNS ],
			[ r.MEMBER_NOUN_PREFIX, r.BAND_NUMERIC ],
			[ r.INSTRUMENT_OPTIONAL, r.BAND_NUMERIC ],
			[ r.BAND_NUMERIC ],
			[ r.ORCHESTRA ],
		],
	},
}
