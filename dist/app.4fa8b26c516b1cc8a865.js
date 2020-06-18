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
      justifySelf: 'center'
    },
    inputBox: {
      width: '40vw',
      marginTop: '5vh'
    }
  };
});
function Board(_ref) {
  var isLoading = _ref.isLoading;
  var classes = useStyles();
  var inputRef = React.useRef();
  React.useEffect(function () {
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        // enter pressed
        inputRef.current.querySelector('#message').focus(); // focus 작동
      }
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_customHook_Loading__WEBPACK_IMPORTED_MODULE_0__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.container
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.paper,
    elevation: 5
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.backLogo
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    style: {
      fontWeight: 'bolder',
      color: '#e0e0e0'
    }
  }, " IN READY. "), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    style: {
      fontWeight: 'bolder',
      color: '#e0e0e0'
    }
  }, " ~ 2020/06/21 ")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.inputBox
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "message",
    label: "message",
    style: {
      margin: 8
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svRXJyb3JGYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9IaWRlT25TY2hyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svU25hY2tCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Dcm9zc2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbWFnZVNsaWRlU291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9JbnRyb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9MaXN0Q2Fyb3VzZWxEZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL1N0YXJ0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXJyb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmxhY2sucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZGVzay5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9lYXN5LWxvZ2luLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hhbmRsZS10YWJsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9saW5rLW1hbmFnZW1lbnQtcGFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYWtlLWhlYWRlcnMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21vb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbXltZW51LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NsaWRlMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGFydC1yaWdodC1hd2F5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3doaXRlLWFycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3doaXRlYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L0RlZmF1bHRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L0hlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW51YWxEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvU2F2ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9UYWJsZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9TaWRlTWVudUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9TaWduSW5CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdi9TaWduT3V0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0xvZ2luQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL01hbmFnZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGFyc2VEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3NlcnZlclVSTC5qcyJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkxvZ291dENvbnRleHQiLCJQcm9ncmVzc0NvbnRleHQiLCJHbG9iYWxTbmFja2JhckNvbnRleHQiLCJBcHAiLCJxcyIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwiaWRfdG9rZW4iLCJ1c2VDb29raWVzIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsInVzZVN0YXRlIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJvcGVuIiwicmVzdWx0IiwiZ2xvYmFsU25hY2tiYXIiLCJzZXRHbG9iYWxTbmFja2JhciIsInByb2dyZXNzUmVmIiwidXNlUmVmIiwiaGFuZGxlQmVmb3JldW5sb2FkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInVzZUVmZmVjdCIsImdldFRva2VuQW5kUHJvZmlsZSIsInRoZW4iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJwYXRoIiwibWF4QWdlIiwiZXJyIiwiRXJyb3IiLCJFcnJvckZhbGxiYWNrIiwiZXJyb3IiLCJjb21wb25lbnRTdGFjayIsInJlcGxhY2UiLCJvcmlnaW4iLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsInBhcGVyIiwiYmFja0xvZ28iLCJqdXN0aWZ5U2VsZiIsImlucHV0Qm94IiwibWFyZ2luVG9wIiwiQm9hcmQiLCJjbGFzc2VzIiwiaW5wdXRSZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwidiIsInNocmluayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJ1c2VTdHlsZSIsInJvb3QiLCJwYWxldHRlIiwiZ3JleSIsInBhcGVyMiIsImJ1dHRvbiIsInJlc2V0RXJyb3JCb3VuZGFyeSIsInNlY29uZCIsInNldFNlY29uZCIsIm1lc3NhZ2UiLCJIaWRlT25TY3JvbGwiLCJjaGlsZHJlbiIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiTG9hZGluZyIsIkN1c3RvbVNuYWNrYmFyIiwib25DbG9zZSIsImNvbnRlbnQiLCJzdGF0dXMiLCJkaXJlY3Rpb24iLCJmb250U2l6ZSIsImlzUmVxdWlyZWQiLCJmdW5jIiwic3RyaW5nIiwib25lT2YiLCJvYmplY3QiLCJ1c2VPbkZpcnN0UmVuZGVyIiwiaXNGaXJzdFJlZiIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1pbkhlaWdodCIsImZvb3RlciIsInBhZGRpbmciLCJzcGFjaW5nIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImFycm93IiwiYWxpZ25TZWxmIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZFNpemUiLCJTdGlja3lGb290ZXIiLCJwYXRobmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInRyYW5zaXRpb24iLCJ0YXJnZXQiLCJzdHlsZSIsImN1cnNvciIsImJhY2tncm91bmRJbWFnZSIsIm1hbmFnZW1lbnRCYWNrZ3JvdW5kIiwidHJhbnNmb3JtIiwid2hpdGVBcnJvdyIsInRleHRDb250YWluZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0U2hhZG93IiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlTGlzdCIsImxpc3QiLCJzZXRTdGVwcGVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwiaGFuZGxlQWZ0ZXJTbGlkZSIsInNsaWRlSW5kZXgiLCJpbmRleCIsIm1hcCIsImltYWdlIiwic3JjIiwibnVtYmVyIiwiZmxleFdyYXAiLCJDcm9zc2xpbmUiLCJmYWRlIiwic2V0RmFkZSIsImRvbVJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsImVudGVyIiwiZXhpdCIsImlubmVyQm94IiwiRGVzY3JpcHRpb24iLCJncm93Iiwic2V0R3JvdyIsInRyYW5zZm9ybU9yaWdpbiIsInRpbWVvdXQiLCJhcHBlYXIiLCJIb21lIiwic2xpZGUwIiwiZGVzY3JpcHRpb24iLCJlYXN5TG9naW4iLCJsaW5rTWFuYWdlbWVudFBhZ2UiLCJzdGFydFJpZ2h0QXdheSIsIm1ha2VIZWFkZXJzIiwiaGFuZGxlVGFibGUiLCJ1c2VNeW1lbnUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwidGV4dFBhcGVyIiwiSW50cm9kdWN0aW9uIiwic3RlcHBlciIsImxvZ29Cb3giLCJiaWdBdmF0YXIiLCJ0ZXh0V2l0aFNoYWRvdyIsIm1hcmdpbkxlZnQiLCJkZXNjcmlwdGlvbkJveCIsIm1vb25JbWFnZSIsImlubGluZSIsIkRlc2NyaXB0aW9uTGlzdCIsInNsaWRlU291cmNlIiwiaXRlbSIsImFsaWduQ29udGVudCIsIk1haW4iLCJ0ZXh0IiwidHlwb2dyYXBoeSIsInRleHREZWNvcmF0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uQ29udGFpbmVyIiwiZGVmYXVsdERhdGEiLCJjb2x1bW5zIiwidGl0bGUiLCJmaWVsZCIsImdyb3VwaW5nIiwiRGVmYXVsdFBhZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwibWF0Y2giLCJmYWRlMiIsInNldEZhZGUyIiwiaGFuZGxlT25ERU1PQ2xpY2siLCJkZWZhdWx0UGFnZSIsInNldFRpbWVvdXQiLCJzaGFwZSIsImhhc1RhYmxlIiwiYXJyYXkiLCJmb3JtUm9vdCIsImRlZmF1bHRIZWFkZXIiLCJIZWFkZXJzIiwiaGFuZGxlUHJvZ3Jlc3MiLCJ1c2VDb250ZXh0Iiwic25hY2siLCJzZXRTbmFjayIsInJlc3VsdFNuYWNrIiwic2V0UmVzdWx0U25hY2siLCJoZWFkZXJzIiwiZ3JvdXBpbmdzIiwiQXJyYXkiLCJmaWxsIiwic2V0RGF0YSIsImRhdGFSZWYiLCJnZXRNYW5hZ2VtZW50VGFibGUiLCJyZXNwb25zZSIsImdyb3VwaW5nTGVuZ3RoIiwibGVuZ3RoIiwiaSIsInB1c2giLCJoZWFkZXJzTGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiaGFuZGxlTG9nb3V0IiwiaGFuZGxlU3VibWl0IiwiaHJlZiIsImlzQXV0b1NhdmUiLCJldmVyeSIsImZpbHRlciIsInNhdmVIZWFkZXJzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUdyb3VwaW5ncyIsImNoZWNrZWQiLCJoZWFkZXIiLCJNYW5hZ2VtZW50VGFibGUiLCJzYXZlZFNuYWNrIiwic2V0U2F2ZWRTbmFjayIsImVycm9yU25hY2siLCJzZXRFcnJvclNuYWNrIiwiZGlhbG9nIiwic2V0RGlhbG9nIiwidGFibGVSZWYiLCJwYXJzZURhdGEiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZU9uU2F2ZSIsImRhdGFNYW5hZ2VyIiwicmVkdWNlIiwib2JqIiwidGFibGVEYXRhIiwicmVzdCIsInNhdmVEYXRhIiwib25kYkNsaWNrIiwib25LZXlkb3duIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJtZXRhS2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1hcmdpbiIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJldkRhdGEiLCJvblJvd0FkZCIsIm5ld0RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZXZTdGF0ZSIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsIk1hbnVhbERpYWxvZyIsImljb25zIiwiU2F2ZUJ1dHRvbiIsImV4cG9ydEJ1dHRvbiIsInNlbGVjdGlvbiIsImhlYWRlclN0eWxlIiwiYWN0aW9uc0NvbHVtbkluZGV4IiwiY29sdW1uc0J1dHRvbiIsImRlYm91bmNlSW50ZXJ2YWwiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsInBhZ2luYXRpb24iLCJsYWJlbERpc3BsYXllZFJvd3MiLCJ0b29sYmFyIiwiblJvd3NTZWxlY3RlZCIsImFjdGlvbnMiLCJib2R5IiwiZW1wdHlEYXRhU291cmNlTWVzc2FnZSIsImZsZXhHcm93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsZWZ0IiwicGFkZGluZ0xlZnQiLCJqdXN0aWZ5IiwiY2VudGVyIiwicmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJOYXYiLCJtZW51IiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwiZXZlbnQiLCJmbGFnIiwibGlua3MiLCJMb2dvdXRCdG4iLCJib3hTaGFkb3ciLCJsaW5rIiwibWFyZ2luUmlnaHQiLCJTaWRlTWVudUxpc3QiLCJsaXN0SXRlbSIsImxpc3RJdGVtVGV4dCIsImxhcmdlQXZhdGFyIiwibGlzdFRleHQiLCJtb2RhbCIsInBvc2l0aW9uIiwiYm9yZGVyIiwic2hhZG93cyIsIm1vZGFsUm93Qm94IiwibW9kYWxDb2xCb3giLCJNZW51TGlzdCIsImhhbmRsZUdsb2JhbFNuYWNrYmFyIiwiZW1haWxJbnB1dCIsInNldEVtYWlsSW5wdXQiLCJoYW5kbGVPbkNsaWNrTG9naW4iLCJyZWRpcmVjdEdvb2dsZUxvZ2luIiwiaGFuZGxlT25DbGlja01vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVPbkNsb3NlTW9kYWwiLCJoYW5kbGVPblN1Ym1pdCIsImlzTG9nZ2VkIiwiZ29vZ2xlU2lnbmluSW1hZ2UiLCJTaWduSW5CdXR0b24iLCJzaWduSW4iLCJsb2dvdXQiLCJMaWdodFRvb2x0aXAiLCJ3aXRoU3R5bGVzIiwiY29tbW9uIiwid2hpdGUiLCJUb29sdGlwIiwiYXhpb3MiLCJnZXQiLCJzZXJ2ZXJVUkwiLCJyZXMiLCJhc3NpZ24iLCJ0b2tlbiIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJwdXQiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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QUFNLENBQUNDLE1BQVAsQ0FBY2QsT0FBZCxFQUF1Qm9CLE1BQXZCLENBQThCLFVBQUFuTCxDQUFDO0FBQUEsV0FBRUEsQ0FBRjtBQUFBLEdBQS9CLEVBQW9Dd0UsR0FBcEMsQ0FBd0MsVUFBQzhHLEtBQUQsRUFBTy9HLEtBQVAsRUFBaUI7QUFDL0QsV0FBTztBQUNMZ0UsV0FBSyxFQUFHK0MsS0FESDtBQUVMOUMsV0FBSyxFQUFHOEMsS0FGSDtBQUdMN0MsY0FBUSxFQUFHdUIsU0FBUyxDQUFDekYsS0FBRDtBQUhmLEtBQVA7QUFLRCxHQU5PLENBQVI7QUFPRCxDQVRILEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWUsdUdBQWYsRSxDQUNBLDBDIiwiZmlsZSI6ImFwcC40ZmE4YjI2YzUxNmIxY2M4YTg2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiIGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi9OYXZcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkL0JvYXJkXCI7XHJcbmltcG9ydCBNYW5hZ2VtZW50IGZyb20gXCIuL21hbmFnZW1lbnQvTWFuYWdlbWVudFwiO1xyXG5pbXBvcnQgSGVhZGVycyBmcm9tICcuL21hbmFnZW1lbnQvSGVhZGVycyc7XHJcbmltcG9ydCB7Q3NzQmFzZWxpbmV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZS9Ib21lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSdcclxuaW1wb3J0IHsgZ2V0VG9rZW5BbmRQcm9maWxlIH0gZnJvbSBcIi4vdXRpbC9Mb2dpbkFQSVwiO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IEVycm9yRmFsbGJhY2sgZnJvbSAnLi9jdXN0b21Ib29rL0Vycm9yRmFsbGJhY2snO1xyXG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSBcInJlYWN0LWVycm9yLWJvdW5kYXJ5XCI7XHJcblxyXG4vLyDsu6jthY3siqTtirgg66qp66GdXHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IExvZ291dENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTbmFja2JhckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCB7IGlkX3Rva2VuIH0gPSBxcy5wYXJzZSh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgICBjb25zdCBbIHByb2ZpbGUgLCBzZXRQcm9maWxlIF0gPSBSZWFjdC51c2VTdGF0ZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnbG9iYWxTbmFja2Jhciwgc2V0R2xvYmFsU25hY2tiYXJdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZSAsIHJlc3VsdDogJ3N1Y2Nlc3MnfSlcclxuICAgIGNvbnN0IHByb2dyZXNzUmVmID0gUmVhY3QudXNlUmVmKDApO1xyXG4gICAgY29uc3QgaGFuZGxlQmVmb3JldW5sb2FkID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwcm9ncmVzcyA6ICR7cHJvZ3Jlc3NSZWYuY3VycmVudH1gKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBwcm9ncmVzc1JlZi5jdXJyZW50ID0gKHByb2dyZXNzUmVmLmN1cnJlbnQgPCAxMDAgPyBwcm9ncmVzc1JlZi5jdXJyZW50ICsgMjAgOiAxMDApO1xyXG4gICAgICAgIGlmIChwcm9ncmVzc1JlZi5jdXJyZW50ID09PSAxMDApIHtcclxuICAgICAgICAgICAgIHByb2dyZXNzUmVmLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgIHNldEdsb2JhbFNuYWNrYmFyKHtvcGVuOnRydWUgLCByZXN1bHQ6cmVzdWx0fSk7XHJcbiAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9LDIwMClcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBBUEkg7Iuk7ZaJJyk7XHJcbiAgICAgICAgICAgIGdldFRva2VuQW5kUHJvZmlsZShpZF90b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtuYW1lICxlbWFpbCwgcGljdHVyZX0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKFwicHJvZmlsZVwiLHtuYW1lICwgZW1haWwsIHBpY3R1cmV9LHtwYXRoOlwiL1wiICwgbWF4QWdlIDogNzIwMH0pOyAgLy8gbWF4QWdlIDogMuyLnOqwhFxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2dpbiBGYWlsZWQuIFBsZWFzZSBhdXRob3JpemUgdGhlIHVzZSBvZiBjb29raWVzIGluIHlvdXIgYnJvd3Nlci4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtpZF90b2tlbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChjb29raWVzLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGNvb2tpZXMucHJvZmlsZSA6ICR7SlNPTi5zdHJpbmdpZnkoY29va2llcy5wcm9maWxlKX1gKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2Nvb2tpZXMucHJvZmlsZV0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5XHJcbiAgICAgICAgICAgIEZhbGxiYWNrQ29tcG9uZW50PXtFcnJvckZhbGxiYWNrfVxyXG4gICAgICAgICAgICBvbkVycm9yPXsoZXJyb3IsIGNvbXBvbmVudFN0YWNrKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIDogJHtlcnJvcn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFN0YWNrIDogJHtjb21wb25lbnRTdGFja31gKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25SZXNldD17KCk9PmxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24ub3JpZ2luKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb2ZpbGUgfHwge25hbWUgOiAnJ319PiAgICAgICAgICB7Lyog7Jyg7KCAIO2UhOuhnO2VhCDsu6jthY3siqTtirggICAgKi99XHJcbiAgICAgICAgICAgIDxMb2dvdXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRQcm9maWxlfT4gICB7Lyog66Gc6re47JWE7JuDIOydtOuypO2KuCDsu6jthY3siqTtirggICAqL31cclxuICAgICAgICAgICAgPFByb2dyZXNzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17KHJlc3VsdCk9PmhhbmRsZUJlZm9yZXVubG9hZChyZXN1bHQpfT4gIHsvKiDroZzrlKkg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgIDxHbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldEdsb2JhbFNuYWNrYmFyfT4gIHsvKiDsl5Drn6wg7Iqk64K167CUIOy7qO2FjeyKpO2KuCAgICovfVxyXG4gICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgcmVuZGVyPXsoKT0+PEhvbWUgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYm9hcmQnIHJlbmRlcj17KCk9PjxCb2FyZCBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9tYW5hZ2VtZW50JyByZW5kZXI9eygpPT4gPE1hbmFnZW1lbnQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvaGVhZGVycycgcmVuZGVyPXsoKT0+IDxIZWFkZXJzIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nLycgcmVuZGVyPXsocHJvcHMpPT48Rm9vdGVyIHsuLi5wcm9wc30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDwvR2xvYmFsU25hY2tiYXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1Byb2dyZXNzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Mb2dvdXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2dsb2JhbFNuYWNrYmFyLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRHbG9iYWxTbmFja2Jhcih7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdD09PSdlcnJvcic/IGBOb3Qgc2F2ZWQuXHJcbiAgICAgICAgICAgICAgICBSZWFzb24gOiBJbnZhbGlkIGlucHV0LmAgOicgU0FWRUQgJ30gc3RhdHVzPXtnbG9iYWxTbmFja2Jhci5yZXN1bHR9XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3t2ZXJ0aWNhbDondG9wJywgaG9yaXpvbnRhbDoncmlnaHQnfX0vPlxyXG4gICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7IEJveCwgUGFwZXIsIFR5cG9ncmFwaHksIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICB3aWR0aCA6ICc3NXZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnODV2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYmFja0xvZ28gOiB7XHJcbiAgICAgICAganVzdGlmeVNlbGYgOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dEJveCA6IHtcclxuICAgICAgICB3aWR0aCA6ICc0MHZ3JyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzV2aCdcclxuICAgIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoe2lzTG9hZGluZ30pIHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gZW50ZXIgcHJlc3NlZFxyXG4gICAgICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpLmZvY3VzKCk7IC8vIGZvY3VzIOyekeuPmVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17NX0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tMb2dvfSA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicgLCBjb2xvcjonI2UwZTBlMCd9fT4gSU4gUkVBRFkuIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJyAsIGNvbG9yOicjZTBlMGUwJ319PiB+IDIwMjAvMDYvMjEgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRCb3h9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICByZWY9e3YgPT4gaW5wdXRSZWYuY3VycmVudCA9IHZ9XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkJvYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIGlzTG9hZGluZyA6IFByb3BUeXBlcy5ib29sXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZ29vZ2xlU2lnbmluLjFjZTFhYWE1YTEyN2ZhM2U0OTJhMTJiYjYyZjk5MzA0LnBuZ1wiOyIsImltcG9ydCB7IEJveCwgUGFwZXIsVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3QgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCdcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICB3aWR0aCA6ICc4MHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnNTB2aCcsXHJcbiAgICAgICAgY29sb3IgOiB0aGVtZS5wYWxldHRlLmdyZXlbNTAwXSxcclxuICAgICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcidcclxuICAgIH0sXHJcbiAgICBwYXBlcjIgOiB7XHJcbiAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOidmbGV4LXN0YXJ0JyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzN2aCcsXHJcbiAgICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICc1dmgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcidcclxuICAgIH1cclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvckZhbGxiYWNrICh7ZXJyb3IsIGNvbXBvbmVudFN0YWNrLCByZXNldEVycm9yQm91bmRhcnl9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IFtzZWNvbmQgLCBzZXRTZWNvbmRdID0gUmVhY3QudXNlU3RhdGUoMTApO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChzZWNvbmQgPD0gMCkgbG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzZWNvbmQgOiAgJHtzZWNvbmR9YCk7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICBzZXRTZWNvbmQoc2Vjb25kLTEpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sW3NlY29uZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnPiB7YEVSUk9SIDogJHtlcnJvci5tZXNzYWdlfWB9IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJz4ge2BXaWxsIGdvIGJhY2sgdG8gdGhlIEhPTUVgfSAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInPiB7YGluICR7c2Vjb25kfSBzZWNvbmRzLmB9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17cmVzZXRFcnJvckJvdW5kYXJ5fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgUmV0dXJuIHRvIEhvbWUgTm93IFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyMn0gZWxldmF0aW9uPXswfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnPiB7YFBsZWFzZSBjaGVjayBiZWxvdy5gfSAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+IHtgMS4gTG9naW4gdGltZW91dCAtIExvZ2luIFJldGVudGlvbiBUaW1lOiAyIGhvdXJzYH0gIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPiB7YDIuIEludmFsaWQgUmVxdWVzdGB9ICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5FcnJvckZhbGxiYWNrLnByb3BUeXBlcyA9IHtcclxuICAgIHJlc2V0RXJyb3JCb3VuZGFyeSA6IFByb3BUeXBlcyxcclxufSIsImltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCI7XHJcbmltcG9ydCBTbGlkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZSc7XHJcblxyXG4vLyBHTkLsnZgg7Iqs65287J2065Oc6riw64qlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpZGVPblNjcm9sbChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTbGlkZSBhcHBlYXI9e2ZhbHNlfSBkaXJlY3Rpb249XCJkb3duXCIgaW49eyF0cmlnZ2VyfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TbGlkZT5cclxuICApO1xyXG59IiwiaW1wb3J0IHtCb3gsIENpcmN1bGFyUHJvZ3Jlc3MsIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZyAoe2lzTG9hZGluZ30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtcclxuICAgICAgICBpc0xvYWRpbmcgJiYgXHJcbiAgICAgICAgICAgICg8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDB2aCcsIHdpZHRoOicxMDB2dycsIGRpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YFNhdmluZyBjaGFuZ2VzYH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICAgICAgICAgIDwvQm94PilcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbn1cclxuXHJcbkxvYWRpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgaXNMb2FkaW5nIDogUHJvcFR5cGVzLmJvb2xcclxufSIsImltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbVNuYWNrYmFyICh7b3Blbiwgb25DbG9zZSwgY29udGVudCwgc3RhdHVzLCBkaXJlY3Rpb259KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICBhbmNob3JPcmlnaW49e2RpcmVjdGlvbj8gZGlyZWN0aW9uIDogeyB2ZXJ0aWNhbDondG9wJywgaG9yaXpvbnRhbDonY2VudGVyJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e29uQ2xvc2V9IHNldmVyaXR5PXtzdGF0dXN9XHJcbiAgICAgICAgICAgICB2YXJpYW50PSdmaWxsZWQnIG1lc3NhZ2U9e3tmb250V2VpZ2h0Oidib2xkZXInLCBmb250U2l6ZTonNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICApXHJcbn1cclxuXHJcbkN1c3RvbVNuYWNrYmFyLnByb3BUeXBlcyA9IHtcclxuICAgIG9wZW4gOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgb25DbG9zZSA6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29udGVudCA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzdGF0dXMgOiBQcm9wVHlwZXMub25lT2YoWydlcnJvcicsJ3N1Y2Nlc3MnXSksXHJcbiAgICBkaXJlY3Rpb24gOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbi8vIGNvbnRzdHJ1Y3RvciDtm4VcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT25GaXJzdFJlbmRlciAoZnVuYykge1xyXG4gICAgY29uc3QgaXNGaXJzdFJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuICAgIGlmIChpc0ZpcnN0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpc0ZpcnN0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBmdW5jKCk7XHJcbiAgICB9XHJcbn1cclxudXNlT25GaXJzdFJlbmRlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBmdW5jIDogUHJvcFR5cGVzLmZ1bmNcclxufSIsImltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHdoaXRlQXJyb3cgZnJvbSAnLi4vaW1hZ2VzL3doaXRlLWFycm93LnBuZyc7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9pbWFnZXMvYXJyb3cucG5nJztcclxuaW1wb3J0IHtCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBtYW5hZ2VtZW50QmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZyc7XHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgIHsnQ29weXJpZ2h0IMKpICd9XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIEphY2sncyBXZWJzaXRlXHJcbiAgICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgICB7Jy4nfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIG1pbkhlaWdodDogJzIwdmgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcclxuICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICAgIGJhY2tncm91bmQgOiB0aGVtZS5wYWxldHRlLmdyZXlbMjAwXSxcclxuICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yIDogJ3doaXRlJ1xyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICB3aWR0aCA6ICc0dncnLFxyXG4gICAgICBoZWlnaHQgOiAnNHZ3JyxcclxuICAgICAgcGFkZGluZyA6ICczdncnLFxyXG4gICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luQm90dG9tOicydmgnLFxyXG4gICAgICBtYXJnaW5Ub3AgOiAnMnZoJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6J2NvbnRhaW4nLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0aWNreUZvb3Rlcihwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge2xvY2F0aW9ufSA9IHByb3BzO1xyXG4gICAgY29uc29sZS5sb2coYGxvY2F0aW9uLnBhdGhuYW1lPyAke2xvY2F0aW9uLnBhdGhuYW1lfWApO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgPT09ICcvYm9hcmQnPyBudWxsIDogKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17XHJcbiAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJyA/IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kIDogYGxpbmVhci1ncmFkaWVudChibGFjaywgI2VlZWVlZSlgfSBcclxuICAgICAgICA6IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7bWFuYWdlbWVudEJhY2tncm91bmR9KWAsIGJhY2tncm91bmRTaXplIDogJ2F1dG8nLCB0cmFuc2Zvcm06IGBzY2FsZVkoLTEpYH19PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTW92ZSB0byBUb3BcIiBhcmlhLWxhYmVsPVwibW92ZS10by10b3BcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBlbnRlckRlbGF5PXszNTB9IGxlYXZlRGVsYXk9ezE1MH0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gc3R5bGU9e1xyXG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJz8gXHJcbiAgICAgICAgICB7YmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke3doaXRlQXJyb3d9KWB9XHJcbiAgICAgICAgICA6IFxyXG4gICAgICAgICAge2JhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCwgdHJhbnNmb3JtOmByb3RhdGUoMTgwZGVnKWB9fVxyXG4gICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9IG9uTW91c2VPdmVyPXsoZSk9PnRyYW5zaXRpb24oZSl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgICAgICAgPENvcHlyaWdodCBzdHlsZT17e2ZvbnRXZWlnaHQgOiAnYm9sZGVyJ319Lz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9IiwiaW1wb3J0IENhcm91c2VsIGZyb20gJ251a2EtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICB0ZXh0Q29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0JyxcclxuICAgICAgICBjb2xvciA6ICcjZmZmJyxcclxuICAgICAgICB0ZXh0U2hhZG93OicycHggMS41cHggMS41cHggZ3JheScsXHJcbiAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGltYWdlTGlzdCA9IHByb3BzLmxpc3QgPyBwcm9wcy5saXN0IDogW3t9XTtcclxuICAgIGNvbnN0IHtzZXRTdGVwcGVyLCBjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGhhbmRsZUFmdGVyU2xpZGUgPSAoc2xpZGVJbmRleCkgPT4ge1xyXG4gICAgICAgIHNldFN0ZXBwZXIoc2xpZGVJbmRleCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKHNsaWRlSW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgc2xpZGVJbmRleD17Y3VycmVudFNsaWRlfVxyXG4gICAgYWZ0ZXJTbGlkZT0ge2luZGV4ID0+IGhhbmRsZUFmdGVyU2xpZGUoaW5kZXgpfVxyXG4gICAgYXV0b3BsYXk9e2ZhbHNlfVxyXG4gICAgYXV0b3BsYXlJbnRlcnZhbD17MzAwMH1cclxuICAgIHRyYW5zaXRpb25Nb2RlPSdzY3JvbGwnXHJcbiAgICBzcGVlZD17ODAwfVxyXG4gICAgaGVpZ2h0TW9kZT0nbWF4J1xyXG4gICAgICAgID5cclxuICAgIHtcclxuICAgICAgICBpbWFnZUxpc3QubWFwKChpbWFnZSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AjJHtpbmRleH0gJHtpbWFnZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgaW5kZXg9PT0wPyBcclxuICAgICAgICAgICAgICAgICAgICAoPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRhaW5lcn0gc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBhbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRVUlDSyBTVEFSVCBHVUlERVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSB5b3VyIHdvcmsgZWFzaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHVybiB0aGUgc2xpZGUgb3ZlciBhbmQgY2hlY2suXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgY29uc2lzdHMgb2YgYSBmZXcgc2xpZGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQm94PilcclxuICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtpbWFnZS5zcmN9Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuSW1hZ2VDYXJvdXNlbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBzZXRTdGVwcGVyIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGN1cnJlbnRTbGlkZSA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHNldEN1cnJlbnRTbGlkZSA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3ggLCBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luOjAsXHJcbiAgICAgIHBhZGRpbmc6JzF2dycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9zc2xpbmUoe2NoaWxkcmVufSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy01MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MjAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBib3hTaGFkb3c9ezR9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JvdywgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3QgOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzM1dmgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0JyxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBjb2xvcjonI2VhZWFlYScsXHJcbiAgICAgICAgdGV4dFNoYWRvdzogJzFweCA1cHggNXB4ICM5ZTk5OTknXHJcbiAgICB9XHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVzY3JpcHRpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgKX0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnMTUwcHggMHB4J1xyXG4gICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDE1MDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH0gfSA6IHt9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIFNPTUUgVEVYVFxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU09NRSBURVhUXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+ICAgICAgXHJcbiAgICAgICAgPC9Hcm93PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb25cIjtcclxuaW1wb3J0IEludHJvZHVjdGlvbjIgZnJvbSBcIi4vSW50cm9kdWN0aW9uMlwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4nO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7aXNMb2FkaW5nfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgICAgICAgPE1haW4vPlxyXG4gICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbi8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uMi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSG9tZS5wcm9wVHlwZXMgPSB7XHJcbiAgaXNMb2FkaW5nIDogUHJvcFR5cGVzLmJvb2xcclxufSIsImltcG9ydCBlYXN5TG9naW4gZnJvbSBcIi4uL2ltYWdlcy9lYXN5LWxvZ2luLnBuZ1wiO1xyXG5pbXBvcnQgbGlua01hbmFnZW1lbnRQYWdlIGZyb20gXCIuLi9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nXCI7XHJcbmltcG9ydCBzdGFydFJpZ2h0QXdheSBmcm9tIFwiLi4vaW1hZ2VzL3N0YXJ0LXJpZ2h0LWF3YXkucG5nXCI7XHJcbmltcG9ydCBtYWtlSGVhZGVycyBmcm9tIFwiLi4vaW1hZ2VzL21ha2UtaGVhZGVycy5wbmdcIjtcclxuaW1wb3J0IGhhbmRsZVRhYmxlIGZyb20gXCIuLi9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZ1wiO1xyXG5pbXBvcnQgdXNlTXltZW51IGZyb20gXCIuLi9pbWFnZXMvbXltZW51LnBuZ1wiO1xyXG5pbXBvcnQgc2xpZGUwIGZyb20gXCIuLi9pbWFnZXMvc2xpZGUwLnBuZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdRdWljayBzdGFydCBndWlkZScsXHJcbiAgICAgICAgc3JjIDogYCR7c2xpZGUwfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnR1VJREUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1NpZ24gaW4gd2l0aCBHb29nbGUnLFxyXG4gICAgICAgIHNyYyA6IGAke2Vhc3lMb2dpbn1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ1NpZ24gaW4gd2l0aCBnb29nbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ01vdmUgb24gdG8gbWFuYWdlbWVudCBwYWdlJyxcclxuICAgICAgICBzcmMgOiBgJHtsaW5rTWFuYWdlbWVudFBhZ2V9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdNb3ZlIG9uIHRvIG1hbmFnZW1lbnQgcGFnZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnQ2xpY2sgdGhlIGJsdWUgYnV0dG9uJyxcclxuICAgICAgICBzcmMgOiBgJHtzdGFydFJpZ2h0QXdheX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ2NsaWNrIFwiZ2V0IHN0YXJ0ZWQgcmlnaHQgYXdheVwiIGJ1dHRvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnTWFrZSBIZWFkZXJzJyxcclxuICAgICAgICBzcmMgOiBgJHttYWtlSGVhZGVyc31gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ21ha2UgaGVhZGVycycsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ0NyZWF0ZSwgRWRpdCwgUmVtb3ZlIHRhYmxlIHJlY29yZHMnLFxyXG4gICAgICAgIHNyYyA6IGAke2hhbmRsZVRhYmxlfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnaGFuZGxlIHRhYmxlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdVc2UgbXltZW51IHRvIGhhbmRsZSBkYXRhJyxcclxuICAgICAgICBzcmMgOiBgJHt1c2VNeW1lbnV9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICd1c2UgbXltZW51JyxcclxuICAgIH0sXHJcbl07IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyb3cgLCBCb3gsIFBhcGVyLEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcclxuaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuL0ltYWdlU2xpZGVTb3VyY2VzJztcclxuaW1wb3J0IExpc3RDcm91c2VsRGVzY3JpcHRpb24gZnJvbSAnLi9MaXN0Q2Fyb3VzZWxEZXNjcmlwdGlvbic7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy93aGl0ZWJhY2tncm91bmQuanBnJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgOiAnY292ZXInLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIG1pbldpZHRoOiA3NTAsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAwcHgnLFxyXG4gICAgICAgIHdpZHRoIDogJzcwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc2NXZoJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIHRleHRQYXBlciA6IHtcclxuICAgICAgICBtaW5XaWR0aCA6IDM1MCxcclxuICAgICAgICB3aWR0aCA6ICc3MHZ3JyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzdGVwcGVyLCBzZXRTdGVwcGVyXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgY3VycmVudFNsaWRlIDogJHtjdXJyZW50U2xpZGV9YClcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjozMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9IFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgey8qIGltYWdlIGNhcm91c2VsICovfVxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VDYXJvdXNlbCBcclxuICAgICAgICAgICAgICAgICAgbGlzdD17aW1hZ2VMaXN0fSBcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlPXtjdXJyZW50U2xpZGV9IFxyXG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U2xpZGU9e3NldEN1cnJlbnRTbGlkZX0gXHJcbiAgICAgICAgICAgICAgICAgIHNldFN0ZXBwZXI9e3NldFN0ZXBwZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDIwMDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH19IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBsaXN0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Q3JvdXNlbERlc2NyaXB0aW9uIHN0ZXBwZXI9e3N0ZXBwZXJ9ID48L0xpc3RDcm91c2VsRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IFBhcGVyLCBCb3gsIEdyb3csIEF2YXRhciwgVHlwb2dyYXBoeSxGYWRlICwgU2xpZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgbW9vbkltYWdlIGZyb20gJy4uL2ltYWdlcy9tb29uLnBuZyc7XHJcbmltcG9ydCBDcm9zc2xpbmUgZnJvbSAnLi9Dcm9zc2xpbmUnO1xyXG5pbXBvcnQgUHJvamVjdERlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvYmxhY2sucG5nJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcidcclxuICAgIH0sXHJcbiAgICBsb2dvQm94IDoge1xyXG4gICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93J1xyXG4gICAgfSxcclxuICAgIGJpZ0F2YXRhciA6IHtcclxuICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICB9LFxyXG4gICAgdGV4dFdpdGhTaGFkb3cgOiB7XHJcbiAgICAgIGNvbG9yOicjZmZmJyxcclxuICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICBtYXJnaW5MZWZ0OicydncnLFxyXG4gICAgICB0ZXh0U2hhZG93OiAnMXB4IDVweCA1cHggIzllOTk5OSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbkJveCA6IHtcclxuICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXhXaWR0aCA6ICc1MHZ3JyxcclxuICAgICAgbWFyZ2luIDogJzAgMCAwIDN2dydcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjoyMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICA8Q3Jvc3NsaW5lPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQm94fT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2dyb3d9IHsuLi4oZ3Jvdz8ge3RpbWVvdXQ6e2VudGVyOjUwMDAsIGV4aXQ6ODAwfX0gOiB7fSl9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PSdoZWxwJyBzcmM9e21vb25JbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0F2YXRhcn0vPlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYnV0dG9uJyBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFdpdGhTaGFkb3d9PiBNYW5hZ2VtZW50IEFwcCA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbkJveH0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5BbiBhcHBsaWNhdGlvbiB0aGF0IHlvdSBjYW4gZWFzaWx5IGNyZWF0ZSAmIGRlc2lnbiB5b3VyIG93biBkYXRhLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPkdldCBzdGFydGVkIHdpdGggeW91ciBHb29nbGUgYWNjb3VudCE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5UaGlzIGFwcCB3aWxsIG5vdCBrZWVwIGFueSBwZXJzb25hbCBpbmZvcm1hdGlvbi48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ3Jvc3NsaW5lPlxyXG4gICAgICAgICAgPFByb2plY3REZXNjcmlwdGlvbi8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7VHlwb2dyYXBoeSAsIFN0ZXBwZXIsIFN0ZXAsIEJveCwgU3RlcExhYmVsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzbGlkZVNvdXJjZSBmcm9tICcuL0ltYWdlU2xpZGVTb3VyY2VzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcidcclxuICAgIH0sXHJcbiAgICBpbmxpbmU6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uTGlzdCAoe3N0ZXBwZXJ9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8U3RlcHBlciBhY3RpdmVTdGVwPXtzdGVwcGVyfSBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonaW5oZXJpdCd9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVNvdXJjZS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwIGNvbXBsZXRlZD17aW5kZXggPCBzdGVwcGVyfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cclxuICAgICAgICAgICAgICAgICAgICApfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TdGVwcGVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5EZXNjcmlwdGlvbkxpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcHBlciA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdGFydEJ1dHRvbiBmcm9tIFwiLi9TdGFydEJ1dHRvblwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2Rlc2suanBnXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICByb290TWFyZ2luIDogJy0zNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudCA/ICdXRUxDT01FJyA6ICdSZWFkeSB0byBzdGFydD8nfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50PyBudWxsIDogKDxTdGFydEJ1dHRvbi8+KX1cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7QnV0dG9uICwgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFBsYXlBcnJvd1NoYXJwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICcwLjV2aCdcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcycHggMXB4IDFweCBncmF5JyxcclxuICAgICAgICBjb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9tYW5hZ2VtZW50JyBzdHlsZT17e3RleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFBsYXlBcnJvd1NoYXJwIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRTaXplIDogMzB9fS8+fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFycm93LmQwODMyOGY2MmQxOWI2NmY4ZWE4ZDZkMDA2NzI0YzhiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJibGFjay4zZjAyYTEzMjczODcwMDIyNmM4NGVkMWY1ODYzZDU5YS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGVzay4zMjA3YzFlZjk0Yzg2N2Y4MGIwZTlkZjZhYzc4ZDUyYi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWFzeS1sb2dpbi4zZTkxYjhkODg3MzU2ODkwNzlhZmQwNzZlM2UwNzQyMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaGFuZGxlLXRhYmxlLjNjNTg2OTE0YTk2ZDRhZmVkZGM1YzdhZDNkN2RmMzU0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsaW5rLW1hbmFnZW1lbnQtcGFnZS40ODAwNGQxMzNiNWZjMjI1Nzc3MDRjOTVlYjM1ZjNkOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFrZS1oZWFkZXJzLmNmZmFjNjM0ZjI5ZDM4ZGRiZDFmNDQ2N2E1NzNlYmM0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYW5hZ2VtZW50LWJhY2tncm91bmQuYTAwOGRlODEzOTU4MWIwZGFiZjE4MzJlZDFjOWM0NmUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1vb24uZjIwNmJjM2Q1YmU4MzExYzc3ZDk4OTdkYTQ0ZTFmNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm15bWVudS45ZmRkNThhY2E3NGViNDhkOTU1ZjgzNWM5ZWM4Nzk2ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2xpZGUwLjBhYTI5NWEzYjdiNGQzMDEzMjg2ZjUyNGM0NzY0Y2Q3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGFydC1yaWdodC1hd2F5LjRlMjE3MjYyZDJjOGQ4NmQ1ZTBmNmVlNDMyYWVmYmNmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ3aGl0ZS1hcnJvdy5jNDQyMmE3YmM1ZWUyM2QwODFiMzU2NmY5M2U5MWYxZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2hpdGViYWNrZ3JvdW5kLmZiMTQwZjVlODEwZGMyMTQ2ZGFkMWI2ZjAzY2FmOWM4LmpwZ1wiOyIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICAoPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8QXBwLz5cclxuICAgIDwvQ29va2llc1Byb3ZpZGVyPilcclxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmFkZSwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoMSlcclxuICAgIH0sXHJcbiAgICBidXR0b25Db250YWluZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcwLjVweCAwLjVweCAxcHggIzAwMDAwMDVjJyxcclxuICAgICAgICBtYXJnaW4gOiAnMCAxdncgMS43dmgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzZhNzQ4YycsXHJcbiAgICB9LFxyXG59KSk7XHJcbmNvbnN0IGRlZmF1bHREYXRhID0ge1xyXG4gICAgY29sdW1ucyA6IFtcclxuICAgICAgeyB0aXRsZTogJ05hbWUnLCBmaWVsZDogJ05hbWUnICwgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7IHRpdGxlOiAnU3VybmFtZScsIGZpZWxkOiAnU3VybmFtZScgfSxcclxuICAgICAgeyB0aXRsZTogJ0JpcnRoIFllYXInLCBmaWVsZDogJ0JpcnRoIFllYXInIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdQaG9uZScgLCBmaWVsZDonUGhvbmUnLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dlbmRlcicsXHJcbiAgICAgICAgZmllbGQ6ICdHZW5kZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHRpdGxlOiAnTWVtbycgLCBmaWVsZDonTWVtbyd9XHJcbiAgICBdLFxyXG4gICAgZGF0YSA6IFtcclxuICAgICAgeyBcIk5hbWVcIjogJ01laG1ldCcsICdTdXJuYW1lJzogJ0JhcmFuJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODMsIFwiUGhvbmVcIjonMDEwNDY1MDk5OTUnICxcIkdlbmRlclwiOiAxICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnQWRhbScsICdTdXJuYW1lJzogJ0FkYW0nLCBcIkJpcnRoIFllYXJcIjogMTk4NCwgXCJQaG9uZVwiOicwMTA0NjUwOTc5NScgLFwiR2VuZGVyXCI6IDIgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdNZWhtZXQnLCAnU3VybmFtZSc6ICdBdG9tJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODUsIFwiUGhvbmVcIjonMDEwNDY1MDk2OTUnICxcIkdlbmRlclwiOiAxICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnbXVsJywgJ1N1cm5hbWUnOiAnS29uZ25hJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODYsIFwiUGhvbmVcIjonMDEwNDY1MDkxOTUnICxcIkdlbmRlclwiOiAxICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnSmFjaycsICdTdXJuYW1lJzogJ0phY2snLCBcIkJpcnRoIFllYXJcIjogMTk4NywgXCJQaG9uZVwiOicwMTA0NjUwOTI5NScgLFwiR2VuZGVyXCI6IDIgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdCb2InLCAnU3VybmFtZSc6ICdCb2InLCBcIkJpcnRoIFllYXJcIjogMTk4OCwgXCJQaG9uZVwiOicwMTA0NjUwOTM5NScgLFwiR2VuZGVyXCI6IDIgLCBcIk1lbW9cIjonJ30sXHJcbiAgICBdXHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZhdWx0UGFnZSAoe3N0YXRlICwgc2V0U3RhdGUsIG1hdGNofSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZhZGUyLCBzZXRGYWRlMl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkRFTU9DbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUgLCBjb2x1bW5zIDogZGVmYXVsdERhdGEuY29sdW1ucyAsIGRhdGEgOiBkZWZhdWx0RGF0YS5kYXRhLCBkZWZhdWx0UGFnZSA6ICFzdGF0ZS5kZWZhdWx0UGFnZX0pO1xyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0RmFkZSh0cnVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNldEZhZGUyKHRydWUpICwgMTUwMCk7XHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXIgOiA4MDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbml0aWFsJyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAgTWFuYWdlbWVudCBUYWJsZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgZ3V0dGVyQm90dG9tIHN0eWxlPXt7dGV4dFNoYWRvdzonMnB4IDJweCAxcHggYmxhY2snfX0+IFxyXG4gICAgICAgICAgICAgICAgWW91IG1heSB0cnkgdGhlIERFTU8gaWYgdGhpcyB5b3VyIGZpcnN0IHRpbWUsIFxyXG4gICAgICAgICAgICAgICAgb3IgZ2V0IHN0YXJ0ZWQgcmlnaHQgYXdheSFcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8RmFkZSBpbj17ZmFkZTJ9IHRpbWVvdXQ9e3tlbnRlciA6IDMwMDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25ERU1PQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVNFIERFTU8gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURUQgUklHSFQgQVdBWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59XHJcblxyXG5EZWZhdWx0UGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGF0ZSA6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgZGVmYXVsdFBhZ2UgOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGhhc1RhYmxlIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgICAgICBjb2x1bW5zIDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIGRhdGEgOiBQcm9wVHlwZXMuYXJyYXlcclxuICAgIH0pLFxyXG4gICAgc2V0U3RhdGUgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcbiIsImltcG9ydCB7IFxyXG4gICAgQm94ICxQYXBlciwgbWFrZVN0eWxlcywgRmFkZSwgVGV4dEZpZWxkLCBUb29sdGlwLCBUeXBvZ3JhcGh5LCBDaGVja2JveFxyXG59XHJcbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnXCI7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9pbWFnZXMvYXJyb3cucG5nJztcclxuaW1wb3J0IHsgc2F2ZUhlYWRlcnMgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gJy4uL3V0aWwvTWFuYWdlbWVudEFQSSc7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4uL2N1c3RvbUhvb2svU25hY2tCYXInO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBjb250YWluZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEyMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzEwdmgnLFxyXG4gICAgfSxcclxuICAgIGZvcm1Sb290IDoge1xyXG4gICAgICAgICcmID4gKic6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAnMC41dmggMXZ3JyxcclxuICAgICAgICAgICAgd2lkdGg6ICc2MGNoJyxcclxuICAgICAgICAgICAgbWluV2lkdGggOiAnNDBjaCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXJyb3cgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwdmgnLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmQgOiBgbm8tcmVwZWF0IGNlbnRlci84MCUgdXJsKCR7YXJyb3d9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgOiAnY29udGFpbicsXHJcbiAgICAgICAgbWFyZ2luTGVmdCA6ICczdncnLFxyXG4gICAgICAgIHRyYW5zZm9ybSA6ICdyb3RhdGUoOTBkZWcpJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uIDoge1xyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBkZWZhdWx0SGVhZGVyID0ge1xyXG4gICAgXCJoZWFkZXIwXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyMVwiIDogJycsXHJcbiAgICBcImhlYWRlcjJcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIzXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNFwiIDogJycsXHJcbiAgICBcImhlYWRlcjVcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI2XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyN1wiIDogJycsXHJcbiAgICBcImhlYWRlcjhcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI5XCIgOiAnJyxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJzICh7aXNMb2FkaW5nfSkge1xyXG4gICAgLy8gc3R5bGUsIGNvb2tpZVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IFJlYWN0LnVzZUNvbnRleHQoUHJvZ3Jlc3NDb250ZXh0KTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJ10pO1xyXG4gICAgLy8gc3RhdGVzXHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgICBjb25zdCBbcmVzdWx0U25hY2sgLCBzZXRSZXN1bHRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZSwgY29udGVudCA6ICcnfSk7XHJcbiAgICBjb25zdCBbZGF0YSAsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGhlYWRlcnMgOiBkZWZhdWx0SGVhZGVyLFxyXG4gICAgICAgIGdyb3VwaW5ncyA6IEFycmF5KDEwKS5maWxsKGZhbHNlKSxcclxuICAgIH0pXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGRhdGFSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgICAgZ2V0TWFuYWdlbWVudFRhYmxlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSA6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5nTGVuZ3RoID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncy5sZW5ndGggOiAwIDogMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IHJlc3BvbnNlLmRhdGE/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzID8gWy4uLnJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzXSA6IFtdIDogW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIC0gZ3JvdXBpbmdMZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cGluZ3MucHVzaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzID8gcmVzcG9uc2UuZGF0YS5oZWFkZXJzIDoge30gOiB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnNMZW5ndGggPSBPYmplY3QudmFsdWVzKGhlYWRlcnMpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBoZWFkZXJzTGVuZ3RoOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbYGhlYWRlciR7aX1gXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge2hlYWRlcnMsZ3JvdXBpbmdzfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtoZWFkZXJzLCBncm91cGluZ3N9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7ICAvLyB1bmF1dGhvcml6ZWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAzNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3BlbiA6IHRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQgOiBgUGxlYXNlIGxvZyBpbiBhZ2Fpbi5gfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBlcnJvciAoY29kZSA6ICR7cmVzcG9uc2Uuc3RhdHVzfSlgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCgpLCAzNTAwKTtcclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICApXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5oZWFkZXJzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyb3VwaW5ncyA6IFtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuZ3JvdXBpbmdzXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxbZGF0YS5oZWFkZXJzLCBkYXRhLmdyb3VwaW5nc10pO1xyXG5cclxuICAgIC8vIGVmZmVjdHNcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+eyBcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVN1Ym1pdChkYXRhUmVmLmN1cnJlbnQuaGVhZGVycywgZGF0YVJlZi5jdXJyZW50Lmdyb3VwaW5ncywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGhhbmRsZVByb2dyZXNzKHJlc3VsdCA9PT0gJ2Vycm9yJyA/ICdlcnJvcicgOiAnc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyBldmVudHNcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoaGVhZGVycywgZ3JvdXBpbmdzLCBpc0F1dG9TYXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKGhlYWRlcnMpLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPD0gMTUpKSB7IC8vIDE16riA7J6QIOydtOyDgSDsoJztlZwg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGhlYWRlcnMpLmZpbHRlcih2PT52KS5sZW5ndGggPT09IDApIHsgICAgIC8vIOu5hOyWtOyeiOydhCDqsr3smrAg7JeQ65+s66mU7IS47KeAXHJcbiAgICAgICAgICAgIHNldFNuYWNrKHtvcGVuOnRydWV9KVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZUhlYWRlcnMoaGVhZGVycyxncm91cGluZ3MpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzQXV0b1NhdmUpIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSwgY29udGVudCA6IHJlc3BvbnNlLnJlc3VsdH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDIwMDApO1xyXG4gICAgICAgICAgICBzZXRSZXN1bHRTbmFjayh7b3Blbjp0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50OidQbGVhc2UgbG9nIGluIGFnYWluLid9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBbYGhlYWRlciR7aW5kZXh9YF0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUdyb3VwaW5ncyA9IChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgZ3JvdXBpbmdzIDogZGF0YS5ncm91cGluZ3MubWFwKCh2LGkpPT4gaT09PWluZGV4PyBlLnRhcmdldC5jaGVja2VkIDogdil9KTtcclxuICAgIH1cclxuICAgIC8vIGNvbXBvbmVudFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXIgOiAxNTAwfX0+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17NH0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVJvb3R9IGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nZGl2Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGNvbG9yPSd0ZXh0UHJpbWFyeScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIEVkaXQgRm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbG9yPXtPYmplY3QudmFsdWVzKGRhdGEuaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkgPyAnYmx1ZScgOiAncmVkJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29sb3I9J2luaXRpYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlciBzaG91bGQgYmUgbGVzcyB0aGFuIDE1IGxldHRlcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5oZWFkZXJzKS5tYXAoKGhlYWRlcixpbmRleCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2luZGV4PT09MD8gdHJ1ZTpmYWxzZX1cclxuICAgICAgICAgICAgICAgIGlkPXtgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtgaGVhZGVyLSR7aW5kZXgrMX1gfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaGVhZGVyc1tgaGVhZGVyJHtpbmRleH1gXX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlSW5wdXRDaGFuZ2UoZSxpbmRleCl9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17ZGF0YS5oZWFkZXJzW2BoZWFkZXIke2luZGV4fWBdLmxlbmd0aCA+IDE1ID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiXHJcbllvdSBjYW4gYXJyYW5nZSB0aGUgZGF0YSB3aXRoIGEgdmFsaWQgaGVhZGVyLCBcclxuVW5pcXVlIHZhbHVlcyBhcmUgbm90IGNvbW1vbmx5IHVzZWQgZm9yIHRoaXMgZnVuY3Rpb24gaW4gZ2VuZXJhbC5cclxuZS5nLikgbmFtZSwgYWRkcmVzcywgbW9iaWxlIE5PLiBldGMuXHJcblwiXHJcbiAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdyaWdodCcgZW50ZXJEZWxheT17MjAwfSBsZWF2ZURlbGF5PXsyMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkYXRhLmdyb3VwaW5nc1tpbmRleF19IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUdyb3VwaW5ncyhlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmRleD09PTA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PiBHcm91cGluZyE/PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiU1VCTUlUXCIgYXJpYS1sYWJlbD0nc3VibWl0JyBwbGFjZW1lbnQ9J3RvcCcgZW50ZXJEZWxheT17MjAwfSBsZWF2ZURlbGF5PXs0MDB9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gb25Nb3VzZU92ZXI9eyhlKT0+ZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInfVxyXG4gICAgICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZVN1Ym1pdChkYXRhLmhlYWRlcnMgLCBkYXRhLmdyb3VwaW5ncyl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtgSGVhZGVyIHNob3VsZCBiZSBsZXNzIHRoYW4gMTUgbGV0dGVycyA6KGB9IHN0YXR1cz1cImVycm9yXCIvPlxyXG4gICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtyZXN1bHRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0UmVzdWx0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgY29udGVudD17cmVzdWx0U25hY2suY29udGVudH0gc3RhdHVzPXtyZXN1bHRTbmFjay5zdGF0dXM9PT0nZXJyb3InPyAnZXJyb3InIDogJ3N1Y2Nlc3MnfS8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuSGVhZGVycy5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBQcm9wVHlwZXMuYm9vbFxyXG59IiwiaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSc7XHJcbmltcG9ydCBNYW51YWxEaWFsb2cgZnJvbSBcIi4vTWFudWFsRGlhbG9nXCI7XHJcbmltcG9ydCB7IG9wdGlvbnMsbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vVGFibGVPcHRpb25zXCI7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IERlZmF1bHRQYWdlIGZyb20gJy4vRGVmYXVsdFBhZ2UnO1xyXG5pbXBvcnQgcGFyc2VEYXRhIGZyb20gJy4uL3V0aWwvcGFyc2VEYXRhJztcclxuaW1wb3J0IFNhdmVCdXR0b24gZnJvbSAnLi9TYXZlQnV0dG9uJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4vLyB1c2VFZmZlY3TroZwgZGF0YSwgY29sdW1ucyDqsIAg67OA6rK965CgIOuVjOuniOuLpCDshJzrsoTsl5Ag7KCA7J6lIO2bhCDqsLHsi6BcclxuLy8gLi91dGlsIOqyveuhnOyXkCDroZzsp4Eg7J6R7ISxXHJcbi8vIO2GteyLoOyXkCDrjIDtlZwgdGVzdGNvZGXsnpHshLFcclxuLy8gY29sdW1uc+yZgCBkYXRh7J2YIOqwgSDqsJLrk6Tsl5Ag64yA7ZWcIOustOqysOyEsSDssrTtgaxcclxuLy8gcHJvcHNUeXBlIOyekeyEsVxyXG4vLyBTaWRlTWVudUxpc3QgPT4gTG9naW7snLzroZwg67OA6rK9LCDruYTroZzqt7jsnbgg7IucIExPR0lO7Jy866GcIOuztOydvCDqsoMsIOuhnOq3uOyduOyLnCBNWSBNRU5V66GcIOuztOq4sFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnRUYWJsZSh7aXNMb2FkaW5nfSkge1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IFJlYWN0LnVzZUNvbnRleHQoUHJvZ3Jlc3NDb250ZXh0KTtcclxuICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZSddKTtcclxuICAvLyBzdGF0ZXNcclxuICBjb25zdCBbc25hY2ssIHNldFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KTtcclxuICBjb25zdCBbc2F2ZWRTbmFjayAsIHNldFNhdmVkU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICBjb25zdCBbZXJyb3JTbmFjayAsIHNldEVycm9yU25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICBjb25zdCBbZGlhbG9nLCBzZXREaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoeyAgLy8g7LWc7LSIIEFQSeuhnCDrsJvslYTsmKTripQg64+Z7J6R7ZWE7JqUXHJcbiAgICBkZWZhdWx0UGFnZSA6IHRydWUsXHJcbiAgICBoYXNUYWJsZSA6IGZhbHNlLFxyXG4gICAgY29sdW1uczogW10sXHJcbiAgICBkYXRhOiBbXSxcclxuICB9KTtcclxuICBjb25zdCB0YWJsZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgICAgZ2V0TWFuYWdlbWVudFRhYmxlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1cyA6ICR7cmVzcG9uc2Uuc3RhdHVzfSAsIGRhdGEgOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpfWApO1xyXG4gICAgICAgICAgLy8g7Jyg7KCAIO2ZleyduOuQkOqzoCDthYzsnbTruJTrj4Qg67mE7Ja07J6I7KeAIOyViuydhCDqsr3smrBcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXM9PT0yMDAgJiYgcmVzcG9uc2UuZGF0YS5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntzZXRTbmFjayh7b3Blbjp0cnVlfSl9LDQwMCk7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBjb2x1bW5zIDogcGFyc2VEYXRhKHJlc3BvbnNlLmRhdGEuaGVhZGVycyAsIHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzKSxcclxuICAgICAgICAgICAgICBkYXRhIDogcmVzcG9uc2UuZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRQYWdlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgaGFzVGFibGUgOiB0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRFcnJvclNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGV2ZW50c1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge3NldERpYWxvZyh7b3BlbiA6IGZhbHNlfSk7fTtcclxuICBjb25zdCBoYW5kbGVPblNhdmUgPSAoaXNBdXRvU2F2ZSkgPT4ge1xyXG4gICAgICAvLyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIOydmCByZWbsl5DshJwg7Iug66Kw64+E7J6I64qUIOuNsOydtO2EsCDssLjsobBcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICBjb25zdCBncm91cGluZ3MgPSBbXTtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgb2JqW2BoZWFkZXIke2l9YF0gPSB2LnRpdGxlO1xyXG4gICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgIH0se30pXHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuZGF0YS5mb3JFYWNoKCh2LGkpPT57XHJcbiAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNhdmVEYXRhKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBpZihlcnIpIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYoIWlzQXV0b1NhdmUpIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gIH1cclxuICBcclxuICAvLyBlZmZlY3RzXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHsgICAvLyB3aW5kb3cg642U67iU7YG066atIOydtOuypO2KuCDstpTqsIAsIOuPhOybgOunkCBvcGVuXHJcbiAgICBjb25zdCBvbmRiQ2xpY2sgPSAoKSA9PiBzZXREaWFsb2coe29wZW4gOiAhZGlhbG9nLm9wZW59KTtcclxuICAgIGNvbnN0IG9uS2V5ZG93biA9IChlKSA9PiB7ICAgLy8gY3RybCArIHProZwg7KCA7J6lIGV2ZW50XHJcbiAgICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0ubWF0Y2goXCJNYWNcIikgPyBlLm1ldGFLZXkgOiBlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSA4Mykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoYW5kbGVPblNhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XHJcbiAgICAgIC8vIOy0iOq4sOygkeq3vOydmCDqsr3smrAg642w7J207YSw6rCAIOyXhuyWtCDsl5Drn6wg67Cc7IOd7ZWgIOyImCDsnojslrQg7IK87ZWt7Iud7Jy866GcIO2MkOuLqCDtm4Qg7Ja466eI7Jq07Yq47Iuc7J2YIGZldGNoQVBJ7Iuk7ZaJXHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyID8gaGFuZGxlT25TYXZlKHRydWUpIDogbnVsbCA6IG51bGw7XHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyID8gaGFuZGxlUHJvZ3Jlc3MoJ3N1Y2Nlc3MnKSA6IG51bGwgOiBudWxsO1xyXG4gIH07XHJcbn0sIFtdKTtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuICBjb25zdCBNYXJnaW4gPSAoKSA9PiAoPEJveCBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0+PC9Cb3g+KTsgIC8vIOyXrOuwsVxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAge1xyXG4gICAgc3RhdGUuZGVmYXVsdFBhZ2UgP1xyXG4gICAgICAoPERlZmF1bHRQYWdlIHN0YXRlPXtzdGF0ZX0gc2V0U3RhdGU9e3NldFN0YXRlfS8+KVxyXG4gICAgOiBcclxuICAgICg8Qm94PlxyXG4gICAgICAgIDxNYW51YWxEaWFsb2cgb3Blbj17ZGlhbG9nLm9wZW59IG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfS8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxNYXRlcmlhbFRhYmxlXHJcbiAgICAgIHRhYmxlUmVmPXt0YWJsZVJlZn1cclxuICAgICAgdGl0bGU9e1xyXG4gICAgICA8U2F2ZUJ1dHRvbiBzZXRTYXZlZFNuYWNrPXtzZXRTYXZlZFNuYWNrfSBcclxuICAgICAgLy8g66eI7Jq07Yq4IOydtO2bhOyXkCDsoJHqt7ztlYTsmpRcclxuICAgICAgZGF0YU1hbmFnZXI9e3RhYmxlUmVmLmN1cnJlbnQgPyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIDoge319Lz5cclxuICAgIH1cclxuICAgICAgY29sdW1ucz17c3RhdGUuY29sdW1uc31cclxuICAgICAgZGF0YT17c3RhdGUuZGF0YX1cclxuICAgICAgbG9jYWxpemF0aW9uPXtsb2NhbGl6YXRpb259IC8vIOuhnOy7rOudvOydtOymiFxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfSAvLyDrgrTrs7TrgrTquLAsIOq3uOujqO2VkVxyXG4gICAgICBhY3Rpb25zPXtbLy8g66mA7YuwIOyFgOugieyFmCDsnpHsl4VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvb2x0aXAgOiAnUmVtb3ZlIHRoZSBTZWxlY3RlZCByb3cocyknLFxyXG4gICAgICAgICAgICBpY29uIDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgIG9uQ2xpY2sgOiAoZSAsIGRlbGV0aW9ucykgPT4geyAgLy8g7ISg7YOd7ZWcIOyytO2BrOuwleyKpOyXkCDrjIDtlbQg66qo65GQIOyCreygnCDsp4TtlolcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4uc3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkZWxldGlvbnMuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoZGF0YS5pbmRleE9mKHYpLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldkRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2RGF0YSAsIGRhdGF9O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF19IFxyXG4gICAgICBlZGl0YWJsZT17e1xyXG4gICAgICAgIG9uUm93QWRkOiAobmV3RGF0YSkgPT4gIC8vIOy2lOqwgFxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBvblJvd1VwZGF0ZTogKG5ld0RhdGEsIG9sZERhdGEpID0+ICAvLyDsiJjsoJVcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvbGREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhW2RhdGEuaW5kZXhPZihvbGREYXRhKV0gPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGRhdGEgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8TWFyZ2luLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSduZWVkIHNvbWUgaGVscD8gPyBkb3VibGUtY2xpY2sgYW55IHNwYWNlICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c2F2ZWRTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0U2F2ZWRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J1NBVkVEICEnIHN0YXR1cz1cInN1Y2Nlc3NcIi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17ZXJyb3JTbmFjay5vcGVufSBvbkNsb3NlPXsoKT0+c2V0RXJyb3JTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J0VSUk9SICEnIHN0YXR1cz1cImVycm9yXCIvPlxyXG4gICAgPC9Cb3g+XHJcbiAgICApfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5NYW5hZ2VtZW50VGFibGUucHJvcFR5cGVzID0ge1xyXG4gIGlzTG9hZGluZyA6IFByb3BUeXBlcy5ib29sXHJcbn0iLCJcclxuaW1wb3J0IHtEaWFsb2csXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIExpc3QsXHJcbiAgICBMaXN0SXRlbSxcclxuICAgIExpc3RJdGVtVGV4dCxcclxuICAgIEJveCxcclxuICAgIG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgICBpY29uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzN2dydcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFudWFsRGlhbG9nIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7b3Blbiwgb25DbG9zZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGljb25zID0gW1xyXG4gICAgICAgIHtpY29uIDogJ2FkZF9ib3gnICwgZGVzY3JpcHRpb24gOiAnW0FkZF0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnW0VkaXRdIHJlY29yZHMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2VhcmNoJyAsIGRlc2NyaXB0aW9uIDogJ1R5cGUgZG93biB3b3JkcyB0byBbc2VhcmNoXS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzYXZlX2FsdCcgLCBkZXNjcmlwdGlvbiA6ICdbRG93bmxvYWRdIGZpbGVzIGluIENWUyBmb3JtYXQuJ30sXHJcbiAgICAgICAge2ljb24gOiAndmlld193ZWVrJyAsIGRlc2NyaXB0aW9uIDogJ1tTZWxlY3RdIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW2RlbGV0ZV0gcm93cy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdjaGVja19ib3gnICwgZGVzY3JpcHRpb24gOiAnIOKRoCBTZWxlY3QgdGhlIGNoZWNrYm94IG9uIHRoZSByb3cuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZmFjdF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENoZWNrIHRoZSBudW1iZXIgb2YgdGhlIHJvd3Mgc2VsZWN0ZWQuJ30sXHJcbiAgICAgICAge2ljb24gOiAnZGVsZXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaIgQ2xpY2sgdGhlIEJpbiBpY29uIG9uIHRoZSByaWdodCBhYm92ZS4nfSxcclxuICAgICAgICB7aWNvbiA6ICdwbGF5bGlzdF9hZGRfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBbRWRpdF0gaGVhZGVycy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdtZW51JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgT3BlbiBNWVBBR0UnfSxcclxuICAgICAgICB7aWNvbiA6ICdjcmVhdGUnICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDbGljayB0aGUgUGVuY2lsIGljb24nfSxcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPERpYWxvZyBvbkNsb3NlPXtvbkNsb3NlfSBvcGVuPXtvcGVufT5cclxuICAgICAgICA8RGlhbG9nVGl0bGU+IEJBU0lDIE1BTlVBTCA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpY29ucy5tYXAoKGljb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtgJHtpY29ufSArICR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nc3BhbicgY2xhc3NOYW1lPXtgbWF0ZXJpYWwtaWNvbnMgJHtjbGFzc2VzLmljb259YH0gc3R5bGU9e3t3aWR0aDonM3Z3J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpY29uLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICAgKVxyXG59XHJcbk1hbnVhbERpYWxvZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGVuIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2UgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIFRvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmVCdXR0b24gKHtzZXRTYXZlZFNuYWNrICwgZGF0YU1hbmFnZXJ9KSB7XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrICgpIHtcclxuICAgICAgICAgIC8vIFNBVkUgRVZFTlQgdXRpbCA+IE1hbmFnZW1lbnRBUEkuc2F2ZURhdGEg66eM65Ok7Ja07IScIOy9nO2VmOq4sFxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICB9LHt9KTtcclxuICAgICAgICAgIGRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgIHJlc3VsdCA6IFxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShkYXRhKX1cclxuICAgICAgICAgICR7Z3JvdXBpbmdzfVxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgICAgICBgKVxyXG4gICAgICAgIHNhdmVEYXRhKGhlYWRlcnMsZ3JvdXBpbmdzLGRhdGEpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8VG9vbHRpcCB0aXRsZT0nQ2xpY2sgdG8gU0FWRSAoIEN0cmwgKyBTICknPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBcclxuICAgICAgICBvbkNsaWNrPXsoKT0+b25DbGljaygpfT5cclxuICAgICAgICAgIFNBVkVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKVxyXG59XHJcblxyXG5TYXZlQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBzZXRTYXZlZFNuYWNrIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBkYXRhTWFuYWdlciA6IFByb3BUeXBlcy5vYmplY3RcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7QWRkQm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG4vLyBEQVRBIFRBQkxFIE9QVElPTlNcclxuXHJcbiBleHBvcnQgY29uc3Qgb3B0aW9ucz0ge1xyXG4gICAgZXhwb3J0QnV0dG9uOiB0cnVlLFxyXG4gICAgZ3JvdXBpbmc6dHJ1ZSxcclxuICAgIHNlbGVjdGlvbjp0cnVlLFxyXG4gICAgaGVhZGVyU3R5bGU6eyBcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnNDb2x1bW5JbmRleDotMSwgIC8vIOyVoeyFmCDslYTsnbTsvZjsnITsuZhcclxuICAgIGNvbHVtbnNCdXR0b24gOiB0cnVlLCBcclxuICAgIGRlYm91bmNlSW50ZXJ2YWwgOiAxNjAsIC8vIOuhnOuUqeyLnOqwhFxyXG4gICAgcGFnZVNpemUgOiAxNSwgICAgICAgICAgLy8g7Y6Y7J207KeA7IKs7J207KaIXHJcbiAgICBwYWdlU2l6ZU9wdGlvbnMgOiBbNSwgMTUsIDMwLCA1MCwgMTAwXSwgLy8g7Y6Y7J207KaIIOyCrOydtOymiCDsooXrpZhcclxuICB9XHJcbiBleHBvcnQgY29uc3QgbG9jYWxpemF0aW9uID0ge1xyXG4gICAgcGFnaW5hdGlvbiA6IHsgbGFiZWxEaXNwbGF5ZWRSb3dzIDogJ3tjb3VudH0gcm93cyB8IHtmcm9tfS17dG99JyAsIH0sXHJcbiAgICB0b29sYmFyOiB7blJvd3NTZWxlY3RlZDogJ3swfSByb3cocykgc2VsZWN0ZWQnfSxcclxuICAgIGhlYWRlcjoge2FjdGlvbnM6ICdFZGl0J30sXHJcbiAgICBib2R5OiB7ZW1wdHlEYXRhU291cmNlTWVzc2FnZTogXHJcbiAgICAgICAgKFxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAge2BObyBSZWNvcmRzIHRvIGRpc3BsYXlgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIGVuZEljb249ezxBZGRCb3gvPn1cclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtgQ2xpY2sgdGhlIHBsdXMgaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUgZm9yIGEgbmV3IHJlY29yZC4gYH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICB9XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge1Rvb2xiYXIsIERyYXdlciAsIEJ1dHRvbiAsIEdyaWQsXHJcbiAgICAgRGl2aWRlciwgQXBwQmFyIGFzIEFwcGJhcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGlkZU9uU2Nocm9sbCBmcm9tIFwiLi4vY3VzdG9tSG9vay9IaWRlT25TY2hyb2xsXCI7XHJcbmltcG9ydCBTaWRlTWVudUxpc3QgZnJvbSBcIi4vU2lkZU1lbnVMaXN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgU2lnbk91dEJ1dHRvbiBmcm9tIFwiLi9TaWduT3V0QnV0dG9uXCI7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDoxOCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOjE4LFxyXG4gICAgfSxcclxuICAgIGxlZnQgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6MzAsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1zdGFydCdcclxuICAgIH0sXHJcbiAgICBjZW50ZXIgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgcmlnaHQgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6NDUsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1lbmQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nOmAwICR7dGhlbWUuc3BhY2luZygzKX1gXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2IChwcm9wcykge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVudSA6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yLCBvcGVuKSA9PiAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBmbGFnID0gb3Blbj8gc3RhdGVbYW5jaG9yXSA/IGZhbHNlIDogdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBmbGFnIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGFuY2hvciA9IHByb2ZpbGUubmFtZT8gJ01ZUEFHRScgOidMT0dJTic7XHJcbiAgICBjb25zdCBsaW5rcyA9IFsnYm9hcmQnLCdtYW5hZ2VtZW50J107XHJcbiAgICBjb25zdCBMb2dvdXRCdG4gPSBwcm9maWxlLm5hbWU/IDxTaWduT3V0QnV0dG9uLz4gOiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIaWRlT25TY2hyb2xsIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEFwcGJhciBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tib3hTaGFkb3c6J25vbmUnfX0+XHJcbiAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IEhvbWUgPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtsaW5rfWB9IHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fSBrZXk9e2xpbmt9PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiB7bGlua30gPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT48c3Bhbj48L3NwYW4+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdwcmltYXJ5JyBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0gc3R5bGU9e3ttYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YW5jaG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtMb2dvdXRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlciBvcGVuPXtzdGF0ZVthbmNob3JdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IHZhcmlhbnQ9J3BlcnNpc3RlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7U2lkZU1lbnVMaXN0KCB7Li4ucHJvcHMsIGFuY2hvciAsdG9nZ2xlRHJhd2VyICwgcHJvZmlsZX0gKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBiYXI+XHJcbiAgICAgICAgPC9IaWRlT25TY2hyb2xsPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbVRleHQsIExpc3RJdGVtQXZhdGFyICwgRGl2aWRlciwgTGlzdEl0ZW0sIFR5cG9ncmFwaHkgLCBBdmF0YXIsIEljb25CdXR0b24gLFxyXG4gICAgIE1vZGFsLCBCb3gsIEJ1dHRvbixcclxuICAgICBQYXBlcixcclxuICAgICBUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFNpZ25JbkJ1dHRvbiBmcm9tICcuL1NpZ25JbkJ1dHRvbic7XHJcbmltcG9ydCBnb29nbGVTaWduaW5JbWFnZSBmcm9tICcuLi9idXR0b25JbWFnZS9nb29nbGVTaWduaW4ucG5nJztcclxuaW1wb3J0IHtyZWRpcmVjdEdvb2dsZUxvZ2lufSBmcm9tICcuLi91dGlsL0xvZ2luQVBJJztcclxuaW1wb3J0IHtFZGl0LCBJbmZvLCBEZWxldGVGb3JldmVyLCBXYXJuaW5nfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCB7R2xvYmFsU25hY2tiYXJDb250ZXh0fSBmcm9tICcuLi9hcHAnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbGlzdCA6IHtcclxuICAgICAgICB3aWR0aCA6ICcyM3Z3JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdzdGFydCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW0gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW1UZXh0IDoge1xyXG4gICAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYXJnZUF2YXRhciA6IHtcclxuICAgICAgICB3aWR0aCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgIH0sXHJcbiAgICBpbmxpbmUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdpbmxpbmUnXHJcbiAgICB9LFxyXG4gICAgbGlzdFRleHQgOiB7XHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbW9kYWwgOiB7XHJcbiAgICAgICAgdG9wIDogJzUwJScsXHJcbiAgICAgICAgbGVmdCA6ICc1MCUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICBtaW5XaWR0aCA6IDQwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBtb2RhbFJvd0JveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsQ29sQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdzdGFydCdcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJ1xyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUxpc3QgKHthbmNob3IgLCB0b2dnbGVEcmF3ZXIsIHByb2ZpbGV9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBoYW5kbGVHbG9iYWxTbmFja2JhciA9IFJlYWN0LnVzZUNvbnRleHQoR2xvYmFsU25hY2tiYXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtlbWFpbElucHV0LCBzZXRFbWFpbElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2tMb2dpbiAoKSB7XHJcbiAgICAgICAgcmVkaXJlY3RHb29nbGVMb2dpbigpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja01vZGFsID0gKCkgPT4gc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRFbWFpbElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbWFpbElucHV0ID09PSBwcm9maWxlLmVtYWlsKSB7XHJcbiAgICAgICAgICAgIHNhdmVEYXRhKHt9LFtdLFt7fV0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHbG9iYWxTbmFja2Jhcih7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbjp0cnVlLCBcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGRhdGEucmVzdWx0ID09PSAnc3VjY2VzcycgPyAnc3VjY2VzcycgOiAnZXJyb3InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgICAgICAgICAgICB9LDE1MDApO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUdsb2JhbFNuYWNrYmFyKHtcclxuICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6J2Vycm9yJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gcHJvZmlsZT8gcHJvZmlsZS5uYW1lPyB0cnVlIDogZmFsc2UgOiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2lzTG9nZ2VkPyAnUFJPRklMRScgOiAnTE9HSU4gTUVOVSd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcblxyXG4gICAgICAgICAgICB7aXNMb2dnZWQ/IFxyXG5cclxuICAgICAgICAgICAgKDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPSdjZW50ZXInIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17cHJvZmlsZS5waWN0dXJlfSBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2VBdmF0YXJ9IGFsdD17cHJvZmlsZS5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Byb2ZpbGUubmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RUZXh0fT48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdFTUFJTCA6ICcgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdzcGFuJyB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRQcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5lbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm8gY29sb3I9J3ByaW1hcnknIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzF2dyd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBzZWNvbmRhcnk9J0VESVQgSEVBREVSUycvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaGVhZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J2VuZCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgY29sb3I9J3ByaW1hcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8V2FybmluZyBjb2xvcj0nc2Vjb25kYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdSRU1PVkUgQUxMIERBVEEnLz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJyBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlciBjb2xvcj0nc2Vjb25kYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7Lyog66qo64usICovfVxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBvcGVuPXttb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZU9uQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1jb250ZW50c1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsUm93Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J3N0YXJ0JyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcicgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLXRpdGxlXCIgdmFyaWFudD0nYnV0dG9uJyBkaXNwbGF5PSdibG9jaycgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhdXRpb24gOiBwZXJtYW5lbnQgZGVsZXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsQ29sQm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtY29udGVudHNcIiB2YXJpYW50PSdib2R5MScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgQWxsIGRhdGEgd2lsbCBiZSBkZWxldGVkIGFuZCBjYW5ub3QgYmUgcmVjb3ZlcmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGNvcnJlY3RseSB0byBjb250aW51ZS5gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbic+e3Byb2ZpbGUuZW1haWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxSb3dCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD0nRS1NQUlMJyBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgKDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTG9naW59PlxyXG4gICAgICAgICAgICAgICAgPFNpZ25JbkJ1dHRvbiBzaWduSW49e2dvb2dsZVNpZ25pbkltYWdlfS8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+KX1cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbk1lbnVMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIGFuY2hvciA6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRvZ2dsZURyYXdlciA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9maWxlIDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluQnV0dG9uIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7c2lnbklufSA9IHByb3BzOyAvLyDsnbTrr7jsp4BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3NpZ25Jbn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+PC9pbWc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwJztcclxuaW1wb3J0IHsgTGlzdEl0ZW0gLCBJY29uQnV0dG9uLCBUb29sdGlwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxvZ291dCA6IHtcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAwLFxyXG4gICAgICAgIHdpZHRoIDogJ2F1dG8nLFxyXG4gICAgfVxyXG59KSlcclxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBmb250V2VpZ2h0Oidib2xkJ1xyXG4gICAgfSxcclxuICB9KSkoVG9vbHRpcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgndXNlcicpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT0nTG9nLW91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3twYWRkaW5nOjR9fSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhpdFRvQXBwSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+ICAgIFxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSBcIi4vc2VydmVyVVJMXCI7XHJcblxyXG4vLyBVUkwgZXhwb3J0XHJcbi8vIHNldmVy7JeQ7IScIOuwm+ydgCB1cmzroZwg66as64uk7J2066CJ7Yq4XHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdEdvb2dsZUxvZ2luID0gKCkgPT4gYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbG9naW5gKS50aGVuKHJlcyA9PiBsb2NhdGlvbi5hc3NpZ24ocmVzLmRhdGEpKTtcclxuZXhwb3J0IGNvbnN0IGdldFRva2VuQW5kUHJvZmlsZSA9ICh0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7c2VydmVyVVJMfS9sb2dpbmAsIHt0b2tlbn0gLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlLFxyXG4gICAgfSkudGhlbihyZXNwb25zZT0+UHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gJy4vc2VydmVyVVJMJztcclxuXHJcbi8vIO2FjOydtOu4lCDrjbDsnbTthLAg67Cb7JWE7Jik6riwIGNvb2tpZeyXkCDri7TquLQgdG9rZW7sgqzsmqlcclxuZXhwb3J0IGNvbnN0IGdldE1hbmFnZW1lbnRUYWJsZSA9ICAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L21hbmFnZW1lbnRgLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUhlYWRlcnMgPSAoaGVhZGVycywgZ3JvdXBpbmdzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2F2aW5nIGhlYWRlcnMgOiBcclxuICAgIGhlYWRlcnMgOiAke0pTT04uc3RyaW5naWZ5KGhlYWRlcnMpfVxyXG4gICAgZ3JvdXBpbmdzIDogJHtKU09OLnN0cmluZ2lmeShncm91cGluZ3MpfWApO1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9oZWFkZXJzYCwge1xyXG4gICAgICAgIC8vIGRhdGFcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5nc1xyXG4gICAgfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KS50aGVuKHJlcyA9PiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpKSk7ICAgIC8vIOy/oO2CpOyZgCDtlajqu5hcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVEYXRhID0gKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9kYXRhYCwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgZ3JvdXBpbmdzLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDApIHJldHVybiBQcm9taXNlLnJlamVjdCg0MDApO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpXHJcbiAgICB9KSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoaGVhZGVycyAsIGdyb3VwaW5ncykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBkYXRhIHBhcnNpbmchISEhYClcclxuICAgIHJldHVybiAoT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5maWx0ZXIodj0+dikubWFwKCh2YWx1ZSxpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlIDogdmFsdWUsXHJcbiAgICAgICAgZmllbGQgOiB2YWx1ZSxcclxuICAgICAgICBncm91cGluZyA6IGdyb3VwaW5nc1tpbmRleF1cclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBcImh0dHBzOi8vbWFuYWdlbWVudC1hcHBsZS5oZXJva3VhcHAuY29tXCI7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==