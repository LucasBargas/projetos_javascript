const path = require('path');

module.exports = {
  mode: 'development',
  entry: './assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'app.min.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
};