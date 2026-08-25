"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  [
    "src_pages_CasinoList_component__common_limitinfo_tsx-src_pages_odds_components_my-bet_compone-cafa81",
  ],
  {
    /***/ "./src/models/IBet.ts":
      /*!****************************!*\
  !*** ./src/models/IBet.ts ***!
  \****************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ IBetOn: () => /* binding */ IBetOn,
          /* harmony export */ IBetType: () => /* binding */ IBetType,
          /* harmony export */
        });
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        let IBetType = /*#__PURE__*/ (function (IBetType) {
          IBetType["Match"] = "match";
          IBetType["UnMatch"] = "unmatch";
          return IBetType;
        })({});
        let IBetOn = /*#__PURE__*/ (function (IBetOn) {
          IBetOn["FANCY"] = "FANCY";
          IBetOn["MATCH_ODDS"] = "MATCH_ODDS";
          IBetOn["BOOKMAKER"] = "BOOKMAKER";
          IBetOn["CASINO"] = "CASINO";
          IBetOn["CASINOFANCY"] = "CASINOFANCY";
          return IBetOn;
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

    /***/ "./src/pages/CasinoList/component/_common/limitinfo.tsx":
      /*!**************************************************************!*\
  !*** ./src/pages/CasinoList/component/_common/limitinfo.tsx ***!
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/CasinoList/component/_common/limitinfo.tsx";

        const LimitInfo = (props) => {
          const { nameString, min, max, clsName } = props;
          const clsNameFinal = clsName ? "text-right" : "tx-left";
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
            "div",
            {
              className: `info-block ${clsNameFinal}`,
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                  "a",
                  {
                    href: "",
                    "data-toggle": "collapse",
                    "data-target": `#min-max-info${nameString.replace(
                      " ",
                      ""
                    )}`,
                    "aria-expanded": "false",
                    className: "info-icon collapsed",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                      "i",
                      {
                        className: "fas fa-info-circle m-l-10",
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
                    lineNumber: 7,
                    columnNumber: 5,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                  "div",
                  {
                    id: `min-max-info${nameString.replace(" ", "")}`,
                    className: "min-max-info collapse",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                        "span",
                        {
                          className: "m-r-5",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                              "b",
                              {
                                children: "Min:",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 18,
                                columnNumber: 9,
                              },
                              undefined
                            ),
                            min,
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 17,
                          columnNumber: 7,
                        },
                        undefined
                      ),
                      " ",
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                        "span",
                        {
                          className: "m-r-5",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                              "b",
                              {
                                children: "Max:",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 22,
                                columnNumber: 9,
                              },
                              undefined
                            ),
                            max,
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
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 16,
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
              lineNumber: 6,
              columnNumber: 12,
            },
            undefined
          );
        };
        _c = LimitInfo;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            LimitInfo
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "LimitInfo");
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

    /***/ "./src/pages/odds/components/my-bet.component.tsx":
      /*!********************************************************!*\
  !*** ./src/pages/odds/components/my-bet.component.tsx ***!
  \********************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../models/User */ "./src/models/User.ts"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _services_bet_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../services/bet.service */ "./src/services/bet.service.ts"
          );
        /* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../utils/helper */ "./src/utils/helper.ts"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _redux_actions_casino_casinoSlice__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../../redux/actions/casino/casinoSlice */ "./src/redux/actions/casino/casinoSlice.ts"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/my-bet.component.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const MyBetComponent = ({ selectedUserId, onUserChange } = {}) => {
          _s();
          const [getMyAllBet, setMyAllBet] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
          const [bettingUsers, setBettingUsers] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
          const [currentSelectedUserId, setCurrentSelectedUserId] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
          const getPlaceBet = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.selectPlaceBet
          );
          const getCurrentMatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_6__.selectCurrentMatch
          );
          const getCasinoCurrentMatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(
            _redux_actions_casino_casinoSlice__WEBPACK_IMPORTED_MODULE_11__.selectCasinoCurrentMatch
          );
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__.selectUserData
          );
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_2__.useWebsocketUser)();
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();
          const [betRefresh, setRefreshStatus] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
          const location = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useLocation)();
          const prevMatchId =
            react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null); // Move useRef outside useEffect

          // âœ… NEW: Fetch betting users for admin dropdown
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            console.log("ðŸ” Checking betting users fetch conditions:", {
              isAdmin:
                userState.user.role !==
                _models_User__WEBPACK_IMPORTED_MODULE_3__.RoleType.user,
              matchId:
                getCurrentMatch === null || getCurrentMatch === void 0
                  ? void 0
                  : getCurrentMatch.matchId,
              userRole: userState.user.role,
            });
            if (
              userState.user.role !==
                _models_User__WEBPACK_IMPORTED_MODULE_3__.RoleType.user &&
              getCurrentMatch !== null &&
              getCurrentMatch !== void 0 &&
              getCurrentMatch.matchId
            ) {
              console.log(
                "ðŸ”„ Fetching betting users for match:",
                getCurrentMatch.matchId
              );
              _services_bet_service__WEBPACK_IMPORTED_MODULE_8__["default"]
                .getMatchBettingUsers(getCurrentMatch.matchId)
                .then((response) => {
                  console.log("ðŸ“Š Betting users API response:", response.data);
                  if (response.data && response.data.data) {
                    const users = response.data.data.users || [];
                    console.log("ðŸ‘¥ Setting betting users:", users);
                    setBettingUsers(users);
                  }
                })
                .catch((error) => {
                  console.error("âŒ Error fetching betting users:", error);
                });
            }
          }, [
            getCurrentMatch === null || getCurrentMatch === void 0
              ? void 0
              : getCurrentMatch.matchId,
            userState.user.role,
          ]);

          // âœ… NEW: Handle external selectedUserId prop changes
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            if (selectedUserId !== undefined) {
              setCurrentSelectedUserId(selectedUserId);
            }
          }, [selectedUserId]);

          // Throttle bet refreshes to avoid constant DOM churn and network polling
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            if (!(getCurrentMatch !== null && getCurrentMatch !== void 0 && getCurrentMatch.matchId)) return;
            const pnlRefreshInterval = setInterval(() => {
              setRefreshStatus((prev) => !prev);
            }, 20000);

            return () => {
              clearInterval(pnlRefreshInterval);
            };
          }, [getCurrentMatch === null || getCurrentMatch === void 0 ? void 0 : getCurrentMatch.matchId]);
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            if (getCurrentMatch && getCurrentMatch.matchId) {
              const dataMatchId =
                getCurrentMatch &&
                getCurrentMatch.matchId &&
                location.pathname.includes("/odds")
                  ? getCurrentMatch.matchId
                  : getCasinoCurrentMatch && getCasinoCurrentMatch.match_id
                  ? getCasinoCurrentMatch.match_id
                  : 0;

              // Only clear market book when match actually changes, not on every refresh
              if (
                prevMatchId.current !== dataMatchId &&
                prevMatchId.current !== null
              ) {
                dispatch(
                  (0,
                  _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.setBookMarketList)(
                    {}
                  )
                ); // Clear previous match data only when switching matches
                prevMatchId.current = dataMatchId;
              } else if (prevMatchId.current === null) {
                prevMatchId.current = dataMatchId;
              }
              _services_bet_service__WEBPACK_IMPORTED_MODULE_8__["default"]
                .getBets(dataMatchId, currentSelectedUserId || undefined)
                .then((bets) => {
                  if (bets && bets.data && bets.data.data) {
                    // ðŸŽ¯ ENHANCED: Better debugging for all bet types including bookmaker
                    console.log("ðŸŽ² Current bets data:", bets.data.data.bets);
                    const fancyBets = bets.data.data.bets.filter((bet) => {
                      const betOnField = bet.bet_on || bet.betOn;
                      return betOnField === "FANCY";
                    });
                    const matchOddsBets = bets.data.data.bets.filter((bet) => {
                      const betOnField = bet.bet_on || bet.betOn;
                      return betOnField === "MATCH_ODDS";
                    });
                    const bookmakerBets = bets.data.data.bets.filter((bet) => {
                      // Handle both backend field naming (bet_on) and frontend field naming (betOn)
                      const betOnField = bet.bet_on || bet.betOn;
                      return (
                        betOnField === "BOOKMAKER" ||
                        bet.gtype === "match1" ||
                        bet.oddsType === "BM" ||
                        bet.oddsType === "bookMaker" ||
                        (bet.marketName &&
                          bet.marketName.toLowerCase().includes("bookmaker"))
                      );
                    });
                    const casinoBets = bets.data.data.bets.filter((bet) => {
                      const betOnField = bet.bet_on || bet.betOn;
                      return betOnField === "CASINO";
                    });
                    console.log("ðŸ“Š Bet type breakdown:", {
                      fancy: fancyBets.length,
                      matchOdds: matchOddsBets.length,
                      bookmaker: bookmakerBets.length,
                      casino: casinoBets.length,
                      total: bets.data.data.bets.length,
                    });

                    // ðŸŽ¯ DEBUG: Log bookmaker bets specifically
                    if (bookmakerBets.length > 0) {
                      console.log(
                        "ðŸ¦ Bookmaker bets found:",
                        bookmakerBets.map((bet) => ({
                          marketId: bet.marketId,
                          selectionId: bet.selectionId,
                          marketName: bet.marketName,
                          gtype: bet.gtype,
                          betOn: bet.betOn,
                          oddsType: bet.oddsType,
                        }))
                      );
                    }

                    // Set all bets including bookmaker bets
                    setMyAllBet(bets.data.data.bets);
                    dispatch(
                      (0,
                      _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.setbetlist)(
                        bets.data.data.bets
                      )
                    );

                    // ðŸŽ¯ ENHANCED: Better profit list handling with debugging
                    if (bets.data.data.odds_profit) {
                      const profitKeys = Object.keys(
                        bets.data.data.odds_profit
                      );
                      console.log("ðŸ’° Profit list received:", {
                        totalKeys: profitKeys.length,
                        keys: profitKeys.slice(0, 10),
                        // Show first 10 keys
                        sampleValues: profitKeys.slice(0, 5).map((key) => ({
                          key,
                          value: bets.data.data.odds_profit[key],
                        })),
                      });

                      // ðŸŽ¯ ENHANCED: Check for bookmaker market keys with better debugging
                      const bookmakerKeys = profitKeys.filter((key) => {
                        const bet = bets.data.data.bets.find((b) => {
                          var _b$marketId, _b$selectionId;
                          return (
                            key.includes(
                              (_b$marketId = b.marketId) === null ||
                                _b$marketId === void 0
                                ? void 0
                                : _b$marketId.toString()
                            ) &&
                            key.includes(
                              (_b$selectionId = b.selectionId) === null ||
                                _b$selectionId === void 0
                                ? void 0
                                : _b$selectionId.toString()
                            )
                          );
                        });
                        if (bet) {
                          const betOnField = bet.bet_on || bet.betOn;
                          return (
                            bet.gtype === "match1" ||
                            bet.oddsType === "BM" ||
                            bet.oddsType === "bookMaker" ||
                            betOnField === "BOOKMAKER"
                          );
                        }
                        return false;
                      });

                      // âœ… ENHANCED: Debug bookmaker bet and PnL key analysis
                      const matchOddsBets = bets.data.data.bets.filter((b) => {
                        const betOnField = b.bet_on || b.betOn;
                        return betOnField === "MATCH_ODDS";
                      });
                      const bookmakerBets = bets.data.data.bets.filter((b) => {
                        const betOnField = b.bet_on || b.betOn;
                        return (
                          b.gtype === "match1" ||
                          b.oddsType === "BM" ||
                          b.oddsType === "bookMaker" ||
                          betOnField === "BOOKMAKER"
                        );
                      });

                      // âœ… COMPARE: Data format analysis between match odds and bookmaker
                      console.log("ðŸ” DATA FORMAT COMPARISON:");
                      if (matchOddsBets.length > 0) {
                        console.log("ðŸ“Š MATCH ODDS Sample:", {
                          count: matchOddsBets.length,
                          sample: matchOddsBets[0],
                          keys: Object.keys(matchOddsBets[0]),
                          expectedPnLKey: `${matchOddsBets[0].marketId}_${matchOddsBets[0].selectionId}`,
                        });
                      }
                      if (bookmakerBets.length > 0) {
                        console.log("ðŸ¦ BOOKMAKER Sample:", {
                          count: bookmakerBets.length,
                          sample: bookmakerBets[0],
                          keys: Object.keys(bookmakerBets[0]),
                          expectedPnLKey: `${bookmakerBets[0].marketId}_${bookmakerBets[0].selectionId}`,
                        });
                      }
                      const expectedBookmakerKeys = bookmakerBets.map(
                        (bet) => `${bet.marketId}_${bet.selectionId}`
                      );
                      const actualBookmakerKeys = expectedBookmakerKeys.filter(
                        (key) => profitKeys.includes(key)
                      );
                      console.log("ðŸ¦ Bookmaker bet analysis:", {
                        totalBets: bets.data.data.bets.length,
                        bookmakerBets: bookmakerBets.length,
                        totalProfitKeys: profitKeys.length,
                        bookmakerProfitKeys: bookmakerKeys.length,
                        expectedBookmakerKeys,
                        actualBookmakerKeys,
                        missingKeys: expectedBookmakerKeys.filter(
                          (key) => !profitKeys.includes(key)
                        ),
                        sampleBookmakerBets: bookmakerBets
                          .slice(0, 3)
                          .map((b) => ({
                            marketId: b.marketId,
                            selectionId: b.selectionId,
                            gtype: b.gtype,
                            betOn: b.bet_on || b.betOn,
                            oddsType: b.oddsType,
                            expectedKey: `${b.marketId}_${b.selectionId}`,
                            keyExists: profitKeys.includes(
                              `${b.marketId}_${b.selectionId}`
                            ),
                          })),
                      });

                      // âœ… ENHANCED: Analyze profit keys by market type
                      const matchOddsKeys = profitKeys.filter((key) => {
                        const matchOddsBet = matchOddsBets.find((bet) => {
                          var _bet$marketId, _bet$selectionId;
                          return (
                            key.includes(
                              (_bet$marketId = bet.marketId) === null ||
                                _bet$marketId === void 0
                                ? void 0
                                : _bet$marketId.toString()
                            ) &&
                            key.includes(
                              (_bet$selectionId = bet.selectionId) === null ||
                                _bet$selectionId === void 0
                                ? void 0
                                : _bet$selectionId.toString()
                            )
                          );
                        });
                        return !!matchOddsBet;
                      });
                      console.log("ðŸ’° PROFIT KEYS ANALYSIS:", {
                        totalProfitKeys: profitKeys.length,
                        matchOddsKeys: matchOddsKeys.length,
                        bookmakerKeys: bookmakerKeys.length,
                        sampleMatchOddsKeys: matchOddsKeys.slice(0, 3),
                        sampleBookmakerKeys: bookmakerKeys.slice(0, 3),
                        allKeysPattern: profitKeys.slice(0, 10).map((key) => ({
                          key,
                          hasUnderscore: key.includes("_"),
                          isNumeric: /^\d+$/.test(key),
                          value: bets.data.data.odds_profit[key],
                        })),
                      });
                      if (bookmakerKeys.length > 0) {
                        console.log(
                          "ðŸ¦ Bookmaker PnL keys found:",
                          bookmakerKeys.map((key) => ({
                            key,
                            value: bets.data.data.odds_profit[key],
                          }))
                        );
                      } else {
                        console.log(
                          "âš ï¸ No bookmaker PnL keys found in profit data"
                        );
                      }
                      if (matchOddsKeys.length > 0) {
                        console.log(
                          "ðŸ“Š Match odds PnL keys found:",
                          matchOddsKeys.map((key) => ({
                            key,
                            value: bets.data.data.odds_profit[key],
                          }))
                        );
                      }

                      // âœ… ENHANCED: Debug what gets stored in Redux
                      console.log("ðŸ’¾ Storing PnL data in Redux:", {
                        totalKeys: Object.keys(bets.data.data.odds_profit)
                          .length,
                        bookmakerSpecificKeys: Object.keys(
                          bets.data.data.odds_profit
                        ).filter((key) => expectedBookmakerKeys.includes(key)),
                        sampleAllKeys: Object.keys(
                          bets.data.data.odds_profit
                        ).slice(0, 10),
                        bookmakerExpectedKeys: expectedBookmakerKeys,
                      });

                      // Merge with existing profit data instead of replacing to ensure persistence
                      dispatch(
                        (0,
                        _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.setBookMarketList)(
                          bets.data.data.odds_profit
                        )
                      );
                      console.log("âœ… Market book updated with profit data");
                    } else {
                      console.log("âš ï¸ No odds_profit data in API response");
                    }
                    dispatch(
                      (0,
                      _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.setBetCount)(
                        bets.data.data.bets.length
                      )
                    );
                  }
                })
                .catch((e) => {
                  console.log("âŒ Error fetching bets:", e.message);
                  // Don't clear profit data on error
                });
            }
          }, [
            getCurrentMatch,
            getCasinoCurrentMatch,
            betRefresh,
            currentSelectedUserId,
          ]);
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            if (getPlaceBet && getPlaceBet.bet && getPlaceBet.bet.marketId) {
              console.log(
                "ðŸŽ¯ Bet placed successfully, refreshing PnL data in 1 second...",
                {
                  marketId: getPlaceBet.bet.marketId,
                  selectionId: getPlaceBet.bet.selectionId,
                  gtype: getPlaceBet.bet.gtype,
                  isBookmaker:
                    getPlaceBet.bet.gtype === "match1" ||
                    getPlaceBet.bet.bet_on === "BOOKMAKER",
                }
              );

              // âœ… ENHANCED: Add slight delay for bookmaker bets to ensure backend calculation is complete
              const isBookmaker =
                getPlaceBet.bet.gtype === "match1" ||
                getPlaceBet.bet.bet_on === "BOOKMAKER";
              const delay = isBookmaker ? 1500 : 500; // 1.5s for bookmaker, 0.5s for others

              setTimeout(() => {
                console.log(
                  `ðŸ”„ Triggering bet data refresh after ${delay}ms delay`
                );
                setRefreshStatus(betRefresh ? false : true);
              }, delay);
            }
          }, [getPlaceBet.bet]);
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            socketUser.on("placedBet", (bet) => {
              console.log("ðŸ”Œ Socket: Bet placed event received", {
                marketId: bet.marketId,
                selectionId: bet.selectionId,
                gtype: bet.gtype,
                isBookmaker:
                  bet.gtype === "match1" || bet.bet_on === "BOOKMAKER",
              });

              // âœ… ENHANCED: Add delay for bookmaker bets via socket too
              const isBookmaker =
                bet.gtype === "match1" || bet.bet_on === "BOOKMAKER";
              const delay = isBookmaker ? 1500 : 500;
              setTimeout(() => {
                console.log(
                  `ðŸ”„ Socket: Triggering bet refresh after ${delay}ms`
                );
                setRefreshStatus(betRefresh ? false : true);
              }, delay);
            });
            return () => {
              socketUser.off("placedBet");
            };
          }, [getMyAllBet]);
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            socketUser.on("betDelete", ({ betId }) => {
              ///setMyAllBet(getMyAllBet.filter((bet: IBet) => bet._id !== betId))
              setRefreshStatus(betRefresh ? false : true);
              ///dispatch(setBookMarketList({}))
            });
            return () => {
              socketUser.off("betDelete");
            };
          }, [getMyAllBet]);

          // âœ… ENHANCED: Listen for market result declarations to refresh PnL data
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            console.log("ðŸ”Œ Setting up marketResultDeclared socket listener");
            socketUser.on(
              "marketResultDeclared",
              ({ marketId, matchId, selectionId, message }) => {
                console.log(
                  `ðŸŽ¯ Market result declared via socket: ${message}`,
                  {
                    marketId,
                    matchId,
                    selectionId,
                  }
                );
                // Refresh bet data to get updated PnL after result declaration
                setRefreshStatus(betRefresh ? false : true);
                // Clear existing market book data to force refresh
                dispatch(
                  (0,
                  _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.setBookMarketList)(
                    {}
                  )
                );
              }
            );

            // Also listen for general socket connection events
            socketUser.on("connect", () => {
              console.log(
                "ðŸ”Œ Socket connected - ready to receive result notifications"
              );
            });
            socketUser.on("disconnect", () => {
              console.log(
                "ðŸ”Œ Socket disconnected - result notifications may not work"
              );
            });
            return () => {
              socketUser.off("marketResultDeclared");
              socketUser.off("connect");
              socketUser.off("disconnect");
            };
          }, []);

          // âœ… NEW: Handle user selection change
          const handleUserChange = (event) => {
            const selectedUserId = event.target.value;
            setCurrentSelectedUserId(selectedUserId);
            if (onUserChange) {
              onUserChange(selectedUserId);
            }
          };

          // Debug dropdown visibility
          console.log("ðŸŽ¨ Dropdown visibility check:", {
            isAdmin:
              userState.user.role !==
              _models_User__WEBPACK_IMPORTED_MODULE_3__.RoleType.user,
            bettingUsersCount: bettingUsers.length,
            bettingUsers: bettingUsers,
            shouldShowDropdown:
              userState.user.role !==
                _models_User__WEBPACK_IMPORTED_MODULE_3__.RoleType.user &&
              bettingUsers.length > 0,
          });
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
            "div",
            {
              children: [
                userState.user.role !==
                  _models_User__WEBPACK_IMPORTED_MODULE_3__.RoleType.user &&
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                    "div",
                    {
                      className: "mb-3",
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                        "select",
                        {
                          className: "form-control form-control-sm",
                          value: currentSelectedUserId,
                          onChange: handleUserChange,
                          style: {
                            fontSize: "12px",
                          },
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                              "option",
                              {
                                value: "",
                                children: "All Users Combined",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 419,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                            bettingUsers.length === 0 &&
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                "option",
                                {
                                  value: "",
                                  disabled: true,
                                  children: "Loading users...",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 421,
                                  columnNumber: 15,
                                },
                                undefined
                              ),
                            bettingUsers.map((user) =>
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                "option",
                                {
                                  value: user.userId,
                                  children: [
                                    user.userName,
                                    " (",
                                    user.betCount,
                                    " bets, \u20B9",
                                    user.totalStake,
                                    ")",
                                  ],
                                },
                                user.userId,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 424,
                                  columnNumber: 15,
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
                          lineNumber: 413,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 412,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                  "div",
                  {
                    className: "table-responsive-new",
                    style: {
                      height: "200px",
                      overflowY: "scroll",
                    },
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                      "table",
                      {
                        className: "table coupon-table scorall mybet",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                            "thead",
                            {
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                "tr",
                                {
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                      "th",
                                      {
                                        children: " No",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 436,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                    userState.user.role !==
                                      _models_User__WEBPACK_IMPORTED_MODULE_3__
                                        .RoleType.user &&
                                      !currentSelectedUserId &&
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                        "th",
                                        {
                                          children: "Username",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 437,
                                          columnNumber: 81,
                                        },
                                        undefined
                                      ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                      "th",
                                      {
                                        className: "text-left",
                                        children: " Runner / Odds",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 438,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                      "th",
                                      {
                                        children: " Stake",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 439,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                      "th",
                                      {
                                        children: " Rate",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 440,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                    !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                        "th",
                                        {
                                          children: " Place Date",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 441,
                                          columnNumber: 27,
                                        },
                                        undefined
                                      ),
                                    !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                        "th",
                                        {
                                          children: " Match Date",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 442,
                                          columnNumber: 27,
                                        },
                                        undefined
                                      ),
                                    userState.user.role !==
                                      _models_User__WEBPACK_IMPORTED_MODULE_3__
                                        .RoleType.user &&
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                        "th",
                                        {
                                          children: " IP",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 443,
                                          columnNumber: 55,
                                        },
                                        undefined
                                      ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 435,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 434,
                              columnNumber: 9,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                            "tbody",
                            {
                              className: "scorall",
                              children: getMyAllBet.map((bet, index) =>
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                  "tr",
                                  {
                                    className: bet.isBack ? "back" : "lay",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                        "td",
                                        {
                                          className: "no-wrap",
                                          children: [" ", index + 1, " "],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 449,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      userState.user.role !==
                                        _models_User__WEBPACK_IMPORTED_MODULE_3__
                                          .RoleType.user &&
                                        !currentSelectedUserId &&
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                          "td",
                                          {
                                            children: bet.userName,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 450,
                                            columnNumber: 83,
                                          },
                                          undefined
                                        ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                        "td",
                                        {
                                          className: "no-wrap",
                                          children: [
                                            " ",
                                            bet.selectionName,
                                            " /",
                                            " ",
                                            bet.marketName === "Fancy" &&
                                            bet.gtype !== "fancy1"
                                              ? bet.volume
                                              : bet.odds,
                                            " ",
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 451,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                        "td",
                                        {
                                          className: "no-wrap",
                                          children: [" ", bet.stack, " "],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 456,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                        "td",
                                        {
                                          className: "no-wrap text-center",
                                          children: [" ", bet.odds, " "],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 457,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                          "td",
                                          {
                                            className: "no-wrap",
                                            children: [
                                              " ",
                                              moment__WEBPACK_IMPORTED_MODULE_0___default()(
                                                bet.betClickTime
                                              ).format(
                                                _utils_helper__WEBPACK_IMPORTED_MODULE_9__.betDateFormat
                                              ),
                                              " ",
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 459,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                          "td",
                                          {
                                            className: "no-wrap",
                                            children: [
                                              " ",
                                              moment__WEBPACK_IMPORTED_MODULE_0___default()(
                                                bet.createdAt
                                              ).format(
                                                _utils_helper__WEBPACK_IMPORTED_MODULE_9__.betDateFormat
                                              ),
                                              " ",
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 462,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      userState.user.role !==
                                        _models_User__WEBPACK_IMPORTED_MODULE_3__
                                          .RoleType.user &&
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(
                                          "td",
                                          {
                                            className: "no-wrap",
                                            children: [bet.userIp, " "],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 464,
                                            columnNumber: 57,
                                          },
                                          undefined
                                        ),
                                    ],
                                  },
                                  bet._id,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 448,
                                    columnNumber: 13,
                                  },
                                  undefined
                                )
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 446,
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
                        lineNumber: 433,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 432,
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
              lineNumber: 409,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(MyBetComponent, "tK754sKfHjfQUAZaw11XfNnaE9E=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_2__.useWebsocketUser,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch,
            react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useLocation,
          ];
        });
        _c = MyBetComponent;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MyBetComponent;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "MyBetComponent");

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

    /***/ "./src/pages/odds/components/place-bet-box.tsx":
      /*!*****************************************************!*\
  !*** ./src/pages/odds/components/place-bet-box.tsx ***!
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
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var _models_IBet__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../models/IBet */ "./src/models/IBet.ts"
          );
        /* harmony import */ var _redux_actions_bet_bet_action__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/bet.action */ "./src/redux/actions/bet/bet.action.ts"
          );
        /* harmony import */ var _models_IApiStatus__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../models/IApiStatus */ "./src/models/IApiStatus.ts"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var _models_IMarket__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../models/IMarket */ "./src/models/IMarket.ts"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../redux/actions/balance/balanceSlice */ "./src/redux/actions/balance/balanceSlice.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/place-bet-box.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const PlaceBetBox = ({ stake }) => {
          _s();
          var _betObj$odds;
          const [betObj, setBetObj] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const betValues = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.selectBetPopup
          );
          const getPlaceBet = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.selectPlaceBet
          );
          const betCount = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.selectBetCount
          );
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_6__.useWebsocketUser)();
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();

          // âœ… NEW: Check current odds before placing bet to detect changes
          const checkOddsBeforePlacing = async (finalBetObj) => {
            try {
              var _currentOddsResponse$;
              console.log(
                "ðŸ” Fetching current odds to compare with clicked odds...",
                {
                  clickedOdds: finalBetObj.odds,
                  marketId: finalBetObj.marketId,
                  selectionId: finalBetObj.selectionId,
                  gtype: finalBetObj.gtype,
                }
              );

              // Fetch current odds from API
              let currentOddsResponse = null;
              if (
                finalBetObj.gtype === "fancy" ||
                finalBetObj.betOn === "FANCY"
              ) {
                // For fancy markets, get odds from fancy API
                const fancyResponse = await fetch(
                  `${"/api/"}sessions-data/fancy/${
                    finalBetObj.marketId
                  }/${finalBetObj.matchId}`
                );
                if (fancyResponse.ok) {
                  currentOddsResponse = await fancyResponse.json();
                }
              } else {
                // For match odds and bookmaker, get odds from market API
                const marketResponse = await fetch(
                  `${"/api/"}sessions-data/market/${
                    finalBetObj.marketId
                  }/${finalBetObj.matchId}`
                );
                if (marketResponse.ok) {
                  currentOddsResponse = await marketResponse.json();
                }
              }
              if (!currentOddsResponse || currentOddsResponse.error) {
                console.warn(
                  "âš ï¸ Could not fetch current odds, proceeding with bet placement"
                );
                dispatch(
                  (0,
                  _redux_actions_bet_bet_action__WEBPACK_IMPORTED_MODULE_4__.getPlaceBetAction)(
                    finalBetObj
                  )
                );
                return;
              }

              // Find current odds for the selected runner
              let currentOdds = null;
              const runners =
                ((_currentOddsResponse$ = currentOddsResponse.data) === null ||
                _currentOddsResponse$ === void 0
                  ? void 0
                  : _currentOddsResponse$.runners) || [];
              for (const runner of runners) {
                if (
                  runner.selectionId === finalBetObj.selectionId ||
                  runner.id === finalBetObj.selectionId
                ) {
                  if (finalBetObj.isBack) {
                    var _runner$back, _runner$back$;
                    currentOdds = parseFloat(
                      ((_runner$back = runner.back) === null ||
                      _runner$back === void 0
                        ? void 0
                        : (_runner$back$ = _runner$back[0]) === null ||
                          _runner$back$ === void 0
                        ? void 0
                        : _runner$back$.price) ||
                        runner.backPrice1 ||
                        runner.back1 ||
                        0
                    );
                  } else {
                    var _runner$lay, _runner$lay$;
                    currentOdds = parseFloat(
                      ((_runner$lay = runner.lay) === null ||
                      _runner$lay === void 0
                        ? void 0
                        : (_runner$lay$ = _runner$lay[0]) === null ||
                          _runner$lay$ === void 0
                        ? void 0
                        : _runner$lay$.price) ||
                        runner.layPrice1 ||
                        runner.lay1 ||
                        0
                    );
                  }
                  break;
                }
              }
              console.log("ðŸ“Š Odds comparison:", {
                clickedOdds: finalBetObj.odds,
                currentOdds: currentOdds,
                difference: currentOdds
                  ? Math.abs(finalBetObj.odds - currentOdds)
                  : "N/A",
              });

              // Check if odds have changed significantly (more than 0.01 difference)
              if (
                currentOdds &&
                Math.abs(finalBetObj.odds - currentOdds) > 0.01
              ) {
                const confirmMessage = `âš ï¸ Odds have changed!\n\nYou clicked: ${finalBetObj.odds}\nCurrent odds: ${currentOdds}\n\nDo you want to place the bet at current odds?`;
                if (window.confirm(confirmMessage)) {
                  // User accepts current odds, update bet object and place bet
                  finalBetObj.odds = currentOdds;
                  console.log(
                    "âœ… User accepted new odds, placing bet with updated odds:",
                    currentOdds
                  );
                  dispatch(
                    (0,
                    _redux_actions_bet_bet_action__WEBPACK_IMPORTED_MODULE_4__.getPlaceBetAction)(
                      finalBetObj
                    )
                  );
                } else {
                  console.log("âŒ User rejected odds change, bet cancelled");
                  alert("Bet cancelled due to odds change");
                }
              } else {
                // Odds haven't changed significantly, proceed with bet
                console.log("âœ… Odds unchanged, proceeding with bet placement");
                dispatch(
                  (0,
                  _redux_actions_bet_bet_action__WEBPACK_IMPORTED_MODULE_4__.getPlaceBetAction)(
                    finalBetObj
                  )
                );
              }
            } catch (error) {
              console.error("âŒ Error checking odds:", error);
              // If odds check fails, proceed with original bet (don't block user)
              console.log("âš ï¸ Odds check failed, proceeding with original bet");
              dispatch(
                (0,
                _redux_actions_bet_bet_action__WEBPACK_IMPORTED_MODULE_4__.getPlaceBetAction)(
                  finalBetObj
                )
              );
            }
          };
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            setBetObj({
              ...betValues.betData,
              odds:
                typeof betValues.betData.odds === "string"
                  ? parseFloat(betValues.betData.odds)
                  : betValues.betData.odds,
            });
          }, [betValues.betData]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (
              getPlaceBet.status ===
              _models_IApiStatus__WEBPACK_IMPORTED_MODULE_5__.IApiStatus.Done
            ) {
              socketUser.emit("place-bet", getPlaceBet.bet);

              // Calculate and persist PnL data for the placed bet
              const placedBet = getPlaceBet.bet;
              if (placedBet && placedBet.marketId && placedBet.selectionId) {
                const pnlData = calculatePersistentPnl(placedBet);

                // âœ… ENHANCED: Better debugging for bookmaker PnL persistence
                const isBookmakerBet =
                  placedBet.gtype === "match1" ||
                  placedBet.betOn === "BOOKMAKER" ||
                  placedBet.oddsType === "BM";
                console.log("ðŸŽ¯ Bet placed successfully - Details:", {
                  isBookmakerBet,
                  gtype: placedBet.gtype,
                  betOn: placedBet.betOn,
                  oddsType: placedBet.oddsType,
                  marketName: placedBet.marketName,
                  marketId: placedBet.marketId,
                  selectionId: placedBet.selectionId,
                  pnlData,
                  marketKey: Object.keys(pnlData)[0],
                  pnlValue: Object.values(pnlData)[0],
                });

                // Update market book with persistent PnL data
                dispatch(
                  (0,
                  _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.setBookMarketList)(
                    pnlData
                  )
                );
                console.log("âœ… PnL data persisted to Redux store");
              }
              // ðŸ”„ CRITICAL FIX: Immediately refresh user balance and exposure after successful bet placement
              console.log("ðŸ”„ Refreshing user balance after bet placement...");
              _services_user_service__WEBPACK_IMPORTED_MODULE_8__["default"]
                .getUserBalance()
                .then((response) => {
                  if (response.data && response.data.data) {
                    dispatch(
                      (0,
                      _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_9__.setSingleBal)(
                        response.data.data.balance
                      )
                    );
                    dispatch(
                      (0,
                      _redux_actions_balance_balanceSlice__WEBPACK_IMPORTED_MODULE_9__.setExposer)(
                        response.data.data.exposer +
                          (response.data.data.casinoexposer || 0)
                      )
                    );
                    console.log("âœ… User balance and exposure updated:", {
                      balance: response.data.data.balance,
                      exposer: response.data.data.exposer,
                      casinoexposer: response.data.data.casinoexposer,
                      totalExposer:
                        response.data.data.exposer +
                        (response.data.data.casinoexposer || 0),
                    });
                  }
                })
                .catch((error) => {
                  console.error(
                    "âŒ Error refreshing user balance after bet placement:",
                    error
                  );
                });
              // Clear the bet popup after successful placement
              dispatch(
                (0,
                _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.betPopup)(
                  {
                    isOpen: false,
                    betData: {},
                  }
                )
              );
              dispatch(
                (0,
                _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.setBetCount)(
                  betCount + 1
                )
              );
            }
          }, [getPlaceBet.status]);

          // ROBUST: Helper function to determine calculation type based on gtype and market properties
          const getCalculationType = (betValue) => {
            var _betValue$marketName;
            console.log(`ðŸ” Determining calculation type for:`, {
              gtype: betValue.gtype,
              betOn: betValue.betOn,
              oddsType: betValue.oddsType,
              marketName: betValue.marketName,
            });

            // Priority 1: Check gtype (most reliable)
            if (betValue.gtype === "match1") {
              console.log(`âœ… Using BOOKMAKER based on gtype: match1`);
              return "BOOKMAKER";
            } else if (betValue.gtype === "match") {
              console.log(`âœ… Using MATCH_ODDS based on gtype: match`);
              return "MATCH_ODDS";
            } else if (betValue.gtype === "fancy") {
              console.log(`âœ… Using FANCY based on gtype: fancy`);
              return "FANCY";
            }

            // Priority 2: Fallback to betOn and oddsType for legacy compatibility
            if (
              betValue.betOn ===
              _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.FANCY
            ) {
              console.log(`âœ… Using FANCY based on betOn: FANCY`);
              return "FANCY";
            } else if (
              betValue.betOn ===
              _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.BOOKMAKER
            ) {
              console.log(`âœ… Using BOOKMAKER based on betOn: BOOKMAKER`);
              return "BOOKMAKER";
            } else if (
              betValue.oddsType === "bookMaker" ||
              betValue.oddsType === "BM"
            ) {
              console.log(
                `âœ… Using BOOKMAKER based on oddsType: ${betValue.oddsType}`
              );
              return "BOOKMAKER";
            } else if (
              betValue.betOn ===
                _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.MATCH_ODDS ||
              betValue.betOn ===
                _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.CASINO
            ) {
              console.log(
                `âœ… Using MATCH_ODDS based on betOn: ${betValue.betOn}`
              );
              return "MATCH_ODDS";
            }

            // Priority 3: Default based on market name patterns
            const marketName =
              ((_betValue$marketName = betValue.marketName) === null ||
              _betValue$marketName === void 0
                ? void 0
                : _betValue$marketName.toUpperCase()) || "";
            if (
              marketName.includes("BOOKMAKER") ||
              marketName.includes("BM_")
            ) {
              console.log(
                `âœ… Using BOOKMAKER based on market name: ${betValue.marketName}`
              );
              return "BOOKMAKER";
            } else if (
              marketName.includes("FANCY") ||
              marketName.includes("SESSION")
            ) {
              console.log(
                `âœ… Using FANCY based on market name: ${betValue.marketName}`
              );
              return "FANCY";
            }

            // Default: Match odds logic for most markets (OVER_UNDER, MATCH_ODDS, etc.)
            console.log(
              `âœ… Using MATCH_ODDS as default for market: ${betValue.marketName}`
            );
            return "MATCH_ODDS";
          };

          // ROBUST: Calculate PnL and exposure based on market type
          const calculatePnlAndExposureByType = (calculationType, betValue) => {
            let pnl = 0;
            let exposure = 0;
            console.log(
              `ðŸ”„ Calculating PnL and exposure for ${calculationType} market`,
              {
                calculationType,
                isBack: betValue.isBack,
                odds: betValue.odds,
                stack: betValue.stack,
                volume: betValue.volume,
              }
            );
            switch (calculationType) {
              case "BOOKMAKER":
                // Bookmaker logic: Odds are in percentage format (divide by 100)
                if (betValue.isBack) {
                  // Back bet: profit = (odds / 100) Ã— stake, exposure = stake
                  pnl = (betValue.odds / 100) * betValue.stack;
                  exposure = -1 * betValue.stack;
                } else {
                  // Lay bet: profit = stake, liability = (odds / 100) Ã— stake
                  pnl = betValue.stack;
                  exposure = -1 * ((betValue.odds / 100) * betValue.stack);
                }
                break;
              case "FANCY":
                // Fancy odds calculation (volume-based)
                if (betValue.isBack) {
                  // Back bet: profit = (volume Ã— stake) / 100, exposure = stake
                  pnl = (betValue.volume * betValue.stack) / 100;
                  exposure = -betValue.stack;
                } else {
                  // Lay bet: liability = (volume Ã— stake) / 100, profit = stake
                  exposure = -((betValue.volume * betValue.stack) / 100);
                  pnl = betValue.stack;
                }
                break;
              case "MATCH_ODDS":
              default:
                // Match odds logic: Standard decimal odds calculation (exchange style)
                if (betValue.isBack) {
                  // Back bet: profit = (odds - 1) Ã— stake, exposure = stake
                  pnl = (betValue.odds - 1) * betValue.stack;
                  exposure = -1 * betValue.stack;
                } else {
                  // Lay bet: profit = stake, liability = (odds - 1) Ã— stake
                  pnl = betValue.stack;
                  exposure = -1 * ((betValue.odds - 1) * betValue.stack);
                }
                break;
            }
            console.log(
              `âœ… PnL and exposure calculated for ${calculationType}:`,
              {
                pnl,
                exposure,
              }
            );
            return {
              pnl: parseInt(pnl.toFixed()),
              exposure: parseInt(exposure.toFixed()),
            };
          };

          // Calculate persistent PnL data after bet placement - ROBUST: Use dynamic gtype logic
          const calculatePersistentPnl = (placedBet) => {
            const marketKey = `${placedBet.marketId}_${placedBet.selectionId}`;
            let pnlValue = 0;
            console.log(`ðŸ”„ Calculating persistent PnL for market:`, {
              marketKey,
              gtype: placedBet.gtype,
              marketName: placedBet.marketName,
              oddsType: placedBet.oddsType,
              betOn: placedBet.betOn,
              isBack: placedBet.isBack,
              odds: placedBet.odds,
              stack: placedBet.stack,
            });
            const calculationType = getCalculationType(placedBet);
            console.log(
              `ðŸŽ¯ Using calculation type: ${calculationType} for market ${placedBet.marketName}`
            );
            switch (calculationType) {
              case "BOOKMAKER":
                // âœ… ENHANCED: Bookmaker PnL with better debugging
                if (placedBet.isBack) {
                  pnlValue = (placedBet.odds / 100) * placedBet.stack;
                  console.log(
                    `ðŸ“Š Bookmaker back PnL: (${placedBet.odds}/100) Ã— ${placedBet.stack} = ${pnlValue}`
                  );
                } else {
                  pnlValue = -((placedBet.odds / 100) * placedBet.stack);
                  console.log(
                    `ðŸ“Š Bookmaker lay PnL: -((${placedBet.odds}/100) Ã— ${placedBet.stack}) = ${pnlValue}`
                  );
                }
                break;
              case "FANCY":
                // Fancy calculation (match backend)
                if (placedBet.isBack) {
                  pnlValue = (placedBet.volume * placedBet.stack) / 100;
                  console.log(
                    `ðŸ“Š Fancy back PnL: (${placedBet.volume} Ã— ${placedBet.stack})/100 = ${pnlValue}`
                  );
                } else {
                  pnlValue = -((placedBet.volume * placedBet.stack) / 100);
                  console.log(
                    `ðŸ“Š Fancy lay PnL: -((${placedBet.volume} Ã— ${placedBet.stack})/100) = ${pnlValue}`
                  );
                }
                break;
              case "MATCH_ODDS":
              default:
                // âœ… ENHANCED: Match odds PnL with better debugging
                if (placedBet.isBack) {
                  pnlValue = (placedBet.odds - 1) * placedBet.stack;
                  console.log(
                    `ðŸ“Š Match odds back PnL: (${placedBet.odds}-1) Ã— ${placedBet.stack} = ${pnlValue}`
                  );
                } else {
                  pnlValue = -((placedBet.odds - 1) * placedBet.stack);
                  console.log(
                    `ðŸ“Š Match odds lay PnL: -((${placedBet.odds}-1) Ã— ${placedBet.stack}) = ${pnlValue}`
                  );
                }
                break;
            }
            console.log(
              `âœ… Persistent PnL calculated for ${calculationType}: ${pnlValue}`,
              {
                marketKey,
                pnlValue,
              }
            );
            return {
              [marketKey]: pnlValue,
            };
          };
          const reset = () => {
            setBetObj({
              ...betObj,
              stack: 0,
              pnl: 0,
            });
            dispatch(
              (0,
              _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.betPopup)(
                {
                  ...betValues,
                  betData: {
                    ...betValues.betData,
                    stack: 0,
                    pnl: 0,
                  },
                }
              )
            );
          };
          const onStack = (stack) => {
            const betObjItem = {
              ...betObj,
            };
            betObjItem.stack = betObjItem.stack + stack;
            const calPnl = calculatePnlF(betObjItem);
            betObjItem.pnl = calPnl.pnl;
            betObjItem.exposure = calPnl.exposure;
            setBetObj(betObjItem);
            dispatch(
              (0,
              _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.betPopup)(
                {
                  ...betValues,
                  betData: {
                    ...betObjItem,
                  },
                }
              )
            );
          };
          const incrementDecrementOdds = (type = "inc") => {
            const betObjItem = {
              ...betObj,
            };
            if (
              betObjItem.oddsType ===
                _models_IMarket__WEBPACK_IMPORTED_MODULE_7__.OddsType.BM ||
              betObjItem.oddsType ===
                _models_IMarket__WEBPACK_IMPORTED_MODULE_7__.OddsType.F
            ) {
              return true;
            }
            switch (type) {
              case "inc":
                betObjItem.odds = parseFloat(
                  (betObjItem.odds + 0.01).toFixed(4)
                );
                break;
              case "dec":
                betObjItem.odds = parseFloat(
                  (betObjItem.odds - 0.01).toFixed(4)
                );
                break;
            }
            const calPnl = calculatePnlF(betObjItem);
            betObjItem.pnl = calPnl.pnl;
            betObjItem.exposure = calPnl.exposure;
            betObjItem.type =
              betObjItem.odds !== betObjItem.currentMarketOdds
                ? _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetType.UnMatch
                : _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetType.Match;
            dispatch(
              (0,
              _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.betPopup)(
                {
                  ...betValues,
                  betData: {
                    ...betObjItem,
                  },
                }
              )
            );
            setBetObj(betObjItem);
          };
          const calculatePnlF = (betValue) => {
            if (Object.keys(betValue).length === 0) {
              return {
                pnl: 0,
                exposure: 0,
              };
            }
            const calculationType = getCalculationType(betValue);
            console.log(
              `ðŸŽ¯ Calculating PnL for ${calculationType} - gtype: ${betValue.gtype}`
            );

            // Handle special casino conditions
            if (
              betValue.betOn ==
              _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.CASINO
            ) {
              if (betValue.matchId == 33) {
                //// specific condition for cmeter game
                return {
                  pnl: 0,
                  exposure: -50 * betValue.stack * 1.0,
                };
              } else if (betValue.matchId == 9) {
                //// specific condition for tp1day game
                if (betValue.isBack) {
                  return {
                    pnl: parseInt((betValue.odds * betValue.stack).toFixed()),
                    exposure: parseInt((-betValue.stack).toFixed()),
                  };
                } else {
                  return {
                    pnl: parseInt(betValue.stack.toFixed()),
                    exposure: parseInt(
                      (
                        -1 *
                        (betValue.odds * betValue.stack - betValue.stack)
                      ).toFixed()
                    ),
                  };
                }
              } else if (betValue.fancystatus == "yes") {
                //// specific condition for casino fancy
                if (betValue.isBack) {
                  return {
                    pnl: parseInt(
                      ((betValue.volume * betValue.stack) / 100).toFixed()
                    ),
                    exposure: parseInt((-betValue.stack).toFixed()),
                  };
                } else {
                  return {
                    pnl: parseInt(betValue.stack.toFixed()),
                    exposure: parseInt(
                      (-((betValue.volume * betValue.stack) / 100)).toFixed()
                    ),
                  };
                }
              } else {
                // Default casino logic (match odds)
                return calculatePnlAndExposureByType("MATCH_ODDS", betValue);
              }
            }

            // Use robust calculation for all other markets
            return calculatePnlAndExposureByType(calculationType, betValue);
          };
          const onChangeStack = (e) => {
            setBetObj({
              ...betObj,
              stack: parseInt(e.target.value),
            });
          };
          const onBlurStack = () => {
            onStack(0);
          };
          const onSubmit = async (e) => {
            e.preventDefault();

            // ENHANCED VALIDATION: Check market type and status
            console.log("ðŸŽ¯ Bet submission validation starting...", {
              gtype: betObj.gtype,
              oddsType: betObj.oddsType,
              suspended: betObj.suspended,
              betLocked: betObj.betLocked,
              odds: betObj.odds,
            });

            // Check if betting is locked for this market type
            if (betObj.betLocked) {
              alert(
                "Betting is currently locked for this market by the administrator."
              );
              return;
            }

            // CRITICAL: Check if market is suspended due to bet lock or market status
            if (betObj.suspended) {
              alert("This market is currently suspended. Betting not allowed.");
              return;
            }

            // Enhanced validation for different market types
            const isBookmaker =
              betObj.oddsType === "BM" || betObj.gtype === "match1";
            const isFancy =
              betObj.gtype &&
              ["fancy", "meter", "ballrun", "overballno", "session"].includes(
                betObj.gtype.toLowerCase()
              );

            // Validate odds format based on market type
            if (isBookmaker) {
              // Bookmaker: use odds as-is from API (already in correct format)
              if (betObj.odds < 1 || betObj.odds > 10000) {
                alert("Bookmaker odds must be between 1 and 10000.");
                return;
              }
              console.log(
                `ðŸ“Š Bookmaker bet - using odds as-is: ${betObj.odds}`
              );
            } else if (isFancy) {
              // Fancy markets: validate odds range
              if (betObj.odds < 0.01 || betObj.odds > 1000) {
                alert("Fancy odds must be between 0.01 and 1000.");
                return;
              }
              console.log(`ðŸŽ¯ Fancy bet - odds validated: ${betObj.odds}`);
            } else {
              // Match odds: validate decimal range
              if (betObj.odds < 1.01 || betObj.odds > 1000) {
                alert("Match odds must be between 1.01 and 1000.");
                return;
              }
              console.log(`âš½ Match odds bet - odds validated: ${betObj.odds}`);
            }

            // Additional validation: ensure minimum stake
            if (!betObj.stack || betObj.stack <= 0) {
              alert("Please enter a valid stake amount.");
              return;
            }

            // ðŸŽ¯ CRITICAL FIX: Set correct betOn value based on market type before submission
            const finalBetObj = {
              ...betObj,
            };
            if (isBookmaker) {
              finalBetObj.betOn =
                _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.BOOKMAKER;
              console.log(`ðŸŽ¯ Set betOn to 'BOOKMAKER' for bookmaker market`);
            } else if (isFancy) {
              finalBetObj.betOn =
                _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.FANCY;
              console.log(`ðŸŽ¯ Set betOn to 'FANCY' for fancy market`);
            } else {
              finalBetObj.betOn =
                _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.MATCH_ODDS;
              console.log(`ðŸŽ¯ Set betOn to 'MATCH_ODDS' for match odds market`);
            }

            // âœ… NEW: Check if odds have changed since user clicked
            console.log("ðŸ” Checking if odds have changed since click...");
            await checkOddsBeforePlacing(finalBetObj);
          };
          const renderStakeButtons = () => {
            const buttons = [];
            for (let i = 1; i <= 10; i++) {
              const nameKey = `name${i}`;
              const valueKey = `value${i}`;
              if (stake && stake[nameKey] && stake[valueKey]) {
                buttons.push(
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                    "button",
                    {
                      type: "button",
                      onClick: () => onStack(stake[valueKey]),
                      className: "btn  m-l-5 m-b-5",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                          "span",
                          {
                            className: "",
                            style: {
                              color: "green",
                            },
                            children: "+",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 529,
                            columnNumber: 14,
                          },
                          undefined
                        ),
                        stake[nameKey],
                      ],
                    },
                    i,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 523,
                      columnNumber: 11,
                    },
                    undefined
                  )
                );
              }
            }
            return buttons;
          };
          const closeBetPopup = () => {
            dispatch(
              (0,
              _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.betPopup)(
                {
                  ...betValues,
                  isOpen: false,
                  betData: {
                    ...betValues.betData,
                    stack: 0,
                    pnl: 0,
                  },
                }
              )
            );
          };
          const onBackDrop = (e) => {
            e.preventDefault();
            dispatch(
              (0,
              _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.betPopup)(
                {
                  ...betValues,
                  isOpen: false,
                  betData: {
                    ...betValues.betData,
                    stack: 0,
                    pnl: 0,
                  },
                }
              )
            );
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,
            {
              children:
                betValues.isOpen &&
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                        "div",
                        {
                          onClick: onBackDrop,
                          className: "backdrop-custom",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 562,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                        "div",
                        {
                          className: "card m-b-10 place-bet",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                              "div",
                              {
                                className: "card-header",
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                    "h6",
                                    {
                                      className:
                                        "card-title d-inline-block col-10",
                                      children: "Place Bet",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 566,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                    "span",
                                    {
                                      className:
                                        "card-title d-inline-block col-2",
                                      onClick: closeBetPopup,
                                      children: "X",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 567,
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
                                lineNumber: 565,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                              "div",
                              {
                                className: `table-responsive ${
                                  betObj.isBack ? "back" : "lay"
                                }`,
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                  "form",
                                  {
                                    onSubmit: onSubmit,
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                        "table",
                                        {
                                          className:
                                            "coupon-table table table-borderedless",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                              "thead",
                                              {
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                  "tr",
                                                  {
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                        "th",
                                                        {
                                                          style: {
                                                            width: "35%",
                                                            textAlign: "left",
                                                          },
                                                          children: "(Bet for)",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 576,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                        "th",
                                                        {
                                                          style: {
                                                            width: "25%",
                                                            textAlign: "left",
                                                          },
                                                          children: "Odds",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 577,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                        "th",
                                                        {
                                                          style: {
                                                            width: "15%",
                                                            textAlign: "left",
                                                          },
                                                          children: "Stake",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 578,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                        "th",
                                                        {
                                                          style: {
                                                            width: "15%",
                                                            textAlign: "right",
                                                          },
                                                          children: "Profit",
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
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 575,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 574,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                              "tbody",
                                              {
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                    "tr",
                                                    {
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                          "td",
                                                          {
                                                            className:
                                                              "text-center",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                "a",
                                                                {
                                                                  onClick:
                                                                    closeBetPopup,
                                                                  className:
                                                                    "text-danger",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                      "i",
                                                                      {
                                                                        className:
                                                                          "fa fa-times",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 586,
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
                                                                  lineNumber: 585,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              betObj.selectionName,
                                                            ],
                                                          },
                                                          void 0,
                                                          true,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 584,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                          "td",
                                                          {
                                                            className:
                                                              "bet-odds",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        value:
                                                                          parseFloat(
                                                                            betObj ===
                                                                              null ||
                                                                              betObj ===
                                                                                void 0
                                                                              ? void 0
                                                                              : (_betObj$odds =
                                                                                  betObj.odds) ===
                                                                                  null ||
                                                                                _betObj$odds ===
                                                                                  void 0
                                                                              ? void 0
                                                                              : _betObj$odds.toFixed(
                                                                                  4
                                                                                )
                                                                          ) ||
                                                                          "",
                                                                        type: "text",
                                                                        required: true,
                                                                        maxLength: 4,
                                                                        readOnly: true,
                                                                        className:
                                                                          "amountint",
                                                                        style: {
                                                                          width: 60,
                                                                          verticalAlign:
                                                                            "middle",
                                                                        },
                                                                        onChange:
                                                                          () => {},
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 592,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "spinner-buttons input-group-btn btn-group-vertical",
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                              "button",
                                                                              {
                                                                                type: "button",
                                                                                className:
                                                                                  "custom-btn-spinner btn btn-xs btn-default",
                                                                                onClick:
                                                                                  () =>
                                                                                    incrementDecrementOdds(
                                                                                      "inc"
                                                                                    ),
                                                                                children:
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                                    "i",
                                                                                    {
                                                                                      className:
                                                                                        "fa fa-angle-up",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 608,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 603,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                              "button",
                                                                              {
                                                                                type: "button",
                                                                                className:
                                                                                  "custom-btn-spinner btn btn-xs btn-default",
                                                                                onClick:
                                                                                  () =>
                                                                                    incrementDecrementOdds(
                                                                                      "dec"
                                                                                    ),
                                                                                children:
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                                    "i",
                                                                                    {
                                                                                      className:
                                                                                        "fa fa-angle-down",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 615,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 610,
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
                                                                        lineNumber: 602,
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
                                                                  lineNumber: 591,
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
                                                            lineNumber: 590,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                          "td",
                                                          {
                                                            className:
                                                              "bet-stakes",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group bet-stake",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        maxLength: 10,
                                                                        required: true,
                                                                        type: "number",
                                                                        value:
                                                                          betObj.stack ||
                                                                          "",
                                                                        onBlur:
                                                                          onBlurStack,
                                                                        onChange:
                                                                          onChangeStack,
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 622,
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
                                                                  lineNumber: 621,
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
                                                            lineNumber: 620,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                          "td",
                                                          {
                                                            className:
                                                              "text-right bet-profit",
                                                            children:
                                                              betValues.betData
                                                                .pnl,
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 632,
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
                                                      lineNumber: 583,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                    "tr",
                                                    {
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                          "td",
                                                          {
                                                            colSpan: 5,
                                                            className:
                                                              "value-buttons",
                                                            style: {
                                                              padding: 5,
                                                            },
                                                            children:
                                                              renderStakeButtons(),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 635,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 634,
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
                                                lineNumber: 582,
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
                                          lineNumber: 573,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                        "div",
                                        {
                                          className: " bet-button-main",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                              "button",
                                              {
                                                onClick: reset,
                                                type: "button",
                                                // style={{borderRadius:"0px"}}
                                                style: {
                                                  borderRadius: "0px",
                                                },
                                                className:
                                                  "btn  btn-danger w-100 rounded-none",
                                                children: "Reset",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 642,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                              "button",
                                              {
                                                type: "submit",
                                                // style={{borderRadius:"0px"}}
                                                disabled:
                                                  getPlaceBet.status ===
                                                    _models_IApiStatus__WEBPACK_IMPORTED_MODULE_5__
                                                      .IApiStatus.Loading ||
                                                  betObj.betLocked,
                                                className: `btn w-100  ${
                                                  betObj.betLocked
                                                    ? "btn-secondary "
                                                    : "btn-success"
                                                } float-right `,
                                                title: betObj.betLocked
                                                  ? "Betting is locked by administrator"
                                                  : "Place bet",
                                                style: {
                                                  borderRadius: "0px",
                                                },
                                                children: [
                                                  betObj.betLocked
                                                    ? "Locked"
                                                    : "Submit",
                                                  getPlaceBet.status ===
                                                  _models_IApiStatus__WEBPACK_IMPORTED_MODULE_5__
                                                    .IApiStatus.Loading
                                                    ? /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                        "i",
                                                        {
                                                          className:
                                                            "mx-5 fas fa-spinner fa-spin",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 662,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      )
                                                    : betObj.betLocked
                                                    ? /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                                                        "i",
                                                        {
                                                          className:
                                                            "mx-5 fas fa-lock",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 664,
                                                          columnNumber: 23,
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
                                                lineNumber: 651,
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
                                          lineNumber: 641,
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
                                    lineNumber: 572,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 571,
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
                          lineNumber: 564,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true
                ),
            },
            void 0,
            false
          );
        };
        _s(PlaceBetBox, "3596Rfa8htsi+jULY+lWo9mP/mQ=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_6__.useWebsocketUser,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,
          ];
        });
        _c = PlaceBetBox;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PlaceBetBox;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "PlaceBetBox");

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

    /***/ "./src/utils/helper.ts":
      /*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ T10MatchStreamingChannel: () =>
            /* binding */ T10MatchStreamingChannel,
          /* harmony export */ betDateFormat: () => /* binding */ betDateFormat,
          /* harmony export */ calculateTotalNumbersFromString: () =>
            /* binding */ calculateTotalNumbersFromString,
          /* harmony export */ checkoddslength: () =>
            /* binding */ checkoddslength,
          /* harmony export */ dateFormat: () => /* binding */ dateFormat,
          /* harmony export */ nFormatter: () => /* binding */ nFormatter,
          /* harmony export */ replacecardstring: () =>
            /* binding */ replacecardstring,
          /* harmony export */ replacecardstringSuperover: () =>
            /* binding */ replacecardstringSuperover,
          /* harmony export */
        });
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        const nFormatter = (num, digits) => {
          const lookup = [
            {
              value: 1,
              symbol: "",
            },
            {
              value: 1e3,
              symbol: "k",
            },
            {
              value: 1e6,
              symbol: "M",
            },
            {
              value: 1e9,
              symbol: "G",
            },
            {
              value: 1e12,
              symbol: "T",
            },
            {
              value: 1e15,
              symbol: "P",
            },
            {
              value: 1e18,
              symbol: "E",
            },
          ];
          const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
          const item = lookup
            .slice()
            .reverse()
            .find((item) => {
              return num >= item.value;
            });
          return item
            ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
            : "0";
        };
        const dateFormat = "MMMM Do YYYY, h:mm A";
        const betDateFormat = "MMMM Do, h:mm:ss A";
        const checkoddslength =
          react_device_detect__WEBPACK_IMPORTED_MODULE_0__.isMobile ? 1 : 3;
        const calculateTotalNumbersFromString = (inputString) => {
          const letterValues = {
            K: 13,
            Q: 12,
            A: 1,
            J: 11,
          };

          // Define a regular expression to match card values (e.g., "JHH" or "QSS")
          const cardRegex = /[A-Z]+/g;
          const cardMatches = inputString.match(cardRegex);

          // Calculate the total value of cards
          let total = 0;
          if (cardMatches) {
            cardMatches.forEach((card) => {
              for (let i = 0; i < card.length; i++) {
                const value = letterValues[card[i]];
                if (value) {
                  total += value;
                }
              }
            });
          }

          // Use a regular expression to match all numbers in the input string
          const numberRegex = /\d+/g;
          const numberMatches = inputString.match(numberRegex);

          // Calculate the sum of numeric values
          if (numberMatches) {
            const numericTotal = numberMatches.reduce(
              (acc, num) => acc + parseInt(num),
              0
            );
            total += numericTotal;
          }
          return total;
        };
        const replacecardstring = (card) => {
          return card
            .replace("DD", "")
            .replace("CC", "")
            .replace("HH", "")
            .replace("SS", "");
        };
        const replacecardstringSuperover = (card) => {
          return card
            .replace("DD", "")
            .replace("CC", "")
            .replace("HH", "")
            .replace("SS", "")
            .replace("1", "")
            .replace("A", "1")
            .replace("K", "wicket");
        };
        const T10MatchStreamingChannel = {
          "australia t10 v new zealand t10": 1036,
          "india t10 v south africa t10": 1035,
          "pakistan t10 v south africa t10": 1033,
          "bangladesh t10 v sri lanka t10": 1034,
          "england t10 vs india t10": 1035,
          "new zealand t10 v india t10": 1033,
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
//# sourceMappingURL=src_pages_CasinoList_component__common_limitinfo_tsx-src_pages_odds_components_my-bet_compone-cafa81.chunk.js.map

