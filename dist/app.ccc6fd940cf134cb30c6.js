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
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: {
      appear: 2000
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
      transformOrigin: '0 0 0'
    }
  }, grow ? {
    timeout: {
      appear: 2500
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL1NuYWNrQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ3Jvc3NsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW1hZ2VTbGlkZVNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTGlzdENhcm91c2VsRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9TdGFydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Fycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQxLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Rlc2suanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZWFzeS1sb2dpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oYW5kbGUtdGFibGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFrZS1oZWFkZXJzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tb29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL215bWVudS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGFydC1yaWdodC1hd2F5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvRGVmYXVsdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbnVhbERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9TYXZlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1RhYmxlT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZGVNZW51TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25JbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25PdXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9naW5BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTWFuYWdlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wYXJzZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc2VydmVyVVJMLmpzIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTG9nb3V0Q29udGV4dCIsIlByb2dyZXNzQ29udGV4dCIsIkdsb2JhbFNuYWNrYmFyQ29udGV4dCIsIkFwcCIsInFzIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHIiLCJpZF90b2tlbiIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm9wZW4iLCJyZXN1bHQiLCJnbG9iYWxTbmFja2JhciIsInNldEdsb2JhbFNuYWNrYmFyIiwidG9rZW4iLCJ1c2VyIiwicHJvZ3Jlc3NSZWYiLCJ1c2VSZWYiLCJoYW5kbGVCZWZvcmV1bmxvYWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJjbGVhckludGVydmFsIiwidXNlRWZmZWN0IiwiZ2V0VG9rZW5BbmRQcm9maWxlIiwidGhlbiIsImRhdGEiLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhdGgiLCJtYXhBZ2UiLCJlcnIiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJCb2FyZCIsIkhpZGVPblNjcm9sbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsIkxvYWRpbmciLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiZm9udFdlaWdodCIsIm9uQ2xvc2UiLCJjb250ZW50Iiwic3RhdHVzIiwiZGlyZWN0aW9uIiwiZm9udFNpemUiLCJ1c2VPbkZpcnN0UmVuZGVyIiwiZnVuYyIsImlzRmlyc3RSZWYiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWluSGVpZ2h0IiwiZm9vdGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiZ3JleSIsInRleHRBbGlnbiIsImFycm93IiwibWluV2lkdGgiLCJhbGlnblNlbGYiLCJiYWNrZ3JvdW5kIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZFNpemUiLCJTdGlja3lGb290ZXIiLCJjbGFzc2VzIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwidHJhbnNpdGlvbiIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImN1cnNvciIsIkltYWdlQ2Fyb3VzZWwiLCJpbWFnZUxpc3QiLCJsaXN0Iiwic2V0U3RlcHBlciIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImhhbmRsZUFmdGVyU2xpZGUiLCJzbGlkZUluZGV4IiwiaW5kZXgiLCJtYXAiLCJpbWFnZSIsImNvbG9yIiwidGV4dFNoYWRvdyIsInNyYyIsIm1hcmdpbiIsImZsZXhXcmFwIiwiQ3Jvc3NsaW5lIiwiZmFkZSIsInNldEZhZGUiLCJkb21SZWYiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJlbnRlciIsImV4aXQiLCJpbm5lckJveCIsIkRlc2NyaXB0aW9uIiwiZ3JvdyIsInNldEdyb3ciLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0aW1lb3V0IiwiYXBwZWFyIiwiSG9tZSIsImVhc3lMb2dpbiIsImRlc2NyaXB0aW9uIiwibGlua01hbmFnZW1lbnRQYWdlIiwic3RhcnRSaWdodEF3YXkiLCJtYWtlSGVhZGVycyIsImhhbmRsZVRhYmxlIiwidXNlTXltZW51IiwiYmFja2dyb3VuZEltYWdlIiwicGFwZXIiLCJtYXhXaWR0aCIsInRleHRQYXBlciIsIkludHJvZHVjdGlvbiIsInN0ZXBwZXIiLCJsb2dvQm94IiwiYmlnQXZhdGFyIiwidGV4dFdpdGhTaGFkb3ciLCJtYXJnaW5MZWZ0IiwiZGVzY3JpcHRpb25Cb3giLCJyaXNlIiwic2V0UmlzZSIsImd1aWRlSW1hZ2UiLCJpbmxpbmUiLCJEZXNjcmlwdGlvbkxpc3QiLCJzbGlkZVNvdXJjZSIsIml0ZW0iLCJhbGlnbkNvbnRlbnQiLCJNYWluIiwidXNlU3R5bGUiLCJidXR0b24iLCJ0ZXh0IiwidHlwb2dyYXBoeSIsInRleHREZWNvcmF0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGFpbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwiZGVmYXVsdERhdGEiLCJjb2x1bW5zIiwidGl0bGUiLCJmaWVsZCIsImdyb3VwaW5nIiwic3VybmFtZSIsImJpcnRoWWVhciIsInBob25lIiwiZ2VuZGVyIiwibWVtbyIsIkRlZmF1bHRQYWdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiZmFkZTIiLCJzZXRGYWRlMiIsImhhbmRsZU9uREVNT0NsaWNrIiwiZGVmYXVsdFBhZ2UiLCJzZXRUaW1lb3V0IiwiZm9ybVJvb3QiLCJ0cmFuc2Zvcm0iLCJkZWZhdWx0SGVhZGVyIiwiSGVhZGVycyIsImhhbmRsZVByb2dyZXNzIiwidXNlQ29udGV4dCIsInNuYWNrIiwic2V0U25hY2siLCJyZXN1bHRTbmFjayIsInNldFJlc3VsdFNuYWNrIiwiaGVhZGVycyIsImdyb3VwaW5ncyIsIkFycmF5IiwiZmlsbCIsInNldERhdGEiLCJkYXRhUmVmIiwiZ2V0TWFuYWdlbWVudFRhYmxlIiwicmVzcG9uc2UiLCJncm91cGluZ0xlbmd0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwiaGVhZGVyc0xlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImhhbmRsZUxvZ291dCIsImhhbmRsZVN1Ym1pdCIsImhyZWYiLCJvcmlnaW4iLCJpc0F1dG9TYXZlIiwiZXZlcnkiLCJ2IiwiZmlsdGVyIiwic2F2ZUhlYWRlcnMiLCJoYW5kbGVJbnB1dENoYW5nZSIsInZhbHVlIiwiaGFuZGxlR3JvdXBpbmdzIiwiY2hlY2tlZCIsImhlYWRlciIsIk1hbmFnZW1lbnRUYWJsZSIsInNhdmVkU25hY2siLCJzZXRTYXZlZFNuYWNrIiwiZXJyb3JTbmFjayIsInNldEVycm9yU25hY2siLCJkaWFsb2ciLCJzZXREaWFsb2ciLCJoYXNUYWJsZSIsInRhYmxlUmVmIiwicGFyc2VEYXRhIiwiaGFuZGxlRGlhbG9nQ2xvc2UiLCJoYW5kbGVPblNhdmUiLCJkYXRhTWFuYWdlciIsInJlZHVjZSIsIm9iaiIsInRhYmxlRGF0YSIsInJlc3QiLCJzYXZlRGF0YSIsIm9uZGJDbGljayIsIm9uS2V5ZG93biIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwibWV0YUtleSIsImN0cmxLZXkiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1hcmdpbiIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJldkRhdGEiLCJvblJvd0FkZCIsIm5ld0RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZXZTdGF0ZSIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsIk1hbnVhbERpYWxvZyIsImljb25zIiwiZXhwb3J0QnV0dG9uIiwic2VsZWN0aW9uIiwiaGVhZGVyU3R5bGUiLCJhY3Rpb25zQ29sdW1uSW5kZXgiLCJjb2x1bW5zQnV0dG9uIiwiZGVib3VuY2VJbnRlcnZhbCIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwicGFnaW5hdGlvbiIsImxhYmVsRGlzcGxheWVkUm93cyIsInRvb2xiYXIiLCJuUm93c1NlbGVjdGVkIiwiYWN0aW9ucyIsImJvZHkiLCJlbXB0eURhdGFTb3VyY2VNZXNzYWdlIiwiZmxleEdyb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxlZnQiLCJwYWRkaW5nTGVmdCIsImp1c3RpZnkiLCJjZW50ZXIiLCJyaWdodCIsInBhZGRpbmdSaWdodCIsIk5hdiIsIm1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJldmVudCIsImZsYWciLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJsaXN0VGV4dCIsIm1vZGFsIiwicG9zaXRpb24iLCJib3JkZXIiLCJzaGFkb3dzIiwibW9kYWxSb3dCb3giLCJtb2RhbENvbEJveCIsIk1lbnVMaXN0IiwiaGFuZGxlR2xvYmFsU25hY2tiYXIiLCJlbWFpbElucHV0Iiwic2V0RW1haWxJbnB1dCIsImhhbmRsZU9uQ2xpY2tMb2dpbiIsInJlZGlyZWN0R29vZ2xlTG9naW4iLCJoYW5kbGVPbkNsaWNrTW9kYWwiLCJzZXRNb2RhbCIsImhhbmRsZU9uQ2xvc2VNb2RhbCIsImhhbmRsZU9uU3VibWl0IiwicmVsb2FkIiwiaXNMb2dnZWQiLCJnb29nbGVTaWduaW5JbWFnZSIsIlNpZ25JbkJ1dHRvbiIsInNpZ25JbiIsImxvZ291dCIsIkxpZ2h0VG9vbHRpcCIsIndpdGhTdHlsZXMiLCJjb21tb24iLCJ3aGl0ZSIsIlRvb2x0aXAiLCJheGlvcyIsImdldCIsInNlcnZlclVSTCIsInJlcyIsImFzc2lnbiIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJwdXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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QWdCNEUsR0FBRyxDQUFDOVQsSUFBcEIsQ0FBUDtBQUNILEdBTk8sQ0FBUjtBQU9ILENBUk0sQzs7Ozs7Ozs7Ozs7O0FDckJQO0FBQWUseUVBQUM0SyxPQUFELEVBQVdDLFNBQVgsRUFBeUI7QUFDdENwTCxTQUFPLENBQUNDLEdBQVI7QUFDRSxTQUFRK0wsTUFBTSxDQUFDQyxNQUFQLENBQWNkLE9BQWQsRUFBdUJzQixNQUF2QixDQUE4QixVQUFBRCxDQUFDO0FBQUEsV0FBRUEsQ0FBRjtBQUFBLEdBQS9CLEVBQW9DdEgsR0FBcEMsQ0FBd0MsVUFBQzBILEtBQUQsRUFBTzNILEtBQVAsRUFBaUI7QUFDL0QsV0FBTztBQUNMdUUsV0FBSyxFQUFHb0QsS0FESDtBQUVMbkQsV0FBSyxFQUFHbUQsS0FGSDtBQUdMbEQsY0FBUSxFQUFHMEIsU0FBUyxDQUFDbkcsS0FBRDtBQUhmLEtBQVA7QUFLRCxHQU5PLENBQVI7QUFPRCxDQVRILEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWUsc0ZBQWYsRSIsImZpbGUiOiJhcHAuY2NjNmZkOTQwY2YxMzRjYjMwYzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInJlYWN0LmJ1bmRsZVwiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIiBpbXBvcnQgeyBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXYvTmF2XCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZC9Cb2FyZFwiO1xyXG5pbXBvcnQgTWFuYWdlbWVudCBmcm9tIFwiLi9tYW5hZ2VtZW50L01hbmFnZW1lbnRcIjtcclxuaW1wb3J0IEhlYWRlcnMgZnJvbSAnLi9tYW5hZ2VtZW50L0hlYWRlcnMnO1xyXG5pbXBvcnQge0Nzc0Jhc2VsaW5lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9mb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnXHJcbmltcG9ydCB7IGdldFRva2VuQW5kUHJvZmlsZSB9IGZyb20gXCIuL3V0aWwvTG9naW5BUElcIjtcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcblxyXG4vLyDsu6jthY3siqTtirgg66qp66GdXHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IExvZ291dENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTbmFja2JhckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCB7IGlkX3Rva2VuIH0gPSBxcy5wYXJzZSh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gICAgY29uc3QgWyBwcm9maWxlICwgc2V0UHJvZmlsZSBdID0gUmVhY3QudXNlU3RhdGUoY29va2llcy5wcm9maWxlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2xvYmFsU25hY2tiYXIsIHNldEdsb2JhbFNuYWNrYmFyXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2UgLCByZXN1bHQ6ICdzdWNjZXNzJ30pXHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMudXNlcjtcclxuICAgIGNvbnN0IHByb2dyZXNzUmVmID0gUmVhY3QudXNlUmVmKDApO1xyXG4gICAgY29uc3QgaGFuZGxlQmVmb3JldW5sb2FkID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwcm9ncmVzcyA6ICR7cHJvZ3Jlc3NSZWYuY3VycmVudH1gKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBwcm9ncmVzc1JlZi5jdXJyZW50ID0gKHByb2dyZXNzUmVmLmN1cnJlbnQgPCAxMDAgPyBwcm9ncmVzc1JlZi5jdXJyZW50ICsgMjAgOiAxMDApO1xyXG4gICAgICAgIGlmIChwcm9ncmVzc1JlZi5jdXJyZW50ID09PSAxMDApIHtcclxuICAgICAgICAgICAgIHByb2dyZXNzUmVmLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgIHNldEdsb2JhbFNuYWNrYmFyKHtvcGVuOnRydWUgLCByZXN1bHQ6cmVzdWx0fSk7XHJcbiAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9LDIwMClcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBBUEkg7Iuk7ZaJJyk7XHJcbiAgICAgICAgICAgIGdldFRva2VuQW5kUHJvZmlsZShpZF90b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtuYW1lICxlbWFpbCwgcGljdHVyZX0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlIGRhdGEgOiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKFwicHJvZmlsZVwiLHtuYW1lICwgZW1haWwsIHBpY3R1cmV9LHtwYXRoOlwiL1wiICwgbWF4QWdlIDogNzIwMH0pOyAgLy8gbWF4QWdlIDogMuyLnOqwhFxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIG9jY3VyZWQgOiAke2Vycn1gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2lkX3Rva2VuXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8g6riw7KG0IO2GoO2BsOydtCDsnojsnYQg6rK97JqwIOyEnOuyhOuhnCDsnqzsmpTssq3tlbTshJwg66eM66OM65CcIO2GoO2BsOyduOyngCDtmZXsnbhcclxuICAgICAgICAvLyDrp4zro4zrkJwg7Yag7YGw7J28IOqyveyasCDsv6DtgqTtlITroZztlYQsIHN0YXRl7ZSE66Gc7ZWELCDrp4zro4zrkJwg7Yag7YGwIOuqqOuRkCDsoJzqsbBcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYOq4sOyhtCDthqDtgbAg7J6I7J2MIHRva2VuIDogJHt0b2tlbn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9LFt0b2tlbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChjb29raWVzLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGNvb2tpZXMucHJvZmlsZSA6ICR7SlNPTi5zdHJpbmdpZnkoY29va2llcy5wcm9maWxlKX1gKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2Nvb2tpZXMucHJvZmlsZV0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvZmlsZSB8fCB7bmFtZSA6ICcnfX0+ICAgICAgICAgIHsvKiDsnKDsoIAg7ZSE66Gc7ZWEIOy7qO2FjeyKpO2KuCAgICAqL31cclxuICAgICAgICAgICAgPExvZ291dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldFByb2ZpbGV9PiAgIHsvKiDroZzqt7jslYTsm4Mg7J2067Kk7Yq4IOy7qO2FjeyKpO2KuCAgICovfVxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsocmVzdWx0KT0+aGFuZGxlQmVmb3JldW5sb2FkKHJlc3VsdCl9PlxyXG4gICAgICAgICAgICA8R2xvYmFsU25hY2tiYXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRHbG9iYWxTbmFja2Jhcn0+XHJcbiAgICAgICAgICAgIDxDc3NCYXNlbGluZS8+XHJcbiAgICAgICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgICAgIDxOYXYvPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgcmVuZGVyPXsoKT0+PEhvbWUgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9ib2FyZCcgcmVuZGVyPXsoKT0+PEJvYXJkIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbWFuYWdlbWVudCcgcmVuZGVyPXsoKT0+IDxNYW5hZ2VtZW50IGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvaGVhZGVycycgcmVuZGVyPXsoKT0+IDxIZWFkZXJzIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8L0dsb2JhbFNuYWNrYmFyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Qcm9ncmVzc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvTG9nb3V0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2dsb2JhbFNuYWNrYmFyLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRHbG9iYWxTbmFja2Jhcih7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICAgICAgY29udGVudD17Z2xvYmFsU25hY2tiYXIucmVzdWx0PT09J2Vycm9yJz8gYE5vdCBzYXZlZC5cclxuICAgICAgICAgICAgUmVhc29uIDogSW52YWxpZCBpbnB1dC5gIDonIFNBVkVEICd9IHN0YXR1cz17Z2xvYmFsU25hY2tiYXIucmVzdWx0fVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249e3t2ZXJ0aWNhbDondG9wJywgaG9yaXpvbnRhbDoncmlnaHQnfX0vPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKHtpc0xvYWRpbmd9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBmaXhlZD5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEJvYXJkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGVTaWduaW4uMWNlMWFhYTVhMTI3ZmEzZTQ5MmExMmJiNjJmOTkzMDQucG5nXCI7IiwiaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuXHJcbi8vIEdOQuydmCDsiqzrnbzsnbTrk5zquLDriqVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9IGRpcmVjdGlvbj1cImRvd25cIiBpbj17IXRyaWdnZXJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NsaWRlPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQge0JveCwgQ2lyY3VsYXJQcm9ncmVzcywgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZyAoe2lzTG9hZGluZ30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtcclxuICAgICAgICBpc0xvYWRpbmcgJiYgXHJcbiAgICAgICAgICAgICg8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDB2aCcsIHdpZHRoOicxMDAlJywgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtgU2F2aW5nIGNoYW5nZXNgfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgICAgICAgPC9Cb3g+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxufSIsImltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7b3Blbiwgb25DbG9zZSwgY29udGVudCwgc3RhdHVzLCBkaXJlY3Rpb259KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICBhbmNob3JPcmlnaW49e2RpcmVjdGlvbj8gZGlyZWN0aW9uIDogeyB2ZXJ0aWNhbDondG9wJywgaG9yaXpvbnRhbDonY2VudGVyJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e29uQ2xvc2V9IHNldmVyaXR5PXtzdGF0dXN9XHJcbiAgICAgICAgICAgICB2YXJpYW50PSdmaWxsZWQnIG1lc3NhZ2U9e3tmb250V2VpZ2h0Oidib2xkZXInLCBmb250U2l6ZTonNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICApXHJcbn0iLCJcclxuLy8gY29udHN0cnVjdG9yIO2bhVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPbkZpcnN0UmVuZGVyIChmdW5jKSB7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmMoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQge0JveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgIHsnQ29weXJpZ2h0IMKpICd9XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIEphY2sncyBXZWJzaXRlXHJcbiAgICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgICB7Jy4nfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIG1pbkhlaWdodDogJzIwdmgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcclxuICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjp0aGVtZS5wYWxldHRlLmdyZXlbMjAwXSxcclxuICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgYXJyb3cgOiB7XHJcbiAgICAgIHdpZHRoIDogJzl2dycsXHJcbiAgICAgIGhlaWdodCA6ICc5dmgnLFxyXG4gICAgICBtaW5XaWR0aCA6ICc3MHB4JyxcclxuICAgICAgbWluSGVpZ2h0IDogJzcwcHgnLFxyXG4gICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgYmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICBtYXJnaW5Cb3R0b206JzJ2aCcsXHJcbiAgICAgIG1hcmdpblRvcCA6ICcydmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTonY29udGFpbicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5Rm9vdGVyKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTW92ZSB0byBUb3BcIiBhcmlhLWxhYmVsPVwibW92ZS10by10b3BcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBlbnRlckRlbGF5PXszNTB9IGxlYXZlRGVsYXk9ezE1MH0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gb25DbGljaz17c2Nyb2xsVG9Ub3B9IG9uTW91c2VPdmVyPXsoZSk9PnRyYW5zaXRpb24oZSl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH0iLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ2Fyb3VzZWwgKHByb3BzKSB7XHJcbiAgICBjb25zdCBpbWFnZUxpc3QgPSBwcm9wcy5saXN0ID8gcHJvcHMubGlzdCA6IFt7fV07XHJcbiAgICBjb25zdCB7c2V0U3RlcHBlciwgY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGV9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBoYW5kbGVBZnRlclNsaWRlID0gKHNsaWRlSW5kZXgpID0+IHtcclxuICAgICAgICBzZXRTdGVwcGVyKHNsaWRlSW5kZXgpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShzbGlkZUluZGV4KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgc2xpZGVJbmRleD17Y3VycmVudFNsaWRlfVxyXG4gICAgICAgIGFmdGVyU2xpZGU9IHtpbmRleCA9PiBoYW5kbGVBZnRlclNsaWRlKGluZGV4KX1cclxuICAgICAgICBhdXRvcGxheT17ZmFsc2V9XHJcbiAgICAgICAgYXV0b3BsYXlJbnRlcnZhbD17MzAwMH1cclxuICAgICAgICB0cmFuc2l0aW9uTW9kZT0nc2Nyb2xsJ1xyXG4gICAgICAgIHNwZWVkPXs4MDB9XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBpbWFnZUxpc3QubWFwKChpbWFnZSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBzdHlsZT17e3dpZHRoOicxMDAlJywgYmFja2dyb3VuZENvbG9yOidpbmhlcml0JywgY29sb3I6JyNmZmYnLCB0ZXh0U2hhZG93Oic1cHggMS41cHggMS41cHggZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7YCMke2luZGV4KzF9ICR7aW1hZ2UubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5zcmN9IG9iamVjdC1maXQ9J2NvdmVyJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgKTtcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3ggLCBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luOjAsXHJcbiAgICAgIHBhZGRpbmc6JzF2dycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9zc2xpbmUoe2NoaWxkcmVufSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy01MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MjAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBib3hTaGFkb3c9ezR9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JvdywgQm94LCBGYWRlLCBUeXBvZ3JhcGh5LCBEaXZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3QgOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzM1dmgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0JyxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBjb2xvcjonI2VhZWFlYScsXHJcbiAgICAgICAgdGV4dFNoYWRvdzogJzFweCA1cHggNXB4ICM5ZTk5OTknXHJcbiAgICB9XHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVzY3JpcHRpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgKX0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnMTUwcHggMHB4J1xyXG4gICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDE1MDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH0gfSA6IHt9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIFNPTUUgVEVYVFxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU09NRSBURVhUXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+ICAgICAgXHJcbiAgICAgICAgPC9Hcm93PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb25cIjtcclxuaW1wb3J0IEludHJvZHVjdGlvbjIgZnJvbSBcIi4vSW50cm9kdWN0aW9uMlwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4nO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2lzTG9hZGluZ30pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbjIvPlxyXG4gICAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgZWFzeUxvZ2luIGZyb20gXCIuLi9pbWFnZXMvZWFzeS1sb2dpbi5wbmdcIjtcclxuaW1wb3J0IGxpbmtNYW5hZ2VtZW50UGFnZSBmcm9tIFwiLi4vaW1hZ2VzL2xpbmstbWFuYWdlbWVudC1wYWdlLnBuZ1wiO1xyXG5pbXBvcnQgc3RhcnRSaWdodEF3YXkgZnJvbSBcIi4uL2ltYWdlcy9zdGFydC1yaWdodC1hd2F5LnBuZ1wiO1xyXG5pbXBvcnQgbWFrZUhlYWRlcnMgZnJvbSBcIi4uL2ltYWdlcy9tYWtlLWhlYWRlcnMucG5nXCI7XHJcbmltcG9ydCBoYW5kbGVUYWJsZSBmcm9tIFwiLi4vaW1hZ2VzL2hhbmRsZS10YWJsZS5wbmdcIjtcclxuaW1wb3J0IHVzZU15bWVudSBmcm9tIFwiLi4vaW1hZ2VzL215bWVudS5wbmdcIjtcclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnU2lnbiBpbiB3aXRoIEdvb2dsZScsXHJcbiAgICAgICAgc3JjIDogYCR7ZWFzeUxvZ2lufWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnU2lnbiBpbiB3aXRoIGdvb2dsZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnTW92ZSBvbiB0byBtYW5hZ2VtZW50IHBhZ2UnLFxyXG4gICAgICAgIHNyYyA6IGAke2xpbmtNYW5hZ2VtZW50UGFnZX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ01vdmUgb24gdG8gbWFuYWdlbWVudCBwYWdlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdDbGljayB0aGUgYmx1ZSBidXR0b24nLFxyXG4gICAgICAgIHNyYyA6IGAke3N0YXJ0UmlnaHRBd2F5fWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnY2xpY2sgXCJnZXQgc3RhcnRlZCByaWdodCBhd2F5XCIgYnV0dG9uJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdNYWtlIEhlYWRlcnMnLFxyXG4gICAgICAgIHNyYyA6IGAke21ha2VIZWFkZXJzfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnbWFrZSBoZWFkZXJzJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnQ3JlYXRlLCBFZGl0LCBSZW1vdmUgdGFibGUgcmVjb3JkcycsXHJcbiAgICAgICAgc3JjIDogYCR7aGFuZGxlVGFibGV9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdoYW5kbGUgdGFibGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1VzZSBteW1lbnUgdG8gaGFuZGxlIGRhdGEnLFxyXG4gICAgICAgIHNyYyA6IGAke3VzZU15bWVudX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ3VzZSBteW1lbnUnLFxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JvdyAsIEJveCwgUGFwZXIsRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5pbXBvcnQgaW1hZ2VMaXN0IGZyb20gJy4vSW1hZ2VTbGlkZVNvdXJjZXMnO1xyXG5pbXBvcnQgTGlzdENyb3VzZWxEZXNjcmlwdGlvbiBmcm9tICcuL0xpc3RDYXJvdXNlbERlc2NyaXB0aW9uJztcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9kZXNrLmpwZ1wiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDc1MCxcclxuICAgICAgICBtYXhXaWR0aDogJzEwMDBweCcsXHJcbiAgICAgICAgd2lkdGggOiAnNzB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzY1dmgnLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJ2luaGVyaXQnXHJcbiAgICB9LFxyXG4gICAgdGV4dFBhcGVyIDoge1xyXG4gICAgICAgIG1pbldpZHRoIDogMzUwLFxyXG4gICAgICAgIHdpZHRoIDogJzcwdncnLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidpbmhlcml0J1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3N0ZXBwZXIsIHNldFN0ZXBwZXJdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnNvbGUubG9nKGBjdXJyZW50U2xpZGUgOiAke2N1cnJlbnRTbGlkZX1gKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTcwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxGYWRlIGluPXtncm93fSAgdGltZW91dD17e2VudGVyOjMwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd30gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAyMDAwfSB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBpbWFnZSBjYXJvdXNlbCAqL31cclxuICAgICAgICAgICAgICAgICAgPEltYWdlQ2Fyb3VzZWwgXHJcbiAgICAgICAgICAgICAgICAgIGxpc3Q9e2ltYWdlTGlzdH0gXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZT17Y3VycmVudFNsaWRlfSBcclxuICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNsaWRlPXtzZXRDdXJyZW50U2xpZGV9IFxyXG4gICAgICAgICAgICAgICAgICBzZXRTdGVwcGVyPXtzZXRTdGVwcGVyfSBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiB7YXBwZWFyIDogMjUwMH19IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBsaXN0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Q3JvdXNlbERlc2NyaXB0aW9uIHN0ZXBwZXI9e3N0ZXBwZXJ9ID48L0xpc3RDcm91c2VsRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IFBhcGVyLCBCb3gsIEdyb3csIEF2YXRhciwgVHlwb2dyYXBoeSxGYWRlICwgU2xpZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgZ3VpZGVJbWFnZSBmcm9tICcuLi9pbWFnZXMvbW9vbi5wbmcnO1xyXG5pbXBvcnQgQ3Jvc3NsaW5lIGZyb20gJy4vQ3Jvc3NsaW5lJztcclxuaW1wb3J0IFByb2plY3REZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvciA6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICBsb2dvQm94IDoge1xyXG4gICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93J1xyXG4gICAgfSxcclxuICAgIGJpZ0F2YXRhciA6IHtcclxuICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxyXG4gICAgfSxcclxuICAgIHRleHRXaXRoU2hhZG93IDoge1xyXG4gICAgICBjb2xvcjonI2ZmZicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICAgIGZvbnRTaXplOic0cmVtJyxcclxuICAgICAgbWFyZ2luTGVmdDonMnZ3JyxcclxuICAgICAgdGV4dFNoYWRvdzogJzFweCA1cHggNXB4ICM5ZTk5OTknXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb25Cb3ggOiB7XHJcbiAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgbWF4V2lkdGggOiAnNTB2dycsXHJcbiAgICAgIG1hcmdpbiA6ICcwIDAgMCAzdncnXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyaXNlLCBzZXRSaXNlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgIHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICl9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgPEZhZGUgaW49e2dyb3d9ICB0aW1lb3V0PXt7ZW50ZXI6MjAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Q3Jvc3NsaW5lPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQm94fT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2dyb3d9IHsuLi4oZ3Jvdz8ge3RpbWVvdXQ6e2VudGVyOjMwMDAsIGV4aXQ6ODAwfX0gOiB7fSl9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PSdoZWxwJyBzcmM9e2d1aWRlSW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdBdmF0YXJ9Lz5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2J1dHRvbicgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRXaXRoU2hhZG93fT4gTWFuYWdlbWVudCBBcHAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25Cb3h9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+QW4gYXBwbGljYXRpb24gdGhhdCB5b3UgY2FuIGVhc2lseSBjcmVhdGUgJiBkZXNpZ24geW91ciBvd24gZGF0YS48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5HZXQgc3RhcnRlZCB3aXRoIHlvdXIgR29vZ2xlIGFjY291bnQhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+VGhpcyBhcHAgd2lsbCBub3Qga2VlcCBhbnkgcGVyc29uYWwgaW5mb3JtYXRpb24uPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nyb3NzbGluZT5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICA8UHJvamVjdERlc2NyaXB0aW9uLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1R5cG9ncmFwaHkgLCBTdGVwcGVyLCBTdGVwLCBCb3gsIFN0ZXBMYWJlbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc2xpZGVTb3VyY2UgZnJvbSAnLi9JbWFnZVNsaWRlU291cmNlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgZmxleERpcmVjdGlvbjoncm93JyxcclxuICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInXHJcbiAgICB9LFxyXG4gICAgaW5saW5lOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNjcmlwdGlvbkxpc3QgKHtzdGVwcGVyfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17c3RlcHBlcn0gb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J2luaGVyaXQnfX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVTb3VyY2UubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGVwIGNvbXBsZXRlZD17aW5kZXggPCBzdGVwcGVyfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PntpdGVtLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXBMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0ZXA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvU3RlcHBlcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2JhY2tncm91bmQxLmpwZyc7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFN0YXJ0QnV0dG9uIGZyb20gXCIuL1N0YXJ0QnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvdmVyJyxcclxuICAgICAgICBjb2xvciA6ICd3aGl0ZSdcclxuICAgIH0sXHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbZmFkZSxzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzRmlyc3RSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICAgICAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSBpc0ZpcnN0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTM1MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjEzMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7dGV4dFNoYWRvdzonNXB4IDEuNXB4IDEuNXB4IGdyYXknfX0+XHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50ID8gJ1dFTENPTUUnIDogJ1JlYWR5IHRvIHN0YXJ0Pyd9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIHtpc0ZpcnN0UmVmLmN1cnJlbnQ/IG51bGwgOiAoPFN0YXJ0QnV0dG9uLz4pfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHtCdXR0b24gLCBCb3gsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgUGxheUFycm93U2hhcnAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzAuNXZoJ1xyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzJweCAxcHggMXB4IGdyYXknLFxyXG4gICAgICAgIGNvbG9yIDogJ2luaGVyaXQnXHJcbiAgICB9LFxyXG4gICAgaW5uZXJCb3ggOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzF2aCcsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL21hbmFnZW1lbnQnIHN0eWxlPXt7dGV4dERlY29yYXRpb246J25vbmUnLCBjb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdjb250YWluZWQnIFxyXG4gICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8UGxheUFycm93U2hhcnAgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFNpemUgOiAzMH19Lz59IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURURcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXJyb3cuZDA4MzI4ZjYyZDE5YjY2ZjhlYThkNmQwMDY3MjRjOGIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJhY2tncm91bmQxLjg0MDAzYmNlMjFmZDQyYjc5ZGMwYTc3OThmYWIxZmFjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZXNrLjMyMDdjMWVmOTRjODY3ZjgwYjBlOWRmNmFjNzhkNTJiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlYXN5LWxvZ2luLjNlOTFiOGQ4ODczNTY4OTA3OWFmZDA3NmUzZTA3NDIzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJoYW5kbGUtdGFibGUuM2M1ODY5MTRhOTZkNGFmZWRkYzVjN2FkM2Q3ZGYzNTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxpbmstbWFuYWdlbWVudC1wYWdlLjQ4MDA0ZDEzM2I1ZmMyMjU3NzcwNGM5NWViMzVmM2Q4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYWtlLWhlYWRlcnMuY2ZmYWM2MzRmMjlkMzhkZGJkMWY0NDY3YTU3M2ViYzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1hbmFnZW1lbnQtYmFja2dyb3VuZC5hMDA4ZGU4MTM5NTgxYjBkYWJmMTgzMmVkMWM5YzQ2ZS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibW9vbi5mMjA2YmMzZDViZTgzMTFjNzdkOTg5N2RhNDRlMWY2NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibXltZW51LjlmZGQ1OGFjYTc0ZWI0OGQ5NTVmODM1YzllYzg3OTZlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGFydC1yaWdodC1hd2F5LjRlMjE3MjYyZDJjOGQ4NmQ1ZTBmNmVlNDMyYWVmYmNmLnBuZ1wiOyIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICAoPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8QXBwLz5cclxuICAgIDwvQ29va2llc1Byb3ZpZGVyPilcclxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmFkZSwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBjb250YWluZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfSxcclxuICAgIGJ1dHRvbkNvbnRhaW5lciA6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzAuNXB4IDAuNXB4IDFweCAjMDAwMDAwNWMnLFxyXG4gICAgICAgIG1hcmdpbiA6ICcwIDF2dyAxLjd2aCcsXHJcbiAgICAgICAgY29sb3I6ICcjNmE3NDhjJyxcclxuICAgIH0sXHJcbn0pKTtcclxuY29uc3QgZGVmYXVsdERhdGEgPSB7XHJcbiAgICBjb2x1bW5zIDogW1xyXG4gICAgICB7IHRpdGxlOiAnTmFtZScsIGZpZWxkOiAnbmFtZScgLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHsgdGl0bGU6ICdTdXJuYW1lJywgZmllbGQ6ICdzdXJuYW1lJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnQmlydGggWWVhcicsIGZpZWxkOiAnYmlydGhZZWFyJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnUGhvbmUnICwgZmllbGQ6J3Bob25lJywgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgICAgIGZpZWxkOiAnZ2VuZGVyJyxcclxuICAgICAgfSxcclxuICAgICAgeyB0aXRsZTogJ01lbW8nICwgZmllbGQ6J21lbW8nfVxyXG4gICAgXSxcclxuICAgIGRhdGEgOiBbXHJcbiAgICAgIHsgbmFtZTogJ01laG1ldCcsIHN1cm5hbWU6ICdCYXJhbicsIGJpcnRoWWVhcjogMTk4MywgcGhvbmU6JzAxMDQ2NTA5OTk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0FkYW0nLCBzdXJuYW1lOiAnQWRhbScsIGJpcnRoWWVhcjogMTk4NCwgcGhvbmU6JzAxMDQ2NTA5Nzk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ01laG1ldCcsIHN1cm5hbWU6ICdBdG9tJywgYmlydGhZZWFyOiAxOTg1LCBwaG9uZTonMDEwNDY1MDk2OTUnICxnZW5kZXI6IDEgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnbXVsJywgc3VybmFtZTogJ0tvbmduYScsIGJpcnRoWWVhcjogMTk4NiwgcGhvbmU6JzAxMDQ2NTA5MTk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0phY2snLCBzdXJuYW1lOiAnSmFjaycsIGJpcnRoWWVhcjogMTk4NywgcGhvbmU6JzAxMDQ2NTA5Mjk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0JvYicsIHN1cm5hbWU6ICdCb2InLCBiaXJ0aFllYXI6IDE5ODgsIHBob25lOicwMTA0NjUwOTM5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgXVxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmYXVsdFBhZ2UgKHtzdGF0ZSAsIHNldFN0YXRlLCBtYXRjaH0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmYWRlMiwgc2V0RmFkZTJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlT25ERU1PQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlICwgY29sdW1ucyA6IGRlZmF1bHREYXRhLmNvbHVtbnMgLCBkYXRhIDogZGVmYXVsdERhdGEuZGF0YSwgZGVmYXVsdFBhZ2UgOiAhc3RhdGUuZGVmYXVsdFBhZ2V9KTtcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZXRGYWRlMih0cnVlKSAsIDE1MDApO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogODAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0naW5pdGlhbCcgc3R5bGU9e3t0ZXh0U2hhZG93Oic1cHggMS41cHggMS41cHggZ3JheSd9fT5cclxuICAgICAgICAgICAgICAgIE1hbmFnZW1lbnQgVGFibGVcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGd1dHRlckJvdHRvbSBzdHlsZT17e3RleHRTaGFkb3c6JzJweCAycHggMXB4IGJsYWNrJ319PiBcclxuICAgICAgICAgICAgICAgIFlvdSBtYXkgdHJ5IHRoZSBERU1PIGlmIHRoaXMgeW91ciBmaXJzdCB0aW1lLCBcclxuICAgICAgICAgICAgICAgIG9yIGdldCBzdGFydGVkIHJpZ2h0IGF3YXkhXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2ZhZGUyfSB0aW1lb3V0PXt7ZW50ZXIgOiAzMDAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e2hhbmRsZU9uREVNT0NsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVTRSBERU1PIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaGVhZGVycycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEIFJJR0hUIEFXQVlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7IFxyXG4gICAgQm94ICxQYXBlciwgbWFrZVN0eWxlcywgRmFkZSwgVGV4dEZpZWxkLCBUb29sdGlwLCBUeXBvZ3JhcGh5LCBDaGVja2JveFxyXG59XHJcbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnXCI7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9pbWFnZXMvYXJyb3cucG5nJztcclxuaW1wb3J0IHsgc2F2ZUhlYWRlcnMgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gJy4uL3V0aWwvTWFuYWdlbWVudEFQSSc7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4uL2N1c3RvbUhvb2svU25hY2tCYXInO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBjb250YWluZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEyMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzEwdmgnLFxyXG4gICAgfSxcclxuICAgIGZvcm1Sb290IDoge1xyXG4gICAgICAgICcmID4gKic6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAnMC41dmggMXZ3JyxcclxuICAgICAgICAgICAgd2lkdGg6ICc2MGNoJyxcclxuICAgICAgICAgICAgbWluV2lkdGggOiAnNDBjaCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXJyb3cgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwdmgnLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmQgOiBgbm8tcmVwZWF0IGNlbnRlci84MCUgdXJsKCR7YXJyb3d9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgOiAnY29udGFpbicsXHJcbiAgICAgICAgbWFyZ2luTGVmdCA6ICczdncnLFxyXG4gICAgICAgIHRyYW5zZm9ybSA6ICdyb3RhdGUoOTBkZWcpJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uIDoge1xyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBkZWZhdWx0SGVhZGVyID0ge1xyXG4gICAgXCJoZWFkZXIwXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyMVwiIDogJycsXHJcbiAgICBcImhlYWRlcjJcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIzXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNFwiIDogJycsXHJcbiAgICBcImhlYWRlcjVcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI2XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyN1wiIDogJycsXHJcbiAgICBcImhlYWRlcjhcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI5XCIgOiAnJyxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJzICh7aXNMb2FkaW5nfSkge1xyXG4gICAgLy8gc3R5bGUsIGNvb2tpZVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IFJlYWN0LnVzZUNvbnRleHQoUHJvZ3Jlc3NDb250ZXh0KTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAgIC8vIHN0YXRlc1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gICAgY29uc3QgW3Jlc3VsdFNuYWNrICwgc2V0UmVzdWx0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2UsIGNvbnRlbnQgOiAnJ30pO1xyXG4gICAgY29uc3QgW2RhdGEgLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBoZWFkZXJzIDogZGVmYXVsdEhlYWRlcixcclxuICAgICAgICBncm91cGluZ3MgOiBBcnJheSgxMCkuZmlsbChmYWxzZSksXHJcbiAgICB9KVxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBkYXRhUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX1gKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cGluZ0xlbmd0aCA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzID8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MubGVuZ3RoIDogMCA6IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cGluZ3MgPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyA/IFsuLi5yZXNwb25zZS5kYXRhLmdyb3VwaW5nc10gOiBbXSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAtIGdyb3VwaW5nTGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuaGVhZGVycyA/IHJlc3BvbnNlLmRhdGEuaGVhZGVycyA6IHt9IDoge307XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzTGVuZ3RoID0gT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gaGVhZGVyc0xlbmd0aDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2BoZWFkZXIke2l9YF0gPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGFSZWYuY3VycmVudCA9IHtoZWFkZXJzLGdyb3VwaW5nc307XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSh7aGVhZGVycywgZ3JvdXBpbmdzfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkgeyAgLy8gdW5hdXRob3JpemVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMzUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYFBsZWFzZSBsb2cgaW4gYWdhaW4uYH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQgOiBgZXJyb3IgKGNvZGUgOiAke3Jlc3BvbnNlLnN0YXR1c30pYH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMzUwMCk7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3Blbjp0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50OidQbGVhc2UgbG9nIGluIGFnYWluLid9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRhdGFSZWYuY3VycmVudCA9IHtcclxuICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuaGVhZGVyc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncm91cGluZ3MgOiBbXHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmdyb3VwaW5nc1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sW2RhdGEuaGVhZGVycywgZGF0YS5ncm91cGluZ3NdKTtcclxuXHJcbiAgICAvLyBlZmZlY3RzXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PnsgXHJcbiAgICAgICAgc2V0RmFkZSh0cnVlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVTdWJtaXQoZGF0YVJlZi5jdXJyZW50LmhlYWRlcnMsIGRhdGFSZWYuY3VycmVudC5ncm91cGluZ3MsIHRydWUpO1xyXG4gICAgICAgICAgICBoYW5kbGVQcm9ncmVzcyhyZXN1bHQgPT09ICdlcnJvcicgPyAnZXJyb3InIDogJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtdKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgLy8gZXZlbnRzXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7ICAgIC8vIOuqqOuToCDsv6DtgqQg7IKt7KCc7JmAIHByb2ZpbGXsoJzqsbBcclxuICAgICAgICByZW1vdmVDb29raWUoJ3Byb2ZpbGUnKTtcclxuICAgICAgICByZW1vdmVDb29raWUoJ3VzZXInKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGhlYWRlcnMsIGdyb3VwaW5ncywgaXNBdXRvU2F2ZSkgPT4ge1xyXG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5ldmVyeSh2ID0+IHYubGVuZ3RoIDw9IDE1KSkgeyAvLyAxNeq4gOyekCDsnbTsg4Eg7KCc7ZWcIOyXkOufrOuplOyEuOyngFxyXG4gICAgICAgICAgICBzZXRTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5maWx0ZXIodj0+dikubGVuZ3RoID09PSAwKSB7ICAgICAvLyDruYTslrTsnojsnYQg6rK97JqwIOyXkOufrOuplOyEuOyngFxyXG4gICAgICAgICAgICBzZXRTbmFjayh7b3Blbjp0cnVlfSlcclxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVIZWFkZXJzKGhlYWRlcnMsZ3JvdXBpbmdzKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc0F1dG9TYXZlKSBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsIGNvbnRlbnQgOiByZXNwb25zZS5yZXN1bHR9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAyMDAwKTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgW2BoZWFkZXIke2luZGV4fWBdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVHcm91cGluZ3MgPSAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGdyb3VwaW5ncyA6IGRhdGEuZ3JvdXBpbmdzLm1hcCgodixpKT0+IGk9PT1pbmRleD8gZS50YXJnZXQuY2hlY2tlZCA6IHYpfSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb21wb25lbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogMTUwMH19PlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezR9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Sb290fSBhdXRvQ29tcGxldGU9J29mZic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J2Rpdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb2xvcj0ndGV4dFByaW1hcnknIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlciBFZGl0IEZvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj17T2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpID8gJ2JsdWUnIDogJ3JlZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSdpbml0aWFsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNSBsZXR0ZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuaGVhZGVycykubWFwKChoZWFkZXIsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpbmRleD09PTA/IHRydWU6ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpZD17YCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17YGhlYWRlci0ke2luZGV4KzF9YH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49J25vcm1hbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0Q2hhbmdlKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2RhdGEuaGVhZGVyc1tgaGVhZGVyJHtpbmRleH1gXS5sZW5ndGggPiAxNSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlxyXG5Zb3UgY2FuIGFycmFuZ2UgdGhlIGRhdGEgd2l0aCBhIHZhbGlkIGhlYWRlciwgXHJcblVuaXF1ZSB2YWx1ZXMgYXJlIG5vdCBjb21tb25seSB1c2VkIGZvciB0aGlzIGZ1bmN0aW9uIGluIGdlbmVyYWwuXHJcbmUuZy4pIG5hbWUsIGFkZHJlc3MsIG1vYmlsZSBOTy4gZXRjLlxyXG5cIlxyXG4gICAgICAgICAgICAgICAgIHBsYWNlbWVudD0ncmlnaHQnIGVudGVyRGVsYXk9ezIwMH0gbGVhdmVEZWxheT17MjAwfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGF0YS5ncm91cGluZ3NbaW5kZXhdfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVHcm91cGluZ3MoZSxpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICB7aW5kZXg9PT0wPyBcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3BhbicgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT4gR3JvdXBpbmchPzwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlNVQk1JVFwiIGFyaWEtbGFiZWw9J3N1Ym1pdCcgcGxhY2VtZW50PSd0b3AnIGVudGVyRGVsYXk9ezIwMH0gbGVhdmVEZWxheT17NDAwfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3d9IG9uTW91c2VPdmVyPXsoZSk9PmUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ31cclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVTdWJtaXQoZGF0YS5oZWFkZXJzICwgZGF0YS5ncm91cGluZ3MpfS8+XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgY29udGVudD17YEhlYWRlciBzaG91bGQgYmUgbGVzcyB0aGFuIDE1IGxldHRlcnMgOihgfSBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17cmVzdWx0U25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFJlc3VsdFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e3Jlc3VsdFNuYWNrLmNvbnRlbnR9IHN0YXR1cz17cmVzdWx0U25hY2suc3RhdHVzPT09J2Vycm9yJz8gJ2Vycm9yJyA6ICdzdWNjZXNzJ30vPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJztcclxuaW1wb3J0IE1hbnVhbERpYWxvZyBmcm9tIFwiLi9NYW51YWxEaWFsb2dcIjtcclxuaW1wb3J0IHsgb3B0aW9ucyxsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9UYWJsZU9wdGlvbnNcIjtcclxuaW1wb3J0IHVzZU9uRmlyc3RSZW5kZXIgZnJvbSAnLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyJztcclxuaW1wb3J0IHsgZ2V0TWFuYWdlbWVudFRhYmxlIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgRGVmYXVsdFBhZ2UgZnJvbSAnLi9EZWZhdWx0UGFnZSc7XHJcbmltcG9ydCBwYXJzZURhdGEgZnJvbSAnLi4vdXRpbC9wYXJzZURhdGEnO1xyXG5pbXBvcnQgU2F2ZUJ1dHRvbiBmcm9tICcuL1NhdmVCdXR0b24nO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4uL2N1c3RvbUhvb2svU25hY2tCYXInO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbi8vIHVzZUVmZmVjdOuhnCBkYXRhLCBjb2x1bW5zIOqwgCDrs4Dqsr3rkKAg65WM66eI64ukIOyEnOuyhOyXkCDsoIDsnqUg7ZuEIOqwseyLoFxyXG4vLyAuL3V0aWwg6rK966Gc7JeQIOuhnOyngSDsnpHshLFcclxuLy8g7Ya17Iug7JeQIOuMgO2VnCB0ZXN0Y29kZeyekeyEsVxyXG4vLyBjb2x1bW5z7JmAIGRhdGHsnZgg6rCBIOqwkuuTpOyXkCDrjIDtlZwg66y06rKw7ISxIOyytO2BrFxyXG4vLyBwcm9wc1R5cGUg7J6R7ISxXHJcbi8vIFNpZGVNZW51TGlzdCA9PiBMb2dpbuycvOuhnCDrs4Dqsr0sIOu5hOuhnOq3uOyduCDsi5wgTE9HSU7snLzroZwg67O07J28IOqygywg66Gc6re47J247IucIE1ZIE1FTlXroZwg67O06riwXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlbWVudFRhYmxlKHtpc0xvYWRpbmd9KSB7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gUmVhY3QudXNlQ29udGV4dChQcm9ncmVzc0NvbnRleHQpO1xyXG5cclxuICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgLy8gc3RhdGVzXHJcbiAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3NhdmVkU25hY2sgLCBzZXRTYXZlZFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2Vycm9yU25hY2sgLCBzZXRFcnJvclNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHsgIC8vIOy1nOy0iCBBUEnroZwg67Cb7JWE7Jik64qUIOuPmeyeke2VhOyalFxyXG4gICAgZGVmYXVsdFBhZ2UgOiB0cnVlLFxyXG4gICAgaGFzVGFibGUgOiBmYWxzZSxcclxuICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgZGF0YTogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgdGFibGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3RydWN0b3JcclxuICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICBpZiAoY29va2llcy51c2VyKSB7ICAgLy8g7L+g7YKk7JeQIO2GoO2BsOydtCDsnojsnYQg6rK97JqwIO2FjOydtOu4lCBmZXRjaCBBUEnsi6TtlolcclxuICAgICAgZ2V0TWFuYWdlbWVudFRhYmxlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1cyA6ICR7cmVzcG9uc2Uuc3RhdHVzfSAsIGRhdGEgOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpfWApO1xyXG4gICAgICAgICAgLy8g7Jyg7KCAIO2ZleyduOuQkOqzoCDthYzsnbTruJTrj4Qg67mE7Ja07J6I7KeAIOyViuydhCDqsr3smrBcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXM9PT0yMDApIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3NldFNuYWNrKHtvcGVuOnRydWV9KX0sNDAwKTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGNvbHVtbnMgOiBwYXJzZURhdGEocmVzcG9uc2UuZGF0YS5oZWFkZXJzICwgcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MpLFxyXG4gICAgICAgICAgICAgIGRhdGEgOiByZXNwb25zZS5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFBhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgICBoYXNUYWJsZSA6IHRydWV9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtzZXREaWFsb2coe29wZW4gOiBmYWxzZX0pO307XHJcbiAgY29uc3QgaGFuZGxlT25TYXZlID0gKGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgLy8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciDsnZggcmVm7JeQ7IScIOyLoOuisOuPhOyeiOuKlCDrjbDsnbTthLAg7LC47KGwXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICBncm91cGluZ3MucHVzaCh2Lmdyb3VwaW5nKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICB9LHt9KVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgIGNvbnN0IHt0YWJsZURhdGEsIC4uLnJlc3R9ID0gdjtcclxuICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzYXZlRGF0YShoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpO1xyXG4gICAgICBpZighaXNBdXRvU2F2ZSkgc2V0U2F2ZWRTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGVmZmVjdHNcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyAgIC8vIHdpbmRvdyDrjZTruJTtgbTrpq0g7J2067Kk7Yq4IOy2lOqwgCwg64+E7JuA66eQIG9wZW5cclxuICAgIGNvbnN0IG9uZGJDbGljayA9ICgpID0+IHNldERpYWxvZyh7b3BlbiA6ICFkaWFsb2cub3Blbn0pO1xyXG4gICAgY29uc3Qgb25LZXlkb3duID0gKGUpID0+IHsgICAvLyBjdHJsICsgc+uhnCDsoIDsnqUgZXZlbnRcclxuICAgICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybS5tYXRjaChcIk1hY1wiKSA/IGUubWV0YUtleSA6IGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IDgzKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhhbmRsZU9uU2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgICAgLy8g7LSI6riw7KCR6re87J2YIOqyveyasCDrjbDsnbTthLDqsIAg7JeG7Ja0IOyXkOufrCDrsJzsg53tlaAg7IiYIOyeiOyWtCDsgrztla3si53snLzroZwg7YyQ64uoIO2bhCDslrjrp4jsmrTtirjsi5zsnZggZmV0Y2hBUEnsi6TtlolcclxuICAgICAgdGFibGVSZWYuY3VycmVudCA/IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIgPyBoYW5kbGVPblNhdmUodHJ1ZSkgOiBudWxsIDogbnVsbDtcclxuICAgICAgdGFibGVSZWYuY3VycmVudCA/IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIgPyBoYW5kbGVQcm9ncmVzcygnc3VjY2VzcycpIDogbnVsbCA6IG51bGw7XHJcbiAgfTtcclxufSwgW10pO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG4gIGNvbnN0IE1hcmdpbiA9ICgpID0+ICg8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDBweCd9fT48L0JveD4pOyAgLy8g7Jes67CxXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICB7XHJcbiAgICBzdGF0ZS5kZWZhdWx0UGFnZSA/XHJcbiAgICAgICg8RGVmYXVsdFBhZ2Ugc3RhdGU9e3N0YXRlfSBzZXRTdGF0ZT17c2V0U3RhdGV9Lz4pXHJcbiAgICA6IFxyXG4gICAgKDxCb3g+XHJcbiAgICAgICAgPE1hbnVhbERpYWxvZyBvcGVuPXtkaWFsb2cub3Blbn0gb25DbG9zZT17aGFuZGxlRGlhbG9nQ2xvc2V9Lz5cclxuICAgIDxNYXJnaW4vPlxyXG4gICAgPE1hdGVyaWFsVGFibGVcclxuICAgICAgdGFibGVSZWY9e3RhYmxlUmVmfVxyXG4gICAgICB0aXRsZT17XHJcbiAgICAgIDxTYXZlQnV0dG9uIHNldFNhdmVkU25hY2s9e3NldFNhdmVkU25hY2t9IFxyXG4gICAgICAvLyDrp4jsmrTtirgg7J207ZuE7JeQIOygkeq3vO2VhOyalFxyXG4gICAgICBkYXRhTWFuYWdlcj17dGFibGVSZWYuY3VycmVudCA/IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIgOiB7fX0vPlxyXG4gICAgfVxyXG4gICAgICBjb2x1bW5zPXtzdGF0ZS5jb2x1bW5zfVxyXG4gICAgICBkYXRhPXtzdGF0ZS5kYXRhfVxyXG4gICAgICBsb2NhbGl6YXRpb249e2xvY2FsaXphdGlvbn0gLy8g66Gc7Lus65287J207KaIXHJcbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9IC8vIOuCtOuztOuCtOq4sCwg6re466Oo7ZWRXHJcbiAgICAgIGFjdGlvbnM9e1svLyDrqYDti7Ag7IWA66CJ7IWYIOyekeyXhVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdG9vbHRpcCA6ICdSZW1vdmUgdGhlIFNlbGVjdGVkIHJvdyhzKScsXHJcbiAgICAgICAgICAgIGljb24gOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgb25DbGljayA6IChlICwgZGVsZXRpb25zKSA9PiB7ICAvLyDshKDtg53tlZwg7LK07YGs67CV7Iqk7JeQIOuMgO2VtCDrqqjrkZAg7IKt7KCcIOynhO2WiVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5zdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShkYXRhLmluZGV4T2YodiksIDEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2RGF0YSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLnByZXZEYXRhICwgZGF0YX07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXX0gXHJcbiAgICAgIGVkaXRhYmxlPXt7XHJcbiAgICAgICAgb25Sb3dBZGQ6IChuZXdEYXRhKSA9PiAgLy8g7LaU6rCAXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIG9uUm93VXBkYXRlOiAobmV3RGF0YSwgb2xkRGF0YSkgPT4gIC8vIOyImOyglVxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9sZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICAgIGRhdGFbZGF0YS5pbmRleE9mKG9sZERhdGEpXSA9IG5ld0RhdGE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxNYXJnaW4vPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J25lZWQgc29tZSBoZWxwPyA/IGRvdWJsZS1jbGljayBhbnkgc3BhY2UgIScgc3RhdHVzPVwic3VjY2Vzc1wiLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzYXZlZFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTYXZlZFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nU0FWRUQgIScgc3RhdHVzPVwic3VjY2Vzc1wiLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtlcnJvclNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRFcnJvclNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nRVJST1IgIScgc3RhdHVzPVwiZXJyb3JcIi8+XHJcbiAgICA8L0JveD5cclxuICAgICl9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn0iLCJcclxuaW1wb3J0IHtEaWFsb2csXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIExpc3QsXHJcbiAgICBMaXN0SXRlbSxcclxuICAgIExpc3RJdGVtVGV4dCxcclxuICAgIEJveCxcclxuICAgIG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+IHtcclxuICAgIGljb24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnM3Z3J1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW51YWxEaWFsb2cgKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtvcGVuLCBvbkNsb3NlfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaWNvbnMgPSBbXHJcbiAgICAgICAge2ljb24gOiAnYWRkX2JveCcgLCBkZXNjcmlwdGlvbiA6ICdbQWRkXSByb3dzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2NyZWF0ZScgLCBkZXNjcmlwdGlvbiA6ICdbRWRpdF0gcmVjb3Jkcy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzZWFyY2gnICwgZGVzY3JpcHRpb24gOiAnVHlwZSBkb3duIHdvcmRzIHRvIFtzZWFyY2hdLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NhdmVfYWx0JyAsIGRlc2NyaXB0aW9uIDogJ1tEb3dubG9hZF0gZmlsZXMgaW4gQ1ZTIGZvcm1hdC4nfSxcclxuICAgICAgICB7aWNvbiA6ICd2aWV3X3dlZWsnICwgZGVzY3JpcHRpb24gOiAnW1NlbGVjdF0gY29sdW1ucyB0byBiZSBkaXNwbGF5ZWQnfSxcclxuICAgICAgICB7aWNvbiA6ICdwbGF5bGlzdF9hZGRfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBbZGVsZXRlXSByb3dzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2NoZWNrX2JveCcgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIFNlbGVjdCB0aGUgY2hlY2tib3ggb24gdGhlIHJvdy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdmYWN0X2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2hlY2sgdGhlIG51bWJlciBvZiB0aGUgcm93cyBzZWxlY3RlZC4nfSxcclxuICAgICAgICB7aWNvbiA6ICdkZWxldGUnICwgZGVzY3JpcHRpb24gOiAnIOKRoiBDbGljayB0aGUgQmluIGljb24gb24gdGhlIHJpZ2h0IGFib3ZlLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtFZGl0XSBoZWFkZXJzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ21lbnUnICwgZGVzY3JpcHRpb24gOiAnIOKRoCBPcGVuIE1ZUEFHRSd9LFxyXG4gICAgICAgIHtpY29uIDogJ2NyZWF0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENsaWNrIHRoZSBQZW5jaWwgaWNvbid9LFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8RGlhbG9nIG9uQ2xvc2U9e29uQ2xvc2V9IG9wZW49e29wZW59PlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZT4gQkFTSUMgTUFOVUFMIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGljb25zLm1hcCgoaWNvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2Ake2ljb259ICsgJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2BtYXRlcmlhbC1pY29ucyAke2NsYXNzZXMuaWNvbn1gfSBzdHlsZT17e3dpZHRoOiczdncnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2ljb24uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIFRvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7c2V0U2F2ZWRTbmFjayAsIGRhdGFNYW5hZ2VyfSkge1xyXG4gICAgZnVuY3Rpb24gb25DbGljayAoKSB7XHJcbiAgICAgICAgICAvLyBTQVZFIEVWRU5UIHV0aWwgPiBNYW5hZ2VtZW50QVBJLnNhdmVEYXRhIOunjOuTpOyWtOyEnCDsvZztlZjquLBcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IGRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgICAgICBvYmpbYGhlYWRlciR7aX1gXSA9IHYudGl0bGU7XHJcbiAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgfSx7fSk7XHJcbiAgICAgICAgICBkYXRhTWFuYWdlci5kYXRhLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCByZXN1bHQgOiBcclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9XHJcbiAgICAgICAgICAke2dyb3VwaW5nc31cclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9XHJcbiAgICAgICAgYClcclxuICAgICAgICBzYXZlRGF0YShoZWFkZXJzLGdyb3VwaW5ncyxkYXRhKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFRvb2x0aXAgdGl0bGU9J0NsaWNrIHRvIFNBVkUgKCBDdHJsICsgUyApJz5cclxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgXHJcbiAgICAgICAgb25DbGljaz17KCk9Pm9uQ2xpY2soKX0+XHJcbiAgICAgICAgICBTQVZFXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIClcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7QWRkQm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG4vLyBEQVRBIFRBQkxFIE9QVElPTlNcclxuXHJcbiBleHBvcnQgY29uc3Qgb3B0aW9ucz0ge1xyXG4gICAgZXhwb3J0QnV0dG9uOiB0cnVlLFxyXG4gICAgZ3JvdXBpbmc6dHJ1ZSxcclxuICAgIHNlbGVjdGlvbjp0cnVlLFxyXG4gICAgaGVhZGVyU3R5bGU6eyBcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnNDb2x1bW5JbmRleDotMSwgIC8vIOyVoeyFmCDslYTsnbTsvZjsnITsuZhcclxuICAgIGNvbHVtbnNCdXR0b24gOiB0cnVlLCBcclxuICAgIGRlYm91bmNlSW50ZXJ2YWwgOiAxNjAsIC8vIOuhnOuUqeyLnOqwhFxyXG4gICAgcGFnZVNpemUgOiAxNSwgICAgICAgICAgLy8g7Y6Y7J207KeA7IKs7J207KaIXHJcbiAgICBwYWdlU2l6ZU9wdGlvbnMgOiBbNSwgMTUsIDMwLCA1MCwgMTAwXSwgLy8g7Y6Y7J207KaIIOyCrOydtOymiCDsooXrpZhcclxuICB9XHJcbiBleHBvcnQgY29uc3QgbG9jYWxpemF0aW9uID0ge1xyXG4gICAgcGFnaW5hdGlvbiA6IHsgbGFiZWxEaXNwbGF5ZWRSb3dzIDogJ3tjb3VudH0gcm93cyB8IHtmcm9tfS17dG99JyAsIH0sXHJcbiAgICB0b29sYmFyOiB7blJvd3NTZWxlY3RlZDogJ3swfSByb3cocykgc2VsZWN0ZWQnfSxcclxuICAgIGhlYWRlcjoge2FjdGlvbnM6ICdFZGl0J30sXHJcbiAgICBib2R5OiB7ZW1wdHlEYXRhU291cmNlTWVzc2FnZTogXHJcbiAgICAgICAgKFxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAge2BObyBSZWNvcmRzIHRvIGRpc3BsYXlgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIGVuZEljb249ezxBZGRCb3gvPn1cclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtgQ2xpY2sgdGhlIHBsdXMgaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUgZm9yIGEgbmV3IHJlY29yZC4gYH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICB9XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge1Rvb2xiYXIsIERyYXdlciAsIEJ1dHRvbiAsIEdyaWQsXHJcbiAgICAgRGl2aWRlciwgQXBwQmFyIGFzIEFwcGJhcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGlkZU9uU2Nocm9sbCBmcm9tIFwiLi4vY3VzdG9tSG9vay9IaWRlT25TY2hyb2xsXCI7XHJcbmltcG9ydCBTaWRlTWVudUxpc3QgZnJvbSBcIi4vU2lkZU1lbnVMaXN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgU2lnbk91dEJ1dHRvbiBmcm9tIFwiLi9TaWduT3V0QnV0dG9uXCI7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDoxOCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOjE4LFxyXG4gICAgfSxcclxuICAgIGxlZnQgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6MzAsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1zdGFydCdcclxuICAgIH0sXHJcbiAgICBjZW50ZXIgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgcmlnaHQgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6NDUsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1lbmQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nOmAwICR7dGhlbWUuc3BhY2luZygzKX1gXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2IChwcm9wcykge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVudSA6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yLCBvcGVuKSA9PiAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBmbGFnID0gb3Blbj8gc3RhdGVbYW5jaG9yXSA/IGZhbHNlIDogdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBmbGFnIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGFuY2hvciA9IHByb2ZpbGUubmFtZT8gJ01ZUEFHRScgOidMT0dJTic7XHJcbiAgICBjb25zdCBsaW5rcyA9IFsnYm9hcmQnLCdtYW5hZ2VtZW50J107XHJcbiAgICBjb25zdCBMb2dvdXRCdG4gPSBwcm9maWxlLm5hbWU/IDxTaWduT3V0QnV0dG9uLz4gOiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIaWRlT25TY2hyb2xsIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEFwcGJhciBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tib3hTaGFkb3c6J25vbmUnfX0+XHJcbiAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IEhvbWUgPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtsaW5rfWB9IHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fSBrZXk9e2xpbmt9PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiB7bGlua30gPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT48c3Bhbj48L3NwYW4+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdwcmltYXJ5JyBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0gc3R5bGU9e3ttYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YW5jaG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtMb2dvdXRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlciBvcGVuPXtzdGF0ZVthbmNob3JdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IHZhcmlhbnQ9J3BlcnNpc3RlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7U2lkZU1lbnVMaXN0KCB7Li4ucHJvcHMsIGFuY2hvciAsdG9nZ2xlRHJhd2VyICwgcHJvZmlsZX0gKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBiYXI+XHJcbiAgICAgICAgPC9IaWRlT25TY2hyb2xsPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbVRleHQsIExpc3RJdGVtQXZhdGFyICwgRGl2aWRlciwgTGlzdEl0ZW0sIFR5cG9ncmFwaHkgLCBBdmF0YXIsIEljb25CdXR0b24gLFxyXG4gICAgIE1vZGFsLCBCb3gsIEJ1dHRvbixcclxuICAgICBQYXBlcixcclxuICAgICBUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFNpZ25JbkJ1dHRvbiBmcm9tICcuL1NpZ25JbkJ1dHRvbic7XHJcbmltcG9ydCBnb29nbGVTaWduaW5JbWFnZSBmcm9tICcuLi9idXR0b25JbWFnZS9nb29nbGVTaWduaW4ucG5nJztcclxuaW1wb3J0IHtyZWRpcmVjdEdvb2dsZUxvZ2lufSBmcm9tICcuLi91dGlsL0xvZ2luQVBJJztcclxuaW1wb3J0IHtFZGl0LCBJbmZvLCBEZWxldGVGb3JldmVyLCBXYXJuaW5nfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCB7R2xvYmFsU25hY2tiYXJDb250ZXh0fSBmcm9tICcuLi9hcHAnXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxpc3QgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMjN2dycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnc3RhcnQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtVGV4dCA6IHtcclxuICAgICAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbGFyZ2VBdmF0YXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICB9LFxyXG4gICAgaW5saW5lIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnaW5saW5lJ1xyXG4gICAgfSxcclxuICAgIGxpc3RUZXh0IDoge1xyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsIDoge1xyXG4gICAgICAgIHRvcCA6ICc1MCUnLFxyXG4gICAgICAgIGxlZnQgOiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgbWluV2lkdGggOiA0MDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbW9kYWxSb3dCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBtb2RhbENvbEJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcidcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVMaXN0ICh7YW5jaG9yICwgdG9nZ2xlRHJhd2VyLCBwcm9maWxlfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlR2xvYmFsU25hY2tiYXIgPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbFNuYWNrYmFyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZW1haWxJbnB1dCwgc2V0RW1haWxJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrTG9naW4gKCkge1xyXG4gICAgICAgIHJlZGlyZWN0R29vZ2xlTG9naW4oKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2tNb2RhbCA9ICgpID0+IHNldE1vZGFsKHRydWUpO1xyXG4gICAgY29uc3QgaGFuZGxlT25DbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0RW1haWxJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZW1haWxJbnB1dCA9PT0gcHJvZmlsZS5lbWFpbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7J287LmYJyk7XHJcbiAgICAgICAgICAgIHNhdmVEYXRhKHt9LFtdLFt7fV0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHbG9iYWxTbmFja2Jhcih7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbjp0cnVlLCBcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGRhdGEucmVzdWx0ID09PSAnc3VjY2VzcycgPyAnc3VjY2VzcycgOiAnZXJyb3InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LDE1MDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUdsb2JhbFNuYWNrYmFyKHtcclxuICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6J2Vycm9yJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gcHJvZmlsZT8gcHJvZmlsZS5uYW1lPyB0cnVlIDogZmFsc2UgOiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2lzTG9nZ2VkPyAnUFJPRklMRScgOiAnTE9HSU4gTUVOVSd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcblxyXG4gICAgICAgICAgICB7aXNMb2dnZWQ/IFxyXG5cclxuICAgICAgICAgICAgKDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPSdjZW50ZXInIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17cHJvZmlsZS5waWN0dXJlfSBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2VBdmF0YXJ9IGFsdD17cHJvZmlsZS5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Byb2ZpbGUubmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RUZXh0fT48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdFTUFJTCA6ICcgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdzcGFuJyB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRQcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5lbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm8gY29sb3I9J3ByaW1hcnknIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzF2dyd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBzZWNvbmRhcnk9J0VESVQgSEVBREVSUycvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaGVhZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J2VuZCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgY29sb3I9J3ByaW1hcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8V2FybmluZyBjb2xvcj0nc2Vjb25kYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdSRU1PVkUgQUxMIERBVEEnLz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJyBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlciBjb2xvcj0nc2Vjb25kYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7Lyog66qo64usICovfVxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBvcGVuPXttb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZU9uQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1jb250ZW50c1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsUm93Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J3N0YXJ0JyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcicgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLXRpdGxlXCIgdmFyaWFudD0nYnV0dG9uJyBkaXNwbGF5PSdibG9jaycgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhdXRpb24gOiBwZXJtYW5lbnQgZGVsZXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsQ29sQm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtY29udGVudHNcIiB2YXJpYW50PSdib2R5MScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgQWxsIGRhdGEgd2lsbCBiZSBkZWxldGVkIGFuZCBjYW5ub3QgYmUgcmVjb3ZlcmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGNvcnJlY3RseSB0byBjb250aW51ZS5gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbic+e3Byb2ZpbGUuZW1haWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxSb3dCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD0nRS1NQUlMJyBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgKDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTG9naW59PlxyXG4gICAgICAgICAgICAgICAgPFNpZ25JbkJ1dHRvbiBzaWduSW49e2dvb2dsZVNpZ25pbkltYWdlfS8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+KX1cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluQnV0dG9uIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7c2lnbklufSA9IHByb3BzOyAvLyDsnbTrr7jsp4BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3NpZ25Jbn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+PC9pbWc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwJztcclxuaW1wb3J0IHsgTGlzdEl0ZW0gLCBJY29uQnV0dG9uLCBUb29sdGlwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxvZ291dCA6IHtcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAwLFxyXG4gICAgICAgIHdpZHRoIDogJ2F1dG8nLFxyXG4gICAgfVxyXG59KSlcclxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBmb250V2VpZ2h0Oidib2xkJ1xyXG4gICAgfSxcclxuICB9KSkoVG9vbHRpcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgndXNlcicpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT0nTG9nLW91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3twYWRkaW5nOjR9fSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhpdFRvQXBwSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+ICAgIFxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSBcIi4vc2VydmVyVVJMXCI7XHJcblxyXG4vLyBHb29nbGUgT3BlbklEIENvbm5lY3Qg7J207Jqp7ZWY6riwXHJcbi8vIOywuOqzoCDquLDsiKDruJTroZzqt7ggOiBodHRwczovL3d3dy5kYWxlc2VvLmNvbS9nb29nbGUtb2lkYy9cclxuXHJcbi8vIFVSTCBleHBvcnRcclxuLy8gc2V2ZXLsl5DshJwg67Cb7J2AIHVybOuhnCDrpqzri6TsnbTroIntirhcclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0R29vZ2xlTG9naW4gPSAoKSA9PiBheGlvcy5nZXQoYCR7c2VydmVyVVJMfS9sb2dpbmApLnRoZW4ocmVzID0+IGxvY2F0aW9uLmFzc2lnbihyZXMuZGF0YSkpO1xyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW5BbmRQcm9maWxlID0gKHRva2VuKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgJHtzZXJ2ZXJVUkx9L2xvZ2luYCwge3Rva2VufSAse1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyA6IHRydWUsXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gJy4vc2VydmVyVVJMJztcclxuXHJcbi8vIO2FjOydtOu4lCDrjbDsnbTthLAg67Cb7JWE7Jik6riwIGNvb2tpZeyXkCDri7TquLQgdG9rZW7sgqzsmqlcclxuZXhwb3J0IGNvbnN0IGdldE1hbmFnZW1lbnRUYWJsZSA9ICAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L21hbmFnZW1lbnRgLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUhlYWRlcnMgPSAoaGVhZGVycywgZ3JvdXBpbmdzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2F2aW5nIGhlYWRlcnMgOiBcclxuICAgIGhlYWRlcnMgOiAke0pTT04uc3RyaW5naWZ5KGhlYWRlcnMpfVxyXG4gICAgZ3JvdXBpbmdzIDogJHtKU09OLnN0cmluZ2lmeShncm91cGluZ3MpfWApO1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9oZWFkZXJzYCwge1xyXG4gICAgICAgIC8vIGRhdGFcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5nc1xyXG4gICAgfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KS50aGVuKHJlcyA9PiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpKSk7ICAgIC8vIOy/oO2CpOyZgCDtlajqu5hcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVEYXRhID0gKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9kYXRhYCwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgZ3JvdXBpbmdzLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpXHJcbiAgICB9KSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoaGVhZGVycyAsIGdyb3VwaW5ncykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBkYXRhIHBhcnNpbmchISEhYClcclxuICAgIHJldHVybiAoT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5maWx0ZXIodj0+dikubWFwKCh2YWx1ZSxpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlIDogdmFsdWUsXHJcbiAgICAgICAgZmllbGQgOiB2YWx1ZSxcclxuICAgICAgICBncm91cGluZyA6IGdyb3VwaW5nc1tpbmRleF1cclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiOyJdLCJzb3VyY2VSb290IjoiIn0=