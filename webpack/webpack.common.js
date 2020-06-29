const webpack = require('webpack');
const path = require('path');

const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractText = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths.js');

const isProd = process.env.mode === 'production';

// console.log(path);
module.exports = {
	entry: {
		main: path.resolve(__dirname, '../src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: isProd ? '[name].[hash:8].js' : '[name].js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [
		new MiniCssExtractText(),
		new webpack.DefinePlugin({
			_DEV_: process.env.mode === 'development'
		}),
		new webpack.ProvidePlugin({
			React: 'react'
		}),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, '../template/index.html'),
			filename: 'index.html',
		}),
		new Analyzer({
			openAnalyzer: false,
			analyzerMode: 'static',
		}),
		new CleanWebpackPlugin(),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: paths
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(ico|jpg|jpeg|png|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'static/[name].[hash:8].[ext]',
					},
				},
			},
			{
				test: /\.svg$/,
				use: {
					loader: 'svg-url-loader',
					options: {
						limit: 10000,
						name: 'static/[name].[hash:8].[ext]',
						fallback: 'file-loader',
					},
				},
			},

			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractText.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: !isProd,
							localsConvention: 'asIs',
							importLoaders: 1,
						},
					},
				],
			},

			{
				test: /\.styl$/,
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
