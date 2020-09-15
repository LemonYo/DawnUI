const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

function devServer(config) {
  const compiler = Webpack(config)
  const devServerOptions = {
    open: true,
    port: '3000',
    host: '192.168.0.8',
    hot: true,
    stats: 'errors-only',
    publicPath: '/',
    disableHostCheck: true,
    hotOnly: true,
    inline: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  }
  const server = new WebpackDevServer(compiler, devServerOptions)
  server.listen(devServerOptions.port, devServerOptions.host, (err) => {
    console.log(err)
  })
}
function build(config) {
  return new Promise((resolve, reject) => {
    Webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err || stats.toJson())
      } else {
        resolve();
      }
    });
  });
}
function webpackCompile(config) {
  switch (config.mode) {
    case 'development':
      devServer(config)
      break;
    case 'production':
      return build(config)
  }
}

module.exports = webpackCompile