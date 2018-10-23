"use strict";
const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";


module.exports = {
  mode: 'development',
  entry: {
    'app/eltrue-redux-devjs': ['./app/eltrue-redux-devjs.js']
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
      "app": path.resolve(__dirname, './app/'),
    }
  },
  devServer: {
    contentBase: "./public",
    noInfo: false,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    proxy: {
      "/api": require('./server-api-proxy')
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
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
      template: 'app/eltrue-redux-devjs.html'
    })
  ]
};
