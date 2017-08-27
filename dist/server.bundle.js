/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Button = {
	  "button": "UXeMM0xCqXOSM94NXL3dd",
	  "full-width": "_1TwiRRSJgltUKfD75pmMY-"
	};
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var Button = function (_Component) {
	  _inherits(Button, _Component);
	
	  function Button(props) {
	    _classCallCheck(this, Button);
	
	    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
	  }
	
	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var className = _Button2.default.button;
	      if (this.props.isFullWidth) {
	        className += ' ' + _Button2.default['full-width'];
	      }
	      return _jsx('div', {
	        className: className,
	        onClick: this.props.onClick,
	        style: this.props.style
	      }, void 0, this.props.title);
	    }
	  }]);
	
	  return Button;
	}(_react.Component);
	
	exports.default = Button;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-html-parser");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SET_REDIRECT_URL = exports.FETCH_USER_PROFILE_FAILED = exports.FETCH_USER_PROFILE_SUCCEEDED = exports.LOGOUT_SUCCEEDED = exports.LOGIN_FAILED = exports.LOGIN_SUCCEEDED = exports.REGISTER_FAILED = exports.REGISTER_SUCCEEDED = exports.SOCIAL_LOGIN_REQUEST = exports.LOGIN_REQUESTED = exports.SET_LOGIN_STATE = undefined;
	exports.setLoginState = setLoginState;
	exports.registerSucceeded = registerSucceeded;
	exports.registerFailed = registerFailed;
	exports.loginRequested = loginRequested;
	exports.loginSucceeded = loginSucceeded;
	exports.loginFailed = loginFailed;
	exports.logoutSucceeded = logoutSucceeded;
	exports.fetchUserProfileSucceeded = fetchUserProfileSucceeded;
	exports.fetchUserProfileFailed = fetchUserProfileFailed;
	exports.setRedirectUrl = setRedirectUrl;
	exports.registerRequest = registerRequest;
	exports.loginRequest = loginRequest;
	exports.socialLoginRequest = socialLoginRequest;
	exports.logoutRequested = logoutRequested;
	exports.fetchUserProfileRequested = fetchUserProfileRequested;
	
	var _apiCaller = __webpack_require__(16);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	var _reactNotificationSystemRedux = __webpack_require__(9);
	
	var _reactNotificationSystemRedux2 = _interopRequireDefault(_reactNotificationSystemRedux);
	
	var _reactRouter = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// Export Constants
	var SET_LOGIN_STATE = exports.SET_LOGIN_STATE = 'SET_LOGIN_STATE';
	
	var LOGIN_REQUESTED = exports.LOGIN_REQUESTED = 'LOGIN_REQUESTED';
	var SOCIAL_LOGIN_REQUEST = exports.SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST';
	
	var REGISTER_SUCCEEDED = exports.REGISTER_SUCCEEDED = 'REGISTER_SUCCEEDED';
	var REGISTER_FAILED = exports.REGISTER_FAILED = 'REGISTER_FAILED';
	var LOGIN_SUCCEEDED = exports.LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
	var LOGIN_FAILED = exports.LOGIN_FAILED = 'LOGIN_FAILED';
	var LOGOUT_SUCCEEDED = exports.LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
	
	var FETCH_USER_PROFILE_SUCCEEDED = exports.FETCH_USER_PROFILE_SUCCEEDED = 'FETCH_USER_PROFILE_SUCCEEDED';
	var FETCH_USER_PROFILE_FAILED = exports.FETCH_USER_PROFILE_FAILED = 'FETCH_USER_PROFILE_FAILED';
	
	var SET_REDIRECT_URL = exports.SET_REDIRECT_URL = 'SET_REDIRECT_URL';
	
	// Export Actions
	function setLoginState() {
	  return {
	    type: SET_LOGIN_STATE
	  };
	}
	
	function registerSucceeded(user) {
	  return {
	    type: REGISTER_SUCCEEDED,
	    user: user
	  };
	}
	
	function registerFailed(err) {
	  return {
	    type: REGISTER_FAILED,
	    err: err
	  };
	}
	
	function loginRequested() {
	  return {
	    type: LOGIN_REQUESTED
	  };
	}
	
	function loginSucceeded(user) {
	  localStorage.setItem('clientId', user.id);
	  return {
	    type: LOGIN_SUCCEEDED,
	    user: user
	  };
	}
	
	function loginFailed(err) {
	  return {
	    type: LOGIN_FAILED,
	    err: err
	  };
	}
	
	function logoutSucceeded() {
	  localStorage.removeItem('clientId');
	  _reactRouter.browserHistory.push('/');
	  return {
	    type: LOGOUT_SUCCEEDED
	  };
	}
	
	function fetchUserProfileSucceeded(user) {
	  return {
	    type: FETCH_USER_PROFILE_SUCCEEDED,
	    user: user
	  };
	}
	
	function fetchUserProfileFailed(err) {
	  return {
	    type: FETCH_USER_PROFILE_FAILED,
	    err: err
	  };
	}
	
	function setRedirectUrl(url) {
	  return {
	    type: SET_REDIRECT_URL,
	    url: url
	  };
	}
	
	function registerRequest(user) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('auth/register', 'post', {
	      firstName: user.firstName,
	      lastName: user.lastName,
	      email: user.email,
	      password: user.password
	    }).then(function (res) {
	      dispatch(registerSucceeded(res.user));
	      dispatch(loginRequest(user));
	      /*dispatch(Notifications.success({
	        title: 'Welcome',
	        message: `You created account. Enjoy yourself.`,
	        position: 'br',
	        autoDismiss: 3
	      })*/
	    }, function (err) {
	      dispatch(registerFailed(err));
	      dispatch(_reactNotificationSystemRedux2.default.error({
	        title: 'SignUp Failure',
	        message: err.message,
	        position: 'br',
	        autoDismiss: 3
	      }));
	    });
	  };
	}
	
	function handleLogin(dispatch, promise) {
	  promise.then(function (res) {
	    dispatch(loginSucceeded(res.user));
	    dispatch(_reactNotificationSystemRedux2.default.success({
	      title: 'Welcome',
	      message: 'Welcome, ' + res.user.name.givenName + ' ' + res.user.name.familyName,
	      position: 'br',
	      autoDismiss: 3
	    }));
	  }, function (err) {
	    dispatch(loginFailed(err));
	    dispatch(_reactNotificationSystemRedux2.default.error({
	      title: 'Login Failure',
	      message: 'Invalid crendential ! Please try again.',
	      position: 'br',
	      autoDismiss: 3
	    }));
	  });
	}
	
	function loginRequest(user) {
	  return function (dispatch) {
	    dispatch(loginRequested());
	    handleLogin(dispatch, (0, _apiCaller2.default)('auth/login', 'post', {
	      email: user.email,
	      password: user.password
	    }));
	  };
	}
	
	function socialLoginRequest(provider, user) {
	  return function (dispatch) {
	    dispatch(loginRequested());
	
	    handleLogin(dispatch, (0, _apiCaller2.default)('auth/' + provider, 'post', _defineProperty({}, provider, user)));
	  };
	}
	
	function logoutRequested() {
	  return function (dispatch) {
	    (0, _apiCaller2.default)('auth/logout', 'get').then(function (res) {
	      dispatch(logoutSucceeded());
	      dispatch(_reactNotificationSystemRedux2.default.success({
	        title: 'Logout',
	        message: 'Bye',
	        position: 'br',
	        autoDismiss: 3
	      }));
	    }, function (err) {});
	  };
	}
	
	function fetchUserProfileRequested() {
	  return function (dispatch) {
	    (0, _apiCaller2.default)('auth/profile', 'get').then(function (res) {
	      return dispatch(fetchUserProfileSucceeded(res.user));
	    }, function (err) {
	      return dispatch(fetchUserProfileFailed(err));
	    });
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RESET_PROGRAM = exports.HIDE_FINAL_NODE = exports.SET_FINAL_NODE = exports.TOGGLE_SIDEBAR = exports.SET_CURRENT_PROGRAM = exports.ADD_PROGRAM = undefined;
	exports.addProgram = addProgram;
	exports.setCurrentProgram = setCurrentProgram;
	exports.fetchProgram = fetchProgram;
	exports.toggleSideBar = toggleSideBar;
	exports.setFinalNode = setFinalNode;
	exports.hideFinalNode = hideFinalNode;
	exports.resetProgram = resetProgram;
	
	var _apiCaller = __webpack_require__(16);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	var _model = __webpack_require__(104);
	
	var _model2 = _interopRequireDefault(_model);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_PROGRAM = exports.ADD_PROGRAM = 'ADD_PROGRAM';
	var SET_CURRENT_PROGRAM = exports.SET_CURRENT_PROGRAM = 'SET_CURRENT_PROGRAM';
	var TOGGLE_SIDEBAR = exports.TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
	var SET_FINAL_NODE = exports.SET_FINAL_NODE = 'SET_FINAL_NODE';
	var HIDE_FINAL_NODE = exports.HIDE_FINAL_NODE = 'HIDE_FINAL_NODE';
	var RESET_PROGRAM = exports.RESET_PROGRAM = 'RESET_PROGRAM';
	
	// Export Actions
	function addProgram(name, program) {
	  return {
	    type: ADD_PROGRAM,
	    name: name,
	    program: program
	  };
	}
	
	function setCurrentProgram(name) {
	  return {
	    type: SET_CURRENT_PROGRAM,
	    name: name
	  };
	}
	
	function fetchProgram(name) {
	  return function (dispatch) {
	    /*return callApi(`programs/${name}`).then(program => {
	      dispatch(addProgram(name, program));
	    });*/
	    dispatch(addProgram(name, _model2.default[name]));
	  };
	}
	
	function toggleSideBar() {
	  return {
	    type: TOGGLE_SIDEBAR
	  };
	}
	
	function setFinalNode(finalKind, finalData) {
	  return {
	    type: SET_FINAL_NODE,
	    finalKind: finalKind,
	    finalData: finalData
	  };
	}
	
	function hideFinalNode() {
	  return {
	    type: HIDE_FINAL_NODE
	  };
	}
	
	function resetProgram() {
	  return {
	    type: RESET_PROGRAM
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-notification-system-redux");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import styles
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _styles = {
	  "container": "_1AW_XoZwcYm_0ITG40xknL",
	  "empty": "_3NIVyF55ZMqCQtHIFWQDNk",
	  "back-img": "_3ZW6LZwKu0B5EkBrIl3ERv",
	  "overlay": "YYLWzwV15bkOh4vc-IvhZ",
	  "title": "_3WoJoDYfU0cdtB0dnvqgG9",
	  "icon": "_19K_6pOLG5gItW-kwWVgJr",
	  "description": "_3R1nT92shl98IzW5UWOQdP"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _book = '/' + "92ca9524486b02dedc49f83c8ab80d66.png";
	
	var _book2 = _interopRequireDefault(_book);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Document(props) {
	  var title = props.title,
	      icon = props.icon,
	      description = props.description,
	      style = props.style,
	      onClick = props.onClick;
	
	
	  return _jsx('div', {
	    className: _styles2.default.container + ' ' + (props.empty ? _styles2.default.empty : ''),
	    onClick: onClick,
	    style: style
	  }, void 0, !props.empty && _jsx('img', {
	    className: _styles2.default['back-img'],
	    src: _book2.default,
	    alt: 'back-img'
	  }), _jsx('div', {
	    className: _styles2.default['overlay']
	  }), _jsx('div', {
	    className: _styles2.default.title
	  }, void 0, (0, _reactHtmlParser2.default)(title)), _jsx('div', {
	    className: _styles2.default.icon
	  }, void 0, _jsx('i', {
	    className: 'fa ' + icon,
	    'aria-hidden': 'true'
	  })), _jsx('div', {
	    className: _styles2.default.description
	  }, void 0, (0, _reactHtmlParser2.default)(description)));
	}
	
	exports.default = Document;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleSearchBar = toggleSearchBar;
	// Export Constants
	var TOGGLE_SEARCH_BAR = exports.TOGGLE_SEARCH_BAR = 'TOGGLE_SEARCH_BAR';
	
	// Export Actions
	function toggleSearchBar() {
	  return {
	    type: TOGGLE_SEARCH_BAR
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _Program = {
	  "program": "_3cVgjsWA141eMGNQ4o-3C1",
	  "inputbox-container": "_1SVSo2dfamAlo3zLiBg-0t",
	  "sidebar-container": "_32_53-I0qr4_x_As9i9gWq"
	};
	
	var _Program2 = _interopRequireDefault(_Program);
	
	var _SideBar = __webpack_require__(101);
	
	var _SideBar2 = _interopRequireDefault(_SideBar);
	
	var _InputBox = __webpack_require__(95);
	
	var _InputBox2 = _interopRequireDefault(_InputBox);
	
	var _Form = __webpack_require__(91);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _Topic = __webpack_require__(94);
	
	var _Topic2 = _interopRequireDefault(_Topic);
	
	var _CalculateTax = __webpack_require__(92);
	
	var _CalculateTax2 = _interopRequireDefault(_CalculateTax);
	
	var _ContactDialog = __webpack_require__(85);
	
	var _ContactDialog2 = _interopRequireDefault(_ContactDialog);
	
	var _actions = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	var Program = function (_Component) {
	  _inherits(Program, _Component);
	
	  function Program(props) {
	    _classCallCheck(this, Program);
	
	    var _this = _possibleConstructorReturn(this, (Program.__proto__ || Object.getPrototypeOf(Program)).call(this, props));
	
	    _this.state = {
	      showContact: false
	    };
	    return _this;
	  }
	
	  _createClass(Program, [{
	    key: 'showContact',
	    value: function showContact() {
	      this.setState({ showContact: true });
	    }
	  }, {
	    key: 'closeContact',
	    value: function closeContact() {
	      this.setState({ showContact: false });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _actions.resetProgram)());
	    }
	  }, {
	    key: 'toggleSide',
	    value: function toggleSide() {
	      this.props.dispatch((0, _actions.toggleSideBar)());
	    }
	  }, {
	    key: 'toForm',
	    value: function toForm(to) {
	      this.props.dispatch((0, _actions.resetProgram)());
	      if (to === 'Corp') {
	        _reactRouter.browserHistory.push('/legalforms/ca_professional_corporation');
	      } else if (to === 'S-Corp') {
	        _reactRouter.browserHistory.push('/legalforms/ca_s_corporation');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var paddingLeft = 12;
	      var minWidth = 900;
	      if (this.props.state.showSideBar) {
	        paddingLeft += 325;
	        minWidth += 325;
	      }
	      paddingLeft += 'rem';
	      minWidth += 'rem';
	
	      var state = this.props.state;
	
	
	      return _jsx('div', {
	        className: _Program2.default.program + ' wow fadeIn',
	        style: { minWidth: minWidth }
	      }, void 0, _jsx('div', {
	        className: _Program2.default['sidebar-container']
	      }, void 0, _jsx(_SideBar2.default, {
	        show: this.props.state.showSideBar,
	        toggle: this.toggleSide.bind(this),
	        showContact: this.showContact.bind(this)
	      })), _jsx('div', {
	        className: '' + _Program2.default['inputbox-container'],
	        style: { paddingLeft: paddingLeft }
	      }, void 0, _jsx(_InputBox2.default, {
	        name: this.props.params.name,
	        showContact: this.showContact.bind(this),
	        show: state.showFinalNode
	      }), state.showFinalNode && state.finalKind === 'Topic' && _jsx(_Topic2.default, {
	        title: state.finalData.title,
	        message: state.finalData.message,
	        calcTaxInfo: state.finalData.calcTaxInfo,
	        to: state.finalData.to,
	        toForm: this.toForm.bind(this)
	      }), state.showFinalNode && state.finalKind === 'CalculateTax' && _jsx(_CalculateTax2.default, {
	        calcTaxInfo: state.finalData.calcTaxInfo
	      }), state.showFinalNode && state.finalKind === 'Form' && _jsx(_Form2.default, {
	        data: state.finalData
	      })), _jsx(_ContactDialog2.default, {
	        show: this.state.showContact,
	        close: this.closeContact.bind(this)
	      }));
	    }
	  }]);
	
	  return Program;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    state: state.programs
	  };
	}
	
	Program.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Program);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(122);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(17);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';
	
	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    credentials: 'include',
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;
	
	    if (!response.ok) {
	      return Promise.reject(json);
	    }
	    return Promise.resolve(json);
	  });
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/legal-maven',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(11);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var userSchema = new Schema({
	  provider: {
	    type: String,
	    default: 'local',
	    required: true
	  },
	
	  id: {
	    type: String,
	    index: { unique: true }
	  },
	
	  displayName: {
	    type: String,
	    trim: true
	  },
	
	  name: {
	    familyName: {
	      type: String,
	      trim: true,
	      default: ''
	    },
	    givenName: {
	      type: String,
	      trim: true,
	      default: ''
	    },
	    middleName: {
	      type: String,
	      trim: true,
	      default: ''
	    }
	  },
	
	  emails: [{ value: String, kind: String }],
	
	  phone: {
	    type: String,
	    default: ''
	  },
	
	  address: {
	    type: String,
	    default: ''
	  },
	
	  memberShip: {
	    type: String,
	    default: 'free',
	    enum: ['free', 'premium']
	  },
	
	  password: {
	    type: String
	  },
	
	  photo: {
	    type: String,
	    default: ''
	  },
	
	  occupation: {
	    type: String,
	    default: ''
	  },
	
	  created: {
	    type: Date,
	    default: Date.now
	  }
	});
	
	userSchema.methods.validPassword = function (password) {
	  return password == this.password;
	};
	
	exports.default = _mongoose2.default.model('User', userSchema);

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;
	
	var _reactIntl = __webpack_require__(5);
	
	var _intl = __webpack_require__(119);
	
	var _intl2 = _interopRequireDefault(_intl);
	
	var _intlLocalesSupported = __webpack_require__(120);
	
	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
	
	__webpack_require__(121);
	
	var _en = __webpack_require__(128);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _en3 = __webpack_require__(61);
	
	var _en4 = _interopRequireDefault(_en3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en'];
	
	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};
	
	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)
	
	
	// need Intl polyfill, Intl not supported in Safari
	
	
	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}
	
	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;
	
	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }
	
	    return messages;
	  }, {});
	}
	
	// bring in intl polyfill, react-intl, and app-specific language data
	
	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import styles
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _styles = {
	  "container": "_2CcQGaVucI02_lscxEsMwv",
	  "title": "_3-3PU435EXS3BAiYGoReLX",
	  "icon": "_3AmlnTvmLlEp-DAh5Si_W0",
	  "description": "_3cte4I9rgkJ5-q1lO6tn85"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Cover(props) {
	  var title = props.title,
	      icon = props.icon,
	      description = props.description,
	      style = props.style,
	      onClick = props.onClick;
	
	
	  return _jsx('div', {
	    className: _styles2.default.container,
	    style: style,
	    onClick: onClick
	  }, void 0, _jsx('div', {
	    className: _styles2.default.title
	  }, void 0, title), _jsx('div', {
	    className: _styles2.default.icon
	  }, void 0, _jsx('i', {
	    className: 'fa ' + icon,
	    'aria-hidden': 'true'
	  })), _jsx('div', {
	    className: _styles2.default.description
	  }, void 0, description));
	}
	
	exports.default = Cover;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _styles = {
	  "page-container": "_3kbb0T8XWT_D5_f9Mz06tF"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _MyDocuments = __webpack_require__(63);
	
	var _MyDocuments2 = _interopRequireDefault(_MyDocuments);
	
	var _ContinueDocument = __webpack_require__(62);
	
	var _ContinueDocument2 = _interopRequireDefault(_ContinueDocument);
	
	var _NewDocument = __webpack_require__(65);
	
	var _NewDocument2 = _interopRequireDefault(_NewDocument);
	
	var _NeedHelp = __webpack_require__(64);
	
	var _NeedHelp2 = _interopRequireDefault(_NeedHelp);
	
	var _AuthActions = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	var _ref = _jsx('div', {
	  className: 'col-xs-12'
	}, void 0, _jsx(_MyDocuments2.default, {}));
	
	var Profile = function (_Component) {
	  _inherits(Profile, _Component);
	
	  function Profile(props) {
	    _classCallCheck(this, Profile);
	
	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
	  }
	
	  _createClass(Profile, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.dispatch((0, _AuthActions.fetchUserProfileRequested)());
	    }
	  }, {
	    key: 'onUpdateInfo',
	    value: function onUpdateInfo() {
	      alert('Update Information');
	    }
	  }, {
	    key: 'onUpgradeMembership',
	    value: function onUpgradeMembership() {
	      alert('Upgrade');
	    }
	  }, {
	    key: 'onViewAll',
	    value: function onViewAll() {
	      alert('View All');
	    }
	  }, {
	    key: 'onAsk',
	    value: function onAsk() {
	      alert('On Ask');
	    }
	  }, {
	    key: 'onNewDocument',
	    value: function onNewDocument() {
	      alert('On New Document');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default['page-container'] + ' container wow fadeIn'
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, _ref, _jsx('div', {
	        className: 'col-xs-12'
	      }, void 0, _jsx(_ContinueDocument2.default, {
	        onView: this.onViewAll.bind(this)
	      })), _jsx('div', {
	        className: 'col-xs-6'
	      }, void 0, _jsx(_NewDocument2.default, {
	        onNewDocument: this.onNewDocument.bind(this)
	      })), _jsx('div', {
	        className: 'col-xs-6'
	      }, void 0, _jsx(_NeedHelp2.default, {
	        onAsk: this.onAsk.bind(this)
	      }))));
	    }
	  }]);
	
	  return Profile;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(store) {
	  return {
	    auth: store.auth
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Profile);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _Profile = {
	  "profile": "_1V60Xbw1jHy3vltw6hVTx"
	};
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _UserInfo = __webpack_require__(70);
	
	var _UserInfo2 = _interopRequireDefault(_UserInfo);
	
	var _Membership = __webpack_require__(69);
	
	var _Membership2 = _interopRequireDefault(_Membership);
	
	var _Conversation = __webpack_require__(67);
	
	var _Conversation2 = _interopRequireDefault(_Conversation);
	
	var _Activity = __webpack_require__(66);
	
	var _Activity2 = _interopRequireDefault(_Activity);
	
	var _Document = __webpack_require__(68);
	
	var _Document2 = _interopRequireDefault(_Document);
	
	var _AuthActions = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	var _ref = _jsx('div', {
	  className: 'col-xs-12'
	}, void 0, _jsx(_Activity2.default, {}));
	
	var Profile = function (_Component) {
	  _inherits(Profile, _Component);
	
	  function Profile(props) {
	    _classCallCheck(this, Profile);
	
	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
	  }
	
	  _createClass(Profile, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.dispatch((0, _AuthActions.fetchUserProfileRequested)());
	    }
	  }, {
	    key: 'onUpdateInfo',
	    value: function onUpdateInfo() {
	      alert('Update Information');
	    }
	  }, {
	    key: 'onUpgradeMembership',
	    value: function onUpgradeMembership() {
	      alert('Upgrade');
	    }
	  }, {
	    key: 'onViewAll',
	    value: function onViewAll() {
	      alert('View All');
	    }
	  }, {
	    key: 'onAsk',
	    value: function onAsk() {
	      alert('Ask a Maven');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _Profile2.default.profile + ' container wow fadeIn'
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('div', {
	        className: 'col-md-4 col-xs-12'
	      }, void 0, _jsx(_UserInfo2.default, {
	        user: this.props.auth.user,
	        onUpdate: this.onUpdateInfo.bind(this)
	      })), _jsx('div', {
	        className: 'col-md-8 col-xs-12'
	      }, void 0, _jsx(_Membership2.default, {
	        onUpgrade: this.onUpgradeMembership.bind(this)
	      })), _jsx('div', {
	        className: 'col-md-8 col-xs-12'
	      }, void 0, _jsx(_Document2.default, {
	        onView: this.onViewAll.bind(this)
	      })), _ref, _jsx('div', {
	        className: 'col-xs-12'
	      }, void 0, _jsx(_Conversation2.default, {
	        onAsk: this.onAsk.bind(this)
	      }))));
	    }
	  }]);
	
	  return Profile;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(store) {
	  return {
	    auth: store.auth
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Profile);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(129);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(131);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(130);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _validator = __webpack_require__(41);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	var _reactNotificationSystemRedux = __webpack_require__(9);
	
	var _reactNotificationSystemRedux2 = _interopRequireDefault(_reactNotificationSystemRedux);
	
	var _reactFacebookLogin = __webpack_require__(38);
	
	var _reactFacebookLogin2 = _interopRequireDefault(_reactFacebookLogin);
	
	var _reactGoogleLogin = __webpack_require__(39);
	
	var _reactGoogleLogin2 = _interopRequireDefault(_reactGoogleLogin);
	
	var _betterReactSpinkit = __webpack_require__(117);
	
	var _styles = {
	  "page": "_3Ac1z31QYIXo16v83VLnXe",
	  "container": "h0LFH0tqGQuLSrGVR--pT",
	  "title-container": "wkNrRvFv45Uq4f3ri4z94",
	  "title": "_1yTpv4xIWw7a8gCRYUPT35",
	  "description": "_4cF6PpxMfYwMWUGqbqdSY",
	  "link": "_1vhgJ3YDIAOBMR-XLoKzoV",
	  "help-icon": "_1JKArQokGoBs4doNUMg1oV",
	  "input-container": "_1qSXSSu8REji9jn3AybEnv",
	  "label": "_3RA_65SyKVQvaLBS0VF36Z",
	  "input": "_3iiLrVP09jC1Cod6E9M9Fg",
	  "check": "_2NUvTVZc0H1NOCoVpmT-my",
	  "check-container": "_24kOiHkZw0egm5zFoabjJO",
	  "button-container": "U8LmhJr-h2vfM40zDMx1p",
	  "social-container": "f8oc6XiiTI9l2SQSVNbW7",
	  "page-link": "_3Vp0X0IUPyLghX9DniST8f",
	  "policy-text": "_2RckybA9cvCuBy545xMDEh",
	  "btn": "_10gL5tJaGlLuuiSLlH8SC4",
	  "btn-login": "tO9S06Fq5vONtNVnYhUxt",
	  "btn-facebook": "_2IkebOrrRnLUBdBJyknIn8",
	  "btn-google": "_7_l694LRpVdQqVhl_HTf8",
	  "spinner": "_2v2p_mWoGwP5ZM7eMr2vg-"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _AuthActions = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ref = _jsx('strong', {}, void 0, 'Welcome back! ');
	
	var _ref2 = _jsx(_betterReactSpinkit.ThreeBounce, {
	  size: 15,
	  color: 'white'
	});
	
	var _ref3 = _jsx('i', {
	  className: 'fa fa-google'
	});
	
	var Login = function (_Component) {
	  _inherits(Login, _Component);
	
	  function Login(props) {
	    _classCallCheck(this, Login);
	
	    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	
	    _this.state = {
	      email: '',
	      password: ''
	    };
	
	    _this.vMessage = {
	      empty: {
	        title: 'Validation Error',
	        message: 'Please input all fields.',
	        position: 'br',
	        autoDismiss: 3
	      },
	      email: {
	        title: 'Validation Error',
	        message: 'Please enter correct email... !',
	        position: 'br',
	        autoDismiss: 3
	      },
	      password: {
	        title: 'Validation Error',
	        message: 'Password length must be greater than 6.',
	        position: 'br',
	        autoDismiss: 3
	      }
	    };
	    return _this;
	  }
	
	  _createClass(Login, [{
	    key: 'validation',
	    value: function validation() {
	      if (this.state.email === '' || this.state.password === '') {
	        this.props.dispatch(_reactNotificationSystemRedux2.default.error(this.vMessage.empty));
	        return false;
	      }
	
	      if (!_validator2.default.isEmail(this.state.email)) {
	        this.props.dispatch(_reactNotificationSystemRedux2.default.error(this.vMessage.email));
	        return false;
	      }
	
	      if (this.state.password.length < 7) {
	        this.props.dispatch(_reactNotificationSystemRedux2.default.error(this.vMessage.password));
	        return false;
	      }
	
	      return true;
	    }
	  }, {
	    key: 'login',
	    value: function login() {
	      if (!this.validation()) return;
	
	      if (this.props.auth.state === 'LOGGING') return;
	
	      this.props.dispatch((0, _AuthActions.setRedirectUrl)('/'));
	      this.props.dispatch((0, _AuthActions.loginRequest)({
	        email: this.state.email,
	        password: this.state.password
	      }));
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      this.setState(_defineProperty({}, e.target.id, e.target.value));
	    }
	  }, {
	    key: 'facebookLogin',
	    value: function facebookLogin(response) {
	      if (this.props.auth.state === 'LOGGING') return;
	
	      this.props.dispatch((0, _AuthActions.setRedirectUrl)('/'));
	      this.props.dispatch((0, _AuthActions.socialLoginRequest)('facebook', {
	        id: response.id,
	        givenName: response.first_name,
	        familyName: response.last_name,
	        photo: response.picture.data.url,
	        email: response.email
	      }));
	    }
	  }, {
	    key: 'googleLogin',
	    value: function googleLogin(response) {
	      if (typeof response === 'string') {
	        // error occurs
	        console.log('Google Login Failure');
	        return;
	      }
	
	      if (this.props.auth.state === 'LOGGING') return;
	
	      this.props.dispatch((0, _AuthActions.setRedirectUrl)('/'));
	      this.props.dispatch((0, _AuthActions.socialLoginRequest)('google', {
	        id: response.googleId,
	        givenName: response.profileObj.givenName,
	        familyName: response.profileObj.familyName,
	        photo: response.profileObj.imageUrl,
	        email: response.profileObj.email
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default.page + ' container-fluid wow fadeIn'
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('div', {
	        className: 'col-xs-12'
	      }, void 0, _jsx('div', {
	        className: _styles2.default.container + ' row'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['title-container']
	      }, void 0, _jsx('h1', {
	        className: _styles2.default['title']
	      }, void 0, 'Sign In'), _jsx('h2', {
	        className: _styles2.default['description']
	      }, void 0, _ref, 'Please sign in to access and review your account.')), _jsx('form', {
	        className: _styles2.default['input-container']
	      }, void 0, _jsx('div', {
	        className: 'form-group'
	      }, void 0, _jsx('label', {
	        htmlFor: 'email',
	        className: _styles2.default['label']
	      }, void 0, 'Email'), _jsx('input', {
	        type: 'email',
	        className: _styles2.default['input'] + ' form-control',
	        id: 'email',
	        placeholder: '',
	        value: this.state.email,
	        onChange: this.onChange.bind(this)
	      })), _jsx('div', {
	        className: 'form-group'
	      }, void 0, _jsx('label', {
	        htmlFor: 'password',
	        className: _styles2.default['label']
	      }, void 0, 'Password'), _jsx('input', {
	        type: 'password',
	        className: _styles2.default['input'] + ' form-control',
	        id: 'password',
	        placeholder: '',
	        value: this.state.password,
	        onChange: this.onChange.bind(this)
	      }), _jsx('div', {
	        className: _styles2.default['check-container']
	      }, void 0, _jsx('input', {
	        type: 'checkbox',
	        className: '' + _styles2.default['check'],
	        value: ''
	      }), '\xA0Remember me', _jsx('a', {
	        className: 'pull-right'
	      }, void 0, 'Forgot password?')))), _jsx('div', {
	        className: _styles2.default['button-container']
	      }, void 0, _jsx('a', {
	        href: 'javascript:void(0)',
	        className: _styles2.default['btn-login'] + ' ' + _styles2.default['btn'],
	        onClick: this.login.bind(this)
	      }, void 0, this.props.auth.state === 'LOGGING' ? _ref2 : 'Sign in'), !(this.props.auth.state === 'LOGGING') && _jsx('div', {
	        className: _styles2.default['social-container']
	      }, void 0, _jsx(_reactFacebookLogin2.default, {
	        appId: '128968304375975',
	        fields: 'first_name,last_name,email,picture',
	        tag: 'a',
	        icon: 'fa-facebook',
	        textButton: 'Facebook',
	        cssClass: _styles2.default['btn-facebook'] + ' ' + _styles2.default['btn'] + ' pull-left',
	        callback: this.facebookLogin.bind(this)
	      }), _jsx(_reactGoogleLogin2.default, {
	        clientId: '1057707658731-er6vr8sf5psl1uh3sjtsio5t2ooaljpi.apps.googleusercontent.com',
	        buttonText: 'Google',
	        tag: 'a',
	        className: _styles2.default['btn-google'] + ' ' + _styles2.default['btn'] + ' pull-right',
	        onSuccess: this.googleLogin.bind(this),
	        onFailure: this.googleLogin.bind(this)
	      }, void 0, _ref3, 'Google')), _jsx('div', {
	        style: { marginTop: 20 }
	      }, void 0, _jsx(_reactRouter.Link, {
	        className: _styles2.default['page-link'],
	        to: '/signup'
	      }, void 0, 'Do not have account? Create account'))), _jsx('div', {
	        className: _styles2.default['policy-text']
	      }, void 0, 'By clicking Create Account, you agree to our ', _jsx('a', {
	        className: _styles2.default['link']
	      }, void 0, 'License Agreement'), ' and ', _jsx('a', {
	        className: _styles2.default['link']
	      }, void 0, 'Privacy Policy.'))))));
	    }
	  }]);
	
	  return Login;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    auth: state.auth
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _validator = __webpack_require__(41);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	var _reactNotificationSystemRedux = __webpack_require__(9);
	
	var _reactNotificationSystemRedux2 = _interopRequireDefault(_reactNotificationSystemRedux);
	
	var _reactFacebookLogin = __webpack_require__(38);
	
	var _reactFacebookLogin2 = _interopRequireDefault(_reactFacebookLogin);
	
	var _reactGoogleLogin = __webpack_require__(39);
	
	var _reactGoogleLogin2 = _interopRequireDefault(_reactGoogleLogin);
	
	var _styles = {
	  "page": "_3Ac1z31QYIXo16v83VLnXe",
	  "container": "h0LFH0tqGQuLSrGVR--pT",
	  "title-container": "wkNrRvFv45Uq4f3ri4z94",
	  "title": "_1yTpv4xIWw7a8gCRYUPT35",
	  "description": "_4cF6PpxMfYwMWUGqbqdSY",
	  "link": "_1vhgJ3YDIAOBMR-XLoKzoV",
	  "help-icon": "_1JKArQokGoBs4doNUMg1oV",
	  "input-container": "_1qSXSSu8REji9jn3AybEnv",
	  "label": "_3RA_65SyKVQvaLBS0VF36Z",
	  "input": "_3iiLrVP09jC1Cod6E9M9Fg",
	  "check": "_2NUvTVZc0H1NOCoVpmT-my",
	  "check-container": "_24kOiHkZw0egm5zFoabjJO",
	  "button-container": "U8LmhJr-h2vfM40zDMx1p",
	  "social-container": "f8oc6XiiTI9l2SQSVNbW7",
	  "page-link": "_3Vp0X0IUPyLghX9DniST8f",
	  "policy-text": "_2RckybA9cvCuBy545xMDEh",
	  "btn": "_10gL5tJaGlLuuiSLlH8SC4",
	  "btn-login": "tO9S06Fq5vONtNVnYhUxt",
	  "btn-facebook": "_2IkebOrrRnLUBdBJyknIn8",
	  "btn-google": "_7_l694LRpVdQqVhl_HTf8",
	  "spinner": "_2v2p_mWoGwP5ZM7eMr2vg-"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _AuthActions = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ref = _jsx('strong', {}, void 0, 'Great choice! ');
	
	var _ref2 = _jsx('i', {
	  className: 'fa fa-google'
	});
	
	var _ref3 = _jsx('br', {});
	
	var Register = function (_Component) {
	  _inherits(Register, _Component);
	
	  function Register(props) {
	    _classCallCheck(this, Register);
	
	    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));
	
	    _this.state = {
	      firstName: '',
	      lastName: '',
	      email: '',
	      password: '',
	      rePassword: ''
	    };
	
	    _this.vMessage = {
	      empty: {
	        title: 'Validation Error',
	        message: 'Please input all fields.',
	        position: 'br',
	        autoDismiss: 3
	      },
	      email: {
	        title: 'Validation Error',
	        message: 'Please enter correct email... !',
	        position: 'br',
	        autoDismiss: 3
	      },
	      password: {
	        title: 'Validation Error',
	        message: 'Password length must be greater than 6.',
	        position: 'br',
	        autoDismiss: 3
	      },
	      matchPassword: {
	        title: 'Validation Error',
	        message: 'Password doesn\'t match.',
	        position: 'br',
	        autoDismiss: 3
	      }
	    };
	    return _this;
	  }
	
	  _createClass(Register, [{
	    key: 'validation',
	    value: function validation() {
	      if (this.state.email === '' || this.state.password === '' || this.state.firstName === '' || this.state.lastName === '' || this.state.rePassword === '') {
	        this.props.dispatch(_reactNotificationSystemRedux2.default.error(this.vMessage.empty));
	        return false;
	      }
	
	      if (!_validator2.default.isEmail(this.state.email)) {
	        this.props.dispatch(_reactNotificationSystemRedux2.default.error(this.vMessage.email));
	        return false;
	      }
	
	      if (this.state.password.length < 7) {
	        this.props.dispatch(_reactNotificationSystemRedux2.default.error(this.vMessage.password));
	        return false;
	      }
	
	      if (this.state.password !== this.state.rePassword) {
	        this.props.dispatch(_reactNotificationSystemRedux2.default.error(this.vMessage.matchPassword));
	        return false;
	      }
	
	      return true;
	    }
	  }, {
	    key: 'register',
	    value: function register() {
	      if (!this.validation()) return;
	
	      this.props.dispatch((0, _AuthActions.setRedirectUrl)('/profile'));
	      this.props.dispatch((0, _AuthActions.registerRequest)({
	        firstName: this.state.firstName,
	        lastName: this.state.lastName,
	        email: this.state.email,
	        password: this.state.password
	      }));
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      this.setState(_defineProperty({}, e.target.id, e.target.value));
	    }
	  }, {
	    key: 'facebookLogin',
	    value: function facebookLogin(response) {
	      if (this.props.auth.state === 'LOGGING') return;
	
	      this.props.dispatch((0, _AuthActions.setRedirectUrl)('/profile'));
	      this.props.dispatch((0, _AuthActions.socialLoginRequest)('facebook', {
	        id: response.id,
	        givenName: response.first_name,
	        familyName: response.last_name,
	        photo: response.picture.data.url
	      }));
	    }
	  }, {
	    key: 'googleLogin',
	    value: function googleLogin(response) {
	      if (typeof response === 'string') {
	        // error occurs
	        console.log('Google Login Failure');
	        return;
	      }
	
	      if (this.props.auth.state === 'LOGGING') return;
	
	      this.props.dispatch((0, _AuthActions.setRedirectUrl)('/profile'));
	      this.props.dispatch((0, _AuthActions.socialLoginRequest)('google', {
	        id: response.googleId,
	        givenName: response.profileObj.givenName,
	        familyName: response.profileObj.familyName,
	        photo: response.profileObj.imageUrl
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default.page + ' container-fluid wow fadeIn'
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('div', {
	        className: 'col-xs-12'
	      }, void 0, _jsx('div', {
	        className: _styles2.default.container + ' row'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['title-container']
	      }, void 0, _jsx('h1', {
	        className: _styles2.default['title']
	      }, void 0, 'Create Account'), _jsx('h2', {
	        className: _styles2.default['description']
	      }, void 0, _ref, "Let's create your free account")), _jsx('form', {
	        className: _styles2.default['input-container']
	      }, void 0, _jsx('div', {
	        className: 'form-group'
	      }, void 0, _jsx('label', {
	        htmlFor: 'firstname',
	        className: _styles2.default['label']
	      }, void 0, 'First Name'), _jsx('input', {
	        type: 'text',
	        className: _styles2.default['input'] + ' form-control',
	        id: 'firstName',
	        placeholder: '',
	        value: this.state.firstName,
	        onChange: this.onChange.bind(this)
	      })), _jsx('div', {
	        className: 'form-group'
	      }, void 0, _jsx('label', {
	        htmlFor: 'lastname',
	        className: _styles2.default['label']
	      }, void 0, 'Last Name'), _jsx('input', {
	        type: 'text',
	        className: _styles2.default['input'] + ' form-control',
	        id: 'lastName',
	        placeholder: '',
	        value: this.state.lastName,
	        onChange: this.onChange.bind(this)
	      })), _jsx('div', {
	        className: 'form-group'
	      }, void 0, _jsx('label', {
	        htmlFor: 'email',
	        className: _styles2.default['label']
	      }, void 0, 'Email'), _jsx('input', {
	        type: 'email',
	        className: _styles2.default['input'] + ' form-control',
	        id: 'email',
	        placeholder: '',
	        value: this.state.email,
	        onChange: this.onChange.bind(this)
	      })), _jsx('div', {
	        className: 'form-group'
	      }, void 0, _jsx('label', {
	        htmlFor: 'password',
	        className: _styles2.default['label']
	      }, void 0, 'Password'), _jsx('input', {
	        type: 'password',
	        className: _styles2.default['input'] + ' form-control',
	        id: 'password',
	        placeholder: 'Must be at least 7 characters',
	        value: this.state.password,
	        onChange: this.onChange.bind(this)
	      }), _jsx('input', {
	        type: 'password',
	        className: _styles2.default['input'] + ' form-control',
	        id: 'rePassword',
	        placeholder: 'Confirm password',
	        style: { marginTop: 6 },
	        value: this.state.rePassword,
	        onChange: this.onChange.bind(this)
	      }))), _jsx('div', {
	        className: _styles2.default['button-container']
	      }, void 0, _jsx('a', {
	        href: 'javascript:void(0)',
	        className: _styles2.default['btn-login'] + ' ' + _styles2.default['btn'],
	        onClick: this.register.bind(this)
	      }, void 0, 'Create Account'), !(this.props.auth.state === 'LOGGING') && _jsx('div', {
	        className: _styles2.default['social-container']
	      }, void 0, _jsx(_reactFacebookLogin2.default, {
	        appId: '128968304375975',
	        fields: 'first_name,last_name,email,picture',
	        tag: 'a',
	        icon: 'fa-facebook',
	        textButton: 'Facebook',
	        cssClass: _styles2.default['btn-facebook'] + ' ' + _styles2.default['btn'] + ' pull-left',
	        callback: this.facebookLogin.bind(this)
	      }), _jsx(_reactGoogleLogin2.default, {
	        clientId: '1057707658731-er6vr8sf5psl1uh3sjtsio5t2ooaljpi.apps.googleusercontent.com',
	        buttonText: 'Google',
	        tag: 'a',
	        className: _styles2.default['btn-google'] + ' ' + _styles2.default['btn'] + ' pull-right',
	        onSuccess: this.googleLogin.bind(this),
	        onFailure: this.googleLogin.bind(this)
	      }, void 0, _ref2, 'Google')), _jsx('div', {
	        style: { marginTop: 20 }
	      }, void 0, _jsx(_reactRouter.Link, {
	        className: _styles2.default['page-link'],
	        to: '/signin'
	      }, void 0, 'Already have an account? Log in'))), _jsx('div', {
	        className: _styles2.default['policy-text']
	      }, void 0, 'By clicking Create Account, you agree to our ', _ref3, _jsx('a', {
	        className: _styles2.default['link']
	      }, void 0, 'License Agreement'), ' and ', _jsx('a', {
	        className: _styles2.default['link']
	      }, void 0, 'Privacy Policy.'))))));
	    }
	  }]);
	
	  return Register;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    auth: state.auth
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Register);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _Home = {
	  "home": "_37C9HJPUzY52Ex490y87_h",
	  "footer": "_1wZ1wZ-UlievGrJUWIxiJC",
	  "service-box": "_2ndtVNYt2HqQlFrk9BLFgu",
	  "service-icon": "_3q81HjDZxpEDZMqsEU6ro5",
	  "service-title": "_1m7s6_1JUwdhD932tYX9L2",
	  "service-text": "_2snTPXEMvEN8i5jdi--HnB",
	  "main-container": "_1Sdl55TwHlDFxbirT1jrhV",
	  "title": "_1ldS0leZzeochsFHKEFPfg",
	  "description": "_2jMdm40vzBlPDfByr0SY8b",
	  "search-box-container": "Ejl1kMqO-LvUhHYFGs7JB",
	  "search-icon": "_2_lH2nFeY9x-twSVV928GR",
	  "search-box": "_2R7FQyRpoCE5m3JJfubYo4"
	};
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _Footer = __webpack_require__(79);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _bg = '/' + "37af2caac70c45d0bb56ae518a4ad97b.png";
	
	var _bg2 = _interopRequireDefault(_bg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var _ref = _jsx(_Footer2.default, {});
	
	var Home = function (_Component) {
	  _inherits(Home, _Component);
	
	  function Home(props) {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	  }
	
	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _Home2.default.home + ' wow fadeIn',
	        style: { background: '#FFF url(' + _bg2.default + ') repeat' }
	      }, void 0, _jsx('div', {
	        className: _Home2.default['main-container'] + ' container wow zoomIn',
	        'data-wow-delay': '0.2s',
	        'data-wow-duration': '0.5s'
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('div', {
	        className: _Home2.default['title'] + ' col-xs-12'
	      }, void 0, 'Legal Maven'), _jsx('div', {
	        className: _Home2.default['description'] + ' col-xs-12'
	      }, void 0, 'Get to the right answer. Faster.'), _jsx('div', {
	        className: _Home2.default['search-box-container'] + ' col-md-push-3 col-md-6 col-sm-push-2 col-sm-8 col-xs-push-1 col-xs-10'
	      }, void 0, _jsx('input', {
	        type: 'text',
	        className: _Home2.default['search-box'],
	        placeholder: 'How may we help you today?'
	      }), _jsx('i', {
	        className: 'fa fa-search ' + _Home2.default['search-icon'],
	        'aria-hidden': 'true'
	      })))), _ref);
	    }
	  }]);
	
	  return Home;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Home);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.switchLanguage = switchLanguage;
	
	var _setup = __webpack_require__(22);
	
	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
	
	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _LegalForms = {
	  "legalforms": "teKUuQkyz6mW5tTfLFx9y",
	  "background": "_3HdWLcrvdMDWY1iLIuEa_H",
	  "search-box-container": "_2dRn6A-2AOssizAWOTlIio",
	  "title-container": "BCmq0s2LUFocUdBqjGAJw",
	  "main-title": "TH_kcNedGpBtuVh3krWuJ",
	  "main-container": "_1-qfa_O7rNClpeRke8m4JV",
	  "category": "_2g5qk64clRhfI8xpk0oEFA",
	  "category-title": "_1AafoO20HdQYSWW4qp4Gz3",
	  "item": "o62MUcK5oWVq6lj_jrIg7",
	  "legaltopics": "_2cFnXdF4rrZXGuFVQiCzSO"
	};
	
	var _LegalForms2 = _interopRequireDefault(_LegalForms);
	
	var _PageHeader = __webpack_require__(81);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var _ref = _jsx(_PageHeader2.default, {});
	
	var LegalForms = function (_Component) {
	  _inherits(LegalForms, _Component);
	
	  function LegalForms(props) {
	    _classCallCheck(this, LegalForms);
	
	    var _this = _possibleConstructorReturn(this, (LegalForms.__proto__ || Object.getPrototypeOf(LegalForms)).call(this, props));
	
	    _this.category = [{
	      title: 'Business Corporation',
	      topics: [{
	        title: 'CA - Professional Corporation',
	        href: '/legalforms/ca_professional_corporation'
	      }, {
	        title: 'CA - S-Corporation',
	        href: '/legalforms/ca_s_corporation'
	      }]
	    }];
	    return _this;
	  }
	
	  _createClass(LegalForms, [{
	    key: 'render',
	    value: function render() {
	      var categories = this.category.map(function (category, index) {
	        var topics = category.topics.map(function (topic, index) {
	          return _jsx(_reactRouter.Link, {
	            className: _LegalForms2.default['item'],
	            to: topic.href
	          }, index, topic.title);
	        });
	
	        if (topics.length) return _jsx('div', {
	          className: _LegalForms2.default['category']
	        }, index, _jsx('div', {
	          className: _LegalForms2.default['category-title']
	        }, void 0, category.title), topics);else return null;
	      });
	
	      return _jsx('div', {
	        className: _LegalForms2.default.legalforms + ' wow fadeIn'
	      }, void 0, _jsx('div', {
	        className: _LegalForms2.default.background
	      }), _ref, _jsx('div', {
	        className: '' + _LegalForms2.default['title-container']
	      }, void 0, _jsx('div', {
	        className: _LegalForms2.default['main-title']
	      }, void 0, 'Let\'s get started, please select a form.')), _jsx('div', {
	        className: _LegalForms2.default['main-container'] + ' container'
	      }, void 0, categories));
	    }
	  }]);
	
	  return LegalForms;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(LegalForms);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _LegalTopics = {
	  "legaltopics": "_1QnudGqMJ6jjuh23uIYNrr",
	  "background": "_2OeevWp4GSDKDWnhbPKtag",
	  "search-box-container": "_1NnZz6XVCJO1y47NCJzaHn",
	  "title-container": "_3D_1FVbAbCbnNEyF-P8nEW",
	  "main-title": "_3WQc4gzsgFoDnBIRY1YWdp",
	  "main-container": "ANef79a5Et04I24eN1VzC",
	  "category": "_33uIc0dNDj1fhd6sKOpEIw",
	  "category-title": "_1XzNQouh405W6cLj6Xc1JJ",
	  "item": "a6DkO-r5lb32Gm_qz2znc"
	};
	
	var _LegalTopics2 = _interopRequireDefault(_LegalTopics);
	
	var _PageHeader = __webpack_require__(82);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var _ref = _jsx(_PageHeader2.default, {});
	
	var LegalTopics = function (_Component) {
	  _inherits(LegalTopics, _Component);
	
	  function LegalTopics(props) {
	    _classCallCheck(this, LegalTopics);
	
	    var _this = _possibleConstructorReturn(this, (LegalTopics.__proto__ || Object.getPrototypeOf(LegalTopics)).call(this, props));
	
	    _this.category = [{
	      title: 'Start-Ups',
	      topics: [{
	        title: 'Should I incorporate?',
	        href: '/legaltopics/incorporate'
	      }, {
	        title: 'Can I trademark?',
	        href: '/legaltopics/trademark'
	      }, {
	        title: 'Do I need to set up payroll?',
	        href: '/legaltopics/payroll'
	      }]
	    }, {
	      title: 'Real Estate',
	      topics: [{
	        title: 'Do I owe transfer tax? (CA only)',
	        href: '/legaltopics/transfertax'
	      }, {
	        title: 'Am I entitled to a refund of my security deposit?',
	        href: '/legaltopics/securitydeposit'
	      }]
	    }];
	    return _this;
	  }
	
	  _createClass(LegalTopics, [{
	    key: 'onSearch',
	    value: function onSearch(event) {
	      this.setState({ keyword: event.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var categories = this.category.map(function (category, index) {
	        var topics = category.topics.map(function (topic, index) {
	          return _jsx(_reactRouter.Link, {
	            className: _LegalTopics2.default['item'],
	            to: topic.href
	          }, index, topic.title);
	        });
	
	        if (topics.length) return _jsx('div', {
	          className: _LegalTopics2.default['category']
	        }, index, _jsx('div', {
	          className: _LegalTopics2.default['category-title']
	        }, void 0, category.title), topics);else return null;
	      });
	
	      return _jsx('div', {
	        className: _LegalTopics2.default.legaltopics + ' wow fadeIn'
	      }, void 0, _jsx('div', {
	        className: _LegalTopics2.default.background
	      }), _ref, _jsx('div', {
	        className: _LegalTopics2.default['title-container']
	      }, void 0, _jsx('div', {
	        className: _LegalTopics2.default['main-title']
	      }, void 0, 'Let\'s get started, please select a topic.')), _jsx('div', {
	        className: _LegalTopics2.default['main-container'] + ' container'
	      }, void 0, categories));
	    }
	  }]);
	
	  return LegalTopics;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(LegalTopics);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCurrentProgram = exports.getPrograms = exports.initialState = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _actions = __webpack_require__(8);
	
	// Initial State
	var initialState = exports.initialState = { programs: {}, current: '', showSideBar: true };
	
	var ProgramReducer = function ProgramReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _actions.ADD_PROGRAM:
	      var newPrograms = Object.assign({}, state.programs);
	      newPrograms[action.name] = action.program;
	      return _extends({}, state, {
	        programs: newPrograms
	      });
	
	    case _actions.SET_CURRENT_PROGRAM:
	      return _extends({}, state, {
	        current: action.name
	      });
	
	    case _actions.TOGGLE_SIDEBAR:
	      return _extends({}, state, {
	        showSideBar: !state.showSideBar
	      });
	
	    case _actions.SET_FINAL_NODE:
	      return _extends({}, state, {
	        showFinalNode: true,
	        finalKind: action.finalKind,
	        finalData: action.finalData
	      });
	
	    case _actions.HIDE_FINAL_NODE:
	      return _extends({}, state, {
	        showFinalNode: false
	      });
	
	    case _actions.RESET_PROGRAM:
	      return _extends({}, state, {
	        showFinalNode: false
	      });
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all programs
	var getPrograms = exports.getPrograms = function getPrograms(state) {
	  return state.programs.programs;
	};
	
	// Get program by name
	var getCurrentProgram = exports.getCurrentProgram = function getCurrentProgram(state) {
	  return state.programs.programs[state.programs.current];
	};
	
	// Export Reducer
	exports.default = ProgramReducer;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactBootstrap = __webpack_require__(12);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _Topic = __webpack_require__(93);
	
	var _Topic2 = _interopRequireDefault(_Topic);
	
	var _styles = {
	  "container": "_7TVH3fZZgScqqvRueJycy",
	  "header": "vn0ong9vj-71lsR8Ai9ps",
	  "content": "_3DcpKlTnAxjjTesWN8lU1r",
	  "message": "PME5DpvIxjhDxot7RSbpJ",
	  "actions": "_39LBOzkxP8gC1pYsuxlR0M",
	  "footer": "_2PUBeYc-shW_HNAo_iFI4F",
	  "button": "_3-Pu11oWeEqefx8hKrRvaw",
	  "modal": "_2-kdaQbqlm3dXm2pn8nLoo"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var _ref = _jsx(_Topic2.default, {});
	
	var TopicDialog = function (_React$Component) {
	  _inherits(TopicDialog, _React$Component);
	
	  function TopicDialog(props) {
	    _classCallCheck(this, TopicDialog);
	
	    return _possibleConstructorReturn(this, (TopicDialog.__proto__ || Object.getPrototypeOf(TopicDialog)).call(this, props));
	  }
	
	  _createClass(TopicDialog, [{
	    key: 'render',
	    value: function render() {
	      return _jsx(_reactBootstrap.Modal, {
	        show: this.props.show,
	        onHide: this.props.close,
	        bsSize: 'sm',
	        dialogClassName: _styles2.default['modal']
	      }, void 0, _ref);
	    }
	  }]);
	
	  return TopicDialog;
	}(_react2.default.Component);
	
	exports.default = TopicDialog;

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (strData, strDelimiter) {
	  // Check to see if the delimiter is defined. If not,
	  // then default to comma.
	  strDelimiter = strDelimiter || ",";
	  // Create a regular expression to parse the CSV values.
	  var objPattern = new RegExp(
	  // Delimiters.
	  "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
	  // Quoted fields.
	  "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
	  // Standard fields.
	  "([^\"\\" + strDelimiter + "\\r\\n]*))", "gi");
	  // Create an array to hold our data. Give the array
	  // a default empty first row.
	  var arrData = [[]];
	  // Create an array to hold our individual pattern
	  // matching groups.
	  var arrMatches = null;
	  // Keep looping over the regular expression matches
	  // until we can no longer find a match.
	  while (arrMatches = objPattern.exec(strData)) {
	    // Get the delimiter that was found.
	    var strMatchedDelimiter = arrMatches[1];
	    // Check to see if the given delimiter has a length
	    // (is not the start of string) and if it matches
	    // field delimiter. If id does not, then we know
	    // that this delimiter is a row delimiter.
	    if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) {
	      // Since we have reached a new row of data,
	      // add an empty row to our data array.
	      arrData.push([]);
	    }
	    // Now that we have our delimiter out of the way,
	    // let's check to see which kind of value we
	    // captured (quoted or unquoted).
	    if (arrMatches[2]) {
	      // We found a quoted value. When we capture
	      // this value, unescape any double quotes.
	      var strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
	    } else {
	      // We found a non-quoted value.
	      var strMatchedValue = arrMatches[3];
	    }
	    // Now that we have our value string, let's add
	    // it to the data array.
	    arrData[arrData.length - 1].push(strMatchedValue);
	  }
	  // Return the parsed data.
	  return arrData;
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getExemptionListIndexArray = exports.getExemptionListIndexArray = function getExemptionListIndexArray(list) {
	  var exemptions = list[0];
	  var indexArray = new Array(exemptions.length).fill(0).map(function (e, i) {
	    return i;
	  });
	
	  for (var i = 1; i < exemptions.length - 1; i++) {
	    for (var j = i + 1; j < exemptions.length - 1; j++) {
	      if (exemptions[indexArray[i]] > exemptions[indexArray[j]]) {
	        var _ref = [indexArray[j], indexArray[i]];
	        indexArray[i] = _ref[0];
	        indexArray[j] = _ref[1];
	      }
	    }
	  }
	
	  return indexArray;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(11);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	/*
	const programSchema = new Schema({
	  name: { type: 'String', default: '', required: true },
	  start: { type: 'String', default: 'action_1', required: true },
	  node: [{
	      id: String,
	      type: String, // 'RESULT', 'QUESTION', 'ACTION'
	      content: {
	        question: String,
	        decision: [
	          {
	            answer: String,
	            next: String,
	            action: String
	          }
	        ]
	      },
	      action: {
	        type: String,
	        value: Number,
	        next: String
	      },
	      result: {
	        description: String
	      }
	    }]
	});*/
	
	var programSchema = new Schema({
	  name: { type: 'String', default: '', required: true },
	  start: { type: 'String', default: 'action_1', required: true },
	  description: { type: 'String', default: '', required: true },
	  kind: { type: 'String', default: 'Topic', required: true },
	  node: Array
	});
	
	exports.default = _mongoose2.default.model('Program', programSchema);

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("react-facebook-login");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("react-google-login");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("validator");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactIntl = __webpack_require__(5);
	
	var _reactRedux = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _App = __webpack_require__(71);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}
	
	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(29);
	  __webpack_require__(15);
	  __webpack_require__(31);
	  __webpack_require__(32);
	  __webpack_require__(25);
	  __webpack_require__(24);
	  __webpack_require__(27);
	  __webpack_require__(28);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(29).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/legaltopics',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(32).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/legalforms',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(31).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/legaltopics/:name',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(15).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/legalforms/:name',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(15).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/signin',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(27).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/signup',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(28).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/profile',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(25).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/mydocuments',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(24).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(40);
	
	var _reduxThunk = __webpack_require__(132);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(26);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(110);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
	
	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));
	
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }
	
	  return store;
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  _program2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	
	    /*const topic1 = new Program(topic_incorporate);
	    const topic2 = new Program(topic_payroll);
	    const topic3 = new Program(topic_trademark);
	    const topic4 = new Program(topic_transfertax);
	    const form1 = new Program(ca_professional_corporation);
	    const form2 = new Program(ca_s_corporation);*/
	
	    //Program.create([topic1, topic2, topic3, topic4, form1, form2], (error) => {
	
	    _program2.default.create([], function (error) {
	      if (!error) {
	        console.log('ready to go....');
	      }
	    });
	  });
	};
	
	var _program = __webpack_require__(37);
	
	var _program2 = _interopRequireDefault(_program);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (passport) {
	  // Get one program by name
	  router.route('/login').post(passport.authenticate('local', { failureRedirect: '/api/auth/login_failure' }), authController.loginSuccess);
	
	  router.get('/login_failure', authController.loginFailure);
	
	  // Register new User
	  router.route('/register').post(authController.register);
	
	  // Facebook Login
	  router.post('/facebook', authController.facebook);
	
	  // Google Login
	  router.post('/google', authController.google);
	
	  // Log out
	  router.get('/logout', authController.logout);
	
	  // Get Profile
	  router.get('/profile', authController.getUser);
	
	  return router;
	};
	
	var _express = __webpack_require__(10);
	
	var _auth = __webpack_require__(111);
	
	var authController = _interopRequireWildcard(_auth);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(10);
	
	var _post = __webpack_require__(112);
	
	var PostController = _interopRequireWildcard(_post);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/posts').get(PostController.getPosts);
	
	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);
	
	// Add a new Post
	router.route('/posts').post(PostController.addPost);
	
	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);
	
	exports.default = router;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(10);
	
	var _program = __webpack_require__(113);
	
	var ProgramController = _interopRequireWildcard(_program);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get one program by name
	router.route('/:name').get(ProgramController.get);
	
	// Add a new program
	router.route('/').post(ProgramController.add);
	
	// Delete a program by name
	router.route('/:name').delete(ProgramController.remove);
	
	exports.default = router;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(116);
	
	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);
	
	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(21);
	var cssnext = __webpack_require__(124);
	var postcssFocus = __webpack_require__(125);
	var postcssReporter = __webpack_require__(126);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("connect-flash");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("passport-local");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    appName: 'Legal Maven',
	    legalTopics: 'Legal Topics',
	    legalForms: 'Legal Forms',
	    services: 'Services',
	    contact: 'Contact',
	    siteTitle: 'Legal Maven',
	    addPost: 'Add Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styles = {
	  "container": "_29lNdlmHOgGODE5B2aPaw3",
	  "container-title": "_2ftuvrFQlCatf88WNyWulu",
	  "doc-container": "_3UwtTByHAumeG4rdqenyQ8",
	  "avatar-container": "_2_DQHoBnKRbi8YxtfdL09c",
	  "avatar": "_2dPbUrnswVDWDU9ijEAmwv",
	  "info-container": "_2I6jWLJr78beWfXEJj-s7P",
	  "text-box": "_2ZjEaI04mJ2df61GI8F9KY",
	  "tip-text": "_3lV3PkvsRbGJ6ArJtekxtJ",
	  "title": "_13kSXY69oRDXDHJFUaV3dX",
	  "text": "_3eRVd2RxcjvtDNbHthNE-L",
	  "icon": "_22bzO39l6tTgGOXkQfrGZD",
	  "button-container": "_3n117LtGkSDUDc9afBk7rc",
	  "button-container2": "_2ZOE4eqbHBrj8GRv9Aodfa",
	  "activity-container": "_1zmvOw4FRcfCsI-o8luzvn",
	  "link": "cA9dazKUHd6ZvuFCpP_W2",
	  "activity-seemore": "GrdcIpU7p8QsKVo-YA5h3"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var _ref = _jsx('i', {
	  className: 'fa fa-briefcase',
	  'aria-hidden': 'true'
	});
	
	var _ref2 = _jsx('i', {
	  className: 'fa fa-file',
	  'aria-hidden': 'true'
	});
	
	var _ref3 = _jsx('div', {}, void 0, _jsx('i', {
	  className: 'fa fa-caret-down',
	  'aria-hidden': 'true'
	}));
	
	var ContinueDocument = function (_Component) {
	  _inherits(ContinueDocument, _Component);
	
	  function ContinueDocument(props) {
	    _classCallCheck(this, ContinueDocument);
	
	    return _possibleConstructorReturn(this, (ContinueDocument.__proto__ || Object.getPrototypeOf(ContinueDocument)).call(this, props));
	  }
	
	  _createClass(ContinueDocument, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default.container + ' row'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['container-title'] + ' col-xs-12'
	      }, void 0, 'Continue Document'), _jsx('div', {
	        className: _styles2.default['activity-container'] + ' col-xs-12'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['icon'] + ' col-xs-1'
	      }, void 0, _ref), _jsx('div', {
	        className: _styles2.default['title'] + ' col-sm-4 col-xs-10'
	      }, void 0, 'Business Corporation'), _jsx('div', {
	        className: _styles2.default['text'] + ' col-sm-3 col-xs-4'
	      }, void 0, '2017/5/5'), _jsx('div', {
	        className: _styles2.default['text'] + ' pull-right'
	      }, void 0, _jsx('a', {
	        className: _styles2.default.link
	      }, void 0, "Let's continue >"))), _jsx('div', {
	        className: _styles2.default['activity-container'] + ' col-xs-12'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['icon'] + ' col-xs-1'
	      }, void 0, _ref2), _jsx('div', {
	        className: _styles2.default['title'] + ' col-sm-4 col-xs-10'
	      }, void 0, 'Articles of Incorporation'), _jsx('div', {
	        className: _styles2.default['text'] + ' col-sm-3 col-xs-4'
	      }, void 0, '2017/6/3'), _jsx('div', {
	        className: _styles2.default['text'] + ' pull-right'
	      }, void 0, _jsx('a', {
	        className: _styles2.default.link
	      }, void 0, "Let's continue >"))), _jsx('div', {
	        className: _styles2.default['activity-seemore'] + ' col-xs-12'
	      }, void 0, _ref3));
	    }
	  }]);
	
	  return ContinueDocument;
	}(_react.Component);
	
	exports.default = ContinueDocument;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styles = {
	  "container": "_29lNdlmHOgGODE5B2aPaw3",
	  "container-title": "_2ftuvrFQlCatf88WNyWulu",
	  "doc-container": "_3UwtTByHAumeG4rdqenyQ8",
	  "avatar-container": "_2_DQHoBnKRbi8YxtfdL09c",
	  "avatar": "_2dPbUrnswVDWDU9ijEAmwv",
	  "info-container": "_2I6jWLJr78beWfXEJj-s7P",
	  "text-box": "_2ZjEaI04mJ2df61GI8F9KY",
	  "tip-text": "_3lV3PkvsRbGJ6ArJtekxtJ",
	  "title": "_13kSXY69oRDXDHJFUaV3dX",
	  "text": "_3eRVd2RxcjvtDNbHthNE-L",
	  "icon": "_22bzO39l6tTgGOXkQfrGZD",
	  "button-container": "_3n117LtGkSDUDc9afBk7rc",
	  "button-container2": "_2ZOE4eqbHBrj8GRv9Aodfa",
	  "activity-container": "_1zmvOw4FRcfCsI-o8luzvn",
	  "link": "cA9dazKUHd6ZvuFCpP_W2",
	  "activity-seemore": "GrdcIpU7p8QsKVo-YA5h3"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Document = __webpack_require__(13);
	
	var _Document2 = _interopRequireDefault(_Document);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var _ref = _jsx(_Document2.default, {
	  empty: false,
	  icon: 'fa-plus',
	  title: 'Articles of Professional Incorporation',
	  description: 'Let\'s begin the professional incorporation process.'
	});
	
	var _ref2 = _jsx(_Document2.default, {
	  empty: true,
	  icon: 'fa-plus',
	  title: '<br />Create New'
	});
	
	var _ref3 = _jsx(_Document2.default, {
	  empty: true,
	  icon: 'fa-plus',
	  title: '<br />Create New'
	});
	
	var _ref4 = _jsx(_Document2.default, {
	  empty: true,
	  icon: 'fa-plus',
	  title: '<br />Create New'
	});
	
	var MyDocuments = function (_Component) {
	  _inherits(MyDocuments, _Component);
	
	  function MyDocuments(props) {
	    _classCallCheck(this, MyDocuments);
	
	    return _possibleConstructorReturn(this, (MyDocuments.__proto__ || Object.getPrototypeOf(MyDocuments)).call(this, props));
	  }
	
	  _createClass(MyDocuments, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _jsx('div', {
	        className: _styles2.default.container + ' row',
	        onClick: function onClick(e) {
	          return _this2.props.onClick();
	        },
	        style: this.props.style
	      }, void 0, _jsx('div', {
	        className: _styles2.default['container-title'] + ' text-center col-xs-12'
	      }, void 0, 'My Documents'), _jsx('div', {
	        className: _styles2.default['doc-container'] + ' col-xs-12'
	      }, void 0, _jsx('div', {
	        className: 'col-xs-3'
	      }, void 0, _ref), _jsx('div', {
	        className: 'col-xs-3'
	      }, void 0, _ref2), _jsx('div', {
	        className: 'col-xs-3'
	      }, void 0, _ref3), _jsx('div', {
	        className: 'col-xs-3'
	      }, void 0, _ref4)));
	    }
	  }]);
	
	  return MyDocuments;
	}(_react.Component);
	
	MyDocuments.PropTypes = {
	  onClick: _propTypes2.default.func
	};
	
	exports.default = MyDocuments;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styles = {
	  "container": "_29lNdlmHOgGODE5B2aPaw3",
	  "container-title": "_2ftuvrFQlCatf88WNyWulu",
	  "doc-container": "_3UwtTByHAumeG4rdqenyQ8",
	  "avatar-container": "_2_DQHoBnKRbi8YxtfdL09c",
	  "avatar": "_2dPbUrnswVDWDU9ijEAmwv",
	  "info-container": "_2I6jWLJr78beWfXEJj-s7P",
	  "text-box": "_2ZjEaI04mJ2df61GI8F9KY",
	  "tip-text": "_3lV3PkvsRbGJ6ArJtekxtJ",
	  "title": "_13kSXY69oRDXDHJFUaV3dX",
	  "text": "_3eRVd2RxcjvtDNbHthNE-L",
	  "icon": "_22bzO39l6tTgGOXkQfrGZD",
	  "button-container": "_3n117LtGkSDUDc9afBk7rc",
	  "button-container2": "_2ZOE4eqbHBrj8GRv9Aodfa",
	  "activity-container": "_1zmvOw4FRcfCsI-o8luzvn",
	  "link": "cA9dazKUHd6ZvuFCpP_W2",
	  "activity-seemore": "GrdcIpU7p8QsKVo-YA5h3"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var NeedHelp = function (_Component) {
	  _inherits(NeedHelp, _Component);
	
	  function NeedHelp(props) {
	    _classCallCheck(this, NeedHelp);
	
	    return _possibleConstructorReturn(this, (NeedHelp.__proto__ || Object.getPrototypeOf(NeedHelp)).call(this, props));
	  }
	
	  _createClass(NeedHelp, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default.container + ' row'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['container-title'] + ' col-xs-12'
	      }, void 0, 'Need Help ?'), _jsx('div', {
	        className: _styles2.default['text-box'] + ' col-xs-12'
	      }, void 0, _jsx('span', {
	        className: _styles2.default['title']
	      }, void 0, 'Have a question or need help?'), _jsx('span', {
	        className: _styles2.default['text']
	      }, void 0, 'Our mavens are here to assist you with all your legal questions! How may we assist you?')), _jsx('div', {
	        className: _styles2.default['button-container2'] + ' col-xs-12'
	      }, void 0, _jsx(_Button2.default, {
	        title: 'Ask a Maven',
	        onClick: this.props.onAsk
	      }), _jsx('span', {
	        className: _styles2.default['tip-text']
	      }, void 0, 'Click for more access!')));
	    }
	  }]);
	
	  return NeedHelp;
	}(_react.Component);
	
	NeedHelp.PropTypes = {
	  onAsk: _propTypes2.default.func.isRequired
	};
	
	exports.default = NeedHelp;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styles = {
	  "container": "_29lNdlmHOgGODE5B2aPaw3",
	  "container-title": "_2ftuvrFQlCatf88WNyWulu",
	  "doc-container": "_3UwtTByHAumeG4rdqenyQ8",
	  "avatar-container": "_2_DQHoBnKRbi8YxtfdL09c",
	  "avatar": "_2dPbUrnswVDWDU9ijEAmwv",
	  "info-container": "_2I6jWLJr78beWfXEJj-s7P",
	  "text-box": "_2ZjEaI04mJ2df61GI8F9KY",
	  "tip-text": "_3lV3PkvsRbGJ6ArJtekxtJ",
	  "title": "_13kSXY69oRDXDHJFUaV3dX",
	  "text": "_3eRVd2RxcjvtDNbHthNE-L",
	  "icon": "_22bzO39l6tTgGOXkQfrGZD",
	  "button-container": "_3n117LtGkSDUDc9afBk7rc",
	  "button-container2": "_2ZOE4eqbHBrj8GRv9Aodfa",
	  "activity-container": "_1zmvOw4FRcfCsI-o8luzvn",
	  "link": "cA9dazKUHd6ZvuFCpP_W2",
	  "activity-seemore": "GrdcIpU7p8QsKVo-YA5h3"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var NewDocument = function (_Component) {
	  _inherits(NewDocument, _Component);
	
	  function NewDocument(props) {
	    _classCallCheck(this, NewDocument);
	
	    return _possibleConstructorReturn(this, (NewDocument.__proto__ || Object.getPrototypeOf(NewDocument)).call(this, props));
	  }
	
	  _createClass(NewDocument, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default.container + ' row'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['container-title'] + ' col-xs-12'
	      }, void 0, 'New Document'), _jsx('div', {
	        className: _styles2.default['text-box'] + ' col-xs-12'
	      }, void 0, _jsx('span', {
	        className: _styles2.default['text']
	      }, void 0, 'Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium, totam rem.')), _jsx('div', {
	        className: _styles2.default['button-container2'] + ' col-xs-12'
	      }, void 0, _jsx(_Button2.default, {
	        title: 'New Document',
	        onClick: this.props.onNewDocument
	      }), _jsx('span', {
	        className: _styles2.default['tip-text']
	      }, void 0, 'Click to review my documents.')));
	    }
	  }]);
	
	  return NewDocument;
	}(_react.Component);
	
	NewDocument.PropTypes = {
	  onNewDocument: _propTypes2.default.func.isRequired
	};
	
	exports.default = NewDocument;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styles = {
	  "container": "_3xhID-yddsPEr0M30uFUo1",
	  "container-title": "b-GupJP5llYDFMHTY1jOP",
	  "avatar-container": "_1OzZgsoNdzag9SlUMqUWRB",
	  "avatar": "_2jODcprNs-DgNgWYrirxtc",
	  "info-container": "_3VYfLgQ-voooVwxM9vox2s",
	  "text-box": "A0e6PlHUdXhm6eczQaLcI",
	  "tip-text": "_30d7ahubYnOPHP_1-s3djw",
	  "title": "eiL7N5k0gOQAMpTqL8A0p",
	  "text": "_1VSVRE4jq4vAtE-5KrCIC5",
	  "icon": "_3DvqbW00-U7V5mUC0QFoqR",
	  "button-container": "_3GDxEF35ezj276e6bTr-ms",
	  "button-container2": "_1LmN3MYxCnyOfx_ZehP37C",
	  "activity-container": "_1Byjd627g_yPcg6_SGNIjW",
	  "link": "zoilsZ9AdF_K_RHb9bx2b",
	  "activity-seemore": "_3Ilf1uOkoTNc8S75yBEfpm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var _ref = _jsx('i', {
	  className: 'fa fa-briefcase',
	  'aria-hidden': 'true'
	});
	
	var _ref2 = _jsx('i', {
	  className: 'fa fa-file',
	  'aria-hidden': 'true'
	});
	
	var _ref3 = _jsx('div', {}, void 0, _jsx('i', {
	  className: 'fa fa-caret-down',
	  'aria-hidden': 'true'
	}));
	
	var Activity = function (_Component) {
	  _inherits(Activity, _Component);
	
	  function Activity(props) {
	    _classCallCheck(this, Activity);
	
	    return _possibleConstructorReturn(this, (Activity.__proto__ || Object.getPrototypeOf(Activity)).call(this, props));
	  }
	
	  _createClass(Activity, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default.container + ' row'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['container-title'] + ' col-xs-12'
	      }, void 0, 'My Activity'), _jsx('div', {
	        className: _styles2.default['activity-container'] + ' col-xs-12'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['icon'] + ' col-xs-1'
	      }, void 0, _ref), _jsx('div', {
	        className: _styles2.default['title'] + ' col-sm-4 col-xs-10'
	      }, void 0, 'Business Corporation'), _jsx('div', {
	        className: _styles2.default['text'] + ' col-sm-3 col-xs-4'
	      }, void 0, '2017/5/5'), _jsx('div', {
	        className: _styles2.default['text'] + ' pull-right'
	      }, void 0, _jsx('a', {
	        className: _styles2.default.link
	      }, void 0, "Let's continue >"))), _jsx('div', {
	        className: _styles2.default['activity-container'] + ' col-xs-12'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['icon'] + ' col-xs-1'
	      }, void 0, _ref2), _jsx('div', {
	        className: _styles2.default['title'] + ' col-sm-4 col-xs-10'
	      }, void 0, 'Articles of Incorporation'), _jsx('div', {
	        className: _styles2.default['text'] + ' col-sm-3 col-xs-4'
	      }, void 0, '2017/6/3'), _jsx('div', {
	        className: _styles2.default['text'] + ' pull-right'
	      }, void 0, _jsx('a', {
	        className: _styles2.default.link
	      }, void 0, "Let's continue >"))), _jsx('div', {
	        className: _styles2.default['activity-seemore'] + ' col-xs-12'
	      }, void 0, _ref3));
	    }
	  }]);
	
	  return Activity;
	}(_react.Component);
	
	exports.default = Activity;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styles = {
	  "container": "_3xhID-yddsPEr0M30uFUo1",
	  "container-title": "b-GupJP5llYDFMHTY1jOP",
	  "avatar-container": "_1OzZgsoNdzag9SlUMqUWRB",
	  "avatar": "_2jODcprNs-DgNgWYrirxtc",
	  "info-container": "_3VYfLgQ-voooVwxM9vox2s",
	  "text-box": "A0e6PlHUdXhm6eczQaLcI",
	  "tip-text": "_30d7ahubYnOPHP_1-s3djw",
	  "title": "eiL7N5k0gOQAMpTqL8A0p",
	  "text": "_1VSVRE4jq4vAtE-5KrCIC5",
	  "icon": "_3DvqbW00-U7V5mUC0QFoqR",
	  "button-container": "_3GDxEF35ezj276e6bTr-ms",
	  "button-container2": "_1LmN3MYxCnyOfx_ZehP37C",
	  "activity-container": "_1Byjd627g_yPcg6_SGNIjW",
	  "link": "zoilsZ9AdF_K_RHb9bx2b",
	  "activity-seemore": "_3Ilf1uOkoTNc8S75yBEfpm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var Conversation = function (_Component) {
	  _inherits(Conversation, _Component);
	
	  function Conversation(props) {
	    _classCallCheck(this, Conversation);
	
	    return _possibleConstructorReturn(this, (Conversation.__proto__ || Object.getPrototypeOf(Conversation)).call(this, props));
	  }
	
	  _createClass(Conversation, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default.container + ' row'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['container-title'] + ' col-xs-12'
	      }, void 0, 'Conversations'), _jsx('div', {
	        className: _styles2.default['text-box'] + ' col-xs-12'
	      }, void 0, _jsx('span', {
	        className: _styles2.default['text']
	      }, void 0, 'Our mavens are here to assist you with all your legal questions. Let us know how we may help you, and we will get back to you as soon as possible.')), _jsx('div', {
	        className: _styles2.default['button-container2'] + ' col-xs-12'
	      }, void 0, _jsx(_Button2.default, {
	        title: 'Ask a Maven',
	        onClick: this.props.onAsk
	      }), _jsx('span', {
	        className: _styles2.default['tip-text']
	      }, void 0, 'Click for more access!')));
	    }
	  }]);
	
	  return Conversation;
	}(_react.Component);
	
	Conversation.PropTypes = {
	  onAsk: _propTypes2.default.func.isRequired
	};
	
	exports.default = Conversation;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styles = {
	  "container": "_3xhID-yddsPEr0M30uFUo1",
	  "container-title": "b-GupJP5llYDFMHTY1jOP",
	  "avatar-container": "_1OzZgsoNdzag9SlUMqUWRB",
	  "avatar": "_2jODcprNs-DgNgWYrirxtc",
	  "info-container": "_3VYfLgQ-voooVwxM9vox2s",
	  "text-box": "A0e6PlHUdXhm6eczQaLcI",
	  "tip-text": "_30d7ahubYnOPHP_1-s3djw",
	  "title": "eiL7N5k0gOQAMpTqL8A0p",
	  "text": "_1VSVRE4jq4vAtE-5KrCIC5",
	  "icon": "_3DvqbW00-U7V5mUC0QFoqR",
	  "button-container": "_3GDxEF35ezj276e6bTr-ms",
	  "button-container2": "_1LmN3MYxCnyOfx_ZehP37C",
	  "activity-container": "_1Byjd627g_yPcg6_SGNIjW",
	  "link": "zoilsZ9AdF_K_RHb9bx2b",
	  "activity-seemore": "_3Ilf1uOkoTNc8S75yBEfpm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var Document = function (_Component) {
	  _inherits(Document, _Component);
	
	  function Document(props) {
	    _classCallCheck(this, Document);
	
	    return _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).call(this, props));
	  }
	
	  _createClass(Document, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default.container + ' row'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['container-title'] + ' col-xs-12'
	      }, void 0, 'My Documents'), _jsx('div', {
	        className: _styles2.default['text-box'] + ' col-xs-12'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['title']
	      }, void 0, 'View or start a new document:'), _jsx('span', {
	        className: _styles2.default['text']
	      }, void 0, 'Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium, totam rem.')), _jsx('div', {
	        className: _styles2.default['button-container2'] + ' col-xs-12'
	      }, void 0, _jsx(_Button2.default, {
	        title: 'View All',
	        onClick: this.props.onView
	      }), _jsx('span', {
	        className: _styles2.default['tip-text']
	      }, void 0, 'Click to review my documents.')));
	    }
	  }]);
	
	  return Document;
	}(_react.Component);
	
	Document.PropTypes = {
	  onView: _propTypes2.default.func.isRequired
	};
	
	exports.default = Document;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styles = {
	  "container": "_3xhID-yddsPEr0M30uFUo1",
	  "container-title": "b-GupJP5llYDFMHTY1jOP",
	  "avatar-container": "_1OzZgsoNdzag9SlUMqUWRB",
	  "avatar": "_2jODcprNs-DgNgWYrirxtc",
	  "info-container": "_3VYfLgQ-voooVwxM9vox2s",
	  "text-box": "A0e6PlHUdXhm6eczQaLcI",
	  "tip-text": "_30d7ahubYnOPHP_1-s3djw",
	  "title": "eiL7N5k0gOQAMpTqL8A0p",
	  "text": "_1VSVRE4jq4vAtE-5KrCIC5",
	  "icon": "_3DvqbW00-U7V5mUC0QFoqR",
	  "button-container": "_3GDxEF35ezj276e6bTr-ms",
	  "button-container2": "_1LmN3MYxCnyOfx_ZehP37C",
	  "activity-container": "_1Byjd627g_yPcg6_SGNIjW",
	  "link": "zoilsZ9AdF_K_RHb9bx2b",
	  "activity-seemore": "_3Ilf1uOkoTNc8S75yBEfpm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var Membership = function (_Component) {
	  _inherits(Membership, _Component);
	
	  function Membership(props) {
	    _classCallCheck(this, Membership);
	
	    return _possibleConstructorReturn(this, (Membership.__proto__ || Object.getPrototypeOf(Membership)).call(this, props));
	  }
	
	  _createClass(Membership, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _styles2.default.container + ' row'
	      }, void 0, _jsx('div', {
	        className: _styles2.default['container-title'] + ' col-xs-12'
	      }, void 0, 'Membership Details'), _jsx('div', {
	        className: _styles2.default['text-box'] + ' col-xs-12'
	      }, void 0, _jsx('span', {
	        className: _styles2.default['title']
	      }, void 0, 'Status:'), _jsx('span', {
	        className: _styles2.default['text']
	      }, void 0, 'Free Membership')), _jsx('div', {
	        className: _styles2.default['text-box'] + ' col-xs-12'
	      }, void 0, _jsx('span', {
	        className: _styles2.default['title']
	      }, void 0, 'Services Available:'), _jsx('span', {
	        className: _styles2.default['text']
	      }, void 0, 'Access to programs, glossary, most forms, current events, interactions with our Mavens.')), _jsx('div', {
	        className: _styles2.default['button-container2'] + ' col-xs-12'
	      }, void 0, _jsx(_Button2.default, {
	        title: 'Upgrade',
	        onClick: this.props.onUpgrade
	      }), _jsx('span', {
	        className: _styles2.default['tip-text']
	      }, void 0, 'Click for more success!')));
	    }
	  }]);
	
	  return Membership;
	}(_react.Component);
	
	Membership.PropTypes = {
	  onUpgrade: _propTypes2.default.func.isRequired
	};
	
	exports.default = Membership;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styles = {
	  "container": "_3xhID-yddsPEr0M30uFUo1",
	  "container-title": "b-GupJP5llYDFMHTY1jOP",
	  "avatar-container": "_1OzZgsoNdzag9SlUMqUWRB",
	  "avatar": "_2jODcprNs-DgNgWYrirxtc",
	  "info-container": "_3VYfLgQ-voooVwxM9vox2s",
	  "text-box": "A0e6PlHUdXhm6eczQaLcI",
	  "tip-text": "_30d7ahubYnOPHP_1-s3djw",
	  "title": "eiL7N5k0gOQAMpTqL8A0p",
	  "text": "_1VSVRE4jq4vAtE-5KrCIC5",
	  "icon": "_3DvqbW00-U7V5mUC0QFoqR",
	  "button-container": "_3GDxEF35ezj276e6bTr-ms",
	  "button-container2": "_1LmN3MYxCnyOfx_ZehP37C",
	  "activity-container": "_1Byjd627g_yPcg6_SGNIjW",
	  "link": "zoilsZ9AdF_K_RHb9bx2b",
	  "activity-seemore": "_3Ilf1uOkoTNc8S75yBEfpm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	var UserInfo = function (_Component) {
	  _inherits(UserInfo, _Component);
	
	  function UserInfo(props) {
	    _classCallCheck(this, UserInfo);
	
	    return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));
	  }
	
	  _createClass(UserInfo, [{
	    key: 'renderInfo',
	    value: function renderInfo(icon, info) {
	      // const icons = ['fa-user', 'fa-envelope', 'fa-phone', 'fa-map-marker', 'fa-briefcase'];
	      // const user = this.props.user;
	      // if (user) {
	      // const info = [ `${ user.name.givenName } ${ user.name.familyName }`,
	      //   user.emails[0].value, user.address, user.occupation ]
	
	
	      return _jsx('div', {
	        className: '' + _styles2.default['text-box']
	      }, void 0, _jsx('div', {
	        className: _styles2.default['icon']
	      }, void 0, _jsx('i', {
	        className: 'fa ' + icon,
	        'aria-hidden': 'true'
	      })), _jsx('span', {
	        className: _styles2.default['text']
	      }, void 0, info));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user = this.props.user;
	      console.log(user);
	      return _jsx('div', {
	        className: '' + _styles2.default.container
	      }, void 0, _jsx('div', {
	        className: _styles2.default['avatar-container']
	      }, void 0, _jsx('img', {
	        className: _styles2.default.avatar,
	        src: user && user.photo ? user.photo : "https://cdn.psychologytoday.com/sites/default/files/blogs/46379/2014/07/155585-159667.gif"
	      })), _jsx('div', {
	        className: _styles2.default['info-container']
	      }, void 0, this.renderInfo('fa-user', user && user.name ? user.name.givenName + ' ' + user.name.familyName : ''), this.renderInfo('fa-envelope', user && user.emails ? user.emails[0].value : ''), this.renderInfo('fa-phone', user && user.phone ? user.phone : ''), this.renderInfo('fa-map-marker', user && user.address ? user.address : ''), this.renderInfo('fa-briefcase', user && user.occupation ? user.occupation : '')), _jsx('div', {
	        className: '' + _styles2.default['button-container']
	      }, void 0, _jsx(_Button2.default, {
	        title: 'Update Info',
	        onClick: this.props.onUpdate
	      })));
	    }
	  }]);
	
	  return UserInfo;
	}(_react.Component);
	
	UserInfo.PropTypes = {
	  onUpdate: _propTypes2.default.func.isRequired
	};
	
	exports.default = UserInfo;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7",
	  "search-box-container": "_34URlSEfBI-87eZbNFn_20"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(20);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(26);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _Header = __webpack_require__(74);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(73);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _SearchBox = __webpack_require__(76);
	
	var _SearchBox2 = _interopRequireDefault(_SearchBox);
	
	var _AppActions = __webpack_require__(14);
	
	var _IntlActions = __webpack_require__(30);
	
	var _AuthActions = __webpack_require__(7);
	
	var _reactNotificationSystemRedux = __webpack_require__(9);
	
	var _reactNotificationSystemRedux2 = _interopRequireDefault(_reactNotificationSystemRedux);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	var _ref = _jsx(_SearchBox2.default, {});
	
	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.toggleAddPostSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	    };
	
	    _this.state = { isMounted: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	      this.props.dispatch((0, _AuthActions.setLoginState)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var notifications = this.props.notifications;
	
	      //Optional styling
	
	      var style = {
	        NotificationItem: { // Override the notification item
	          DefaultStyle: { // Applied to every notification, regardless of the notification level
	            margin: '10rem 5rem 2rem 1rem'
	          },
	
	          success: {// Applied only to the success notification item
	
	          }
	        }
	      };
	
	      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development', _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'Legal Maven',
	        titleTemplate: 'Legal Maven - %s',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_Header2.default, {
	        location: this.props.location
	      }), this.props.app.showSearchBar && _jsx('div', {
	        className: _App2.default['search-box-container'],
	        style: { zIndex: 3 }
	      }, void 0, _ref), _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.props.children, _jsx(_reactNotificationSystemRedux2.default, {
	        notifications: notifications,
	        style: style
	      }))));
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl,
	    notifications: store.notifications,
	    app: store.app
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _AppActions = __webpack_require__(14);
	
	// Initial State
	var initialState = {
	  showSearchBar: false
	}; // Import Actions
	
	
	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _AppActions.TOGGLE_SEARCH_BAR:
	      return {
	        showSearchBar: !state.showSearchBar
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	// Import Images
	
	
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(5);
	
	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
	};
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";
	
	var _headerBk2 = _interopRequireDefault(_headerBk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('p', {}, void 0, '\xA9 2016 \xB7 Hashnode \xB7 LinearBytes Inc.');
	
	var _ref2 = _jsx('p', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'twitterMessage'
	}), ' : ', _jsx('a', {
	  href: 'https://twitter.com/@mern_io',
	  target: '_Blank'
	}, void 0, '@mern_io'));
	
	function Footer() {
	  return _jsx('div', {
	    style: { background: '#FFF url(' + _headerBk2.default + ') center' },
	    className: _Footer2.default.footer
	  }, void 0, _ref, _ref2);
	}
	
	exports.default = Footer;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _AuthActions = __webpack_require__(7);
	
	var _AppActions = __webpack_require__(14);
	
	var _Header = {
	  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
	  "navbar": "_3UQRaVe_7Awdu51MeZEx_N",
	  "logo": "LNLY14D54Y1IQaktsExe3",
	  "nav": "_1XPHMyKF7D7HGbdgrSi3Bo",
	  "nav-item-search": "_3k0iRlfeoCo7Qr148KYmNL",
	  "nav-item": "_1Ku52NhsgU-a4xvFlv3f_o",
	  "navbar-toggle": "_1HU_4Z5TtN69fVUjB_Sq2L",
	  "icon": "_3tIvuM0J0LUnGEyiyq4ofL",
	  "circular-border": "_3i1SG3fLSwrAieVBUV6CTu",
	  "dropdown": "_3-5-TWSoP6e9_LppIBTwlk",
	  "section": "_38LtvyCSPSIl57o4tje_oV",
	  "section-title": "_3uLUOCcG4NqgMGWmLv6AEt",
	  "fixed": "_53UJYskFMlmKUkGSbJgl3",
	  "signin": "aUFVwBhybvm5kKfskFs8i",
	  "signup": "_11msVEXcr_aXstnJ66x20T"
	};
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _NavBar = __webpack_require__(75);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	var _select = '/' + "b76618df6a7d751327e52da61da43ba3.png";
	
	var _select2 = _interopRequireDefault(_select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	// Import Style
	
	
	var _ref = _jsx('div', {}, void 0, _jsx(_reactRouter.Link, {
	  to: '/legaltopics'
	}, void 0, 'Legal Topics'));
	
	var _ref2 = _jsx('div', {}, void 0, _jsx(_reactRouter.Link, {
	  to: '/legalforms'
	}, void 0, 'Legal Forms'));
	
	var _ref3 = _jsx('div', {}, void 0, _jsx('a', {
	  href: ''
	}, void 0, 'Services'));
	
	var _ref4 = _jsx('div', {}, void 0, _jsx('a', {}, void 0, 'Contact'));
	
	var _ref5 = _jsx('i', {
	  className: 'fa fa-search'
	});
	
	var _ref6 = _jsx(_reactRouter.Link, {
	  to: '/signin'
	}, void 0, 'Sign In');
	
	var _ref7 = _jsx(_reactRouter.Link, {
	  to: '/signup'
	}, void 0, 'Sign Up');
	
	var _ref8 = _jsx('i', {
	  className: 'fa fa-caret-down'
	});
	
	var _ref9 = _jsx('li', {}, void 0, _jsx(_reactRouter.Link, {
	  to: '/profile'
	}, void 0, 'Profile'));
	
	var _ref10 = _jsx('li', {}, void 0, _jsx(_reactRouter.Link, {
	  to: '/mydocuments'
	}, void 0, 'Documents'));
	
	var _ref11 = _jsx('i', {
	  className: 'fa fa-bars',
	  'aria-hidden': 'true'
	});
	
	var _ref12 = _jsx('div', {}, void 0);
	
	var Header = function (_Component) {
	  _inherits(Header, _Component);
	
	  function Header(props) {
	    _classCallCheck(this, Header);
	
	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(Header, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      /*const path = nextProps.location.pathname.split('/');
	      if (path.length > 2 && (path[1] === 'legalforms' || path[1] === 'legaltopics')) {
	        this.setState({ showSubNav: true });
	      } else {
	        this.setState({ showSubNav: false });
	      }*/
	    }
	  }, {
	    key: 'onLogout',
	    value: function onLogout() {
	      this.props.dispatch((0, _AuthActions.logoutRequested)());
	    }
	  }, {
	    key: 'onSearch',
	    value: function onSearch() {
	      var dispatch = this.props.dispatch;
	
	      dispatch((0, _AppActions.toggleSearchBar)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var search_back_url = '';
	      if (this.props.app.showSearchBar) search_back_url = 'url(\'' + _select2.default + '\')';
	
	      var items = {
	        legalTopics: _jsx('li', {
	          className: _Header2.default['nav-item']
	        }, void 0, _ref),
	        legalForms: _jsx('li', {
	          className: _Header2.default['nav-item']
	        }, void 0, _ref2),
	        services: _jsx('li', {
	          className: _Header2.default['nav-item']
	        }, void 0, _ref3),
	        contact: _jsx('li', {
	          className: _Header2.default['nav-item']
	        }, void 0, _ref4),
	        search: _jsx('li', {
	          className: '' + _Header2.default['nav-item-search'],
	          style: { backgroundImage: search_back_url }
	        }, void 0, _jsx('div', {
	          onClick: this.onSearch.bind(this)
	        }, void 0, _ref5)),
	        signIn: _jsx('li', {
	          className: _Header2.default['nav-item'] + ' ' + _Header2.default['circular-border'] + ' ' + _Header2.default['signin']
	        }, void 0, _ref6),
	        signUp: _jsx('li', {
	          className: _Header2.default['nav-item'] + ' ' + _Header2.default['circular-border'] + ' ' + _Header2.default['signup']
	        }, void 0, _ref7),
	        account: _jsx('li', {
	          className: _Header2.default['nav-item']
	        }, void 0, _jsx('div', {}, void 0, _jsx('i', {
	          className: 'fa fa-user ' + _Header2.default['icon']
	        }), ' \xA0Account ', _ref8), _jsx('ul', {
	          className: _Header2.default['dropdown']
	        }, void 0, _ref9, _ref10, _jsx('li', {}, void 0, _jsx('a', {
	          href: 'javascript:void(0)',
	          onClick: this.onLogout.bind(this)
	        }, void 0, 'Log Out')))),
	        setting: _jsx('li', {
	          className: _Header2.default['nav-item']
	        }, void 0, _jsx('a', {}, void 0, _jsx('i', {
	          className: 'fa fa-bars ' + _Header2.default['setting']
	        })))
	      };
	
	      var isLogged = this.props.auth.state === 'LOGGED';
	      return (
	        /*<div className={styles.header}>
	          <a className={styles.logo} href="/">
	            Legal Maven
	          </a>
	          <div className={styles.nav}>
	            {!this.state.showSubNav && items.legalTopics}
	            {!this.state.showSubNav && items.legalForms}
	            {!this.state.showSubNav && items.services}
	            {!this.state.showSubNav && items.contact}
	            {this.state.showSubNav && items.search}
	            {items.account}
	            {items.setting}
	          </div>
	          {this.state.showSubNav && <Navbar />}
	        </div>*/
	        _jsx('div', {
	          className: _Header2.default.header
	        }, void 0, _jsx('nav', {
	          className: 'navbar ' + _Header2.default.navbar,
	          style: { zIndex: 999 }
	        }, void 0, _jsx('div', {
	          className: 'container-fluid'
	        }, void 0, _jsx('div', {
	          className: 'navbar-header'
	        }, void 0, _jsx('button', {
	          type: 'button',
	          className: 'navbar-toggle ' + _Header2.default['navbar-toggle'],
	          'data-toggle': 'collapse',
	          'data-target': '#myNavbar'
	        }, void 0, _ref11), _jsx('a', {
	          className: 'navbar-brand ' + _Header2.default.logo,
	          href: '/'
	        }, void 0, 'Legal Maven')), _jsx('div', {
	          className: 'collapse navbar-collapse',
	          id: 'myNavbar'
	        }, void 0, _jsx('ul', {
	          className: 'nav navbar-nav navbar-right'
	        }, void 0, items.legalTopics, items.legalForms, items.services, items.contact, items.search, !isLogged && items.signIn, !isLogged && items.signUp, isLogged && items.account)))), _ref12)
	      );
	    }
	  }]);
	
	  return Header;
	}(_react.Component);
	
	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    app: store.app,
	    auth: store.auth
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.NavBar = NavBar;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _NavBar = {
	  "navbar": "UBwu_MobkjeXEfKrEAvqv",
	  "nav": "_3ueR40igGy0m0rrCWMvd5X",
	  "nav-item": "lq02e1RYhofZRlrFS9xou",
	  "dropdown": "_1_7z3sRyRcN2-XL-CZujTA",
	  "section": "_-EXnUJz40krEoMFznsSBN",
	  "section-title": "hBj7p7j1UnK1y7-2UDOUd"
	};
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactRouter.Link, {
	  to: '/legaltopics'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'legalTopics'
	}));
	
	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/legalforms'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'legalForms'
	}));
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'services'
	});
	
	var _ref4 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'contact'
	});
	
	function NavBar(props, context) {
	  return _jsx('div', {
	    className: _NavBar2.default.navbar,
	    style: { zIndex: 999 }
	  }, void 0, _jsx('div', {
	    className: _NavBar2.default.nav
	  }, void 0, _jsx('div', {
	    className: _NavBar2.default['nav-item']
	  }, void 0, _ref), _jsx('div', {
	    className: _NavBar2.default['nav-item']
	  }, void 0, _ref2), _jsx('div', {
	    className: _NavBar2.default['nav-item']
	  }, void 0, _ref3), _jsx('div', {
	    className: _NavBar2.default['nav-item']
	  }, void 0, _ref4)));
	}
	
	NavBar.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = NavBar;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _reactAutosuggest = __webpack_require__(127);
	
	var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);
	
	var _SearchBox = {
	  "container": "_3ta9x2SrfkuBFA9nSP-Qfp",
	  "input": "_38LLpKsSH2MFUWUKdAk-03",
	  "inputFocused": "_3048ad2bs2a_gBR9KMxkJh",
	  "inputOpen": "_1bhbTTxOcZB02enSWjCr12",
	  "suggestionsContainer": "_3I6i2NaQOVhPSL1u9hiGv0",
	  "suggestionsContainerOpen": "_1c4u1xgH1XpVT9yR1Hhyp7",
	  "suggestionsList": "_3YblCGG-29eU8xGg_3T1zr",
	  "suggestion": "_3uo7I5kSz4Rs7StlOauoh5",
	  "suggestionHighlighted": "_1TS-Z1hDT_8u3qxbuyuP_j",
	  "suggestion-text": "_2BlQBMwXohNtwQOE0dF0HD",
	  "sectionContainer": "_3zvKn7zlMihbx4fFGx8fjY",
	  "sectionContainerFirst": "_2gc5W4atlxPSLmYfH5Zz4r",
	  "sectionTitle": "_36QkkFyZsx9PuEnXz9Nr1m",
	  "inputContainer": "_122jiS4fx8vOfETDU6yAwg",
	  "icon": "GyQG7j4TZaFJaTr0OS8EO"
	};
	
	var _SearchBox2 = _interopRequireDefault(_SearchBox);
	
	var _SearchList = __webpack_require__(77);
	
	var _SearchList2 = _interopRequireDefault(_SearchList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
	function escapeRegexCharacters(str) {
	  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	
	function getSuggestions(value) {
	  var escapedValue = escapeRegexCharacters(value.trim());
	
	  if (escapedValue === '') {
	    return [];
	  }
	
	  var regex = new RegExp(escapedValue, 'i');
	
	  return _SearchList2.default.map(function (section) {
	    return {
	      title: section.kind + ' : ' + section.title,
	      programs: section.programs.filter(function (program) {
	        return regex.test(program.title);
	      })
	    };
	  }).filter(function (section) {
	    return section.programs.length > 0;
	  });
	}
	
	function getSuggestionValue(suggestion) {
	  return suggestion.title;
	}
	
	function renderSuggestion(suggestion) {
	  return _jsx('a', {
	    href: suggestion.href
	  }, void 0, suggestion.title);
	}
	
	function renderSectionTitle(section) {
	  return _jsx('strong', {
	    className: _SearchBox2.default['sectionTitle']
	  }, void 0, section.title);
	}
	
	function getSectionSuggestions(section) {
	  return section.programs;
	}
	
	var SearchBox = function (_Component) {
	  _inherits(SearchBox, _Component);
	
	  function SearchBox(props) {
	    _classCallCheck(this, SearchBox);
	
	    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this, props));
	
	    _this.onChange = function (event, _ref) {
	      var newValue = _ref.newValue;
	
	      _this.setState({
	        value: newValue
	      });
	    };
	
	    _this.onSuggestionsFetchRequested = function (_ref2) {
	      var value = _ref2.value;
	
	      _this.setState({
	        suggestions: getSuggestions(value)
	      });
	    };
	
	    _this.onSuggestionsClearRequested = function () {
	      _this.setState({
	        suggestions: []
	      });
	    };
	
	    _this.renderInputComponent = function (inputProps) {
	      return _jsx('span', {
	        className: _SearchBox2.default.inputContainer
	      }, void 0, _react2.default.createElement('input', inputProps), _jsx('i', {
	        className: 'fa fa-search ' + _SearchBox2.default['icon'],
	        'aria-hidden': 'true'
	      }));
	    };
	
	    _this.state = {
	      value: '',
	      suggestions: []
	    };
	    return _this;
	  }
	
	  // Autosuggest will call this function every time you need to update suggestions.
	  // You already implemented this logic above, so just use it.
	
	
	  // Autosuggest will call this function every time you need to clear suggestions.
	
	
	  _createClass(SearchBox, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          value = _state.value,
	          suggestions = _state.suggestions;
	
	      // Autosuggest will pass through all these props to the input.
	
	      var inputProps = {
	        placeholder: 'Search Legal Maven',
	        value: value,
	        onChange: this.onChange
	      };
	
	      return _jsx(_reactAutosuggest2.default, {
	        multiSection: true,
	        suggestions: suggestions,
	        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
	        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
	        getSuggestionValue: getSuggestionValue,
	        renderSuggestion: renderSuggestion,
	        renderSectionTitle: renderSectionTitle,
	        renderInputComponent: this.renderInputComponent,
	        getSectionSuggestions: getSectionSuggestions,
	        inputProps: inputProps,
	        theme: _SearchBox2.default
	      });
	    }
	  }]);
	
	  return SearchBox;
	}(_react.Component);
	
	exports.default = SearchBox;

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  kind: 'Legal Topics',
	  title: 'Start-Ups',
	  programs: [{
	    title: 'Should I incorporate?',
	    href: '/legaltopics/incorporate'
	  }, {
	    title: 'Can I trademark?',
	    href: '/legaltopics/trademark'
	  }, {
	    title: 'Do I need to set up payroll?',
	    href: '/legaltopics/payroll'
	  }]
	}, {
	  kind: 'Legal Topics',
	  title: 'Real Estate',
	  programs: [{
	    title: 'Do I owe transfer tax? (CA only)',
	    href: '/legaltopics/transfertax'
	  }, {
	    title: 'Am I entitled to a refund of my security deposit?',
	    href: '/legaltopics/securitydeposit'
	  }]
	}, {
	  kind: 'Legal Forms',
	  title: 'Business Corporation',
	  programs: [{
	    title: 'CA - Professional Corporation',
	    href: '/legalforms/ca_professional_corporation'
	  }, {
	    title: 'CA - S-Corporation',
	    href: '/legalforms/ca_s_corporation'
	  }]
	}];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _AuthActions = __webpack_require__(7);
	
	var _reactRouter = __webpack_require__(3);
	
	// Initial State
	var initialState = { user: {}, state: 'NOT_LOGGED' };
	
	var AuthReducer = function AuthReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _AuthActions.SET_LOGIN_STATE:
	      var clientId = localStorage.getItem('clientId');
	      return _extends({}, state, {
	        state: clientId ? 'LOGGED' : 'NOT_LOGGED'
	      });
	
	    case _AuthActions.REGISTER_SUCCEEDED:
	      return _extends({}, state, {
	        user: action.user
	      });
	
	    case _AuthActions.REGISTER_FAILED:
	      return _extends({}, state, {
	        err: action.err
	      });
	
	    case _AuthActions.LOGIN_REQUESTED:
	      return _extends({}, state, {
	        state: 'LOGGING'
	      });
	
	    case _AuthActions.LOGIN_SUCCEEDED:
	      if (state.redirectUrl) {
	        _reactRouter.browserHistory.push(state.redirectUrl);
	      } else {
	        _reactRouter.browserHistory.push('/');
	      }
	
	      return _extends({}, state, {
	        user: action.user,
	        state: 'LOGGED'
	      });
	
	    case _AuthActions.LOGIN_FAILED:
	      return _extends({}, state, {
	        err: action.err,
	        state: 'NOT_LOGGED'
	      });
	
	    case _AuthActions.LOGOUT_SUCCEEDED:
	      return _extends({}, state, {
	        state: 'NOT_LOGGED'
	      });
	
	    case _AuthActions.FETCH_USER_PROFILE_SUCCEEDED:
	      return _extends({}, state, {
	        user: action.user
	      });
	
	    case _AuthActions.FETCH_USER_PROFILE_FAILED:
	      return _extends({}, state, {
	        err: action.err
	      });
	
	    case _AuthActions.SET_REDIRECT_URL:
	      return _extends({}, state, {
	        redirectUrl: action.url
	      });
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Export Reducer
	exports.default = AuthReducer;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.default = function (props) {
	  return _jsx('div', {
	    className: _Home2.default.footer
	  }, void 0, _jsx('div', {
	    className: 'container'
	  }, void 0, _jsx('div', {
	    className: 'row'
	  }, void 0, _jsx('div', {
	    className: 'col-sm-4 col-xs-12'
	  }, void 0, _jsx('div', {
	    className: _Home2.default['service-box']
	  }, void 0, _jsx('div', {
	    className: _Home2.default['service-icon']
	  }, void 0, _ref), _jsx('div', {
	    className: _Home2.default['service-title']
	  }, void 0, 'Legal Mavens'), _jsx('div', {
	    className: _Home2.default['service-text']
	  }, void 0, 'Our Mavens are specialized attorneys who can answer your specific legal questions and concerns.', _ref2, ' Have a question?', _ref3, _ref4, '.'))), _jsx('div', {
	    className: 'col-sm-4 col-xs-12'
	  }, void 0, _jsx('div', {
	    className: _Home2.default['service-box']
	  }, void 0, _jsx('div', {
	    className: _Home2.default['service-icon']
	  }, void 0, _ref5), _jsx('div', {
	    className: _Home2.default['service-title']
	  }, void 0, 'Transfer Tax Made Easy'), _jsx('div', {
	    className: _Home2.default['service-text']
	  }, void 0, 'Conducting a deed or entity transfer? Figure out whether your transaction qualifies for an exemption, or how much tax you may owe.', _ref6, _ref7, '.'))), _jsx('div', {
	    className: 'col-sm-4 col-xs-12'
	  }, void 0, _jsx('div', {
	    className: _Home2.default['service-box']
	  }, void 0, _jsx('div', {
	    className: _Home2.default['service-icon']
	  }, void 0, _ref8), _jsx('div', {
	    className: _Home2.default['service-title']
	  }, void 0, 'Start-Ups'), _jsx('div', {
	    className: _Home2.default['service-text']
	  }, void 0, 'Decide what type of entity is right for your business, obtain formation paperwork, and get answers to important legal questions relating to your business.', _ref9, _ref10, '.'))))));
	};
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _Home = {
	  "home": "_37C9HJPUzY52Ex490y87_h",
	  "footer": "_1wZ1wZ-UlievGrJUWIxiJC",
	  "service-box": "_2ndtVNYt2HqQlFrk9BLFgu",
	  "service-icon": "_3q81HjDZxpEDZMqsEU6ro5",
	  "service-title": "_1m7s6_1JUwdhD932tYX9L2",
	  "service-text": "_2snTPXEMvEN8i5jdi--HnB",
	  "main-container": "_1Sdl55TwHlDFxbirT1jrhV",
	  "title": "_1ldS0leZzeochsFHKEFPfg",
	  "description": "_2jMdm40vzBlPDfByr0SY8b",
	  "search-box-container": "Ejl1kMqO-LvUhHYFGs7JB",
	  "search-icon": "_2_lH2nFeY9x-twSVV928GR",
	  "search-box": "_2R7FQyRpoCE5m3JJfubYo4"
	};
	
	var _Home2 = _interopRequireDefault(_Home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import Components
	
	var _ref = _jsx('i', {
	  className: 'fa fa-graduation-cap',
	  'aria-hidden': 'true'
	});
	
	var _ref2 = _jsx('br', {});
	
	var _ref3 = _jsx('br', {});
	
	var _ref4 = _jsx('a', {}, void 0, 'Consult an expert now');
	
	var _ref5 = _jsx('i', {
	  className: 'fa fa-exchange',
	  'aria-hidden': 'true'
	});
	
	var _ref6 = _jsx('br', {});
	
	var _ref7 = _jsx('a', {}, void 0, 'Calculate now');
	
	var _ref8 = _jsx('i', {
	  className: 'fa fa-building-o',
	  'aria-hidden': 'true'
	});
	
	var _ref9 = _jsx('br', {});
	
	var _ref10 = _jsx('a', {}, void 0, 'Get started now');

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _setup = __webpack_require__(22);
	
	var _IntlActions = __webpack_require__(30);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var initLocale = global.navigator && global.navigator.language || 'en';
	
	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});
	
	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line
	
	
	        return _extends({}, state, actionWithoutType);
	      }
	
	    default:
	      return state;
	  }
	};
	
	exports.default = IntlReducer;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import styles
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = {
	  "container": "_5iRU_I4we4wbv6ebQxtj5",
	  "back-img": "_2kLCQf7HsSBAFBtzxGOKLx",
	  "overlay": "A_rjbMPrIsWHRRIzkASxN",
	  "title": "_1c9hzgXP9Aev1RKqJNeDVa",
	  "description": "_20axKCYWmp4z3ND-TfeePy",
	  "content": "_3F7928jhySHlcHRQGNnwqS",
	  "icon": "_3SefiI5jodzm4pEFv0ytZl"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _pageHeader = '/' + "1a253f680573ca56e225c1810ac1acc9.png";
	
	var _pageHeader2 = _interopRequireDefault(_pageHeader);
	
	var _clock = '/' + "7f0f3d848afe6cd21f6f6d7cf5b8a360.png";
	
	var _clock2 = _interopRequireDefault(_clock);
	
	var _check = '/' + "4b6bb790e3692f32753af4544e61d0df.png";
	
	var _check2 = _interopRequireDefault(_check);
	
	var _print = '/' + "8adf81db619e922c094f48051097d271.png";
	
	var _print2 = _interopRequireDefault(_print);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('div', {}, void 0, 'Quick and easy');
	
	var _ref2 = _jsx('div', {}, void 0, 'Reliable results');
	
	var _ref3 = _jsx('div', {}, void 0, 'Ready for print');
	
	function PageHeader(props) {
	  return _jsx('div', {
	    className: '' + _styles2.default.container
	  }, void 0, _jsx('img', {
	    className: _styles2.default['back-img'],
	    src: _pageHeader2.default
	  }), _jsx('div', {
	    className: _styles2.default.overlay
	  }, void 0, _jsx('div', {
	    className: 'container'
	  }, void 0, _jsx('div', {
	    className: _styles2.default.title + ' wow fadeInLeft',
	    'data-wow-delay': '0.3s',
	    'data-wow-duration': '0.6s'
	  }, void 0, 'Legal Forms'), _jsx('div', {
	    className: _styles2.default.description + ' wow fadeInRight',
	    'data-wow-delay': '0.5s',
	    'data-wow-duration': '0.6s'
	  }, void 0, 'Welcome to the quick and simple solution to legal forms.'), _jsx('div', {
	    className: 'row ' + _styles2.default.content + ' wow',
	    'data-wow-delay': '1.6s'
	  }, void 0, _jsx('div', {
	    className: 'col-xs-4 wow flipInX',
	    'data-wow-delay': '1.4s'
	  }, void 0, _jsx('img', {
	    className: _styles2.default.icon,
	    src: _clock2.default
	  }), _ref), _jsx('div', {
	    className: 'col-xs-4 wow flipInX',
	    'data-wow-delay': '1.6s'
	  }, void 0, _jsx('img', {
	    className: _styles2.default.icon,
	    src: _check2.default
	  }), _ref2), _jsx('div', {
	    className: 'col-xs-4 wow flipInX',
	    'data-wow-delay': '1.8s'
	  }, void 0, _jsx('img', {
	    className: _styles2.default.icon,
	    src: _print2.default
	  }), _ref3)))));
	}
	
	exports.default = PageHeader;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import styles
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = {
	  "container": "_2zlYzQBqHArJQn9XAItkrT",
	  "back-img": "_3oR2YVsCFxmHem9CCyvfxC",
	  "overlay": "_1oNzh4EmeNC3caxmmMXVpg",
	  "title": "_3N4NU10iFGM5-r9tIT15id",
	  "description": "_1fOLQ9a_7Yu5ko7MAV_V2-",
	  "content": "_380N1xmKPZIGFMZkExmjTL",
	  "icon": "_3XSZI9JgsZVgoSeufGh-21"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _pageHeader = '/' + "1a253f680573ca56e225c1810ac1acc9.png";
	
	var _pageHeader2 = _interopRequireDefault(_pageHeader);
	
	var _clock = '/' + "7f0f3d848afe6cd21f6f6d7cf5b8a360.png";
	
	var _clock2 = _interopRequireDefault(_clock);
	
	var _check = '/' + "4b6bb790e3692f32753af4544e61d0df.png";
	
	var _check2 = _interopRequireDefault(_check);
	
	var _free = '/' + "04db471a700cd21729c30459321354e9.png";
	
	var _free2 = _interopRequireDefault(_free);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('div', {}, void 0, 'Free to use');
	
	var _ref2 = _jsx('div', {}, void 0, 'Quick and easy');
	
	var _ref3 = _jsx('div', {}, void 0, 'Reliable results');
	
	function PageHeader(props) {
	  return _jsx('div', {
	    className: _styles2.default.container
	  }, void 0, _jsx('img', {
	    className: _styles2.default['back-img'],
	    src: _pageHeader2.default
	  }), _jsx('div', {
	    className: _styles2.default.overlay
	  }, void 0, _jsx('div', {
	    className: 'container'
	  }, void 0, _jsx('div', {
	    className: _styles2.default.title + ' wow fadeInLeft',
	    'data-wow-delay': '0.3s',
	    'data-wow-duration': '0.6s'
	  }, void 0, 'Legal Topics'), _jsx('div', {
	    className: _styles2.default.description + ' wow fadeInRight',
	    'data-wow-delay': '0.5s',
	    'data-wow-duration': '0.6s'
	  }, void 0, 'Our Mavens are here to help! Scroll below to get started.'), _jsx('div', {
	    className: 'row ' + _styles2.default.content + ' wow',
	    'data-wow-delay': '1.6s'
	  }, void 0, _jsx('div', {
	    className: 'col-xs-4 wow flipInX',
	    'data-wow-delay': '1.4s'
	  }, void 0, _jsx('img', {
	    className: _styles2.default.icon,
	    src: _free2.default
	  }), _ref), _jsx('div', {
	    className: 'col-xs-4 wow flipInX',
	    'data-wow-delay': '1.6s'
	  }, void 0, _jsx('img', {
	    className: _styles2.default.icon,
	    src: _clock2.default
	  }), _ref2), _jsx('div', {
	    className: 'col-xs-4 wow flipInX',
	    'data-wow-delay': '1.8s'
	  }, void 0, _jsx('img', {
	    className: _styles2.default.icon,
	    src: _check2.default
	  }), _ref3)))));
	}
	
	exports.default = PageHeader;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
	exports.addPost = addPost;
	exports.addPostRequest = addPostRequest;
	exports.addPosts = addPosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;
	
	var _apiCaller = __webpack_require__(16);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_POST = exports.ADD_POST = 'ADD_POST';
	var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';
	
	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}
	
	function addPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        name: post.name,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function addPosts(posts) {
	  return {
	    type: ADD_POSTS,
	    posts: posts
	  };
	}
	
	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts').then(function (res) {
	      dispatch(addPosts(res.posts));
	    });
	  };
	}
	
	function fetchPost(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}
	
	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;
	
	var _PostActions = __webpack_require__(83);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = { data: [] };
	
	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PostActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };
	
	    case _PostActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };
	
	    case _PostActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.posts.data;
	};
	
	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.posts.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};
	
	// Export Reducer
	exports.default = PostReducer;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactBootstrap = __webpack_require__(12);
	
	var _styles = {
	  "modal-content": "_2Ch1F0uydig688T1oL6NZK",
	  "modal-header": "_20IKjmqQlwrXm5BsXI-47D",
	  "modal-body": "C3-eaK9V8I7L4ifhHQDRi",
	  "form-group": "_2pBBaFg6H2mxa4L9j-HcYa",
	  "modal-footer": "_1kZV6Ymgso-RtVtpKl55gY"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import styles
	
	
	// Import Components
	
	// Import Actions
	
	// Import Assets
	
	var _ref = _jsx(_reactBootstrap.Modal.Title, {}, void 0, 'Contact Us');
	
	var _ref2 = _jsx('label', {
	  htmlFor: 'email'
	}, void 0, 'Your Email address :');
	
	var _ref3 = _jsx('span', {
	  className: 'input-group-addon'
	}, void 0, _jsx('i', {
	  className: 'glyphicon glyphicon-envelope'
	}));
	
	var _ref4 = _jsx('br', {});
	
	var _ref5 = _jsx('label', {
	  htmlFor: 'email'
	}, void 0, 'Your Phone Number :');
	
	var _ref6 = _jsx('span', {
	  className: 'input-group-addon'
	}, void 0, _jsx('i', {
	  className: 'glyphicon glyphicon-earphone'
	}));
	
	var _ref7 = _jsx('br', {});
	
	var _ref8 = _jsx('label', {
	  htmlFor: 'email'
	}, void 0, 'Message :');
	
	var _ref9 = _jsx('span', {
	  className: 'input-group-addon'
	}, void 0, _jsx('i', {
	  className: 'glyphicon glyphicon-pencil'
	}));
	
	var _ref10 = _jsx('br', {});
	
	var _ref11 = _jsx('div', {
	  className: 'form-group'
	}, void 0, _jsx('div', {
	  className: 'col-md-12'
	}, void 0, _jsx('button', {
	  type: 'submit',
	  className: 'btn btn-info pull-right'
	}, void 0, 'Send ', _jsx('span', {
	  className: 'glyphicon glyphicon-send'
	}))));
	
	var ContactDialog = function (_Component) {
	  _inherits(ContactDialog, _Component);
	
	  function ContactDialog(props) {
	    _classCallCheck(this, ContactDialog);
	
	    var _this = _possibleConstructorReturn(this, (ContactDialog.__proto__ || Object.getPrototypeOf(ContactDialog)).call(this, props));
	
	    _this.state = {
	      email: '',
	      phone: '',
	      message: ''
	    };
	    return _this;
	  }
	
	  _createClass(ContactDialog, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      var target = e.target;
	      var value = target.type === 'checkbox' ? target.checked : target.value;
	      var name = target.name;
	
	      this.setState(_defineProperty({}, name, value));
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(e) {
	      e.preventDefault();
	      alert('onSubmit');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx(_reactBootstrap.Modal, {
	        show: this.props.show,
	        onHide: this.props.close
	      }, void 0, _jsx(_reactBootstrap.Modal.Header, {
	        bsClass: _styles2.default['modal-header'],
	        closeButton: true
	      }, void 0, _ref), _jsx(_reactBootstrap.Modal.Body, {
	        bsClass: _styles2.default['modal-body']
	      }, void 0, _jsx('div', {
	        className: 'container-fluid'
	      }, void 0, _jsx('div', {
	        className: ''
	      }, void 0, _jsx('form', {
	        className: 'form',
	        onSubmit: this.onSubmit.bind(this)
	      }, void 0, _jsx('div', {
	        className: 'form-group'
	      }, void 0, _jsx('div', {
	        className: 'col-md-12'
	      }, void 0, _ref2, _jsx('div', {
	        className: 'input-group'
	      }, void 0, _ref3, _jsx('input', {
	        name: 'email',
	        placeholder: 'Email Address',
	        className: 'form-control',
	        type: 'text',
	        required: true,
	        value: this.state.email,
	        onChange: this.onChange.bind(this)
	      })), _ref4)), _jsx('div', {
	        className: 'form-group'
	      }, void 0, _jsx('div', {
	        className: 'col-md-12'
	      }, void 0, _ref5, _jsx('div', {
	        className: 'input-group'
	      }, void 0, _ref6, _jsx('input', {
	        name: 'phone',
	        placeholder: '(000)000-000000',
	        className: 'form-control',
	        type: 'text',
	        required: true,
	        value: this.state.phone,
	        onChange: this.onChange.bind(this)
	      })), _ref7)), _jsx('div', {
	        className: 'form-group'
	      }, void 0, _jsx('div', {
	        className: 'col-md-12 inputGroupContainer'
	      }, void 0, _ref8, _jsx('div', {
	        className: 'input-group'
	      }, void 0, _ref9, _jsx('textarea', {
	        className: 'form-control',
	        name: 'message',
	        placeholder: 'Message',
	        rows: '4',
	        cols: '50',
	        required: true,
	        value: this.state.message,
	        onChange: this.onChange.bind(this)
	      }, void 0)), _ref10)), _ref11)))), _jsx(_reactBootstrap.Modal.Footer, {
	        bsClass: _styles2.default['modal-footer']
	      }, void 0));
	    }
	  }]);
	
	  return ContactDialog;
	}(_react.Component);
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ContactDialog);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	exports.default = Form;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = {
	  "container": "_1CtFM9-WzUC60EfHEIcEyv",
	  "header": "_3f7I9xLQkmPpKrlD3aa9zV",
	  "head": "WVziBuyG_sRCEShC-TfUQ",
	  "title": "_2BT8rd2TxedmnGmroJK6vz",
	  "content": "yLqaYKwwKklKiQ5YxRzhr",
	  "info": "vgM5fwZVbuu45RM5bbg5w",
	  "info-title": "_1s_GZrUqxg8S6qm8dzpaoF",
	  "info-content": "_1cQGBnTJnuSGznLGpOt6SD",
	  "footer": "qdnLC2K40mGKgCSgceqcm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('br', {});
	
	var _ref2 = _jsx('br', {});
	
	var _ref3 = _jsx('br', {});
	
	var _ref4 = _jsx('li', {}, void 0, 'The  purpose  of  the  corporation  is  to  engage  in  any  lawful  act  or  activity  for which a corporation may be organized under the  General Corporation Law of California other than the  banking  business, the trust company  business or the practice  of  a  profession  permitted  to  be  incorporated  by  the  California Corporations Code.');
	
	var _ref5 = _jsx('br', {});
	
	var _ref6 = _jsx('br', {});
	
	var _ref7 = _jsx('li', {}, void 0, 'The corporation is authorized to indemnify, to the fullest extent permissible under California law (as it may be amended from time to time), any person who at any time acts in the capacity of, or serves as, a director or officer of the corporation.');
	
	var _ref8 = _jsx('li', {}, void 0, 'The liability of the directors of the corporation for monetary damages shall be eliminated to the fullest extent permissible under California law, as it may be amended from time to time.');
	
	var _ref9 = _jsx('br', {});
	
	function Form(props) {
	  var info = props.data.info;
	
	  return _jsx('div', {
	    className: _styles2.default.container
	  }, void 0, _jsx('div', {
	    className: _styles2.default.header
	  }, void 0, _jsx('div', {
	    className: _styles2.default.head
	  }, void 0, 'CA Form Articles of Incorporation 1'), _jsx('h2', {
	    className: _styles2.default.title
	  }, void 0, 'STATE OF CALIFORNIA', _ref, 'ARTICLES OF INCORPORATION')), _jsx('div', {
	    className: _styles2.default.content
	  }, void 0, _jsx('ol', {}, void 0, _jsx('li', {}, void 0, 'The name of the corporation is ', info.company_name, '.'), _jsx('li', {}, void 0, 'The address in the State of California of the corporation is:', _ref2, _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Address :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.company_address_city, ' ', info.company_address_street, ' ', _ref3, info.company_address_state, ', ', info.company_address_zipcode))), _ref4, _jsx('li', {}, void 0, 'The name and address in the State of California of the corporation\u2019s agent for service of process is:', _ref5, _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Name :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.registered_agent_name, ' ')), _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Address :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.registered_agent_address_city, ' ', info.registered_agent_address_street, _ref6, info.registered_agent_address_state, ', ', info.registered_agent_address_zipcode))), _jsx('li', {}, void 0, 'The corporation is authorized to issue only one class of shares of stock; and the total number of shares that the corporation is authorized to issue is ', info.number_of_shares, '.'), _ref7, _ref8)), _jsx('div', {
	    className: _styles2.default.footer
	  }, void 0, _jsx('span', {
	    className: _styles2.default.info + ' col-xs-5'
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Dated :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, '_____________, ', new Date().getFullYear())), _jsx('div', {
	    className: 'col-xs-7',
	    style: { textAlign: 'right' }
	  }, void 0, _jsx('span', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, '________________'), _ref9, _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.incorporator_name_firstname + ' ' + info.incorporator_name_lastname, ' , Incorporator')))));
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	exports.default = Form;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = {
	  "container": "_1CtFM9-WzUC60EfHEIcEyv",
	  "header": "_3f7I9xLQkmPpKrlD3aa9zV",
	  "head": "WVziBuyG_sRCEShC-TfUQ",
	  "title": "_2BT8rd2TxedmnGmroJK6vz",
	  "content": "yLqaYKwwKklKiQ5YxRzhr",
	  "info": "vgM5fwZVbuu45RM5bbg5w",
	  "info-title": "_1s_GZrUqxg8S6qm8dzpaoF",
	  "info-content": "_1cQGBnTJnuSGznLGpOt6SD",
	  "footer": "qdnLC2K40mGKgCSgceqcm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('br', {});
	
	var _ref2 = _jsx('br', {});
	
	var _ref3 = _jsx('br', {});
	
	var _ref4 = _jsx('li', {}, void 0, 'The  purpose  of  the  corporation  is  to  engage  in  any  lawful  act  or  activity  for which a corporation may be organized under the General Corporation Law of California other than the  banking  business, the trust company  business or the practice  of  a  profession  permitted  to  be  incorporated  by  the  California Corporations Code.');
	
	var _ref5 = _jsx('br', {});
	
	var _ref6 = _jsx('li', {}, void 0, 'The corporation is authorized to indemnify, to the fullest extent permissible under California law (as it may be amended from time to time), any person who at any time acts in the capacity of, or serves as, a director or officer of the corporation.');
	
	var _ref7 = _jsx('li', {}, void 0, 'The liability of the directors of the corporation for monetary damages shall be eliminated to the fullest extent permissible under California law, as it may be amended from time to time.');
	
	var _ref8 = _jsx('br', {});
	
	var _ref9 = _jsx('br', {});
	
	function Form(props) {
	  var info = props.data.info;
	
	  return _jsx('div', {
	    className: _styles2.default.container
	  }, void 0, _jsx('div', {
	    className: _styles2.default.header
	  }, void 0, _jsx('div', {
	    className: _styles2.default.head
	  }, void 0, 'CA Form Articles of Incorporation 2'), _jsx('h2', {
	    className: _styles2.default.title
	  }, void 0, 'STATE OF CALIFORNIA', _ref, 'ARTICLES OF INCORPORATION')), _jsx('div', {
	    className: _styles2.default.content
	  }, void 0, _jsx('ol', {}, void 0, _jsx('li', {}, void 0, 'The name of the corporation is ', info.company_name, '.'), _jsx('li', {}, void 0, 'The address in the State of California of the corporation is:', _ref2, _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Address :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.company_address_city, ' ', info.company_address_street, _ref3, info.company_address_state, ', ', info.company_address_zipcode))), _ref4, _jsx('li', {}, void 0, 'The name of the corporation\u2019s agent for service of process is:', _ref5, _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Name :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.registered_agent_name, ' '))), _jsx('li', {}, void 0, 'The corporation is authorized to issue only one class of shares of stock; and the total number of shares that the corporation is authorized to issue is ', info.number_of_shares, '.'), _ref6, _ref7)), _jsx('div', {
	    className: _styles2.default.footer
	  }, void 0, _jsx('span', {
	    className: _styles2.default.info + ' col-xs-5'
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Dated :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, '_____________, ', new Date().getFullYear())), _jsx('div', {
	    className: 'col-xs-7',
	    style: { textAlign: 'right' }
	  }, void 0, _jsx('span', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, '________________'), _ref8, _ref9, _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.incorporator_name_firstname + ' ' + info.incorporator_name_lastname, ' , Incorporator')))));
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	exports.default = Form;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = {
	  "container": "_1CtFM9-WzUC60EfHEIcEyv",
	  "header": "_3f7I9xLQkmPpKrlD3aa9zV",
	  "head": "WVziBuyG_sRCEShC-TfUQ",
	  "title": "_2BT8rd2TxedmnGmroJK6vz",
	  "content": "yLqaYKwwKklKiQ5YxRzhr",
	  "info": "vgM5fwZVbuu45RM5bbg5w",
	  "info-title": "_1s_GZrUqxg8S6qm8dzpaoF",
	  "info-content": "_1cQGBnTJnuSGznLGpOt6SD",
	  "footer": "qdnLC2K40mGKgCSgceqcm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('br', {});
	
	var _ref2 = _jsx('br', {});
	
	var _ref3 = _jsx('br', {});
	
	var _ref4 = _jsx('br', {});
	
	var _ref5 = _jsx('br', {});
	
	var _ref6 = _jsx('li', {}, void 0, 'The corporation is authorized to indemnify, to the fullest extent permissible under California law (as it may be amended from time to time), any person who at any time acts in the capacity of, or serves as, a director or officer of the corporation.');
	
	var _ref7 = _jsx('li', {}, void 0, 'The liability of the directors of the corporation for monetary damages shall be eliminated to the fullest extent permissible under California law, as it may be amended from time to time.');
	
	var _ref8 = _jsx('br', {});
	
	function Form(props) {
	  var info = props.data.info;
	
	  return _jsx('div', {
	    className: _styles2.default.container
	  }, void 0, _jsx('div', {
	    className: _styles2.default.header
	  }, void 0, _jsx('div', {
	    className: _styles2.default.head
	  }, void 0, 'CA Form Articles of Professional Incorporation 1'), _jsx('h2', {
	    className: _styles2.default.title
	  }, void 0, 'STATE OF CALIFORNIA', _ref, 'ARTICLES OF INCORPORATION')), _jsx('div', {
	    className: _styles2.default.content
	  }, void 0, _jsx('ol', {}, void 0, _jsx('li', {}, void 0, 'The name of the corporation is ', info.company_name, '.'), _jsx('li', {}, void 0, 'The address in the State of California of the corporation is:', _ref2, _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Address :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.company_address_city, ' ', info.company_address_street, ' ', _ref3, info.company_address_state, ', ', info.company_address_zipcode))), _jsx('li', {}, void 0, 'The corporation is a professional corporation within the meaning of California Corporations Code section 13400 et seq. The purpose of the corporation is to engage in the profession of ', info.company_profession, ' and any other lawful activities (other than the banking or trust company business) not prohibited to a corporation engaging in such profession by applicable laws and regulations of California.'), _jsx('li', {}, void 0, 'The name and address in the State of California of the corporation\u2019s agent for service of process is:', _ref4, _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Name :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.registered_agent_name, ' ')), _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Address :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.registered_agent_address_city, ' ', info.registered_agent_address_street, _ref5, info.registered_agent_address_state, ', ', info.registered_agent_address_zipcode))), _jsx('li', {}, void 0, 'The corporation is authorized to issue only one class of shares of stock; and the total number of shares that the corporation is authorized to issue is ', info.number_of_shares, '.'), _ref6, _ref7)), _jsx('div', {
	    className: _styles2.default.footer
	  }, void 0, _jsx('span', {
	    className: _styles2.default.info + ' col-xs-5'
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Dated :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, '_____________, ', new Date().getFullYear())), _jsx('div', {
	    className: 'col-xs-7',
	    style: { textAlign: 'right' }
	  }, void 0, _jsx('span', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, '________________'), _ref8, _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.incorporator_name_firstname + ' ' + info.incorporator_name_lastname, ' , Incorporator')))));
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	exports.default = Form;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = {
	  "container": "_1CtFM9-WzUC60EfHEIcEyv",
	  "header": "_3f7I9xLQkmPpKrlD3aa9zV",
	  "head": "WVziBuyG_sRCEShC-TfUQ",
	  "title": "_2BT8rd2TxedmnGmroJK6vz",
	  "content": "yLqaYKwwKklKiQ5YxRzhr",
	  "info": "vgM5fwZVbuu45RM5bbg5w",
	  "info-title": "_1s_GZrUqxg8S6qm8dzpaoF",
	  "info-content": "_1cQGBnTJnuSGznLGpOt6SD",
	  "footer": "qdnLC2K40mGKgCSgceqcm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('br', {});
	
	var _ref2 = _jsx('br', {});
	
	var _ref3 = _jsx('br', {});
	
	var _ref4 = _jsx('br', {});
	
	var _ref5 = _jsx('li', {}, void 0, 'The corporation is authorized to indemnify, to the fullest extent permissible under California law (as it may be amended from time to time), any person who at any time acts in the capacity of, or serves as, a director or officer of the corporation.');
	
	var _ref6 = _jsx('li', {}, void 0, 'The liability of the directors of the corporation for monetary damages shall be eliminated to the fullest extent permissible under California law, as it may be amended from time to time.');
	
	var _ref7 = _jsx('br', {});
	
	var _ref8 = _jsx('br', {});
	
	function Form(props) {
	  var info = props.data.info;
	
	  return _jsx('div', {
	    className: _styles2.default.container
	  }, void 0, _jsx('div', {
	    className: _styles2.default.header
	  }, void 0, _jsx('div', {
	    className: _styles2.default.head
	  }, void 0, 'CA Form Articles of Professional Incorporation 2'), _jsx('h2', {
	    className: _styles2.default.title
	  }, void 0, 'STATE OF CALIFORNIA', _ref, 'ARTICLES OF INCORPORATION')), _jsx('div', {
	    className: _styles2.default.content
	  }, void 0, _jsx('ol', {}, void 0, _jsx('li', {}, void 0, 'The name of the corporation is ', info.company_name, '.'), _jsx('li', {}, void 0, 'The address in the State of California of the corporation is:', _ref2, _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Address :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.company_address_city, ' ', info.company_address_street, _ref3, info.company_address_state, ', ', info.company_address_zipcode))), _jsx('li', {}, void 0, 'The corporation is a professional corporation within the meaning of California Corporations Code section 13400 et seq. The purpose of the corporation is to engage in the profession of ', info.company_profession, ' and any other lawful activities (other than the banking or trust company business) not prohibited to a corporation engaging in such profession by applicable laws and regulations of California.'), _jsx('li', {}, void 0, 'The name of the corporation\u2019s agent for service of process is:', _ref4, _jsx('div', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Name :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.registered_agent_name, ' '))), _jsx('li', {}, void 0, 'The corporation is authorized to issue only one class of shares of stock; and the total number of shares that the corporation is authorized to issue is ', info.number_of_shares, '.'), _ref5, _ref6)), _jsx('div', {
	    className: _styles2.default.footer
	  }, void 0, _jsx('span', {
	    className: _styles2.default.info + ' col-xs-5'
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-title']
	  }, void 0, 'Dated :'), _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, '_____________, ', new Date().getFullYear())), _jsx('div', {
	    className: 'col-xs-7',
	    style: { textAlign: 'right' }
	  }, void 0, _jsx('span', {
	    className: _styles2.default.info
	  }, void 0, _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, '________________'), _ref7, _ref8, _jsx('span', {
	    className: _styles2.default['info-content']
	  }, void 0, ' ', info.incorporator_name_firstname + ' ' + info.incorporator_name_lastname, ' , Incorporator')))));
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactBootstrap = __webpack_require__(12);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _CAFormProfessionalIncorporate = __webpack_require__(89);
	
	var _CAFormProfessionalIncorporate2 = _interopRequireDefault(_CAFormProfessionalIncorporate);
	
	var _CAFormProfessionalIncorporate3 = __webpack_require__(88);
	
	var _CAFormProfessionalIncorporate4 = _interopRequireDefault(_CAFormProfessionalIncorporate3);
	
	var _CAFormIncorporate = __webpack_require__(87);
	
	var _CAFormIncorporate2 = _interopRequireDefault(_CAFormIncorporate);
	
	var _CAFormIncorporate3 = __webpack_require__(86);
	
	var _CAFormIncorporate4 = _interopRequireDefault(_CAFormIncorporate3);
	
	var _styles = {
	  "container": "_1CtFM9-WzUC60EfHEIcEyv",
	  "header": "_3f7I9xLQkmPpKrlD3aa9zV",
	  "head": "WVziBuyG_sRCEShC-TfUQ",
	  "title": "_2BT8rd2TxedmnGmroJK6vz",
	  "content": "yLqaYKwwKklKiQ5YxRzhr",
	  "info": "vgM5fwZVbuu45RM5bbg5w",
	  "info-title": "_1s_GZrUqxg8S6qm8dzpaoF",
	  "info-content": "_1cQGBnTJnuSGznLGpOt6SD",
	  "footer": "qdnLC2K40mGKgCSgceqcm"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var DocumentDialog = function (_React$Component) {
	  _inherits(DocumentDialog, _React$Component);
	
	  function DocumentDialog(props) {
	    _classCallCheck(this, DocumentDialog);
	
	    return _possibleConstructorReturn(this, (DocumentDialog.__proto__ || Object.getPrototypeOf(DocumentDialog)).call(this, props));
	  }
	
	  _createClass(DocumentDialog, [{
	    key: 'render',
	    value: function render() {
	      return _jsx(_reactBootstrap.Modal, {
	        show: this.props.show,
	        onHide: this.props.close
	      }, void 0, this.props.data.form === 'ca_form_articles_of_professional_incorporation_1' && _jsx(_CAFormProfessionalIncorporate4.default, {
	        data: this.props.data
	      }), this.props.data.form === 'ca_form_articles_of_professional_incorporation_2' && _jsx(_CAFormProfessionalIncorporate2.default, {
	        data: this.props.data
	      }), this.props.data.form === 'ca_form_articles_of_incorporation_1' && _jsx(_CAFormIncorporate4.default, {
	        data: this.props.data
	      }), this.props.data.form === 'ca_form_articles_of_incorporation_2' && _jsx(_CAFormIncorporate2.default, {
	        data: this.props.data
	      }));
	    }
	  }]);
	
	  return DocumentDialog;
	}(_react2.default.Component);
	
	exports.default = DocumentDialog;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Cover = __webpack_require__(23);
	
	var _Cover2 = _interopRequireDefault(_Cover);
	
	var _styles = {
	  "container": "_2x8Eq0R2ikT8f8rnWljSjP",
	  "header": "_2Ibx-NRXYtJItXCW0fzm6h",
	  "content": "_1zX_bTvwrgbcfF1zpQq0-k",
	  "message": "_2swgDOmd8HX7P88A52r0Sr",
	  "actions": "_3kBJfmBAWPMt0PKceyFjtT",
	  "footer": "_3FT59L6-78vno8Fd5_7Ueo",
	  "button": "_4ISAoRGErobM-9FkbnZjd"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _actions = __webpack_require__(8);
	
	var _Document = __webpack_require__(90);
	
	var _Document2 = _interopRequireDefault(_Document);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import styles
	
	
	// Import Actions
	
	
	// Import components
	
	
	var btnStyle = {
	  backgroundColor: 'white',
	  color: '#02b2fb',
	  fontSize: '17rem',
	  fontWeight: 400,
	  margin: '0rem 10rem',
	  padding: '7rem 18rem'
	};
	
	var _ref = _jsx('i', {
	  className: 'fa fa-check-circle',
	  'aria-hidden': 'true'
	});
	
	var _ref2 = _jsx(_Cover2.default, {
	  title: 'EDIT',
	  icon: 'fa-pencil',
	  description: 'Make changes to document'
	});
	
	var _ref3 = _jsx(_Cover2.default, {
	  title: 'SAVE',
	  icon: 'fa-save',
	  description: 'Save document to profile'
	});
	
	var _ref4 = _jsx('i', {
	  className: 'fa fa-download',
	  'aria-hidden': 'true'
	}, void 0, '\xA0\xA0');
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form(props) {
	    _classCallCheck(this, Form);
	
	    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
	
	    _this.state = {
	      showDocument: false
	    };
	    return _this;
	  }
	
	  _createClass(Form, [{
	    key: 'onView',
	    value: function onView() {
	      //if (props.data.form === 'ca_form_articles_of_professional_incorporation_1')
	      // props.dispatch(setFinalNode(props.data.form, props.data));
	      this.setState({ showDocument: true });
	    }
	  }, {
	    key: 'onHideDocument',
	    value: function onHideDocument() {
	      this.setState({ showDocument: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _jsx('div', {
	        className: _styles2.default.container + ' wow fadeIn'
	      }, void 0, _jsx('div', {
	        className: _styles2.default.header
	      }, void 0, 'Congratulations !'), _jsx('div', {
	        className: _styles2.default.content
	      }, void 0, _jsx('span', {
	        className: _styles2.default.message
	      }, void 0, _ref, '\xA0\xA0Your document is ready to go!'), _jsx('div', {
	        className: _styles2.default['actions']
	      }, void 0, _jsx(_Cover2.default, {
	        title: 'VIEW',
	        icon: 'fa-eye',
	        description: 'Review your document',
	        onClick: function onClick(e) {
	          return _this2.onView();
	        }
	      }), _ref2, _ref3)), _jsx('div', {
	        className: _styles2.default.footer
	      }, void 0, _jsx('div', {
	        className: _styles2.default.button
	      }, void 0, _ref4, 'CHECKOUT TO DOWNLOAD')), _jsx(_Document2.default, {
	        show: this.state.showDocument,
	        close: this.onHideDocument.bind(this),
	        data: this.props.data
	      }));
	    }
	  }]);
	
	  return Form;
	}(_react.Component);
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {};
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Form);

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Document = __webpack_require__(13);
	
	var _Document2 = _interopRequireDefault(_Document);
	
	var _Dialog = __webpack_require__(34);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _actions = __webpack_require__(8);
	
	var _styles = {
	  "container": "_1cfTN_KLvWaMKwWF5x_IdX",
	  "title": "jwmbI_Fh0D47znB5QS7WH",
	  "message": "_1u41KGh9-5gYM4lLE5AAip",
	  "footer": "_18H2Us9qbgxdhALAFH0up9",
	  "text": "_3Vr0szzy1r478kZa_E2d2T",
	  "btn-container": "_2Y7IRbgov9Q1gbz8fWFGLB",
	  "input": "aB7cqZkM_qciSVMyaCn9Z",
	  "input-container": "_2HwvKAwiIEy97_Zg-jJ_PQ"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*import React, { Component } from 'react';
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               import PropTypes from 'prop-types';
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               import Button from '../../../../../components/Button/Button';
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               // Import styles
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               import styles from './styles.css';
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               const btnStyle = {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 backgroundColor: 'white',
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 color: '#02b2fb',
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 fontSize: '17rem',
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 fontWeight: 400,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 margin: '0rem 10rem',
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 padding: '7rem 18rem'
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               class CalculateTax extends Component {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 constructor(props) {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   super(props);
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   this.state = {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     price: 0,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     tax: 0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 onPrice(e) {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   const price = e.target.value;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   var tax = price;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   var taxRate = 0.0;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   if (this.props.county === 'San Francisco') {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     if (price > 100 && price <= 250000) {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       taxRate = 2.50;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     } else if (price > 250000 && price <= 1000000) {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       taxRate = 3.40;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     } else if (price > 1000000 && price <= 5000000) {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       taxRate = 3.75;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     } else if (price > 5000000 && price <= 10000000) {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       taxRate = 11.25;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     } else if (price > 10000000 && price <= 25000000) {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       taxRate = 13.75;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     } else if (price > 25000000) {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       taxRate = 15.00;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   } else {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     taxRate = this.props.taxRate ? this.props.taxRate : 0;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   tax = Math.ceil(tax / 500) * taxRate;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   this.setState({ price, tax });
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 render() {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   return (
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <div className={ `${styles.container} wow fadeIn`}>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <h1 className={ styles.title }>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Calculation
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </h1>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <div className={ styles['input-container'] }>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Purchase Price :
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <input type="number" className={`${styles.input}`} name="price" min="0.00" value={ this.state.price } placeholder="Enter Purchase Price" onChange={this.onPrice.bind(this)} />
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <br />
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Calcuated Tax:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <input type="text" className={`${styles.input}`} placeholder="" value={ this.state.tax } readOnly/>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </div>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <div className={ styles.footer }>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <span className={ styles['text'] }>Was this helpful?</span>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <div className={ styles['btn-container'] }>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <Button title="Yes" style={ btnStyle } />
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <Button title="Need Help" style={ btnStyle } />
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </div>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </div>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     </div>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   );
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               CalculateTax.propTypes = {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 title: PropTypes.string,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 message: PropTypes.string
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               };
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               export default CalculateTax;*/
	
	// Import Actions
	
	
	// Import styles
	
	
	var btnStyle = {
	  backgroundColor: 'white',
	  color: '#02b2fb',
	  fontSize: '17rem',
	  fontWeight: 400,
	  margin: '0rem 10rem',
	  padding: '7rem 18rem'
	};
	
	var _ref = _jsx('br', {});
	
	var _ref2 = _jsx(_Button2.default, {
	  title: 'Need Help',
	  style: btnStyle
	});
	
	var Topic = function (_Component) {
	  _inherits(Topic, _Component);
	
	  function Topic(props) {
	    _classCallCheck(this, Topic);
	
	    var _this = _possibleConstructorReturn(this, (Topic.__proto__ || Object.getPrototypeOf(Topic)).call(this, props));
	
	    _this.state = {
	      showDialog: false,
	      price: 0,
	      countyTax: 0,
	      cityTax: 0
	    };
	    return _this;
	  }
	
	  _createClass(Topic, [{
	    key: 'onCloseDialog',
	    value: function onCloseDialog() {
	      this.setState({ showDialog: false });
	    }
	  }, {
	    key: 'onShowDialog',
	    value: function onShowDialog() {
	      this.setState({ showDialog: true });
	    }
	  }, {
	    key: 'onBack',
	    value: function onBack() {
	      this.props.back();
	    }
	  }, {
	    key: 'calcCountyTax',
	    value: function calcCountyTax(price) {
	      var taxRate = 0.0;
	      var _props$calcTaxInfo = this.props.calcTaxInfo,
	          county = _props$calcTaxInfo.county,
	          city = _props$calcTaxInfo.city,
	          countyTaxRate = _props$calcTaxInfo.countyTaxRate;
	
	
	      if (county === 'San Francisco') {
	        if (price > 100 && price <= 250000) {
	          taxRate = 2.50;
	        } else if (price > 250000 && price <= 1000000) {
	          taxRate = 3.40;
	        } else if (price > 1000000 && price <= 5000000) {
	          taxRate = 3.75;
	        } else if (price > 5000000 && price <= 10000000) {
	          taxRate = 11.25;
	        } else if (price > 10000000 && price <= 25000000) {
	          taxRate = 13.75;
	        } else if (price > 25000000) {
	          taxRate = 15.00;
	        }
	      } else {
	        taxRate = countyTaxRate ? countyTaxRate : 0;
	      }
	      return Math.ceil(price / 500) * taxRate;
	    }
	  }, {
	    key: 'calcCityTax',
	    value: function calcCityTax(price) {
	      var taxRate = this.props.calcTaxInfo.cityTaxRate ? this.props.calcTaxInfo.cityTaxRate : 0;
	      return Math.ceil(price / 500) * taxRate;
	    }
	  }, {
	    key: 'onPrice',
	    value: function onPrice(e) {
	      var price = e.target.value;
	
	      this.setState({
	        price: price,
	        countyTax: this.calcCountyTax(price),
	        cityTax: this.calcCityTax(price)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          title = _props.title,
	          message = _props.message,
	          to = _props.to,
	          toForm = _props.toForm;
	
	      var toTitle = '';
	      var toDescription = '';
	
	      if (to === 'Corp') {
	        toTitle = 'Articles of Professional Incorporation';
	        toDescription = "Let's begin the professional incorporation process.";
	      } else if (to === 'S-Corp') {
	        toTitle = 'Articles of Incorporation';
	        toDescription = "Let's begin the incorporation process.";
	      }
	
	      return _jsx('div', {
	        className: _styles2.default.container + ' wow fadeIn'
	      }, void 0, _jsx('h1', {
	        className: _styles2.default.title
	      }, void 0, 'Tax Calculation'), _jsx('div', {
	        className: _styles2.default['input-container']
	      }, void 0, 'Purchase Price :', _jsx('input', {
	        type: 'number',
	        className: '' + _styles2.default.input,
	        name: 'price',
	        min: '0.00',
	        value: this.state.price,
	        placeholder: 'Enter Purchase Price',
	        onChange: this.onPrice.bind(this)
	      }), _ref, 'County Tax :', _jsx('input', {
	        type: 'text',
	        className: '' + _styles2.default.input,
	        placeholder: '',
	        value: this.state.countyTax,
	        readOnly: true
	      }), 'City Tax :', _jsx('input', {
	        type: 'text',
	        className: '' + _styles2.default.input,
	        placeholder: '',
	        value: this.state.cityTax,
	        readOnly: true
	      }), 'Total Tax :', _jsx('input', {
	        type: 'text',
	        className: '' + _styles2.default.input,
	        placeholder: '',
	        value: this.state.countyTax + this.state.cityTax,
	        readOnly: true
	      })), _jsx('div', {
	        className: _styles2.default.footer
	      }, void 0, _jsx(_Button2.default, {
	        title: 'Back',
	        style: btnStyle,
	        onClick: this.onBack.bind(this)
	      }), _jsx('div', {
	        className: _styles2.default['btn-container']
	      }, void 0, _jsx('span', {
	        className: _styles2.default['text']
	      }, void 0, 'Was this helpful? \xA0\xA0\xA0\xA0 '), _jsx(_Button2.default, {
	        title: 'Yes',
	        style: btnStyle,
	        onClick: this.onShowDialog.bind(this)
	      }), _ref2)), _jsx(_Dialog2.default, {
	        show: this.state.showDialog,
	        close: this.onCloseDialog.bind(this)
	      }));
	    }
	  }]);
	
	  return Topic;
	}(_react.Component);
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {};
	}
	
	function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    back: function back() {
	      return dispatch((0, _actions.hideFinalNode)());
	    },
	    setFinalNode: function setFinalNode(kind, data) {
	      return dispatch((0, _actions.setFinalNode)(kind, data));
	    }
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Topic);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Cover = __webpack_require__(23);
	
	var _Cover2 = _interopRequireDefault(_Cover);
	
	var _styles = {
	  "container": "_7TVH3fZZgScqqvRueJycy",
	  "header": "vn0ong9vj-71lsR8Ai9ps",
	  "content": "_3DcpKlTnAxjjTesWN8lU1r",
	  "message": "PME5DpvIxjhDxot7RSbpJ",
	  "actions": "_39LBOzkxP8gC1pYsuxlR0M",
	  "footer": "_2PUBeYc-shW_HNAo_iFI4F",
	  "button": "_3-Pu11oWeEqefx8hKrRvaw",
	  "modal": "_2-kdaQbqlm3dXm2pn8nLoo"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import styles
	
	
	// Import Actions
	
	// Import components
	
	var btnStyle = {
	  backgroundColor: 'white',
	  color: '#02b2fb',
	  fontSize: '17rem',
	  fontWeight: 400,
	  margin: '0rem 10rem',
	  padding: '7rem 18rem'
	};
	
	var _ref = _jsx('i', {
	  className: 'fa fa-envelop',
	  'aria-hidden': 'true'
	}, void 0, '\xA0\xA0');
	
	var Topic = function (_Component) {
	  _inherits(Topic, _Component);
	
	  function Topic(props) {
	    _classCallCheck(this, Topic);
	
	    return _possibleConstructorReturn(this, (Topic.__proto__ || Object.getPrototypeOf(Topic)).call(this, props));
	  }
	
	  _createClass(Topic, [{
	    key: 'onHome',
	    value: function onHome() {
	      _reactRouter.browserHistory.push('/');
	    }
	  }, {
	    key: 'onView',
	    value: function onView() {
	      _reactRouter.browserHistory.push('/legaltopics');
	    }
	  }, {
	    key: 'onSave',
	    value: function onSave() {
	      alert('save');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _jsx('div', {
	        className: _styles2.default.container + ' wow fadeIn'
	      }, void 0, _jsx('div', {
	        className: _styles2.default.header
	      }, void 0, 'Thank you!'), _jsx('div', {
	        className: _styles2.default.content
	      }, void 0, _jsx('span', {
	        className: _styles2.default.message
	      }, void 0, 'We hope you enjoyed your experience with us. Is there something else we may help you with?'), _jsx('div', {
	        className: _styles2.default['actions']
	      }, void 0, _jsx(_Cover2.default, {
	        title: 'NO',
	        icon: 'fa-home',
	        description: 'Go back to home page',
	        onClick: function onClick(e) {
	          return _this2.onHome();
	        }
	      }), _jsx(_Cover2.default, {
	        title: 'YES',
	        icon: 'fa-tasks',
	        description: 'View other legal topics',
	        onClick: function onClick(e) {
	          return _this2.onView();
	        }
	      }), _jsx(_Cover2.default, {
	        title: 'SAVE',
	        icon: 'fa-user',
	        description: 'Save results and open profile',
	        onClick: function onClick(e) {
	          return _this2.onSave();
	        }
	      }))), _jsx('div', {
	        className: _styles2.default.footer
	      }, void 0, _jsx('div', {
	        className: _styles2.default.button
	      }, void 0, _ref, 'LEAVE A COMMENT/MESSAGE')));
	    }
	  }]);
	
	  return Topic;
	}(_react.Component);
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {};
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Topic);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _Button = __webpack_require__(4);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Document = __webpack_require__(13);
	
	var _Document2 = _interopRequireDefault(_Document);
	
	var _Dialog = __webpack_require__(34);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _actions = __webpack_require__(8);
	
	var _styles = {
	  "container": "_1cfTN_KLvWaMKwWF5x_IdX",
	  "title": "jwmbI_Fh0D47znB5QS7WH",
	  "message": "_1u41KGh9-5gYM4lLE5AAip",
	  "footer": "_18H2Us9qbgxdhALAFH0up9",
	  "text": "_3Vr0szzy1r478kZa_E2d2T",
	  "btn-container": "_2Y7IRbgov9Q1gbz8fWFGLB",
	  "input": "aB7cqZkM_qciSVMyaCn9Z",
	  "input-container": "_2HwvKAwiIEy97_Zg-jJ_PQ"
	};
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Actions
	
	
	// Import styles
	
	
	var btnStyle = {
	  backgroundColor: 'white',
	  color: '#02b2fb',
	  fontSize: '17rem',
	  fontWeight: 400,
	  margin: '0rem 10rem',
	  padding: '7rem 18rem'
	};
	
	var _ref = _jsx('br', {});
	
	var _ref2 = _jsx(_Button2.default, {
	  title: 'Need Help',
	  style: btnStyle
	});
	
	var Topic = function (_Component) {
	  _inherits(Topic, _Component);
	
	  function Topic(props) {
	    _classCallCheck(this, Topic);
	
	    var _this = _possibleConstructorReturn(this, (Topic.__proto__ || Object.getPrototypeOf(Topic)).call(this, props));
	
	    _this.state = {
	      showDialog: false
	    };
	    return _this;
	  }
	
	  _createClass(Topic, [{
	    key: 'onCloseDialog',
	    value: function onCloseDialog() {
	      this.setState({ showDialog: false });
	    }
	  }, {
	    key: 'onShowDialog',
	    value: function onShowDialog() {
	      this.setState({ showDialog: true });
	    }
	  }, {
	    key: 'onBack',
	    value: function onBack() {
	      this.props.back();
	    }
	  }, {
	    key: 'onCalcTax',
	    value: function onCalcTax() {
	      this.props.setFinalNode('CalculateTax', { calcTaxInfo: this.props.calcTaxInfo });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          title = _props.title,
	          message = _props.message,
	          to = _props.to,
	          toForm = _props.toForm;
	
	      var toTitle = '';
	      var toDescription = '';
	
	      if (to === 'Corp') {
	        toTitle = 'Articles of Professional Incorporation';
	        toDescription = "Let's begin the professional incorporation process.";
	      } else if (to === 'S-Corp') {
	        toTitle = 'Articles of Incorporation';
	        toDescription = "Let's begin the incorporation process.";
	      }
	
	      return _jsx('div', {
	        className: _styles2.default.container + ' wow fadeIn'
	      }, void 0, _jsx('h1', {
	        className: _styles2.default.title
	      }, void 0, title), _jsx('div', {
	        className: _styles2.default.message
	      }, void 0, to && _jsx(_Document2.default, {
	        empty: false,
	        icon: 'fa-file',
	        title: toTitle,
	        description: toDescription,
	        onClick: function onClick(e) {
	          return toForm(to);
	        },
	        style: { margin: '0 0 0rem 30rem', float: 'right' }
	      }), (0, _reactHtmlParser2.default)(message), _ref, this.props.calcTaxInfo && _jsx(_Button2.default, {
	        title: 'Calculate Tax',
	        onClick: this.onCalcTax.bind(this)
	      })), _jsx('div', {
	        className: _styles2.default.footer
	      }, void 0, _jsx(_Button2.default, {
	        title: 'Back',
	        style: btnStyle,
	        onClick: this.onBack.bind(this)
	      }), _jsx('div', {
	        className: _styles2.default['btn-container']
	      }, void 0, _jsx('span', {
	        className: _styles2.default['text']
	      }, void 0, 'Was this helpful? \xA0\xA0\xA0\xA0 '), _jsx(_Button2.default, {
	        title: 'Yes',
	        style: btnStyle,
	        onClick: this.onShowDialog.bind(this)
	      }), _ref2)), _jsx(_Dialog2.default, {
	        show: this.state.showDialog,
	        close: this.onCloseDialog.bind(this)
	      }));
	    }
	  }]);
	
	  return Topic;
	}(_react.Component);
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {};
	}
	
	function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    back: function back() {
	      return dispatch((0, _actions.hideFinalNode)());
	    },
	    setFinalNode: function setFinalNode(kind, data) {
	      return dispatch((0, _actions.setFinalNode)(kind, data));
	    }
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Topic);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _NoteDialog = __webpack_require__(96);
	
	var _NoteDialog2 = _interopRequireDefault(_NoteDialog);
	
	var _county = __webpack_require__(99);
	
	var _county2 = _interopRequireDefault(_county);
	
	var _city = __webpack_require__(97);
	
	var _city2 = _interopRequireDefault(_city);
	
	var _county_exemption2 = __webpack_require__(100);
	
	var countyExemption = _interopRequireWildcard(_county_exemption2);
	
	var _city_exemption2 = __webpack_require__(98);
	
	var cityExemption = _interopRequireWildcard(_city_exemption2);
	
	var _actions = __webpack_require__(8);
	
	var _ProgramReducer = __webpack_require__(33);
	
	var _InputBox = {
	  "inputbox": "_252oDSSw6rez-ligl-plwk",
	  "title": "_4QsESw3uIIbbjMLWhpAts",
	  "progress-container": "_2J8mEU4GraPqEvWr1ZyYrt",
	  "progress": "wDwD9tUV6Fy5NUTvxjW9A",
	  "main-container": "_1kB-oBgvGjKyODXOYqJ4JS",
	  "question": "_239GqveRckO08HiYe8dQTu",
	  "note-icon": "_29s8Lc6Kn08tVeDyS6Xd3N",
	  "note-icon-global": "_100xr2s3WN7LiU-IG9wZXX",
	  "description": "_2-NK3dsUdBxx8IhIz8XKpQ",
	  "answer-container": "_1bWmVNlZ8Da7A2197Pf_uS",
	  "answer": "_3_4vHeC6JqNVZ10YzLlZdg",
	  "active": "_1oyIHo97BvfXG_RRSVaX65",
	  "input": "qN9gtS3cAWNWxqx3TTywY",
	  "button-group": "_2Z02RusD2iWi1ZLFEhz-Eq",
	  "button": "NreoSJKxAQg1BEw-dOAPR",
	  "big": "_70E9JUCxe3919qgaTx0GZ",
	  "help": "_1j1uahoOf5WuAv24jsuIeN",
	  "help-container": "pjYF7jSBEBXUVCUyI6QH-",
	  "help-text": "_2fjf6ZIMkYP3WJx1t3w25R",
	  "result": "_1J8g7FiAiXwpZ0cuPFSbZk",
	  "modal-content": "_157Poqx4X4aCNW_XC2nn2h",
	  "modal-header": "_2FiCF3SoBkQeI6CNSWTYt4",
	  "modal-body": "_1izqOESrigQ2GZKqYt3IkW",
	  "modal-footer": "_2dg5kHM9S5RNkv-Lze3jGy",
	  "note": "_2IsaY2IaB5XdY1_ydz1rUS"
	};
	
	var _InputBox2 = _interopRequireDefault(_InputBox);
	
	var _green_check = '/' + "43e94895d9f5f0c58b2c26d21a9a41f2.png";
	
	var _green_check2 = _interopRequireDefault(_green_check);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Actions
	
	
	// Import Selectors
	
	
	// Import Style
	
	
	var InputBox = function (_Component) {
	  _inherits(InputBox, _Component);
	
	  function InputBox(props) {
	    _classCallCheck(this, InputBox);
	
	    var _this = _possibleConstructorReturn(this, (InputBox.__proto__ || Object.getPrototypeOf(InputBox)).call(this, props));
	
	    _this.state = {
	      current: 0,
	      singleChoice: -1,
	      multiChoice: [],
	      showNote: false,
	      noteTitle: '',
	      noteContent: '',
	      store: {}
	    };
	
	    _this.history = [];
	    return _this;
	  }
	
	  _createClass(InputBox, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.name) {
	        this.props.dispatch((0, _actions.fetchProgram)(this.props.name));
	        this.props.dispatch((0, _actions.setCurrentProgram)(this.props.name));
	
	        if (this.props.program) {
	          this.history = [];
	          var initIndex = this.getNodeIndex(this.props.program.node, this.props.program.start);
	          this.setCurrent(this.props.program, initIndex);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.name !== nextProps.name) {
	        this.props.dispatch((0, _actions.fetchProgram)(nextProps.name));
	        this.props.dispatch((0, _actions.setCurrentProgram)(nextProps.name));
	      }
	
	      if (this.props.program !== nextProps.program) {
	        if (nextProps.program) {
	          this.history = [];
	          var initIndex = this.getNodeIndex(nextProps.program.node, nextProps.program.start);
	          this.setCurrent(nextProps.program, initIndex);
	        }
	      }
	    }
	  }, {
	    key: 'getNodeIndex',
	    value: function getNodeIndex(node, id) {
	      for (var i = 0; i < node.length; i++) {
	        if (node[i].id === id) {
	          return i;
	        }
	      }
	    }
	  }, {
	    key: 'getNextId',
	    value: function getNextId(node) {
	      if (node.kind === 'Input' || node.kind === 'Multi') {
	        return node.content.next;
	      }
	
	      if (node.kind === 'Single' || node.kind === 'YesNo') {
	        var next = node.content.fields[this.state.singleChoice].next;
	        if (!next) next = node.content.next;
	        return next;
	      }
	    }
	  }, {
	    key: 'doAction',
	    value: function doAction(program, node) {
	      var store = this.state.store;
	      if (node.content.kind === 'CHECK_COUNTY_EXEMPTION') {
	        var next = 0;
	        if (store['county_exemption'][0]) {
	          next = 1;
	        }
	
	        var _nextIndex = this.getNodeIndex(program.node, node.content.next[next]);
	        this.setCurrent(program, _nextIndex);
	      } else if (node.content.kind === 'CHECK_CITY_EXEMPTION') {
	        var next = 0;
	        if (store['city_exemption'][0]) {
	          next = 1;
	        }
	
	        var _nextIndex2 = this.getNodeIndex(program.node, node.content.next[next]);
	        this.setCurrent(program, _nextIndex2);
	      }
	
	      var next = '';
	      switch (node.content.kind) {
	        case 'SET_VALUE':
	          store[node.content.store] = node.content.value;
	          this.setState({ store: store });
	          next = node.content.next;
	          break;
	        case 'ADD_VALUE':
	          store[node.content.store] += node.content.value;
	          this.setState({ store: store });
	          next = node.content.next;
	          break;
	        case 'SWITCH_VALUE':
	          var value = node.content.value;
	          var i;
	          for (i = 0; i < value.length; i++) {
	            if (store[node.content.store] <= value[i]) break;
	          }
	          next = node.content.next[i];
	          break;
	      }
	
	      if (next) {
	        if (program) {
	          var nextIndex = this.getNodeIndex(program.node, next);
	          this.setCurrent(program, nextIndex);
	        }
	      }
	    }
	  }, {
	    key: 'setCurrent',
	    value: function setCurrent(program, curIndex) {
	      var node = program.node[curIndex];
	      var kind = node.kind.toLowerCase();
	
	      if (kind === 'input' || kind === 'single' || kind === 'yesno' || kind === 'multi') {
	        this.setState({ current: curIndex, singleChoice: -1, multiChoice: [], initialInput: '' });
	        this.history.push({
	          current: curIndex,
	          singleChoice: this.state.singleChoice,
	          multiChoice: this.state.multiChoice,
	          store: _extends({}, this.state.store)
	        });
	        return;
	      }
	
	      if (kind === 'form') {
	        this.setState({ current: curIndex, singleChoice: -1, multiChoice: [], initialInput: '' });
	        this.history.push({
	          index: this.state.index,
	          current: curIndex,
	          singleChoice: this.state.singleChoice,
	          store: this.state.store
	        });
	        return;
	      }
	
	      if (kind === 'goto') {
	        var path = '/';
	        if (node.content.kind === 'form') path += 'legalforms/';
	
	        path += node.content.id;
	        _reactRouter.browserHistory.push(path);
	      }
	
	      if (kind === 'action') {
	        this.doAction(program, node);
	      }
	
	      if (kind === 'final') {
	        var message = node.content.message ? node.content.message : '';
	        if (node.content.attach) {
	          node.content.attach.forEach(function (elt) {
	            message += program.attach[elt];
	          });
	        }
	
	        if (node.content.kind === 'Form') {
	          this.props.dispatch((0, _actions.setFinalNode)('Form', { form: node.content.form, info: _extends({}, this.state.store) }));
	        } else if (node.content.kind === 'CalculateTax') {
	          var county_exemption = countyExemption.exemption(this.state.store['county']);
	          var countyTaxRate = parseFloat(county_exemption[0].split(';')[2]);
	          var city_exemption = countyExemption.exemption(this.state.store['county'], this.state.store['city']);
	          var cityTaxRate = parseFloat(city_exemption[0].split(';')[3]);
	
	          this.props.dispatch((0, _actions.setFinalNode)('CalculateTax', { county: this.state.store['county'], city: this.state.store['city'], countyTaxRate: countyTaxRate, cityTaxRate: cityTaxRate }));
	        } else {
	          var calcTaxInfo;
	          if (node.content.next === 'CalculateTax') {
	            var _county_exemption = countyExemption.exemption(this.state.store['county']);
	            var _countyTaxRate = parseFloat(_county_exemption[0].split(';')[2]);
	            var _city_exemption = cityExemption.exemption(this.state.store['county'], this.state.store['city']);
	            var _cityTaxRate = parseFloat(_city_exemption[0].split(';')[3]);
	
	            calcTaxInfo = { county: this.state.store['county'], city: this.state.store['city'], countyTaxRate: _countyTaxRate, cityTaxRate: _cityTaxRate };
	          }
	
	          console.log(calcTaxInfo);
	          this.props.dispatch((0, _actions.setFinalNode)('Topic', { title: node.content.title, message: message, to: node.content.to, calcTaxInfo: calcTaxInfo }));
	        }
	      }
	    }
	  }, {
	    key: 'setInput',
	    value: function setInput(node) {
	      if (node.kind === 'Single') {
	        if (node.content.store) {
	          var field = node.content.fields[this.state.singleChoice];
	          if (field.kind === 'choice') {
	            var store = this.state.store;
	            store[node.content.store] = field.value;
	            this.setState({ store: store });
	          }
	        }
	      } else if (node.kind === 'Multi') {
	        if (node.content.store) {
	          var _store = this.state.store;
	          _store[node.content.store] = this.state.multiChoice;
	          this.setState({ store: _store });
	        }
	      }
	    }
	  }, {
	    key: 'onNext',
	    value: function onNext() {
	      if (!this.props.program) return;
	
	      var node = this.props.program.node[this.state.current];
	
	      this.setInput(node);
	
	      var next = this.getNextId(node);
	      var nextIndex = this.getNodeIndex(this.props.program.node, next);
	      this.setCurrent(this.props.program, nextIndex);
	    }
	  }, {
	    key: 'onBack',
	    value: function onBack() {
	      if (this.props.program) {
	        if (this.history.length === 1) return;
	        this.history.pop();
	        var state = this.history[this.history.length - 1];
	        if (state) {
	          this.setState({ current: state.current, singleChoice: state.singleChoice, multiChoice: state.multiChoice, store: state.store });
	        }
	      }
	    }
	  }, {
	    key: 'onSingleSelect',
	    value: function onSingleSelect(index) {
	      this.setState({ singleChoice: index });
	      this.history[this.history.length - 1].singleChoice = index;
	    }
	  }, {
	    key: 'onMultiSelect',
	    value: function onMultiSelect(index, noneApplyIndex) {
	      var multiChoice = this.state.multiChoice;
	      if (index === noneApplyIndex) {
	        multiChoice = [];
	        this.history[this.history.length - 1].multiChoice = [];
	      } else {
	        multiChoice[noneApplyIndex] = false;
	        this.history[this.history.length - 1].multiChoice[noneApplyIndex] = false;
	      }
	      multiChoice[index] = !multiChoice[index];
	      this.setState({ multiChoice: multiChoice });
	      this.history[this.history.length - 1].multiChoice[index] = multiChoice[index];
	    }
	  }, {
	    key: 'getDescription',
	    value: function getDescription(kind) {
	      switch (kind) {
	        case 'Input':
	          return '';
	
	        case 'Single':
	          return '';
	
	        case 'YesNo':
	          return '';
	
	        case 'Multi':
	          return 'Please check any that apply.';
	      }
	    }
	  }, {
	    key: 'onInput',
	    value: function onInput(event, node, field) {
	      var storeName = field.store;
	      if (!storeName) storeName = node.content.store;
	      if (storeName) {
	        var store = this.state.store;
	        store[storeName] = event.target.value;
	        this.setState({ store: store });
	      }
	    }
	  }, {
	    key: 'onSelectChange',
	    value: function onSelectChange(event, field) {
	      var store = this.state.store;
	      if (field.store === 'county') {
	        store['city'] = undefined;
	      }
	      store[field.store] = event.target.value;
	      this.setState({ store: store });
	    }
	  }, {
	    key: 'buildField',
	    value: function buildField(node, field, index) {
	      var _this2 = this;
	
	      var kind = node.kind;
	      var check_url = this.state.singleChoice === index ? 'url(' + _green_check2.default + ')' : '';
	
	      if (kind === 'Single' || kind === 'YesNo') {
	        if (field.kind === 'number') {
	          if (this.state.store[node.content.store] === undefined) {
	            this.state.store[node.content.store] = '';
	          }
	        }
	
	        return _jsx('div', {
	          className: _InputBox2.default.answer + ' ' + (this.state.singleChoice === index ? _InputBox2.default.active : '') + ' ',
	          onClick: function onClick() {
	            return _this2.onSingleSelect(index);
	          },
	          style: { backgroundImage: check_url }
	        }, index, field.label, field.kind === 'number' ? _jsx('input', {
	          type: 'number',
	          className: _InputBox2.default.input,
	          value: this.state.store[node.content.store],
	          onChange: function onChange(event) {
	            _this2.onInput(event, node, field);
	          }
	        }) : null, field.note && _jsx('i', {
	          className: 'fa fa-info-circle',
	          'aria-hidden': 'true',
	          onClick: function onClick() {
	            alert('info');
	          }
	        }));
	      }
	
	      if (kind === 'Input') {
	        if (field.kind === 'select') {
	          var datasource = null;
	          var store = this.state.store;
	
	          if (field.datasource === 'county') {
	            if (!store['county']) store['county'] = _county2.default[0].name;
	            datasource = _county2.default.map(function (elt, i) {
	              return _jsx('option', {
	                value: elt.name
	              }, i, elt.name);
	            });
	          } else if (field.datasource === 'city') {
	            var city = _city2.default.filter(function (elt) {
	              return elt.county === store['county'];
	            });
	
	            if (!store['city']) store['city'] = city.length ? city[0].city : '';
	            datasource = city.map(function (elt, i) {
	              return _jsx('option', {
	                value: elt.city
	              }, i, elt.city);
	            });
	          }
	
	          return _jsx('select', {
	            className: _InputBox2.default.input,
	            value: store[field.store],
	            onChange: function onChange(event) {
	              return _this2.onSelectChange(event, field);
	            }
	          }, index, datasource);
	        } else {
	          if (this.state.store[field.store] === undefined) {
	            this.state.store[field.store] = '';
	          }
	          return _jsx('input', {
	            type: field.kind,
	            className: '' + _InputBox2.default.input,
	            value: this.state.store[field.store],
	            onChange: function onChange(event) {
	              _this2.onInput(event, node, field);
	            },
	            placeholder: field.placeholder
	          }, index);
	        }
	      }
	
	      if (kind === 'Multi') {
	        // use index 0 as None Apply
	        if (field.datasource === 'county_exemption_list') {
	          var exemption = countyExemption.exemption(this.state.store['county']);
	          var indexArray = countyExemption.indexArray,
	              label = countyExemption.label,
	              note = countyExemption.note;
	
	          var eleExemptions = indexArray.map(function (elt, i) {
	            if (exemption[indexArray[i]] !== 'x') return;
	            return _jsx('div', {
	              className: _InputBox2.default.answer + ' ' + (_this2.state.multiChoice[i] ? _InputBox2.default.active : ''),
	              onClick: function onClick() {
	                return _this2.onMultiSelect(i, 0);
	              }
	            }, i, label[indexArray[i]], _jsx('i', {
	              className: 'fa fa-info-circle ' + _InputBox2.default['note-icon'],
	              'aria-hidden': 'true',
	              onClick: function onClick(e) {
	                return _this2.openNote(e, 'Note', note[indexArray[i]]);
	              }
	            }));
	          });
	
	          return _jsx('div', {}, index, eleExemptions, _jsx('div', {
	            className: _InputBox2.default.answer + ' ' + (this.state.multiChoice[0] ? _InputBox2.default.active : ''),
	            onClick: function onClick() {
	              return _this2.onMultiSelect(0, 0);
	            },
	            style: { backgroundImage: check_url }
	          }, void 0, 'None Apply'));
	        } else if (field.datasource === 'city_exemption_list') {
	          var _exemption = cityExemption.exemption(this.state.store['county'], this.state.store['city']);
	          var _indexArray = cityExemption.indexArray,
	              _label = cityExemption.label,
	              _note = cityExemption.note;
	
	          var _eleExemptions = _indexArray.map(function (elt, i) {
	            if (_exemption[_indexArray[i]] !== 'x') return;
	            return _jsx('div', {
	              className: _InputBox2.default.answer + ' ' + (_this2.state.multiChoice[i] ? _InputBox2.default.active : ''),
	              onClick: function onClick() {
	                return _this2.onMultiSelect(i, 0);
	              }
	            }, i, _label[_indexArray[i]], _jsx('i', {
	              className: 'fa fa-info-circle ' + _InputBox2.default['note-icon'],
	              'aria-hidden': 'true',
	              onClick: function onClick(e) {
	                return _this2.openNote(e, 'Note', _note[_indexArray[i]]);
	              }
	            }));
	          });
	
	          return _jsx('div', {}, index, _eleExemptions, _jsx('div', {
	            className: _InputBox2.default.answer + ' ' + (this.state.multiChoice[0] ? _InputBox2.default.active : ''),
	            onClick: function onClick() {
	              return _this2.onMultiSelect(0, 0);
	            }
	          }, void 0, 'None Apply'));
	        }
	      }
	    }
	  }, {
	    key: 'closeNote',
	    value: function closeNote() {
	      this.setState({ showNote: false });
	    }
	  }, {
	    key: 'openNote',
	    value: function openNote(e, title, content) {
	      if (e) e.stopPropagation();
	      this.setState({ noteTitle: title, noteContent: content, showNote: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var lstEle = null;
	      var question = null;
	      var title = null;
	      var description = null;
	      var node = null;
	      var eleNote = null;
	      var note = { title: '', content: '' };
	      if (this.props.program) {
	
	        node = this.props.program.node[this.state.current];
	
	        if (node.kind !== 'Form' && node.kind !== 'Action') {
	
	          title = this.props.program.description;
	
	          var reg = /\${(.*)}/g;
	
	          question = '' + node.content.question;
	          var vName = reg.exec(question);
	          if (vName) {
	            question = question.replace(reg, this.state.store[vName[1]]);
	          }
	          description = this.getDescription(node.kind);
	
	          if (node.content.note) {
	            eleNote = _jsx('i', {
	              className: 'fa fa-info-circle ' + _InputBox2.default['note-icon-global'],
	              'aria-hidden': 'true',
	              onClick: function onClick(e) {
	                return _this3.openNote(e, node.content.note.title, node.content.note.content);
	              }
	            });
	          }
	
	          lstEle = node.content.fields.map(function (elt, i) {
	            return _this3.buildField(node, elt, i);
	          });
	        }
	      }
	
	      return _jsx('div', {
	        className: '' + _InputBox2.default.inputbox,
	        style: { display: this.props.show ? 'none' : '' }
	      }, void 0, _jsx('div', {
	        className: _InputBox2.default.title
	      }, void 0, title), this.props.program && this.props.program.step && _jsx('div', {
	        className: _InputBox2.default['progress-container']
	      }, void 0, _jsx('div', {
	        className: 'progress ' + _InputBox2.default['progress']
	      }, void 0, _jsx('div', {
	        className: 'progress-bar active',
	        role: 'progressbar',
	        'aria-valuenow': '40',
	        'aria-valuemin': '0',
	        'aria-valuemax': '100',
	        style: { width: (this.history.length - 1) * 100.0 / this.props.program.step + '%' }
	      }, void 0))), _jsx('div', {
	        className: '' + _InputBox2.default['main-container']
	      }, void 0, _jsx('div', {
	        className: _InputBox2.default['question']
	      }, void 0, _jsx('span', {}, void 0, this.history.length + '. '), _jsx('span', {}, void 0, (0, _reactHtmlParser2.default)(question)), eleNote), _jsx('div', {
	        className: _InputBox2.default['description']
	      }, void 0, description), _jsx('div', {
	        className: _InputBox2.default['answer-container']
	      }, void 0, lstEle), _jsx('div', {
	        className: _InputBox2.default['button-group']
	      }, void 0, _jsx('div', {
	        className: '' + _InputBox2.default.button,
	        style: { float: 'left' },
	        onClick: this.onBack.bind(this)
	      }, void 0, 'Step Back'), _jsx('div', {
	        className: _InputBox2.default.button + ' ' + _InputBox2.default.big,
	        onClick: this.onNext.bind(this)
	      }, void 0, 'Continue'), _jsx('div', {
	        className: '' + _InputBox2.default.button,
	        style: { float: 'right' }
	      }, void 0, 'Save Place')), _jsx('div', {
	        className: _InputBox2.default['help-container']
	      }, void 0, _jsx('span', {
	        className: _InputBox2.default['help_text']
	      }, void 0, 'Need some help answering a question or want to save and finish later?'), _jsx('div', {
	        className: _InputBox2.default.button + ' ' + _InputBox2.default.help,
	        style: { float: 'right' },
	        onClick: this.props.showContact
	      }, void 0, 'Need Help'))), _jsx(_NoteDialog2.default, {
	        show: this.state.showNote,
	        close: this.closeNote.bind(this),
	        title: this.state.noteTitle,
	        content: this.state.noteContent,
	        showContact: this.props.showContact
	      }));
	    }
	  }]);
	
	  return InputBox;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    program: (0, _ProgramReducer.getCurrentProgram)(state)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(InputBox);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactBootstrap = __webpack_require__(12);
	
	var _reactHtmlParser = __webpack_require__(6);
	
	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);
	
	var _InputBox = {
	  "inputbox": "_252oDSSw6rez-ligl-plwk",
	  "title": "_4QsESw3uIIbbjMLWhpAts",
	  "progress-container": "_2J8mEU4GraPqEvWr1ZyYrt",
	  "progress": "wDwD9tUV6Fy5NUTvxjW9A",
	  "main-container": "_1kB-oBgvGjKyODXOYqJ4JS",
	  "question": "_239GqveRckO08HiYe8dQTu",
	  "note-icon": "_29s8Lc6Kn08tVeDyS6Xd3N",
	  "note-icon-global": "_100xr2s3WN7LiU-IG9wZXX",
	  "description": "_2-NK3dsUdBxx8IhIz8XKpQ",
	  "answer-container": "_1bWmVNlZ8Da7A2197Pf_uS",
	  "answer": "_3_4vHeC6JqNVZ10YzLlZdg",
	  "active": "_1oyIHo97BvfXG_RRSVaX65",
	  "input": "qN9gtS3cAWNWxqx3TTywY",
	  "button-group": "_2Z02RusD2iWi1ZLFEhz-Eq",
	  "button": "NreoSJKxAQg1BEw-dOAPR",
	  "big": "_70E9JUCxe3919qgaTx0GZ",
	  "help": "_1j1uahoOf5WuAv24jsuIeN",
	  "help-container": "pjYF7jSBEBXUVCUyI6QH-",
	  "help-text": "_2fjf6ZIMkYP3WJx1t3w25R",
	  "result": "_1J8g7FiAiXwpZ0cuPFSbZk",
	  "modal-content": "_157Poqx4X4aCNW_XC2nn2h",
	  "modal-header": "_2FiCF3SoBkQeI6CNSWTYt4",
	  "modal-body": "_1izqOESrigQ2GZKqYt3IkW",
	  "modal-footer": "_2dg5kHM9S5RNkv-Lze3jGy",
	  "note": "_2IsaY2IaB5XdY1_ydz1rUS"
	};
	
	var _InputBox2 = _interopRequireDefault(_InputBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var NoteDialog = function (_React$Component) {
	  _inherits(NoteDialog, _React$Component);
	
	  function NoteDialog(props) {
	    _classCallCheck(this, NoteDialog);
	
	    return _possibleConstructorReturn(this, (NoteDialog.__proto__ || Object.getPrototypeOf(NoteDialog)).call(this, props));
	  }
	
	  _createClass(NoteDialog, [{
	    key: 'render',
	    value: function render() {
	      return _jsx(_reactBootstrap.Modal, {
	        show: this.props.show,
	        onHide: this.props.close
	      }, void 0, _jsx(_reactBootstrap.Modal.Header, {
	        bsClass: _InputBox2.default['modal-header'],
	        closeButton: true
	      }, void 0, _jsx(_reactBootstrap.Modal.Title, {}, void 0, this.props.title)), _jsx(_reactBootstrap.Modal.Body, {
	        bsClass: _InputBox2.default['modal-body']
	      }, void 0, _jsx('div', {}, void 0, (0, _reactHtmlParser2.default)(this.props.content))), _jsx(_reactBootstrap.Modal.Footer, {
	        bsClass: _InputBox2.default['modal-footer']
	      }, void 0, _jsx('span', {
	        style: { float: 'left', marginTop: 6 }
	      }, void 0, 'Was this helpful?'), _jsx('div', {
	        className: _InputBox2.default.button + ' ' + _InputBox2.default.note,
	        onClick: this.props.close
	      }, void 0, 'Yes'), _jsx('div', {
	        className: _InputBox2.default.button + ' ' + _InputBox2.default.note,
	        onClick: this.props.showContact
	      }, void 0, 'Need Help')));
	    }
	  }]);
	
	  return NoteDialog;
	}(_react2.default.Component);
	
	exports.default = NoteDialog;

/***/ },
/* 97 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{ county: 'Los Angeles', city: 'Santa Monica', tax: 1 }, { county: 'Los Angeles', city: 'Los Angeles', tax: 4.50 }, { county: 'Los Angeles', city: 'Pomona', tax: 2.20 }, { county: 'Los Angeles', city: 'Redondo Beach', tax: 2.20 }, { county: 'Los Angeles', city: 'Culver City', tax: 4.50 }, { county: 'Los Angeles', city: 'Arleta', tax: 4.50 }, { county: 'Los Angeles', city: 'Athens', tax: 4.50 }, { county: 'Los Angeles', city: 'Bel Air', tax: 4.50 }, { county: 'Los Angeles', city: 'Bel Air Estates', tax: 4.50 }, { county: 'Los Angeles', city: 'Beverly Glen', tax: 4.50 }, { county: 'Los Angeles', city: 'Boyle Heights', tax: 4.50 }, { county: 'Los Angeles', city: 'Brentwood', tax: 4.50 }, { county: 'Los Angeles', city: 'Cahuenga Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Calabasas', tax: 4.50 }, { county: 'Los Angeles', city: 'Canoga Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Carson', tax: 4.50 }, { county: 'Los Angeles', city: 'Castellamare', tax: 4.50 }, { county: 'Los Angeles', city: 'Century City', tax: 4.50 }, { county: 'Los Angeles', city: 'Chatsworth', tax: 4.50 }, { county: 'Los Angeles', city: 'Crenshaw Distract', tax: 4.50 }, { county: 'Los Angeles', city: 'Eagle Rock', tax: 4.50 }, { county: 'Los Angeles', city: 'East L.A.', tax: 4.50 }, { county: 'Los Angeles', city: 'East San Pedro', tax: 4.50 }, { county: 'Los Angeles', city: 'Echo Park', tax: 4.50 }, { county: 'Los Angeles', city: 'El Sereno', tax: 4.50 }, { county: 'Los Angeles', city: 'Elysian Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Encino', tax: 4.50 }, { county: 'Los Angeles', city: 'Gardena(Figueroa-Vermont)', tax: 4.50 }, { county: 'Los Angeles', city: 'Garvanza', tax: 4.50 }, { county: 'Los Angeles', city: 'Glassell Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Granada Hills', tax: 4.50 }, { county: 'Los Angeles', city: 'Hancock Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Hansen Heights', tax: 4.50 }, { county: 'Los Angeles', city: 'Harbor City', tax: 4.50 }, { county: 'Los Angeles', city: 'Hidden Hills', tax: 4.50 }, { county: 'Los Angeles', city: 'Highland Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Hollywood', tax: 4.50 }, { county: 'Los Angeles', city: 'Hyde Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Inglewood', tax: 4.50 }, { county: 'Los Angeles', city: 'Korea Town', tax: 4.50 }, { county: 'Los Angeles', city: 'Lakeside Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Lakeview Terrace', tax: 4.50 }, { county: 'Los Angeles', city: 'Larchmont District', tax: 4.50 }, { county: 'Los Angeles', city: 'La Tijera', tax: 4.50 }, { county: 'Los Angeles', city: 'Laurel Canyon', tax: 4.50 }, { county: 'Los Angeles', city: 'Leimert Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Lincoln Heights', tax: 4.50 }, { county: 'Los Angeles', city: 'Los Feliz', tax: 4.50 }, { county: 'Los Angeles', city: 'Marina Del Rey', tax: 4.50 }, { county: 'Los Angeles', city: 'Mar Vista', tax: 4.50 }, { county: 'Los Angeles', city: 'Mission Hills', tax: 4.50 }, { county: 'Los Angeles', city: 'Montecito Heights', tax: 4.50 }, { county: 'Los Angeles', city: 'Monterey Hills', tax: 4.50 }, { county: 'Los Angeles', city: 'Mt. Olympus', tax: 4.50 }, { county: 'Los Angeles', city: 'Mt. Washington', tax: 4.50 }, { county: 'Los Angeles', city: 'North Hills', tax: 4.50 }, { county: 'Los Angeles', city: 'North Hollywood', tax: 4.50 }, { county: 'Los Angeles', city: 'Northridge', tax: 4.50 }, { county: 'Los Angeles', city: 'Olive View', tax: 4.50 }, { county: 'Los Angeles', city: 'Pacific Palisades', tax: 4.50 }, { county: 'Los Angeles', city: 'Pacoima', tax: 4.50 }, { county: 'Los Angeles', city: 'Palasades Highlands', tax: 4.50 }, { county: 'Los Angeles', city: 'Palms', tax: 4.50 }, { county: 'Los Angeles', city: 'Panorama City', tax: 4.50 }, { county: 'Los Angeles', city: 'Playa Del Rey', tax: 4.50 }, { county: 'Los Angeles', city: 'Porter Ranch', tax: 4.50 }, { county: 'Los Angeles', city: 'Rancho Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Reseda', tax: 4.50 }, { county: 'Los Angeles', city: 'San Pedro', tax: 4.50 }, { county: 'Los Angeles', city: 'San Fernando', tax: 4.50 }, { county: 'Los Angeles', city: 'Sawtelle', tax: 4.50 }, { county: 'Los Angeles', city: 'Sepulveda', tax: 4.50 }, { county: 'Los Angeles', city: 'Sherman Oaks', tax: 4.50 }, { county: 'Los Angeles', city: 'Silver Lake', tax: 4.50 }, { county: 'Los Angeles', city: 'Studio City', tax: 4.50 }, { county: 'Los Angeles', city: 'Sunland', tax: 4.50 }, { county: 'Los Angeles', city: 'Sun Valley', tax: 4.50 }, { county: 'Los Angeles', city: 'Sylmar', tax: 4.50 }, { county: 'Los Angeles', city: 'Sylmar Square', tax: 4.50 }, { county: 'Los Angeles', city: 'Tarzana', tax: 4.50 }, { county: 'Los Angeles', city: 'Terminal Island', tax: 4.50 }, { county: 'Los Angeles', city: 'Toluca Lake', tax: 4.50 }, { county: 'Los Angeles', city: 'Topanga', tax: 4.50 }, { county: 'Los Angeles', city: 'Torrance', tax: 4.50 }, { county: 'Los Angeles', city: 'Tjunga', tax: 4.50 }, { county: 'Los Angeles', city: 'Universal City', tax: 4.50 }, { county: 'Los Angeles', city: 'Valley Plaza', tax: 4.50 }, { county: 'Los Angeles', city: 'Valley Village', tax: 4.50 }, { county: 'Los Angeles', city: 'Van Nuys', tax: 4.50 }, { county: 'Los Angeles', city: 'Venice', tax: 4.50 }, { county: 'Los Angeles', city: 'Vernon', tax: 4.50 }, { county: 'Los Angeles', city: 'View Park', tax: 4.50 }, { county: 'Los Angeles', city: 'Warner Center', tax: 4.50 }, { county: 'Los Angeles', city: 'Watts', tax: 4.50 }, { county: 'Los Angeles', city: 'Westchester', tax: 4.50 }, { county: 'Los Angeles', city: 'West Hills', tax: 4.50 }, { county: 'Los Angeles', city: 'West Hollywood', tax: 4.50 }, { county: 'Los Angeles', city: 'Westlake', tax: 4.50 }, { county: 'Los Angeles', city: 'West L.A.', tax: 4.50 }, { county: 'Los Angeles', city: 'Westwood', tax: 4.50 }, { county: 'Los Angeles', city: 'Wilmington', tax: 4.50 }, { county: 'Los Angeles', city: 'Wilshire Distract', tax: 4.50 }, { county: 'Los Angeles', city: 'Windsor Hills', tax: 4.50 }, { county: 'Los Angeles', city: 'Winnetka', tax: 4.50 }, { county: 'Los Angeles', city: 'Woodland Hills', tax: 4.50 }, { county: 'Los Angeles', city: 'Malibu', tax: 1 }, { county: 'Alameda', city: 'Alameda', tax: 12.00 }, { county: 'Alameda', city: 'Albany', tax: 11.50 }, { county: 'Alameda', city: 'Berkeley', tax: 15.00 }, { county: 'Alameda', city: 'Emeryville', tax: 12.00 }, { county: 'Alameda', city: 'Hayward', tax: 4.50 }, { county: 'Alameda', city: 'Oakland', tax: 15.00 }, { county: 'Alameda', city: 'Piedmont', tax: 13.00 }, { county: 'Alameda', city: 'San Leandro', tax: 6.00 }, { county: 'Contra Costa', city: 'Richmond', tax: 7.00 }, { county: 'Marin', city: 'San Rafael', tax: 2.00 }, { county: 'Riverside', city: 'Riverside City', tax: 1.10 }, { county: 'Sacramento', city: 'Sacramento City', tax: 2.75 }, { county: 'San Mateo', city: 'Hillsborough', tax: 0.30 }, { county: 'San Mateo', city: 'San Mateo', tax: 5.00 }, { county: 'Santa Clara', city: 'Mountain View', tax: 3.30 }, { county: 'Santa Clara', city: 'Palo Alto', tax: 3.30 }, { county: 'Santa Clara', city: 'San Jose', tax: 3.30 }, { county: 'Solano', city: 'Santa Rosa', tax: 2.00 }, { county: 'Solano', city: 'Petaluma', tax: 2.00 }, { county: 'Yolo', city: 'Woodland', tax: 1.10 }];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.indexArray = exports.note = exports.label = exports.exemption = undefined;
	
	var _csv2array = __webpack_require__(35);
	
	var _csv2array2 = _interopRequireDefault(_csv2array);
	
	var _sort = __webpack_require__(36);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var csv = 'State Name;County Name;City Name;Tax,Conveyance to secure a debt,Governmental agency acquiring title,Reorganization or adjustment conveyances,Securities and Exchange Commission order conveyances,Transfers without a change in proportional ownership,Transfers in connection with foreclosure,Transfers in connection with dissolution of marriage,Conveyances by state,Conveyances to nonprofit corporations,Gifts and transfers by reason of death,Agent transfers,Transfers confirming title,Partitions,Transfers for the benefit of creditors,Seismic retrofitting improvements ,Leasehold instruments,Certain conversions of stock cooperatives to condominium units,Transfers between spouses and transfers between domestic partners,Gift ,Transfer to partition property,Transfer to effectuate a will or intestate succession,Transfer to effectuate the right of survivorship of a joint tenant,Transfer to trust,1031 Exchange,Gift,Historic resources,Eminent domain proceeding,Exhanges with the city,Certain non-profit corporation transfers,"Transfer of community property, or interest among joint tenants or tenants in common",Interspousal transfer,Transfer between parents and children of a single family residence ,Conveyance by exempt agency,Conveyances to nonprofit corporations,Release of ownership interest by a co-owner,Conveyance of community property or assets held in joint tenancy or tenancy in common between spouses,Transfers between domestic spouses,Transfers of partial interests ,Loans cosigned by family members,Transfers pursuant to bankruptcy proceedings,Corporate reorganization or adjustment,Transfers pursuant to bankruptcy proceedings\nyellow highlight - charter city; red font - administer in conformity with\u2026,"No Documentary Transfer Tax shall be due upon any mortgage or deed of trust given to secure a debt, or upon a release of mortgage or deed of reconveyance upon satisfaction of such debt.","Any deed, instrument or writing to which the United States or agency or instrumentality thereof, any state or territory, or political subdivision thereof, is a party shall be exempt when the exempt entity of government is acquiring title.","No Documentary Transfer Tax shall be due upon any document made to effectuate a plan or reorganization or adjustment: (1) confirmed in a bankruptcy proceeding under Title 11 of the United States Code, as amended; (2) approved by a court in an equity receivership proceeding involving a corporation or a railroad, as defined in Sections 101(9) and 101(44), respectively, of Title 11 of the United States Code; or (3) whereby a mere change in identity, form or place of organization is effected.","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property to effectuate an order of the Securities Exchange Commission (as defined in Section 1083 of the Internal Revenue Code), provided all of the following conditions are met: (1) the order states that such conveyance is necessary or appropriate to effectuate the provisions of Section 79k of Title 15 of the United States Code, relating to the Public Utility Holding Company Act of 1935; (2) the order specifies the property which is ordered to be conveyed; and (3) the transfer is made in obedience to such order.","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property between an individual or individuals and a legal entity, or between legal entities, if such transfer results solely in a change in the method of holding title, and in which proportional ownership interests in the real property (whether represented by stock, membership interest, partnership interest, cotenancy interest, or otherwise) directly or indirectly, remain the same immediately after the transfer.","No Documentary Transfer Tax shall be due on any document transferring an interest in real property from a mortgagor to a mortgage, or from a trustor to a beneficiary under a deed of trust, where the underlying mortgage or deed of trust encumbers the property being transferred, and where the interest is being transferred as a result of, or in lieu of, foreclosure. The exemption provided in subsection (a) of this section applies only to the extent that consideration for such transfer does not exceed the unpaid indebtedness (including accrued interest and costs of foreclosure), and Documentary Transfer Tax shall be due to the extent that the consideration exceeds the indebtedness.","No Documentary Transfer Tax shall be due upon any document transferring an interest in community, quasi-community or quasi-marital property between spouses, when such transfer is made to effectuate the division or allocation of such property pursuant to a judgment of dissolution, separation or nullity of marriage, or any other order or judgment rendered pursuant to the Family Code, or pursuant to a written agreement between the spouses executed in contemplation of any such order or judgment.","No Documentary Transfer Tax shall be due with respect to any deed, instrument or other writing by which realty is conveyed by the state of California, any political subdivision thereof, or agency or instrumentality of either thereof, pursuant to an agreement whereby the purchaser agrees to immediately reconvey the realty to the exempt agency.","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property by the State of California, any political subdivision thereof, or agency or instrumentality or either thereof, conveys to a nonprofit corporation realty the acquisition, construction, or improvement of which was financed or refinanced by obligations issued by a nonprofit organization on behalf of a government unit, within the meaning of Section 1.103-l(b) of Title 26 of the Code of Federal Regulations or as amended. ","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property by reason of the death of any person, or a transfer by inter vivos gift, whether the interest conveyed is transferred outright or in trust for the benefit of any person or entity.",No Documentary Transfer Tax shall be due upon any document transferring an interest in real property from a principal to his agent or from an agent to his principal.,"No Documentary Transfer Tax shall be due upon any document confirming the grantee\'s vested, legal interest in real property.","No Documentary Transfer Tax shall be due upon documents partitioning real property between/among the owners thereof, provided all of the following conditions are met: (a) all pre-partition owners must continue as owners of the partitioned property; (b) no one shall be named as a grantee who was not a pre-partition owner; and (c) the grantees\' respective interests in the partitioned property must be approximately equal in value (remain in the same proportion).",No Documentary Transfer Tax shall be due upon any document transferring an interest in real property in trust for the benefit of the grantor\'s creditors.,"Any deed, instrument or writing shall be exempt from up to one-third (1/3) of any tax imposed pursuant to this ordinance if: (1) it transfers an interest in real property used as a residence; and (2) after January 1, 2009, the transferor has installed an active solar system, as that term is defined in Revenue & Taxation Code Section 73(b), or has made seismic retrofitting improvements or improvements utilizing earthquake hazard mitigation technologies, as those terms are defined in Revenue & Taxation Code Section 74.5(b), and the transferor has claimed and the Assessor has approved an exclusion from reassessment for the value of that system or those improvements. This partial exemption shall only apply to the initial transfer by the person who installed the active solar system or made the seismic safety improvements. The amount of this partial exemption shall not exceed the transferor\'s cost of seismic retrofitting improvements or the active solar system. Multi-family residential properties are eligible for this partial exemption.","No Documentary Transfer Tax shall be due with respect to any deed, instrument or writing which creates, terminates, or transfers a leasehold interest having a remaining term (including renewal options) of less than 35 years.","No Documentary Transfer Tax shall apply with respect to any deed, instrument, or writing in connection with the conversion to condominium units of the following kind of stock cooperative project: a stock cooperative project (a) which is entitled to an exemption from the annual limitation imposed on the number of conversions and the annual condominium conversion lottery pursuant to Section 1396 of the San Francisco Subdivision Code; and (b) wherein 80 percent or more of the condominium units serve as security for loans in favor of the City and County of San Francisco, pursuant to the Homeownership Assistance Loan Fund (under San Francisco Administrative Code Section 10.100 \u2013 08) or its predecessor program, as identified by the Mayor\'s Office of Housing, prior to the conversion.","No Documentary Transfer Tax shall apply to transfers of real property between spouses or between domestic partners. Individuals of the same sex who obtain a certificate of marriage or other official government document of any state or political subdivision thereof acknowledging their union in marriage shall be deemed to be in a ""domestic partnership"" that qualifies for the exemption under subsection (a) in the event such individuals are denied the legal status of marriage or the legal rights, privileges and obligations of spouses, or the marriage certificate or other official government document acknowledging their marriage is invalidated or revoked in a final judgment or by operation of law, because such individuals are of the same sex.","No Documentary Transfer Tax shall apply to effectuate a gift or consideration of ""love and affection"", so long as one of the original owners remains on title.",,,,"No Documentary Transfer Tax shall apply to any transfer by an individual, transferring his/her property into a trust so long as (1) the transferor is the present beneficiary of the trust, or (2) the trust is revocable, or any transfer by a trustee of such trust described in either clause (1) or (2) back to the original owner (trustor).","The tax imposed pursuant to this article shall apply to the transfer of only one (1) property in the instance of an exchange pursuant to section 1031 of the Internal Revenue Code of like kind properties held for productive use in a trade or business or for an investment. For purposes of this section, the exchange of properties must be completed within 180 days following the date on which the taxpayer transfers and pays the tax on one (1) of the properties relinquished in the exchange.","No Documentary Transfer Tax shall apply to transfers, without consideration; provided, the transferee neither conveys an interest therein to a third party nor effects a refinancing for a period of one hundred eighty (180) days after the gift transfer; however, refinancings for the purposes of rehabilitation of the gifted property are not subject to this limitation upon submission of documentation required by the Director or his or her designee(s). Notwithstanding the foregoing paragraph, transfers, without consideration, of commercial real property, including residential rental property, other than the principal residence of the transferor will be subject to this tax to the extent that the fair market value thereof exceeds one million dollars ($1,000,000.00). In such case, only the amount of the fair market value that exceeds one million dollars ($1,000,000.00) will be taxed.","No Documentary Transfer Tax shall apply to the transfer of a historic resource, as that term is defined in Section 4-26-200(p) of this Code, where a deed restriction has been recorded on the historic resource that requires the owner of the historic resource to comply with Chapter 4-26 of the San Leandro Municipal Code. This deed restriction must be in a form approved by the City Attorney, and must have a term of at least five (5) years. This deed restriction must be recorded on the historic resource as part of the transaction to transfer the historic resource.","No Documentary Transfer Tax shall apply to transfers to or between the United States, state of California, any city, county, city and county, district or any other political subdivision of the state and transfer executed pursuant to eminent domain proceedings by the United States, state of California, any city, county, city and county, district or other political subdivision of the state.","Any deed, instrument or writing by which a person acquires real property in an exchange with the City shall be exempt from the tax imposed pursuant to this article where the real property received by the City is of equal or greater value than the real property received by the other person.","In the case of any realty held by a non-profit corporation, no levy shall be imposed pursuant to this article by reason of any transfer of the realty, if: (1)   the realty is transferred to a limited partnership, of which the non-profit corporation is the general partner; and (2)   the City required such transfer to be made in order to facilitate the use of tax credits and federal affordable housing development assistance. Any person exempt from the tax imposed by this article because of the provisions of Subsection (a) hereof shall pay to the County of Los Angeles the tax that would be owed if such exemption did not exist, and thereafter may apply to the Director of Finance for a refund, which refund shall be made in the same manner as is provided in Section 21.07 of this chapter for refunds of overpayments of Business Taxes.","No Documentary Transfer Tax shall apply to any document making a transfer of community property, or interest among joint tenants or tenants in common provided that: (A) the participating owners have held their respective interest for at least 5 years, or all participating owners acquired their respective interests in the same transaction, however recent; and (B) no grantor receives any consideration beyond a release from any indebtedness secured by the property interest being transferred.","No Documentary Transfer Tax shall apply to any document of interspousal transfer including: (a) transfer to a trustee for the beneficial use of a spouse or the surviving spouse of a deceased transferor, or by the trustee of such a trust to the spouse of the trustor; (b) transfers which take place upon the death of a spouse; (c) transfer to a spouse or former spouse in connection with a property settlement agreement or decree of dissolution of marriage or legal separation; (d) the creation, transfer, or termination, solely between spouses, of any co-owner\u2019s interest.","No Documentary Transfer Tax shall apply to any document of transfer between parents and children of a single family residence or of property zoned single family residential. The term \u201Cchildren\u201D shall include natural and adopted children, as well as stepchildren if they are legally stepchildren at the time of transfer, and any son-in-law-or daughter-in-law if they are legally in such relationship at the time of transfer.","No Documentary Transfer Tax shall apply to any instrument by which realty is conveyed by the United States or any agency or instrumentality thereof, any state or territory, or political subdivision thereof, or the District of Columbia, pursuant to any agreement whereby the purchaser agrees to immediately reconvey the realty to the exempt agency.","No Documentary Transfer Tax shall apply to any instrument by which the United States or any agency or instrumentality thereof, any state or territory, or political subdivision thereof, or the District of Columbia, conveys to a nonprofit corporation realty, the acquisition, construction, or improvement of which was financed or refinanced by obligations issued by the ","No Documentary Transfer Tax shall apply to the making, delivery, or filing of an instrument by which a co-owner or the co-owners of real property release his or her or their ownership interest to the other co-owner or co-owners of the real property without receiving, directly or indirectly, any monetary or other valuable consideration, where the co-owners are co-borrowers under a loan to finance or refinance the acquisition of or the construction of improvements upon the real property.","No Documentary Transfer Tax shall apply with respect to any instrument which purports to convey, divide, or allocate community, quasi-community, or quasi-marital realty assets or realty assets held in joint tenancy or tenancy in common between spouses, provided: (1) the owner-spouses acquired their respective interests in the same transaction; and (2) no consideration beyond a release from any indebtedness secured by the interest in realty conveyed is received by the transferor-spouse in effecting such conveyance. This subsection (b) shall not extend to the conveyance of realty assets wholly owned by the transferor-spouse to a transferee-spouse.","Any transfer, if made during the term of the marriage or domestic partnership, between husband and wife or duly registered domestic partners, shall be tax-exempt interspousal transfers.","No tax will apply to transfers of partial interests in property to a co-signor or from a co-owner as required pursuant to a verifiable demand by a lender in order to secure the debt for such transfer. Specifically, the subsequent removal or reinstatement of such co-owner or co-signing party(s) must be effected within seven years of the close of escrow pertaining to such loan in order to qualify for the exemption herein. Nothing herein contained shall be deemed to exclude the amount of any such indebtedness from being included in the ""value of consideration"" pursuant to Section 4.20.030 in connection with transfers which are not made solely to secure a debt.",No tax will apply to any reconveyance of real property from a family member who obtained a legal interest in the real property solely to satisfy a lender\'s requirement in qualifying for a loan to purchase or refinance that property; and the property is the principal residence of the transferee.,"No tax shall apply to the making, delivering, or filing of conveyances to make effective any plan of reorganization or adjustment confirmed under the federal Bankruptcy Act, as amended, if the making, delivery, or filing of instruments of transfer or conveyances occurs within five (5) years from the date of such confirmation, approval, or change and is expressly provided for therein.","No tax shall apply to transfers to make effective any plan of corporate reorganization or adjustment if: 1. Confirmed under the Bankruptcy Act, as amended, 2. Approved in an equity receivership proceeding in a court involving a railroad corporation as defined in Section 77(m) of the Bankruptcy Act, as amended, and 3. Approved in an equity receivership proceeding in a court involving a corporation, as defined in Section 106(3) of the Bankruptcy Act, as amended.","No tax shall apply to the making, delivering, or filing of conveyances to make effective any plan of reorganization or adjustment: (a) confirmed under the federal Bankruptcy Act, as amended, (b) approved in an equity receivership in a court involving a railroad as defined in subdivision (m) of Section\xA0205\xA0of Title\xA011\xA0of the United States Code, as amended, (c) approved in an equity receivership in a court involving a corporation, as in subdivision (3) of Section 506 of 11 of the United States Code, as amended, or (d) hereby a mere change in identity, form or place or organization is effected, if the making, delivery, or filing of instruments of transfer or conveyances occurs within five (5) years from the date of such confirmation, approval, or change and is expressly provided for therein."\nCA;Alameda;Alameda;12.00,x,x,x,x,x,x,x,x,x,x,,,,,,,,x,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Alameda;Albany;11.50,x,,x,x,x,,x,x,x,,,x,,,,,,,x,x,x,x,x,,,,,,,,,,,,,,,,,,,\nCA;Alameda;Berkeley;15.00,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Alameda;Dublin,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Alameda;Emeryville;12.00,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Alameda;Fremont,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Alameda;Hayward;4.50,x,x,,x,,x,x,x,x,,,x,,,,,,,x,x,x,x,,x,,,,,,,,,,,,,,,,x,,\nCA;Alameda;Livermore,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Alameda;Newark,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Alameda;Oakland;15.00,x,,,x,x,x,x,,x,,,x,,,,,,,,,x,,,,x,,x,,,,,,,,,,x,,,,x,\nCA;Alameda;Piedmont;13.00,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Alameda;Pleasanton,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Alameda;San Leandro;6.00,x,x,,x,,x,x,x,x,,,,,,,,,,,,,,,x,,x,,,,,,,,,,,,,,x,,\nCA;Alameda;Union City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nAlpine County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nNo Cities,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nAmador County\xA0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Amador;Amador,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Amador;Ione,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Amador;Jackson,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Amador;Plymouth,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Amador;Sutter Creek,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nButte County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Butte;Biggs,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Butte;Chico,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Butte;Gridley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Butte;Oroville,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Butte;Paradise,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCalaveras County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Calaveras;Angels Camp,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nColusa County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Colusa;Colusa,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Colusa;Williams,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nContra Costa County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Antioch,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Brentwood,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Clayton,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Concord,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Danville,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;El Cerrito,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Hercules,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Lafayette,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Martinez,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Moraga,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Oakley,x,,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,x\nCA;Contra Costa;Orinda,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Pinole,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Pittsburg,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Pleasant Hill,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Richmond;7.00 XX,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;San Pablo,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;San Ramon,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Contra Costa;Walnut Creek,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nDel Norte County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Del Norte;Crescent City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nEl Dorado County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;El Dorado;Placerville,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;El Dorado;South Lake Tahoe,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nFresno County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Clovis,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Coalinga,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Firebaugh,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Fowler,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Fresno,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Huron,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Kerman,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Kingsburg,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Mendota,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Orange Cove,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Parlier,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Reedley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Sanger,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Fresno;Selma,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nGlenn County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Glenn;Orland,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Glenn;Willows,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nHumboldt County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Humboldt;Arcata,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Humboldt;Blue Lake,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Humboldt;Eureka,x,x,x,x,x,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Humboldt;Ferndale,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Humboldt;Fortuna,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Humboldt;Rio Dell,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Humboldt;Trinidad,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nImperial County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Imperial;Brawley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Imperial;Calexico,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Imperial;Calipatria,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Imperial;El Centro,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Imperial;Holtville,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Imperial;Imperial,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Imperial;Westmorland,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nInyo County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Inyo;Bishop,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nKern County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Arvin,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Bakersfield,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;California City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Delano,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Maricopa,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Mcfarland,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Ridgecrest,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Shafter,x,x,x,x,,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Taft,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Tehachapi,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kern;Wasco,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nKings County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kings;Avenal,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kings;Corcoran,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kings;Hanford,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Kings;Lemoore,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nLake County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Lake;Clearlake,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Lake;Lakeport,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nLassen County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Lassen;Susanville,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nLos Angeles County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Agoura Hills,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Alhambra,x,x,x,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Arcadia,,x,x,x,,,,,,,,,,x,,x,,,,,x,x,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Artesia,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Avalon,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Azusa,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Baldwin Park,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Bell,x,x,x,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Bellflower,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Bell Gardens,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Beverly Hills,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Bradbury,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Burbank,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Calabasas,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Carson,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Cerritos,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Claremont,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Commerce,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Compton,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Covina,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Cudahy,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Culver City;4.50,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Diamond Bar,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Downey,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Duarte,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;El Monte,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;El Segundo,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Gardena,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Glendale,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Glendora,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Hawaiian Gardens,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Hawthorne,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Hermosa Beach,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Hidden Hills,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Huntington Park,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Industry,x,,x,x,,x,x,,,,,x,,,,,,,,,,,,,,,x,,,,,,,,,,,,,,,\nCA;Los Angeles;Inglewood,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Irwindale,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;La Canada Flintridge,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;La Habra Heights,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Lakewood,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;La Mirada,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Lancaster,x,x,x,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;La Puente,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;La Verne,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Lawndale,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Lomita,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Long Beach,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Los Angeles;4.50,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,x,x,,,,,,,,,,,,,\nCA;Los Angeles;Lynwood,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Malibu,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Manhattan Beach,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Maywood,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Monrovia,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Montebello,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Monterey Park,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Norwalk,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Palmdale,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Palos Verdes Estates,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Paramount,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Pasadena,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Pico Rivera,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Pomona;2.20,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Rancho Palos Verdes,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Redondo Beach;2.20,x,x,x,x,,x,x,,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Rolling Hills,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Rolling Hills Estates,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Rosemead,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;San Dimas,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;San Fernando,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;San Gabriel,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;San Marino,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Santa Clarita,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Santa Fe Springs,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Santa Monica;3.00,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Sierra Madre,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Signal Hill,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;South El Monte,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;South Gate,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;South Pasadena,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Temple City,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Torrance,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Vernon,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Walnut,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;West Covina,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;West Hollywood,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Westlake Village,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Los Angeles;Whittier,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nMadera County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Madera;Chowchilla,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Madera;Madera,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nMarin County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;Belvedere,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;Corte Madera,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;Fairfax,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;Larkspur,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;Mill Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;Novato,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;Ross,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;San Anselmo,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;San Rafael;2.00,x,x,,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,x,,\nCA;Marin;Sausalito,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Marin;Tiburon,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nMariposa County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nNo Cities,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nMendocino County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Mendocino;Fort Bragg,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Mendocino;Point Arena,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Mendocino;Ukiah,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Mendocino;Willits,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nMerced County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Merced;Atwater,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Merced;Dos Palos,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Merced;Gustine,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Merced;Livingston,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Merced;Los Banos,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Merced;Merced,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nModoc County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Modoc;Alturas,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nMono,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Mono;Mammoth Lakes,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nMonterey County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Carmel-By-The-Sea,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Del Rey Oaks,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Gonzales,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Greenfield,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;King City,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Marina,x,x,x,x,,,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Monterey,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Pacific Grove,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Salinas,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Sand City,x,x,x,x,,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Seaside,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Monterey;Soledad,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nNapa County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Napa;American Canyon,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Napa;Calistoga,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Napa;Napa,x,x,x,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Napa;St Helena,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Napa;Yountville,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nNevada County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Nevada;Grass Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Nevada;Nevada City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Nevada;Truckee,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nOrange County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Aliso Viejo,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Anaheim,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Brea,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Buena Park,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Costa Mesa,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Cypress,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Dana Point,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Fountain Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Fullerton,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Garden Grove,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Huntington Beach,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Irvine,x,x,x,x,x,x,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Laguna Beach,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Laguna Hills,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Laguna Niguel,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Laguna Woods,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;La Habra,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Lake Forest,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;La Palma,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Los Alamitos,x,x,x,x,x,x,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Mission Viejo,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Newport Beach,x,x,x,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Orange,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Placentia,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Rancho Santa Margarita,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;San Clemente,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;San Juan Capistrano,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Santa Ana,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Seal Beach,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Stanton,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Tustin,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Villa Park,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Westminster,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Orange;Yorba Linda,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nPlacer County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Placer;Auburn,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Placer;Colfax,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Placer;Lincoln,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Placer;Loomis,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Placer;Rocklin,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Placer;Roseville,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nPlumas County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Plumas;Portola,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nRiverside County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Banning,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Beaumont,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Blythe,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Calimesa,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Canyon Lake,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Cathedral City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Coachella,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Corona,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Desert Hot Springs,x,x,x,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Eastvale,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Hemet,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Indian Wells,x,x,x,x,,x,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Indio,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Jurupa Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Lake Elsinore,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;La Quinta,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Menifee,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Moreno Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Murrieta,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Norco,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Palm Desert,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Palm Springs,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Perris,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Rancho Mirage,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Riverside;1.10,x,x,x,x,x,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;San Jacinto,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Temecula,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Riverside;Wildomar,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSacramento County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sacramento;Citrus Heights,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sacramento;Elk Grove,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sacramento;Folsom,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sacramento;Galt,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sacramento;Isleton,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sacramento;Rancho Cordova,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sacramento;Sacramento;2.75,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSan Benito County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Benito;Hollister,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Benito;San Juan Bautista,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSan Bernardino County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Adelanto,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Apple Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Barstow,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Big Bear Lake,x,x,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Chino,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Chino Hills,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Colton,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Fontana,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Grand Terrace,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Hesperia,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Highland,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Loma Linda,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Montclair,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Needles,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Ontario,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Rancho Cucamonga,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Redlands,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Rialto,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;San Bernardino,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Twentynine Palms,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Upland,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Victorville,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Yucaipa,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Bernardino;Yucca Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSan Diego County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Carlsbad,x,x,x,x,,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Chula Vista,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Coronado,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Del Mar,x,x,x,x,x,x,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;El Cajon,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Encinitas,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Escondido,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Imperial Beach,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;La Mesa,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Lemon Grove,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;National City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Oceanside,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Poway,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;San Diego,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;San Marcos,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Santee,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Solana Beach,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Diego;Vista,,x,x,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSan Francisco City & County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Francisco;San Francisco,x,x,x,x,x,x,x,,,,"\n\n",,"\n","\n",x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSan Joaquin County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Joaquin;Escalon,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Joaquin;Lathrop,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Joaquin;Lodi,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Joaquin;Manteca,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Joaquin;Ripon,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Joaquin;Stockton,x,x,x,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Joaquin;Tracy,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSan Luis Obispo County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Luis Obispo;Arroyo Grande,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Luis Obispo;Atascadero,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Luis Obispo;El Paso De Robles,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Luis Obispo;Grover Beach,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Luis Obispo;Morro Bay,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Luis Obispo; Beach,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Luis Obispo;San Luis Obispo,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSan Mateo County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Atherton,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Belmont,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Brisbane,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Burlingame,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Colma,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Daly City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;East Palo Alto,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Foster City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Half Moon Bay,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Hillsborough,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Menlo Park,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Millbrae,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Pacifica,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Portola Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Redwood City,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;San Bruno,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;San Carlos,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo; San Mateo;.5% of property value,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,x,x,x,,,,,,,,,,\nCA;San Mateo;South San Francisco,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;San Mateo;Woodside,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSanta Barbara County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Barbara;Buellton,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Barbara;Carpinteria,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Barbara;Goleta,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Barbara;Guadalupe,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Barbara;Lompoc,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Barbara;Santa Barbara,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Barbara;Santa Maria,x,x,x,x,,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Barbara;Solvang,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSanta Clara County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Campbell,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Cupertino,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Gilroy,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Los Altos,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Los Altos Hills,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Los Gatos,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Milpitas,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Monte Sereno,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Morgan Hill,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Mountain View;3.30,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Palo Alto;3.30,x,x,x,x,,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,x,x,x,x,,,,,,\nCA;Santa Clara;San Jose;3.30,x,x,x,x,,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,x,,x,,,\nCA;Santa Clara;Santa Clara,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Saratoga,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Clara;Sunnyvale,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSanta Cruz County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Cruz;Capitola,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Cruz;Santa Cruz,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Cruz;Scotts Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Santa Cruz;Watsonville,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nShasta County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Shasta;Anderson,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Shasta;Redding,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Shasta;Shasta Lake,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSierra County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sierra;Loyalton,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSiskiyou County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Siskiyou;Dorris,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Siskiyou;Dunsmuir,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Siskiyou;Etna,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Siskiyou;Fort Jones,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Siskiyou;Montague,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Siskiyou;Mount Shasta,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Siskiyou;Tulelake,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Siskiyou;Weed,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Siskiyou;Yreka,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSolano County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Solano;Benicia,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Solano;Dixon,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Solano;Fairfield,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Solano;Rio Vista,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Solano;Suisun City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Solano;Vacaville,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Solano;Vallejo;3.30,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSonoma County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sonoma;Cloverdale,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sonoma;Cotati,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sonoma;Healdsburg,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sonoma;Petaluma;2.00,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sonoma;Rohnert Park,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sonoma;Santa Rosa;2.00,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sonoma;Sebastopol,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sonoma;Sonoma\xA0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sonoma;Windsor,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nStanislaus County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Stanislaus;Ceres,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Stanislaus;Hughson,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Stanislaus;Modesto,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Stanislaus;Newman,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Stanislaus;Oakdale,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Stanislaus;Patterson,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Stanislaus;Riverbank,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Stanislaus;Turlock,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Stanislaus;Waterford,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nSutter County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sutter;Live Oak,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Sutter;Yuba City,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nTehama County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tehama;Corning,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tehama;Red Bluff,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tehama;Tehama,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nTrinity County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nNo Cities,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nTulare County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tulare;Dinuba,x,x,x,x,,x,,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tulare;Exeter,x,x,x,x,,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tulare;Farmersville,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tulare;Lindsay,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tulare;Porterville,x,x,x,x,,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tulare;Tulare\xA0,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tulare;Visalia,x,x,x,x,,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tulare;Woodlake,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nTuolumne County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Tuolumne;Sonora,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nVentura County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Camarillo,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Fillmore,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Moorpark,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Ojai,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Oxnard,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Port Hueneme,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Santa Paula,x,x,x,x,x,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Simi Valley,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Thousand Oaks,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Ventura;Ventura,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nYolo County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Yolo;Davis,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Yolo;West Sacramento,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Yolo;Winters,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Yolo;Woodland;1.10,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nYuba County,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Yuba;Marysville,x,x,x,x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Yuba;Wheatland,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Yuba;Goleta,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nCA;Yuba;Rancho Cordova,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,';
	
	var list = (0, _csv2array2.default)(csv, ',');
	
	var exemption = exports.exemption = function exemption(county, city) {
	  var reg = new RegExp('^CA;' + county + ';' + city);
	  return list.find(function (e) {
	    return e[0].match(reg);
	  });
	};
	
	var label = exports.label = list[0];
	var note = exports.note = list[1];
	
	var indexArray = exports.indexArray = (0, _sort.getExemptionListIndexArray)(list);

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{ name: 'Los Angeles', tax: 1.10 }, { name: 'San Francisco', tax: 3 }, { name: 'Alameda', tax: 1.10 }, { name: 'Alpine', tax: 1.10 }, { name: 'Amador', tax: 1.10 }, { name: 'Butte', tax: 1.10 }, { name: 'Calaveras', tax: 1.10 }, { name: 'Colusa', tax: 1.10 }, { name: 'Contra Costa', tax: 1.10 }, { name: 'Del Norte', tax: 1.10 }, { name: 'El Dorado', tax: 1.10 }, { name: 'Fresno', tax: 1.10 }, { name: 'Glenn', tax: 1.10 }, { name: 'Humboldt', tax: 1.10 }, { name: 'Imperial', tax: 1.10 }, { name: 'Inyo', tax: 1.10 }, { name: 'Kern', tax: 1.10 }, { name: 'Kings', tax: 1.10 }, { name: 'Lake', tax: 1.10 }, { name: 'Lassen', tax: 1.10 }, { name: 'Madera', tax: 1.10 }, { name: 'Marin', tax: 1.10 }, { name: 'Mariposa', tax: 1.10 }, { name: 'Mendocino', tax: 1.10 }, { name: 'Merced', tax: 1.10 }, { name: 'Modoc', tax: 1.10 }, { name: 'Mono', tax: 1.10 }, { name: 'Monterey', tax: 1.10 }, { name: 'Napa', tax: 1.10 }, { name: 'Nevada', tax: 1.10 }, { name: 'Orange', tax: 1.10 }, { name: 'Placer', tax: 1.10 }, { name: 'Plumas', tax: 1.10 }, { name: 'Riverside', tax: 1.10 }, { name: 'Sacramento', tax: 1.10 }, { name: 'San Benito', tax: 1.10 }, { name: 'San Bernardino', tax: 1.10 }, { name: 'San Diego', tax: 1.10 }, { name: 'San Francisco', tax: 1.10 }, { name: 'San Joaquin', tax: 1.10 }, { name: 'San Luis Obispo', tax: 1.10 }, { name: 'San Mateo', tax: 1.10 }, { name: 'Santa Barbara', tax: 1.10 }, { name: 'Santa Clara', tax: 1.10 }, { name: 'Santa Cruz', tax: 1.10 }, { name: 'Shasta', tax: 1.10 }, { name: 'Sierra', tax: 1.10 }, { name: 'Siskiyou', tax: 1.10 }, { name: 'Solano', tax: 1.10 }, { name: 'Sonoma', tax: 1.10 }, { name: 'Stanislaus', tax: 1.10 }, { name: 'Sutter', tax: 1.10 }, { name: 'Tehama', tax: 1.10 }, { name: 'Trinity', tax: 1.10 }, { name: 'Tulare', tax: 1.10 }, { name: 'Tuolumne', tax: 1.10 }, { name: 'Ventura', tax: 1.10 }, { name: 'Yolo', tax: 1.10 }, { name: 'Yuba', tax: 1.10 }];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.indexArray = exports.note = exports.label = exports.exemption = undefined;
	
	var _csv2array = __webpack_require__(35);
	
	var _csv2array2 = _interopRequireDefault(_csv2array);
	
	var _sort = __webpack_require__(36);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var csv = 'State Name;County Name;Tax,Conveyance to secure a debt,Governmental agency acquiring title,Reorganization or adjustment conveyances,Securities and Exchange Commission order conveyances,Transfers without a change in proportional ownership,Transfers in connection with foreclosure,Transfers in connection with dissolution of marriage,Conveyances by state,Conveyances to nonprofit corporations,Gifts and transfers by reason of death,Agent transfers,Transfers confirming title,Partitions,Transfers for the benefit of creditors,Seismic retrofitting improvements ,Leasehold instruments,Certain conversions of stock cooperatives to condominium units,Transfers between spouses and transfers between domestic partners\n,"No Documentary Transfer Tax shall be due upon any mortgage or deed of trust given to secure a debt, or upon a release of mortgage or deed of reconveyance upon satisfaction of such debt.","Any deed, instrument or writing to which the United States or agency or instrumentality thereof, any state or territory, or political subdivision thereof, is a party shall be exempt when the exempt entity of government is acquiring title.","No Documentary Transfer Tax shall be due upon any document made to effectuate a plan or reorganization or adjustment: (1) confirmed in a bankruptcy proceeding under Title 11 of the United States Code, as amended; (2) approved by a court in an equity receivership proceeding involving a corporation or a railroad, as defined in Sections 101(9) and 101(44), respectively, of Title 11 of the United States Code; or (3) whereby a mere change in identity, form or place of organization is effected.","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property to effectuate an order of the Securities Exchange Commission (as defined in Section 1083 of the Internal Revenue Code), provided all of the following conditions are met: (1) the order states that such conveyance is necessary or appropriate to effectuate the provisions of Section 79k of Title 15 of the United States Code, relating to the Public Utility Holding Company Act of 1935; (2) the order specifies the property which is ordered to be conveyed; and (3) the transfer is made in obedience to such order.","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property between an individual or individuals and a legal entity, or between legal entities, if such transfer results solely in a change in the method of holding title, and in which proportional ownership interests in the real property (whether represented by stock, membership interest, partnership interest, cotenancy interest, or otherwise) directly or indirectly, remain the same immediately after the transfer.","No Documentary Transfer Tax shall be due on any document transferring an interest in real property from a mortgagor to a mortgage, or from a trustor to a beneficiary under a deed of trust, where the underlying mortgage or deed of trust encumbers the property being transferred, and where the interest is being transferred as a result of, or in lieu of, foreclosure. The exemption provided in subsection (a) of this section applies only to the extent that consideration for such transfer does not exceed the unpaid indebtedness (including accrued interest and costs of foreclosure), and Documentary Transfer Tax shall be due to the extent that the consideration exceeds the indebtedness.","No Documentary Transfer Tax shall be due upon any document transferring an interest in community, quasi-community or quasi-marital property between spouses, when such transfer is made to effectuate the division or allocation of such property pursuant to a judgment of dissolution, separation or nullity of marriage, or any other order or judgment rendered pursuant to the Family Code, or pursuant to a written agreement between the spouses executed in contemplation of any such order or judgment.","No Documentary Transfer Tax shall be due with respect to any deed, instrument or other writing by which realty is conveyed by the state of California, any political subdivision thereof, or agency or instrumentality of either thereof, pursuant to an agreement whereby the purchaser agrees to immediately reconvey the realty to the exempt agency.","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property by the State of California, any political subdivision thereof, or agency or instrumentality or either thereof, conveys to a nonprofit corporation realty the acquisition, construction, or improvement of which was financed or refinanced by obligations issued by a nonprofit organization on behalf of a government unit, within the meaning of Section 1.103-l(b) of Title 26 of the Code of Federal Regulations or as amended. ","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property by reason of the death of any person, or a transfer by inter vivos gift, whether the interest conveyed is transferred outright or in trust for the benefit of any person or entity.",No Documentary Transfer Tax shall be due upon any document transferring an interest in real property from a principal to his agent or from an agent to his principal.,"No Documentary Transfer Tax shall be due upon any document confirming the grantee\'s vested, legal interest in real property.","No Documentary Transfer Tax shall be due upon documents partitioning real property between/among the owners thereof, provided all of the following conditions are met: (a) all pre-partition owners must continue as owners of the partitioned property; (b) no one shall be named as a grantee who was not a pre-partition owner; and (c) the grantees\' respective interests in the partitioned property must be approximately equal in value (remain in the same proportion).",No Documentary Transfer Tax shall be due upon any document transferring an interest in real property in trust for the benefit of the grantor\'s creditors.,"Any deed, instrument or writing shall be exempt from up to one-third (1/3) of any tax imposed pursuant to this ordinance if: (1) it transfers an interest in real property used as a residence; and (2) after January 1, 2009, the transferor has installed an active solar system, as that term is defined in Revenue & Taxation Code Section 73(b), or has made seismic retrofitting improvements or improvements utilizing earthquake hazard mitigation technologies, as those terms are defined in Revenue & Taxation Code Section 74.5(b), and the transferor has claimed and the Assessor has approved an exclusion from reassessment for the value of that system or those improvements. This partial exemption shall only apply to the initial transfer by the person who installed the active solar system or made the seismic safety improvements. The amount of this partial exemption shall not exceed the transferor\'s cost of seismic retrofitting improvements or the active solar system. Multi-family residential properties are eligible for this partial exemption.","No Documentary Transfer Tax shall be due with respect to any deed, instrument or writing which creates, terminates, or transfers a leasehold interest having a remaining term (including renewal options) of less than 35 years.","No Documentary Transfer Tax shall apply with respect to any deed, instrument, or writing in connection with the conversion to condominium units of the following kind of stock cooperative project: a stock cooperative project (a) which is entitled to an exemption from the annual limitation imposed on the number of conversions and the annual condominium conversion lottery pursuant to Section 1396 of the San Francisco Subdivision Code; and (b) wherein 80 percent or more of the condominium units serve as security for loans in favor of the City and County of San Francisco, pursuant to the Homeownership Assistance Loan Fund (under San Francisco Administrative Code Section 10.100 \u2013 08) or its predecessor program, as identified by the Mayor\'s Office of Housing, prior to the conversion.","No Documentary Transfer Tax shall apply to transfers of real property between spouses or between domestic partners. Individuals of the same sex who obtain a certificate of marriage or other official government document of any state or political subdivision thereof acknowledging their union in marriage shall be deemed to be in a ""domestic partnership"" that qualifies for the exemption under subsection (a) in the event such individuals are denied the legal status of marriage or the legal rights, privileges and obligations of spouses, or the marriage certificate or other official government document acknowledging their marriage is invalidated or revoked in a final judgment or by operation of law, because such individuals are of the same sex."\nCA;Alameda;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Alpine;1.10,x,x,x,x,,x,x,x,x,,,,,,,,,\nCA;Amador;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Butte;1.10,x,x,x,x,x,x,x,x,x,x,x,x,x,"x\n",,,,\nCA;Calaveras;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Colusa;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Contra Costa;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Del Norte;1.10,x,x,x,x,x,x,x,x,x,x,"\n",,,,,,,\nCA;El Dorado;1.10,x,x,x,x,x,,,,,,,,,,,,,\nCA;Fresno;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Glenn;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Humboldt;1.10,x,x,x,x,,x,,,,,,,,,,,,\nCA;Imperial;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Inyo;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Kern;1.10,x,x,x,x,,x,x,,,,,,,,,,,\nCA;Kings;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,\nCA;Lake;1.10,x,x,x,x,,x,x,,,,,,,,,,,\nCA;Lassen;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Los Angeles;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Madera;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Marin;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Mariposa;1.10,x,x,x,,,x,,,,,,,,,,,,\nCA;Mendocino;1.10,x,x,x,x,,x,x,,,,,,,,,,,\nCA;Merced;1.10,x,x,x,,,x,,,,,,,,,,,,\nCA;Modoc;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Mono;1.10,x,x,x,x,x,x,x,x,x,,,,,,,,,\nCA;Monterey;1.10,x,x,x,,x,,,,,,,,,,,,,\nCA;Napa;1.10,x,x,x,,x,x,x,x,x,,,,,,,,,\nCA;Nevada;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Orange;1.10,x,x,x,x,,x,x,x,x,x,,,,,,,,\nCA;Placer;1.10,x,x,x,x,,x,x,x,x,x,,,,,,,,\nCA;Plumas;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Riverside;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,\nCA;Sacramento;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,\nCA;San Benito;1.10,x,x,x,x,x,,,,,,,,,,,,,\nCA;San Bernardino;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;San Diego;1.10,x,x,x,x,x,,,,,,,,,,,,,\nCA;San Francisco;1.10,x,x,x,x,x,x,x,,,,"\n\n",,"\n","\n",x,x,x,x\nCA;San Joaquin;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;San Luis Obispo;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;San Mateo;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,\nCA;Santa Barbara;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Santa Clara;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,\nCA;Santa Cruz;1.10,x,x,x,x,,x,x,,,,,,,,,,,\nCA;Shasta;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Sierra;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Siskiyou;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Solano;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Sonoma;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Stanislaus;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Sutter;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Tehama;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Trinity;1.10,x,x,x,x,,x,,,,,,,,,,,,\nCA;Tulare;1.10,x,x,x,x,,x,,,,,,,,,,,,\nCA;Tuolumne;1.10,x,x,x,x,,x,,,,,,,,,,,,\nCA;Ventura;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Yolo;1.10,x,x,x,x,,,,,,,,,,,,,,\nCA;Yuba;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,';
	
	var list = (0, _csv2array2.default)(csv, ',');
	
	var exemption = exports.exemption = function exemption(county) {
	  var reg = new RegExp('^CA;' + county);
	  return list.find(function (e) {
	    return e[0].match(reg);
	  });
	};
	
	var label = exports.label = list[0];
	var note = exports.note = list[1];
	
	var indexArray = exports.indexArray = (0, _sort.getExemptionListIndexArray)(list);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.SideBar = SideBar;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(5);
	
	var _SideBar = {
	  "sidebar": "_1YLBu1Iy70Vdzaqx2-x1UN",
	  "hide": "_3kIq3UJAkrSCCmoc6PYo-M",
	  "content-container": "LxUQ-BCpffec3XtqdwYB_",
	  "content": "_349phyE16WqUZqUGOa6GCl",
	  "block": "lOR5QDdJCsZL9up_Rn8UI",
	  "title": "_2eaak9DVzA-DDaZvYeKL1q",
	  "text": "_1IG2WiRBn72xlKe7oYw8wo",
	  "link": "_3IUBBdH8PLq5DpO7wec8K0",
	  "hover-icon": "mxGrGrk4xg9MaZAFyKjCf"
	};
	
	var _SideBar2 = _interopRequireDefault(_SideBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('i', {
	  className: 'fa fa-envelope',
	  'aria-hidden': 'true'
	});
	
	var _ref2 = _jsx('i', {
	  className: 'fa fa-info-circle',
	  'aria-hidden': 'true'
	});
	
	function SideBar(props) {
	  var arrow = props.show ? 'fa-arrow-left' : 'fa-arrow-right';
	
	  return _jsx('div', {
	    className: _SideBar2.default.sidebar + ' ' + (props.show ? '' : _SideBar2.default.hide)
	  }, void 0, _jsx('div', {
	    className: _SideBar2.default['content-container']
	  }, void 0, _jsx('div', {
	    className: _SideBar2.default.content
	  }, void 0, _jsx('div', {
	    className: _SideBar2.default.block
	  }, void 0, _jsx('div', {
	    className: _SideBar2.default.title
	  }, void 0, 'Save Place'), _jsx('div', {
	    className: _SideBar2.default.text
	  }, void 0, 'Running out of time? Make sure to click "Save Place" to save and come back later.')), _jsx('div', {
	    className: _SideBar2.default.block
	  }, void 0, _jsx('div', {
	    className: _SideBar2.default.title
	  }, void 0, 'Need Help?'), _jsx('div', {
	    className: _SideBar2.default.text
	  }, void 0, 'Not sure what to do? Click here and let us know how we can help! We would love to hear from you.'), _jsx('div', {}, void 0, _jsx('a', {
	    className: _SideBar2.default.link,
	    onClick: props.showContact
	  }, void 0, _ref, '\xA0\xA0 Send us a message '))), _jsx('div', {
	    className: _SideBar2.default.block
	  }, void 0, _jsx('div', {
	    className: _SideBar2.default.title
	  }, void 0, 'Need more information?'), _jsx('div', {
	    className: _SideBar2.default.text
	  }, void 0), _jsx('div', {}, void 0, _jsx('a', {
	    className: _SideBar2.default.link
	  }, void 0, _ref2, '\xA0\xA0 Click for more info. ')))), _jsx('div', {
	    className: _SideBar2.default['hover-icon'],
	    onClick: props.toggle
	  }, void 0, _jsx('i', {
	    className: 'fa ' + arrow,
	    'aria-hidden': 'true'
	  }))));
	}
	
	exports.default = SideBar;

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: "ca_professional_corporation",
	  description: "Creating The California Professional Corporation",
	  start: "input_1",
	  kind: "Form",
	  step: 12,
	  node: [{
	    id: "input_1",
	    kind: "Input",
	    content: {
	      question: "What will be the profession of your corporation?",
	      fields: [{ kind: "text", store: "company_profession" }],
	      next: "input_2",
	      note: {
	        title: 'What will be the profession of your corporation?',
	        content: "You should write the formal name of your profession, describing your profession as what the profession is, not what the professionals are called. For example, a lawyer would indicate “law”, a dentist would indicate “dentistry”, an accountant would indicate “accountancy”, a marriage and family therapist would indicate “marriage and family therapy”. You can ask yourself, I engage in the profession of ..."
	      }
	    }
	  }, {
	    id: "input_2",
	    kind: "Input",
	    content: {
	      question: "What will be the name of your company?<br />\n                <small>Your profession may have restrictions on the name of your corporation, consult your regulatory board for any restrictions</small>",
	      fields: [{ kind: "text", store: "company_name" }],
	      next: "input_3",
	      note: {
	        title: 'Name of Corporation',
	        content: "<ul>\n            <li>The name of your professional corporation must meet any requirements of the state board or agency which controls your profession. There may be words that are specifically prohibited, authorized, or required to be included in the name of your professional corporation. For example, a lawyer\u2019s corporation must be a professional corporation and must include the words \u201Cprofessional corporation\u201D or \u201Claw corporation.\u201D By contrast, an acupuncturist\u2019s corporation must contain the word \u201Cacupuncture\u201D or \u201Cacupuncturist\u201D along with wording or abbreviations that denote corporate existence. (See California Business and Professions Code \xA7 4978, available here - http://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=BPC&division=2.&title=&part=&chapter=12.&article=7.) Check with your governing body for any naming restrictions on your professional corporation. A list of state boards and agencies is available here - http://www.dca.ca.gov/about_dca/entities.shtml.</li>\n            <li>Further, the name of your business cannot be misleading or confusingly similar to that of a preexisting corporation. You can check search engines and https://businesssearch.sos.ca.gov/ to see if there is a preexisting corporation with a similar name. A confusingly similar name does not have to be exactly the same, it includes subtle differences \u2013 like upper instead of lower case letters; \u201C&\u201D instead of \u201Cand\u201D; or \u201C7\u201D instead of \u201Cseven\u201D. Registering a new corporation with a substantially similar name to an existing corporation requires written consent and approval by the California Secretary of State.</li>\n            <li>Your corporate name cannot include the words \u201Cbank\u201D, \u201Ccredit union\u201D, \u201Ctrust\u201D, \u201Ctrustee\u201D, or related words unless you have a certificate of approval of the Commissioner of Business Oversight, or are forming a corporation pursuant to California Banking Law.</li>\n            <li>You may also want to consider whether your corporate name will be eligible for trademark protection (see section on Trademark for more information).</li>\n            <li>You should input the entire name of the company as you would like it to appear on the records of the California Secretary of State.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_3",
	    kind: "Input",
	    content: {
	      question: "What will be the primary address of the company?",
	      fields: [{ kind: "text", store: "company_address_street", placeholder: "Street" }, { kind: "text", store: "company_address_city", placeholder: "City" }, { kind: "text", store: "company_address_state", placeholder: "State" }, { kind: "text", store: "company_address_zipcode", placeholder: "ZIP Code" }],
	      next: "single_4",
	      note: {
	        title: 'Address of Corporation',
	        content: "<ul>\n            <li>You must provide the initial street address and the initial mailing address if different from the street address.</li>\n            <li>You should note this address will be a public record.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "single_4",
	    kind: "Single",
	    content: {
	      question: "What is the total number of shares the corporation will be authorized to issue?",
	      fields: [{ kind: "choice", label: "1,000,000", value: 1000000 }, { kind: "choice", label: "100,000", value: 100000 }, { kind: "number", label: "Other" }],
	      store: "number_of_shares",
	      next: "input_5",
	      note: {
	        title: 'Number of Shares',
	        content: "<ul>\n            <li>Authorized shares are those which the company is allowed to issue \u2013 shares only become \u201Cissued\u201D once they are sold to someone. All shareholders of your professional corporation must be licensed.</li>\n            <li>Shares that are authorized but not yet issued are retained by the corporation (commonly called \u201Ctreasury shares\u201D).</li>\n            <li>You can only issue (or sell) as many shares as you have authorized. If you later decide you want to authorize more shares, you will have to pay a fee to the state to amend your articles of incorporation (the paperwork you file with the state of California to establish your corporation). In California, unlike Delaware, there is no an additional tax or fee for having a higher number of authorized shares.</li>\n            <li>The total number of shares is somewhat arbitrary; the more important part is the overall percentage of ownership. Owning one out of one hundred shares is the same as owning one million out of one hundred million shares. However, authorizing more shares can make it easier to issue shares to more people. For example, if you only authorize 10 shares, you can only issue shares to 10 people (without issuing fractional shares), and only in increments of 10% (like 10%, 20%, 30%, etc). By authorizing 100 shares, you could issue shares to 100 people, and in increments of 1% (like a 33% interest for example). In determining the total amount to authorize, consider the future of the corporation \u2013 will you issue stock or options to employees, directors, or investors?</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_5",
	    kind: "Input",
	    content: {
	      question: "Who will incorporate the company?",
	      fields: [{ kind: "text", store: "incorporator_name_firstname", placeholder: "First Name" }, { kind: "text", store: "incorporator_name_lastname", placeholder: "Last Name" }],
	      next: "input_6",
	      note: {
	        title: 'Name of incorporator',
	        content: "<ul>\n            <li>The incorporator is the person who is organizing the corporation. The incorporator signs documents and acts for the corporation until the board of directors is elected.</li>\n            <li>The incorporator can be any adult; it need not be an officer, director, or shareholder of the corporation.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_6",
	    kind: "Input",
	    content: {
	      question: "Who will serve as the registered agent of the company?",
	      fields: [{ kind: "text", store: "registered_agent_name" }],
	      next: "single_7",
	      note: {
	        title: 'Name of registered agent',
	        content: "<ul>\n            <li>The registered agent is the person who receives official correspondence for the corporation. For example, the registered agent would be served (physically handed the papers) if the corporation were sued.</li>\n            <li>The registered agent should agree beforehand to accept service of process on behalf of the corporation.</li>\n            <li>The registered agent can be either an individual who resides in California or an active California corporation. Your corporation cannot be its own registered agent.\n              <ul>\n                <li>The individual can be an officer, director, or shareholder of the company, or any other adult.</li>\n                <li>A corporate registered agent must have filed a 1505 Certificate with the California Secretary of State.\n                  <ul>\n                    <li>You can check https://businessfilings.sos.ca.gov/frmlist1505s.asp to see if a corporation has filed a 1505 Certificate and to ensure the spelling of the corporation\u2019s name.</li>\n                    <li>If the corporation has not filed a 1505 Certificate, it must register, which requires the corporation:\n                      <ul>\n                        <li>Be an active, registered California corporation,</li>\n                        <li>Pay a $30 filing fee, and</li>\n                        <li>Fill out and submit a form.</li>\n                      </ul>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n\n            <li>There are services which will serve as your corporation\u2019s registered agent for a fee.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "single_7",
	    kind: "Single",
	    content: {
	      question: "Who will incorporate the company?",
	      fields: [{ kind: "choice", label: "Person", next: "input_8" }, { kind: "choice", label: "Corporation", next: "yesno_9" }],
	      note: {
	        title: 'Person or corporation',
	        content: "<ul>\n            <li>As noted, your registered agent can be either a person or a certified corporation</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_8",
	    kind: "Input",
	    content: {
	      question: "What is <strong>${registered_agent_name}</strong>'s primary address?",
	      fields: [{ kind: "text", store: "registered_agent_address_street", placeholder: "Street" }, { kind: "text", store: "registered_agent_address_city", placeholder: "City" }, { kind: "text", store: "registered_agent_address_state", placeholder: "State" }, { kind: "text", store: "registered_agent_address_zipcode", placeholder: "ZIP Code" }],
	      next: "final_1",
	      note: {
	        title: 'Address of registered agent',
	        content: "<ul>\n            <li>If the registered agent is a person\n              <ul>\n                <li>Must be a California address, it can be a business or residence street address.</li>\n                <li>Cannot be a P.O. Box, \u201Cin care of\u201D, or have a city abbreviation (i.e., not \u201CLA\u201D)</li>\n                <li>You should note that this address will be a public record.</li>\n              </ul>\n            </li>\n            <li>The address of the registered agent is not required if the agent is a corporation.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "yesno_9",
	    kind: "YesNo",
	    content: {
	      question: "Note that you may only select a corporation that is registered with the California Secretary of State as a Registered Corporate Agent for service of process. Is <strong>${registered_agent_name}</strong> a Registered Corporate Agent?",
	      fields: [{ kind: "choice", label: "Yes", next: "final_2" }, { kind: "choice", label: "No", next: "input_10" }],
	      note: {
	        title: 'Corporate Registered Agent',
	        content: "<ul>\n            <li>A corporate registered agent must have filed a 1505 Certificate with the California Secretary of State.</li>\n            <li>You can check <a href='https://businessfilings.sos.ca.gov/frmlist1505s.asp'>Here</a> to see if a corporation has filed a 1505 Certificate and to ensure the spelling of the corporation\u2019s name.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_10",
	    kind: "Input",
	    content: {
	      question: 'Please select an individual to be your registered agent. Who will serve as the registered agent of the company?',
	      fields: [{ kind: "text", store: "registered_agent_name" }],
	      next: "input_8",
	      note: {
	        title: 'Individual registered agent',
	        content: "<ul>\n            <li>The registered agent is the person who receives official correspondence for the corporation. For example, the registered agent would be served (physically handed the papers) if the corporation were sued.</li>\n            <li>The registered agent should agree beforehand to accept service of process on behalf of the corporation.</li>\n            <li>Please select an individual who resides in California to be your registered agent. You can select any adult; your registered agent can, but does not have to be, a founder, director, or shareholder of your corporation.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "final_1",
	    kind: "Final",
	    content: {
	      kind: "Form",
	      form: "ca_form_articles_of_professional_incorporation_1"
	    }
	  }, {
	    id: "final_2",
	    kind: "Final",
	    content: {
	      kind: "Form",
	      form: "ca_form_articles_of_professional_incorporation_2"
	    }
	  }]
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: "ca_s_corporation",
	  description: "Creating The California S-Corporation",
	  start: "single_1",
	  kind: "Form",
	  step: 12,
	  node: [{
	    id: "single_1",
	    kind: "Single",
	    content: {
	      question: "In which state would you like to incorporate your company?",
	      fields: [{ kind: "choice", label: "California", next: "single_2" }, { kind: "choice", label: "Delaware", next: "Creating the Delware" }],
	      note: {
	        title: 'State of incorporation',
	        content: "<ul>\n            <li>You can incorporate your business in any state, even if you are not actually going to be conducting business there. However, you will be required to provide an address in the state of incorporation. If you want to incorporate in Delaware but do not have a Delaware address, there are services which will provide a registered agent address in Delaware.</li>\n            <li>In deciding in which state to incorporate, it is important to note that there may be adverse tax consequences to incorporating in one state over another. For example, if you incorporate in Delaware, but conduct all of your business in California, you will still be required to pay a Delaware franchise tax in addition to California taxes. If you incorporate in California and conduct all of your business in California, you will not pay Delaware taxes.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "goto_1",
	    kind: "Goto",
	    content: {
	      kind: "form",
	      id: "ca_professional_corporation"
	    }
	  }, {
	    id: "single_2",
	    kind: "Single",
	    content: {
	      question: "What will be the primary business of your company?",
	      fields: [{ kind: "choice", label: "Real Estate Investment" }, { kind: "choice", label: "A Profession", next: "yesno_2" }, { kind: "choice", label: "Personal Services (other than a Profession)" }, { kind: "choice", label: "Restaurant" }, { kind: "choice", label: "Hotel" }, { kind: "choice", label: "Farming" }, { kind: "choice", label: "Retail" }, { kind: "choice", label: "Construction" }, { kind: "choice", label: "A Brokerage" }, { kind: "choice", label: "Finance" }, { kind: "choice", label: "Insurance" }, { kind: "choice", label: "Manufacturing" }, { kind: "choice", label: "Mineral Extraction" }, { kind: "choice", label: "Other" }],
	      next: "input_4"
	    }
	  }, {
	    id: "yesno_2",
	    kind: "YesNo",
	    content: {
	      question: "Does your profession require a license, certification, or registration authorized by the Business and Professional Code, the Chiropractic Act, or the Osteopathic Act?",
	      fields: [{ kind: "choice", label: "Yes", next: "yesno_3" }, { kind: "choice", label: "No", next: "input_4" }],
	      note: {
	        title: 'Requires license, certification, or registration?',
	        content: "<ul>\n            <li>If your profession requires a license, certification, or other registration from the state, there may be additional requirements in forming your corporation.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "yesno_3",
	    kind: "YesNo",
	    content: {
	      question: "Does your profession required a corporation to be a professional corporation?<br /><small>Check with your regulatory board whether your profession requires a professional corporation (as opposed to a traditional corporation), and for restrictions on the name of your professional corporation. A list of California  regulatory boards is available <a href='http://www.dca.ca.gov/about_dca/entities.html'>here</a></small>",
	      fields: [{ kind: "choice", label: "Yes", next: "goto_1" }, { kind: "choice", label: "No", next: "input_4" }],
	      note: {
	        title: 'Professional Corporation?',
	        content: "<ul>\n            <li>California law generally permits professionals to organize as corporations. Many professions, if they incorporate, must form a professional corporation, as opposed to a traditional corporation under the General Corporation Law. For example, the corporations of dentists, certified public accountants, doctors, veterinarians, lawyers, optometrists, marriage and family therapists, psychiatrists, and psychologists (all of whom require state licensure), are all required to be professional corporations. You should confirm with the board governing your profession whether your corporation must be a professional corporation. If your profession does not require a professional corporation, you are generally authorized to incorporate under the General Corporation Law.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_4",
	    kind: "Input",
	    content: {
	      question: "What will be the name of your company?",
	      fields: [{ kind: "text", store: "company_name" }],
	      next: "input_5",
	      note: {
	        title: 'Name of Corporation',
	        content: "<ul>\n            <li>The name of your business cannot be misleading or confusingly similar to that of a preexisting corporation. You can check search engines and https://businesssearch.sos.ca.gov/ to see if there is a preexisting corporation with a similar name. A confusingly similar name does not have to be exactly the same, it includes subtle differences \u2013 like upper instead of lower case letters; \u201C&\u201D instead of \u201Cand\u201D; or \u201C7\u201D instead of \u201Cseven\u201D. Registering a new corporation with a substantially similar name to an existing corporation requires written consent and approval by the California Secretary of State.</li>\n            <li>Your corporate name cannot include the words \u201Cbank\u201D, \u201Ccredit union\u201D, \u201Ctrust\u201D, \u201Ctrustee\u201D, or related words unless you have a certificate of approval of the Commissioner of Business Oversight, or are forming a corporation pursuant to California Banking Law.</li>\n            <li>You may also want to consider whether your corporate name will be eligible for trademark protection (see section on Trademark for more information).</li>\n            <li>You should input the entire name of the company as you would like it to appear on the records of the California Secretary of State.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_5",
	    kind: "Input",
	    content: {
	      question: "What will be the primary address of the company?",
	      fields: [{ kind: "text", store: "company_address_street", placeholder: "Street" }, { kind: "text", store: "company_address_city", placeholder: "City" }, { kind: "text", store: "company_address_state", placeholder: "State" }, { kind: "text", store: "company_address_zipcode", placeholder: "ZIP Code" }],
	      next: "single_6",
	      note: {
	        title: 'Address of Corporation',
	        content: "<ul>\n            <li>You must provide the initial street address and the initial mailing address if different from the street address.</li>\n            <li>You should note this address will be a public record.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "single_6",
	    kind: "Single",
	    content: {
	      question: "What is the total number of shares the corporation will be authorized to issue?",
	      fields: [{ kind: "choice", label: "1,000,000", value: 1000000 }, { kind: "choice", label: "100,000", value: 100000 }, { kind: "number", label: "Other" }],
	      store: "number_of_shares",
	      next: "input_7",
	      note: {
	        title: 'Number of Shares',
	        content: "<ul>\n            <li>Authorized shares are those which the company is allowed to issue \u2013 shares only become \u201Cissued\u201D once they are sold to someone. All shareholders of your professional corporation must be licensed.</li>\n            <li>Shares that are authorized but not yet issued are retained by the corporation (commonly called \u201Ctreasury shares\u201D).</li>\n            <li>You can only issue (or sell) as many shares as you have authorized. If you later decide you want to authorize more shares, you will have to pay a fee to the state to amend your articles of incorporation (the paperwork you file with the state of California to establish your corporation). In California, unlike Delaware, there is no an additional tax or fee for having a higher number of authorized shares.</li>\n            <li>The total number of shares is somewhat arbitrary; the more important part is the overall percentage of ownership. Owning one out of one hundred shares is the same as owning one million out of one hundred million shares. However, authorizing more shares can make it easier to issue shares to more people. For example, if you only authorize 10 shares, you can only issue shares to 10 people (without issuing fractional shares), and only in increments of 10% (like 10%, 20%, 30%, etc). By authorizing 100 shares, you could issue shares to 100 people, and in increments of 1% (like a 33% interest for example). In determining the total amount to authorize, consider the future of the corporation \u2013 will you issue stock or options to employees, directors, or investors?</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_7",
	    kind: "Input",
	    content: {
	      question: "Who will incorporate the company?",
	      fields: [{ kind: "text", store: "incorporator_name_firstname", placeholder: "First Name" }, { kind: "text", store: "incorporator_name_lastname", placeholder: "Last Name" }],
	      next: "input_8",
	      note: {
	        title: 'Name of incorporator',
	        content: "<ul>\n            <li>The incorporator is the person who is organizing the corporation. The incorporator signs documents and acts for the corporation until the board of directors is elected.</li>\n            <li>The incorporator can be any adult; it need not be an officer, director, or shareholder of the corporation.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_8",
	    kind: "Input",
	    content: {
	      question: "Who will serve as the registered agent of the company?",
	      fields: [{ kind: "text", store: "registered_agent_name" }],
	      next: "single_9",
	      note: {
	        title: 'Name of registered agent',
	        content: "<ul>\n            <li>The registered agent is the person who receives official correspondence for the corporation. For example, the registered agent would be served (physically handed the papers) if the corporation were sued.</li>\n            <li>The registered agent should agree beforehand to accept service of process on behalf of the corporation.</li>\n            <li>The registered agent can be either an individual who resides in California or an active California corporation. Your corporation cannot be its own registered agent.\n              <ul>\n                <li>The individual can be an officer, director, or shareholder of the company, or any other adult.</li>\n                <li>A corporate registered agent must have filed a 1505 Certificate with the California Secretary of State.\n                  <ul>\n                    <li>You can check https://businessfilings.sos.ca.gov/frmlist1505s.asp to see if a corporation has filed a 1505 Certificate and to ensure the spelling of the corporation\u2019s name.</li>\n                    <li>If the corporation has not filed a 1505 Certificate, it must register, which requires the corporation:\n                      <ul>\n                        <li>Be an active, registered California corporation,</li>\n                        <li>Pay a $30 filing fee, and</li>\n                        <li>Fill out and submit a form.</li>\n                      </ul>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n\n            <li>There are services which will serve as your corporation\u2019s registered agent for a fee.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "single_9",
	    kind: "Single",
	    content: {
	      question: "Is <strong>${registered_agent_name}</strong> a person or a corporation?",
	      fields: [{ kind: "choice", label: "Person", next: "input_10" }, { kind: "choice", label: "Corporation", next: "yesno_11" }],
	      note: {
	        title: 'Person or corporation',
	        content: "<ul>\n            <li>As noted, your registered agent can be either a person or a certified corporation</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_10",
	    kind: "Input",
	    content: {
	      question: "What is <strong>${registered_agent_name}</strong>'s address?'",
	      fields: [{ kind: "text", store: "registered_agent_address_street", placeholder: "Street" }, { kind: "text", store: "registered_agent_address_city", placeholder: "City" }, { kind: "text", store: "registered_agent_address_state", placeholder: "State" }, { kind: "text", store: "registered_agent_address_zipcode", placeholder: "ZIP Code" }],
	      next: "final_1",
	      note: {
	        title: 'Address of registered agent',
	        content: "<ul>\n            <li>If the registered agent is a person\n              <ul>\n                <li>Must be a California address, it can be a business or residence street address.</li>\n                <li>Cannot be a P.O. Box, \u201Cin care of\u201D, or have a city abbreviation (i.e., not \u201CLA\u201D)</li>\n                <li>You should note that this address will be a public record.</li>\n              </ul>\n            </li>\n            <li>The address of the registered agent is not required if the agent is a corporation.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "yesno_11",
	    kind: "YesNo",
	    content: {
	      question: "Note that you may only select a corporation that is registered with the California Secretary of State as a Registered Corporate Agent for service of process. Is <strong>${registered_agent_name}</strong> a Registered Corporate Agent?",
	      fields: [{ kind: "choice", label: "Yes", next: "final_2" }, { kind: "choice", label: "No", next: "input_12" }],
	      note: {
	        title: 'Corporate Registered Agent',
	        content: "<ul>\n            <li>A corporate registered agent must have filed a 1505 Certificate with the California Secretary of State.</li>\n            <li>You can check <a href='https://businessfilings.sos.ca.gov/frmlist1505s.asp'>Here</a> to see if a corporation has filed a 1505 Certificate and to ensure the spelling of the corporation\u2019s name.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "input_12",
	    kind: "Input",
	    content: {
	      question: 'Please select an individual to be your registered agent. Who will serve as the registered agent of the company?',
	      fields: [{ kind: "text", store: "registered_agent_name" }],
	      next: "input_8",
	      note: {
	        title: 'Individual registered agent',
	        content: "<ul>\n            <li>The registered agent is the person who receives official correspondence for the corporation. For example, the registered agent would be served (physically handed the papers) if the corporation were sued.</li>\n            <li>The registered agent should agree beforehand to accept service of process on behalf of the corporation.</li>\n            <li>Please select an individual who resides in California to be your registered agent. You can select any adult; your registered agent can, but does not have to be, a founder, director, or shareholder of your corporation.</li>\n          </ul>"
	      }
	    }
	  }, {
	    id: "final_1",
	    kind: "Final",
	    content: {
	      kind: "Form",
	      form: "ca_form_articles_of_incorporation_1"
	    }
	  }, {
	    id: "final_2",
	    kind: "Final",
	    content: {
	      kind: "Form",
	      form: "ca_form_articles_of_incorporation_2"
	    }
	  }]
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ca_professional_corp;
	
	var _incorporate = __webpack_require__(102);
	
	var _incorporate2 = _interopRequireDefault(_incorporate);
	
	var _sIncorporate = __webpack_require__(103);
	
	var _sIncorporate2 = _interopRequireDefault(_sIncorporate);
	
	var _transfertax = __webpack_require__(109);
	
	var _transfertax2 = _interopRequireDefault(_transfertax);
	
	var _incorporate3 = __webpack_require__(105);
	
	var _incorporate4 = _interopRequireDefault(_incorporate3);
	
	var _payroll = __webpack_require__(106);
	
	var _payroll2 = _interopRequireDefault(_payroll);
	
	var _trademark = __webpack_require__(108);
	
	var _trademark2 = _interopRequireDefault(_trademark);
	
	var _securitydeposit = __webpack_require__(107);
	
	var _securitydeposit2 = _interopRequireDefault(_securitydeposit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = (_ca_professional_corp = {}, _defineProperty(_ca_professional_corp, 'ca_professional_corporation', _incorporate2.default), _defineProperty(_ca_professional_corp, 'ca_s_corporation', _sIncorporate2.default), _defineProperty(_ca_professional_corp, 'incorporate', _incorporate4.default), _defineProperty(_ca_professional_corp, 'payroll', _payroll2.default), _defineProperty(_ca_professional_corp, 'trademark', _trademark2.default), _defineProperty(_ca_professional_corp, 'transfertax', _transfertax2.default), _defineProperty(_ca_professional_corp, 'securitydeposit', _securitydeposit2.default), _ca_professional_corp);

/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _attach;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = {
	  name: "incorporate",
	  description: "Should I incorporate ( or become an LLC )?",
	  start: "action_1",
	  kind: "Topic",
	  attach: (_attach = {}, _defineProperty(_attach, 'NOTE_1', "<p>Since your business is a real estate investment company, your business should generally be organized as an LLC rather than a corporation for income tax reasons. For a description of these reason see below. You might consider organizing as a limited partnership rather than an LLC if you own or expect to own California real estate with rental income and capital gains expected to exceed $1 million per year.</p><br/>\n      <p><small>Because the income of a C corporation is subject to double taxation and the losses of a C corporation are not immediately deductible by the shareholders, a C corporation is not an efficient structure for a real estate investment company. While the income of an S corporation is subject to only one level of taxation and its losses may be immediately deducted by the shareholders (subject to certain limitations), an S corporation is generally a disadvantageous structure for a real estate investment company as compared to an LLC that is taxed as a partnership (or as a disregarded entity). There are several reasons for this. First, the limited liability company allows special allocation of income, deductions, profits and losses which are often used. By contrast, use of an S corporation precludes the use of special allocations due to the requirement of one class of shares. Second, if the investment company intends to buy and hold depreciable real estate and finance the acquisition with non-recourse financing, the S. Corporation form may limit the deductions that may be passed through to the shareholders. Shareholders of S Corps and members of limited liability companies may not take deductions in excess of the basis of their stock or investment. A limited liability company member\u2019s basis includes his share of qualified non-recourse loans; an S corp\u2019s shareholder\u2019s basis in his stock does not. Thus it is possible that an S Corp shareholder will be precluded from taking depreciation deductions in the case of certain leveraged, depreciable real estate. Third, contributions of property to a partnership where liabilities assumed by the partnership exceed the partner\u2019s basis are not usually taxable transactions. But transfers of property to a corporation for stock where liabilities assumed by the corporation exceed the shareholder\u2019s basis in the property are taxable to the shareholder under IRC 357(c). Fourth, the IRC 754 election allows a step-up in the basis of assets upon: the death of a partner, certain partnership distributions and the sale or exchange of a partnership interest. Fifth, per IRC 731, distributions of property from a partnership to partners are not taxable transactions. However, under IRC 1368, distributions of property from an S Corporation results in taxable gain to the extent the value of the distributed property exceeds the shareholder\u2019s basis in its stock.</small></p>"), _defineProperty(_attach, 'NOTE_2', "<p>Because of the nature of your business, it appears you would benefit from the liability protection afforded by either an LLC or a corporation. While an S corporation can reduce a business owner\u2019s self-employment taxes under certain circumstances, the nature of your business and its expected earnings are not likely to lead to significant savings in self-employment taxes. At the same time, since you do not have or expect to have any partners or investors, an LLC does offer you certain tax advantages. Specifically, since the LLC will be solely owned by you, it will be treated as a disregarded entity for income tax purposes (unless you file an election for corporate treatment). As a result, you will not be required to file a separate federal income tax return for the LLC. Instead, you will report the LLC\u2019s earnings on your individual income tax return.</p>"), _defineProperty(_attach, 'NOTE_3', "<p>Based on your responses, the cost of forming and maintaining a corporation or limited liability company appear to outweigh the benefits. The primary legal advantage of a corporation or limited liability company is that they protect you (as owner) from legal claims based on the company\u2019s contracts and the acts of the company\u2019s agents other than you. However, they do not protect you from legal claims based on your own acts. Since you do not have or expect to have any employees or agents, it appears that you will not realize significant benefits from the liability protection of a corporation or limited liability company. However, if you expect that the company will enter into significant contracts (that you do not have to personally guaranty), then the corporate or LLC form would provide a significant benefit. While corporations offer various tax benefits, it appears that you will not be able to take advantage of these benefits due to the nature of your business or the expected level of your earnings. For example, while an S corporation can reduce a business owner\u2019s self-employment taxes under certain circumstances, it appears that you will not derive significant savings in self-employment taxes due to the nature of your business and its expected earnings. In addition, stock in certain C corporations may be sold without federal income tax on the gains, subject to certain limitations. However, based on your responses, it does not appear that you would be eligible for this exclusion (or your responses indicate that any benefit would be negligible).</p>"), _defineProperty(_attach, 'NOTE_4', "<p>Based on your responses, it appears that you would benefit from the liability protection afforded to shareholders of an S corporation as well as the reduction in self-employment taxes that may be available to the shareholders of an S corporation . If you structure your company as an S corporation, you could be both a shareholder and an employee of the corporation. As such, you would receive two forms of income from the corporation: employment (W2) income which is subject to  self-employment taxes and shareholder distributions which are not subject to self-employment taxes so long as the corporation pays you a reasonable amount of employment income. According to the IRS, \u201Cgenerally, reasonable pay is the amount that a similar business would pay for the same or similar services\u201D.  (Publication 535 (2016), Business Expenses, Employee\u2019s Pay) In short, as long as the corporation pays a shareholder-employee a reasonable salary, all other distributions by the corporation to the shareholder-employee are free of self-employment taxes.</p>"), _defineProperty(_attach, 'NOTE_5', "<p>Based on your responses, you should consider organizing your business as a C corporation in order to take advantage of exemption from capital gains taxes available upon the sale of so-called \u201Cqualified small business stock\u201D after a five year holding period.  For additional information on this exemption, see below. The advantages of this exemption must be balanced against the disadvantages of a C corporation. The first disadvantage of a C corporation as compared to an S corporation or LLC or limited partnership is that the income of a C corporation is potentially subject to double taxation : first, in the form of corporate tax on the income of the corporation and second in the form of individual income tax on the dividends paid by the corporation to its shareholders. Small businesses formed as C corporations generally avoid double taxation by paying any profit to the shareholder-employees in the form of salary, thereby eliminating any corporate profit and therefore any corporation income tax liability. However, shareholders may not be paid a salary that is unreasonably high. If they are, the IRS could recharacterize part of the salary as dividends subject to double taxation. By contrast, the income of an S corporation or a limited liability company is generally passed through to the shareholders or members and subject to a single level of tax. The second disadvantage of a C corporation is that any losses sustained by the corporation are not passed through to the shareholders until the corporation liquidates. The corporation may carry forward such losses for a long period (currently 20 years) and during such time may deduct such losses from any profit.  In the case of an S corporation, by comparison, any losses are passed through to the shareholders who may deduct such losses in the year in which they were sustained, subject to certain limitations. These disadvantages must be weighed against the potential savings on capital gains taxes that a shareholder would realize on the sale of qualified small business stock for a profit after a five year holding period. </p>\n      <br /><p><small>Under Section 1202 of the Internal Revenue Code, a noncorporate taxpayer can exclude from gross income 100 percent of any gain from the sale of qualified small business stock held for more than five years and acquired on or after September 28, 2010. The excluded gain is limited to the greater of $10 million or 10 times the adjusted basis of the investment. To be eligible as qualified small business stock, the stock must be issued after August 10, 1993 and acquired by the taxpayer at its original issue. The issuing corporation must be a domestic C corporation and must have had both before and immediately after the stock issuance aggregate gross assets that did not exceed $50 million. In addition, at least 80% of the value of the corporation\u2019s assets must be used in the active conduct of any trade or business other than: (A health, law, engineering, architecture, accounting, actuarial science, performing arts, consulting, athletics, financial services, brokerage services, or any trade or business where the principal asset of such trade or business is the reputation or skill of 1 or more of its employees, (B) any banking, insurance, financing, leasing, investing, or similar business, (C) any farming business (including the business of raising or harvesting trees), (D) any business involving the production or extraction of minerals, and (E) any business of operating a hotel, motel, restaurant, or similar business.(IRC Section 1202(e))</small></p>"), _defineProperty(_attach, 'NOTE_6', "<p>Businesses receiving venture capital funding are generally structured as C corporations. There are three reasons for this: first, venture capital funds often receive preferred stock which provides them with a priority return ahead of the common stock holders; and S corporations cannot issue preferred stock. Second, venture capital funds often invest with the goal of guiding the business to an initial public stock offering, which is not feasible for LLCs or S corporations. Finally, venture capital funds often have pension plans as investors and investing in a business structured as an S corporation or an LLC exposes pension plans (and any other tax exempt investors) to unrelated business income tax; investing in a C corporation does not.</p>"), _defineProperty(_attach, 'NOTE_7', "<p>Because you expect to allocate income and losses proportionally to the owners, you can organize your business as an S corporation, subject to certain limitations. (For a summary of these requirements, go to: https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations) While you could form an LLC or limited partnership, an S corporation may enable you to pay less self-employment taxes than you would using an LLC or limited partnership.  If you structure your company as an S corporation, you (and any other working owner) could be both a shareholder and an employee of the corporation. As such, you would receive two forms of income from the corporation: employment (W2) income which is subject to self-employment taxes and shareholder distributions which are not subject to self-employment taxes so long as the corporation pays you a reasonable amount of employment income. According to the IRS, \u201Cgenerally, reasonable pay is the amount that a similar business would pay for the same or similar services\u201D.  (Publication 535 (2016), Business Expenses, Employee\u2019s Pay) In short, as long as the corporation pays a shareholder-employee a reasonable salary, all other distributions by the corporation to the shareholder-employee are free of self-employment taxes.</p>"), _defineProperty(_attach, 'NOTE_8', "<p>A business that does not allocate income and losses proportionally to its owners cannot be organized as an S corporation because an S corporation allows only one class of stock. An LLC structured as a partnership for income tax purposes does permit the owners to specially allocate income and losses so long as such allocations have substantial economic effect. Such a business could be formed as a C corporation with more than one class of stock. However, a C corporation has two disadvantages to a small business. The first disadvantage of a C corporation as compared to an LLC is that the income of a C corporation is potentially subject to double taxation : first, in the form of corporate tax on the income of the corporation and second in the form of individual income tax on the dividends paid by the corporation to its shareholders. Small businesses formed as C corporations generally avoid double taxation by paying any profit to the shareholder-employees in the form of salary, thereby eliminating any corporate profit and therefore any corporation income tax liability. However, shareholders may not be paid a salary that is unreasonably high. If they are, the IRS could recharacterize part of the salary as dividends subject to double taxation. By contrast, the income of an LLC (that is taxed as a partnership) is passed through to the members and subject to a single level of tax. The second disadvantage of a C corporation is that any losses sustained by the corporation are not passed through to the shareholders until the corporation liquidates. The corporation may carry forward such losses for a long period (currently 20 years) and during such time may deduct such losses from any profit.  In the case of an LLC, any losses are passed through to the members who may deduct such losses in the year in which they were sustained, subject to certain limitations.</p>"), _attach),
	  node: [{
	    id: "action_1",
	    kind: "Action",
	    content: {
	      kind: "SET_VALUE",
	      store: "index",
	      value: 0,
	      next: "single_1"
	    }
	  }, {
	    id: "single_1",
	    kind: "Single",
	    content: {
	      question: "What will be the primary business of your company?",
	      fields: [{ label: "Real Estate Investment", next: "final_1" }, { label: "A Profession", next: "yesno_2" }, { label: "Personal Services (other than a Profession)", next: "yesno_2" }, { label: "Restaurant", next: "yesno_2" }, { label: "Hotel", next: "yesno_2" }, { label: "Farming", next: "yesno_2" }, { label: "Retail", next: "yesno_2.5" }, { label: "Construction", next: "yesno_2.5" }, { label: "A Brokerage", next: "yesno_2" }, { label: "Finance", next: "yesno_2" }, { label: "Insurance", next: "yesno_2" }, { label: "Manufacturing", next: "yesno_2.5" }, { label: "Mineral Extraction", next: "yesno_2" }, { label: "Other", next: "yesno_2" }]
	    }
	  }, {
	    id: "yesno_2.5",
	    kind: "YesNo",
	    content: {
	      question: "Do you expect to sell the business form a profit of at least $100,100, five or more years from now?",
	      fields: [{ label: "Yes", next: "final_2" }, { label: "No", next: "yesno_2" }]
	    }
	  }, {
	    id: "final_1",
	    kind: "Final",
	    content: {
	      title: "Form LLC",
	      attach: ['NOTE_1']
	    }
	  }, {
	    id: "final_2",
	    kind: "Final",
	    content: {
	      title: "You should consider forming a C Corporation",
	      attach: ['NOTE_5'],
	      to: "Corp"
	    }
	  }, {
	    id: "yesno_2",
	    kind: "YesNo",
	    content: {
	      question: "Do you have, or expect to have, any partners or investors in the business?",
	      fields: [{ label: "Yes", next: "yesno_2.1" }, { label: "No", next: "single_3" }]
	    }
	  }, {
	    id: "yesno_2.1",
	    kind: "YesNo",
	    content: {
	      question: "Do you expect to receive venture capital funding?",
	      fields: [{ label: "Yes", next: "final_6" }, { label: "No", next: "yesno_2.2" }]
	    }
	  }, {
	    id: "final_6",
	    kind: "Final",
	    content: {
	      title: "Form a C Corporation",
	      message: "",
	      attach: ['NOTE_6'],
	      to: "Corp"
	    }
	  }, {
	    id: "yesno_2.2",
	    kind: "YesNo",
	    content: {
	      question: "Will income and losses be allocated proportionally to all owners?(For example, would a 25% owner be allocated 25% of all income and losses?)",
	      fields: [{ label: "Yes", next: "final_7" }, { label: "No", next: "final_8" }]
	    }
	  }, {
	    id: "final_7",
	    kind: "Final",
	    content: {
	      title: "Form an S Corporation",
	      attach: ['NOTE_7'],
	      to: "S-Corp"
	    }
	  }, {
	    id: "final_8",
	    kind: "Final",
	    content: {
	      title: "Form LLC",
	      attach: ['NOTE_8']
	    }
	  }, {
	    id: "single_3",
	    kind: "Single",
	    content: {
	      question: "How much have you invested or do you expect to invest in the business?",
	      fields: [{ label: "Under $10,000", next: "single_4" }, { label: "$10,000 to $50,000", next: "action_2" }, { label: "Over $50,000", next: "final_3" }]
	    }
	  }, {
	    id: "action_2",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 1,
	      next: "single_4"
	    }
	  }, {
	    id: "final_3",
	    kind: "Final",
	    content: {
	      title: "Form an S Corporation",
	      attach: ['NOTE_4'],
	      to: "S-Corp"
	    }
	  }, {
	    id: "single_4",
	    kind: "Single",
	    content: {
	      question: "What do you expect the business to earn next year (before payment of any salary to you)?",
	      fields: [{ label: "I don't know", next: "single_5" }, { label: "Expect to either lose money or have earnings of less than $25,000", next: "single_5" }, { label: "$25,000 to $50,000", next: "action_3" }, { label: "$50,000 to $100,000", next: "action_4" }, { label: "$100,000 to $250,000", next: "action_5" }, { label: "Expects earnings of over $250,000", next: "final_3" }]
	    }
	  }, {
	    id: "action_3",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 1,
	      next: "yesno_8"
	    }
	  }, {
	    id: "action_4",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 2,
	      next: "yesno_8"
	    }
	  }, {
	    id: "action_5",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 3,
	      next: "action_6"
	    }
	  }, {
	    id: "action_6",
	    kind: "Action",
	    content: {
	      kind: "SWITCH_VALUE",
	      store: "index",
	      value: [3],
	      next: ["yesno_8", "final_3"]
	    }
	  }, {
	    id: "single_5",
	    kind: "Single",
	    content: {
	      question: "What is your net worth?",
	      fields: [{ label: "Over $100,000", next: "yesno_7" }, { label: "Under $100,000", next: "final_4" }]
	    }
	  }, {
	    id: "final_4",
	    kind: "Final",
	    content: {
	      title: "Don't incorporate",
	      attach: ['NOTE_3']
	    }
	  }, {
	    id: "yesno_7",
	    kind: "YesNo",
	    content: {
	      question: "Do you have, or expect to have, any employees or agents?",
	      fields: [{ label: "Yes", next: "final_5" }, { label: "No", next: "yesno_10" }]
	    }
	  }, {
	    id: "final_5",
	    kind: "Final",
	    content: {
	      title: "Form LLC",
	      attach: ['NOTE_2']
	    }
	  }, {
	    id: "yesno_8",
	    kind: "YesNo",
	    content: {
	      question: "Do you have, or expect to have, any employees or agents?",
	      fields: [{ label: "Yes", next: "action_7" }, { label: "No", next: "yesno_10" }]
	    }
	  }, {
	    id: "action_7",
	    kind: "Action",
	    content: {
	      kind: "SWITCH_VALUE",
	      store: "index",
	      value: [1],
	      next: ["final_5", "final_3"]
	    }
	  }, {
	    id: "yesno_10",
	    kind: "YesNo",
	    content: {
	      question: "Is primary business manufacturing, construction, mineral extraction, farming, restaurant or hotel?",
	      fields: [{ label: "Yes", next: "action_7" }, { label: "No", next: "final_4" }]
	    }
	  }]
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: "payroll",
	  description: "Do I need to set up Payroll?",
	  start: "yesno_1",
	  kind: "Topic",
	  node: [{
	    id: "yesno_1",
	    kind: "YesNo",
	    content: {
	      question: "Will any of the business owners work in the business?",
	      fields: [{ label: "Yes", next: "single_2" }, { label: "No", next: "single_5" }]
	    }
	  }, {
	    id: "single_2",
	    kind: "Single",
	    content: {
	      question: "Is the business a corporation, partnership, limited liability company or sole proprietorship?",
	      fields: [{ label: "LLC", next: "single_3" }, { label: "Corporation", next: "final_1" }, { label: "Partnership or Sole proprietorship", next: "single_5" }]
	    }
	  }, {
	    id: "final_1",
	    kind: "Final",
	    content: {
	      title: "Payroll",
	      message: "It appears that you should treat your owners as employees and set up payroll. [Explanation 2]"
	    }
	  }, {
	    id: "single_3",
	    kind: "Single",
	    content: {
	      question: "Has the LLC elected to be taxed as a corporation?",
	      fields: [{ label: "Yes", next: "final_1" }, { label: "No", next: "single_5" }]
	    }
	  }, {
	    id: "single_5",
	    kind: "Single",
	    content: {
	      question: "Will the business have any workers, not employed by some other company, that will work regularly for the business?",
	      fields: [{ label: "Yes", next: "yesno_6" }, { label: "No", next: "final_2" }]
	    }
	  }, {
	    id: "final_2",
	    kind: "Final",
	    content: {
	      title: "Payroll",
	      message: "It does not appear that you will have any employees. Therefore, you will not need to set up payroll for the business."
	    }
	  }, {
	    id: "yesno_6",
	    kind: "YesNo",
	    content: {
	      question: "As to any workers performing services for the business, will the business control  what work is done by the worker and how the work is done? [Explanation 3]",
	      fields: [{ label: "Yes", next: "final_3" }, { label: "No", next: "yesno_7" }]
	    }
	  }, {
	    id: "final_3",
	    kind: "Final",
	    content: {
	      message: "It appears that you will have employees. Therefore you should set up payroll for the business. [Explanation1]"
	    }
	  }, {
	    id: "yesno_7",
	    kind: "YesNo",
	    content: {
	      question: "Does the business have or expect to have any of the following workers?<br/>\n                <small>A. A driver who distributes beverages (other than milk) or meat, vegetable, fruit, or bakery products; or who picks up and delivers laundry or dry cleaning, if the driver is your agent or is paid on commission.<br/>\n                B. A full-time life insurance sales agent whose principal business activity is selling life insurance or annuity contracts, or both, primarily for one life insurance company.<br/>\n                C. An individual who works at home on materials or goods that you supply and that must be returned to you or to a person you name, if you also furnish specifications for the work to be done.<br/>\n                D. A traveling or city salesperson who works for you full-time and turns in orders to you from wholesalers, retailers, contractors, or operators of hotels, restaurants, or other similar establishments for goods that are purchased for resale or as supplies for use in the buyer's business operation.</small>",
	      fields: [{ label: "No", next: "final_4" }, { label: "Yes", next: "yesno_8" }]
	    }
	  }, {
	    id: "final_4",
	    kind: "Final",
	    content: {
	      title: "Payroll",
	      message: "It does not appear that you will have any employees. Therefore, you will not need to set up payroll for the business."
	    }
	  }, {
	    id: "yesno_8",
	    kind: "YesNo",
	    content: {
	      question: "For your workers who fall into any of the four previously mentioned categories, do any such workers meet ALL of the following three conditions:\n              <small>1. The service contract states or implies that substantially all the services are to be performed personally by them<br/>.\n              2. They don't have a substantial investment in the equipment and property used to perform the services (other than an investment in facilities for transportation, such as a car or truck)<br/>.\n              3. The services are performed for you on a continuing basis.</small>",
	      fields: [{ label: "Yes", next: "final_5" }, { label: "No", next: "final_4" }]
	    }
	  }, {
	    id: "final_5",
	    kind: "Final",
	    content: {
	      title: "Payroll",
	      message: "It appears that you will have statutory employees. Therefore, you will need to set up payrool for the business. Although federal income tax is not withheld from the wages of statutory employees, social security taxes and medicare taxes are.."
	    }
	  }]
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _attach;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = {
	  name: "securitydeposit",
	  description: "Security Deposit",
	  start: "yesno_1",
	  kind: "Topic",
	  attach: (_attach = {}, _defineProperty(_attach, 'GOOD_FAITH_ESTIMATES', "<h2>Good Faith Estimates</h2>\n      <p>If services or materials are being supplied by another person or business and the landlord does not have the invoice or receipt within 21 days after your move, then the landlord is allowed to make a good faith estimate of charges and include the estimate in the itemized statement. The landlord must include the name, address and telephone number of the person or business that is supplying the services or materials.</p>\n      <p>Within 14 calendar days after completing the repairs or receiving the invoice or receipt, the landlord must mail or deliver to you a correct itemized statement, the invoices and receipts described above, and any refund to which you are entitled. <small>[Civil Code Section 1950.5(g)(3)]</small></p>"), _defineProperty(_attach, 'GOOD_FAITH_ESTIMATES_2', "<h2>Good Faith Estimates</h2>\n      <p>If the repair is being done by the landlord or an employee and cannot reasonably be completed within 21 days after your move, the landlord is allowed to make a good faith estimate of charges and include the estimate in the itemized statement.</p>\n      <p>Within 14 calendar days after completing the repairs or receiving the invoice or receipt, the landlord must mail or deliver to you a correct itemized statement, the invoices and receipts described above, and any refund to which you are entitled. <small>[Civil Code Section 1950.5(g)(3)]</small></P>"), _defineProperty(_attach, 'IMPROPER_DEDUCTIONS', "<h2>Improper Deductions</h2>\n      <p>If you believe your landlord has made an improper deduction from your security\n        deposit, or if the landlord keeps all of the deposit without good reason, tell the landlord\n        or the landlord's agent why you believe that the deductions from your security deposit\n        are improper. Immediately ask the landlord or agent for a refund of the amount that\n        you believe you're entitled to get back. You can make this request by phone or e-mail,\n        but you should follow it up with a letter. The letter should state the reasons that you\n        believe the deductions are improper, and the amount that you feel should be returned\n        to you. Keep a copy of your letter. It's a good idea to send the letter to the landlord or\n        agent by certified mail and to request a return receipt to prove that the landlord or\n        agent received the letter. Or, you can deliver the letter personally and ask the landlord\n        or agent to acknowledge receipt by signing and dating your copy of the letter.</p>"), _attach),
	  node: [{
	    id: "yesno_1",
	    kind: "YesNo",
	    content: {
	      question: "Has it been more than 21 days since you have moved?",
	      fields: [{ label: "Yes", next: "yesno_2" }, { label: "No", next: "final_1" }]
	    }
	  }, {
	    id: "final_1",
	    kind: "Final",
	    content: {
	      kind: "General",
	      title: "You are not entitiled to a refund of your security deposit... yet.",
	      message: "Under CA law, Landlord has 21 calendar days after you move to send you a full refund of your security deposit, or mail or personally deliver to you an itemized statement that lists the amounts of any deductions from your security deposit and the reasons for the deductions, together with a refund of any amounts not deducted."
	    }
	  }, {
	    id: "yesno_2",
	    kind: "YesNo",
	    content: {
	      question: "Has the landlord mailed or personally delivered to you an itemized statement that lists the amounts of any deductions from your security deposit and the reasons for the deductions, together with a refund of any amounts not deducted?",
	      fields: [{ label: "Yes", next: "yesno_3" }, { label: "No", next: "final_2" }]
	    }
	  }, {
	    id: "final_2",
	    kind: "Final",
	    content: {
	      title: "You are likely entitled to a full refund of your security deposit",
	      message: "<p>According to a California Supreme Court decision, the landlord loses the right to keep any of the security deposit and must return the entire deposit to you. <small>[See Portman and Brown, California Tenants' Rights, page 235-236 (NOLO Press 2010)]</small></p>",
	      attach: ['GOOD_FAITH_ESTIMATES']
	    }
	  }, {
	    id: "yesno_3",
	    kind: "YesNo",
	    content: {
	      question: "Is the cost of repairs and/or cleaning less than $126?",
	      fields: [{ label: "Yes", next: "final_3" }, { label: "No", next: "single_1" }]
	    }
	  }, {
	    id: "final_3",
	    kind: "Final",
	    content: {
	      title: "You are likely entitled to a refund of your security deposit, less the cost repairs and/or cleaning.",
	      message: "<p>The landlord is not required to send you copies of invoices or receipts, or a good faith estimate, if the repairs or cleaning cost less than $126.<p/>\n                  <p>You may request copies of these documents from the landlord within 14 calendar days after you receive the itemized statement. It's best to make this request both orally and in writing. Keep a copy of your letter or e-mail. The landlord must send you copies of invoices, receipts and any good faith estimate within 14 calendar days after he or she receives your request. <small>[Civil Code Section 1950.5(g)(5)]</small><p/>",
	      attach: ['IMPROPER_DEDUCTIONS']
	    }
	  }, {
	    id: "single_1",
	    kind: "YesNo",
	    content: {
	      question: "Did the landlord or the landlord's employees do the work, or another person or business?",
	      fields: [{ kind: "choice", label: "Other person or business", next: "yesno_4" }, { kind: "choice", label: "Landlord or landlord's employees", next: "final_4" }]
	    }
	  }, {
	    id: "yesno_4",
	    kind: "YesNo",
	    content: {
	      question: "Did Landlord send copies of receipts for the charges that the landlord incurred to repair or clean the rental unit and that the landlord deducted from your security deposit?",
	      fields: [{ label: "Yes", next: "final_5" }, { label: "No", next: "yesno_5" }]
	    }
	  }, {
	    id: "final_4",
	    kind: "Final",
	    content: {
	      title: "You are likely entitled to a refund of your security deposit, less the cost repairs and/or cleaning.",
	      message: "<p>The itemized statement must describe the work performed, including the time spent and the hourly rate charged. The hourly rate must be reasonable.<p/>",
	      attach: ['GOOD_FAITH_ESTIMATES_2', 'IMPROPER_DEDUCTIONS']
	    }
	  }, {
	    id: "final_5",
	    kind: "Final",
	    content: {
	      title: "You are likely entitled to a refund of your security deposit, less the cost repairs and/or cleaning.",
	      message: '',
	      attach: ['IMPROPER_DEDUCTIONS']
	    }
	  }, {
	    id: "yesno_5",
	    kind: "YesNo",
	    content: {
	      question: "Did you waive your rights to receive them?",
	      fields: [{ label: "Yes", next: "final_5" }, { label: "No", next: "final_2" }]
	    }
	  }]
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: "trademark",
	  description: "Trademark",
	  start: "action_1",
	  kind: "Topic",
	  node: [{
	    id: "action_1",
	    kind: "Action",
	    content: {
	      kind: "SET_VALUE",
	      store: "index",
	      value: 0,
	      next: "single_1.1"
	    }
	  }, {
	    id: "single_1.1",
	    kind: "Single",
	    content: {
	      question: "Does your mark consist solely of words or does it include design?",
	      fields: [{ label: "Includes design", next: "yesno_3.34" }, { label: "Solely words", next: "yesno_1.3" }]
	    }
	  }, {
	    id: "yesno_1.3",
	    kind: "YesNo",
	    content: {
	      question: "Does your mark include a foreign term?",
	      fields: [{ label: "Yes", next: "single_1.4" }, { label: "No", next: "single_1.5" }]
	    }
	  }, {
	    id: "single_1.4",
	    kind: "Single",
	    content: {
	      question: "Use the English translation for all of the following questions.",
	      fields: [{ label: "OK", next: "single_1.5" }]
	    }
	  }, {
	    id: "single_1.5",
	    kind: "Single",
	    content: {
	      question: "Is it generic?",
	      fields: [{ label: "Yes", next: "final_1.6" }, { label: "Probably", next: "action_1.7" }, { label: "No", next: "single_1.9" }, { label: "Probably Not", next: "action_1.8" }]
	    }
	  }, {
	    id: "final_1.6",
	    kind: "Final",
	    content: {
	      title: "Trademark",
	      message: "Your mark is not registrable."
	    }
	  }, {
	    id: "action_1.7",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 5,
	      next: "single_1.9"
	    }
	  }, {
	    id: "action_1.8",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 1,
	      next: "single_1.9"
	    }
	  }, {
	    id: "single_1.9",
	    kind: "Single",
	    content: {
	      question: "Is your mark descriptive, or arbitrary, suggestive or fanciful?",
	      fields: [{ label: "Arbitrary", next: "single_1.11" }, { label: "Suggestive", next: "single_1.11" }, { label: "Fanciful", next: "single_1.11" }, { label: "Descriptive", next: "final_1.10" }]
	    }
	  }, {
	    id: "final_1.10",
	    kind: "Final",
	    content: {
	      title: "Trademark",
	      message: "You mark is likely not registrable on the Principal Register without secondary meaning - you may wish to register on the Supplemental Register[link to Supplement Note 10]"
	    }
	  }, {
	    id: "single_1.11",
	    kind: "Single",
	    content: {
	      question: "Is it geographically descriptive?",
	      fields: [{ label: "Yes", next: "final_1.10" }, { label: "Probably", next: "action_1.12" }, { label: "No", next: "yesno_2.16" }, { label: "Probably Not", next: "action_1.13" }]
	    }
	  }, {
	    id: "action_1.12",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 3,
	      next: "yesno_2.16"
	    }
	  }, {
	    id: "action_1.13",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 1,
	      next: "yesno_2.16"
	    }
	  }, {
	    id: "yesno_2.16",
	    kind: "YesNo",
	    content: {
	      question: "Is it a surname, an individual's name or likeness, or the title of a single book and/or movie?",
	      fields: [{ label: "Yes", next: "final_2.17" }, { label: "No", next: "single_2.18" }]
	    }
	  }, {
	    id: "final_2.17",
	    kind: "Final",
	    content: {
	      title: "Trademark",
	      message: "You mark is likely not registrable on the Principal Register without secondary meaning - you may wish to register on the Supplemental Register[link to Supplement Note 17]"
	    }
	  }, {
	    id: "single_2.18",
	    kind: "Single",
	    content: {
	      question: "Is it deceptive, scandalous, immoral or disparaging?",
	      fields: [{ label: "Yes", next: "final_2.19" }, { label: "Probably", next: "action_2.20" }, { label: "No", next: "single_2.22" }, { label: "Probably Not", next: "action_2.21" }]
	    }
	  }, {
	    id: "final_2.19",
	    kind: "Final",
	    content: {
	      title: "Trademark",
	      message: "Your mark is likely not registrable"
	    }
	  }, {
	    id: "action_2.20",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 5,
	      next: "single_2.22"
	    }
	  }, {
	    id: "action_2.21",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 1,
	      next: "single_2.22"
	    }
	  }, {
	    id: "single_2.22",
	    kind: "Single",
	    content: {
	      question: "Check for similar existing trademarks used on similar products or services. [Insert text from Trademark supplement Note 22]",
	      fields: [{ label: "OK", next: "single_2.23" }]
	    }
	  }, {
	    id: "single_2.23",
	    kind: "Single",
	    content: {
	      question: "Were you able to find a similar trademark in sound, meaning, appearance or impression?",
	      fields: [{ label: "Yes", next: "single_2.24" }, { label: "Probably", next: "single_2.24" }, { label: "No", next: "action_2.29" }, { label: "Probably Not", next: "single_2.27" }]
	    }
	  }, {
	    id: "single_2.24",
	    kind: "Single",
	    content: {
	      question: "Are the goods and services of the other mark related to yours in such a way that consumers may believe they come from the same source? i.e. hats and t-shirts",
	      fields: [{ label: "Yes", next: "final_2.25" }, { label: "Probably", next: "final_2.25" }, { label: "No", next: "action_2.29" }, { label: "Probably Not", next: "action_2.26" }]
	    }
	  }, {
	    id: "final_2.25",
	    kind: "Final",
	    content: {
	      title: "Trademark",
	      message: "Your mark is likely not registrable"
	    }
	  }, {
	    id: "action_2.26",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 1,
	      next: "action_2.29"
	    }
	  }, {
	    id: "single_2.27",
	    kind: "Single",
	    content: {
	      question: "Are the goods and services of the other mark related to yours in such a way that consumers may believe they come from the same source? i.e. hats and t-shirts",
	      fields: [{ label: "Yes", next: "action_2.28" }, { label: "Probably", next: "action_2.28" }, { label: "No", next: "action_2.29" }, { label: "Probably Not", next: "action_2.28" }]
	    }
	  }, {
	    id: "action_2.28",
	    kind: "Action",
	    content: {
	      kind: "ADD_VALUE",
	      store: "index",
	      value: 1,
	      next: "action_2.29"
	    }
	  }, {
	    id: "action_2.29",
	    kind: "Action",
	    content: {
	      kind: "SWITCH_VALUE",
	      store: "index",
	      value: [0, 4],
	      content: ["final_2.30", "final_2.31", "final_2.32"]
	    }
	  }, {
	    id: "final_2.30",
	    kind: "Final",
	    content: {
	      title: "Trademark",
	      message: "Great. If you are ready to file your trademark application <a href='http://www.uspto.gov/trademarks/teas/index.jsp'>click here</a>"
	    }
	  }, {
	    id: "final_2.31",
	    kind: "Final",
	    content: {
	      title: "Trademark",
	      message: "It appears your mark is registrable based upone your responses. However, as you expressed some uncertainty as to [link to supplement, display section from the source of the points] there is higher risk of rejection. If you're ready to file, <a href='http://www.uspto.gov/trademarks/teas/index.jsp'>click here</a>"
	    }
	  }, {
	    id: "final_2.32",
	    kind: "Final",
	    content: {
	      title: "Trademark",
	      message: "You mark is probably not registrable based upon your responses. If you still wish to register, you may want to consult an attorney. Here are some ways you could increase the likelihood your trademark is accepteed [link to suuplement, display section from the source of the points] If you still wish to file, <a href='http://www.uspto.gov/trademarks/teas/index.jsp'>click here</a>"
	    }
	  }, {
	    id: "yesno_3.34",
	    kind: "YesNo",
	    content: {
	      question: "Is it functional?",
	      fields: [{ label: "Yes", next: "final_3.35" }, { label: "No", next: "yesno_3.36" }]
	    }
	  }, {
	    id: "final_3.35",
	    kind: "Final",
	    content: {
	      title: "Trademark",
	      message: "Your mark is not registrable"
	    }
	  }, {
	    id: "yesno_3.36",
	    kind: "YesNo",
	    content: {
	      question: "Is it matter that is used in a purely ornamental manner?",
	      fields: [{ label: "Yes", next: "final_3.35" }, { label: "No", next: "yesno_1.3" }]
	    }
	  }]
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: "transfertax",
	  description: "California Documentary Transfer Tax",
	  start: "input_1",
	  kind: "Topic",
	  node: [{
	    id: "input_1",
	    kind: "Input",
	    content: {
	      question: "Please select county and city.",
	      fields: [{ kind: "select", label: "Select County", datasource: "county", store: "county" }, { kind: "select", label: "Select City", datasource: "city", store: "city" }],
	      next: "single_2"
	    }
	  }, {
	    id: "single_2",
	    kind: "Single",
	    content: {
	      question: "Is this a deed transfer or entity transfer?",
	      fields: [{ kind: "choice", label: "Entity", next: "single_3" }, { kind: "choice", label: "Deed", next: "multi_2" }]
	    }
	  }, {
	    id: "multi_2",
	    kind: "Multi",
	    content: {
	      question: "County Exemptions",
	      fields: [{ datasource: "county_exemption_list" }],
	      store: "county_exemption",
	      next: "action_1"
	    }
	  }, {
	    id: "multi_3",
	    kind: "Multi",
	    content: {
	      question: "City Exemptions",
	      fields: [{ datasource: "city_exemption_list" }],
	      store: "city_exemption",
	      next: "action_2"
	    }
	  }, {
	    id: "action_1",
	    kind: "Action",
	    content: {
	      kind: "CHECK_COUNTY_EXEMPTION",
	      store: "county_exemption",
	      next: ["multi_3", "yesno_1"]
	    }
	  }, {
	    id: "action_2",
	    kind: "Action",
	    content: {
	      kind: "CHECK_CITY_EXEMPTION",
	      store: "city_exemption",
	      next: ["final_0", "yesno_1"]
	    }
	  }, {
	    id: "yesno_1",
	    kind: "YesNo",
	    content: {
	      question: "Was the deed made as a result of or in lieu of foreclosure or trustee's sale?",
	      fields: [{ kind: "choice", label: "Yes", next: "yesno_2" }, { kind: "choice", label: "No", next: "final_10" }]
	    }
	  }, {
	    id: "yesno_2",
	    kind: "YesNo",
	    content: {
	      question: "Did the consideration exceed the unpaid debt, including accrued interest and cost of foreclosure?",
	      fields: [{ kind: "choice", label: "Yes", next: "final_10" }, { kind: "choice", label: "No", next: "final_0" }]
	    }
	  }, {
	    id: "final_0",
	    kind: "Final",
	    content: {
	      title: "Transfer Tax",
	      message: "<p>Congratulation! This transaction is exempt and no transfer taxes are due.</p>"
	    }
	  }, {
	    id: "final_10",
	    kind: "Final",
	    content: {
	      kind: "CalculateTax"
	    }
	  }, {
	    id: "single_3",
	    kind: "Single",
	    content: {
	      question: "What kind of entity is the property owner at the time of the transfer?",
	      fields: [{ kind: "choice", label: "Partnership", next: "yesno_3" }, { kind: "choice", label: "Corporation", next: "yesno_4" }, { kind: "choice", label: "Disregarded Entity", next: "yesno_4" }]
	    }
	  }, {
	    id: "yesno_3",
	    kind: "YesNo",
	    content: {
	      question: "Was there a transfer of 50% or more of the capital and profits of the partnership within a 12-month period?",
	      fields: [{ kind: "choice", label: "Yes", next: "final_1" }, { kind: "choice", label: "No", next: "final_2" }]
	    }
	  }, {
	    id: "final_1",
	    kind: "Final",
	    content: {
	      title: "Transfer tax",
	      message: "<p>100% of the net value of the partnership property is subject to transfer tax, even if less than 100% of the partnership is transferred.</p>\n              <p><small>(See California Revenue and Taxation Code, Section 11925(b))</small></p>",
	      next: "CalculateTax"
	    }
	  }, {
	    id: "final_2",
	    kind: "Final",
	    content: {
	      title: "Transfer tax",
	      message: "<p>Congratulations! This transaction is exempt and no transfer taxes are due.</p>\n          <p><small>(See California Revenue and Taxation Code, Section 11925(a))</small></p>"
	    }
	  }, {
	    id: "yesno_4",
	    kind: "YesNo",
	    content: {
	      question: "Does grantee own over 50% of the entity?",
	      fields: [{ kind: "choice", label: "Yes", next: "yesno_5" }, { kind: "choice", label: "No", next: "yesno_6" }]
	    }
	  }, {
	    id: "yesno_5",
	    kind: "YesNo",
	    content: {
	      question: "Did grantee own over 50% of the entity before the transaction?",
	      fields: [{ kind: "choice", label: "Yes", next: "final_0" }, { kind: "choice", label: "No", next: "final_4" }]
	    }
	  }, {
	    id: "final_4",
	    kind: "Final",
	    content: {
	      title: "Transfer tax",
	      message: "<p>The transfer is subject to transfer tax.</p>\n          <p><small>(See California Revenue and Taxation Code, section 64(c)(1))</small></p>",
	      next: "CalculateTax"
	    }
	  }, {
	    id: "yesno_6",
	    kind: "YesNo",
	    content: {
	      question: "Was there a prior excluded proportional interest transfer?",
	      fields: [{ kind: "choice", label: "Yes", next: "yesno_7" }, { kind: "choice", label: "No", next: "final_0" }]
	    }
	  }, {
	    id: "yesno_7",
	    kind: "YesNo",
	    content: {
	      question: "Was more than 50% cumulatively transferred since (and including) the prior proportional interest transfer?",
	      fields: [{ kind: "choice", label: "Yes", next: "final_5" }, { kind: "choice", label: "No", next: "final_0" }]
	    }
	  }, {
	    id: "final_5",
	    kind: "Final",
	    content: {
	      title: "Transfer tax",
	      message: "<p>The transfer is subject to transfer tax.</p>\n          <p><small>(See California Revenue and Taxation Code, section 64(d); 926 North Ardmore Avenue, LLC v. County of Los Angeles, California Supreme Court)</small></p>",
	      next: "CalculateTax"
	    }
	  }]
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(40);
	
	var _AppReducer = __webpack_require__(72);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PostReducer = __webpack_require__(84);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	var _IntlReducer = __webpack_require__(80);
	
	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);
	
	var _ProgramReducer = __webpack_require__(33);
	
	var _ProgramReducer2 = _interopRequireDefault(_ProgramReducer);
	
	var _AuthReducer = __webpack_require__(78);
	
	var _AuthReducer2 = _interopRequireDefault(_AuthReducer);
	
	var _reactNotificationSystemRedux = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Combine all reducers into one root reducer
	
	
	// Import Reducers
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  posts: _PostReducer2.default,
	  intl: _IntlReducer2.default,
	  programs: _ProgramReducer2.default,
	  auth: _AuthReducer2.default,
	  notifications: _reactNotificationSystemRedux.reducer
	}); /**
	     * Root Reducer
	     */

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.google = google;
	exports.facebook = facebook;
	exports.loginSuccess = loginSuccess;
	exports.loginFailure = loginFailure;
	exports.register = register;
	exports.logout = logout;
	exports.getUser = getUser;
	
	var _user = __webpack_require__(18);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _passport = __webpack_require__(19);
	
	var _passport2 = _interopRequireDefault(_passport);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Login a User
	 */
	
	function social(provider, req, res) {
	  var info = req.body[provider];
	
	  return _user2.default.findOne({ id: info.id, provider: provider }).then(function (user) {
	    if (user) {
	      return user;
	    } else {
	      var newUser = (0, _user2.default)({
	        provider: provider,
	        id: info.id,
	        emails: [{
	          value: info.email
	        }],
	
	        name: {
	          familyName: info.familyName,
	          givenName: info.givenName
	        },
	
	        photo: info.photo
	      });
	
	      return newUser.save();
	    }
	  });
	  // .then(user => {
	  //   req.login(user, function(err) {
	  //     if (err) loginFailure(req, res);
	  //     loginSuccess(loginSuccess(req, res));
	  //   });
	  // });
	}
	
	function google(req, res) {
	  social('google', req, res).then(function (user) {
	    req.login(user, function (err) {
	      if (err) loginFailure(req, res);
	      loginSuccess(loginSuccess(req, res));
	    });
	  });
	}
	
	function facebook(req, res) {
	  social('facebook', req, res).then(function (user) {
	    req.login(user, function (err) {
	      if (err) loginFailure(req, res);
	      loginSuccess(loginSuccess(req, res));
	    });
	  });
	}
	
	function loginSuccess(req, res) {
	  //login process is done by passport.authenticate, so we only send success message here.
	  res.status(200).json({ status: 200, message: 'Login Successfully !', user: req.user });
	}
	
	function loginFailure(req, res) {
	  res.status(400).json({ status: 400, message: 'Login Failure !' });
	}
	
	/**
	 * Register a User
	 */
	function register(req, res) {
	
	  var newUser = new _user2.default({
	    provider: 'local',
	    id: req.body.email,
	    emails: [{
	      value: req.body.email
	    }],
	
	    name: {
	      familyName: req.body.lastName,
	      givenName: req.body.firstName
	    },
	
	    password: req.body.password
	  });
	
	  newUser.save().then(function (user) {
	    return res.status(201).json({ status: 201, message: 'User Registered Successfully !', user: user });
	  }).catch(function (err) {
	    if (err.code == 11000) {
	      res.status(409).json({ status: 409, message: 'The User Already Registered !' });
	    } else {
	      res.status(500).json({ status: 500, message: 'Internal Server Error !', err: err });
	    }
	  });
	}
	
	function logout(req, res) {
	  req.logout();
	  res.status(200).json({ status: 200, message: 'Logout' });
	}
	
	function getUser(req, res) {
	  if (req.user) {
	    res.status(200).json({ status: 200, user: req.user });
	  } else {
	    res.status(401).json({ status: 401, message: 'UnAuthorized.' });
	  }
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;
	
	var _post = __webpack_require__(114);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _cuid = __webpack_require__(118);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(123);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(133);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}
	
	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }
	
	  var newPost = new _post2.default(req.body.post);
	
	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);
	
	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}
	
	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}
	
	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	
	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.add = add;
	exports.get = get;
	exports.remove = remove;
	
	var _program = __webpack_require__(37);
	
	var _program2 = _interopRequireDefault(_program);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Save a program
	 */
	function add(req, res) {
	  var program = req.body.program;
	  if (!program || !program.name) {
	    res.status(403).end();
	  }
	
	  var newProg = new _program2.default(program);
	
	  newProg.save().then(function (prog) {
	    return res.json(prog.toJSON());
	  }).catch(function (err) {
	    return res.json({ post: saved });
	  });
	}
	
	/**
	 * Get a single program
	 */
	function get(req, res) {
	  var name = req.params.name;
	
	  _program2.default.findOne({ name: name }).then(function (program) {
	    return res.json(program.toJSON());
	  }).catch(function (err) {
	    return res.status(500).send(err);
	  });
	}
	
	/**
	 * Delete a post
	 */
	function remove(req, res) {
	  var name = req.params.name;
	
	  _program2.default.remove({ name: name }).then(function () {
	    return res.status(200).end();
	  }).catch(function (err) {
	    return res.status(500).send(err);
	  });
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(11);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _express = __webpack_require__(10);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(52);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(11);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(51);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(57);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _IntlWrapper = __webpack_require__(42);
	
	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);
	
	var _connectFlash = __webpack_require__(53);
	
	var _connectFlash2 = _interopRequireDefault(_connectFlash);
	
	var _cookieParser = __webpack_require__(54);
	
	var _cookieParser2 = _interopRequireDefault(_cookieParser);
	
	var _expressSession = __webpack_require__(55);
	
	var _expressSession2 = _interopRequireDefault(_expressSession);
	
	var _passport = __webpack_require__(19);
	
	var _passport2 = _interopRequireDefault(_passport);
	
	var _webpack = __webpack_require__(21);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(50);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(59);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(60);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(44);
	
	var _reactRedux = __webpack_require__(2);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(58);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(20);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(43);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(49);
	
	var _post = __webpack_require__(47);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _program = __webpack_require__(48);
	
	var _program2 = _interopRequireDefault(_program);
	
	var _auth = __webpack_require__(46);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	var _user = __webpack_require__(18);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _dummyData = __webpack_require__(45);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	var _config = __webpack_require__(17);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LocalStrategy = __webpack_require__(56).Strategy;
	
	// Webpack Requirements
	
	
	// Initialize the Express App
	var app = new _express2.default();
	
	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}
	
	// React And Redux Setup
	
	
	// Import required modules
	
	
	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;
	
	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	
	  // feed some dummy data in DB.
	  // dummyData();
	});
	
	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use((0, _cookieParser2.default)());
	app.use((0, _connectFlash2.default)());
	app.use((0, _expressSession2.default)({
	  secret: 'snowsea love',
	  resave: false,
	  saveUninitialized: true,
	  cookie: { secure: false }
	}));
	app.use(_passport2.default.initialize());
	app.use(_passport2.default.session());
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
	
	_passport2.default.serializeUser(function (user, done) {
	  done(null, user.id);
	});
	
	_passport2.default.deserializeUser(function (id, done) {
	  _user2.default.findOne({ id: id }, function (err, user) {
	    done(err, user);
	  });
	});
	
	_passport2.default.use(new LocalStrategy({
	  usernameField: 'email',
	  passwordField: 'password'
	}, function (email, password, done) {
	  _user2.default.findOne({ id: email }, function (err, user) {
	    if (err) {
	      return done(err);
	    }
	
	    if (!user) {
	      return done(null, false, { message: 'Incorrect username.' });
	    }
	
	    if (!user.validPassword(password)) {
	      return done(null, false, { message: 'Incorrect password.' });
	    }
	
	    return done(null, user);
	  });
	}));
	
	app.use('/api/auth', (0, _auth2.default)(_passport2.default));
	app.use('/api', _post2.default);
	app.use('/api/programs', _program2.default);
	
	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();
	
	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        <link href=\'https://fonts.googleapis.com/css?family=Roboto:500,400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />\n        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n\n        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">\n\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n\n        <style>\n        @media (max-width: 991px) {\n            .navbar-header {\n                float: none;\n            }\n            .navbar-toggle {\n                display: block;\n            }\n            .navbar-collapse {\n                border-top: 1px solid transparent;\n                box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);\n            }\n            .navbar-collapse.collapse {\n                display: none!important;\n            }\n            .navbar-nav {\n                float: none!important;\n                margin: 7.5px -15px;\n            }\n            .navbar-nav>li {\n                float: none;\n            }\n            .navbar-nav>li>a {\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n            .navbar-text {\n                float: none;\n                margin: 15px 0;\n            }\n            /* since 3.1.0 */\n            .navbar-collapse.collapse.in {\n                display: block!important;\n            }\n            .collapsing {\n                overflow: hidden!important;\n            }\n        }\n        </style>\n      </head>\n      <body>\n        <div id="root">' + (process.env.NODE_ENV === 'production' ? html : '<div>' + html + '</div>') + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>\n        <script>\n          new WOW().init();\n        </script>\n      </body>\n    </html>\n  ';
	};
	
	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};
	
	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }
	
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	
	    if (!renderProps) {
	      return next();
	    }
	
	    var store = (0, _store.configureStore)();
	
	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
	      var finalState = store.getState();
	
	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});
	
	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = require("better-react-spinkit");

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = require("react-autosuggest");

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ }
/******/ ]);