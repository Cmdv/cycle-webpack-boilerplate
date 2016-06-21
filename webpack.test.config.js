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
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
    alias: {
      'pages': path.join(__dirname, '/src/dialogue/pages/'),
      'utils': path.join(__dirname, '/src/dialogue/utils/'),
      '__test_helper__': path.join(__dirname, '/src/__test__/helper/')
    }
  },

  node: {
    fs: 'empty'
  }
};
