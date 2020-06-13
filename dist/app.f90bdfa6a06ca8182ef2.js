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
          // setTimeout(handleLogout(), 3500);
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
        console.log(err); // setTimeout(handleLogout(), 3500);

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
  })), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: snack.open,
    onClose: function onClose() {
      return setSnack({
        open: false
      });
    },
    content: "Not more than 15 characters and without spaces,\n        Header must not be empty. :(",
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
    }); // console.log(` result :   // 로그
    //   ${JSON.stringify(data)}
    //   ${groupings}
    //   ${JSON.stringify(headers)}
    // `)

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
    }, "No Record to display,\n          Click the Button "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
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
  }, "Caution: Permanently delete.")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.modalColBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    id: "modal-contents",
    variant: "body1",
    style: {
      fontWeight: 'bold'
    }
  }, "All data will be deleted and cannot be recovered.\n                                Please enter the email correctly to continue."), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL1NuYWNrQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ3Jvc3NsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9TdGFydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Fycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93b29kMi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L0RlZmF1bHRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L0hlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW51YWxEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvU2F2ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9UYWJsZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9TaWRlTWVudUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9TaWduSW5CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9TaWduT3V0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0xvZ2luQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL01hbmFnZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGFyc2VEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3NlcnZlclVSTC5qcyJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkxvZ291dENvbnRleHQiLCJQcm9ncmVzc0NvbnRleHQiLCJHbG9iYWxTbmFja2JhckNvbnRleHQiLCJBcHAiLCJxcyIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwiaWRfdG9rZW4iLCJ1c2VDb29raWVzIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsInVzZVN0YXRlIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJvcGVuIiwicmVzdWx0IiwiZ2xvYmFsU25hY2tiYXIiLCJzZXRHbG9iYWxTbmFja2JhciIsInRva2VuIiwidXNlciIsInByb2dyZXNzUmVmIiwidXNlUmVmIiwiaGFuZGxlQmVmb3JldW5sb2FkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInVzZUVmZmVjdCIsImdldFRva2VuQW5kUHJvZmlsZSIsInRoZW4iLCJkYXRhIiwibmFtZSIsImVtYWlsIiwicGljdHVyZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwibWF4QWdlIiwiZXJyIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiQm9hcmQiLCJIaWRlT25TY3JvbGwiLCJwcm9wcyIsImNoaWxkcmVuIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJMb2FkaW5nIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImZvbnRXZWlnaHQiLCJvbkNsb3NlIiwiY29udGVudCIsInN0YXR1cyIsImRpcmVjdGlvbiIsImZvbnRTaXplIiwidXNlT25GaXJzdFJlbmRlciIsImZ1bmMiLCJpc0ZpcnN0UmVmIiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1pbkhlaWdodCIsImZvb3RlciIsInBhZGRpbmciLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJ0ZXh0QWxpZ24iLCJhcnJvdyIsImFsaWduU2VsZiIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIlN0aWNreUZvb3RlciIsImNsYXNzZXMiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0cmFuc2l0aW9uIiwiZSIsInRhcmdldCIsInN0eWxlIiwiY3Vyc29yIiwibWFyZ2luIiwiZmxleFdyYXAiLCJDcm9zc2xpbmUiLCJmYWRlIiwic2V0RmFkZSIsImRvbVJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsImVudGVyIiwiZXhpdCIsIkhvbWUiLCJhbGlnbkNvbnRlbnQiLCJ6SW5kZXgiLCJwYXBlciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJmbGV4IiwidGV4dCIsIkludHJvZHVjdGlvbiIsImdyb3ciLCJzZXRHcm93IiwiY29sb3IiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0aW1lb3V0IiwiYmFja2dyb3VuZEltYWdlIiwid29vZDIiLCJNYWluIiwidXNlU3R5bGUiLCJidXR0b24iLCJ0eXBvZ3JhcGh5IiwidGV4dFNoYWRvdyIsImlubmVyQm94IiwidGV4dERlY29yYXRpb24iLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250YWluZXIiLCJidXR0b25Db250YWluZXIiLCJkZWZhdWx0RGF0YSIsImNvbHVtbnMiLCJ0aXRsZSIsImZpZWxkIiwiZ3JvdXBpbmciLCJzdXJuYW1lIiwiYmlydGhZZWFyIiwicGhvbmUiLCJnZW5kZXIiLCJtZW1vIiwiRGVmYXVsdFBhZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwibWF0Y2giLCJmYWRlMiIsInNldEZhZGUyIiwiaGFuZGxlT25ERU1PQ2xpY2siLCJkZWZhdWx0UGFnZSIsInNldFRpbWVvdXQiLCJmb3JtUm9vdCIsIm1hcmdpbkxlZnQiLCJ0cmFuc2Zvcm0iLCJkZXNjcmlwdGlvbiIsImRlZmF1bHRIZWFkZXIiLCJIZWFkZXJzIiwiaGFuZGxlUHJvZ3Jlc3MiLCJ1c2VDb250ZXh0Iiwic25hY2siLCJzZXRTbmFjayIsInJlc3VsdFNuYWNrIiwic2V0UmVzdWx0U25hY2siLCJoZWFkZXJzIiwiZ3JvdXBpbmdzIiwiQXJyYXkiLCJmaWxsIiwic2V0RGF0YSIsImRhdGFSZWYiLCJnZXRNYW5hZ2VtZW50VGFibGUiLCJyZXNwb25zZSIsImdyb3VwaW5nTGVuZ3RoIiwibGVuZ3RoIiwiaSIsInB1c2giLCJoZWFkZXJzTGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlTG9nb3V0IiwiaHJlZiIsIm9yaWdpbiIsImlzQXV0b1NhdmUiLCJldmVyeSIsInYiLCJmaWx0ZXIiLCJzYXZlSGVhZGVycyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5kZXgiLCJ2YWx1ZSIsImhhbmRsZUdyb3VwaW5ncyIsIm1hcCIsImNoZWNrZWQiLCJoZWFkZXIiLCJNYW5hZ2VtZW50VGFibGUiLCJzYXZlZFNuYWNrIiwic2V0U2F2ZWRTbmFjayIsImVycm9yU25hY2siLCJzZXRFcnJvclNuYWNrIiwiZGlhbG9nIiwic2V0RGlhbG9nIiwiaGFzVGFibGUiLCJ0YWJsZVJlZiIsInBhcnNlRGF0YSIsImhhbmRsZURpYWxvZ0Nsb3NlIiwiaGFuZGxlT25TYXZlIiwiZGF0YU1hbmFnZXIiLCJyZWR1Y2UiLCJvYmoiLCJ0YWJsZURhdGEiLCJyZXN0Iiwic2F2ZURhdGEiLCJvbmRiQ2xpY2siLCJvbktleWRvd24iLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNYXJnaW4iLCJsb2NhbGl6YXRpb24iLCJvcHRpb25zIiwidG9vbHRpcCIsImljb24iLCJvbkNsaWNrIiwiZGVsZXRpb25zIiwic3BsaWNlIiwiaW5kZXhPZiIsInByZXZEYXRhIiwib25Sb3dBZGQiLCJuZXdEYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcmV2U3RhdGUiLCJvblJvd1VwZGF0ZSIsIm9sZERhdGEiLCJNYW51YWxEaWFsb2ciLCJpY29ucyIsImV4cG9ydEJ1dHRvbiIsInNlbGVjdGlvbiIsImhlYWRlclN0eWxlIiwiYWN0aW9uc0NvbHVtbkluZGV4IiwiY29sdW1uc0J1dHRvbiIsImRlYm91bmNlSW50ZXJ2YWwiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsInBhZ2luYXRpb24iLCJsYWJlbERpc3BsYXllZFJvd3MiLCJ0b29sYmFyIiwiblJvd3NTZWxlY3RlZCIsImFjdGlvbnMiLCJib2R5IiwiZW1wdHlEYXRhU291cmNlTWVzc2FnZSIsImZsZXhHcm93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsZWZ0IiwicGFkZGluZ0xlZnQiLCJqdXN0aWZ5IiwiY2VudGVyIiwicmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJOYXYiLCJtZW51IiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwiZXZlbnQiLCJmbGFnIiwibGlua3MiLCJMb2dvdXRCdG4iLCJib3hTaGFkb3ciLCJsaW5rIiwibWFyZ2luUmlnaHQiLCJTaWRlTWVudUxpc3QiLCJsaXN0IiwibGlzdEl0ZW0iLCJsaXN0SXRlbVRleHQiLCJsYXJnZUF2YXRhciIsImlubGluZSIsImxpc3RUZXh0IiwibW9kYWwiLCJwb3NpdGlvbiIsImJvcmRlciIsInNoYWRvd3MiLCJtb2RhbFJvd0JveCIsIm1vZGFsQ29sQm94IiwiTWVudUxpc3QiLCJoYW5kbGVHbG9iYWxTbmFja2JhciIsImVtYWlsSW5wdXQiLCJzZXRFbWFpbElucHV0IiwiaGFuZGxlT25DbGlja0xvZ2luIiwicmVkaXJlY3RHb29nbGVMb2dpbiIsImhhbmRsZU9uQ2xpY2tNb2RhbCIsInNldE1vZGFsIiwiaGFuZGxlT25DbG9zZU1vZGFsIiwiaGFuZGxlT25TdWJtaXQiLCJyZWxvYWQiLCJpc0xvZ2dlZCIsImdvb2dsZVNpZ25pbkltYWdlIiwiU2lnbkluQnV0dG9uIiwic2lnbkluIiwibG9nb3V0IiwiTGlnaHRUb29sdGlwIiwid2l0aFN0eWxlcyIsImNvbW1vbiIsIndoaXRlIiwiVG9vbHRpcCIsImF4aW9zIiwiZ2V0Iiwic2VydmVyVVJMIiwicmVzIiwiYXNzaWduIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInB1dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QSxRQUFXLENBQUNoRCxPQUFELEVBQVVDLFNBQVYsRUFBcUIvSSxJQUFyQixFQUE4QjtBQUNsRCxTQUFRaVMsNENBQUssQ0FBQ08sR0FBTixXQUFhTCxrREFBYixZQUErQjtBQUNuQ3JKLFdBQU8sRUFBUEEsT0FEbUM7QUFFbkNDLGFBQVMsRUFBVEEsU0FGbUM7QUFHbkMvSSxRQUFJLEVBQUpBO0FBSG1DLEdBQS9CLEVBSU47QUFBQ3VTLG1CQUFlLEVBQUM7QUFBakIsR0FKTSxFQUlrQnhTLElBSmxCLENBSXVCLFVBQUFxUyxHQUFHLEVBQUk7QUFDbEMsV0FBTy9FLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjhFLEdBQUcsQ0FBQ3BTLElBQXBCLENBQVA7QUFDSCxHQU5PLENBQVI7QUFPSCxDQVJNLEM7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUFlLHlFQUFDOEksT0FBRCxFQUFXQyxTQUFYLEVBQXlCO0FBQ3RDdEosU0FBTyxDQUFDQyxHQUFSO0FBQ0UsU0FBUWlLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZCxPQUFkLEVBQXVCc0IsTUFBdkIsQ0FBOEIsVUFBQUQsQ0FBQztBQUFBLFdBQUVBLENBQUY7QUFBQSxHQUEvQixFQUFvQ08sR0FBcEMsQ0FBd0MsVUFBQ0YsS0FBRCxFQUFPRCxLQUFQLEVBQWlCO0FBQy9ELFdBQU87QUFDTHRELFdBQUssRUFBR3VELEtBREg7QUFFTHRELFdBQUssRUFBR3NELEtBRkg7QUFHTHJELGNBQVEsRUFBRzRCLFNBQVMsQ0FBQ3dCLEtBQUQ7QUFIZixLQUFQO0FBS0QsR0FOTyxDQUFSO0FBT0QsQ0FUSCxFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlLHNGQUFmLEUiLCJmaWxlIjoiYXBwLmY5MGJkZmE2YTA2Y2E4MTgyZWYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJyZWFjdC5idW5kbGVcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIgaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2L05hdlwiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmQvQm9hcmRcIjtcclxuaW1wb3J0IE1hbmFnZW1lbnQgZnJvbSBcIi4vbWFuYWdlbWVudC9NYW5hZ2VtZW50XCI7XHJcbmltcG9ydCBIZWFkZXJzIGZyb20gJy4vbWFuYWdlbWVudC9IZWFkZXJzJztcclxuaW1wb3J0IHtDc3NCYXNlbGluZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lL0hvbWVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvZm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJ1xyXG5pbXBvcnQgeyBnZXRUb2tlbkFuZFByb2ZpbGUgfSBmcm9tIFwiLi91dGlsL0xvZ2luQVBJXCI7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuL2N1c3RvbUhvb2svU25hY2tCYXInO1xyXG5cclxuLy8g7Luo7YWN7Iqk7Yq4IOuqqeuhnVxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvdXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgR2xvYmFsU25hY2tiYXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3QgeyBpZF90b2tlbiB9ID0gcXMucGFyc2Uod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAgIGNvbnN0IFsgcHJvZmlsZSAsIHNldFByb2ZpbGUgXSA9IFJlYWN0LnVzZVN0YXRlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2dsb2JhbFNuYWNrYmFyLCBzZXRHbG9iYWxTbmFja2Jhcl0gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlICwgcmVzdWx0OiAnc3VjY2Vzcyd9KVxyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzLnVzZXI7XHJcbiAgICBjb25zdCBwcm9ncmVzc1JlZiA9IFJlYWN0LnVzZVJlZigwKTtcclxuICAgIGNvbnN0IGhhbmRsZUJlZm9yZXVubG9hZCA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcHJvZ3Jlc3MgOiAke3Byb2dyZXNzUmVmLmN1cnJlbnR9YCk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IChwcm9ncmVzc1JlZi5jdXJyZW50IDwgMTAwID8gcHJvZ3Jlc3NSZWYuY3VycmVudCArIDIwIDogMTAwKTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3NSZWYuY3VycmVudCA9PT0gMTAwKSB7XHJcbiAgICAgICAgICAgICBwcm9ncmVzc1JlZi5jdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICBzZXRHbG9iYWxTbmFja2Jhcih7b3Blbjp0cnVlICwgcmVzdWx0OnJlc3VsdH0pO1xyXG4gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDApXHJcbiAgICB9XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihpZF90b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2ggQVBJIOyLpO2WiScpO1xyXG4gICAgICAgICAgICBnZXRUb2tlbkFuZFByb2ZpbGUoaWRfdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7bmFtZSAsZW1haWwsIHBpY3R1cmV9ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKTtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShcInByb2ZpbGVcIix7bmFtZSAsIGVtYWlsLCBwaWN0dXJlfSx7cGF0aDpcIi9cIiAsIG1heEFnZSA6IDcyMDB9KTsgIC8vIG1heEFnZSA6IDLsi5zqsIRcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBvY2N1cmVkIDogJHtlcnJ9YClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtpZF90b2tlbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIOq4sOyhtCDthqDtgbDsnbQg7J6I7J2EIOqyveyasCDshJzrsoTroZwg7J6s7JqU7LKt7ZW07IScIOunjOujjOuQnCDthqDtgbDsnbjsp4Ag7ZmV7J24XHJcbiAgICAgICAgLy8g66eM66OM65CcIO2GoO2BsOydvCDqsr3smrAg7L+g7YKk7ZSE66Gc7ZWELCBzdGF0Ze2UhOuhnO2VhCwg66eM66OM65CcIO2GoO2BsCDrqqjrkZAg7KCc6rGwXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDquLDsobQg7Yag7YGwIOyeiOydjCB0b2tlbiA6ICR7dG9rZW59YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbdG9rZW5dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoY29va2llcy5wcm9maWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBjb29raWVzLnByb2ZpbGUgOiAke0pTT04uc3RyaW5naWZ5KGNvb2tpZXMucHJvZmlsZSl9YCk7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGUoY29va2llcy5wcm9maWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtjb29raWVzLnByb2ZpbGVdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb2ZpbGUgfHwge25hbWUgOiAnJ319PiAgICAgICAgICB7Lyog7Jyg7KCAIO2UhOuhnO2VhCDsu6jthY3siqTtirggICAgKi99XHJcbiAgICAgICAgICAgIDxMb2dvdXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRQcm9maWxlfT4gICB7Lyog66Gc6re47JWE7JuDIOydtOuypO2KuCDsu6jthY3siqTtirggICAqL31cclxuICAgICAgICAgICAgPFByb2dyZXNzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17KHJlc3VsdCk9PmhhbmRsZUJlZm9yZXVubG9hZChyZXN1bHQpfT5cclxuICAgICAgICAgICAgPEdsb2JhbFNuYWNrYmFyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0R2xvYmFsU25hY2tiYXJ9PlxyXG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8TmF2Lz5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KCk9PjxIb21lIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYm9hcmQnIHJlbmRlcj17KCk9PjxCb2FyZCBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL21hbmFnZW1lbnQnIHJlbmRlcj17KCk9PiA8TWFuYWdlbWVudCBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2hlYWRlcnMnIHJlbmRlcj17KCk9PiA8SGVhZGVycyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPC9HbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvUHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0xvZ291dENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtnbG9iYWxTbmFja2Jhci5vcGVufSBvbkNsb3NlPXsoKT0+c2V0R2xvYmFsU25hY2tiYXIoe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdD09PSdlcnJvcic/IGBOb3Qgc2F2ZWQuXHJcbiAgICAgICAgICAgIFJlYXNvbiA6IEludmFsaWQgaW5wdXQuYCA6JyBTQVZFRCAnfSBzdGF0dXM9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdH1cclxuICAgICAgICAgICAgZGlyZWN0aW9uPXt7dmVydGljYWw6J3RvcCcsIGhvcml6b250YWw6J3JpZ2h0J319Lz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZCh7aXNMb2FkaW5nfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgZml4ZWQ+XHJcbiAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBCb2FyZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZ29vZ2xlU2lnbmluLjFjZTFhYWE1YTEyN2ZhM2U0OTJhMTJiYjYyZjk5MzA0LnBuZ1wiOyIsImltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCI7XHJcbmltcG9ydCBTbGlkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZSc7XHJcblxyXG4vLyBHTkLsnZgg7Iqs65287J2065Oc6riw64qlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpZGVPblNjcm9sbChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTbGlkZSBhcHBlYXI9e2ZhbHNlfSBkaXJlY3Rpb249XCJkb3duXCIgaW49eyF0cmlnZ2VyfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TbGlkZT5cclxuICApO1xyXG59IiwiaW1wb3J0IHtCb3gsIENpcmN1bGFyUHJvZ3Jlc3MsIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcgKHtpc0xvYWRpbmd9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7XHJcbiAgICAgICAgaXNMb2FkaW5nICYmIFxyXG4gICAgICAgICAgICAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwdmgnLCB3aWR0aDonMTAwJScsIGRpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YFNhdmluZyBjaGFuZ2VzYH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICAgICAgICAgIDwvQm94PilcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbn0iLCJpbXBvcnQgeyBTbmFja2JhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe29wZW4sIG9uQ2xvc2UsIGNvbnRlbnQsIHN0YXR1cywgZGlyZWN0aW9ufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXtkaXJlY3Rpb24/IGRpcmVjdGlvbiA6IHsgdmVydGljYWw6J3RvcCcsIGhvcml6b250YWw6J2NlbnRlcicgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtvbkNsb3NlfSBzZXZlcml0eT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgdmFyaWFudD0nZmlsbGVkJyBtZXNzYWdlPXt7Zm9udFdlaWdodDonYm9sZGVyJywgZm9udFNpemU6JzVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgKVxyXG59IiwiXHJcbi8vIGNvbnRzdHJ1Y3RvciDtm4VcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT25GaXJzdFJlbmRlciAoZnVuYykge1xyXG4gICAgY29uc3QgaXNGaXJzdFJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuICAgIGlmIChpc0ZpcnN0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpc0ZpcnN0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBmdW5jKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBMaW5rfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9pbWFnZXMvYXJyb3cucG5nJztcclxuaW1wb3J0IHtCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICBKYWNrJ3MgV2Vic2l0ZVxyXG4gICAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgICAgeycuJ31cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBtaW5IZWlnaHQ6ICcyMHZoJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXHJcbiAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6dGhlbWUucGFsZXR0ZS5ncmV5WzIwMF0sXHJcbiAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICB3aWR0aCA6ICc4dncnLFxyXG4gICAgICBoZWlnaHQgOiAnOHZoJyxcclxuICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCxcclxuICAgICAgbWFyZ2luQm90dG9tOicydmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTonY29udGFpbicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5Rm9vdGVyKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTW92ZSB0byBUb3BcIiBhcmlhLWxhYmVsPVwibW92ZS10by10b3BcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBlbnRlckRlbGF5PXszNTB9IGxlYXZlRGVsYXk9ezE1MH0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gb25DbGljaz17c2Nyb2xsVG9Ub3B9IG9uTW91c2VPdmVyPXsoZSk9PnRyYW5zaXRpb24oZSl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7RmFkZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIG1hcmdpbjowLFxyXG4gICAgICBwYWRkaW5nOjAsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgaGVpZ2h0IDogJzEzdmgnLFxyXG4gICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiKDE5MSwxODUsMTg1KScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDE5MSwxODUsMTg1LDEpIDI2JSwgcmdiYSg0NywxMzUsMTY2LDEpIDc3JSknLFxyXG4gICAgICB6SW5kZXg6MTAwLFxyXG4gICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgICBvcGFjaXR5OjAuNyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Jvc3NsaW5lKHtjaGlsZHJlbn0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjEwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYm94U2hhZG93PXs0fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gXCIuL0ludHJvZHVjdGlvblwiO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uMiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb24yXCI7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGhlaWdodCA6ICczNTB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2lzTG9hZGluZ30pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24vPlxyXG4gICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbjIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7R3Jvd30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ3Jvc3NsaW5lIGZyb20gJy4vQ3Jvc3NsaW5lJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgd2lkdGggOiAnOTB2dycsXHJcbiAgICAgICAgbWFyZ2luVG9wOictMTB2aCcsXHJcbiAgICAgICAgekluZGV4OjAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDg1MCxcclxuICAgICAgICBtaW5XaWR0aDogMzUwLFxyXG4gICAgICAgIHdpZHRoIDogJzUwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc3MHZoJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICAgIGZsZXggOiAyLFxyXG4gICAgfSxcclxuICAgIHRleHQgOiB7XHJcbiAgICAgICAgbWF4V2lkdGggOiA2NTAsXHJcbiAgICAgICAgbWluV2lkdGggOiAyMjUsXHJcbiAgICAgICAgd2lkdGggOiAnMzB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzUwdmgnLFxyXG4gICAgICAgIGZsZXggOiAxLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPENyb3NzbGluZT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgYWxpZ25TZWxmOidjZW50ZXInfX0+IFVzZXIncyBHdWlkZSA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Dcm9zc2xpbmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd30gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzAgMCAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IDEwMDAgfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMjAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9ID48L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dyb3d9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3ctcmV2ZXJzZScsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICc5MHZ3JyxcclxuICAgICAgICB6SW5kZXg6MCxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgbWF4V2lkdGg6IDg1MCxcclxuICAgICAgbWluV2lkdGg6IDM1MCxcclxuICAgICAgd2lkdGggOiAnNTB2dycsXHJcbiAgICAgIGhlaWdodCA6ICc3MHZoJyxcclxuICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgZmxleCA6IDIsXHJcbiAgfSxcclxuICB0ZXh0IDoge1xyXG4gICAgICBtYXhXaWR0aCA6IDY1MCxcclxuICAgICAgbWluV2lkdGggOiAyMjUsXHJcbiAgICAgIHdpZHRoIDogJzMwdncnLFxyXG4gICAgICBoZWlnaHQgOiAnNTB2aCcsXHJcbiAgICAgIGZsZXggOiAxLFxyXG4gICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9IFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcwIDAgMCcgfX1cclxuICAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMDAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMCAwIDAnIH19XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiAxMjAwIH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PjwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHdvb2QyIGZyb20gXCIuLi9pbWFnZXMvd29vZDIuanBnXCI7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFN0YXJ0QnV0dG9uIGZyb20gXCIuL1N0YXJ0QnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7d29vZDJ9KWAsXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICByb290TWFyZ2luIDogJy0zNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz4gXHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50ID8gJ1dFTENPTUUhIScgOiAnUmVhZHkgdG8gc3RhcnQ/J31cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudD8gbnVsbCA6ICg8U3RhcnRCdXR0b24vPil9XHJcbiAgICAgICAgICAgIHsvKiAhaXNGaXJzdFJlZiDsnbwg7IucIOuwlOuhnOqwgOq4sCDrsoTtirwg7LaU6rCAICovfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHtCdXR0b24gLCBCb3gsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgUGxheUFycm93U2hhcnAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzAuNXZoJ1xyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzAuNXB4IDAuNXB4IDFweCAjMDAwMDAwNWMnLFxyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL21hbmFnZW1lbnQnIHN0eWxlPXt7dGV4dERlY29yYXRpb246J25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdvdXRsaW5lZCcgc3RhcnRJY29uPXs8UGxheUFycm93U2hhcnAgY29sb3I9J3NlY29uZGFyeScgc3R5bGU9e3tmb250U2l6ZSA6IDMwfX0vPn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURURcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIHtg7KeA6riIIOuwlOuhnCDsi5zsnpHtlbTrs7TshLjsmpQuYH1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFycm93LmQwODMyOGY2MmQxOWI2NmY4ZWE4ZDZkMDA2NzI0YzhiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYW5hZ2VtZW50LWJhY2tncm91bmQuYTAwOGRlODEzOTU4MWIwZGFiZjE4MzJlZDFjOWM0NmUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndvb2QyLmRjM2RmZWIxOGVkZjU0NmY3NzE4Y2JkN2Q1YzA5NzQxLmpwZ1wiOyIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICAoPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8QXBwLz5cclxuICAgIDwvQ29va2llc1Byb3ZpZGVyPilcclxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmFkZSwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBjb250YWluZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfSxcclxuICAgIGJ1dHRvbkNvbnRhaW5lciA6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzAuNXB4IDAuNXB4IDFweCAjMDAwMDAwNWMnLFxyXG4gICAgICAgIG1hcmdpbiA6ICcwIDF2dyAxLjd2aCcsXHJcbiAgICAgICAgY29sb3I6ICcjNmE3NDhjJyxcclxuICAgIH0sXHJcbn0pKTtcclxuY29uc3QgZGVmYXVsdERhdGEgPSB7XHJcbiAgICBjb2x1bW5zIDogW1xyXG4gICAgICB7IHRpdGxlOiAnTmFtZScsIGZpZWxkOiAnbmFtZScgLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHsgdGl0bGU6ICdTdXJuYW1lJywgZmllbGQ6ICdzdXJuYW1lJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnQmlydGggWWVhcicsIGZpZWxkOiAnYmlydGhZZWFyJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnUGhvbmUnICwgZmllbGQ6J3Bob25lJywgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgICAgIGZpZWxkOiAnZ2VuZGVyJyxcclxuICAgICAgfSxcclxuICAgICAgeyB0aXRsZTogJ01lbW8nICwgZmllbGQ6J21lbW8nfVxyXG4gICAgXSxcclxuICAgIGRhdGEgOiBbXHJcbiAgICAgIHsgbmFtZTogJ01laG1ldCcsIHN1cm5hbWU6ICdCYXJhbicsIGJpcnRoWWVhcjogMTk4MywgcGhvbmU6JzAxMDQ2NTA5OTk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0FkYW0nLCBzdXJuYW1lOiAnQWRhbScsIGJpcnRoWWVhcjogMTk4NCwgcGhvbmU6JzAxMDQ2NTA5Nzk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ01laG1ldCcsIHN1cm5hbWU6ICdBdG9tJywgYmlydGhZZWFyOiAxOTg1LCBwaG9uZTonMDEwNDY1MDk2OTUnICxnZW5kZXI6IDEgLCBtZW1vOicnfSxcclxuICAgICAgeyBuYW1lOiAnbXVsJywgc3VybmFtZTogJ0tvbmduYScsIGJpcnRoWWVhcjogMTk4NiwgcGhvbmU6JzAxMDQ2NTA5MTk1JyAsZ2VuZGVyOiAxICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0phY2snLCBzdXJuYW1lOiAnSmFjaycsIGJpcnRoWWVhcjogMTk4NywgcGhvbmU6JzAxMDQ2NTA5Mjk1JyAsZ2VuZGVyOiAyICwgbWVtbzonJ30sXHJcbiAgICAgIHsgbmFtZTogJ0JvYicsIHN1cm5hbWU6ICdCb2InLCBiaXJ0aFllYXI6IDE5ODgsIHBob25lOicwMTA0NjUwOTM5NScgLGdlbmRlcjogMiAsIG1lbW86Jyd9LFxyXG4gICAgXVxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmYXVsdFBhZ2UgKHtzdGF0ZSAsIHNldFN0YXRlLCBtYXRjaH0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmYWRlMiwgc2V0RmFkZTJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlT25ERU1PQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlICwgY29sdW1ucyA6IGRlZmF1bHREYXRhLmNvbHVtbnMgLCBkYXRhIDogZGVmYXVsdERhdGEuZGF0YSwgZGVmYXVsdFBhZ2UgOiAhc3RhdGUuZGVmYXVsdFBhZ2V9KTtcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZXRGYWRlMih0cnVlKSAsIDE1MDApO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogODAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0ndGV4dFNlY29uZGFyeSc+XHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VtZW50IFRhYmxlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBndXR0ZXJCb3R0b20+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICDshpDsib3qsowg7IKs7Jqp7ZWgIOyeiOuKlCDrjbDsnbTthLAg7YWM7J2067iU7J6F64uI64ukLlxyXG4gICAgICAgICAgICAgICAg7LKY7J2M7J20652866m0IERFTU8g66W8IOyytO2XmO2VtOuztOqxsOuCmCDrsJTroZwg7Iuc7J6R7ZW067O8IOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8RmFkZSBpbj17ZmFkZTJ9IHRpbWVvdXQ9e3tlbnRlciA6IDMwMDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25ERU1PQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVNFIERFTU8gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURUQgUklHSFQgQVdBWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgXHJcbiAgICBCb3ggLFBhcGVyLCBtYWtlU3R5bGVzLCBGYWRlLCBUZXh0RmllbGQsIFRvb2x0aXAsIFR5cG9ncmFwaHksIENoZWNrYm94XHJcbn1cclxuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGdcIjtcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQgeyBzYXZlSGVhZGVycyB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHsgZ2V0TWFuYWdlbWVudFRhYmxlIH0gZnJvbSAnLi4vdXRpbC9NYW5hZ2VtZW50QVBJJztcclxuaW1wb3J0IHVzZU9uRmlyc3RSZW5kZXIgZnJvbSAnLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTIwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnc3BhY2UtYXJvdW5kJyxcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnMTB2aCcsXHJcbiAgICB9LFxyXG4gICAgZm9ybVJvb3QgOiB7XHJcbiAgICAgICAgJyYgPiAqJzoge1xyXG4gICAgICAgICAgICBtYXJnaW46ICcwLjV2aCAxdncnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzYwY2gnLFxyXG4gICAgICAgICAgICBtaW5XaWR0aCA6ICc0MGNoJyxcclxuICAgICAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnMTB2aCcsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZCA6IGBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb250YWluJyxcclxuICAgICAgICBtYXJnaW5MZWZ0IDogJzN2dycsXHJcbiAgICAgICAgdHJhbnNmb3JtIDogJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb24gOiB7XHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcidcclxuICAgIH1cclxufSkpXHJcbmNvbnN0IGRlZmF1bHRIZWFkZXIgPSB7XHJcbiAgICBcImhlYWRlcjBcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIxXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyMlwiIDogJycsXHJcbiAgICBcImhlYWRlcjNcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI0XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNVwiIDogJycsXHJcbiAgICBcImhlYWRlcjZcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI3XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOFwiIDogJycsXHJcbiAgICBcImhlYWRlcjlcIiA6ICcnLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcnMgKHtpc0xvYWRpbmd9KSB7XHJcbiAgICAvLyBzdHlsZSwgY29va2llXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gUmVhY3QudXNlQ29udGV4dChQcm9ncmVzc0NvbnRleHQpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gICAgLy8gc3RhdGVzXHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgICBjb25zdCBbcmVzdWx0U25hY2sgLCBzZXRSZXN1bHRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZSwgY29udGVudCA6ICcnfSk7XHJcbiAgICBjb25zdCBbZGF0YSAsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGhlYWRlcnMgOiBkZWZhdWx0SGVhZGVyLFxyXG4gICAgICAgIGdyb3VwaW5ncyA6IEFycmF5KDEwKS5maWxsKGZhbHNlKSxcclxuICAgIH0pXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGRhdGFSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgICAgZ2V0TWFuYWdlbWVudFRhYmxlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSA6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5nTGVuZ3RoID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncy5sZW5ndGggOiAwIDogMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzID8gWy4uLnJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzXSA6IFtdIDogW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIC0gZ3JvdXBpbmdMZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cGluZ3MucHVzaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzID8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzIDoge30gOiB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnNMZW5ndGggPSBPYmplY3QudmFsdWVzKGhlYWRlcnMpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBoZWFkZXJzTGVuZ3RoOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbYGhlYWRlciR7aX1gXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge2hlYWRlcnMsZ3JvdXBpbmdzfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtoZWFkZXJzLCBncm91cGluZ3N9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7ICAvLyB1bmF1dGhvcml6ZWRcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAzNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQgOiBgUGxlYXNlIGxvZyBpbiBhZ2Fpbi5gfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBlcnJvciAoY29kZSA6ICR7cmVzcG9uc2Uuc3RhdHVzfSlgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAzNTAwKTtcclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICApXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyb3VwaW5ncyA6IFtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuZ3JvdXBpbmdzXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxbZGF0YS5oZWFkZXJzLCBkYXRhLmdyb3VwaW5nc10pO1xyXG5cclxuICAgIC8vIGVmZmVjdHNcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+eyBcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVN1Ym1pdChkYXRhUmVmLmN1cnJlbnQuaGVhZGVycywgZGF0YVJlZi5jdXJyZW50Lmdyb3VwaW5ncywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGhhbmRsZVByb2dyZXNzKHJlc3VsdCA9PT0gJ2Vycm9yJyA/ICdlcnJvcicgOiAnc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyBldmVudHNcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgndXNlcicpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoaGVhZGVycywgZ3JvdXBpbmdzLCBpc0F1dG9TYXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKGhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpKSB7IC8vIDE16riA7J6QIOydtOyDgSDsoJztlZwg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGhlYWRlcnMpLmZpbHRlcih2PT52KS5sZW5ndGggPT09IDApIHsgICAgIC8vIOu5hOyWtOyeiOydhCDqsr3smrAg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZUhlYWRlcnMoaGVhZGVycyxncm91cGluZ3MpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzQXV0b1NhdmUpIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSwgY29udGVudCA6IHJlc3BvbnNlLnJlc3VsdH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDIwMDApO1xyXG4gICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3Blbjp0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50OidQbGVhc2UgbG9nIGluIGFnYWluLid9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBbYGhlYWRlciR7aW5kZXh9YF0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUdyb3VwaW5ncyA9IChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgZ3JvdXBpbmdzIDogZGF0YS5ncm91cGluZ3MubWFwKCh2LGkpPT4gaT09PWluZGV4PyBlLnRhcmdldC5jaGVja2VkIDogdil9KTtcclxuICAgIH1cclxuICAgIC8vIGNvbXBvbmVudFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXIgOiAxNTAwfX0+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17NH0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVJvb3R9IGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nZGl2Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGNvbG9yPSd0ZXh0UHJpbWFyeScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIEVkaXQgRm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbG9yPXtPYmplY3QudmFsdWVzKGRhdGEuaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkgPyAnYmx1ZScgOiAncmVkJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29sb3I9J2luaXRpYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdCBtb3JlIHRoYW4gMTUgY2hhcmFjdGVycyBhbmQgd2l0aG91dCBzcGFjZXMgOikgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5oZWFkZXJzKS5tYXAoKGhlYWRlcixpbmRleCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2luZGV4PT09MD8gdHJ1ZTpmYWxzZX1cclxuICAgICAgICAgICAgICAgIGlkPXtgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtgaGVhZGVyLSR7aW5kZXgrMX1gfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaGVhZGVyc1tgaGVhZGVyJHtpbmRleH1gXX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlSW5wdXRDaGFuZ2UoZSxpbmRleCl9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17ZGF0YS5oZWFkZXJzW2BoZWFkZXIke2luZGV4fWBdLmxlbmd0aCA+IDE1ID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiWW91IGNhbiBzZXQgZ3JvdXBpbmcgc2V0dGluZ3MuXHJcbldoZW4geW91IHNldCB1cCBncm91cGluZywgeW91IGNhbiBtYW5hZ2UgdGFibGVzIGJ5IGdyb3VwLlxyXG5EbyBub3QgdXNlIHdoZW4gdW5pcXVlIHZhbHVlcyBlLmcuKSBOYW1lLCBhZGRyZXNzLCBldGMuXCJcclxuICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J3JpZ2h0JyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezIwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RhdGEuZ3JvdXBpbmdzW2luZGV4XX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlR3JvdXBpbmdzKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4PT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+RW5hYmxlIEdyb3VwaW5nIT88L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTVUJNSVRcIiBhcmlhLWxhYmVsPSdzdWJtaXQnIHBsYWNlbWVudD0ndG9wJyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezQwMH0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbk1vdXNlT3Zlcj17KGUpPT5lLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlU3VibWl0KGRhdGEuaGVhZGVycyAsIGRhdGEuZ3JvdXBpbmdzKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e2BOb3QgbW9yZSB0aGFuIDE1IGNoYXJhY3RlcnMgYW5kIHdpdGhvdXQgc3BhY2VzLFxyXG4gICAgICAgIEhlYWRlciBtdXN0IG5vdCBiZSBlbXB0eS4gOihgfSBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17cmVzdWx0U25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFJlc3VsdFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e3Jlc3VsdFNuYWNrLmNvbnRlbnR9IHN0YXR1cz17cmVzdWx0U25hY2suc3RhdHVzPT09J2Vycm9yJz8gJ2Vycm9yJyA6ICdzdWNjZXNzJ30vPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJztcclxuaW1wb3J0IE1hbnVhbERpYWxvZyBmcm9tIFwiLi9NYW51YWxEaWFsb2dcIjtcclxuaW1wb3J0IHsgb3B0aW9ucyxsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9UYWJsZU9wdGlvbnNcIjtcclxuaW1wb3J0IHVzZU9uRmlyc3RSZW5kZXIgZnJvbSAnLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyJztcclxuaW1wb3J0IHsgZ2V0TWFuYWdlbWVudFRhYmxlIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgRGVmYXVsdFBhZ2UgZnJvbSAnLi9EZWZhdWx0UGFnZSc7XHJcbmltcG9ydCBwYXJzZURhdGEgZnJvbSAnLi4vdXRpbC9wYXJzZURhdGEnO1xyXG5pbXBvcnQgU2F2ZUJ1dHRvbiBmcm9tICcuL1NhdmVCdXR0b24nO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4uL2N1c3RvbUhvb2svU25hY2tCYXInO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbi8vIHVzZUVmZmVjdOuhnCBkYXRhLCBjb2x1bW5zIOqwgCDrs4Dqsr3rkKAg65WM66eI64ukIOyEnOuyhOyXkCDsoIDsnqUg7ZuEIOqwseyLoFxyXG4vLyAuL3V0aWwg6rK966Gc7JeQIOuhnOyngSDsnpHshLFcclxuLy8g7Ya17Iug7JeQIOuMgO2VnCB0ZXN0Y29kZeyekeyEsVxyXG4vLyBjb2x1bW5z7JmAIGRhdGHsnZgg6rCBIOqwkuuTpOyXkCDrjIDtlZwg66y06rKw7ISxIOyytO2BrFxyXG4vLyBwcm9wc1R5cGUg7J6R7ISxXHJcbi8vIFNpZGVNZW51TGlzdCA9PiBMb2dpbuycvOuhnCDrs4Dqsr0sIOu5hOuhnOq3uOyduCDsi5wgTE9HSU7snLzroZwg67O07J28IOqygywg66Gc6re47J247IucIE1ZIE1FTlXroZwg67O06riwXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlbWVudFRhYmxlKHtpc0xvYWRpbmd9KSB7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gUmVhY3QudXNlQ29udGV4dChQcm9ncmVzc0NvbnRleHQpO1xyXG5cclxuICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgLy8gc3RhdGVzXHJcbiAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3NhdmVkU25hY2sgLCBzZXRTYXZlZFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2Vycm9yU25hY2sgLCBzZXRFcnJvclNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHsgIC8vIOy1nOy0iCBBUEnroZwg67Cb7JWE7Jik64qUIOuPmeyeke2VhOyalFxyXG4gICAgZGVmYXVsdFBhZ2UgOiB0cnVlLFxyXG4gICAgaGFzVGFibGUgOiBmYWxzZSxcclxuICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgZGF0YTogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgdGFibGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3RydWN0b3JcclxuICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICBpZiAoY29va2llcy51c2VyKSB7ICAgLy8g7L+g7YKk7JeQIO2GoO2BsOydtCDsnojsnYQg6rK97JqwIO2FjOydtOu4lCBmZXRjaCBBUEnsi6TtlolcclxuICAgICAgZ2V0TWFuYWdlbWVudFRhYmxlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1cyA6ICR7cmVzcG9uc2Uuc3RhdHVzfSAsIGRhdGEgOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpfWApO1xyXG4gICAgICAgICAgLy8g7Jyg7KCAIO2ZleyduOuQkOqzoCDthYzsnbTruJTrj4Qg67mE7Ja07J6I7KeAIOyViuydhCDqsr3smrBcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXM9PT0yMDApIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3NldFNuYWNrKHtvcGVuOnRydWV9KX0sNDAwKTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGNvbHVtbnMgOiBwYXJzZURhdGEocmVzcG9uc2UuZGF0YS5oZWFkZXJzICwgcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MpLFxyXG4gICAgICAgICAgICAgIGRhdGEgOiByZXNwb25zZS5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFBhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgICBoYXNUYWJsZSA6IHRydWV9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtzZXREaWFsb2coe29wZW4gOiBmYWxzZX0pO307XHJcbiAgY29uc3QgaGFuZGxlT25TYXZlID0gKGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgLy8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciDsnZggcmVm7JeQ7IScIOyLoOuisOuPhOyeiOuKlCDrjbDsnbTthLAg7LC47KGwXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICBncm91cGluZ3MucHVzaCh2Lmdyb3VwaW5nKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICB9LHt9KVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgIGNvbnN0IHt0YWJsZURhdGEsIC4uLnJlc3R9ID0gdjtcclxuICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAgcmVzdWx0IDogICAvLyDroZzqt7hcclxuICAgICAgLy8gICAke0pTT04uc3RyaW5naWZ5KGRhdGEpfVxyXG4gICAgICAvLyAgICR7Z3JvdXBpbmdzfVxyXG4gICAgICAvLyAgICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9XHJcbiAgICAgIC8vIGApXHJcbiAgICAgIHNhdmVEYXRhKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSk7XHJcbiAgICAgIGlmKCFpc0F1dG9TYXZlKSBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gZWZmZWN0c1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7ICAgLy8gd2luZG93IOuNlOu4lO2BtOumrSDsnbTrsqTtirgg7LaU6rCALCDrj4Tsm4Drp5Agb3BlblxyXG4gICAgY29uc3Qgb25kYkNsaWNrID0gKCkgPT4gc2V0RGlhbG9nKHtvcGVuIDogIWRpYWxvZy5vcGVufSk7XHJcbiAgICBjb25zdCBvbktleWRvd24gPSAoZSkgPT4geyAgIC8vIGN0cmwgKyBz66GcIOyggOyepSBldmVudFxyXG4gICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKFwiTWFjXCIpID8gZS5tZXRhS2V5IDogZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlT25TYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgICAvLyDstIjquLDsoJHqt7zsnZgg6rK97JqwIOuNsOydtO2EsOqwgCDsl4bslrQg7JeQ65+sIOuwnOyDne2VoCDsiJgg7J6I7Ja0IOyCvO2VreyLneycvOuhnCDtjJDri6gg7ZuEIOyWuOuniOyatO2KuOyLnOydmCBmZXRjaEFQSeyLpO2WiVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZU9uU2F2ZSh0cnVlKSA6IG51bGwgOiBudWxsO1xyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZVByb2dyZXNzKCdzdWNjZXNzJykgOiBudWxsIDogbnVsbDtcclxuICB9O1xyXG59LCBbXSk7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbiAgY29uc3QgTWFyZ2luID0gKCkgPT4gKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PjwvQm94Pik7ICAvLyDsl6zrsLFcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgIHtcclxuICAgIHN0YXRlLmRlZmF1bHRQYWdlID9cclxuICAgICAgKDxEZWZhdWx0UGFnZSBzdGF0ZT17c3RhdGV9IHNldFN0YXRlPXtzZXRTdGF0ZX0vPilcclxuICAgIDogXHJcbiAgICAoPEJveD5cclxuICAgICAgICA8TWFudWFsRGlhbG9nIG9wZW49e2RpYWxvZy5vcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0vPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICB0YWJsZVJlZj17dGFibGVSZWZ9XHJcbiAgICAgIHRpdGxlPXtcclxuICAgICAgPFNhdmVCdXR0b24gc2V0U2F2ZWRTbmFjaz17c2V0U2F2ZWRTbmFja30gXHJcbiAgICAgIC8vIOuniOyatO2KuCDsnbTtm4Tsl5Ag7KCR6re87ZWE7JqUXHJcbiAgICAgIGRhdGFNYW5hZ2VyPXt0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA6IHt9fS8+XHJcbiAgICB9XHJcbiAgICAgIGNvbHVtbnM9e3N0YXRlLmNvbHVtbnN9XHJcbiAgICAgIGRhdGE9e3N0YXRlLmRhdGF9XHJcbiAgICAgIGxvY2FsaXphdGlvbj17bG9jYWxpemF0aW9ufSAvLyDroZzsu6zrnbzsnbTspohcclxuICAgICAgb3B0aW9ucz17b3B0aW9uc30gLy8g64K067O064K06riwLCDqt7jro6jtlZFcclxuICAgICAgYWN0aW9ucz17Wy8vIOupgO2LsCDshYDroInshZgg7J6R7JeFXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b29sdGlwIDogJ1JlbW92ZSBBbGwgU2VsZWN0ZWQgVXNlcnMnLFxyXG4gICAgICAgICAgICBpY29uIDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgIG9uQ2xpY2sgOiAoZSAsIGRlbGV0aW9ucykgPT4geyAgLy8g7ISg7YOd7ZWcIOyytO2BrOuwleyKpOyXkCDrjIDtlbQg66qo65GQIOyCreygnCDsp4TtlolcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4uc3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkZWxldGlvbnMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoZGF0YS5pbmRleE9mKHYpLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldkRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2RGF0YSAsIGRhdGF9O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF19IFxyXG4gICAgICBlZGl0YWJsZT17e1xyXG4gICAgICAgIG9uUm93QWRkOiAobmV3RGF0YSkgPT4gIC8vIOy2lOqwgFxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBvblJvd1VwZGF0ZTogKG5ld0RhdGEsIG9sZERhdGEpID0+ICAvLyDsiJjsoJVcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvbGREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhW2RhdGEuaW5kZXhPZihvbGREYXRhKV0gPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSduZWVkIHNvbWUgaGVscD8gPyBkb3VibGUtY2xpY2sgYW55IHNwYWNlICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c2F2ZWRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U2F2ZWRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J1NBVkVEICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17ZXJyb3JTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0RXJyb3JTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J0VSUk9SICEnIHN0YXR1cz1cImVycm9yXCIvPlxyXG4gICAgPC9Cb3g+XHJcbiAgICApfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59IiwiXHJcbmltcG9ydCB7RGlhbG9nLFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBMaXN0LFxyXG4gICAgTGlzdEl0ZW0sXHJcbiAgICBMaXN0SXRlbVRleHQsXHJcbiAgICBCb3gsXHJcbiAgICBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgICBpY29uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzN2dydcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFudWFsRGlhbG9nIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7b3Blbiwgb25DbG9zZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGljb25zID0gW1xyXG4gICAgICAgIHtpY29uIDogJ2FkZF9ib3gnICwgZGVzY3JpcHRpb24gOiAnW0FkZF0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnW0VkaXRdIHJlY29yZHMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2VhcmNoJyAsIGRlc2NyaXB0aW9uIDogJ1R5cGUgZG93biB3b3JkcyB0byBbc2VhcmNoXS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzYXZlX2FsdCcgLCBkZXNjcmlwdGlvbiA6ICdbRG93bmxvYWRdIGZpbGVzIGluIENWUyBmb3JtYXQuJ30sXHJcbiAgICAgICAge2ljb24gOiAndmlld193ZWVrJyAsIGRlc2NyaXB0aW9uIDogJ1tTZWxlY3RdIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW2RlbGV0ZV0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjaGVja19ib3gnICwgZGVzY3JpcHRpb24gOiAnIOKRoCBTZWxlY3QgdGhlIGNoZWNrYm94IG9uIHRoZSByb3cuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZmFjdF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENoZWNrIHRoZSBudW1iZXIgb2YgdGhlIHJvd3Mgc2VsZWN0ZWQuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZGVsZXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaIgQ2xpY2sgdGhlIEJpbiBpY29uIG9uIHRoZSByaWdodCBhYm92ZS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdwbGF5bGlzdF9hZGRfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBbRWRpdF0gaGVhZGVycy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdtZW51JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgT3BlbiB0aGUgTVlQQUdFJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2xpY2sgdGhlIFBlbmNpbCBpY29uJ30sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgb25DbG9zZT17b25DbG9zZX0gb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPiBCQVNJQyBNQU5VQUwgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbnMubWFwKChpY29uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17YCR7aWNvbn0gKyAke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17YG1hdGVyaWFsLWljb25zICR7Y2xhc3Nlcy5pY29ufWB9IHN0eWxlPXt7d2lkdGg6JzN2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aWNvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICA8L0RpYWxvZz5cclxuICAgIClcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtzZXRTYXZlZFNuYWNrICwgZGF0YU1hbmFnZXJ9KSB7XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrICgpIHtcclxuICAgICAgICAgIC8vIFNBVkUgRVZFTlQgdXRpbCA+IE1hbmFnZW1lbnRBUEkuc2F2ZURhdGEg66eM65Ok7Ja07IScIOy9nO2VmOq4sFxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICB9LHt9KTtcclxuICAgICAgICAgIGRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgIHJlc3VsdCA6IFxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShkYXRhKX1cclxuICAgICAgICAgICR7Z3JvdXBpbmdzfVxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgICAgICBgKVxyXG4gICAgICAgIHNhdmVEYXRhKGhlYWRlcnMsZ3JvdXBpbmdzLGRhdGEpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8VG9vbHRpcCB0aXRsZT0nQ2xpY2sgdG8gU0FWRSAoIEN0cmwgKyBTICknPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBcclxuICAgICAgICBvbkNsaWNrPXsoKT0+b25DbGljaygpfT5cclxuICAgICAgICAgIFNBVkVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtBZGRCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbi8vIERBVEEgVEFCTEUgT1BUSU9OU1xyXG5cclxuIGV4cG9ydCBjb25zdCBvcHRpb25zPSB7XHJcbiAgICBleHBvcnRCdXR0b246IHRydWUsXHJcbiAgICBncm91cGluZzp0cnVlLFxyXG4gICAgc2VsZWN0aW9uOnRydWUsXHJcbiAgICBoZWFkZXJTdHlsZTp7IFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uc0NvbHVtbkluZGV4Oi0xLCAgLy8g7JWh7IWYIOyVhOydtOy9mOychOy5mFxyXG4gICAgY29sdW1uc0J1dHRvbiA6IHRydWUsIFxyXG4gICAgZGVib3VuY2VJbnRlcnZhbCA6IDE2MCwgLy8g66Gc65Sp7Iuc6rCEXHJcbiAgICBwYWdlU2l6ZSA6IDE1LCAgICAgICAgICAvLyDtjpjsnbTsp4DsgqzsnbTspohcclxuICAgIHBhZ2VTaXplT3B0aW9ucyA6IFs1LCAxNSwgMzAsIDUwLCAxMDBdLCAvLyDtjpjsnbTspogg7IKs7J207KaIIOyiheulmFxyXG4gIH1cclxuIGV4cG9ydCBjb25zdCBsb2NhbGl6YXRpb24gPSB7XHJcbiAgICBwYWdpbmF0aW9uIDogeyBsYWJlbERpc3BsYXllZFJvd3MgOiAne2NvdW50fSByb3dzIHwge2Zyb219LXt0b30nICwgfSxcclxuICAgIHRvb2xiYXI6IHtuUm93c1NlbGVjdGVkOiAnezB9IHJvdyhzKSBzZWxlY3RlZCd9LFxyXG4gICAgaGVhZGVyOiB7YWN0aW9uczogJ0VkaXQnfSxcclxuICAgIGJvZHk6IHtlbXB0eURhdGFTb3VyY2VNZXNzYWdlOiBcclxuICAgICAgICAoXHJcbiAgICAgICAgPEJveCBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX1cclxuICAgICAgICBlbmRJY29uPXs8QWRkQm94Lz59PlxyXG4gICAgICAgICAge2BObyBSZWNvcmQgdG8gZGlzcGxheSxcclxuICAgICAgICAgIENsaWNrIHRoZSBCdXR0b24gYH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtgb24gdGhlIHJpZ2h0LXRvcGB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgfVxyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtUb29sYmFyLCBEcmF3ZXIgLCBCdXR0b24gLCBHcmlkLFxyXG4gICAgIERpdmlkZXIsIEFwcEJhciBhcyBBcHBiYXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEhpZGVPblNjaHJvbGwgZnJvbSBcIi4uL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbFwiO1xyXG5pbXBvcnQgU2lkZU1lbnVMaXN0IGZyb20gXCIuL1NpZGVNZW51TGlzdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IFNpZ25PdXRCdXR0b24gZnJvbSBcIi4vU2lnbk91dEJ1dHRvblwiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6MTgsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbToxOCxcclxuICAgIH0sXHJcbiAgICBsZWZ0IDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OjMwLFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgY2VudGVyIDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OjQ1LFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtZW5kJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgcGFkZGluZzpgMCAke3RoZW1lLnNwYWNpbmcoMyl9YFxyXG4gICAgfSxcclxuICB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdiAocHJvcHMpIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIG1lbnUgOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvciwgb3BlbikgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmxhZyA9IG9wZW4/IHN0YXRlW2FuY2hvcl0gPyBmYWxzZSA6IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogZmxhZyB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwcm9maWxlID0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBhbmNob3IgPSBwcm9maWxlLm5hbWU/ICdNWVBBR0UnIDonTE9HSU4nO1xyXG4gICAgY29uc3QgbGlua3MgPSBbJ2JvYXJkJywnbWFuYWdlbWVudCddO1xyXG4gICAgY29uc3QgTG9nb3V0QnRuID0gcHJvZmlsZS5uYW1lPyA8U2lnbk91dEJ1dHRvbi8+IDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGlkZU9uU2Nocm9sbCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxBcHBiYXIgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Ym94U2hhZG93Oidub25lJ319PlxyXG4gICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiBIb21lIDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7bGlua31gfSBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0ga2V5PXtsaW5rfT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4ge2xpbmt9IDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+PHNwYW4+PC9zcGFuPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FuY2hvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7TG9nb3V0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXIgb3Blbj17c3RhdGVbYW5jaG9yXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSB2YXJpYW50PSdwZXJzaXN0ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1NpZGVNZW51TGlzdCggey4uLnByb3BzLCBhbmNob3IgLHRvZ2dsZURyYXdlciAsIHByb2ZpbGV9ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwYmFyPlxyXG4gICAgICAgIDwvSGlkZU9uU2Nocm9sbD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUF2YXRhciAsIERpdmlkZXIsIExpc3RJdGVtLCBUeXBvZ3JhcGh5ICwgQXZhdGFyLCBJY29uQnV0dG9uICxcclxuICAgICBNb2RhbCwgQm94LCBCdXR0b24sXHJcbiAgICAgUGFwZXIsXHJcbiAgICAgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi9TaWduSW5CdXR0b24nO1xyXG5pbXBvcnQgZ29vZ2xlU2lnbmluSW1hZ2UgZnJvbSAnLi4vYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyc7XHJcbmltcG9ydCB7cmVkaXJlY3RHb29nbGVMb2dpbn0gZnJvbSAnLi4vdXRpbC9Mb2dpbkFQSSc7XHJcbmltcG9ydCB7RWRpdCwgSW5mbywgRGVsZXRlRm9yZXZlciwgV2FybmluZ30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQge0dsb2JhbFNuYWNrYmFyQ29udGV4dH0gZnJvbSAnLi4vYXBwJ1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBsaXN0IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzIzdncnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ3N0YXJ0JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbSA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbVRleHQgOiB7XHJcbiAgICAgICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIGxhcmdlQXZhdGFyIDoge1xyXG4gICAgICAgIHdpZHRoIDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICBoZWlnaHQgOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgfSxcclxuICAgIGlubGluZSA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2lubGluZSdcclxuICAgIH0sXHJcbiAgICBsaXN0VGV4dCA6IHtcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBtb2RhbCA6IHtcclxuICAgICAgICB0b3AgOiAnNTAlJyxcclxuICAgICAgICBsZWZ0IDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsIC01MCUpYCxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgIG1pbldpZHRoIDogNDAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsUm93Qm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbW9kYWxDb2xCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ3N0YXJ0J1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51TGlzdCAoe2FuY2hvciAsIHRvZ2dsZURyYXdlciwgcHJvZmlsZX0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGhhbmRsZUdsb2JhbFNuYWNrYmFyID0gUmVhY3QudXNlQ29udGV4dChHbG9iYWxTbmFja2JhckNvbnRleHQpO1xyXG4gICAgY29uc3QgW2VtYWlsSW5wdXQsIHNldEVtYWlsSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DbGlja0xvZ2luICgpIHtcclxuICAgICAgICByZWRpcmVjdEdvb2dsZUxvZ2luKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrTW9kYWwgPSAoKSA9PiBzZXRNb2RhbCh0cnVlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xvc2VNb2RhbCA9ICgpID0+IHNldE1vZGFsKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHNldEVtYWlsSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVtYWlsSW5wdXQgPT09IHByb2ZpbGUuZW1haWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ydvOy5mCcpO1xyXG4gICAgICAgICAgICBzYXZlRGF0YSh7fSxbXSxbe31dKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlR2xvYmFsU25hY2tiYXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBkYXRhLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSwxNTAwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVHbG9iYWxTbmFja2Jhcih7XHJcbiAgICAgICAgICAgICAgICBvcGVuOnRydWUsIFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OidlcnJvcidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IHByb2ZpbGU/IHByb2ZpbGUubmFtZT8gdHJ1ZSA6IGZhbHNlIDogZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpc0xvZ2dlZD8gJ1BST0ZJTEUnIDogJ0xPR0lOIE1FTlUnfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG5cclxuICAgICAgICAgICAge2lzTG9nZ2VkPyBcclxuXHJcbiAgICAgICAgICAgICg8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3Byb2ZpbGUucGljdHVyZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlQXZhdGFyfSBhbHQ9e3Byb2ZpbGUubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9maWxlLm5hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGV4dH0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nRU1BSUwgOiAnIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0nc3BhbicgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvIGNvbG9yPSdwcmltYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdFRElUIEhFQURFUlMnLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2hlYWRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IGNvbG9yPSdwcmltYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmcgY29sb3I9J3NlY29uZGFyeScgc3R5bGU9e3ttYXJnaW5SaWdodDonMXZ3J319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHNlY29uZGFyeT0nUkVNT1ZFIEFMTCBEQVRBJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nZW5kJyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcicgb25DbGljaz17aGFuZGxlT25DbGlja01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIOuqqOuLrCAqL31cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbj17bW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVPbkNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtY29udGVudHNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFJvd0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdzdGFydCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVyIGNvbG9yPSdzZWNvbmRhcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC10aXRsZVwiIHZhcmlhbnQ9J2J1dHRvbicgZGlzcGxheT0nYmxvY2snIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXV0aW9uOiBQZXJtYW5lbnRseSBkZWxldGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbENvbEJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLWNvbnRlbnRzXCIgdmFyaWFudD0nYm9keTEnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YEFsbCBkYXRhIHdpbGwgYmUgZGVsZXRlZCBhbmQgY2Fubm90IGJlIHJlY292ZXJlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgdGhlIGVtYWlsIGNvcnJlY3RseSB0byBjb250aW51ZS5gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbic+e3Byb2ZpbGUuZW1haWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxSb3dCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD0nRS1NQUlMJyBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgKDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTG9naW59PlxyXG4gICAgICAgICAgICAgICAgPFNpZ25JbkJ1dHRvbiBzaWduSW49e2dvb2dsZVNpZ25pbkltYWdlfS8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+KX1cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluQnV0dG9uIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7c2lnbklufSA9IHByb3BzOyAvLyDsnbTrr7jsp4BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3NpZ25Jbn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+PC9pbWc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwJztcclxuaW1wb3J0IHsgTGlzdEl0ZW0gLCBJY29uQnV0dG9uLCBUb29sdGlwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxvZ291dCA6IHtcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAwLFxyXG4gICAgICAgIHdpZHRoIDogJ2F1dG8nLFxyXG4gICAgfVxyXG59KSlcclxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBmb250V2VpZ2h0Oidib2xkJ1xyXG4gICAgfSxcclxuICB9KSkoVG9vbHRpcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgndXNlcicpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT0nTG9nLW91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3twYWRkaW5nOjR9fSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhpdFRvQXBwSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+ICAgIFxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSBcIi4vc2VydmVyVVJMXCI7XHJcblxyXG4vLyBHb29nbGUgT3BlbklEIENvbm5lY3Qg7J207Jqp7ZWY6riwXHJcbi8vIOywuOqzoCDquLDsiKDruJTroZzqt7ggOiBodHRwczovL3d3dy5kYWxlc2VvLmNvbS9nb29nbGUtb2lkYy9cclxuXHJcbi8vIFVSTCBleHBvcnRcclxuLy8gc2V2ZXLsl5DshJwg67Cb7J2AIHVybOuhnCDrpqzri6TsnbTroIntirhcclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0R29vZ2xlTG9naW4gPSAoKSA9PiBheGlvcy5nZXQoYCR7c2VydmVyVVJMfS9sb2dpbmApLnRoZW4ocmVzID0+IGxvY2F0aW9uLmFzc2lnbihyZXMuZGF0YSkpO1xyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW5BbmRQcm9maWxlID0gKHRva2VuKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgJHtzZXJ2ZXJVUkx9L2xvZ2luYCwge3Rva2VufSAse1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyA6IHRydWUsXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gJy4vc2VydmVyVVJMJztcclxuXHJcbi8vIO2FjOydtOu4lCDrjbDsnbTthLAg67Cb7JWE7Jik6riwIGNvb2tpZeyXkCDri7TquLQgdG9rZW7sgqzsmqlcclxuZXhwb3J0IGNvbnN0IGdldE1hbmFnZW1lbnRUYWJsZSA9ICAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L21hbmFnZW1lbnRgLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUhlYWRlcnMgPSAoaGVhZGVycywgZ3JvdXBpbmdzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2F2aW5nIGhlYWRlcnMgOiBcclxuICAgIGhlYWRlcnMgOiAke0pTT04uc3RyaW5naWZ5KGhlYWRlcnMpfVxyXG4gICAgZ3JvdXBpbmdzIDogJHtKU09OLnN0cmluZ2lmeShncm91cGluZ3MpfWApO1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9oZWFkZXJzYCwge1xyXG4gICAgICAgIC8vIGRhdGFcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5nc1xyXG4gICAgfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KS50aGVuKHJlcyA9PiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpKSk7ICAgIC8vIOy/oO2CpOyZgCDtlajqu5hcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVEYXRhID0gKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9kYXRhYCwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgZ3JvdXBpbmdzLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpXHJcbiAgICB9KSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoaGVhZGVycyAsIGdyb3VwaW5ncykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBkYXRhIHBhcnNpbmchISEhYClcclxuICAgIHJldHVybiAoT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5maWx0ZXIodj0+dikubWFwKCh2YWx1ZSxpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlIDogdmFsdWUsXHJcbiAgICAgICAgZmllbGQgOiB2YWx1ZSxcclxuICAgICAgICBncm91cGluZyA6IGdyb3VwaW5nc1tpbmRleF1cclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiOyJdLCJzb3VyY2VSb290IjoiIn0=