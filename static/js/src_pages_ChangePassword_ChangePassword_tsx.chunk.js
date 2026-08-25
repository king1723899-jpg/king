"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_ChangePassword_ChangePassword_tsx"],
  {
    /***/ "./src/pages/ChangePassword/ChangePassword.tsx":
      /*!*****************************************************!*\
  !*** ./src/pages/ChangePassword/ChangePassword.tsx ***!
  \*****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _InputComponent__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./InputComponent */ "./src/pages/ChangePassword/InputComponent.tsx"
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/ChangePassword/ChangePassword.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const ChangePassword = () => {
          _s();
          const [passobj, setpassobj] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
          const [errorMsg, setErrorMsg] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
          const navigate = (0,
          _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_7__.useNavigateCustom)();
          const changeHandler = (event) => {
            const btnObj = {
              ...passobj,
            };
            btnObj[event.target.name] = event.target.value;
            setpassobj(btnObj);
          };
          const submitHandler = () => {
            const errormsg = {};
            if (!passobj["current_password"]) {
              errormsg["current_password"] = "Please Enter Current Password";
            }
            if (!passobj["new_password"]) {
              errormsg["new_password"] = "Please Enter New Password";
            }
            if (!passobj["confirm_password"]) {
              errormsg["confirm_password"] = "Please Enter Confirm Password";
            }
            if (
              passobj["confirm_password"] &&
              passobj["new_password"] &&
              passobj["new_password"] != passobj["confirm_password"]
            ) {
              errormsg["confirm_password"] =
                "New Password and Confirm Password does Not Match";
            }
            if (errormsg && Object.keys(errormsg).length > 0) {
              setErrorMsg(errormsg);
              return;
            }
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"]
              .updateuserpassword(passobj)
              .then(() => {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(
                  "Password Updated Successfully"
                );
                dispatch(
                  (0,
                  _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_8__.logout)()
                );
                navigate.go("/dash?login=1");
              })
              .catch((e) => {
                const error = e.response.data.message;
                setErrorMsg(e.response.data.errors);
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error);
              });
          };
          const renderInputBox = (name, label) => {
            const rendbox = [];
            rendbox.push(
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                _InputComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
                {
                  valName: `${name}`,
                  labelName: `${label}`,
                  changeHandler: changeHandler,
                  errorMsg: errorMsg,
                  btnValue: passobj,
                },
                0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 7,
                },
                undefined
              )
            );
            return rendbox;
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ].subheader("Change Password"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                  "div",
                  {
                    className:
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile
                        ? "col-md-12 mt-1"
                        : "col-md-12 padding-custom",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                      "div",
                      {
                        className: "",
                        children: [
                          _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__[
                            "default"
                          ].subheaderdesktop("Change Password"),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                            "div",
                            {
                              className: "card-body p0",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "div",
                                  {
                                    className: "row row5 mb-1",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      "div",
                                      {
                                        className: "col-12 col-lg-6",
                                        children: renderInputBox(
                                          "current_password",
                                          "Current Password"
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 82,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 81,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "div",
                                  {
                                    className: "row row5 mb-1",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      "div",
                                      {
                                        className: "col-12 col-lg-6",
                                        children: renderInputBox(
                                          "new_password",
                                          "New Password"
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 87,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 86,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "div",
                                  {
                                    className: "row row5 mb-1",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      "div",
                                      {
                                        className: "col-12 col-lg-6",
                                        children: renderInputBox(
                                          "confirm_password",
                                          "Confirm Password"
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 93,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 92,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "div",
                                  {
                                    className: "row row5 mt-2",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      "div",
                                      {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                          "button",
                                          {
                                            className: "btn btn-primary",
                                            onClick: submitHandler,
                                            children: "Update",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 100,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 99,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 98,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 80,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true
          );
        };
        _s(ChangePassword, "4dzU1iEUgjLpHVY5VYjLj1KhPgg=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch,
            _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_7__.useNavigateCustom,
          ];
        });
        _c = ChangePassword;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChangePassword;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "ChangePassword");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
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

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/ChangePassword/InputComponent.tsx":
      /*!*****************************************************!*\
  !*** ./src/pages/ChangePassword/InputComponent.tsx ***!
  \*****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/ChangePassword/InputComponent.tsx";

        const InputComponent = ({
          valName,
          changeHandler,
          labelName,
          btnValue,
          errorMsg,
          ...props
        }) => {
          const btnObj = btnValue ? btnValue : {};
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
            "div",
            {
              className: "row row5 mb-1",
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                "div",
                {
                  className: "col-12",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                    "div",
                    {
                      className: "form-group mb-0",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                          "label",
                          {
                            children: labelName,
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 14,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                          "input",
                          {
                            placeholder: "",
                            name: valName,
                            type: "password",
                            className: "form-control",
                            onChange: changeHandler,
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 15,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        (errorMsg === null || errorMsg === void 0
                          ? void 0
                          : errorMsg[valName]) &&
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                            "span",
                            {
                              id: "username-required",
                              className: "error mt-10",
                              children:
                                errorMsg === null || errorMsg === void 0
                                  ? void 0
                                  : errorMsg[valName],
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 23,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 13,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 5,
            },
            undefined
          );
        };
        _c = InputComponent;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          InputComponent;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "InputComponent");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
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

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/_layout/elements/mobile-subheader.tsx":
      /*!*********************************************************!*\
  !*** ./src/pages/_layout/elements/mobile-subheader.tsx ***!
  \*********************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/mobile-subheader.tsx";

        const subheader = (title) => {
          return react_device_detect__WEBPACK_IMPORTED_MODULE_0__.isMobile
            ? /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                "div",
                {
                  className: "game-heading",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                    "span",
                    {
                      className: "card-header-title",
                      children: title,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 5,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 4,
                  columnNumber: 5,
                },
                undefined
              )
            : "";
        };
        const subheaderdesktop = (title) => {
          return !react_device_detect__WEBPACK_IMPORTED_MODULE_0__.isMobile
            ? /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                "div",
                {
                  className: "card-header",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                    "h4",
                    {
                      className: "mb-0",
                      children: title,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 5,
                },
                undefined
              )
            : "";
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
          subheader,
          subheaderdesktop,
        };

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
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

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },
  },
]);
//# sourceMappingURL=src_pages_ChangePassword_ChangePassword_tsx.chunk.js.map
