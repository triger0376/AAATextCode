### cli 本地化流程

 #### 安装先行条件  
 #### 以麒麟为例子，其他系统原理一致
1. 准备工作
     * 去目录下下载ftp://22.11.238.33/wxx/zxh  下载4个文件
        1. blank.7z 这个是安装minidev-cli 成功以后要执行的小程序文件，是通过链接外网，minidev create 生成的小程序文件
        2. minidev.7z 这个文件是通过链接外网机器生成的文件， 主要作用是 minidev-cli 再构建程序，需要再外网下载的文件 文件核心是 asstes 和complier 文件夹。 不同机器和不同系统均不一样，此文件是模拟麒麟系统生成的。 32位操作系统和64操作系统也不一样，安装其他系统一定注意，否则执行minidev  dev 编译会出现问题。
        3. node-gyp-7.0.1.tar.gz 是安装minidev 过程中执行预解析所需要的node 包 node-gyp 有很多作用看官网。 
        4. node-v14.17.5-header.tar.gz  这个是和node版本一致文件，如果node版本和当前例子不一致
        [文件4淘宝下载链接](https://npm.taobao.org/mirrors/node/14.17.5/node-14.17.5-headers.tar.gz)
         [文件4官方下载链接](https://nodejs.org/dist/14.17.5/node-14.17.5-headers.tar.gz)

     系统准备工作
     npm config list

     npm config set registry=http://22.11.64.175:7001

     npm install npm -g 升级npm
    



2. 系统操作
    * 找到当前node版本使用的npm 安装目录方法如下
        1. which npm   查看  执行目录 如： /usr/local/bin/npm  *<font face="仿宋" color=red size=2> 每台电脑目录可能都不一样</font>* 
        2. ls -l /usr/local/bin/npm ls*<font face="仿宋" color=red size=2> 刚才的目录</font>*  此时终端会输出  
        /usr/local/bin/npm -> ../lib/node_modules/npm/bin/npm-cli.js  如果非常清楚npm安装在哪里 请忽略以上两部，

        3. 此时会得到两个目录  /usr/local/bin/npm 下面文章中[命令执行目录]都指该目录
         和/usr/local/lib/node_modules/npm/node_modules[执行文件目录] *<font face="仿宋" color=red size=2> 两个目录每台电脑会不一致，根据自己实际情况再后面的命令中自己替换</font>*     chmod -R 777 /usr/local/bin/npm

          


        4.  将准备文件中node-gyp-7.0.1.tar.gz 文件 解压 完全替换【执行文件目录】中看到node-gyp  再 node-gyp 目录中执行npm install 执行完根据提示执行 npm audit fix --force
        然后 再执行终端命令  
        
           sudo ln -s [执行文件目录]/node-gyp/bin/node-gyp.js  /usr/local/bin/node-gyp

        如果执行是不一般会提示[命令执行目录] 中已存在node-gyp 或者没有权限，终端执行以下命令赋予相对应权限执行
        
           chmod —R 777 [命令执行目录]   

       5. 执行 node-gyp -v 验证是否成功，成功输出对应版本号码


       6.  将 文件node-v14.17.5-header.tar.gz 放入 /data/tarball/ 中 此目录可以自定义，但不可以定义中文或者特殊字符


       7. 终端执行两个命令
       
                npm  config set tarball=/data/tarball/nnode-v14.17.5-header.tar.gz   *<font face="仿宋" color=red size=2> set tarball  目录  是自己定义的目录，文件名不要修改</font>*
        命令2 ---registry 的参数是自己npm配置的代理。  可以忽略（官方建议传递）
            
            npm install minidev -g  --registry=http://22.11.64.175:7001


      8. 执行minidev  会输出小程序相关说明， 执行minidev -v 会输出相关版本信息， 此时证明minidev-cli 安装完成，


      9. 将minidev.7z 解压minidev 内容  放入～/.minindev
      将文件blank.7z 解压目录  /data/balnk   并在该目录下执行minidev  dev  如果打开页面空白。 页面空白请使用chrome 浏览器打开
    










