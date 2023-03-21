

Component({
  mixins: [], // minxin 方便复用代码
  data:{
    show:false
    
  }, // 组件内部数据
  props: { }, // 可给外部传入的属性添加默认值
  didMount(){
    this.$page.menu = this
  },
  didUpdate(){},
  didUnmount(){
   
  },
  methods: {   // 自定义方法
    showMenu() {
        this.setData({ show: true}); // 可使用 setData 改变内部属性
    },
    hideShow() {
      this.setData({ show: false}); // 可使用 setData 改变内部属性
  },
  goNavtive(url){
    my.navigateTo({
      url,
    });
  }

  },
})