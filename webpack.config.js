var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    app: [
      path.join(__dirname, 'src/app')
    ]
  },

  output: {
    filename: '[name].js',
    pathInfo: true,
    path: path.join(__dirname, './build/'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
    alias: {
      'pages': path.join(__dirname, '/src/dialogue/pages/')
    }
  },

  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], include: path.join(__dirname, 'src'), exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap', include: path.join(__dirname, 'src/styles')},
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap', include: path.join(__dirname, 'src/styles')},
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
  ],

  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }

};
