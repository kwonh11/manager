/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","react.bundle","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: UserContext, LogoutContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutContext", function() { return LogoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/Nav */ "./src/nav/Nav.js");
/* harmony import */ var _board_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/Board */ "./src/board/Board.js");
/* harmony import */ var _management_Management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management/Management */ "./src/management/Management.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/Home */ "./src/home/Home.js");
/* harmony import */ var _src_footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/footer/Footer */ "./src/footer/Footer.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









 // 컨텍스트 목록

var UserContext = React.createContext();
var LogoutContext = React.createContext();
function App() {
  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      profile = _React$useState2[0],
      setProfile = _React$useState2[1];

  var _qs$parse = qs__WEBPACK_IMPORTED_MODULE_7___default.a.parse(window.location.hash.substr(1)),
      id_token = _qs$parse.id_token;

  var localToken = localStorage.getItem('token');
  React.useEffect(function () {
    if (id_token) {
      localStorage.setItem('token', id_token);
      window.location.href = window.location.origin;
    } else if (localToken) {
      var _jwtDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_8___default()(localToken),
          sub = _jwtDecode.sub,
          name = _jwtDecode.name,
          email = _jwtDecode.email,
          picture = _jwtDecode.picture; // user 확인하기 db에 저장된 id가 없다면 최초 로그인 event발생
      // 새로운 유저 데이터 생성 


      setProfile({
        id: sub,
        name: name,
        email: email,
        picture: picture
      });
    }
  }, [id_token, localToken]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: profile
  }, "          ", /*#__PURE__*/React.createElement(LogoutContext.Provider, {
    value: setProfile
  }, "   ", /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CssBaseline"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], null, /*#__PURE__*/React.createElement(_nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    exact: true,
    path: "/",
    component: _home_Home__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/board",
    component: _board_Board__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/management",
    component: _management_Management__WEBPACK_IMPORTED_MODULE_3__["default"]
  }))), /*#__PURE__*/React.createElement(_src_footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/background/arrow.png":
/*!**********************************!*\
  !*** ./src/background/arrow.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "arrow.d08328f62d19b66f8ea8d6d006724c8b.png");

/***/ }),

/***/ "./src/background/wood2.jpg":
/*!**********************************!*\
  !*** ./src/background/wood2.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "wood2.dc3dfeb18edf546f7718cbd7d5c09741.jpg");

/***/ }),

/***/ "./src/board/Board.js":
/*!****************************!*\
  !*** ./src/board/Board.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

function Board() {
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    fixed: true
  }, /*#__PURE__*/React.createElement("div", null, "Board"));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/buttonImage/googleSignin.png":
/*!******************************************!*\
  !*** ./src/buttonImage/googleSignin.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "googleSignin.1ce1aaa5a127fa3e492a12bb62f99304.png");

/***/ }),

/***/ "./src/footer/Footer.js":
/*!******************************!*\
  !*** ./src/footer/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyFooter; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _background_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../background/arrow.png */ "./src/background/arrow.png");








function Copyright() {
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    color: "textSecondary"
  }, 'Copyright © ', /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    color: "inherit",
    href: "#"
  }, "Jack's Website"), ' ', new Date().getFullYear(), '.');
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '20vh',
      justifyContent: 'center'
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: theme.palette.grey[200],
      textAlign: "center"
    },
    arrow: {
      width: '12vw',
      height: '12vh',
      alignSelf: 'center',
      background: "no-repeat center/80% url(".concat(_background_arrow_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")"),
      marginBottom: '3vh',
      backgroundSize: 'contain'
    }
  };
});
function StickyFooter() {
  var classes = useStyles();

  var scrollToTop = function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  var transition = function transition(e) {
    e.target.style.cursor = 'pointer';
  };

  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.root
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
    title: "Move to Top",
    "aria-label": "move-to-top",
    placement: "top",
    enterDelay: 350,
    leaveDelay: 150
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.arrow,
    onClick: scrollToTop,
    onMouseOver: function onMouseOver(e) {
      return transition(e);
    }
  })), /*#__PURE__*/React.createElement("footer", {
    className: classes.footer
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    maxWidth: "sm"
  }, /*#__PURE__*/React.createElement(Copyright, null))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/Crossline.js":
/*!*******************************!*\
  !*** ./src/home/Crossline.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Crossline; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  var _root;

  return {
    root: (_root = {
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      height: '13vh',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgb(191,185,185)'
    }, _defineProperty(_root, "background", 'linear-gradient(160deg, rgba(191,185,185,1) 26%, rgba(47,135,166,1) 77%)'), _defineProperty(_root, "zIndex", 100), _defineProperty(_root, "margin", 'auto'), _defineProperty(_root, "opacity", 0.7), _root)
  };
});
function Crossline(_ref) {
  var children = _ref.children;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fade = _React$useState2[0],
      setFade = _React$useState2[1];

  var classes = useStyles();
  var domRef = React.useRef();
  React.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return setFade(entry.isIntersecting);
      });
    }, {
      // options
      rootMargin: '-50px 0px'
    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fade"], {
    "in": fade,
    timeout: {
      enter: 1000,
      exit: 800
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.root,
    boxShadow: 4,
    ref: domRef
  }, children));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/Home.js":
/*!**************************!*\
  !*** ./src/home/Home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Introduction */ "./src/home/Introduction.js");
/* harmony import */ var _Introduction2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Introduction2 */ "./src/home/Introduction2.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main */ "./src/home/Main.js");




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '350vh',
      justifyContent: 'center'
    }
  };
});
function Home() {
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(_Main__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_Introduction__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_Introduction2__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/Introduction.js":
/*!**********************************!*\
  !*** ./src/home/Introduction.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Introduction; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Crossline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Crossline */ "./src/home/Crossline.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignContent: 'center',
      height: '100vh',
      width: '90vw',
      marginTop: '-10vh',
      zIndex: 0
    },
    paper: {
      maxWidth: 850,
      minWidth: 350,
      width: '50vw',
      height: '70vh',
      margin: theme.spacing(4),
      flex: 2
    },
    text: {
      maxWidth: 650,
      minWidth: 225,
      width: '30vw',
      height: '50vh',
      flex: 1,
      alignSelf: 'center'
    }
  };
});
function Introduction() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      grow = _React$useState2[0],
      setGrow = _React$useState2[1];

  var classes = useStyles();
  var domRef = React.useRef();
  React.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return setGrow(entry.isIntersecting);
      });
    }, {
      // options
      rootMargin: '-70px 0px'
    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Crossline__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h2",
    style: {
      color: 'white',
      alignSelf: 'center'
    }
  }, " User's Guide ")), /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    ref: domRef
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 1000
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    elevation: 3,
    className: classes.paper
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 1200
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    elevation: 1,
    className: classes.text
  }))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/Introduction2.js":
/*!***********************************!*\
  !*** ./src/home/Introduction2.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Introduction; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row-reverse',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignContent: 'center',
      height: '100vh',
      width: '90vw',
      zIndex: 0
    },
    paper: {
      maxWidth: 850,
      minWidth: 350,
      width: '50vw',
      height: '70vh',
      margin: theme.spacing(4),
      flex: 2
    },
    text: {
      maxWidth: 650,
      minWidth: 225,
      width: '30vw',
      height: '50vh',
      flex: 1,
      alignSelf: 'center'
    }
  };
});
function Introduction() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      grow = _React$useState2[0],
      setGrow = _React$useState2[1];

  var classes = useStyles();
  var domRef = React.useRef();
  React.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return setGrow(entry.isIntersecting);
      });
    }, {
      // options
      rootMargin: '-70px 0px'
    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    ref: domRef
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 1000
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    elevation: 3,
    className: classes.paper
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 1200
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    elevation: 1,
    className: classes.text
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/Main.js":
/*!**************************!*\
  !*** ./src/home/Main.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _background_wood2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../background/wood2.jpg */ "./src/background/wood2.jpg");
