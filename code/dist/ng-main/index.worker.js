/* build:0.67.14 */var __scriptTimeBegin4Bundle = Date && Date.now && Date.now();var __scriptName4Bundle = "index.worker.js";
/*! 
[PositionForHostEntryCodeBegin]
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/pLl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegExp = exports.getDate = void 0;
function getDate() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new (Function.prototype.bind.apply(Date, [Date].concat(args)))();
}
exports.getDate = getDate;
function getRegExp() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new (Function.prototype.bind.apply(RegExp, [RegExp].concat(args)))();
}
exports.getRegExp = getRegExp;
//# sourceMappingURL=identifier.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EEn7");


/***/ }),

/***/ "0PiD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.gcp = void 0;
function gcp(target, args, isFunction) {
    var ret = target;
    var lastArg;
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var id = args_1[_i];
        if (ret == null) {
            break;
        }
        lastArg = ret;
        ret = ret[id];
    }
    if (isFunction) {
        if (typeof ret !== 'function') {
            return noop;
        }
        else {
            return ret.bind(lastArg);
        }
    }
    return ret;
}
exports.gcp = gcp;
function noop() { }
//# sourceMappingURL=member.js.map

/***/ }),

/***/ "2PUx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("3Tw2");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "3Tw2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;

$global.$addComponentConfig({
  componentPath: "/../../components/menu/index",
  options: function options() {
    return __webpack_require__("40c3");
  }
});

Component({
  mixins: [], // minxin 方便复用代码
  data: {
    show: false

  }, // 组件内部数据
  props: {}, // 可给外部传入的属性添加默认值
  didMount: function didMount() {
    this.$page.menu = this;
  },
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},

  methods: {
    // 自定义方法
    showMenu: function showMenu() {
      this.setData({ show: true }); // 可使用 setData 改变内部属性
    },
    hideShow: function hideShow() {
      this.setData({ show: false }); // 可使用 setData 改变内部属性
    },
    goNavtive: function goNavtive(url) {
      my.navigateTo({
        url: url
      });
    }
  }
});

/***/ }),

/***/ "3hiQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;
exports.default = {
  text: "操作文本",
  show: false,
  animationInfo: {},
  list: [{ type: 1 }, { type: 2 }, { type: 3 }, { type: 2 }, { type: 2 }]
};
module.exports = exports["default"];

/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  
  var helper = __webpack_require__("6Pxl").helper;
  var helper_ = __webpack_require__("5bSn");var sjs = helper_.sjs, inlineHelper = helper_.inline;

  

  

  

  var included = {
    
  };
  var $$helper = /*#__PURE__*/ helper;
  var renderContext = {
    l: inlineHelper,
    h: helper,
    s: {},
    i: included,
    t: {}
  };

  var exportNamed = {
    
  };

  var exportDefault = {
    zcomponent: (
function getComponent($r_0, $R_0) {

function m_0($C_0, c_0) {
var n__0;
return {
c: function () {
var hn_1 = 1;

  return hn_1
},
m: function (){},
u: function () {
var hn_1 = 1;
  return hn_1
},
d: function (){},
}
}


function ccc_0($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


function ccb_0($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


  return {
    fragment: m_0
  };

}
).bind(null, renderContext),

    style: null  
  };

  var usingComponents = {
    
  };
  exports.exportNamed = exportNamed; exports.exportDefault = exportDefault; exports.usingComponents = usingComponents;
  

/***/ }),

/***/ "4KN3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function(r,p){var e=p.AFAppX,p=p.$AppxFramework;return!!(e&&e.$AppxFramework||p)};

/***/ }),

/***/ "5Mvt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;
exports.default = {
    querAllData: function querAllData() {
        console.log(my.request);
    }
};
module.exports = exports["default"];

/***/ }),

