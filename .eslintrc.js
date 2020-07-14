module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		indent: ['error', 'tab', {
			SwitchCase: 1
		}],
		'no-tabs': 0,
		'no-console': 0,
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/destructuring-assignment': [0, 'never'],
		'comma-dangle': 0,
		'react/require-default-props': 0,
		'no-underscore-dangle': 0,
		'react/react-in-jsx-scope': 0,
		'import/no-unresolved': 0,
		'import/extensions': 0,
		'import/prefer-default-export': 0,
		'no-useless-constructor': 0
	}
};
