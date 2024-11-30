import neostandard from 'neostandard'

export default [
	...neostandard({}),
	{
		rules: {
			'@stylistic/array-bracket-spacing': [ 'error', 'always' ],
			'@stylistic/comma-dangle':          [
				'error', {
					arrays:    'always-multiline',
					objects:   'always-multiline',
					imports:   'never',
					exports:   'never',
					functions: 'never',
				},
			],
			'@stylistic/comma-spacing':   [ 'error' ],
			'@stylistic/eol-last':        [ 'error', 'always' ],
			'@stylistic/indent':          [ 'error', 'tab', { SwitchCase: 1 } ],
			'@stylistic/key-spacing':     [ 'error', { align: 'value' } ],
			'@stylistic/no-multi-spaces': [
				'error', {
					ignoreEOLComments: true,
					exceptions:        {
						ImportDeclaration:  true,
						VariableDeclarator: true,
					},
				},
			],
			'@stylistic/no-tabs':              'off',
			'@stylistic/no-trailing-spaces':   [ 'error', { ignoreComments: true } ],
			'@stylistic/object-curly-spacing': [ 'error', 'always' ],
			'@stylistic/quotes':               [ 'error', 'single', { avoidEscape: true } ],
			'@stylistic/semi':                 [ 'error', 'never' ],
			'@stylistic/space-before-blocks':  [ 'error', 'always' ],
			'@stylistic/space-in-parens':      'off',
			'@stylistic/space-infix-ops':      [ 'error' ],
			curly:                             [ 'error', 'multi' ],
			'no-console':                      'off',
		},
	},
]
