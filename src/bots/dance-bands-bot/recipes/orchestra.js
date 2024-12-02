import r from './recipeNames.js'

export const orchestra = {
	[r.ORCHESTRA]: {
		items: [
			[
				r.PLACE, ' ', r.ORCHESTRA_SPECIALTY, 'Orchestra',
				r.ORCHESTRA_SUFFIX,
			],
			[ r.PLACE, ' Orchestra', r.ORCHESTRA_SUFFIX ],
			[ r.ORCHESTRA_SPECIALTY, 'Orchestra', r.ORCHESTRA_SUFFIX ],
			[ r.ORCHESTRA_SPECIALTY, 'Orchestra of ', r.GENERAL_PLACE ],
		],
	},
	[r.ORCHESTRA_SPECIALTY]: {
		items: [
			[ r.ORCHESTRA_SPECIALTY_PREFIX, r.ORCHESTRA_SPECIALTY_MAIN ],
		],
	},
	[r.ORCHESTRA_SPECIALTY_PREFIX]: {
		items: [],
		rare:  {
			10: {
				items: [
					'Arcadia Peacock ', 'Benson ', 'Continental ', 'Elite ',
					'Hotel Astor ', 'Hour of Charm ', 'International ',
					'Jazzarimba ', 'Million Dollar ', 'Party Dance ', 'Royal ',
					'Specialty ', 'Victor ',
				],
			},
		},
	},
	[r.ORCHESTRA_SPECIALTY_MAIN]: {
		items: [
			'All-Girl ', 'Cafe ', 'Calypso ', 'Concert ', 'Dance ',
			'Folk ', 'Hilo Hawaiian ', 'Pier ', 'Rainbo ', 'Salon ',
			'Waltz ',
		],
	},
	[r.ORCHESTRA_SUFFIX]: {
		items: [],
		rare:  {
			10: {
				items: [
					' and Choir', ' De Luxe',
				],
			},
		},
	},
}
