"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_Rules_SecurityAuth_tsx"],
  {
    /***/ "./src/pages/Rules/SecurityAuth.tsx":
      /*!******************************************!*\
  !*** ./src/pages/Rules/SecurityAuth.tsx ***!
  \******************************************/
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
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/Rules/SecurityAuth.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const SecurityAuth = (props) => {
          _s();
          const { classData } = props;
          const [activeTab, setActiveTab] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const activeRules = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_3__.selectRules
          );
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ].subheader("Secure Auth Verification"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                  "div",
                  {
                    className: "mtc-5",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      "div",
                      {
                        className: "",
                        children: [
                          _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                          ].subheaderdesktop("Secure Auth Verification"),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "div",
                            {
                              className: "card-body security-auth",
                              style: {
                                border: "1px solid #ccc",
                                marginBottom: "0px",
                              },
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "div",
                                {
                                  className:
                                    "row justify-content-center mt-5 mb-5",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                    "div",
                                    {
                                      className: "col-6",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "div",
                                          {
                                            className: "setting-box",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                "span",
                                                {
                                                  className: "mr-3",
                                                  children:
                                                    "Secure Auth Verification Status:",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 20,
                                                  columnNumber: 39,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                "span",
                                                {
                                                  className:
                                                    "badge badge-success",
                                                  children: "Enabled",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 21,
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
                                            lineNumber: 20,
                                            columnNumber: 10,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "div",
                                          {
                                            className: "mt-2 text-center",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                              "fieldset",
                                              {
                                                className: "form-group",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                    "legend",
                                                    {
                                                      className:
                                                        "bv-no-focus-ring col-form-label pt-0",
                                                      id: "__BVID__45__BV_label_",
                                                      children:
                                                        "Please select below option to enable secure auth verification",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 25,
                                                      columnNumber: 16,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                    "div",
                                                    {
                                                      role: "group",
                                                      className:
                                                        "bv-no-focus-ring",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                          "div",
                                                          {
                                                            id: "radio-group-1",
                                                            role: "radiogroup",
                                                            className:
                                                              "btn-group-toggle btn-group btn-group-lg bv-no-focus-ring",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                                "label",
                                                                {
                                                                  className: `btn btn-lg btn-outline-success ${
                                                                    activeTab ==
                                                                    "mobileapp"
                                                                      ? "active"
                                                                      : ""
                                                                  }`,
                                                                  onClick: () =>
                                                                    setActiveTab(
                                                                      "mobileapp"
                                                                    ),
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        type: "radio",
                                                                        name: "auth-options",
                                                                        className:
                                                                          "",
                                                                        value:
                                                                          "2",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 31,
                                                                        columnNumber: 25,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          "Enable Using Mobile App",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 32,
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
                                                                  lineNumber: 30,
                                                                  columnNumber: 22,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                                "label",
                                                                {
                                                                  className: `btn btn-lg btn-outline-success ${
                                                                    activeTab ==
                                                                    "telegram"
                                                                      ? "active"
                                                                      : ""
                                                                  }`,
                                                                  onClick: () =>
                                                                    setActiveTab(
                                                                      "telegram"
                                                                    ),
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        type: "radio",
                                                                        name: "auth-options",
                                                                        className:
                                                                          "",
                                                                        value:
                                                                          "2",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 35,
                                                                        columnNumber: 25,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          "Enable Using Telegram",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 36,
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
                                                                  lineNumber: 34,
                                                                  columnNumber: 22,
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
                                                            lineNumber: 28,
                                                            columnNumber: 19,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 27,
                                                      columnNumber: 16,
                                                    },
                                                    undefined
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 24,
                                                columnNumber: 13,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 23,
                                            columnNumber: 10,
                                          },
                                          undefined
                                        ),
                                        activeTab == "mobileapp" &&
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            "div",
                                            {
                                              className: "text-center mt-3",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                  "h6",
                                                  {
                                                    className: "mb-2",
                                                    children:
                                                      "Please enter below auth code in your Secure Auth Verification App.",
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
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "text-center row mt-2 mb-2 align-items-center",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "col-12 d-flex justify-content-center align-items-center",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "verify-code d-inline-block",
                                                              children:
                                                                "990776",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 46,
                                                              columnNumber: 19,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 45,
                                                        columnNumber: 16,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 44,
                                                    columnNumber: 13,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                  "h4",
                                                  {
                                                    className: "mb-2",
                                                    children: [
                                                      "If you havent downloaded,",
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                        "br",
                                                        {},
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 49,
                                                          columnNumber: 59,
                                                        },
                                                        undefined
                                                      ),
                                                      " please download Secure Auth Verification App from below link. ",
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 49,
                                                    columnNumber: 13,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                  "h6",
                                                  {
                                                    className: "mb-2",
                                                    children:
                                                      "Using this app you will receive auth code during login authentication",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 51,
                                                    columnNumber: 13,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                  "a",
                                                  {
                                                    href: "/assets/downloads/SecureAuthApp-1.7.apk",
                                                    className:
                                                      "btn btn-download btn-lg mt-3",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "row5 row align-items-center",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "col-4 text-center",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                                  "i",
                                                                  {
                                                                    className:
                                                                      "fab fa-android",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 55,
                                                                    columnNumber: 54,
                                                                  },
                                                                  undefined
                                                                ),
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 55,
                                                              columnNumber: 19,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "col-8 text-left",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                                  "h4",
                                                                  {
                                                                    className:
                                                                      "mb-0",
                                                                    children:
                                                                      "Download",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 57,
                                                                    columnNumber: 22,
                                                                  },
                                                                  undefined
                                                                ),
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "mt-0 dtext",
                                                                    children:
                                                                      "on the android",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 58,
                                                                    columnNumber: 22,
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
                                                              lineNumber: 56,
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
                                                        lineNumber: 54,
                                                        columnNumber: 16,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 52,
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
                                              lineNumber: 42,
                                              columnNumber: 37,
                                            },
                                            undefined
                                          ),
                                        activeTab == "telegram" &&
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            "div",
                                            {
                                              className: "text-center mt-3",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                "div",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                      "p",
                                                      {
                                                        className: "mb-3",
                                                        children:
                                                          "Please enter your login password to continue",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 65,
                                                        columnNumber: 16,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                      "form",
                                                      {
                                                        className:
                                                          "form-inline",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "sr-only",
                                                              children:
                                                                "Password",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 67,
                                                              columnNumber: 19,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                            "input",
                                                            {
                                                              id: "inline-form-input-name",
                                                              type: "password",
                                                              name: "masterPassword",
                                                              placeholder:
                                                                "Enter Your Login Password",
                                                              className:
                                                                "mb-2 mr-sm-2 mb-sm-0 form-control",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 68,
                                                              columnNumber: 19,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                            "button",
                                                            {
                                                              type: "submit",
                                                              className:
                                                                "btn btn-primary",
                                                              style: {
                                                                width: "auto",
                                                              },
                                                              children:
                                                                "Get Connection Id",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 70,
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
                                                        lineNumber: 66,
                                                        columnNumber: 16,
                                                      },
                                                      undefined
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 64,
                                                  columnNumber: 13,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 63,
                                              columnNumber: 36,
                                            },
                                            undefined
                                          ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 19,
                                      columnNumber: 7,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 18,
                                  columnNumber: 4,
                                },
                                undefined
                              ),
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
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 15,
                        columnNumber: 9,
                      },
                      undefined
                    ),
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
              ],
            },
            void 0,
            true
          );
        };
        _s(SecurityAuth, "3ncgjJbon7vPEGhHr8rhewj0UbI=", false, function () {
          return [_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector];
        });
        _c = SecurityAuth;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            SecurityAuth
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "SecurityAuth");
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
//# sourceMappingURL=src_pages_Rules_SecurityAuth_tsx.chunk.js.map


