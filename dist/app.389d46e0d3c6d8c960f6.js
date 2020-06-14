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
/*! exports provided: UserContext, LogoutContext, ProgressContext, GlobalSnackbarContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutContext", function() { return LogoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressContext", function() { return ProgressContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSnackbarContext", function() { return GlobalSnackbarContext; });
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
/* harmony import */ var _customHook_SnackBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customHook/SnackBar */ "./src/customHook/SnackBar.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












 // 컨텍스트 목록

var UserContext = React.createContext();
var LogoutContext = React.createContext();
var ProgressContext = React.createContext();
var GlobalSnackbarContext = React.createContext();
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

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isLoading = _React$useState4[0],
      setIsLoading = _React$useState4[1];

  var _React$useState5 = React.useState({
    open: false,
    result: 'success'
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      globalSnackbar = _React$useState6[0],
      setGlobalSnackbar = _React$useState6[1];

  var token = cookies.user;
  var progressRef = React.useRef(0);

  var handleBeforeunload = function handleBeforeunload(result) {
    var interval = setInterval(function () {
      console.log("progress : ".concat(progressRef.current));
      setIsLoading(true);
      progressRef.current = progressRef.current < 100 ? progressRef.current + 20 : 100;

      if (progressRef.current === 100) {
        progressRef.current = 0;
        setIsLoading(false);
        setGlobalSnackbar({
          open: true,
          result: result
        });
        clearInterval(interval);
      }
    }, 200);
  };

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
  }, "   ", /*#__PURE__*/React.createElement(ProgressContext.Provider, {
    value: function value(result) {
      return handleBeforeunload(result);
    }
  }, /*#__PURE__*/React.createElement(GlobalSnackbarContext.Provider, {
    value: setGlobalSnackbar
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CssBaseline"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], null, /*#__PURE__*/React.createElement(_nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    exact: true,
    path: "/",
    render: function render() {
      return /*#__PURE__*/React.createElement(_home_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isLoading: isLoading
      });
    }
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/board",
    render: function render() {
      return /*#__PURE__*/React.createElement(_board_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isLoading: isLoading
      });
    }
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/management",
    render: function render() {
      return /*#__PURE__*/React.createElement(_management_Management__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isLoading: isLoading
      });
    }
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/headers",
    render: function render() {
      return /*#__PURE__*/React.createElement(_management_Headers__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isLoading: isLoading
      });
    }
  }))), /*#__PURE__*/React.createElement(_src_footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null))))), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: globalSnackbar.open,
    onClose: function onClose() {
      return setGlobalSnackbar({
        open: false
      });
    },
    content: globalSnackbar.result === 'error' ? "Not saved.\n            Reason : Invalid input." : ' SAVED ',
    status: globalSnackbar.result,
    direction: {
      vertical: 'top',
      horizontal: 'right'
    }
  }));
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
/* harmony import */ var _customHook_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customHook/Loading */ "./src/customHook/Loading.js");


function Board(_ref) {
  var isLoading = _ref.isLoading;
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    fixed: true
  }, /*#__PURE__*/React.createElement(_customHook_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/React.createElement("div", null, "Board"));
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

/***/ "./src/customHook/Loading.js":
/*!***********************************!*\
  !*** ./src/customHook/Loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

function Loading(_ref) {
  var isLoading = _ref.isLoading;
  return /*#__PURE__*/React.createElement(React.Fragment, null, isLoading && /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    style: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "text",
    color: "primary",
    size: "large",
    disabled: true,
    style: {
      fontWeight: 'bolder'
    }
  }, "Saving changes"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], null)));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/customHook/SnackBar.js":
/*!************************************!*\
  !*** ./src/customHook/SnackBar.js ***!
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
      status = _ref.status,
      direction = _ref.direction;
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Snackbar"], {
    open: open,
    onClose: onClose,
    anchorOrigin: direction ? direction : {
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
      width: '9vw',
      height: '9vh',
      minWidth: '70px',
      minHeight: '70px',
      alignSelf: 'center',
      background: "no-repeat center/80% url(".concat(_images_arrow_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")"),
      marginBottom: '2vh',
      marginTop: '2vh',
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

/***/ "./src/home/Carousel.js":
/*!******************************!*\
  !*** ./src/home/Carousel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageCarousel; });
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ImageCarousel(props) {
  var imageList = props.list ? props.list : [{}];

  var _React$useState = React.useState(imageList.length > 0 ? imageList.length - 1 : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      slideIndex = _React$useState2[0],
      setSlideIndex = _React$useState2[1];

  var setCurrentSlide = props.setCurrentSlide,
      autoPlay = props.autoPlay;

  var handleAfterSlide = function handleAfterSlide(slideIndex) {
    setSlideIndex(slideIndex);
    setCurrentSlide(slideIndex);
  };

  return /*#__PURE__*/React.createElement(nuka_carousel__WEBPACK_IMPORTED_MODULE_0__["default"], {
    slideIndex: slideIndex,
    afterSlide: function afterSlide(slideIndex) {
      return handleAfterSlide(slideIndex);
    },
    autoplay: autoPlay,
    autoplayInterval: 2500,
    transitionMode: "fade",
    wrapAround: true
  }, imageList.map(function (image, index) {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        width: '65vw',
        height: '80vh'
      },
      key: index
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        width: '65vw',
        height: '10vh',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h3",
      color: "inherit",
      style: {
        fontWeight: 'bolder'
      }
    }, image.name)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        width: '65vw',
        height: '70vh'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image.src,
      "object-fit": "cover"
    })));
  }));
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
  return {
    root: _defineProperty({
      margin: 0,
      padding: '1vw',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }, "margin", 'auto')
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
      enter: 2000,
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
/* harmony import */ var _customHook_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customHook/Loading */ "./src/customHook/Loading.js");





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
function Home(_ref) {
  var isLoading = _ref.isLoading;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(_customHook_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/React.createElement(_Main__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_Introduction__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_Introduction2__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/ImageSlideSources.js":
/*!***************************************!*\
  !*** ./src/home/ImageSlideSources.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_easy_login_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/easy-login.png */ "./src/images/easy-login.png");
/* harmony import */ var _images_link_management_page_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/link-management-page.png */ "./src/images/link-management-page.png");
/* harmony import */ var _images_start_right_away_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/start-right-away.png */ "./src/images/start-right-away.png");
/* harmony import */ var _images_make_headers_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/make-headers.png */ "./src/images/make-headers.png");
/* harmony import */ var _images_handle_table_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/handle-table.png */ "./src/images/handle-table.png");
/* harmony import */ var _images_mymenu_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/mymenu.png */ "./src/images/mymenu.png");






/* harmony default export */ __webpack_exports__["default"] = ([{
  name: '#1 Sign in with Google',
  src: "".concat(_images_easy_login_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  description: 'Sign in with google'
}, {
  name: '#2 Move on to management page',
  src: "".concat(_images_link_management_page_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
  description: 'Move on to management page'
}, {
  name: '#3 Click the blue button',
  src: "".concat(_images_start_right_away_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
  description: 'click "get started right away" button'
}, {
  name: '#4 Make Headers',
  src: "".concat(_images_make_headers_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
  description: 'make headers'
}, {
  name: '#5 Create, Edit, Remove table records',
  src: "".concat(_images_handle_table_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
  description: 'handle table'
}, {
  name: '#6 Use mymenu to handle data',
  src: "".concat(_images_mymenu_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
  description: 'use mymenu'
}]);

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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Crossline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Crossline */ "./src/home/Crossline.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel */ "./src/home/Carousel.js");
/* harmony import */ var _images_guide_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/guide.png */ "./src/images/guide.png");
/* harmony import */ var _ImageSlideSources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageSlideSources */ "./src/home/ImageSlideSources.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      justifyContent: 'space-around',
      alignContent: 'center',
      height: '100vh',
      width: '100vw'
    },
    paper: {
      minWidth: 750,
      width: '65vw',
      height: '80vh',
      margin: theme.spacing(4)
    },
    textPaper: {
      minWidth: 350,
      width: '25vw',
      height: '80vh',
      alignSelf: 'center',
      justifyContent: 'center'
    },
    bigAvatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      color: '#fff',
      backgroundColor: "green"
    },
    textWithShadow: {
      color: '#585656',
      fontWeight: 'bolder',
      fontSize: '3.5rem',
      marginLeft: '2vw',
      textShadow: '4px 1.5px 1.5px grey'
    },
    logoBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    descriptionBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '50vw',
      margin: '0 0 0 3vw'
    }
  };
});
function Introduction() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      grow = _React$useState2[0],
      setGrow = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentSlide = _React$useState4[0],
      setCurrentSlide = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      autoPlay = _React$useState6[0],
      setAutoPlay = _React$useState6[1];

  var classes = useStyles();
  var domRef = React.useRef();
  React.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return setGrow(entry.isIntersecting);
      });
      setAutoPlay(true);
    }, {
      // options
      rootMargin: '-70px 0px'
    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Crossline__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.logoBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "help",
    src: _images_guide_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    className: classes.bigAvatar
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "button",
    className: classes.textWithShadow
  }, " Management App ")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.descriptionBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2"
  }, "An application that you can easily create & design your own data."), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2"
  }, "Get started with your Google account!"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2"
  }, "This app will not keep any personal information."))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.root,
    ref: domRef
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 1000
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 4,
    className: classes.paper
  }, /*#__PURE__*/React.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    list: _ImageSlideSources__WEBPACK_IMPORTED_MODULE_5__["default"],
    setCurrentSlide: setCurrentSlide,
    autoPlay: autoPlay
  }))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 1500
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 4,
    className: classes.textPaper
  }, currentSlide))));
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
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      alignContent: 'center',
      height: '100vh',
      width: '90vw'
    },
    paper: {
      minWidth: 650,
      width: '60vw',
      height: '70vh',
      margin: theme.spacing(4)
    },
    text: {
      minWidth: 450,
      width: '30vw',
      height: '70vh',
      alignSelf: 'center',
      justifyContent: 'center'
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
    elevation: 4,
    className: classes.paper
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: 1500
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    elevation: 4,
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
/* harmony import */ var _images_background1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/background1.jpg */ "./src/images/background1.jpg");
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
      backgroundImage: "url(".concat(_images_background1_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], ")"),
      backgroundSize: 'cover',
      color: 'white'
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
    color: "inherit",
    style: {
      textShadow: '5px 1.5px 1.5px gray'
    }
  }, isFirstRef.current ? 'WELCOME' : 'Ready to start?'), isFirstRef.current ? null : /*#__PURE__*/React.createElement(_StartButton__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
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
      textShadow: '2px 1px 1px gray',
      color: 'inherit'
    }),
    innerBox: {
      marginTop: '1vh',
      color: 'white'
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
      textDecoration: 'none',
      color: 'white'
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    size: "large",
    color: "secondary",
    variant: "contained",
    startIcon: /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["PlayArrowSharp"], {
      color: "inherit",
      style: {
        fontSize: 30
      }
    }),
    className: classes.button
  }, "GET STARTED")));
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

/***/ "./src/images/background1.jpg":
/*!************************************!*\
  !*** ./src/images/background1.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "background1.84003bce21fd42b79dc0a7798fab1fac.jpg");

/***/ }),

/***/ "./src/images/easy-login.png":
/*!***********************************!*\
  !*** ./src/images/easy-login.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "easy-login.3e91b8d88735689079afd076e3e07423.png");

/***/ }),

/***/ "./src/images/guide.png":
/*!******************************!*\
  !*** ./src/images/guide.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "guide.e9b70cdf842d84fabe40145f9a7a3720.png");

/***/ }),

/***/ "./src/images/handle-table.png":
/*!*************************************!*\
  !*** ./src/images/handle-table.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "handle-table.3c586914a96d4afeddc5c7ad3d7df354.png");

/***/ }),

