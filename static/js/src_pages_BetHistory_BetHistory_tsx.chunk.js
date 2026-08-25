"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_BetHistory_BetHistory_tsx"],
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

    /***/ "./src/models/SportTypes.ts":
      /*!**********************************!*\
  !*** ./src/models/SportTypes.ts ***!
  \**********************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SportName: () => /* binding */ SportName,
          /* harmony export */ SportsType: () => /* binding */ SportsType,
          /* harmony export */
        });
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        let SportsType = /*#__PURE__*/ (function (SportsType) {
          SportsType[(SportsType["soccer"] = 1)] = "soccer";
          SportsType[(SportsType["tennis"] = 2)] = "tennis";
          SportsType[(SportsType["cricket"] = 4)] = "cricket";
          SportsType[(SportsType["horseRacing"] = 7)] = "horseRacing";
          SportsType[(SportsType["greyhoundRacing"] = 4339)] =
            "greyhoundRacing";
          SportsType[(SportsType["casino"] = 5000)] = "casino";
          return SportsType;
        })({});
        const SportName = {
          1: "Soccer",
          2: "Tennis",
          4: "Cricket",
          7: "Horse Racing",
          4339: "Greyhound Racing",
          5000: "Casino",
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

    /***/ "./src/pages/BetHistory/BetHistory.tsx":
      /*!*********************************************!*\
  !*** ./src/pages/BetHistory/BetHistory.tsx ***!
  \*********************************************/
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
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js"
          );
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_paginate__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var _models_IBet__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ../../models/IBet */ "./src/models/IBet.ts");
        /* harmony import */ var _models_SportTypes__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../models/SportTypes */ "./src/models/SportTypes.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/BetHistory/BetHistory.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const BetHistory = () => {
          _s();
          const [bethistory, setbethistory] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [filterdata, setfilterdata] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({
              startDate: "",
              endDate: "",
              status: "completed",
              betStatus: "matched",
            });
          const [page, setPage] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(1);
          const [isLoading, setloading] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const filterObj = filterdata;
            filterObj.startDate =
              moment__WEBPACK_IMPORTED_MODULE_4___default()()
                .subtract(7, "days")
                .format("YYYY-MM-DD");
            filterObj.endDate =
              moment__WEBPACK_IMPORTED_MODULE_4___default()().format(
                "YYYY-MM-DD"
              );
            setfilterdata(filterObj);
            getbethistory(1);
          }, []);
          const getbethistory = (page) => {
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"]
              .getUsercompletedbets(page, filterdata)
              .then((res) => {
                if (res && res.data && res.data.data) {
                  setbethistory(res.data.data);
                  // Debug: Check if fancy bets are included
                  console.log("Bet history data:", res.data.data);
                  if (res.data.data.docs) {
                    const fancyBets = res.data.data.docs.filter(
                      (bet) => bet.bet_on === "FANCY"
                    );
                    console.log("Fancy bets found:", fancyBets.length);
                  }
                }
                setPage(page);
              })
              .catch((e) => {
                var _e$response, _e$response$data;
                const error =
                  ((_e$response = e.response) === null || _e$response === void 0
                    ? void 0
                    : (_e$response$data = _e$response.data) === null ||
                      _e$response$data === void 0
                    ? void 0
                    : _e$response$data.message) ||
                  "Failed to fetch bet history";
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error);
              });
          };
          const createSrNo = (index) => {
            return (page - 1) * bethistory.limit + index + 1;
          };
          const trrepeat = (Item, index) => {
            var _Item$profitLoss;
            const classdata = Item.isBack ? "back" : "lay";

            // Better display formatting
            const getRunnerDisplay = () => {
              if (
                Item.bet_on ===
                _models_IBet__WEBPACK_IMPORTED_MODULE_7__.IBetOn.FANCY
              ) {
                if (Item.gtype === "fancy1") {
                  return `${Item.selectionName} / ${Item.odds}`;
                } else {
                  return `${Item.selectionName} / ${Item.volume}`;
                }
              } else {
                return `${Item.selectionName} / ${Item.odds}`;
              }
            };
            const getOddsDisplay = () => {
              if (
                Item.bet_on ===
                  _models_IBet__WEBPACK_IMPORTED_MODULE_7__.IBetOn.FANCY &&
                Item.gtype !== "fancy1"
              ) {
                var _Item$volume;
                return (
                  ((_Item$volume = Item.volume) === null ||
                  _Item$volume === void 0
                    ? void 0
                    : _Item$volume.toFixed(2)) || "0.00"
                );
              } else {
                var _Item$odds;
                return (
                  ((_Item$odds = Item.odds) === null || _Item$odds === void 0
                    ? void 0
                    : _Item$odds.toFixed(2)) || "0.00"
                );
              }
            };
            const getStakeDisplay = () => {
              var _Item$stack;
              return (
                ((_Item$stack = Item.stack) === null || _Item$stack === void 0
                  ? void 0
                  : _Item$stack.toFixed(2)) || "0.00"
              );
            };
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,
              {
                children: /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                  "tr",
                  {
                    className: classdata,
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                        "td",
                        {
                          children: createSrNo(index),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 82,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                        "td",
                        {
                          className: "text-center wnwrap",
                          children: Item.matchName,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 83,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                        "td",
                        {
                          className: "text-center wnwrap",
                          children: getRunnerDisplay(),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 84,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                        "td",
                        {
                          className: "text-center wnwrap",
                          children: [
                            _models_SportTypes__WEBPACK_IMPORTED_MODULE_8__
                              .SportName[Item.sportId],
                            " ",
                            Item.sportId ==
                            _models_SportTypes__WEBPACK_IMPORTED_MODULE_8__
                              .SportsType.casino
                              ? `(${Item.marketId})`
                              : null,
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                        "td",
                        {
                          className: "text-center wnwrap",
                          children: Item.marketName,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                        "td",
                        {
                          className: "text-center wnwrap",
                          children: getOddsDisplay(),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                        "td",
                        {
                          className: "text-center wnwrap",
                          children: getStakeDisplay(),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 91,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                        "td",
                        {
                          className: `text-center wnwrap ${
                            Item.profitLoss > 0 ? "green" : "red"
                          }`,
                          children:
                            ((_Item$profitLoss = Item.profitLoss) === null ||
                            _Item$profitLoss === void 0
                              ? void 0
                              : _Item$profitLoss.toFixed(2)) || "0.00",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 92,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                        "td",
                        {
                          className: "text-center wnwrap",
                          children:
                            moment__WEBPACK_IMPORTED_MODULE_4___default()(
                              Item.createdAt
                            ).format("YYYY-MM-DD HH:mm:ss"),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 95,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    ],
                  },
                  index,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 9,
                  },
                  undefined
                ),
              },
              void 0,
              false
            );
          };
          const handleformchange = (event) => {
            const filterObj = filterdata;
            if (event.target.name == "bet_status") {
              filterObj.status =
                event.target.value == "matched" ? "completed" : "deleted";
            }
            if (filterObj.status === "deleted") return false;
            filterObj[event.target.name] = event.target.value;
            setfilterdata(filterObj);
          };
          const handleSubmitform = (event) => {
            event.preventDefault();
            getbethistory(1);
          };
          const handlePageClick = (event) => {
            getbethistory(event.selected + 1);
          };
          const TransactionData =
            bethistory && bethistory.docs && bethistory.docs.length
              ? bethistory.docs.map((item, index) => {
                  return trrepeat(item, index);
                })
              : isLoading
              ? /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                  "tr",
                  {
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                      "td",
                      {
                        colSpan: 8,
                        style: {
                          textAlign: "center",
                        },
                        children: "Please wait",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 7,
                  },
                  undefined
                )
              : /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                  "tr",
                  {
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                      "td",
                      {
                        colSpan: 8,
                        style: {
                          textAlign: "center",
                        },
                        children: "No Result Found",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 132,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 7,
                  },
                  undefined
                );
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].subheader("Bet History"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                  "div",
                  {
                    className:
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile
                        ? " mt-1"
                        : "padding-custom",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                      "div",
                      {
                        className: "",
                        children: [
                          _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ].subheaderdesktop("Bet History"),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                            "div",
                            {
                              className: "card-body p0",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "form",
                                  {
                                    className:
                                      "ng-pristine ng-valid ng-touched mb-0",
                                    method: "post",
                                    onSubmit: handleSubmitform,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      "div",
                                      {
                                        className: "row row5",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-6 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "mx-datepicker",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "mx-input-wrapper",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  name: "startDate",
                                                                  type: "date",
                                                                  autoComplete:
                                                                    "off",
                                                                  onChange:
                                                                    handleformchange,
                                                                  defaultValue:
                                                                    filterdata.startDate,
                                                                  placeholder:
                                                                    "Select Date",
                                                                  className:
                                                                    "mx-input ng-pristine ng-valid ng-touched",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 154,
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
                                                            lineNumber: 153,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 152,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 151,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 150,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-6 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "mx-datepicker",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "mx-input-wrapper",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  name: "endDate",
                                                                  type: "date",
                                                                  autoComplete:
                                                                    "off",
                                                                  defaultValue:
                                                                    filterdata.endDate,
                                                                  onChange:
                                                                    handleformchange,
                                                                  placeholder:
                                                                    "Select Date",
                                                                  className:
                                                                    "mx-input ng-untouched ng-pristine ng-valid",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 171,
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
                                                            lineNumber: 170,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 169,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 168,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 167,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "col-12 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                    "select",
                                                    {
                                                      name: "reportType",
                                                      onChange:
                                                        handleformchange,
                                                      className:
                                                        "custom-select ng-untouched ng-pristine ng-valid",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "",
                                                            children:
                                                              "Sports Type ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 191,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "4",
                                                            children:
                                                              "Cricket ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 192,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "1",
                                                            children:
                                                              "Football ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 193,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "2",
                                                            children: "Tennis ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 194,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "5000",
                                                            children: "Casino ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 195,
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
                                                      lineNumber: 186,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 185,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 184,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "col-12 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                    "select",
                                                    {
                                                      name: "bet_status",
                                                      onChange:
                                                        handleformchange,
                                                      className:
                                                        "custom-select ng-untouched ng-pristine ng-valid",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "ALL",
                                                            children:
                                                              "Bet Status",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 206,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "completed",
                                                            children:
                                                              "Matched ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 207,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "deleted",
                                                            children:
                                                              "Deleted ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 208,
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
                                                      lineNumber: 201,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 200,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 199,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "col-12 col-lg-1 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                "button",
                                                {
                                                  type: "submit",
                                                  className:
                                                    "btn btn-primary btn-block",
                                                  children: "Submit",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 213,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 212,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "col-12 col-lg-1 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                "button",
                                                {
                                                  type: "button",
                                                  className:
                                                    "btn btn-info btn-block",
                                                  onClick: () => {
                                                    const newFilter = {
                                                      ...filterdata,
                                                      showAll: true,
                                                    };
                                                    setfilterdata(newFilter);
                                                    getbethistory(1);
                                                  },
                                                  children: "View All",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 218,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 217,
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
                                        lineNumber: 149,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 144,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "div",
                                  {
                                    className: "table-responsive",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      "table",
                                      {
                                        id: "customers1",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            "thead",
                                            {
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                "tr",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        children: "No",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 236,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        style: {
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: "Event Name",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 237,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        style: {
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: "Runner Name",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 240,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        style: {
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: "Event Type",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 243,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        style: {
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: "Type",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 246,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        style: {
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: "Rate",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 249,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        children: "Amount",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 252,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        style: {
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: "PNL",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 253,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    " ",
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        style: {
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: "Place Date",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 256,
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
                                                  lineNumber: 235,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 234,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            "tbody",
                                            {
                                              children: TransactionData,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 261,
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
                                        lineNumber: 233,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 232,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  react_paginate__WEBPACK_IMPORTED_MODULE_1___default(),
                                  {
                                    breakLabel: "...",
                                    nextLabel: ">>",
                                    onPageChange: handlePageClick,
                                    pageRangeDisplayed: 1,
                                    pageCount: bethistory.totalPages,
                                    containerClassName: "pagination",
                                    activeClassName: "active",
                                    previousLabel: "<<",
                                    breakClassName: "break-me",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 264,
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
                              lineNumber: 143,
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
                        lineNumber: 141,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 140,
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
        _s(BetHistory, "zh04djxgS60CVCGaP9GYBaoW8YU=");
        _c = BetHistory;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BetHistory;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "BetHistory");

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
//# sourceMappingURL=src_pages_BetHistory_BetHistory_tsx.chunk.js.map
