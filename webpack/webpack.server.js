// webpack.server.js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './entry-server.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'vue',
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
