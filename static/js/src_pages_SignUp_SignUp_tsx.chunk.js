"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_SignUp_SignUp_tsx"],
  {
    /***/ "./src/pages/SignUp/SignUp.tsx":
      /*!*************************************!*\
  !*** ./src/pages/SignUp/SignUp.tsx ***!
  \*************************************/
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
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _redux_actions_login_login_action__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../redux/actions/login/login.action */ "./src/redux/actions/login/login.action.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ../../utils/api */ "./src/utils/api.ts");
        /* harmony import */ var _SignUp_css__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./SignUp.css */ "./src/pages/SignUp/SignUp.css"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/SignUp/SignUp.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const SignUp = () => {
          _s();
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__.selectUserData
          );
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_6__.useWebsocketUser)();
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
          const [form, setForm] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({
            mobile: "",
            password: "",
            referralCode: "AMBANIEXCHANGEWINN",
            countryCode: "+91",
            otp: "",
            logs: "",
          });
          const [showOtp, setShowOtp] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [timer, setTimer] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(55);
          const [isTimerRunning, setIsTimerRunning] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [otpVerified, setOtpVerified] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [otpError, setOtpError] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [signupCompleted, setSignupCompleted] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [isProcessing, setIsProcessing] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

          // Get IP address for logs (same as login) - this is optional and shouldn't prevent signup
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            _utils_api__WEBPACK_IMPORTED_MODULE_8__["default"]
              .get(`${"/ipapi/json"}`)
              .then((res) => {
                setForm((prev) => ({
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
                  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.warn(
                    "IP service rate limited. Please try again in a moment. Signup will still work."
                  );
                  console.log(
                    "IP API rate limited (429) - continuing with signup"
                  );
                } else {
                  console.log(
                    "IP API failed:",
                    error.message,
                    "- continuing with signup"
                  );
                }
                // Set empty logs to allow signup to proceed
                setForm((prev) => ({
                  ...prev,
                  logs: "",
                }));
              });
          }, []);

          // Handle login state after signup (same as login component)
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (signupCompleted) {
              if (userState.status === "done") {
                const { role, _id } = userState.user;
                socketUser.emit("login", {
                  role: userState.user.role,
                  sessionId: userState.user.sessionId,
                  _id,
                });
                const sessionData = `${userState.user.username}:${userState.user.sessionId}`;
                localStorage.setItem("login-session", sessionData);
                localStorage.setItem("current-username", userState.user.username);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                  "Login successful!"
                );
                const normalizedRole = String(
                  userState.user.role || ""
                ).toLowerCase();
                if (normalizedRole && normalizedRole !== "user") {
                  return navigate("/");
                }

                // Navigate to match page for regular users
                setTimeout(() => {
                  window.location.href =
                    react_device_detect__WEBPACK_IMPORTED_MODULE_7__.isMobile
                      ? "/match/888"
                      : "/match/888";
                }, 1000);
              } else if (
                userState.status === "error" ||
                userState.status === "failed"
              ) {
                // If auto-login fails, redirect to login page
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  "Auto-login failed. Please login manually."
                );
                setTimeout(() => {
                  navigate("/dash?login=1");
                }, 1000);
              }
            }
          }, [userState, signupCompleted, socketUser, navigate]);
          const handleChange = (e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            });

            // Clear OTP error when user starts typing new OTP
            if (e.target.name === "otp" && otpError) {
              setOtpError("");
            }
          };

          // Direct API call to OTP backend
          const sendOTPDirect = async () => {
            try {
              // Clear any existing OTP errors
              setOtpError("");
              setForm((prev) => ({
                ...prev,
                otp: "",
              }));
              const response = await fetch(
                "/otp/send-otp",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    countryCode: form.countryCode,
                    mobile: form.mobile,
                  }),
                }
              );
              const data = await response.json();
              if (response.ok) {
                setShowOtp(true);
                setTimer(55);
                setIsTimerRunning(true);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                  "OTP sent successfully!"
                );
                return true;
              } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  data.error || "Failed to send OTP"
                );
                return false;
              }
            } catch (error) {
              console.error("Error sending OTP:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to send OTP. Please check if OTP service is running on localhost:3002"
              );
              return false;
            }
          };
          const handleLogin = () => {
            navigate("/dash?login=1");
          };
          // Direct API call to verify OTP
          const verifyOTPDirect = async () => {
            try {
              // Clear any previous errors
              setOtpError("");
              const response = await fetch(
                "/otp/verify-otp",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    countryCode: form.countryCode,
                    mobile: form.mobile,
                    code: form.otp,
                  }),
                }
              );
              const data = await response.json();
              if (response.ok) {
                setOtpVerified(true);
                setOtpError("");
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                  "OTP verified successfully!"
                );
                return true;
              } else {
                // Handle specific error messages from backend
                let errorMessage = data.error || "Invalid OTP";

                // Set error state for display
                setOtpError(errorMessage);

                // Show specific error messages based on backend response
                if (data.error === "No OTP found. Please request a new OTP.") {
                  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                    "No OTP found. Please request a new OTP."
                  );
                  setShowOtp(false); // Reset to first step
                  setOtpVerified(false);
                } else if (
                  data.error === "OTP has expired. Please request a new OTP."
                ) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                    "OTP has expired. Please request a new OTP."
                  );
                  setShowOtp(false); // Reset to first step
                  setOtpVerified(false);
                } else if (
                  data.error ===
                  "Too many failed attempts. Please request a new OTP."
                ) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                    "Too many failed attempts. Please request a new OTP."
                  );
                  setShowOtp(false); // Reset to first step
                  setOtpVerified(false);
                } else {
                  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                    errorMessage
                  );
                }

                // Clear OTP input for invalid attempts
                setForm((prev) => ({
                  ...prev,
                  otp: "",
                }));
                return false;
              }
            } catch (error) {
              console.error("Error verifying OTP:", error);
              setOtpError("Failed to verify OTP. Please try again.");
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to verify OTP. Please check if OTP service is running on localhost:3002"
              );
              return false;
            }
          };
          const completeSignup = async () => {
            try {
              const signupData = {
                mobile: form.mobile,
                password: form.password,
                referralCode: form.referralCode,
                countryCode: form.countryCode,
                otpVerified: true,
              };
              const response =
                await _services_user_service__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].addUser2(signupData);
              if (response.data.status) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                  "Registration successful!"
                );
                setSignupCompleted(true);
                try {
                  await dispatch(
                    (0,
                    _redux_actions_login_login_action__WEBPACK_IMPORTED_MODULE_4__.loginAction)(
                      {
                        username: form.mobile,
                        password: form.password,
                        logs: form.logs,
                        isDemo: false,
                      }
                    )
                  ).unwrap();
                  return true;
                } catch (loginError) {
                  setSignupCompleted(false);
                  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                    loginError || "Auto-login failed. Please login manually."
                  );
                  navigate("/dash?login=1");
                  return false;
                }
              } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  response.data.message || "Registration failed"
                );
                return false;
              }
            } catch (error) {
              var _error$response2, _error$response2$data;
              const errorMessage =
                ((_error$response2 = error.response) === null ||
                _error$response2 === void 0
                  ? void 0
                  : (_error$response2$data = _error$response2.data) === null ||
                    _error$response2$data === void 0
                  ? void 0
                  : _error$response2$data.message) ||
                error.message ||
                "Registration failed";
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                errorMessage
              );
              return false;
            }
          };
          const handleSubmit = async (e) => {
            e.preventDefault();
            if (isProcessing || userState.status === "loading") {
              return;
            }
            setIsProcessing(true);
            let keepDisabled = false;
            try {
              keepDisabled = await completeSignup();
            } finally {
              if (!keepDisabled) {
                setIsProcessing(false);
              }
            }
          };
          const handleResendOtp = async () => {
            // Clear any existing OTP errors
            setOtpError("");
            setForm((prev) => ({
              ...prev,
              otp: "",
            }));
            await sendOTPDirect();
          };
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            let interval;
            if (isTimerRunning && timer > 0) {
              interval = setInterval(() => {
                setTimer((prev) => prev - 1);
              }, 1000);
            } else if (timer === 0) {
              setIsTimerRunning(false);
            }
            return () => clearInterval(interval);
          }, [isTimerRunning, timer]);
          const formatTime = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, "0")}:${secs
              .toString()
              .padStart(2, "0")}`;
          };
          const countryCodes = [
            {
              code: "+91",
              flag: "ðŸ‡®ðŸ‡³",
              country: "India",
            },
            {
              code: "+1",
              flag: "ðŸ‡ºðŸ‡¸",
              country: "USA",
            },
            {
              code: "+44",
              flag: "ðŸ‡¬ðŸ‡§",
              country: "UK",
            },
            {
              code: "+61",
              flag: "ðŸ‡¦ðŸ‡º",
              country: "Australia",
            },
            {
              code: "+86",
              flag: "ðŸ‡¨ðŸ‡³",
              country: "China",
            },
            {
              code: "+81",
              flag: "ðŸ‡¯ðŸ‡µ",
              country: "Japan",
            },
            {
              code: "+49",
              flag: "ðŸ‡©ðŸ‡ª",
              country: "Germany",
            },
            {
              code: "+33",
              flag: "ðŸ‡«ðŸ‡·",
              country: "France",
            },
            {
              code: "+39",
              flag: "ðŸ‡®ðŸ‡¹",
              country: "Italy",
            },
            {
              code: "+34",
              flag: "ðŸ‡ªðŸ‡¸",
              country: "Spain",
            },
          ];
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
            "div",
            {
              className: "signup-wrapper",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                  "div",
                  {
                    className: "signup-container",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                      "div",
                      {
                        className: "signup-form-container",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                            "div",
                            {
                              className: "signup-logo",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                "div",
                                {
                                  className: "text-logo signup-logo-img",
                                  children: "KING777",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 311,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 310,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                            "form",
                            {
                              onSubmit: handleSubmit,
                              role: "form",
                              autoComplete: "off",
                              method: "post",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                  "div",
                                  {
                                    className:
                                      "main-inputdiv mb-3 g-1 d-flex border-bottom ",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                        "div",
                                        {
                                          className: "",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                            "div",
                                            {
                                              className: "signup-country-code",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                "select",
                                                {
                                                  name: "countryCode",
                                                  className:
                                                    "signup-country-select",
                                                  value: form.countryCode,
                                                  onChange: handleChange,
                                                  disabled: showOtp,
                                                  children: countryCodes.map(
                                                    (country) =>
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                        "option",
                                                        {
                                                          value: country.code,
                                                          children: [
                                                            country.flag,
                                                            " ",
                                                            country.code,
                                                          ],
                                                        },
                                                        country.code,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 361,
                                                          columnNumber: 21,
                                                        },
                                                        undefined
                                                      )
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 353,
                                                  columnNumber: 17,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 352,
                                              columnNumber: 33,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 352,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                        "div",
                                        {
                                          className: "flex-grow-1",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                            "input",
                                            {
                                              name: "mobile",
                                              placeholder:
                                                "Enter mobile number",
                                              type: "tel",
                                              className: "signup-mobile-input",
                                              value: form.mobile,
                                              onChange: handleChange,
                                              required: true,
                                              disabled: showOtp,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 368,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 367,
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
                                    lineNumber: 351,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                  "div",
                                  {
                                    className: "mb-2",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                        "div",
                                        {
                                          className:
                                            "main-inputdiv  d-flex border-bottom ",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                            "div",
                                            {
                                              className: "signup-form-group",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                "input",
                                                {
                                                  name: "password",
                                                  placeholder:
                                                    "Enter your password",
                                                  type: "password",
                                                  className:
                                                    "signup-password-input",
                                                  value: form.password,
                                                  onChange: handleChange,
                                                  required: true,
                                                  disabled: showOtp,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 388,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 386,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 385,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                        "div",
                                        {
                                          className:
                                            "signup-password-hint text-white",
                                          children:
                                            "(Must be contained alphanumeric and more than 6 letters)",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 400,
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
                                    lineNumber: 383,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                  "div",
                                  {
                                    className:
                                      "main-inputdiv mb-6  d-flex border-bottom ",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                      "div",
                                      {
                                        className: "signup-form-group",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                          "input",
                                          {
                                            name: "referralCode",
                                            placeholder: "Referral code (fixed)",
                                            type: "text",
                                            className: "signup-referral-input",
                                            value: form.referralCode,
                                            onChange: handleChange,
                                            readOnly: true,
                                            disabled: true,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 427,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 425,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 423,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                showOtp &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,
                                    {
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                          "div",
                                          {
                                            className: "signup-info-text",
                                            children: otpVerified
                                              ? "âœ… OTP verified successfully! Completing your signup..."
                                              : "By continuing you will receive a one-time verification code to your phone number by SMS.",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 443,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        !otpVerified &&
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                            "div",
                                            {
                                              className: "signup-form-group",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                  "label",
                                                  {
                                                    className: "signup-label",
                                                    children: "OTP",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 453,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                  "input",
                                                  {
                                                    name: "otp",
                                                    placeholder: "Enter OTP",
                                                    type: "text",
                                                    className: `signup-otp-input ${
                                                      otpError
                                                        ? "signup-input-error"
                                                        : ""
                                                    }`,
                                                    value: form.otp,
                                                    onChange: handleChange,
                                                    required: true,
                                                    maxLength: 6,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 454,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                otpError &&
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "signup-error-message",
                                                      children: otpError,
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 465,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "signup-resend-timer",
                                                    children: isTimerRunning
                                                      ? `Resend OTP in : ${formatTime(
                                                          timer
                                                        )}`
                                                      : /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                          "button",
                                                          {
                                                            type: "button",
                                                            onClick:
                                                              handleResendOtp,
                                                            className:
                                                              "signup-resend-btn",
                                                            style: {
                                                              background:
                                                                "none",
                                                              border: "none",
                                                              color: "#007bff",
                                                              textDecoration:
                                                                "underline",
                                                              cursor: "pointer",
                                                            },
                                                            children:
                                                              "Resend OTP",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 473,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 469,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 452,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                      ],
                                    },
                                    void 0,
                                    true
                                  ),
                                !showOtp &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                    "div",
                                    {
                                      className: "signup-info-text text-start",
                                      children:
                                        "Create your account with mobile number and password.",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 496,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                  "button",
                                  {
                                    type: "submit",
                                    className: "signup-otp-btn",
                                    disabled:
                                      isProcessing ||
                                      userState.status === "loading",
                                    children:
                                      userState.status === "loading"
                                        ? "LOGGING IN..."
                                        : isProcessing
                                        ? "SIGNING UP..."
                                        : "SIGN-UP",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 502,
                                    columnNumber: 12,
                                  },
                                  undefined
                                ),
                                !showOtp &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () =>
                                        window.open(
                                          "https://wa.link/ambani",
                                          "_blank"
                                        ),
                                      className: "signup-whatsapp-btn",
                                      style: {
                                        width: "100%",
                                        padding: "12px",
                                        marginTop: "15px",
                                        backgroundColor: "#25D366",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "8px",
                                      },
                                      children:
                                        "\uD83D\uDCF1 Get ID with WhatsApp",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 514,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                  "div",
                                  {
                                    className: "signup-login-link",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                        "span",
                                        {
                                          children: "Already have account? ",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 541,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                        "span",
                                        {
                                          onClick: handleLogin,
                                          style: {
                                            cursor: "pointer",
                                            color: "#007bff",
                                            textDecoration: "underline",
                                          },
                                          children: "LOG IN",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 542,
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
                                    lineNumber: 540,
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
                              lineNumber: 318,
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
                        lineNumber: 308,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                  "section",
                  {
                    className: "footer footer-login",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                      "div",
                      {
                        className: "footer-top",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                            "div",
                            {
                              className: "footer-links",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                "nav",
                                {
                                  className: "navbar navbar-expand-sm",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                    "ul",
                                    {
                                      className: "navbar-nav",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                          "li",
                                          {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                              "a",
                                              {
                                                className: "nav-link",
                                                href: "/terms-and-conditions",
                                                target: "_blank",
                                                children:
                                                  " Terms and Conditions ",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 560,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 559,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                          "li",
                                          {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                              "a",
                                              {
                                                className: "nav-link",
                                                href: "/responsible-gaming",
                                                target: "_blank",
                                                children:
                                                  " Responsible Gaming ",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 563,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 562,
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
                                      lineNumber: 558,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 557,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 556,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                            "div",
                            {
                              className: "support-detail",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                  "h2",
                                  {
                                    children: "24X7 Support",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 569,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                  "p",
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 570,
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
                              lineNumber: 568,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                            "div",
                            {
                              className: "social-icons-box",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 572,
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
                        lineNumber: 555,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 554,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(SignUp, "h6rlsfW+O5InnD8c0ptiQ42bpWM=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_6__.useWebsocketUser,
            react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate,
          ];
        });
        _c = SignUp;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = SignUp;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "SignUp");

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

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        module.exports = function (url, options) {
          if (!options) {
            options = {};
          }
          if (!url) {
            return url;
          }
          url = String(url.__esModule ? url.default : url);

          // If url is already wrapped in quotes, remove them
          if (/^['"].*['"]$/.test(url)) {
            url = url.slice(1, -1);
          }
          if (options.hash) {
            url += options.hash;
          }

          // Should url be wrapped?
          // See https://drafts.csswg.org/css-values-3/#urls
          if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }
          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/SignUp/SignUp.css":
      /*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/SignUp/SignUp.css ***!
  \***********************************************************************************************************************************************************************************************/
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
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276,9 12,15 18,9%27%3e%3c/polyline%3e%3c/svg%3e */ "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276,9 12,15 18,9%27%3e%3c/polyline%3e%3c/svg%3e"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `/* SignUp Page Design - Exact Match */
.signup-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  background: #761414; /* Very dark/black background to match image */
  position: relative;
  overflow: hidden;
}

