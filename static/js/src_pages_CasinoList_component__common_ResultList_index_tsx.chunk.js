"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_CasinoList_component__common_ResultList_index_tsx"],
  {
    /***/ "./src/pages/CasinoList/CasinoResultDetail.tsx":
      /*!*****************************************************!*\
  !*** ./src/pages/CasinoList/CasinoResultDetail.tsx ***!
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
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js"
          );
        /* harmony import */ var _services_casino_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../services/casino.service */ "./src/services/casino.service.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/CasinoList/CasinoResultDetail.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        /* eslint-disable */

        const CasinoResultDetail = (props) => {
          _s();
          var _popupdata$event_data;
          const { popupdata, setPopStatus, popupstatus } = props;
          const [casinoResult, setCasinoResult] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          const [loader, setLoader] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            setCasinoResult({});
            setLoader(true);
            if (popupdata.slug && popupdata.slug) {
              _services_casino_service__WEBPACK_IMPORTED_MODULE_1__["default"]
                .getResultByMid(popupdata.slug, popupdata.mid)
                .then((res) => {
                  var _res$data;
                  setLoader(false);
                  setCasinoResult(
                    res === null || res === void 0
                      ? void 0
                      : (_res$data = res.data) === null || _res$data === void 0
                      ? void 0
                      : _res$data.data
                  );
                  if (
                    popupdata.slug === "Andarbahar" ||
                    popupdata.slug === "Andarbahar2"
                  ) {
                    // @ts-ignore
                    globalThis.$(".owl-carousel").owlCarousel({
                      rtl: true,
                      loop: true,
                      margin: 10,
                      dots: false,
                      responsiveClass: true,
                      responsive: {
                        0: {
                          items: popupdata.slug === "Andarbahar2" ? 3 : 8,
                          nav: true,
                        },
                        1000: {
                          items: 10,
                          nav: true,
                          loop: false,
                        },
                      },
                    });
                  }
                });
            }
          }, [props.popupdata]);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
            react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"],
            {
              show: popupstatus,
              onHide: () => setPopStatus(false),
              size: "lg",
              className: "casino-result-modal",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                  react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"]
                    .Header,
                  {
                    className: "text-white bg",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                      "div",
                      {
                        className:
                          "bg w-100 d-flex flex-row justify-content-between",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                          "h4",
                          {
                            className: "text-white mb-0",
                            style: {
                              width: "100%",
                            },
                            children: [
                              " ",
                              (popupdata === null || popupdata === void 0
                                ? void 0
                                : (_popupdata$event_data =
                                    popupdata.event_data) === null ||
                                  _popupdata$event_data === void 0
                                ? void 0
                                : _popupdata$event_data.title) || "",
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                "span",
                                {
                                  style: {
                                    float: "right",
                                  },
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                    "i",
                                    {
                                      className: "fa fa-times text-white",
                                      "aria-hidden": "true",
                                      onClick: () => setPopStatus(false),
                                      style: {
                                        cursor: "pointer",
                                        fontSize: "24px",
                                      },
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 54,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 53,
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
                            lineNumber: 50,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                  react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Body,
                  {
                    children: loader
                      ? /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                          "div",
                          {
                            className: "text-center",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                              "i",
                              {
                                className: "mx-5 fas fa-spinner fa-spin",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 69,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 11,
                          },
                          undefined
                        )
                      : /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                          "div",
                          {
                            dangerouslySetInnerHTML: {
                              __html:
                                (casinoResult === null ||
                                casinoResult === void 0
                                  ? void 0
                                  : casinoResult.html) || "",
                            },
                            className: popupdata.slug,
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
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 65,
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
              lineNumber: 42,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(CasinoResultDetail, "Ylt5q0+7oDLVb8JTfNAIxeSs0Yo=");
        _c = CasinoResultDetail;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            CasinoResultDetail
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "CasinoResultDetail");
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

    /***/ "./src/pages/CasinoList/component/_common/ResultList/ResultListItem.tsx":
      /*!******************************************************************************!*\
  !*** ./src/pages/CasinoList/component/_common/ResultList/ResultListItem.tsx ***!
  \******************************************************************************/
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
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/CasinoList/component/_common/ResultList/ResultListItem.tsx";

        const ResultListItem = (props) => {
          var _item$data;
          const { item, index, dateString, setPopupData } = props;
          const getround = (ro) => {
            const sp = ro.split(".");
            return sp[1];
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                "tr",
                {
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                      "td",
                      {
                        className: "text-center",
                        children: index + 1,
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
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                      "td",
                      {
                        className: "text-center",
                        children: dateString,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 13,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                      "td",
                      {
                        className: "text-center",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                          "a",
                          {
                            href: "javascript:void(0);",
                            style: {
                              color: "blue",
                            },
                            onClick: () => {
                              setPopupData(item);
                            },
                            children: item.mid ? getround(item.mid) : null,
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
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 16,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                      "td",
                      {
                        className: "text-center",
                        children: [
                          item === null || item === void 0
                            ? void 0
                            : (_item$data = item.data) === null ||
                              _item$data === void 0
                            ? void 0
                            : _item$data.winnerName,
                          " - ",
                          item.gameType,
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 28,
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
                  lineNumber: 11,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _c = ResultListItem;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            ResultListItem
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "ResultListItem");
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

    /***/ "./src/pages/CasinoList/component/_common/ResultList/index.tsx":
      /*!*********************************************************************!*\
  !*** ./src/pages/CasinoList/component/_common/ResultList/index.tsx ***!
  \*********************************************************************/
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
        /* harmony import */ var _ResultListItem__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./ResultListItem */ "./src/pages/CasinoList/component/_common/ResultList/ResultListItem.tsx"
          );
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../../_layout/elements/mobile-subheader */ "./src/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _services_casino_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../../../services/casino.service */ "./src/services/casino.service.ts"
          );
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../../../services/auth.service */ "./src/services/auth.service.ts"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _CasinoResultDetail__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../CasinoResultDetail */ "./src/pages/CasinoList/CasinoResultDetail.tsx"
          );
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js"
          );
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_8___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_paginate__WEBPACK_IMPORTED_MODULE_8__
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/CasinoList/component/_common/ResultList/index.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const ResultList = (props) => {
          _s();
          const [currentItems, setCurrentItems] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          const [filterdata, setfilterdata] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({
              startDate: "",
              matchid: "",
              roundId: "",
            });
          const handleformchange = (event) => {
            const filterObj = filterdata;
            filterObj[event.target.name] = event.target.value;
            setfilterdata(filterObj);
          };
          const params = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
          const [games, setCasinoGames] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const [popupdata, setPopData] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [popupstatus, setPopStatus] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const filterObj = filterdata;
            filterObj.startDate =
              moment__WEBPACK_IMPORTED_MODULE_4___default()().format(
                "YYYY-MM-DD"
              );
            filterObj.matchid = params.matchid;
            setfilterdata(filterObj);

            // Only fetch casino games if user is authenticated
            if (
              _services_auth_service__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].isLoggedIn()
            ) {
              _services_casino_service__WEBPACK_IMPORTED_MODULE_5__["default"]
                .getCasinoList()
                .then((res) => {
                  setCasinoGames(res.data.data);
                })
                .catch((error) => {
                  console.log("Failed to fetch casino games:", error.message);
                  setCasinoGames([]);
                });
            }
            getdata(1);
          }, []);
          const setPopupData = (Item) => {
            // eslint-disable-next-line camelcase
            setPopData({
              slug: Item.gameType,
              mid: Item.mid,
              event_data: {
                title: params.matchid,
              },
            });
            setPopStatus(true);
          };
          const getdata = (page) => {
            _services_casino_service__WEBPACK_IMPORTED_MODULE_5__["default"]
              .getResultList(filterdata, page)
              .then((res) => {
                setCurrentItems(res.data.data);
              });
          };
          const handleSubmitform = (event) => {
            event.preventDefault();
            getdata(1);
          };
          const TransactionData = () => {
            return currentItems && currentItems.docs && currentItems.docs.length
              ? currentItems.docs.map((item, index) => {
                  return /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                    _ResultListItem__WEBPACK_IMPORTED_MODULE_1__["default"],
                    {
                      game_id: filterdata.matchid,
                      item: item,
                      index: index,
                      offset: 0,
                      dateString: filterdata.startDate,
                      setPopupData: setPopupData,
                    },
                    index,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 11,
                    },
                    undefined
                  );
                })
              : /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                  "tr",
                  {
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                      "td",
                      {
                        colSpan: 9,
                        style: {
                          textAlign: "center",
                        },
                        children: "No Result Found",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 7,
                  },
                  undefined
                );
          };
          const handlePageClick = (event) => {
            getdata(event.selected + 1);
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].subheader("Casino Result"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                  "div",
                  {
                    className:
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                        ? "col-md-12 mt-1"
                        : "col-md-12 padding-custom",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                      "div",
                      {
                        className: "",
                        children: [
                          _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_2__[
                            "default"
                          ].subheaderdesktop("Casino Result"),
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
                                                                "select",
                                                                {
                                                                  className:
                                                                    "form-control",
                                                                  name: "matchid",
                                                                  onChange:
                                                                    handleformchange,
                                                                  defaultValue:
                                                                    filterdata.matchid,
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                                      "option",
                                                                      {
                                                                        value:
                                                                          "",
                                                                        children:
                                                                          "Select Game",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 115,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    games &&
                                                                      games.length >
                                                                        0 &&
                                                                      games.map(
                                                                        (
                                                                          Item,
                                                                          index
                                                                        ) => {
                                                                          return /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                                                            "option",
                                                                            {
                                                                              selected:
                                                                                filterdata.matchid ==
                                                                                Item.slug,
                                                                              value:
                                                                                Item.slug,
                                                                              children:
                                                                                Item.title,
                                                                            },
                                                                            index,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 120,
                                                                              columnNumber: 33,
                                                                            },
                                                                            undefined
                                                                          );
                                                                        }
                                                                      ),
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 109,
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
                                                            lineNumber: 108,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 107,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 106,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 105,
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
                                                                  name: "roundId",
                                                                  type: "text",
                                                                  autoComplete:
                                                                    "off",
                                                                  onChange:
                                                                    handleformchange,
                                                                  defaultValue:
                                                                    filterdata.roundId,
                                                                  placeholder:
                                                                    "Round Id",
                                                                  className:
                                                                    "mx-input ng-pristine ng-valid ng-touched",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 138,
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
                                                            lineNumber: 137,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 136,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 135,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 134,
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
                                                                  lineNumber: 155,
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
                                                            lineNumber: 154,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 153,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 152,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 151,
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
                                                  lineNumber: 170,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 169,
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
                                        lineNumber: 104,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 99,
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
                                                        lineNumber: 180,
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
                                                        children: "Date Time",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 181,
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
                                                        children: "RoundId",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 184,
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
                                                        children: "Winner",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 187,
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
                                                  lineNumber: 179,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 178,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            "tbody",
                                            {
                                              children: TransactionData(),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 190,
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
                                        lineNumber: 177,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 176,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "div",
                                  {
                                    style: {
                                      overflow: "scroll",
                                    },
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      react_paginate__WEBPACK_IMPORTED_MODULE_8___default(),
                                      {
                                        breakLabel: "...",
                                        nextLabel: ">>",
                                        onPageChange: handlePageClick,
                                        pageRangeDisplayed: 1,
                                        pageCount: currentItems.totalPages,
                                        containerClassName: "pagination",
                                        activeClassName: "active",
                                        previousLabel: "<<",
                                        breakClassName: "break-me",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 194,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 193,
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
                              lineNumber: 98,
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
                        lineNumber: 96,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                  _CasinoResultDetail__WEBPACK_IMPORTED_MODULE_7__["default"],
                  {
                    popupdata: popupdata,
                    setPopStatus: setPopStatus,
                    popupstatus: popupstatus,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 209,
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
        _s(ResultList, "61N1+pATrHI4+baLSAmWcK6Q+u8=", false, function () {
          return [react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams];
        });
        _c = ResultList;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            ResultList
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "ResultList");
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
//# sourceMappingURL=src_pages_CasinoList_component__common_ResultList_index_tsx.chunk.js.map
