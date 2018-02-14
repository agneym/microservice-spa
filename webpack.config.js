const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
  entry: {
    'root-application': 'src/root-application/root-application.js',
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules|svelte/,
        loader: 'html-loader',
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "./"),
    ],
    alias: {
      'single-spa': path.resolve(__dirname, 'node_modules/single-spa/lib/single-spa.js'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common-dependencies',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    })
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    historyApiFallback: true
  }
};