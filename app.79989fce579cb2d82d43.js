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
function App(_ref) {
  var match = _ref.match;

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
    path: "".concat(match.url, "/"),
    component: _home_Home__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "".concat(match.url, "/board"),
    component: _board_Board__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "".concat(match.url, "/management"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvd29vZDIuanBnIiwid2VicGFjazovLy8uL3NyYy9ib2FyZC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Dcm9zc2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL1N0YXJ0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbnVhbERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9IaWRlT25TY2hyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dvb2dsZUF1dGguanMiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvdXRDb250ZXh0IiwiUHJvZmlsZUNvbnRleHQiLCJBcHAiLCJtYXRjaCIsInVzZVN0YXRlIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJxcyIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwiaWRfdG9rZW4iLCJsb2NhbFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsInNldEl0ZW0iLCJocmVmIiwib3JpZ2luIiwiand0RGVjb2RlIiwic3ViIiwibmFtZSIsImVtYWlsIiwicGljdHVyZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInVybCIsIkhvbWUiLCJCb2FyZCIsIk1hbmFnZW1lbnQiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImZvb3RlciIsInBhZGRpbmciLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJ0ZXh0QWxpZ24iLCJhcnJvdyIsIndpZHRoIiwiaGVpZ2h0IiwiYWxpZ25TZWxmIiwiYmFja2dyb3VuZCIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRTaXplIiwiU3RpY2t5Rm9vdGVyIiwiY2xhc3NlcyIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInRyYW5zaXRpb24iLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjdXJzb3IiLCJtYXJnaW4iLCJmbGV4V3JhcCIsImFsaWduSXRlbXMiLCJDcm9zc2xpbmUiLCJjaGlsZHJlbiIsImZhZGUiLCJzZXRGYWRlIiwiZG9tUmVmIiwidXNlUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwiY3VycmVudCIsInVub2JzZXJ2ZSIsImVudGVyIiwiZXhpdCIsImFsaWduQ29udGVudCIsInpJbmRleCIsInBhcGVyIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImZsZXgiLCJ0ZXh0IiwiSW50cm9kdWN0aW9uIiwiZ3JvdyIsInNldEdyb3ciLCJ0aXRsZSIsImNvbG9yIiwidHJhbnNmb3JtT3JpZ2luIiwidGltZW91dCIsImJhY2tncm91bmRJbWFnZSIsIndvb2QyIiwiTWFpbiIsImlzRmlyc3RSZWYiLCJ1c2VTdHlsZSIsImJ1dHRvbiIsInR5cG9ncmFwaHkiLCJ0ZXh0U2hhZG93IiwiaW5uZXJCb3giLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTWFuYWdlbWVudFRhYmxlIiwib3BlbiIsInNuYWNrIiwic2V0U25hY2siLCJkaWFsb2ciLCJzZXREaWFsb2ciLCJzZXRUaW1lb3V0Iiwib25kYkNsaWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb2x1bW5zIiwiZmllbGQiLCJncm91cGluZyIsImxvb2t1cCIsImRhdGEiLCJzdXJuYW1lIiwiYmlydGhZZWFyIiwicGhvbmUiLCJnZW5kZXIiLCJtZW1vIiwic3RhdGUiLCJzZXRTdGF0ZSIsIk1hcmdpbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJoYW5kbGVEaWFsb2dDbG9zZSIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJ2Iiwic3BsaWNlIiwiaW5kZXhPZiIsInByZXZEYXRhIiwib25Sb3dBZGQiLCJuZXdEYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcmV2U3RhdGUiLCJwdXNoIiwib25Sb3dVcGRhdGUiLCJvbGREYXRhIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiZm9udFdlaWdodCIsIk1hbnVhbERpYWxvZyIsInByb3BzIiwib25DbG9zZSIsImljb25zIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpbmRleCIsImV4cG9ydEJ1dHRvbiIsInNlbGVjdGlvbiIsImhlYWRlclN0eWxlIiwiYWN0aW9uc0NvbHVtbkluZGV4IiwiY29sdW1uc0J1dHRvbiIsImRlYm91bmNlSW50ZXJ2YWwiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsInBhZ2luYXRpb24iLCJsYWJlbERpc3BsYXllZFJvd3MiLCJ0b29sYmFyIiwiblJvd3NTZWxlY3RlZCIsImhlYWRlciIsImFjdGlvbnMiLCJib2R5IiwiZW1wdHlEYXRhU291cmNlTWVzc2FnZSIsImZsZXhHcm93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsZWZ0IiwicGFkZGluZ0xlZnQiLCJqdXN0aWZ5IiwiY2VudGVyIiwicmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJOYXYiLCJtZW51IiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwidXNlQ29udGV4dCIsImxpbmtzIiwiTG9nb3V0QnRuIiwiYm94U2hhZG93IiwibGluayIsIm1hcmdpblJpZ2h0IiwiU2lkZU1lbnVMaXN0IiwibGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJpbmxpbmUiLCJsaXN0VGV4dCIsIk1lbnVMaXN0IiwiaGFuZGxlT25DbGlja0xvZ2luIiwibG9naW5VcmwiLCJhc3NpZ24iLCJpc0xvZ2dlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnb29nbGVTaWduaW4iLCJTaWduSW5CdXR0b24iLCJzaWduSW4iLCJsb2dvdXQiLCJMaWdodFRvb2x0aXAiLCJ3aXRoU3R5bGVzIiwiY29tbW9uIiwid2hpdGUiLCJzaGFkb3dzIiwiVG9vbHRpcCIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJIaWRlT25TY3JvbGwiLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsIkNMSUVOVF9JRCIsIkFVVEhPUklaRV9VUkkiLCJxdWVyeXN0ciIsImNsaWVudF9pZCIsInJlZGlyZWN0X3VyaSIsInJlc3BvbnNlX3R5cGUiLCJzY29wZSIsIm5vbmNlIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwr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Ozs7Ozs7OztBQ3pDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ2UsU0FBU0UsWUFBVCxDQUFzQm5FLEtBQXRCLEVBQTZCO0FBQUEsTUFDbEMvRixRQURrQyxHQUNyQitGLEtBRHFCLENBQ2xDL0YsUUFEa0M7QUFFMUMsTUFBTW1LLE9BQU8sR0FBR0Msa0ZBQWdCLEVBQWhDO0FBQ0Esc0JBQ0Usb0JBQUMsK0RBQUQ7QUFBTyxVQUFNLEVBQUUsS0FBZjtBQUFzQixhQUFTLEVBQUMsTUFBaEM7QUFBdUMsVUFBSSxDQUFDRDtBQUE1QyxLQUNHbkssUUFESCxDQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQUE7QUFBQTtDQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLElBQU1xSyxTQUFTLEdBQUcsMkVBQWxCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLDhDQUF0QjtBQUNBLElBQU1DLFFBQVEsR0FBRzFPLHlDQUFFLENBQUN3TixTQUFILENBQWE7QUFDMUJtQixXQUFTLEVBQUdILFNBRGM7QUFFMUJJLGNBQVksRUFBRyx1QkFGVztBQUcxQkMsZUFBYSxFQUFHLGdCQUhVO0FBSTFCQyxPQUFLLEVBQUcsc0JBSmtCO0FBSU07QUFDaENDLE9BQUssRUFDTEMsSUFBSSxDQUFDQyxNQUFMLEdBQ0dDLFFBREgsQ0FDWSxFQURaLEVBRUdDLFNBRkgsQ0FFYSxDQUZiLEVBRWdCLEVBRmhCLElBR0FILElBQUksQ0FBQ0MsTUFBTCxHQUNHQyxRQURILENBQ1ksRUFEWixFQUVHQyxTQUZILENBRWEsQ0FGYixFQUVnQixFQUZoQjtBQVQwQixDQUFiLENBQWpCLEMsQ0FjQTs7QUFDZVYsNEVBQWEsR0FBRyxHQUFoQixHQUFzQkMsUUFBckMsRSIsImZpbGUiOiJhcHAuNzk5ODlmY2U1NzljYjJkODJkNDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInJlYWN0LmJ1bmRsZVwiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi9OYXZcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkL0JvYXJkXCI7XHJcbmltcG9ydCBNYW5hZ2VtZW50IGZyb20gXCIuL21hbmFnZW1lbnQvTWFuYWdlbWVudFwiO1xyXG5pbXBvcnQge0Nzc0Jhc2VsaW5lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9mb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbi8vIOy7qO2FjeyKpO2KuCDrqqnroZ1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTG9nb3V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHttYXRjaH0pIHtcclxuICAgIGNvbnN0IFsgcHJvZmlsZSAsIHNldFByb2ZpbGUgXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCB7IGlkX3Rva2VuIH0gPSBxcy5wYXJzZSh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xyXG4gICAgY29uc3QgbG9jYWxUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicgLCBpZF90b2tlbik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsVG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qge3N1YiAsIG5hbWUsIGVtYWlsLCBwaWN0dXJlfSA9IGp3dERlY29kZShsb2NhbFRva2VuKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coand0RGVjb2RlKGxvY2FsVG9rZW4pKTtcclxuICAgICAgICAgICAgLy8gdXNlciDtmZXsnbjtlZjquLAgZGLsl5Ag7KCA7J6l65CcIGlk6rCAIOyXhuuLpOuptCDstZzstIgg66Gc6re47J24IGV2ZW5067Cc7IOdXHJcbiAgICAgICAgICAgIC8vIOyDiOuhnOyatCDsnKDsoIAg642w7J207YSwIOyDneyEsSBcclxuICAgICAgICAgICAgc2V0UHJvZmlsZSh7aWQ6c3ViLG5hbWUsZW1haWwscGljdHVyZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2lkX3Rva2VuICwgbG9jYWxUb2tlbl0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvZmlsZX0+ICAgICAgICAgIHsvKiDsnKDsoIAg7ZSE66Gc7ZWEIOy7qO2FjeyKpO2KuCAgICAqL31cclxuICAgICAgICAgICAgPExvZ291dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldFByb2ZpbGV9PiAgIHsvKiDroZzqt7jslYTsm4Mg7J2067Kk7Yq4IOy7qO2FjeyKpO2KuCAgICAqL31cclxuICAgICAgICAgICAgPFByb2ZpbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9maWxlfT4gICAgIHsvKiDtlITroZztlYQg7Luo7YWN7Iqk7Yq4ICAqL31cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cclxuICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtgJHttYXRjaC51cmx9L2B9IGNvbXBvbmVudD17SG9tZX0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake21hdGNoLnVybH0vYm9hcmRgfSBjb21wb25lbnQ9e0JvYXJkfT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfS9tYW5hZ2VtZW50YH0gY29tcG9uZW50PXtNYW5hZ2VtZW50fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPC9Qcm9maWxlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Mb2dvdXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXJyb3cuZDA4MzI4ZjYyZDE5YjY2ZjhlYThkNmQwMDY3MjRjOGIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndvb2QyLmRjM2RmZWIxOGVkZjU0NmY3NzE4Y2JkN2Q1YzA5NzQxLmpwZ1wiOyIsImltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgZml4ZWQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgQm9hcmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZVNpZ25pbi4xY2UxYWFhNWExMjdmYTNlNDkyYTEyYmI2MmY5OTMwNC5wbmdcIjsiLCJpbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBMaW5rfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9iYWNrZ3JvdW5kL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgSmFjaydzIFdlYnNpdGVcclxuICAgICAgICA8L0xpbms+eycgJ31cclxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgIHsnLid9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWluSGVpZ2h0OiAnMjB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOnRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdLFxyXG4gICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgd2lkdGggOiAnMTJ2dycsXHJcbiAgICAgIGhlaWdodCA6ICcxMnZoJyxcclxuICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCxcclxuICAgICAgbWFyZ2luQm90dG9tOiczdmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTonY29udGFpbicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5Rm9vdGVyKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTW92ZSB0byBUb3BcIiBhcmlhLWxhYmVsPVwibW92ZS10by10b3BcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBlbnRlckRlbGF5PXszNTB9IGxlYXZlRGVsYXk9ezE1MH0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gb25DbGljaz17c2Nyb2xsVG9Ub3B9IG9uTW91c2VPdmVyPXsoZSk9PnRyYW5zaXRpb24oZSl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7RmFkZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIG1hcmdpbjowLFxyXG4gICAgICBwYWRkaW5nOjAsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgaGVpZ2h0IDogJzE1dmgnLFxyXG4gICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiKDE5MSwxODUsMTg1KScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDE5MSwxODUsMTg1LDEpIDI2JSwgcmdiYSg0NywxMzUsMTY2LDEpIDc3JSknLFxyXG4gICAgICB6SW5kZXg6MTAwLFxyXG4gICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgICBvcGFjaXR5OjAuNyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Jvc3NsaW5lKHtjaGlsZHJlbn0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjE1MDAsIGV4aXQ6MTAwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGJveFNoYWRvdz17NH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb25cIjtcclxuaW1wb3J0IEludHJvZHVjdGlvbjIgZnJvbSBcIi4vSW50cm9kdWN0aW9uMlwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgaGVpZ2h0IDogJzM1MHZoJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPE1haW4vPlxyXG4gICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbi8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uMi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IFBhcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtHcm93fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDcm9zc2xpbmUgZnJvbSAnLi9Dcm9zc2xpbmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICc5MHZ3JyxcclxuICAgICAgICBtYXJnaW5Ub3A6Jy0xMHZoJyxcclxuICAgICAgICB6SW5kZXg6MCxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBtYXhXaWR0aDogODAwLFxyXG4gICAgICAgIG1pbldpZHRoOiA0MDAsXHJcbiAgICAgICAgd2lkdGggOiAnNTB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzcwdmgnLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgICAgZmxleCA6IDIsXHJcbiAgICB9LFxyXG4gICAgdGV4dCA6IHtcclxuICAgICAgICBtYXhXaWR0aCA6IDYwMCxcclxuICAgICAgICBtaW5XaWR0aCA6IDI1MCxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnNTB2aCcsXHJcbiAgICAgICAgZmxleCA6IDEsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy04MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Q3Jvc3NsaW5lPlxyXG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJyBzdHlsZT17e2NvbG9yOid3aGl0ZScsIGFsaWduU2VsZjonY2VudGVyJ319PiBVc2VyJ3MgR3VpZGUgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Dcm9zc2xpbmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd30gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IDIwMDAgfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAyMDAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9ID48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dyb3d9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3ctcmV2ZXJzZScsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICc5MHZ3JyxcclxuICAgICAgICB6SW5kZXg6MCxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBtYXhXaWR0aDogODAwLFxyXG4gICAgICAgIG1pbldpZHRoOiA0MDAsXHJcbiAgICAgICAgd2lkdGggOiAnNTB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzcwdmgnLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgICAgZmxleCA6IDIsXHJcbiAgICB9LFxyXG4gICAgdGV4dCA6IHtcclxuICAgICAgICBtYXhXaWR0aCA6IDYwMCxcclxuICAgICAgICBtaW5XaWR0aCA6IDI1MCxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnNTB2aCcsXHJcbiAgICAgICAgZmxleCA6IDEsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICB9XHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy04MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd30gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IDIwMDAgfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+PC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcwIDAgMCcgfX1cclxuICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IDIwMDAgfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+PC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgd29vZDIgZnJvbSBcIi4uL2JhY2tncm91bmQvd29vZDIuanBnXCI7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFN0YXJ0QnV0dG9uIGZyb20gXCIuL1N0YXJ0QnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7d29vZDJ9KWAsXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICByb290TWFyZ2luIDogJy0zNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MTMwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz4gXHJcbiAgICAgICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudCA/ICdXRUxDT01FISEnIDogJ1JlYWR5IHRvIHN0YXJ0Pyd9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudD8gbnVsbCA6ICg8U3RhcnRCdXR0b24vPil9XHJcbiAgICAgICAgICAgICAgICB7LyogIWlzRmlyc3RSZWYg7J28IOyLnCDrsJTroZzqsIDquLAg67KE7Yq8IOy2lOqwgCAqL31cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHtCdXR0b24gLCBCb3gsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgUGxheUFycm93T3V0bGluZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzAuNXZoJ1xyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzAuNXB4IDAuNXB4IDFweCAjMDAwMDAwNWMnLFxyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL21hbmFnZW1lbnQnIHN0eWxlPXt7dGV4dERlY29yYXRpb246J25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyB2YXJpYW50PSdvdXRsaW5lZCcgc3RhcnRJY29uPXs8UGxheUFycm93T3V0bGluZWQgY29sb3I9J3ByaW1hcnknIHN0eWxlPXt7Zm9udFNpemUgOiAzMH19Lz59IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7YOyngOq4iCDrsJTroZwg7Iuc7J6R7ZW067O07IS47JqULmB9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+ICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSc7XHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtTbmFja2Jhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCBNYW51YWxEaWFsb2cgZnJvbSBcIi4vTWFudWFsRGlhbG9nXCI7XHJcbmltcG9ydCB7IG9wdGlvbnMsbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuLy8gdXNlRWZmZWN066GcIGRhdGEsIGNvbHVtbnMg6rCAIOuzgOqyveuQoCDrlYzrp4jri6Qg7ISc67KE7JeQIOyggOyepSDtm4Qg6rCx7IugXHJcbi8vIC4vdXRpbCDqsr3roZzsl5Ag66Gc7KeBIOyekeyEsVxyXG4vLyDthrXsi6Dsl5Ag64yA7ZWcIHRlc3Rjb2Rl7J6R7ISxXHJcbi8vIGNvbHVtbnPsmYAgZGF0YeydmCDqsIEg6rCS65Ok7JeQIOuMgO2VnCDrrLTqsrDshLEg7LK07YGsXHJcbi8vIHByb3BzVHlwZSDsnpHshLFcclxuLy8gU2lkZU1lbnVMaXN0ID0+IExvZ2lu7Jy866GcIOuzgOqyvSwg67mE66Gc6re47J24IOyLnCBMT0dJTuycvOuhnCDrs7Tsnbwg6rKDLCDroZzqt7jsnbjsi5wgTVkgTUVOVeuhnCDrs7TquLBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VtZW50VGFibGUoKSB7XHJcbiAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSlcclxuICBjb25zdCBbZGlhbG9nLCBzZXREaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+eyAvLyDstZzstIjroIzrjZTrp4Hsi5wg64+E7JuA66eQIFNuYWNrIOy2nOugpVxyXG4gICAgc2V0VGltZW91dCgoKT0+e3NldFNuYWNrKHtvcGVuOnRydWV9KX0sNDAwKTtcclxuICB9LFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHsgICAvLyB3aW5kb3cg642U67iU7YG066atIOydtOuypO2KuCDstpTqsIAsIOuPhOybgOunkCBvcGVuXHJcbiAgICBjb25zdCBvbmRiQ2xpY2sgPSAoKSA9PiBzZXREaWFsb2coe29wZW4gOiAhZGlhbG9nLm9wZW59KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICB9O1xyXG59LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoeyAgLy8g7LWc7LSIIEFQSeuhnCDrsJvslYTsmKTripQg64+Z7J6R7ZWE7JqUXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgIHsgdGl0bGU6ICdOYW1lJywgZmllbGQ6ICduYW1lJyAsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAgeyB0aXRsZTogJ1N1cm5hbWUnLCBmaWVsZDogJ3N1cm5hbWUnIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdCaXJ0aCBZZWFyJywgZmllbGQ6ICdiaXJ0aFllYXInIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdQaG9uZScgLCBmaWVsZDoncGhvbmUnLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dlbmRlcicsXHJcbiAgICAgICAgZmllbGQ6ICdnZW5kZXInLFxyXG4gICAgICAgIGxvb2t1cDogeyAxOiAnTWFsZScsIDI6ICdGZW1hbGUnIH1cclxuICAgICAgfSxcclxuICAgICAgeyB0aXRsZTogJ01lbW8nICwgZmllbGQ6J21lbW8nfVxyXG4gICAgXSxcclxuICAgIGRhdGE6IFtcclxuICAgICAgeyBuYW1lOiAnTWVobWV0Jywgc3VybmFtZTogJ0JhcmFuJywgYmlydGhZZWFyOiAxOTgzLCBwaG9uZTonMDEwNDY1MDk5OTUnICxnZW5kZXI6IDEgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnQWRhbScsIHN1cm5hbWU6ICdBZGFtJywgYmlydGhZZWFyOiAxOTg0LCBwaG9uZTonMDEwNDY1MDk3OTUnICxnZW5kZXI6IDIgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnTWVobWV0Jywgc3VybmFtZTogJ0F0b20nLCBiaXJ0aFllYXI6IDE5ODUsIHBob25lOicwMTA0NjUwOTY5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdtdWwnLCBzdXJuYW1lOiAnS29uZ25hJywgYmlydGhZZWFyOiAxOTg2LCBwaG9uZTonMDEwNDY1MDkxOTUnICxnZW5kZXI6IDEgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnSmFjaycsIHN1cm5hbWU6ICdKYWNrJywgYmlydGhZZWFyOiAxOTg3LCBwaG9uZTonMDEwNDY1MDkyOTUnICxnZW5kZXI6IDIgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnQm9iJywgc3VybmFtZTogJ0JvYicsIGJpcnRoWWVhcjogMTk4OCwgcGhvbmU6JzAxMDQ2NTA5Mzk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ01laG1ldCcsIHN1cm5hbWU6ICdCaWxsJywgYmlydGhZZWFyOiAxOTg5LCBwaG9uZTonMDEwNDY1MDk0OTUnICxnZW5kZXI6IDEgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnSm9obnNvbicsIHN1cm5hbWU6ICdKb2huc29uJywgYmlydGhZZWFyOiAxOTkwLCBwaG9uZTonMDEwNDY1MDk4OTUnICxnZW5kZXI6IDIgLCBtZW1vOicnfSxcclxuICAgIF0sXHJcbiAgfSk7XHJcbiAgY29uc3QgTWFyZ2luID0gKCkgPT4gKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PjwvQm94Pik7ICAvLyDsl6zrsLFcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcbiAgICBzZXRTbmFjayh7b3BlbjogZmFsc2UgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldERpYWxvZyh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgICA8TWFudWFsRGlhbG9nIG9wZW49e2RpYWxvZy5vcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0vPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICB0aXRsZT1cIk1hbmFnZW1lbnQgQXBwXCJcclxuICAgICAgY29sdW1ucz17c3RhdGUuY29sdW1uc31cclxuICAgICAgZGF0YT17c3RhdGUuZGF0YX1cclxuICAgICAgbG9jYWxpemF0aW9uPXtsb2NhbGl6YXRpb259IC8vIOuhnOy7rOudvOydtOymiFxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfSAvLyDrgrTrs7TrgrTquLAsIOq3uOujqO2VkVxyXG4gICAgICBhY3Rpb25zPXtbLy8g66mA7YuwIOyFgOugieyFmCDsnpHsl4VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvb2x0aXAgOiAnUmVtb3ZlIEFsbCBTZWxlY3RlZCBVc2VycycsXHJcbiAgICAgICAgICAgIGljb24gOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgb25DbGljayA6IChlICwgZGVsZXRpb25zKSA9PiB7ICAvLyDshKDtg53tlZwg7LK07YGs67CV7Iqk7JeQIOuMgO2VtCDrqqjrkZAg7IKt7KCcIOynhO2WiVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5zdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShkYXRhLmluZGV4T2YodiksIDEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2RGF0YSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLnByZXZEYXRhICwgZGF0YX07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXX0gXHJcbiAgICAgIGVkaXRhYmxlPXt7XHJcbiAgICAgICAgb25Sb3dBZGQ6IChuZXdEYXRhKSA9PiAgLy8g7LaU6rCAXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIG9uUm93VXBkYXRlOiAobmV3RGF0YSwgb2xkRGF0YSkgPT4gIC8vIOyImOyglVxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgIGlmIChvbGREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhW2RhdGEuaW5kZXhPZihvbGREYXRhKV0gPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxNYXJnaW4vPlxyXG4gICAgPFNuYWNrYmFyXHJcbiAgICBvcGVuPXtzbmFjay5vcGVufVxyXG4gICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6J3RvcCcsIGhvcml6b250YWw6J2NlbnRlcicgfX1cclxuICAgID5cclxuICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PVwic3VjY2Vzc1wiIHZhcmlhbnQ9J2ZpbGxlZCcgbWVzc2FnZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicsIGZvbnRTaXplOic1cmVtJ319PlxyXG4gICAgICAgICAgICBuZWVkIHNvbWUgaGVscD8gPyBkb3VibGUtY2xpY2sgYW55IHNwYWNlICFcclxuICAgICAgICA8L0FsZXJ0PlxyXG4gICAgPC9TbmFja2Jhcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn0iLCJcclxuaW1wb3J0IHtEaWFsb2csXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIExpc3QsXHJcbiAgICBMaXN0SXRlbSxcclxuICAgIExpc3RJdGVtVGV4dCxcclxuICAgIEJveCxcclxuICAgIG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gICAgaWNvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICczdncnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbnVhbERpYWxvZyAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge29wZW4sIG9uQ2xvc2V9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpY29ucyA9IFtcclxuICAgICAgICB7aWNvbiA6ICdhZGRfYm94JyAsIGRlc2NyaXB0aW9uIDogJ1tBZGRdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJ1tFZGl0XSByZWNvcmRzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NlYXJjaCcgLCBkZXNjcmlwdGlvbiA6ICdUeXBlIGRvd24gd29yZHMgdG8gW3NlYXJjaF0uJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2F2ZV9hbHQnICwgZGVzY3JpcHRpb24gOiAnW0Rvd25sb2FkXSBmaWxlcyBpbiBDVlMgZm9ybWF0Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ3ZpZXdfd2VlaycgLCBkZXNjcmlwdGlvbiA6ICdbU2VsZWN0XSBjb2x1bW5zIHRvIGJlIGRpc3BsYXllZCd9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtkZWxldGVdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY2hlY2tfYm94JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgU2VsZWN0IHRoZSBjaGVja2JveCBvbiB0aGUgcm93Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ2ZhY3RfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDaGVjayB0aGUgbnVtYmVyIG9mIHRoZSByb3dzIHNlbGVjdGVkLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2RlbGV0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGiIENsaWNrIHRoZSBiaW4gaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUuJ30sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgb25DbG9zZT17b25DbG9zZX0gb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPiBCQVNJQyBNQU5VQUwgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbnMubWFwKChpY29uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17YCR7aWNvbn0gKyAke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17YG1hdGVyaWFsLWljb25zICR7Y2xhc3Nlcy5pY29ufWB9IHN0eWxlPXt7d2lkdGg6JzN2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aWNvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICA8L0RpYWxvZz5cclxuICAgIClcclxufSIsIlxyXG4vLyBEQVRBIFRBQkxFIE9QVElPTlNcclxuXHJcbiBleHBvcnQgY29uc3Qgb3B0aW9ucz0ge1xyXG4gICAgZXhwb3J0QnV0dG9uOiB0cnVlLFxyXG4gICAgZ3JvdXBpbmc6dHJ1ZSxcclxuICAgIHNlbGVjdGlvbjp0cnVlLFxyXG4gICAgaGVhZGVyU3R5bGU6eyBcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnNDb2x1bW5JbmRleDotMSwgIC8vIOyVoeyFmCDslYTsnbTsvZjsnITsuZhcclxuICAgIGNvbHVtbnNCdXR0b24gOiB0cnVlLCAgIC8vIFxyXG4gICAgZGVib3VuY2VJbnRlcnZhbCA6IDE2MCwgLy8g66Gc65Sp7Iuc6rCEXHJcbiAgICBwYWdlU2l6ZSA6IDIwLCAgICAgICAgICAvLyDtjpjsnbTsp4DsgqzsnbTspohcclxuICAgIHBhZ2VTaXplT3B0aW9ucyA6IFs1LCAxMCwgMjAsIDUwLCAxMDBdLCAvLyDtjpjsnbTspogg7IKs7J207KaIIOyiheulmFxyXG4gIH1cclxuIGV4cG9ydCBjb25zdCBsb2NhbGl6YXRpb24gPSB7XHJcbiAgICBwYWdpbmF0aW9uIDogeyBsYWJlbERpc3BsYXllZFJvd3MgOiAne2NvdW50fSByb3dzIHwge2Zyb219LXt0b30nICwgfSxcclxuICAgIHRvb2xiYXI6IHtuUm93c1NlbGVjdGVkOiAnezB9IHJvdyhzKSBzZWxlY3RlZCd9LFxyXG4gICAgaGVhZGVyOiB7YWN0aW9uczogJ0VkaXQnfSxcclxuICAgIGJvZHk6IHtlbXB0eURhdGFTb3VyY2VNZXNzYWdlOiAnTm8gcmVjb3JkIHRvIGRpc3BsYXkuLiBDbGljayB0aGUgWytdIGJ1dHRvbiBvbiB0aGUgcmlnaHQtdG9wJyx9XHJcbiAgfVxyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtEcmF3ZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtHcmlkfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7RGl2aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7QXBwQmFyIGFzIEFwcGJhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1Rvb2xiYXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhpZGVPblNjaHJvbGwgZnJvbSBcIi4uL3V0aWwvSGlkZU9uU2Nocm9sbFwiO1xyXG5pbXBvcnQgU2lkZU1lbnVMaXN0IGZyb20gXCIuL1NpZGVNZW51TGlzdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IFNpZ25PdXRCdXR0b24gZnJvbSBcIi4vU2lnbk91dEJ1dHRvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDoxOCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOjE4LFxyXG4gICAgfSxcclxuICAgIGxlZnQgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6MzAsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1zdGFydCdcclxuICAgIH0sXHJcbiAgICBjZW50ZXIgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgcmlnaHQgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6NDUsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1lbmQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nOmAwICR7dGhlbWUuc3BhY2luZygzKX1gXHJcbiAgICB9XHJcbiAgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYgKHByb3BzKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBtZW51IDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3IsIG9wZW4pID0+IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBvcGVuIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGFuY2hvciA9IHByb2ZpbGUgPyAnTVlQQUdFJyA6ICdMT0dJTic7XHJcbiAgICBjb25zdCBsaW5rcyA9IFsnYm9hcmQnLCdtYW5hZ2VtZW50J107XHJcbiAgICBjb25zdCBMb2dvdXRCdG4gPSBwcm9maWxlPyA8U2lnbk91dEJ1dHRvbi8+IDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGlkZU9uU2Nocm9sbCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxBcHBiYXIgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Ym94U2hhZG93Oidub25lJ319PlxyXG4gICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiBIb21lIDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7bGlua31gfSBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0ga2V5PXtsaW5rfT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4ge2xpbmt9IDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+PHNwYW4+PC9zcGFuPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FuY2hvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7TG9nb3V0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXIgb3Blbj17c3RhdGVbYW5jaG9yXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1NpZGVNZW51TGlzdCggey4uLnByb3BzLCBhbmNob3IgLHRvZ2dsZURyYXdlciAsIHByb2ZpbGV9ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwYmFyPlxyXG4gICAgICAgIDwvSGlkZU9uU2Nocm9sbD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUF2YXRhciAsIERpdmlkZXIsIExpc3RJdGVtLCBUeXBvZ3JhcGh5ICwgQXZhdGFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi9TaWduSW5CdXR0b24nO1xyXG5pbXBvcnQgZ29vZ2xlU2lnbmluIGZyb20gJy4uL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmcnO1xyXG5pbXBvcnQgbG9naW5VcmwgZnJvbSAnLi4vdXRpbC9nb29nbGVBdXRoJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxpc3QgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMjJ2dycsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nIDogJzEuM3ZoIDEuNXZ3J1xyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtVGV4dCA6IHtcclxuICAgICAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbGFyZ2VBdmF0YXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICB9LFxyXG4gICAgaW5saW5lIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnaW5saW5lJ1xyXG4gICAgfSxcclxuICAgIGxpc3RUZXh0IDoge1xyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUxpc3QgKHthbmNob3IgLCB0b2dnbGVEcmF3ZXIsIHByb2ZpbGV9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrTG9naW4gKGxvZ2luVXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihsb2dpblVybCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IHByb2ZpbGU/IHRydWUgOiBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKGBwcm9maWxlIDogJHtKU09OLnN0cmluZ2lmeShwcm9maWxlKX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxyXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXNMb2dnZWQ/ICdQUk9GSUxFJyA6ICdMT0dJTiBNRU5VJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuXHJcbiAgICAgICAgICAgIHtpc0xvZ2dlZD8gXHJcblxyXG4gICAgICAgICAgICAoPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtwcm9maWxlLnBpY3R1cmV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZUF2YXRhcn0gYWx0PXtwcm9maWxlLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvZmlsZS5uYW1lfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRleHR9PjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgdmFyaWFudD1cImluc2V0XCIgY29tcG9uZW50PVwibGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0VNQUlMIDogJyBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3NwYW4nIHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dFByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAoPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IG9uQ2xpY2s9eygpPT5oYW5kbGVPbkNsaWNrTG9naW4obG9naW5VcmwpfT5cclxuICAgICAgICAgICAgICAgIDxTaWduSW5CdXR0b24gc2lnbkluPXtnb29nbGVTaWduaW59Lz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT4pfVxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMsQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5CdXR0b24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtzaWduSW59ID0gcHJvcHM7IC8vIOydtOuvuOyngFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2lnbklufSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT48L2ltZz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHAnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSAsIEljb25CdXR0b24sIFRvb2x0aXB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IExvZ291dENvbnRleHQgfSBmcm9tICcuLi9hcHAnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBsb2dvdXQgOiB7XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJyxcclxuICAgICAgICBwYWRkaW5nIDogJzJweCcsXHJcbiAgICAgICAgbWFyZ2luIDogMCxcclxuICAgICAgICB3aWR0aCA6ICdhdXRvJyxcclxuICAgIH1cclxufSkpXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgZm9udFdlaWdodDonYm9sZCdcclxuICAgIH0sXHJcbiAgfSkpKFRvb2x0aXApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBzZXRQcm9maWxlID0gUmVhY3QudXNlQ29udGV4dChMb2dvdXRDb250ZXh0KTtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBzZXRQcm9maWxlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT0nTG9nLW91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3twYWRkaW5nOjR9fSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhpdFRvQXBwSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+ICAgIFxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGUnO1xyXG5cclxuLy8gR05C7J2YIOyKrOudvOydtOuTnOq4sOuKpVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWRlT25TY3JvbGwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGUgYXBwZWFyPXtmYWxzZX0gZGlyZWN0aW9uPVwiZG93blwiIGluPXshdHJpZ2dlcn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2xpZGU+XHJcbiAgKTtcclxufSIsImltcG9ydCBxcyBmcm9tICdxcydcclxuLy8gR29vZ2xlIE9wZW5JRCBDb25uZWN0IOydtOyaqe2VmOq4sFxyXG4vLyDssLjqs6Ag6riw7Iig67iU66Gc6re4IDogaHR0cHM6Ly93d3cuZGFsZXNlby5jb20vZ29vZ2xlLW9pZGMvXHJcblxyXG4vLyBjbGllbnQgSUQgOiAxMDI5NTQzNzM3MzA0LXFwZjRnOTZtZzNxY2hrZ2VmaWdqdDNyajVya3FtbG9nLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXHJcbi8vIHNlY3JldCA6IHBDaDdvVmNlRE5UU3RvX2FYMTd4R0pIYVxyXG5jb25zdCBDTElFTlRfSUQgPSAnMTAyOTU0MzczNzMwNC1xcGY0Zzk2bWczcWNoa2dlZmlnanQzcmo1cmtxbWxvZy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSc7XHJcbmNvbnN0IEFVVEhPUklaRV9VUkkgPSBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoXCI7XHJcbmNvbnN0IHF1ZXJ5c3RyID0gcXMuc3RyaW5naWZ5KHtcclxuICAgIGNsaWVudF9pZCA6IENMSUVOVF9JRCxcclxuICAgIHJlZGlyZWN0X3VyaSA6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnLFxyXG4gICAgcmVzcG9uc2VfdHlwZSA6ICd0b2tlbiBpZF90b2tlbicsXHJcbiAgICBzY29wZSA6ICdvcGVuaWQgcHJvZmlsZSBlbWFpbCcsIC8vIGNvbnRhY3QgQVBJ66W8IOydveq4sOyghOyaqeycvOuhnCDtmLjstpxcclxuICAgIG5vbmNlOlxyXG4gICAgTWF0aC5yYW5kb20oKVxyXG4gICAgICAudG9TdHJpbmcoMzYpXHJcbiAgICAgIC5zdWJzdHJpbmcoMiwgMTUpICtcclxuICAgIE1hdGgucmFuZG9tKClcclxuICAgICAgLnRvU3RyaW5nKDM2KVxyXG4gICAgICAuc3Vic3RyaW5nKDIsIDE1KSxcclxufSlcclxuXHJcbi8vIFVSTCBleHBvcnRcclxuZXhwb3J0IGRlZmF1bHQgQVVUSE9SSVpFX1VSSSArIFwiP1wiICsgcXVlcnlzdHI7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9