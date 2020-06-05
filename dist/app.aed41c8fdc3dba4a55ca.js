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
/* harmony import */ var _util_redirectWithToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/redirectWithToken */ "./src/util/redirectWithToken.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);
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

  var _qs$parse = qs__WEBPACK_IMPORTED_MODULE_8___default.a.parse(window.location.hash.substr(1)),
      id_token = _qs$parse.id_token;

  console.log("id_token : ".concat(id_token));
  React.useEffect(function () {
    if (id_token) {
      console.log('operate');
      Object(_util_redirectWithToken__WEBPACK_IMPORTED_MODULE_7__["default"])(id_token).then(function (data) {
        // setprofile 로직
        console.log(data);
      })["catch"](function (err) {
        console.log("error occured : ".concat(err));
      }); // localStorage.setItem('token' , id_token);
      // window.location.href = window.location.origin;
    } // else if (localToken) {
    //     const {sub , name, email, picture} = jwtDecode(localToken);
    //     console.log(jwtDecode(localToken));
    //     // user 확인하기 db에 저장된 id가 없다면 최초 로그인 event발생
    //     // 새로운 유저 데이터 생성 
    //     setProfile({id:sub,name,email,picture});
    // }

  }, [id_token]);
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
    Object(_util_googleAuth__WEBPACK_IMPORTED_MODULE_4__["default"])();
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _serverURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serverURL */ "./src/util/serverURL.js");


 // Google OpenID Connect 이용하기
// 참고 기술블로그 : https://www.daleseo.com/google-oidc/
// client ID : 1029543737304-qpf4g96mg3qchkgefigjt3rj5rkqmlog.apps.googleusercontent.com
// secret : pCh7oVceDNTSto_aX17xGJHa
// const CLIENT_ID = '1029543737304-qpf4g96mg3qchkgefigjt3rj5rkqmlog.apps.googleusercontent.com';
// const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";
// const querystr = qs.stringify({
//     client_id : CLIENT_ID,
//     redirect_uri : 'http://localhost:5000',
//     response_type : 'token id_token',
//     scope : 'openid profile email', // contact API를 읽기전용으로 호출
//     nonce:
//     Math.random()
//       .toString(36)
//       .substring(2, 15) +
//     Math.random()
//       .toString(36)
//       .substring(2, 15),
// })
// URL export
// sever에서 받은 url로 리다이렉트

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_2__["default"], "/login")).then(function (res) {
    return location.assign(res.data);
  });
});

/***/ }),

/***/ "./src/util/redirectWithToken.js":
/*!***************************************!*\
  !*** ./src/util/redirectWithToken.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serverURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverURL */ "./src/util/serverURL.js");


/* harmony default export */ __webpack_exports__["default"] = (function (token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/auth"), {
    token: token
  }).then(function (data) {
    return Promise.resolve(data.data);
  });
});

/***/ }),

