const path = require("path")
const WebpackCleanPlugin = require('webpack-clean')
const fs = require('fs')
const rootDir = path.resolve(__dirname, '../')
const componentDir = 'packages'
const cModuleNames = fs.readdirSync(path.resolve(componentDir))


console.log(cModuleNames)

const cModuleMap = cModuleNames.reduce((prev, name) => {
  // console.log(prev, name)
  prev[name] = path.join(rootDir, `${componentDir}/${name}/index.js`)
  return prev
}, {})
// console.log(typeof cModuleMap)

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "../packages/index.js"),
    button: path.resolve(__dirname, "../packages/button/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: '[name]/index.js',
    library: "DawnUI",
    libraryTarget: "commonjs-module"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    "react-dom": {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  },
  plugins: [
    new WebpackCleanPlugin(),
  ]
}