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
/* harmony import */ var _guestbook_Guestbook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guestbook/Guestbook */ "./src/guestbook/Guestbook.js");
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
/* harmony import */ var _customHook_ErrorFallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customHook/ErrorFallback */ "./src/customHook/ErrorFallback.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_13__);
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

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_9__["useCookies"])(['profile']),
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
        console.log("response data : ".concat(JSON.stringify(data)));
        var name = data.name,
            email = data.email,
            picture = data.picture;
        setCookie("profile", {
          name: name,
          email: email,
          picture: picture
        }, {
          path: "/",
          maxAge: 7200,
          sameSite: 'none'
        }); // maxAge : 2시간
      })["catch"](function (err) {
        throw new Error('Login Failed. Please authorize the use of cookies in your browser.');
      });
    }
  }, [id_token]);
  React.useEffect(function () {
    if (cookies.profile) {
      console.log("cookies.profile : ".concat(JSON.stringify(cookies.profile)));
      setProfile(cookies.profile);
    }
  }, [cookies.profile]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_13__["ErrorBoundary"], {
    FallbackComponent: _customHook_ErrorFallback__WEBPACK_IMPORTED_MODULE_12__["default"],
    onError: function onError(error, componentStack) {
      console.log("error : ".concat(error, "\n                componentStack : ").concat(componentStack));
    },
    onReset: function onReset() {
      return location.replace(location.origin);
    }
  }, /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: profile || {
      name: ''
    }
  }, "          ", /*#__PURE__*/React.createElement(LogoutContext.Provider, {
    value: setProfile
  }, "   ", /*#__PURE__*/React.createElement(ProgressContext.Provider, {
    value: function value(result) {
      return handleBeforeunload(result);
    }
  }, "  ", /*#__PURE__*/React.createElement(GlobalSnackbarContext.Provider, {
    value: setGlobalSnackbar
  }, "  ", /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CssBaseline"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], null, /*#__PURE__*/React.createElement(_nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    exact: true,
    path: "/",
    render: function render() {
      return /*#__PURE__*/React.createElement(_home_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isLoading: isLoading
      });
    }
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/guestbook",
    render: function render() {
      return /*#__PURE__*/React.createElement(_guestbook_Guestbook__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  })), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/",
    render: function render(props) {
      return /*#__PURE__*/React.createElement(_src_footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], props);
    }
  })))))), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: globalSnackbar.open,
    onClose: function onClose() {
      return setGlobalSnackbar({
        open: false
      });
    },
    content: globalSnackbar.result === 'error' ? "Not saved.\n                Reason : Invalid input." : ' SAVED ',
    status: globalSnackbar.result,
    direction: {
      vertical: 'top',
      horizontal: 'right'
    }
  })));
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

/***/ "./src/customHook/ErrorFallback.js":
/*!*****************************************!*\
  !*** ./src/customHook/ErrorFallback.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorFallback; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh'
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80vw',
      // height : '50vh',
      padding: '5vh',
      color: theme.palette.grey[500],
      fontWeight: 'bolder'
    },
    paper2: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: '3vh',
      fontWeight: 'bolder'
    },
    button: {
      marginTop: '5vh',
      fontWeight: 'bolder'
    }
  };
});
function ErrorFallback(_ref) {
  var error = _ref.error,
      componentStack = _ref.componentStack,
      resetErrorBoundary = _ref.resetErrorBoundary;
  var classes = useStyle();

  var _React$useState = React.useState(30),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      second = _React$useState2[0],
      setSecond = _React$useState2[1];

  React.useEffect(function () {
    if (second <= 0) location.replace(location.origin);
    console.log("second :  ".concat(second));
    var interval = setInterval(function () {
      setSecond(second - 1);
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [second]);
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.root
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    className: classes.paper
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h5"
  }, " ", "ERROR : ".concat(error.message), " "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h3"
  }, " ", "Will go back to the HOME", "  "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h2"
  }, " ", "in ".concat(second, " seconds."), "  "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: classes.button,
    variant: "outlined",
    color: "secondary",
    size: "large",
    onClick: resetErrorBoundary
  }, "Return to Home Now"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    className: classes.paper2,
    elevation: 0
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle1"
  }, " ", "Please check below.", "  "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle2"
  }, " ", "1. Login timeout - Login Retention Time: 2 hours", "  "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle2"
  }, " ", "2. Invalid Request", "  "))));
}
ErrorFallback.propTypes = {
  resetErrorBoundary: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function Loading(_ref) {
  var isLoading = _ref.isLoading;
  return /*#__PURE__*/React.createElement(React.Fragment, null, isLoading && /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    style: {
      height: '100vh',
      width: '100vw',
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
Loading.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
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
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomSnackbar; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



function CustomSnackbar(_ref) {
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
}
CustomSnackbar.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  status: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['error', 'success']),
  direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
 // contstructor 훅

function useOnFirstRender(func) {
  var isFirstRef = React.useRef(true);

  if (isFirstRef.current) {
    isFirstRef.current = false;
    func();
  }
}
useOnFirstRender.propTypes = {
  func: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
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
/* harmony import */ var _images_white_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/white-arrow.png */ "./src/images/white-arrow.png");
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/arrow.png */ "./src/images/arrow.png");
/* harmony import */ var _images_management_background_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/management-background.jpg */ "./src/images/management-background.jpg");










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
      background: theme.palette.grey[200],
      textAlign: "center",
      color: 'white'
    },
    arrow: {
      width: '4vw',
      height: '4vw',
      padding: '3vw',
      alignSelf: 'center',
      marginBottom: '2vh',
      marginTop: '2vh',
      backgroundSize: 'contain'
    }
  };
});
function StickyFooter(props) {
  var classes = useStyles();
  var location = props.location;
  console.log("location.pathname? ".concat(location.pathname));

  var scrollToTop = function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  var transition = function transition(e) {
    e.target.style.cursor = 'pointer';
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, location.pathname === '/guestbook' ? null : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.root,
    style: location.pathname === '/' ? {
      background: "linear-gradient(black, #eeeeee)"
    } : {
      backgroundImage: "url(".concat(_images_management_background_jpg__WEBPACK_IMPORTED_MODULE_4__["default"], ")"),
      backgroundSize: 'auto',
      transform: "scaleY(-1)"
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
    title: "Move to Top",
    "aria-label": "move-to-top",
    placement: "top",
    enterDelay: 350,
    leaveDelay: 150
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.arrow,
    style: location.pathname === '/' ? {
      background: "no-repeat center/80% url(".concat(_images_white_arrow_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
    } : {
      background: "no-repeat center/80% url(".concat(_images_arrow_png__WEBPACK_IMPORTED_MODULE_3__["default"], ")"),
      transform: "rotate(180deg)"
    },
    onClick: scrollToTop,
    onMouseOver: function onMouseOver(e) {
      return transition(e);
    }
  }))), /*#__PURE__*/React.createElement("footer", {
    className: classes.footer
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    maxWidth: "sm"
  }, /*#__PURE__*/React.createElement(Copyright, {
    style: {
      fontWeight: 'bolder'
    }
  })))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/guestbook/Guestbook.js":
/*!************************************!*\
  !*** ./src/guestbook/Guestbook.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Guestbook; });
/* harmony import */ var _customHook_Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customHook/Loading */ "./src/customHook/Loading.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _customHook_SnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customHook/SnackBar */ "./src/customHook/SnackBar.js");
/* harmony import */ var _customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customHook/useOnFirstRender */ "./src/customHook/useOnFirstRender.js");
/* harmony import */ var _util_GuestbookAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/GuestbookAPI */ "./src/util/GuestbookAPI.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
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










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    container: {
      width: '100%',
      height: '120vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'white'
    },
    paper: {
      width: '75vw',
      height: '85vh',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    backLogo: {
      color: 'white',
      fontWeight: 'bolder',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      opacity: 0.3
    },
    chatContainer: {
      height: '80%',
      width: '100%',
      padding: '0.5vw 5vw',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
      backgroundColor: '#d0d0d0',
      overflowY: 'scroll',
      overflowX: 'hidden'
    },
    inputBox: {
      width: '40vw',
      marginTop: '5vh'
    },
    bubble: {
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      border: 'thick #8a8a8a',
      borderRadius: '15px',
      backgroundColor: '#8e8e8e',
      padding: '5px 12px',
      margin: '0px 6px',
      maxWidth: '60vw',
      overflow: 'hidden'
    },
    myBubble: {
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      border: 'thick #8a8a8a',
      borderRadius: '15px',
      backgroundColor: '#789fff',
      padding: '5px 12px',
      margin: '0px 6px',
      maxWidth: '60vw',
      overflow: 'hidden'
    },
    chatBox: {
      display: 'flex',
      flexDirection: 'row',
      padding: '2px'
    },
    OtherAvatar: {
      color: '#fff',
      backgroundColor: 'black'
    },
    myAvatar: {
      color: '#fff',
      backgroundColor: '#2764ff'
    }
  };
});
function Guestbook(_ref) {
  var isLoading = _ref.isLoading;
  var classes = useStyles();
  var inputRef = React.useRef();

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_8__["useCookies"])(['profile']),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

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
      tooFastSnack = _React$useState4[0],
      setTooFastSnack = _React$useState4[1];

  var _React$useState5 = React.useState({
    open: false
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      deletedSnack = _React$useState6[0],
      setDeletedSnack = _React$useState6[1];

  var _React$useState7 = React.useState({
    open: false
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      errorSnack = _React$useState8[0],
      setErrorSnack = _React$useState8[1];

  var _React$useState9 = React.useState({
    input: '',
    chatLogs: []
  }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      state = _React$useState10[0],
      setState = _React$useState10[1];

  var logRef = React.useRef();
  var chatContainerRef = React.useRef();
  var transportableRef = React.useRef(true);

  var getList = function getList() {
    Object(_util_GuestbookAPI__WEBPACK_IMPORTED_MODULE_6__["getGuestbookList"])().then(function (result) {
      // console.log(result.data);
      var list = _toConsumableArray(result.data);

      console.log(list);
      logRef.current = _toConsumableArray(list);
      setState(_objectSpread(_objectSpread({}, state), {}, {
        chatLogs: _toConsumableArray(list)
      }));
    })["catch"](function (err) {
      setErrorSnack({
        open: true
      });
    });
  }; // constructor


  Object(_customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    getList();
  });

  var handleOnDeleteClick = function handleOnDeleteClick(e) {
    var id = e.currentTarget.dataset.id;
    console.log("\uC0AD\uC81C\uC694\uCCAD ID : ".concat(id)); // db의 _id값으로 삭제요청하기

    Object(_util_GuestbookAPI__WEBPACK_IMPORTED_MODULE_6__["deleteGuestbook"])(id).then(function (result) {
      if (result.result === 'deleted') setTimeout(setDeletedSnack({
        open: true
      }), 3000);
      getList();
    })["catch"](function (err) {
      console.log(err);
      setErrorSnack({
        open: true
      });
      getList();
    });
  };

  var onInputChange = function onInputChange(e) {
    var value = e.target.value;

    if (value.length < 120) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        input: value
      }));
    } else if (value.length >= 95) {
      setSnack({
        open: true
      });
    }
  };

  var enterKeyHandler = function enterKeyHandler(e) {
    if (e.keyCode === 13) {
      // enter pressed
      var input = inputRef.current ? inputRef.current.querySelector('#message') : '';

      if (input.value) {
        input.focus();
        chatContainerRef.current.scrollTo(0, chatContainerRef.current.scrollHeight);

        if (input.value, cookies.profile) {
          // post API & get API
          if (transportableRef.current === false) {
            setTooFastSnack({
              open: true
            });
          } else {
            Object(_util_GuestbookAPI__WEBPACK_IMPORTED_MODULE_6__["postGuestbook"])(input.value, cookies.profile.name, cookies.profile.picture).then(function (response) {
              if (response.status === 200) {
                setTimeout(function () {
                  transportableRef.current = true;
                }, 15000);
                transportableRef.current = false;
                setSnack({
                  open: true,
                  status: 'success'
                });
                getList();
              }
            })["catch"](function (error) {
              setSnack({
                open: true,
                status: 'error'
              });
            });
          }
        }
      }
    }
  };

  React.useEffect(function () {
    window.addEventListener('keydown', enterKeyHandler);
    return function () {
      return window.removeEventListener('keydown', enterKeyHandler);
    };
  }, []);
  var email = cookies.profile ? cookies.profile.email === 'kwonh11@gmail.com' ? true : false : false;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_customHook_Loading__WEBPACK_IMPORTED_MODULE_0__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.container
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.paper,
    elevation: 5
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.chatContainer,
    ref: chatContainerRef
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    color: "textPrimary",
    className: classes.backLogo
  }, "GUEST BOOK : LEAVE A MESSAGE."), state.chatLogs.map(function (article, index) {
    return article.own || email ?
    /*#__PURE__*/
    // 서버에서 확인된 본인게시물일 경우  (서버측 확인필요 수정후 주석 지우기 )
    // 내가 말했을 경우 오른쪽 정렬, profile의 이름과 비교 
    React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      interactive: true,
      placement: "right",
      key: index,
      title: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
        onClick: handleOnDeleteClick,
        color: "primary",
        size: "small",
        "data-id": article._id
      }, /*#__PURE__*/React.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default.a, null))
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: classes.chatBox,
      style: {
        alignSelf: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
      className: classes.myBubble
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "caption",
      style: {
        fontSize: '0.5rem',
        lineHeight: '0.8'
      }
    }, article.date), article.content), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      className: classes.myAvatar,
      src: article.picture
    }))) :
    /*#__PURE__*/
    // 다른사람들이 말한 건 왼쪽 정렬
    React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: classes.chatBox,
      key: index
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      className: classes.OtherAvatar,
      src: article.picture
    }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
      className: classes.bubble
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "caption",
      style: {
        fontSize: '0.5rem',
        lineHeight: '0.8'
      }
    }, article.date), article.content));
  })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.inputBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "message",
    size: "medium",
    label: "message",
    style: {
      margin: 8
    },
    value: state.input,
    onChange: onInputChange,
    autoFocus: true,
    placeholder: "Enter a message",
    fullWidth: true,
    ref: function ref(v) {
      return inputRef.current = v;
    },
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined"
  })))), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: snack.open,
    onClose: function onClose() {
      return setSnack({
        open: false
      });
    },
    content: snack.status === 'success' ? 'SUCCESS' : snack.status === 'error' ? 'FAILED : LOGIN FIRST' : 'max length : 120',
    status: snack.status === 'success' ? 'success' : 'error'
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: tooFastSnack.open,
    onClose: function onClose() {
      return setTooFastSnack({
        open: false
      });
    },
    content: "FAILED : sorry TOO FAST , Interval : 15s",
    status: "error"
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: deletedSnack.open,
    onClose: function onClose() {
      return setDeletedSnack({
        open: false
      });
    },
    content: "Deleted",
    status: "success"
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: errorSnack.open,
    onClose: function onClose() {
      return setErrorSnack({
        open: false
      });
    },
    content: "Error ! ",
    status: "error"
  }));
}
Guestbook.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    textContainer: {
      width: '100%',
      backgroundColor: 'inherit',
      color: '#fff',
      textShadow: '2px 1.5px 1.5px gray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  };
});
function ImageCarousel(props) {
  var classes = useStyles();
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
    speed: 800,
    heightMode: "max"
  }, imageList.map(function (image, index) {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        width: '100%',
        height: '100%'
      },
      key: index
    }, index > 0 ? /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: classes.textContainer
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h3",
      color: "inherit",
      style: {
        fontWeight: 'bolder'
      }
    }, "#".concat(index, " ").concat(image.name))) : null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        height: '100%'
      }
    }, index === 0 ? /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: classes.textContainer,
      style: {
        height: '100%',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h3",
      color: "inherit",
      style: {
        fontWeight: 'bolder'
      }
    }, "QUICK START GUIDE", /*#__PURE__*/React.createElement("img", {
      src: ""
    })), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      color: "inherit",
      style: {
        fontWeight: 'bold'
      }
    }, "Make your work easier"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "subtitle1",
      color: "inherit",
      style: {
        fontWeight: 'bold'
      }
    }, "Turn the slide over and check."), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "subtitle1",
      color: "inherit",
      style: {
        fontWeight: 'bold'
      }
    }, "It consists of a few slides.")) : /*#__PURE__*/React.createElement("img", {
      src: image.src
    })));
  }));
}
ImageCarousel.propTypes = {
  setStepper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  currentSlide: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  setCurrentSlide: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: 'white'
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
Home.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
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
/* harmony import */ var _images_slide0_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/slide0.png */ "./src/images/slide0.png");







