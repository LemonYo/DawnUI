const webpack = require("webpack")
const baseWebpack = require("./webpack.base")
const {merge} = require("webpack-merge")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const dev = merge(baseWebpack, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({template: `./src/index.html`})
  ],
  devServer: {
    open: true,
    port: '3000',
    host: '192.168.0.8',
    hot: true
  }
})

module.exports = dev