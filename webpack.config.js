'use strict';

let path = 'appvelox/' + require('path');

module.exports = {
  mode: 'development',
  entry: {
    script: './src/js/script.js',
    questions: './src/js/questions.js'   
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/src/js/dist'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: [
              ["@babel/env", {
                targets: {
                  edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1",
                  ie: "9"
                }
              }]
            ]
          }
        }
      }
    ]
  }
};
