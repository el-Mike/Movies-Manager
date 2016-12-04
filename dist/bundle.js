/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Injector = __webpack_require__(1);
	
	var _Injector2 = _interopRequireDefault(_Injector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Tester = function () {
	  function Tester() {
	    _classCallCheck(this, Tester);
	  }
	
	  _createClass(Tester, [{
	    key: 'write',
	    value: function write() {
	      return 'Hello!';
	    }
	  }]);
	
	  return Tester;
	}();
	
	var DI = new _Injector2.default();
	
	DI.register('tester', new Tester());

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instance = null;
	
	var Injector = function () {
	  function Injector() {
	    _classCallCheck(this, Injector);
	
	    this.dependencies = [];
	
	    if (!instance) {
	      instance = this;
	    }
	
	    return instance;
	  }
	
	  _createClass(Injector, [{
	    key: 'register',
	    value: function register(key, value) {
	      this.dependencies[key] = value;
	    }
	  }, {
	    key: 'resolve',
	    value: function resolve(deps, fn, scope) {
	      var _this = this;
	
	      var args = [];
	
	      deps.forEach(function (dep) {
	        if (_this.dependencies[dep]) {
	          args.push(dep);
	        } else {
	          throw new Error('Can\'t resolve ' + dep);
	        }
	      });
	
	      return function () {
	        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	          rest[_key] = arguments[_key];
	        }
	
	        return fn.apply(scope || {}, args.concat(rest));
	      };
	    }
	  }]);
	
	  return Injector;
	}();
	
	exports.default = Injector;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map