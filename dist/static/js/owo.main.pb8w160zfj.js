// Fri Oct 18 2019 17:39:11 GMT+0800 (GMT+08:00)

// 存储页面基本信息
var owo = {
  // 手机入口
  phoneEnter: "null",
  // 全局方法变量
  tool: {},
  // 框架状态变量
  state: {}
};
/*
  存储每个页面的函数
  键名：页面名称
  键值：方法列表
*/

owo.script = {
  "home": {
    "created": function created() {},
    "template": {
      "topBar": {
        "prop": {
          "name": "topBar",
          "logo": "http://www.people.com.cn/img/2016people/images/rmw_logo.png",
          "src": "https://owo.ink/public/f328a09df7e4e0adc0303287f5e1bcc5.page"
        }
      },
      "nav": {
        "data": {
          "itemLiat": [{
            "url": "http://www.people.com.cn/",
            "name": "新闻"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "公告"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "户外大咖说"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "装备科技"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "户外空间"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "影像"
          }]
        },
        "prop": {
          "name": "nav",
          "src": "https://owo.ink/public/7a47ef367169c9579b2d164e4dc953e8.page"
        }
      },
      "44V6SpMv": {
        "data": {
          "swiper": null
        },
        "created": function created() {
          var _this = this;

          this.data.swiper = new Swiper('.swiper-container-p2', {
            mode: 'horizontal',
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            loop: true,
            slidesPerView: 1,
            mousewheelControl: false,
            onSlideChangeStart: function onSlideChangeStart(swiper) {
              _this.$el.getElementsByClassName('thisp')[0].innerText = swiper.activeLoopIndex + 1;
            }
          });
          this.$el.getElementsByClassName('allp')[0].innerText = this.data.swiper.slides.length;
        },
        "stop": function stop() {
          this.data.swiper.stopAutoplay();
        },
        "start": function start() {
          this.data.swiper.startAutoplay();
        },
        "prev": function prev() {
          this.data.swiper.swipePrev();
        },
        "next": function next() {
          this.data.swiper.swipeNext();
        },
        "prop": {
          "name": "44V6SpMv",
          "src": "https://owo.ink/public/63a4be6677258acd991f865794e5605e.page"
        }
      },
      "imageShow": {
        "prop": {
          "name": "imageShow",
          "src": "./src/module/imageShow.owo"
        }
      },
      "imageShow-1": {
        "prop": {
          "name": "imageShow",
          "src": "./src/module/imageShow.owo"
        }
      },
      "imageShow-2": {
        "prop": {
          "name": "imageShow",
          "src": "./src/module/imageShow.owo"
        }
      },
      "a5Jkh9zomp95ftbW": {
        "prop": {
          "name": "a5Jkh9zomp95ftbW",
          "src": "https://owo.ink/public/f6f3e7e8691c2cf683f992fe7f24f22a.page"
        }
      },
      "a5Jkh9zomp95ftbW-1": {
        "prop": {
          "name": "a5Jkh9zomp95ftbW",
          "src": "https://owo.ink/public/f6f3e7e8691c2cf683f992fe7f24f22a.page"
        }
      },
      "show": {
        "prop": {
          "name": "show",
          "src": "https://owo.ink/public/1daac229a234cff3f81bdd31868e298f.page"
        }
      },
      "selectBox": {
        "prop": {
          "name": "selectBox",
          "src": "./src/module/selectBox.owo"
        }
      },
      "peopleNewsList": {
        "created": function created() {
          var _this2 = this;

          this.changeItem(0);
          var newsList = owo.query('.qiehuan1 i');

          var _loop = function _loop(ind) {
            newsList[ind].onmouseover = function () {
              _this2.changeItem(ind);
            };
          };

          for (var ind = 0; ind < newsList.length; ind++) {
            _loop(ind);
          }
        },
        "changeItem": function changeItem(index) {
          var menuList = owo.query('.qiehuan1 i');
          var newsList = owo.query('.headingNews');

          for (var ind = 0; ind < newsList.length; ind++) {
            newsList[ind].style.display = 'none';
          }

          for (var _ind = 0; _ind < menuList.length; _ind++) {
            menuList[_ind].classList.remove('one');
          }

          newsList[index].style.display = 'block';
          menuList[index].classList.add('one');
        },
        "prop": {
          "name": "peopleNewsList",
          "src": "./src/module/peopleNewsList.owo"
        }
      },
      "imageShowList": {
        "prop": {
          "name": "imageShowList",
          "src": "./src/module/imageShowList.owo"
        }
      },
      "list": {
        "prop": {
          "name": "list",
          "src": "https://owo.ink/public/349aee08654c8b9ad14262b0d91a0b86.page"
        }
      },
      "imageShowList-1": {
        "prop": {
          "name": "imageShowList",
          "src": "./src/module/imageShowList.owo"
        }
      },
      "imageShowList-2": {
        "prop": {
          "name": "imageShowList",
          "src": "./src/module/imageShowList.owo"
        }
      },
      "show-1": {
        "prop": {
          "name": "show",
          "src": "https://owo.ink/public/1daac229a234cff3f81bdd31868e298f.page"
        }
      },
      "show-2": {
        "prop": {
          "name": "show",
          "src": "https://owo.ink/public/1daac229a234cff3f81bdd31868e298f.page"
        }
      },
      "show-3": {
        "prop": {
          "name": "show",
          "src": "https://owo.ink/public/1daac229a234cff3f81bdd31868e298f.page"
        }
      },
      "copyright": {
        "prop": {
          "name": "copyright",
          "src": "https://owo.ink/public/080195cd2dcfc878e55f9b7f9fa1c9b7.page"
        }
      },
      "Qj0JzJ": {
        "prop": {
          "name": "Qj0JzJ",
          "src": "https://owo.ink/public/e6ab7da94b30399ecf828f1c8c704521.page"
        }
      }
    }
  }
};

