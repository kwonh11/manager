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
          maxAge: 7200
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
      height: '50vh',
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

  var _React$useState = React.useState(10),
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
    variant: "h3"
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
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _customHook_SnackBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customHook/SnackBar */ "./src/customHook/SnackBar.js");
/* harmony import */ var _customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customHook/useOnFirstRender */ "./src/customHook/useOnFirstRender.js");
/* harmony import */ var _util_GuestbookAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/GuestbookAPI */ "./src/util/GuestbookAPI.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

  var _React$useState = React.useState({
    open: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      snack = _React$useState2[0],
      setSnack = _React$useState2[1];

  var _React$useState3 = React.useState({
    input: '',
    chatLogs: []
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var _React$useState5 = React.useState(true),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      transportable = _React$useState6[0],
      setTransportable = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      tooFastSnack = _React$useState8[0],
      setTooFastSnack = _React$useState8[1];

  var logRef = React.useRef(state.chatLogs);
  var chatContainerRef = React.useRef(); // constructor

  Object(_customHook_useOnFirstRender__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    Object(_util_GuestbookAPI__WEBPACK_IMPORTED_MODULE_7__["getGuestbookList"])().then(function (result) {
      console.log(result.data);
      var list = result.data;
    })["catch"](function (err) {
      throw new Error(err);
    });
  });

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

        if (input.value) {
          // post API & get API
          if (!transportable) {
            setTooFastSnack(true);
          } else {
            Object(_util_GuestbookAPI__WEBPACK_IMPORTED_MODULE_7__["postGuestbook"])(input.value).then(function (response) {
              if (response.status === 200) {
                setTimeout(setTransportable(true), 30000);
                setTransportable(false);
                setSnack({
                  open: true,
                  status: 'success'
                });
              }
            })["catch"](function (error) {
              if (error.response.status === 400) {
                setSnack({
                  open: true,
                  status: 'error'
                });
                setTimeout(setTransportable(true), 30000);
              }
            });
            logRef.current = [].concat(_toConsumableArray(logRef.current), [input.value]);
            setState({
              input: '',
              chatLogs: logRef.current
            });
          }
        }
      }
    }
  };

  React.useEffect(function () {
    // get API
    window.addEventListener('keydown', enterKeyHandler);
    return function () {
      return window.removeEventListener('keydown', enterKeyHandler);
    };
  }, []);
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
  }, "PREPARING"), state.chatLogs.map(function (value, index) {
    return index % 2 === 0 ?
    /*#__PURE__*/
    // 다른사람들이 말한 건 왼쪽 정렬
    React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: classes.chatBox,
      key: index
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      className: classes.OtherAvatar
    }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Face"], null)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
      className: classes.bubble
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "caption",
      style: {
        fontSize: '0.5rem',
        lineHeight: '0.8'
      }
    }, "".concat(new Date().toDateString(), " ").concat(new Date().toTimeString())), value)) :
    /*#__PURE__*/
    // 내가 말했을 경우 오른쪽 정렬, profile의 이름과 비교 
    React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: classes.chatBox,
      style: {
        alignSelf: 'flex-end'
      },
      key: index
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
      className: classes.myBubble,
      key: index
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "caption",
      style: {
        fontSize: '0.5rem',
        lineHeight: '0.8'
      }
    }, "".concat(new Date().toDateString(), " ").concat(new Date().toTimeString())), value), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      className: classes.myAvatar
    }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Face"], null)));
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
  })))), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: snack.open,
    onClose: function onClose() {
      return setSnack({
        open: false
      });
    },
    content: snack.status === 'success' ? 'SUCCESS' : snack.status === 'error' ? 'FAILED : LOGIN FIRST' : 'max length : 120',
    status: snack.status === 'success' ? 'success' : 'error'
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: tooFastSnack.open,
    onClose: function onClose() {
      return setTooFastSnack({
        open: false
      });
    },
    content: "FAILED : TOO FAST",
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
/*! exports provided: getGuestbookList, postGuestbook, updateGuestbook, deleteGuestbook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGuestbookList", function() { return getGuestbookList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postGuestbook", function() { return postGuestbook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGuestbook", function() { return updateGuestbook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGuestbook", function() { return deleteGuestbook; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serverURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverURL */ "./src/util/serverURL.js");

 // guestbook list 받아오기 30개

var getGuestbookList = function getGuestbookList() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/guestbook"));
}; // 삭제의 경우 req.articleId, 수정의 경우 req.articleId, req.content
// 등록

var postGuestbook = function postGuestbook(content) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/guestbook"), {
    data: {
      content: content
    }
  }, {
    withCredentials: true
  });
}; // 수정