.signup-container {
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

.signup-form-container {
  width: 100%;
  max-width: 410px;
  background: rgba(40, 40, 40, 0.95); /* Dark gray card */
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(10px);
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  max-height: 100vh;
  border:1px solid white
}

/* Logo Section */
.signup-logo {
  text-align: center;
  margin-bottom: 20px;
}

.signup-logo-img {
  max-width: 400px;
  height: auto;
  max-height: 80px;
  object-fit: contain;
}

/* Form Groups */
.signup-form-group {
  /* margin-bottom: 10px; */
  text-align: left;
}

.signup-label {
  display: block;
  color: white;
  font-size: 0.85rem;
  margin-bottom: 6px;
  font-weight: 500;
  text-transform: uppercase;
}

/* Mobile Number Input */
.signup-mobile-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.signup-country-code {
  position: relative;
  min-width: 90px;
}
.main-input-div{
   border: 1px solid rgba(255, 255, 255, 0.2);
}

.signup-country-select {
  /* width: 100%; */
  padding: 10px 6px;
  border:none;
  background-color: #282828f2;
  /* border-radius: 8px; */
  /* border: 1px solid rgba(255, 255, 255, 0.2); */
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  padding-right: 30px;
}
.main-inputdiv:focus-within {
  border-bottom-color: black !important; /* Changes bottom border */
  background-color: black !important; /* Slight blue tint */
}

/* Optional: Style the select dropdown when input is focused */
.main-inputdiv:focus-within .signup-country-select {
  border-color: black;
  background-color: transparent;
}

.signup-country-select:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.5);
  background-color: rgba(80, 80, 80, 0.8);
}

