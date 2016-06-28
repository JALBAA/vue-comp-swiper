(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue"], factory);
	else if(typeof exports === 'object')
		exports["Swiper"] = factory(require("Vue"));
	else
		root["Swiper"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1)
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] test.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/zhaoye/workspace/self/github/vue-swiper/test/test.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./test.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./test.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _main = __webpack_require__(7);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new Vue({
	    el: 'body',
	    replace: false,
	    data: {}
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n<swiper v-bind:options=\"options\" :list=\"list\">\n    <slider v-for=\"item in list\" track-by=\"$index\" :options=\"options\" slot=\"slider\">\n        <a :href=\"item.href\">\n            <img v-lazyload=\"item.imgSrc\" :src=\"'http://geekie.online/static/image/vue-swiper-demo/default.jpg'\" >\n        </a>\n    </slider>\n    <pagination slot=\"pagination\"></pagination>\n</swiper>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(8);

	var _vue2 = _interopRequireDefault(_vue);

	var _swiper = __webpack_require__(9);

	var _swiper2 = _interopRequireDefault(_swiper);

	var _slider = __webpack_require__(17);

	var _slider2 = _interopRequireDefault(_slider);

	var _scroller = __webpack_require__(22);

	var _scroller2 = _interopRequireDefault(_scroller);

	var _pagination = __webpack_require__(24);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    carousel: _swiper2.default,
	    slider: _slider2.default,
	    scroller: _scroller2.default,
	    pagination: _pagination2.default
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] ../src/swiper/swiper.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/zhaoye/workspace/self/github/vue-swiper/src/swiper/swiper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(11);

	var _utils2 = _interopRequireDefault(_utils);

	var _swiperBase = __webpack_require__(12);

	var _swiperBase2 = _interopRequireDefault(_swiperBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_swiperBase2.default],
	    props: ['list', 'options', 'cubic'],
	    data: function data() {
	        return {
	            originList: [],

	            idx: 0,

	            length: 0,

	            translateX: 0,
	            frameCnt: 0,
	            wrapperWidth: 0
	        };
	    },
	    computed: {
	        pageCount: function pageCount() {
	            var pageCount = this.originList.length / parseInt(this.options.perSliders);
	            return Math.ceil(pageCount);
	        },
	        transform: function transform() {
	            if (window.navigator.userAgent.match(/UCBrowser/)) {
	                return {
	                    'transform': 'translate(' + this.translateX + 'px,0)',
	                    '-webkit-transform': 'translate(' + this.translateX + 'px,0)',
	                    '-moz-transform': 'translate(' + this.translateX + 'px,0)'
	                };
	            } else {
	                return {
	                    'transform': 'translate3d(' + this.translateX + 'px, 0,0)',
	                    '-webkit-transform': 'translate3d(' + this.translateX + 'px,0,0)',
	                    '-moz-transform': 'translate3d(' + this.translateX + 'px,0,0)'
	                };
	            }
	        },
	        transition: function transition() {
	            if (this.easing) {
	                return {
	                    'transition': 'transform .3s ',
	                    '-webkit-transition': '-webkit-transform .3s',
	                    '-moz-transition': '-moz-transform .3s'
	                };
	            } else {
	                return {
	                    'transition': 'transform 0s',
	                    '-webkit-transition': '-webkit-transform 0s',
	                    '-moz-transition': '-moz-transform 0s'
	                };
	            }
	        },
	        listWidth: function listWidth() {
	            return this.wrapperWidth / this.options.perSliders * this.originList.length || 0;
	        }
	    },
	    created: function created() {
	        if (!!this.options.loop) {
	            this.originList = this.list.map(function (item, idx) {
	                return item;
	            });
	            var redundant = this.originList.length % this.options.perSliders;
	            for (var i = 0; i < redundant; i++) {
	                this.originList.push(new Object());
	                this.list.push(new Object());
	            }
	            this.loopList();
	            this.length = this.pageCount;
	        } else {
	            this.originList = this.list;
	            this.options.perSliders > 0 ? this.originList.length / this.options.perSliders : 1;
	        }
	    },
	    compiled: function compiled() {
	        if (!!this.options.autoPlay) this.autoPlay();

	        this.$watch('idx', _utils2.default.proxy(function (idx) {
	            this.$dispatch('idxChange', idx);
	            this.$broadcast('idxChange', idx);
	        }, this));
	    },
	    events: {
	        scrollTo: function scrollTo(idx) {
	            this.$broadcast('onScrollTo', idx);
	            if (idx != this.idx) this.scrollTo(idx);
	        },
	        touchEnd: function touchEnd(e) {
	            if (!this.isCanScroll) return;
	            if (Math.abs(this.deltaX) == 0) {
	                this.scrollTo(this.idx);
	                return;
	            }

	            var deltaX = this.endPosX - this.startPosX;
	            if (deltaX < -.1 * this.wrapperWidth) {
	                this.next();
	            } else if (deltaX > .1 * this.wrapperWidth) {
	                this.prev();
	            } else {
	                this.scrollTo(this.idx);
	            }
	        },
	        transitionEnd: function transitionEnd() {
	            this.frameCnt = 0;
	            if (this.idx == this.length) {
	                this.easing = false;
	                this.idx = 0;
	                this.scrollTo(this.idx);
	                var _this = this;

	                setTimeout(function () {
	                    _this.easing = true;
	                    _this.animating = false;
	                }, 50);
	            } else if (this.idx == -1) {
	                this.easing = false;
	                this.idx = this.length - 1;
	                this.scrollTo(this.idx);
	                var _this = this;

	                setTimeout(function () {
	                    _this.easing = true;
	                    _this.animating = false;
	                }, 50);
	            } else {
	                this.animating = false;
	            }
	        }
	    },
	    methods: {
	        loopList: function loopList() {
	            var length = this.options.perSliders;
	            for (var i = 0; i < length; i++) {
	                this.list.push(this.originList[i]);
	            }
	            for (var i = this.originList.length - 1; i >= this.originList.length - length; i--) {
	                this.list.unshift(this.originList[i]);
	            }
	        },
	        autoPlay: function autoPlay(time) {
	            var _this = this;
	            this.frameCnt = 0;
	            function renderFrame() {
	                if (_this.easing) {
	                    _this.frameCnt++;
	                    if (_this.frameCnt == 60 * 1) {
	                        _this.frameCnt = 0;
	                        _this.next();
	                    }
	                }
	                requestAnimationFrame(renderFrame);
	            }
	            requestAnimationFrame(renderFrame);
	        },
	        computeTransLimit: function computeTransLimit() {
	            var children = this.$el.querySelector('.swiper').children;
	            this.maxTranslateX = 0;
	            for (var i = 0; i < children.length; i++) {
	                this.maxTranslateX += children[i].offsetWidth;
	            }
	            this.maxTranslateX -= this.wrapperWidth;
	        },
	        prev: function prev() {
	            if (!!this.options.loop) this.idx = this.idx == -1 ? this.length - 1 : this.idx - 1;else this.idx = this.idx == 0 ? this.idx : this.idx - 1;
	            this.scrollTo(this.idx);
	        },
	        next: function next() {
	            if (!!this.options.loop) this.idx = this.idx == this.length ? 0 : this.idx + 1;else this.idx = this.idx == this.pageCount - 1 ? this.idx : this.idx + 1;
	            this.scrollTo(this.idx);
	        },
	        scrollTo: function scrollTo(idx) {
	            this.animating = true;
	            this.idx = idx;
	            var initPos = this.translateX;
	            var targetPos = -this.wrapperWidth / this.options.perSliders * Math.floor(this.options.perSliders) * idx;
	            var deltaX = Math.floor(targetPos - initPos);
	            if (!this.options.loop && this.idx == self.pageCount - 1 && this.pageCount > 1) {
	                this.translateX = -this.listWidth + this.wrapperWidth;
	            } else this.translateX += deltaX;
	            if (Math.abs(this.translateX - targetPos) <= 5) this.translateX = targetPos;
	            this.$dispatch('scrollTo', idx);
	        }
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	    proxy: function proxy(cb, scope) {
	        return function () {
	            cb.apply(scope, arguments);
	        };
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(13)
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] ../src/swiper/swiper.base.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/zhaoye/workspace/self/github/vue-swiper/src/swiper/swiper.base.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.base.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.base.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".swiper-container {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container .swiper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n}\n.swiper-container .swiper .slider {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  position: relative;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(11);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            startPosX: 0,

	            endPosX: 0,

	            lastPosX: 0,

	            curPosX: 0,

	            deltaX: 0,

	            lastPosY: 0,

	            curPosY: 0,

	            deltaY: 0,

	            easing: true,

	            animating: false,

	            translateX: 0,

	            firstFrame: true,

	            isCanScroll: false,

	            disableScreenScroll: false,

	            wrapperWidth: 0,

	            scrollEvent: function () {
	                var event = document.createEvent('HTMLEvents');
	                event.initEvent('scroll');
	                event.eventType = 'message';
	                return event;
	            }()
	        };
	    },
	    created: function created() {
	        this.disableScreenScrollOnManipulating();

	        var defaultOptions = {
	            loop: false,
	            direction: 'horizontal',
	            perSliders: 1,
	            perGroup: 1,
	            autoPlay: false,
	            pagination: true,
	            'height': 'auto'
	        };
	        this.options = this.options || defaultOptions;

	        for (var key in defaultOptions) {
	            if (!this.options[key]) {
	                this.options[key] = defaultOptions[key];
	            }
	        }
	    },
	    compiled: function compiled() {
	        var _renderFrame = function () {
	            window.dispatchEvent(this.scrollEvent);
	            if (this.animating) window.requestAnimationFrame(_renderFrame);
	        }.bind(this);
	        this.$watch('animating', function (animating) {
	            if (!!this.animating) window.requestAnimationFrame(_renderFrame);
	        });
	        this.$el.addEventListener('webkitTransitionEnd', _utils2.default.proxy(function () {
	            this.transitionEnd();
	        }, this));
	        this.$el.addEventListener('mozTransitionEnd', _utils2.default.proxy(function () {
	            this.transitionEnd();
	        }, this));
	    },
	    ready: function ready() {
	        this.wrapperWidth = this.options.wrapperWidth || this.$el.offsetWidth;
	        this.$broadcast('resize', this.wrapperWidth, this.pageCount, this.options.height);
	        window.addEventListener('resize', _utils2.default.proxy(function () {
	            this.$broadcast('resize', this.wrapperWidth, this.pageCount, this.options.height);
	        }, this));
	    },
	    methods: {
	        disableScreenScrollOnManipulating: function disableScreenScrollOnManipulating() {
	            window.addEventListener('scroll', _utils2.default.proxy(function (e) {
	                if (this.disableScreenScroll) e.preventDefault();
	            }, this));
	            document.addEventListener('touchmove', function (e) {
	                if (this.disableScreenScroll) e.preventDefault();
	            });
	        },
	        touchStart: function touchStart(e) {
	            if (this.animating) {
	                this.transitionEnd();
	            }
	            this.firstFrame = true;
	            this.animating = false;
	            this.deltaX = 0;
	            this.easing = false;

	            this.curPosX = e.touches[0].pageX;
	            this.lastPosX = this.curPosX;
	            this.startPosX = this.curPosX;

	            this.curPosY = e.touches[0].pageY;
	            this.lastPosY = this.curPosY;
	            this.$emit('touchStart', e);
	        },
	        touchEnd: function touchEnd(e) {
	            this.disableScreenScroll = false;
	            this.easing = true;

	            this.$emit('touchEnd', e);
	        },
	        touchMove: function touchMove(e) {
	            if (this.list.length <= 1) return;

	            this.animating = false;
	            this.easing = false;

	            this.curPosX = e.touches[0].pageX;
	            this.deltaX = this.curPosX - this.lastPosX;
	            this.lastPosX = this.curPosX;

	            this.curPosY = e.touches[0].pageY;
	            this.deltaY = this.curPosY - this.lastPosY;
	            this.lastPosY = this.curPosY;

	            if (this.firstFrame) {
	                if (!this.deltaX || !this.deltaY) {
	                    e.preventDefault();
	                }

	                if (Math.abs(this.deltaX) * 0.5 > Math.abs(this.deltaY)) {
	                    e.preventDefault();
	                    this.isCanScroll = true;
	                    this.disableScreenScroll = true;
	                } else {
	                    this.isCanScroll = false;
	                    this.disableScreenScroll = false;
	                }
	            }

	            if (this.isCanScroll) {
	                if (this.translateX > 0) {
	                    this.translateX += this.deltaX / 2;
	                } else if (this.translateX < -(this.listWidth - this.wrapperWidth)) {
	                    this.translateX += this.deltaX / 2;
	                } else {
	                    this.translateX += this.deltaX;
	                }
	                this.endPosX = this.curPosX;
	            }
	            this.$emit('touchMove', e);

	            this.firstFrame = false;
	        },
	        transitionEnd: function transitionEnd(e) {
	            this.$emit('transitionEnd', e);

	            var event = document.createEvent('HTMLEvents');
	            event.initEvent('scrollEnd');
	            event.eventType = 'message';
	            window.dispatchEvent(event);
	        }
	    }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div class='swiper-container'\n    @touchstart='touchStart'\n    @touchmove='touchMove'\n    @touchEnd='touchEnd'\n    @transitionEnd='transitionEnd'\n    >\n    <div class='swiper'\n        v-bind:style= '[transform,transition]'>\n            <slot name='slider'\n            </slot>\n    </div>\n    <slot name=\"pagination\"></slot>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] ../src/swiper/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/zhaoye/workspace/self/github/vue-swiper/src/swiper/slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./slider.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./slider.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    props: ['index', 'content', 'options', 'height'],
	    data: function data() {
	        return {
	            pos: 0,
	            otherStyle: {
	                'width': '1px',
	                'left': '0'
	            }
	        };
	    },
	    created: function created() {
	        var defaultOptions = {
	            loop: false,
	            direction: 'horizontal',
	            perSliders: 1,
	            perGroup: 1,
	            autoPlay: false,
	            pagination: true,
	            'height': 'auto'
	        };
	        this.options = this.options || defaultOptions;

	        for (var key in defaultOptions) {
	            if (!this.options[key]) {
	                this.options[key] = defaultOptions[key];
	            }
	        }
	    },
	    events: {
	        resize: function resize(width) {
	            this.otherStyle.width = width / this.options.perSliders + 'px';
	            if (!!this.options.loop) this.otherStyle.left = -width + 'px';
	        }
	    }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div class='slider' v-bind:style='[otherStyle]'>\n    <slot></slot>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] ../src/swiper/scroller.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/zhaoye/workspace/self/github/vue-swiper/src/swiper/scroller.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(11);

	var _utils2 = _interopRequireDefault(_utils);

	var _swiperBase = __webpack_require__(12);

	var _swiperBase2 = _interopRequireDefault(_swiperBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_swiperBase2.default],
	    props: ['list', 'options'],
	    data: function data() {
	        return {
	            frameCnt: 0,
	            lastDeltaList: [],
	            listWidth: 0,
	            scrolling: false
	        };
	    },
	    computed: {
	        transform: function transform() {
	            return {
	                'transform': 'translate3d(' + this.translateX + 'px, 0,0)',
	                '-webkit-transform': 'translate3d(' + this.translateX + 'px,0,0)',
	                '-moz-transform': 'translate3d(' + this.translateX + 'px,0,0)'
	            };
	        },
	        transition: function transition() {
	            if (this.easing) {
	                return {
	                    'transition': 'transform .5s ',
	                    '-webkit-transition': '-webkit-transform .5s',
	                    '-moz-transition': '-moz-transform .5s'
	                };
	            } else {
	                return {
	                    'transition': 'transform 0s',
	                    '-webkit-transition': '-webkit-transform 0s',
	                    '-moz-transition': '-moz-transform 0s'
	                };
	            }
	        }
	    },
	    methods: {
	        computeTransLimit: function computeTransLimit() {
	            var children = this.$el.querySelector('.swiper').children;
	            this.listWidth = 0;
	            for (var i = 0; i < children.length; i++) {
	                this.listWidth += children[i].offsetWidth;
	            }
	            this.listWidth -= this.wrapperWidth;
	        }
	    },
	    events: {
	        touchStart: function touchStart(e) {
	            this.computeTransLimit();
	        },
	        touchMove: function touchMove(e) {
	            if (this.lastDeltaList.length == 5) this.lastDeltaList.shift();
	            this.lastDeltaList.push(this.deltaX);
	        },
	        touchEnd: function touchEnd(e) {
	            var sum = 0;
	            this.lastDeltaList.forEach(function (delta) {
	                sum += delta;
	            });

	            var average = sum / this.lastDeltaList.length;

	            if (average && Math.abs(average) > 5) this.translateX += average * 20;
	            if (this.translateX > 0) this.translateX = 0;
	            if (this.translateX < -1 * this.listWidth) this.translateX = -1 * this.listWidth;
	            this.lastDeltaList = [];
	        },
	        transitionEnd: function transitionEnd() {}
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] ../src/pagination/pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/zhaoye/workspace/self/github/vue-swiper/src/pagination/pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pagination.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".swiper-container .pagination {\n  display: block;\n  width: 100%;\n  position: absolute;\n  z-index: 999;\n  bottom: 0;\n  height: 15px;\n  font-size: 0;\n  text-align: center;\n}\n.swiper-container .pagination li {\n  font-size: 10px;\n  line-height: 15px;\n  display: inline-block;\n  margin: 0 5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n.swiper-container .pagination li.active {\n  background-color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _page = __webpack_require__(28);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    props: [],
	    data: function data() {
	        return {
	            pageCount: 0,
	            rem: 0
	        };
	    },
	    components: {
	        page: _page2.default
	    },
	    computed: {
	        circle: function circle() {
	            if (this.$el.className.match(/cubic/)) {
	                return {};
	            }
	            return {
	                'width': parseInt(.11 * this.rem) + 'px',
	                'height': parseInt(.11 * this.rem) + 'px'
	            };
	        }
	    },
	    created: function created() {
	        this.rem = parseInt(document.querySelector('html').style.fontSize);
	        if (this.index == 0) {
	            this.isActive = true;
	        }
	    },
	    events: {
	        resize: function resize(width, pageCount) {
	            this.rem = parseInt(document.querySelector('html').style.fontSize);
	            this.pageCount = pageCount;
	        },
	        idxChange: function idxChange(idx) {
	            var _idx = idx;
	            if (idx == this.pageCount) _idx = 0;else if (idx == -1) _idx = this.pageCount - 1;
	            this.$broadcast('idxChange', _idx);
	        }
	    }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] ../src/pagination/page.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/zhaoye/workspace/self/github/vue-swiper/src/pagination/page.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    props: ['index', 'isActive'],
	    data: function data() {
	        return {};
	    },
	    created: function created() {
	        if (this.index == 0) {
	            this.isActive = true;
	        }
	    },
	    events: {
	        idxChange: function idxChange(idx) {
	            if (this.index == idx) {
	                this.isActive = true;
	            } else {
	                this.isActive = false;
	            }
	        }
	    }
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<li v-bind:class='{active: isActive}'></li>\n";

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<ul class='pagination'>\n    <page\n    v-for='item in pageCount'\n    track-by=\"$index\"\n    v-bind:index='$index'\n    v-bind:style='[circle]'></page>\n</ul>\n";

/***/ }
/******/ ])
});
;