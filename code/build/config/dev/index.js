

const  exceFn= async (minidev,openUrlPath,projectPath,outPath,cachePath)=>{
    const devServerBuild = await minidev.dev({
        project: projectPath,
        hmr: false,
        output: outPath,
       // port: 8080,
        cacheDir:cachePath
      });
      const { devServer } = devServerBuild;
      devServer.once("done", async () => {
        // devServer 构建完成后启动 ide
        const { bundled, separated } = await minidev.devWebSimulator(
          {
           // appId: 2021003145662091,  //但是调用 大量的 js api 会要求有 appid，如果没有的话就会直接失败 mpass 开发 不需要考虑
            autoOpen: false,
          },
          devServerBuild
        );
      
        // bundled 中是 web 版本模拟器 & 调试器的地址, 一般来说打开这个地址运行
       // console.log(bundled, 111);
      
        // 使用默认浏览器打开
        openUrlPath(bundled);
      
        // separated 中是分离的模拟器和调试器的地址，可以用于更复杂的场景进行集成
        // 注意：使用时请为每个会话将 url 中的 __uuid__ 替换成模拟器和调试器一致的 uuid。
         console.log(separated) // 模拟器调试
         
      });
      
      // 注意此时 devServer 还未编译完成
      // console.log(devServer,11111)
      // 添加编译完成的监听
      devServer.on("done", () => {
        console.log("编译完成");
      })
      devServer.on("error", (error) => {
        console.log("编译失败, 错误信息:", error.message);
      });
      
      devServer.on("exit", (code) => {
        console.log("DevServer 进程退出, 退出code", code);
      });
      devServer.on("log", (data) => {
        console.log("[devServer日志]", data);
      });
}

export default {
    exceFn
}