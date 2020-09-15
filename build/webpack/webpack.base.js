const { isDev, ROOT_DIR } = require("../utils")
module.exports = {
  entry: ROOT_DIR("./src/main.js"),
  output: {
    filename: isDev() === 'development' ? '[name].js' : '[name].[hash:8].js',
    publicPath: '/',
    path: ROOT_DIR("site")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
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
}