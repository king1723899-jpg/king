"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  [
    "src_admin-app_components_CustomAutoComplete_tsx-src_admin-app_pages__layout_elements_mobile-s-5def75",
  ],
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

    /***/ "./src/admin-app/pages/transaction-statement/modal/BankDetailModal.tsx":
      /*!*****************************************************************************!*\
  !*** ./src/admin-app/pages/transaction-statement/modal/BankDetailModal.tsx ***!
  \*****************************************************************************/
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
        /* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../../config/config */ "./src/config/config.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/transaction-statement/modal/BankDetailModal.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const BankDetailModal = ({ bankDetails }) => {
          _s();
          var _bankDetails$bankDeta,
            _bankDetails$bankDeta2,
            _bankDetails$bankDeta3,
            _bankDetails$bankDeta4;
          const [currentImageUrl, setCurrentImageUrl] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

          // Helper function to get the correct image URL
          const getImageUrl = () => {
            // Check multiple possible image field names
            const imageField =
              (bankDetails === null || bankDetails === void 0
                ? void 0
                : bankDetails.imageUrl) ||
              (bankDetails === null || bankDetails === void 0
                ? void 0
                : bankDetails.imagePath) ||
              (bankDetails === null || bankDetails === void 0
                ? void 0
                : bankDetails.image) ||
              (bankDetails === null || bankDetails === void 0
                ? void 0
                : bankDetails.uploadedImage);
            if (imageField) {
              // If it's already a full URL, use it directly
              if (
                imageField.startsWith("http://") ||
                imageField.startsWith("https://")
              ) {
                return imageField;
              }

              // If it's a file object with name property, construct the URL
              if (imageField.name) {
                // Point to the fan-server-stone server for uploads
                return `${_config_config__WEBPACK_IMPORTED_MODULE_1__.config.UPLOAD_SERVER_URL}/uploads/${imageField.name}`;
              }

              // If it's a path string, construct the URL
              if (typeof imageField === "string") {
                // Fix Windows path separators and point to the correct server
                const cleanPath = imageField
                  .replace(/\\/g, "/")
                  .replace(/^uploads\//, "");
                return `${_config_config__WEBPACK_IMPORTED_MODULE_1__.config.UPLOAD_SERVER_URL}/uploads/${cleanPath}`;
              }
            }
            return null;
          };

          // Determine if this is a withdrawal or deposit based on the explicit transaction type
          const isWithdrawal = () => {
            // Use the explicit transaction type if available, otherwise fall back to data structure detection
            if (
              bankDetails !== null &&
              bankDetails !== void 0 &&
              bankDetails.transactionType
            ) {
              return bankDetails.transactionType === "withdraw";
            }
            // Fallback: Check if this looks like withdrawal data
            return (
              (bankDetails === null || bankDetails === void 0
                ? void 0
                : bankDetails.accountType) ||
              (bankDetails === null || bankDetails === void 0
                ? void 0
                : bankDetails.bankName) ||
              (bankDetails === null || bankDetails === void 0
                ? void 0
                : bankDetails.accountNumber) ||
              (bankDetails === null || bankDetails === void 0
                ? void 0
                : bankDetails.ifscCode)
            );
          };

          // Get the appropriate title
          const getModalTitle = () => {
            return isWithdrawal() ? "Withdrawal Details" : "Deposit Details";
          };

          // Update image URL when bankDetails change
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (bankDetails && Object.keys(bankDetails).length > 0) {
              const newImageUrl = getImageUrl();
              setCurrentImageUrl(newImageUrl);
              console.log(
                "BankDetailModal updated with new data:",
                bankDetails
              );
              console.log("Transaction type:", bankDetails.transactionType);
              console.log("Is withdrawal:", isWithdrawal());
              console.log("New image URL:", newImageUrl);
            }
          }, [bankDetails]);

          // Handle modal close to reset state
          const handleModalClose = () => {
            setCurrentImageUrl(null);
            console.log("Modal closed, state reset");
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
            "div",
            {
              className: "modal fade",
              id: "bankModal",
              tabIndex: -1,
              role: "dialog",
              "aria-labelledby": "bankModalCenterTitle",
              "aria-hidden": "true",
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                "div",
                {
                  className: "modal-dialog modal-lg modal-login-new",
                  role: "document",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
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
                                  className: "modal-title",
                                  id: "bankModalCenterTitle",
                                  children: getModalTitle(),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 80,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                "button",
                                {
                                  type: "button",
                                  className: "close",
                                  "data-dismiss": "modal",
                                  "aria-label": "Close",
                                  onClick: handleModalClose,
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                    "span",
                                    {
                                      "aria-hidden": "true",
                                      children: "\xD7",
                                    },
                                    void 0,
                                    false,
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
                                  lineNumber: 83,
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
                            lineNumber: 79,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                          "div",
                          {
                            className: "modal-body",
                            children: isWithdrawal()
                              ? /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                  "div",
                                  {
                                    className: "container-fluid",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row m-b-20",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                              "div",
                                              {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "label",
                                                  {
                                                    className:
                                                      "deposite-user-first",
                                                    children: "Amount:",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 94,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 93,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                              "div",
                                              {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "label",
                                                  {
                                                    className:
                                                      "deposite-user-first",
                                                    children: [
                                                      "\u20B9",
                                                      bankDetails === null ||
                                                      bankDetails === void 0
                                                        ? void 0
                                                        : bankDetails.amount,
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 97,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 96,
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
                                          lineNumber: 92,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row m-b-20",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                              "div",
                                              {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "label",
                                                  {
                                                    className:
                                                      "deposite-user-first",
                                                    children: "Status:",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 102,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 101,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                              "div",
                                              {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "label",
                                                  {
                                                    className:
                                                      "deposite-user-first",
                                                    style: {
                                                      textTransform:
                                                        "capitalize",
                                                      color:
                                                        (bankDetails === null ||
                                                        bankDetails === void 0
                                                          ? void 0
                                                          : bankDetails.status) ===
                                                        "approved"
                                                          ? "green"
                                                          : (bankDetails ===
                                                              null ||
                                                            bankDetails ===
                                                              void 0
                                                              ? void 0
                                                              : bankDetails.status) ===
                                                            "rejected"
                                                          ? "red"
                                                          : "orange",
                                                    },
                                                    children:
                                                      (bankDetails === null ||
                                                      bankDetails === void 0
                                                        ? void 0
                                                        : bankDetails.status) ||
                                                      "N/A",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 105,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 104,
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
                                          lineNumber: 100,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row m-b-20",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                              "div",
                                              {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "label",
                                                  {
                                                    className:
                                                      "deposite-user-first",
                                                    children: "Account Type:",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 118,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
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
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                              "div",
                                              {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "label",
                                                  {
                                                    className:
                                                      "deposite-user-first",
                                                    style: {
                                                      textTransform:
                                                        "capitalize",
                                                    },
                                                    children:
                                                      (bankDetails === null ||
                                                      bankDetails === void 0
                                                        ? void 0
                                                        : bankDetails.accountType) ||
                                                      "N/A",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 121,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
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
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 116,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      (bankDetails === null ||
                                      bankDetails === void 0
                                        ? void 0
                                        : bankDetails.accountType) === "upi"
                                        ? /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                            "div",
                                            {
                                              className: "row m-b-20",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-md-6",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "label",
                                                      {
                                                        className:
                                                          "deposite-user-first",
                                                        children: "UPI ID:",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 131,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
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
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-md-6",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "label",
                                                      {
                                                        className:
                                                          "deposite-user-first",
                                                        style: {
                                                          textTransform:
                                                            "capitalize",
                                                        },
                                                        children:
                                                          (bankDetails ===
                                                            null ||
                                                          bankDetails === void 0
                                                            ? void 0
                                                            : (_bankDetails$bankDeta =
                                                                bankDetails.bankDetail) ===
                                                                null ||
                                                              _bankDetails$bankDeta ===
                                                                void 0
                                                            ? void 0
                                                            : _bankDetails$bankDeta.upiId) ||
                                                          "N/A",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 134,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 133,
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
                                          )
                                        : /*#__PURE__*/
                                          /* Show bank-specific information when accountType is "bank" */
                                          (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                            {
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "row m-b-20",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className: "col-md-6",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "deposite-user-first",
                                                                children:
                                                                  "Account Holder Name:",
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
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 143,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className: "col-md-6",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "deposite-user-first",
                                                                style: {
                                                                  textTransform:
                                                                    "capitalize",
                                                                },
                                                                children:
                                                                  (bankDetails ===
                                                                    null ||
                                                                  bankDetails ===
                                                                    void 0
                                                                    ? void 0
                                                                    : (_bankDetails$bankDeta2 =
                                                                        bankDetails.bankDetail) ===
                                                                        null ||
                                                                      _bankDetails$bankDeta2 ===
                                                                        void 0
                                                                    ? void 0
                                                                    : _bankDetails$bankDeta2.accountHolderName) ||
                                                                  "N/A",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 147,
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
                                                          lineNumber: 146,
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
                                                    lineNumber: 142,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "row m-b-20",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className: "col-md-6",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "deposite-user-first",
                                                                children:
                                                                  "Bank Name:",
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
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className: "col-md-6",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "deposite-user-first",
                                                                style: {
                                                                  textTransform:
                                                                    "capitalize",
                                                                },
                                                                children:
                                                                  (bankDetails ===
                                                                    null ||
                                                                  bankDetails ===
                                                                    void 0
                                                                    ? void 0
                                                                    : bankDetails.accountType) ||
                                                                  "N/A",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 157,
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
                                                          lineNumber: 156,
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
                                                    lineNumber: 152,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "row m-b-20",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className: "col-md-6",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "deposite-user-first",
                                                                children:
                                                                  "Account Number:",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 164,
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
                                                          lineNumber: 163,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className: "col-md-6",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "deposite-user-first",
                                                                style: {
                                                                  textTransform:
                                                                    "capitalize",
                                                                },
                                                                children:
                                                                  (bankDetails ===
                                                                    null ||
                                                                  bankDetails ===
                                                                    void 0
                                                                    ? void 0
                                                                    : (_bankDetails$bankDeta3 =
                                                                        bankDetails.bankDetail) ===
                                                                        null ||
                                                                      _bankDetails$bankDeta3 ===
                                                                        void 0
                                                                    ? void 0
                                                                    : _bankDetails$bankDeta3.accountNumber) ||
                                                                  "N/A",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 167,
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
                                                          lineNumber: 166,
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
                                                    lineNumber: 162,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "row m-b-20",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className: "col-md-6",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "deposite-user-first",
                                                                children:
                                                                  "IFSC Code:",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 174,
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
                                                          lineNumber: 173,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className: "col-md-6",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "deposite-user-first",
                                                                style: {
                                                                  textTransform:
                                                                    "capitalize",
                                                                },
                                                                children:
                                                                  (bankDetails ===
                                                                    null ||
                                                                  bankDetails ===
                                                                    void 0
                                                                    ? void 0
                                                                    : (_bankDetails$bankDeta4 =
                                                                        bankDetails.bankDetail) ===
                                                                        null ||
                                                                      _bankDetails$bankDeta4 ===
                                                                        void 0
                                                                    ? void 0
                                                                    : _bankDetails$bankDeta4.ifscCode) ||
                                                                  "N/A",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 177,
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
                                                          lineNumber: 176,
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
                                                    lineNumber: 172,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true
                                          ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 90,
                                    columnNumber: 15,
                                  },
                                  undefined
                                )
                              : /*#__PURE__*/
                                /* Show deposit information with image section */
                                (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                  {
                                    children: currentImageUrl
                                      ? /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                          "div",
                                          {
                                            className: "container-fluid",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-md-12",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                          "h6",
                                                          {
                                                            className: "mb-3",
                                                            children:
                                                              "Uploaded Image:",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 192,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                          "img",
                                                          {
                                                            src: currentImageUrl,
                                                            alt: "Receipt Image",
                                                            style: {
                                                              height: "auto",
                                                              width: "100%",
                                                              maxHeight:
                                                                "500px",
                                                              objectFit:
                                                                "contain",
                                                              border:
                                                                "1px solid #ddd",
                                                              borderRadius:
                                                                "8px",
                                                            },
                                                            onError: (e) => {
                                                              console.error(
                                                                "Image failed to load:",
                                                                currentImageUrl
                                                              );
                                                              const target =
                                                                e.currentTarget;
                                                              target.style.display =
                                                                "none";
                                                              const errorDiv =
                                                                target.nextElementSibling;
                                                              if (errorDiv) {
                                                                errorDiv.style.display =
                                                                  "block";
                                                              }
                                                            },
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 193,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                          "div",
                                                          {
                                                            style: {
                                                              display: "none",
                                                              textAlign:
                                                                "center",
                                                              padding: "20px",
                                                              color: "#666",
                                                            },
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                                "p",
                                                                {
                                                                  children:
                                                                    "Image could not be loaded",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 215,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                                "p",
                                                                {
                                                                  children: [
                                                                    "Image path: ",
                                                                    currentImageUrl,
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 216,
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
                                                            lineNumber: 214,
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
                                                      lineNumber: 191,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 190,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                "Amount:",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 224,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 223,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children: [
                                                                "\u20B9",
                                                                bankDetails ===
                                                                  null ||
                                                                bankDetails ===
                                                                  void 0
                                                                  ? void 0
                                                                  : bankDetails.amount,
                                                              ],
                                                            },
                                                            void 0,
                                                            true,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 227,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 226,
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
                                                  lineNumber: 222,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                "Status:",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 232,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 231,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              style: {
                                                                textTransform:
                                                                  "capitalize",
                                                                color:
                                                                  (bankDetails ===
                                                                    null ||
                                                                  bankDetails ===
                                                                    void 0
                                                                    ? void 0
                                                                    : bankDetails.status) ===
                                                                  "approved"
                                                                    ? "green"
                                                                    : (bankDetails ===
                                                                        null ||
                                                                      bankDetails ===
                                                                        void 0
                                                                        ? void 0
                                                                        : bankDetails.status) ===
                                                                      "rejected"
                                                                    ? "red"
                                                                    : "orange",
                                                              },
                                                              children:
                                                                (bankDetails ===
                                                                  null ||
                                                                bankDetails ===
                                                                  void 0
                                                                  ? void 0
                                                                  : bankDetails.status) ||
                                                                "N/A",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 235,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 234,
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
                                                  lineNumber: 230,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                "UTR/Reference ID:",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 248,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 247,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                (bankDetails ===
                                                                  null ||
                                                                bankDetails ===
                                                                  void 0
                                                                  ? void 0
                                                                  : bankDetails.utrno) ||
                                                                "N/A",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 251,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
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
                                                  lineNumber: 246,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                "Payment Type:",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 256,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 255,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              style: {
                                                                textTransform:
                                                                  "capitalize",
                                                              },
                                                              children:
                                                                (bankDetails ===
                                                                  null ||
                                                                bankDetails ===
                                                                  void 0
                                                                  ? void 0
                                                                  : bankDetails.type) ||
                                                                "N/A",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 259,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 258,
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
                                                  lineNumber: 254,
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
                                            lineNumber: 189,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        )
                                      : /*#__PURE__*/
                                        /* Show deposit information without image */
                                        (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                          "div",
                                          {
                                            className: "container-fluid",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-md-12",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "alert alert-warning",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                                "strong",
                                                                {
                                                                  children:
                                                                    "No Image Available",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 271,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "mb-0 mt-2",
                                                                  children:
                                                                    "The uploaded image could not be found or displayed.",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 272,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "mb-0",
                                                                  children: [
                                                                    "Image field data: ",
                                                                    JSON.stringify(
                                                                      {
                                                                        imageUrl:
                                                                          bankDetails ===
                                                                            null ||
                                                                          bankDetails ===
                                                                            void 0
                                                                            ? void 0
                                                                            : bankDetails.imageUrl,
                                                                        imagePath:
                                                                          bankDetails ===
                                                                            null ||
                                                                          bankDetails ===
                                                                            void 0
                                                                            ? void 0
                                                                            : bankDetails.imagePath,
                                                                        image:
                                                                          bankDetails ===
                                                                            null ||
                                                                          bankDetails ===
                                                                            void 0
                                                                            ? void 0
                                                                            : bankDetails.image,
                                                                        uploadedImage:
                                                                          bankDetails ===
                                                                            null ||
                                                                          bankDetails ===
                                                                            void 0
                                                                            ? void 0
                                                                            : bankDetails.uploadedImage,
                                                                      },
                                                                      null,
                                                                      2
                                                                    ),
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 273,
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
                                                            lineNumber: 270,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 269,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 268,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                "Amount:",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 286,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 285,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children: [
                                                                "\u20B9",
                                                                bankDetails ===
                                                                  null ||
                                                                bankDetails ===
                                                                  void 0
                                                                  ? void 0
                                                                  : bankDetails.amount,
                                                              ],
                                                            },
                                                            void 0,
                                                            true,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 289,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 288,
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
                                                  lineNumber: 284,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                "Status:",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 294,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 293,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              style: {
                                                                textTransform:
                                                                  "capitalize",
                                                                color:
                                                                  (bankDetails ===
                                                                    null ||
                                                                  bankDetails ===
                                                                    void 0
                                                                    ? void 0
                                                                    : bankDetails.status) ===
                                                                  "approved"
                                                                    ? "green"
                                                                    : (bankDetails ===
                                                                        null ||
                                                                      bankDetails ===
                                                                        void 0
                                                                        ? void 0
                                                                        : bankDetails.status) ===
                                                                      "rejected"
                                                                    ? "red"
                                                                    : "orange",
                                                              },
                                                              children:
                                                                (bankDetails ===
                                                                  null ||
                                                                bankDetails ===
                                                                  void 0
                                                                  ? void 0
                                                                  : bankDetails.status) ||
                                                                "N/A",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 297,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 296,
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
                                                  lineNumber: 292,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                "UTR/Reference ID:",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 310,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 309,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                (bankDetails ===
                                                                  null ||
                                                                bankDetails ===
                                                                  void 0
                                                                  ? void 0
                                                                  : bankDetails.utrno) ||
                                                                "N/A",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 313,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 312,
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
                                                  lineNumber: 308,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row m-b-20",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              children:
                                                                "Payment Type:",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 318,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 317,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-md-6",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "deposite-user-first",
                                                              style: {
                                                                textTransform:
                                                                  "capitalize",
                                                              },
                                                              children:
                                                                (bankDetails ===
                                                                  null ||
                                                                bankDetails ===
                                                                  void 0
                                                                  ? void 0
                                                                  : bankDetails.type) ||
                                                                "N/A",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 321,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 320,
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
                                                  lineNumber: 316,
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
                                            lineNumber: 267,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                  },
                                  void 0,
                                  false
                                ),
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
                      ],
                    },
                    void 0,
                    true,
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
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(BankDetailModal, "WZUJrzEJhmcBuNbyYsbmU5WHcI0=");
        _c = BankDetailModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BankDetailModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "BankDetailModal");

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

    /***/ "./src/admin-app/pages/transaction-statement/modal/RejectedModal.tsx":
      /*!***************************************************************************!*\
  !*** ./src/admin-app/pages/transaction-statement/modal/RejectedModal.tsx ***!
  \***************************************************************************/
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
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js"
          );
        /* harmony import */ var _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../../services/deposit-withdraw.service */ "./src/services/deposit-withdraw.service.ts"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/transaction-statement/modal/RejectedModal.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const RejectedModal = ({ show, close, data }) => {
          _s();
          const location = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
          const [rejectedMessage, setRejectedMessage] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const handleChange = (e) => {
            setRejectedMessage(e.target.value);
          };
          const handleSubmit = async (e) => {
            e.preventDefault();
            const obj = {
              id: data._id,
              narration: rejectedMessage,
              balanceUpdateType:
                location.pathname == "/depositstatement" ? "D" : "W",
              status: "rejected",
            };
            const response =
              await _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ].updateDepositWithdrawStatus(obj);
            try {
              if (response !== null && response !== void 0 && response.data) {
                var _response$data;
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(
                  response === null || response === void 0
                    ? void 0
                    : (_response$data = response.data) === null ||
                      _response$data === void 0
                    ? void 0
                    : _response$data.message
                );
              }
            } catch (error) {
              var _response$data2;
              react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(
                response === null || response === void 0
                  ? void 0
                  : (_response$data2 = response.data) === null ||
                    _response$data2 === void 0
                  ? void 0
                  : _response$data2.message
              );
            }
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
            react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"],
            {
              show: show,
              onHide: close,
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                  "div",
                  {
                    className: "modal-header",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                        "h5",
                        {
                          className: "modal-title",
                          id: "rejectedModalCenterTitle",
                          children: "Rejected Reason",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 33,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          onClick: close,
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "span",
                            {
                              "aria-hidden": "true",
                              children: "\xD7",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 37,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 36,
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
                    lineNumber: 32,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                  "div",
                  {
                    className: "modal-body",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      "form",
                      {
                        className: "container-fluid",
                        onSubmit: handleSubmit,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "div",
                            {
                              className: "row m-b-20",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                "div",
                                {
                                  className: "col-md-12",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                    "input",
                                    {
                                      type: "text",
                                      placeholder: "Enter Message",
                                      onChange: handleChange,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 44,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 43,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
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
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "div",
                            {
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                "button",
                                {
                                  type: "submit",
                                  className: "btn btn-secondary",
                                  onClick: close,
                                  children: "Submit",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 48,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
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
                        lineNumber: 41,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 40,
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
              lineNumber: 31,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(RejectedModal, "YH3YOjmZomjc9YIXJ5buGnpBIlU=", false, function () {
          return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation];
        });
        _c = RejectedModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          RejectedModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "RejectedModal");

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
//# sourceMappingURL=src_admin-app_components_CustomAutoComplete_tsx-src_admin-app_pages__layout_elements_mobile-s-5def75.chunk.js.map
