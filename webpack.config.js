const path = require('path');
const ExtensionCountPlugin = require('webpack-count-files-by-extensions-plugin');

module.exports = {
  mode: 'development',
  entry: './demo/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new ExtensionCountPlugin()],
};