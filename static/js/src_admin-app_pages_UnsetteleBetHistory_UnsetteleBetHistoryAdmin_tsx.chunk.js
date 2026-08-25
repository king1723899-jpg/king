"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_UnsetteleBetHistory_UnsetteleBetHistoryAdmin_tsx"],
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

    /***/ "./src/admin-app/pages/UnsetteleBetHistory/UnsetteleBetHistoryAdmin.tsx":
      /*!******************************************************************************!*\
  !*** ./src/admin-app/pages/UnsetteleBetHistory/UnsetteleBetHistoryAdmin.tsx ***!
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
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/admin-app/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _components_CustomAutoComplete__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../components/CustomAutoComplete */ "./src/admin-app/components/CustomAutoComplete.tsx"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _services_bet_service__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../services/bet.service */ "./src/services/bet.service.ts"
          );
        /* harmony import */ var _bet_list_component__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./bet-list.component */ "./src/admin-app/pages/UnsetteleBetHistory/bet-list.component.tsx"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../../../models/User */ "./src/models/User.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/UnsetteleBetHistory/UnsetteleBetHistoryAdmin.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const UnsetteleBetHistoryAdmin = ({ hideHeader, matchId }) => {
          _s();
          var _userState$user;
          const [bethistory, setbethistory] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const params = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)();
          const [filterdata, setfilterdata] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({
              status: "pending",
              type: params.type,
              matchId,
            });
          const sportList = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_8__.selectSportList
          );
          const [page, setPage] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(1);
          const [submitClicked, setSubmitClicked] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [selectAll, setSelectAll] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_13__.selectUserData
          );
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_11__.useWebsocketUser)();
          const ref = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const filterObj = filterdata;
            if (!matchId) {
              filterObj.startDate =
                moment__WEBPACK_IMPORTED_MODULE_3___default()()
                  .subtract(7, "days")
                  .format("YYYY-MM-DD");
              filterObj.endDate =
                moment__WEBPACK_IMPORTED_MODULE_3___default()().format(
                  "YYYY-MM-DD"
                );
            }
            setfilterdata(filterObj);
            getbethistory(page);
          }, []);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const filterObj = filterdata;
            if (!matchId) {
              filterObj.startDate =
                moment__WEBPACK_IMPORTED_MODULE_3___default()()
                  .subtract(7, "days")
                  .format("YYYY-MM-DD");
              filterObj.endDate =
                moment__WEBPACK_IMPORTED_MODULE_3___default()().format(
                  "YYYY-MM-DD"
                );
            }
            filterObj.type = params.type;
            setfilterdata(filterObj);
            getbethistory(page);
          }, [params.type]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (submitClicked) {
              getbethistory(1);
              setSubmitClicked(false); // Reset submitClicked state
            }
          }, [submitClicked]);
          const getbethistory = (page) => {
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["default"]
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
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error);
              });
          };
          const onSuggestionsFetchRequested = ({ value }) => {
            return _services_user_service__WEBPACK_IMPORTED_MODULE_2__[
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
          const handleformchange = (event) => {
            setfilterdata({
              ...filterdata,
              [event.target.name]: event.target.value,
            });
          };
          const handleSubmitform = (event) => {
            event.preventDefault();
            setSubmitClicked(true);
          };
          const handlePageClick = (event) => {
            getbethistory(event.selected + 1);
          };
          const onTrash = (e, bet) => {
            e.preventDefault();

            // Check if bet._id exists before proceeding
            if (!bet._id) {
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Invalid bet data. Unable to delete."
              );
              return;
            }

            // Replace confirm with a custom modal for better UX (Optional)
            const userConfirmed = window.confirm(
              "Are you sure you want to delete?"
            );
            if (userConfirmed) {
              _services_bet_service__WEBPACK_IMPORTED_MODULE_9__["default"]
                .deleteCurrentBet(bet._id)
                .then((res) => {
                  const { success, message } = res.data.data;
                  if (success) {
                    // Notify backend via socket
                    socketUser.emit("betDelete", {
                      betId: bet._id,
                      userId: bet.userId,
                    });

                    // Show success toast notification
                    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                      message
                    );

                    // Update state safely
                    setbethistory((prevState) => ({
                      ...prevState,
                      docs: prevState.docs.filter(({ _id }) => _id !== bet._id),
                    }));
                  } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                      "Failed to delete bet."
                    );
                  }
                })
                .catch((err) => {
                  console.error("Error deleting bet:", err);
                  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                    "An error occurred while deleting the bet."
                  );
                });
            }
          };
          const handleSelectAll = () => {
            setSelectAll(!selectAll); // Toggle the state of "Select All" checkbox
            const updatedHistory = bethistory.docs.map((item) => ({
              ...item,
              selected: !selectAll, // Set the selected state of each item based on the new state of "Select All" checkbox
            }));
            setbethistory({
              ...bethistory,
              docs: updatedHistory,
            });
          };
          const handleSelectItem = (item) => {
            const updatedHistory = bethistory.docs.map((historyItem) =>
              historyItem === item
                ? {
                    ...historyItem,
                    selected: !historyItem.selected,
                  }
                : historyItem
            );
            setbethistory({
              ...bethistory,
              docs: updatedHistory,
            });
          };
          const reset = () => {
            ref.current.resetValue();
            setfilterdata({
              status: "pending",
            });
            setSubmitClicked(true);
          };
          const deleteBulk = () => {
            const select = bethistory.docs.reduce((selected, item) => {
              if (item.selected) {
                selected = true;
              }
              return selected;
            }, false);
            if (selectAll || select) {
              const selectedItems = bethistory.docs
                .filter((item) => item.selected)
                .map((item) => item._id);
              if (selectedItems.length > 0) {
                _services_bet_service__WEBPACK_IMPORTED_MODULE_9__["default"]
                  .deleteBets({
                    ids: selectedItems,
                  })
                  .then((res) => {
                    if (res.data.data.success) {
                      setbethistory({
                        ...bethistory,
                        docs: bethistory.docs.filter((item) => !item.selected),
                      });
                      setSelectAll(false);
                      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                        res.data.message
                      );
                    }
                  });
              }
            } else {
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Please select one item"
              );
            }
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,
            {
              children: [
                !hideHeader &&
                  _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__[
                    "default"
                  ].subheaderdesktopadmin(
                    params.type == "deleted"
                      ? "Deleted Bet History"
                      : "Unsettled Bet History"
                  ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                  "div",
                  {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                      "div",
                      {
                        className: "row",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                          "div",
                          {
                            className:
                              !react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile
                                ? "col-md-12 mt-1"
                                : "col-md-12 padding-custom",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                              "div",
                              {
                                className: "",
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                    "div",
                                    {
                                      className: "card-body p15 bg-gray mb-20",
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                        "form",
                                        {
                                          className:
                                            "ng-pristine ng-valid ng-touched mb-0",
                                          method: "post",
                                          onSubmit: handleSubmitform,
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                            "div",
                                            {
                                              className: "row row5",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-6 col-lg-2 mbc-5",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                          lineNumber: 197,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                        _components_CustomAutoComplete__WEBPACK_IMPORTED_MODULE_6__[
                                                          "default"
                                                        ],
                                                        {
                                                          onSuggestionsFetchRequested:
                                                            onSuggestionsFetchRequested,
                                                          onSelectUser:
                                                            onSelectUser,
                                                          ref: ref,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 198,
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
                                                    lineNumber: 196,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-6 col-lg-2 mbc-5",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "form-group mb-0",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "label",
                                                              children:
                                                                "Search By Name",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 206,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              className:
                                                                "mx-input",
                                                              name: "name",
                                                              onChange:
                                                                handleformchange,
                                                              placeholder:
                                                                "Search By Name",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 207,
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
                                                        lineNumber: 205,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 204,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-6 col-lg-2 mbc-5",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "form-group mb-0",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "label",
                                                              children: "Sport",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 218,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                            "select",
                                                            {
                                                              name: "reportType",
                                                              onChange:
                                                                handleformchange,
                                                              className:
                                                                "custom-select ng-untouched ng-pristine ng-valid",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                  "option",
                                                                  {
                                                                    value: "",
                                                                    children:
                                                                      "Select Sport",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 224,
                                                                    columnNumber: 27,
                                                                  },
                                                                  undefined
                                                                ),
                                                                sportList.sports.map(
                                                                  (sport) =>
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                      "option",
                                                                      {
                                                                        value:
                                                                          sport.sportId,
                                                                        children:
                                                                          [
                                                                            sport.name,
                                                                            " ",
                                                                          ],
                                                                      },
                                                                      sport.sportId,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 226,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    )
                                                                ),
                                                              ],
                                                            },
                                                            void 0,
                                                            true,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 219,
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
                                                        lineNumber: 217,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 216,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-6 col-lg-2 mbc-5",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "form-group mb-0",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                              lineNumber: 250,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "mx-datepicker",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "mx-input-wrapper",
                                                                    children:
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                        "input",
                                                                        {
                                                                          name: "startDate",
                                                                          type: "datetime-local",
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
                                                                          lineNumber: 253,
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
                                                                    lineNumber: 252,
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
                                                              lineNumber: 251,
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
                                                        lineNumber: 249,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 248,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-6 col-lg-2 mbc-5",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "form-group mb-0",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                              lineNumber: 268,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "mx-datepicker",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "mx-input-wrapper",
                                                                    children:
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                                        "input",
                                                                        {
                                                                          name: "endDate",
                                                                          type: "datetime-local",
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
                                                                          lineNumber: 271,
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
                                                                    lineNumber: 270,
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
                                                              lineNumber: 269,
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
                                                        lineNumber: 267,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 266,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-12 col-lg-1 mbc-5",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                          lineNumber: 285,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 287,
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
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "col-12 col-lg-1 mbc-5",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                          lineNumber: 292,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                          lineNumber: 293,
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
                                                    lineNumber: 291,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                (userState === null ||
                                                userState === void 0
                                                  ? void 0
                                                  : (_userState$user =
                                                      userState.user) ===
                                                      null ||
                                                    _userState$user === void 0
                                                  ? void 0
                                                  : _userState$user.role) ===
                                                  _models_User__WEBPACK_IMPORTED_MODULE_12__
                                                    .RoleType.admin &&
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "col-12 col-lg-1 mbc-5",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
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
                                                            lineNumber: 299,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                                          "button",
                                                          {
                                                            type: "button",
                                                            onClick: deleteBulk,
                                                            className:
                                                              "btn btn-primary btn-block",
                                                            children: "Delete",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 300,
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
                                                      lineNumber: 298,
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
                                          lineNumber: 190,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 189,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                    "div",
                                    {
                                      className: "card-body",
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(
                                        _bet_list_component__WEBPACK_IMPORTED_MODULE_10__[
                                          "default"
                                        ],
                                        {
                                          bethistory: bethistory,
                                          handlePageClick: handlePageClick,
                                          onTrash: onTrash,
                                          page: page,
                                          isTrash: true,
                                          handleSelectAll: handleSelectAll,
                                          selectAll: selectAll,
                                          handleSelectItem: handleSelectItem,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 313,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 312,
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
                                lineNumber: 188,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 187,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 185,
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
        _s(
          UnsetteleBetHistoryAdmin,
          "oIzgiY+g6yWsjgPT1ZWxPfHPZTs=",
          false,
          function () {
            return [
              react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams,
              _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,
              _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,
              _context_webSocketUser__WEBPACK_IMPORTED_MODULE_11__.useWebsocketUser,
            ];
          }
        );
        _c = UnsetteleBetHistoryAdmin;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UnsetteleBetHistoryAdmin;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "UnsetteleBetHistoryAdmin");

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
  },
]);
//# sourceMappingURL=src_admin-app_pages_UnsetteleBetHistory_UnsetteleBetHistoryAdmin_tsx.chunk.js.map
