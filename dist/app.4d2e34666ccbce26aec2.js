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

/***/ "./src/board/Board.js":
/*!****************************!*\
  !*** ./src/board/Board.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _customHook_Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customHook/Loading */ "./src/customHook/Loading.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _customHook_SnackBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customHook/SnackBar */ "./src/customHook/SnackBar.js");
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
      zIndex: 1
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
      width: '60vw',
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
      width: '60vw',
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
function Board(_ref) {
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

  var logRef = React.useRef(state.chatLogs);
  var chatContainerRef = React.useRef();

  var onInputChange = function onInputChange(e) {
    var value = e.target.value;

    if (value.length < 80) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        input: value
      }));
    } else if (value.length >= 80) {
      setSnack({
        open: true
      });
    }

    console.log(value.length);
  };

  var enterKeyHandler = function enterKeyHandler(e) {
    if (e.keyCode === 13) {
      // enter pressed
      var input = inputRef.current ? inputRef.current.querySelector('#message') : '';

      if (input) {
        input.focus();
        chatContainerRef.current.scrollTo(0, chatContainerRef.current.scrollHeight);

        if (input.value) {
          // post API & get API
          logRef.current = [].concat(_toConsumableArray(logRef.current), [input.value]);
          setState({
            input: '',
            chatLogs: logRef.current
          });
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
    content: "max length : 80",
    status: "error"
  }));
}
Board.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, location.pathname === '/board' ? null : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svRXJyb3JGYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9IaWRlT25TY2hyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svU25hY2tCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Dcm9zc2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbWFnZVNsaWRlU291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9MaXN0Q2Fyb3VzZWxEZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL1N0YXJ0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXJyb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmxhY2sucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZGVzay5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9lYXN5LWxvZ2luLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hhbmRsZS10YWJsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9saW5rLW1hbmFnZW1lbnQtcGFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYWtlLWhlYWRlcnMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21vb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbXltZW51LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NsaWRlMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGFydC1yaWdodC1hd2F5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3doaXRlLWFycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3doaXRlYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L0RlZmF1bHRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L0hlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW51YWxEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvU2F2ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9UYWJsZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9TaWRlTWVudUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9TaWduSW5CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9TaWduT3V0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0xvZ2luQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL01hbmFnZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGFyc2VEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3NlcnZlclVSTC5qcyJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkxvZ291dENvbnRleHQiLCJQcm9ncmVzc0NvbnRleHQiLCJHbG9iYWxTbmFja2JhckNvbnRleHQiLCJBcHAiLCJxcyIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwiaWRfdG9rZW4iLCJ1c2VDb29raWVzIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsInVzZVN0YXRlIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJvcGVuIiwicmVzdWx0IiwiZ2xvYmFsU25hY2tiYXIiLCJzZXRHbG9iYWxTbmFja2JhciIsInByb2dyZXNzUmVmIiwidXNlUmVmIiwiaGFuZGxlQmVmb3JldW5sb2FkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInVzZUVmZmVjdCIsImdldFRva2VuQW5kUHJvZmlsZSIsInRoZW4iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJwYXRoIiwibWF4QWdlIiwiZXJyIiwiRXJyb3IiLCJFcnJvckZhbGxiYWNrIiwiZXJyb3IiLCJjb21wb25lbnRTdGFjayIsInJlcGxhY2UiLCJvcmlnaW4iLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsInBhcGVyIiwiYmFja0xvZ28iLCJmb250V2VpZ2h0IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjaGF0Q29udGFpbmVyIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsImlucHV0Qm94IiwibWFyZ2luVG9wIiwiYnViYmxlIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJteUJ1YmJsZSIsImNoYXRCb3giLCJPdGhlckF2YXRhciIsIm15QXZhdGFyIiwiQm9hcmQiLCJjbGFzc2VzIiwiaW5wdXRSZWYiLCJzbmFjayIsInNldFNuYWNrIiwiaW5wdXQiLCJjaGF0TG9ncyIsInN0YXRlIiwic2V0U3RhdGUiLCJsb2dSZWYiLCJjaGF0Q29udGFpbmVyUmVmIiwib25JbnB1dENoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImxlbmd0aCIsImVudGVyS2V5SGFuZGxlciIsImtleUNvZGUiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJzY3JvbGxUbyIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaW5kZXgiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwidG9UaW1lU3RyaW5nIiwiYWxpZ25TZWxmIiwidiIsInNocmluayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJ1c2VTdHlsZSIsInJvb3QiLCJwYWxldHRlIiwiZ3JleSIsInBhcGVyMiIsImJ1dHRvbiIsInJlc2V0RXJyb3JCb3VuZGFyeSIsInNlY29uZCIsInNldFNlY29uZCIsIm1lc3NhZ2UiLCJIaWRlT25TY3JvbGwiLCJjaGlsZHJlbiIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiTG9hZGluZyIsIkN1c3RvbVNuYWNrYmFyIiwib25DbG9zZSIsImNvbnRlbnQiLCJzdGF0dXMiLCJkaXJlY3Rpb24iLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwidXNlT25GaXJzdFJlbmRlciIsImlzRmlyc3RSZWYiLCJDb3B5cmlnaHQiLCJnZXRGdWxsWWVhciIsIm1pbkhlaWdodCIsImZvb3RlciIsInNwYWNpbmciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwiYXJyb3ciLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIlN0aWNreUZvb3RlciIsInBhdGhuYW1lIiwic2Nyb2xsVG9Ub3AiLCJ0b3AiLCJiZWhhdmlvciIsInRyYW5zaXRpb24iLCJzdHlsZSIsImN1cnNvciIsImJhY2tncm91bmRJbWFnZSIsIm1hbmFnZW1lbnRCYWNrZ3JvdW5kIiwidHJhbnNmb3JtIiwid2hpdGVBcnJvdyIsInRleHRDb250YWluZXIiLCJ0ZXh0U2hhZG93IiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlTGlzdCIsImxpc3QiLCJzZXRTdGVwcGVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwiaGFuZGxlQWZ0ZXJTbGlkZSIsInNsaWRlSW5kZXgiLCJpbWFnZSIsInNyYyIsIm51bWJlciIsImZsZXhXcmFwIiwiQ3Jvc3NsaW5lIiwiZmFkZSIsInNldEZhZGUiLCJkb21SZWYiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJlbnRlciIsImV4aXQiLCJpbm5lckJveCIsIkRlc2NyaXB0aW9uIiwiZ3JvdyIsInNldEdyb3ciLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0aW1lb3V0IiwiYXBwZWFyIiwiSG9tZSIsInNsaWRlMCIsImRlc2NyaXB0aW9uIiwiZWFzeUxvZ2luIiwibGlua01hbmFnZW1lbnRQYWdlIiwic3RhcnRSaWdodEF3YXkiLCJtYWtlSGVhZGVycyIsImhhbmRsZVRhYmxlIiwidXNlTXltZW51IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsInRleHRQYXBlciIsIkludHJvZHVjdGlvbiIsInN0ZXBwZXIiLCJsb2dvQm94IiwiYmlnQXZhdGFyIiwidGV4dFdpdGhTaGFkb3ciLCJtYXJnaW5MZWZ0IiwiZGVzY3JpcHRpb25Cb3giLCJtb29uSW1hZ2UiLCJpbmxpbmUiLCJEZXNjcmlwdGlvbkxpc3QiLCJzbGlkZVNvdXJjZSIsIml0ZW0iLCJhbGlnbkNvbnRlbnQiLCJNYWluIiwidGV4dCIsInR5cG9ncmFwaHkiLCJ0ZXh0RGVjb3JhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbkNvbnRhaW5lciIsImRlZmF1bHREYXRhIiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJncm91cGluZyIsIkRlZmF1bHRQYWdlIiwibWF0Y2giLCJmYWRlMiIsInNldEZhZGUyIiwiaGFuZGxlT25ERU1PQ2xpY2siLCJkZWZhdWx0UGFnZSIsInNldFRpbWVvdXQiLCJzaGFwZSIsImhhc1RhYmxlIiwiYXJyYXkiLCJmb3JtUm9vdCIsImRlZmF1bHRIZWFkZXIiLCJIZWFkZXJzIiwiaGFuZGxlUHJvZ3Jlc3MiLCJ1c2VDb250ZXh0IiwicmVzdWx0U25hY2siLCJzZXRSZXN1bHRTbmFjayIsImhlYWRlcnMiLCJncm91cGluZ3MiLCJBcnJheSIsImZpbGwiLCJzZXREYXRhIiwiZGF0YVJlZiIsImdldE1hbmFnZW1lbnRUYWJsZSIsInJlc3BvbnNlIiwiZ3JvdXBpbmdMZW5ndGgiLCJpIiwicHVzaCIsImhlYWRlcnNMZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJoYW5kbGVMb2dvdXQiLCJoYW5kbGVTdWJtaXQiLCJocmVmIiwiaXNBdXRvU2F2ZSIsImV2ZXJ5IiwiZmlsdGVyIiwic2F2ZUhlYWRlcnMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUdyb3VwaW5ncyIsImNoZWNrZWQiLCJoZWFkZXIiLCJNYW5hZ2VtZW50VGFibGUiLCJzYXZlZFNuYWNrIiwic2V0U2F2ZWRTbmFjayIsImVycm9yU25hY2siLCJzZXRFcnJvclNuYWNrIiwiZGlhbG9nIiwic2V0RGlhbG9nIiwidGFibGVSZWYiLCJwYXJzZURhdGEiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZU9uU2F2ZSIsImRhdGFNYW5hZ2VyIiwicmVkdWNlIiwib2JqIiwidGFibGVEYXRhIiwicmVzdCIsInNhdmVEYXRhIiwib25kYkNsaWNrIiwib25LZXlkb3duIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJtZXRhS2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwiTWFyZ2luIiwibG9jYWxpemF0aW9uIiwib3B0aW9ucyIsInRvb2x0aXAiLCJpY29uIiwib25DbGljayIsImRlbGV0aW9ucyIsInNwbGljZSIsImluZGV4T2YiLCJwcmV2RGF0YSIsIm9uUm93QWRkIiwibmV3RGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJldlN0YXRlIiwib25Sb3dVcGRhdGUiLCJvbGREYXRhIiwiTWFudWFsRGlhbG9nIiwiaWNvbnMiLCJTYXZlQnV0dG9uIiwiZXhwb3J0QnV0dG9uIiwic2VsZWN0aW9uIiwiaGVhZGVyU3R5bGUiLCJhY3Rpb25zQ29sdW1uSW5kZXgiLCJjb2x1bW5zQnV0dG9uIiwiZGVib3VuY2VJbnRlcnZhbCIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwicGFnaW5hdGlvbiIsImxhYmVsRGlzcGxheWVkUm93cyIsInRvb2xiYXIiLCJuUm93c1NlbGVjdGVkIiwiYWN0aW9ucyIsImJvZHkiLCJlbXB0eURhdGFTb3VyY2VNZXNzYWdlIiwiZmxleEdyb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxlZnQiLCJwYWRkaW5nTGVmdCIsImp1c3RpZnkiLCJjZW50ZXIiLCJyaWdodCIsInBhZGRpbmdSaWdodCIsIk5hdiIsIm1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJldmVudCIsImZsYWciLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJsaXN0VGV4dCIsIm1vZGFsIiwic2hhZG93cyIsIm1vZGFsUm93Qm94IiwibW9kYWxDb2xCb3giLCJNZW51TGlzdCIsImhhbmRsZUdsb2JhbFNuYWNrYmFyIiwiZW1haWxJbnB1dCIsInNldEVtYWlsSW5wdXQiLCJoYW5kbGVPbkNsaWNrTG9naW4iLCJyZWRpcmVjdEdvb2dsZUxvZ2luIiwiaGFuZGxlT25DbGlja01vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVPbkNsb3NlTW9kYWwiLCJoYW5kbGVPblN1Ym1pdCIsImlzTG9nZ2VkIiwiZ29vZ2xlU2lnbmluSW1hZ2UiLCJTaWduSW5CdXR0b24iLCJzaWduSW4iLCJsb2dvdXQiLCJMaWdodFRvb2x0aXAiLCJ3aXRoU3R5bGVzIiwiY29tbW9uIiwid2hpdGUiLCJUb29sdGlwIiwiYXhpb3MiLCJnZXQiLCJzZXJ2ZXJVUkwiLCJyZXMiLCJhc3NpZ24iLCJ0b2tlbiIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJwdXQiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7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QWUsR0FBbkIsRUFBd0IsT0FBT3dMLE9BQU8sQ0FBQ2lGLE1BQVIsQ0FBZSxHQUFmLENBQVA7QUFDeEIsV0FBT2pGLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjBFLEdBQUcsQ0FBQzVXLElBQXBCLENBQVA7QUFDSCxHQVBPLENBQVI7QUFRSCxDQVRNLEM7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUFlLHlFQUFDb08sT0FBRCxFQUFXQyxTQUFYLEVBQXlCO0FBQ3RDNU8sU0FBTyxDQUFDQyxHQUFSO0FBQ0UsU0FBUXNQLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjYixPQUFkLEVBQXVCbUIsTUFBdkIsQ0FBOEIsVUFBQXJLLENBQUM7QUFBQSxXQUFFQSxDQUFGO0FBQUEsR0FBL0IsRUFBb0NSLEdBQXBDLENBQXdDLFVBQUNYLEtBQUQsRUFBT1ksS0FBUCxFQUFpQjtBQUMvRCxXQUFPO0FBQ0xxSSxXQUFLLEVBQUdqSixLQURIO0FBRUxrSixXQUFLLEVBQUdsSixLQUZIO0FBR0xtSixjQUFRLEVBQUdtQixTQUFTLENBQUMxSixLQUFEO0FBSGYsS0FBUDtBQUtELEdBTk8sQ0FBUjtBQU9ELENBVEgsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZSx1R0FBZixFLENBQ0EsMEMiLCJmaWxlIjoiYXBwLjRkMmUzNDY2NmNjYmNlMjZhZWMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJyZWFjdC5idW5kbGVcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIgaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2L05hdlwiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmQvQm9hcmRcIjtcclxuaW1wb3J0IE1hbmFnZW1lbnQgZnJvbSBcIi4vbWFuYWdlbWVudC9NYW5hZ2VtZW50XCI7XHJcbmltcG9ydCBIZWFkZXJzIGZyb20gJy4vbWFuYWdlbWVudC9IZWFkZXJzJztcclxuaW1wb3J0IHtDc3NCYXNlbGluZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lL0hvbWVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvZm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJ1xyXG5pbXBvcnQgeyBnZXRUb2tlbkFuZFByb2ZpbGUgfSBmcm9tIFwiLi91dGlsL0xvZ2luQVBJXCI7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuL2N1c3RvbUhvb2svU25hY2tCYXInO1xyXG5pbXBvcnQgRXJyb3JGYWxsYmFjayBmcm9tICcuL2N1c3RvbUhvb2svRXJyb3JGYWxsYmFjayc7XHJcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tIFwicmVhY3QtZXJyb3ItYm91bmRhcnlcIjtcclxuXHJcbi8vIOy7qO2FjeyKpO2KuCDrqqnroZ1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTG9nb3V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IEdsb2JhbFNuYWNrYmFyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IHsgaWRfdG9rZW4gfSA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZSddKTtcclxuICAgIGNvbnN0IFsgcHJvZmlsZSAsIHNldFByb2ZpbGUgXSA9IFJlYWN0LnVzZVN0YXRlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2dsb2JhbFNuYWNrYmFyLCBzZXRHbG9iYWxTbmFja2Jhcl0gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlICwgcmVzdWx0OiAnc3VjY2Vzcyd9KVxyXG4gICAgY29uc3QgcHJvZ3Jlc3NSZWYgPSBSZWFjdC51c2VSZWYoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVCZWZvcmV1bmxvYWQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHByb2dyZXNzIDogJHtwcm9ncmVzc1JlZi5jdXJyZW50fWApO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHByb2dyZXNzUmVmLmN1cnJlbnQgPSAocHJvZ3Jlc3NSZWYuY3VycmVudCA8IDEwMCA/IHByb2dyZXNzUmVmLmN1cnJlbnQgKyAyMCA6IDEwMCk7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzUmVmLmN1cnJlbnQgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgc2V0R2xvYmFsU25hY2tiYXIoe29wZW46dHJ1ZSAsIHJlc3VsdDpyZXN1bHR9KTtcclxuICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sMjAwKVxyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoIEFQSSDsi6TtloknKTtcclxuICAgICAgICAgICAgZ2V0VG9rZW5BbmRQcm9maWxlKGlkX3Rva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlIGRhdGEgOiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge25hbWUgLGVtYWlsLCBwaWN0dXJlfSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJwcm9maWxlXCIse25hbWUgLCBlbWFpbCwgcGljdHVyZX0se3BhdGg6XCIvXCIgLCBtYXhBZ2UgOiA3MjAwfSk7ICAvLyBtYXhBZ2UgOiAy7Iuc6rCEXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2luIEZhaWxlZC4gUGxlYXNlIGF1dGhvcml6ZSB0aGUgdXNlIG9mIGNvb2tpZXMgaW4geW91ciBicm93c2VyLicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2lkX3Rva2VuXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGNvb2tpZXMucHJvZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY29va2llcy5wcm9maWxlIDogJHtKU09OLnN0cmluZ2lmeShjb29raWVzLnByb2ZpbGUpfWApO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29va2llcy5wcm9maWxlXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEVycm9yQm91bmRhcnlcclxuICAgICAgICAgICAgRmFsbGJhY2tDb21wb25lbnQ9e0Vycm9yRmFsbGJhY2t9XHJcbiAgICAgICAgICAgIG9uRXJyb3I9eyhlcnJvciwgY29tcG9uZW50U3RhY2spPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgOiAke2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50U3RhY2sgOiAke2NvbXBvbmVudFN0YWNrfWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvblJlc2V0PXsoKT0+bG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbi5vcmlnaW4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvZmlsZSB8fCB7bmFtZSA6ICcnfX0+ICAgICAgICAgIHsvKiDsnKDsoIAg7ZSE66Gc7ZWEIOy7qO2FjeyKpO2KuCAgICAqL31cclxuICAgICAgICAgICAgPExvZ291dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldFByb2ZpbGV9PiAgIHsvKiDroZzqt7jslYTsm4Mg7J2067Kk7Yq4IOy7qO2FjeyKpO2KuCAgICovfVxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsocmVzdWx0KT0+aGFuZGxlQmVmb3JldW5sb2FkKHJlc3VsdCl9PiAgey8qIOuhnOuUqSDsu6jthY3siqTtirggICAqL31cclxuICAgICAgICAgICAgPEdsb2JhbFNuYWNrYmFyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0R2xvYmFsU25hY2tiYXJ9PiAgey8qIOyXkOufrCDsiqTrgrXrsJQg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eygpPT48SG9tZSBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9ib2FyZCcgcmVuZGVyPXsoKT0+PEJvYXJkIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL21hbmFnZW1lbnQnIHJlbmRlcj17KCk9PiA8TWFuYWdlbWVudCBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9oZWFkZXJzJyByZW5kZXI9eygpPT4gPEhlYWRlcnMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyByZW5kZXI9eyhwcm9wcyk9PjxGb290ZXIgey4uLnByb3BzfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPC9HbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvUHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0xvZ291dENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17Z2xvYmFsU25hY2tiYXIub3Blbn0gb25DbG9zZT17KCk9PnNldEdsb2JhbFNuYWNrYmFyKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgICAgICAgICAgY29udGVudD17Z2xvYmFsU25hY2tiYXIucmVzdWx0PT09J2Vycm9yJz8gYE5vdCBzYXZlZC5cclxuICAgICAgICAgICAgICAgIFJlYXNvbiA6IEludmFsaWQgaW5wdXQuYCA6JyBTQVZFRCAnfSBzdGF0dXM9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdH1cclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17e3ZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidyaWdodCd9fS8+XHJcbiAgICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgQm94LCBQYXBlciwgVHlwb2dyYXBoeSwgVGV4dEZpZWxkLCBBdmF0YXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtGYWNlIGFzIEZhY2VJY29ufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSBcIi4uL2N1c3RvbUhvb2svU25hY2tCYXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTIwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNzV2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzg1dmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJhY2tMb2dvIDoge1xyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJyxcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgekluZGV4IDogMVxyXG4gICAgfSxcclxuICAgIGNoYXRDb250YWluZXIgOiB7XHJcbiAgICAgICAgaGVpZ2h0IDogJzgwJScsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZyA6ICcwLjV2dyA1dncnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJyNkMGQwZDAnLFxyXG4gICAgICAgIG92ZXJmbG93WSA6ICdzY3JvbGwnLFxyXG4gICAgICAgIG92ZXJmbG93WCA6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgaW5wdXRCb3ggOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNDB2dycsXHJcbiAgICAgICAgbWFyZ2luVG9wOic1dmgnXHJcbiAgICB9LFxyXG4gICAgYnViYmxlIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXIgOiAndGhpY2sgIzhhOGE4YScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzIDogJzE1cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjOGU4ZThlJyxcclxuICAgICAgICBwYWRkaW5nIDogJzVweCAxMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAnMHB4IDZweCcsXHJcbiAgICAgICAgd2lkdGg6ICc2MHZ3JyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIG15QnViYmxlIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXIgOiAndGhpY2sgIzhhOGE4YScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzIDogJzE1cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjNzg5ZmZmJyxcclxuICAgICAgICBwYWRkaW5nIDogJzVweCAxMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAnMHB4IDZweCcsXHJcbiAgICAgICAgd2lkdGg6ICc2MHZ3JyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIGNoYXRCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG5cclxuICAgIH0sXHJcbiAgICBPdGhlckF2YXRhciA6IHtcclxuICAgICAgICBjb2xvciA6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnYmxhY2snLFxyXG4gICAgfSxcclxuICAgIG15QXZhdGFyIDoge1xyXG4gICAgICAgIGNvbG9yIDogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjMjc2NGZmJyxcclxuICAgIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoe2lzTG9hZGluZ30pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBpbnB1dCA6ICcnLFxyXG4gICAgICAgIGNoYXRMb2dzIDogW11cclxuICAgIH0pXHJcbiAgICBjb25zdCBsb2dSZWYgPSBSZWFjdC51c2VSZWYoc3RhdGUuY2hhdExvZ3MpO1xyXG4gICAgY29uc3QgY2hhdENvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgODApIHtcclxuICAgICAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlLCBpbnB1dCA6IHZhbHVlfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPj0gODApIHtcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLmxlbmd0aClcclxuICAgIH07XHJcbiAgICBjb25zdCBlbnRlcktleUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIGVudGVyIHByZXNzZWRcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dFJlZi5jdXJyZW50PyBpbnB1dFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJykgOiAnJztcclxuICAgICAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgY2hhdENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvKDAsY2hhdENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwb3N0IEFQSSAmIGdldCBBUElcclxuICAgICAgICAgICAgICAgICAgICBsb2dSZWYuY3VycmVudCA9IFsuLi5sb2dSZWYuY3VycmVudCAsIGlucHV0LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7aW5wdXQgOiAnJyAsIGNoYXRMb2dzIDogbG9nUmVmLmN1cnJlbnR9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIGdldCBBUElcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVudGVyS2V5SGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJyAsIGVudGVyS2V5SGFuZGxlcik7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs1fT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY2hhdENvbnRhaW5lcn0gcmVmPXtjaGF0Q29udGFpbmVyUmVmfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0ndGV4dFByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrTG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgUFJFUEFSSU5HXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY2hhdExvZ3MubWFwKCh2YWx1ZSxpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCUyPT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDri6Trpbjsgqzrnozrk6TsnbQg66eQ7ZWcIOqxtCDsmbzsqr0g7KCV66CsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNoYXRCb3h9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuT3RoZXJBdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5idWJibGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIHN0eWxlPXt7Zm9udFNpemU6JzAuNXJlbScsIGxpbmVIZWlnaHQ6JzAuOCd9fT57YCR7bmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKX0gJHtuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpfWB9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuCtOqwgCDrp5DtlojsnYQg6rK97JqwIOyYpOuluOyqvSDsoJXroKwsIHByb2ZpbGXsnZgg7J2066aE6rO8IOu5hOq1kCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY2hhdEJveH0gc3R5bGU9e3thbGlnblNlbGY6J2ZsZXgtZW5kJ319IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5teUJ1YmJsZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJyBzdHlsZT17e2ZvbnRTaXplOicwLjVyZW0nLCBsaW5lSGVpZ2h0OicwLjgnfX0+e2Ake25ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCl9ICR7bmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKX1gfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMubXlBdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRCb3h9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHNpemU9J21lZGl1bSdcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5pbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHJlZj17diA9PiBpbnB1dFJlZi5jdXJyZW50ID0gdn1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTbmFjayh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgIGNvbnRlbnQ9J21heCBsZW5ndGggOiA4MCcgc3RhdHVzPSdlcnJvcic+XHJcbiAgICAgICAgPC9DdXN0b21TbmFja2Jhcj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5Cb2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZVNpZ25pbi4xY2UxYWFhNWExMjdmYTNlNDkyYTEyYmI2MmY5OTMwNC5wbmdcIjsiLCJpbXBvcnQgeyBCb3gsIFBhcGVyLFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgd2lkdGggOiAnODB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzUwdmgnLFxyXG4gICAgICAgIGNvbG9yIDogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInXHJcbiAgICB9LFxyXG4gICAgcGFwZXIyIDoge1xyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiczdmgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnNXZoJyxcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInXHJcbiAgICB9XHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JGYWxsYmFjayAoe2Vycm9yLCBjb21wb25lbnRTdGFjaywgcmVzZXRFcnJvckJvdW5kYXJ5fSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBbc2Vjb25kICwgc2V0U2Vjb25kXSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoc2Vjb25kIDw9IDApIGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24ub3JpZ2luKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2Vjb25kIDogICR7c2Vjb25kfWApO1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgc2V0U2Vjb25kKHNlY29uZC0xKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LFtzZWNvbmRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJz4ge2BFUlJPUiA6ICR7ZXJyb3IubWVzc2FnZX1gfSA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMyc+IHtgV2lsbCBnbyBiYWNrIHRvIHRoZSBIT01FYH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJz4ge2BpbiAke3NlY29uZH0gc2Vjb25kcy5gfSAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e3Jlc2V0RXJyb3JCb3VuZGFyeX0+IFxyXG4gICAgICAgICAgICAgICAgICAgIFJldHVybiB0byBIb21lIE5vdyBcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcjJ9IGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJz4ge2BQbGVhc2UgY2hlY2sgYmVsb3cuYH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPiB7YDEuIExvZ2luIHRpbWVvdXQgLSBMb2dpbiBSZXRlbnRpb24gVGltZTogMiBob3Vyc2B9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz4ge2AyLiBJbnZhbGlkIFJlcXVlc3RgfSAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuRXJyb3JGYWxsYmFjay5wcm9wVHlwZXMgPSB7XHJcbiAgICByZXNldEVycm9yQm91bmRhcnkgOiBQcm9wVHlwZXMsXHJcbn0iLCJpbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGUnO1xyXG5cclxuLy8gR05C7J2YIOyKrOudvOydtOuTnOq4sOuKpVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWRlT25TY3JvbGwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGUgYXBwZWFyPXtmYWxzZX0gZGlyZWN0aW9uPVwiZG93blwiIGluPXshdHJpZ2dlcn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2xpZGU+XHJcbiAgKTtcclxufSIsImltcG9ydCB7Qm94LCBDaXJjdWxhclByb2dyZXNzLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcgKHtpc0xvYWRpbmd9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7XHJcbiAgICAgICAgaXNMb2FkaW5nICYmIFxyXG4gICAgICAgICAgICAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwdmgnLCB3aWR0aDonMTAwdncnLCBkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge2BTYXZpbmcgY2hhbmdlc2B9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgICA8L0JveD4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5Mb2FkaW5nLnByb3BUeXBlcyA9IHtcclxuICAgIGlzTG9hZGluZyA6IFByb3BUeXBlcy5ib29sXHJcbn0iLCJpbXBvcnQgeyBTbmFja2JhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21TbmFja2JhciAoe29wZW4sIG9uQ2xvc2UsIGNvbnRlbnQsIHN0YXR1cywgZGlyZWN0aW9ufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXtkaXJlY3Rpb24/IGRpcmVjdGlvbiA6IHsgdmVydGljYWw6J3RvcCcsIGhvcml6b250YWw6J2NlbnRlcicgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtvbkNsb3NlfSBzZXZlcml0eT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgdmFyaWFudD0nZmlsbGVkJyBtZXNzYWdlPXt7Zm9udFdlaWdodDonYm9sZGVyJywgZm9udFNpemU6JzVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgKVxyXG59XHJcblxyXG5DdXN0b21TbmFja2Jhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGVuIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2UgOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbnRlbnQgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3RhdHVzIDogUHJvcFR5cGVzLm9uZU9mKFsnZXJyb3InLCdzdWNjZXNzJ10pLFxyXG4gICAgZGlyZWN0aW9uIDogUHJvcFR5cGVzLm9iamVjdCxcclxufSIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG4vLyBjb250c3RydWN0b3Ig7ZuFXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU9uRmlyc3RSZW5kZXIgKGZ1bmMpIHtcclxuICAgIGNvbnN0IGlzRmlyc3RSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcbiAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZnVuYygpO1xyXG4gICAgfVxyXG59XHJcbnVzZU9uRmlyc3RSZW5kZXIucHJvcFR5cGVzID0ge1xyXG4gICAgZnVuYyA6IFByb3BUeXBlcy5mdW5jXHJcbn0iLCJpbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBMaW5rfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB3aGl0ZUFycm93IGZyb20gJy4uL2ltYWdlcy93aGl0ZS1hcnJvdy5wbmcnO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgbWFuYWdlbWVudEJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnO1xyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICBKYWNrJ3MgV2Vic2l0ZVxyXG4gICAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgICAgeycuJ31cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBtaW5IZWlnaHQ6ICcyMHZoJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXHJcbiAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgICBiYWNrZ3JvdW5kIDogdGhlbWUucGFsZXR0ZS5ncmV5WzIwMF0sXHJcbiAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgICBjb2xvciA6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgd2lkdGggOiAnNHZ3JyxcclxuICAgICAgaGVpZ2h0IDogJzR2dycsXHJcbiAgICAgIHBhZGRpbmcgOiAnM3Z3JyxcclxuICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTonMnZoJyxcclxuICAgICAgbWFyZ2luVG9wIDogJzJ2aCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOidjb250YWluJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lGb290ZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtsb2NhdGlvbn0gPSBwcm9wcztcclxuICAgIGNvbnNvbGUubG9nKGBsb2NhdGlvbi5wYXRobmFtZT8gJHtsb2NhdGlvbi5wYXRobmFtZX1gKTtcclxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAoZSkgPT4ge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lID09PSAnL2JvYXJkJz8gbnVsbCA6IChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3R5bGU9e1xyXG4gICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycgPyBcclxuICAgICAgICB7YmFja2dyb3VuZCA6IGBsaW5lYXItZ3JhZGllbnQoYmxhY2ssICNlZWVlZWUpYH0gXHJcbiAgICAgICAgOiBcclxuICAgICAgICB7YmFja2dyb3VuZEltYWdlIDogYHVybCgke21hbmFnZW1lbnRCYWNrZ3JvdW5kfSlgLCBiYWNrZ3JvdW5kU2l6ZSA6ICdhdXRvJywgdHJhbnNmb3JtOiBgc2NhbGVZKC0xKWB9fT5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk1vdmUgdG8gVG9wXCIgYXJpYS1sYWJlbD1cIm1vdmUtdG8tdG9wXCIgcGxhY2VtZW50PVwidG9wXCIgZW50ZXJEZWxheT17MzUwfSBsZWF2ZURlbGF5PXsxNTB9PlxyXG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3d9IHN0eWxlPXtcclxuICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLyc/IFxyXG4gICAgICAgICAge2JhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHt3aGl0ZUFycm93fSlgfVxyXG4gICAgICAgICAgOiBcclxuICAgICAgICAgIHtiYWNrZ3JvdW5kIDpgbm8tcmVwZWF0IGNlbnRlci84MCUgdXJsKCR7YXJyb3d9KWAsIHRyYW5zZm9ybTpgcm90YXRlKDE4MGRlZylgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfSBvbk1vdXNlT3Zlcj17KGUpPT50cmFuc2l0aW9uKGUpfS8+XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgc3R5bGU9e3tmb250V2VpZ2h0IDogJ2JvbGRlcid9fS8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfSIsImltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgdGV4dENvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgY29sb3IgOiAnI2ZmZicsXHJcbiAgICAgICAgdGV4dFNoYWRvdzonMnB4IDEuNXB4IDEuNXB4IGdyYXknLFxyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ2Fyb3VzZWwgKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBpbWFnZUxpc3QgPSBwcm9wcy5saXN0ID8gcHJvcHMubGlzdCA6IFt7fV07XHJcbiAgICBjb25zdCB7c2V0U3RlcHBlciwgY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGV9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBoYW5kbGVBZnRlclNsaWRlID0gKHNsaWRlSW5kZXgpID0+IHtcclxuICAgICAgICBzZXRTdGVwcGVyKHNsaWRlSW5kZXgpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShzbGlkZUluZGV4KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8Q2Fyb3VzZWxcclxuICAgIHNsaWRlSW5kZXg9e2N1cnJlbnRTbGlkZX1cclxuICAgIGFmdGVyU2xpZGU9IHtpbmRleCA9PiBoYW5kbGVBZnRlclNsaWRlKGluZGV4KX1cclxuICAgIGF1dG9wbGF5PXtmYWxzZX1cclxuICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezMwMDB9XHJcbiAgICB0cmFuc2l0aW9uTW9kZT0nc2Nyb2xsJ1xyXG4gICAgc3BlZWQ9ezgwMH1cclxuICAgIGhlaWdodE1vZGU9J21heCdcclxuICAgICAgICA+XHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2VMaXN0Lm1hcCgoaW1hZ2UsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJveCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJ319IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgIyR7aW5kZXh9ICR7aW1hZ2UubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDAlJ319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGluZGV4PT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgKDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDb250YWluZXJ9IHN0eWxlPXt7aGVpZ2h0OicxMDAlJywgYWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUVVJQ0sgU1RBUlQgR1VJREVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2UgeW91ciB3b3JrIGVhc2llclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMScgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR1cm4gdGhlIHNsaWRlIG92ZXIgYW5kIGNoZWNrLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMScgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IGNvbnNpc3RzIG9mIGEgZmV3IHNsaWRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0JveD4pXHJcbiAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17aW1hZ2Uuc3JjfS8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbkltYWdlQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xyXG4gICAgc2V0U3RlcHBlciA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBjdXJyZW50U2xpZGUgOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBzZXRDdXJyZW50U2xpZGUgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94ICwgRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIG1hcmdpbjowLFxyXG4gICAgICBwYWRkaW5nOicxdncnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luOidhdXRvJyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Jvc3NsaW5lKHtjaGlsZHJlbn0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjIwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYm94U2hhZG93PXs0fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyb3csIEJveCwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290IDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICczNXZoJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgICBpbm5lckJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgd2lkdGggOiAnMzB2dycsXHJcbiAgICAgICAgY29sb3I6JyNlYWVhZWEnLFxyXG4gICAgICAgIHRleHRTaGFkb3c6ICcxcHggNXB4IDVweCAjOWU5OTk5J1xyXG4gICAgfVxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgIHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICl9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJzE1MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICBTT01FIFRFWFRcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIFNPTUUgVEVYVFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PiAgICAgIFxyXG4gICAgICAgIDwvR3Jvdz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSBcIi4vSW50cm9kdWN0aW9uXCI7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24yIGZyb20gXCIuL0ludHJvZHVjdGlvbjJcIjtcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2lzTG9hZGluZ30pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24vPlxyXG4gICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbjIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkhvbWUucHJvcFR5cGVzID0ge1xyXG4gIGlzTG9hZGluZyA6IFByb3BUeXBlcy5ib29sXHJcbn0iLCJpbXBvcnQgZWFzeUxvZ2luIGZyb20gXCIuLi9pbWFnZXMvZWFzeS1sb2dpbi5wbmdcIjtcclxuaW1wb3J0IGxpbmtNYW5hZ2VtZW50UGFnZSBmcm9tIFwiLi4vaW1hZ2VzL2xpbmstbWFuYWdlbWVudC1wYWdlLnBuZ1wiO1xyXG5pbXBvcnQgc3RhcnRSaWdodEF3YXkgZnJvbSBcIi4uL2ltYWdlcy9zdGFydC1yaWdodC1hd2F5LnBuZ1wiO1xyXG5pbXBvcnQgbWFrZUhlYWRlcnMgZnJvbSBcIi4uL2ltYWdlcy9tYWtlLWhlYWRlcnMucG5nXCI7XHJcbmltcG9ydCBoYW5kbGVUYWJsZSBmcm9tIFwiLi4vaW1hZ2VzL2hhbmRsZS10YWJsZS5wbmdcIjtcclxuaW1wb3J0IHVzZU15bWVudSBmcm9tIFwiLi4vaW1hZ2VzL215bWVudS5wbmdcIjtcclxuaW1wb3J0IHNsaWRlMCBmcm9tIFwiLi4vaW1hZ2VzL3NsaWRlMC5wbmdcIjtcclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnUXVpY2sgc3RhcnQgZ3VpZGUnLFxyXG4gICAgICAgIHNyYyA6IGAke3NsaWRlMH1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ0dVSURFJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdTaWduIGluIHdpdGggR29vZ2xlJyxcclxuICAgICAgICBzcmMgOiBgJHtlYXN5TG9naW59YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdTaWduIGluIHdpdGggZ29vZ2xlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdNb3ZlIG9uIHRvIG1hbmFnZW1lbnQgcGFnZScsXHJcbiAgICAgICAgc3JjIDogYCR7bGlua01hbmFnZW1lbnRQYWdlfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnTW92ZSBvbiB0byBtYW5hZ2VtZW50IHBhZ2UnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ0NsaWNrIHRoZSBibHVlIGJ1dHRvbicsXHJcbiAgICAgICAgc3JjIDogYCR7c3RhcnRSaWdodEF3YXl9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdjbGljayBcImdldCBzdGFydGVkIHJpZ2h0IGF3YXlcIiBidXR0b24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ01ha2UgSGVhZGVycycsXHJcbiAgICAgICAgc3JjIDogYCR7bWFrZUhlYWRlcnN9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdtYWtlIGhlYWRlcnMnLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdDcmVhdGUsIEVkaXQsIFJlbW92ZSB0YWJsZSByZWNvcmRzJyxcclxuICAgICAgICBzcmMgOiBgJHtoYW5kbGVUYWJsZX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ2hhbmRsZSB0YWJsZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnVXNlIG15bWVudSB0byBoYW5kbGUgZGF0YScsXHJcbiAgICAgICAgc3JjIDogYCR7dXNlTXltZW51fWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAndXNlIG15bWVudScsXHJcbiAgICB9LFxyXG5dOyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcm93ICwgQm94LCBQYXBlcixGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBJbWFnZUNhcm91c2VsIGZyb20gXCIuL0Nhcm91c2VsXCI7XHJcbmltcG9ydCBpbWFnZUxpc3QgZnJvbSAnLi9JbWFnZVNsaWRlU291cmNlcyc7XHJcbmltcG9ydCBMaXN0Q3JvdXNlbERlc2NyaXB0aW9uIGZyb20gJy4vTGlzdENhcm91c2VsRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvd2hpdGViYWNrZ3JvdW5kLmpwZyc7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwdncnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvdmVyJyxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBtaW5XaWR0aDogNzUwLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTAwMHB4JyxcclxuICAgICAgICB3aWR0aCA6ICc3MHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnNjV2aCcsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgICB0ZXh0UGFwZXIgOiB7XHJcbiAgICAgICAgbWluV2lkdGggOiAzNTAsXHJcbiAgICAgICAgd2lkdGggOiAnNzB2dycsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2luaGVyaXQnXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc3RlcHBlciwgc2V0U3RlcHBlcl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc29sZS5sb2coYGN1cnJlbnRTbGlkZSA6ICR7Y3VycmVudFNsaWRlfWApXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEZhZGUgaW49e2dyb3d9ICB0aW1lb3V0PXt7ZW50ZXI6MzAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiB7YXBwZWFyIDogMTUwMCAsIGVudGVyIDogMTUwMCAsIGV4aXQgOiAxMDAwfSB9IDoge30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBpbWFnZSBjYXJvdXNlbCAqL31cclxuICAgICAgICAgICAgICAgICAgPEltYWdlQ2Fyb3VzZWwgXHJcbiAgICAgICAgICAgICAgICAgIGxpc3Q9e2ltYWdlTGlzdH0gXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZT17Y3VycmVudFNsaWRlfSBcclxuICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNsaWRlPXtzZXRDdXJyZW50U2xpZGV9IFxyXG4gICAgICAgICAgICAgICAgICBzZXRTdGVwcGVyPXtzZXRTdGVwcGVyfSBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnfX1cclxuICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAyMDAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9fSA6IHt9KX1cclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogbGlzdCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdENyb3VzZWxEZXNjcmlwdGlvbiBzdGVwcGVyPXtzdGVwcGVyfSA+PC9MaXN0Q3JvdXNlbERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBQYXBlciwgQm94LCBHcm93LCBBdmF0YXIsIFR5cG9ncmFwaHksRmFkZSAsIFNsaWRlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IG1vb25JbWFnZSBmcm9tICcuLi9pbWFnZXMvbW9vbi5wbmcnO1xyXG5pbXBvcnQgQ3Jvc3NsaW5lIGZyb20gJy4vQ3Jvc3NsaW5lJztcclxuaW1wb3J0IFByb2plY3REZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uJztcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL2JsYWNrLnBuZyc7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgd2lkdGggOiAnMTAwdncnLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgYmFja2dyb3VuZFNpemUgOiAnY292ZXInXHJcbiAgICB9LFxyXG4gICAgbG9nb0JveCA6IHtcclxuICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdydcclxuICAgIH0sXHJcbiAgICBiaWdBdmF0YXIgOiB7XHJcbiAgICAgIHdpZHRoIDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgfSxcclxuICAgIHRleHRXaXRoU2hhZG93IDoge1xyXG4gICAgICBjb2xvcjonI2ZmZicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICAgIGZvbnRTaXplOic0cmVtJyxcclxuICAgICAgbWFyZ2luTGVmdDonMnZ3JyxcclxuICAgICAgdGV4dFNoYWRvdzogJzFweCA1cHggNXB4ICM5ZTk5OTknXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb25Cb3ggOiB7XHJcbiAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgbWF4V2lkdGggOiAnNTB2dycsXHJcbiAgICAgIG1hcmdpbiA6ICcwIDAgMCAzdncnXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNzBweCAwcHgnXHJcbiAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEZhZGUgaW49e2dyb3d9ICB0aW1lb3V0PXt7ZW50ZXI6MjAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgPENyb3NzbGluZT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0JveH0+XHJcbiAgICAgICAgICAgIDxGYWRlIGluPXtncm93fSB7Li4uKGdyb3c/IHt0aW1lb3V0OntlbnRlcjo1MDAwLCBleGl0OjgwMH19IDoge30pfT5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGFsdD0naGVscCcgc3JjPXttb29uSW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdBdmF0YXJ9Lz5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2J1dHRvbicgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRXaXRoU2hhZG93fT4gTWFuYWdlbWVudCBBcHAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25Cb3h9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+QW4gYXBwbGljYXRpb24gdGhhdCB5b3UgY2FuIGVhc2lseSBjcmVhdGUgJiBkZXNpZ24geW91ciBvd24gZGF0YS48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5HZXQgc3RhcnRlZCB3aXRoIHlvdXIgR29vZ2xlIGFjY291bnQhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+VGhpcyBhcHAgd2lsbCBub3Qga2VlcCBhbnkgcGVyc29uYWwgaW5mb3JtYXRpb24uPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0Nyb3NzbGluZT5cclxuICAgICAgICAgIDxQcm9qZWN0RGVzY3JpcHRpb24vPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1R5cG9ncmFwaHkgLCBTdGVwcGVyLCBTdGVwLCBCb3gsIFN0ZXBMYWJlbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc2xpZGVTb3VyY2UgZnJvbSAnLi9JbWFnZVNsaWRlU291cmNlcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgZmxleERpcmVjdGlvbjoncm93JyxcclxuICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInXHJcbiAgICB9LFxyXG4gICAgaW5saW5lOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNjcmlwdGlvbkxpc3QgKHtzdGVwcGVyfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17c3RlcHBlcn0gb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J2luaGVyaXQnfX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVTb3VyY2UubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcCBjb21wbGV0ZWQ9e2luZGV4IDwgc3RlcHBlcn0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvU3RlcHBlcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuRGVzY3JpcHRpb25MaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBwZXIgOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSBcIi4vU3RhcnRCdXR0b25cIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9kZXNrLmpwZ1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgOiAnY292ZXInLFxyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJ1xyXG4gICAgfSxcclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtmYWRlLHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNGaXJzdFJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRGYWRlKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgICAgICAgIGlmIChpc0ZpcnN0UmVmLmN1cnJlbnQpIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgICAgcm9vdE1hcmdpbiA6ICctMzUwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MTMwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3t0ZXh0U2hhZG93Oic1cHggMS41cHggMS41cHggZ3JheSd9fT5cclxuICAgICAgICAgICAgICAgIHtpc0ZpcnN0UmVmLmN1cnJlbnQgPyAnV0VMQ09NRScgOiAnUmVhZHkgdG8gc3RhcnQ/J31cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudD8gbnVsbCA6ICg8U3RhcnRCdXR0b24vPil9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0J1dHRvbiAsIEJveCwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBQbGF5QXJyb3dTaGFycCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMC41dmgnXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHRleHRTaGFkb3cgOiAnMnB4IDFweCAxcHggZ3JheScsXHJcbiAgICAgICAgY29sb3IgOiAnaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgICBpbm5lckJveCA6IHtcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnMXZoJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lckJveH0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScvbWFuYWdlbWVudCcgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjonbm9uZScsIGNvbG9yOid3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIGNvbG9yPSdzZWNvbmRhcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCcgXHJcbiAgICAgICAgICAgICAgICBzdGFydEljb249ezxQbGF5QXJyb3dTaGFycCBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250U2l6ZSA6IDMwfX0vPn0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICBHRVQgU1RBUlRFRFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhcnJvdy5kMDgzMjhmNjJkMTliNjZmOGVhOGQ2ZDAwNjcyNGM4Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmxhY2suM2YwMmExMzI3Mzg3MDAyMjZjODRlZDFmNTg2M2Q1OWEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRlc2suMzIwN2MxZWY5NGM4NjdmODBiMGU5ZGY2YWM3OGQ1MmIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhc3ktbG9naW4uM2U5MWI4ZDg4NzM1Njg5MDc5YWZkMDc2ZTNlMDc0MjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhbmRsZS10YWJsZS4zYzU4NjkxNGE5NmQ0YWZlZGRjNWM3YWQzZDdkZjM1NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibGluay1tYW5hZ2VtZW50LXBhZ2UuNDgwMDRkMTMzYjVmYzIyNTc3NzA0Yzk1ZWIzNWYzZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1ha2UtaGVhZGVycy5jZmZhYzYzNGYyOWQzOGRkYmQxZjQ0NjdhNTczZWJjNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFuYWdlbWVudC1iYWNrZ3JvdW5kLmEwMDhkZTgxMzk1ODFiMGRhYmYxODMyZWQxYzljNDZlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtb29uLmYyMDZiYzNkNWJlODMxMWM3N2Q5ODk3ZGE0NGUxZjY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJteW1lbnUuOWZkZDU4YWNhNzRlYjQ4ZDk1NWY4MzVjOWVjODc5NmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNsaWRlMC4wYWEyOTVhM2I3YjRkMzAxMzI4NmY1MjRjNDc2NGNkNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhcnQtcmlnaHQtYXdheS40ZTIxNzI2MmQyYzhkODZkNWUwZjZlZTQzMmFlZmJjZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2hpdGUtYXJyb3cuYzQ0MjJhN2JjNWVlMjNkMDgxYjM1NjZmOTNlOTFmMWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndoaXRlYmFja2dyb3VuZC5mYjE0MGY1ZTgxMGRjMjE0NmRhZDFiNmYwM2NhZjljOC5qcGdcIjsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzJ1xyXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgKDxDb29raWVzUHJvdmlkZXI+XHJcbiAgICAgICAgPEFwcC8+XHJcbiAgICA8L0Nvb2tpZXNQcm92aWRlcj4pXHJcbiAgICAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEZhZGUsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDEpXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uQ29udGFpbmVyIDoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHRleHRTaGFkb3cgOiAnMC41cHggMC41cHggMXB4ICMwMDAwMDA1YycsXHJcbiAgICAgICAgbWFyZ2luIDogJzAgMXZ3IDEuN3ZoJyxcclxuICAgICAgICBjb2xvcjogJyM2YTc0OGMnLFxyXG4gICAgfSxcclxufSkpO1xyXG5jb25zdCBkZWZhdWx0RGF0YSA9IHtcclxuICAgIGNvbHVtbnMgOiBbXHJcbiAgICAgIHsgdGl0bGU6ICdOYW1lJywgZmllbGQ6ICdOYW1lJyAsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAgeyB0aXRsZTogJ1N1cm5hbWUnLCBmaWVsZDogJ1N1cm5hbWUnIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdCaXJ0aCBZZWFyJywgZmllbGQ6ICdCaXJ0aCBZZWFyJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnUGhvbmUnICwgZmllbGQ6J1Bob25lJywgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgICAgIGZpZWxkOiAnR2VuZGVyJyxcclxuICAgICAgfSxcclxuICAgICAgeyB0aXRsZTogJ01lbW8nICwgZmllbGQ6J01lbW8nfVxyXG4gICAgXSxcclxuICAgIGRhdGEgOiBbXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdNZWhtZXQnLCAnU3VybmFtZSc6ICdCYXJhbicsIFwiQmlydGggWWVhclwiOiAxOTgzLCBcIlBob25lXCI6JzAxMDQ2NTA5OTk1JyAsXCJHZW5kZXJcIjogMSAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ0FkYW0nLCAnU3VybmFtZSc6ICdBZGFtJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODQsIFwiUGhvbmVcIjonMDEwNDY1MDk3OTUnICxcIkdlbmRlclwiOiAyICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnTWVobWV0JywgJ1N1cm5hbWUnOiAnQXRvbScsIFwiQmlydGggWWVhclwiOiAxOTg1LCBcIlBob25lXCI6JzAxMDQ2NTA5Njk1JyAsXCJHZW5kZXJcIjogMSAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ211bCcsICdTdXJuYW1lJzogJ0tvbmduYScsIFwiQmlydGggWWVhclwiOiAxOTg2LCBcIlBob25lXCI6JzAxMDQ2NTA5MTk1JyAsXCJHZW5kZXJcIjogMSAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ0phY2snLCAnU3VybmFtZSc6ICdKYWNrJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODcsIFwiUGhvbmVcIjonMDEwNDY1MDkyOTUnICxcIkdlbmRlclwiOiAyICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnQm9iJywgJ1N1cm5hbWUnOiAnQm9iJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODgsIFwiUGhvbmVcIjonMDEwNDY1MDkzOTUnICxcIkdlbmRlclwiOiAyICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgXVxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmYXVsdFBhZ2UgKHtzdGF0ZSAsIHNldFN0YXRlLCBtYXRjaH0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmYWRlMiwgc2V0RmFkZTJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlT25ERU1PQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlICwgY29sdW1ucyA6IGRlZmF1bHREYXRhLmNvbHVtbnMgLCBkYXRhIDogZGVmYXVsdERhdGEuZGF0YSwgZGVmYXVsdFBhZ2UgOiAhc3RhdGUuZGVmYXVsdFBhZ2V9KTtcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZXRGYWRlMih0cnVlKSAsIDE1MDApO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogODAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0naW5pdGlhbCcgc3R5bGU9e3t0ZXh0U2hhZG93Oic1cHggMS41cHggMS41cHggZ3JheSd9fT5cclxuICAgICAgICAgICAgICAgIE1hbmFnZW1lbnQgVGFibGVcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGd1dHRlckJvdHRvbSBzdHlsZT17e3RleHRTaGFkb3c6JzJweCAycHggMXB4IGJsYWNrJ319PiBcclxuICAgICAgICAgICAgICAgIFlvdSBtYXkgdHJ5IHRoZSBERU1PIGlmIHRoaXMgeW91ciBmaXJzdCB0aW1lLCBcclxuICAgICAgICAgICAgICAgIG9yIGdldCBzdGFydGVkIHJpZ2h0IGF3YXkhXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2ZhZGUyfSB0aW1lb3V0PXt7ZW50ZXIgOiAzMDAwLCBleGl0OjUwMH19PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e2hhbmRsZU9uREVNT0NsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVTRSBERU1PIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaGVhZGVycycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEIFJJR0hUIEFXQVlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufVxyXG5cclxuRGVmYXVsdFBhZ2UucHJvcFR5cGVzID0ge1xyXG4gICAgc3RhdGUgOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGRlZmF1bHRQYWdlIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgICAgICBoYXNUYWJsZSA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY29sdW1ucyA6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBkYXRhIDogUHJvcFR5cGVzLmFycmF5XHJcbiAgICB9KSxcclxuICAgIHNldFN0YXRlIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG4iLCJpbXBvcnQgeyBcclxuICAgIEJveCAsUGFwZXIsIG1ha2VTdHlsZXMsIEZhZGUsIFRleHRGaWVsZCwgVG9vbHRpcCwgVHlwb2dyYXBoeSwgQ2hlY2tib3hcclxufVxyXG4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZ1wiO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7IHNhdmVIZWFkZXJzIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tICcuLi91dGlsL01hbmFnZW1lbnRBUEknO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxMHZoJyxcclxuICAgIH0sXHJcbiAgICBmb3JtUm9vdCA6IHtcclxuICAgICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAuNXZoIDF2dycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNjBjaCcsXHJcbiAgICAgICAgICAgIG1pbldpZHRoIDogJzQwY2gnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMHZoJyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kIDogYG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvbnRhaW4nLFxyXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnM3Z3JyxcclxuICAgICAgICB0cmFuc2Zvcm0gOiAncm90YXRlKDkwZGVnKSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbiA6IHtcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJ1xyXG4gICAgfVxyXG59KSlcclxuY29uc3QgZGVmYXVsdEhlYWRlciA9IHtcclxuICAgIFwiaGVhZGVyMFwiIDogJycsXHJcbiAgICBcImhlYWRlcjFcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIyXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyM1wiIDogJycsXHJcbiAgICBcImhlYWRlcjRcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI1XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNlwiIDogJycsXHJcbiAgICBcImhlYWRlcjdcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI4XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOVwiIDogJycsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVycyAoe2lzTG9hZGluZ30pIHtcclxuICAgIC8vIHN0eWxlLCBjb29raWVcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZSddKTtcclxuICAgIC8vIHN0YXRlc1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gICAgY29uc3QgW3Jlc3VsdFNuYWNrICwgc2V0UmVzdWx0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2UsIGNvbnRlbnQgOiAnJ30pO1xyXG4gICAgY29uc3QgW2RhdGEgLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBoZWFkZXJzIDogZGVmYXVsdEhlYWRlcixcclxuICAgICAgICBncm91cGluZ3MgOiBBcnJheSgxMCkuZmlsbChmYWxzZSksXHJcbiAgICB9KVxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBkYXRhUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX1gKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cGluZ0xlbmd0aCA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzID8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MubGVuZ3RoIDogMCA6IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cGluZ3MgPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyA/IFsuLi5yZXNwb25zZS5kYXRhLmdyb3VwaW5nc10gOiBbXSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAtIGdyb3VwaW5nTGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuaGVhZGVycyA/IHJlc3BvbnNlLmRhdGEuaGVhZGVycyA6IHt9IDoge307XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzTGVuZ3RoID0gT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gaGVhZGVyc0xlbmd0aDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2BoZWFkZXIke2l9YF0gPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGFSZWYuY3VycmVudCA9IHtoZWFkZXJzLGdyb3VwaW5nc307XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSh7aGVhZGVycywgZ3JvdXBpbmdzfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkgeyAgLy8gdW5hdXRob3JpemVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMzUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYFBsZWFzZSBsb2cgaW4gYWdhaW4uYH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQgOiBgZXJyb3IgKGNvZGUgOiAke3Jlc3BvbnNlLnN0YXR1c30pYH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMzUwMCk7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3Blbjp0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50OidQbGVhc2UgbG9nIGluIGFnYWluLid9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRhdGFSZWYuY3VycmVudCA9IHtcclxuICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuaGVhZGVyc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncm91cGluZ3MgOiBbXHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmdyb3VwaW5nc1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sW2RhdGEuaGVhZGVycywgZGF0YS5ncm91cGluZ3NdKTtcclxuXHJcbiAgICAvLyBlZmZlY3RzXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PnsgXHJcbiAgICAgICAgc2V0RmFkZSh0cnVlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVTdWJtaXQoZGF0YVJlZi5jdXJyZW50LmhlYWRlcnMsIGRhdGFSZWYuY3VycmVudC5ncm91cGluZ3MsIHRydWUpO1xyXG4gICAgICAgICAgICBoYW5kbGVQcm9ncmVzcyhyZXN1bHQgPT09ICdlcnJvcicgPyAnZXJyb3InIDogJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtdKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgLy8gZXZlbnRzXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7ICAgIC8vIOuqqOuToCDsv6DtgqQg7IKt7KCc7JmAIHByb2ZpbGXsoJzqsbBcclxuICAgICAgICByZW1vdmVDb29raWUoJ3Byb2ZpbGUnKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGhlYWRlcnMsIGdyb3VwaW5ncywgaXNBdXRvU2F2ZSkgPT4ge1xyXG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5ldmVyeSh2ID0+IHYubGVuZ3RoIDw9IDE1KSkgeyAvLyAxNeq4gOyekCDsnbTsg4Eg7KCc7ZWcIOyXkOufrOuplOyEuOyngFxyXG4gICAgICAgICAgICBzZXRTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5maWx0ZXIodj0+dikubGVuZ3RoID09PSAwKSB7ICAgICAvLyDruYTslrTsnojsnYQg6rK97JqwIOyXkOufrOuplOyEuOyngFxyXG4gICAgICAgICAgICBzZXRTbmFjayh7b3Blbjp0cnVlfSlcclxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVIZWFkZXJzKGhlYWRlcnMsZ3JvdXBpbmdzKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc0F1dG9TYXZlKSBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsIGNvbnRlbnQgOiByZXNwb25zZS5yZXN1bHR9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAyMDAwKTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgW2BoZWFkZXIke2luZGV4fWBdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVHcm91cGluZ3MgPSAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGdyb3VwaW5ncyA6IGRhdGEuZ3JvdXBpbmdzLm1hcCgodixpKT0+IGk9PT1pbmRleD8gZS50YXJnZXQuY2hlY2tlZCA6IHYpfSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb21wb25lbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyIDogMTUwMH19PlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezR9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Sb290fSBhdXRvQ29tcGxldGU9J29mZic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J2Rpdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb2xvcj0ndGV4dFByaW1hcnknIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlciBFZGl0IEZvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj17T2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpID8gJ2JsdWUnIDogJ3JlZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSdpbml0aWFsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNSBsZXR0ZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuaGVhZGVycykubWFwKChoZWFkZXIsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpbmRleD09PTA/IHRydWU6ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpZD17YCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17YGhlYWRlci0ke2luZGV4KzF9YH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49J25vcm1hbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0Q2hhbmdlKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2RhdGEuaGVhZGVyc1tgaGVhZGVyJHtpbmRleH1gXS5sZW5ndGggPiAxNSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlxyXG5Zb3UgY2FuIGFycmFuZ2UgdGhlIGRhdGEgd2l0aCBhIHZhbGlkIGhlYWRlciwgXHJcblVuaXF1ZSB2YWx1ZXMgYXJlIG5vdCBjb21tb25seSB1c2VkIGZvciB0aGlzIGZ1bmN0aW9uIGluIGdlbmVyYWwuXHJcbmUuZy4pIG5hbWUsIGFkZHJlc3MsIG1vYmlsZSBOTy4gZXRjLlxyXG5cIlxyXG4gICAgICAgICAgICAgICAgIHBsYWNlbWVudD0ncmlnaHQnIGVudGVyRGVsYXk9ezIwMH0gbGVhdmVEZWxheT17MjAwfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGF0YS5ncm91cGluZ3NbaW5kZXhdfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVHcm91cGluZ3MoZSxpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICB7aW5kZXg9PT0wPyBcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3BhbicgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT4gR3JvdXBpbmchPzwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlNVQk1JVFwiIGFyaWEtbGFiZWw9J3N1Ym1pdCcgcGxhY2VtZW50PSd0b3AnIGVudGVyRGVsYXk9ezIwMH0gbGVhdmVEZWxheT17NDAwfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3d9IG9uTW91c2VPdmVyPXsoZSk9PmUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ31cclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVTdWJtaXQoZGF0YS5oZWFkZXJzICwgZGF0YS5ncm91cGluZ3MpfS8+XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgY29udGVudD17YEhlYWRlciBzaG91bGQgYmUgbGVzcyB0aGFuIDE1IGxldHRlcnMgOihgfSBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17cmVzdWx0U25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFJlc3VsdFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e3Jlc3VsdFNuYWNrLmNvbnRlbnR9IHN0YXR1cz17cmVzdWx0U25hY2suc3RhdHVzPT09J2Vycm9yJz8gJ2Vycm9yJyA6ICdzdWNjZXNzJ30vPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkhlYWRlcnMucHJvcFR5cGVzID0ge1xyXG4gICAgaXNMb2FkaW5nIDogUHJvcFR5cGVzLmJvb2xcclxufSIsImltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IE1hdGVyaWFsVGFibGUgZnJvbSAnbWF0ZXJpYWwtdGFibGUnO1xyXG5pbXBvcnQgTWFudWFsRGlhbG9nIGZyb20gXCIuL01hbnVhbERpYWxvZ1wiO1xyXG5pbXBvcnQgeyBvcHRpb25zLGxvY2FsaXphdGlvbiB9IGZyb20gXCIuL1RhYmxlT3B0aW9uc1wiO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBEZWZhdWx0UGFnZSBmcm9tICcuL0RlZmF1bHRQYWdlJztcclxuaW1wb3J0IHBhcnNlRGF0YSBmcm9tICcuLi91dGlsL3BhcnNlRGF0YSc7XHJcbmltcG9ydCBTYXZlQnV0dG9uIGZyb20gJy4vU2F2ZUJ1dHRvbic7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuLy8gdXNlRWZmZWN066GcIGRhdGEsIGNvbHVtbnMg6rCAIOuzgOqyveuQoCDrlYzrp4jri6Qg7ISc67KE7JeQIOyggOyepSDtm4Qg6rCx7IugXHJcbi8vIC4vdXRpbCDqsr3roZzsl5Ag66Gc7KeBIOyekeyEsVxyXG4vLyDthrXsi6Dsl5Ag64yA7ZWcIHRlc3Rjb2Rl7J6R7ISxXHJcbi8vIGNvbHVtbnPsmYAgZGF0YeydmCDqsIEg6rCS65Ok7JeQIOuMgO2VnCDrrLTqsrDshLEg7LK07YGsXHJcbi8vIHByb3BzVHlwZSDsnpHshLFcclxuLy8gU2lkZU1lbnVMaXN0ID0+IExvZ2lu7Jy866GcIOuzgOqyvSwg67mE66Gc6re47J24IOyLnCBMT0dJTuycvOuhnCDrs7Tsnbwg6rKDLCDroZzqt7jsnbjsi5wgTVkgTUVOVeuhnCDrs7TquLBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VtZW50VGFibGUoe2lzTG9hZGluZ30pIHtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcbiAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgLy8gc3RhdGVzXHJcbiAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3NhdmVkU25hY2sgLCBzZXRTYXZlZFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2Vycm9yU25hY2sgLCBzZXRFcnJvclNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHsgIC8vIOy1nOy0iCBBUEnroZwg67Cb7JWE7Jik64qUIOuPmeyeke2VhOyalFxyXG4gICAgZGVmYXVsdFBhZ2UgOiB0cnVlLFxyXG4gICAgaGFzVGFibGUgOiBmYWxzZSxcclxuICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgZGF0YTogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgdGFibGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3RydWN0b3JcclxuICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXMgOiAke3Jlc3BvbnNlLnN0YXR1c30gLCBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKTtcclxuICAgICAgICAgIC8vIOycoOyggCDtmZXsnbjrkJDqs6Ag7YWM7J2067iU64+EIOu5hOyWtOyeiOyngCDslYrsnYQg6rK97JqwXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzPT09MjAwICYmIHJlc3BvbnNlLmRhdGEuaGVhZGVycykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57c2V0U25hY2soe29wZW46dHJ1ZX0pfSw0MDApO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgY29sdW1ucyA6IHBhcnNlRGF0YShyZXNwb25zZS5kYXRhLmhlYWRlcnMgLCByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyksXHJcbiAgICAgICAgICAgICAgZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICBkZWZhdWx0UGFnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGhhc1RhYmxlIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBldmVudHNcclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtzZXREaWFsb2coe29wZW4gOiBmYWxzZX0pO307XHJcbiAgY29uc3QgaGFuZGxlT25TYXZlID0gKGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgLy8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciDsnZggcmVm7JeQ7IScIOyLoOuisOuPhOyeiOuKlCDrjbDsnbTthLAg7LC47KGwXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICBncm91cGluZ3MucHVzaCh2Lmdyb3VwaW5nKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICB9LHt9KVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgIGNvbnN0IHt0YWJsZURhdGEsIC4uLnJlc3R9ID0gdjtcclxuICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzYXZlRGF0YShoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKCFpc0F1dG9TYXZlKSBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gZWZmZWN0c1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7ICAgLy8gd2luZG93IOuNlOu4lO2BtOumrSDsnbTrsqTtirgg7LaU6rCALCDrj4Tsm4Drp5Agb3BlblxyXG4gICAgY29uc3Qgb25kYkNsaWNrID0gKCkgPT4gc2V0RGlhbG9nKHtvcGVuIDogIWRpYWxvZy5vcGVufSk7XHJcbiAgICBjb25zdCBvbktleWRvd24gPSAoZSkgPT4geyAgIC8vIGN0cmwgKyBz66GcIOyggOyepSBldmVudFxyXG4gICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKFwiTWFjXCIpID8gZS5tZXRhS2V5IDogZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlT25TYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgICAvLyDstIjquLDsoJHqt7zsnZgg6rK97JqwIOuNsOydtO2EsOqwgCDsl4bslrQg7JeQ65+sIOuwnOyDne2VoCDsiJgg7J6I7Ja0IOyCvO2VreyLneycvOuhnCDtjJDri6gg7ZuEIOyWuOuniOyatO2KuOyLnOydmCBmZXRjaEFQSeyLpO2WiVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZU9uU2F2ZSh0cnVlKSA6IG51bGwgOiBudWxsO1xyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZVByb2dyZXNzKCdzdWNjZXNzJykgOiBudWxsIDogbnVsbDtcclxuICB9O1xyXG59LCBbXSk7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbiAgY29uc3QgTWFyZ2luID0gKCkgPT4gKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PjwvQm94Pik7ICAvLyDsl6zrsLFcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgIHtcclxuICAgIHN0YXRlLmRlZmF1bHRQYWdlID9cclxuICAgICAgKDxEZWZhdWx0UGFnZSBzdGF0ZT17c3RhdGV9IHNldFN0YXRlPXtzZXRTdGF0ZX0vPilcclxuICAgIDogXHJcbiAgICAoPEJveD5cclxuICAgICAgICA8TWFudWFsRGlhbG9nIG9wZW49e2RpYWxvZy5vcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0vPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICB0YWJsZVJlZj17dGFibGVSZWZ9XHJcbiAgICAgIHRpdGxlPXtcclxuICAgICAgPFNhdmVCdXR0b24gc2V0U2F2ZWRTbmFjaz17c2V0U2F2ZWRTbmFja30gXHJcbiAgICAgIC8vIOuniOyatO2KuCDsnbTtm4Tsl5Ag7KCR6re87ZWE7JqUXHJcbiAgICAgIGRhdGFNYW5hZ2VyPXt0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA6IHt9fS8+XHJcbiAgICB9XHJcbiAgICAgIGNvbHVtbnM9e3N0YXRlLmNvbHVtbnN9XHJcbiAgICAgIGRhdGE9e3N0YXRlLmRhdGF9XHJcbiAgICAgIGxvY2FsaXphdGlvbj17bG9jYWxpemF0aW9ufSAvLyDroZzsu6zrnbzsnbTspohcclxuICAgICAgb3B0aW9ucz17b3B0aW9uc30gLy8g64K067O064K06riwLCDqt7jro6jtlZFcclxuICAgICAgYWN0aW9ucz17Wy8vIOupgO2LsCDshYDroInshZgg7J6R7JeFXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b29sdGlwIDogJ1JlbW92ZSB0aGUgU2VsZWN0ZWQgcm93KHMpJyxcclxuICAgICAgICAgICAgaWNvbiA6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICBvbkNsaWNrIDogKGUgLCBkZWxldGlvbnMpID0+IHsgIC8vIOyEoO2Dne2VnCDssrTtgazrsJXsiqTsl5Ag64yA7ZW0IOuqqOuRkCDsgq3soJwg7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZih2KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZEYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucHJldkRhdGEgLCBkYXRhfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdfSBcclxuICAgICAgZWRpdGFibGU9e3tcclxuICAgICAgICBvblJvd0FkZDogKG5ld0RhdGEpID0+ICAvLyDstpTqsIBcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgb25Sb3dVcGRhdGU6IChuZXdEYXRhLCBvbGREYXRhKSA9PiAgLy8g7IiY7KCVXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAob2xkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgICAgZGF0YVtkYXRhLmluZGV4T2Yob2xkRGF0YSldID0gbmV3RGF0YTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nbmVlZCBzb21lIGhlbHA/ID8gZG91YmxlLWNsaWNrIGFueSBzcGFjZSAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NhdmVkU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNhdmVkU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdTQVZFRCAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2Vycm9yU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldEVycm9yU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdFUlJPUiAhJyBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgIDwvQm94PlxyXG4gICAgKX1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuTWFuYWdlbWVudFRhYmxlLnByb3BUeXBlcyA9IHtcclxuICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiXHJcbmltcG9ydCB7RGlhbG9nLFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBMaXN0LFxyXG4gICAgTGlzdEl0ZW0sXHJcbiAgICBMaXN0SXRlbVRleHQsXHJcbiAgICBCb3gsXHJcbiAgICBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gICAgaWNvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICczdncnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbnVhbERpYWxvZyAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge29wZW4sIG9uQ2xvc2V9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpY29ucyA9IFtcclxuICAgICAgICB7aWNvbiA6ICdhZGRfYm94JyAsIGRlc2NyaXB0aW9uIDogJ1tBZGRdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJ1tFZGl0XSByZWNvcmRzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NlYXJjaCcgLCBkZXNjcmlwdGlvbiA6ICdUeXBlIGRvd24gd29yZHMgdG8gW3NlYXJjaF0uJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2F2ZV9hbHQnICwgZGVzY3JpcHRpb24gOiAnW0Rvd25sb2FkXSBmaWxlcyBpbiBDVlMgZm9ybWF0Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ3ZpZXdfd2VlaycgLCBkZXNjcmlwdGlvbiA6ICdbU2VsZWN0XSBjb2x1bW5zIHRvIGJlIGRpc3BsYXllZCd9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtkZWxldGVdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY2hlY2tfYm94JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgU2VsZWN0IHRoZSBjaGVja2JveCBvbiB0aGUgcm93Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ2ZhY3RfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDaGVjayB0aGUgbnVtYmVyIG9mIHRoZSByb3dzIHNlbGVjdGVkLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2RlbGV0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGiIENsaWNrIHRoZSBCaW4gaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUuJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW0VkaXRdIGhlYWRlcnMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnbWVudScgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIE9wZW4gTVlQQUdFJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2xpY2sgdGhlIFBlbmNpbCBpY29uJ30sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgb25DbG9zZT17b25DbG9zZX0gb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPiBCQVNJQyBNQU5VQUwgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbnMubWFwKChpY29uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17YCR7aWNvbn0gKyAke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17YG1hdGVyaWFsLWljb25zICR7Y2xhc3Nlcy5pY29ufWB9IHN0eWxlPXt7d2lkdGg6JzN2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aWNvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICA8L0RpYWxvZz5cclxuICAgIClcclxufVxyXG5NYW51YWxEaWFsb2cucHJvcFR5cGVzID0ge1xyXG4gICAgb3BlbiA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNsb3NlIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBUb29sdGlwfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYXZlQnV0dG9uICh7c2V0U2F2ZWRTbmFjayAsIGRhdGFNYW5hZ2VyfSkge1xyXG4gICAgZnVuY3Rpb24gb25DbGljayAoKSB7XHJcbiAgICAgICAgICAvLyBTQVZFIEVWRU5UIHV0aWwgPiBNYW5hZ2VtZW50QVBJLnNhdmVEYXRhIOunjOuTpOyWtOyEnCDsvZztlZjquLBcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IGRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgICAgICBvYmpbYGhlYWRlciR7aX1gXSA9IHYudGl0bGU7XHJcbiAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgfSx7fSk7XHJcbiAgICAgICAgICBkYXRhTWFuYWdlci5kYXRhLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCByZXN1bHQgOiBcclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9XHJcbiAgICAgICAgICAke2dyb3VwaW5nc31cclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9XHJcbiAgICAgICAgYClcclxuICAgICAgICBzYXZlRGF0YShoZWFkZXJzLGdyb3VwaW5ncyxkYXRhKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFRvb2x0aXAgdGl0bGU9J0NsaWNrIHRvIFNBVkUgKCBDdHJsICsgUyApJz5cclxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgXHJcbiAgICAgICAgb25DbGljaz17KCk9Pm9uQ2xpY2soKX0+XHJcbiAgICAgICAgICBTQVZFXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIClcclxufVxyXG5cclxuU2F2ZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgc2V0U2F2ZWRTbmFjayA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZGF0YU1hbmFnZXIgOiBQcm9wVHlwZXMub2JqZWN0XHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge0FkZEJveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuLy8gREFUQSBUQUJMRSBPUFRJT05TXHJcblxyXG4gZXhwb3J0IGNvbnN0IG9wdGlvbnM9IHtcclxuICAgIGV4cG9ydEJ1dHRvbjogdHJ1ZSxcclxuICAgIGdyb3VwaW5nOnRydWUsXHJcbiAgICBzZWxlY3Rpb246dHJ1ZSxcclxuICAgIGhlYWRlclN0eWxlOnsgXHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zQ29sdW1uSW5kZXg6LTEsICAvLyDslaHshZgg7JWE7J207L2Y7JyE7LmYXHJcbiAgICBjb2x1bW5zQnV0dG9uIDogdHJ1ZSwgXHJcbiAgICBkZWJvdW5jZUludGVydmFsIDogMTYwLCAvLyDroZzrlKnsi5zqsIRcclxuICAgIHBhZ2VTaXplIDogMTUsICAgICAgICAgIC8vIO2OmOydtOyngOyCrOydtOymiFxyXG4gICAgcGFnZVNpemVPcHRpb25zIDogWzUsIDE1LCAzMCwgNTAsIDEwMF0sIC8vIO2OmOydtOymiCDsgqzsnbTspogg7KKF66WYXHJcbiAgfVxyXG4gZXhwb3J0IGNvbnN0IGxvY2FsaXphdGlvbiA9IHtcclxuICAgIHBhZ2luYXRpb24gOiB7IGxhYmVsRGlzcGxheWVkUm93cyA6ICd7Y291bnR9IHJvd3MgfCB7ZnJvbX0te3RvfScgLCB9LFxyXG4gICAgdG9vbGJhcjoge25Sb3dzU2VsZWN0ZWQ6ICd7MH0gcm93KHMpIHNlbGVjdGVkJ30sXHJcbiAgICBoZWFkZXI6IHthY3Rpb25zOiAnRWRpdCd9LFxyXG4gICAgYm9keToge2VtcHR5RGF0YVNvdXJjZU1lc3NhZ2U6IFxyXG4gICAgICAgIChcclxuICAgICAgICA8Qm94IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgIHtgTm8gUmVjb3JkcyB0byBkaXNwbGF5YH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICBlbmRJY29uPXs8QWRkQm94Lz59XHJcbiAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YENsaWNrIHRoZSBwbHVzIGljb24gb24gdGhlIHJpZ2h0IGFib3ZlIGZvciBhIG5ldyByZWNvcmQuIGB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgfVxyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtUb29sYmFyLCBEcmF3ZXIgLCBCdXR0b24gLCBHcmlkLFxyXG4gICAgIERpdmlkZXIsIEFwcEJhciBhcyBBcHBiYXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEhpZGVPblNjaHJvbGwgZnJvbSBcIi4uL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbFwiO1xyXG5pbXBvcnQgU2lkZU1lbnVMaXN0IGZyb20gXCIuL1NpZGVNZW51TGlzdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IFNpZ25PdXRCdXR0b24gZnJvbSBcIi4vU2lnbk91dEJ1dHRvblwiO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6MTgsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbToxOCxcclxuICAgIH0sXHJcbiAgICBsZWZ0IDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OjMwLFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgY2VudGVyIDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OjQ1LFxyXG4gICAgICAgIGp1c3RpZnk6J2ZsZXgtZW5kJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgcGFkZGluZzpgMCAke3RoZW1lLnNwYWNpbmcoMyl9YFxyXG4gICAgfSxcclxuICB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdiAocHJvcHMpIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIG1lbnUgOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvciwgb3BlbikgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmxhZyA9IG9wZW4/IHN0YXRlW2FuY2hvcl0gPyBmYWxzZSA6IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogZmxhZyB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwcm9maWxlID0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBhbmNob3IgPSBwcm9maWxlLm5hbWU/ICdNWVBBR0UnIDonTE9HSU4nO1xyXG4gICAgY29uc3QgbGlua3MgPSBbJ2JvYXJkJywnbWFuYWdlbWVudCddO1xyXG4gICAgY29uc3QgTG9nb3V0QnRuID0gcHJvZmlsZS5uYW1lPyA8U2lnbk91dEJ1dHRvbi8+IDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGlkZU9uU2Nocm9sbCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxBcHBiYXIgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Ym94U2hhZG93Oidub25lJ319PlxyXG4gICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiBIb21lIDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7bGlua31gfSBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0ga2V5PXtsaW5rfT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4ge2xpbmt9IDwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+PHNwYW4+PC9zcGFuPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FuY2hvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7TG9nb3V0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXIgb3Blbj17c3RhdGVbYW5jaG9yXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSB2YXJpYW50PSdwZXJzaXN0ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1NpZGVNZW51TGlzdCggey4uLnByb3BzLCBhbmNob3IgLHRvZ2dsZURyYXdlciAsIHByb2ZpbGV9ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwYmFyPlxyXG4gICAgICAgIDwvSGlkZU9uU2Nocm9sbD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUF2YXRhciAsIERpdmlkZXIsIExpc3RJdGVtLCBUeXBvZ3JhcGh5ICwgQXZhdGFyLCBJY29uQnV0dG9uICxcclxuICAgICBNb2RhbCwgQm94LCBCdXR0b24sXHJcbiAgICAgUGFwZXIsXHJcbiAgICAgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi9TaWduSW5CdXR0b24nO1xyXG5pbXBvcnQgZ29vZ2xlU2lnbmluSW1hZ2UgZnJvbSAnLi4vYnV0dG9uSW1hZ2UvZ29vZ2xlU2lnbmluLnBuZyc7XHJcbmltcG9ydCB7cmVkaXJlY3RHb29nbGVMb2dpbn0gZnJvbSAnLi4vdXRpbC9Mb2dpbkFQSSc7XHJcbmltcG9ydCB7RWRpdCwgSW5mbywgRGVsZXRlRm9yZXZlciwgV2FybmluZ30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQge0dsb2JhbFNuYWNrYmFyQ29udGV4dH0gZnJvbSAnLi4vYXBwJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxpc3QgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMjN2dycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnc3RhcnQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtVGV4dCA6IHtcclxuICAgICAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbGFyZ2VBdmF0YXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICB9LFxyXG4gICAgaW5saW5lIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnaW5saW5lJ1xyXG4gICAgfSxcclxuICAgIGxpc3RUZXh0IDoge1xyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsIDoge1xyXG4gICAgICAgIHRvcCA6ICc1MCUnLFxyXG4gICAgICAgIGxlZnQgOiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgbWluV2lkdGggOiA0MDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbW9kYWxSb3dCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBtb2RhbENvbEJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcidcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVMaXN0ICh7YW5jaG9yICwgdG9nZ2xlRHJhd2VyLCBwcm9maWxlfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlR2xvYmFsU25hY2tiYXIgPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbFNuYWNrYmFyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZW1haWxJbnB1dCwgc2V0RW1haWxJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrTG9naW4gKCkge1xyXG4gICAgICAgIHJlZGlyZWN0R29vZ2xlTG9naW4oKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2tNb2RhbCA9ICgpID0+IHNldE1vZGFsKHRydWUpO1xyXG4gICAgY29uc3QgaGFuZGxlT25DbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0RW1haWxJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZW1haWxJbnB1dCA9PT0gcHJvZmlsZS5lbWFpbCkge1xyXG4gICAgICAgICAgICBzYXZlRGF0YSh7fSxbXSxbe31dKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlR2xvYmFsU25hY2tiYXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBkYXRhLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgfSwxNTAwKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVHbG9iYWxTbmFja2Jhcih7XHJcbiAgICAgICAgICAgICAgICBvcGVuOnRydWUsIFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OidlcnJvcidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IHByb2ZpbGU/IHByb2ZpbGUubmFtZT8gdHJ1ZSA6IGZhbHNlIDogZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpc0xvZ2dlZD8gJ1BST0ZJTEUnIDogJ0xPR0lOIE1FTlUnfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG5cclxuICAgICAgICAgICAge2lzTG9nZ2VkPyBcclxuXHJcbiAgICAgICAgICAgICg8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3Byb2ZpbGUucGljdHVyZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlQXZhdGFyfSBhbHQ9e3Byb2ZpbGUubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9maWxlLm5hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGV4dH0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nRU1BSUwgOiAnIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0nc3BhbicgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0UHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvIGNvbG9yPSdwcmltYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdFRElUIEhFQURFUlMnLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2hlYWRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IGNvbG9yPSdwcmltYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmcgY29sb3I9J3NlY29uZGFyeScgc3R5bGU9e3ttYXJnaW5SaWdodDonMXZ3J319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHNlY29uZGFyeT0nUkVNT1ZFIEFMTCBEQVRBJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nZW5kJyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcicgb25DbGljaz17aGFuZGxlT25DbGlja01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIOuqqOuLrCAqL31cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbj17bW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVPbkNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtY29udGVudHNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFJvd0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdzdGFydCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVyIGNvbG9yPSdzZWNvbmRhcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC10aXRsZVwiIHZhcmlhbnQ9J2J1dHRvbicgZGlzcGxheT0nYmxvY2snIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXV0aW9uIDogcGVybWFuZW50IGRlbGV0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbENvbEJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLWNvbnRlbnRzXCIgdmFyaWFudD0nYm9keTEnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YEFsbCBkYXRhIHdpbGwgYmUgZGVsZXRlZCBhbmQgY2Fubm90IGJlIHJlY292ZXJlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBjb3JyZWN0bHkgdG8gY29udGludWUuYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nPntwcm9maWxlLmVtYWlsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsUm93Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9J0UtTUFJTCcgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICg8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gb25DbGljaz17aGFuZGxlT25DbGlja0xvZ2lufT5cclxuICAgICAgICAgICAgICAgIDxTaWduSW5CdXR0b24gc2lnbkluPXtnb29nbGVTaWduaW5JbWFnZX0vPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPil9XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5NZW51TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBhbmNob3IgOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0b2dnbGVEcmF3ZXIgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZmlsZSA6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyxCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDAlJyxcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge3NpZ25Jbn0gPSBwcm9wczsgLy8g7J2066+47KeAXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3Bhbic+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzaWduSW59IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PjwvaW1nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IEV4aXRUb0FwcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcCc7XHJcbmltcG9ydCB7IExpc3RJdGVtICwgSWNvbkJ1dHRvbiwgVG9vbHRpcH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBsb2dvdXQgOiB7XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJyxcclxuICAgICAgICBwYWRkaW5nIDogJzJweCcsXHJcbiAgICAgICAgbWFyZ2luIDogMCxcclxuICAgICAgICB3aWR0aCA6ICdhdXRvJyxcclxuICAgIH1cclxufSkpXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgZm9udFdlaWdodDonYm9sZCdcclxuICAgIH0sXHJcbiAgfSkpKFRvb2x0aXApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7ICAgIC8vIOuqqOuToCDsv6DtgqQg7IKt7KCc7JmAIHByb2ZpbGXsoJzqsbBcclxuICAgICAgICByZW1vdmVDb29raWUoJ3Byb2ZpbGUnKTtcclxuICAgICAgICByZW1vdmVDb29raWUoJ3VzZXInKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb3V0fT5cclxuICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9J0xvZy1vdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7cGFkZGluZzo0fX0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPiAgICBcclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gXCIuL3NlcnZlclVSTFwiO1xyXG5cclxuLy8gVVJMIGV4cG9ydFxyXG4vLyBzZXZlcuyXkOyEnCDrsJvsnYAgdXJs66GcIOumrOuLpOydtOugie2KuFxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RHb29nbGVMb2dpbiA9ICgpID0+IGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2xvZ2luYCkudGhlbihyZXMgPT4gbG9jYXRpb24uYXNzaWduKHJlcy5kYXRhKSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbkFuZFByb2ZpbGUgPSAodG9rZW4pID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vbG9naW5gLCB7dG9rZW59ICx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZSxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2U9PlByb21pc2UucmVzb2x2ZShyZXNwb25zZS5kYXRhKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tICcuL3NlcnZlclVSTCc7XHJcblxyXG4vLyDthYzsnbTruJQg642w7J207YSwIOuwm+yVhOyYpOq4sCBjb29raWXsl5Ag64u06ri0IHRva2Vu7IKs7JqpXHJcbmV4cG9ydCBjb25zdCBnZXRNYW5hZ2VtZW50VGFibGUgPSAgKCkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5nZXQoYCR7c2VydmVyVVJMfS9tYW5hZ2VtZW50YCx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOnRydWVcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVIZWFkZXJzID0gKGhlYWRlcnMsIGdyb3VwaW5ncykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHNhdmluZyBoZWFkZXJzIDogXHJcbiAgICBoZWFkZXJzIDogJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgIGdyb3VwaW5ncyA6ICR7SlNPTi5zdHJpbmdpZnkoZ3JvdXBpbmdzKX1gKTtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vaGVhZGVyc2AsIHtcclxuICAgICAgICAvLyBkYXRhXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBncm91cGluZ3NcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSkpOyAgICAvLyDsv6DtgqTsmYAg7ZWo6ruYXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlRGF0YSA9IChoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MucHV0KGAke3NlcnZlclVSTH0vZGF0YWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5ncyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoNDAwKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgfSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKGhlYWRlcnMgLCBncm91cGluZ3MpID0+IHtcclxuICBjb25zb2xlLmxvZyhgZGF0YSBwYXJzaW5nISEhIWApXHJcbiAgICByZXR1cm4gKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLm1hcCgodmFsdWUsaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSA6IHZhbHVlLFxyXG4gICAgICAgIGZpZWxkIDogdmFsdWUsXHJcbiAgICAgICAgZ3JvdXBpbmcgOiBncm91cGluZ3NbaW5kZXhdXHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9IiwiZXhwb3J0IGRlZmF1bHQgXCJodHRwczovL21hbmFnZW1lbnQtYXBwbGUuaGVyb2t1YXBwLmNvbVwiO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiOyJdLCJzb3VyY2VSb290IjoiIn0=