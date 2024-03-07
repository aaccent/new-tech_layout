const path = require('path')

module.exports = {
  entry: {
    app: './src/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, './build/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules(?![/|\\](dom7|swiper))/],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
  mode: 'production',
  externals: {
    jquery: 'jQuery'
  }
}
