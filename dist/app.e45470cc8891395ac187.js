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
/* harmony import */ var _management_Headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./management/Headers */ "./src/management/Headers.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _home_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/Home */ "./src/home/Home.js");
/* harmony import */ var _src_footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/footer/Footer */ "./src/footer/Footer.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var _util_LoginAPI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/LoginAPI */ "./src/util/LoginAPI.js");
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
  var _qs$parse = qs__WEBPACK_IMPORTED_MODULE_8___default.a.parse(window.location.hash.substr(1)),
      id_token = _qs$parse.id_token;

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_9__["useCookies"])(['profile', 'user']),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  var _React$useState = React.useState(cookies.profile),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      profile = _React$useState2[0],
      setProfile = _React$useState2[1];

  var token = cookies.user;
  React.useEffect(function () {
    if (id_token) {
      console.log('fetch API 실행');
      Object(_util_LoginAPI__WEBPACK_IMPORTED_MODULE_10__["getTokenAndProfile"])(id_token).then(function (data) {
        var name = data.name,
            email = data.email,
            picture = data.picture;
        console.log("response data : ".concat(JSON.stringify(data)));
        setCookie("profile", {
          name: name,
          email: email,
          picture: picture
        }, {
          path: "/",
          maxAge: 7200
        }); // maxAge : 2시간
      })["catch"](function (err) {
        console.log("error occured : ".concat(err));
      });
    }
  }, [id_token]);
  React.useEffect(function () {
    // 기존 토큰이 있을 경우 서버로 재요청해서 만료된 토큰인지 확인
    // 만료된 토큰일 경우 쿠키프로필, state프로필, 만료된 토큰 모두 제거
    if (token) {
      console.log("\uAE30\uC874 \uD1A0\uD070 \uC788\uC74C token : ".concat(token));
    }
  }, [token]);
  React.useEffect(function () {
    if (cookies.profile) {
      console.log("cookies.profile : ".concat(JSON.stringify(cookies.profile)));
      setProfile(cookies.profile);
    }
  }, [cookies.profile]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: profile || {
      name: ''
    }
  }, "          ", /*#__PURE__*/React.createElement(LogoutContext.Provider, {
    value: setProfile
  }, "   ", /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CssBaseline"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], null, /*#__PURE__*/React.createElement(_nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    exact: true,
    path: "/",
    component: _home_Home__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/board",
    component: _board_Board__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/management",
    component: _management_Management__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/headers",
    component: _management_Headers__WEBPACK_IMPORTED_MODULE_4__["default"]
  }))), /*#__PURE__*/React.createElement(_src_footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

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

/***/ "./src/customHook/HideOnSchroll.js":
/*!*****************************************!*\
  !*** ./src/customHook/HideOnSchroll.js ***!
  \*****************************************/
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

/***/ "./src/customHook/useOnFirstRender.js":
/*!********************************************!*\
  !*** ./src/customHook/useOnFirstRender.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useOnFirstRender; });
// contstructor 훅
function useOnFirstRender(func) {
  var isFirstRef = React.useRef(true);

  if (isFirstRef.current) {
    isFirstRef.current = false;
    func();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

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
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/arrow.png */ "./src/images/arrow.png");








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
      width: '8vw',
      height: '8vh',
      alignSelf: 'center',
      background: "no-repeat center/80% url(".concat(_images_arrow_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")"),
      marginBottom: '2vh',
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
/* harmony import */ var _images_wood2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/wood2.jpg */ "./src/images/wood2.jpg");
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
      backgroundImage: "url(".concat(_images_wood2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
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
    color: "secondary",
    variant: "outlined",
    startIcon: /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["PlayArrowSharp"], {
      color: "secondary",
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

/***/ "./src/images/arrow.png":
/*!******************************!*\
  !*** ./src/images/arrow.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "arrow.d08328f62d19b66f8ea8d6d006724c8b.png");

/***/ }),

/***/ "./src/images/management-background.jpg":
/*!**********************************************!*\
  !*** ./src/images/management-background.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "management-background.a008de8139581b0dabf1832ed1c9c46e.jpg");

/***/ }),

/***/ "./src/images/wood2.jpg":
/*!******************************!*\
  !*** ./src/images/wood2.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "wood2.dc3dfeb18edf546f7718cbd7d5c09741.jpg");

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
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");



react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/React.createElement(react_cookie__WEBPACK_IMPORTED_MODULE_2__["CookiesProvider"], null, /*#__PURE__*/React.createElement(_app_js__WEBPACK_IMPORTED_MODULE_1__["default"], null)), document.getElementById('root'));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/management/DefaultPage.js":
/*!***************************************!*\
  !*** ./src/management/DefaultPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultPage; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _images_management_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/management-background.jpg */ "./src/images/management-background.jpg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    container: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundImage: "url(".concat(_images_management_background_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
    },
    button: {
      fontWeight: 'bolder',
      margin: theme.spacing(1)
    },
    buttonContainer: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(1)
    },
    text: _objectSpread(_objectSpread({}, theme.typography.button), {}, {
      backgroundColor: 'inherit',
      textShadow: '0.5px 0.5px 1px #0000005c',
      margin: '0 1vw 1.7vh',
      color: '#6a748c'
    })
  };
});
var defaultData = {
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
    field: 'gender'
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
  }]
};
function DefaultPage(_ref) {
  var state = _ref.state,
      setState = _ref.setState,
      match = _ref.match;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fade = _React$useState2[0],
      setFade = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      fade2 = _React$useState4[0],
      setFade2 = _React$useState4[1];

  var classes = useStyles();

  var handleOnDEMOClick = function handleOnDEMOClick() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      columns: defaultData.columns,
      data: defaultData.data,
      defaultPage: !state.defaultPage
    }));
  };

  React.useEffect(function () {
    setFade(true);
    setTimeout(setFade2(true), 1500);
  }, []);
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": fade,
    timeout: {
      enter: 800,
      exit: 500
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.container
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h1",
    color: "textSecondary"
  }, "Management Table"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle2",
    gutterBottom: true
  }, "\uC190\uC27D\uAC8C \uC0AC\uC6A9\uD560 \uC788\uB294 \uB370\uC774\uD130 \uD14C\uC774\uBE14\uC785\uB2C8\uB2E4. \uCC98\uC74C\uC774\uB77C\uBA74 DEMO \uB97C \uCCB4\uD5D8\uD574\uBCF4\uAC70\uB098 \uBC14\uB85C \uC2DC\uC791\uD574\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": fade2,
    timeout: {
      enter: 3000,
      exit: 500
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.buttonContainer
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: classes.button,
    variant: "contained",
    color: "secondary",
    size: "large",
    onClick: handleOnDEMOClick
  }, "USE DEMO"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/headers",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: classes.button,
    variant: "contained",
    color: "primary",
    size: "large"
  }, "GET STARTED RIGHT AWAY"))))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/management/Headers.js":
/*!***********************************!*\
  !*** ./src/management/Headers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Headers; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _images_management_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/management-background.jpg */ "./src/images/management-background.jpg");
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/arrow.png */ "./src/images/arrow.png");
/* harmony import */ var _util_ManagementAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ManagementAPI */ "./src/util/ManagementAPI.js");
/* harmony import */ var _customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customHook/useOnFirstRender */ "./src/customHook/useOnFirstRender.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SnackBar */ "./src/management/SnackBar.js");
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









