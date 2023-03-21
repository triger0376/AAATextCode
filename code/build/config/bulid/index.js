import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");
  // 这个是主角
const compressing = require("compressing");
import chalk from "chalk";
/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
 * @param {*} path
 */
function emptyDir(path) {
  const files = fs.readdirSync(path);
  files.forEach((file) => {
    const filePath = `${path}/${file}`;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      emptyDir(filePath);
    } else {
      fs.unlinkSync(filePath);
      console.log(`删除${file}文件成功`);
    }
  });
}

/**
 * 删除指定路径下的所有空文件夹
 * @param {*} path
 */
function rmEmptyDir(path, level = 0) {
  console.log(path);
  const files = fs.readdirSync(path);
  if (files.length > 0) {
    let tempFile = 0;
    files.forEach((file) => {
      tempFile++;
      rmEmptyDir(`${path}/${file}`, 1);
    });
    if (tempFile === files.length && level !== 0) {
      fs.rmdirSync(path);
    }
  } else {
    level !== 0 && fs.rmdirSync(path);
  }
}

/**
 * 清空指定路径下的所有文件及文件夹
 * @param {*} path
 */
function clearDir(path) {
  emptyDir(path);
  rmEmptyDir(path);
}

const createZip = (outPath, zipPath) => {
  console.log(chalk.yellow(`Tip: 打包完毕开始压缩`));


  const zipName = zipPath;

  compressing.zip
    .compressDir(outPath, zipName)
    .then(() => {
      console.log(chalk.yellow(`Tip: 文件压缩成功，已压缩至【${zipName}】`));
    })
    .catch((err) => {
      console.log(chalk.red("Tip: 压缩报错"));
      console.error(err);
    });
};

const exceFn = async (minidev, projectPath, outPath, cachePath,appId) => {
  const newOutPath = outPath + "/dist";
  // 判断是否存在当前publish路径，没有就新增
  if (fs.existsSync(newOutPath)) {
    clearDir(newOutPath);
  } else {
    fs.mkdirSync(newOutPath);
  }
  const buildResult = await minidev.build({
    project: projectPath,
    hmr: true,
    output: outPath + "/dist",
    port: 8080,
    cacheDir: cachePath,
    sourceMap: false,
    minify: false,
  });

  
  if(buildResult.dist){
    let outPathNew = outPath + "/dist/ng-main";
    let zipName = outPath+"/" + appId + ".zip";
     createZip(outPathNew, zipName);
  }
 
};

export default {
  exceFn,
};
