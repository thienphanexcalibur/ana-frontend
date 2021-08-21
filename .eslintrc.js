module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'airbnb', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'global-require': 0,
		'import/no-cycle': 0,
		semi: [2, 'always'],
		indent: [
			'error',
			'tab',
			{
				MemberExpression: 1,
				offsetTernaryExpressions: true,
				ignoredNodes: ['TemplateLiteral'],
				SwitchCase: 1
			}
		],
		'template-curly-spacing': 'off',
		'no-use-before-define': [0],
		'no-undef': 0,
		'no-tabs': 0,
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/no-children-prop': 0,
		'comma-dangle': 0,
		'react/require-default-props': 0,
		'no-underscore-dangle': 0,
		'react/react-in-jsx-scope': 0,
		'import/no-unresolved': 0,
		'import/extensions': 0,
		'import/prefer-default-export': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/interactive-supports-focus': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'no-useless-constructor': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
		'import/no-extraneous-dependencies': 0,
		'object-curly-newline': 'off',
		'operator-linebreak': 'off',
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'react/destructuring-assignment': 2,
		'no-unused-expressions': [
			2,
			{
				allowShortCircuit: true
			}
		],
		'import/no-useless-path-segments': 0,
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'prefer-object-spread': 2
	}
};
