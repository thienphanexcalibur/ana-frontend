const webpack = require('webpack');
const path = require('path');
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractText = require('mini-css-extract-plugin');

const isProd = process.env.mode === 'production';

// console.log(path);
module.exports = {
	entry: {
		main: path.resolve(__dirname, '../src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: isProd ? '[name].[hash:8].js' : '[name].js'
	},
	plugins: [
		new MiniCssExtractText(),
		new webpack.DefinePlugin({
			DEV: process.env.mode === 'development',
		}),
		new Analyzer({
			openAnalyzer: false,
			analyzerMode: 'static',
		}),
		new CleanWebpackPlugin(),
	],
	resolve: {
		alias: {
		}
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(ico|jpg|jpeg|png|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: false,
						name: '[name].[hash:8].[ext]',
					},
				},
			},
			{
				test: /\.svg$/,
				use: {
					loader: 'svg-url-loader',
					options: {
						limit: false,
						name: '[name].[hash:8].[ext]',
						fallback: 'file-loader',
					},
				},
			},

			{
				test: /\.(styl|css)$/,
				use: [
					{
						loader: MiniCssExtractText.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: !isProd,
							modules: {
								localIdentName: isProd ? '[hash:8]' : '[name]__[local]',
							},
							importLoaders: 1,
						},
					},
					{
						loader: 'stylus-loader'
					}
				],
			},
		],
	},
};
