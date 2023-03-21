const list = [
  {
    name: '基础小程序', // 最后一项不可删除， 这个是小程序demo-api ，用于工作中开发各种组件和样式规范的展示
    path: '/blank', // 所在路径
    appId: {
      test: '33333331', //测试
      build: '33333332' //生产
    }
  },
  {
    name: '小程序名称1',
    path: '/src/view/blank', // 所在路径
    appId: {
      // 开发环境不需要
      test: '111111111', //测试
      build: '111111112' //生产
    }
  },
  {
    name: '小程序名称2',
    path: '/src/view/blank2', // 所在路径
    appId: {
      test: '222221', //测试
      build: '222223' //生产
    }
  }
,{

        name: '我是第一个测试小程序',
        path: '/src/view/test', // 所在路径
        appId: {
          test: 1111111111111, //测试
          build: 222222222222 //生产
        }
        }
        ]


export default {
  list
}