/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StartButton */ "./src/home/StartButton.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      height: '100vh',
      width: '100%',
      backgroundImage: "url(".concat(_background_wood2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
    }
  };
});
function Main() {
  var classes = useStyles();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fade = _React$useState2[0],
      setFade = _React$useState2[1];

  var isFirstRef = React.useRef(true);
  var domRef = React.useRef();
  React.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return setFade(entry.isIntersecting);
      });
      if (isFirstRef.current) isFirstRef.current = false;
    }, {
      // options
      rootMargin: '-350px 0px'
    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fade"], {
    "in": fade,
    timeout: {
      enter: 1300,
      exit: 800
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.root,
    ref: domRef
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    color: "textSecondary"
  }, isFirstRef.current ? 'WELCOME!!' : 'Ready to start?'), isFirstRef.current ? null : /*#__PURE__*/React.createElement(_StartButton__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/StartButton.js":
/*!*********************************!*\
  !*** ./src/home/StartButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    button: {
      width: 'fit-content',
      marginBottom: '0.5vh'
    },
    text: _objectSpread(_objectSpread({}, theme.typography.button), {}, {
      backgroundColor: 'inherit',
      textShadow: '0.5px 0.5px 1px #0000005c'
    }),
    innerBox: {
      marginTop: '1vh'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var classes = useStyle();
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.innerBox
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/management",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    size: "large",
    variant: "outlined",
    startIcon: /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["PlayArrowOutlined"], {
      color: "primary",
      style: {
        fontSize: 30
      }
    }),
    className: classes.button
  }, "GET STARTED")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.text
  }, "\uC9C0\uAE08 \uBC14\uB85C \uC2DC\uC791\uD574\uBCF4\uC138\uC694."));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");


react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/React.createElement(_app_js__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('root'));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/management/Management.js":
/*!**************************************!*\
  !*** ./src/management/Management.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManagementTable; });
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _ManualDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ManualDialog */ "./src/management/ManualDialog.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ "./src/management/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // useEffect로 data, columns 가 변경될 때마다 서버에 저장 후 갱신
// ./util 경로에 로직 작성
// 통신에 대한 testcode작성
// columns와 data의 각 값들에 대한 무결성 체크
// propsType 작성
// SideMenuList => Login으로 변경, 비로그인 시 LOGIN으로 보일 것, 로그인시 MY MENU로 보기

function ManagementTable() {
  var _React$useState = React.useState({
    open: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      snack = _React$useState2[0],
      setSnack = _React$useState2[1];

  var _React$useState3 = React.useState({
    open: false
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      dialog = _React$useState4[0],
      setDialog = _React$useState4[1];

  React.useEffect(function () {
    // 최초렌더링시 도움말 Snack 출력
    setTimeout(function () {
      setSnack({
        open: true
      });
    }, 400);
  }, []);
  React.useEffect(function () {
    // window 더블클릭 이벤트 추가, 도움말 open
    var ondbClick = function ondbClick() {
      return setDialog({
        open: !dialog.open
      });
    };

    window.addEventListener('dblclick', ondbClick);
    return function () {
      window.removeEventListener('dblclick', ondbClick);
    };
  }, []);

  var _React$useState5 = React.useState({
    // 최초 API로 받아오는 동작필요
    columns: [{
      title: 'Name',
      field: 'name',
      grouping: false
    }, {
      title: 'Surname',
      field: 'surname'
    }, {
      title: 'Birth Year',
      field: 'birthYear'
    }, {
      title: 'Phone',
      field: 'phone',
      grouping: false
    }, {
      title: 'Gender',
      field: 'gender',
      lookup: {
        1: 'Male',
        2: 'Female'
      }
    }, {
      title: 'Memo',
      field: 'memo'
    }],
    data: [{
      name: 'Mehmet',
      surname: 'Baran',
      birthYear: 1983,
      phone: '01046509995',
      gender: 1,
      memo: ''
    }, {
      name: 'Adam',
      surname: 'Adam',
      birthYear: 1984,
      phone: '01046509795',
      gender: 2,
      memo: ''
    }, {
      name: 'Mehmet',
      surname: 'Atom',
      birthYear: 1985,
      phone: '01046509695',
      gender: 1,
      memo: ''
    }, {
      name: 'mul',
      surname: 'Kongna',
      birthYear: 1986,
      phone: '01046509195',
      gender: 1,
      memo: ''
    }, {
      name: 'Jack',
      surname: 'Jack',
      birthYear: 1987,
      phone: '01046509295',
      gender: 2,
      memo: ''
    }, {
      name: 'Bob',
      surname: 'Bob',
      birthYear: 1988,
      phone: '01046509395',
      gender: 2,
      memo: ''
    }, {
      name: 'Mehmet',
      surname: 'Bill',
      birthYear: 1989,
      phone: '01046509495',
      gender: 1,
      memo: ''
    }, {
      name: 'Johnson',
      surname: 'Johnson',
      birthYear: 1990,
      phone: '01046509895',
      gender: 2,
      memo: ''
    }]
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      state = _React$useState6[0],
      setState = _React$useState6[1];

  var Margin = function Margin() {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        height: '100px'
      }
    });
  }; // 여백


  var handleClose = function handleClose(event, reason) {
    setSnack({
      open: false
    });
  };

  var handleDialogClose = function handleDialogClose() {
    setDialog({
      open: false
    });
  };

  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, /*#__PURE__*/React.createElement(_ManualDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: dialog.open,
    onClose: handleDialogClose
  }), /*#__PURE__*/React.createElement(Margin, null), /*#__PURE__*/React.createElement(material_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "Management App",
    columns: state.columns,
    data: state.data,
    localization: _options__WEBPACK_IMPORTED_MODULE_4__["localization"] // 로컬라이즈
    ,
    options: _options__WEBPACK_IMPORTED_MODULE_4__["options"] // 내보내기, 그루핑
    ,
    actions: [// 멀티 셀렉션 작업
    {
      tooltip: 'Remove All Selected Users',
      icon: 'delete',
      onClick: function onClick(e, deletions) {
        // 선택한 체크박스에 대해 모두 삭제 진행
        var data = _toConsumableArray(state.data);

        deletions.forEach(function (v) {
          data.splice(data.indexOf(v), 1);
        });
        setState(function (prevData) {
          return _objectSpread(_objectSpread({}, prevData), {}, {
            data: data
          });
        });
      }
    }],
    editable: {
      onRowAdd: function onRowAdd(newData) {
        return (// 추가
          new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
              setState(function (prevState) {
                var data = _toConsumableArray(prevState.data);

                data.push(newData);
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  data: data
                });
              });
            }, 600);
          })
        );
      },
      onRowUpdate: function onRowUpdate(newData, oldData) {
        return (// 수정
          new Promise(function (resolve) {
            setTimeout(function () {
              resolve();

              if (oldData) {
                setState(function (prevState) {
                  var data = _toConsumableArray(prevState.data);

                  data[data.indexOf(oldData)] = newData;
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    data: data
                  });
                });
              }
            }, 600);
          })
        );
      }
    }
  }), /*#__PURE__*/React.createElement(Margin, null), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"], {
    open: snack.open,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/React.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClose: handleClose,
    severity: "success",
    variant: "filled",
    message: {
      fontWeight: 'bolder',
      fontSize: '5rem'
    }
  }, "need some help? ? double-click any space !")));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/management/ManualDialog.js":
