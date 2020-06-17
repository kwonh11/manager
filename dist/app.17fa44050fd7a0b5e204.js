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
/* harmony import */ var _customHook_Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customHook/Loading */ "./src/customHook/Loading.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");



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
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.container
  }, /*#__PURE__*/React.createElement(_customHook_Loading__WEBPACK_IMPORTED_MODULE_0__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
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
  }))));
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL1NuYWNrQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ3Jvc3NsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW1hZ2VTbGlkZVNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTGlzdENhcm91c2VsRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9TdGFydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Fycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JsYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Rlc2suanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZWFzeS1sb2dpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oYW5kbGUtdGFibGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFrZS1oZWFkZXJzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tb29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL215bWVudS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zbGlkZTAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcnQtcmlnaHQtYXdheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93aGl0ZS1hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93aGl0ZWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9EZWZhdWx0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9IZWFkZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvTWFudWFsRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1NhdmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvVGFibGVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9Mb2dpbkFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9NYW5hZ2VtZW50QVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9zZXJ2ZXJVUkwuanMiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvdXRDb250ZXh0IiwiUHJvZ3Jlc3NDb250ZXh0IiwiR2xvYmFsU25hY2tiYXJDb250ZXh0IiwiQXBwIiwicXMiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0ciIsImlkX3Rva2VuIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwib3BlbiIsInJlc3VsdCIsImdsb2JhbFNuYWNrYmFyIiwic2V0R2xvYmFsU25hY2tiYXIiLCJ0b2tlbiIsInVzZXIiLCJwcm9ncmVzc1JlZiIsInVzZVJlZiIsImhhbmRsZUJlZm9yZXVubG9hZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJnZXRUb2tlbkFuZFByb2ZpbGUiLCJ0aGVuIiwiZGF0YSIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJKU09OIiwic3RyaW5naWZ5IiwicGF0aCIsIm1heEFnZSIsImVyciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImNvbG9yIiwicGFwZXIiLCJiYWNrTG9nbyIsImp1c3RpZnlTZWxmIiwiaW5wdXRCb3giLCJtYXJnaW5Ub3AiLCJCb2FyZCIsImNsYXNzZXMiLCJpbnB1dFJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJ2Iiwic2hyaW5rIiwiSGlkZU9uU2Nyb2xsIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsIkxvYWRpbmciLCJvbkNsb3NlIiwiY29udGVudCIsInN0YXR1cyIsImRpcmVjdGlvbiIsImZvbnRTaXplIiwidXNlT25GaXJzdFJlbmRlciIsImZ1bmMiLCJpc0ZpcnN0UmVmIiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwicm9vdCIsIm1pbkhlaWdodCIsImZvb3RlciIsInBhZGRpbmciLCJzcGFjaW5nIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJncmV5IiwidGV4dEFsaWduIiwiYXJyb3ciLCJhbGlnblNlbGYiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIlN0aWNreUZvb3RlciIsInBhdGhuYW1lIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwidHJhbnNpdGlvbiIsInRhcmdldCIsInN0eWxlIiwiY3Vyc29yIiwiYmFja2dyb3VuZEltYWdlIiwibWFuYWdlbWVudEJhY2tncm91bmQiLCJ0cmFuc2Zvcm0iLCJ3aGl0ZUFycm93IiwidGV4dENvbnRhaW5lciIsImJhY2tncm91bmRDb2xvciIsInRleHRTaGFkb3ciLCJJbWFnZUNhcm91c2VsIiwiaW1hZ2VMaXN0IiwibGlzdCIsInNldFN0ZXBwZXIiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJoYW5kbGVBZnRlclNsaWRlIiwic2xpZGVJbmRleCIsImluZGV4IiwibWFwIiwiaW1hZ2UiLCJzcmMiLCJmbGV4V3JhcCIsIkNyb3NzbGluZSIsImZhZGUiLCJzZXRGYWRlIiwiZG9tUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZW50ZXIiLCJleGl0IiwiaW5uZXJCb3giLCJEZXNjcmlwdGlvbiIsImdyb3ciLCJzZXRHcm93IiwidHJhbnNmb3JtT3JpZ2luIiwidGltZW91dCIsImFwcGVhciIsIkhvbWUiLCJzbGlkZTAiLCJkZXNjcmlwdGlvbiIsImVhc3lMb2dpbiIsImxpbmtNYW5hZ2VtZW50UGFnZSIsInN0YXJ0UmlnaHRBd2F5IiwibWFrZUhlYWRlcnMiLCJoYW5kbGVUYWJsZSIsInVzZU15bWVudSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJ0ZXh0UGFwZXIiLCJJbnRyb2R1Y3Rpb24iLCJzdGVwcGVyIiwibG9nb0JveCIsImJpZ0F2YXRhciIsInRleHRXaXRoU2hhZG93IiwibWFyZ2luTGVmdCIsImRlc2NyaXB0aW9uQm94IiwibW9vbkltYWdlIiwiaW5saW5lIiwiRGVzY3JpcHRpb25MaXN0Iiwic2xpZGVTb3VyY2UiLCJpdGVtIiwiYWxpZ25Db250ZW50IiwiTWFpbiIsInVzZVN0eWxlIiwiYnV0dG9uIiwidGV4dCIsInR5cG9ncmFwaHkiLCJ0ZXh0RGVjb3JhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbkNvbnRhaW5lciIsImRlZmF1bHREYXRhIiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJncm91cGluZyIsIkRlZmF1bHRQYWdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiZmFkZTIiLCJzZXRGYWRlMiIsImhhbmRsZU9uREVNT0NsaWNrIiwiZGVmYXVsdFBhZ2UiLCJzZXRUaW1lb3V0IiwiZm9ybVJvb3QiLCJkZWZhdWx0SGVhZGVyIiwiSGVhZGVycyIsImhhbmRsZVByb2dyZXNzIiwidXNlQ29udGV4dCIsInNuYWNrIiwic2V0U25hY2siLCJyZXN1bHRTbmFjayIsInNldFJlc3VsdFNuYWNrIiwiaGVhZGVycyIsImdyb3VwaW5ncyIsIkFycmF5IiwiZmlsbCIsInNldERhdGEiLCJkYXRhUmVmIiwiZ2V0TWFuYWdlbWVudFRhYmxlIiwicmVzcG9uc2UiLCJncm91cGluZ0xlbmd0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwiaGVhZGVyc0xlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImhhbmRsZUxvZ291dCIsImhhbmRsZVN1Ym1pdCIsImhyZWYiLCJvcmlnaW4iLCJpc0F1dG9TYXZlIiwiZXZlcnkiLCJmaWx0ZXIiLCJzYXZlSGVhZGVycyIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJoYW5kbGVHcm91cGluZ3MiLCJjaGVja2VkIiwiaGVhZGVyIiwiTWFuYWdlbWVudFRhYmxlIiwic2F2ZWRTbmFjayIsInNldFNhdmVkU25hY2siLCJlcnJvclNuYWNrIiwic2V0RXJyb3JTbmFjayIsImRpYWxvZyIsInNldERpYWxvZyIsImhhc1RhYmxlIiwidGFibGVSZWYiLCJwYXJzZURhdGEiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZU9uU2F2ZSIsImRhdGFNYW5hZ2VyIiwicmVkdWNlIiwib2JqIiwidGFibGVEYXRhIiwicmVzdCIsInNhdmVEYXRhIiwib25kYkNsaWNrIiwib25LZXlkb3duIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJtZXRhS2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1hcmdpbiIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJldkRhdGEiLCJvblJvd0FkZCIsIm5ld0RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZXZTdGF0ZSIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsIk1hbnVhbERpYWxvZyIsImljb25zIiwiZXhwb3J0QnV0dG9uIiwic2VsZWN0aW9uIiwiaGVhZGVyU3R5bGUiLCJhY3Rpb25zQ29sdW1uSW5kZXgiLCJjb2x1bW5zQnV0dG9uIiwiZGVib3VuY2VJbnRlcnZhbCIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwicGFnaW5hdGlvbiIsImxhYmVsRGlzcGxheWVkUm93cyIsInRvb2xiYXIiLCJuUm93c1NlbGVjdGVkIiwiYWN0aW9ucyIsImJvZHkiLCJlbXB0eURhdGFTb3VyY2VNZXNzYWdlIiwiZmxleEdyb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxlZnQiLCJwYWRkaW5nTGVmdCIsImp1c3RpZnkiLCJjZW50ZXIiLCJyaWdodCIsInBhZGRpbmdSaWdodCIsIk5hdiIsIm1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJldmVudCIsImZsYWciLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJsaXN0VGV4dCIsIm1vZGFsIiwicG9zaXRpb24iLCJib3JkZXIiLCJzaGFkb3dzIiwibW9kYWxSb3dCb3giLCJtb2RhbENvbEJveCIsIk1lbnVMaXN0IiwiaGFuZGxlR2xvYmFsU25hY2tiYXIiLCJlbWFpbElucHV0Iiwic2V0RW1haWxJbnB1dCIsImhhbmRsZU9uQ2xpY2tMb2dpbiIsInJlZGlyZWN0R29vZ2xlTG9naW4iLCJoYW5kbGVPbkNsaWNrTW9kYWwiLCJzZXRNb2RhbCIsImhhbmRsZU9uQ2xvc2VNb2RhbCIsImhhbmRsZU9uU3VibWl0IiwicmVsb2FkIiwiaXNMb2dnZWQiLCJnb29nbGVTaWduaW5JbWFnZSIsIlNpZ25JbkJ1dHRvbiIsInNpZ25JbiIsImxvZ291dCIsIkxpZ2h0VG9vbHRpcCIsIndpdGhTdHlsZXMiLCJjb21tb24iLCJ3aGl0ZSIsIlRvb2x0aXAiLCJheGlvcyIsImdldCIsInNlcnZlclVSTCIsInJlcyIsImFzc2lnbiIsInBvc3Qi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TUFBdkIsQ0FBOEIsVUFBQW5LLENBQUM7QUFBQSxXQUFFQSxDQUFGO0FBQUEsR0FBL0IsRUFBb0N5RCxHQUFwQyxDQUF3QyxVQUFDNkcsS0FBRCxFQUFPOUcsS0FBUCxFQUFpQjtBQUMvRCxXQUFPO0FBQ0xpRSxXQUFLLEVBQUc2QyxLQURIO0FBRUw1QyxXQUFLLEVBQUc0QyxLQUZIO0FBR0wzQyxjQUFRLEVBQUdvQixTQUFTLENBQUN2RixLQUFEO0FBSGYsS0FBUDtBQUtELEdBTk8sQ0FBUjtBQU9ELENBVEgsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZSxzRkFBZixFIiwiZmlsZSI6ImFwcC4xN2ZhNDQwNTBmZDdhMGI1ZTIwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiIGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi9OYXZcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkL0JvYXJkXCI7XHJcbmltcG9ydCBNYW5hZ2VtZW50IGZyb20gXCIuL21hbmFnZW1lbnQvTWFuYWdlbWVudFwiO1xyXG5pbXBvcnQgSGVhZGVycyBmcm9tICcuL21hbmFnZW1lbnQvSGVhZGVycyc7XHJcbmltcG9ydCB7Q3NzQmFzZWxpbmV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZS9Ib21lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSdcclxuaW1wb3J0IHsgZ2V0VG9rZW5BbmRQcm9maWxlIH0gZnJvbSBcIi4vdXRpbC9Mb2dpbkFQSVwiO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuXHJcbi8vIOy7qO2FjeyKpO2KuCDrqqnroZ1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTG9nb3V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IEdsb2JhbFNuYWNrYmFyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IHsgaWRfdG9rZW4gfSA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICBjb25zdCBbIHByb2ZpbGUgLCBzZXRQcm9maWxlIF0gPSBSZWFjdC51c2VTdGF0ZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnbG9iYWxTbmFja2Jhciwgc2V0R2xvYmFsU25hY2tiYXJdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZSAsIHJlc3VsdDogJ3N1Y2Nlc3MnfSlcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llcy51c2VyO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NSZWYgPSBSZWFjdC51c2VSZWYoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVCZWZvcmV1bmxvYWQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHByb2dyZXNzIDogJHtwcm9ncmVzc1JlZi5jdXJyZW50fWApO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHByb2dyZXNzUmVmLmN1cnJlbnQgPSAocHJvZ3Jlc3NSZWYuY3VycmVudCA8IDEwMCA/IHByb2dyZXNzUmVmLmN1cnJlbnQgKyAyMCA6IDEwMCk7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzUmVmLmN1cnJlbnQgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgc2V0R2xvYmFsU25hY2tiYXIoe29wZW46dHJ1ZSAsIHJlc3VsdDpyZXN1bHR9KTtcclxuICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sMjAwKVxyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoIEFQSSDsi6TtloknKTtcclxuICAgICAgICAgICAgZ2V0VG9rZW5BbmRQcm9maWxlKGlkX3Rva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge25hbWUgLGVtYWlsLCBwaWN0dXJlfSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2UgZGF0YSA6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJwcm9maWxlXCIse25hbWUgLCBlbWFpbCwgcGljdHVyZX0se3BhdGg6XCIvXCIgLCBtYXhBZ2UgOiA3MjAwfSk7ICAvLyBtYXhBZ2UgOiAy7Iuc6rCEXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3Igb2NjdXJlZCA6ICR7ZXJyfWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbaWRfdG9rZW5dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyDquLDsobQg7Yag7YGw7J20IOyeiOydhCDqsr3smrAg7ISc67KE66GcIOyerOyalOyyre2VtOyEnCDrp4zro4zrkJwg7Yag7YGw7J247KeAIO2ZleyduFxyXG4gICAgICAgIC8vIOunjOujjOuQnCDthqDtgbDsnbwg6rK97JqwIOy/oO2CpO2UhOuhnO2VhCwgc3RhdGXtlITroZztlYQsIOunjOujjOuQnCDthqDtgbAg66qo65GQIOygnOqxsFxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg6riw7KG0IO2GoO2BsCDsnojsnYwgdG9rZW4gOiAke3Rva2VufWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3Rva2VuXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGNvb2tpZXMucHJvZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY29va2llcy5wcm9maWxlIDogJHtKU09OLnN0cmluZ2lmeShjb29raWVzLnByb2ZpbGUpfWApO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29va2llcy5wcm9maWxlXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9maWxlIHx8IHtuYW1lIDogJyd9fT4gICAgICAgICAgey8qIOycoOyggCDtlITroZztlYQg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8TG9nb3V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UHJvZmlsZX0+ICAgey8qIOuhnOq3uOyVhOybgyDsnbTrsqTtirgg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyhyZXN1bHQpPT5oYW5kbGVCZWZvcmV1bmxvYWQocmVzdWx0KX0+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldEdsb2JhbFNuYWNrYmFyfT5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cclxuICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eygpPT48SG9tZSBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2JvYXJkJyByZW5kZXI9eygpPT48Qm9hcmQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9tYW5hZ2VtZW50JyByZW5kZXI9eygpPT4gPE1hbmFnZW1lbnQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9oZWFkZXJzJyByZW5kZXI9eygpPT4gPEhlYWRlcnMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nLycgcmVuZGVyPXsocHJvcHMpPT48Rm9vdGVyIHsuLi5wcm9wc30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPC9HbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvUHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0xvZ291dENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtnbG9iYWxTbmFja2Jhci5vcGVufSBvbkNsb3NlPXsoKT0+c2V0R2xvYmFsU25hY2tiYXIoe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdD09PSdlcnJvcic/IGBOb3Qgc2F2ZWQuXHJcbiAgICAgICAgICAgIFJlYXNvbiA6IEludmFsaWQgaW5wdXQuYCA6JyBTQVZFRCAnfSBzdGF0dXM9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdH1cclxuICAgICAgICAgICAgZGlyZWN0aW9uPXt7dmVydGljYWw6J3RvcCcsIGhvcml6b250YWw6J3JpZ2h0J319Lz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIEZhZGUsIFBhcGVyLCBUeXBvZ3JhcGh5LENvbnRhaW5lciwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTIwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNzV2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzg1dmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJhY2tMb2dvIDoge1xyXG4gICAgICAgIGp1c3RpZnlTZWxmIDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgaW5wdXRCb3ggOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNDB2dycsXHJcbiAgICAgICAgbWFyZ2luVG9wOic1dmgnXHJcbiAgICB9XHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoe2lzTG9hZGluZ30pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyBlbnRlciBwcmVzc2VkXHJcbiAgICAgICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJykuZm9jdXMoKTsgLy8gZm9jdXMg7J6R64+ZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezV9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrTG9nb30gPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInICwgY29sb3I6JyNlMGUwZTAnfX0+IElOIFJFQURZLiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicgLCBjb2xvcjonI2UwZTBlMCd9fT4gfiAyMDIwLzA2LzIxIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Qm94fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4IH19XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgcmVmPXt2ID0+IGlucHV0UmVmLmN1cnJlbnQgPSB2fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGVTaWduaW4uMWNlMWFhYTVhMTI3ZmEzZTQ5MmExMmJiNjJmOTkzMDQucG5nXCI7IiwiaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuXHJcbi8vIEdOQuydmCDsiqzrnbzsnbTrk5zquLDriqVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9IGRpcmVjdGlvbj1cImRvd25cIiBpbj17IXRyaWdnZXJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NsaWRlPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQge0JveCwgQ2lyY3VsYXJQcm9ncmVzcywgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZyAoe2lzTG9hZGluZ30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtcclxuICAgICAgICBpc0xvYWRpbmcgJiYgXHJcbiAgICAgICAgICAgICg8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDB2aCcsIHdpZHRoOicxMDAlJywgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtgU2F2aW5nIGNoYW5nZXNgfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgICAgICAgPC9Cb3g+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxufSIsImltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7b3Blbiwgb25DbG9zZSwgY29udGVudCwgc3RhdHVzLCBkaXJlY3Rpb259KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICBhbmNob3JPcmlnaW49e2RpcmVjdGlvbj8gZGlyZWN0aW9uIDogeyB2ZXJ0aWNhbDondG9wJywgaG9yaXpvbnRhbDonY2VudGVyJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e29uQ2xvc2V9IHNldmVyaXR5PXtzdGF0dXN9XHJcbiAgICAgICAgICAgICB2YXJpYW50PSdmaWxsZWQnIG1lc3NhZ2U9e3tmb250V2VpZ2h0Oidib2xkZXInLCBmb250U2l6ZTonNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICApXHJcbn0iLCJcclxuLy8gY29udHN0cnVjdG9yIO2bhVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPbkZpcnN0UmVuZGVyIChmdW5jKSB7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmMoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHdoaXRlQXJyb3cgZnJvbSAnLi4vaW1hZ2VzL3doaXRlLWFycm93LnBuZyc7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9pbWFnZXMvYXJyb3cucG5nJztcclxuaW1wb3J0IHtCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBtYW5hZ2VtZW50QmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZyc7XHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgIHsnQ29weXJpZ2h0IMKpICd9XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIEphY2sncyBXZWJzaXRlXHJcbiAgICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgICB7Jy4nfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIG1pbkhlaWdodDogJzIwdmgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcclxuICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICAgIGJhY2tncm91bmQgOiB0aGVtZS5wYWxldHRlLmdyZXlbMjAwXSxcclxuICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yIDogJ3doaXRlJ1xyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICB3aWR0aCA6ICc0dncnLFxyXG4gICAgICBoZWlnaHQgOiAnNHZ3JyxcclxuICAgICAgcGFkZGluZyA6ICczdncnLFxyXG4gICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luQm90dG9tOicydmgnLFxyXG4gICAgICBtYXJnaW5Ub3AgOiAnMnZoJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6J2NvbnRhaW4nLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0aWNreUZvb3Rlcihwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge2xvY2F0aW9ufSA9IHByb3BzO1xyXG4gICAgY29uc29sZS5sb2coYGxvY2F0aW9uLnBhdGhuYW1lPyAke2xvY2F0aW9uLnBhdGhuYW1lfWApO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgPT09ICcvYm9hcmQnPyBudWxsIDogKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17XHJcbiAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJyA/IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kIDogYGxpbmVhci1ncmFkaWVudChibGFjaywgI2VlZWVlZSlgfSBcclxuICAgICAgICA6IFxyXG4gICAgICAgIHtiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7bWFuYWdlbWVudEJhY2tncm91bmR9KWAsIGJhY2tncm91bmRTaXplIDogJ2F1dG8nLCB0cmFuc2Zvcm06IGBzY2FsZVkoLTEpYH19PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTW92ZSB0byBUb3BcIiBhcmlhLWxhYmVsPVwibW92ZS10by10b3BcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBlbnRlckRlbGF5PXszNTB9IGxlYXZlRGVsYXk9ezE1MH0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30gc3R5bGU9e1xyXG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJz8gXHJcbiAgICAgICAgICB7YmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke3doaXRlQXJyb3d9KWB9XHJcbiAgICAgICAgICA6IFxyXG4gICAgICAgICAge2JhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCwgdHJhbnNmb3JtOmByb3RhdGUoMTgwZGVnKWB9fVxyXG4gICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9IG9uTW91c2VPdmVyPXsoZSk9PnRyYW5zaXRpb24oZSl9Lz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgICAgICAgPENvcHlyaWdodCBzdHlsZT17e2ZvbnRXZWlnaHQgOiAnYm9sZGVyJ319Lz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9IiwiaW1wb3J0IENhcm91c2VsIGZyb20gJ251a2EtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICB0ZXh0Q29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0JyxcclxuICAgICAgICBjb2xvciA6ICcjZmZmJyxcclxuICAgICAgICB0ZXh0U2hhZG93OicycHggMS41cHggMS41cHggZ3JheScsXHJcbiAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGltYWdlTGlzdCA9IHByb3BzLmxpc3QgPyBwcm9wcy5saXN0IDogW3t9XTtcclxuICAgIGNvbnN0IHtzZXRTdGVwcGVyLCBjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGhhbmRsZUFmdGVyU2xpZGUgPSAoc2xpZGVJbmRleCkgPT4ge1xyXG4gICAgICAgIHNldFN0ZXBwZXIoc2xpZGVJbmRleCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKHNsaWRlSW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgc2xpZGVJbmRleD17Y3VycmVudFNsaWRlfVxyXG4gICAgYWZ0ZXJTbGlkZT0ge2luZGV4ID0+IGhhbmRsZUFmdGVyU2xpZGUoaW5kZXgpfVxyXG4gICAgYXV0b3BsYXk9e2ZhbHNlfVxyXG4gICAgYXV0b3BsYXlJbnRlcnZhbD17MzAwMH1cclxuICAgIHRyYW5zaXRpb25Nb2RlPSdzY3JvbGwnXHJcbiAgICBzcGVlZD17ODAwfVxyXG4gICAgaGVpZ2h0TW9kZT0nbWF4J1xyXG4gICAgICAgID5cclxuICAgIHtcclxuICAgICAgICBpbWFnZUxpc3QubWFwKChpbWFnZSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AjJHtpbmRleH0gJHtpbWFnZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgaW5kZXg9PT0wPyBcclxuICAgICAgICAgICAgICAgICAgICAoPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRhaW5lcn0gc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBhbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRVUlDSyBTVEFSVCBHVUlERVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSB5b3VyIHdvcmsgZWFzaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHVybiB0aGUgc2xpZGUgb3ZlciBhbmQgY2hlY2suXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgY29uc2lzdHMgb2YgYSBmZXcgc2xpZGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQm94PilcclxuICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtpbWFnZS5zcmN9Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgKTtcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3ggLCBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luOjAsXHJcbiAgICAgIHBhZGRpbmc6JzF2dycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9zc2xpbmUoe2NoaWxkcmVufSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy01MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MjAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBib3hTaGFkb3c9ezR9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JvdywgQm94LCBGYWRlLCBUeXBvZ3JhcGh5LCBEaXZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3QgOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzM1dmgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0JyxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBjb2xvcjonI2VhZWFlYScsXHJcbiAgICAgICAgdGV4dFNoYWRvdzogJzFweCA1cHggNXB4ICM5ZTk5OTknXHJcbiAgICB9XHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVzY3JpcHRpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgKX0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnMTUwcHggMHB4J1xyXG4gICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDE1MDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH0gfSA6IHt9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIFNPTUUgVEVYVFxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU09NRSBURVhUXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+ICAgICAgXHJcbiAgICAgICAgPC9Hcm93PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb25cIjtcclxuaW1wb3J0IEludHJvZHVjdGlvbjIgZnJvbSBcIi4vSW50cm9kdWN0aW9uMlwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4nO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtpc0xvYWRpbmd9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24vPlxyXG4gICAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uMi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IGVhc3lMb2dpbiBmcm9tIFwiLi4vaW1hZ2VzL2Vhc3ktbG9naW4ucG5nXCI7XHJcbmltcG9ydCBsaW5rTWFuYWdlbWVudFBhZ2UgZnJvbSBcIi4uL2ltYWdlcy9saW5rLW1hbmFnZW1lbnQtcGFnZS5wbmdcIjtcclxuaW1wb3J0IHN0YXJ0UmlnaHRBd2F5IGZyb20gXCIuLi9pbWFnZXMvc3RhcnQtcmlnaHQtYXdheS5wbmdcIjtcclxuaW1wb3J0IG1ha2VIZWFkZXJzIGZyb20gXCIuLi9pbWFnZXMvbWFrZS1oZWFkZXJzLnBuZ1wiO1xyXG5pbXBvcnQgaGFuZGxlVGFibGUgZnJvbSBcIi4uL2ltYWdlcy9oYW5kbGUtdGFibGUucG5nXCI7XHJcbmltcG9ydCB1c2VNeW1lbnUgZnJvbSBcIi4uL2ltYWdlcy9teW1lbnUucG5nXCI7XHJcbmltcG9ydCBzbGlkZTAgZnJvbSBcIi4uL2ltYWdlcy9zbGlkZTAucG5nXCI7XHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1F1aWNrIHN0YXJ0IGd1aWRlJyxcclxuICAgICAgICBzcmMgOiBgJHtzbGlkZTB9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdHVUlERScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnU2lnbiBpbiB3aXRoIEdvb2dsZScsXHJcbiAgICAgICAgc3JjIDogYCR7ZWFzeUxvZ2lufWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnU2lnbiBpbiB3aXRoIGdvb2dsZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnTW92ZSBvbiB0byBtYW5hZ2VtZW50IHBhZ2UnLFxyXG4gICAgICAgIHNyYyA6IGAke2xpbmtNYW5hZ2VtZW50UGFnZX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ01vdmUgb24gdG8gbWFuYWdlbWVudCBwYWdlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdDbGljayB0aGUgYmx1ZSBidXR0b24nLFxyXG4gICAgICAgIHNyYyA6IGAke3N0YXJ0UmlnaHRBd2F5fWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnY2xpY2sgXCJnZXQgc3RhcnRlZCByaWdodCBhd2F5XCIgYnV0dG9uJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdNYWtlIEhlYWRlcnMnLFxyXG4gICAgICAgIHNyYyA6IGAke21ha2VIZWFkZXJzfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnbWFrZSBoZWFkZXJzJyxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnQ3JlYXRlLCBFZGl0LCBSZW1vdmUgdGFibGUgcmVjb3JkcycsXHJcbiAgICAgICAgc3JjIDogYCR7aGFuZGxlVGFibGV9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdoYW5kbGUgdGFibGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1VzZSBteW1lbnUgdG8gaGFuZGxlIGRhdGEnLFxyXG4gICAgICAgIHNyYyA6IGAke3VzZU15bWVudX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ3VzZSBteW1lbnUnLFxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JvdyAsIEJveCwgUGFwZXIsRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5pbXBvcnQgaW1hZ2VMaXN0IGZyb20gJy4vSW1hZ2VTbGlkZVNvdXJjZXMnO1xyXG5pbXBvcnQgTGlzdENyb3VzZWxEZXNjcmlwdGlvbiBmcm9tICcuL0xpc3RDYXJvdXNlbERlc2NyaXB0aW9uJztcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL3doaXRlYmFja2dyb3VuZC5qcGcnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDc1MCxcclxuICAgICAgICBtYXhXaWR0aDogJzEwMDBweCcsXHJcbiAgICAgICAgd2lkdGggOiAnNzB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzY1dmgnLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJ2luaGVyaXQnXHJcbiAgICB9LFxyXG4gICAgdGV4dFBhcGVyIDoge1xyXG4gICAgICAgIG1pbldpZHRoIDogMzUwLFxyXG4gICAgICAgIHdpZHRoIDogJzcwdncnLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidpbmhlcml0J1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3N0ZXBwZXIsIHNldFN0ZXBwZXJdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnNvbGUubG9nKGBjdXJyZW50U2xpZGUgOiAke2N1cnJlbnRTbGlkZX1gKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTcwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxGYWRlIGluPXtncm93fSAgdGltZW91dD17e2VudGVyOjMwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd30gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzUwJSAxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDE1MDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH0gfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxyXG4gICAgICAgICAgICAgICAgICB7LyogaW1hZ2UgY2Fyb3VzZWwgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZUNhcm91c2VsIFxyXG4gICAgICAgICAgICAgICAgICBsaXN0PXtpbWFnZUxpc3R9IFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU9e2N1cnJlbnRTbGlkZX0gXHJcbiAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTbGlkZT17c2V0Q3VycmVudFNsaWRlfSBcclxuICAgICAgICAgICAgICAgICAgc2V0U3RlcHBlcj17c2V0U3RlcHBlcn0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzUwJSAxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiB7YXBwZWFyIDogMjAwMCAsIGVudGVyIDogMTUwMCAsIGV4aXQgOiAxMDAwfX0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGxpc3QgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RDcm91c2VsRGVzY3JpcHRpb24gc3RlcHBlcj17c3RlcHBlcn0gPjwvTGlzdENyb3VzZWxEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgUGFwZXIsIEJveCwgR3JvdywgQXZhdGFyLCBUeXBvZ3JhcGh5LEZhZGUgLCBTbGlkZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBtb29uSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL21vb24ucG5nJztcclxuaW1wb3J0IENyb3NzbGluZSBmcm9tICcuL0Nyb3NzbGluZSc7XHJcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9ibGFjay5wbmcnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvdmVyJ1xyXG4gICAgfSxcclxuICAgIGxvZ29Cb3ggOiB7XHJcbiAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnXHJcbiAgICB9LFxyXG4gICAgYmlnQXZhdGFyIDoge1xyXG4gICAgICB3aWR0aCA6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgICBoZWlnaHQgOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0V2l0aFNoYWRvdyA6IHtcclxuICAgICAgY29sb3I6JyNmZmYnLFxyXG4gICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgICBmb250U2l6ZTonNHJlbScsXHJcbiAgICAgIG1hcmdpbkxlZnQ6JzJ2dycsXHJcbiAgICAgIHRleHRTaGFkb3c6ICcxcHggNXB4IDVweCAjOWU5OTk5J1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uQm94IDoge1xyXG4gICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIG1heFdpZHRoIDogJzUwdncnLFxyXG4gICAgICBtYXJnaW4gOiAnMCAwIDAgM3Z3J1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTcwcHggMHB4J1xyXG4gICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxGYWRlIGluPXtncm93fSAgdGltZW91dD17e2VudGVyOjIwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgIDxDcm9zc2xpbmU+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29Cb3h9PlxyXG4gICAgICAgICAgICA8RmFkZSBpbj17Z3Jvd30gey4uLihncm93PyB7dGltZW91dDp7ZW50ZXI6NTAwMCwgZXhpdDo4MDB9fSA6IHt9KX0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9J2hlbHAnIHNyYz17bW9vbkltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuYmlnQXZhdGFyfS8+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdidXR0b24nIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0V2l0aFNoYWRvd30+IE1hbmFnZW1lbnQgQXBwIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9uQm94fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPkFuIGFwcGxpY2F0aW9uIHRoYXQgeW91IGNhbiBlYXNpbHkgY3JlYXRlICYgZGVzaWduIHlvdXIgb3duIGRhdGEuPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+R2V0IHN0YXJ0ZWQgd2l0aCB5b3VyIEdvb2dsZSBhY2NvdW50ITwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPlRoaXMgYXBwIHdpbGwgbm90IGtlZXAgYW55IHBlcnNvbmFsIGluZm9ybWF0aW9uLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Dcm9zc2xpbmU+XHJcbiAgICAgICAgICA8UHJvamVjdERlc2NyaXB0aW9uLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtUeXBvZ3JhcGh5ICwgU3RlcHBlciwgU3RlcCwgQm94LCBTdGVwTGFiZWx9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHNsaWRlU291cmNlIGZyb20gJy4vSW1hZ2VTbGlkZVNvdXJjZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJ1xyXG4gICAgfSxcclxuICAgIGlubGluZToge1xyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVzY3JpcHRpb25MaXN0ICh7c3RlcHBlcn0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e3N0ZXBwZXJ9IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidpbmhlcml0J319PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlU291cmNlLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXAgY29tcGxldGVkPXtpbmRleCA8IHN0ZXBwZXJ9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXBMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxyXG4gICAgICAgICAgICAgICAgICAgICl9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1N0ZXBwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdGFydEJ1dHRvbiBmcm9tIFwiLi9TdGFydEJ1dHRvblwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2Rlc2suanBnXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICByb290TWFyZ2luIDogJy0zNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudCA/ICdXRUxDT01FJyA6ICdSZWFkeSB0byBzdGFydD8nfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50PyBudWxsIDogKDxTdGFydEJ1dHRvbi8+KX1cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7QnV0dG9uICwgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFBsYXlBcnJvd1NoYXJwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICcwLjV2aCdcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcycHggMXB4IDFweCBncmF5JyxcclxuICAgICAgICBjb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9tYW5hZ2VtZW50JyBzdHlsZT17e3RleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFBsYXlBcnJvd1NoYXJwIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRTaXplIDogMzB9fS8+fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFycm93LmQwODMyOGY2MmQxOWI2NmY4ZWE4ZDZkMDA2NzI0YzhiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJibGFjay4zZjAyYTEzMjczODcwMDIyNmM4NGVkMWY1ODYzZDU5YS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGVzay4zMjA3YzFlZjk0Yzg2N2Y4MGIwZTlkZjZhYzc4ZDUyYi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWFzeS1sb2dpbi4zZTkxYjhkODg3MzU2ODkwNzlhZmQwNzZlM2UwNzQyMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaGFuZGxlLXRhYmxlLjNjNTg2OTE0YTk2ZDRhZmVkZGM1YzdhZDNkN2RmMzU0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsaW5rLW1hbmFnZW1lbnQtcGFnZS40ODAwNGQxMzNiNWZjMjI1Nzc3MDRjOTVlYjM1ZjNkOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFrZS1oZWFkZXJzLmNmZmFjNjM0ZjI5ZDM4ZGRiZDFmNDQ2N2E1NzNlYmM0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYW5hZ2VtZW50LWJhY2tncm91bmQuYTAwOGRlODEzOTU4MWIwZGFiZjE4MzJlZDFjOWM0NmUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1vb24uZjIwNmJjM2Q1YmU4MzExYzc3ZDk4OTdkYTQ0ZTFmNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm15bWVudS45ZmRkNThhY2E3NGViNDhkOTU1ZjgzNWM5ZWM4Nzk2ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2xpZGUwLjBhYTI5NWEzYjdiNGQzMDEzMjg2ZjUyNGM0NzY0Y2Q3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGFydC1yaWdodC1hd2F5LjRlMjE3MjYyZDJjOGQ4NmQ1ZTBmNmVlNDMyYWVmYmNmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ3aGl0ZS1hcnJvdy5jNDQyMmE3YmM1ZWUyM2QwODFiMzU2NmY5M2U5MWYxZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2hpdGViYWNrZ3JvdW5kLmZiMTQwZjVlODEwZGMyMTQ2ZGFkMWI2ZjAzY2FmOWM4LmpwZ1wiOyIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICAoPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8QXBwLz5cclxuICAgIDwvQ29va2llc1Byb3ZpZGVyPilcclxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmFkZSwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBjb250YWluZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfSxcclxuICAgIGJ1dHRvbkNvbnRhaW5lciA6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzAuNXB4IDAuNXB4IDFweCAjMDAwMDAwNWMnLFxyXG4gICAgICAgIG1hcmdpbiA6ICcwIDF2dyAxLjd2aCcsXHJcbiAgICAgICAgY29sb3I6ICcjNmE3NDhjJyxcclxuICAgIH0sXHJcbn0pKTtcclxuY29uc3QgZGVmYXVsdERhdGEgPSB7XHJcbiAgICBjb2x1bW5zIDogW1xyXG4gICAgICB7IHRpdGxlOiAnTmFtZScsIGZpZWxkOiAnTmFtZScgLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHsgdGl0bGU6ICdTdXJuYW1lJywgZmllbGQ6ICdTdXJuYW1lJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnQmlydGggWWVhcicsIGZpZWxkOiAnQmlydGggWWVhcicgfSxcclxuICAgICAgeyB0aXRsZTogJ1Bob25lJyAsIGZpZWxkOidQaG9uZScsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnR2VuZGVyJyxcclxuICAgICAgICBmaWVsZDogJ0dlbmRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdNZW1vJyAsIGZpZWxkOidNZW1vJ31cclxuICAgIF0sXHJcbiAgICBkYXRhIDogW1xyXG4gICAgICB7IFwiTmFtZVwiOiAnTWVobWV0JywgJ1N1cm5hbWUnOiAnQmFyYW4nLCBcIkJpcnRoIFllYXJcIjogMTk4MywgXCJQaG9uZVwiOicwMTA0NjUwOTk5NScgLFwiR2VuZGVyXCI6IDEgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdBZGFtJywgJ1N1cm5hbWUnOiAnQWRhbScsIFwiQmlydGggWWVhclwiOiAxOTg0LCBcIlBob25lXCI6JzAxMDQ2NTA5Nzk1JyAsXCJHZW5kZXJcIjogMiAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ01laG1ldCcsICdTdXJuYW1lJzogJ0F0b20nLCBcIkJpcnRoIFllYXJcIjogMTk4NSwgXCJQaG9uZVwiOicwMTA0NjUwOTY5NScgLFwiR2VuZGVyXCI6IDEgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdtdWwnLCAnU3VybmFtZSc6ICdLb25nbmEnLCBcIkJpcnRoIFllYXJcIjogMTk4NiwgXCJQaG9uZVwiOicwMTA0NjUwOTE5NScgLFwiR2VuZGVyXCI6IDEgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdKYWNrJywgJ1N1cm5hbWUnOiAnSmFjaycsIFwiQmlydGggWWVhclwiOiAxOTg3LCBcIlBob25lXCI6JzAxMDQ2NTA5Mjk1JyAsXCJHZW5kZXJcIjogMiAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ0JvYicsICdTdXJuYW1lJzogJ0JvYicsIFwiQmlydGggWWVhclwiOiAxOTg4LCBcIlBob25lXCI6JzAxMDQ2NTA5Mzk1JyAsXCJHZW5kZXJcIjogMiAsIFwiTWVtb1wiOicnfSxcclxuICAgIF1cclxuICB9XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmF1bHRQYWdlICh7c3RhdGUgLCBzZXRTdGF0ZSwgbWF0Y2h9KSB7XHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmFkZTIsIHNldEZhZGUyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uREVNT0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSAsIGNvbHVtbnMgOiBkZWZhdWx0RGF0YS5jb2x1bW5zICwgZGF0YSA6IGRlZmF1bHREYXRhLmRhdGEsIGRlZmF1bHRQYWdlIDogIXN0YXRlLmRlZmF1bHRQYWdlfSk7XHJcbiAgICB9XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2V0RmFkZTIodHJ1ZSkgLCAxNTAwKTtcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlciA6IDgwMCwgZXhpdDo1MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY29sb3I9J2luaXRpYWwnIHN0eWxlPXt7dGV4dFNoYWRvdzonNXB4IDEuNXB4IDEuNXB4IGdyYXknfX0+XHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VtZW50IFRhYmxlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBndXR0ZXJCb3R0b20gc3R5bGU9e3t0ZXh0U2hhZG93OicycHggMnB4IDFweCBibGFjayd9fT4gXHJcbiAgICAgICAgICAgICAgICBZb3UgbWF5IHRyeSB0aGUgREVNTyBpZiB0aGlzIHlvdXIgZmlyc3QgdGltZSwgXHJcbiAgICAgICAgICAgICAgICBvciBnZXQgc3RhcnRlZCByaWdodCBhd2F5IVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxGYWRlIGluPXtmYWRlMn0gdGltZW91dD17e2VudGVyIDogMzAwMCwgZXhpdDo1MDB9fT5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtoYW5kbGVPbkRFTU9DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVU0UgREVNTyBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2hlYWRlcnMnIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRVQgU1RBUlRFRCBSSUdIVCBBV0FZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBcclxuICAgIEJveCAsUGFwZXIsIG1ha2VTdHlsZXMsIEZhZGUsIFRleHRGaWVsZCwgVG9vbHRpcCwgVHlwb2dyYXBoeSwgQ2hlY2tib3hcclxufVxyXG4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZ1wiO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7IHNhdmVIZWFkZXJzIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tICcuLi91dGlsL01hbmFnZW1lbnRBUEknO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxMHZoJyxcclxuICAgIH0sXHJcbiAgICBmb3JtUm9vdCA6IHtcclxuICAgICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAuNXZoIDF2dycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNjBjaCcsXHJcbiAgICAgICAgICAgIG1pbldpZHRoIDogJzQwY2gnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMHZoJyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kIDogYG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvbnRhaW4nLFxyXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnM3Z3JyxcclxuICAgICAgICB0cmFuc2Zvcm0gOiAncm90YXRlKDkwZGVnKSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbiA6IHtcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJ1xyXG4gICAgfVxyXG59KSlcclxuY29uc3QgZGVmYXVsdEhlYWRlciA9IHtcclxuICAgIFwiaGVhZGVyMFwiIDogJycsXHJcbiAgICBcImhlYWRlcjFcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIyXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyM1wiIDogJycsXHJcbiAgICBcImhlYWRlcjRcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI1XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNlwiIDogJycsXHJcbiAgICBcImhlYWRlcjdcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI4XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOVwiIDogJycsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVycyAoe2lzTG9hZGluZ30pIHtcclxuICAgIC8vIHN0eWxlLCBjb29raWVcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICAvLyBzdGF0ZXNcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtyZXN1bHRTbmFjayAsIHNldFJlc3VsdFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlLCBjb250ZW50IDogJyd9KTtcclxuICAgIGNvbnN0IFtkYXRhICwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhZGVycyA6IGRlZmF1bHRIZWFkZXIsXHJcbiAgICAgICAgZ3JvdXBpbmdzIDogQXJyYXkoMTApLmZpbGwoZmFsc2UpLFxyXG4gICAgfSlcclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgZGF0YVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgLy8gY29uc3RydWN0b3JcclxuICAgIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgICAgICBnZXRNYW5hZ2VtZW50VGFibGUoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdMZW5ndGggPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyA/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzLmxlbmd0aCA6IDAgOiAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyBbLi4ucmVzcG9uc2UuZGF0YS5ncm91cGluZ3NdIDogW10gOiBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgLSBncm91cGluZ0xlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgOiB7fSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyc0xlbmd0aCA9IE9iamVjdC52YWx1ZXMoaGVhZGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGhlYWRlcnNMZW5ndGg7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tgaGVhZGVyJHtpfWBdID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7aGVhZGVycyxncm91cGluZ3N9O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoe2hlYWRlcnMsIGdyb3VwaW5nc30pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHsgIC8vIHVuYXV0aG9yaXplZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBQbGVhc2UgbG9nIGluIGFnYWluLmB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYGVycm9yIChjb2RlIDogJHtyZXNwb25zZS5zdGF0dXN9KWB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmhlYWRlcnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JvdXBpbmdzIDogW1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5ncm91cGluZ3NcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFtkYXRhLmhlYWRlcnMsIGRhdGEuZ3JvdXBpbmdzXSk7XHJcblxyXG4gICAgLy8gZWZmZWN0c1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57IFxyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU3VibWl0KGRhdGFSZWYuY3VycmVudC5oZWFkZXJzLCBkYXRhUmVmLmN1cnJlbnQuZ3JvdXBpbmdzLCB0cnVlKTtcclxuICAgICAgICAgICAgaGFuZGxlUHJvZ3Jlc3MocmVzdWx0ID09PSAnZXJyb3InID8gJ2Vycm9yJyA6ICdzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSk7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIC8vIGV2ZW50c1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChoZWFkZXJzLCBncm91cGluZ3MsIGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMoaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkpIHsgLy8gMTXquIDsnpAg7J207IOBIOygnO2VnCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLmxlbmd0aCA9PT0gMCkgeyAgICAgLy8g67mE7Ja07J6I7J2EIOqyveyasCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pXHJcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlSGVhZGVycyhoZWFkZXJzLGdyb3VwaW5ncylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNBdXRvU2F2ZSkgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLCBjb250ZW50IDogcmVzcG9uc2UucmVzdWx0fSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIFtgaGVhZGVyJHtpbmRleH1gXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlR3JvdXBpbmdzID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBncm91cGluZ3MgOiBkYXRhLmdyb3VwaW5ncy5tYXAoKHYsaSk9PiBpPT09aW5kZXg/IGUudGFyZ2V0LmNoZWNrZWQgOiB2KX0pO1xyXG4gICAgfVxyXG4gICAgLy8gY29tcG9uZW50XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlciA6IDE1MDB9fT5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs0fT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtUm9vdH0gYXV0b0NvbXBsZXRlPSdvZmYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdkaXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgY29sb3I9J3RleHRQcmltYXJ5JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgRWRpdCBGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29sb3I9e09iamVjdC52YWx1ZXMoZGF0YS5oZWFkZXJzKS5ldmVyeSh2ID0+IHYubGVuZ3RoIDw9IDE1KSA/ICdibHVlJyA6ICdyZWQnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb2xvcj0naW5pdGlhbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIHNob3VsZCBiZSBsZXNzIHRoYW4gMTUgbGV0dGVycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLm1hcCgoaGVhZGVyLGluZGV4KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aW5kZXg9PT0wPyB0cnVlOmZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2BoZWFkZXItJHtpbmRleCsxfWB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5oZWFkZXJzW2BoZWFkZXIke2luZGV4fWBdfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPSdub3JtYWwnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dENoYW5nZShlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF0ubGVuZ3RoID4gMTUgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJcclxuWW91IGNhbiBhcnJhbmdlIHRoZSBkYXRhIHdpdGggYSB2YWxpZCBoZWFkZXIsIFxyXG5VbmlxdWUgdmFsdWVzIGFyZSBub3QgY29tbW9ubHkgdXNlZCBmb3IgdGhpcyBmdW5jdGlvbiBpbiBnZW5lcmFsLlxyXG5lLmcuKSBuYW1lLCBhZGRyZXNzLCBtb2JpbGUgTk8uIGV0Yy5cclxuXCJcclxuICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J3JpZ2h0JyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezIwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RhdGEuZ3JvdXBpbmdzW2luZGV4XX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlR3JvdXBpbmdzKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4PT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+IEdyb3VwaW5nIT88L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTVUJNSVRcIiBhcmlhLWxhYmVsPSdzdWJtaXQnIHBsYWNlbWVudD0ndG9wJyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezQwMH0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbk1vdXNlT3Zlcj17KGUpPT5lLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlU3VibWl0KGRhdGEuaGVhZGVycyAsIGRhdGEuZ3JvdXBpbmdzKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e2BIZWFkZXIgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNSBsZXR0ZXJzIDooYH0gc3RhdHVzPVwiZXJyb3JcIi8+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3Jlc3VsdFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRSZXN1bHRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtyZXN1bHRTbmFjay5jb250ZW50fSBzdGF0dXM9e3Jlc3VsdFNuYWNrLnN0YXR1cz09PSdlcnJvcic/ICdlcnJvcicgOiAnc3VjY2Vzcyd9Lz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSc7XHJcbmltcG9ydCBNYW51YWxEaWFsb2cgZnJvbSBcIi4vTWFudWFsRGlhbG9nXCI7XHJcbmltcG9ydCB7IG9wdGlvbnMsbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vVGFibGVPcHRpb25zXCI7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IERlZmF1bHRQYWdlIGZyb20gJy4vRGVmYXVsdFBhZ2UnO1xyXG5pbXBvcnQgcGFyc2VEYXRhIGZyb20gJy4uL3V0aWwvcGFyc2VEYXRhJztcclxuaW1wb3J0IFNhdmVCdXR0b24gZnJvbSAnLi9TYXZlQnV0dG9uJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG4vLyB1c2VFZmZlY3TroZwgZGF0YSwgY29sdW1ucyDqsIAg67OA6rK965CgIOuVjOuniOuLpCDshJzrsoTsl5Ag7KCA7J6lIO2bhCDqsLHsi6BcclxuLy8gLi91dGlsIOqyveuhnOyXkCDroZzsp4Eg7J6R7ISxXHJcbi8vIO2GteyLoOyXkCDrjIDtlZwgdGVzdGNvZGXsnpHshLFcclxuLy8gY29sdW1uc+yZgCBkYXRh7J2YIOqwgSDqsJLrk6Tsl5Ag64yA7ZWcIOustOqysOyEsSDssrTtgaxcclxuLy8gcHJvcHNUeXBlIOyekeyEsVxyXG4vLyBTaWRlTWVudUxpc3QgPT4gTG9naW7snLzroZwg67OA6rK9LCDruYTroZzqt7jsnbgg7IucIExPR0lO7Jy866GcIOuztOydvCDqsoMsIOuhnOq3uOyduOyLnCBNWSBNRU5V66GcIOuztOq4sFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnRUYWJsZSh7aXNMb2FkaW5nfSkge1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IFJlYWN0LnVzZUNvbnRleHQoUHJvZ3Jlc3NDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gIC8vIHN0YXRlc1xyXG4gIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pO1xyXG4gIGNvbnN0IFtzYXZlZFNuYWNrICwgc2V0U2F2ZWRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gIGNvbnN0IFtlcnJvclNuYWNrICwgc2V0RXJyb3JTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gIGNvbnN0IFtkaWFsb2csIHNldERpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7ICAvLyDstZzstIggQVBJ66GcIOuwm+yVhOyYpOuKlCDrj5nsnpHtlYTsmpRcclxuICAgIGRlZmF1bHRQYWdlIDogdHJ1ZSxcclxuICAgIGhhc1RhYmxlIDogZmFsc2UsXHJcbiAgICBjb2x1bW5zOiBbXSxcclxuICAgIGRhdGE6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRhYmxlUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgaWYgKGNvb2tpZXMudXNlcikgeyAgIC8vIOy/oO2CpOyXkCDthqDtgbDsnbQg7J6I7J2EIOqyveyasCDthYzsnbTruJQgZmV0Y2ggQVBJ7Iuk7ZaJXHJcbiAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXMgOiAke3Jlc3BvbnNlLnN0YXR1c30gLCBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKTtcclxuICAgICAgICAgIC8vIOycoOyggCDtmZXsnbjrkJDqs6Ag7YWM7J2067iU64+EIOu5hOyWtOyeiOyngCDslYrsnYQg6rK97JqwXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzPT09MjAwICYmIHJlc3BvbnNlLmRhdGEuaGVhZGVycykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57c2V0U25hY2soe29wZW46dHJ1ZX0pfSw0MDApO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgY29sdW1ucyA6IHBhcnNlRGF0YShyZXNwb25zZS5kYXRhLmhlYWRlcnMgLCByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyksXHJcbiAgICAgICAgICAgICAgZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICBkZWZhdWx0UGFnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGhhc1RhYmxlIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIGV2ZW50c1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge3NldERpYWxvZyh7b3BlbiA6IGZhbHNlfSk7fTtcclxuICBjb25zdCBoYW5kbGVPblNhdmUgPSAoaXNBdXRvU2F2ZSkgPT4ge1xyXG4gICAgICAvLyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIOydmCByZWbsl5DshJwg7Iug66Kw64+E7J6I64qUIOuNsOydtO2EsCDssLjsobBcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICBjb25zdCBncm91cGluZ3MgPSBbXTtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgb2JqW2BoZWFkZXIke2l9YF0gPSB2LnRpdGxlO1xyXG4gICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgIH0se30pXHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuZGF0YS5mb3JFYWNoKCh2LGkpPT57XHJcbiAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNhdmVEYXRhKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSk7XHJcbiAgICAgIGlmKCFpc0F1dG9TYXZlKSBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gZWZmZWN0c1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7ICAgLy8gd2luZG93IOuNlOu4lO2BtOumrSDsnbTrsqTtirgg7LaU6rCALCDrj4Tsm4Drp5Agb3BlblxyXG4gICAgY29uc3Qgb25kYkNsaWNrID0gKCkgPT4gc2V0RGlhbG9nKHtvcGVuIDogIWRpYWxvZy5vcGVufSk7XHJcbiAgICBjb25zdCBvbktleWRvd24gPSAoZSkgPT4geyAgIC8vIGN0cmwgKyBz66GcIOyggOyepSBldmVudFxyXG4gICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKFwiTWFjXCIpID8gZS5tZXRhS2V5IDogZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlT25TYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgICAvLyDstIjquLDsoJHqt7zsnZgg6rK97JqwIOuNsOydtO2EsOqwgCDsl4bslrQg7JeQ65+sIOuwnOyDne2VoCDsiJgg7J6I7Ja0IOyCvO2VreyLneycvOuhnCDtjJDri6gg7ZuEIOyWuOuniOyatO2KuOyLnOydmCBmZXRjaEFQSeyLpO2WiVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZU9uU2F2ZSh0cnVlKSA6IG51bGwgOiBudWxsO1xyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZVByb2dyZXNzKCdzdWNjZXNzJykgOiBudWxsIDogbnVsbDtcclxuICB9O1xyXG59LCBbXSk7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbiAgY29uc3QgTWFyZ2luID0gKCkgPT4gKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PjwvQm94Pik7ICAvLyDsl6zrsLFcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgIHtcclxuICAgIHN0YXRlLmRlZmF1bHRQYWdlID9cclxuICAgICAgKDxEZWZhdWx0UGFnZSBzdGF0ZT17c3RhdGV9IHNldFN0YXRlPXtzZXRTdGF0ZX0vPilcclxuICAgIDogXHJcbiAgICAoPEJveD5cclxuICAgICAgICA8TWFudWFsRGlhbG9nIG9wZW49e2RpYWxvZy5vcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0vPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICB0YWJsZVJlZj17dGFibGVSZWZ9XHJcbiAgICAgIHRpdGxlPXtcclxuICAgICAgPFNhdmVCdXR0b24gc2V0U2F2ZWRTbmFjaz17c2V0U2F2ZWRTbmFja30gXHJcbiAgICAgIC8vIOuniOyatO2KuCDsnbTtm4Tsl5Ag7KCR6re87ZWE7JqUXHJcbiAgICAgIGRhdGFNYW5hZ2VyPXt0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA6IHt9fS8+XHJcbiAgICB9XHJcbiAgICAgIGNvbHVtbnM9e3N0YXRlLmNvbHVtbnN9XHJcbiAgICAgIGRhdGE9e3N0YXRlLmRhdGF9XHJcbiAgICAgIGxvY2FsaXphdGlvbj17bG9jYWxpemF0aW9ufSAvLyDroZzsu6zrnbzsnbTspohcclxuICAgICAgb3B0aW9ucz17b3B0aW9uc30gLy8g64K067O064K06riwLCDqt7jro6jtlZFcclxuICAgICAgYWN0aW9ucz17Wy8vIOupgO2LsCDshYDroInshZgg7J6R7JeFXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b29sdGlwIDogJ1JlbW92ZSB0aGUgU2VsZWN0ZWQgcm93KHMpJyxcclxuICAgICAgICAgICAgaWNvbiA6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICBvbkNsaWNrIDogKGUgLCBkZWxldGlvbnMpID0+IHsgIC8vIOyEoO2Dne2VnCDssrTtgazrsJXsiqTsl5Ag64yA7ZW0IOuqqOuRkCDsgq3soJwg7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZih2KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZEYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucHJldkRhdGEgLCBkYXRhfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdfSBcclxuICAgICAgZWRpdGFibGU9e3tcclxuICAgICAgICBvblJvd0FkZDogKG5ld0RhdGEpID0+ICAvLyDstpTqsIBcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgb25Sb3dVcGRhdGU6IChuZXdEYXRhLCBvbGREYXRhKSA9PiAgLy8g7IiY7KCVXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAob2xkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgICAgZGF0YVtkYXRhLmluZGV4T2Yob2xkRGF0YSldID0gbmV3RGF0YTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nbmVlZCBzb21lIGhlbHA/ID8gZG91YmxlLWNsaWNrIGFueSBzcGFjZSAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NhdmVkU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNhdmVkU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdTQVZFRCAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2Vycm9yU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldEVycm9yU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdFUlJPUiAhJyBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgIDwvQm94PlxyXG4gICAgKX1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufSIsIlxyXG5pbXBvcnQge0RpYWxvZyxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgQm94LFxyXG4gICAgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gICAgaWNvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICczdncnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbnVhbERpYWxvZyAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge29wZW4sIG9uQ2xvc2V9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpY29ucyA9IFtcclxuICAgICAgICB7aWNvbiA6ICdhZGRfYm94JyAsIGRlc2NyaXB0aW9uIDogJ1tBZGRdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJ1tFZGl0XSByZWNvcmRzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NlYXJjaCcgLCBkZXNjcmlwdGlvbiA6ICdUeXBlIGRvd24gd29yZHMgdG8gW3NlYXJjaF0uJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2F2ZV9hbHQnICwgZGVzY3JpcHRpb24gOiAnW0Rvd25sb2FkXSBmaWxlcyBpbiBDVlMgZm9ybWF0Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ3ZpZXdfd2VlaycgLCBkZXNjcmlwdGlvbiA6ICdbU2VsZWN0XSBjb2x1bW5zIHRvIGJlIGRpc3BsYXllZCd9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtkZWxldGVdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY2hlY2tfYm94JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgU2VsZWN0IHRoZSBjaGVja2JveCBvbiB0aGUgcm93Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ2ZhY3RfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDaGVjayB0aGUgbnVtYmVyIG9mIHRoZSByb3dzIHNlbGVjdGVkLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2RlbGV0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGiIENsaWNrIHRoZSBCaW4gaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUuJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW0VkaXRdIGhlYWRlcnMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnbWVudScgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIE9wZW4gTVlQQUdFJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2xpY2sgdGhlIFBlbmNpbCBpY29uJ30sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgb25DbG9zZT17b25DbG9zZX0gb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPiBCQVNJQyBNQU5VQUwgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbnMubWFwKChpY29uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17YCR7aWNvbn0gKyAke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17YG1hdGVyaWFsLWljb25zICR7Y2xhc3Nlcy5pY29ufWB9IHN0eWxlPXt7d2lkdGg6JzN2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aWNvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICA8L0RpYWxvZz5cclxuICAgIClcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtzZXRTYXZlZFNuYWNrICwgZGF0YU1hbmFnZXJ9KSB7XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrICgpIHtcclxuICAgICAgICAgIC8vIFNBVkUgRVZFTlQgdXRpbCA+IE1hbmFnZW1lbnRBUEkuc2F2ZURhdGEg66eM65Ok7Ja07IScIOy9nO2VmOq4sFxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICB9LHt9KTtcclxuICAgICAgICAgIGRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgIHJlc3VsdCA6IFxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShkYXRhKX1cclxuICAgICAgICAgICR7Z3JvdXBpbmdzfVxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgICAgICBgKVxyXG4gICAgICAgIHNhdmVEYXRhKGhlYWRlcnMsZ3JvdXBpbmdzLGRhdGEpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8VG9vbHRpcCB0aXRsZT0nQ2xpY2sgdG8gU0FWRSAoIEN0cmwgKyBTICknPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBcclxuICAgICAgICBvbkNsaWNrPXsoKT0+b25DbGljaygpfT5cclxuICAgICAgICAgIFNBVkVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtBZGRCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbi8vIERBVEEgVEFCTEUgT1BUSU9OU1xyXG5cclxuIGV4cG9ydCBjb25zdCBvcHRpb25zPSB7XHJcbiAgICBleHBvcnRCdXR0b246IHRydWUsXHJcbiAgICBncm91cGluZzp0cnVlLFxyXG4gICAgc2VsZWN0aW9uOnRydWUsXHJcbiAgICBoZWFkZXJTdHlsZTp7IFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uc0NvbHVtbkluZGV4Oi0xLCAgLy8g7JWh7IWYIOyVhOydtOy9mOychOy5mFxyXG4gICAgY29sdW1uc0J1dHRvbiA6IHRydWUsIFxyXG4gICAgZGVib3VuY2VJbnRlcnZhbCA6IDE2MCwgLy8g66Gc65Sp7Iuc6rCEXHJcbiAgICBwYWdlU2l6ZSA6IDE1LCAgICAgICAgICAvLyDtjpjsnbTsp4DsgqzsnbTspohcclxuICAgIHBhZ2VTaXplT3B0aW9ucyA6IFs1LCAxNSwgMzAsIDUwLCAxMDBdLCAvLyDtjpjsnbTspogg7IKs7J207KaIIOyiheulmFxyXG4gIH1cclxuIGV4cG9ydCBjb25zdCBsb2NhbGl6YXRpb24gPSB7XHJcbiAgICBwYWdpbmF0aW9uIDogeyBsYWJlbERpc3BsYXllZFJvd3MgOiAne2NvdW50fSByb3dzIHwge2Zyb219LXt0b30nICwgfSxcclxuICAgIHRvb2xiYXI6IHtuUm93c1NlbGVjdGVkOiAnezB9IHJvdyhzKSBzZWxlY3RlZCd9LFxyXG4gICAgaGVhZGVyOiB7YWN0aW9uczogJ0VkaXQnfSxcclxuICAgIGJvZHk6IHtlbXB0eURhdGFTb3VyY2VNZXNzYWdlOiBcclxuICAgICAgICAoXHJcbiAgICAgICAgPEJveCBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICB7YE5vIFJlY29yZHMgdG8gZGlzcGxheWB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgZW5kSWNvbj17PEFkZEJveC8+fVxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2BDbGljayB0aGUgcGx1cyBpY29uIG9uIHRoZSByaWdodCBhYm92ZSBmb3IgYSBuZXcgcmVjb3JkLiBgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gIH1cclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7VG9vbGJhciwgRHJhd2VyICwgQnV0dG9uICwgR3JpZCxcclxuICAgICBEaXZpZGVyLCBBcHBCYXIgYXMgQXBwYmFyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBIaWRlT25TY2hyb2xsIGZyb20gXCIuLi9jdXN0b21Ib29rL0hpZGVPblNjaHJvbGxcIjtcclxuaW1wb3J0IFNpZGVNZW51TGlzdCBmcm9tIFwiLi9TaWRlTWVudUxpc3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBTaWduT3V0QnV0dG9uIGZyb20gXCIuL1NpZ25PdXRCdXR0b25cIjtcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBhbGlnbkl0ZW1zOidmbGV4LXN0YXJ0JyxcclxuICAgICAgICBwYWRkaW5nVG9wOjE4LFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206MTgsXHJcbiAgICB9LFxyXG4gICAgbGVmdCA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBwYWRkaW5nTGVmdDozMCxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LXN0YXJ0J1xyXG4gICAgfSxcclxuICAgIGNlbnRlciA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICByaWdodCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDo0NSxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LWVuZCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIHBhZGRpbmc6YDAgJHt0aGVtZS5zcGFjaW5nKDMpfWBcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYgKHByb3BzKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBtZW51IDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3IsIG9wZW4pID0+IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZsYWcgPSBvcGVuPyBzdGF0ZVthbmNob3JdID8gZmFsc2UgOiB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IGZsYWcgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgYW5jaG9yID0gcHJvZmlsZS5uYW1lPyAnTVlQQUdFJyA6J0xPR0lOJztcclxuICAgIGNvbnN0IGxpbmtzID0gWydib2FyZCcsJ21hbmFnZW1lbnQnXTtcclxuICAgIGNvbnN0IExvZ291dEJ0biA9IHByb2ZpbGUubmFtZT8gPFNpZ25PdXRCdXR0b24vPiA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhpZGVPblNjaHJvbGwgey4uLnByb3BzfT5cclxuICAgICAgICA8QXBwYmFyIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2JveFNoYWRvdzonbm9uZSd9fT5cclxuICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4gSG9tZSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke2xpbmt9YH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319IGtleT17bGlua30+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IHtsaW5rfSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50ZXJ9PjxzcGFuPjwvc3Bhbj48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIHRydWUpfSBzdHlsZT17e21hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthbmNob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge0xvZ291dEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyIG9wZW49e3N0YXRlW2FuY2hvcl19IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gdmFyaWFudD0ncGVyc2lzdGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtTaWRlTWVudUxpc3QoIHsuLi5wcm9wcywgYW5jaG9yICx0b2dnbGVEcmF3ZXIgLCBwcm9maWxlfSApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcGJhcj5cclxuICAgICAgICA8L0hpZGVPblNjaHJvbGw+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtVGV4dCwgTGlzdEl0ZW1BdmF0YXIgLCBEaXZpZGVyLCBMaXN0SXRlbSwgVHlwb2dyYXBoeSAsIEF2YXRhciwgSWNvbkJ1dHRvbiAsXHJcbiAgICAgTW9kYWwsIEJveCwgQnV0dG9uLFxyXG4gICAgIFBhcGVyLFxyXG4gICAgIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgU2lnbkluQnV0dG9uIGZyb20gJy4vU2lnbkluQnV0dG9uJztcclxuaW1wb3J0IGdvb2dsZVNpZ25pbkltYWdlIGZyb20gJy4uL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmcnO1xyXG5pbXBvcnQge3JlZGlyZWN0R29vZ2xlTG9naW59IGZyb20gJy4uL3V0aWwvTG9naW5BUEknO1xyXG5pbXBvcnQge0VkaXQsIEluZm8sIERlbGV0ZUZvcmV2ZXIsIFdhcm5pbmd9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHtHbG9iYWxTbmFja2JhckNvbnRleHR9IGZyb20gJy4uL2FwcCdcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbGlzdCA6IHtcclxuICAgICAgICB3aWR0aCA6ICcyM3Z3JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdzdGFydCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW0gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW1UZXh0IDoge1xyXG4gICAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYXJnZUF2YXRhciA6IHtcclxuICAgICAgICB3aWR0aCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgIH0sXHJcbiAgICBpbmxpbmUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdpbmxpbmUnXHJcbiAgICB9LFxyXG4gICAgbGlzdFRleHQgOiB7XHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbW9kYWwgOiB7XHJcbiAgICAgICAgdG9wIDogJzUwJScsXHJcbiAgICAgICAgbGVmdCA6ICc1MCUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICBtaW5XaWR0aCA6IDQwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBtb2RhbFJvd0JveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsQ29sQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdzdGFydCdcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJ1xyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUxpc3QgKHthbmNob3IgLCB0b2dnbGVEcmF3ZXIsIHByb2ZpbGV9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBoYW5kbGVHbG9iYWxTbmFja2JhciA9IFJlYWN0LnVzZUNvbnRleHQoR2xvYmFsU25hY2tiYXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtlbWFpbElucHV0LCBzZXRFbWFpbElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2tMb2dpbiAoKSB7XHJcbiAgICAgICAgcmVkaXJlY3RHb29nbGVMb2dpbigpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja01vZGFsID0gKCkgPT4gc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRFbWFpbElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbWFpbElucHV0ID09PSBwcm9maWxlLmVtYWlsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfsnbzsuZgnKTtcclxuICAgICAgICAgICAgc2F2ZURhdGEoe30sW10sW3t9XSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUdsb2JhbFNuYWNrYmFyKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuOnRydWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZGF0YS5yZXN1bHQgPT09ICdzdWNjZXNzJyA/ICdzdWNjZXNzJyA6ICdlcnJvcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sMTUwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlR2xvYmFsU25hY2tiYXIoe1xyXG4gICAgICAgICAgICAgICAgb3Blbjp0cnVlLCBcclxuICAgICAgICAgICAgICAgIHJlc3VsdDonZXJyb3InXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNMb2dnZWQgPSBwcm9maWxlPyBwcm9maWxlLm5hbWU/IHRydWUgOiBmYWxzZSA6IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxyXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXNMb2dnZWQ/ICdQUk9GSUxFJyA6ICdMT0dJTiBNRU5VJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuXHJcbiAgICAgICAgICAgIHtpc0xvZ2dlZD8gXHJcblxyXG4gICAgICAgICAgICAoPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtwcm9maWxlLnBpY3R1cmV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZUF2YXRhcn0gYWx0PXtwcm9maWxlLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvZmlsZS5uYW1lfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRleHR9PjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgdmFyaWFudD1cImluc2V0XCIgY29tcG9uZW50PVwibGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0VNQUlMIDogJyBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3NwYW4nIHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dFByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mbyBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3ttYXJnaW5SaWdodDonMXZ3J319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHNlY29uZGFyeT0nRURJVCBIRUFERVJTJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nZW5kJyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBjb2xvcj0ncHJpbWFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nIGNvbG9yPSdzZWNvbmRhcnknIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzF2dyd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBzZWNvbmRhcnk9J1JFTU9WRSBBTEwgREFUQScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J2VuZCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVyIGNvbG9yPSdzZWNvbmRhcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiDrqqjri6wgKi99XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIG9wZW49e21vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlT25DbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLWNvbnRlbnRzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxSb3dCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nc3RhcnQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJyBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlciBjb2xvcj0nc2Vjb25kYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtdGl0bGVcIiB2YXJpYW50PSdidXR0b24nIGRpc3BsYXk9J2Jsb2NrJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F1dGlvbiA6IHBlcm1hbmVudCBkZWxldGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxDb2xCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1jb250ZW50c1wiIHZhcmlhbnQ9J2JvZHkxJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BBbGwgZGF0YSB3aWxsIGJlIGRlbGV0ZWQgYW5kIGNhbm5vdCBiZSByZWNvdmVyZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgY29ycmVjdGx5IHRvIGNvbnRpbnVlLmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJz57cHJvZmlsZS5lbWFpbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFJvd0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPSdFLU1BSUwnIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAoPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8U2lnbkluQnV0dG9uIHNpZ25Jbj17Z29vZ2xlU2lnbmluSW1hZ2V9Lz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT4pfVxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMsQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5CdXR0b24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtzaWduSW59ID0gcHJvcHM7IC8vIOydtOuvuOyngFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2lnbklufSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT48L2ltZz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHAnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSAsIEljb25CdXR0b24sIFRvb2x0aXB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbG9nb3V0IDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6IDAsXHJcbiAgICAgICAgd2lkdGggOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGQnXHJcbiAgICB9LFxyXG4gIH0pKShUb29sdGlwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPSdMb2ctb3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3BhZGRpbmc6NH19IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD4gICAgXHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tIFwiLi9zZXJ2ZXJVUkxcIjtcclxuXHJcbi8vIEdvb2dsZSBPcGVuSUQgQ29ubmVjdCDsnbTsmqntlZjquLBcclxuLy8g7LC46rOgIOq4sOyIoOu4lOuhnOq3uCA6IGh0dHBzOi8vd3d3LmRhbGVzZW8uY29tL2dvb2dsZS1vaWRjL1xyXG5cclxuLy8gVVJMIGV4cG9ydFxyXG4vLyBzZXZlcuyXkOyEnCDrsJvsnYAgdXJs66GcIOumrOuLpOydtOugie2KuFxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RHb29nbGVMb2dpbiA9ICgpID0+IGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2xvZ2luYCkudGhlbihyZXMgPT4gbG9jYXRpb24uYXNzaWduKHJlcy5kYXRhKSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbkFuZFByb2ZpbGUgPSAodG9rZW4pID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vbG9naW5gLCB7dG9rZW59ICx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZSxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2U9PiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UuZGF0YSkpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSAnLi9zZXJ2ZXJVUkwnO1xyXG5cclxuLy8g7YWM7J2067iUIOuNsOydtO2EsCDrsJvslYTsmKTquLAgY29va2ll7JeQIOuLtOq4tCB0b2tlbuyCrOyaqVxyXG5leHBvcnQgY29uc3QgZ2V0TWFuYWdlbWVudFRhYmxlID0gICgpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbWFuYWdlbWVudGAse1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczp0cnVlXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlSGVhZGVycyA9IChoZWFkZXJzLCBncm91cGluZ3MpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBzYXZpbmcgaGVhZGVycyA6IFxyXG4gICAgaGVhZGVycyA6ICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9XHJcbiAgICBncm91cGluZ3MgOiAke0pTT04uc3RyaW5naWZ5KGdyb3VwaW5ncyl9YCk7XHJcbiAgICByZXR1cm4gKGF4aW9zLnB1dChgJHtzZXJ2ZXJVUkx9L2hlYWRlcnNgLCB7XHJcbiAgICAgICAgLy8gZGF0YVxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgZ3JvdXBpbmdzXHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pLnRoZW4ocmVzID0+IFByb21pc2UucmVzb2x2ZShyZXMuZGF0YSkpKTsgICAgLy8g7L+g7YKk7JmAIO2VqOq7mFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZURhdGEgPSAoaGVhZGVycywgZ3JvdXBpbmdzLCBkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLnB1dChgJHtzZXJ2ZXJVUkx9L2RhdGFgLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBncm91cGluZ3MsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMuZGF0YSlcclxuICAgIH0pKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IChoZWFkZXJzICwgZ3JvdXBpbmdzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYGRhdGEgcGFyc2luZyEhISFgKVxyXG4gICAgcmV0dXJuIChPYmplY3QudmFsdWVzKGhlYWRlcnMpLmZpbHRlcih2PT52KS5tYXAoKHZhbHVlLGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUgOiB2YWx1ZSxcclxuICAgICAgICBmaWVsZCA6IHZhbHVlLFxyXG4gICAgICAgIGdyb3VwaW5nIDogZ3JvdXBpbmdzW2luZGV4XVxyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfSIsImV4cG9ydCBkZWZhdWx0IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==