/***/ "./src/images/link-management-page.png":
/*!*********************************************!*\
  !*** ./src/images/link-management-page.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "link-management-page.48004d133b5fc22577704c95eb35f3d8.png");

/***/ }),

/***/ "./src/images/make-headers.png":
/*!*************************************!*\
  !*** ./src/images/make-headers.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "make-headers.cffac634f29d38ddbd1f4467a573ebc4.png");

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

/***/ "./src/images/mymenu.png":
/*!*******************************!*\
  !*** ./src/images/mymenu.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "mymenu.9fdd58aca74eb48d955f835c9ec8796e.png");

/***/ }),

/***/ "./src/images/start-right-away.png":
/*!*****************************************!*\
  !*** ./src/images/start-right-away.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "start-right-away.4e217262d2c8d86d5e0f6ee432aefbcf.png");

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
      backgroundImage: "url(".concat(_images_management_background_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], ")"),
      color: 'white'
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
    color: "initial",
    style: {
      textShadow: '5px 1.5px 1.5px gray'
    }
  }, "Management Table"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle2",
    gutterBottom: true,
    style: {
      textShadow: '2px 2px 1px black'
    }
  }, "You may try the DEMO if this your first time, or get started right away!"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
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
/* harmony import */ var _customHook_SnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customHook/SnackBar */ "./src/customHook/SnackBar.js");
/* harmony import */ var _customHook_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customHook/Loading */ "./src/customHook/Loading.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app */ "./src/app.js");
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
  var isLoading = _ref.isLoading;
  // style, cookie
  var classes = useStyle();
  var handleProgress = React.useContext(_app__WEBPACK_IMPORTED_MODULE_8__["ProgressContext"]);

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_5__["useCookies"])(['profile', 'user']),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2]; // states


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
      setData = _React$useState8[1]; // ref


  var dataRef = React.useRef(); // constructor

  Object(_customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_3__["getManagementTable"])().then(function (response) {
      console.log("response : ".concat(JSON.stringify(response)));

      if (response.status === 200) {
        var groupingLength = response.data ? response.data.groupings ? response.data.groupings.length : 0 : 0;
        var groupings = response.data ? response.data.groupings ? _toConsumableArray(response.data.groupings) : [] : [];

        for (var i = 0; i < 10 - groupingLength; i++) {
          groupings.push(false);
        }

        var headers = response.data ? response.data.headers ? response.data.headers : {} : {};
        var headersLength = Object.values(headers).length;

        for (var _i2 = headersLength; _i2 < 10; _i2++) {
          headers["header".concat(_i2)] = '';
        }

        dataRef.current = {
          headers: headers,
          groupings: groupings
        };
        console.log(dataRef.current);
        setData({
          headers: headers,
          groupings: groupings
        });
      } else {
        if (response.status === 204) {
          // unauthorized
          setTimeout(handleLogout(), 3500);
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
      if (err) {
        console.log(err);
        setTimeout(handleLogout(), 3500);
        setResultSnack({
          open: true,
          status: 'error',
          content: 'Please log in again.'
        });
      }
    });
  });
  React.useEffect(function () {
    dataRef.current = {
      headers: _objectSpread({}, data.headers),
      groupings: _toConsumableArray(data.groupings)
    };
  }, [data.headers, data.groupings]); // effects

  React.useEffect(function () {
    setFade(true);
    return function () {
      var result = handleSubmit(dataRef.current.headers, dataRef.current.groupings, true);
      handleProgress(result === 'error' ? 'error' : 'success');
    };
  }, []); // events

  var handleLogout = function handleLogout() {
    // 모든 쿠키 삭제와 profile제거
    removeCookie('profile');
    removeCookie('user');
    location.href = location.origin;
  };

  var handleSubmit = function handleSubmit(headers, groupings, isAutoSave) {
    if (!Object.values(headers).every(function (v) {
      return v.length <= 15;
    })) {
      // 15글자 이상 제한 에러메세지
      setSnack({
        open: true
      });
      return 'error';
    }

    if (Object.values(headers).filter(function (v) {
      return v;
    }).length === 0) {
      // 비어있을 경우 에러메세지
      setSnack({
        open: true
      });
      return 'error';
    }

    Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_3__["saveHeaders"])(headers, groupings).then(function (response) {
      if (!isAutoSave) setResultSnack({
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


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_customHook_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
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
  }, "Header should be less than 15 letters."))), Object.values(data.headers).map(function (header, index) {
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
      title: "\r\nYou can arrange the data with a valid header, \r\nUnique values are not commonly used for this function in general.\r\ne.g.) name, address, mobile NO. etc.\r\n",
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
    }, " Grouping!?") : null);
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
  })), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: snack.open,
    onClose: function onClose() {
      return setSnack({
        open: false
      });
    },
    content: "Header should be less than 15 letters :(",
    status: "error"
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: resultSnack.open,
    onClose: function onClose() {
      return setResultSnack({
        open: false
      });
    },
    content: resultSnack.content,
    status: resultSnack.status === 'error' ? 'error' : 'success'
  })));
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
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ManualDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManualDialog */ "./src/management/ManualDialog.js");
/* harmony import */ var _TableOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableOptions */ "./src/management/TableOptions.js");
/* harmony import */ var _customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customHook/useOnFirstRender */ "./src/customHook/useOnFirstRender.js");
/* harmony import */ var _util_ManagementAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ManagementAPI */ "./src/util/ManagementAPI.js");
/* harmony import */ var _DefaultPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DefaultPage */ "./src/management/DefaultPage.js");
/* harmony import */ var _util_parseData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/parseData */ "./src/util/parseData.js");
/* harmony import */ var _SaveButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SaveButton */ "./src/management/SaveButton.js");
/* harmony import */ var _customHook_SnackBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customHook/SnackBar */ "./src/customHook/SnackBar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app */ "./src/app.js");
/* harmony import */ var _customHook_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customHook/Loading */ "./src/customHook/Loading.js");
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

