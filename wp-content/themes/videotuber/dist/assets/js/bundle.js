/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/components/lazyload.js":
/*!**********************************************!*\
  !*** ./src/assets/js/components/lazyload.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (n, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  function n() {
    return n = Object.assign || function (n) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var i in e) {
          Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
        }
      }
      return n;
    }, n.apply(this, arguments);
  }
  var t = "undefined" != typeof window,
    e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
    i = t && "IntersectionObserver" in window,
    o = t && "classList" in document.createElement("p"),
    a = t && window.devicePixelRatio > 1,
    r = {
      elements_selector: ".lazy",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_bg_set: "bg-set",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      class_entered: "entered",
      class_exited: "exited",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1,
      restore_on_error: !1
    },
    c = function c(t) {
      return n({}, r, t);
    },
    l = function l(n, t) {
      var e,
        i = "LazyLoad::Initialized",
        o = new n(t);
      try {
        e = new CustomEvent(i, {
          detail: {
            instance: o
          }
        });
      } catch (n) {
        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
          instance: o
        });
      }
      window.dispatchEvent(e);
    },
    u = "src",
    s = "srcset",
    d = "sizes",
    f = "poster",
    _ = "llOriginalAttrs",
    g = "data",
    v = "loading",
    b = "loaded",
    m = "applied",
    p = "error",
    h = "native",
    E = "data-",
    I = "ll-status",
    y = function y(n, t) {
      return n.getAttribute(E + t);
    },
    k = function k(n) {
      return y(n, I);
    },
    w = function w(n, t) {
      return function (n, t, e) {
        var i = "data-ll-status";
        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
      }(n, 0, t);
    },
    A = function A(n) {
      return w(n, null);
    },
    L = function L(n) {
      return null === k(n);
    },
    O = function O(n) {
      return k(n) === h;
    },
    x = [v, b, m, p],
    C = function C(n, t, e, i) {
      n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
    },
    N = function N(n, t) {
      o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
    },
    M = function M(n, t) {
      o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
    },
    z = function z(n) {
      return n.llTempImage;
    },
    T = function T(n, t) {
      if (t) {
        var e = t._observer;
        e && e.unobserve(n);
      }
    },
    R = function R(n, t) {
      n && (n.loadingCount += t);
    },
    G = function G(n, t) {
      n && (n.toLoadCount = t);
    },
    j = function j(n) {
      for (var t, e = [], i = 0; t = n.children[i]; i += 1) {
        "SOURCE" === t.tagName && e.push(t);
      }
      return e;
    },
    D = function D(n, t) {
      var e = n.parentNode;
      e && "PICTURE" === e.tagName && j(e).forEach(t);
    },
    H = function H(n, t) {
      j(n).forEach(t);
    },
    V = [u],
    F = [u, f],
    B = [u, s, d],
    J = [g],
    P = function P(n) {
      return !!n[_];
    },
    S = function S(n) {
      return n[_];
    },
    U = function U(n) {
      return delete n[_];
    },
    $ = function $(n, t) {
      if (!P(n)) {
        var e = {};
        t.forEach(function (t) {
          e[t] = n.getAttribute(t);
        }), n[_] = e;
      }
    },
    q = function q(n, t) {
      if (P(n)) {
        var e = S(n);
        t.forEach(function (t) {
          !function (n, t, e) {
            e ? n.setAttribute(t, e) : n.removeAttribute(t);
          }(n, t, e[t]);
        });
      }
    },
    K = function K(n, t, e) {
      N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
    },
    Q = function Q(n, t, e) {
      N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
    },
    W = function W(n, t, e) {
      e && n.setAttribute(t, e);
    },
    X = function X(n, t) {
      W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
    },
    Y = {
      IMG: function IMG(n, t) {
        D(n, function (n) {
          $(n, B), X(n, t);
        }), $(n, B), X(n, t);
      },
      IFRAME: function IFRAME(n, t) {
        $(n, V), W(n, u, y(n, t.data_src));
      },
      VIDEO: function VIDEO(n, t) {
        H(n, function (n) {
          $(n, V), W(n, u, y(n, t.data_src));
        }), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
      },
      OBJECT: function OBJECT(n, t) {
        $(n, J), W(n, g, y(n, t.data_src));
      }
    },
    Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
    nn = function nn(n, t) {
      !t || function (n) {
        return n.loadingCount > 0;
      }(t) || function (n) {
        return n.toLoadCount > 0;
      }(t) || C(n.callback_finish, t);
    },
    tn = function tn(n, t, e) {
      n.addEventListener(t, e), n.llEvLisnrs[t] = e;
    },
    en = function en(n, t, e) {
      n.removeEventListener(t, e);
    },
    on = function on(n) {
      return !!n.llEvLisnrs;
    },
    an = function an(n) {
      if (on(n)) {
        var t = n.llEvLisnrs;
        for (var e in t) {
          var i = t[e];
          en(n, e, i);
        }
        delete n.llEvLisnrs;
      }
    },
    rn = function rn(n, t, e) {
      !function (n) {
        delete n.llTempImage;
      }(n), R(e, -1), function (n) {
        n && (n.toLoadCount -= 1);
      }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
    },
    cn = function cn(n, t, e) {
      var i = z(n) || n;
      on(i) || function (n, t, e) {
        on(n) || (n.llEvLisnrs = {});
        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
        tn(n, i, t), tn(n, "error", e);
      }(i, function (o) {
        !function (n, t, e, i) {
          var o = O(t);
          rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
        }(0, n, t, e), an(i);
      }, function (o) {
        !function (n, t, e, i) {
          var o = O(t);
          rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), o || nn(e, i);
        }(0, n, t, e), an(i);
      });
    },
    ln = function ln(n, t, e) {
      !function (n) {
        return Z.indexOf(n.tagName) > -1;
      }(n) ? function (n, t, e) {
        !function (n) {
          n.llTempImage = document.createElement("IMG");
        }(n), cn(n, t, e), function (n) {
          P(n) || (n[_] = {
            backgroundImage: n.style.backgroundImage
          });
        }(n), function (n, t, e) {
          var i = y(n, t.data_bg),
            o = y(n, t.data_bg_hidpi),
            r = a && o ? o : i;
          r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), Q(n, t, e));
        }(n, t, e), function (n, t, e) {
          var i = y(n, t.data_bg_multi),
            o = y(n, t.data_bg_multi_hidpi),
            r = a && o ? o : i;
          r && (n.style.backgroundImage = r, K(n, t, e));
        }(n, t, e), function (n, t, e) {
          var i = y(n, t.data_bg_set);
          if (i) {
            var o = i.split("|"),
              a = o.map(function (n) {
                return "image-set(".concat(n, ")");
              });
            n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map(function (n) {
              return "-webkit-image-set(".concat(n, ")");
            }), n.style.backgroundImage = a.join()), K(n, t, e);
          }
        }(n, t, e);
      }(n, t, e) : function (n, t, e) {
        cn(n, t, e), function (n, t, e) {
          var i = Y[n.tagName];
          i && (i(n, t), Q(n, t, e));
        }(n, t, e);
      }(n, t, e);
    },
    un = function un(n) {
      n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
    },
    sn = function sn(n) {
      D(n, function (n) {
        q(n, B);
      }), q(n, B);
    },
    dn = {
      IMG: sn,
      IFRAME: function IFRAME(n) {
        q(n, V);
      },
      VIDEO: function VIDEO(n) {
        H(n, function (n) {
          q(n, V);
        }), q(n, F), n.load();
      },
      OBJECT: function OBJECT(n) {
        q(n, J);
      }
    },
    fn = function fn(n, t) {
      (function (n) {
        var t = dn[n.tagName];
        t ? t(n) : function (n) {
          if (P(n)) {
            var t = S(n);
            n.style.backgroundImage = t.backgroundImage;
          }
        }(n);
      })(n), function (n, t) {
        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
      }(n, t), A(n), U(n);
    },
    _n = ["IMG", "IFRAME", "VIDEO"],
    gn = function gn(n) {
      return n.use_native && "loading" in HTMLImageElement.prototype;
    },
    vn = function vn(n, t, e) {
      n.forEach(function (n) {
        return function (n) {
          return n.isIntersecting || n.intersectionRatio > 0;
        }(n) ? function (n, t, e, i) {
          var o = function (n) {
            return x.indexOf(k(n)) >= 0;
          }(n);
          w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function (n, t, e) {
            t.unobserve_entered && T(n, e);
          }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
        }(n.target, n, t, e) : function (n, t, e, i) {
          L(n) || (N(n, e.class_exited), function (n, t, e, i) {
            e.cancel_on_exit && function (n) {
              return k(n) === v;
            }(n) && "IMG" === n.tagName && (an(n), function (n) {
              D(n, function (n) {
                un(n);
              }), un(n);
            }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
          }(n, t, e, i), C(e.callback_exit, n, t, i));
        }(n.target, n, t, e);
      });
    },
    bn = function bn(n) {
      return Array.prototype.slice.call(n);
    },
    mn = function mn(n) {
      return n.container.querySelectorAll(n.elements_selector);
    },
    pn = function pn(n) {
      return function (n) {
        return k(n) === p;
      }(n);
    },
    hn = function hn(n, t) {
      return function (n) {
        return bn(n).filter(L);
      }(n || mn(t));
    },
    En = function En(n, e) {
      var o = c(n);
      this._settings = o, this.loadingCount = 0, function (n, t) {
        i && !gn(n) && (t._observer = new IntersectionObserver(function (e) {
          vn(e, n, t);
        }, function (n) {
          return {
            root: n.container === document ? null : n.container,
            rootMargin: n.thresholds || n.threshold + "px"
          };
        }(n)));
      }(o, this), function (n, e) {
        t && (e._onlineHandler = function () {
          !function (n, t) {
            var e;
            (e = mn(n), bn(e).filter(pn)).forEach(function (t) {
              M(t, n.class_error), A(t);
            }), t.update();
          }(n, e);
        }, window.addEventListener("online", e._onlineHandler));
      }(o, this), this.update(e);
    };
  return En.prototype = {
    update: function update(n) {
      var t,
        o,
        a = this._settings,
        r = hn(n, a);
      G(this, r.length), !e && i ? gn(a) ? function (n, t, e) {
        n.forEach(function (n) {
          -1 !== _n.indexOf(n.tagName) && function (n, t, e) {
            n.setAttribute("loading", "lazy"), cn(n, t, e), function (n, t) {
              var e = Y[n.tagName];
              e && e(n, t);
            }(n, t), w(n, h);
          }(n, t, e);
        }), G(e, 0);
      }(r, a, this) : (o = r, function (n) {
        n.disconnect();
      }(t = this._observer), function (n, t) {
        t.forEach(function (t) {
          n.observe(t);
        });
      }(t, o)) : this.loadAll(r);
    },
    destroy: function destroy() {
      this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), mn(this._settings).forEach(function (n) {
        U(n);
      }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
    },
    loadAll: function loadAll(n) {
      var t = this,
        e = this._settings;
      hn(n, e).forEach(function (n) {
        T(n, t), ln(n, e, t);
      });
    },
    restoreAll: function restoreAll() {
      var n = this._settings;
      mn(n).forEach(function (t) {
        fn(t, n);
      });
    }
  }, En.load = function (n, t) {
    var e = c(t);
    ln(n, e);
  }, En.resetStatus = function (n) {
    A(n);
  }, t && function (n, t) {
    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) {
      l(n, e);
    } else l(n, t);
  }(En, window.lazyLoadOptions), En;
});
function logElementEvent(eventName, element) {
  console.log(Date.now(), eventName, element.getAttribute("data-src"));
}
var callback_enter = function callback_enter(element) {
  logElementEvent("🔑 ENTERED", element);
};
var callback_exit = function callback_exit(element) {
  logElementEvent("🚪 EXITED", element);
};
var callback_loading = function callback_loading(element) {
  logElementEvent("⌚ LOADING", element);
};
var callback_loaded = function callback_loaded(element) {
  logElementEvent("👍 LOADED", element);
};
var callback_error = function callback_error(element) {
  logElementEvent("💀 ERROR", element);
  element.src = "https://via.placeholder.com/440x560/?text=Error+Placeholder";
};
var callback_finish = function callback_finish() {
  logElementEvent("✔️ FINISHED", document.documentElement);
};
var callback_cancel = function callback_cancel(element) {
  logElementEvent("🔥 CANCEL", element);
};
window.lazyLoadOptions = {
  threshold: 0,
  // Assign the callbacks defined above
  callback_enter: callback_enter,
  callback_exit: callback_exit,
  callback_cancel: callback_cancel,
  callback_loading: callback_loading,
  callback_loaded: callback_loaded,
  callback_error: callback_error,
  callback_finish: callback_finish
};
window.addEventListener("LazyLoad::Initialized", function (event) {
  window.lazyLoadInstance = event.detail.instance;
}, false);

/***/ }),

/***/ "./src/assets/js/components/slider.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/slider.js ***!
  \********************************************/
