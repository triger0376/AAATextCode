App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    my.hideShareMenu({
      success(res){
        console.log('隐藏分享按钮成功1',res)
      },
      complete(res){
        console.log('隐藏分享按钮结束1 ',res)
      }
    });
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    my.hideShareMenu({
      success(res){
        console.log('隐藏分享按钮成功 2',res)
      },
      complete(res){
        console.log('隐藏分享按钮结束 2',res)
      }
    });

  },
  onOptionMenuClick(e){
    console.log(e,1111)
   }
});
/**问题 如何实现快速导航定位页面的方案
 * 1.目前小程序胶囊按钮内的菜单页暂不支持自定义修改。
 * 2.快速导航实现方式，使用tabBar
 * 3.使用 json配置  在自定义一个顶部图标， 点击图标事件onOptionMenuClick 弹出一个自定义组件的 带透明蒙层，以及要点击的菜单
 *   第三中方式需要解决的问题，1. 不适用props 传递数据，因为是全局导航，不想额外增加 data 的数据交互，
     解决方案如下
 *    父组件调用子组件方法，子组件可以通过this.$page 直接操作当前Page 所有东西
 *    组件和组件直接可以通过Ref来实现相互调用 page 不行
 *    解决问题；mpass 官方文档，父组件通过ref调用子组件，方式无法执行，且文档是错误的，
 *    通过其他小程序经验尝试page 页面对象挂载实现 实现方式
 *       didMount(){
           this.$page.menu = this
      },
 *   
 * **/