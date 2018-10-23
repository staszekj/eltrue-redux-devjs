const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.loaders');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'app/eltrue-redux-devjs': ['./app/containers/main-app/index.js']
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        'vendors': {test: /[\\/]node_modules[\\/]/, name: "app/vendors"}
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "app": path.resolve(__dirname, './app'),
    }
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CopyWebpackPlugin([
      {
        publicPath: './',
        from: './app/assets/**',
        to: "./"
      }
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: 'Custom template using Handlebars',
      file: 'index.html',
      template: 'app/eltrue-redux-devjs.html
    })
  ]
};
