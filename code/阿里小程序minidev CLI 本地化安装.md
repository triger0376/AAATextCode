## 阿里小程序minidev CLI 本地化安装
### 纲要
1. 准备工作
2. node-gyp 离线化处理
3. npm 安装minidev
4. minidev编译工具本地化处理



### 准备工作
* 准备离线文件
   *<font color="#f7f">下载文件在 ftp://22.11.238.33/wxx/zxh 也可以自行下载创建</font>* 

   * blank.7z  这个文件是minidev create 创建小程序基础文件，因为创建需要实时连接外网，所以只能外部创建好，拷贝到内网  ==_(白名单申请通过以后就可以了再内网创建了)_==
   * minidev.7z  minidev编译工具本地化处理必须文件，需要注意的是不同系统环境需要的本地化文件不一样， ftp://22.11.238.33/wxx/zxh 下的文件是麒麟系统所需，windows 请自行创建 创建说明见[阿里官方文档cli编译文件说明](https://opendocs.alipay.com/mini/02pzeh) 
   * node-gyp-7.0.1.tar.gz 是安装minidev 过程中执行预解析所需要的node包 node-gyp有很多，作用看官网， 安装npm会有对应版本。[node-gyp版本](https://www.npmjs.com/package/node-gyp) [node-gyp离线版下载地址](https://github.com/nodejs/node-gyp/archive/v7.0.1.tar.gz) 

   * node-v14.17.5-header.tar.gz  这个是和node版本一致文件，如果node版本和当前例子不一致以下链接可以自行下载
        [淘宝各个版本下载链接](https://npm.taobao.org/mirrors/node/)
       [官方各个版本下载链接](https://nodejs.org/dist/)
    此文件作用是在node-gyp rebuild 是所需要下载的文件

* 系统安装准备 
    * node 安装完毕
    * npm config list 设置
      npm config set registry=http://22.11.64.175:7001 （行内npm 代理）
      
     npm install npm -g  升级npm

###  npm离线安装minidev （linux系统操作 /window 系统 自行百度）
* 查找npm-cli 执行目录
 
  *<font color="#f7f">如果非常清楚npm安装在哪里，而且有操作权限 请忽略前三步</font>* 
1. which npm   查看  执行目录 如： /usr/local/bin/npm  *<font face="仿宋" color=red size=2> 每台电脑目录可能都不一样</font>*  
2. ls -l /usr/local/bin/npm ls*<font face="仿宋" color=red size=2> 刚才的目录</font>*  此时终端会输出   /usr/local/bin/npm -> ../lib/node_modules/npm/bin/npm-cli.js  
3. 此时会得到两个目录  /usr/local/bin/npm 以下文本出现该目录都用  ==[命令执行目录]== 代替
和/usr/local/lib/node_modules/npm/node_modules以下文本出现该目录都用  ==[执行文件目录]==  代替  *<font face="仿宋" color=red size=2> 两个目录每台电脑会不一致，根据自己实际情况再后面的命令中自己替换</font>*     
如果无法操作文件夹或者删除文件执行下面命令
chmod -R 777 /usr/local/bin/npm

 4.  将准备文件中node-gyp-7.0.1.tar.gz 文件 解压 完全替换【执行文件目录】中看到node-gyp  再 node-gyp 目录中执行npm install 执行完根据提示执行 npm audit fix --force
        然后 再执行终端命令  
        
           sudo ln -s  [执行文件目录]/node-gyp/bin/node-gyp.js  /usr/local/bin/node-gyp

        一般会提示 ==[命令执行目录]== 中已存在node-gyp 或者没有权限，终端执行以下命令赋予相对应权限执行
        
           chmod —R 777 [命令执行目录]

       执行 node-gyp -v 验证是否成功，成功输出对应版本7.0.1
 
5.  将 文件node-v14.17.5-header.tar.gz 放入 /data/tarball/ 中 此目录可以自定义，但不可以定义中文或者特殊字符  然后 终端执行两个命令 
     
         npm  config set tarball=/data/tarball/nnode-v14.17.5-header.tar.gz  

    *<font face="仿宋" color=red size=2> set tarball  目录 是自己定义的目录，文件名不要修改</font>*
        
    命令2 ---registry 的参数是自己npm配置的代理。  可以忽略（官方建议传递） 此命令是
            
         npm install minidev -g  --registry=http://22.11.64.175:7001

     执行完毕以后，执行 minidev -v  或者minidev  控制台输出 版本或相关介绍表示安装成功
     如果 出现无权限执行，   执行以下命令，目录来源是 ==[命令执行目录]== 将其中 npm去掉 执行下面

        chmod —R 777   /usr/local/bin/

6. 以上步骤执行完 再次 minidev -v 输出版本号，表示 minidev-cli离线安装完成，


###  minidev编译工具本地化处理
minidev 第一次编译会去网络下载对应的编译文件，否则minidev  dev 和minidev build 都会出问题，下面介绍如何离线打包和编译。
1. 安装minidev 以后 在控制台 输入～/.minidev 找到目录 将minidev.7z 内容全部拷贝过去， 主要是
  assets 和compliers    
2. minidev.7z 文件如何生成的呢  linux系统可以执行 在连接外网电脑的
   mac上执行以下命令
 
       FORCE_DETACHED_COMPILER=1 minidev download-assets —with-compiler
    生成的 文件可以在麒麟系统执行
    window 系统电脑 32位 和64尾 会有不同， 联网外网电脑和离线电脑，系统一致就行。
    如果系统不一致时 FORCE_DETACHED_COMPILER=1  有其他参数，具体咨询第三步提供的官方订订群

3. 针对minidev-cli 有其他问题可以咨询 订订群号: 35669975