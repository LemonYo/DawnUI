const path = require("path")


function updateEnv(v) {
  process.env.NODE_ENV = v
}

function isDev() {
  return process.env.NODE_ENV === 'development'
}

function ROOT_DIR(dir) {
  return path.resolve(__dirname, "../../", dir)
}

module.exports = {
  ROOT_DIR,
  isDev,
  updateEnv
}