/***/ "5bSn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 不能存在 export *, import *
Object.defineProperty(exports, "__esModule", { value: true });
exports.inline = exports.mediaQueryMatch = exports.gcp = exports.sjs = void 0;
var sjs_1 = __webpack_require__("Grxn");
var member_1 = __webpack_require__("0PiD");
var style_1 = __webpack_require__("sMJU");
exports.sjs = {
    callProperty4Object: sjs_1.callProperty4Object,
    functionApplyWithTransformedArguments: sjs_1.functionApplyWithTransformedArguments,
    getProperty4Object: sjs_1.getProperty4Object,
    identifier: sjs_1.identifier,
    interpolateDefault: sjs_1.interpolateDefault,
    interpolateExport: sjs_1.interpolateExport,
    setProperty4Object: sjs_1.setProperty4Object,
    transformProperty: sjs_1.transformProperty,
};
exports.gcp = member_1.gcp;
exports.mediaQueryMatch = style_1.mediaQueryMatch;
exports.inline = {
    _gcp: exports.gcp,
    g: exports.gcp,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "6Pxl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (typeof $AppxFramework === 'undefined') {
    // console.log('[APPX][Web] $AppxFramework not found, try to load framework from url'); //tslint:disable-line
    importScripts('https://appx/af-appx.worker.min.js');
    if (typeof $AppxFramework !== 'undefined') {
        // console.log('[APPX][Web] $AppxFramework load success'); //tslint:disable-line
    }
    else {
        throw new Error('[APPX][Web] $AppxFramework load fail');
    }
}
else {
    // console.log('[APPX][Web] $AppxFramework found'); //tslint:disable-line
    // 框架内置引入
}
module.exports = $AppxFramework;
//# sourceMappingURL=framework.external.concurrent.appx.js.map

/***/ }),

/***/ "7+yZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  
  var helper = __webpack_require__("6Pxl").helper;
  var helper_ = __webpack_require__("5bSn");var sjs = helper_.sjs, inlineHelper = helper_.inline;

  

  

  

  var included = {
    
  };
  var $$helper = /*#__PURE__*/ helper;
  var renderContext = {
    l: inlineHelper,
    h: helper,
    s: {},
    i: included,
    t: {}
  };

  var exportNamed = {
    
  };

  var exportDefault = {
    zcomponent: (
function getComponent($r_0, $R_0) {

function m_0($C_0, c_0) {
var r__6;
var r__5;
var r__4;
var r__3;
var r__2;
var r__1;
var r__0;
var e__0;
var n__5;
var n__4;
var n__3;
var n__2;
var n__1;
var n__0;
return {
c: function () {
var hn_1 = 1;

  return hn_1
},
m: function (){},
u: function () {
var ce__0;
var hn_1 = 1;
  return hn_1
},
d: function (){},
}
}


  return {
    fragment: m_0
  };

}
).bind(null, renderContext),

    style: null  
  };

  var usingComponents = {
    
  };
  exports.exportNamed = exportNamed; exports.exportDefault = exportDefault; exports.usingComponents = usingComponents;
  

/***/ }),

/***/ "BAT/":
/***/ (function(module, exports) {

module.exports = {"keys":[],"map":{}}

/***/ }),

/***/ "EEn7":
/***/ (function(module, exports, __webpack_require__) {


  (function (hostGlobal) {
    if (!hostGlobal.__appxInited) {
      if (hostGlobal.importScripts) {
        if(!hostGlobal.Map || !hostGlobal.Set || !hostGlobal.Symbol) {
          importScripts('https://gw.alipayobjects.com/as/g/appx_release/deps/1.0.3/es6-set-map-symbol.js');
        }
        if (!hostGlobal.AFAppX) {
          importScripts("https://appx/af-appx.worker.min.js");
        }
      }
      hostGlobal.__appxInited = 1;
      var callback = function () {
        __webpack_require__("GfhN");
__webpack_require__("mSc6");
__webpack_require__("vxWR")
      }
      
        var appCallback = function () {
          __webpack_require__("GfhN");
        };
        var pageRequestPaths = [
          "pages/pageOne/index",
"pages/index/index"
        ];
        var pageRequests = {
          "pages/pageOne/index": function () {
                __webpack_require__("mSc6");
              },
"pages/index/index": function () {
                __webpack_require__("vxWR");
              }
        }

        var engine0detect = __webpack_require__("4KN3");
        if ( engine0detect(0, hostGlobal) ) {
          var engine0init = __webpack_require__("Ga85");
          engine0init(0, hostGlobal, callback, appCallback, pageRequests, pageRequestPaths)
          return;
        }
    }
  })(typeof global !== 'undefined' ? global : self);

/***/ }),

