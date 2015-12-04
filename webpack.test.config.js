var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    test: [path.join(__dirname, 'webpack.test.bootstrap.js')]
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['src', 'node_modules']
  },

  node: {
    fs: 'empty'
  }
};