.signup-country-select:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.signup-country-select option {
  background-color: #333;
  color: white;
  padding: 8px;
}

.signup-mobile-input {
  flex: 1 1;
  width: 100%;
  height:100%;
  padding: 5px 0px;
  border: none;
  /* border-radius: 8px; */
  background: transparent;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: none;
}

.signup-mobile-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.signup-mobile-input:focus {
  outline: none;
  /* border-color: rgba(255, 255, 255, 0.5); */
  /* background: rgba(255, 255, 255, 0.15); */
}

.signup-mobile-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.signup-arrow-btn {
  width: 35px;
  height: 35px;
  background-color: #333;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.signup-arrow-btn:hover:not(:disabled) {
  background-color: #444;
  transform: scale(1.05);
}

.signup-arrow-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Password Input */
.signup-password-input {
  /* flex: 1; */
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:100%;
  padding: 10px 0px;
  border: none;
  /* border-radius: 8px; */
  background: transparent;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: none;

}

.signup-password-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.signup-password-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.5);
  /* background: rgba(255, 255, 255, 0.15); */
}

.signup-password-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.signup-password-hint {
  color: #DC143C;
  font-size: 0.7rem;
  margin-top: 4px;
  font-style: italic;
}

/* Referral Code Input */
.signup-referral-input {
    display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:100%;
  padding: 10px 0px;
  border: none;
  /* border-radius: 8px; */
  background: transparent;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: none;
}

