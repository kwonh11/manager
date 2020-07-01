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
          } else if (!cookies.profile) {
            setErrorSnack({
              open: true,
              content: '글 등록은 로그인 후 이용해주세요 :) '
            });
          } else {
            Object(_util_GuestbookAPI__WEBPACK_IMPORTED_MODULE_6__["postGuestbook"])(input.value, cookies.profile).then(function (response) {
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
                content: '재 로그인 후 다시 시도해주세요 :) '
              });
            });
          }
        } else {
          setErrorSnack({
            open: true,
            content: '재 로그인 후 다시 시도해주세요 :) '
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
/* harmony import */ var _util_ManagementAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/ManagementAPI */ "./src/util/ManagementAPI.js");
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
  if (isFirstRef) Object(_util_ManagementAPI__WEBPACK_IMPORTED_MODULE_4__["awakeServer"])().then(function (res) {
    return console.log(res.status);
  });
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
          // unauthorized no contents
          console.log('unauthorized');
          setTimeout(function () {
            return handleLogout();
          }, 3000);
          setResultSnack({
            open: true,
            status: 'error',
            content: "PLEASE LOGIN :("
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
        setTimeout(function () {
          return handleLogout();
        }, 3000);
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
        content: 'PLEASE LOGIN :('
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

var postGuestbook = function postGuestbook(content, profile) {
  console.log("profile : ".concat(profile));

  if (!profile.name || !profile.picture) {
    console.log("postGuestbook : parameter has empty");
    return Promise.reject();
  }

  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/guestbook"), {
    data: {
      content: content,
      name: profile.name,
      picture: profile.picture
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
/*! exports provided: getManagementTable, awakeServer, saveHeaders, saveData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManagementTable", function() { return getManagementTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awakeServer", function() { return awakeServer; });
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
var awakeServer = function awakeServer() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_serverURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/awake"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9FcnJvckZhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL0hpZGVPblNjaHJvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9TbmFja0Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ndWVzdGJvb2svR3Vlc3Rib29rLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Nyb3NzbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9EZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ltYWdlU2xpZGVTb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24yLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0xpc3RDYXJvdXNlbERlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvU3RhcnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ibGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9kZXNrLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Vhc3ktbG9naW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xpbmstbWFuYWdlbWVudC1wYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21ha2UtaGVhZGVycy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbW9vbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9teW1lbnUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcnQtcmlnaHQtYXdheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93aGl0ZS1hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93aGl0ZWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9EZWZhdWx0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9IZWFkZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvTWFudWFsRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1NhdmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvVGFibGVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9HdWVzdGJvb2tBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9naW5BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTWFuYWdlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wYXJzZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc2VydmVyVVJMLmpzIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTG9nb3V0Q29udGV4dCIsIlByb2dyZXNzQ29udGV4dCIsIkdsb2JhbFNuYWNrYmFyQ29udGV4dCIsIkFwcCIsInFzIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHIiLCJpZF90b2tlbiIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm9wZW4iLCJyZXN1bHQiLCJnbG9iYWxTbmFja2JhciIsInNldEdsb2JhbFNuYWNrYmFyIiwidG9vRmFzdFNuYWNrIiwic2V0VG9vRmFzdFNuYWNrIiwiZGVsZXRlZFNuYWNrIiwic2V0RGVsZXRlZFNuYWNrIiwiY29udGVudCIsImVycm9yU25hY2siLCJzZXRFcnJvclNuYWNrIiwic3VjY2Vzc1NuYWNrIiwic2V0U3VjY2Vzc1NuYWNrIiwibm90TG9nZ2VkU25hY2siLCJzZXROb3RMb2dnZWRTbmFjayIsImd1ZXN0Qm9va1NuYWNrUHJvcHMiLCJwcm9ncmVzc1JlZiIsInVzZVJlZiIsImhhbmRsZUJlZm9yZXVubG9hZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJnZXRUb2tlbkFuZFByb2ZpbGUiLCJ0aGVuIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwicGF0aCIsIm1heEFnZSIsInNhbWVTaXRlIiwiZXJyIiwiRXJyb3IiLCJFcnJvckZhbGxiYWNrIiwiZXJyb3IiLCJjb21wb25lbnRTdGFjayIsInJlcGxhY2UiLCJvcmlnaW4iLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJwYXBlciIsInBhZGRpbmciLCJjb2xvciIsInBhbGV0dGUiLCJncmV5IiwiZm9udFdlaWdodCIsInBhcGVyMiIsIm1hcmdpblRvcCIsImJ1dHRvbiIsInJlc2V0RXJyb3JCb3VuZGFyeSIsImNsYXNzZXMiLCJzZWNvbmQiLCJzZXRTZWNvbmQiLCJtZXNzYWdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiSGlkZU9uU2Nyb2xsIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsIkxvYWRpbmciLCJib29sIiwiQ3VzdG9tU25hY2tiYXIiLCJvbkNsb3NlIiwic3RhdHVzIiwiZGlyZWN0aW9uIiwiZm9udFNpemUiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwidXNlT25GaXJzdFJlbmRlciIsImlzRmlyc3RSZWYiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJtaW5IZWlnaHQiLCJmb290ZXIiLCJzcGFjaW5nIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImFycm93IiwiYWxpZ25TZWxmIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZFNpemUiLCJTdGlja3lGb290ZXIiLCJwYXRobmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInRyYW5zaXRpb24iLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYW5hZ2VtZW50QmFja2dyb3VuZCIsInRyYW5zZm9ybSIsIndoaXRlQXJyb3ciLCJjb250YWluZXIiLCJiYWNrTG9nbyIsInBvc2l0aW9uIiwiekluZGV4Iiwib3BhY2l0eSIsImNoYXRDb250YWluZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJpbnB1dEJveCIsImJ1YmJsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJteUJ1YmJsZSIsImNoYXRCb3giLCJPdGhlckF2YXRhciIsIm15QXZhdGFyIiwiR3Vlc3Rib29rIiwiaW5wdXRSZWYiLCJpbnB1dCIsImNoYXRMb2dzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvZ1JlZiIsImNoYXRDb250YWluZXJSZWYiLCJ0cmFuc3BvcnRhYmxlUmVmIiwiZ2V0TGlzdCIsImdldEd1ZXN0Ym9va0xpc3QiLCJsaXN0IiwiaGFuZGxlT25EZWxldGVDbGljayIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkZWxldGVHdWVzdGJvb2siLCJzZXRUaW1lb3V0Iiwib25JbnB1dENoYW5nZSIsInZhbHVlIiwibGVuZ3RoIiwiZW50ZXJLZXlIYW5kbGVyIiwia2V5Q29kZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsInNjcm9sbEhlaWdodCIsInBvc3RHdWVzdGJvb2siLCJyZXNwb25zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiYXJ0aWNsZSIsImluZGV4Iiwib3duIiwiX2lkIiwibGluZUhlaWdodCIsImRhdGUiLCJ2Iiwic2hyaW5rIiwidGV4dENvbnRhaW5lciIsInRleHRTaGFkb3ciLCJJbWFnZUNhcm91c2VsIiwiaW1hZ2VMaXN0Iiwic2V0U3RlcHBlciIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImhhbmRsZUFmdGVyU2xpZGUiLCJzbGlkZUluZGV4IiwiaW1hZ2UiLCJzcmMiLCJudW1iZXIiLCJmbGV4V3JhcCIsIkNyb3NzbGluZSIsImZhZGUiLCJzZXRGYWRlIiwiZG9tUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZW50ZXIiLCJleGl0IiwiaW5uZXJCb3gxIiwiaW5uZXJCb3gyIiwiZGVzY3JpcHRpb25Cb3giLCJEZXNjcmlwdGlvbiIsImdyb3ciLCJzZXRHcm93IiwidHJhbnNmb3JtT3JpZ2luIiwidGltZW91dCIsImFwcGVhciIsIkhvbWUiLCJkZXNjcmlwdGlvbiIsImVhc3lMb2dpbiIsImxpbmtNYW5hZ2VtZW50UGFnZSIsInN0YXJ0UmlnaHRBd2F5IiwibWFrZUhlYWRlcnMiLCJoYW5kbGVUYWJsZSIsInVzZU15bWVudSIsIm1pbldpZHRoIiwidGV4dFBhcGVyIiwiSW50cm9kdWN0aW9uIiwic3RlcHBlciIsImxvZ29Cb3giLCJiaWdBdmF0YXIiLCJ0ZXh0V2l0aFNoYWRvdyIsIm1hcmdpbkxlZnQiLCJtb29uSW1hZ2UiLCJpbmxpbmUiLCJEZXNjcmlwdGlvbkxpc3QiLCJzbGlkZVNvdXJjZSIsIml0ZW0iLCJhbGlnbkNvbnRlbnQiLCJNYWluIiwiYXdha2VTZXJ2ZXIiLCJyZXMiLCJ0ZXh0IiwidHlwb2dyYXBoeSIsImlubmVyQm94IiwidGV4dERlY29yYXRpb24iLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidXR0b25Db250YWluZXIiLCJkZWZhdWx0RGF0YSIsImNvbHVtbnMiLCJ0aXRsZSIsImZpZWxkIiwiZ3JvdXBpbmciLCJEZWZhdWx0UGFnZSIsIm1hdGNoIiwiZmFkZTIiLCJzZXRGYWRlMiIsImhhbmRsZU9uREVNT0NsaWNrIiwiZGVmYXVsdFBhZ2UiLCJzaGFwZSIsImhhc1RhYmxlIiwiYXJyYXkiLCJmb3JtUm9vdCIsImRlZmF1bHRIZWFkZXIiLCJIZWFkZXJzIiwiaGFuZGxlUHJvZ3Jlc3MiLCJ1c2VDb250ZXh0Iiwic25hY2siLCJzZXRTbmFjayIsInJlc3VsdFNuYWNrIiwic2V0UmVzdWx0U25hY2siLCJoZWFkZXJzIiwiZ3JvdXBpbmdzIiwiQXJyYXkiLCJmaWxsIiwic2V0RGF0YSIsImRhdGFSZWYiLCJnZXRNYW5hZ2VtZW50VGFibGUiLCJncm91cGluZ0xlbmd0aCIsImkiLCJwdXNoIiwiaGVhZGVyc0xlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImhhbmRsZUxvZ291dCIsImhhbmRsZVN1Ym1pdCIsImhyZWYiLCJpc0F1dG9TYXZlIiwiZXZlcnkiLCJmaWx0ZXIiLCJzYXZlSGVhZGVycyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlR3JvdXBpbmdzIiwiY2hlY2tlZCIsImhlYWRlciIsIk1hbmFnZW1lbnRUYWJsZSIsInNhdmVkU25hY2siLCJzZXRTYXZlZFNuYWNrIiwiZGlhbG9nIiwic2V0RGlhbG9nIiwidGFibGVSZWYiLCJwYXJzZURhdGEiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZU9uU2F2ZSIsImRhdGFNYW5hZ2VyIiwicmVkdWNlIiwib2JqIiwidGFibGVEYXRhIiwicmVzdCIsInNhdmVEYXRhIiwib25kYkNsaWNrIiwib25LZXlkb3duIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJtZXRhS2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwiTWFyZ2luIiwibG9jYWxpemF0aW9uIiwib3B0aW9ucyIsInRvb2x0aXAiLCJpY29uIiwib25DbGljayIsImRlbGV0aW9ucyIsInNwbGljZSIsImluZGV4T2YiLCJwcmV2RGF0YSIsIm9uUm93QWRkIiwibmV3RGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJldlN0YXRlIiwib25Sb3dVcGRhdGUiLCJvbGREYXRhIiwiTWFudWFsRGlhbG9nIiwiaWNvbnMiLCJTYXZlQnV0dG9uIiwiZXhwb3J0QnV0dG9uIiwic2VsZWN0aW9uIiwiaGVhZGVyU3R5bGUiLCJhY3Rpb25zQ29sdW1uSW5kZXgiLCJjb2x1bW5zQnV0dG9uIiwiZGVib3VuY2VJbnRlcnZhbCIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwicGFnaW5hdGlvbiIsImxhYmVsRGlzcGxheWVkUm93cyIsInRvb2xiYXIiLCJuUm93c1NlbGVjdGVkIiwiYWN0aW9ucyIsImJvZHkiLCJlbXB0eURhdGFTb3VyY2VNZXNzYWdlIiwiZmxleEdyb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxlZnQiLCJwYWRkaW5nTGVmdCIsImp1c3RpZnkiLCJjZW50ZXIiLCJyaWdodCIsInBhZGRpbmdSaWdodCIsIk5hdiIsIm1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJldmVudCIsImZsYWciLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJsaXN0VGV4dCIsIm1vZGFsIiwic2hhZG93cyIsIm1vZGFsUm93Qm94IiwibW9kYWxDb2xCb3giLCJNZW51TGlzdCIsImhhbmRsZUdsb2JhbFNuYWNrYmFyIiwiZW1haWxJbnB1dCIsInNldEVtYWlsSW5wdXQiLCJoYW5kbGVPbkNsaWNrTG9naW4iLCJyZWRpcmVjdEdvb2dsZUxvZ2luIiwiaGFuZGxlT25DbGlja01vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVPbkNsb3NlTW9kYWwiLCJoYW5kbGVPblN1Ym1pdCIsImlzTG9nZ2VkIiwiZ29vZ2xlU2lnbmluSW1hZ2UiLCJTaWduSW5CdXR0b24iLCJzaWduSW4iLCJsb2dvdXQiLCJMaWdodFRvb2x0aXAiLCJ3aXRoU3R5bGVzIiwiY29tbW9uIiwid2hpdGUiLCJUb29sdGlwIiwiYXhpb3MiLCJnZXQiLCJzZXJ2ZXJVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZWplY3QiLCJwb3N0Iiwi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QUM7QUFBakIsR0FKTSxFQUlrQjFYLElBSmxCLENBSXVCLFVBQUFvTixHQUFHLEVBQUk7QUFDbEMsUUFBSUEsR0FBRyxDQUFDOUosTUFBSixLQUFlLEdBQW5CLEVBQXdCLE9BQU95UCxPQUFPLENBQUM0RSxNQUFSLENBQWUsR0FBZixDQUFQO0FBQ3hCLFdBQU81RSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I1RixHQUFHLENBQUNuTixJQUFwQixDQUFQO0FBQ0gsR0FQTyxDQUFSO0FBUUgsQ0FUTSxDOzs7Ozs7Ozs7Ozs7QUN2QlA7QUFBZSx5RUFBQ29QLE9BQUQsRUFBV0MsU0FBWCxFQUF5QjtBQUN0QzVQLFNBQU8sQ0FBQ0MsR0FBUjtBQUNFLFNBQVFxUSxNQUFNLENBQUNDLE1BQVAsQ0FBY1osT0FBZCxFQUF1QmtCLE1BQXZCLENBQThCLFVBQUFsSCxDQUFDO0FBQUEsV0FBRUEsQ0FBRjtBQUFBLEdBQS9CLEVBQW9DUCxHQUFwQyxDQUF3QyxVQUFDWCxLQUFELEVBQU9hLEtBQVAsRUFBaUI7QUFDL0QsV0FBTztBQUNMZ0YsV0FBSyxFQUFHN0YsS0FESDtBQUVMOEYsV0FBSyxFQUFHOUYsS0FGSDtBQUdMK0YsY0FBUSxFQUFHb0IsU0FBUyxDQUFDdEcsS0FBRDtBQUhmLEtBQVA7QUFLRCxHQU5PLENBQVI7QUFPRCxDQVRILEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWUsdUdBQWYsRSxDQUNBLDBDIiwiZmlsZSI6ImFwcC40YmEzNTYyYjM5ODBiYmQ3Nzg0Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiIGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi9OYXZcIjtcclxuaW1wb3J0IEd1ZXN0Ym9vayBmcm9tIFwiLi9ndWVzdGJvb2svR3Vlc3Rib29rXCI7XHJcbmltcG9ydCBNYW5hZ2VtZW50IGZyb20gXCIuL21hbmFnZW1lbnQvTWFuYWdlbWVudFwiO1xyXG5pbXBvcnQgSGVhZGVycyBmcm9tICcuL21hbmFnZW1lbnQvSGVhZGVycyc7XHJcbmltcG9ydCB7Q3NzQmFzZWxpbmV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZS9Ib21lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCB7IGdldFRva2VuQW5kUHJvZmlsZSB9IGZyb20gXCIuL3V0aWwvTG9naW5BUElcIjtcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCBFcnJvckZhbGxiYWNrIGZyb20gJy4vY3VzdG9tSG9vay9FcnJvckZhbGxiYWNrJztcclxuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gXCJyZWFjdC1lcnJvci1ib3VuZGFyeVwiO1xyXG5cclxuLy8g7Luo7YWN7Iqk7Yq4IOuqqeuhnVxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvdXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgR2xvYmFsU25hY2tiYXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3QgeyBpZF90b2tlbiB9ID0gcXMucGFyc2Uod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJ10pO1xyXG4gICAgY29uc3QgWyBwcm9maWxlICwgc2V0UHJvZmlsZSBdID0gUmVhY3QudXNlU3RhdGUoY29va2llcy5wcm9maWxlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBzbmFja2JhclxyXG4gICAgY29uc3QgW2dsb2JhbFNuYWNrYmFyLCBzZXRHbG9iYWxTbmFja2Jhcl0gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlICwgcmVzdWx0OiAnc3VjY2Vzcyd9KTtcclxuICAgIGNvbnN0IFt0b29GYXN0U25hY2ssIHNldFRvb0Zhc3RTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gICAgY29uc3QgW2RlbGV0ZWRTbmFjaywgc2V0RGVsZXRlZFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgICBjb25zdCBbZXJyb3JTbmFjaywgc2V0RXJyb3JTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZSxjb250ZW50OicnfSk7XHJcbiAgICBjb25zdCBbc3VjY2Vzc1NuYWNrLCBzZXRTdWNjZXNzU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtub3RMb2dnZWRTbmFjaywgc2V0Tm90TG9nZ2VkU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuXHJcbiAgICBjb25zdCBndWVzdEJvb2tTbmFja1Byb3BzID0ge2lzTG9hZGluZyAsXHJcbiAgICAgICAgdG9vRmFzdFNuYWNrLCBzZXRUb29GYXN0U25hY2ssXHJcbiAgICAgICAgZGVsZXRlZFNuYWNrLCBzZXREZWxldGVkU25hY2ssXHJcbiAgICAgICAgZXJyb3JTbmFjaywgc2V0RXJyb3JTbmFjayxcclxuICAgICAgICBzdWNjZXNzU25hY2ssIHNldFN1Y2Nlc3NTbmFjayxcclxuICAgICAgICBub3RMb2dnZWRTbmFjaywgc2V0Tm90TG9nZ2VkU25hY2t9XHJcblxyXG4gICAgY29uc3QgcHJvZ3Jlc3NSZWYgPSBSZWFjdC51c2VSZWYoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVCZWZvcmV1bmxvYWQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHByb2dyZXNzIDogJHtwcm9ncmVzc1JlZi5jdXJyZW50fWApO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHByb2dyZXNzUmVmLmN1cnJlbnQgPSAocHJvZ3Jlc3NSZWYuY3VycmVudCA8IDEwMCA/IHByb2dyZXNzUmVmLmN1cnJlbnQgKyAyMCA6IDEwMCk7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzUmVmLmN1cnJlbnQgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDApXHJcbiAgICB9XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihpZF90b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2ggQVBJIOyLpO2WiScpO1xyXG4gICAgICAgICAgICBnZXRUb2tlbkFuZFByb2ZpbGUoaWRfdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgZGF0YSA6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7bmFtZSAsZW1haWwsIHBpY3R1cmV9ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShcInByb2ZpbGVcIix7bmFtZSAsIGVtYWlsLCBwaWN0dXJlfSx7cGF0aDpcIi9cIiAsIG1heEFnZSA6IDcyMDAsIHNhbWVTaXRlOidub25lJ30pOyAgLy8gbWF4QWdlIDogMuyLnOqwhFxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2dpbiBGYWlsZWQuIFBsZWFzZSBhdXRob3JpemUgdGhlIHVzZSBvZiBjb29raWVzIGluIHlvdXIgYnJvd3Nlci4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtpZF90b2tlbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChjb29raWVzLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGNvb2tpZXMucHJvZmlsZSA6ICR7SlNPTi5zdHJpbmdpZnkoY29va2llcy5wcm9maWxlKX1gKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2Nvb2tpZXMucHJvZmlsZV0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEVycm9yQm91bmRhcnlcclxuICAgICAgICAgICAgRmFsbGJhY2tDb21wb25lbnQ9e0Vycm9yRmFsbGJhY2t9XHJcbiAgICAgICAgICAgIG9uRXJyb3I9eyhlcnJvciwgY29tcG9uZW50U3RhY2spPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgOiAke2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50U3RhY2sgOiAke2NvbXBvbmVudFN0YWNrfWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvblJlc2V0PXsoKT0+bG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbi5vcmlnaW4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvZmlsZSB8fCB7bmFtZSA6ICcnfX0+ICAgICAgICAgIHsvKiDsnKDsoIAg7ZSE66Gc7ZWEIOy7qO2FjeyKpO2KuCAgICAqL31cclxuICAgICAgICAgICAgPExvZ291dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldFByb2ZpbGV9PiAgIHsvKiDroZzqt7jslYTsm4Mg7J2067Kk7Yq4IOy7qO2FjeyKpO2KuCAgICovfVxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsocmVzdWx0KT0+aGFuZGxlQmVmb3JldW5sb2FkKHJlc3VsdCl9PiAgey8qIOuhnOuUqSDsu6jthY3siqTtirggICAqL31cclxuICAgICAgICAgICAgPEdsb2JhbFNuYWNrYmFyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0R2xvYmFsU25hY2tiYXJ9PiAgey8qIOyXkOufrCDsiqTrgrXrsJQg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eygpPT48SG9tZSBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9ndWVzdGJvb2snIHJlbmRlcj17KCk9PjxHdWVzdGJvb2sgey4uLmd1ZXN0Qm9va1NuYWNrUHJvcHN9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbWFuYWdlbWVudCcgcmVuZGVyPXsoKT0+IDxNYW5hZ2VtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclNuYWNrPXtzZXRFcnJvclNuYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9oZWFkZXJzJyByZW5kZXI9eygpPT4gPEhlYWRlcnMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyByZW5kZXI9eyhwcm9wcyk9PjxGb290ZXIgey4uLnByb3BzfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPC9HbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvUHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0xvZ291dENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17Z2xvYmFsU25hY2tiYXIub3Blbn0gb25DbG9zZT17KCk9PnNldEdsb2JhbFNuYWNrYmFyKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgICAgICAgICAgY29udGVudD17Z2xvYmFsU25hY2tiYXIucmVzdWx0PT09J2Vycm9yJz8gYE5vdCBzYXZlZC5cclxuICAgICAgICAgICAgICAgIFJlYXNvbiA6IEludmFsaWQgaW5wdXQuYCA6JyBTQVZFRCAnfSBzdGF0dXM9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdH1cclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17e3ZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidyaWdodCd9fS8+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c3VjY2Vzc1NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTdWNjZXNzU25hY2soe29wZW46ZmFsc2V9KX1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1NVQ0NFU1MnIHN0YXR1cz0nc3VjY2VzcycgLz5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtub3RMb2dnZWRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0Tm90TG9nZ2VkU25hY2soe29wZW46ZmFsc2V9KX1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0xPR0lOIEZJUlNUJyBzdGF0dXM9J2Vycm9yJy8+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17dG9vRmFzdFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRUb29GYXN0U25hY2soe29wZW46ZmFsc2V9KX1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1NPUlJZIFRPTyBGQVNUICggSW50ZXJ2YWwgOiAxNXMgKScgc3RhdHVzPSdlcnJvcicgLz5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtkZWxldGVkU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldERlbGV0ZWRTbmFjayh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD0nRGVsZXRlZCcgc3RhdHVzPSdzdWNjZXNzJyAvPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2Vycm9yU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldEVycm9yU25hY2soe29wZW46ZmFsc2V9KX1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2BFUlJPUiA6ICR7ZXJyb3JTbmFjay5jb250ZW50fWB9IHN0YXR1cz0nZXJyb3InIC8+XHJcbiAgICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZVNpZ25pbi4xY2UxYWFhNWExMjdmYTNlNDkyYTEyYmI2MmY5OTMwNC5wbmdcIjsiLCJpbXBvcnQgeyBCb3gsIFBhcGVyLFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgd2lkdGggOiAnODB2dycsXHJcbiAgICAgICAgLy8gaGVpZ2h0IDogJzUwdmgnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnNXZoJyxcclxuICAgICAgICBjb2xvciA6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJ1xyXG4gICAgfSxcclxuICAgIHBhcGVyMiA6IHtcclxuICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIG1hcmdpblRvcDonM3ZoJyxcclxuICAgICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcidcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzV2aCcsXHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJ1xyXG4gICAgfVxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yRmFsbGJhY2sgKHtlcnJvciwgY29tcG9uZW50U3RhY2ssIHJlc2V0RXJyb3JCb3VuZGFyeX0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgW3NlY29uZCAsIHNldFNlY29uZF0gPSBSZWFjdC51c2VTdGF0ZSgzMCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKHNlY29uZCA8PSAwKSBsb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNlY29uZCA6ICAke3NlY29uZH1gKTtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIHNldFNlY29uZChzZWNvbmQtMSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSxbc2Vjb25kXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+IHtgRVJST1IgOiAke2Vycm9yLm1lc3NhZ2V9YH0gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnPiB7YFdpbGwgZ28gYmFjayB0byB0aGUgSE9NRWB9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMic+IHtgaW4gJHtzZWNvbmR9IHNlY29uZHMuYH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtyZXNldEVycm9yQm91bmRhcnl9PiBcclxuICAgICAgICAgICAgICAgICAgICBSZXR1cm4gdG8gSG9tZSBOb3cgXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXIyfSBlbGV2YXRpb249ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+IHtgUGxlYXNlIGNoZWNrIGJlbG93LmB9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz4ge2AxLiBMb2dpbiB0aW1lb3V0IC0gTG9naW4gUmV0ZW50aW9uIFRpbWU6IDIgaG91cnNgfSAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+IHtgMi4gSW52YWxpZCBSZXF1ZXN0YH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbkVycm9yRmFsbGJhY2sucHJvcFR5cGVzID0ge1xyXG4gICAgcmVzZXRFcnJvckJvdW5kYXJ5IDogUHJvcFR5cGVzLFxyXG59IiwiaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuXHJcbi8vIEdOQuydmCDsiqzrnbzsnbTrk5zquLDriqVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9IGRpcmVjdGlvbj1cImRvd25cIiBpbj17IXRyaWdnZXJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NsaWRlPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQge0JveCwgQ2lyY3VsYXJQcm9ncmVzcywgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nICh7aXNMb2FkaW5nfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgIGlzTG9hZGluZyAmJiBcclxuICAgICAgICAgICAgKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHZoJywgd2lkdGg6JzEwMHZ3JywgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtgU2F2aW5nIGNoYW5nZXNgfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgICAgICAgPC9Cb3g+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuTG9hZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tU25hY2tiYXIgKHtvcGVuLCBvbkNsb3NlLCBjb250ZW50LCBzdGF0dXMsIGRpcmVjdGlvbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17ZGlyZWN0aW9uPyBkaXJlY3Rpb24gOiB7IHZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidjZW50ZXInIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17b25DbG9zZX0gc2V2ZXJpdHk9e3N0YXR1c31cclxuICAgICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCcgbWVzc2FnZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicsIGZvbnRTaXplOic1cmVtJ319PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgIClcclxufVxyXG5cclxuQ3VzdG9tU25hY2tiYXIucHJvcFR5cGVzID0ge1xyXG4gICAgb3BlbiA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNsb3NlIDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb250ZW50IDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN0YXR1cyA6IFByb3BUeXBlcy5vbmVPZihbJ2Vycm9yJywnc3VjY2VzcyddKSxcclxuICAgIGRpcmVjdGlvbiA6IFByb3BUeXBlcy5vYmplY3QsXHJcbn0iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuLy8gY29udHN0cnVjdG9yIO2bhVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPbkZpcnN0UmVuZGVyIChmdW5jKSB7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmMoKTtcclxuICAgIH1cclxufVxyXG51c2VPbkZpcnN0UmVuZGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGZ1bmMgOiBQcm9wVHlwZXMuZnVuY1xyXG59IiwiaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgTGlua30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgd2hpdGVBcnJvdyBmcm9tICcuLi9pbWFnZXMvd2hpdGUtYXJyb3cucG5nJztcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQge0JveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IG1hbmFnZW1lbnRCYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnJztcclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgSmFjaydzIFdlYnNpdGVcclxuICAgICAgICA8L0xpbms+eycgJ31cclxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgIHsnLid9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWluSGVpZ2h0OiAnMjB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgICAgYmFja2dyb3VuZCA6IHRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdLFxyXG4gICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgYXJyb3cgOiB7XHJcbiAgICAgIHdpZHRoIDogJzR2dycsXHJcbiAgICAgIGhlaWdodCA6ICc0dncnLFxyXG4gICAgICBwYWRkaW5nIDogJzN2dycsXHJcbiAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Cb3R0b206JzJ2aCcsXHJcbiAgICAgIG1hcmdpblRvcCA6ICcydmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTonY29udGFpbicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5Rm9vdGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7bG9jYXRpb259ID0gcHJvcHM7XHJcbiAgICBjb25zb2xlLmxvZyhgbG9jYXRpb24ucGF0aG5hbWU/ICR7bG9jYXRpb24ucGF0aG5hbWV9YCk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9ndWVzdGJvb2snPyBudWxsIDogKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17XHJcbiAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJyA/IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kIDogYGxpbmVhci1ncmFkaWVudChibGFjaywgI2VlZWVlZSlgfSBcclxuICAgICAgICA6IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7bWFuYWdlbWVudEJhY2tncm91bmR9KWAsIGJhY2tncm91bmRTaXplIDogJ2F1dG8nLCB0cmFuc2Zvcm06IGBzY2FsZVkoLTEpYH19PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTW92ZSB0byBUb3BcIiBhcmlhLWxhYmVsPVwibW92ZS10by10b3BcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBlbnRlckRlbGF5PXszNTB9IGxlYXZlRGVsYXk9ezE1MH0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gc3R5bGU9e1xyXG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJz8gXHJcbiAgICAgICAgICB7YmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke3doaXRlQXJyb3d9KWB9XHJcbiAgICAgICAgICA6IFxyXG4gICAgICAgICAge2JhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCwgdHJhbnNmb3JtOmByb3RhdGUoMTgwZGVnKWB9fVxyXG4gICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9IG9uTW91c2VPdmVyPXsoZSk9PnRyYW5zaXRpb24oZSl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgICAgICAgPENvcHlyaWdodCBzdHlsZT17e2ZvbnRXZWlnaHQgOiAnYm9sZGVyJ319Lz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9IiwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgQm94LCBQYXBlciwgVHlwb2dyYXBoeSwgVGV4dEZpZWxkLCBBdmF0YXIsVG9vbHRpcCxJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tIFwiLi4vY3VzdG9tSG9vay9TbmFja0JhclwiO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tIFwiLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyXCI7XHJcbmltcG9ydCB7IGdldEd1ZXN0Ym9va0xpc3QgLCBwb3N0R3Vlc3Rib29rLCBkZWxldGVHdWVzdGJvb2t9IGZyb20gJy4uL3V0aWwvR3Vlc3Rib29rQVBJJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTIwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNzV2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzg1dmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJhY2tMb2dvIDoge1xyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJyxcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgekluZGV4IDogMSxcclxuICAgICAgICBvcGFjaXR5OjAuM1xyXG4gICAgfSxcclxuICAgIGNoYXRDb250YWluZXIgOiB7XHJcbiAgICAgICAgaGVpZ2h0IDogJzg1JScsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZyA6ICcwLjV2dyA1dncnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJyNkMGQwZDAnLFxyXG4gICAgICAgIG92ZXJmbG93WSA6ICdzY3JvbGwnLFxyXG4gICAgICAgIG92ZXJmbG93WCA6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgaW5wdXRCb3ggOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNjB2dycsXHJcbiAgICAgICAgbWFyZ2luVG9wOicydmgnXHJcbiAgICB9LFxyXG4gICAgYnViYmxlIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXIgOiAndGhpY2sgIzhhOGE4YScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzIDogJzE1cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjOGU4ZThlJyxcclxuICAgICAgICBwYWRkaW5nIDogJzVweCAxMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAnMHB4IDZweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc2MHZ3JyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIG15QnViYmxlIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXIgOiAndGhpY2sgIzhhOGE4YScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzIDogJzE1cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjNzg5ZmZmJyxcclxuICAgICAgICBwYWRkaW5nIDogJzVweCAxMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAnMHB4IDZweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc2MHZ3JyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIGNoYXRCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG5cclxuICAgIH0sXHJcbiAgICBPdGhlckF2YXRhciA6IHtcclxuICAgICAgICBjb2xvciA6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnYmxhY2snLFxyXG4gICAgfSxcclxuICAgIG15QXZhdGFyIDoge1xyXG4gICAgICAgIGNvbG9yIDogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjMjc2NGZmJyxcclxuICAgIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3Vlc3Rib29rKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcblxyXG4gICAgY29uc3Qge2lzTG9hZGluZyAsXHJcbiAgICAgICAgdG9vRmFzdFNuYWNrLCBzZXRUb29GYXN0U25hY2ssXHJcbiAgICAgICAgZGVsZXRlZFNuYWNrLCBzZXREZWxldGVkU25hY2ssXHJcbiAgICAgICAgZXJyb3JTbmFjaywgc2V0RXJyb3JTbmFjayxcclxuICAgICAgICBzdWNjZXNzU25hY2ssIHNldFN1Y2Nlc3NTbmFjayxcclxuICAgICAgICBub3RMb2dnZWRTbmFjaywgc2V0Tm90TG9nZ2VkU25hY2t9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgaW5wdXQgOiAnJyxcclxuICAgICAgICBjaGF0TG9ncyA6IFtdXHJcbiAgICB9KVxyXG4gICAgY29uc3QgbG9nUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBjb25zdCBjaGF0Q29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBjb25zdCB0cmFuc3BvcnRhYmxlUmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0R3Vlc3Rib29rTGlzdCgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gWy4uLnJlc3VsdC5kYXRhXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdCk7XHJcbiAgICAgICAgICAgIGxvZ1JlZi5jdXJyZW50ID0gWy4uLmxpc3RdO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIGNoYXRMb2dzIDogWy4uLmxpc3RdfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW4gOiB0cnVlICwgY29udGVudCA6ICdHVUVTVCBCT09LIOuqqeuhnSDrtojrn6zsmKTquLAg7Iuk7YyoJ30pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3RydWN0b3JcclxuICAgIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgICAgICBnZXRMaXN0KCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVPbkRlbGV0ZUNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGDsgq3soJzsmpTssq0gSUQgOiAke2lkfWApOyAgICAvLyBkYuydmCBfaWTqsJLsnLzroZwg7IKt7KCc7JqU7LKt7ZWY6riwXHJcbiAgICAgICAgZGVsZXRlR3Vlc3Rib29rKGlkKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gJ2RlbGV0ZWQnKSBzZXRUaW1lb3V0KHNldERlbGV0ZWRTbmFjayh7b3Blbjp0cnVlfSksMzAwMCk7XHJcbiAgICAgICAgICAgIGdldExpc3QoKTtcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuIDogdHJ1ZSAsIGNvbnRlbnQgOiAn6raM7ZWc7J20IOyXhuyKteuLiOuLpC4g64uk7IucIOuhnOq3uOyduO2VtOuztOyEuOyalCd9KTtcclxuICAgICAgICAgICAgZ2V0TGlzdCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAxMjApIHtcclxuICAgICAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlLCBpbnB1dCA6IHZhbHVlfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPj0gOTUpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlLCBjb250ZW50IDogYDEyMOq4gOyekCDsoJztlZwsIO2YhOyerCA6ICR7dmFsdWUubGVuZ3RofSDquIDsnpBgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZW50ZXJLZXlIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyBlbnRlciBwcmVzc2VkXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gaW5wdXRSZWYuY3VycmVudD8gaW5wdXRSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpIDogJyc7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGNoYXRDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxUbygwLGNoYXRDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9zdCBBUEkgJiBnZXQgQVBJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zcG9ydGFibGVSZWYuY3VycmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9vRmFzdFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFjb29raWVzLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlLCBjb250ZW50OifquIAg65Ox66Gd7J2AIOuhnOq3uOyduCDtm4Qg7J207Jqp7ZW07KO87IS47JqUIDopICd9KTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RHdWVzdGJvb2soaW5wdXQudmFsdWUsY29va2llcy5wcm9maWxlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0YWJsZVJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxNTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0YWJsZVJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3NTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZSwgY29udGVudDon7J6sIOuhnOq3uOyduCDtm4Qg64uk7IucIOyLnOuPhO2VtOyjvOyEuOyalCA6KSAnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWUsIGNvbnRlbnQ6J+yerCDroZzqt7jsnbgg7ZuEIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQgOikgJ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbnRlcktleUhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicgLCBlbnRlcktleUhhbmRsZXIpO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGNvb2tpZXMucHJvZmlsZSA/IGNvb2tpZXMucHJvZmlsZS5lbWFpbD09PSdrd29uaDExQGdtYWlsLmNvbScgPyB0cnVlIDogZmFsc2UgOiBmYWxzZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezV9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0Q29udGFpbmVyfSByZWY9e2NoYXRDb250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tMb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICB7YEdVRVNUIEJPT0sgOiBcclxuICAgICAgICAgICAgICAgICAgICAgIExFQVZFIEEgTUVTU0FHRWB9LlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY2hhdExvZ3MubWFwKChhcnRpY2xlLGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXJ0aWNsZS5vd24gfHwgZW1haWwpID8gLy8g7ISc67KE7JeQ7IScIO2ZleyduOuQnCDrs7jsnbjqsozsi5zrrLzsnbwg6rK97JqwICAo7ISc67KE7LihIO2ZleyduO2VhOyalCDsiJjsoJXtm4Qg7KO87ISdIOyngOyasOq4sCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuCtOqwgCDrp5DtlojsnYQg6rK97JqwIOyYpOuluOyqvSDsoJXroKwsIHByb2ZpbGXsnZgg7J2066aE6rO8IOu5hOq1kCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGludGVyYWN0aXZlIHBsYWNlbWVudD0ncmlnaHQnIGtleT17aW5kZXh9IHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT25EZWxldGVDbGlja30gY29sb3I9J3ByaW1hcnknIHNpemU9J3NtYWxsJyBkYXRhLWlkPXthcnRpY2xlLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0Qm94fSBzdHlsZT17e2FsaWduU2VsZjonZmxleC1lbmQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5teUJ1YmJsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250U2l6ZTonMC41cmVtJywgbGluZUhlaWdodDonMC44J319PnthcnRpY2xlLmRhdGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMubXlBdmF0YXJ9IHNyYz17YXJ0aWNsZS5waWN0dXJlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuLpOuluOyCrOuejOuTpOydtCDrp5DtlZwg6rG0IOyZvOyqvSDsoJXroKxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0Qm94fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLk90aGVyQXZhdGFyfSBzcmM9e2FydGljbGUucGljdHVyZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5idWJibGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250U2l6ZTonMC41cmVtJywgbGluZUhlaWdodDonMC44J319PnthcnRpY2xlLmRhdGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEJveH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nbWVkaXVtJ1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgcmVmPXt2ID0+IGlucHV0UmVmLmN1cnJlbnQgPSB2fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbkd1ZXN0Ym9vay5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbCxcclxufSIsImltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgdGV4dENvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgY29sb3IgOiAnI2ZmZicsXHJcbiAgICAgICAgdGV4dFNoYWRvdzonMnB4IDEuNXB4IDEuNXB4IGdyYXknLFxyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUNhcm91c2VsIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaW1hZ2VMaXN0ID0gcHJvcHMubGlzdCA/IHByb3BzLmxpc3QgOiBbe31dO1xyXG4gICAgY29uc3Qge3NldFN0ZXBwZXIsIGN1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaGFuZGxlQWZ0ZXJTbGlkZSA9IChzbGlkZUluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0U3RlcHBlcihzbGlkZUluZGV4KTtcclxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoc2xpZGVJbmRleCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENhcm91c2VsXHJcbiAgICBzbGlkZUluZGV4PXtjdXJyZW50U2xpZGV9XHJcbiAgICBhZnRlclNsaWRlPSB7aW5kZXggPT4gaGFuZGxlQWZ0ZXJTbGlkZShpbmRleCl9XHJcbiAgICBhdXRvcGxheT17ZmFsc2V9XHJcbiAgICBhdXRvcGxheUludGVydmFsPXszMDAwfVxyXG4gICAgdHJhbnNpdGlvbk1vZGU9J3Njcm9sbCdcclxuICAgIHNwZWVkPXs4MDB9XHJcbiAgICBoZWlnaHRNb2RlPSdtYXgnXHJcbiAgICAgICAgPlxyXG4gICAge1xyXG4gICAgICAgIGltYWdlTGlzdC5tYXAoKGltYWdlLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCMke2luZGV4fSAke2ltYWdlLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPEJveCBzdHlsZT17e2hlaWdodDonMTAwJSd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpbmRleD09PTA/IFxyXG4gICAgICAgICAgICAgICAgICAgICg8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0Q29udGFpbmVyfSBzdHlsZT17e2hlaWdodDonMTAwJScsIGFsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFVSUNLIFNUQVJUIEdVSURFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWtlIHlvdXIgd29yayBlYXNpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUdXJuIHRoZSBzbGlkZSBvdmVyIGFuZCBjaGVjay5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBjb25zaXN0cyBvZiBhIGZldyBzbGlkZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+KVxyXG4gICAgICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e2ltYWdlLnNyY30vPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgPC9DYXJvdXNlbD5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5JbWFnZUNhcm91c2VsLnByb3BUeXBlcyA9IHtcclxuICAgIHNldFN0ZXBwZXIgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY3VycmVudFNsaWRlIDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgc2V0Q3VycmVudFNsaWRlIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJveCAsIEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBtYXJnaW46MCxcclxuICAgICAgcGFkZGluZzonMXZ3JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpbjonYXV0bycsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyb3NzbGluZSh7Y2hpbGRyZW59KSB7XHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRGYWRlKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTUwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoyMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGJveFNoYWRvdz17NH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcm93LCBCb3gsIFR5cG9ncmFwaHkgLCBEaXZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3QgOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzM1dmgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94MSA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBjb2xvcjonI2VhZWFlYScsXHJcbiAgICAgICAgbWFyZ2luVG9wIDogJy01dmgnLFxyXG4gICAgICAgIHRleHRTaGFkb3c6ICcxcHggNHB4IDRweCAjOWU5OTk5J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94MiA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBjb2xvcjonI2VhZWFlYScsXHJcbiAgICAgICAgbWFyZ2luVG9wIDogJy01dmgnLFxyXG4gICAgICAgIHRleHRTaGFkb3c6ICcxcHggNHB4IDRweCAjOWU5OTk5J1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIG1heFdpZHRoIDogJzUwdncnLFxyXG4gICAgICAgIG1hcmdpblRvcDonM3ZoJ1xyXG4gICAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgIHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICl9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJzE1MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94MX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgIEdVRVNUQk9PS1xyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25Cb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBndXR0ZXJCb3R0b20+7ZWc7KSEIOuwqeuqheuhneydhCDsnpHshLHtlbTrs7TshLjsmpQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPuqwnOuwnOyekCDrmJDripQg7Jyg7KCA65Ok7JeQ6rKMPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz7tlLzrk5zrsLHsnbTrgpgg7J247IKs66W8IOqxtOuEpOuztOyEuOyalC48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPuu2iO2OuOyCrO2VreydtOuCmCDqsJzshKDsoJDrk7HsnYQg7JWM66Ck7KO87Iuc66m0IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+7ISc67mE7Iqk66W8IOqwnOyEoO2VmOuKlOuNsCDrj4Tsm4DsnbQg65Cp64uI64ukLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGZsZXhJdGVtIHN0eWxlPXt7d2lkdGg6JzFweCcsaGVpZ2h0Oic2MCUnLCBiYWNrZ3JvdW5kQ29sb3I6JyM5ZTk5OTknfX0vPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lckJveDJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgIE1BTkFHRU1FTlRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbkJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGd1dHRlckJvdHRvbT7sib3qsowg642w7J207YSw6rSA66as66W8IO2VtOuztOyEuOyalDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+7J6F66ClLOyImOyglSzsgq3soJws64K067O064K06riwLOq3uOujue2ZlCDrk7HsnZgg6riw64qlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz7qtazquIDqs4TsoJXsnLzroZwgUEPrp4wg7J6I64uk66m0IOyWtOuUlOyEnOuToCA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPuuPmeydvO2VnCDrjbDsnbTthLDrpbwg6rSA66as7ZWgIOyImCDsnojsirXri4jri6QuIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+64uk7JaR7ZWY6rKMIO2ZnOyaqe2VtOuztOyEuOyalCA6KTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD4gICAgICBcclxuICAgICAgICA8L0dyb3c+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gXCIuL0ludHJvZHVjdGlvblwiO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uMiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb24yXCI7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtpc0xvYWRpbmd9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24yLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Ib21lLnByb3BUeXBlcyA9IHtcclxuICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiaW1wb3J0IGVhc3lMb2dpbiBmcm9tIFwiLi4vaW1hZ2VzL2Vhc3ktbG9naW4ucG5nXCI7XHJcbmltcG9ydCBsaW5rTWFuYWdlbWVudFBhZ2UgZnJvbSBcIi4uL2ltYWdlcy9saW5rLW1hbmFnZW1lbnQtcGFnZS5wbmdcIjtcclxuaW1wb3J0IHN0YXJ0UmlnaHRBd2F5IGZyb20gXCIuLi9pbWFnZXMvc3RhcnQtcmlnaHQtYXdheS5wbmdcIjtcclxuaW1wb3J0IG1ha2VIZWFkZXJzIGZyb20gXCIuLi9pbWFnZXMvbWFrZS1oZWFkZXJzLnBuZ1wiO1xyXG5pbXBvcnQgaGFuZGxlVGFibGUgZnJvbSBcIi4uL2ltYWdlcy9oYW5kbGUtdGFibGUucG5nXCI7XHJcbmltcG9ydCB1c2VNeW1lbnUgZnJvbSBcIi4uL2ltYWdlcy9teW1lbnUucG5nXCI7XHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1F1aWNrIHN0YXJ0IGd1aWRlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdHVUlERScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnU2lnbiBpbiB3aXRoIEdvb2dsZScsXHJcbiAgICAgICAgc3JjIDogYCR7ZWFzeUxvZ2lufWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnU2lnbiBpbiB3aXRoIGdvb2dsZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnTW92ZSBvbiB0byBtYW5hZ2VtZW50IHBhZ2UnLFxyXG4gICAgICAgIHNyYyA6IGAke2xpbmtNYW5hZ2VtZW50UGFnZX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ01vdmUgb24gdG8gbWFuYWdlbWVudCBwYWdlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdDbGljayB0aGUgYmx1ZSBidXR0b24nLFxyXG4gICAgICAgIHNyYyA6IGAke3N0YXJ0UmlnaHRBd2F5fWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnY2xpY2sgXCJnZXQgc3RhcnRlZCByaWdodCBhd2F5XCIgYnV0dG9uJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdNYWtlIEhlYWRlcnMnLFxyXG4gICAgICAgIHNyYyA6IGAke21ha2VIZWFkZXJzfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnbWFrZSBoZWFkZXJzJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnQ3JlYXRlLCBFZGl0LCBSZW1vdmUgdGFibGUgcmVjb3JkcycsXHJcbiAgICAgICAgc3JjIDogYCR7aGFuZGxlVGFibGV9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdoYW5kbGUgdGFibGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1VzZSBteW1lbnUgdG8gaGFuZGxlIGRhdGEnLFxyXG4gICAgICAgIHNyYyA6IGAke3VzZU15bWVudX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ3VzZSBteW1lbnUnLFxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JvdyAsIEJveCwgUGFwZXIsRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5pbXBvcnQgaW1hZ2VMaXN0IGZyb20gJy4vSW1hZ2VTbGlkZVNvdXJjZXMnO1xyXG5pbXBvcnQgTGlzdENyb3VzZWxEZXNjcmlwdGlvbiBmcm9tICcuL0xpc3RDYXJvdXNlbERlc2NyaXB0aW9uJztcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL3doaXRlYmFja2dyb3VuZC5qcGcnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDc1MCxcclxuICAgICAgICBtYXhXaWR0aDogJzEwMDBweCcsXHJcbiAgICAgICAgd2lkdGggOiAnNzB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzY1dmgnLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJ2luaGVyaXQnXHJcbiAgICB9LFxyXG4gICAgdGV4dFBhcGVyIDoge1xyXG4gICAgICAgIG1pbldpZHRoIDogNDAwLFxyXG4gICAgICAgIHdpZHRoIDogJzcwdncnLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidpbmhlcml0J1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3N0ZXBwZXIsIHNldFN0ZXBwZXJdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjozMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9IFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgey8qIGltYWdlIGNhcm91c2VsICovfVxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VDYXJvdXNlbCBcclxuICAgICAgICAgICAgICAgICAgbGlzdD17aW1hZ2VMaXN0fSBcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlPXtjdXJyZW50U2xpZGV9IFxyXG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U2xpZGU9e3NldEN1cnJlbnRTbGlkZX0gXHJcbiAgICAgICAgICAgICAgICAgIHNldFN0ZXBwZXI9e3NldFN0ZXBwZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDIwMDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH19IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBsaXN0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Q3JvdXNlbERlc2NyaXB0aW9uIHN0ZXBwZXI9e3N0ZXBwZXJ9ID48L0xpc3RDcm91c2VsRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IFBhcGVyLCBCb3gsIEdyb3csIEF2YXRhciwgVHlwb2dyYXBoeSxGYWRlICwgU2xpZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgbW9vbkltYWdlIGZyb20gJy4uL2ltYWdlcy9tb29uLnBuZyc7XHJcbmltcG9ydCBDcm9zc2xpbmUgZnJvbSAnLi9Dcm9zc2xpbmUnO1xyXG5pbXBvcnQgUHJvamVjdERlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvYmxhY2sucG5nJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcidcclxuICAgIH0sXHJcbiAgICBsb2dvQm94IDoge1xyXG4gICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93J1xyXG4gICAgfSxcclxuICAgIGJpZ0F2YXRhciA6IHtcclxuICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICB9LFxyXG4gICAgdGV4dFdpdGhTaGFkb3cgOiB7XHJcbiAgICAgIGNvbG9yOicjZmZmJyxcclxuICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICBtYXJnaW5MZWZ0OicydncnLFxyXG4gICAgICB0ZXh0U2hhZG93OiAnMXB4IDVweCA1cHggIzllOTk5OSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbkJveCA6IHtcclxuICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXhXaWR0aCA6ICc1MHZ3JyxcclxuICAgICAgbWFyZ2luIDogJzAgMCAwIDN2dydcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjoyMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICA8Q3Jvc3NsaW5lPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQm94fT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2dyb3d9IHsuLi4oZ3Jvdz8ge3RpbWVvdXQ6e2VudGVyOjUwMDAsIGV4aXQ6ODAwfX0gOiB7fSl9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PSdoZWxwJyBzcmM9e21vb25JbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0F2YXRhcn0vPlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYnV0dG9uJyBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFdpdGhTaGFkb3d9PiBNYW5hZ2VtZW50IEFwcCA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbkJveH0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5BbiBhcHBsaWNhdGlvbiB0aGF0IHlvdSBjYW4gZWFzaWx5IGNyZWF0ZSAmIGRlc2lnbiB5b3VyIG93biBkYXRhLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPkdldCBzdGFydGVkIHdpdGggeW91ciBHb29nbGUgYWNjb3VudCE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5UaGlzIGFwcCB3aWxsIG5vdCBrZWVwIGFueSBwZXJzb25hbCBpbmZvcm1hdGlvbi48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ3Jvc3NsaW5lPlxyXG4gICAgICAgICAgPFByb2plY3REZXNjcmlwdGlvbi8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7VHlwb2dyYXBoeSAsIFN0ZXBwZXIsIFN0ZXAsIEJveCwgU3RlcExhYmVsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzbGlkZVNvdXJjZSBmcm9tICcuL0ltYWdlU2xpZGVTb3VyY2VzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcidcclxuICAgIH0sXHJcbiAgICBpbmxpbmU6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uTGlzdCAoe3N0ZXBwZXJ9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8U3RlcHBlciBhY3RpdmVTdGVwPXtzdGVwcGVyfSBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonaW5oZXJpdCd9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVNvdXJjZS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwIGNvbXBsZXRlZD17aW5kZXggPCBzdGVwcGVyfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cclxuICAgICAgICAgICAgICAgICAgICApfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TdGVwcGVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5EZXNjcmlwdGlvbkxpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcHBlciA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdGFydEJ1dHRvbiBmcm9tIFwiLi9TdGFydEJ1dHRvblwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2Rlc2suanBnXCI7XHJcbmltcG9ydCB7IGF3YWtlU2VydmVyIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBpZihpc0ZpcnN0UmVmKSBhd2FrZVNlcnZlcigpLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICAgICAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSBpc0ZpcnN0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTM1MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjEzMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7dGV4dFNoYWRvdzonNXB4IDEuNXB4IDEuNXB4IGdyYXknfX0+XHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50ID8gJ1dFTENPTUUnIDogJ1JlYWR5IHRvIHN0YXJ0Pyd9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIHtpc0ZpcnN0UmVmLmN1cnJlbnQ/IG51bGwgOiAoPFN0YXJ0QnV0dG9uLz4pfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHtCdXR0b24gLCBCb3gsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgUGxheUFycm93U2hhcnAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tIDogJzAuNXZoJ1xyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzJweCAxcHggMXB4IGdyYXknLFxyXG4gICAgICAgIGNvbG9yIDogJ2luaGVyaXQnXHJcbiAgICB9LFxyXG4gICAgaW5uZXJCb3ggOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzF2aCcsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL21hbmFnZW1lbnQnIHN0eWxlPXt7dGV4dERlY29yYXRpb246J25vbmUnLCBjb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdjb250YWluZWQnIFxyXG4gICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8UGxheUFycm93U2hhcnAgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFNpemUgOiAzMH19Lz59IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURURcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXJyb3cuZDA4MzI4ZjYyZDE5YjY2ZjhlYThkNmQwMDY3MjRjOGIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJsYWNrLjNmMDJhMTMyNzM4NzAwMjI2Yzg0ZWQxZjU4NjNkNTlhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZXNrLjMyMDdjMWVmOTRjODY3ZjgwYjBlOWRmNmFjNzhkNTJiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlYXN5LWxvZ2luLjNlOTFiOGQ4ODczNTY4OTA3OWFmZDA3NmUzZTA3NDIzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJoYW5kbGUtdGFibGUuM2M1ODY5MTRhOTZkNGFmZWRkYzVjN2FkM2Q3ZGYzNTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxpbmstbWFuYWdlbWVudC1wYWdlLjQ4MDA0ZDEzM2I1ZmMyMjU3NzcwNGM5NWViMzVmM2Q4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYWtlLWhlYWRlcnMuY2ZmYWM2MzRmMjlkMzhkZGJkMWY0NDY3YTU3M2ViYzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1hbmFnZW1lbnQtYmFja2dyb3VuZC5hMDA4ZGU4MTM5NTgxYjBkYWJmMTgzMmVkMWM5YzQ2ZS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibW9vbi5mMjA2YmMzZDViZTgzMTFjNzdkOTg5N2RhNDRlMWY2NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibXltZW51LjlmZGQ1OGFjYTc0ZWI0OGQ5NTVmODM1YzllYzg3OTZlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGFydC1yaWdodC1hd2F5LjRlMjE3MjYyZDJjOGQ4NmQ1ZTBmNmVlNDMyYWVmYmNmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ3aGl0ZS1hcnJvdy5jNDQyMmE3YmM1ZWUyM2QwODFiMzU2NmY5M2U5MWYxZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2hpdGViYWNrZ3JvdW5kLmZiMTQwZjVlODEwZGMyMTQ2ZGFkMWI2ZjAzY2FmOWM4LmpwZ1wiOyIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICAoPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8QXBwLz5cclxuICAgIDwvQ29va2llc1Byb3ZpZGVyPilcclxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmFkZSwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoMSlcclxuICAgIH0sXHJcbiAgICBidXR0b25Db250YWluZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcwLjVweCAwLjVweCAxcHggIzAwMDAwMDVjJyxcclxuICAgICAgICBtYXJnaW4gOiAnMCAxdncgMS43dmgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzZhNzQ4YycsXHJcbiAgICB9LFxyXG59KSk7XHJcbmNvbnN0IGRlZmF1bHREYXRhID0ge1xyXG4gICAgY29sdW1ucyA6IFtcclxuICAgICAgeyB0aXRsZTogJ05hbWUnLCBmaWVsZDogJ05hbWUnICwgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7IHRpdGxlOiAnU3VybmFtZScsIGZpZWxkOiAnU3VybmFtZScgfSxcclxuICAgICAgeyB0aXRsZTogJ0JpcnRoIFllYXInLCBmaWVsZDogJ0JpcnRoIFllYXInIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdQaG9uZScgLCBmaWVsZDonUGhvbmUnLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHsgdGl0bGU6ICdHZW5kZXInLCBmaWVsZDogJ0dlbmRlcicsIGdyb3VwaW5nOnRydWUgfSxcclxuICAgICAgeyB0aXRsZTogJ01lbW8nICwgZmllbGQ6J01lbW8nfVxyXG4gICAgXSxcclxuICAgIGRhdGEgOiBbXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdNZWhtZXQnLCAnU3VybmFtZSc6ICdCYXJhbicsIFwiQmlydGggWWVhclwiOiAxOTgzLCBcIlBob25lXCI6JzAxMDQ2NTA5OTk1JyAsXCJHZW5kZXJcIjogMSAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ0FkYW0nLCAnU3VybmFtZSc6ICdBZGFtJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODQsIFwiUGhvbmVcIjonMDEwNDY1MDk3OTUnICxcIkdlbmRlclwiOiAyICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnTWVobWV0JywgJ1N1cm5hbWUnOiAnQXRvbScsIFwiQmlydGggWWVhclwiOiAxOTg1LCBcIlBob25lXCI6JzAxMDQ2NTA5Njk1JyAsXCJHZW5kZXJcIjogMSAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ211bCcsICdTdXJuYW1lJzogJ0tvbmduYScsIFwiQmlydGggWWVhclwiOiAxOTk1LCBcIlBob25lXCI6JzAxMDQ2NTA5MTk1JyAsXCJHZW5kZXJcIjogMSAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ0phY2snLCAnU3VybmFtZSc6ICdKYWNrJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODcsIFwiUGhvbmVcIjonMDEwNDY1MDkyOTUnICxcIkdlbmRlclwiOiAyICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnQm9iJywgJ1N1cm5hbWUnOiAnQm9iJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODgsIFwiUGhvbmVcIjonMDEwNDY1MDkzOTUnICxcIkdlbmRlclwiOiAyICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgXVxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmYXVsdFBhZ2UgKHtzdGF0ZSAsIHNldFN0YXRlLCBtYXRjaH0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmYWRlMiwgc2V0RmFkZTJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlT25ERU1PQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlICwgY29sdW1ucyA6IGRlZmF1bHREYXRhLmNvbHVtbnMgLCBkYXRhIDogZGVmYXVsdERhdGEuZGF0YSwgZGVmYXVsdFBhZ2UgOiAhc3RhdGUuZGVmYXVsdFBhZ2V9KTtcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZXRGYWRlMih0cnVlKSAsIDE1MDApO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogODAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0naW5pdGlhbCcgc3R5bGU9e3t0ZXh0U2hhZG93Oic1cHggMS41cHggMS41cHggZ3JheSd9fT5cclxuICAgICAgICAgICAgICAgIE1hbmFnZW1lbnQgVGFibGVcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGd1dHRlckJvdHRvbSBzdHlsZT17e3RleHRTaGFkb3c6JzJweCAycHggMXB4IGJsYWNrJ319PiBcclxuICAgICAgICAgICAgICAgIFlvdSBtYXkgdHJ5IHRoZSBERU1PIGlmIHRoaXMgeW91ciBmaXJzdCB0aW1lLCBcclxuICAgICAgICAgICAgICAgIG9yIGdldCBzdGFydGVkIHJpZ2h0IGF3YXkhXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2ZhZGUyfSB0aW1lb3V0PXt7ZW50ZXIgOiAzMDAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e2hhbmRsZU9uREVNT0NsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVTRSBERU1PIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaGVhZGVycycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEIFJJR0hUIEFXQVlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufVxyXG5cclxuRGVmYXVsdFBhZ2UucHJvcFR5cGVzID0ge1xyXG4gICAgc3RhdGUgOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGRlZmF1bHRQYWdlIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgICAgICBoYXNUYWJsZSA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY29sdW1ucyA6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBkYXRhIDogUHJvcFR5cGVzLmFycmF5XHJcbiAgICB9KSxcclxuICAgIHNldFN0YXRlIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG4iLCJpbXBvcnQgeyBcclxuICAgIEJveCAsUGFwZXIsIG1ha2VTdHlsZXMsIEZhZGUsIFRleHRGaWVsZCwgVG9vbHRpcCwgVHlwb2dyYXBoeSwgQ2hlY2tib3hcclxufVxyXG4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZ1wiO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7IHNhdmVIZWFkZXJzIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tICcuLi91dGlsL01hbmFnZW1lbnRBUEknO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxMHZoJyxcclxuICAgIH0sXHJcbiAgICBmb3JtUm9vdCA6IHtcclxuICAgICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAuNXZoIDF2dycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNjBjaCcsXHJcbiAgICAgICAgICAgIG1pbldpZHRoIDogJzQwY2gnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMHZoJyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kIDogYG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvbnRhaW4nLFxyXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnM3Z3JyxcclxuICAgICAgICB0cmFuc2Zvcm0gOiAncm90YXRlKDkwZGVnKSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbiA6IHtcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJ1xyXG4gICAgfVxyXG59KSlcclxuY29uc3QgZGVmYXVsdEhlYWRlciA9IHtcclxuICAgIFwiaGVhZGVyMFwiIDogJycsXHJcbiAgICBcImhlYWRlcjFcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIyXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyM1wiIDogJycsXHJcbiAgICBcImhlYWRlcjRcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI1XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNlwiIDogJycsXHJcbiAgICBcImhlYWRlcjdcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI4XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOVwiIDogJycsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVycyAoe2lzTG9hZGluZ30pIHtcclxuICAgIC8vIHN0eWxlLCBjb29raWVcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZSddKTtcclxuICAgIC8vIHN0YXRlc1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gICAgY29uc3QgW3Jlc3VsdFNuYWNrICwgc2V0UmVzdWx0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2UsIGNvbnRlbnQgOiAnJ30pO1xyXG4gICAgY29uc3QgW2RhdGEgLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBoZWFkZXJzIDogZGVmYXVsdEhlYWRlcixcclxuICAgICAgICBncm91cGluZ3MgOiBBcnJheSgxMCkuZmlsbChmYWxzZSksXHJcbiAgICB9KVxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBkYXRhUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5nTGVuZ3RoID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncy5sZW5ndGggOiAwIDogMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzID8gWy4uLnJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzXSA6IFtdIDogW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIC0gZ3JvdXBpbmdMZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cGluZ3MucHVzaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzID8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzIDoge30gOiB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnNMZW5ndGggPSBPYmplY3QudmFsdWVzKGhlYWRlcnMpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBoZWFkZXJzTGVuZ3RoOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbYGhlYWRlciR7aX1gXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge2hlYWRlcnMsZ3JvdXBpbmdzfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtoZWFkZXJzLCBncm91cGluZ3N9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7ICAvLyB1bmF1dGhvcml6ZWQgbm8gY29udGVudHNcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5hdXRob3JpemVkJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT5oYW5kbGVMb2dvdXQoKSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYFBMRUFTRSBMT0dJTiA6KGB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYGVycm9yIChjb2RlIDogJHtyZXNwb25zZS5zdGF0dXN9KWB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PmhhbmRsZUxvZ291dCgpLCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICApXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyb3VwaW5ncyA6IFtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuZ3JvdXBpbmdzXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxbZGF0YS5oZWFkZXJzLCBkYXRhLmdyb3VwaW5nc10pO1xyXG5cclxuICAgIC8vIGVmZmVjdHNcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+eyBcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVN1Ym1pdChkYXRhUmVmLmN1cnJlbnQuaGVhZGVycywgZGF0YVJlZi5jdXJyZW50Lmdyb3VwaW5ncywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGhhbmRsZVByb2dyZXNzKHJlc3VsdCA9PT0gJ2Vycm9yJyA/ICdlcnJvcicgOiAnc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyBldmVudHNcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoaGVhZGVycywgZ3JvdXBpbmdzLCBpc0F1dG9TYXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKGhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpKSB7IC8vIDE16riA7J6QIOydtOyDgSDsoJztlZwg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGhlYWRlcnMpLmZpbHRlcih2PT52KS5sZW5ndGggPT09IDApIHsgICAgIC8vIOu5hOyWtOyeiOydhCDqsr3smrAg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZUhlYWRlcnMoaGVhZGVycyxncm91cGluZ3MpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzQXV0b1NhdmUpIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSwgY29udGVudCA6IHJlc3BvbnNlLnJlc3VsdH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDIwMDApO1xyXG4gICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3Blbjp0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50OidQTEVBU0UgTE9HSU4gOignfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgW2BoZWFkZXIke2luZGV4fWBdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVHcm91cGluZ3MgPSAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGdyb3VwaW5ncyA6IGRhdGEuZ3JvdXBpbmdzLm1hcCgodixpKT0+IGk9PT1pbmRleD8gZS50YXJnZXQuY2hlY2tlZCA6IHYpfSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb21wb25lbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogMTUwMH19PlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezR9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Sb290fSBhdXRvQ29tcGxldGU9J29mZic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J2Rpdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb2xvcj0ndGV4dFByaW1hcnknIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlciBFZGl0IEZvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj17T2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpID8gJ2JsdWUnIDogJ3JlZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSdpbml0aWFsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNSBsZXR0ZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuaGVhZGVycykubWFwKChoZWFkZXIsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpbmRleD09PTA/IHRydWU6ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpZD17YCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17YGhlYWRlci0ke2luZGV4KzF9YH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49J25vcm1hbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0Q2hhbmdlKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2RhdGEuaGVhZGVyc1tgaGVhZGVyJHtpbmRleH1gXS5sZW5ndGggPiAxNSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlxyXG5Zb3UgY2FuIGFycmFuZ2UgdGhlIGRhdGEgd2l0aCBhIHZhbGlkIGhlYWRlciwgXHJcblVuaXF1ZSB2YWx1ZXMgYXJlIG5vdCBjb21tb25seSB1c2VkIGZvciB0aGlzIGZ1bmN0aW9uIGluIGdlbmVyYWwuXHJcbmUuZy4pIG5hbWUsIGFkZHJlc3MsIG1vYmlsZSBOTy4gZXRjLlxyXG5cIlxyXG4gICAgICAgICAgICAgICAgIHBsYWNlbWVudD0ncmlnaHQnIGVudGVyRGVsYXk9ezIwMH0gbGVhdmVEZWxheT17MjAwfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGF0YS5ncm91cGluZ3NbaW5kZXhdfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVHcm91cGluZ3MoZSxpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICB7aW5kZXg9PT0wPyBcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3BhbicgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT4gR3JvdXBpbmchPzwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlNVQk1JVFwiIGFyaWEtbGFiZWw9J3N1Ym1pdCcgcGxhY2VtZW50PSd0b3AnIGVudGVyRGVsYXk9ezIwMH0gbGVhdmVEZWxheT17NDAwfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3d9IG9uTW91c2VPdmVyPXsoZSk9PmUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ31cclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVTdWJtaXQoZGF0YS5oZWFkZXJzICwgZGF0YS5ncm91cGluZ3MpfS8+XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgY29udGVudD17YEhlYWRlciBzaG91bGQgYmUgbGVzcyB0aGFuIDE1IGxldHRlcnMgOihgfSBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17cmVzdWx0U25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFJlc3VsdFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e3Jlc3VsdFNuYWNrLmNvbnRlbnR9IHN0YXR1cz17cmVzdWx0U25hY2suc3RhdHVzPT09J2Vycm9yJz8gJ2Vycm9yJyA6ICdzdWNjZXNzJ30vPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkhlYWRlcnMucHJvcFR5cGVzID0ge1xyXG4gICAgaXNMb2FkaW5nIDogUHJvcFR5cGVzLmJvb2xcclxufSIsImltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnO1xyXG5pbXBvcnQgTWFudWFsRGlhbG9nIGZyb20gXCIuL01hbnVhbERpYWxvZ1wiO1xyXG5pbXBvcnQgeyBvcHRpb25zLGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL1RhYmxlT3B0aW9uc1wiO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBEZWZhdWx0UGFnZSBmcm9tICcuL0RlZmF1bHRQYWdlJztcclxuaW1wb3J0IHBhcnNlRGF0YSBmcm9tICcuLi91dGlsL3BhcnNlRGF0YSc7XHJcbmltcG9ydCBTYXZlQnV0dG9uIGZyb20gJy4vU2F2ZUJ1dHRvbic7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuLy8gdXNlRWZmZWN066GcIGRhdGEsIGNvbHVtbnMg6rCAIOuzgOqyveuQoCDrlYzrp4jri6Qg7ISc67KE7JeQIOyggOyepSDtm4Qg6rCx7IugXHJcbi8vIC4vdXRpbCDqsr3roZzsl5Ag66Gc7KeBIOyekeyEsVxyXG4vLyDthrXsi6Dsl5Ag64yA7ZWcIHRlc3Rjb2Rl7J6R7ISxXHJcbi8vIGNvbHVtbnPsmYAgZGF0YeydmCDqsIEg6rCS65Ok7JeQIOuMgO2VnCDrrLTqsrDshLEg7LK07YGsXHJcbi8vIHByb3BzVHlwZSDsnpHshLFcclxuLy8gU2lkZU1lbnVMaXN0ID0+IExvZ2lu7Jy866GcIOuzgOqyvSwg67mE66Gc6re47J24IOyLnCBMT0dJTuycvOuhnCDrs7Tsnbwg6rKDLCDroZzqt7jsnbjsi5wgTVkgTUVOVeuhnCDrs7TquLBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VtZW50VGFibGUoe2lzTG9hZGluZywgc2V0RXJyb3JTbmFja30pIHtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcbiAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgLy8gc3RhdGVzXHJcbiAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3NhdmVkU25hY2sgLCBzZXRTYXZlZFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHsgIC8vIOy1nOy0iCBBUEnroZwg67Cb7JWE7Jik64qUIOuPmeyeke2VhOyalFxyXG4gICAgZGVmYXVsdFBhZ2UgOiB0cnVlLFxyXG4gICAgaGFzVGFibGUgOiBmYWxzZSxcclxuICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgZGF0YTogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgdGFibGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3RydWN0b3JcclxuICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXMgOiAke3Jlc3BvbnNlLnN0YXR1c30gLCBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKTtcclxuICAgICAgICAgIC8vIOycoOyggCDtmZXsnbjrkJDqs6Ag7YWM7J2067iU64+EIOu5hOyWtOyeiOyngCDslYrsnYQg6rK97JqwXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzPT09MjAwICYmIHJlc3BvbnNlLmRhdGEuaGVhZGVycykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57c2V0U25hY2soe29wZW46dHJ1ZX0pfSw0MDApO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgY29sdW1ucyA6IHBhcnNlRGF0YShyZXNwb25zZS5kYXRhLmhlYWRlcnMgLCByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyksXHJcbiAgICAgICAgICAgICAgZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICBkZWZhdWx0UGFnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGhhc1RhYmxlIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlLCBjb250ZW50OifrjbDsnbTthLDrpbwg67aI65+s7Jik64qUIOykkSDsl5Drn6wg67Cc7IOdLid9KTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGV2ZW50c1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge3NldERpYWxvZyh7b3BlbiA6IGZhbHNlfSk7fTtcclxuICBjb25zdCBoYW5kbGVPblNhdmUgPSAoaXNBdXRvU2F2ZSkgPT4ge1xyXG4gICAgICAvLyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIOydmCByZWbsl5DshJwg7Iug66Kw64+E7J6I64qUIOuNsOydtO2EsCDssLjsobBcclxuICAgICAgaWYgKCFjb29raWVzLnByb2ZpbGUpIHtcclxuICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWUsIGNvbnRlbnQ6J+yggOyepeydgCDroZzqt7jsnbgg66i87KCAIOynhO2Wie2VtOyjvOyEuOyalCA6KSd9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbm90IGxvZ2dlZCcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgICAgb2JqW2BoZWFkZXIke2l9YF0gPSB2LnRpdGxlO1xyXG4gICAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0se30pXHJcbiAgICAgICAgdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlci5kYXRhLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICAgIGNvbnN0IHt0YWJsZURhdGEsIC4uLnJlc3R9ID0gdjtcclxuICAgICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzYXZlRGF0YShoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgIGlmKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIGlmKCFpc0F1dG9TYXZlKSBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBvY2N1cmVkIGR1cmluZyBoYW5kbGVPblNhdmUgOiAke2Vycn1gKTtcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlLCBjb250ZW50OifroZzqt7jsnbgg7Iuc6rCE7J20IOunjOujjOuQnCDqsoMg6rCZ7Iq164uI64ukLiDri6Tsi5wg7Iuc64+E7ZW067O07IS47JqUJ30pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGVmZmVjdHNcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyAgIC8vIHdpbmRvdyDrjZTruJTtgbTrpq0g7J2067Kk7Yq4IOy2lOqwgCwg64+E7JuA66eQIG9wZW5cclxuICAgIGNvbnN0IG9uZGJDbGljayA9ICgpID0+IHNldERpYWxvZyh7b3BlbiA6ICFkaWFsb2cub3Blbn0pO1xyXG4gICAgY29uc3Qgb25LZXlkb3duID0gKGUpID0+IHsgICAvLyBjdHJsICsgc+uhnCDsoIDsnqUgZXZlbnRcclxuICAgICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybS5tYXRjaChcIk1hY1wiKSA/IGUubWV0YUtleSA6IGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IDgzKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhhbmRsZU9uU2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgICAgLy8g7LSI6riw7KCR6re87J2YIOqyveyasCDrjbDsnbTthLDqsIAg7JeG7Ja0IOyXkOufrCDrsJzsg53tlaAg7IiYIOyeiOyWtCDsgrztla3si53snLzroZwg7YyQ64uoIO2bhCDslrjrp4jsmrTtirjsi5zsnZggZmV0Y2hBUEnsi6TtlolcclxuICAgICAgdGFibGVSZWYuY3VycmVudCA/IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIgPyBoYW5kbGVPblNhdmUodHJ1ZSkgOiBudWxsIDogbnVsbDtcclxuICAgICAgdGFibGVSZWYuY3VycmVudCA/IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIgPyBoYW5kbGVQcm9ncmVzcygnc3VjY2VzcycpIDogbnVsbCA6IG51bGw7XHJcbiAgfTtcclxufSwgW10pO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG4gIGNvbnN0IE1hcmdpbiA9ICgpID0+ICg8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDBweCd9fT48L0JveD4pOyAgLy8g7Jes67CxXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICB7XHJcbiAgICBzdGF0ZS5kZWZhdWx0UGFnZSA/XHJcbiAgICAgICg8RGVmYXVsdFBhZ2Ugc3RhdGU9e3N0YXRlfSBzZXRTdGF0ZT17c2V0U3RhdGV9Lz4pXHJcbiAgICA6IFxyXG4gICAgKDxCb3g+XHJcbiAgICAgICAgPE1hbnVhbERpYWxvZyBvcGVuPXtkaWFsb2cub3Blbn0gb25DbG9zZT17aGFuZGxlRGlhbG9nQ2xvc2V9Lz5cclxuICAgIDxNYXJnaW4vPlxyXG4gICAgPE1hdGVyaWFsVGFibGVcclxuICAgICAgdGFibGVSZWY9e3RhYmxlUmVmfVxyXG4gICAgICB0aXRsZT17XHJcbiAgICAgIDxTYXZlQnV0dG9uIHNldFNhdmVkU25hY2s9e3NldFNhdmVkU25hY2t9XHJcbiAgICAgIHNldEVycm9yU25hY2s9e3NldEVycm9yU25hY2t9XHJcbiAgICAgIHByb2ZpbGU9e2Nvb2tpZXMucHJvZmlsZX1cclxuICAgICAgLy8g66eI7Jq07Yq4IOydtO2bhOyXkCDsoJHqt7ztlYTsmpRcclxuICAgICAgZGF0YU1hbmFnZXI9e3RhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIDoge319Lz5cclxuICAgIH1cclxuICAgICAgY29sdW1ucz17c3RhdGUuY29sdW1uc31cclxuICAgICAgZGF0YT17c3RhdGUuZGF0YX1cclxuICAgICAgbG9jYWxpemF0aW9uPXtsb2NhbGl6YXRpb259IC8vIOuhnOy7rOudvOydtOymiFxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfSAvLyDrgrTrs7TrgrTquLAsIOq3uOujqO2VkVxyXG4gICAgICBhY3Rpb25zPXtbLy8g66mA7YuwIOyFgOugieyFmCDsnpHsl4VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvb2x0aXAgOiAnUmVtb3ZlIHRoZSBTZWxlY3RlZCByb3cocyknLFxyXG4gICAgICAgICAgICBpY29uIDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgIG9uQ2xpY2sgOiAoZSAsIGRlbGV0aW9ucykgPT4geyAgLy8g7ISg7YOd7ZWcIOyytO2BrOuwleyKpOyXkCDrjIDtlbQg66qo65GQIOyCreygnCDsp4TtlolcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4uc3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkZWxldGlvbnMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoZGF0YS5pbmRleE9mKHYpLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldkRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2RGF0YSAsIGRhdGF9O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF19IFxyXG4gICAgICBlZGl0YWJsZT17e1xyXG4gICAgICAgIG9uUm93QWRkOiAobmV3RGF0YSkgPT4gIC8vIOy2lOqwgFxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBvblJvd1VwZGF0ZTogKG5ld0RhdGEsIG9sZERhdGEpID0+ICAvLyDsiJjsoJVcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvbGREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhW2RhdGEuaW5kZXhPZihvbGREYXRhKV0gPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSduZWVkIHNvbWUgaGVscD8gPyBkb3VibGUtY2xpY2sgYW55IHNwYWNlICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c2F2ZWRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U2F2ZWRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J1NBVkVEICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8L0JveD5cclxuICAgICl9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbk1hbmFnZW1lbnRUYWJsZS5wcm9wVHlwZXMgPSB7XHJcbiAgaXNMb2FkaW5nIDogUHJvcFR5cGVzLmJvb2xcclxufSIsIlxyXG5pbXBvcnQge0RpYWxvZyxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgQm94LFxyXG4gICAgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+IHtcclxuICAgIGljb24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnM3Z3J1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW51YWxEaWFsb2cgKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtvcGVuLCBvbkNsb3NlfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaWNvbnMgPSBbXHJcbiAgICAgICAge2ljb24gOiAnYWRkX2JveCcgLCBkZXNjcmlwdGlvbiA6ICdbQWRkXSByb3dzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2NyZWF0ZScgLCBkZXNjcmlwdGlvbiA6ICdbRWRpdF0gcmVjb3Jkcy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzZWFyY2gnICwgZGVzY3JpcHRpb24gOiAnVHlwZSBkb3duIHdvcmRzIHRvIFtzZWFyY2hdLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NhdmVfYWx0JyAsIGRlc2NyaXB0aW9uIDogJ1tEb3dubG9hZF0gZmlsZXMgaW4gQ1ZTIGZvcm1hdC4nfSxcclxuICAgICAgICB7aWNvbiA6ICd2aWV3X3dlZWsnICwgZGVzY3JpcHRpb24gOiAnW1NlbGVjdF0gY29sdW1ucyB0byBiZSBkaXNwbGF5ZWQnfSxcclxuICAgICAgICB7aWNvbiA6ICdwbGF5bGlzdF9hZGRfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBbZGVsZXRlXSByb3dzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2NoZWNrX2JveCcgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIFNlbGVjdCB0aGUgY2hlY2tib3ggb24gdGhlIHJvdy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdmYWN0X2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2hlY2sgdGhlIG51bWJlciBvZiB0aGUgcm93cyBzZWxlY3RlZC4nfSxcclxuICAgICAgICB7aWNvbiA6ICdkZWxldGUnICwgZGVzY3JpcHRpb24gOiAnIOKRoiBDbGljayB0aGUgQmluIGljb24gb24gdGhlIHJpZ2h0IGFib3ZlLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtFZGl0XSBoZWFkZXJzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ21lbnUnICwgZGVzY3JpcHRpb24gOiAnIOKRoCBPcGVuIE1ZUEFHRSd9LFxyXG4gICAgICAgIHtpY29uIDogJ2NyZWF0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENsaWNrIHRoZSBQZW5jaWwgaWNvbid9LFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8RGlhbG9nIG9uQ2xvc2U9e29uQ2xvc2V9IG9wZW49e29wZW59PlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZT4gQkFTSUMgTUFOVUFMIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGljb25zLm1hcCgoaWNvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2Ake2ljb259ICsgJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2BtYXRlcmlhbC1pY29ucyAke2NsYXNzZXMuaWNvbn1gfSBzdHlsZT17e3dpZHRoOiczdncnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2ljb24uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgICApXHJcbn1cclxuTWFudWFsRGlhbG9nLnByb3BUeXBlcyA9IHtcclxuICAgIG9wZW4gOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgb25DbG9zZSA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZUJ1dHRvbiAoe3NldFNhdmVkU25hY2sgLCBkYXRhTWFuYWdlciwgcHJvZmlsZSwgc2V0RXJyb3JTbmFja30pIHtcclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKCkge1xyXG4gICAgICAgICAgaWYgKCFwcm9maWxlKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZSAsIGNvbnRlbnQ6J+uhnOq3uOyduCDrqLzsoIAg7KeE7ZaJ7ZW07KO87IS47JqUIDopJ30pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGxvZ2dlZCcpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gU0FWRSBFVkVOVCB1dGlsID4gTWFuYWdlbWVudEFQSS5zYXZlRGF0YSDrp4zrk6TslrTshJwg7L2c7ZWY6riwXHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgICAgICBjb25zdCBncm91cGluZ3MgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBkYXRhTWFuYWdlci5jb2x1bW5zLnJlZHVjZSgob2JqLHYsaSk9PntcclxuICAgICAgICAgICAgb2JqW2BoZWFkZXIke2l9YF0gPSB2LnRpdGxlO1xyXG4gICAgICAgICAgICBncm91cGluZ3MucHVzaCh2Lmdyb3VwaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgIH0se30pO1xyXG4gICAgICAgICAgZGF0YU1hbmFnZXIuZGF0YS5mb3JFYWNoKCh2LGkpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHt0YWJsZURhdGEsIC4uLnJlc3R9ID0gdjtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKHJlc3QpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgcmVzdWx0IDogXHJcbiAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGRhdGEpfVxyXG4gICAgICAgICAgJHtncm91cGluZ3N9XHJcbiAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGhlYWRlcnMpfVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgc2F2ZURhdGEoaGVhZGVycyxncm91cGluZ3MsZGF0YSkudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgc2V0U2F2ZWRTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxUb29sdGlwIHRpdGxlPSdDbGljayB0byBTQVZFICggQ3RybCArIFMgKSc+XHJcbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIFxyXG4gICAgICAgIG9uQ2xpY2s9eygpPT5vbkNsaWNrKCl9PlxyXG4gICAgICAgICAgU0FWRVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1Rvb2x0aXA+XHJcbiAgICApXHJcbn1cclxuXHJcblNhdmVCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHNldFNhdmVkU25hY2sgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGRhdGFNYW5hZ2VyIDogUHJvcFR5cGVzLm9iamVjdFxyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtBZGRCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbi8vIERBVEEgVEFCTEUgT1BUSU9OU1xyXG5cclxuIGV4cG9ydCBjb25zdCBvcHRpb25zPSB7XHJcbiAgICBleHBvcnRCdXR0b246IHRydWUsXHJcbiAgICBncm91cGluZzp0cnVlLFxyXG4gICAgc2VsZWN0aW9uOnRydWUsXHJcbiAgICBoZWFkZXJTdHlsZTp7IFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uc0NvbHVtbkluZGV4Oi0xLCAgLy8g7JWh7IWYIOyVhOydtOy9mOychOy5mFxyXG4gICAgY29sdW1uc0J1dHRvbiA6IHRydWUsIFxyXG4gICAgZGVib3VuY2VJbnRlcnZhbCA6IDE2MCwgLy8g66Gc65Sp7Iuc6rCEXHJcbiAgICBwYWdlU2l6ZSA6IDE1LCAgICAgICAgICAvLyDtjpjsnbTsp4DsgqzsnbTspohcclxuICAgIHBhZ2VTaXplT3B0aW9ucyA6IFs1LCAxNSwgMzAsIDUwLCAxMDBdLCAvLyDtjpjsnbTspogg7IKs7J207KaIIOyiheulmFxyXG4gIH1cclxuIGV4cG9ydCBjb25zdCBsb2NhbGl6YXRpb24gPSB7XHJcbiAgICBwYWdpbmF0aW9uIDogeyBsYWJlbERpc3BsYXllZFJvd3MgOiAne2NvdW50fSByb3dzIHwge2Zyb219LXt0b30nICwgfSxcclxuICAgIHRvb2xiYXI6IHtuUm93c1NlbGVjdGVkOiAnezB9IHJvdyhzKSBzZWxlY3RlZCd9LFxyXG4gICAgaGVhZGVyOiB7YWN0aW9uczogJ0VkaXQnfSxcclxuICAgIGJvZHk6IHtlbXB0eURhdGFTb3VyY2VNZXNzYWdlOiBcclxuICAgICAgICAoXHJcbiAgICAgICAgPEJveCBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICB7YE5vIFJlY29yZHMgdG8gZGlzcGxheWB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgZW5kSWNvbj17PEFkZEJveC8+fVxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2BDbGljayB0aGUgcGx1cyBpY29uIG9uIHRoZSByaWdodCBhYm92ZSBmb3IgYSBuZXcgcmVjb3JkLiBgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gIH1cclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7VG9vbGJhciwgRHJhd2VyICwgQnV0dG9uICwgR3JpZCxcclxuICAgICBEaXZpZGVyLCBBcHBCYXIgYXMgQXBwYmFyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBIaWRlT25TY2hyb2xsIGZyb20gXCIuLi9jdXN0b21Ib29rL0hpZGVPblNjaHJvbGxcIjtcclxuaW1wb3J0IFNpZGVNZW51TGlzdCBmcm9tIFwiLi9TaWRlTWVudUxpc3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBTaWduT3V0QnV0dG9uIGZyb20gXCIuL1NpZ25PdXRCdXR0b25cIjtcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBhbGlnbkl0ZW1zOidmbGV4LXN0YXJ0JyxcclxuICAgICAgICBwYWRkaW5nVG9wOjE4LFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206MTgsXHJcbiAgICB9LFxyXG4gICAgbGVmdCA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBwYWRkaW5nTGVmdDozMCxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LXN0YXJ0J1xyXG4gICAgfSxcclxuICAgIGNlbnRlciA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICByaWdodCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDo0NSxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LWVuZCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIHBhZGRpbmc6YDAgJHt0aGVtZS5zcGFjaW5nKDMpfWBcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYgKHByb3BzKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBtZW51IDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3IsIG9wZW4pID0+IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZsYWcgPSBvcGVuPyBzdGF0ZVthbmNob3JdID8gZmFsc2UgOiB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IGZsYWcgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgYW5jaG9yID0gcHJvZmlsZS5uYW1lPyAnTVlQQUdFJyA6J0xPR0lOJztcclxuICAgIGNvbnN0IGxpbmtzID0gWydndWVzdGJvb2snLCdtYW5hZ2VtZW50J107XHJcbiAgICBjb25zdCBMb2dvdXRCdG4gPSBwcm9maWxlLm5hbWU/IDxTaWduT3V0QnV0dG9uLz4gOiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIaWRlT25TY2hyb2xsIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEFwcGJhciBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tib3hTaGFkb3c6J25vbmUnfX0+XHJcbiAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IEhvbWUgPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtsaW5rfWB9IHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fSBrZXk9e2xpbmt9PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiB7bGlua30gPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT48c3Bhbj48L3NwYW4+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdwcmltYXJ5JyBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0gc3R5bGU9e3ttYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YW5jaG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtMb2dvdXRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlciBvcGVuPXtzdGF0ZVthbmNob3JdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IHZhcmlhbnQ9J3BlcnNpc3RlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7U2lkZU1lbnVMaXN0KCB7Li4ucHJvcHMsIGFuY2hvciAsdG9nZ2xlRHJhd2VyICwgcHJvZmlsZX0gKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBiYXI+XHJcbiAgICAgICAgPC9IaWRlT25TY2hyb2xsPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbVRleHQsIExpc3RJdGVtQXZhdGFyICwgRGl2aWRlciwgTGlzdEl0ZW0sIFR5cG9ncmFwaHkgLCBBdmF0YXIsIEljb25CdXR0b24gLFxyXG4gICAgIE1vZGFsLCBCb3gsIEJ1dHRvbixcclxuICAgICBQYXBlcixcclxuICAgICBUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFNpZ25JbkJ1dHRvbiBmcm9tICcuL1NpZ25JbkJ1dHRvbic7XHJcbmltcG9ydCBnb29nbGVTaWduaW5JbWFnZSBmcm9tICcuLi9idXR0b25JbWFnZS9nb29nbGVTaWduaW4ucG5nJztcclxuaW1wb3J0IHtyZWRpcmVjdEdvb2dsZUxvZ2lufSBmcm9tICcuLi91dGlsL0xvZ2luQVBJJztcclxuaW1wb3J0IHtFZGl0LCBJbmZvLCBEZWxldGVGb3JldmVyLCBXYXJuaW5nfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCB7R2xvYmFsU25hY2tiYXJDb250ZXh0fSBmcm9tICcuLi9hcHAnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbGlzdCA6IHtcclxuICAgICAgICB3aWR0aCA6ICcyM3Z3JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdzdGFydCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW0gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW1UZXh0IDoge1xyXG4gICAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYXJnZUF2YXRhciA6IHtcclxuICAgICAgICB3aWR0aCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgIH0sXHJcbiAgICBpbmxpbmUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdpbmxpbmUnXHJcbiAgICB9LFxyXG4gICAgbGlzdFRleHQgOiB7XHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbW9kYWwgOiB7XHJcbiAgICAgICAgdG9wIDogJzUwJScsXHJcbiAgICAgICAgbGVmdCA6ICc1MCUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICBtaW5XaWR0aCA6IDQwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBtb2RhbFJvd0JveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsQ29sQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdzdGFydCdcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJ1xyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUxpc3QgKHthbmNob3IgLCB0b2dnbGVEcmF3ZXIsIHByb2ZpbGV9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBoYW5kbGVHbG9iYWxTbmFja2JhciA9IFJlYWN0LnVzZUNvbnRleHQoR2xvYmFsU25hY2tiYXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtlbWFpbElucHV0LCBzZXRFbWFpbElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2tMb2dpbiAoKSB7XHJcbiAgICAgICAgcmVkaXJlY3RHb29nbGVMb2dpbigpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja01vZGFsID0gKCkgPT4gc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRFbWFpbElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbWFpbElucHV0ID09PSBwcm9maWxlLmVtYWlsKSB7XHJcbiAgICAgICAgICAgIHNhdmVEYXRhKHt9LFtdLFt7fV0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHbG9iYWxTbmFja2Jhcih7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbjp0cnVlLCBcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGRhdGEucmVzdWx0ID09PSAnc3VjY2VzcycgPyAnc3VjY2VzcycgOiAnZXJyb3InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgICAgICAgICAgICB9LDE1MDApO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUdsb2JhbFNuYWNrYmFyKHtcclxuICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6J2Vycm9yJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gcHJvZmlsZT8gcHJvZmlsZS5uYW1lPyB0cnVlIDogZmFsc2UgOiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2lzTG9nZ2VkPyAnUFJPRklMRScgOiAnTE9HSU4gTUVOVSd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcblxyXG4gICAgICAgICAgICB7aXNMb2dnZWQ/IFxyXG5cclxuICAgICAgICAgICAgKDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPSdjZW50ZXInIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17cHJvZmlsZS5waWN0dXJlfSBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2VBdmF0YXJ9IGFsdD17cHJvZmlsZS5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Byb2ZpbGUubmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RUZXh0fT48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdFTUFJTCA6ICcgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdzcGFuJyB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRQcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5lbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm8gY29sb3I9J3ByaW1hcnknIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzF2dyd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBzZWNvbmRhcnk9J0VESVQgSEVBREVSUycvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaGVhZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J2VuZCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgY29sb3I9J3ByaW1hcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8V2FybmluZyBjb2xvcj0nc2Vjb25kYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdSRU1PVkUgQUxMIERBVEEnLz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJyBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlciBjb2xvcj0nc2Vjb25kYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7Lyog66qo64usICovfVxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBvcGVuPXttb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZU9uQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1jb250ZW50c1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsUm93Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J3N0YXJ0JyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcicgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLXRpdGxlXCIgdmFyaWFudD0nYnV0dG9uJyBkaXNwbGF5PSdibG9jaycgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhdXRpb24gOiBwZXJtYW5lbnQgZGVsZXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsQ29sQm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtY29udGVudHNcIiB2YXJpYW50PSdib2R5MScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgQWxsIGRhdGEgd2lsbCBiZSBkZWxldGVkIGFuZCBjYW5ub3QgYmUgcmVjb3ZlcmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGNvcnJlY3RseSB0byBjb250aW51ZS5gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbic+e3Byb2ZpbGUuZW1haWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxSb3dCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD0nRS1NQUlMJyBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgKDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTG9naW59PlxyXG4gICAgICAgICAgICAgICAgPFNpZ25JbkJ1dHRvbiBzaWduSW49e2dvb2dsZVNpZ25pbkltYWdlfS8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+KX1cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbk1lbnVMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIGFuY2hvciA6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRvZ2dsZURyYXdlciA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9maWxlIDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluQnV0dG9uIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7c2lnbklufSA9IHByb3BzOyAvLyDsnbTrr7jsp4BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3NpZ25Jbn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+PC9pbWc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwJztcclxuaW1wb3J0IHsgTGlzdEl0ZW0gLCBJY29uQnV0dG9uLCBUb29sdGlwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCIuLi91dGlsL0xvZ2luQVBJXCI7XHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbG9nb3V0IDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6IDAsXHJcbiAgICAgICAgd2lkdGggOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGQnXHJcbiAgICB9LFxyXG4gIH0pKShUb29sdGlwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG4gICAgICAgIGxvZ291dCgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZUNvb2tpZSgndXNlcicpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT0nTG9nLW91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3twYWRkaW5nOjR9fSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhpdFRvQXBwSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+ICAgIFxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gJy4vc2VydmVyVVJMJztcclxuXHJcbi8vIGd1ZXN0Ym9vayBsaXN0IOuwm+yVhOyYpOq4sCAzMOqwnFxyXG5leHBvcnQgY29uc3QgZ2V0R3Vlc3Rib29rTGlzdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vZ3Vlc3Rib29rYCx7d2l0aENyZWRlbnRpYWxzOnRydWV9KSlcclxufVxyXG5cclxuLy8g65Ox66GdXHJcbmV4cG9ydCBjb25zdCBwb3N0R3Vlc3Rib29rID0gKGNvbnRlbnQsIHByb2ZpbGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBwcm9maWxlIDogJHtwcm9maWxlfWApO1xyXG4gICAgaWYgKCFwcm9maWxlLm5hbWUgfHwgIXByb2ZpbGUucGljdHVyZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBwb3N0R3Vlc3Rib29rIDogcGFyYW1ldGVyIGhhcyBlbXB0eWApO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7c2VydmVyVVJMfS9ndWVzdGJvb2tgICwge1xyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgIG5hbWUgOiBwcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICAgIHBpY3R1cmUgOiBwcm9maWxlLnBpY3R1cmVcclxuICAgICAgICB9LFxyXG4gICAgfSwge3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuLy8g7IiY7KCVXHJcbi8vIGV4cG9ydCBjb25zdCB1cGRhdGVHdWVzdGJvb2sgPSAoYXJ0aWNsZUlkLCBjb250ZW50KSA9PiB7XHJcbi8vICAgICByZXR1cm4gYXhpb3MucHV0KGAke3NlcnZlclVSTH0vZ3Vlc3Rib29rYCwge1xyXG4vLyAgICAgICAgIGRhdGEgOiB7XHJcbi8vICAgICAgICAgICAgIGFydGljbGVJZCxcclxuLy8gICAgICAgICAgICAgY29udGVudFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0se3dpdGhDcmVkZW50aWFscyA6IHRydWV9KVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlR3Vlc3Rib29rID0gKGFydGljbGVfaWQpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYCR7c2VydmVyVVJMfS9ndWVzdGJvb2tgICwge1xyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIGFydGljbGVfaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyA6IHRydWVcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSBcIi4vc2VydmVyVVJMXCI7XHJcblxyXG4vLyBVUkwgZXhwb3J0XHJcbi8vIHNldmVy7JeQ7IScIOuwm+ydgCB1cmzroZwg66as64uk7J2066CJ7Yq4XHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdEdvb2dsZUxvZ2luID0gKCkgPT4gYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbG9naW5gKS50aGVuKHJlcyA9PiBsb2NhdGlvbi5hc3NpZ24ocmVzLmRhdGEpKTtcclxuZXhwb3J0IGNvbnN0IGdldFRva2VuQW5kUHJvZmlsZSA9ICh0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7c2VydmVyVVJMfS9sb2dpbmAsIHt0b2tlbn0gLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlLFxyXG4gICAgfSkudGhlbihyZXNwb25zZT0+UHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpKTtcclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2xvZ291dGAse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gJy4vc2VydmVyVVJMJztcclxuXHJcbi8vIO2FjOydtOu4lCDrjbDsnbTthLAg67Cb7JWE7Jik6riwIGNvb2tpZeyXkCDri7TquLQgdG9rZW7sgqzsmqlcclxuZXhwb3J0IGNvbnN0IGdldE1hbmFnZW1lbnRUYWJsZSA9ICAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L21hbmFnZW1lbnRgLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZVxyXG4gICAgfSkpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBhd2FrZVNlcnZlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vYXdha2VgKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHNhdmVIZWFkZXJzID0gKGhlYWRlcnMsIGdyb3VwaW5ncykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHNhdmluZyBoZWFkZXJzIDogXHJcbiAgICBoZWFkZXJzIDogJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgIGdyb3VwaW5ncyA6ICR7SlNPTi5zdHJpbmdpZnkoZ3JvdXBpbmdzKX1gKTtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vaGVhZGVyc2AsIHtcclxuICAgICAgICAvLyBkYXRhXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBncm91cGluZ3NcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSkpOyAgICAvLyDsv6DtgqTsmYAg7ZWo6ruYXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlRGF0YSA9IChoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vZGF0YWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5ncyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoNDAwKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgfSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKGhlYWRlcnMgLCBncm91cGluZ3MpID0+IHtcclxuICBjb25zb2xlLmxvZyhgZGF0YSBwYXJzaW5nISEhIWApXHJcbiAgICByZXR1cm4gKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLm1hcCgodmFsdWUsaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSA6IHZhbHVlLFxyXG4gICAgICAgIGZpZWxkIDogdmFsdWUsXHJcbiAgICAgICAgZ3JvdXBpbmcgOiBncm91cGluZ3NbaW5kZXhdXHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9IiwiZXhwb3J0IGRlZmF1bHQgXCJodHRwczovL21hbmFnZW1lbnQtYXBwbGUuaGVyb2t1YXBwLmNvbVwiO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiOyJdLCJzb3VyY2VSb290IjoiIn0=