const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const javascript = {
  test: /\.(js)$/, 
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: { presets: ['es2015'] } 
  }],
};

const styles = {
  test: /\.(scss)$/,
  use: ExtractTextPlugin.extract(['css-loader?sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap'])
};

const config = {
  entry: {
    app: ['./public/js/index.js', './public/sass/main.scss']
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [styles]
  },

  plugins: [
    new ExtractTextPlugin('app.css'),
  ]
};

process.noDeprecation = true;

module.exports = config;
