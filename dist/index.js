/*!
 * custom-banner-vue v0.0.971
 * (c) Xip
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'Banner',
  props: ['options'],
  data: function data() {
    return {
      bhBannerConf: {
        modeText: false,
        orientation: "horizontal",
        fontSizeDefault: "16px",
        size: null,
        order: {
          0: [1],
          //0:[{state:true,type:},{},{}]
          1: [3],
          2: [1, 3],
          3: [1, 2, 3],
          4: [2]
        },
        imagesBanner: [//images element 1
        ["https://cdn.pixabay.com/photo/2017/02/20/17/47/icon-2083456_960_720.png", "https://cdn.pixabay.com/photo/2013/07/13/10/11/qr-code-156717_960_720.png"], //images element 2
        ["https://cdn.pixabay.com/photo/2017/11/15/06/31/black-2951013_960_720.png", "https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_960_720.png"], //images element 3
        ["https://cdn.pixabay.com/photo/2019/06/27/13/10/selfie-4302321_960_720.jpg", "https://cdn.pixabay.com/photo/2015/08/13/19/39/children-887393_960_720.jpg", "https://cdn.pixabay.com/photo/2020/07/16/21/10/asian-5412358_960_720.jpg"]],
        textsBanner: [//texts element 1
        ["Regístrate con tu correo", "Sube tus imágenes...", "...descárgalas donde quieras"], //texts element 2
        ["Cambia las dimensiones de tu imagen", "Recorta tu imagen fácilmente", "Múltiples efectos"], //texts element 3
        ["Descuentos de hasta el 50%", "Envíos gratis desde 25€"]]
      },
      bhBannerOptions: {
        //opciones del primer elemento del banner (1/3)
        1: {
          opacity: false,
          trans: {
            width: false,
            height: false,
            fontSize: false,
            positionLeft: false,
            positionTop: false,
            scaleRotate: true
          },
          fontSizeStyle: null,
          modeText: false,
          widthHTML: null
        },
        //opciones del segundo elemento del banner  (2/3)
        2: {
          opacity: false,
          trans: {
            width: false,
            height: false,
            fontSize: false,
            positionLeft: false,
            positionTop: true,
            scaleRotate: false
          },
          fontSizeStyle: null,
          modeText: false,
          widthHTML: null
        },
        //opciones del tercer elemento del banner (3/3)
        3: {
          opacity: true,
          trans: {
            width: false,
            height: false,
            fontSize: false,
            positionLeft: false,
            positionTop: false,
            scaleRotate: false
          },
          fontSizeStyle: null,
          modeText: false,
          widthHTML: null
        }
      },
      tmpBhBanner: {
        1: {
          type: null,
          selected: null,
          index: 0,
          list: null,
          fontSize: null
        },
        2: {
          type: null,
          selected: null,
          index: 0,
          list: null,
          fontSize: null
        },
        3: {
          type: null,
          selected: null,
          index: 0,
          list: null,
          fontSize: null
        },
        listOrder: null,
        counter: 0
      },
      refBhBanner: {
        parentsDivsString: ['div_banner1', 'div_banner2', 'div_banner3'],
        refsString: ['nodeRef1', 'nodeRef2', 'nodeRef3'],
        confObject: 'bhConfBanner',
        //ref
        refObject: 'bhRefBanner',
        //banner
        optionsObject: 'bhOptionsBanner',
        //tmpBanner
        tmpObject: 'bhTmpBanner',
        divParentRef: {
          1: null,
          2: null,
          3: null
        },
        nodeRef: {
          1: null,
          2: null,
          3: null
        },
        interval: null
      },
      main: null,
      mainString: null
    };
  },
  created: function created() {
    if (this.options) for (var i = 0; i < this.refBhBanner.parentsDivsString.length; i++) {
      this.refBhBanner.parentsDivsString[i] = (Math.floor(Math.random() * 1000000) + 1).toString();
      this.refBhBanner.refsString[i] = (Math.floor(Math.random() * 1000000) + 1).toString();
    }
    var main = this.setDataMain(this.options);
    this.mainString = main;
    this.main = {};
    this.main[main.confString] = this.bhBannerConf;
    this.main[main.refString] = this.refBhBanner;
    this.main[main.bannerString] = this.bhBannerOptions;
    this.main[main.tmpString] = this.tmpBhBanner;

    if (this.options) {
      this.testOrientationAndNodes(this.options, this.main[main.confString], this.main[main.bannerString]);
      this.setOrderAnimations(this.options, this.main[main.confString]);
      this.setEffects(this.options, this.main[main.bannerString]);
    }
  },
  mounted: function mounted() {
    this.setRefs(this.main[this.mainString.refString], this.main[this.mainString.confString], this.main[this.mainString.tmpString], this.main[this.mainString.bannerString]);
    this.interval_animationbanner(this.main[this.mainString.tmpString], this.main[this.mainString.confString], this.main[this.mainString.refString], this.main[this.mainString.bannerString]);
  },
  destroyed: function destroyed() {
    clearInterval(this.main[this.mainString.refString].interval);
  },
  methods: {
    testAndSetEffect: function testAndSetEffect(option, effects) {
      var effectsList = ["width", "height", "positionLeft", "positionTop", "scaleRotate"];
      if (option.modeText) effectsList.push("fontSize");

      for (var i = 0; i < effectsList.length; i++) {
        var effectSelected = this.setTransFromOptions(option[effectsList[i]]);
        if (effectSelected === false || effectSelected === true) effectsList.forEach(function (typeString) {
          effects.trans[typeString] = false;
        });

        if (effectSelected === true) {
          effects.trans[effectsList[i]] = true;
          break;
        }
      }
    },
    setEffects: function setEffects(options, effects) {
      if (options.effects) {
        for (var i = 1; i < 4; i++) {
          if (options.effects[i]) {
            if (options.effects[i].opacity) {
              effects[i].opacity = true;
            } else if (options.effects[i].opacity === false) {
              effects[i].opacity = false;
            }

            this.testAndSetEffect(options.effects[i], effects[i]);
          }
        }
      }
    },
    setOrderAnimations: function setOrderAnimations(options, conf) {
      if (options.order) {
        var order = {};

        for (var i = 0; i < Object.keys(options.order).length; i++) {
          if (options.order[i] && options.order[i].length > 0 && options.order[i].length < 4) {
            var resultOrders = options.order[i].every(function (order) {
              return order === 1 || order === 2 || order === 3 || order === "1" || order === "2" || order === "3";
            });

            if (!resultOrders) {
              console.log("la configuración en order no es correcta");
              break;
            }

            order[i] = options.order[i];
          }
        }

        if (Object.keys(order).length > 0) conf.order = order;
      }
    },
    testOrientationAndNodes: function testOrientationAndNodes(options, conf, banner) {
      if (options.orientation) {
        if (options.orientation !== "vertical" && options.orientation !== "horizontal") {
          console.log("Error options.orientation: Solamente puede ser horizontal o vertical");
          return;
        }

        conf.orientation = options.orientation;
      }

      if (options.size && options.size === "medium" || options.size && options.size === "min") {
        conf.size = options.size;
      }

      if (options.fontSizeDefault) {
        var font = options.fontSizeDefault;
        if (typeof options.fontSizeDefault == "number") font = font + "px";
        conf.fontSizeDefault = font;
      }

      if (options.images && options.images.length > 0 || options.texts && options.texts.length > 0) {
        var opEffects;

        if (options.effects) {
          opEffects = options.effects;
        }

        for (var i = 1; i < 4; i++) {
          if (opEffects && opEffects[i] && opEffects[i].modeText) {
            //textos							
            banner[i].modeText = true;

            if (options.texts && options.texts[i - 1] && options.texts[i - 1].length > 0) {
              var testArray = this.testStringArray(options.texts[i - 1]);

              if (!testArray) {
                console.log("options.texts debe ser un array de tipo cadena");
              }

              if (options.effects[i].fontSizeStyle) {
                var _font = options.effects[i].fontSizeStyle;

                if (typeof _font === "number") {
                  _font = _font + "px";
                }

                banner[i].fontSizeStyle = _font;
              } //se asignan textos del elemento


              conf.textsBanner[i - 1] = options.texts[i - 1];
            } else {
              console.log("el modo texto está activado pero no se han detectado textos");
            } //imágenes

          } else {
            if (options.images && options.images[i - 1] && options.images[i - 1].length > 0) {
              var _testArray = this.testStringArray(options.images[i - 1]);

              if (!_testArray) {
                console.log("options.texts debe ser un array de tipo cadena");
              }

              if (opEffects && opEffects[i] && opEffects[i].widthHTML) banner[i].widthHTML = opEffects[i].widthHTML;
              conf.imagesBanner[i - 1] = options.images[i - 1];
            } else {
              console.log("no se han detectado imágenes, se establecen la imágenes de prueba");
            }
          }
        }
      }
    },
    testStringArray: function testStringArray(arr) {
      var result = arr.every(function (pathImage) {
        return typeof pathImage === "string";
      });
      return result;
    },
    setDataMain: function setDataMain(options) {
      var confString, refString, bannerString, tmpString;

      if (options) {
        var confObjectString = "bhBanner_" + (Math.floor(Math.random() * 1000000) + 1);
        confString = confObjectString;
        var refObjectString = "bhBanner_" + (Math.floor(Math.random() * 1000000) + 1);
        refString = refObjectString;
        var transObjectString = "bhBanner_" + (Math.floor(Math.random() * 1000000) + 1);
        bannerString = transObjectString;
        var tmpObjString = "bhBanner_" + (Math.floor(Math.random() * 1000000) + 1);
        tmpString = tmpObjString;
      } else {
        confString = this.refBhBanner.confObject;
        refString = this.refBhBanner.refObject;
        bannerString = this.refBhBanner.optionsObject;
        tmpString = this.refBhBanner.tmpObject;
      }

      return {
        confString: confString,
        refString: refString,
        bannerString: bannerString,
        tmpString: tmpString
      };
    },
    setTransToFalse: function setTransToFalse(bannerTrans) {
      bannerTrans.width = false;
      bannerTrans.height = false;
      bannerTrans.positionLeft = false;
      bannerTrans.positionTop = false;
      bannerTrans.scaleRotate = false;
    },
    setTransFromOptions: function setTransFromOptions(transType) {
      if (transType && transType === true) return true;else if (transType === false) return false;else return;
    },
    setSizeByOrientation: function setSizeByOrientation(divParent, orientation) {
      if (orientation == "horizontal") {
        divParent.style.width = divParent.clientWidth + "px";
      } else if (orientation == "vertical") {
        divParent.style.height = divParent.clientHeight + "px";
      }
    },
    setRefs: function setRefs(refObject, conf, tmp, banner) {
      for (var i = 0; i < refObject.parentsDivsString.length; i++) {
        var num = i + 1;
        refObject.divParentRef[num] = this.$refs[refObject.parentsDivsString[i]];
        refObject.nodeRef[num] = this.$refs[refObject.refsString[i]];
        this.setListByType(tmp, num, conf, banner);
        tmp[num].selected = tmp[num].list[tmp[num].index];
        this.initStylesFirstTime(refObject.nodeRef[num], banner[num], conf, tmp[num]);
        this.setSizeByOrientation(refObject.divParentRef[num], conf.orientation);
      }
    },
    setListByType: function setListByType(tmp, num, conf, banner) {
      if (banner[num].modeText === true) tmp[num].list = conf.textsBanner[num - 1];else tmp[num].list = conf.imagesBanner[num - 1];
    },
    initStylesFirstTime: function initStylesFirstTime(bannerRef, effects, conf, tmp) {
      if (conf.size) ;

      var tmpFont;
      var fontSizeCSS = window.getComputedStyle(bannerRef, null).getPropertyValue("font-size");
      if (effects.fontSizeStyle) tmpFont = effects.fontSizeStyle;else if (bannerRef.style.fontSize) tmpFont = bannerRef.style.fontSize;else if (fontSizeCSS) tmpFont = fontSizeCSS;else tmpFont = conf.fontSizeDefault;
      tmp.fontSize = tmpFont;
      bannerRef.style.fontSize = tmpFont;
      if (effects.trans.positionLeft) bannerRef.style.left = "0px";else if (effects.trans.width) {
        if (bannerRef.width) bannerRef.style.width = bannerRef.width + 'px';else bannerRef.style.width = "100%";
      } else if (effects.trans.fontSize) {
        if (effects.modeText) {
          bannerRef.style.fontSize = tmpFont;
        } else {
          console.log("Para el efecto fontSize es necesario activar la opción modeText");
        }
      } else if (effects.trans.height) {
        bannerRef.style.height = bannerRef.parentNode.clientHeight + "px";
      } else if (effects.trans.positionTop) bannerRef.style.top = "0px";
    },
    interval_animationbanner: function interval_animationbanner(tmp, main, ref, bannerConf) {
      var _this = this;

      tmp.listOrder = Object.keys(main.order);
      if (tmp.listOrder.length <= 0) return;
      ref.interval = setInterval(function () {
        if (tmp.counter == tmp.listOrder.length) {
          tmp.counter = 0;
        }

        var matchElement = tmp.listOrder.find(function (element) {
          return element == tmp.counter;
        });
        var list = main.order[matchElement];

        if (!matchElement) {
          return;
        }

        var time = 100;
        var time2 = 700;
        setTimeout(function () {
          _this.hideAnimation(list, tmp, bannerConf, ref);
        }, time);
        setTimeout(function () {
          _this.showAnimation(list, tmp, bannerConf, ref);
        }, time2);
        tmp.counter++;
      }, 4000);
    },
    hideAnimation: function hideAnimation(list, tmp, bannerConf, ref) {
      if (list.indexOf(1) != -1) {
        this.initAnimation('1', 'hide', tmp, bannerConf, ref);
      }

      if (list.indexOf(2) != -1) {
        this.initAnimation('2', 'hide', tmp, bannerConf, ref);
      }

      if (list.indexOf(3) != -1) {
        this.initAnimation('3', 'hide', tmp, bannerConf, ref);
      }
    },
    initAnimation: function initAnimation(num, type, tmp, bannerConf, ref) {
      var banner, bannerRef, list;

      if (num == 1 || num == 2 || num == 3) {
        banner = bannerConf[num];
        bannerRef = ref.nodeRef[num];
        list = tmp[num].list;

        if (type == "show") {
          if (tmp[num].index == 0 && list.length > 1) tmp[num].index = 1;else if (list.length == tmp[num].index) tmp[num].index = 0;
          tmp[num].selected = list[tmp[num].index];
          tmp[num].index = tmp[num].index + 1;
        }
      }

      if (type == "hide") {
        if (banner.opacity) bannerRef.style.opacity = "0";
        if (banner.trans.width) bannerRef.style.transform = "scale(0,1)";else if (banner.trans.height) {
          bannerRef.style.transform = "scale(1,0)";
        } else if (banner.trans.positionTop) bannerRef.style.top = "-150px";else if (banner.trans.positionLeft) {
          bannerRef.style.left = "-300px";
        } else if (banner.trans.scaleRotate) bannerRef.style.transform = "scale(0) rotate(360deg)";else if (banner.trans.fontSize) {
          if (banner.modeText) bannerRef.style.fontSize = "0";else console.log("Para el efecto fontSize es necesario incluir modeText");
        } //mostrar
      } else if (type == "show") {
        if (banner.opacity) bannerRef.style.opacity = "1";

        if (banner.trans.width) {
          bannerRef.style.transform = "scale(1,1)";
        } else if (banner.trans.height) {
          bannerRef.style.transform = "scale(1,1)";
        } else if (banner.trans.positionTop) bannerRef.style.top = "0px";else if (banner.trans.positionLeft) bannerRef.style.left = "0px";else if (banner.trans.scaleRotate) bannerRef.style.transform = "scale(1) rotate(0deg)";else if (banner.trans.fontSize) {
          if (banner.modeText) {
            bannerRef.style.fontSize = tmp[num].fontSize;
          }
        }
      }

      banner = null, bannerRef = null, list = null;
    },
    showAnimation: function showAnimation(list, tmp, bannerConf, ref) {
      //mostrar animación 
      if (list.indexOf(1) != -1) {
        this.initAnimation('1', 'show', tmp, bannerConf, ref);
      }

      if (list.indexOf(2) != -1) {
        this.initAnimation('2', 'show', tmp, bannerConf, ref);
      }

      if (list.indexOf(3) != -1) {
        this.initAnimation('3', 'show', tmp, bannerConf, ref);
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "bh_banner",
    "class": [_vm.main[_vm.mainString.confString].orientation == 'vertical' ? 'bh_banner_vertical' : 'bh_banner_horizontal', _vm.main[_vm.mainString.confString].size == 'min' ? 'min' : 'medium']
  }, [_c('div', {
    ref: _vm.main[_vm.mainString.refString].parentsDivsString[0],
    staticClass: "div_banner",
    "class": _vm.main[_vm.mainString.confString].size == 'min' ? 'min' : 'medium'
  }, [!_vm.main[_vm.mainString.bannerString][1].modeText ? _c('img', {
    ref: _vm.main[_vm.mainString.refString].refsString[0],
    staticClass: "img_banner",
    attrs: {
      "src": _vm.main[_vm.mainString.tmpString][1].selected,
      "width": _vm.main[_vm.mainString.bannerString][1].widthHTML
    }
  }) : _c('p', {
    ref: _vm.main[_vm.mainString.refString].refsString[0],
    staticClass: "text_banner text1"
  }, [_vm._v(_vm._s(_vm.main[_vm.mainString.tmpString][1].selected))])]), _vm._v(" "), _c('div', {
    ref: _vm.main[_vm.mainString.refString].parentsDivsString[1],
    staticClass: "div_banner",
    "class": _vm.main[_vm.mainString.confString].size == 'min' ? 'min' : 'medium'
  }, [!_vm.main[_vm.mainString.bannerString][2].modeText ? _c('img', {
    ref: _vm.main[_vm.mainString.refString].refsString[1],
    staticClass: "img_banner",
    attrs: {
      "src": _vm.main[_vm.mainString.tmpString][2].selected,
      "width": _vm.main[_vm.mainString.bannerString][2].widthHTML
    }
  }) : _c('p', {
    ref: _vm.main[_vm.mainString.refString].refsString[1],
    staticClass: "text_banner font_zerogirl"
  }, [_vm._v(_vm._s(_vm.main[_vm.mainString.tmpString][2].selected))])]), _vm._v(" "), _c('div', {
    ref: _vm.main[_vm.mainString.refString].parentsDivsString[2],
    staticClass: "div_banner",
    "class": _vm.main[_vm.mainString.confString].size == 'min' ? 'min' : 'medium'
  }, [!_vm.main[_vm.mainString.bannerString][3].modeText ? _c('img', {
    ref: _vm.main[_vm.mainString.refString].refsString[2],
    staticClass: "img_banner",
    attrs: {
      "src": _vm.main[_vm.mainString.tmpString][3].selected,
      "width": _vm.main[_vm.mainString.bannerString][3].widthHTML
    }
  }) : _c('p', {
    ref: _vm.main[_vm.mainString.refString].refsString[2],
    staticClass: "text_banner"
  }, [_vm._v(_vm._s(_vm.main[_vm.mainString.tmpString][3].selected))])])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-06f5ad69_0", {
    source: ".bh_banner{margin:10px auto;border-radius:20px;background-color:rgba(0,0,0,.8);color:#fff;padding:10px;position:relative;z-index:10;text-align:center;box-sizing:border-box}.bh_banner_vertical.medium{width:200px;min-height:550px}.bh_banner_vertical.min{width:150px;min-height:450px}.bh_banner_horizontal{display:inline-block}.bh_banner_horizontal.medium{min-width:800px;height:150px}.bh_banner_horizontal.min{min-width:550px;height:120px}.div_banner{overflow:hidden}.bh_banner_horizontal .div_banner{align-items:center!important;vertical-align:middle;display:inline-flex;margin:auto 10px}.bh_banner_horizontal .div_banner.medium{min-width:230px;height:130px}.bh_banner_horizontal .div_banner.min{min-width:150px;height:100px}.bh_banner_vertical .div_banner.medium{min-height:180px}.bh_banner_vertical .div_banner.min{min-height:130px}.bh_banner_vertical .div_banner{align-items:center!important;vertical-align:middle;display:inline-flex}.bh_banner_horizontal .text_banner{line-height:30px;margin:10px auto}.bh_banner_vertical .text_banner{line-height:40px}.text_banner{color:#fff;font-size:null;letter-spacing:1px;position:relative;transition:all .6s linear}.img_banner{max-width:100%;max-height:100%;margin:auto;position:relative;transition:all .6s linear}.text1{font-size:18px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// con Vue.use(....)

var index = {
  //const customBanner = {
  install: function install(Vue, options) {
    //para otros casos revisar documentación:
    //https://es.vuejs.org/v2/guide/plugins.html
    //const { customOptions } = options;
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("custom-banner-vue", __vue_component__);
  }
}; //la siguiente condición  permite llamar al método de instalación automáticamente,

exports.CustomBannerVue = __vue_component__;
exports.default = index;
