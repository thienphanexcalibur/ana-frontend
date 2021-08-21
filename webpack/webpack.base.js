const path = require('path');
const paths = require('./paths');

module.exports = {
	output: {
		path: path.resolve(__dirname, '../dist')
	},
	resolve: {
		alias: { ...paths },
		extensions: ['.js', '.jsx', '.mjs']
	},
	module: {
		rules: [
			{
				test: /\.js(x)$/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	}
};
