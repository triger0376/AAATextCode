
/***
 * 
 * 1. 便于逻辑复用，如接口请求，事件绑定，方便拷贝复用
 * 2. 页面逻辑过于复杂可以可以将data[基础数据]，queryData[接口请求操作定义进一步按照模块拆分]
 * 3. 当多页面逻辑业务相似，操作逻辑相似，可以做合并（代码高内聚低耦合） 合并要有度，尽量不是一个业务模块不要创建太高的耦合代码
 * 4. 该文件自身，用于事件处理，事件也可以单独拆一个js文件，没有拆的原因是 事件往往伴随数据处理和接口请求处理而去可能是多个，因此位了方便查看相关引用，关联关系古没有拆分
 * 5. queryData 是定义接口请求对象 在page/index/index.js 中各个生命周期可以直接引用，
 * 6. 所有函数定义引用this对象时，必须使用箭头函数。
 * 7.如有其他疑问和建议联系微信-Lh910376
 * **/

import data from './data.js'
import queryData from './queryData.js'
export default {
  data, // 基础数据定义
  ...queryData, // 各种接口请求方法
  // 事件定义处理，
  handleTap(event) {
    console.log("yo! view tap!", event);
    this.setData({
      text: "changed data",
    });
  },
  //页面下拉刷新功能
  onPullDownRefresh() {
  let _self=this
    // 页面被下拉
   my.showLoading({
     content: '开始接口请求',
     delay: 0
   });
    console.log('重置请求接口参数，调用请求接口方法刷新数据')
    setTimeout(()=>{
     console.log('请求接口成功，获取接口返回数据，改不列表数据', new Date())
     my.stopPullDownRefresh({
       success(res){
        my.hideLoading();
         my.showToast({
          type: 'success',
          content: '接口数据更新成功',
          duration: 700,
          success: () => {
            _self.setData({
              text: "接口更新数据成功",
              list:[
                {type:1},
                {type:2},
                {type:3},
                {type:2},
                {type:2},
              ]
            });
          },
        });
       },
       complete(res) {
         console.log(res, new Date())
       }
     })
    },3000)
 },
 onReachBottom() {
  // 页面被拉到底部`````
  let _self=this
  let copyList=this.data.list.map(item=>item)
    my.showLoading({
      content: '加载数据中',
      delay: 0
    });
    setTimeout(()=>{
      my.hideLoading();
      copyList.push(...[{type:1},
        {type:2},
        {type:3}])
      _self.setData({
        list:copyList,
      });
    },1000)
},
}
