const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackCommon = require('./common');
const commonConfig = webpackCommon('client');

const config = {
  name: 'client',
  target: 'web',
  mode: commonConfig.mode,
  devtool: commonConfig.devtool,
  resolve: commonConfig.resolve,
  // for more about performance hints
  // @see: https://webpack.js.org/configuration/performance/#performance
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 400000,
  },
  entry: [
    "@babel/polyfill",
    path.resolve(__dirname, `../../source/client`, 'index'),
  ],
  output: {
    path: path.resolve(__dirname, '../../dist'),
    publicPath: commonConfig.publicPath,
    filename: 'main.min.js',
    chunkFilename: '[id].js',
  },
  optimization: {
    // Prevent Duplication
    splitChunks: {
      chunks: 'all',
    },
    // can provide uglify-js options for more controls
    // @see: https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: { ecma: 5, compress: { keep_fnames: true }, warnings: false, mangle: { keep_fnames: true } },
        parallel: 4,
      })
    ],
  },
  module: {
    rules: [
      ...commonConfig.babelRule()
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    })
  ],
  externals: {
    window: 'window',
  },
};

module.exports = config;
