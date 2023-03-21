import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const path = require('path')
const __dirname = path.resolve()
const fs = require('fs')

function copyFiles(OriginFilePath, CopyFilePath) {
  //读取OriginFilePath文件夹下的文件
  fs.readdir(OriginFilePath, { withFileTypes: true }, (err, files) => {
    for (let file of files) {
      //判断是否是文件夹，不是则直接复制文件到newFile中
      if (!file.isDirectory()) {
        //获取旧文件夹中要复制的文件
        const OriginFile = path.resolve(OriginFilePath, file.name)
        //获取新文件夹中复制的地方
        const CopyFile = path.resolve(CopyFilePath, file.name)
        //将文件从旧文件夹复制到新文件夹中
        fs.copyFileSync(OriginFile, CopyFile)
      } else {
        //如果是文件夹就递归变量把最新的文件夹路径传过去
        const CopyDirPath = path.resolve(CopyFilePath, file.name)
        const OriginDirPath = path.resolve(OriginFilePath, file.name)
        fs.mkdir(CopyDirPath, err => {})
        // OriginFilePath = OriginPath
        // CopyFilePath = DirPath
        copyFiles(OriginDirPath, CopyDirPath)
      }
    }
  })
}

export {
    copyFiles
}