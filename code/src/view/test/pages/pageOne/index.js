import optionsData from "./options";
Page({
  ...optionsData,
  onShow(){
    var animation = my.createAnimation({
      duration: 1000,
        timeFunction: 'ease-in-out',
    });

    this.animation = animation;

   // animation.scale(3,3).rotate(60).step();

    // this.setData({
    //   animationInfo:animation.export()
    // });

    setTimeout(function() {
     // animation.translate(35).step();
      animation.scale(3,3).rotate(60).step();
      this.setData({
        animationInfo:animation.export(),
      });
    }.bind(this), 1500);
  },
  rotateAndScale () {
    console.log("执行")
    // 旋转同时放大
    this.animation.rotate(60).scale(3, 3).step();
    this.setData({
      animationInfo: this.animation.export(),
    });
  },
  rotateThenScale () {
    // 先旋转后放大
    this.animation.rotate(160).step();
    this.animation.scale(1, 1).step();
    this.setData({
      animationInfo: this.animation.export(),
    });
  },
  rotateAndScaleThenTranslate () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(60).scale(3, 3).step();
    this.animation.translate(100, 100).step({ duration: 2000 });
    this.setData({
      animationInfo: this.animation.export()
    });
  },
  onLoad(query) {
   
    console.log(optionsData,1212314,process.env)
    
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  didMount() {
    this.$page.page = this; // 通过此操作可以将组件实例挂载到所属页面实例上
  },
  onReady() {
    // 页面加载完成
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
  saveref(ref) {
    // 存储自定义组件实例，方便以后调用
    this.counter = ref;
    console.log(ref,1232132131)
  },

  onOptionMenuClick(){
    this.menu.showMenu()
  }
});