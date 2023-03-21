import inquirer from 'inquirer'
import applets from '../build/config/applets/index.js'
import { createRequire } from 'module'
import consoleStyle from './config/color.js'
import {copyFiles} from './config/copy.js'
const require = createRequire(import.meta.url)

const path = require('path')
const __dirname = path.resolve()
const fs = require('fs')


function exceFn() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'name',
        message: '请选择创建页面所在的小程序',
        choices: applets.list.map(e => {
          return `${e.name}`
        }),
        transformer: function (v) {
          // 提示信息（输入的信息后缀添加(input your name)）
          return `您将在【${v.name}】小程序中创建页面`
        }
      },
      {
        type: 'input', // 类型
        name: 'pageName', // 字段名称，在then里可以打印出来
        message: '请输入你要创建的页面英文名称:', // 提示信息
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
      }
    ])
    .then(res => {
      const selectObj = applets.list.find(e => e.name == res.name)

      //获取到页面模版
      let OriginFile = path.join(__dirname, '/create/templePage')
      let CopyFile = path.join(
        __dirname,
        selectObj.path + '/pages/' + res.pageName
      )
      //判断要创建的文件夹（OriginFile）是否存在，不存在就创建一个
      if (fs.existsSync(CopyFile)) {
        console.info(
          consoleStyle.italic + consoleStyle.red,
          '您想要创建的文件已经存在，请重新创建'
        )
        return false
      } else {
        console.info(
          consoleStyle.italic + consoleStyle.blue,
          `您将创建${selectObj.path}/pages/${res.pageName}的小程序页面`
        )
        fs.mkdirSync(CopyFile, err => {
          // console.log(err)
        })
      }
      //传入路径
      copyFiles(OriginFile, CopyFile)
      writeJson(`pages/${res.pageName}/index`, path.join(__dirname, `${selectObj.path}/app.json`)) //执行一下;
    })
}

function writeJson(pageConfig, pathJson) {
  console.info(
    consoleStyle.italic + consoleStyle.blue,
    `页面创建成功,开始修改小程序配置 ${pathJson}.....`
  )
  //现将json文件读出来
  let data = fs.readFileSync(pathJson)
  let person = data.toString() //将二进制的数据转换为字符串
  person = JSON.parse(person) //将字符串转换为json对象
  if (person.pages.indexOf(pageConfig) == -1) {
    person.pages.push(pageConfig) //将传来的页面信息添加到配置文件
  }


  let str = JSON.stringify(person) //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
  console.info(consoleStyle.italic + consoleStyle.red, '当前小程序配置'+str)
  fs.writeFileSync(pathJson, str)
  console.info(
    consoleStyle.italic + consoleStyle.blue,
    `修改小程序配置成功.....`
  )
}

export default {
  exceFn
}
