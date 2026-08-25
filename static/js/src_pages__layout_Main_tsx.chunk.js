"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages__layout_Main_tsx"],
  {
    /***/ "./src/admin-app/pages/_layout/elements/NavHelper.ts":
      /*!***********************************************************!*\
  !*** ./src/admin-app/pages/_layout/elements/NavHelper.ts ***!
  \***********************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ fetchCompetitions: () =>
            /* binding */ fetchCompetitions,
          /* harmony export */ fetchMatch: () => /* binding */ fetchMatch,
          /* harmony export */
        });
        /* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../../services/sports.service */ "./src/services/sports.service.ts"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        const fetchCompetitions = async (sportId) => {
          try {
            var _response$data, _response$data$data;
            const response =
              await _services_sports_service__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].getSports();
            return (
              ((_response$data = response.data) === null ||
              _response$data === void 0
                ? void 0
                : (_response$data$data = _response$data.data) === null ||
                  _response$data$data === void 0
                ? void 0
                : _response$data$data.data) || []
            );
          } catch (error) {
            console.error("Error fetching competitions:", error);
            throw new Error("Failed to load competitions");
          }
        };
        const fetchMatch = async (sportId, setSportMatchList, limit = 100) => {
          try {
            var _root$data;
            // getMatchList expects string params (default values are '') so convert explicitly
            const response =
              await _services_sports_service__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].getMatchList(String(sportId), "active", String(limit));

            // Support multiple possible backend shapes: data, data.data, data.data.data, data.docs
            const root =
              response === null || response === void 0 ? void 0 : response.data;
            const d = root === null || root === void 0 ? void 0 : root.data;
            let rawList = [];
            if (Array.isArray(root)) rawList = root;
            else if (Array.isArray(d)) rawList = d;
            else if (
              Array.isArray(d === null || d === void 0 ? void 0 : d.data)
            )
              rawList = d.data;
            else if (
              Array.isArray(d === null || d === void 0 ? void 0 : d.docs)
            )
              rawList = d.docs;
            else if (
              Array.isArray(
                root === null || root === void 0
                  ? void 0
                  : (_root$data = root.data) === null || _root$data === void 0
                  ? void 0
                  : _root$data.docs
              )
            )
              rawList = root.data.docs; // extra fallback

            // Normalize matches; keep series name only inside externalData to avoid extending IMatch
            const matches = rawList.map((match) => {
              var _match$externalData, _match$series, _match$series2;
              return {
                ...match,
                externalData: {
                  ...(match.externalData || {}),
                  cname:
                    ((_match$externalData = match.externalData) === null ||
                    _match$externalData === void 0
                      ? void 0
                      : _match$externalData.cname) ||
                    match.cname ||
                    ((_match$series = match.series) === null ||
                    _match$series === void 0
                      ? void 0
                      : _match$series.cname) ||
                    ((_match$series2 = match.series) === null ||
                    _match$series2 === void 0
                      ? void 0
                      : _match$series2.name) ||
                    match.name,
                },
              };
            });
            const groupedSeries = groupMatchesBySeries(matches);
            setSportMatchList(matches);
            return {
              matches,
              groupedSeries,
            };
          } catch (err) {
            console.error("Error:", err);
            throw new Error("Failed to load matches");
          }
        };
        const groupMatchesBySeries = (matches) => {
          const seriesMap = new Map();
          matches.forEach((match) => {
            var _match$externalData2, _series, _series2, _seriesMap$get;
            const seriesName =
              ((_match$externalData2 = match.externalData) === null ||
              _match$externalData2 === void 0
                ? void 0
                : _match$externalData2.cname) ||
              match.cname ||
              ((_series = match.series) === null || _series === void 0
                ? void 0
                : _series.cname) ||
              ((_series2 = match.series) === null || _series2 === void 0
                ? void 0
                : _series2.name) ||
              match.name ||
              "Other Matches";
            if (!seriesMap.has(seriesName)) {
              seriesMap.set(seriesName, {
                seriesName,
                matches: [],
              });
            }
            (_seriesMap$get = seriesMap.get(seriesName)) === null ||
            _seriesMap$get === void 0
              ? void 0
              : _seriesMap$get.matches.push(match);
          });
          return Array.from(seriesMap.values()).sort((a, b) =>
            a.seriesName.localeCompare(b.seriesName)
          );
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

    /***/ "./src/pages/Rules/welcome.tsx":
      /*!*************************************!*\
  !*** ./src/pages/Rules/welcome.tsx ***!
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
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/Rules/welcome.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const Welcome = (props) => {
          _s();
          const [isOpen, setIsOpen] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                react_modal__WEBPACK_IMPORTED_MODULE_1___default(),
                {
                  isOpen: isOpen,
                  onRequestClose: (e) => {
                    setIsOpen(false);
                  },
                  contentLabel: "Set Max Bet Limit",
                  className: "modal-dialog modal-lg margin-modal",
                  ariaHideApp: false,
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
                      style: {
                        margin: "0px",
                      },
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                          "div",
                          {
                            className: "modal-header",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                "h5",
                                {
                                  children: "Welcome to our exchange",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 20,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                "button",
                                {
                                  onClick: () => setIsOpen(false),
                                  className: "close float-right",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                    "i",
                                    {
                                      className: "fa fa-times-circle",
                                      "aria-hidden": "true",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 22,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 21,
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
                            lineNumber: 19,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                          "div",
                          {
                            className: "modal-body p0",
                            style: {
                              height: "89vh",
                            },
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                              "img",
                              {
                                src: "/assets/images/banners/wel-1752169865573.png",
                                className: "img-fluid",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 26,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 25,
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
                      lineNumber: 18,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(Welcome, "mEi83NlPXQzy/XIDfTYWzOSvaHw=");
        _c = Welcome;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            Welcome
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "Welcome");
        __webpack_require__.$Refresh$.register(_c2, "%default%");

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

    /***/ "./src/pages/_layout/Main.tsx":
      /*!************************************!*\
  !*** ./src/pages/_layout/Main.tsx ***!
  \************************************/
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
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../services/auth.service */ "./src/services/auth.service.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./elements/footer */ "./src/pages/_layout/elements/footer.tsx"
          );
        /* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./elements/header */ "./src/pages/_layout/elements/header.tsx"
          );
        /* harmony import */ var _elements_sidebar__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./elements/sidebar */ "./src/pages/_layout/elements/sidebar.tsx"
          );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! react-redux */ "./node_modules/react-redux/es/index.js"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../redux/actions/balance/balanceSlice */ "./src/redux/actions/balance/balanceSlice.ts"
          );
        /* harmony import */ var _elements_custom_link__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../../utils/constants */ "./src/utils/constants.ts"
          );
        /* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ../../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _Rules_welcome__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ../Rules/welcome */ "./src/pages/Rules/welcome.tsx"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! ../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/Main.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const Main = () => {
          _s();
          const dispatch = (0,
          react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_4__.selectUserData
          );
          const loader = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_14__.selectLoader
          );
          const navigate = (0,
          _elements_custom_link__WEBPACK_IMPORTED_MODULE_11__.useNavigateCustom)();
          const welcomeState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_4__.selectWelcomeMessage
          );
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_17__.useWebsocketUser)();
          const initApp = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_14__.selectInitApp
          );
          const location = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation)();
          // React.useEffect(() => {
          //   const currentUserRole = localStorage.getItem('userType')
          //   const rolesWithOutUser = JSON.parse(JSON.stringify(RoleType))
          //   delete rolesWithOutUser.user

          //   if (currentUserRole && Object.keys(rolesWithOutUser).includes(currentUserRole)) {
          //     return navigate.go('/admin')
          //   }
          // }, [])

          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const auth =
              _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ].isLoggedIn();
            if (!auth) {
              // return navigate.go('/login')
              return navigate.go("/dash");
            }
            const rolesWithOutUser = JSON.parse(
              JSON.stringify(_models_User__WEBPACK_IMPORTED_MODULE_1__.RoleType)
            );
            delete rolesWithOutUser.user;
            if (userState.user._id) {
              const sessionId = localStorage.getItem("login-session");
              socketUser.emit("login", {
                role: userState.user.role,
                sessionId: sessionId,
                //userState.user.sessionId,
                _id: userState.user._id,
              });
            }
            if (
              userState.user.role &&
              Object.keys(rolesWithOutUser).includes(userState.user.role)
            ) {
              return navigate.go("/");
            }
          }, [userState.user]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            // Only fetch user balance if user is authenticated and has an ID
            if (
              userState.user._id &&
              _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ].isLoggedIn()
            ) {
              _services_user_service__WEBPACK_IMPORTED_MODULE_9__["default"]
                .getUserBalance()
                .then((res) => {
                  dispatch(
                    (0,
                    _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_10__.setBalance)(
                      res.data.data
                    )
                  );
                })
                .catch((error) => {
                  console.log("Failed to fetch user balance:", error.message);
                  // Don't show error to user, just log it
                });
            }
          }, [initApp, userState.user._id]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            try {
              const hideBalExpValues = localStorage.getItem(
                _utils_constants__WEBPACK_IMPORTED_MODULE_13__.CONSTANTS
                  .HIDE_BAL_EXP
              );
              if (hideBalExpValues) {
                dispatch(
                  (0,
                  _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_10__.hideBalExp)(
                    JSON.parse(hideBalExpValues)
                  )
                );
              }
            } catch (e) {
              const err = e;
              console.log(err.stack);
            }
          }, []);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
            "div",
            {
              className: "frontend",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                  _elements_header__WEBPACK_IMPORTED_MODULE_6__["default"],
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                  react_toastify__WEBPACK_IMPORTED_MODULE_12__.ToastContainer,
                  {
                    hideProgressBar: true,
                    autoClose: 1000,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                  "div",
                  {
                    className: "main",
                    children: [
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_15__.isMobile &&
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                          "div",
                          {
                            className: "container-fluid ",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                              "div",
                              {
                                className: "row",
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                                    "div",
                                    {
                                      className: "col-2 col-lg-2 p0",
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                                        _elements_sidebar__WEBPACK_IMPORTED_MODULE_7__[
                                          "default"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 105,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 104,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                                    "div",
                                    {
                                      className:
                                        !react_device_detect__WEBPACK_IMPORTED_MODULE_15__.isMobile
                                          ? "col-10 col-lg-10"
                                          : "col-12 col-lg-12 ",
                                      style: {
                                        paddingLeft:
                                          !react_device_detect__WEBPACK_IMPORTED_MODULE_15__.isMobile &&
                                          location.pathname.includes(
                                            "casino-in"
                                          )
                                            ? "0px"
                                            : "",
                                        paddingRight:
                                          !react_device_detect__WEBPACK_IMPORTED_MODULE_15__.isMobile &&
                                          location.pathname.includes(
                                            "casino-in"
                                          )
                                            ? "0px"
                                            : "",
                                      },
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                                        react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Outlet,
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 108,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 107,
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
                                lineNumber: 103,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 102,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      react_device_detect__WEBPACK_IMPORTED_MODULE_15__.isMobile &&
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Outlet,
                          {},
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 113,
                            columnNumber: 22,
                          },
                          undefined
                        ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                  _elements_footer__WEBPACK_IMPORTED_MODULE_5__["default"],
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 7,
                  },
                  undefined
                ),
                welcomeState.status
                  ? /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(
                      _Rules_welcome__WEBPACK_IMPORTED_MODULE_16__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                        columnNumber: 30,
                      },
                      undefined
                    )
                  : "",
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(Main, "+nadyKndCGA6GfzNTeFgeRkOiV4=", false, function () {
          return [
            react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            _elements_custom_link__WEBPACK_IMPORTED_MODULE_11__.useNavigateCustom,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_17__.useWebsocketUser,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation,
          ];
        });
        _c = Main;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Main;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Main");

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

    /***/ "./src/pages/_layout/elements/Navbar/Header-pop-up.tsx":
      /*!*************************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/Header-pop-up.tsx ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ HeaderHome: () => /* binding */ HeaderHome,
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/Navbar/Header-pop-up.tsx"; // KeyValueItem.tsx

        const HeaderHome = ({
          label,
          value,
          className = "",
          valueClassName = "",
          itemClassName = "",
        }) =>
          /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
            "div",
            {
              className: `d-flex mb-3 justify-between align-items-center w-100 ${itemClassName}`,
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: `flex-1 text-start text-truncate pe-2 ${className}`,
                    style: {
                      minWidth: 0,
                      flexBasis: "50%",
                      fontSize: "15px",
                    },
                    children: label,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: `flex-1 text-end  ${valueClassName}`,
                    style: {
                      flexBasis: "50%",
                      fontWeight: "600",
                    },
                    children: value,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 27,
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
              lineNumber: 17,
              columnNumber: 5,
            },
            undefined
          );

        // Usage
        _c = HeaderHome;
        /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          HeaderHome,
          {
            label: "Wallet Amount",
            value: "0.00",
            className: "text-dark", // Applies to label
            valueClassName: "text-bold bg-danger", // Applies to value
            itemClassName: "my-custom-class", // Applies to container div
          },
          void 0,
          false,
          {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 3,
          },
          undefined
        );
        var _c;
        __webpack_require__.$Refresh$.register(_c, "HeaderHome");

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

    /***/ "./src/pages/_layout/elements/Navbar/HeaderDropdown.tsx":
      /*!**************************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/HeaderDropdown.tsx ***!
  \**************************************************************/
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
          __webpack_require__(
            /*! ../../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _custom_link__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../../redux/actions/balance/balanceSlice */ "./src/redux/actions/balance/balanceSlice.ts"
          );
        /* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../../utils/constants */ "./src/utils/constants.ts"
          );
        /* harmony import */ var _Header_pop_up__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./Header-pop-up */ "./src/pages/_layout/elements/Navbar/Header-pop-up.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/Navbar/HeaderDropdown.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
        // import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
        // import { logout, selectUserData } from '../../../../redux/actions/login/loginSlice'
        // import { CustomLink, useNavigateCustom } from '../custom-link'
        // import { isMobile } from 'react-device-detect'
        // import { selectBalance } from '../../../../redux/actions/balance/balanceSlice'
        // import {
        //     hideBalExp,
        //     HideBalExp,
        //     selectHideBalExp,
        // } from '../../../../redux/actions/balance/balanceSlice'
        // import { CONSTANTS } from '../../../../utils/constants'
        // import { HeaderHome } from './Header-pop-up'

        // const HeaderDropdown: React.FC = () => {
        //     const ref = useRef<any>(null)
        //     //added new ref
        //       const buttonRef = useRef<any>(null)

        //     const dispatch = useAppDispatch()
        //     const navigate = useNavigateCustom()

        //     // Global state
        //     const userState = useAppSelector(selectUserData)
        //     const balance = useAppSelector(selectBalance)
        //     const selectHideBal = useAppSelector<HideBalExp>(selectHideBalExp)

        //     // Local state
        //     const [showMenu, setShowMenu] = useState<boolean>(false)
        //     const [hideExpBal, setHideExpBal] = useState<HideBalExp>({} as HideBalExp)

        //     useEffect(() => {
        //         setHideExpBal(selectHideBal)
        //     }, [selectHideBal])
        // //old code
        //     //useEffect(() => {
        //       //  const handleClickOutside = (event: any//) => {
        //             //if (showMenu && ref.current && //!ref.current.contains(event//.target)) {
        //                 //closeMenu()
        //             //}
        // //        }
        //   //      document.addEventListener('mousedown', //handleClickOutside)
        //         //return () => document//.removeEventListener('mousedown', //handleClickOutside)
        // //    }, [showMenu])

        // //new code

        //   useEffect(() => {
        //         const handleClickOutside = (event: any) => {
        //             // Check if click is outside both the dropdown and the button
        //             if (showMenu &&
        //                 ref.current &&
        //                 !ref.current.contains(event.target) &&
        //                 buttonRef.current &&
        //                 !buttonRef.current.contains(event.target)) {
        //                 closeMenu()
        //             }
        //         }
        //         document.addEventListener('mousedown', handleClickOutside)
        //         return () => document.removeEventListener('mousedown', handleClickOutside)
        //     }, [showMenu])

        //  const closeMenu = () => setShowMenu(false)

        //      //new code
        //       const toggleMenu = (e: MouseEvent) => {
        //         e.stopPropagation() // Prevent event bubbling
        //         setShowMenu(prev => !prev)
        //     }

        //     const logoutUser = (e: MouseEvent<HTMLAnchorElement>) => {
        //         e.preventDefault()
        //         dispatch(logout())
        //        navigate.go('/dash')
        //     }

        //     const onChangeBalExp = (e: ChangeEvent<HTMLInputElement>) => {
        //         const expBal = { ...hideExpBal, [e.target.name]: e.target.checked }
        //         dispatch(hideBalExp(expBal))
        //         localStorage.setItem(CONSTANTS.HIDE_BAL_EXP, JSON.stringify(expBal))
        //         setHideExpBal(expBal)
        //     }

        //     return (
        //         <li className='account float-left' style={{ position: 'relative' }}>
        //             {/* {isMobile && !selectHideBal.balance ? (
        //                 <div>
        //                     <span>
        //                         <i className='tx-13 mrc-2 fa fa-university' aria-hidden='true'></i>
        //                     </span>
        //                     <span className='tx-13'>{balance.balance?.toFixed(2)}</span>
        //                 </div>
        //             ) : (
        //                 ''
        //             )} */}

        //                <span
        //                   className={isMobile ? 'profile-section tx-14' : ''}
        //                 onClick={() => setShowMenu(!showMenu)} style={{fontSize:"10px"}}
        //             >
        //                 <i className="fa fa-user me-1" style={{fontSize:"10px"}} />
        //                <span style={{fontSize:"12px"}}>
        //                 {userState?.user?.username}
        //                 </span>
        //                 <i className='fas fa-chevron-down' style={{fontSize:"10px"}}/>
        //             </span>

        //             <ul
        //                 ref={ref}
        //                 style={{
        //                     display: showMenu ? 'block' : 'none',
        //                     position: 'absolute',
        //                     top: '100%',
        //                     //left: '0',
        //                     right:0,
        //                     minWidth: '320px',
        //                     maxHeight: '560px',
        //                     overflowY: 'auto',
        //                     background: '#fff',
        //                     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        //                     zIndex: 1000,
        //                 }}
        //                 className='dropdown-menu-custom'
        //             >
        //                 <li className=" ">
        //                     <p className='header-user uppercase' style={{ color: "white" }}>Hii, {userState?.user?.username}</p>
        //                 </li>

        //                 <li className='header-list px-3 '>
        //                     {/* You can wire real values here if desired */}
        //                     <HeaderHome label='Wallet' value={((balance.balance > 0 ? balance.balance : 0) - (balance.exposer > 0 ? balance.exposer : 0)).toFixed(2) ?? '0.00'}/>
        //                     <HeaderHome label='Exposure' value={(balance.exposer > 0 ? balance.exposer?.toFixed(2) : 0) as any} />
        //                     <HeaderHome label='Avaliable' value={((balance.balance > 0 ? balance.balance : 0) - (balance.exposer > 0 ? balance.exposer : 0)).toFixed(2) ?? '0.00'} />
        //                 </li>

        //               <li className='header-list  px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/' className='text-black'>
        //                       <i className="bi bi-house mr-2"/>
        //                         Home
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/accountstatement' className=''>
        //                       <i className="bi bi-bar-chart-steps mr-2"/>
        //                         Account Statement
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/depositstatement' className=''>
        //                      <i className="bi bi-bank mr-2"/>
        //                         Deposit Statement
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/withdrawstatement' className=''>
        //                         <i className="bi bi-cash-stack mr-2" />
        //                         Withdraw Statement
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/profitloss' className=''>
        //                        <i className="bi bi-calculator-fill mr-2"/>
        //                         Profit Loss Report
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/bethistory' className=''>
        //                         <i className="bi bi-clock-history mr-2"></i>
        //                         Bet History
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/unsettledbet' className=''>
        //                        <i className="bi bi-exclamation-circle mr-2"></i>
        //                         Unsettled Bet
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/casino/result' className=''>
        //                         <i className="bi bi-dice-5 mr-2"></i>
        //                        Casino Report History
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/button-values' className=''>
        //                      <i className="bi bi-sliders mr-2"></i>
        //                         Set Button Values
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/settings/security-auth' className=''>
        //                         <i className="bi bi-shield-lock mr-2"></i>
        //                         Security Auth Verification
        //                     </CustomLink>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/changepassword' className=''>
        //                       <i className="bi bi-key mr-2"></i>
        //                         Change Password
        //                     </CustomLink>
        //                 </li>

        //                 <li className='header-list px-3 '>
        //                     <label className='mb-0'>
        //                         <input
        //                             type={'checkbox'}
        //                             name={'balance'}
        //                             checked={hideExpBal.balance || false}
        //                             onChange={onChangeBalExp}
        //                             className='mrc-5'
        //                         />{' '}
        //                         Balance
        //                     </label>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <label className='mb-0'>
        //                         <input
        //                             type={'checkbox'}
        //                             name={'exposer'}
        //                             checked={hideExpBal.exposer || false}
        //                             onChange={onChangeBalExp}
        //                             className='mrc-5'
        //                         />{' '}
        //                         Exposer
        //                     </label>
        //                 </li>
        //                 <li className='header-list px-3 '>
        //                     <CustomLink onClick={() => closeMenu()} to='/rules' className=''>
        //                       <i className="bi bi-file-text mr-2 text-primary"></i>
        //                         Rules
        //                     </CustomLink>
        //                 </li>

        //                 <li className='border-top text-white p-10 bg-orange-gradient px-3'>
        //                     <a
        //                         onClick={logoutUser}
        //                         href={'#'}
        //                         style={{ fontWeight: 'bold', color: 'white', textTransform: 'uppercase', textDecoration: "none" }}
        //                     >
        //                         <i className="bi bi-box-arrow-right mr-2 "></i>
        //                         signout
        //                     </a>
        //                 </li>
        //             </ul>
        //         </li>
        //     )
        // }
        // export default HeaderDropdown

        //namire update

        const HeaderDropdown = () => {
          _s();
          var _userState$user,
            _userState$user2,
            _toFixed,
            _balance$exposer,
            _toFixed2;
          const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          //added new ref
          const buttonRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
            null
          );
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
          const navigate = (0,
          _custom_link__WEBPACK_IMPORTED_MODULE_3__.useNavigateCustom)();

          // Global state
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_2__.selectUserData
          );
          const balance = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_5__.selectBalance
          );
          const selectHideBal = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_5__.selectHideBalExp
          );

          // Local state
          const [showMenu, setShowMenu] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [hideExpBal, setHideExpBal] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            setHideExpBal(selectHideBal);
          }, [selectHideBal]);
          //old code
          //useEffect(() => {
          //  const handleClickOutside = (event: any//) => {
          //if (showMenu && ref.current && //!ref.current.contains(event//.target)) {
          //closeMenu()
          //}
          //        }
          //      document.addEventListener('mousedown', //handleClickOutside)
          //return () => document//.removeEventListener('mousedown', //handleClickOutside)
          //    }, [showMenu])

          //new code

          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            const handleClickOutside = (event) => {
              // Check if click is outside both the dropdown and the button.
              // Treat missing buttonRef as "outside" so we still close the menu.
              if (
                showMenu &&
                ref.current &&
                !ref.current.contains(event.target) &&
                (!buttonRef.current ||
                  !buttonRef.current.contains(event.target))
              ) {
                closeMenu();
              }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () =>
              document.removeEventListener("mousedown", handleClickOutside);
          }, [showMenu]);
          const closeMenu = () => setShowMenu(false);

          //new code
          const toggleMenu = (e) => {
            e.stopPropagation(); // Prevent event bubbling
            setShowMenu((prev) => !prev);
          };
          const logoutUser = (e) => {
            e.preventDefault();
            dispatch(
              (0,
              _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_2__.logout)()
            );
            navigate.go("/dash");
          };
          const onChangeBalExp = (e) => {
            const expBal = {
              ...hideExpBal,
              [e.target.name]: e.target.checked,
            };
            dispatch(
              (0,
              _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_5__.hideBalExp)(
                expBal
              )
            );
            localStorage.setItem(
              _utils_constants__WEBPACK_IMPORTED_MODULE_6__.CONSTANTS
                .HIDE_BAL_EXP,
              JSON.stringify(expBal)
            );
            setHideExpBal(expBal);
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
            "li",
            {
              className: "account float-left",
              style: {
                position: "relative",
              },
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  "span",
                  {
                    ref: buttonRef,
                    className:
                      react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile
                        ? "profile-section tx-14"
                        : "",
                    onClick: (e) => toggleMenu(e),
                    style: {
                      fontSize: "10px",
                    },
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "i",
                        {
                          className: "fa fa-user me-1",
                          style: {
                            fontSize: "10px",
                          },
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
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "span",
                        {
                          style: {
                            fontSize: "12px",
                          },
                          children:
                            userState === null || userState === void 0
                              ? void 0
                              : (_userState$user = userState.user) === null ||
                                _userState$user === void 0
                              ? void 0
                              : _userState$user.username,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 369,
                          columnNumber: 16,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "i",
                        {
                          className: "fas fa-chevron-down",
                          style: {
                            fontSize: "10px",
                          },
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 372,
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
                    lineNumber: 362,
                    columnNumber: 12,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  "ul",
                  {
                    ref: ref,
                    style: {
                      display: showMenu ? "block" : "none",
                      position: "absolute",
                      top: "100%",
                      //left: '0',
                      right: 0,
                      minWidth: "320px",
                      maxHeight: "560px",
                      overflowY: "auto",
                      background: "#fff",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      zIndex: 1000,
                    },
                    className: "dropdown-menu-custom",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: " ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            "p",
                            {
                              className: "header-user uppercase",
                              style: {
                                color: "white",
                              },
                              children: [
                                "Hii, ",
                                userState === null || userState === void 0
                                  ? void 0
                                  : (_userState$user2 = userState.user) ===
                                      null || _userState$user2 === void 0
                                  ? void 0
                                  : _userState$user2.username,
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 393,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 392,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              _Header_pop_up__WEBPACK_IMPORTED_MODULE_7__.HeaderHome,
                              {
                                label: "Wallet",
                                value:
                                  (_toFixed = (
                                    (balance.balance > 0
                                      ? balance.balance
                                      : 0) -
                                    (balance.exposer > 0 ? balance.exposer : 0)
                                  ).toFixed(2)) !== null && _toFixed !== void 0
                                    ? _toFixed
                                    : "0.00",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 398,
                                columnNumber: 21,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              _Header_pop_up__WEBPACK_IMPORTED_MODULE_7__.HeaderHome,
                              {
                                label: "Exposure",
                                value:
                                  balance.exposer > 0
                                    ? (_balance$exposer = balance.exposer) ===
                                        null || _balance$exposer === void 0
                                      ? void 0
                                      : _balance$exposer.toFixed(2)
                                    : 0,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 399,
                                columnNumber: 21,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              _Header_pop_up__WEBPACK_IMPORTED_MODULE_7__.HeaderHome,
                              {
                                label: "Avaliable",
                                value:
                                  (_toFixed2 = (
                                    (balance.balance > 0
                                      ? balance.balance
                                      : 0) -
                                    (balance.exposer > 0 ? balance.exposer : 0)
                                  ).toFixed(2)) !== null && _toFixed2 !== void 0
                                    ? _toFixed2
                                    : "0.00",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 400,
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
                          lineNumber: 396,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list  px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/",
                              className: "text-black",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-house mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 405,
                                    columnNumber: 23,
                                  },
                                  undefined
                                ),
                                "Home",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 404,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 403,
                          columnNumber: 15,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/accountstatement",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-bar-chart-steps mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 411,
                                    columnNumber: 23,
                                  },
                                  undefined
                                ),
                                "Account Statement",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 410,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 409,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/depositstatement",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-bank mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 417,
                                    columnNumber: 22,
                                  },
                                  undefined
                                ),
                                "Deposit Statement",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 416,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 415,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/withdrawstatement",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-cash-stack mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 423,
                                    columnNumber: 25,
                                  },
                                  undefined
                                ),
                                "Withdraw Statement",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 422,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 421,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/profitloss",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-calculator-fill mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 429,
                                    columnNumber: 24,
                                  },
                                  undefined
                                ),
                                "Profit Loss Report",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 428,
                              columnNumber: 21,
                            },
                            undefined
                          ),
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
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/bethistory",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-clock-history mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 435,
                                    columnNumber: 25,
                                  },
                                  undefined
                                ),
                                "Bet History",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 434,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 433,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/unsettledbet",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-exclamation-circle mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 441,
                                    columnNumber: 24,
                                  },
                                  undefined
                                ),
                                "Unsettled Bet",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 440,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 439,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/casino/result",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-dice-5 mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 447,
                                    columnNumber: 25,
                                  },
                                  undefined
                                ),
                                "Casino Report History",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 446,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 445,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/button-values",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-sliders mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 453,
                                    columnNumber: 22,
                                  },
                                  undefined
                                ),
                                "Set Button Values",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 452,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 451,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/settings/security-auth",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-shield-lock mr-2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 459,
                                    columnNumber: 25,
                                  },
                                  undefined
                                ),
                                "Security Auth Verification",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 458,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 457,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/changepassword",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-key mr-2",
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
                                "Change Password",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 464,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 463,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            "label",
                            {
                              className: "mb-0",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "input",
                                  {
                                    type: "checkbox",
                                    name: "balance",
                                    checked: hideExpBal.balance || false,
                                    onChange: onChangeBalExp,
                                    className: "mrc-5",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 472,
                                    columnNumber: 25,
                                  },
                                  undefined
                                ),
                                " ",
                                "Balance",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 471,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 470,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            "label",
                            {
                              className: "mb-0",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "input",
                                  {
                                    type: "checkbox",
                                    name: "exposer",
                                    checked: hideExpBal.exposer || false,
                                    onChange: onChangeBalExp,
                                    className: "mrc-5",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 484,
                                    columnNumber: 25,
                                  },
                                  undefined
                                ),
                                " ",
                                "Exposer",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 483,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 482,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className: "header-list px-3 ",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                            {
                              onClick: () => closeMenu(),
                              to: "/rules",
                              className: "",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className:
                                      "bi bi-file-text mr-2 text-primary",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 496,
                                    columnNumber: 23,
                                  },
                                  undefined
                                ),
                                "Rules",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 495,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 494,
                          columnNumber: 17,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "li",
                        {
                          className:
                            "border-top text-white p-10 bg-orange-gradient px-3",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            "a",
                            {
                              onClick: logoutUser,
                              href: "#",
                              style: {
                                fontWeight: "bold",
                                color: "white",
                                textTransform: "uppercase",
                                textDecoration: "none",
                              },
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "i",
                                  {
                                    className: "bi bi-box-arrow-right mr-2 ",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 507,
                                    columnNumber: 25,
                                  },
                                  undefined
                                ),
                                "signout",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 502,
                              columnNumber: 21,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 501,
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
                    lineNumber: 375,
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
              lineNumber: 350,
              columnNumber: 9,
            },
            undefined
          );
        };
        _s(HeaderDropdown, "lMJQds9bSyPBuHHl3CHTMgHgj+c=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,
            _custom_link__WEBPACK_IMPORTED_MODULE_3__.useNavigateCustom,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
          ];
        });
        _c = HeaderDropdown;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          HeaderDropdown;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "HeaderDropdown");

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

    /***/ "./src/pages/_layout/elements/Navbar/NavButton.jsx":
      /*!*********************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/NavButton.jsx ***!
  \*********************************************************/
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
        /* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js"
          );
        /* harmony import */ var _HeaderDropdown__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./HeaderDropdown */ "./src/pages/_layout/elements/Navbar/HeaderDropdown.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../../redux/actions/balance/balanceSlice */ "./src/redux/actions/balance/balanceSlice.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/Navbar/NavButton.jsx",
          _s = __webpack_require__.$Refresh$.signature();

        const NavButton = () => {
          _s();
          var _ref;
          const balance = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(
            _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_4__.selectBalance
          );
          const handleSignup = () => {};
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
          const handleWithdraw = () => {
            navigate("/withdraw");
          };
          const handleDeposit = () => {
            navigate("/deposit");
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            "div",
            {
              className: "new-header-right",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  "div",
                  {
                    className: "main-navbutton-container-flex",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[
                          "default"
                        ],
                        {
                          variant: "contained",
                          className: "d-none d-lg-flex me-2", // Added margin-right
                          sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "darkgreen",
                            color: "#fff",
                            borderBottom: "4px solid #8b0000",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "5px",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#5a0000",
                              borderBottom: "4px solid darkgreen",
                            },
                          },
                          onClick: handleDeposit,
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "img",
                              {
                                src: "/icon/deposit-icon.png",
                                alt: "Deposit Icon",
                                className: "btn-logged-header-img",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 42,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "span",
                              {
                                children: "Deposit",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 47,
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
                          lineNumber: 22,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[
                          "default"
                        ],
                        {
                          type: "btn",
                          className: "new-withdrawal-btn d-none d-lg-flex me-2", // Added margin-right
                          sx: {
                            display: "flex",
                            alignItems: "center",
                            // gap: "0.5rem",
                            background: "#8b0000",
                            color: "#fff",
                            borderBottom: "4px solid darkgreen",
                            padding: "0.15rem 0.5rem",
                            borderRadius: "5px",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#5a0000",
                              borderBottom: "4px solid #8b0000",
                            },
                          },
                          onClick: handleWithdraw,
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "img",
                              {
                                src: "/icon/withdrawal-icon.png",
                                alt: "Withdrawal Icon",
                                className: "btn-logged-header-img",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 71,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "span",
                              {
                                children: "withdrawl",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 76,
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
                          lineNumber: 51,
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
                    lineNumber: 21,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  "div",
                  {
                    className: "new-header-expo-buttons",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        "div",
                        {
                          className: "main-div-expo-button-relatve",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "span",
                              {
                                className: "centered-absolute-text",
                                children: "Bal",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 87,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "img",
                              {
                                src: "/icon/expobutton.png",
                                alt: "Expo Icon 1",
                                className: "new-Expo-image-button",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 88,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "span",
                              {
                                className:
                                  "centered-absolute-text-number balance-text-responsive",
                                style: {
                                  bottom: -20,
                                },
                                children: ((_ref =
                                  (balance.balance > 0 ? balance.balance : 0) -
                                  (balance.exposer > 0
                                    ? balance.exposer
                                    : 0)) !== null && _ref !== void 0
                                  ? _ref
                                  : 0
                                ).toFixed(2),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 93,
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
                          lineNumber: 86,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        "div",
                        {
                          className: "main-div-expo-button-relatve",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "span",
                              {
                                className: "centered-absolute-text",
                                children: "Exp",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 96,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "img",
                              {
                                src: "/icon/expobutton.png",
                                alt: "Expo Icon 1",
                                className: "new-Expo-image-button",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 97,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "span",
                              {
                                className:
                                  "centered-absolute-text-number balance-text-responsive",
                                style: {
                                  bottom: -20,
                                },
                                children: (balance.exposer > 0
                                  ? balance.exposer
                                  : 0
                                ).toFixed(2),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 102,
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
                          lineNumber: 95,
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
                    lineNumber: 83,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  "div",
                  {
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      _HeaderDropdown__WEBPACK_IMPORTED_MODULE_1__["default"],
                      {
                        isMobile:
                          react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isMobile,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 107,
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
              lineNumber: 19,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(NavButton, "tFnUMoIAaCiA6wBDru2zr0MP5Tk=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,
            react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate,
          ];
        });
        _c = NavButton;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          NavButton;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "NavButton");

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

    /***/ "./src/pages/_layout/elements/Navbar/NavLogo.jsx":
      /*!*******************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/NavLogo.jsx ***!
  \*******************************************************/
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
        /* harmony import */ var _goldlogo_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./goldlogo.png */ "./src/pages/_layout/elements/Navbar/goldlogo.png"
          );
        /* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./logo.png */ "./src/pages/_layout/elements/Navbar/logo.png"
          );
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/Navbar/NavLogo.jsx";

        const NavLogo = () => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
            "div",
            {
              className: "new-logo-container",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                  "img",
                  {
                    src: _logo_png__WEBPACK_IMPORTED_MODULE_2__,
                    alt: "ambaniexchange",
                    className: "new-logo-desktop-img ",
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 7,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                  "img",
                  {
                    src: _goldlogo_png__WEBPACK_IMPORTED_MODULE_1__,
                    alt: "ambaniexchange",
                    className: "new-logo-mobile-img ",
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 8,
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
              lineNumber: 6,
              columnNumber: 5,
            },
            undefined
          );
        };
        _c = NavLogo;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = NavLogo;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "NavLogo");

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

    /***/ "./src/pages/_layout/elements/Navbar/NavSearch.jsx":
      /*!*********************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/NavSearch.jsx ***!
  \*********************************************************/
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
        /* harmony import */ var _Rules_RulesModal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./Rules/RulesModal */ "./src/pages/_layout/elements/Navbar/Rules/RulesModal.jsx"
          );
        /* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../../services/match.service */ "./src/services/match.service.ts"
          );
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/Navbar/NavSearch.jsx",
          _s = __webpack_require__.$Refresh$.signature();

        const NavSearch = () => {
          _s();
          const [searchQuery, setSearchQuery] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [suggestions, setSuggestions] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const [isLoading, setIsLoading] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [isDropdownOpen, setIsDropdownOpen] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Track dropdown visibility
          const dropdownRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
            null
          ); // Ref for the dropdown container

          // Close dropdown when clicking outside
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            const handleClickOutside = (event) => {
              if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
              ) {
                setIsDropdownOpen(false);
              }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, []);

          // Fetch suggestions when searchQuery changes
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            const fetchSuggestions = async () => {
              if (searchQuery.trim() === "") {
                setSuggestions([]);
                setIsDropdownOpen(false);
                return;
              }
              setIsLoading(true);
              try {
                const response =
                  await _services_match_service__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                  ].getMatchListSuggestion({
                    name: searchQuery,
                  });
                setSuggestions(response.data.data);
                setIsDropdownOpen(true); // Open dropdown when suggestions are fetched
              } catch (error) {
                console.error("Error fetching suggestions:", error);
                setSuggestions([]);
              } finally {
                setIsLoading(false);
              }
            };
            const debounceTimer = setTimeout(fetchSuggestions, 300);
            return () => clearTimeout(debounceTimer);
          }, [searchQuery]);
          const handleMatchClick = (match) => {
            if (match) {
              window.location.href = `/odds/${match.matchId}`;
            }
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
            "div",
            {
              className: "nav-search-container",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                  "div",
                  {
                    className: "nav-search-main",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      "div",
                      {
                        className: "nav-search-input-wrapper",
                        ref: dropdownRef,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "input",
                            {
                              type: "text",
                              placeholder: "Search Events",
                              value: searchQuery,
                              onChange: (e) => setSearchQuery(e.target.value),
                              onFocus: () =>
                                searchQuery && setIsDropdownOpen(true), // Open dropdown when input is focused
                              className: "nav-search-input",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 64,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "span",
                            {
                              className: "nav-search-icon",
                              children: isLoading ? "âŒ›" : "ðŸ”",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 72,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          isDropdownOpen &&
                            suggestions.length > 0 &&
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                              "div",
                              {
                                className: "nav-search-suggestions",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                  "ul",
                                  {
                                    className: "suggestions-list",
                                    children: suggestions.map((match) =>
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                        "li",
                                        {
                                          onClick: () =>
                                            handleMatchClick(match),
                                          className: "suggestion-item",
                                          children: match.name,
                                        },
                                        match.matchId,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 81,
                                          columnNumber: 19,
                                        },
                                        undefined
                                      )
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 79,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 78,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          isDropdownOpen &&
                            searchQuery &&
                            suggestions.length === 0 &&
                            !isLoading &&
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                              "div",
                              {
                                className: "nav-search-suggestions",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                  "div",
                                  {
                                    className: "no-results",
                                    children: "No matches found",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 96,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 95,
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
                        lineNumber: 63,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                  "div",
                  {
                    className:
                      "nav-search-rules d-hidden md:d-flex mt-1 justify-content-center align-items-center ",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      _Rules_RulesModal__WEBPACK_IMPORTED_MODULE_1__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 102,
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
              lineNumber: 61,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(NavSearch, "VfUMmlTJsQLmPznFZc0dD44xHKk=");
        _c = NavSearch;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          NavSearch;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "NavSearch");

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

    /***/ "./src/pages/_layout/elements/Navbar/Navbar.jsx":
      /*!******************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/Navbar.jsx ***!
  \******************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _NavLogo__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./NavLogo */ "./src/pages/_layout/elements/Navbar/NavLogo.jsx"
          );
        /* harmony import */ var _NavSearch__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./NavSearch */ "./src/pages/_layout/elements/Navbar/NavSearch.jsx"
          );
        /* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./NavButton */ "./src/pages/_layout/elements/Navbar/NavButton.jsx"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/Navbar/Navbar.jsx",
          _s = __webpack_require__.$Refresh$.signature();

        const Navbar = () => {
          _s();
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
          const handleLogoClick = () => {
            // Navigate to match page
            navigate("/match/888");
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
            "div",
            {
              className: "new-navbar-wrapper",
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                "div",
                {
                  className: "new-navbar-container",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      "div",
                      {
                        className: "new-navbar-left",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "div",
                            {
                              className: "new-navbar-logo",
                              onClick: handleLogoClick,
                              style: {
                                cursor: "pointer",
                              },
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                _NavLogo__WEBPACK_IMPORTED_MODULE_0__[
                                  "default"
                                ],
                                {},
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 18,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 17,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "div",
                            {
                              className: "new-navbar-mobile-button",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                _NavButton__WEBPACK_IMPORTED_MODULE_2__[
                                  "default"
                                ],
                                {},
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 21,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 20,
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
                        lineNumber: 16,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      "div",
                      {
                        className: "new-navbar-search",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                          _NavSearch__WEBPACK_IMPORTED_MODULE_1__["default"],
                          {
                            searchQuery: "",
                            setSearchQuery: "",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 27,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 26,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      "div",
                      {
                        className: "new-navbar-desktop-button",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                          _NavButton__WEBPACK_IMPORTED_MODULE_2__["default"],
                          {},
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 35,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 34,
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
          );
        };
        _s(Navbar, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function () {
          return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate];
        });
        _c = Navbar;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Navbar;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Navbar");

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

    /***/ "./src/pages/_layout/elements/Navbar/Rules/Modal.jsx":
      /*!***********************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/Rules/Modal.jsx ***!
  \***********************************************************/
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/Navbar/Rules/Modal.jsx";

        const Modal = ({ open, onClose, children }) => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                "div",
                {
                  onClick: onClose,
                  className: `new-modal-overlay ${
                    open ? "new-modal-visible" : "new-modal-hidden"
                  }`,
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                    "div",
                    {
                      onClick: (e) => e.stopPropagation(),
                      className: `new-modal-container ${
                        open ? "new-modal-open" : "new-modal-closed"
                      }`,
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                          "button",
                          {
                            onClick: onClose,
                            className: "new-modal-close-button",
                            children: "\u2715",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 18,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        children,
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 12,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 6,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _c = Modal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Modal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Modal");

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

    /***/ "./src/pages/_layout/elements/Navbar/Rules/ReusableAccordian.jsx":
      /*!***********************************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/Rules/ReusableAccordian.jsx ***!
  \***********************************************************************/
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
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @mui/material */ "./node_modules/@mui/material/Accordion/Accordion.js"
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @mui/material */ "./node_modules/@mui/material/AccordionSummary/AccordionSummary.js"
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js"
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @mui/material */ "./node_modules/@mui/material/AccordionDetails/AccordionDetails.js"
          );
        /* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js"
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/Navbar/Rules/ReusableAccordian.jsx";

        const ReusableAccordian = ({ items, children }) => {
          if (items.length > 0) {
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
              "div",
              {
                className: "reusable-accordion-container",
                children: items.map((item, index) =>
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                    _mui_material__WEBPACK_IMPORTED_MODULE_2__["default"],
                    {
                      defaultExpanded: item.defaultExpanded,
                      disableGutters: true,
                      elevation: 0,
                      square: true,
                      sx: {
                        boxShadow: "none",
                        border: "none",
                        mb: 1,
                        "&:before": {
                          display: "none",
                        },
                      },
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                          _mui_material__WEBPACK_IMPORTED_MODULE_3__["default"],
                          {
                            expandIcon: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                              _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 31,
                                columnNumber: 27,
                              },
                              undefined
                            ),
                            sx: {
                              backgroundColor: "#8b0000",
                              padding: "1px",
                            },
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                              _mui_material__WEBPACK_IMPORTED_MODULE_5__[
                                "default"
                              ],
                              {
                                className: "reusable-accordion-title",
                                children: item.title,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 37,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 30,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                          _mui_material__WEBPACK_IMPORTED_MODULE_6__["default"],
                          {
                            children: item.content.map((con, i) =>
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                                "div",
                                {
                                  className: "reusable-accordion-content",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                                    _mui_material__WEBPACK_IMPORTED_MODULE_5__[
                                      "default"
                                    ],
                                    {
                                      children: con,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 44,
                                      columnNumber: 19,
                                    },
                                    undefined
                                  ),
                                },
                                i,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 43,
                                  columnNumber: 17,
                                },
                                undefined
                              )
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 41,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      ],
                    },
                    index,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 15,
                      columnNumber: 11,
                    },
                    undefined
                  )
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 7,
              },
              undefined
            );
          }
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
            "div",
            {
              children: children,
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 10,
            },
            undefined
          );
        };
        _c = ReusableAccordian;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ReusableAccordian;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "ReusableAccordian");

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

    /***/ "./src/pages/_layout/elements/Navbar/Rules/RulesModal.jsx":
      /*!****************************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/Rules/RulesModal.jsx ***!
  \****************************************************************/
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
        /* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./Modal */ "./src/pages/_layout/elements/Navbar/Rules/Modal.jsx"
          );
        /* harmony import */ var _ReusableAccordian__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./ReusableAccordian */ "./src/pages/_layout/elements/Navbar/Rules/ReusableAccordian.jsx"
          );
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/Navbar/Rules/RulesModal.jsx",
          _s = __webpack_require__.$Refresh$.signature();

        // import { title } from "process";
        // import Rules from "./Rules";

        const itemArray = [
          {
            title: "Football Fancy",
            content: [
              "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate...",
              "Tournament Total Goals, Team Total Goals goals scored in 90 minutes or in extra-time will count...",
              "Tournament Corners - Only corners taken in 90 minutes count.",
              "Tournament Penalties Missed/Converted - All penalties count including extra-time and shootouts.",
            ],
            defaultExpanded: false,
          },
          {
            title: "Football Fancy",
            content: [
              "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate...",
              "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate...",
            ],
            defaultExpanded: false,
          },
          {
            title: "Big Bash League",
            content: [
              "Total match 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Highest innings run - Only first innings is valid",
              "Lowest innings run - Only first innings is valid",
              "Total 1st 6 over run:- Average 46 runs will be given if total 20 overs is not played, This event is valid only for the 1st innings",
              "Total Fours - Average 25 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 10 sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average will 12 Wickets be given in case match abandoned or over reduced",
              "Total Wides - Average 8 wides will be given in case match abandoned or over reduced",
              "Total Extras - Average 14 extras will be given in case match abandoned or over reduced",
              "Total Fifties - Average 2 fifties will be given in case match abandoned or over reduced",
              "Total Caught out - Average 8 catch out will be given in case match abandoned or over reduced",
              "Total Bowled out - Average 2 bowled out will be given in case match abandoned or over reduced",
              "Highest 6 over run: Both innings are valid",
              "Highest run in individual match: Both innings are valid",
              "Highest Fours in individual match: Both innings are valid",
              "Highest Sixes in individual match: Both innings are valid",
              "Total LBW:- Average 1 LBW will be given in case match abandoned or over reduced",
              "Highest Wickets in individual match: Both innings are valid",
              "Highest extras in individual match: Both innings are valid",
              "Highest match 1st over run in individual match: Only 1st inning will be considered as valid valid",
              "All events related to bowler are valid only for the league stages, both the innings will be considered as valid. A minimum of 32 overs has to be bowled else the same will be voided. If the mentioned bowler has bowled one legal delivery then it will be considered as 1 over even if the over is not completed",
              "All events based on ground are decided based on the initial fixture, in case of any changes in the venue between the series. Then average will be given based on the initial fixture for the number of games reduced, Similarly if any match is added newly to the venue will not be considered",
              "Average for wickets taken will be given in case match abandoned or over reduced or the player has not bowled single legal delivery before the over got reduced",
              "Fancy based on all individual teams/players/ground are valid only for league stage",
              "Management decision will be final",
              "Bellerive Oval:- Hobart",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 28 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 11 Sixes will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 330 runs will be given in case match abandoned or over reduced",
              "Manuka Oval:- Canberra",
              "Total 1st over run:- Average 5 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 24 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 13 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 318 runs will be given in case match abandoned or over reduced",
              "Bellerive Oval:- Hobart",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Aurora stadium:- Launceston",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 45 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 25 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 320 runs will be given in case match abandoned or over reduced",
              "The Gabba:- Brisbane",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 24 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 9 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 13 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 310 runs will be given in case match abandoned or over reduced",
              "QUEENSLAND",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 24 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 315 runs will be given in case match abandoned or over reduced",
              "Adelaide Oval",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 27 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 320 runs will be given in case match abandoned or over reduced",
              "Perth Stadium",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 26 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 12 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 9 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 16 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 340 runs will be given in case match abandoned or over reduced",
              "Showground Stadium",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 25 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 9 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 315 runs will be given in case match abandoned or over reduced",
              "Docklands Stadium",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 25 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 11 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 320 runs will be given in case match abandoned or over reduced",
              "Melbourne Ground",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 45 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 26 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 15 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 330 runs will be given in case match abandoned or over reduced",
              "Sydney Ground",
              "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
              "Total Fours - Average 26 fours will be given in case match abandoned or over reduced",
              "Total Sixes - Average 12 Sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced",
              "Total Wide â€“ Average 8 Wide will be given in case match abandoned or over reduced",
              "Total Extras - Average 15 Extras will be given in case match abandoned or over reduced",
              "Total Run- Average 335 runs will be given in case match abandoned or over reduced",
              "Average will be given for player if the mentioned player is not included in the playing 11",
              "If the mentioned player is not included in playing 11 for 3 consecutive matches and the mentioned player will be deleted",
              "Super over will not be included",
            ],
            defaultExpanded: false,
          },
          {
            title: "Launch Favourite",
            content: [
              "The team which is favourite at lunch will be considered as lunch favourite or the team which is favourite after first inning last ball will be considered as lunch favourite in our exchange.",
              "In any circumstances management decision will be final.",
              "In case of tie in T20 or one day in lunch favourite game , all bets will be deleted in our exchange.",
              "In case overs are reduced in a match, the team which favourite at lunch will be considered as lunch favourite.",
              "For example :- if match is reduced to 18 over per side in t20 or Oneday then after 18 over the team which is favourite at lunch will be considered as lunch favourite.",
              "In case of weather, 1st innings match overs are reduced and direct target is given to team which will bat in 2nd inning then lunch favourite will be considered after target is given at lunch.",
              "For example :- in T20 match rain comes at 14 over and match is interrupted due to rain and direct target is given to 2nd batting team, then team which is favourite in match odds after target is given in match, will be considered as lunch favourite.",
            ],
            defaultExpanded: false,
          },
          {
            title: "Bookmaker",
            content: [
              "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided...",
              "Due to any reason any team will be getting advantage or disadvantage we are not concerned.",
              "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at the same time (Punching) and others. Note : only winning bets will be voided...",
              "Any query about the result or rates should be contacted within 7 days of the specific event, the same will not be considered valid post 7 days from the event.",
              "If two team ends up with equal points, then result will be given based on the official point table",
              "We will simply compare both teams 10 overs score higher score team will be declared winner in ODI (If both teams same score means, low wickets team will be declared winner. In case, both teams same score & same wickets means highest boundaries team will be declared winner.If all same then will be declared No result)",
              "We will simply compare both teams 6 overs higher score team will be declared winner in T20 matches (If both teams same score means, low wickets team will be declared winner. In case, both teams same score & same wickets means highest boundaries team will be declared winner.If all same then will be declared No result)",
              "Tennis:- Advance fancy market",
              "If the second set is not completed all bets regarding this market will be voided",
              "If a player retires after completion of second set, then the market will be settled as three sets",
              "Virtual Cricket",
              "At any situation if the video gets interrupted/ stopped then the same cannot be continued due to any technical issues bookmaker market will be voided",
            ],
            defaultExpanded: false,
          },
          {
            title: "Politics",
            content: [
              "Indian state legislative assembly elections.",
              "1. This event is to decide the winner of various legislative assemblies of india.",
              "2. The final result declared by election commission of india for assembly elections of various states of india for a particular year will be valid in our exchange ,The customers are entirely responsible for their bets at all times.",
              "3. All bets will be voided if the election doesnâ€™t take place in given time by election commission or as per our exchange management decision.",
              "4. Company reserves the right to suspend/void any bets on this event at any time if we find the same not to be legitimate with the certainty of the outcome.",
              "5. Accidental issues during assembly elections will not be counted in our exchange ,If required Additional candidates may be added on request.",
              "6. Kindly be informed no candidates will be partially settled and will remain in the market until it is fully settled. This is to ensure that all customers can continue trading for the candidates that they have positions on, since each candidate is still a valid runner in this market.",
              "7. Please be informed that the transmissions described as â€œliveâ€ by few broadcasters may actually be delayed due to multiple scenarios.",
              "8. If any candidate withdraws for any reason, including death, all bets on the market will be valid and be settled as per the defined rules.",
            ],
            defaultExpanded: false,
          },
          {
            title: "Genie Combo special",
            content: [
              "What is Genie Bet?",
              "Mumbai Indians will win + Quinton De Kock will score 20+ runs + Total Match Runs 385+ = 41.00 Combined Rate.",
              "1. If a ball is not bowled during a match, then all bets will be void.",
              "2. In the event of a match being decided by a bowl-off or toss of the coin, all bets will be void.",
              "3. If a player included in any selection in the bet is not named in the official starting XI then the whole bet will be made void, regardless of the rest of the selections within the bet. If the player takes to the pitch, then all player related bets will be settled accordingly as win/loss. â€˜Player A to get 1+ Sixâ€™ would be a losing selection if he participates in fielding but does not bat. â€˜Player B to get 1+ Wicketâ€™ would be a losing selection if he takes any part in the match regardless of whether he bowls. This ruling refers to any player related markets.",
              "4. In the case of official substitutes/impact players etc, bets containing players that are official substitutes and not in the official starting XIâ€™s will be void.",
              "5. Any void selection within your bet, will deem the entire bet void.",
              "6. In the event of a batsman retiring for any reason, all relevant batting markets for this batsman will be settled on the runs at the time of their retirement.",
              "7. Penalty runs will not be included in any settlement totals.",
              "8. In case of rain or If over gets reduced then then all bets will be void.",
            ],
            defaultExpanded: false,
          },
          {
            title: "fancy market",
            content: [
              "Even odd game betting rate rules.",
              "1. Completed game is valid , in case due to rain over are reduced or match abandoned particular game will be deleted.",
              "2. All bets regarding to ODD/EVEN player/partnership are valid if one legal delivery is being played, else the bets will be deleted. Player odd/even all advance bets will be valid if one legal delivery is being played in match otherwise voided.",
              "3. If particular session result is valid then particular Odd/Even session is also valid for exp. 15 over session result settle then 15 over Odd/Even also settle if team all out 12.4.",
              "4. In any circumstances management decision will be final.",
              "Last Digit Lottery:-",
              "1. Lottery means Last Digit.",
              "2. Completed Lottery Will be Settled, Incomplete Lottery Will be voided.",
              "3. Example :- We will Count Last Digit of particular Lottery Market, if in 6 over Market the Score is 42, so we will settle that particular market 2 Number.",
              "4. In case of Rain or If Over Gets Reduced then this Market will get Voided.",
              "5. If Particular Session Result is vaild then Particular Lottery Market also is vaild",
              "Top batsman rules:-",
              "1. If any player does not come as per playing eleven then all bets will be get deleted for the particular player.",
              "2. two players done the same run in a single match (M Agarwal 30 runs and A Rayudu 30 runs, whole inning top batsmen score also 30 run) then both player settlement to be get done 50 percent (50% , 50%)rate on their original value which given by our exchange.",
              "3.Suppose we have opened value of M Agarwal 3.75 back and customer place bets on 10000 @ 3.75 rates and A Rayudu 3.0 back and customer place bets on 10000 @ 3.0 rates.",
              "3.Whole inning result announces 30 run by both player then",
              "Rule of top batsman:-if you bet on M Agarwal you will be get half amount of this rate (10000*3.75/2=18750 you will get)",
              "Rule of top batsman:-if you bet on A Rayudu you will be get half amount of this rate (10000*3.00/2=15000 you will get)",
              "Top batsman only 1st inning valid.",
              "For one day 50 over and for t-20 match 20 over must be played for top batsmen otherwise all bets will be deleted.",
              "Man of the Match Rules",
              "1. All bets will be deleted in case the match is abandoned or over reduced.",
              "2. All bets will be deleted if the mentioned player is not included in playing 11.",
              "3. In case Man of the Match is shared between two players then Dead heat rule will be applicable, For example K Perera and T Iqbal shares the Man of the Match, then the settlement will be done 50% of the rates accordingly.",
              "4. Rules similar to our Top Batsman rules.",
              "Maximum Sixes by Team",
              "1. All bets will be deleted if match abandoned or over reduced",
              "2. All bets will be deleted if both the teams hits same number of sixes.",
              "3. Super over will not be considered.",
              "Maximum 6 or 10 over runs",
              "1. All bets will be deleted if match abandoned or over reduced.",
              "2. All the bets will be deleted if both the teams score is same (Runs scored in 6 or 10 overs)",
              "3. 6 overs for T20 and 10 overs for ODI",
              "4. Both the innings are valid.",
              "5. This fancy will be valid for 1st 6 overs of both innings for T20 and 1st 10 overs of both innings for ODI",
              "Batsman Match",
              "Batsman Match:- Bets for Favourite batsman from the two batsman matched.",
              "All bets will be deleted if any one of the mentioned player is not included in playing 11.",
              "All bets will be deleted unless one ball being played by both the mentioned players.",
              "All bets will be deleted if over reduced or Match abandoned.",
              "All bets will be deleted if both the player scored same run. For example H Amla and J Bairstow are the batsman matched, H Amla and J Bairstow both scored 38 runs then all bets will be deleted.",
              "Both innings will be valid",
              "Opening Pair",
              "1. Bets for Favourite opening pair from the two mentioned opening pair.",
              "2. Runs made by both the opening player will be added. For example:- J Roy scored 20 runs and J Bairstow scored 30 runs result will be 50 runs.",
              "3. Highest run made by the pair will be declared as winner. For example: Opening pair ENG total is 70 runs and Opening pair SA is 90 runs, then SA 90 runs will be declared as winner.",
              "Both innings will be valid",
              "Our exchange Special",
              "All bets will be deleted if the mentioned player is not included in playing 11.",
              "All bets will be deleted if match abandoned or over reduced.",
              "Both innings will be valid",
              "Direction of First Boundary",
              "All bets will be deleted if the mentioned batsman is not included in playing 11.",
              "All bets will be deleted if match abandoned or over reduced.",
              "The boundary hit through off side of the stump will be considered as off side four.",
              "The boundary hit through leg side of the stump will be considered as leg side four.",
              "Boundaries through extras (byes,leg byes,wide,overthrow) will not be considered as valid.",
              "Only 1st Inning will be considered",
              "Fifty & Century by Batsman",
              "All bets will be deleted if match abandoned or over reduced.",
              "All bets will be deleted unless the batsman faces one legal ball.",
              "Both Innings will be valid.",
              "1st over Fancy",
              "Only 1st inning will be valid.",
              "Odd Even Fancy",
              "Incompleted games will be deleted. Over reduced or abandoned all bets will be deleted.",
              "For example:-275 run SL bhav must be played 50 over if rain comes or any condition otherwise 275 run SL bets will be deleted.",
              "Next Man out",
              "Next man out fancy advance & in regular. Both inning will be valid. If any player does not come in opening then all bets will be deleted. If over reduced or abandoned then all bets will be deleted.",
              "Caught out",
              "Caught out fancy in advance & in regular. Both inning will be valid. If over reduced or match abandoned then all bets will be deleted.",
              "Wkt & All out Fancy",
              "5 wkt in 10 over & All out in 20 over fancy is valid for both inning. If match abandoned or over reduced all bets will be deleted.",
              "Test Match: Game Completed Fancy",
              "1. This is the fancy for match to be won/ completed in which day & session (Completed: Game has to be completed)",
              "2. If match drawn then all the sessions will be considered as lost.",
              "Meter Fancy",
              "In case match abandoned or over reduced mid point rule will be applicable",
              "For example: If Dhoni meter is 75 / 77 and the match abandoned or over reduced, then the result will be 76",
              "In case of single difference result will be given for the higher rate of the final rate (eg 53/54) and match gets abandoned then the result will be given as 54",
              "Midpoint rule is applicable for test match also. However for lambi meter/ inning meter 70 overs has to be played only then the same will be considered as valid",
              "Maximum Boundaries:-",
              "If the number of fours or sixes of both the team is equal, then all bets of the respective event will get voided",
              "Khado:- Test",
              "Minimum 70 over has to be played by the particular team only then the Khado of the team will be considered as valid, else the same will be voided",
              "Only Over Rule",
              "Only over session is not completed mid over so that Particular over session bets will be deleted.",
              "In case due to rain or match abandoned particular only session will be deleted.",
              "Ex :- 17.3 over team all out/run chase so only 18 over session bets will be deleted. in case 17.4 over team all out/run chase so only 18 over session bets will be valid.",
              "Penalty Runs Rule",
              "Penalty runs will be counted in all fancy. (This rule applicable from 20th March 2024)",
              "Total Match Fancy",
              "Total Match Six Hitters :- Number of players who hit six in a match. For Example :- 1st inning 5 players come for Batting and hit a six by 3 batsman & same as a 2nd inning 6 players come to bat and hit a six by 2 batsman. Result is 3 + 2 = 5",
              "Total Match Four Hitters :- Number of players who hit four in match. For example:- 1st inning 6 players come for batting and hit a four by 4 batsman & same as a 2nd inning 5 players come for batting and hit a four by 3 batsmen. Result is 4 + 3 = 7",
              "Total Match Wicket Takers :- Number of bowlers who take a wkt in match. For example :- 1st inning 5 bowlers come to bowling and wkt taker 3 bowlers & same as a 2nd inning 4 bowlers come to bowling and wkt taker 2 bowlers. Result is 3 + 2 = 5",
              "100 balls Event: The events for 1 to 100 balls will be considered valid only if the number of balls mentioned has been played completely. However if the balls got reduced before the particular event then the same will be voided, if the team batting first get all out prior to 100 balls the balance balls will be counted from second innings. For example if team batting first gets all out in 81 balls balance 19 balls will be counted from second innings and that 19 balls all events are counted. This same is valid for 1st Innings only.",
              "1. All fancy bets will be validated when match has been tied.",
              "2. All advance fancy will be suspended before toss or weather condition. All advance fancy will be voided if over reduced before match start.",
              "3. In case technical error or any circumstances any fancy is suspended and does not resume result will be given all previous bets will be valid (based on haar/jeet).",
              "4. If any case wrong rate has been given in fancy that particular bets will be cancelled.",
              "5. In any circumstances management decision will be final related to all exchange items. Our scorecard will be considered as valid if there is any mismatch in online portal",
              "6. In case customer make bets in wrong fancy we are not liable to delete, no changes will be made and bets will be consider as confirm bet.",
              "7. Due to any technical error market is open and result has came all bets after result will be deleted.",
              "8. Manual bets are not accepted in our exchange",
              "9. Our exchange will provide 5 second delay in our tv.",
              "10. Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided, For example: If we find such entries (above mentioned) from any id and their bets are (200000 lay in a 6 over session for the rate 40 and 200000 back for the rate of 48) and the actual score is 38, bets of 40 lay will be voided and the bets for 48 back will be considered valid.",
              "11. Company reserves the right to void any bets (only winning bets) of any event at any point of the match if the company believes there is any cheating/wrong doing in that particular event by the players (either batsman/bowler)",
              "12. Once our exchange give username and password it is your responsibility to change a password.",
              "14. Warning:- live scores and other data on this site is sourced from third party feeds and may be subject to time delays and/or be inaccurate. If you rely on this data to place bets, you do so at your own risk. Our exchange does not accept responsibility for loss suffered as a result of reliance on this data.",
              "15.Traders will be block the user ID if find any misinterpret activities, No queries accept regarding.",
              "16. Our exchange is not responsible for misuse of client id.",
              "Test",
              "1 Session:-",
              "1.1 Complete session valid in test.",
              "1.2 Middle session and Session is not completed due to Innings declared or all out so that particular over considered as completed and remaining over counted in next team Innings for ex:- In case of Innings declared or all out In 131.5th over Considered as 132 over completed remaining 1 over counted for 133 over middle session and 3 over counted for 135 over session from next team Innings and One over session and Only over session is not completed due to innings declared so that Particular over session bets will be deleted and all out considered as valid for ex:- In case of Innings declared In 131.5th over so 132 over will be deleted and if all out then 132 over and Only 132 over will be Valid.",
              "1.3 1st day 1st session run minimum 25 over will be played then result is given otherwise 1st day 1st session will be deleted.",
              "1.4 1st day 2nd session run minimum 25 over will be played then result is given otherwise 1st day 2nd session will be deleted.",
              "1.5 1st day total run minimum 80 over will be played then result is given otherwise 1st day total run will be deleted. If a team get All Out before the day stumps, the other team's 1st day score will be added to 1st day total run event. (i.e. AUSTRALIA got all out at 251 before the day stumps, then ENGLAND hit 100 runs in the remaining overs of 1st day, so the result of 1st day total run event will be 351)",
              "1.6 Test Match advance session is Valid in only 1st inning.",
              "2 Test lambi/ Inning run:-",
              "2.1 Mandatory 70 over played in test lambi paari/ Innings run. If any team all-out or declaration lambi paari/ innings run is valid.",
              "2.2 In case due to weather situation match has been stopped all lambi trades will be deleted.",
              "2.3 In test both lambi paari / inning run is valid in advance fancy.",
              "3 Test batsman:-",
              "3.1 In case batsmen is injured he/she is made 34 runs the result will be given 34 runs.",
              "3.2 Batsman 50/100 run if batsman is injured or declaration the result will be given on particular run.",
              "3.3 In next men out fancy if player is injured particular fancy will be deleted.",
              "3.4 In advance fancy opening batsmen is only valid if same batsmen came in opening the fancy will be valid in case one batsmen is changed that particular player fancy will be deleted.",
              "3.5 Test match advancefancy batsman Run valid in only 1st inning.",
              "4 Test partnership:-",
              "4.2 Partnership and player runs due to weather condition or match abandoned the result will be given as per score.",
              "4.3 Advance partnership is valid in case both players are different or same.",
              "4.4 Test Match advance fancy partnership is valid in only 1st inning.",
              "5 Other fancy advance (test):-",
              "5.1 Four, sixes, wide, wicket, extra run, total run, highest over and top batsmen is valid only if 300 overs has been played or the match has been won by any team otherwise all these fancy will be deleted. Additionally all events are valid only for 1st innings( this is applicable to all individual team events also)",
              "2 Odi rule:-",
              "Session:-",
              "Match 1st over run advance fancy only 1st innings run will be counted.",
              "Complete session is valid in case due to rain or match abandoned particular session will be deleted.",
              "For example:- 35 over run team a is playing any case team A is all-out in 33 over team a has made 150 run the session result is validated on particular run.",
              "Advance session is valid in only 1st innings.",
              "50 over runs:-",
              "In case 50 over is not completed all bet will be deleted due to weather or any condition.",
              "Advance 50 over runs is valid in only 1st innings.",
              "Odi batsman runs:-",
              "In case batsman is injured he/she is made 34 runs the result will be given 34 runs.",
              "In next men out fancy if player is injured particular fancy will be deleted.",
              "In advance fancy opening batsmen is only valid if same batsmen came in opening the fancy will be valid in case one batsmen is changed that particular player fancy will be deleted.",
              "Odi partnership runs:-",
              "Advance partnership is valid in case both players are different or same.",
              "Only 1st inning partnerships are valid in particular match.",
              "Other fancy:-",
              "Four, sixes, wide, wicket, extra run, total run, highest over ,top batsman,maiden over,caught-out,no-ball,run-out,fifty and century are valid only match has been completed in case due to rain over has been reduced all other fancy will be deleted.",
              "T20:-",
              "Session:-",
              "Match 1st over run advance fancy only 1st innings run will be counted.",
              "Complete session is valid in case due to rain or match abandoned particular session will be deleted.",
              "For example :- 15 over run team a is playing any case team a is all-out in 13 over team A has made 100 run the session result is validated on particular run.",
              "Advance session is valid in only 1st innings.",
              "20 over runs:-",
              "Advance 20 over run is valid only in 1st innings. 20 over run will not be considered as valid if 20 overs is not completed due to any situation",
              "T20 batsman runs:-",
              "In case batsman is injured he/she is made 34 runs the result will be given 34 runs.",
              "In next men out fancy if player is injured particular fancy will be deleted.",
              "In advance fancy opening batsmen is only valid if same batsmen came in opening the fancy will be valid in case one batsmen is changed that particular player fancy will be deleted.",
              "T20 partnership runs:-",
              "Advance partnership is valid in case both players are different or same.",
              "Only 1st inning partnerships are valid in particular match.",
              "1st 2 & 3 Wickets runs:- T20/ODI",
              "Advance event is valid in only 1st Innings.",
              "If over reduced due to rain or weather condition or match abandoned the result will be given as per score.",
              "Other fancy:-",
              "T-20 ,one day and test match in case current innings player and partnership are running in between match has been called off or abandoned that situation all current player and partnership results are valid.",
              "Four, sixes, wide, wicket, extra run, total run, highest over and top batsman,maiden over,caught-out,no-ball,run-out,fifty and century are valid only match has been completed in case due to rain over has been reduced all other fancy will be deleted. 1st 6 over dot ball and 20 over dot ball fancy only valid is 1st innings.",
              "1st wicket lost to any team balls meaning that any team 1st wicket fall down in how many balls that particular fancy at least minimum one ball have to be played otherwise bets will be deleted.",
              "1st wicket lost to any team fancy valid both innings.",
              "How many balls for 50 runs any team meaning that any team achieved 50 runs in how many balls that particular fancy at least one ball have to be played otherwise that fancy bets will be deleted.",
              "How many balls for 50 runs fancy any team only first inning valid.",
              "1st 6 inning boundaries runs any team fancy will be counting only according to run scored fours and sixes at least 6 over must be played otherwise that fancy will be deleted.",
              "1st inning 6 over boundaries runs any team run like wide ,no-ball ,leg-byes ,byes and over throw runs are not counted this fancy.",
              "How many balls face any batsman meaning that any batsman how many balls he/she played that particular fancy at least one ball have to be played otherwise that fancy bets will be deleted.",
              "How many balls face by any batsman both innings valid.",
              "Lowest scoring over will be considered valid only if the over is completed fully (all six deliveries has to be bowled)",
              "Total Match 30s : How many batsman's scored 30 to 49 runs in full match. If a Player reached 50 means, Not considered in this Event",
              "Total Boundaries in 1st Power play : Number of Boundaries Scored in 1st Power play, 1st Innings only Valid In T20/ODI Both",
              "Total Dot balls in 1st Power play : Number of Dot balls coming in 1st Power play, 1st Innings only Valid In T20/ODI Both",
              "Total match Wicket keeper's Dismissals: Wicket keepers Caught outs and Stumping Only Considered In T20/ODI Both",
              "1st Inn Death Over Runs : Runs Scored, Last Over Only Considered, 1st Innings only Valid",
              "High Pship Boundaries in the Match : Maximum Number of Boundaries Scored during any Partnership",
              "Total Wickets: If a Batsman Retired hurt means It will not be Counted in Total Wicket.",
              "Most 4s in Single Over: Maximum number of 4s hit in a single over of the Match. No ball 4s will be counted. Byes & Leg byes 4s will not be counted.",
              "Most 6s in Single Over : Maximum number of 6s hit in a Single over of the Match. No ball 6s will be counted.",
              "Total No Boundaries overâ€™s: Number of overâ€™s where no boundaries (fours or sixes) are scored. If a team all out or Match Resulted in 15.1 then considered as 16 over. Team wise 1st Innings only Considered. Total Match means Both Innings will be considered.",
              "Total Impact overâ€™s: Number of overâ€™s scored 10 runs or above. If a team all out or Match Resulted in 15.1 then considered as 16 over. Team wise 1st Innings only Considered. Total Match means Both Innings will be considered.",
              "Total Reviews Taken in Full Match: Number of Reviews taken in full match. Wickets, Wide & No ball Reviews will be Considered.",
              "Total Match Successful Reviews: Number of Reviews are Successful. Successful means Original decision must be changed.",
              "Total Match Unsuccessful Reviews: Number of Reviews are Unsuccessful. Unsuccessful means Original decision same after DRS.",
              "Total Reviews Resulted Umpire's Call: Number of Reviews Resulted Umpire's Call during the Wicket Review.",
              "Total Reviews Taken by Batting Team: Number of Reviews taken by batting team. Both Innings will be Considered.",
              "Total Reviews Taken by Bowling Team: Number of Reviews taken by bowling team. Both Innings will be Considered.",
              "Total Reviews Taken by Team: Number of Reviews taken by Particular team during Batting and Bowling.",
              "Concussion in Test:-",
              "All bets of one over session will be deleted in test scenario, in case session is incomplete. For example innings declared or match suspended to bad light or any other conditions.",
              "1. All bets will be considered as valid if a player has been replaced under concussion substitute, result will be given for the runs scored by the mentioned player. For example DM Bravo gets retired hurt at 23 runs, then result will be given for 23.",
              "2. Bets of both the player will be valid under concussion substitute.",
              "Total Match- Events (test):-",
              "Minimum of 300 overs to be bowled in the entire test match, otherwise all bets related to the particular event will get void. For example, Total match caught outs will be valid only if 300 overs been bowled in the particular test match",
              "Limited over events-Test:-",
              "This event will be considered valid only if the number of overs defined on the particular event has been bowled, otherwise all bets related to this event will get void. For example 0-25 over events will be valid only if 25 overs has been bowled, else the same will not be considered as valid",
              "If the team gets all out prior to any of the defined overs, then balance overs will be counted in next innings. For example if the team gets all out in 23.1 over the same will be considered as 24 overs and the balance overs will be counted from next innings.",
              "Bowler Wicket event's- Test:-",
              "Minimum of one legal over (one complete over) has to be bowled by the bowler mentioned in the event, else the same will not be considered as valid",
              "Bowler over events- Test:-",
              "The mentioned bowler has to complete the defined number of overs, else the bets related to that particular event will get void. For example if the mentioned bowler has bowled 8 overs, then 5 over run of that particular bowler will be considered as valid and the 10 over run will get void",
              "Player ball event's- Test:-",
              "This event will be considered valid only if the defined number of runs made by the mentioned player, else the result will be considered as 0 (zero) balls",
              "For example if Root makes 20 runs in 60 balls and gets out on 22 runs, result for 20 runs will be 60 balls and the result for balls required for 25 run Root will be considered as 0 (Zero) and the same will be given as result",
              "Limited over events-ODI:-",
              "This event will be considered valid only if the number of overs defined on the particular event has been bowled, otherwise all bets related to this event will get void. 0-50 over events will be valid only if 50 over completed, if the team batting first get all out prior to 50 over the balance over will be counted from second innings. For example if team batting first gets all out in 35 over balance 15 over will be counted from second innings, the same applies for all events if team gets all out before the defined number of overs",
              "The events which remains incomplete will be voided if over gets reduced in the match due to any situation, for example if match interrupted in 15 overs due to rain/badlight and post this over gets reduced. Events for 0-10 will be valid, all other events related to this type will get deleted.",
              "This events will be valid only if the defined number of over is completed. For example team batting first gets all out in 29.4 over then the same will be considered as 30 over, the team batting second must complete 20 overs only then 0-50 over events will be considered as valid. In case team batting second gets all out in 19.4 over then 0-50 over event will not be considered as valid, This same is valid for 1st Innings only.",
              "Bowler event- ODI:-",
              "The mentioned bowler has to complete the defined number of overs, else the bets related to that particular event will get void. For example if the mentioned bowler has bowled 8 overs, then 5 over run of that particular bowler will be considered as valid and the 10 over run will get void",
              "Both innings are valid",
              "Other event:- T20",
              "The events for 1-10 over and 11-20 over will be considered valid only if the number of over mentioned has been played completely. However if the over got reduced before the particular event then the same will be voided, if the team batting first get all out prior to 20 over the balance over will be counted from second innings. For example if team batting first gets all out in 17 over balance 3 over will be counted from second innings and that 3 over all events are counted. This same is valid for 1st Innings only.",
              "If over got reduced in between any running event, then the same will be considered valid and the rest will be voided. For example.., match started and due to rain/bad light or any other situation match got interrupted at 4 over and later over got reduced. Then events for 1-10 is valid rest all will be voided",
              "Bowler Session: Bowler session advance events only valid for 1st inning. This event is valid only if the bowler has completed his maximum quota of overs, else the same will be voided. However if the match has resulted and the particular bowler has already started bowling his final over then result will be given even if he haven't completed the over. For example B Kumar is bowling his final over and at 3.4 the match has resulted then result will be given for B Kumar over runs",
              "Incase of DLS, the over got reduced then the bowler who has already bowled his maximum quota of over that result will be considered as valid and the rest will be voided",
              "Dot ball Event:",
              "Only No run will count as dot ball.",
              "If wicket means that will not count as dot ball.",
              "Most Dot balls By a Bowler Event:",
              "Leg bye run and wickets considered as Dot ball in bowler",
              "Boundary on Match 1st Free hit",
              "Both innings are valid",
              "Boundary hit on Free hit only be considered as valid",
              "Bets will be deleted if there is no Free hit in the mentioned match",
              "Boundary by bat will be considered as valid",
              "Boundaries by Player",
              "Both Four and six are valid",
              "No Boundaries Event:",
              "Both Four and Six are valid",
              "Batsman bat boundaries only considered as valid",
              "Free hit boundaries also valid",
              "Bets will be voided if that particular ball not completed",
              "Result will be Given 0 or 4 (No or Yes). For Example batsman hit boundary in particular ball means Result is 0 otherwise Result is 4.",
              "Any query regarding result or rate has to be contacted within 7 days from the event, query after 7 days from the event will not be considered as valid",
              "Virtual Cricket",
              "Scorecard available on the video will be considered as valid. At any situation, if there is a difference between the scorecard in the website and the scorecard available on video. Score card available on video will be valid",
              "In case of any technical issues the video gets interrupted/stopped and the same cannot be continued, the existing markets will be voided. However the markets which are already finished/settled will remain valid.",
              "CPL:-",
              "If CPL fixture 0f 33 matches gets reduced due to any reason, then all the special fancies will be voided (Match abandoned due to rain/bad light will not be considered in this)",
              "Fancy based on all individual teams are valid only for league stage",
              "Total 1st over runs: Average 6 runs will be given in case match abandoned or over reduced",
              "Total fours: Average 22 fours will be given in case match abandoned or over reduced",
              "Total sixes: Average 13 sixes will be given in case match abandoned or over reduced",
              "Total Wickets - Average will 13 Wickets be given in case match abandoned or over reduced",
              "Total Wides - Average 10 wides will be given in case match abandoned or over reduced",
              "Total Extras - Average 18 extras will be given in case match abandoned or over reduced",
              "Total No ball - Average 1 no ball will be given in case match abandoned or over reduced",
              "Total Fifties - Average 1 fifties will be given in case match abandoned or over reduced",
              "Total Caught outs: Average 9 caught out will be given in case match abandoned or over reduced",
              "At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid",
              "Management decision will be final",
              "Highest innings run - Only first innings is valid",
              "Lowest innings run - Only first innings is valid",
              "Highest over run: Both innings are valid",
              "Highest 1st over run in individual match: Both innings are valid, however for CPL we have created the fancy for 1st innings only",
              "Highest Fours in individual match: Both innings are valid",
              "Highest Sixes in individual match: Both innings are valid",
              "Highest Extras in individual match: Both innings are valid",
              "Highest Wicket in individual match: Both innings are valid",
              "Super over will not be included",
              "Barbados Tridents",
              "Opening partnership run: Average 24 runs will be given in case match abandoned or over reduced",
              "First 6 over run: Average 45 run will be given in case match abandoned or over reduced",
              "St Kitts and Nevis Patriots",
              "Opening partnership run: Average 25 runs will be given in case match abandoned or over reduced",
              "First 6 over run: Average 45 run will be given in case match abandoned or over reduced",
              "Trinbago Knight Riders",
              "Opening partnership run: Average 22 runs will be given in case match abandoned or over reduced",
              "First 6 over run: Average 46 run will be given in case match abandoned or over reduced",
              "Guyana Amazon Warriors",
              "Opening partnership run: Average 23 runs will be given in case match abandoned or over reduced",
              "First 6 over run: Average 44 run will be given in case match abandoned or over reduced",
              "St Lucia Zouks",
              "Opening partnership run: Average 22 runs will be given in case match abandoned or over reduced",
              "First 6 over run: Average 43 run will be given in case match abandoned or over reduced",
              "Jamaica Tallawahs",
              "Opening partnership run: Average 24 runs will be given in case match abandoned or over reduced",
              "First 6 over run: Average 46 run will be given in case match abandoned or over reduced",
              "Tour Special Events",
              "Australia tour of Sri Lanka, 2022",
              "If first match of tour (T20 or ODI) cancelled or over reduce in first match, then all special fancy events will be deleted",
              "If First match played completely and next match gets over reduced or cancelled, then that match bets all bets will be deleted and first match bets will be valid and average will count in other bets",
              "Ex. : First match total 4's is 20 and second match over reduced so bets after first match upto second match started that all deleted and for other bets average counted total 4's is 24 and third match total 4's is 26, So Result of Total 4's is 70",
              "T20 :",
              "Total Matches 1st over runs : Average 6 runs will be given in case match abandoned or over reduced (only 1st innings valid)",
              "Total Matches 1st 6 over runs : Average 45 runs will be given in case match abandoned or over reduced (Only 1st Innings valid)",
              "Total fours: Average 24 fours will be given in case match abandoned or over reduced",
              "Total sixes: Average 9 sixes will be given in case match abandoned or over reduced",
              "Total Boundaries: Average 33 Boundaries will be given in case match abandoned or over reduced",
              "Total Fifties - Average 2 Fifties will be given in case match abandoned or over reduced",
              "Total Wickets - Average 12 Wickets will be given in case match abandoned or over reduced",
              "Total Wides - Average 8 Wides will be given in case match abandoned or over reduced",
              "Total Extras - Average 15 Extras will be given in case match abandoned or over reduced",
              "Total Caught outs: Average 8 Caught out will be given in case match abandoned or over reduced",
              "Total Bowled:- Average 2 Bowled out will be given in case match abandoned or over reduced",
              "Total LBW:- Average 2 LBW will be given in case match abandoned or over reduced",
              "Total Run out:- Average 1 Run out will be given in case match abandoned or over reduced",
              "At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid",
              "Most runs given by Bowler in an Inning of Tour : Maximum How much Runs conceded by a individual Bowler in an Innings. Ex : For T20I How much runs conceded by a bowler in his 4 overs Quota.",
              "Highest total runs in individual match of IPL : Maximum Total runs of both Teams in individual match.",
              "Highest innings run - Only first inning is valid",
              "Highest Partnership - Both innings are valid",
              "Highest 1st over run of individual match: only first inning is valid",
              "Highest Fours of individual match: Both innings are valid",
              "Highest Sixes of individual match: Both innings are valid",
              "Highest Extras of individual match: Both innings are valid",
              "Highest over run: Both innings are valid",
              "Top Batsman Runs in Tour : Most runs by an Individual Player in any Individual matches in ODI/T20I Format of Tour",
              "Highest Wickets by Bowler in Tour : Most Wickets taken by Individual Player in Overall ODI/T20I Format of Tour",
              "Highest Over runs in Tour : Most Runs Scored in Any Single Over of any Individual Match in Overall ODI/T20I Format of Tour",
              "Player Total Runs : Total Runs Scored by an Individual Player in Full ODI/T20I Format of Tour",
              "Player Total 4s : Total 4s Hitted by an Individual Player in Full ODI/T20I Format of Tour",
              "Player Total 6s : Total 6s Hitted by an Individual Player in Full ODI/T20I Format of Tour",
              "Player Boundaries : Total Boundaries Hitted by an Individual Player in Full ODI/T20I Format of Tour",
              "For Player based Events, If any Player not in playing 11 suppose First match any player played completely but if same player not available in next match, then that match bets all bets will be deleted and first match bets will be valid and average will count in other bets",
              "If any one match not in Playing 11 means Average Given for that match",
              "Average For Players:",
              "A Finch Total Runs, Boundaries, 4s and 6s : 26,4,3 & 1.",
              "D Warner Total Runs, Boundaries, 4s and 6s : 28,5,4& 1.",
              "P Nissanka Total Runs, Boundaries, 4s and 6s : 22,3,2 & 1.",
              "D Gunathilaka Total Runs, Boundaries, 4s and 6s : 23,3,2 & 1.",
              "J Hazlewood,M Starc,D Chameera & M Theekshana : 2 wkts Average given if player not in playing 11.",
            ],
            defaultExpanded: false,
          },
          {
            title: "Rules",
            content: [
              "Indian Premier League (IPL)",
              "If IPL fixture of 74 matches gets reduced due to any reason, then all the special fancies will be voided (Match abandoned due to rain/bad light will not be considered in this)",
              "At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid",
              "Management decision will be final",
              "Highest innings run - Only First innings is valid",
              "Lowest innings run - Only First innings is valid",
              "Highest Partnership Runs in IPL: Both Innings are valid",
              "Highest Run Scorer : Total Runs Scored by An Individual Batsman in Full Tournament",
              "Highest Wicket Taker : Total Wickets Taken by a Bowler in Full Tournament",
              "How Many time 5 or More Wickets taken by Bowlers : Number of time 5 or More Wickets taken by Bowlers. In Case Same Bowler 2 time 5 or More Wickets taken means Result Counted as 2.",
              "Total 4's: Average 29 Fours will be given in case match abandoned or over reduced",
              "Total 6's: Average 16 Sixes will be given in case match abandoned or over reduced",
              "Total 30's: Average 2 Thirties will be given in case match abandoned or over reduced",
              "Total 50's: Average 2 Fifties will be given in case match abandoned or over reduced",
              "Total No balls:- Average 1 No ball will be given in case match abandoned or over reduced",
              "Total Wickets - Average will 12 Wickets be given in case match abandoned or over reduced",
              "Total Wides - Average 11 Wides will be given in case match abandoned or over reduced",
              "Total Extras - Average 18 Extras will be given in case match abandoned or over reduced",
              "Total Caught outs: Average 9 Caught out will be given in case match abandoned or over reduced",
              "Total Bowled:- Average 2 Bowled out will be given in case match abandoned or over reduced",
              "Total LBW:- Average 1 LBW will be given in case match abandoned or over reduced",
              "Total Run out:- Average 1 Run out will be given in case match abandoned or over reduced",
              "Total Duckouts in IPL : Average 1 Duckout will be given in case match abandoned or over reduced",
              "Total 50+ Partnerships - Average 2 Fifty plus Partnerships will be given in case match abandoned or over reduced. 50 and 50 Above Partnerships All Counted in this.",
              "Total Highest Scoring Over Runs in IPL: Total of Every Match Highest Scoring Over Runs. Average 20 Runs will be given in case match abandoned or over reduced.",
              "Total Runs Scored in IPL : Total Runs Scored in Full Tournament. Average 350 Runs will be Counted in case match abandoned or over reduced. Both Innings Counted.",
              "Highest Match 1st Over Run of IPL :Only First Innings is Valid.",
              "Highest 1st 6 over run: Only First Innings is Valid. Will not consider if over reduce before completion 6 over.",
              "Highest 1st 10 over run : Only First Innings is Valid. Will not consider if over reduce before completion 10 over.",
              "Highest 4s,6s,30s,50s Single Digit Scorers, Double Digit Scorers,Wickets,Caught Outs,Bowled,Lbw, Runouts, Stumpings, Duckouts,Wides and Extras in individual match: All Both innings are Counted.",
              "Highest Scoring Over Runs in IPL: Both innings are valid",
              "Single Digit Scorers : Duck outs Not Considered in this Event. If Not out Batsman/Injured Batsman facing One Legal Delivery and scored 1 or above means Considered as Single Digit.",
              "Bowler Event :- 2 Over Wkts , Dotballs, Boundaries , Runs bets valid in 1st two overs (1st inning valid ) The mention bowler has to run (start Over) the defined number of overs , else the bets related to that particular event will get void For example if the mentioned bowler has bowled 3 overs , then 2 over of that particular bowler will be considered as valid and the 4 over will get void. If team get all out in the mentioned bowler running over then result considered as valid. For example mentioned bowler 1.4 over bowler & team all out in 19.4 then bowler 2nd over result is valid and 4th over fancy is voided or bowler bowled 3.3 over & team all out on 19.3 then both 2 & 4 over is valid.",
              "Most 6's by individual batsman of IPL : Maximum Number of Sixes Hit By A Batsman in full Tournament. Ex. Last Season (2021) KL Rahul Hit 30 Sixes in 13 Matches. So, 30 was the Result for last season.",
              "Most Balls Faced By a Batsman of IPL : Maximum balls Faced by an Individual Batsman in the Single Match.",
              "Most runs given by Bowler in an Inning of IPL : Maximum Runs conceded by a individual Bowler in an Innings.",
              "Most Wide, Noball,Extras,4s,6s,30s,50s,50+ Pships,Caught Outs,LBWs, Runouts and Duckouts in an Innings Of the Match : Considered For Any Innings.All Both Innings Considered as Valid",
              "In fastest fifty always the first 50 runs will be considered, for example of R Sharma scores 1st fifty in 17 balls and scores 100 in next 14 balls, fastest 50 will be given based on the balls for the 1st fifty runs",
              "Super over will not be included",
            ],
            defaultExpamded: false,
          },
          {
            title: "the hundreds",
            content: [
              " If Hundred fixture of 34 matches gets reduced due to any reason, then all the special fancies will be voided. (Match abandoned due to rain/bad light will not be considered in this",
              "2. At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid.",
              "3. Management decision will be final.",
              "4. Highest innings run - Only First innings is valid.",
              "5. Lowest innings run - Only First innings is valid. 1st Inning playing team must be facing 100 balls or If team get all out means considered.",
              "6. Highest Partnership Runs in Hundred: Both Innings are valid.",
              "7. Highest Partnership Balls in Hundred: Both Innings are valid.",
              "8. Highest Run Scorer : Total Runs Scored by An Individual Batsman in Full Tournament.",
              "9. Highest Wicket Taker : Total Wickets Taken by a Bowler in Full Tournament.",
              "10. Total 4's: Average 22 Fours will be given in case match abandoned or over reduced.",
              "11. Total 6's: Average 11 Sixes will be given in case match abandoned or over reduced.",
              "12. Total Boundaries: Average 34 Boundaries will be given in case match abandoned or over reduced.",
              "13. Total 30's: Average 2 Thirties will be given in case match abandoned or over reduced.",
              "14. Total 50's: Average 1 Fifties will be given in case match abandoned or over reduced.",
              "15. Total Wickets - Average will 13 Wickets be given in case match abandoned or over reduced.",
              "16. Total Wides - Average 8 Wides will be given in case match abandoned or over reduced.",
              "17. Total Extras - Average 17 Extras will be given in case match abandoned or over reduced.",
              "18. Total Caught outs: Average 8 Caught out will be given in case match abandoned or over reduced.",
              "19. Total Bowled:- Average 2 Bowled out will be given in case match abandoned or over reduced.",
              "20. Total LBW:- Average 1 LBW will be given in case match abandoned or over reduced.",
              "21. Total Run out:- Average 1 Run out will be given in case match abandoned or over reduced.",
              "22. Total Duckouts in Hundred : Average 1 Duckout will be given in case match abandoned or over reduced.",
              "23. Total Single Digit Scorers in Hundred : Average 6 Single Digit Scorers will be given in case match abandoned or over reduced. Duck outs Not Considered in this Event. If Not out Batsman/Injured Batsman facing One Legal Delivery and othing scored ('0') means Considered as Single Digit.",
              "24. Total Double Digit Scorers in Hundred : Average 9 Double Digit Scorers will be given in case match abandoned or over reduced.",
              "25. Highest 4s,6s,Boundaries,30s,50s,Wickets,Wides,Extras,Caught Outs,Bowled,Lbw, Runouts, Duckouts,Single Digit Scorers and Double Digit Scorers in individual match: All Both innings are Counted.",
              "26. Most 4s,6s,Boundaries,30s,50s,Caught Outs,Bowled,Duckouts and Wicketkeeper Dismissals in an Innings Of the Match : Considered For Any Innings.All Both Innings Considered as Valid.",
              "27. Most 4s by a Batsman in the Match : Maximum 4s Hitted by an Individual Batsman in any Single Match.",
              "28. Most 6s by a Batsman in the Match : Maximum 6s Hitted by an Individual Batsman in any Single Match.",
              "29. Most Balls Faced By a Batsman of Hundred : Maximum balls Faced by an Individual Batsman in the Single Match.",
              "30. Most runs given by Bowler in an Inning of Hundred : Maximum Runs conceded by a individual Bowler in an Innings.",
              "31. Most wickets by Bowler in an inning : Maximum Wickets taken by a individual Bowler in an Innings.",
              "â¦ If the match starts as a 100 ball game, after the balls are reduced due to rain interrupting means comparison Events like Highest 4s,6s, boundaries,30s,50s, Wickets,Wides,Extras,Caughtouts,Bowled,Lbw,Runout,Duckout,Single Digit Scorers, Double Digit Scorers and Most 4s,6s,boundaries,30s,50s, Caught outs,Bowled,Duckout, wicket Keeper Dismissals all are considered for Result. Example : If a match started as 100 balls game after rain balls reduced to 80 balls match, in that match Maximum 6s reached means that Value considered for Result of Highest 6s in Individual Match.",
              "â¦ Due to Rain match started as Balls reduced match all the comparison Events not considered for Result. Example: Due to Rain match only 30 ball both side Means Maximum Single Digit Scorers reached maximum in that match means Not considered for Result.",
              "â¦ Super over (Super 5) will not be included.",
            ],
            defaultExpanded: false,
          },
          {
            title: "Womens Premier Leauge(WPL)",
            content: [
              "1. If WPL fixture of 22 matches gets reduced due to any reason, then all the special fancies will be voided (Match abandoned due to rain/bad light will not be considered in this).",
              "2. Total matches 1st over runs : Average 5 runs will be given in case match abandoned or over reduced (only 1st innings valid).",
              "3. Total matches 1st 6 over runs:- Average 40 runs will be given in case match abandoned or over reduced (Only 1st Innings valid).",
              "4. Total 4's : Average 32 fours will be given in case match abandoned or over reduced.",
              "5. Total 30's: Average 2 sixes will be given in case match abandoned or over reduced.",
              "6. Total 50's - Average 1 fifties will be given in case match abandoned or over reduced.",
              "7. Total Wickets - Average will 12 Wickets be given in case match abandoned or over reduced.",
              "8. At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid.",
              "9. Highest innings run - Both innings are valid.",
              "10. Lowest innings run - Only first innings is valid.",
              "11. Highest Match 1st over runs in the match: Only first innings is valid.",
              "12. Highest 1st 6 over runs: - Only first innings is valid.",
              "13. Highest 4's in individual match: Both innings are valid.",
              "14. Highest Wickets in individual match: Both innings are valid.",
              "15. Highest over runs: Both innings are valid.",
              "16. Most Balls Faced By a Batsman : Maximum Balls Faced by a batsman in one Innings.",
              "17. Most 4's by individual batsman in an Inning : Maximum Number of Fours Hit By A Batsman in one Innings.",
              "18. Most Dot balls By a Bowler in an Inning : Maximum Dot balls Bowled by a Bowler in his Quota of Innings.",
              "19. Most runs given by Bowler in an Inning : Maximum Runs conceded by a individual Bowler in an Innings.",
              "20. Most wickets by Bowler in an inning : Maximum Wickets taken by a individual Bowler in an Innings.",
              "21. In fastest fifty always the first 50 runs will be considered, for example of S Mandhana scores 1st fifty in 17 balls and scores 100 in next 14 balls, fastest 50 will be given based on the balls for the 1st fifty runs Super over will not be included.",
            ],
            defaultExpanded: false,
          },
          {
            title: "Pakistan Premier League",
            content: [
              "1. If PSL fixture of 34 matches gets reduced due to any reason, then all the special fancies will be voided (Match abandoned due to rain/bad light will not be considered in this).",
              "2. Total Matches 1st over runs : Average 6 runs will be given in case match abandoned or over reduced (only 1st innings valid).",
              "3. Total Matches 1st 6 over runs : Average 50 runs will be given in case match abandoned or over reduced (Only 1st Innings valid).",
              "4. Total fours: Average 32 fours will be given in case match abandoned or over reduced.",
              "5. Total sixes: Average 13 sixes will be given in case match abandoned or over reduced.",
              "6. Total 30's: Average 2 Thirties will be given in case match abandoned or over reduced.",
              "7. Total Fifties - Average 2 Fifties will be given in case match abandoned or over reduced.",
              "8. Total Wickets - Average 13 Wickets will be given in case match abandoned or over reduced.",
              "9. Total Wides - Average 11 Wides will be given in case match abandoned or over reduced.",
              "10. Total Extras - Average 18 Extras will be given in case match abandoned or over reduced.",
              "11. Total Caught outs: Average 8 Caught out will be given in case match abandoned or over reduced.",
              "12. Total Bowled:- Average 2 Bowled out will be given in case match abandoned or over reduced.",
              "13. Total LBW:- Average 1 LBW will be given in case match abandoned or over reduced.",
              "14. Total Run out:- Average 1 Run out will be given in case match abandoned or over reduced At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid.",
              "15. Highest innings run - Both innings are valid.",
              "16. Lowest innings run - Only first innings is valid.",
              "17. Highest Match 1st over runs in the match: Only first innings is valid.",
              "18. Highest 1st 6 over runs: - Only first innings is valid.",
              "19. Highest 4's in individual match: Both innings are valid.",
              "20. Highest 6's in individual match: Both innings are valid.",
              "21. Highest Wickets in individual match: Both innings are valid.",
              "22. Highest Extras in individual match: Both innings are valid.",
              "23. Highest over runs: Both innings are valid.",
              "24. Most Balls Faced By a Batsman : Maximum Balls Faced by a batsman in one Innings.",
              "25. Most 4's by individual batsman in an Inning : Maximum Number of Fours Hit By A Batsman in one Innings.",
              "26. Most 6's by individual batsman in an Inning : Maximum Number of Sixes Hit By A Batsman in one Innings.",
              "27. Most Dot balls By a Bowler in an Inning : Maximum Dot balls Bowled by a Bowler in his Quota of Innings.",
              "28. Most runs given by Bowler in an Inning : Maximum Runs conceded by a individual Bowler in an Innings.",
              "29. Most wickets by Bowler in an inning : Maximum Wickets taken by a individual Bowler in an Innings.",
              "30. Total 50 Plus Partnership runs- 50 and above 50 runs partnership will be counted in this event.",
              "31. In fastest fifty always the first 50 runs will be considered, for example of R Sharma scores 1st fifty in 17 balls and scores 100 in next 14 balls, fastest 50 will be given based on the balls for the 1st fifty runs Super over will not be included.",
            ],
            defaultExpanded: false,
          },
          {
            title: "kabadi",
            content: [
              "      In any circumstances management decision will be final related to all Fancy of kabaddi of our exchange.",
              "All fancy bets will be validated when match has been tied.",
              "Result of individual player of fancy will be validated only when player play that match.",
              "In any case wrong rate has been given in fancy that particular bets will be deleted.",
              "For Playoffs Final Result Of 40 Minutes Of Two Halves Will Be Valid In Our Exchange",
            ],
            defaultExpanded: false,
          },
          {
            title: "Horse Riding",
            content: [
              "    General",
              "1. All individual race markets will be determined according to the official result at the time of the 'weigh-in' announcement (or equivalent). Subsequent disqualifications, appeals or amendments to the result will be disregarded.",
              "2. If a race is abandoned or otherwise declared void, or in the event of a walkover, all bets on that race will be void.",
              "3. If the scheduled venue is changed after the market has been loaded by us, all bets will be void. Where a race does not take part on its scheduled day, all bets will be void.",
              "4. If a scheduled surface type is changed (e.g., turf to dirt) all bets will stand.",
              "Non-Runner Rule",
              "5. Our's non-runner rule relates to the adjustment of odds-on bets already matched when a horse in a race is declared a non-runner. To adjust We apply a reduction factor to the remaining runners. The reduction factor allocated to a non-runner is a calculation (the details of which are described below) of that horse's chances of winning (or being placed, etc as appropriate) and is applied to bets already matched on the other runners in the relevant market or markets. Any horse listed when the relevant market is loaded which does not subsequently come under the starter's orders is deemed to be a non-runner.",
              "6. When the market is loaded each horse is given a 'reduction factor, based on a forecast price, which is expressed as a percentage. These reduction factors may be updated periodically at the discretion of the Us based on trading in the market, but after approximately 15 minutes (approximately 5 minutes for Australian and US markets) from the scheduled 'off' time of a given race, they will be updated only in exceptional circumstances. The current reduction factor percentage for each horse can be viewed on the 'info' page on Our website or by asking the Helpdesk.",
              "7. Accurate reduction factors will only be applied to selections in the event of a non-runner. Once a non-runner is declared each selection in the market will be given an appropriate reduction factor. Reduction factors can be amended at Ourâ€™s discretion at any time throughout the market life cycle (including post-race).",
              "8. For Australian racing, reduction factors may be updated periodically at the discretion of the Us based on trading in the market, but after approximately five minutes from the scheduled off time of a given race, they will be updated only in exceptional circumstances.",
              "9. Reductions will be made to both win and place markets but applied differently (as described below), and horses will have a different reduction factor for each market.",
              "10. As soon as We become aware that a horse is an official non-runner or a highly likely non-runner, following a statement to the press from connections, the following will happen: All matched bets on that horse will be void and the horse will be removed from the market. In the win market: if the reduction factor of the non-runner is 2.5% or greater, the traded price of all the matched bets on the remaining horses will be reduced by an amount equal to the non-runner final reduction factor and all the unmatched offers to lay will be cancelled. If the non-runners reduction factor is less than 2.5%, reductions will not be applied and unmatched bets will not be cancelled.",
              "11. In the place market, the reduction factor of all non-runners will be applied (even if less than 2.5%) and the potential winnings aboutmatched bets on the remaining horses will be reduced by an amount equal to the non-runners final reduction factor. Only if the non-runners reduction factor is 4.0% or greater will all the unmatched offers to lay be cancelled.",
              "12. All the reduction factors on the remaining horses will be adjusted to reflect their improved chance of winning.",
              "13. Reduction factors are not applied to bets which are struck in play. However, if a market is turned in-play prematurely by error (or, for example, there is a false start), all bets matched during this time will be subject to any later reduction factor, provided the market is turned out of play before the race commences. In the event of a late withdrawal, wereserve the right to remove the runner after the completion of the race. In this case, only those bets matched before the off will be affected by a reduction factor.",
              "14. In the event of a non-runner being removed from a race in error or following incorrect information regarding a runnerâ€™s participation, we will reinstate both the runner and all previously matched bets associated with that runner. All bets made between the time of withdrawal and reinstatement will be void in both the place market and the win market. The reduction factor applied to matched bets at the time of withdrawal will be reversed and the original prices will become valid.",
              "15. Any non-runners will be removed from the relevant markets in the order in which they are brought to our attention. If We become aware of more than one non-runner at the same time, it will remove the non-runners from the relevant markets in race card order.",
              "16. If a runner is not included in a market because of an error or because of incorrect information regarding a runnerâ€™s participation, we reserve the right to introduce the missing runner into the market at any time before settlement (even after the race has been run), provided that We are determined that the missing runner is not a material runner (i.e., a selection with a reduction factor of approx. 2.5% or less in the win market). In such circumstances, all pre-play unmatched and matched bets will stand, however, if the runner is not introduced before the start of the race, all in-play bets will be void. However, if the missing runner is deemed to be a material runner, then the malformed market will be void and a new market will be loaded where possible.",
              "17. How the Reductions are applied to Exchange markets In the win market, reductions will be made on the traded price. For example: if the non-runners final reduction factor is 25% the traded price on all previously matched bets on other horses will be reduced by 25% - the traded price of 8.0 would become 6.0 etc. And these might be further reduced if another horse is subsequently declared a non-runner.",
              "18. In the EW Market, reductions will be made on the traded win price. The advertised place terms will then apply to the revised win prices. For example: if the non-runners final reduction factor is 25% the traded price on all previously matched bets on other horses will be reduced by 25% - - the traded price of 8.0 would become 6.0. If each Way terms were 1/5th odds for 3 places, the corresponding price for the Place portion of the bet would reduce from 2.4 to 2.0. In the place market, reductions will be made to the potential winnings on the bet only, and not the traded price. For example: if the non-runners final reduction factor is 25% the potential winnings on all previously matched bets on the other horses will be reduced by 25% - a traded price of 8.0 would become 6.25. For example, a Â£10 bet on a horse to be placed at a traded price of 8.0 would provide winnings of Â£70. If there is a non-runner with a reduction factor of 25% in the race, that factor will be applied to the Â£70 of potential winnings leaving potential winnings of Â£52.50. Therefore, the revised traded price will be 6.25.",
              "19. The traded price may be further reduced if any other horse(s) is subsequently declared a non-runner, however, odds cannot be reduced below 1.01.",
              "20. Reserves: A reserve runner may appear in the relevant markets but will have a non-applicable reduction factor until we are received confirmation that it is a confirmed runner, in which case an applicable reduction factor may apply to it.",
              "21. For the avoidance of doubt, any reduction factor applicable to a non-runner replaced by a reserve will be applied to all bets struck on the relevant markets, before the removal from those markets of such non-runner by Us. Likewise, should a reserve runner become a confirmed runner but subsequently become a non-runner, any reduction factor applicable to such non-runner will be applied to all bets struck on the relevant markets, before the removal from those markets of such non-runner by Us.",
              "22. Additional rules Card numbers are posted as a guide only: bets are placed on a named horse. Horses will not be coupled. Where any horse(s) runs for purse money only it is deemed a non-runner for betting purposes. Should this result in the number of possible winners stated in the relevant Market Information being equal to or greater than the number of runners in the relevant Betfair market, all bets in the market will be void.",
            ],
            defaultExpanded: false,
          },
        ];
        const RulesModal = () => {
          _s();
          const [open, setOpen] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            {
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                  "button",
                  {
                    className: "new-rules-button",
                    onClick: () => setOpen(true),
                    children: "RULES",
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 753,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                  _Modal__WEBPACK_IMPORTED_MODULE_1__["default"],
                  {
                    open: open,
                    onClose: () => setOpen(false),
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      "div",
                      {
                        className: "new-rules-modal",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "h6",
                            {
                              className: "new-rules-title",
                              children: "Rules",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 759,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            _ReusableAccordian__WEBPACK_IMPORTED_MODULE_2__[
                              "default"
                            ],
                            {
                              items: itemArray,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 760,
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
                        lineNumber: 758,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 757,
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
        _s(RulesModal, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
        _c = RulesModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          RulesModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "RulesModal");

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

    /***/ "./src/pages/_layout/elements/footer.tsx":
      /*!***********************************************!*\
  !*** ./src/pages/_layout/elements/footer.tsx ***!
  \***********************************************/
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/footer.tsx";

        const Footer = () => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
            "div",
            {
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "section",
                  {
                    className: "footer",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                      "div",
                      {
                        className: "footer-top",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                            "div",
                            {
                              className: "footer-links",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                "nav",
                                {
                                  className: "navbar navbar-expand-sm",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                    "ul",
                                    {
                                      className: "navbar-nav",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                          "li",
                                          {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                              "a",
                                              {
                                                className: "nav-link",
                                                href: "/terms-and-conditions",
                                                children:
                                                  " Terms and Conditions ",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 4,
                                                columnNumber: 186,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 4,
                                            columnNumber: 161,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                          "li",
                                          {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                              "a",
                                              {
                                                className: "nav-link",
                                                href: "/responsible-gaming",
                                                children:
                                                  " Responsible Gaming ",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 4,
                                                columnNumber: 296,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 4,
                                            columnNumber: 271,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 4,
                                      columnNumber: 134,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 4,
                                  columnNumber: 93,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 4,
                              columnNumber: 63,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                            "div",
                            {
                              className: "support-detail",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                  "h2",
                                  {
                                    children: "24X7 Support",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 4,
                                    columnNumber: 426,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                  "p",
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 4,
                                    columnNumber: 447,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 4,
                              columnNumber: 394,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                            "div",
                            {
                              className: "social-icons-box",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 4,
                              columnNumber: 460,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 4,
                        columnNumber: 35,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 4,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: "footer-bottom",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                        "div",
                        {
                          className: "secure-logo",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "div",
                              {
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                  "img",
                                  {
                                    src: "/assets/images/footer/ssl.png",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 5,
                                    columnNumber: 72,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 5,
                                columnNumber: 67,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "div",
                              {
                                className: "ml-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                    "b",
                                    {
                                      children: "100% SAFE",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 5,
                                      columnNumber: 175,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                    "div",
                                    {
                                      children:
                                        "Protected connection and encrypted data.",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 5,
                                      columnNumber: 191,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 5,
                                columnNumber: 153,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 5,
                          columnNumber: 38,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                        "div",
                        {
                          className: "d-inline-block",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "button",
                              {
                                className: "btn p-0",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                  "img",
                                  {
                                    src: "/assets/images/footer/18plus.png",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 5,
                                    columnNumber: 314,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 5,
                                columnNumber: 286,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "a",
                              {
                                href: "/responsible-gaming.html",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                  "img",
                                  {
                                    src: "/assets/images/footer/gamecare.png",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 5,
                                    columnNumber: 447,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 5,
                                columnNumber: 408,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "a",
                              {
                                href: "/responsible-gaming.html",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                  "img",
                                  {
                                    src: "/assets/images/footer/gt.png",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 5,
                                    columnNumber: 582,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 5,
                                columnNumber: 538,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 5,
                          columnNumber: 254,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 5,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: "footer-text",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                        "p",
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 6,
                          columnNumber: 36,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                        "p",
                        {
                          className: "text-center",
                          children:
                            "\xA9 Copyright 2025. All Rights Reserved. Powered by ambaniexchange.",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 6,
                          columnNumber: 43,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 6,
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
              lineNumber: 3,
              columnNumber: 5,
            },
            undefined
          );
        };
        _c = Footer;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Footer;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Footer");

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

    /***/ "./src/pages/_layout/elements/header.tsx":
      /*!***********************************************!*\
  !*** ./src/pages/_layout/elements/header.tsx ***!
  \***********************************************/
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
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _nav_menu__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./nav-menu */ "./src/pages/_layout/elements/nav-menu.tsx"
          );
        /* harmony import */ var _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../redux/actions/balance/balanceSlice */ "./src/redux/actions/balance/balanceSlice.ts"
          );
        /* harmony import */ var _custom_link__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
        /* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../utils/constants */ "./src/utils/constants.ts"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../services/match.service */ "./src/services/match.service.ts"
          );
        /* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./Navbar/Navbar */ "./src/pages/_layout/elements/Navbar/Navbar.jsx"
          );
        /* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js"
          );
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/header.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // import React, { ChangeEvent, MouseEvent, useRef } from 'react'
        // import User from '../../../models/User'
        // import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
        // import { logout, selectUserData } from '../../../redux/actions/login/loginSlice'
        // import NavMenu from './nav-menu'
        // import {
        //   hideBalExp,
        //   HideBalExp,
        //   selectBalance,
        //   selectHideBalExp,
        //   setExposer,
        //   setSingleBal,
        // } from '../../../redux/actions/balance/balanceSlice'
        // import { CustomLink, useNavigateCustom } from './custom-link'
        // import { isMobile } from 'react-device-detect'
        // import Marqueemessge from '../../../admin-app/pages/_layout/elements/welcome'
        // import NavMobileMenu from './nav-mobile-menu'
        // import axios, { AxiosResponse } from 'axios'
        // import { CONSTANTS } from '../../../utils/constants'
        // import userService from '../../../services/user.service'
        // import ReactModal from 'react-modal'
        // import { useWebsocketUser } from '../../../context/webSocketUser'
        // import AutocompleteComponent from '../../../components/AutocompleteComponent'
        // import matchService from '../../../services/match.service'
        // import IMatch from '../../../models/IMatch'
        // import casinoSlugs from '../../../utils/casino-slugs.json'

        // const Header = () => {
        //   const ref = useRef<any>(null)
        //   const userState = useAppSelector<{ user: User }>(selectUserData)
        //   const balance = useAppSelector(selectBalance)
        //   const selectHideBal = useAppSelector<HideBalExp>(selectHideBalExp)
        //   const dispatch = useAppDispatch()

        //   const navigate = useNavigateCustom()

        //   const { socketUser } = useWebsocketUser()

        //   const [showMenu, setShowMenu] = React.useState<boolean>(false)
        //   const [showAuto, setShowAuto] = React.useState<boolean>(false)

        //   const [userMessage, setUserMessage] = React.useState<string>('')

        //   const [hideExpBal, setHideExpBal] = React.useState<HideBalExp>({} as HideBalExp)

        //   const [isOpen, setIsOpen] = React.useState<any>(false)
        //   const [getExposerEvent, setGetExposerEvent] = React.useState<any>([])

        //   React.useEffect(() => {
        //     // âœ… FIX: Use proper API base URL for message endpoint
        //     const apiBaseUrl = process.env.REACT_APP_API_BASEURL || 'http://139.84.174.126:3010'
        //     axios.get(`${apiBaseUrl}userMessage.json?v=${Date.now()}`).then((res: AxiosResponse) => {
        //       setUserMessage(res.data.message)
        //     }).catch(error => {
        //       console.log('User message not available:', error)
        //       setUserMessage('')
        //     })
        //   }, [])

        //   // Rules modal removed from header

        //   React.useEffect(() => {
        //     const handlerExposer = ({ exposer, balance }: any) => {
        //       if (balance !== undefined) dispatch(setSingleBal(balance))
        //       if (exposer !== undefined) dispatch(setExposer(exposer))
        //     }
        //     socketUser.on('updateExposer', handlerExposer)

        //     return () => {
        //       socketUser.removeListener('updateExposer', handlerExposer)
        //     }
        //   }, [balance])

        //   React.useEffect(() => {
        //     setHideExpBal(selectHideBal)
        //   }, [selectHideBal])

        //   const logoutUser = (e: any) => {
        //     e.preventDefault()
        //     dispatch(logout())
        //     navigate.go('/login')
        //   }

        //   const onChangeBalExp = (e: ChangeEvent<HTMLInputElement>) => {
        //     const expBal = { ...hideExpBal, [e.target.name]: e.target.checked }
        //     dispatch(hideBalExp(expBal))
        //     localStorage.setItem(CONSTANTS.HIDE_BAL_EXP, JSON.stringify(expBal))
        //     setHideExpBal(expBal)
        //   }

        //   const getExposer = (e: MouseEvent<HTMLAnchorElement>) => {
        //     e.preventDefault()
        //     setIsOpen(true)
        //     userService.getExposerEvent().then((res: AxiosResponse) => {
        //       setGetExposerEvent(res.data.data)
        //     })
        //   }

        //   React.useEffect(() => {
        //     /**
        //      * Alert if clicked on outside of element
        //      */
        //     const handleClickOutside = (event: any) => {
        //       if (showMenu && ref.current && !ref.current.contains(event.target)) {
        //         closeMenu()
        //       }
        //     }
        //     // Bind the event listener
        //     document.addEventListener('mousedown', handleClickOutside)
        //     return () => {
        //       // Unbind the event listener on clean up
        //       document.removeEventListener('mousedown', handleClickOutside)
        //     }
        //   }, [ref, showMenu])

        //   const closeMenu = () => {
        //     setShowMenu(false)
        //   }
        //   const suggestion = ({ value }: any) => {
        //     return matchService.getMatchListSuggestion({ name: value })
        //   }

        //   const onMatchClick = (match: IMatch | null) => {
        //     if (match) {
        //       window.location.href = `/odds/${match.matchId}`
        //     }
        //   }

        //   return (
        //     <header className='header'>
        //       <div className='container-fluid'>
        //         <div className='row'>
        //           <div className='header-top col-md-12'>
        //             <div className='flex05'>
        //               {isMobile ? (
        //                 <CustomLink to='/match/4/in-play'>
        //                   <i className='fas fa-home' />
        //                 </CustomLink>
        //               ) : (
        //                 ''
        //               )}
        //               <CustomLink
        //                 to='/match/4/in-play'
        //                 className='logo router-link-exact-active router-link-active'
        //               >
        //                 <img src='/imgs/logo.png' className='logo-icon' />
        //               </CustomLink>
        //             </div>

        //             <ul className='flex05 justify-content-end d-flex profile-right-side'>
        //               {!isMobile ? (
        //                 <>
        //                   <li className='search float-left row'>
        //                     <AutocompleteComponent<IMatch>
        //                       className={`search-input-show ${showAuto ? 'show' : ''}`}
        //                       label={'Search'}
        //                       optionKey={'name'}
        //                       api={suggestion}
        //                       onClick={onMatchClick}
        //                     />

        //                     <a
        //                       href='#'
        //                       onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        //                         e.preventDefault()
        //                         setShowAuto(!showAuto)
        //                       }}
        //                       className={`search-input`}
        //                     >
        //                       <i className='fas fa-search-plus' />
        //                     </a>
        //                   </li>
        //                   {/* Rules link removed from header */}
        //                 </>
        //               ) : (
        //                 ''
        //               )}
        //               <li className='ballance float-left'>
        //                 {!isMobile && !selectHideBal.balance ? (
        //                   <div className='mby-5'>
        //                     {!isMobile ? (
        //                       <span>Balance: </span>
        //                     ) : (
        //                       <span>
        //                         <i
        //                           className={isMobile ? 'tx-14 fa fa-university' : 'fa fa-university'}
        //                           aria-hidden='true'
        //                         ></i>
        //                       </span>
        //                     )}
        //                     <b>
        //                       <span className={isMobile ? 'tx-14' : ''}>{balance.balance?.toFixed(2)}</span>
        //                     </b>
        //                   </div>
        //                 ) : (
        //                   ''
        //                 )}
        //                 {!selectHideBal.exposer ? (
        //                   <div className='mty-5'>
        //                     <a href='#' onClick={getExposer}>
        //                       {!isMobile ? (
        //                         <span className=''>Exp : </span>
        //                       ) : (
        //                         <span className='tx-14 mrc-2'>Exp : </span>
        //                       )}

        //                       <b>
        //                         <span className={isMobile ? 'tx-14 ' : ''}>
        //                           {balance.exposer > 0 ? balance.exposer?.toFixed(2) : 0}
        //                         </span>
        //                       </b>
        //                     </a>
        //                   </div>
        //                 ) : (
        //                   ''
        //                 )}
        //               </li>
        //               <li className='account float-left'>
        //                 {isMobile && !selectHideBal.balance ? (
        //                   <div>
        //                     <span>
        //                       <i className='tx-13 mrc-2 fa fa-university' aria-hidden='true'></i>
        //                     </span>
        //                     <span className='tx-13'>{balance.balance?.toFixed(2)}</span>
        //                   </div>
        //                 ) : (
        //                   ''
        //                 )}
        //                 <span
        //                   className={isMobile ? 'profile-section tx-14' : ''}
        //                   onClick={() => setShowMenu(!showMenu)}
        //                 >
        //                   {userState?.user?.username}
        //                   <i className='fas fa-chevron-down' />
        //                 </span>
        //                 <ul ref={ref} style={{ display: showMenu ? 'block' : 'none' }} className=''>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/' className=''>
        //                       Home
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/accountstatement' className=''>
        //                       Account Statement
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/depositstatement' className=''>
        //                       Deposit Statement
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/withdrawstatement' className=''>
        //                       Withdraw Statement
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/profitloss' className=''>
        //                       Profit Loss Report
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/bethistory' className=''>
        //                       Bet History
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/unsettledbet' className=''>
        //                       Unsettled Bet
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/casino/result' className=''>
        //                       Casino Report History
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/button-values' className=''>
        //                       Set Button Values
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/settings/security-auth' className=''>
        //                       Security Auth Verification
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/changepassword' className=''>
        //                       Change Password
        //                     </CustomLink>
        //                   </li>
        //                   <li>
        //                     <label className='mb-0'>
        //                       <input
        //                         type={'checkbox'}
        //                         name={'balance'}
        //                         checked={hideExpBal.balance || false}
        //                         onChange={onChangeBalExp}
        //                         className='mrc-5'
        //                       />{' '}
        //                       Balance
        //                     </label>
        //                   </li>
        //                   <li>
        //                     <label className='mb-0'>
        //                       <input
        //                         type={'checkbox'}
        //                         name={'exposer'}
        //                         checked={hideExpBal.exposer || false}
        //                         onChange={onChangeBalExp}
        //                         className='mrc-5'
        //                       />{' '}
        //                       Exposer
        //                     </label>
        //                   </li>
        //                   <li>
        //                     <CustomLink onClick={() => closeMenu()} to='/rules' className=''>
        //                       Rules
        //                     </CustomLink>
        //                   </li>

        //                   <li className='border-top'>
        //                     <a
        //                       onClick={logoutUser}
        //                       href={'#'}
        //                       style={{ fontWeight: 'bold', color: 'red', textTransform: 'uppercase' }}
        //                     >
        //                       signout
        //                     </a>
        //                   </li>
        //                 </ul>
        //               </li>
        //             </ul>
        //           </div>
        //           {isMobile ? <Marqueemessge message={userMessage} /> : ""}
        //           {!isMobile ? <NavMenu /> : <NavMobileMenu />}
        //         </div>
        //       </div>
        //       <div />
        //       <div className='modal-market' />

        //       <ReactModal
        //         isOpen={isOpen}
        //         onRequestClose={(e: any) => {
        //           console.log('ðŸš« My Market: Modal close requested')
        //           setIsOpen(false)
        //         }}
        //         shouldCloseOnOverlayClick={true}
        //         shouldCloseOnEsc={true}
        //         contentLabel='My Market'
        //         className={'modal-dialog'}
        //         ariaHideApp={false}
        //       >
        //         <div className='modal-content' style={{ border: 'none', borderRadius: '8px' }}>
        //           <div className='modal-header' style={{
        //             backgroundColor: '#6f42c1',
        //             color: 'white',
        //             padding: '15px 20px',
        //             borderBottom: 'none',
        //             borderRadius: '8px 8px 0 0',
        //             fontSize: '18px',
        //             fontWeight: '600'
        //           }}>
        //             My Market
        //             <button
        //               onClick={(e: React.MouseEvent) => {
        //                 e.preventDefault()
        //                 e.stopPropagation()
        //                 console.log('âŒ My Market: Close button clicked')
        //                 setIsOpen(false)
        //               }}
        //               className='close float-right'
        //               style={{
        //                 color: 'white',
        //                 opacity: 1,
        //                 fontSize: '24px',
        //                 background: 'none',
        //                 border: 'none',
        //                 cursor: 'pointer',
        //                 zIndex: 9999,
        //                 position: 'relative'
        //               }}
        //               type="button"
        //               aria-label="Close"
        //             >
        //               <i className='fas fa-times'></i>
        //             </button>
        //           </div>
        //           <div className='modal-body' style={{ padding: '0' }}>
        //             <table className='table table-striped table-bordered mb-0' style={{
        //               width: '100%',
        //               borderCollapse: 'collapse',
        //               fontSize: '14px'
        //             }}>
        //               <thead style={{ backgroundColor: '#f8f9fa' }}>
        //                 <tr>
        //                   <th style={{
        //                     padding: '12px 15px',
        //                     fontWeight: '600',
        //                     borderBottom: '2px solid #dee2e6',
        //                     width: '15%',
        //                     textAlign: 'left'
        //                   }}>Event Type</th>
        //                   <th style={{
        //                     padding: '12px 15px',
        //                     fontWeight: '600',
        //                     borderBottom: '2px solid #dee2e6',
        //                     width: '35%',
        //                     textAlign: 'left'
        //                   }}>Event Name</th>
        //                   <th style={{
        //                     padding: '12px 15px',
        //                     fontWeight: '600',
        //                     borderBottom: '2px solid #dee2e6',
        //                     width: '35%',
        //                     textAlign: 'left'
        //                   }}>Match Name</th>
        //                   <th style={{
        //                     padding: '12px 15px',
        //                     fontWeight: '600',
        //                     borderBottom: '2px solid #dee2e6',
        //                     width: '15%',
        //                     textAlign: 'center'
        //                   }}>Trade</th>
        //                 </tr>
        //               </thead>
        //               <tbody>
        //                 {getExposerEvent.length === 0 ? (
        //                   <tr>
        //                     <td colSpan={4} style={{
        //                       padding: '30px 15px',
        //                       textAlign: 'center',
        //                       color: '#6c757d',
        //                       fontSize: '16px'
        //                     }}>
        //                       No active markets found
        //                     </td>
        //                   </tr>
        //                 ) : getExposerEvent.map((exposer: any) => {
        //                   let casinoSlug = ''
        //                   let eventType = ''

        //                   // âœ… Set Event Type to "Sports" for all sports, "Casino" for casino games
        //                   console.log('ðŸ… My Market exposer data:', {
        //                     matchName: exposer.matchName,
        //                     sportId: exposer.sportId,
        //                     marketName: exposer.marketName
        //                   })

        //                   if (Number(exposer.sportId) === 5000) {
        //                     eventType = 'Casino'
        //                     if (exposer?.matchId && casinoSlugs) {
        //                       casinoSlug = (casinoSlugs as any)[exposer.matchId] || ''
        //                     }
        //                   } else {
        //                     // For all sports (Cricket, Football, Tennis, etc.), just show "Sports"
        //                     eventType = 'Sports'
        //                   }

        //                   // âœ… Extract market name from bet data (as requested)
        //                   const getMarketName = (exposer: any) => {
        //                     // Use the actual market name from the bet data
        //                     return exposer.marketName || exposer.selectionName || 'Unknown Market'
        //                   }

        //                   return (
        //                     <tr key={`${exposer.matchName}-${exposer._id}`} style={{
        //                       borderBottom: '1px solid #dee2e6'
        //                     }}>
        //                       <td style={{
        //                         padding: '12px 15px',
        //                         borderRight: '1px solid #dee2e6',
        //                         fontWeight: '500',
        //                         color: '#495057'
        //                       }}>{eventType}</td>
        //                       <td style={{
        //                         padding: '12px 15px',
        //                         borderRight: '1px solid #dee2e6'
        //                       }}>
        //                         <CustomLink
        //                           to={
        //                             exposer.sportId &&
        //                             Number.isInteger(+exposer.sportId) &&
        //                             exposer.sportId != 5000
        //                               ? `/odds/${exposer._id}`
        //                               : `/casino/${casinoSlug}/${exposer._id}`
        //                           }
        //                           onClick={(e: React.MouseEvent) => {
        //                             // Ensure modal closes properly before navigation
        //                             console.log('ðŸ”— My Market: Link clicked, closing modal')
        //                             setIsOpen(false)

        //                             // Small delay to ensure state is updated before navigation
        //                             e.preventDefault()
        //                             setTimeout(() => {
        //                               const targetUrl = exposer.sportId &&
        //                                 Number.isInteger(+exposer.sportId) &&
        //                                 exposer.sportId != 5000
        //                                   ? `/odds/${exposer._id}`
        //                                   : `/casino/${casinoSlug}/${exposer._id}`

        //                               // Use window.location for guaranteed navigation
        //                               window.location.href = targetUrl
        //                             }, 100)
        //                           }}
        //                           style={{
        //                             color: '#007bff',
        //                             textDecoration: 'none',
        //                             fontWeight: '500',
        //                             cursor: 'pointer'
        //                           }}
        //                         >
        //                           {exposer.matchName}
        //                         </CustomLink>
        //                       </td>
        //                       <td style={{
        //                         padding: '12px 15px',
        //                         borderRight: '1px solid #dee2e6',
        //                         fontWeight: '500',
        //                         color: '#495057'
        //                       }}>{getMarketName(exposer)}</td>
        //                       <td style={{
        //                         padding: '12px 15px',
        //                         textAlign: 'center',
        //                         fontWeight: '600',
        //                         color: '#28a745'
        //                       }}>
        //                         {exposer.totalBets || exposer.myCount}
        //                       </td>
        //                     </tr>
        //                   )
        //                 })}
        //               </tbody>
        //             </table>
        //           </div>
        //         </div>
        //       </ReactModal>

        //     </header>
        //   )
        // }

        // export default Header

        const Header = () => {
          _s();
          const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_2__.selectUserData
          );
          const balance = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_4__.selectBalance
          );
          const selectHideBal = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_4__.selectHideBalExp
          );
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
          const navigate = (0,
          _custom_link__WEBPACK_IMPORTED_MODULE_5__.useNavigateCustom)();
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_8__.useWebsocketUser)();
          const [showMenu, setShowMenu] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [showAuto, setShowAuto] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
          const [userMessage, setUserMessage] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
          const [hideExpBal, setHideExpBal] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [isOpen, setIsOpen] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [getExposerEvent, setGetExposerEvent] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            // âœ… FIX: Use proper API base URL for message endpoint
            const apiBaseUrl = "/api/" || 0;
            axios__WEBPACK_IMPORTED_MODULE_12__["default"]
              .get(`${apiBaseUrl}userMessage.json?v=${Date.now()}`)
              .then((res) => {
                setUserMessage(res.data.message);
              })
              .catch((error) => {
                console.log("User message not available:", error);
                setUserMessage("");
              });
          }, []);

          // Rules modal removed from header

          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const handlerExposer = ({ exposer, balance }) => {
              if (balance !== undefined)
                dispatch(
                  (0,
                  _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_4__.setSingleBal)(
                    balance
                  )
                );
              if (exposer !== undefined)
                dispatch(
                  (0,
                  _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_4__.setExposer)(
                    exposer
                  )
                );
            };
            socketUser.on("updateExposer", handlerExposer);
            return () => {
              socketUser.off("updateExposer", handlerExposer);
            };
          }, [balance]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            setHideExpBal(selectHideBal);
          }, [selectHideBal]);
          const logoutUser = (e) => {
            e.preventDefault();
            dispatch(
              (0,
              _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_2__.logout)()
            );
            navigate.go("/login");
          };
          const onChangeBalExp = (e) => {
            const expBal = {
              ...hideExpBal,
              [e.target.name]: e.target.checked,
            };
            dispatch(
              (0,
              _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_4__.hideBalExp)(
                expBal
              )
            );
            localStorage.setItem(
              _utils_constants__WEBPACK_IMPORTED_MODULE_6__.CONSTANTS
                .HIDE_BAL_EXP,
              JSON.stringify(expBal)
            );
            setHideExpBal(expBal);
          };
          const getExposer = (e) => {
            e.preventDefault();
            setIsOpen(true);
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["default"]
              .getExposerEvent()
              .then((res) => {
                setGetExposerEvent(res.data.data);
              });
          };
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            const handleClickOutside = (event) => {
              if (
                showMenu &&
                ref.current &&
                !ref.current.contains(event.target)
              ) {
                closeMenu();
              }
            };
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              // Unbind the event listener on clean up
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, [ref, showMenu]);
          const closeMenu = () => {
            setShowMenu(false);
          };
          const suggestion = ({ value }) => {
            return _services_match_service__WEBPACK_IMPORTED_MODULE_9__[
              "default"
            ].getMatchListSuggestion({
              name: value,
            });
          };
          const onMatchClick = (match) => {
            if (match) {
              window.location.href = `/odds/${match.matchId}`;
            }
          };
          const walletItems = [
            {
              label: "Wallet Amount",
              value: "0.00",
              className: "bg-danger",
            },
            {
              label: "Bonus",
              value: "5.00",
              className: "bg-success",
            },
            {
              label: "Total",
              value: "5.00",
            },
          ];
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,
            {
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                  _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"],
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 883,
                    columnNumber: 8,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                  _nav_menu__WEBPACK_IMPORTED_MODULE_3__["default"],
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 884,
                    columnNumber: 8,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                  "div",
                  {
                    className: "d-flex justify-content-between w-100 d-md-none",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                        _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__[
                          "default"
                        ],
                        {
                          variant: "contained",
                          onClick: () => navigate.go("/deposit"),
                          sx: {
                            display: {
                              xs: "flex",
                              md: "none",
                            },
                            flex: 1,
                            // Take equal width
                            alignItems: "center",
                            // gap: "0.5rem",
                            background: "darkgreen",
                            color: "#fff",
                            // borderBottom: "4px solid #8b0000",
                            // padding: "0.25rem 1rem",
                            borderRadius: "0px",
                            textTransform: "none",
                            // "&:hover": {
                            //   backgroundColor: "#5a0000",
                            //   borderBottom: "4px solid darkgreen",
                            // },
                          },
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                              "img",
                              {
                                src: "/icon/deposit-icon.png",
                                alt: "Deposit Icon",
                                className: "btn-logged-header-img",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 909,
                                columnNumber: 7,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                              "span",
                              {
                                children: "Deposit",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 914,
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
                          lineNumber: 888,
                          columnNumber: 5,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                        _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__[
                          "default"
                        ],
                        {
                          variant: "contained",
                          onClick: () => navigate.go("/withdraw"),
                          sx: {
                            display: {
                              xs: "flex",
                              md: "none",
                            },
                            flex: 1,
                            // Take equal width
                            alignItems: "center",
                            // gap: "0.5rem",
                            background: "#8b0000",
                            color: "#fff",
                            // borderBottom: "4px solid darkgreen",
                            // padding: "0.25rem 1rem",
                            borderRadius: "0px",
                            textTransform: "none",
                            // "&:hover": {
                            //   backgroundColor: "#5a0000",
                            //   borderBottom: "4px solid #8b0000",
                            // },
                          },
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                              "img",
                              {
                                src: "/icon/withdrawal-icon.png",
                                alt: "Withdrawal Icon",
                                className: "btn-logged-header-img",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 938,
                                columnNumber: 7,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                              "span",
                              {
                                children: "Withdrawal",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 943,
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
                          lineNumber: 918,
                          columnNumber: 5,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 885,
                    columnNumber: 1,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true
          );
        };
        _s(Header, "tcyLdObFKHA1eDdqD5VmzZ0eKjM=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,
            _custom_link__WEBPACK_IMPORTED_MODULE_5__.useNavigateCustom,
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_8__.useWebsocketUser,
          ];
        });
        _c = Header;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Header;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Header");

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

    /***/ "./src/pages/_layout/elements/nav-menu.tsx":
      /*!*************************************************!*\
  !*** ./src/pages/_layout/elements/nav-menu.tsx ***!
  \*************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _custom_link__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/nav-menu.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // import { useParams } from 'react-router-dom'
        // import ISport from '../../../models/ISport'
        // import { useAppSelector } from '../../../redux/hooks'
        // import { selectFilteredSportList } from '../../../redux/actions/sports/sportSlice'
        // import { CustomLink } from './custom-link'

        // const NavMenu = () => {
        //   const sportListState = useAppSelector<{ sports: ISport[] }>(selectFilteredSportList)
        //   const { sportId } = useParams()
        //   return (
        //     <div className='header-bottom m-t-10 col-md-12'>
        //       <nav className='navbar navbar-expand-md btco-hover-menu'>
        //         <button
        //           type='button'
        //           data-toggle='collapse'
        //           data-target='#navbarNavDropdown'
        //           aria-controls='navbarNavDropdown'
        //           aria-expanded='false'
        //           aria-label='Toggle navigation'
        //           className='navbar-toggler'
        //         >
        //           <span className='navbar-toggler-icon' />
        //         </button>
        //         <div className='collapse navbar-collapse'>
        //           <ul className='list-unstyled navbar-nav'>
        //             <li className='nav-item active'>
        //               <CustomLink to={'/match/4'} className='router-link-exact-active router-link-active'>
        //                 <b>Home</b>
        //               </CustomLink>
        //             </li>
        //             {/* <li className='nav-item active'>
        //               <CustomLink to={'/match/all/in-play'} className='router-link-exact-active router-link-active'>
        //                 <b>In-Play</b>
        //               </CustomLink>
        //             </li> */}
        //             {/* <li className='nav-item'>
        //               <CustomLink to={'/match/all'} className='router-link-exact-active router-link-active'>
        //                 <b>All</b>
        //               </CustomLink>
        //             </li> */}

        //             {sportListState.sports.map((sport: ISport) => (
        //               <li key={sport._id} className='nav-item'>
        //                 <CustomLink
        //                   to={`/match/${sport.sportId}`}
        //                   className={`nav-link ${sportId == sport.sportId ? 'router-link-active' : ''}`}
        //                 >
        //                   {sport.name}
        //                 </CustomLink>
        //               </li>
        //             ))}
        //           </ul>
        //         </div>
        //       </nav>
        //     </div>
        //   )
        // }
        // export default NavMenu

        const NavMenu = () => {
          _s();
          const [currentSport, setCurrentSport] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("CRICKET");
          // const sportListState = useAppSelector<{ sports: ISport[] }>(
          //   selectFilteredSportList
          // );
          const sportListState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_2__.selectSportList
          );
          console.log(
            "sportList",
            sportListState.sports.map((sport) => sport.name)
          );
          const { sportId } = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
          const location = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            "nav",
            {
              className: "main-nav",
              children: sportListState.sports.map((sport) =>
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                  _custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                  {
                    to:
                      sport.sportId == 555
                        ? "/casino-int/slots"
                        : `/match/${sport.sportId}`,
                    className: `nav-tab ${
                      sport.sportId == 555
                        ? location.pathname.startsWith("/casino-int")
                          ? "active"
                          : ""
                        : sport.sportId == sportId
                        ? "active"
                        : ""
                    }`,
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      "div",
                      {
                        className: `nav-tab  ${
                          sport.name === currentSport ? "active" : ""
                        }`,
                        // onClick={() => handleSportClick(sport.name)}
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "span",
                            {
                              className: "nav-icon",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "img",
                                {
                                  src: `/icon/${sport.name.toLowerCase()}.png`,
                                  alt: `${sport.name} icon`,
                                  className: "nav-icon-img",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 97,
                                  columnNumber: 15,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 96,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "span",
                            {
                              className: "nav-text",
                              children: sport.name,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 103,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        ],
                      },
                      sport._id,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  sport._id,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 16,
                  },
                  undefined
                )
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 5,
            },
            undefined
          );

          // <div className='header-bottom m-t-10 col-md-12'>
          //   <nav className='navbar navbar-expand-md btco-hover-menu'>
          //     <button
          //       type='button'
          //       data-toggle='collapse'
          //       data-target='#navbarNavDropdown'
          //       aria-controls='navbarNavDropdown'
          //       aria-expanded='false'
          //       aria-label='Toggle navigation'
          //       className='navbar-toggler'
          //     >
          //       <span className='navbar-toggler-icon' />
          //     </button>
          //     <div className='collapse navbar-collapse'>
          //       <ul className='list-unstyled navbar-nav'>
          //         <li className='nav-item active'>
          //           <CustomLink to={'/match/4'} className='router-link-exact-active router-link-active'>
          //             <b>Home</b>
          //           </CustomLink>
          //         </li>
          //         {/* <li className='nav-item active'>
          //           <CustomLink to={'/match/all/in-play'} className='router-link-exact-active router-link-active'>
          //             <b>In-Play</b>
          //           </CustomLink>
          //         </li> */}
          //         {/* <li className='nav-item'>
          //           <CustomLink to={'/match/all'} className='router-link-exact-active router-link-active'>
          //             <b>All</b>
          //           </CustomLink>
          //         </li> */}

          //         {sportListState.sports.map((sport: ISport) => (
          //           <li key={sport._id} className='nav-item'>
          //             <CustomLink
          //               to={`/match/${sport.sportId}`}
          //               className={`nav-link ${sportId == sport.sportId ? 'router-link-active' : ''}`}
          //             >
          //               {sport.name}
          //             </CustomLink>
          //           </li>
          //         ))}
          //       </ul>
          //     </div>
          //   </nav>
          // </div>
        };
        _s(NavMenu, "ZbpIIXSh7Mt1P56FlxTRhhivpKI=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams,
            react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation,
          ];
        });
        _c = NavMenu;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = NavMenu;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "NavMenu");

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

    /***/ "./src/pages/_layout/elements/sidebar.tsx":
      /*!************************************************!*\
  !*** ./src/pages/_layout/elements/sidebar.tsx ***!
  \************************************************/
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
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _admin_app_pages_layout_elements_NavHelper__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../admin-app/pages/_layout/elements/NavHelper */ "./src/admin-app/pages/_layout/elements/NavHelper.ts"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/sidebar.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // import { useParams } from 'react-router-dom'
        // import ICasinoMatch from '../../../models/ICasinoMatch'
        // import ISport from '../../../models/ISport'
        // import { selectCasinoMatchList } from '../../../redux/actions/casino/casinoSlice'
        // import { selectSportList } from '../../../redux/actions/sports/sportSlice'
        // import { useAppSelector } from '../../../redux/hooks'
        // import { CustomLink, useNavigateCustom } from './custom-link'
        // import { MouseEvent } from 'react'
        // import { toast } from 'react-toastify'

        // const SideBar = () => {
        //   const navigate = useNavigateCustom()
        //   const sportListState = useAppSelector<{ sports: ISport[] }>(selectSportList)
        //   const { sportId, matchId } = useParams()
        //   const gamesList = useAppSelector<any>(selectCasinoMatchList)

        //   const onCasinoClick = (e: MouseEvent<HTMLAnchorElement>, Item: ICasinoMatch) => {
        //     e.preventDefault()
        //     if (!Item.isDisable && Item.match_id!=-1 ) navigate.go(`/casino/${Item.slug}/${Item.match_id}`)
        //       else toast.warn('This game is suspended by admin, please try again later')
        //   }

        //   return (
        //     <div className='sidebar col-md-2'>
        //       <div data-toggle='collapse' data-target='.racing' className='sidebar-title'>
        //         <h5 className='d-inline-block m-b-0'>Racing</h5>
        //       </div>
        //       <nav className='collapse racing show'>
        //         <ul>
        //           {sportListState.sports.map((sport: ISport) => {
        //           if (sport.sportId != 7 && sport.sportId != 4339) return
        //           return  <li key={sport._id} className='nav-item'>
        //               <CustomLink
        //                 to={`/match/${sport.sportId}`}
        //               className={`nav-link ${parseInt(sportId || "0") == sport.sportId ? 'router-link-active' : ''}`}
        //               >
        //                 <span className='new-launch-text'>{sport.name}</span>
        //               </CustomLink>
        //             </li>
        //           }
        //           )}
        //         </ul>
        //       </nav>

        //       <div data-toggle='collapse' data-target='.casino' className='sidebar-title'>
        //         <h5 className='d-inline-block m-b-0'>Others</h5>
        //       </div>
        //       <nav className='collapse casino show'>
        //         <ul>
        //           <li className='nav-item'>
        //             <CustomLink
        //               to={`/casino-in/live-dmd`}
        //               className={`nav-link`}
        //             >
        //               <span className='new-launch-text blink_me'>Our Casino</span>
        //             </CustomLink>
        //           </li>
        //           <li className='nav-item'>
        //             <CustomLink
        //               to={`/casino-int/virtual-casino`}
        //               className={`nav-link`}
        //             >
        //               <span className='new-launch-text blink_me'>Our Virtual</span>
        //             </CustomLink>
        //           </li>
        //           <li className='nav-item'>
        //             <CustomLink
        //               to={`/casino-int/live-casino`}
        //               className={`nav-link`}
        //             >
        //               <span className='new-launch-text '>Live Casino</span>
        //             </CustomLink>
        //           </li>
        //           <li className='nav-item'>
        //             <CustomLink
        //               to={`/casino-int/slots`}
        //               className={`nav-link`}
        //             >
        //               <span className='new-launch-text'>Slot Game</span>
        //             </CustomLink>
        //           </li>
        //           <li className='nav-item'>
        //             <CustomLink
        //               to={`/casino-int/fantasy`}
        //               className={`nav-link`}
        //             >
        //               <span className='new-launch-text'>Fantasy Game</span>
        //             </CustomLink>
        //           </li>
        //         </ul>
        //       </nav>
        //       <div data-toggle='collapse' data-target='.sports' className='sidebar-title'>
        //         <h5 className='d-inline-block m-b-0'>Sports</h5>
        //       </div>
        //       <nav className='collapse sports show'>
        //         <ul>
        //           {sportListState.sports.map((sport: ISport) => (
        //             <li key={sport._id} className='nav-item'>
        //               <CustomLink
        //                 to={`/match/${sport.sportId}`}
        //                 className={`nav-link ${sportId == sport.sportId ? 'router-link-active' : ''}`}
        //               >
        //                 <i className="far fa-plus-square me-1"></i>
        //                 <span className='new-launch-text'>{sport.name}</span>
        //               </CustomLink>
        //             </li>
        //           ))}
        //         </ul>
        //       </nav>

        //     </div>
        //   )
        // }
        // export default SideBar

        const SideBar = () => {
          _s();
          const sportListState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_1__.selectSportList
          );
          const [currentSport, setCurrentSport] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [competitions, setCompetitions] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const [groupedSeries, setGroupedSeries] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const [expandedItems, setExpandedItems] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({
            sports: [],
            series: [],
          });
          const [selectedMatch, setSelectedMatch] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
          const toggleSport = (id, sportId) => {
            // Check for casino sportIds ( 555)
            if (sportId === 555) {
              navigate("/casino-int/slots");
              return;
            }
            setExpandedItems((prev) => ({
              ...prev,
              sports: prev.sports.includes(id)
                ? prev.sports.filter((p) => p !== id)
                : [...prev.sports, id],
            }));
            loadSportData(id);
          };
          const toggleSeries = (seriesName) => {
            setExpandedItems((prev) => ({
              ...prev,
              series: prev.series.includes(seriesName)
                ? prev.series.filter((s) => s !== seriesName)
                : [...prev.series, seriesName],
            }));
          };
          const loadSportData = async (id) => {
            const sport = sportListState.sports.find((s) => s._id === id);
            if (!sport) return;
            setCurrentSport(sport.name);
            try {
              // Load competitions
              const sid =
                typeof sport.sportId === "number"
                  ? sport.sportId
                  : parseInt(String(sport.sportId || 0), 10);
              const comps = await (0,
              _admin_app_pages_layout_elements_NavHelper__WEBPACK_IMPORTED_MODULE_3__.fetchCompetitions)(
                sid
              ).catch(() => []);
              setCompetitions(comps);

              // Load matches
              const { groupedSeries } = await (0,
              _admin_app_pages_layout_elements_NavHelper__WEBPACK_IMPORTED_MODULE_3__.fetchMatch)(
                sid,
                () => {}
              );
              setGroupedSeries(groupedSeries);
            } catch {
              setCompetitions([]);
              setGroupedSeries([]);
            }
          };
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            console.log("sportId in sidebar is", sportListState);
          }, []);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            "aside",
            {
              className: "sidebar",
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "div",
                {
                  className: "sidebar-menu",
                  children: sportListState.sports.map((sport) => {
                    var _sport$name;
                    return /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      "div",
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "div",
                            {
                              className: `sidebar-item ${
                                sport.name === currentSport ? "active" : ""
                              }`,
                              onClick: () =>
                                toggleSport(sport._id, sport.sportId),
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "span",
                                  {
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "img",
                                      {
                                        src: `/icon/${
                                          (_sport$name = sport.name) === null ||
                                          _sport$name === void 0
                                            ? void 0
                                            : _sport$name.toLowerCase()
                                        }.png`,
                                        alt: sport.name,
                                        className: "sidebar-img-icon ",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 210,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
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
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "span",
                                  {
                                    className: "sidebar-text",
                                    children: sport.name,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 216,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                sport.sportId !== 555 &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                    "span",
                                    {
                                      className: `sidebar-arrow ${
                                        expandedItems.sports.includes(sport._id)
                                          ? "expanded"
                                          : ""
                                      }`,
                                      children: "\uD83D\uDEC6",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 218,
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
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          expandedItems.sports.includes(sport._id) &&
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                              "div",
                              {
                                className: "sidebar-submenu",
                                children: [
                                  competitions.length > 0 &&
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "div",
                                      {
                                        className: "competitions-section",
                                        children: competitions.map((comp) =>
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            "div",
                                            {
                                              className: "sidebar-subitem",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                "span",
                                                {
                                                  className: "subitem-text",
                                                  children:
                                                    comp.competitionName,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 235,
                                                  columnNumber: 25,
                                                },
                                                undefined
                                              ),
                                            },
                                            comp.competitionId,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 234,
                                              columnNumber: 23,
                                            },
                                            undefined
                                          )
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 232,
                                        columnNumber: 19,
                                      },
                                      undefined
                                    ),
                                  groupedSeries.map((series) =>
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "div",
                                      {
                                        className: "series-group pl-4",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            "div",
                                            {
                                              className: `sidebar-item pl-3 series-header ${
                                                expandedItems.series.includes(
                                                  series.seriesName
                                                )
                                                  ? "expanded"
                                                  : ""
                                              }`,
                                              onClick: () =>
                                                toggleSeries(series.seriesName),
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                  "span",
                                                  {
                                                    className:
                                                      "sidebar-text-other",
                                                    children: series.seriesName,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 248,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                  "span",
                                                  {
                                                    className: `sidebar-arrow-expand ${
                                                      expandedItems.series.includes(
                                                        series.seriesName
                                                      )
                                                        ? "expanded"
                                                        : ""
                                                    }`,
                                                    children: "\uD83D\uDEC6",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 250,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 244,
                                              columnNumber: 21,
                                            },
                                            undefined
                                          ),
                                          expandedItems.series.includes(
                                            series.seriesName
                                          ) &&
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                              "div",
                                              {
                                                className: "matches-list",
                                                children: series.matches.map(
                                                  (match) => {
                                                    return /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: `sidebar-item pl-4 series-header `,
                                                        onClick: () => {
                                                          setSelectedMatch(
                                                            match.matchId
                                                          );
                                                          navigate(
                                                            `/odds/${match.matchId}`
                                                          );
                                                        },
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                            "span",
                                                            {
                                                              className:
                                                                "sidebar-text-other ",
                                                              children:
                                                                match.name,
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 271,
                                                              columnNumber: 31,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      match.matchId,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 263,
                                                        columnNumber: 29,
                                                      },
                                                      undefined
                                                    );
                                                  }
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 257,
                                                columnNumber: 23,
                                              },
                                              undefined
                                            ),
                                        ],
                                      },
                                      series.seriesName,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 243,
                                        columnNumber: 19,
                                      },
                                      undefined
                                    )
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 229,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                        ],
                      },
                      sport._id,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 11,
                      },
                      undefined
                    );
                  }),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(SideBar, "HbWZAk+Ztn16jzzL180tKNtzNX0=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate,
          ];
        });
        _c = SideBar;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = SideBar;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "SideBar");

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

    /***/ "./src/services/match.service.ts":
      /*!***************************************!*\
  !*** ./src/services/match.service.ts ***!
  \***************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../utils/api */ "./src/utils/api.ts");
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        class MatchService {
          getActiveMatches(sportId, type, searchByMatch, page) {
            // ENHANCED: Use new URL format /admin/active-matches/{sportId}/{type}
            let url = `admin/active-matches/${sportId}`;

            // Add type to URL path if it's not default/empty
            if (type && type !== "default" && type !== "") {
              url += `/${type}`;
            }

            // Add query parameters
            const params = new URLSearchParams();
            if (page) params.append("page", page.toString());
            if (searchByMatch) params.append("search", searchByMatch);
            if (params.toString()) {
              url += `?${params.toString()}`;
            }
            console.log(`ðŸŒ Fetching active matches: ${url}`);
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
          }
          changeStatusMatch(matchId) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `change-status-match?matchId=${matchId}`
            );
          }
          deleteMatch(matchId) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `delete-match?matchId=${matchId}`
            );
          }
          rollbackResultMarket(matchId) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `rollback-result-market?matchId=${matchId}`
            );
          }
          getMatchListSuggestion(data) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].post(
              `get-match-list-suggestion`,
              data
            );
          }
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          new MatchService();

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

    /***/ "./src/pages/_layout/elements/Navbar/goldlogo.png":
      /*!********************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/goldlogo.png ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports =
          __webpack_require__.p +
          "static/media/goldlogo.3a27053b95cccef6974c.png";

        /***/
      },

    /***/ "./src/pages/_layout/elements/Navbar/logo.png":
      /*!****************************************************!*\
  !*** ./src/pages/_layout/elements/Navbar/logo.png ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports =
          __webpack_require__.p + "static/media/logo.358e7f0c193364fb3551.png";

        /***/
      },
  },
]);
//# sourceMappingURL=src_pages__layout_Main_tsx.chunk.js.map





