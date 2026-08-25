"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_UnsetteleBetHistory_bet-list_component_tsx"],
  {
    /***/ "./src/admin-app/pages/UnsetteleBetHistory/bet-list.component.tsx":
      /*!************************************************************************!*\
  !*** ./src/admin-app/pages/UnsetteleBetHistory/bet-list.component.tsx ***!
  \************************************************************************/
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
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js"
          );
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_paginate__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../models/User */ "./src/models/User.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../utils/constants */ "./src/utils/constants.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/UnsetteleBetHistory/bet-list.component.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const getsportsname = (sportsId) => {
          var _CONSTANTS$SPORT_NAME;
          return sportsId != ""
            ? ((_CONSTANTS$SPORT_NAME =
                _utils_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.SPORT_NAME.filter(
                  (Item) => Item.id == sportsId
                )[0]) === null || _CONSTANTS$SPORT_NAME === void 0
                ? void 0
                : _CONSTANTS$SPORT_NAME.name) || "Casino"
            : "";
        };
        const BetListComponent = ({
          bethistory,
          onTrash,
          handlePageClick,
          isTrash,
          handleSelectAll,
          selectAll,
          handleSelectItem,
        }) => {
          _s();
          var _userState$user3;
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_3__.selectUserData
          );
          const trrepeat = (Item, index) => {
            var _userState$user, _Item$profitLoss, _Item$pnl, _userState$user2;
            const classdata = Item.isBack ? "back" : "lay";
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
              "tr",
              {
                className: classdata,
                children: [
                  handleSelectAll &&
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                      "td",
                      {
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                          "input",
                          {
                            type: "checkbox",
                            checked: Item.selected || false,
                            onChange: () =>
                              handleSelectItem === null ||
                              handleSelectItem === void 0
                                ? void 0
                                : handleSelectItem(Item),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 42,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                  (userState === null || userState === void 0
                    ? void 0
                    : (_userState$user = userState.user) === null ||
                      _userState$user === void 0
                    ? void 0
                    : _userState$user.role) !==
                    _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleType.user &&
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                      "td",
                      {
                        className: "text-center wnwrap",
                        children: Item.parentNameStr,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.userName,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.matchName,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: [
                        Item.selectionName,
                        " /",
                        " ",
                        Item.marketName === "Fancy" && Item.gtype !== "fancy1"
                          ? Item.volume
                          : Item.odds,
                        " ",
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: getsportsname(Item.sportId),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.marketName,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.odds,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children: Item.stack,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children:
                        Item.status == "completed"
                          ? Item === null || Item === void 0
                            ? void 0
                            : (_Item$profitLoss = Item.profitLoss) === null ||
                              _Item$profitLoss === void 0
                            ? void 0
                            : _Item$profitLoss.toFixed(2)
                          : (_Item$pnl = Item.pnl) === null ||
                            _Item$pnl === void 0
                          ? void 0
                          : _Item$pnl.toFixed(2),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "td",
                    {
                      className: "text-center wnwrap",
                      children:
                        Item.createdAt &&
                        moment__WEBPACK_IMPORTED_MODULE_0___default()(
                          Item === null || Item === void 0
                            ? void 0
                            : Item.createdAt
                        ).format("YYYY-MM-DD HH:mm:ss"),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  isTrash &&
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                      "td",
                      {
                        className: "text-center wnwrap",
                        children:
                          Item.status == "pending" &&
                          (userState === null || userState === void 0
                            ? void 0
                            : (_userState$user2 = userState.user) === null ||
                              _userState$user2 === void 0
                            ? void 0
                            : _userState$user2.role) ===
                            _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleType
                              .admin &&
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                            "a",
                            {
                              onClick: (e) => onTrash && onTrash(e, Item),
                              href: "#",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                "i",
                                {
                                  className: "fa fa-trash",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 73,
                                  columnNumber: 17,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 72,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 70,
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
                lineNumber: 39,
                columnNumber: 7,
              },
              undefined
            );
          };
          const TransactionData =
            bethistory && bethistory.docs && bethistory.docs.length
              ? bethistory.docs.map((item, index) => {
                  return trrepeat(item, index);
                })
              : /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                  "tr",
                  {
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                      "td",
                      {
                        colSpan: 11,
                        style: {
                          textAlign: "center",
                        },
                        children: "No Result Found",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 7,
                  },
                  undefined
                );
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,
            {
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                  "div",
                  {
                    className: "table-responsive",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                      "table",
                      {
                        id: "customers1",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                            "thead",
                            {
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                "tr",
                                {
                                  children: [
                                    handleSelectAll &&
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                        "th",
                                        {
                                          className:
                                            "text-center bg2 text-white ",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                            "input",
                                            {
                                              type: "checkbox",
                                              checked: selectAll || false,
                                              onChange: handleSelectAll,
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
                                    (userState === null || userState === void 0
                                      ? void 0
                                      : (_userState$user3 = userState.user) ===
                                          null || _userState$user3 === void 0
                                      ? void 0
                                      : _userState$user3.role) !==
                                      _models_User__WEBPACK_IMPORTED_MODULE_2__
                                        .RoleType.user &&
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                        "th",
                                        {
                                          className:
                                            "text-center bg2 text-white ",
                                          style: {
                                            whiteSpace: "nowrap",
                                          },
                                          children: "Uplevel",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 111,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                      "th",
                                      {
                                        className:
                                          "text-center bg2 text-white ",
                                        style: {
                                          whiteSpace: "nowrap",
                                        },
                                        children: "User Name",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 115,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
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
                                        lineNumber: 118,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
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
                                        lineNumber: 121,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
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
                                        lineNumber: 124,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
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
                                        lineNumber: 127,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
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
                                        lineNumber: 130,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
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
                                        lineNumber: 133,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                      "th",
                                      {
                                        className:
                                          "text-center bg2 text-white ",
                                        children: "P/L",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 134,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
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
                                        lineNumber: 135,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    isTrash &&
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                        "th",
                                        {
                                          className:
                                            "text-center bg2 text-white ",
                                          style: {
                                            whiteSpace: "nowrap",
                                          },
                                          children: "Action",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 139,
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
                                  lineNumber: 100,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 99,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                            "tbody",
                            {
                              children: TransactionData,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 145,
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
                        lineNumber: 98,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                  react_paginate__WEBPACK_IMPORTED_MODULE_1___default(),
                  {
                    breakLabel: "...",
                    nextLabel: ">>",
                    onPageChange: handlePageClick,
                    pageRangeDisplayed: 5,
                    pageCount: bethistory.totalPages || 0,
                    containerClassName: "pagination",
                    activeClassName: "active",
                    previousLabel: "<<",
                    breakClassName: "break-me",
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 148,
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
          BetListComponent,
          "pXrJbs8wnr5nnFbxTm7khhKJWwo=",
          false,
          function () {
            return [_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector];
          }
        );
        _c = BetListComponent;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BetListComponent;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "BetListComponent");

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
//# sourceMappingURL=src_admin-app_pages_UnsetteleBetHistory_bet-list_component_tsx.chunk.js.map