function ManagementTable(_ref) {
  var isLoading = _ref.isLoading;
  var handleProgress = React.useContext(_app__WEBPACK_IMPORTED_MODULE_11__["ProgressContext"]);

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_0__["useCookies"])(['profile', 'user']),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2]; // states


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

        if (response.status === 200) {
          setTimeout(function () {
            setSnack({
              open: true
            });
          }, 400);
          setState({
            columns: Object(_util_parseData__WEBPACK_IMPORTED_MODULE_7__["default"])(response.data.headers, response.data.groupings),
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
  });

  var handleDialogClose = function handleDialogClose() {
    setDialog({
      open: false
    });
  };

  var handleOnSave = function handleOnSave(isAutoSave) {
    // tableRef.current.dataManager 의 ref에서 신뢰도있는 데이터 참조
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
    });
    Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_5__["saveData"])(headers, groupings, data);
    if (!isAutoSave) setSavedSnack({
      open: true
    });
  }; // effects


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
      window.removeEventListener('keydown', onKeydown); // 초기접근의 경우 데이터가 없어 에러 발생할 수 있어 삼항식으로 판단 후 언마운트시의 fetchAPI실행

      tableRef.current ? tableRef.current.dataManager ? handleOnSave(true) : null : null;
      tableRef.current ? tableRef.current.dataManager ? handleProgress('success') : null : null;
    };
  }, []); // components

  var Margin = function Margin() {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], {
      style: {
        height: '100px'
      }
    });
  }; // 여백


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_customHook_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isLoading: isLoading
  }), state.defaultPage ? /*#__PURE__*/React.createElement(_DefaultPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    state: state,
    setState: setState
  }) : /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], null, /*#__PURE__*/React.createElement(_ManualDialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: dialog.open,
    onClose: handleDialogClose
  }), /*#__PURE__*/React.createElement(Margin, null), /*#__PURE__*/React.createElement(material_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    tableRef: tableRef,
    title: /*#__PURE__*/React.createElement(_SaveButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      tooltip: 'Remove the Selected row(s)',
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
  }), /*#__PURE__*/React.createElement(Margin, null), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: snack.open,
    onClose: function onClose() {
      return setSnack({
        open: false
      });
    },
    content: "need some help? ? double-click any space !",
    status: "success"
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: savedSnack.open,
    onClose: function onClose() {
      return setSavedSnack({
        open: false
      });
    },
    content: "SAVED !",
    status: "success"
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: errorSnack.open,
    onClose: function onClose() {
      return setErrorSnack({
        open: false
      });
    },
    content: "ERROR !",
    status: "error"
  })));
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
    description: ' ① Open MYPAGE'
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
      }
    }, "No Records to display"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      variant: "text",
      color: "primary",
      size: "large",
      disabled: true,
      endIcon: /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["AddBox"], null),
      style: {
        fontWeight: 'bolder'
      }
    }, "Click the plus icon on the right above for a new record. "))
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
      var flag = open ? state[anchor] ? false : true : false;
      setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, anchor, flag)));
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
    onClose: toggleDrawer(anchor, false),
    variant: "persistent"
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
/* harmony import */ var _util_ManagementAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/ManagementAPI */ "./src/util/ManagementAPI.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app */ "./src/app.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    list: {
      width: '23vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'start',
      flexDirection: 'column'
    },
    listItem: {
      width: '100%'
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
    },
    modal: {
      top: '50%',
      left: '50%',
      transform: "translate(-50%, -50%)",
      position: 'absolute',
      width: 400,
      minWidth: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: 'flex',
      flexDirection: 'column'
    },
    modalRowBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalColBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start'
    },
    button: {
      fontWeight: 'bolder'
    }
  };
});
function MenuList(_ref) {
  var anchor = _ref.anchor,
      toggleDrawer = _ref.toggleDrawer,
      profile = _ref.profile;
  var classes = useStyles();
  var handleGlobalSnackbar = React.useContext(_app__WEBPACK_IMPORTED_MODULE_8__["GlobalSnackbarContext"]);

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      emailInput = _React$useState2[0],
      setEmailInput = _React$useState2[1];

  function handleOnClickLogin() {
    Object(_util_LoginAPI__WEBPACK_IMPORTED_MODULE_4__["redirectGoogleLogin"])();
  }

  var handleOnClickModal = function handleOnClickModal() {
    return setModal(true);
  };

  var handleOnCloseModal = function handleOnCloseModal() {
    return setModal(false);
  };

  var handleInputChange = function handleInputChange(e) {
    return setEmailInput(e.target.value);
  };

  var handleOnSubmit = function handleOnSubmit() {
    if (emailInput === profile.email) {
      console.log('일치');
      Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_7__["saveData"])({}, [], [{}]).then(function (data) {
        handleGlobalSnackbar({
          open: true,
          result: data.result === 'success' ? 'success' : 'error'
        });
        setTimeout(function () {
          location.reload(true);
        }, 1500);
      });
    } else {
      handleGlobalSnackbar({
        open: true,
        result: 'error'
      });
    }
  };

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      modal = _React$useState4[0],
      setModal = _React$useState4[1];

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
    "aria-label": "edit-header",
    onClick: handleOnClickModal
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["DeleteForever"], {
    color: "secondary",
    fontSize: "large"
  }))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    open: modal,
    onClose: handleOnCloseModal,
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-contents"
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    className: classes.modal
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.modalRowBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    edge: "start",
    "aria-label": "edit-header",
    disabled: true
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["DeleteForever"], {
    color: "secondary",
    fontSize: "large"
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    id: "modal-title",
    variant: "button",
    display: "block",
    style: {
      fontWeight: 'bolder'
    }
  }, "Caution : permanent deletion")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.modalColBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    id: "modal-contents",
    variant: "body1",
    style: {
      fontWeight: 'bold'
    }
  }, "All data will be deleted and cannot be recovered.\n                                Please enter your email correctly to continue."), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "caption"
  }, profile.email)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.modalRowBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    label: "E-MAIL",
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: classes.button,
    variant: "contained",
    color: "secondary",
    size: "large",
    onClick: handleOnSubmit
  }, "submit"))))) : /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
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
  console.log("saving headers : \n    headers : ".concat(JSON.stringify(headers), "\n    groupings : ").concat(JSON.stringify(groupings)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL1NuYWNrQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ3Jvc3NsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW1hZ2VTbGlkZVNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9TdGFydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Fycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQxLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Vhc3ktbG9naW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZ3VpZGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xpbmstbWFuYWdlbWVudC1wYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21ha2UtaGVhZGVycy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbXltZW51LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0YXJ0LXJpZ2h0LWF3YXkucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9EZWZhdWx0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9IZWFkZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvTWFudWFsRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1NhdmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvVGFibGVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9Mb2dpbkFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9NYW5hZ2VtZW50QVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9zZXJ2ZXJVUkwuanMiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvdXRDb250ZXh0IiwiUHJvZ3Jlc3NDb250ZXh0IiwiR2xvYmFsU25hY2tiYXJDb250ZXh0IiwiQXBwIiwicXMiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0ciIsImlkX3Rva2VuIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwib3BlbiIsInJlc3VsdCIsImdsb2JhbFNuYWNrYmFyIiwic2V0R2xvYmFsU25hY2tiYXIiLCJ0b2tlbiIsInVzZXIiLCJwcm9ncmVzc1JlZiIsInVzZVJlZiIsImhhbmRsZUJlZm9yZXVubG9hZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJnZXRUb2tlbkFuZFByb2ZpbGUiLCJ0aGVuIiwiZGF0YSIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJKU09OIiwic3RyaW5naWZ5IiwicGF0aCIsIm1heEFnZSIsImVyciIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkJvYXJkIiwiSGlkZU9uU2Nyb2xsIiwicHJvcHMiLCJjaGlsZHJlbiIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiTG9hZGluZyIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJmb250V2VpZ2h0Iiwib25DbG9zZSIsImNvbnRlbnQiLCJzdGF0dXMiLCJkaXJlY3Rpb24iLCJmb250U2l6ZSIsInVzZU9uRmlyc3RSZW5kZXIiLCJmdW5jIiwiaXNGaXJzdFJlZiIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtaW5IZWlnaHQiLCJmb290ZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJncmV5IiwidGV4dEFsaWduIiwiYXJyb3ciLCJtaW5XaWR0aCIsImFsaWduU2VsZiIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIlN0aWNreUZvb3RlciIsImNsYXNzZXMiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0cmFuc2l0aW9uIiwiZSIsInRhcmdldCIsInN0eWxlIiwiY3Vyc29yIiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlTGlzdCIsImxpc3QiLCJsZW5ndGgiLCJzbGlkZUluZGV4Iiwic2V0U2xpZGVJbmRleCIsInNldEN1cnJlbnRTbGlkZSIsImF1dG9QbGF5IiwiaGFuZGxlQWZ0ZXJTbGlkZSIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJjb2xvciIsInNyYyIsIm1hcmdpbiIsImZsZXhXcmFwIiwiQ3Jvc3NsaW5lIiwiZmFkZSIsInNldEZhZGUiLCJkb21SZWYiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJlbnRlciIsImV4aXQiLCJIb21lIiwiZWFzeUxvZ2luIiwiZGVzY3JpcHRpb24iLCJsaW5rTWFuYWdlbWVudFBhZ2UiLCJzdGFydFJpZ2h0QXdheSIsIm1ha2VIZWFkZXJzIiwiaGFuZGxlVGFibGUiLCJ1c2VNeW1lbnUiLCJhbGlnbkNvbnRlbnQiLCJwYXBlciIsInRleHRQYXBlciIsImJpZ0F2YXRhciIsInRleHRXaXRoU2hhZG93IiwibWFyZ2luTGVmdCIsInRleHRTaGFkb3ciLCJsb2dvQm94IiwiZGVzY3JpcHRpb25Cb3giLCJtYXhXaWR0aCIsIkludHJvZHVjdGlvbiIsImdyb3ciLCJzZXRHcm93IiwiY3VycmVudFNsaWRlIiwic2V0QXV0b1BsYXkiLCJndWlkZUltYWdlIiwidHJhbnNmb3JtT3JpZ2luIiwidGltZW91dCIsInRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJNYWluIiwidXNlU3R5bGUiLCJidXR0b24iLCJ0eXBvZ3JhcGh5IiwiaW5uZXJCb3giLCJ0ZXh0RGVjb3JhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRhaW5lciIsImJ1dHRvbkNvbnRhaW5lciIsImRlZmF1bHREYXRhIiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJncm91cGluZyIsInN1cm5hbWUiLCJiaXJ0aFllYXIiLCJwaG9uZSIsImdlbmRlciIsIm1lbW8iLCJEZWZhdWx0UGFnZSIsInN0YXRlIiwic2V0U3RhdGUiLCJtYXRjaCIsImZhZGUyIiwic2V0RmFkZTIiLCJoYW5kbGVPbkRFTU9DbGljayIsImRlZmF1bHRQYWdlIiwic2V0VGltZW91dCIsImZvcm1Sb290IiwidHJhbnNmb3JtIiwiZGVmYXVsdEhlYWRlciIsIkhlYWRlcnMiLCJoYW5kbGVQcm9ncmVzcyIsInVzZUNvbnRleHQiLCJzbmFjayIsInNldFNuYWNrIiwicmVzdWx0U25hY2siLCJzZXRSZXN1bHRTbmFjayIsImhlYWRlcnMiLCJncm91cGluZ3MiLCJBcnJheSIsImZpbGwiLCJzZXREYXRhIiwiZGF0YVJlZiIsImdldE1hbmFnZW1lbnRUYWJsZSIsInJlc3BvbnNlIiwiZ3JvdXBpbmdMZW5ndGgiLCJpIiwicHVzaCIsImhlYWRlcnNMZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJoYW5kbGVMb2dvdXQiLCJoYW5kbGVTdWJtaXQiLCJocmVmIiwib3JpZ2luIiwiaXNBdXRvU2F2ZSIsImV2ZXJ5IiwidiIsImZpbHRlciIsInNhdmVIZWFkZXJzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUdyb3VwaW5ncyIsImNoZWNrZWQiLCJoZWFkZXIiLCJNYW5hZ2VtZW50VGFibGUiLCJzYXZlZFNuYWNrIiwic2V0U2F2ZWRTbmFjayIsImVycm9yU25hY2siLCJzZXRFcnJvclNuYWNrIiwiZGlhbG9nIiwic2V0RGlhbG9nIiwiaGFzVGFibGUiLCJ0YWJsZVJlZiIsInBhcnNlRGF0YSIsImhhbmRsZURpYWxvZ0Nsb3NlIiwiaGFuZGxlT25TYXZlIiwiZGF0YU1hbmFnZXIiLCJyZWR1Y2UiLCJvYmoiLCJ0YWJsZURhdGEiLCJyZXN0Iiwic2F2ZURhdGEiLCJvbmRiQ2xpY2siLCJvbktleWRvd24iLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNYXJnaW4iLCJsb2NhbGl6YXRpb24iLCJvcHRpb25zIiwidG9vbHRpcCIsImljb24iLCJvbkNsaWNrIiwiZGVsZXRpb25zIiwic3BsaWNlIiwiaW5kZXhPZiIsInByZXZEYXRhIiwib25Sb3dBZGQiLCJuZXdEYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcmV2U3RhdGUiLCJvblJvd1VwZGF0ZSIsIm9sZERhdGEiLCJNYW51YWxEaWFsb2ciLCJpY29ucyIsImV4cG9ydEJ1dHRvbiIsInNlbGVjdGlvbiIsImhlYWRlclN0eWxlIiwiYWN0aW9uc0NvbHVtbkluZGV4IiwiY29sdW1uc0J1dHRvbiIsImRlYm91bmNlSW50ZXJ2YWwiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsInBhZ2luYXRpb24iLCJsYWJlbERpc3BsYXllZFJvd3MiLCJ0b29sYmFyIiwiblJvd3NTZWxlY3RlZCIsImFjdGlvbnMiLCJib2R5IiwiZW1wdHlEYXRhU291cmNlTWVzc2FnZSIsImZsZXhHcm93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsZWZ0IiwicGFkZGluZ0xlZnQiLCJqdXN0aWZ5IiwiY2VudGVyIiwicmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJOYXYiLCJtZW51IiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwiZXZlbnQiLCJmbGFnIiwibGlua3MiLCJMb2dvdXRCdG4iLCJib3hTaGFkb3ciLCJsaW5rIiwibWFyZ2luUmlnaHQiLCJTaWRlTWVudUxpc3QiLCJsaXN0SXRlbSIsImxpc3RJdGVtVGV4dCIsImxhcmdlQXZhdGFyIiwiaW5saW5lIiwibGlzdFRleHQiLCJtb2RhbCIsInBvc2l0aW9uIiwiYm9yZGVyIiwic2hhZG93cyIsIm1vZGFsUm93Qm94IiwibW9kYWxDb2xCb3giLCJNZW51TGlzdCIsImhhbmRsZUdsb2JhbFNuYWNrYmFyIiwiZW1haWxJbnB1dCIsInNldEVtYWlsSW5wdXQiLCJoYW5kbGVPbkNsaWNrTG9naW4iLCJyZWRpcmVjdEdvb2dsZUxvZ2luIiwiaGFuZGxlT25DbGlja01vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVPbkNsb3NlTW9kYWwiLCJoYW5kbGVPblN1Ym1pdCIsInJlbG9hZCIsImlzTG9nZ2VkIiwiZ29vZ2xlU2lnbmluSW1hZ2UiLCJTaWduSW5CdXR0b24iLCJzaWduSW4iLCJsb2dvdXQiLCJMaWdodFRvb2x0aXAiLCJ3aXRoU3R5bGVzIiwiY29tbW9uIiwid2hpdGUiLCJUb29sdGlwIiwiYXhpb3MiLCJnZXQiLCJzZXJ2ZXJVUkwiLCJyZXMiLCJhc3NpZ24iLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwicHV0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QixDQUl1QixVQUFBeVQsR0FBRyxFQUFJO0FBQ2xDLFdBQU85RSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I2RSxHQUFHLENBQUN4VCxJQUFwQixDQUFQO0FBQ0gsR0FOTyxDQUFSO0FBT0gsQ0FSTSxDOzs7Ozs7Ozs7Ozs7QUNyQlA7QUFBZSx5RUFBQ3NLLE9BQUQsRUFBV0MsU0FBWCxFQUF5QjtBQUN0QzlLLFNBQU8sQ0FBQ0MsR0FBUjtBQUNFLFNBQVF3TCxNQUFNLENBQUNDLE1BQVAsQ0FBY2IsT0FBZCxFQUF1QnFCLE1BQXZCLENBQThCLFVBQUFELENBQUM7QUFBQSxXQUFFQSxDQUFGO0FBQUEsR0FBL0IsRUFBb0MvRyxHQUFwQyxDQUF3QyxVQUFDbUgsS0FBRCxFQUFPakgsS0FBUCxFQUFpQjtBQUMvRCxXQUFPO0FBQ0w4RCxXQUFLLEVBQUdtRCxLQURIO0FBRUxsRCxXQUFLLEVBQUdrRCxLQUZIO0FBR0xqRCxjQUFRLEVBQUcwQixTQUFTLENBQUMxRixLQUFEO0FBSGYsS0FBUDtBQUtELEdBTk8sQ0FBUjtBQU9ELENBVEgsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZSxzRkFBZixFIiwiZmlsZSI6ImFwcC4zODlkNDZlMGQzYzZkOGM5NjBmNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiIGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi9OYXZcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkL0JvYXJkXCI7XHJcbmltcG9ydCBNYW5hZ2VtZW50IGZyb20gXCIuL21hbmFnZW1lbnQvTWFuYWdlbWVudFwiO1xyXG5pbXBvcnQgSGVhZGVycyBmcm9tICcuL21hbmFnZW1lbnQvSGVhZGVycyc7XHJcbmltcG9ydCB7Q3NzQmFzZWxpbmV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZS9Ib21lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSdcclxuaW1wb3J0IHsgZ2V0VG9rZW5BbmRQcm9maWxlIH0gZnJvbSBcIi4vdXRpbC9Mb2dpbkFQSVwiO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuXHJcbi8vIOy7qO2FjeyKpO2KuCDrqqnroZ1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTG9nb3V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IEdsb2JhbFNuYWNrYmFyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IHsgaWRfdG9rZW4gfSA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICBjb25zdCBbIHByb2ZpbGUgLCBzZXRQcm9maWxlIF0gPSBSZWFjdC51c2VTdGF0ZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnbG9iYWxTbmFja2Jhciwgc2V0R2xvYmFsU25hY2tiYXJdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZSAsIHJlc3VsdDogJ3N1Y2Nlc3MnfSlcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llcy51c2VyO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NSZWYgPSBSZWFjdC51c2VSZWYoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVCZWZvcmV1bmxvYWQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHByb2dyZXNzIDogJHtwcm9ncmVzc1JlZi5jdXJyZW50fWApO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHByb2dyZXNzUmVmLmN1cnJlbnQgPSAocHJvZ3Jlc3NSZWYuY3VycmVudCA8IDEwMCA/IHByb2dyZXNzUmVmLmN1cnJlbnQgKyAyMCA6IDEwMCk7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzUmVmLmN1cnJlbnQgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgc2V0R2xvYmFsU25hY2tiYXIoe29wZW46dHJ1ZSAsIHJlc3VsdDpyZXN1bHR9KTtcclxuICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sMjAwKVxyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoIEFQSSDsi6TtloknKTtcclxuICAgICAgICAgICAgZ2V0VG9rZW5BbmRQcm9maWxlKGlkX3Rva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge25hbWUgLGVtYWlsLCBwaWN0dXJlfSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgZGF0YSA6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJwcm9maWxlXCIse25hbWUgLCBlbWFpbCwgcGljdHVyZX0se3BhdGg6XCIvXCIgLCBtYXhBZ2UgOiA3MjAwfSk7ICAvLyBtYXhBZ2UgOiAy7Iuc6rCEXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3Igb2NjdXJlZCA6ICR7ZXJyfWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbaWRfdG9rZW5dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyDquLDsobQg7Yag7YGw7J20IOyeiOydhCDqsr3smrAg7ISc67KE66GcIOyerOyalOyyre2VtOyEnCDrp4zro4zrkJwg7Yag7YGw7J247KeAIO2ZleyduFxyXG4gICAgICAgIC8vIOunjOujjOuQnCDthqDtgbDsnbwg6rK97JqwIOy/oO2CpO2UhOuhnO2VhCwgc3RhdGXtlITroZztlYQsIOunjOujjOuQnCDthqDtgbAg66qo65GQIOygnOqxsFxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg6riw7KG0IO2GoO2BsCDsnojsnYwgdG9rZW4gOiAke3Rva2VufWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3Rva2VuXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGNvb2tpZXMucHJvZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY29va2llcy5wcm9maWxlIDogJHtKU09OLnN0cmluZ2lmeShjb29raWVzLnByb2ZpbGUpfWApO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29va2llcy5wcm9maWxlXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9maWxlIHx8IHtuYW1lIDogJyd9fT4gICAgICAgICAgey8qIOycoOyggCDtlITroZztlYQg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8TG9nb3V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UHJvZmlsZX0+ICAgey8qIOuhnOq3uOyVhOybgyDsnbTrsqTtirgg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyhyZXN1bHQpPT5oYW5kbGVCZWZvcmV1bmxvYWQocmVzdWx0KX0+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldEdsb2JhbFNuYWNrYmFyfT5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cclxuICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eygpPT48SG9tZSBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2JvYXJkJyByZW5kZXI9eygpPT48Qm9hcmQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9tYW5hZ2VtZW50JyByZW5kZXI9eygpPT4gPE1hbmFnZW1lbnQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9oZWFkZXJzJyByZW5kZXI9eygpPT4gPEhlYWRlcnMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgIDwvR2xvYmFsU25hY2tiYXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1Byb2dyZXNzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Mb2dvdXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17Z2xvYmFsU25hY2tiYXIub3Blbn0gb25DbG9zZT17KCk9PnNldEdsb2JhbFNuYWNrYmFyKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgICAgICBjb250ZW50PXtnbG9iYWxTbmFja2Jhci5yZXN1bHQ9PT0nZXJyb3InPyBgTm90IHNhdmVkLlxyXG4gICAgICAgICAgICBSZWFzb24gOiBJbnZhbGlkIGlucHV0LmAgOicgU0FWRUQgJ30gc3RhdHVzPXtnbG9iYWxTbmFja2Jhci5yZXN1bHR9XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj17e3ZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidyaWdodCd9fS8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoe2lzTG9hZGluZ30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgQm9hcmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZVNpZ25pbi4xY2UxYWFhNWExMjdmYTNlNDkyYTEyYmI2MmY5OTMwNC5wbmdcIjsiLCJpbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGUnO1xyXG5cclxuLy8gR05C7J2YIOyKrOudvOydtOuTnOq4sOuKpVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWRlT25TY3JvbGwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGUgYXBwZWFyPXtmYWxzZX0gZGlyZWN0aW9uPVwiZG93blwiIGluPXshdHJpZ2dlcn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2xpZGU+XHJcbiAgKTtcclxufSIsImltcG9ydCB7Qm94LCBDaXJjdWxhclByb2dyZXNzLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nICh7aXNMb2FkaW5nfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgIGlzTG9hZGluZyAmJiBcclxuICAgICAgICAgICAgKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHZoJywgd2lkdGg6JzEwMCUnLCBkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge2BTYXZpbmcgY2hhbmdlc2B9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgICA8L0JveD4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG59IiwiaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtvcGVuLCBvbkNsb3NlLCBjb250ZW50LCBzdGF0dXMsIGRpcmVjdGlvbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17ZGlyZWN0aW9uPyBkaXJlY3Rpb24gOiB7IHZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidjZW50ZXInIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17b25DbG9zZX0gc2V2ZXJpdHk9e3N0YXR1c31cclxuICAgICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCcgbWVzc2FnZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicsIGZvbnRTaXplOic1cmVtJ319PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgIClcclxufSIsIlxyXG4vLyBjb250c3RydWN0b3Ig7ZuFXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU9uRmlyc3RSZW5kZXIgKGZ1bmMpIHtcclxuICAgIGNvbnN0IGlzRmlyc3RSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcbiAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZnVuYygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgTGlua30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgSmFjaydzIFdlYnNpdGVcclxuICAgICAgICA8L0xpbms+eycgJ31cclxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgIHsnLid9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWluSGVpZ2h0OiAnMjB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOnRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdLFxyXG4gICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgd2lkdGggOiAnOXZ3JyxcclxuICAgICAgaGVpZ2h0IDogJzl2aCcsXHJcbiAgICAgIG1pbldpZHRoIDogJzcwcHgnLFxyXG4gICAgICBtaW5IZWlnaHQgOiAnNzBweCcsXHJcbiAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kIDpgbm8tcmVwZWF0IGNlbnRlci84MCUgdXJsKCR7YXJyb3d9KWAsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTonMnZoJyxcclxuICAgICAgbWFyZ2luVG9wIDogJzJ2aCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOidjb250YWluJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lGb290ZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJNb3ZlIHRvIFRvcFwiIGFyaWEtbGFiZWw9XCJtb3ZlLXRvLXRvcFwiIHBsYWNlbWVudD1cInRvcFwiIGVudGVyRGVsYXk9ezM1MH0gbGVhdmVEZWxheT17MTUwfT5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gb25Nb3VzZU92ZXI9eyhlKT0+dHJhbnNpdGlvbihlKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfSIsImltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCAocHJvcHMpIHtcclxuICAgIGNvbnN0IGltYWdlTGlzdCA9IHByb3BzLmxpc3QgPyBwcm9wcy5saXN0IDogW3t9XTtcclxuICAgIGNvbnN0IFtzbGlkZUluZGV4LCBzZXRTbGlkZUluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKGltYWdlTGlzdC5sZW5ndGggPiAwID8gaW1hZ2VMaXN0Lmxlbmd0aC0xIDogMCk7XHJcbiAgICBjb25zdCB7c2V0Q3VycmVudFNsaWRlLCBhdXRvUGxheX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGhhbmRsZUFmdGVyU2xpZGUgPSAoc2xpZGVJbmRleCkgPT4ge1xyXG4gICAgICAgIHNldFNsaWRlSW5kZXgoc2xpZGVJbmRleCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKHNsaWRlSW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBzbGlkZUluZGV4PXtzbGlkZUluZGV4fVxyXG4gICAgICAgIGFmdGVyU2xpZGU9e3NsaWRlSW5kZXggPT4gaGFuZGxlQWZ0ZXJTbGlkZShzbGlkZUluZGV4KX1cclxuICAgICAgICBhdXRvcGxheT17YXV0b1BsYXl9XHJcbiAgICAgICAgYXV0b3BsYXlJbnRlcnZhbD17MjUwMH1cclxuICAgICAgICB0cmFuc2l0aW9uTW9kZT0nZmFkZSdcclxuICAgICAgICB3cmFwQXJvdW5kPXt0cnVlfVxyXG4gICAgICAgICA+XHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgaW1hZ2VMaXN0Lm1hcCgoaW1hZ2UsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBzdHlsZT17e3dpZHRoOic2NXZ3JywgaGVpZ2h0Oic4MHZoJ319IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3t3aWR0aDonNjV2dycsIGhlaWdodDonMTB2aCcsIGJhY2tncm91bmRDb2xvcjonYmxhY2snLCBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3t3aWR0aDonNjV2dycsaGVpZ2h0Oic3MHZoJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2Uuc3JjfSBvYmplY3QtZml0PSdjb3ZlcicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICk7XHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94ICwgRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIG1hcmdpbjowLFxyXG4gICAgICBwYWRkaW5nOicxdncnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luOidhdXRvJyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Jvc3NsaW5lKHtjaGlsZHJlbn0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjIwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYm94U2hhZG93PXs0fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gXCIuL0ludHJvZHVjdGlvblwiO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uMiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb24yXCI7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGhlaWdodCA6ICczNTB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2lzTG9hZGluZ30pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24vPlxyXG4gICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbjIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBlYXN5TG9naW4gZnJvbSBcIi4uL2ltYWdlcy9lYXN5LWxvZ2luLnBuZ1wiO1xyXG5pbXBvcnQgbGlua01hbmFnZW1lbnRQYWdlIGZyb20gXCIuLi9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nXCI7XHJcbmltcG9ydCBzdGFydFJpZ2h0QXdheSBmcm9tIFwiLi4vaW1hZ2VzL3N0YXJ0LXJpZ2h0LWF3YXkucG5nXCI7XHJcbmltcG9ydCBtYWtlSGVhZGVycyBmcm9tIFwiLi4vaW1hZ2VzL21ha2UtaGVhZGVycy5wbmdcIjtcclxuaW1wb3J0IGhhbmRsZVRhYmxlIGZyb20gXCIuLi9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZ1wiO1xyXG5pbXBvcnQgdXNlTXltZW51IGZyb20gXCIuLi9pbWFnZXMvbXltZW51LnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnIzEgU2lnbiBpbiB3aXRoIEdvb2dsZScsXHJcbiAgICAgICAgc3JjIDogYCR7ZWFzeUxvZ2lufWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnU2lnbiBpbiB3aXRoIGdvb2dsZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICcjMiBNb3ZlIG9uIHRvIG1hbmFnZW1lbnQgcGFnZScsXHJcbiAgICAgICAgc3JjIDogYCR7bGlua01hbmFnZW1lbnRQYWdlfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnTW92ZSBvbiB0byBtYW5hZ2VtZW50IHBhZ2UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnIzMgQ2xpY2sgdGhlIGJsdWUgYnV0dG9uJyxcclxuICAgICAgICBzcmMgOiBgJHtzdGFydFJpZ2h0QXdheX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ2NsaWNrIFwiZ2V0IHN0YXJ0ZWQgcmlnaHQgYXdheVwiIGJ1dHRvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICcjNCBNYWtlIEhlYWRlcnMnLFxyXG4gICAgICAgIHNyYyA6IGAke21ha2VIZWFkZXJzfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnbWFrZSBoZWFkZXJzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJyM1IENyZWF0ZSwgRWRpdCwgUmVtb3ZlIHRhYmxlIHJlY29yZHMnLFxyXG4gICAgICAgIHNyYyA6IGAke2hhbmRsZVRhYmxlfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnaGFuZGxlIHRhYmxlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJyM2IFVzZSBteW1lbnUgdG8gaGFuZGxlIGRhdGEnLFxyXG4gICAgICAgIHNyYyA6IGAke3VzZU15bWVudX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ3VzZSBteW1lbnUnXHJcbiAgICB9LFxyXG5dOyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcm93ICwgQm94LCBUeXBvZ3JhcGh5ICwgUGFwZXIsIEF2YXRhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ3Jvc3NsaW5lIGZyb20gJy4vQ3Jvc3NsaW5lJztcclxuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcclxuaW1wb3J0IGd1aWRlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2d1aWRlLnBuZyc7XHJcbmltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi9JbWFnZVNsaWRlU291cmNlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBtaW5XaWR0aDogNzUwLFxyXG4gICAgICAgIHdpZHRoIDogJzY1dncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc4MHZoJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgfSxcclxuICAgIHRleHRQYXBlciA6IHtcclxuICAgICAgICBtaW5XaWR0aCA6IDM1MCxcclxuICAgICAgICB3aWR0aCA6ICcyNXZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnODB2aCcsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIGJpZ0F2YXRhciA6IHtcclxuICAgICAgICB3aWR0aCA6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dFdpdGhTaGFkb3cgOiB7XHJcbiAgICAgIGNvbG9yOicjNTg1NjU2JyxcclxuICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgICAgZm9udFNpemU6JzMuNXJlbScsXHJcbiAgICAgIG1hcmdpbkxlZnQ6JzJ2dycsXHJcbiAgICAgIHRleHRTaGFkb3c6ICc0cHggMS41cHggMS41cHggZ3JleSdcclxuICAgIH0sXHJcbiAgICBsb2dvQm94IDoge1xyXG4gICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93J1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uQm94IDoge1xyXG4gICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIG1heFdpZHRoIDogJzUwdncnLFxyXG4gICAgICBtYXJnaW4gOiAnMCAwIDAgM3Z3J1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2F1dG9QbGF5LCBzZXRBdXRvUGxheV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICAgIHNldEF1dG9QbGF5KHRydWUpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Q3Jvc3NsaW5lPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQm94fT5cclxuICAgICAgICAgICAgPEF2YXRhciBhbHQ9J2hlbHAnIHNyYz17Z3VpZGVJbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0F2YXRhcn0+XHJcbiAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2J1dHRvbicgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRXaXRoU2hhZG93fT4gTWFuYWdlbWVudCBBcHAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25Cb3h9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+QW4gYXBwbGljYXRpb24gdGhhdCB5b3UgY2FuIGVhc2lseSBjcmVhdGUgJiBkZXNpZ24geW91ciBvd24gZGF0YS48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5HZXQgc3RhcnRlZCB3aXRoIHlvdXIgR29vZ2xlIGFjY291bnQhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+VGhpcyBhcHAgd2lsbCBub3Qga2VlcCBhbnkgcGVyc29uYWwgaW5mb3JtYXRpb24uPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nyb3NzbGluZT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDogMTAwMCB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZUNhcm91c2VsIGxpc3Q9e2ltYWdlTGlzdH0gc2V0Q3VycmVudFNsaWRlPXtzZXRDdXJyZW50U2xpZGV9IGF1dG9QbGF5PXthdXRvUGxheX0vPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcwIDAgMCcgfX1cclxuICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IDE1MDAgfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNsaWRlfVxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IFBhcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtHcm93fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjoncm93LXJldmVyc2UnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnbm93cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICc5MHZ3JyxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgbWluV2lkdGg6IDY1MCxcclxuICAgICAgd2lkdGggOiAnNjB2dycsXHJcbiAgICAgIGhlaWdodCA6ICc3MHZoJyxcclxuICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIHRleHQgOiB7XHJcbiAgICBtaW5XaWR0aCA6IDQ1MCxcclxuICAgIHdpZHRoIDogJzMwdncnLFxyXG4gICAgaGVpZ2h0IDogJzcwdmgnLFxyXG4gICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInXHJcbiAgfSxcclxuICB9KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTcwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDogMTAwMCB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDogMTUwMCB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2JhY2tncm91bmQxLmpwZyc7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFN0YXJ0QnV0dG9uIGZyb20gXCIuL1N0YXJ0QnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvdmVyJyxcclxuICAgICAgICBjb2xvciA6ICd3aGl0ZSdcclxuICAgIH0sXHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbZmFkZSxzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzRmlyc3RSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICAgICAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSBpc0ZpcnN0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTM1MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjEzMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7dGV4dFNoYWRvdzonNXB4IDEuNXB4IDEuNXB4IGdyYXknfX0+XHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50ID8gJ1dFTENPTUUnIDogJ1JlYWR5IHRvIHN0YXJ0Pyd9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgaXNGaXJzdFJlZi5jdXJyZW50ICYmIFxyXG4gICAgICAgICAgICAoPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e3RleHRTaGFkb3c6JzNweCAxcHggMXB4IGdyYXknfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PilcclxuICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgICAgIHtpc0ZpcnN0UmVmLmN1cnJlbnQ/IG51bGwgOiAoPFN0YXJ0QnV0dG9uLz4pfVxyXG4gICAgICAgICAgICB7LyogIWlzRmlyc3RSZWYg7J28IOyLnCDrsJTroZzqsIDquLAg67KE7Yq8IOy2lOqwgCAqL31cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7QnV0dG9uICwgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFBsYXlBcnJvd1NoYXJwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICcwLjV2aCdcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcycHggMXB4IDFweCBncmF5JyxcclxuICAgICAgICBjb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9tYW5hZ2VtZW50JyBzdHlsZT17e3RleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFBsYXlBcnJvd1NoYXJwIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRTaXplIDogMzB9fS8+fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFycm93LmQwODMyOGY2MmQxOWI2NmY4ZWE4ZDZkMDA2NzI0YzhiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYWNrZ3JvdW5kMS44NDAwM2JjZTIxZmQ0MmI3OWRjMGE3Nzk4ZmFiMWZhYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWFzeS1sb2dpbi4zZTkxYjhkODg3MzU2ODkwNzlhZmQwNzZlM2UwNzQyMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZ3VpZGUuZTliNzBjZGY4NDJkODRmYWJlNDAxNDVmOWE3YTM3MjAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhbmRsZS10YWJsZS4zYzU4NjkxNGE5NmQ0YWZlZGRjNWM3YWQzZDdkZjM1NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibGluay1tYW5hZ2VtZW50LXBhZ2UuNDgwMDRkMTMzYjVmYzIyNTc3NzA0Yzk1ZWIzNWYzZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1ha2UtaGVhZGVycy5jZmZhYzYzNGYyOWQzOGRkYmQxZjQ0NjdhNTczZWJjNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFuYWdlbWVudC1iYWNrZ3JvdW5kLmEwMDhkZTgxMzk1ODFiMGRhYmYxODMyZWQxYzljNDZlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJteW1lbnUuOWZkZDU4YWNhNzRlYjQ4ZDk1NWY4MzVjOWVjODc5NmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXJ0LXJpZ2h0LWF3YXkuNGUyMTcyNjJkMmM4ZDg2ZDVlMGY2ZWU0MzJhZWZiY2YucG5nXCI7IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qcydcclxuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgICg8Q29va2llc1Byb3ZpZGVyPlxyXG4gICAgICAgIDxBcHAvPlxyXG4gICAgPC9Db29raWVzUHJvdmlkZXI+KVxyXG4gICAgLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBGYWRlLCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZydcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDEpXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uQ29udGFpbmVyIDoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHRleHRTaGFkb3cgOiAnMC41cHggMC41cHggMXB4ICMwMDAwMDA1YycsXHJcbiAgICAgICAgbWFyZ2luIDogJzAgMXZ3IDEuN3ZoJyxcclxuICAgICAgICBjb2xvcjogJyM2YTc0OGMnLFxyXG4gICAgfSxcclxufSkpO1xyXG5jb25zdCBkZWZhdWx0RGF0YSA9IHtcclxuICAgIGNvbHVtbnMgOiBbXHJcbiAgICAgIHsgdGl0bGU6ICdOYW1lJywgZmllbGQ6ICduYW1lJyAsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAgeyB0aXRsZTogJ1N1cm5hbWUnLCBmaWVsZDogJ3N1cm5hbWUnIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdCaXJ0aCBZZWFyJywgZmllbGQ6ICdiaXJ0aFllYXInIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdQaG9uZScgLCBmaWVsZDoncGhvbmUnLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dlbmRlcicsXHJcbiAgICAgICAgZmllbGQ6ICdnZW5kZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHRpdGxlOiAnTWVtbycgLCBmaWVsZDonbWVtbyd9XHJcbiAgICBdLFxyXG4gICAgZGF0YSA6IFtcclxuICAgICAgeyBuYW1lOiAnTWVobWV0Jywgc3VybmFtZTogJ0JhcmFuJywgYmlydGhZZWFyOiAxOTgzLCBwaG9uZTonMDEwNDY1MDk5OTUnICxnZW5kZXI6IDEgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnQWRhbScsIHN1cm5hbWU6ICdBZGFtJywgYmlydGhZZWFyOiAxOTg0LCBwaG9uZTonMDEwNDY1MDk3OTUnICxnZW5kZXI6IDIgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnTWVobWV0Jywgc3VybmFtZTogJ0F0b20nLCBiaXJ0aFllYXI6IDE5ODUsIHBob25lOicwMTA0NjUwOTY5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdtdWwnLCBzdXJuYW1lOiAnS29uZ25hJywgYmlydGhZZWFyOiAxOTg2LCBwaG9uZTonMDEwNDY1MDkxOTUnICxnZW5kZXI6IDEgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnSmFjaycsIHN1cm5hbWU6ICdKYWNrJywgYmlydGhZZWFyOiAxOTg3LCBwaG9uZTonMDEwNDY1MDkyOTUnICxnZW5kZXI6IDIgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnQm9iJywgc3VybmFtZTogJ0JvYicsIGJpcnRoWWVhcjogMTk4OCwgcGhvbmU6JzAxMDQ2NTA5Mzk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICBdXHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZhdWx0UGFnZSAoe3N0YXRlICwgc2V0U3RhdGUsIG1hdGNofSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZhZGUyLCBzZXRGYWRlMl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkRFTU9DbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUgLCBjb2x1bW5zIDogZGVmYXVsdERhdGEuY29sdW1ucyAsIGRhdGEgOiBkZWZhdWx0RGF0YS5kYXRhLCBkZWZhdWx0UGFnZSA6ICFzdGF0ZS5kZWZhdWx0UGFnZX0pO1xyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0RmFkZSh0cnVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNldEZhZGUyKHRydWUpICwgMTUwMCk7XHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXIgOiA4MDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbml0aWFsJyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAgTWFuYWdlbWVudCBUYWJsZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgZ3V0dGVyQm90dG9tIHN0eWxlPXt7dGV4dFNoYWRvdzonMnB4IDJweCAxcHggYmxhY2snfX0+IFxyXG4gICAgICAgICAgICAgICAgWW91IG1heSB0cnkgdGhlIERFTU8gaWYgdGhpcyB5b3VyIGZpcnN0IHRpbWUsIFxyXG4gICAgICAgICAgICAgICAgb3IgZ2V0IHN0YXJ0ZWQgcmlnaHQgYXdheSFcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8RmFkZSBpbj17ZmFkZTJ9IHRpbWVvdXQ9e3tlbnRlciA6IDMwMDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25ERU1PQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVNFIERFTU8gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURUQgUklHSFQgQVdBWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgXHJcbiAgICBCb3ggLFBhcGVyLCBtYWtlU3R5bGVzLCBGYWRlLCBUZXh0RmllbGQsIFRvb2x0aXAsIFR5cG9ncmFwaHksIENoZWNrYm94XHJcbn1cclxuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGdcIjtcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQgeyBzYXZlSGVhZGVycyB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHsgZ2V0TWFuYWdlbWVudFRhYmxlIH0gZnJvbSAnLi4vdXRpbC9NYW5hZ2VtZW50QVBJJztcclxuaW1wb3J0IHVzZU9uRmlyc3RSZW5kZXIgZnJvbSAnLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTIwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnc3BhY2UtYXJvdW5kJyxcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnMTB2aCcsXHJcbiAgICB9LFxyXG4gICAgZm9ybVJvb3QgOiB7XHJcbiAgICAgICAgJyYgPiAqJzoge1xyXG4gICAgICAgICAgICBtYXJnaW46ICcwLjV2aCAxdncnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzYwY2gnLFxyXG4gICAgICAgICAgICBtaW5XaWR0aCA6ICc0MGNoJyxcclxuICAgICAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnMTB2aCcsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZCA6IGBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb250YWluJyxcclxuICAgICAgICBtYXJnaW5MZWZ0IDogJzN2dycsXHJcbiAgICAgICAgdHJhbnNmb3JtIDogJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb24gOiB7XHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcidcclxuICAgIH1cclxufSkpXHJcbmNvbnN0IGRlZmF1bHRIZWFkZXIgPSB7XHJcbiAgICBcImhlYWRlcjBcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIxXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyMlwiIDogJycsXHJcbiAgICBcImhlYWRlcjNcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI0XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNVwiIDogJycsXHJcbiAgICBcImhlYWRlcjZcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI3XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOFwiIDogJycsXHJcbiAgICBcImhlYWRlcjlcIiA6ICcnLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcnMgKHtpc0xvYWRpbmd9KSB7XHJcbiAgICAvLyBzdHlsZSwgY29va2llXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gUmVhY3QudXNlQ29udGV4dChQcm9ncmVzc0NvbnRleHQpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gICAgLy8gc3RhdGVzXHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgICBjb25zdCBbcmVzdWx0U25hY2sgLCBzZXRSZXN1bHRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZSwgY29udGVudCA6ICcnfSk7XHJcbiAgICBjb25zdCBbZGF0YSAsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGhlYWRlcnMgOiBkZWZhdWx0SGVhZGVyLFxyXG4gICAgICAgIGdyb3VwaW5ncyA6IEFycmF5KDEwKS5maWxsKGZhbHNlKSxcclxuICAgIH0pXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGRhdGFSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgICAgZ2V0TWFuYWdlbWVudFRhYmxlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSA6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5nTGVuZ3RoID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncy5sZW5ndGggOiAwIDogMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzID8gWy4uLnJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzXSA6IFtdIDogW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIC0gZ3JvdXBpbmdMZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cGluZ3MucHVzaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzID8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzIDoge30gOiB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnNMZW5ndGggPSBPYmplY3QudmFsdWVzKGhlYWRlcnMpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBoZWFkZXJzTGVuZ3RoOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbYGhlYWRlciR7aX1gXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge2hlYWRlcnMsZ3JvdXBpbmdzfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtoZWFkZXJzLCBncm91cGluZ3N9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7ICAvLyB1bmF1dGhvcml6ZWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAzNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQgOiBgUGxlYXNlIGxvZyBpbiBhZ2Fpbi5gfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBlcnJvciAoY29kZSA6ICR7cmVzcG9uc2Uuc3RhdHVzfSlgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAzNTAwKTtcclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICApXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyb3VwaW5ncyA6IFtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuZ3JvdXBpbmdzXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxbZGF0YS5oZWFkZXJzLCBkYXRhLmdyb3VwaW5nc10pO1xyXG5cclxuICAgIC8vIGVmZmVjdHNcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+eyBcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVN1Ym1pdChkYXRhUmVmLmN1cnJlbnQuaGVhZGVycywgZGF0YVJlZi5jdXJyZW50Lmdyb3VwaW5ncywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGhhbmRsZVByb2dyZXNzKHJlc3VsdCA9PT0gJ2Vycm9yJyA/ICdlcnJvcicgOiAnc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyBldmVudHNcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgndXNlcicpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoaGVhZGVycywgZ3JvdXBpbmdzLCBpc0F1dG9TYXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKGhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpKSB7IC8vIDE16riA7J6QIOydtOyDgSDsoJztlZwg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGhlYWRlcnMpLmZpbHRlcih2PT52KS5sZW5ndGggPT09IDApIHsgICAgIC8vIOu5hOyWtOyeiOydhCDqsr3smrAg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZUhlYWRlcnMoaGVhZGVycyxncm91cGluZ3MpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzQXV0b1NhdmUpIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSwgY29udGVudCA6IHJlc3BvbnNlLnJlc3VsdH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDIwMDApO1xyXG4gICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3Blbjp0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50OidQbGVhc2UgbG9nIGluIGFnYWluLid9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBbYGhlYWRlciR7aW5kZXh9YF0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUdyb3VwaW5ncyA9IChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgZ3JvdXBpbmdzIDogZGF0YS5ncm91cGluZ3MubWFwKCh2LGkpPT4gaT09PWluZGV4PyBlLnRhcmdldC5jaGVja2VkIDogdil9KTtcclxuICAgIH1cclxuICAgIC8vIGNvbXBvbmVudFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXIgOiAxNTAwfX0+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17NH0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVJvb3R9IGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nZGl2Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGNvbG9yPSd0ZXh0UHJpbWFyeScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIEVkaXQgRm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbG9yPXtPYmplY3QudmFsdWVzKGRhdGEuaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkgPyAnYmx1ZScgOiAncmVkJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29sb3I9J2luaXRpYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlciBzaG91bGQgYmUgbGVzcyB0aGFuIDE1IGxldHRlcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5oZWFkZXJzKS5tYXAoKGhlYWRlcixpbmRleCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2luZGV4PT09MD8gdHJ1ZTpmYWxzZX1cclxuICAgICAgICAgICAgICAgIGlkPXtgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtgaGVhZGVyLSR7aW5kZXgrMX1gfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaGVhZGVyc1tgaGVhZGVyJHtpbmRleH1gXX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlSW5wdXRDaGFuZ2UoZSxpbmRleCl9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17ZGF0YS5oZWFkZXJzW2BoZWFkZXIke2luZGV4fWBdLmxlbmd0aCA+IDE1ID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiXHJcbllvdSBjYW4gYXJyYW5nZSB0aGUgZGF0YSB3aXRoIGEgdmFsaWQgaGVhZGVyLCBcclxuVW5pcXVlIHZhbHVlcyBhcmUgbm90IGNvbW1vbmx5IHVzZWQgZm9yIHRoaXMgZnVuY3Rpb24gaW4gZ2VuZXJhbC5cclxuZS5nLikgbmFtZSwgYWRkcmVzcywgbW9iaWxlIE5PLiBldGMuXHJcblwiXHJcbiAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdyaWdodCcgZW50ZXJEZWxheT17MjAwfSBsZWF2ZURlbGF5PXsyMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkYXRhLmdyb3VwaW5nc1tpbmRleF19IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUdyb3VwaW5ncyhlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmRleD09PTA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PiBHcm91cGluZyE/PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiU1VCTUlUXCIgYXJpYS1sYWJlbD0nc3VibWl0JyBwbGFjZW1lbnQ9J3RvcCcgZW50ZXJEZWxheT17MjAwfSBsZWF2ZURlbGF5PXs0MDB9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gb25Nb3VzZU92ZXI9eyhlKT0+ZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInfVxyXG4gICAgICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZVN1Ym1pdChkYXRhLmhlYWRlcnMgLCBkYXRhLmdyb3VwaW5ncyl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtgSGVhZGVyIHNob3VsZCBiZSBsZXNzIHRoYW4gMTUgbGV0dGVycyA6KGB9IHN0YXR1cz1cImVycm9yXCIvPlxyXG4gICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtyZXN1bHRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0UmVzdWx0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgY29udGVudD17cmVzdWx0U25hY2suY29udGVudH0gc3RhdHVzPXtyZXN1bHRTbmFjay5zdGF0dXM9PT0nZXJyb3InPyAnZXJyb3InIDogJ3N1Y2Nlc3MnfS8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnO1xyXG5pbXBvcnQgTWFudWFsRGlhbG9nIGZyb20gXCIuL01hbnVhbERpYWxvZ1wiO1xyXG5pbXBvcnQgeyBvcHRpb25zLGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL1RhYmxlT3B0aW9uc1wiO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBEZWZhdWx0UGFnZSBmcm9tICcuL0RlZmF1bHRQYWdlJztcclxuaW1wb3J0IHBhcnNlRGF0YSBmcm9tICcuLi91dGlsL3BhcnNlRGF0YSc7XHJcbmltcG9ydCBTYXZlQnV0dG9uIGZyb20gJy4vU2F2ZUJ1dHRvbic7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuLy8gdXNlRWZmZWN066GcIGRhdGEsIGNvbHVtbnMg6rCAIOuzgOqyveuQoCDrlYzrp4jri6Qg7ISc67KE7JeQIOyggOyepSDtm4Qg6rCx7IugXHJcbi8vIC4vdXRpbCDqsr3roZzsl5Ag66Gc7KeBIOyekeyEsVxyXG4vLyDthrXsi6Dsl5Ag64yA7ZWcIHRlc3Rjb2Rl7J6R7ISxXHJcbi8vIGNvbHVtbnPsmYAgZGF0YeydmCDqsIEg6rCS65Ok7JeQIOuMgO2VnCDrrLTqsrDshLEg7LK07YGsXHJcbi8vIHByb3BzVHlwZSDsnpHshLFcclxuLy8gU2lkZU1lbnVMaXN0ID0+IExvZ2lu7Jy866GcIOuzgOqyvSwg67mE66Gc6re47J24IOyLnCBMT0dJTuycvOuhnCDrs7Tsnbwg6rKDLCDroZzqt7jsnbjsi5wgTVkgTUVOVeuhnCDrs7TquLBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VtZW50VGFibGUoe2lzTG9hZGluZ30pIHtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAvLyBzdGF0ZXNcclxuICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KTtcclxuICBjb25zdCBbc2F2ZWRTbmFjayAsIHNldFNhdmVkU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICBjb25zdCBbZXJyb3JTbmFjayAsIHNldEVycm9yU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICBjb25zdCBbZGlhbG9nLCBzZXREaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoeyAgLy8g7LWc7LSIIEFQSeuhnCDrsJvslYTsmKTripQg64+Z7J6R7ZWE7JqUXHJcbiAgICBkZWZhdWx0UGFnZSA6IHRydWUsXHJcbiAgICBoYXNUYWJsZSA6IGZhbHNlLFxyXG4gICAgY29sdW1uczogW10sXHJcbiAgICBkYXRhOiBbXSxcclxuICB9KTtcclxuICBjb25zdCB0YWJsZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgIGlmIChjb29raWVzLnVzZXIpIHsgICAvLyDsv6DtgqTsl5Ag7Yag7YGw7J20IOyeiOydhCDqsr3smrAg7YWM7J2067iUIGZldGNoIEFQSeyLpO2WiVxyXG4gICAgICBnZXRNYW5hZ2VtZW50VGFibGUoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc3RhdHVzIDogJHtyZXNwb25zZS5zdGF0dXN9ICwgZGF0YSA6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSl9YCk7XHJcbiAgICAgICAgICAvLyDsnKDsoIAg7ZmV7J2465CQ6rOgIO2FjOydtOu4lOuPhCDruYTslrTsnojsp4Ag7JWK7J2EIOqyveyasFxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cz09PTIwMCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57c2V0U25hY2soe29wZW46dHJ1ZX0pfSw0MDApO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgY29sdW1ucyA6IHBhcnNlRGF0YShyZXNwb25zZS5kYXRhLmhlYWRlcnMgLCByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyksXHJcbiAgICAgICAgICAgICAgZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICBkZWZhdWx0UGFnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGhhc1RhYmxlIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge3NldERpYWxvZyh7b3BlbiA6IGZhbHNlfSk7fTtcclxuICBjb25zdCBoYW5kbGVPblNhdmUgPSAoaXNBdXRvU2F2ZSkgPT4ge1xyXG4gICAgICAvLyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIOydmCByZWbsl5DshJwg7Iug66Kw64+E7J6I64qUIOuNsOydtO2EsCDssLjsobBcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICBjb25zdCBncm91cGluZ3MgPSBbXTtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgb2JqW2BoZWFkZXIke2l9YF0gPSB2LnRpdGxlO1xyXG4gICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgIH0se30pXHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuZGF0YS5mb3JFYWNoKCh2LGkpPT57XHJcbiAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNhdmVEYXRhKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSk7XHJcbiAgICAgIGlmKCFpc0F1dG9TYXZlKSBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gZWZmZWN0c1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7ICAgLy8gd2luZG93IOuNlOu4lO2BtOumrSDsnbTrsqTtirgg7LaU6rCALCDrj4Tsm4Drp5Agb3BlblxyXG4gICAgY29uc3Qgb25kYkNsaWNrID0gKCkgPT4gc2V0RGlhbG9nKHtvcGVuIDogIWRpYWxvZy5vcGVufSk7XHJcbiAgICBjb25zdCBvbktleWRvd24gPSAoZSkgPT4geyAgIC8vIGN0cmwgKyBz66GcIOyggOyepSBldmVudFxyXG4gICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKFwiTWFjXCIpID8gZS5tZXRhS2V5IDogZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlT25TYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgICAvLyDstIjquLDsoJHqt7zsnZgg6rK97JqwIOuNsOydtO2EsOqwgCDsl4bslrQg7JeQ65+sIOuwnOyDne2VoCDsiJgg7J6I7Ja0IOyCvO2VreyLneycvOuhnCDtjJDri6gg7ZuEIOyWuOuniOyatO2KuOyLnOydmCBmZXRjaEFQSeyLpO2WiVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZU9uU2F2ZSh0cnVlKSA6IG51bGwgOiBudWxsO1xyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZVByb2dyZXNzKCdzdWNjZXNzJykgOiBudWxsIDogbnVsbDtcclxuICB9O1xyXG59LCBbXSk7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbiAgY29uc3QgTWFyZ2luID0gKCkgPT4gKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PjwvQm94Pik7ICAvLyDsl6zrsLFcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgIHtcclxuICAgIHN0YXRlLmRlZmF1bHRQYWdlID9cclxuICAgICAgKDxEZWZhdWx0UGFnZSBzdGF0ZT17c3RhdGV9IHNldFN0YXRlPXtzZXRTdGF0ZX0vPilcclxuICAgIDogXHJcbiAgICAoPEJveD5cclxuICAgICAgICA8TWFudWFsRGlhbG9nIG9wZW49e2RpYWxvZy5vcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0vPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICB0YWJsZVJlZj17dGFibGVSZWZ9XHJcbiAgICAgIHRpdGxlPXtcclxuICAgICAgPFNhdmVCdXR0b24gc2V0U2F2ZWRTbmFjaz17c2V0U2F2ZWRTbmFja30gXHJcbiAgICAgIC8vIOuniOyatO2KuCDsnbTtm4Tsl5Ag7KCR6re87ZWE7JqUXHJcbiAgICAgIGRhdGFNYW5hZ2VyPXt0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA6IHt9fS8+XHJcbiAgICB9XHJcbiAgICAgIGNvbHVtbnM9e3N0YXRlLmNvbHVtbnN9XHJcbiAgICAgIGRhdGE9e3N0YXRlLmRhdGF9XHJcbiAgICAgIGxvY2FsaXphdGlvbj17bG9jYWxpemF0aW9ufSAvLyDroZzsu6zrnbzsnbTspohcclxuICAgICAgb3B0aW9ucz17b3B0aW9uc30gLy8g64K067O064K06riwLCDqt7jro6jtlZFcclxuICAgICAgYWN0aW9ucz17Wy8vIOupgO2LsCDshYDroInshZgg7J6R7JeFXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b29sdGlwIDogJ1JlbW92ZSB0aGUgU2VsZWN0ZWQgcm93KHMpJyxcclxuICAgICAgICAgICAgaWNvbiA6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICBvbkNsaWNrIDogKGUgLCBkZWxldGlvbnMpID0+IHsgIC8vIOyEoO2Dne2VnCDssrTtgazrsJXsiqTsl5Ag64yA7ZW0IOuqqOuRkCDsgq3soJwg7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZih2KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZEYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucHJldkRhdGEgLCBkYXRhfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdfSBcclxuICAgICAgZWRpdGFibGU9e3tcclxuICAgICAgICBvblJvd0FkZDogKG5ld0RhdGEpID0+ICAvLyDstpTqsIBcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgb25Sb3dVcGRhdGU6IChuZXdEYXRhLCBvbGREYXRhKSA9PiAgLy8g7IiY7KCVXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAob2xkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgICAgZGF0YVtkYXRhLmluZGV4T2Yob2xkRGF0YSldID0gbmV3RGF0YTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nbmVlZCBzb21lIGhlbHA/ID8gZG91YmxlLWNsaWNrIGFueSBzcGFjZSAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NhdmVkU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNhdmVkU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdTQVZFRCAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2Vycm9yU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldEVycm9yU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdFUlJPUiAhJyBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgIDwvQm94PlxyXG4gICAgKX1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufSIsIlxyXG5pbXBvcnQge0RpYWxvZyxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgQm94LFxyXG4gICAgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gICAgaWNvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICczdncnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbnVhbERpYWxvZyAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge29wZW4sIG9uQ2xvc2V9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpY29ucyA9IFtcclxuICAgICAgICB7aWNvbiA6ICdhZGRfYm94JyAsIGRlc2NyaXB0aW9uIDogJ1tBZGRdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJ1tFZGl0XSByZWNvcmRzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NlYXJjaCcgLCBkZXNjcmlwdGlvbiA6ICdUeXBlIGRvd24gd29yZHMgdG8gW3NlYXJjaF0uJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2F2ZV9hbHQnICwgZGVzY3JpcHRpb24gOiAnW0Rvd25sb2FkXSBmaWxlcyBpbiBDVlMgZm9ybWF0Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ3ZpZXdfd2VlaycgLCBkZXNjcmlwdGlvbiA6ICdbU2VsZWN0XSBjb2x1bW5zIHRvIGJlIGRpc3BsYXllZCd9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtkZWxldGVdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY2hlY2tfYm94JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgU2VsZWN0IHRoZSBjaGVja2JveCBvbiB0aGUgcm93Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ2ZhY3RfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDaGVjayB0aGUgbnVtYmVyIG9mIHRoZSByb3dzIHNlbGVjdGVkLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2RlbGV0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGiIENsaWNrIHRoZSBCaW4gaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUuJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW0VkaXRdIGhlYWRlcnMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnbWVudScgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIE9wZW4gTVlQQUdFJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2xpY2sgdGhlIFBlbmNpbCBpY29uJ30sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgb25DbG9zZT17b25DbG9zZX0gb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPiBCQVNJQyBNQU5VQUwgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbnMubWFwKChpY29uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17YCR7aWNvbn0gKyAke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17YG1hdGVyaWFsLWljb25zICR7Y2xhc3Nlcy5pY29ufWB9IHN0eWxlPXt7d2lkdGg6JzN2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aWNvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICA8L0RpYWxvZz5cclxuICAgIClcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtzZXRTYXZlZFNuYWNrICwgZGF0YU1hbmFnZXJ9KSB7XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrICgpIHtcclxuICAgICAgICAgIC8vIFNBVkUgRVZFTlQgdXRpbCA+IE1hbmFnZW1lbnRBUEkuc2F2ZURhdGEg66eM65Ok7Ja07IScIOy9nO2VmOq4sFxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICB9LHt9KTtcclxuICAgICAgICAgIGRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgIHJlc3VsdCA6IFxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShkYXRhKX1cclxuICAgICAgICAgICR7Z3JvdXBpbmdzfVxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgICAgICBgKVxyXG4gICAgICAgIHNhdmVEYXRhKGhlYWRlcnMsZ3JvdXBpbmdzLGRhdGEpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8VG9vbHRpcCB0aXRsZT0nQ2xpY2sgdG8gU0FWRSAoIEN0cmwgKyBTICknPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBcclxuICAgICAgICBvbkNsaWNrPXsoKT0+b25DbGljaygpfT5cclxuICAgICAgICAgIFNBVkVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtBZGRCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbi8vIERBVEEgVEFCTEUgT1BUSU9OU1xyXG5cclxuIGV4cG9ydCBjb25zdCBvcHRpb25zPSB7XHJcbiAgICBleHBvcnRCdXR0b246IHRydWUsXHJcbiAgICBncm91cGluZzp0cnVlLFxyXG4gICAgc2VsZWN0aW9uOnRydWUsXHJcbiAgICBoZWFkZXJTdHlsZTp7IFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uc0NvbHVtbkluZGV4Oi0xLCAgLy8g7JWh7IWYIOyVhOydtOy9mOychOy5mFxyXG4gICAgY29sdW1uc0J1dHRvbiA6IHRydWUsIFxyXG4gICAgZGVib3VuY2VJbnRlcnZhbCA6IDE2MCwgLy8g66Gc65Sp7Iuc6rCEXHJcbiAgICBwYWdlU2l6ZSA6IDE1LCAgICAgICAgICAvLyDtjpjsnbTsp4DsgqzsnbTspohcclxuICAgIHBhZ2VTaXplT3B0aW9ucyA6IFs1LCAxNSwgMzAsIDUwLCAxMDBdLCAvLyDtjpjsnbTspogg7IKs7J207KaIIOyiheulmFxyXG4gIH1cclxuIGV4cG9ydCBjb25zdCBsb2NhbGl6YXRpb24gPSB7XHJcbiAgICBwYWdpbmF0aW9uIDogeyBsYWJlbERpc3BsYXllZFJvd3MgOiAne2NvdW50fSByb3dzIHwge2Zyb219LXt0b30nICwgfSxcclxuICAgIHRvb2xiYXI6IHtuUm93c1NlbGVjdGVkOiAnezB9IHJvdyhzKSBzZWxlY3RlZCd9LFxyXG4gICAgaGVhZGVyOiB7YWN0aW9uczogJ0VkaXQnfSxcclxuICAgIGJvZHk6IHtlbXB0eURhdGFTb3VyY2VNZXNzYWdlOiBcclxuICAgICAgICAoXHJcbiAgICAgICAgPEJveCBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICB7YE5vIFJlY29yZHMgdG8gZGlzcGxheWB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgZW5kSWNvbj17PEFkZEJveC8+fVxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2BDbGljayB0aGUgcGx1cyBpY29uIG9uIHRoZSByaWdodCBhYm92ZSBmb3IgYSBuZXcgcmVjb3JkLiBgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gIH1cclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7VG9vbGJhciwgRHJhd2VyICwgQnV0dG9uICwgR3JpZCxcclxuICAgICBEaXZpZGVyLCBBcHBCYXIgYXMgQXBwYmFyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBIaWRlT25TY2hyb2xsIGZyb20gXCIuLi9jdXN0b21Ib29rL0hpZGVPblNjaHJvbGxcIjtcclxuaW1wb3J0IFNpZGVNZW51TGlzdCBmcm9tIFwiLi9TaWRlTWVudUxpc3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBTaWduT3V0QnV0dG9uIGZyb20gXCIuL1NpZ25PdXRCdXR0b25cIjtcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBhbGlnbkl0ZW1zOidmbGV4LXN0YXJ0JyxcclxuICAgICAgICBwYWRkaW5nVG9wOjE4LFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206MTgsXHJcbiAgICB9LFxyXG4gICAgbGVmdCA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBwYWRkaW5nTGVmdDozMCxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LXN0YXJ0J1xyXG4gICAgfSxcclxuICAgIGNlbnRlciA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICByaWdodCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDo0NSxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LWVuZCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIHBhZGRpbmc6YDAgJHt0aGVtZS5zcGFjaW5nKDMpfWBcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYgKHByb3BzKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBtZW51IDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3IsIG9wZW4pID0+IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZsYWcgPSBvcGVuPyBzdGF0ZVthbmNob3JdID8gZmFsc2UgOiB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IGZsYWcgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgYW5jaG9yID0gcHJvZmlsZS5uYW1lPyAnTVlQQUdFJyA6J0xPR0lOJztcclxuICAgIGNvbnN0IGxpbmtzID0gWydib2FyZCcsJ21hbmFnZW1lbnQnXTtcclxuICAgIGNvbnN0IExvZ291dEJ0biA9IHByb2ZpbGUubmFtZT8gPFNpZ25PdXRCdXR0b24vPiA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhpZGVPblNjaHJvbGwgey4uLnByb3BzfT5cclxuICAgICAgICA8QXBwYmFyIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2JveFNoYWRvdzonbm9uZSd9fT5cclxuICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4gSG9tZSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke2xpbmt9YH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319IGtleT17bGlua30+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IHtsaW5rfSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50ZXJ9PjxzcGFuPjwvc3Bhbj48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIHRydWUpfSBzdHlsZT17e21hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthbmNob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge0xvZ291dEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyIG9wZW49e3N0YXRlW2FuY2hvcl19IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gdmFyaWFudD0ncGVyc2lzdGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtTaWRlTWVudUxpc3QoIHsuLi5wcm9wcywgYW5jaG9yICx0b2dnbGVEcmF3ZXIgLCBwcm9maWxlfSApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcGJhcj5cclxuICAgICAgICA8L0hpZGVPblNjaHJvbGw+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtVGV4dCwgTGlzdEl0ZW1BdmF0YXIgLCBEaXZpZGVyLCBMaXN0SXRlbSwgVHlwb2dyYXBoeSAsIEF2YXRhciwgSWNvbkJ1dHRvbiAsXHJcbiAgICAgTW9kYWwsIEJveCwgQnV0dG9uLFxyXG4gICAgIFBhcGVyLFxyXG4gICAgIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgU2lnbkluQnV0dG9uIGZyb20gJy4vU2lnbkluQnV0dG9uJztcclxuaW1wb3J0IGdvb2dsZVNpZ25pbkltYWdlIGZyb20gJy4uL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmcnO1xyXG5pbXBvcnQge3JlZGlyZWN0R29vZ2xlTG9naW59IGZyb20gJy4uL3V0aWwvTG9naW5BUEknO1xyXG5pbXBvcnQge0VkaXQsIEluZm8sIERlbGV0ZUZvcmV2ZXIsIFdhcm5pbmd9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHtHbG9iYWxTbmFja2JhckNvbnRleHR9IGZyb20gJy4uL2FwcCdcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbGlzdCA6IHtcclxuICAgICAgICB3aWR0aCA6ICcyM3Z3JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdzdGFydCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW0gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW1UZXh0IDoge1xyXG4gICAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYXJnZUF2YXRhciA6IHtcclxuICAgICAgICB3aWR0aCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgIH0sXHJcbiAgICBpbmxpbmUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdpbmxpbmUnXHJcbiAgICB9LFxyXG4gICAgbGlzdFRleHQgOiB7XHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbW9kYWwgOiB7XHJcbiAgICAgICAgdG9wIDogJzUwJScsXHJcbiAgICAgICAgbGVmdCA6ICc1MCUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICBtaW5XaWR0aCA6IDQwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBtb2RhbFJvd0JveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsQ29sQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdzdGFydCdcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJ1xyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUxpc3QgKHthbmNob3IgLCB0b2dnbGVEcmF3ZXIsIHByb2ZpbGV9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBoYW5kbGVHbG9iYWxTbmFja2JhciA9IFJlYWN0LnVzZUNvbnRleHQoR2xvYmFsU25hY2tiYXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtlbWFpbElucHV0LCBzZXRFbWFpbElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2tMb2dpbiAoKSB7XHJcbiAgICAgICAgcmVkaXJlY3RHb29nbGVMb2dpbigpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja01vZGFsID0gKCkgPT4gc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRFbWFpbElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbWFpbElucHV0ID09PSBwcm9maWxlLmVtYWlsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfsnbzsuZgnKTtcclxuICAgICAgICAgICAgc2F2ZURhdGEoe30sW10sW3t9XSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUdsb2JhbFNuYWNrYmFyKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuOnRydWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZGF0YS5yZXN1bHQgPT09ICdzdWNjZXNzJyA/ICdzdWNjZXNzJyA6ICdlcnJvcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sMTUwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlR2xvYmFsU25hY2tiYXIoe1xyXG4gICAgICAgICAgICAgICAgb3Blbjp0cnVlLCBcclxuICAgICAgICAgICAgICAgIHJlc3VsdDonZXJyb3InXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNMb2dnZWQgPSBwcm9maWxlPyBwcm9maWxlLm5hbWU/IHRydWUgOiBmYWxzZSA6IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxyXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXNMb2dnZWQ/ICdQUk9GSUxFJyA6ICdMT0dJTiBNRU5VJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuXHJcbiAgICAgICAgICAgIHtpc0xvZ2dlZD8gXHJcblxyXG4gICAgICAgICAgICAoPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtwcm9maWxlLnBpY3R1cmV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZUF2YXRhcn0gYWx0PXtwcm9maWxlLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvZmlsZS5uYW1lfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRleHR9PjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgdmFyaWFudD1cImluc2V0XCIgY29tcG9uZW50PVwibGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0VNQUlMIDogJyBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3NwYW4nIHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dFByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mbyBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3ttYXJnaW5SaWdodDonMXZ3J319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHNlY29uZGFyeT0nRURJVCBIRUFERVJTJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nZW5kJyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBjb2xvcj0ncHJpbWFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nIGNvbG9yPSdzZWNvbmRhcnknIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzF2dyd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBzZWNvbmRhcnk9J1JFTU9WRSBBTEwgREFUQScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J2VuZCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVyIGNvbG9yPSdzZWNvbmRhcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiDrqqjri6wgKi99XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIG9wZW49e21vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlT25DbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLWNvbnRlbnRzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxSb3dCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nc3RhcnQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJyBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlciBjb2xvcj0nc2Vjb25kYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtdGl0bGVcIiB2YXJpYW50PSdidXR0b24nIGRpc3BsYXk9J2Jsb2NrJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F1dGlvbiA6IHBlcm1hbmVudCBkZWxldGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxDb2xCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1jb250ZW50c1wiIHZhcmlhbnQ9J2JvZHkxJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BBbGwgZGF0YSB3aWxsIGJlIGRlbGV0ZWQgYW5kIGNhbm5vdCBiZSByZWNvdmVyZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgY29ycmVjdGx5IHRvIGNvbnRpbnVlLmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJz57cHJvZmlsZS5lbWFpbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFJvd0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPSdFLU1BSUwnIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAoPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8U2lnbkluQnV0dG9uIHNpZ25Jbj17Z29vZ2xlU2lnbmluSW1hZ2V9Lz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT4pfVxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMsQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5CdXR0b24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtzaWduSW59ID0gcHJvcHM7IC8vIOydtOuvuOyngFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2lnbklufSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT48L2ltZz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHAnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSAsIEljb25CdXR0b24sIFRvb2x0aXB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbG9nb3V0IDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6IDAsXHJcbiAgICAgICAgd2lkdGggOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGQnXHJcbiAgICB9LFxyXG4gIH0pKShUb29sdGlwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPSdMb2ctb3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3BhZGRpbmc6NH19IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD4gICAgXHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tIFwiLi9zZXJ2ZXJVUkxcIjtcclxuXHJcbi8vIEdvb2dsZSBPcGVuSUQgQ29ubmVjdCDsnbTsmqntlZjquLBcclxuLy8g7LC46rOgIOq4sOyIoOu4lOuhnOq3uCA6IGh0dHBzOi8vd3d3LmRhbGVzZW8uY29tL2dvb2dsZS1vaWRjL1xyXG5cclxuLy8gVVJMIGV4cG9ydFxyXG4vLyBzZXZlcuyXkOyEnCDrsJvsnYAgdXJs66GcIOumrOuLpOydtOugie2KuFxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RHb29nbGVMb2dpbiA9ICgpID0+IGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2xvZ2luYCkudGhlbihyZXMgPT4gbG9jYXRpb24uYXNzaWduKHJlcy5kYXRhKSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbkFuZFByb2ZpbGUgPSAodG9rZW4pID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vbG9naW5gLCB7dG9rZW59ICx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZSxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2U9PiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UuZGF0YSkpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSAnLi9zZXJ2ZXJVUkwnO1xyXG5cclxuLy8g7YWM7J2067iUIOuNsOydtO2EsCDrsJvslYTsmKTquLAgY29va2ll7JeQIOuLtOq4tCB0b2tlbuyCrOyaqVxyXG5leHBvcnQgY29uc3QgZ2V0TWFuYWdlbWVudFRhYmxlID0gICgpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbWFuYWdlbWVudGAse1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczp0cnVlXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlSGVhZGVycyA9IChoZWFkZXJzLCBncm91cGluZ3MpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBzYXZpbmcgaGVhZGVycyA6IFxyXG4gICAgaGVhZGVycyA6ICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9XHJcbiAgICBncm91cGluZ3MgOiAke0pTT04uc3RyaW5naWZ5KGdyb3VwaW5ncyl9YCk7XHJcbiAgICByZXR1cm4gKGF4aW9zLnB1dChgJHtzZXJ2ZXJVUkx9L2hlYWRlcnNgLCB7XHJcbiAgICAgICAgLy8gZGF0YVxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgZ3JvdXBpbmdzXHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pLnRoZW4ocmVzID0+IFByb21pc2UucmVzb2x2ZShyZXMuZGF0YSkpKTsgICAgLy8g7L+g7YKk7JmAIO2VqOq7mFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZURhdGEgPSAoaGVhZGVycywgZ3JvdXBpbmdzLCBkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLnB1dChgJHtzZXJ2ZXJVUkx9L2RhdGFgLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBncm91cGluZ3MsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMuZGF0YSlcclxuICAgIH0pKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IChoZWFkZXJzICwgZ3JvdXBpbmdzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYGRhdGEgcGFyc2luZyEhISFgKVxyXG4gICAgcmV0dXJuIChPYmplY3QudmFsdWVzKGhlYWRlcnMpLmZpbHRlcih2PT52KS5tYXAoKHZhbHVlLGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUgOiB2YWx1ZSxcclxuICAgICAgICBmaWVsZCA6IHZhbHVlLFxyXG4gICAgICAgIGdyb3VwaW5nIDogZ3JvdXBpbmdzW2luZGV4XVxyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfSIsImV4cG9ydCBkZWZhdWx0IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==