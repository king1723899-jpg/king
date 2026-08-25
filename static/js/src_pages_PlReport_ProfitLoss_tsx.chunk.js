"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_PlReport_ProfitLoss_tsx"],
  {
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

    /***/ "./src/pages/PlReport/ProfitLoss.tsx":
      /*!*******************************************!*\
  !*** ./src/pages/PlReport/ProfitLoss.tsx ***!
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
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../services/account.service */ "./src/services/account.service.ts"
          );
        /* harmony import */ var _models_SportTypes__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../models/SportTypes */ "./src/models/SportTypes.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/PlReport/ProfitLoss.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const ProfitLoss = () => {
          _s();
          const [filterdata, setfilterdata] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({
              startDate: "",
              endDate: "",
            });
          const [bethistory, setbethistory] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [page, setPage] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(1);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const filterObj = filterdata;
            filterObj.startDate =
              moment__WEBPACK_IMPORTED_MODULE_5___default()()
                .subtract(7, "days")
                .format("YYYY-MM-DD");
            filterObj.endDate =
              moment__WEBPACK_IMPORTED_MODULE_5___default()().format(
                "YYYY-MM-DD"
              );
            setfilterdata(filterObj);
            getAccountStmt(1);
          }, []);
          const getAccountStmt = (page) => {
            _services_account_service__WEBPACK_IMPORTED_MODULE_6__["default"]
              .getProfitLoss(page, filterdata)
              .then((res) => {
                res &&
                  res.data &&
                  res.data.data &&
                  setbethistory(res.data.data);
                setPage(page);
              })
              .catch((e) => {
                const error = e.response.data.message;
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error);
              });
          };
          const handleformchange = (event) => {
            const filterObj = filterdata;
            filterObj[event.target.name] = event.target.value;
            setfilterdata(filterObj);
          };
          const handleSubmitform = (event) => {
            event.preventDefault();
            getAccountStmt(1);
          };
          const handlePageClick = (event) => {
            getAccountStmt(event.selected + 1);
          };
          const trrepeat = (Item, index) => {
            var _Item$total;
            const classdata = Item.total > 0 ? "green" : "red";
            const splitname =
              Item.narration != "" ? Item.narration.split("/")[0] : "";
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
              {
                children: /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  "tr",
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "td",
                        {
                          children:
                            _models_SportTypes__WEBPACK_IMPORTED_MODULE_7__
                              .SportName[Item.sportId],
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "td",
                        {
                          className: "text-center wnwrap",
                          children: splitname,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 54,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        "td",
                        {
                          className: `text-center wnwrap ${classdata}`,
                          children:
                            Item === null || Item === void 0
                              ? void 0
                              : (_Item$total = Item.total) === null ||
                                _Item$total === void 0
                              ? void 0
                              : _Item$total.toFixed(2),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 55,
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
                    lineNumber: 52,
                    columnNumber: 9,
                  },
                  undefined
                ),
              },
              void 0,
              false
            );
          };
          const TransactionData =
            bethistory && bethistory.items && bethistory.items.length
              ? bethistory.items.map((item, index) => {
                  return trrepeat(item, index);
                })
              : /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  "tr",
                  {
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
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
                        lineNumber: 67,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 7,
                  },
                  undefined
                );
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ].subheader("Profit/Loss"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  "div",
                  {
                    className:
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile
                        ? "col-md-12 mt-1"
                        : "col-md-12 padding-custom",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                      "div",
                      {
                        className: "",
                        children: [
                          _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_3__[
                            "default"
                          ].subheaderdesktop("Profit/Loss"),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            "div",
                            {
                              className: "card-body p0",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "form",
                                  {
                                    className:
                                      "ng-pristine ng-valid ng-touched mb-0",
                                    method: "post",
                                    onSubmit: handleSubmitform,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      "div",
                                      {
                                        className: "row row5",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-6 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "mx-datepicker",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "mx-input-wrapper",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
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
                                                                  lineNumber: 89,
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
                                                            lineNumber: 88,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 87,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 86,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 85,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-6 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "mx-datepicker",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "mx-input-wrapper",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
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
                                                                  lineNumber: 106,
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
                                                            lineNumber: 105,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 104,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 103,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 102,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "col-12 col-lg-1 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
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
                                                  lineNumber: 120,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 119,
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
                                        lineNumber: 84,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 79,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  "div",
                                  {
                                    className: "table-responsive",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      "table",
                                      {
                                        id: "customers1",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "thead",
                                            {
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "tr",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white wnwrap",
                                                        children: "Event Type",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 130,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white wnwrap",
                                                        children: "Event Name ",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 131,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white wnwrap",
                                                        children: "Amount",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 132,
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
                                                  lineNumber: 129,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 128,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "tbody",
                                            {
                                              children: TransactionData,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 135,
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
                                        lineNumber: 127,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 126,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                  react_paginate__WEBPACK_IMPORTED_MODULE_1___default(),
                                  {
                                    breakLabel: "...",
                                    nextLabel: ">>",
                                    onPageChange: handlePageClick,
                                    pageRangeDisplayed: 5,
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
                                    lineNumber: 138,
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
                              lineNumber: 78,
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
                        lineNumber: 76,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 75,
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
        _s(ProfitLoss, "bF48NK+Im+SfIefS0hAxWTMnvd0=");
        _c = ProfitLoss;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ProfitLoss;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "ProfitLoss");

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

    /***/ "./src/services/account.service.ts":
      /*!*****************************************!*\
  !*** ./src/services/account.service.ts ***!
  \*****************************************/
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

        class AccountService {
          getAccountList(page, filter) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].post(
              `account-statement-list?page=${page}`,
              filter
            );
          }
          getProfitLoss(page, filter) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].post(
              `profit-loss?page=${page}`,
              filter
            );
          }
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          new AccountService();

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
//# sourceMappingURL=src_pages_PlReport_ProfitLoss_tsx.chunk.js.map