/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'Quick start guide',
  src: "".concat(_images_slide0_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
  description: 'GUIDE'
}, {
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
/* harmony import */ var _images_whitebackground_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/whitebackground.jpg */ "./src/images/whitebackground.jpg");
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
      backgroundImage: "url(".concat(_images_whitebackground_jpg__WEBPACK_IMPORTED_MODULE_5__["default"], ")"),
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
/* harmony import */ var _images_black_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/black.png */ "./src/images/black.png");
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
      backgroundImage: "url(".concat(_images_black_png__WEBPACK_IMPORTED_MODULE_5__["default"], ")"),
      backgroundSize: 'cover'
    },
    logoBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    bigAvatar: {
      width: theme.spacing(12),
      height: theme.spacing(12)
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": grow,
    timeout: {
      enter: 2000,
      exit: 800
    }
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.root,
    ref: domRef
  }, /*#__PURE__*/React.createElement(_Crossline__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: classes.logoBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], _extends({
    "in": grow
  }, grow ? {
    timeout: {
      enter: 5000,
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
  }, "This app will not keep any personal information."))), /*#__PURE__*/React.createElement(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




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
DescriptionList.propTypes = {
  stepper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
};
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
/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StartButton */ "./src/home/StartButton.js");
/* harmony import */ var _images_desk_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/desk.jpg */ "./src/images/desk.jpg");
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
      backgroundImage: "url(".concat(_images_desk_jpg__WEBPACK_IMPORTED_MODULE_3__["default"], ")"),
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
  }, isFirstRef.current ? 'WELCOME' : 'Ready to start?'), isFirstRef.current ? null : /*#__PURE__*/React.createElement(_StartButton__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
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

/***/ "./src/images/black.png":
/*!******************************!*\
  !*** ./src/images/black.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "black.3f02a132738700226c84ed1f5863d59a.png");

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

/***/ "./src/images/slide0.png":
/*!*******************************!*\
  !*** ./src/images/slide0.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "slide0.0aa295a3b7b4d3013286f524c4764cd7.png");

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

/***/ "./src/images/white-arrow.png":
/*!************************************!*\
  !*** ./src/images/white-arrow.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "white-arrow.c4422a7bc5ee23d081b3566f93e91f1f.png");

/***/ }),

/***/ "./src/images/whitebackground.jpg":
/*!****************************************!*\
  !*** ./src/images/whitebackground.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "whitebackground.fb140f5e810dc2146dad1b6f03caf9c8.jpg");

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
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
    field: 'Name',
    grouping: false
  }, {
    title: 'Surname',
    field: 'Surname'
  }, {
    title: 'Birth Year',
    field: 'Birth Year'
  }, {
    title: 'Phone',
    field: 'Phone',
    grouping: false
  }, {
    title: 'Gender',
    field: 'Gender'
  }, {
    title: 'Memo',
    field: 'Memo'
  }],
  data: [{
    "Name": 'Mehmet',
    'Surname': 'Baran',
    "Birth Year": 1983,
    "Phone": '01046509995',
    "Gender": 1,
    "Memo": ''
  }, {
    "Name": 'Adam',
    'Surname': 'Adam',
    "Birth Year": 1984,
    "Phone": '01046509795',
    "Gender": 2,
    "Memo": ''
  }, {
    "Name": 'Mehmet',
    'Surname': 'Atom',
    "Birth Year": 1985,
    "Phone": '01046509695',
    "Gender": 1,
    "Memo": ''
  }, {
    "Name": 'mul',
    'Surname': 'Kongna',
    "Birth Year": 1986,
    "Phone": '01046509195',
    "Gender": 1,
    "Memo": ''
  }, {
    "Name": 'Jack',
    'Surname': 'Jack',
    "Birth Year": 1987,
    "Phone": '01046509295',
    "Gender": 2,
    "Memo": ''
  }, {
    "Name": 'Bob',
    'Surname': 'Bob',
    "Birth Year": 1988,
    "Phone": '01046509395',
    "Gender": 2,
    "Memo": ''
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
DefaultPage.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    defaultPage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
    hasTable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
    columns: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
    data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
  }),
  setState: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
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

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_5__["useCookies"])(['profile']),
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
Headers.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
};
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
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

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_0__["useCookies"])(['profile']),
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
    Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_5__["getManagementTable"])().then(function (response) {
      console.log("status : ".concat(response.status, " , data : ").concat(JSON.stringify(response.data))); // 유저 확인됐고 테이블도 비어있지 않을 경우

      if (response.status === 200 && response.data.headers) {
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
  }); // events

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
    Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_5__["saveData"])(headers, groupings, data)["catch"](function (err) {
      if (err) throw new Error(err);
    });
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
ManagementTable.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool
};
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


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
ManualDialog.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
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
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaveButton; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _util_ManagementAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ManagementAPI */ "./src/util/ManagementAPI.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function SaveButton(_ref) {
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
    })["catch"](function (error) {
      setErrorSnack({
        open: true
      });
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
}
SaveButton.propTypes = {
  setSavedSnack: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  dataManager: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
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
  var links = ['guestbook', 'management'];
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
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
      Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_7__["saveData"])({}, [], [{}]).then(function (data) {
        handleGlobalSnackbar({
          open: true,
          result: data.result === 'success' ? 'success' : 'error'
        });
        setTimeout(function () {
          location.replace(location.origin);
        }, 1500);
      })["catch"](function (err) {
        throw new Error(err);
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
MenuList.propTypes = {
  anchor: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  toggleDrawer: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
};
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

/***/ "./src/util/GuestbookAPI.js":
/*!**********************************!*\
  !*** ./src/util/GuestbookAPI.js ***!
  \**********************************/
/*! exports provided: getGuestbookList, postGuestbook, deleteGuestbook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGuestbookList", function() { return getGuestbookList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postGuestbook", function() { return postGuestbook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGuestbook", function() { return deleteGuestbook; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serverURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverURL */ "./src/util/serverURL.js");

 // guestbook list 받아오기 30개

var getGuestbookList = function getGuestbookList() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/guestbook"), {
    withCredentials: true
  });
}; // 등록

var postGuestbook = function postGuestbook(content, name, picture) {
  if (!name || !picture || !content) {
    console.log("postGuestbook : parameter has empty");
    return null;
  }

  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/guestbook"), {
    data: {
      content: content,
      name: name,
      picture: picture
    }
  }, {
    withCredentials: true
  });
}; // 수정
// export const updateGuestbook = (articleId, content) => {
//     return axios.put(`${serverURL}/guestbook`, {
//         data : {
//             articleId,
//             content
//         }
//     },{withCredentials : true})
// }

