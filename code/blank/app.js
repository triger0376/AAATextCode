App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    let app = getApp();
    app.globalData.tagetName='1111'
   console.log(app.globalData,1111)

  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    let app = getApp();
    console.log(app.globalData,2222)
    app.globalData.tagetName='2222'
  },
  globalData: {
    // 全局数据
    name: 'mPaaS',
  },
});
