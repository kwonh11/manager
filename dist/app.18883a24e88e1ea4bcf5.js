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
      setIsLoading = _React$useState4[1]; // snackbar


  var _React$useState5 = React.useState({
    open: false,
    result: 'success'
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      globalSnackbar = _React$useState6[0],
      setGlobalSnackbar = _React$useState6[1];

  var _React$useState7 = React.useState({
    open: false
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      tooFastSnack = _React$useState8[0],
      setTooFastSnack = _React$useState8[1];

  var _React$useState9 = React.useState({
    open: false
  }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      deletedSnack = _React$useState10[0],
      setDeletedSnack = _React$useState10[1];

  var _React$useState11 = React.useState({
    open: false,
    content: ''
  }),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      errorSnack = _React$useState12[0],
      setErrorSnack = _React$useState12[1];

  var _React$useState13 = React.useState({
    open: false
  }),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      successSnack = _React$useState14[0],
      setSuccessSnack = _React$useState14[1];

  var _React$useState15 = React.useState({
    open: false
  }),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      notLoggedSnack = _React$useState16[0],
      setNotLoggedSnack = _React$useState16[1];

  var guestBookSnackProps = {
    isLoading: isLoading,
    tooFastSnack: tooFastSnack,
    setTooFastSnack: setTooFastSnack,
    deletedSnack: deletedSnack,
    setDeletedSnack: setDeletedSnack,
    errorSnack: errorSnack,
    setErrorSnack: setErrorSnack,
    successSnack: successSnack,
    setSuccessSnack: setSuccessSnack,
    notLoggedSnack: notLoggedSnack,
    setNotLoggedSnack: setNotLoggedSnack
  };
  var progressRef = React.useRef(0);

  var handleBeforeunload = function handleBeforeunload(result) {
    var interval = setInterval(function () {
      console.log("progress : ".concat(progressRef.current));
      setIsLoading(true);
      progressRef.current = progressRef.current < 100 ? progressRef.current + 20 : 100;

      if (progressRef.current === 100) {
        progressRef.current = 0;
        setIsLoading(false);
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
      return /*#__PURE__*/React.createElement(_guestbook_Guestbook__WEBPACK_IMPORTED_MODULE_2__["default"], guestBookSnackProps);
    }
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/management",
    render: function render() {
      return /*#__PURE__*/React.createElement(_management_Management__WEBPACK_IMPORTED_MODULE_3__["default"], {
        setErrorSnack: setErrorSnack,
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
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: successSnack.open,
    onClose: function onClose() {
      return setSuccessSnack({
        open: false
      });
    },
    content: "SUCCESS",
    status: "success"
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: notLoggedSnack.open,
    onClose: function onClose() {
      return setNotLoggedSnack({
        open: false
      });
    },
    content: "LOGIN FIRST",
    status: "error"
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: tooFastSnack.open,
    onClose: function onClose() {
      return setTooFastSnack({
        open: false
      });
    },
    content: "SORRY TOO FAST ( Interval : 15s )",
    status: "error"
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: deletedSnack.open,
    onClose: function onClose() {
      return setDeletedSnack({
        open: false
      });
    },
    content: "Deleted",
    status: "success"
  }), /*#__PURE__*/React.createElement(_customHook_SnackBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: errorSnack.open,
    onClose: function onClose() {
      return setErrorSnack({
        open: false
      });
    },
    content: "ERROR : ".concat(errorSnack.content),
    status: "error"
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
      height: '85%',
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
      width: '60vw',
      marginTop: '2vh'
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
function Guestbook(props) {
  var classes = useStyles();
  var inputRef = React.useRef();

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_8__["useCookies"])(['profile']),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  var isLoading = props.isLoading,
      tooFastSnack = props.tooFastSnack,
      setTooFastSnack = props.setTooFastSnack,
      deletedSnack = props.deletedSnack,
      setDeletedSnack = props.setDeletedSnack,
      errorSnack = props.errorSnack,
      setErrorSnack = props.setErrorSnack,
      successSnack = props.successSnack,
      setSuccessSnack = props.setSuccessSnack,
      notLoggedSnack = props.notLoggedSnack,
      setNotLoggedSnack = props.setNotLoggedSnack;

  var _React$useState = React.useState({
    input: '',
    chatLogs: []
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

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
        open: true,
        content: 'GUEST BOOK 목록 불러오기 실패'
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
        open: true,
        content: '권한이 없습니다. 다시 로그인해보세요'
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
      setErrorSnack({
        open: true,
        content: "120\uAE00\uC790 \uC81C\uD55C, \uD604\uC7AC : ".concat(value.length, " \uAE00\uC790")
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
                getList();
                setSuccessSnack({
                  open: true
                });
              }
            })["catch"](function (error) {
              setErrorSnack({
                open: true,
                content: '글 등록은 로그인 후 이용해주세요 :) '
              });
            });
          }
        } else {
          setErrorSnack({
            open: true,
            content: '글 등록은 로그인 후 이용해주세요 :) '
          });
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
  }, "GUEST BOOK : \n                      LEAVE A MESSAGE", "."), state.chatLogs.map(function (article, index) {
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
  })))));
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
    innerBox1: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30vw',
      color: '#eaeaea',
      marginTop: '-5vh',
      textShadow: '1px 4px 4px #9e9999'
    },
    innerBox2: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30vw',
      color: '#eaeaea',
      marginTop: '-5vh',
      textShadow: '1px 4px 4px #9e9999'
    },
    descriptionBox: {
      display: 'flex',
      color: '#fff',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '50vw',
      marginTop: '3vh'
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
    className: classes.innerBox1
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    style: {
      fontWeight: 'bolder'
    },
    gutterBottom: true
  }, "GUESTBOOK"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.descriptionBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    gutterBottom: true
  }, "\uD55C\uC904 \uBC29\uBA85\uB85D\uC744 \uC791\uC131\uD574\uBCF4\uC138\uC694"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\uAC1C\uBC1C\uC790 \uB610\uB294 \uC720\uC800\uB4E4\uC5D0\uAC8C"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\uD53C\uB4DC\uBC31\uC774\uB098 \uC778\uC0AC\uB97C \uAC74\uB124\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\uBD88\uD3B8\uC0AC\uD56D\uC774\uB098 \uAC1C\uC120\uC810\uB4F1\uC744 \uC54C\uB824\uC8FC\uC2DC\uBA74 "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\uC11C\uBE44\uC2A4\uB97C \uAC1C\uC120\uD558\uB294\uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, " "))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    orientation: "vertical",
    flexItem: true,
    style: {
      width: '1px',
      height: '60%',
      backgroundColor: '#9e9999'
    }
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.innerBox2
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    style: {
      fontWeight: 'bolder'
    },
    gutterBottom: true
  }, "MANAGEMENT"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.descriptionBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    gutterBottom: true
  }, "\uC27D\uAC8C \uB370\uC774\uD130\uAD00\uB9AC\uB97C \uD574\uBCF4\uC138\uC694"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\uC785\uB825,\uC218\uC815,\uC0AD\uC81C,\uB0B4\uBCF4\uB0B4\uAE30,\uADF8\uB8F9\uD654 \uB4F1\uC758 \uAE30\uB2A5"), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\uAD6C\uAE00\uACC4\uC815\uC73C\uB85C PC\uB9CC \uC788\uB2E4\uBA74 \uC5B4\uB514\uC11C\uB4E0 "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\uB3D9\uC77C\uD55C \uB370\uC774\uD130\uB97C \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\uB2E4\uC591\uD558\uAC8C \uD65C\uC6A9\uD574\uBCF4\uC138\uC694 :)"))))));
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






