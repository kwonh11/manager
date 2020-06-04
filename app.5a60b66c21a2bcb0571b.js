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
/*! exports provided: UserContext, LogoutContext, ProfileContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutContext", function() { return LogoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContext", function() { return ProfileContext; });
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
var ProfileContext = React.createContext();
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
          picture = _jwtDecode.picture;

      console.log(jwt_decode__WEBPACK_IMPORTED_MODULE_8___default()(localToken)); // user 확인하기 db에 저장된 id가 없다면 최초 로그인 event발생
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
  }, "   ", /*#__PURE__*/React.createElement(ProfileContext.Provider, {
    value: profile
  }, "     ", /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CssBaseline"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], null, /*#__PURE__*/React.createElement(_nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    exact: true,
    path: "/",
    component: _home_Home__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/board",
    component: _board_Board__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/management",
    component: _management_Management__WEBPACK_IMPORTED_MODULE_3__["default"]
  }))), /*#__PURE__*/React.createElement(_src_footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)))));
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
      height: '15vh',
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
      enter: 1500,
      exit: 1000
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
      maxWidth: 800,
      minWidth: 400,
      width: '50vw',
      height: '70vh',
      margin: theme.spacing(4),
      flex: 2
    },
    text: {
      maxWidth: 600,
      minWidth: 250,
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
      rootMargin: '-80px 0px'
    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Crossline__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.title
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h2",
    style: {
      color: 'white',
      alignSelf: 'center'
    }
  }, " User's Guide "))), /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    ref: domRef
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 2000
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    elevation: 3,
    className: classes.paper
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 2000
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
      maxWidth: 800,
      minWidth: 400,
      width: '50vw',
      height: '70vh',
      margin: theme.spacing(4),
      flex: 2
    },
    text: {
      maxWidth: 600,
      minWidth: 250,
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
      rootMargin: '-80px 0px'
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
    timeout: 2000
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    elevation: 3,
    className: classes.paper
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 2000
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvd29vZDIuanBnIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Dcm9zc2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL1N0YXJ0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbnVhbERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9IaWRlT25TY2hyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dvb2dsZUF1dGguanMiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvdXRDb250ZXh0IiwiUHJvZmlsZUNvbnRleHQiLCJBcHAiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwicXMiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0ciIsImlkX3Rva2VuIiwibG9jYWxUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VFZmZlY3QiLCJzZXRJdGVtIiwiaHJlZiIsIm9yaWdpbiIsImp3dERlY29kZSIsInN1YiIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJIb21lIiwiQm9hcmQiLCJNYW5hZ2VtZW50IiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWluSGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJmb290ZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJncmV5IiwidGV4dEFsaWduIiwiYXJyb3ciLCJ3aWR0aCIsImhlaWdodCIsImFsaWduU2VsZiIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIlN0aWNreUZvb3RlciIsImNsYXNzZXMiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0cmFuc2l0aW9uIiwiZSIsInRhcmdldCIsInN0eWxlIiwiY3Vyc29yIiwibWFyZ2luIiwiZmxleFdyYXAiLCJhbGlnbkl0ZW1zIiwiQ3Jvc3NsaW5lIiwiY2hpbGRyZW4iLCJmYWRlIiwic2V0RmFkZSIsImRvbVJlZiIsInVzZVJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsImN1cnJlbnQiLCJ1bm9ic2VydmUiLCJlbnRlciIsImV4aXQiLCJhbGlnbkNvbnRlbnQiLCJ6SW5kZXgiLCJwYXBlciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJmbGV4IiwidGV4dCIsIkludHJvZHVjdGlvbiIsImdyb3ciLCJzZXRHcm93IiwidGl0bGUiLCJjb2xvciIsInRyYW5zZm9ybU9yaWdpbiIsInRpbWVvdXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ3b29kMiIsIk1haW4iLCJpc0ZpcnN0UmVmIiwidXNlU3R5bGUiLCJidXR0b24iLCJ0eXBvZ3JhcGh5IiwidGV4dFNoYWRvdyIsImlubmVyQm94IiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1hbmFnZW1lbnRUYWJsZSIsIm9wZW4iLCJzbmFjayIsInNldFNuYWNrIiwiZGlhbG9nIiwic2V0RGlhbG9nIiwic2V0VGltZW91dCIsIm9uZGJDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29sdW1ucyIsImZpZWxkIiwiZ3JvdXBpbmciLCJsb29rdXAiLCJkYXRhIiwic3VybmFtZSIsImJpcnRoWWVhciIsInBob25lIiwiZ2VuZGVyIiwibWVtbyIsInN0YXRlIiwic2V0U3RhdGUiLCJNYXJnaW4iLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwicmVhc29uIiwiaGFuZGxlRGlhbG9nQ2xvc2UiLCJsb2NhbGl6YXRpb24iLCJvcHRpb25zIiwidG9vbHRpcCIsImljb24iLCJvbkNsaWNrIiwiZGVsZXRpb25zIiwidiIsInNwbGljZSIsImluZGV4T2YiLCJwcmV2RGF0YSIsIm9uUm93QWRkIiwibmV3RGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJldlN0YXRlIiwicHVzaCIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImZvbnRXZWlnaHQiLCJNYW51YWxEaWFsb2ciLCJwcm9wcyIsIm9uQ2xvc2UiLCJpY29ucyIsImRlc2NyaXB0aW9uIiwibWFwIiwiaW5kZXgiLCJleHBvcnRCdXR0b24iLCJzZWxlY3Rpb24iLCJoZWFkZXJTdHlsZSIsImFjdGlvbnNDb2x1bW5JbmRleCIsImNvbHVtbnNCdXR0b24iLCJkZWJvdW5jZUludGVydmFsIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJwYWdpbmF0aW9uIiwibGFiZWxEaXNwbGF5ZWRSb3dzIiwidG9vbGJhciIsIm5Sb3dzU2VsZWN0ZWQiLCJoZWFkZXIiLCJhY3Rpb25zIiwiYm9keSIsImVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UiLCJmbGV4R3JvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibGVmdCIsInBhZGRpbmdMZWZ0IiwianVzdGlmeSIsImNlbnRlciIsInJpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiTmF2IiwibWVudSIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsInVzZUNvbnRleHQiLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3QiLCJsaXN0SXRlbSIsImxpc3RJdGVtVGV4dCIsImxhcmdlQXZhdGFyIiwiaW5saW5lIiwibGlzdFRleHQiLCJNZW51TGlzdCIsImhhbmRsZU9uQ2xpY2tMb2dpbiIsImxvZ2luVXJsIiwiYXNzaWduIiwiaXNMb2dnZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZ29vZ2xlU2lnbmluIiwiU2lnbkluQnV0dG9uIiwic2lnbkluIiwibG9nb3V0IiwiTGlnaHRUb29sdGlwIiwid2l0aFN0eWxlcyIsImNvbW1vbiIsIndoaXRlIiwic2hhZG93cyIsIlRvb2x0aXAiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiSGlkZU9uU2Nyb2xsIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJDTElFTlRfSUQiLCJBVVRIT1JJWkVfVVJJIiwicXVlcnlzdHIiLCJjbGllbnRfaWQiLCJyZWRpcmVjdF91cmkiLCJyZXNwb25zZV90eXBlIiwic2NvcGUiLCJub25jZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtR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QitGLEtBRHFCLENBQ2xDL0YsUUFEa0M7QUFFMUMsTUFBTW1LLE9BQU8sR0FBR0Msa0ZBQWdCLEVBQWhDO0FBQ0Esc0JBQ0Usb0JBQUMsK0RBQUQ7QUFBTyxVQUFNLEVBQUUsS0FBZjtBQUFzQixhQUFTLEVBQUMsTUFBaEM7QUFBdUMsVUFBSSxDQUFDRDtBQUE1QyxLQUNHbkssUUFESCxDQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQUE7QUFBQTtDQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLElBQU1xSyxTQUFTLEdBQUcsMkVBQWxCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLDhDQUF0QjtBQUNBLElBQU1DLFFBQVEsR0FBR3pPLHlDQUFFLENBQUN1TixTQUFILENBQWE7QUFDMUJtQixXQUFTLEVBQUdILFNBRGM7QUFFMUJJLGNBQVksRUFBRyx1QkFGVztBQUcxQkMsZUFBYSxFQUFHLGdCQUhVO0FBSTFCQyxPQUFLLEVBQUcsc0JBSmtCO0FBSU07QUFDaENDLE9BQUssRUFDTEMsSUFBSSxDQUFDQyxNQUFMLEdBQ0dDLFFBREgsQ0FDWSxFQURaLEVBRUdDLFNBRkgsQ0FFYSxDQUZiLEVBRWdCLEVBRmhCLElBR0FILElBQUksQ0FBQ0MsTUFBTCxHQUNHQyxRQURILENBQ1ksRUFEWixFQUVHQyxTQUZILENBRWEsQ0FGYixFQUVnQixFQUZoQjtBQVQwQixDQUFiLENBQWpCLEMsQ0FjQTs7QUFDZVYsNEVBQWEsR0FBRyxHQUFoQixHQUFzQkMsUUFBckMsRSIsImZpbGUiOiJhcHAuNWE2MGI2NmMyMWEyYmNiMDU3MWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInJlYWN0LmJ1bmRsZVwiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi9OYXZcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkL0JvYXJkXCI7XHJcbmltcG9ydCBNYW5hZ2VtZW50IGZyb20gXCIuL21hbmFnZW1lbnQvTWFuYWdlbWVudFwiO1xyXG5pbXBvcnQge0Nzc0Jhc2VsaW5lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9mb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbi8vIOy7qO2FjeyKpO2KuCDrqqnroZ1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTG9nb3V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3QgWyBwcm9maWxlICwgc2V0UHJvZmlsZSBdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHsgaWRfdG9rZW4gfSA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XHJcbiAgICBjb25zdCBsb2NhbFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJyAsIGlkX3Rva2VuKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxUb2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCB7c3ViICwgbmFtZSwgZW1haWwsIHBpY3R1cmV9ID0gand0RGVjb2RlKGxvY2FsVG9rZW4pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqd3REZWNvZGUobG9jYWxUb2tlbikpO1xyXG4gICAgICAgICAgICAvLyB1c2VyIO2ZleyduO2VmOq4sCBkYuyXkCDsoIDsnqXrkJwgaWTqsIAg7JeG64uk66m0IOy1nOy0iCDroZzqt7jsnbggZXZlbnTrsJzsg51cclxuICAgICAgICAgICAgLy8g7IOI66Gc7Jq0IOycoOyggCDrjbDsnbTthLAg7IOd7ISxIFxyXG4gICAgICAgICAgICBzZXRQcm9maWxlKHtpZDpzdWIsbmFtZSxlbWFpbCxwaWN0dXJlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaWRfdG9rZW4gLCBsb2NhbFRva2VuXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9maWxlfT4gICAgICAgICAgey8qIOycoOyggCDtlITroZztlYQg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8TG9nb3V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UHJvZmlsZX0+ICAgey8qIOuhnOq3uOyVhOybgyDsnbTrsqTtirgg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8UHJvZmlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb2ZpbGV9PiAgICAgey8qIO2UhOuhnO2VhCDsu6jthY3siqTtirggICovfVxyXG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ib2FyZFwiIGNvbXBvbmVudD17Qm9hcmR9PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21hbmFnZW1lbnRcIiBjb21wb25lbnQ9e01hbmFnZW1lbnR9PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8L1Byb2ZpbGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0xvZ291dENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhcnJvdy5kMDgzMjhmNjJkMTliNjZmOGVhOGQ2ZDAwNjcyNGM4Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid29vZDIuZGMzZGZlYjE4ZWRmNTQ2Zjc3MThjYmQ3ZDVjMDk3NDEuanBnXCI7IiwiaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBmaXhlZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBCb2FyZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZ29vZ2xlU2lnbmluLjFjZTFhYWE1YTEyN2ZhM2U0OTJhMTJiYjYyZjk5MzA0LnBuZ1wiOyIsImltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2JhY2tncm91bmQvYXJyb3cucG5nJztcclxuaW1wb3J0IHtCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICBKYWNrJ3MgV2Vic2l0ZVxyXG4gICAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgICAgeycuJ31cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBtaW5IZWlnaHQ6ICcyMHZoJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXHJcbiAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6dGhlbWUucGFsZXR0ZS5ncmV5WzIwMF0sXHJcbiAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICB3aWR0aCA6ICcxMnZ3JyxcclxuICAgICAgaGVpZ2h0IDogJzEydmgnLFxyXG4gICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgYmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICBtYXJnaW5Cb3R0b206JzN2aCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOidjb250YWluJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lGb290ZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJNb3ZlIHRvIFRvcFwiIGFyaWEtbGFiZWw9XCJtb3ZlLXRvLXRvcFwiIHBsYWNlbWVudD1cInRvcFwiIGVudGVyRGVsYXk9ezM1MH0gbGVhdmVEZWxheT17MTUwfT5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gb25Nb3VzZU92ZXI9eyhlKT0+dHJhbnNpdGlvbihlKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtGYWRlfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luOjAsXHJcbiAgICAgIHBhZGRpbmc6MCxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBoZWlnaHQgOiAnMTV2aCcsXHJcbiAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMTkxLDE4NSwxODUpJyxcclxuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMTkxLDE4NSwxODUsMSkgMjYlLCByZ2JhKDQ3LDEzNSwxNjYsMSkgNzclKScsXHJcbiAgICAgIHpJbmRleDoxMDAsXHJcbiAgICAgIG1hcmdpbjonYXV0bycsXHJcbiAgICAgIG9wYWNpdHk6MC43LFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9zc2xpbmUoe2NoaWxkcmVufSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy01MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MTUwMCwgZXhpdDoxMDAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYm94U2hhZG93PXs0fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gXCIuL0ludHJvZHVjdGlvblwiO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uMiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb24yXCI7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBoZWlnaHQgOiAnMzUwdmgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24yLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dyb3d9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENyb3NzbGluZSBmcm9tICcuL0Nyb3NzbGluZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjoncm93JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzkwdncnLFxyXG4gICAgICAgIG1hcmdpblRvcDonLTEwdmgnLFxyXG4gICAgICAgIHpJbmRleDowLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgICAgICAgbWluV2lkdGg6IDQwMCxcclxuICAgICAgICB3aWR0aCA6ICc1MHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnNzB2aCcsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgICBmbGV4IDogMixcclxuICAgIH0sXHJcbiAgICB0ZXh0IDoge1xyXG4gICAgICAgIG1heFdpZHRoIDogNjAwLFxyXG4gICAgICAgIG1pbldpZHRoIDogMjUwLFxyXG4gICAgICAgIHdpZHRoIDogJzMwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc1MHZoJyxcclxuICAgICAgICBmbGV4IDogMSxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTgwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxDcm9zc2xpbmU+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgYWxpZ25TZWxmOidjZW50ZXInfX0+IFVzZXIncyBHdWlkZSA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nyb3NzbGluZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDogMjAwMCB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+PC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcwIDAgMCcgfX1cclxuICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IDIwMDAgfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0gPjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7R3Jvd30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J3Jvdy1yZXZlcnNlJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzkwdncnLFxyXG4gICAgICAgIHpJbmRleDowLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgICAgICAgbWluV2lkdGg6IDQwMCxcclxuICAgICAgICB3aWR0aCA6ICc1MHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnNzB2aCcsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgICBmbGV4IDogMixcclxuICAgIH0sXHJcbiAgICB0ZXh0IDoge1xyXG4gICAgICAgIG1heFdpZHRoIDogNjAwLFxyXG4gICAgICAgIG1pbldpZHRoIDogMjUwLFxyXG4gICAgICAgIHdpZHRoIDogJzMwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc1MHZoJyxcclxuICAgICAgICBmbGV4IDogMSxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgIH1cclxuICB9KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTgwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDogMjAwMCB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDogMjAwMCB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB3b29kMiBmcm9tIFwiLi4vYmFja2dyb3VuZC93b29kMi5qcGdcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSBcIi4vU3RhcnRCdXR0b25cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOmB1cmwoJHt3b29kMn0pYCxcclxuICAgIH0sXHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbZmFkZSxzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzRmlyc3RSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICAgICAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSBpc0ZpcnN0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTM1MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY29sb3I9J3RleHRTZWNvbmRhcnknPiBcclxuICAgICAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50ID8gJ1dFTENPTUUhIScgOiAnUmVhZHkgdG8gc3RhcnQ/J31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50PyBudWxsIDogKDxTdGFydEJ1dHRvbi8+KX1cclxuICAgICAgICAgICAgICAgIHsvKiAhaXNGaXJzdFJlZiDsnbwg7IucIOuwlOuhnOqwgOq4sCDrsoTtirwg7LaU6rCAICovfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0J1dHRvbiAsIEJveCwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBQbGF5QXJyb3dPdXRsaW5lZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMC41dmgnXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHRleHRTaGFkb3cgOiAnMC41cHggMC41cHggMXB4ICMwMDAwMDA1YycsXHJcbiAgICB9LFxyXG4gICAgaW5uZXJCb3ggOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzF2aCcsXHJcbiAgICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lckJveH0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScvbWFuYWdlbWVudCcgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjonbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIHZhcmlhbnQ9J291dGxpbmVkJyBzdGFydEljb249ezxQbGF5QXJyb3dPdXRsaW5lZCBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3tmb250U2l6ZSA6IDMwfX0vPn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURURcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIHtg7KeA6riIIOuwlOuhnCDsi5zsnpHtlbTrs7TshLjsmpQuYH1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qcydcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4gLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJztcclxuaW1wb3J0IHtCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge1NuYWNrYmFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuaW1wb3J0IE1hbnVhbERpYWxvZyBmcm9tIFwiLi9NYW51YWxEaWFsb2dcIjtcclxuaW1wb3J0IHsgb3B0aW9ucyxsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9vcHRpb25zXCI7XHJcblxyXG4vLyB1c2VFZmZlY3TroZwgZGF0YSwgY29sdW1ucyDqsIAg67OA6rK965CgIOuVjOuniOuLpCDshJzrsoTsl5Ag7KCA7J6lIO2bhCDqsLHsi6BcclxuLy8gLi91dGlsIOqyveuhnOyXkCDroZzsp4Eg7J6R7ISxXHJcbi8vIO2GteyLoOyXkCDrjIDtlZwgdGVzdGNvZGXsnpHshLFcclxuLy8gY29sdW1uc+yZgCBkYXRh7J2YIOqwgSDqsJLrk6Tsl5Ag64yA7ZWcIOustOqysOyEsSDssrTtgaxcclxuLy8gcHJvcHNUeXBlIOyekeyEsVxyXG4vLyBTaWRlTWVudUxpc3QgPT4gTG9naW7snLzroZwg67OA6rK9LCDruYTroZzqt7jsnbgg7IucIExPR0lO7Jy866GcIOuztOydvCDqsoMsIOuhnOq3uOyduOyLnCBNWSBNRU5V66GcIOuztOq4sFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnRUYWJsZSgpIHtcclxuICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KVxyXG4gIGNvbnN0IFtkaWFsb2csIHNldERpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57IC8vIOy1nOy0iOugjOuNlOungeyLnCDrj4Tsm4Drp5AgU25hY2sg7Lac66ClXHJcbiAgICBzZXRUaW1lb3V0KCgpPT57c2V0U25hY2soe29wZW46dHJ1ZX0pfSw0MDApO1xyXG4gIH0sW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyAgIC8vIHdpbmRvdyDrjZTruJTtgbTrpq0g7J2067Kk7Yq4IOy2lOqwgCwg64+E7JuA66eQIG9wZW5cclxuICAgIGNvbnN0IG9uZGJDbGljayA9ICgpID0+IHNldERpYWxvZyh7b3BlbiA6ICFkaWFsb2cub3Blbn0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gIH07XHJcbn0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7ICAvLyDstZzstIggQVBJ66GcIOuwm+yVhOyYpOuKlCDrj5nsnpHtlYTsmpRcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgeyB0aXRsZTogJ05hbWUnLCBmaWVsZDogJ25hbWUnICwgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7IHRpdGxlOiAnU3VybmFtZScsIGZpZWxkOiAnc3VybmFtZScgfSxcclxuICAgICAgeyB0aXRsZTogJ0JpcnRoIFllYXInLCBmaWVsZDogJ2JpcnRoWWVhcicgfSxcclxuICAgICAgeyB0aXRsZTogJ1Bob25lJyAsIGZpZWxkOidwaG9uZScsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnR2VuZGVyJyxcclxuICAgICAgICBmaWVsZDogJ2dlbmRlcicsXHJcbiAgICAgICAgbG9va3VwOiB7IDE6ICdNYWxlJywgMjogJ0ZlbWFsZScgfVxyXG4gICAgICB9LFxyXG4gICAgICB7IHRpdGxlOiAnTWVtbycgLCBmaWVsZDonbWVtbyd9XHJcbiAgICBdLFxyXG4gICAgZGF0YTogW1xyXG4gICAgICB7IG5hbWU6ICdNZWhtZXQnLCBzdXJuYW1lOiAnQmFyYW4nLCBiaXJ0aFllYXI6IDE5ODMsIHBob25lOicwMTA0NjUwOTk5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdBZGFtJywgc3VybmFtZTogJ0FkYW0nLCBiaXJ0aFllYXI6IDE5ODQsIHBob25lOicwMTA0NjUwOTc5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdNZWhtZXQnLCBzdXJuYW1lOiAnQXRvbScsIGJpcnRoWWVhcjogMTk4NSwgcGhvbmU6JzAxMDQ2NTA5Njk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ211bCcsIHN1cm5hbWU6ICdLb25nbmEnLCBiaXJ0aFllYXI6IDE5ODYsIHBob25lOicwMTA0NjUwOTE5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdKYWNrJywgc3VybmFtZTogJ0phY2snLCBiaXJ0aFllYXI6IDE5ODcsIHBob25lOicwMTA0NjUwOTI5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdCb2InLCBzdXJuYW1lOiAnQm9iJywgYmlydGhZZWFyOiAxOTg4LCBwaG9uZTonMDEwNDY1MDkzOTUnICxnZW5kZXI6IDIgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnTWVobWV0Jywgc3VybmFtZTogJ0JpbGwnLCBiaXJ0aFllYXI6IDE5ODksIHBob25lOicwMTA0NjUwOTQ5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdKb2huc29uJywgc3VybmFtZTogJ0pvaG5zb24nLCBiaXJ0aFllYXI6IDE5OTAsIHBob25lOicwMTA0NjUwOTg5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCBNYXJnaW4gPSAoKSA9PiAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0+PC9Cb3g+KTsgIC8vIOyXrOuwsVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcclxuICAgIHNldFNuYWNrKHtvcGVuOiBmYWxzZSB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0RGlhbG9nKHtvcGVuIDogZmFsc2V9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICAgIDxNYW51YWxEaWFsb2cgb3Blbj17ZGlhbG9nLm9wZW59IG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfS8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgIHRpdGxlPVwiTWFuYWdlbWVudCBBcHBcIlxyXG4gICAgICBjb2x1bW5zPXtzdGF0ZS5jb2x1bW5zfVxyXG4gICAgICBkYXRhPXtzdGF0ZS5kYXRhfVxyXG4gICAgICBsb2NhbGl6YXRpb249e2xvY2FsaXphdGlvbn0gLy8g66Gc7Lus65287J207KaIXHJcbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9IC8vIOuCtOuztOuCtOq4sCwg6re466Oo7ZWRXHJcbiAgICAgIGFjdGlvbnM9e1svLyDrqYDti7Ag7IWA66CJ7IWYIOyekeyXhVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdG9vbHRpcCA6ICdSZW1vdmUgQWxsIFNlbGVjdGVkIFVzZXJzJyxcclxuICAgICAgICAgICAgaWNvbiA6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICBvbkNsaWNrIDogKGUgLCBkZWxldGlvbnMpID0+IHsgIC8vIOyEoO2Dne2VnCDssrTtgazrsJXsiqTsl5Ag64yA7ZW0IOuqqOuRkCDsgq3soJwg7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZih2KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZEYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucHJldkRhdGEgLCBkYXRhfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdfSBcclxuICAgICAgZWRpdGFibGU9e3tcclxuICAgICAgICBvblJvd0FkZDogKG5ld0RhdGEpID0+ICAvLyDstpTqsIBcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgb25Sb3dVcGRhdGU6IChuZXdEYXRhLCBvbGREYXRhKSA9PiAgLy8g7IiY7KCVXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgaWYgKG9sZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICAgIGRhdGFbZGF0YS5pbmRleE9mKG9sZERhdGEpXSA9IG5ld0RhdGE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8U25hY2tiYXJcclxuICAgIG9wZW49e3NuYWNrLm9wZW59XHJcbiAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDondG9wJywgaG9yaXpvbnRhbDonY2VudGVyJyB9fVxyXG4gICAgPlxyXG4gICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9XCJzdWNjZXNzXCIgdmFyaWFudD0nZmlsbGVkJyBtZXNzYWdlPXt7Zm9udFdlaWdodDonYm9sZGVyJywgZm9udFNpemU6JzVyZW0nfX0+XHJcbiAgICAgICAgICAgIG5lZWQgc29tZSBoZWxwPyA/IGRvdWJsZS1jbGljayBhbnkgc3BhY2UgIVxyXG4gICAgICAgIDwvQWxlcnQ+XHJcbiAgICA8L1NuYWNrYmFyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufSIsIlxyXG5pbXBvcnQge0RpYWxvZyxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgQm94LFxyXG4gICAgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgICBpY29uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzN2dydcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFudWFsRGlhbG9nIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7b3Blbiwgb25DbG9zZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGljb25zID0gW1xyXG4gICAgICAgIHtpY29uIDogJ2FkZF9ib3gnICwgZGVzY3JpcHRpb24gOiAnW0FkZF0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnW0VkaXRdIHJlY29yZHMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2VhcmNoJyAsIGRlc2NyaXB0aW9uIDogJ1R5cGUgZG93biB3b3JkcyB0byBbc2VhcmNoXS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzYXZlX2FsdCcgLCBkZXNjcmlwdGlvbiA6ICdbRG93bmxvYWRdIGZpbGVzIGluIENWUyBmb3JtYXQuJ30sXHJcbiAgICAgICAge2ljb24gOiAndmlld193ZWVrJyAsIGRlc2NyaXB0aW9uIDogJ1tTZWxlY3RdIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW2RlbGV0ZV0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjaGVja19ib3gnICwgZGVzY3JpcHRpb24gOiAnIOKRoCBTZWxlY3QgdGhlIGNoZWNrYm94IG9uIHRoZSByb3cuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZmFjdF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENoZWNrIHRoZSBudW1iZXIgb2YgdGhlIHJvd3Mgc2VsZWN0ZWQuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZGVsZXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaIgQ2xpY2sgdGhlIGJpbiBpY29uIG9uIHRoZSByaWdodCBhYm92ZS4nfSxcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPERpYWxvZyBvbkNsb3NlPXtvbkNsb3NlfSBvcGVuPXtvcGVufT5cclxuICAgICAgICA8RGlhbG9nVGl0bGU+IEJBU0lDIE1BTlVBTCA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpY29ucy5tYXAoKGljb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtgJHtpY29ufSArICR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3BhbicgY2xhc3NOYW1lPXtgbWF0ZXJpYWwtaWNvbnMgJHtjbGFzc2VzLmljb259YH0gc3R5bGU9e3t3aWR0aDonM3Z3J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpY29uLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICAgKVxyXG59IiwiXHJcbi8vIERBVEEgVEFCTEUgT1BUSU9OU1xyXG5cclxuIGV4cG9ydCBjb25zdCBvcHRpb25zPSB7XHJcbiAgICBleHBvcnRCdXR0b246IHRydWUsXHJcbiAgICBncm91cGluZzp0cnVlLFxyXG4gICAgc2VsZWN0aW9uOnRydWUsXHJcbiAgICBoZWFkZXJTdHlsZTp7IFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uc0NvbHVtbkluZGV4Oi0xLCAgLy8g7JWh7IWYIOyVhOydtOy9mOychOy5mFxyXG4gICAgY29sdW1uc0J1dHRvbiA6IHRydWUsICAgLy8gXHJcbiAgICBkZWJvdW5jZUludGVydmFsIDogMTYwLCAvLyDroZzrlKnsi5zqsIRcclxuICAgIHBhZ2VTaXplIDogMjAsICAgICAgICAgIC8vIO2OmOydtOyngOyCrOydtOymiFxyXG4gICAgcGFnZVNpemVPcHRpb25zIDogWzUsIDEwLCAyMCwgNTAsIDEwMF0sIC8vIO2OmOydtOymiCDsgqzsnbTspogg7KKF66WYXHJcbiAgfVxyXG4gZXhwb3J0IGNvbnN0IGxvY2FsaXphdGlvbiA9IHtcclxuICAgIHBhZ2luYXRpb24gOiB7IGxhYmVsRGlzcGxheWVkUm93cyA6ICd7Y291bnR9IHJvd3MgfCB7ZnJvbX0te3RvfScgLCB9LFxyXG4gICAgdG9vbGJhcjoge25Sb3dzU2VsZWN0ZWQ6ICd7MH0gcm93KHMpIHNlbGVjdGVkJ30sXHJcbiAgICBoZWFkZXI6IHthY3Rpb25zOiAnRWRpdCd9LFxyXG4gICAgYm9keToge2VtcHR5RGF0YVNvdXJjZU1lc3NhZ2U6ICdObyByZWNvcmQgdG8gZGlzcGxheS4uIENsaWNrIHRoZSBbK10gYnV0dG9uIG9uIHRoZSByaWdodC10b3AnLH1cclxuICB9XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge0RyYXdlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge0dyaWR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtEaXZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtBcHBCYXIgYXMgQXBwYmFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7VG9vbGJhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSGlkZU9uU2Nocm9sbCBmcm9tIFwiLi4vdXRpbC9IaWRlT25TY2hyb2xsXCI7XHJcbmltcG9ydCBTaWRlTWVudUxpc3QgZnJvbSBcIi4vU2lkZU1lbnVMaXN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgU2lnbk91dEJ1dHRvbiBmcm9tIFwiLi9TaWduT3V0QnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBhbGlnbkl0ZW1zOidmbGV4LXN0YXJ0JyxcclxuICAgICAgICBwYWRkaW5nVG9wOjE4LFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206MTgsXHJcbiAgICB9LFxyXG4gICAgbGVmdCA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBwYWRkaW5nTGVmdDozMCxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LXN0YXJ0J1xyXG4gICAgfSxcclxuICAgIGNlbnRlciA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICByaWdodCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDo0NSxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LWVuZCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIHBhZGRpbmc6YDAgJHt0aGVtZS5zcGFjaW5nKDMpfWBcclxuICAgIH1cclxuICB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdiAocHJvcHMpIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIG1lbnUgOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvciwgb3BlbikgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgYW5jaG9yID0gcHJvZmlsZSA/ICdNWVBBR0UnIDogJ0xPR0lOJztcclxuICAgIGNvbnN0IGxpbmtzID0gWydib2FyZCcsJ21hbmFnZW1lbnQnXTtcclxuICAgIGNvbnN0IExvZ291dEJ0biA9IHByb2ZpbGU/IDxTaWduT3V0QnV0dG9uLz4gOiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIaWRlT25TY2hyb2xsIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEFwcGJhciBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tib3hTaGFkb3c6J25vbmUnfX0+XHJcbiAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IEhvbWUgPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtsaW5rfWB9IHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fSBrZXk9e2xpbmt9PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiB7bGlua30gPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT48c3Bhbj48L3NwYW4+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdwcmltYXJ5JyBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0gc3R5bGU9e3ttYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YW5jaG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtMb2dvdXRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlciBvcGVuPXtzdGF0ZVthbmNob3JdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7U2lkZU1lbnVMaXN0KCB7Li4ucHJvcHMsIGFuY2hvciAsdG9nZ2xlRHJhd2VyICwgcHJvZmlsZX0gKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBiYXI+XHJcbiAgICAgICAgPC9IaWRlT25TY2hyb2xsPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbVRleHQsIExpc3RJdGVtQXZhdGFyICwgRGl2aWRlciwgTGlzdEl0ZW0sIFR5cG9ncmFwaHkgLCBBdmF0YXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFNpZ25JbkJ1dHRvbiBmcm9tICcuL1NpZ25JbkJ1dHRvbic7XHJcbmltcG9ydCBnb29nbGVTaWduaW4gZnJvbSAnLi4vYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyc7XHJcbmltcG9ydCBsb2dpblVybCBmcm9tICcuLi91dGlsL2dvb2dsZUF1dGgnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbGlzdCA6IHtcclxuICAgICAgICB3aWR0aCA6ICcyMnZ3JyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW0gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnMS4zdmggMS41dncnXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW1UZXh0IDoge1xyXG4gICAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYXJnZUF2YXRhciA6IHtcclxuICAgICAgICB3aWR0aCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgIH0sXHJcbiAgICBpbmxpbmUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdpbmxpbmUnXHJcbiAgICB9LFxyXG4gICAgbGlzdFRleHQgOiB7XHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51TGlzdCAoe2FuY2hvciAsIHRvZ2dsZURyYXdlciwgcHJvZmlsZX0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2tMb2dpbiAobG9naW5VcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGxvZ2luVXJsKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gcHJvZmlsZT8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coYHByb2ZpbGUgOiAke0pTT04uc3RyaW5naWZ5KHByb2ZpbGUpfWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpc0xvZ2dlZD8gJ1BST0ZJTEUnIDogJ0xPR0lOIE1FTlUnfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG5cclxuICAgICAgICAgICAge2lzTG9nZ2VkPyBcclxuXHJcbiAgICAgICAgICAgICg8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3Byb2ZpbGUucGljdHVyZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlQXZhdGFyfSBhbHQ9e3Byb2ZpbGUubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9maWxlLm5hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGV4dH0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nRU1BSUwgOiAnIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0nc3BhbicgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICg8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gb25DbGljaz17KCk9PmhhbmRsZU9uQ2xpY2tMb2dpbihsb2dpblVybCl9PlxyXG4gICAgICAgICAgICAgICAgPFNpZ25JbkJ1dHRvbiBzaWduSW49e2dvb2dsZVNpZ25pbn0vPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPil9XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyxCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDAlJyxcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge3NpZ25Jbn0gPSBwcm9wczsgLy8g7J2066+47KeAXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3Bhbic+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzaWduSW59IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PjwvaW1nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IEV4aXRUb0FwcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcCc7XHJcbmltcG9ydCB7IExpc3RJdGVtICwgSWNvbkJ1dHRvbiwgVG9vbHRpcH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgTG9nb3V0Q29udGV4dCB9IGZyb20gJy4uL2FwcCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxvZ291dCA6IHtcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAwLFxyXG4gICAgICAgIHdpZHRoIDogJ2F1dG8nLFxyXG4gICAgfVxyXG59KSlcclxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBmb250V2VpZ2h0Oidib2xkJ1xyXG4gICAgfSxcclxuICB9KSkoVG9vbHRpcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHNldFByb2ZpbGUgPSBSZWFjdC51c2VDb250ZXh0KExvZ291dENvbnRleHQpO1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIHNldFByb2ZpbGUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPSdMb2ctb3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3BhZGRpbmc6NH19IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD4gICAgXHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCI7XHJcbmltcG9ydCBTbGlkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZSc7XHJcblxyXG4vLyBHTkLsnZgg7Iqs65287J2065Oc6riw64qlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpZGVPblNjcm9sbChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTbGlkZSBhcHBlYXI9e2ZhbHNlfSBkaXJlY3Rpb249XCJkb3duXCIgaW49eyF0cmlnZ2VyfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TbGlkZT5cclxuICApO1xyXG59IiwiaW1wb3J0IHFzIGZyb20gJ3FzJ1xyXG4vLyBHb29nbGUgT3BlbklEIENvbm5lY3Qg7J207Jqp7ZWY6riwXHJcbi8vIOywuOqzoCDquLDsiKDruJTroZzqt7ggOiBodHRwczovL3d3dy5kYWxlc2VvLmNvbS9nb29nbGUtb2lkYy9cclxuXHJcbi8vIGNsaWVudCBJRCA6IDEwMjk1NDM3MzczMDQtcXBmNGc5Nm1nM3FjaGtnZWZpZ2p0M3JqNXJrcW1sb2cuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cclxuLy8gc2VjcmV0IDogcENoN29WY2VETlRTdG9fYVgxN3hHSkhhXHJcbmNvbnN0IENMSUVOVF9JRCA9ICcxMDI5NTQzNzM3MzA0LXFwZjRnOTZtZzNxY2hrZ2VmaWdqdDNyajVya3FtbG9nLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcclxuY29uc3QgQVVUSE9SSVpFX1VSSSA9IFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGhcIjtcclxuY29uc3QgcXVlcnlzdHIgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgY2xpZW50X2lkIDogQ0xJRU5UX0lELFxyXG4gICAgcmVkaXJlY3RfdXJpIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcsXHJcbiAgICByZXNwb25zZV90eXBlIDogJ3Rva2VuIGlkX3Rva2VuJyxcclxuICAgIHNjb3BlIDogJ29wZW5pZCBwcm9maWxlIGVtYWlsJywgLy8gY29udGFjdCBBUEnrpbwg7J296riw7KCE7Jqp7Jy866GcIO2YuOy2nFxyXG4gICAgbm9uY2U6XHJcbiAgICBNYXRoLnJhbmRvbSgpXHJcbiAgICAgIC50b1N0cmluZygzNilcclxuICAgICAgLnN1YnN0cmluZygyLCAxNSkgK1xyXG4gICAgTWF0aC5yYW5kb20oKVxyXG4gICAgICAudG9TdHJpbmcoMzYpXHJcbiAgICAgIC5zdWJzdHJpbmcoMiwgMTUpLFxyXG59KVxyXG5cclxuLy8gVVJMIGV4cG9ydFxyXG5leHBvcnQgZGVmYXVsdCBBVVRIT1JJWkVfVVJJICsgXCI/XCIgKyBxdWVyeXN0cjtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=