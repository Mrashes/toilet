var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./rawjs/index.js'],
    output: {
      filename: './build/bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          }
        ]
      }
  };