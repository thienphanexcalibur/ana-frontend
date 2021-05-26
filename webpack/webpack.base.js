const path = require('path');
const paths = require('./paths');

module.exports = {
	entry: {
		hot: 'react-hot-loader/patch',
		main: path.resolve(__dirname, '../src/entry.jsx')
	},
	output: {
		path: path.resolve(__dirname, '../dist')
	},
	resolve: {
		alias: { ...paths, 'react-dom': '@hot-loader/react-dom' },
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.js(x)$/,
				exclude: /node_modules/,
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
