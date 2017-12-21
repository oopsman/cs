var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist/',
    publicPath: '/www/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        test: /\.ejs$/,
        loaders: ['ejs-loader']
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        query:{"name":'assets/[name]-[hash:5].[ext]'}
      },
      {
        test: /\.less$/,
        loaders: ['style-loader','css-loader','postcss-loader','less-loader']
      }
    ]
  },
  postcss:[
    require('autoprefixer')({})
  ]
};
