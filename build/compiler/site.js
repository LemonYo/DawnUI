const  devConfig =  require('../webpack/webpack.dev')
const  prodConfig =  require('../webpack/webpack.prod')
const  webpackCompile =  require('../webpackCompile')

function compileSite(isProd = false) {
  if (isProd) {
    webpackCompile(prodConfig)
  } else {
    webpackCompile(devConfig)
  }
}

module.exports = compileSite