"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  [
    "src_pages_PreDashboard_PreDashboard_tsx-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000-dd0cc2",
  ],
  {
    /***/ "./src/components/Modal/Modal.jsx":
      /*!****************************************!*\
  !*** ./src/components/Modal/Modal.jsx ***!
  \****************************************/
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
          "/www/wwwroot/Ambani/fair-react-stone/src/components/Modal/Modal.jsx";

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
                  className: `modal-overlay ${
                    open ? "modal-open" : "modal-closed"
                  }`,
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                    "div",
                    {
                      onClick: (e) => e.stopPropagation(),
                      className: `modal-container ${
                        open ? "modal-content-open" : "modal-content-closed"
                      }`,
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                          "button",
                          {
                            onClick: onClose,
                            className: "modal-close-btn",
                            children: "\u2715",
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
                        children,
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 10,
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

    /***/ "./src/pages/PreDashboard/PreDashboard.tsx":
      /*!*************************************************!*\
  !*** ./src/pages/PreDashboard/PreDashboard.tsx ***!
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
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _PreDashboard_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./PreDashboard.css */ "./src/pages/PreDashboard/PreDashboard.css"
          );
        /* harmony import */ var _Rules_RulesModal__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./Rules/RulesModal */ "./src/pages/PreDashboard/Rules/RulesModal.jsx"
          );
        /* harmony import */ var _login_LoginModal__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../login/LoginModal */ "./src/pages/login/LoginModal.jsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! react-redux */ "./node_modules/react-redux/es/index.js"
          );
        /* harmony import */ var _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var _context_webSocket__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../context/webSocket */ "./src/context/webSocket.tsx"
          );
        /* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../services/sports.service */ "./src/services/sports.service.ts"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _models_IMarket__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../models/IMarket */ "./src/models/IMarket.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_13__
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/PreDashboard/PreDashboard.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        //import { fixResizeObserverError } from "../../utils/resizeObserverFix";

        // Add the grouping function from Dashboard

        function groupMatchesBySport(matchList, sportList, sportsCategories) {
          if (!Array.isArray(matchList) || matchList.length === 0) return [];
          const sportIdToName = {};
          sportList.forEach((sport) => {
            if (sport.sportId && sport.name) {
              sportIdToName[sport.sportId] = sport.name;
            }
          });
          // Add fallback from sportsCategories
          sportsCategories.forEach((cat) => {
            if (cat.id && cat.name && !sportIdToName[cat.id]) {
              sportIdToName[cat.id] = cat.name;
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

        // Function to extract odds from externalData
        const extractOddsFromExternalData = (externalData) => {
          if (!externalData || !externalData.section) return null;
          const sections = externalData.section;
          // Sort by sno to ensure correct order (1, X, 2)
          sections.sort((a, b) => a.sno - b.sno);
          const oddsData = [];
          for (const section of sections) {
            const backOdds = section.odds.find((odd) => odd.otype === "back");
            const layOdds = section.odds.find((odd) => odd.otype === "lay");
            oddsData.push(backOdds ? backOdds.odds : "-");
            oddsData.push(layOdds ? layOdds.odds : "-");
          }
          return oddsData;
        };
        const PreDashboard = () => {
          _s();
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useNavigate)();
          const [searchQuery, setSearchQuery] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const location = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation)();
          const [expandedSidebarItems, setExpandedSidebarItems] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const [selectedMatch, setSelectedMatch] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const [currentSport, setCurrentSport] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(88);
          const [showLoginModal, setShowLoginModal] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [showRulesModal, setShowRulesModal] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [isHomeView, setIsHomeView] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

          // Move sportsCategories inside the component as state
          const [sportsCategories, setSportsCategories] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([
            {
              id: 88,
              name: "HOME",
              icon: "home",
              active: true,
              subcategories: ["Featured", "Popular", "Recent"],
            },
            {
              id: 4,
              name: "CRICKET",
              icon: "cricket",
              active: false,
              subcategories: [
                "T20",
                "ODI",
                "Test",
                "IPL",
                "Big Bash",
                "Caribbean Premier League",
              ],
            },
            {
              id: 1,
              name: "FOOTBALL",
              icon: "football",
              active: false,
              subcategories: [
                "Premier League",
                "La Liga",
                "Bundesliga",
                "Serie A",
                "Champions League",
              ],
            },
            {
              id: 2,
              name: "TENNIS",
              icon: "tennis",
              active: false,
              subcategories: [
                "Grand Slams",
                "ATP",
                "WTA",
                "Davis Cup",
                "Fed Cup",
              ],
            },
            {
              id: 6,
              name: "POLITICS",
              icon: "politics",
              active: false,
              subcategories: ["Elections", "Referendums", "Polls"],
            },
            {
              id: 7,
              name: "CASINO",
              icon: "casino",
              active: false,
              subcategories: [
                "Slots",
                "Table Games",
                "Live Casino",
                "Jackpots",
              ],
            },
            {
              id: 9,
              name: "HORSE RACING",
              icon: "horse",
              active: false,
              subcategories: ["Flat Racing", "Jump Racing", "Harness Racing"],
            },
            {
              id: 10,
              name: "GREYHOUND RACING",
              icon: "greyhound",
              active: false,
              subcategories: ["UK Racing", "Irish Racing", "Australian Racing"],
            },
            {
              id: 11,
              name: "BINARY",
              icon: "binary",
              active: false,
              subcategories: ["High/Low", "One Touch", "Range"],
            },
            {
              id: 13,
              name: "BASKETBALL",
              icon: "basketball",
              active: false,
              subcategories: ["NBA", "EuroLeague", "NCAA", "FIBA"],
            },
            {
              id: 14,
              name: "BASEBALL",
              icon: "baseball",
              active: false,
              subcategories: ["MLB", "NPB", "KBO", "Minor Leagues"],
            },
            {
              id: 16,
              name: "VOLLEYBALL",
              icon: "volleyball",
              active: false,
              subcategories: ["FIVB", "European League", "Asian Games"],
            },
            {
              id: 17,
              name: "ICE HOCKEY",
              icon: "rugby",
              active: false,
              subcategories: ["NHL", "KHL", "IIHF", "European Leagues"],
            },
          ]);

          // Add state and hooks from Dashboard
          const [matchList, setMatchList] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const sportListState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_10__.selectSportList
          );
          const navigateCustom = (0,
          _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_7__.useNavigateCustom)();
          const dispatch = (0,
          react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
          const { socket } = (0,
          _context_webSocket__WEBPACK_IMPORTED_MODULE_8__.useWebsocket)();
          const [odds, setOdds] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_12__.selectUserData
          );

          // Fix ResizeObserver loop error
          // useEffect(() => {
          //   const cleanup = fixResizeObserverError();
          //   return cleanup;
          // }, []);

          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            // Automatically trigger HOME sport selection
            handleSportClick(88);
          }, []);

          // Auto-open login modal if query param ?login=1 (or any value)
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            const params = new URLSearchParams(location.search);
            if (params.has("login")) {
              var _window, _window$history;
              setShowLoginModal(true);
              // Clean URL (retain other params if needed later)
              if (
                (_window = window) !== null &&
                _window !== void 0 &&
                (_window$history = _window.history) !== null &&
                _window$history !== void 0 &&
                _window$history.replaceState
              ) {
                window.history.replaceState({}, "", location.pathname);
              }
            }
          }, [location.pathname, location.search]);

          // Add useEffect from Dashboard to fetch matches
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            // Fetch matches for all sports
            console.log(
              `ðŸš€ PreDashboard: Fetching live matches for all sports`
            );
            const allSports =
              react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile
                ? ["88", "1", "2", "4"]
                : ["1", "2", "4", "88"];
            const matchPromises = allSports.map((sport) =>
              _services_sports_service__WEBPACK_IMPORTED_MODULE_9__["default"]
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
                console.log(`âœ… PreDashboard: All sports responses received`);

                // Combine all matches from different sports
                let allMatches = [];
                const initialOddsData = {};
                responses.forEach((res, index) => {
                  var _res$data, _res$data2;
                  const data =
                    ((_res$data = res.data) === null || _res$data === void 0
                      ? void 0
                      : _res$data.data) ||
                    ((_res$data2 = res.data) === null || _res$data2 === void 0
                      ? void 0
                      : _res$data2.sports) ||
                    res.data ||
                    [];
                  const currentSportId = allSports[index];
                  if (Array.isArray(data)) {
                    const sportMatches = data.map((match) => {
                      var _match$eventid, _match$gmid;
                      // Extract odds from externalData if available
                      if (match.externalData) {
                        const extractedOdds = extractOddsFromExternalData(
                          match.externalData
                        );
                        if (extractedOdds && match.externalData.mid) {
                          initialOddsData[match.externalData.mid] =
                            extractedOdds;
                        }
                      }
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
                        matchId: match.matchId || match.eventid || match.gmid,
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
                        isBookMaker: match.hasBookmaker || match.bm || false,
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
                console.log(
                  `ðŸ“Š PreDashboard: Processed ${allMatches.length} matches from all sports`
                );

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
                  `ðŸ“Š PreDashboard: Sorted ${sortedMatches.length} matches (in-play first, then by time)`
                );

                // Set initial odds from externalData
                setOdds((prevOdds) => ({
                  ...prevOdds,
                  ...initialOddsData,
                }));
                const oddsData = {
                  ...odds,
                  ...initialOddsData,
                };
                marketIdsEvent(sortedMatches, oddsData, "joinMarketRoom");
                setMatchList(sortedMatches);
              })
              .catch((error) => {
                console.error(
                  "âŒ PreDashboard: Error fetching all sports matches:",
                  error
                );
                setMatchList([]);
              });
            return () => {
              const oddsData = {
                ...odds,
              };
              // Ensure matchList is an array before calling marketIdsEvent
              if (Array.isArray(matchList)) {
                marketIdsEvent(matchList, oddsData, "leaveMarketRoom");
              }
            };
          }, []); // Empty dependency array to run only on mount

          // Add WebSocket listener from Dashboard
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

          // Add marketIdsEvent function from Dashboard
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
                    // Initialize odds if needed
                  }
                  setTimeout(() => {
                    socket.emit(event, market.marketId);
                  }, 200);
                });
              }
            });
          };

          // Add currentMatch function from Dashboard
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
                  "PreDashboard: No date value provided, using current time"
                );
                return new Date().toISOString();
              }

              // If it's already a string, validate it's a proper ISO string
              if (typeof dateValue === "string") {
                const testDate = new Date(dateValue);
                if (isNaN(testDate.getTime())) {
                  console.warn(
                    "PreDashboard: Invalid date string, using current time:",
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
                    "PreDashboard: Invalid Date object, using current time:",
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
                    "PreDashboard: Could not convert to Date, using current time:",
                    dateValue
                  );
                  return new Date().toISOString();
                }
                return newDate.toISOString();
              } catch (error) {
                console.warn(
                  "PreDashboard: Date conversion error, using current time:",
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
                            ? _models_IMarket__WEBPACK_IMPORTED_MODULE_11__
                                .OddsType.B
                            : market.oddsType === "bookMaker"
                            ? _models_IMarket__WEBPACK_IMPORTED_MODULE_11__
                                .OddsType.BM
                            : market.oddsType === "Fancy"
                            ? _models_IMarket__WEBPACK_IMPORTED_MODULE_11__
                                .OddsType.F
                            : _models_IMarket__WEBPACK_IMPORTED_MODULE_11__
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
            console.log(
              "ðŸŽ¯ PreDashboard: Setting current match:",
              convertedMatch
            );
            dispatch(
              (0,
              _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_10__.setCurrentMatch)(
                convertedMatch
              )
            );

            // Use correct property names for navigation
            const matchIdForNavigation =
              match.matchId || match.gmid || extendedMatch.eventid || match._id;
            navigateCustom.go(`/odds/${matchIdForNavigation}`);
          };

          // Add memoOdds function from Dashboard
          const memoOdds = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            (marketId, matchData) => {
              // First check if we have odds from WebSocket
              if (odds[marketId]) {
                const marketData = odds[marketId];
                return /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                        "div",
                        {
                          className: "odds-cell odds-blue",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                            "span",
                            {
                              className: "new-odd",
                              children:
                                (marketData === null || marketData === void 0
                                  ? void 0
                                  : marketData[0]) || "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 531,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 530,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                        "div",
                        {
                          className: "odds-cell odds-pink",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                            "span",
                            {
                              className: "new-odd",
                              children:
                                (marketData === null || marketData === void 0
                                  ? void 0
                                  : marketData[1]) || "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 538,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 537,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                        "div",
                        {
                          className: "odds-cell odds-blue",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                            "span",
                            {
                              className: "new-odd",
                              children:
                                (marketData === null || marketData === void 0
                                  ? void 0
                                  : marketData[2]) || "-",
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
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 541,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                        "div",
                        {
                          className: "odds-cell odds-pink",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                            "span",
                            {
                              className: "new-odd",
                              children:
                                (marketData === null || marketData === void 0
                                  ? void 0
                                  : marketData[3]) || "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 546,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 545,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                        "div",
                        {
                          className: "odds-cell odds-blue",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                            "span",
                            {
                              className: "new-odd",
                              children:
                                (marketData === null || marketData === void 0
                                  ? void 0
                                  : marketData[4]) || "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 550,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 549,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                        "div",
                        {
                          className: "odds-cell odds-pink",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                            "span",
                            {
                              className: "new-odd",
                              children:
                                (marketData === null || marketData === void 0
                                  ? void 0
                                  : marketData[5]) || "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 554,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 553,
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

              // If no WebSocket odds, check for externalData odds
              if (matchData.externalData) {
                const extractedOdds = extractOddsFromExternalData(
                  matchData.externalData
                );
                if (extractedOdds) {
                  return /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "div",
                          {
                            className: "odds-cell odds-blue",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "span",
                              {
                                className: "new-odd",
                                children: extractedOdds[0] || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 568,
                                columnNumber: 17,
                              },
                              undefined
                            ),
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
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "div",
                          {
                            className: "odds-cell odds-pink",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "span",
                              {
                                className: "new-odd",
                                children: extractedOdds[1] || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 572,
                                columnNumber: 17,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 571,
                            columnNumber: 15,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "div",
                          {
                            className: "odds-cell odds-blue",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "span",
                              {
                                className: "new-odd",
                                children: extractedOdds[2] || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 576,
                                columnNumber: 17,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 575,
                            columnNumber: 15,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "div",
                          {
                            className: "odds-cell odds-pink",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "span",
                              {
                                className: "new-odd",
                                children: extractedOdds[3] || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 580,
                                columnNumber: 17,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 579,
                            columnNumber: 15,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "div",
                          {
                            className: "odds-cell odds-blue",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "span",
                              {
                                className: "new-odd",
                                children: extractedOdds[4] || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 584,
                                columnNumber: 17,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 583,
                            columnNumber: 15,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "div",
                          {
                            className: "odds-cell odds-pink",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "span",
                              {
                                className: "new-odd",
                                children: extractedOdds[5] || "-",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 588,
                                columnNumber: 17,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 587,
                            columnNumber: 15,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true
                  );
                }
              }

              // Fallback if no odds data
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                      "div",
                      {
                        className: "odds-cell odds-blue",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "span",
                          {
                            className: "odd",
                            children: "-",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 600,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 599,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                      "div",
                      {
                        className: "odds-cell odds-pink",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "span",
                          {
                            className: "odd",
                            children: "-",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 603,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 602,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                      "div",
                      {
                        className: "odds-cell odds-blue",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "span",
                          {
                            className: "odd",
                            children: "-",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 606,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 605,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                      "div",
                      {
                        className: "odds-cell odds-blue",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "span",
                          {
                            className: "odd",
                            children: "-",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 609,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 608,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                      "div",
                      {
                        className: "odds-cell odds-pink",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "span",
                          {
                            className: "odd",
                            children: "-",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 612,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 611,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                      "div",
                      {
                        className: "odds-cell odds-blue",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "span",
                          {
                            className: "odd",
                            children: "-",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 615,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 614,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                      "div",
                      {
                        className: "odds-cell odds-pink",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "span",
                          {
                            className: "odd",
                            children: "-",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 618,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 617,
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
          const handleSignup = () => {
            navigate("/signup");
          };
          const handleLogin = () => {
            setShowLoginModal(true);
          };
          const handleRules = () => {
            setShowRulesModal(true);
          };
          const toggleSidebarItem = (itemId) => {
            setExpandedSidebarItems((prev) =>
              prev.includes(itemId)
                ? prev.filter((id) => id !== itemId)
                : [...prev, itemId]
            );
          };
          const handleMatchClick = (matchId) => {
            setSelectedMatch(matchId);
            console.log(`Match clicked: ${matchId}`);
          };

          // Responsive category order state
          const getOrder = () =>
            window.innerWidth <= 768 ||
            react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile
              ? [7, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
              : [3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 7];
          const [categoryOrder, setCategoryOrder] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(getOrder());
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            function updateOrder() {
              setCategoryOrder(getOrder());
            }
            window.addEventListener("resize", updateOrder);
            return () => window.removeEventListener("resize", updateOrder);
          }, []);

          // Accept sportId for navigation
          const handleSportClick = (sportId) => {
            setCurrentSport(sportId);
            setIsHomeView(sportId === 88);
            setSportsCategories((prev) =>
              prev.map((sport) => ({
                ...sport,
                active: sport.id === sportId,
              }))
            );
          };
          const getCurrentSportData = () => {
            return (
              sportsCategories.find((sport) => sport.id === currentSport) ||
              sportsCategories[0]
            );
          };
          const currentSportData = getCurrentSportData();

          // Group matches by sport for display
          const groupedMatches = groupMatchesBySport(
            matchList,
            sportListState.sports,
            sportsCategories
          );
          const filteredGroups =
            currentSport === 88
              ? groupedMatches
              : groupedMatches.filter((g) =>
                  g.matchList.some((m) => Number(m.sportId) === currentSport)
                );
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,
            {
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                  "div",
                  {
                    className: "dashboard-container",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                        "header",
                        {
                          className: "dashboard-header",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                            "div",
                            {
                              className: "fixed-header",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                  "div",
                                  {
                                    className: "header-desktop",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                        "div",
                                        {
                                          className: "header-left",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                            "div",
                                            {
                                              className: "logo-container",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "text-logo logo-image",
                                                  children: "KING777",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 706,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 705,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 704,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                        "div",
                                        {
                                          className: "header-center",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "div",
                                              {
                                                className: "search-container",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "input",
                                                    {
                                                      type: "text",
                                                      placeholder:
                                                        "Search Events",
                                                      className: "search-input",
                                                      value: searchQuery,
                                                      onChange: (e) =>
                                                        setSearchQuery(
                                                          e.target.value
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 716,
                                                      columnNumber: 19,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "span",
                                                    {
                                                      className: "search-icon",
                                                      children: "\uD83D\uDD0D",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 723,
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
                                                lineNumber: 715,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "button",
                                              {
                                                className: "rules-btn",
                                                onClick: handleRules,
                                                children: "RULES",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 725,
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
                                          lineNumber: 714,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                        "div",
                                        {
                                          className: "header-right",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "button",
                                              {
                                                className: "signup-btn",
                                                onClick: handleSignup,
                                                children: "SIGNUP",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 731,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "button",
                                              {
                                                className: "login-btn",
                                                onClick: handleLogin,
                                                children: "LOGIN",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 734,
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
                                          lineNumber: 730,
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
                                    lineNumber: 703,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                  "div",
                                  {
                                    className: "header-mobile",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                        "div",
                                        {
                                          className: "header-top-row",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "div",
                                              {
                                                className: "logo-container",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "text-logo logo-image",
                                                    children: "KING777",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 744,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 743,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "div",
                                              {
                                                className:
                                                  "header-auth-buttons",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "button",
                                                    {
                                                      className: "signup-btn",
                                                      onClick: handleSignup,
                                                      children: "SIGNUP",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 751,
                                                      columnNumber: 19,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "button",
                                                    {
                                                      className: "login-btn",
                                                      onClick: handleLogin,
                                                      children: "LOGIN",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 754,
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
                                                lineNumber: 750,
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
                                          lineNumber: 742,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                        "div",
                                        {
                                          className: "header-bottom-row",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "div",
                                              {
                                                className: "search-container",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "input",
                                                    {
                                                      type: "text",
                                                      placeholder:
                                                        "Search Events",
                                                      className: "search-input",
                                                      value: searchQuery,
                                                      onChange: (e) =>
                                                        setSearchQuery(
                                                          e.target.value
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 762,
                                                      columnNumber: 19,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "span",
                                                    {
                                                      className: "search-icon",
                                                      children: "\uD83D\uDD0D",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 769,
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
                                                lineNumber: 761,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "button",
                                              {
                                                className:
                                                  "rules-btn d-none d-md-block",
                                                onClick: handleRules,
                                                children: "RULES",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 771,
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
                                          lineNumber: 760,
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
                                    lineNumber: 741,
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
                              lineNumber: 701,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 699,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                        "nav",
                        {
                          className: "main-nav",
                          children: sportsCategories.map((sport) =>
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "div",
                              {
                                className: `nav-tab ${
                                  sport.id === currentSport ? "active" : ""
                                }`,
                                onClick: () => handleSportClick(sport.id),
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                    "span",
                                    {
                                      className: "nav-icon",
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                          lineNumber: 788,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 787,
                                      columnNumber: 16,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                    "span",
                                    {
                                      className: "nav-text",
                                      children: sport.name,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 794,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              sport.id,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 782,
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
                          lineNumber: 780,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                        "div",
                        {
                          className: "dashboard-content",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "aside",
                              {
                                className: "sidebar",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                  "div",
                                  {
                                    className: "sidebar-menu",
                                    children: sportsCategories.map((sport) =>
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                        "div",
                                        {
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "div",
                                              {
                                                className: `sidebar-item ${
                                                  sport.id === currentSport
                                                    ? "active"
                                                    : ""
                                                }`,
                                                onClick: () => {
                                                  toggleSidebarItem(sport.id);
                                                  handleSportClick(sport.id);
                                                },
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "span",
                                                    {
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "img",
                                                          {
                                                            src: `/icon/${sport.icon}.png`,
                                                            alt: "Sport Icon",
                                                            className:
                                                              "sidebar-icon-img",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 812,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 811,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "span",
                                                    {
                                                      className: "sidebar-text",
                                                      children: sport.name,
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 818,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "span",
                                                    {
                                                      className: `sidebar-arrow ${
                                                        expandedSidebarItems.includes(
                                                          sport.id
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
                                                      lineNumber: 819,
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
                                                lineNumber: 804,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            expandedSidebarItems.includes(
                                              sport.id
                                            ) &&
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "sidebar-submenu",
                                                  children:
                                                    sport.subcategories.map(
                                                      (subcategory, index) =>
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "sidebar-subitem",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "subitem-text",
                                                                  children:
                                                                    subcategory,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 831,
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
                                                            lineNumber: 830,
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
                                                  lineNumber: 828,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                          ],
                                        },
                                        sport.id,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 803,
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
                                    lineNumber: 801,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 800,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "main",
                              {
                                className: "main-content",
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                    "div",
                                    {
                                      className: "announcement-bar",
                                      children: "\uD83D\uDD0A",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 844,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  currentSport === 88 &&
                                    react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile &&
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                      "div",
                                      {
                                        className: "category-group",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "content-header casino-no-margin",
                                              style: {
                                                marginBottom: 0,
                                              },
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                "div",
                                                {
                                                  className:
                                                    "sport-banner-section",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "sport-banner-wrapper",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "sport-banner",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                "h6",
                                                                {
                                                                  className:
                                                                    "sport-banner-title",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                      "img",
                                                                      {
                                                                        src: "/icon/casino.png",
                                                                        alt: "Casino Icon",
                                                                        className:
                                                                          "sport-banner-icon",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 854,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    "CASINO GAMES",
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 853,
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
                                                            lineNumber: 852,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 851,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 850,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 849,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "casino-games-style mb-2",
                                              children: Array.from(
                                                {
                                                  length: 6,
                                                },
                                                (_, index) =>
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "casino-game-box m-0",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "img",
                                                          {
                                                            src: `/icon/game-${
                                                              index + 1
                                                            }.gif`,
                                                            alt: `Game ${
                                                              index + 1
                                                            }`,
                                                            className:
                                                              "casino-game-image",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 869,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    index,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 868,
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
                                              lineNumber: 866,
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
                                        lineNumber: 848,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  filteredGroups.map(
                                    ({ category, matchList }) =>
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                        "div",
                                        {
                                          className: "category-group",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                              "div",
                                              {
                                                className:
                                                  "content-header" +
                                                  (category.toLowerCase() ===
                                                  "casino"
                                                    ? " casino-no-margin"
                                                    : ""),
                                                style:
                                                  category.toLowerCase() ===
                                                  "casino"
                                                    ? {
                                                        marginBottom: 0,
                                                      }
                                                    : {},
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "sport-banner-section",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "sport-banner-wrapper",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "sport-banner",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                      "h6",
                                                                      {
                                                                        className:
                                                                          "sport-banner-title",
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                              "img",
                                                                              {
                                                                                src: `/icon/${category.toLowerCase()}.png`,
                                                                                alt: "Sport Icon",
                                                                                className:
                                                                                  "sport-banner-icon",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 887,
                                                                                columnNumber: 27,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            category.toUpperCase(),
                                                                          ],
                                                                      },
                                                                      void 0,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 886,
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
                                                                  lineNumber: 885,
                                                                  columnNumber: 23,
                                                                },
                                                                undefined
                                                              ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 884,
                                                            columnNumber: 21,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 883,
                                                      columnNumber: 19,
                                                    },
                                                    undefined
                                                  ),
                                                  category.toLowerCase() !==
                                                    "casino" &&
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "odds-header",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "odds-header-content",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "odds-header-item",
                                                                    children:
                                                                      "1",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 900,
                                                                    columnNumber: 25,
                                                                  },
                                                                  undefined
                                                                ),
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "odds-header-item",
                                                                    children:
                                                                      "x",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 901,
                                                                    columnNumber: 25,
                                                                  },
                                                                  undefined
                                                                ),
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "odds-header-item",
                                                                    children:
                                                                      "2",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 902,
                                                                    columnNumber: 25,
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
                                                              lineNumber: 899,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 898,
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
                                                lineNumber: 882,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            ),
                                            category.toLowerCase() === "casino"
                                              ? /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "casino-games-style mb-2",
                                                    children: Array.from(
                                                      {
                                                        length: 6,
                                                      },
                                                      (_, index) =>
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "casino-game-box m-0",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                "img",
                                                                {
                                                                  src: `/icon/game-${
                                                                    index + 1
                                                                  }.${
                                                                    index %
                                                                      2 ===
                                                                    0
                                                                      ? "gif"
                                                                      : "webp"
                                                                  }`,
                                                                  alt: `Game ${
                                                                    index + 1
                                                                  }`,
                                                                  className:
                                                                    "casino-game-image",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 914,
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
                                                            lineNumber: 913,
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
                                                    lineNumber: 911,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                )
                                              : matchList.map((match) => {
                                                  // Get market ID for this match
                                                  let marketId = null;
                                                  if (
                                                    match.markets &&
                                                    match.markets.length > 0
                                                  ) {
                                                    const matchOddsMarket =
                                                      match.markets.find(
                                                        (m) =>
                                                          m.marketName ===
                                                          "Match Odds"
                                                      );
                                                    marketId = matchOddsMarket
                                                      ? matchOddsMarket.marketId
                                                      : null;
                                                  }

                                                  // Use externalData mid as fallback market ID
                                                  if (
                                                    !marketId &&
                                                    match.externalData &&
                                                    match.externalData.mid
                                                  ) {
                                                    marketId =
                                                      match.externalData.mid;
                                                  }
                                                  return /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "match-row",
                                                      onClick: () =>
                                                        setShowLoginModal(true),
                                                      style: {
                                                        cursor: "pointer",
                                                      },
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "match-info-section",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "match-info",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "team-text",
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                              "h2",
                                                                              {
                                                                                className:
                                                                                  "team-name truncated-text",
                                                                                onClick:
                                                                                  (
                                                                                    e
                                                                                  ) => {
                                                                                    e.stopPropagation();
                                                                                    setShowLoginModal(
                                                                                      true
                                                                                    );
                                                                                  },
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
                                                                                lineNumber: 941,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                                                lineNumber: 948,
                                                                                columnNumber: 31,
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
                                                                        lineNumber: 940,
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
                                                                  lineNumber: 939,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                                            lineNumber: 958,
                                                                            columnNumber: 31,
                                                                          },
                                                                          undefined
                                                                        )
                                                                      : /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "match-date-time",
                                                                            children:
                                                                              [
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                                  "span",
                                                                                  {
                                                                                    children:
                                                                                      moment__WEBPACK_IMPORTED_MODULE_13___default()(
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
                                                                                    lineNumber: 961,
                                                                                    columnNumber: 33,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                                  "span",
                                                                                  {
                                                                                    children:
                                                                                      moment__WEBPACK_IMPORTED_MODULE_13___default()(
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
                                                                                    lineNumber: 964,
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
                                                                            lineNumber: 960,
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
                                                                  lineNumber: 953,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "match-date-replica",
                                                                  children:
                                                                    match.inPlay ||
                                                                    match.iplay
                                                                      ? /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "match-date-time",
                                                                            children:
                                                                              [
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                                  "span",
                                                                                  {
                                                                                    children:
                                                                                      moment__WEBPACK_IMPORTED_MODULE_13___default()(
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
                                                                                    lineNumber: 973,
                                                                                    columnNumber: 33,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                                  "span",
                                                                                  {
                                                                                    children:
                                                                                      moment__WEBPACK_IMPORTED_MODULE_13___default()(
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
                                                                                    lineNumber: 976,
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
                                                                            lineNumber: 972,
                                                                            columnNumber: 31,
                                                                          },
                                                                          undefined
                                                                        )
                                                                      : /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                                            lineNumber: 981,
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
                                                                  lineNumber: 970,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "match-broadcast ",
                                                                  children: [
                                                                    match.tv ===
                                                                      true &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "pre-game-icon",
                                                                          children:
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                                                lineNumber: 987,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 986,
                                                                          columnNumber: 31,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                    (match.f ===
                                                                      true ||
                                                                      match.isFancy ===
                                                                        true) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "pre-game-icon",
                                                                          children:
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                                                lineNumber: 994,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 993,
                                                                          columnNumber: 31,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                    (match.bm ===
                                                                      true ||
                                                                      match.isBookMaker ===
                                                                        true) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "pre-game-icon",
                                                                          children:
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                                                lineNumber: 1005,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 1004,
                                                                          columnNumber: 31,
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
                                                                  lineNumber: 984,
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
                                                            lineNumber: 938,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "match-odds-section",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "odds-grid",
                                                                  children:
                                                                    memoOdds(
                                                                      marketId,
                                                                      match
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 1016,
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
                                                            lineNumber: 1014,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                      ],
                                                    },
                                                    match.matchId,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 937,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  );
                                                }),
                                          ],
                                        },
                                        category,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 881,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      )
                                  ),
                                  currentSport === 88 &&
                                    !react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile &&
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                      "div",
                                      {
                                        className: "category-group",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "content-header casino-no-margin",
                                              style: {
                                                marginBottom: 0,
                                              },
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                "div",
                                                {
                                                  className:
                                                    "sport-banner-section",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "sport-banner-wrapper",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "sport-banner",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                "h6",
                                                                {
                                                                  className:
                                                                    "sport-banner-title",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                      "img",
                                                                      {
                                                                        src: "/icon/casino.png",
                                                                        alt: "Casino Icon",
                                                                        className:
                                                                          "sport-banner-icon",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 1032,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    "CASINO GAMES",
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 1031,
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
                                                            lineNumber: 1030,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 1029,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 1028,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 1027,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "casino-games-style mb-2",
                                              children: Array.from(
                                                {
                                                  length: 6,
                                                },
                                                (_, index) =>
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "casino-game-box m-0",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "img",
                                                          {
                                                            src: `/icon/game-${
                                                              index + 1
                                                            }.gif`,
                                                            alt: `Game ${
                                                              index + 1
                                                            }`,
                                                            className:
                                                              "casino-game-image",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 1047,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    index,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 1046,
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
                                              lineNumber: 1044,
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
                                        lineNumber: 1026,
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
                                lineNumber: 843,
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
                          lineNumber: 799,
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
                    lineNumber: 697,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                  "div",
                  {
                    className: "whatsapp-support-container",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                      "a",
                      {
                        href: "/support/whatsapp",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "whatsapp-support-link",
                        title: "Contact us on WhatsApp",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "img",
                          {
                            src: "/wp_support.png",
                            alt: "WhatsApp Support",
                            className: "whatsapp-support-image",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 1070,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 1063,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 1062,
                    columnNumber: 7,
                  },
                  undefined
                ),
                showLoginModal &&
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                    _login_LoginModal__WEBPACK_IMPORTED_MODULE_3__["default"],
                    {
                      onClose: () => setShowLoginModal(false),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 1080,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                showRulesModal &&
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                    _Rules_RulesModal__WEBPACK_IMPORTED_MODULE_2__["default"],
                    {
                      onClose: () => setShowRulesModal(false),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 1083,
                      columnNumber: 9,
                    },
                    undefined
                  ),
              ],
            },
            void 0,
            true
          );
        };
        _s(PreDashboard, "1NU/MQVtZ3k1hhjWGGeEfQTt4nQ=", false, function () {
          return [
            react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useNavigate,
            react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,
            _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_7__.useNavigateCustom,
            react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,
            _context_webSocket__WEBPACK_IMPORTED_MODULE_8__.useWebsocket,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,
          ];
        });
        _c = PreDashboard;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PreDashboard;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "PreDashboard");

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

    /***/ "./src/pages/PreDashboard/Rules/ReusableAccordian.jsx":
      /*!************************************************************!*\
  !*** ./src/pages/PreDashboard/Rules/ReusableAccordian.jsx ***!
  \************************************************************/
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/PreDashboard/Rules/ReusableAccordian.jsx";

        const ReusableAccordian = ({ items, children }) => {
          // console.log(children);
          if (items.length > 0) {
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
              "div",
              {
                className: "p-2 pb-0 pt-0 ",
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
                        // equal margin between all accordions including last
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
                              backgroundColor: "#C10930",
                              padding: "0",
                              minHeight: "48px",
                              "&:hover": {
                                backgroundColor: "#6D081D",
                              },
                            },
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                              _mui_material__WEBPACK_IMPORTED_MODULE_5__[
                                "default"
                              ],
                              {
                                className: "px-3 text-white",
                                fontWeight: "bold",
                                children: item.title,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 41,
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
                                  className: "border-b border-t p-1",
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
                                      lineNumber: 48,
                                      columnNumber: 19,
                                    },
                                    undefined
                                  ),
                                },
                                i,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 47,
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
                            lineNumber: 45,
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
              lineNumber: 57,
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

    /***/ "./src/pages/PreDashboard/Rules/RulesModal.jsx":
      /*!*****************************************************!*\
  !*** ./src/pages/PreDashboard/Rules/RulesModal.jsx ***!
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
        /* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../components/Modal/Modal */ "./src/components/Modal/Modal.jsx"
          );
        /* harmony import */ var _ReusableAccordian__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./ReusableAccordian */ "./src/pages/PreDashboard/Rules/ReusableAccordian.jsx"
          );
        /* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css"
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/PreDashboard/Rules/RulesModal.jsx";

        const itemArray = [
          {
            title: "Football Fancy",
            content: [
              "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided...",
              "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count.",
              "Tournament Corners - Only corners taken in 90 minutes count.",
              "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count.",
            ],
            defaultExpanded: false,
          },
          {
            title: "Football Fancy",
            content: [
              "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided...",
              "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided...",
            ],
            defaultExpanded: false,
          },
        ];
        const RulesModal = ({ onClose }) => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"],
            {
              open: true,
              onClose: onClose,
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "div",
                {
                  className: "rules-modal-content",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      "div",
                      {
                        className: "rules-modal-header",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "h6",
                            {
                              className: "rules-modal-title",
                              children: "Rules",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 32,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "button",
                            {
                              className: "rules-modal-close-btn",
                              onClick: onClose,
                              children: "\u2715",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 33,
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
                        lineNumber: 31,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      "div",
                      {
                        className: "rules-modal-body",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
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
                            lineNumber: 38,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 37,
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
                  lineNumber: 30,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 5,
            },
            undefined
          );
        };
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

    /***/ "./src/pages/login/LoginModal.jsx":
      /*!****************************************!*\
  !*** ./src/pages/login/LoginModal.jsx ***!
  \****************************************/
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
        /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./login */ "./src/pages/login/login.tsx");
        /* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../components/Modal/Modal */ "./src/components/Modal/Modal.jsx"
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/login/LoginModal.jsx";

        const LoginModal = ({ onClose }) => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
            _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__["default"],
            {
              open: true,
              onClose: onClose,
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                "div",
                {
                  className: "login-modal-content",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      "div",
                      {
                        className: "login-form-section",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                          _login__WEBPACK_IMPORTED_MODULE_1__["default"],
                          {},
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 10,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 9,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      "div",
                      {
                        className: "login-image-section",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                          "img",
                          {
                            src: "/assets/images/logos/log_one.png",
                            className: "login-image",
                            alt: "login",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 13,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 12,
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
                  lineNumber: 8,
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
          );
        };
        _c = LoginModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LoginModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "LoginModal");

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

    /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/PreDashboard/PreDashboard.css":
      /*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/PreDashboard/PreDashboard.css ***!
  \***********************************************************************************************************************************************************************************************************/
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
          `/* PreDashboard.css - Sports Betting Dashboard */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dashboard-container {
  min-height: 100vh;
  background: #f5f6fa;
  font-family: "Arial", sans-serif;
  contain: layout style;
  overflow-x: hidden;
}

/* Fixed Header Styles - matching the image */
.dashboard-header {
  background: white;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  contain: layout style;
  will-change: auto;
}

.fixed-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 2rem;
  background: #fff;

  max-width: 1650px;
  margin: 0 auto;
  position: relative;
}

.header-left {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: start;
  /* background-color: red; */
  position: relative;
}

.logo-image {
  height: 45px;

  width: auto;
  object-fit: contain;
  filter: brightness(1);
  transition: filter 0.2s ease;
  margin-left: 2px;
}

.logo-image:hover {
  filter: brightness(1.1);
}

.header-center {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1 1;
  justify-content: end;
  max-width: 600px;
  margin: 0 -3rem;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 350px;
  height: 40px;
}

.search-input {
  width: 350px;
  height: 40px;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #fff;
  font-size: 0.875rem;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  resize: none;
  min-width: 350px;
  max-width: 350px;
  transform: translateZ(0);
  backface-visibility: hidden;
  contain: layout style;
}

.search-input:focus {
  border-color: #C10930;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(193, 9, 48, 0.1);
  outline: none;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-icon {
  position: absolute;
  right: 0.75rem;
  color: #3b82f6;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rules-btn {
  padding: 0.5rem 1.5rem;
  background: #C10930;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
  white-space: nowrap;
  height: 40px;
  min-width: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 0 #6D081D;
  border-bottom: 3px solid #6D081D;
  flex-shrink: 0;
}

.rules-btn:hover {
  background: #6D081D;
  transform: translateY(-1px);
  border-bottom-color: #C10930;
}

.header-right {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 0 0 auto;
  margin-left: auto;
}

/* Button Styles - matching the image */
.signup-btn {
  padding: 0.5rem 1.5rem;
  background: #374151;
  color: #fff;
  border: 1px solid #C10930;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
  white-space: nowrap;
  min-width: 80px;
  height: 40px;
  flex-shrink: 0;
}

.signup-btn:hover {
  background: #4b5563;
  border-color: #6D081D;
}

.login-btn {
  padding: 0.5rem 1.5rem;
  background: #374151;
  color: #fff;
  border: 1px solid #C10930;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
  white-space: nowrap;
  min-width: 80px;
  height: 40px;
  flex-shrink: 0;
}

.login-btn:hover {
  background: #4b5563;
  border-color: #6D081D;
}



/* WhatsApp Support Image - Bottom Right Corner */
.whatsapp-support-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
}

.whatsapp-support-link {
  display: block;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.whatsapp-support-link:hover {
  transform: scale(1.1);
}

.whatsapp-support-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  animation: blink 2s infinite;
}

/* Blinking animation */
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

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .whatsapp-support-container {
    bottom: 15px;
    right: 15px;
  }
  
  .whatsapp-support-image {
    width: 50px;
    height: 50px;
  }
}

/* Main Navigation Tabs */
.main-nav {
  background: #343435;
  padding: 0px 2rem;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  border-bottom: 1px solid #e5e7eb;
  width: 100%;
  position: relative;
  z-index: 999;
}

.nav-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  min-width: fit-content;
  border-radius: 4px;
}

.nav-tab:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-tab.active {
  background: #c10930;
  color: #fff;
}

.nav-icon {
  font-size: 1rem;
  margin: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon-img {
  width: 2.5rem;
  height: 1rem;
  text-transform: lowercase;
  object-fit: contain;
}

.nav-text {
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  margin: 0;
  text-align: center;
}

/* Dashboard Content Layout */
.dashboard-content {
  display: flex;
  min-height: calc(100vh - 140px);
}

/* Sidebar Styles */
.sidebar {
  width: 220px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  overflow-y: auto;
}

.sidebar-header {
  padding: 0 1.5rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

.sidebar-header h3 {
  color: #374151;
  font-size: 1.1rem;
  font-weight: 600;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
}

.sidebar-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.45rem 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid transparent;
  gap: 0.5rem;
}

.sidebar-item:hover {
  background: #f9fafb;
}

.sidebar-item.active {
  background: #fef2f2;
  border-left-color: #dc2626;
  color: #dc2626;
}

.sidebar-icon-img {
  width: 2.5rem;
  height: 1.25rem;
  object-fit: contain;
}

.sidebar-text {
  flex: 1 1;
  font-size: 0.7rem;
  font-weight: 500;
}

.sidebar-arrow {
  font-size: 0.6rem;
  color: #6b7280;
  transition: transform 0.2s;
}

.sidebar-arrow.expanded {
  transform: rotate(180deg);
}

/* Sidebar Submenu */
.sidebar-submenu {
  background: #f8fafc;
}

.sidebar-subitem {
  padding: 0.5rem 1rem 0.5rem 2rem;
  cursor: pointer;
  transition: background 0.2s;
  border-left: 2px solid transparent;
}

.sidebar-subitem:hover {
  background: #f1f5f9;
  color: #dc2626;
}

.subitem-text {
  font-size: 0.7rem;
  font-weight: 400;
}
.new-odds{
font-weight: 600;
color: #dc2626; 
/* font-size: 12px; */
}
.subitem-text:hover {
  font-size: 0.7rem;
  color: #dc2626;
  font-weight: 400;
}

/* Main Content Styles */
.main-content {
  max-height: 100vh;
    overflow-y: auto;
  flex: 1 1;
  padding: 0.25rem;
  background: #fff;
}

@media (min-width: 768px) {
  .main-content {
    padding: 1rem;
  }

}

/* Announcement Bar */
.announcement-bar {
  margin-bottom: 0.25rem;
  padding: 0.5rem 0.25rem;
  background: #6D081D;
  color: white;

  font-size: 1rem;
}

/* Content Header */
.content-header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .content-header {
    grid-template-columns: 1fr 1fr;
  }
}

/* Sport Banner Section */
.sport-banner-section {
  width: 100%;
}

@media (min-width: 768px) {
  .sport-banner-section {
    width: 100%;
  }
}

.sport-banner-wrapper {
  width: fit-content;
}

.sport-banner {
  background: #c10930;
  color: white;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
}

@media (min-width: 768px) {
  .sport-banner {
    padding-right: 10rem;
  }
}

.sport-banner-title {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 600;
}

.sport-banner-icon {
  width: 0.5rem;
  height: 1rem;
  object-fit: contain;
}

/* Keep the banner icon inside a fixed-size span to avoid expanding the header */
.sport-banner-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px; /* fixed size */
  height: 20px; /* fixed size */
  overflow: hidden;
}

.sport-banner-icon-wrap .sport-banner-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Filter Buttons Container */
.filter-buttons-container {
  padding-left: 7rem;
  margin-bottom: 0.5rem;
  margin-top: 0.25rem;
}

@media (min-width: 768px) {
  .filter-buttons-container {
    padding-left: 7rem;
  }
}

.filter-buttons {
  gap: 0.25rem;
  display: flex;
  align-items: center;
}

/* Filter Buttons */
.filter-buttons {
  display: flex;
  gap: 0.3rem;
}

.filter-btn {
  padding: 0.3rem 1rem;
  background: #fff;
  color: #dc2626;
  border: 1px solid #dc2626;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.75rem;
}

.filter-btn:hover {
  background: #dc2626;
  color: #fff;
}

/* Odds Header */
.odds-header {
  display: none;
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .odds-header {
    display: flex;
  }
}

.odds-header-content {
  display: flex;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
}

.odds-header-item {
  flex: 1 1;
  font-size: 0.75rem;
  text-align: center;
}

/* Matches Container */
.matches-container {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
}

/* Table Header */
.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr 4fr;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  color: #374151;
}

.odds-columns {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.25rem;
  text-align: center;
  font-size: 0.8rem;
}

/* Matches List */
.matches-list {
  max-height: 600px;
  overflow-y: auto;
}

/* Match Row */
.match-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  /* border-bottom: 0.5px solid #e5e7eb; */
}

@media (min-width: 768px) {
  .match-row {
    grid-template-columns: 1fr 1fr;
  }
}

/* Match Info Section */
.match-info-section {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  border-bottom: 1px solid #e5e7eb;
}

@media (min-width: 768px) {
  .match-info-section {
   grid-template-columns: repeat(7, 1fr);
  }
}
@media (max-width: 768px) {
  .match-info-section {
   grid-template-columns: repeat(5, 1fr);
  }
  .match-info {
  display: flex;
  align-items: center;
  height: 100%;
  grid-column: span 2;
}
}

/* Match Info */
.match-info {
  display: flex;
  align-items: center;
  height: 100%;
  grid-column: span 2;
}

@media (min-width: 768px) {
  .match-info {
    grid-column: span 4;
  }
}

.match-link {
  text-decoration: none;
  color: inherit;
  width: 100%;
}

.match-link:hover {
  text-decoration: none;
  color: inherit;
}

.match-details {
  padding: 0 0.5rem;
  gap: 0.25rem;
}

.team-names {
  max-width: 100%;
  font-family: "Titillium Web", sans-serif;
  margin: 0;
  padding: 0;
  color: black;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.75rem;
  font-weight: 600;
}

.league-info {
  font-family: "Titillium Web", sans-serif;
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
  color: #9ca3af;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  font-weight: 300;
}

/* Match Status */
.match-status {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 1;
}

@media (min-width: 768px) {
  .match-status {
    grid-column: span 1;
  }
}

.live-indicator {
  font-weight: 600;
  font-size: 0.75rem;
  font-family: "Titillium Web", sans-serif;
  color: #10b981;
  border: 1px solid #10b981;
  display: inline-block;
  position: relative;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.live-indicator::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background: #10b981;
  width: 0;
  transition: all 0.5s;
}

.live-indicator:hover::after {
  width: 100%;
}

.match-time-display {
  display: flex;
  flex-direction: column;
  background: #f3f4f6;
  font-size: 0.625rem;
  align-items: center;
  padding: 0.5rem;
  line-height: 1.25;
}

@media (min-width: 768px) {
  .match-time-display {
    font-size: 0.75rem;
  }
}

.date {
  color: #ef4444;
  font-family: "Titillium Web", sans-serif;
  font-size: 0.5625rem;
  font-weight: 600;
}

@media (min-width: 768px) {
  .date {
    font-size: 0.75rem;
  }
}

.time {
  color: #ef4444;
  font-family: "Titillium Web", sans-serif;
  font-size: 0.5625rem;
}

@media (min-width: 768px) {
  .time {
    font-size: 0.75rem;
  }
}

/* Match Time */
.match-time {
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-column: span 1;
}

@media (min-width: 768px) {
  .match-time {
    grid-column: span 1;
  }
}

.empty-time {
  font-weight: 600;
}

.live-time-display {
  display: flex;
  flex-direction: column;
  background: #e5e7eb;
  font-size: 0.75rem;
  align-items: center;
  padding: 0.25rem;
  line-height: 1.25;
}

.live-date {
  font-size: 0.5625rem;
  color: #ef4444;
}

.live-time {
  font-size: 0.5625rem;
  color: #ef4444;
}

/* Match Icons */
.match-icons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* padding: 0 0.5rem; */
  grid-column: span 1;
}

@media (min-width: 768px) {
  .match-icons {
    grid-column: span 1;
  }
}


.pre-game-icon {
  width: 20px;
  text-align: center;
  margin-top: 2px;
  display: inline-block;
}
/* Match Odds Section */
.match-odds-section {
  grid-column: span 1;
}

/* Odds Grid */
.odds-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  height: 100%;
}

/* Odds Cell */
.odds-cell {
  grid-column: span 1;
  border: 1px solid #e5e7eb;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0;
  font-size: 12px;
}

@media (min-width: 768px) {
  .odds-cell {
    padding: 0.25rem 0;
  }
}

.odds-blue {
  background: #66d1ff;
}

.odds-pink {
  background: #ffb4c5;
}

/* Bet Button Price */
.bet-button-price {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.odds-main {
  font-size: 0.75rem;
  font-weight: 600;
}

.odds-sub {
  font-size: 0.75rem;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .sidebar {
    width: 240px;
  }

  .search-input {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .dashboard-header {
    width: 100%;
    background-color: #333;
    color: white;
    padding: 10px 0;
  }

  .filter-btn {
    padding: 0.1rem 0.8rem;
    background: #fff;
    color: #dc2626;
    border: 1px solid #dc2626;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .header-left {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .search-input {
    width: 100%;
  }

  .dashboard-content {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    max-height: 200px;
  }

  .table-header,
  .match-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .match-odds {
    grid-template-columns: repeat(6, 1fr);
  }

  .odds-columns {
    grid-template-columns: repeat(6, 1fr);
  }

  .match-row {
    padding: 0.35rem 0.5rem;
    gap: 0.25rem;
  }

  .main-nav {
    padding: 0.5rem 1rem;
  }
}

/* Responsive styles for fixed header */
@media (max-width: 768px) {
  .dashboard-container {
    min-height: 100vh;
    background: #333;
    font-family: "Arial", sans-serif;
    contain: layout style;
    overflow-x: hidden;
  }

  .fixed-header {
    flex-direction: column;
    background-color: #333;
    gap: 1rem;
    padding: 1rem;
    min-height: auto;
    /* background:red; */
  }

  .header-left {
    justify-content: start;
  }

  .header-center {
    flex-direction: column;
    gap: 0.75rem;
    max-width: 100%;
  }

  .search-input {
    width: 100%;
    max-width: 300px;
  }

  .header-right {
    justify-content: center;
  }

  .logo-main {
    font-size: 1.25rem;
  }

  .logo-sub {
    font-size: 0.8rem;
  }

  .signup-btn,
  .login-btn {
    min-width: 70px;
    height: 35px;
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }

  .rules-btn {
    height: 35px;
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
}

/* Rules Modal Styles */
.rules-modal-btn {
  background: #C10930;
  color: white;
  padding: 0.4rem 1.1rem;
  border: none;
  border-radius: 4px;
  border-bottom: 4px solid #6D081D;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: 0.875rem;
}

.rules-modal-btn:hover {
  background: #6D081D;
  border-bottom-color: #C10930;
}

.rules-modal-content {
  margin: 0;
  padding: 0;
  border-radius: 8px;
  width: 100%;
  background: white;
  max-width: 600px;
  min-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  contain: layout style;
  transform: translateZ(0);
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {

  .rules-modal-content {
    max-width: 95vw;
    min-width: 95vw;
    margin: 0 1rem;
  }

  .modal-overlay {
    padding-top: 1rem;
  }
}

.rules-modal-header {
  background: #343435;
  padding: 1rem 1.5rem;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  position: relative;
}

.rules-modal-title {
  color: white;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.rules-modal-close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.rules-modal-close-btn:hover {
  color: #f0f0f0;
  transform: scale(1.1);
}

.rules-modal-body {
  padding: 1rem;
  background: white;
}

/* Ensure proper spacing between accordion items */
.accordion-container .MuiAccordion-root {
  margin-bottom: 0.5rem;
}

.accordion-container .MuiAccordion-root:last-child {
  margin-bottom: 0;
}

/* Accordion Styles */
.accordion-container {
  padding: 0;
  padding-bottom: 0;
  padding-top: 0;
}

.accordion-title {
  padding: 0.75rem 1rem;
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

/* Custom styling for the expand icon */
.accordion-container .MuiAccordionSummary-expandIconWrapper {
  color: white;
  transition: transform 0.2s ease;
}

.accordion-container .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
  transform: rotate(180deg);
}

.accordion-content-item {
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 1rem;
  line-height: 1.5;
}

.accordion-content-item:last-child {
  border-bottom: none;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2rem;
  z-index: 1000;
}

.modal-open {
  visibility: visible;
  background: rgba(0, 0, 0, 0.4);
}

.modal-closed {
  visibility: hidden;
  background: transparent;
}

.modal-container {
  background: transparent;
  border-radius: 8px;
  padding: 0;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-content-open {
  transform: scale(1);
  opacity: 1;
}

.modal-content-closed {
  transform: scale(1.25);
  opacity: 0;
}

.modal-close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.modal-close-btn:hover {
  color: #333;
}

/* Login Modal Styles */
.login-modal-content {
  display: flex;
  flex-direction: column;
  background: #075099;
  justify-content: center;
  margin-top: 0.75rem;
  align-items: stretch;
  width: 100%;
}

@media (min-width: 768px) {
  .login-modal-content {
    flex-direction: row;
  }
}

.login-form-section {
  width: 100%;
  display: flex;
  flex: 1 1;
}

@media (min-width: 768px) {
  .login-form-section {
    flex: 1 1;
  }
}

.login-image-section {
  display: none;
  flex: 1 1;
}

@media (min-width: 768px) {
  .login-image-section {
    display: flex;
    flex: 1 1;
  }
}

.login-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Simple Header Styles */
.simple-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  min-height: 80px;
}






/* Original desktop styles */
.dashboard-header {
  width: 100%;
  background-color: #fff;
  color: white;
  padding: 10px 0;
}

.fixed-header {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  background-color: #fff;
}

.header-desktop {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-mobile {
  display: none;
  background-color: #333;
}

.header-left,
.header-center,
.header-right {
  display: flex;
  align-items: center;
}

.header-center {
  flex-grow: 1;
  max-width: 600px;
  margin: 0 20px;
}

.search-container {
  position: relative;
  flex-grow: 1;
  margin-right: 10px;
}

.search-input {
  width: 100%;
  padding: 8px 30px 8px 10px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  border: 1px solid #ccc;
  color: white;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
}

.signup-btn,
.login-btn,
.rules-btn {
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  white-space: nowrap;
}

.signup-btn {
  background-color: #374151;
  border: 1px solid #6D081D;
  color: white;
}

.login-btn {
  background-color: #374151;
  border: 1px solid #6D081D;
  color: white;
}

.rules-btn {
  background-color: #C10930;
  color: white;
}

/* Mobile styles */
@media (max-width: 768px) {
  .header-desktop {
    display: none;
  }

  .header-mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .header-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px 0;
  }

  .header-bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 0 5px;
  }

  .header-auth-buttons {
    display: flex;
    gap: 10px;
  }

  .search-container {
    flex-grow: 1;
    margin-right: 10px;
  }
}

@media (max-width: 768px) {
  .dashboard-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    background: #333;
    /* Consistent dark background */
    color: white;
    padding: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .fixed-header {
    position: relative;
    padding: 0;
    background: transparent;
  }

  .header-mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #333;
  }

  .header-top-row,
  .header-bottom-row {
    padding: 8px 15px;
    background: #333;
  }

  .header-top-row {
    border-bottom: 1px solid #444;
  }

  /* Ensure logo stays left-aligned */
  .logo-container {
    justify-content: flex-start !important;
    margin-right: auto;
  }

  /* Make buttons more visible */
  .signup-btn,
  .login-btn {
    background: #C10930;
    border: none;
    color: white;
  }

  /* Fix search input styling */
  .search-input {
    background: #444;
    color: white;
    border: 1px solid #555;
  }

  .search-icon {
    color: #aaa;
  }
}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/pages/PreDashboard/PreDashboard.css"],
            names: [],
            mappings:
              "AAAA,gDAAgD;;AAEhD;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,6CAA6C;AAC7C;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gCAAgC;EAChC,gBAAgB;EAChB,MAAM;EACN,aAAa;EACb,WAAW;EACX,yCAAyC;EACzC,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;;EAEhB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,YAAY;;EAEZ,WAAW;EACX,mBAAmB;EACnB,qBAAqB;EACrB,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,SAAO;EACP,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,wCAAwC;EACxC,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,wBAAwB;EACxB,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,yEAAyE;EACzE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,cAAc;EACd,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,yDAAyD;EACzD,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA,uCAAuC;AACvC;EACE,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;;;AAIA,iDAAiD;AACjD;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,iDAAiD;EACjD,4BAA4B;AAC9B;;AAEA,uBAAuB;AACvB;EACE;IACE,UAAU;IACV,mBAAmB;EACrB;EACA;IACE,YAAY;IACZ,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF;;AAEA,sCAAsC;AACtC;EACE;IACE,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA,yBAAyB;AACzB;EACE,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,gCAAgC;EAChC,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;EACpB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,SAAS;EACT,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,SAAS;EACT,kBAAkB;AACpB;;AAEA,6BAA6B;AAC7B;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA,mBAAmB;AACnB;EACE,YAAY;EACZ,gBAAgB;EAChB,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;EACvB,eAAe;EACf,oBAAoB;EACpB,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,SAAO;EACP,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,oBAAoB;AACpB;EACE,mBAAmB;AACrB;;AAEA;EACE,gCAAgC;EAChC,eAAe;EACf,2BAA2B;EAC3B,kCAAkC;AACpC;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;AACA,gBAAgB;AAChB,cAAc;AACd,qBAAqB;AACrB;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;;AAEA,wBAAwB;AACxB;EACE,iBAAiB;IACf,gBAAgB;EAClB,SAAO;EACP,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE;IACE,aAAa;EACf;;AAEF;;AAEA,qBAAqB;AACrB;EACE,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;;EAEZ,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE;IACE,8BAA8B;EAChC;AACF;;AAEA,yBAAyB;AACzB;EACE,WAAW;AACb;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,oCAAoC;EACpC,iDAAiD;AACnD;;AAEA;EACE;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA,gFAAgF;AAChF;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,eAAe;EAC7B,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA,6BAA6B;AAC7B;EACE,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,SAAO;EACP,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA,sBAAsB;AACtB;EACE,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,4CAA4C;EAC5C,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,gCAAgC;EAChC,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,0BAA0B;EAC1B,YAAY;EACZ,wCAAwC;AAC1C;;AAEA;EACE;IACE,8BAA8B;EAChC;AACF;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,qCAAqC;EACrC,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE;GACC,qCAAqC;EACtC;AACF;AACA;EACE;GACC,qCAAqC;EACtC;EACA;EACA,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;AACA;;AAEA,eAAe;AACf;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,wCAAwC;EACxC,SAAS;EACT,UAAU;EACV,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;EACxC,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,cAAc;EACd,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,wCAAwC;EACxC,cAAc;EACd,yBAAyB;EACzB,qBAAqB;EACrB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,QAAQ;EACR,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,cAAc;EACd,wCAAwC;EACxC,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,cAAc;EACd,wCAAwC;EACxC,oBAAoB;AACtB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,cAAc;AAChB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;;AAGA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,qBAAqB;AACvB;AACA,uBAAuB;AACvB;EACE,mBAAmB;AACrB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,YAAY;AACd;;AAEA,cAAc;AACd;EACE,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,sBAAsB;AACtB;EACE;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,sBAAsB;IACtB,gBAAgB;IAChB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;IACtB,SAAS;IACT,WAAW;EACb;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;;IAEE,0BAA0B;IAC1B,WAAW;EACb;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,oBAAoB;EACtB;AACF;;AAEA,uCAAuC;AACvC;EACE;IACE,iBAAiB;IACjB,gBAAgB;IAChB,gCAAgC;IAChC,qBAAqB;IACrB,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;IACtB,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;EACtB;AACF;;AAEA,uBAAuB;AACvB;EACE,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,gCAAgC;EAChC,eAAe;EACf,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,0CAA0C;EAC1C,gBAAgB;EAChB,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA,0CAA0C;AAC1C;;EAEE;IACE,eAAe;IACf,eAAe;IACf,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA,kDAAkD;AAClD;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,qBAAqB;AACrB;EACE,UAAU;EACV,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA,uCAAuC;AACvC;EACE,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,WAAW;EACX,aAAa;EACb,SAAO;AACT;;AAEA;EACE;IACE,SAAO;EACT;AACF;;AAEA;EACE,aAAa;EACb,SAAO;AACT;;AAEA;EACE;IACE,aAAa;IACb,SAAO;EACT;AACF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA,yBAAyB;AACzB;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,gCAAgC;EAChC,gBAAgB;AAClB;;;;;;;AAOA,4BAA4B;AAC5B;EACE,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,2BAA2B;EAC3B,WAAW;AACb;;AAEA;;;EAGE,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA,kBAAkB;AAClB;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;EACb;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;IACX,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,MAAM;IACN,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,wCAAwC;EAC1C;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,gBAAgB;EAClB;;EAEA;;IAEE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,6BAA6B;EAC/B;;EAEA,mCAAmC;EACnC;IACE,sCAAsC;IACtC,kBAAkB;EACpB;;EAEA,8BAA8B;EAC9B;;IAEE,mBAAmB;IACnB,YAAY;IACZ,YAAY;EACd;;EAEA,6BAA6B;EAC7B;IACE,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;EACxB;;EAEA;IACE,WAAW;EACb;AACF",
            sourcesContent: [
              '/* PreDashboard.css - Sports Betting Dashboard */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.dashboard-container {\n  min-height: 100vh;\n  background: #f5f6fa;\n  font-family: "Arial", sans-serif;\n  contain: layout style;\n  overflow-x: hidden;\n}\n\n/* Fixed Header Styles - matching the image */\n.dashboard-header {\n  background: white;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  width: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  contain: layout style;\n  will-change: auto;\n}\n\n.fixed-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px 2rem;\n  background: #fff;\n\n  max-width: 1650px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.header-left {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  /* background-color: red; */\n  position: relative;\n}\n\n.logo-image {\n  height: 45px;\n\n  width: auto;\n  object-fit: contain;\n  filter: brightness(1);\n  transition: filter 0.2s ease;\n  margin-left: 2px;\n}\n\n.logo-image:hover {\n  filter: brightness(1.1);\n}\n\n.header-center {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex: 1;\n  justify-content: end;\n  max-width: 600px;\n  margin: 0 -3rem;\n}\n\n.search-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  width: 350px;\n  height: 40px;\n}\n\n.search-input {\n  width: 350px;\n  height: 40px;\n  padding: 0.5rem 2.5rem 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #fff;\n  font-size: 0.875rem;\n  outline: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  resize: none;\n  min-width: 350px;\n  max-width: 350px;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  contain: layout style;\n}\n\n.search-input:focus {\n  border-color: #C10930;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(193, 9, 48, 0.1);\n  outline: none;\n}\n\n.search-input::placeholder {\n  color: #9ca3af;\n}\n\n.search-icon {\n  position: absolute;\n  right: 0.75rem;\n  color: #3b82f6;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rules-btn {\n  padding: 0.5rem 1.5rem;\n  background: #C10930;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  height: 40px;\n  min-width: 80px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 0 #6D081D;\n  border-bottom: 3px solid #6D081D;\n  flex-shrink: 0;\n}\n\n.rules-btn:hover {\n  background: #6D081D;\n  transform: translateY(-1px);\n  border-bottom-color: #C10930;\n}\n\n.header-right {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex: 0 0 auto;\n  margin-left: auto;\n}\n\n/* Button Styles - matching the image */\n.signup-btn {\n  padding: 0.5rem 1.5rem;\n  background: #374151;\n  color: #fff;\n  border: 1px solid #C10930;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  min-width: 80px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.signup-btn:hover {\n  background: #4b5563;\n  border-color: #6D081D;\n}\n\n.login-btn {\n  padding: 0.5rem 1.5rem;\n  background: #374151;\n  color: #fff;\n  border: 1px solid #C10930;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  min-width: 80px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.login-btn:hover {\n  background: #4b5563;\n  border-color: #6D081D;\n}\n\n\n\n/* WhatsApp Support Image - Bottom Right Corner */\n.whatsapp-support-container {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 1000;\n  cursor: pointer;\n}\n\n.whatsapp-support-link {\n  display: block;\n  text-decoration: none;\n  transition: transform 0.3s ease;\n}\n\n.whatsapp-support-link:hover {\n  transform: scale(1.1);\n}\n\n.whatsapp-support-image {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));\n  animation: blink 2s infinite;\n}\n\n/* Blinking animation */\n@keyframes blink {\n  0%, 50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  25%, 75% {\n    opacity: 0.7;\n    transform: scale(1.05);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n/* Responsive adjustments for mobile */\n@media (max-width: 768px) {\n  .whatsapp-support-container {\n    bottom: 15px;\n    right: 15px;\n  }\n  \n  .whatsapp-support-image {\n    width: 50px;\n    height: 50px;\n  }\n}\n\n/* Main Navigation Tabs */\n.main-nav {\n  background: #343435;\n  padding: 0px 2rem;\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n  border-bottom: 1px solid #e5e7eb;\n  width: 100%;\n  position: relative;\n  z-index: 999;\n}\n\n.nav-tab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n  min-width: fit-content;\n  border-radius: 4px;\n}\n\n.nav-tab:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.nav-tab.active {\n  background: #c10930;\n  color: #fff;\n}\n\n.nav-icon {\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-icon-img {\n  width: 2.5rem;\n  height: 1rem;\n  text-transform: lowercase;\n  object-fit: contain;\n}\n\n.nav-text {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: white;\n  margin: 0;\n  text-align: center;\n}\n\n/* Dashboard Content Layout */\n.dashboard-content {\n  display: flex;\n  min-height: calc(100vh - 140px);\n}\n\n/* Sidebar Styles */\n.sidebar {\n  width: 220px;\n  background: #fff;\n  border-right: 1px solid #e5e7eb;\n  overflow-y: auto;\n}\n\n.sidebar-header {\n  padding: 0 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 1rem;\n}\n\n.sidebar-header h3 {\n  color: #374151;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.sidebar-menu {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.45rem 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border-left: 3px solid transparent;\n  gap: 0.5rem;\n}\n\n.sidebar-item:hover {\n  background: #f9fafb;\n}\n\n.sidebar-item.active {\n  background: #fef2f2;\n  border-left-color: #dc2626;\n  color: #dc2626;\n}\n\n.sidebar-icon-img {\n  width: 2.5rem;\n  height: 1.25rem;\n  object-fit: contain;\n}\n\n.sidebar-text {\n  flex: 1;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n\n.sidebar-arrow {\n  font-size: 0.6rem;\n  color: #6b7280;\n  transition: transform 0.2s;\n}\n\n.sidebar-arrow.expanded {\n  transform: rotate(180deg);\n}\n\n/* Sidebar Submenu */\n.sidebar-submenu {\n  background: #f8fafc;\n}\n\n.sidebar-subitem {\n  padding: 0.5rem 1rem 0.5rem 2rem;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-left: 2px solid transparent;\n}\n\n.sidebar-subitem:hover {\n  background: #f1f5f9;\n  color: #dc2626;\n}\n\n.subitem-text {\n  font-size: 0.7rem;\n  font-weight: 400;\n}\n.new-odds{\nfont-weight: 600;\ncolor: #dc2626; \n/* font-size: 12px; */\n}\n.subitem-text:hover {\n  font-size: 0.7rem;\n  color: #dc2626;\n  font-weight: 400;\n}\n\n/* Main Content Styles */\n.main-content {\n  max-height: 100vh;\n    overflow-y: auto;\n  flex: 1;\n  padding: 0.25rem;\n  background: #fff;\n}\n\n@media (min-width: 768px) {\n  .main-content {\n    padding: 1rem;\n  }\n\n}\n\n/* Announcement Bar */\n.announcement-bar {\n  margin-bottom: 0.25rem;\n  padding: 0.5rem 0.25rem;\n  background: #6D081D;\n  color: white;\n\n  font-size: 1rem;\n}\n\n/* Content Header */\n.content-header {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n}\n\n@media (min-width: 768px) {\n  .content-header {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n/* Sport Banner Section */\n.sport-banner-section {\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .sport-banner-section {\n    width: 100%;\n  }\n}\n\n.sport-banner-wrapper {\n  width: fit-content;\n}\n\n.sport-banner {\n  background: #c10930;\n  color: white;\n  padding: 0.5rem 0.5rem 0.5rem 0.5rem;\n  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);\n}\n\n@media (min-width: 768px) {\n  .sport-banner {\n    padding-right: 10rem;\n  }\n}\n\n.sport-banner-title {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  white-space: nowrap;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n\n.sport-banner-icon {\n  width: 0.5rem;\n  height: 1rem;\n  object-fit: contain;\n}\n\n/* Keep the banner icon inside a fixed-size span to avoid expanding the header */\n.sport-banner-icon-wrap {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px; /* fixed size */\n  height: 20px; /* fixed size */\n  overflow: hidden;\n}\n\n.sport-banner-icon-wrap .sport-banner-icon {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n/* Filter Buttons Container */\n.filter-buttons-container {\n  padding-left: 7rem;\n  margin-bottom: 0.5rem;\n  margin-top: 0.25rem;\n}\n\n@media (min-width: 768px) {\n  .filter-buttons-container {\n    padding-left: 7rem;\n  }\n}\n\n.filter-buttons {\n  gap: 0.25rem;\n  display: flex;\n  align-items: center;\n}\n\n/* Filter Buttons */\n.filter-buttons {\n  display: flex;\n  gap: 0.3rem;\n}\n\n.filter-btn {\n  padding: 0.3rem 1rem;\n  background: #fff;\n  color: #dc2626;\n  border: 1px solid #dc2626;\n  border-radius: 50px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.75rem;\n}\n\n.filter-btn:hover {\n  background: #dc2626;\n  color: #fff;\n}\n\n/* Odds Header */\n.odds-header {\n  display: none;\n  margin-bottom: 0.5rem;\n}\n\n@media (min-width: 768px) {\n  .odds-header {\n    display: flex;\n  }\n}\n\n.odds-header-content {\n  display: flex;\n  width: 100%;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.odds-header-item {\n  flex: 1;\n  font-size: 0.75rem;\n  text-align: center;\n}\n\n/* Matches Container */\n.matches-container {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  overflow: hidden;\n}\n\n/* Table Header */\n.table-header {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 0.5fr 4fr;\n  gap: 1rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 600;\n  color: #374151;\n}\n\n.odds-columns {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 0.25rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n/* Matches List */\n.matches-list {\n  max-height: 600px;\n  overflow-y: auto;\n}\n\n/* Match Row */\n.match-row {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.25rem;\n  /* border-bottom: 0.5px solid #e5e7eb; */\n}\n\n@media (min-width: 768px) {\n  .match-row {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n/* Match Info Section */\n.match-info-section {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0.25rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n@media (min-width: 768px) {\n  .match-info-section {\n   grid-template-columns: repeat(7, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .match-info-section {\n   grid-template-columns: repeat(5, 1fr);\n  }\n  .match-info {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  grid-column: span 2;\n}\n}\n\n/* Match Info */\n.match-info {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  grid-column: span 2;\n}\n\n@media (min-width: 768px) {\n  .match-info {\n    grid-column: span 4;\n  }\n}\n\n.match-link {\n  text-decoration: none;\n  color: inherit;\n  width: 100%;\n}\n\n.match-link:hover {\n  text-decoration: none;\n  color: inherit;\n}\n\n.match-details {\n  padding: 0 0.5rem;\n  gap: 0.25rem;\n}\n\n.team-names {\n  max-width: 100%;\n  font-family: "Titillium Web", sans-serif;\n  margin: 0;\n  padding: 0;\n  color: black;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n\n.league-info {\n  font-family: "Titillium Web", sans-serif;\n  margin: 0;\n  padding: 0;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 100%;\n  font-weight: 300;\n}\n\n/* Match Status */\n.match-status {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-column: span 1;\n}\n\n@media (min-width: 768px) {\n  .match-status {\n    grid-column: span 1;\n  }\n}\n\n.live-indicator {\n  font-weight: 600;\n  font-size: 0.75rem;\n  font-family: "Titillium Web", sans-serif;\n  color: #10b981;\n  border: 1px solid #10b981;\n  display: inline-block;\n  position: relative;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n\n.live-indicator::after {\n  content: \'\';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 2px;\n  background: #10b981;\n  width: 0;\n  transition: all 0.5s;\n}\n\n.live-indicator:hover::after {\n  width: 100%;\n}\n\n.match-time-display {\n  display: flex;\n  flex-direction: column;\n  background: #f3f4f6;\n  font-size: 0.625rem;\n  align-items: center;\n  padding: 0.5rem;\n  line-height: 1.25;\n}\n\n@media (min-width: 768px) {\n  .match-time-display {\n    font-size: 0.75rem;\n  }\n}\n\n.date {\n  color: #ef4444;\n  font-family: "Titillium Web", sans-serif;\n  font-size: 0.5625rem;\n  font-weight: 600;\n}\n\n@media (min-width: 768px) {\n  .date {\n    font-size: 0.75rem;\n  }\n}\n\n.time {\n  color: #ef4444;\n  font-family: "Titillium Web", sans-serif;\n  font-size: 0.5625rem;\n}\n\n@media (min-width: 768px) {\n  .time {\n    font-size: 0.75rem;\n  }\n}\n\n/* Match Time */\n.match-time {\n  font-size: 0.75rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  grid-column: span 1;\n}\n\n@media (min-width: 768px) {\n  .match-time {\n    grid-column: span 1;\n  }\n}\n\n.empty-time {\n  font-weight: 600;\n}\n\n.live-time-display {\n  display: flex;\n  flex-direction: column;\n  background: #e5e7eb;\n  font-size: 0.75rem;\n  align-items: center;\n  padding: 0.25rem;\n  line-height: 1.25;\n}\n\n.live-date {\n  font-size: 0.5625rem;\n  color: #ef4444;\n}\n\n.live-time {\n  font-size: 0.5625rem;\n  color: #ef4444;\n}\n\n/* Match Icons */\n.match-icons {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  /* padding: 0 0.5rem; */\n  grid-column: span 1;\n}\n\n@media (min-width: 768px) {\n  .match-icons {\n    grid-column: span 1;\n  }\n}\n\n\n.pre-game-icon {\n  width: 20px;\n  text-align: center;\n  margin-top: 2px;\n  display: inline-block;\n}\n/* Match Odds Section */\n.match-odds-section {\n  grid-column: span 1;\n}\n\n/* Odds Grid */\n.odds-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  align-items: center;\n  height: 100%;\n}\n\n/* Odds Cell */\n.odds-cell {\n  grid-column: span 1;\n  border: 1px solid #e5e7eb;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.25rem 0;\n  font-size: 12px;\n}\n\n@media (min-width: 768px) {\n  .odds-cell {\n    padding: 0.25rem 0;\n  }\n}\n\n.odds-blue {\n  background: #66d1ff;\n}\n\n.odds-pink {\n  background: #ffb4c5;\n}\n\n/* Bet Button Price */\n.bet-button-price {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.odds-main {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n\n.odds-sub {\n  font-size: 0.75rem;\n}\n\n/* Responsive Design */\n@media (max-width: 1200px) {\n  .sidebar {\n    width: 240px;\n  }\n\n  .search-input {\n    width: 250px;\n  }\n}\n\n@media (max-width: 768px) {\n  .dashboard-header {\n    width: 100%;\n    background-color: #333;\n    color: white;\n    padding: 10px 0;\n  }\n\n  .filter-btn {\n    padding: 0.1rem 0.8rem;\n    background: #fff;\n    color: #dc2626;\n    border: 1px solid #dc2626;\n    border-radius: 50px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.2s;\n  }\n\n  .header-left {\n    flex-direction: column;\n    gap: 1rem;\n    width: 100%;\n  }\n\n  .search-input {\n    width: 100%;\n  }\n\n  .dashboard-content {\n    flex-direction: column;\n  }\n\n  .sidebar {\n    width: 100%;\n    max-height: 200px;\n  }\n\n  .table-header,\n  .match-row {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n\n  .match-odds {\n    grid-template-columns: repeat(6, 1fr);\n  }\n\n  .odds-columns {\n    grid-template-columns: repeat(6, 1fr);\n  }\n\n  .match-row {\n    padding: 0.35rem 0.5rem;\n    gap: 0.25rem;\n  }\n\n  .main-nav {\n    padding: 0.5rem 1rem;\n  }\n}\n\n/* Responsive styles for fixed header */\n@media (max-width: 768px) {\n  .dashboard-container {\n    min-height: 100vh;\n    background: #333;\n    font-family: "Arial", sans-serif;\n    contain: layout style;\n    overflow-x: hidden;\n  }\n\n  .fixed-header {\n    flex-direction: column;\n    background-color: #333;\n    gap: 1rem;\n    padding: 1rem;\n    min-height: auto;\n    /* background:red; */\n  }\n\n  .header-left {\n    justify-content: start;\n  }\n\n  .header-center {\n    flex-direction: column;\n    gap: 0.75rem;\n    max-width: 100%;\n  }\n\n  .search-input {\n    width: 100%;\n    max-width: 300px;\n  }\n\n  .header-right {\n    justify-content: center;\n  }\n\n  .logo-main {\n    font-size: 1.25rem;\n  }\n\n  .logo-sub {\n    font-size: 0.8rem;\n  }\n\n  .signup-btn,\n  .login-btn {\n    min-width: 70px;\n    height: 35px;\n    font-size: 0.8rem;\n    padding: 0.4rem 1rem;\n  }\n\n  .rules-btn {\n    height: 35px;\n    font-size: 0.8rem;\n    padding: 0.4rem 1rem;\n  }\n}\n\n/* Rules Modal Styles */\n.rules-modal-btn {\n  background: #C10930;\n  color: white;\n  padding: 0.4rem 1.1rem;\n  border: none;\n  border-radius: 4px;\n  border-bottom: 4px solid #6D081D;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n\n.rules-modal-btn:hover {\n  background: #6D081D;\n  border-bottom-color: #C10930;\n}\n\n.rules-modal-content {\n  margin: 0;\n  padding: 0;\n  border-radius: 8px;\n  width: 100%;\n  background: white;\n  max-width: 600px;\n  min-width: 500px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  contain: layout style;\n  transform: translateZ(0);\n}\n\n/* Responsive design for smaller screens */\n@media (max-width: 768px) {\n\n  .rules-modal-content {\n    max-width: 95vw;\n    min-width: 95vw;\n    margin: 0 1rem;\n  }\n\n  .modal-overlay {\n    padding-top: 1rem;\n  }\n}\n\n.rules-modal-header {\n  background: #343435;\n  padding: 1rem 1.5rem;\n  border-radius: 8px 8px 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n  position: relative;\n}\n\n.rules-modal-title {\n  color: white;\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n\n.rules-modal-close-btn {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n\n.rules-modal-close-btn:hover {\n  color: #f0f0f0;\n  transform: scale(1.1);\n}\n\n.rules-modal-body {\n  padding: 1rem;\n  background: white;\n}\n\n/* Ensure proper spacing between accordion items */\n.accordion-container .MuiAccordion-root {\n  margin-bottom: 0.5rem;\n}\n\n.accordion-container .MuiAccordion-root:last-child {\n  margin-bottom: 0;\n}\n\n/* Accordion Styles */\n.accordion-container {\n  padding: 0;\n  padding-bottom: 0;\n  padding-top: 0;\n}\n\n.accordion-title {\n  padding: 0.75rem 1rem;\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\n/* Custom styling for the expand icon */\n.accordion-container .MuiAccordionSummary-expandIconWrapper {\n  color: white;\n  transition: transform 0.2s ease;\n}\n\n.accordion-container .MuiAccordionSummary-expandIconWrapper.Mui-expanded {\n  transform: rotate(180deg);\n}\n\n.accordion-content-item {\n  border-bottom: 1px solid #e5e7eb;\n  padding: 0.75rem 1rem;\n  line-height: 1.5;\n}\n\n.accordion-content-item:last-child {\n  border-bottom: none;\n}\n\n/* Modal Styles */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 2rem;\n  z-index: 1000;\n}\n\n.modal-open {\n  visibility: visible;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.modal-closed {\n  visibility: hidden;\n  background: transparent;\n}\n\n.modal-container {\n  background: transparent;\n  border-radius: 8px;\n  padding: 0;\n  max-width: 90vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n}\n\n.modal-content-open {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.modal-content-closed {\n  transform: scale(1.25);\n  opacity: 0;\n}\n\n.modal-close-btn {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n}\n\n.modal-close-btn:hover {\n  color: #333;\n}\n\n/* Login Modal Styles */\n.login-modal-content {\n  display: flex;\n  flex-direction: column;\n  background: #075099;\n  justify-content: center;\n  margin-top: 0.75rem;\n  align-items: stretch;\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .login-modal-content {\n    flex-direction: row;\n  }\n}\n\n.login-form-section {\n  width: 100%;\n  display: flex;\n  flex: 1;\n}\n\n@media (min-width: 768px) {\n  .login-form-section {\n    flex: 1;\n  }\n}\n\n.login-image-section {\n  display: none;\n  flex: 1;\n}\n\n@media (min-width: 768px) {\n  .login-image-section {\n    display: flex;\n    flex: 1;\n  }\n}\n\n.login-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n/* Simple Header Styles */\n.simple-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #fff;\n  border-bottom: 1px solid #e5e7eb;\n  min-height: 80px;\n}\n\n\n\n\n\n\n/* Original desktop styles */\n.dashboard-header {\n  width: 100%;\n  background-color: #fff;\n  color: white;\n  padding: 10px 0;\n}\n\n.fixed-header {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n  background-color: #fff;\n}\n\n.header-desktop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header-mobile {\n  display: none;\n  background-color: #333;\n}\n\n.header-left,\n.header-center,\n.header-right {\n  display: flex;\n  align-items: center;\n}\n\n.header-center {\n  flex-grow: 1;\n  max-width: 600px;\n  margin: 0 20px;\n}\n\n.search-container {\n  position: relative;\n  flex-grow: 1;\n  margin-right: 10px;\n}\n\n.search-input {\n  width: 100%;\n  padding: 8px 30px 8px 10px;\n  border-radius: 4px;\n  border: none;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  color: white;\n}\n\n.search-icon {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #777;\n}\n\n.signup-btn,\n.login-btn,\n.rules-btn {\n  padding: 8px 15px;\n  border-radius: 4px;\n  font-weight: bold;\n  cursor: pointer;\n  border: none;\n  white-space: nowrap;\n}\n\n.signup-btn {\n  background-color: #374151;\n  border: 1px solid #6D081D;\n  color: white;\n}\n\n.login-btn {\n  background-color: #374151;\n  border: 1px solid #6D081D;\n  color: white;\n}\n\n.rules-btn {\n  background-color: #C10930;\n  color: white;\n}\n\n/* Mobile styles */\n@media (max-width: 768px) {\n  .header-desktop {\n    display: none;\n  }\n\n  .header-mobile {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .header-top-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 5px 0;\n  }\n\n  .header-bottom-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 10px 0 5px;\n  }\n\n  .header-auth-buttons {\n    display: flex;\n    gap: 10px;\n  }\n\n  .search-container {\n    flex-grow: 1;\n    margin-right: 10px;\n  }\n}\n\n@media (max-width: 768px) {\n  .dashboard-header {\n    position: sticky;\n    top: 0;\n    z-index: 1000;\n    width: 100%;\n    background: #333;\n    /* Consistent dark background */\n    color: white;\n    padding: 0;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  }\n\n  .fixed-header {\n    position: relative;\n    padding: 0;\n    background: transparent;\n  }\n\n  .header-mobile {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    background: #333;\n  }\n\n  .header-top-row,\n  .header-bottom-row {\n    padding: 8px 15px;\n    background: #333;\n  }\n\n  .header-top-row {\n    border-bottom: 1px solid #444;\n  }\n\n  /* Ensure logo stays left-aligned */\n  .logo-container {\n    justify-content: flex-start !important;\n    margin-right: auto;\n  }\n\n  /* Make buttons more visible */\n  .signup-btn,\n  .login-btn {\n    background: #C10930;\n    border: none;\n    color: white;\n  }\n\n  /* Fix search input styling */\n  .search-input {\n    background: #444;\n    color: white;\n    border: 1px solid #555;\n  }\n\n  .search-icon {\n    color: #aaa;\n  }\n}',
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

    /***/ "./src/pages/PreDashboard/PreDashboard.css":
      /*!*************************************************!*\
  !*** ./src/pages/PreDashboard/PreDashboard.css ***!
  \*************************************************/
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
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./PreDashboard.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/PreDashboard/PreDashboard.css"
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
            _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        if (true) {
          if (
            !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
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
              !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals;
            var oldLocals = isNamedExport
              ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__
              : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].locals;

            module.hot.accept(
              /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./PreDashboard.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/PreDashboard/PreDashboard.css",
              (__WEBPACK_OUTDATED_DEPENDENCIES__) => {
                /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__ =
                  __webpack_require__(
                    /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./PreDashboard.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/pages/PreDashboard/PreDashboard.css"
                  );
                (function () {
                  if (
                    !isEqualLocals(
                      oldLocals,
                      isNamedExport
                        ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__
                        : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ].locals,
                      isNamedExport
                    )
                  ) {
                    module.hot.invalidate();

                    return;
                  }

                  oldLocals = isNamedExport
                    ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__
                    : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ].locals;

                  update(
                    _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
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
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_PreDashboard_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
      /*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
      /*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
      /*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
      /*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
      /*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
      /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
      /*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
      /*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
      /*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
      /*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
      /*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
      /*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
      /*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
      /*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
      /*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
      /*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
      /*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

        /***/
      },

    /***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
      /*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        module.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

        /***/
      },
  },
]);
//# sourceMappingURL=src_pages_PreDashboard_PreDashboard_tsx-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000-dd0cc2.chunk.js.map