/***/ "Ga85":
/***/ (function(module, exports) {


  module.exports = function (engineIndex, appGlobal, codeCallback, appCallback, pageRequests, pageRequestPaths) {
    var AppxFramework = appGlobal.$AppxFramework;
    var meta = {"__compile_info__":{"component2":false,"hydratable":false,"zephyrFlag":10,"spmVisualJson":/*! 
[PositionForHostSpmVisualJSONBegin]
 */
undefined
/*! 
[PositionForHostSpmVisualJSONEnd]
 */
},"pages":["pages/pageOne/index","pages/index/index"],"subPackageBuildType":"independent","tabBar":{"backgroundColor":12208098,"items":[{"name":"首页","pagePath":"pages/pageOne/index"},{"name":"日志","pagePath":"pages/index/index"}],"selectedColor":4827630,"textColor":16777215},"window":{"defaultTitle":"My App"}};
    var pageMeta = {"pages/pageOne/index":{"pullRefresh":true,"defaultTitle":"页面下拉刷新和上拉加载","optionMenu":{"icon":"https://img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png"}}};/*! 
[PositionForHostAppXMetaInited]
 */
    var style = appGlobal.$AppxStyleRegistry;
    var accessor = {
      getProperty: function (key) {
        return appGlobal[key];
      },
      setProperty: function (key, value) {
        appGlobal[key] = value;
      }
    };
    var addPageConfig = function () {
      var config = arguments[engineIndex];
      $AppxRegistry.registerPageLogicConfig(config);
      if(config.options) {
        $AppxRegistry.registerPageHostRenderConfig(config);
      }
    };
    var addComponentConfig = function () {
      var config = arguments[engineIndex];
      $AppxRegistry.registerComponentLogicConfig(config);
      if(config.options) {
        $AppxRegistry.registerComponentHostRenderConfig(config);
      }
    }
    var initCallback = function () {
      appGlobal.App = appGlobal.App || $AppxRegistry.registerAppLogicOption;
      appGlobal.Page = appGlobal.Page || $AppxRegistry.registerPageLogicOption;
      var $Component = appGlobal.Component = appGlobal.Component || $AppxRegistry.registerComponentLogicOption;
      appGlobal.Component = function () {try {return $Component.apply(this, arguments);}  catch(_) {}}
      appGlobal.$global = appGlobal.$global || (appGlobal.$global = {});
      appGlobal.$global.$addPageConfig = addPageConfig;
      appGlobal.$global.$addComponentConfig = addComponentConfig;
      if (appGlobal.abridge === undefined) { appGlobal.abridge = appGlobal.my; }
      if (appGlobal.global === undefined) { appGlobal.global = appGlobal; }/*! 
[PositionForHostUserCodeBegin]
 */
    }
    var bootstrapCallback = function () {
      initCallback();
      codeCallback();
    }
      
    var bootstrap = function () {
      AppxFramework["bootstrapInAppContextByProtocol"]({
        runtimeProtocol: 93,
        meta: meta,
        pageMeta: pageMeta,
        style: style,
        accessor: accessor,
        callback: bootstrapCallback,
        pageInfo: {
          type: 1,
          init: initCallback,
          app: appCallback,
          pagePaths: pageRequestPaths,
          pages: pageRequests,
        }
      })
    }
    if (AppxFramework.setBootstrapCallback) {
      AppxFramework.setBootstrapCallback(bootstrap);
    } else {
      bootstrap();
    }
  }
  

/***/ }),

