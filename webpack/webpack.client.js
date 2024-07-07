// webpack.client.js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './entry-client.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'client-bundle.js'
  },
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
  resolve: {
    extensions: ['.vue', '.js'],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
};
