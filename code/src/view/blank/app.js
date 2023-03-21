import http from "../../utils/http"
App({
  async onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch',http);
    http.getHttp({
      url:"api/user"
    }).then(res=>{
      console.log(res,'异步获取数据')
    })
    const data= await http.getHttpAsync({
      url:"api/user"
    })
    console.log('同步获取数据',data)
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