/* 方法合集 */
var _owo = {
  /* 运行页面初始化方法 */
  runCreated: function (pageFunction, entryDom) {
    try {
      // 确保created事件只被执行一次
      if (pageFunction.created && !pageFunction["_isCreated"]) {
        pageFunction._isCreated = true
        pageFunction.created.apply(pageFunction)
      }
      
      // console.log(pageFunction)
      if (pageFunction.show) {
        pageFunction.show.apply(pageFunction)
      }
    } catch (e) {
      console.error(e)
    }
  }
}



// 判断是否为手机
_owo.isMobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null


_owo._run = function (eventFor, templateName, event) {
  // 复制eventFor防止污染
  var eventForCopy = eventFor
  // 判断页面是否有自己的方法
  var newPageFunction = window.owo.script[window.owo.activePage]
  // console.log(this.attributes)
  if (templateName && templateName !== owo.activePage) {
    // 如果模板注册到newPageFunction中，那么证明模板没有script那么直接使用eval执行
    if (newPageFunction.template) newPageFunction = newPageFunction.template[templateName]
  }
  // 待优化可以单独提出来
  // 取出参数
  var parameterArr = []
  var parameterList = eventForCopy.match(/[^\(\)]+(?=\))/g)
  
  if (parameterList && parameterList.length > 0) {
    // 参数列表
    parameterArr = parameterList[0].split(',')
    // 进一步处理参数
    
    for (var i = 0; i < parameterArr.length; i++) {
      var parameterValue = parameterArr[i].replace(/(^\s*)|(\s*$)/g, "")
      // console.log(parameterValue)
      // 判断参数是否为一个字符串
      
      if (parameterValue.charAt(0) === '"' && parameterValue.charAt(parameterValue.length - 1) === '"') {
        parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1)
      }
      if (parameterValue.charAt(0) === "'" && parameterValue.charAt(parameterValue.length - 1) === "'") {
        parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1)
      }
      // console.log(parameterArr[i])
    }
  }
  eventForCopy = eventFor.replace(/\([\d\D]*\)/, '')
  // console.log(newPageFunction, eventForCopy)
  // 如果有方法,则运行它
  if (newPageFunction && newPageFunction[eventForCopy]) {
    // 绑定window.owo对象
    newPageFunction.$event = event
    newPageFunction.$target = event.target
    newPageFunction[eventForCopy].apply(newPageFunction, parameterArr)
  } else {
    // 如果没有此方法则交给浏览器引擎尝试运行
    eval(eventFor)
  }
}

_owo.bindEvent = function (eventName, eventFor, tempDom, templateName) {
  tempDom['on' + eventName] = function(event) {
    _owo._run(eventFor, templateName, event)
  }
}

