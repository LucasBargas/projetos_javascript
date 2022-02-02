const path = require('path');

module.exports = {
  mode: 'production',
  entry: './assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'app.min.js',
  },
};