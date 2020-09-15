const baseWebpack = require("./webpack.base")
const WebpackMerge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const dev = WebpackMerge.merge(baseWebpack, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({template: `./src/index.html`})
  ]
})

module.exports = dev