/***/ "GfhN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;
App({
  onLaunch: function onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    my.hideShareMenu({
      success: function success(res) {
        console.log('隐藏分享按钮成功1', res);
      },
      complete: function complete(res) {
        console.log('隐藏分享按钮结束1 ', res);
      }
    });
  },
  onShow: function onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    my.hideShareMenu({
      success: function success(res) {
        console.log('隐藏分享按钮成功 2', res);
      },
      complete: function complete(res) {
        console.log('隐藏分享按钮结束 2', res);
      }
    });
  },
  onOptionMenuClick: function onOptionMenuClick(e) {
    console.log(e, 1111);
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

/***/ }),

/***/ "Grxn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 不能存在 export *, import *
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
exports.identifier = exports.getProperty4Object = exports.transformProperty = exports.functionApplyWithTransformedArguments = exports.setProperty4Object = exports.interpolateExport = exports.interpolateDefault = exports.callProperty4Object = void 0;
function callProperty4Object(propertyName, object, args) {
    var result = getProperty4Object(propertyName, object);
    return result.apply(object, args);
}
exports.callProperty4Object = callProperty4Object;
function interpolateDefault(obj) {
    return obj && obj.__esModule ? obj.default : obj;
}
exports.interpolateDefault = interpolateDefault;
function interpolateExport(exp) {
    var obj = exp;
    var ret = {};
    if (obj) {
        if (typeof obj === 'function') {
            return obj;
        }
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (typeof value === 'function') {
                // 直接改 obj[key] 可能由于 configurable: false 崩溃
                var fn = function () {
                    var args = Array.prototype.slice.call(arguments).map(function (arg) { return transformProperty(arg); });
                    return value.apply(null, args);
                };
                fn.toString = function () {
                    return value.toString();
                };
                ret[key] = fn;
            }
            else if (value && Array.isArray(value)) {
                ret[key] = value;
            }
            else if (value && typeof value === 'object') {
                // recursive
                ret[key] = interpolateExport(value);
            }
            else {
                ret[key] = obj[key];
            }
        });
    }
    return ret;
}
exports.interpolateExport = interpolateExport;
function setProperty4Object(propertyName, object, operator, right) {
    // 如果设置的属性不是 hasOwnProperty，则不允许设置
    if (!Object.hasOwnProperty.call(object, propertyName) && propertyName in object) {
        throw new Error('can not set property to proto in sjs');
    }
    switch (operator) {
        case '=':
            object[propertyName] = right;
            break;
        case '+=':
            object[propertyName] += right;
            break;
        case '-=':
            object[propertyName] -= right;
            break;
        case '*=':
            object[propertyName] *= right;
            break;
        case '/=':
            object[propertyName] /= right;
            break;
        case '%=':
            object[propertyName] %= right;
            break;
        case '<<=':
            object[propertyName] <<= right;
            break;
        case '>>=':
            object[propertyName] >>= right;
            break;
        // case ">>>=": object[propertyName] >>>= right; break;
        case '|=':
            object[propertyName] |= right;
            break;
        case '^=':
            object[propertyName] ^= right;
            break;
        case '&=':
            object[propertyName] &= right;
            break;
        case '++':
            object[propertyName]++;
            break;
        case '--':
            object[propertyName]--;
            break;
    }
    return object[propertyName];
}
exports.setProperty4Object = setProperty4Object;
function functionApplyWithTransformedArguments(thisCtx, args) {
    var transformedArguments = args.map(function (i, index) { return getProperty4Object(index, args); });
    return this.apply(thisCtx, transformedArguments);
}
exports.functionApplyWithTransformedArguments = functionApplyWithTransformedArguments;
function transformProperty(value) {
    switch (value) {
        // 如果属于需要保护的对象，则如下处理
        case Object:
            return 'Object';
        case Function:
            return 'Function';
        case Array:
            return 'Array';
        case String:
            return 'String';
        case Boolean:
            return 'Boolean';
        case Date:
            return 'Date';
        case RegExp:
            return 'RegExp';
        case Number:
            return 'Number';
        case Function.prototype.apply:
            return functionApplyWithTransformedArguments;
    }
    return value;
}
exports.transformProperty = transformProperty;
function getProperty4Object(propertName, object) {
    // 如果报错属于开发者问题
    var result = object[propertName];
    return transformProperty(result);
}
exports.getProperty4Object = getProperty4Object;
var identifier_1 = __webpack_require__("/pLl");
exports.identifier = {
    getDate: identifier_1.getDate,
    getRegExp: identifier_1.getRegExp,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "QFAH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  
  var helper = __webpack_require__("6Pxl").helper;
  var helper_ = __webpack_require__("5bSn");var sjs = helper_.sjs, inlineHelper = helper_.inline;

  

  

  

  var included = {
    
  };
  var $$helper = /*#__PURE__*/ helper;
  var renderContext = {
    l: inlineHelper,
    h: helper,
    s: {},
    i: included,
    t: {}
  };

  var exportNamed = {
    
  };

  var exportDefault = {
    zcomponent: (
function getComponent($r_0, $R_0) {
var H_0 = $R_0.h;
var $h__0 = H_0["p"];
var C_0 = $R_0.c;
function m_0($C_0, c_0) {
var r__5;
var r__4;
var r__3;
var r__2;
var r__1;
var r__0;
var e__1;
var e__0;
var n__4;
var n__3;
var n__2;
var n__1;
var n__0;
n__2 = H_0.l(C_0("/../../components/menu/index"), $C_0, null //;
);
return {
c: function () {
var hn_1 = 1;
r__3 = "tom";
e__1 = c_0.show;
r__4 = e__1;
H_0.c(n__2, { //;
  "name": r__3, //;
  "show": r__4, //;
}, [ //;
  "name", //;
  "show", //;
], 2);

},
m: function (t_0, a_0) {
H_0.m(n__2, t_0, a_0);
},
u: function (f_0, d_0) {
var ce__1;
var ce__0;
var hn_1 = 1;
if (f_0["show"]) {;
  e__1 = d_0.show;
  ce__1 = true;
};
if (ce__1) {;
  var lc_0 = r__4 !== (r__4 = e__1);
  if (lc_0) {;
    $h__0(n__2, { //;
      "show": r__4, //;
    }, { //;
      "show": lc_0, //;
    });
  };
};
},
d: function (r_0) {
H_0.o(n__2, r_0);
},
}
}


function cec_0($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


function cei_0($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


function ccc_0($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


function ccb_0($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


function ccc_1($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


function ccb_1($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


function ccc_2($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


function ccb_2($C_0, c_0) {

return {
c: function () {},
m: function (){},
u: function (){},
d: function (){},
}
}


  return {
    fragment: m_0
  };

}
).bind(null, renderContext),

    style: null  
  };

  var usingComponents = {
    "menu": "/../../components/menu/index"
  };
  exports.exportNamed = exportNamed; exports.exportDefault = exportDefault; exports.usingComponents = usingComponents;
  

/***/ }),

/***/ "RLq3":
/***/ (function(module, exports) {

module.exports = {"keys":["/../../components/menu/index"],"map":{"/../../components/menu/index":1}}

/***/ }),

/***/ "Vhkj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("uugB");

var _extends3 = _interopRequireDefault(_extends2);

var _data = __webpack_require__("ecN5");

var _data2 = _interopRequireDefault(_data);

var _queryData = __webpack_require__("5Mvt");

var _queryData2 = _interopRequireDefault(_queryData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;

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

exports.default = (0, _extends3.default)({
  data: _data2.default }, _queryData2.default, {
  // 各种接口请求方法
  // 事件定义处理，
  handleTap: function handleTap(event) {
    console.log("yo! view tap!", event);
    this.setData({
      text: "changed data"
    });
  }
});
module.exports = exports['default'];

/***/ }),

/***/ "WvBh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;
exports.default = {
    querAllData: function querAllData() {
        console.log(my.request);
    }
};
module.exports = exports["default"];

/***/ }),

/***/ "ecN5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;
exports.default = {
    text: "操作文本"
};
module.exports = exports["default"];

/***/ }),

/***/ "h4P+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("uugB");

var _extends3 = _interopRequireDefault(_extends2);

var _options = __webpack_require__("zXJI");

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;

$global.$addPageConfig({
  pagePath: "pages/pageOne/index",
  options: function options() {
    return __webpack_require__("QFAH");
  },
  renderType: 24,
  allComponents: __webpack_require__("RLq3")
});

Page((0, _extends3.default)({}, _options2.default, {
  onShow: function onShow() {
    var animation = my.createAnimation({
      duration: 1000,
      timeFunction: 'ease-in-out'
    });

    this.animation = animation;

    // animation.scale(3,3).rotate(60).step();

    // this.setData({
    //   animationInfo:animation.export()
    // });

    setTimeout(function () {
      // animation.translate(35).step();
      animation.scale(3, 3).rotate(60).step();
      this.setData({
        animationInfo: animation.export()
      });
    }.bind(this), 1500);
  },
  rotateAndScale: function rotateAndScale() {
    console.log("执行");
    // 旋转同时放大
    this.animation.rotate(60).scale(3, 3).step();
    this.setData({
      animationInfo: this.animation.export()
    });
  },
  rotateThenScale: function rotateThenScale() {
    // 先旋转后放大
    this.animation.rotate(160).step();
    this.animation.scale(1, 1).step();
    this.setData({
      animationInfo: this.animation.export()
    });
  },
  rotateAndScaleThenTranslate: function rotateAndScaleThenTranslate() {
    // 先旋转同时放大，然后平移
    this.animation.rotate(60).scale(3, 3).step();
    this.animation.translate(100, 100).step({ duration: 2000 });
    this.setData({
      animationInfo: this.animation.export()
    });
  },
  onLoad: function onLoad(query) {

    console.log(_options2.default, 1212314, Object({"NODE_ENV":"development"}));

    // 页面加载
    console.info("Page onLoad with query: " + JSON.stringify(query));
  },
  didMount: function didMount() {
    this.$page.page = this; // 通过此操作可以将组件实例挂载到所属页面实例上
  },
  onReady: function onReady() {
    // 页面加载完成
  },
  onHide: function onHide() {
    // 页面隐藏
  },
  onUnload: function onUnload() {
    // 页面被关闭
  },
  onTitleClick: function onTitleClick() {
    // 标题被点击
  },
  saveref: function saveref(ref) {
    // 存储自定义组件实例，方便以后调用
    this.counter = ref;
    console.log(ref, 1232132131);
  },
  onOptionMenuClick: function onOptionMenuClick() {
    this.menu.showMenu();
  }
}));

/***/ }),

