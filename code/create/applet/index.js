import inquirer from 'inquirer'
import { createRequire } from 'module'
import consoleStyle from '../config/color.js'
const require = createRequire(import.meta.url)
const path = require('path')
const __dirname = path.resolve()
const fs = require('fs')
import {copyFiles} from '../config/copy.js'

function exceFn() {
  inquirer
    .prompt([
      {
        type: 'input', // 类型
        name: 'appletEName', // 字段名称，在then里可以打印出来
        message: '请输入你要创建的小程序英文名称(用于存放小程序文件目录):', // 提示信息
        // default: 'newpage', // 默认值
        validate: function (v) {
          // 校验：当输入的值为是string类型，才能按回车，否则按了回车并无效果
          let pattern = new RegExp('[A-Za-z]+')

          if (pattern.test(v)) {
            return true
          } else {
            console.info(
              consoleStyle.italic + consoleStyle.red,
              '请输入纯英文名称'
            )
            return false
          }
        }
      },
      {
        type: 'input', // 类型
        name: 'appletCName', // 字段名称，在then里可以打印出来
        message: '请输入你要创建小程序的别名:' // 提示信息
      },
      {
        type: 'input', // 类型
        name: 'testAPPID', // 字段名称，在then里可以打印出来
        message: '请输入测试小程序APPID(人行提供):', // 提示信息
        default: '1111111111111'
      },
      {
        type: 'input', // 类型
        name: 'buildAPPID', // 字段名称，在then里可以打印出来
        message: '请输入正式小程序APPID(人行提供):', // 提示信息
        default: '222222222222'
      }
    ])
    .then(res => {
      let originFile = path.join(__dirname, '/create/applet/temple')
      let copyFile = path.join(__dirname, '/src/view/' + res.appletEName)
      //判断要创建的文件夹（OriginFile）是否存在，不存在就创建一个
      if (fs.existsSync(copyFile)) {
        console.info(
          consoleStyle.italic + consoleStyle.red,
          '您想要创建的小程序存在同名，请重新创建'
        )
        return false
      } else {
        console.info(
          consoleStyle.italic + consoleStyle.blue,
          `您将创建${res.appletCName}的小程序，工作目录在：${copyFile}`
        )
        fs.mkdirSync(copyFile, err => {
          // console.log(err)
        })
      }
      //传入路径
      copyFiles(originFile, copyFile)

      /// 修改打包配置
      //code/build/config/applets/index.js
      const buildConfig = path.join(__dirname, '/build/config/applets') // 配置路径
      let data = fs.readFileSync(`${buildConfig}/index.js`)
      let configListObj = data.toString().split(']') // 读取文件内容分割
      console.info(
        consoleStyle.italic + consoleStyle.blue,
        `创建小程序成功，在注入新的打包配置.....`
      )
      let tempStr = `,{\r\n
        name: '${res.appletCName}',
        path: '/src/view/${res.appletEName}', // 所在路径
        appId: {
          test: ${res.testAPPID}, //测试
          build: ${res.buildAPPID} //生产
        }
        }
        ]`
      fs.writeFileSync(
        `${buildConfig}/index.js`,
        configListObj[0] + tempStr + `\r\n` + configListObj[1]
      )
      //console.log(configListObj[0] + tempStr + `\r\n` + configListObj[1])
      console.info(
        consoleStyle.italic + consoleStyle.blue,
        `小程序创建完毕，打包配置修改完毕`
      )
    })
}
export default {
  exceFn
}