/***/ "./src/util/serverURL.js":
/*!*******************************!*\
  !*** ./src/util/serverURL.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("http://localhost:3000");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvd29vZDIuanBnIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Dcm9zc2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL1N0YXJ0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbnVhbERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9IaWRlT25TY2hyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dvb2dsZUF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcmVkaXJlY3RXaXRoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc2VydmVyVVJMLmpzIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTG9nb3V0Q29udGV4dCIsIkFwcCIsInVzZVN0YXRlIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJxcyIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwiaWRfdG9rZW4iLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwicmVkaXJlY3RXaXRoVG9rZW4iLCJ0aGVuIiwiZGF0YSIsImVyciIsIkhvbWUiLCJCb2FyZCIsIk1hbmFnZW1lbnQiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImZvb3RlciIsInBhZGRpbmciLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJ0ZXh0QWxpZ24iLCJhcnJvdyIsIndpZHRoIiwiaGVpZ2h0IiwiYWxpZ25TZWxmIiwiYmFja2dyb3VuZCIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRTaXplIiwiU3RpY2t5Rm9vdGVyIiwiY2xhc3NlcyIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInRyYW5zaXRpb24iLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjdXJzb3IiLCJtYXJnaW4iLCJmbGV4V3JhcCIsImFsaWduSXRlbXMiLCJDcm9zc2xpbmUiLCJjaGlsZHJlbiIsImZhZGUiLCJzZXRGYWRlIiwiZG9tUmVmIiwidXNlUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwiY3VycmVudCIsInVub2JzZXJ2ZSIsImVudGVyIiwiZXhpdCIsImFsaWduQ29udGVudCIsInpJbmRleCIsInBhcGVyIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImZsZXgiLCJ0ZXh0IiwiSW50cm9kdWN0aW9uIiwiZ3JvdyIsInNldEdyb3ciLCJjb2xvciIsInRyYW5zZm9ybU9yaWdpbiIsInRpbWVvdXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ3b29kMiIsIk1haW4iLCJpc0ZpcnN0UmVmIiwidXNlU3R5bGUiLCJidXR0b24iLCJ0eXBvZ3JhcGh5IiwidGV4dFNoYWRvdyIsImlubmVyQm94IiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1hbmFnZW1lbnRUYWJsZSIsIm9wZW4iLCJzbmFjayIsInNldFNuYWNrIiwiZGlhbG9nIiwic2V0RGlhbG9nIiwic2V0VGltZW91dCIsIm9uZGJDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJncm91cGluZyIsImxvb2t1cCIsIm5hbWUiLCJzdXJuYW1lIiwiYmlydGhZZWFyIiwicGhvbmUiLCJnZW5kZXIiLCJtZW1vIiwic3RhdGUiLCJzZXRTdGF0ZSIsIk1hcmdpbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJoYW5kbGVEaWFsb2dDbG9zZSIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJ2Iiwic3BsaWNlIiwiaW5kZXhPZiIsInByZXZEYXRhIiwib25Sb3dBZGQiLCJuZXdEYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcmV2U3RhdGUiLCJwdXNoIiwib25Sb3dVcGRhdGUiLCJvbGREYXRhIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiZm9udFdlaWdodCIsIk1hbnVhbERpYWxvZyIsInByb3BzIiwib25DbG9zZSIsImljb25zIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpbmRleCIsImV4cG9ydEJ1dHRvbiIsInNlbGVjdGlvbiIsImhlYWRlclN0eWxlIiwiYWN0aW9uc0NvbHVtbkluZGV4IiwiY29sdW1uc0J1dHRvbiIsImRlYm91bmNlSW50ZXJ2YWwiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsInBhZ2luYXRpb24iLCJsYWJlbERpc3BsYXllZFJvd3MiLCJ0b29sYmFyIiwiblJvd3NTZWxlY3RlZCIsImhlYWRlciIsImFjdGlvbnMiLCJib2R5IiwiZW1wdHlEYXRhU291cmNlTWVzc2FnZSIsImZsZXhHcm93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsZWZ0IiwicGFkZGluZ0xlZnQiLCJqdXN0aWZ5IiwiY2VudGVyIiwicmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJOYXYiLCJtZW51IiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwidXNlQ29udGV4dCIsImxpbmtzIiwiTG9nb3V0QnRuIiwiYm94U2hhZG93IiwibGluayIsIm1hcmdpblJpZ2h0IiwiU2lkZU1lbnVMaXN0IiwibGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJpbmxpbmUiLCJsaXN0VGV4dCIsIk1lbnVMaXN0IiwiaGFuZGxlT25DbGlja0xvZ2luIiwibG9naW5VcmwiLCJnb29nbGVMb2dpbiIsImlzTG9nZ2VkIiwiSlNPTiIsInN0cmluZ2lmeSIsInBpY3R1cmUiLCJlbWFpbCIsImdvb2dsZVNpZ25pbkltYWdlIiwiU2lnbkluQnV0dG9uIiwic2lnbkluIiwibG9nb3V0IiwiTGlnaHRUb29sdGlwIiwid2l0aFN0eWxlcyIsImNvbW1vbiIsIndoaXRlIiwic2hhZG93cyIsIlRvb2x0aXAiLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiSGlkZU9uU2Nyb2xsIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJheGlvcyIsImdldCIsInNlcnZlclVSTCIsInJlcyIsImFzc2lnbiIsInRva2VuIiwicG9zdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtR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QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUseUVBQUMyTixLQUFELEVBQVM7QUFDcEIsU0FBT0wsNENBQUssQ0FBQ00sSUFBTixXQUFjSixrREFBZCxZQUErQjtBQUNsQ0csU0FBSyxFQUFMQTtBQURrQyxHQUEvQixFQUVKNU4sSUFGSSxDQUVDLFVBQUFDLElBQUk7QUFBQSxXQUFJbUksT0FBTyxDQUFDQyxPQUFSLENBQWdCcEksSUFBSSxDQUFDQSxJQUFyQixDQUFKO0FBQUEsR0FGTCxDQUFQO0FBR0gsQ0FKRCxFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFlLHNGQUFmLEUiLCJmaWxlIjoiYXBwLmFlZDQxYzhmZGMzZGJhNGE1NWNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJyZWFjdC5idW5kbGVcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXYvTmF2XCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZC9Cb2FyZFwiO1xyXG5pbXBvcnQgTWFuYWdlbWVudCBmcm9tIFwiLi9tYW5hZ2VtZW50L01hbmFnZW1lbnRcIjtcclxuaW1wb3J0IHtDc3NCYXNlbGluZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lL0hvbWVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvZm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCByZWRpcmVjdFdpdGhUb2tlbiBmcm9tIFwiLi91dGlsL3JlZGlyZWN0V2l0aFRva2VuXCI7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcblxyXG4vLyDsu6jthY3siqTtirgg66qp66GdXHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IExvZ291dENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBbIHByb2ZpbGUgLCBzZXRQcm9maWxlIF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgeyBpZF90b2tlbiB9ID0gcXMucGFyc2Uod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcclxuICAgIGNvbnNvbGUubG9nKGBpZF90b2tlbiA6ICR7aWRfdG9rZW59YCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29wZXJhdGUnKVxyXG4gICAgICAgICAgICByZWRpcmVjdFdpdGhUb2tlbihpZF90b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHNldHByb2ZpbGUg66Gc7KeBXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBvY2N1cmVkIDogJHtlcnJ9YClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJyAsIGlkX3Rva2VuKTtcclxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLy8gZWxzZSBpZiAobG9jYWxUb2tlbikge1xyXG4gICAgICAgIC8vICAgICBjb25zdCB7c3ViICwgbmFtZSwgZW1haWwsIHBpY3R1cmV9ID0gand0RGVjb2RlKGxvY2FsVG9rZW4pO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhqd3REZWNvZGUobG9jYWxUb2tlbikpO1xyXG4gICAgICAgIC8vICAgICAvLyB1c2VyIO2ZleyduO2VmOq4sCBkYuyXkCDsoIDsnqXrkJwgaWTqsIAg7JeG64uk66m0IOy1nOy0iCDroZzqt7jsnbggZXZlbnTrsJzsg51cclxuICAgICAgICAvLyAgICAgLy8g7IOI66Gc7Jq0IOycoOyggCDrjbDsnbTthLAg7IOd7ISxIFxyXG4gICAgICAgIC8vICAgICBzZXRQcm9maWxlKHtpZDpzdWIsbmFtZSxlbWFpbCxwaWN0dXJlfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxbaWRfdG9rZW5dKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb2ZpbGV9PiAgICAgICAgICB7Lyog7Jyg7KCAIO2UhOuhnO2VhCDsu6jthY3siqTtirggICAgKi99XHJcbiAgICAgICAgICAgIDxMb2dvdXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRQcm9maWxlfT4gICB7Lyog66Gc6re47JWE7JuDIOydtOuypO2KuCDsu6jthY3siqTtirggICAqL31cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cclxuICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYm9hcmQnIGNvbXBvbmVudD17Qm9hcmR9PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbWFuYWdlbWVudCcgY29tcG9uZW50PXtNYW5hZ2VtZW50fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPC9Mb2dvdXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXJyb3cuZDA4MzI4ZjYyZDE5YjY2ZjhlYThkNmQwMDY3MjRjOGIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndvb2QyLmRjM2RmZWIxOGVkZjU0NmY3NzE4Y2JkN2Q1YzA5NzQxLmpwZ1wiOyIsImltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgZml4ZWQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgQm9hcmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZVNpZ25pbi4xY2UxYWFhNWExMjdmYTNlNDkyYTEyYmI2MmY5OTMwNC5wbmdcIjsiLCJpbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBMaW5rfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9iYWNrZ3JvdW5kL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgSmFjaydzIFdlYnNpdGVcclxuICAgICAgICA8L0xpbms+eycgJ31cclxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgIHsnLid9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWluSGVpZ2h0OiAnMjB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOnRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdLFxyXG4gICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgd2lkdGggOiAnMTJ2dycsXHJcbiAgICAgIGhlaWdodCA6ICcxMnZoJyxcclxuICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCxcclxuICAgICAgbWFyZ2luQm90dG9tOiczdmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTonY29udGFpbicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5Rm9vdGVyKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTW92ZSB0byBUb3BcIiBhcmlhLWxhYmVsPVwibW92ZS10by10b3BcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBlbnRlckRlbGF5PXszNTB9IGxlYXZlRGVsYXk9ezE1MH0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gb25DbGljaz17c2Nyb2xsVG9Ub3B9IG9uTW91c2VPdmVyPXsoZSk9PnRyYW5zaXRpb24oZSl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7RmFkZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIG1hcmdpbjowLFxyXG4gICAgICBwYWRkaW5nOjAsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgaGVpZ2h0IDogJzEzdmgnLFxyXG4gICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiKDE5MSwxODUsMTg1KScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDE5MSwxODUsMTg1LDEpIDI2JSwgcmdiYSg0NywxMzUsMTY2LDEpIDc3JSknLFxyXG4gICAgICB6SW5kZXg6MTAwLFxyXG4gICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgICBvcGFjaXR5OjAuNyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Jvc3NsaW5lKHtjaGlsZHJlbn0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjEwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYm94U2hhZG93PXs0fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gXCIuL0ludHJvZHVjdGlvblwiO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uMiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb24yXCI7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBoZWlnaHQgOiAnMzUwdmgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24yLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dyb3d9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENyb3NzbGluZSBmcm9tICcuL0Nyb3NzbGluZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjoncm93JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzkwdncnLFxyXG4gICAgICAgIG1hcmdpblRvcDonLTEwdmgnLFxyXG4gICAgICAgIHpJbmRleDowLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIG1heFdpZHRoOiA4NTAsXHJcbiAgICAgICAgbWluV2lkdGg6IDM1MCxcclxuICAgICAgICB3aWR0aCA6ICc1MHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnNzB2aCcsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgICBmbGV4IDogMixcclxuICAgIH0sXHJcbiAgICB0ZXh0IDoge1xyXG4gICAgICAgIG1heFdpZHRoIDogNjUwLFxyXG4gICAgICAgIG1pbldpZHRoIDogMjI1LFxyXG4gICAgICAgIHdpZHRoIDogJzMwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc1MHZoJyxcclxuICAgICAgICBmbGV4IDogMSxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTcwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxDcm9zc2xpbmU+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJyBzdHlsZT17e2NvbG9yOid3aGl0ZScsIGFsaWduU2VsZjonY2VudGVyJ319PiBVc2VyJ3MgR3VpZGUgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ3Jvc3NsaW5lPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9IFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcwIDAgMCcgfX1cclxuICAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMDAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ID48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDogMTIwMCB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fSA+PC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IFBhcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtHcm93fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjoncm93LXJldmVyc2UnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgd2lkdGggOiAnOTB2dycsXHJcbiAgICAgICAgekluZGV4OjAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgIG1heFdpZHRoOiA4NTAsXHJcbiAgICAgIG1pbldpZHRoOiAzNTAsXHJcbiAgICAgIHdpZHRoIDogJzUwdncnLFxyXG4gICAgICBoZWlnaHQgOiAnNzB2aCcsXHJcbiAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgIGZsZXggOiAyLFxyXG4gIH0sXHJcbiAgdGV4dCA6IHtcclxuICAgICAgbWF4V2lkdGggOiA2NTAsXHJcbiAgICAgIG1pbldpZHRoIDogMjI1LFxyXG4gICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgaGVpZ2h0IDogJzUwdmgnLFxyXG4gICAgICBmbGV4IDogMSxcclxuICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB9KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTcwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDogMTAwMCB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDogMTIwMCB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB3b29kMiBmcm9tIFwiLi4vYmFja2dyb3VuZC93b29kMi5qcGdcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSBcIi4vU3RhcnRCdXR0b25cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOmB1cmwoJHt3b29kMn0pYCxcclxuICAgIH0sXHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbZmFkZSxzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzRmlyc3RSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICAgICAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSBpc0ZpcnN0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTM1MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY29sb3I9J3RleHRTZWNvbmRhcnknPiBcclxuICAgICAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50ID8gJ1dFTENPTUUhIScgOiAnUmVhZHkgdG8gc3RhcnQ/J31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50PyBudWxsIDogKDxTdGFydEJ1dHRvbi8+KX1cclxuICAgICAgICAgICAgICAgIHsvKiAhaXNGaXJzdFJlZiDsnbwg7IucIOuwlOuhnOqwgOq4sCDrsoTtirwg7LaU6rCAICovfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0J1dHRvbiAsIEJveCwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBQbGF5QXJyb3dPdXRsaW5lZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMC41dmgnXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHRleHRTaGFkb3cgOiAnMC41cHggMC41cHggMXB4ICMwMDAwMDA1YycsXHJcbiAgICB9LFxyXG4gICAgaW5uZXJCb3ggOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzF2aCcsXHJcbiAgICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lckJveH0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScvbWFuYWdlbWVudCcgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjonbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIHZhcmlhbnQ9J291dGxpbmVkJyBzdGFydEljb249ezxQbGF5QXJyb3dPdXRsaW5lZCBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3tmb250U2l6ZSA6IDMwfX0vPn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURURcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIHtg7KeA6riIIOuwlOuhnCDsi5zsnpHtlbTrs7TshLjsmpQuYH1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qcydcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4gLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJztcclxuaW1wb3J0IHtCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge1NuYWNrYmFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuaW1wb3J0IE1hbnVhbERpYWxvZyBmcm9tIFwiLi9NYW51YWxEaWFsb2dcIjtcclxuaW1wb3J0IHsgb3B0aW9ucyxsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9vcHRpb25zXCI7XHJcblxyXG4vLyB1c2VFZmZlY3TroZwgZGF0YSwgY29sdW1ucyDqsIAg67OA6rK965CgIOuVjOuniOuLpCDshJzrsoTsl5Ag7KCA7J6lIO2bhCDqsLHsi6BcclxuLy8gLi91dGlsIOqyveuhnOyXkCDroZzsp4Eg7J6R7ISxXHJcbi8vIO2GteyLoOyXkCDrjIDtlZwgdGVzdGNvZGXsnpHshLFcclxuLy8gY29sdW1uc+yZgCBkYXRh7J2YIOqwgSDqsJLrk6Tsl5Ag64yA7ZWcIOustOqysOyEsSDssrTtgaxcclxuLy8gcHJvcHNUeXBlIOyekeyEsVxyXG4vLyBTaWRlTWVudUxpc3QgPT4gTG9naW7snLzroZwg67OA6rK9LCDruYTroZzqt7jsnbgg7IucIExPR0lO7Jy866GcIOuztOydvCDqsoMsIOuhnOq3uOyduOyLnCBNWSBNRU5V66GcIOuztOq4sFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnRUYWJsZSgpIHtcclxuICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KVxyXG4gIGNvbnN0IFtkaWFsb2csIHNldERpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57IC8vIOy1nOy0iOugjOuNlOungeyLnCDrj4Tsm4Drp5AgU25hY2sg7Lac66ClXHJcbiAgICBzZXRUaW1lb3V0KCgpPT57c2V0U25hY2soe29wZW46dHJ1ZX0pfSw0MDApO1xyXG4gIH0sW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyAgIC8vIHdpbmRvdyDrjZTruJTtgbTrpq0g7J2067Kk7Yq4IOy2lOqwgCwg64+E7JuA66eQIG9wZW5cclxuICAgIGNvbnN0IG9uZGJDbGljayA9ICgpID0+IHNldERpYWxvZyh7b3BlbiA6ICFkaWFsb2cub3Blbn0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gIH07XHJcbn0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7ICAvLyDstZzstIggQVBJ66GcIOuwm+yVhOyYpOuKlCDrj5nsnpHtlYTsmpRcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgeyB0aXRsZTogJ05hbWUnLCBmaWVsZDogJ25hbWUnICwgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7IHRpdGxlOiAnU3VybmFtZScsIGZpZWxkOiAnc3VybmFtZScgfSxcclxuICAgICAgeyB0aXRsZTogJ0JpcnRoIFllYXInLCBmaWVsZDogJ2JpcnRoWWVhcicgfSxcclxuICAgICAgeyB0aXRsZTogJ1Bob25lJyAsIGZpZWxkOidwaG9uZScsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnR2VuZGVyJyxcclxuICAgICAgICBmaWVsZDogJ2dlbmRlcicsXHJcbiAgICAgICAgbG9va3VwOiB7IDE6ICdNYWxlJywgMjogJ0ZlbWFsZScgfVxyXG4gICAgICB9LFxyXG4gICAgICB7IHRpdGxlOiAnTWVtbycgLCBmaWVsZDonbWVtbyd9XHJcbiAgICBdLFxyXG4gICAgZGF0YTogW1xyXG4gICAgICB7IG5hbWU6ICdNZWhtZXQnLCBzdXJuYW1lOiAnQmFyYW4nLCBiaXJ0aFllYXI6IDE5ODMsIHBob25lOicwMTA0NjUwOTk5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdBZGFtJywgc3VybmFtZTogJ0FkYW0nLCBiaXJ0aFllYXI6IDE5ODQsIHBob25lOicwMTA0NjUwOTc5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdNZWhtZXQnLCBzdXJuYW1lOiAnQXRvbScsIGJpcnRoWWVhcjogMTk4NSwgcGhvbmU6JzAxMDQ2NTA5Njk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ211bCcsIHN1cm5hbWU6ICdLb25nbmEnLCBiaXJ0aFllYXI6IDE5ODYsIHBob25lOicwMTA0NjUwOTE5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdKYWNrJywgc3VybmFtZTogJ0phY2snLCBiaXJ0aFllYXI6IDE5ODcsIHBob25lOicwMTA0NjUwOTI5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdCb2InLCBzdXJuYW1lOiAnQm9iJywgYmlydGhZZWFyOiAxOTg4LCBwaG9uZTonMDEwNDY1MDkzOTUnICxnZW5kZXI6IDIgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnTWVobWV0Jywgc3VybmFtZTogJ0JpbGwnLCBiaXJ0aFllYXI6IDE5ODksIHBob25lOicwMTA0NjUwOTQ5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdKb2huc29uJywgc3VybmFtZTogJ0pvaG5zb24nLCBiaXJ0aFllYXI6IDE5OTAsIHBob25lOicwMTA0NjUwOTg5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCBNYXJnaW4gPSAoKSA9PiAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0+PC9Cb3g+KTsgIC8vIOyXrOuwsVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcclxuICAgIHNldFNuYWNrKHtvcGVuOiBmYWxzZSB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0RGlhbG9nKHtvcGVuIDogZmFsc2V9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICAgIDxNYW51YWxEaWFsb2cgb3Blbj17ZGlhbG9nLm9wZW59IG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfS8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgIHRpdGxlPVwiTWFuYWdlbWVudCBBcHBcIlxyXG4gICAgICBjb2x1bW5zPXtzdGF0ZS5jb2x1bW5zfVxyXG4gICAgICBkYXRhPXtzdGF0ZS5kYXRhfVxyXG4gICAgICBsb2NhbGl6YXRpb249e2xvY2FsaXphdGlvbn0gLy8g66Gc7Lus65287J207KaIXHJcbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9IC8vIOuCtOuztOuCtOq4sCwg6re466Oo7ZWRXHJcbiAgICAgIGFjdGlvbnM9e1svLyDrqYDti7Ag7IWA66CJ7IWYIOyekeyXhVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdG9vbHRpcCA6ICdSZW1vdmUgQWxsIFNlbGVjdGVkIFVzZXJzJyxcclxuICAgICAgICAgICAgaWNvbiA6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICBvbkNsaWNrIDogKGUgLCBkZWxldGlvbnMpID0+IHsgIC8vIOyEoO2Dne2VnCDssrTtgazrsJXsiqTsl5Ag64yA7ZW0IOuqqOuRkCDsgq3soJwg7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZih2KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZEYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucHJldkRhdGEgLCBkYXRhfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdfSBcclxuICAgICAgZWRpdGFibGU9e3tcclxuICAgICAgICBvblJvd0FkZDogKG5ld0RhdGEpID0+ICAvLyDstpTqsIBcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgb25Sb3dVcGRhdGU6IChuZXdEYXRhLCBvbGREYXRhKSA9PiAgLy8g7IiY7KCVXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgaWYgKG9sZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICAgIGRhdGFbZGF0YS5pbmRleE9mKG9sZERhdGEpXSA9IG5ld0RhdGE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8U25hY2tiYXJcclxuICAgIG9wZW49e3NuYWNrLm9wZW59XHJcbiAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDondG9wJywgaG9yaXpvbnRhbDonY2VudGVyJyB9fVxyXG4gICAgPlxyXG4gICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9XCJzdWNjZXNzXCIgdmFyaWFudD0nZmlsbGVkJyBtZXNzYWdlPXt7Zm9udFdlaWdodDonYm9sZGVyJywgZm9udFNpemU6JzVyZW0nfX0+XHJcbiAgICAgICAgICAgIG5lZWQgc29tZSBoZWxwPyA/IGRvdWJsZS1jbGljayBhbnkgc3BhY2UgIVxyXG4gICAgICAgIDwvQWxlcnQ+XHJcbiAgICA8L1NuYWNrYmFyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufSIsIlxyXG5pbXBvcnQge0RpYWxvZyxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgQm94LFxyXG4gICAgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gICAgaWNvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICczdncnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbnVhbERpYWxvZyAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge29wZW4sIG9uQ2xvc2V9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpY29ucyA9IFtcclxuICAgICAgICB7aWNvbiA6ICdhZGRfYm94JyAsIGRlc2NyaXB0aW9uIDogJ1tBZGRdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJ1tFZGl0XSByZWNvcmRzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NlYXJjaCcgLCBkZXNjcmlwdGlvbiA6ICdUeXBlIGRvd24gd29yZHMgdG8gW3NlYXJjaF0uJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2F2ZV9hbHQnICwgZGVzY3JpcHRpb24gOiAnW0Rvd25sb2FkXSBmaWxlcyBpbiBDVlMgZm9ybWF0Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ3ZpZXdfd2VlaycgLCBkZXNjcmlwdGlvbiA6ICdbU2VsZWN0XSBjb2x1bW5zIHRvIGJlIGRpc3BsYXllZCd9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtkZWxldGVdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY2hlY2tfYm94JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgU2VsZWN0IHRoZSBjaGVja2JveCBvbiB0aGUgcm93Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ2ZhY3RfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDaGVjayB0aGUgbnVtYmVyIG9mIHRoZSByb3dzIHNlbGVjdGVkLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2RlbGV0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGiIENsaWNrIHRoZSBiaW4gaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUuJ30sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgb25DbG9zZT17b25DbG9zZX0gb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPiBCQVNJQyBNQU5VQUwgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbnMubWFwKChpY29uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17YCR7aWNvbn0gKyAke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17YG1hdGVyaWFsLWljb25zICR7Y2xhc3Nlcy5pY29ufWB9IHN0eWxlPXt7d2lkdGg6JzN2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aWNvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICA8L0RpYWxvZz5cclxuICAgIClcclxufSIsIlxyXG4vLyBEQVRBIFRBQkxFIE9QVElPTlNcclxuXHJcbiBleHBvcnQgY29uc3Qgb3B0aW9ucz0ge1xyXG4gICAgZXhwb3J0QnV0dG9uOiB0cnVlLFxyXG4gICAgZ3JvdXBpbmc6dHJ1ZSxcclxuICAgIHNlbGVjdGlvbjp0cnVlLFxyXG4gICAgaGVhZGVyU3R5bGU6eyBcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnNDb2x1bW5JbmRleDotMSwgIC8vIOyVoeyFmCDslYTsnbTsvZjsnITsuZhcclxuICAgIGNvbHVtbnNCdXR0b24gOiB0cnVlLCAgIC8vIFxyXG4gICAgZGVib3VuY2VJbnRlcnZhbCA6IDE2MCwgLy8g66Gc65Sp7Iuc6rCEXHJcbiAgICBwYWdlU2l6ZSA6IDIwLCAgICAgICAgICAvLyDtjpjsnbTsp4DsgqzsnbTspohcclxuICAgIHBhZ2VTaXplT3B0aW9ucyA6IFs1LCAxMCwgMjAsIDUwLCAxMDBdLCAvLyDtjpjsnbTspogg7IKs7J207KaIIOyiheulmFxyXG4gIH1cclxuIGV4cG9ydCBjb25zdCBsb2NhbGl6YXRpb24gPSB7XHJcbiAgICBwYWdpbmF0aW9uIDogeyBsYWJlbERpc3BsYXllZFJvd3MgOiAne2NvdW50fSByb3dzIHwge2Zyb219LXt0b30nICwgfSxcclxuICAgIHRvb2xiYXI6IHtuUm93c1NlbGVjdGVkOiAnezB9IHJvdyhzKSBzZWxlY3RlZCd9LFxyXG4gICAgaGVhZGVyOiB7YWN0aW9uczogJ0VkaXQnfSxcclxuICAgIGJvZHk6IHtlbXB0eURhdGFTb3VyY2VNZXNzYWdlOiAnTm8gcmVjb3JkIHRvIGRpc3BsYXkuLiBDbGljayB0aGUgWytdIGJ1dHRvbiBvbiB0aGUgcmlnaHQtdG9wJyx9XHJcbiAgfVxyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtEcmF3ZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtHcmlkfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7RGl2aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7QXBwQmFyIGFzIEFwcGJhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1Rvb2xiYXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhpZGVPblNjaHJvbGwgZnJvbSBcIi4uL3V0aWwvSGlkZU9uU2Nocm9sbFwiO1xyXG5pbXBvcnQgU2lkZU1lbnVMaXN0IGZyb20gXCIuL1NpZGVNZW51TGlzdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IFNpZ25PdXRCdXR0b24gZnJvbSBcIi4vU2lnbk91dEJ1dHRvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDoxOCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOjE4LFxyXG4gICAgfSxcclxuICAgIGxlZnQgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6MzAsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1zdGFydCdcclxuICAgIH0sXHJcbiAgICBjZW50ZXIgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgcmlnaHQgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6NDUsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1lbmQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nOmAwICR7dGhlbWUuc3BhY2luZygzKX1gXHJcbiAgICB9XHJcbiAgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYgKHByb3BzKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBtZW51IDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3IsIG9wZW4pID0+IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBvcGVuIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGFuY2hvciA9IHByb2ZpbGUgPyAnTVlQQUdFJyA6ICdMT0dJTic7XHJcbiAgICBjb25zdCBsaW5rcyA9IFsnYm9hcmQnLCdtYW5hZ2VtZW50J107XHJcbiAgICBjb25zdCBMb2dvdXRCdG4gPSBwcm9maWxlPyA8U2lnbk91dEJ1dHRvbi8+IDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGlkZU9uU2Nocm9sbCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxBcHBiYXIgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Ym94U2hhZG93Oidub25lJ319PlxyXG4gICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiBIb21lIDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7bGlua31gfSBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0ga2V5PXtsaW5rfT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4ge2xpbmt9IDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+PHNwYW4+PC9zcGFuPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FuY2hvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7TG9nb3V0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXIgb3Blbj17c3RhdGVbYW5jaG9yXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1NpZGVNZW51TGlzdCggey4uLnByb3BzLCBhbmNob3IgLHRvZ2dsZURyYXdlciAsIHByb2ZpbGV9ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwYmFyPlxyXG4gICAgICAgIDwvSGlkZU9uU2Nocm9sbD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUF2YXRhciAsIERpdmlkZXIsIExpc3RJdGVtLCBUeXBvZ3JhcGh5ICwgQXZhdGFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi9TaWduSW5CdXR0b24nO1xyXG5pbXBvcnQgZ29vZ2xlU2lnbmluSW1hZ2UgZnJvbSAnLi4vYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyc7XHJcbmltcG9ydCBnb29nbGVMb2dpbiBmcm9tICcuLi91dGlsL2dvb2dsZUF1dGgnO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxpc3QgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMjJ2dycsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nIDogJzEuM3ZoIDEuNXZ3J1xyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtVGV4dCA6IHtcclxuICAgICAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbGFyZ2VBdmF0YXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICB9LFxyXG4gICAgaW5saW5lIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnaW5saW5lJ1xyXG4gICAgfSxcclxuICAgIGxpc3RUZXh0IDoge1xyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUxpc3QgKHthbmNob3IgLCB0b2dnbGVEcmF3ZXIsIHByb2ZpbGV9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrTG9naW4gKGxvZ2luVXJsKSB7XHJcbiAgICAgICAgZ29vZ2xlTG9naW4oKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gcHJvZmlsZT8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coYHByb2ZpbGUgOiAke0pTT04uc3RyaW5naWZ5KHByb2ZpbGUpfWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpc0xvZ2dlZD8gJ1BST0ZJTEUnIDogJ0xPR0lOIE1FTlUnfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG5cclxuICAgICAgICAgICAge2lzTG9nZ2VkPyBcclxuXHJcbiAgICAgICAgICAgICg8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3Byb2ZpbGUucGljdHVyZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlQXZhdGFyfSBhbHQ9e3Byb2ZpbGUubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9maWxlLm5hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGV4dH0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nRU1BSUwgOiAnIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0nc3BhbicgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICg8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gb25DbGljaz17KCk9PmhhbmRsZU9uQ2xpY2tMb2dpbihnb29nbGVMb2dpbil9PlxyXG4gICAgICAgICAgICAgICAgPFNpZ25JbkJ1dHRvbiBzaWduSW49e2dvb2dsZVNpZ25pbkltYWdlfS8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+KX1cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluQnV0dG9uIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7c2lnbklufSA9IHByb3BzOyAvLyDsnbTrr7jsp4BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3NpZ25Jbn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+PC9pbWc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwJztcclxuaW1wb3J0IHsgTGlzdEl0ZW0gLCBJY29uQnV0dG9uLCBUb29sdGlwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBMb2dvdXRDb250ZXh0IH0gZnJvbSAnLi4vYXBwJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbG9nb3V0IDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6IDAsXHJcbiAgICAgICAgd2lkdGggOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGQnXHJcbiAgICB9LFxyXG4gIH0pKShUb29sdGlwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qgc2V0UHJvZmlsZSA9IFJlYWN0LnVzZUNvbnRleHQoTG9nb3V0Q29udGV4dCk7XHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgc2V0UHJvZmlsZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb3V0fT5cclxuICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9J0xvZy1vdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7cGFkZGluZzo0fX0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPiAgICBcclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuXHJcbi8vIEdOQuydmCDsiqzrnbzsnbTrk5zquLDriqVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9IGRpcmVjdGlvbj1cImRvd25cIiBpbj17IXRyaWdnZXJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NsaWRlPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgcXMgZnJvbSAncXMnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tIFwiLi9zZXJ2ZXJVUkxcIjtcclxuLy8gR29vZ2xlIE9wZW5JRCBDb25uZWN0IOydtOyaqe2VmOq4sFxyXG4vLyDssLjqs6Ag6riw7Iig67iU66Gc6re4IDogaHR0cHM6Ly93d3cuZGFsZXNlby5jb20vZ29vZ2xlLW9pZGMvXHJcblxyXG4vLyBjbGllbnQgSUQgOiAxMDI5NTQzNzM3MzA0LXFwZjRnOTZtZzNxY2hrZ2VmaWdqdDNyajVya3FtbG9nLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXHJcbi8vIHNlY3JldCA6IHBDaDdvVmNlRE5UU3RvX2FYMTd4R0pIYVxyXG4vLyBjb25zdCBDTElFTlRfSUQgPSAnMTAyOTU0MzczNzMwNC1xcGY0Zzk2bWczcWNoa2dlZmlnanQzcmo1cmtxbWxvZy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSc7XHJcbi8vIGNvbnN0IEFVVEhPUklaRV9VUkkgPSBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoXCI7XHJcbi8vIGNvbnN0IHF1ZXJ5c3RyID0gcXMuc3RyaW5naWZ5KHtcclxuLy8gICAgIGNsaWVudF9pZCA6IENMSUVOVF9JRCxcclxuLy8gICAgIHJlZGlyZWN0X3VyaSA6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnLFxyXG4vLyAgICAgcmVzcG9uc2VfdHlwZSA6ICd0b2tlbiBpZF90b2tlbicsXHJcbi8vICAgICBzY29wZSA6ICdvcGVuaWQgcHJvZmlsZSBlbWFpbCcsIC8vIGNvbnRhY3QgQVBJ66W8IOydveq4sOyghOyaqeycvOuhnCDtmLjstpxcclxuLy8gICAgIG5vbmNlOlxyXG4vLyAgICAgTWF0aC5yYW5kb20oKVxyXG4vLyAgICAgICAudG9TdHJpbmcoMzYpXHJcbi8vICAgICAgIC5zdWJzdHJpbmcoMiwgMTUpICtcclxuLy8gICAgIE1hdGgucmFuZG9tKClcclxuLy8gICAgICAgLnRvU3RyaW5nKDM2KVxyXG4vLyAgICAgICAuc3Vic3RyaW5nKDIsIDE1KSxcclxuLy8gfSlcclxuXHJcbi8vIFVSTCBleHBvcnRcclxuLy8gc2V2ZXLsl5DshJwg67Cb7J2AIHVybOuhnCDrpqzri6TsnbTroIntirhcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbG9naW5gKS50aGVuKHJlcyA9PiBsb2NhdGlvbi5hc3NpZ24ocmVzLmRhdGEpKTtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSAnLi9zZXJ2ZXJVUkwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHRva2VuKT0+eyBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vYXV0aGAse1xyXG4gICAgICAgIHRva2VuXHJcbiAgICB9KS50aGVuKGRhdGEgPT4gUHJvbWlzZS5yZXNvbHZlKGRhdGEuZGF0YSkpXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiOyJdLCJzb3VyY2VSb290IjoiIn0=