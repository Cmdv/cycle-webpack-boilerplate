var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: ['./src/app']
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
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

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
