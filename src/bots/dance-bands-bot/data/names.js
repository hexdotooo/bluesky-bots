import r from './recipeNames.js'

export const names = {
	[r.ADJECTIVE]: {
		items: [],
		rare:  {
			20: {
				items: [
					'Cactus ', 'General ', 'Jolly ', "Smilin' ",
				],
			},
		},
	},
	[r.FEMALE_NAME]: {
		items: [ [ r.FEMALE_FIRST_NAME, ' ', r.LAST_NAME ] ],
	},
	[r.MALE_NAME]: {
		items: [
			[ r.ADJECTIVE, r.MALE_FIRST_NAME, ' ', r.LAST_NAME, r.HONORIFIC ],
			[
				r.MALE_FIRST_NAME, r.MIDDLE_INITIAL_OR_NICKNAME,
				r.LAST_NAME, r.HONORIFIC,
			],
		],
		rare: {
			75: {
				items: [
					[ '"Happy" ', r.MALE_FIRST_NAME_H, ' ', r.LAST_NAME_H ],
				],
			},
		},
	},
	[r.FEMALE_FIRST_NAME]: {
		items: [
			[ r.FEMALE_FIRST_NAME_A ], [ r.FEMALE_FIRST_NAME_B ],
			[ r.FEMALE_FIRST_NAME_C ], [ r.FEMALE_FIRST_NAME_D ],
			[ r.FEMALE_FIRST_NAME_E ], [ r.FEMALE_FIRST_NAME_G ],
			[ r.FEMALE_FIRST_NAME_H ], [ r.FEMALE_FIRST_NAME_I ],
			[ r.FEMALE_FIRST_NAME_J ], [ r.FEMALE_FIRST_NAME_K ],
			[ r.FEMALE_FIRST_NAME_L ], [ r.FEMALE_FIRST_NAME_M ],
			[ r.FEMALE_FIRST_NAME_N ], [ r.FEMALE_FIRST_NAME_O ],
			[ r.FEMALE_FIRST_NAME_P ], [ r.FEMALE_FIRST_NAME_R ],
			[ r.FEMALE_FIRST_NAME_S ], [ r.FEMALE_FIRST_NAME_V ],
		],
	},
	[r.FEMALE_FIRST_NAME_A]: {
		items: [ 'Anita', 'Ann' ],
	},
	[r.FEMALE_FIRST_NAME_B]: {
		items: [ 'Bessie' ],
	},
	[r.FEMALE_FIRST_NAME_C]: {
		items: [ 'Carrie', 'Cindy', 'Connie' ],
	},
	[r.FEMALE_FIRST_NAME_D]: {
		items: [ 'Dolly', 'Dorothy' ],
	},
	[r.FEMALE_FIRST_NAME_E]: {
		items: [ 'Elizabeth', 'Ellen', 'Elsie', 'Ethel', 'Evelyn' ],
	},
	[r.FEMALE_FIRST_NAME_G]: {
		items: [ 'Georgia', 'Ginny', 'Gloria' ],
	},
	[r.FEMALE_FIRST_NAME_H]: {
		items: [ 'Helen' ],
	},
	[r.FEMALE_FIRST_NAME_I]: {
		items: [ 'Irene' ],
	},
	[r.FEMALE_FIRST_NAME_J]: {
		items: [ 'Jane', 'June' ],
	},
	[r.FEMALE_FIRST_NAME_K]: {
		items: [ 'Kelly', 'Kitty' ],
	},
	[r.FEMALE_FIRST_NAME_L]: {
		items: [ 'Lauren', 'Louise', 'Lucy', 'Lynn' ],
	},
	[r.FEMALE_FIRST_NAME_M]: {
		items: [
			'Margaret', 'Marie', 'Marion', 'Martha', 'Mary', 'Maxine',
			'Merline',
		],
	},
	[r.FEMALE_FIRST_NAME_N]: {
		items: [ 'Nellie', 'Nora' ],
	},
	[r.FEMALE_FIRST_NAME_O]: {
		items: [ 'Olive' ],
	},
	[r.FEMALE_FIRST_NAME_P]: {
		items: [ 'Patsy' ],
	},
	[r.FEMALE_FIRST_NAME_R]: {
		items: [ 'Rosetta', 'Rosy', 'Ruby' ],
	},
	[r.FEMALE_FIRST_NAME_S]: {
		items: [ 'Sally', 'Shannon', 'Sibyl' ],
	},
	[r.FEMALE_FIRST_NAME_V]: {
		items: [ 'Virginia', 'Vivian' ],
	},
	[r.MALE_FIRST_NAME]: {
		items: [
			[ r.MALE_FIRST_NAME_A ], [ r.MALE_FIRST_NAME_B ],
			[ r.MALE_FIRST_NAME_C ], [ r.MALE_FIRST_NAME_D ],
			[ r.MALE_FIRST_NAME_E ], [ r.MALE_FIRST_NAME_F ],
			[ r.MALE_FIRST_NAME_G ], [ r.MALE_FIRST_NAME_H ],
			[ r.MALE_FIRST_NAME_J ], [ r.MALE_FIRST_NAME_K ],
			[ r.MALE_FIRST_NAME_L ], [ r.MALE_FIRST_NAME_M ],
			[ r.MALE_FIRST_NAME_O ], [ r.MALE_FIRST_NAME_P ],
			[ r.MALE_FIRST_NAME_R ], [ r.MALE_FIRST_NAME_S ],
			[ r.MALE_FIRST_NAME_T ], [ r.MALE_FIRST_NAME_V ],
			[ r.MALE_FIRST_NAME_W ],
		],
	},
	[r.MALE_FIRST_NAME_A]: {
		items: [ 'Abbey', 'Albert', 'Arthur' ],
	},
	[r.MALE_FIRST_NAME_B]: {
		items: [ 'Bill', 'Bob', 'Bobby', 'Bud',	'Buddy', 'Bull Moose' ],
	},
	[r.MALE_FIRST_NAME_C]: {
		items: [ 'Carter', 'Clyde', 'Curly' ],
	},
	[r.MALE_FIRST_NAME_D]: {
		items: [ 'Donnie' ],
	},
	[r.MALE_FIRST_NAME_E]: {
		items: [ 'Earl', 'Eddie', 'Eddy', 'Edward', 'Edwin', 'Ernest' ],
	},
	[r.MALE_FIRST_NAME_F]: {
		items: [ 'Frank', 'Frankie', 'Fred', 'Freddie', 'Fritz' ],
	},
	[r.MALE_FIRST_NAME_G]: {
		items: [ 'Gene', 'George', 'Glen' ],
	},
	[r.MALE_FIRST_NAME_H]: {
		items: [ 'Hank', 'Hector', 'Henry', 'Hot Lips', 'Howard' ],
	},
	[r.MALE_FIRST_NAME_J]: {
		items: [ 'Jack', 'James', 'John', 'Johnnie', 'Johnny' ],
	},
	[r.MALE_FIRST_NAME_K]: {
		items: [ 'Karl' ],
	},
	[r.MALE_FIRST_NAME_L]: {
		items: [ 'Louis', 'Lowell' ],
	},
	[r.MALE_FIRST_NAME_M]: {
		items: [ 'Mickey', 'Mitchell' ],
	},
	[r.MALE_FIRST_NAME_O]: {
		items: [ 'Ollie', 'Oscar' ],
	},
	[r.MALE_FIRST_NAME_P]: {
		items: [ 'Pee Wee' ],
	},
	[r.MALE_FIRST_NAME_R]: {
		items: [ 'Ray', 'Red', 'Robin', 'Roger', 'Rusty' ],
	},
	[r.MALE_FIRST_NAME_S]: {
		items: [ 'Sammy', 'Scotty', 'Seymour', 'Smokey', 'Sonny', 'Stuff' ],
	},
	[r.MALE_FIRST_NAME_T]: {
		items: [ 'Tab', 'Ted', 'Thomas', 'Tiny' ],
	},
	[r.MALE_FIRST_NAME_V]: {
		items: [ 'Vaughn' ],
	},
	[r.MALE_FIRST_NAME_W]: {
		items: [ 'Walter', 'Wayne', 'Wendell', 'Wilbert', 'Willie', 'Wilson' ],
	},
	[r.MIDDLE_INITIAL_OR_NICKNAME]: {
		items: [
			' ',
		],
		rare: {
			25: {
				items: [
					' A. ', ' B. ', ' C. ', ' D. ', ' E. ', ' F. ', ' G. ',
					' H. ',	' I. ', ' J. ', ' K. ',	' L. ', ' M. ', ' N. ',
					' O. ', ' P. ',	' Q. ', ' R. ', ' S. ', ' T. ', ' U. ',
					' V. ',	' W. ', ' X. ',	' Y. ', ' Z. ',
					' "Finkelschnitz" ', ' "Red" ', ' "Scat" ',	' "Stomp" ',
				],
			},
		},
	},
	[r.LAST_NAME]: {
		items: [
			[ r.LAST_NAME_A ], [ r.LAST_NAME_B ], [ r.LAST_NAME_C ],
			[ r.LAST_NAME_D ], [ r.LAST_NAME_F ], [ r.LAST_NAME_G ],
			[ r.LAST_NAME_H ], [ r.LAST_NAME_J ], [ r.LAST_NAME_K ],
			[ r.LAST_NAME_L ], [ r.LAST_NAME_M ], [ r.LAST_NAME_P ],
			[ r.LAST_NAME_R ], [ r.LAST_NAME_S ], [ r.LAST_NAME_T ],
			[ r.LAST_NAME_W ],
		],
	},
	[r.LAST_NAME_A]: {
		items: [
			'Adair', 'Adams', 'Allen', 'Ayres',
		],
	},
	[r.LAST_NAME_B]: {
		items: [
			'Balmer', 'Baranco', 'Baur', 'Bechet', 'Brown', 'Bostic', 'Burke',
		],
	},
	[r.LAST_NAME_C]: {
		items: [
			'Carlson', 'Cletro', 'Crayton', 'Crosby', 'Costa',
		],
	},
	[r.LAST_NAME_D]: {
		items: [
			'Dixon',
		],
	},
	[r.LAST_NAME_F]: {
		items: [
			'Fox', 'Fuller',
		],
	},
	[r.LAST_NAME_G]: {
		items: [
			'Gershwin', 'Gray',
		],
	},
	[r.LAST_NAME_H]: {
		items: [
			'Hall', 'Heier',
		],
	},
	[r.LAST_NAME_J]: {
		items: [
			'Jackson', 'Jenkins', 'Johnson', 'Jordan',
		],
	},
	[r.LAST_NAME_K]: {
		items: [
			'Kahn', 'Kaufman', 'Kaye', 'Kent', 'King', 'Kreisler', 'Kryger',
		],
	},
	[r.LAST_NAME_L]: {
		items: [
			'Lane', 'Lewis',
		],
	},
	[r.LAST_NAME_M]: {
		items: [
			'Maddox', 'McCoy', 'McDonald', 'McGee', 'McKinley', 'McPartland',
			'Melton', 'Miller', 'Monroe', 'Mooney',
		],
	},
	[r.LAST_NAME_P]: {
		items: [
			'Powers', 'Pryor',
		],
	},
	[r.LAST_NAME_R]: {
		items: [
			'Russels',
		],
	},
	[r.LAST_NAME_S]: {
		items: [
			'Schneider', 'Simms', 'Short', 'Smith', 'Snow', 'Sparrow', 'Swift',
		],
	},
	[r.LAST_NAME_T]: {
		items: [
			'Tharpe',
		],
	},
	[r.LAST_NAME_W]: {
		items: [
			'Williams', 'Worth',
		],
	},
	[r.HONORIFIC]: {
		items: [],
		rare:  {
			25: {
				items: [
					[ ' "The ', r.HONORIFIC_ADJECTIVE, r.HONORIFIC_NOUN, '"' ],
				],
			},
			100: {
				items: [
					' "The King of the Polkas"',
				],
			},
		},
	},
	[r.HONORIFIC_ADJECTIVE]: {
		items: [
			'Crooning ', 'Singing ', 'Southern ', 'Whispering ',
		],
	},
	[r.HONORIFIC_NOUN]: {
		items: [
			'Cornetist', 'Drummer', 'Gentleman', 'Ranger', 'Troubador',
		],
	},
}
