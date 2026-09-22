"use strict";
(globalThis["webpackChunkfair_react"] = globalThis["webpackChunkfair_react"] || []).push([["src_admin-app_pages_login_login_tsx"],{

/***/ "./src/admin-app/pages/login/login.tsx":
/*!*********************************************!*\
  !*** ./src/admin-app/pages/login/login.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.ts");
/* harmony import */ var _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx");
/* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/webSocketUser */ "./src/context/webSocketUser.tsx");
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/hooks */ "./src/redux/hooks.ts");
/* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts");
/* harmony import */ var _redux_actions_login_login_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/login/login.action */ "./src/redux/actions/login/login.action.ts");
/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/SubmitButton */ "./src/components/SubmitButton.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/login/login.tsx",
  _s = __webpack_require__.$Refresh$.signature();










const Login = () => {
  _s();
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
  const userState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__.selectUserData);
  const {
    socketUser
  } = (0,_context_webSocketUser__WEBPACK_IMPORTED_MODULE_3__.useWebsocketUser)();
  const navigate = (0,_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_2__.useNavigateCustom)();
  const [loginForm, setLoginForm] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    username: '',
    password: '',
    logs: '',
    admin: true
  });
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    // Get IP address for logs - this is optional and shouldn't prevent login
    _utils_api__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"/ipapi/json"}`).then(res => {
      setLoginForm(prev => ({
        ...prev,
        logs: res.data
      }));
    }).catch(error => {
      var _error$response;
      // Handle rate limiting specifically
      if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 429) {
        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.warn('IP service rate limited. Please try again in a moment. Login will still work.');
        console.log('IP API rate limited (429) - continuing with login');
      } else {
        console.log('IP API failed:', error.message, '- continuing with login');
      }
      // Set empty logs to allow login to proceed
      setLoginForm(prev => ({
        ...prev,
        logs: ''
      }));
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (userState.status === 'done') {
      const {
        role,
        _id
      } = userState.user;
      socketUser.emit('login', {
        role: userState.user.role,
        sessionId: userState.user.sessionId,
        _id
      });
      if (userState.user.role && ['admin', '1', '2', '3'].includes(userState.user.role)) {
        return navigate.go('/');
      }
      return navigate.go('/');
    }
  }, [userState]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (userState.status === 'failed' && userState.error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(String(userState.error));
    }
  }, [userState.status, userState.error]);
  const handleForm = e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch((0,_redux_actions_login_login_action__WEBPACK_IMPORTED_MODULE_6__.loginAction)(loginForm));
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "login",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "wrapper d-flex justify-content-center align-items-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "col-md-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "loginInner1",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "log-logo m-b-20 text-center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                  className: "text-logo logo-login",
                  children: "KING777"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "featured-box-login featured-box-secundary default log-fld",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
                  className: "text-center",
                  children: "Sign In"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("form", {
                  onSubmit: e => handleSubmit(e),
                  role: "form",
                  autoComplete: "off",
                  method: "post",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "form-group m-b-20",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
                      name: "username",
                      placeholder: "User Name",
                      type: "text",
                      className: "form-control",
                      "aria-required": "true",
                      "aria-invalid": "false",
                      onChange: handleForm,
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("small", {
                      className: "text-danger",
                      style: {
                        display: 'none'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "form-group m-b-20",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
                      name: "password",
                      placeholder: "Password",
                      type: "password",
                      className: "form-control",
                      "aria-required": "true",
                      "aria-invalid": "false",
                      onChange: handleForm,
                      required: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, undefined), userState.error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("small", {
                      className: "text-danger",
                      children: userState.error
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 25
                    }, undefined) : '']
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "form-group text-center mb-0",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      type: "submit",
                      className: "btn btn-submit btn-login",
                      children: ["Login", userState.status === 'loading' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("i", {
                        className: "fas fa-spinner fa-spin"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 27
                      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("i", {
                        className: "fas fa-sign-in-alt"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "mt-2 text-center download-apk"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, undefined);
};
_s(Login, "xW33PRFFD0xhwSACYZ1BL5yDIZQ=", false, function () {
  return [_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch, _redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector, _context_webSocketUser__WEBPACK_IMPORTED_MODULE_3__.useWebsocketUser, _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_2__.useNavigateCustom];
});
_c = Login;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);
var _c;
__webpack_require__.$Refresh$.register(_c, "Login");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/SubmitButton.tsx":
/*!*****************************************!*\
  !*** ./src/components/SubmitButton.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmitButton: () => (/* binding */ SubmitButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts");
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/hooks */ "./src/redux/hooks.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/www/wwwroot/Ambani/fair-react-stone/src/components/SubmitButton.tsx",
  _s = __webpack_require__.$Refresh$.signature();




const SubmitButton = props => {
  _s();
  const {
    children,
    ...rest
  } = props;
  const loading = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_1__.selectLoader);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
    disabled: loading,
    ...rest,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};
_s(SubmitButton, "rXPml3F534oSMqYG27ny6wAIg8o=", false, function () {
  return [_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector];
});
_c = SubmitButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitButton);
var _c;
__webpack_require__.$Refresh$.register(_c, "SubmitButton");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=src_admin-app_pages_login_login_tsx.chunk.js.map

