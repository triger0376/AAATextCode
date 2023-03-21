
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
}