.signup-referral-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.signup-referral-input:focus {
  outline: none;
  /* border-color: rgba(255, 255, 255, 0.5); */
  /* background: rgba(255, 255, 255, 0.15); */
}

.signup-referral-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.signup-otp-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: #282828f2;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.signup-otp-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.signup-otp-input.signup-input-error {
  border-color: #dc3545;
  box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
}

.signup-error-message {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: rgba(220, 53, 69, 0.1);
  border-radius: 4px;
  border-left: 3px solid #dc3545;
}

/* Resend Timer */
.signup-resend-timer {
  color: #DC143C;
  font-size: 0.8rem;
  margin-top: 8px;
  text-align: center;
  font-weight: bold;
}

/* Informational Text */
.signup-info-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  margin-bottom: 15px;
  text-align: start;
  line-height: 1.4;
}

/* Get OTP Button */
.signup-otp-btn {
  width: 100%;
  padding: 12px;
  background: #DC143C;
  color: white;
  border: none;
  /* border-radius: 8px; */
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 12px;
}

.signup-otp-btn:hover {
  background: #B22222;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);
}

.signup-otp-btn:active {
  transform: translateY(0);
}

/* Login Link */
.signup-login-link {
  margin-top: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
}

.signup-login-link a {
  color: #DC143C;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  cursor: pointer;
}

