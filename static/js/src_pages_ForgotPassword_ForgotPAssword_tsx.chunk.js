"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_ForgotPassword_ForgotPAssword_tsx"],
  {
    /***/ "./src/components/SubmitButton.tsx":
      /*!*****************************************!*\
  !*** ./src/components/SubmitButton.tsx ***!
  \*****************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SubmitButton: () => /* binding */ SubmitButton,
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/components/SubmitButton.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const SubmitButton = (props) => {
          _s();
          const { children, ...rest } = props;
          const loading = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_1__.selectLoader
          );
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
            "button",
            {
              disabled: loading,
              ...rest,
              children: children,
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(SubmitButton, "rXPml3F534oSMqYG27ny6wAIg8o=", false, function () {
          return [_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector];
        });
        _c = SubmitButton;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SubmitButton;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "SubmitButton");

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

    /***/ "./src/pages/ForgotPassword/ForgotPAssword.tsx":
      /*!*****************************************************!*\
  !*** ./src/pages/ForgotPassword/ForgotPAssword.tsx ***!
  \*****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../services/deposit-withdraw.service */ "./src/services/deposit-withdraw.service.ts"
          );
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
          );
        /* harmony import */ var _forgotPassword_css__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./forgotPassword.css */ "./src/pages/ForgotPassword/forgotPassword.css"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/ForgotPassword/ForgotPAssword.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const ForgotPassword = () => {
          _s();
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
          const [step, setStep] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("phone");
          const [phoneNumber, setPhoneNumber] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [otp, setOtp] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [password, setPassword] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [confirmPassword, setConfirmPassword] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [isLoading, setIsLoading] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

          // Debug render
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            console.log("ForgotPassword render, step:", step);
          });
          const handleSendOtp = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            try {
              var _response$data, _response$data2, _response$data2$data;
              // Clean phone number (remove +91 if present)
              let cleanPhoneNumber = phoneNumber
                .replace(/^\+91/, "")
                .replace(/^91/, "");

              // Validate 10 digits
              if (cleanPhoneNumber.length !== 10) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  "Please enter a valid 10-digit number"
                );
                setIsLoading(false);
                return;
              }
              const response =
                await _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].sendOTP({
                  phone: cleanPhoneNumber,
                });
              if (
                (response !== null &&
                  response !== void 0 &&
                  (_response$data = response.data) !== null &&
                  _response$data !== void 0 &&
                  _response$data.success) ||
                (response !== null &&
                  response !== void 0 &&
                  (_response$data2 = response.data) !== null &&
                  _response$data2 !== void 0 &&
                  (_response$data2$data = _response$data2.data) !== null &&
                  _response$data2$data !== void 0 &&
                  _response$data2$data.success)
              ) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                  "OTP sent successfully to your WhatsApp number!"
                );
                setStep("otp");
              } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  "Failed to send OTP. Please try again."
                );
              }
            } catch (error) {
              console.error("Send OTP Error:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to send OTP. Please try again."
              );
            } finally {
              setIsLoading(false);
            }
          };
          const handleVerifyOtp = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            try {
              var _response$data3, _response$data4, _response$data4$data;
              let cleanPhoneNumber = phoneNumber
                .replace(/^\+91/, "")
                .replace(/^91/, "");
              const response =
                await _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].verifyOTP({
                  phone: cleanPhoneNumber,
                  otp: otp,
                });
              if (
                (response !== null &&
                  response !== void 0 &&
                  (_response$data3 = response.data) !== null &&
                  _response$data3 !== void 0 &&
                  _response$data3.success) ||
                (response !== null &&
                  response !== void 0 &&
                  (_response$data4 = response.data) !== null &&
                  _response$data4 !== void 0 &&
                  (_response$data4$data = _response$data4.data) !== null &&
                  _response$data4$data !== void 0 &&
                  _response$data4$data.success)
              ) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                  "OTP verified successfully!"
                );
                setStep("password");
              } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  "Invalid OTP. Please try again."
                );
              }
            } catch (error) {
              console.error("Verify OTP Error:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Invalid OTP. Please try again."
              );
            } finally {
              setIsLoading(false);
            }
          };
          const handleUpdatePassword = async (e) => {
            console.log("handleUpdatePassword called", {
              password,
              confirmPassword,
              isLoading,
            });
            e.preventDefault();
            setIsLoading(true);
            // Test toast to confirm toast system is working
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info(
              "Test toast: handleUpdatePassword triggered"
            );
            // Validate password
            if (password.length < 6) {
              console.log("Validation failed: password too short", password);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Password must be at least 6 characters long"
              );
              setIsLoading(false);
              return;
            }
            if (!/^(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
              console.log(
                "Validation failed: password not alphanumeric",
                password
              );
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Password must contain both letters and numbers"
              );
              setIsLoading(false);
              return;
            }
            if (password !== confirmPassword) {
              console.log(
                "Validation failed: passwords do not match",
                password,
                confirmPassword
              );
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Passwords do not match"
              );
              setIsLoading(false);
              return;
            }
            try {
              var _response$data5;
              let cleanPhoneNumber = phoneNumber
                .replace(/^\+91/, "")
                .replace(/^91/, "");
              // Debug log to confirm API call
              console.log("Calling updatePassword", {
                phone: cleanPhoneNumber,
                password,
                userId: "",
              });
              const response =
                await _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].updatePassword({
                  phone: cleanPhoneNumber,
                  password,
                  userId: "",
                });
              // Log the API response for debugging
              console.log("Update password response:", response);
              if (
                (response === null || response === void 0
                  ? void 0
                  : (_response$data5 = response.data) === null ||
                    _response$data5 === void 0
                  ? void 0
                  : _response$data5.error) === false
              ) {
                var _response$data6;
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                  (response === null || response === void 0
                    ? void 0
                    : (_response$data6 = response.data) === null ||
                      _response$data6 === void 0
                    ? void 0
                    : _response$data6.message) ||
                    "Password updated successfully!"
                );
                setPhoneNumber("");
                setOtp("");
                setPassword("");
                setConfirmPassword("");
                setTimeout(() => {
                  navigate("/dash?login=1");
                }, 1500);
              } else {
                var _response$data7;
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  (response === null || response === void 0
                    ? void 0
                    : (_response$data7 = response.data) === null ||
                      _response$data7 === void 0
                    ? void 0
                    : _response$data7.message) ||
                    "Failed to update password. Please try again."
                );
              }
            } catch (error) {
              var _error$response, _error$response$data;
              console.error("Update Password Error:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                (error === null || error === void 0
                  ? void 0
                  : (_error$response = error.response) === null ||
                    _error$response === void 0
                  ? void 0
                  : (_error$response$data = _error$response.data) === null ||
                    _error$response$data === void 0
                  ? void 0
                  : _error$response$data.message) ||
                  "Failed to update password. Please try again."
              );
            } finally {
              setIsLoading(false);
            }
          };
          const handleBackToPhone = () => {
            setStep("phone");
            setOtp("");
          };
          const handleBackToOtp = () => {
            setStep("otp");
            setPassword("");
            setConfirmPassword("");
          };
          const handleClose = () => {
            // Navigate back to login or close modal
            window.history.back();
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            "div",
            {
              className: "forgot-password-modal-overlay",
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                "div",
                {
                  className: "forgot-password-modal",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      "button",
                      {
                        className: "forgot-password-close-btn",
                        onClick: handleClose,
                        children: "\xD7",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      "div",
                      {
                        className: "forgot-password-logo",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                          "div",
                          {
                            className: "text-logo logo-image",
                            children: "KING777",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 161,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    step === "otp" &&
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        "div",
                        {
                          className: "success-banner",
                          children: "OTP sent success !",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      "div",
                      {
                        className: "forgot-password-content",
                        children:
                          step === "phone"
                            ? /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "form",
                                {
                                  onSubmit: handleSendOtp,
                                  className: "forgot-password-form",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "div",
                                      {
                                        className: "phone-input-container",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "country-code-selector",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                  "span",
                                                  {
                                                    className: "flag",
                                                    children:
                                                      "\uD83C\uDDEE\uD83C\uDDF3",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 182,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                  "span",
                                                  {
                                                    className: "code",
                                                    children: "+91",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 183,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                  "span",
                                                  {
                                                    className: "dropdown-arrow",
                                                    children: "\u25BC",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 184,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 181,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "input",
                                            {
                                              type: "text",
                                              placeholder: "Mobile no",
                                              className: "phone-input",
                                              value: phoneNumber,
                                              onChange: (e) =>
                                                setPhoneNumber(e.target.value),
                                              maxLength: 10,
                                              required: true,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 186,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 180,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "div",
                                      {
                                        className: "input-separator",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 197,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      _components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__[
                                        "default"
                                      ],
                                      {
                                        type: "submit",
                                        className: "get-otp-btn",
                                        disabled: isLoading,
                                        children: isLoading
                                          ? "SENDING..."
                                          : "GET OTP",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 199,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 179,
                                  columnNumber: 13,
                                },
                                undefined
                              )
                            : step === "otp"
                            ? /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "form",
                                {
                                  onSubmit: handleVerifyOtp,
                                  className: "forgot-password-form",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "div",
                                      {
                                        className: "otp-input-container",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "label",
                                            {
                                              className: "otp-label",
                                              children: "OTP",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 206,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "input",
                                            {
                                              type: "text",
                                              placeholder: "Enter 6-digit OTP",
                                              className: "otp-input",
                                              value: otp,
                                              onChange: (e) =>
                                                setOtp(e.target.value),
                                              maxLength: 6,
                                              required: true,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 207,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "small",
                                            {
                                              className: "otp-help-text",
                                              children: [
                                                "OTP sent to +91 ",
                                                phoneNumber,
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 216,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 205,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      _components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__[
                                        "default"
                                      ],
                                      {
                                        type: "submit",
                                        className: "verify-otp-btn",
                                        disabled: isLoading,
                                        children: isLoading
                                          ? "VERIFYING..."
                                          : "VERIFY OTP",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 221,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: handleBackToPhone,
                                        className: "back-btn",
                                        children: "\u2190 Back to Phone Number",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 225,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 204,
                                  columnNumber: 13,
                                },
                                undefined
                              )
                            : /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "form",
                                {
                                  onSubmit: handleUpdatePassword,
                                  className: "forgot-password-form",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "div",
                                      {
                                        className: "password-validation-hint",
                                        children:
                                          "(Must be contains alphanumeric and more than 6 letters)",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 235,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "div",
                                      {
                                        className: "password-input-container",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "label",
                                            {
                                              className: "password-label",
                                              children: "Password",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 240,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "input",
                                            {
                                              type: "password",
                                              placeholder: "Enter new password",
                                              className: "password-input",
                                              value: password,
                                              onChange: (e) =>
                                                setPassword(e.target.value),
                                              required: true,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 241,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 239,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "div",
                                      {
                                        className: "password-input-container",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "label",
                                            {
                                              className: "password-label",
                                              children: "Confirm Password",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 252,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "input",
                                            {
                                              type: "password",
                                              placeholder:
                                                "Confirm new password",
                                              className: "password-input",
                                              value: confirmPassword,
                                              onChange: (e) =>
                                                setConfirmPassword(
                                                  e.target.value
                                                ),
                                              required: true,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 253,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 251,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      _components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__[
                                        "default"
                                      ],
                                      {
                                        type: "submit",
                                        className: "update-password-btn",
                                        disabled: isLoading,
                                        children: isLoading
                                          ? "UPDATING..."
                                          : "UPDATE PASSWORD",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 263,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: handleBackToOtp,
                                        className: "back-btn",
                                        children: "\u2190 Back to OTP",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 267,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 234,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(ForgotPassword, "W0AaU2tv1ZrS8SAPFCajnvfXgMA=", false, function () {
          return [react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate];
        });
        _c = ForgotPassword;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ForgotPassword;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "ForgotPassword");

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

    /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/ForgotPassword/forgotPassword.css":
      /*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/ForgotPassword/forgotPassword.css ***!
  \***************************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `/* Forgot Password Modal Design - Matching the Image */

/* Modal Overlay */
.forgot-password-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #8B0000 0%, #4A0000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

/* Modal Container */
.forgot-password-modal {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

/* Close Button */
.forgot-password-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  background: #333;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.forgot-password-close-btn:hover {
  background: #555;
  transform: scale(1.1);
}

/* Logo Styling */
.forgot-password-logo {
  text-align: center;
  margin-bottom: 30px;
}

.logo-image {
  width: 120px;
  height: auto;
  margin-bottom: 10px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.logo-reddy {
  font-size: 2.5rem;
  font-weight: bold;
  color: #FFD700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  letter-spacing: 2px;
}

.logo-book {
  font-size: 1.2rem;
  color: #FFD700;
  font-weight: 600;
  margin-top: -5px;
}

.logo-club {
  font-size: 0.9rem;
  color: white;
  font-weight: 500;
  margin-top: 5px;
}

/* Success Banner */
.success-banner {
  background: #4CAF50;
  color: white;
  padding: 12px 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
  font-size: 14px;
}

/* Form Content */
.forgot-password-content {
  width: 100%;
}

.forgot-password-form {
  width: 100%;
}

/* Phone Input Container */
.phone-input-container {
  display: flex;
  align-items: center;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

/* Country Code Selector */
.country-code-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 15px;
  background: #333;
  border-right: 1px solid #444;
  cursor: pointer;
  transition: background 0.3s ease;
}

.country-code-selector:hover {
  background: #444;
}

.flag {
  font-size: 16px;
}

.code {
  color: white;
  font-weight: 500;
  font-size: 14px;
}

.dropdown-arrow {
  color: #999;
  font-size: 10px;
  margin-left: 5px;
}

/* Phone Input */
.phone-input {
  flex: 1 1;
  padding: 12px 15px;
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  outline: none;
}

.phone-input::placeholder {
  color: #999;
}

.phone-input:focus {
  background: #333;
}

/* Input Separator */
.input-separator {
  height: 1px;
  background: #444;
  margin: 20px 0;
}

/* Get OTP Button */
.get-otp-btn {
  width: 100%;
  padding: 12px;
  background: #DC143C;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.get-otp-btn:hover:not(:disabled) {
  background: #B22222;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
}

.get-otp-btn:disabled {
  background: #666;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* OTP Input Container */
.otp-input-container {
  margin-bottom: 20px;
}

.otp-label {
  display: block;
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.otp-input {
  width: 100%;
  padding: 12px 15px;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  text-align: center;
  letter-spacing: 3px;
  font-weight: bold;
  outline: none;
  transition: all 0.3s ease;
}

.otp-input::placeholder {
  color: #999;
  letter-spacing: 1px;
}

.otp-input:focus {
  border-color: #DC143C;
  box-shadow: 0 0 10px rgba(220, 20, 60, 0.3);
}

.otp-help-text {
  display: block;
  color: #999;
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
}

/* Verify OTP Button */
.verify-otp-btn {
  width: 100%;
  padding: 12px;
  background: #DC143C;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.verify-otp-btn:hover:not(:disabled) {
  background: #B22222;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
}

.verify-otp-btn:disabled {
  background: #666;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Password Validation Hint */
.password-validation-hint {
  color: #FF6B6B;
  font-size: 12px;
  margin-bottom: 15px;
  text-align: center;
  font-style: italic;
}

/* Password Input Container */
.password-input-container {
  margin-bottom: 20px;
}

.password-label {
  display: block;
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.password-input {
  width: 100%;
  padding: 12px 15px;
  background: #2a2a2a;
  border: none;
  border-bottom: 1px solid #444;
  color: white;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.password-input::placeholder {
  color: #999;
}

.password-input:focus {
  border-bottom-color: #DC143C;
  background: #333;
}

/* Update Password Button */
.update-password-btn {
  width: 100%;
  padding: 12px;
  background: #DC143C;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.update-password-btn:hover:not(:disabled) {
  background: #B22222;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
}

.update-password-btn:disabled {
  background: #666;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Back Button */
.back-btn {
  width: 100%;
  padding: 10px;
  background: transparent;
  color: #999;
  border: 1px solid #444;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #333;
  color: white;
  border-color: #666;
}

/* Loading Spinner */
.get-otp-btn:disabled::before,
.verify-otp-btn:disabled::before,
.update-password-btn:disabled::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 8px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 480px) {
  .forgot-password-modal {
    padding: 20px;
    margin: 10px;
  }
  
  .logo-reddy {
    font-size: 2rem;
  }
  
  .logo-book {
    font-size: 1rem;
  }
  
  .logo-club {
    font-size: 0.8rem;
  }
  
  .phone-input-container {
    flex-direction: column;
  }
  
  .country-code-selector {
    border-right: none;
    border-bottom: 1px solid #444;
    justify-content: center;
  }
  
  .phone-input {
    text-align: center;
  }
}

/* Hide scrollbars */
.forgot-password-modal-overlay * {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.forgot-password-modal-overlay *::-webkit-scrollbar {
  display: none;
}

/* Hide original elements */
.log-logo,
.featured-box-login,
.login-container,
.login-left,
.login-right {
  display: none !important;
} `,
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/pages/ForgotPassword/forgotPassword.css",
            ],
            names: [],
            mappings:
              "AAAA,sDAAsD;;AAEtD,kBAAkB;AAClB;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,6DAA6D;EAC7D,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,aAAa;AACf;;AAEA,oBAAoB;AACpB;EACE,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,4CAA4C;EAC5C,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA,iBAAiB;AACjB;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;EAClB,gBAAgB;EAChB,4BAA4B;EAC5B,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,SAAO;EACP,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;AAChB;;AAEA,mBAAmB;AACnB;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA,wBAAwB;AACxB;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,2CAA2C;AAC7C;;AAEA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,eAAe;EACf,kBAAkB;AACpB;;AAEA,sBAAsB;AACtB;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA,6BAA6B;AAC7B;EACE,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA,6BAA6B;AAC7B;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;;AAEA,oBAAoB;AACpB;;;EAGE,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,kBAAkB;EAClB,uBAAuB;EACvB,uCAAuC;EACvC,iBAAiB;AACnB;;AAEA;EACE,KAAK,yBAAyB,EAAE;AAClC;;AAEA,sBAAsB;AACtB;EACE;IACE,aAAa;IACb,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,6BAA6B;IAC7B,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA,oBAAoB;AACpB;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA,2BAA2B;AAC3B;;;;;EAKE,wBAAwB;AAC1B",
            sourcesContent: [
              "/* Forgot Password Modal Design - Matching the Image */\r\n\r\n/* Modal Overlay */\r\n.forgot-password-modal-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(135deg, #8B0000 0%, #4A0000 100%);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 9999;\r\n  padding: 20px;\r\n}\r\n\r\n/* Modal Container */\r\n.forgot-password-modal {\r\n  background: #1a1a1a;\r\n  border: 1px solid #333;\r\n  border-radius: 12px;\r\n  padding: 30px;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  position: relative;\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* Close Button */\r\n.forgot-password-close-btn {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 15px;\r\n  width: 30px;\r\n  height: 30px;\r\n  background: #333;\r\n  border: none;\r\n  border-radius: 50%;\r\n  color: white;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.forgot-password-close-btn:hover {\r\n  background: #555;\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* Logo Styling */\r\n.forgot-password-logo {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.logo-image {\r\n  width: 120px;\r\n  height: auto;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.logo-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n\r\n.logo-reddy {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  color: #FFD700;\r\n  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.logo-book {\r\n  font-size: 1.2rem;\r\n  color: #FFD700;\r\n  font-weight: 600;\r\n  margin-top: -5px;\r\n}\r\n\r\n.logo-club {\r\n  font-size: 0.9rem;\r\n  color: white;\r\n  font-weight: 500;\r\n  margin-top: 5px;\r\n}\r\n\r\n/* Success Banner */\r\n.success-banner {\r\n  background: #4CAF50;\r\n  color: white;\r\n  padding: 12px 15px;\r\n  border-radius: 8px;\r\n  text-align: center;\r\n  font-weight: 500;\r\n  margin-bottom: 20px;\r\n  font-size: 14px;\r\n}\r\n\r\n/* Form Content */\r\n.forgot-password-content {\r\n  width: 100%;\r\n}\r\n\r\n.forgot-password-form {\r\n  width: 100%;\r\n}\r\n\r\n/* Phone Input Container */\r\n.phone-input-container {\r\n  display: flex;\r\n  align-items: center;\r\n  background: #2a2a2a;\r\n  border: 1px solid #444;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* Country Code Selector */\r\n.country-code-selector {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  padding: 12px 15px;\r\n  background: #333;\r\n  border-right: 1px solid #444;\r\n  cursor: pointer;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.country-code-selector:hover {\r\n  background: #444;\r\n}\r\n\r\n.flag {\r\n  font-size: 16px;\r\n}\r\n\r\n.code {\r\n  color: white;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n\r\n.dropdown-arrow {\r\n  color: #999;\r\n  font-size: 10px;\r\n  margin-left: 5px;\r\n}\r\n\r\n/* Phone Input */\r\n.phone-input {\r\n  flex: 1;\r\n  padding: 12px 15px;\r\n  background: transparent;\r\n  border: none;\r\n  color: white;\r\n  font-size: 16px;\r\n  outline: none;\r\n}\r\n\r\n.phone-input::placeholder {\r\n  color: #999;\r\n}\r\n\r\n.phone-input:focus {\r\n  background: #333;\r\n}\r\n\r\n/* Input Separator */\r\n.input-separator {\r\n  height: 1px;\r\n  background: #444;\r\n  margin: 20px 0;\r\n}\r\n\r\n/* Get OTP Button */\r\n.get-otp-btn {\r\n  width: 100%;\r\n  padding: 12px;\r\n  background: #DC143C;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.get-otp-btn:hover:not(:disabled) {\r\n  background: #B22222;\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);\r\n}\r\n\r\n.get-otp-btn:disabled {\r\n  background: #666;\r\n  cursor: not-allowed;\r\n  transform: none;\r\n  box-shadow: none;\r\n}\r\n\r\n/* OTP Input Container */\r\n.otp-input-container {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.otp-label {\r\n  display: block;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.otp-input {\r\n  width: 100%;\r\n  padding: 12px 15px;\r\n  background: #2a2a2a;\r\n  border: 1px solid #444;\r\n  border-radius: 8px;\r\n  color: white;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  letter-spacing: 3px;\r\n  font-weight: bold;\r\n  outline: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.otp-input::placeholder {\r\n  color: #999;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.otp-input:focus {\r\n  border-color: #DC143C;\r\n  box-shadow: 0 0 10px rgba(220, 20, 60, 0.3);\r\n}\r\n\r\n.otp-help-text {\r\n  display: block;\r\n  color: #999;\r\n  font-size: 12px;\r\n  margin-top: 5px;\r\n  text-align: center;\r\n}\r\n\r\n/* Verify OTP Button */\r\n.verify-otp-btn {\r\n  width: 100%;\r\n  padding: 12px;\r\n  background: #DC143C;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.verify-otp-btn:hover:not(:disabled) {\r\n  background: #B22222;\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);\r\n}\r\n\r\n.verify-otp-btn:disabled {\r\n  background: #666;\r\n  cursor: not-allowed;\r\n  transform: none;\r\n  box-shadow: none;\r\n}\r\n\r\n/* Password Validation Hint */\r\n.password-validation-hint {\r\n  color: #FF6B6B;\r\n  font-size: 12px;\r\n  margin-bottom: 15px;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n\r\n/* Password Input Container */\r\n.password-input-container {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.password-label {\r\n  display: block;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.password-input {\r\n  width: 100%;\r\n  padding: 12px 15px;\r\n  background: #2a2a2a;\r\n  border: none;\r\n  border-bottom: 1px solid #444;\r\n  color: white;\r\n  font-size: 16px;\r\n  outline: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.password-input::placeholder {\r\n  color: #999;\r\n}\r\n\r\n.password-input:focus {\r\n  border-bottom-color: #DC143C;\r\n  background: #333;\r\n}\r\n\r\n/* Update Password Button */\r\n.update-password-btn {\r\n  width: 100%;\r\n  padding: 12px;\r\n  background: #DC143C;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.update-password-btn:hover:not(:disabled) {\r\n  background: #B22222;\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);\r\n}\r\n\r\n.update-password-btn:disabled {\r\n  background: #666;\r\n  cursor: not-allowed;\r\n  transform: none;\r\n  box-shadow: none;\r\n}\r\n\r\n/* Back Button */\r\n.back-btn {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background: transparent;\r\n  color: #999;\r\n  border: 1px solid #444;\r\n  border-radius: 8px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.back-btn:hover {\r\n  background: #333;\r\n  color: white;\r\n  border-color: #666;\r\n}\r\n\r\n/* Loading Spinner */\r\n.get-otp-btn:disabled::before,\r\n.verify-otp-btn:disabled::before,\r\n.update-password-btn:disabled::before {\r\n  content: '';\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  border: 2px solid rgba(255, 255, 255, 0.3);\r\n  border-radius: 50%;\r\n  border-top-color: white;\r\n  animation: spin 1s ease-in-out infinite;\r\n  margin-right: 8px;\r\n}\r\n\r\n@keyframes spin {\r\n  to { transform: rotate(360deg); }\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 480px) {\r\n  .forgot-password-modal {\r\n    padding: 20px;\r\n    margin: 10px;\r\n  }\r\n  \r\n  .logo-reddy {\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  .logo-book {\r\n    font-size: 1rem;\r\n  }\r\n  \r\n  .logo-club {\r\n    font-size: 0.8rem;\r\n  }\r\n  \r\n  .phone-input-container {\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .country-code-selector {\r\n    border-right: none;\r\n    border-bottom: 1px solid #444;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .phone-input {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n/* Hide scrollbars */\r\n.forgot-password-modal-overlay * {\r\n  scrollbar-width: none;\r\n  -ms-overflow-style: none;\r\n}\r\n\r\n.forgot-password-modal-overlay *::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n/* Hide original elements */\r\n.log-logo,\r\n.featured-box-login,\r\n.login-container,\r\n.login-left,\r\n.login-right {\r\n  display: none !important;\r\n} ",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        ___CSS_LOADER_EXPORT___.locals = {};
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./src/pages/ForgotPassword/forgotPassword.css":
      /*!*****************************************************!*\
  !*** ./src/pages/ForgotPassword/forgotPassword.css ***!
  \*****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./forgotPassword.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/ForgotPassword/forgotPassword.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        if (true) {
          if (
            !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ].locals ||
            module.hot.invalidate
          ) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }
              var p;
              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }
                if (a[p] !== b[p]) {
                  return false;
                }
              }
              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }
                if (!a[p]) {
                  return false;
                }
              }
              return true;
            };
            var isNamedExport =
              !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals;
            var oldLocals = isNamedExport
              ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__
              : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].locals;

            module.hot.accept(
              /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./forgotPassword.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/ForgotPassword/forgotPassword.css",
              (__WEBPACK_OUTDATED_DEPENDENCIES__) => {
                /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__ =
                  __webpack_require__(
                    /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./forgotPassword.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/ForgotPassword/forgotPassword.css"
                  );
                (function () {
                  if (
                    !isEqualLocals(
                      oldLocals,
                      isNamedExport
                        ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__
                        : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ].locals,
                      isNamedExport
                    )
                  ) {
                    module.hot.invalidate();

                    return;
                  }

                  oldLocals = isNamedExport
                    ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__
                    : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ].locals;

                  update(
                    _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
                      "default"
                    ]
                  );
                })(__WEBPACK_OUTDATED_DEPENDENCIES__);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_forgotPassword_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },
  },
]);
//# sourceMappingURL=src_pages_ForgotPassword_ForgotPAssword_tsx.chunk.js.map
