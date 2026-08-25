"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_login_login_tsx"],
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

    /***/ "./src/pages/login/login.tsx":
      /*!***********************************!*\
  !*** ./src/pages/login/login.tsx ***!
  \***********************************/
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
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _redux_actions_login_login_action__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../redux/actions/login/login.action */ "./src/redux/actions/login/login.action.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ../../utils/api */ "./src/utils/api.ts");
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! ./login.css */ "./src/pages/login/login.css");
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/login/login.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const Login = () => {
          _s();
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_3__.selectUserData
          );
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_4__.useWebsocketUser)();
          const navigate = (0,
          _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_5__.useNavigateCustom)();
          const [loginForm, setLoginForm] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({
              username: "",
              password: "",
              logs: "",
              isDemo: false,
              admin: window.location.pathname.includes("/admin"),
            });
          const usernameInputRef =
            react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
          const passwordInputRef =
            react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
          const submitLockRef =
            react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            // âœ… Clear any stuck session data on login page load
            console.log("ðŸ”„ Login page mounted - checking for stuck sessions");

            // If user is stuck (has token but can't proceed), clear everything
            const existingToken = localStorage.getItem("token");
            if (existingToken) {
              console.log(
                "âš ï¸ Found existing token on login page - might be stuck session"
              );
              console.log(
                "   Token will be cleared if login fails or user clicks login button"
              );
            }

            // Get IP address for logs - this is optional and shouldn't prevent login
            _utils_api__WEBPACK_IMPORTED_MODULE_7__["default"]
              .get(`${"/ipapi/json"}`)
              .then((res) => {
                setLoginForm((prev) => ({
                  ...prev,
                  logs: res.data,
                }));
              })
              .catch((error) => {
                var _error$response;
                // Handle rate limiting specifically
                if (
                  ((_error$response = error.response) === null ||
                  _error$response === void 0
                    ? void 0
                    : _error$response.status) === 429
                ) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.warn(
                    "IP service rate limited. Please try again in a moment. Login will still work."
                  );
                  console.log(
                    "IP API rate limited (429) - continuing with login"
                  );
                } else {
                  console.log(
                    "IP API failed:",
                    error.message,
                    "- continuing with login"
                  );
                }
                // Set empty logs to allow login to proceed
                setLoginForm((prev) => ({
                  ...prev,
                  logs: "",
                }));
              });
          }, []);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (userState.status === "done") {
              const { role, _id } = userState.user;

              // Generate unique tab ID for this login
              const newTabId = `tab-${Date.now()}-${Math.random()}`;
              socketUser.emit("login", {
                role: userState.user.role,
                sessionId: userState.user.sessionId,
                _id,
              });

              // âœ… Store username:sessionId pair for account-specific detection
              const sessionData = `${userState.user.username}:${userState.user.sessionId}`;
              localStorage.setItem("login-session", sessionData);
              localStorage.setItem("current-username", userState.user.username);
              sessionStorage.setItem("my-tab-id", newTabId);
              console.log("âœ… Login successful!");
              console.log("   Username:", userState.user.username);
              console.log("   SessionId:", userState.user.sessionId);
              console.log("   Session Data:", sessionData);
              console.log("   Tab ID:", newTabId);
              console.log("   Broadcasting NEW_LOGIN to other tabs...");

              // âœ… Broadcast NEW_LOGIN event to other tabs in same browser
              try {
                const channel = new BroadcastChannel("session-channel");
                channel.postMessage({
                  type: "NEW_LOGIN",
                  tabId: newTabId,
                  sessionId: userState.user.sessionId,
                  username: userState.user.username,
                });
                console.log("   âœ… NEW_LOGIN event broadcasted");
                channel.close();
              } catch (error) {
                console.log("   âš ï¸ BroadcastChannel not supported:", error);
              }
              const normalizedRole = String(
                userState.user.role || ""
              ).toLowerCase();
              if (normalizedRole && normalizedRole !== "user") {
                return navigate.go("/");
              }
              window.location.href =
                react_device_detect__WEBPACK_IMPORTED_MODULE_6__.isMobile
                  ? "/match/888"
                  : "/match/888";
            }
          }, [userState]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (userState.status === "failed" && userState.error) {
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(
                String(userState.error)
              );
            }
          }, [userState.status, userState.error]);
          const handleForm = (e) => {
            setLoginForm({
              ...loginForm,
              [e.target.name]: e.target.value,
            });
          };
          const handleSubmitDemoLogin = () => {
            const loginFormNew = {
              ...loginForm,
              isDemo: true,
            };
            setLoginForm(loginFormNew);
            dispatch(
              (0,
              _redux_actions_login_login_action__WEBPACK_IMPORTED_MODULE_2__.loginAction)(
                loginFormNew
              )
            );
          };
          const getLoginFormData = () => {
            var _usernameInputRef$cur, _passwordInputRef$cur;
            const usernameFromDom =
              ((_usernameInputRef$cur = usernameInputRef.current) === null ||
              _usernameInputRef$cur === void 0
                ? void 0
                : _usernameInputRef$cur.value) || "";
            const passwordFromDom =
              ((_passwordInputRef$cur = passwordInputRef.current) === null ||
              _passwordInputRef$cur === void 0
                ? void 0
                : _passwordInputRef$cur.value) || "";
            return {
              ...loginForm,
              username: String(
                usernameFromDom || loginForm.username || ""
              ).trim(),
              password: String(passwordFromDom || loginForm.password || ""),
              admin: window.location.pathname.includes("/admin"),
            };
          };
          const handleSubmit = (event) => {
            if (event && typeof event.preventDefault === "function") {
              event.preventDefault();
            }
            if (submitLockRef.current) return;
            submitLockRef.current = true;
            setTimeout(() => {
              submitLockRef.current = false;
            }, 900);
            const formData = getLoginFormData();
            if (!formData.username || !formData.password) {
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(
                "Please enter username and password"
              );
              return;
            }

            // âœ… Clear any existing auth data to prevent stuck sessions
            console.log(
              "ðŸ”„ Login button clicked - clearing existing session data"
            );
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("token-admin");
            localStorage.removeItem("refreshToken-admin");
            localStorage.removeItem("userType-admin");
            localStorage.removeItem("login-session");
            localStorage.removeItem("current-username");
            sessionStorage.clear();
            console.log(
              "âœ… Old session data cleared - proceeding with fresh login"
            );
            dispatch(
              (0,
              _redux_actions_login_login_action__WEBPACK_IMPORTED_MODULE_2__.loginAction)(
                formData
              )
            );
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
            "div",
            {
              className: "p-0 bg-transparent",
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                "div",
                {
                  className: "mobile-login-form-container",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      "h1",
                      {
                        className: "mobile-login-title",
                        children: "LOGIN NOW",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      "form",
                      {
                        onSubmit: handleSubmit,
                        role: "form",
                        autoComplete: "off",
                        method: "post",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "div",
                            {
                              className: "mobile-login-form-group",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "label",
                                  {
                                    className: "mobile-login-label",
                                    children: "USERNAME / MOBILE NUMBER",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 150,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "input",
                                  {
                                    name: "username",
                                    placeholder:
                                      "Enter your username or mobile number",
                                    type: "text",
                                    className: "mobile-login-input",
                                    ref: usernameInputRef,
                                    autoComplete: "username",
                                    "aria-required": "true",
                                    "aria-invalid": "false",
                                    onChange: handleForm,
                                    required: true,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 151,
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
                              lineNumber: 149,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "div",
                            {
                              className: "mobile-login-form-group",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "label",
                                  {
                                    className: "mobile-login-label",
                                    children: "PASSWORD",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 164,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "input",
                                  {
                                    name: "password",
                                    placeholder: "Enter your password",
                                    type: "password",
                                    className: "mobile-login-input",
                                    ref: passwordInputRef,
                                    autoComplete: "current-password",
                                    "aria-required": "true",
                                    "aria-invalid": "false",
                                    onChange: handleForm,
                                    required: true,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 165,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                userState.error &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                    "div",
                                    {
                                      className: "mobile-login-error",
                                      children: userState.error,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 176,
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
                              lineNumber: 163,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "div",
                            {
                              className: "mobile-login-options",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "label",
                                  {
                                    className: "mobile-login-remember",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                        "input",
                                        {
                                          type: "checkbox",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 182,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      "Remember Me?",
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 181,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "a",
                                  {
                                    href: "/forgot-password",
                                    className: "mobile-login-forgot",
                                    children: "Forgot Password",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 185,
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
                              lineNumber: 180,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            _components_SubmitButton__WEBPACK_IMPORTED_MODULE_8__[
                              "default"
                            ],
                            {
                              type: "submit",
                              className: "mobile-login-btn-primary",
                              disabled: false,
                              onClick: handleSubmit,
                              onTouchEnd: handleSubmit,
                              children:
                                userState.status === "loading"
                                  ? /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                            "span",
                                            {
                                              className: "mobile-login-spinner",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 191,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          "Logging in...",
                                        ],
                                      },
                                      void 0,
                                      true
                                    )
                                  : "LOG IN",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 188,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            _components_SubmitButton__WEBPACK_IMPORTED_MODULE_8__[
                              "default"
                            ],
                            {
                              type: "button",
                              onClick: handleSubmitDemoLogin,
                              className: "mobile-login-btn-demo",
                              children: "LOGIN WITH DEMO ID",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 199,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "button",
                            {
                              type: "button",
                              className: "mobile-login-btn-apk",
                              onClick: () =>
                                window.open("https://wa.link/ambani", "_blank"),
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "i",
                                  {
                                    className: "fab fa-whatsapp",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 204,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                "Get ID with WhatsApp",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 203,
                              columnNumber: 10,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "div",
                            {
                              className: "mobile-login-signup",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "span",
                                  {
                                    children: "Don't have an account? ",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 209,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "a",
                                  {
                                    href: "/signup",
                                    children: "SignUp",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 210,
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
                              lineNumber: 208,
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
                        lineNumber: 148,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      "div",
                      {
                        className: "mobile-login-footer",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "div",
                            {
                              className: "powered-by",
                              children: [
                                "Powered by ",
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "span",
                                  {
                                    className: "ambaniexchange",
                                    children: "ambaniexchange",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 215,
                                    columnNumber: 52,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 215,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "div",
                            {
                              className: "email",
                              children: "ambaniexchange@gmail.com",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 216,
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
                        lineNumber: 214,
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
                  lineNumber: 145,
                  columnNumber: 9,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(Login, "aasPh5a3lOjeMMiFTv1XcdMwAok=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_4__.useWebsocketUser,
            _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_5__.useNavigateCustom,
          ];
        });
        _c = Login;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Login;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Login");

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

    /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/login/login.css":
      /*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/login/login.css ***!
  \*********************************************************************************************************************************************************************************************/
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
          `/* Mobile Login Page Design - Unique Classes */
.mobile-login-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: 100vh;
    background: linear-gradient(135deg, #ff0000 0%, #803a28 100%);
    position: relative;
    overflow: hidden;
  }
  
  .mobile-login-container { 
   /* background: #212529; */
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    position: relative;
    z-index: 2;
    min-height: 0;
    overflow: hidden;
  }
  
  .mobile-login-close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .mobile-login-close-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  .mobile-login-form-container {
    /* width: 100%; */
    width: 340px;
    background:#005098;
    /* border-radius: 15px; */
    padding: 25px;
    backdrop-filter: blur(10px);
    /* border: 1px solid rgba(255, 255, 255, 0.1); */
    overflow: hidden;
  }
  
  .mobile-login-title {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .mobile-login-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background: white;
    margin: 5px auto 20px;
  }
  
  .mobile-login-form-group {
    margin-bottom: 18px;
    text-align: left;
  }
  
  .mobile-login-label {
    display: block;
    color: white;
    font-size: 0.85rem;
    margin-bottom: 6px;
    font-weight: 500;
    text-transform: uppercase;
  }
  
  .mobile-login-input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }
  
  .mobile-login-input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .mobile-login-input:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
  
  .mobile-login-input:focus::placeholder {
    color: rgba(255, 255, 255, 0.9);
  }
  
  .mobile-login-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    color: white;
    font-size: 0.85rem;
  }
  
  .mobile-login-remember {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  .mobile-login-remember input[type="checkbox"] {
    width: 14px;
    height: 14px;
    accent-color: #DC143C;
    cursor: pointer;
  }
  
  .mobile-login-forgot {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    cursor: pointer;
  }
  
  .mobile-login-forgot:hover {
    color: #DC143C;
  }
  
  .mobile-login-btn-primary {
    width: 100%;
    padding: 12px;
    background: #fff;
    color: black;
    border: 1px solid #272525;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
  }
  
  .mobile-login-btn-primary:hover {
    background: #B22222;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
  }
  
  .mobile-login-btn-primary:active {
    transform: translateY(0);
  }
  
  .mobile-login-btn-demo {
    width: 100%;
    padding: 12px;
    background: #fff;
    color: black;
    border: 1px solid #272525;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
  }
  
  .mobile-login-btn-demo:hover {
    background: #DC143C;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
  }
  
  .mobile-login-btn-demo:active {
    transform: translateY(0);
  }
  
  .mobile-login-btn-apk {
    width: 100%;
    padding: 12px;
    background: #1ec421;
    color: black;
    border: 1px solid #272525;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
  }
  
  .mobile-login-btn-apk:hover {
    background: #B22222;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
  }
  
  .mobile-login-btn-apk:active {
    transform: translateY(0);
  }
  
  .mobile-login-btn-apk i {
    font-size: 1rem;
  }
  
  .mobile-login-signup {
    margin-top: 15px;
    text-align: center;
    color: white;
    font-size: 0.8rem;
  }
  
  .mobile-login-signup a {
    color: #DC143C;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
    cursor: pointer;
  }
  
  .mobile-login-signup a:hover {
    color: #B22222;
  }
  
  .mobile-login-footer {
    margin-top: 20px;
    text-align: center;
    color: white;
    font-size: 0.8rem;
  }
  
  .mobile-login-footer .powered-by {
    margin-bottom: 3px;
  }
  
  .mobile-login-footer .reddybook {
    color: #DC143C;
    font-weight: bold;
  }
  
  .mobile-login-footer .email {
    color: rgba(255, 255, 255, 0.8);
  }
  
  /* Loading spinner */
  .mobile-login-spinner {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #DC143C;
    animation: mobile-login-spin 1s ease-in-out infinite;
  }
  
  @keyframes mobile-login-spin {
    to { transform: rotate(360deg); }
  }
  
  /* Error message styling */
  .mobile-login-error {
    color: #FF6B6B;
    background: rgba(255, 107, 107, 0.1);
    border: 1px solid rgba(255, 107, 107, 0.3);
    border-radius: 5px;
    padding: 8px;
    margin-top: 8px;
    font-size: 0.8rem;
  }
  
  /* Multiple cursor effect */
  .mobile-login-cursor {
    position: absolute;
    width: 2px;
    height: 20px;
    background: #DC143C;
    animation: mobile-login-blink 1s infinite;
    pointer-events: none;
    z-index: 1000;
  }
  
  @keyframes mobile-login-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  .mobile-login-cursor-1 {
    top: 50%;
    left: 20%;
    animation-delay: 0s;
  }
  
  .mobile-login-cursor-2 {
    top: 30%;
    left: 60%;
    animation-delay: 0.3s;
  }
  
  .mobile-login-cursor-3 {
    top: 70%;
    left: 40%;
    animation-delay: 0.6s;
  }
  
  .mobile-login-cursor-4 {
    top: 40%;
    left: 80%;
    animation-delay: 0.9s;
  }
  
  /* Background animation */
  .mobile-login-bg-animation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
    animation: mobile-login-float 8s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes mobile-login-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(1deg); }
    50% { transform: translateY(-5px) rotate(-1deg); }
    75% { transform: translateY(-15px) rotate(0.5deg); }
  }
  
  /* Desktop optimizations - no scrolling */
  @media (min-width: 769px) {
    .mobile-login-wrapper {
      height: 100vh;
      overflow: hidden;
    }
    
    .mobile-login-container {
      justify-content: center;
      padding: 30px;
      overflow: hidden;
    }
    
    .mobile-login-form-container {
      max-height: none;
      overflow: hidden;
      padding: 30px;
    }
    
    .mobile-login-title {
      font-size: 1.8rem;
      margin-bottom: 3px;
    }
    
    .mobile-login-title::after {
      margin: 3px auto 15px;
    }
    
    .mobile-login-form-group {
      margin-bottom: 15px;
    }
    
    .mobile-login-btn-primary,
    .mobile-login-btn-demo,
    .mobile-login-btn-apk {
      padding: 10px;
      margin-bottom: 8px;
    }
    
    .mobile-login-footer {
      margin-top: 15px;
    }
  }
  
  /* Mobile Responsive Design - no scrolling */
  @media (max-width: 768px) {
    .mobile-login-container {
      padding: 10px;
      justify-content: center;
      overflow: hidden;
    }
    
    .mobile-login-form-container {
      padding: 20px;
      overflow: hidden;
    }
    
    .mobile-login-title {
      font-size: 1.6rem;
    }
    
    .mobile-login-btn-primary,
    .mobile-login-btn-demo,
    .mobile-login-btn-apk {
      padding: 10px;
      font-size: 0.8rem;
    }
    
    .mobile-login-options {
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
    }
  }
  
  @media (max-height: 600px) {
    .mobile-login-container {
      padding: 8px;
      justify-content: center;
      overflow: hidden;
    }
    
    .mobile-login-form-container {
      padding: 15px;
      overflow: hidden;
    }
    
    .mobile-login-title {
      font-size: 1.4rem;
      margin-bottom: 3px;
    }
    
    .mobile-login-title::after {
      margin: 3px auto 12px;
    }
    
    .mobile-login-form-group {
      margin-bottom: 12px;
    }
    
    .mobile-login-btn-primary,
    .mobile-login-btn-demo,
    .mobile-login-btn-apk {
      padding: 8px;
      margin-bottom: 6px;
    }
    
    .mobile-login-footer {
      margin-top: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .mobile-login-container {
      padding: 8px;
      overflow: hidden;
    }
    
    .mobile-login-form-container {
      padding: 12px;
      border-radius: 10px;
      overflow: hidden;
    }
    
    .mobile-login-title {
      font-size: 1.4rem;
    }
    
    .mobile-login-input {
      padding: 10px 12px;
      font-size: 0.8rem;
    }
    
    .mobile-login-btn-primary,
    .mobile-login-btn-demo,
    .mobile-login-btn-apk {
      padding: 8px;
      font-size: 0.75rem;
    }
  }
  
  /* Hide scrollbars globally for this component */
  .mobile-login-wrapper * {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  
  .mobile-login-wrapper *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
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
            sources: ["webpack://./src/pages/login/login.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              "/* Mobile Login Page Design - Unique Classes */\n.mobile-login-wrapper {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    max-height: 100vh;\n    background: linear-gradient(135deg, #ff0000 0%, #803a28 100%);\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .mobile-login-container { \n   /* background: #212529; */\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 15px;\n    position: relative;\n    z-index: 2;\n    min-height: 0;\n    overflow: hidden;\n  }\n  \n  .mobile-login-close-btn {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    color: white;\n    font-size: 1.5rem;\n    cursor: pointer;\n    z-index: 10;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.3s ease;\n  }\n  \n  .mobile-login-close-btn:hover {\n    background: rgba(255, 255, 255, 0.2);\n    transform: scale(1.1);\n  }\n  \n  .mobile-login-form-container {\n    /* width: 100%; */\n    width: 340px;\n    background:#005098;\n    /* border-radius: 15px; */\n    padding: 25px;\n    backdrop-filter: blur(10px);\n    /* border: 1px solid rgba(255, 255, 255, 0.1); */\n    overflow: hidden;\n  }\n  \n  .mobile-login-title {\n    color: white;\n    font-size: 2rem;\n    font-weight: bold;\n    text-align: center;\n    margin-bottom: 5px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n  }\n  \n  .mobile-login-title::after {\n    content: '';\n    display: block;\n    width: 50px;\n    height: 2px;\n    background: white;\n    margin: 5px auto 20px;\n  }\n  \n  .mobile-login-form-group {\n    margin-bottom: 18px;\n    text-align: left;\n  }\n  \n  .mobile-login-label {\n    display: block;\n    color: white;\n    font-size: 0.85rem;\n    margin-bottom: 6px;\n    font-weight: 500;\n    text-transform: uppercase;\n  }\n  \n  .mobile-login-input {\n    width: 100%;\n    padding: 12px 15px;\n    border: 2px solid rgba(255, 255, 255, 0.2);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.1);\n    color: white;\n    font-size: 0.9rem;\n    transition: all 0.3s ease;\n    box-sizing: border-box;\n  }\n  \n  .mobile-login-input::placeholder {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  \n  .mobile-login-input:focus {\n    outline: none;\n    border-color: rgba(255, 255, 255, 0.5);\n    background: rgba(255, 255, 255, 0.15);\n    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);\n  }\n  \n  .mobile-login-input:focus::placeholder {\n    color: rgba(255, 255, 255, 0.9);\n  }\n  \n  .mobile-login-options {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n    color: white;\n    font-size: 0.85rem;\n  }\n  \n  .mobile-login-remember {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  \n  .mobile-login-remember input[type=\"checkbox\"] {\n    width: 14px;\n    height: 14px;\n    accent-color: #DC143C;\n    cursor: pointer;\n  }\n  \n  .mobile-login-forgot {\n    color: white;\n    text-decoration: none;\n    transition: color 0.3s ease;\n    cursor: pointer;\n  }\n  \n  .mobile-login-forgot:hover {\n    color: #DC143C;\n  }\n  \n  .mobile-login-btn-primary {\n    width: 100%;\n    padding: 12px;\n    background: #fff;\n    color: black;\n    border: 1px solid #272525;\n    border-radius: 8px;\n    font-size: 0.9rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    margin-bottom: 10px;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .mobile-login-btn-primary:hover {\n    background: #B22222;\n    transform: translateY(-2px);\n    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);\n  }\n  \n  .mobile-login-btn-primary:active {\n    transform: translateY(0);\n  }\n  \n  .mobile-login-btn-demo {\n    width: 100%;\n    padding: 12px;\n    background: #fff;\n    color: black;\n    border: 1px solid #272525;\n    border-radius: 8px;\n    font-size: 0.9rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    margin-bottom: 10px;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .mobile-login-btn-demo:hover {\n    background: #DC143C;\n    color: white;\n    transform: translateY(-2px);\n    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);\n  }\n  \n  .mobile-login-btn-demo:active {\n    transform: translateY(0);\n  }\n  \n  .mobile-login-btn-apk {\n    width: 100%;\n    padding: 12px;\n    background: #1ec421;\n    color: black;\n    border: 1px solid #272525;\n    border-radius: 8px;\n    font-size: 0.9rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .mobile-login-btn-apk:hover {\n    background: #B22222;\n    transform: translateY(-2px);\n    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);\n  }\n  \n  .mobile-login-btn-apk:active {\n    transform: translateY(0);\n  }\n  \n  .mobile-login-btn-apk i {\n    font-size: 1rem;\n  }\n  \n  .mobile-login-signup {\n    margin-top: 15px;\n    text-align: center;\n    color: white;\n    font-size: 0.8rem;\n  }\n  \n  .mobile-login-signup a {\n    color: #DC143C;\n    text-decoration: none;\n    font-weight: bold;\n    transition: color 0.3s ease;\n    cursor: pointer;\n  }\n  \n  .mobile-login-signup a:hover {\n    color: #B22222;\n  }\n  \n  .mobile-login-footer {\n    margin-top: 20px;\n    text-align: center;\n    color: white;\n    font-size: 0.8rem;\n  }\n  \n  .mobile-login-footer .powered-by {\n    margin-bottom: 3px;\n  }\n  \n  .mobile-login-footer .reddybook {\n    color: #DC143C;\n    font-weight: bold;\n  }\n  \n  .mobile-login-footer .email {\n    color: rgba(255, 255, 255, 0.8);\n  }\n  \n  /* Loading spinner */\n  .mobile-login-spinner {\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    border: 2px solid rgba(255, 255, 255, 0.3);\n    border-radius: 50%;\n    border-top-color: #DC143C;\n    animation: mobile-login-spin 1s ease-in-out infinite;\n  }\n  \n  @keyframes mobile-login-spin {\n    to { transform: rotate(360deg); }\n  }\n  \n  /* Error message styling */\n  .mobile-login-error {\n    color: #FF6B6B;\n    background: rgba(255, 107, 107, 0.1);\n    border: 1px solid rgba(255, 107, 107, 0.3);\n    border-radius: 5px;\n    padding: 8px;\n    margin-top: 8px;\n    font-size: 0.8rem;\n  }\n  \n  /* Multiple cursor effect */\n  .mobile-login-cursor {\n    position: absolute;\n    width: 2px;\n    height: 20px;\n    background: #DC143C;\n    animation: mobile-login-blink 1s infinite;\n    pointer-events: none;\n    z-index: 1000;\n  }\n  \n  @keyframes mobile-login-blink {\n    0%, 50% { opacity: 1; }\n    51%, 100% { opacity: 0; }\n  }\n  \n  .mobile-login-cursor-1 {\n    top: 50%;\n    left: 20%;\n    animation-delay: 0s;\n  }\n  \n  .mobile-login-cursor-2 {\n    top: 30%;\n    left: 60%;\n    animation-delay: 0.3s;\n  }\n  \n  .mobile-login-cursor-3 {\n    top: 70%;\n    left: 40%;\n    animation-delay: 0.6s;\n  }\n  \n  .mobile-login-cursor-4 {\n    top: 40%;\n    left: 80%;\n    animation-delay: 0.9s;\n  }\n  \n  /* Background animation */\n  .mobile-login-bg-animation {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: \n      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),\n      radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),\n      radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);\n    animation: mobile-login-float 8s ease-in-out infinite;\n    pointer-events: none;\n  }\n  \n  @keyframes mobile-login-float {\n    0%, 100% { transform: translateY(0px) rotate(0deg); }\n    25% { transform: translateY(-10px) rotate(1deg); }\n    50% { transform: translateY(-5px) rotate(-1deg); }\n    75% { transform: translateY(-15px) rotate(0.5deg); }\n  }\n  \n  /* Desktop optimizations - no scrolling */\n  @media (min-width: 769px) {\n    .mobile-login-wrapper {\n      height: 100vh;\n      overflow: hidden;\n    }\n    \n    .mobile-login-container {\n      justify-content: center;\n      padding: 30px;\n      overflow: hidden;\n    }\n    \n    .mobile-login-form-container {\n      max-height: none;\n      overflow: hidden;\n      padding: 30px;\n    }\n    \n    .mobile-login-title {\n      font-size: 1.8rem;\n      margin-bottom: 3px;\n    }\n    \n    .mobile-login-title::after {\n      margin: 3px auto 15px;\n    }\n    \n    .mobile-login-form-group {\n      margin-bottom: 15px;\n    }\n    \n    .mobile-login-btn-primary,\n    .mobile-login-btn-demo,\n    .mobile-login-btn-apk {\n      padding: 10px;\n      margin-bottom: 8px;\n    }\n    \n    .mobile-login-footer {\n      margin-top: 15px;\n    }\n  }\n  \n  /* Mobile Responsive Design - no scrolling */\n  @media (max-width: 768px) {\n    .mobile-login-container {\n      padding: 10px;\n      justify-content: center;\n      overflow: hidden;\n    }\n    \n    .mobile-login-form-container {\n      padding: 20px;\n      overflow: hidden;\n    }\n    \n    .mobile-login-title {\n      font-size: 1.6rem;\n    }\n    \n    .mobile-login-btn-primary,\n    .mobile-login-btn-demo,\n    .mobile-login-btn-apk {\n      padding: 10px;\n      font-size: 0.8rem;\n    }\n    \n    .mobile-login-options {\n      flex-direction: column;\n      gap: 8px;\n      align-items: flex-start;\n    }\n  }\n  \n  @media (max-height: 600px) {\n    .mobile-login-container {\n      padding: 8px;\n      justify-content: center;\n      overflow: hidden;\n    }\n    \n    .mobile-login-form-container {\n      padding: 15px;\n      overflow: hidden;\n    }\n    \n    .mobile-login-title {\n      font-size: 1.4rem;\n      margin-bottom: 3px;\n    }\n    \n    .mobile-login-title::after {\n      margin: 3px auto 12px;\n    }\n    \n    .mobile-login-form-group {\n      margin-bottom: 12px;\n    }\n    \n    .mobile-login-btn-primary,\n    .mobile-login-btn-demo,\n    .mobile-login-btn-apk {\n      padding: 8px;\n      margin-bottom: 6px;\n    }\n    \n    .mobile-login-footer {\n      margin-top: 12px;\n    }\n  }\n  \n  @media (max-width: 480px) {\n    .mobile-login-container {\n      padding: 8px;\n      overflow: hidden;\n    }\n    \n    .mobile-login-form-container {\n      padding: 12px;\n      border-radius: 10px;\n      overflow: hidden;\n    }\n    \n    .mobile-login-title {\n      font-size: 1.4rem;\n    }\n    \n    .mobile-login-input {\n      padding: 10px 12px;\n      font-size: 0.8rem;\n    }\n    \n    .mobile-login-btn-primary,\n    .mobile-login-btn-demo,\n    .mobile-login-btn-apk {\n      padding: 8px;\n      font-size: 0.75rem;\n    }\n  }\n  \n  /* Hide scrollbars globally for this component */\n  .mobile-login-wrapper * {\n    scrollbar-width: none; /* Firefox */\n    -ms-overflow-style: none; /* Internet Explorer 10+ */\n  }\n  \n  .mobile-login-wrapper *::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera */\n  }\n  \n  /* Hide original elements */\n  .log-logo,\n  .featured-box-login,\n  .login-container,\n  .login-left,\n  .login-right {\n    display: none !important;\n  } ",
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

    /***/ "./src/pages/login/login.css":
      /*!***********************************!*\
  !*** ./src/pages/login/login.css ***!
  \***********************************/
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
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./login.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/login/login.css"
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
            _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        if (true) {
          if (
            !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
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
              !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals;
            var oldLocals = isNamedExport
              ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__
              : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].locals;

            module.hot.accept(
              /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./login.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/login/login.css",
              (__WEBPACK_OUTDATED_DEPENDENCIES__) => {
                /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__ =
                  __webpack_require__(
                    /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./login.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/login/login.css"
                  );
                (function () {
                  if (
                    !isEqualLocals(
                      oldLocals,
                      isNamedExport
                        ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__
                        : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ].locals,
                      isNamedExport
                    )
                  ) {
                    module.hot.invalidate();

                    return;
                  }

                  oldLocals = isNamedExport
                    ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__
                    : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ].locals;

                  update(
                    _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
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
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_login_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },
  },
]);
//# sourceMappingURL=src_pages_login_login_tsx.chunk.js.map