/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'Quick start guide',
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
      minWidth: 400,
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
    field: 'Gender',
    grouping: true
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
    "Birth Year": 1995,
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
  var isLoading = _ref.isLoading,
      setErrorSnack = _ref.setErrorSnack;
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
      dialog = _React$useState6[0],
      setDialog = _React$useState6[1];

  var _React$useState7 = React.useState({
    // 최초 API로 받아오는 동작필요
    defaultPage: true,
    hasTable: false,
    columns: [],
    data: []
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      state = _React$useState8[0],
      setState = _React$useState8[1];

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
        open: true,
        content: '데이터를 불러오는 중 에러 발생.'
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
    if (!cookies.profile) {
      setErrorSnack({
        open: true,
        content: '저장은 로그인 먼저 진행해주세요 :)'
      });
      console.log('not logged');
    } else {
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
      Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_5__["saveData"])(headers, groupings, data).then(function (response) {
        if (response.result === 'success') {
          if (!isAutoSave) setSavedSnack({
            open: true
          });
        }
      })["catch"](function (err) {
        if (err) {
          console.log("error occured during handleOnSave : ".concat(err));
          setErrorSnack({
            open: true,
            content: '로그인 시간이 만료된 것 같습니다. 다시 시도해보세요'
          });
        }
      });
    }
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
      setSavedSnack: setSavedSnack,
      setErrorSnack: setErrorSnack,
      profile: cookies.profile // 마운트 이후에 접근필요
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
      dataManager = _ref.dataManager,
      profile = _ref.profile,
      setErrorSnack = _ref.setErrorSnack;

  function _onClick() {
    if (!profile) {
      setErrorSnack({
        open: true,
        content: '로그인 먼저 진행해주세요 :)'
      });
      console.log('not logged');
      return;
    } // SAVE EVENT util > ManagementAPI.saveData 만들어서 콜하기


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
/* harmony import */ var _util_LoginAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/LoginAPI */ "./src/util/LoginAPI.js");
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
    console.log('logout');
    Object(_util_LoginAPI__WEBPACK_IMPORTED_MODULE_3__["logout"])().then(function (res) {
      removeCookie('profile');
      removeCookie('user');
      location.href = location.origin;
    });
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
/*! exports provided: redirectGoogleLogin, getTokenAndProfile, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectGoogleLogin", function() { return redirectGoogleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenAndProfile", function() { return getTokenAndProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
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
var logout = function logout() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/logout"), {
    withCredentials: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9FcnJvckZhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL0hpZGVPblNjaHJvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9TbmFja0Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ndWVzdGJvb2svR3Vlc3Rib29rLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Nyb3NzbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9EZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ltYWdlU2xpZGVTb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24yLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0xpc3RDYXJvdXNlbERlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvU3RhcnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ibGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9kZXNrLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Vhc3ktbG9naW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xpbmstbWFuYWdlbWVudC1wYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21ha2UtaGVhZGVycy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbW9vbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9teW1lbnUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcnQtcmlnaHQtYXdheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93aGl0ZS1hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93aGl0ZWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9EZWZhdWx0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9IZWFkZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvTWFudWFsRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1NhdmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvVGFibGVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9HdWVzdGJvb2tBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9naW5BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTWFuYWdlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wYXJzZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc2VydmVyVVJMLmpzIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTG9nb3V0Q29udGV4dCIsIlByb2dyZXNzQ29udGV4dCIsIkdsb2JhbFNuYWNrYmFyQ29udGV4dCIsIkFwcCIsInFzIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHIiLCJpZF90b2tlbiIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm9wZW4iLCJyZXN1bHQiLCJnbG9iYWxTbmFja2JhciIsInNldEdsb2JhbFNuYWNrYmFyIiwidG9vRmFzdFNuYWNrIiwic2V0VG9vRmFzdFNuYWNrIiwiZGVsZXRlZFNuYWNrIiwic2V0RGVsZXRlZFNuYWNrIiwiY29udGVudCIsImVycm9yU25hY2siLCJzZXRFcnJvclNuYWNrIiwic3VjY2Vzc1NuYWNrIiwic2V0U3VjY2Vzc1NuYWNrIiwibm90TG9nZ2VkU25hY2siLCJzZXROb3RMb2dnZWRTbmFjayIsImd1ZXN0Qm9va1NuYWNrUHJvcHMiLCJwcm9ncmVzc1JlZiIsInVzZVJlZiIsImhhbmRsZUJlZm9yZXVubG9hZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJnZXRUb2tlbkFuZFByb2ZpbGUiLCJ0aGVuIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwicGF0aCIsIm1heEFnZSIsInNhbWVTaXRlIiwiZXJyIiwiRXJyb3IiLCJFcnJvckZhbGxiYWNrIiwiZXJyb3IiLCJjb21wb25lbnRTdGFjayIsInJlcGxhY2UiLCJvcmlnaW4iLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJwYXBlciIsInBhZGRpbmciLCJjb2xvciIsInBhbGV0dGUiLCJncmV5IiwiZm9udFdlaWdodCIsInBhcGVyMiIsIm1hcmdpblRvcCIsImJ1dHRvbiIsInJlc2V0RXJyb3JCb3VuZGFyeSIsImNsYXNzZXMiLCJzZWNvbmQiLCJzZXRTZWNvbmQiLCJtZXNzYWdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiSGlkZU9uU2Nyb2xsIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsIkxvYWRpbmciLCJib29sIiwiQ3VzdG9tU25hY2tiYXIiLCJvbkNsb3NlIiwic3RhdHVzIiwiZGlyZWN0aW9uIiwiZm9udFNpemUiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwidXNlT25GaXJzdFJlbmRlciIsImlzRmlyc3RSZWYiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJtaW5IZWlnaHQiLCJmb290ZXIiLCJzcGFjaW5nIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImFycm93IiwiYWxpZ25TZWxmIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZFNpemUiLCJTdGlja3lGb290ZXIiLCJwYXRobmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInRyYW5zaXRpb24iLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYW5hZ2VtZW50QmFja2dyb3VuZCIsInRyYW5zZm9ybSIsIndoaXRlQXJyb3ciLCJjb250YWluZXIiLCJiYWNrTG9nbyIsInBvc2l0aW9uIiwiekluZGV4Iiwib3BhY2l0eSIsImNoYXRDb250YWluZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJpbnB1dEJveCIsImJ1YmJsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJteUJ1YmJsZSIsImNoYXRCb3giLCJPdGhlckF2YXRhciIsIm15QXZhdGFyIiwiR3Vlc3Rib29rIiwiaW5wdXRSZWYiLCJpbnB1dCIsImNoYXRMb2dzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvZ1JlZiIsImNoYXRDb250YWluZXJSZWYiLCJ0cmFuc3BvcnRhYmxlUmVmIiwiZ2V0TGlzdCIsImdldEd1ZXN0Ym9va0xpc3QiLCJsaXN0IiwiaGFuZGxlT25EZWxldGVDbGljayIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkZWxldGVHdWVzdGJvb2siLCJzZXRUaW1lb3V0Iiwib25JbnB1dENoYW5nZSIsInZhbHVlIiwibGVuZ3RoIiwiZW50ZXJLZXlIYW5kbGVyIiwia2V5Q29kZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsInNjcm9sbEhlaWdodCIsInBvc3RHdWVzdGJvb2siLCJyZXNwb25zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiYXJ0aWNsZSIsImluZGV4Iiwib3duIiwiX2lkIiwibGluZUhlaWdodCIsImRhdGUiLCJ2Iiwic2hyaW5rIiwidGV4dENvbnRhaW5lciIsInRleHRTaGFkb3ciLCJJbWFnZUNhcm91c2VsIiwiaW1hZ2VMaXN0Iiwic2V0U3RlcHBlciIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImhhbmRsZUFmdGVyU2xpZGUiLCJzbGlkZUluZGV4IiwiaW1hZ2UiLCJzcmMiLCJudW1iZXIiLCJmbGV4V3JhcCIsIkNyb3NzbGluZSIsImZhZGUiLCJzZXRGYWRlIiwiZG9tUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZW50ZXIiLCJleGl0IiwiaW5uZXJCb3gxIiwiaW5uZXJCb3gyIiwiZGVzY3JpcHRpb25Cb3giLCJEZXNjcmlwdGlvbiIsImdyb3ciLCJzZXRHcm93IiwidHJhbnNmb3JtT3JpZ2luIiwidGltZW91dCIsImFwcGVhciIsIkhvbWUiLCJkZXNjcmlwdGlvbiIsImVhc3lMb2dpbiIsImxpbmtNYW5hZ2VtZW50UGFnZSIsInN0YXJ0UmlnaHRBd2F5IiwibWFrZUhlYWRlcnMiLCJoYW5kbGVUYWJsZSIsInVzZU15bWVudSIsIm1pbldpZHRoIiwidGV4dFBhcGVyIiwiSW50cm9kdWN0aW9uIiwic3RlcHBlciIsImxvZ29Cb3giLCJiaWdBdmF0YXIiLCJ0ZXh0V2l0aFNoYWRvdyIsIm1hcmdpbkxlZnQiLCJtb29uSW1hZ2UiLCJpbmxpbmUiLCJEZXNjcmlwdGlvbkxpc3QiLCJzbGlkZVNvdXJjZSIsIml0ZW0iLCJhbGlnbkNvbnRlbnQiLCJNYWluIiwidGV4dCIsInR5cG9ncmFwaHkiLCJpbm5lckJveCIsInRleHREZWNvcmF0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uQ29udGFpbmVyIiwiZGVmYXVsdERhdGEiLCJjb2x1bW5zIiwidGl0bGUiLCJmaWVsZCIsImdyb3VwaW5nIiwiRGVmYXVsdFBhZ2UiLCJtYXRjaCIsImZhZGUyIiwic2V0RmFkZTIiLCJoYW5kbGVPbkRFTU9DbGljayIsImRlZmF1bHRQYWdlIiwic2hhcGUiLCJoYXNUYWJsZSIsImFycmF5IiwiZm9ybVJvb3QiLCJkZWZhdWx0SGVhZGVyIiwiSGVhZGVycyIsImhhbmRsZVByb2dyZXNzIiwidXNlQ29udGV4dCIsInNuYWNrIiwic2V0U25hY2siLCJyZXN1bHRTbmFjayIsInNldFJlc3VsdFNuYWNrIiwiaGVhZGVycyIsImdyb3VwaW5ncyIsIkFycmF5IiwiZmlsbCIsInNldERhdGEiLCJkYXRhUmVmIiwiZ2V0TWFuYWdlbWVudFRhYmxlIiwiZ3JvdXBpbmdMZW5ndGgiLCJpIiwicHVzaCIsImhlYWRlcnNMZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJoYW5kbGVMb2dvdXQiLCJoYW5kbGVTdWJtaXQiLCJocmVmIiwiaXNBdXRvU2F2ZSIsImV2ZXJ5IiwiZmlsdGVyIiwic2F2ZUhlYWRlcnMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUdyb3VwaW5ncyIsImNoZWNrZWQiLCJoZWFkZXIiLCJNYW5hZ2VtZW50VGFibGUiLCJzYXZlZFNuYWNrIiwic2V0U2F2ZWRTbmFjayIsImRpYWxvZyIsInNldERpYWxvZyIsInRhYmxlUmVmIiwicGFyc2VEYXRhIiwiaGFuZGxlRGlhbG9nQ2xvc2UiLCJoYW5kbGVPblNhdmUiLCJkYXRhTWFuYWdlciIsInJlZHVjZSIsIm9iaiIsInRhYmxlRGF0YSIsInJlc3QiLCJzYXZlRGF0YSIsIm9uZGJDbGljayIsIm9uS2V5ZG93biIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwibWV0YUtleSIsImN0cmxLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIk1hcmdpbiIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJldkRhdGEiLCJvblJvd0FkZCIsIm5ld0RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZXZTdGF0ZSIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsIk1hbnVhbERpYWxvZyIsImljb25zIiwiU2F2ZUJ1dHRvbiIsImV4cG9ydEJ1dHRvbiIsInNlbGVjdGlvbiIsImhlYWRlclN0eWxlIiwiYWN0aW9uc0NvbHVtbkluZGV4IiwiY29sdW1uc0J1dHRvbiIsImRlYm91bmNlSW50ZXJ2YWwiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsInBhZ2luYXRpb24iLCJsYWJlbERpc3BsYXllZFJvd3MiLCJ0b29sYmFyIiwiblJvd3NTZWxlY3RlZCIsImFjdGlvbnMiLCJib2R5IiwiZW1wdHlEYXRhU291cmNlTWVzc2FnZSIsImZsZXhHcm93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsZWZ0IiwicGFkZGluZ0xlZnQiLCJqdXN0aWZ5IiwiY2VudGVyIiwicmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJOYXYiLCJtZW51IiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwiZXZlbnQiLCJmbGFnIiwibGlua3MiLCJMb2dvdXRCdG4iLCJib3hTaGFkb3ciLCJsaW5rIiwibWFyZ2luUmlnaHQiLCJTaWRlTWVudUxpc3QiLCJsaXN0SXRlbSIsImxpc3RJdGVtVGV4dCIsImxhcmdlQXZhdGFyIiwibGlzdFRleHQiLCJtb2RhbCIsInNoYWRvd3MiLCJtb2RhbFJvd0JveCIsIm1vZGFsQ29sQm94IiwiTWVudUxpc3QiLCJoYW5kbGVHbG9iYWxTbmFja2JhciIsImVtYWlsSW5wdXQiLCJzZXRFbWFpbElucHV0IiwiaGFuZGxlT25DbGlja0xvZ2luIiwicmVkaXJlY3RHb29nbGVMb2dpbiIsImhhbmRsZU9uQ2xpY2tNb2RhbCIsInNldE1vZGFsIiwiaGFuZGxlT25DbG9zZU1vZGFsIiwiaGFuZGxlT25TdWJtaXQiLCJpc0xvZ2dlZCIsImdvb2dsZVNpZ25pbkltYWdlIiwiU2lnbkluQnV0dG9uIiwic2lnbkluIiwibG9nb3V0IiwiTGlnaHRUb29sdGlwIiwid2l0aFN0eWxlcyIsImNvbW1vbiIsIndoaXRlIiwiVG9vbHRpcCIsInJlcyIsImF4aW9zIiwiZ2V0Iiwic2VydmVyVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicG9zdCIsImFydGljbGVfaWQiLCJhc3NpZ24iLCJ0b2tlbiIsInB1dCIsInJlamVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ08sSUFBTUEsV0FBVyxHQUFHQyxLQUFLLENBQUNDLGFBQU4sRUFBcEI7QUFDQSxJQUFNQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0MsYUFBTixFQUF0QjtBQUNBLElBQU1FLGVBQWUsR0FBR0gsS0FBSyxDQUFDQyxhQUFOLEVBQXhCO0FBQ0EsSUFBTUcscUJBQXFCLEdBQUdKLEtBQUssQ0FBQ0MsYUFBTixFQUE5QjtBQUVRLFNBQVNJLEdBQVQsR0FBZTtBQUFBLGtCQUNMQyx5Q0FBRSxDQUFDQyxLQUFILENBQVNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLE1BQXJCLENBQTRCLENBQTVCLENBQVQsQ0FESztBQUFBLE1BQ2xCQyxRQURrQixhQUNsQkEsUUFEa0I7O0FBQUEsb0JBRXFCQywrREFBVSxDQUFFLENBQUMsU0FBRCxDQUFGLENBRi9CO0FBQUE7QUFBQSxNQUVsQkMsT0FGa0I7QUFBQSxNQUVSQyxTQUZRO0FBQUEsTUFFSUMsWUFGSjs7QUFBQSx3QkFHT2hCLEtBQUssQ0FBQ2lCLFFBQU4sQ0FBZUgsT0FBTyxDQUFDSSxPQUF2QixDQUhQO0FBQUE7QUFBQSxNQUdsQkEsT0FIa0I7QUFBQSxNQUdSQyxVQUhROztBQUFBLHlCQUlRbkIsS0FBSyxDQUFDaUIsUUFBTixDQUFlLEtBQWYsQ0FKUjtBQUFBO0FBQUEsTUFJbkJHLFNBSm1CO0FBQUEsTUFJUkMsWUFKUSx3QkFLMUI7OztBQUwwQix5QkFNa0JyQixLQUFLLENBQUNpQixRQUFOLENBQWU7QUFBQ0ssUUFBSSxFQUFHLEtBQVI7QUFBZ0JDLFVBQU0sRUFBRTtBQUF4QixHQUFmLENBTmxCO0FBQUE7QUFBQSxNQU1uQkMsY0FObUI7QUFBQSxNQU1IQyxpQkFORzs7QUFBQSx5QkFPY3pCLEtBQUssQ0FBQ2lCLFFBQU4sQ0FBZTtBQUFDSyxRQUFJLEVBQUM7QUFBTixHQUFmLENBUGQ7QUFBQTtBQUFBLE1BT25CSSxZQVBtQjtBQUFBLE1BT0xDLGVBUEs7O0FBQUEseUJBUWMzQixLQUFLLENBQUNpQixRQUFOLENBQWU7QUFBQ0ssUUFBSSxFQUFDO0FBQU4sR0FBZixDQVJkO0FBQUE7QUFBQSxNQVFuQk0sWUFSbUI7QUFBQSxNQVFMQyxlQVJLOztBQUFBLDBCQVNVN0IsS0FBSyxDQUFDaUIsUUFBTixDQUFlO0FBQUNLLFFBQUksRUFBQyxLQUFOO0FBQVlRLFdBQU8sRUFBQztBQUFwQixHQUFmLENBVFY7QUFBQTtBQUFBLE1BU25CQyxVQVRtQjtBQUFBLE1BU1BDLGFBVE87O0FBQUEsMEJBVWNoQyxLQUFLLENBQUNpQixRQUFOLENBQWU7QUFBQ0ssUUFBSSxFQUFDO0FBQU4sR0FBZixDQVZkO0FBQUE7QUFBQSxNQVVuQlcsWUFWbUI7QUFBQSxNQVVMQyxlQVZLOztBQUFBLDBCQVdrQmxDLEtBQUssQ0FBQ2lCLFFBQU4sQ0FBZTtBQUFDSyxRQUFJLEVBQUM7QUFBTixHQUFmLENBWGxCO0FBQUE7QUFBQSxNQVduQmEsY0FYbUI7QUFBQSxNQVdIQyxpQkFYRzs7QUFhMUIsTUFBTUMsbUJBQW1CLEdBQUc7QUFBQ2pCLGFBQVMsRUFBVEEsU0FBRDtBQUN4Qk0sZ0JBQVksRUFBWkEsWUFEd0I7QUFDVkMsbUJBQWUsRUFBZkEsZUFEVTtBQUV4QkMsZ0JBQVksRUFBWkEsWUFGd0I7QUFFVkMsbUJBQWUsRUFBZkEsZUFGVTtBQUd4QkUsY0FBVSxFQUFWQSxVQUh3QjtBQUdaQyxpQkFBYSxFQUFiQSxhQUhZO0FBSXhCQyxnQkFBWSxFQUFaQSxZQUp3QjtBQUlWQyxtQkFBZSxFQUFmQSxlQUpVO0FBS3hCQyxrQkFBYyxFQUFkQSxjQUx3QjtBQUtSQyxxQkFBaUIsRUFBakJBO0FBTFEsR0FBNUI7QUFPQSxNQUFNRSxXQUFXLEdBQUd0QyxLQUFLLENBQUN1QyxNQUFOLENBQWEsQ0FBYixDQUFwQjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNqQixNQUFELEVBQVk7QUFDbkMsUUFBTWtCLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQUs7QUFDOUJDLGFBQU8sQ0FBQ0MsR0FBUixzQkFBMEJOLFdBQVcsQ0FBQ08sT0FBdEM7QUFDQXhCLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FpQixpQkFBVyxDQUFDTyxPQUFaLEdBQXVCUCxXQUFXLENBQUNPLE9BQVosR0FBc0IsR0FBdEIsR0FBNEJQLFdBQVcsQ0FBQ08sT0FBWixHQUFzQixFQUFsRCxHQUF1RCxHQUE5RTs7QUFDSixVQUFJUCxXQUFXLENBQUNPLE9BQVosS0FBd0IsR0FBNUIsRUFBaUM7QUFDNUJQLG1CQUFXLENBQUNPLE9BQVosR0FBc0IsQ0FBdEI7QUFDQXhCLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0F5QixxQkFBYSxDQUFDTCxRQUFELENBQWI7QUFDSjtBQUNKLEtBVCtCLEVBUzlCLEdBVDhCLENBQTVCO0FBVUgsR0FYRDs7QUFZQXpDLE9BQUssQ0FBQytDLFNBQU4sQ0FBZ0IsWUFBSTtBQUNoQixRQUFHbkMsUUFBSCxFQUFhO0FBQ1QrQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FJLGdGQUFrQixDQUFDcEMsUUFBRCxDQUFsQixDQUE2QnFDLElBQTdCLENBQWtDLFVBQUFDLElBQUksRUFBSTtBQUN0Q1AsZUFBTyxDQUFDQyxHQUFSLDJCQUErQk8sSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWYsQ0FBL0I7QUFEc0MsWUFFL0JHLElBRitCLEdBRVBILElBRk8sQ0FFL0JHLElBRitCO0FBQUEsWUFFekJDLEtBRnlCLEdBRVBKLElBRk8sQ0FFekJJLEtBRnlCO0FBQUEsWUFFbEJDLE9BRmtCLEdBRVBMLElBRk8sQ0FFbEJLLE9BRmtCO0FBR3RDeEMsaUJBQVMsQ0FBQyxTQUFELEVBQVc7QUFBQ3NDLGNBQUksRUFBSkEsSUFBRDtBQUFRQyxlQUFLLEVBQUxBLEtBQVI7QUFBZUMsaUJBQU8sRUFBUEE7QUFBZixTQUFYLEVBQW1DO0FBQUNDLGNBQUksRUFBQyxHQUFOO0FBQVlDLGdCQUFNLEVBQUcsSUFBckI7QUFBMkJDLGtCQUFRLEVBQUM7QUFBcEMsU0FBbkMsQ0FBVCxDQUhzQyxDQUdxRDtBQUM5RixPQUpELFdBSVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1osY0FBTSxJQUFJQyxLQUFKLENBQVUsb0VBQVYsQ0FBTjtBQUNILE9BTkQ7QUFPSDtBQUNKLEdBWEQsRUFXRSxDQUFDaEQsUUFBRCxDQVhGO0FBYUFaLE9BQUssQ0FBQytDLFNBQU4sQ0FBZ0IsWUFBSTtBQUNoQixRQUFJakMsT0FBTyxDQUFDSSxPQUFaLEVBQXFCO0FBQ2pCeUIsYUFBTyxDQUFDQyxHQUFSLDZCQUFpQ08sSUFBSSxDQUFDQyxTQUFMLENBQWV0QyxPQUFPLENBQUNJLE9BQXZCLENBQWpDO0FBQ0FDLGdCQUFVLENBQUNMLE9BQU8sQ0FBQ0ksT0FBVCxDQUFWO0FBQ0g7QUFDSixHQUxELEVBS0UsQ0FBQ0osT0FBTyxDQUFDSSxPQUFULENBTEY7QUFPQSxzQkFDSSxvQkFBQyxLQUFELENBQU8sUUFBUCxxQkFDSSxvQkFBQyxtRUFBRDtBQUNBLHFCQUFpQixFQUFFMkMsa0VBRG5CO0FBRUEsV0FBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVFDLGNBQVIsRUFBeUI7QUFDOUJwQixhQUFPLENBQUNDLEdBQVIsbUJBQXVCa0IsS0FBdkIsZ0RBQ21CQyxjQURuQjtBQUVILEtBTEQ7QUFNQSxXQUFPLEVBQUU7QUFBQSxhQUFJdEQsUUFBUSxDQUFDdUQsT0FBVCxDQUFpQnZELFFBQVEsQ0FBQ3dELE1BQTFCLENBQUo7QUFBQTtBQU5ULGtCQVFBLG9CQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRS9DLE9BQU8sSUFBSTtBQUFDbUMsVUFBSSxFQUFHO0FBQVI7QUFBeEMsZ0NBQ0Esb0JBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFbEM7QUFBL0IseUJBQ0Esb0JBQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUUsZUFBQ0ksTUFBRDtBQUFBLGFBQVVpQixrQkFBa0IsQ0FBQ2pCLE1BQUQsQ0FBNUI7QUFBQTtBQUFqQyx3QkFDQSxvQkFBQyxxQkFBRCxDQUF1QixRQUF2QjtBQUFnQyxTQUFLLEVBQUVFO0FBQXZDLHdCQUNJLG9CQUFDLDZEQUFELE9BREosZUFFUSxvQkFBQyw4REFBRCxxQkFDQSxvQkFBQyxnREFBRCxPQURBLGVBRUEsb0JBQUMsdURBQUQscUJBQ0ksb0JBQUMsc0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUMsR0FBbEI7QUFBc0IsVUFBTSxFQUFFO0FBQUEsMEJBQUksb0JBQUMsa0RBQUQ7QUFBTSxpQkFBUyxFQUFFTDtBQUFqQixRQUFKO0FBQUE7QUFBOUIsSUFESixlQUVJLG9CQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLFlBQVo7QUFBeUIsVUFBTSxFQUFFO0FBQUEsMEJBQUksb0JBQUMsNERBQUQsRUFBZWlCLG1CQUFmLENBQUo7QUFBQTtBQUFqQyxJQUZKLGVBR0ksb0JBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsYUFBWjtBQUEwQixVQUFNLEVBQUU7QUFBQSwwQkFBSyxvQkFBQyw4REFBRDtBQUN2QyxxQkFBYSxFQUFFTCxhQUR3QjtBQUV2QyxpQkFBUyxFQUFFWjtBQUY0QixRQUFMO0FBQUE7QUFBbEMsSUFISixlQU1JLG9CQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBTSxFQUFFO0FBQUEsMEJBQUssb0JBQUMsMkRBQUQ7QUFBUyxpQkFBUyxFQUFFQTtBQUFwQixRQUFMO0FBQUE7QUFBL0IsSUFOSixDQUZBLGVBVUksb0JBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixVQUFNLEVBQUUsZ0JBQUM4QyxLQUFEO0FBQUEsMEJBQVMsb0JBQUMsMERBQUQsRUFBWUEsS0FBWixDQUFUO0FBQUE7QUFBeEIsSUFWSixDQUZSLENBREEsQ0FEQSxDQURBLENBUkEsZUE2Qkksb0JBQUMsNkRBQUQ7QUFBZ0IsUUFBSSxFQUFFMUMsY0FBYyxDQUFDRixJQUFyQztBQUEyQyxXQUFPLEVBQUU7QUFBQSxhQUFJRyxpQkFBaUIsQ0FBQztBQUFDSCxZQUFJLEVBQUM7QUFBTixPQUFELENBQXJCO0FBQUEsS0FBcEQ7QUFDQSxXQUFPLEVBQUVFLGNBQWMsQ0FBQ0QsTUFBZixLQUF3QixPQUF4QiwyREFDaUIsU0FGMUI7QUFFcUMsVUFBTSxFQUFFQyxjQUFjLENBQUNELE1BRjVEO0FBR0EsYUFBUyxFQUFFO0FBQUM0QyxjQUFRLEVBQUMsS0FBVjtBQUFpQkMsZ0JBQVUsRUFBQztBQUE1QjtBQUhYLElBN0JKLGVBaUNJLG9CQUFDLDZEQUFEO0FBQWdCLFFBQUksRUFBRW5DLFlBQVksQ0FBQ1gsSUFBbkM7QUFBeUMsV0FBTyxFQUFFO0FBQUEsYUFBSVksZUFBZSxDQUFDO0FBQUNaLFlBQUksRUFBQztBQUFOLE9BQUQsQ0FBbkI7QUFBQSxLQUFsRDtBQUNBLFdBQU8sRUFBQyxTQURSO0FBQ2tCLFVBQU0sRUFBQztBQUR6QixJQWpDSixlQW1DSSxvQkFBQyw2REFBRDtBQUFnQixRQUFJLEVBQUVhLGNBQWMsQ0FBQ2IsSUFBckM7QUFBMkMsV0FBTyxFQUFFO0FBQUEsYUFBSWMsaUJBQWlCLENBQUM7QUFBQ2QsWUFBSSxFQUFDO0FBQU4sT0FBRCxDQUFyQjtBQUFBLEtBQXBEO0FBQ0EsV0FBTyxFQUFDLGFBRFI7QUFDc0IsVUFBTSxFQUFDO0FBRDdCLElBbkNKLGVBcUNJLG9CQUFDLDZEQUFEO0FBQWdCLFFBQUksRUFBRUksWUFBWSxDQUFDSixJQUFuQztBQUF5QyxXQUFPLEVBQUU7QUFBQSxhQUFJSyxlQUFlLENBQUM7QUFBQ0wsWUFBSSxFQUFDO0FBQU4sT0FBRCxDQUFuQjtBQUFBLEtBQWxEO0FBQ0EsV0FBTyxFQUFDLG1DQURSO0FBQzRDLFVBQU0sRUFBQztBQURuRCxJQXJDSixlQXVDSSxvQkFBQyw2REFBRDtBQUFnQixRQUFJLEVBQUVNLFlBQVksQ0FBQ04sSUFBbkM7QUFBeUMsV0FBTyxFQUFFO0FBQUEsYUFBSU8sZUFBZSxDQUFDO0FBQUNQLFlBQUksRUFBQztBQUFOLE9BQUQsQ0FBbkI7QUFBQSxLQUFsRDtBQUNBLFdBQU8sRUFBQyxTQURSO0FBQ2tCLFVBQU0sRUFBQztBQUR6QixJQXZDSixlQXlDSSxvQkFBQyw2REFBRDtBQUFnQixRQUFJLEVBQUVTLFVBQVUsQ0FBQ1QsSUFBakM7QUFBdUMsV0FBTyxFQUFFO0FBQUEsYUFBSVUsYUFBYSxDQUFDO0FBQUNWLFlBQUksRUFBQztBQUFOLE9BQUQsQ0FBakI7QUFBQSxLQUFoRDtBQUNBLFdBQU8sb0JBQWFTLFVBQVUsQ0FBQ0QsT0FBeEIsQ0FEUDtBQUMwQyxVQUFNLEVBQUM7QUFEakQsSUF6Q0osQ0FESixDQURKO0FBZ0RILEM7Ozs7Ozs7Ozs7Ozs7QUMxSEQ7QUFBZSxvRkFBdUIsc0RBQXNELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1RjtBQUNBO0FBQ0E7QUFFQSxJQUFNdUMsUUFBUSxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2xDQyxRQUFJLEVBQUc7QUFDSEMsYUFBTyxFQUFHLE1BRFA7QUFFSEMsbUJBQWEsRUFBRyxRQUZiO0FBR0hDLG9CQUFjLEVBQUcsUUFIZDtBQUlIQyxnQkFBVSxFQUFHLFFBSlY7QUFLSEMsV0FBSyxFQUFHLE9BTEw7QUFNSEMsWUFBTSxFQUFHO0FBTk4sS0FEMkI7QUFTbENDLFNBQUssRUFBRztBQUNKTixhQUFPLEVBQUcsTUFETjtBQUVKQyxtQkFBYSxFQUFHLFFBRlo7QUFHSkMsb0JBQWMsRUFBRyxRQUhiO0FBSUpDLGdCQUFVLEVBQUcsUUFKVDtBQUtKQyxXQUFLLEVBQUcsTUFMSjtBQU1KO0FBQ0FHLGFBQU8sRUFBRyxLQVBOO0FBUUpDLFdBQUssRUFBR1YsS0FBSyxDQUFDVyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsR0FBbkIsQ0FSSjtBQVNKQyxnQkFBVSxFQUFHO0FBVFQsS0FUMEI7QUFvQmxDQyxVQUFNLEVBQUc7QUFDTFosYUFBTyxFQUFDLE1BREg7QUFFTEMsbUJBQWEsRUFBQyxRQUZUO0FBR0xDLG9CQUFjLEVBQUMsUUFIVjtBQUlMQyxnQkFBVSxFQUFDLFlBSk47QUFLTFUsZUFBUyxFQUFDLEtBTEw7QUFNTEYsZ0JBQVUsRUFBRztBQU5SLEtBcEJ5QjtBQTRCbENHLFVBQU0sRUFBRztBQUNMRCxlQUFTLEVBQUcsS0FEUDtBQUVMRixnQkFBVSxFQUFDO0FBRk47QUE1QnlCLEdBQUw7QUFBQSxDQUFOLENBQTNCO0FBaUNlLFNBQVN2QixhQUFULE9BQXFFO0FBQUEsTUFBNUNDLEtBQTRDLFFBQTVDQSxLQUE0QztBQUFBLE1BQXJDQyxjQUFxQyxRQUFyQ0EsY0FBcUM7QUFBQSxNQUFyQnlCLGtCQUFxQixRQUFyQkEsa0JBQXFCO0FBQ2hGLE1BQU1DLE9BQU8sR0FBR3BCLFFBQVEsRUFBeEI7O0FBRGdGLHdCQUVuRHJFLEtBQUssQ0FBQ2lCLFFBQU4sQ0FBZSxFQUFmLENBRm1EO0FBQUE7QUFBQSxNQUV6RXlFLE1BRnlFO0FBQUEsTUFFaEVDLFNBRmdFOztBQUloRjNGLE9BQUssQ0FBQytDLFNBQU4sQ0FBZ0IsWUFBSTtBQUNoQixRQUFJMkMsTUFBTSxJQUFJLENBQWQsRUFBaUJqRixRQUFRLENBQUN1RCxPQUFULENBQWlCdkQsUUFBUSxDQUFDd0QsTUFBMUI7QUFDakJ0QixXQUFPLENBQUNDLEdBQVIscUJBQXlCOEMsTUFBekI7QUFDQSxRQUFNakQsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBSTtBQUM3QmlELGVBQVMsQ0FBQ0QsTUFBTSxHQUFDLENBQVIsQ0FBVDtBQUNILEtBRjJCLEVBRXpCLElBRnlCLENBQTVCO0FBR0EsV0FBTztBQUFBLGFBQU01QyxhQUFhLENBQUNMLFFBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0gsR0FQRCxFQU9FLENBQUNpRCxNQUFELENBUEY7QUFTQSxzQkFDSSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDakI7QUFBeEIsa0JBQ0ksb0JBQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUVpQixPQUFPLENBQUNWO0FBQTFCLGtCQUNJLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLDRCQUFzQ2pCLEtBQUssQ0FBQzhCLE9BQTVDLE9BREosZUFFSSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQiwyQ0FGSixlQUdJLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLHVCQUFpQ0YsTUFBakMscUJBSEosZUFJSSxvQkFBQyx3REFBRDtBQUFRLGFBQVMsRUFBRUQsT0FBTyxDQUFDRixNQUEzQjtBQUFtQyxXQUFPLEVBQUMsVUFBM0M7QUFBc0QsU0FBSyxFQUFDLFdBQTVEO0FBQXdFLFFBQUksRUFBQyxPQUE3RTtBQUFxRixXQUFPLEVBQUVDO0FBQTlGLDBCQUpKLGVBT0ksb0JBQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUVDLE9BQU8sQ0FBQ0osTUFBMUI7QUFBa0MsYUFBUyxFQUFFO0FBQTdDLGtCQUNJLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLHNDQURKLGVBRUksb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsbUVBRkosZUFHSSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQixxQ0FISixDQVBKLENBREosQ0FESjtBQWlCSDtBQUVEeEIsYUFBYSxDQUFDZ0MsU0FBZCxHQUEwQjtBQUN0Qkwsb0JBQWtCLEVBQUdNLGlEQUFTQTtBQURSLENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNlLFNBQVNDLFlBQVQsQ0FBc0I3QixLQUF0QixFQUE2QjtBQUFBLE1BQ2xDOEIsUUFEa0MsR0FDckI5QixLQURxQixDQUNsQzhCLFFBRGtDO0FBRTFDLE1BQU1DLE9BQU8sR0FBR0Msa0ZBQWdCLEVBQWhDO0FBQ0Esc0JBQ0Usb0JBQUMsK0RBQUQ7QUFBTyxVQUFNLEVBQUUsS0FBZjtBQUFzQixhQUFTLEVBQUMsTUFBaEM7QUFBdUMsVUFBSSxDQUFDRDtBQUE1QyxLQUNHRCxRQURILENBREY7QUFLRCxDOzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxTQUFTRyxPQUFULE9BQStCO0FBQUEsTUFBWi9FLFNBQVksUUFBWkEsU0FBWTtBQUMxQyxzQkFDSSxvQkFBQyxLQUFELENBQU8sUUFBUCxRQUVBQSxTQUFTLGlCQUNKLG9CQUFDLHFEQUFEO0FBQUssU0FBSyxFQUFFO0FBQUMwRCxZQUFNLEVBQUMsT0FBUjtBQUFpQkQsV0FBSyxFQUFDLE9BQXZCO0FBQWdDSixhQUFPLEVBQUMsTUFBeEM7QUFBZ0RFLG9CQUFjLEVBQUMsUUFBL0Q7QUFDYkMsZ0JBQVUsRUFBQyxRQURFO0FBQ1FGLG1CQUFhLEVBQUM7QUFEdEI7QUFBWixrQkFFRCxvQkFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxNQUFoQjtBQUNBLFNBQUssRUFBQyxTQUROO0FBRUEsUUFBSSxFQUFDLE9BRkw7QUFHQSxZQUFRLE1BSFI7QUFJQSxTQUFLLEVBQUU7QUFBQ1UsZ0JBQVUsRUFBQztBQUFaO0FBSlAsc0JBRkMsZUFVRyxvQkFBQyxrRUFBRCxPQVZILENBSEwsQ0FESjtBQW1CSDtBQUVEZSxPQUFPLENBQUNOLFNBQVIsR0FBb0I7QUFDaEJ6RSxXQUFTLEVBQUcwRSxpREFBUyxDQUFDTTtBQUROLENBQXBCLEM7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0MsY0FBVCxPQUFzRTtBQUFBLE1BQTVDL0UsSUFBNEMsUUFBNUNBLElBQTRDO0FBQUEsTUFBdENnRixPQUFzQyxRQUF0Q0EsT0FBc0M7QUFBQSxNQUE3QnhFLE9BQTZCLFFBQTdCQSxPQUE2QjtBQUFBLE1BQXBCeUUsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsU0FBWSxRQUFaQSxTQUFZO0FBQ2pGLHNCQUNJLG9CQUFDLDBEQUFEO0FBQ0EsUUFBSSxFQUFFbEYsSUFETjtBQUVBLFdBQU8sRUFBRWdGLE9BRlQ7QUFHQSxnQkFBWSxFQUFFRSxTQUFTLEdBQUVBLFNBQUYsR0FBYztBQUFFckMsY0FBUSxFQUFDLEtBQVg7QUFBa0JDLGdCQUFVLEVBQUM7QUFBN0I7QUFIckMsa0JBS0ksb0JBQUMsc0RBQUQ7QUFBTyxXQUFPLEVBQUVrQyxPQUFoQjtBQUF5QixZQUFRLEVBQUVDLE1BQW5DO0FBQ0MsV0FBTyxFQUFDLFFBRFQ7QUFDa0IsV0FBTyxFQUFFO0FBQUNuQixnQkFBVSxFQUFDLFFBQVo7QUFBc0JxQixjQUFRLEVBQUM7QUFBL0I7QUFEM0IsS0FFSzNFLE9BRkwsQ0FMSixDQURKO0FBWUg7QUFFRHVFLGNBQWMsQ0FBQ1IsU0FBZixHQUEyQjtBQUN2QnZFLE1BQUksRUFBR3dFLGlEQUFTLENBQUNNLElBQVYsQ0FBZU0sVUFEQztBQUV2QkosU0FBTyxFQUFHUixpREFBUyxDQUFDYSxJQUZHO0FBR3ZCN0UsU0FBTyxFQUFHZ0UsaURBQVMsQ0FBQ2MsTUFIRztBQUl2QkwsUUFBTSxFQUFHVCxpREFBUyxDQUFDZSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFTLFNBQVQsQ0FBaEIsQ0FKYztBQUt2QkwsV0FBUyxFQUFHVixpREFBUyxDQUFDZ0I7QUFMQyxDQUEzQixDOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ2UsU0FBU0MsZ0JBQVQsQ0FBMkJKLElBQTNCLEVBQWlDO0FBQzVDLE1BQU1LLFVBQVUsR0FBR2hILEtBQUssQ0FBQ3VDLE1BQU4sQ0FBYSxJQUFiLENBQW5COztBQUNBLE1BQUl5RSxVQUFVLENBQUNuRSxPQUFmLEVBQXdCO0FBQ3BCbUUsY0FBVSxDQUFDbkUsT0FBWCxHQUFxQixLQUFyQjtBQUNBOEQsUUFBSTtBQUNQO0FBQ0o7QUFDREksZ0JBQWdCLENBQUNsQixTQUFqQixHQUE2QjtBQUN6QmMsTUFBSSxFQUFHYixpREFBUyxDQUFDYTtBQURRLENBQTdCLEM7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTTSxTQUFULEdBQXFCO0FBQ2pCLHNCQUNFLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQztBQUFsQyxLQUNHLGNBREgsZUFFRSxvQkFBQyxzREFBRDtBQUFNLFNBQUssRUFBQyxTQUFaO0FBQXNCLFFBQUksRUFBQztBQUEzQixzQkFGRixFQUlVLEdBSlYsRUFLRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFMSCxFQU1HLEdBTkgsQ0FERjtBQVVEOztBQUVELElBQU1DLFNBQVMsR0FBRzlDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxtQkFBYSxFQUFFLFFBRlg7QUFHSjJDLGVBQVMsRUFBRSxNQUhQO0FBSUoxQyxvQkFBYyxFQUFDO0FBSlgsS0FEaUM7QUFPdkMyQyxVQUFNLEVBQUU7QUFDTnRDLGFBQU8sRUFBRVQsS0FBSyxDQUFDZ0QsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FESDtBQUVOakMsZUFBUyxFQUFFLE1BRkw7QUFHTmtDLGdCQUFVLEVBQUdqRCxLQUFLLENBQUNXLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQixDQUhQO0FBSU5zQyxlQUFTLEVBQUMsUUFKSjtBQUtOeEMsV0FBSyxFQUFHO0FBTEYsS0FQK0I7QUFjdkN5QyxTQUFLLEVBQUc7QUFDTjdDLFdBQUssRUFBRyxLQURGO0FBRU5DLFlBQU0sRUFBRyxLQUZIO0FBR05FLGFBQU8sRUFBRyxLQUhKO0FBSU4yQyxlQUFTLEVBQUcsUUFKTjtBQUtOQyxrQkFBWSxFQUFDLEtBTFA7QUFNTnRDLGVBQVMsRUFBRyxLQU5OO0FBT051QyxvQkFBYyxFQUFDO0FBUFQ7QUFkK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUF5QmUsU0FBU0MsWUFBVCxDQUFzQjVELEtBQXRCLEVBQTZCO0FBQzFDLE1BQU11QixPQUFPLEdBQUcyQixTQUFTLEVBQXpCO0FBRDBDLE1BRW5DM0csUUFGbUMsR0FFdkJ5RCxLQUZ1QixDQUVuQ3pELFFBRm1DO0FBRzFDa0MsU0FBTyxDQUFDQyxHQUFSLDhCQUFrQ25DLFFBQVEsQ0FBQ3NILFFBQTNDOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJ4SCxVQUFNLENBQUN5SCxRQUFQLENBQWdCO0FBQ2RDLFNBQUcsRUFBRSxDQURTO0FBRWRDLGNBQVEsRUFBRTtBQUZJLEtBQWhCO0FBSUQsR0FMRDs7QUFNQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLE1BQWYsR0FBd0IsU0FBeEI7QUFDRCxHQUZEOztBQUdBLHNCQUNFLG9CQUFDLEtBQUQsQ0FBTyxRQUFQLFFBQ0cvSCxRQUFRLENBQUNzSCxRQUFULEtBQXNCLFlBQXRCLEdBQW9DLElBQXBDLGdCQUNDLG9CQUFDLEtBQUQsQ0FBTyxRQUFQLHFCQUNKLG9CQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFFdEMsT0FBTyxDQUFDakIsSUFBeEI7QUFBOEIsU0FBSyxFQUNqQy9ELFFBQVEsQ0FBQ3NILFFBQVQsS0FBc0IsR0FBdEIsR0FDQTtBQUFDUCxnQkFBVTtBQUFYLEtBREEsR0FHQTtBQUFDaUIscUJBQWUsZ0JBQVVDLHlFQUFWLE1BQWhCO0FBQW1EYixvQkFBYyxFQUFHLE1BQXBFO0FBQTRFYyxlQUFTO0FBQXJGO0FBSkYsa0JBS0Usb0JBQUMseURBQUQ7QUFBUyxTQUFLLEVBQUMsYUFBZjtBQUE2QixrQkFBVyxhQUF4QztBQUFzRCxhQUFTLEVBQUMsS0FBaEU7QUFBc0UsY0FBVSxFQUFFLEdBQWxGO0FBQXVGLGNBQVUsRUFBRTtBQUFuRyxrQkFDRSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRWxELE9BQU8sQ0FBQ2lDLEtBQXhCO0FBQStCLFNBQUssRUFDcENqSCxRQUFRLENBQUNzSCxRQUFULEtBQXNCLEdBQXRCLEdBQ0E7QUFBQ1AsZ0JBQVUscUNBQThCb0IsK0RBQTlCO0FBQVgsS0FEQSxHQUdBO0FBQUNwQixnQkFBVSxxQ0FBOEJFLHlEQUE5QixNQUFYO0FBQW1EaUIsZUFBUztBQUE1RCxLQUpBO0FBS0EsV0FBTyxFQUFFWCxXQUxUO0FBS3NCLGVBQVcsRUFBRSxxQkFBQ0ssQ0FBRDtBQUFBLGFBQUtELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUE7QUFMbkMsSUFERixDQUxGLENBREksZUFlRjtBQUFRLGFBQVMsRUFBRTVDLE9BQU8sQ0FBQzZCO0FBQTNCLGtCQUNFLG9CQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDO0FBQXBCLGtCQUNFLG9CQUFDLFNBQUQ7QUFBVyxTQUFLLEVBQUU7QUFBQ2xDLGdCQUFVLEVBQUc7QUFBZDtBQUFsQixJQURGLENBREYsQ0FmRSxDQUZKLENBREY7QUEyQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNZ0MsU0FBUyxHQUFHOUMsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ3NFLGFBQVMsRUFBRztBQUNSaEUsV0FBSyxFQUFHLE1BREE7QUFFUkMsWUFBTSxFQUFHLE9BRkQ7QUFHUkwsYUFBTyxFQUFHLE1BSEY7QUFJUkUsb0JBQWMsRUFBRyxRQUpUO0FBS1JDLGdCQUFVLEVBQUcsUUFMTDtBQU1SRixtQkFBYSxFQUFHLFFBTlI7QUFPUk8sV0FBSyxFQUFDO0FBUEUsS0FEdUI7QUFVbkNGLFNBQUssRUFBRztBQUNKRixXQUFLLEVBQUcsTUFESjtBQUVKQyxZQUFNLEVBQUcsTUFGTDtBQUdKTCxhQUFPLEVBQUcsTUFITjtBQUlKRSxvQkFBYyxFQUFHLFFBSmI7QUFLSkQsbUJBQWEsRUFBRyxRQUxaO0FBTUpFLGdCQUFVLEVBQUc7QUFOVCxLQVYyQjtBQWtCbkNrRSxZQUFRLEVBQUc7QUFDUDdELFdBQUssRUFBRyxPQUREO0FBRVBHLGdCQUFVLEVBQUMsUUFGSjtBQUdQMkQsY0FBUSxFQUFDLFVBSEY7QUFJUHRFLGFBQU8sRUFBRyxNQUpIO0FBS1BDLG1CQUFhLEVBQUcsUUFMVDtBQU1QQyxvQkFBYyxFQUFHLFFBTlY7QUFPUEMsZ0JBQVUsRUFBRyxRQVBOO0FBUVBvRSxZQUFNLEVBQUcsQ0FSRjtBQVNQQyxhQUFPLEVBQUM7QUFURCxLQWxCd0I7QUE2Qm5DQyxpQkFBYSxFQUFHO0FBQ1pwRSxZQUFNLEVBQUcsS0FERztBQUVaRCxXQUFLLEVBQUcsTUFGSTtBQUdaRyxhQUFPLEVBQUcsV0FIRTtBQUlaUCxhQUFPLEVBQUcsTUFKRTtBQUtaRSxvQkFBYyxFQUFHLFlBTEw7QUFNWkMsZ0JBQVUsRUFBRyxZQU5EO0FBT1pGLG1CQUFhLEVBQUcsUUFQSjtBQVFaeUUscUJBQWUsRUFBRyxTQVJOO0FBU1pDLGVBQVMsRUFBRyxRQVRBO0FBVVpDLGVBQVMsRUFBRztBQVZBLEtBN0JtQjtBQXlDbkNDLFlBQVEsRUFBRztBQUNQekUsV0FBSyxFQUFHLE1BREQ7QUFFUFMsZUFBUyxFQUFDO0FBRkgsS0F6Q3dCO0FBNkNuQ2lFLFVBQU0sRUFBRztBQUNMOUUsYUFBTyxFQUFHLE1BREw7QUFFTEMsbUJBQWEsRUFBRyxRQUZYO0FBR0xPLFdBQUssRUFBRyxPQUhIO0FBSUx1RSxZQUFNLEVBQUcsZUFKSjtBQUtMQyxrQkFBWSxFQUFHLE1BTFY7QUFNTE4scUJBQWUsRUFBRyxTQU5iO0FBT0xuRSxhQUFPLEVBQUcsVUFQTDtBQVFMMEUsWUFBTSxFQUFHLFNBUko7QUFTTEMsY0FBUSxFQUFFLE1BVEw7QUFVTEMsY0FBUSxFQUFDO0FBVkosS0E3QzBCO0FBeURuQ0MsWUFBUSxFQUFHO0FBQ1BwRixhQUFPLEVBQUcsTUFESDtBQUVQQyxtQkFBYSxFQUFHLFFBRlQ7QUFHUE8sV0FBSyxFQUFHLE9BSEQ7QUFJUHVFLFlBQU0sRUFBRyxlQUpGO0FBS1BDLGtCQUFZLEVBQUcsTUFMUjtBQU1QTixxQkFBZSxFQUFHLFNBTlg7QUFPUG5FLGFBQU8sRUFBRyxVQVBIO0FBUVAwRSxZQUFNLEVBQUcsU0FSRjtBQVNQQyxjQUFRLEVBQUUsTUFUSDtBQVVQQyxjQUFRLEVBQUM7QUFWRixLQXpEd0I7QUFxRW5DRSxXQUFPLEVBQUc7QUFDTnJGLGFBQU8sRUFBRyxNQURKO0FBRU5DLG1CQUFhLEVBQUcsS0FGVjtBQUdOTSxhQUFPLEVBQUc7QUFISixLQXJFeUI7QUEyRW5DK0UsZUFBVyxFQUFHO0FBQ1Y5RSxXQUFLLEVBQUcsTUFERTtBQUVWa0UscUJBQWUsRUFBRztBQUZSLEtBM0VxQjtBQStFbkNhLFlBQVEsRUFBRztBQUNQL0UsV0FBSyxFQUFHLE1BREQ7QUFFUGtFLHFCQUFlLEVBQUc7QUFGWDtBQS9Fd0IsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUFxRmUsU0FBU2MsU0FBVCxDQUFtQi9GLEtBQW5CLEVBQTBCO0FBQ3JDLE1BQU11QixPQUFPLEdBQUcyQixTQUFTLEVBQXpCO0FBQ0EsTUFBTThDLFFBQVEsR0FBR2xLLEtBQUssQ0FBQ3VDLE1BQU4sRUFBakI7O0FBRnFDLG9CQUdVMUIsK0RBQVUsQ0FBRSxDQUFDLFNBQUQsQ0FBRixDQUhwQjtBQUFBO0FBQUEsTUFHN0JDLE9BSDZCO0FBQUEsTUFHbkJDLFNBSG1CO0FBQUEsTUFHUEMsWUFITzs7QUFBQSxNQUs5QkksU0FMOEIsR0FVSThDLEtBVkosQ0FLOUI5QyxTQUw4QjtBQUFBLE1BTWpDTSxZQU5pQyxHQVVJd0MsS0FWSixDQU1qQ3hDLFlBTmlDO0FBQUEsTUFNbkJDLGVBTm1CLEdBVUl1QyxLQVZKLENBTW5CdkMsZUFObUI7QUFBQSxNQU9qQ0MsWUFQaUMsR0FVSXNDLEtBVkosQ0FPakN0QyxZQVBpQztBQUFBLE1BT25CQyxlQVBtQixHQVVJcUMsS0FWSixDQU9uQnJDLGVBUG1CO0FBQUEsTUFRakNFLFVBUmlDLEdBVUltQyxLQVZKLENBUWpDbkMsVUFSaUM7QUFBQSxNQVFyQkMsYUFScUIsR0FVSWtDLEtBVkosQ0FRckJsQyxhQVJxQjtBQUFBLE1BU2pDQyxZQVRpQyxHQVVJaUMsS0FWSixDQVNqQ2pDLFlBVGlDO0FBQUEsTUFTbkJDLGVBVG1CLEdBVUlnQyxLQVZKLENBU25CaEMsZUFUbUI7QUFBQSxNQVVqQ0MsY0FWaUMsR0FVSStCLEtBVkosQ0FVakMvQixjQVZpQztBQUFBLE1BVWpCQyxpQkFWaUIsR0FVSThCLEtBVkosQ0FVakI5QixpQkFWaUI7O0FBQUEsd0JBWVhwQyxLQUFLLENBQUNpQixRQUFOLENBQWU7QUFDckNrSixTQUFLLEVBQUcsRUFENkI7QUFFckNDLFlBQVEsRUFBRztBQUYwQixHQUFmLENBWlc7QUFBQTtBQUFBLE1BWTlCQyxLQVo4QjtBQUFBLE1BWXZCQyxRQVp1Qjs7QUFnQnJDLE1BQU1DLE1BQU0sR0FBR3ZLLEtBQUssQ0FBQ3VDLE1BQU4sRUFBZjtBQUNBLE1BQU1pSSxnQkFBZ0IsR0FBR3hLLEtBQUssQ0FBQ3VDLE1BQU4sRUFBekI7QUFDQSxNQUFNa0ksZ0JBQWdCLEdBQUd6SyxLQUFLLENBQUN1QyxNQUFOLENBQWEsSUFBYixDQUF6Qjs7QUFFQSxNQUFNbUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkMsK0VBQWdCLEdBQUcxSCxJQUFuQixDQUF3QixVQUFBMUIsTUFBTSxFQUFJO0FBQzlCO0FBQ0EsVUFBTXFKLElBQUksc0JBQU9ySixNQUFNLENBQUMyQixJQUFkLENBQVY7O0FBQ0FQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZ0ksSUFBWjtBQUNBTCxZQUFNLENBQUMxSCxPQUFQLHNCQUFxQitILElBQXJCO0FBQ0FOLGNBQVEsaUNBQUtELEtBQUw7QUFBWUQsZ0JBQVEscUJBQU9RLElBQVA7QUFBcEIsU0FBUjtBQUNILEtBTkQsV0FNUyxVQUFBakgsR0FBRyxFQUFFO0FBQ1YzQixtQkFBYSxDQUFDO0FBQUNWLFlBQUksRUFBRyxJQUFSO0FBQWVRLGVBQU8sRUFBRztBQUF6QixPQUFELENBQWI7QUFDSCxLQVJEO0FBU0gsR0FWRCxDQXBCcUMsQ0FnQ3JDOzs7QUFDQWlGLDhFQUFnQixDQUFDLFlBQUk7QUFDakIyRCxXQUFPO0FBQ1YsR0FGZSxDQUFoQjs7QUFJQSxNQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUN4QyxDQUFELEVBQU87QUFDL0IsUUFBTXlDLEVBQUUsR0FBR3pDLENBQUMsQ0FBQzBDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixFQUFuQztBQUNBbkksV0FBTyxDQUFDQyxHQUFSLHlDQUF5QmtJLEVBQXpCLEdBRitCLENBRUk7O0FBQ25DRyw4RUFBZSxDQUFDSCxFQUFELENBQWYsQ0FBb0I3SCxJQUFwQixDQUF5QixVQUFBMUIsTUFBTSxFQUFFO0FBQzdCLFVBQUlBLE1BQU0sQ0FBQ0EsTUFBUCxLQUFrQixTQUF0QixFQUFpQzJKLFVBQVUsQ0FBQ3JKLGVBQWUsQ0FBQztBQUFDUCxZQUFJLEVBQUM7QUFBTixPQUFELENBQWhCLEVBQThCLElBQTlCLENBQVY7QUFDakNvSixhQUFPO0FBQ1YsS0FIRCxXQUdTLFVBQUEvRyxHQUFHLEVBQUk7QUFDWmhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZSxHQUFaO0FBQ0EzQixtQkFBYSxDQUFDO0FBQUNWLFlBQUksRUFBRyxJQUFSO0FBQWVRLGVBQU8sRUFBRztBQUF6QixPQUFELENBQWI7QUFDQTRJLGFBQU87QUFDVixLQVBEO0FBUUgsR0FYRDs7QUFZQSxNQUFNUyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUM5QyxDQUFELEVBQU87QUFDekIsUUFBTStDLEtBQUssR0FBRy9DLENBQUMsQ0FBQ0MsTUFBRixDQUFTOEMsS0FBdkI7O0FBQ0EsUUFBSUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsR0FBbkIsRUFBd0I7QUFDcEJmLGNBQVEsaUNBQUtELEtBQUw7QUFBWUYsYUFBSyxFQUFHaUI7QUFBcEIsU0FBUjtBQUNILEtBRkQsTUFFTyxJQUFJQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0IsRUFBcEIsRUFBd0I7QUFDM0JySixtQkFBYSxDQUFDO0FBQUNWLFlBQUksRUFBQyxJQUFOO0FBQVlRLGVBQU8seURBQXFCc0osS0FBSyxDQUFDQyxNQUEzQjtBQUFuQixPQUFELENBQWI7QUFDSDtBQUNKLEdBUEQ7O0FBUUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDakQsQ0FBRCxFQUFPO0FBQzNCLFFBQUlBLENBQUMsQ0FBQ2tELE9BQUYsS0FBYyxFQUFsQixFQUFzQjtBQUFFO0FBQ3BCLFVBQU1wQixLQUFLLEdBQUdELFFBQVEsQ0FBQ3JILE9BQVQsR0FBa0JxSCxRQUFRLENBQUNySCxPQUFULENBQWlCMkksYUFBakIsQ0FBK0IsVUFBL0IsQ0FBbEIsR0FBK0QsRUFBN0U7O0FBQ0EsVUFBSXJCLEtBQUssQ0FBQ2lCLEtBQVYsRUFBaUI7QUFDYmpCLGFBQUssQ0FBQ3NCLEtBQU47QUFDQWpCLHdCQUFnQixDQUFDM0gsT0FBakIsQ0FBeUJvRixRQUF6QixDQUFrQyxDQUFsQyxFQUFvQ3VDLGdCQUFnQixDQUFDM0gsT0FBakIsQ0FBeUI2SSxZQUE3RDs7QUFDQSxZQUFJdkIsS0FBSyxDQUFDaUIsS0FBVixFQUFpQjtBQUNiO0FBQ0EsY0FBSVgsZ0JBQWdCLENBQUM1SCxPQUFqQixLQUE2QixLQUFqQyxFQUF3QztBQUNwQ2xCLDJCQUFlLENBQUM7QUFBQ0wsa0JBQUksRUFBQztBQUFOLGFBQUQsQ0FBZjtBQUNILFdBRkQsTUFFTTtBQUNGcUssb0ZBQWEsQ0FBQ3hCLEtBQUssQ0FBQ2lCLEtBQVAsRUFBYXRLLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQm1DLElBQTdCLEVBQW1DdkMsT0FBTyxDQUFDSSxPQUFSLENBQWdCcUMsT0FBbkQsQ0FBYixDQUF5RU4sSUFBekUsQ0FBOEUsVUFBQTJJLFFBQVEsRUFBSTtBQUN0RixrQkFBSUEsUUFBUSxDQUFDckYsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QjJFLDBCQUFVLENBQUMsWUFBSTtBQUNYVCxrQ0FBZ0IsQ0FBQzVILE9BQWpCLEdBQTJCLElBQTNCO0FBQ0gsaUJBRlMsRUFFUCxLQUZPLENBQVY7QUFHQTRILGdDQUFnQixDQUFDNUgsT0FBakIsR0FBMkIsS0FBM0I7QUFDQTZILHVCQUFPO0FBQ1B4SSwrQkFBZSxDQUFDO0FBQUNaLHNCQUFJLEVBQUM7QUFBTixpQkFBRCxDQUFmO0FBQ0g7QUFDSixhQVRELFdBU1MsVUFBQXdDLEtBQUssRUFBSTtBQUNkOUIsMkJBQWEsQ0FBQztBQUFDVixvQkFBSSxFQUFDLElBQU47QUFBWVEsdUJBQU8sRUFBQztBQUFwQixlQUFELENBQWI7QUFDSCxhQVhEO0FBWUg7QUFDSixTQWxCRCxNQWtCTztBQUNIRSx1QkFBYSxDQUFDO0FBQUNWLGdCQUFJLEVBQUMsSUFBTjtBQUFZUSxtQkFBTyxFQUFDO0FBQXBCLFdBQUQsQ0FBYjtBQUNIO0FBQ0o7QUFDSjtBQUNKLEdBN0JEOztBQThCQTlCLE9BQUssQ0FBQytDLFNBQU4sQ0FBZ0IsWUFBSTtBQUNoQnZDLFVBQU0sQ0FBQ3FMLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DUCxlQUFuQztBQUNBLFdBQU87QUFBQSxhQUFNOUssTUFBTSxDQUFDc0wsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBdUNSLGVBQXZDLENBQU47QUFBQSxLQUFQO0FBQ0gsR0FIRCxFQUdFLEVBSEY7QUFJQSxNQUFNaEksS0FBSyxHQUFHeEMsT0FBTyxDQUFDSSxPQUFSLEdBQWtCSixPQUFPLENBQUNJLE9BQVIsQ0FBZ0JvQyxLQUFoQixLQUF3QixtQkFBeEIsR0FBOEMsSUFBOUMsR0FBcUQsS0FBdkUsR0FBK0UsS0FBN0Y7QUFDQSxzQkFDSSxvQkFBQyxLQUFELENBQU8sUUFBUCxxQkFDQSxvQkFBQywyREFBRDtBQUFTLGFBQVMsRUFBRWxDO0FBQXBCLElBREEsZUFFQSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRXFFLE9BQU8sQ0FBQ29EO0FBQXhCLGtCQUNBLG9CQUFDLHVEQUFEO0FBQU8sYUFBUyxFQUFFcEQsT0FBTyxDQUFDVixLQUExQjtBQUFpQyxhQUFTLEVBQUU7QUFBNUMsa0JBQ0ksb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUVVLE9BQU8sQ0FBQ3lELGFBQXhCO0FBQXVDLE9BQUcsRUFBRXNCO0FBQTVDLGtCQUNJLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBQyxhQUEvQjtBQUE2QyxhQUFTLEVBQUUvRSxPQUFPLENBQUNxRDtBQUFoRSxpRUFESixFQU1JdUIsS0FBSyxDQUFDRCxRQUFOLENBQWUyQixHQUFmLENBQW1CLFVBQUNDLE9BQUQsRUFBU0MsS0FBVCxFQUFrQjtBQUNqQyxXQUNLRCxPQUFPLENBQUNFLEdBQVIsSUFBZTVJLEtBQWhCO0FBQUE7QUFBeUI7QUFDekI7QUFFSix3QkFBQyx5REFBRDtBQUFTLGlCQUFXLE1BQXBCO0FBQXFCLGVBQVMsRUFBQyxPQUEvQjtBQUF1QyxTQUFHLEVBQUUySSxLQUE1QztBQUFtRCxXQUFLLGVBQ3BELG9CQUFDLDREQUFEO0FBQVksZUFBTyxFQUFFcEIsbUJBQXJCO0FBQTBDLGFBQUssRUFBQyxTQUFoRDtBQUEwRCxZQUFJLEVBQUMsT0FBL0Q7QUFBdUUsbUJBQVNtQixPQUFPLENBQUNHO0FBQXhGLHNCQUNJLG9CQUFDLGdFQUFELE9BREo7QUFESixvQkFLSSxvQkFBQyxxREFBRDtBQUFLLGVBQVMsRUFBRTFHLE9BQU8sQ0FBQ3FFLE9BQXhCO0FBQWlDLFdBQUssRUFBRTtBQUFDbkMsaUJBQVMsRUFBQztBQUFYO0FBQXhDLG9CQUNRLG9CQUFDLHVEQUFEO0FBQU8sZUFBUyxFQUFFbEMsT0FBTyxDQUFDb0U7QUFBMUIsb0JBQ0Esb0JBQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUMsU0FBcEI7QUFBOEIsV0FBSyxFQUFFO0FBQUNwRCxnQkFBUSxFQUFDLFFBQVY7QUFBb0IyRixrQkFBVSxFQUFDO0FBQS9CO0FBQXJDLE9BQTZFSixPQUFPLENBQUNLLElBQXJGLENBREEsRUFFS0wsT0FBTyxDQUFDbEssT0FGYixDQURSLGVBS1Esb0JBQUMsd0RBQUQ7QUFBUSxlQUFTLEVBQUUyRCxPQUFPLENBQUN1RSxRQUEzQjtBQUFxQyxTQUFHLEVBQUVnQyxPQUFPLENBQUN6STtBQUFsRCxNQUxSLENBTEosQ0FISTtBQUFBO0FBa0JBO0FBRUEsd0JBQUMscURBQUQ7QUFBSyxlQUFTLEVBQUVrQyxPQUFPLENBQUNxRSxPQUF4QjtBQUFpQyxTQUFHLEVBQUVtQztBQUF0QyxvQkFDSSxvQkFBQyx3REFBRDtBQUFRLGVBQVMsRUFBRXhHLE9BQU8sQ0FBQ3NFLFdBQTNCO0FBQXdDLFNBQUcsRUFBRWlDLE9BQU8sQ0FBQ3pJO0FBQXJELE1BREosZUFFSSxvQkFBQyx1REFBRDtBQUFPLGVBQVMsRUFBRWtDLE9BQU8sQ0FBQzhEO0FBQTFCLG9CQUNBLG9CQUFDLDREQUFEO0FBQVksYUFBTyxFQUFDLFNBQXBCO0FBQThCLFdBQUssRUFBRTtBQUFDOUMsZ0JBQVEsRUFBQyxRQUFWO0FBQW9CMkYsa0JBQVUsRUFBQztBQUEvQjtBQUFyQyxPQUE2RUosT0FBTyxDQUFDSyxJQUFyRixDQURBLEVBRUtMLE9BQU8sQ0FBQ2xLLE9BRmIsQ0FGSixDQXJCSjtBQThCQyxHQS9CTCxDQU5KLENBREosZUF5Q0ksb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUUyRCxPQUFPLENBQUM2RDtBQUF4QixrQkFDSSxvQkFBQywyREFBRDtBQUNBLE1BQUUsRUFBQyxTQURIO0FBRUEsUUFBSSxFQUFDLFFBRkw7QUFHQSxTQUFLLEVBQUMsU0FITjtBQUlBLFNBQUssRUFBRTtBQUFFSSxZQUFNLEVBQUU7QUFBVixLQUpQO0FBS0EsU0FBSyxFQUFFVyxLQUFLLENBQUNGLEtBTGI7QUFNQSxZQUFRLEVBQUVnQixhQU5WO0FBT0EsYUFBUyxNQVBUO0FBUUEsZUFBVyxFQUFDLGlCQVJaO0FBU0EsYUFBUyxNQVRUO0FBVUEsT0FBRyxFQUFFLGFBQUFtQixDQUFDO0FBQUEsYUFBSXBDLFFBQVEsQ0FBQ3JILE9BQVQsR0FBbUJ5SixDQUF2QjtBQUFBLEtBVk47QUFXQSxVQUFNLEVBQUMsUUFYUDtBQVlBLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FaakI7QUFlQSxXQUFPLEVBQUM7QUFmUixJQURKLENBekNKLENBREEsQ0FGQSxDQURKO0FBb0VIO0FBQ0R0QyxTQUFTLENBQUNwRSxTQUFWLEdBQXNCO0FBQ2xCekUsV0FBUyxFQUFHMEUsaURBQVMsQ0FBQ007QUFESixDQUF0QixDOzs7Ozs7Ozs7Ozs7O0FDalFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNZ0IsU0FBUyxHQUFHOUMsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ2lJLGlCQUFhLEVBQUc7QUFDWjNILFdBQUssRUFBRyxNQURJO0FBRVpzRSxxQkFBZSxFQUFHLFNBRk47QUFHWmxFLFdBQUssRUFBRyxNQUhJO0FBSVp3SCxnQkFBVSxFQUFDLHNCQUpDO0FBS1poSSxhQUFPLEVBQUMsTUFMSTtBQU1aRSxvQkFBYyxFQUFDLFFBTkg7QUFPWkQsbUJBQWEsRUFBRztBQVBKO0FBRHFCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBV2UsU0FBU2dJLGFBQVQsQ0FBd0J4SSxLQUF4QixFQUErQjtBQUMxQyxNQUFNdUIsT0FBTyxHQUFHMkIsU0FBUyxFQUF6QjtBQUNBLE1BQU11RixTQUFTLEdBQUd6SSxLQUFLLENBQUMwRyxJQUFOLEdBQWExRyxLQUFLLENBQUMwRyxJQUFuQixHQUEwQixDQUFDLEVBQUQsQ0FBNUM7QUFGMEMsTUFHbkNnQyxVQUhtQyxHQUdVMUksS0FIVixDQUduQzBJLFVBSG1DO0FBQUEsTUFHdkJDLFlBSHVCLEdBR1UzSSxLQUhWLENBR3ZCMkksWUFIdUI7QUFBQSxNQUdUQyxlQUhTLEdBR1U1SSxLQUhWLENBR1Q0SSxlQUhTOztBQUkxQyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFVBQUQsRUFBZ0I7QUFDckNKLGNBQVUsQ0FBQ0ksVUFBRCxDQUFWO0FBQ0FGLG1CQUFlLENBQUNFLFVBQUQsQ0FBZjtBQUNILEdBSEQ7O0FBSUEsc0JBQ0Esb0JBQUMscURBQUQ7QUFDQSxjQUFVLEVBQUVILFlBRFo7QUFFQSxjQUFVLEVBQUcsb0JBQUFaLEtBQUs7QUFBQSxhQUFJYyxnQkFBZ0IsQ0FBQ2QsS0FBRCxDQUFwQjtBQUFBLEtBRmxCO0FBR0EsWUFBUSxFQUFFLEtBSFY7QUFJQSxvQkFBZ0IsRUFBRSxJQUpsQjtBQUtBLGtCQUFjLEVBQUMsUUFMZjtBQU1BLFNBQUssRUFBRSxHQU5QO0FBT0EsY0FBVSxFQUFDO0FBUFgsS0FVSVUsU0FBUyxDQUFDWixHQUFWLENBQWMsVUFBQ2tCLEtBQUQsRUFBT2hCLEtBQVAsRUFBZTtBQUNqQix3QkFDUixvQkFBQyxxREFBRDtBQUFLLFdBQUssRUFBRTtBQUFDcEgsYUFBSyxFQUFDLE1BQVA7QUFBZUMsY0FBTSxFQUFDO0FBQXRCLE9BQVo7QUFBMkMsU0FBRyxFQUFFbUg7QUFBaEQsT0FFUUEsS0FBSyxHQUFHLENBQVIsZ0JBQ0osb0JBQUMscURBQUQ7QUFBSyxlQUFTLEVBQUV4RyxPQUFPLENBQUMrRztBQUF4QixvQkFDSSxvQkFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixXQUFLLEVBQUMsU0FBL0I7QUFBeUMsV0FBSyxFQUFFO0FBQUNwSCxrQkFBVSxFQUFDO0FBQVo7QUFBaEQsa0JBQ1M2RyxLQURULGNBQ2tCZ0IsS0FBSyxDQUFDNUosSUFEeEIsRUFESixDQURJLEdBTUksSUFSWixlQVVJLG9CQUFDLHFEQUFEO0FBQUssV0FBSyxFQUFFO0FBQUN5QixjQUFNLEVBQUM7QUFBUjtBQUFaLE9BRU1tSCxLQUFLLEtBQUcsQ0FBUixnQkFDRCxvQkFBQyxxREFBRDtBQUFLLGVBQVMsRUFBRXhHLE9BQU8sQ0FBQytHLGFBQXhCO0FBQXVDLFdBQUssRUFBRTtBQUFDMUgsY0FBTSxFQUFDLE1BQVI7QUFBZ0JGLGtCQUFVLEVBQUM7QUFBM0I7QUFBOUMsb0JBQ0csb0JBQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsV0FBSyxFQUFDLFNBQS9CO0FBQXlDLFdBQUssRUFBRTtBQUFDUSxrQkFBVSxFQUFDO0FBQVo7QUFBaEQseUNBRUk7QUFBSyxTQUFHLEVBQUM7QUFBVCxNQUZKLENBREgsZUFLRyxvQkFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixXQUFLLEVBQUMsU0FBL0I7QUFBeUMsV0FBSyxFQUFFO0FBQUNBLGtCQUFVLEVBQUM7QUFBWjtBQUFoRCwrQkFMSCxlQVFHLG9CQUFDLDREQUFEO0FBQVksYUFBTyxFQUFDLFdBQXBCO0FBQWdDLFdBQUssRUFBQyxTQUF0QztBQUFnRCxXQUFLLEVBQUU7QUFBQ0Esa0JBQVUsRUFBQztBQUFaO0FBQXZELHdDQVJILGVBV0csb0JBQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUMsV0FBcEI7QUFBZ0MsV0FBSyxFQUFDLFNBQXRDO0FBQWdELFdBQUssRUFBRTtBQUFDQSxrQkFBVSxFQUFDO0FBQVo7QUFBdkQsc0NBWEgsQ0FEQyxnQkFnQkE7QUFBSyxTQUFHLEVBQUU2SCxLQUFLLENBQUNDO0FBQWhCLE1BbEJOLENBVkosQ0FEUTtBQWtDUCxHQW5DTCxDQVZKLENBREE7QUFrREg7QUFFRFIsYUFBYSxDQUFDN0csU0FBZCxHQUEwQjtBQUN0QitHLFlBQVUsRUFBRzlHLGlEQUFTLENBQUNhLElBQVYsQ0FBZUQsVUFETjtBQUV0Qm1HLGNBQVksRUFBRy9HLGlEQUFTLENBQUNxSCxNQUFWLENBQWlCekcsVUFGVjtBQUd0Qm9HLGlCQUFlLEVBQUdoSCxpREFBUyxDQUFDYSxJQUFWLENBQWVEO0FBSFgsQ0FBMUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBRUEsSUFBTVUsU0FBUyxHQUFHOUMsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSTtBQUNGa0YsWUFBTSxFQUFDLENBREw7QUFFRjFFLGFBQU8sRUFBQyxLQUZOO0FBR0ZQLGFBQU8sRUFBRSxNQUhQO0FBSUYySSxjQUFRLEVBQUUsTUFKUjtBQUtGdkksV0FBSyxFQUFHLE1BTE47QUFNRkYsb0JBQWMsRUFBRyxRQU5mO0FBT0ZELG1CQUFhLEVBQUcsUUFQZDtBQVFGRSxnQkFBVSxFQUFHO0FBUlgsaUJBU0ssTUFUTDtBQURpQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWNpQixTQUFTeUksU0FBVCxPQUErQjtBQUFBLE1BQVhySCxRQUFXLFFBQVhBLFFBQVc7O0FBQUEsd0JBQ3BCaEcsS0FBSyxDQUFDaUIsUUFBTixDQUFlLEtBQWYsQ0FEb0I7QUFBQTtBQUFBLE1BQ3JDcU0sSUFEcUM7QUFBQSxNQUMvQkMsT0FEK0I7O0FBRTVDLE1BQU05SCxPQUFPLEdBQUcyQixTQUFTLEVBQXpCO0FBQ0EsTUFBTW9HLE1BQU0sR0FBR3hOLEtBQUssQ0FBQ3VDLE1BQU4sRUFBZjtBQUNBdkMsT0FBSyxDQUFDK0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQU0wSyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUIsVUFBQUMsT0FBTyxFQUFJO0FBQ25EQSxhQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBQUMsS0FBSztBQUFBLGVBQUlOLE9BQU8sQ0FBQ00sS0FBSyxDQUFDQyxjQUFQLENBQVg7QUFBQSxPQUFyQjtBQUNELEtBRmdCLEVBRWY7QUFBSTtBQUNGQyxnQkFBVSxFQUFHO0FBRGYsS0FGZSxDQUFqQjtBQUtBTixZQUFRLENBQUNPLE9BQVQsQ0FBaUJSLE1BQU0sQ0FBQzNLLE9BQXhCO0FBQ0EsV0FBTztBQUFBLGFBQU00SyxRQUFRLENBQUNRLFNBQVQsQ0FBbUJULE1BQU0sQ0FBQzNLLE9BQTFCLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FSRCxFQVFHLEVBUkg7QUFVQSxzQkFDRSxvQkFBQyxzREFBRDtBQUFNLFVBQUl5SyxJQUFWO0FBQWdCLFdBQU8sRUFBRTtBQUFDWSxXQUFLLEVBQUMsSUFBUDtBQUFhQyxVQUFJLEVBQUM7QUFBbEI7QUFBekIsa0JBQ0Usb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUUxSSxPQUFPLENBQUNqQixJQUF4QjtBQUE4QixhQUFTLEVBQUUsQ0FBekM7QUFBNEMsT0FBRyxFQUFFZ0o7QUFBakQsS0FDS3hILFFBREwsQ0FERixDQURGO0FBT0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRDtBQUNBO0FBRUEsSUFBTW9CLFNBQVMsR0FBRzlDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRztBQUNIQyxhQUFPLEVBQUUsTUFETjtBQUVIQyxtQkFBYSxFQUFDLEtBRlg7QUFHSEMsb0JBQWMsRUFBRSxRQUhiO0FBSUhDLGdCQUFVLEVBQUcsWUFKVjtBQUtIQyxXQUFLLEVBQUcsTUFMTDtBQU1IQyxZQUFNLEVBQUcsTUFOTjtBQU9IcUUscUJBQWUsRUFBRztBQVBmLEtBRDhCO0FBVXJDaUYsYUFBUyxFQUFHO0FBQ1IzSixhQUFPLEVBQUcsTUFERjtBQUVSQyxtQkFBYSxFQUFHLFFBRlI7QUFHUkMsb0JBQWMsRUFBRyxRQUhUO0FBSVJDLGdCQUFVLEVBQUcsUUFKTDtBQUtSQyxXQUFLLEVBQUcsTUFMQTtBQU1SSSxXQUFLLEVBQUMsU0FORTtBQU9SSyxlQUFTLEVBQUcsTUFQSjtBQVFSbUgsZ0JBQVUsRUFBRTtBQVJKLEtBVnlCO0FBb0JyQzRCLGFBQVMsRUFBRztBQUNSNUosYUFBTyxFQUFHLE1BREY7QUFFUkMsbUJBQWEsRUFBRyxRQUZSO0FBR1JDLG9CQUFjLEVBQUcsUUFIVDtBQUlSQyxnQkFBVSxFQUFHLFFBSkw7QUFLUkMsV0FBSyxFQUFHLE1BTEE7QUFNUkksV0FBSyxFQUFDLFNBTkU7QUFPUkssZUFBUyxFQUFHLE1BUEo7QUFRUm1ILGdCQUFVLEVBQUU7QUFSSixLQXBCeUI7QUE4QnJDNkIsa0JBQWMsRUFBRztBQUNiN0osYUFBTyxFQUFDLE1BREs7QUFFYlEsV0FBSyxFQUFFLE1BRk07QUFHYlAsbUJBQWEsRUFBRyxRQUhIO0FBSWJDLG9CQUFjLEVBQUcsUUFKSjtBQUtiQyxnQkFBVSxFQUFHLFFBTEE7QUFNYitFLGNBQVEsRUFBRyxNQU5FO0FBT2JyRSxlQUFTLEVBQUM7QUFQRztBQTlCb0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUF3Q2UsU0FBU2lKLFdBQVQsR0FBd0I7QUFDbkMsTUFBTTlJLE9BQU8sR0FBRzJCLFNBQVMsRUFBekI7O0FBRG1DLHdCQUVYcEgsS0FBSyxDQUFDaUIsUUFBTixDQUFlLEtBQWYsQ0FGVztBQUFBO0FBQUEsTUFFNUJ1TixJQUY0QjtBQUFBLE1BRXRCQyxPQUZzQjs7QUFHbkMsTUFBTWpCLE1BQU0sR0FBR3hOLEtBQUssQ0FBQ3VDLE1BQU4sRUFBZjtBQUNBdkMsT0FBSyxDQUFDK0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQU0wSyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUIsVUFBQUMsT0FBTyxFQUFJO0FBQ25EQSxhQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBQUMsS0FBSyxFQUFJO0FBQ3ZCWSxlQUFPLENBQUNaLEtBQUssQ0FBQ0MsY0FBUCxDQUFQO0FBQ0QsT0FGRDtBQUdBLEtBSmUsRUFJZDtBQUFJO0FBQ0hDLGdCQUFVLEVBQUc7QUFEZCxLQUpjLENBQWpCO0FBT0FOLFlBQVEsQ0FBQ08sT0FBVCxDQUFpQlIsTUFBTSxDQUFDM0ssT0FBeEI7QUFDQSxXQUFPO0FBQUEsYUFBTTRLLFFBQVEsQ0FBQ1EsU0FBVCxDQUFtQlQsTUFBTSxDQUFDM0ssT0FBMUIsQ0FBTjtBQUFBLEtBQVA7QUFDRCxHQVZELEVBVUcsRUFWSDtBQVlBLHNCQUNBLG9CQUFDLEtBQUQsQ0FBTyxRQUFQLHFCQUNJLG9CQUFDLHNEQUFEO0FBQU0sVUFBSTJMLElBQVY7QUFDUSxTQUFLLEVBQUU7QUFBRUUscUJBQWUsRUFBRTtBQUFuQjtBQURmLEtBRWFGLElBQUksR0FBRztBQUFFRyxXQUFPLEVBQUU7QUFBQ0MsWUFBTSxFQUFHLElBQVY7QUFBaUJWLFdBQUssRUFBRyxJQUF6QjtBQUFnQ0MsVUFBSSxFQUFHO0FBQXZDO0FBQVgsR0FBSCxHQUErRCxFQUZoRixnQkFJQSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRTFJLE9BQU8sQ0FBQ2pCLElBQXhCO0FBQThCLE9BQUcsRUFBRWdKO0FBQW5DLGtCQUNJLG9CQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFFL0gsT0FBTyxDQUFDMkk7QUFBeEIsa0JBQ0ksb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFFO0FBQUNoSixnQkFBVSxFQUFDO0FBQVosS0FBaEM7QUFBdUQsZ0JBQVk7QUFBbkUsaUJBREosZUFJSSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRUssT0FBTyxDQUFDNkk7QUFBeEIsa0JBQ0ksb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVk7QUFBckMsa0ZBREosZUFFSSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQixzRUFGSixlQUdJLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLHlGQUhKLGVBSUksb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsMkdBSkosZUFLSSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQixzR0FMSixlQU1JLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLFNBTkosQ0FKSixDQURKLGVBY0ksb0JBQUMseURBQUQ7QUFBUyxlQUFXLEVBQUMsVUFBckI7QUFBZ0MsWUFBUSxNQUF4QztBQUF5QyxTQUFLLEVBQUU7QUFBQ3pKLFdBQUssRUFBQyxLQUFQO0FBQWFDLFlBQU0sRUFBQyxLQUFwQjtBQUEyQnFFLHFCQUFlLEVBQUM7QUFBM0M7QUFBaEQsSUFkSixlQWVJLG9CQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFFMUQsT0FBTyxDQUFDNEk7QUFBeEIsa0JBQ0Esb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFFO0FBQUNqSixnQkFBVSxFQUFDO0FBQVosS0FBaEM7QUFBdUQsZ0JBQVk7QUFBbkUsa0JBREEsZUFJQSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRUssT0FBTyxDQUFDNkk7QUFBeEIsa0JBQ1Esb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVk7QUFBckMsa0ZBRFIsZUFFUSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQixvSEFGUixlQUdRLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLGtHQUhSLGVBSVEsb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsd0dBSlIsZUFLUSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQix3RUFMUixDQUpBLENBZkosQ0FKQSxDQURKLENBREE7QUFxQ0gsQzs7Ozs7Ozs7Ozs7OztBQy9GRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNbEgsU0FBUyxHQUFHOUMsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUoySSxjQUFRLEVBQUUsTUFGTjtBQUdKekksb0JBQWMsRUFBRyxRQUhiO0FBSUp3RSxxQkFBZSxFQUFFO0FBSmI7QUFEK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFTZSxTQUFTMEYsSUFBVCxPQUEyQjtBQUFBLE1BQVp6TixTQUFZLFFBQVpBLFNBQVk7QUFDdEMsTUFBTXFFLE9BQU8sR0FBRzJCLFNBQVMsRUFBekI7QUFDQSxzQkFDTTtBQUFLLGFBQVMsRUFBRTNCLE9BQU8sQ0FBQ2pCO0FBQXhCLGtCQUNJLG9CQUFDLDJEQUFEO0FBQVMsYUFBUyxFQUFFcEQ7QUFBcEIsSUFESixlQUVJLG9CQUFDLDZDQUFELE9BRkosZUFHTSxvQkFBQyxxREFBRCxPQUhOLGVBSU0sb0JBQUMsc0RBQUQsT0FKTixDQUROO0FBUUg7QUFFRHlOLElBQUksQ0FBQ2hKLFNBQUwsR0FBaUI7QUFDZnpFLFdBQVMsRUFBRzBFLGlEQUFTLENBQUNNO0FBRFAsQ0FBakIsQzs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLGdFQUNYO0FBQ0kvQyxNQUFJLEVBQUcsbUJBRFg7QUFFSXlMLGFBQVcsRUFBRztBQUZsQixDQURXLEVBS1g7QUFDSXpMLE1BQUksRUFBRyxxQkFEWDtBQUVJNkosS0FBRyxZQUFNNkIsOERBQU4sQ0FGUDtBQUdJRCxhQUFXLEVBQUc7QUFIbEIsQ0FMVyxFQVVYO0FBQ0l6TCxNQUFJLEVBQUcsNEJBRFg7QUFFSTZKLEtBQUcsWUFBTThCLHdFQUFOLENBRlA7QUFHSUYsYUFBVyxFQUFHO0FBSGxCLENBVlcsRUFlWDtBQUNJekwsTUFBSSxFQUFHLHVCQURYO0FBRUk2SixLQUFHLFlBQU0rQixvRUFBTixDQUZQO0FBR0lILGFBQVcsRUFBRztBQUhsQixDQWZXLEVBb0JYO0FBQ0l6TCxNQUFJLEVBQUcsY0FEWDtBQUVJNkosS0FBRyxZQUFNZ0MsZ0VBQU4sQ0FGUDtBQUdJSixhQUFXLEVBQUc7QUFIbEIsQ0FwQlcsRUEwQlg7QUFDSXpMLE1BQUksRUFBRyxvQ0FEWDtBQUVJNkosS0FBRyxZQUFNaUMsZ0VBQU4sQ0FGUDtBQUdJTCxhQUFXLEVBQUc7QUFIbEIsQ0ExQlcsRUErQlg7QUFDSXpMLE1BQUksRUFBRywyQkFEWDtBQUVJNkosS0FBRyxZQUFNa0MsMERBQU4sQ0FGUDtBQUdJTixhQUFXLEVBQUc7QUFIbEIsQ0EvQlcsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTTFILFNBQVMsR0FBRzlDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNGQyxhQUFPLEVBQUUsTUFEUDtBQUVGQyxtQkFBYSxFQUFDLFFBRlo7QUFHRkMsb0JBQWMsRUFBRSxRQUhkO0FBSUZDLGdCQUFVLEVBQUMsUUFKVDtBQUtGRSxZQUFNLEVBQUcsT0FMUDtBQU1GRCxXQUFLLEVBQUcsT0FOTjtBQU9GNEQscUJBQWUsZ0JBQVVqQixtRUFBVixNQVBiO0FBUUZLLG9CQUFjLEVBQUc7QUFSZixLQUQrQjtBQVdyQzlDLFNBQUssRUFBRztBQUNKc0ssY0FBUSxFQUFFLEdBRE47QUFFSjFGLGNBQVEsRUFBRSxRQUZOO0FBR0o5RSxXQUFLLEVBQUcsTUFISjtBQUlKQyxZQUFNLEVBQUcsTUFKTDtBQUtKNEUsWUFBTSxFQUFHbkYsS0FBSyxDQUFDZ0QsT0FBTixDQUFjLENBQWQsQ0FMTDtBQU1KNEIscUJBQWUsRUFBRztBQU5kLEtBWDZCO0FBbUJyQ21HLGFBQVMsRUFBRztBQUNSRCxjQUFRLEVBQUcsR0FESDtBQUVSeEssV0FBSyxFQUFHLE1BRkE7QUFHUjhDLGVBQVMsRUFBRyxRQUhKO0FBSVJoRCxvQkFBYyxFQUFHLFFBSlQ7QUFLUndFLHFCQUFlLEVBQUM7QUFMUjtBQW5CeUIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUE0QmUsU0FBU29HLFlBQVQsR0FBeUI7QUFBQSx3QkFDWnZQLEtBQUssQ0FBQ2lCLFFBQU4sQ0FBZSxLQUFmLENBRFk7QUFBQTtBQUFBLE1BQzdCdU4sSUFENkI7QUFBQSxNQUN2QkMsT0FEdUI7O0FBQUEseUJBRUl6TyxLQUFLLENBQUNpQixRQUFOLENBQWUsQ0FBZixDQUZKO0FBQUE7QUFBQSxNQUU3QjRMLFlBRjZCO0FBQUEsTUFFZkMsZUFGZTs7QUFBQSx5QkFHTjlNLEtBQUssQ0FBQ2lCLFFBQU4sQ0FBZSxDQUFmLENBSE07QUFBQTtBQUFBLE1BRzdCdU8sT0FINkI7QUFBQSxNQUdwQjVDLFVBSG9COztBQUlwQyxNQUFNbkgsT0FBTyxHQUFHMkIsU0FBUyxFQUF6QjtBQUNBLE1BQU1vRyxNQUFNLEdBQUd4TixLQUFLLENBQUN1QyxNQUFOLEVBQWY7QUFDQXZDLE9BQUssQ0FBQytDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFNMEssUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQUFDLE9BQU8sRUFBSTtBQUNuREEsYUFBTyxDQUFDQyxPQUFSLENBQWdCLFVBQUFDLEtBQUs7QUFBQSxlQUFJWSxPQUFPLENBQUNaLEtBQUssQ0FBQ0MsY0FBUCxDQUFYO0FBQUEsT0FBckI7QUFDQWhCLHFCQUFlLENBQUMsQ0FBRCxDQUFmO0FBQ0QsS0FIZ0IsRUFHZjtBQUFJO0FBQ0ZpQixnQkFBVSxFQUFHO0FBRGYsS0FIZSxDQUFqQjtBQU1BTixZQUFRLENBQUNPLE9BQVQsQ0FBaUJSLE1BQU0sQ0FBQzNLLE9BQXhCO0FBQ0EsV0FBTztBQUFBLGFBQU00SyxRQUFRLENBQUNRLFNBQVQsQ0FBbUJULE1BQU0sQ0FBQzNLLE9BQTFCLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FURCxFQVNHLEVBVEg7QUFXQSxzQkFDRSxvQkFBQyxLQUFELENBQU8sUUFBUCxxQkFDRSxvQkFBQyxzREFBRDtBQUFNLFVBQUkyTCxJQUFWO0FBQWlCLFdBQU8sRUFBRTtBQUFDTixXQUFLLEVBQUMsSUFBUDtBQUFhQyxVQUFJLEVBQUM7QUFBbEI7QUFBMUIsa0JBQ0Esb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUUxSSxPQUFPLENBQUNqQixJQUF4QjtBQUE4QixPQUFHLEVBQUVnSjtBQUFuQyxrQkFDSSxvQkFBQyxzREFBRDtBQUFNLFVBQUlnQixJQUFWO0FBQ00sU0FBSyxFQUFFO0FBQUVFLHFCQUFlLEVBQUU7QUFBbkI7QUFEYixLQUVXRixJQUFJLEdBQUc7QUFBRUcsV0FBTyxFQUFFO0FBQUNDLFlBQU0sRUFBRyxJQUFWO0FBQWlCVixXQUFLLEVBQUcsSUFBekI7QUFBZ0NDLFVBQUksRUFBRztBQUF2QztBQUFYLEdBQUgsR0FBK0QsRUFGOUUsZ0JBSUksb0JBQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUUsQ0FBbEI7QUFBcUIsYUFBUyxFQUFFMUksT0FBTyxDQUFDVjtBQUF4QyxrQkFFRSxvQkFBQyxpREFBRDtBQUNBLFFBQUksRUFBRTRILDBEQUROO0FBRUEsZ0JBQVksRUFBRUUsWUFGZDtBQUdBLG1CQUFlLEVBQUVDLGVBSGpCO0FBSUEsY0FBVSxFQUFFRjtBQUpaLElBRkYsQ0FKSixDQURKLGVBZUksb0JBQUMsc0RBQUQ7QUFBTSxVQUFJNEIsSUFBVjtBQUNLLFNBQUssRUFBRTtBQUFFRSxxQkFBZSxFQUFFO0FBQW5CO0FBRFosS0FFVUYsSUFBSSxHQUFHO0FBQUVHLFdBQU8sRUFBRTtBQUFDQyxZQUFNLEVBQUcsSUFBVjtBQUFpQlYsV0FBSyxFQUFHLElBQXpCO0FBQWdDQyxVQUFJLEVBQUc7QUFBdkM7QUFBWCxHQUFILEdBQThELEVBRjVFLGdCQUlJLG9CQUFDLHVEQUFEO0FBQU8sYUFBUyxFQUFFLENBQWxCO0FBQXFCLGFBQVMsRUFBRTFJLE9BQU8sQ0FBQzZKO0FBQXhDLGtCQUVJLG9CQUFDLGdFQUFEO0FBQXdCLFdBQU8sRUFBRUU7QUFBakMsSUFGSixDQUpKLENBZkosQ0FEQSxDQURGLENBREY7QUErQkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTXBJLFNBQVMsR0FBRzlDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxtQkFBYSxFQUFDLFFBRlY7QUFHSkMsb0JBQWMsRUFBRSxRQUhaO0FBSUpDLGdCQUFVLEVBQUMsUUFKUDtBQUtKRSxZQUFNLEVBQUcsT0FMTDtBQU1KRCxXQUFLLEVBQUcsT0FOSjtBQU9KNEQscUJBQWUsZ0JBQVVqQix5REFBVixNQVBYO0FBUUpLLG9CQUFjLEVBQUc7QUFSYixLQUQrQjtBQVdyQzRILFdBQU8sRUFBRztBQUNSaEwsYUFBTyxFQUFHLE1BREY7QUFFUkUsb0JBQWMsRUFBRyxRQUZUO0FBR1JDLGdCQUFVLEVBQUcsUUFITDtBQUlSRixtQkFBYSxFQUFHO0FBSlIsS0FYMkI7QUFpQnJDZ0wsYUFBUyxFQUFHO0FBQ1Y3SyxXQUFLLEVBQUdOLEtBQUssQ0FBQ2dELE9BQU4sQ0FBYyxFQUFkLENBREU7QUFFVnpDLFlBQU0sRUFBR1AsS0FBSyxDQUFDZ0QsT0FBTixDQUFjLEVBQWQ7QUFGQyxLQWpCeUI7QUFxQnJDb0ksa0JBQWMsRUFBRztBQUNmMUssV0FBSyxFQUFDLE1BRFM7QUFFZkcsZ0JBQVUsRUFBQyxRQUZJO0FBR2ZxQixjQUFRLEVBQUMsTUFITTtBQUlmbUosZ0JBQVUsRUFBQyxLQUpJO0FBS2ZuRCxnQkFBVSxFQUFFO0FBTEcsS0FyQm9CO0FBNEJyQzZCLGtCQUFjLEVBQUc7QUFDZjdKLGFBQU8sRUFBQyxNQURPO0FBRWZRLFdBQUssRUFBRSxNQUZRO0FBR2ZQLG1CQUFhLEVBQUcsUUFIRDtBQUlmQyxvQkFBYyxFQUFHLFFBSkY7QUFLZkMsZ0JBQVUsRUFBRyxRQUxFO0FBTWYrRSxjQUFRLEVBQUcsTUFOSTtBQU9mRCxZQUFNLEVBQUc7QUFQTTtBQTVCb0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUF1Q2lCLFNBQVM2RixZQUFULEdBQXlCO0FBQUEsd0JBQ2R2UCxLQUFLLENBQUNpQixRQUFOLENBQWUsS0FBZixDQURjO0FBQUE7QUFBQSxNQUMvQnVOLElBRCtCO0FBQUEsTUFDekJDLE9BRHlCOztBQUV0QyxNQUFNaEosT0FBTyxHQUFHMkIsU0FBUyxFQUF6QjtBQUNBLE1BQU1vRyxNQUFNLEdBQUd4TixLQUFLLENBQUN1QyxNQUFOLEVBQWY7QUFDQXZDLE9BQUssQ0FBQytDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFNMEssUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQUFDLE9BQU8sRUFBSTtBQUNuREEsYUFBTyxDQUFDQyxPQUFSLENBQWdCLFVBQUFDLEtBQUs7QUFBQSxlQUFJWSxPQUFPLENBQUNaLEtBQUssQ0FBQ0MsY0FBUCxDQUFYO0FBQUEsT0FBckI7QUFDRCxLQUZnQixFQUVmO0FBQUk7QUFDRkMsZ0JBQVUsRUFBRztBQURmLEtBRmUsQ0FBakI7QUFLQU4sWUFBUSxDQUFDTyxPQUFULENBQWlCUixNQUFNLENBQUMzSyxPQUF4QjtBQUNBLFdBQU87QUFBQSxhQUFNNEssUUFBUSxDQUFDUSxTQUFULENBQW1CVCxNQUFNLENBQUMzSyxPQUExQixDQUFOO0FBQUEsS0FBUDtBQUNELEdBUkQsRUFRRyxFQVJIO0FBU0Esc0JBQ0Usb0JBQUMsS0FBRCxDQUFPLFFBQVAscUJBQ0Usb0JBQUMsc0RBQUQ7QUFBTSxVQUFJMkwsSUFBVjtBQUFpQixXQUFPLEVBQUU7QUFBQ04sV0FBSyxFQUFDLElBQVA7QUFBYUMsVUFBSSxFQUFDO0FBQWxCO0FBQTFCLGtCQUNBLG9CQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFFMUksT0FBTyxDQUFDakIsSUFBeEI7QUFBOEIsT0FBRyxFQUFFZ0o7QUFBbkMsa0JBQ0Esb0JBQUMsa0RBQUQscUJBQ0ksb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUUvSCxPQUFPLENBQUNnSztBQUF4QixrQkFDQSxvQkFBQyxzREFBRDtBQUFNLFVBQUlqQjtBQUFWLEtBQXFCQSxJQUFJLEdBQUU7QUFBQ0csV0FBTyxFQUFDO0FBQUNULFdBQUssRUFBQyxJQUFQO0FBQWFDLFVBQUksRUFBQztBQUFsQjtBQUFULEdBQUYsR0FBcUMsRUFBOUQsZ0JBQ0Usb0JBQUMsd0RBQUQ7QUFBUSxPQUFHLEVBQUMsTUFBWjtBQUFtQixPQUFHLEVBQUUwQix3REFBeEI7QUFBbUMsYUFBUyxFQUFFcEssT0FBTyxDQUFDaUs7QUFBdEQsSUFERixDQURBLGVBSUUsb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsUUFBcEI7QUFBNkIsYUFBUyxFQUFFakssT0FBTyxDQUFDa0s7QUFBaEQsd0JBSkYsQ0FESixlQU9JLG9CQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFFbEssT0FBTyxDQUFDNkk7QUFBeEIsa0JBQ0Usb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIseUVBREYsZUFFRSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQiw2Q0FGRixlQUdFLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLHdEQUhGLENBUEosQ0FEQSxlQWNFLG9CQUFDLG9EQUFELE9BZEYsQ0FEQSxDQURGLENBREY7QUFzQkgsQzs7Ozs7Ozs7Ozs7OztBQ2pGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTWxILFNBQVMsR0FBRzlDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNKSyxXQUFLLEVBQUUsTUFESDtBQUVKSCxtQkFBYSxFQUFDLEtBRlY7QUFHSlUsZ0JBQVUsRUFBRztBQUhULEtBRCtCO0FBTXJDMEssVUFBTSxFQUFFO0FBQ05yTCxhQUFPLEVBQUU7QUFESDtBQU42QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVdlLFNBQVNzTCxlQUFULE9BQXFDO0FBQUEsTUFBVlAsT0FBVSxRQUFWQSxPQUFVO0FBQ2hELE1BQU0vSixPQUFPLEdBQUcyQixTQUFTLEVBQXpCO0FBQ0Esc0JBQ0ksb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUUzQixPQUFPLENBQUNqQjtBQUF4QixrQkFDSSxvQkFBQyx5REFBRDtBQUFTLGNBQVUsRUFBRWdMLE9BQXJCO0FBQThCLGVBQVcsRUFBQyxZQUExQztBQUF1RCxTQUFLLEVBQUU7QUFBQ3JHLHFCQUFlLEVBQUM7QUFBakI7QUFBOUQsS0FFUTZHLDBEQUFXLENBQUNqRSxHQUFaLENBQWdCLFVBQUNrRSxJQUFELEVBQU1oRSxLQUFOLEVBQWM7QUFDMUIsd0JBQ0Esb0JBQUMsc0RBQUQ7QUFBTSxlQUFTLEVBQUVBLEtBQUssR0FBR3VELE9BQXpCO0FBQWtDLFNBQUcsRUFBRXZEO0FBQXZDLG9CQUNJLG9CQUFDLDJEQUFELHFCQUNJLG9CQUFDLDREQUFEO0FBQVksYUFBTyxFQUFDLFNBQXBCO0FBQThCLFdBQUssRUFBRTtBQUFDN0csa0JBQVUsRUFBQztBQUFaO0FBQXJDLE9BQ0s2SyxJQUFJLENBQUM1TSxJQURWLENBREosQ0FESixDQURBO0FBUUYsR0FURixDQUZSLENBREosQ0FESjtBQWtCSDtBQUNEME0sZUFBZSxDQUFDbEssU0FBaEIsR0FBNEI7QUFDeEIySixTQUFPLEVBQUcxSixpREFBUyxDQUFDcUgsTUFBVixDQUFpQnpHO0FBREgsQ0FBNUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTVUsU0FBUyxHQUFHOUMsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQO0FBRUZDLG1CQUFhLEVBQUMsUUFGWjtBQUdGMEksY0FBUSxFQUFFLE1BSFI7QUFJRnpJLG9CQUFjLEVBQUUsUUFKZDtBQUtGdUwsa0JBQVksRUFBRyxRQUxiO0FBTUZwTCxZQUFNLEVBQUcsT0FOUDtBQU9GRCxXQUFLLEVBQUcsTUFQTjtBQVFGNEQscUJBQWUsZ0JBQVFqQix3REFBUixNQVJiO0FBU0ZLLG9CQUFjLEVBQUcsT0FUZjtBQVVGNUMsV0FBSyxFQUFHO0FBVk47QUFEK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFjZSxTQUFTa0wsSUFBVCxHQUFpQjtBQUM1QixNQUFNMUssT0FBTyxHQUFHMkIsU0FBUyxFQUF6Qjs7QUFENEIsd0JBRUxwSCxLQUFLLENBQUNpQixRQUFOLENBQWUsS0FBZixDQUZLO0FBQUE7QUFBQSxNQUVyQnFNLElBRnFCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUc1QixNQUFNdkcsVUFBVSxHQUFHaEgsS0FBSyxDQUFDdUMsTUFBTixDQUFhLElBQWIsQ0FBbkI7QUFDQSxNQUFNaUwsTUFBTSxHQUFHeE4sS0FBSyxDQUFDdUMsTUFBTixFQUFmO0FBRUF2QyxPQUFLLENBQUMrQyxTQUFOLENBQWdCLFlBQU07QUFDbEIsUUFBTTBLLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFBQyxPQUFPLEVBQUk7QUFDakRBLGFBQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxLQUFLO0FBQUEsZUFBSU4sT0FBTyxDQUFDTSxLQUFLLENBQUNDLGNBQVAsQ0FBWDtBQUFBLE9BQXJCO0FBQ0EsVUFBSTlHLFVBQVUsQ0FBQ25FLE9BQWYsRUFBd0JtRSxVQUFVLENBQUNuRSxPQUFYLEdBQXFCLEtBQXJCO0FBQzNCLEtBSGdCLEVBR2Y7QUFBSTtBQUNGa0wsZ0JBQVUsRUFBRztBQURmLEtBSGUsQ0FBakI7QUFNRk4sWUFBUSxDQUFDTyxPQUFULENBQWlCUixNQUFNLENBQUMzSyxPQUF4QjtBQUNBLFdBQU87QUFBQSxhQUFNNEssUUFBUSxDQUFDUSxTQUFULENBQW1CVCxNQUFNLENBQUMzSyxPQUExQixDQUFOO0FBQUEsS0FBUDtBQUNELEdBVEQsRUFTRyxFQVRIO0FBV0Esc0JBQ0Esb0JBQUMsc0RBQUQ7QUFBTSxVQUFJeUssSUFBVjtBQUFnQixXQUFPLEVBQUU7QUFBQ1ksV0FBSyxFQUFDLElBQVA7QUFBYUMsVUFBSSxFQUFDO0FBQWxCO0FBQXpCLGtCQUNJLG9CQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFFMUksT0FBTyxDQUFDakIsSUFBeEI7QUFBOEIsT0FBRyxFQUFFZ0o7QUFBbkMsa0JBQ0ksb0JBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLFNBQS9CO0FBQXlDLFNBQUssRUFBRTtBQUFDZixnQkFBVSxFQUFDO0FBQVo7QUFBaEQsS0FDS3pGLFVBQVUsQ0FBQ25FLE9BQVgsR0FBcUIsU0FBckIsR0FBaUMsaUJBRHRDLENBREosRUFJU21FLFVBQVUsQ0FBQ25FLE9BQVgsR0FBb0IsSUFBcEIsZ0JBQTRCLG9CQUFDLG9EQUFELE9BSnJDLENBREosQ0FEQTtBQVVILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DRDtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU13QixRQUFRLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbENnQixVQUFNLEVBQUc7QUFDTFYsV0FBSyxFQUFHLGFBREg7QUFFTCtDLGtCQUFZLEVBQUc7QUFGVixLQUR5QjtBQUtsQ3dJLFFBQUksa0NBQ0c3TCxLQUFLLENBQUM4TCxVQUFOLENBQWlCOUssTUFEcEI7QUFFQTRELHFCQUFlLEVBQUUsU0FGakI7QUFHQXNELGdCQUFVLEVBQUcsa0JBSGI7QUFJQXhILFdBQUssRUFBRztBQUpSLE1BTDhCO0FBV2xDcUwsWUFBUSxFQUFHO0FBQ1BoTCxlQUFTLEVBQUcsS0FETDtBQUVQTCxXQUFLLEVBQUM7QUFGQztBQVh1QixHQUFMO0FBQUEsQ0FBTixDQUEzQjtBQWlCZSwyRUFBWTtBQUN2QixNQUFNUSxPQUFPLEdBQUdwQixRQUFRLEVBQXhCO0FBQ0Esc0JBQ0ksb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUVvQixPQUFPLENBQUM2SztBQUF4QixrQkFDSSxvQkFBQyxxREFBRDtBQUFNLE1BQUUsRUFBQyxhQUFUO0FBQXVCLFNBQUssRUFBRTtBQUFDQyxvQkFBYyxFQUFDLE1BQWhCO0FBQXdCdEwsV0FBSyxFQUFDO0FBQTlCO0FBQTlCLGtCQUNJLG9CQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBcUIsU0FBSyxFQUFDLFdBQTNCO0FBQXVDLFdBQU8sRUFBQyxXQUEvQztBQUNBLGFBQVMsZUFBRSxvQkFBQyxpRUFBRDtBQUFnQixXQUFLLEVBQUMsU0FBdEI7QUFBZ0MsV0FBSyxFQUFFO0FBQUN3QixnQkFBUSxFQUFHO0FBQVo7QUFBdkMsTUFEWDtBQUVBLGFBQVMsRUFBRWhCLE9BQU8sQ0FBQ0Y7QUFGbkIsbUJBREosQ0FESixDQURKO0FBV0gsQzs7Ozs7Ozs7Ozs7OztBQ25DRDtBQUFlLG9GQUF1QiwrQ0FBK0MsRTs7Ozs7Ozs7Ozs7O0FDQXJGO0FBQWUsb0ZBQXVCLCtDQUErQyxFOzs7Ozs7Ozs7Ozs7QUNBckY7QUFBZSxvRkFBdUIsOENBQThDLEU7Ozs7Ozs7Ozs7OztBQ0FwRjtBQUFlLG9GQUF1QixvREFBb0QsRTs7Ozs7Ozs7Ozs7O0FDQTFGO0FBQWUsb0ZBQXVCLHNEQUFzRCxFOzs7Ozs7Ozs7Ozs7QUNBNUY7QUFBZSxvRkFBdUIsOERBQThELEU7Ozs7Ozs7Ozs7OztBQ0FwRztBQUFlLG9GQUF1QixzREFBc0QsRTs7Ozs7Ozs7Ozs7O0FDQTVGO0FBQWUsb0ZBQXVCLCtEQUErRCxFOzs7Ozs7Ozs7Ozs7QUNBckc7QUFBZSxvRkFBdUIsOENBQThDLEU7Ozs7Ozs7Ozs7OztBQ0FwRjtBQUFlLG9GQUF1QixnREFBZ0QsRTs7Ozs7Ozs7Ozs7O0FDQXRGO0FBQWUsb0ZBQXVCLDBEQUEwRCxFOzs7Ozs7Ozs7Ozs7QUNBaEc7QUFBZSxvRkFBdUIscURBQXFELEU7Ozs7Ozs7Ozs7OztBQ0EzRjtBQUFlLG9GQUF1Qix5REFBeUQsRTs7Ozs7Ozs7Ozs7O0FDQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQWlMLGdEQUFRLENBQUNDLE1BQVQsZUFDSyxvQkFBQyw0REFBRCxxQkFDRyxvQkFBQywrQ0FBRCxPQURILENBREwsRUFJS0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBSkwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU12SixTQUFTLEdBQUc5QywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25Dc0UsYUFBUyxFQUFHO0FBQ1JoRSxXQUFLLEVBQUcsTUFEQTtBQUVSQyxZQUFNLEVBQUcsT0FGRDtBQUdSTCxhQUFPLEVBQUcsTUFIRjtBQUlSRSxvQkFBYyxFQUFHLFFBSlQ7QUFLUkMsZ0JBQVUsRUFBRyxRQUxMO0FBTVJGLG1CQUFhLEVBQUcsUUFOUjtBQU9SK0QscUJBQWUsZ0JBQVVqQix5RUFBVixNQVBQO0FBUVJ2QyxXQUFLLEVBQUM7QUFSRSxLQUR1QjtBQVduQ00sVUFBTSxFQUFHO0FBQ0xILGdCQUFVLEVBQUcsUUFEUjtBQUVMc0UsWUFBTSxFQUFHbkYsS0FBSyxDQUFDZ0QsT0FBTixDQUFjLENBQWQ7QUFGSixLQVgwQjtBQWVuQ3FKLG1CQUFlLEVBQUc7QUFDZGxNLG1CQUFhLEVBQUcsS0FERjtBQUVkRCxhQUFPLEVBQUcsTUFGSTtBQUdkRSxvQkFBYyxFQUFHLFFBSEg7QUFJZEMsZ0JBQVUsRUFBRyxRQUpDO0FBS2Q4RSxZQUFNLEVBQUduRixLQUFLLENBQUNnRCxPQUFOLENBQWMsQ0FBZDtBQUxLLEtBZmlCO0FBc0JuQzZJLFFBQUksa0NBQ0c3TCxLQUFLLENBQUM4TCxVQUFOLENBQWlCOUssTUFEcEI7QUFFQTRELHFCQUFlLEVBQUUsU0FGakI7QUFHQXNELGdCQUFVLEVBQUcsMkJBSGI7QUFJQS9DLFlBQU0sRUFBRyxhQUpUO0FBS0F6RSxXQUFLLEVBQUU7QUFMUDtBQXRCK0IsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUE4QkEsSUFBTTRMLFdBQVcsR0FBRztBQUNoQkMsU0FBTyxFQUFHLENBQ1I7QUFBRUMsU0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFNBQUssRUFBRSxNQUF4QjtBQUFpQ0MsWUFBUSxFQUFDO0FBQTFDLEdBRFEsRUFFUjtBQUFFRixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBRlEsRUFHUjtBQUFFRCxTQUFLLEVBQUUsWUFBVDtBQUF1QkMsU0FBSyxFQUFFO0FBQTlCLEdBSFEsRUFJUjtBQUFFRCxTQUFLLEVBQUUsT0FBVDtBQUFtQkMsU0FBSyxFQUFDLE9BQXpCO0FBQWtDQyxZQUFRLEVBQUM7QUFBM0MsR0FKUSxFQUtSO0FBQUVGLFNBQUssRUFBRSxRQUFUO0FBQW1CQyxTQUFLLEVBQUUsUUFBMUI7QUFBb0NDLFlBQVEsRUFBQztBQUE3QyxHQUxRLEVBTVI7QUFBRUYsU0FBSyxFQUFFLE1BQVQ7QUFBa0JDLFNBQUssRUFBQztBQUF4QixHQU5RLENBRE07QUFTaEI5TixNQUFJLEVBQUcsQ0FDTDtBQUFFLFlBQVEsUUFBVjtBQUFvQixlQUFXLE9BQS9CO0FBQXdDLGtCQUFjLElBQXREO0FBQTRELGFBQVEsYUFBcEU7QUFBbUYsY0FBVSxDQUE3RjtBQUFpRyxZQUFPO0FBQXhHLEdBREssRUFFTDtBQUFFLFlBQVEsTUFBVjtBQUFrQixlQUFXLE1BQTdCO0FBQXFDLGtCQUFjLElBQW5EO0FBQXlELGFBQVEsYUFBakU7QUFBZ0YsY0FBVSxDQUExRjtBQUE4RixZQUFPO0FBQXJHLEdBRkssRUFHTDtBQUFFLFlBQVEsUUFBVjtBQUFvQixlQUFXLE1BQS9CO0FBQXVDLGtCQUFjLElBQXJEO0FBQTJELGFBQVEsYUFBbkU7QUFBa0YsY0FBVSxDQUE1RjtBQUFnRyxZQUFPO0FBQXZHLEdBSEssRUFJTDtBQUFFLFlBQVEsS0FBVjtBQUFpQixlQUFXLFFBQTVCO0FBQXNDLGtCQUFjLElBQXBEO0FBQTBELGFBQVEsYUFBbEU7QUFBaUYsY0FBVSxDQUEzRjtBQUErRixZQUFPO0FBQXRHLEdBSkssRUFLTDtBQUFFLFlBQVEsTUFBVjtBQUFrQixlQUFXLE1BQTdCO0FBQXFDLGtCQUFjLElBQW5EO0FBQXlELGFBQVEsYUFBakU7QUFBZ0YsY0FBVSxDQUExRjtBQUE4RixZQUFPO0FBQXJHLEdBTEssRUFNTDtBQUFFLFlBQVEsS0FBVjtBQUFpQixlQUFXLEtBQTVCO0FBQW1DLGtCQUFjLElBQWpEO0FBQXVELGFBQVEsYUFBL0Q7QUFBOEUsY0FBVSxDQUF4RjtBQUE0RixZQUFPO0FBQW5HLEdBTks7QUFUUyxDQUFwQjtBQWtCZSxTQUFTZ08sV0FBVCxPQUFpRDtBQUFBLE1BQTFCN0csS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVI2RyxLQUFRLFFBQVJBLEtBQVE7O0FBQUEsd0JBQ3BDblIsS0FBSyxDQUFDaUIsUUFBTixDQUFlLEtBQWYsQ0FEb0M7QUFBQTtBQUFBLE1BQ3JEcU0sSUFEcUQ7QUFBQSxNQUMvQ0MsT0FEK0M7O0FBQUEseUJBRWxDdk4sS0FBSyxDQUFDaUIsUUFBTixDQUFlLEtBQWYsQ0FGa0M7QUFBQTtBQUFBLE1BRXJEbVEsS0FGcUQ7QUFBQSxNQUU5Q0MsUUFGOEM7O0FBRzVELE1BQU01TCxPQUFPLEdBQUcyQixTQUFTLEVBQXpCOztBQUNBLE1BQU1rSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUJoSCxZQUFRLGlDQUFLRCxLQUFMO0FBQWF5RyxhQUFPLEVBQUdELFdBQVcsQ0FBQ0MsT0FBbkM7QUFBNkM1TixVQUFJLEVBQUcyTixXQUFXLENBQUMzTixJQUFoRTtBQUFzRXFPLGlCQUFXLEVBQUcsQ0FBQ2xILEtBQUssQ0FBQ2tIO0FBQTNGLE9BQVI7QUFDSCxHQUZEOztBQUdBdlIsT0FBSyxDQUFDK0MsU0FBTixDQUFnQixZQUFJO0FBQ2hCd0ssV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBckMsY0FBVSxDQUFDbUcsUUFBUSxDQUFDLElBQUQsQ0FBVCxFQUFrQixJQUFsQixDQUFWO0FBQ0gsR0FIRCxFQUdFLEVBSEY7QUFJQSxzQkFDQSxvQkFBQyxzREFBRDtBQUFNLFVBQUkvRCxJQUFWO0FBQWdCLFdBQU8sRUFBRTtBQUFDWSxXQUFLLEVBQUcsR0FBVDtBQUFjQyxVQUFJLEVBQUM7QUFBbkI7QUFBekIsa0JBQ0ksb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUUxSSxPQUFPLENBQUNvRDtBQUF4QixrQkFDSSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUMsU0FBL0I7QUFBeUMsU0FBSyxFQUFFO0FBQUM0RCxnQkFBVSxFQUFDO0FBQVo7QUFBaEQsd0JBREosZUFJSSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxXQUFwQjtBQUFnQyxnQkFBWSxNQUE1QztBQUE2QyxTQUFLLEVBQUU7QUFBQ0EsZ0JBQVUsRUFBQztBQUFaO0FBQXBELGdGQUpKLGVBUUksb0JBQUMsc0RBQUQ7QUFBTSxVQUFJMkUsS0FBVjtBQUFpQixXQUFPLEVBQUU7QUFBQ2xELFdBQUssRUFBRyxJQUFUO0FBQWVDLFVBQUksRUFBQztBQUFwQjtBQUExQixrQkFDSSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRTFJLE9BQU8sQ0FBQ21MO0FBQXhCLGtCQUNJLG9CQUFDLHdEQUFEO0FBQVEsYUFBUyxFQUFFbkwsT0FBTyxDQUFDRixNQUEzQjtBQUFtQyxXQUFPLEVBQUMsV0FBM0M7QUFBdUQsU0FBSyxFQUFDLFdBQTdEO0FBQXlFLFFBQUksRUFBQyxPQUE5RTtBQUFzRixXQUFPLEVBQUUrTDtBQUEvRixnQkFESixlQUlJLG9CQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDLFVBQVQ7QUFBb0IsU0FBSyxFQUFFO0FBQUNmLG9CQUFjLEVBQUc7QUFBbEI7QUFBM0Isa0JBQ0ksb0JBQUMsd0RBQUQ7QUFBUSxhQUFTLEVBQUU5SyxPQUFPLENBQUNGLE1BQTNCO0FBQW1DLFdBQU8sRUFBQyxXQUEzQztBQUF1RCxTQUFLLEVBQUMsU0FBN0Q7QUFBdUUsUUFBSSxFQUFDO0FBQTVFLDhCQURKLENBSkosQ0FESixDQVJKLENBREosQ0FEQTtBQXlCSDtBQUVEMkwsV0FBVyxDQUFDckwsU0FBWixHQUF3QjtBQUNwQndFLE9BQUssRUFBR3ZFLGlEQUFTLENBQUMwTCxLQUFWLENBQWdCO0FBQ3BCRCxlQUFXLEVBQUd6TCxpREFBUyxDQUFDTSxJQUFWLENBQWVNLFVBRFQ7QUFFcEIrSyxZQUFRLEVBQUczTCxpREFBUyxDQUFDTSxJQUFWLENBQWVNLFVBRk47QUFHcEJvSyxXQUFPLEVBQUdoTCxpREFBUyxDQUFDNEwsS0FIQTtBQUlwQnhPLFFBQUksRUFBRzRDLGlEQUFTLENBQUM0TDtBQUpHLEdBQWhCLENBRFk7QUFPcEJwSCxVQUFRLEVBQUd4RSxpREFBUyxDQUFDYSxJQUFWLENBQWVEO0FBUE4sQ0FBeEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXJDLFFBQVEsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNwQ3NFLGFBQVMsRUFBRztBQUNSaEUsV0FBSyxFQUFHLE1BREE7QUFFUkMsWUFBTSxFQUFHLE9BRkQ7QUFHUkwsYUFBTyxFQUFHLE1BSEY7QUFJUkUsb0JBQWMsRUFBRyxRQUpUO0FBS1JDLGdCQUFVLEVBQUcsUUFMTDtBQU1SRixtQkFBYSxFQUFHLEtBTlI7QUFPUitELHFCQUFlLGdCQUFVakIseUVBQVY7QUFQUCxLQUR3QjtBQVVwQ3pDLFNBQUssRUFBRztBQUNKTCxtQkFBYSxFQUFHLFFBRFo7QUFFSndMLGtCQUFZLEVBQUcsY0FGWDtBQUdKNUssZUFBUyxFQUFHO0FBSFIsS0FWNEI7QUFlcENxTSxZQUFRLEVBQUc7QUFDUCxlQUFTO0FBQ0xqSSxjQUFNLEVBQUUsV0FESDtBQUVMN0UsYUFBSyxFQUFFLE1BRkY7QUFHTHdLLGdCQUFRLEVBQUcsTUFITjtBQUlMNUssZUFBTyxFQUFDO0FBSkg7QUFERixLQWZ5QjtBQXVCcENpRCxTQUFLLEVBQUc7QUFDSjdDLFdBQUssRUFBRyxNQURKO0FBRUpDLFlBQU0sRUFBRyxNQUZMO0FBR0o2QyxlQUFTLEVBQUcsUUFIUjtBQUlKSCxnQkFBVSxxQ0FBK0JFLHlEQUEvQixNQUpOO0FBS0pHLG9CQUFjLEVBQUcsU0FMYjtBQU1KK0gsZ0JBQVUsRUFBRyxLQU5UO0FBT0pqSCxlQUFTLEVBQUc7QUFQUixLQXZCNEI7QUFnQ3BDbUcsZUFBVyxFQUFHO0FBQ1ZuSCxlQUFTLEVBQUc7QUFERjtBQWhDc0IsR0FBWjtBQUFBLENBQUQsQ0FBM0I7QUFvQ0EsSUFBTWlLLGFBQWEsR0FBRztBQUNsQixhQUFZLEVBRE07QUFFbEIsYUFBWSxFQUZNO0FBR2xCLGFBQVksRUFITTtBQUlsQixhQUFZLEVBSk07QUFLbEIsYUFBWSxFQUxNO0FBTWxCLGFBQVksRUFOTTtBQU9sQixhQUFZLEVBUE07QUFRbEIsYUFBWSxFQVJNO0FBU2xCLGFBQVksRUFUTTtBQVVsQixhQUFZO0FBVk0sQ0FBdEI7QUFZZSxTQUFTQyxPQUFULE9BQStCO0FBQUEsTUFBWnpRLFNBQVksUUFBWkEsU0FBWTtBQUMxQztBQUNBLE1BQU1xRSxPQUFPLEdBQUdwQixRQUFRLEVBQXhCO0FBQ0EsTUFBTXlOLGNBQWMsR0FBRzlSLEtBQUssQ0FBQytSLFVBQU4sQ0FBaUI1UixvREFBakIsQ0FBdkI7O0FBSDBDLG9CQUlLVSwrREFBVSxDQUFFLENBQUMsU0FBRCxDQUFGLENBSmY7QUFBQTtBQUFBLE1BSWxDQyxPQUprQztBQUFBLE1BSXhCQyxTQUp3QjtBQUFBLE1BSVpDLFlBSlksb0JBSzFDOzs7QUFMMEMsd0JBTWxCaEIsS0FBSyxDQUFDaUIsUUFBTixDQUFlLEtBQWYsQ0FOa0I7QUFBQTtBQUFBLE1BTW5DcU0sSUFObUM7QUFBQSxNQU03QkMsT0FONkI7O0FBQUEseUJBT2hCdk4sS0FBSyxDQUFDaUIsUUFBTixDQUFlO0FBQUNLLFFBQUksRUFBQztBQUFOLEdBQWYsQ0FQZ0I7QUFBQTtBQUFBLE1BT25DMFEsS0FQbUM7QUFBQSxNQU81QkMsUUFQNEI7O0FBQUEseUJBUUhqUyxLQUFLLENBQUNpQixRQUFOLENBQWU7QUFBQ0ssUUFBSSxFQUFDLEtBQU47QUFBYVEsV0FBTyxFQUFHO0FBQXZCLEdBQWYsQ0FSRztBQUFBO0FBQUEsTUFRbkNvUSxXQVJtQztBQUFBLE1BUXJCQyxjQVJxQjs7QUFBQSx5QkFTakJuUyxLQUFLLENBQUNpQixRQUFOLENBQWU7QUFDcENtUixXQUFPLEVBQUdSLGFBRDBCO0FBRXBDUyxhQUFTLEVBQUdDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLEtBQWY7QUFGd0IsR0FBZixDQVRpQjtBQUFBO0FBQUEsTUFTbkNyUCxJQVRtQztBQUFBLE1BUzVCc1AsT0FUNEIsd0JBYTFDOzs7QUFDQSxNQUFNQyxPQUFPLEdBQUd6UyxLQUFLLENBQUN1QyxNQUFOLEVBQWhCLENBZDBDLENBZTFDOztBQUNBd0UsOEVBQWdCLENBQUMsWUFBSTtBQUNqQjJMLGtGQUFrQixHQUFHelAsSUFBckIsQ0FBMEIsVUFBQTJJLFFBQVEsRUFBSTtBQUNsQ2pKLGFBQU8sQ0FBQ0MsR0FBUixzQkFBMEJPLElBQUksQ0FBQ0MsU0FBTCxDQUFld0ksUUFBZixDQUExQjs7QUFDQSxVQUFJQSxRQUFRLENBQUNyRixNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLFlBQU1vTSxjQUFjLEdBQUcvRyxRQUFRLENBQUMxSSxJQUFULEdBQWUwSSxRQUFRLENBQUMxSSxJQUFULENBQWNtUCxTQUFkLEdBQTBCekcsUUFBUSxDQUFDMUksSUFBVCxDQUFjbVAsU0FBZCxDQUF3QmhILE1BQWxELEdBQTJELENBQTFFLEdBQThFLENBQXJHO0FBQ0EsWUFBTWdILFNBQVMsR0FBR3pHLFFBQVEsQ0FBQzFJLElBQVQsR0FBZTBJLFFBQVEsQ0FBQzFJLElBQVQsQ0FBY21QLFNBQWQsc0JBQThCekcsUUFBUSxDQUFDMUksSUFBVCxDQUFjbVAsU0FBNUMsSUFBeUQsRUFBeEUsR0FBNkUsRUFBL0Y7O0FBQ0EsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtELGNBQXpCLEVBQXlDQyxDQUFDLEVBQTFDLEVBQStDO0FBQzNDUCxtQkFBUyxDQUFDUSxJQUFWLENBQWUsS0FBZjtBQUNIOztBQUNELFlBQU1ULE9BQU8sR0FBR3hHLFFBQVEsQ0FBQzFJLElBQVQsR0FBZTBJLFFBQVEsQ0FBQzFJLElBQVQsQ0FBY2tQLE9BQWQsR0FBd0J4RyxRQUFRLENBQUMxSSxJQUFULENBQWNrUCxPQUF0QyxHQUFnRCxFQUEvRCxHQUFvRSxFQUFwRjtBQUNBLFlBQU1VLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNaLE9BQWQsRUFBdUIvRyxNQUE3Qzs7QUFDQSxhQUFLLElBQUl1SCxHQUFDLEdBQUdFLGFBQWIsRUFBNEJGLEdBQUMsR0FBRyxFQUFoQyxFQUFvQ0EsR0FBQyxFQUFyQyxFQUF5QztBQUNyQ1IsaUJBQU8saUJBQVVRLEdBQVYsRUFBUCxHQUF3QixFQUF4QjtBQUNIOztBQUNESCxlQUFPLENBQUM1UCxPQUFSLEdBQWtCO0FBQUN1UCxpQkFBTyxFQUFQQSxPQUFEO0FBQVNDLG1CQUFTLEVBQVRBO0FBQVQsU0FBbEI7QUFDQTFQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZNlAsT0FBTyxDQUFDNVAsT0FBcEI7QUFDQTJQLGVBQU8sQ0FBQztBQUFDSixpQkFBTyxFQUFQQSxPQUFEO0FBQVVDLG1CQUFTLEVBQVRBO0FBQVYsU0FBRCxDQUFQO0FBQ0gsT0FkRCxNQWNPO0FBQ0gsWUFBSXpHLFFBQVEsQ0FBQ3JGLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFBRztBQUM1QjJFLG9CQUFVLENBQUMrSCxZQUFZLEVBQWIsRUFBaUIsSUFBakIsQ0FBVjtBQUNBZCx3QkFBYyxDQUFDO0FBQUM3USxnQkFBSSxFQUFHLElBQVI7QUFBYWlGLGtCQUFNLEVBQUMsT0FBcEI7QUFBNkJ6RSxtQkFBTztBQUFwQyxXQUFELENBQWQ7QUFDSCxTQUhELE1BR087QUFDSHFRLHdCQUFjLENBQUM7QUFBQzdRLGdCQUFJLEVBQUcsSUFBUjtBQUFhaUYsa0JBQU0sRUFBQyxPQUFwQjtBQUE2QnpFLG1CQUFPLDBCQUFvQjhKLFFBQVEsQ0FBQ3JGLE1BQTdCO0FBQXBDLFdBQUQsQ0FBZDtBQUNIO0FBQ0o7QUFDSixLQXhCRCxXQXdCUyxVQUFBNUMsR0FBRyxFQUFJO0FBQ1osVUFBR0EsR0FBSCxFQUFRO0FBQ0poQixlQUFPLENBQUNDLEdBQVIsQ0FBWWUsR0FBWjtBQUNBdUgsa0JBQVUsQ0FBQytILFlBQVksRUFBYixFQUFpQixJQUFqQixDQUFWO0FBQ0FkLHNCQUFjLENBQUM7QUFBQzdRLGNBQUksRUFBQyxJQUFOO0FBQVdpRixnQkFBTSxFQUFDLE9BQWxCO0FBQTJCekUsaUJBQU8sRUFBQztBQUFuQyxTQUFELENBQWQ7QUFDSDtBQUNKLEtBOUJEO0FBOEJHLEdBL0JTLENBQWhCO0FBa0NBOUIsT0FBSyxDQUFDK0MsU0FBTixDQUFnQixZQUFJO0FBQ2hCMFAsV0FBTyxDQUFDNVAsT0FBUixHQUFrQjtBQUNkdVAsYUFBTyxvQkFDQWxQLElBQUksQ0FBQ2tQLE9BREwsQ0FETztBQUlkQyxlQUFTLHFCQUNGblAsSUFBSSxDQUFDbVAsU0FESDtBQUpLLEtBQWxCO0FBUUgsR0FURCxFQVNFLENBQUNuUCxJQUFJLENBQUNrUCxPQUFOLEVBQWVsUCxJQUFJLENBQUNtUCxTQUFwQixDQVRGLEVBbEQwQyxDQTZEMUM7O0FBQ0FyUyxPQUFLLENBQUMrQyxTQUFOLENBQWdCLFlBQUk7QUFDaEJ3SyxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0EsV0FBTyxZQUFNO0FBQ1QsVUFBTWhNLE1BQU0sR0FBRzJSLFlBQVksQ0FBQ1QsT0FBTyxDQUFDNVAsT0FBUixDQUFnQnVQLE9BQWpCLEVBQTBCSyxPQUFPLENBQUM1UCxPQUFSLENBQWdCd1AsU0FBMUMsRUFBcUQsSUFBckQsQ0FBM0I7QUFDQVAsb0JBQWMsQ0FBQ3ZRLE1BQU0sS0FBSyxPQUFYLEdBQXFCLE9BQXJCLEdBQStCLFNBQWhDLENBQWQ7QUFDSCxLQUhEO0FBSUgsR0FORCxFQU1FLEVBTkYsRUE5RDBDLENBd0UxQzs7QUFDQSxNQUFNMFIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFLO0FBQzVCalMsZ0JBQVksQ0FBQyxTQUFELENBQVo7QUFDQVAsWUFBUSxDQUFDMFMsSUFBVCxHQUFnQjFTLFFBQVEsQ0FBQ3dELE1BQXpCO0FBQ0gsR0FIRDs7QUFJQSxNQUFNaVAsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2QsT0FBRCxFQUFVQyxTQUFWLEVBQXFCZSxVQUFyQixFQUFvQztBQUNyRCxRQUFJLENBQUNMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWixPQUFkLEVBQXVCaUIsS0FBdkIsQ0FBNkIsVUFBQS9HLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNqQixNQUFGLElBQVksRUFBaEI7QUFBQSxLQUE5QixDQUFMLEVBQXdEO0FBQUU7QUFDdEQ0RyxjQUFRLENBQUM7QUFBQzNRLFlBQUksRUFBQztBQUFOLE9BQUQsQ0FBUjtBQUNBLGFBQU8sT0FBUDtBQUNIOztBQUNELFFBQUl5UixNQUFNLENBQUNDLE1BQVAsQ0FBY1osT0FBZCxFQUF1QmtCLE1BQXZCLENBQThCLFVBQUFoSCxDQUFDO0FBQUEsYUFBRUEsQ0FBRjtBQUFBLEtBQS9CLEVBQW9DakIsTUFBcEMsS0FBK0MsQ0FBbkQsRUFBc0Q7QUFBTTtBQUN4RDRHLGNBQVEsQ0FBQztBQUFDM1EsWUFBSSxFQUFDO0FBQU4sT0FBRCxDQUFSO0FBQ0EsYUFBTyxPQUFQO0FBQ0g7O0FBQ0RpUywyRUFBVyxDQUFDbkIsT0FBRCxFQUFTQyxTQUFULENBQVgsQ0FDQ3BQLElBREQsQ0FDTSxVQUFBMkksUUFBUSxFQUFJO0FBQ2QsVUFBSSxDQUFDd0gsVUFBTCxFQUFpQmpCLGNBQWMsQ0FBQztBQUFDN1EsWUFBSSxFQUFHLElBQVI7QUFBY1EsZUFBTyxFQUFHOEosUUFBUSxDQUFDcks7QUFBakMsT0FBRCxDQUFkO0FBQ3BCLEtBSEQsV0FJTyxVQUFBb0MsR0FBRyxFQUFJO0FBQ1Z1SCxnQkFBVSxDQUFDK0gsWUFBWSxFQUFiLEVBQWlCLElBQWpCLENBQVY7QUFDQWQsb0JBQWMsQ0FBQztBQUFDN1EsWUFBSSxFQUFDLElBQU47QUFBV2lGLGNBQU0sRUFBQyxPQUFsQjtBQUEyQnpFLGVBQU8sRUFBQztBQUFuQyxPQUFELENBQWQ7QUFDSCxLQVBEO0FBUUgsR0FqQkQ7O0FBa0JBLE1BQU0wUixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNuTCxDQUFELEVBQUc0RCxLQUFILEVBQWE7QUFDbkN1RyxXQUFPLGlDQUFLdFAsSUFBTDtBQUFXa1AsYUFBTyxrQ0FDZGxQLElBQUksQ0FBQ2tQLE9BRFMsMkNBRVBuRyxLQUZPLEdBRUk1RCxDQUFDLENBQUNDLE1BQUYsQ0FBUzhDLEtBRmI7QUFBbEIsT0FBUDtBQUtILEdBTkQ7O0FBT0EsTUFBTXFJLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BMLENBQUQsRUFBRzRELEtBQUgsRUFBYTtBQUNqQ3VHLFdBQU8saUNBQUt0UCxJQUFMO0FBQVdtUCxlQUFTLEVBQUduUCxJQUFJLENBQUNtUCxTQUFMLENBQWV0RyxHQUFmLENBQW1CLFVBQUNPLENBQUQsRUFBR3NHLENBQUg7QUFBQSxlQUFRQSxDQUFDLEtBQUczRyxLQUFKLEdBQVc1RCxDQUFDLENBQUNDLE1BQUYsQ0FBU29MLE9BQXBCLEdBQThCcEgsQ0FBdEM7QUFBQSxPQUFuQjtBQUF2QixPQUFQO0FBQ0gsR0FGRCxDQXRHMEMsQ0F5RzFDOzs7QUFDQSxzQkFDSSxvQkFBQyxLQUFELENBQU8sUUFBUCxxQkFDQSxvQkFBQywyREFBRDtBQUFTLGFBQVMsRUFBRWxMO0FBQXBCLElBREEsZUFFQSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRXFFLE9BQU8sQ0FBQ29EO0FBQXhCLGtCQUNBLG9CQUFDLHNEQUFEO0FBQU0sVUFBSXlFLElBQVY7QUFBZ0IsV0FBTyxFQUFFO0FBQUNZLFdBQUssRUFBRztBQUFUO0FBQXpCLGtCQUNJLG9CQUFDLHVEQUFEO0FBQU8sYUFBUyxFQUFFekksT0FBTyxDQUFDVixLQUExQjtBQUFpQyxhQUFTLEVBQUU7QUFBNUMsa0JBQ0k7QUFBTSxhQUFTLEVBQUVVLE9BQU8sQ0FBQ2tNLFFBQXpCO0FBQW1DLGdCQUFZLEVBQUM7QUFBaEQsa0JBQ0ksb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxvQkFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUMsYUFBL0I7QUFBNkMsU0FBSyxFQUFFO0FBQUN2TSxnQkFBVSxFQUFDO0FBQVo7QUFBcEQsd0JBREosZUFJSSxvQkFBQyxxREFBRDtBQUFLLFNBQUssRUFBRTJOLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjOVAsSUFBSSxDQUFDa1AsT0FBbkIsRUFBNEJpQixLQUE1QixDQUFrQyxVQUFBL0csQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ2pCLE1BQUYsSUFBWSxFQUFoQjtBQUFBLEtBQW5DLElBQXlELE1BQXpELEdBQWtFO0FBQTlFLGtCQUNBLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLFdBQXBCO0FBQWdDLFNBQUssRUFBQztBQUF0Qyw4Q0FEQSxDQUpKLENBREosRUFZUjBILE1BQU0sQ0FBQ0MsTUFBUCxDQUFjOVAsSUFBSSxDQUFDa1AsT0FBbkIsRUFBNEJyRyxHQUE1QixDQUFnQyxVQUFDNEgsTUFBRCxFQUFRMUgsS0FBUixFQUFnQjtBQUM1Qyx3QkFDSTtBQUFLLFNBQUcsRUFBRUE7QUFBVixvQkFDQSxvQkFBQywyREFBRDtBQUNBLGNBQVEsRUFBRUEsS0FBSyxLQUFHLENBQVIsR0FBVyxJQUFYLEdBQWdCLEtBRDFCO0FBRUEsUUFBRSxZQUFLQSxLQUFMLENBRkY7QUFHQSxTQUFHLEVBQUVBLEtBSEw7QUFJQSxXQUFLLG1CQUFZQSxLQUFLLEdBQUMsQ0FBbEIsQ0FKTDtBQUtBLFdBQUssRUFBRS9JLElBQUksQ0FBQ2tQLE9BQUwsaUJBQXNCbkcsS0FBdEIsRUFMUDtBQU1BLFlBQU0sRUFBQyxRQU5QO0FBT0EsY0FBUSxFQUFFLGtCQUFDNUQsQ0FBRDtBQUFBLGVBQUttTCxpQkFBaUIsQ0FBQ25MLENBQUQsRUFBRzRELEtBQUgsQ0FBdEI7QUFBQSxPQVBWO0FBUUEsV0FBSyxFQUFFL0ksSUFBSSxDQUFDa1AsT0FBTCxpQkFBc0JuRyxLQUF0QixHQUErQlosTUFBL0IsR0FBd0MsRUFBeEMsR0FBNkMsSUFBN0MsR0FBb0Q7QUFSM0QsTUFEQSxlQVdBLG9CQUFDLHlEQUFEO0FBQVMsV0FBSyxFQUFDLHFLQUFmO0FBS0MsZUFBUyxFQUFDLE9BTFg7QUFLbUIsZ0JBQVUsRUFBRSxHQUwvQjtBQUtvQyxnQkFBVSxFQUFFO0FBTGhELG9CQU1JLG9CQUFDLDBEQUFEO0FBQ0EsYUFBTyxFQUFFbkksSUFBSSxDQUFDbVAsU0FBTCxDQUFlcEcsS0FBZixDQURUO0FBRUEsY0FBUSxFQUFFLGtCQUFDNUQsQ0FBRDtBQUFBLGVBQUtvTCxlQUFlLENBQUNwTCxDQUFELEVBQUc0RCxLQUFILENBQXBCO0FBQUE7QUFGVixNQU5KLENBWEEsRUF1QktBLEtBQUssS0FBRyxDQUFSLGdCQUNELG9CQUFDLHFEQUFEO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsZUFBUyxFQUFFeEcsT0FBTyxDQUFDcUo7QUFBekMscUJBREMsR0FFQyxJQXpCTixDQURKO0FBNEJFLEdBN0JOLENBWlEsQ0FESixDQURKLENBREEsZUFrREEsb0JBQUMseURBQUQ7QUFBUyxTQUFLLEVBQUMsUUFBZjtBQUF3QixrQkFBVyxRQUFuQztBQUE0QyxhQUFTLEVBQUMsS0FBdEQ7QUFBNEQsY0FBVSxFQUFFLEdBQXhFO0FBQTZFLGNBQVUsRUFBRTtBQUF6RixrQkFDSSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRXJKLE9BQU8sQ0FBQ2lDLEtBQXhCO0FBQStCLGVBQVcsRUFBRSxxQkFBQ1csQ0FBRDtBQUFBLGFBQUtBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLE1BQWYsR0FBd0IsU0FBN0I7QUFBQSxLQUE1QztBQUNDLFdBQU8sRUFBRTtBQUFBLGFBQUkwSyxZQUFZLENBQUNoUSxJQUFJLENBQUNrUCxPQUFOLEVBQWdCbFAsSUFBSSxDQUFDbVAsU0FBckIsQ0FBaEI7QUFBQTtBQURWLElBREosQ0FsREEsZUFzREEsb0JBQUMsNERBQUQ7QUFBZ0IsUUFBSSxFQUFFTCxLQUFLLENBQUMxUSxJQUE1QjtBQUFrQyxXQUFPLEVBQUU7QUFBQSxhQUFJMlEsUUFBUSxDQUFDO0FBQUMzUSxZQUFJLEVBQUM7QUFBTixPQUFELENBQVo7QUFBQSxLQUEzQztBQUNBLFdBQU8sNENBRFA7QUFDcUQsVUFBTSxFQUFDO0FBRDVELElBdERBLGVBd0RBLG9CQUFDLDREQUFEO0FBQWdCLFFBQUksRUFBRTRRLFdBQVcsQ0FBQzVRLElBQWxDO0FBQXdDLFdBQU8sRUFBRTtBQUFBLGFBQUk2USxjQUFjLENBQUM7QUFBQzdRLFlBQUksRUFBQztBQUFOLE9BQUQsQ0FBbEI7QUFBQSxLQUFqRDtBQUNBLFdBQU8sRUFBRTRRLFdBQVcsQ0FBQ3BRLE9BRHJCO0FBQzhCLFVBQU0sRUFBRW9RLFdBQVcsQ0FBQzNMLE1BQVosS0FBcUIsT0FBckIsR0FBOEIsT0FBOUIsR0FBd0M7QUFEOUUsSUF4REEsQ0FGQSxDQURKO0FBZ0VIO0FBRURzTCxPQUFPLENBQUNoTSxTQUFSLEdBQW9CO0FBQ2hCekUsV0FBUyxFQUFHMEUsaURBQVMsQ0FBQ007QUFETixDQUFwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU3dOLGVBQVQsT0FBcUQ7QUFBQSxNQUEzQnhTLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCWSxhQUFnQixRQUFoQkEsYUFBZ0I7QUFFbEUsTUFBTThQLGNBQWMsR0FBRzlSLEtBQUssQ0FBQytSLFVBQU4sQ0FBaUI1UixxREFBakIsQ0FBdkI7O0FBRmtFLG9CQUduQlUsK0RBQVUsQ0FBRSxDQUFDLFNBQUQsQ0FBRixDQUhTO0FBQUE7QUFBQSxNQUcxREMsT0FIMEQ7QUFBQSxNQUdoREMsU0FIZ0Q7QUFBQSxNQUdwQ0MsWUFIb0Msb0JBSWxFOzs7QUFKa0Usd0JBS3hDaEIsS0FBSyxDQUFDaUIsUUFBTixDQUFlO0FBQUNLLFFBQUksRUFBRztBQUFSLEdBQWYsQ0FMd0M7QUFBQTtBQUFBLE1BSzNEMFEsS0FMMkQ7QUFBQSxNQUtwREMsUUFMb0Q7O0FBQUEseUJBTTdCalMsS0FBSyxDQUFDaUIsUUFBTixDQUFlO0FBQUNLLFFBQUksRUFBQztBQUFOLEdBQWYsQ0FONkI7QUFBQTtBQUFBLE1BTTNEdVMsVUFOMkQ7QUFBQSxNQU05Q0MsYUFOOEM7O0FBQUEseUJBT3RDOVQsS0FBSyxDQUFDaUIsUUFBTixDQUFlO0FBQUNLLFFBQUksRUFBRztBQUFSLEdBQWYsQ0FQc0M7QUFBQTtBQUFBLE1BTzNEeVMsTUFQMkQ7QUFBQSxNQU9uREMsU0FQbUQ7O0FBQUEseUJBUXhDaFUsS0FBSyxDQUFDaUIsUUFBTixDQUFlO0FBQUc7QUFDMUNzUSxlQUFXLEVBQUcsSUFEeUI7QUFFdkNFLFlBQVEsRUFBRyxLQUY0QjtBQUd2Q1gsV0FBTyxFQUFFLEVBSDhCO0FBSXZDNU4sUUFBSSxFQUFFO0FBSmlDLEdBQWYsQ0FSd0M7QUFBQTtBQUFBLE1BUTNEbUgsS0FSMkQ7QUFBQSxNQVFwREMsUUFSb0Q7O0FBY2xFLE1BQU0ySixRQUFRLEdBQUdqVSxLQUFLLENBQUN1QyxNQUFOLEVBQWpCLENBZGtFLENBZ0JsRTs7QUFDQXdFLDhFQUFnQixDQUFDLFlBQUk7QUFDakIyTCxrRkFBa0IsR0FBR3pQLElBQXJCLENBQTBCLFVBQUEySSxRQUFRLEVBQUk7QUFDcENqSixhQUFPLENBQUNDLEdBQVIsb0JBQXdCZ0osUUFBUSxDQUFDckYsTUFBakMsdUJBQW9EcEQsSUFBSSxDQUFDQyxTQUFMLENBQWV3SSxRQUFRLENBQUMxSSxJQUF4QixDQUFwRCxHQURvQyxDQUVsQzs7QUFDQSxVQUFJMEksUUFBUSxDQUFDckYsTUFBVCxLQUFrQixHQUFsQixJQUF5QnFGLFFBQVEsQ0FBQzFJLElBQVQsQ0FBY2tQLE9BQTNDLEVBQW9EO0FBQ2xEbEgsa0JBQVUsQ0FBQyxZQUFJO0FBQUMrRyxrQkFBUSxDQUFDO0FBQUMzUSxnQkFBSSxFQUFDO0FBQU4sV0FBRCxDQUFSO0FBQXNCLFNBQTVCLEVBQTZCLEdBQTdCLENBQVY7QUFDQWdKLGdCQUFRLENBQUM7QUFDUHdHLGlCQUFPLEVBQUdvRCwrREFBUyxDQUFDdEksUUFBUSxDQUFDMUksSUFBVCxDQUFja1AsT0FBZixFQUF5QnhHLFFBQVEsQ0FBQzFJLElBQVQsQ0FBY21QLFNBQXZDLENBRFo7QUFFUG5QLGNBQUksRUFBRzBJLFFBQVEsQ0FBQzFJLElBQVQsQ0FBY0EsSUFGZDtBQUdQcU8scUJBQVcsRUFBRyxLQUhQO0FBSVBFLGtCQUFRLEVBQUc7QUFKSixTQUFELENBQVI7QUFLRDtBQUNKLEtBWEQsV0FXUyxVQUFBOU4sR0FBRyxFQUFJO0FBQ2RoQixhQUFPLENBQUNDLEdBQVIsQ0FBWWUsR0FBWjtBQUNBM0IsbUJBQWEsQ0FBQztBQUFDVixZQUFJLEVBQUMsSUFBTjtBQUFZUSxlQUFPLEVBQUM7QUFBcEIsT0FBRCxDQUFiO0FBQ0QsS0FkRDtBQWVILEdBaEJlLENBQWhCLENBakJrRSxDQW1DbEU7O0FBQ0EsTUFBTXFTLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFDSCxhQUFTLENBQUM7QUFBQzFTLFVBQUksRUFBRztBQUFSLEtBQUQsQ0FBVDtBQUEyQixHQUE1RDs7QUFDQSxNQUFNOFMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2hCLFVBQUQsRUFBZ0I7QUFDakM7QUFDQSxRQUFJLENBQUN0UyxPQUFPLENBQUNJLE9BQWIsRUFBc0I7QUFDcEJjLG1CQUFhLENBQUM7QUFBQ1YsWUFBSSxFQUFDLElBQU47QUFBWVEsZUFBTyxFQUFDO0FBQXBCLE9BQUQsQ0FBYjtBQUNBYSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsVUFBTU0sSUFBSSxHQUFHLEVBQWI7QUFDQSxVQUFNbVAsU0FBUyxHQUFHLEVBQWxCO0FBQ0EsVUFBTUQsT0FBTyxHQUFHNkIsUUFBUSxDQUFDcFIsT0FBVCxDQUFpQndSLFdBQWpCLENBQTZCdkQsT0FBN0IsQ0FBcUN3RCxNQUFyQyxDQUE0QyxVQUFDQyxHQUFELEVBQUtqSSxDQUFMLEVBQU9zRyxDQUFQLEVBQVc7QUFDckUyQixXQUFHLGlCQUFVM0IsQ0FBVixFQUFILEdBQW9CdEcsQ0FBQyxDQUFDeUUsS0FBdEI7QUFDQXNCLGlCQUFTLENBQUNRLElBQVYsQ0FBZXZHLENBQUMsQ0FBQzJFLFFBQWpCO0FBQ0EsZUFBT3NELEdBQVA7QUFDRCxPQUplLEVBSWQsRUFKYyxDQUFoQjtBQUtBTixjQUFRLENBQUNwUixPQUFULENBQWlCd1IsV0FBakIsQ0FBNkJuUixJQUE3QixDQUFrQzBLLE9BQWxDLENBQTBDLFVBQUN0QixDQUFELEVBQUdzRyxDQUFILEVBQU87QUFBQSxZQUN4QzRCLFNBRHdDLEdBQ2xCbEksQ0FEa0IsQ0FDeENrSSxTQUR3QztBQUFBLFlBQzFCQyxJQUQwQiw0QkFDbEJuSSxDQURrQjs7QUFFL0NwSixZQUFJLENBQUMyUCxJQUFMLENBQVU0QixJQUFWO0FBQ0QsT0FIRDtBQUlBQywwRUFBUSxDQUFDdEMsT0FBRCxFQUFVQyxTQUFWLEVBQXFCblAsSUFBckIsQ0FBUixDQUFtQ0QsSUFBbkMsQ0FBd0MsVUFBQTJJLFFBQVEsRUFBRTtBQUNoRCxZQUFHQSxRQUFRLENBQUNySyxNQUFULEtBQW9CLFNBQXZCLEVBQWtDO0FBQ2hDLGNBQUcsQ0FBQzZSLFVBQUosRUFBZ0JVLGFBQWEsQ0FBQztBQUFDeFMsZ0JBQUksRUFBQztBQUFOLFdBQUQsQ0FBYjtBQUNqQjtBQUNGLE9BSkQsV0FJUyxVQUFBcUMsR0FBRyxFQUFJO0FBQ2QsWUFBR0EsR0FBSCxFQUFRO0FBQ05oQixpQkFBTyxDQUFDQyxHQUFSLCtDQUFtRGUsR0FBbkQ7QUFDQTNCLHVCQUFhLENBQUM7QUFBQ1YsZ0JBQUksRUFBQyxJQUFOO0FBQVlRLG1CQUFPLEVBQUM7QUFBcEIsV0FBRCxDQUFiO0FBQ0Q7QUFDRixPQVREO0FBVUQ7QUFDSixHQTVCRCxDQXJDa0UsQ0FtRWxFOzs7QUFDQTlCLE9BQUssQ0FBQytDLFNBQU4sQ0FBZ0IsWUFBTTtBQUFJO0FBQ3hCLFFBQU00UixTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLGFBQU1YLFNBQVMsQ0FBQztBQUFDMVMsWUFBSSxFQUFHLENBQUN5UyxNQUFNLENBQUN6UztBQUFoQixPQUFELENBQWY7QUFBQSxLQUFsQjs7QUFDQSxRQUFNc1QsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3ZNLENBQUQsRUFBTztBQUFJO0FBQzNCLFVBQUl3TSxTQUFTLENBQUNDLFFBQVYsQ0FBbUIzRCxLQUFuQixDQUF5QixLQUF6QixJQUFrQzlJLENBQUMsQ0FBQzBNLE9BQXBDLEdBQThDMU0sQ0FBQyxDQUFDMk0sT0FBRixJQUFhM00sQ0FBQyxDQUFDa0QsT0FBRixLQUFjLEVBQTdFLEVBQWlGO0FBQy9FbEQsU0FBQyxDQUFDNE0sY0FBRjtBQUNBYixvQkFBWTtBQUNiO0FBQ0YsS0FMRDs7QUFNQTVULFVBQU0sQ0FBQ3FMLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DK0ksU0FBbkM7QUFDQXBVLFVBQU0sQ0FBQ3FMLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DOEksU0FBcEM7QUFDRixXQUFPLFlBQU07QUFDVG5VLFlBQU0sQ0FBQ3NMLG1CQUFQLENBQTJCLFVBQTNCLEVBQXVDNkksU0FBdkM7QUFDQW5VLFlBQU0sQ0FBQ3NMLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDOEksU0FBdEMsRUFGUyxDQUdUOztBQUNBWCxjQUFRLENBQUNwUixPQUFULEdBQW1Cb1IsUUFBUSxDQUFDcFIsT0FBVCxDQUFpQndSLFdBQWpCLEdBQStCRCxZQUFZLENBQUMsSUFBRCxDQUEzQyxHQUFvRCxJQUF2RSxHQUE4RSxJQUE5RTtBQUNBSCxjQUFRLENBQUNwUixPQUFULEdBQW1Cb1IsUUFBUSxDQUFDcFIsT0FBVCxDQUFpQndSLFdBQWpCLEdBQStCdkMsY0FBYyxDQUFDLFNBQUQsQ0FBN0MsR0FBMkQsSUFBOUUsR0FBcUYsSUFBckY7QUFDSCxLQU5EO0FBT0QsR0FqQkMsRUFpQkMsRUFqQkQsRUFwRWtFLENBdUZwRTs7QUFDRSxNQUFNb0QsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSx3QkFBTyxvQkFBQyxzREFBRDtBQUFLLFdBQUssRUFBRTtBQUFDcFEsY0FBTSxFQUFDO0FBQVI7QUFBWixNQUFQO0FBQUEsR0FBZixDQXhGa0UsQ0F3Rko7OztBQUM5RCxzQkFDRSxvQkFBQyxLQUFELENBQU8sUUFBUCxxQkFDQSxvQkFBQyw0REFBRDtBQUFTLGFBQVMsRUFBRTFEO0FBQXBCLElBREEsRUFHQWlKLEtBQUssQ0FBQ2tILFdBQU4sZ0JBQ0csb0JBQUMsb0RBQUQ7QUFBYSxTQUFLLEVBQUVsSCxLQUFwQjtBQUEyQixZQUFRLEVBQUVDO0FBQXJDLElBREgsZ0JBR0Msb0JBQUMsc0RBQUQscUJBQ0csb0JBQUMscURBQUQ7QUFBYyxRQUFJLEVBQUV5SixNQUFNLENBQUN6UyxJQUEzQjtBQUFpQyxXQUFPLEVBQUU2UztBQUExQyxJQURILGVBRUQsb0JBQUMsTUFBRCxPQUZDLGVBR0Qsb0JBQUMscURBQUQ7QUFDRSxZQUFRLEVBQUVGLFFBRFo7QUFFRSxTQUFLLGVBQ0wsb0JBQUMsbURBQUQ7QUFBWSxtQkFBYSxFQUFFSCxhQUEzQjtBQUNBLG1CQUFhLEVBQUU5UixhQURmO0FBRUEsYUFBTyxFQUFFbEIsT0FBTyxDQUFDSSxPQUZqQixDQUdBO0FBSEE7QUFJQSxpQkFBVyxFQUFFK1MsUUFBUSxDQUFDcFIsT0FBVCxHQUFtQm9SLFFBQVEsQ0FBQ3BSLE9BQVQsQ0FBaUJ3UixXQUFwQyxHQUFrRDtBQUovRCxNQUhGO0FBU0UsV0FBTyxFQUFFaEssS0FBSyxDQUFDeUcsT0FUakI7QUFVRSxRQUFJLEVBQUV6RyxLQUFLLENBQUNuSCxJQVZkO0FBV0UsZ0JBQVksRUFBRWlTLDBEQVhoQixDQVc4QjtBQVg5QjtBQVlFLFdBQU8sRUFBRUMscURBWlgsQ0FZb0I7QUFacEI7QUFhRSxXQUFPLEVBQUUsQ0FBQztBQUNSO0FBQ0lDLGFBQU8sRUFBRyw0QkFEZDtBQUVJQyxVQUFJLEVBQUcsUUFGWDtBQUdJQyxhQUFPLEVBQUcsaUJBQUNsTixDQUFELEVBQUttTixTQUFMLEVBQW1CO0FBQUc7QUFDNUIsWUFBTXRTLElBQUksc0JBQU9tSCxLQUFLLENBQUNuSCxJQUFiLENBQVY7O0FBQ0FzUyxpQkFBUyxDQUFDNUgsT0FBVixDQUFrQixVQUFBdEIsQ0FBQyxFQUFFO0FBQ2pCcEosY0FBSSxDQUFDdVMsTUFBTCxDQUFZdlMsSUFBSSxDQUFDd1MsT0FBTCxDQUFhcEosQ0FBYixDQUFaLEVBQTZCLENBQTdCO0FBQ0gsU0FGRDtBQUdBaEMsZ0JBQVEsQ0FBQyxVQUFDcUwsUUFBRCxFQUFZO0FBQ2pCLGlEQUFXQSxRQUFYO0FBQXNCelMsZ0JBQUksRUFBSkE7QUFBdEI7QUFDSCxTQUZPLENBQVI7QUFHSDtBQVhMLEtBRE8sQ0FiWDtBQTRCRSxZQUFRLEVBQUU7QUFDUjBTLGNBQVEsRUFBRSxrQkFBQ0MsT0FBRDtBQUFBLGVBQWM7QUFDdEIsY0FBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUN2QjdLLHNCQUFVLENBQUMsWUFBTTtBQUNmWixzQkFBUSxDQUFDLFVBQUMwTCxTQUFELEVBQWU7QUFDdEIsb0JBQU05UyxJQUFJLHNCQUFPOFMsU0FBUyxDQUFDOVMsSUFBakIsQ0FBVjs7QUFDQUEsb0JBQUksQ0FBQzJQLElBQUwsQ0FBVWdELE9BQVY7QUFDQSx1REFBWUcsU0FBWjtBQUF1QjlTLHNCQUFJLEVBQUpBO0FBQXZCO0FBQ0QsZUFKTyxDQUFSO0FBS0E2UyxxQkFBTztBQUNSLGFBUFMsRUFPUCxHQVBPLENBQVY7QUFRRCxXQVREO0FBRFE7QUFBQSxPQURGO0FBWVJFLGlCQUFXLEVBQUUscUJBQUNKLE9BQUQsRUFBVUssT0FBVjtBQUFBLGVBQXVCO0FBQ2xDLGNBQUlKLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDdkI3SyxzQkFBVSxDQUFDLFlBQU07QUFDZixrQkFBSWdMLE9BQUosRUFBYTtBQUNYNUwsd0JBQVEsQ0FBQyxVQUFDMEwsU0FBRCxFQUFlO0FBQ3RCLHNCQUFNOVMsSUFBSSxzQkFBTzhTLFNBQVMsQ0FBQzlTLElBQWpCLENBQVY7O0FBQ0FBLHNCQUFJLENBQUNBLElBQUksQ0FBQ3dTLE9BQUwsQ0FBYVEsT0FBYixDQUFELENBQUosR0FBOEJMLE9BQTlCO0FBQ0EseURBQVlHLFNBQVo7QUFBdUI5Uyx3QkFBSSxFQUFKQTtBQUF2QjtBQUNELGlCQUpPLENBQVI7QUFLRDs7QUFDRDZTLHFCQUFPO0FBQ1IsYUFUUyxFQVNQLEdBVE8sQ0FBVjtBQVVELFdBWEQ7QUFEVztBQUFBO0FBWkw7QUE1QlosSUFIQyxlQTBERCxvQkFBQyxNQUFELE9BMURDLGVBMkRELG9CQUFDLDREQUFEO0FBQWdCLFFBQUksRUFBRS9ELEtBQUssQ0FBQzFRLElBQTVCO0FBQWtDLFdBQU8sRUFBRTtBQUFBLGFBQUkyUSxRQUFRLENBQUM7QUFBQzNRLFlBQUksRUFBQztBQUFOLE9BQUQsQ0FBWjtBQUFBLEtBQTNDO0FBQ0EsV0FBTyxFQUFDLDRDQURSO0FBQ3FELFVBQU0sRUFBQztBQUQ1RCxJQTNEQyxlQTZERCxvQkFBQyw0REFBRDtBQUFnQixRQUFJLEVBQUV1UyxVQUFVLENBQUN2UyxJQUFqQztBQUF1QyxXQUFPLEVBQUU7QUFBQSxhQUFJd1MsYUFBYSxDQUFDO0FBQUN4UyxZQUFJLEVBQUM7QUFBTixPQUFELENBQWpCO0FBQUEsS0FBaEQ7QUFDQSxXQUFPLEVBQUMsU0FEUjtBQUNrQixVQUFNLEVBQUM7QUFEekIsSUE3REMsQ0FORCxDQURGO0FBMEVEO0FBRURzUyxlQUFlLENBQUMvTixTQUFoQixHQUE0QjtBQUMxQnpFLFdBQVMsRUFBRzBFLGtEQUFTLENBQUNNO0FBREksQ0FBNUIsQzs7Ozs7Ozs7Ozs7OztBQzNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBLElBQU0vQixRQUFRLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSyxFQUFJO0FBQ2pDK1EsTUFBSSxFQUFHO0FBQ0h6USxTQUFLLEVBQUc7QUFDWDtBQUNKLENBSjBCLENBQTNCO0FBS2UsU0FBU3NSLFlBQVQsQ0FBdUJqUyxLQUF2QixFQUE4QjtBQUN6QyxNQUFNdUIsT0FBTyxHQUFHcEIsUUFBUSxFQUF4QjtBQUR5QyxNQUVsQy9DLElBRmtDLEdBRWpCNEMsS0FGaUIsQ0FFbEM1QyxJQUZrQztBQUFBLE1BRTVCZ0YsT0FGNEIsR0FFakJwQyxLQUZpQixDQUU1Qm9DLE9BRjRCO0FBR3pDLE1BQU04UCxLQUFLLEdBQUcsQ0FDVjtBQUFDZCxRQUFJLEVBQUcsU0FBUjtBQUFvQnhHLGVBQVcsRUFBRztBQUFsQyxHQURVLEVBRVY7QUFBQ3dHLFFBQUksRUFBRyxRQUFSO0FBQW1CeEcsZUFBVyxFQUFHO0FBQWpDLEdBRlUsRUFHVjtBQUFDd0csUUFBSSxFQUFHLFFBQVI7QUFBbUJ4RyxlQUFXLEVBQUc7QUFBakMsR0FIVSxFQUlWO0FBQUN3RyxRQUFJLEVBQUcsVUFBUjtBQUFxQnhHLGVBQVcsRUFBRztBQUFuQyxHQUpVLEVBS1Y7QUFBQ3dHLFFBQUksRUFBRyxXQUFSO0FBQXNCeEcsZUFBVyxFQUFHO0FBQXBDLEdBTFUsRUFNVjtBQUFDd0csUUFBSSxFQUFHLG9CQUFSO0FBQStCeEcsZUFBVyxFQUFHO0FBQTdDLEdBTlUsRUFPVjtBQUFDd0csUUFBSSxFQUFHLFdBQVI7QUFBc0J4RyxlQUFXLEVBQUc7QUFBcEMsR0FQVSxFQVFWO0FBQUN3RyxRQUFJLEVBQUcsWUFBUjtBQUF1QnhHLGVBQVcsRUFBRztBQUFyQyxHQVJVLEVBU1Y7QUFBQ3dHLFFBQUksRUFBRyxRQUFSO0FBQW1CeEcsZUFBVyxFQUFHO0FBQWpDLEdBVFUsRUFVVjtBQUFDd0csUUFBSSxFQUFHLG9CQUFSO0FBQStCeEcsZUFBVyxFQUFHO0FBQTdDLEdBVlUsRUFXVjtBQUFDd0csUUFBSSxFQUFHLE1BQVI7QUFBaUJ4RyxlQUFXLEVBQUc7QUFBL0IsR0FYVSxFQVlWO0FBQUN3RyxRQUFJLEVBQUcsUUFBUjtBQUFtQnhHLGVBQVcsRUFBRztBQUFqQyxHQVpVLENBQWQ7QUFlQSxzQkFDQSxvQkFBQyx3REFBRDtBQUFRLFdBQU8sRUFBRXhJLE9BQWpCO0FBQTBCLFFBQUksRUFBRWhGO0FBQWhDLGtCQUNJLG9CQUFDLDZEQUFELHlCQURKLGVBRUksb0JBQUMsc0RBQUQsUUFFUThVLEtBQUssQ0FBQ3JLLEdBQU4sQ0FBVSxVQUFDdUosSUFBRCxFQUFPckosS0FBUCxFQUFpQjtBQUN2Qix3QkFDQSxvQkFBQywwREFBRDtBQUFVLFNBQUcsWUFBS3FKLElBQUwsZ0JBQWVySixLQUFmO0FBQWIsb0JBQ1Esb0JBQUMscURBQUQ7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixlQUFTLDJCQUFvQnhHLE9BQU8sQ0FBQzZQLElBQTVCLENBQS9CO0FBQW1FLFdBQUssRUFBRTtBQUFDelEsYUFBSyxFQUFDO0FBQVA7QUFBMUUsT0FDS3lRLElBQUksQ0FBQ0EsSUFEVixDQURSLGVBSUksb0JBQUMsOERBQUQ7QUFBYyxhQUFPLEVBQUVBLElBQUksQ0FBQ3hHO0FBQTVCLE1BSkosQ0FEQTtBQVFILEdBVEQsQ0FGUixDQUZKLENBREE7QUFtQkg7QUFDRHFILFlBQVksQ0FBQ3RRLFNBQWIsR0FBeUI7QUFDckJ2RSxNQUFJLEVBQUd3RSxpREFBUyxDQUFDTSxJQUFWLENBQWVNLFVBREQ7QUFFckJKLFNBQU8sRUFBR1IsaURBQVMsQ0FBQ2EsSUFBVixDQUFlRDtBQUZKLENBQXpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUVlLFNBQVMyUCxVQUFULE9BQTRFO0FBQUEsTUFBdER2QyxhQUFzRCxRQUF0REEsYUFBc0Q7QUFBQSxNQUF0Q08sV0FBc0MsUUFBdENBLFdBQXNDO0FBQUEsTUFBekJuVCxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQmMsYUFBZ0IsUUFBaEJBLGFBQWdCOztBQUN2RixXQUFTdVQsUUFBVCxHQUFvQjtBQUNkLFFBQUksQ0FBQ3JVLE9BQUwsRUFBYztBQUNaYyxtQkFBYSxDQUFDO0FBQUNWLFlBQUksRUFBQyxJQUFOO0FBQWFRLGVBQU8sRUFBQztBQUFyQixPQUFELENBQWI7QUFDQWEsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBO0FBQ0QsS0FMYSxDQU1kOzs7QUFDQSxRQUFNTSxJQUFJLEdBQUcsRUFBYjtBQUNBLFFBQU1tUCxTQUFTLEdBQUcsRUFBbEI7QUFDQSxRQUFNRCxPQUFPLEdBQUdpQyxXQUFXLENBQUN2RCxPQUFaLENBQW9Cd0QsTUFBcEIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFLakksQ0FBTCxFQUFPc0csQ0FBUCxFQUFXO0FBQ3BEMkIsU0FBRyxpQkFBVTNCLENBQVYsRUFBSCxHQUFvQnRHLENBQUMsQ0FBQ3lFLEtBQXRCO0FBQ0FzQixlQUFTLENBQUNRLElBQVYsQ0FBZXZHLENBQUMsQ0FBQzJFLFFBQWpCO0FBQ0EsYUFBT3NELEdBQVA7QUFDRCxLQUplLEVBSWQsRUFKYyxDQUFoQjtBQUtBRixlQUFXLENBQUNuUixJQUFaLENBQWlCMEssT0FBakIsQ0FBeUIsVUFBQ3RCLENBQUQsRUFBR3NHLENBQUgsRUFBTztBQUFBLFVBQ3ZCNEIsU0FEdUIsR0FDRGxJLENBREMsQ0FDdkJrSSxTQUR1QjtBQUFBLFVBQ1RDLElBRFMsNEJBQ0RuSSxDQURDOztBQUU5QnBKLFVBQUksQ0FBQzJQLElBQUwsQ0FBVTRCLElBQVY7QUFDRCxLQUhEO0FBSUE5UixXQUFPLENBQUNDLEdBQVIsaUNBQ0VPLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmLENBREYseUJBRUVtUCxTQUZGLHlCQUdFbFAsSUFBSSxDQUFDQyxTQUFMLENBQWVnUCxPQUFmLENBSEY7QUFLRnNDLHdFQUFRLENBQUN0QyxPQUFELEVBQVNDLFNBQVQsRUFBbUJuUCxJQUFuQixDQUFSLENBQWlDRCxJQUFqQyxDQUFzQyxVQUFBMUIsTUFBTSxFQUFFO0FBQzVDLFVBQUlBLE1BQU0sQ0FBQ0EsTUFBUCxLQUFrQixTQUF0QixFQUFpQztBQUMvQnVTLHFCQUFhLENBQUM7QUFBQ3hTLGNBQUksRUFBQztBQUFOLFNBQUQsQ0FBYjtBQUNELE9BRkQsTUFFTztBQUNMVSxxQkFBYSxDQUFDO0FBQUNWLGNBQUksRUFBQztBQUFOLFNBQUQsQ0FBYjtBQUNEO0FBQ0YsS0FORCxXQU1TLFVBQUF3QyxLQUFLLEVBQUk7QUFDaEI5QixtQkFBYSxDQUFDO0FBQUNWLFlBQUksRUFBQztBQUFOLE9BQUQsQ0FBYjtBQUNELEtBUkQ7QUFTSDs7QUFDRCxzQkFDQSxvQkFBQyx5REFBRDtBQUFTLFNBQUssRUFBQztBQUFmLGtCQUNJLG9CQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUM4RCxnQkFBVSxFQUFDO0FBQVosS0FBZjtBQUFzQyxXQUFPLEVBQUMsV0FBOUM7QUFBMEQsU0FBSyxFQUFDLFdBQWhFO0FBQ0EsV0FBTyxFQUFFO0FBQUEsYUFBSW1RLFFBQU8sRUFBWDtBQUFBO0FBRFQsWUFESixDQURBO0FBUUg7QUFFRGMsVUFBVSxDQUFDeFEsU0FBWCxHQUF1QjtBQUNyQmlPLGVBQWEsRUFBR2hPLGlEQUFTLENBQUNhLElBQVYsQ0FBZUQsVUFEVjtBQUVyQjJOLGFBQVcsRUFBR3ZPLGlEQUFTLENBQUNnQjtBQUZILENBQXZCLEM7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBRVEsSUFBTXNPLE9BQU8sR0FBRTtBQUNuQmtCLGNBQVksRUFBRSxJQURLO0FBRW5CckYsVUFBUSxFQUFDLElBRlU7QUFHbkJzRixXQUFTLEVBQUMsSUFIUztBQUluQkMsYUFBVyxFQUFDO0FBQ1JwUixjQUFVLEVBQUM7QUFESCxHQUpPO0FBT25CcVIsb0JBQWtCLEVBQUMsQ0FBQyxDQVBEO0FBT0s7QUFDeEJDLGVBQWEsRUFBRyxJQVJHO0FBU25CQyxrQkFBZ0IsRUFBRyxHQVRBO0FBU0s7QUFDeEJDLFVBQVEsRUFBRyxFQVZRO0FBVUs7QUFDeEJDLGlCQUFlLEVBQUcsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBWEMsQ0FXcUI7O0FBWHJCLENBQWY7QUFhQSxJQUFNMUIsWUFBWSxHQUFHO0FBQ3pCMkIsWUFBVSxFQUFHO0FBQUVDLHNCQUFrQixFQUFHO0FBQXZCLEdBRFk7QUFFekJDLFNBQU8sRUFBRTtBQUFDQyxpQkFBYSxFQUFFO0FBQWhCLEdBRmdCO0FBR3pCdEQsUUFBTSxFQUFFO0FBQUN1RCxXQUFPLEVBQUU7QUFBVixHQUhpQjtBQUl6QkMsTUFBSSxFQUFFO0FBQUNDLDBCQUFzQixlQUV6QixvQkFBQyxxREFBRDtBQUFLLFdBQUssRUFBRTtBQUFDM1MsZUFBTyxFQUFDLE1BQVQ7QUFBaUJDLHFCQUFhLEVBQUM7QUFBL0I7QUFBWixvQkFDQSxvQkFBQyx3REFBRDtBQUFRLGFBQU8sRUFBQyxNQUFoQjtBQUNBLFdBQUssRUFBQyxTQUROO0FBRUEsVUFBSSxFQUFDLE9BRkw7QUFHQSxjQUFRLE1BSFI7QUFJQSxXQUFLLEVBQUU7QUFBQ1Usa0JBQVUsRUFBQztBQUFaO0FBSlAsK0JBREEsZUFRQSxvQkFBQyx3REFBRDtBQUFRLGFBQU8sRUFBQyxNQUFoQjtBQUNBLFdBQUssRUFBQyxTQUROO0FBRUEsVUFBSSxFQUFDLE9BRkw7QUFHQSxjQUFRLE1BSFI7QUFJQSxhQUFPLGVBQUUsb0JBQUMseURBQUQsT0FKVDtBQUtBLFdBQUssRUFBRTtBQUFDQSxrQkFBVSxFQUFDO0FBQVo7QUFMUCxtRUFSQTtBQUZFO0FBSm1CLENBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlI7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNZ0MsU0FBUyxHQUFHOUMsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0Y2UyxjQUFRLEVBQUUsQ0FEUjtBQUVGelMsZ0JBQVUsRUFBQyxZQUZUO0FBR0YwUyxnQkFBVSxFQUFDLEVBSFQ7QUFJRkMsbUJBQWEsRUFBQztBQUpaLEtBRCtCO0FBT3JDQyxRQUFJLEVBQUc7QUFDSEgsY0FBUSxFQUFFLENBRFA7QUFFSEksaUJBQVcsRUFBQyxFQUZUO0FBR0hDLGFBQU8sRUFBQztBQUhMLEtBUDhCO0FBWXJDQyxVQUFNLEVBQUc7QUFDTE4sY0FBUSxFQUFFO0FBREwsS0FaNEI7QUFlckNPLFNBQUssRUFBRztBQUNKblQsYUFBTyxFQUFHLE1BRE47QUFFSm9ULGtCQUFZLEVBQUMsRUFGVDtBQUdKSCxhQUFPLEVBQUMsVUFISjtBQUlKaFQsbUJBQWEsRUFBRyxLQUpaO0FBS0pNLGFBQU8sY0FBTVQsS0FBSyxDQUFDZ0QsT0FBTixDQUFjLENBQWQsQ0FBTjtBQUxIO0FBZjZCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBdUJlLFNBQVN1USxHQUFULENBQWM1VCxLQUFkLEVBQXFCO0FBQUEsd0JBQ05sRSxLQUFLLENBQUNpQixRQUFOLENBQWU7QUFDckM4VyxRQUFJLEVBQUc7QUFEOEIsR0FBZixDQURNO0FBQUE7QUFBQSxNQUN6QjFOLEtBRHlCO0FBQUEsTUFDbEJDLFFBRGtCOztBQUloQyxNQUFNN0UsT0FBTyxHQUFHMkIsU0FBUyxFQUF6Qjs7QUFDQSxNQUFNNFEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFTM1csSUFBVDtBQUFBLFdBQWtCLFVBQUM0VyxLQUFELEVBQVc7QUFDOUMsVUFBTUMsSUFBSSxHQUFHN1csSUFBSSxHQUFFK0ksS0FBSyxDQUFDNE4sTUFBRCxDQUFMLEdBQWdCLEtBQWhCLEdBQXdCLElBQTFCLEdBQWlDLEtBQWxEO0FBQ0EzTixjQUFRLGlDQUFNRCxLQUFOLDJCQUFjNE4sTUFBZCxFQUF1QkUsSUFBdkIsR0FBUjtBQUNILEtBSG9CO0FBQUEsR0FBckI7O0FBSUEsTUFBTWpYLE9BQU8sR0FBR2xCLEtBQUssQ0FBQytSLFVBQU4sQ0FBaUJoUyxnREFBakIsQ0FBaEI7QUFDQSxNQUFNa1ksTUFBTSxHQUFHL1csT0FBTyxDQUFDbUMsSUFBUixHQUFjLFFBQWQsR0FBd0IsT0FBdkM7QUFDQSxNQUFNK1UsS0FBSyxHQUFHLENBQUMsV0FBRCxFQUFhLFlBQWIsQ0FBZDtBQUNBLE1BQU1DLFNBQVMsR0FBR25YLE9BQU8sQ0FBQ21DLElBQVIsZ0JBQWMsb0JBQUMsc0RBQUQsT0FBZCxHQUFpQyxJQUFuRDtBQUVBLHNCQUNJLG9CQUFDLEtBQUQsQ0FBTyxRQUFQLHFCQUNBLG9CQUFDLGlFQUFELEVBQW1CYSxLQUFuQixlQUNBLG9CQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBd0IsU0FBSyxFQUFFO0FBQUNvVSxlQUFTLEVBQUM7QUFBWDtBQUEvQixrQkFDSSxvQkFBQyx5REFBRCxxQkFDSixvQkFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUU7QUFBekIsa0JBQ0ksb0JBQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFFN1MsT0FBTyxDQUFDakI7QUFBbkMsa0JBQ0ksb0JBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLEVBQUVpQixPQUFPLENBQUMrUjtBQUE5QixrQkFDSSxvQkFBQyxxREFBRDtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsU0FBSyxFQUFFO0FBQUNqSCxvQkFBYyxFQUFHO0FBQWxCO0FBQXBCLGtCQUErQyxvQkFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQztBQUFoQixjQUEvQyxDQURKLEVBRUs2SCxLQUFLLENBQUNyTSxHQUFOLENBQVUsVUFBQ3dNLElBQUQ7QUFBQSx3QkFDUCxvQkFBQyxxREFBRDtBQUFNLFFBQUUsYUFBTUEsSUFBTixDQUFSO0FBQXNCLFdBQUssRUFBRTtBQUFDaEksc0JBQWMsRUFBRztBQUFsQixPQUE3QjtBQUF3RCxTQUFHLEVBQUVnSTtBQUE3RCxvQkFBbUUsb0JBQUMsd0RBQUQ7QUFBUSxhQUFPLEVBQUM7QUFBaEIsWUFBNkJBLElBQTdCLE1BQW5FLENBRE87QUFBQSxHQUFWLENBRkwsQ0FESixlQU9JLG9CQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxFQUFFOVMsT0FBTyxDQUFDa1M7QUFBOUIsa0JBQXNDLGlDQUF0QyxDQVBKLGVBUUksb0JBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLEVBQUVsUyxPQUFPLENBQUNtUztBQUE5QixrQkFDSSxvQkFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxVQUFoQjtBQUEyQixTQUFLLEVBQUMsU0FBakM7QUFBMkMsV0FBTyxFQUFFSSxZQUFZLENBQUNDLE1BQUQsRUFBUyxJQUFULENBQWhFO0FBQWdGLFNBQUssRUFBRTtBQUFDTyxpQkFBVyxFQUFDO0FBQWI7QUFBdkYsS0FDS1AsTUFETCxDQURKLEVBSUtJLFNBSkwsZUFLSSxvQkFBQyx3REFBRDtBQUFRLFFBQUksRUFBRWhPLEtBQUssQ0FBQzROLE1BQUQsQ0FBbkI7QUFBNkIsV0FBTyxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQWxEO0FBQW1FLFdBQU8sRUFBQztBQUEzRSxLQUNLUSw2REFBWSxpQ0FBTXZVLEtBQU47QUFBYStULFVBQU0sRUFBTkEsTUFBYjtBQUFxQkQsZ0JBQVksRUFBWkEsWUFBckI7QUFBb0M5VyxXQUFPLEVBQVBBO0FBQXBDLEtBRGpCLENBTEosQ0FSSixDQURKLGVBbUJJLG9CQUFDLHlEQUFELE9BbkJKLENBREksQ0FESixDQURBLENBREEsQ0FESjtBQStCSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFRDtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1rRyxTQUFTLEdBQUc5QywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DcUcsUUFBSSxFQUFHO0FBQ0gvRixXQUFLLEVBQUcsTUFETDtBQUVIQyxZQUFNLEVBQUUsT0FGTDtBQUdITCxhQUFPLEVBQUcsTUFIUDtBQUlIRSxvQkFBYyxFQUFHLE9BSmQ7QUFLSEQsbUJBQWEsRUFBRztBQUxiLEtBRDRCO0FBUW5DZ1UsWUFBUSxFQUFHO0FBQ1A3VCxXQUFLLEVBQUc7QUFERCxLQVJ3QjtBQVduQzhULGdCQUFZLEVBQUc7QUFDWGxSLGVBQVMsRUFBRyxRQUREO0FBRVh4QyxXQUFLLEVBQUcsU0FGRztBQUdYMkMsa0JBQVksRUFBRztBQUhKLEtBWG9CO0FBZ0JuQ2dSLGVBQVcsRUFBRztBQUNWL1QsV0FBSyxFQUFHTixLQUFLLENBQUNnRCxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVZ6QyxZQUFNLEVBQUdQLEtBQUssQ0FBQ2dELE9BQU4sQ0FBYyxDQUFkO0FBRkMsS0FoQnFCO0FBb0JuQ3VJLFVBQU0sRUFBRztBQUNMckwsYUFBTyxFQUFHO0FBREwsS0FwQjBCO0FBdUJuQ29VLFlBQVEsRUFBRztBQUNQNVQsV0FBSyxFQUFHLFNBREQ7QUFFUHdDLGVBQVMsRUFBQztBQUZILEtBdkJ3QjtBQTJCbkNxUixTQUFLLEVBQUc7QUFDSjVRLFNBQUcsRUFBRyxLQURGO0FBRUpzUCxVQUFJLEVBQUcsS0FGSDtBQUdKN08sZUFBUyx5QkFITDtBQUlKSSxjQUFRLEVBQUUsVUFKTjtBQUtKbEUsV0FBSyxFQUFFLEdBTEg7QUFNSndLLGNBQVEsRUFBRyxHQU5QO0FBT0psRyxxQkFBZSxFQUFFNUUsS0FBSyxDQUFDVyxPQUFOLENBQWNzQyxVQUFkLENBQXlCekMsS0FQdEM7QUFRSnlFLFlBQU0sRUFBRSxnQkFSSjtBQVNKOE8sZUFBUyxFQUFFL1QsS0FBSyxDQUFDd1UsT0FBTixDQUFjLENBQWQsQ0FUUDtBQVVKL1QsYUFBTyxFQUFFVCxLQUFLLENBQUNnRCxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixDQVZMO0FBV0o5QyxhQUFPLEVBQUcsTUFYTjtBQVlKQyxtQkFBYSxFQUFHO0FBWlosS0EzQjJCO0FBeUNuQ3NVLGVBQVcsRUFBRztBQUNWdlUsYUFBTyxFQUFHLE1BREE7QUFFVkMsbUJBQWEsRUFBRyxLQUZOO0FBR1ZDLG9CQUFjLEVBQUcsUUFIUDtBQUlWQyxnQkFBVSxFQUFHO0FBSkgsS0F6Q3FCO0FBK0NuQ3FVLGVBQVcsRUFBRztBQUNWeFUsYUFBTyxFQUFHLE1BREE7QUFFVkMsbUJBQWEsRUFBRyxRQUZOO0FBR1ZDLG9CQUFjLEVBQUcsUUFIUDtBQUlWQyxnQkFBVSxFQUFHO0FBSkgsS0EvQ3FCO0FBcURuQ1csVUFBTSxFQUFHO0FBQ0xILGdCQUFVLEVBQUM7QUFETjtBQXJEMEIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUF5RGUsU0FBUzhULFFBQVQsT0FBcUQ7QUFBQSxNQUFqQ2pCLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLE1BQXhCRCxZQUF3QixRQUF4QkEsWUFBd0I7QUFBQSxNQUFWOVcsT0FBVSxRQUFWQSxPQUFVO0FBQ2hFLE1BQU11RSxPQUFPLEdBQUcyQixTQUFTLEVBQXpCO0FBQ0EsTUFBTStSLG9CQUFvQixHQUFHblosS0FBSyxDQUFDK1IsVUFBTixDQUFpQjNSLDBEQUFqQixDQUE3Qjs7QUFGZ0Usd0JBRzVCSixLQUFLLENBQUNpQixRQUFOLENBQWUsRUFBZixDQUg0QjtBQUFBO0FBQUEsTUFHekRtWSxVQUh5RDtBQUFBLE1BRzdDQyxhQUg2Qzs7QUFJaEUsV0FBU0Msa0JBQVQsR0FBK0I7QUFDM0JDLDhFQUFtQjtBQUN0Qjs7QUFDRCxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsV0FBTUMsUUFBUSxDQUFDLElBQUQsQ0FBZDtBQUFBLEdBQTNCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxXQUFNRCxRQUFRLENBQUMsS0FBRCxDQUFkO0FBQUEsR0FBM0I7O0FBQ0EsTUFBTWpHLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ25MLENBQUQ7QUFBQSxXQUFPZ1IsYUFBYSxDQUFDaFIsQ0FBQyxDQUFDQyxNQUFGLENBQVM4QyxLQUFWLENBQXBCO0FBQUEsR0FBMUI7O0FBQ0EsTUFBTXVPLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixRQUFJUCxVQUFVLEtBQUtsWSxPQUFPLENBQUNvQyxLQUEzQixFQUFrQztBQUM5Qm9SLDBFQUFRLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxDQUFDLEVBQUQsQ0FBUCxDQUFSLENBQXFCelIsSUFBckIsQ0FBMEIsVUFBQUMsSUFBSSxFQUFJO0FBQzlCaVcsNEJBQW9CLENBQUM7QUFDakI3WCxjQUFJLEVBQUMsSUFEWTtBQUVqQkMsZ0JBQU0sRUFBRTJCLElBQUksQ0FBQzNCLE1BQUwsS0FBZ0IsU0FBaEIsR0FBNEIsU0FBNUIsR0FBd0M7QUFGL0IsU0FBRCxDQUFwQjtBQUlBMkosa0JBQVUsQ0FBQyxZQUFJO0FBQ1h6SyxrQkFBUSxDQUFDdUQsT0FBVCxDQUFpQnZELFFBQVEsQ0FBQ3dELE1BQTFCO0FBQ0gsU0FGUyxFQUVSLElBRlEsQ0FBVjtBQUdILE9BUkQsV0FRUyxVQUFBTixHQUFHLEVBQUk7QUFDWixjQUFNLElBQUlDLEtBQUosQ0FBV0QsR0FBWCxDQUFOO0FBQ0gsT0FWRDtBQVdILEtBWkQsTUFZTztBQUNId1YsMEJBQW9CLENBQUM7QUFDakI3WCxZQUFJLEVBQUMsSUFEWTtBQUVqQkMsY0FBTSxFQUFDO0FBRlUsT0FBRCxDQUFwQjtBQUlIO0FBQ0osR0FuQkQ7O0FBVmdFLHlCQThCdEN2QixLQUFLLENBQUNpQixRQUFOLENBQWUsS0FBZixDQTlCc0M7QUFBQTtBQUFBLE1BOEJ6RDZYLEtBOUJ5RDtBQUFBLE1BOEJsRFcsUUE5QmtEOztBQStCaEUsTUFBTUcsUUFBUSxHQUFHMVksT0FBTyxHQUFFQSxPQUFPLENBQUNtQyxJQUFSLEdBQWMsSUFBZCxHQUFxQixLQUF2QixHQUErQixLQUF2RDtBQUVBLHNCQUNJO0FBQ0EsYUFBUyxFQUFFb0MsT0FBTyxDQUFDbUYsSUFEbkI7QUFFQSxRQUFJLEVBQUMsY0FGTDtBQUdBLFdBQU8sRUFBRW9OLFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FIckI7QUFJQSxhQUFTLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQ7QUFKdkIsa0JBTUUsb0JBQUMsc0RBQUQscUJBQ00sb0JBQUMsOERBQUQ7QUFBYyxXQUFPLEVBQUUyQixRQUFRLEdBQUUsU0FBRixHQUFjLFlBQTdDO0FBQTJELGFBQVMsRUFBRW5VLE9BQU8sQ0FBQ2tUO0FBQTlFLElBRE4sRUFJR2lCLFFBQVEsZ0JBRVIsb0JBQUMsS0FBRCxDQUFPLFFBQVAscUJBQ0csb0JBQUMsMERBQUQ7QUFBVSxjQUFVLEVBQUMsUUFBckI7QUFBOEIsYUFBUyxFQUFFblUsT0FBTyxDQUFDaVQ7QUFBakQsa0JBQ0ksb0JBQUMsZ0VBQUQscUJBQ0ksb0JBQUMsd0RBQUQ7QUFBUSxPQUFHLEVBQUV4WCxPQUFPLENBQUNxQyxPQUFyQjtBQUE4QixhQUFTLEVBQUVrQyxPQUFPLENBQUNtVCxXQUFqRDtBQUE4RCxPQUFHLEVBQUUxWCxPQUFPLENBQUNtQztBQUEzRSxJQURKLENBREosZUFJSSxvQkFBQyw4REFBRDtBQUFjLFdBQU8sRUFBRW5DLE9BQU8sQ0FBQ21DLElBQS9CO0FBQXFDLGFBQVMsRUFBRW9DLE9BQU8sQ0FBQ29UO0FBQXhELElBSkosZUFLSSwrQkFMSixDQURILGVBUUcsb0JBQUMseURBQUQ7QUFBUyxXQUFPLEVBQUMsT0FBakI7QUFBeUIsYUFBUyxFQUFDO0FBQW5DLElBUkgsZUFTRyxvQkFBQywwREFBRDtBQUFVLGFBQVMsRUFBRXBULE9BQU8sQ0FBQ2lULFFBQTdCO0FBQXVDLFdBQU87QUFBOUMsa0JBQ0ksb0JBQUMsOERBQUQ7QUFBYyxXQUFPLEVBQUMsVUFBdEI7QUFBaUMsYUFBUyxlQUN0QyxvQkFBQyxLQUFELENBQU8sUUFBUCxxQkFDSSxvQkFBQyw0REFBRDtBQUFZLGVBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFPLEVBQUMsT0FBckM7QUFBNkMsV0FBSyxFQUFDLGFBQW5EO0FBQWlFLGVBQVMsRUFBRWpULE9BQU8sQ0FBQ3FLO0FBQXBGLE9BQ0s1TyxPQUFPLENBQUNvQyxLQURiLENBREo7QUFESixJQURKLENBVEgsZUFtQkcsb0JBQUMsMERBQUQ7QUFBVSxhQUFTLEVBQUVtQyxPQUFPLENBQUNpVCxRQUE3QjtBQUF1QyxXQUFPO0FBQTlDLElBbkJILGVBb0JHLG9CQUFDLDBEQUFEO0FBQVUsYUFBUyxFQUFFalQsT0FBTyxDQUFDaVQsUUFBN0I7QUFBdUMsV0FBTztBQUE5QyxrQkFDSSxvQkFBQyx1REFBRDtBQUFNLFNBQUssRUFBQyxTQUFaO0FBQXNCLFNBQUssRUFBRTtBQUFDRixpQkFBVyxFQUFDO0FBQWI7QUFBN0IsSUFESixlQUVJLG9CQUFDLDhEQUFEO0FBQWMsYUFBUyxFQUFDO0FBQXhCLElBRkosZUFHSSxvQkFBQyxxREFBRDtBQUFNLE1BQUUsRUFBQztBQUFULGtCQUNJLG9CQUFDLDREQUFEO0FBQVksUUFBSSxFQUFDLEtBQWpCO0FBQXVCLGtCQUFXO0FBQWxDLGtCQUNJLG9CQUFDLHVEQUFEO0FBQU0sU0FBSyxFQUFDLFNBQVo7QUFBc0IsWUFBUSxFQUFDO0FBQS9CLElBREosQ0FESixDQUhKLENBcEJILGVBNkJHLG9CQUFDLDBEQUFEO0FBQVUsYUFBUyxFQUFFL1MsT0FBTyxDQUFDaVQsUUFBN0I7QUFBdUMsV0FBTztBQUE5QyxJQTdCSCxlQThCRyxvQkFBQywwREFBRDtBQUFVLGFBQVMsRUFBRWpULE9BQU8sQ0FBQ2lULFFBQTdCO0FBQXVDLFdBQU87QUFBOUMsa0JBQ0ksb0JBQUMsMERBQUQ7QUFBUyxTQUFLLEVBQUMsV0FBZjtBQUEyQixTQUFLLEVBQUU7QUFBQ0YsaUJBQVcsRUFBQztBQUFiO0FBQWxDLElBREosZUFFSSxvQkFBQyw4REFBRDtBQUFjLGFBQVMsRUFBQztBQUF4QixJQUZKLGVBR0ksb0JBQUMsNERBQUQ7QUFBWSxRQUFJLEVBQUMsS0FBakI7QUFBdUIsa0JBQVcsYUFBbEM7QUFBZ0QsV0FBTyxFQUFFZ0I7QUFBekQsa0JBQ0ksb0JBQUMsZ0VBQUQ7QUFBZSxTQUFLLEVBQUMsV0FBckI7QUFBaUMsWUFBUSxFQUFDO0FBQTFDLElBREosQ0FISixDQTlCSCxlQXVDRyxvQkFBQyx1REFBRDtBQUNBLFFBQUksRUFBRVYsS0FETjtBQUVBLFdBQU8sRUFBRVksa0JBRlQ7QUFHQSx1QkFBZ0IsYUFIaEI7QUFJQSx3QkFBaUI7QUFKakIsa0JBTUksb0JBQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUVqVSxPQUFPLENBQUNxVDtBQUExQixrQkFDSSxvQkFBQyxxREFBRDtBQUFLLGFBQVMsRUFBRXJULE9BQU8sQ0FBQ3VUO0FBQXhCLGtCQUNJLG9CQUFDLDREQUFEO0FBQVksUUFBSSxFQUFDLE9BQWpCO0FBQXlCLGtCQUFXLGFBQXBDO0FBQWtELFlBQVE7QUFBMUQsa0JBQ0ksb0JBQUMsZ0VBQUQ7QUFBZSxTQUFLLEVBQUMsV0FBckI7QUFBaUMsWUFBUSxFQUFDO0FBQTFDLElBREosQ0FESixlQUlJLG9CQUFDLDREQUFEO0FBQVksTUFBRSxFQUFDLGFBQWY7QUFBNkIsV0FBTyxFQUFDLFFBQXJDO0FBQThDLFdBQU8sRUFBQyxPQUF0RDtBQUE4RCxTQUFLLEVBQUU7QUFBQzVULGdCQUFVLEVBQUM7QUFBWjtBQUFyRSxvQ0FKSixDQURKLGVBU0ksb0JBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUVLLE9BQU8sQ0FBQ3dUO0FBQXhCLGtCQUNJLG9CQUFDLDREQUFEO0FBQVksTUFBRSxFQUFDLGdCQUFmO0FBQWdDLFdBQU8sRUFBQyxPQUF4QztBQUFnRCxTQUFLLEVBQUU7QUFBQzdULGdCQUFVLEVBQUM7QUFBWjtBQUF2RCx5SUFESixlQUtJLG9CQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLEtBQStCbEUsT0FBTyxDQUFDb0MsS0FBdkMsQ0FMSixDQVRKLGVBZ0JJLG9CQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFFbUMsT0FBTyxDQUFDdVQ7QUFBeEIsa0JBQ0ksb0JBQUMsMkRBQUQ7QUFBVyxTQUFLLEVBQUMsUUFBakI7QUFBMEIsWUFBUSxFQUFFeEY7QUFBcEMsSUFESixlQUVJLG9CQUFDLHdEQUFEO0FBQVEsYUFBUyxFQUFFL04sT0FBTyxDQUFDRixNQUEzQjtBQUFtQyxXQUFPLEVBQUMsV0FBM0M7QUFBdUQsU0FBSyxFQUFDLFdBQTdEO0FBQXlFLFFBQUksRUFBQyxPQUE5RTtBQUFzRixXQUFPLEVBQUVvVTtBQUEvRixjQUZKLENBaEJKLENBTkosQ0F2Q0gsQ0FGUSxnQkF5RVIsb0JBQUMsMERBQUQ7QUFBVSxVQUFNLE1BQWhCO0FBQWlCLGFBQVMsRUFBRWxVLE9BQU8sQ0FBQ2lULFFBQXBDO0FBQThDLFdBQU8sRUFBRVk7QUFBdkQsa0JBQ0csb0JBQUMscURBQUQ7QUFBYyxVQUFNLEVBQUVPLHFFQUFpQkE7QUFBdkMsSUFESCxDQTdFSCxDQU5GLENBREo7QUEwRkg7QUFFRFgsUUFBUSxDQUFDclQsU0FBVCxHQUFxQjtBQUNqQm9TLFFBQU0sRUFBR25TLGlEQUFTLENBQUNjLE1BQVYsQ0FBaUJGLFVBRFQ7QUFFakJzUixjQUFZLEVBQUdsUyxpREFBUyxDQUFDYSxJQUFWLENBQWVELFVBRmI7QUFHakJ4RixTQUFPLEVBQUc0RSxpREFBUyxDQUFDZ0IsTUFBVixDQUFpQko7QUFIVixDQUFyQixDOzs7Ozs7Ozs7Ozs7O0FDck1BO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTXJDLFFBQVEsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNsQ2dCLFVBQU0sRUFBRztBQUNMVixXQUFLLEVBQUcsTUFESDtBQUVMQyxZQUFNLEVBQUc7QUFGSjtBQUR5QixHQUFMO0FBQUEsQ0FBTixDQUEzQjtBQU1lLFNBQVNnVixZQUFULENBQXVCNVYsS0FBdkIsRUFBOEI7QUFDekMsTUFBTXVCLE9BQU8sR0FBR3BCLFFBQVEsRUFBeEI7QUFEeUMsTUFFbEMwVixNQUZrQyxHQUV4QjdWLEtBRndCLENBRWxDNlYsTUFGa0MsRUFFakI7O0FBRXhCLHNCQUNJLG9CQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxPQUFHLEVBQUVBLE1BQVY7QUFBa0IsYUFBUyxFQUFFdFUsT0FBTyxDQUFDRjtBQUFyQyxJQURKLENBREo7QUFLSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNbEIsUUFBUSxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2xDeVYsVUFBTSxFQUFHO0FBQ0xyVixvQkFBYyxFQUFDLFVBRFY7QUFFTEssYUFBTyxFQUFHLEtBRkw7QUFHTDBFLFlBQU0sRUFBRyxDQUhKO0FBSUw3RSxXQUFLLEVBQUc7QUFKSDtBQUR5QixHQUFMO0FBQUEsQ0FBTixDQUEzQjtBQVFBLElBQU1vVixZQUFZLEdBQUdDLG9FQUFVLENBQUMsVUFBQzNWLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDOFEsV0FBTyxFQUFFO0FBQ1BsTSxxQkFBZSxFQUFFNUUsS0FBSyxDQUFDVyxPQUFOLENBQWNpVixNQUFkLENBQXFCQyxLQUQvQjtBQUVQblYsV0FBSyxFQUFFLHFCQUZBO0FBR1BxVCxlQUFTLEVBQUUvVCxLQUFLLENBQUN3VSxPQUFOLENBQWMsQ0FBZCxDQUhKO0FBSVB0UyxjQUFRLEVBQUUsRUFKSDtBQUtQckIsZ0JBQVUsRUFBQztBQUxKO0FBRCtCLEdBQVo7QUFBQSxDQUFELENBQVYsQ0FRZmlWLHlEQVJlLENBQXJCO0FBVWUsMkVBQVk7QUFDdkIsTUFBTTVVLE9BQU8sR0FBR3BCLFFBQVEsRUFBeEI7O0FBRHVCLG9CQUV3QnhELCtEQUFVLENBQUUsQ0FBQyxTQUFELEVBQVcsTUFBWCxDQUFGLENBRmxDO0FBQUE7QUFBQSxNQUVmQyxPQUZlO0FBQUEsTUFFTEMsU0FGSztBQUFBLE1BRU9DLFlBRlA7O0FBR3ZCLE1BQU1pUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUs7QUFDNUJ0USxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FvWCxpRUFBTSxHQUFHL1csSUFBVCxDQUFjLFVBQUFxWCxHQUFHLEVBQUk7QUFDakJ0WixrQkFBWSxDQUFDLFNBQUQsQ0FBWjtBQUNBQSxrQkFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNBUCxjQUFRLENBQUMwUyxJQUFULEdBQWdCMVMsUUFBUSxDQUFDd0QsTUFBekI7QUFDSCxLQUpEO0FBS0gsR0FQRDs7QUFRQSxzQkFDSSxvQkFBQyxLQUFELENBQU8sUUFBUCxxQkFDSSxvQkFBQywwREFBRDtBQUFVLGFBQVMsRUFBRXdCLE9BQU8sQ0FBQ3VVO0FBQTdCLGtCQUNJLG9CQUFDLFlBQUQ7QUFBYyxTQUFLLEVBQUM7QUFBcEIsa0JBQ0ksb0JBQUMsNERBQUQ7QUFBWSxTQUFLLEVBQUU7QUFBQ2hWLGFBQU8sRUFBQztBQUFULEtBQW5CO0FBQWdDLFdBQU8sRUFBRWlPO0FBQXpDLGtCQUNJLG9CQUFDLG1FQUFELE9BREosQ0FESixDQURKLENBREosQ0FESjtBQVdILEM7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNPLElBQU10SSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDbEMsU0FBUTRQLDRDQUFLLENBQUNDLEdBQU4sV0FBYUMsa0RBQWIsaUJBQW1DO0FBQUNDLG1CQUFlLEVBQUM7QUFBakIsR0FBbkMsQ0FBUjtBQUNILENBRk0sQyxDQUlQOztBQUNPLElBQU0vTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUM3SixPQUFELEVBQVV1QixJQUFWLEVBQWdCRSxPQUFoQixFQUE0QjtBQUNyRCxNQUFJLENBQUNGLElBQUQsSUFBUyxDQUFDRSxPQUFWLElBQXFCLENBQUN6QixPQUExQixFQUFtQztBQUMvQmEsV0FBTyxDQUFDQyxHQUFSO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsU0FBTzJYLDRDQUFLLENBQUNJLElBQU4sV0FBY0Ysa0RBQWQsaUJBQXNDO0FBQ3pDdlgsUUFBSSxFQUFHO0FBQ0hwQixhQUFPLEVBQVBBLE9BREc7QUFFSHVCLFVBQUksRUFBSkEsSUFGRztBQUdIRSxhQUFPLEVBQVBBO0FBSEc7QUFEa0MsR0FBdEMsRUFNSjtBQUFDbVgsbUJBQWUsRUFBQztBQUFqQixHQU5JLENBQVA7QUFPSCxDQVpNLEMsQ0FjUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTXpQLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQzJQLFVBQUQsRUFBZ0I7QUFDM0MsU0FBT0wsNENBQUssVUFBTCxXQUFnQkUsa0RBQWhCLGlCQUF3QztBQUMzQ3ZYLFFBQUksRUFBRztBQUNIMFgsZ0JBQVUsRUFBVkE7QUFERyxLQURvQztBQUkzQ0YsbUJBQWUsRUFBRztBQUp5QixHQUF4QyxDQUFQO0FBTUgsQ0FQTSxDOzs7Ozs7Ozs7Ozs7QUNqQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBO0FBQ0E7O0FBQ08sSUFBTW5CLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxTQUFNZ0IsNENBQUssQ0FBQ0MsR0FBTixXQUFhQyxrREFBYixhQUFnQ3hYLElBQWhDLENBQXFDLFVBQUFxWCxHQUFHO0FBQUEsV0FBSTdaLFFBQVEsQ0FBQ29hLE1BQVQsQ0FBZ0JQLEdBQUcsQ0FBQ3BYLElBQXBCLENBQUo7QUFBQSxHQUF4QyxDQUFOO0FBQUEsQ0FBNUI7QUFDQSxJQUFNRixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUM4WCxLQUFELEVBQVc7QUFDekMsU0FBT1AsNENBQUssQ0FBQ0ksSUFBTixXQUFjRixrREFBZCxhQUFpQztBQUFDSyxTQUFLLEVBQUxBO0FBQUQsR0FBakMsRUFBMEM7QUFDN0NKLG1CQUFlLEVBQUc7QUFEMkIsR0FBMUMsRUFFSnpYLElBRkksQ0FFQyxVQUFBMkksUUFBUTtBQUFBLFdBQUVrSyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JuSyxRQUFRLENBQUMxSSxJQUF6QixDQUFGO0FBQUEsR0FGVCxDQUFQO0FBR0gsQ0FKTTtBQUtBLElBQU04VyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3hCLFNBQU9PLDRDQUFLLENBQUNDLEdBQU4sV0FBYUMsa0RBQWIsY0FBZ0M7QUFBQ0MsbUJBQWUsRUFBQztBQUFqQixHQUFoQyxDQUFQO0FBQ0gsQ0FGTSxDOzs7Ozs7Ozs7Ozs7QUNYUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ08sSUFBTWhJLGtCQUFrQixHQUFJLFNBQXRCQSxrQkFBc0IsR0FBTTtBQUNyQyxTQUFRNkgsNENBQUssQ0FBQ0MsR0FBTixXQUFhQyxrREFBYixrQkFBb0M7QUFDeENDLG1CQUFlLEVBQUM7QUFEd0IsR0FBcEMsQ0FBUjtBQUdILENBSk07QUFNQSxJQUFNbkgsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ25CLE9BQUQsRUFBVUMsU0FBVixFQUF3QjtBQUMvQzFQLFNBQU8sQ0FBQ0MsR0FBUiw0Q0FDWU8sSUFBSSxDQUFDQyxTQUFMLENBQWVnUCxPQUFmLENBRFosK0JBRWNqUCxJQUFJLENBQUNDLFNBQUwsQ0FBZWlQLFNBQWYsQ0FGZDtBQUdBLFNBQVFrSSw0Q0FBSyxDQUFDUSxHQUFOLFdBQWFOLGtEQUFiLGVBQWtDO0FBQ3RDO0FBQ0FySSxXQUFPLEVBQVBBLE9BRnNDO0FBR3RDQyxhQUFTLEVBQVRBO0FBSHNDLEdBQWxDLEVBSU47QUFBQ3FJLG1CQUFlLEVBQUM7QUFBakIsR0FKTSxFQUlrQnpYLElBSmxCLENBSXVCLFVBQUFxWCxHQUFHO0FBQUEsV0FBSXhFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnVFLEdBQUcsQ0FBQ3BYLElBQXBCLENBQUo7QUFBQSxHQUoxQixDQUFSLENBSitDLENBUXVCO0FBQ3pFLENBVE07QUFXQSxJQUFNd1IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3RDLE9BQUQsRUFBVUMsU0FBVixFQUFxQm5QLElBQXJCLEVBQThCO0FBQ2xELFNBQVFxWCw0Q0FBSyxDQUFDUSxHQUFOLFdBQWFOLGtEQUFiLFlBQStCO0FBQ25DckksV0FBTyxFQUFQQSxPQURtQztBQUVuQ0MsYUFBUyxFQUFUQSxTQUZtQztBQUduQ25QLFFBQUksRUFBSkE7QUFIbUMsR0FBL0IsRUFJTjtBQUFDd1gsbUJBQWUsRUFBQztBQUFqQixHQUpNLEVBSWtCelgsSUFKbEIsQ0FJdUIsVUFBQXFYLEdBQUcsRUFBSTtBQUNsQyxRQUFJQSxHQUFHLENBQUMvVCxNQUFKLEtBQWUsR0FBbkIsRUFBd0IsT0FBT3VQLE9BQU8sQ0FBQ2tGLE1BQVIsQ0FBZSxHQUFmLENBQVA7QUFDeEIsV0FBT2xGLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnVFLEdBQUcsQ0FBQ3BYLElBQXBCLENBQVA7QUFDSCxHQVBPLENBQVI7QUFRSCxDQVRNLEM7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUFlLHlFQUFDa1AsT0FBRCxFQUFXQyxTQUFYLEVBQXlCO0FBQ3RDMVAsU0FBTyxDQUFDQyxHQUFSO0FBQ0UsU0FBUW1RLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWixPQUFkLEVBQXVCa0IsTUFBdkIsQ0FBOEIsVUFBQWhILENBQUM7QUFBQSxXQUFFQSxDQUFGO0FBQUEsR0FBL0IsRUFBb0NQLEdBQXBDLENBQXdDLFVBQUNYLEtBQUQsRUFBT2EsS0FBUCxFQUFpQjtBQUMvRCxXQUFPO0FBQ0w4RSxXQUFLLEVBQUczRixLQURIO0FBRUw0RixXQUFLLEVBQUc1RixLQUZIO0FBR0w2RixjQUFRLEVBQUdvQixTQUFTLENBQUNwRyxLQUFEO0FBSGYsS0FBUDtBQUtELEdBTk8sQ0FBUjtBQU9ELENBVEgsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZSx1R0FBZixFLENBQ0EsMEMiLCJmaWxlIjoiYXBwLjE4ODgzYTI0ZTg4ZTFlYTRiY2Y1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJyZWFjdC5idW5kbGVcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIgaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2L05hdlwiO1xyXG5pbXBvcnQgR3Vlc3Rib29rIGZyb20gXCIuL2d1ZXN0Ym9vay9HdWVzdGJvb2tcIjtcclxuaW1wb3J0IE1hbmFnZW1lbnQgZnJvbSBcIi4vbWFuYWdlbWVudC9NYW5hZ2VtZW50XCI7XHJcbmltcG9ydCBIZWFkZXJzIGZyb20gJy4vbWFuYWdlbWVudC9IZWFkZXJzJztcclxuaW1wb3J0IHtDc3NCYXNlbGluZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lL0hvbWVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvZm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IHsgZ2V0VG9rZW5BbmRQcm9maWxlIH0gZnJvbSBcIi4vdXRpbC9Mb2dpbkFQSVwiO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IEVycm9yRmFsbGJhY2sgZnJvbSAnLi9jdXN0b21Ib29rL0Vycm9yRmFsbGJhY2snO1xyXG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSBcInJlYWN0LWVycm9yLWJvdW5kYXJ5XCI7XHJcblxyXG4vLyDsu6jthY3siqTtirgg66qp66GdXHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IExvZ291dENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTbmFja2JhckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCB7IGlkX3Rva2VuIH0gPSBxcy5wYXJzZSh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgICBjb25zdCBbIHByb2ZpbGUgLCBzZXRQcm9maWxlIF0gPSBSZWFjdC51c2VTdGF0ZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIHNuYWNrYmFyXHJcbiAgICBjb25zdCBbZ2xvYmFsU25hY2tiYXIsIHNldEdsb2JhbFNuYWNrYmFyXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2UgLCByZXN1bHQ6ICdzdWNjZXNzJ30pO1xyXG4gICAgY29uc3QgW3Rvb0Zhc3RTbmFjaywgc2V0VG9vRmFzdFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgICBjb25zdCBbZGVsZXRlZFNuYWNrLCBzZXREZWxldGVkU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtlcnJvclNuYWNrLCBzZXRFcnJvclNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlLGNvbnRlbnQ6Jyd9KTtcclxuICAgIGNvbnN0IFtzdWNjZXNzU25hY2ssIHNldFN1Y2Nlc3NTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gICAgY29uc3QgW25vdExvZ2dlZFNuYWNrLCBzZXROb3RMb2dnZWRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG5cclxuICAgIGNvbnN0IGd1ZXN0Qm9va1NuYWNrUHJvcHMgPSB7aXNMb2FkaW5nICxcclxuICAgICAgICB0b29GYXN0U25hY2ssIHNldFRvb0Zhc3RTbmFjayxcclxuICAgICAgICBkZWxldGVkU25hY2ssIHNldERlbGV0ZWRTbmFjayxcclxuICAgICAgICBlcnJvclNuYWNrLCBzZXRFcnJvclNuYWNrLFxyXG4gICAgICAgIHN1Y2Nlc3NTbmFjaywgc2V0U3VjY2Vzc1NuYWNrLFxyXG4gICAgICAgIG5vdExvZ2dlZFNuYWNrLCBzZXROb3RMb2dnZWRTbmFja31cclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc1JlZiA9IFJlYWN0LnVzZVJlZigwKTtcclxuICAgIGNvbnN0IGhhbmRsZUJlZm9yZXVubG9hZCA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcHJvZ3Jlc3MgOiAke3Byb2dyZXNzUmVmLmN1cnJlbnR9YCk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IChwcm9ncmVzc1JlZi5jdXJyZW50IDwgMTAwID8gcHJvZ3Jlc3NSZWYuY3VycmVudCArIDIwIDogMTAwKTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3NSZWYuY3VycmVudCA9PT0gMTAwKSB7XHJcbiAgICAgICAgICAgICBwcm9ncmVzc1JlZi5jdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9LDIwMClcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBBUEkg7Iuk7ZaJJyk7XHJcbiAgICAgICAgICAgIGdldFRva2VuQW5kUHJvZmlsZShpZF90b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtuYW1lICxlbWFpbCwgcGljdHVyZX0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKFwicHJvZmlsZVwiLHtuYW1lICwgZW1haWwsIHBpY3R1cmV9LHtwYXRoOlwiL1wiICwgbWF4QWdlIDogNzIwMCwgc2FtZVNpdGU6J25vbmUnfSk7ICAvLyBtYXhBZ2UgOiAy7Iuc6rCEXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2luIEZhaWxlZC4gUGxlYXNlIGF1dGhvcml6ZSB0aGUgdXNlIG9mIGNvb2tpZXMgaW4geW91ciBicm93c2VyLicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2lkX3Rva2VuXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGNvb2tpZXMucHJvZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY29va2llcy5wcm9maWxlIDogJHtKU09OLnN0cmluZ2lmeShjb29raWVzLnByb2ZpbGUpfWApO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29va2llcy5wcm9maWxlXSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8RXJyb3JCb3VuZGFyeVxyXG4gICAgICAgICAgICBGYWxsYmFja0NvbXBvbmVudD17RXJyb3JGYWxsYmFja31cclxuICAgICAgICAgICAgb25FcnJvcj17KGVycm9yLCBjb21wb25lbnRTdGFjayk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciA6ICR7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRTdGFjayA6ICR7Y29tcG9uZW50U3RhY2t9YCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uUmVzZXQ9eygpPT5sb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uLm9yaWdpbil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9maWxlIHx8IHtuYW1lIDogJyd9fT4gICAgICAgICAgey8qIOycoOyggCDtlITroZztlYQg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8TG9nb3V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UHJvZmlsZX0+ICAgey8qIOuhnOq3uOyVhOybgyDsnbTrsqTtirgg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyhyZXN1bHQpPT5oYW5kbGVCZWZvcmV1bmxvYWQocmVzdWx0KX0+ICB7Lyog66Gc65SpIOy7qO2FjeyKpO2KuCAgICovfVxyXG4gICAgICAgICAgICA8R2xvYmFsU25hY2tiYXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRHbG9iYWxTbmFja2Jhcn0+ICB7Lyog7JeQ65+sIOyKpOuCteuwlCDsu6jthY3siqTtirggICAqL31cclxuICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KCk9PjxIb21lIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2d1ZXN0Ym9vaycgcmVuZGVyPXsoKT0+PEd1ZXN0Ym9vayB7Li4uZ3Vlc3RCb29rU25hY2tQcm9wc30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9tYW5hZ2VtZW50JyByZW5kZXI9eygpPT4gPE1hbmFnZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU25hY2s9e3NldEVycm9yU25hY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2hlYWRlcnMnIHJlbmRlcj17KCk9PiA8SGVhZGVycyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIHJlbmRlcj17KHByb3BzKT0+PEZvb3RlciB7Li4ucHJvcHN9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8L0dsb2JhbFNuYWNrYmFyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Qcm9ncmVzc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvTG9nb3V0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtnbG9iYWxTbmFja2Jhci5vcGVufSBvbkNsb3NlPXsoKT0+c2V0R2xvYmFsU25hY2tiYXIoe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtnbG9iYWxTbmFja2Jhci5yZXN1bHQ9PT0nZXJyb3InPyBgTm90IHNhdmVkLlxyXG4gICAgICAgICAgICAgICAgUmVhc29uIDogSW52YWxpZCBpbnB1dC5gIDonIFNBVkVEICd9IHN0YXR1cz17Z2xvYmFsU25hY2tiYXIucmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7dmVydGljYWw6J3RvcCcsIGhvcml6b250YWw6J3JpZ2h0J319Lz5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzdWNjZXNzU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFN1Y2Nlc3NTbmFjayh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD0nU1VDQ0VTUycgc3RhdHVzPSdzdWNjZXNzJyAvPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e25vdExvZ2dlZFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXROb3RMb2dnZWRTbmFjayh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD0nTE9HSU4gRklSU1QnIHN0YXR1cz0nZXJyb3InLz5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXt0b29GYXN0U25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFRvb0Zhc3RTbmFjayh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD0nU09SUlkgVE9PIEZBU1QgKCBJbnRlcnZhbCA6IDE1cyApJyBzdGF0dXM9J2Vycm9yJyAvPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2RlbGV0ZWRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0RGVsZXRlZFNuYWNrKHtvcGVuOmZhbHNlfSl9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PSdEZWxldGVkJyBzdGF0dXM9J3N1Y2Nlc3MnIC8+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17ZXJyb3JTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0RXJyb3JTbmFjayh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17YEVSUk9SIDogJHtlcnJvclNuYWNrLmNvbnRlbnR9YH0gc3RhdHVzPSdlcnJvcicgLz5cclxuICAgICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZ29vZ2xlU2lnbmluLjFjZTFhYWE1YTEyN2ZhM2U0OTJhMTJiYjYyZjk5MzA0LnBuZ1wiOyIsImltcG9ydCB7IEJveCwgUGFwZXIsVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3QgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCdcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICB3aWR0aCA6ICc4MHZ3JyxcclxuICAgICAgICAvLyBoZWlnaHQgOiAnNTB2aCcsXHJcbiAgICAgICAgcGFkZGluZyA6ICc1dmgnLFxyXG4gICAgICAgIGNvbG9yIDogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInXHJcbiAgICB9LFxyXG4gICAgcGFwZXIyIDoge1xyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiczdmgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnNXZoJyxcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInXHJcbiAgICB9XHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JGYWxsYmFjayAoe2Vycm9yLCBjb21wb25lbnRTdGFjaywgcmVzZXRFcnJvckJvdW5kYXJ5fSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBbc2Vjb25kICwgc2V0U2Vjb25kXSA9IFJlYWN0LnVzZVN0YXRlKDMwKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoc2Vjb25kIDw9IDApIGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24ub3JpZ2luKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2Vjb25kIDogICR7c2Vjb25kfWApO1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgc2V0U2Vjb25kKHNlY29uZC0xKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LFtzZWNvbmRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz4ge2BFUlJPUiA6ICR7ZXJyb3IubWVzc2FnZX1gfSA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMyc+IHtgV2lsbCBnbyBiYWNrIHRvIHRoZSBIT01FYH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJz4ge2BpbiAke3NlY29uZH0gc2Vjb25kcy5gfSAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e3Jlc2V0RXJyb3JCb3VuZGFyeX0+IFxyXG4gICAgICAgICAgICAgICAgICAgIFJldHVybiB0byBIb21lIE5vdyBcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcjJ9IGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJz4ge2BQbGVhc2UgY2hlY2sgYmVsb3cuYH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPiB7YDEuIExvZ2luIHRpbWVvdXQgLSBMb2dpbiBSZXRlbnRpb24gVGltZTogMiBob3Vyc2B9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz4ge2AyLiBJbnZhbGlkIFJlcXVlc3RgfSAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuRXJyb3JGYWxsYmFjay5wcm9wVHlwZXMgPSB7XHJcbiAgICByZXNldEVycm9yQm91bmRhcnkgOiBQcm9wVHlwZXMsXHJcbn0iLCJpbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGUnO1xyXG5cclxuLy8gR05C7J2YIOyKrOudvOydtOuTnOq4sOuKpVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWRlT25TY3JvbGwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGUgYXBwZWFyPXtmYWxzZX0gZGlyZWN0aW9uPVwiZG93blwiIGluPXshdHJpZ2dlcn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2xpZGU+XHJcbiAgKTtcclxufSIsImltcG9ydCB7Qm94LCBDaXJjdWxhclByb2dyZXNzLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcgKHtpc0xvYWRpbmd9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7XHJcbiAgICAgICAgaXNMb2FkaW5nICYmIFxyXG4gICAgICAgICAgICAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwdmgnLCB3aWR0aDonMTAwdncnLCBkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge2BTYXZpbmcgY2hhbmdlc2B9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgICA8L0JveD4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5Mb2FkaW5nLnByb3BUeXBlcyA9IHtcclxuICAgIGlzTG9hZGluZyA6IFByb3BUeXBlcy5ib29sXHJcbn0iLCJpbXBvcnQgeyBTbmFja2JhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21TbmFja2JhciAoe29wZW4sIG9uQ2xvc2UsIGNvbnRlbnQsIHN0YXR1cywgZGlyZWN0aW9ufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXtkaXJlY3Rpb24/IGRpcmVjdGlvbiA6IHsgdmVydGljYWw6J3RvcCcsIGhvcml6b250YWw6J2NlbnRlcicgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtvbkNsb3NlfSBzZXZlcml0eT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgdmFyaWFudD0nZmlsbGVkJyBtZXNzYWdlPXt7Zm9udFdlaWdodDonYm9sZGVyJywgZm9udFNpemU6JzVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgKVxyXG59XHJcblxyXG5DdXN0b21TbmFja2Jhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGVuIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2UgOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbnRlbnQgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3RhdHVzIDogUHJvcFR5cGVzLm9uZU9mKFsnZXJyb3InLCdzdWNjZXNzJ10pLFxyXG4gICAgZGlyZWN0aW9uIDogUHJvcFR5cGVzLm9iamVjdCxcclxufSIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG4vLyBjb250c3RydWN0b3Ig7ZuFXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU9uRmlyc3RSZW5kZXIgKGZ1bmMpIHtcclxuICAgIGNvbnN0IGlzRmlyc3RSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcbiAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZnVuYygpO1xyXG4gICAgfVxyXG59XHJcbnVzZU9uRmlyc3RSZW5kZXIucHJvcFR5cGVzID0ge1xyXG4gICAgZnVuYyA6IFByb3BUeXBlcy5mdW5jXHJcbn0iLCJpbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBMaW5rfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB3aGl0ZUFycm93IGZyb20gJy4uL2ltYWdlcy93aGl0ZS1hcnJvdy5wbmcnO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgbWFuYWdlbWVudEJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnO1xyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICBKYWNrJ3MgV2Vic2l0ZVxyXG4gICAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgICAgeycuJ31cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBtaW5IZWlnaHQ6ICcyMHZoJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXHJcbiAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgICBiYWNrZ3JvdW5kIDogdGhlbWUucGFsZXR0ZS5ncmV5WzIwMF0sXHJcbiAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgICBjb2xvciA6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgd2lkdGggOiAnNHZ3JyxcclxuICAgICAgaGVpZ2h0IDogJzR2dycsXHJcbiAgICAgIHBhZGRpbmcgOiAnM3Z3JyxcclxuICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTonMnZoJyxcclxuICAgICAgbWFyZ2luVG9wIDogJzJ2aCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOidjb250YWluJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lGb290ZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtsb2NhdGlvbn0gPSBwcm9wcztcclxuICAgIGNvbnNvbGUubG9nKGBsb2NhdGlvbi5wYXRobmFtZT8gJHtsb2NhdGlvbi5wYXRobmFtZX1gKTtcclxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAoZSkgPT4ge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lID09PSAnL2d1ZXN0Ym9vayc/IG51bGwgOiAoXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHN0eWxlPXtcclxuICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nID8gXHJcbiAgICAgICAge2JhY2tncm91bmQgOiBgbGluZWFyLWdyYWRpZW50KGJsYWNrLCAjZWVlZWVlKWB9IFxyXG4gICAgICAgIDogXHJcbiAgICAgICAge2JhY2tncm91bmRJbWFnZSA6IGB1cmwoJHttYW5hZ2VtZW50QmFja2dyb3VuZH0pYCwgYmFja2dyb3VuZFNpemUgOiAnYXV0bycsIHRyYW5zZm9ybTogYHNjYWxlWSgtMSlgfX0+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJNb3ZlIHRvIFRvcFwiIGFyaWEtbGFiZWw9XCJtb3ZlLXRvLXRvcFwiIHBsYWNlbWVudD1cInRvcFwiIGVudGVyRGVsYXk9ezM1MH0gbGVhdmVEZWxheT17MTUwfT5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBzdHlsZT17XHJcbiAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nPyBcclxuICAgICAgICAgIHtiYWNrZ3JvdW5kIDpgbm8tcmVwZWF0IGNlbnRlci84MCUgdXJsKCR7d2hpdGVBcnJvd30pYH1cclxuICAgICAgICAgIDogXHJcbiAgICAgICAgICB7YmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLCB0cmFuc2Zvcm06YHJvdGF0ZSgxODBkZWcpYH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gb25Nb3VzZU92ZXI9eyhlKT0+dHJhbnNpdGlvbihlKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgICAgICA8Q29weXJpZ2h0IHN0eWxlPXt7Zm9udFdlaWdodCA6ICdib2xkZXInfX0vPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH0iLCJcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBCb3gsIFBhcGVyLCBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIEF2YXRhcixUb29sdGlwLEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gXCIuLi9jdXN0b21Ib29rL1NuYWNrQmFyXCI7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gXCIuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXJcIjtcclxuaW1wb3J0IHsgZ2V0R3Vlc3Rib29rTGlzdCAsIHBvc3RHdWVzdGJvb2ssIGRlbGV0ZUd1ZXN0Ym9va30gZnJvbSAnLi4vdXRpbC9HdWVzdGJvb2tBUEknO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICB3aWR0aCA6ICc3NXZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnODV2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYmFja0xvZ28gOiB7XHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICB6SW5kZXggOiAxLFxyXG4gICAgICAgIG9wYWNpdHk6MC4zXHJcbiAgICB9LFxyXG4gICAgY2hhdENvbnRhaW5lciA6IHtcclxuICAgICAgICBoZWlnaHQgOiAnODUlJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nIDogJzAuNXZ3IDV2dycsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnI2QwZDBkMCcsXHJcbiAgICAgICAgb3ZlcmZsb3dZIDogJ3Njcm9sbCcsXHJcbiAgICAgICAgb3ZlcmZsb3dYIDogJ2hpZGRlbidcclxuICAgIH0sXHJcbiAgICBpbnB1dEJveCA6IHtcclxuICAgICAgICB3aWR0aCA6ICc2MHZ3JyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzJ2aCdcclxuICAgIH0sXHJcbiAgICBidWJibGUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlciA6ICd0aGljayAjOGE4YThhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXMgOiAnMTVweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJyM4ZThlOGUnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnNXB4IDEycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6ICcwcHggNnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzYwdncnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgbXlCdWJibGUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlciA6ICd0aGljayAjOGE4YThhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXMgOiAnMTVweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJyM3ODlmZmYnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnNXB4IDEycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6ICcwcHggNnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzYwdncnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgY2hhdEJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nIDogJzJweCcsXHJcblxyXG4gICAgfSxcclxuICAgIE90aGVyQXZhdGFyIDoge1xyXG4gICAgICAgIGNvbG9yIDogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdibGFjaycsXHJcbiAgICB9LFxyXG4gICAgbXlBdmF0YXIgOiB7XHJcbiAgICAgICAgY29sb3IgOiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJyMyNzY0ZmYnLFxyXG4gICAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdWVzdGJvb2socHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZSddKTtcclxuXHJcbiAgICBjb25zdCB7aXNMb2FkaW5nICxcclxuICAgICAgICB0b29GYXN0U25hY2ssIHNldFRvb0Zhc3RTbmFjayxcclxuICAgICAgICBkZWxldGVkU25hY2ssIHNldERlbGV0ZWRTbmFjayxcclxuICAgICAgICBlcnJvclNuYWNrLCBzZXRFcnJvclNuYWNrLFxyXG4gICAgICAgIHN1Y2Nlc3NTbmFjaywgc2V0U3VjY2Vzc1NuYWNrLFxyXG4gICAgICAgIG5vdExvZ2dlZFNuYWNrLCBzZXROb3RMb2dnZWRTbmFja30gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBpbnB1dCA6ICcnLFxyXG4gICAgICAgIGNoYXRMb2dzIDogW11cclxuICAgIH0pXHJcbiAgICBjb25zdCBsb2dSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnN0IGNoYXRDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnN0IHRyYW5zcG9ydGFibGVSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICBnZXRHdWVzdGJvb2tMaXN0KCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBbLi4ucmVzdWx0LmRhdGFdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0KTtcclxuICAgICAgICAgICAgbG9nUmVmLmN1cnJlbnQgPSBbLi4ubGlzdF07XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgY2hhdExvZ3MgOiBbLi4ubGlzdF19KTtcclxuICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3BlbiA6IHRydWUgLCBjb250ZW50IDogJ0dVRVNUIEJPT0sg66qp66GdIOu2iOufrOyYpOq4sCDsi6TtjKgnfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgICAgIGdldExpc3QoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZU9uRGVsZXRlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coYOyCreygnOyalOyyrSBJRCA6ICR7aWR9YCk7ICAgIC8vIGRi7J2YIF9pZOqwkuycvOuhnCDsgq3soJzsmpTssq3tlZjquLBcclxuICAgICAgICBkZWxldGVHdWVzdGJvb2soaWQpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0ID09PSAnZGVsZXRlZCcpIHNldFRpbWVvdXQoc2V0RGVsZXRlZFNuYWNrKHtvcGVuOnRydWV9KSwzMDAwKTtcclxuICAgICAgICAgICAgZ2V0TGlzdCgpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW4gOiB0cnVlICwgY29udGVudCA6ICfqtoztlZzsnbQg7JeG7Iq164uI64ukLiDri6Tsi5wg66Gc6re47J247ZW067O07IS47JqUJ30pO1xyXG4gICAgICAgICAgICBnZXRMaXN0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDEyMCkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIGlucHV0IDogdmFsdWV9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA+PSA5NSkge1xyXG4gICAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWUsIGNvbnRlbnQgOiBgMTIw6riA7J6QIOygnO2VnCwg7ZiE7J6sIDogJHt2YWx1ZS5sZW5ndGh9IOq4gOyekGB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBlbnRlcktleUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIGVudGVyIHByZXNzZWRcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dFJlZi5jdXJyZW50PyBpbnB1dFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJykgOiAnJztcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgY2hhdENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvKDAsY2hhdENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwb3N0IEFQSSAmIGdldCBBUElcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNwb3J0YWJsZVJlZi5jdXJyZW50ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb29GYXN0U25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEd1ZXN0Ym9vayhpbnB1dC52YWx1ZSxjb29raWVzLnByb2ZpbGUubmFtZSwgY29va2llcy5wcm9maWxlLnBpY3R1cmUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnRhYmxlUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDE1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnRhYmxlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VjY2Vzc1NuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZSwgY29udGVudDon6riAIOuTseuhneydgCDroZzqt7jsnbgg7ZuEIOydtOyaqe2VtOyjvOyEuOyalCA6KSAnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWUsIGNvbnRlbnQ6J+q4gCDrk7HroZ3snYAg66Gc6re47J24IO2bhCDsnbTsmqntlbTso7zshLjsmpQgOikgJ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbnRlcktleUhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicgLCBlbnRlcktleUhhbmRsZXIpO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGNvb2tpZXMucHJvZmlsZSA/IGNvb2tpZXMucHJvZmlsZS5lbWFpbD09PSdrd29uaDExQGdtYWlsLmNvbScgPyB0cnVlIDogZmFsc2UgOiBmYWxzZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezV9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0Q29udGFpbmVyfSByZWY9e2NoYXRDb250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tMb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICB7YEdVRVNUIEJPT0sgOiBcclxuICAgICAgICAgICAgICAgICAgICAgIExFQVZFIEEgTUVTU0FHRWB9LlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY2hhdExvZ3MubWFwKChhcnRpY2xlLGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXJ0aWNsZS5vd24gfHwgZW1haWwpID8gLy8g7ISc67KE7JeQ7IScIO2ZleyduOuQnCDrs7jsnbjqsozsi5zrrLzsnbwg6rK97JqwICAo7ISc67KE7LihIO2ZleyduO2VhOyalCDsiJjsoJXtm4Qg7KO87ISdIOyngOyasOq4sCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuCtOqwgCDrp5DtlojsnYQg6rK97JqwIOyYpOuluOyqvSDsoJXroKwsIHByb2ZpbGXsnZgg7J2066aE6rO8IOu5hOq1kCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGludGVyYWN0aXZlIHBsYWNlbWVudD0ncmlnaHQnIGtleT17aW5kZXh9IHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT25EZWxldGVDbGlja30gY29sb3I9J3ByaW1hcnknIHNpemU9J3NtYWxsJyBkYXRhLWlkPXthcnRpY2xlLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0Qm94fSBzdHlsZT17e2FsaWduU2VsZjonZmxleC1lbmQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5teUJ1YmJsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250U2l6ZTonMC41cmVtJywgbGluZUhlaWdodDonMC44J319PnthcnRpY2xlLmRhdGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMubXlBdmF0YXJ9IHNyYz17YXJ0aWNsZS5waWN0dXJlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuLpOuluOyCrOuejOuTpOydtCDrp5DtlZwg6rG0IOyZvOyqvSDsoJXroKxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0Qm94fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLk90aGVyQXZhdGFyfSBzcmM9e2FydGljbGUucGljdHVyZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5idWJibGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250U2l6ZTonMC41cmVtJywgbGluZUhlaWdodDonMC44J319PnthcnRpY2xlLmRhdGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEJveH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nbWVkaXVtJ1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgcmVmPXt2ID0+IGlucHV0UmVmLmN1cnJlbnQgPSB2fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbkd1ZXN0Ym9vay5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbCxcclxufSIsImltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgdGV4dENvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgY29sb3IgOiAnI2ZmZicsXHJcbiAgICAgICAgdGV4dFNoYWRvdzonMnB4IDEuNXB4IDEuNXB4IGdyYXknLFxyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUNhcm91c2VsIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaW1hZ2VMaXN0ID0gcHJvcHMubGlzdCA/IHByb3BzLmxpc3QgOiBbe31dO1xyXG4gICAgY29uc3Qge3NldFN0ZXBwZXIsIGN1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaGFuZGxlQWZ0ZXJTbGlkZSA9IChzbGlkZUluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0U3RlcHBlcihzbGlkZUluZGV4KTtcclxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoc2xpZGVJbmRleCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENhcm91c2VsXHJcbiAgICBzbGlkZUluZGV4PXtjdXJyZW50U2xpZGV9XHJcbiAgICBhZnRlclNsaWRlPSB7aW5kZXggPT4gaGFuZGxlQWZ0ZXJTbGlkZShpbmRleCl9XHJcbiAgICBhdXRvcGxheT17ZmFsc2V9XHJcbiAgICBhdXRvcGxheUludGVydmFsPXszMDAwfVxyXG4gICAgdHJhbnNpdGlvbk1vZGU9J3Njcm9sbCdcclxuICAgIHNwZWVkPXs4MDB9XHJcbiAgICBoZWlnaHRNb2RlPSdtYXgnXHJcbiAgICAgICAgPlxyXG4gICAge1xyXG4gICAgICAgIGltYWdlTGlzdC5tYXAoKGltYWdlLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCMke2luZGV4fSAke2ltYWdlLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPEJveCBzdHlsZT17e2hlaWdodDonMTAwJSd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpbmRleD09PTA/IFxyXG4gICAgICAgICAgICAgICAgICAgICg8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0Q29udGFpbmVyfSBzdHlsZT17e2hlaWdodDonMTAwJScsIGFsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFVSUNLIFNUQVJUIEdVSURFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWtlIHlvdXIgd29yayBlYXNpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUdXJuIHRoZSBzbGlkZSBvdmVyIGFuZCBjaGVjay5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBjb25zaXN0cyBvZiBhIGZldyBzbGlkZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+KVxyXG4gICAgICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e2ltYWdlLnNyY30vPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgPC9DYXJvdXNlbD5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5JbWFnZUNhcm91c2VsLnByb3BUeXBlcyA9IHtcclxuICAgIHNldFN0ZXBwZXIgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY3VycmVudFNsaWRlIDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgc2V0Q3VycmVudFNsaWRlIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJveCAsIEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBtYXJnaW46MCxcclxuICAgICAgcGFkZGluZzonMXZ3JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpbjonYXV0bycsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyb3NzbGluZSh7Y2hpbGRyZW59KSB7XHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRGYWRlKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTUwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoyMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGJveFNoYWRvdz17NH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcm93LCBCb3gsIFR5cG9ncmFwaHkgLCBEaXZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3QgOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzM1dmgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94MSA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBjb2xvcjonI2VhZWFlYScsXHJcbiAgICAgICAgbWFyZ2luVG9wIDogJy01dmgnLFxyXG4gICAgICAgIHRleHRTaGFkb3c6ICcxcHggNHB4IDRweCAjOWU5OTk5J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94MiA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBjb2xvcjonI2VhZWFlYScsXHJcbiAgICAgICAgbWFyZ2luVG9wIDogJy01dmgnLFxyXG4gICAgICAgIHRleHRTaGFkb3c6ICcxcHggNHB4IDRweCAjOWU5OTk5J1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIG1heFdpZHRoIDogJzUwdncnLFxyXG4gICAgICAgIG1hcmdpblRvcDonM3ZoJ1xyXG4gICAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgIHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICl9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJzE1MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94MX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgIEdVRVNUQk9PS1xyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25Cb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBndXR0ZXJCb3R0b20+7ZWc7KSEIOuwqeuqheuhneydhCDsnpHshLHtlbTrs7TshLjsmpQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPuqwnOuwnOyekCDrmJDripQg7Jyg7KCA65Ok7JeQ6rKMPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz7tlLzrk5zrsLHsnbTrgpgg7J247IKs66W8IOqxtOuEpOuztOyEuOyalC48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPuu2iO2OuOyCrO2VreydtOuCmCDqsJzshKDsoJDrk7HsnYQg7JWM66Ck7KO87Iuc66m0IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+7ISc67mE7Iqk66W8IOqwnOyEoO2VmOuKlOuNsCDrj4Tsm4DsnbQg65Cp64uI64ukLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGZsZXhJdGVtIHN0eWxlPXt7d2lkdGg6JzFweCcsaGVpZ2h0Oic2MCUnLCBiYWNrZ3JvdW5kQ29sb3I6JyM5ZTk5OTknfX0vPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lckJveDJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgIE1BTkFHRU1FTlRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbkJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGd1dHRlckJvdHRvbT7sib3qsowg642w7J207YSw6rSA66as66W8IO2VtOuztOyEuOyalDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+7J6F66ClLOyImOyglSzsgq3soJws64K067O064K06riwLOq3uOujue2ZlCDrk7HsnZgg6riw64qlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz7qtazquIDqs4TsoJXsnLzroZwgUEPrp4wg7J6I64uk66m0IOyWtOuUlOyEnOuToCA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPuuPmeydvO2VnCDrjbDsnbTthLDrpbwg6rSA66as7ZWgIOyImCDsnojsirXri4jri6QuIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+64uk7JaR7ZWY6rKMIO2ZnOyaqe2VtOuztOyEuOyalCA6KTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD4gICAgICBcclxuICAgICAgICA8L0dyb3c+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gXCIuL0ludHJvZHVjdGlvblwiO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uMiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb24yXCI7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtpc0xvYWRpbmd9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24yLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Ib21lLnByb3BUeXBlcyA9IHtcclxuICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiaW1wb3J0IGVhc3lMb2dpbiBmcm9tIFwiLi4vaW1hZ2VzL2Vhc3ktbG9naW4ucG5nXCI7XHJcbmltcG9ydCBsaW5rTWFuYWdlbWVudFBhZ2UgZnJvbSBcIi4uL2ltYWdlcy9saW5rLW1hbmFnZW1lbnQtcGFnZS5wbmdcIjtcclxuaW1wb3J0IHN0YXJ0UmlnaHRBd2F5IGZyb20gXCIuLi9pbWFnZXMvc3RhcnQtcmlnaHQtYXdheS5wbmdcIjtcclxuaW1wb3J0IG1ha2VIZWFkZXJzIGZyb20gXCIuLi9pbWFnZXMvbWFrZS1oZWFkZXJzLnBuZ1wiO1xyXG5pbXBvcnQgaGFuZGxlVGFibGUgZnJvbSBcIi4uL2ltYWdlcy9oYW5kbGUtdGFibGUucG5nXCI7XHJcbmltcG9ydCB1c2VNeW1lbnUgZnJvbSBcIi4uL2ltYWdlcy9teW1lbnUucG5nXCI7XHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1F1aWNrIHN0YXJ0IGd1aWRlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdHVUlERScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnU2lnbiBpbiB3aXRoIEdvb2dsZScsXHJcbiAgICAgICAgc3JjIDogYCR7ZWFzeUxvZ2lufWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnU2lnbiBpbiB3aXRoIGdvb2dsZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnTW92ZSBvbiB0byBtYW5hZ2VtZW50IHBhZ2UnLFxyXG4gICAgICAgIHNyYyA6IGAke2xpbmtNYW5hZ2VtZW50UGFnZX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ01vdmUgb24gdG8gbWFuYWdlbWVudCBwYWdlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdDbGljayB0aGUgYmx1ZSBidXR0b24nLFxyXG4gICAgICAgIHNyYyA6IGAke3N0YXJ0UmlnaHRBd2F5fWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnY2xpY2sgXCJnZXQgc3RhcnRlZCByaWdodCBhd2F5XCIgYnV0dG9uJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdNYWtlIEhlYWRlcnMnLFxyXG4gICAgICAgIHNyYyA6IGAke21ha2VIZWFkZXJzfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnbWFrZSBoZWFkZXJzJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnQ3JlYXRlLCBFZGl0LCBSZW1vdmUgdGFibGUgcmVjb3JkcycsXHJcbiAgICAgICAgc3JjIDogYCR7aGFuZGxlVGFibGV9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdoYW5kbGUgdGFibGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1VzZSBteW1lbnUgdG8gaGFuZGxlIGRhdGEnLFxyXG4gICAgICAgIHNyYyA6IGAke3VzZU15bWVudX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ3VzZSBteW1lbnUnLFxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JvdyAsIEJveCwgUGFwZXIsRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5pbXBvcnQgaW1hZ2VMaXN0IGZyb20gJy4vSW1hZ2VTbGlkZVNvdXJjZXMnO1xyXG5pbXBvcnQgTGlzdENyb3VzZWxEZXNjcmlwdGlvbiBmcm9tICcuL0xpc3RDYXJvdXNlbERlc2NyaXB0aW9uJztcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL3doaXRlYmFja2dyb3VuZC5qcGcnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDc1MCxcclxuICAgICAgICBtYXhXaWR0aDogJzEwMDBweCcsXHJcbiAgICAgICAgd2lkdGggOiAnNzB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzY1dmgnLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJ2luaGVyaXQnXHJcbiAgICB9LFxyXG4gICAgdGV4dFBhcGVyIDoge1xyXG4gICAgICAgIG1pbldpZHRoIDogNDAwLFxyXG4gICAgICAgIHdpZHRoIDogJzcwdncnLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidpbmhlcml0J1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3N0ZXBwZXIsIHNldFN0ZXBwZXJdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjozMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9IFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgey8qIGltYWdlIGNhcm91c2VsICovfVxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VDYXJvdXNlbCBcclxuICAgICAgICAgICAgICAgICAgbGlzdD17aW1hZ2VMaXN0fSBcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlPXtjdXJyZW50U2xpZGV9IFxyXG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U2xpZGU9e3NldEN1cnJlbnRTbGlkZX0gXHJcbiAgICAgICAgICAgICAgICAgIHNldFN0ZXBwZXI9e3NldFN0ZXBwZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDIwMDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH19IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBsaXN0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Q3JvdXNlbERlc2NyaXB0aW9uIHN0ZXBwZXI9e3N0ZXBwZXJ9ID48L0xpc3RDcm91c2VsRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IFBhcGVyLCBCb3gsIEdyb3csIEF2YXRhciwgVHlwb2dyYXBoeSxGYWRlICwgU2xpZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgbW9vbkltYWdlIGZyb20gJy4uL2ltYWdlcy9tb29uLnBuZyc7XHJcbmltcG9ydCBDcm9zc2xpbmUgZnJvbSAnLi9Dcm9zc2xpbmUnO1xyXG5pbXBvcnQgUHJvamVjdERlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvYmxhY2sucG5nJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcidcclxuICAgIH0sXHJcbiAgICBsb2dvQm94IDoge1xyXG4gICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93J1xyXG4gICAgfSxcclxuICAgIGJpZ0F2YXRhciA6IHtcclxuICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICB9LFxyXG4gICAgdGV4dFdpdGhTaGFkb3cgOiB7XHJcbiAgICAgIGNvbG9yOicjZmZmJyxcclxuICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICBtYXJnaW5MZWZ0OicydncnLFxyXG4gICAgICB0ZXh0U2hhZG93OiAnMXB4IDVweCA1cHggIzllOTk5OSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbkJveCA6IHtcclxuICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXhXaWR0aCA6ICc1MHZ3JyxcclxuICAgICAgbWFyZ2luIDogJzAgMCAwIDN2dydcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjoyMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICA8Q3Jvc3NsaW5lPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQm94fT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2dyb3d9IHsuLi4oZ3Jvdz8ge3RpbWVvdXQ6e2VudGVyOjUwMDAsIGV4aXQ6ODAwfX0gOiB7fSl9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PSdoZWxwJyBzcmM9e21vb25JbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0F2YXRhcn0vPlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYnV0dG9uJyBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFdpdGhTaGFkb3d9PiBNYW5hZ2VtZW50IEFwcCA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbkJveH0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5BbiBhcHBsaWNhdGlvbiB0aGF0IHlvdSBjYW4gZWFzaWx5IGNyZWF0ZSAmIGRlc2lnbiB5b3VyIG93biBkYXRhLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPkdldCBzdGFydGVkIHdpdGggeW91ciBHb29nbGUgYWNjb3VudCE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5UaGlzIGFwcCB3aWxsIG5vdCBrZWVwIGFueSBwZXJzb25hbCBpbmZvcm1hdGlvbi48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ3Jvc3NsaW5lPlxyXG4gICAgICAgICAgPFByb2plY3REZXNjcmlwdGlvbi8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7VHlwb2dyYXBoeSAsIFN0ZXBwZXIsIFN0ZXAsIEJveCwgU3RlcExhYmVsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzbGlkZVNvdXJjZSBmcm9tICcuL0ltYWdlU2xpZGVTb3VyY2VzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcidcclxuICAgIH0sXHJcbiAgICBpbmxpbmU6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uTGlzdCAoe3N0ZXBwZXJ9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8U3RlcHBlciBhY3RpdmVTdGVwPXtzdGVwcGVyfSBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonaW5oZXJpdCd9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVNvdXJjZS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwIGNvbXBsZXRlZD17aW5kZXggPCBzdGVwcGVyfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cclxuICAgICAgICAgICAgICAgICAgICApfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TdGVwcGVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5EZXNjcmlwdGlvbkxpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcHBlciA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdGFydEJ1dHRvbiBmcm9tIFwiLi9TdGFydEJ1dHRvblwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2Rlc2suanBnXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICByb290TWFyZ2luIDogJy0zNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudCA/ICdXRUxDT01FJyA6ICdSZWFkeSB0byBzdGFydD8nfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50PyBudWxsIDogKDxTdGFydEJ1dHRvbi8+KX1cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7QnV0dG9uICwgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFBsYXlBcnJvd1NoYXJwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICcwLjV2aCdcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcycHggMXB4IDFweCBncmF5JyxcclxuICAgICAgICBjb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9tYW5hZ2VtZW50JyBzdHlsZT17e3RleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFBsYXlBcnJvd1NoYXJwIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRTaXplIDogMzB9fS8+fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFycm93LmQwODMyOGY2MmQxOWI2NmY4ZWE4ZDZkMDA2NzI0YzhiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJibGFjay4zZjAyYTEzMjczODcwMDIyNmM4NGVkMWY1ODYzZDU5YS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGVzay4zMjA3YzFlZjk0Yzg2N2Y4MGIwZTlkZjZhYzc4ZDUyYi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWFzeS1sb2dpbi4zZTkxYjhkODg3MzU2ODkwNzlhZmQwNzZlM2UwNzQyMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaGFuZGxlLXRhYmxlLjNjNTg2OTE0YTk2ZDRhZmVkZGM1YzdhZDNkN2RmMzU0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsaW5rLW1hbmFnZW1lbnQtcGFnZS40ODAwNGQxMzNiNWZjMjI1Nzc3MDRjOTVlYjM1ZjNkOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFrZS1oZWFkZXJzLmNmZmFjNjM0ZjI5ZDM4ZGRiZDFmNDQ2N2E1NzNlYmM0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYW5hZ2VtZW50LWJhY2tncm91bmQuYTAwOGRlODEzOTU4MWIwZGFiZjE4MzJlZDFjOWM0NmUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1vb24uZjIwNmJjM2Q1YmU4MzExYzc3ZDk4OTdkYTQ0ZTFmNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm15bWVudS45ZmRkNThhY2E3NGViNDhkOTU1ZjgzNWM5ZWM4Nzk2ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhcnQtcmlnaHQtYXdheS40ZTIxNzI2MmQyYzhkODZkNWUwZjZlZTQzMmFlZmJjZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2hpdGUtYXJyb3cuYzQ0MjJhN2JjNWVlMjNkMDgxYjM1NjZmOTNlOTFmMWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndoaXRlYmFja2dyb3VuZC5mYjE0MGY1ZTgxMGRjMjE0NmRhZDFiNmYwM2NhZjljOC5qcGdcIjsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzJ1xyXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgKDxDb29raWVzUHJvdmlkZXI+XHJcbiAgICAgICAgPEFwcC8+XHJcbiAgICA8L0Nvb2tpZXNQcm92aWRlcj4pXHJcbiAgICAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEZhZGUsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDEpXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uQ29udGFpbmVyIDoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHRleHRTaGFkb3cgOiAnMC41cHggMC41cHggMXB4ICMwMDAwMDA1YycsXHJcbiAgICAgICAgbWFyZ2luIDogJzAgMXZ3IDEuN3ZoJyxcclxuICAgICAgICBjb2xvcjogJyM2YTc0OGMnLFxyXG4gICAgfSxcclxufSkpO1xyXG5jb25zdCBkZWZhdWx0RGF0YSA9IHtcclxuICAgIGNvbHVtbnMgOiBbXHJcbiAgICAgIHsgdGl0bGU6ICdOYW1lJywgZmllbGQ6ICdOYW1lJyAsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAgeyB0aXRsZTogJ1N1cm5hbWUnLCBmaWVsZDogJ1N1cm5hbWUnIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdCaXJ0aCBZZWFyJywgZmllbGQ6ICdCaXJ0aCBZZWFyJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnUGhvbmUnICwgZmllbGQ6J1Bob25lJywgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7IHRpdGxlOiAnR2VuZGVyJywgZmllbGQ6ICdHZW5kZXInLCBncm91cGluZzp0cnVlIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdNZW1vJyAsIGZpZWxkOidNZW1vJ31cclxuICAgIF0sXHJcbiAgICBkYXRhIDogW1xyXG4gICAgICB7IFwiTmFtZVwiOiAnTWVobWV0JywgJ1N1cm5hbWUnOiAnQmFyYW4nLCBcIkJpcnRoIFllYXJcIjogMTk4MywgXCJQaG9uZVwiOicwMTA0NjUwOTk5NScgLFwiR2VuZGVyXCI6IDEgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdBZGFtJywgJ1N1cm5hbWUnOiAnQWRhbScsIFwiQmlydGggWWVhclwiOiAxOTg0LCBcIlBob25lXCI6JzAxMDQ2NTA5Nzk1JyAsXCJHZW5kZXJcIjogMiAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ01laG1ldCcsICdTdXJuYW1lJzogJ0F0b20nLCBcIkJpcnRoIFllYXJcIjogMTk4NSwgXCJQaG9uZVwiOicwMTA0NjUwOTY5NScgLFwiR2VuZGVyXCI6IDEgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdtdWwnLCAnU3VybmFtZSc6ICdLb25nbmEnLCBcIkJpcnRoIFllYXJcIjogMTk5NSwgXCJQaG9uZVwiOicwMTA0NjUwOTE5NScgLFwiR2VuZGVyXCI6IDEgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdKYWNrJywgJ1N1cm5hbWUnOiAnSmFjaycsIFwiQmlydGggWWVhclwiOiAxOTg3LCBcIlBob25lXCI6JzAxMDQ2NTA5Mjk1JyAsXCJHZW5kZXJcIjogMiAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ0JvYicsICdTdXJuYW1lJzogJ0JvYicsIFwiQmlydGggWWVhclwiOiAxOTg4LCBcIlBob25lXCI6JzAxMDQ2NTA5Mzk1JyAsXCJHZW5kZXJcIjogMiAsIFwiTWVtb1wiOicnfSxcclxuICAgIF1cclxuICB9XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmF1bHRQYWdlICh7c3RhdGUgLCBzZXRTdGF0ZSwgbWF0Y2h9KSB7XHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmFkZTIsIHNldEZhZGUyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uREVNT0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSAsIGNvbHVtbnMgOiBkZWZhdWx0RGF0YS5jb2x1bW5zICwgZGF0YSA6IGRlZmF1bHREYXRhLmRhdGEsIGRlZmF1bHRQYWdlIDogIXN0YXRlLmRlZmF1bHRQYWdlfSk7XHJcbiAgICB9XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2V0RmFkZTIodHJ1ZSkgLCAxNTAwKTtcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlciA6IDgwMCwgZXhpdDo1MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY29sb3I9J2luaXRpYWwnIHN0eWxlPXt7dGV4dFNoYWRvdzonNXB4IDEuNXB4IDEuNXB4IGdyYXknfX0+XHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VtZW50IFRhYmxlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBndXR0ZXJCb3R0b20gc3R5bGU9e3t0ZXh0U2hhZG93OicycHggMnB4IDFweCBibGFjayd9fT4gXHJcbiAgICAgICAgICAgICAgICBZb3UgbWF5IHRyeSB0aGUgREVNTyBpZiB0aGlzIHlvdXIgZmlyc3QgdGltZSwgXHJcbiAgICAgICAgICAgICAgICBvciBnZXQgc3RhcnRlZCByaWdodCBhd2F5IVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxGYWRlIGluPXtmYWRlMn0gdGltZW91dD17e2VudGVyIDogMzAwMCwgZXhpdDo1MDB9fT5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtoYW5kbGVPbkRFTU9DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVU0UgREVNTyBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2hlYWRlcnMnIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRVQgU1RBUlRFRCBSSUdIVCBBV0FZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn1cclxuXHJcbkRlZmF1bHRQYWdlLnByb3BUeXBlcyA9IHtcclxuICAgIHN0YXRlIDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBkZWZhdWx0UGFnZSA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaGFzVGFibGUgOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGNvbHVtbnMgOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgZGF0YSA6IFByb3BUeXBlcy5hcnJheVxyXG4gICAgfSksXHJcbiAgICBzZXRTdGF0ZSA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuIiwiaW1wb3J0IHsgXHJcbiAgICBCb3ggLFBhcGVyLCBtYWtlU3R5bGVzLCBGYWRlLCBUZXh0RmllbGQsIFRvb2x0aXAsIFR5cG9ncmFwaHksIENoZWNrYm94XHJcbn1cclxuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGdcIjtcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQgeyBzYXZlSGVhZGVycyB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHsgZ2V0TWFuYWdlbWVudFRhYmxlIH0gZnJvbSAnLi4vdXRpbC9NYW5hZ2VtZW50QVBJJztcclxuaW1wb3J0IHVzZU9uRmlyc3RSZW5kZXIgZnJvbSAnLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTIwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnc3BhY2UtYXJvdW5kJyxcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnMTB2aCcsXHJcbiAgICB9LFxyXG4gICAgZm9ybVJvb3QgOiB7XHJcbiAgICAgICAgJyYgPiAqJzoge1xyXG4gICAgICAgICAgICBtYXJnaW46ICcwLjV2aCAxdncnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzYwY2gnLFxyXG4gICAgICAgICAgICBtaW5XaWR0aCA6ICc0MGNoJyxcclxuICAgICAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnMTB2aCcsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZCA6IGBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb250YWluJyxcclxuICAgICAgICBtYXJnaW5MZWZ0IDogJzN2dycsXHJcbiAgICAgICAgdHJhbnNmb3JtIDogJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb24gOiB7XHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcidcclxuICAgIH1cclxufSkpXHJcbmNvbnN0IGRlZmF1bHRIZWFkZXIgPSB7XHJcbiAgICBcImhlYWRlcjBcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIxXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyMlwiIDogJycsXHJcbiAgICBcImhlYWRlcjNcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI0XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNVwiIDogJycsXHJcbiAgICBcImhlYWRlcjZcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI3XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOFwiIDogJycsXHJcbiAgICBcImhlYWRlcjlcIiA6ICcnLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcnMgKHtpc0xvYWRpbmd9KSB7XHJcbiAgICAvLyBzdHlsZSwgY29va2llXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gUmVhY3QudXNlQ29udGV4dChQcm9ncmVzc0NvbnRleHQpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgICAvLyBzdGF0ZXNcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtyZXN1bHRTbmFjayAsIHNldFJlc3VsdFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlLCBjb250ZW50IDogJyd9KTtcclxuICAgIGNvbnN0IFtkYXRhICwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhZGVycyA6IGRlZmF1bHRIZWFkZXIsXHJcbiAgICAgICAgZ3JvdXBpbmdzIDogQXJyYXkoMTApLmZpbGwoZmFsc2UpLFxyXG4gICAgfSlcclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgZGF0YVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgLy8gY29uc3RydWN0b3JcclxuICAgIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgICAgICBnZXRNYW5hZ2VtZW50VGFibGUoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdMZW5ndGggPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyA/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzLmxlbmd0aCA6IDAgOiAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyBbLi4ucmVzcG9uc2UuZGF0YS5ncm91cGluZ3NdIDogW10gOiBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgLSBncm91cGluZ0xlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgOiB7fSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyc0xlbmd0aCA9IE9iamVjdC52YWx1ZXMoaGVhZGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGhlYWRlcnNMZW5ndGg7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tgaGVhZGVyJHtpfWBdID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7aGVhZGVycyxncm91cGluZ3N9O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoe2hlYWRlcnMsIGdyb3VwaW5nc30pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHsgIC8vIHVuYXV0aG9yaXplZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBQbGVhc2UgbG9nIGluIGFnYWluLmB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYGVycm9yIChjb2RlIDogJHtyZXNwb25zZS5zdGF0dXN9KWB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmhlYWRlcnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JvdXBpbmdzIDogW1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5ncm91cGluZ3NcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFtkYXRhLmhlYWRlcnMsIGRhdGEuZ3JvdXBpbmdzXSk7XHJcblxyXG4gICAgLy8gZWZmZWN0c1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57IFxyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU3VibWl0KGRhdGFSZWYuY3VycmVudC5oZWFkZXJzLCBkYXRhUmVmLmN1cnJlbnQuZ3JvdXBpbmdzLCB0cnVlKTtcclxuICAgICAgICAgICAgaGFuZGxlUHJvZ3Jlc3MocmVzdWx0ID09PSAnZXJyb3InID8gJ2Vycm9yJyA6ICdzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSk7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIC8vIGV2ZW50c1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChoZWFkZXJzLCBncm91cGluZ3MsIGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMoaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkpIHsgLy8gMTXquIDsnpAg7J207IOBIOygnO2VnCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLmxlbmd0aCA9PT0gMCkgeyAgICAgLy8g67mE7Ja07J6I7J2EIOqyveyasCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pXHJcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlSGVhZGVycyhoZWFkZXJzLGdyb3VwaW5ncylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNBdXRvU2F2ZSkgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLCBjb250ZW50IDogcmVzcG9uc2UucmVzdWx0fSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIFtgaGVhZGVyJHtpbmRleH1gXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlR3JvdXBpbmdzID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBncm91cGluZ3MgOiBkYXRhLmdyb3VwaW5ncy5tYXAoKHYsaSk9PiBpPT09aW5kZXg/IGUudGFyZ2V0LmNoZWNrZWQgOiB2KX0pO1xyXG4gICAgfVxyXG4gICAgLy8gY29tcG9uZW50XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlciA6IDE1MDB9fT5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs0fT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtUm9vdH0gYXV0b0NvbXBsZXRlPSdvZmYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdkaXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgY29sb3I9J3RleHRQcmltYXJ5JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgRWRpdCBGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29sb3I9e09iamVjdC52YWx1ZXMoZGF0YS5oZWFkZXJzKS5ldmVyeSh2ID0+IHYubGVuZ3RoIDw9IDE1KSA/ICdibHVlJyA6ICdyZWQnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb2xvcj0naW5pdGlhbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIHNob3VsZCBiZSBsZXNzIHRoYW4gMTUgbGV0dGVycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLm1hcCgoaGVhZGVyLGluZGV4KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aW5kZXg9PT0wPyB0cnVlOmZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2BoZWFkZXItJHtpbmRleCsxfWB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5oZWFkZXJzW2BoZWFkZXIke2luZGV4fWBdfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPSdub3JtYWwnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dENoYW5nZShlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF0ubGVuZ3RoID4gMTUgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJcclxuWW91IGNhbiBhcnJhbmdlIHRoZSBkYXRhIHdpdGggYSB2YWxpZCBoZWFkZXIsIFxyXG5VbmlxdWUgdmFsdWVzIGFyZSBub3QgY29tbW9ubHkgdXNlZCBmb3IgdGhpcyBmdW5jdGlvbiBpbiBnZW5lcmFsLlxyXG5lLmcuKSBuYW1lLCBhZGRyZXNzLCBtb2JpbGUgTk8uIGV0Yy5cclxuXCJcclxuICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J3JpZ2h0JyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezIwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RhdGEuZ3JvdXBpbmdzW2luZGV4XX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlR3JvdXBpbmdzKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4PT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+IEdyb3VwaW5nIT88L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTVUJNSVRcIiBhcmlhLWxhYmVsPSdzdWJtaXQnIHBsYWNlbWVudD0ndG9wJyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezQwMH0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbk1vdXNlT3Zlcj17KGUpPT5lLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlU3VibWl0KGRhdGEuaGVhZGVycyAsIGRhdGEuZ3JvdXBpbmdzKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e2BIZWFkZXIgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNSBsZXR0ZXJzIDooYH0gc3RhdHVzPVwiZXJyb3JcIi8+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3Jlc3VsdFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRSZXN1bHRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtyZXN1bHRTbmFjay5jb250ZW50fSBzdGF0dXM9e3Jlc3VsdFNuYWNrLnN0YXR1cz09PSdlcnJvcic/ICdlcnJvcicgOiAnc3VjY2Vzcyd9Lz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5IZWFkZXJzLnByb3BUeXBlcyA9IHtcclxuICAgIGlzTG9hZGluZyA6IFByb3BUeXBlcy5ib29sXHJcbn0iLCJpbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBNYXRlcmlhbFRhYmxlIGZyb20gJ21hdGVyaWFsLXRhYmxlJztcclxuaW1wb3J0IE1hbnVhbERpYWxvZyBmcm9tIFwiLi9NYW51YWxEaWFsb2dcIjtcclxuaW1wb3J0IHsgb3B0aW9ucyxsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9UYWJsZU9wdGlvbnNcIjtcclxuaW1wb3J0IHVzZU9uRmlyc3RSZW5kZXIgZnJvbSAnLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyJztcclxuaW1wb3J0IHsgZ2V0TWFuYWdlbWVudFRhYmxlIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgRGVmYXVsdFBhZ2UgZnJvbSAnLi9EZWZhdWx0UGFnZSc7XHJcbmltcG9ydCBwYXJzZURhdGEgZnJvbSAnLi4vdXRpbC9wYXJzZURhdGEnO1xyXG5pbXBvcnQgU2F2ZUJ1dHRvbiBmcm9tICcuL1NhdmVCdXR0b24nO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4uL2N1c3RvbUhvb2svU25hY2tCYXInO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbi8vIHVzZUVmZmVjdOuhnCBkYXRhLCBjb2x1bW5zIOqwgCDrs4Dqsr3rkKAg65WM66eI64ukIOyEnOuyhOyXkCDsoIDsnqUg7ZuEIOqwseyLoFxyXG4vLyAuL3V0aWwg6rK966Gc7JeQIOuhnOyngSDsnpHshLFcclxuLy8g7Ya17Iug7JeQIOuMgO2VnCB0ZXN0Y29kZeyekeyEsVxyXG4vLyBjb2x1bW5z7JmAIGRhdGHsnZgg6rCBIOqwkuuTpOyXkCDrjIDtlZwg66y06rKw7ISxIOyytO2BrFxyXG4vLyBwcm9wc1R5cGUg7J6R7ISxXHJcbi8vIFNpZGVNZW51TGlzdCA9PiBMb2dpbuycvOuhnCDrs4Dqsr0sIOu5hOuhnOq3uOyduCDsi5wgTE9HSU7snLzroZwg67O07J28IOqygywg66Gc6re47J247IucIE1ZIE1FTlXroZwg67O06riwXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlbWVudFRhYmxlKHtpc0xvYWRpbmcsIHNldEVycm9yU25hY2t9KSB7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gUmVhY3QudXNlQ29udGV4dChQcm9ncmVzc0NvbnRleHQpO1xyXG4gIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJ10pO1xyXG4gIC8vIHN0YXRlc1xyXG4gIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pO1xyXG4gIGNvbnN0IFtzYXZlZFNuYWNrICwgc2V0U2F2ZWRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gIGNvbnN0IFtkaWFsb2csIHNldERpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7ICAvLyDstZzstIggQVBJ66GcIOuwm+yVhOyYpOuKlCDrj5nsnpHtlYTsmpRcclxuICAgIGRlZmF1bHRQYWdlIDogdHJ1ZSxcclxuICAgIGhhc1RhYmxlIDogZmFsc2UsXHJcbiAgICBjb2x1bW5zOiBbXSxcclxuICAgIGRhdGE6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRhYmxlUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgICBnZXRNYW5hZ2VtZW50VGFibGUoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc3RhdHVzIDogJHtyZXNwb25zZS5zdGF0dXN9ICwgZGF0YSA6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSl9YCk7XHJcbiAgICAgICAgICAvLyDsnKDsoIAg7ZmV7J2465CQ6rOgIO2FjOydtOu4lOuPhCDruYTslrTsnojsp4Ag7JWK7J2EIOqyveyasFxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cz09PTIwMCAmJiByZXNwb25zZS5kYXRhLmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3NldFNuYWNrKHtvcGVuOnRydWV9KX0sNDAwKTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGNvbHVtbnMgOiBwYXJzZURhdGEocmVzcG9uc2UuZGF0YS5oZWFkZXJzICwgcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MpLFxyXG4gICAgICAgICAgICAgIGRhdGEgOiByZXNwb25zZS5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFBhZ2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgICBoYXNUYWJsZSA6IHRydWV9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZSwgY29udGVudDon642w7J207YSw66W8IOu2iOufrOyYpOuKlCDspJEg7JeQ65+sIOuwnOyDnS4nfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBldmVudHNcclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtzZXREaWFsb2coe29wZW4gOiBmYWxzZX0pO307XHJcbiAgY29uc3QgaGFuZGxlT25TYXZlID0gKGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgLy8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciDsnZggcmVm7JeQ7IScIOyLoOuisOuPhOyeiOuKlCDrjbDsnbTthLAg7LC47KGwXHJcbiAgICAgIGlmICghY29va2llcy5wcm9maWxlKSB7XHJcbiAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlLCBjb250ZW50OifsoIDsnqXsnYAg66Gc6re47J24IOuovOyggCDsp4TtlontlbTso7zshLjsmpQgOiknfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25vdCBsb2dnZWQnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICBjb25zdCBncm91cGluZ3MgPSBbXTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlci5jb2x1bW5zLnJlZHVjZSgob2JqLHYsaSk9PntcclxuICAgICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9LHt9KVxyXG4gICAgICAgIHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuZGF0YS5mb3JFYWNoKCh2LGkpPT57XHJcbiAgICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2F2ZURhdGEoaGVhZGVycywgZ3JvdXBpbmdzLCBkYXRhKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICBpZihyZXNwb25zZS5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICBpZighaXNBdXRvU2F2ZSkgc2V0U2F2ZWRTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3Igb2NjdXJlZCBkdXJpbmcgaGFuZGxlT25TYXZlIDogJHtlcnJ9YCk7XHJcbiAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZSwgY29udGVudDon66Gc6re47J24IOyLnOqwhOydtCDrp4zro4zrkJwg6rKDIOqwmeyKteuLiOuLpC4g64uk7IucIOyLnOuPhO2VtOuztOyEuOyalCd9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBlZmZlY3RzXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHsgICAvLyB3aW5kb3cg642U67iU7YG066atIOydtOuypO2KuCDstpTqsIAsIOuPhOybgOunkCBvcGVuXHJcbiAgICBjb25zdCBvbmRiQ2xpY2sgPSAoKSA9PiBzZXREaWFsb2coe29wZW4gOiAhZGlhbG9nLm9wZW59KTtcclxuICAgIGNvbnN0IG9uS2V5ZG93biA9IChlKSA9PiB7ICAgLy8gY3RybCArIHProZwg7KCA7J6lIGV2ZW50XHJcbiAgICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0ubWF0Y2goXCJNYWNcIikgPyBlLm1ldGFLZXkgOiBlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSA4Mykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoYW5kbGVPblNhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XHJcbiAgICAgIC8vIOy0iOq4sOygkeq3vOydmCDqsr3smrAg642w7J207YSw6rCAIOyXhuyWtCDsl5Drn6wg67Cc7IOd7ZWgIOyImCDsnojslrQg7IK87ZWt7Iud7Jy866GcIO2MkOuLqCDtm4Qg7Ja466eI7Jq07Yq47Iuc7J2YIGZldGNoQVBJ7Iuk7ZaJXHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyID8gaGFuZGxlT25TYXZlKHRydWUpIDogbnVsbCA6IG51bGw7XHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyID8gaGFuZGxlUHJvZ3Jlc3MoJ3N1Y2Nlc3MnKSA6IG51bGwgOiBudWxsO1xyXG4gIH07XHJcbn0sIFtdKTtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuICBjb25zdCBNYXJnaW4gPSAoKSA9PiAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0+PC9Cb3g+KTsgIC8vIOyXrOuwsVxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAge1xyXG4gICAgc3RhdGUuZGVmYXVsdFBhZ2UgP1xyXG4gICAgICAoPERlZmF1bHRQYWdlIHN0YXRlPXtzdGF0ZX0gc2V0U3RhdGU9e3NldFN0YXRlfS8+KVxyXG4gICAgOiBcclxuICAgICg8Qm94PlxyXG4gICAgICAgIDxNYW51YWxEaWFsb2cgb3Blbj17ZGlhbG9nLm9wZW59IG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfS8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgIHRhYmxlUmVmPXt0YWJsZVJlZn1cclxuICAgICAgdGl0bGU9e1xyXG4gICAgICA8U2F2ZUJ1dHRvbiBzZXRTYXZlZFNuYWNrPXtzZXRTYXZlZFNuYWNrfVxyXG4gICAgICBzZXRFcnJvclNuYWNrPXtzZXRFcnJvclNuYWNrfVxyXG4gICAgICBwcm9maWxlPXtjb29raWVzLnByb2ZpbGV9XHJcbiAgICAgIC8vIOuniOyatO2KuCDsnbTtm4Tsl5Ag7KCR6re87ZWE7JqUXHJcbiAgICAgIGRhdGFNYW5hZ2VyPXt0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA6IHt9fS8+XHJcbiAgICB9XHJcbiAgICAgIGNvbHVtbnM9e3N0YXRlLmNvbHVtbnN9XHJcbiAgICAgIGRhdGE9e3N0YXRlLmRhdGF9XHJcbiAgICAgIGxvY2FsaXphdGlvbj17bG9jYWxpemF0aW9ufSAvLyDroZzsu6zrnbzsnbTspohcclxuICAgICAgb3B0aW9ucz17b3B0aW9uc30gLy8g64K067O064K06riwLCDqt7jro6jtlZFcclxuICAgICAgYWN0aW9ucz17Wy8vIOupgO2LsCDshYDroInshZgg7J6R7JeFXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b29sdGlwIDogJ1JlbW92ZSB0aGUgU2VsZWN0ZWQgcm93KHMpJyxcclxuICAgICAgICAgICAgaWNvbiA6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICBvbkNsaWNrIDogKGUgLCBkZWxldGlvbnMpID0+IHsgIC8vIOyEoO2Dne2VnCDssrTtgazrsJXsiqTsl5Ag64yA7ZW0IOuqqOuRkCDsgq3soJwg7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZih2KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZEYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucHJldkRhdGEgLCBkYXRhfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdfSBcclxuICAgICAgZWRpdGFibGU9e3tcclxuICAgICAgICBvblJvd0FkZDogKG5ld0RhdGEpID0+ICAvLyDstpTqsIBcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgb25Sb3dVcGRhdGU6IChuZXdEYXRhLCBvbGREYXRhKSA9PiAgLy8g7IiY7KCVXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAob2xkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgICAgZGF0YVtkYXRhLmluZGV4T2Yob2xkRGF0YSldID0gbmV3RGF0YTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nbmVlZCBzb21lIGhlbHA/ID8gZG91YmxlLWNsaWNrIGFueSBzcGFjZSAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NhdmVkU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNhdmVkU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdTQVZFRCAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPC9Cb3g+XHJcbiAgICApfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5NYW5hZ2VtZW50VGFibGUucHJvcFR5cGVzID0ge1xyXG4gIGlzTG9hZGluZyA6IFByb3BUeXBlcy5ib29sXHJcbn0iLCJcclxuaW1wb3J0IHtEaWFsb2csXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIExpc3QsXHJcbiAgICBMaXN0SXRlbSxcclxuICAgIExpc3RJdGVtVGV4dCxcclxuICAgIEJveCxcclxuICAgIG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgICBpY29uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzN2dydcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFudWFsRGlhbG9nIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7b3Blbiwgb25DbG9zZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGljb25zID0gW1xyXG4gICAgICAgIHtpY29uIDogJ2FkZF9ib3gnICwgZGVzY3JpcHRpb24gOiAnW0FkZF0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnW0VkaXRdIHJlY29yZHMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2VhcmNoJyAsIGRlc2NyaXB0aW9uIDogJ1R5cGUgZG93biB3b3JkcyB0byBbc2VhcmNoXS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzYXZlX2FsdCcgLCBkZXNjcmlwdGlvbiA6ICdbRG93bmxvYWRdIGZpbGVzIGluIENWUyBmb3JtYXQuJ30sXHJcbiAgICAgICAge2ljb24gOiAndmlld193ZWVrJyAsIGRlc2NyaXB0aW9uIDogJ1tTZWxlY3RdIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW2RlbGV0ZV0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjaGVja19ib3gnICwgZGVzY3JpcHRpb24gOiAnIOKRoCBTZWxlY3QgdGhlIGNoZWNrYm94IG9uIHRoZSByb3cuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZmFjdF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENoZWNrIHRoZSBudW1iZXIgb2YgdGhlIHJvd3Mgc2VsZWN0ZWQuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZGVsZXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaIgQ2xpY2sgdGhlIEJpbiBpY29uIG9uIHRoZSByaWdodCBhYm92ZS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdwbGF5bGlzdF9hZGRfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBbRWRpdF0gaGVhZGVycy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdtZW51JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgT3BlbiBNWVBBR0UnfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDbGljayB0aGUgUGVuY2lsIGljb24nfSxcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPERpYWxvZyBvbkNsb3NlPXtvbkNsb3NlfSBvcGVuPXtvcGVufT5cclxuICAgICAgICA8RGlhbG9nVGl0bGU+IEJBU0lDIE1BTlVBTCA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpY29ucy5tYXAoKGljb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtgJHtpY29ufSArICR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3BhbicgY2xhc3NOYW1lPXtgbWF0ZXJpYWwtaWNvbnMgJHtjbGFzc2VzLmljb259YH0gc3R5bGU9e3t3aWR0aDonM3Z3J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpY29uLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICAgKVxyXG59XHJcbk1hbnVhbERpYWxvZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGVuIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2UgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIFRvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmVCdXR0b24gKHtzZXRTYXZlZFNuYWNrICwgZGF0YU1hbmFnZXIsIHByb2ZpbGUsIHNldEVycm9yU25hY2t9KSB7XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrICgpIHtcclxuICAgICAgICAgIGlmICghcHJvZmlsZSkge1xyXG4gICAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWUgLCBjb250ZW50OifroZzqt7jsnbgg66i87KCAIOynhO2Wie2VtOyjvOyEuOyalCA6KSd9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBsb2dnZWQnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFNBVkUgRVZFTlQgdXRpbCA+IE1hbmFnZW1lbnRBUEkuc2F2ZURhdGEg66eM65Ok7Ja07IScIOy9nO2VmOq4sFxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICB9LHt9KTtcclxuICAgICAgICAgIGRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgIHJlc3VsdCA6IFxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShkYXRhKX1cclxuICAgICAgICAgICR7Z3JvdXBpbmdzfVxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgICAgICBgKVxyXG4gICAgICAgIHNhdmVEYXRhKGhlYWRlcnMsZ3JvdXBpbmdzLGRhdGEpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8VG9vbHRpcCB0aXRsZT0nQ2xpY2sgdG8gU0FWRSAoIEN0cmwgKyBTICknPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBcclxuICAgICAgICBvbkNsaWNrPXsoKT0+b25DbGljaygpfT5cclxuICAgICAgICAgIFNBVkVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKVxyXG59XHJcblxyXG5TYXZlQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBzZXRTYXZlZFNuYWNrIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBkYXRhTWFuYWdlciA6IFByb3BUeXBlcy5vYmplY3RcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7QWRkQm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG4vLyBEQVRBIFRBQkxFIE9QVElPTlNcclxuXHJcbiBleHBvcnQgY29uc3Qgb3B0aW9ucz0ge1xyXG4gICAgZXhwb3J0QnV0dG9uOiB0cnVlLFxyXG4gICAgZ3JvdXBpbmc6dHJ1ZSxcclxuICAgIHNlbGVjdGlvbjp0cnVlLFxyXG4gICAgaGVhZGVyU3R5bGU6eyBcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnNDb2x1bW5JbmRleDotMSwgIC8vIOyVoeyFmCDslYTsnbTsvZjsnITsuZhcclxuICAgIGNvbHVtbnNCdXR0b24gOiB0cnVlLCBcclxuICAgIGRlYm91bmNlSW50ZXJ2YWwgOiAxNjAsIC8vIOuhnOuUqeyLnOqwhFxyXG4gICAgcGFnZVNpemUgOiAxNSwgICAgICAgICAgLy8g7Y6Y7J207KeA7IKs7J207KaIXHJcbiAgICBwYWdlU2l6ZU9wdGlvbnMgOiBbNSwgMTUsIDMwLCA1MCwgMTAwXSwgLy8g7Y6Y7J207KaIIOyCrOydtOymiCDsooXrpZhcclxuICB9XHJcbiBleHBvcnQgY29uc3QgbG9jYWxpemF0aW9uID0ge1xyXG4gICAgcGFnaW5hdGlvbiA6IHsgbGFiZWxEaXNwbGF5ZWRSb3dzIDogJ3tjb3VudH0gcm93cyB8IHtmcm9tfS17dG99JyAsIH0sXHJcbiAgICB0b29sYmFyOiB7blJvd3NTZWxlY3RlZDogJ3swfSByb3cocykgc2VsZWN0ZWQnfSxcclxuICAgIGhlYWRlcjoge2FjdGlvbnM6ICdFZGl0J30sXHJcbiAgICBib2R5OiB7ZW1wdHlEYXRhU291cmNlTWVzc2FnZTogXHJcbiAgICAgICAgKFxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAge2BObyBSZWNvcmRzIHRvIGRpc3BsYXlgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIGVuZEljb249ezxBZGRCb3gvPn1cclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtgQ2xpY2sgdGhlIHBsdXMgaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUgZm9yIGEgbmV3IHJlY29yZC4gYH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICB9XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge1Rvb2xiYXIsIERyYXdlciAsIEJ1dHRvbiAsIEdyaWQsXHJcbiAgICAgRGl2aWRlciwgQXBwQmFyIGFzIEFwcGJhcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGlkZU9uU2Nocm9sbCBmcm9tIFwiLi4vY3VzdG9tSG9vay9IaWRlT25TY2hyb2xsXCI7XHJcbmltcG9ydCBTaWRlTWVudUxpc3QgZnJvbSBcIi4vU2lkZU1lbnVMaXN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgU2lnbk91dEJ1dHRvbiBmcm9tIFwiLi9TaWduT3V0QnV0dG9uXCI7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDoxOCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOjE4LFxyXG4gICAgfSxcclxuICAgIGxlZnQgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6MzAsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1zdGFydCdcclxuICAgIH0sXHJcbiAgICBjZW50ZXIgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgcmlnaHQgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6NDUsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1lbmQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nOmAwICR7dGhlbWUuc3BhY2luZygzKX1gXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2IChwcm9wcykge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVudSA6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yLCBvcGVuKSA9PiAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBmbGFnID0gb3Blbj8gc3RhdGVbYW5jaG9yXSA/IGZhbHNlIDogdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBmbGFnIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGFuY2hvciA9IHByb2ZpbGUubmFtZT8gJ01ZUEFHRScgOidMT0dJTic7XHJcbiAgICBjb25zdCBsaW5rcyA9IFsnZ3Vlc3Rib29rJywnbWFuYWdlbWVudCddO1xyXG4gICAgY29uc3QgTG9nb3V0QnRuID0gcHJvZmlsZS5uYW1lPyA8U2lnbk91dEJ1dHRvbi8+IDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGlkZU9uU2Nocm9sbCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxBcHBiYXIgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Ym94U2hhZG93Oidub25lJ319PlxyXG4gICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiBIb21lIDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7bGlua31gfSBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0ga2V5PXtsaW5rfT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4ge2xpbmt9IDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+PHNwYW4+PC9zcGFuPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FuY2hvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7TG9nb3V0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXIgb3Blbj17c3RhdGVbYW5jaG9yXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSB2YXJpYW50PSdwZXJzaXN0ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1NpZGVNZW51TGlzdCggey4uLnByb3BzLCBhbmNob3IgLHRvZ2dsZURyYXdlciAsIHByb2ZpbGV9ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwYmFyPlxyXG4gICAgICAgIDwvSGlkZU9uU2Nocm9sbD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUF2YXRhciAsIERpdmlkZXIsIExpc3RJdGVtLCBUeXBvZ3JhcGh5ICwgQXZhdGFyLCBJY29uQnV0dG9uICxcclxuICAgICBNb2RhbCwgQm94LCBCdXR0b24sXHJcbiAgICAgUGFwZXIsXHJcbiAgICAgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi9TaWduSW5CdXR0b24nO1xyXG5pbXBvcnQgZ29vZ2xlU2lnbmluSW1hZ2UgZnJvbSAnLi4vYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyc7XHJcbmltcG9ydCB7cmVkaXJlY3RHb29nbGVMb2dpbn0gZnJvbSAnLi4vdXRpbC9Mb2dpbkFQSSc7XHJcbmltcG9ydCB7RWRpdCwgSW5mbywgRGVsZXRlRm9yZXZlciwgV2FybmluZ30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQge0dsb2JhbFNuYWNrYmFyQ29udGV4dH0gZnJvbSAnLi4vYXBwJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxpc3QgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMjN2dycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnc3RhcnQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtVGV4dCA6IHtcclxuICAgICAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbGFyZ2VBdmF0YXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICB9LFxyXG4gICAgaW5saW5lIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnaW5saW5lJ1xyXG4gICAgfSxcclxuICAgIGxpc3RUZXh0IDoge1xyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsIDoge1xyXG4gICAgICAgIHRvcCA6ICc1MCUnLFxyXG4gICAgICAgIGxlZnQgOiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgbWluV2lkdGggOiA0MDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbW9kYWxSb3dCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBtb2RhbENvbEJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcidcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVMaXN0ICh7YW5jaG9yICwgdG9nZ2xlRHJhd2VyLCBwcm9maWxlfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlR2xvYmFsU25hY2tiYXIgPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbFNuYWNrYmFyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZW1haWxJbnB1dCwgc2V0RW1haWxJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrTG9naW4gKCkge1xyXG4gICAgICAgIHJlZGlyZWN0R29vZ2xlTG9naW4oKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2tNb2RhbCA9ICgpID0+IHNldE1vZGFsKHRydWUpO1xyXG4gICAgY29uc3QgaGFuZGxlT25DbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0RW1haWxJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZW1haWxJbnB1dCA9PT0gcHJvZmlsZS5lbWFpbCkge1xyXG4gICAgICAgICAgICBzYXZlRGF0YSh7fSxbXSxbe31dKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlR2xvYmFsU25hY2tiYXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBkYXRhLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgfSwxNTAwKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVHbG9iYWxTbmFja2Jhcih7XHJcbiAgICAgICAgICAgICAgICBvcGVuOnRydWUsIFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OidlcnJvcidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IHByb2ZpbGU/IHByb2ZpbGUubmFtZT8gdHJ1ZSA6IGZhbHNlIDogZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpc0xvZ2dlZD8gJ1BST0ZJTEUnIDogJ0xPR0lOIE1FTlUnfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG5cclxuICAgICAgICAgICAge2lzTG9nZ2VkPyBcclxuXHJcbiAgICAgICAgICAgICg8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3Byb2ZpbGUucGljdHVyZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlQXZhdGFyfSBhbHQ9e3Byb2ZpbGUubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9maWxlLm5hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGV4dH0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nRU1BSUwgOiAnIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0nc3BhbicgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvIGNvbG9yPSdwcmltYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdFRElUIEhFQURFUlMnLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2hlYWRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IGNvbG9yPSdwcmltYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmcgY29sb3I9J3NlY29uZGFyeScgc3R5bGU9e3ttYXJnaW5SaWdodDonMXZ3J319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHNlY29uZGFyeT0nUkVNT1ZFIEFMTCBEQVRBJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nZW5kJyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcicgb25DbGljaz17aGFuZGxlT25DbGlja01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIOuqqOuLrCAqL31cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbj17bW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVPbkNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtY29udGVudHNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFJvd0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdzdGFydCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVyIGNvbG9yPSdzZWNvbmRhcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC10aXRsZVwiIHZhcmlhbnQ9J2J1dHRvbicgZGlzcGxheT0nYmxvY2snIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXV0aW9uIDogcGVybWFuZW50IGRlbGV0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbENvbEJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLWNvbnRlbnRzXCIgdmFyaWFudD0nYm9keTEnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YEFsbCBkYXRhIHdpbGwgYmUgZGVsZXRlZCBhbmQgY2Fubm90IGJlIHJlY292ZXJlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBjb3JyZWN0bHkgdG8gY29udGludWUuYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nPntwcm9maWxlLmVtYWlsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsUm93Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9J0UtTUFJTCcgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICg8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gb25DbGljaz17aGFuZGxlT25DbGlja0xvZ2lufT5cclxuICAgICAgICAgICAgICAgIDxTaWduSW5CdXR0b24gc2lnbkluPXtnb29nbGVTaWduaW5JbWFnZX0vPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPil9XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5NZW51TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBhbmNob3IgOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0b2dnbGVEcmF3ZXIgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZmlsZSA6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyxCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDAlJyxcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge3NpZ25Jbn0gPSBwcm9wczsgLy8g7J2066+47KeAXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3Bhbic+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzaWduSW59IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PjwvaW1nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IEV4aXRUb0FwcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcCc7XHJcbmltcG9ydCB7IExpc3RJdGVtICwgSWNvbkJ1dHRvbiwgVG9vbHRpcH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwiLi4vdXRpbC9Mb2dpbkFQSVwiO1xyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxvZ291dCA6IHtcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAwLFxyXG4gICAgICAgIHdpZHRoIDogJ2F1dG8nLFxyXG4gICAgfVxyXG59KSlcclxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBmb250V2VpZ2h0Oidib2xkJ1xyXG4gICAgfSxcclxuICB9KSkoVG9vbHRpcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcclxuICAgICAgICBsb2dvdXQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgICAgICByZW1vdmVDb29raWUoJ3VzZXInKTtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb3V0fT5cclxuICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9J0xvZy1vdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7cGFkZGluZzo0fX0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPiAgICBcclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tICcuL3NlcnZlclVSTCc7XHJcblxyXG4vLyBndWVzdGJvb2sgbGlzdCDrsJvslYTsmKTquLAgMzDqsJxcclxuZXhwb3J0IGNvbnN0IGdldEd1ZXN0Ym9va0xpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2d1ZXN0Ym9va2Ase3dpdGhDcmVkZW50aWFsczp0cnVlfSkpXHJcbn1cclxuXHJcbi8vIOuTseuhnVxyXG5leHBvcnQgY29uc3QgcG9zdEd1ZXN0Ym9vayA9IChjb250ZW50LCBuYW1lLCBwaWN0dXJlKSA9PiB7XHJcbiAgICBpZiAoIW5hbWUgfHwgIXBpY3R1cmUgfHwgIWNvbnRlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcG9zdEd1ZXN0Ym9vayA6IHBhcmFtZXRlciBoYXMgZW1wdHlgKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vZ3Vlc3Rib29rYCAsIHtcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBwaWN0dXJlXHJcbiAgICAgICAgfSxcclxuICAgIH0sIHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcbi8vIOyImOyglVxyXG4vLyBleHBvcnQgY29uc3QgdXBkYXRlR3Vlc3Rib29rID0gKGFydGljbGVJZCwgY29udGVudCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGF4aW9zLnB1dChgJHtzZXJ2ZXJVUkx9L2d1ZXN0Ym9va2AsIHtcclxuLy8gICAgICAgICBkYXRhIDoge1xyXG4vLyAgICAgICAgICAgICBhcnRpY2xlSWQsXHJcbi8vICAgICAgICAgICAgIGNvbnRlbnRcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LHt3aXRoQ3JlZGVudGlhbHMgOiB0cnVlfSlcclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUd1ZXN0Ym9vayA9IChhcnRpY2xlX2lkKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke3NlcnZlclVSTH0vZ3Vlc3Rib29rYCAsIHtcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBhcnRpY2xlX2lkXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gXCIuL3NlcnZlclVSTFwiO1xyXG5cclxuLy8gVVJMIGV4cG9ydFxyXG4vLyBzZXZlcuyXkOyEnCDrsJvsnYAgdXJs66GcIOumrOuLpOydtOugie2KuFxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RHb29nbGVMb2dpbiA9ICgpID0+IGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2xvZ2luYCkudGhlbihyZXMgPT4gbG9jYXRpb24uYXNzaWduKHJlcy5kYXRhKSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbkFuZFByb2ZpbGUgPSAodG9rZW4pID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vbG9naW5gLCB7dG9rZW59ICx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZSxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2U9PlByb21pc2UucmVzb2x2ZShyZXNwb25zZS5kYXRhKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYCR7c2VydmVyVVJMfS9sb2dvdXRgLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tICcuL3NlcnZlclVSTCc7XHJcblxyXG4vLyDthYzsnbTruJQg642w7J207YSwIOuwm+yVhOyYpOq4sCBjb29raWXsl5Ag64u06ri0IHRva2Vu7IKs7JqpXHJcbmV4cG9ydCBjb25zdCBnZXRNYW5hZ2VtZW50VGFibGUgPSAgKCkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5nZXQoYCR7c2VydmVyVVJMfS9tYW5hZ2VtZW50YCx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOnRydWVcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVIZWFkZXJzID0gKGhlYWRlcnMsIGdyb3VwaW5ncykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHNhdmluZyBoZWFkZXJzIDogXHJcbiAgICBoZWFkZXJzIDogJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgIGdyb3VwaW5ncyA6ICR7SlNPTi5zdHJpbmdpZnkoZ3JvdXBpbmdzKX1gKTtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vaGVhZGVyc2AsIHtcclxuICAgICAgICAvLyBkYXRhXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBncm91cGluZ3NcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSkpOyAgICAvLyDsv6DtgqTsmYAg7ZWo6ruYXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlRGF0YSA9IChoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vZGF0YWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5ncyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoNDAwKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgfSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKGhlYWRlcnMgLCBncm91cGluZ3MpID0+IHtcclxuICBjb25zb2xlLmxvZyhgZGF0YSBwYXJzaW5nISEhIWApXHJcbiAgICByZXR1cm4gKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLm1hcCgodmFsdWUsaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSA6IHZhbHVlLFxyXG4gICAgICAgIGZpZWxkIDogdmFsdWUsXHJcbiAgICAgICAgZ3JvdXBpbmcgOiBncm91cGluZ3NbaW5kZXhdXHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9IiwiZXhwb3J0IGRlZmF1bHQgXCJodHRwczovL21hbmFnZW1lbnQtYXBwbGUuaGVyb2t1YXBwLmNvbVwiO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiOyJdLCJzb3VyY2VSb290IjoiIn0=