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

// module.exports = {
//   mode: "production",
//   entry: {
//     index: path.resolve(__dirname, "../packages/index.js"),
//     ...cModuleMap
//   },
//   output: {
//     path: path.resolve(__dirname, "../lib"),
//     library: "DawnUI",
//     libraryTarget: "umd"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           "style-loader",
//           "css-loader",
//           "postcss-loader",
//           "sass-loader"
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new WebpackCleanPlugin(),
//   ]
// }