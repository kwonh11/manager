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
      height: '110vh',
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
    })["catch"](function (error) {
      console.log(error);
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
    Promise.resolve(response.data);
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
/* harmony default export */ __webpack_exports__["default"] = ("https://management-apple.herokuapp.com");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbkltYWdlL2dvb2dsZVNpZ25pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbUhvb2svSGlkZU9uU2Nocm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tSG9vay9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL1NuYWNrQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Ib29rL3VzZU9uRmlyc3RSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvQ3Jvc3NsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW1hZ2VTbGlkZVNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvSW50cm9kdWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL0ludHJvZHVjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTGlzdENhcm91c2VsRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9TdGFydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Fycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JsYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Rlc2suanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZWFzeS1sb2dpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oYW5kbGUtdGFibGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFrZS1oZWFkZXJzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tb29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL215bWVudS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zbGlkZTAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcnQtcmlnaHQtYXdheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93aGl0ZS1hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93aGl0ZWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9EZWZhdWx0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC9IZWFkZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L01hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvTWFudWFsRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L1NhdmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZW1lbnQvVGFibGVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lkZU1lbnVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbkluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYvU2lnbk91dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9Mb2dpbkFQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9NYW5hZ2VtZW50QVBJLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9zZXJ2ZXJVUkwuanMiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvdXRDb250ZXh0IiwiUHJvZ3Jlc3NDb250ZXh0IiwiR2xvYmFsU25hY2tiYXJDb250ZXh0IiwiQXBwIiwicXMiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0ciIsImlkX3Rva2VuIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwib3BlbiIsInJlc3VsdCIsImdsb2JhbFNuYWNrYmFyIiwic2V0R2xvYmFsU25hY2tiYXIiLCJwcm9ncmVzc1JlZiIsInVzZVJlZiIsImhhbmRsZUJlZm9yZXVubG9hZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJnZXRUb2tlbkFuZFByb2ZpbGUiLCJ0aGVuIiwiZGF0YSIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJKU09OIiwic3RyaW5naWZ5IiwicGF0aCIsIm1heEFnZSIsImVyciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImNvbG9yIiwicGFwZXIiLCJiYWNrTG9nbyIsImp1c3RpZnlTZWxmIiwiaW5wdXRCb3giLCJtYXJnaW5Ub3AiLCJCb2FyZCIsImNsYXNzZXMiLCJpbnB1dFJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJ2Iiwic2hyaW5rIiwiSGlkZU9uU2Nyb2xsIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsIkxvYWRpbmciLCJvbkNsb3NlIiwiY29udGVudCIsInN0YXR1cyIsImRpcmVjdGlvbiIsImZvbnRTaXplIiwidXNlT25GaXJzdFJlbmRlciIsImZ1bmMiLCJpc0ZpcnN0UmVmIiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwicm9vdCIsIm1pbkhlaWdodCIsImZvb3RlciIsInBhZGRpbmciLCJzcGFjaW5nIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJncmV5IiwidGV4dEFsaWduIiwiYXJyb3ciLCJhbGlnblNlbGYiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kU2l6ZSIsIlN0aWNreUZvb3RlciIsInBhdGhuYW1lIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwidHJhbnNpdGlvbiIsInRhcmdldCIsInN0eWxlIiwiY3Vyc29yIiwiYmFja2dyb3VuZEltYWdlIiwibWFuYWdlbWVudEJhY2tncm91bmQiLCJ0cmFuc2Zvcm0iLCJ3aGl0ZUFycm93IiwidGV4dENvbnRhaW5lciIsImJhY2tncm91bmRDb2xvciIsInRleHRTaGFkb3ciLCJJbWFnZUNhcm91c2VsIiwiaW1hZ2VMaXN0IiwibGlzdCIsInNldFN0ZXBwZXIiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJoYW5kbGVBZnRlclNsaWRlIiwic2xpZGVJbmRleCIsImluZGV4IiwibWFwIiwiaW1hZ2UiLCJzcmMiLCJmbGV4V3JhcCIsIkNyb3NzbGluZSIsImZhZGUiLCJzZXRGYWRlIiwiZG9tUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZW50ZXIiLCJleGl0IiwiaW5uZXJCb3giLCJEZXNjcmlwdGlvbiIsImdyb3ciLCJzZXRHcm93IiwidHJhbnNmb3JtT3JpZ2luIiwidGltZW91dCIsImFwcGVhciIsIkhvbWUiLCJzbGlkZTAiLCJkZXNjcmlwdGlvbiIsImVhc3lMb2dpbiIsImxpbmtNYW5hZ2VtZW50UGFnZSIsInN0YXJ0UmlnaHRBd2F5IiwibWFrZUhlYWRlcnMiLCJoYW5kbGVUYWJsZSIsInVzZU15bWVudSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJ0ZXh0UGFwZXIiLCJJbnRyb2R1Y3Rpb24iLCJzdGVwcGVyIiwibG9nb0JveCIsImJpZ0F2YXRhciIsInRleHRXaXRoU2hhZG93IiwibWFyZ2luTGVmdCIsImRlc2NyaXB0aW9uQm94IiwibW9vbkltYWdlIiwiaW5saW5lIiwiRGVzY3JpcHRpb25MaXN0Iiwic2xpZGVTb3VyY2UiLCJpdGVtIiwiYWxpZ25Db250ZW50IiwiTWFpbiIsInVzZVN0eWxlIiwiYnV0dG9uIiwidGV4dCIsInR5cG9ncmFwaHkiLCJ0ZXh0RGVjb3JhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbkNvbnRhaW5lciIsImRlZmF1bHREYXRhIiwiY29sdW1ucyIsInRpdGxlIiwiZmllbGQiLCJncm91cGluZyIsIkRlZmF1bHRQYWdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiZmFkZTIiLCJzZXRGYWRlMiIsImhhbmRsZU9uREVNT0NsaWNrIiwiZGVmYXVsdFBhZ2UiLCJzZXRUaW1lb3V0IiwiZm9ybVJvb3QiLCJkZWZhdWx0SGVhZGVyIiwiSGVhZGVycyIsImhhbmRsZVByb2dyZXNzIiwidXNlQ29udGV4dCIsInNuYWNrIiwic2V0U25hY2siLCJyZXN1bHRTbmFjayIsInNldFJlc3VsdFNuYWNrIiwiaGVhZGVycyIsImdyb3VwaW5ncyIsIkFycmF5IiwiZmlsbCIsInNldERhdGEiLCJkYXRhUmVmIiwiZ2V0TWFuYWdlbWVudFRhYmxlIiwicmVzcG9uc2UiLCJncm91cGluZ0xlbmd0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwiaGVhZGVyc0xlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImhhbmRsZUxvZ291dCIsImhhbmRsZVN1Ym1pdCIsImhyZWYiLCJvcmlnaW4iLCJpc0F1dG9TYXZlIiwiZXZlcnkiLCJmaWx0ZXIiLCJzYXZlSGVhZGVycyIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJoYW5kbGVHcm91cGluZ3MiLCJjaGVja2VkIiwiaGVhZGVyIiwiTWFuYWdlbWVudFRhYmxlIiwic2F2ZWRTbmFjayIsInNldFNhdmVkU25hY2siLCJlcnJvclNuYWNrIiwic2V0RXJyb3JTbmFjayIsImRpYWxvZyIsInNldERpYWxvZyIsImhhc1RhYmxlIiwidGFibGVSZWYiLCJwYXJzZURhdGEiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZU9uU2F2ZSIsImRhdGFNYW5hZ2VyIiwicmVkdWNlIiwib2JqIiwidGFibGVEYXRhIiwicmVzdCIsInNhdmVEYXRhIiwib25kYkNsaWNrIiwib25LZXlkb3duIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJtZXRhS2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1hcmdpbiIsImxvY2FsaXphdGlvbiIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiaWNvbiIsIm9uQ2xpY2siLCJkZWxldGlvbnMiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJldkRhdGEiLCJvblJvd0FkZCIsIm5ld0RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZXZTdGF0ZSIsIm9uUm93VXBkYXRlIiwib2xkRGF0YSIsIk1hbnVhbERpYWxvZyIsImljb25zIiwiZXJyb3IiLCJleHBvcnRCdXR0b24iLCJzZWxlY3Rpb24iLCJoZWFkZXJTdHlsZSIsImFjdGlvbnNDb2x1bW5JbmRleCIsImNvbHVtbnNCdXR0b24iLCJkZWJvdW5jZUludGVydmFsIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJwYWdpbmF0aW9uIiwibGFiZWxEaXNwbGF5ZWRSb3dzIiwidG9vbGJhciIsIm5Sb3dzU2VsZWN0ZWQiLCJhY3Rpb25zIiwiYm9keSIsImVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UiLCJmbGV4R3JvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibGVmdCIsInBhZGRpbmdMZWZ0IiwianVzdGlmeSIsImNlbnRlciIsInJpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiTmF2IiwibWVudSIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsImV2ZW50IiwiZmxhZyIsImxpbmtzIiwiTG9nb3V0QnRuIiwiYm94U2hhZG93IiwibGluayIsIm1hcmdpblJpZ2h0IiwiU2lkZU1lbnVMaXN0IiwibGlzdEl0ZW0iLCJsaXN0SXRlbVRleHQiLCJsYXJnZUF2YXRhciIsImxpc3RUZXh0IiwibW9kYWwiLCJwb3NpdGlvbiIsImJvcmRlciIsInNoYWRvd3MiLCJtb2RhbFJvd0JveCIsIm1vZGFsQ29sQm94IiwiTWVudUxpc3QiLCJoYW5kbGVHbG9iYWxTbmFja2JhciIsImVtYWlsSW5wdXQiLCJzZXRFbWFpbElucHV0IiwiaGFuZGxlT25DbGlja0xvZ2luIiwicmVkaXJlY3RHb29nbGVMb2dpbiIsImhhbmRsZU9uQ2xpY2tNb2RhbCIsInNldE1vZGFsIiwiaGFuZGxlT25DbG9zZU1vZGFsIiwiaGFuZGxlT25TdWJtaXQiLCJyZWxvYWQiLCJpc0xvZ2dlZCIsImdvb2dsZVNpZ25pbkltYWdlIiwiU2lnbkluQnV0dG9uIiwic2lnbkluIiwibG9nb3V0IiwiTGlnaHRUb29sdGlwIiwid2l0aFN0eWxlcyIsImNvbW1vbiIsIndoaXRlIiwiVG9vbHRpcCIsImF4aW9zIiwiZ2V0Iiwic2VydmVyVVJMIiwicmVzIiwiYXNzaWduIiwidG9rZW4iLCJwb3N0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QUFHNEMsS0FGSDtBQUdMM0MsY0FBUSxFQUFHb0IsU0FBUyxDQUFDdkYsS0FBRDtBQUhmLEtBQVA7QUFLRCxHQU5PLENBQVI7QUFPRCxDQVRILEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWUsdUdBQWYsRSIsImZpbGUiOiJhcHAuNGI5MmYzODJjYzhjYjIwNzhjMDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInJlYWN0LmJ1bmRsZVwiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIiBpbXBvcnQgeyBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXYvTmF2XCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZC9Cb2FyZFwiO1xyXG5pbXBvcnQgTWFuYWdlbWVudCBmcm9tIFwiLi9tYW5hZ2VtZW50L01hbmFnZW1lbnRcIjtcclxuaW1wb3J0IEhlYWRlcnMgZnJvbSAnLi9tYW5hZ2VtZW50L0hlYWRlcnMnO1xyXG5pbXBvcnQge0Nzc0Jhc2VsaW5lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9mb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnXHJcbmltcG9ydCB7IGdldFRva2VuQW5kUHJvZmlsZSB9IGZyb20gXCIuL3V0aWwvTG9naW5BUElcIjtcclxuaW1wb3J0IEN1c3RvbVNuYWNrYmFyIGZyb20gJy4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcblxyXG4vLyDsu6jthY3siqTtirgg66qp66GdXHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IExvZ291dENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTbmFja2JhckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCB7IGlkX3Rva2VuIH0gPSBxcy5wYXJzZSh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgICBjb25zdCBbIHByb2ZpbGUgLCBzZXRQcm9maWxlIF0gPSBSZWFjdC51c2VTdGF0ZShjb29raWVzLnByb2ZpbGUpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnbG9iYWxTbmFja2Jhciwgc2V0R2xvYmFsU25hY2tiYXJdID0gUmVhY3QudXNlU3RhdGUoe29wZW4gOiBmYWxzZSAsIHJlc3VsdDogJ3N1Y2Nlc3MnfSlcclxuICAgIGNvbnN0IHByb2dyZXNzUmVmID0gUmVhY3QudXNlUmVmKDApO1xyXG4gICAgY29uc3QgaGFuZGxlQmVmb3JldW5sb2FkID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwcm9ncmVzcyA6ICR7cHJvZ3Jlc3NSZWYuY3VycmVudH1gKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBwcm9ncmVzc1JlZi5jdXJyZW50ID0gKHByb2dyZXNzUmVmLmN1cnJlbnQgPCAxMDAgPyBwcm9ncmVzc1JlZi5jdXJyZW50ICsgMjAgOiAxMDApO1xyXG4gICAgICAgIGlmIChwcm9ncmVzc1JlZi5jdXJyZW50ID09PSAxMDApIHtcclxuICAgICAgICAgICAgIHByb2dyZXNzUmVmLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgIHNldEdsb2JhbFNuYWNrYmFyKHtvcGVuOnRydWUgLCByZXN1bHQ6cmVzdWx0fSk7XHJcbiAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9LDIwMClcclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBBUEkg7Iuk7ZaJJyk7XHJcbiAgICAgICAgICAgIGdldFRva2VuQW5kUHJvZmlsZShpZF90b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtuYW1lICxlbWFpbCwgcGljdHVyZX0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlIGRhdGEgOiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKFwicHJvZmlsZVwiLHtuYW1lICwgZW1haWwsIHBpY3R1cmV9LHtwYXRoOlwiL1wiICwgbWF4QWdlIDogNzIwMH0pOyAgLy8gbWF4QWdlIDogMuyLnOqwhFxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIG9jY3VyZWQgOiAke2Vycn1gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2lkX3Rva2VuXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGNvb2tpZXMucHJvZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY29va2llcy5wcm9maWxlIDogJHtKU09OLnN0cmluZ2lmeShjb29raWVzLnByb2ZpbGUpfWApO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxlKGNvb2tpZXMucHJvZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29va2llcy5wcm9maWxlXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9maWxlIHx8IHtuYW1lIDogJyd9fT4gICAgICAgICAgey8qIOycoOyggCDtlITroZztlYQg7Luo7YWN7Iqk7Yq4ICAgICovfVxyXG4gICAgICAgICAgICA8TG9nb3V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UHJvZmlsZX0+ICAgey8qIOuhnOq3uOyVhOybgyDsnbTrsqTtirgg7Luo7YWN7Iqk7Yq4ICAgKi99XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyhyZXN1bHQpPT5oYW5kbGVCZWZvcmV1bmxvYWQocmVzdWx0KX0+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldEdsb2JhbFNuYWNrYmFyfT5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cclxuICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eygpPT48SG9tZSBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2JvYXJkJyByZW5kZXI9eygpPT48Qm9hcmQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9tYW5hZ2VtZW50JyByZW5kZXI9eygpPT4gPE1hbmFnZW1lbnQgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9oZWFkZXJzJyByZW5kZXI9eygpPT4gPEhlYWRlcnMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz59PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nLycgcmVuZGVyPXsocHJvcHMpPT48Rm9vdGVyIHsuLi5wcm9wc30vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPC9HbG9iYWxTbmFja2JhckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvUHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0xvZ291dENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtnbG9iYWxTbmFja2Jhci5vcGVufSBvbkNsb3NlPXsoKT0+c2V0R2xvYmFsU25hY2tiYXIoe29wZW46ZmFsc2V9KX0gXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdD09PSdlcnJvcic/IGBOb3Qgc2F2ZWQuXHJcbiAgICAgICAgICAgIFJlYXNvbiA6IEludmFsaWQgaW5wdXQuYCA6JyBTQVZFRCAnfSBzdGF0dXM9e2dsb2JhbFNuYWNrYmFyLnJlc3VsdH1cclxuICAgICAgICAgICAgZGlyZWN0aW9uPXt7dmVydGljYWw6J3RvcCcsIGhvcml6b250YWw6J3JpZ2h0J319Lz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIEZhZGUsIFBhcGVyLCBUeXBvZ3JhcGh5LENvbnRhaW5lciwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTIwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgcGFwZXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNzV2dycsXHJcbiAgICAgICAgaGVpZ2h0IDogJzg1dmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJhY2tMb2dvIDoge1xyXG4gICAgICAgIGp1c3RpZnlTZWxmIDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgaW5wdXRCb3ggOiB7XHJcbiAgICAgICAgd2lkdGggOiAnNDB2dycsXHJcbiAgICAgICAgbWFyZ2luVG9wOic1dmgnXHJcbiAgICB9XHJcbn0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoe2lzTG9hZGluZ30pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyBlbnRlciBwcmVzc2VkXHJcbiAgICAgICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJykuZm9jdXMoKTsgLy8gZm9jdXMg7J6R64+ZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs1fT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYmFja0xvZ299ID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJyAsIGNvbG9yOicjZTBlMGUwJ319PiBJTiBSRUFEWS4gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInICwgY29sb3I6JyNlMGUwZTAnfX0+IH4gMjAyMC8wNi8yMSA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEJveH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHJlZj17diA9PiBpbnB1dFJlZi5jdXJyZW50ID0gdn1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGVTaWduaW4uMWNlMWFhYTVhMTI3ZmEzZTQ5MmExMmJiNjJmOTkzMDQucG5nXCI7IiwiaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuXHJcbi8vIEdOQuydmCDsiqzrnbzsnbTrk5zquLDriqVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9IGRpcmVjdGlvbj1cImRvd25cIiBpbj17IXRyaWdnZXJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NsaWRlPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQge0JveCwgQ2lyY3VsYXJQcm9ncmVzcywgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZyAoe2lzTG9hZGluZ30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtcclxuICAgICAgICBpc0xvYWRpbmcgJiYgXHJcbiAgICAgICAgICAgICg8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMTB2aCcsIHdpZHRoOicxMDB2dycsIGRpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YFNhdmluZyBjaGFuZ2VzYH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICAgICAgICAgIDwvQm94PilcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbn0iLCJpbXBvcnQgeyBTbmFja2JhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe29wZW4sIG9uQ2xvc2UsIGNvbnRlbnQsIHN0YXR1cywgZGlyZWN0aW9ufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXtkaXJlY3Rpb24/IGRpcmVjdGlvbiA6IHsgdmVydGljYWw6J3RvcCcsIGhvcml6b250YWw6J2NlbnRlcicgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtvbkNsb3NlfSBzZXZlcml0eT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgdmFyaWFudD0nZmlsbGVkJyBtZXNzYWdlPXt7Zm9udFdlaWdodDonYm9sZGVyJywgZm9udFNpemU6JzVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgKVxyXG59IiwiXHJcbi8vIGNvbnRzdHJ1Y3RvciDtm4VcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT25GaXJzdFJlbmRlciAoZnVuYykge1xyXG4gICAgY29uc3QgaXNGaXJzdFJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuICAgIGlmIChpc0ZpcnN0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpc0ZpcnN0UmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBmdW5jKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBMaW5rfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB3aGl0ZUFycm93IGZyb20gJy4uL2ltYWdlcy93aGl0ZS1hcnJvdy5wbmcnO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2Fycm93LnBuZyc7XHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgbWFuYWdlbWVudEJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGcnO1xyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICBKYWNrJ3MgV2Vic2l0ZVxyXG4gICAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgICAgeycuJ31cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBtaW5IZWlnaHQ6ICcyMHZoJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXHJcbiAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgICBiYWNrZ3JvdW5kIDogdGhlbWUucGFsZXR0ZS5ncmV5WzIwMF0sXHJcbiAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgICBjb2xvciA6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgd2lkdGggOiAnNHZ3JyxcclxuICAgICAgaGVpZ2h0IDogJzR2dycsXHJcbiAgICAgIHBhZGRpbmcgOiAnM3Z3JyxcclxuICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTonMnZoJyxcclxuICAgICAgbWFyZ2luVG9wIDogJzJ2aCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOidjb250YWluJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lGb290ZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtsb2NhdGlvbn0gPSBwcm9wcztcclxuICAgIGNvbnNvbGUubG9nKGBsb2NhdGlvbi5wYXRobmFtZT8gJHtsb2NhdGlvbi5wYXRobmFtZX1gKTtcclxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAoZSkgPT4ge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lID09PSAnL2JvYXJkJz8gbnVsbCA6IChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3R5bGU9e1xyXG4gICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycgPyBcclxuICAgICAgICB7YmFja2dyb3VuZCA6IGBsaW5lYXItZ3JhZGllbnQoYmxhY2ssICNlZWVlZWUpYH0gXHJcbiAgICAgICAgOiBcclxuICAgICAgICB7YmFja2dyb3VuZEltYWdlIDogYHVybCgke21hbmFnZW1lbnRCYWNrZ3JvdW5kfSlgLCBiYWNrZ3JvdW5kU2l6ZSA6ICdhdXRvJywgdHJhbnNmb3JtOiBgc2NhbGVZKC0xKWB9fT5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk1vdmUgdG8gVG9wXCIgYXJpYS1sYWJlbD1cIm1vdmUtdG8tdG9wXCIgcGxhY2VtZW50PVwidG9wXCIgZW50ZXJEZWxheT17MzUwfSBsZWF2ZURlbGF5PXsxNTB9PlxyXG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3d9IHN0eWxlPXtcclxuICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLyc/IFxyXG4gICAgICAgICAge2JhY2tncm91bmQgOmBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHt3aGl0ZUFycm93fSlgfVxyXG4gICAgICAgICAgOiBcclxuICAgICAgICAgIHtiYWNrZ3JvdW5kIDpgbm8tcmVwZWF0IGNlbnRlci84MCUgdXJsKCR7YXJyb3d9KWAsIHRyYW5zZm9ybTpgcm90YXRlKDE4MGRlZylgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfSBvbk1vdXNlT3Zlcj17KGUpPT50cmFuc2l0aW9uKGUpfS8+XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgc3R5bGU9e3tmb250V2VpZ2h0IDogJ2JvbGRlcid9fS8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfSIsImltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgdGV4dENvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgY29sb3IgOiAnI2ZmZicsXHJcbiAgICAgICAgdGV4dFNoYWRvdzonMnB4IDEuNXB4IDEuNXB4IGdyYXknLFxyXG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ2Fyb3VzZWwgKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBpbWFnZUxpc3QgPSBwcm9wcy5saXN0ID8gcHJvcHMubGlzdCA6IFt7fV07XHJcbiAgICBjb25zdCB7c2V0U3RlcHBlciwgY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGV9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBoYW5kbGVBZnRlclNsaWRlID0gKHNsaWRlSW5kZXgpID0+IHtcclxuICAgICAgICBzZXRTdGVwcGVyKHNsaWRlSW5kZXgpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShzbGlkZUluZGV4KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8Q2Fyb3VzZWxcclxuICAgIHNsaWRlSW5kZXg9e2N1cnJlbnRTbGlkZX1cclxuICAgIGFmdGVyU2xpZGU9IHtpbmRleCA9PiBoYW5kbGVBZnRlclNsaWRlKGluZGV4KX1cclxuICAgIGF1dG9wbGF5PXtmYWxzZX1cclxuICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezMwMDB9XHJcbiAgICB0cmFuc2l0aW9uTW9kZT0nc2Nyb2xsJ1xyXG4gICAgc3BlZWQ9ezgwMH1cclxuICAgIGhlaWdodE1vZGU9J21heCdcclxuICAgICAgICA+XHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2VMaXN0Lm1hcCgoaW1hZ2UsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJveCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJ319IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgIyR7aW5kZXh9ICR7aW1hZ2UubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDAlJ319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGluZGV4PT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgKDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDb250YWluZXJ9IHN0eWxlPXt7aGVpZ2h0OicxMDAlJywgYWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUVVJQ0sgU1RBUlQgR1VJREVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2UgeW91ciB3b3JrIGVhc2llclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMScgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR1cm4gdGhlIHNsaWRlIG92ZXIgYW5kIGNoZWNrLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMScgY29sb3I9J2luaGVyaXQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IGNvbnNpc3RzIG9mIGEgZmV3IHNsaWRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0JveD4pXHJcbiAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17aW1hZ2Uuc3JjfS8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICk7XHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94ICwgRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIG1hcmdpbjowLFxyXG4gICAgICBwYWRkaW5nOicxdncnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luOidhdXRvJyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Jvc3NsaW5lKHtjaGlsZHJlbn0pIHtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldEZhZGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSx7ICAgLy8gb3B0aW9uc1xyXG4gICAgICAgICAgcm9vdE1hcmdpbiA6ICctNTBweCAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmFkZSBpbj17ZmFkZX0gdGltZW91dD17e2VudGVyOjIwMDAsIGV4aXQ6ODAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYm94U2hhZG93PXs0fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyb3csIEJveCwgRmFkZSwgVHlwb2dyYXBoeSwgRGl2aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290IDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICczNXZoJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgICBpbm5lckJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgd2lkdGggOiAnMzB2dycsXHJcbiAgICAgICAgY29sb3I6JyNlYWVhZWEnLFxyXG4gICAgICAgIHRleHRTaGFkb3c6ICcxcHggNXB4IDVweCAjOWU5OTk5J1xyXG4gICAgfVxyXG59KSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgIHNldEdyb3coZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICl9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJzE1MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxHcm93IGluPXtncm93fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICBTT01FIFRFWFRcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyQm94fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIFNPTUUgVEVYVFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PiAgICAgIFxyXG4gICAgICAgIDwvR3Jvdz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSBcIi4vSW50cm9kdWN0aW9uXCI7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24yIGZyb20gXCIuL0ludHJvZHVjdGlvbjJcIjtcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7aXNMb2FkaW5nfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgICAgICAgICAgPE1haW4vPlxyXG4gICAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uLz5cclxuICAgICAgICAgICAgICAgICAgPEludHJvZHVjdGlvbjIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBlYXN5TG9naW4gZnJvbSBcIi4uL2ltYWdlcy9lYXN5LWxvZ2luLnBuZ1wiO1xyXG5pbXBvcnQgbGlua01hbmFnZW1lbnRQYWdlIGZyb20gXCIuLi9pbWFnZXMvbGluay1tYW5hZ2VtZW50LXBhZ2UucG5nXCI7XHJcbmltcG9ydCBzdGFydFJpZ2h0QXdheSBmcm9tIFwiLi4vaW1hZ2VzL3N0YXJ0LXJpZ2h0LWF3YXkucG5nXCI7XHJcbmltcG9ydCBtYWtlSGVhZGVycyBmcm9tIFwiLi4vaW1hZ2VzL21ha2UtaGVhZGVycy5wbmdcIjtcclxuaW1wb3J0IGhhbmRsZVRhYmxlIGZyb20gXCIuLi9pbWFnZXMvaGFuZGxlLXRhYmxlLnBuZ1wiO1xyXG5pbXBvcnQgdXNlTXltZW51IGZyb20gXCIuLi9pbWFnZXMvbXltZW51LnBuZ1wiO1xyXG5pbXBvcnQgc2xpZGUwIGZyb20gXCIuLi9pbWFnZXMvc2xpZGUwLnBuZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdRdWljayBzdGFydCBndWlkZScsXHJcbiAgICAgICAgc3JjIDogYCR7c2xpZGUwfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnR1VJREUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ1NpZ24gaW4gd2l0aCBHb29nbGUnLFxyXG4gICAgICAgIHNyYyA6IGAke2Vhc3lMb2dpbn1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ1NpZ24gaW4gd2l0aCBnb29nbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ01vdmUgb24gdG8gbWFuYWdlbWVudCBwYWdlJyxcclxuICAgICAgICBzcmMgOiBgJHtsaW5rTWFuYWdlbWVudFBhZ2V9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICdNb3ZlIG9uIHRvIG1hbmFnZW1lbnQgcGFnZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnQ2xpY2sgdGhlIGJsdWUgYnV0dG9uJyxcclxuICAgICAgICBzcmMgOiBgJHtzdGFydFJpZ2h0QXdheX1gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ2NsaWNrIFwiZ2V0IHN0YXJ0ZWQgcmlnaHQgYXdheVwiIGJ1dHRvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWUgOiAnTWFrZSBIZWFkZXJzJyxcclxuICAgICAgICBzcmMgOiBgJHttYWtlSGVhZGVyc31gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogJ21ha2UgaGVhZGVycycsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lIDogJ0NyZWF0ZSwgRWRpdCwgUmVtb3ZlIHRhYmxlIHJlY29yZHMnLFxyXG4gICAgICAgIHNyYyA6IGAke2hhbmRsZVRhYmxlfWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnaGFuZGxlIHRhYmxlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZSA6ICdVc2UgbXltZW51IHRvIGhhbmRsZSBkYXRhJyxcclxuICAgICAgICBzcmMgOiBgJHt1c2VNeW1lbnV9YCxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6ICd1c2UgbXltZW51JyxcclxuICAgIH0sXHJcbl07IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyb3cgLCBCb3gsIFBhcGVyLEZhZGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcclxuaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuL0ltYWdlU2xpZGVTb3VyY2VzJztcclxuaW1wb3J0IExpc3RDcm91c2VsRGVzY3JpcHRpb24gZnJvbSAnLi9MaXN0Q2Fyb3VzZWxEZXNjcmlwdGlvbic7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy93aGl0ZWJhY2tncm91bmQuanBnJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgOiAnY292ZXInLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIG1pbldpZHRoOiA3NTAsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAwcHgnLFxyXG4gICAgICAgIHdpZHRoIDogJzcwdncnLFxyXG4gICAgICAgIGhlaWdodCA6ICc2NXZoJyxcclxuICAgICAgICBtYXJnaW4gOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdpbmhlcml0J1xyXG4gICAgfSxcclxuICAgIHRleHRQYXBlciA6IHtcclxuICAgICAgICBtaW5XaWR0aCA6IDM1MCxcclxuICAgICAgICB3aWR0aCA6ICc3MHZ3JyxcclxuICAgICAgICBhbGlnblNlbGYgOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9kdWN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtncm93LCBzZXRHcm93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzdGVwcGVyLCBzZXRTdGVwcGVyXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgY3VycmVudFNsaWRlIDogJHtjdXJyZW50U2xpZGV9YClcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRHcm93KGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjozMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICAgICAgPEdyb3cgaW49e2dyb3d9IFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKGdyb3cgPyB7IHRpbWVvdXQ6IHthcHBlYXIgOiAxNTAwICwgZW50ZXIgOiAxNTAwICwgZXhpdCA6IDEwMDB9IH0gOiB7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgey8qIGltYWdlIGNhcm91c2VsICovfVxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VDYXJvdXNlbCBcclxuICAgICAgICAgICAgICAgICAgbGlzdD17aW1hZ2VMaXN0fSBcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlPXtjdXJyZW50U2xpZGV9IFxyXG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U2xpZGU9e3NldEN1cnJlbnRTbGlkZX0gXHJcbiAgICAgICAgICAgICAgICAgIHNldFN0ZXBwZXI9e3NldFN0ZXBwZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICA8R3JvdyBpbj17Z3Jvd31cclxuICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgIHsuLi4oZ3JvdyA/IHsgdGltZW91dDoge2FwcGVhciA6IDIwMDAgLCBlbnRlciA6IDE1MDAgLCBleGl0IDogMTAwMH19IDoge30pfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBsaXN0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Q3JvdXNlbERlc2NyaXB0aW9uIHN0ZXBwZXI9e3N0ZXBwZXJ9ID48L0xpc3RDcm91c2VsRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IFBhcGVyLCBCb3gsIEdyb3csIEF2YXRhciwgVHlwb2dyYXBoeSxGYWRlICwgU2xpZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgbW9vbkltYWdlIGZyb20gJy4uL2ltYWdlcy9tb29uLnBuZyc7XHJcbmltcG9ydCBDcm9zc2xpbmUgZnJvbSAnLi9Dcm9zc2xpbmUnO1xyXG5pbXBvcnQgUHJvamVjdERlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvYmxhY2sucG5nJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICBoZWlnaHQgOiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aCA6ICcxMDB2dycsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcidcclxuICAgIH0sXHJcbiAgICBsb2dvQm94IDoge1xyXG4gICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93J1xyXG4gICAgfSxcclxuICAgIGJpZ0F2YXRhciA6IHtcclxuICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgICAgaGVpZ2h0IDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICB9LFxyXG4gICAgdGV4dFdpdGhTaGFkb3cgOiB7XHJcbiAgICAgIGNvbG9yOicjZmZmJyxcclxuICAgICAgZm9udFdlaWdodDonYm9sZGVyJyxcclxuICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICBtYXJnaW5MZWZ0OicydncnLFxyXG4gICAgICB0ZXh0U2hhZG93OiAnMXB4IDVweCA1cHggIzllOTk5OSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbkJveCA6IHtcclxuICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgICBtYXhXaWR0aCA6ICc1MHZ3JyxcclxuICAgICAgbWFyZ2luIDogJzAgMCAwIDN2dydcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24gKCkge1xyXG4gICAgY29uc3QgW2dyb3csIHNldEdyb3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0R3JvdyhlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9LHsgICAvLyBvcHRpb25zXHJcbiAgICAgICAgICByb290TWFyZ2luIDogJy03MHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8RmFkZSBpbj17Z3Jvd30gIHRpbWVvdXQ9e3tlbnRlcjoyMDAwLCBleGl0OjgwMH19PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZG9tUmVmfT5cclxuICAgICAgICA8Q3Jvc3NsaW5lPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQm94fT5cclxuICAgICAgICAgICAgPEZhZGUgaW49e2dyb3d9IHsuLi4oZ3Jvdz8ge3RpbWVvdXQ6e2VudGVyOjUwMDAsIGV4aXQ6ODAwfX0gOiB7fSl9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PSdoZWxwJyBzcmM9e21vb25JbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0F2YXRhcn0vPlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYnV0dG9uJyBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFdpdGhTaGFkb3d9PiBNYW5hZ2VtZW50IEFwcCA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbkJveH0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5BbiBhcHBsaWNhdGlvbiB0aGF0IHlvdSBjYW4gZWFzaWx5IGNyZWF0ZSAmIGRlc2lnbiB5b3VyIG93biBkYXRhLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPkdldCBzdGFydGVkIHdpdGggeW91ciBHb29nbGUgYWNjb3VudCE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5UaGlzIGFwcCB3aWxsIG5vdCBrZWVwIGFueSBwZXJzb25hbCBpbmZvcm1hdGlvbi48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ3Jvc3NsaW5lPlxyXG4gICAgICAgICAgPFByb2plY3REZXNjcmlwdGlvbi8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7VHlwb2dyYXBoeSAsIFN0ZXBwZXIsIFN0ZXAsIEJveCwgU3RlcExhYmVsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzbGlkZVNvdXJjZSBmcm9tICcuL0ltYWdlU2xpZGVTb3VyY2VzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOidyb3cnLFxyXG4gICAgICBmb250V2VpZ2h0IDogJ2JvbGRlcidcclxuICAgIH0sXHJcbiAgICBpbmxpbmU6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2NyaXB0aW9uTGlzdCAoe3N0ZXBwZXJ9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8U3RlcHBlciBhY3RpdmVTdGVwPXtzdGVwcGVyfSBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonaW5oZXJpdCd9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVNvdXJjZS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwIGNvbXBsZXRlZD17aW5kZXggPCBzdGVwcGVyfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cclxuICAgICAgICAgICAgICAgICAgICApfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TdGVwcGVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSBcIi4vU3RhcnRCdXR0b25cIjtcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9kZXNrLmpwZ1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25Db250ZW50IDogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMHZoJyxcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgOiAnY292ZXInLFxyXG4gICAgICAgIGNvbG9yIDogJ3doaXRlJ1xyXG4gICAgfSxcclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtmYWRlLHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNGaXJzdFJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRGYWRlKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgICAgICAgIGlmIChpc0ZpcnN0UmVmLmN1cnJlbnQpIGlzRmlyc3RSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIH0seyAgIC8vIG9wdGlvbnNcclxuICAgICAgICAgICAgcm9vdE1hcmdpbiA6ICctMzUwcHggMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXI6MTMwMCwgZXhpdDo4MDB9fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2RvbVJlZn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3t0ZXh0U2hhZG93Oic1cHggMS41cHggMS41cHggZ3JheSd9fT5cclxuICAgICAgICAgICAgICAgIHtpc0ZpcnN0UmVmLmN1cnJlbnQgPyAnV0VMQ09NRScgOiAnUmVhZHkgdG8gc3RhcnQ/J31cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge2lzRmlyc3RSZWYuY3VycmVudD8gbnVsbCA6ICg8U3RhcnRCdXR0b24vPil9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZhZGU+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0J1dHRvbiAsIEJveCwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBQbGF5QXJyb3dTaGFycCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIHdpZHRoIDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMC41dmgnXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIHRleHRTaGFkb3cgOiAnMnB4IDFweCAxcHggZ3JheScsXHJcbiAgICAgICAgY29sb3IgOiAnaW5oZXJpdCdcclxuICAgIH0sXHJcbiAgICBpbm5lckJveCA6IHtcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnMXZoJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lckJveH0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScvbWFuYWdlbWVudCcgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjonbm9uZScsIGNvbG9yOid3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIGNvbG9yPSdzZWNvbmRhcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCcgXHJcbiAgICAgICAgICAgICAgICBzdGFydEljb249ezxQbGF5QXJyb3dTaGFycCBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tmb250U2l6ZSA6IDMwfX0vPn0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICBHRVQgU1RBUlRFRFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhcnJvdy5kMDgzMjhmNjJkMTliNjZmOGVhOGQ2ZDAwNjcyNGM4Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmxhY2suM2YwMmExMzI3Mzg3MDAyMjZjODRlZDFmNTg2M2Q1OWEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRlc2suMzIwN2MxZWY5NGM4NjdmODBiMGU5ZGY2YWM3OGQ1MmIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhc3ktbG9naW4uM2U5MWI4ZDg4NzM1Njg5MDc5YWZkMDc2ZTNlMDc0MjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhbmRsZS10YWJsZS4zYzU4NjkxNGE5NmQ0YWZlZGRjNWM3YWQzZDdkZjM1NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibGluay1tYW5hZ2VtZW50LXBhZ2UuNDgwMDRkMTMzYjVmYzIyNTc3NzA0Yzk1ZWIzNWYzZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1ha2UtaGVhZGVycy5jZmZhYzYzNGYyOWQzOGRkYmQxZjQ0NjdhNTczZWJjNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFuYWdlbWVudC1iYWNrZ3JvdW5kLmEwMDhkZTgxMzk1ODFiMGRhYmYxODMyZWQxYzljNDZlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtb29uLmYyMDZiYzNkNWJlODMxMWM3N2Q5ODk3ZGE0NGUxZjY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJteW1lbnUuOWZkZDU4YWNhNzRlYjQ4ZDk1NWY4MzVjOWVjODc5NmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNsaWRlMC4wYWEyOTVhM2I3YjRkMzAxMzI4NmY1MjRjNDc2NGNkNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhcnQtcmlnaHQtYXdheS40ZTIxNzI2MmQyYzhkODZkNWUwZjZlZTQzMmFlZmJjZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid2hpdGUtYXJyb3cuYzQ0MjJhN2JjNWVlMjNkMDgxYjM1NjZmOTNlOTFmMWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndoaXRlYmFja2dyb3VuZC5mYjE0MGY1ZTgxMGRjMjE0NmRhZDFiNmYwM2NhZjljOC5qcGdcIjsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzJ1xyXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgKDxDb29raWVzUHJvdmlkZXI+XHJcbiAgICAgICAgPEFwcC8+XHJcbiAgICA8L0Nvb2tpZXNQcm92aWRlcj4pXHJcbiAgICAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEZhZGUsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9tYW5hZ2VtZW50LWJhY2tncm91bmQuanBnJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYHVybCgke2JhY2tncm91bmR9KWAsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgZm9udFdlaWdodCA6ICdib2xkZXInLFxyXG4gICAgICAgIG1hcmdpbiA6IHRoZW1lLnNwYWNpbmcoMSlcclxuICAgIH0sXHJcbiAgICBidXR0b25Db250YWluZXIgOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luIDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLi4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgdGV4dFNoYWRvdyA6ICcwLjVweCAwLjVweCAxcHggIzAwMDAwMDVjJyxcclxuICAgICAgICBtYXJnaW4gOiAnMCAxdncgMS43dmgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzZhNzQ4YycsXHJcbiAgICB9LFxyXG59KSk7XHJcbmNvbnN0IGRlZmF1bHREYXRhID0ge1xyXG4gICAgY29sdW1ucyA6IFtcclxuICAgICAgeyB0aXRsZTogJ05hbWUnLCBmaWVsZDogJ05hbWUnICwgZ3JvdXBpbmc6ZmFsc2V9LFxyXG4gICAgICB7IHRpdGxlOiAnU3VybmFtZScsIGZpZWxkOiAnU3VybmFtZScgfSxcclxuICAgICAgeyB0aXRsZTogJ0JpcnRoIFllYXInLCBmaWVsZDogJ0JpcnRoIFllYXInIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdQaG9uZScgLCBmaWVsZDonUGhvbmUnLCBncm91cGluZzpmYWxzZX0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dlbmRlcicsXHJcbiAgICAgICAgZmllbGQ6ICdHZW5kZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHRpdGxlOiAnTWVtbycgLCBmaWVsZDonTWVtbyd9XHJcbiAgICBdLFxyXG4gICAgZGF0YSA6IFtcclxuICAgICAgeyBcIk5hbWVcIjogJ01laG1ldCcsICdTdXJuYW1lJzogJ0JhcmFuJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODMsIFwiUGhvbmVcIjonMDEwNDY1MDk5OTUnICxcIkdlbmRlclwiOiAxICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnQWRhbScsICdTdXJuYW1lJzogJ0FkYW0nLCBcIkJpcnRoIFllYXJcIjogMTk4NCwgXCJQaG9uZVwiOicwMTA0NjUwOTc5NScgLFwiR2VuZGVyXCI6IDIgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdNZWhtZXQnLCAnU3VybmFtZSc6ICdBdG9tJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODUsIFwiUGhvbmVcIjonMDEwNDY1MDk2OTUnICxcIkdlbmRlclwiOiAxICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnbXVsJywgJ1N1cm5hbWUnOiAnS29uZ25hJywgXCJCaXJ0aCBZZWFyXCI6IDE5ODYsIFwiUGhvbmVcIjonMDEwNDY1MDkxOTUnICxcIkdlbmRlclwiOiAxICwgXCJNZW1vXCI6Jyd9LFxyXG4gICAgICB7IFwiTmFtZVwiOiAnSmFjaycsICdTdXJuYW1lJzogJ0phY2snLCBcIkJpcnRoIFllYXJcIjogMTk4NywgXCJQaG9uZVwiOicwMTA0NjUwOTI5NScgLFwiR2VuZGVyXCI6IDIgLCBcIk1lbW9cIjonJ30sXHJcbiAgICAgIHsgXCJOYW1lXCI6ICdCb2InLCAnU3VybmFtZSc6ICdCb2InLCBcIkJpcnRoIFllYXJcIjogMTk4OCwgXCJQaG9uZVwiOicwMTA0NjUwOTM5NScgLFwiR2VuZGVyXCI6IDIgLCBcIk1lbW9cIjonJ30sXHJcbiAgICBdXHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZhdWx0UGFnZSAoe3N0YXRlICwgc2V0U3RhdGUsIG1hdGNofSkge1xyXG4gICAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZhZGUyLCBzZXRGYWRlMl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkRFTU9DbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUgLCBjb2x1bW5zIDogZGVmYXVsdERhdGEuY29sdW1ucyAsIGRhdGEgOiBkZWZhdWx0RGF0YS5kYXRhLCBkZWZhdWx0UGFnZSA6ICFzdGF0ZS5kZWZhdWx0UGFnZX0pO1xyXG4gICAgfVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0RmFkZSh0cnVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNldEZhZGUyKHRydWUpICwgMTUwMCk7XHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxGYWRlIGluPXtmYWRlfSB0aW1lb3V0PXt7ZW50ZXIgOiA4MDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbG9yPSdpbml0aWFsJyBzdHlsZT17e3RleHRTaGFkb3c6JzVweCAxLjVweCAxLjVweCBncmF5J319PlxyXG4gICAgICAgICAgICAgICAgTWFuYWdlbWVudCBUYWJsZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgZ3V0dGVyQm90dG9tIHN0eWxlPXt7dGV4dFNoYWRvdzonMnB4IDJweCAxcHggYmxhY2snfX0+IFxyXG4gICAgICAgICAgICAgICAgWW91IG1heSB0cnkgdGhlIERFTU8gaWYgdGhpcyB5b3VyIGZpcnN0IHRpbWUsIFxyXG4gICAgICAgICAgICAgICAgb3IgZ2V0IHN0YXJ0ZWQgcmlnaHQgYXdheSFcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8RmFkZSBpbj17ZmFkZTJ9IHRpbWVvdXQ9e3tlbnRlciA6IDMwMDAsIGV4aXQ6NTAwfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBzaXplPSdsYXJnZScgb25DbGljaz17aGFuZGxlT25ERU1PQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVNFIERFTU8gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9oZWFkZXJzJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VUIFNUQVJURUQgUklHSFQgQVdBWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgPC9GYWRlPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgXHJcbiAgICBCb3ggLFBhcGVyLCBtYWtlU3R5bGVzLCBGYWRlLCBUZXh0RmllbGQsIFRvb2x0aXAsIFR5cG9ncmFwaHksIENoZWNrYm94XHJcbn1cclxuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL21hbmFnZW1lbnQtYmFja2dyb3VuZC5qcGdcIjtcclxuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQgeyBzYXZlSGVhZGVycyB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IHsgZ2V0TWFuYWdlbWVudFRhYmxlIH0gZnJvbSAnLi4vdXRpbC9NYW5hZ2VtZW50QVBJJztcclxuaW1wb3J0IHVzZU9uRmlyc3RSZW5kZXIgZnJvbSAnLi4vY3VzdG9tSG9vay91c2VPbkZpcnN0UmVuZGVyJztcclxuaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgQ3VzdG9tU25hY2tiYXIgZnJvbSAnLi4vY3VzdG9tSG9vay9TbmFja0Jhcic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jdXN0b21Ib29rL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGNvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgOiAnMTIwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdyb3cnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZSA6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgLFxyXG4gICAgfSxcclxuICAgIHBhcGVyIDoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQgOiAnc3BhY2UtYXJvdW5kJyxcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnMTB2aCcsXHJcbiAgICB9LFxyXG4gICAgZm9ybVJvb3QgOiB7XHJcbiAgICAgICAgJyYgPiAqJzoge1xyXG4gICAgICAgICAgICBtYXJnaW46ICcwLjV2aCAxdncnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzYwY2gnLFxyXG4gICAgICAgICAgICBtaW5XaWR0aCA6ICc0MGNoJyxcclxuICAgICAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhcnJvdyA6IHtcclxuICAgICAgICB3aWR0aCA6ICcxMHZ3JyxcclxuICAgICAgICBoZWlnaHQgOiAnMTB2aCcsXHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZCA6IGBuby1yZXBlYXQgY2VudGVyLzgwJSB1cmwoJHthcnJvd30pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb250YWluJyxcclxuICAgICAgICBtYXJnaW5MZWZ0IDogJzN2dycsXHJcbiAgICAgICAgdHJhbnNmb3JtIDogJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb24gOiB7XHJcbiAgICAgICAgYWxpZ25TZWxmIDogJ2NlbnRlcidcclxuICAgIH1cclxufSkpXHJcbmNvbnN0IGRlZmF1bHRIZWFkZXIgPSB7XHJcbiAgICBcImhlYWRlcjBcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXIxXCIgOiAnJyxcclxuICAgIFwiaGVhZGVyMlwiIDogJycsXHJcbiAgICBcImhlYWRlcjNcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI0XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyNVwiIDogJycsXHJcbiAgICBcImhlYWRlcjZcIiA6ICcnLFxyXG4gICAgXCJoZWFkZXI3XCIgOiAnJyxcclxuICAgIFwiaGVhZGVyOFwiIDogJycsXHJcbiAgICBcImhlYWRlcjlcIiA6ICcnLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcnMgKHtpc0xvYWRpbmd9KSB7XHJcbiAgICAvLyBzdHlsZSwgY29va2llXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gUmVhY3QudXNlQ29udGV4dChQcm9ncmVzc0NvbnRleHQpO1xyXG4gICAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgICAvLyBzdGF0ZXNcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzbmFjaywgc2V0U25hY2tdID0gUmVhY3QudXNlU3RhdGUoe29wZW46ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtyZXN1bHRTbmFjayAsIHNldFJlc3VsdFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlLCBjb250ZW50IDogJyd9KTtcclxuICAgIGNvbnN0IFtkYXRhICwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhZGVycyA6IGRlZmF1bHRIZWFkZXIsXHJcbiAgICAgICAgZ3JvdXBpbmdzIDogQXJyYXkoMTApLmZpbGwoZmFsc2UpLFxyXG4gICAgfSlcclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgZGF0YVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgLy8gY29uc3RydWN0b3JcclxuICAgIHVzZU9uRmlyc3RSZW5kZXIoKCk9PntcclxuICAgICAgICBnZXRNYW5hZ2VtZW50VGFibGUoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdMZW5ndGggPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyA/IHJlc3BvbnNlLmRhdGEuZ3JvdXBpbmdzLmxlbmd0aCA6IDAgOiAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpbmdzID0gcmVzcG9uc2UuZGF0YT8gcmVzcG9uc2UuZGF0YS5ncm91cGluZ3MgPyBbLi4ucmVzcG9uc2UuZGF0YS5ncm91cGluZ3NdIDogW10gOiBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgLSBncm91cGluZ0xlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZS5kYXRhPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgPyByZXNwb25zZS5kYXRhLmhlYWRlcnMgOiB7fSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyc0xlbmd0aCA9IE9iamVjdC52YWx1ZXMoaGVhZGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGhlYWRlcnNMZW5ndGg7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tgaGVhZGVyJHtpfWBdID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7aGVhZGVycyxncm91cGluZ3N9O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoe2hlYWRlcnMsIGdyb3VwaW5nc30pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHsgIC8vIHVuYXV0aG9yaXplZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuIDogdHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudCA6IGBQbGVhc2UgbG9nIGluIGFnYWluLmB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLHN0YXR1czonZXJyb3InLCBjb250ZW50IDogYGVycm9yIChjb2RlIDogJHtyZXNwb25zZS5zdGF0dXN9KWB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGFuZGxlTG9nb3V0KCksIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0U25hY2soe29wZW46dHJ1ZSxzdGF0dXM6J2Vycm9yJywgY29udGVudDonUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmhlYWRlcnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JvdXBpbmdzIDogW1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YS5ncm91cGluZ3NcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFtkYXRhLmhlYWRlcnMsIGRhdGEuZ3JvdXBpbmdzXSk7XHJcblxyXG4gICAgLy8gZWZmZWN0c1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57IFxyXG4gICAgICAgIHNldEZhZGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU3VibWl0KGRhdGFSZWYuY3VycmVudC5oZWFkZXJzLCBkYXRhUmVmLmN1cnJlbnQuZ3JvdXBpbmdzLCB0cnVlKTtcclxuICAgICAgICAgICAgaGFuZGxlUHJvZ3Jlc3MocmVzdWx0ID09PSAnZXJyb3InID8gJ2Vycm9yJyA6ICdzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSk7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIC8vIGV2ZW50c1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4geyAgICAvLyDrqqjrk6Ag7L+g7YKkIOyCreygnOyZgCBwcm9maWxl7KCc6rGwXHJcbiAgICAgICAgcmVtb3ZlQ29va2llKCdwcm9maWxlJyk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChoZWFkZXJzLCBncm91cGluZ3MsIGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMoaGVhZGVycykuZXZlcnkodiA9PiB2Lmxlbmd0aCA8PSAxNSkpIHsgLy8gMTXquIDsnpAg7J207IOBIOygnO2VnCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoaGVhZGVycykuZmlsdGVyKHY9PnYpLmxlbmd0aCA9PT0gMCkgeyAgICAgLy8g67mE7Ja07J6I7J2EIOqyveyasCDsl5Drn6zrqZTshLjsp4BcclxuICAgICAgICAgICAgc2V0U25hY2soe29wZW46dHJ1ZX0pXHJcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlSGVhZGVycyhoZWFkZXJzLGdyb3VwaW5ncylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNBdXRvU2F2ZSkgc2V0UmVzdWx0U25hY2soe29wZW4gOiB0cnVlLCBjb250ZW50IDogcmVzcG9uc2UucmVzdWx0fSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVMb2dvdXQoKSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdFNuYWNrKHtvcGVuOnRydWUsc3RhdHVzOidlcnJvcicsIGNvbnRlbnQ6J1BsZWFzZSBsb2cgaW4gYWdhaW4uJ30pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIFtgaGVhZGVyJHtpbmRleH1gXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlR3JvdXBpbmdzID0gKGUsaW5kZXgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBncm91cGluZ3MgOiBkYXRhLmdyb3VwaW5ncy5tYXAoKHYsaSk9PiBpPT09aW5kZXg/IGUudGFyZ2V0LmNoZWNrZWQgOiB2KX0pO1xyXG4gICAgfVxyXG4gICAgLy8gY29tcG9uZW50XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8TG9hZGluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9IHRpbWVvdXQ9e3tlbnRlciA6IDE1MDB9fT5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs0fT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtUm9vdH0gYXV0b0NvbXBsZXRlPSdvZmYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdkaXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgY29sb3I9J3RleHRQcmltYXJ5JyBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgRWRpdCBGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29sb3I9e09iamVjdC52YWx1ZXMoZGF0YS5oZWFkZXJzKS5ldmVyeSh2ID0+IHYubGVuZ3RoIDw9IDE1KSA/ICdibHVlJyA6ICdyZWQnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb2xvcj0naW5pdGlhbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIHNob3VsZCBiZSBsZXNzIHRoYW4gMTUgbGV0dGVycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmhlYWRlcnMpLm1hcCgoaGVhZGVyLGluZGV4KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aW5kZXg9PT0wPyB0cnVlOmZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2BoZWFkZXItJHtpbmRleCsxfWB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5oZWFkZXJzW2BoZWFkZXIke2luZGV4fWBdfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPSdub3JtYWwnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dENoYW5nZShlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtkYXRhLmhlYWRlcnNbYGhlYWRlciR7aW5kZXh9YF0ubGVuZ3RoID4gMTUgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJcclxuWW91IGNhbiBhcnJhbmdlIHRoZSBkYXRhIHdpdGggYSB2YWxpZCBoZWFkZXIsIFxyXG5VbmlxdWUgdmFsdWVzIGFyZSBub3QgY29tbW9ubHkgdXNlZCBmb3IgdGhpcyBmdW5jdGlvbiBpbiBnZW5lcmFsLlxyXG5lLmcuKSBuYW1lLCBhZGRyZXNzLCBtb2JpbGUgTk8uIGV0Yy5cclxuXCJcclxuICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J3JpZ2h0JyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezIwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RhdGEuZ3JvdXBpbmdzW2luZGV4XX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlR3JvdXBpbmdzKGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4PT09MD8gXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J3NwYW4nIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+IEdyb3VwaW5nIT88L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTVUJNSVRcIiBhcmlhLWxhYmVsPSdzdWJtaXQnIHBsYWNlbWVudD0ndG9wJyBlbnRlckRlbGF5PXsyMDB9IGxlYXZlRGVsYXk9ezQwMH0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSBvbk1vdXNlT3Zlcj17KGUpPT5lLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlU3VibWl0KGRhdGEuaGVhZGVycyAsIGRhdGEuZ3JvdXBpbmdzKX0vPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8Q3VzdG9tU25hY2tiYXIgb3Blbj17c25hY2sub3Blbn0gb25DbG9zZT17KCk9PnNldFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgICAgIGNvbnRlbnQ9e2BIZWFkZXIgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNSBsZXR0ZXJzIDooYH0gc3RhdHVzPVwiZXJyb3JcIi8+XHJcbiAgICAgICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3Jlc3VsdFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRSZXN1bHRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgICAgICBjb250ZW50PXtyZXN1bHRTbmFjay5jb250ZW50fSBzdGF0dXM9e3Jlc3VsdFNuYWNrLnN0YXR1cz09PSdlcnJvcic/ICdlcnJvcicgOiAnc3VjY2Vzcyd9Lz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHt1c2VDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgTWF0ZXJpYWxUYWJsZSBmcm9tICdtYXRlcmlhbC10YWJsZSc7XHJcbmltcG9ydCBNYW51YWxEaWFsb2cgZnJvbSBcIi4vTWFudWFsRGlhbG9nXCI7XHJcbmltcG9ydCB7IG9wdGlvbnMsbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vVGFibGVPcHRpb25zXCI7XHJcbmltcG9ydCB1c2VPbkZpcnN0UmVuZGVyIGZyb20gJy4uL2N1c3RvbUhvb2svdXNlT25GaXJzdFJlbmRlcic7XHJcbmltcG9ydCB7IGdldE1hbmFnZW1lbnRUYWJsZSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuaW1wb3J0IERlZmF1bHRQYWdlIGZyb20gJy4vRGVmYXVsdFBhZ2UnO1xyXG5pbXBvcnQgcGFyc2VEYXRhIGZyb20gJy4uL3V0aWwvcGFyc2VEYXRhJztcclxuaW1wb3J0IFNhdmVCdXR0b24gZnJvbSAnLi9TYXZlQnV0dG9uJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCBDdXN0b21TbmFja2JhciBmcm9tICcuLi9jdXN0b21Ib29rL1NuYWNrQmFyJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2N1c3RvbUhvb2svTG9hZGluZ1wiO1xyXG4vLyB1c2VFZmZlY3TroZwgZGF0YSwgY29sdW1ucyDqsIAg67OA6rK965CgIOuVjOuniOuLpCDshJzrsoTsl5Ag7KCA7J6lIO2bhCDqsLHsi6BcclxuLy8gLi91dGlsIOqyveuhnOyXkCDroZzsp4Eg7J6R7ISxXHJcbi8vIO2GteyLoOyXkCDrjIDtlZwgdGVzdGNvZGXsnpHshLFcclxuLy8gY29sdW1uc+yZgCBkYXRh7J2YIOqwgSDqsJLrk6Tsl5Ag64yA7ZWcIOustOqysOyEsSDssrTtgaxcclxuLy8gcHJvcHNUeXBlIOyekeyEsVxyXG4vLyBTaWRlTWVudUxpc3QgPT4gTG9naW7snLzroZwg67OA6rK9LCDruYTroZzqt7jsnbgg7IucIExPR0lO7Jy866GcIOuztOydvCDqsoMsIOuhnOq3uOyduOyLnCBNWSBNRU5V66GcIOuztOq4sFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnRUYWJsZSh7aXNMb2FkaW5nfSkge1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IFJlYWN0LnVzZUNvbnRleHQoUHJvZ3Jlc3NDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgWyBjb29raWVzICwgc2V0Q29va2llICwgcmVtb3ZlQ29va2llIF0gPSB1c2VDb29raWVzIChbJ3Byb2ZpbGUnXSk7XHJcbiAgLy8gc3RhdGVzXHJcbiAgY29uc3QgW3NuYWNrLCBzZXRTbmFja10gPSBSZWFjdC51c2VTdGF0ZSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgY29uc3QgW3NhdmVkU25hY2sgLCBzZXRTYXZlZFNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2Vycm9yU25hY2sgLCBzZXRFcnJvclNuYWNrXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuOmZhbHNlfSk7XHJcbiAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKHtvcGVuIDogZmFsc2V9KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHsgIC8vIOy1nOy0iCBBUEnroZwg67Cb7JWE7Jik64qUIOuPmeyeke2VhOyalFxyXG4gICAgZGVmYXVsdFBhZ2UgOiB0cnVlLFxyXG4gICAgaGFzVGFibGUgOiBmYWxzZSxcclxuICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgZGF0YTogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgdGFibGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3RydWN0b3JcclxuICB1c2VPbkZpcnN0UmVuZGVyKCgpPT57XHJcbiAgICAgIGdldE1hbmFnZW1lbnRUYWJsZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXMgOiAke3Jlc3BvbnNlLnN0YXR1c30gLCBkYXRhIDogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKTtcclxuICAgICAgICAgIC8vIOycoOyggCDtmZXsnbjrkJDqs6Ag7YWM7J2067iU64+EIOu5hOyWtOyeiOyngCDslYrsnYQg6rK97JqwXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzPT09MjAwICYmIHJlc3BvbnNlLmRhdGEuaGVhZGVycykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57c2V0U25hY2soe29wZW46dHJ1ZX0pfSw0MDApO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgY29sdW1ucyA6IHBhcnNlRGF0YShyZXNwb25zZS5kYXRhLmhlYWRlcnMgLCByZXNwb25zZS5kYXRhLmdyb3VwaW5ncyksXHJcbiAgICAgICAgICAgICAgZGF0YSA6IHJlc3BvbnNlLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICBkZWZhdWx0UGFnZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGhhc1RhYmxlIDogdHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0RXJyb3JTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBldmVudHNcclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtzZXREaWFsb2coe29wZW4gOiBmYWxzZX0pO307XHJcbiAgY29uc3QgaGFuZGxlT25TYXZlID0gKGlzQXV0b1NhdmUpID0+IHtcclxuICAgICAgLy8gdGFibGVSZWYuY3VycmVudC5kYXRhTWFuYWdlciDsnZggcmVm7JeQ7IScIOyLoOuisOuPhOyeiOuKlCDrjbDsnbTthLAg7LC47KGwXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgY29uc3QgZ3JvdXBpbmdzID0gW107XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgIG9ialtgaGVhZGVyJHtpfWBdID0gdi50aXRsZTtcclxuICAgICAgICBncm91cGluZ3MucHVzaCh2Lmdyb3VwaW5nKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICB9LHt9KVxyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50LmRhdGFNYW5hZ2VyLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgIGNvbnN0IHt0YWJsZURhdGEsIC4uLnJlc3R9ID0gdjtcclxuICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzYXZlRGF0YShoZWFkZXJzLCBncm91cGluZ3MsIGRhdGEpO1xyXG4gICAgICBpZighaXNBdXRvU2F2ZSkgc2V0U2F2ZWRTbmFjayh7b3Blbjp0cnVlfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGVmZmVjdHNcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyAgIC8vIHdpbmRvdyDrjZTruJTtgbTrpq0g7J2067Kk7Yq4IOy2lOqwgCwg64+E7JuA66eQIG9wZW5cclxuICAgIGNvbnN0IG9uZGJDbGljayA9ICgpID0+IHNldERpYWxvZyh7b3BlbiA6ICFkaWFsb2cub3Blbn0pO1xyXG4gICAgY29uc3Qgb25LZXlkb3duID0gKGUpID0+IHsgICAvLyBjdHJsICsgc+uhnCDsoIDsnqUgZXZlbnRcclxuICAgICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybS5tYXRjaChcIk1hY1wiKSA/IGUubWV0YUtleSA6IGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IDgzKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhhbmRsZU9uU2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbmRiQ2xpY2spO1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uZGJDbGljayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcclxuICAgICAgLy8g7LSI6riw7KCR6re87J2YIOqyveyasCDrjbDsnbTthLDqsIAg7JeG7Ja0IOyXkOufrCDrsJzsg53tlaAg7IiYIOyeiOyWtCDsgrztla3si53snLzroZwg7YyQ64uoIO2bhCDslrjrp4jsmrTtirjsi5zsnZggZmV0Y2hBUEnsi6TtlolcclxuICAgICAgdGFibGVSZWYuY3VycmVudCA/IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIgPyBoYW5kbGVPblNhdmUodHJ1ZSkgOiBudWxsIDogbnVsbDtcclxuICAgICAgdGFibGVSZWYuY3VycmVudCA/IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIgPyBoYW5kbGVQcm9ncmVzcygnc3VjY2VzcycpIDogbnVsbCA6IG51bGw7XHJcbiAgfTtcclxufSwgW10pO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG4gIGNvbnN0IE1hcmdpbiA9ICgpID0+ICg8Qm94IHN0eWxlPXt7aGVpZ2h0OicxMDBweCd9fT48L0JveD4pOyAgLy8g7Jes67CxXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxMb2FkaW5nIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICB7XHJcbiAgICBzdGF0ZS5kZWZhdWx0UGFnZSA/XHJcbiAgICAgICg8RGVmYXVsdFBhZ2Ugc3RhdGU9e3N0YXRlfSBzZXRTdGF0ZT17c2V0U3RhdGV9Lz4pXHJcbiAgICA6IFxyXG4gICAgKDxCb3g+XHJcbiAgICAgICAgPE1hbnVhbERpYWxvZyBvcGVuPXtkaWFsb2cub3Blbn0gb25DbG9zZT17aGFuZGxlRGlhbG9nQ2xvc2V9Lz5cclxuICAgIDxNYXJnaW4vPlxyXG4gICAgPE1hdGVyaWFsVGFibGVcclxuICAgICAgdGFibGVSZWY9e3RhYmxlUmVmfVxyXG4gICAgICB0aXRsZT17XHJcbiAgICAgIDxTYXZlQnV0dG9uIHNldFNhdmVkU25hY2s9e3NldFNhdmVkU25hY2t9IFxyXG4gICAgICAvLyDrp4jsmrTtirgg7J207ZuE7JeQIOygkeq3vO2VhOyalFxyXG4gICAgICBkYXRhTWFuYWdlcj17dGFibGVSZWYuY3VycmVudCA/IHRhYmxlUmVmLmN1cnJlbnQuZGF0YU1hbmFnZXIgOiB7fX0vPlxyXG4gICAgfVxyXG4gICAgICBjb2x1bW5zPXtzdGF0ZS5jb2x1bW5zfVxyXG4gICAgICBkYXRhPXtzdGF0ZS5kYXRhfVxyXG4gICAgICBsb2NhbGl6YXRpb249e2xvY2FsaXphdGlvbn0gLy8g66Gc7Lus65287J207KaIXHJcbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9IC8vIOuCtOuztOuCtOq4sCwg6re466Oo7ZWRXHJcbiAgICAgIGFjdGlvbnM9e1svLyDrqYDti7Ag7IWA66CJ7IWYIOyekeyXhVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdG9vbHRpcCA6ICdSZW1vdmUgdGhlIFNlbGVjdGVkIHJvdyhzKScsXHJcbiAgICAgICAgICAgIGljb24gOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgb25DbGljayA6IChlICwgZGVsZXRpb25zKSA9PiB7ICAvLyDshKDtg53tlZwg7LK07YGs67CV7Iqk7JeQIOuMgO2VtCDrqqjrkZAg7IKt7KCcIOynhO2WiVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5zdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKHY9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShkYXRhLmluZGV4T2YodiksIDEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2RGF0YSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLnByZXZEYXRhICwgZGF0YX07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXX0gXHJcbiAgICAgIGVkaXRhYmxlPXt7XHJcbiAgICAgICAgb25Sb3dBZGQ6IChuZXdEYXRhKSA9PiAgLy8g7LaU6rCAXHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByZXZTdGF0ZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIG9uUm93VXBkYXRlOiAobmV3RGF0YSwgb2xkRGF0YSkgPT4gIC8vIOyImOyglVxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9sZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcmV2U3RhdGUuZGF0YV07XHJcbiAgICAgICAgICAgICAgICAgIGRhdGFbZGF0YS5pbmRleE9mKG9sZERhdGEpXSA9IG5ld0RhdGE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxNYXJnaW4vPlxyXG4gICAgPEN1c3RvbVNuYWNrYmFyIG9wZW49e3NuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTbmFjayh7b3BlbjpmYWxzZX0pfSBcclxuICAgIGNvbnRlbnQ9J25lZWQgc29tZSBoZWxwPyA/IGRvdWJsZS1jbGljayBhbnkgc3BhY2UgIScgc3RhdHVzPVwic3VjY2Vzc1wiLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtzYXZlZFNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRTYXZlZFNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nU0FWRUQgIScgc3RhdHVzPVwic3VjY2Vzc1wiLz5cclxuICAgIDxDdXN0b21TbmFja2JhciBvcGVuPXtlcnJvclNuYWNrLm9wZW59IG9uQ2xvc2U9eygpPT5zZXRFcnJvclNuYWNrKHtvcGVuOmZhbHNlfSl9IFxyXG4gICAgY29udGVudD0nRVJST1IgIScgc3RhdHVzPVwiZXJyb3JcIi8+XHJcbiAgICA8L0JveD5cclxuICAgICl9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn0iLCJcclxuaW1wb3J0IHtEaWFsb2csXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIExpc3QsXHJcbiAgICBMaXN0SXRlbSxcclxuICAgIExpc3RJdGVtVGV4dCxcclxuICAgIEJveCxcclxuICAgIG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+IHtcclxuICAgIGljb24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnM3Z3J1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW51YWxEaWFsb2cgKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IHtvcGVuLCBvbkNsb3NlfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaWNvbnMgPSBbXHJcbiAgICAgICAge2ljb24gOiAnYWRkX2JveCcgLCBkZXNjcmlwdGlvbiA6ICdbQWRkXSByb3dzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2NyZWF0ZScgLCBkZXNjcmlwdGlvbiA6ICdbRWRpdF0gcmVjb3Jkcy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdzZWFyY2gnICwgZGVzY3JpcHRpb24gOiAnVHlwZSBkb3duIHdvcmRzIHRvIFtzZWFyY2hdLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3NhdmVfYWx0JyAsIGRlc2NyaXB0aW9uIDogJ1tEb3dubG9hZF0gZmlsZXMgaW4gQ1ZTIGZvcm1hdC4nfSxcclxuICAgICAgICB7aWNvbiA6ICd2aWV3X3dlZWsnICwgZGVzY3JpcHRpb24gOiAnW1NlbGVjdF0gY29sdW1ucyB0byBiZSBkaXNwbGF5ZWQnfSxcclxuICAgICAgICB7aWNvbiA6ICdwbGF5bGlzdF9hZGRfY2hlY2snICwgZGVzY3JpcHRpb24gOiAnRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBbZGVsZXRlXSByb3dzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ2NoZWNrX2JveCcgLCBkZXNjcmlwdGlvbiA6ICcg4pGgIFNlbGVjdCB0aGUgY2hlY2tib3ggb24gdGhlIHJvdy4nfSxcclxuICAgICAgICB7aWNvbiA6ICdmYWN0X2NoZWNrJyAsIGRlc2NyaXB0aW9uIDogJyDikaEgQ2hlY2sgdGhlIG51bWJlciBvZiB0aGUgcm93cyBzZWxlY3RlZC4nfSxcclxuICAgICAgICB7aWNvbiA6ICdkZWxldGUnICwgZGVzY3JpcHRpb24gOiAnIOKRoiBDbGljayB0aGUgQmluIGljb24gb24gdGhlIHJpZ2h0IGFib3ZlLid9LFxyXG4gICAgICAgIHtpY29uIDogJ3BsYXlsaXN0X2FkZF9jaGVjaycgLCBkZXNjcmlwdGlvbiA6ICdGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIFtFZGl0XSBoZWFkZXJzLid9LFxyXG4gICAgICAgIHtpY29uIDogJ21lbnUnICwgZGVzY3JpcHRpb24gOiAnIOKRoCBPcGVuIE1ZUEFHRSd9LFxyXG4gICAgICAgIHtpY29uIDogJ2NyZWF0ZScgLCBkZXNjcmlwdGlvbiA6ICcg4pGhIENsaWNrIHRoZSBQZW5jaWwgaWNvbid9LFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8RGlhbG9nIG9uQ2xvc2U9e29uQ2xvc2V9IG9wZW49e29wZW59PlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZT4gQkFTSUMgTUFOVUFMIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGljb25zLm1hcCgoaWNvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2Ake2ljb259ICsgJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJyBjbGFzc05hbWU9e2BtYXRlcmlhbC1pY29ucyAke2NsYXNzZXMuaWNvbn1gfSBzdHlsZT17e3dpZHRoOiczdncnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2ljb24uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIFRvb2x0aXB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuLi91dGlsL01hbmFnZW1lbnRBUElcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7c2V0U2F2ZWRTbmFjayAsIGRhdGFNYW5hZ2VyfSkge1xyXG4gICAgZnVuY3Rpb24gb25DbGljayAoKSB7XHJcbiAgICAgICAgICAvLyBTQVZFIEVWRU5UIHV0aWwgPiBNYW5hZ2VtZW50QVBJLnNhdmVEYXRhIOunjOuTpOyWtOyEnCDsvZztlZjquLBcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IGdyb3VwaW5ncyA9IFtdO1xyXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IGRhdGFNYW5hZ2VyLmNvbHVtbnMucmVkdWNlKChvYmosdixpKT0+e1xyXG4gICAgICAgICAgICBvYmpbYGhlYWRlciR7aX1gXSA9IHYudGl0bGU7XHJcbiAgICAgICAgICAgIGdyb3VwaW5ncy5wdXNoKHYuZ3JvdXBpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgfSx7fSk7XHJcbiAgICAgICAgICBkYXRhTWFuYWdlci5kYXRhLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICAgICAgY29uc3Qge3RhYmxlRGF0YSwgLi4ucmVzdH0gPSB2O1xyXG4gICAgICAgICAgICBkYXRhLnB1c2gocmVzdCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCByZXN1bHQgOiBcclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9XHJcbiAgICAgICAgICAke2dyb3VwaW5nc31cclxuICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9XHJcbiAgICAgICAgYClcclxuICAgICAgICBzYXZlRGF0YShoZWFkZXJzLGdyb3VwaW5ncyxkYXRhKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICBzZXRTYXZlZFNuYWNrKHtvcGVuOnRydWV9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIHNldEVycm9yU25hY2soe29wZW46dHJ1ZX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFRvb2x0aXAgdGl0bGU9J0NsaWNrIHRvIFNBVkUgKCBDdHJsICsgUyApJz5cclxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319IHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgXHJcbiAgICAgICAgb25DbGljaz17KCk9Pm9uQ2xpY2soKX0+XHJcbiAgICAgICAgICBTQVZFXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIClcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7QWRkQm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG4vLyBEQVRBIFRBQkxFIE9QVElPTlNcclxuXHJcbiBleHBvcnQgY29uc3Qgb3B0aW9ucz0ge1xyXG4gICAgZXhwb3J0QnV0dG9uOiB0cnVlLFxyXG4gICAgZ3JvdXBpbmc6dHJ1ZSxcclxuICAgIHNlbGVjdGlvbjp0cnVlLFxyXG4gICAgaGVhZGVyU3R5bGU6eyBcclxuICAgICAgICBmb250V2VpZ2h0Oidib2xkZXInLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnNDb2x1bW5JbmRleDotMSwgIC8vIOyVoeyFmCDslYTsnbTsvZjsnITsuZhcclxuICAgIGNvbHVtbnNCdXR0b24gOiB0cnVlLCBcclxuICAgIGRlYm91bmNlSW50ZXJ2YWwgOiAxNjAsIC8vIOuhnOuUqeyLnOqwhFxyXG4gICAgcGFnZVNpemUgOiAxNSwgICAgICAgICAgLy8g7Y6Y7J207KeA7IKs7J207KaIXHJcbiAgICBwYWdlU2l6ZU9wdGlvbnMgOiBbNSwgMTUsIDMwLCA1MCwgMTAwXSwgLy8g7Y6Y7J207KaIIOyCrOydtOymiCDsooXrpZhcclxuICB9XHJcbiBleHBvcnQgY29uc3QgbG9jYWxpemF0aW9uID0ge1xyXG4gICAgcGFnaW5hdGlvbiA6IHsgbGFiZWxEaXNwbGF5ZWRSb3dzIDogJ3tjb3VudH0gcm93cyB8IHtmcm9tfS17dG99JyAsIH0sXHJcbiAgICB0b29sYmFyOiB7blJvd3NTZWxlY3RlZDogJ3swfSByb3cocykgc2VsZWN0ZWQnfSxcclxuICAgIGhlYWRlcjoge2FjdGlvbnM6ICdFZGl0J30sXHJcbiAgICBib2R5OiB7ZW1wdHlEYXRhU291cmNlTWVzc2FnZTogXHJcbiAgICAgICAgKFxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZGVyJ319PlxyXG4gICAgICAgICAge2BObyBSZWNvcmRzIHRvIGRpc3BsYXlgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ndGV4dCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIGVuZEljb249ezxBZGRCb3gvPn1cclxuICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGRlcid9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtgQ2xpY2sgdGhlIHBsdXMgaWNvbiBvbiB0aGUgcmlnaHQgYWJvdmUgZm9yIGEgbmV3IHJlY29yZC4gYH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICB9XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge1Rvb2xiYXIsIERyYXdlciAsIEJ1dHRvbiAsIEdyaWQsXHJcbiAgICAgRGl2aWRlciwgQXBwQmFyIGFzIEFwcGJhcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGlkZU9uU2Nocm9sbCBmcm9tIFwiLi4vY3VzdG9tSG9vay9IaWRlT25TY2hyb2xsXCI7XHJcbmltcG9ydCBTaWRlTWVudUxpc3QgZnJvbSBcIi4vU2lkZU1lbnVMaXN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2FwcFwiO1xyXG5pbXBvcnQgU2lnbk91dEJ1dHRvbiBmcm9tIFwiLi9TaWduT3V0QnV0dG9uXCI7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgYWxpZ25JdGVtczonZmxleC1zdGFydCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDoxOCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOjE4LFxyXG4gICAgfSxcclxuICAgIGxlZnQgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6MzAsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1zdGFydCdcclxuICAgIH0sXHJcbiAgICBjZW50ZXIgOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgcmlnaHQgOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6NDUsXHJcbiAgICAgICAganVzdGlmeTonZmxleC1lbmQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAncm93JyxcclxuICAgICAgICBwYWRkaW5nOmAwICR7dGhlbWUuc3BhY2luZygzKX1gXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2IChwcm9wcykge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVudSA6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yLCBvcGVuKSA9PiAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBmbGFnID0gb3Blbj8gc3RhdGVbYW5jaG9yXSA/IGZhbHNlIDogdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBmbGFnIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGFuY2hvciA9IHByb2ZpbGUubmFtZT8gJ01ZUEFHRScgOidMT0dJTic7XHJcbiAgICBjb25zdCBsaW5rcyA9IFsnYm9hcmQnLCdtYW5hZ2VtZW50J107XHJcbiAgICBjb25zdCBMb2dvdXRCdG4gPSBwcm9maWxlLm5hbWU/IDxTaWduT3V0QnV0dG9uLz4gOiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIaWRlT25TY2hyb2xsIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEFwcGJhciBjb2xvcj0naW5oZXJpdCcgc3R5bGU9e3tib3hTaGFkb3c6J25vbmUnfX0+XHJcbiAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+PEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCc+IEhvbWUgPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtsaW5rfWB9IHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fSBrZXk9e2xpbmt9PjxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnPiB7bGlua30gPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT48c3Bhbj48L3NwYW4+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdwcmltYXJ5JyBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0gc3R5bGU9e3ttYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YW5jaG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtMb2dvdXRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlciBvcGVuPXtzdGF0ZVthbmNob3JdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IHZhcmlhbnQ9J3BlcnNpc3RlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7U2lkZU1lbnVMaXN0KCB7Li4ucHJvcHMsIGFuY2hvciAsdG9nZ2xlRHJhd2VyICwgcHJvZmlsZX0gKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBiYXI+XHJcbiAgICAgICAgPC9IaWRlT25TY2hyb2xsPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbVRleHQsIExpc3RJdGVtQXZhdGFyICwgRGl2aWRlciwgTGlzdEl0ZW0sIFR5cG9ncmFwaHkgLCBBdmF0YXIsIEljb25CdXR0b24gLFxyXG4gICAgIE1vZGFsLCBCb3gsIEJ1dHRvbixcclxuICAgICBQYXBlcixcclxuICAgICBUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFNpZ25JbkJ1dHRvbiBmcm9tICcuL1NpZ25JbkJ1dHRvbic7XHJcbmltcG9ydCBnb29nbGVTaWduaW5JbWFnZSBmcm9tICcuLi9idXR0b25JbWFnZS9nb29nbGVTaWduaW4ucG5nJztcclxuaW1wb3J0IHtyZWRpcmVjdEdvb2dsZUxvZ2lufSBmcm9tICcuLi91dGlsL0xvZ2luQVBJJztcclxuaW1wb3J0IHtFZGl0LCBJbmZvLCBEZWxldGVGb3JldmVyLCBXYXJuaW5nfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi4vdXRpbC9NYW5hZ2VtZW50QVBJXCI7XHJcbmltcG9ydCB7R2xvYmFsU25hY2tiYXJDb250ZXh0fSBmcm9tICcuLi9hcHAnXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxpc3QgOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMjN2dycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnc3RhcnQnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtIDoge1xyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGxpc3RJdGVtVGV4dCA6IHtcclxuICAgICAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvciA6ICcjODM4MjgyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbGFyZ2VBdmF0YXIgOiB7XHJcbiAgICAgICAgd2lkdGggOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIGhlaWdodCA6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICB9LFxyXG4gICAgaW5saW5lIDoge1xyXG4gICAgICAgIGRpc3BsYXkgOiAnaW5saW5lJ1xyXG4gICAgfSxcclxuICAgIGxpc3RUZXh0IDoge1xyXG4gICAgICAgIGNvbG9yIDogJyM4MzgyODInLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsIDoge1xyXG4gICAgICAgIHRvcCA6ICc1MCUnLFxyXG4gICAgICAgIGxlZnQgOiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgbWluV2lkdGggOiA0MDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gICAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgbW9kYWxSb3dCb3ggOiB7XHJcbiAgICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBtb2RhbENvbEJveCA6IHtcclxuICAgICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnc3RhcnQnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uIDoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6J2JvbGRlcidcclxuICAgIH1cclxufSkpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVMaXN0ICh7YW5jaG9yICwgdG9nZ2xlRHJhd2VyLCBwcm9maWxlfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlR2xvYmFsU25hY2tiYXIgPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbFNuYWNrYmFyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZW1haWxJbnB1dCwgc2V0RW1haWxJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrTG9naW4gKCkge1xyXG4gICAgICAgIHJlZGlyZWN0R29vZ2xlTG9naW4oKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2tNb2RhbCA9ICgpID0+IHNldE1vZGFsKHRydWUpO1xyXG4gICAgY29uc3QgaGFuZGxlT25DbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0RW1haWxJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZW1haWxJbnB1dCA9PT0gcHJvZmlsZS5lbWFpbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7J287LmYJyk7XHJcbiAgICAgICAgICAgIHNhdmVEYXRhKHt9LFtdLFt7fV0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHbG9iYWxTbmFja2Jhcih7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbjp0cnVlLCBcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGRhdGEucmVzdWx0ID09PSAnc3VjY2VzcycgPyAnc3VjY2VzcycgOiAnZXJyb3InXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LDE1MDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUdsb2JhbFNuYWNrYmFyKHtcclxuICAgICAgICAgICAgICAgIG9wZW46dHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6J2Vycm9yJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gcHJvZmlsZT8gcHJvZmlsZS5uYW1lPyB0cnVlIDogZmFsc2UgOiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2lzTG9nZ2VkPyAnUFJPRklMRScgOiAnTE9HSU4gTUVOVSd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcblxyXG4gICAgICAgICAgICB7aXNMb2dnZWQ/IFxyXG5cclxuICAgICAgICAgICAgKDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPSdjZW50ZXInIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17cHJvZmlsZS5waWN0dXJlfSBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2VBdmF0YXJ9IGFsdD17cHJvZmlsZS5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Byb2ZpbGUubmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RUZXh0fT48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdFTUFJTCA6ICcgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdzcGFuJyB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRQcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5lbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBkaXZpZGVyLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm8gY29sb3I9J3ByaW1hcnknIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzF2dyd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBzZWNvbmRhcnk9J0VESVQgSEVBREVSUycvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaGVhZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J2VuZCcgYXJpYS1sYWJlbD0nZWRpdC1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgY29sb3I9J3ByaW1hcnknIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGRpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8V2FybmluZyBjb2xvcj0nc2Vjb25kYXJ5JyBzdHlsZT17e21hcmdpblJpZ2h0OicxdncnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgc2Vjb25kYXJ5PSdSRU1PVkUgQUxMIERBVEEnLz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPSdlbmQnIGFyaWEtbGFiZWw9J2VkaXQtaGVhZGVyJyBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlciBjb2xvcj0nc2Vjb25kYXJ5JyBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7Lyog66qo64usICovfVxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBvcGVuPXttb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZU9uQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1jb250ZW50c1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsUm93Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J3N0YXJ0JyBhcmlhLWxhYmVsPSdlZGl0LWhlYWRlcicgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXIgY29sb3I9J3NlY29uZGFyeScgZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLXRpdGxlXCIgdmFyaWFudD0nYnV0dG9uJyBkaXNwbGF5PSdibG9jaycgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhdXRpb24gOiBwZXJtYW5lbnQgZGVsZXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsQ29sQm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtY29udGVudHNcIiB2YXJpYW50PSdib2R5MScgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgQWxsIGRhdGEgd2lsbCBiZSBkZWxldGVkIGFuZCBjYW5ub3QgYmUgcmVjb3ZlcmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGNvcnJlY3RseSB0byBjb250aW51ZS5gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbic+e3Byb2ZpbGUuZW1haWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxSb3dCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD0nRS1NQUlMJyBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIHNpemU9J2xhcmdlJyBvbkNsaWNrPXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgKDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrTG9naW59PlxyXG4gICAgICAgICAgICAgICAgPFNpZ25JbkJ1dHRvbiBzaWduSW49e2dvb2dsZVNpZ25pbkltYWdlfS8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+KX1cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgd2lkdGggOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgfVxyXG59KSlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluQnV0dG9uIChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCB7c2lnbklufSA9IHByb3BzOyAvLyDsnbTrr7jsp4BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSdzcGFuJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3NpZ25Jbn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+PC9pbWc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwJztcclxuaW1wb3J0IHsgTGlzdEl0ZW0gLCBJY29uQnV0dG9uLCBUb29sdGlwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGxvZ291dCA6IHtcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnLFxyXG4gICAgICAgIHBhZGRpbmcgOiAnMnB4JyxcclxuICAgICAgICBtYXJnaW4gOiAwLFxyXG4gICAgICAgIHdpZHRoIDogJ2F1dG8nLFxyXG4gICAgfVxyXG59KSlcclxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBmb250V2VpZ2h0Oidib2xkJ1xyXG4gICAgfSxcclxuICB9KSkoVG9vbHRpcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IFsgY29va2llcyAsIHNldENvb2tpZSAsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyAoWydwcm9maWxlJywndXNlciddKTtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgLy8g66qo65OgIOy/oO2CpCDsgq3soJzsmYAgcHJvZmlsZeygnOqxsFxyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncHJvZmlsZScpO1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgndXNlcicpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT0nTG9nLW91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3twYWRkaW5nOjR9fSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhpdFRvQXBwSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+ICAgIFxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXJ2ZXJVUkwgZnJvbSBcIi4vc2VydmVyVVJMXCI7XHJcblxyXG4vLyBVUkwgZXhwb3J0XHJcbi8vIHNldmVy7JeQ7IScIOuwm+ydgCB1cmzroZwg66as64uk7J2066CJ7Yq4XHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdEdvb2dsZUxvZ2luID0gKCkgPT4gYXhpb3MuZ2V0KGAke3NlcnZlclVSTH0vbG9naW5gKS50aGVuKHJlcyA9PiBsb2NhdGlvbi5hc3NpZ24ocmVzLmRhdGEpKTtcclxuZXhwb3J0IGNvbnN0IGdldFRva2VuQW5kUHJvZmlsZSA9ICh0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7c2VydmVyVVJMfS9sb2dpbmAsIHt0b2tlbn0gLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlLFxyXG4gICAgfSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2VydmVyVVJMIGZyb20gJy4vc2VydmVyVVJMJztcclxuXHJcbi8vIO2FjOydtOu4lCDrjbDsnbTthLAg67Cb7JWE7Jik6riwIGNvb2tpZeyXkCDri7TquLQgdG9rZW7sgqzsmqlcclxuZXhwb3J0IGNvbnN0IGdldE1hbmFnZW1lbnRUYWJsZSA9ICAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGF4aW9zLmdldChgJHtzZXJ2ZXJVUkx9L21hbmFnZW1lbnRgLHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUhlYWRlcnMgPSAoaGVhZGVycywgZ3JvdXBpbmdzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2F2aW5nIGhlYWRlcnMgOiBcclxuICAgIGhlYWRlcnMgOiAke0pTT04uc3RyaW5naWZ5KGhlYWRlcnMpfVxyXG4gICAgZ3JvdXBpbmdzIDogJHtKU09OLnN0cmluZ2lmeShncm91cGluZ3MpfWApO1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9oZWFkZXJzYCwge1xyXG4gICAgICAgIC8vIGRhdGFcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGdyb3VwaW5nc1xyXG4gICAgfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KS50aGVuKHJlcyA9PiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpKSk7ICAgIC8vIOy/oO2CpOyZgCDtlajqu5hcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVEYXRhID0gKGhlYWRlcnMsIGdyb3VwaW5ncywgZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIChheGlvcy5wdXQoYCR7c2VydmVyVVJMfS9kYXRhYCwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgZ3JvdXBpbmdzLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpXHJcbiAgICB9KSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoaGVhZGVycyAsIGdyb3VwaW5ncykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBkYXRhIHBhcnNpbmchISEhYClcclxuICAgIHJldHVybiAoT2JqZWN0LnZhbHVlcyhoZWFkZXJzKS5maWx0ZXIodj0+dikubWFwKCh2YWx1ZSxpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlIDogdmFsdWUsXHJcbiAgICAgICAgZmllbGQgOiB2YWx1ZSxcclxuICAgICAgICBncm91cGluZyA6IGdyb3VwaW5nc1tpbmRleF1cclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBcImh0dHBzOi8vbWFuYWdlbWVudC1hcHBsZS5oZXJva3VhcHAuY29tXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==