/***/ "kn/5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("uugB");

var _extends3 = _interopRequireDefault(_extends2);

var _options = __webpack_require__("Vhkj");

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;

$global.$addPageConfig({
  pagePath: "pages/index/index",
  options: function options() {
    return __webpack_require__("7+yZ");
  },
  renderType: 24,
  allComponents: __webpack_require__("BAT/")
});

Page((0, _extends3.default)({}, _options2.default, {
  onLoad: function onLoad(query) {
    console.log(_options2.default);
    // 页面加载
    console.info("Page onLoad with query: " + JSON.stringify(query));
  },
  onReady: function onReady() {
    // 页面加载完成
  },
  onShow: function onShow() {
    // 页面显示
    this.querAllData(); // 输出my.requset
  },
  onHide: function onHide() {
    // 页面隐藏
  },
  onUnload: function onUnload() {
    // 页面被关闭
  },
  onTitleClick: function onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh: function onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom: function onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage: function onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index'
    };
  }
}));

/***/ }),

/***/ "mSc6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("2PUx");
/* harmony import */ var M_1_ = __webpack_require__("h4P+");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "sMJU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaQueryMatch = void 0;
function mediaQueryMatch(querys) {
    if (querys === void 0) { querys = []; }
    /**
     * 参数保护确定是数组
     * undefined 会被上面处理成默认 []
     * null boolean number 会返回 false
     */
    if (Object.prototype.toString.call(querys) !== '[object Array]') {
        return false;
    }
    /**
     * 确定是个object
     */
    if (typeof WXEnvironment !== 'object' || WXEnvironment === null) {
        return false;
    }
    /**
     * 转换数据
     * 如果有单位则会返回 nan
     */
    var scale = +WXEnvironment.scale;
    if (scale === 0 || isNaN(scale)) {
        return false;
    }
    for (var _i = 0, querys_1 = querys; _i < querys_1.length; _i++) {
        var query = querys_1[_i];
        /**
         * 转换数据
         * 如果有单位则会返回 nan
         */
        var rawValue = +WXEnvironment[query.name];
        // 保证数字
        if (rawValue === 0 || isNaN(rawValue)) {
            return false;
        }
        var res = rawValue / scale - query.value;
        // res NAN
        if (isNaN(res)) {
            return false;
        }
        if (query.op === 0 && Math.abs(res) > 1e-3) {
            // TODO: 目前只有这种
            // 要求相等的时候，但是 |差距| 小于 0.001
            return false;
        }
        else if (res * query.op < 0) {
            // 要求大小于，但是结果不同号，所以要false。
            return false;
        }
    }
    return true;
}
exports.mediaQueryMatch = mediaQueryMatch;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "uugB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var slice = Array.prototype.slice;
module.exports = Object.assign ||
    function _extends(to) {
        var from = slice.call(arguments, 1);
        from.forEach(function t(f) {
            if (f && typeof f === 'object') {
                Object.keys(f).forEach(function tt(k) {
                    to[k] = f[k];
                });
            }
        });
        return to;
    };
