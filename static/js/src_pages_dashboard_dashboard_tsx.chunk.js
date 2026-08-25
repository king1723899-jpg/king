"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_dashboard_dashboard_tsx"],
  {
    /***/ "./src/models/IMarket.ts":
      /*!*******************************!*\
  !*** ./src/models/IMarket.ts ***!
  \*******************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ OddsType: () => /* binding */ OddsType,
          /* harmony export */
        });
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        let OddsType = /*#__PURE__*/ (function (OddsType) {
          OddsType["B"] = "berFair";
          // Betfair
          OddsType["BM"] = "bookMaker";
          OddsType["F"] = "Fancy";
          return OddsType;
        })({});

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

    /***/ "./src/pages/CasinoList/CasinoListItem.tsx":
      /*!*************************************************!*\
  !*** ./src/pages/CasinoList/CasinoListItem.tsx ***!
  \*************************************************/
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
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _redux_actions_casino_casinoSlice__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../redux/actions/casino/casinoSlice */ "./src/redux/actions/casino/casinoSlice.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/CasinoList/CasinoListItem.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const CasinoListItem = (props) => {
          _s();
          const gamesList = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(
            _redux_actions_casino_casinoSlice__WEBPACK_IMPORTED_MODULE_2__.selectCasinoMatchList
          );
          const navigate = (0,
          _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.useNavigateCustom)();
          const casinoWidth =
            react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
              ? "col-3"
              : "col11";
          const onCasinoClick = (e, Item) => {
            e.preventDefault();

            // Check if this is a homepage category (has homepage_code) or old casino game (has match_id)
            if (Item.homepage_code !== undefined) {
              // Navigate to casino games filtered by homepage_code
              navigate.go(`/casino-homepage/${Item.homepage_code}`);
            } else if (!Item.isDisable && Item.match_id !== -1) {
              // Old casino game navigation
              navigate.go(`/casino/${Item.slug}/${Item.match_id}`);
            } else {
              react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(
                "This game is suspended by admin, please try again later"
              );
            }
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,
            {
              children:
                gamesList && gamesList.length > 0
                  ? gamesList.map((Item, key) => {
                      // For homepage categories, use static game images (game-1.gif, game-2.gif, etc.)
                      const isHomepageCategory =
                        Item.homepage_code !== undefined;
                      const imageUrl = isHomepageCategory
                        ? `/icon/game-${Item.homepage_code}.gif`
                        : Item.image;
                      return /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                        "a",
                        {
                          href: "#",
                          onClick: (e) => onCasinoClick(e, Item),
                          className: "text-decoration-none",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                            "div",
                            {
                              className: "casino-game-box",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                "img",
                                {
                                  src: imageUrl,
                                  alt: `Casino Game ${key + 1}`,
                                  className: "casino-game-image",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 47,
                                  columnNumber: 17,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 46,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        key,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 40,
                          columnNumber: 13,
                        },
                        undefined
                      );
                    })
                  : // Show placeholder if no data
                    Array.from(
                      {
                        length: 12,
                      },
                      (_, index) =>
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                          "div",
                          {
                            className: "casino-game-box",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                              "img",
                              {
                                src: `/icon/game-${index + 1}.gif`,
                                alt: `Casino Game ${index + 1}`,
                                className: "casino-game-image",
                                style: {
                                  opacity: 0.5,
                                },
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 60,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          index,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 59,
                            columnNumber: 11,
                          },
                          undefined
                        )
                    ),
            },
            void 0,
            false
          );
        };
        _s(CasinoListItem, "q1P8LdbpkxjCArWH68bp/NESgXc=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,
            _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.useNavigateCustom,
          ];
        });
        _c = CasinoListItem;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            CasinoListItem
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "CasinoListItem");
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

    /***/ "./src/pages/_layout/elements/fav.tsx":
      /*!********************************************!*\
  !*** ./src/pages/_layout/elements/fav.tsx ***!
  \********************************************/
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
        /* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../services/sports.service */ "./src/services/sports.service.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/fav.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const Fav = (props) => {
          _s();
          const [matchList, setMatchList] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            _services_sports_service__WEBPACK_IMPORTED_MODULE_1__["default"]
              .getMatchList("all", "sports", "5")
              .then((res) => {
                var _res$data;
                // Ensure we always set an array, handle different response formats
                const data =
                  ((_res$data = res.data) === null || _res$data === void 0
                    ? void 0
                    : _res$data.data) ||
                  res.data ||
                  [];
                if (Array.isArray(data)) {
                  setMatchList(data);
                } else if (data.docs && Array.isArray(data.docs)) {
                  // Handle paginated response
                  setMatchList(data.docs);
                } else {
                  console.warn("Fav: Expected array but got:", data);
                  setMatchList([]);
                }
              })
              .catch((error) => {
                console.error("Fav: Error fetching match list:", error);
                setMatchList([]); // Set empty array on error
              });
          }, []);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
            "div",
            {
              className: "favourite",
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 9,
            },
            undefined
          );
        };
        _s(Fav, "CJgMM6PNuSNN9nxsU1S08klwQXs=");
        _c = Fav;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Fav;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Fav");

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

    /***/ "./src/pages/_layout/elements/game-tab-mobile.tsx":
      /*!********************************************************!*\
  !*** ./src/pages/_layout/elements/game-tab-mobile.tsx ***!
  \********************************************************/
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
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/game-tab-mobile.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const GameTabMobile = (props) => {
          _s();
          const location = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
          const [filter, setFilter] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState("in-play");
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const loca =
              location.pathname.includes("in-play") &&
              react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
                ? "in-play"
                : "sports";
            setFilter(loca);
          }, [location.pathname]);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
            "div",
            {
              className: "mobile-header mobile-header-2",
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
        _s(GameTabMobile, "7xk89P1rN9S54tWDuahBQUM9ZcM=", false, function () {
          return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation];
        });
        _c = GameTabMobile;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            GameTabMobile
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "GameTabMobile");
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

    /***/ "./src/pages/_layout/elements/game-tab.tsx":
      /*!*************************************************!*\
  !*** ./src/pages/_layout/elements/game-tab.tsx ***!
  \*************************************************/
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/elements/game-tab.tsx";

        const GameTabs = (props) => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
            "div",
            {
              className: "horizontal-scorller",
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 7,
              columnNumber: 5,
            },
            undefined
          );
        };
        _c = GameTabs;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            GameTabs
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "GameTabs");
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

    /***/ "./src/pages/dashboard/dashboard.tsx":
      /*!*******************************************!*\
  !*** ./src/pages/dashboard/dashboard.tsx ***!
  \*******************************************/
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
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../services/sports.service */ "./src/services/sports.service.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-redux */ "./node_modules/react-redux/es/index.js"
          );
        /* harmony import */ var _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var _context_webSocket__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../context/webSocket */ "./src/context/webSocket.tsx"
          );
        /* harmony import */ var _layout_elements_game_tab__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../_layout/elements/game-tab */ "./src/pages/_layout/elements/game-tab.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _layout_elements_game_tab_mobile__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../_layout/elements/game-tab-mobile */ "./src/pages/_layout/elements/game-tab-mobile.tsx"
          );
        /* harmony import */ var _elements_match_list__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./elements/match-list */ "./src/pages/dashboard/elements/match-list.tsx"
          );
        /* harmony import */ var _services_casino_service__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../services/casino.service */ "./src/services/casino.service.ts"
          );
        /* harmony import */ var _redux_actions_casino_casinoSlice__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../../redux/actions/casino/casinoSlice */ "./src/redux/actions/casino/casinoSlice.ts"
          );
        /* harmony import */ var _layout_elements_fav__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../_layout/elements/fav */ "./src/pages/_layout/elements/fav.tsx"
          );
        /* harmony import */ var _models_IMarket__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ../../models/IMarket */ "./src/models/IMarket.ts"
          );
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! ../../services/auth.service */ "./src/services/auth.service.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/dashboard/dashboard.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        // Helper to group matches by sport name (e.g., Cricket, Football)

        function groupMatchesBySport(matchList, sportList) {
          if (!Array.isArray(matchList) || matchList.length === 0) return [];
          const sportIdToName = {};
          sportList.forEach((sport) => {
            if (sport.sportId && sport.name) {
              sportIdToName[sport.sportId] = sport.name;
            }
          });
          const groups = {};
          matchList.forEach((match) => {
            const sportName =
              sportIdToName[match.sportId] || `Sport ${match.sportId}`;
            if (!groups[sportName]) groups[sportName] = [];
            groups[sportName].push(match);
          });
          return Object.entries(groups).map(([category, matchList]) => ({
            category,
            matchList,
          }));
        }
        const Dashboard = () => {
          _s();
          const [matchList, setMatchList] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const sportListState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_3__.selectSportList
          );
          const navigate = (0,
          _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_5__.useNavigateCustom)();
          const dispatch = (0,
          react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
          const { socket } = (0,
          _context_webSocket__WEBPACK_IMPORTED_MODULE_6__.useWebsocket)();
          const [odds, setOdds] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const location = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useLocation)();
          const gamesList = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_casino_casinoSlice__WEBPACK_IMPORTED_MODULE_12__.selectCasinoMatchList
          );
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_16__.selectUserData
          );
          const { sportId, status } = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useParams)();
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            // Enhanced: Use live matches endpoint with support for all sports
            if (sportId) {
              console.log(
                `ðŸš€ Dashboard: Fetching live matches for sportId: ${sportId}`
              );
              if (sportId === "888" || sportId === "9999") {
                // Fetch matches from all sports
                let allSports = [];
                if (sportId === "888") {
                  // Home - show all sports + casino categories
                  allSports =
                    react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isMobile
                      ? ["88", "1", "2", "4"] // Casino first for mobile
                      : ["88", "1", "2", "4"]; // Casino last for desktop
                } else if (sportId === "9999") {
                  // Casino Providers - just show empty casino category
                  allSports = ["88"];
                }
                const matchPromises = allSports.map((sport) =>
                  _services_sports_service__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                  ]
                    .getLiveMatches(sport)
                    .catch((error) => {
                      console.warn(`âš ï¸ Error fetching sport ${sport}:`, error);
                      return {
                        data: {
                          data: [],
                        },
                      };
                    })
                );
                Promise.all(matchPromises)
                  .then((responses) => {
                    console.log(`âœ… Dashboard: All sports responses received`);

                    // Combine all matches from different sports
                    let allMatches = [];
                    responses.forEach((res, index) => {
                      var _res$data, _res$data2;
                      const data =
                        ((_res$data = res.data) === null || _res$data === void 0
                          ? void 0
                          : _res$data.data) ||
                        ((_res$data2 = res.data) === null ||
                        _res$data2 === void 0
                          ? void 0
                          : _res$data2.sports) ||
                        res.data ||
                        [];
                      const currentSportId = allSports[index];
                      if (Array.isArray(data)) {
                        const sportMatches = data.map((match) => {
                          var _match$eventid, _match$gmid;
                          return {
                            // Core match identification
                            _id:
                              match._id ||
                              ((_match$eventid = match.eventid) === null ||
                              _match$eventid === void 0
                                ? void 0
                                : _match$eventid.toString()) ||
                              ((_match$gmid = match.gmid) === null ||
                              _match$gmid === void 0
                                ? void 0
                                : _match$gmid.toString()),
                            matchId:
                              match.matchId || match.eventid || match.gmid,
                            sportId: match.sportId || parseInt(currentSportId),
                            seriesId: match.competitionId || match.cid || "1",
                            // IMPORTANT: Use actual match time from Diamond API, not cache time
                            matchDateTime:
                              match.openDate ||
                              match.stime ||
                              new Date().toISOString(),
                            // Match details from Diamond API
                            name: match.name || match.ename,
                            // Status and flags - filter for in-play if status parameter is set
                            active: match.active !== false,
                            inPlay: match.inplay || match.iplay || false,
                            // Market availability flags from Diamond API
                            isBookMaker:
                              match.hasBookmaker || match.bm || false,
                            isFancy: match.hasFancy || match.f || false,
                            isT10: false,
                            tv: match.hasTV || match.tv || false,
                            bm: match.hasBookmaker || match.bm || false,
                            f: match.hasFancy || match.f || false,
                            f1: match.hasFancy1 || match.f1 || false,
                            // Diamond API specific fields
                            ename: match.name || match.ename,
                            etid: match.sportId || parseInt(currentSportId),
                            cid: match.competitionId || match.cid,
                            cname: match.competitionName || match.cname,
                            iplay: match.inplay || match.iplay || false,
                            stime: match.openDate || match.stime,
                            status: match.status || "OPEN",
                            gmid: match.eventid || match.gmid,
                            // Required LMatch fields
                            countryCode: "",
                            result_delare: false,
                            result: "",
                            markets: match.markets || [],
                            // Preserve external data for compatibility
                            externalData: match.externalData || match,
                          };
                        });
                        allMatches = allMatches.concat(sportMatches);
                      }
                    });

                    // Filter for in-play if status parameter is set
                    if (status === "in-play") {
                      allMatches = allMatches.filter(
                        (match) => match.inPlay || match.iplay
                      );
                      console.log(
                        `ðŸŽ¯ Dashboard: Filtered ${allMatches.length} in-play matches from all sports`
                      );
                    } else {
                      console.log(
                        `ðŸ“Š Dashboard: Processed ${allMatches.length} matches from all sports`
                      );
                    }

                    // âœ… FIXED: Sort matches - in-play first, then by time (ascending)
                    const sortedMatches = allMatches.sort((a, b) => {
                      // First priority: in-play matches come first
                      const aInPlay = a.inPlay || a.iplay || false;
                      const bInPlay = b.inPlay || b.iplay || false;
                      if (aInPlay && !bInPlay) return -1;
                      if (!aInPlay && bInPlay) return 1;

                      // Second priority: sort by time (ascending - old first)
                      const aTime = new Date(
                        a.matchDateTime || a.stime || "1970-01-01"
                      ).getTime();
                      const bTime = new Date(
                        b.matchDateTime || b.stime || "1970-01-01"
                      ).getTime();
                      return aTime - bTime;
                    });
                    console.log(
                      `ðŸ“Š Dashboard: Sorted ${sortedMatches.length} matches (in-play first, then by time)`
                    );
                    const oddsData = {
                      ...odds,
                    };
                    marketIdsEvent(sortedMatches, oddsData, "joinMarketRoom");
                    setOdds(oddsData);
                    setMatchList(sortedMatches);
                  })
                  .catch((error) => {
                    console.error(
                      "âŒ Dashboard: Error fetching all sports matches:",
                      error
                    );
                    setMatchList([]);
                  });
              } else {
                // Single sport fetch (existing logic)
                _services_sports_service__WEBPACK_IMPORTED_MODULE_1__["default"]
                  .getLiveMatches(sportId)
                  .then((res) => {
                    var _res$data3, _res$data4;
                    console.log(
                      `âœ… Dashboard: Live matches response:`,
                      res.data
                    );

                    // Handle the new live matches response format
                    const data =
                      ((_res$data3 = res.data) === null || _res$data3 === void 0
                        ? void 0
                        : _res$data3.data) ||
                      ((_res$data4 = res.data) === null || _res$data4 === void 0
                        ? void 0
                        : _res$data4.sports) ||
                      res.data ||
                      [];
                    let matchesArray = [];
                    if (Array.isArray(data)) {
                      // Map the live matches data to LMatch format with correct Diamond API fields
                      matchesArray = data.map((match) => {
                        var _match$eventid2, _match$gmid2;
                        return {
                          // Core match identification
                          _id:
                            match._id ||
                            ((_match$eventid2 = match.eventid) === null ||
                            _match$eventid2 === void 0
                              ? void 0
                              : _match$eventid2.toString()) ||
                            ((_match$gmid2 = match.gmid) === null ||
                            _match$gmid2 === void 0
                              ? void 0
                              : _match$gmid2.toString()),
                          matchId: match.matchId || match.eventid || match.gmid,
                          sportId: match.sportId || parseInt(sportId),
                          seriesId: match.competitionId || match.cid || "1",
                          // IMPORTANT: Use actual match time from Diamond API, not cache time
                          matchDateTime:
                            match.openDate ||
                            match.stime ||
                            new Date().toISOString(),
                          // Match details from Diamond API
                          name: match.name || match.ename,
                          // Status and flags
                          active: match.active !== false,
                          inPlay: match.inplay || match.iplay || false,
                          // Market availability flags from Diamond API
                          isBookMaker: match.hasBookmaker || match.bm || false,
                          isFancy: match.hasFancy || match.f || false,
                          isT10: false,
                          tv: match.hasTV || match.tv || false,
                          bm: match.hasBookmaker || match.bm || false,
                          f: match.hasFancy || match.f || false,
                          f1: match.hasFancy1 || match.f1 || false,
                          // Diamond API specific fields
                          ename: match.name || match.ename,
                          etid: match.sportId || parseInt(sportId),
                          cid: match.competitionId || match.cid,
                          cname: match.competitionName || match.cname,
                          iplay: match.inplay || match.iplay || false,
                          stime: match.openDate || match.stime,
                          status: match.status || "OPEN",
                          gmid: match.eventid || match.gmid,
                          // Required LMatch fields
                          countryCode: "",
                          result_delare: false,
                          result: "",
                          markets: match.markets || [],
                          // Preserve external data for compatibility
                          externalData: match.externalData || match,
                        };
                      });
                    } else {
                      console.warn("Dashboard: Expected array but got:", data);
                      matchesArray = [];
                    }
                    console.log(
                      `ðŸ“Š Dashboard: Processed ${matchesArray.length} live matches with correct Diamond API fields`
                    );
                    console.log("ðŸ” Sample match data:", matchesArray[0]);

                    // âœ… FIXED: Sort matches - in-play first, then by time (ascending)
                    const sortedMatches = matchesArray.sort((a, b) => {
                      // First priority: in-play matches come first
                      const aInPlay = a.inPlay || a.iplay || false;
                      const bInPlay = b.inPlay || b.iplay || false;
                      if (aInPlay && !bInPlay) return -1;
                      if (!aInPlay && bInPlay) return 1;

                      // Second priority: sort by time (ascending - old first)
                      const aTime = new Date(
                        a.matchDateTime || a.stime || "1970-01-01"
                      ).getTime();
                      const bTime = new Date(
                        b.matchDateTime || b.stime || "1970-01-01"
                      ).getTime();
                      return aTime - bTime;
                    });
                    console.log(
                      `ðŸ“Š Dashboard: Sorted ${sortedMatches.length} matches (in-play first, then by time)`
                    );
                    const oddsData = {
                      ...odds,
                    };
                    marketIdsEvent(sortedMatches, oddsData, "joinMarketRoom");
                    setOdds(oddsData);
                    setMatchList(sortedMatches);
                  })
                  .catch((error) => {
                    console.error(
                      "âŒ Dashboard: Error fetching live matches:",
                      error
                    );
                    setMatchList([]); // Set empty array on error
                  });
              }
            } else {
              // Fallback for when no sportId is provided
              console.log(
                "âš ï¸ Dashboard: No sportId provided, clearing match list"
              );
              setMatchList([]);
            }
            return () => {
              const oddsData = {
                ...odds,
              };
              // Ensure matchList is an array before calling marketIdsEvent
              if (Array.isArray(matchList)) {
                marketIdsEvent(matchList, oddsData, "leaveMarketRoom");
              }
            };
          }, [sportId, status]); // Added 'status' dependency for in-play filtering

          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            // Fetch casino homepage categories if user is authenticated (12 categories max)
            // Refresh when sportId changes to 888
            if (
              userState.user._id &&
              _services_auth_service__WEBPACK_IMPORTED_MODULE_15__[
                "default"
              ].isLoggedIn() &&
              sportId === "888"
            ) {
              _services_casino_service__WEBPACK_IMPORTED_MODULE_11__["default"]
                .getCasinoHomepageCategories()
                .then((res) => {
                  dispatch(
                    (0,
                    _redux_actions_casino_casinoSlice__WEBPACK_IMPORTED_MODULE_12__.setHomePageCasinoMatch)(
                      res.data.data
                    )
                  );
                })
                .catch((error) => {
                  console.log(
                    "Failed to fetch casino homepage categories:",
                    error.message
                  );
                  // Don't show error to user, just log it
                });
            }
          }, [userState.user._id, sportId]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            socket.on("getMarketData", (marketData) => {
              let firstIndexFirst = "-";
              let firstIndexTwo = "-";
              let secIndexFirst = "-";
              let secfirstIndexTwo = "-";
              let thirdIndexFirst = "-";
              let thirdfirstIndexTwo = "-";
              if (marketData.runners) {
                if (
                  marketData.runners[0] &&
                  marketData.runners[0].ex.availableToBack[0]
                ) {
                  firstIndexFirst =
                    marketData.runners[0].ex.availableToBack[0].price;
                  firstIndexTwo =
                    marketData.runners[0].ex.availableToLay[0].price;
                }
                if (
                  marketData.runners[1] &&
                  marketData.runners[1].ex.availableToBack[0]
                ) {
                  secIndexFirst =
                    marketData.runners[1].ex.availableToBack[0].price;
                  secfirstIndexTwo =
                    marketData.runners[1].ex.availableToLay[0].price;
                }
                if (
                  marketData.runners[2] &&
                  marketData.runners[2].ex.availableToBack[0]
                ) {
                  thirdIndexFirst =
                    marketData.runners[2].ex.availableToBack[0].price;
                  thirdfirstIndexTwo =
                    marketData.runners[2].ex.availableToLay[0].price;
                }
              }
              setOdds((prevOdds) => ({
                ...prevOdds,
                [marketData.marketId]: [
                  firstIndexFirst,
                  firstIndexTwo,
                  thirdIndexFirst,
                  thirdfirstIndexTwo,
                  secIndexFirst,
                  secfirstIndexTwo,
                ],
              }));
            });
            return () => {
              socket.off("getMarketData");
            };
          }, [odds]);
          const memoOdds = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            (marketId) => {
              if (!marketId) {
                return /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                        "td",
                        {
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            "button",
                            {
                              className: "back",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                "span",
                                {
                                  className: "odd",
                                  children: "-",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 352,
                                  columnNumber: 42,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 352,
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
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                        "td",
                        {
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            "button",
                            {
                              className: "lay",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                "span",
                                {
                                  className: "odd",
                                  children: "-",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 353,
                                  columnNumber: 41,
                                },
                                undefined
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
                          lineNumber: 353,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                        "td",
                        {
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            "button",
                            {
                              className: "back",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                "span",
                                {
                                  className: "odd",
                                  children: "-",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 354,
                                  columnNumber: 42,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 354,
                              columnNumber: 17,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 354,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                        "td",
                        {
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            "button",
                            {
                              className: "lay",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                "span",
                                {
                                  className: "odd",
                                  children: "-",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 355,
                                  columnNumber: 41,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 355,
                              columnNumber: 17,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 355,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                        "td",
                        {
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            "button",
                            {
                              className: "back",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                "span",
                                {
                                  className: "odd",
                                  children: "-",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 356,
                                  columnNumber: 42,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 356,
                              columnNumber: 17,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 356,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                        "td",
                        {
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            "button",
                            {
                              className: "lay",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                "span",
                                {
                                  className: "odd",
                                  children: "-",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 357,
                                  columnNumber: 41,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 357,
                              columnNumber: 17,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 357,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true
                );
              }
              const marketData = odds[marketId];
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                      "td",
                      {
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                          "button",
                          {
                            className: "back",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                              "span",
                              {
                                className: "odd",
                                children: (marketData && marketData[0]) || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 366,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 365,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 364,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                      "td",
                      {
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                          "button",
                          {
                            className: "lay",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                              "span",
                              {
                                className: "odd",
                                children: (marketData && marketData[1]) || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 371,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 370,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 369,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                      "td",
                      {
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                          "button",
                          {
                            className: "back",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                              "span",
                              {
                                className: "odd",
                                children: (marketData && marketData[2]) || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 376,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 375,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 374,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                      "td",
                      {
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                          "button",
                          {
                            className: "lay",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                              "span",
                              {
                                className: "odd",
                                children: (marketData && marketData[3]) || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 381,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 380,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 379,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                      "td",
                      {
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                          "button",
                          {
                            className: "back",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                              "span",
                              {
                                className: "odd",
                                children: (marketData && marketData[4]) || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 386,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 385,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 384,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                      "td",
                      {
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                          "button",
                          {
                            className: "lay",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                              "span",
                              {
                                className: "odd",
                                children: (marketData && marketData[5]) || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 391,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 390,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 389,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                  ],
                },
                void 0,
                true
              );
            },
            [odds]
          );
          const marketIdsEvent = (data, oddsData, event) => {
            // Ensure data is an array before trying to map
            if (!Array.isArray(data)) {
              console.warn(
                "marketIdsEvent: Expected array but got:",
                typeof data,
                data
              );
              return;
            }
            data.map((match) => {
              if (match.markets && Array.isArray(match.markets)) {
                match.markets.map((market) => {
                  if (
                    market.marketName == "Match Odds" &&
                    !odds[market.marketId]
                  ) {
                    // setOdds((prevOdds) => ({
                    //   ...prevOdds,
                    //   [market.marketId]:Array(6).fill('-'),
                    // }));
                  }
                  setTimeout(() => {
                    socket.emit(event, market.marketId);
                  }, 200);
                });
              }
            });
          };
          const currentMatch = (match) => {
            var _match$sportId,
              _match$seriesId,
              _match$cid,
              _extendedMatch$compet,
              _match$markets;
            // Helper function to safely convert date
            const getSafeISOString = (dateValue) => {
              if (!dateValue) {
                console.warn(
                  "Dashboard: No date value provided, using current time"
                );
                return new Date().toISOString();
              }

              // If it's already a string, validate it's a proper ISO string
              if (typeof dateValue === "string") {
                const testDate = new Date(dateValue);
                if (isNaN(testDate.getTime())) {
                  console.warn(
                    "Dashboard: Invalid date string, using current time:",
                    dateValue
                  );
                  return new Date().toISOString();
                }
                return testDate.toISOString();
              }

              // If it's a Date object, validate it
              if (dateValue instanceof Date) {
                if (isNaN(dateValue.getTime())) {
                  console.warn(
                    "Dashboard: Invalid Date object, using current time:",
                    dateValue
                  );
                  return new Date().toISOString();
                }
                return dateValue.toISOString();
              }

              // Try to create a new Date from the value
              try {
                const newDate = new Date(dateValue);
                if (isNaN(newDate.getTime())) {
                  console.warn(
                    "Dashboard: Could not convert to Date, using current time:",
                    dateValue
                  );
                  return new Date().toISOString();
                }
                return newDate.toISOString();
              } catch (error) {
                console.warn(
                  "Dashboard: Date conversion error, using current time:",
                  error
                );
                return new Date().toISOString();
              }
            };

            // Convert LMatch to IMatch with proper date handling
            // Handle both old and new data formats
            const extendedMatch = match; // Type assertion for new properties

            const convertedMatch = {
              ...match,
              matchDateTime: getSafeISOString(
                match.matchDateTime ||
                  match.stime ||
                  extendedMatch.openDate ||
                  new Date()
              ),
              sportId:
                ((_match$sportId = match.sportId) === null ||
                _match$sportId === void 0
                  ? void 0
                  : _match$sportId.toString()) || "4",
              // Default to cricket if missing
              seriesId:
                ((_match$seriesId = match.seriesId) === null ||
                _match$seriesId === void 0
                  ? void 0
                  : _match$seriesId.toString()) ||
                ((_match$cid = match.cid) === null || _match$cid === void 0
                  ? void 0
                  : _match$cid.toString()) ||
                ((_extendedMatch$compet = extendedMatch.competitionId) ===
                  null || _extendedMatch$compet === void 0
                  ? void 0
                  : _extendedMatch$compet.toString()) ||
                "1",
              markets:
                ((_match$markets = match.markets) === null ||
                _match$markets === void 0
                  ? void 0
                  : _match$markets.map((market) => {
                      var _match$seriesId2, _match$cid2, _extendedMatch$compet2;
                      return {
                        ...market,
                        __v: 0,
                        // Add required __v field
                        isActive: market.isActive,
                        isDelete: market.isDelete,
                        marketId: market.marketId,
                        marketName: market.marketName,
                        matchId: market.matchId,
                        oddsType:
                          market.oddsType === "berFair"
                            ? _models_IMarket__WEBPACK_IMPORTED_MODULE_14__
                                .OddsType.B
                            : market.oddsType === "bookMaker"
                            ? _models_IMarket__WEBPACK_IMPORTED_MODULE_14__
                                .OddsType.BM
                            : market.oddsType === "Fancy"
                            ? _models_IMarket__WEBPACK_IMPORTED_MODULE_14__
                                .OddsType.F
                            : _models_IMarket__WEBPACK_IMPORTED_MODULE_14__
                                .OddsType.B,
                        seriesId:
                          ((_match$seriesId2 = match.seriesId) === null ||
                          _match$seriesId2 === void 0
                            ? void 0
                            : _match$seriesId2.toString()) ||
                          ((_match$cid2 = match.cid) === null ||
                          _match$cid2 === void 0
                            ? void 0
                            : _match$cid2.toString()) ||
                          ((_extendedMatch$compet2 =
                            extendedMatch.competitionId) === null ||
                          _extendedMatch$compet2 === void 0
                            ? void 0
                            : _extendedMatch$compet2.toString()) ||
                          "1",
                        sportId: market.sportId,
                        runners: market.runners,
                      };
                    })) || [], // Provide empty array if no markets
            };
            console.log("ðŸŽ¯ Dashboard: Setting current match:", convertedMatch);
            dispatch(
              (0,
              _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentMatch)(
                convertedMatch
              )
            );

            // Use correct property names for navigation
            const matchIdForNavigation =
              match.matchId || match.gmid || extendedMatch.eventid || match._id;
            navigate.go(`/odds/${matchIdForNavigation}`);
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,
            {
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                  "style",
                  {
                    children: `
          @keyframes blink {
            0%, 50% {
              opacity: 1;
              transform: scale(1);
            }
            25%, 75% {
              opacity: 0.7;
              transform: scale(1.05);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 516,
                    columnNumber: 6,
                  },
                  undefined
                ),
                " ",
                console.log(),
                react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isMobile
                  ? /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                      _layout_elements_game_tab_mobile__WEBPACK_IMPORTED_MODULE_9__[
                        "default"
                      ],
                      {
                        sportId: sportId,
                        sportListState: sportListState,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 536,
                        columnNumber: 19,
                      },
                      undefined
                    )
                  : "",
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                  "div",
                  {
                    className: "pb-4 mtc-5",
                    children: [
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isMobile
                        ? /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            _layout_elements_fav__WEBPACK_IMPORTED_MODULE_13__[
                              "default"
                            ],
                            {},
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 538,
                              columnNumber: 22,
                            },
                            undefined
                          )
                        : "",
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_8__.isMobile
                        ? /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            _layout_elements_game_tab__WEBPACK_IMPORTED_MODULE_7__[
                              "default"
                            ],
                            {
                              sportId: sportId,
                              sportListState: sportListState,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 539,
                              columnNumber: 22,
                            },
                            undefined
                          )
                        : "",
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                        "div",
                        {
                          className: "tab-content",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            "div",
                            {
                              className: "tab-pane active",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                  "div",
                                  {
                                    className:
                                      "matchlist coupon-card-first matchlist-coupon-card-first",
                                    children: (() => {
                                      // Build grouped list
                                      const grouped = groupMatchesBySport(
                                        matchList,
                                        sportListState.sports
                                      );
                                      // For aggregated (888) OR direct casino (88) always ensure casino category exists so static UI renders
                                      if (
                                        sportId === "888" ||
                                        sportId === "88"
                                      ) {
                                        const hasCasino = grouped.some(
                                          (g) =>
                                            g.category.toLowerCase() ===
                                            "casino"
                                        );
                                        if (!hasCasino) {
                                          // Force uppercase name to align with static UI condition
                                          const casinoName = "CASINO";
                                          grouped.push({
                                            category: casinoName,
                                            matchList: [],
                                          });
                                        } else {
                                          // Normalize existing casino category name to uppercase for consistency
                                          grouped.forEach((g) => {
                                            if (
                                              g.category.toLowerCase() ===
                                              "casino"
                                            )
                                              g.category = "CASINO";
                                          });
                                        }
                                        // Sort grouped so casino is at top on mobile, last on desktop
                                        grouped.sort((a, b) => {
                                          if (
                                            a.category === "CASINO" &&
                                            b.category !== "CASINO"
                                          ) {
                                            return -1;
                                          }
                                          if (
                                            a.category !== "CASINO" &&
                                            b.category === "CASINO"
                                          ) {
                                            return 1;
                                          }
                                          return 0;
                                        });
                                      }
                                      return grouped.map(
                                        ({ category, matchList }) =>
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                            "div",
                                            {
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                                _elements_match_list__WEBPACK_IMPORTED_MODULE_10__[
                                                  "default"
                                                ],
                                                {
                                                  currentMatch: currentMatch,
                                                  memoOdds: memoOdds,
                                                  matchList: matchList,
                                                  category: category,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 584,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            category,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 583,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          )
                                      );
                                    })(),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 543,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                  "div",
                                  {
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                      "div",
                                      {
                                        className: "",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 591,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 590,
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
                              lineNumber: 542,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 541,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                        "div",
                        {
                          style: {
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            zIndex: 1000,
                            cursor: "pointer",
                          },
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                            "a",
                            {
                              href: "https://wa.link/ambani",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              title: "Contact us on WhatsApp",
                              style: {
                                display: "block",
                                textDecoration: "none",
                              },
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(
                                "img",
                                {
                                  src: "/wp_support.png",
                                  alt: "WhatsApp Support",
                                  style: {
                                    width: "60px",
                                    height: "60px",
                                    objectFit: "contain",
                                    filter:
                                      "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
                                    animation: "blink 2s infinite",
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 614,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 604,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 595,
                          columnNumber: 12,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 537,
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
        _s(Dashboard, "dRZuaZOIspfq9NwTLKMRidUN764=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_5__.useNavigateCustom,
            react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,
            _context_webSocket__WEBPACK_IMPORTED_MODULE_6__.useWebsocket,
            react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useLocation,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useParams,
          ];
        });
        _c = Dashboard;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          Dashboard;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Dashboard");

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

    /***/ "./src/pages/dashboard/elements/match-list.tsx":
      /*!*****************************************************!*\
  !*** ./src/pages/dashboard/elements/match-list.tsx ***!
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
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_casino_casinoSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../redux/actions/casino/casinoSlice */ "./src/redux/actions/casino/casinoSlice.ts"
          );
        /* harmony import */ var _CasinoList_CasinoListItem__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../CasinoList/CasinoListItem */ "./src/pages/CasinoList/CasinoListItem.tsx"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/dashboard/elements/match-list.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // import React from 'react'
        // import LMatch from '../../../models/LMatch'
        // import moment from 'moment'
        // import { dateFormat } from '../../../utils/helper'

        // interface MatchListProps {
        //   matchList: LMatch[];
        //   currentMatch: (match: LMatch) => void;
        //   memoOdds: (marketId: string | null) => React.ReactNode;
        // }

        // interface Runner {
        //   selectionId: number;
        //   runnerName: string;
        //   handicap: number;
        //   sortPriority: number;
        //   ex?: {
        //     availableToBack?: Array<{
        //       price: number;
        //       size: number;
        //     }>;
        //     availableToLay?: Array<{
        //       price: number;
        //       size: number;
        //     }>;
        //   };
        // }

        // interface ExternalDataSection {
        //   sid: number;
        //   sno: number;
        //   gstatus: string;
        //   gscode: number;
        //   nat: string;
        //   odds: Array<{
        //     sid: number;
        //     psid: number;
        //     odds: number;
        //     otype: string;
        //     oname: string;
        //     tno: number;
        //     size: number;
        //   }>;
        // }

        // const MatchList: React.FC<MatchListProps> = ({ matchList, currentMatch, memoOdds }) => {

        //   // Helper function to extract odds from externalData section
        //   const getOddsFromExternalData = (match: LMatch) => {
        //     if (!match.externalData?.section || !Array.isArray(match.externalData.section)) {
        //       return { odds1: { back: '-', lay: '-' }, oddsX: { back: '-', lay: '-' }, odds2: { back: '-', lay: '-' } };
        //     }

        //     const sections = match.externalData.section as ExternalDataSection[];

        //     // Find sections by sno (1 = first team, 2 = draw, 3 = second team)
        //     const team1Section = sections.find(s => s.sno === 1);
        //     const drawSection = sections.find(s => s.sno === 2);
        //     const team2Section = sections.find(s => s.sno === 3);

        //     const extractOdds = (section: ExternalDataSection | undefined) => {
        //       if (!section?.odds) return { back: '-', lay: '-' };

        //       const backOdd = section.odds.find(o => o.otype === 'back');
        //       const layOdd = section.odds.find(o => o.otype === 'lay');

        //       return {
        //         back: backOdd ? backOdd.odds.toFixed(2) : '-',
        //         lay: layOdd ? layOdd.odds.toFixed(2) : '-'
        //       };
        //     };

        //     return {
        //       odds1: extractOdds(team1Section),
        //       oddsX: extractOdds(drawSection),
        //       odds2: extractOdds(team2Section)
        //     };
        //   };

        //   // Helper function to get odds from market data (fallback)
        //   const getOddsFromMarkets = (match: LMatch) => {
        //     const market = match?.markets?.[0];
        //     const runners = market?.runners || [];

        //     // Find back/lay odds for each selection
        //     const getOdds = (selectionId: number) => {
        //       const runner = runners.find((r: Runner) => r.selectionId === selectionId);
        //       if (!runner?.ex) return { back: '-', lay: '-' };

        //       const back = runner.ex.availableToBack?.[0]?.price || '-';
        //       const lay = runner.ex.availableToLay?.[0]?.price || '-';
        //       return {
        //         back: back !== '-' ? parseFloat(back.toString()).toFixed(2) : '-',
        //         lay: lay !== '-' ? parseFloat(lay.toString()).toFixed(2) : '-'
        //       };
        //     };

        //     return {
        //       odds1: getOdds(1),
        //       oddsX: getOdds(2), // Draw is usually selection 2
        //       odds2: getOdds(3)
        //     };
        //   };

        //   return (
        //     <div className='card-content'>
        //       <table className='table coupon-table'>
        //         <thead>
        //           <tr>
        //             <th style={{ width: '63%' }}>Game</th>
        //             <th colSpan={2}>1</th>
        //             <th colSpan={2}>X</th>
        //             <th colSpan={2}>2</th>
        //           </tr>
        //         </thead>
        //         <tbody>
        //           {matchList.map((match: LMatch, index: number) => {
        //             // Try to get odds from externalData first, then fallback to markets
        //             const externalOdds = getOddsFromExternalData(match);
        //             const marketOdds = getOddsFromMarkets(match);

        //             // Use external data if available, otherwise use market data
        //             const odds1 = externalOdds.odds1.back !== '-' ? externalOdds.odds1 : marketOdds.odds1;
        //             const oddsX = externalOdds.oddsX.back !== '-' ? externalOdds.oddsX : marketOdds.oddsX;
        //             const odds2 = externalOdds.odds2.back !== '-' ? externalOdds.odds2 : marketOdds.odds2;

        //             return (
        //               <tr key={`${match.matchId}_${index}`}>
        //                 <td>
        //                   <div className='game-name'>
        //                     <a
        //                       onClick={() => currentMatch(match)}
        //                       className='text-dark'
        //                       href={undefined}
        //                     >
        //                       {match.name || match.ename} / {moment(match.matchDateTime).format(dateFormat)}
        //                     </a>
        //                   </div>
        //                   <div className='game-icons'>
        //                     {/* In-play indicator */}
        //                     {(match.inPlay ||
        //                       match.iplay ||
        //                       new Date(match.matchDateTime).getTime() < new Date().getTime()) && (
        //                       <span className='game-icon'>
        //                         <span className='active' />
        //                       </span>
        //                     )}

        //                     {/* TV icon - show if tv flag is true */}
        //                     {match.tv === true && (
        //                       <span className='game-icon'>
        //                         <i className='fas fa-tv v-m icon-tv' />
        //                       </span>
        //                     )}

        //                     {/* Fancy icon - show if f flag is true */}
        //                     {(match.f === true || match.isFancy === true) && (
        //                       <span className='game-icon'>
        //                         <img
        //                           src='/assets/images/icons/ic_fancy.png'
        //                           className='fancy-icon'
        //                           alt='Fancy'
        //                         />
        //                       </span>
        //                     )}

        //                     {/* Bookmaker icon - show if bm flag is true */}
        //                     {(match.bm === true || match.isBookMaker === true) && (
        //                       <span className='game-icon'>
        //                         <img
        //                           src='/assets/images/icons/ic_bm.png'
        //                           className='bookmaker-icon'
        //                           alt='Bookmaker'
        //                         />
        //                       </span>
        //                     )}
        //                   </div>
        //                 </td>

        //                 {/* 1 Odds */}
        //                 <td className="back-1">
        //                   <button className="back" disabled={odds1.back === '-'}>
        //                     <span className="odd">{odds1.back}</span>
        //                   </button>
        //                 </td>
        //                 <td className="lay-1">
        //                   <button className="lay" disabled={odds1.lay === '-'}>
        //                     <span className="odd">{odds1.lay}</span>
        //                   </button>
        //                 </td>

        //                 {/* X Odds */}
        //                 <td className="back-x">
        //                   <button className="back" disabled={oddsX.back === '-'}>
        //                     <span className="odd">{oddsX.back}</span>
        //                   </button>
        //                 </td>
        //                 <td className="lay-x">
        //                   <button className="lay" disabled={oddsX.lay === '-'}>
        //                     <span className="odd">{oddsX.lay}</span>
        //                   </button>
        //                 </td>

        //                 {/* 2 Odds */}
        //                 <td className="back-2">
        //                   <button className="back" disabled={odds2.back === '-'}>
        //                     <span className="odd">{odds2.back}</span>
        //                   </button>
        //                 </td>
        //                 <td className="lay-2">
        //                   <button className="lay" disabled={odds2.lay === '-'}>
        //                     <span className="odd">{odds2.lay}</span>
        //                   </button>
        //                 </td>
        //               </tr>
        //             )
        //           })}
        //         </tbody>
        //       </table>
        //     </div>
        //   )
        // }

        // export default MatchList

        const MatchList = ({ matchList, currentMatch, memoOdds, category }) => {
          _s();
          const { sportId } = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)();
          const gamesList = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(
            _redux_actions_casino_casinoSlice__WEBPACK_IMPORTED_MODULE_4__.selectCasinoMatchList
          );

          // Helper function to extract odds from externalData section
          const getOddsFromExternalData = (match) => {
            var _match$externalData;
            if (
              !(
                (_match$externalData = match.externalData) !== null &&
                _match$externalData !== void 0 &&
                _match$externalData.section
              ) ||
              !Array.isArray(match.externalData.section)
            ) {
              return {
                odds1: {
                  back: "-",
                  lay: "-",
                  backSize: "-",
                  laySize: "-",
                },
                oddsX: {
                  back: "-",
                  lay: "-",
                  backSize: "-",
                  laySize: "-",
                },
                odds2: {
                  back: "-",
                  lay: "-",
                  backSize: "-",
                  laySize: "-",
                },
              };
            }
            const sections = match.externalData.section;

            // Find sections by sno (1 = first team, 2 = draw, 3 = second team)
            const team1Section = sections.find((s) => s.sno === 1);
            const drawSection = sections.find((s) => s.sno === 2);
            const team2Section = sections.find((s) => s.sno === 3);
            const extractOdds = (section) => {
              if (!(section !== null && section !== void 0 && section.odds)) {
                return {
                  back: "-",
                  lay: "-",
                  backSize: "-",
                  laySize: "-",
                };
              }
              const backOdd = section.odds.find((o) => o.otype === "back");
              const layOdd = section.odds.find((o) => o.otype === "lay");
              return {
                back: backOdd ? backOdd.odds.toFixed(2) : "-",
                lay: layOdd ? layOdd.odds.toFixed(2) : "-",
                backSize: backOdd ? backOdd.size.toFixed(2) : "-",
                laySize: layOdd ? layOdd.size.toFixed(2) : "-",
              };
            };
            return {
              odds1: extractOdds(team1Section),
              oddsX: extractOdds(drawSection),
              odds2: extractOdds(team2Section),
            };
          };

          // Helper function to get odds from market data (fallback)
          const getOddsFromMarkets = (match) => {
            var _match$markets;
            const market =
              match === null || match === void 0
                ? void 0
                : (_match$markets = match.markets) === null ||
                  _match$markets === void 0
                ? void 0
                : _match$markets[0];
            const runners =
              (market === null || market === void 0
                ? void 0
                : market.runners) || [];

            // Find back/lay odds for each selection
            const getOdds = (selectionId) => {
              var _runner$ex$availableT, _runner$ex$availableT2;
              const runner = runners.find((r) => r.selectionId === selectionId);
              if (!(runner !== null && runner !== void 0 && runner.ex)) {
                return {
                  back: "-",
                  lay: "-",
                  backSize: "-",
                  laySize: "-",
                };
              }
              const back =
                (_runner$ex$availableT = runner.ex.availableToBack) === null ||
                _runner$ex$availableT === void 0
                  ? void 0
                  : _runner$ex$availableT[0];
              const lay =
                (_runner$ex$availableT2 = runner.ex.availableToLay) === null ||
                _runner$ex$availableT2 === void 0
                  ? void 0
                  : _runner$ex$availableT2[0];
              return {
                back:
                  back !== null && back !== void 0 && back.price
                    ? parseFloat(back.price.toString()).toFixed(2)
                    : "-",
                lay:
                  lay !== null && lay !== void 0 && lay.price
                    ? parseFloat(lay.price.toString()).toFixed(2)
                    : "-",
                backSize:
                  back !== null && back !== void 0 && back.size
                    ? parseFloat(back.size.toString()).toFixed(2)
                    : "-",
                laySize:
                  lay !== null && lay !== void 0 && lay.size
                    ? parseFloat(lay.size.toString()).toFixed(2)
                    : "-",
              };
            };
            return {
              odds1: getOdds(1),
              oddsX: getOdds(2),
              odds2: getOdds(3),
            };
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
            "main",
            {
              className: "main-content p-1 md:p-4 bg-gray-300",
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                "div",
                {
                  className: "main-div-to-scroll",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                      "div",
                      {
                        className: " mb-1 px-1 bg-[#6D081D]",
                        style: {
                          marginBottom: "4px",
                          padding: "4px",
                          background: "#6D081D",
                        },
                        children: "\uD83D\uDD0A",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 371,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                      "div",
                      {
                        style: {
                          // display: "grid",
                          // gap: "0.25rem", // gap-1
                          // gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                        },
                        className: "grid-responsive",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                            "div",
                            {
                              style: {
                                width: "100%",
                              },
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                "div",
                                {
                                  style: {
                                    width: "fit-content",
                                  },
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                    "div",
                                    {
                                      style: {
                                        backgroundColor: "#c10930",
                                        color: "white",
                                        paddingTop: "0.5rem",
                                        paddingBottom: "0.5rem",
                                        paddingLeft: "0.5rem",
                                        paddingRight: "10rem",
                                        // Adjust for md:pr-40, approx 160px
                                        clipPath:
                                          "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                                      },
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                        "h6",
                                        {
                                          style: {
                                            margin: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.25rem",
                                            whiteSpace: "nowrap",
                                          },
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "img",
                                              {
                                                src: `/icon/${
                                                  category
                                                    ? category.toLowerCase()
                                                    : ""
                                                }.png`,
                                                alt: "Sport Icon",
                                                style: {
                                                  width: "1rem",
                                                  height: "1rem",
                                                },
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 410,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            category
                                              ? category.toUpperCase()
                                              : "",
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 401,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 390,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 389,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 388,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          category !== "CASINO" &&
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  // background: "red",
                                  marginBottom: "0.5rem",
                                },
                                className: "md:flex",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                  "div",
                                  {
                                    style: {
                                      display: "flex",
                                      width: "100%",
                                      gap: "0.5rem",
                                      alignItems: "center",
                                    },
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                        "div",
                                        {
                                          style: {
                                            flex: 1,
                                            fontSize: "0.75rem",
                                            textAlign: "center",
                                          },
                                          children: "1",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 460,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                        "div",
                                        {
                                          style: {
                                            flex: 1,
                                            fontSize: "0.75rem",
                                            textAlign: "center",
                                          },
                                          children: "x",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 469,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                        "div",
                                        {
                                          style: {
                                            flex: 1,
                                            fontSize: "0.75rem",
                                            textAlign: "center",
                                          },
                                          children: "2",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 478,
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
                                    lineNumber: 452,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 444,
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
                        lineNumber: 378,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                      "div",
                      {
                        className: "matches-container",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                          "div",
                          {
                            className: "matches-list",
                            children:
                              category !== "CASINO"
                                ? /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,
                                    {
                                      children: matchList.map(
                                        (match, index) => {
                                          const externalOdds =
                                            getOddsFromExternalData(match);
                                          const marketOdds =
                                            getOddsFromMarkets(match);
                                          const odds1 =
                                            externalOdds.odds1.back !== "-"
                                              ? externalOdds.odds1
                                              : marketOdds.odds1;
                                          const oddsX =
                                            externalOdds.oddsX.back !== "-"
                                              ? externalOdds.oddsX
                                              : marketOdds.oddsX;
                                          const odds2 =
                                            externalOdds.odds2.back !== "-"
                                              ? externalOdds.odds2
                                              : marketOdds.odds2;
                                          const oddsArray = [
                                            {
                                              odds:
                                                externalOdds.odds1.back !== "-"
                                                  ? externalOdds.odds1.back
                                                  : marketOdds.odds1.back,
                                              size:
                                                externalOdds.odds1.back !== "-"
                                                  ? externalOdds.odds1.backSize
                                                  : marketOdds.odds1.backSize,
                                            },
                                            {
                                              odds:
                                                externalOdds.odds1.lay !== "-"
                                                  ? externalOdds.odds1.lay
                                                  : marketOdds.odds1.lay,
                                              size:
                                                externalOdds.odds1.lay !== "-"
                                                  ? externalOdds.odds1.laySize
                                                  : marketOdds.odds1.laySize,
                                            },
                                            {
                                              odds:
                                                externalOdds.oddsX.back !== "-"
                                                  ? externalOdds.oddsX.back
                                                  : marketOdds.oddsX.back,
                                              size:
                                                externalOdds.oddsX.back !== "-"
                                                  ? externalOdds.oddsX.backSize
                                                  : marketOdds.oddsX.backSize,
                                            },
                                            {
                                              odds:
                                                externalOdds.oddsX.lay !== "-"
                                                  ? externalOdds.oddsX.lay
                                                  : marketOdds.oddsX.lay,
                                              size:
                                                externalOdds.oddsX.lay !== "-"
                                                  ? externalOdds.oddsX.laySize
                                                  : marketOdds.oddsX.laySize,
                                            },
                                            {
                                              odds:
                                                externalOdds.odds2.back !== "-"
                                                  ? externalOdds.odds2.back
                                                  : marketOdds.odds2.back,
                                              size:
                                                externalOdds.odds2.back !== "-"
                                                  ? externalOdds.odds2.backSize
                                                  : marketOdds.odds2.backSize,
                                            },
                                            {
                                              odds:
                                                externalOdds.odds2.lay !== "-"
                                                  ? externalOdds.odds2.lay
                                                  : marketOdds.odds2.lay,
                                              size:
                                                externalOdds.odds2.lay !== "-"
                                                  ? externalOdds.odds2.laySize
                                                  : marketOdds.odds2.laySize,
                                            },
                                          ];
                                          return /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                            "div",
                                            {
                                              className: "match-wrapper",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "match-info",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "team-details",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "team-text",
                                                                children: [
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                    "h2",
                                                                    {
                                                                      className:
                                                                        "team-name truncated-text",
                                                                      onClick:
                                                                        () =>
                                                                          currentMatch(
                                                                            match
                                                                          ),
                                                                      // className="text-dark"
                                                                      // href={undefined}
                                                                      children:
                                                                        [
                                                                          " ",
                                                                          match.name ||
                                                                            match.ename,
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    true,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 582,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                    "h3",
                                                                    {
                                                                      className:
                                                                        "league-name truncated-text",
                                                                      children:
                                                                        match.cname,
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 591,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                ],
                                                              },
                                                              void 0,
                                                              true,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 581,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 579,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className: `match-time ${
                                                            match.inPlay ||
                                                            match.iplay
                                                              ? "live-label"
                                                              : ""
                                                          }`,
                                                          children:
                                                            match.inPlay ||
                                                            match.iplay
                                                              ? /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "",
                                                                    children:
                                                                      "LIVE",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 602,
                                                                    columnNumber: 27,
                                                                  },
                                                                  undefined
                                                                )
                                                              : /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "match-date-time",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          children:
                                                                            moment__WEBPACK_IMPORTED_MODULE_1___default()(
                                                                              match ===
                                                                                null ||
                                                                                match ===
                                                                                  void 0
                                                                                ? void 0
                                                                                : match.matchDateTime
                                                                            ).format(
                                                                              "DD MMM"
                                                                            ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 605,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          children:
                                                                            moment__WEBPACK_IMPORTED_MODULE_1___default()(
                                                                              match ===
                                                                                null ||
                                                                                match ===
                                                                                  void 0
                                                                                ? void 0
                                                                                : match.matchDateTime
                                                                            ).format(
                                                                              "hh:mm A"
                                                                            ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 608,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                    ],
                                                                  },
                                                                  void 0,
                                                                  true,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 604,
                                                                    columnNumber: 27,
                                                                  },
                                                                  undefined
                                                                ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 597,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "match-date-replica",
                                                          children:
                                                            match.inPlay ||
                                                            match.iplay
                                                              ? /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "match-date-time",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          children:
                                                                            moment__WEBPACK_IMPORTED_MODULE_1___default()(
                                                                              match ===
                                                                                null ||
                                                                                match ===
                                                                                  void 0
                                                                                ? void 0
                                                                                : match.matchDateTime
                                                                            ).format(
                                                                              "DD MMM"
                                                                            ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 618,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          children:
                                                                            moment__WEBPACK_IMPORTED_MODULE_1___default()(
                                                                              match ===
                                                                                null ||
                                                                                match ===
                                                                                  void 0
                                                                                ? void 0
                                                                                : match.matchDateTime
                                                                            ).format(
                                                                              "hh:mm A"
                                                                            ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 621,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                    ],
                                                                  },
                                                                  void 0,
                                                                  true,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 617,
                                                                    columnNumber: 27,
                                                                  },
                                                                  undefined
                                                                )
                                                              : /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "empty-time",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 626,
                                                                    columnNumber: 27,
                                                                  },
                                                                  undefined
                                                                ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 615,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "match-broadcast gap-[0.25rem]",
                                                          children: [
                                                            match.tv === true &&
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "game-icon",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "i",
                                                                      {
                                                                        className:
                                                                          "fas fa-tv v-m icon-tv",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 632,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 631,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                            (match.f === true ||
                                                              match.isFancy ===
                                                                true) &&
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "game-icon",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "img",
                                                                      {
                                                                        src: "/assets/images/icons/ic_fancy.png",
                                                                        className:
                                                                          "fancy-icon",
                                                                        alt: "Fancy",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 639,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 638,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                            (match.bm ===
                                                              true ||
                                                              match.isBookMaker ===
                                                                true) &&
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "game-icon",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "img",
                                                                      {
                                                                        src: "/assets/images/icons/ic_bm.png",
                                                                        className:
                                                                          "bookmaker-icon",
                                                                        alt: "Bookmaker",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 650,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 649,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 629,
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
                                                    lineNumber: 578,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "odds-container",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "odds-grid",
                                                        children: oddsArray.map(
                                                          (value, index) =>
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                              "div",
                                                              {
                                                                className: `odds-box ${
                                                                  index % 2 ===
                                                                  0
                                                                    ? "odd-blue"
                                                                    : "odd-pink"
                                                                }`,
                                                                children:
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "bet-button-price",
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "b",
                                                                              children:
                                                                                value.odds,
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 670,
                                                                              columnNumber: 33,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                            "em",
                                                                            {
                                                                              children:
                                                                                value.size,
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 671,
                                                                              columnNumber: 33,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    true,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 668,
                                                                      columnNumber: 31,
                                                                    },
                                                                    undefined
                                                                  ),
                                                              },
                                                              index,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 663,
                                                                columnNumber: 29,
                                                              },
                                                              undefined
                                                            )
                                                        ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 661,
                                                        columnNumber: 25,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 660,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            `${match.matchId}_${index}`,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 577,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          );
                                        }
                                      ),
                                    },
                                    void 0,
                                    false
                                  )
                                : /*#__PURE__*/
                                  // Casino category section
                                  (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,
                                    {
                                      children:
                                        sportId === "9999"
                                          ? /*#__PURE__*/
                                            // Casino Providers (9999) - Show 20 static casino images leading to /casino-int/slots
                                            (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "div",
                                              {
                                                className: "mb-2",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "casino-games-scroll",
                                                    children: Array.from(
                                                      {
                                                        length: 20,
                                                      },
                                                      (_, index) =>
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_2__.CustomLink,
                                                          {
                                                            to: "/casino-int/slots",
                                                            className:
                                                              "text-decoration-none",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "casino-game-box",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "img",
                                                                      {
                                                                        src: `/icon/game-${
                                                                          (index %
                                                                            20) +
                                                                          1
                                                                        }.gif`,
                                                                        alt: `Casino Provider ${
                                                                          index +
                                                                          1
                                                                        }`,
                                                                        className:
                                                                          "casino-game-image",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 695,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 694,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                          },
                                                          index,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 689,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        )
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 687,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 686,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            )
                                          : sportId === "888"
                                          ? /*#__PURE__*/
                                            // Home (888) - Show homepage categories (12 max)
                                            (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "div",
                                              {
                                                className: "mb-2",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "casino-games-scroll",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                      _CasinoList_CasinoListItem__WEBPACK_IMPORTED_MODULE_5__[
                                                        "default"
                                                      ],
                                                      {},
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 709,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 708,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 707,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            )
                                          : null,
                                    },
                                    void 0,
                                    false
                                  ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 493,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 492,
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
                  lineNumber: 369,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(MatchList, "6ZhNqq7kcOd8xKZprmRDf3fDtE8=", false, function () {
          return [
            react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,
          ];
        });
        _c = MatchList;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MatchList;
        // <div className='card-content'>
        //   <table className='table coupon-table'>
        //     <thead>
        //       <tr>
        //         <th style={{ width: '63%' }}>Game</th>
        //         <th colSpan={2}>1</th>
        //         <th colSpan={2}>X</th>
        //         <th colSpan={2}>2</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {matchList.map((match: LMatch, index: number) => {
        //         // Try to get odds from externalData first, then fallback to markets
        //         const externalOdds = getOddsFromExternalData(match);
        //         const marketOdds = getOddsFromMarkets(match);

        //         // Use external data if available, otherwise use market data
        //         const odds1 = externalOdds.odds1.back !== '-' ? externalOdds.odds1 : marketOdds.odds1;
        //         const oddsX = externalOdds.oddsX.back !== '-' ? externalOdds.oddsX : marketOdds.oddsX;
        //         const odds2 = externalOdds.odds2.back !== '-' ? externalOdds.odds2 : marketOdds.odds2;

        //         return (
        //           <tr key={`${match.matchId}_${index}`}>
        //             <td>
        //               <div className='game-name'>
        //                 <a
        //                   onClick={() => currentMatch(match)}
        //                   className='text-dark'
        //                   href={undefined}
        //                 >
        //                   {match.name || match.ename} / {moment(match.matchDateTime).format(dateFormat)}
        //                 </a>
        //               </div>
        //               <div className='game-icons'>
        //                 {/* In-play indicator */}
        //                 {(match.inPlay ||
        //                   match.iplay ||
        //                   new Date(match.matchDateTime).getTime() < new Date().getTime()) && (
        //                   <span className='game-icon'>
        //                     <span className='active' />
        //                   </span>
        //                 )}

        //                 {/* TV icon - show if tv flag is true */}
        //                 {match.tv === true && (
        //                   <span className='game-icon'>
        //                     <i className='fas fa-tv v-m icon-tv' />
        //                   </span>
        //                 )}

        //                 {/* Fancy icon - show if f flag is true */}
        //                 {(match.f === true || match.isFancy === true) && (
        //                   <span className='game-icon'>
        //                     <img
        //                       src='/assets/images/icons/ic_fancy.png'
        //                       className='fancy-icon'
        //                       alt='Fancy'
        //                     />
        //                   </span>
        //                 )}

        //                 {/* Bookmaker icon - show if bm flag is true */}
        //                 {(match.bm === true || match.isBookMaker === true) && (
        //                   <span className='game-icon'>
        //                     <img
        //                       src='/assets/images/icons/ic_bm.png'
        //                       className='bookmaker-icon'
        //                       alt='Bookmaker'
        //                     />
        //                   </span>
        //                 )}
        //               </div>
        //             </td>

        //             {/* 1 Odds */}
        //             <td className="back-1">
        //               <button className="back" disabled={odds1.back === '-'}>
        //                 <span className="odd">{odds1.back}</span>
        //               </button>
        //             </td>
        //             <td className="lay-1">
        //               <button className="lay" disabled={odds1.lay === '-'}>
        //                 <span className="odd">{odds1.lay}</span>
        //               </button>
        //             </td>

        //             {/* X Odds */}
        //             <td className="back-x">
        //               <button className="back" disabled={oddsX.back === '-'}>
        //                 <span className="odd">{oddsX.back}</span>
        //               </button>
        //             </td>
        //             <td className="lay-x">
        //               <button className="lay" disabled={oddsX.lay === '-'}>
        //                 <span className="odd">{oddsX.lay}</span>
        //               </button>
        //             </td>

        //             {/* 2 Odds */}
        //             <td className="back-2">
        //               <button className="back" disabled={odds2.back === '-'}>
        //                 <span className="odd">{odds2.back}</span>
        //               </button>
        //             </td>
        //             <td className="lay-2">
        //               <button className="lay" disabled={odds2.lay === '-'}>
        //                 <span className="odd">{odds2.lay}</span>
        //               </button>
        //             </td>
        //           </tr>
        //         )
        //       })}
        //     </tbody>
        //   </table>
        // </div>
        var _c;
        __webpack_require__.$Refresh$.register(_c, "MatchList");

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
//# sourceMappingURL=src_pages_dashboard_dashboard_tsx.chunk.js.map


