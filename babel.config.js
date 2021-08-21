module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				exclude: ['@babel/plugin-transform-regenerator'],
				targets: '> 0.25%, not dead'
			}
		],
		[
			'@babel/preset-react',
			{
				runtime: 'automatic'
			}
		]
	]
};
