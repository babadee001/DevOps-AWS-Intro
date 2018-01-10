const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(['client/']),
    new webpack.EnvironmentPlugin([
      'FIREABSE_DOMAIN',
      'FIREBASE_MESSENGERID',
      'FIREBASE_APIKEY',
      'FIREBASE_URL',
      'FIREBASE_PROJECTID',
      'FIREBASE_STORAGEBUCKET'
    ]),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false
      }
    })
  ]
});