var deleteGuestbook = function deleteGuestbook(article_id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/guestbook"), {
    data: {
      article_id: article_id
    },
    withCredentials: true
  });
};

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
    if (res.status === 400) return Promise.reject(400);
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
/* harmony default export */ __webpack_exports__["default"] = ("https://management-apple.herokuapp.com"); // export default "http://localhost:3000";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9FcnJvckZhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL0hpZGVPblNjaHJvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9TbmFja0Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ndWVzdGJvb2svR3Vlc3Rib29rLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Nyb3NzbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9EZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ltYWdlU2xpZGVTb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24yLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0xpc3RDYXJvdXNlbERlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvU3RhcnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ibGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9kZXNrLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Vhc3ktbG9naW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xpbmstbWFuYWdlbWVudC1wYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21ha2UtaGVhZGVycy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbW9vbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9teW1lbnUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2xpZGUwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0YXJ0LXJpZ2h0LWF3YXkucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvd2hpdGUtYXJyb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvd2hpdGViYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvRGVmYXVsdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbnVhbERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9TYXZlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1RhYmxlT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZGVNZW51TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25JbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25PdXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvR3Vlc3Rib29rQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0xvZ2luQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL01hbmFnZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGFyc2VEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3NlcnZlclVSTC5qcyJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkxvZ291dENvbnRleHQiLCJQcm9ncmVzc0NvbnRleHQiLCJHbG9iYWxTbmFja2JhckNvbnRleHQiLCJBcHAiLCJxcyIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwiaWRfdG9rZW4iLCJ1c2VDb29raWVzIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsInVzZVN0YXRlIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJvcGVuIiwicmVzdWx0IiwiZ2xvYmFsU25hY2tiYXIiLCJzZXRHbG9iYWxTbmFja2JhciIsInByb2dyZXNzUmVmIiwidXNlUmVmIiwiaGFuZGxlQmVmb3JldW5sb2FkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInVzZUVmZmVjdCIsImdldFRva2VuQW5kUHJvZmlsZSIsInRoZW4iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJwYXRoIiwibWF4QWdlIiwic2FtZVNpdGUiLCJlcnIiLCJFcnJvciIsIkVycm9yRmFsbGJhY2siLCJlcnJvciIsImNvbXBvbmVudFN0YWNrIiwicmVwbGFjZSIsIm9yaWdpbiIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidXNlU3R5bGUiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImhlaWdodCIsInBhcGVyIiwicGFkZGluZyIsImNvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJmb250V2VpZ2h0IiwicGFwZXIyIiwibWFyZ2luVG9wIiwiYnV0dG9uIiwicmVzZXRFcnJvckJvdW5kYXJ5IiwiY2xhc3NlcyIsInNlY29uZCIsInNldFNlY29uZCIsIm1lc3NhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJIaWRlT25TY3JvbGwiLCJjaGlsZHJlbiIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiTG9hZGluZyIsImJvb2wiLCJDdXN0b21TbmFja2JhciIsIm9uQ2xvc2UiLCJjb250ZW50Iiwic3RhdHVzIiwiZGlyZWN0aW9uIiwiZm9udFNpemUiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwidXNlT25GaXJzdFJlbmRlciIsImlzRmlyc3RSZWYiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJtaW5IZWlnaHQiLCJmb290ZXIiLCJzcGFjaW5nIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImFycm93IiwiYWxpZ25TZWxmIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZFNpemUiLCJTdGlja3lGb290ZXIiLCJwYXRobmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInRyYW5zaXRpb24iLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYW5hZ2VtZW50QmFja2dyb3VuZCIsInRyYW5zZm9ybSIsIndoaXRlQXJyb3ciLCJjb250YWluZXIiLCJiYWNrTG9nbyIsInBvc2l0aW9uIiwiekluZGV4Iiwib3BhY2l0eSIsImNoYXRDb250YWluZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJpbnB1dEJveCIsImJ1YmJsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJteUJ1YmJsZSIsImNoYXRCb3giLCJPdGhlckF2YXRhciIsIm15QXZhdGFyIiwiR3Vlc3Rib29rIiwiaW5wdXRSZWYiLCJzbmFjayIsInNldFNuYWNrIiwidG9vRmFzdFNuYWNrIiwic2V0VG9vRmFzdFNuYWNrIiwiZGVsZXRlZFNuYWNrIiwic2V0RGVsZXRlZFNuYWNrIiwiZXJyb3JTbmFjayIsInNldEVycm9yU25hY2siLCJpbnB1dCIsImNoYXRMb2dzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvZ1JlZiIsImNoYXRDb250YWluZXJSZWYiLCJ0cmFuc3BvcnRhYmxlUmVmIiwiZ2V0TGlzdCIsImdldEd1ZXN0Ym9va0xpc3QiLCJsaXN0IiwiaGFuZGxlT25EZWxldGVDbGljayIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkZWxldGVHdWVzdGJvb2siLCJzZXRUaW1lb3V0Iiwib25JbnB1dENoYW5nZSIsInZhbHVlIiwibGVuZ3RoIiwiZW50ZXJLZXlIYW5kbGVyIiwia2V5Q29kZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsInNjcm9sbEhlaWdodCIsInBvc3RHdWVzdGJvb2siLCJyZXNwb25zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiYXJ0aWNsZSIsImluZGV4Iiwib3duIiwiX2lkIiwibGluZUhlaWdodCIsImRhdGUiLCJ2Iiwic2hyaW5rIiwidGV4dENvbnRhaW5lciIsInRleHRTaGFkb3ciLCJJbWFnZUNhcm91c2VsIiwiaW1hZ2VMaXN0Iiwic2V0U3RlcHBlciIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImhhbmRsZUFmdGVyU2xpZGUiLCJzbGlkZUluZGV4IiwiaW1hZ2UiLCJzcmMiLCJudW1iZXIiLCJmbGV4V3JhcCIsIkNyb3NzbGluZSIsImZhZGUiLCJzZXRGYWRlIiwiZG9tUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZW50ZXIiLCJleGl0IiwiaW5uZXJCb3giLCJEZXNjcmlwdGlvbiIsImdyb3ciLCJzZXRHcm93IiwidHJhbnNmb3JtT3JpZ2luIiwidGltZW91dCIsImFwcGVhciIsIkhvbWUiLCJzbGlkZTAiLCJkZXNjcmlwdGlvbiIsImVhc3lMb2dpbiIsImxpbmtNYW5hZ2VtZW50UGFnZSIsInN0YXJ0UmlnaHRBd2F5IiwibWFrZUhlYWRlcnMiLCJoYW5kbGVUYWJsZSIsInVzZU15bWVudSIsIm1pbldpZHRoIiwidGV4dFBhcGVyIiwiSW50cm9kdWN0aW9uIiwic3RlcHBlciIsImxvZ29Cb3giLCJiaWdBdmF0YXIiLCJ0ZXh0V2l0aFNoYWRvdyIsIm1hcmdpbkxlZnQiLCJkZXNjcmlwdGlvbkJveCIsIm1vb25JbWFnZSIsImlubGluZSIsIkRlc2NyaXB0aW9uTGlzdCIsInNsaWRlU291cmNlIiwiaXRlbSIsImFsaWduQ29udGVudCIsIk1haW4iLCJ0ZXh0IiwidHlwb2dyYXBoeSIsInRleHREZWNvcmF0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uQ29udGFpbmVyIiwiZGVmYXVsdERhdGEiLCJjb2x1bW5zIiwidGl0bGUiLCJmaWVsZCIsImdyb3VwaW5nIiwiRGVmYXVsdFBhZ2UiLCJtYXRjaCIsImZhZGUyIiwic2V0RmFkZTIiLCJoYW5kbGVPbkRFTU9DbGljayIsImRlZmF1bHRQYWdlIiwic2hhcGUiLCJoYXNUYWJsZSIsImFycmF5IiwiZm9ybVJvb3QiLCJkZWZhdWx0SGVhZGVyIiwiSGVhZGVycyIsImhhbmRsZVByb2dyZXNzIiwidXNlQ29udGV4dCIsInJlc3VsdFNuYWNrIiwic2V0UmVzdWx0U25hY2siLCJoZWFkZXJzIiwiZ3JvdXBpbmdzIiwiQXJyYXkiLCJmaWxsIiwic2V0RGF0YSIsImRhdGFSZWYiLCJnZXRNYW5hZ2VtZW50VGFibGUiLCJncm91cGluZ0xlbmd0aCIsImkiLCJwdXNoIiwiaGVhZGVyc0xlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImhhbmRsZUxvZ291dCIsImhhbmRsZVN1Ym1pdCIsImhyZWYiLCJpc0F1dG9TYXZlIiwiZXZlcnkiLCJmaWx0ZXIiLCJzYXZlSGVhZGVycyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlR3JvdXBpbmdzIiwiY2hlY2tlZCIsImhlYWRlciIsIk1hbmFnZW1lbnRUYWJsZSIsInNhdmVkU25hY2siLCJzZXRTYXZlZFNuYWNrIiwiZGlhbG9nIiwic2V0RGlhbG9nIiwidGFibGVSZWYiLCJwYXJzZURhdGEiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZU9uU2F2ZSIsImRhdGFNYW5hZ2VyIiwicmVkdWNlIiwib2JqIiwidGFibGVEYXRhIiwicmVzdCIsInNhdmVEYXRhIiwib25kYkNsaWNrIiwib25LZXlkb3duIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJtZXRhS2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwiTWFyZ2luIiwibG9jYWxpemF0aW9uIiwib3B0aW9ucyIsInRvb2x0aXAiLCJpY29uIiwib25DbGljayIsImRlbGV0aW9ucyIsInNwbGljZSIsImluZGV4T2YiLCJwcmV2RGF0YSIsIm9uUm93QWRkIiwibmV3RGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJldlN0YXRlIiwib25Sb3dVcGRhdGUiLCJvbGREYXRhIiwiTWFudWFsRGlhbG9nIiwiaWNvbnMiLCJTYXZlQnV0dG9uIiwiZXhwb3J0QnV0dG9uIiwic2VsZWN0aW9uIiwiaGVhZGVyU3R5bGUiLCJhY3Rpb25zQ29sdW1uSW5kZXgiLCJjb2x1bW5zQnV0dG9uIiwiZGVib3VuY2VJbnRlcnZhbCIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwicGFnaW5hdGlvbiIsImxhYmVsRGlzcGxheWVkUm93cyIsInRvb2xiYXIiLCJuUm93c1NlbGVjdGVkIiwiYWN0aW9ucyIsImJvZHkiLCJlbXB0eURhdGFTb3VyY2VNZXNzYWdlIiwiZmxleEdyb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxlZnQiLCJwYWRkaW5nTGVmdCIsImp1c3RpZnkiLCJjZW50ZXIiLCJyaWdodCIsInBhZGRpbmdSaWdodCIsIk5hdiIsIm1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJldmVudCIsImZsYWciLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJsaXN0VGV4dCIsIm1vZGFsIiwic2hhZG93cyIsIm1vZGFsUm93Qm94IiwibW9kYWxDb2xCb3giLCJNZW51TGlzdCIsImhhbmRsZUdsb2JhbFNuYWNrYmFyIiwiZW1haWxJbnB1dCIsInNldEVtYWlsSW5wdXQiLCJoYW5kbGVPbkNsaWNrTG9naW4iLCJyZWRpcmVjdEdvb2dsZUxvZ2luIiwiaGFuZGxlT25DbGlja01vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVPbkNsb3NlTW9kYWwiLCJoYW5kbGVPblN1Ym1pdCIsImlzTG9nZ2VkIiwiZ29vZ2xlU2lnbmluSW1hZ2UiLCJTaWduSW5CdXR0b24iLCJzaWduSW4iLCJsb2dvdXQiLCJMaWdodFRvb2x0aXAiLCJ3aXRoU3R5bGVzIiwiY29tbW9uIiwid2hpdGUiLCJUb29sdGlwIiwiYXhpb3MiLCJnZXQiLCJzZXJ2ZXJVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJwb3N0IiwiYXJ0aWNsZV9pZCIsInJlcyIsImFzc2lnbiIsInRva2VuIiwicHV0IiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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QUFHM0YsS0FGSDtBQUdMNEYsY0FBUSxFQUFHa0IsU0FBUyxDQUFDakcsS0FBRDtBQUhmLEtBQVA7QUFLRCxHQU5PLENBQVI7QUFPRCxDQVRILEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWUsdUdBQWYsRSxDQUNBLDBDIiwiZmlsZSI6ImFwcC5kZDlmYWI5OTBlY2E1ODMzOGY3MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiIGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi9OYXZcIjtcclxuaW1wb3J0IEd1ZXN0Ym9vayBmcm9tIFwiLi9ndWVzdGJvb2svR3Vlc3Rib29rXCI7XHJcbmltcG9ydCBNYW5hZ2VtZW50IGZyb20gXCIuL21hbmFnZW1lbnQvTWFuYWdlbWVudFwiO1xyXG5pbXBvcnQgSGVhZGVycyBmcm9tICcuL21hbmFnZW1lbnQvSGVhZGVycyc7XHJcbmltcG9ydCB7Q3NzQmFzZWxpbmV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZS9Ib21lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCB7IGdldFRva2VuQW5kUHJvZmlsZSB9IGZyb20gXCIuL3V0aWwvTG9naW5BUElcIjtcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCBFcnJvckZhbGxiYWNrIGZyb20gJy4vY3VzdG9tSG9vay9FcnJvckZhbGxiYWNrJztcclxuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gXCJyZWFjdC1lcnJvci1ib3VuZGFyeVwiO1xyXG5cclxuLy8g7Luo7YWN7Iqk7Yq4IOuqqeuhnVxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvdXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgR2xvYmFsU25hY2tiYXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3QgeyBpZF90b2tlbiB9ID0gcXMucGFyc2Uod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJ10pO1xyXG4gICAgY29uc3QgWyBwcm9maWxlICwgc2V0UHJvZmlsZSBdID0gUmVhY3QudXNlU3RhdGUoY29va2llcy5wcm9maWxlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2xvYmFsU25hY2tiYXIsIHNldEdsb2JhbFNuYWNrYmFyXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2UgLCByZXN1bHQ6ICdzdWNjZXNzJ30pXHJcbiAgICBjb25zdCBwcm9ncmVzc1JlZiA9IFJlYWN0LnVzZVJlZigwKTtcclxuICAgIGNvbnN0IGhhbmRsZUJlZm9yZXVubG9hZCA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcHJvZ3Jlc3MgOiAke3Byb2dyZXNzUmVmLmN1cnJlbnR9YCk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IChwcm9ncmVzc1JlZi5jdXJyZW50IDwgMTAwID8gcHJvZ3Jlc3NSZWYuY3VycmVudCArIDIwIDogMTAwKTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3NSZWYuY3VycmVudCA9PT0gMTAwKSB7XHJcbiAgICAgICAgICAgICBwcm9ncmVzc1JlZi5jdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICBzZXRHbG9iYWxTbmFja2Jhcih7b3Blbjp0cnVlICwgcmVzdWx0OnJlc3VsdH0pO1xyXG4gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDApXHJcbiAgICB9XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihpZF90b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2ggQVBJIOyLpO2WiScpO1xyXG4gICAgICAgICAgICBnZXRUb2tlbkFuZFByb2ZpbGUoaWRfdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgZGF0YSA6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7bmFtZSAsZW1haWwsIHBpY3R1cmV9ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShcInByb2ZpbGVcIix7bmFtZSAsIGVtYWlsLCBwaWN0dXJlfSx7cGF0aDpcIi9cIiAsIG1heEFnZSA6IDcyMDAsIHNhbWVTaXRlOidub25lJ30pOyAgLy8gbWF4QWdlIDogMuyLnOqwhFxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2dpbiBGYWlsZWQuIFBsZWFzZSBhdXRob3JpemUgdGhlIHVzZSBvZiBjb29raWVzIGluIHlvdXIgYnJvd3Nlci4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtpZF90b2tlbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChjb29raWVzLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGNvb2tpZXMucHJvZmlsZSA6ICR7SlNPTi5zdHJpbmdpZnkoY29va2llcy5wcm9maWxlKX1gKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2Nvb2tpZXMucHJvZmlsZV0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5XHJcbiAgICAgICAgICAgIEZhbGxiYWNrQ29tcG9uZW50PXtFcnJvckZhbGxiYWNrfVxyXG4gICAgICAgICAgICBvbkVycm9yPXsoZXJyb3IsIGNvbXBvbmVudFN0YWNrKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIDogJHtlcnJvcn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFN0YWNrIDogJHtjb21wb25lbnRTdGFja31gKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25SZXNldD17KCk9PmxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24ub3JpZ2luKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb2ZpbGUgfHwge25hbWUgOiAnJ319PiAgICAgICAgICB7Lyog7Jyg7KCAIO2UhOuhnO2VhCDsu6jthY3siqTtirggICAgKi99XHJcbiAgICAgICAgICAgIDxMb2dvdXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRQcm9maWxlfT4gICB7Lyog66Gc6re47JWE7JuDIOydtOuypO2KuCDsu6jthY3siqTtirggICAqL31cclxuICAgICAgICAgICAgPFByb2dyZXNzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17KHJlc3VsdCk9PmhhbmRsZUJlZm9yZXVubG9hZChyZXN1bHQpfT4gIHsvKiDroZzrlKkg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgIDxHbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldEdsb2JhbFNuYWNrYmFyfT4gIHsvKiDsl5Drn6wg7Iqk64K167CUIOy7qO2FjeyKpO2KuCAgICovfVxyXG4gICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgcmVuZGVyPXsoKT0+PEhvbWUgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvZ3Vlc3Rib29rJyByZW5kZXI9eygpPT48R3Vlc3Rib29rIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL21hbmFnZW1lbnQnIHJlbmRlcj17KCk9PiA8TWFuYWdlbWVudCBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9oZWFkZXJzJyByZW5kZXI9eygpPT4gPEhlYWRlcnMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyByZW5kZXI9eyhwcm9wcyk9PjxGb290ZXIgey4uLnByb3BzfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPC9HbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvUHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0xvZ291dENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17Z2xvYmFsU25hY2tiYXIub3Blbn0gb25DbG9zZT17KCk9PnNldEdsb2JhbFNuYWNrYmFyKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgICAgICAgICAgY29udGVudD17Z2xvYmFsU25hY2tiYXIucmVzdWx0PT09J2Vycm9yJz8gYE5vdCBzYXZlZC5cclxuICAgICAgICAgICAgICAgIFJlYXNvbiA6IEludmFsaWQgaW5wdXQuYCA6JyBTQVZFRCAnfSBzdGF0dXM9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdH1cclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17e3ZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidyaWdodCd9fS8+XHJcbiAgICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZVNpZ25pbi4xY2UxYWFhNWExMjdmYTNlNDkyYTEyYmI2MmY5OTMwNC5wbmdcIjsiLCJpbXBvcnQgeyBCb3gsIFBhcGVyLFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgd2lkdGggOiAnODB2dycsXHJcbiAgICAgICAgLy8gaGVpZ2h0IDogJzUwdmgnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnNXZoJyxcclxuICAgICAgICBjb2xvciA6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJ1xyXG4gICAgfSxcclxuICAgIHBhcGVyMiA6IHtcclxuICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIG1hcmdpblRvcDonM3ZoJyxcclxuICAgICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcidcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzV2aCcsXHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJ1xyXG4gICAgfVxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yRmFsbGJhY2sgKHtlcnJvciwgY29tcG9uZW50U3RhY2ssIHJlc2V0RXJyb3JCb3VuZGFyeX0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgW3NlY29uZCAsIHNldFNlY29uZF0gPSBSZWFjdC51c2VTdGF0ZSgzMCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKHNlY29uZCA8PSAwKSBsb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNlY29uZCA6ICAke3NlY29uZH1gKTtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIHNldFNlY29uZChzZWNvbmQtMSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSxbc2Vjb25kXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+IHtgRVJST1IgOiAke2Vycm9yLm1lc3NhZ2V9YH0gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnPiB7YFdpbGwgZ28gYmFjayB0byB0aGUgSE9NRWB9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMic+IHtgaW4gJHtzZWNvbmR9IHNlY29uZHMuYH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtyZXNldEVycm9yQm91bmRhcnl9PiBcclxuICAgICAgICAgICAgICAgICAgICBSZXR1cm4gdG8gSG9tZSBOb3cgXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXIyfSBlbGV2YXRpb249ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+IHtgUGxlYXNlIGNoZWNrIGJlbG93LmB9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz4ge2AxLiBMb2dpbiB0aW1lb3V0IC0gTG9naW4gUmV0ZW50aW9uIFRpbWU6IDIgaG91cnNgfSAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+IHtgMi4gSW52YWxpZCBSZXF1ZXN0YH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbkVycm9yRmFsbGJhY2sucHJvcFR5cGVzID0ge1xyXG4gICAgcmVzZXRFcnJvckJvdW5kYXJ5IDogUHJvcFR5cGVzLFxyXG59IiwiaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuXHJcbi8vIEdOQuydmCDsiqzrnbzsnbTrk5zquLDriqVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9IGRpcmVjdGlvbj1cImRvd25cIiBpbj17IXRyaWdnZXJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NsaWRlPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQge0JveCwgQ2lyY3VsYXJQcm9ncmVzcywgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nICh7aXNMb2FkaW5nfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgIGlzTG9hZGluZyAmJiBcclxuICAgICAgICAgICAgKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHZoJywgd2lkdGg6JzEwMHZ3JywgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtgU2F2aW5nIGNoYW5nZXNgfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgICAgICAgPC9Cb3g+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuTG9hZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tU25hY2tiYXIgKHtvcGVuLCBvbkNsb3NlLCBjb250ZW50LCBzdGF0dXMsIGRpcmVjdGlvbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17ZGlyZWN0aW9uPyBkaXJlY3Rpb24gOiB7IHZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidjZW50ZXInIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17b25DbG9zZX0gc2V2ZXJpdHk9e3N0YXR1c31cclxuICAgICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCcgbWVzc2FnZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicsIGZvbnRTaXplOic1cmVtJ319PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgIClcclxufVxyXG5cclxuQ3VzdG9tU25hY2tiYXIucHJvcFR5cGVzID0ge1xyXG4gICAgb3BlbiA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNsb3NlIDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb250ZW50IDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN0YXR1cyA6IFByb3BUeXBlcy5vbmVPZihbJ2Vycm9yJywnc3VjY2VzcyddKSxcclxuICAgIGRpcmVjdGlvbiA6IFByb3BUeXBlcy5vYmplY3QsXHJcbn0iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuLy8gY29udHN0cnVjdG9yIO2bhVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPbkZpcnN0UmVuZGVyIChmdW5jKSB7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmMoKTtcclxuICAgIH1cclxufVxyXG51c2VPbkZpcnN0UmVuZGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGZ1bmMgOiBQcm9wVHlwZXMuZnVuY1xyXG59IiwiaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgTGlua30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgd2hpdGVBcnJvdyBmcm9tICcuLi9pbWFnZXMvd2hpdGUtYXJyb3cucG5nJztcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQge0JveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IG1hbmFnZW1lbnRCYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnJztcclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgSmFjaydzIFdlYnNpdGVcclxuICAgICAgICA8L0xpbms+eycgJ31cclxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgIHsnLid9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWluSGVpZ2h0OiAnMjB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgICAgYmFja2dyb3VuZCA6IHRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdLFxyXG4gICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgYXJyb3cgOiB7XHJcbiAgICAgIHdpZHRoIDogJzR2dycsXHJcbiAgICAgIGhlaWdodCA6ICc0dncnLFxyXG4gICAgICBwYWRkaW5nIDogJzN2dycsXHJcbiAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Cb3R0b206JzJ2aCcsXHJcbiAgICAgIG1hcmdpblRvcCA6ICcydmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTonY29udGFpbicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5Rm9vdGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7bG9jYXRpb259ID0gcHJvcHM7XHJcbiAgICBjb25zb2xlLmxvZyhgbG9jYXRpb24ucGF0aG5hbWU/ICR7bG9jYXRpb24ucGF0aG5hbWV9YCk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9ndWVzdGJvb2snPyBudWxsIDogKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17XHJcbiAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJyA/IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kIDogYGxpbmVhci1ncmFkaWVudChibGFjaywgI2VlZWVlZSlgfSBcclxuICAgICAgICA6IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7bWFuYWdlbWVudEJhY2tncm91bmR9KWAsIGJhY2tncm91bmRTaXplIDogJ2F1dG8nLCB0cmFuc2Zvcm06IGBzY2FsZVkoLTEpYH19PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTW92ZSB0byBUb3BcIiBhcmlhLWxhYmVsPVwibW92ZS10by10b3BcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBlbnRlckRlbGF5PXszNTB9IGxlYXZlRGVsYXk9ezE1MH0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gc3R5bGU9e1xyXG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJz8gXHJcbiAgICAgICAgICB7YmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke3doaXRlQXJyb3d9KWB9XHJcbiAgICAgICAgICA6IFxyXG4gICAgICAgICAge2JhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCwgdHJhbnNmb3JtOmByb3RhdGUoMTgwZGVnKWB9fVxyXG4gICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9IG9uTW91c2VPdmVyPXsoZSk9PnRyYW5zaXRpb24oZSl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgICAgICAgPENvcHlyaWdodCBzdHlsZT17e2ZvbnRXZWlnaHQgOiAnYm9sZGVyJ319Lz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9IiwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgQm94LCBQYXBlciwgVHlwb2dyYXBoeSwgVGV4dEZpZWxkLCBBdmF0YXIsVG9vbHRpcCxJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tIFwiLi4vY3VzdG9tSG9vay9TbmFja0JhclwiO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tIFwiLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyXCI7XHJcbmltcG9ydCB7IGdldEd1ZXN0Ym9va0xpc3QgLCBwb3N0R3Vlc3Rib29rLCBkZWxldGVHdWVzdGJvb2t9IGZyb20gJy4uL3V0aWwvR3Vlc3Rib29rQVBJJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTIwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNzV2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzg1dmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJhY2tMb2dvIDoge1xyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJyxcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgekluZGV4IDogMSxcclxuICAgICAgICBvcGFjaXR5OjAuM1xyXG4gICAgfSxcclxuICAgIGNoYXRDb250YWluZXIgOiB7XHJcbiAgICAgICAgaGVpZ2h0IDogJzgwJScsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZyA6ICcwLjV2dyA1dncnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJyNkMGQwZDAnLFxyXG4gICAgICAgIG92ZXJmbG93WSA6ICdzY3JvbGwnLFxyXG4gICAgICAgIG92ZXJmbG93WCA6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgaW5wdXRCb3ggOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNDB2dycsXHJcbiAgICAgICAgbWFyZ2luVG9wOic1dmgnXHJcbiAgICB9LFxyXG4gICAgYnViYmxlIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXIgOiAndGhpY2sgIzhhOGE4YScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzIDogJzE1cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjOGU4ZThlJyxcclxuICAgICAgICBwYWRkaW5nIDogJzVweCAxMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAnMHB4IDZweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc2MHZ3JyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIG15QnViYmxlIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXIgOiAndGhpY2sgIzhhOGE4YScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzIDogJzE1cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjNzg5ZmZmJyxcclxuICAgICAgICBwYWRkaW5nIDogJzVweCAxMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAnMHB4IDZweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc2MHZ3JyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIGNoYXRCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG5cclxuICAgIH0sXHJcbiAgICBPdGhlckF2YXRhciA6IHtcclxuICAgICAgICBjb2xvciA6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnYmxhY2snLFxyXG4gICAgfSxcclxuICAgIG15QXZhdGFyIDoge1xyXG4gICAgICAgIGNvbG9yIDogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjMjc2NGZmJyxcclxuICAgIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3Vlc3Rib29rKHtpc0xvYWRpbmd9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgICBjb25zdCBbdG9vRmFzdFNuYWNrLCBzZXRUb29GYXN0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtkZWxldGVkU25hY2ssIHNldERlbGV0ZWRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gICAgY29uc3QgW2Vycm9yU25hY2ssIHNldEVycm9yU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGlucHV0IDogJycsXHJcbiAgICAgICAgY2hhdExvZ3MgOiBbXVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGxvZ1JlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3QgY2hhdENvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3QgdHJhbnNwb3J0YWJsZVJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuXHJcbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEd1ZXN0Ym9va0xpc3QoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IFsuLi5yZXN1bHQuZGF0YV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gICAgICAgICAgICBsb2dSZWYuY3VycmVudCA9IFsuLi5saXN0XTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlLCBjaGF0TG9ncyA6IFsuLi5saXN0XX0pO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuIDogdHJ1ZX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3RydWN0b3JcclxuICAgIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgICAgICBnZXRMaXN0KCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVPbkRlbGV0ZUNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGDsgq3soJzsmpTssq0gSUQgOiAke2lkfWApOyAgICAvLyBkYuydmCBfaWTqsJLsnLzroZwg7IKt7KCc7JqU7LKt7ZWY6riwXHJcbiAgICAgICAgZGVsZXRlR3Vlc3Rib29rKGlkKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gJ2RlbGV0ZWQnKSBzZXRUaW1lb3V0KHNldERlbGV0ZWRTbmFjayh7b3Blbjp0cnVlfSksMzAwMCk7XHJcbiAgICAgICAgICAgIGdldExpc3QoKTtcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBnZXRMaXN0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDEyMCkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIGlucHV0IDogdmFsdWV9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA+PSA5NSkge1xyXG4gICAgICAgICAgICBzZXRTbmFjayh7b3Blbjp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZW50ZXJLZXlIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyBlbnRlciBwcmVzc2VkXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gaW5wdXRSZWYuY3VycmVudD8gaW5wdXRSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpIDogJyc7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGNoYXRDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxUbygwLGNoYXRDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlLCBjb29raWVzLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwb3N0IEFQSSAmIGdldCBBUElcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNwb3J0YWJsZVJlZi5jdXJyZW50ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb29GYXN0U25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEd1ZXN0Ym9vayhpbnB1dC52YWx1ZSxjb29raWVzLnByb2ZpbGUubmFtZSwgY29va2llcy5wcm9maWxlLnBpY3R1cmUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnRhYmxlUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDE1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnRhYmxlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTbmFjayh7b3Blbjp0cnVlICwgc3RhdHVzOidzdWNjZXNzJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWUgLCBzdGF0dXM6J2Vycm9yJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZW50ZXJLZXlIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nICwgZW50ZXJLZXlIYW5kbGVyKTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3QgZW1haWwgPSBjb29raWVzLnByb2ZpbGUgPyBjb29raWVzLnByb2ZpbGUuZW1haWw9PT0na3dvbmgxMUBnbWFpbC5jb20nID8gdHJ1ZSA6IGZhbHNlIDogZmFsc2U7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs1fT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY2hhdENvbnRhaW5lcn0gcmVmPXtjaGF0Q29udGFpbmVyUmVmfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0ndGV4dFByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrTG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgR1VFU1QgQk9PSyA6IExFQVZFIEEgTUVTU0FHRS5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmNoYXRMb2dzLm1hcCgoYXJ0aWNsZSxpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGFydGljbGUub3duIHx8IGVtYWlsKSA/IC8vIOyEnOuyhOyXkOyEnCDtmZXsnbjrkJwg67O47J246rKM7Iuc66y87J28IOqyveyasCAgKOyEnOuyhOy4oSDtmZXsnbjtlYTsmpQg7IiY7KCV7ZuEIOyjvOyEnSDsp4DsmrDquLAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrgrTqsIAg66eQ7ZaI7J2EIOqyveyasCDsmKTrpbjsqr0g7KCV66CsLCBwcm9maWxl7J2YIOydtOumhOqzvCDruYTqtZAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpbnRlcmFjdGl2ZSBwbGFjZW1lbnQ9J3JpZ2h0JyBrZXk9e2luZGV4fSB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9uRGVsZXRlQ2xpY2t9IGNvbG9yPSdwcmltYXJ5JyBzaXplPSdzbWFsbCcgZGF0YS1pZD17YXJ0aWNsZS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY2hhdEJveH0gc3R5bGU9e3thbGlnblNlbGY6J2ZsZXgtZW5kJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMubXlCdWJibGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIHN0eWxlPXt7Zm9udFNpemU6JzAuNXJlbScsIGxpbmVIZWlnaHQ6JzAuOCd9fT57YXJ0aWNsZS5kYXRlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLm15QXZhdGFyfSBzcmM9e2FydGljbGUucGljdHVyZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDri6Trpbjsgqzrnozrk6TsnbQg66eQ7ZWcIOqxtCDsmbzsqr0g7KCV66CsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY2hhdEJveH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5PdGhlckF2YXRhcn0gc3JjPXthcnRpY2xlLnBpY3R1cmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuYnViYmxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIHN0eWxlPXt7Zm9udFNpemU6JzAuNXJlbScsIGxpbmVIZWlnaHQ6JzAuOCd9fT57YXJ0aWNsZS5kYXRlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRCb3h9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHNpemU9J21lZGl1bSdcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5pbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHJlZj17diA9PiBpbnB1dFJlZi5jdXJyZW50ID0gdn1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTbmFjayh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgIGNvbnRlbnQ9e3NuYWNrLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnPyAnU1VDQ0VTUycgOiBzbmFjay5zdGF0dXMgPT09ICdlcnJvcic/ICdGQUlMRUQgOiBMT0dJTiBGSVJTVCcgOiAnbWF4IGxlbmd0aCA6IDEyMCd9IFxyXG4gICAgICAgIHN0YXR1cz17c25hY2suc3RhdHVzID09PSAnc3VjY2Vzcyc/ICdzdWNjZXNzJyA6ICdlcnJvcid9IC8+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3Rvb0Zhc3RTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0VG9vRmFzdFNuYWNrKHtvcGVuOmZhbHNlfSl9XHJcbiAgICAgICAgY29udGVudD0nRkFJTEVEIDogc29ycnkgVE9PIEZBU1QgLCBJbnRlcnZhbCA6IDE1cycgc3RhdHVzPSdlcnJvcicgLz5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17ZGVsZXRlZFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXREZWxldGVkU25hY2soe29wZW46ZmFsc2V9KX1cclxuICAgICAgICBjb250ZW50PSdEZWxldGVkJyBzdGF0dXM9J3N1Y2Nlc3MnIC8+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2Vycm9yU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldEVycm9yU25hY2soe29wZW46ZmFsc2V9KX1cclxuICAgICAgICBjb250ZW50PXtgRXJyb3IgISBgfSBzdGF0dXM9J2Vycm9yJyAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkd1ZXN0Ym9vay5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiaW1wb3J0IENhcm91c2VsIGZyb20gJ251a2EtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICB0ZXh0Q29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0JyxcclxuICAgICAgICBjb2xvciA6ICcjZmZmJyxcclxuICAgICAgICB0ZXh0U2hhZG93OicycHggMS41cHggMS41cHggZ3JheScsXHJcbiAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGltYWdlTGlzdCA9IHByb3BzLmxpc3QgPyBwcm9wcy5saXN0IDogW3t9XTtcclxuICAgIGNvbnN0IHtzZXRTdGVwcGVyLCBjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGhhbmRsZUFmdGVyU2xpZGUgPSAoc2xpZGVJbmRleCkgPT4ge1xyXG4gICAgICAgIHNldFN0ZXBwZXIoc2xpZGVJbmRleCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKHNsaWRlSW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgc2xpZGVJbmRleD17Y3VycmVudFNsaWRlfVxyXG4gICAgYWZ0ZXJTbGlkZT0ge2luZGV4ID0+IGhhbmRsZUFmdGVyU2xpZGUoaW5kZXgpfVxyXG4gICAgYXV0b3BsYXk9e2ZhbHNlfVxyXG4gICAgYXV0b3BsYXlJbnRlcnZhbD17MzAwMH1cclxuICAgIHRyYW5zaXRpb25Nb2RlPSdzY3JvbGwnXHJcbiAgICBzcGVlZD17ODAwfVxyXG4gICAgaGVpZ2h0TW9kZT0nbWF4J1xyXG4gICAgICAgID5cclxuICAgIHtcclxuICAgICAgICBpbWFnZUxpc3QubWFwKChpbWFnZSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AjJHtpbmRleH0gJHtpbWFnZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgaW5kZXg9PT0wPyBcclxuICAgICAgICAgICAgICAgICAgICAoPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRhaW5lcn0gc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBhbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRVUlDSyBTVEFSVCBHVUlERVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSB5b3VyIHdvcmsgZWFzaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHVybiB0aGUgc2xpZGUgb3ZlciBhbmQgY2hlY2suXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgY29uc2lzdHMgb2YgYSBmZXcgc2xpZGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQm94PilcclxuICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtpbWFnZS5zcmN9Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuSW1hZ2VDYXJvdXNlbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBzZXRTdGVwcGVyIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGN1cnJlbnRTbGlkZSA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHNldEN1cnJlbnRTbGlkZSA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3ggLCBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luOjAsXHJcbiAgICAgIHBhZGRpbmc6JzF2dycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9zc2xpbmUoe2NoaWxkcmVufSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy01MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MjAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBib3hTaGFkb3c9ezR9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JvdywgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3QgOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzM1dmgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0JyxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBjb2xvcjonI2VhZWFlYScsXHJcbiAgICAgICAgdGV4dFNoYWRvdzogJzFweCA1cHggNXB4ICM5ZTk5OTknXHJcbiAgICB9XHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVzY3JpcHRpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgKX0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnMTUwcHggMHB4J1xyXG4gICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDE1MDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH0gfSA6IHt9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIFNPTUUgVEVYVFxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU09NRSBURVhUXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+ICAgICAgXHJcbiAgICAgICAgPC9Hcm93PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb25cIjtcclxuaW1wb3J0IEludHJvZHVjdGlvbjIgZnJvbSBcIi4vSW50cm9kdWN0aW9uMlwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4nO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7aXNMb2FkaW5nfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgICAgICAgPE1haW4vPlxyXG4gICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbi8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uMi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSG9tZS5wcm9wVHlwZXMgPSB7XHJcbiAgaXNMb2FkaW5nIDogUHJvcFR5cGVzLmJvb2xcclxufSIsImltcG9ydCBlYXN5TG9naW4gZnJvbSBcIi4uL2ltYWdlcy9lYXN5LWxvZ2luLnBuZ1wiO1xyXG5pbXBvcnQgbGlua01hbmFnZW1lbnRQYWdlIGZyb20gXCIuLi9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nXCI7XHJcbmltcG9ydCBzdGFydFJpZ2h0QXdheSBmcm9tIFwiLi4vaW1hZ2VzL3N0YXJ0LXJpZ2h0LWF3YXkucG5nXCI7XHJcbmltcG9ydCBtYWtlSGVhZGVycyBmcm9tIFwiLi4vaW1hZ2VzL21ha2UtaGVhZGVycy5wbmdcIjtcclxuaW1wb3J0IGhhbmRsZVRhYmxlIGZyb20gXCIuLi9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZ1wiO1xyXG5pbXBvcnQgdXNlTXltZW51IGZyb20gXCIuLi9pbWFnZXMvbXltZW51LnBuZ1wiO1xyXG5pbXBvcnQgc2xpZGUwIGZyb20gXCIuLi9pbWFnZXMvc2xpZGUwLnBuZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdRdWljayBzdGFydCBndWlkZScsXHJcbiAgICAgICAgc3JjIDogYCR7c2xpZGUwfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnR1VJREUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1NpZ24gaW4gd2l0aCBHb29nbGUnLFxyXG4gICAgICAgIHNyYyA6IGAke2Vhc3lMb2dpbn1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ1NpZ24gaW4gd2l0aCBnb29nbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ01vdmUgb24gdG8gbWFuYWdlbWVudCBwYWdlJyxcclxuICAgICAgICBzcmMgOiBgJHtsaW5rTWFuYWdlbWVudFBhZ2V9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdNb3ZlIG9uIHRvIG1hbmFnZW1lbnQgcGFnZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnQ2xpY2sgdGhlIGJsdWUgYnV0dG9uJyxcclxuICAgICAgICBzcmMgOiBgJHtzdGFydFJpZ2h0QXdheX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ2NsaWNrIFwiZ2V0IHN0YXJ0ZWQgcmlnaHQgYXdheVwiIGJ1dHRvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnTWFrZSBIZWFkZXJzJyxcclxuICAgICAgICBzcmMgOiBgJHttYWtlSGVhZGVyc31gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ21ha2UgaGVhZGVycycsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ0NyZWF0ZSwgRWRpdCwgUmVtb3ZlIHRhYmxlIHJlY29yZHMnLFxyXG4gICAgICAgIHNyYyA6IGAke2hhbmRsZVRhYmxlfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnaGFuZGxlIHRhYmxlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdVc2UgbXltZW51IHRvIGhhbmRsZSBkYXRhJyxcclxuICAgICAgICBzcmMgOiBgJHt1c2VNeW1lbnV9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICd1c2UgbXltZW51JyxcclxuICAgIH0sXHJcbl07IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyb3cgLCBCb3gsIFBhcGVyLEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcclxuaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuL0ltYWdlU2xpZGVTb3VyY2VzJztcclxuaW1wb3J0IExpc3RDcm91c2VsRGVzY3JpcHRpb24gZnJvbSAnLi9MaXN0Q2Fyb3VzZWxEZXNjcmlwdGlvbic7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy93aGl0ZWJhY2tncm91bmQuanBnJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgOiAnY292ZXInLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIG1pbldpZHRoOiA3NTAsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAwcHgnLFxyXG4gICAgICAgIHdpZHRoIDogJzcwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc2NXZoJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIHRleHRQYXBlciA6IHtcclxuICAgICAgICBtaW5XaWR0aCA6IDM1MCxcclxuICAgICAgICB3aWR0aCA6ICc3MHZ3JyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzdGVwcGVyLCBzZXRTdGVwcGVyXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgY3VycmVudFNsaWRlIDogJHtjdXJyZW50U2xpZGV9YClcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjozMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9IFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgey8qIGltYWdlIGNhcm91c2VsICovfVxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VDYXJvdXNlbCBcclxuICAgICAgICAgICAgICAgICAgbGlzdD17aW1hZ2VMaXN0fSBcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlPXtjdXJyZW50U2xpZGV9IFxyXG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U2xpZGU9e3NldEN1cnJlbnRTbGlkZX0gXHJcbiAgICAgICAgICAgICAgICAgIHNldFN0ZXBwZXI9e3NldFN0ZXBwZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDIwMDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH19IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBsaXN0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Q3JvdXNlbERlc2NyaXB0aW9uIHN0ZXBwZXI9e3N0ZXBwZXJ9ID48L0xpc3RDcm91c2VsRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IFBhcGVyLCBCb3gsIEdyb3csIEF2YXRhciwgVHlwb2dyYXBoeSxGYWRlICwgU2xpZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgbW9vbkltYWdlIGZyb20gJy4uL2ltYWdlcy9tb29uLnBuZyc7XHJcbmltcG9ydCBDcm9zc2xpbmUgZnJvbSAnLi9Dcm9zc2xpbmUnO1xyXG5pbXBvcnQgUHJvamVjdERlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvYmxhY2sucG5nJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcidcclxuICAgIH0sXHJcbiAgICBsb2dvQm94IDoge1xyXG4gICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93J1xyXG4gICAgfSxcclxuICAgIGJpZ0F2YXRhciA6IHtcclxuICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICB9LFxyXG4gICAgdGV4dFdpdGhTaGFkb3cgOiB7XHJcbiAgICAgIGNvbG9yOicjZmZmJyxcclxuICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICBtYXJnaW5MZWZ0OicydncnLFxyXG4gICAgICB0ZXh0U2hhZG93OiAnMXB4IDVweCA1cHggIzllOTk5OSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbkJveCA6IHtcclxuICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXhXaWR0aCA6ICc1MHZ3JyxcclxuICAgICAgbWFyZ2luIDogJzAgMCAwIDN2dydcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjoyMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICA8Q3Jvc3NsaW5lPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQm94fT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2dyb3d9IHsuLi4oZ3Jvdz8ge3RpbWVvdXQ6e2VudGVyOjUwMDAsIGV4aXQ6ODAwfX0gOiB7fSl9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PSdoZWxwJyBzcmM9e21vb25JbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0F2YXRhcn0vPlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYnV0dG9uJyBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFdpdGhTaGFkb3d9PiBNYW5hZ2VtZW50IEFwcCA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbkJveH0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5BbiBhcHBsaWNhdGlvbiB0aGF0IHlvdSBjYW4gZWFzaWx5IGNyZWF0ZSAmIGRlc2lnbiB5b3VyIG93biBkYXRhLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPkdldCBzdGFydGVkIHdpdGggeW91ciBHb29nbGUgYWNjb3VudCE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5UaGlzIGFwcCB3aWxsIG5vdCBrZWVwIGFueSBwZXJzb25hbCBpbmZvcm1hdGlvbi48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ3Jvc3NsaW5lPlxyXG4gICAgICAgICAgPFByb2plY3REZXNjcmlwdGlvbi8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7VHlwb2dyYXBoeSAsIFN0ZXBwZXIsIFN0ZXAsIEJveCwgU3RlcExhYmVsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzbGlkZVNvdXJjZSBmcm9tICcuL0ltYWdlU2xpZGVTb3VyY2VzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcidcclxuICAgIH0sXHJcbiAgICBpbmxpbmU6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uTGlzdCAoe3N0ZXBwZXJ9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8U3RlcHBlciBhY3RpdmVTdGVwPXtzdGVwcGVyfSBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonaW5oZXJpdCd9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVNvdXJjZS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwIGNvbXBsZXRlZD17aW5kZXggPCBzdGVwcGVyfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cclxuICAgICAgICAgICAgICAgICAgICApfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TdGVwcGVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5EZXNjcmlwdGlvbkxpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcHBlciA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdGFydEJ1dHRvbiBmcm9tIFwiLi9TdGFydEJ1dHRvblwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2Rlc2suanBnXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICByb290TWFyZ2luIDogJy0zNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudCA/ICdXRUxDT01FJyA6ICdSZWFkeSB0byBzdGFydD8nfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50PyBudWxsIDogKDxTdGFydEJ1dHRvbi8+KX1cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7QnV0dG9uICwgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFBsYXlBcnJvd1NoYXJwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICcwLjV2aCdcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcycHggMXB4IDFweCBncmF5JyxcclxuICAgICAgICBjb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9tYW5hZ2VtZW50JyBzdHlsZT17e3RleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFBsYXlBcnJvd1NoYXJwIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRTaXplIDogMzB9fS8+fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFycm93LmQwODMyOGY2MmQxOWI2NmY4ZWE4ZDZkMDA2NzI0YzhiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJibGFjay4zZjAyYTEzMjczODcwMDIyNmM4NGVkMWY1ODYzZDU5YS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGVzay4zMjA3YzFlZjk0Yzg2N2Y4MGIwZTlkZjZhYzc4ZDUyYi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWFzeS1sb2dpbi4zZTkxYjhkODg3MzU2ODkwNzlhZmQwNzZlM2UwNzQyMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaGFuZGxlLXRhYmxlLjNjNTg2OTE0YTk2ZDRhZmVkZGM1YzdhZDNkN2RmMzU0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsaW5rLW1hbmFnZW1lbnQtcGFnZS40ODAwNGQxMzNiNWZjMjI1Nzc3MDRjOTVlYjM1ZjNkOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFrZS1oZWFkZXJzLmNmZmFjNjM0ZjI5ZDM4ZGRiZDFmNDQ2N2E1NzNlYmM0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYW5hZ2VtZW50LWJhY2tncm91bmQuYTAwOGRlODEzOTU4MWIwZGFiZjE4MzJlZDFjOWM0NmUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1vb24uZjIwNmJjM2Q1YmU4MzExYzc3ZDk4OTdkYTQ0ZTFmNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm15bWVudS45ZmRkNThhY2E3NGViNDhkOTU1ZjgzNWM5ZWM4Nzk2ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2xpZGUwLjBhYTI5NWEzYjdiNGQzMDEzMjg2ZjUyNGM0NzY0Y2Q3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGFydC1yaWdodC1hd2F5LjRlMjE3MjYyZDJjOGQ4NmQ1ZTBmNmVlNDMyYWVmYmNmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ3aGl0ZS1hcnJvdy5jNDQyMmE3YmM1ZWUyM2QwODFiMzU2NmY5M2U5MWYxZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2hpdGViYWNrZ3JvdW5kLmZiMTQwZjVlODEwZGMyMTQ2ZGFkMWI2ZjAzY2FmOWM4LmpwZ1wiOyIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICAoPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8QXBwLz5cclxuICAgIDwvQ29va2llc1Byb3ZpZGVyPilcclxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmFkZSwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoMSlcclxuICAgIH0sXHJcbiAgICBidXR0b25Db250YWluZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcwLjVweCAwLjVweCAxcHggIzAwMDAwMDVjJyxcclxuICAgICAgICBtYXJnaW4gOiAnMCAxdncgMS43dmgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzZhNzQ4YycsXHJcbiAgICB9LFxyXG59KSk7XHJcbmNvbnN0IGRlZmF1bHREYXRhID0ge1xyXG4gICAgY29sdW1ucyA6IFtcclxuICAgICAgeyB0aXRsZTogJ05hbWUnLCBmaWVsZDogJ05hbWUnICwgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7IHRpdGxlOiAnU3VybmFtZScsIGZpZWxkOiAnU3VybmFtZScgfSxcclxuICAgICAgeyB0aXRsZTogJ0JpcnRoIFllYXInLCBmaWVsZDogJ0JpcnRoIFllYXInIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdQaG9uZScgLCBmaWVsZDonUGhvbmUnLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dlbmRlcicsXHJcbiAgICAgICAgZmllbGQ6ICdHZW5kZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHRpdGxlOiAnTWVtbycgLCBmaWVsZDonTWVtbyd9XHJcbiAgICBdLFxyXG4gICAgZGF0YSA6IFtcclxuICAgICAgeyBcIk5hbWVcIjogJ01laG1ldCcsICdTdXJuYW1lJzogJ0JhcmFuJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODMsIFwiUGhvbmVcIjonMDEwNDY1MDk5OTUnICxcIkdlbmRlclwiOiAxICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnQWRhbScsICdTdXJuYW1lJzogJ0FkYW0nLCBcIkJpcnRoIFllYXJcIjogMTk4NCwgXCJQaG9uZVwiOicwMTA0NjUwOTc5NScgLFwiR2VuZGVyXCI6IDIgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdNZWhtZXQnLCAnU3VybmFtZSc6ICdBdG9tJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODUsIFwiUGhvbmVcIjonMDEwNDY1MDk2OTUnICxcIkdlbmRlclwiOiAxICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnbXVsJywgJ1N1cm5hbWUnOiAnS29uZ25hJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODYsIFwiUGhvbmVcIjonMDEwNDY1MDkxOTUnICxcIkdlbmRlclwiOiAxICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnSmFjaycsICdTdXJuYW1lJzogJ0phY2snLCBcIkJpcnRoIFllYXJcIjogMTk4NywgXCJQaG9uZVwiOicwMTA0NjUwOTI5NScgLFwiR2VuZGVyXCI6IDIgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdCb2InLCAnU3VybmFtZSc6ICdCb2InLCBcIkJpcnRoIFllYXJcIjogMTk4OCwgXCJQaG9uZVwiOicwMTA0NjUwOTM5NScgLFwiR2VuZGVyXCI6IDIgLCBcIk1lbW9cIjonJ30sXHJcbiAgICBdXHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZhdWx0UGFnZSAoe3N0YXRlICwgc2V0U3RhdGUsIG1hdGNofSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZhZGUyLCBzZXRGYWRlMl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkRFTU9DbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUgLCBjb2x1bW5zIDogZGVmYXVsdERhdGEuY29sdW1ucyAsIGRhdGEgOiBkZWZhdWx0RGF0YS5kYXRhLCBkZWZhdWx0UGFnZSA6ICFzdGF0ZS5kZWZhdWx0UGFnZX0pO1xyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0RmFkZSh0cnVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNldEZhZGUyKHRydWUpICwgMTUwMCk7XHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXIgOiA4MDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbml0aWFsJyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAgTWFuYWdlbWVudCBUYWJsZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgZ3V0dGVyQm90dG9tIHN0eWxlPXt7dGV4dFNoYWRvdzonMnB4IDJweCAxcHggYmxhY2snfX0+IFxyXG4gICAgICAgICAgICAgICAgWW91IG1heSB0cnkgdGhlIERFTU8gaWYgdGhpcyB5b3VyIGZpcnN0IHRpbWUsIFxyXG4gICAgICAgICAgICAgICAgb3IgZ2V0IHN0YXJ0ZWQgcmlnaHQgYXdheSFcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8RmFkZSBpbj17ZmFkZTJ9IHRpbWVvdXQ9e3tlbnRlciA6IDMwMDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25ERU1PQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVNFIERFTU8gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURUQgUklHSFQgQVdBWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59XHJcblxyXG5EZWZhdWx0UGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGF0ZSA6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgZGVmYXVsdFBhZ2UgOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGhhc1RhYmxlIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgICAgICBjb2x1bW5zIDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIGRhdGEgOiBQcm9wVHlwZXMuYXJyYXlcclxuICAgIH0pLFxyXG4gICAgc2V0U3RhdGUgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcbiIsImltcG9ydCB7IFxyXG4gICAgQm94ICxQYXBlciwgbWFrZVN0eWxlcywgRmFkZSwgVGV4dEZpZWxkLCBUb29sdGlwLCBUeXBvZ3JhcGh5LCBDaGVja2JveFxyXG59XHJcbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnXCI7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9pbWFnZXMvYXJyb3cucG5nJztcclxuaW1wb3J0IHsgc2F2ZUhlYWRlcnMgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gJy4uL3V0aWwvTWFuYWdlbWVudEFQSSc7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4uL2N1c3RvbUhvb2svU25hY2tCYXInO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBjb250YWluZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEyMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzEwdmgnLFxyXG4gICAgfSxcclxuICAgIGZvcm1Sb290IDoge1xyXG4gICAgICAgICcmID4gKic6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAnMC41dmggMXZ3JyxcclxuICAgICAgICAgICAgd2lkdGg6ICc2MGNoJyxcclxuICAgICAgICAgICAgbWluV2lkdGggOiAnNDBjaCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXJyb3cgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwdmgnLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmQgOiBgbm8tcmVwZWF0IGNlbnRlci84MCUgdXJsKCR7YXJyb3d9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgOiAnY29udGFpbicsXHJcbiAgICAgICAgbWFyZ2luTGVmdCA6ICczdncnLFxyXG4gICAgICAgIHRyYW5zZm9ybSA6ICdyb3RhdGUoOTBkZWcpJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uIDoge1xyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBkZWZhdWx0SGVhZGVyID0ge1xyXG4gICAgXCJoZWFkZXIwXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyMVwiIDogJycsXHJcbiAgICBcImhlYWRlcjJcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIzXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNFwiIDogJycsXHJcbiAgICBcImhlYWRlcjVcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI2XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyN1wiIDogJycsXHJcbiAgICBcImhlYWRlcjhcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI5XCIgOiAnJyxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJzICh7aXNMb2FkaW5nfSkge1xyXG4gICAgLy8gc3R5bGUsIGNvb2tpZVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IFJlYWN0LnVzZUNvbnRleHQoUHJvZ3Jlc3NDb250ZXh0KTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJ10pO1xyXG4gICAgLy8gc3RhdGVzXHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgICBjb25zdCBbcmVzdWx0U25hY2sgLCBzZXRSZXN1bHRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZSwgY29udGVudCA6ICcnfSk7XHJcbiAgICBjb25zdCBbZGF0YSAsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGhlYWRlcnMgOiBkZWZhdWx0SGVhZGVyLFxyXG4gICAgICAgIGdyb3VwaW5ncyA6IEFycmF5KDEwKS5maWxsKGZhbHNlKSxcclxuICAgIH0pXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGRhdGFSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgICAgZ2V0TWFuYWdlbWVudFRhYmxlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSA6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5nTGVuZ3RoID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncy5sZW5ndGggOiAwIDogMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzID8gWy4uLnJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzXSA6IFtdIDogW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIC0gZ3JvdXBpbmdMZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cGluZ3MucHVzaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzID8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzIDoge30gOiB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnNMZW5ndGggPSBPYmplY3QudmFsdWVzKGhlYWRlcnMpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBoZWFkZXJzTGVuZ3RoOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbYGhlYWRlciR7aX1gXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge2hlYWRlcnMsZ3JvdXBpbmdzfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtoZWFkZXJzLCBncm91cGluZ3N9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7ICAvLyB1bmF1dGhvcml6ZWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAzNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQgOiBgUGxlYXNlIGxvZyBpbiBhZ2Fpbi5gfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBlcnJvciAoY29kZSA6ICR7cmVzcG9uc2Uuc3RhdHVzfSlgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAzNTAwKTtcclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICApXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyb3VwaW5ncyA6IFtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuZ3JvdXBpbmdzXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxbZGF0YS5oZWFkZXJzLCBkYXRhLmdyb3VwaW5nc10pO1xyXG5cclxuICAgIC8vIGVmZmVjdHNcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+eyBcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVN1Ym1pdChkYXRhUmVmLmN1cnJlbnQuaGVhZGVycywgZGF0YVJlZi5jdXJyZW50Lmdyb3VwaW5ncywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGhhbmRsZVByb2dyZXNzKHJlc3VsdCA9PT0gJ2Vycm9yJyA/ICdlcnJvcicgOiAnc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyBldmVudHNcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoaGVhZGVycywgZ3JvdXBpbmdzLCBpc0F1dG9TYXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKGhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpKSB7IC8vIDE16riA7J6QIOydtOyDgSDsoJztlZwg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGhlYWRlcnMpLmZpbHRlcih2PT52KS5sZW5ndGggPT09IDApIHsgICAgIC8vIOu5hOyWtOyeiOydhCDqsr3smrAg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZUhlYWRlcnMoaGVhZGVycyxncm91cGluZ3MpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzQXV0b1NhdmUpIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSwgY29udGVudCA6IHJlc3BvbnNlLnJlc3VsdH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDIwMDApO1xyXG4gICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3Blbjp0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50OidQbGVhc2UgbG9nIGluIGFnYWluLid9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBbYGhlYWRlciR7aW5kZXh9YF0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUdyb3VwaW5ncyA9IChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgZ3JvdXBpbmdzIDogZGF0YS5ncm91cGluZ3MubWFwKCh2LGkpPT4gaT09PWluZGV4PyBlLnRhcmdldC5jaGVja2VkIDogdil9KTtcclxuICAgIH1cclxuICAgIC8vIGNvbXBvbmVudFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXIgOiAxNTAwfX0+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17NH0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVJvb3R9IGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nZGl2Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGNvbG9yPSd0ZXh0UHJpbWFyeScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIEVkaXQgRm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbG9yPXtPYmplY3QudmFsdWVzKGRhdGEuaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkgPyAnYmx1ZScgOiAncmVkJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29sb3I9J2luaXRpYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlciBzaG91bGQgYmUgbGVzcyB0aGFuIDE1IGxldHRlcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5oZWFkZXJzKS5tYXAoKGhlYWRlcixpbmRleCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2luZGV4PT09MD8gdHJ1ZTpmYWxzZX1cclxuICAgICAgICAgICAgICAgIGlkPXtgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtgaGVhZGVyLSR7aW5kZXgrMX1gfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaGVhZGVyc1tgaGVhZGVyJHtpbmRleH1gXX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlSW5wdXRDaGFuZ2UoZSxpbmRleCl9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17ZGF0YS5oZWFkZXJzW2BoZWFkZXIke2luZGV4fWBdLmxlbmd0aCA+IDE1ID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiXHJcbllvdSBjYW4gYXJyYW5nZSB0aGUgZGF0YSB3aXRoIGEgdmFsaWQgaGVhZGVyLCBcclxuVW5pcXVlIHZhbHVlcyBhcmUgbm90IGNvbW1vbmx5IHVzZWQgZm9yIHRoaXMgZnVuY3Rpb24gaW4gZ2VuZXJhbC5cclxuZS5nLikgbmFtZSwgYWRkcmVzcywgbW9iaWxlIE5PLiBldGMuXHJcblwiXHJcbiAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdyaWdodCcgZW50ZXJEZWxheT17MjAwfSBsZWF2ZURlbGF5PXsyMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkYXRhLmdyb3VwaW5nc1tpbmRleF19IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUdyb3VwaW5ncyhlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmRleD09PTA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PiBHcm91cGluZyE/PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiU1VCTUlUXCIgYXJpYS1sYWJlbD0nc3VibWl0JyBwbGFjZW1lbnQ9J3RvcCcgZW50ZXJEZWxheT17MjAwfSBsZWF2ZURlbGF5PXs0MDB9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gb25Nb3VzZU92ZXI9eyhlKT0+ZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInfVxyXG4gICAgICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZVN1Ym1pdChkYXRhLmhlYWRlcnMgLCBkYXRhLmdyb3VwaW5ncyl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtgSGVhZGVyIHNob3VsZCBiZSBsZXNzIHRoYW4gMTUgbGV0dGVycyA6KGB9IHN0YXR1cz1cImVycm9yXCIvPlxyXG4gICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtyZXN1bHRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0UmVzdWx0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgY29udGVudD17cmVzdWx0U25hY2suY29udGVudH0gc3RhdHVzPXtyZXN1bHRTbmFjay5zdGF0dXM9PT0nZXJyb3InPyAnZXJyb3InIDogJ3N1Y2Nlc3MnfS8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuSGVhZGVycy5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSc7XHJcbmltcG9ydCBNYW51YWxEaWFsb2cgZnJvbSBcIi4vTWFudWFsRGlhbG9nXCI7XHJcbmltcG9ydCB7IG9wdGlvbnMsbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vVGFibGVPcHRpb25zXCI7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IERlZmF1bHRQYWdlIGZyb20gJy4vRGVmYXVsdFBhZ2UnO1xyXG5pbXBvcnQgcGFyc2VEYXRhIGZyb20gJy4uL3V0aWwvcGFyc2VEYXRhJztcclxuaW1wb3J0IFNhdmVCdXR0b24gZnJvbSAnLi9TYXZlQnV0dG9uJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4vLyB1c2VFZmZlY3TroZwgZGF0YSwgY29sdW1ucyDqsIAg67OA6rK965CgIOuVjOuniOuLpCDshJzrsoTsl5Ag7KCA7J6lIO2bhCDqsLHsi6BcclxuLy8gLi91dGlsIOqyveuhnOyXkCDroZzsp4Eg7J6R7ISxXHJcbi8vIO2GteyLoOyXkCDrjIDtlZwgdGVzdGNvZGXsnpHshLFcclxuLy8gY29sdW1uc+yZgCBkYXRh7J2YIOqwgSDqsJLrk6Tsl5Ag64yA7ZWcIOustOqysOyEsSDssrTtgaxcclxuLy8gcHJvcHNUeXBlIOyekeyEsVxyXG4vLyBTaWRlTWVudUxpc3QgPT4gTG9naW7snLzroZwg67OA6rK9LCDruYTroZzqt7jsnbgg7IucIExPR0lO7Jy866GcIOuztOydvCDqsoMsIOuhnOq3uOyduOyLnCBNWSBNRU5V66GcIOuztOq4sFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnRUYWJsZSh7aXNMb2FkaW5nfSkge1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IFJlYWN0LnVzZUNvbnRleHQoUHJvZ3Jlc3NDb250ZXh0KTtcclxuICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZSddKTtcclxuICAvLyBzdGF0ZXNcclxuICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KTtcclxuICBjb25zdCBbc2F2ZWRTbmFjayAsIHNldFNhdmVkU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICBjb25zdCBbZXJyb3JTbmFjayAsIHNldEVycm9yU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICBjb25zdCBbZGlhbG9nLCBzZXREaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoeyAgLy8g7LWc7LSIIEFQSeuhnCDrsJvslYTsmKTripQg64+Z7J6R7ZWE7JqUXHJcbiAgICBkZWZhdWx0UGFnZSA6IHRydWUsXHJcbiAgICBoYXNUYWJsZSA6IGZhbHNlLFxyXG4gICAgY29sdW1uczogW10sXHJcbiAgICBkYXRhOiBbXSxcclxuICB9KTtcclxuICBjb25zdCB0YWJsZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgICAgZ2V0TWFuYWdlbWVudFRhYmxlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1cyA6ICR7cmVzcG9uc2Uuc3RhdHVzfSAsIGRhdGEgOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpfWApO1xyXG4gICAgICAgICAgLy8g7Jyg7KCAIO2ZleyduOuQkOqzoCDthYzsnbTruJTrj4Qg67mE7Ja07J6I7KeAIOyViuydhCDqsr3smrBcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXM9PT0yMDAgJiYgcmVzcG9uc2UuZGF0YS5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntzZXRTbmFjayh7b3Blbjp0cnVlfSl9LDQwMCk7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBjb2x1bW5zIDogcGFyc2VEYXRhKHJlc3BvbnNlLmRhdGEuaGVhZGVycyAsIHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzKSxcclxuICAgICAgICAgICAgICBkYXRhIDogcmVzcG9uc2UuZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRQYWdlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgaGFzVGFibGUgOiB0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGV2ZW50c1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge3NldERpYWxvZyh7b3BlbiA6IGZhbHNlfSk7fTtcclxuICBjb25zdCBoYW5kbGVPblNhdmUgPSAoaXNBdXRvU2F2ZSkgPT4ge1xyXG4gICAgICAvLyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIOydmCByZWbsl5DshJwg7Iug66Kw64+E7J6I64qUIOuNsOydtO2EsCDssLjsobBcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICBjb25zdCBncm91cGluZ3MgPSBbXTtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgb2JqW2BoZWFkZXIke2l9YF0gPSB2LnRpdGxlO1xyXG4gICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgIH0se30pXHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuZGF0YS5mb3JFYWNoKCh2LGkpPT57XHJcbiAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNhdmVEYXRhKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBpZihlcnIpIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYoIWlzQXV0b1NhdmUpIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gIH1cclxuICBcclxuICAvLyBlZmZlY3RzXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHsgICAvLyB3aW5kb3cg642U67iU7YG066atIOydtOuypO2KuCDstpTqsIAsIOuPhOybgOunkCBvcGVuXHJcbiAgICBjb25zdCBvbmRiQ2xpY2sgPSAoKSA9PiBzZXREaWFsb2coe29wZW4gOiAhZGlhbG9nLm9wZW59KTtcclxuICAgIGNvbnN0IG9uS2V5ZG93biA9IChlKSA9PiB7ICAgLy8gY3RybCArIHProZwg7KCA7J6lIGV2ZW50XHJcbiAgICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0ubWF0Y2goXCJNYWNcIikgPyBlLm1ldGFLZXkgOiBlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSA4Mykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoYW5kbGVPblNhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XHJcbiAgICAgIC8vIOy0iOq4sOygkeq3vOydmCDqsr3smrAg642w7J207YSw6rCAIOyXhuyWtCDsl5Drn6wg67Cc7IOd7ZWgIOyImCDsnojslrQg7IK87ZWt7Iud7Jy866GcIO2MkOuLqCDtm4Qg7Ja466eI7Jq07Yq47Iuc7J2YIGZldGNoQVBJ7Iuk7ZaJXHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyID8gaGFuZGxlT25TYXZlKHRydWUpIDogbnVsbCA6IG51bGw7XHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyID8gaGFuZGxlUHJvZ3Jlc3MoJ3N1Y2Nlc3MnKSA6IG51bGwgOiBudWxsO1xyXG4gIH07XHJcbn0sIFtdKTtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuICBjb25zdCBNYXJnaW4gPSAoKSA9PiAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0+PC9Cb3g+KTsgIC8vIOyXrOuwsVxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAge1xyXG4gICAgc3RhdGUuZGVmYXVsdFBhZ2UgP1xyXG4gICAgICAoPERlZmF1bHRQYWdlIHN0YXRlPXtzdGF0ZX0gc2V0U3RhdGU9e3NldFN0YXRlfS8+KVxyXG4gICAgOiBcclxuICAgICg8Qm94PlxyXG4gICAgICAgIDxNYW51YWxEaWFsb2cgb3Blbj17ZGlhbG9nLm9wZW59IG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfS8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgIHRhYmxlUmVmPXt0YWJsZVJlZn1cclxuICAgICAgdGl0bGU9e1xyXG4gICAgICA8U2F2ZUJ1dHRvbiBzZXRTYXZlZFNuYWNrPXtzZXRTYXZlZFNuYWNrfSBcclxuICAgICAgLy8g66eI7Jq07Yq4IOydtO2bhOyXkCDsoJHqt7ztlYTsmpRcclxuICAgICAgZGF0YU1hbmFnZXI9e3RhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIDoge319Lz5cclxuICAgIH1cclxuICAgICAgY29sdW1ucz17c3RhdGUuY29sdW1uc31cclxuICAgICAgZGF0YT17c3RhdGUuZGF0YX1cclxuICAgICAgbG9jYWxpemF0aW9uPXtsb2NhbGl6YXRpb259IC8vIOuhnOy7rOudvOydtOymiFxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfSAvLyDrgrTrs7TrgrTquLAsIOq3uOujqO2VkVxyXG4gICAgICBhY3Rpb25zPXtbLy8g66mA7YuwIOyFgOugieyFmCDsnpHsl4VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvb2x0aXAgOiAnUmVtb3ZlIHRoZSBTZWxlY3RlZCByb3cocyknLFxyXG4gICAgICAgICAgICBpY29uIDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgIG9uQ2xpY2sgOiAoZSAsIGRlbGV0aW9ucykgPT4geyAgLy8g7ISg7YOd7ZWcIOyytO2BrOuwleyKpOyXkCDrjIDtlbQg66qo65GQIOyCreygnCDsp4TtlolcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4uc3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkZWxldGlvbnMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoZGF0YS5pbmRleE9mKHYpLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldkRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2RGF0YSAsIGRhdGF9O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF19IFxyXG4gICAgICBlZGl0YWJsZT17e1xyXG4gICAgICAgIG9uUm93QWRkOiAobmV3RGF0YSkgPT4gIC8vIOy2lOqwgFxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBvblJvd1VwZGF0ZTogKG5ld0RhdGEsIG9sZERhdGEpID0+ICAvLyDsiJjsoJVcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvbGREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhW2RhdGEuaW5kZXhPZihvbGREYXRhKV0gPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSduZWVkIHNvbWUgaGVscD8gPyBkb3VibGUtY2xpY2sgYW55IHNwYWNlICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c2F2ZWRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U2F2ZWRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J1NBVkVEICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17ZXJyb3JTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0RXJyb3JTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J0VSUk9SICEnIHN0YXR1cz1cImVycm9yXCIvPlxyXG4gICAgPC9Cb3g+XHJcbiAgICApfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5NYW5hZ2VtZW50VGFibGUucHJvcFR5cGVzID0ge1xyXG4gIGlzTG9hZGluZyA6IFByb3BUeXBlcy5ib29sXHJcbn0iLCJcclxuaW1wb3J0IHtEaWFsb2csXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIExpc3QsXHJcbiAgICBMaXN0SXRlbSxcclxuICAgIExpc3RJdGVtVGV4dCxcclxuICAgIEJveCxcclxuICAgIG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgICBpY29uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzN2dydcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFudWFsRGlhbG9nIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7b3Blbiwgb25DbG9zZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGljb25zID0gW1xyXG4gICAgICAgIHtpY29uIDogJ2FkZF9ib3gnICwgZGVzY3JpcHRpb24gOiAnW0FkZF0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnW0VkaXRdIHJlY29yZHMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2VhcmNoJyAsIGRlc2NyaXB0aW9uIDogJ1R5cGUgZG93biB3b3JkcyB0byBbc2VhcmNoXS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzYXZlX2FsdCcgLCBkZXNjcmlwdGlvbiA6ICdbRG93bmxvYWRdIGZpbGVzIGluIENWUyBmb3JtYXQuJ30sXHJcbiAgICAgICAge2ljb24gOiAndmlld193ZWVrJyAsIGRlc2NyaXB0aW9uIDogJ1tTZWxlY3RdIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW2RlbGV0ZV0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjaGVja19ib3gnICwgZGVzY3JpcHRpb24gOiAnIOKRoCBTZWxlY3QgdGhlIGNoZWNrYm94IG9uIHRoZSByb3cuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZmFjdF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENoZWNrIHRoZSBudW1iZXIgb2YgdGhlIHJvd3Mgc2VsZWN0ZWQuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZGVsZXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaIgQ2xpY2sgdGhlIEJpbiBpY29uIG9uIHRoZSByaWdodCBhYm92ZS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdwbGF5bGlzdF9hZGRfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBbRWRpdF0gaGVhZGVycy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdtZW51JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgT3BlbiBNWVBBR0UnfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDbGljayB0aGUgUGVuY2lsIGljb24nfSxcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPERpYWxvZyBvbkNsb3NlPXtvbkNsb3NlfSBvcGVuPXtvcGVufT5cclxuICAgICAgICA8RGlhbG9nVGl0bGU+IEJBU0lDIE1BTlVBTCA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpY29ucy5tYXAoKGljb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtgJHtpY29ufSArICR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3BhbicgY2xhc3NOYW1lPXtgbWF0ZXJpYWwtaWNvbnMgJHtjbGFzc2VzLmljb259YH0gc3R5bGU9e3t3aWR0aDonM3Z3J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpY29uLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICAgKVxyXG59XHJcbk1hbnVhbERpYWxvZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGVuIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2UgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIFRvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmVCdXR0b24gKHtzZXRTYXZlZFNuYWNrICwgZGF0YU1hbmFnZXJ9KSB7XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrICgpIHtcclxuICAgICAgICAgIC8vIFNBVkUgRVZFTlQgdXRpbCA+IE1hbmFnZW1lbnRBUEkuc2F2ZURhdGEg66eM65Ok7Ja07IScIOy9nO2VmOq4sFxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICB9LHt9KTtcclxuICAgICAgICAgIGRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgIHJlc3VsdCA6IFxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShkYXRhKX1cclxuICAgICAgICAgICR7Z3JvdXBpbmdzfVxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgICAgICBgKVxyXG4gICAgICAgIHNhdmVEYXRhKGhlYWRlcnMsZ3JvdXBpbmdzLGRhdGEpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8VG9vbHRpcCB0aXRsZT0nQ2xpY2sgdG8gU0FWRSAoIEN0cmwgKyBTICknPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBcclxuICAgICAgICBvbkNsaWNrPXsoKT0+b25DbGljaygpfT5cclxuICAgICAgICAgIFNBVkVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKVxyXG59XHJcblxyXG5TYXZlQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBzZXRTYXZlZFNuYWNrIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBkYXRhTWFuYWdlciA6IFByb3BUeXBlcy5vYmplY3RcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7QWRkQm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG4vLyBEQVRBIFRBQkxFIE9QVElPTlNcclxuXHJcbiBleHBvcnQgY29uc3Qgb3B0aW9ucz0ge1xyXG4gICAgZXhwb3J0QnV0dG9uOiB0cnVlLFxyXG4gICAgZ3JvdXBpbmc6dHJ1ZSxcclxuICAgIHNlbGVjdGlvbjp0cnVlLFxyXG4gICAgaGVhZGVyU3R5bGU6eyBcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnNDb2x1bW5JbmRleDotMSwgIC8vIOyVoeyFmCDslYTsnbTsvZjsnITsuZhcclxuICAgIGNvbHVtbnNCdXR0b24gOiB0cnVlLCBcclxuICAgIGRlYm91bmNlSW50ZXJ2YWwgOiAxNjAsIC8vIOuhnOuUqeyLnOqwhFxyXG4gICAgcGFnZVNpemUgOiAxNSwgICAgICAgICAgLy8g7Y6Y7J207KeA7IKs7J207KaIXHJcbiAgICBwYWdlU2l6ZU9wdGlvbnMgOiBbNSwgMTUsIDMwLCA1MCwgMTAwXSwgLy8g7Y6Y7J207KaIIOyCrOydtOymiCDsooXrpZhcclxuICB9XHJcbiBleHBvcnQgY29uc3QgbG9jYWxpemF0aW9uID0ge1xyXG4gICAgcGFnaW5hdGlvbiA6IHsgbGFiZWxEaXNwbGF5ZWRSb3dzIDogJ3tjb3VudH0gcm93cyB8IHtmcm9tfS17dG99JyAsIH0sXHJcbiAgICB0b29sYmFyOiB7blJvd3NTZWxlY3RlZDogJ3swfSByb3cocykgc2VsZWN0ZWQnfSxcclxuICAgIGhlYWRlcjoge2FjdGlvbnM6ICdFZGl0J30sXHJcbiAgICBib2R5OiB7ZW1wdHlEYXRhU291cmNlTWVzc2FnZTogXHJcbiAgICAgICAgKFxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAge2BObyBSZWNvcmRzIHRvIGRpc3BsYXlgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIGVuZEljb249ezxBZGRCb3gvPn1cclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtgQ2xpY2sgdGhlIHBsdXMgaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUgZm9yIGEgbmV3IHJlY29yZC4gYH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICB9XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge1Rvb2xiYXIsIERyYXdlciAsIEJ1dHRvbiAsIEdyaWQsXHJcbiAgICAgRGl2aWRlciwgQXBwQmFyIGFzIEFwcGJhcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGlkZU9uU2Nocm9sbCBmcm9tIFwiLi4vY3VzdG9tSG9vay9IaWRlT25TY2hyb2xsXCI7XHJcbmltcG9ydCBTaWRlTWVudUxpc3QgZnJvbSBcIi4vU2lkZU1lbnVMaXN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgU2lnbk91dEJ1dHRvbiBmcm9tIFwiLi9TaWduT3V0QnV0dG9uXCI7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDoxOCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOjE4LFxyXG4gICAgfSxcclxuICAgIGxlZnQgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6MzAsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1zdGFydCdcclxuICAgIH0sXHJcbiAgICBjZW50ZXIgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgcmlnaHQgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6NDUsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1lbmQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nOmAwICR7dGhlbWUuc3BhY2luZygzKX1gXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2IChwcm9wcykge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVudSA6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yLCBvcGVuKSA9PiAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBmbGFnID0gb3Blbj8gc3RhdGVbYW5jaG9yXSA/IGZhbHNlIDogdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBmbGFnIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGFuY2hvciA9IHByb2ZpbGUubmFtZT8gJ01ZUEFHRScgOidMT0dJTic7XHJcbiAgICBjb25zdCBsaW5rcyA9IFsnZ3Vlc3Rib29rJywnbWFuYWdlbWVudCddO1xyXG4gICAgY29uc3QgTG9nb3V0QnRuID0gcHJvZmlsZS5uYW1lPyA8U2lnbk91dEJ1dHRvbi8+IDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGlkZU9uU2Nocm9sbCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxBcHBiYXIgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Ym94U2hhZG93Oidub25lJ319PlxyXG4gICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiBIb21lIDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7bGlua31gfSBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0ga2V5PXtsaW5rfT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4ge2xpbmt9IDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+PHNwYW4+PC9zcGFuPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FuY2hvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7TG9nb3V0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXIgb3Blbj17c3RhdGVbYW5jaG9yXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSB2YXJpYW50PSdwZXJzaXN0ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1NpZGVNZW51TGlzdCggey4uLnByb3BzLCBhbmNob3IgLHRvZ2dsZURyYXdlciAsIHByb2ZpbGV9ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwYmFyPlxyXG4gICAgICAgIDwvSGlkZU9uU2Nocm9sbD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUF2YXRhciAsIERpdmlkZXIsIExpc3RJdGVtLCBUeXBvZ3JhcGh5ICwgQXZhdGFyLCBJY29uQnV0dG9uICxcclxuICAgICBNb2RhbCwgQm94LCBCdXR0b24sXHJcbiAgICAgUGFwZXIsXHJcbiAgICAgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi9TaWduSW5CdXR0b24nO1xyXG5pbXBvcnQgZ29vZ2xlU2lnbmluSW1hZ2UgZnJvbSAnLi4vYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyc7XHJcbmltcG9ydCB7cmVkaXJlY3RHb29nbGVMb2dpbn0gZnJvbSAnLi4vdXRpbC9Mb2dpbkFQSSc7XHJcbmltcG9ydCB7RWRpdCwgSW5mbywgRGVsZXRlRm9yZXZlciwgV2FybmluZ30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQge0dsb2JhbFNuYWNrYmFyQ29udGV4dH0gZnJvbSAnLi4vYXBwJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxpc3QgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMjN2dycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnc3RhcnQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtVGV4dCA6IHtcclxuICAgICAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbGFyZ2VBdmF0YXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICB9LFxyXG4gICAgaW5saW5lIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnaW5saW5lJ1xyXG4gICAgfSxcclxuICAgIGxpc3RUZXh0IDoge1xyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsIDoge1xyXG4gICAgICAgIHRvcCA6ICc1MCUnLFxyXG4gICAgICAgIGxlZnQgOiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgbWluV2lkdGggOiA0MDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbW9kYWxSb3dCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBtb2RhbENvbEJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcidcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVMaXN0ICh7YW5jaG9yICwgdG9nZ2xlRHJhd2VyLCBwcm9maWxlfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlR2xvYmFsU25hY2tiYXIgPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbFNuYWNrYmFyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZW1haWxJbnB1dCwgc2V0RW1haWxJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrTG9naW4gKCkge1xyXG4gICAgICAgIHJlZGlyZWN0R29vZ2xlTG9naW4oKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2tNb2RhbCA9ICgpID0+IHNldE1vZGFsKHRydWUpO1xyXG4gICAgY29uc3QgaGFuZGxlT25DbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0RW1haWxJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZW1haWxJbnB1dCA9PT0gcHJvZmlsZS5lbWFpbCkge1xyXG4gICAgICAgICAgICBzYXZlRGF0YSh7fSxbXSxbe31dKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlR2xvYmFsU25hY2tiYXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBkYXRhLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgfSwxNTAwKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVHbG9iYWxTbmFja2Jhcih7XHJcbiAgICAgICAgICAgICAgICBvcGVuOnRydWUsIFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OidlcnJvcidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IHByb2ZpbGU/IHByb2ZpbGUubmFtZT8gdHJ1ZSA6IGZhbHNlIDogZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpc0xvZ2dlZD8gJ1BST0ZJTEUnIDogJ0xPR0lOIE1FTlUnfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG5cclxuICAgICAgICAgICAge2lzTG9nZ2VkPyBcclxuXHJcbiAgICAgICAgICAgICg8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3Byb2ZpbGUucGljdHVyZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlQXZhdGFyfSBhbHQ9e3Byb2ZpbGUubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9maWxlLm5hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGV4dH0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nRU1BSUwgOiAnIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0nc3BhbicgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvIGNvbG9yPSdwcmltYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdFRElUIEhFQURFUlMnLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2hlYWRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IGNvbG9yPSdwcmltYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmcgY29sb3I9J3NlY29uZGFyeScgc3R5bGU9e3ttYXJnaW5SaWdodDonMXZ3J319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHNlY29uZGFyeT0nUkVNT1ZFIEFMTCBEQVRBJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nZW5kJyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcicgb25DbGljaz17aGFuZGxlT25DbGlja01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIOuqqOuLrCAqL31cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbj17bW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVPbkNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtY29udGVudHNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFJvd0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdzdGFydCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVyIGNvbG9yPSdzZWNvbmRhcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC10aXRsZVwiIHZhcmlhbnQ9J2J1dHRvbicgZGlzcGxheT0nYmxvY2snIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXV0aW9uIDogcGVybWFuZW50IGRlbGV0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbENvbEJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLWNvbnRlbnRzXCIgdmFyaWFudD0nYm9keTEnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YEFsbCBkYXRhIHdpbGwgYmUgZGVsZXRlZCBhbmQgY2Fubm90IGJlIHJlY292ZXJlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBjb3JyZWN0bHkgdG8gY29udGludWUuYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nPntwcm9maWxlLmVtYWlsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsUm93Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9J0UtTUFJTCcgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICg8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gb25DbGljaz17aGFuZGxlT25DbGlja0xvZ2lufT5cclxuICAgICAgICAgICAgICAgIDxTaWduSW5CdXR0b24gc2lnbkluPXtnb29nbGVTaWduaW5JbWFnZX0vPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPil9XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5NZW51TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBhbmNob3IgOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0b2dnbGVEcmF3ZXIgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZmlsZSA6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyxCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDAlJyxcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge3NpZ25Jbn0gPSBwcm9wczsgLy8g7J2066+47KeAXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3Bhbic+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzaWduSW59IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PjwvaW1nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IEV4aXRUb0FwcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcCc7XHJcbmltcG9ydCB7IExpc3RJdGVtICwgSWNvbkJ1dHRvbiwgVG9vbHRpcH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBsb2dvdXQgOiB7XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJyxcclxuICAgICAgICBwYWRkaW5nIDogJzJweCcsXHJcbiAgICAgICAgbWFyZ2luIDogMCxcclxuICAgICAgICB3aWR0aCA6ICdhdXRvJyxcclxuICAgIH1cclxufSkpXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgZm9udFdlaWdodDonYm9sZCdcclxuICAgIH0sXHJcbiAgfSkpKFRvb2x0aXApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7ICAgIC8vIOuqqOuToCDsv6DtgqQg7IKt7KCc7JmAIHByb2ZpbGXsoJzqsbBcclxuICAgICAgICByZW1vdmVDb29raWUoJ3Byb2ZpbGUnKTtcclxuICAgICAgICByZW1vdmVDb29raWUoJ3VzZXInKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb3V0fT5cclxuICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9J0xvZy1vdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7cGFkZGluZzo0fX0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPiAgICBcclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tICcuL3NlcnZlclVSTCc7XHJcblxyXG4vLyBndWVzdGJvb2sgbGlzdCDrsJvslYTsmKTquLAgMzDqsJxcclxuZXhwb3J0IGNvbnN0IGdldEd1ZXN0Ym9va0xpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2d1ZXN0Ym9va2Ase3dpdGhDcmVkZW50aWFsczp0cnVlfSkpXHJcbn1cclxuXHJcbi8vIOuTseuhnVxyXG5leHBvcnQgY29uc3QgcG9zdEd1ZXN0Ym9vayA9IChjb250ZW50LCBuYW1lLCBwaWN0dXJlKSA9PiB7XHJcbiAgICBpZiAoIW5hbWUgfHwgIXBpY3R1cmUgfHwgIWNvbnRlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcG9zdEd1ZXN0Ym9vayA6IHBhcmFtZXRlciBoYXMgZW1wdHlgKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vZ3Vlc3Rib29rYCAsIHtcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBwaWN0dXJlXHJcbiAgICAgICAgfSxcclxuICAgIH0sIHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcbi8vIOyImOyglVxyXG4vLyBleHBvcnQgY29uc3QgdXBkYXRlR3Vlc3Rib29rID0gKGFydGljbGVJZCwgY29udGVudCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGF4aW9zLnB1dChgJHtzZXJ2ZXJVUkx9L2d1ZXN0Ym9va2AsIHtcclxuLy8gICAgICAgICBkYXRhIDoge1xyXG4vLyAgICAgICAgICAgICBhcnRpY2xlSWQsXHJcbi8vICAgICAgICAgICAgIGNvbnRlbnRcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LHt3aXRoQ3JlZGVudGlhbHMgOiB0cnVlfSlcclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUd1ZXN0Ym9vayA9IChhcnRpY2xlX2lkKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke3NlcnZlclVSTH0vZ3Vlc3Rib29rYCAsIHtcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBhcnRpY2xlX2lkXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gXCIuL3NlcnZlclVSTFwiO1xyXG5cclxuLy8gVVJMIGV4cG9ydFxyXG4vLyBzZXZlcuyXkOyEnCDrsJvsnYAgdXJs66GcIOumrOuLpOydtOugie2KuFxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RHb29nbGVMb2dpbiA9ICgpID0+IGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2xvZ2luYCkudGhlbihyZXMgPT4gbG9jYXRpb24uYXNzaWduKHJlcy5kYXRhKSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbkFuZFByb2ZpbGUgPSAodG9rZW4pID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vbG9naW5gLCB7dG9rZW59ICx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZSxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2U9PlByb21pc2UucmVzb2x2ZShyZXNwb25zZS5kYXRhKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tICcuL3NlcnZlclVSTCc7XHJcblxyXG4vLyDthYzsnbTruJQg642w7J207YSwIOuwm+yVhOyYpOq4sCBjb29raWXsl5Ag64u06ri0IHRva2Vu7IKs7JqpXHJcbmV4cG9ydCBjb25zdCBnZXRNYW5hZ2VtZW50VGFibGUgPSAgKCkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5nZXQoYCR7c2VydmVyVVJMfS9tYW5hZ2VtZW50YCx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOnRydWVcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVIZWFkZXJzID0gKGhlYWRlcnMsIGdyb3VwaW5ncykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHNhdmluZyBoZWFkZXJzIDogXHJcbiAgICBoZWFkZXJzIDogJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgIGdyb3VwaW5ncyA6ICR7SlNPTi5zdHJpbmdpZnkoZ3JvdXBpbmdzKX1gKTtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vaGVhZGVyc2AsIHtcclxuICAgICAgICAvLyBkYXRhXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBncm91cGluZ3NcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSkpOyAgICAvLyDsv6DtgqTsmYAg7ZWo6ruYXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlRGF0YSA9IChoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vZGF0YWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5ncyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoNDAwKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgfSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKGhlYWRlcnMgLCBncm91cGluZ3MpID0+IHtcclxuICBjb25zb2xlLmxvZyhgZGF0YSBwYXJzaW5nISEhIWApXHJcbiAgICByZXR1cm4gKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLm1hcCgodmFsdWUsaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSA6IHZhbHVlLFxyXG4gICAgICAgIGZpZWxkIDogdmFsdWUsXHJcbiAgICAgICAgZ3JvdXBpbmcgOiBncm91cGluZ3NbaW5kZXhdXHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9IiwiZXhwb3J0IGRlZmF1bHQgXCJodHRwczovL21hbmFnZW1lbnQtYXBwbGUuaGVyb2t1YXBwLmNvbVwiO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiOyJdLCJzb3VyY2VSb290IjoiIn0=