import r from './recipeNames.js'

export const place = {
	[r.PLACE]: {
		items: [ [ r.GENERAL_PLACE ], [ r.PREFIX_PLACE ] ],
	},
	[r.GENERAL_PLACE]: {
		items: [
			'Beaver Valley', 'Buffalo', 'Casa Loma', 'Colorado', 'Cumberland',
			'Georgia', 'Goosetown', 'Goosetown', 'Hollywood', 'Kansas City',
			'Kentucky', 'Louisiana', 'Manhattan', 'Michigan', 'Motor City',
			'Mound City', 'New Orleans', 'Oklahoma', 'Pennsylvania',
			'Quaker City', 'Santa Fe', 'Smoky Mountain', 'Tennessee', 'Texas',
		],
	},
	[r.PREFIX_PLACE]: {
		items: [
			'Campus', 'City', 'Club Maurice', 'Farm', 'Friars Inn',
			'Grand Canyon', 'Hotel Astor', 'Nankin', 'Pecos River', 'Prairie',
			'Red River', 'Rocky Road', 'Shadyside', 'Valley',
		],
	},
}