/*!****************************************!*\
  !*** ./src/management/ManualDialog.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManualDialog; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  icon: {
    width: '3vw';
  }
});
function ManualDialog(props) {
  var classes = useStyle();
  var open = props.open,
      onClose = props.onClose;
  var icons = [{
    icon: 'add_box',
    description: '[Add] rows.'
  }, {
    icon: 'create',
    description: '[Edit] records.'
  }, {
    icon: 'search',
    description: 'Type down words to [search].'
  }, {
    icon: 'save_alt',
    description: '[Download] files in CVS format.'
  }, {
    icon: 'view_week',
    description: '[Select] columns to be displayed'
  }, {
    icon: 'playlist_add_check',
    description: 'Follow the steps below to [delete] rows.'
  }, {
    icon: 'check_box',
    description: ' ① Select the checkbox on the row.'
  }, {
    icon: 'fact_check',
    description: ' ② Check the number of the rows selected.'
  }, {
    icon: 'delete',
    description: ' ③ Click the bin icon on the right above.'
  }];
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    onClose: onClose,
    open: open
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], null, " BASIC MANUAL "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], null, icons.map(function (icon, index) {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
      key: "".concat(icon, " + ").concat(index)
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      component: "span",
      className: "material-icons ".concat(classes.icon),
      style: {
        width: '3vw'
      }
    }, icon.icon), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
      primary: icon.description
    }));
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/management/options.js":
/*!***********************************!*\
  !*** ./src/management/options.js ***!
  \***********************************/
/*! exports provided: options, localization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return localization; });
// DATA TABLE OPTIONS
var options = {
  exportButton: true,
  grouping: true,
  selection: true,
  headerStyle: {
    fontWeight: 'bolder'
  },
  actionsColumnIndex: -1,
  // 액션 아이콘위치
  columnsButton: true,
  // 
  debounceInterval: 160,
  // 로딩시간
  pageSize: 20,
  // 페이지사이즈
  pageSizeOptions: [5, 10, 20, 50, 100] // 페이즈 사이즈 종류

};
var localization = {
  pagination: {
    labelDisplayedRows: '{count} rows | {from}-{to}'
  },
  toolbar: {
    nRowsSelected: '{0} row(s) selected'
  },
  header: {
    actions: 'Edit'
  },
  body: {
    emptyDataSourceMessage: 'No record to display.. Click the [+] button on the right-top'
  }
};

/***/ }),

/***/ "./src/nav/Nav.js":
/*!************************!*\
  !*** ./src/nav/Nav.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _util_HideOnSchroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/HideOnSchroll */ "./src/util/HideOnSchroll.js");
/* harmony import */ var _SideMenuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideMenuList */ "./src/nav/SideMenuList.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ "./src/app.js");
/* harmony import */ var _SignOutButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignOutButton */ "./src/nav/SignOutButton.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      alignItems: 'flex-start',
      paddingTop: 18,
      paddingBottom: 18
    },
    left: {
      flexGrow: 1,
      paddingLeft: 30,
      justify: 'flex-start'
    },
    center: {
      flexGrow: 1
    },
    right: {
      display: 'flex',
      paddingRight: 45,
      justify: 'flex-end',
      flexDirection: 'row',
      padding: "0 ".concat(theme.spacing(3))
    }
  };
});
function Nav(props) {
  var _React$useState = React.useState({
    menu: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var classes = useStyles();

  var toggleDrawer = function toggleDrawer(anchor, open) {
    return function (event) {
      setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, anchor, open)));
    };
  };

  var profile = React.useContext(_app__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  var anchor = profile ? 'MYPAGE' : 'LOGIN';
  var links = ['board', 'management'];
  var LogoutBtn = profile ? /*#__PURE__*/React.createElement(_SignOutButton__WEBPACK_IMPORTED_MODULE_6__["default"], null) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_HideOnSchroll__WEBPACK_IMPORTED_MODULE_3__["default"], props, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    color: "inherit",
    style: {
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    className: classes.root
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.left
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    to: "/",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, " Home ")), links.map(function (link) {
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/".concat(link),
      style: {
        textDecoration: 'none'
      },
      key: link
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "outlined"
    }, " ", link, " "));
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.center
  }, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.right
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    color: "primary",
    onClick: toggleDrawer(anchor, true),
    style: {
      marginRight: '5px'
    }
  }, anchor), LogoutBtn, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    open: state[anchor],
    onClose: toggleDrawer(anchor, false)
  }, Object(_SideMenuList__WEBPACK_IMPORTED_MODULE_4__["default"])(_objectSpread(_objectSpread({}, props), {}, {
    anchor: anchor,
    toggleDrawer: toggleDrawer,
    profile: profile
  }))))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null))))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/nav/SideMenuList.js":
/*!*********************************!*\
  !*** ./src/nav/SideMenuList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuList; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignInButton */ "./src/nav/SignInButton.js");
/* harmony import */ var _buttonImage_googleSignin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttonImage/googleSignin.png */ "./src/buttonImage/googleSignin.png");
/* harmony import */ var _util_googleAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/googleAuth */ "./src/util/googleAuth.js");





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    list: {
      width: '22vw',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    listItem: {
      width: '100%',
      height: '100%',
      padding: '1.3vh 1.5vw'
    },
    listItemText: {
      textAlign: 'center',
      color: '#838282',
      marginBottom: '30px'
    },
    largeAvatar: {
      width: theme.spacing(9),
      height: theme.spacing(9)
    },
    inline: {
      display: 'inline'
    },
    listText: {
      color: '#838282',
      textAlign: 'center'
    }
  };
});
function MenuList(_ref) {
  var anchor = _ref.anchor,
      toggleDrawer = _ref.toggleDrawer,
      profile = _ref.profile;
  var classes = useStyles();

  function handleOnClickLogin(loginUrl) {
    window.location.assign(loginUrl);
  }

  var isLogged = profile ? true : false;
  console.log("profile : ".concat(JSON.stringify(profile)));
  return /*#__PURE__*/React.createElement("div", {
    className: classes.list,
    role: "presentation",
    onClick: toggleDrawer(anchor, false),
    onKeyDown: toggleDrawer(anchor, false)
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
    primary: isLogged ? 'PROFILE' : 'LOGIN MENU',
    className: classes.listItemText
  }), isLogged ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    alignItems: "center",
    className: classes.listItem
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemAvatar"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: profile.picture,
    className: classes.largeAvatar,
    alt: profile.name
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
    primary: profile.name,
    className: classes.listText
  }), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    variant: "inset",
    component: "li"
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    className: classes.listItem,
    divider: true
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
    primary: "EMAIL : ",
    secondary: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
      component: "span",
      variant: "body2",
      color: "textPrimary",
      className: classes.inline
    }, profile.email))
  }))) : /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    button: true,
    className: classes.listItem,
    onClick: function onClick() {
      return handleOnClickLogin(_util_googleAuth__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
  }, /*#__PURE__*/React.createElement(_SignInButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    signIn: _buttonImage_googleSignin_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/nav/SignInButton.js":
/*!*********************************!*\
  !*** ./src/nav/SignInButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignInButton; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    button: {
      width: '100%',
      height: '100%'
    }
  };
});
function SignInButton(props) {
  var classes = useStyle();
  var signIn = props.signIn; // 이미지

  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    component: "span"
  }, /*#__PURE__*/React.createElement("img", {
    src: signIn,
    className: classes.button
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/nav/SignOutButton.js":
/*!**********************************!*\
  !*** ./src/nav/SignOutButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.js");




var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    logout: {
      justifyContent: 'flex-end',
      padding: '2px',
      margin: 0,
      width: 'auto'
    }
  };
});
var LightTooltip = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[2],
      fontSize: 14,
      fontWeight: 'bold'
    }
  };
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var classes = useStyle();
  var setProfile = React.useContext(_app__WEBPACK_IMPORTED_MODULE_2__["LogoutContext"]);

  var handleLogout = function handleLogout() {
    localStorage.removeItem('token');
    setProfile();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    className: classes.logout
  }, /*#__PURE__*/React.createElement(LightTooltip, {
    title: "Log-out"
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    style: {
      padding: 4
    },
    onClick: handleLogout
  }, /*#__PURE__*/React.createElement(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_0___default.a, null)))));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/util/HideOnSchroll.js":
/*!***********************************!*\
  !*** ./src/util/HideOnSchroll.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HideOnScroll; });
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");

 // GNB의 슬라이드기능

function HideOnScroll(props) {
  var children = props.children;
  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return /*#__PURE__*/React.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_1__["default"], {
    appear: false,
    direction: "down",
    "in": !trigger
  }, children);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/util/googleAuth.js":