var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    container: {
      width: '100%',
      height: '120vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundImage: "url(".concat(_images_management_background_jpg__WEBPACK_IMPORTED_MODULE_1__["default"], ")")
    },
    paper: {
      flexDirection: 'column',
      alignContent: 'space-around',
      marginTop: '10vh'
    },
    formRoot: {
      '& > *': {
        margin: '0.5vh 1vw',
        width: '60ch',
        minWidth: '40ch',
        display: 'flex'
      }
    },
    arrow: {
      width: '10vw',
      height: '10vh',
      alignSelf: 'center',
      background: "no-repeat center/80% url(".concat(_images_arrow_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")"),
      backgroundSize: 'contain',
      marginLeft: '3vw',
      transform: 'rotate(90deg)'
    },
    description: {
      alignSelf: 'center'
    }
  };
});
var defaultHeader = {
  "header0": '',
  "header1": '',
  "header2": '',
  "header3": '',
  "header4": '',
  "header5": '',
  "header6": '',
  "header7": '',
  "header8": '',
  "header9": ''
};
function Headers(_ref) {
  var existingHeaders = _ref.existingHeaders;

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_5__["useCookies"])(['profile', 'user']),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  var handleLogout = function handleLogout() {
    // 모든 쿠키 삭제와 profile제거
    removeCookie('profile');
    removeCookie('user');
    location.href = location.origin;
  };

  var classes = useStyle(); // states

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fade = _React$useState2[0],
      setFade = _React$useState2[1];

  var _React$useState3 = React.useState({
    open: false
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      snack = _React$useState4[0],
      setSnack = _React$useState4[1];

  var _React$useState5 = React.useState({
    open: false,
    content: ''
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      resultSnack = _React$useState6[0],
      setResultSnack = _React$useState6[1];

  var _React$useState7 = React.useState({
    headers: defaultHeader,
    groupings: Array(10).fill(false)
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      data = _React$useState8[0],
      setData = _React$useState8[1]; // effects


  React.useEffect(function () {
    setFade(true);
  }, []);
  Object(_customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_3__["getManagementTable"])().then(function (response) {
      console.log("response : ".concat(JSON.stringify(response)));

      if (response.status === 200 && response.data.headers) {
        var groupingLength = response.data.groupings.length;

        var groupings = _toConsumableArray(response.data.groupings);

        for (var i = 0; i < 10 - groupingLength; i++) {
          groupings.push(false);
        }

        var headers = response.data.headers;
        var headersLength = Object.values(headers).length;

        for (var _i2 = headersLength; _i2 < 10; _i2++) {
          headers["header".concat(_i2)] = '';
        }

        setData({
          headers: headers,
          groupings: groupings
        });
      } else {
        if (response.status === 204) {
          // unauthorized
          setTimeout(handleLogout(), 2000);
          setResultSnack({
            open: true,
            status: 'error',
            content: "Please log in again."
          });
        } else {
          setResultSnack({
            open: true,
            status: 'error',
            content: "error (code : ".concat(response.status, ")")
          });
        }
      }
    })["catch"](function (err) {
      console.log(err);
      setTimeout(handleLogout(), 2000);
      setResultSnack({
        open: true,
        status: 'error',
        content: 'Please log in again.'
      });
    });
  }); // events

  var handleSubmit = function handleSubmit(headers, groupings) {
    if (!Object.values(headers).every(function (v) {
      return v.length <= 15;
    })) {
      // 15글자 이상 제한 에러메세지
      setSnack({
        open: true
      });
      return;
    }

    if (Object.values(headers).filter(function (v) {
      return v;
    }).length === 0) {
      // 비어있을 경우 에러메세지
      setSnack({
        open: true
      });
      return;
    }

    Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_3__["saveHeaders"])(headers, groupings).then(function (response) {
      setResultSnack({
        open: true,
        content: response.result
      });
    })["catch"](function (err) {
      setTimeout(handleLogout(), 2000);
      setResultSnack({
        open: true,
        status: 'error',
        content: 'Please log in again.'
      });
    });
  };

  var handleInputChange = function handleInputChange(e, index) {
    setData(_objectSpread(_objectSpread({}, data), {}, {
      headers: _objectSpread(_objectSpread({}, data.headers), {}, _defineProperty({}, "header".concat(index), e.target.value))
    }));
  };

  var handleGroupings = function handleGroupings(e, index) {
    setData(_objectSpread(_objectSpread({}, data), {}, {
      groupings: data.groupings.map(function (v, i) {
        return i === index ? e.target.checked : v;
      })
    }));
  }; // component


  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.container
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": fade,
    timeout: {
      enter: 1500
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    className: classes.paper,
    elevation: 4
  }, /*#__PURE__*/React.createElement("form", {
    className: classes.formRoot,
    onSubmit: handleSubmit,
    autoComplete: "off"
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    component: "div"
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h4",
    color: "textPrimary",
    style: {
      fontWeight: 'bolder'
    }
  }, "Header Edit Form"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    color: Object.values(data.headers).every(function (v) {
      return v.length <= 15;
    }) ? 'blue' : 'red'
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle2",
    color: "initial"
  }, "not more than 15 characters and without spaces :)"))), Object.values(data.headers).map(function (header, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
      required: index === 0 ? true : false,
      id: "".concat(index),
      key: index,
      label: "header-".concat(index + 1),
      value: data.headers["header".concat(index)],
      margin: "normal",
      onChange: function onChange(e) {
        return handleInputChange(e, index);
      },
      error: data.headers["header".concat(index)].length > 15 ? true : false
    }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
      title: "You can set grouping settings.\r\nWhen you set up grouping, you can manage tables by group.\r\nDo not use when unique values e.g.) Name, address, etc.",
      placement: "right",
      enterDelay: 200,
      leaveDelay: 200
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], {
      checked: data.groupings[index],
      onChange: function onChange(e) {
        return handleGroupings(e, index);
      }
    })), index === 0 ? /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      component: "span",
      className: classes.description
    }, "Enable Grouping!?") : null);
  })))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
    title: "SUBMIT",
    "aria-label": "submit",
    placement: "top",
    enterDelay: 200,
    leaveDelay: 400
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.arrow,
    onMouseOver: function onMouseOver(e) {
      return e.target.style.cursor = 'pointer';
    },
    onClick: function onClick() {
      return handleSubmit(data.headers, data.groupings);
    }
  })), /*#__PURE__*/React.createElement(_SnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: snack.open,
    onClose: function onClose() {
      return setSnack({
        open: false
      });
    },
    content: "Not more than 15 characters and without spaces,\n        Header must not be empty. :(",
    status: "error"
  }), /*#__PURE__*/React.createElement(_SnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: resultSnack.open,
    onClose: function onClose() {
      return setResultSnack({
        open: false
      });
    },
    content: resultSnack.content,
    status: resultSnack.status === 'error' ? 'error' : 'success'
  }));
}
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
/* harmony import */ var _ManualDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManualDialog */ "./src/management/ManualDialog.js");
/* harmony import */ var _TableOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableOptions */ "./src/management/TableOptions.js");
/* harmony import */ var _customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customHook/useOnFirstRender */ "./src/customHook/useOnFirstRender.js");
/* harmony import */ var _util_ManagementAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ManagementAPI */ "./src/util/ManagementAPI.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var _DefaultPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultPage */ "./src/management/DefaultPage.js");
/* harmony import */ var _util_parseData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/parseData */ "./src/util/parseData.js");
/* harmony import */ var _SaveButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SaveButton */ "./src/management/SaveButton.js");
/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SnackBar */ "./src/management/SnackBar.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_6__["useCookies"])(['profile', 'user']),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  var handleLogout = function handleLogout() {
    // 모든 쿠키 삭제와 profile제거
    removeCookie('profile');
    removeCookie('user');
    location.href = location.origin;
  }; // states


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
      savedSnack = _React$useState4[0],
      setSavedSnack = _React$useState4[1];

  var _React$useState5 = React.useState({
    open: false
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      errorSnack = _React$useState6[0],
      setErrorSnack = _React$useState6[1];

  var _React$useState7 = React.useState({
    open: false
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      dialog = _React$useState8[0],
      setDialog = _React$useState8[1];

  var _React$useState9 = React.useState({
    // 최초 API로 받아오는 동작필요
    defaultPage: true,
    hasTable: false,
    columns: [],
    data: []
  }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      state = _React$useState10[0],
      setState = _React$useState10[1];

  var tableRef = React.useRef(); // constructor

  Object(_customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    if (cookies.user) {
      // 쿠키에 토큰이 있을 경우 테이블 fetch API실행
      Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_5__["getManagementTable"])().then(function (response) {
        console.log("status : ".concat(response.status, " , data : ").concat(JSON.stringify(response.data))); // 유저 확인됐고 테이블도 비어있지 않을 경우

        if (response.status === 200 && response.data.headers) {
          setState({
            columns: Object(_util_parseData__WEBPACK_IMPORTED_MODULE_8__["default"])(response.data.headers, response.data.groupings),
            data: response.data.data,
            defaultPage: false,
            hasTable: true
          });
        }
      })["catch"](function (err) {
        console.log(err);
        setErrorSnack({
          open: true
        });
      });
    }
  }); // events

  var handleDialogClose = function handleDialogClose() {
    setDialog({
      open: false
    });
  };

  var handleOnSave = function handleOnSave() {
    // Material table 의 ref값에 접근해서 데이터 얻어오기
    // tableRef.current.dataManager
    var data = [];
    var groupings = [];
    var headers = tableRef.current.dataManager.columns.reduce(function (obj, v, i) {
      obj["header".concat(i)] = v.title;
      groupings.push(v.grouping);
      return obj;
    }, {});
    tableRef.current.dataManager.data.forEach(function (v, i) {
      var tableData = v.tableData,
          rest = _objectWithoutProperties(v, ["tableData"]);

      data.push(rest);
    }); // console.log(` result : 
    //   ${JSON.stringify(data)}
    //   ${groupings}
    //   ${JSON.stringify(headers)}
    // `)

    Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_5__["saveData"])(headers, groupings, data).then(function (result) {
      if (result.result === 'success') {
        setSavedSnack({
          open: true
        });
      } else {
        setErrorSnack({
          open: true
        });
      }
    });
  };

  React.useEffect(function () {
    // 최초렌더링시 도움말 Snack 출력
    setTimeout(function () {
      setSnack({
        open: true
      });
    }, 400);
  }, []); // effects

  React.useEffect(function () {
    // window 더블클릭 이벤트 추가, 도움말 open
    var ondbClick = function ondbClick() {
      return setDialog({
        open: !dialog.open
      });
    };

    var onKeydown = function onKeydown(e) {
      // ctrl + s로 저장 event
      if (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        handleOnSave();
      }
    };

    window.addEventListener('keydown', onKeydown);
    window.addEventListener('dblclick', ondbClick);
    return function () {
      window.removeEventListener('dblclick', ondbClick);
      window.removeEventListener('keydown', onKeydown);
    };
  }, []); // components

  var Margin = function Margin() {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        height: '100px'
      }
    });
  }; // 여백


  return state.defaultPage ? /*#__PURE__*/React.createElement(_DefaultPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    state: state,
    setState: setState
  }) : /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, /*#__PURE__*/React.createElement(_ManualDialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: dialog.open,
    onClose: handleDialogClose
  }), /*#__PURE__*/React.createElement(Margin, null), /*#__PURE__*/React.createElement(material_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
    tableRef: tableRef,
    title: /*#__PURE__*/React.createElement(_SaveButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setSavedSnack: setSavedSnack // 마운트 이후에 접근필요
      ,
      dataManager: tableRef.current ? tableRef.current.dataManager : {}
    }),
    columns: state.columns,
    data: state.data,
    localization: _TableOptions__WEBPACK_IMPORTED_MODULE_3__["localization"] // 로컬라이즈
    ,
    options: _TableOptions__WEBPACK_IMPORTED_MODULE_3__["options"] // 내보내기, 그루핑
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
              setState(function (prevState) {
                var data = _toConsumableArray(prevState.data);

                data.push(newData);
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  data: data
                });
              });
              resolve();
            }, 400);
          })
        );
      },
      onRowUpdate: function onRowUpdate(newData, oldData) {
        return (// 수정
          new Promise(function (resolve) {
            setTimeout(function () {
              if (oldData) {
                setState(function (prevState) {
                  var data = _toConsumableArray(prevState.data);

                  data[data.indexOf(oldData)] = newData;
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    data: data
                  });
                });
              }

              resolve();
            }, 400);
          })
        );
      }
    }
  }), /*#__PURE__*/React.createElement(Margin, null), /*#__PURE__*/React.createElement(_SnackBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: snack.open,
    onClose: function onClose() {
      return setSnack({
        open: false
      });
    },
    content: "need some help? ? double-click any space !",
    status: "success"
  }), /*#__PURE__*/React.createElement(_SnackBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: savedSnack.open,
    onClose: function onClose() {
      return setSavedSnack({
        open: false
      });
    },
    content: "SAVED !",
    status: "success"
  }), /*#__PURE__*/React.createElement(_SnackBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: errorSnack.open,
    onClose: function onClose() {
      return setErrorSnack({
        open: false
      });
    },
    content: "ERROR !",
    status: "error"
  }));
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
    description: ' ③ Click the Bin icon on the right above.'
  }, {
    icon: 'playlist_add_check',
    description: 'Follow the steps below to [Edit] headers.'
  }, {
    icon: 'menu',
    description: ' ① Open the MYPAGE'
  }, {
    icon: 'create',
    description: ' ② Click the Pencil icon'
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

/***/ "./src/management/SaveButton.js":
/*!**************************************!*\
  !*** ./src/management/SaveButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _util_ManagementAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ManagementAPI */ "./src/util/ManagementAPI.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setSavedSnack = _ref.setSavedSnack,
      dataManager = _ref.dataManager;

  function _onClick() {
    // SAVE EVENT util > ManagementAPI.saveData 만들어서 콜하기
    var data = [];
    var groupings = [];
    var headers = dataManager.columns.reduce(function (obj, v, i) {
      obj["header".concat(i)] = v.title;
      groupings.push(v.grouping);
      return obj;
    }, {});
    dataManager.data.forEach(function (v, i) {
      var tableData = v.tableData,
          rest = _objectWithoutProperties(v, ["tableData"]);

      data.push(rest);
    });
    console.log(" result : \n          ".concat(JSON.stringify(data), "\n          ").concat(groupings, "\n          ").concat(JSON.stringify(headers), "\n        "));
    Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_1__["saveData"])(headers, groupings, data).then(function (result) {
      if (result.result === 'success') {
        setSavedSnack({
          open: true
        });
      } else {
        setErrorSnack({
          open: true
        });
      }
    });
  }

  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
    title: "Click to SAVE ( Ctrl + S )"
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    style: {
      fontWeight: 'bolder'
    },
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      return _onClick();
    }
  }, "SAVE"));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/management/SnackBar.js":
