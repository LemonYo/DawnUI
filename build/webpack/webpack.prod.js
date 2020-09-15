const {merge} = require("webpack-merge")
const baseWebpack = require("./webpack.base")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackCleanPlugin = require('webpack-clean')

const prod = merge(baseWebpack, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new WebpackCleanPlugin(),
    new HtmlWebpackPlugin({template: `./src/index.html`})
  ]
})

module.exports = prod