/***/ (() => {

if (document.getElementById("js-main-slider")) {
  // var galleryThumbs = new Swiper('#js-main-slider-thumbs', {
  //     slidesPerView: 1.5,
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true,
  //     spaceBetween: 0,
  //     breakpoints: {
  //         768: {
  //             slidesPerView: 3
  //         },
  //         1200: {
  //             slidesPerView: 5
  //         },
  //         1024: {
  //             slidesPerView: 5
  //         }
  //     }
  // });
  var galleryTop = new Swiper('#js-main-slider', {
    spaceBetween: 0,
    preloadImages: false,
    lazy: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 15000,
      disableOnInteraction: true
    },
    breakpoints: {
      320: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    }
  });
}
if (document.getElementById("js-sponsor-slider")) {
  // var galleryThumbs = new Swiper('#js-main-slider-thumbs', {
  //     slidesPerView: 1.5,
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true,
  //     spaceBetween: 0,
  //     breakpoints: {
  //         768: {
  //             slidesPerView: 3
  //         },
  //         1200: {
  //             slidesPerView: 5
  //         },
  //         1024: {
  //             slidesPerView: 5
  //         }
  //     }
  // });
  var galleryTop = new Swiper('#js-sponsor-slider', {
    slidesPerView: 2,
    grid: {
      rows: 2
    },
    spaceBetween: 30,
    preloadImages: false,
    lazy: true,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    autoplay: {
      delay: 15000,
      disableOnInteraction: true
    },
    breakpoints: {
      320: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    }
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider */ "./src/assets/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lazyload */ "./src/assets/js/components/lazyload.js");
/* harmony import */ var _components_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_lazyload__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQVNBLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0VBQUMsUUFBUSxXQUFnQixlQUFQQyxPQUFPLE1BQUUsV0FBVyxJQUFFLFFBQWEsR0FBQ0MsTUFBTSxDQUFDRCxPQUFPLEdBQUNELENBQUMsRUFBRSxHQUFDLEtBQXFDLEdBQUNHLG9DQUFPSCxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0dBQUMsR0FBQyxDQUFrRTtBQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsWUFBVTtFQUFDLFlBQVk7O0VBQUMsU0FBU0QsQ0FBQyxHQUFFO0lBQUMsT0FBT0EsQ0FBQyxHQUFDUyxNQUFNLENBQUNDLE1BQU0sSUFBRSxVQUFTVixDQUFDLEVBQUM7TUFBQyxLQUFJLElBQUlDLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ1UsU0FBUyxDQUFDQyxNQUFNLEVBQUNYLENBQUMsRUFBRSxFQUFDO1FBQUMsSUFBSVksQ0FBQyxHQUFDRixTQUFTLENBQUNWLENBQUMsQ0FBQztRQUFDLEtBQUksSUFBSWEsQ0FBQyxJQUFJRCxDQUFDO1VBQUNKLE1BQU0sQ0FBQ00sU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0osQ0FBQyxFQUFDQyxDQUFDLENBQUMsS0FBR2QsQ0FBQyxDQUFDYyxDQUFDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDQyxDQUFDLENBQUMsQ0FBQztRQUFBO01BQUE7TUFBQyxPQUFPZCxDQUFDO0lBQUEsQ0FBQyxFQUFDQSxDQUFDLENBQUNrQixLQUFLLENBQUMsSUFBSSxFQUFDUCxTQUFTLENBQUM7RUFBQTtFQUFDLElBQUlWLENBQUMsR0FBQyxXQUFXLElBQUUsT0FBT2tCLE1BQU07SUFBQ04sQ0FBQyxHQUFDWixDQUFDLElBQUUsRUFBRSxVQUFVLElBQUdrQixNQUFNLENBQUMsSUFBRSxXQUFXLElBQUUsT0FBT0MsU0FBUyxJQUFFLCtCQUErQixDQUFDQyxJQUFJLENBQUNELFNBQVMsQ0FBQ0UsU0FBUyxDQUFDO0lBQUNSLENBQUMsR0FBQ2IsQ0FBQyxJQUFFLHNCQUFzQixJQUFHa0IsTUFBTTtJQUFDSSxDQUFDLEdBQUN0QixDQUFDLElBQUUsV0FBVyxJQUFHdUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQUNDLENBQUMsR0FBQ3pCLENBQUMsSUFBRWtCLE1BQU0sQ0FBQ1EsZ0JBQWdCLEdBQUMsQ0FBQztJQUFDQyxDQUFDLEdBQUM7TUFBQ0MsaUJBQWlCLEVBQUMsT0FBTztNQUFDQyxTQUFTLEVBQUNqQixDQUFDLElBQUVaLENBQUMsR0FBQ3VCLFFBQVEsR0FBQyxJQUFJO01BQUNPLFNBQVMsRUFBQyxHQUFHO01BQUNDLFVBQVUsRUFBQyxJQUFJO01BQUNDLFFBQVEsRUFBQyxLQUFLO01BQUNDLFdBQVcsRUFBQyxRQUFRO01BQUNDLFVBQVUsRUFBQyxPQUFPO01BQUNDLE9BQU8sRUFBQyxJQUFJO01BQUNDLGFBQWEsRUFBQyxVQUFVO01BQUNDLGFBQWEsRUFBQyxVQUFVO01BQUNDLG1CQUFtQixFQUFDLGdCQUFnQjtNQUFDQyxXQUFXLEVBQUMsUUFBUTtNQUFDQyxXQUFXLEVBQUMsUUFBUTtNQUFDQyxhQUFhLEVBQUMsU0FBUztNQUFDQyxhQUFhLEVBQUMsU0FBUztNQUFDQyxZQUFZLEVBQUMsUUFBUTtNQUFDQyxXQUFXLEVBQUMsT0FBTztNQUFDQyxhQUFhLEVBQUMsU0FBUztNQUFDQyxZQUFZLEVBQUMsUUFBUTtNQUFDQyxtQkFBbUIsRUFBQyxDQUFDLENBQUM7TUFBQ0MsaUJBQWlCLEVBQUMsQ0FBQyxDQUFDO01BQUNDLGNBQWMsRUFBQyxDQUFDLENBQUM7TUFBQ0MsY0FBYyxFQUFDLElBQUk7TUFBQ0MsYUFBYSxFQUFDLElBQUk7TUFBQ0MsZ0JBQWdCLEVBQUMsSUFBSTtNQUFDQyxnQkFBZ0IsRUFBQyxJQUFJO01BQUNDLGVBQWUsRUFBQyxJQUFJO01BQUNDLGNBQWMsRUFBQyxJQUFJO01BQUNDLGVBQWUsRUFBQyxJQUFJO01BQUNDLGVBQWUsRUFBQyxJQUFJO01BQUNDLFVBQVUsRUFBQyxDQUFDLENBQUM7TUFBQ0MsZ0JBQWdCLEVBQUMsQ0FBQztJQUFDLENBQUM7SUFBQ0MsQ0FBQyxHQUFDLFNBQUZBLENBQUMsQ0FBVTVELENBQUMsRUFBQztNQUFDLE9BQU9ELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQzRCLENBQUMsRUFBQzNCLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQzZELENBQUMsR0FBQyxTQUFGQSxDQUFDLENBQVU5RCxDQUFDLEVBQUNDLENBQUMsRUFBQztNQUFDLElBQUlZLENBQUM7UUFBQ0MsQ0FBQyxHQUFDLHVCQUF1QjtRQUFDUyxDQUFDLEdBQUMsSUFBSXZCLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDO01BQUMsSUFBRztRQUFDWSxDQUFDLEdBQUMsSUFBSWtELFdBQVcsQ0FBQ2pELENBQUMsRUFBQztVQUFDa0QsTUFBTSxFQUFDO1lBQUNDLFFBQVEsRUFBQzFDO1VBQUM7UUFBQyxDQUFDLENBQUM7TUFBQSxDQUFDLFFBQU12QixDQUFDLEVBQUM7UUFBQyxDQUFDYSxDQUFDLEdBQUNXLFFBQVEsQ0FBQzBDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBRUMsZUFBZSxDQUFDckQsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO1VBQUNtRCxRQUFRLEVBQUMxQztRQUFDLENBQUMsQ0FBQztNQUFBO01BQUNKLE1BQU0sQ0FBQ2lELGFBQWEsQ0FBQ3ZELENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ3dELENBQUMsR0FBQyxLQUFLO0lBQUNDLENBQUMsR0FBQyxRQUFRO0lBQUNDLENBQUMsR0FBQyxPQUFPO0lBQUNDLENBQUMsR0FBQyxRQUFRO0lBQUNDLENBQUMsR0FBQyxpQkFBaUI7SUFBQ0MsQ0FBQyxHQUFDLE1BQU07SUFBQ0MsQ0FBQyxHQUFDLFNBQVM7SUFBQ0MsQ0FBQyxHQUFDLFFBQVE7SUFBQ0MsQ0FBQyxHQUFDLFNBQVM7SUFBQ0MsQ0FBQyxHQUFDLE9BQU87SUFBQ0MsQ0FBQyxHQUFDLFFBQVE7SUFBQ0MsQ0FBQyxHQUFDLE9BQU87SUFBQ0MsQ0FBQyxHQUFDLFdBQVc7SUFBQ0MsQ0FBQyxHQUFDLFNBQUZBLENBQUMsQ0FBVWxGLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUMsT0FBT0QsQ0FBQyxDQUFDbUYsWUFBWSxDQUFDSCxDQUFDLEdBQUMvRSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUNtRixDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVcEYsQ0FBQyxFQUFDO01BQUMsT0FBT2tGLENBQUMsQ0FBQ2xGLENBQUMsRUFBQ2lGLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ0ksQ0FBQyxHQUFDLFNBQUZBLENBQUMsQ0FBVXJGLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUMsT0FBTyxVQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLGdCQUFnQjtRQUFDLElBQUksS0FBR0QsQ0FBQyxHQUFDYixDQUFDLENBQUNzRixZQUFZLENBQUN4RSxDQUFDLEVBQUNELENBQUMsQ0FBQyxHQUFDYixDQUFDLENBQUN1RixlQUFlLENBQUN6RSxDQUFDLENBQUM7TUFBQSxDQUFDLENBQUNkLENBQUMsRUFBQyxDQUFDLEVBQUNDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ3VGLENBQUMsR0FBQyxTQUFGQSxDQUFDLENBQVV4RixDQUFDLEVBQUM7TUFBQyxPQUFPcUYsQ0FBQyxDQUFDckYsQ0FBQyxFQUFDLElBQUksQ0FBQztJQUFBLENBQUM7SUFBQ3lGLENBQUMsR0FBQyxTQUFGQSxDQUFDLENBQVV6RixDQUFDLEVBQUM7TUFBQyxPQUFPLElBQUksS0FBR29GLENBQUMsQ0FBQ3BGLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQzBGLENBQUMsR0FBQyxTQUFGQSxDQUFDLENBQVUxRixDQUFDLEVBQUM7TUFBQyxPQUFPb0YsQ0FBQyxDQUFDcEYsQ0FBQyxDQUFDLEtBQUcrRSxDQUFDO0lBQUEsQ0FBQztJQUFDWSxDQUFDLEdBQUMsQ0FBQ2hCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsQ0FBQztJQUFDYyxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVNUYsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUNkLENBQUMsS0FBRyxLQUFLLENBQUMsS0FBR2MsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHRCxDQUFDLEdBQUNiLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUNELENBQUMsQ0FBQ0MsQ0FBQyxFQUFDWSxDQUFDLENBQUMsR0FBQ2IsQ0FBQyxDQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUMrRSxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVN0YsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQ3NCLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQzhGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDOUYsQ0FBQyxDQUFDLEdBQUNELENBQUMsQ0FBQ2dHLFNBQVMsSUFBRSxDQUFDaEcsQ0FBQyxDQUFDZ0csU0FBUyxHQUFDLEdBQUcsR0FBQyxFQUFFLElBQUUvRixDQUFDO0lBQUEsQ0FBQztJQUFDZ0csQ0FBQyxHQUFDLFNBQUZBLENBQUMsQ0FBVWpHLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUNzQixDQUFDLEdBQUN2QixDQUFDLENBQUM4RixTQUFTLENBQUNJLE1BQU0sQ0FBQ2pHLENBQUMsQ0FBQyxHQUFDRCxDQUFDLENBQUNnRyxTQUFTLEdBQUNoRyxDQUFDLENBQUNnRyxTQUFTLENBQUNHLE9BQU8sQ0FBQyxJQUFJQyxNQUFNLENBQUMsVUFBVSxHQUFDbkcsQ0FBQyxHQUFDLFVBQVUsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDa0csT0FBTyxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUM7SUFBQSxDQUFDO0lBQUNFLENBQUMsR0FBQyxTQUFGQSxDQUFDLENBQVVyRyxDQUFDLEVBQUM7TUFBQyxPQUFPQSxDQUFDLENBQUNzRyxXQUFXO0lBQUEsQ0FBQztJQUFDQyxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVdkcsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQyxJQUFHQSxDQUFDLEVBQUM7UUFBQyxJQUFJWSxDQUFDLEdBQUNaLENBQUMsQ0FBQ3VHLFNBQVM7UUFBQzNGLENBQUMsSUFBRUEsQ0FBQyxDQUFDNEYsU0FBUyxDQUFDekcsQ0FBQyxDQUFDO01BQUE7SUFBQyxDQUFDO0lBQUMwRyxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVMUcsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQ0QsQ0FBQyxLQUFHQSxDQUFDLENBQUMyRyxZQUFZLElBQUUxRyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUMyRyxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVNUcsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQ0QsQ0FBQyxLQUFHQSxDQUFDLENBQUM2RyxXQUFXLEdBQUM1RyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUM2RyxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVOUcsQ0FBQyxFQUFDO01BQUMsS0FBSSxJQUFJQyxDQUFDLEVBQUNZLENBQUMsR0FBQyxFQUFFLEVBQUNDLENBQUMsR0FBQyxDQUFDLEVBQUNiLENBQUMsR0FBQ0QsQ0FBQyxDQUFDK0csUUFBUSxDQUFDakcsQ0FBQyxDQUFDLEVBQUNBLENBQUMsSUFBRSxDQUFDO1FBQUMsUUFBUSxLQUFHYixDQUFDLENBQUMrRyxPQUFPLElBQUVuRyxDQUFDLENBQUNvRyxJQUFJLENBQUNoSCxDQUFDLENBQUM7TUFBQztNQUFBLE9BQU9ZLENBQUM7SUFBQSxDQUFDO0lBQUNxRyxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVbEgsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQyxJQUFJWSxDQUFDLEdBQUNiLENBQUMsQ0FBQ21ILFVBQVU7TUFBQ3RHLENBQUMsSUFBRSxTQUFTLEtBQUdBLENBQUMsQ0FBQ21HLE9BQU8sSUFBRUYsQ0FBQyxDQUFDakcsQ0FBQyxDQUFDLENBQUN1RyxPQUFPLENBQUNuSCxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUNvSCxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVckgsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQzZHLENBQUMsQ0FBQzlHLENBQUMsQ0FBQyxDQUFDb0gsT0FBTyxDQUFDbkgsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDcUgsQ0FBQyxHQUFDLENBQUNqRCxDQUFDLENBQUM7SUFBQ2tELENBQUMsR0FBQyxDQUFDbEQsQ0FBQyxFQUFDRyxDQUFDLENBQUM7SUFBQ2dELENBQUMsR0FBQyxDQUFDbkQsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsQ0FBQztJQUFDa0QsQ0FBQyxHQUFDLENBQUMvQyxDQUFDLENBQUM7SUFBQ2dELENBQUMsR0FBQyxTQUFGQSxDQUFDLENBQVUxSCxDQUFDLEVBQUM7TUFBQyxPQUFNLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDeUUsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDa0QsQ0FBQyxHQUFDLFNBQUZBLENBQUMsQ0FBVTNILENBQUMsRUFBQztNQUFDLE9BQU9BLENBQUMsQ0FBQ3lFLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ21ELENBQUMsR0FBQyxTQUFGQSxDQUFDLENBQVU1SCxDQUFDLEVBQUM7TUFBQyxPQUFPLE9BQU9BLENBQUMsQ0FBQ3lFLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ29ELENBQUMsR0FBQyxTQUFGQSxDQUFDLENBQVU3SCxDQUFDLEVBQUNDLENBQUMsRUFBQztNQUFDLElBQUcsQ0FBQ3lILENBQUMsQ0FBQzFILENBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBSWEsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUFDWixDQUFDLENBQUNtSCxPQUFPLENBQUUsVUFBU25ILENBQUMsRUFBQztVQUFDWSxDQUFDLENBQUNaLENBQUMsQ0FBQyxHQUFDRCxDQUFDLENBQUNtRixZQUFZLENBQUNsRixDQUFDLENBQUM7UUFBQSxDQUFDLENBQUUsRUFBQ0QsQ0FBQyxDQUFDeUUsQ0FBQyxDQUFDLEdBQUM1RCxDQUFDO01BQUE7SUFBQyxDQUFDO0lBQUNpSCxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVOUgsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQyxJQUFHeUgsQ0FBQyxDQUFDMUgsQ0FBQyxDQUFDLEVBQUM7UUFBQyxJQUFJYSxDQUFDLEdBQUM4RyxDQUFDLENBQUMzSCxDQUFDLENBQUM7UUFBQ0MsQ0FBQyxDQUFDbUgsT0FBTyxDQUFFLFVBQVNuSCxDQUFDLEVBQUM7VUFBQyxDQUFDLFVBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLEVBQUM7WUFBQ0EsQ0FBQyxHQUFDYixDQUFDLENBQUNzRixZQUFZLENBQUNyRixDQUFDLEVBQUNZLENBQUMsQ0FBQyxHQUFDYixDQUFDLENBQUN1RixlQUFlLENBQUN0RixDQUFDLENBQUM7VUFBQSxDQUFDLENBQUNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLENBQUNaLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFFO01BQUE7SUFBQyxDQUFDO0lBQUM4SCxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVL0gsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQztNQUFDZ0YsQ0FBQyxDQUFDN0YsQ0FBQyxFQUFDQyxDQUFDLENBQUN5QyxhQUFhLENBQUMsRUFBQzJDLENBQUMsQ0FBQ3JGLENBQUMsRUFBQzZFLENBQUMsQ0FBQyxFQUFDaEUsQ0FBQyxLQUFHWixDQUFDLENBQUMrQyxtQkFBbUIsSUFBRXVELENBQUMsQ0FBQ3ZHLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEVBQUMyRixDQUFDLENBQUMzRixDQUFDLENBQUNvRCxnQkFBZ0IsRUFBQ3JELENBQUMsRUFBQ2EsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUNtSCxDQUFDLEdBQUMsU0FBRkEsQ0FBQyxDQUFVaEksQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQztNQUFDZ0YsQ0FBQyxDQUFDN0YsQ0FBQyxFQUFDQyxDQUFDLENBQUMwQyxhQUFhLENBQUMsRUFBQzBDLENBQUMsQ0FBQ3JGLENBQUMsRUFBQzJFLENBQUMsQ0FBQyxFQUFDOUQsQ0FBQyxLQUFHNkYsQ0FBQyxDQUFDN0YsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDK0UsQ0FBQyxDQUFDM0YsQ0FBQyxDQUFDcUQsZ0JBQWdCLEVBQUN0RCxDQUFDLEVBQUNhLENBQUMsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDb0gsQ0FBQyxHQUFDLFNBQUZBLENBQUMsQ0FBVWpJLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLEVBQUM7TUFBQ0EsQ0FBQyxJQUFFYixDQUFDLENBQUNzRixZQUFZLENBQUNyRixDQUFDLEVBQUNZLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ3FILENBQUMsR0FBQyxTQUFGQSxDQUFDLENBQVVsSSxDQUFDLEVBQUNDLENBQUMsRUFBQztNQUFDZ0ksQ0FBQyxDQUFDakksQ0FBQyxFQUFDdUUsQ0FBQyxFQUFDVyxDQUFDLENBQUNsRixDQUFDLEVBQUNDLENBQUMsQ0FBQ2tDLFVBQVUsQ0FBQyxDQUFDLEVBQUM4RixDQUFDLENBQUNqSSxDQUFDLEVBQUNzRSxDQUFDLEVBQUNZLENBQUMsQ0FBQ2xGLENBQUMsRUFBQ0MsQ0FBQyxDQUFDaUMsV0FBVyxDQUFDLENBQUMsRUFBQytGLENBQUMsQ0FBQ2pJLENBQUMsRUFBQ3FFLENBQUMsRUFBQ2EsQ0FBQyxDQUFDbEYsQ0FBQyxFQUFDQyxDQUFDLENBQUNnQyxRQUFRLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ2tHLENBQUMsR0FBQztNQUFDQyxHQUFHLEVBQUMsYUFBU3BJLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUNpSCxDQUFDLENBQUNsSCxDQUFDLEVBQUUsVUFBU0EsQ0FBQyxFQUFDO1VBQUM2SCxDQUFDLENBQUM3SCxDQUFDLEVBQUN3SCxDQUFDLENBQUMsRUFBQ1UsQ0FBQyxDQUFDbEksQ0FBQyxFQUFDQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQUUsRUFBQzRILENBQUMsQ0FBQzdILENBQUMsRUFBQ3dILENBQUMsQ0FBQyxFQUFDVSxDQUFDLENBQUNsSSxDQUFDLEVBQUNDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ29JLE1BQU0sRUFBQyxnQkFBU3JJLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUM0SCxDQUFDLENBQUM3SCxDQUFDLEVBQUNzSCxDQUFDLENBQUMsRUFBQ1csQ0FBQyxDQUFDakksQ0FBQyxFQUFDcUUsQ0FBQyxFQUFDYSxDQUFDLENBQUNsRixDQUFDLEVBQUNDLENBQUMsQ0FBQ2dDLFFBQVEsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDcUcsS0FBSyxFQUFDLGVBQVN0SSxDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDb0gsQ0FBQyxDQUFDckgsQ0FBQyxFQUFFLFVBQVNBLENBQUMsRUFBQztVQUFDNkgsQ0FBQyxDQUFDN0gsQ0FBQyxFQUFDc0gsQ0FBQyxDQUFDLEVBQUNXLENBQUMsQ0FBQ2pJLENBQUMsRUFBQ3FFLENBQUMsRUFBQ2EsQ0FBQyxDQUFDbEYsQ0FBQyxFQUFDQyxDQUFDLENBQUNnQyxRQUFRLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBRSxFQUFDNEYsQ0FBQyxDQUFDN0gsQ0FBQyxFQUFDdUgsQ0FBQyxDQUFDLEVBQUNVLENBQUMsQ0FBQ2pJLENBQUMsRUFBQ3dFLENBQUMsRUFBQ1UsQ0FBQyxDQUFDbEYsQ0FBQyxFQUFDQyxDQUFDLENBQUN3QyxXQUFXLENBQUMsQ0FBQyxFQUFDd0YsQ0FBQyxDQUFDakksQ0FBQyxFQUFDcUUsQ0FBQyxFQUFDYSxDQUFDLENBQUNsRixDQUFDLEVBQUNDLENBQUMsQ0FBQ2dDLFFBQVEsQ0FBQyxDQUFDLEVBQUNqQyxDQUFDLENBQUN1SSxJQUFJLEVBQUU7TUFBQSxDQUFDO01BQUNDLE1BQU0sRUFBQyxnQkFBU3hJLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUM0SCxDQUFDLENBQUM3SCxDQUFDLEVBQUN5SCxDQUFDLENBQUMsRUFBQ1EsQ0FBQyxDQUFDakksQ0FBQyxFQUFDMEUsQ0FBQyxFQUFDUSxDQUFDLENBQUNsRixDQUFDLEVBQUNDLENBQUMsQ0FBQ2dDLFFBQVEsQ0FBQyxDQUFDO01BQUE7SUFBQyxDQUFDO0lBQUN3RyxDQUFDLEdBQUMsQ0FBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUM7SUFBQ0MsRUFBRSxHQUFDLFNBQUhBLEVBQUUsQ0FBVTFJLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUMsQ0FBQ0EsQ0FBQyxJQUFFLFVBQVNELENBQUMsRUFBQztRQUFDLE9BQU9BLENBQUMsQ0FBQzJHLFlBQVksR0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFDMUcsQ0FBQyxDQUFDLElBQUUsVUFBU0QsQ0FBQyxFQUFDO1FBQUMsT0FBT0EsQ0FBQyxDQUFDNkcsV0FBVyxHQUFDLENBQUM7TUFBQSxDQUFDLENBQUM1RyxDQUFDLENBQUMsSUFBRTJGLENBQUMsQ0FBQzVGLENBQUMsQ0FBQ3lELGVBQWUsRUFBQ3hELENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQzBJLEVBQUUsR0FBQyxTQUFIQSxFQUFFLENBQVUzSSxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDO01BQUNiLENBQUMsQ0FBQzRJLGdCQUFnQixDQUFDM0ksQ0FBQyxFQUFDWSxDQUFDLENBQUMsRUFBQ2IsQ0FBQyxDQUFDNkksVUFBVSxDQUFDNUksQ0FBQyxDQUFDLEdBQUNZLENBQUM7SUFBQSxDQUFDO0lBQUNpSSxFQUFFLEdBQUMsU0FBSEEsRUFBRSxDQUFVOUksQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQztNQUFDYixDQUFDLENBQUMrSSxtQkFBbUIsQ0FBQzlJLENBQUMsRUFBQ1ksQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDbUksRUFBRSxHQUFDLFNBQUhBLEVBQUUsQ0FBVWhKLENBQUMsRUFBQztNQUFDLE9BQU0sQ0FBQyxDQUFDQSxDQUFDLENBQUM2SSxVQUFVO0lBQUEsQ0FBQztJQUFDSSxFQUFFLEdBQUMsU0FBSEEsRUFBRSxDQUFVakosQ0FBQyxFQUFDO01BQUMsSUFBR2dKLEVBQUUsQ0FBQ2hKLENBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUM2SSxVQUFVO1FBQUMsS0FBSSxJQUFJaEksQ0FBQyxJQUFJWixDQUFDLEVBQUM7VUFBQyxJQUFJYSxDQUFDLEdBQUNiLENBQUMsQ0FBQ1ksQ0FBQyxDQUFDO1VBQUNpSSxFQUFFLENBQUM5SSxDQUFDLEVBQUNhLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO1FBQUE7UUFBQyxPQUFPZCxDQUFDLENBQUM2SSxVQUFVO01BQUE7SUFBQyxDQUFDO0lBQUNLLEVBQUUsR0FBQyxTQUFIQSxFQUFFLENBQVVsSixDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDO01BQUMsQ0FBQyxVQUFTYixDQUFDLEVBQUM7UUFBQyxPQUFPQSxDQUFDLENBQUNzRyxXQUFXO01BQUEsQ0FBQyxDQUFDdEcsQ0FBQyxDQUFDLEVBQUMwRyxDQUFDLENBQUM3RixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxVQUFTYixDQUFDLEVBQUM7UUFBQ0EsQ0FBQyxLQUFHQSxDQUFDLENBQUM2RyxXQUFXLElBQUUsQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFDaEcsQ0FBQyxDQUFDLEVBQUNvRixDQUFDLENBQUNqRyxDQUFDLEVBQUNDLENBQUMsQ0FBQzBDLGFBQWEsQ0FBQyxFQUFDMUMsQ0FBQyxDQUFDK0MsbUJBQW1CLElBQUV1RCxDQUFDLENBQUN2RyxDQUFDLEVBQUNhLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ3NJLEVBQUUsR0FBQyxTQUFIQSxFQUFFLENBQVVuSixDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDO01BQUMsSUFBSUMsQ0FBQyxHQUFDdUYsQ0FBQyxDQUFDckcsQ0FBQyxDQUFDLElBQUVBLENBQUM7TUFBQ2dKLEVBQUUsQ0FBQ2xJLENBQUMsQ0FBQyxJQUFFLFVBQVNkLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLEVBQUM7UUFBQ21JLEVBQUUsQ0FBQ2hKLENBQUMsQ0FBQyxLQUFHQSxDQUFDLENBQUM2SSxVQUFVLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJL0gsQ0FBQyxHQUFDLE9BQU8sS0FBR2QsQ0FBQyxDQUFDZ0gsT0FBTyxHQUFDLFlBQVksR0FBQyxNQUFNO1FBQUMyQixFQUFFLENBQUMzSSxDQUFDLEVBQUNjLENBQUMsRUFBQ2IsQ0FBQyxDQUFDLEVBQUMwSSxFQUFFLENBQUMzSSxDQUFDLEVBQUMsT0FBTyxFQUFDYSxDQUFDLENBQUM7TUFBQSxDQUFDLENBQUNDLENBQUMsRUFBRSxVQUFTUyxDQUFDLEVBQUM7UUFBQyxDQUFDLFVBQVN2QixDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDQyxDQUFDLEVBQUM7VUFBQyxJQUFJUyxDQUFDLEdBQUNtRSxDQUFDLENBQUN6RixDQUFDLENBQUM7VUFBQ2lKLEVBQUUsQ0FBQ2pKLENBQUMsRUFBQ1ksQ0FBQyxFQUFDQyxDQUFDLENBQUMsRUFBQytFLENBQUMsQ0FBQzVGLENBQUMsRUFBQ1ksQ0FBQyxDQUFDK0IsWUFBWSxDQUFDLEVBQUN5QyxDQUFDLENBQUNwRixDQUFDLEVBQUMyRSxDQUFDLENBQUMsRUFBQ2dCLENBQUMsQ0FBQy9FLENBQUMsQ0FBQzBDLGVBQWUsRUFBQ3RELENBQUMsRUFBQ2EsQ0FBQyxDQUFDLEVBQUNTLENBQUMsSUFBRW1ILEVBQUUsQ0FBQzdILENBQUMsRUFBQ0MsQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLENBQUMsRUFBQ2QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsQ0FBQyxFQUFDb0ksRUFBRSxDQUFDbkksQ0FBQyxDQUFDO01BQUEsQ0FBQyxFQUFHLFVBQVNTLENBQUMsRUFBQztRQUFDLENBQUMsVUFBU3ZCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLEVBQUNDLENBQUMsRUFBQztVQUFDLElBQUlTLENBQUMsR0FBQ21FLENBQUMsQ0FBQ3pGLENBQUMsQ0FBQztVQUFDaUosRUFBRSxDQUFDakosQ0FBQyxFQUFDWSxDQUFDLEVBQUNDLENBQUMsQ0FBQyxFQUFDK0UsQ0FBQyxDQUFDNUYsQ0FBQyxFQUFDWSxDQUFDLENBQUNnQyxXQUFXLENBQUMsRUFBQ3dDLENBQUMsQ0FBQ3BGLENBQUMsRUFBQzZFLENBQUMsQ0FBQyxFQUFDYyxDQUFDLENBQUMvRSxDQUFDLENBQUMyQyxjQUFjLEVBQUN2RCxDQUFDLEVBQUNhLENBQUMsQ0FBQyxFQUFDRCxDQUFDLENBQUMrQyxnQkFBZ0IsSUFBRWtFLENBQUMsQ0FBQzdILENBQUMsRUFBQ3VILENBQUMsQ0FBQyxFQUFDakcsQ0FBQyxJQUFFbUgsRUFBRSxDQUFDN0gsQ0FBQyxFQUFDQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQUMsQ0FBQyxFQUFDZCxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxDQUFDLEVBQUNvSSxFQUFFLENBQUNuSSxDQUFDLENBQUM7TUFBQSxDQUFDLENBQUU7SUFBQSxDQUFDO0lBQUNzSSxFQUFFLEdBQUMsU0FBSEEsRUFBRSxDQUFVcEosQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQztNQUFDLENBQUMsVUFBU2IsQ0FBQyxFQUFDO1FBQUMsT0FBT3lJLENBQUMsQ0FBQ1ksT0FBTyxDQUFDckosQ0FBQyxDQUFDZ0gsT0FBTyxDQUFDLEdBQUMsQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFDaEgsQ0FBQyxDQUFDLEdBQUMsVUFBU0EsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQztRQUFDLENBQUMsVUFBU2IsQ0FBQyxFQUFDO1VBQUNBLENBQUMsQ0FBQ3NHLFdBQVcsR0FBQzlFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUFBLENBQUMsQ0FBQ3pCLENBQUMsQ0FBQyxFQUFDbUosRUFBRSxDQUFDbkosQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsQ0FBQyxFQUFDLFVBQVNiLENBQUMsRUFBQztVQUFDMEgsQ0FBQyxDQUFDMUgsQ0FBQyxDQUFDLEtBQUdBLENBQUMsQ0FBQ3lFLENBQUMsQ0FBQyxHQUFDO1lBQUM2RSxlQUFlLEVBQUN0SixDQUFDLENBQUN1SixLQUFLLENBQUNEO1VBQWUsQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDdEosQ0FBQyxDQUFDLEVBQUMsVUFBU0EsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQztVQUFDLElBQUlDLENBQUMsR0FBQ29FLENBQUMsQ0FBQ2xGLENBQUMsRUFBQ0MsQ0FBQyxDQUFDbUMsT0FBTyxDQUFDO1lBQUNiLENBQUMsR0FBQzJELENBQUMsQ0FBQ2xGLENBQUMsRUFBQ0MsQ0FBQyxDQUFDb0MsYUFBYSxDQUFDO1lBQUNULENBQUMsR0FBQ0YsQ0FBQyxJQUFFSCxDQUFDLEdBQUNBLENBQUMsR0FBQ1QsQ0FBQztVQUFDYyxDQUFDLEtBQUc1QixDQUFDLENBQUN1SixLQUFLLENBQUNELGVBQWUsR0FBQyxPQUFPLENBQUNFLE1BQU0sQ0FBQzVILENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQ3lFLENBQUMsQ0FBQ3JHLENBQUMsQ0FBQyxDQUFDc0YsWUFBWSxDQUFDakIsQ0FBQyxFQUFDekMsQ0FBQyxDQUFDLEVBQUNvRyxDQUFDLENBQUNoSSxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQUNiLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLENBQUMsRUFBQyxVQUFTYixDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDO1VBQUMsSUFBSUMsQ0FBQyxHQUFDb0UsQ0FBQyxDQUFDbEYsQ0FBQyxFQUFDQyxDQUFDLENBQUNxQyxhQUFhLENBQUM7WUFBQ2YsQ0FBQyxHQUFDMkQsQ0FBQyxDQUFDbEYsQ0FBQyxFQUFDQyxDQUFDLENBQUNzQyxtQkFBbUIsQ0FBQztZQUFDWCxDQUFDLEdBQUNGLENBQUMsSUFBRUgsQ0FBQyxHQUFDQSxDQUFDLEdBQUNULENBQUM7VUFBQ2MsQ0FBQyxLQUFHNUIsQ0FBQyxDQUFDdUosS0FBSyxDQUFDRCxlQUFlLEdBQUMxSCxDQUFDLEVBQUNtRyxDQUFDLENBQUMvSCxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQUNiLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLENBQUMsRUFBQyxVQUFTYixDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDO1VBQUMsSUFBSUMsQ0FBQyxHQUFDb0UsQ0FBQyxDQUFDbEYsQ0FBQyxFQUFDQyxDQUFDLENBQUN1QyxXQUFXLENBQUM7VUFBQyxJQUFHMUIsQ0FBQyxFQUFDO1lBQUMsSUFBSVMsQ0FBQyxHQUFDVCxDQUFDLENBQUMySSxLQUFLLENBQUMsR0FBRyxDQUFDO2NBQUMvSCxDQUFDLEdBQUNILENBQUMsQ0FBQ21JLEdBQUcsQ0FBRSxVQUFTMUosQ0FBQyxFQUFDO2dCQUFDLE9BQU0sWUFBWSxDQUFDd0osTUFBTSxDQUFDeEosQ0FBQyxFQUFDLEdBQUcsQ0FBQztjQUFBLENBQUMsQ0FBRTtZQUFDQSxDQUFDLENBQUN1SixLQUFLLENBQUNELGVBQWUsR0FBQzVILENBQUMsQ0FBQ2lJLElBQUksRUFBRSxFQUFDLEVBQUUsS0FBRzNKLENBQUMsQ0FBQ3VKLEtBQUssQ0FBQ0QsZUFBZSxLQUFHNUgsQ0FBQyxHQUFDSCxDQUFDLENBQUNtSSxHQUFHLENBQUUsVUFBUzFKLENBQUMsRUFBQztjQUFDLE9BQU0sb0JBQW9CLENBQUN3SixNQUFNLENBQUN4SixDQUFDLEVBQUMsR0FBRyxDQUFDO1lBQUEsQ0FBQyxDQUFFLEVBQUNBLENBQUMsQ0FBQ3VKLEtBQUssQ0FBQ0QsZUFBZSxHQUFDNUgsQ0FBQyxDQUFDaUksSUFBSSxFQUFFLENBQUMsRUFBQzVCLENBQUMsQ0FBQy9ILENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLENBQUM7VUFBQTtRQUFDLENBQUMsQ0FBQ2IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBQ2IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsQ0FBQyxHQUFDLFVBQVNiLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLEVBQUM7UUFBQ3NJLEVBQUUsQ0FBQ25KLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLENBQUMsRUFBQyxVQUFTYixDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDO1VBQUMsSUFBSUMsQ0FBQyxHQUFDcUgsQ0FBQyxDQUFDbkksQ0FBQyxDQUFDZ0gsT0FBTyxDQUFDO1VBQUNsRyxDQUFDLEtBQUdBLENBQUMsQ0FBQ2QsQ0FBQyxFQUFDQyxDQUFDLENBQUMsRUFBQytILENBQUMsQ0FBQ2hJLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQ2IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBQ2IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQytJLEVBQUUsR0FBQyxTQUFIQSxFQUFFLENBQVU1SixDQUFDLEVBQUM7TUFBQ0EsQ0FBQyxDQUFDdUYsZUFBZSxDQUFDbEIsQ0FBQyxDQUFDLEVBQUNyRSxDQUFDLENBQUN1RixlQUFlLENBQUNqQixDQUFDLENBQUMsRUFBQ3RFLENBQUMsQ0FBQ3VGLGVBQWUsQ0FBQ2hCLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ3NGLEVBQUUsR0FBQyxTQUFIQSxFQUFFLENBQVU3SixDQUFDLEVBQUM7TUFBQ2tILENBQUMsQ0FBQ2xILENBQUMsRUFBRSxVQUFTQSxDQUFDLEVBQUM7UUFBQzhILENBQUMsQ0FBQzlILENBQUMsRUFBQ3dILENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBRSxFQUFDTSxDQUFDLENBQUM5SCxDQUFDLEVBQUN3SCxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUNzQyxFQUFFLEdBQUM7TUFBQzFCLEdBQUcsRUFBQ3lCLEVBQUU7TUFBQ3hCLE1BQU0sRUFBQyxnQkFBU3JJLENBQUMsRUFBQztRQUFDOEgsQ0FBQyxDQUFDOUgsQ0FBQyxFQUFDc0gsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDZ0IsS0FBSyxFQUFDLGVBQVN0SSxDQUFDLEVBQUM7UUFBQ3FILENBQUMsQ0FBQ3JILENBQUMsRUFBRSxVQUFTQSxDQUFDLEVBQUM7VUFBQzhILENBQUMsQ0FBQzlILENBQUMsRUFBQ3NILENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBRSxFQUFDUSxDQUFDLENBQUM5SCxDQUFDLEVBQUN1SCxDQUFDLENBQUMsRUFBQ3ZILENBQUMsQ0FBQ3VJLElBQUksRUFBRTtNQUFBLENBQUM7TUFBQ0MsTUFBTSxFQUFDLGdCQUFTeEksQ0FBQyxFQUFDO1FBQUM4SCxDQUFDLENBQUM5SCxDQUFDLEVBQUN5SCxDQUFDLENBQUM7TUFBQTtJQUFDLENBQUM7SUFBQ3NDLEVBQUUsR0FBQyxTQUFIQSxFQUFFLENBQVUvSixDQUFDLEVBQUNDLENBQUMsRUFBQztNQUFDLENBQUMsVUFBU0QsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDNkosRUFBRSxDQUFDOUosQ0FBQyxDQUFDZ0gsT0FBTyxDQUFDO1FBQUMvRyxDQUFDLEdBQUNBLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLEdBQUMsVUFBU0EsQ0FBQyxFQUFDO1VBQUMsSUFBRzBILENBQUMsQ0FBQzFILENBQUMsQ0FBQyxFQUFDO1lBQUMsSUFBSUMsQ0FBQyxHQUFDMEgsQ0FBQyxDQUFDM0gsQ0FBQyxDQUFDO1lBQUNBLENBQUMsQ0FBQ3VKLEtBQUssQ0FBQ0QsZUFBZSxHQUFDckosQ0FBQyxDQUFDcUosZUFBZTtVQUFBO1FBQUMsQ0FBQyxDQUFDdEosQ0FBQyxDQUFDO01BQUEsQ0FBQyxFQUFFQSxDQUFDLENBQUMsRUFBQyxVQUFTQSxDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDd0YsQ0FBQyxDQUFDekYsQ0FBQyxDQUFDLElBQUUwRixDQUFDLENBQUMxRixDQUFDLENBQUMsS0FBR2lHLENBQUMsQ0FBQ2pHLENBQUMsRUFBQ0MsQ0FBQyxDQUFDNkMsYUFBYSxDQUFDLEVBQUNtRCxDQUFDLENBQUNqRyxDQUFDLEVBQUNDLENBQUMsQ0FBQzhDLFlBQVksQ0FBQyxFQUFDa0QsQ0FBQyxDQUFDakcsQ0FBQyxFQUFDQyxDQUFDLENBQUN5QyxhQUFhLENBQUMsRUFBQ3VELENBQUMsQ0FBQ2pHLENBQUMsRUFBQ0MsQ0FBQyxDQUFDMEMsYUFBYSxDQUFDLEVBQUNzRCxDQUFDLENBQUNqRyxDQUFDLEVBQUNDLENBQUMsQ0FBQzJDLFlBQVksQ0FBQyxFQUFDcUQsQ0FBQyxDQUFDakcsQ0FBQyxFQUFDQyxDQUFDLENBQUM0QyxXQUFXLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBQzdDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEVBQUN1RixDQUFDLENBQUN4RixDQUFDLENBQUMsRUFBQzRILENBQUMsQ0FBQzVILENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ2dLLEVBQUUsR0FBQyxDQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsT0FBTyxDQUFDO0lBQUNDLEVBQUUsR0FBQyxTQUFIQSxFQUFFLENBQVVqSyxDQUFDLEVBQUM7TUFBQyxPQUFPQSxDQUFDLENBQUMyRCxVQUFVLElBQUUsU0FBUyxJQUFHdUcsZ0JBQWdCLENBQUNuSixTQUFTO0lBQUEsQ0FBQztJQUFDb0osRUFBRSxHQUFDLFNBQUhBLEVBQUUsQ0FBVW5LLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLEVBQUM7TUFBQ2IsQ0FBQyxDQUFDb0gsT0FBTyxDQUFFLFVBQVNwSCxDQUFDLEVBQUM7UUFBQyxPQUFPLFVBQVNBLENBQUMsRUFBQztVQUFDLE9BQU9BLENBQUMsQ0FBQ29LLGNBQWMsSUFBRXBLLENBQUMsQ0FBQ3FLLGlCQUFpQixHQUFDLENBQUM7UUFBQSxDQUFDLENBQUNySyxDQUFDLENBQUMsR0FBQyxVQUFTQSxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDQyxDQUFDLEVBQUM7VUFBQyxJQUFJUyxDQUFDLEdBQUMsVUFBU3ZCLENBQUMsRUFBQztZQUFDLE9BQU8yRixDQUFDLENBQUMwRCxPQUFPLENBQUNqRSxDQUFDLENBQUNwRixDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUM7VUFBQSxDQUFDLENBQUNBLENBQUMsQ0FBQztVQUFDcUYsQ0FBQyxDQUFDckYsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxFQUFDNkYsQ0FBQyxDQUFDN0YsQ0FBQyxFQUFDYSxDQUFDLENBQUNpQyxhQUFhLENBQUMsRUFBQ21ELENBQUMsQ0FBQ2pHLENBQUMsRUFBQ2EsQ0FBQyxDQUFDa0MsWUFBWSxDQUFDLEVBQUMsVUFBUy9DLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLEVBQUM7WUFBQ1osQ0FBQyxDQUFDZ0QsaUJBQWlCLElBQUVzRCxDQUFDLENBQUN2RyxDQUFDLEVBQUNhLENBQUMsQ0FBQztVQUFBLENBQUMsQ0FBQ2IsQ0FBQyxFQUFDYSxDQUFDLEVBQUNDLENBQUMsQ0FBQyxFQUFDOEUsQ0FBQyxDQUFDL0UsQ0FBQyxDQUFDc0MsY0FBYyxFQUFDbkQsQ0FBQyxFQUFDQyxDQUFDLEVBQUNhLENBQUMsQ0FBQyxFQUFDUyxDQUFDLElBQUU2SCxFQUFFLENBQUNwSixDQUFDLEVBQUNhLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDZCxDQUFDLENBQUNzSyxNQUFNLEVBQUN0SyxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxDQUFDLEdBQUMsVUFBU2IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1VBQUMyRSxDQUFDLENBQUN6RixDQUFDLENBQUMsS0FBRzZGLENBQUMsQ0FBQzdGLENBQUMsRUFBQ2EsQ0FBQyxDQUFDa0MsWUFBWSxDQUFDLEVBQUMsVUFBUy9DLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLEVBQUNDLENBQUMsRUFBQztZQUFDRCxDQUFDLENBQUNxQyxjQUFjLElBQUUsVUFBU2xELENBQUMsRUFBQztjQUFDLE9BQU9vRixDQUFDLENBQUNwRixDQUFDLENBQUMsS0FBRzJFLENBQUM7WUFBQSxDQUFDLENBQUMzRSxDQUFDLENBQUMsSUFBRSxLQUFLLEtBQUdBLENBQUMsQ0FBQ2dILE9BQU8sS0FBR2lDLEVBQUUsQ0FBQ2pKLENBQUMsQ0FBQyxFQUFDLFVBQVNBLENBQUMsRUFBQztjQUFDa0gsQ0FBQyxDQUFDbEgsQ0FBQyxFQUFFLFVBQVNBLENBQUMsRUFBQztnQkFBQzRKLEVBQUUsQ0FBQzVKLENBQUMsQ0FBQztjQUFBLENBQUMsQ0FBRSxFQUFDNEosRUFBRSxDQUFDNUosQ0FBQyxDQUFDO1lBQUEsQ0FBQyxDQUFDQSxDQUFDLENBQUMsRUFBQzZKLEVBQUUsQ0FBQzdKLENBQUMsQ0FBQyxFQUFDaUcsQ0FBQyxDQUFDakcsQ0FBQyxFQUFDYSxDQUFDLENBQUM4QixhQUFhLENBQUMsRUFBQytELENBQUMsQ0FBQzVGLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDMEUsQ0FBQyxDQUFDeEYsQ0FBQyxDQUFDLEVBQUM0RixDQUFDLENBQUMvRSxDQUFDLENBQUM2QyxlQUFlLEVBQUMxRCxDQUFDLEVBQUNDLENBQUMsRUFBQ2EsQ0FBQyxDQUFDLENBQUM7VUFBQSxDQUFDLENBQUNkLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLEVBQUNDLENBQUMsQ0FBQyxFQUFDOEUsQ0FBQyxDQUFDL0UsQ0FBQyxDQUFDdUMsYUFBYSxFQUFDcEQsQ0FBQyxFQUFDQyxDQUFDLEVBQUNhLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDZCxDQUFDLENBQUNzSyxNQUFNLEVBQUN0SyxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFFO0lBQUEsQ0FBQztJQUFDMEosRUFBRSxHQUFDLFNBQUhBLEVBQUUsQ0FBVXZLLENBQUMsRUFBQztNQUFDLE9BQU93SyxLQUFLLENBQUN6SixTQUFTLENBQUMwSixLQUFLLENBQUN4SixJQUFJLENBQUNqQixDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUMwSyxFQUFFLEdBQUMsU0FBSEEsRUFBRSxDQUFVMUssQ0FBQyxFQUFDO01BQUMsT0FBT0EsQ0FBQyxDQUFDOEIsU0FBUyxDQUFDNkksZ0JBQWdCLENBQUMzSyxDQUFDLENBQUM2QixpQkFBaUIsQ0FBQztJQUFBLENBQUM7SUFBQytJLEVBQUUsR0FBQyxTQUFIQSxFQUFFLENBQVU1SyxDQUFDLEVBQUM7TUFBQyxPQUFPLFVBQVNBLENBQUMsRUFBQztRQUFDLE9BQU9vRixDQUFDLENBQUNwRixDQUFDLENBQUMsS0FBRzhFLENBQUM7TUFBQSxDQUFDLENBQUM5RSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUM2SyxFQUFFLEdBQUMsU0FBSEEsRUFBRSxDQUFVN0ssQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQyxPQUFPLFVBQVNELENBQUMsRUFBQztRQUFDLE9BQU91SyxFQUFFLENBQUN2SyxDQUFDLENBQUMsQ0FBQzhLLE1BQU0sQ0FBQ3JGLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBQ3pGLENBQUMsSUFBRTBLLEVBQUUsQ0FBQ3pLLENBQUMsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDOEssRUFBRSxHQUFDLFNBQUhBLEVBQUUsQ0FBVS9LLENBQUMsRUFBQ2EsQ0FBQyxFQUFDO01BQUMsSUFBSVUsQ0FBQyxHQUFDc0MsQ0FBQyxDQUFDN0QsQ0FBQyxDQUFDO01BQUMsSUFBSSxDQUFDZ0wsU0FBUyxHQUFDekosQ0FBQyxFQUFDLElBQUksQ0FBQ29GLFlBQVksR0FBQyxDQUFDLEVBQUMsVUFBUzNHLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUNhLENBQUMsSUFBRSxDQUFDbUosRUFBRSxDQUFDakssQ0FBQyxDQUFDLEtBQUdDLENBQUMsQ0FBQ3VHLFNBQVMsR0FBQyxJQUFJeUUsb0JBQW9CLENBQUUsVUFBU3BLLENBQUMsRUFBQztVQUFDc0osRUFBRSxDQUFDdEosQ0FBQyxFQUFDYixDQUFDLEVBQUNDLENBQUMsQ0FBQztRQUFBLENBQUMsRUFBRSxVQUFTRCxDQUFDLEVBQUM7VUFBQyxPQUFNO1lBQUNrTCxJQUFJLEVBQUNsTCxDQUFDLENBQUM4QixTQUFTLEtBQUdOLFFBQVEsR0FBQyxJQUFJLEdBQUN4QixDQUFDLENBQUM4QixTQUFTO1lBQUNxSixVQUFVLEVBQUNuTCxDQUFDLENBQUNnQyxVQUFVLElBQUVoQyxDQUFDLENBQUMrQixTQUFTLEdBQUM7VUFBSSxDQUFDO1FBQUEsQ0FBQyxDQUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBQ3VCLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxVQUFTdkIsQ0FBQyxFQUFDYSxDQUFDLEVBQUM7UUFBQ1osQ0FBQyxLQUFHWSxDQUFDLENBQUN1SyxjQUFjLEdBQUMsWUFBVTtVQUFDLENBQUMsVUFBU3BMLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1lBQUMsSUFBSVksQ0FBQztZQUFDLENBQUNBLENBQUMsR0FBQzZKLEVBQUUsQ0FBQzFLLENBQUMsQ0FBQyxFQUFDdUssRUFBRSxDQUFDMUosQ0FBQyxDQUFDLENBQUNpSyxNQUFNLENBQUNGLEVBQUUsQ0FBQyxFQUFFeEQsT0FBTyxDQUFFLFVBQVNuSCxDQUFDLEVBQUM7Y0FBQ2dHLENBQUMsQ0FBQ2hHLENBQUMsRUFBQ0QsQ0FBQyxDQUFDNkMsV0FBVyxDQUFDLEVBQUMyQyxDQUFDLENBQUN2RixDQUFDLENBQUM7WUFBQSxDQUFDLENBQUUsRUFBQ0EsQ0FBQyxDQUFDb0wsTUFBTSxFQUFFO1VBQUEsQ0FBQyxDQUFDckwsQ0FBQyxFQUFDYSxDQUFDLENBQUM7UUFBQSxDQUFDLEVBQUNNLE1BQU0sQ0FBQ3lILGdCQUFnQixDQUFDLFFBQVEsRUFBQy9ILENBQUMsQ0FBQ3VLLGNBQWMsQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFDN0osQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFDLElBQUksQ0FBQzhKLE1BQU0sQ0FBQ3hLLENBQUMsQ0FBQztJQUFBLENBQUM7RUFBQyxPQUFPa0ssRUFBRSxDQUFDaEssU0FBUyxHQUFDO0lBQUNzSyxNQUFNLEVBQUMsZ0JBQVNyTCxDQUFDLEVBQUM7TUFBQyxJQUFJQyxDQUFDO1FBQUNzQixDQUFDO1FBQUNHLENBQUMsR0FBQyxJQUFJLENBQUNzSixTQUFTO1FBQUNwSixDQUFDLEdBQUNpSixFQUFFLENBQUM3SyxDQUFDLEVBQUMwQixDQUFDLENBQUM7TUFBQ2tGLENBQUMsQ0FBQyxJQUFJLEVBQUNoRixDQUFDLENBQUNoQixNQUFNLENBQUMsRUFBQyxDQUFDQyxDQUFDLElBQUVDLENBQUMsR0FBQ21KLEVBQUUsQ0FBQ3ZJLENBQUMsQ0FBQyxHQUFDLFVBQVMxQixDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDO1FBQUNiLENBQUMsQ0FBQ29ILE9BQU8sQ0FBRSxVQUFTcEgsQ0FBQyxFQUFDO1VBQUMsQ0FBQyxDQUFDLEtBQUdnSyxFQUFFLENBQUNYLE9BQU8sQ0FBQ3JKLENBQUMsQ0FBQ2dILE9BQU8sQ0FBQyxJQUFFLFVBQVNoSCxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDO1lBQUNiLENBQUMsQ0FBQ3NGLFlBQVksQ0FBQyxTQUFTLEVBQUMsTUFBTSxDQUFDLEVBQUM2RCxFQUFFLENBQUNuSixDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxDQUFDLEVBQUMsVUFBU2IsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7Y0FBQyxJQUFJWSxDQUFDLEdBQUNzSCxDQUFDLENBQUNuSSxDQUFDLENBQUNnSCxPQUFPLENBQUM7Y0FBQ25HLENBQUMsSUFBRUEsQ0FBQyxDQUFDYixDQUFDLEVBQUNDLENBQUMsQ0FBQztZQUFBLENBQUMsQ0FBQ0QsQ0FBQyxFQUFDQyxDQUFDLENBQUMsRUFBQ29GLENBQUMsQ0FBQ3JGLENBQUMsRUFBQytFLENBQUMsQ0FBQztVQUFBLENBQUMsQ0FBQy9FLENBQUMsRUFBQ0MsQ0FBQyxFQUFDWSxDQUFDLENBQUM7UUFBQSxDQUFDLENBQUUsRUFBQytGLENBQUMsQ0FBQy9GLENBQUMsRUFBQyxDQUFDLENBQUM7TUFBQSxDQUFDLENBQUNlLENBQUMsRUFBQ0YsQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFFSCxDQUFDLEdBQUNLLENBQUMsRUFBQyxVQUFTNUIsQ0FBQyxFQUFDO1FBQUNBLENBQUMsQ0FBQ3NMLFVBQVUsRUFBRTtNQUFBLENBQUMsQ0FBQ3JMLENBQUMsR0FBQyxJQUFJLENBQUN1RyxTQUFTLENBQUMsRUFBQyxVQUFTeEcsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQ0EsQ0FBQyxDQUFDbUgsT0FBTyxDQUFFLFVBQVNuSCxDQUFDLEVBQUM7VUFBQ0QsQ0FBQyxDQUFDdUwsT0FBTyxDQUFDdEwsQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFFO01BQUEsQ0FBQyxDQUFDQSxDQUFDLEVBQUNzQixDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQ2lLLE9BQU8sQ0FBQzVKLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQzZKLE9BQU8sRUFBQyxtQkFBVTtNQUFDLElBQUksQ0FBQ2pGLFNBQVMsSUFBRSxJQUFJLENBQUNBLFNBQVMsQ0FBQzhFLFVBQVUsRUFBRSxFQUFDckwsQ0FBQyxJQUFFa0IsTUFBTSxDQUFDNEgsbUJBQW1CLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQ3FDLGNBQWMsQ0FBQyxFQUFDVixFQUFFLENBQUMsSUFBSSxDQUFDTSxTQUFTLENBQUMsQ0FBQzVELE9BQU8sQ0FBRSxVQUFTcEgsQ0FBQyxFQUFDO1FBQUM0SCxDQUFDLENBQUM1SCxDQUFDLENBQUM7TUFBQSxDQUFDLENBQUUsRUFBQyxPQUFPLElBQUksQ0FBQ3dHLFNBQVMsRUFBQyxPQUFPLElBQUksQ0FBQ3dFLFNBQVMsRUFBQyxPQUFPLElBQUksQ0FBQ0ksY0FBYyxFQUFDLE9BQU8sSUFBSSxDQUFDekUsWUFBWSxFQUFDLE9BQU8sSUFBSSxDQUFDRSxXQUFXO0lBQUEsQ0FBQztJQUFDMkUsT0FBTyxFQUFDLGlCQUFTeEwsQ0FBQyxFQUFDO01BQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUk7UUFBQ1ksQ0FBQyxHQUFDLElBQUksQ0FBQ21LLFNBQVM7TUFBQ0gsRUFBRSxDQUFDN0ssQ0FBQyxFQUFDYSxDQUFDLENBQUMsQ0FBQ3VHLE9BQU8sQ0FBRSxVQUFTcEgsQ0FBQyxFQUFDO1FBQUN1RyxDQUFDLENBQUN2RyxDQUFDLEVBQUNDLENBQUMsQ0FBQyxFQUFDbUosRUFBRSxDQUFDcEosQ0FBQyxFQUFDYSxDQUFDLEVBQUNaLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBRTtJQUFBLENBQUM7SUFBQ3lMLFVBQVUsRUFBQyxzQkFBVTtNQUFDLElBQUkxTCxDQUFDLEdBQUMsSUFBSSxDQUFDZ0wsU0FBUztNQUFDTixFQUFFLENBQUMxSyxDQUFDLENBQUMsQ0FBQ29ILE9BQU8sQ0FBRSxVQUFTbkgsQ0FBQyxFQUFDO1FBQUM4SixFQUFFLENBQUM5SixDQUFDLEVBQUNELENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBRTtJQUFBO0VBQUMsQ0FBQyxFQUFDK0ssRUFBRSxDQUFDeEMsSUFBSSxHQUFDLFVBQVN2SSxDQUFDLEVBQUNDLENBQUMsRUFBQztJQUFDLElBQUlZLENBQUMsR0FBQ2dELENBQUMsQ0FBQzVELENBQUMsQ0FBQztJQUFDbUosRUFBRSxDQUFDcEosQ0FBQyxFQUFDYSxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUNrSyxFQUFFLENBQUNZLFdBQVcsR0FBQyxVQUFTM0wsQ0FBQyxFQUFDO0lBQUN3RixDQUFDLENBQUN4RixDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUNDLENBQUMsSUFBRSxVQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQztJQUFDLElBQUdBLENBQUMsRUFBQyxJQUFHQSxDQUFDLENBQUNXLE1BQU0sRUFBQyxLQUFJLElBQUlDLENBQUMsRUFBQ0MsQ0FBQyxHQUFDLENBQUMsRUFBQ0QsQ0FBQyxHQUFDWixDQUFDLENBQUNhLENBQUMsQ0FBQyxFQUFDQSxDQUFDLElBQUUsQ0FBQztNQUFDZ0QsQ0FBQyxDQUFDOUQsQ0FBQyxFQUFDYSxDQUFDLENBQUM7SUFBQyxPQUFLaUQsQ0FBQyxDQUFDOUQsQ0FBQyxFQUFDQyxDQUFDLENBQUM7RUFBQSxDQUFDLENBQUM4SyxFQUFFLEVBQUM1SixNQUFNLENBQUN5SyxlQUFlLENBQUMsRUFBQ2IsRUFBRTtBQUFBLENBQUMsQ0FBRTtBQUMzclIsU0FBU2MsZUFBZSxDQUFDQyxTQUFTLEVBQUVDLE9BQU8sRUFBRTtFQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEVBQUVMLFNBQVMsRUFBRUMsT0FBTyxDQUFDNUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RFO0FBRUEsSUFBSWhDLGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxDQUFhNEksT0FBTyxFQUFFO0VBQ3RDRixlQUFlLENBQUMsWUFBWSxFQUFFRSxPQUFPLENBQUM7QUFDeEMsQ0FBQztBQUNELElBQUkzSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBYTJJLE9BQU8sRUFBRTtFQUNyQ0YsZUFBZSxDQUFDLFdBQVcsRUFBRUUsT0FBTyxDQUFDO0FBQ3ZDLENBQUM7QUFDRCxJQUFJekksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixDQUFheUksT0FBTyxFQUFFO0VBQ3hDRixlQUFlLENBQUMsV0FBVyxFQUFFRSxPQUFPLENBQUM7QUFDdkMsQ0FBQztBQUNELElBQUl4SSxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsQ0FBYXdJLE9BQU8sRUFBRTtFQUN2Q0YsZUFBZSxDQUFDLFdBQVcsRUFBRUUsT0FBTyxDQUFDO0FBQ3ZDLENBQUM7QUFDRCxJQUFJdkksY0FBYyxHQUFHLFNBQWpCQSxjQUFjLENBQWF1SSxPQUFPLEVBQUU7RUFDdENGLGVBQWUsQ0FBQyxVQUFVLEVBQUVFLE9BQU8sQ0FBQztFQUNwQ0EsT0FBTyxDQUFDSyxHQUFHLEdBQ1QsNkRBQTZEO0FBQ2pFLENBQUM7QUFDRCxJQUFJM0ksZUFBZSxHQUFHLFNBQWxCQSxlQUFlLEdBQWU7RUFDaENvSSxlQUFlLENBQUMsYUFBYSxFQUFFckssUUFBUSxDQUFDNkssZUFBZSxDQUFDO0FBQzFELENBQUM7QUFDRCxJQUFJM0ksZUFBZSxHQUFHLFNBQWxCQSxlQUFlLENBQWFxSSxPQUFPLEVBQUU7RUFDdkNGLGVBQWUsQ0FBQyxXQUFXLEVBQUVFLE9BQU8sQ0FBQztBQUN2QyxDQUFDO0FBRUQ1SyxNQUFNLENBQUN5SyxlQUFlLEdBQUc7RUFDdkI3SixTQUFTLEVBQUUsQ0FBQztFQUNaO0VBQ0FvQixjQUFjLEVBQUVBLGNBQWM7RUFDOUJDLGFBQWEsRUFBRUEsYUFBYTtFQUM1Qk0sZUFBZSxFQUFFQSxlQUFlO0VBQ2hDSixnQkFBZ0IsRUFBRUEsZ0JBQWdCO0VBQ2xDQyxlQUFlLEVBQUVBLGVBQWU7RUFDaENDLGNBQWMsRUFBRUEsY0FBYztFQUM5QkMsZUFBZSxFQUFFQTtBQUNuQixDQUFDO0FBQ0R0QyxNQUFNLENBQUN5SCxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxVQUFVMEQsS0FBSyxFQUFFO0VBQ2hFbkwsTUFBTSxDQUFDb0wsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ3RJLE1BQU0sQ0FBQ0MsUUFBUTtBQUNuRCxDQUFDLEVBQUUsS0FBSyxDQUFDOzs7Ozs7Ozs7O0FDMUNULElBQUd6QyxRQUFRLENBQUNnTCxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtFQUUxQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBSUMsVUFBVSxHQUFHLElBQUlDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtJQUMzQ0MsWUFBWSxFQUFFLENBQUM7SUFDZkMsYUFBYSxFQUFFLEtBQUs7SUFDcEJDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLFVBQVUsRUFBRTtNQUNSQyxNQUFNLEVBQUUscUJBQXFCO01BQzdCQyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBQ0hDLFFBQVEsRUFBRTtNQUNOQyxLQUFLLEVBQUUsS0FBSztNQUNaQyxvQkFBb0IsRUFBRTtJQUMxQixDQUFDO0lBQ0RDLFdBQVcsRUFBRTtNQUNULEdBQUcsRUFBRTtRQUNEQyxVQUFVLEVBQUU7VUFDUkMsRUFBRSxFQUFFLG9CQUFvQjtVQUN4QkMsU0FBUyxFQUFFO1FBQ2Y7TUFDSjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0FBQ047QUFDQSxJQUFHaE0sUUFBUSxDQUFDZ0wsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7RUFFN0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLElBQUlDLFVBQVUsR0FBRyxJQUFJQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7SUFDOUNlLGFBQWEsRUFBRSxDQUFDO0lBQ2hCQyxJQUFJLEVBQUU7TUFDRkMsSUFBSSxFQUFFO0lBQ1YsQ0FBQztJQUNEaEIsWUFBWSxFQUFFLEVBQUU7SUFDaEJDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCQyxJQUFJLEVBQUUsSUFBSTtJQUVWO0lBQ0E7SUFDQTtJQUNBO0lBQ0FLLFFBQVEsRUFBRTtNQUNOQyxLQUFLLEVBQUUsS0FBSztNQUNaQyxvQkFBb0IsRUFBRTtJQUMxQixDQUFDO0lBQ0RDLFdBQVcsRUFBRTtNQUNULEdBQUcsRUFBRTtRQUNEQyxVQUFVLEVBQUU7VUFDUkMsRUFBRSxFQUFFLG9CQUFvQjtVQUN4QkMsU0FBUyxFQUFFO1FBQ2Y7TUFDSjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0FBQ047Ozs7OztVQ3ZGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042QiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvdHViZXIvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbGF6eWxvYWQuanMiLCJ3ZWJwYWNrOi8vdmlkZW90dWJlci8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW90dWJlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aWRlb3R1YmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZpZGVvdHViZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZpZGVvdHViZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92aWRlb3R1YmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlkZW90dWJlci8uL3NyYy9hc3NldHMvanMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihuLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6bnx8c2VsZikuTGF6eUxvYWQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtyZXR1cm4gbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihuKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgZT1hcmd1bWVudHNbdF07Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJihuW2ldPWVbaV0pfXJldHVybiBufSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LGU9dCYmIShcIm9uc2Nyb2xsXCJpbiB3aW5kb3cpfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvKGdsZXxpbmd8cm8pYm90fGNyYXdsfHNwaWRlci9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaT10JiZcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3csbz10JiZcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiksYT10JiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xLHI9e2VsZW1lbnRzX3NlbGVjdG9yOlwiLmxhenlcIixjb250YWluZXI6ZXx8dD9kb2N1bWVudDpudWxsLHRocmVzaG9sZDozMDAsdGhyZXNob2xkczpudWxsLGRhdGFfc3JjOlwic3JjXCIsZGF0YV9zcmNzZXQ6XCJzcmNzZXRcIixkYXRhX3NpemVzOlwic2l6ZXNcIixkYXRhX2JnOlwiYmdcIixkYXRhX2JnX2hpZHBpOlwiYmctaGlkcGlcIixkYXRhX2JnX211bHRpOlwiYmctbXVsdGlcIixkYXRhX2JnX211bHRpX2hpZHBpOlwiYmctbXVsdGktaGlkcGlcIixkYXRhX2JnX3NldDpcImJnLXNldFwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIixjbGFzc19lbnRlcmVkOlwiZW50ZXJlZFwiLGNsYXNzX2V4aXRlZDpcImV4aXRlZFwiLHVub2JzZXJ2ZV9jb21wbGV0ZWQ6ITAsdW5vYnNlcnZlX2VudGVyZWQ6ITEsY2FuY2VsX29uX2V4aXQ6ITAsY2FsbGJhY2tfZW50ZXI6bnVsbCxjYWxsYmFja19leGl0Om51bGwsY2FsbGJhY2tfYXBwbGllZDpudWxsLGNhbGxiYWNrX2xvYWRpbmc6bnVsbCxjYWxsYmFja19sb2FkZWQ6bnVsbCxjYWxsYmFja19lcnJvcjpudWxsLGNhbGxiYWNrX2ZpbmlzaDpudWxsLGNhbGxiYWNrX2NhbmNlbDpudWxsLHVzZV9uYXRpdmU6ITEscmVzdG9yZV9vbl9lcnJvcjohMX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gbih7fSxyLHQpfSxsPWZ1bmN0aW9uKG4sdCl7dmFyIGUsaT1cIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLG89bmV3IG4odCk7dHJ5e2U9bmV3IEN1c3RvbUV2ZW50KGkse2RldGFpbDp7aW5zdGFuY2U6b319KX1jYXRjaChuKXsoZT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoaSwhMSwhMSx7aW5zdGFuY2U6b30pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KGUpfSx1PVwic3JjXCIscz1cInNyY3NldFwiLGQ9XCJzaXplc1wiLGY9XCJwb3N0ZXJcIixfPVwibGxPcmlnaW5hbEF0dHJzXCIsZz1cImRhdGFcIix2PVwibG9hZGluZ1wiLGI9XCJsb2FkZWRcIixtPVwiYXBwbGllZFwiLHA9XCJlcnJvclwiLGg9XCJuYXRpdmVcIixFPVwiZGF0YS1cIixJPVwibGwtc3RhdHVzXCIseT1mdW5jdGlvbihuLHQpe3JldHVybiBuLmdldEF0dHJpYnV0ZShFK3QpfSxrPWZ1bmN0aW9uKG4pe3JldHVybiB5KG4sSSl9LHc9ZnVuY3Rpb24obix0KXtyZXR1cm4gZnVuY3Rpb24obix0LGUpe3ZhciBpPVwiZGF0YS1sbC1zdGF0dXNcIjtudWxsIT09ZT9uLnNldEF0dHJpYnV0ZShpLGUpOm4ucmVtb3ZlQXR0cmlidXRlKGkpfShuLDAsdCl9LEE9ZnVuY3Rpb24obil7cmV0dXJuIHcobixudWxsKX0sTD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09PWsobil9LE89ZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT1ofSx4PVt2LGIsbSxwXSxDPWZ1bmN0aW9uKG4sdCxlLGkpe24mJih2b2lkIDA9PT1pP3ZvaWQgMD09PWU/bih0KTpuKHQsZSk6bih0LGUsaSkpfSxOPWZ1bmN0aW9uKG4sdCl7bz9uLmNsYXNzTGlzdC5hZGQodCk6bi5jbGFzc05hbWUrPShuLmNsYXNzTmFtZT9cIiBcIjpcIlwiKSt0fSxNPWZ1bmN0aW9uKG4sdCl7bz9uLmNsYXNzTGlzdC5yZW1vdmUodCk6bi5jbGFzc05hbWU9bi5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiK3QrXCIoXFxcXHMrfCQpXCIpLFwiIFwiKS5yZXBsYWNlKC9eXFxzKy8sXCJcIikucmVwbGFjZSgvXFxzKyQvLFwiXCIpfSx6PWZ1bmN0aW9uKG4pe3JldHVybiBuLmxsVGVtcEltYWdlfSxUPWZ1bmN0aW9uKG4sdCl7aWYodCl7dmFyIGU9dC5fb2JzZXJ2ZXI7ZSYmZS51bm9ic2VydmUobil9fSxSPWZ1bmN0aW9uKG4sdCl7biYmKG4ubG9hZGluZ0NvdW50Kz10KX0sRz1mdW5jdGlvbihuLHQpe24mJihuLnRvTG9hZENvdW50PXQpfSxqPWZ1bmN0aW9uKG4pe2Zvcih2YXIgdCxlPVtdLGk9MDt0PW4uY2hpbGRyZW5baV07aSs9MSlcIlNPVVJDRVwiPT09dC50YWdOYW1lJiZlLnB1c2godCk7cmV0dXJuIGV9LEQ9ZnVuY3Rpb24obix0KXt2YXIgZT1uLnBhcmVudE5vZGU7ZSYmXCJQSUNUVVJFXCI9PT1lLnRhZ05hbWUmJmooZSkuZm9yRWFjaCh0KX0sSD1mdW5jdGlvbihuLHQpe2oobikuZm9yRWFjaCh0KX0sVj1bdV0sRj1bdSxmXSxCPVt1LHMsZF0sSj1bZ10sUD1mdW5jdGlvbihuKXtyZXR1cm4hIW5bX119LFM9ZnVuY3Rpb24obil7cmV0dXJuIG5bX119LFU9ZnVuY3Rpb24obil7cmV0dXJuIGRlbGV0ZSBuW19dfSwkPWZ1bmN0aW9uKG4sdCl7aWYoIVAobikpe3ZhciBlPXt9O3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVt0XT1uLmdldEF0dHJpYnV0ZSh0KX0pKSxuW19dPWV9fSxxPWZ1bmN0aW9uKG4sdCl7aWYoUChuKSl7dmFyIGU9UyhuKTt0LmZvckVhY2goKGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuLHQsZSl7ZT9uLnNldEF0dHJpYnV0ZSh0LGUpOm4ucmVtb3ZlQXR0cmlidXRlKHQpfShuLHQsZVt0XSl9KSl9fSxLPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19hcHBsaWVkKSx3KG4sbSksZSYmKHQudW5vYnNlcnZlX2NvbXBsZXRlZCYmVChuLHQpLEModC5jYWxsYmFja19hcHBsaWVkLG4sZSkpfSxRPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19sb2FkaW5nKSx3KG4sdiksZSYmKFIoZSwxKSxDKHQuY2FsbGJhY2tfbG9hZGluZyxuLGUpKX0sVz1mdW5jdGlvbihuLHQsZSl7ZSYmbi5zZXRBdHRyaWJ1dGUodCxlKX0sWD1mdW5jdGlvbihuLHQpe1cobixkLHkobix0LmRhdGFfc2l6ZXMpKSxXKG4scyx5KG4sdC5kYXRhX3NyY3NldCkpLFcobix1LHkobix0LmRhdGFfc3JjKSl9LFk9e0lNRzpmdW5jdGlvbihuLHQpe0QobiwoZnVuY3Rpb24obil7JChuLEIpLFgobix0KX0pKSwkKG4sQiksWChuLHQpfSxJRlJBTUU6ZnVuY3Rpb24obix0KXskKG4sViksVyhuLHUseShuLHQuZGF0YV9zcmMpKX0sVklERU86ZnVuY3Rpb24obix0KXtIKG4sKGZ1bmN0aW9uKG4peyQobixWKSxXKG4sdSx5KG4sdC5kYXRhX3NyYykpfSkpLCQobixGKSxXKG4sZix5KG4sdC5kYXRhX3Bvc3RlcikpLFcobix1LHkobix0LmRhdGFfc3JjKSksbi5sb2FkKCl9LE9CSkVDVDpmdW5jdGlvbihuLHQpeyQobixKKSxXKG4sZyx5KG4sdC5kYXRhX3NyYykpfX0sWj1bXCJJTUdcIixcIklGUkFNRVwiLFwiVklERU9cIixcIk9CSkVDVFwiXSxubj1mdW5jdGlvbihuLHQpeyF0fHxmdW5jdGlvbihuKXtyZXR1cm4gbi5sb2FkaW5nQ291bnQ+MH0odCl8fGZ1bmN0aW9uKG4pe3JldHVybiBuLnRvTG9hZENvdW50PjB9KHQpfHxDKG4uY2FsbGJhY2tfZmluaXNoLHQpfSx0bj1mdW5jdGlvbihuLHQsZSl7bi5hZGRFdmVudExpc3RlbmVyKHQsZSksbi5sbEV2TGlzbnJzW3RdPWV9LGVuPWZ1bmN0aW9uKG4sdCxlKXtuLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlKX0sb249ZnVuY3Rpb24obil7cmV0dXJuISFuLmxsRXZMaXNucnN9LGFuPWZ1bmN0aW9uKG4pe2lmKG9uKG4pKXt2YXIgdD1uLmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIHQpe3ZhciBpPXRbZV07ZW4obixlLGkpfWRlbGV0ZSBuLmxsRXZMaXNucnN9fSxybj1mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe2RlbGV0ZSBuLmxsVGVtcEltYWdlfShuKSxSKGUsLTEpLGZ1bmN0aW9uKG4pe24mJihuLnRvTG9hZENvdW50LT0xKX0oZSksTShuLHQuY2xhc3NfbG9hZGluZyksdC51bm9ic2VydmVfY29tcGxldGVkJiZUKG4sZSl9LGNuPWZ1bmN0aW9uKG4sdCxlKXt2YXIgaT16KG4pfHxuO29uKGkpfHxmdW5jdGlvbihuLHQsZSl7b24obil8fChuLmxsRXZMaXNucnM9e30pO3ZhciBpPVwiVklERU9cIj09PW4udGFnTmFtZT9cImxvYWRlZGRhdGFcIjpcImxvYWRcIjt0bihuLGksdCksdG4obixcImVycm9yXCIsZSl9KGksKGZ1bmN0aW9uKG8peyFmdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1PKHQpO3JuKHQsZSxpKSxOKHQsZS5jbGFzc19sb2FkZWQpLHcodCxiKSxDKGUuY2FsbGJhY2tfbG9hZGVkLHQsaSksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSwoZnVuY3Rpb24obyl7IWZ1bmN0aW9uKG4sdCxlLGkpe3ZhciBvPU8odCk7cm4odCxlLGkpLE4odCxlLmNsYXNzX2Vycm9yKSx3KHQscCksQyhlLmNhbGxiYWNrX2Vycm9yLHQsaSksZS5yZXN0b3JlX29uX2Vycm9yJiZxKHQsQiksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSl9LGxuPWZ1bmN0aW9uKG4sdCxlKXshZnVuY3Rpb24obil7cmV0dXJuIFouaW5kZXhPZihuLnRhZ05hbWUpPi0xfShuKT9mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe24ubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0obiksY24obix0LGUpLGZ1bmN0aW9uKG4pe1Aobil8fChuW19dPXtiYWNrZ3JvdW5kSW1hZ2U6bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2V9KX0obiksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmcpLG89eShuLHQuZGF0YV9iZ19oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KHIsJ1wiKScpLHoobikuc2V0QXR0cmlidXRlKHUsciksUShuLHQsZSkpfShuLHQsZSksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmdfbXVsdGkpLG89eShuLHQuZGF0YV9iZ19tdWx0aV9oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9cixLKG4sdCxlKSl9KG4sdCxlKSxmdW5jdGlvbihuLHQsZSl7dmFyIGk9eShuLHQuZGF0YV9iZ19zZXQpO2lmKGkpe3ZhciBvPWkuc3BsaXQoXCJ8XCIpLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKTtuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSxcIlwiPT09bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UmJihhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIi13ZWJraXQtaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKSxuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSksSyhuLHQsZSl9fShuLHQsZSl9KG4sdCxlKTpmdW5jdGlvbihuLHQsZSl7Y24obix0LGUpLGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT1ZW24udGFnTmFtZV07aSYmKGkobix0KSxRKG4sdCxlKSl9KG4sdCxlKX0obix0LGUpfSx1bj1mdW5jdGlvbihuKXtuLnJlbW92ZUF0dHJpYnV0ZSh1KSxuLnJlbW92ZUF0dHJpYnV0ZShzKSxuLnJlbW92ZUF0dHJpYnV0ZShkKX0sc249ZnVuY3Rpb24obil7RChuLChmdW5jdGlvbihuKXtxKG4sQil9KSkscShuLEIpfSxkbj17SU1HOnNuLElGUkFNRTpmdW5jdGlvbihuKXtxKG4sVil9LFZJREVPOmZ1bmN0aW9uKG4pe0gobiwoZnVuY3Rpb24obil7cShuLFYpfSkpLHEobixGKSxuLmxvYWQoKX0sT0JKRUNUOmZ1bmN0aW9uKG4pe3EobixKKX19LGZuPWZ1bmN0aW9uKG4sdCl7KGZ1bmN0aW9uKG4pe3ZhciB0PWRuW24udGFnTmFtZV07dD90KG4pOmZ1bmN0aW9uKG4pe2lmKFAobikpe3ZhciB0PVMobik7bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9dC5iYWNrZ3JvdW5kSW1hZ2V9fShuKX0pKG4pLGZ1bmN0aW9uKG4sdCl7TChuKXx8TyhuKXx8KE0obix0LmNsYXNzX2VudGVyZWQpLE0obix0LmNsYXNzX2V4aXRlZCksTShuLHQuY2xhc3NfYXBwbGllZCksTShuLHQuY2xhc3NfbG9hZGluZyksTShuLHQuY2xhc3NfbG9hZGVkKSxNKG4sdC5jbGFzc19lcnJvcikpfShuLHQpLEEobiksVShuKX0sX249W1wiSU1HXCIsXCJJRlJBTUVcIixcIlZJREVPXCJdLGduPWZ1bmN0aW9uKG4pe3JldHVybiBuLnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9LHZuPWZ1bmN0aW9uKG4sdCxlKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbi5pc0ludGVyc2VjdGluZ3x8bi5pbnRlcnNlY3Rpb25SYXRpbz4wfShuKT9mdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1mdW5jdGlvbihuKXtyZXR1cm4geC5pbmRleE9mKGsobikpPj0wfShuKTt3KG4sXCJlbnRlcmVkXCIpLE4obixlLmNsYXNzX2VudGVyZWQpLE0obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUpe3QudW5vYnNlcnZlX2VudGVyZWQmJlQobixlKX0obixlLGkpLEMoZS5jYWxsYmFja19lbnRlcixuLHQsaSksb3x8bG4obixlLGkpfShuLnRhcmdldCxuLHQsZSk6ZnVuY3Rpb24obix0LGUsaSl7TChuKXx8KE4obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUsaSl7ZS5jYW5jZWxfb25fZXhpdCYmZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT12fShuKSYmXCJJTUdcIj09PW4udGFnTmFtZSYmKGFuKG4pLGZ1bmN0aW9uKG4pe0QobiwoZnVuY3Rpb24obil7dW4obil9KSksdW4obil9KG4pLHNuKG4pLE0obixlLmNsYXNzX2xvYWRpbmcpLFIoaSwtMSksQShuKSxDKGUuY2FsbGJhY2tfY2FuY2VsLG4sdCxpKSl9KG4sdCxlLGkpLEMoZS5jYWxsYmFja19leGl0LG4sdCxpKSl9KG4udGFyZ2V0LG4sdCxlKX0pKX0sYm49ZnVuY3Rpb24obil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pfSxtbj1mdW5jdGlvbihuKXtyZXR1cm4gbi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChuLmVsZW1lbnRzX3NlbGVjdG9yKX0scG49ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBrKG4pPT09cH0obil9LGhuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBibihuKS5maWx0ZXIoTCl9KG58fG1uKHQpKX0sRW49ZnVuY3Rpb24obixlKXt2YXIgbz1jKG4pO3RoaXMuX3NldHRpbmdzPW8sdGhpcy5sb2FkaW5nQ291bnQ9MCxmdW5jdGlvbihuLHQpe2kmJiFnbihuKSYmKHQuX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZnVuY3Rpb24oZSl7dm4oZSxuLHQpfSksZnVuY3Rpb24obil7cmV0dXJue3Jvb3Q6bi5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOm4uY29udGFpbmVyLHJvb3RNYXJnaW46bi50aHJlc2hvbGRzfHxuLnRocmVzaG9sZCtcInB4XCJ9fShuKSkpfShvLHRoaXMpLGZ1bmN0aW9uKG4sZSl7dCYmKGUuX29ubGluZUhhbmRsZXI9ZnVuY3Rpb24oKXshZnVuY3Rpb24obix0KXt2YXIgZTsoZT1tbihuKSxibihlKS5maWx0ZXIocG4pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtNKHQsbi5jbGFzc19lcnJvciksQSh0KX0pKSx0LnVwZGF0ZSgpfShuLGUpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLGUuX29ubGluZUhhbmRsZXIpKX0obyx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIEVuLnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKG4pe3ZhciB0LG8sYT10aGlzLl9zZXR0aW5ncyxyPWhuKG4sYSk7Ryh0aGlzLHIubGVuZ3RoKSwhZSYmaT9nbihhKT9mdW5jdGlvbihuLHQsZSl7bi5mb3JFYWNoKChmdW5jdGlvbihuKXstMSE9PV9uLmluZGV4T2Yobi50YWdOYW1lKSYmZnVuY3Rpb24obix0LGUpe24uc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKSxjbihuLHQsZSksZnVuY3Rpb24obix0KXt2YXIgZT1ZW24udGFnTmFtZV07ZSYmZShuLHQpfShuLHQpLHcobixoKX0obix0LGUpfSkpLEcoZSwwKX0ocixhLHRoaXMpOihvPXIsZnVuY3Rpb24obil7bi5kaXNjb25uZWN0KCl9KHQ9dGhpcy5fb2JzZXJ2ZXIpLGZ1bmN0aW9uKG4sdCl7dC5mb3JFYWNoKChmdW5jdGlvbih0KXtuLm9ic2VydmUodCl9KSl9KHQsbykpOnRoaXMubG9hZEFsbChyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX29ic2VydmVyJiZ0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCksdCYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIix0aGlzLl9vbmxpbmVIYW5kbGVyKSxtbih0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24obil7VShuKX0pKSxkZWxldGUgdGhpcy5fb2JzZXJ2ZXIsZGVsZXRlIHRoaXMuX3NldHRpbmdzLGRlbGV0ZSB0aGlzLl9vbmxpbmVIYW5kbGVyLGRlbGV0ZSB0aGlzLmxvYWRpbmdDb3VudCxkZWxldGUgdGhpcy50b0xvYWRDb3VudH0sbG9hZEFsbDpmdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9dGhpcy5fc2V0dGluZ3M7aG4obixlKS5mb3JFYWNoKChmdW5jdGlvbihuKXtUKG4sdCksbG4obixlLHQpfSkpfSxyZXN0b3JlQWxsOmZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fc2V0dGluZ3M7bW4obikuZm9yRWFjaCgoZnVuY3Rpb24odCl7Zm4odCxuKX0pKX19LEVuLmxvYWQ9ZnVuY3Rpb24obix0KXt2YXIgZT1jKHQpO2xuKG4sZSl9LEVuLnJlc2V0U3RhdHVzPWZ1bmN0aW9uKG4pe0Eobil9LHQmJmZ1bmN0aW9uKG4sdCl7aWYodClpZih0Lmxlbmd0aClmb3IodmFyIGUsaT0wO2U9dFtpXTtpKz0xKWwobixlKTtlbHNlIGwobix0KX0oRW4sd2luZG93LmxhenlMb2FkT3B0aW9ucyksRW59KSk7XHJcbmZ1bmN0aW9uIGxvZ0VsZW1lbnRFdmVudChldmVudE5hbWUsIGVsZW1lbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKERhdGUubm93KCksIGV2ZW50TmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKSk7XHJcbiAgfVxyXG5cclxuICB2YXIgY2FsbGJhY2tfZW50ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgbG9nRWxlbWVudEV2ZW50KFwi8J+UkSBFTlRFUkVEXCIsIGVsZW1lbnQpO1xyXG4gIH07XHJcbiAgdmFyIGNhbGxiYWNrX2V4aXQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgbG9nRWxlbWVudEV2ZW50KFwi8J+aqiBFWElURURcIiwgZWxlbWVudCk7XHJcbiAgfTtcclxuICB2YXIgY2FsbGJhY2tfbG9hZGluZyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICBsb2dFbGVtZW50RXZlbnQoXCLijJogTE9BRElOR1wiLCBlbGVtZW50KTtcclxuICB9O1xyXG4gIHZhciBjYWxsYmFja19sb2FkZWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgbG9nRWxlbWVudEV2ZW50KFwi8J+RjSBMT0FERURcIiwgZWxlbWVudCk7XHJcbiAgfTtcclxuICB2YXIgY2FsbGJhY2tfZXJyb3IgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgbG9nRWxlbWVudEV2ZW50KFwi8J+SgCBFUlJPUlwiLCBlbGVtZW50KTtcclxuICAgIGVsZW1lbnQuc3JjID1cclxuICAgICAgXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MC8/dGV4dD1FcnJvcitQbGFjZWhvbGRlclwiO1xyXG4gIH07XHJcbiAgdmFyIGNhbGxiYWNrX2ZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxvZ0VsZW1lbnRFdmVudChcIuKclO+4jyBGSU5JU0hFRFwiLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG4gIH07XHJcbiAgdmFyIGNhbGxiYWNrX2NhbmNlbCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICBsb2dFbGVtZW50RXZlbnQoXCLwn5SlIENBTkNFTFwiLCBlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICB3aW5kb3cubGF6eUxvYWRPcHRpb25zID0ge1xyXG4gICAgdGhyZXNob2xkOiAwLFxyXG4gICAgLy8gQXNzaWduIHRoZSBjYWxsYmFja3MgZGVmaW5lZCBhYm92ZVxyXG4gICAgY2FsbGJhY2tfZW50ZXI6IGNhbGxiYWNrX2VudGVyLFxyXG4gICAgY2FsbGJhY2tfZXhpdDogY2FsbGJhY2tfZXhpdCxcclxuICAgIGNhbGxiYWNrX2NhbmNlbDogY2FsbGJhY2tfY2FuY2VsLFxyXG4gICAgY2FsbGJhY2tfbG9hZGluZzogY2FsbGJhY2tfbG9hZGluZyxcclxuICAgIGNhbGxiYWNrX2xvYWRlZDogY2FsbGJhY2tfbG9hZGVkLFxyXG4gICAgY2FsbGJhY2tfZXJyb3I6IGNhbGxiYWNrX2Vycm9yLFxyXG4gICAgY2FsbGJhY2tfZmluaXNoOiBjYWxsYmFja19maW5pc2hcclxuICB9O1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTGF6eUxvYWQ6OkluaXRpYWxpemVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgd2luZG93LmxhenlMb2FkSW5zdGFuY2UgPSBldmVudC5kZXRhaWwuaW5zdGFuY2U7XHJcbn0sIGZhbHNlKTsiLCJpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLW1haW4tc2xpZGVyXCIpKSB7XHJcbiAgICBcclxuICAgIC8vIHZhciBnYWxsZXJ5VGh1bWJzID0gbmV3IFN3aXBlcignI2pzLW1haW4tc2xpZGVyLXRodW1icycsIHtcclxuICAgIC8vICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXHJcbiAgICAvLyAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG4gICAgLy8gICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAvLyAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgLy8gICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAvLyAgICAgICAgIDc2ODoge1xyXG4gICAgLy8gICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogM1xyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAxMjAwOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1XHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIDEwMjQ6IHtcclxuICAgIC8vICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDVcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgdmFyIGdhbGxlcnlUb3AgPSBuZXcgU3dpcGVyKCcjanMtbWFpbi1zbGlkZXInLCB7XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgIGxhenk6IHRydWUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDE1MDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNwb25zb3Itc2xpZGVyXCIpKSB7XHJcbiAgICBcclxuICAgIC8vIHZhciBnYWxsZXJ5VGh1bWJzID0gbmV3IFN3aXBlcignI2pzLW1haW4tc2xpZGVyLXRodW1icycsIHtcclxuICAgIC8vICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXHJcbiAgICAvLyAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG4gICAgLy8gICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAvLyAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgLy8gICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAvLyAgICAgICAgIDc2ODoge1xyXG4gICAgLy8gICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogM1xyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAxMjAwOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1XHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIDEwMjQ6IHtcclxuICAgIC8vICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDVcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgdmFyIGdhbGxlcnlUb3AgPSBuZXcgU3dpcGVyKCcjanMtc3BvbnNvci1zbGlkZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHJvd3M6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgIGxhenk6IHRydWUsXHJcblxyXG4gICAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgICAvLyAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgLy8gICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMTUwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2xhenlsb2FkJzsiXSwibmFtZXMiOlsibiIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiZ2xvYmFsVGhpcyIsInNlbGYiLCJMYXp5TG9hZCIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImUiLCJpIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwidXNlckFnZW50IiwibyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImEiLCJkZXZpY2VQaXhlbFJhdGlvIiwiciIsImVsZW1lbnRzX3NlbGVjdG9yIiwiY29udGFpbmVyIiwidGhyZXNob2xkIiwidGhyZXNob2xkcyIsImRhdGFfc3JjIiwiZGF0YV9zcmNzZXQiLCJkYXRhX3NpemVzIiwiZGF0YV9iZyIsImRhdGFfYmdfaGlkcGkiLCJkYXRhX2JnX211bHRpIiwiZGF0YV9iZ19tdWx0aV9oaWRwaSIsImRhdGFfYmdfc2V0IiwiZGF0YV9wb3N0ZXIiLCJjbGFzc19hcHBsaWVkIiwiY2xhc3NfbG9hZGluZyIsImNsYXNzX2xvYWRlZCIsImNsYXNzX2Vycm9yIiwiY2xhc3NfZW50ZXJlZCIsImNsYXNzX2V4aXRlZCIsInVub2JzZXJ2ZV9jb21wbGV0ZWQiLCJ1bm9ic2VydmVfZW50ZXJlZCIsImNhbmNlbF9vbl9leGl0IiwiY2FsbGJhY2tfZW50ZXIiLCJjYWxsYmFja19leGl0IiwiY2FsbGJhY2tfYXBwbGllZCIsImNhbGxiYWNrX2xvYWRpbmciLCJjYWxsYmFja19sb2FkZWQiLCJjYWxsYmFja19lcnJvciIsImNhbGxiYWNrX2ZpbmlzaCIsImNhbGxiYWNrX2NhbmNlbCIsInVzZV9uYXRpdmUiLCJyZXN0b3JlX29uX2Vycm9yIiwiYyIsImwiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluc3RhbmNlIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwidSIsInMiLCJkIiwiZiIsIl8iLCJnIiwidiIsImIiLCJtIiwicCIsImgiLCJFIiwiSSIsInkiLCJnZXRBdHRyaWJ1dGUiLCJrIiwidyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkEiLCJMIiwiTyIsIngiLCJDIiwiTiIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZSIsIk0iLCJyZW1vdmUiLCJyZXBsYWNlIiwiUmVnRXhwIiwieiIsImxsVGVtcEltYWdlIiwiVCIsIl9vYnNlcnZlciIsInVub2JzZXJ2ZSIsIlIiLCJsb2FkaW5nQ291bnQiLCJHIiwidG9Mb2FkQ291bnQiLCJqIiwiY2hpbGRyZW4iLCJ0YWdOYW1lIiwicHVzaCIsIkQiLCJwYXJlbnROb2RlIiwiZm9yRWFjaCIsIkgiLCJWIiwiRiIsIkIiLCJKIiwiUCIsIlMiLCJVIiwiJCIsInEiLCJLIiwiUSIsIlciLCJYIiwiWSIsIklNRyIsIklGUkFNRSIsIlZJREVPIiwibG9hZCIsIk9CSkVDVCIsIloiLCJubiIsInRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxsRXZMaXNucnMiLCJlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbiIsImFuIiwicm4iLCJjbiIsImxuIiwiaW5kZXhPZiIsImJhY2tncm91bmRJbWFnZSIsInN0eWxlIiwiY29uY2F0Iiwic3BsaXQiLCJtYXAiLCJqb2luIiwidW4iLCJzbiIsImRuIiwiZm4iLCJfbiIsImduIiwiSFRNTEltYWdlRWxlbWVudCIsInZuIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInRhcmdldCIsImJuIiwiQXJyYXkiLCJzbGljZSIsIm1uIiwicXVlcnlTZWxlY3RvckFsbCIsInBuIiwiaG4iLCJmaWx0ZXIiLCJFbiIsIl9zZXR0aW5ncyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsInJvb3RNYXJnaW4iLCJfb25saW5lSGFuZGxlciIsInVwZGF0ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwibG9hZEFsbCIsImRlc3Ryb3kiLCJyZXN0b3JlQWxsIiwicmVzZXRTdGF0dXMiLCJsYXp5TG9hZE9wdGlvbnMiLCJsb2dFbGVtZW50RXZlbnQiLCJldmVudE5hbWUiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJub3ciLCJzcmMiLCJkb2N1bWVudEVsZW1lbnQiLCJldmVudCIsImxhenlMb2FkSW5zdGFuY2UiLCJnZXRFbGVtZW50QnlJZCIsImdhbGxlcnlUb3AiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJwcmVsb2FkSW1hZ2VzIiwibGF6eSIsImxvb3AiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiYnJlYWtwb2ludHMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJzbGlkZXNQZXJWaWV3IiwiZ3JpZCIsInJvd3MiXSwic291cmNlUm9vdCI6IiJ9