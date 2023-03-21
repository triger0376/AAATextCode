import pkg from "minidev";
const { minidev } = pkg;
import { createRequire } from "module";
import bulid from "./config/bulid/index.js";
import dev from "./config/dev/index.js";
import applets from "./config/applets/index.js";
const require = createRequire(import.meta.url);
const openUrlPath = require("opn");
import inquirer from "inquirer"
// 导入路径模块
const path = require("path");
const __dirname = path.resolve();

// 路径拼接的结果: ～/Desktop/work/AAATextCode/code/blank
// 多个小程序路径以后可以用选择来做
let projectPath = path.join(__dirname, "/blank/"); // 基础小程序 // 后续拓展基础demo各种实际应用

const outPath = path.join(__dirname, "/dist"); // 成果输出路径
const cachePath = path.join(__dirname, "/dist/cache"); // 缓存路径

const {
  cooked,
  //original
} = JSON.parse(process.env.npm_config_argv);
const action = cooked[1];

inquirer
  .prompt([
    {
      type: "list",
      name: "name",
      message: "您需要打包的小程序",
      choices: applets.list.map((e) => {
        return `${e.name}`;
      }),
    },
  ])
  .then((res) => {
    // option.name = res.name;
    // let arr = option.name.split("_");
    // option.system = arr[0];
    // option.branch = arr[1];
   const selectObj = applets.list.find((e) => e.name == res.name);
    projectPath= path.join(__dirname, selectObj.path);
    startBundle(projectPath,selectObj.appId[action])
    
  });

// 打包函数
function startBundle(projectPath,appId) {
  if (action == "dev") {
    dev.exceFn(minidev, openUrlPath, projectPath, outPath, cachePath);
  } else if (action == "build") {
    bulid.exceFn(minidev, projectPath, outPath, cachePath,appId);
  }
}

