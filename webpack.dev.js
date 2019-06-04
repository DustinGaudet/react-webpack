const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
})