const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, '../template/index.html'),
			filename: 'index.html',
		}),
	],
	devServer: {
		host: '0.0.0.0',
		port: '6900',
		disableHostCheck: true,
		hot: true,
		inline: true,
		historyApiFallback: true
	},
});