/*!************************************!*\
  !*** ./src/management/SnackBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      content = _ref.content,
      status = _ref.status;
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Snackbar"], {
    open: open,
    onClose: onClose,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/React.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    onClose: onClose,
    severity: status,
    variant: "filled",
    message: {
      fontWeight: 'bolder',
      fontSize: '5rem'
    }
  }, content));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/management/TableOptions.js":
/*!****************************************!*\
  !*** ./src/management/TableOptions.js ***!
  \****************************************/
/*! exports provided: options, localization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return localization; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");

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
  debounceInterval: 160,
  // 로딩시간
  pageSize: 15,
  // 페이지사이즈
  pageSizeOptions: [5, 15, 30, 50, 100] // 페이즈 사이즈 종류

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
    emptyDataSourceMessage: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      variant: "text",
      color: "primary",
      size: "large",
      disabled: true,
      style: {
        fontWeight: 'bolder'
      },
      endIcon: /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["AddBox"], null)
    }, "No Record to display\n          Click the Button "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      variant: "text",
      color: "primary",
      size: "large",
      disabled: true,
      style: {
        fontWeight: 'bolder'
      }
    }, "on the right-top"))
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

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
/* harmony import */ var _customHook_HideOnSchroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customHook/HideOnSchroll */ "./src/customHook/HideOnSchroll.js");
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
  var anchor = profile.name ? 'MYPAGE' : 'LOGIN';
  var links = ['board', 'management'];
  var LogoutBtn = profile.name ? /*#__PURE__*/React.createElement(_SignOutButton__WEBPACK_IMPORTED_MODULE_6__["default"], null) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_customHook_HideOnSchroll__WEBPACK_IMPORTED_MODULE_3__["default"], props, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
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
/* harmony import */ var _util_LoginAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/LoginAPI */ "./src/util/LoginAPI.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");







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

  function handleOnClickLogin() {
    Object(_util_LoginAPI__WEBPACK_IMPORTED_MODULE_4__["redirectGoogleLogin"])();
  }

  var isLogged = profile ? profile.name ? true : false : false;
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
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    className: classes.listItem,
    divider: true
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    className: classes.listItem,
    divider: true
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Info"], {
    color: "primary",
    style: {
      marginRight: '1vw'
    }
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
    secondary: "EDIT HEADERS"
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "/headers"
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    edge: "end",
    "aria-label": "edit-header"
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Edit"], {
    color: "primary",
    fontSize: "large"
  })))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    className: classes.listItem,
    divider: true
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    className: classes.listItem,
    divider: true
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Warning"], {
    color: "secondary",
    style: {
      marginRight: '1vw'
    }
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
    secondary: "REMOVE ALL DATA"
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    edge: "end",
    "aria-label": "edit-header"
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["DeleteForever"], {
    color: "secondary",
    fontSize: "large"
  })))) : /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    button: true,
    className: classes.listItem,
    onClick: handleOnClickLogin
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
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





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

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_2__["useCookies"])(['profile', 'user']),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  var handleLogout = function handleLogout() {
    // 모든 쿠키 삭제와 profile제거
    removeCookie('profile');
    removeCookie('user');
    location.href = location.origin;
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

/***/ "./src/util/LoginAPI.js":
/*!******************************!*\
  !*** ./src/util/LoginAPI.js ***!
  \******************************/
/*! exports provided: redirectGoogleLogin, getTokenAndProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectGoogleLogin", function() { return redirectGoogleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenAndProfile", function() { return getTokenAndProfile; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serverURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverURL */ "./src/util/serverURL.js");

 // Google OpenID Connect 이용하기
// 참고 기술블로그 : https://www.daleseo.com/google-oidc/
// URL export
// sever에서 받은 url로 리다이렉트

var redirectGoogleLogin = function redirectGoogleLogin() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/login")).then(function (res) {
    return location.assign(res.data);
  });
};
var getTokenAndProfile = function getTokenAndProfile(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/login"), {
    token: token
  }, {
    withCredentials: true
  }).then(function (response) {
    return Promise.resolve(response.data);
  });
};

/***/ }),

/***/ "./src/util/ManagementAPI.js":
/*!***********************************!*\
  !*** ./src/util/ManagementAPI.js ***!
  \***********************************/
/*! exports provided: getManagementTable, saveHeaders, saveData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManagementTable", function() { return getManagementTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveHeaders", function() { return saveHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveData", function() { return saveData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serverURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverURL */ "./src/util/serverURL.js");

 // 테이블 데이터 받아오기 cookie에 담긴 token사용

var getManagementTable = function getManagementTable() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/management"), {
    withCredentials: true
  });
};
var saveHeaders = function saveHeaders(headers, groupings) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/headers"), {
    // data
    headers: headers,
    groupings: groupings
  }, {
    withCredentials: true
  }).then(function (res) {
    return Promise.resolve(res.data);
  }); // 쿠키와 함께
};
var saveData = function saveData(headers, groupings, data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/data"), {
    headers: headers,
    groupings: groupings,
    data: data
  }, {
    withCredentials: true
  }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/***/ }),

