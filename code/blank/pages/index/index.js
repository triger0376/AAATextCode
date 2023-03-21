import optionsData from "./options";
Page({
  ...optionsData,
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    console.log(getApp().globalData)
    my.getAuthId({
      success:(res)=>{
        my.alert(res.encryptedData)
      }
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
    this.querAllData() // 输出my.requset
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  
});
