const path = require('path');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const base = require('./webpack.dev');
const CompressionPlugin = require('compression-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = merge(base, {
	mode: 'production',
	devtool: false,
	entry: {
		main: path.resolve(__dirname, '../src/entry.jsx')
	},
	output: {
		filename: '[name].[contenthash:8].js',
		chunkFilename: '[name].[contenthash:8].js',
		clean: true
	},
	plugins: [
		new Dotenv({
			path: path.resolve(__dirname, '../.env.production'),
			allowEmptyValues: true
		}),
		new BundleAnalyzerPlugin({
			openAnalyzer: true
		}),
		new CompressionPlugin()
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				framework: {
					test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
					name: 'framework',
					chunks: 'all'
				},
				uikit: {
					test: /[\\/]node_modules[\\/](@chakra-ui)[\\/]/,
					name: 'uikit',
					chunks: 'all'
				}
			}
		},
		minimizer: [
			new Terser({
				extractComments: false
			})
		]
	}
});
