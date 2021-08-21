const path = require('path');
const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base');
const Dotenv = require('dotenv-webpack');

module.exports = merge(base, {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: {
		hot: 'react-hot-loader/patch',
		main: path.resolve(__dirname, '../src/entry.jsx')
	},
	output: {
		filename: '[name].js'
	},
	plugins: [
		new Dotenv({
			path: path.resolve(__dirname, '../.env.development'),
			allowEmptyValues: true
		}),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, '../index.html')
		})
	],
	devServer: {
		compress: true,
		port: 6900,
		historyApiFallback: true,
		hot: true,
		clientLogLevel: 'silent'
	}
});