/* owo事件处理 */
// 参数1: 当前正在处理的dom节点
// 参数2: 当前正在处理的模块名称
_owo.handleEvent = function (tempDom, templateName) {
  var activePage = window.owo.script[owo.activePage]
  
  if (tempDom.attributes) {
    for (var ind = 0; ind < tempDom.attributes.length; ind++) {
      var attribute = tempDom.attributes[ind]
      // 判断是否为owo的事件
      // ie不支持startsWith
      if (attribute.name[0] == ':') {
        var eventName = attribute.name.slice(1)
        var eventFor = attribute.textContent
        switch (eventName) {
          case 'show' : {
            // 初步先简单处理吧
            var temp = eventFor.replace(/ /g, '')
            // 取出条件
            var condition = temp.split("==")
            if (activePage.data[condition[0]] != condition[1]) {
              tempDom.style.display = 'none'
            }
            break
          }
          case 'tap': {
            // 待优化 可合并
            // 根据手机和PC做不同处理
            if (_owo.isMobi) {
              _owo._event_tap(tempDom, function (event) {
                _owo._run(eventFor, templateName, event)
              })
            } else _owo.bindEvent('click', eventFor, tempDom, templateName)
            break
          }
          default: {
            _owo.bindEvent(eventName, eventFor, tempDom, templateName)
          }
        }
      }
    }
  }
  
  // 判断是否有子节点需要处理
  if (tempDom.children) {
    // 递归处理所有子Dom结点
    for (var i = 0; i < tempDom.children.length; i++) {
      // 获取子节点实例
      var childrenDom = tempDom.children[i]
      // 每个子节点均要判断是否为模块
      if (childrenDom.getAttribute('template')) {
        
        // 如果即将遍历进入模块 设置即将进入的模块为当前模块
        // 获取模块的模块名
        _owo.handleEvent(childrenDom, childrenDom.getAttribute('template'))
      } else {
        _owo.handleEvent(childrenDom, templateName)
      }
    }
  } else {
    console.info('元素不存在子节点!')
    console.info(tempDom)
  }
}

// 快速选择器
owo.query = function (str) {
  return document.querySelectorAll('.owo[template=' + owo.activePage +'] ' + str)
}

/* 运行页面所属的方法 */
_owo.handlePage = function (newPageFunction, entryDom) {
  /* 判断页面是否有自己的方法 */
  if (!newPageFunction) return
  // console.log(entryDom)
  newPageFunction['$el'] = entryDom
  // console.log(newPageFunction)
  _owo.runCreated(newPageFunction, entryDom)
  // debugger
  // 判断页面是否有下属模板,如果有运行所有模板的初始化方法
  for (var key in newPageFunction.template) {
    var templateScript = newPageFunction.template[key]
    var childDom = entryDom.querySelector('[template="' + key +'"]')
    // 判断相关模块是否在存在
    if (!childDom) {continue}
    _owo.handlePage(templateScript, childDom)
  }
}// 单页面-页面资源加载完毕事件
_owo.showPage = function() {
  // 查找入口
  var entryDom = document.querySelector('[template]')
  if (entryDom) {
    owo.entry = entryDom.getAttribute('template')
    owo.activePage = owo.entry
    _owo.handlePage(window.owo.script[owo.activePage], entryDom)
    _owo.handleEvent(entryDom, null)
  } else {
    console.error('找不到页面入口!')
  }
}

/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */
_owo.ready = (function() {               //这个函数返回whenReady()函数
  var funcs = [];             //当获得事件时，要运行的函数
  
  //当文档就绪时,调用事件处理程序
  function handler(e) {
    // 确保事件处理程序只运行一次
    if(window.owo.state.isRrady) return
    window.owo.state.isRrady = true
    //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
    if(e.type === 'onreadystatechange' && document.readyState !== 'complete') {
      return
    }
    
    // 运行所有注册函数
    for(var i=0; i<funcs.length; i++) {
      funcs[i].call(document);
    }
    funcs = null;
  }
  //为接收到的任何事件注册处理程序
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', handler, false)
    document.addEventListener('readystatechange', handler, false)            //IE9+
    window.addEventListener('load', handler, false)
  } else if(document.attachEvent) {
    document.attachEvent('onreadystatechange', handler)
    window.attachEvent('onload', handler)
  }
  //返回whenReady()函数
  return function whenReady (fn) {
    if (window.owo.state.isRrady) {
      fn.call(document)
    } else {
      funcs.push(fn)
    }
  }
})()

// 执行页面加载完毕方法
_owo.ready(_owo.showPage)


