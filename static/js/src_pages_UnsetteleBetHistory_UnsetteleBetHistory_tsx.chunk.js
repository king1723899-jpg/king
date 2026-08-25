"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_UnsetteleBetHistory_UnsetteleBetHistory_tsx"],
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

    /***/ "./src/pages/UnsetteleBetHistory/UnsetteleBetHistory.tsx":
      /*!***************************************************************!*\
  !*** ./src/pages/UnsetteleBetHistory/UnsetteleBetHistory.tsx ***!
  \***************************************************************/
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
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _models_IBet__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ../../models/IBet */ "./src/models/IBet.ts");
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/UnsetteleBetHistory/UnsetteleBetHistory.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const UnsetteleBetHistory = () => {
          _s();
          const [bethistory, setbethistory] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [filterdata, setfilterdata] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({
              status: "pending",
            });
          const [page, setPage] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(1);
          const [isLoading, setloading] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            getbethistory(1);
          }, []);
          const getbethistory = (page) => {
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"]
              .getUsercompletedbets(page, filterdata)
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
          const createSrNo = (index) => {
            return (page - 1) * bethistory.limit + index + 1;
          };
          const trrepeat = (Item, index) => {
            const classdata = Item.isBack ? "back" : "lay";
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
              "tr",
              {
                className: classdata,
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "td",
                    {
                      children: createSrNo(index),
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
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.matchName,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: `${Item.selectionName} / ${
                        Item.bet_on ==
                        _models_IBet__WEBPACK_IMPORTED_MODULE_7__.IBetOn.FANCY
                          ? Item.volume
                          : Item.odds
                      }`,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.sportId,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.marketName,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.odds,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.stack,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children:
                        Item.createdAt &&
                        moment__WEBPACK_IMPORTED_MODULE_4___default()(
                          Item.createdAt.replace("T", " ").replace("Z", "")
                        ).format("YYYY-MM-DD HH:mm:ss"),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                ],
              },
              index,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 7,
              },
              undefined
            );
          };
          const handleformchange = (event) => {
            const filterObj = filterdata;
            if (event.target.name == "bet_status") {
              filterObj.status =
                event.target.value == "deleted" ? "deleted" : "pending";
            }
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
                        children: "Please wait",
                      },
                      void 0,
                      false,
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
                )
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
                        lineNumber: 84,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 7,
                  },
                  undefined
                );
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ].subheader("Unsettle Bet History"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  "div",
                  {
                    className:
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_6__.isMobile
                        ? "col-md-12 mt-1"
                        : "col-md-12 padding-custom",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                      "div",
                      {
                        className: "",
                        children: [
                          _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_5__[
                            "default"
                          ].subheaderdesktop("Unsettle Bet History"),
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
                                              className:
                                                "col-12 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "select",
                                                    {
                                                      name: "bet_status",
                                                      onChange:
                                                        handleformchange,
                                                      className:
                                                        "custom-select ng-untouched ng-pristine ng-valid",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "ALL",
                                                            children:
                                                              "Bet Type ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 109,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "matched",
                                                            children:
                                                              "Matched ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 110,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "unmatched",
                                                            children:
                                                              "Un-Matched ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 111,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
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
                                                            lineNumber: 112,
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
                                                  lineNumber: 117,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 116,
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
                                        lineNumber: 101,
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
                                                          "text-center bg2 text-white ",
                                                        children: "No",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 127,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
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
                                                        lineNumber: 128,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        style: {
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: "Nation",
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
                                                        lineNumber: 134,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
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
                                                        lineNumber: 137,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "th",
                                                      {
                                                        className:
                                                          "text-center bg2 text-white ",
                                                        style: {
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: ["Rate", " "],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 140,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
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
                                                        lineNumber: 143,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
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
                                                        lineNumber: 144,
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
                                                  lineNumber: 126,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 125,
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
                                              lineNumber: 149,
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
                                        lineNumber: 124,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 123,
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
                                    lineNumber: 152,
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
                              lineNumber: 95,
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
                        lineNumber: 93,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 92,
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
        _s(UnsetteleBetHistory, "8rubqdX8aotU8SS3EcvcVf/FRS0=");
        _c = UnsetteleBetHistory;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UnsetteleBetHistory;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "UnsetteleBetHistory");

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
//# sourceMappingURL=src_pages_UnsetteleBetHistory_UnsetteleBetHistory_tsx.chunk.js.map
