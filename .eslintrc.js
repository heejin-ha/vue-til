module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
	},
	extends: ['plugin:vue/essential', '@vue/prettier'],
	rules: {
		'no-console': 'off',
		// "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		// "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
		'prettier/prettier': [
			'warnings',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
};
