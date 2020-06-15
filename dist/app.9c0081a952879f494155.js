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


function ImageCarousel(props) {
  var imageList = props.list ? props.list : [{}];
  var setStepper = props.setStepper,
      currentSlide = props.currentSlide,
      setCurrentSlide = props.setCurrentSlide;

  var handleAfterSlide = function handleAfterSlide(slideIndex) {
    setStepper(slideIndex);
    setCurrentSlide(slideIndex);
  };

  return /*#__PURE__*/React.createElement(nuka_carousel__WEBPACK_IMPORTED_MODULE_0__["default"], {
    slideIndex: currentSlide,
    afterSlide: function afterSlide(index) {
      return handleAfterSlide(index);
    },
    autoplay: false,
    autoplayInterval: 3000,
    transitionMode: "scroll",
    speed: 800
  }, imageList.map(function (image, index) {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        width: '100%',
        height: '100%'
      },
      key: index
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        width: '100%',
        backgroundColor: 'inherit',
        color: '#fff',
        textShadow: '5px 1.5px 1.5px gray',
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
    }, "#".concat(index + 1, " ").concat(image.name))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        width: '100%'
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

/***/ "./src/home/Description.js":
/*!*********************************!*\
  !*** ./src/home/Description.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Description; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      height: '35vh',
      backgroundColor: 'inherit'
    },
    innerBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'inherit',
      width: '30vw',
      color: '#eaeaea',
      textShadow: '1px 5px 5px #9e9999'
    }
  };
});
function Description() {
  var classes = useStyles();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      grow = _React$useState2[0],
      setGrow = _React$useState2[1];

  var domRef = React.useRef();
  React.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        setGrow(entry.isIntersecting);
      });
    }, {
      // options
      rootMargin: '150px 0px'
    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '50% 100%'
    }
  }, grow ? {
    timeout: {
      appear: 1500,
      enter: 1500,
      exit: 1000
    }
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.root,
    ref: domRef
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.innerBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    style: {
      fontWeight: 'bolder'
    }
  }, "SOME TEXT")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.innerBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    style: {
      fontWeight: 'bolder'
    }
  }, "SOME TEXT")))));
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
  }), /*#__PURE__*/React.createElement(_Main__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_Introduction2__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement(_Introduction__WEBPACK_IMPORTED_MODULE_1__["default"], null));
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
  name: 'Sign in with Google',
  src: "".concat(_images_easy_login_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  description: 'Sign in with google'
}, {
  name: 'Move on to management page',
  src: "".concat(_images_link_management_page_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
  description: 'Move on to management page'
}, {
  name: 'Click the blue button',
  src: "".concat(_images_start_right_away_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
  description: 'click "get started right away" button'
}, {
  name: 'Make Headers',
  src: "".concat(_images_make_headers_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
  description: 'make headers'
}, {
  name: 'Create, Edit, Remove table records',
  src: "".concat(_images_handle_table_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
  description: 'handle table'
}, {
  name: 'Use mymenu to handle data',
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
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ "./src/home/Carousel.js");
/* harmony import */ var _ImageSlideSources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageSlideSources */ "./src/home/ImageSlideSources.js");
/* harmony import */ var _ListCarouselDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListCarouselDescription */ "./src/home/ListCarouselDescription.js");
/* harmony import */ var _images_desk_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/desk.jpg */ "./src/images/desk.jpg");
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
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundImage: "url(".concat(_images_desk_jpg__WEBPACK_IMPORTED_MODULE_5__["default"], ")"),
      backgroundSize: 'cover'
    },
    paper: {
      minWidth: 750,
      maxWidth: '1000px',
      width: '70vw',
      height: '65vh',
      margin: theme.spacing(4),
      backgroundColor: 'inherit'
    },
    textPaper: {
      minWidth: 350,
      width: '70vw',
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'inherit'
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

  var _React$useState5 = React.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      stepper = _React$useState6[0],
      setStepper = _React$useState6[1];

  var classes = useStyles();
  var domRef = React.useRef();
  console.log("currentSlide : ".concat(currentSlide));
  React.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return setGrow(entry.isIntersecting);
      });
      setCurrentSlide(0);
    }, {
      // options
      rootMargin: '-70px 0px'
    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fade"], {
    "in": grow,
    timeout: {
      enter: 3000,
      exit: 800
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.root,
    ref: domRef
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '50% 100%'
    }
  }, grow ? {
    timeout: {
      appear: 1500,
      enter: 1500,
      exit: 1000
    }
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 4,
    className: classes.paper
  }, /*#__PURE__*/React.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    list: _ImageSlideSources__WEBPACK_IMPORTED_MODULE_3__["default"],
    currentSlide: currentSlide,
    setCurrentSlide: setCurrentSlide,
    setStepper: setStepper
  }))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grow"], _extends({
    "in": grow,
    style: {
      transformOrigin: '50% 100%'
    }
  }, grow ? {
    timeout: {
      appear: 2000,
      enter: 1500,
      exit: 1000
    }
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 4,
    className: classes.textPaper
  }, /*#__PURE__*/React.createElement(_ListCarouselDescription__WEBPACK_IMPORTED_MODULE_4__["default"], {
    stepper: stepper
  }))))));
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
/* harmony import */ var _images_moon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/moon.png */ "./src/images/moon.png");
/* harmony import */ var _Crossline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Crossline */ "./src/home/Crossline.js");
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Description */ "./src/home/Description.js");
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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black'
    },
    logoBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    bigAvatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      color: '#fff',
      backgroundColor: "green"
    },
    textWithShadow: {
      color: '#fff',
      fontWeight: 'bolder',
      fontSize: '4rem',
      marginLeft: '2vw',
      textShadow: '1px 5px 5px #9e9999'
    },
    descriptionBox: {
      display: 'flex',
      color: '#fff',
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

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      rise = _React$useState4[0],
      setRise = _React$useState4[1];

  var classes = useStyles();
  var domRef = React.useRef();
  React.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        setGrow(entry.isIntersecting);
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.root,
    ref: domRef
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": grow,
    timeout: {
      enter: 2000,
      exit: 800
    }
  }, /*#__PURE__*/React.createElement(_Crossline__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.logoBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], _extends({
    "in": grow
  }, grow ? {
    timeout: {
      enter: 3000,
      exit: 800
    }
  } : {}), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    alt: "help",
    src: _images_moon_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    className: classes.bigAvatar
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "button",
    className: classes.textWithShadow
  }, " Management App ")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.descriptionBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle2"
  }, "An application that you can easily create & design your own data."), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle2"
  }, "Get started with your Google account!"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle2"
  }, "This app will not keep any personal information.")))), /*#__PURE__*/React.createElement(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/ListCarouselDescription.js":
/*!*********************************************!*\
  !*** ./src/home/ListCarouselDescription.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DescriptionList; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _ImageSlideSources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageSlideSources */ "./src/home/ImageSlideSources.js");



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      flexDirection: 'row',
      fontWeight: 'bolder'
    },
    inline: {
      display: 'inline'
    }
  };
});
function DescriptionList(_ref) {
  var stepper = _ref.stepper;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.root
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stepper"], {
    activeStep: stepper,
    orientation: "horizontal",
    style: {
      backgroundColor: 'inherit'
    }
  }, _ImageSlideSources__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (item, index) {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Step"], {
      completed: index < stepper,
      key: index
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["StepLabel"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "caption",
      style: {
        fontWeight: 'bolder'
      }
    }, item.name)));
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