//# sourceMappingURL=extends.js.map

/***/ }),

/***/ "vxWR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("kn/5");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "zXJI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("uugB");

var _extends3 = _interopRequireDefault(_extends2);

var _data = __webpack_require__("3hiQ");

var _data2 = _interopRequireDefault(_data);

var _queryData = __webpack_require__("WvBh");

var _queryData2 = _interopRequireDefault(_queryData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;

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

exports.default = (0, _extends3.default)({
  data: _data2.default }, _queryData2.default, {
  // 各种接口请求方法
  // 事件定义处理，
  handleTap: function handleTap(event) {
    console.log("yo! view tap!", event);
    this.setData({
      text: "changed data"
    });
  },

  //页面下拉刷新功能
  onPullDownRefresh: function onPullDownRefresh() {
    var _self = this;
    // 页面被下拉
    my.showLoading({
      content: '开始接口请求',
      delay: 0
    });
    console.log('重置请求接口参数，调用请求接口方法刷新数据');
    setTimeout(function () {
      console.log('请求接口成功，获取接口返回数据，改不列表数据', new Date());
      my.stopPullDownRefresh({
        success: function success(res) {
          my.hideLoading();
          my.showToast({
            type: 'success',
            content: '接口数据更新成功',
            duration: 700,
            success: function success() {
              _self.setData({
                text: "接口更新数据成功",
                list: [{ type: 1 }, { type: 2 }, { type: 3 }, { type: 2 }, { type: 2 }]
              });
            }
          });
        },
        complete: function complete(res) {
          console.log(res, new Date());
        }
      });
    }, 3000);
  },
  onReachBottom: function onReachBottom() {
    // 页面被拉到底部`````
    var _self = this;
    var copyList = this.data.list.map(function (item) {
      return item;
    });
    my.showLoading({
      content: '加载数据中',
      delay: 0
    });
    setTimeout(function () {
      my.hideLoading();
      copyList.push.apply(copyList, [{ type: 1 }, { type: 2 }, { type: 3 }]);
      _self.setData({
        list: copyList
      });
    }, 1000);
  }
});
module.exports = exports['default'];

/***/ })

/******/ });
var __scriptTimeEnd4Bundle = Date && Date.now && Date.now();
//# sourceMappingURL=index.worker.js.map