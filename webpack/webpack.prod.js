const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const base = require('./webpack.dev');

module.exports = merge(base, {
	mode: 'production',
	output: {
		filename: '[contenthash:8].js'
	},
	plugins: [
		new Dotenv({
			path: path.resolve(__dirname, '../.env.production'),
			allowEmptyValues: true
		}),
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin({
			openAnalyzer: true
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
});