/***/ "./src/images/desk.jpg":
/*!*****************************!*\
  !*** ./src/images/desk.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "desk.3207c1ef94c867f80b0e9df6ac78d52b.jpg");

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

/***/ "./src/images/moon.png":
/*!*****************************!*\
  !*** ./src/images/moon.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "moon.f206bc3d5be8311c77d9897da44e1f65.png");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL1NuYWNrQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ3Jvc3NsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW1hZ2VTbGlkZVNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTGlzdENhcm91c2VsRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9TdGFydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Fycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQxLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Rlc2suanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZWFzeS1sb2dpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oYW5kbGUtdGFibGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFrZS1oZWFkZXJzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tb29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL215bWVudS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGFydC1yaWdodC1hd2F5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvRGVmYXVsdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbnVhbERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9TYXZlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1RhYmxlT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZGVNZW51TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25JbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25PdXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9naW5BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTWFuYWdlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wYXJzZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc2VydmVyVVJMLmpzIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTG9nb3V0Q29udGV4dCIsIlByb2dyZXNzQ29udGV4dCIsIkdsb2JhbFNuYWNrYmFyQ29udGV4dCIsIkFwcCIsInFzIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHIiLCJpZF90b2tlbiIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm9wZW4iLCJyZXN1bHQiLCJnbG9iYWxTbmFja2JhciIsInNldEdsb2JhbFNuYWNrYmFyIiwidG9rZW4iLCJ1c2VyIiwicHJvZ3Jlc3NSZWYiLCJ1c2VSZWYiLCJoYW5kbGVCZWZvcmV1bmxvYWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJjbGVhckludGVydmFsIiwidXNlRWZmZWN0IiwiZ2V0VG9rZW5BbmRQcm9maWxlIiwidGhlbiIsImRhdGEiLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhdGgiLCJtYXhBZ2UiLCJlcnIiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJCb2FyZCIsIkhpZGVPblNjcm9sbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsIkxvYWRpbmciLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiZm9udFdlaWdodCIsIm9uQ2xvc2UiLCJjb250ZW50Iiwic3RhdHVzIiwiZGlyZWN0aW9uIiwiZm9udFNpemUiLCJ1c2VPbkZpcnN0UmVuZGVyIiwiZnVuYyIsImlzRmlyc3RSZWYiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWluSGVpZ2h0IiwiZm9vdGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiZ3JleSIsInRleHRBbGlnbiIsImFycm93IiwibWluV2lkdGgiLCJhbGlnblNlbGYiLCJiYWNrZ3JvdW5kIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZFNpemUiLCJTdGlja3lGb290ZXIiLCJjbGFzc2VzIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwidHJhbnNpdGlvbiIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImN1cnNvciIsIkltYWdlQ2Fyb3VzZWwiLCJpbWFnZUxpc3QiLCJsaXN0Iiwic2V0U3RlcHBlciIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImhhbmRsZUFmdGVyU2xpZGUiLCJzbGlkZUluZGV4IiwiaW5kZXgiLCJtYXAiLCJpbWFnZSIsImNvbG9yIiwidGV4dFNoYWRvdyIsInNyYyIsIm1hcmdpbiIsImZsZXhXcmFwIiwiQ3Jvc3NsaW5lIiwiZmFkZSIsInNldEZhZGUiLCJkb21SZWYiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJlbnRlciIsImV4aXQiLCJpbm5lckJveCIsIkRlc2NyaXB0aW9uIiwiZ3JvdyIsInNldEdyb3ciLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0aW1lb3V0IiwiYXBwZWFyIiwiSG9tZSIsImVhc3lMb2dpbiIsImRlc2NyaXB0aW9uIiwibGlua01hbmFnZW1lbnRQYWdlIiwic3RhcnRSaWdodEF3YXkiLCJtYWtlSGVhZGVycyIsImhhbmRsZVRhYmxlIiwidXNlTXltZW51IiwiYmFja2dyb3VuZEltYWdlIiwicGFwZXIiLCJtYXhXaWR0aCIsInRleHRQYXBlciIsIkludHJvZHVjdGlvbiIsInN0ZXBwZXIiLCJsb2dvQm94IiwiYmlnQXZhdGFyIiwidGV4dFdpdGhTaGFkb3ciLCJtYXJnaW5MZWZ0IiwiZGVzY3JpcHRpb25Cb3giLCJyaXNlIiwic2V0UmlzZSIsImd1aWRlSW1hZ2UiLCJpbmxpbmUiLCJEZXNjcmlwdGlvbkxpc3QiLCJzbGlkZVNvdXJjZSIsIml0ZW0iLCJhbGlnbkNvbnRlbnQiLCJNYWluIiwidXNlU3R5bGUiLCJidXR0b24iLCJ0ZXh0IiwidHlwb2dyYXBoeSIsInRleHREZWNvcmF0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGFpbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwiZGVmYXVsdERhdGEiLCJjb2x1bW5zIiwidGl0bGUiLCJmaWVsZCIsImdyb3VwaW5nIiwic3VybmFtZSIsImJpcnRoWWVhciIsInBob25lIiwiZ2VuZGVyIiwibWVtbyIsIkRlZmF1bHRQYWdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiZmFkZTIiLCJzZXRGYWRlMiIsImhhbmRsZU9uREVNT0NsaWNrIiwiZGVmYXVsdFBhZ2UiLCJzZXRUaW1lb3V0IiwiZm9ybVJvb3QiLCJ0cmFuc2Zvcm0iLCJkZWZhdWx0SGVhZGVyIiwiSGVhZGVycyIsImhhbmRsZVByb2dyZXNzIiwidXNlQ29udGV4dCIsInNuYWNrIiwic2V0U25hY2siLCJyZXN1bHRTbmFjayIsInNldFJlc3VsdFNuYWNrIiwiaGVhZGVycyIsImdyb3VwaW5ncyIsIkFycmF5IiwiZmlsbCIsInNldERhdGEiLCJkYXRhUmVmIiwiZ2V0TWFuYWdlbWVudFRhYmxlIiwicmVzcG9uc2UiLCJncm91cGluZ0xlbmd0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwiaGVhZGVyc0xlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImhhbmRsZUxvZ291dCIsImhhbmRsZVN1Ym1pdCIsImhyZWYiLCJvcmlnaW4iLCJpc0F1dG9TYXZlIiwiZXZlcnkiLCJ2IiwiZmlsdGVyIiwic2F2ZUhlYWRlcnMiLCJoYW5kbGVJbnB1dENoYW5nZSIsInZhbHVlIiwiaGFuZGxlR3JvdXBpbmdzIiwiY2hlY2tlZCIsImhlYWRlciIsIk1hbmFnZW1lbnRUYWJsZSIsInNhdmVkU25hY2siLCJzZXRTYXZlZFNuYWNrIiwiZXJyb3JTbmFjayIsInNldEVycm9yU25hY2siLCJkaWFsb2ciLCJzZXREaWFsb2ciLCJoYXNUYWJsZSIsInRhYmxlUmVmIiwicGFyc2VEYXRhIiwiaGFuZGxlRGlhbG9nQ2xvc2UiLCJoYW5kbGVPblNhdmUiLCJkYXRhTWFuYWdlciIsInJlZHVjZSIsIm9iaiIsInRhYmxlRGF0YSIsInJlc3QiLCJzYXZlRGF0YSIsIm9uZGJDbGljayIsIm9uS2V5ZG93biIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwibWV0YUtleSIsImN0cmxLZXkiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1hcmdpbiIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJldkRhdGEiLCJvblJvd0FkZCIsIm5ld0RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZXZTdGF0ZSIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsIk1hbnVhbERpYWxvZyIsImljb25zIiwiZXhwb3J0QnV0dG9uIiwic2VsZWN0aW9uIiwiaGVhZGVyU3R5bGUiLCJhY3Rpb25zQ29sdW1uSW5kZXgiLCJjb2x1bW5zQnV0dG9uIiwiZGVib3VuY2VJbnRlcnZhbCIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwicGFnaW5hdGlvbiIsImxhYmVsRGlzcGxheWVkUm93cyIsInRvb2xiYXIiLCJuUm93c1NlbGVjdGVkIiwiYWN0aW9ucyIsImJvZHkiLCJlbXB0eURhdGFTb3VyY2VNZXNzYWdlIiwiZmxleEdyb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxlZnQiLCJwYWRkaW5nTGVmdCIsImp1c3RpZnkiLCJjZW50ZXIiLCJyaWdodCIsInBhZGRpbmdSaWdodCIsIk5hdiIsIm1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJldmVudCIsImZsYWciLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJsaXN0VGV4dCIsIm1vZGFsIiwicG9zaXRpb24iLCJib3JkZXIiLCJzaGFkb3dzIiwibW9kYWxSb3dCb3giLCJtb2RhbENvbEJveCIsIk1lbnVMaXN0IiwiaGFuZGxlR2xvYmFsU25hY2tiYXIiLCJlbWFpbElucHV0Iiwic2V0RW1haWxJbnB1dCIsImhhbmRsZU9uQ2xpY2tMb2dpbiIsInJlZGlyZWN0R29vZ2xlTG9naW4iLCJoYW5kbGVPbkNsaWNrTW9kYWwiLCJzZXRNb2RhbCIsImhhbmRsZU9uQ2xvc2VNb2RhbCIsImhhbmRsZU9uU3VibWl0IiwicmVsb2FkIiwiaXNMb2dnZWQiLCJnb29nbGVTaWduaW5JbWFnZSIsIlNpZ25JbkJ1dHRvbiIsInNpZ25JbiIsImxvZ291dCIsIkxpZ2h0VG9vbHRpcCIsIndpdGhTdHlsZXMiLCJjb21tb24iLCJ3aGl0ZSIsIlRvb2x0aXAiLCJheGlvcyIsImdldCIsInNlcnZlclVSTCIsInJlcyIsImFzc2lnbiIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJwdXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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VSxtQkFBZSxFQUFDO0FBQWpCLEdBSk0sRUFJa0JsVSxJQUpsQixDQUl1QixVQUFBK1QsR0FBRyxFQUFJO0FBQ2xDLFdBQU83RSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I0RSxHQUFHLENBQUM5VCxJQUFwQixDQUFQO0FBQ0gsR0FOTyxDQUFSO0FBT0gsQ0FSTSxDOzs7Ozs7Ozs7Ozs7QUNyQlA7QUFBZSx5RUFBQzRLLE9BQUQsRUFBV0MsU0FBWCxFQUF5QjtBQUN0Q3BMLFNBQU8sQ0FBQ0MsR0FBUjtBQUNFLFNBQVErTCxNQUFNLENBQUNDLE1BQVAsQ0FBY2QsT0FBZCxFQUF1QnNCLE1BQXZCLENBQThCLFVBQUFELENBQUM7QUFBQSxXQUFFQSxDQUFGO0FBQUEsR0FBL0IsRUFBb0N0SCxHQUFwQyxDQUF3QyxVQUFDMEgsS0FBRCxFQUFPM0gsS0FBUCxFQUFpQjtBQUMvRCxXQUFPO0FBQ0x1RSxXQUFLLEVBQUdvRCxLQURIO0FBRUxuRCxXQUFLLEVBQUdtRCxLQUZIO0FBR0xsRCxjQUFRLEVBQUcwQixTQUFTLENBQUNuRyxLQUFEO0FBSGYsS0FBUDtBQUtELEdBTk8sQ0FBUjtBQU9ELENBVEgsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZSxzRkFBZixFIiwiZmlsZSI6ImFwcC45YzAwODFhOTUyODc5ZjQ5NDE1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiIGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi9OYXZcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkL0JvYXJkXCI7XHJcbmltcG9ydCBNYW5hZ2VtZW50IGZyb20gXCIuL21hbmFnZW1lbnQvTWFuYWdlbWVudFwiO1xyXG5pbXBvcnQgSGVhZGVycyBmcm9tICcuL21hbmFnZW1lbnQvSGVhZGVycyc7XHJcbmltcG9ydCB7Q3NzQmFzZWxpbmV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZS9Ib21lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSdcclxuaW1wb3J0IHsgZ2V0VG9rZW5BbmRQcm9maWxlIH0gZnJvbSBcIi4vdXRpbC9Mb2dpbkFQSVwiO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuXHJcbi8vIOy7qO2FjeyKpO2KuCDrqqnroZ1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTG9nb3V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IEdsb2JhbFNuYWNrYmFyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IHsgaWRfdG9rZW4gfSA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICBjb25zdCBbIHByb2ZpbGUgLCBzZXRQcm9maWxlIF0gPSBSZWFjdC51c2VTdGF0ZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnbG9iYWxTbmFja2Jhciwgc2V0R2xvYmFsU25hY2tiYXJdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZSAsIHJlc3VsdDogJ3N1Y2Nlc3MnfSlcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llcy51c2VyO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NSZWYgPSBSZWFjdC51c2VSZWYoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVCZWZvcmV1bmxvYWQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHByb2dyZXNzIDogJHtwcm9ncmVzc1JlZi5jdXJyZW50fWApO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHByb2dyZXNzUmVmLmN1cnJlbnQgPSAocHJvZ3Jlc3NSZWYuY3VycmVudCA8IDEwMCA/IHByb2dyZXNzUmVmLmN1cnJlbnQgKyAyMCA6IDEwMCk7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzUmVmLmN1cnJlbnQgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgc2V0R2xvYmFsU25hY2tiYXIoe29wZW46dHJ1ZSAsIHJlc3VsdDpyZXN1bHR9KTtcclxuICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sMjAwKVxyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoIEFQSSDsi6TtloknKTtcclxuICAgICAgICAgICAgZ2V0VG9rZW5BbmRQcm9maWxlKGlkX3Rva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge25hbWUgLGVtYWlsLCBwaWN0dXJlfSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgZGF0YSA6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJwcm9maWxlXCIse25hbWUgLCBlbWFpbCwgcGljdHVyZX0se3BhdGg6XCIvXCIgLCBtYXhBZ2UgOiA3MjAwfSk7ICAvLyBtYXhBZ2UgOiAy7Iuc6rCEXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3Igb2NjdXJlZCA6ICR7ZXJyfWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbaWRfdG9rZW5dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyDquLDsobQg7Yag7YGw7J20IOyeiOydhCDqsr3smrAg7ISc67KE66GcIOyerOyalOyyre2VtOyEnCDrp4zro4zrkJwg7Yag7YGw7J247KeAIO2ZleyduFxyXG4gICAgICAgIC8vIOunjOujjOuQnCDthqDtgbDsnbwg6rK97JqwIOy/oO2CpO2UhOuhnO2VhCwgc3RhdGXtlITroZztlYQsIOunjOujjOuQnCDthqDtgbAg66qo65GQIOygnOqxsFxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg6riw7KG0IO2GoO2BsCDsnojsnYwgdG9rZW4gOiAke3Rva2VufWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3Rva2VuXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGNvb2tpZXMucHJvZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY29va2llcy5wcm9maWxlIDogJHtKU09OLnN0cmluZ2lmeShjb29raWVzLnByb2ZpbGUpfWApO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29va2llcy5wcm9maWxlXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9maWxlIHx8IHtuYW1lIDogJyd9fT4gICAgICAgICAgey8qIOycoOyggCDtlITroZztlYQg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8TG9nb3V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UHJvZmlsZX0+ICAgey8qIOuhnOq3uOyVhOybgyDsnbTrsqTtirgg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyhyZXN1bHQpPT5oYW5kbGVCZWZvcmV1bmxvYWQocmVzdWx0KX0+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldEdsb2JhbFNuYWNrYmFyfT5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cclxuICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eygpPT48SG9tZSBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2JvYXJkJyByZW5kZXI9eygpPT48Qm9hcmQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9tYW5hZ2VtZW50JyByZW5kZXI9eygpPT4gPE1hbmFnZW1lbnQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9oZWFkZXJzJyByZW5kZXI9eygpPT4gPEhlYWRlcnMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgIDwvR2xvYmFsU25hY2tiYXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1Byb2dyZXNzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Mb2dvdXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17Z2xvYmFsU25hY2tiYXIub3Blbn0gb25DbG9zZT17KCk9PnNldEdsb2JhbFNuYWNrYmFyKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgICAgICBjb250ZW50PXtnbG9iYWxTbmFja2Jhci5yZXN1bHQ9PT0nZXJyb3InPyBgTm90IHNhdmVkLlxyXG4gICAgICAgICAgICBSZWFzb24gOiBJbnZhbGlkIGlucHV0LmAgOicgU0FWRUQgJ30gc3RhdHVzPXtnbG9iYWxTbmFja2Jhci5yZXN1bHR9XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj17e3ZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidyaWdodCd9fS8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoe2lzTG9hZGluZ30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgQm9hcmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZVNpZ25pbi4xY2UxYWFhNWExMjdmYTNlNDkyYTEyYmI2MmY5OTMwNC5wbmdcIjsiLCJpbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGUnO1xyXG5cclxuLy8gR05C7J2YIOyKrOudvOydtOuTnOq4sOuKpVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWRlT25TY3JvbGwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGUgYXBwZWFyPXtmYWxzZX0gZGlyZWN0aW9uPVwiZG93blwiIGluPXshdHJpZ2dlcn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2xpZGU+XHJcbiAgKTtcclxufSIsImltcG9ydCB7Qm94LCBDaXJjdWxhclByb2dyZXNzLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nICh7aXNMb2FkaW5nfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgIGlzTG9hZGluZyAmJiBcclxuICAgICAgICAgICAgKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHZoJywgd2lkdGg6JzEwMCUnLCBkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge2BTYXZpbmcgY2hhbmdlc2B9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgICA8L0JveD4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG59IiwiaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtvcGVuLCBvbkNsb3NlLCBjb250ZW50LCBzdGF0dXMsIGRpcmVjdGlvbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17ZGlyZWN0aW9uPyBkaXJlY3Rpb24gOiB7IHZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidjZW50ZXInIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17b25DbG9zZX0gc2V2ZXJpdHk9e3N0YXR1c31cclxuICAgICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCcgbWVzc2FnZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicsIGZvbnRTaXplOic1cmVtJ319PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgIClcclxufSIsIlxyXG4vLyBjb250c3RydWN0b3Ig7ZuFXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU9uRmlyc3RSZW5kZXIgKGZ1bmMpIHtcclxuICAgIGNvbnN0IGlzRmlyc3RSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcbiAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZnVuYygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgTGlua30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgSmFjaydzIFdlYnNpdGVcclxuICAgICAgICA8L0xpbms+eycgJ31cclxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgIHsnLid9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWluSGVpZ2h0OiAnMjB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOnRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdLFxyXG4gICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgd2lkdGggOiAnOXZ3JyxcclxuICAgICAgaGVpZ2h0IDogJzl2aCcsXHJcbiAgICAgIG1pbldpZHRoIDogJzcwcHgnLFxyXG4gICAgICBtaW5IZWlnaHQgOiAnNzBweCcsXHJcbiAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kIDpgbm8tcmVwZWF0IGNlbnRlci84MCUgdXJsKCR7YXJyb3d9KWAsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTonMnZoJyxcclxuICAgICAgbWFyZ2luVG9wIDogJzJ2aCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOidjb250YWluJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lGb290ZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJNb3ZlIHRvIFRvcFwiIGFyaWEtbGFiZWw9XCJtb3ZlLXRvLXRvcFwiIHBsYWNlbWVudD1cInRvcFwiIGVudGVyRGVsYXk9ezM1MH0gbGVhdmVEZWxheT17MTUwfT5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gb25Nb3VzZU92ZXI9eyhlKT0+dHJhbnNpdGlvbihlKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfSIsImltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCAocHJvcHMpIHtcclxuICAgIGNvbnN0IGltYWdlTGlzdCA9IHByb3BzLmxpc3QgPyBwcm9wcy5saXN0IDogW3t9XTtcclxuICAgIGNvbnN0IHtzZXRTdGVwcGVyLCBjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGhhbmRsZUFmdGVyU2xpZGUgPSAoc2xpZGVJbmRleCkgPT4ge1xyXG4gICAgICAgIHNldFN0ZXBwZXIoc2xpZGVJbmRleCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKHNsaWRlSW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBzbGlkZUluZGV4PXtjdXJyZW50U2xpZGV9XHJcbiAgICAgICAgYWZ0ZXJTbGlkZT0ge2luZGV4ID0+IGhhbmRsZUFmdGVyU2xpZGUoaW5kZXgpfVxyXG4gICAgICAgIGF1dG9wbGF5PXtmYWxzZX1cclxuICAgICAgICBhdXRvcGxheUludGVydmFsPXszMDAwfVxyXG4gICAgICAgIHRyYW5zaXRpb25Nb2RlPSdzY3JvbGwnXHJcbiAgICAgICAgc3BlZWQ9ezgwMH1cclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGltYWdlTGlzdC5tYXAoKGltYWdlLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J2luaGVyaXQnLCBjb2xvcjonI2ZmZicsIHRleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtgIyR7aW5kZXgrMX0gJHtpbWFnZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLnNyY30gb2JqZWN0LWZpdD0nY292ZXInLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICApO1xyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJveCAsIEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBtYXJnaW46MCxcclxuICAgICAgcGFkZGluZzonMXZ3JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpbjonYXV0bycsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyb3NzbGluZSh7Y2hpbGRyZW59KSB7XHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRGYWRlKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTUwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoyMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGJveFNoYWRvdz17NH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcm93LCBCb3gsIEZhZGUsIFR5cG9ncmFwaHksIERpdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdCA6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjoncm93JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMzV2aCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJ2luaGVyaXQnXHJcbiAgICB9LFxyXG4gICAgaW5uZXJCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJ2luaGVyaXQnLFxyXG4gICAgICAgIHdpZHRoIDogJzMwdncnLFxyXG4gICAgICAgIGNvbG9yOicjZWFlYWVhJyxcclxuICAgICAgICB0ZXh0U2hhZG93OiAnMXB4IDVweCA1cHggIzllOTk5OSdcclxuICAgIH1cclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNjcmlwdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICAgICAgICB9IFxyXG4gICAgICApfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICcxNTBweCAwcHgnXHJcbiAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8R3JvdyBpbj17Z3Jvd31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzUwJSAxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiB7YXBwZWFyIDogMTUwMCAsIGVudGVyIDogMTUwMCAsIGV4aXQgOiAxMDAwfSB9IDoge30pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lckJveH0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU09NRSBURVhUXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lckJveH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICBTT01FIFRFWFRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD4gICAgICBcclxuICAgICAgICA8L0dyb3c+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gXCIuL0ludHJvZHVjdGlvblwiO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uMiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb24yXCI7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7aXNMb2FkaW5nfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgICAgICAgICAgPE1haW4vPlxyXG4gICAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uMi8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBlYXN5TG9naW4gZnJvbSBcIi4uL2ltYWdlcy9lYXN5LWxvZ2luLnBuZ1wiO1xyXG5pbXBvcnQgbGlua01hbmFnZW1lbnRQYWdlIGZyb20gXCIuLi9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nXCI7XHJcbmltcG9ydCBzdGFydFJpZ2h0QXdheSBmcm9tIFwiLi4vaW1hZ2VzL3N0YXJ0LXJpZ2h0LWF3YXkucG5nXCI7XHJcbmltcG9ydCBtYWtlSGVhZGVycyBmcm9tIFwiLi4vaW1hZ2VzL21ha2UtaGVhZGVycy5wbmdcIjtcclxuaW1wb3J0IGhhbmRsZVRhYmxlIGZyb20gXCIuLi9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZ1wiO1xyXG5pbXBvcnQgdXNlTXltZW51IGZyb20gXCIuLi9pbWFnZXMvbXltZW51LnBuZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdTaWduIGluIHdpdGggR29vZ2xlJyxcclxuICAgICAgICBzcmMgOiBgJHtlYXN5TG9naW59YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdTaWduIGluIHdpdGggZ29vZ2xlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdNb3ZlIG9uIHRvIG1hbmFnZW1lbnQgcGFnZScsXHJcbiAgICAgICAgc3JjIDogYCR7bGlua01hbmFnZW1lbnRQYWdlfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnTW92ZSBvbiB0byBtYW5hZ2VtZW50IHBhZ2UnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ0NsaWNrIHRoZSBibHVlIGJ1dHRvbicsXHJcbiAgICAgICAgc3JjIDogYCR7c3RhcnRSaWdodEF3YXl9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdjbGljayBcImdldCBzdGFydGVkIHJpZ2h0IGF3YXlcIiBidXR0b24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ01ha2UgSGVhZGVycycsXHJcbiAgICAgICAgc3JjIDogYCR7bWFrZUhlYWRlcnN9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdtYWtlIGhlYWRlcnMnLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdDcmVhdGUsIEVkaXQsIFJlbW92ZSB0YWJsZSByZWNvcmRzJyxcclxuICAgICAgICBzcmMgOiBgJHtoYW5kbGVUYWJsZX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ2hhbmRsZSB0YWJsZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnVXNlIG15bWVudSB0byBoYW5kbGUgZGF0YScsXHJcbiAgICAgICAgc3JjIDogYCR7dXNlTXltZW51fWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAndXNlIG15bWVudScsXHJcbiAgICB9LFxyXG5dOyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcm93ICwgQm94LCBQYXBlcixGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBJbWFnZUNhcm91c2VsIGZyb20gXCIuL0Nhcm91c2VsXCI7XHJcbmltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi9JbWFnZVNsaWRlU291cmNlcyc7XHJcbmltcG9ydCBMaXN0Q3JvdXNlbERlc2NyaXB0aW9uIGZyb20gJy4vTGlzdENhcm91c2VsRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2Rlc2suanBnXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwdncnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvdmVyJyxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBtaW5XaWR0aDogNzUwLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTAwMHB4JyxcclxuICAgICAgICB3aWR0aCA6ICc3MHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnNjV2aCcsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgICB0ZXh0UGFwZXIgOiB7XHJcbiAgICAgICAgbWluV2lkdGggOiAzNTAsXHJcbiAgICAgICAgd2lkdGggOiAnNzB2dycsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2luaGVyaXQnXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc3RlcHBlciwgc2V0U3RlcHBlcl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc29sZS5sb2coYGN1cnJlbnRTbGlkZSA6ICR7Y3VycmVudFNsaWRlfWApXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEZhZGUgaW49e2dyb3d9ICB0aW1lb3V0PXt7ZW50ZXI6MzAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiB7YXBwZWFyIDogMTUwMCAsIGVudGVyIDogMTUwMCAsIGV4aXQgOiAxMDAwfSB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBpbWFnZSBjYXJvdXNlbCAqL31cclxuICAgICAgICAgICAgICAgICAgPEltYWdlQ2Fyb3VzZWwgXHJcbiAgICAgICAgICAgICAgICAgIGxpc3Q9e2ltYWdlTGlzdH0gXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZT17Y3VycmVudFNsaWRlfSBcclxuICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNsaWRlPXtzZXRDdXJyZW50U2xpZGV9IFxyXG4gICAgICAgICAgICAgICAgICBzZXRTdGVwcGVyPXtzZXRTdGVwcGVyfSBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnfX1cclxuICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAyMDAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9fSA6IHt9KX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogbGlzdCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdENyb3VzZWxEZXNjcmlwdGlvbiBzdGVwcGVyPXtzdGVwcGVyfSA+PC9MaXN0Q3JvdXNlbERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBQYXBlciwgQm94LCBHcm93LCBBdmF0YXIsIFR5cG9ncmFwaHksRmFkZSAsIFNsaWRlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IGd1aWRlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL21vb24ucG5nJztcclxuaW1wb3J0IENyb3NzbGluZSBmcm9tICcuL0Nyb3NzbGluZSc7XHJcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9EZXNjcmlwdGlvbidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgd2lkdGggOiAnMTAwdncnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnYmxhY2snXHJcbiAgICB9LFxyXG4gICAgbG9nb0JveCA6IHtcclxuICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdydcclxuICAgIH0sXHJcbiAgICBiaWdBdmF0YXIgOiB7XHJcbiAgICAgIHdpZHRoIDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgIH0sXHJcbiAgICB0ZXh0V2l0aFNoYWRvdyA6IHtcclxuICAgICAgY29sb3I6JyNmZmYnLFxyXG4gICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgICBmb250U2l6ZTonNHJlbScsXHJcbiAgICAgIG1hcmdpbkxlZnQ6JzJ2dycsXHJcbiAgICAgIHRleHRTaGFkb3c6ICcxcHggNXB4IDVweCAjOWU5OTk5J1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uQm94IDoge1xyXG4gICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIG1heFdpZHRoIDogJzUwdncnLFxyXG4gICAgICBtYXJnaW4gOiAnMCAwIDAgM3Z3J1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmlzZSwgc2V0UmlzZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICAgICAgICB9IFxyXG4gICAgICApfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgIDxGYWRlIGluPXtncm93fSAgdGltZW91dD17e2VudGVyOjIwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPENyb3NzbGluZT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0JveH0+XHJcbiAgICAgICAgICAgIDxGYWRlIGluPXtncm93fSB7Li4uKGdyb3c/IHt0aW1lb3V0OntlbnRlcjozMDAwLCBleGl0OjgwMH19IDoge30pfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGFsdD0naGVscCcgc3JjPXtndWlkZUltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuYmlnQXZhdGFyfS8+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdidXR0b24nIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0V2l0aFNoYWRvd30+IE1hbmFnZW1lbnQgQXBwIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9uQm94fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPkFuIGFwcGxpY2F0aW9uIHRoYXQgeW91IGNhbiBlYXNpbHkgY3JlYXRlICYgZGVzaWduIHlvdXIgb3duIGRhdGEuPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+R2V0IHN0YXJ0ZWQgd2l0aCB5b3VyIEdvb2dsZSBhY2NvdW50ITwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPlRoaXMgYXBwIHdpbGwgbm90IGtlZXAgYW55IHBlcnNvbmFsIGluZm9ybWF0aW9uLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Dcm9zc2xpbmU+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgPFByb2plY3REZXNjcmlwdGlvbi8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtUeXBvZ3JhcGh5ICwgU3RlcHBlciwgU3RlcCwgQm94LCBTdGVwTGFiZWx9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHNsaWRlU291cmNlIGZyb20gJy4vSW1hZ2VTbGlkZVNvdXJjZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJ1xyXG4gICAgfSxcclxuICAgIGlubGluZToge1xyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVzY3JpcHRpb25MaXN0ICh7c3RlcHBlcn0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e3N0ZXBwZXJ9IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidpbmhlcml0J319PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlU291cmNlLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8U3RlcCBjb21wbGV0ZWQ9e2luZGV4IDwgc3RlcHBlcn0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT57aXRlbS5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICl9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1N0ZXBwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZEltYWdlIGZyb20gJy4uL2ltYWdlcy9iYWNrZ3JvdW5kMS5qcGcnO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdGFydEJ1dHRvbiBmcm9tIFwiLi9TdGFydEJ1dHRvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke2JhY2tncm91bmRJbWFnZX0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICByb290TWFyZ2luIDogJy0zNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudCA/ICdXRUxDT01FJyA6ICdSZWFkeSB0byBzdGFydD8nfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50PyBudWxsIDogKDxTdGFydEJ1dHRvbi8+KX1cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7QnV0dG9uICwgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFBsYXlBcnJvd1NoYXJwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICcwLjV2aCdcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcycHggMXB4IDFweCBncmF5JyxcclxuICAgICAgICBjb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9tYW5hZ2VtZW50JyBzdHlsZT17e3RleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFBsYXlBcnJvd1NoYXJwIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRTaXplIDogMzB9fS8+fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFycm93LmQwODMyOGY2MmQxOWI2NmY4ZWE4ZDZkMDA2NzI0YzhiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYWNrZ3JvdW5kMS44NDAwM2JjZTIxZmQ0MmI3OWRjMGE3Nzk4ZmFiMWZhYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGVzay4zMjA3YzFlZjk0Yzg2N2Y4MGIwZTlkZjZhYzc4ZDUyYi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWFzeS1sb2dpbi4zZTkxYjhkODg3MzU2ODkwNzlhZmQwNzZlM2UwNzQyMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaGFuZGxlLXRhYmxlLjNjNTg2OTE0YTk2ZDRhZmVkZGM1YzdhZDNkN2RmMzU0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsaW5rLW1hbmFnZW1lbnQtcGFnZS40ODAwNGQxMzNiNWZjMjI1Nzc3MDRjOTVlYjM1ZjNkOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFrZS1oZWFkZXJzLmNmZmFjNjM0ZjI5ZDM4ZGRiZDFmNDQ2N2E1NzNlYmM0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYW5hZ2VtZW50LWJhY2tncm91bmQuYTAwOGRlODEzOTU4MWIwZGFiZjE4MzJlZDFjOWM0NmUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1vb24uZjIwNmJjM2Q1YmU4MzExYzc3ZDk4OTdkYTQ0ZTFmNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm15bWVudS45ZmRkNThhY2E3NGViNDhkOTU1ZjgzNWM5ZWM4Nzk2ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhcnQtcmlnaHQtYXdheS40ZTIxNzI2MmQyYzhkODZkNWUwZjZlZTQzMmFlZmJjZi5wbmdcIjsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzJ1xyXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgKDxDb29raWVzUHJvdmlkZXI+XHJcbiAgICAgICAgPEFwcC8+XHJcbiAgICA8L0Nvb2tpZXNQcm92aWRlcj4pXHJcbiAgICAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEZhZGUsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoMSlcclxuICAgIH0sXHJcbiAgICBidXR0b25Db250YWluZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcwLjVweCAwLjVweCAxcHggIzAwMDAwMDVjJyxcclxuICAgICAgICBtYXJnaW4gOiAnMCAxdncgMS43dmgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzZhNzQ4YycsXHJcbiAgICB9LFxyXG59KSk7XHJcbmNvbnN0IGRlZmF1bHREYXRhID0ge1xyXG4gICAgY29sdW1ucyA6IFtcclxuICAgICAgeyB0aXRsZTogJ05hbWUnLCBmaWVsZDogJ25hbWUnICwgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7IHRpdGxlOiAnU3VybmFtZScsIGZpZWxkOiAnc3VybmFtZScgfSxcclxuICAgICAgeyB0aXRsZTogJ0JpcnRoIFllYXInLCBmaWVsZDogJ2JpcnRoWWVhcicgfSxcclxuICAgICAgeyB0aXRsZTogJ1Bob25lJyAsIGZpZWxkOidwaG9uZScsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnR2VuZGVyJyxcclxuICAgICAgICBmaWVsZDogJ2dlbmRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdNZW1vJyAsIGZpZWxkOidtZW1vJ31cclxuICAgIF0sXHJcbiAgICBkYXRhIDogW1xyXG4gICAgICB7IG5hbWU6ICdNZWhtZXQnLCBzdXJuYW1lOiAnQmFyYW4nLCBiaXJ0aFllYXI6IDE5ODMsIHBob25lOicwMTA0NjUwOTk5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdBZGFtJywgc3VybmFtZTogJ0FkYW0nLCBiaXJ0aFllYXI6IDE5ODQsIHBob25lOicwMTA0NjUwOTc5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdNZWhtZXQnLCBzdXJuYW1lOiAnQXRvbScsIGJpcnRoWWVhcjogMTk4NSwgcGhvbmU6JzAxMDQ2NTA5Njk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ211bCcsIHN1cm5hbWU6ICdLb25nbmEnLCBiaXJ0aFllYXI6IDE5ODYsIHBob25lOicwMTA0NjUwOTE5NScgLGdlbmRlcjogMSAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdKYWNrJywgc3VybmFtZTogJ0phY2snLCBiaXJ0aFllYXI6IDE5ODcsIHBob25lOicwMTA0NjUwOTI5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgICB7IG5hbWU6ICdCb2InLCBzdXJuYW1lOiAnQm9iJywgYmlydGhZZWFyOiAxOTg4LCBwaG9uZTonMDEwNDY1MDkzOTUnICxnZW5kZXI6IDIgLCBtZW1vOicnfSxcclxuICAgIF1cclxuICB9XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmF1bHRQYWdlICh7c3RhdGUgLCBzZXRTdGF0ZSwgbWF0Y2h9KSB7XHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmFkZTIsIHNldEZhZGUyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uREVNT0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSAsIGNvbHVtbnMgOiBkZWZhdWx0RGF0YS5jb2x1bW5zICwgZGF0YSA6IGRlZmF1bHREYXRhLmRhdGEsIGRlZmF1bHRQYWdlIDogIXN0YXRlLmRlZmF1bHRQYWdlfSk7XHJcbiAgICB9XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2V0RmFkZTIodHJ1ZSkgLCAxNTAwKTtcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlciA6IDgwMCwgZXhpdDo1MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY29sb3I9J2luaXRpYWwnIHN0eWxlPXt7dGV4dFNoYWRvdzonNXB4IDEuNXB4IDEuNXB4IGdyYXknfX0+XHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VtZW50IFRhYmxlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBndXR0ZXJCb3R0b20gc3R5bGU9e3t0ZXh0U2hhZG93OicycHggMnB4IDFweCBibGFjayd9fT4gXHJcbiAgICAgICAgICAgICAgICBZb3UgbWF5IHRyeSB0aGUgREVNTyBpZiB0aGlzIHlvdXIgZmlyc3QgdGltZSwgXHJcbiAgICAgICAgICAgICAgICBvciBnZXQgc3RhcnRlZCByaWdodCBhd2F5IVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxGYWRlIGluPXtmYWRlMn0gdGltZW91dD17e2VudGVyIDogMzAwMCwgZXhpdDo1MDB9fT5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtoYW5kbGVPbkRFTU9DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVU0UgREVNTyBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2hlYWRlcnMnIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRVQgU1RBUlRFRCBSSUdIVCBBV0FZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBcclxuICAgIEJveCAsUGFwZXIsIG1ha2VTdHlsZXMsIEZhZGUsIFRleHRGaWVsZCwgVG9vbHRpcCwgVHlwb2dyYXBoeSwgQ2hlY2tib3hcclxufVxyXG4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZ1wiO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7IHNhdmVIZWFkZXJzIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tICcuLi91dGlsL01hbmFnZW1lbnRBUEknO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxMHZoJyxcclxuICAgIH0sXHJcbiAgICBmb3JtUm9vdCA6IHtcclxuICAgICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAuNXZoIDF2dycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNjBjaCcsXHJcbiAgICAgICAgICAgIG1pbldpZHRoIDogJzQwY2gnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMHZoJyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kIDogYG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvbnRhaW4nLFxyXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnM3Z3JyxcclxuICAgICAgICB0cmFuc2Zvcm0gOiAncm90YXRlKDkwZGVnKSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbiA6IHtcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJ1xyXG4gICAgfVxyXG59KSlcclxuY29uc3QgZGVmYXVsdEhlYWRlciA9IHtcclxuICAgIFwiaGVhZGVyMFwiIDogJycsXHJcbiAgICBcImhlYWRlcjFcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIyXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyM1wiIDogJycsXHJcbiAgICBcImhlYWRlcjRcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI1XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNlwiIDogJycsXHJcbiAgICBcImhlYWRlcjdcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI4XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOVwiIDogJycsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVycyAoe2lzTG9hZGluZ30pIHtcclxuICAgIC8vIHN0eWxlLCBjb29raWVcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICAvLyBzdGF0ZXNcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtyZXN1bHRTbmFjayAsIHNldFJlc3VsdFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlLCBjb250ZW50IDogJyd9KTtcclxuICAgIGNvbnN0IFtkYXRhICwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhZGVycyA6IGRlZmF1bHRIZWFkZXIsXHJcbiAgICAgICAgZ3JvdXBpbmdzIDogQXJyYXkoMTApLmZpbGwoZmFsc2UpLFxyXG4gICAgfSlcclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgZGF0YVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgLy8gY29uc3RydWN0b3JcclxuICAgIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgICAgICBnZXRNYW5hZ2VtZW50VGFibGUoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdMZW5ndGggPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyA/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzLmxlbmd0aCA6IDAgOiAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyBbLi4ucmVzcG9uc2UuZGF0YS5ncm91cGluZ3NdIDogW10gOiBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgLSBncm91cGluZ0xlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgOiB7fSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyc0xlbmd0aCA9IE9iamVjdC52YWx1ZXMoaGVhZGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGhlYWRlcnNMZW5ndGg7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tgaGVhZGVyJHtpfWBdID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7aGVhZGVycyxncm91cGluZ3N9O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoe2hlYWRlcnMsIGdyb3VwaW5nc30pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHsgIC8vIHVuYXV0aG9yaXplZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBQbGVhc2UgbG9nIGluIGFnYWluLmB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYGVycm9yIChjb2RlIDogJHtyZXNwb25zZS5zdGF0dXN9KWB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmhlYWRlcnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JvdXBpbmdzIDogW1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5ncm91cGluZ3NcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFtkYXRhLmhlYWRlcnMsIGRhdGEuZ3JvdXBpbmdzXSk7XHJcblxyXG4gICAgLy8gZWZmZWN0c1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57IFxyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU3VibWl0KGRhdGFSZWYuY3VycmVudC5oZWFkZXJzLCBkYXRhUmVmLmN1cnJlbnQuZ3JvdXBpbmdzLCB0cnVlKTtcclxuICAgICAgICAgICAgaGFuZGxlUHJvZ3Jlc3MocmVzdWx0ID09PSAnZXJyb3InID8gJ2Vycm9yJyA6ICdzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSk7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIC8vIGV2ZW50c1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChoZWFkZXJzLCBncm91cGluZ3MsIGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMoaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkpIHsgLy8gMTXquIDsnpAg7J207IOBIOygnO2VnCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLmxlbmd0aCA9PT0gMCkgeyAgICAgLy8g67mE7Ja07J6I7J2EIOqyveyasCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pXHJcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlSGVhZGVycyhoZWFkZXJzLGdyb3VwaW5ncylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNBdXRvU2F2ZSkgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLCBjb250ZW50IDogcmVzcG9uc2UucmVzdWx0fSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIFtgaGVhZGVyJHtpbmRleH1gXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlR3JvdXBpbmdzID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBncm91cGluZ3MgOiBkYXRhLmdyb3VwaW5ncy5tYXAoKHYsaSk9PiBpPT09aW5kZXg/IGUudGFyZ2V0LmNoZWNrZWQgOiB2KX0pO1xyXG4gICAgfVxyXG4gICAgLy8gY29tcG9uZW50XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlciA6IDE1MDB9fT5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs0fT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtUm9vdH0gYXV0b0NvbXBsZXRlPSdvZmYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdkaXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgY29sb3I9J3RleHRQcmltYXJ5JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgRWRpdCBGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29sb3I9e09iamVjdC52YWx1ZXMoZGF0YS5oZWFkZXJzKS5ldmVyeSh2ID0+IHYubGVuZ3RoIDw9IDE1KSA/ICdibHVlJyA6ICdyZWQnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb2xvcj0naW5pdGlhbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIHNob3VsZCBiZSBsZXNzIHRoYW4gMTUgbGV0dGVycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLm1hcCgoaGVhZGVyLGluZGV4KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aW5kZXg9PT0wPyB0cnVlOmZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2BoZWFkZXItJHtpbmRleCsxfWB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5oZWFkZXJzW2BoZWFkZXIke2luZGV4fWBdfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPSdub3JtYWwnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dENoYW5nZShlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF0ubGVuZ3RoID4gMTUgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJcclxuWW91IGNhbiBhcnJhbmdlIHRoZSBkYXRhIHdpdGggYSB2YWxpZCBoZWFkZXIsIFxyXG5VbmlxdWUgdmFsdWVzIGFyZSBub3QgY29tbW9ubHkgdXNlZCBmb3IgdGhpcyBmdW5jdGlvbiBpbiBnZW5lcmFsLlxyXG5lLmcuKSBuYW1lLCBhZGRyZXNzLCBtb2JpbGUgTk8uIGV0Yy5cclxuXCJcclxuICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J3JpZ2h0JyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezIwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RhdGEuZ3JvdXBpbmdzW2luZGV4XX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlR3JvdXBpbmdzKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4PT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+IEdyb3VwaW5nIT88L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTVUJNSVRcIiBhcmlhLWxhYmVsPSdzdWJtaXQnIHBsYWNlbWVudD0ndG9wJyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezQwMH0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbk1vdXNlT3Zlcj17KGUpPT5lLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlU3VibWl0KGRhdGEuaGVhZGVycyAsIGRhdGEuZ3JvdXBpbmdzKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e2BIZWFkZXIgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNSBsZXR0ZXJzIDooYH0gc3RhdHVzPVwiZXJyb3JcIi8+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3Jlc3VsdFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRSZXN1bHRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtyZXN1bHRTbmFjay5jb250ZW50fSBzdGF0dXM9e3Jlc3VsdFNuYWNrLnN0YXR1cz09PSdlcnJvcic/ICdlcnJvcicgOiAnc3VjY2Vzcyd9Lz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSc7XHJcbmltcG9ydCBNYW51YWxEaWFsb2cgZnJvbSBcIi4vTWFudWFsRGlhbG9nXCI7XHJcbmltcG9ydCB7IG9wdGlvbnMsbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vVGFibGVPcHRpb25zXCI7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IERlZmF1bHRQYWdlIGZyb20gJy4vRGVmYXVsdFBhZ2UnO1xyXG5pbXBvcnQgcGFyc2VEYXRhIGZyb20gJy4uL3V0aWwvcGFyc2VEYXRhJztcclxuaW1wb3J0IFNhdmVCdXR0b24gZnJvbSAnLi9TYXZlQnV0dG9uJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG4vLyB1c2VFZmZlY3TroZwgZGF0YSwgY29sdW1ucyDqsIAg67OA6rK965CgIOuVjOuniOuLpCDshJzrsoTsl5Ag7KCA7J6lIO2bhCDqsLHsi6BcclxuLy8gLi91dGlsIOqyveuhnOyXkCDroZzsp4Eg7J6R7ISxXHJcbi8vIO2GteyLoOyXkCDrjIDtlZwgdGVzdGNvZGXsnpHshLFcclxuLy8gY29sdW1uc+yZgCBkYXRh7J2YIOqwgSDqsJLrk6Tsl5Ag64yA7ZWcIOustOqysOyEsSDssrTtgaxcclxuLy8gcHJvcHNUeXBlIOyekeyEsVxyXG4vLyBTaWRlTWVudUxpc3QgPT4gTG9naW7snLzroZwg67OA6rK9LCDruYTroZzqt7jsnbgg7IucIExPR0lO7Jy866GcIOuztOydvCDqsoMsIOuhnOq3uOyduOyLnCBNWSBNRU5V66GcIOuztOq4sFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnRUYWJsZSh7aXNMb2FkaW5nfSkge1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IFJlYWN0LnVzZUNvbnRleHQoUHJvZ3Jlc3NDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gIC8vIHN0YXRlc1xyXG4gIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pO1xyXG4gIGNvbnN0IFtzYXZlZFNuYWNrICwgc2V0U2F2ZWRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gIGNvbnN0IFtlcnJvclNuYWNrICwgc2V0RXJyb3JTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gIGNvbnN0IFtkaWFsb2csIHNldERpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7ICAvLyDstZzstIggQVBJ66GcIOuwm+yVhOyYpOuKlCDrj5nsnpHtlYTsmpRcclxuICAgIGRlZmF1bHRQYWdlIDogdHJ1ZSxcclxuICAgIGhhc1RhYmxlIDogZmFsc2UsXHJcbiAgICBjb2x1bW5zOiBbXSxcclxuICAgIGRhdGE6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRhYmxlUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgaWYgKGNvb2tpZXMudXNlcikgeyAgIC8vIOy/oO2CpOyXkCDthqDtgbDsnbQg7J6I7J2EIOqyveyasCDthYzsnbTruJQgZmV0Y2ggQVBJ7Iuk7ZaJXHJcbiAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXMgOiAke3Jlc3BvbnNlLnN0YXR1c30gLCBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKTtcclxuICAgICAgICAgIC8vIOycoOyggCDtmZXsnbjrkJDqs6Ag7YWM7J2067iU64+EIOu5hOyWtOyeiOyngCDslYrsnYQg6rK97JqwXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzPT09MjAwKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntzZXRTbmFjayh7b3Blbjp0cnVlfSl9LDQwMCk7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBjb2x1bW5zIDogcGFyc2VEYXRhKHJlc3BvbnNlLmRhdGEuaGVhZGVycyAsIHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzKSxcclxuICAgICAgICAgICAgICBkYXRhIDogcmVzcG9uc2UuZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRQYWdlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgaGFzVGFibGUgOiB0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGlhbG9nQ2xvc2UgPSAoKSA9PiB7c2V0RGlhbG9nKHtvcGVuIDogZmFsc2V9KTt9O1xyXG4gIGNvbnN0IGhhbmRsZU9uU2F2ZSA9IChpc0F1dG9TYXZlKSA9PiB7XHJcbiAgICAgIC8vIHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIg7J2YIHJlZuyXkOyEnCDsi6DrorDrj4TsnojripQg642w7J207YSwIOywuOyhsFxyXG4gICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IFtdO1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlci5jb2x1bW5zLnJlZHVjZSgob2JqLHYsaSk9PntcclxuICAgICAgICBvYmpbYGhlYWRlciR7aX1gXSA9IHYudGl0bGU7XHJcbiAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgfSx7fSlcclxuICAgICAgdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlci5kYXRhLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgZGF0YS5wdXNoKHJlc3QpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2F2ZURhdGEoaGVhZGVycywgZ3JvdXBpbmdzLCBkYXRhKTtcclxuICAgICAgaWYoIWlzQXV0b1NhdmUpIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gIH1cclxuICBcclxuICAvLyBlZmZlY3RzXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHsgICAvLyB3aW5kb3cg642U67iU7YG066atIOydtOuypO2KuCDstpTqsIAsIOuPhOybgOunkCBvcGVuXHJcbiAgICBjb25zdCBvbmRiQ2xpY2sgPSAoKSA9PiBzZXREaWFsb2coe29wZW4gOiAhZGlhbG9nLm9wZW59KTtcclxuICAgIGNvbnN0IG9uS2V5ZG93biA9IChlKSA9PiB7ICAgLy8gY3RybCArIHProZwg7KCA7J6lIGV2ZW50XHJcbiAgICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0ubWF0Y2goXCJNYWNcIikgPyBlLm1ldGFLZXkgOiBlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSA4Mykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoYW5kbGVPblNhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XHJcbiAgICAgIC8vIOy0iOq4sOygkeq3vOydmCDqsr3smrAg642w7J207YSw6rCAIOyXhuyWtCDsl5Drn6wg67Cc7IOd7ZWgIOyImCDsnojslrQg7IK87ZWt7Iud7Jy866GcIO2MkOuLqCDtm4Qg7Ja466eI7Jq07Yq47Iuc7J2YIGZldGNoQVBJ7Iuk7ZaJXHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyID8gaGFuZGxlT25TYXZlKHRydWUpIDogbnVsbCA6IG51bGw7XHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyID8gaGFuZGxlUHJvZ3Jlc3MoJ3N1Y2Nlc3MnKSA6IG51bGwgOiBudWxsO1xyXG4gIH07XHJcbn0sIFtdKTtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuICBjb25zdCBNYXJnaW4gPSAoKSA9PiAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0+PC9Cb3g+KTsgIC8vIOyXrOuwsVxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAge1xyXG4gICAgc3RhdGUuZGVmYXVsdFBhZ2UgP1xyXG4gICAgICAoPERlZmF1bHRQYWdlIHN0YXRlPXtzdGF0ZX0gc2V0U3RhdGU9e3NldFN0YXRlfS8+KVxyXG4gICAgOiBcclxuICAgICg8Qm94PlxyXG4gICAgICAgIDxNYW51YWxEaWFsb2cgb3Blbj17ZGlhbG9nLm9wZW59IG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfS8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgIHRhYmxlUmVmPXt0YWJsZVJlZn1cclxuICAgICAgdGl0bGU9e1xyXG4gICAgICA8U2F2ZUJ1dHRvbiBzZXRTYXZlZFNuYWNrPXtzZXRTYXZlZFNuYWNrfSBcclxuICAgICAgLy8g66eI7Jq07Yq4IOydtO2bhOyXkCDsoJHqt7ztlYTsmpRcclxuICAgICAgZGF0YU1hbmFnZXI9e3RhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIDoge319Lz5cclxuICAgIH1cclxuICAgICAgY29sdW1ucz17c3RhdGUuY29sdW1uc31cclxuICAgICAgZGF0YT17c3RhdGUuZGF0YX1cclxuICAgICAgbG9jYWxpemF0aW9uPXtsb2NhbGl6YXRpb259IC8vIOuhnOy7rOudvOydtOymiFxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfSAvLyDrgrTrs7TrgrTquLAsIOq3uOujqO2VkVxyXG4gICAgICBhY3Rpb25zPXtbLy8g66mA7YuwIOyFgOugieyFmCDsnpHsl4VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvb2x0aXAgOiAnUmVtb3ZlIHRoZSBTZWxlY3RlZCByb3cocyknLFxyXG4gICAgICAgICAgICBpY29uIDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgIG9uQ2xpY2sgOiAoZSAsIGRlbGV0aW9ucykgPT4geyAgLy8g7ISg7YOd7ZWcIOyytO2BrOuwleyKpOyXkCDrjIDtlbQg66qo65GQIOyCreygnCDsp4TtlolcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4uc3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkZWxldGlvbnMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoZGF0YS5pbmRleE9mKHYpLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldkRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2RGF0YSAsIGRhdGF9O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF19IFxyXG4gICAgICBlZGl0YWJsZT17e1xyXG4gICAgICAgIG9uUm93QWRkOiAobmV3RGF0YSkgPT4gIC8vIOy2lOqwgFxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBvblJvd1VwZGF0ZTogKG5ld0RhdGEsIG9sZERhdGEpID0+ICAvLyDsiJjsoJVcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvbGREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhW2RhdGEuaW5kZXhPZihvbGREYXRhKV0gPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSduZWVkIHNvbWUgaGVscD8gPyBkb3VibGUtY2xpY2sgYW55IHNwYWNlICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c2F2ZWRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U2F2ZWRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J1NBVkVEICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17ZXJyb3JTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0RXJyb3JTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J0VSUk9SICEnIHN0YXR1cz1cImVycm9yXCIvPlxyXG4gICAgPC9Cb3g+XHJcbiAgICApfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59IiwiXHJcbmltcG9ydCB7RGlhbG9nLFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBMaXN0LFxyXG4gICAgTGlzdEl0ZW0sXHJcbiAgICBMaXN0SXRlbVRleHQsXHJcbiAgICBCb3gsXHJcbiAgICBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgICBpY29uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzN2dydcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFudWFsRGlhbG9nIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7b3Blbiwgb25DbG9zZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGljb25zID0gW1xyXG4gICAgICAgIHtpY29uIDogJ2FkZF9ib3gnICwgZGVzY3JpcHRpb24gOiAnW0FkZF0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnW0VkaXRdIHJlY29yZHMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2VhcmNoJyAsIGRlc2NyaXB0aW9uIDogJ1R5cGUgZG93biB3b3JkcyB0byBbc2VhcmNoXS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzYXZlX2FsdCcgLCBkZXNjcmlwdGlvbiA6ICdbRG93bmxvYWRdIGZpbGVzIGluIENWUyBmb3JtYXQuJ30sXHJcbiAgICAgICAge2ljb24gOiAndmlld193ZWVrJyAsIGRlc2NyaXB0aW9uIDogJ1tTZWxlY3RdIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW2RlbGV0ZV0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjaGVja19ib3gnICwgZGVzY3JpcHRpb24gOiAnIOKRoCBTZWxlY3QgdGhlIGNoZWNrYm94IG9uIHRoZSByb3cuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZmFjdF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENoZWNrIHRoZSBudW1iZXIgb2YgdGhlIHJvd3Mgc2VsZWN0ZWQuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZGVsZXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaIgQ2xpY2sgdGhlIEJpbiBpY29uIG9uIHRoZSByaWdodCBhYm92ZS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdwbGF5bGlzdF9hZGRfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBbRWRpdF0gaGVhZGVycy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdtZW51JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgT3BlbiBNWVBBR0UnfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDbGljayB0aGUgUGVuY2lsIGljb24nfSxcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPERpYWxvZyBvbkNsb3NlPXtvbkNsb3NlfSBvcGVuPXtvcGVufT5cclxuICAgICAgICA8RGlhbG9nVGl0bGU+IEJBU0lDIE1BTlVBTCA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpY29ucy5tYXAoKGljb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtgJHtpY29ufSArICR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3BhbicgY2xhc3NOYW1lPXtgbWF0ZXJpYWwtaWNvbnMgJHtjbGFzc2VzLmljb259YH0gc3R5bGU9e3t3aWR0aDonM3Z3J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpY29uLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBUb29sdGlwfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe3NldFNhdmVkU25hY2sgLCBkYXRhTWFuYWdlcn0pIHtcclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKCkge1xyXG4gICAgICAgICAgLy8gU0FWRSBFVkVOVCB1dGlsID4gTWFuYWdlbWVudEFQSS5zYXZlRGF0YSDrp4zrk6TslrTshJwg7L2c7ZWY6riwXHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgICAgICBjb25zdCBncm91cGluZ3MgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBkYXRhTWFuYWdlci5jb2x1bW5zLnJlZHVjZSgob2JqLHYsaSk9PntcclxuICAgICAgICAgICAgb2JqW2BoZWFkZXIke2l9YF0gPSB2LnRpdGxlO1xyXG4gICAgICAgICAgICBncm91cGluZ3MucHVzaCh2Lmdyb3VwaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgIH0se30pO1xyXG4gICAgICAgICAgZGF0YU1hbmFnZXIuZGF0YS5mb3JFYWNoKCh2LGkpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHt0YWJsZURhdGEsIC4uLnJlc3R9ID0gdjtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKHJlc3QpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgcmVzdWx0IDogXHJcbiAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGRhdGEpfVxyXG4gICAgICAgICAgJHtncm91cGluZ3N9XHJcbiAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGhlYWRlcnMpfVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgc2F2ZURhdGEoaGVhZGVycyxncm91cGluZ3MsZGF0YSkudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgc2V0U2F2ZWRTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxUb29sdGlwIHRpdGxlPSdDbGljayB0byBTQVZFICggQ3RybCArIFMgKSc+XHJcbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIFxyXG4gICAgICAgIG9uQ2xpY2s9eygpPT5vbkNsaWNrKCl9PlxyXG4gICAgICAgICAgU0FWRVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1Rvb2x0aXA+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge0FkZEJveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuLy8gREFUQSBUQUJMRSBPUFRJT05TXHJcblxyXG4gZXhwb3J0IGNvbnN0IG9wdGlvbnM9IHtcclxuICAgIGV4cG9ydEJ1dHRvbjogdHJ1ZSxcclxuICAgIGdyb3VwaW5nOnRydWUsXHJcbiAgICBzZWxlY3Rpb246dHJ1ZSxcclxuICAgIGhlYWRlclN0eWxlOnsgXHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zQ29sdW1uSW5kZXg6LTEsICAvLyDslaHshZgg7JWE7J207L2Y7JyE7LmYXHJcbiAgICBjb2x1bW5zQnV0dG9uIDogdHJ1ZSwgXHJcbiAgICBkZWJvdW5jZUludGVydmFsIDogMTYwLCAvLyDroZzrlKnsi5zqsIRcclxuICAgIHBhZ2VTaXplIDogMTUsICAgICAgICAgIC8vIO2OmOydtOyngOyCrOydtOymiFxyXG4gICAgcGFnZVNpemVPcHRpb25zIDogWzUsIDE1LCAzMCwgNTAsIDEwMF0sIC8vIO2OmOydtOymiCDsgqzsnbTspogg7KKF66WYXHJcbiAgfVxyXG4gZXhwb3J0IGNvbnN0IGxvY2FsaXphdGlvbiA9IHtcclxuICAgIHBhZ2luYXRpb24gOiB7IGxhYmVsRGlzcGxheWVkUm93cyA6ICd7Y291bnR9IHJvd3MgfCB7ZnJvbX0te3RvfScgLCB9LFxyXG4gICAgdG9vbGJhcjoge25Sb3dzU2VsZWN0ZWQ6ICd7MH0gcm93KHMpIHNlbGVjdGVkJ30sXHJcbiAgICBoZWFkZXI6IHthY3Rpb25zOiAnRWRpdCd9LFxyXG4gICAgYm9keToge2VtcHR5RGF0YVNvdXJjZU1lc3NhZ2U6IFxyXG4gICAgICAgIChcclxuICAgICAgICA8Qm94IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgIHtgTm8gUmVjb3JkcyB0byBkaXNwbGF5YH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICBlbmRJY29uPXs8QWRkQm94Lz59XHJcbiAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YENsaWNrIHRoZSBwbHVzIGljb24gb24gdGhlIHJpZ2h0IGFib3ZlIGZvciBhIG5ldyByZWNvcmQuIGB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgfVxyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtUb29sYmFyLCBEcmF3ZXIgLCBCdXR0b24gLCBHcmlkLFxyXG4gICAgIERpdmlkZXIsIEFwcEJhciBhcyBBcHBiYXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEhpZGVPblNjaHJvbGwgZnJvbSBcIi4uL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbFwiO1xyXG5pbXBvcnQgU2lkZU1lbnVMaXN0IGZyb20gXCIuL1NpZGVNZW51TGlzdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IFNpZ25PdXRCdXR0b24gZnJvbSBcIi4vU2lnbk91dEJ1dHRvblwiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6MTgsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbToxOCxcclxuICAgIH0sXHJcbiAgICBsZWZ0IDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OjMwLFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgY2VudGVyIDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OjQ1LFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtZW5kJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgcGFkZGluZzpgMCAke3RoZW1lLnNwYWNpbmcoMyl9YFxyXG4gICAgfSxcclxuICB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdiAocHJvcHMpIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIG1lbnUgOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvciwgb3BlbikgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmxhZyA9IG9wZW4/IHN0YXRlW2FuY2hvcl0gPyBmYWxzZSA6IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogZmxhZyB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwcm9maWxlID0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBhbmNob3IgPSBwcm9maWxlLm5hbWU/ICdNWVBBR0UnIDonTE9HSU4nO1xyXG4gICAgY29uc3QgbGlua3MgPSBbJ2JvYXJkJywnbWFuYWdlbWVudCddO1xyXG4gICAgY29uc3QgTG9nb3V0QnRuID0gcHJvZmlsZS5uYW1lPyA8U2lnbk91dEJ1dHRvbi8+IDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGlkZU9uU2Nocm9sbCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxBcHBiYXIgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Ym94U2hhZG93Oidub25lJ319PlxyXG4gICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiBIb21lIDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7bGlua31gfSBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0ga2V5PXtsaW5rfT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4ge2xpbmt9IDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+PHNwYW4+PC9zcGFuPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FuY2hvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7TG9nb3V0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXIgb3Blbj17c3RhdGVbYW5jaG9yXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSB2YXJpYW50PSdwZXJzaXN0ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1NpZGVNZW51TGlzdCggey4uLnByb3BzLCBhbmNob3IgLHRvZ2dsZURyYXdlciAsIHByb2ZpbGV9ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwYmFyPlxyXG4gICAgICAgIDwvSGlkZU9uU2Nocm9sbD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUF2YXRhciAsIERpdmlkZXIsIExpc3RJdGVtLCBUeXBvZ3JhcGh5ICwgQXZhdGFyLCBJY29uQnV0dG9uICxcclxuICAgICBNb2RhbCwgQm94LCBCdXR0b24sXHJcbiAgICAgUGFwZXIsXHJcbiAgICAgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi9TaWduSW5CdXR0b24nO1xyXG5pbXBvcnQgZ29vZ2xlU2lnbmluSW1hZ2UgZnJvbSAnLi4vYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyc7XHJcbmltcG9ydCB7cmVkaXJlY3RHb29nbGVMb2dpbn0gZnJvbSAnLi4vdXRpbC9Mb2dpbkFQSSc7XHJcbmltcG9ydCB7RWRpdCwgSW5mbywgRGVsZXRlRm9yZXZlciwgV2FybmluZ30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQge0dsb2JhbFNuYWNrYmFyQ29udGV4dH0gZnJvbSAnLi4vYXBwJ1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBsaXN0IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzIzdncnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ3N0YXJ0JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbSA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbVRleHQgOiB7XHJcbiAgICAgICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIGxhcmdlQXZhdGFyIDoge1xyXG4gICAgICAgIHdpZHRoIDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICBoZWlnaHQgOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgfSxcclxuICAgIGlubGluZSA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2lubGluZSdcclxuICAgIH0sXHJcbiAgICBsaXN0VGV4dCA6IHtcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBtb2RhbCA6IHtcclxuICAgICAgICB0b3AgOiAnNTAlJyxcclxuICAgICAgICBsZWZ0IDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsIC01MCUpYCxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgIG1pbldpZHRoIDogNDAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsUm93Qm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbW9kYWxDb2xCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ3N0YXJ0J1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51TGlzdCAoe2FuY2hvciAsIHRvZ2dsZURyYXdlciwgcHJvZmlsZX0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGhhbmRsZUdsb2JhbFNuYWNrYmFyID0gUmVhY3QudXNlQ29udGV4dChHbG9iYWxTbmFja2JhckNvbnRleHQpO1xyXG4gICAgY29uc3QgW2VtYWlsSW5wdXQsIHNldEVtYWlsSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DbGlja0xvZ2luICgpIHtcclxuICAgICAgICByZWRpcmVjdEdvb2dsZUxvZ2luKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrTW9kYWwgPSAoKSA9PiBzZXRNb2RhbCh0cnVlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xvc2VNb2RhbCA9ICgpID0+IHNldE1vZGFsKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHNldEVtYWlsSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVtYWlsSW5wdXQgPT09IHByb2ZpbGUuZW1haWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ydvOy5mCcpO1xyXG4gICAgICAgICAgICBzYXZlRGF0YSh7fSxbXSxbe31dKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlR2xvYmFsU25hY2tiYXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBkYXRhLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSwxNTAwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVHbG9iYWxTbmFja2Jhcih7XHJcbiAgICAgICAgICAgICAgICBvcGVuOnRydWUsIFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OidlcnJvcidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IHByb2ZpbGU/IHByb2ZpbGUubmFtZT8gdHJ1ZSA6IGZhbHNlIDogZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpc0xvZ2dlZD8gJ1BST0ZJTEUnIDogJ0xPR0lOIE1FTlUnfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG5cclxuICAgICAgICAgICAge2lzTG9nZ2VkPyBcclxuXHJcbiAgICAgICAgICAgICg8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3Byb2ZpbGUucGljdHVyZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlQXZhdGFyfSBhbHQ9e3Byb2ZpbGUubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9maWxlLm5hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGV4dH0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nRU1BSUwgOiAnIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0nc3BhbicgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvIGNvbG9yPSdwcmltYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdFRElUIEhFQURFUlMnLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2hlYWRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IGNvbG9yPSdwcmltYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmcgY29sb3I9J3NlY29uZGFyeScgc3R5bGU9e3ttYXJnaW5SaWdodDonMXZ3J319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHNlY29uZGFyeT0nUkVNT1ZFIEFMTCBEQVRBJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nZW5kJyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcicgb25DbGljaz17aGFuZGxlT25DbGlja01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIOuqqOuLrCAqL31cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbj17bW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVPbkNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtY29udGVudHNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFJvd0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdzdGFydCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVyIGNvbG9yPSdzZWNvbmRhcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC10aXRsZVwiIHZhcmlhbnQ9J2J1dHRvbicgZGlzcGxheT0nYmxvY2snIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXV0aW9uIDogcGVybWFuZW50IGRlbGV0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbENvbEJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLWNvbnRlbnRzXCIgdmFyaWFudD0nYm9keTEnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YEFsbCBkYXRhIHdpbGwgYmUgZGVsZXRlZCBhbmQgY2Fubm90IGJlIHJlY292ZXJlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBjb3JyZWN0bHkgdG8gY29udGludWUuYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nPntwcm9maWxlLmVtYWlsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsUm93Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9J0UtTUFJTCcgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICg8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gb25DbGljaz17aGFuZGxlT25DbGlja0xvZ2lufT5cclxuICAgICAgICAgICAgICAgIDxTaWduSW5CdXR0b24gc2lnbkluPXtnb29nbGVTaWduaW5JbWFnZX0vPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPil9XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyxCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDAlJyxcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge3NpZ25Jbn0gPSBwcm9wczsgLy8g7J2066+47KeAXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3Bhbic+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzaWduSW59IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PjwvaW1nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IEV4aXRUb0FwcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcCc7XHJcbmltcG9ydCB7IExpc3RJdGVtICwgSWNvbkJ1dHRvbiwgVG9vbHRpcH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBsb2dvdXQgOiB7XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJyxcclxuICAgICAgICBwYWRkaW5nIDogJzJweCcsXHJcbiAgICAgICAgbWFyZ2luIDogMCxcclxuICAgICAgICB3aWR0aCA6ICdhdXRvJyxcclxuICAgIH1cclxufSkpXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgZm9udFdlaWdodDonYm9sZCdcclxuICAgIH0sXHJcbiAgfSkpKFRvb2x0aXApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7ICAgIC8vIOuqqOuToCDsv6DtgqQg7IKt7KCc7JmAIHByb2ZpbGXsoJzqsbBcclxuICAgICAgICByZW1vdmVDb29raWUoJ3Byb2ZpbGUnKTtcclxuICAgICAgICByZW1vdmVDb29raWUoJ3VzZXInKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb3V0fT5cclxuICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9J0xvZy1vdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7cGFkZGluZzo0fX0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPiAgICBcclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gXCIuL3NlcnZlclVSTFwiO1xyXG5cclxuLy8gR29vZ2xlIE9wZW5JRCBDb25uZWN0IOydtOyaqe2VmOq4sFxyXG4vLyDssLjqs6Ag6riw7Iig67iU66Gc6re4IDogaHR0cHM6Ly93d3cuZGFsZXNlby5jb20vZ29vZ2xlLW9pZGMvXHJcblxyXG4vLyBVUkwgZXhwb3J0XHJcbi8vIHNldmVy7JeQ7IScIOuwm+ydgCB1cmzroZwg66as64uk7J2066CJ7Yq4XHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdEdvb2dsZUxvZ2luID0gKCkgPT4gYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbG9naW5gKS50aGVuKHJlcyA9PiBsb2NhdGlvbi5hc3NpZ24ocmVzLmRhdGEpKTtcclxuZXhwb3J0IGNvbnN0IGdldFRva2VuQW5kUHJvZmlsZSA9ICh0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7c2VydmVyVVJMfS9sb2dpbmAsIHt0b2tlbn0gLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlLFxyXG4gICAgfSkudGhlbihyZXNwb25zZT0+IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5kYXRhKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tICcuL3NlcnZlclVSTCc7XHJcblxyXG4vLyDthYzsnbTruJQg642w7J207YSwIOuwm+yVhOyYpOq4sCBjb29raWXsl5Ag64u06ri0IHRva2Vu7IKs7JqpXHJcbmV4cG9ydCBjb25zdCBnZXRNYW5hZ2VtZW50VGFibGUgPSAgKCkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5nZXQoYCR7c2VydmVyVVJMfS9tYW5hZ2VtZW50YCx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOnRydWVcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVIZWFkZXJzID0gKGhlYWRlcnMsIGdyb3VwaW5ncykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHNhdmluZyBoZWFkZXJzIDogXHJcbiAgICBoZWFkZXJzIDogJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgIGdyb3VwaW5ncyA6ICR7SlNPTi5zdHJpbmdpZnkoZ3JvdXBpbmdzKX1gKTtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vaGVhZGVyc2AsIHtcclxuICAgICAgICAvLyBkYXRhXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBncm91cGluZ3NcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSkpOyAgICAvLyDsv6DtgqTsmYAg7ZWo6ruYXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlRGF0YSA9IChoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vZGF0YWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5ncyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgfSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKGhlYWRlcnMgLCBncm91cGluZ3MpID0+IHtcclxuICBjb25zb2xlLmxvZyhgZGF0YSBwYXJzaW5nISEhIWApXHJcbiAgICByZXR1cm4gKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLm1hcCgodmFsdWUsaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSA6IHZhbHVlLFxyXG4gICAgICAgIGZpZWxkIDogdmFsdWUsXHJcbiAgICAgICAgZ3JvdXBpbmcgOiBncm91cGluZ3NbaW5kZXhdXHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9IiwiZXhwb3J0IGRlZmF1bHQgXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjsiXSwic291cmNlUm9vdCI6IiJ9