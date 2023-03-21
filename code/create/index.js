// 导入路径模块
import inquirer from 'inquirer'
import pageObj from './ceatePage.js'
import appletObj from './applet/index.js'


const selectList = [
  {
    key: 'page',
    name: '创建小程序页面'
  },
  {
    key: 'applet',
    name: '创建小程序'
  }
]

inquirer
  .prompt([
    {
      type: 'list',
      name: 'name',
      message: '请选择你要进行的操作',
      choices: selectList.map(e => {
        return `${e.name}`
      })
    }
  ])
  .then(res => {
    // option.name = res.name;
    // let arr = option.name.split("_");
    // option.system = arr[0];
    // option.branch = arr[1];
    const selectObj = selectList.find(e => e.name == res.name)
    if (selectObj.key == 'page') {
      pageObj.exceFn()
    } else if (selectObj.key == 'applet') {
      appletObj.exceFn()
    }
  })

// inquirer
//     // 可支持多个输入
//     .prompt([{
//         type: 'input',          // 类型
//         name: 'yourName',       // 字段名称，在then里可以打印出来
//         message: '请输入你的名称:',  // 提示信息
//         default: 'noname',      // 默认值
//         validate: function (v) {// 校验：当输入的值为是string类型，才能按回车，否则按了回车并无效果
//             return typeof v === 'string'
//         },
//         transformer: function (v) {// 提示信息（输入的信息后缀添加(input your name)）
//             return v + '(input your name)'
//         },
//         filter: function (v) {// 最终结果
//             return 'name['+v+']'
//         }
//     }, {
//         type: 'number', // 类型（数字）
//         name: 'num',
//         message: '请输入你的年龄'
//     }])
//     .then(answers => {
//         console.log('answers', answers.yourName+answers.num)    // 与prompt的name字段对应
//     })
//     .catch(error => {
//         if(error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//         } else {
//             // Something else went wrong
//         }
//     });