var updateGuestbook = function updateGuestbook(articleId, content) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/guestbook"), {
    data: {
      articleId: articleId,
      content: content
    }
  }, {
    withCredentials: true
  });
};
var deleteGuestbook = function deleteGuestbook(articleId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/guestbook"), {
    data: {
      articleId: articleId
    }
  }, {
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
// export default "https://management-apple.herokuapp.com";
/* harmony default export */ __webpack_exports__["default"] = ("http://localhost:3000");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9FcnJvckZhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL0hpZGVPblNjaHJvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9TbmFja0Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ndWVzdGJvb2svR3Vlc3Rib29rLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Nyb3NzbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9EZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ltYWdlU2xpZGVTb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24yLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0xpc3RDYXJvdXNlbERlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvU3RhcnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ibGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9kZXNrLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Vhc3ktbG9naW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xpbmstbWFuYWdlbWVudC1wYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21ha2UtaGVhZGVycy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbW9vbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9teW1lbnUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2xpZGUwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0YXJ0LXJpZ2h0LWF3YXkucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvd2hpdGUtYXJyb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvd2hpdGViYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvRGVmYXVsdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbnVhbERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9TYXZlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1RhYmxlT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZGVNZW51TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25JbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25PdXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvR3Vlc3Rib29rQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0xvZ2luQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL01hbmFnZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGFyc2VEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3NlcnZlclVSTC5qcyJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkxvZ291dENvbnRleHQiLCJQcm9ncmVzc0NvbnRleHQiLCJHbG9iYWxTbmFja2JhckNvbnRleHQiLCJBcHAiLCJxcyIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwiaWRfdG9rZW4iLCJ1c2VDb29raWVzIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsInVzZVN0YXRlIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJvcGVuIiwicmVzdWx0IiwiZ2xvYmFsU25hY2tiYXIiLCJzZXRHbG9iYWxTbmFja2JhciIsInByb2dyZXNzUmVmIiwidXNlUmVmIiwiaGFuZGxlQmVmb3JldW5sb2FkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInVzZUVmZmVjdCIsImdldFRva2VuQW5kUHJvZmlsZSIsInRoZW4iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJwYXRoIiwibWF4QWdlIiwiZXJyIiwiRXJyb3IiLCJFcnJvckZhbGxiYWNrIiwiZXJyb3IiLCJjb21wb25lbnRTdGFjayIsInJlcGxhY2UiLCJvcmlnaW4iLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJwYXBlciIsImNvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJmb250V2VpZ2h0IiwicGFwZXIyIiwibWFyZ2luVG9wIiwiYnV0dG9uIiwicmVzZXRFcnJvckJvdW5kYXJ5IiwiY2xhc3NlcyIsInNlY29uZCIsInNldFNlY29uZCIsIm1lc3NhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJIaWRlT25TY3JvbGwiLCJjaGlsZHJlbiIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiTG9hZGluZyIsImJvb2wiLCJDdXN0b21TbmFja2JhciIsIm9uQ2xvc2UiLCJjb250ZW50Iiwic3RhdHVzIiwiZGlyZWN0aW9uIiwiZm9udFNpemUiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwidXNlT25GaXJzdFJlbmRlciIsImlzRmlyc3RSZWYiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJtaW5IZWlnaHQiLCJmb290ZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJhcnJvdyIsImFsaWduU2VsZiIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRTaXplIiwiU3RpY2t5Rm9vdGVyIiwicGF0aG5hbWUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0cmFuc2l0aW9uIiwiZSIsInRhcmdldCIsInN0eWxlIiwiY3Vyc29yIiwiYmFja2dyb3VuZEltYWdlIiwibWFuYWdlbWVudEJhY2tncm91bmQiLCJ0cmFuc2Zvcm0iLCJ3aGl0ZUFycm93IiwiY29udGFpbmVyIiwiYmFja0xvZ28iLCJwb3NpdGlvbiIsInpJbmRleCIsIm9wYWNpdHkiLCJjaGF0Q29udGFpbmVyIiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwiaW5wdXRCb3giLCJidWJibGUiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwibXlCdWJibGUiLCJjaGF0Qm94IiwiT3RoZXJBdmF0YXIiLCJteUF2YXRhciIsIkd1ZXN0Ym9vayIsImlucHV0UmVmIiwic25hY2siLCJzZXRTbmFjayIsImlucHV0IiwiY2hhdExvZ3MiLCJzdGF0ZSIsInNldFN0YXRlIiwidHJhbnNwb3J0YWJsZSIsInNldFRyYW5zcG9ydGFibGUiLCJ0b29GYXN0U25hY2siLCJzZXRUb29GYXN0U25hY2siLCJsb2dSZWYiLCJjaGF0Q29udGFpbmVyUmVmIiwiZ2V0R3Vlc3Rib29rTGlzdCIsImxpc3QiLCJvbklucHV0Q2hhbmdlIiwidmFsdWUiLCJsZW5ndGgiLCJlbnRlcktleUhhbmRsZXIiLCJrZXlDb2RlIiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwic2Nyb2xsSGVpZ2h0IiwicG9zdEd1ZXN0Ym9vayIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaW5kZXgiLCJsaW5lSGVpZ2h0IiwidG9EYXRlU3RyaW5nIiwidG9UaW1lU3RyaW5nIiwidiIsInNocmluayIsInRleHRDb250YWluZXIiLCJ0ZXh0U2hhZG93IiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlTGlzdCIsInNldFN0ZXBwZXIiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJoYW5kbGVBZnRlclNsaWRlIiwic2xpZGVJbmRleCIsImltYWdlIiwic3JjIiwibnVtYmVyIiwiZmxleFdyYXAiLCJDcm9zc2xpbmUiLCJmYWRlIiwic2V0RmFkZSIsImRvbVJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsImVudGVyIiwiZXhpdCIsImlubmVyQm94IiwiRGVzY3JpcHRpb24iLCJncm93Iiwic2V0R3JvdyIsInRyYW5zZm9ybU9yaWdpbiIsInRpbWVvdXQiLCJhcHBlYXIiLCJIb21lIiwic2xpZGUwIiwiZGVzY3JpcHRpb24iLCJlYXN5TG9naW4iLCJsaW5rTWFuYWdlbWVudFBhZ2UiLCJzdGFydFJpZ2h0QXdheSIsIm1ha2VIZWFkZXJzIiwiaGFuZGxlVGFibGUiLCJ1c2VNeW1lbnUiLCJtaW5XaWR0aCIsInRleHRQYXBlciIsIkludHJvZHVjdGlvbiIsInN0ZXBwZXIiLCJsb2dvQm94IiwiYmlnQXZhdGFyIiwidGV4dFdpdGhTaGFkb3ciLCJtYXJnaW5MZWZ0IiwiZGVzY3JpcHRpb25Cb3giLCJtb29uSW1hZ2UiLCJpbmxpbmUiLCJEZXNjcmlwdGlvbkxpc3QiLCJzbGlkZVNvdXJjZSIsIml0ZW0iLCJhbGlnbkNvbnRlbnQiLCJNYWluIiwidGV4dCIsInR5cG9ncmFwaHkiLCJ0ZXh0RGVjb3JhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbkNvbnRhaW5lciIsImRlZmF1bHREYXRhIiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJncm91cGluZyIsIkRlZmF1bHRQYWdlIiwibWF0Y2giLCJmYWRlMiIsInNldEZhZGUyIiwiaGFuZGxlT25ERU1PQ2xpY2siLCJkZWZhdWx0UGFnZSIsInNoYXBlIiwiaGFzVGFibGUiLCJhcnJheSIsImZvcm1Sb290IiwiZGVmYXVsdEhlYWRlciIsIkhlYWRlcnMiLCJoYW5kbGVQcm9ncmVzcyIsInVzZUNvbnRleHQiLCJyZXN1bHRTbmFjayIsInNldFJlc3VsdFNuYWNrIiwiaGVhZGVycyIsImdyb3VwaW5ncyIsIkFycmF5IiwiZmlsbCIsInNldERhdGEiLCJkYXRhUmVmIiwiZ2V0TWFuYWdlbWVudFRhYmxlIiwiZ3JvdXBpbmdMZW5ndGgiLCJpIiwicHVzaCIsImhlYWRlcnNMZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJoYW5kbGVMb2dvdXQiLCJoYW5kbGVTdWJtaXQiLCJocmVmIiwiaXNBdXRvU2F2ZSIsImV2ZXJ5IiwiZmlsdGVyIiwic2F2ZUhlYWRlcnMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUdyb3VwaW5ncyIsImNoZWNrZWQiLCJoZWFkZXIiLCJNYW5hZ2VtZW50VGFibGUiLCJzYXZlZFNuYWNrIiwic2V0U2F2ZWRTbmFjayIsImVycm9yU25hY2siLCJzZXRFcnJvclNuYWNrIiwiZGlhbG9nIiwic2V0RGlhbG9nIiwidGFibGVSZWYiLCJwYXJzZURhdGEiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZU9uU2F2ZSIsImRhdGFNYW5hZ2VyIiwicmVkdWNlIiwib2JqIiwidGFibGVEYXRhIiwicmVzdCIsInNhdmVEYXRhIiwib25kYkNsaWNrIiwib25LZXlkb3duIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJtZXRhS2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwiTWFyZ2luIiwibG9jYWxpemF0aW9uIiwib3B0aW9ucyIsInRvb2x0aXAiLCJpY29uIiwib25DbGljayIsImRlbGV0aW9ucyIsInNwbGljZSIsImluZGV4T2YiLCJwcmV2RGF0YSIsIm9uUm93QWRkIiwibmV3RGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJldlN0YXRlIiwib25Sb3dVcGRhdGUiLCJvbGREYXRhIiwiTWFudWFsRGlhbG9nIiwiaWNvbnMiLCJTYXZlQnV0dG9uIiwiZXhwb3J0QnV0dG9uIiwic2VsZWN0aW9uIiwiaGVhZGVyU3R5bGUiLCJhY3Rpb25zQ29sdW1uSW5kZXgiLCJjb2x1bW5zQnV0dG9uIiwiZGVib3VuY2VJbnRlcnZhbCIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwicGFnaW5hdGlvbiIsImxhYmVsRGlzcGxheWVkUm93cyIsInRvb2xiYXIiLCJuUm93c1NlbGVjdGVkIiwiYWN0aW9ucyIsImJvZHkiLCJlbXB0eURhdGFTb3VyY2VNZXNzYWdlIiwiZmxleEdyb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxlZnQiLCJwYWRkaW5nTGVmdCIsImp1c3RpZnkiLCJjZW50ZXIiLCJyaWdodCIsInBhZGRpbmdSaWdodCIsIk5hdiIsIm1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJldmVudCIsImZsYWciLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJsaXN0VGV4dCIsIm1vZGFsIiwic2hhZG93cyIsIm1vZGFsUm93Qm94IiwibW9kYWxDb2xCb3giLCJNZW51TGlzdCIsImhhbmRsZUdsb2JhbFNuYWNrYmFyIiwiZW1haWxJbnB1dCIsInNldEVtYWlsSW5wdXQiLCJoYW5kbGVPbkNsaWNrTG9naW4iLCJyZWRpcmVjdEdvb2dsZUxvZ2luIiwiaGFuZGxlT25DbGlja01vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVPbkNsb3NlTW9kYWwiLCJoYW5kbGVPblN1Ym1pdCIsImlzTG9nZ2VkIiwiZ29vZ2xlU2lnbmluSW1hZ2UiLCJTaWduSW5CdXR0b24iLCJzaWduSW4iLCJsb2dvdXQiLCJMaWdodFRvb2x0aXAiLCJ3aXRoU3R5bGVzIiwiY29tbW9uIiwid2hpdGUiLCJUb29sdGlwIiwiYXhpb3MiLCJnZXQiLCJzZXJ2ZXJVUkwiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwidXBkYXRlR3Vlc3Rib29rIiwiYXJ0aWNsZUlkIiwicHV0IiwiZGVsZXRlR3Vlc3Rib29rIiwicmVzIiwiYXNzaWduIiwidG9rZW4iLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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RUFBdUJrQixNQUF2QixDQUE4QixVQUFBN0csQ0FBQztBQUFBLFdBQUVBLENBQUY7QUFBQSxHQUEvQixFQUFvQ0wsR0FBcEMsQ0FBd0MsVUFBQ1osS0FBRCxFQUFPYSxLQUFQLEVBQWlCO0FBQy9ELFdBQU87QUFDTDRFLFdBQUssRUFBR3pGLEtBREg7QUFFTDBGLFdBQUssRUFBRzFGLEtBRkg7QUFHTDJGLGNBQVEsRUFBR2tCLFNBQVMsQ0FBQ2hHLEtBQUQ7QUFIZixLQUFQO0FBS0QsR0FOTyxDQUFSO0FBT0QsQ0FUSCxFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQ2Usc0ZBQWYsRSIsImZpbGUiOiJhcHAuMmFkYzRiMDdjNjg4YTZjMjRlY2IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInJlYWN0LmJ1bmRsZVwiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIiBpbXBvcnQgeyBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXYvTmF2XCI7XHJcbmltcG9ydCBHdWVzdGJvb2sgZnJvbSBcIi4vZ3Vlc3Rib29rL0d1ZXN0Ym9va1wiO1xyXG5pbXBvcnQgTWFuYWdlbWVudCBmcm9tIFwiLi9tYW5hZ2VtZW50L01hbmFnZW1lbnRcIjtcclxuaW1wb3J0IEhlYWRlcnMgZnJvbSAnLi9tYW5hZ2VtZW50L0hlYWRlcnMnO1xyXG5pbXBvcnQge0Nzc0Jhc2VsaW5lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9mb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnXHJcbmltcG9ydCB7IGdldFRva2VuQW5kUHJvZmlsZSB9IGZyb20gXCIuL3V0aWwvTG9naW5BUElcIjtcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCBFcnJvckZhbGxiYWNrIGZyb20gJy4vY3VzdG9tSG9vay9FcnJvckZhbGxiYWNrJztcclxuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gXCJyZWFjdC1lcnJvci1ib3VuZGFyeVwiO1xyXG5cclxuLy8g7Luo7YWN7Iqk7Yq4IOuqqeuhnVxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvdXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgR2xvYmFsU25hY2tiYXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3QgeyBpZF90b2tlbiB9ID0gcXMucGFyc2Uod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJ10pO1xyXG4gICAgY29uc3QgWyBwcm9maWxlICwgc2V0UHJvZmlsZSBdID0gUmVhY3QudXNlU3RhdGUoY29va2llcy5wcm9maWxlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2xvYmFsU25hY2tiYXIsIHNldEdsb2JhbFNuYWNrYmFyXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2UgLCByZXN1bHQ6ICdzdWNjZXNzJ30pXHJcbiAgICBjb25zdCBwcm9ncmVzc1JlZiA9IFJlYWN0LnVzZVJlZigwKTtcclxuICAgIGNvbnN0IGhhbmRsZUJlZm9yZXVubG9hZCA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcHJvZ3Jlc3MgOiAke3Byb2dyZXNzUmVmLmN1cnJlbnR9YCk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IChwcm9ncmVzc1JlZi5jdXJyZW50IDwgMTAwID8gcHJvZ3Jlc3NSZWYuY3VycmVudCArIDIwIDogMTAwKTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3NSZWYuY3VycmVudCA9PT0gMTAwKSB7XHJcbiAgICAgICAgICAgICBwcm9ncmVzc1JlZi5jdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICBzZXRHbG9iYWxTbmFja2Jhcih7b3Blbjp0cnVlICwgcmVzdWx0OnJlc3VsdH0pO1xyXG4gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDApXHJcbiAgICB9XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihpZF90b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2ggQVBJIOyLpO2WiScpO1xyXG4gICAgICAgICAgICBnZXRUb2tlbkFuZFByb2ZpbGUoaWRfdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgZGF0YSA6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7bmFtZSAsZW1haWwsIHBpY3R1cmV9ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShcInByb2ZpbGVcIix7bmFtZSAsIGVtYWlsLCBwaWN0dXJlfSx7cGF0aDpcIi9cIiAsIG1heEFnZSA6IDcyMDB9KTsgIC8vIG1heEFnZSA6IDLsi5zqsIRcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTG9naW4gRmFpbGVkLiBQbGVhc2UgYXV0aG9yaXplIHRoZSB1c2Ugb2YgY29va2llcyBpbiB5b3VyIGJyb3dzZXIuJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbaWRfdG9rZW5dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoY29va2llcy5wcm9maWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBjb29raWVzLnByb2ZpbGUgOiAke0pTT04uc3RyaW5naWZ5KGNvb2tpZXMucHJvZmlsZSl9YCk7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGUoY29va2llcy5wcm9maWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtjb29raWVzLnByb2ZpbGVdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8RXJyb3JCb3VuZGFyeVxyXG4gICAgICAgICAgICBGYWxsYmFja0NvbXBvbmVudD17RXJyb3JGYWxsYmFja31cclxuICAgICAgICAgICAgb25FcnJvcj17KGVycm9yLCBjb21wb25lbnRTdGFjayk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciA6ICR7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRTdGFjayA6ICR7Y29tcG9uZW50U3RhY2t9YCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uUmVzZXQ9eygpPT5sb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uLm9yaWdpbil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9maWxlIHx8IHtuYW1lIDogJyd9fT4gICAgICAgICAgey8qIOycoOyggCDtlITroZztlYQg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8TG9nb3V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UHJvZmlsZX0+ICAgey8qIOuhnOq3uOyVhOybgyDsnbTrsqTtirgg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyhyZXN1bHQpPT5oYW5kbGVCZWZvcmV1bmxvYWQocmVzdWx0KX0+ICB7Lyog66Gc65SpIOy7qO2FjeyKpO2KuCAgICovfVxyXG4gICAgICAgICAgICA8R2xvYmFsU25hY2tiYXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRHbG9iYWxTbmFja2Jhcn0+ICB7Lyog7JeQ65+sIOyKpOuCteuwlCDsu6jthY3siqTtirggICAqL31cclxuICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KCk9PjxIb21lIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2d1ZXN0Ym9vaycgcmVuZGVyPXsoKT0+PEd1ZXN0Ym9vayBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9tYW5hZ2VtZW50JyByZW5kZXI9eygpPT4gPE1hbmFnZW1lbnQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvaGVhZGVycycgcmVuZGVyPXsoKT0+IDxIZWFkZXJzIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nLycgcmVuZGVyPXsocHJvcHMpPT48Rm9vdGVyIHsuLi5wcm9wc30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDwvR2xvYmFsU25hY2tiYXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1Byb2dyZXNzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Mb2dvdXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2dsb2JhbFNuYWNrYmFyLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRHbG9iYWxTbmFja2Jhcih7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdD09PSdlcnJvcic/IGBOb3Qgc2F2ZWQuXHJcbiAgICAgICAgICAgICAgICBSZWFzb24gOiBJbnZhbGlkIGlucHV0LmAgOicgU0FWRUQgJ30gc3RhdHVzPXtnbG9iYWxTbmFja2Jhci5yZXN1bHR9XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3t2ZXJ0aWNhbDondG9wJywgaG9yaXpvbnRhbDoncmlnaHQnfX0vPlxyXG4gICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGVTaWduaW4uMWNlMWFhYTVhMTI3ZmEzZTQ5MmExMmJiNjJmOTkzMDQucG5nXCI7IiwiaW1wb3J0IHsgQm94LCBQYXBlcixUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgcm9vdCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJ1xyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIHdpZHRoIDogJzgwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc1MHZoJyxcclxuICAgICAgICBjb2xvciA6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJ1xyXG4gICAgfSxcclxuICAgIHBhcGVyMiA6IHtcclxuICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIG1hcmdpblRvcDonM3ZoJyxcclxuICAgICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcidcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzV2aCcsXHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJ1xyXG4gICAgfVxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yRmFsbGJhY2sgKHtlcnJvciwgY29tcG9uZW50U3RhY2ssIHJlc2V0RXJyb3JCb3VuZGFyeX0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgW3NlY29uZCAsIHNldFNlY29uZF0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKHNlY29uZCA8PSAwKSBsb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNlY29uZCA6ICAke3NlY29uZH1gKTtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIHNldFNlY29uZChzZWNvbmQtMSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSxbc2Vjb25kXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMyc+IHtgRVJST1IgOiAke2Vycm9yLm1lc3NhZ2V9YH0gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnPiB7YFdpbGwgZ28gYmFjayB0byB0aGUgSE9NRWB9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMic+IHtgaW4gJHtzZWNvbmR9IHNlY29uZHMuYH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtyZXNldEVycm9yQm91bmRhcnl9PiBcclxuICAgICAgICAgICAgICAgICAgICBSZXR1cm4gdG8gSG9tZSBOb3cgXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXIyfSBlbGV2YXRpb249ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+IHtgUGxlYXNlIGNoZWNrIGJlbG93LmB9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz4ge2AxLiBMb2dpbiB0aW1lb3V0IC0gTG9naW4gUmV0ZW50aW9uIFRpbWU6IDIgaG91cnNgfSAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+IHtgMi4gSW52YWxpZCBSZXF1ZXN0YH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbkVycm9yRmFsbGJhY2sucHJvcFR5cGVzID0ge1xyXG4gICAgcmVzZXRFcnJvckJvdW5kYXJ5IDogUHJvcFR5cGVzLFxyXG59IiwiaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuXHJcbi8vIEdOQuydmCDsiqzrnbzsnbTrk5zquLDriqVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9IGRpcmVjdGlvbj1cImRvd25cIiBpbj17IXRyaWdnZXJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NsaWRlPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQge0JveCwgQ2lyY3VsYXJQcm9ncmVzcywgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nICh7aXNMb2FkaW5nfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgIGlzTG9hZGluZyAmJiBcclxuICAgICAgICAgICAgKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHZoJywgd2lkdGg6JzEwMHZ3JywgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtgU2F2aW5nIGNoYW5nZXNgfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgICAgICAgPC9Cb3g+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuTG9hZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tU25hY2tiYXIgKHtvcGVuLCBvbkNsb3NlLCBjb250ZW50LCBzdGF0dXMsIGRpcmVjdGlvbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17ZGlyZWN0aW9uPyBkaXJlY3Rpb24gOiB7IHZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidjZW50ZXInIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17b25DbG9zZX0gc2V2ZXJpdHk9e3N0YXR1c31cclxuICAgICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCcgbWVzc2FnZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicsIGZvbnRTaXplOic1cmVtJ319PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgIClcclxufVxyXG5cclxuQ3VzdG9tU25hY2tiYXIucHJvcFR5cGVzID0ge1xyXG4gICAgb3BlbiA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNsb3NlIDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb250ZW50IDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN0YXR1cyA6IFByb3BUeXBlcy5vbmVPZihbJ2Vycm9yJywnc3VjY2VzcyddKSxcclxuICAgIGRpcmVjdGlvbiA6IFByb3BUeXBlcy5vYmplY3QsXHJcbn0iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuLy8gY29udHN0cnVjdG9yIO2bhVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPbkZpcnN0UmVuZGVyIChmdW5jKSB7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmMoKTtcclxuICAgIH1cclxufVxyXG51c2VPbkZpcnN0UmVuZGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGZ1bmMgOiBQcm9wVHlwZXMuZnVuY1xyXG59IiwiaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgTGlua30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgd2hpdGVBcnJvdyBmcm9tICcuLi9pbWFnZXMvd2hpdGUtYXJyb3cucG5nJztcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQge0JveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IG1hbmFnZW1lbnRCYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnJztcclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgSmFjaydzIFdlYnNpdGVcclxuICAgICAgICA8L0xpbms+eycgJ31cclxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgIHsnLid9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWluSGVpZ2h0OiAnMjB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgICAgYmFja2dyb3VuZCA6IHRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdLFxyXG4gICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgYXJyb3cgOiB7XHJcbiAgICAgIHdpZHRoIDogJzR2dycsXHJcbiAgICAgIGhlaWdodCA6ICc0dncnLFxyXG4gICAgICBwYWRkaW5nIDogJzN2dycsXHJcbiAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Cb3R0b206JzJ2aCcsXHJcbiAgICAgIG1hcmdpblRvcCA6ICcydmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTonY29udGFpbicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5Rm9vdGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7bG9jYXRpb259ID0gcHJvcHM7XHJcbiAgICBjb25zb2xlLmxvZyhgbG9jYXRpb24ucGF0aG5hbWU/ICR7bG9jYXRpb24ucGF0aG5hbWV9YCk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9ndWVzdGJvb2snPyBudWxsIDogKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17XHJcbiAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJyA/IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kIDogYGxpbmVhci1ncmFkaWVudChibGFjaywgI2VlZWVlZSlgfSBcclxuICAgICAgICA6IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7bWFuYWdlbWVudEJhY2tncm91bmR9KWAsIGJhY2tncm91bmRTaXplIDogJ2F1dG8nLCB0cmFuc2Zvcm06IGBzY2FsZVkoLTEpYH19PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTW92ZSB0byBUb3BcIiBhcmlhLWxhYmVsPVwibW92ZS10by10b3BcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBlbnRlckRlbGF5PXszNTB9IGxlYXZlRGVsYXk9ezE1MH0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gc3R5bGU9e1xyXG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJz8gXHJcbiAgICAgICAgICB7YmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke3doaXRlQXJyb3d9KWB9XHJcbiAgICAgICAgICA6IFxyXG4gICAgICAgICAge2JhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCwgdHJhbnNmb3JtOmByb3RhdGUoMTgwZGVnKWB9fVxyXG4gICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9IG9uTW91c2VPdmVyPXsoZSk9PnRyYW5zaXRpb24oZSl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgICAgICAgPENvcHlyaWdodCBzdHlsZT17e2ZvbnRXZWlnaHQgOiAnYm9sZGVyJ319Lz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9IiwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgQm94LCBQYXBlciwgVHlwb2dyYXBoeSwgVGV4dEZpZWxkLCBBdmF0YXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtGYWNlIGFzIEZhY2VJY29ufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSBcIi4uL2N1c3RvbUhvb2svU25hY2tCYXJcIjtcclxuaW1wb3J0IHVzZU9uRmlyc3RSZW5kZXIgZnJvbSBcIi4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlclwiO1xyXG5pbXBvcnQgeyBnZXRHdWVzdGJvb2tMaXN0ICwgcG9zdEd1ZXN0Ym9vaywgdXBkYXRlR3Vlc3Rib29rLCBkZWxldGVHdWVzdGJvb2t9IGZyb20gJy4uL3V0aWwvR3Vlc3Rib29rQVBJJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICB3aWR0aCA6ICc3NXZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnODV2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYmFja0xvZ28gOiB7XHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICB6SW5kZXggOiAxLFxyXG4gICAgICAgIG9wYWNpdHk6MC4zXHJcbiAgICB9LFxyXG4gICAgY2hhdENvbnRhaW5lciA6IHtcclxuICAgICAgICBoZWlnaHQgOiAnODAlJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nIDogJzAuNXZ3IDV2dycsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnI2QwZDBkMCcsXHJcbiAgICAgICAgb3ZlcmZsb3dZIDogJ3Njcm9sbCcsXHJcbiAgICAgICAgb3ZlcmZsb3dYIDogJ2hpZGRlbidcclxuICAgIH0sXHJcbiAgICBpbnB1dEJveCA6IHtcclxuICAgICAgICB3aWR0aCA6ICc0MHZ3JyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzV2aCdcclxuICAgIH0sXHJcbiAgICBidWJibGUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlciA6ICd0aGljayAjOGE4YThhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXMgOiAnMTVweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJyM4ZThlOGUnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnNXB4IDEycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6ICcwcHggNnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzYwdncnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgbXlCdWJibGUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlciA6ICd0aGljayAjOGE4YThhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXMgOiAnMTVweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJyM3ODlmZmYnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnNXB4IDEycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6ICcwcHggNnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzYwdncnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgY2hhdEJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nIDogJzJweCcsXHJcblxyXG4gICAgfSxcclxuICAgIE90aGVyQXZhdGFyIDoge1xyXG4gICAgICAgIGNvbG9yIDogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdibGFjaycsXHJcbiAgICB9LFxyXG4gICAgbXlBdmF0YXIgOiB7XHJcbiAgICAgICAgY29sb3IgOiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJyMyNzY0ZmYnLFxyXG4gICAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdWVzdGJvb2soe2lzTG9hZGluZ30pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBpbnB1dCA6ICcnLFxyXG4gICAgICAgIGNoYXRMb2dzIDogW11cclxuICAgIH0pXHJcbiAgICBjb25zdCBbdHJhbnNwb3J0YWJsZSwgc2V0VHJhbnNwb3J0YWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt0b29GYXN0U25hY2ssIHNldFRvb0Zhc3RTbmFja10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBsb2dSZWYgPSBSZWFjdC51c2VSZWYoc3RhdGUuY2hhdExvZ3MpO1xyXG4gICAgY29uc3QgY2hhdENvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgICAgZ2V0R3Vlc3Rib29rTGlzdCgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gcmVzdWx0LmRhdGE7XHJcblxyXG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMTIwKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgaW5wdXQgOiB2YWx1ZX0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID49IDk1KSB7XHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBlbnRlcktleUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIGVudGVyIHByZXNzZWRcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dFJlZi5jdXJyZW50PyBpbnB1dFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJykgOiAnJztcclxuICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBjaGF0Q29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsVG8oMCxjaGF0Q29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc3QgQVBJICYgZ2V0IEFQSVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNwb3J0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb29GYXN0U25hY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0R3Vlc3Rib29rKGlucHV0LnZhbHVlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc2V0VHJhbnNwb3J0YWJsZSh0cnVlKSwgMzAwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRyYW5zcG9ydGFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWUgLCBzdGF0dXM6J3N1Y2Nlc3MnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTbmFjayh7b3Blbjp0cnVlICwgc3RhdHVzOidlcnJvcid9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNldFRyYW5zcG9ydGFibGUodHJ1ZSksIDMwMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nUmVmLmN1cnJlbnQgPSBbLi4ubG9nUmVmLmN1cnJlbnQgLCBpbnB1dC52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHtpbnB1dCA6ICcnICwgY2hhdExvZ3MgOiBsb2dSZWYuY3VycmVudH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gZ2V0IEFQSVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZW50ZXJLZXlIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nICwgZW50ZXJLZXlIYW5kbGVyKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezV9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0Q29udGFpbmVyfSByZWY9e2NoYXRDb250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tMb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICBQUkVQQVJJTkdcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaGF0TG9ncy5tYXAoKHZhbHVlLGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4JTI9PT0wPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuLpOuluOyCrOuejOuTpOydtCDrp5DtlZwg6rG0IOyZvOyqvSDsoJXroKxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY2hhdEJveH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5PdGhlckF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2VJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1YmJsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250U2l6ZTonMC41cmVtJywgbGluZUhlaWdodDonMC44J319PntgJHtuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpfSAke25ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCl9YH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g64K06rCAIOunkO2WiOydhCDqsr3smrAg7Jik66W47Kq9IOygleugrCwgcHJvZmlsZeydmCDsnbTrpoTqs7wg67mE6rWQIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0Qm94fSBzdHlsZT17e2FsaWduU2VsZjonZmxleC1lbmQnfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm15QnViYmxlfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIHN0eWxlPXt7Zm9udFNpemU6JzAuNXJlbScsIGxpbmVIZWlnaHQ6JzAuOCd9fT57YCR7bmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKX0gJHtuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpfWB9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5teUF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2VJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEJveH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nbWVkaXVtJ1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgcmVmPXt2ID0+IGlucHV0UmVmLmN1cnJlbnQgPSB2fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9XHJcbiAgICAgICAgY29udGVudD17c25hY2suc3RhdHVzID09PSAnc3VjY2Vzcyc/ICdTVUNDRVNTJyA6IHNuYWNrLnN0YXR1cyA9PT0gJ2Vycm9yJz8gJ0ZBSUxFRCA6IExPR0lOIEZJUlNUJyA6ICdtYXggbGVuZ3RoIDogMTIwJ30gXHJcbiAgICAgICAgc3RhdHVzPXtzbmFjay5zdGF0dXMgPT09ICdzdWNjZXNzJz8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJ30gLz5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17dG9vRmFzdFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRUb29GYXN0U25hY2soe29wZW46ZmFsc2V9KX1cclxuICAgICAgICBjb250ZW50PSdGQUlMRUQgOiBUT08gRkFTVCcgc3RhdHVzPSdlcnJvcicgLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5HdWVzdGJvb2sucHJvcFR5cGVzID0ge1xyXG4gICAgaXNMb2FkaW5nIDogUHJvcFR5cGVzLmJvb2xcclxufSIsImltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgdGV4dENvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgY29sb3IgOiAnI2ZmZicsXHJcbiAgICAgICAgdGV4dFNoYWRvdzonMnB4IDEuNXB4IDEuNXB4IGdyYXknLFxyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ2Fyb3VzZWwgKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBpbWFnZUxpc3QgPSBwcm9wcy5saXN0ID8gcHJvcHMubGlzdCA6IFt7fV07XHJcbiAgICBjb25zdCB7c2V0U3RlcHBlciwgY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGV9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBoYW5kbGVBZnRlclNsaWRlID0gKHNsaWRlSW5kZXgpID0+IHtcclxuICAgICAgICBzZXRTdGVwcGVyKHNsaWRlSW5kZXgpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShzbGlkZUluZGV4KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8Q2Fyb3VzZWxcclxuICAgIHNsaWRlSW5kZXg9e2N1cnJlbnRTbGlkZX1cclxuICAgIGFmdGVyU2xpZGU9IHtpbmRleCA9PiBoYW5kbGVBZnRlclNsaWRlKGluZGV4KX1cclxuICAgIGF1dG9wbGF5PXtmYWxzZX1cclxuICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezMwMDB9XHJcbiAgICB0cmFuc2l0aW9uTW9kZT0nc2Nyb2xsJ1xyXG4gICAgc3BlZWQ9ezgwMH1cclxuICAgIGhlaWdodE1vZGU9J21heCdcclxuICAgICAgICA+XHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2VMaXN0Lm1hcCgoaW1hZ2UsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJveCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJ319IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgIyR7aW5kZXh9ICR7aW1hZ2UubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDAlJ319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGluZGV4PT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgKDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDb250YWluZXJ9IHN0eWxlPXt7aGVpZ2h0OicxMDAlJywgYWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUVVJQ0sgU1RBUlQgR1VJREVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2UgeW91ciB3b3JrIGVhc2llclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMScgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR1cm4gdGhlIHNsaWRlIG92ZXIgYW5kIGNoZWNrLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMScgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IGNvbnNpc3RzIG9mIGEgZmV3IHNsaWRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0JveD4pXHJcbiAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17aW1hZ2Uuc3JjfS8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbkltYWdlQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xyXG4gICAgc2V0U3RlcHBlciA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBjdXJyZW50U2xpZGUgOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBzZXRDdXJyZW50U2xpZGUgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94ICwgRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIG1hcmdpbjowLFxyXG4gICAgICBwYWRkaW5nOicxdncnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luOidhdXRvJyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Jvc3NsaW5lKHtjaGlsZHJlbn0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjIwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYm94U2hhZG93PXs0fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyb3csIEJveCwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290IDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICczNXZoJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgICBpbm5lckJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgd2lkdGggOiAnMzB2dycsXHJcbiAgICAgICAgY29sb3I6JyNlYWVhZWEnLFxyXG4gICAgICAgIHRleHRTaGFkb3c6ICcxcHggNXB4IDVweCAjOWU5OTk5J1xyXG4gICAgfVxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgIHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICl9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJzE1MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICBTT01FIFRFWFRcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIFNPTUUgVEVYVFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PiAgICAgIFxyXG4gICAgICAgIDwvR3Jvdz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSBcIi4vSW50cm9kdWN0aW9uXCI7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24yIGZyb20gXCIuL0ludHJvZHVjdGlvbjJcIjtcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2lzTG9hZGluZ30pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24vPlxyXG4gICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbjIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkhvbWUucHJvcFR5cGVzID0ge1xyXG4gIGlzTG9hZGluZyA6IFByb3BUeXBlcy5ib29sXHJcbn0iLCJpbXBvcnQgZWFzeUxvZ2luIGZyb20gXCIuLi9pbWFnZXMvZWFzeS1sb2dpbi5wbmdcIjtcclxuaW1wb3J0IGxpbmtNYW5hZ2VtZW50UGFnZSBmcm9tIFwiLi4vaW1hZ2VzL2xpbmstbWFuYWdlbWVudC1wYWdlLnBuZ1wiO1xyXG5pbXBvcnQgc3RhcnRSaWdodEF3YXkgZnJvbSBcIi4uL2ltYWdlcy9zdGFydC1yaWdodC1hd2F5LnBuZ1wiO1xyXG5pbXBvcnQgbWFrZUhlYWRlcnMgZnJvbSBcIi4uL2ltYWdlcy9tYWtlLWhlYWRlcnMucG5nXCI7XHJcbmltcG9ydCBoYW5kbGVUYWJsZSBmcm9tIFwiLi4vaW1hZ2VzL2hhbmRsZS10YWJsZS5wbmdcIjtcclxuaW1wb3J0IHVzZU15bWVudSBmcm9tIFwiLi4vaW1hZ2VzL215bWVudS5wbmdcIjtcclxuaW1wb3J0IHNsaWRlMCBmcm9tIFwiLi4vaW1hZ2VzL3NsaWRlMC5wbmdcIjtcclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnUXVpY2sgc3RhcnQgZ3VpZGUnLFxyXG4gICAgICAgIHNyYyA6IGAke3NsaWRlMH1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ0dVSURFJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdTaWduIGluIHdpdGggR29vZ2xlJyxcclxuICAgICAgICBzcmMgOiBgJHtlYXN5TG9naW59YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdTaWduIGluIHdpdGggZ29vZ2xlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdNb3ZlIG9uIHRvIG1hbmFnZW1lbnQgcGFnZScsXHJcbiAgICAgICAgc3JjIDogYCR7bGlua01hbmFnZW1lbnRQYWdlfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnTW92ZSBvbiB0byBtYW5hZ2VtZW50IHBhZ2UnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ0NsaWNrIHRoZSBibHVlIGJ1dHRvbicsXHJcbiAgICAgICAgc3JjIDogYCR7c3RhcnRSaWdodEF3YXl9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdjbGljayBcImdldCBzdGFydGVkIHJpZ2h0IGF3YXlcIiBidXR0b24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ01ha2UgSGVhZGVycycsXHJcbiAgICAgICAgc3JjIDogYCR7bWFrZUhlYWRlcnN9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdtYWtlIGhlYWRlcnMnLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdDcmVhdGUsIEVkaXQsIFJlbW92ZSB0YWJsZSByZWNvcmRzJyxcclxuICAgICAgICBzcmMgOiBgJHtoYW5kbGVUYWJsZX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ2hhbmRsZSB0YWJsZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnVXNlIG15bWVudSB0byBoYW5kbGUgZGF0YScsXHJcbiAgICAgICAgc3JjIDogYCR7dXNlTXltZW51fWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAndXNlIG15bWVudScsXHJcbiAgICB9LFxyXG5dOyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcm93ICwgQm94LCBQYXBlcixGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBJbWFnZUNhcm91c2VsIGZyb20gXCIuL0Nhcm91c2VsXCI7XHJcbmltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi9JbWFnZVNsaWRlU291cmNlcyc7XHJcbmltcG9ydCBMaXN0Q3JvdXNlbERlc2NyaXB0aW9uIGZyb20gJy4vTGlzdENhcm91c2VsRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvd2hpdGViYWNrZ3JvdW5kLmpwZyc7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwdncnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvdmVyJyxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBtaW5XaWR0aDogNzUwLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTAwMHB4JyxcclxuICAgICAgICB3aWR0aCA6ICc3MHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnNjV2aCcsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgICB0ZXh0UGFwZXIgOiB7XHJcbiAgICAgICAgbWluV2lkdGggOiAzNTAsXHJcbiAgICAgICAgd2lkdGggOiAnNzB2dycsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2luaGVyaXQnXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc3RlcHBlciwgc2V0U3RlcHBlcl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc29sZS5sb2coYGN1cnJlbnRTbGlkZSA6ICR7Y3VycmVudFNsaWRlfWApXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEZhZGUgaW49e2dyb3d9ICB0aW1lb3V0PXt7ZW50ZXI6MzAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiB7YXBwZWFyIDogMTUwMCAsIGVudGVyIDogMTUwMCAsIGV4aXQgOiAxMDAwfSB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBpbWFnZSBjYXJvdXNlbCAqL31cclxuICAgICAgICAgICAgICAgICAgPEltYWdlQ2Fyb3VzZWwgXHJcbiAgICAgICAgICAgICAgICAgIGxpc3Q9e2ltYWdlTGlzdH0gXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZT17Y3VycmVudFNsaWRlfSBcclxuICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNsaWRlPXtzZXRDdXJyZW50U2xpZGV9IFxyXG4gICAgICAgICAgICAgICAgICBzZXRTdGVwcGVyPXtzZXRTdGVwcGVyfSBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnfX1cclxuICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAyMDAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9fSA6IHt9KX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogbGlzdCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdENyb3VzZWxEZXNjcmlwdGlvbiBzdGVwcGVyPXtzdGVwcGVyfSA+PC9MaXN0Q3JvdXNlbERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBQYXBlciwgQm94LCBHcm93LCBBdmF0YXIsIFR5cG9ncmFwaHksRmFkZSAsIFNsaWRlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IG1vb25JbWFnZSBmcm9tICcuLi9pbWFnZXMvbW9vbi5wbmcnO1xyXG5pbXBvcnQgQ3Jvc3NsaW5lIGZyb20gJy4vQ3Jvc3NsaW5lJztcclxuaW1wb3J0IFByb2plY3REZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uJztcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL2JsYWNrLnBuZyc7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgd2lkdGggOiAnMTAwdncnLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgYmFja2dyb3VuZFNpemUgOiAnY292ZXInXHJcbiAgICB9LFxyXG4gICAgbG9nb0JveCA6IHtcclxuICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdydcclxuICAgIH0sXHJcbiAgICBiaWdBdmF0YXIgOiB7XHJcbiAgICAgIHdpZHRoIDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgfSxcclxuICAgIHRleHRXaXRoU2hhZG93IDoge1xyXG4gICAgICBjb2xvcjonI2ZmZicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICAgIGZvbnRTaXplOic0cmVtJyxcclxuICAgICAgbWFyZ2luTGVmdDonMnZ3JyxcclxuICAgICAgdGV4dFNoYWRvdzogJzFweCA1cHggNXB4ICM5ZTk5OTknXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb25Cb3ggOiB7XHJcbiAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgbWF4V2lkdGggOiAnNTB2dycsXHJcbiAgICAgIG1hcmdpbiA6ICcwIDAgMCAzdncnXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEZhZGUgaW49e2dyb3d9ICB0aW1lb3V0PXt7ZW50ZXI6MjAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgPENyb3NzbGluZT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0JveH0+XHJcbiAgICAgICAgICAgIDxGYWRlIGluPXtncm93fSB7Li4uKGdyb3c/IHt0aW1lb3V0OntlbnRlcjo1MDAwLCBleGl0OjgwMH19IDoge30pfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGFsdD0naGVscCcgc3JjPXttb29uSW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdBdmF0YXJ9Lz5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2J1dHRvbicgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRXaXRoU2hhZG93fT4gTWFuYWdlbWVudCBBcHAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25Cb3h9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+QW4gYXBwbGljYXRpb24gdGhhdCB5b3UgY2FuIGVhc2lseSBjcmVhdGUgJiBkZXNpZ24geW91ciBvd24gZGF0YS48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5HZXQgc3RhcnRlZCB3aXRoIHlvdXIgR29vZ2xlIGFjY291bnQhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+VGhpcyBhcHAgd2lsbCBub3Qga2VlcCBhbnkgcGVyc29uYWwgaW5mb3JtYXRpb24uPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nyb3NzbGluZT5cclxuICAgICAgICAgIDxQcm9qZWN0RGVzY3JpcHRpb24vPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1R5cG9ncmFwaHkgLCBTdGVwcGVyLCBTdGVwLCBCb3gsIFN0ZXBMYWJlbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc2xpZGVTb3VyY2UgZnJvbSAnLi9JbWFnZVNsaWRlU291cmNlcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgZmxleERpcmVjdGlvbjoncm93JyxcclxuICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInXHJcbiAgICB9LFxyXG4gICAgaW5saW5lOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNjcmlwdGlvbkxpc3QgKHtzdGVwcGVyfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17c3RlcHBlcn0gb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J2luaGVyaXQnfX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVTb3VyY2UubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcCBjb21wbGV0ZWQ9e2luZGV4IDwgc3RlcHBlcn0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvU3RlcHBlcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuRGVzY3JpcHRpb25MaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBwZXIgOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSBcIi4vU3RhcnRCdXR0b25cIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9kZXNrLmpwZ1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgOiAnY292ZXInLFxyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJ1xyXG4gICAgfSxcclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtmYWRlLHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNGaXJzdFJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRGYWRlKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgICAgICAgIGlmIChpc0ZpcnN0UmVmLmN1cnJlbnQpIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgICAgcm9vdE1hcmdpbiA6ICctMzUwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MTMwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3t0ZXh0U2hhZG93Oic1cHggMS41cHggMS41cHggZ3JheSd9fT5cclxuICAgICAgICAgICAgICAgIHtpc0ZpcnN0UmVmLmN1cnJlbnQgPyAnV0VMQ09NRScgOiAnUmVhZHkgdG8gc3RhcnQ/J31cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudD8gbnVsbCA6ICg8U3RhcnRCdXR0b24vPil9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0J1dHRvbiAsIEJveCwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBQbGF5QXJyb3dTaGFycCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMC41dmgnXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHRleHRTaGFkb3cgOiAnMnB4IDFweCAxcHggZ3JheScsXHJcbiAgICAgICAgY29sb3IgOiAnaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgICBpbm5lckJveCA6IHtcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnMXZoJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lckJveH0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScvbWFuYWdlbWVudCcgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjonbm9uZScsIGNvbG9yOid3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIGNvbG9yPSdzZWNvbmRhcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCcgXHJcbiAgICAgICAgICAgICAgICBzdGFydEljb249ezxQbGF5QXJyb3dTaGFycCBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250U2l6ZSA6IDMwfX0vPn0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICBHRVQgU1RBUlRFRFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhcnJvdy5kMDgzMjhmNjJkMTliNjZmOGVhOGQ2ZDAwNjcyNGM4Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmxhY2suM2YwMmExMzI3Mzg3MDAyMjZjODRlZDFmNTg2M2Q1OWEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRlc2suMzIwN2MxZWY5NGM4NjdmODBiMGU5ZGY2YWM3OGQ1MmIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhc3ktbG9naW4uM2U5MWI4ZDg4NzM1Njg5MDc5YWZkMDc2ZTNlMDc0MjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhbmRsZS10YWJsZS4zYzU4NjkxNGE5NmQ0YWZlZGRjNWM3YWQzZDdkZjM1NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibGluay1tYW5hZ2VtZW50LXBhZ2UuNDgwMDRkMTMzYjVmYzIyNTc3NzA0Yzk1ZWIzNWYzZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1ha2UtaGVhZGVycy5jZmZhYzYzNGYyOWQzOGRkYmQxZjQ0NjdhNTczZWJjNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFuYWdlbWVudC1iYWNrZ3JvdW5kLmEwMDhkZTgxMzk1ODFiMGRhYmYxODMyZWQxYzljNDZlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtb29uLmYyMDZiYzNkNWJlODMxMWM3N2Q5ODk3ZGE0NGUxZjY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJteW1lbnUuOWZkZDU4YWNhNzRlYjQ4ZDk1NWY4MzVjOWVjODc5NmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNsaWRlMC4wYWEyOTVhM2I3YjRkMzAxMzI4NmY1MjRjNDc2NGNkNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhcnQtcmlnaHQtYXdheS40ZTIxNzI2MmQyYzhkODZkNWUwZjZlZTQzMmFlZmJjZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2hpdGUtYXJyb3cuYzQ0MjJhN2JjNWVlMjNkMDgxYjM1NjZmOTNlOTFmMWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndoaXRlYmFja2dyb3VuZC5mYjE0MGY1ZTgxMGRjMjE0NmRhZDFiNmYwM2NhZjljOC5qcGdcIjsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzJ1xyXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgKDxDb29raWVzUHJvdmlkZXI+XHJcbiAgICAgICAgPEFwcC8+XHJcbiAgICA8L0Nvb2tpZXNQcm92aWRlcj4pXHJcbiAgICAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEZhZGUsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDEpXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uQ29udGFpbmVyIDoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHRleHRTaGFkb3cgOiAnMC41cHggMC41cHggMXB4ICMwMDAwMDA1YycsXHJcbiAgICAgICAgbWFyZ2luIDogJzAgMXZ3IDEuN3ZoJyxcclxuICAgICAgICBjb2xvcjogJyM2YTc0OGMnLFxyXG4gICAgfSxcclxufSkpO1xyXG5jb25zdCBkZWZhdWx0RGF0YSA9IHtcclxuICAgIGNvbHVtbnMgOiBbXHJcbiAgICAgIHsgdGl0bGU6ICdOYW1lJywgZmllbGQ6ICdOYW1lJyAsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAgeyB0aXRsZTogJ1N1cm5hbWUnLCBmaWVsZDogJ1N1cm5hbWUnIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdCaXJ0aCBZZWFyJywgZmllbGQ6ICdCaXJ0aCBZZWFyJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnUGhvbmUnICwgZmllbGQ6J1Bob25lJywgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgICAgIGZpZWxkOiAnR2VuZGVyJyxcclxuICAgICAgfSxcclxuICAgICAgeyB0aXRsZTogJ01lbW8nICwgZmllbGQ6J01lbW8nfVxyXG4gICAgXSxcclxuICAgIGRhdGEgOiBbXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdNZWhtZXQnLCAnU3VybmFtZSc6ICdCYXJhbicsIFwiQmlydGggWWVhclwiOiAxOTgzLCBcIlBob25lXCI6JzAxMDQ2NTA5OTk1JyAsXCJHZW5kZXJcIjogMSAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ0FkYW0nLCAnU3VybmFtZSc6ICdBZGFtJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODQsIFwiUGhvbmVcIjonMDEwNDY1MDk3OTUnICxcIkdlbmRlclwiOiAyICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnTWVobWV0JywgJ1N1cm5hbWUnOiAnQXRvbScsIFwiQmlydGggWWVhclwiOiAxOTg1LCBcIlBob25lXCI6JzAxMDQ2NTA5Njk1JyAsXCJHZW5kZXJcIjogMSAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ211bCcsICdTdXJuYW1lJzogJ0tvbmduYScsIFwiQmlydGggWWVhclwiOiAxOTg2LCBcIlBob25lXCI6JzAxMDQ2NTA5MTk1JyAsXCJHZW5kZXJcIjogMSAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ0phY2snLCAnU3VybmFtZSc6ICdKYWNrJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODcsIFwiUGhvbmVcIjonMDEwNDY1MDkyOTUnICxcIkdlbmRlclwiOiAyICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnQm9iJywgJ1N1cm5hbWUnOiAnQm9iJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODgsIFwiUGhvbmVcIjonMDEwNDY1MDkzOTUnICxcIkdlbmRlclwiOiAyICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgXVxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmYXVsdFBhZ2UgKHtzdGF0ZSAsIHNldFN0YXRlLCBtYXRjaH0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmYWRlMiwgc2V0RmFkZTJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlT25ERU1PQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlICwgY29sdW1ucyA6IGRlZmF1bHREYXRhLmNvbHVtbnMgLCBkYXRhIDogZGVmYXVsdERhdGEuZGF0YSwgZGVmYXVsdFBhZ2UgOiAhc3RhdGUuZGVmYXVsdFBhZ2V9KTtcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZXRGYWRlMih0cnVlKSAsIDE1MDApO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogODAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0naW5pdGlhbCcgc3R5bGU9e3t0ZXh0U2hhZG93Oic1cHggMS41cHggMS41cHggZ3JheSd9fT5cclxuICAgICAgICAgICAgICAgIE1hbmFnZW1lbnQgVGFibGVcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGd1dHRlckJvdHRvbSBzdHlsZT17e3RleHRTaGFkb3c6JzJweCAycHggMXB4IGJsYWNrJ319PiBcclxuICAgICAgICAgICAgICAgIFlvdSBtYXkgdHJ5IHRoZSBERU1PIGlmIHRoaXMgeW91ciBmaXJzdCB0aW1lLCBcclxuICAgICAgICAgICAgICAgIG9yIGdldCBzdGFydGVkIHJpZ2h0IGF3YXkhXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2ZhZGUyfSB0aW1lb3V0PXt7ZW50ZXIgOiAzMDAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e2hhbmRsZU9uREVNT0NsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVTRSBERU1PIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaGVhZGVycycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEIFJJR0hUIEFXQVlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufVxyXG5cclxuRGVmYXVsdFBhZ2UucHJvcFR5cGVzID0ge1xyXG4gICAgc3RhdGUgOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGRlZmF1bHRQYWdlIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgICAgICBoYXNUYWJsZSA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY29sdW1ucyA6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBkYXRhIDogUHJvcFR5cGVzLmFycmF5XHJcbiAgICB9KSxcclxuICAgIHNldFN0YXRlIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG4iLCJpbXBvcnQgeyBcclxuICAgIEJveCAsUGFwZXIsIG1ha2VTdHlsZXMsIEZhZGUsIFRleHRGaWVsZCwgVG9vbHRpcCwgVHlwb2dyYXBoeSwgQ2hlY2tib3hcclxufVxyXG4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZ1wiO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7IHNhdmVIZWFkZXJzIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tICcuLi91dGlsL01hbmFnZW1lbnRBUEknO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxMHZoJyxcclxuICAgIH0sXHJcbiAgICBmb3JtUm9vdCA6IHtcclxuICAgICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAuNXZoIDF2dycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNjBjaCcsXHJcbiAgICAgICAgICAgIG1pbldpZHRoIDogJzQwY2gnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMHZoJyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kIDogYG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvbnRhaW4nLFxyXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnM3Z3JyxcclxuICAgICAgICB0cmFuc2Zvcm0gOiAncm90YXRlKDkwZGVnKSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbiA6IHtcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJ1xyXG4gICAgfVxyXG59KSlcclxuY29uc3QgZGVmYXVsdEhlYWRlciA9IHtcclxuICAgIFwiaGVhZGVyMFwiIDogJycsXHJcbiAgICBcImhlYWRlcjFcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIyXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyM1wiIDogJycsXHJcbiAgICBcImhlYWRlcjRcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI1XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNlwiIDogJycsXHJcbiAgICBcImhlYWRlcjdcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI4XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOVwiIDogJycsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVycyAoe2lzTG9hZGluZ30pIHtcclxuICAgIC8vIHN0eWxlLCBjb29raWVcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZSddKTtcclxuICAgIC8vIHN0YXRlc1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gICAgY29uc3QgW3Jlc3VsdFNuYWNrICwgc2V0UmVzdWx0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2UsIGNvbnRlbnQgOiAnJ30pO1xyXG4gICAgY29uc3QgW2RhdGEgLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBoZWFkZXJzIDogZGVmYXVsdEhlYWRlcixcclxuICAgICAgICBncm91cGluZ3MgOiBBcnJheSgxMCkuZmlsbChmYWxzZSksXHJcbiAgICB9KVxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBkYXRhUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX1gKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cGluZ0xlbmd0aCA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzID8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MubGVuZ3RoIDogMCA6IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cGluZ3MgPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyA/IFsuLi5yZXNwb25zZS5kYXRhLmdyb3VwaW5nc10gOiBbXSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAtIGdyb3VwaW5nTGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuaGVhZGVycyA/IHJlc3BvbnNlLmRhdGEuaGVhZGVycyA6IHt9IDoge307XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzTGVuZ3RoID0gT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gaGVhZGVyc0xlbmd0aDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2BoZWFkZXIke2l9YF0gPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGFSZWYuY3VycmVudCA9IHtoZWFkZXJzLGdyb3VwaW5nc307XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSh7aGVhZGVycywgZ3JvdXBpbmdzfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkgeyAgLy8gdW5hdXRob3JpemVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMzUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYFBsZWFzZSBsb2cgaW4gYWdhaW4uYH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQgOiBgZXJyb3IgKGNvZGUgOiAke3Jlc3BvbnNlLnN0YXR1c30pYH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMzUwMCk7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3Blbjp0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50OidQbGVhc2UgbG9nIGluIGFnYWluLid9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRhdGFSZWYuY3VycmVudCA9IHtcclxuICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuaGVhZGVyc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncm91cGluZ3MgOiBbXHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmdyb3VwaW5nc1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sW2RhdGEuaGVhZGVycywgZGF0YS5ncm91cGluZ3NdKTtcclxuXHJcbiAgICAvLyBlZmZlY3RzXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PnsgXHJcbiAgICAgICAgc2V0RmFkZSh0cnVlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVTdWJtaXQoZGF0YVJlZi5jdXJyZW50LmhlYWRlcnMsIGRhdGFSZWYuY3VycmVudC5ncm91cGluZ3MsIHRydWUpO1xyXG4gICAgICAgICAgICBoYW5kbGVQcm9ncmVzcyhyZXN1bHQgPT09ICdlcnJvcicgPyAnZXJyb3InIDogJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtdKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgLy8gZXZlbnRzXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7ICAgIC8vIOuqqOuToCDsv6DtgqQg7IKt7KCc7JmAIHByb2ZpbGXsoJzqsbBcclxuICAgICAgICByZW1vdmVDb29raWUoJ3Byb2ZpbGUnKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGhlYWRlcnMsIGdyb3VwaW5ncywgaXNBdXRvU2F2ZSkgPT4ge1xyXG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5ldmVyeSh2ID0+IHYubGVuZ3RoIDw9IDE1KSkgeyAvLyAxNeq4gOyekCDsnbTsg4Eg7KCc7ZWcIOyXkOufrOuplOyEuOyngFxyXG4gICAgICAgICAgICBzZXRTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5maWx0ZXIodj0+dikubGVuZ3RoID09PSAwKSB7ICAgICAvLyDruYTslrTsnojsnYQg6rK97JqwIOyXkOufrOuplOyEuOyngFxyXG4gICAgICAgICAgICBzZXRTbmFjayh7b3Blbjp0cnVlfSlcclxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVIZWFkZXJzKGhlYWRlcnMsZ3JvdXBpbmdzKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc0F1dG9TYXZlKSBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsIGNvbnRlbnQgOiByZXNwb25zZS5yZXN1bHR9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAyMDAwKTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgW2BoZWFkZXIke2luZGV4fWBdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVHcm91cGluZ3MgPSAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGdyb3VwaW5ncyA6IGRhdGEuZ3JvdXBpbmdzLm1hcCgodixpKT0+IGk9PT1pbmRleD8gZS50YXJnZXQuY2hlY2tlZCA6IHYpfSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb21wb25lbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogMTUwMH19PlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezR9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Sb290fSBhdXRvQ29tcGxldGU9J29mZic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J2Rpdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb2xvcj0ndGV4dFByaW1hcnknIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlciBFZGl0IEZvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj17T2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpID8gJ2JsdWUnIDogJ3JlZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSdpbml0aWFsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNSBsZXR0ZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuaGVhZGVycykubWFwKChoZWFkZXIsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpbmRleD09PTA/IHRydWU6ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpZD17YCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17YGhlYWRlci0ke2luZGV4KzF9YH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49J25vcm1hbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0Q2hhbmdlKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2RhdGEuaGVhZGVyc1tgaGVhZGVyJHtpbmRleH1gXS5sZW5ndGggPiAxNSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlxyXG5Zb3UgY2FuIGFycmFuZ2UgdGhlIGRhdGEgd2l0aCBhIHZhbGlkIGhlYWRlciwgXHJcblVuaXF1ZSB2YWx1ZXMgYXJlIG5vdCBjb21tb25seSB1c2VkIGZvciB0aGlzIGZ1bmN0aW9uIGluIGdlbmVyYWwuXHJcbmUuZy4pIG5hbWUsIGFkZHJlc3MsIG1vYmlsZSBOTy4gZXRjLlxyXG5cIlxyXG4gICAgICAgICAgICAgICAgIHBsYWNlbWVudD0ncmlnaHQnIGVudGVyRGVsYXk9ezIwMH0gbGVhdmVEZWxheT17MjAwfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGF0YS5ncm91cGluZ3NbaW5kZXhdfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVHcm91cGluZ3MoZSxpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICB7aW5kZXg9PT0wPyBcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3BhbicgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT4gR3JvdXBpbmchPzwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlNVQk1JVFwiIGFyaWEtbGFiZWw9J3N1Ym1pdCcgcGxhY2VtZW50PSd0b3AnIGVudGVyRGVsYXk9ezIwMH0gbGVhdmVEZWxheT17NDAwfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3d9IG9uTW91c2VPdmVyPXsoZSk9PmUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ31cclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVTdWJtaXQoZGF0YS5oZWFkZXJzICwgZGF0YS5ncm91cGluZ3MpfS8+XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgY29udGVudD17YEhlYWRlciBzaG91bGQgYmUgbGVzcyB0aGFuIDE1IGxldHRlcnMgOihgfSBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17cmVzdWx0U25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFJlc3VsdFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e3Jlc3VsdFNuYWNrLmNvbnRlbnR9IHN0YXR1cz17cmVzdWx0U25hY2suc3RhdHVzPT09J2Vycm9yJz8gJ2Vycm9yJyA6ICdzdWNjZXNzJ30vPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkhlYWRlcnMucHJvcFR5cGVzID0ge1xyXG4gICAgaXNMb2FkaW5nIDogUHJvcFR5cGVzLmJvb2xcclxufSIsImltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnO1xyXG5pbXBvcnQgTWFudWFsRGlhbG9nIGZyb20gXCIuL01hbnVhbERpYWxvZ1wiO1xyXG5pbXBvcnQgeyBvcHRpb25zLGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL1RhYmxlT3B0aW9uc1wiO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBEZWZhdWx0UGFnZSBmcm9tICcuL0RlZmF1bHRQYWdlJztcclxuaW1wb3J0IHBhcnNlRGF0YSBmcm9tICcuLi91dGlsL3BhcnNlRGF0YSc7XHJcbmltcG9ydCBTYXZlQnV0dG9uIGZyb20gJy4vU2F2ZUJ1dHRvbic7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuLy8gdXNlRWZmZWN066GcIGRhdGEsIGNvbHVtbnMg6rCAIOuzgOqyveuQoCDrlYzrp4jri6Qg7ISc67KE7JeQIOyggOyepSDtm4Qg6rCx7IugXHJcbi8vIC4vdXRpbCDqsr3roZzsl5Ag66Gc7KeBIOyekeyEsVxyXG4vLyDthrXsi6Dsl5Ag64yA7ZWcIHRlc3Rjb2Rl7J6R7ISxXHJcbi8vIGNvbHVtbnPsmYAgZGF0YeydmCDqsIEg6rCS65Ok7JeQIOuMgO2VnCDrrLTqsrDshLEg7LK07YGsXHJcbi8vIHByb3BzVHlwZSDsnpHshLFcclxuLy8gU2lkZU1lbnVMaXN0ID0+IExvZ2lu7Jy866GcIOuzgOqyvSwg67mE66Gc6re47J24IOyLnCBMT0dJTuycvOuhnCDrs7Tsnbwg6rKDLCDroZzqt7jsnbjsi5wgTVkgTUVOVeuhnCDrs7TquLBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VtZW50VGFibGUoe2lzTG9hZGluZ30pIHtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcbiAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgLy8gc3RhdGVzXHJcbiAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3NhdmVkU25hY2sgLCBzZXRTYXZlZFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2Vycm9yU25hY2sgLCBzZXRFcnJvclNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHsgIC8vIOy1nOy0iCBBUEnroZwg67Cb7JWE7Jik64qUIOuPmeyeke2VhOyalFxyXG4gICAgZGVmYXVsdFBhZ2UgOiB0cnVlLFxyXG4gICAgaGFzVGFibGUgOiBmYWxzZSxcclxuICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgZGF0YTogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgdGFibGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3RydWN0b3JcclxuICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXMgOiAke3Jlc3BvbnNlLnN0YXR1c30gLCBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKTtcclxuICAgICAgICAgIC8vIOycoOyggCDtmZXsnbjrkJDqs6Ag7YWM7J2067iU64+EIOu5hOyWtOyeiOyngCDslYrsnYQg6rK97JqwXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzPT09MjAwICYmIHJlc3BvbnNlLmRhdGEuaGVhZGVycykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57c2V0U25hY2soe29wZW46dHJ1ZX0pfSw0MDApO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgY29sdW1ucyA6IHBhcnNlRGF0YShyZXNwb25zZS5kYXRhLmhlYWRlcnMgLCByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyksXHJcbiAgICAgICAgICAgICAgZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICBkZWZhdWx0UGFnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGhhc1RhYmxlIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBldmVudHNcclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtzZXREaWFsb2coe29wZW4gOiBmYWxzZX0pO307XHJcbiAgY29uc3QgaGFuZGxlT25TYXZlID0gKGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgLy8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciDsnZggcmVm7JeQ7IScIOyLoOuisOuPhOyeiOuKlCDrjbDsnbTthLAg7LC47KGwXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICBncm91cGluZ3MucHVzaCh2Lmdyb3VwaW5nKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICB9LHt9KVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgIGNvbnN0IHt0YWJsZURhdGEsIC4uLnJlc3R9ID0gdjtcclxuICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzYXZlRGF0YShoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKCFpc0F1dG9TYXZlKSBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gZWZmZWN0c1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7ICAgLy8gd2luZG93IOuNlOu4lO2BtOumrSDsnbTrsqTtirgg7LaU6rCALCDrj4Tsm4Drp5Agb3BlblxyXG4gICAgY29uc3Qgb25kYkNsaWNrID0gKCkgPT4gc2V0RGlhbG9nKHtvcGVuIDogIWRpYWxvZy5vcGVufSk7XHJcbiAgICBjb25zdCBvbktleWRvd24gPSAoZSkgPT4geyAgIC8vIGN0cmwgKyBz66GcIOyggOyepSBldmVudFxyXG4gICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKFwiTWFjXCIpID8gZS5tZXRhS2V5IDogZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlT25TYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgICAvLyDstIjquLDsoJHqt7zsnZgg6rK97JqwIOuNsOydtO2EsOqwgCDsl4bslrQg7JeQ65+sIOuwnOyDne2VoCDsiJgg7J6I7Ja0IOyCvO2VreyLneycvOuhnCDtjJDri6gg7ZuEIOyWuOuniOyatO2KuOyLnOydmCBmZXRjaEFQSeyLpO2WiVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZU9uU2F2ZSh0cnVlKSA6IG51bGwgOiBudWxsO1xyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZVByb2dyZXNzKCdzdWNjZXNzJykgOiBudWxsIDogbnVsbDtcclxuICB9O1xyXG59LCBbXSk7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbiAgY29uc3QgTWFyZ2luID0gKCkgPT4gKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PjwvQm94Pik7ICAvLyDsl6zrsLFcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgIHtcclxuICAgIHN0YXRlLmRlZmF1bHRQYWdlID9cclxuICAgICAgKDxEZWZhdWx0UGFnZSBzdGF0ZT17c3RhdGV9IHNldFN0YXRlPXtzZXRTdGF0ZX0vPilcclxuICAgIDogXHJcbiAgICAoPEJveD5cclxuICAgICAgICA8TWFudWFsRGlhbG9nIG9wZW49e2RpYWxvZy5vcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0vPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICB0YWJsZVJlZj17dGFibGVSZWZ9XHJcbiAgICAgIHRpdGxlPXtcclxuICAgICAgPFNhdmVCdXR0b24gc2V0U2F2ZWRTbmFjaz17c2V0U2F2ZWRTbmFja30gXHJcbiAgICAgIC8vIOuniOyatO2KuCDsnbTtm4Tsl5Ag7KCR6re87ZWE7JqUXHJcbiAgICAgIGRhdGFNYW5hZ2VyPXt0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA6IHt9fS8+XHJcbiAgICB9XHJcbiAgICAgIGNvbHVtbnM9e3N0YXRlLmNvbHVtbnN9XHJcbiAgICAgIGRhdGE9e3N0YXRlLmRhdGF9XHJcbiAgICAgIGxvY2FsaXphdGlvbj17bG9jYWxpemF0aW9ufSAvLyDroZzsu6zrnbzsnbTspohcclxuICAgICAgb3B0aW9ucz17b3B0aW9uc30gLy8g64K067O064K06riwLCDqt7jro6jtlZFcclxuICAgICAgYWN0aW9ucz17Wy8vIOupgO2LsCDshYDroInshZgg7J6R7JeFXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b29sdGlwIDogJ1JlbW92ZSB0aGUgU2VsZWN0ZWQgcm93KHMpJyxcclxuICAgICAgICAgICAgaWNvbiA6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICBvbkNsaWNrIDogKGUgLCBkZWxldGlvbnMpID0+IHsgIC8vIOyEoO2Dne2VnCDssrTtgazrsJXsiqTsl5Ag64yA7ZW0IOuqqOuRkCDsgq3soJwg7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZih2KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZEYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucHJldkRhdGEgLCBkYXRhfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdfSBcclxuICAgICAgZWRpdGFibGU9e3tcclxuICAgICAgICBvblJvd0FkZDogKG5ld0RhdGEpID0+ICAvLyDstpTqsIBcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgb25Sb3dVcGRhdGU6IChuZXdEYXRhLCBvbGREYXRhKSA9PiAgLy8g7IiY7KCVXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAob2xkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgICAgZGF0YVtkYXRhLmluZGV4T2Yob2xkRGF0YSldID0gbmV3RGF0YTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nbmVlZCBzb21lIGhlbHA/ID8gZG91YmxlLWNsaWNrIGFueSBzcGFjZSAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NhdmVkU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNhdmVkU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdTQVZFRCAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2Vycm9yU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldEVycm9yU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdFUlJPUiAhJyBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgIDwvQm94PlxyXG4gICAgKX1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuTWFuYWdlbWVudFRhYmxlLnByb3BUeXBlcyA9IHtcclxuICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiXHJcbmltcG9ydCB7RGlhbG9nLFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBMaXN0LFxyXG4gICAgTGlzdEl0ZW0sXHJcbiAgICBMaXN0SXRlbVRleHQsXHJcbiAgICBCb3gsXHJcbiAgICBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gICAgaWNvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICczdncnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbnVhbERpYWxvZyAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge29wZW4sIG9uQ2xvc2V9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpY29ucyA9IFtcclxuICAgICAgICB7aWNvbiA6ICdhZGRfYm94JyAsIGRlc2NyaXB0aW9uIDogJ1tBZGRdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJ1tFZGl0XSByZWNvcmRzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NlYXJjaCcgLCBkZXNjcmlwdGlvbiA6ICdUeXBlIGRvd24gd29yZHMgdG8gW3NlYXJjaF0uJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2F2ZV9hbHQnICwgZGVzY3JpcHRpb24gOiAnW0Rvd25sb2FkXSBmaWxlcyBpbiBDVlMgZm9ybWF0Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ3ZpZXdfd2VlaycgLCBkZXNjcmlwdGlvbiA6ICdbU2VsZWN0XSBjb2x1bW5zIHRvIGJlIGRpc3BsYXllZCd9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtkZWxldGVdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY2hlY2tfYm94JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgU2VsZWN0IHRoZSBjaGVja2JveCBvbiB0aGUgcm93Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ2ZhY3RfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDaGVjayB0aGUgbnVtYmVyIG9mIHRoZSByb3dzIHNlbGVjdGVkLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2RlbGV0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGiIENsaWNrIHRoZSBCaW4gaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUuJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW0VkaXRdIGhlYWRlcnMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnbWVudScgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIE9wZW4gTVlQQUdFJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2xpY2sgdGhlIFBlbmNpbCBpY29uJ30sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgb25DbG9zZT17b25DbG9zZX0gb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPiBCQVNJQyBNQU5VQUwgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbnMubWFwKChpY29uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17YCR7aWNvbn0gKyAke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17YG1hdGVyaWFsLWljb25zICR7Y2xhc3Nlcy5pY29ufWB9IHN0eWxlPXt7d2lkdGg6JzN2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aWNvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICA8L0RpYWxvZz5cclxuICAgIClcclxufVxyXG5NYW51YWxEaWFsb2cucHJvcFR5cGVzID0ge1xyXG4gICAgb3BlbiA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNsb3NlIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBUb29sdGlwfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYXZlQnV0dG9uICh7c2V0U2F2ZWRTbmFjayAsIGRhdGFNYW5hZ2VyfSkge1xyXG4gICAgZnVuY3Rpb24gb25DbGljayAoKSB7XHJcbiAgICAgICAgICAvLyBTQVZFIEVWRU5UIHV0aWwgPiBNYW5hZ2VtZW50QVBJLnNhdmVEYXRhIOunjOuTpOyWtOyEnCDsvZztlZjquLBcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IGRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgICAgICBvYmpbYGhlYWRlciR7aX1gXSA9IHYudGl0bGU7XHJcbiAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgfSx7fSk7XHJcbiAgICAgICAgICBkYXRhTWFuYWdlci5kYXRhLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCByZXN1bHQgOiBcclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9XHJcbiAgICAgICAgICAke2dyb3VwaW5nc31cclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9XHJcbiAgICAgICAgYClcclxuICAgICAgICBzYXZlRGF0YShoZWFkZXJzLGdyb3VwaW5ncyxkYXRhKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFRvb2x0aXAgdGl0bGU9J0NsaWNrIHRvIFNBVkUgKCBDdHJsICsgUyApJz5cclxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgXHJcbiAgICAgICAgb25DbGljaz17KCk9Pm9uQ2xpY2soKX0+XHJcbiAgICAgICAgICBTQVZFXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIClcclxufVxyXG5cclxuU2F2ZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgc2V0U2F2ZWRTbmFjayA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZGF0YU1hbmFnZXIgOiBQcm9wVHlwZXMub2JqZWN0XHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge0FkZEJveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuLy8gREFUQSBUQUJMRSBPUFRJT05TXHJcblxyXG4gZXhwb3J0IGNvbnN0IG9wdGlvbnM9IHtcclxuICAgIGV4cG9ydEJ1dHRvbjogdHJ1ZSxcclxuICAgIGdyb3VwaW5nOnRydWUsXHJcbiAgICBzZWxlY3Rpb246dHJ1ZSxcclxuICAgIGhlYWRlclN0eWxlOnsgXHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zQ29sdW1uSW5kZXg6LTEsICAvLyDslaHshZgg7JWE7J207L2Y7JyE7LmYXHJcbiAgICBjb2x1bW5zQnV0dG9uIDogdHJ1ZSwgXHJcbiAgICBkZWJvdW5jZUludGVydmFsIDogMTYwLCAvLyDroZzrlKnsi5zqsIRcclxuICAgIHBhZ2VTaXplIDogMTUsICAgICAgICAgIC8vIO2OmOydtOyngOyCrOydtOymiFxyXG4gICAgcGFnZVNpemVPcHRpb25zIDogWzUsIDE1LCAzMCwgNTAsIDEwMF0sIC8vIO2OmOydtOymiCDsgqzsnbTspogg7KKF66WYXHJcbiAgfVxyXG4gZXhwb3J0IGNvbnN0IGxvY2FsaXphdGlvbiA9IHtcclxuICAgIHBhZ2luYXRpb24gOiB7IGxhYmVsRGlzcGxheWVkUm93cyA6ICd7Y291bnR9IHJvd3MgfCB7ZnJvbX0te3RvfScgLCB9LFxyXG4gICAgdG9vbGJhcjoge25Sb3dzU2VsZWN0ZWQ6ICd7MH0gcm93KHMpIHNlbGVjdGVkJ30sXHJcbiAgICBoZWFkZXI6IHthY3Rpb25zOiAnRWRpdCd9LFxyXG4gICAgYm9keToge2VtcHR5RGF0YVNvdXJjZU1lc3NhZ2U6IFxyXG4gICAgICAgIChcclxuICAgICAgICA8Qm94IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgIHtgTm8gUmVjb3JkcyB0byBkaXNwbGF5YH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICBlbmRJY29uPXs8QWRkQm94Lz59XHJcbiAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YENsaWNrIHRoZSBwbHVzIGljb24gb24gdGhlIHJpZ2h0IGFib3ZlIGZvciBhIG5ldyByZWNvcmQuIGB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgfVxyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtUb29sYmFyLCBEcmF3ZXIgLCBCdXR0b24gLCBHcmlkLFxyXG4gICAgIERpdmlkZXIsIEFwcEJhciBhcyBBcHBiYXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEhpZGVPblNjaHJvbGwgZnJvbSBcIi4uL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbFwiO1xyXG5pbXBvcnQgU2lkZU1lbnVMaXN0IGZyb20gXCIuL1NpZGVNZW51TGlzdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IFNpZ25PdXRCdXR0b24gZnJvbSBcIi4vU2lnbk91dEJ1dHRvblwiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6MTgsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbToxOCxcclxuICAgIH0sXHJcbiAgICBsZWZ0IDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OjMwLFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgY2VudGVyIDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OjQ1LFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtZW5kJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgcGFkZGluZzpgMCAke3RoZW1lLnNwYWNpbmcoMyl9YFxyXG4gICAgfSxcclxuICB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdiAocHJvcHMpIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIG1lbnUgOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvciwgb3BlbikgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmxhZyA9IG9wZW4/IHN0YXRlW2FuY2hvcl0gPyBmYWxzZSA6IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogZmxhZyB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwcm9maWxlID0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBhbmNob3IgPSBwcm9maWxlLm5hbWU/ICdNWVBBR0UnIDonTE9HSU4nO1xyXG4gICAgY29uc3QgbGlua3MgPSBbJ2d1ZXN0Ym9vaycsJ21hbmFnZW1lbnQnXTtcclxuICAgIGNvbnN0IExvZ291dEJ0biA9IHByb2ZpbGUubmFtZT8gPFNpZ25PdXRCdXR0b24vPiA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhpZGVPblNjaHJvbGwgey4uLnByb3BzfT5cclxuICAgICAgICA8QXBwYmFyIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2JveFNoYWRvdzonbm9uZSd9fT5cclxuICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4gSG9tZSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke2xpbmt9YH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319IGtleT17bGlua30+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IHtsaW5rfSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50ZXJ9PjxzcGFuPjwvc3Bhbj48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIHRydWUpfSBzdHlsZT17e21hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthbmNob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge0xvZ291dEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyIG9wZW49e3N0YXRlW2FuY2hvcl19IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gdmFyaWFudD0ncGVyc2lzdGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtTaWRlTWVudUxpc3QoIHsuLi5wcm9wcywgYW5jaG9yICx0b2dnbGVEcmF3ZXIgLCBwcm9maWxlfSApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcGJhcj5cclxuICAgICAgICA8L0hpZGVPblNjaHJvbGw+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtVGV4dCwgTGlzdEl0ZW1BdmF0YXIgLCBEaXZpZGVyLCBMaXN0SXRlbSwgVHlwb2dyYXBoeSAsIEF2YXRhciwgSWNvbkJ1dHRvbiAsXHJcbiAgICAgTW9kYWwsIEJveCwgQnV0dG9uLFxyXG4gICAgIFBhcGVyLFxyXG4gICAgIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgU2lnbkluQnV0dG9uIGZyb20gJy4vU2lnbkluQnV0dG9uJztcclxuaW1wb3J0IGdvb2dsZVNpZ25pbkltYWdlIGZyb20gJy4uL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmcnO1xyXG5pbXBvcnQge3JlZGlyZWN0R29vZ2xlTG9naW59IGZyb20gJy4uL3V0aWwvTG9naW5BUEknO1xyXG5pbXBvcnQge0VkaXQsIEluZm8sIERlbGV0ZUZvcmV2ZXIsIFdhcm5pbmd9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHtHbG9iYWxTbmFja2JhckNvbnRleHR9IGZyb20gJy4uL2FwcCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBsaXN0IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzIzdncnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ3N0YXJ0JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbSA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICBsaXN0SXRlbVRleHQgOiB7XHJcbiAgICAgICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIGxhcmdlQXZhdGFyIDoge1xyXG4gICAgICAgIHdpZHRoIDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICBoZWlnaHQgOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgfSxcclxuICAgIGlubGluZSA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2lubGluZSdcclxuICAgIH0sXHJcbiAgICBsaXN0VGV4dCA6IHtcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBtb2RhbCA6IHtcclxuICAgICAgICB0b3AgOiAnNTAlJyxcclxuICAgICAgICBsZWZ0IDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsIC01MCUpYCxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgIG1pbldpZHRoIDogNDAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsUm93Qm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbW9kYWxDb2xCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ3N0YXJ0J1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51TGlzdCAoe2FuY2hvciAsIHRvZ2dsZURyYXdlciwgcHJvZmlsZX0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGhhbmRsZUdsb2JhbFNuYWNrYmFyID0gUmVhY3QudXNlQ29udGV4dChHbG9iYWxTbmFja2JhckNvbnRleHQpO1xyXG4gICAgY29uc3QgW2VtYWlsSW5wdXQsIHNldEVtYWlsSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DbGlja0xvZ2luICgpIHtcclxuICAgICAgICByZWRpcmVjdEdvb2dsZUxvZ2luKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrTW9kYWwgPSAoKSA9PiBzZXRNb2RhbCh0cnVlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xvc2VNb2RhbCA9ICgpID0+IHNldE1vZGFsKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHNldEVtYWlsSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVtYWlsSW5wdXQgPT09IHByb2ZpbGUuZW1haWwpIHtcclxuICAgICAgICAgICAgc2F2ZURhdGEoe30sW10sW3t9XSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUdsb2JhbFNuYWNrYmFyKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuOnRydWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZGF0YS5yZXN1bHQgPT09ICdzdWNjZXNzJyA/ICdzdWNjZXNzJyA6ICdlcnJvcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24ub3JpZ2luKTtcclxuICAgICAgICAgICAgICAgIH0sMTUwMCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlR2xvYmFsU25hY2tiYXIoe1xyXG4gICAgICAgICAgICAgICAgb3Blbjp0cnVlLCBcclxuICAgICAgICAgICAgICAgIHJlc3VsdDonZXJyb3InXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNMb2dnZWQgPSBwcm9maWxlPyBwcm9maWxlLm5hbWU/IHRydWUgOiBmYWxzZSA6IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxyXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXNMb2dnZWQ/ICdQUk9GSUxFJyA6ICdMT0dJTiBNRU5VJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuXHJcbiAgICAgICAgICAgIHtpc0xvZ2dlZD8gXHJcblxyXG4gICAgICAgICAgICAoPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtwcm9maWxlLnBpY3R1cmV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZUF2YXRhcn0gYWx0PXtwcm9maWxlLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvZmlsZS5uYW1lfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRleHR9PjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgdmFyaWFudD1cImluc2V0XCIgY29tcG9uZW50PVwibGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0VNQUlMIDogJyBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3NwYW4nIHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dFByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mbyBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3ttYXJnaW5SaWdodDonMXZ3J319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHNlY29uZGFyeT0nRURJVCBIRUFERVJTJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nZW5kJyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBjb2xvcj0ncHJpbWFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nIGNvbG9yPSdzZWNvbmRhcnknIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzF2dyd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBzZWNvbmRhcnk9J1JFTU9WRSBBTEwgREFUQScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J2VuZCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVyIGNvbG9yPSdzZWNvbmRhcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiDrqqjri6wgKi99XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIG9wZW49e21vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlT25DbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLWNvbnRlbnRzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxSb3dCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nc3RhcnQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJyBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlciBjb2xvcj0nc2Vjb25kYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtdGl0bGVcIiB2YXJpYW50PSdidXR0b24nIGRpc3BsYXk9J2Jsb2NrJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F1dGlvbiA6IHBlcm1hbmVudCBkZWxldGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxDb2xCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1jb250ZW50c1wiIHZhcmlhbnQ9J2JvZHkxJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BBbGwgZGF0YSB3aWxsIGJlIGRlbGV0ZWQgYW5kIGNhbm5vdCBiZSByZWNvdmVyZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgY29ycmVjdGx5IHRvIGNvbnRpbnVlLmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJz57cHJvZmlsZS5lbWFpbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFJvd0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPSdFLU1BSUwnIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAoPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8U2lnbkluQnV0dG9uIHNpZ25Jbj17Z29vZ2xlU2lnbmluSW1hZ2V9Lz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT4pfVxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuTWVudUxpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgYW5jaG9yIDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdG9nZ2xlRHJhd2VyIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHByb2ZpbGUgOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMsQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5CdXR0b24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtzaWduSW59ID0gcHJvcHM7IC8vIOydtOuvuOyngFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2lnbklufSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT48L2ltZz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHAnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSAsIEljb25CdXR0b24sIFRvb2x0aXB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbG9nb3V0IDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6IDAsXHJcbiAgICAgICAgd2lkdGggOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGQnXHJcbiAgICB9LFxyXG4gIH0pKShUb29sdGlwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPSdMb2ctb3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3BhZGRpbmc6NH19IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD4gICAgXHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSAnLi9zZXJ2ZXJVUkwnO1xyXG5cclxuLy8gZ3Vlc3Rib29rIGxpc3Qg67Cb7JWE7Jik6riwIDMw6rCcXHJcbmV4cG9ydCBjb25zdCBnZXRHdWVzdGJvb2tMaXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5nZXQoYCR7c2VydmVyVVJMfS9ndWVzdGJvb2tgKSlcclxufVxyXG4vLyDsgq3soJzsnZgg6rK97JqwIHJlcS5hcnRpY2xlSWQsIOyImOygleydmCDqsr3smrAgcmVxLmFydGljbGVJZCwgcmVxLmNvbnRlbnRcclxuXHJcbi8vIOuTseuhnVxyXG5leHBvcnQgY29uc3QgcG9zdEd1ZXN0Ym9vayA9IChjb250ZW50KSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgJHtzZXJ2ZXJVUkx9L2d1ZXN0Ym9va2AgLCB7XHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgIH1cclxuICAgIH0sIHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcbi8vIOyImOyglVxyXG5leHBvcnQgY29uc3QgdXBkYXRlR3Vlc3Rib29rID0gKGFydGljbGVJZCwgY29udGVudCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnB1dChgJHtzZXJ2ZXJVUkx9L2d1ZXN0Ym9va2AsIHtcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBhcnRpY2xlSWQsXHJcbiAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHMgOiB0cnVlfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUd1ZXN0Ym9vayA9IChhcnRpY2xlSWQpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYCR7c2VydmVyVVJMfS9ndWVzdGJvb2tgICwge1xyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIGFydGljbGVJZFxyXG4gICAgICAgIH1cclxuICAgIH0seyB3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSBcIi4vc2VydmVyVVJMXCI7XHJcblxyXG4vLyBVUkwgZXhwb3J0XHJcbi8vIHNldmVy7JeQ7IScIOuwm+ydgCB1cmzroZwg66as64uk7J2066CJ7Yq4XHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdEdvb2dsZUxvZ2luID0gKCkgPT4gYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbG9naW5gKS50aGVuKHJlcyA9PiBsb2NhdGlvbi5hc3NpZ24ocmVzLmRhdGEpKTtcclxuZXhwb3J0IGNvbnN0IGdldFRva2VuQW5kUHJvZmlsZSA9ICh0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7c2VydmVyVVJMfS9sb2dpbmAsIHt0b2tlbn0gLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlLFxyXG4gICAgfSkudGhlbihyZXNwb25zZT0+UHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gJy4vc2VydmVyVVJMJztcclxuXHJcbi8vIO2FjOydtOu4lCDrjbDsnbTthLAg67Cb7JWE7Jik6riwIGNvb2tpZeyXkCDri7TquLQgdG9rZW7sgqzsmqlcclxuZXhwb3J0IGNvbnN0IGdldE1hbmFnZW1lbnRUYWJsZSA9ICAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L21hbmFnZW1lbnRgLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUhlYWRlcnMgPSAoaGVhZGVycywgZ3JvdXBpbmdzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2F2aW5nIGhlYWRlcnMgOiBcclxuICAgIGhlYWRlcnMgOiAke0pTT04uc3RyaW5naWZ5KGhlYWRlcnMpfVxyXG4gICAgZ3JvdXBpbmdzIDogJHtKU09OLnN0cmluZ2lmeShncm91cGluZ3MpfWApO1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9oZWFkZXJzYCwge1xyXG4gICAgICAgIC8vIGRhdGFcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5nc1xyXG4gICAgfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KS50aGVuKHJlcyA9PiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpKSk7ICAgIC8vIOy/oO2CpOyZgCDtlajqu5hcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVEYXRhID0gKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9kYXRhYCwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgZ3JvdXBpbmdzLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDApIHJldHVybiBQcm9taXNlLnJlamVjdCg0MDApO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpXHJcbiAgICB9KSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoaGVhZGVycyAsIGdyb3VwaW5ncykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBkYXRhIHBhcnNpbmchISEhYClcclxuICAgIHJldHVybiAoT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5maWx0ZXIodj0+dikubWFwKCh2YWx1ZSxpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlIDogdmFsdWUsXHJcbiAgICAgICAgZmllbGQgOiB2YWx1ZSxcclxuICAgICAgICBncm91cGluZyA6IGdyb3VwaW5nc1tpbmRleF1cclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH0iLCIvLyBleHBvcnQgZGVmYXVsdCBcImh0dHBzOi8vbWFuYWdlbWVudC1hcHBsZS5oZXJva3VhcHAuY29tXCI7XHJcbmV4cG9ydCBkZWZhdWx0IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==