/***/ "./src/util/parseData.js":
/*!*******************************!*\
  !*** ./src/util/parseData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (headers, groupings) {
  console.log("data parsing!!!!");
  return Object.values(headers).filter(function (v) {
    return v;
  }).map(function (value, index) {
    return {
      title: value,
      field: value,
      grouping: groupings[index]
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Nyb3NzbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24yLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvU3RhcnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvd29vZDIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9EZWZhdWx0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9IZWFkZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvTWFudWFsRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1NhdmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvU25hY2tCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvVGFibGVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9Mb2dpbkFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9NYW5hZ2VtZW50QVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9zZXJ2ZXJVUkwuanMiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvdXRDb250ZXh0IiwiQXBwIiwicXMiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0ciIsImlkX3Rva2VuIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwidG9rZW4iLCJ1c2VyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImdldFRva2VuQW5kUHJvZmlsZSIsInRoZW4iLCJkYXRhIiwibmFtZSIsImVtYWlsIiwicGljdHVyZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwibWF4QWdlIiwiZXJyIiwiSG9tZSIsIkJvYXJkIiwiTWFuYWdlbWVudCIsIkhlYWRlcnMiLCJIaWRlT25TY3JvbGwiLCJwcm9wcyIsImNoaWxkcmVuIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJ1c2VPbkZpcnN0UmVuZGVyIiwiZnVuYyIsImlzRmlyc3RSZWYiLCJ1c2VSZWYiLCJjdXJyZW50IiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWluSGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJmb290ZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJncmV5IiwidGV4dEFsaWduIiwiYXJyb3ciLCJ3aWR0aCIsImhlaWdodCIsImFsaWduU2VsZiIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIlN0aWNreUZvb3RlciIsImNsYXNzZXMiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0cmFuc2l0aW9uIiwiZSIsInRhcmdldCIsInN0eWxlIiwiY3Vyc29yIiwibWFyZ2luIiwiZmxleFdyYXAiLCJhbGlnbkl0ZW1zIiwiQ3Jvc3NsaW5lIiwiZmFkZSIsInNldEZhZGUiLCJkb21SZWYiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJlbnRlciIsImV4aXQiLCJhbGlnbkNvbnRlbnQiLCJ6SW5kZXgiLCJwYXBlciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJmbGV4IiwidGV4dCIsIkludHJvZHVjdGlvbiIsImdyb3ciLCJzZXRHcm93IiwiY29sb3IiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0aW1lb3V0IiwiYmFja2dyb3VuZEltYWdlIiwid29vZDIiLCJNYWluIiwidXNlU3R5bGUiLCJidXR0b24iLCJ0eXBvZ3JhcGh5IiwidGV4dFNoYWRvdyIsImlubmVyQm94IiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRhaW5lciIsImZvbnRXZWlnaHQiLCJidXR0b25Db250YWluZXIiLCJkZWZhdWx0RGF0YSIsImNvbHVtbnMiLCJ0aXRsZSIsImZpZWxkIiwiZ3JvdXBpbmciLCJzdXJuYW1lIiwiYmlydGhZZWFyIiwicGhvbmUiLCJnZW5kZXIiLCJtZW1vIiwiRGVmYXVsdFBhZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwibWF0Y2giLCJmYWRlMiIsInNldEZhZGUyIiwiaGFuZGxlT25ERU1PQ2xpY2siLCJkZWZhdWx0UGFnZSIsInNldFRpbWVvdXQiLCJmb3JtUm9vdCIsIm1hcmdpbkxlZnQiLCJ0cmFuc2Zvcm0iLCJkZXNjcmlwdGlvbiIsImRlZmF1bHRIZWFkZXIiLCJleGlzdGluZ0hlYWRlcnMiLCJoYW5kbGVMb2dvdXQiLCJocmVmIiwib3JpZ2luIiwib3BlbiIsInNuYWNrIiwic2V0U25hY2siLCJjb250ZW50IiwicmVzdWx0U25hY2siLCJzZXRSZXN1bHRTbmFjayIsImhlYWRlcnMiLCJncm91cGluZ3MiLCJBcnJheSIsImZpbGwiLCJzZXREYXRhIiwiZ2V0TWFuYWdlbWVudFRhYmxlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJncm91cGluZ0xlbmd0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwiaGVhZGVyc0xlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImV2ZXJ5IiwidiIsImZpbHRlciIsInNhdmVIZWFkZXJzIiwicmVzdWx0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpbmRleCIsInZhbHVlIiwiaGFuZGxlR3JvdXBpbmdzIiwibWFwIiwiY2hlY2tlZCIsImhlYWRlciIsIk1hbmFnZW1lbnRUYWJsZSIsInNhdmVkU25hY2siLCJzZXRTYXZlZFNuYWNrIiwiZXJyb3JTbmFjayIsInNldEVycm9yU25hY2siLCJkaWFsb2ciLCJzZXREaWFsb2ciLCJoYXNUYWJsZSIsInRhYmxlUmVmIiwicGFyc2VEYXRhIiwiaGFuZGxlRGlhbG9nQ2xvc2UiLCJoYW5kbGVPblNhdmUiLCJkYXRhTWFuYWdlciIsInJlZHVjZSIsIm9iaiIsInRhYmxlRGF0YSIsInJlc3QiLCJzYXZlRGF0YSIsIm9uZGJDbGljayIsIm9uS2V5ZG93biIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwibWV0YUtleSIsImN0cmxLZXkiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1hcmdpbiIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJldkRhdGEiLCJvblJvd0FkZCIsIm5ld0RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZXZTdGF0ZSIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsIk1hbnVhbERpYWxvZyIsIm9uQ2xvc2UiLCJpY29ucyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImV4cG9ydEJ1dHRvbiIsInNlbGVjdGlvbiIsImhlYWRlclN0eWxlIiwiYWN0aW9uc0NvbHVtbkluZGV4IiwiY29sdW1uc0J1dHRvbiIsImRlYm91bmNlSW50ZXJ2YWwiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsInBhZ2luYXRpb24iLCJsYWJlbERpc3BsYXllZFJvd3MiLCJ0b29sYmFyIiwiblJvd3NTZWxlY3RlZCIsImFjdGlvbnMiLCJib2R5IiwiZW1wdHlEYXRhU291cmNlTWVzc2FnZSIsImZsZXhHcm93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsZWZ0IiwicGFkZGluZ0xlZnQiLCJqdXN0aWZ5IiwiY2VudGVyIiwicmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJOYXYiLCJtZW51IiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwiZXZlbnQiLCJ1c2VDb250ZXh0IiwibGlua3MiLCJMb2dvdXRCdG4iLCJib3hTaGFkb3ciLCJsaW5rIiwibWFyZ2luUmlnaHQiLCJTaWRlTWVudUxpc3QiLCJsaXN0IiwibGlzdEl0ZW0iLCJsaXN0SXRlbVRleHQiLCJsYXJnZUF2YXRhciIsImlubGluZSIsImxpc3RUZXh0IiwiTWVudUxpc3QiLCJoYW5kbGVPbkNsaWNrTG9naW4iLCJyZWRpcmVjdEdvb2dsZUxvZ2luIiwiaXNMb2dnZWQiLCJnb29nbGVTaWduaW5JbWFnZSIsIlNpZ25JbkJ1dHRvbiIsInNpZ25JbiIsImxvZ291dCIsIkxpZ2h0VG9vbHRpcCIsIndpdGhTdHlsZXMiLCJjb21tb24iLCJ3aGl0ZSIsInNoYWRvd3MiLCJUb29sdGlwIiwiYXhpb3MiLCJnZXQiLCJzZXJ2ZXJVUkwiLCJyZXMiLCJhc3NpZ24iLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwicHV0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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dUJrQixNQUF2QixDQUE4QixVQUFBRCxDQUFDO0FBQUEsV0FBRUEsQ0FBRjtBQUFBLEdBQS9CLEVBQW9DUSxHQUFwQyxDQUF3QyxVQUFDRixLQUFELEVBQU9ELEtBQVAsRUFBaUI7QUFDL0QsV0FBTztBQUNMdEQsV0FBSyxFQUFHdUQsS0FESDtBQUVMdEQsV0FBSyxFQUFHc0QsS0FGSDtBQUdMckQsY0FBUSxFQUFHK0IsU0FBUyxDQUFDcUIsS0FBRDtBQUhmLEtBQVA7QUFLRCxHQU5PLENBQVI7QUFPRCxDQVRILEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWUsc0ZBQWYsRSIsImZpbGUiOiJhcHAuZTQ1NDcwY2M4ODkxMzk1YWMxODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInJlYWN0LmJ1bmRsZVwiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIiBpbXBvcnQgeyBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXYvTmF2XCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZC9Cb2FyZFwiO1xyXG5pbXBvcnQgTWFuYWdlbWVudCBmcm9tIFwiLi9tYW5hZ2VtZW50L01hbmFnZW1lbnRcIjtcclxuaW1wb3J0IEhlYWRlcnMgZnJvbSAnLi9tYW5hZ2VtZW50L0hlYWRlcnMnO1xyXG5pbXBvcnQge0Nzc0Jhc2VsaW5lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9mb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnXHJcbmltcG9ydCB7IGdldFRva2VuQW5kUHJvZmlsZSB9IGZyb20gXCIuL3V0aWwvTG9naW5BUElcIjtcclxuXHJcbi8vIOy7qO2FjeyKpO2KuCDrqqnroZ1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTG9nb3V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IHsgaWRfdG9rZW4gfSA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICBjb25zdCBbIHByb2ZpbGUgLCBzZXRQcm9maWxlIF0gPSBSZWFjdC51c2VTdGF0ZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzLnVzZXI7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoIEFQSSDsi6TtloknKTtcclxuICAgICAgICAgICAgZ2V0VG9rZW5BbmRQcm9maWxlKGlkX3Rva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge25hbWUgLGVtYWlsLCBwaWN0dXJlfSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgZGF0YSA6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJwcm9maWxlXCIse25hbWUgLCBlbWFpbCwgcGljdHVyZX0se3BhdGg6XCIvXCIgLCBtYXhBZ2UgOiA3MjAwfSk7ICAvLyBtYXhBZ2UgOiAy7Iuc6rCEXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3Igb2NjdXJlZCA6ICR7ZXJyfWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbaWRfdG9rZW5dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyDquLDsobQg7Yag7YGw7J20IOyeiOydhCDqsr3smrAg7ISc67KE66GcIOyerOyalOyyre2VtOyEnCDrp4zro4zrkJwg7Yag7YGw7J247KeAIO2ZleyduFxyXG4gICAgICAgIC8vIOunjOujjOuQnCDthqDtgbDsnbwg6rK97JqwIOy/oO2CpO2UhOuhnO2VhCwgc3RhdGXtlITroZztlYQsIOunjOujjOuQnCDthqDtgbAg66qo65GQIOygnOqxsFxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg6riw7KG0IO2GoO2BsCDsnojsnYwgdG9rZW4gOiAke3Rva2VufWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3Rva2VuXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGNvb2tpZXMucHJvZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY29va2llcy5wcm9maWxlIDogJHtKU09OLnN0cmluZ2lmeShjb29raWVzLnByb2ZpbGUpfWApO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29va2llcy5wcm9maWxlXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvZmlsZSB8fCB7bmFtZSA6ICcnfX0+ICAgICAgICAgIHsvKiDsnKDsoIAg7ZSE66Gc7ZWEIOy7qO2FjeyKpO2KuCAgICAqL31cclxuICAgICAgICAgICAgPExvZ291dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldFByb2ZpbGV9PiAgIHsvKiDroZzqt7jslYTsm4Mg7J2067Kk7Yq4IOy7qO2FjeyKpO2KuCAgICovfVxyXG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17SG9tZX0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9ib2FyZCcgY29tcG9uZW50PXtCb2FyZH0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9tYW5hZ2VtZW50JyBjb21wb25lbnQ9e01hbmFnZW1lbnR9PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvaGVhZGVycycgY29tcG9uZW50PXtIZWFkZXJzfT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPC9Mb2dvdXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEJvYXJkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGVTaWduaW4uMWNlMWFhYTVhMTI3ZmEzZTQ5MmExMmJiNjJmOTkzMDQucG5nXCI7IiwiaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuXHJcbi8vIEdOQuydmCDsiqzrnbzsnbTrk5zquLDriqVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9IGRpcmVjdGlvbj1cImRvd25cIiBpbj17IXRyaWdnZXJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NsaWRlPlxyXG4gICk7XHJcbn0iLCJcclxuLy8gY29udHN0cnVjdG9yIO2bhVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPbkZpcnN0UmVuZGVyIChmdW5jKSB7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmMoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQge0JveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgIHsnQ29weXJpZ2h0IMKpICd9XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIEphY2sncyBXZWJzaXRlXHJcbiAgICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgICB7Jy4nfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIG1pbkhlaWdodDogJzIwdmgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcclxuICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjp0aGVtZS5wYWxldHRlLmdyZXlbMjAwXSxcclxuICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgYXJyb3cgOiB7XHJcbiAgICAgIHdpZHRoIDogJzh2dycsXHJcbiAgICAgIGhlaWdodCA6ICc4dmgnLFxyXG4gICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgYmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICBtYXJnaW5Cb3R0b206JzJ2aCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOidjb250YWluJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lGb290ZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJNb3ZlIHRvIFRvcFwiIGFyaWEtbGFiZWw9XCJtb3ZlLXRvLXRvcFwiIHBsYWNlbWVudD1cInRvcFwiIGVudGVyRGVsYXk9ezM1MH0gbGVhdmVEZWxheT17MTUwfT5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gb25Nb3VzZU92ZXI9eyhlKT0+dHJhbnNpdGlvbihlKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtGYWRlfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luOjAsXHJcbiAgICAgIHBhZGRpbmc6MCxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBoZWlnaHQgOiAnMTN2aCcsXHJcbiAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMTkxLDE4NSwxODUpJyxcclxuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMTkxLDE4NSwxODUsMSkgMjYlLCByZ2JhKDQ3LDEzNSwxNjYsMSkgNzclKScsXHJcbiAgICAgIHpJbmRleDoxMDAsXHJcbiAgICAgIG1hcmdpbjonYXV0bycsXHJcbiAgICAgIG9wYWNpdHk6MC43LFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9zc2xpbmUoe2NoaWxkcmVufSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy01MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MTAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBib3hTaGFkb3c9ezR9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSBcIi4vSW50cm9kdWN0aW9uXCI7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24yIGZyb20gXCIuL0ludHJvZHVjdGlvbjJcIjtcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGhlaWdodCA6ICczNTB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24vPlxyXG4gICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbjIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7R3Jvd30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ3Jvc3NsaW5lIGZyb20gJy4vQ3Jvc3NsaW5lJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgd2lkdGggOiAnOTB2dycsXHJcbiAgICAgICAgbWFyZ2luVG9wOictMTB2aCcsXHJcbiAgICAgICAgekluZGV4OjAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDg1MCxcclxuICAgICAgICBtaW5XaWR0aDogMzUwLFxyXG4gICAgICAgIHdpZHRoIDogJzUwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc3MHZoJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICAgIGZsZXggOiAyLFxyXG4gICAgfSxcclxuICAgIHRleHQgOiB7XHJcbiAgICAgICAgbWF4V2lkdGggOiA2NTAsXHJcbiAgICAgICAgbWluV2lkdGggOiAyMjUsXHJcbiAgICAgICAgd2lkdGggOiAnMzB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzUwdmgnLFxyXG4gICAgICAgIGZsZXggOiAxLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPENyb3NzbGluZT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgYWxpZ25TZWxmOidjZW50ZXInfX0+IFVzZXIncyBHdWlkZSA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Dcm9zc2xpbmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd30gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IDEwMDAgfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMjAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9ID48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dyb3d9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3ctcmV2ZXJzZScsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICc5MHZ3JyxcclxuICAgICAgICB6SW5kZXg6MCxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgbWF4V2lkdGg6IDg1MCxcclxuICAgICAgbWluV2lkdGg6IDM1MCxcclxuICAgICAgd2lkdGggOiAnNTB2dycsXHJcbiAgICAgIGhlaWdodCA6ICc3MHZoJyxcclxuICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgZmxleCA6IDIsXHJcbiAgfSxcclxuICB0ZXh0IDoge1xyXG4gICAgICBtYXhXaWR0aCA6IDY1MCxcclxuICAgICAgbWluV2lkdGggOiAyMjUsXHJcbiAgICAgIHdpZHRoIDogJzMwdncnLFxyXG4gICAgICBoZWlnaHQgOiAnNTB2aCcsXHJcbiAgICAgIGZsZXggOiAxLFxyXG4gICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9IFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcwIDAgMCcgfX1cclxuICAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMDAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMjAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHdvb2QyIGZyb20gXCIuLi9pbWFnZXMvd29vZDIuanBnXCI7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFN0YXJ0QnV0dG9uIGZyb20gXCIuL1N0YXJ0QnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7d29vZDJ9KWAsXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICByb290TWFyZ2luIDogJy0zNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz4gXHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50ID8gJ1dFTENPTUUhIScgOiAnUmVhZHkgdG8gc3RhcnQ/J31cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudD8gbnVsbCA6ICg8U3RhcnRCdXR0b24vPil9XHJcbiAgICAgICAgICAgIHsvKiAhaXNGaXJzdFJlZiDsnbwg7IucIOuwlOuhnOqwgOq4sCDrsoTtirwg7LaU6rCAICovfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHtCdXR0b24gLCBCb3gsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgUGxheUFycm93U2hhcnAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzAuNXZoJ1xyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzAuNXB4IDAuNXB4IDFweCAjMDAwMDAwNWMnLFxyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL21hbmFnZW1lbnQnIHN0eWxlPXt7dGV4dERlY29yYXRpb246J25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdvdXRsaW5lZCcgc3RhcnRJY29uPXs8UGxheUFycm93U2hhcnAgY29sb3I9J3NlY29uZGFyeScgc3R5bGU9e3tmb250U2l6ZSA6IDMwfX0vPn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURURcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIHtg7KeA6riIIOuwlOuhnCDsi5zsnpHtlbTrs7TshLjsmpQuYH1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFycm93LmQwODMyOGY2MmQxOWI2NmY4ZWE4ZDZkMDA2NzI0YzhiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYW5hZ2VtZW50LWJhY2tncm91bmQuYTAwOGRlODEzOTU4MWIwZGFiZjE4MzJlZDFjOWM0NmUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndvb2QyLmRjM2RmZWIxOGVkZjU0NmY3NzE4Y2JkN2Q1YzA5NzQxLmpwZ1wiOyIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICAoPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8QXBwLz5cclxuICAgIDwvQ29va2llc1Byb3ZpZGVyPilcclxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmFkZSwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnXHJcbmltcG9ydCB7IExpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBjb250YWluZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfSxcclxuICAgIGJ1dHRvbkNvbnRhaW5lciA6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzAuNXB4IDAuNXB4IDFweCAjMDAwMDAwNWMnLFxyXG4gICAgICAgIG1hcmdpbiA6ICcwIDF2dyAxLjd2aCcsXHJcbiAgICAgICAgY29sb3I6ICcjNmE3NDhjJyxcclxuICAgIH0sXHJcbn0pKTtcclxuY29uc3QgZGVmYXVsdERhdGEgPSB7XHJcbiAgICBjb2x1bW5zIDogW1xyXG4gICAgICB7IHRpdGxlOiAnTmFtZScsIGZpZWxkOiAnbmFtZScgLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHsgdGl0bGU6ICdTdXJuYW1lJywgZmllbGQ6ICdzdXJuYW1lJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnQmlydGggWWVhcicsIGZpZWxkOiAnYmlydGhZZWFyJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnUGhvbmUnICwgZmllbGQ6J3Bob25lJywgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgICAgIGZpZWxkOiAnZ2VuZGVyJyxcclxuICAgICAgfSxcclxuICAgICAgeyB0aXRsZTogJ01lbW8nICwgZmllbGQ6J21lbW8nfVxyXG4gICAgXSxcclxuICAgIGRhdGEgOiBbXHJcbiAgICAgIHsgbmFtZTogJ01laG1ldCcsIHN1cm5hbWU6ICdCYXJhbicsIGJpcnRoWWVhcjogMTk4MywgcGhvbmU6JzAxMDQ2NTA5OTk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0FkYW0nLCBzdXJuYW1lOiAnQWRhbScsIGJpcnRoWWVhcjogMTk4NCwgcGhvbmU6JzAxMDQ2NTA5Nzk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ01laG1ldCcsIHN1cm5hbWU6ICdBdG9tJywgYmlydGhZZWFyOiAxOTg1LCBwaG9uZTonMDEwNDY1MDk2OTUnICxnZW5kZXI6IDEgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnbXVsJywgc3VybmFtZTogJ0tvbmduYScsIGJpcnRoWWVhcjogMTk4NiwgcGhvbmU6JzAxMDQ2NTA5MTk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0phY2snLCBzdXJuYW1lOiAnSmFjaycsIGJpcnRoWWVhcjogMTk4NywgcGhvbmU6JzAxMDQ2NTA5Mjk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0JvYicsIHN1cm5hbWU6ICdCb2InLCBiaXJ0aFllYXI6IDE5ODgsIHBob25lOicwMTA0NjUwOTM5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgXVxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmYXVsdFBhZ2UgKHtzdGF0ZSAsIHNldFN0YXRlLCBtYXRjaH0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmYWRlMiwgc2V0RmFkZTJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlT25ERU1PQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlICwgY29sdW1ucyA6IGRlZmF1bHREYXRhLmNvbHVtbnMgLCBkYXRhIDogZGVmYXVsdERhdGEuZGF0YSwgZGVmYXVsdFBhZ2UgOiAhc3RhdGUuZGVmYXVsdFBhZ2V9KTtcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZXRGYWRlMih0cnVlKSAsIDE1MDApO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogODAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0ndGV4dFNlY29uZGFyeSc+XHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VtZW50IFRhYmxlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBndXR0ZXJCb3R0b20+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICDshpDsib3qsowg7IKs7Jqp7ZWgIOyeiOuKlCDrjbDsnbTthLAg7YWM7J2067iU7J6F64uI64ukLlxyXG4gICAgICAgICAgICAgICAg7LKY7J2M7J20652866m0IERFTU8g66W8IOyytO2XmO2VtOuztOqxsOuCmCDrsJTroZwg7Iuc7J6R7ZW067O8IOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8RmFkZSBpbj17ZmFkZTJ9IHRpbWVvdXQ9e3tlbnRlciA6IDMwMDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25ERU1PQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVNFIERFTU8gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURUQgUklHSFQgQVdBWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgXHJcbiAgICBCb3ggLFBhcGVyLCBtYWtlU3R5bGVzLCBGYWRlLCBUZXh0RmllbGQsIFRvb2x0aXAsIFR5cG9ncmFwaHksIENoZWNrYm94XHJcbn1cclxuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGdcIjtcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQgeyBzYXZlSGVhZGVycyB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHsgZ2V0TWFuYWdlbWVudFRhYmxlIH0gZnJvbSAnLi4vdXRpbC9NYW5hZ2VtZW50QVBJJztcclxuaW1wb3J0IHVzZU9uRmlyc3RSZW5kZXIgZnJvbSAnLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi9TbmFja0Jhcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxMHZoJyxcclxuICAgIH0sXHJcbiAgICBmb3JtUm9vdCA6IHtcclxuICAgICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAuNXZoIDF2dycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNjBjaCcsXHJcbiAgICAgICAgICAgIG1pbldpZHRoIDogJzQwY2gnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMHZoJyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kIDogYG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvbnRhaW4nLFxyXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnM3Z3JyxcclxuICAgICAgICB0cmFuc2Zvcm0gOiAncm90YXRlKDkwZGVnKSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbiA6IHtcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJ1xyXG4gICAgfVxyXG59KSlcclxuY29uc3QgZGVmYXVsdEhlYWRlciA9IHtcclxuICAgIFwiaGVhZGVyMFwiIDogJycsXHJcbiAgICBcImhlYWRlcjFcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIyXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyM1wiIDogJycsXHJcbiAgICBcImhlYWRlcjRcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI1XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNlwiIDogJycsXHJcbiAgICBcImhlYWRlcjdcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI4XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOVwiIDogJycsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVycyAoe2V4aXN0aW5nSGVhZGVyc30pIHtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgndXNlcicpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICAvLyBzdGF0ZXNcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtyZXN1bHRTbmFjayAsIHNldFJlc3VsdFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlLCBjb250ZW50IDogJyd9KTtcclxuICAgIGNvbnN0IFtkYXRhICwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhZGVycyA6IGRlZmF1bHRIZWFkZXIsXHJcbiAgICAgICAgZ3JvdXBpbmdzIDogQXJyYXkoMTApLmZpbGwoZmFsc2UpLFxyXG4gICAgfSlcclxuICAgIC8vIGVmZmVjdHNcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+eyBcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgfSxbXSk7XHJcbiAgICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgICAgZ2V0TWFuYWdlbWVudFRhYmxlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSA6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YS5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cGluZ0xlbmd0aCA9IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IFsuLi5yZXNwb25zZS5kYXRhLmdyb3VwaW5nc107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIC0gZ3JvdXBpbmdMZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cGluZ3MucHVzaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcmVzcG9uc2UuZGF0YS5oZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyc0xlbmd0aCA9IE9iamVjdC52YWx1ZXMoaGVhZGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGhlYWRlcnNMZW5ndGg7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tgaGVhZGVyJHtpfWBdID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtoZWFkZXJzLCBncm91cGluZ3N9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7ICAvLyB1bmF1dGhvcml6ZWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQgOiBgUGxlYXNlIGxvZyBpbiBhZ2Fpbi5gfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBlcnJvciAoY29kZSA6ICR7cmVzcG9uc2Uuc3RhdHVzfSlgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAyMDAwKTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgfSl9XHJcbiAgICApXHJcbiAgICAgICAgXHJcbiAgICAvLyBldmVudHNcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChoZWFkZXJzLCBncm91cGluZ3MpID0+IHtcclxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMoaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkpIHsgLy8gMTXquIDsnpAg7J207IOBIOygnO2VnCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pIFxyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGhlYWRlcnMpLmZpbHRlcih2PT52KS5sZW5ndGggPT09IDApIHsgICAgIC8vIOu5hOyWtOyeiOydhCDqsr3smrAg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZUhlYWRlcnMoaGVhZGVycyxncm91cGluZ3MpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsIGNvbnRlbnQgOiByZXNwb25zZS5yZXN1bHR9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAyMDAwKTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgW2BoZWFkZXIke2luZGV4fWBdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVHcm91cGluZ3MgPSAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGdyb3VwaW5ncyA6IGRhdGEuZ3JvdXBpbmdzLm1hcCgodixpKT0+IGk9PT1pbmRleD8gZS50YXJnZXQuY2hlY2tlZCA6IHYpfSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb21wb25lbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogMTUwMH19PlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezR9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Sb290fSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBhdXRvQ29tcGxldGU9J29mZic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J2Rpdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb2xvcj0ndGV4dFByaW1hcnknIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlciBFZGl0IEZvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj17T2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpID8gJ2JsdWUnIDogJ3JlZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSdpbml0aWFsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgbW9yZSB0aGFuIDE1IGNoYXJhY3RlcnMgYW5kIHdpdGhvdXQgc3BhY2VzIDopIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuaGVhZGVycykubWFwKChoZWFkZXIsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpbmRleD09PTA/IHRydWU6ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpZD17YCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17YGhlYWRlci0ke2luZGV4KzF9YH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49J25vcm1hbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0Q2hhbmdlKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2RhdGEuaGVhZGVyc1tgaGVhZGVyJHtpbmRleH1gXS5sZW5ndGggPiAxNSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIllvdSBjYW4gc2V0IGdyb3VwaW5nIHNldHRpbmdzLlxyXG5XaGVuIHlvdSBzZXQgdXAgZ3JvdXBpbmcsIHlvdSBjYW4gbWFuYWdlIHRhYmxlcyBieSBncm91cC5cclxuRG8gbm90IHVzZSB3aGVuIHVuaXF1ZSB2YWx1ZXMgZS5nLikgTmFtZSwgYWRkcmVzcywgZXRjLlwiXHJcbiAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdyaWdodCcgZW50ZXJEZWxheT17MjAwfSBsZWF2ZURlbGF5PXsyMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkYXRhLmdyb3VwaW5nc1tpbmRleF19IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUdyb3VwaW5ncyhlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmRleD09PTA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PkVuYWJsZSBHcm91cGluZyE/PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiU1VCTUlUXCIgYXJpYS1sYWJlbD0nc3VibWl0JyBwbGFjZW1lbnQ9J3RvcCcgZW50ZXJEZWxheT17MjAwfSBsZWF2ZURlbGF5PXs0MDB9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gb25Nb3VzZU92ZXI9eyhlKT0+ZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInfVxyXG4gICAgICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZVN1Ym1pdChkYXRhLmhlYWRlcnMgLCBkYXRhLmdyb3VwaW5ncyl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtgTm90IG1vcmUgdGhhbiAxNSBjaGFyYWN0ZXJzIGFuZCB3aXRob3V0IHNwYWNlcyxcclxuICAgICAgICBIZWFkZXIgbXVzdCBub3QgYmUgZW1wdHkuIDooYH0gc3RhdHVzPVwiZXJyb3JcIi8+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3Jlc3VsdFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRSZXN1bHRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtyZXN1bHRTbmFjay5jb250ZW50fSBzdGF0dXM9e3Jlc3VsdFNuYWNrLnN0YXR1cz09PSdlcnJvcic/ICdlcnJvcicgOiAnc3VjY2Vzcyd9Lz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJztcclxuaW1wb3J0IHtCb3gsIEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBNYW51YWxEaWFsb2cgZnJvbSBcIi4vTWFudWFsRGlhbG9nXCI7XHJcbmltcG9ydCB7IG9wdGlvbnMsbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vVGFibGVPcHRpb25zXCI7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgRGVmYXVsdFBhZ2UgZnJvbSAnLi9EZWZhdWx0UGFnZSc7XHJcbmltcG9ydCBwYXJzZURhdGEgZnJvbSAnLi4vdXRpbC9wYXJzZURhdGEnO1xyXG5pbXBvcnQgU2F2ZUJ1dHRvbiBmcm9tICcuL1NhdmVCdXR0b24nO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4vU25hY2tCYXInO1xyXG5cclxuLy8gdXNlRWZmZWN066GcIGRhdGEsIGNvbHVtbnMg6rCAIOuzgOqyveuQoCDrlYzrp4jri6Qg7ISc67KE7JeQIOyggOyepSDtm4Qg6rCx7IugXHJcbi8vIC4vdXRpbCDqsr3roZzsl5Ag66Gc7KeBIOyekeyEsVxyXG4vLyDthrXsi6Dsl5Ag64yA7ZWcIHRlc3Rjb2Rl7J6R7ISxXHJcbi8vIGNvbHVtbnPsmYAgZGF0YeydmCDqsIEg6rCS65Ok7JeQIOuMgO2VnCDrrLTqsrDshLEg7LK07YGsXHJcbi8vIHByb3BzVHlwZSDsnpHshLFcclxuLy8gU2lkZU1lbnVMaXN0ID0+IExvZ2lu7Jy866GcIOuzgOqyvSwg67mE66Gc6re47J24IOyLnCBMT0dJTuycvOuhnCDrs7Tsnbwg6rKDLCDroZzqt7jsnbjsi5wgTVkgTUVOVeuhnCDrs7TquLBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VtZW50VGFibGUoKSB7XHJcbiAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICByZW1vdmVDb29raWUoJ3Byb2ZpbGUnKTtcclxuICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgfVxyXG4gIC8vIHN0YXRlc1xyXG4gIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pO1xyXG4gIGNvbnN0IFtzYXZlZFNuYWNrICwgc2V0U2F2ZWRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gIGNvbnN0IFtlcnJvclNuYWNrICwgc2V0RXJyb3JTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gIGNvbnN0IFtkaWFsb2csIHNldERpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7ICAvLyDstZzstIggQVBJ66GcIOuwm+yVhOyYpOuKlCDrj5nsnpHtlYTsmpRcclxuICAgIGRlZmF1bHRQYWdlIDogdHJ1ZSxcclxuICAgIGhhc1RhYmxlIDogZmFsc2UsXHJcbiAgICBjb2x1bW5zOiBbXSxcclxuICAgIGRhdGE6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRhYmxlUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgaWYgKGNvb2tpZXMudXNlcikgeyAgIC8vIOy/oO2CpOyXkCDthqDtgbDsnbQg7J6I7J2EIOqyveyasCDthYzsnbTruJQgZmV0Y2ggQVBJ7Iuk7ZaJXHJcbiAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXMgOiAke3Jlc3BvbnNlLnN0YXR1c30gLCBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKTtcclxuICAgICAgICAgIC8vIOycoOyggCDtmZXsnbjrkJDqs6Ag7YWM7J2067iU64+EIOu5hOyWtOyeiOyngCDslYrsnYQg6rK97JqwXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzPT09MjAwICYmIHJlc3BvbnNlLmRhdGEuaGVhZGVycykge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgY29sdW1ucyA6IHBhcnNlRGF0YShyZXNwb25zZS5kYXRhLmhlYWRlcnMgLCByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyksXHJcbiAgICAgICAgICAgICAgZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICBkZWZhdWx0UGFnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGhhc1RhYmxlIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIGV2ZW50c1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge3NldERpYWxvZyh7b3BlbiA6IGZhbHNlfSk7fTtcclxuICBjb25zdCBoYW5kbGVPblNhdmUgPSAoKSA9PiB7XHJcbiAgICAgIC8vIE1hdGVyaWFsIHRhYmxlIOydmCByZWbqsJLsl5Ag7KCR6re87ZW07IScIOuNsOydtO2EsCDslrvslrTsmKTquLBcclxuICAgICAgLy8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlclxyXG4gICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IFtdO1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlci5jb2x1bW5zLnJlZHVjZSgob2JqLHYsaSk9PntcclxuICAgICAgICBvYmpbYGhlYWRlciR7aX1gXSA9IHYudGl0bGU7XHJcbiAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgfSx7fSlcclxuICAgICAgdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlci5kYXRhLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgZGF0YS5wdXNoKHJlc3QpO1xyXG4gICAgICB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgIHJlc3VsdCA6IFxyXG4gICAgICAvLyAgICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9XHJcbiAgICAgIC8vICAgJHtncm91cGluZ3N9XHJcbiAgICAgIC8vICAgJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgICAgLy8gYClcclxuICAgICAgc2F2ZURhdGEoaGVhZGVycywgZ3JvdXBpbmdzLCBkYXRhKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgc2V0U2F2ZWRTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+eyAvLyDstZzstIjroIzrjZTrp4Hsi5wg64+E7JuA66eQIFNuYWNrIOy2nOugpVxyXG4gICAgc2V0VGltZW91dCgoKT0+e3NldFNuYWNrKHtvcGVuOnRydWV9KX0sNDAwKTtcclxuICB9LFtdKTtcclxuXHJcbiAgLy8gZWZmZWN0c1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7ICAgLy8gd2luZG93IOuNlOu4lO2BtOumrSDsnbTrsqTtirgg7LaU6rCALCDrj4Tsm4Drp5Agb3BlblxyXG4gICAgY29uc3Qgb25kYkNsaWNrID0gKCkgPT4gc2V0RGlhbG9nKHtvcGVuIDogIWRpYWxvZy5vcGVufSk7XHJcbiAgICBjb25zdCBvbktleWRvd24gPSAoZSkgPT4geyAgIC8vIGN0cmwgKyBz66GcIOyggOyepSBldmVudFxyXG4gICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKFwiTWFjXCIpID8gZS5tZXRhS2V5IDogZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlT25TYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gIH07XHJcbn0sIFtdKTtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuICBjb25zdCBNYXJnaW4gPSAoKSA9PiAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0+PC9Cb3g+KTsgIC8vIOyXrOuwsVxyXG4gIHJldHVybiAoXHJcbiAgICBzdGF0ZS5kZWZhdWx0UGFnZSA/XHJcbiAgICAgICg8RGVmYXVsdFBhZ2Ugc3RhdGU9e3N0YXRlfSBzZXRTdGF0ZT17c2V0U3RhdGV9Lz4pXHJcbiAgICAgIDpcclxuICAgICg8Qm94PlxyXG4gICAgICAgIDxNYW51YWxEaWFsb2cgb3Blbj17ZGlhbG9nLm9wZW59IG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfS8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgIHRhYmxlUmVmPXt0YWJsZVJlZn1cclxuICAgICAgdGl0bGU9e1xyXG4gICAgICA8U2F2ZUJ1dHRvbiBzZXRTYXZlZFNuYWNrPXtzZXRTYXZlZFNuYWNrfSBcclxuICAgICAgLy8g66eI7Jq07Yq4IOydtO2bhOyXkCDsoJHqt7ztlYTsmpRcclxuICAgICAgZGF0YU1hbmFnZXI9e3RhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIDoge319Lz5cclxuICAgIH1cclxuICAgICAgY29sdW1ucz17c3RhdGUuY29sdW1uc31cclxuICAgICAgZGF0YT17c3RhdGUuZGF0YX1cclxuICAgICAgbG9jYWxpemF0aW9uPXtsb2NhbGl6YXRpb259IC8vIOuhnOy7rOudvOydtOymiFxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfSAvLyDrgrTrs7TrgrTquLAsIOq3uOujqO2VkVxyXG4gICAgICBhY3Rpb25zPXtbLy8g66mA7YuwIOyFgOugieyFmCDsnpHsl4VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvb2x0aXAgOiAnUmVtb3ZlIEFsbCBTZWxlY3RlZCBVc2VycycsXHJcbiAgICAgICAgICAgIGljb24gOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgb25DbGljayA6IChlICwgZGVsZXRpb25zKSA9PiB7ICAvLyDshKDtg53tlZwg7LK07YGs67CV7Iqk7JeQIOuMgO2VtCDrqqjrkZAg7IKt7KCcIOynhO2WiVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5zdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShkYXRhLmluZGV4T2YodiksIDEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2RGF0YSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLnByZXZEYXRhICwgZGF0YX07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXX0gXHJcbiAgICAgIGVkaXRhYmxlPXt7XHJcbiAgICAgICAgb25Sb3dBZGQ6IChuZXdEYXRhKSA9PiAgLy8g7LaU6rCAXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIG9uUm93VXBkYXRlOiAobmV3RGF0YSwgb2xkRGF0YSkgPT4gIC8vIOyImOyglVxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9sZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICAgIGRhdGFbZGF0YS5pbmRleE9mKG9sZERhdGEpXSA9IG5ld0RhdGE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxNYXJnaW4vPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J25lZWQgc29tZSBoZWxwPyA/IGRvdWJsZS1jbGljayBhbnkgc3BhY2UgIScgc3RhdHVzPVwic3VjY2Vzc1wiLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzYXZlZFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTYXZlZFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nU0FWRUQgIScgc3RhdHVzPVwic3VjY2Vzc1wiLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtlcnJvclNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRFcnJvclNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nRVJST1IgIScgc3RhdHVzPVwiZXJyb3JcIi8+XHJcbiAgICA8L0JveD5cclxuICApKTtcclxufSIsIlxyXG5pbXBvcnQge0RpYWxvZyxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgQm94LFxyXG4gICAgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gICAgaWNvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICczdncnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbnVhbERpYWxvZyAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge29wZW4sIG9uQ2xvc2V9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpY29ucyA9IFtcclxuICAgICAgICB7aWNvbiA6ICdhZGRfYm94JyAsIGRlc2NyaXB0aW9uIDogJ1tBZGRdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJ1tFZGl0XSByZWNvcmRzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NlYXJjaCcgLCBkZXNjcmlwdGlvbiA6ICdUeXBlIGRvd24gd29yZHMgdG8gW3NlYXJjaF0uJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2F2ZV9hbHQnICwgZGVzY3JpcHRpb24gOiAnW0Rvd25sb2FkXSBmaWxlcyBpbiBDVlMgZm9ybWF0Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ3ZpZXdfd2VlaycgLCBkZXNjcmlwdGlvbiA6ICdbU2VsZWN0XSBjb2x1bW5zIHRvIGJlIGRpc3BsYXllZCd9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtkZWxldGVdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY2hlY2tfYm94JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgU2VsZWN0IHRoZSBjaGVja2JveCBvbiB0aGUgcm93Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ2ZhY3RfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDaGVjayB0aGUgbnVtYmVyIG9mIHRoZSByb3dzIHNlbGVjdGVkLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2RlbGV0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGiIENsaWNrIHRoZSBCaW4gaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUuJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW0VkaXRdIGhlYWRlcnMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnbWVudScgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIE9wZW4gdGhlIE1ZUEFHRSd9LFxyXG4gICAgICAgIHtpY29uIDogJ2NyZWF0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENsaWNrIHRoZSBQZW5jaWwgaWNvbid9LFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8RGlhbG9nIG9uQ2xvc2U9e29uQ2xvc2V9IG9wZW49e29wZW59PlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZT4gQkFTSUMgTUFOVUFMIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGljb25zLm1hcCgoaWNvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2Ake2ljb259ICsgJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2BtYXRlcmlhbC1pY29ucyAke2NsYXNzZXMuaWNvbn1gfSBzdHlsZT17e3dpZHRoOiczdncnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2ljb24uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIFRvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7c2V0U2F2ZWRTbmFjayAsIGRhdGFNYW5hZ2VyfSkge1xyXG4gICAgZnVuY3Rpb24gb25DbGljayAoKSB7XHJcbiAgICAgICAgICAvLyBTQVZFIEVWRU5UIHV0aWwgPiBNYW5hZ2VtZW50QVBJLnNhdmVEYXRhIOunjOuTpOyWtOyEnCDsvZztlZjquLBcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IGRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgICAgICBvYmpbYGhlYWRlciR7aX1gXSA9IHYudGl0bGU7XHJcbiAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgfSx7fSk7XHJcbiAgICAgICAgICBkYXRhTWFuYWdlci5kYXRhLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCByZXN1bHQgOiBcclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9XHJcbiAgICAgICAgICAke2dyb3VwaW5nc31cclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9XHJcbiAgICAgICAgYClcclxuICAgICAgICBzYXZlRGF0YShoZWFkZXJzLGdyb3VwaW5ncyxkYXRhKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFRvb2x0aXAgdGl0bGU9J0NsaWNrIHRvIFNBVkUgKCBDdHJsICsgUyApJz5cclxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgXHJcbiAgICAgICAgb25DbGljaz17KCk9Pm9uQ2xpY2soKX0+XHJcbiAgICAgICAgICBTQVZFXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIClcclxufSIsImltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7b3Blbiwgb25DbG9zZSwgY29udGVudCwgc3RhdHVzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidjZW50ZXInIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17b25DbG9zZX0gc2V2ZXJpdHk9e3N0YXR1c31cclxuICAgICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCcgbWVzc2FnZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicsIGZvbnRTaXplOic1cmVtJ319PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgIClcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7QWRkQm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG4vLyBEQVRBIFRBQkxFIE9QVElPTlNcclxuXHJcbiBleHBvcnQgY29uc3Qgb3B0aW9ucz0ge1xyXG4gICAgZXhwb3J0QnV0dG9uOiB0cnVlLFxyXG4gICAgZ3JvdXBpbmc6dHJ1ZSxcclxuICAgIHNlbGVjdGlvbjp0cnVlLFxyXG4gICAgaGVhZGVyU3R5bGU6eyBcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnNDb2x1bW5JbmRleDotMSwgIC8vIOyVoeyFmCDslYTsnbTsvZjsnITsuZhcclxuICAgIGNvbHVtbnNCdXR0b24gOiB0cnVlLCBcclxuICAgIGRlYm91bmNlSW50ZXJ2YWwgOiAxNjAsIC8vIOuhnOuUqeyLnOqwhFxyXG4gICAgcGFnZVNpemUgOiAxNSwgICAgICAgICAgLy8g7Y6Y7J207KeA7IKs7J207KaIXHJcbiAgICBwYWdlU2l6ZU9wdGlvbnMgOiBbNSwgMTUsIDMwLCA1MCwgMTAwXSwgLy8g7Y6Y7J207KaIIOyCrOydtOymiCDsooXrpZhcclxuICB9XHJcbiBleHBvcnQgY29uc3QgbG9jYWxpemF0aW9uID0ge1xyXG4gICAgcGFnaW5hdGlvbiA6IHsgbGFiZWxEaXNwbGF5ZWRSb3dzIDogJ3tjb3VudH0gcm93cyB8IHtmcm9tfS17dG99JyAsIH0sXHJcbiAgICB0b29sYmFyOiB7blJvd3NTZWxlY3RlZDogJ3swfSByb3cocykgc2VsZWN0ZWQnfSxcclxuICAgIGhlYWRlcjoge2FjdGlvbnM6ICdFZGl0J30sXHJcbiAgICBib2R5OiB7ZW1wdHlEYXRhU291cmNlTWVzc2FnZTogXHJcbiAgICAgICAgKFxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgZW5kSWNvbj17PEFkZEJveC8+fT5cclxuICAgICAgICAgIHtgTm8gUmVjb3JkIHRvIGRpc3BsYXlcclxuICAgICAgICAgIENsaWNrIHRoZSBCdXR0b24gYH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtgb24gdGhlIHJpZ2h0LXRvcGB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgfVxyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtEcmF3ZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtHcmlkfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7RGl2aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7QXBwQmFyIGFzIEFwcGJhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1Rvb2xiYXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhpZGVPblNjaHJvbGwgZnJvbSBcIi4uL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbFwiO1xyXG5pbXBvcnQgU2lkZU1lbnVMaXN0IGZyb20gXCIuL1NpZGVNZW51TGlzdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IFNpZ25PdXRCdXR0b24gZnJvbSBcIi4vU2lnbk91dEJ1dHRvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDoxOCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOjE4LFxyXG4gICAgfSxcclxuICAgIGxlZnQgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6MzAsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1zdGFydCdcclxuICAgIH0sXHJcbiAgICBjZW50ZXIgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgcmlnaHQgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6NDUsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1lbmQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nOmAwICR7dGhlbWUuc3BhY2luZygzKX1gXHJcbiAgICB9XHJcbiAgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYgKHByb3BzKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBtZW51IDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3IsIG9wZW4pID0+IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBvcGVuIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGFuY2hvciA9IHByb2ZpbGUubmFtZT8gJ01ZUEFHRScgOidMT0dJTic7XHJcbiAgICBjb25zdCBsaW5rcyA9IFsnYm9hcmQnLCdtYW5hZ2VtZW50J107XHJcbiAgICBjb25zdCBMb2dvdXRCdG4gPSBwcm9maWxlLm5hbWU/IDxTaWduT3V0QnV0dG9uLz4gOiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIaWRlT25TY2hyb2xsIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEFwcGJhciBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tib3hTaGFkb3c6J25vbmUnfX0+XHJcbiAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IEhvbWUgPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtsaW5rfWB9IHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fSBrZXk9e2xpbmt9PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiB7bGlua30gPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT48c3Bhbj48L3NwYW4+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdwcmltYXJ5JyBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0gc3R5bGU9e3ttYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YW5jaG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtMb2dvdXRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlciBvcGVuPXtzdGF0ZVthbmNob3JdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7U2lkZU1lbnVMaXN0KCB7Li4ucHJvcHMsIGFuY2hvciAsdG9nZ2xlRHJhd2VyICwgcHJvZmlsZX0gKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBiYXI+XHJcbiAgICAgICAgPC9IaWRlT25TY2hyb2xsPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbVRleHQsIExpc3RJdGVtQXZhdGFyICwgRGl2aWRlciwgTGlzdEl0ZW0sIFR5cG9ncmFwaHkgLCBBdmF0YXIsIEljb25CdXR0b24gLExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi9TaWduSW5CdXR0b24nO1xyXG5pbXBvcnQgZ29vZ2xlU2lnbmluSW1hZ2UgZnJvbSAnLi4vYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyc7XHJcbmltcG9ydCB7cmVkaXJlY3RHb29nbGVMb2dpbn0gZnJvbSAnLi4vdXRpbC9Mb2dpbkFQSSc7XHJcbmltcG9ydCB7RWRpdCwgSW5mbywgRGVsZXRlRm9yZXZlciwgV2FybmluZ30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBsaXN0IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzIydncnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbSA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZyA6ICcxLjN2aCAxLjV2dydcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbVRleHQgOiB7XHJcbiAgICAgICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIGxhcmdlQXZhdGFyIDoge1xyXG4gICAgICAgIHdpZHRoIDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICBoZWlnaHQgOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgfSxcclxuICAgIGlubGluZSA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2lubGluZSdcclxuICAgIH0sXHJcbiAgICBsaXN0VGV4dCA6IHtcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVMaXN0ICh7YW5jaG9yICwgdG9nZ2xlRHJhd2VyLCBwcm9maWxlfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DbGlja0xvZ2luICgpIHtcclxuICAgICAgICByZWRpcmVjdEdvb2dsZUxvZ2luKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IHByb2ZpbGU/IHByb2ZpbGUubmFtZT8gdHJ1ZSA6IGZhbHNlIDogZmFsc2U7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2lzTG9nZ2VkPyAnUFJPRklMRScgOiAnTE9HSU4gTUVOVSd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcblxyXG4gICAgICAgICAgICB7aXNMb2dnZWQ/IFxyXG5cclxuICAgICAgICAgICAgKDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPSdjZW50ZXInIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17cHJvZmlsZS5waWN0dXJlfSBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2VBdmF0YXJ9IGFsdD17cHJvZmlsZS5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Byb2ZpbGUubmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RUZXh0fT48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdFTUFJTCA6ICcgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdzcGFuJyB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRQcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5lbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm8gY29sb3I9J3ByaW1hcnknIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzF2dyd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBzZWNvbmRhcnk9J0VESVQgSEVBREVSUycvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaGVhZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J2VuZCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgY29sb3I9J3ByaW1hcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8V2FybmluZyBjb2xvcj0nc2Vjb25kYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdSRU1PVkUgQUxMIERBVEEnLz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAoPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8U2lnbkluQnV0dG9uIHNpZ25Jbj17Z29vZ2xlU2lnbmluSW1hZ2V9Lz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT4pfVxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMsQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5CdXR0b24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtzaWduSW59ID0gcHJvcHM7IC8vIOydtOuvuOyngFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2lnbklufSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT48L2ltZz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHAnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSAsIEljb25CdXR0b24sIFRvb2x0aXB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbG9nb3V0IDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6IDAsXHJcbiAgICAgICAgd2lkdGggOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGQnXHJcbiAgICB9LFxyXG4gIH0pKShUb29sdGlwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPSdMb2ctb3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3BhZGRpbmc6NH19IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD4gICAgXHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tIFwiLi9zZXJ2ZXJVUkxcIjtcclxuXHJcbi8vIEdvb2dsZSBPcGVuSUQgQ29ubmVjdCDsnbTsmqntlZjquLBcclxuLy8g7LC46rOgIOq4sOyIoOu4lOuhnOq3uCA6IGh0dHBzOi8vd3d3LmRhbGVzZW8uY29tL2dvb2dsZS1vaWRjL1xyXG5cclxuLy8gVVJMIGV4cG9ydFxyXG4vLyBzZXZlcuyXkOyEnCDrsJvsnYAgdXJs66GcIOumrOuLpOydtOugie2KuFxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RHb29nbGVMb2dpbiA9ICgpID0+IGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2xvZ2luYCkudGhlbihyZXMgPT4gbG9jYXRpb24uYXNzaWduKHJlcy5kYXRhKSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbkFuZFByb2ZpbGUgPSAodG9rZW4pID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vbG9naW5gLCB7dG9rZW59ICx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZSxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2U9PiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UuZGF0YSkpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSAnLi9zZXJ2ZXJVUkwnO1xyXG5cclxuLy8g7YWM7J2067iUIOuNsOydtO2EsCDrsJvslYTsmKTquLAgY29va2ll7JeQIOuLtOq4tCB0b2tlbuyCrOyaqVxyXG5leHBvcnQgY29uc3QgZ2V0TWFuYWdlbWVudFRhYmxlID0gICgpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbWFuYWdlbWVudGAse1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczp0cnVlXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlSGVhZGVycyA9IChoZWFkZXJzLCBncm91cGluZ3MpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vaGVhZGVyc2AsIHtcclxuICAgICAgICAvLyBkYXRhXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBncm91cGluZ3NcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSkpOyAgICAvLyDsv6DtgqTsmYAg7ZWo6ruYXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlRGF0YSA9IChoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vZGF0YWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5ncyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgfSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKGhlYWRlcnMgLCBncm91cGluZ3MpID0+IHtcclxuICBjb25zb2xlLmxvZyhgZGF0YSBwYXJzaW5nISEhIWApXHJcbiAgICByZXR1cm4gKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLm1hcCgodmFsdWUsaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSA6IHZhbHVlLFxyXG4gICAgICAgIGZpZWxkIDogdmFsdWUsXHJcbiAgICAgICAgZ3JvdXBpbmcgOiBncm91cGluZ3NbaW5kZXhdXHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9IiwiZXhwb3J0IGRlZmF1bHQgXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjsiXSwic291cmNlUm9vdCI6IiJ9