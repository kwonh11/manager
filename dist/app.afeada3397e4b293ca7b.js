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
/* harmony import */ var _images_background1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/background1.jpg */ "./src/images/background1.jpg");
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
      backgroundImage: "url(".concat(_images_background1_jpg__WEBPACK_IMPORTED_MODULE_5__["default"], ")"),
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
    console.log(tableRef.current.dataManager);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL1NuYWNrQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ3Jvc3NsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW1hZ2VTbGlkZVNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTGlzdENhcm91c2VsRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9TdGFydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Fycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQxLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JsYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Rlc2suanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZWFzeS1sb2dpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oYW5kbGUtdGFibGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFrZS1oZWFkZXJzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tb29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL215bWVudS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGFydC1yaWdodC1hd2F5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3doaXRlLWFycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvRGVmYXVsdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbnVhbERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9TYXZlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1RhYmxlT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZGVNZW51TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25JbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L1NpZ25PdXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9naW5BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTWFuYWdlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wYXJzZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc2VydmVyVVJMLmpzIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTG9nb3V0Q29udGV4dCIsIlByb2dyZXNzQ29udGV4dCIsIkdsb2JhbFNuYWNrYmFyQ29udGV4dCIsIkFwcCIsInFzIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHIiLCJpZF90b2tlbiIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm9wZW4iLCJyZXN1bHQiLCJnbG9iYWxTbmFja2JhciIsInNldEdsb2JhbFNuYWNrYmFyIiwidG9rZW4iLCJ1c2VyIiwicHJvZ3Jlc3NSZWYiLCJ1c2VSZWYiLCJoYW5kbGVCZWZvcmV1bmxvYWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJjbGVhckludGVydmFsIiwidXNlRWZmZWN0IiwiZ2V0VG9rZW5BbmRQcm9maWxlIiwidGhlbiIsImRhdGEiLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhdGgiLCJtYXhBZ2UiLCJlcnIiLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsInBhcGVyIiwiYmFja0xvZ28iLCJqdXN0aWZ5U2VsZiIsImlucHV0Qm94IiwibWFyZ2luVG9wIiwiQm9hcmQiLCJjbGFzc2VzIiwiaW5wdXRSZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwidiIsInNocmluayIsIkhpZGVPblNjcm9sbCIsImNoaWxkcmVuIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJMb2FkaW5nIiwib25DbG9zZSIsImNvbnRlbnQiLCJzdGF0dXMiLCJkaXJlY3Rpb24iLCJmb250U2l6ZSIsInVzZU9uRmlyc3RSZW5kZXIiLCJmdW5jIiwiaXNGaXJzdFJlZiIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInJvb3QiLCJtaW5IZWlnaHQiLCJmb290ZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwiZ3JleSIsInRleHRBbGlnbiIsImFycm93IiwiYWxpZ25TZWxmIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZFNpemUiLCJTdGlja3lGb290ZXIiLCJwYXRobmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInRyYW5zaXRpb24iLCJ0YXJnZXQiLCJzdHlsZSIsImN1cnNvciIsImJhY2tncm91bmRJbWFnZSIsIm1hbmFnZW1lbnRCYWNrZ3JvdW5kIiwidHJhbnNmb3JtIiwid2hpdGVBcnJvdyIsIkltYWdlQ2Fyb3VzZWwiLCJpbWFnZUxpc3QiLCJsaXN0Iiwic2V0U3RlcHBlciIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImhhbmRsZUFmdGVyU2xpZGUiLCJzbGlkZUluZGV4IiwiaW5kZXgiLCJtYXAiLCJpbWFnZSIsImJhY2tncm91bmRDb2xvciIsInRleHRTaGFkb3ciLCJzcmMiLCJmbGV4V3JhcCIsIkNyb3NzbGluZSIsImZhZGUiLCJzZXRGYWRlIiwiZG9tUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZW50ZXIiLCJleGl0IiwiaW5uZXJCb3giLCJEZXNjcmlwdGlvbiIsImdyb3ciLCJzZXRHcm93IiwidHJhbnNmb3JtT3JpZ2luIiwidGltZW91dCIsImFwcGVhciIsIkhvbWUiLCJlYXN5TG9naW4iLCJkZXNjcmlwdGlvbiIsImxpbmtNYW5hZ2VtZW50UGFnZSIsInN0YXJ0UmlnaHRBd2F5IiwibWFrZUhlYWRlcnMiLCJoYW5kbGVUYWJsZSIsInVzZU15bWVudSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJ0ZXh0UGFwZXIiLCJJbnRyb2R1Y3Rpb24iLCJzdGVwcGVyIiwibG9nb0JveCIsImJpZ0F2YXRhciIsInRleHRXaXRoU2hhZG93IiwibWFyZ2luTGVmdCIsImRlc2NyaXB0aW9uQm94IiwibW9vbkltYWdlIiwiaW5saW5lIiwiRGVzY3JpcHRpb25MaXN0Iiwic2xpZGVTb3VyY2UiLCJpdGVtIiwiYWxpZ25Db250ZW50IiwiTWFpbiIsInVzZVN0eWxlIiwiYnV0dG9uIiwidGV4dCIsInR5cG9ncmFwaHkiLCJ0ZXh0RGVjb3JhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbkNvbnRhaW5lciIsImRlZmF1bHREYXRhIiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJncm91cGluZyIsIkRlZmF1bHRQYWdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiZmFkZTIiLCJzZXRGYWRlMiIsImhhbmRsZU9uREVNT0NsaWNrIiwiZGVmYXVsdFBhZ2UiLCJzZXRUaW1lb3V0IiwiZm9ybVJvb3QiLCJkZWZhdWx0SGVhZGVyIiwiSGVhZGVycyIsImhhbmRsZVByb2dyZXNzIiwidXNlQ29udGV4dCIsInNuYWNrIiwic2V0U25hY2siLCJyZXN1bHRTbmFjayIsInNldFJlc3VsdFNuYWNrIiwiaGVhZGVycyIsImdyb3VwaW5ncyIsIkFycmF5IiwiZmlsbCIsInNldERhdGEiLCJkYXRhUmVmIiwiZ2V0TWFuYWdlbWVudFRhYmxlIiwicmVzcG9uc2UiLCJncm91cGluZ0xlbmd0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwiaGVhZGVyc0xlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImhhbmRsZUxvZ291dCIsImhhbmRsZVN1Ym1pdCIsImhyZWYiLCJvcmlnaW4iLCJpc0F1dG9TYXZlIiwiZXZlcnkiLCJmaWx0ZXIiLCJzYXZlSGVhZGVycyIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJoYW5kbGVHcm91cGluZ3MiLCJjaGVja2VkIiwiaGVhZGVyIiwiTWFuYWdlbWVudFRhYmxlIiwic2F2ZWRTbmFjayIsInNldFNhdmVkU25hY2siLCJlcnJvclNuYWNrIiwic2V0RXJyb3JTbmFjayIsImRpYWxvZyIsInNldERpYWxvZyIsImhhc1RhYmxlIiwidGFibGVSZWYiLCJwYXJzZURhdGEiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZU9uU2F2ZSIsImRhdGFNYW5hZ2VyIiwicmVkdWNlIiwib2JqIiwidGFibGVEYXRhIiwicmVzdCIsInNhdmVEYXRhIiwib25kYkNsaWNrIiwib25LZXlkb3duIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJtZXRhS2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1hcmdpbiIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJldkRhdGEiLCJvblJvd0FkZCIsIm5ld0RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZXZTdGF0ZSIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsIk1hbnVhbERpYWxvZyIsImljb25zIiwiZXhwb3J0QnV0dG9uIiwic2VsZWN0aW9uIiwiaGVhZGVyU3R5bGUiLCJhY3Rpb25zQ29sdW1uSW5kZXgiLCJjb2x1bW5zQnV0dG9uIiwiZGVib3VuY2VJbnRlcnZhbCIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwicGFnaW5hdGlvbiIsImxhYmVsRGlzcGxheWVkUm93cyIsInRvb2xiYXIiLCJuUm93c1NlbGVjdGVkIiwiYWN0aW9ucyIsImJvZHkiLCJlbXB0eURhdGFTb3VyY2VNZXNzYWdlIiwiZmxleEdyb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxlZnQiLCJwYWRkaW5nTGVmdCIsImp1c3RpZnkiLCJjZW50ZXIiLCJyaWdodCIsInBhZGRpbmdSaWdodCIsIk5hdiIsIm1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJldmVudCIsImZsYWciLCJsaW5rcyIsIkxvZ291dEJ0biIsImJveFNoYWRvdyIsImxpbmsiLCJtYXJnaW5SaWdodCIsIlNpZGVNZW51TGlzdCIsImxpc3RJdGVtIiwibGlzdEl0ZW1UZXh0IiwibGFyZ2VBdmF0YXIiLCJsaXN0VGV4dCIsIm1vZGFsIiwicG9zaXRpb24iLCJib3JkZXIiLCJzaGFkb3dzIiwibW9kYWxSb3dCb3giLCJtb2RhbENvbEJveCIsIk1lbnVMaXN0IiwiaGFuZGxlR2xvYmFsU25hY2tiYXIiLCJlbWFpbElucHV0Iiwic2V0RW1haWxJbnB1dCIsImhhbmRsZU9uQ2xpY2tMb2dpbiIsInJlZGlyZWN0R29vZ2xlTG9naW4iLCJoYW5kbGVPbkNsaWNrTW9kYWwiLCJzZXRNb2RhbCIsImhhbmRsZU9uQ2xvc2VNb2RhbCIsImhhbmRsZU9uU3VibWl0IiwicmVsb2FkIiwiaXNMb2dnZWQiLCJnb29nbGVTaWduaW5JbWFnZSIsIlNpZ25JbkJ1dHRvbiIsInNpZ25JbiIsImxvZ291dCIsIkxpZ2h0VG9vbHRpcCIsIndpdGhTdHlsZXMiLCJjb21tb24iLCJ3aGl0ZSIsIlRvb2x0aXAiLCJheGlvcyIsImdldCIsInNlcnZlclVSTCIsInJlcyIsImFzc2lnbiIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJwdXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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QXBDLENBQXdDLFVBQUM4RyxLQUFELEVBQU8vRyxLQUFQLEVBQWlCO0FBQy9ELFdBQU87QUFDTGtFLFdBQUssRUFBRzZDLEtBREg7QUFFTDVDLFdBQUssRUFBRzRDLEtBRkg7QUFHTDNDLGNBQVEsRUFBR29CLFNBQVMsQ0FBQ3hGLEtBQUQ7QUFIZixLQUFQO0FBS0QsR0FOTyxDQUFSO0FBT0QsQ0FUSCxFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlLHNGQUFmLEUiLCJmaWxlIjoiYXBwLmFmZWFkYTMzOTdlNGIyOTNjYTdiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJyZWFjdC5idW5kbGVcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIgaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2L05hdlwiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmQvQm9hcmRcIjtcclxuaW1wb3J0IE1hbmFnZW1lbnQgZnJvbSBcIi4vbWFuYWdlbWVudC9NYW5hZ2VtZW50XCI7XHJcbmltcG9ydCBIZWFkZXJzIGZyb20gJy4vbWFuYWdlbWVudC9IZWFkZXJzJztcclxuaW1wb3J0IHtDc3NCYXNlbGluZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lL0hvbWVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvZm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJ1xyXG5pbXBvcnQgeyBnZXRUb2tlbkFuZFByb2ZpbGUgfSBmcm9tIFwiLi91dGlsL0xvZ2luQVBJXCI7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuL2N1c3RvbUhvb2svU25hY2tCYXInO1xyXG5cclxuLy8g7Luo7YWN7Iqk7Yq4IOuqqeuhnVxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvdXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgR2xvYmFsU25hY2tiYXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3QgeyBpZF90b2tlbiB9ID0gcXMucGFyc2Uod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAgIGNvbnN0IFsgcHJvZmlsZSAsIHNldFByb2ZpbGUgXSA9IFJlYWN0LnVzZVN0YXRlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2dsb2JhbFNuYWNrYmFyLCBzZXRHbG9iYWxTbmFja2Jhcl0gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlICwgcmVzdWx0OiAnc3VjY2Vzcyd9KVxyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzLnVzZXI7XHJcbiAgICBjb25zdCBwcm9ncmVzc1JlZiA9IFJlYWN0LnVzZVJlZigwKTtcclxuICAgIGNvbnN0IGhhbmRsZUJlZm9yZXVubG9hZCA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcHJvZ3Jlc3MgOiAke3Byb2dyZXNzUmVmLmN1cnJlbnR9YCk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudCA9IChwcm9ncmVzc1JlZi5jdXJyZW50IDwgMTAwID8gcHJvZ3Jlc3NSZWYuY3VycmVudCArIDIwIDogMTAwKTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3NSZWYuY3VycmVudCA9PT0gMTAwKSB7XHJcbiAgICAgICAgICAgICBwcm9ncmVzc1JlZi5jdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICBzZXRHbG9iYWxTbmFja2Jhcih7b3Blbjp0cnVlICwgcmVzdWx0OnJlc3VsdH0pO1xyXG4gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDApXHJcbiAgICB9XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihpZF90b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2ggQVBJIOyLpO2WiScpO1xyXG4gICAgICAgICAgICBnZXRUb2tlbkFuZFByb2ZpbGUoaWRfdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7bmFtZSAsZW1haWwsIHBpY3R1cmV9ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKTtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShcInByb2ZpbGVcIix7bmFtZSAsIGVtYWlsLCBwaWN0dXJlfSx7cGF0aDpcIi9cIiAsIG1heEFnZSA6IDcyMDB9KTsgIC8vIG1heEFnZSA6IDLsi5zqsIRcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBvY2N1cmVkIDogJHtlcnJ9YClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtpZF90b2tlbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIOq4sOyhtCDthqDtgbDsnbQg7J6I7J2EIOqyveyasCDshJzrsoTroZwg7J6s7JqU7LKt7ZW07IScIOunjOujjOuQnCDthqDtgbDsnbjsp4Ag7ZmV7J24XHJcbiAgICAgICAgLy8g66eM66OM65CcIO2GoO2BsOydvCDqsr3smrAg7L+g7YKk7ZSE66Gc7ZWELCBzdGF0Ze2UhOuhnO2VhCwg66eM66OM65CcIO2GoO2BsCDrqqjrkZAg7KCc6rGwXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDquLDsobQg7Yag7YGwIOyeiOydjCB0b2tlbiA6ICR7dG9rZW59YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbdG9rZW5dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoY29va2llcy5wcm9maWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBjb29raWVzLnByb2ZpbGUgOiAke0pTT04uc3RyaW5naWZ5KGNvb2tpZXMucHJvZmlsZSl9YCk7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGUoY29va2llcy5wcm9maWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtjb29raWVzLnByb2ZpbGVdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb2ZpbGUgfHwge25hbWUgOiAnJ319PiAgICAgICAgICB7Lyog7Jyg7KCAIO2UhOuhnO2VhCDsu6jthY3siqTtirggICAgKi99XHJcbiAgICAgICAgICAgIDxMb2dvdXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRQcm9maWxlfT4gICB7Lyog66Gc6re47JWE7JuDIOydtOuypO2KuCDsu6jthY3siqTtirggICAqL31cclxuICAgICAgICAgICAgPFByb2dyZXNzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17KHJlc3VsdCk9PmhhbmRsZUJlZm9yZXVubG9hZChyZXN1bHQpfT5cclxuICAgICAgICAgICAgPEdsb2JhbFNuYWNrYmFyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0R2xvYmFsU25hY2tiYXJ9PlxyXG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8TmF2Lz5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KCk9PjxIb21lIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYm9hcmQnIHJlbmRlcj17KCk9PjxCb2FyZCBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL21hbmFnZW1lbnQnIHJlbmRlcj17KCk9PiA8TWFuYWdlbWVudCBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2hlYWRlcnMnIHJlbmRlcj17KCk9PiA8SGVhZGVycyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyByZW5kZXI9eyhwcm9wcyk9PjxGb290ZXIgey4uLnByb3BzfS8+fT48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8L0dsb2JhbFNuYWNrYmFyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Qcm9ncmVzc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvTG9nb3V0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2dsb2JhbFNuYWNrYmFyLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRHbG9iYWxTbmFja2Jhcih7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICAgICAgY29udGVudD17Z2xvYmFsU25hY2tiYXIucmVzdWx0PT09J2Vycm9yJz8gYE5vdCBzYXZlZC5cclxuICAgICAgICAgICAgUmVhc29uIDogSW52YWxpZCBpbnB1dC5gIDonIFNBVkVEICd9IHN0YXR1cz17Z2xvYmFsU25hY2tiYXIucmVzdWx0fVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249e3t2ZXJ0aWNhbDondG9wJywgaG9yaXpvbnRhbDoncmlnaHQnfX0vPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmFkZSwgUGFwZXIsIFR5cG9ncmFwaHksQ29udGFpbmVyLCBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBwYXBlciA6IHtcclxuICAgICAgICB3aWR0aCA6ICc3NXZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnODV2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYmFja0xvZ28gOiB7XHJcbiAgICAgICAganVzdGlmeVNlbGYgOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dEJveCA6IHtcclxuICAgICAgICB3aWR0aCA6ICc0MHZ3JyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzV2aCdcclxuICAgIH1cclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZCh7aXNMb2FkaW5nfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIGVudGVyIHByZXNzZWRcclxuICAgICAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKS5mb2N1cygpOyAvLyBmb2N1cyDsnpHrj5lcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17NX0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tMb2dvfSA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicgLCBjb2xvcjonI2UwZTBlMCd9fT4gSU4gUkVBRFkuIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJyAsIGNvbG9yOicjZTBlMGUwJ319PiB+IDIwMjAvMDYvMjEgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRCb3h9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICByZWY9e3YgPT4gaW5wdXRSZWYuY3VycmVudCA9IHZ9XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZVNpZ25pbi4xY2UxYWFhNWExMjdmYTNlNDkyYTEyYmI2MmY5OTMwNC5wbmdcIjsiLCJpbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGUnO1xyXG5cclxuLy8gR05C7J2YIOyKrOudvOydtOuTnOq4sOuKpVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWRlT25TY3JvbGwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGUgYXBwZWFyPXtmYWxzZX0gZGlyZWN0aW9uPVwiZG93blwiIGluPXshdHJpZ2dlcn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2xpZGU+XHJcbiAgKTtcclxufSIsImltcG9ydCB7Qm94LCBDaXJjdWxhclByb2dyZXNzLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nICh7aXNMb2FkaW5nfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgIGlzTG9hZGluZyAmJiBcclxuICAgICAgICAgICAgKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHZoJywgd2lkdGg6JzEwMCUnLCBkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge2BTYXZpbmcgY2hhbmdlc2B9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgICA8L0JveD4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG59IiwiaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtvcGVuLCBvbkNsb3NlLCBjb250ZW50LCBzdGF0dXMsIGRpcmVjdGlvbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17ZGlyZWN0aW9uPyBkaXJlY3Rpb24gOiB7IHZlcnRpY2FsOid0b3AnLCBob3Jpem9udGFsOidjZW50ZXInIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17b25DbG9zZX0gc2V2ZXJpdHk9e3N0YXR1c31cclxuICAgICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCcgbWVzc2FnZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcicsIGZvbnRTaXplOic1cmVtJ319PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgIClcclxufSIsIlxyXG4vLyBjb250c3RydWN0b3Ig7ZuFXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU9uRmlyc3RSZW5kZXIgKGZ1bmMpIHtcclxuICAgIGNvbnN0IGlzRmlyc3RSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcbiAgICBpZiAoaXNGaXJzdFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZnVuYygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgTGlua30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgd2hpdGVBcnJvdyBmcm9tICcuLi9pbWFnZXMvd2hpdGUtYXJyb3cucG5nJztcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQge0JveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IG1hbmFnZW1lbnRCYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnJztcclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgSmFjaydzIFdlYnNpdGVcclxuICAgICAgICA8L0xpbms+eycgJ31cclxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgIHsnLid9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWluSGVpZ2h0OiAnMjB2aCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgICAgYmFja2dyb3VuZCA6IHRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdLFxyXG4gICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgYXJyb3cgOiB7XHJcbiAgICAgIHdpZHRoIDogJzR2dycsXHJcbiAgICAgIGhlaWdodCA6ICc0dncnLFxyXG4gICAgICBwYWRkaW5nIDogJzN2dycsXHJcbiAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Cb3R0b206JzJ2aCcsXHJcbiAgICAgIG1hcmdpblRvcCA6ICcydmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTonY29udGFpbicsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5Rm9vdGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7bG9jYXRpb259ID0gcHJvcHM7XHJcbiAgICBjb25zb2xlLmxvZyhgbG9jYXRpb24ucGF0aG5hbWU/ICR7bG9jYXRpb24ucGF0aG5hbWV9YCk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9ib2FyZCc/IG51bGwgOiAoXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHN0eWxlPXtcclxuICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nID8gXHJcbiAgICAgICAge2JhY2tncm91bmQgOiBgbGluZWFyLWdyYWRpZW50KGJsYWNrLCAjZWVlZWVlKWB9IFxyXG4gICAgICAgIDogXHJcbiAgICAgICAge2JhY2tncm91bmRJbWFnZSA6IGB1cmwoJHttYW5hZ2VtZW50QmFja2dyb3VuZH0pYCwgYmFja2dyb3VuZFNpemUgOiAnYXV0bycsIHRyYW5zZm9ybTogYHNjYWxlWSgtMSlgfX0+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJNb3ZlIHRvIFRvcFwiIGFyaWEtbGFiZWw9XCJtb3ZlLXRvLXRvcFwiIHBsYWNlbWVudD1cInRvcFwiIGVudGVyRGVsYXk9ezM1MH0gbGVhdmVEZWxheT17MTUwfT5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBzdHlsZT17XHJcbiAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nPyBcclxuICAgICAgICAgIHtiYWNrZ3JvdW5kIDpgbm8tcmVwZWF0IGNlbnRlci84MCUgdXJsKCR7d2hpdGVBcnJvd30pYH1cclxuICAgICAgICAgIDogXHJcbiAgICAgICAgICB7YmFja2dyb3VuZCA6YG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLCB0cmFuc2Zvcm06YHJvdGF0ZSgxODBkZWcpYH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gb25Nb3VzZU92ZXI9eyhlKT0+dHJhbnNpdGlvbihlKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgICAgICA8Q29weXJpZ2h0IHN0eWxlPXt7Zm9udFdlaWdodCA6ICdib2xkZXInfX0vPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH0iLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ2Fyb3VzZWwgKHByb3BzKSB7XHJcbiAgICBjb25zdCBpbWFnZUxpc3QgPSBwcm9wcy5saXN0ID8gcHJvcHMubGlzdCA6IFt7fV07XHJcbiAgICBjb25zdCB7c2V0U3RlcHBlciwgY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGV9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBoYW5kbGVBZnRlclNsaWRlID0gKHNsaWRlSW5kZXgpID0+IHtcclxuICAgICAgICBzZXRTdGVwcGVyKHNsaWRlSW5kZXgpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShzbGlkZUluZGV4KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgc2xpZGVJbmRleD17Y3VycmVudFNsaWRlfVxyXG4gICAgICAgIGFmdGVyU2xpZGU9IHtpbmRleCA9PiBoYW5kbGVBZnRlclNsaWRlKGluZGV4KX1cclxuICAgICAgICBhdXRvcGxheT17ZmFsc2V9XHJcbiAgICAgICAgYXV0b3BsYXlJbnRlcnZhbD17MzAwMH1cclxuICAgICAgICB0cmFuc2l0aW9uTW9kZT0nc2Nyb2xsJ1xyXG4gICAgICAgIHNwZWVkPXs4MDB9XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBpbWFnZUxpc3QubWFwKChpbWFnZSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBzdHlsZT17e3dpZHRoOicxMDAlJywgYmFja2dyb3VuZENvbG9yOidpbmhlcml0JywgY29sb3I6JyNmZmYnLCB0ZXh0U2hhZG93Oic1cHggMS41cHggMS41cHggZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7YCMke2luZGV4KzF9ICR7aW1hZ2UubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5zcmN9IG9iamVjdC1maXQ9J2NvdmVyJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgKTtcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3ggLCBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgbWFyZ2luOjAsXHJcbiAgICAgIHBhZGRpbmc6JzF2dycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9zc2xpbmUoe2NoaWxkcmVufSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0RmFkZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy01MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MjAwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBib3hTaGFkb3c9ezR9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JvdywgQm94LCBGYWRlLCBUeXBvZ3JhcGh5LCBEaXZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3QgOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzM1dmgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0JyxcclxuICAgICAgICB3aWR0aCA6ICczMHZ3JyxcclxuICAgICAgICBjb2xvcjonI2VhZWFlYScsXHJcbiAgICAgICAgdGV4dFNoYWRvdzogJzFweCA1cHggNXB4ICM5ZTk5OTknXHJcbiAgICB9XHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVzY3JpcHRpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgKX0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnMTUwcHggMHB4J1xyXG4gICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEdyb3cgaW49e2dyb3d9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDE1MDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH0gfSA6IHt9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIFNPTUUgVEVYVFxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJCb3h9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU09NRSBURVhUXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+ICAgICAgXHJcbiAgICAgICAgPC9Hcm93PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi9JbnRyb2R1Y3Rpb25cIjtcclxuaW1wb3J0IEludHJvZHVjdGlvbjIgZnJvbSBcIi4vSW50cm9kdWN0aW9uMlwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4nO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY3VzdG9tSG9vay9Mb2FkaW5nXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtpc0xvYWRpbmd9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24vPlxyXG4gICAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uMi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IGVhc3lMb2dpbiBmcm9tIFwiLi4vaW1hZ2VzL2Vhc3ktbG9naW4ucG5nXCI7XHJcbmltcG9ydCBsaW5rTWFuYWdlbWVudFBhZ2UgZnJvbSBcIi4uL2ltYWdlcy9saW5rLW1hbmFnZW1lbnQtcGFnZS5wbmdcIjtcclxuaW1wb3J0IHN0YXJ0UmlnaHRBd2F5IGZyb20gXCIuLi9pbWFnZXMvc3RhcnQtcmlnaHQtYXdheS5wbmdcIjtcclxuaW1wb3J0IG1ha2VIZWFkZXJzIGZyb20gXCIuLi9pbWFnZXMvbWFrZS1oZWFkZXJzLnBuZ1wiO1xyXG5pbXBvcnQgaGFuZGxlVGFibGUgZnJvbSBcIi4uL2ltYWdlcy9oYW5kbGUtdGFibGUucG5nXCI7XHJcbmltcG9ydCB1c2VNeW1lbnUgZnJvbSBcIi4uL2ltYWdlcy9teW1lbnUucG5nXCI7XHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1NpZ24gaW4gd2l0aCBHb29nbGUnLFxyXG4gICAgICAgIHNyYyA6IGAke2Vhc3lMb2dpbn1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ1NpZ24gaW4gd2l0aCBnb29nbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ01vdmUgb24gdG8gbWFuYWdlbWVudCBwYWdlJyxcclxuICAgICAgICBzcmMgOiBgJHtsaW5rTWFuYWdlbWVudFBhZ2V9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdNb3ZlIG9uIHRvIG1hbmFnZW1lbnQgcGFnZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnQ2xpY2sgdGhlIGJsdWUgYnV0dG9uJyxcclxuICAgICAgICBzcmMgOiBgJHtzdGFydFJpZ2h0QXdheX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ2NsaWNrIFwiZ2V0IHN0YXJ0ZWQgcmlnaHQgYXdheVwiIGJ1dHRvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnTWFrZSBIZWFkZXJzJyxcclxuICAgICAgICBzcmMgOiBgJHttYWtlSGVhZGVyc31gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ21ha2UgaGVhZGVycycsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ0NyZWF0ZSwgRWRpdCwgUmVtb3ZlIHRhYmxlIHJlY29yZHMnLFxyXG4gICAgICAgIHNyYyA6IGAke2hhbmRsZVRhYmxlfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnaGFuZGxlIHRhYmxlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdVc2UgbXltZW51IHRvIGhhbmRsZSBkYXRhJyxcclxuICAgICAgICBzcmMgOiBgJHt1c2VNeW1lbnV9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICd1c2UgbXltZW51JyxcclxuICAgIH0sXHJcbl07IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyb3cgLCBCb3gsIFBhcGVyLEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcclxuaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuL0ltYWdlU2xpZGVTb3VyY2VzJztcclxuaW1wb3J0IExpc3RDcm91c2VsRGVzY3JpcHRpb24gZnJvbSAnLi9MaXN0Q2Fyb3VzZWxEZXNjcmlwdGlvbic7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9iYWNrZ3JvdW5kMS5qcGcnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDc1MCxcclxuICAgICAgICBtYXhXaWR0aDogJzEwMDBweCcsXHJcbiAgICAgICAgd2lkdGggOiAnNzB2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzY1dmgnLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yIDogJ2luaGVyaXQnXHJcbiAgICB9LFxyXG4gICAgdGV4dFBhcGVyIDoge1xyXG4gICAgICAgIG1pbldpZHRoIDogMzUwLFxyXG4gICAgICAgIHdpZHRoIDogJzcwdncnLFxyXG4gICAgICAgIGFsaWduU2VsZiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidpbmhlcml0J1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3N0ZXBwZXIsIHNldFN0ZXBwZXJdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnNvbGUubG9nKGBjdXJyZW50U2xpZGUgOiAke2N1cnJlbnRTbGlkZX1gKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTcwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxGYWRlIGluPXtncm93fSAgdGltZW91dD17e2VudGVyOjMwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd30gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzUwJSAxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDE1MDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH0gfSA6IHt9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxyXG4gICAgICAgICAgICAgICAgICB7LyogaW1hZ2UgY2Fyb3VzZWwgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZUNhcm91c2VsIFxyXG4gICAgICAgICAgICAgICAgICBsaXN0PXtpbWFnZUxpc3R9IFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU9e2N1cnJlbnRTbGlkZX0gXHJcbiAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTbGlkZT17c2V0Q3VycmVudFNsaWRlfSBcclxuICAgICAgICAgICAgICAgICAgc2V0U3RlcHBlcj17c2V0U3RlcHBlcn0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogJzUwJSAxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgey4uLihncm93ID8geyB0aW1lb3V0OiB7YXBwZWFyIDogMjAwMCAsIGVudGVyIDogMTUwMCAsIGV4aXQgOiAxMDAwfX0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGxpc3QgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RDcm91c2VsRGVzY3JpcHRpb24gc3RlcHBlcj17c3RlcHBlcn0gPjwvTGlzdENyb3VzZWxEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgUGFwZXIsIEJveCwgR3JvdywgQXZhdGFyLCBUeXBvZ3JhcGh5LEZhZGUgLCBTbGlkZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBtb29uSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL21vb24ucG5nJztcclxuaW1wb3J0IENyb3NzbGluZSBmcm9tICcuL0Nyb3NzbGluZSc7XHJcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9ibGFjay5wbmcnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgIHdpZHRoIDogJzEwMHZ3JyxcclxuICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvdmVyJ1xyXG4gICAgfSxcclxuICAgIGxvZ29Cb3ggOiB7XHJcbiAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnXHJcbiAgICB9LFxyXG4gICAgYmlnQXZhdGFyIDoge1xyXG4gICAgICB3aWR0aCA6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgICBoZWlnaHQgOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0V2l0aFNoYWRvdyA6IHtcclxuICAgICAgY29sb3I6JyNmZmYnLFxyXG4gICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgICBmb250U2l6ZTonNHJlbScsXHJcbiAgICAgIG1hcmdpbkxlZnQ6JzJ2dycsXHJcbiAgICAgIHRleHRTaGFkb3c6ICcxcHggNXB4IDVweCAjOWU5OTk5J1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uQm94IDoge1xyXG4gICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIG1heFdpZHRoIDogJzUwdncnLFxyXG4gICAgICBtYXJnaW4gOiAnMCAwIDAgM3Z3J1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbiAoKSB7XHJcbiAgICBjb25zdCBbZ3Jvdywgc2V0R3Jvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgIHJvb3RNYXJnaW4gOiAnLTcwcHggMHB4J1xyXG4gICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxGYWRlIGluPXtncm93fSAgdGltZW91dD17e2VudGVyOjIwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtkb21SZWZ9PlxyXG4gICAgICAgIDxDcm9zc2xpbmU+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29Cb3h9PlxyXG4gICAgICAgICAgICA8RmFkZSBpbj17Z3Jvd30gey4uLihncm93PyB7dGltZW91dDp7ZW50ZXI6NTAwMCwgZXhpdDo4MDB9fSA6IHt9KX0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9J2hlbHAnIHNyYz17bW9vbkltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuYmlnQXZhdGFyfS8+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdidXR0b24nIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0V2l0aFNoYWRvd30+IE1hbmFnZW1lbnQgQXBwIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9uQm94fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPkFuIGFwcGxpY2F0aW9uIHRoYXQgeW91IGNhbiBlYXNpbHkgY3JlYXRlICYgZGVzaWduIHlvdXIgb3duIGRhdGEuPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+R2V0IHN0YXJ0ZWQgd2l0aCB5b3VyIEdvb2dsZSBhY2NvdW50ITwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPlRoaXMgYXBwIHdpbGwgbm90IGtlZXAgYW55IHBlcnNvbmFsIGluZm9ybWF0aW9uLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Dcm9zc2xpbmU+XHJcbiAgICAgICAgICA8UHJvamVjdERlc2NyaXB0aW9uLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtUeXBvZ3JhcGh5ICwgU3RlcHBlciwgU3RlcCwgQm94LCBTdGVwTGFiZWx9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHNsaWRlU291cmNlIGZyb20gJy4vSW1hZ2VTbGlkZVNvdXJjZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXHJcbiAgICAgIGZvbnRXZWlnaHQgOiAnYm9sZGVyJ1xyXG4gICAgfSxcclxuICAgIGlubGluZToge1xyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVzY3JpcHRpb25MaXN0ICh7c3RlcHBlcn0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e3N0ZXBwZXJ9IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidpbmhlcml0J319PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlU291cmNlLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8U3RlcCBjb21wbGV0ZWQ9e2luZGV4IDwgc3RlcHBlcn0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT57aXRlbS5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICl9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1N0ZXBwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdGFydEJ1dHRvbiBmcm9tIFwiLi9TdGFydEJ1dHRvblwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL2Rlc2suanBnXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICAgICAgY29sb3IgOiAnd2hpdGUnXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZhZGUsc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0ZpcnN0UmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZWYuY3VycmVudCkgaXNGaXJzdFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgICByb290TWFyZ2luIDogJy0zNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlcjoxMzAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudCA/ICdXRUxDT01FJyA6ICdSZWFkeSB0byBzdGFydD8nfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7aXNGaXJzdFJlZi5jdXJyZW50PyBudWxsIDogKDxTdGFydEJ1dHRvbi8+KX1cclxuICAgICAgICA8L0JveD5cclxuICAgIDwvRmFkZT5cclxuICAgIClcclxufSIsImltcG9ydCB7QnV0dG9uICwgQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFBsYXlBcnJvd1NoYXJwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICcwLjV2aCdcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcycHggMXB4IDFweCBncmF5JyxcclxuICAgICAgICBjb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIGlubmVyQm94IDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxdmgnLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9tYW5hZ2VtZW50JyBzdHlsZT17e3RleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFBsYXlBcnJvd1NoYXJwIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2ZvbnRTaXplIDogMzB9fS8+fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEdFVCBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFycm93LmQwODMyOGY2MmQxOWI2NmY4ZWE4ZDZkMDA2NzI0YzhiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYWNrZ3JvdW5kMS44NDAwM2JjZTIxZmQ0MmI3OWRjMGE3Nzk4ZmFiMWZhYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmxhY2suM2YwMmExMzI3Mzg3MDAyMjZjODRlZDFmNTg2M2Q1OWEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRlc2suMzIwN2MxZWY5NGM4NjdmODBiMGU5ZGY2YWM3OGQ1MmIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhc3ktbG9naW4uM2U5MWI4ZDg4NzM1Njg5MDc5YWZkMDc2ZTNlMDc0MjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhbmRsZS10YWJsZS4zYzU4NjkxNGE5NmQ0YWZlZGRjNWM3YWQzZDdkZjM1NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibGluay1tYW5hZ2VtZW50LXBhZ2UuNDgwMDRkMTMzYjVmYzIyNTc3NzA0Yzk1ZWIzNWYzZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1ha2UtaGVhZGVycy5jZmZhYzYzNGYyOWQzOGRkYmQxZjQ0NjdhNTczZWJjNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFuYWdlbWVudC1iYWNrZ3JvdW5kLmEwMDhkZTgxMzk1ODFiMGRhYmYxODMyZWQxYzljNDZlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtb29uLmYyMDZiYzNkNWJlODMxMWM3N2Q5ODk3ZGE0NGUxZjY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJteW1lbnUuOWZkZDU4YWNhNzRlYjQ4ZDk1NWY4MzVjOWVjODc5NmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXJ0LXJpZ2h0LWF3YXkuNGUyMTcyNjJkMmM4ZDg2ZDVlMGY2ZWU0MzJhZWZiY2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndoaXRlLWFycm93LmM0NDIyYTdiYzVlZTIzZDA4MWIzNTY2ZjkzZTkxZjFmLnBuZ1wiOyIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXHJcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICAoPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICA8QXBwLz5cclxuICAgIDwvQ29va2llc1Byb3ZpZGVyPilcclxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmFkZSwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBjb250YWluZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiBgdXJsKCR7YmFja2dyb3VuZH0pYCxcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfSxcclxuICAgIGJ1dHRvbkNvbnRhaW5lciA6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB0ZXh0U2hhZG93IDogJzAuNXB4IDAuNXB4IDFweCAjMDAwMDAwNWMnLFxyXG4gICAgICAgIG1hcmdpbiA6ICcwIDF2dyAxLjd2aCcsXHJcbiAgICAgICAgY29sb3I6ICcjNmE3NDhjJyxcclxuICAgIH0sXHJcbn0pKTtcclxuY29uc3QgZGVmYXVsdERhdGEgPSB7XHJcbiAgICBjb2x1bW5zIDogW1xyXG4gICAgICB7IHRpdGxlOiAnTmFtZScsIGZpZWxkOiAnTmFtZScgLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHsgdGl0bGU6ICdTdXJuYW1lJywgZmllbGQ6ICdTdXJuYW1lJyB9LFxyXG4gICAgICB7IHRpdGxlOiAnQmlydGggWWVhcicsIGZpZWxkOiAnQmlydGggWWVhcicgfSxcclxuICAgICAgeyB0aXRsZTogJ1Bob25lJyAsIGZpZWxkOidQaG9uZScsIGdyb3VwaW5nOmZhbHNlfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnR2VuZGVyJyxcclxuICAgICAgICBmaWVsZDogJ0dlbmRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdNZW1vJyAsIGZpZWxkOidNZW1vJ31cclxuICAgIF0sXHJcbiAgICBkYXRhIDogW1xyXG4gICAgICB7IFwiTmFtZVwiOiAnTWVobWV0JywgJ1N1cm5hbWUnOiAnQmFyYW4nLCBcIkJpcnRoIFllYXJcIjogMTk4MywgXCJQaG9uZVwiOicwMTA0NjUwOTk5NScgLFwiR2VuZGVyXCI6IDEgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdBZGFtJywgJ1N1cm5hbWUnOiAnQWRhbScsIFwiQmlydGggWWVhclwiOiAxOTg0LCBcIlBob25lXCI6JzAxMDQ2NTA5Nzk1JyAsXCJHZW5kZXJcIjogMiAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ01laG1ldCcsICdTdXJuYW1lJzogJ0F0b20nLCBcIkJpcnRoIFllYXJcIjogMTk4NSwgXCJQaG9uZVwiOicwMTA0NjUwOTY5NScgLFwiR2VuZGVyXCI6IDEgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdtdWwnLCAnU3VybmFtZSc6ICdLb25nbmEnLCBcIkJpcnRoIFllYXJcIjogMTk4NiwgXCJQaG9uZVwiOicwMTA0NjUwOTE5NScgLFwiR2VuZGVyXCI6IDEgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdKYWNrJywgJ1N1cm5hbWUnOiAnSmFjaycsIFwiQmlydGggWWVhclwiOiAxOTg3LCBcIlBob25lXCI6JzAxMDQ2NTA5Mjk1JyAsXCJHZW5kZXJcIjogMiAsIFwiTWVtb1wiOicnfSxcclxuICAgICAgeyBcIk5hbWVcIjogJ0JvYicsICdTdXJuYW1lJzogJ0JvYicsIFwiQmlydGggWWVhclwiOiAxOTg4LCBcIlBob25lXCI6JzAxMDQ2NTA5Mzk1JyAsXCJHZW5kZXJcIjogMiAsIFwiTWVtb1wiOicnfSxcclxuICAgIF1cclxuICB9XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmF1bHRQYWdlICh7c3RhdGUgLCBzZXRTdGF0ZSwgbWF0Y2h9KSB7XHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmFkZTIsIHNldEZhZGUyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uREVNT0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSAsIGNvbHVtbnMgOiBkZWZhdWx0RGF0YS5jb2x1bW5zICwgZGF0YSA6IGRlZmF1bHREYXRhLmRhdGEsIGRlZmF1bHRQYWdlIDogIXN0YXRlLmRlZmF1bHRQYWdlfSk7XHJcbiAgICB9XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRGYWRlKHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2V0RmFkZTIodHJ1ZSkgLCAxNTAwKTtcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlciA6IDgwMCwgZXhpdDo1MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgY29sb3I9J2luaXRpYWwnIHN0eWxlPXt7dGV4dFNoYWRvdzonNXB4IDEuNXB4IDEuNXB4IGdyYXknfX0+XHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VtZW50IFRhYmxlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBndXR0ZXJCb3R0b20gc3R5bGU9e3t0ZXh0U2hhZG93OicycHggMnB4IDFweCBibGFjayd9fT4gXHJcbiAgICAgICAgICAgICAgICBZb3UgbWF5IHRyeSB0aGUgREVNTyBpZiB0aGlzIHlvdXIgZmlyc3QgdGltZSwgXHJcbiAgICAgICAgICAgICAgICBvciBnZXQgc3RhcnRlZCByaWdodCBhd2F5IVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxGYWRlIGluPXtmYWRlMn0gdGltZW91dD17e2VudGVyIDogMzAwMCwgZXhpdDo1MDB9fT5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtoYW5kbGVPbkRFTU9DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVU0UgREVNTyBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2hlYWRlcnMnIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRVQgU1RBUlRFRCBSSUdIVCBBV0FZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBcclxuICAgIEJveCAsUGFwZXIsIG1ha2VTdHlsZXMsIEZhZGUsIFRleHRGaWVsZCwgVG9vbHRpcCwgVHlwb2dyYXBoeSwgQ2hlY2tib3hcclxufVxyXG4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvbWFuYWdlbWVudC1iYWNrZ3JvdW5kLmpwZ1wiO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7IHNhdmVIZWFkZXJzIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5pbXBvcnQgeyBnZXRNYW5hZ2VtZW50VGFibGUgfSBmcm9tICcuLi91dGlsL01hbmFnZW1lbnRBUEknO1xyXG5pbXBvcnQgdXNlT25GaXJzdFJlbmRlciBmcm9tICcuLi9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXInO1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMjB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduQ29udGVudCA6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICAgIG1hcmdpblRvcCA6ICcxMHZoJyxcclxuICAgIH0sXHJcbiAgICBmb3JtUm9vdCA6IHtcclxuICAgICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAuNXZoIDF2dycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNjBjaCcsXHJcbiAgICAgICAgICAgIG1pbldpZHRoIDogJzQwY2gnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFycm93IDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMHZoJyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kIDogYG5vLXJlcGVhdCBjZW50ZXIvODAlIHVybCgke2Fycm93fSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplIDogJ2NvbnRhaW4nLFxyXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnM3Z3JyxcclxuICAgICAgICB0cmFuc2Zvcm0gOiAncm90YXRlKDkwZGVnKSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbiA6IHtcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJ1xyXG4gICAgfVxyXG59KSlcclxuY29uc3QgZGVmYXVsdEhlYWRlciA9IHtcclxuICAgIFwiaGVhZGVyMFwiIDogJycsXHJcbiAgICBcImhlYWRlcjFcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIyXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyM1wiIDogJycsXHJcbiAgICBcImhlYWRlcjRcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI1XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNlwiIDogJycsXHJcbiAgICBcImhlYWRlcjdcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI4XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOVwiIDogJycsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVycyAoe2lzTG9hZGluZ30pIHtcclxuICAgIC8vIHN0eWxlLCBjb29raWVcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBSZWFjdC51c2VDb250ZXh0KFByb2dyZXNzQ29udGV4dCk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMgLCBzZXRDb29raWUgLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMgKFsncHJvZmlsZScsJ3VzZXInXSk7XHJcbiAgICAvLyBzdGF0ZXNcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtyZXN1bHRTbmFjayAsIHNldFJlc3VsdFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlLCBjb250ZW50IDogJyd9KTtcclxuICAgIGNvbnN0IFtkYXRhICwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhZGVycyA6IGRlZmF1bHRIZWFkZXIsXHJcbiAgICAgICAgZ3JvdXBpbmdzIDogQXJyYXkoMTApLmZpbGwoZmFsc2UpLFxyXG4gICAgfSlcclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgZGF0YVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgLy8gY29uc3RydWN0b3JcclxuICAgIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgICAgICBnZXRNYW5hZ2VtZW50VGFibGUoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdMZW5ndGggPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyA/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzLmxlbmd0aCA6IDAgOiAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyBbLi4ucmVzcG9uc2UuZGF0YS5ncm91cGluZ3NdIDogW10gOiBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgLSBncm91cGluZ0xlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgOiB7fSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyc0xlbmd0aCA9IE9iamVjdC52YWx1ZXMoaGVhZGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGhlYWRlcnNMZW5ndGg7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tgaGVhZGVyJHtpfWBdID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7aGVhZGVycyxncm91cGluZ3N9O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoe2hlYWRlcnMsIGdyb3VwaW5nc30pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHsgIC8vIHVuYXV0aG9yaXplZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBQbGVhc2UgbG9nIGluIGFnYWluLmB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYGVycm9yIChjb2RlIDogJHtyZXNwb25zZS5zdGF0dXN9KWB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmhlYWRlcnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JvdXBpbmdzIDogW1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5ncm91cGluZ3NcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFtkYXRhLmhlYWRlcnMsIGRhdGEuZ3JvdXBpbmdzXSk7XHJcblxyXG4gICAgLy8gZWZmZWN0c1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57IFxyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU3VibWl0KGRhdGFSZWYuY3VycmVudC5oZWFkZXJzLCBkYXRhUmVmLmN1cnJlbnQuZ3JvdXBpbmdzLCB0cnVlKTtcclxuICAgICAgICAgICAgaGFuZGxlUHJvZ3Jlc3MocmVzdWx0ID09PSAnZXJyb3InID8gJ2Vycm9yJyA6ICdzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSk7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIC8vIGV2ZW50c1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChoZWFkZXJzLCBncm91cGluZ3MsIGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMoaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkpIHsgLy8gMTXquIDsnpAg7J207IOBIOygnO2VnCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLmxlbmd0aCA9PT0gMCkgeyAgICAgLy8g67mE7Ja07J6I7J2EIOqyveyasCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pXHJcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlSGVhZGVycyhoZWFkZXJzLGdyb3VwaW5ncylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNBdXRvU2F2ZSkgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLCBjb250ZW50IDogcmVzcG9uc2UucmVzdWx0fSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIFtgaGVhZGVyJHtpbmRleH1gXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlR3JvdXBpbmdzID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBncm91cGluZ3MgOiBkYXRhLmdyb3VwaW5ncy5tYXAoKHYsaSk9PiBpPT09aW5kZXg/IGUudGFyZ2V0LmNoZWNrZWQgOiB2KX0pO1xyXG4gICAgfVxyXG4gICAgLy8gY29tcG9uZW50XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlciA6IDE1MDB9fT5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs0fT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtUm9vdH0gYXV0b0NvbXBsZXRlPSdvZmYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdkaXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgY29sb3I9J3RleHRQcmltYXJ5JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgRWRpdCBGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29sb3I9e09iamVjdC52YWx1ZXMoZGF0YS5oZWFkZXJzKS5ldmVyeSh2ID0+IHYubGVuZ3RoIDw9IDE1KSA/ICdibHVlJyA6ICdyZWQnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb2xvcj0naW5pdGlhbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIHNob3VsZCBiZSBsZXNzIHRoYW4gMTUgbGV0dGVycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLm1hcCgoaGVhZGVyLGluZGV4KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aW5kZXg9PT0wPyB0cnVlOmZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2BoZWFkZXItJHtpbmRleCsxfWB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5oZWFkZXJzW2BoZWFkZXIke2luZGV4fWBdfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPSdub3JtYWwnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dENoYW5nZShlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF0ubGVuZ3RoID4gMTUgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJcclxuWW91IGNhbiBhcnJhbmdlIHRoZSBkYXRhIHdpdGggYSB2YWxpZCBoZWFkZXIsIFxyXG5VbmlxdWUgdmFsdWVzIGFyZSBub3QgY29tbW9ubHkgdXNlZCBmb3IgdGhpcyBmdW5jdGlvbiBpbiBnZW5lcmFsLlxyXG5lLmcuKSBuYW1lLCBhZGRyZXNzLCBtb2JpbGUgTk8uIGV0Yy5cclxuXCJcclxuICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J3JpZ2h0JyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezIwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RhdGEuZ3JvdXBpbmdzW2luZGV4XX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlR3JvdXBpbmdzKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4PT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+IEdyb3VwaW5nIT88L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTVUJNSVRcIiBhcmlhLWxhYmVsPSdzdWJtaXQnIHBsYWNlbWVudD0ndG9wJyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezQwMH0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbk1vdXNlT3Zlcj17KGUpPT5lLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlU3VibWl0KGRhdGEuaGVhZGVycyAsIGRhdGEuZ3JvdXBpbmdzKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e2BIZWFkZXIgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNSBsZXR0ZXJzIDooYH0gc3RhdHVzPVwiZXJyb3JcIi8+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3Jlc3VsdFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRSZXN1bHRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtyZXN1bHRTbmFjay5jb250ZW50fSBzdGF0dXM9e3Jlc3VsdFNuYWNrLnN0YXR1cz09PSdlcnJvcic/ICdlcnJvcicgOiAnc3VjY2Vzcyd9Lz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSc7XHJcbmltcG9ydCBNYW51YWxEaWFsb2cgZnJvbSBcIi4vTWFudWFsRGlhbG9nXCI7XHJcbmltcG9ydCB7IG9wdGlvbnMsbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vVGFibGVPcHRpb25zXCI7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IERlZmF1bHRQYWdlIGZyb20gJy4vRGVmYXVsdFBhZ2UnO1xyXG5pbXBvcnQgcGFyc2VEYXRhIGZyb20gJy4uL3V0aWwvcGFyc2VEYXRhJztcclxuaW1wb3J0IFNhdmVCdXR0b24gZnJvbSAnLi9TYXZlQnV0dG9uJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG4vLyB1c2VFZmZlY3TroZwgZGF0YSwgY29sdW1ucyDqsIAg67OA6rK965CgIOuVjOuniOuLpCDshJzrsoTsl5Ag7KCA7J6lIO2bhCDqsLHsi6BcclxuLy8gLi91dGlsIOqyveuhnOyXkCDroZzsp4Eg7J6R7ISxXHJcbi8vIO2GteyLoOyXkCDrjIDtlZwgdGVzdGNvZGXsnpHshLFcclxuLy8gY29sdW1uc+yZgCBkYXRh7J2YIOqwgSDqsJLrk6Tsl5Ag64yA7ZWcIOustOqysOyEsSDssrTtgaxcclxuLy8gcHJvcHNUeXBlIOyekeyEsVxyXG4vLyBTaWRlTWVudUxpc3QgPT4gTG9naW7snLzroZwg67OA6rK9LCDruYTroZzqt7jsnbgg7IucIExPR0lO7Jy866GcIOuztOydvCDqsoMsIOuhnOq3uOyduOyLnCBNWSBNRU5V66GcIOuztOq4sFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnRUYWJsZSh7aXNMb2FkaW5nfSkge1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IFJlYWN0LnVzZUNvbnRleHQoUHJvZ3Jlc3NDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gIC8vIHN0YXRlc1xyXG4gIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZX0pO1xyXG4gIGNvbnN0IFtzYXZlZFNuYWNrICwgc2V0U2F2ZWRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gIGNvbnN0IFtlcnJvclNuYWNrICwgc2V0RXJyb3JTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gIGNvbnN0IFtkaWFsb2csIHNldERpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7ICAvLyDstZzstIggQVBJ66GcIOuwm+yVhOyYpOuKlCDrj5nsnpHtlYTsmpRcclxuICAgIGRlZmF1bHRQYWdlIDogdHJ1ZSxcclxuICAgIGhhc1RhYmxlIDogZmFsc2UsXHJcbiAgICBjb2x1bW5zOiBbXSxcclxuICAgIGRhdGE6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRhYmxlUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgdXNlT25GaXJzdFJlbmRlcigoKT0+e1xyXG4gICAgaWYgKGNvb2tpZXMudXNlcikgeyAgIC8vIOy/oO2CpOyXkCDthqDtgbDsnbQg7J6I7J2EIOqyveyasCDthYzsnbTruJQgZmV0Y2ggQVBJ7Iuk7ZaJXHJcbiAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXMgOiAke3Jlc3BvbnNlLnN0YXR1c30gLCBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKTtcclxuICAgICAgICAgIC8vIOycoOyggCDtmZXsnbjrkJDqs6Ag7YWM7J2067iU64+EIOu5hOyWtOyeiOyngCDslYrsnYQg6rK97JqwXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzPT09MjAwICYmIHJlc3BvbnNlLmRhdGEuaGVhZGVycykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57c2V0U25hY2soe29wZW46dHJ1ZX0pfSw0MDApO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgY29sdW1ucyA6IHBhcnNlRGF0YShyZXNwb25zZS5kYXRhLmhlYWRlcnMgLCByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyksXHJcbiAgICAgICAgICAgICAgZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICBkZWZhdWx0UGFnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGhhc1RhYmxlIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIGV2ZW50c1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge3NldERpYWxvZyh7b3BlbiA6IGZhbHNlfSk7fTtcclxuICBjb25zdCBoYW5kbGVPblNhdmUgPSAoaXNBdXRvU2F2ZSkgPT4ge1xyXG4gICAgICAvLyB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyIOydmCByZWbsl5DshJwg7Iug66Kw64+E7J6I64qUIOuNsOydtO2EsCDssLjsobBcclxuICAgICAgY29uc29sZS5sb2codGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlcilcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICBjb25zdCBncm91cGluZ3MgPSBbXTtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgb2JqW2BoZWFkZXIke2l9YF0gPSB2LnRpdGxlO1xyXG4gICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgIH0se30pXHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIuZGF0YS5mb3JFYWNoKCh2LGkpPT57XHJcbiAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNhdmVEYXRhKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSk7XHJcbiAgICAgIGlmKCFpc0F1dG9TYXZlKSBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gZWZmZWN0c1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7ICAgLy8gd2luZG93IOuNlOu4lO2BtOumrSDsnbTrsqTtirgg7LaU6rCALCDrj4Tsm4Drp5Agb3BlblxyXG4gICAgY29uc3Qgb25kYkNsaWNrID0gKCkgPT4gc2V0RGlhbG9nKHtvcGVuIDogIWRpYWxvZy5vcGVufSk7XHJcbiAgICBjb25zdCBvbktleWRvd24gPSAoZSkgPT4geyAgIC8vIGN0cmwgKyBz66GcIOyggOyepSBldmVudFxyXG4gICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKFwiTWFjXCIpID8gZS5tZXRhS2V5IDogZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlT25TYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25kYkNsaWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xyXG4gICAgICAvLyDstIjquLDsoJHqt7zsnZgg6rK97JqwIOuNsOydtO2EsOqwgCDsl4bslrQg7JeQ65+sIOuwnOyDne2VoCDsiJgg7J6I7Ja0IOyCvO2VreyLneycvOuhnCDtjJDri6gg7ZuEIOyWuOuniOyatO2KuOyLnOydmCBmZXRjaEFQSeyLpO2WiVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZU9uU2F2ZSh0cnVlKSA6IG51bGwgOiBudWxsO1xyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA/IGhhbmRsZVByb2dyZXNzKCdzdWNjZXNzJykgOiBudWxsIDogbnVsbDtcclxuICB9O1xyXG59LCBbXSk7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbiAgY29uc3QgTWFyZ2luID0gKCkgPT4gKDxCb3ggc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PjwvQm94Pik7ICAvLyDsl6zrsLFcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPExvYWRpbmcgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgIHtcclxuICAgIHN0YXRlLmRlZmF1bHRQYWdlID9cclxuICAgICAgKDxEZWZhdWx0UGFnZSBzdGF0ZT17c3RhdGV9IHNldFN0YXRlPXtzZXRTdGF0ZX0vPilcclxuICAgIDogXHJcbiAgICAoPEJveD5cclxuICAgICAgICA8TWFudWFsRGlhbG9nIG9wZW49e2RpYWxvZy5vcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0vPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8TWF0ZXJpYWxUYWJsZVxyXG4gICAgICB0YWJsZVJlZj17dGFibGVSZWZ9XHJcbiAgICAgIHRpdGxlPXtcclxuICAgICAgPFNhdmVCdXR0b24gc2V0U2F2ZWRTbmFjaz17c2V0U2F2ZWRTbmFja30gXHJcbiAgICAgIC8vIOuniOyatO2KuCDsnbTtm4Tsl5Ag7KCR6re87ZWE7JqUXHJcbiAgICAgIGRhdGFNYW5hZ2VyPXt0YWJsZVJlZi5jdXJyZW50ID8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciA6IHt9fS8+XHJcbiAgICB9XHJcbiAgICAgIGNvbHVtbnM9e3N0YXRlLmNvbHVtbnN9XHJcbiAgICAgIGRhdGE9e3N0YXRlLmRhdGF9XHJcbiAgICAgIGxvY2FsaXphdGlvbj17bG9jYWxpemF0aW9ufSAvLyDroZzsu6zrnbzsnbTspohcclxuICAgICAgb3B0aW9ucz17b3B0aW9uc30gLy8g64K067O064K06riwLCDqt7jro6jtlZFcclxuICAgICAgYWN0aW9ucz17Wy8vIOupgO2LsCDshYDroInshZgg7J6R7JeFXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b29sdGlwIDogJ1JlbW92ZSB0aGUgU2VsZWN0ZWQgcm93KHMpJyxcclxuICAgICAgICAgICAgaWNvbiA6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICBvbkNsaWNrIDogKGUgLCBkZWxldGlvbnMpID0+IHsgIC8vIOyEoO2Dne2VnCDssrTtgazrsJXsiqTsl5Ag64yA7ZW0IOuqqOuRkCDsgq3soJwg7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGRhdGEuaW5kZXhPZih2KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZEYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucHJldkRhdGEgLCBkYXRhfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdfSBcclxuICAgICAgZWRpdGFibGU9e3tcclxuICAgICAgICBvblJvd0FkZDogKG5ld0RhdGEpID0+ICAvLyDstpTqsIBcclxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJldlN0YXRlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgb25Sb3dVcGRhdGU6IChuZXdEYXRhLCBvbGREYXRhKSA9PiAgLy8g7IiY7KCVXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAob2xkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgICAgZGF0YVtkYXRhLmluZGV4T2Yob2xkRGF0YSldID0gbmV3RGF0YTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBkYXRhIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPE1hcmdpbi8+XHJcbiAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nbmVlZCBzb21lIGhlbHA/ID8gZG91YmxlLWNsaWNrIGFueSBzcGFjZSAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NhdmVkU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNhdmVkU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdTQVZFRCAhJyBzdGF0dXM9XCJzdWNjZXNzXCIvPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e2Vycm9yU25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldEVycm9yU25hY2soe29wZW46ZmFsc2V9KX0gXHJcbiAgICBjb250ZW50PSdFUlJPUiAhJyBzdGF0dXM9XCJlcnJvclwiLz5cclxuICAgIDwvQm94PlxyXG4gICAgKX1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufSIsIlxyXG5pbXBvcnQge0RpYWxvZyxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG4gICAgTGlzdCxcclxuICAgIExpc3RJdGVtLFxyXG4gICAgTGlzdEl0ZW1UZXh0LFxyXG4gICAgQm94LFxyXG4gICAgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gICAgaWNvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICczdncnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbnVhbERpYWxvZyAocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3Qge29wZW4sIG9uQ2xvc2V9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpY29ucyA9IFtcclxuICAgICAgICB7aWNvbiA6ICdhZGRfYm94JyAsIGRlc2NyaXB0aW9uIDogJ1tBZGRdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJ1tFZGl0XSByZWNvcmRzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NlYXJjaCcgLCBkZXNjcmlwdGlvbiA6ICdUeXBlIGRvd24gd29yZHMgdG8gW3NlYXJjaF0uJ30sXHJcbiAgICAgICAge2ljb24gOiAnc2F2ZV9hbHQnICwgZGVzY3JpcHRpb24gOiAnW0Rvd25sb2FkXSBmaWxlcyBpbiBDVlMgZm9ybWF0Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ3ZpZXdfd2VlaycgLCBkZXNjcmlwdGlvbiA6ICdbU2VsZWN0XSBjb2x1bW5zIHRvIGJlIGRpc3BsYXllZCd9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtkZWxldGVdIHJvd3MuJ30sXHJcbiAgICAgICAge2ljb24gOiAnY2hlY2tfYm94JyAsIGRlc2NyaXB0aW9uIDogJyDikaAgU2VsZWN0IHRoZSBjaGVja2JveCBvbiB0aGUgcm93Lid9LFxyXG4gICAgICAgIHtpY29uIDogJ2ZhY3RfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnIOKRoSBDaGVjayB0aGUgbnVtYmVyIG9mIHRoZSByb3dzIHNlbGVjdGVkLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2RlbGV0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGiIENsaWNrIHRoZSBCaW4gaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUuJ30sXHJcbiAgICAgICAge2ljb24gOiAncGxheWxpc3RfYWRkX2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJ0ZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gW0VkaXRdIGhlYWRlcnMuJ30sXHJcbiAgICAgICAge2ljb24gOiAnbWVudScgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIE9wZW4gTVlQQUdFJ30sXHJcbiAgICAgICAge2ljb24gOiAnY3JlYXRlJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2xpY2sgdGhlIFBlbmNpbCBpY29uJ30sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgb25DbG9zZT17b25DbG9zZX0gb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPiBCQVNJQyBNQU5VQUwgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbnMubWFwKChpY29uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17YCR7aWNvbn0gKyAke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17YG1hdGVyaWFsLWljb25zICR7Y2xhc3Nlcy5pY29ufWB9IHN0eWxlPXt7d2lkdGg6JzN2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aWNvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICA8L0RpYWxvZz5cclxuICAgIClcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4uL3V0aWwvTWFuYWdlbWVudEFQSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtzZXRTYXZlZFNuYWNrICwgZGF0YU1hbmFnZXJ9KSB7XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrICgpIHtcclxuICAgICAgICAgIC8vIFNBVkUgRVZFTlQgdXRpbCA+IE1hbmFnZW1lbnRBUEkuc2F2ZURhdGEg66eM65Ok7Ja07IScIOy9nO2VmOq4sFxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gZGF0YU1hbmFnZXIuY29sdW1ucy5yZWR1Y2UoKG9iaix2LGkpPT57XHJcbiAgICAgICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICAgICAgZ3JvdXBpbmdzLnB1c2godi5ncm91cGluZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICB9LHt9KTtcclxuICAgICAgICAgIGRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7dGFibGVEYXRhLCAuLi5yZXN0fSA9IHY7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyZXN0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgIHJlc3VsdCA6IFxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShkYXRhKX1cclxuICAgICAgICAgICR7Z3JvdXBpbmdzfVxyXG4gICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1cclxuICAgICAgICBgKVxyXG4gICAgICAgIHNhdmVEYXRhKGhlYWRlcnMsZ3JvdXBpbmdzLGRhdGEpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHNldFNhdmVkU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8VG9vbHRpcCB0aXRsZT0nQ2xpY2sgdG8gU0FWRSAoIEN0cmwgKyBTICknPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBcclxuICAgICAgICBvbkNsaWNrPXsoKT0+b25DbGljaygpfT5cclxuICAgICAgICAgIFNBVkVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtBZGRCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbi8vIERBVEEgVEFCTEUgT1BUSU9OU1xyXG5cclxuIGV4cG9ydCBjb25zdCBvcHRpb25zPSB7XHJcbiAgICBleHBvcnRCdXR0b246IHRydWUsXHJcbiAgICBncm91cGluZzp0cnVlLFxyXG4gICAgc2VsZWN0aW9uOnRydWUsXHJcbiAgICBoZWFkZXJTdHlsZTp7IFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uc0NvbHVtbkluZGV4Oi0xLCAgLy8g7JWh7IWYIOyVhOydtOy9mOychOy5mFxyXG4gICAgY29sdW1uc0J1dHRvbiA6IHRydWUsIFxyXG4gICAgZGVib3VuY2VJbnRlcnZhbCA6IDE2MCwgLy8g66Gc65Sp7Iuc6rCEXHJcbiAgICBwYWdlU2l6ZSA6IDE1LCAgICAgICAgICAvLyDtjpjsnbTsp4DsgqzsnbTspohcclxuICAgIHBhZ2VTaXplT3B0aW9ucyA6IFs1LCAxNSwgMzAsIDUwLCAxMDBdLCAvLyDtjpjsnbTspogg7IKs7J207KaIIOyiheulmFxyXG4gIH1cclxuIGV4cG9ydCBjb25zdCBsb2NhbGl6YXRpb24gPSB7XHJcbiAgICBwYWdpbmF0aW9uIDogeyBsYWJlbERpc3BsYXllZFJvd3MgOiAne2NvdW50fSByb3dzIHwge2Zyb219LXt0b30nICwgfSxcclxuICAgIHRvb2xiYXI6IHtuUm93c1NlbGVjdGVkOiAnezB9IHJvdyhzKSBzZWxlY3RlZCd9LFxyXG4gICAgaGVhZGVyOiB7YWN0aW9uczogJ0VkaXQnfSxcclxuICAgIGJvZHk6IHtlbXB0eURhdGFTb3VyY2VNZXNzYWdlOiBcclxuICAgICAgICAoXHJcbiAgICAgICAgPEJveCBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICB7YE5vIFJlY29yZHMgdG8gZGlzcGxheWB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgZW5kSWNvbj17PEFkZEJveC8+fVxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2BDbGljayB0aGUgcGx1cyBpY29uIG9uIHRoZSByaWdodCBhYm92ZSBmb3IgYSBuZXcgcmVjb3JkLiBgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gIH1cclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7VG9vbGJhciwgRHJhd2VyICwgQnV0dG9uICwgR3JpZCxcclxuICAgICBEaXZpZGVyLCBBcHBCYXIgYXMgQXBwYmFyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBIaWRlT25TY2hyb2xsIGZyb20gXCIuLi9jdXN0b21Ib29rL0hpZGVPblNjaHJvbGxcIjtcclxuaW1wb3J0IFNpZGVNZW51TGlzdCBmcm9tIFwiLi9TaWRlTWVudUxpc3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCBTaWduT3V0QnV0dG9uIGZyb20gXCIuL1NpZ25PdXRCdXR0b25cIjtcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBhbGlnbkl0ZW1zOidmbGV4LXN0YXJ0JyxcclxuICAgICAgICBwYWRkaW5nVG9wOjE4LFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206MTgsXHJcbiAgICB9LFxyXG4gICAgbGVmdCA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBwYWRkaW5nTGVmdDozMCxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LXN0YXJ0J1xyXG4gICAgfSxcclxuICAgIGNlbnRlciA6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICByaWdodCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDo0NSxcclxuICAgICAgICBqdXN0aWZ5OidmbGV4LWVuZCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIHBhZGRpbmc6YDAgJHt0aGVtZS5zcGFjaW5nKDMpfWBcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYgKHByb3BzKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBtZW51IDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3IsIG9wZW4pID0+IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZsYWcgPSBvcGVuPyBzdGF0ZVthbmNob3JdID8gZmFsc2UgOiB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IGZsYWcgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgYW5jaG9yID0gcHJvZmlsZS5uYW1lPyAnTVlQQUdFJyA6J0xPR0lOJztcclxuICAgIGNvbnN0IGxpbmtzID0gWydib2FyZCcsJ21hbmFnZW1lbnQnXTtcclxuICAgIGNvbnN0IExvZ291dEJ0biA9IHByb2ZpbGUubmFtZT8gPFNpZ25PdXRCdXR0b24vPiA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhpZGVPblNjaHJvbGwgey4uLnByb3BzfT5cclxuICAgICAgICA8QXBwYmFyIGNvbG9yPSdpbmhlcml0JyBzdHlsZT17e2JveFNoYWRvdzonbm9uZSd9fT5cclxuICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT48QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJz4gSG9tZSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke2xpbmt9YH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319IGtleT17bGlua30+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IHtsaW5rfSA8L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50ZXJ9PjxzcGFuPjwvc3Bhbj48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIHRydWUpfSBzdHlsZT17e21hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthbmNob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge0xvZ291dEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyIG9wZW49e3N0YXRlW2FuY2hvcl19IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gdmFyaWFudD0ncGVyc2lzdGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtTaWRlTWVudUxpc3QoIHsuLi5wcm9wcywgYW5jaG9yICx0b2dnbGVEcmF3ZXIgLCBwcm9maWxlfSApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcGJhcj5cclxuICAgICAgICA8L0hpZGVPblNjaHJvbGw+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtVGV4dCwgTGlzdEl0ZW1BdmF0YXIgLCBEaXZpZGVyLCBMaXN0SXRlbSwgVHlwb2dyYXBoeSAsIEF2YXRhciwgSWNvbkJ1dHRvbiAsXHJcbiAgICAgTW9kYWwsIEJveCwgQnV0dG9uLFxyXG4gICAgIFBhcGVyLFxyXG4gICAgIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgU2lnbkluQnV0dG9uIGZyb20gJy4vU2lnbkluQnV0dG9uJztcclxuaW1wb3J0IGdvb2dsZVNpZ25pbkltYWdlIGZyb20gJy4uL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmcnO1xyXG5pbXBvcnQge3JlZGlyZWN0R29vZ2xlTG9naW59IGZyb20gJy4uL3V0aWwvTG9naW5BUEknO1xyXG5pbXBvcnQge0VkaXQsIEluZm8sIERlbGV0ZUZvcmV2ZXIsIFdhcm5pbmd9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHtHbG9iYWxTbmFja2JhckNvbnRleHR9IGZyb20gJy4uL2FwcCdcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbGlzdCA6IHtcclxuICAgICAgICB3aWR0aCA6ICcyM3Z3JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdzdGFydCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW0gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEl0ZW1UZXh0IDoge1xyXG4gICAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYXJnZUF2YXRhciA6IHtcclxuICAgICAgICB3aWR0aCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgIH0sXHJcbiAgICBpbmxpbmUgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdpbmxpbmUnXHJcbiAgICB9LFxyXG4gICAgbGlzdFRleHQgOiB7XHJcbiAgICAgICAgY29sb3IgOiAnIzgzODI4MicsXHJcbiAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbW9kYWwgOiB7XHJcbiAgICAgICAgdG9wIDogJzUwJScsXHJcbiAgICAgICAgbGVmdCA6ICc1MCUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICBtaW5XaWR0aCA6IDQwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBtb2RhbFJvd0JveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsQ29sQm94IDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdzdGFydCdcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZGVyJ1xyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUxpc3QgKHthbmNob3IgLCB0b2dnbGVEcmF3ZXIsIHByb2ZpbGV9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBoYW5kbGVHbG9iYWxTbmFja2JhciA9IFJlYWN0LnVzZUNvbnRleHQoR2xvYmFsU25hY2tiYXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtlbWFpbElucHV0LCBzZXRFbWFpbElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2tMb2dpbiAoKSB7XHJcbiAgICAgICAgcmVkaXJlY3RHb29nbGVMb2dpbigpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja01vZGFsID0gKCkgPT4gc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRFbWFpbElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbWFpbElucHV0ID09PSBwcm9maWxlLmVtYWlsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfsnbzsuZgnKTtcclxuICAgICAgICAgICAgc2F2ZURhdGEoe30sW10sW3t9XSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUdsb2JhbFNuYWNrYmFyKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuOnRydWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZGF0YS5yZXN1bHQgPT09ICdzdWNjZXNzJyA/ICdzdWNjZXNzJyA6ICdlcnJvcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sMTUwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlR2xvYmFsU25hY2tiYXIoe1xyXG4gICAgICAgICAgICAgICAgb3Blbjp0cnVlLCBcclxuICAgICAgICAgICAgICAgIHJlc3VsdDonZXJyb3InXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNMb2dnZWQgPSBwcm9maWxlPyBwcm9maWxlLm5hbWU/IHRydWUgOiBmYWxzZSA6IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxyXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXNMb2dnZWQ/ICdQUk9GSUxFJyA6ICdMT0dJTiBNRU5VJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuXHJcbiAgICAgICAgICAgIHtpc0xvZ2dlZD8gXHJcblxyXG4gICAgICAgICAgICAoPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtwcm9maWxlLnBpY3R1cmV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZUF2YXRhcn0gYWx0PXtwcm9maWxlLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvZmlsZS5uYW1lfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRleHR9PjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgdmFyaWFudD1cImluc2V0XCIgY29tcG9uZW50PVwibGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0VNQUlMIDogJyBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3NwYW4nIHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dFByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mbyBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3ttYXJnaW5SaWdodDonMXZ3J319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHNlY29uZGFyeT0nRURJVCBIRUFERVJTJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nZW5kJyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBjb2xvcj0ncHJpbWFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nIGNvbG9yPSdzZWNvbmRhcnknIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzF2dyd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBzZWNvbmRhcnk9J1JFTU9WRSBBTEwgREFUQScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J2VuZCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVyIGNvbG9yPSdzZWNvbmRhcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiDrqqjri6wgKi99XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIG9wZW49e21vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlT25DbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLWNvbnRlbnRzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxSb3dCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nc3RhcnQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJyBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlciBjb2xvcj0nc2Vjb25kYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtdGl0bGVcIiB2YXJpYW50PSdidXR0b24nIGRpc3BsYXk9J2Jsb2NrJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F1dGlvbiA6IHBlcm1hbmVudCBkZWxldGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxDb2xCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1jb250ZW50c1wiIHZhcmlhbnQ9J2JvZHkxJyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BBbGwgZGF0YSB3aWxsIGJlIGRlbGV0ZWQgYW5kIGNhbm5vdCBiZSByZWNvdmVyZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgY29ycmVjdGx5IHRvIGNvbnRpbnVlLmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJz57cHJvZmlsZS5lbWFpbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFJvd0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPSdFLU1BSUwnIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgc2l6ZT0nbGFyZ2UnIG9uQ2xpY2s9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAoPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8U2lnbkluQnV0dG9uIHNpZ25Jbj17Z29vZ2xlU2lnbmluSW1hZ2V9Lz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT4pfVxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMsQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGJ1dHRvbiA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICB9XHJcbn0pKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5CdXR0b24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtzaWduSW59ID0gcHJvcHM7IC8vIOydtOuvuOyngFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2lnbklufSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT48L2ltZz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHAnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSAsIEljb25CdXR0b24sIFRvb2x0aXB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbG9nb3V0IDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsXHJcbiAgICAgICAgcGFkZGluZyA6ICcycHgnLFxyXG4gICAgICAgIG1hcmdpbiA6IDAsXHJcbiAgICAgICAgd2lkdGggOiAnYXV0bycsXHJcbiAgICB9XHJcbn0pKVxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6J2JvbGQnXHJcbiAgICB9LFxyXG4gIH0pKShUb29sdGlwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnLCd1c2VyJ10pO1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPSdMb2ctb3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3BhZGRpbmc6NH19IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD4gICAgXHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZlclVSTCBmcm9tIFwiLi9zZXJ2ZXJVUkxcIjtcclxuXHJcbi8vIEdvb2dsZSBPcGVuSUQgQ29ubmVjdCDsnbTsmqntlZjquLBcclxuLy8g7LC46rOgIOq4sOyIoOu4lOuhnOq3uCA6IGh0dHBzOi8vd3d3LmRhbGVzZW8uY29tL2dvb2dsZS1vaWRjL1xyXG5cclxuLy8gVVJMIGV4cG9ydFxyXG4vLyBzZXZlcuyXkOyEnCDrsJvsnYAgdXJs66GcIOumrOuLpOydtOugie2KuFxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RHb29nbGVMb2dpbiA9ICgpID0+IGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L2xvZ2luYCkudGhlbihyZXMgPT4gbG9jYXRpb24uYXNzaWduKHJlcy5kYXRhKSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbkFuZFByb2ZpbGUgPSAodG9rZW4pID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3NlcnZlclVSTH0vbG9naW5gLCB7dG9rZW59ICx7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzIDogdHJ1ZSxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2U9PiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UuZGF0YSkpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSAnLi9zZXJ2ZXJVUkwnO1xyXG5cclxuLy8g7YWM7J2067iUIOuNsOydtO2EsCDrsJvslYTsmKTquLAgY29va2ll7JeQIOuLtOq4tCB0b2tlbuyCrOyaqVxyXG5leHBvcnQgY29uc3QgZ2V0TWFuYWdlbWVudFRhYmxlID0gICgpID0+IHtcclxuICAgIHJldHVybiAoYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbWFuYWdlbWVudGAse1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczp0cnVlXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlSGVhZGVycyA9IChoZWFkZXJzLCBncm91cGluZ3MpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBzYXZpbmcgaGVhZGVycyA6IFxyXG4gICAgaGVhZGVycyA6ICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9XHJcbiAgICBncm91cGluZ3MgOiAke0pTT04uc3RyaW5naWZ5KGdyb3VwaW5ncyl9YCk7XHJcbiAgICByZXR1cm4gKGF4aW9zLnB1dChgJHtzZXJ2ZXJVUkx9L2hlYWRlcnNgLCB7XHJcbiAgICAgICAgLy8gZGF0YVxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgZ3JvdXBpbmdzXHJcbiAgICB9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pLnRoZW4ocmVzID0+IFByb21pc2UucmVzb2x2ZShyZXMuZGF0YSkpKTsgICAgLy8g7L+g7YKk7JmAIO2VqOq7mFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZURhdGEgPSAoaGVhZGVycywgZ3JvdXBpbmdzLCBkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLnB1dChgJHtzZXJ2ZXJVUkx9L2RhdGFgLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBncm91cGluZ3MsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMuZGF0YSlcclxuICAgIH0pKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IChoZWFkZXJzICwgZ3JvdXBpbmdzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYGRhdGEgcGFyc2luZyEhISFgKVxyXG4gICAgcmV0dXJuIChPYmplY3QudmFsdWVzKGhlYWRlcnMpLmZpbHRlcih2PT52KS5tYXAoKHZhbHVlLGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUgOiB2YWx1ZSxcclxuICAgICAgICBmaWVsZCA6IHZhbHVlLFxyXG4gICAgICAgIGdyb3VwaW5nIDogZ3JvdXBpbmdzW2luZGV4XVxyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfSIsImV4cG9ydCBkZWZhdWx0IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==