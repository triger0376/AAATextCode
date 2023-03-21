/**
 * 缓存全局对象的值
 * 
*/
export const storageConfig={
    cookie:'STORAGE_COOKIE', // cookie
    token :'STORAGE_TOKEN',  // token
    phone:'STORAGE_Phone'
}
/**
 * 不同环境的url 请求状态
 * 
*/
export const requestUrl={
    default:{
        dev:"http://api.nest.vue-admin.cn/",// 本地调试
        production:'', // 生产打包
    }
}