/*!********************************!*\
  !*** ./src/util/googleAuth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
 // Google OpenID Connect 이용하기
// 참고 기술블로그 : https://www.daleseo.com/google-oidc/
// client ID : 1029543737304-qpf4g96mg3qchkgefigjt3rj5rkqmlog.apps.googleusercontent.com
// secret : pCh7oVceDNTSto_aX17xGJHa

var CLIENT_ID = '1029543737304-qpf4g96mg3qchkgefigjt3rj5rkqmlog.apps.googleusercontent.com';
var AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";
var querystr = qs__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({
  client_id: CLIENT_ID,
  redirect_uri: 'http://localhost:5000',
  response_type: 'token id_token',
  scope: 'openid profile email',
  // contact API를 읽기전용으로 호출
  nonce: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}); // URL export

/* harmony default export */ __webpack_exports__["default"] = (AUTHORIZE_URI + "?" + querystr);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvd29vZDIuanBnIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Dcm9zc2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL1N0YXJ0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbnVhbERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9IaWRlT25TY2hyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dvb2dsZUF1dGguanMiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvdXRDb250ZXh0IiwiQXBwIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInFzIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHIiLCJpZF90b2tlbiIsImxvY2FsVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsImhyZWYiLCJvcmlnaW4iLCJqd3REZWNvZGUiLCJzdWIiLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwiaWQiLCJIb21lIiwiQm9hcmQiLCJNYW5hZ2VtZW50IiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWluSGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJmb290ZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJncmV5IiwidGV4dEFsaWduIiwiYXJyb3ciLCJ3aWR0aCIsImhlaWdodCIsImFsaWduU2VsZiIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIlN0aWNreUZvb3RlciIsImNsYXNzZXMiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0cmFuc2l0aW9uIiwiZSIsInRhcmdldCIsInN0eWxlIiwiY3Vyc29yIiwibWFyZ2luIiwiZmxleFdyYXAiLCJhbGlnbkl0ZW1zIiwiQ3Jvc3NsaW5lIiwiY2hpbGRyZW4iLCJmYWRlIiwic2V0RmFkZSIsImRvbVJlZiIsInVzZVJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsImN1cnJlbnQiLCJ1bm9ic2VydmUiLCJlbnRlciIsImV4aXQiLCJhbGlnbkNvbnRlbnQiLCJ6SW5kZXgiLCJwYXBlciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJmbGV4IiwidGV4dCIsIkludHJvZHVjdGlvbiIsImdyb3ciLCJzZXRHcm93IiwiY29sb3IiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0aW1lb3V0IiwiYmFja2dyb3VuZEltYWdlIiwid29vZDIiLCJNYWluIiwiaXNGaXJzdFJlZiIsInVzZVN0eWxlIiwiYnV0dG9uIiwidHlwb2dyYXBoeSIsInRleHRTaGFkb3ciLCJpbm5lckJveCIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYW5hZ2VtZW50VGFibGUiLCJvcGVuIiwic25hY2siLCJzZXRTbmFjayIsImRpYWxvZyIsInNldERpYWxvZyIsInNldFRpbWVvdXQiLCJvbmRiQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbHVtbnMiLCJ0aXRsZSIsImZpZWxkIiwiZ3JvdXBpbmciLCJsb29rdXAiLCJkYXRhIiwic3VybmFtZSIsImJpcnRoWWVhciIsInBob25lIiwiZ2VuZGVyIiwibWVtbyIsInN0YXRlIiwic2V0U3RhdGUiLCJNYXJnaW4iLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwicmVhc29uIiwiaGFuZGxlRGlhbG9nQ2xvc2UiLCJsb2NhbGl6YXRpb24iLCJvcHRpb25zIiwidG9vbHRpcCIsImljb24iLCJvbkNsaWNrIiwiZGVsZXRpb25zIiwidiIsInNwbGljZSIsImluZGV4T2YiLCJwcmV2RGF0YSIsIm9uUm93QWRkIiwibmV3RGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJldlN0YXRlIiwicHVzaCIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImZvbnRXZWlnaHQiLCJNYW51YWxEaWFsb2ciLCJwcm9wcyIsIm9uQ2xvc2UiLCJpY29ucyIsImRlc2NyaXB0aW9uIiwibWFwIiwiaW5kZXgiLCJleHBvcnRCdXR0b24iLCJzZWxlY3Rpb24iLCJoZWFkZXJTdHlsZSIsImFjdGlvbnNDb2x1bW5JbmRleCIsImNvbHVtbnNCdXR0b24iLCJkZWJvdW5jZUludGVydmFsIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJwYWdpbmF0aW9uIiwibGFiZWxEaXNwbGF5ZWRSb3dzIiwidG9vbGJhciIsIm5Sb3dzU2VsZWN0ZWQiLCJoZWFkZXIiLCJhY3Rpb25zIiwiYm9keSIsImVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UiLCJmbGV4R3JvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibGVmdCIsInBhZGRpbmdMZWZ0IiwianVzdGlmeSIsImNlbnRlciIsInJpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiTmF2IiwibWVudSIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsInVzZUNvbnRleHQiLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3QiLCJsaXN0SXRlbSIsImxpc3RJdGVtVGV4dCIsImxhcmdlQXZhdGFyIiwiaW5saW5lIiwibGlzdFRleHQiLCJNZW51TGlzdCIsImhhbmRsZU9uQ2xpY2tMb2dpbiIsImxvZ2luVXJsIiwiYXNzaWduIiwiaXNMb2dnZWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImdvb2dsZVNpZ25pbiIsIlNpZ25JbkJ1dHRvbiIsInNpZ25JbiIsImxvZ291dCIsIkxpZ2h0VG9vbHRpcCIsIndpdGhTdHlsZXMiLCJjb21tb24iLCJ3aGl0ZSIsInNoYWRvd3MiLCJUb29sdGlwIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIkhpZGVPblNjcm9sbCIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiQ0xJRU5UX0lEIiwiQVVUSE9SSVpFX1VSSSIsInF1ZXJ5c3RyIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIiwicmVzcG9uc2VfdHlwZSIsInNjb3BlIiwibm9uY2UiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FB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bEI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsOENBQXRCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHek8seUNBQUUsQ0FBQ3VOLFNBQUgsQ0FBYTtBQUMxQm1CLFdBQVMsRUFBR0gsU0FEYztBQUUxQkksY0FBWSxFQUFHLHVCQUZXO0FBRzFCQyxlQUFhLEVBQUcsZ0JBSFU7QUFJMUJDLE9BQUssRUFBRyxzQkFKa0I7QUFJTTtBQUNoQ0MsT0FBSyxFQUNMQyxJQUFJLENBQUNDLE1BQUwsR0FDR0MsUUFESCxDQUNZLEVBRFosRUFFR0MsU0FGSCxDQUVhLENBRmIsRUFFZ0IsRUFGaEIsSUFHQUgsSUFBSSxDQUFDQyxNQUFMLEdBQ0dDLFFBREgsQ0FDWSxFQURaLEVBRUdDLFNBRkgsQ0FFYSxDQUZiLEVBRWdCLEVBRmhCO0FBVDBCLENBQWIsQ0FBakIsQyxDQWNBOztBQUNlViw0RUFBYSxHQUFHLEdBQWhCLEdBQXNCQyxRQUFyQyxFIiwiZmlsZSI6ImFwcC41YWU5YWI1OGY2Y2E3Zjc2NmM3Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2L05hdlwiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmQvQm9hcmRcIjtcclxuaW1wb3J0IE1hbmFnZW1lbnQgZnJvbSBcIi4vbWFuYWdlbWVudC9NYW5hZ2VtZW50XCI7XHJcbmltcG9ydCB7Q3NzQmFzZWxpbmV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZS9Ib21lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5cclxuLy8g7Luo7YWN7Iqk7Yq4IOuqqeuhnVxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvdXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3QgWyBwcm9maWxlICwgc2V0UHJvZmlsZSBdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHsgaWRfdG9rZW4gfSA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XHJcbiAgICBjb25zdCBsb2NhbFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJyAsIGlkX3Rva2VuKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxUb2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCB7c3ViICwgbmFtZSwgZW1haWwsIHBpY3R1cmV9ID0gand0RGVjb2RlKGxvY2FsVG9rZW4pO1xyXG4gICAgICAgICAgICAvLyB1c2VyIO2ZleyduO2VmOq4sCBkYuyXkCDsoIDsnqXrkJwgaWTqsIAg7JeG64uk66m0IOy1nOy0iCDroZzqt7jsnbggZXZlbnTrsJzsg51cclxuICAgICAgICAgICAgLy8g7IOI66Gc7Jq0IOycoOyggCDrjbDsnbTthLAg7IOd7ISxIFxyXG4gICAgICAgICAgICBzZXRQcm9maWxlKHtpZDpzdWIsbmFtZSxlbWFpbCxwaWN0dXJlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaWRfdG9rZW4gLCBsb2NhbFRva2VuXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9maWxlfT4gICAgICAgICAgey8qIOycoOyggCDtlITroZztlYQg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8TG9nb3V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UHJvZmlsZX0+ICAgey8qIOuhnOq3uOyVhOybgyDsnbTrsqTtirgg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17SG9tZX0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9ib2FyZCcgY29tcG9uZW50PXtCb2FyZH0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9tYW5hZ2VtZW50JyBjb21wb25lbnQ9e01hbmFnZW1lbnR9PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8L0xvZ291dENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhcnJvdy5kMDgzMjhmNjJkMTliNjZmOGVhOGQ2ZDAwNjcyNGM4Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid29vZDIuZGMzZGZlYjE4ZWRmNTQ2Zjc3MThjYmQ3ZDVjMDk3NDEuanBnXCI7IiwiaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBmaXhlZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBCb2FyZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZ29vZ2xlU2lnbmluLjFjZTFhYWE1YTEyN2ZhM2U0OTJhMTJiYjYyZjk5MzA0LnBuZ1wiOyIsImltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2JhY2tncm91bmQvYXJyb3cucG5nJztcclxuaW1wb3J0IHtCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICBKYWNrJ3MgV2Vic2l0ZVxyXG4gICAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgICAgeycuJ31cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBtaW5IZWlnaHQ6ICcyMHZoJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXHJcbiAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6dGhlbWUucGFsZXR0ZS5ncmV5WzIwMF0sXHJcbiAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICB3aWR0aCA6ICcxMnZ3JyxcclxuICAgICAgaGVpZ2h0IDogJzEydmgnLFxyXG4gICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgYmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICBtYXJnaW5Cb3R0b206JzN2aCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOidjb250YWluJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lGb290ZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJNb3ZlIHRvIFRvcFwiIGFyaWEtbGFiZWw9XCJtb3ZlLXRvLXRvcFwiIHBsYWNlbWVudD1cInRvcFwiIGVudGVyRGVsYXk9ezM1MH0gbGVhdmVEZWxheT17MTUwfT5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gb25Nb3VzZU92ZXI9eyhlKT0+dHJhbnNpdGlvbihlKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtGYWRlfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luOjAsXHJcbiAgICAgIHBhZGRpbmc6MCxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBoZWlnaHQgOiAnMTN2aCcsXHJcbiAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMTkxLDE4NSwxODUpJyxcclxuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMTkxLDE4NSwxODUsMSkgMjYlLCByZ2JhKDQ3LDEzNSwxNjYsMSkgNzclKScsXHJcbiAgICAgIHpJbmRleDoxMDAsXHJcbiAgICAgIG1hcmdpbjonYXV0bycsXHJcbiAgICAgIG9wYWNpdHk6MC43LFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9zc2xpbmUoe2NoaWxkcmVufSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy01MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MTAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBib3hTaGFkb3c9ezR9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSBcIi4vSW50cm9kdWN0aW9uXCI7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24yIGZyb20gXCIuL0ludHJvZHVjdGlvbjJcIjtcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGhlaWdodCA6ICczNTB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24vPlxyXG4gICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbjIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7R3Jvd30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ3Jvc3NsaW5lIGZyb20gJy4vQ3Jvc3NsaW5lJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgd2lkdGggOiAnOTB2dycsXHJcbiAgICAgICAgbWFyZ2luVG9wOictMTB2aCcsXHJcbiAgICAgICAgekluZGV4OjAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDg1MCxcclxuICAgICAgICBtaW5XaWR0aDogMzUwLFxyXG4gICAgICAgIHdpZHRoIDogJzUwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc3MHZoJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICAgIGZsZXggOiAyLFxyXG4gICAgfSxcclxuICAgIHRleHQgOiB7XHJcbiAgICAgICAgbWF4V2lkdGggOiA2NTAsXHJcbiAgICAgICAgbWluV2lkdGggOiAyMjUsXHJcbiAgICAgICAgd2lkdGggOiAnMzB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzUwdmgnLFxyXG4gICAgICAgIGZsZXggOiAxLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPENyb3NzbGluZT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgYWxpZ25TZWxmOidjZW50ZXInfX0+IFVzZXIncyBHdWlkZSA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Dcm9zc2xpbmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd30gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IDEwMDAgfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMjAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9ID48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dyb3d9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3ctcmV2ZXJzZScsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICc5MHZ3JyxcclxuICAgICAgICB6SW5kZXg6MCxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgbWF4V2lkdGg6IDg1MCxcclxuICAgICAgbWluV2lkdGg6IDM1MCxcclxuICAgICAgd2lkdGggOiAnNTB2dycsXHJcbiAgICAgIGhlaWdodCA6ICc3MHZoJyxcclxuICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgZmxleCA6IDIsXHJcbiAgfSxcclxuICB0ZXh0IDoge1xyXG4gICAgICBtYXhXaWR0aCA6IDY1MCxcclxuICAgICAgbWluV2lkdGggOiAyMjUsXHJcbiAgICAgIHdpZHRoIDogJzMwdncnLFxyXG4gICAgICBoZWlnaHQgOiAnNTB2aCcsXHJcbiAgICAgIGZsZXggOiAxLFxyXG4gICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9IFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcwIDAgMCcgfX1cclxuICAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMDAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMjAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHdvb2QyIGZyb20gXCIuLi9iYWNrZ3JvdW5kL3dvb2QyLmpwZ1wiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdGFydEJ1dHRvbiBmcm9tIFwiLi9TdGFydEJ1dHRvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke3dvb2QyfSlgLFxyXG4gICAgfSxcclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtmYWRlLHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNGaXJzdFJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRGYWRlKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgICAgICAgIGlmIChpc0ZpcnN0UmVmLmN1cnJlbnQpIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgICAgcm9vdE1hcmdpbiA6ICctMzUwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjEzMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0ndGV4dFNlY29uZGFyeSc+IFxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0ZpcnN0UmVmLmN1cnJlbnQgPyAnV0VMQ09NRSEhJyA6ICdSZWFkeSB0byBzdGFydD8nfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0ZpcnN0UmVmLmN1cnJlbnQ/IG51bGwgOiAoPFN0YXJ0QnV0dG9uLz4pfVxyXG4gICAgICAgICAgICAgICAgey8qICFpc0ZpcnN0UmVmIOydvCDsi5wg67CU66Gc6rCA6riwIOuyhO2KvCDstpTqsIAgKi99XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7QnV0dG9uICwgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFBsYXlBcnJvd091dGxpbmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICcwLjV2aCdcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcwLjVweCAwLjVweCAxcHggIzAwMDAwMDVjJyxcclxuICAgIH0sXHJcbiAgICBpbm5lckJveCA6IHtcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnMXZoJyxcclxuICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9tYW5hZ2VtZW50JyBzdHlsZT17e3RleHREZWNvcmF0aW9uOidub25lJ319PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgdmFyaWFudD0nb3V0bGluZWQnIHN0YXJ0SWNvbj17PFBsYXlBcnJvd091dGxpbmVkIGNvbG9yPSdwcmltYXJ5JyBzdHlsZT17e2ZvbnRTaXplIDogMzB9fS8+fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICBHRVQgU1RBUlRFRFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAge2Dsp4DquIgg67CU66GcIOyLnOyeke2VtOuztOyEuOyalC5gfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzJ1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnO1xyXG5pbXBvcnQge0JveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7U25hY2tiYXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgTWFudWFsRGlhbG9nIGZyb20gXCIuL01hbnVhbERpYWxvZ1wiO1xyXG5pbXBvcnQgeyBvcHRpb25zLGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL29wdGlvbnNcIjtcclxuXHJcbi8vIHVzZUVmZmVjdOuhnCBkYXRhLCBjb2x1bW5zIOqwgCDrs4Dqsr3rkKAg65WM66eI64ukIOyEnOuyhOyXkCDsoIDsnqUg7ZuEIOqwseyLoFxyXG4vLyAuL3V0aWwg6rK966Gc7JeQIOuhnOyngSDsnpHshLFcclxuLy8g7Ya17Iug7JeQIOuMgO2VnCB0ZXN0Y29kZeyekeyEsVxyXG4vLyBjb2x1bW5z7JmAIGRhdGHsnZgg6rCBIOqwkuuTpOyXkCDrjIDtlZwg66y06rKw7ISxIOyytO2BrFxyXG4vLyBwcm9wc1R5cGUg7J6R7ISxXHJcbi8vIFNpZGVNZW51TGlzdCA9PiBMb2dpbuycvOuhnCDrs4Dqsr0sIOu5hOuhnOq3uOyduCDsi5wgTE9HSU7snLzroZwg67O07J28IOqygywg66Gc6re47J247IucIE1ZIE1FTlXroZwg67O06riwXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlbWVudFRhYmxlKCkge1xyXG4gIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pXHJcbiAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PnsgLy8g7LWc7LSI66CM642U66eB7IucIOuPhOybgOunkCBTbmFjayDstpzroKVcclxuICAgIHNldFRpbWVvdXQoKCk9PntzZXRTbmFjayh7b3Blbjp0cnVlfSl9LDQwMCk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7ICAgLy8gd2luZG93IOuNlOu4lO2BtOumrSDsnbTrsqTtirgg7LaU6rCALCDrj4Tsm4Drp5Agb3BlblxyXG4gICAgY29uc3Qgb25kYkNsaWNrID0gKCkgPT4gc2V0RGlhbG9nKHtvcGVuIDogIWRpYWxvZy5vcGVufSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgfTtcclxufSwgW10pO1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHsgIC8vIOy1nOy0iCBBUEnroZwg67Cb7JWE7Jik64qUIOuPmeyeke2VhOyalFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICB7IHRpdGxlOiAnTmFtZScsIGZpZWxkOiAnbmFtZScgLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHsgdGl0bGU6ICdTdXJuYW1lJywgZmllbGQ6ICdzdXJuYW1lJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnQmlydGggWWVhcicsIGZpZWxkOiAnYmlydGhZZWFyJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnUGhvbmUnICwgZmllbGQ6J3Bob25lJywgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgICAgIGZpZWxkOiAnZ2VuZGVyJyxcclxuICAgICAgICBsb29rdXA6IHsgMTogJ01hbGUnLCAyOiAnRmVtYWxlJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdNZW1vJyAsIGZpZWxkOidtZW1vJ31cclxuICAgIF0sXHJcbiAgICBkYXRhOiBbXHJcbiAgICAgIHsgbmFtZTogJ01laG1ldCcsIHN1cm5hbWU6ICdCYXJhbicsIGJpcnRoWWVhcjogMTk4MywgcGhvbmU6JzAxMDQ2NTA5OTk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0FkYW0nLCBzdXJuYW1lOiAnQWRhbScsIGJpcnRoWWVhcjogMTk4NCwgcGhvbmU6JzAxMDQ2NTA5Nzk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ01laG1ldCcsIHN1cm5hbWU6ICdBdG9tJywgYmlydGhZZWFyOiAxOTg1LCBwaG9uZTonMDEwNDY1MDk2OTUnICxnZW5kZXI6IDEgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnbXVsJywgc3VybmFtZTogJ0tvbmduYScsIGJpcnRoWWVhcjogMTk4NiwgcGhvbmU6JzAxMDQ2NTA5MTk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0phY2snLCBzdXJuYW1lOiAnSmFjaycsIGJpcnRoWWVhcjogMTk4NywgcGhvbmU6JzAxMDQ2NTA5Mjk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0JvYicsIHN1cm5hbWU6ICdCb2InLCBiaXJ0aFllYXI6IDE5ODgsIHBob25lOicwMTA0NjUwOTM5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdNZWhtZXQnLCBzdXJuYW1lOiAnQmlsbCcsIGJpcnRoWWVhcjogMTk4OSwgcGhvbmU6JzAxMDQ2NTA5NDk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0pvaG5zb24nLCBzdXJuYW1lOiAnSm9obnNvbicsIGJpcnRoWWVhcjogMTk5MCwgcGhvbmU6JzAxMDQ2NTA5ODk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IE1hcmdpbiA9ICgpID0+ICg8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDBweCd9fT48L0JveD4pOyAgLy8g7Jes67CxXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG4gICAgc2V0U25hY2soe29wZW46IGZhbHNlIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXREaWFsb2coe29wZW4gOiBmYWxzZX0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgICAgPE1hbnVhbERpYWxvZyBvcGVuPXtkaWFsb2cub3Blbn0gb25DbG9zZT17aGFuZGxlRGlhbG9nQ2xvc2V9Lz5cclxuICAgIDxNYXJnaW4vPlxyXG4gICAgPE1hdGVyaWFsVGFibGVcclxuICAgICAgdGl0bGU9XCJNYW5hZ2VtZW50IEFwcFwiXHJcbiAgICAgIGNvbHVtbnM9e3N0YXRlLmNvbHVtbnN9XHJcbiAgICAgIGRhdGE9e3N0YXRlLmRhdGF9XHJcbiAgICAgIGxvY2FsaXphdGlvbj17bG9jYWxpemF0aW9ufSAvLyDroZzsu6zrnbzsnbTspohcclxuICAgICAgb3B0aW9ucz17b3B0aW9uc30gLy8g64K067O064K06riwLCDqt7jro6jtlZFcclxuICAgICAgYWN0aW9ucz17Wy8vIOupgO2LsCDshYDroInshZgg7J6R7JeFXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b29sdGlwIDogJ1JlbW92ZSBBbGwgU2VsZWN0ZWQgVXNlcnMnLFxyXG4gICAgICAgICAgICBpY29uIDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgIG9uQ2xpY2sgOiAoZSAsIGRlbGV0aW9ucykgPT4geyAgLy8g7ISg7YOd7ZWcIOyytO2BrOuwleyKpOyXkCDrjIDtlbQg66qo65GQIOyCreygnCDsp4TtlolcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4uc3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkZWxldGlvbnMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoZGF0YS5pbmRleE9mKHYpLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldkRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2RGF0YSAsIGRhdGF9O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF19IFxyXG4gICAgICBlZGl0YWJsZT17e1xyXG4gICAgICAgIG9uUm93QWRkOiAobmV3RGF0YSkgPT4gIC8vIOy2lOqwgFxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBvblJvd1VwZGF0ZTogKG5ld0RhdGEsIG9sZERhdGEpID0+ICAvLyDsiJjsoJVcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICBpZiAob2xkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgICAgZGF0YVtkYXRhLmluZGV4T2Yob2xkRGF0YSldID0gbmV3RGF0YTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxTbmFja2JhclxyXG4gICAgb3Blbj17c25hY2sub3Blbn1cclxuICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidjZW50ZXInIH19XHJcbiAgICA+XHJcbiAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT1cInN1Y2Nlc3NcIiB2YXJpYW50PSdmaWxsZWQnIG1lc3NhZ2U9e3tmb250V2VpZ2h0Oidib2xkZXInLCBmb250U2l6ZTonNXJlbSd9fT5cclxuICAgICAgICAgICAgbmVlZCBzb21lIGhlbHA/ID8gZG91YmxlLWNsaWNrIGFueSBzcGFjZSAhXHJcbiAgICAgICAgPC9BbGVydD5cclxuICAgIDwvU25hY2tiYXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59IiwiXHJcbmltcG9ydCB7RGlhbG9nLFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBMaXN0LFxyXG4gICAgTGlzdEl0ZW0sXHJcbiAgICBMaXN0SXRlbVRleHQsXHJcbiAgICBCb3gsXHJcbiAgICBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+IHtcclxuICAgIGljb24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnM3Z3J1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW51YWxEaWFsb2cgKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtvcGVuLCBvbkNsb3NlfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaWNvbnMgPSBbXHJcbiAgICAgICAge2ljb24gOiAnYWRkX2JveCcgLCBkZXNjcmlwdGlvbiA6ICdbQWRkXSByb3dzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2NyZWF0ZScgLCBkZXNjcmlwdGlvbiA6ICdbRWRpdF0gcmVjb3Jkcy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzZWFyY2gnICwgZGVzY3JpcHRpb24gOiAnVHlwZSBkb3duIHdvcmRzIHRvIFtzZWFyY2hdLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NhdmVfYWx0JyAsIGRlc2NyaXB0aW9uIDogJ1tEb3dubG9hZF0gZmlsZXMgaW4gQ1ZTIGZvcm1hdC4nfSxcclxuICAgICAgICB7aWNvbiA6ICd2aWV3X3dlZWsnICwgZGVzY3JpcHRpb24gOiAnW1NlbGVjdF0gY29sdW1ucyB0byBiZSBkaXNwbGF5ZWQnfSxcclxuICAgICAgICB7aWNvbiA6ICdwbGF5bGlzdF9hZGRfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBbZGVsZXRlXSByb3dzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2NoZWNrX2JveCcgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIFNlbGVjdCB0aGUgY2hlY2tib3ggb24gdGhlIHJvdy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdmYWN0X2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2hlY2sgdGhlIG51bWJlciBvZiB0aGUgcm93cyBzZWxlY3RlZC4nfSxcclxuICAgICAgICB7aWNvbiA6ICdkZWxldGUnICwgZGVzY3JpcHRpb24gOiAnIOKRoiBDbGljayB0aGUgYmluIGljb24gb24gdGhlIHJpZ2h0IGFib3ZlLid9LFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8RGlhbG9nIG9uQ2xvc2U9e29uQ2xvc2V9IG9wZW49e29wZW59PlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZT4gQkFTSUMgTUFOVUFMIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGljb25zLm1hcCgoaWNvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2Ake2ljb259ICsgJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2BtYXRlcmlhbC1pY29ucyAke2NsYXNzZXMuaWNvbn1gfSBzdHlsZT17e3dpZHRoOiczdncnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2ljb24uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgICApXHJcbn0iLCJcclxuLy8gREFUQSBUQUJMRSBPUFRJT05TXHJcblxyXG4gZXhwb3J0IGNvbnN0IG9wdGlvbnM9IHtcclxuICAgIGV4cG9ydEJ1dHRvbjogdHJ1ZSxcclxuICAgIGdyb3VwaW5nOnRydWUsXHJcbiAgICBzZWxlY3Rpb246dHJ1ZSxcclxuICAgIGhlYWRlclN0eWxlOnsgXHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zQ29sdW1uSW5kZXg6LTEsICAvLyDslaHshZgg7JWE7J207L2Y7JyE7LmYXHJcbiAgICBjb2x1bW5zQnV0dG9uIDogdHJ1ZSwgICAvLyBcclxuICAgIGRlYm91bmNlSW50ZXJ2YWwgOiAxNjAsIC8vIOuhnOuUqeyLnOqwhFxyXG4gICAgcGFnZVNpemUgOiAyMCwgICAgICAgICAgLy8g7Y6Y7J207KeA7IKs7J207KaIXHJcbiAgICBwYWdlU2l6ZU9wdGlvbnMgOiBbNSwgMTAsIDIwLCA1MCwgMTAwXSwgLy8g7Y6Y7J207KaIIOyCrOydtOymiCDsooXrpZhcclxuICB9XHJcbiBleHBvcnQgY29uc3QgbG9jYWxpemF0aW9uID0ge1xyXG4gICAgcGFnaW5hdGlvbiA6IHsgbGFiZWxEaXNwbGF5ZWRSb3dzIDogJ3tjb3VudH0gcm93cyB8IHtmcm9tfS17dG99JyAsIH0sXHJcbiAgICB0b29sYmFyOiB7blJvd3NTZWxlY3RlZDogJ3swfSByb3cocykgc2VsZWN0ZWQnfSxcclxuICAgIGhlYWRlcjoge2FjdGlvbnM6ICdFZGl0J30sXHJcbiAgICBib2R5OiB7ZW1wdHlEYXRhU291cmNlTWVzc2FnZTogJ05vIHJlY29yZCB0byBkaXNwbGF5Li4gQ2xpY2sgdGhlIFsrXSBidXR0b24gb24gdGhlIHJpZ2h0LXRvcCcsfVxyXG4gIH1cclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7RHJhd2VyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7R3JpZH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0RpdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge0FwcEJhciBhcyBBcHBiYXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtUb29sYmFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBIaWRlT25TY2hyb2xsIGZyb20gXCIuLi91dGlsL0hpZGVPblNjaHJvbGxcIjtcclxuaW1wb3J0IFNpZGVNZW51TGlzdCBmcm9tIFwiLi9TaWRlTWVudUxpc3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBTaWduT3V0QnV0dG9uIGZyb20gXCIuL1NpZ25PdXRCdXR0b25cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6MTgsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbToxOCxcclxuICAgIH0sXHJcbiAgICBsZWZ0IDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OjMwLFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgY2VudGVyIDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OjQ1LFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtZW5kJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgcGFkZGluZzpgMCAke3RoZW1lLnNwYWNpbmcoMyl9YFxyXG4gICAgfVxyXG4gIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2IChwcm9wcykge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVudSA6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yLCBvcGVuKSA9PiAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogb3BlbiB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwcm9maWxlID0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBhbmNob3IgPSBwcm9maWxlID8gJ01ZUEFHRScgOiAnTE9HSU4nO1xyXG4gICAgY29uc3QgbGlua3MgPSBbJ2JvYXJkJywnbWFuYWdlbWVudCddO1xyXG4gICAgY29uc3QgTG9nb3V0QnRuID0gcHJvZmlsZT8gPFNpZ25PdXRCdXR0b24vPiA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhpZGVPblNjaHJvbGwgey4uLnByb3BzfT5cclxuICAgICAgICA8QXBwYmFyIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2JveFNoYWRvdzonbm9uZSd9fT5cclxuICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4gSG9tZSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke2xpbmt9YH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319IGtleT17bGlua30+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IHtsaW5rfSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50ZXJ9PjxzcGFuPjwvc3Bhbj48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIHRydWUpfSBzdHlsZT17e21hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthbmNob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge0xvZ291dEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyIG9wZW49e3N0YXRlW2FuY2hvcl19IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtTaWRlTWVudUxpc3QoIHsuLi5wcm9wcywgYW5jaG9yICx0b2dnbGVEcmF3ZXIgLCBwcm9maWxlfSApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcGJhcj5cclxuICAgICAgICA8L0hpZGVPblNjaHJvbGw+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtVGV4dCwgTGlzdEl0ZW1BdmF0YXIgLCBEaXZpZGVyLCBMaXN0SXRlbSwgVHlwb2dyYXBoeSAsIEF2YXRhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgU2lnbkluQnV0dG9uIGZyb20gJy4vU2lnbkluQnV0dG9uJztcclxuaW1wb3J0IGdvb2dsZVNpZ25pbiBmcm9tICcuLi9idXR0b25JbWFnZS9nb29nbGVTaWduaW4ucG5nJztcclxuaW1wb3J0IGxvZ2luVXJsIGZyb20gJy4uL3V0aWwvZ29vZ2xlQXV0aCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBsaXN0IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzIydncnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbSA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZyA6ICcxLjN2aCAxLjV2dydcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbVRleHQgOiB7XHJcbiAgICAgICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIGxhcmdlQXZhdGFyIDoge1xyXG4gICAgICAgIHdpZHRoIDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICBoZWlnaHQgOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgfSxcclxuICAgIGlubGluZSA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2lubGluZSdcclxuICAgIH0sXHJcbiAgICBsaXN0VGV4dCA6IHtcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVMaXN0ICh7YW5jaG9yICwgdG9nZ2xlRHJhd2VyLCBwcm9maWxlfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DbGlja0xvZ2luIChsb2dpblVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24obG9naW5VcmwpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXNMb2dnZWQgPSBwcm9maWxlPyB0cnVlIDogZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZyhgcHJvZmlsZSA6ICR7SlNPTi5zdHJpbmdpZnkocHJvZmlsZSl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2lzTG9nZ2VkPyAnUFJPRklMRScgOiAnTE9HSU4gTUVOVSd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcblxyXG4gICAgICAgICAgICB7aXNMb2dnZWQ/IFxyXG5cclxuICAgICAgICAgICAgKDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPSdjZW50ZXInIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17cHJvZmlsZS5waWN0dXJlfSBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2VBdmF0YXJ9IGFsdD17cHJvZmlsZS5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Byb2ZpbGUubmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RUZXh0fT48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdFTUFJTCA6ICcgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdzcGFuJyB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRQcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5lbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgKDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBvbkNsaWNrPXsoKT0+aGFuZGxlT25DbGlja0xvZ2luKGxvZ2luVXJsKX0+XHJcbiAgICAgICAgICAgICAgICA8U2lnbkluQnV0dG9uIHNpZ25Jbj17Z29vZ2xlU2lnbmlufS8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+KX1cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluQnV0dG9uIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7c2lnbklufSA9IHByb3BzOyAvLyDsnbTrr7jsp4BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3NpZ25Jbn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+PC9pbWc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwJztcclxuaW1wb3J0IHsgTGlzdEl0ZW0gLCBJY29uQnV0dG9uLCBUb29sdGlwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBMb2dvdXRDb250ZXh0IH0gZnJvbSAnLi4vYXBwJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbG9nb3V0IDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6IDAsXHJcbiAgICAgICAgd2lkdGggOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGQnXHJcbiAgICB9LFxyXG4gIH0pKShUb29sdGlwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qgc2V0UHJvZmlsZSA9IFJlYWN0LnVzZUNvbnRleHQoTG9nb3V0Q29udGV4dCk7XHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgc2V0UHJvZmlsZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb3V0fT5cclxuICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9J0xvZy1vdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7cGFkZGluZzo0fX0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPiAgICBcclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuXHJcbi8vIEdOQuydmCDsiqzrnbzsnbTrk5zquLDriqVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9IGRpcmVjdGlvbj1cImRvd25cIiBpbj17IXRyaWdnZXJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NsaWRlPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgcXMgZnJvbSAncXMnXHJcbi8vIEdvb2dsZSBPcGVuSUQgQ29ubmVjdCDsnbTsmqntlZjquLBcclxuLy8g7LC46rOgIOq4sOyIoOu4lOuhnOq3uCA6IGh0dHBzOi8vd3d3LmRhbGVzZW8uY29tL2dvb2dsZS1vaWRjL1xyXG5cclxuLy8gY2xpZW50IElEIDogMTAyOTU0MzczNzMwNC1xcGY0Zzk2bWczcWNoa2dlZmlnanQzcmo1cmtxbWxvZy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVxyXG4vLyBzZWNyZXQgOiBwQ2g3b1ZjZUROVFN0b19hWDE3eEdKSGFcclxuY29uc3QgQ0xJRU5UX0lEID0gJzEwMjk1NDM3MzczMDQtcXBmNGc5Nm1nM3FjaGtnZWZpZ2p0M3JqNXJrcW1sb2cuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5jb25zdCBBVVRIT1JJWkVfVVJJID0gXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aFwiO1xyXG5jb25zdCBxdWVyeXN0ciA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICBjbGllbnRfaWQgOiBDTElFTlRfSUQsXHJcbiAgICByZWRpcmVjdF91cmkgOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyxcclxuICAgIHJlc3BvbnNlX3R5cGUgOiAndG9rZW4gaWRfdG9rZW4nLFxyXG4gICAgc2NvcGUgOiAnb3BlbmlkIHByb2ZpbGUgZW1haWwnLCAvLyBjb250YWN0IEFQSeulvCDsnb3quLDsoITsmqnsnLzroZwg7Zi47LacXHJcbiAgICBub25jZTpcclxuICAgIE1hdGgucmFuZG9tKClcclxuICAgICAgLnRvU3RyaW5nKDM2KVxyXG4gICAgICAuc3Vic3RyaW5nKDIsIDE1KSArXHJcbiAgICBNYXRoLnJhbmRvbSgpXHJcbiAgICAgIC50b1N0cmluZygzNilcclxuICAgICAgLnN1YnN0cmluZygyLCAxNSksXHJcbn0pXHJcblxyXG4vLyBVUkwgZXhwb3J0XHJcbmV4cG9ydCBkZWZhdWx0IEFVVEhPUklaRV9VUkkgKyBcIj9cIiArIHF1ZXJ5c3RyO1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==