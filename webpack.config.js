const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./app/index.js']
  },
  output: {
    publicPath: '/',
    filename: 'js/app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      title: 'React app',
      inject: false,
      template: HtmlWebpackTemplate,
      links: [
      ]
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
