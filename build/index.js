const utils = require("./utils")
const compileSite = require("./compiler/site")

const commandType = process.argv[2]

switch(commandType) {
  case 'dev': // 本地调试预览组件
    compileSite()
    break
  case 'prod':
    utils.updateEnv('production')
    compileSite(true) // 编译demo 和文档
    break
  default:
    break
}