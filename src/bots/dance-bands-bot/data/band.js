import r from './recipeNames.js'

export const band = {
	[r.ALLITERATIVE_BAND]: {
		items: [
			[ r.LAST_NAME_B, "'s ", r.MEMBER_NOUNS_B ],
			[ r.LAST_NAME_C, "'s ", r.MEMBER_NOUNS_C ],
			[ r.LAST_NAME_D, "'s ", r.MEMBER_NOUNS_D ],
			[ r.LAST_NAME_F, "'s ", r.MEMBER_NOUNS_F ],
			[ r.LAST_NAME_G, "'s ", r.MEMBER_NOUNS_G ],
			[ r.LAST_NAME_H, "'s ", r.MEMBER_NOUNS_H ],
			[ r.LAST_NAME_K, "'s ", r.MEMBER_NOUNS_K ],
			[ r.LAST_NAME_M, "'s ", r.MEMBER_NOUNS_M ],
			[ r.LAST_NAME_P, "'s ", r.MEMBER_NOUNS_P ],
			[ r.LAST_NAME_R, "'s ", r.MEMBER_NOUNS_R ],
			[ r.LAST_NAME_S, "'s ", r.MEMBER_NOUNS_S ],
			[ r.LAST_NAME_T, "'s ", r.MEMBER_NOUNS_T ],
			[ r.LAST_NAME_W, "'s ", r.MEMBER_NOUNS_W ],
		],
	},
	[r.INSTRUMENT_OPTIONAL]: {
		items: [],
		rare:  {
			20: {
				items: [ 'Jug ', 'Marimba ', 'Saxophone ', 'Tympany ' ],
			},
		},
	},
	[r.BAND_NUMERIC]: {
		items: [
			'Band', 'Ensemble', 'Five', 'Trio', 'Quartet', 'Quartette',
			'Quintet', 'Sax-O-Tette', 'Sextet', 'Strings', 'Symphonette',
		],
	},
	[r.MEMBER_NOUN_PREFIX]: {
		items: [
			'All Star ', 'Barn Dance ', 'Bashful ', 'Black and White ',
			'Blue Denim ', 'Blue Grass ', 'Boogie Woogie ',	'Boulevard ',
			'Buster Brown ', 'Cabin ', 'Cactus ', 'Cool ', 'Cowboy ', 'Crazy ',
			'Dependable ', 'Dixie Lily ', 'Famous ', 'Happiness ', 'Hoosier ',
			'Hot ', 'Hot Box ', 'House ', 'Jazz ', 'Jolly ', 'Jungle ',
			'Lucky ', 'Master ', 'Melody ', 'Moana ', 'Musical ',
			'Old Hickory ', 'Original ', 'Novelty ', 'Peerless ',
			'Pick-A-Rib ', 'Polka ', 'Radio ', 'Rainbow ', 'Rambling ',
			'Rhythm ', 'Round Up ', 'Royal ', 'Skyline ', 'Statler ',
			'Swinging ', 'Tailgate ', 'Tivoli ', 'Torrid ', 'Varsity ',
			'Western ',
		],
	},
	[r.NUMBER]: {
		items: [ 'Three', 'Four', 'Five', 'Six', 'Seven' ],
	},
	[r.MEMBER_NOUNS]: {
		items: [
			[ r.MEMBER_NOUNS_B ],
			[ r.MEMBER_NOUNS_C ],
			[ r.MEMBER_NOUNS_D ],
			[ r.MEMBER_NOUNS_F ],
			[ r.MEMBER_NOUNS_G ],
			[ r.MEMBER_NOUNS_H ],
			[ r.MEMBER_NOUNS_I ],
			[ r.MEMBER_NOUNS_J ],
			[ r.MEMBER_NOUNS_K ],
			[ r.MEMBER_NOUNS_M ],
			[ r.MEMBER_NOUNS_P ],
			[ r.MEMBER_NOUNS_R ],
			[ r.MEMBER_NOUNS_S ],
			[ r.MEMBER_NOUNS_T ],
			[ r.MEMBER_NOUNS_V ],
			[ r.MEMBER_NOUNS_W ],
			[ r.MEMBER_NOUNS_Y ],
		],
	},
	[r.MEMBER_NOUNS_B]: {
		items: [
			'Babies', 'Band', 'Be-Boppers', 'Bearcats', 'Blazers',
			'Blue-Blowers',	'Bluesicians', 'Bob Cats', 'Bohemians',
			'Bombadiers', 'Boys', 'Briarhoppers',
		],
	},
	[r.MEMBER_NOUNS_C]: {
		items: [
			'Canadians', 'Caravan', 'Caroleers', 'Cats', 'Cats and Jammers',
			'Chicagoans', 'Clodhoppers', 'Colonels', 'Cornellians', 'Cowboys',
			'Cowhands', 'Crazy Tennesseans',
		],
	},
	[r.MEMBER_NOUNS_D]: {
		items: [
			'Dance Makers', 'Debs', 'Diamonds', 'Dixielanders', 'Dude Ranchers',
			'Dukes',
		],
	},
	[r.MEMBER_NOUNS_F]: {
		items: [
			'Feetwarmers',
		],
	},
	[r.MEMBER_NOUNS_G]: {
		items: [
			'Gang', 'Girls', 'Girls of the Golden West', 'Globe Trotters',
		],
	},
	[r.MEMBER_NOUNS_H]: {
		items: [
			'Hawaiians', 'Highpointers', 'Hillbillies', 'Home Boys', 'Hounds',
			'Hunters',
		],
	},
	[r.MEMBER_NOUNS_I]: {
		items: [
			'Islanders',
		],
	},
	[r.MEMBER_NOUNS_J]: {
		items: [
			'Jesters',
		],
	},
	[r.MEMBER_NOUNS_K]: {
		items: [
			'Knights',
		],
	},
	[r.MEMBER_NOUNS_M]: {
		items: [
			'Melody Artists', 'Melody Makers', 'Merry Madcaps', 'Merrymakers',
			'Millers', 'Millionaires of Rhythm', 'Mountaineers', 'Music',
			'Music Box Band',
		],
	},
	[r.MEMBER_NOUNS_P]: {
		items: [
			'Pardners', 'Pennsylvanians', 'Pioneers', 'Plainsmen', 'Polkateers',
			'Pricklypears',
		],
	},
	[r.MEMBER_NOUNS_R]: {
		items: [
			'Ramblers', 'Ranch Boys', 'Rangers', 'Rascals', 'Rhythmasters',
			'Rhythmists', 'Riders', 'Ridge Runners', 'Rockers', 'Rogues',
			'Rounders',
		],
	},
	[r.MEMBER_NOUNS_S]: {
		items: [
			'Sagedusters', 'Serenaders', 'Singers', 'Slickers',
			'Sons of the Golden West', 'Stompers', 'String Band', 'Strings',
			'Sweethearts', 'Swing Wing', 'Swingsters', 'Syncopaters',
		],
	},
	[r.MEMBER_NOUNS_T]: {
		items: [
			'Tennesseans', 'Texsons', 'Tornadoes', 'Troopers', 'Tu-Tones',
			'Twisters',
		],
	},
	[r.MEMBER_NOUNS_V]: {
		items: [
			'Vagabonds',
		],
	},
	[r.MEMBER_NOUNS_W]: {
		items: [
			'Westerners', 'Wranglers',
		],
	},
	[r.MEMBER_NOUNS_Y]: {
		items: [
			'Yanks',
		],
	},
}
