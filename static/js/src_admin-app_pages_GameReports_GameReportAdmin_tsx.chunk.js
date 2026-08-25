"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_GameReports_GameReportAdmin_tsx"],
  {
    /***/ "./src/admin-app/components/CustomAutoComplete.tsx":
      /*!*********************************************************!*\
  !*** ./src/admin-app/components/CustomAutoComplete.tsx ***!
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
        /* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js"
          );
        /* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_autosuggest__WEBPACK_IMPORTED_MODULE_1__
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/components/CustomAutoComplete.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // import { AxiosResponse } from 'axios'
        // import React, { forwardRef, useImperativeHandle } from 'react'
        // import Autosuggest from 'react-autosuggest'

        // const CustomAutoComplete = forwardRef(
        //   (
        //     { onSuggestionsFetchRequested, onSelectUser, placeHolder, onSuggestionsClear }: any,
        //     ref: any,
        //   ) => {
        //     const [value, setValue] = React.useState('')
        //     const [suggestions, setSuggestions] = React.useState([])

        //     const onChangeAuto = (event: any, { newValue }: any) => {
        //       setValue(newValue)
        //     }

        //     const onFetchData = ({ value }: any) => {
        //       setValue(value)
        //       onSuggestionsFetchRequested({ value: value }).then((res: AxiosResponse) => {
        //         setSuggestions(res.data.data)
        //       })
        //     }

        //     const getSuggestionValue = (suggestion: any) => {
        //       onSelectUser(suggestion)
        //       return suggestion.username
        //     }

        //     const renderSuggestion = (suggestion: any) => (
        //       <div className='dropdown-item'>{suggestion.username}</div>
        //     )

        //     const inputProps = {
        //       placeholder: placeHolder ? placeHolder : 'Search User',
        //       value,
        //       onChange: onChangeAuto,
        //     }
        //     const onSuggestionsClearRequested = () => {
        //       //setValue('')
        //       //setSuggestions([])
        //     }

        //     useImperativeHandle(
        //       ref,
        //       () => {
        //         return {
        //           resetValue() {
        //             setValue('')
        //             setSuggestions([])
        //           },
        //         }
        //       },
        //       [],
        //     )

        //     return <>
        //       <Autosuggest
        //         suggestions={suggestions}
        //         onSuggestionsFetchRequested={onFetchData}
        //         onSuggestionsClearRequested={onSuggestionsClearRequested}
        //         getSuggestionValue={getSuggestionValue}
        //         renderSuggestion={renderSuggestion}
        //         inputProps={inputProps}
        //         theme={{
        //           suggestionsList: 'dropdown-menu show',
        //           input: 'mx-input',
        //           suggestionsContainer: 'dropdown',
        //         }}
        //       />
        //     </>

        //   },
        // )

        // export default CustomAutoComplete

        const CustomAutoComplete = /*#__PURE__*/ _s(
          /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
            (_c = _s(
              (
                {
                  onSuggestionsFetchRequested,
                  onSelectUser,
                  onChangeSelectValue,
                  onSelectedValue,
                  placeHolder,
                  onSuggestionsClear,
                  title,
                  data,
                  userType,
                  apiService,
                },
                ref
              ) => {
                _s();
                const [value, setValue] =
                  react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
                const [suggestions, setSuggestions] =
                  react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
                const onChangeAuto = (event, { newValue }) => {
                  setValue(newValue);
                };
                const onFetchData = ({ value }) => {
                  setValue(value);
                  if (typeof onSuggestionsFetchRequested === "function") {
                    onSuggestionsFetchRequested({
                      value: value,
                    }).then((res) => {
                      setSuggestions(res.data.data);
                    });
                  }
                };
                const getSuggestionValue = (suggestion) => {
                  // Handle different callback prop names for backward compatibility
                  if (typeof onSelectUser === "function") {
                    onSelectUser(suggestion);
                  } else if (typeof onChangeSelectValue === "function") {
                    onChangeSelectValue(suggestion);
                  } else if (typeof onSelectedValue === "function") {
                    onSelectedValue(suggestion);
                  }
                  return suggestion.username;
                };
                const renderSuggestion = (suggestion) =>
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                    "div",
                    {
                      className: "dropdown-item",
                      children: suggestion.username,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 7,
                    },
                    undefined
                  );
                const inputProps = {
                  placeholder: placeHolder ? placeHolder : "Search User",
                  value,
                  onChange: onChangeAuto,
                };
                const onSuggestionsClearRequested = () => {
                  //setValue('')
                  //setSuggestions([])
                };
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(
                  ref,
                  () => {
                    return {
                      resetValue() {
                        setValue("");
                        setSuggestions([]);
                      },
                    };
                  },
                  []
                );
                return /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                  {
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                      react_autosuggest__WEBPACK_IMPORTED_MODULE_1___default(),
                      {
                        suggestions: suggestions,
                        onSuggestionsFetchRequested: onFetchData,
                        onSuggestionsClearRequested:
                          onSuggestionsClearRequested,
                        getSuggestionValue: getSuggestionValue,
                        renderSuggestion: renderSuggestion,
                        inputProps: inputProps,
                        theme: {
                          suggestionsList: "dropdown-menu show",
                          input: "mx-input",
                          suggestionsContainer: "dropdown",
                        },
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 172,
                        columnNumber: 7,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false
                );
              },
              "mf8BjM/nuV0/dLMR5Llgg5JPMEE="
            ))
          ),
          "mf8BjM/nuV0/dLMR5Llgg5JPMEE="
        );
        _c2 = CustomAutoComplete;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CustomAutoComplete;
        var _c, _c2;
        __webpack_require__.$Refresh$.register(
          _c,
          "CustomAutoComplete$forwardRef"
        );
        __webpack_require__.$Refresh$.register(_c2, "CustomAutoComplete");

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

    /***/ "./src/admin-app/pages/GameReports/GameReportAdmin.tsx":
      /*!*************************************************************!*\
  !*** ./src/admin-app/pages/GameReports/GameReportAdmin.tsx ***!
  \*************************************************************/
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
            /*! ../_layout/elements/mobile-subheader */ "./src/admin-app/pages/_layout/elements/mobile-subheader.tsx"
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
            /*! ../../../services/account.service */ "./src/services/account.service.ts"
          );
        /* harmony import */ var _components_CustomAutoComplete__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../components/CustomAutoComplete */ "./src/admin-app/components/CustomAutoComplete.tsx"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _models_SportTypes__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../models/SportTypes */ "./src/models/SportTypes.ts"
          );
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/GameReports/GameReportAdmin.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const GameReportAdmin = () => {
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
          const [pnlboxFinal, setPnlbox] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [submitClicked, setSubmitClicked] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const autoRef =
            react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
          const getDateTime =
            react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
              const filterObj = filterdata;
              filterObj.startDate =
                moment__WEBPACK_IMPORTED_MODULE_5___default()()
                  .subtract(7, "days")
                  .format("YYYY-MM-DD");
              filterObj.endDate =
                moment__WEBPACK_IMPORTED_MODULE_5___default()().format(
                  "YYYY-MM-DD"
                );
              return filterObj;
            }, []);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            setfilterdata(getDateTime);
            getAccountStmt(1);
          }, []);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (submitClicked) {
              getAccountStmt(1);
              setSubmitClicked(false); // Reset submitClicked state
            }
          }, [submitClicked]);
          const getAccountStmt = (page) => {
            _services_account_service__WEBPACK_IMPORTED_MODULE_6__["default"]
              .getProfitLoss(page, filterdata)
              .then((res) => {
                res &&
                  res.data &&
                  res.data.data &&
                  setbethistory(res.data.data);
                res && res.data && res.data.data && sportsPlBox(res.data.data);
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
            setSubmitClicked(true);
          };
          const handlePageClick = (event) => {
            getAccountStmt(event.selected + 1);
          };
          const onSuggestionsFetchRequested = ({ value }) => {
            return _services_user_service__WEBPACK_IMPORTED_MODULE_8__[
              "default"
            ].getUserListSuggestion({
              username: value,
            });
          };
          const onSelectUser = (user) => {
            setfilterdata({
              ...filterdata,
              userId: user._id,
            });
          };
          const reset = () => {
            autoRef.current.resetValue();
            setfilterdata(getDateTime);
            setSubmitClicked(true);
          };
          const trrepeat = (Item, index) => {
            var _Item$total;
            const classdata = Item.total > 0 ? "green" : "red";
            const splitname =
              Item.narration != "" ? Item.narration.split("/")[0] : "";
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,
              {
                children: /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                  "tr",
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                        "td",
                        {
                          className: "text-center",
                          children:
                            _models_SportTypes__WEBPACK_IMPORTED_MODULE_9__
                              .SportName[Item.sportId],
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
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                        "td",
                        {
                          className: "text-center wnwrap",
                          children: splitname,
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
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
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
                          lineNumber: 89,
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
                    lineNumber: 86,
                    columnNumber: 9,
                  },
                  undefined
                ),
              },
              void 0,
              false
            );
          };
          const sportsPlBox = (bethistory) => {
            const pnlbox = {};
            bethistory &&
              bethistory.items &&
              bethistory.items.length &&
              bethistory.items.map((item, index) => {
                const splitname =
                  item.narration != "" ? item.narration.split("/")[0] : "";
                const sportsNameData =
                  _models_SportTypes__WEBPACK_IMPORTED_MODULE_9__.SportName[
                    item.sportId
                  ];
                if (sportsNameData != "Casino") {
                  var _item$total;
                  pnlbox[sportsNameData] =
                    (pnlbox === null || pnlbox === void 0
                      ? void 0
                      : pnlbox[sportsNameData]) ||
                    0 +
                      +(item === null || item === void 0
                        ? void 0
                        : (_item$total = item.total) === null ||
                          _item$total === void 0
                        ? void 0
                        : _item$total.toFixed(2)) ||
                    0;
                } else {
                  var _item$total2;
                  pnlbox[splitname] =
                    (pnlbox === null || pnlbox === void 0
                      ? void 0
                      : pnlbox[splitname]) ||
                    0 +
                      +(item === null || item === void 0
                        ? void 0
                        : (_item$total2 = item.total) === null ||
                          _item$total2 === void 0
                        ? void 0
                        : _item$total2.toFixed(2)) ||
                    0;
                }
              });
            setPnlbox(pnlbox);
          };
          const TransactionData =
            bethistory && bethistory.items && bethistory.items.length
              ? bethistory.items.map((item, index) => {
                  return trrepeat(item, index);
                })
              : /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                  "tr",
                  {
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
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
                        lineNumber: 114,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 7,
                  },
                  undefined
                );
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ].subheaderdesktopadmin("Game Reports"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                  "div",
                  {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      "div",
                      {
                        className: "row",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                          "div",
                          {
                            className:
                              !react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile
                                ? "col-md-12 mt-1"
                                : "col-md-12 padding-custom",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                              "div",
                              {
                                className: "",
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                    "div",
                                    {
                                      className: "card-body p15 bg-gray mb-20",
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                        "form",
                                        {
                                          className:
                                            "ng-pristine ng-valid ng-touched mb-0",
                                          method: "post",
                                          onSubmit: handleSubmitform,
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                            "div",
                                            {
                                              className: "row row5",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-6 col-lg-2 mbc-5",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        "label",
                                                        {
                                                          className: "label",
                                                          children: "User",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 134,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        _components_CustomAutoComplete__WEBPACK_IMPORTED_MODULE_7__[
                                                          "default"
                                                        ],
                                                        {
                                                          onSuggestionsFetchRequested:
                                                            onSuggestionsFetchRequested,
                                                          onSelectUser:
                                                            onSelectUser,
                                                          ref: autoRef,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 135,
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
                                                    lineNumber: 133,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-6 col-lg-2 mbc-5",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "form-group mb-0",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "label",
                                                              children:
                                                                "Start Date",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 143,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "mx-datepicker",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "mx-input-wrapper",
                                                                    children:
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
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
                                                                          lineNumber: 146,
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
                                                                    lineNumber: 145,
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
                                                              lineNumber: 144,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 142,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 141,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-6 col-lg-2 mbc-5",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "form-group mb-0",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "label",
                                                              children:
                                                                "End Date",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 161,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "mx-datepicker",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "mx-input-wrapper",
                                                                    children:
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
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
                                                                          lineNumber: 164,
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
                                                                    lineNumber: 163,
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
                                                              lineNumber: 162,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 160,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 159,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-12 col-lg-1 mbc-5",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        "label",
                                                        {
                                                          className: "label",
                                                          children: "\xA0",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 178,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        _components_SubmitButton__WEBPACK_IMPORTED_MODULE_10__[
                                                          "default"
                                                        ],
                                                        {
                                                          type: "submit",
                                                          className:
                                                            "btn btn-primary btn-block",
                                                          children: "Submit",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 179,
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
                                                    lineNumber: 177,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-12 col-lg-1 mbc-5",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        "label",
                                                        {
                                                          className: "label",
                                                          children: "\xA0",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 184,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        "button",
                                                        {
                                                          type: "button",
                                                          onClick: reset,
                                                          className:
                                                            "btn btn-primary btn-block",
                                                          children: "Reset",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 185,
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
                                                    lineNumber: 183,
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
                                              lineNumber: 132,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 127,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 126,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                    "div",
                                    {
                                      className: "card-body",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                          "div",
                                          {
                                            className: "table-responsive",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                              "table",
                                              {
                                                id: "customers1",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                    "thead",
                                                    {
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "tr",
                                                          {
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "th",
                                                                {
                                                                  className:
                                                                    "text-center bg2 text-white wnwrap",
                                                                  children:
                                                                    "Event Type",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 198,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "th",
                                                                {
                                                                  className:
                                                                    "text-center bg2 text-white wnwrap",
                                                                  children:
                                                                    "Event Name ",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 199,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "th",
                                                                {
                                                                  className:
                                                                    "text-center bg2 text-white wnwrap",
                                                                  children:
                                                                    "Amount",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 200,
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
                                                            lineNumber: 197,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 196,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                    "tbody",
                                                    {
                                                      children: TransactionData,
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 203,
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
                                                lineNumber: 195,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 194,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
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
                                            lineNumber: 206,
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
                                      lineNumber: 192,
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
                                lineNumber: 125,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 124,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 122,
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
        _s(GameReportAdmin, "wob2l6ucgls49eLHYx9Xu1J0x0U=");
        _c = GameReportAdmin;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          GameReportAdmin;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "GameReportAdmin");

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

    /***/ "./src/admin-app/pages/_layout/elements/mobile-subheader.tsx":
      /*!*******************************************************************!*\
  !*** ./src/admin-app/pages/_layout/elements/mobile-subheader.tsx ***!
  \*******************************************************************/
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
          "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/_layout/elements/mobile-subheader.tsx";

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
        const subheaderdesktopadmin = (title, subtitle = "") => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
            "div",
            {
              className: "card-header card-header-admin mb-20",
              children: [
                /*#__PURE__*/ (0,
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
                    lineNumber: 23,
                    columnNumber: 7,
                  },
                  undefined
                ),
                subtitle != ""
                  ? /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
                      "div",
                      {
                        className: "m-t-5",
                        children: subtitle,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 24,
                        columnNumber: 25,
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
              lineNumber: 22,
              columnNumber: 5,
            },
            undefined
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
          subheader,
          subheaderdesktop,
          subheaderdesktopadmin,
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
//# sourceMappingURL=src_admin-app_pages_GameReports_GameReportAdmin_tsx.chunk.js.map