.signup-login-link a:hover {
  color: #B22222;
}

/* Footer */
.signup-footer {
  margin-top: 15px;
  text-align: center;
  color: white;
  font-size: 0.8rem;
}

.signup-footer .powered-by {
  margin-bottom: 3px;
}

.signup-footer .reddybook {
  color: #DC143C;
  font-weight: bold;
}

.signup-footer .email {
  color: rgba(255, 255, 255, 0.8);
}

/* Blinking Cursors */
.signup-cursor {
  position: absolute;
  width: 2px;
  height: 20px;
  background: #DC143C;
  animation: signup-blink 1s infinite;
  pointer-events: none;
  z-index: 1000;
}

@keyframes signup-blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.signup-cursor-1 {
  top: 30%;
  left: 15%;
  animation-delay: 0s;
}

.signup-cursor-2 {
  top: 60%;
  right: 20%;
  animation-delay: 0.5s;
}

/* Responsive Design */
@media (max-width: 768px) {
  .signup-container {
    padding: 10px;
  }
  
  .signup-form-container {
    padding: 20px;
    max-height: 85vh;
  }
  
  .signup-logo-img {
    max-width: 190px;
    max-height: 50px;
  }
  
  .signup-otp-btn {
    padding: 15px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .signup-form-container {
    padding: 15px;
    max-height: 80vh;
  }
  
  .signup-logo-img {
    max-width: 190px;
    max-height: 100px;
    margin-top:40px;
  }
  
  .signup-mobile-container {
    flex-direction: column;
    gap: 6px;
  }
  
  .signup-country-code {
    width: 100%;
  }
  
  .signup-arrow-btn {
    width: 100%;
    height: 35px;
  }
}

@media (max-height: 600px) {
  .signup-form-container {
    padding: 12px;
    max-height: 75vh;
  }
  
  .signup-logo-img {
    max-width: 140px;
    max-height: 40px;
  }
  
  .signup-form-group {
    margin-bottom: 12px;
  }
  
  .signup-otp-btn {
    padding:10px;
    margin-bottom: 10px;
  }
}

/* Hide scrollbars */
.signup-wrapper * {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.signup-wrapper *::-webkit-scrollbar {
  display: none;
}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/pages/SignUp/SignUp.css"],
            names: [],
            mappings:
              "AAAA,qCAAqC;AACrC;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,iBAAiB;EACjB,mBAAmB,EAAE,8CAA8C;EACnE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,SAAO;EACP,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,kCAAkC,EAAE,mBAAmB;EACvD,mBAAmB;EACnB,aAAa;EACb,2BAA2B;EAC3B,0CAA0C;EAC1C,yCAAyC;EACzC,gBAAgB;EAChB,iBAAiB;EACjB;AACF;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA,gBAAgB;AAChB;EACE,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;GACG,0CAA0C;AAC7C;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;EACX,2BAA2B;EAC3B,wBAAwB;EACxB,gDAAgD;EAChD,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,yDAAoR;EACpR,4BAA4B;EAC5B,qCAAqC;EACrC,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,qCAAqC,EAAE,0BAA0B;EACjE,kCAAkC,EAAE,qBAAqB;AAC3D;;AAEA,8DAA8D;AAC9D;EACE,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,SAAO;EACP,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,wBAAwB;EACxB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,4CAA4C;EAC5C,2CAA2C;AAC7C;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,wBAAwB;EACxB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;;AAElB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,2CAA2C;AAC7C;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA,wBAAwB;AACxB;IACI,YAAY;EACd,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,wBAAwB;EACxB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,4CAA4C;EAC5C,2CAA2C;AAC7C;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,0CAA0C;EAC1C,kBAAkB;EAClB,2BAA2B;EAC3B,YAAY;EACZ,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,6CAA6C;AAC/C;;AAEA;EACE,qBAAqB;EACrB,6CAA6C;AAC/C;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,wCAAwC;EACxC,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA,iBAAiB;AACjB;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,uBAAuB;AACvB;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,mBAAmB;AACnB;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,6CAA6C;AAC/C;;AAEA;EACE,wBAAwB;AAC1B;;AAEA,eAAe;AACf;EACE,gBAAgB;EAChB,kBAAkB;EAClB,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA,WAAW;AACX;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;AACjC;;AAEA,qBAAqB;AACrB;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,mCAAmC;EACnC,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,UAAU,UAAU,EAAE;EACtB,YAAY,UAAU,EAAE;AAC1B;;AAEA;EACE,QAAQ;EACR,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,QAAQ;EACR,UAAU;EACV,qBAAqB;AACvB;;AAEA,sBAAsB;AACtB;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,sBAAsB;IACtB,QAAQ;EACV;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE;IACE,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,mBAAmB;EACrB;AACF;;AAEA,oBAAoB;AACpB;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf",
            sourcesContent: [
              "/* SignUp Page Design - Exact Match */\n.signup-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  max-height: 100vh;\n  background: #761414; /* Very dark/black background to match image */\n  position: relative;\n  overflow: hidden;\n}\n\n.signup-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  position: relative;\n  z-index: 2;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.signup-form-container {\n  width: 100%;\n  max-width: 410px;\n  background: rgba(40, 40, 40, 0.95); /* Dark gray card */\n  border-radius: 15px;\n  padding: 25px;\n  backdrop-filter: blur(10px);\n  border: 4px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  max-height: 100vh;\n  border:1px solid white\n}\n\n/* Logo Section */\n.signup-logo {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.signup-logo-img {\n  max-width: 400px;\n  height: auto;\n  max-height: 80px;\n  object-fit: contain;\n}\n\n/* Form Groups */\n.signup-form-group {\n  /* margin-bottom: 10px; */\n  text-align: left;\n}\n\n.signup-label {\n  display: block;\n  color: white;\n  font-size: 0.85rem;\n  margin-bottom: 6px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n/* Mobile Number Input */\n.signup-mobile-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.signup-country-code {\n  position: relative;\n  min-width: 90px;\n}\n.main-input-div{\n   border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.signup-country-select {\n  /* width: 100%; */\n  padding: 10px 6px;\n  border:none;\n  background-color: #282828f2;\n  /* border-radius: 8px; */\n  /* border: 1px solid rgba(255, 255, 255, 0.2); */\n  color: white;\n  font-size: 0.9rem;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 8px center;\n  background-size: 16px;\n  padding-right: 30px;\n}\n.main-inputdiv:focus-within {\n  border-bottom-color: black !important; /* Changes bottom border */\n  background-color: black !important; /* Slight blue tint */\n}\n\n/* Optional: Style the select dropdown when input is focused */\n.main-inputdiv:focus-within .signup-country-select {\n  border-color: black;\n  background-color: transparent;\n}\n\n.signup-country-select:focus {\n  outline: none;\n  border-color: rgba(255, 255, 255, 0.5);\n  background-color: rgba(80, 80, 80, 0.8);\n}\n\n.signup-country-select:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.signup-country-select option {\n  background-color: #333;\n  color: white;\n  padding: 8px;\n}\n\n.signup-mobile-input {\n  flex: 1;\n  width: 100%;\n  height:100%;\n  padding: 5px 0px;\n  border: none;\n  /* border-radius: 8px; */\n  background: transparent;\n  color: white;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  box-shadow: none;\n}\n\n.signup-mobile-input::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.signup-mobile-input:focus {\n  outline: none;\n  /* border-color: rgba(255, 255, 255, 0.5); */\n  /* background: rgba(255, 255, 255, 0.15); */\n}\n\n.signup-mobile-input:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.signup-arrow-btn {\n  width: 35px;\n  height: 35px;\n  background-color: #333;\n  border: none;\n  border-radius: 8px;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n}\n\n.signup-arrow-btn:hover:not(:disabled) {\n  background-color: #444;\n  transform: scale(1.05);\n}\n\n.signup-arrow-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n/* Password Input */\n.signup-password-input {\n  /* flex: 1; */\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height:100%;\n  padding: 10px 0px;\n  border: none;\n  /* border-radius: 8px; */\n  background: transparent;\n  color: white;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  box-shadow: none;\n\n}\n\n.signup-password-input::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.signup-password-input:focus {\n  outline: none;\n  border-color: rgba(255, 255, 255, 0.5);\n  /* background: rgba(255, 255, 255, 0.15); */\n}\n\n.signup-password-input:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.signup-password-hint {\n  color: #DC143C;\n  font-size: 0.7rem;\n  margin-top: 4px;\n  font-style: italic;\n}\n\n/* Referral Code Input */\n.signup-referral-input {\n    display:flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height:100%;\n  padding: 10px 0px;\n  border: none;\n  /* border-radius: 8px; */\n  background: transparent;\n  color: white;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  box-shadow: none;\n}\n\n.signup-referral-input::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.signup-referral-input:focus {\n  outline: none;\n  /* border-color: rgba(255, 255, 255, 0.5); */\n  /* background: rgba(255, 255, 255, 0.15); */\n}\n\n.signup-referral-input:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.signup-otp-input {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  background-color: #282828f2;\n  color: white;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n\n.signup-otp-input:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n\n.signup-otp-input.signup-input-error {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);\n}\n\n.signup-error-message {\n  color: #dc3545;\n  font-size: 0.8rem;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  background-color: rgba(220, 53, 69, 0.1);\n  border-radius: 4px;\n  border-left: 3px solid #dc3545;\n}\n\n/* Resend Timer */\n.signup-resend-timer {\n  color: #DC143C;\n  font-size: 0.8rem;\n  margin-top: 8px;\n  text-align: center;\n  font-weight: bold;\n}\n\n/* Informational Text */\n.signup-info-text {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.75rem;\n  margin-bottom: 15px;\n  text-align: start;\n  line-height: 1.4;\n}\n\n/* Get OTP Button */\n.signup-otp-btn {\n  width: 100%;\n  padding: 12px;\n  background: #DC143C;\n  color: white;\n  border: none;\n  /* border-radius: 8px; */\n  font-size: 0.9rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-bottom: 12px;\n}\n\n.signup-otp-btn:hover {\n  background: #B22222;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(220, 20, 60, 0.3);\n}\n\n.signup-otp-btn:active {\n  transform: translateY(0);\n}\n\n/* Login Link */\n.signup-login-link {\n  margin-top: 12px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.8rem;\n}\n\n.signup-login-link a {\n  color: #DC143C;\n  text-decoration: none;\n  font-weight: bold;\n  transition: color 0.3s ease;\n  cursor: pointer;\n}\n\n.signup-login-link a:hover {\n  color: #B22222;\n}\n\n/* Footer */\n.signup-footer {\n  margin-top: 15px;\n  text-align: center;\n  color: white;\n  font-size: 0.8rem;\n}\n\n.signup-footer .powered-by {\n  margin-bottom: 3px;\n}\n\n.signup-footer .reddybook {\n  color: #DC143C;\n  font-weight: bold;\n}\n\n.signup-footer .email {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n/* Blinking Cursors */\n.signup-cursor {\n  position: absolute;\n  width: 2px;\n  height: 20px;\n  background: #DC143C;\n  animation: signup-blink 1s infinite;\n  pointer-events: none;\n  z-index: 1000;\n}\n\n@keyframes signup-blink {\n  0%, 50% { opacity: 1; }\n  51%, 100% { opacity: 0; }\n}\n\n.signup-cursor-1 {\n  top: 30%;\n  left: 15%;\n  animation-delay: 0s;\n}\n\n.signup-cursor-2 {\n  top: 60%;\n  right: 20%;\n  animation-delay: 0.5s;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .signup-container {\n    padding: 10px;\n  }\n  \n  .signup-form-container {\n    padding: 20px;\n    max-height: 85vh;\n  }\n  \n  .signup-logo-img {\n    max-width: 190px;\n    max-height: 50px;\n  }\n  \n  .signup-otp-btn {\n    padding: 15px;\n    font-size: 0.8rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .signup-form-container {\n    padding: 15px;\n    max-height: 80vh;\n  }\n  \n  .signup-logo-img {\n    max-width: 190px;\n    max-height: 100px;\n    margin-top:40px;\n  }\n  \n  .signup-mobile-container {\n    flex-direction: column;\n    gap: 6px;\n  }\n  \n  .signup-country-code {\n    width: 100%;\n  }\n  \n  .signup-arrow-btn {\n    width: 100%;\n    height: 35px;\n  }\n}\n\n@media (max-height: 600px) {\n  .signup-form-container {\n    padding: 12px;\n    max-height: 75vh;\n  }\n  \n  .signup-logo-img {\n    max-width: 140px;\n    max-height: 40px;\n  }\n  \n  .signup-form-group {\n    margin-bottom: 12px;\n  }\n  \n  .signup-otp-btn {\n    padding:10px;\n    margin-bottom: 10px;\n  }\n}\n\n/* Hide scrollbars */\n.signup-wrapper * {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.signup-wrapper *::-webkit-scrollbar {\n  display: none;\n}",
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

    /***/ "./src/pages/SignUp/SignUp.css":
      /*!*************************************!*\
  !*** ./src/pages/SignUp/SignUp.css ***!
  \*************************************/
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
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./SignUp.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/SignUp/SignUp.css"
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
            _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        if (true) {
          if (
            !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
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
              !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals;
            var oldLocals = isNamedExport
              ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__
              : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].locals;

            module.hot.accept(
              /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./SignUp.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/SignUp/SignUp.css",
              (__WEBPACK_OUTDATED_DEPENDENCIES__) => {
                /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__ =
                  __webpack_require__(
                    /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./SignUp.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/SignUp/SignUp.css"
                  );
                (function () {
                  if (
                    !isEqualLocals(
                      oldLocals,
                      isNamedExport
                        ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__
                        : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ].locals,
                      isNamedExport
                    )
                  ) {
                    module.hot.invalidate();

                    return;
                  }

                  oldLocals = isNamedExport
                    ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__
                    : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ].locals;

                  update(
                    _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
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
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_SignUp_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276,9 12,15 18,9%27%3e%3c/polyline%3e%3c/svg%3e":
      /*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276,9 12,15 18,9%27%3e%3c/polyline%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276,9 12,15 18,9%27%3e%3c/polyline%3e%3c/svg%3e";

        /***/
      },
  },
]);
//# sourceMappingURL=src_pages_SignUp_SignUp_tsx.chunk.js.map

