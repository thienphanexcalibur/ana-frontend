const path = require('path');
const paths = require('./paths.js');
const glob = require('glob');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const PurgecssPlugin = require('purgecss-webpack-plugin');
module.exports = merge(common, {
	mode: 'production',
	plugins: [
	]
});