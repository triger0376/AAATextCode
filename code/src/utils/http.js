import { storageConfig,requestUrl} from './config'

class wxRequest {
  // constructor(data){
  //     console.log(data,111)
  //     this.a=data.a
  // }

  /**
   *
   * @param {*} data---- 支付宝小程序请求接口全量数据参数
   *  https://help.aliyun.com/document_detail/67556.html
   */
  static requestPremise(data) {
    const params=wxRequest.formaterRequestData(data)
    return new Promise((resolve, reject) => {
      my.request({
        ...params,
        success: function (res) {
          // 需要拓展，//根据后台不同的错误code 做处理，1.错误提示合规 ，2，错误
          if(res.status=='200'){
            resolve(res.data)
          }else{
            reject(res)
          }
          
        },
        fail: function (res) {
          //
          reject(res)
        },
        complete: function (res) {
          typeof complete == 'function' ? complete(res) : my.hideLoading()
        }
      })
    })
  }
  /**
   * 获取请求路径域名或网关
   * @param: type  请求类型，/utils/config/index的requestUrl 配置一一对应
   * @return:String  返回url
   */
 static getHostUrl(type,url){
    let urlObj=requestUrl[type]
    if(urlObj&&process.env.NODE_ENV=='development'){
      url=urlObj.dev+url
    }else if(urlObj){
      url= urlObj.production+url
    }
    return url
  }
   /**
   * 异步get请求
   * * @param {*} data---- 支付宝小程序请求接口全量数据参数
   *  https://help.aliyun.com/document_detail/67556.html
   * data 解析如下：
   *  * *@param: url  请求接口路径，
   *  * *@param: data  请求接口参数
   *  * *@param: complete 接口调用成功或失败执行的参数
   *  * *@param: param,拓展参数特殊如header，
   * @return:Premise 返回一个premise 对象
   */
 static formaterRequestData({
    method = 'post',
    dataType = 'json',
    headers = { 'content-type': 'application/json' },
    type='default', 
    url,
    data,
    complete
  }) {
    let paramsData = {
      method,
      dataType,
      type,
      headers,
      url,
      data,
      complete
    }
    const cookieStr=my.setStorageSync({ key: storageConfig.cookie })
    const tokenStr=my.setStorageSync({ key: storageConfig.cookie })
    if (cookieStr) {
      paramsData.headers['cookie']=cookieStr
    }
    if (tokenStr) {
      paramsData.headers['token']=tokenStr
    }
    paramsData.url=wxRequest.getHostUrl(type,url)
    return paramsData
  }
}

class httpClass extends wxRequest {
  // constructor(data){
  //    super(data)
  // }
  //异步get请求
  /**
   * 异步get请求
   * @param: url  请求接口路径，
   * @param: data  请求接口参数
   * @param: complete 接口调用成功或失败执行的参数
   * @param: param,拓展参数特殊如header，
   * @return:Premise 返回一个premise 对象
   */
  static getHttp({ url, data, complete, param }) {
    const paramsData = {
      url,
      data,
      method: 'get',
      complete: () => {
        complete && complete()
      },
      ...param
    }

    return super.requestPremise(paramsData)
  }
  /**
   * 异步get请求
   * @param: url  请求接口路径，
   * @param: data  请求接口参数
   * @param: complete 接口调用成功或失败执行的参数
   * @param: param,拓展参数特殊如header，
   * @return: 返回一个data 数据 Object
   */
  static async getHttpAsync({ url, data, complete, param }) {
    const paramsData= {
      url,
      data,
      method: 'get',
      complete: () => {
        complete && complete()
      },
      ...param
    }
    const res = await super.requestPremise(paramsData)
    return res
  }
  /**
   * 异步post请求
   * @param: url  请求接口路径，
   * @param: data  请求接口参数
   * @param: complete 接口调用成功或失败执行的参数
   * @param: param,拓展参数特殊如header，
   * @return:Premise 返回一个premise 对象
   */
  static postHttp({ url, data, complete, param }) {
    const paramsData = {
      url,
      data,
      method: 'post',
      complete: () => {
        complete && complete()
      },
      ...param
    }

    return super.requestPremise(paramsData)
  }
  /**
   * 同步post请求
   * @param: url  请求接口路径，
   * @param: data  请求接口参数
   * @param: complete 接口调用成功或失败执行的参数
   * @param: param,拓展参数特殊如header，
   * @return:data 返回一个object 对象
   */
  static async postHttpAsync({ url, data, complete, param }) {
    const paramsData = {
      url,
      data,
      method: 'post',
      complete: () => {
        complete && complete()
      },
      ...param
    }
    
    const res = await super.requestPremise(paramsData)
    return res
  }
  
  static textparam(param1,param2){

  }
}

export default httpClass
