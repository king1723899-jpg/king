"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_add-matches_sports_tsx"],
  {
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

    /***/ "./src/admin-app/pages/add-matches/sports.tsx":
      /*!****************************************************!*\
  !*** ./src/admin-app/pages/add-matches/sports.tsx ***!
  \****************************************************/
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
        /* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../services/sports.service */ "./src/services/sports.service.ts"
          );
        /* harmony import */ var _sports_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./sports.css */ "./src/admin-app/pages/add-matches/sports.css"
          );
        /* harmony import */ var _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../pages/_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/admin-app/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/add-matches/sports.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const SportsPage = () => {
          _s();
          const [sports, setSports] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const [currentUrl, setCurrenUrl] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState("matches");
          const { url } = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (url) setCurrenUrl(url);
          }, [url]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            _services_sports_service__WEBPACK_IMPORTED_MODULE_1__["default"]
              .getSports()
              .then((res) => {
                setSports(res.data.data);
              });
          }, []);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ].subheaderdesktopadmin("Sports"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  "div",
                  {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      "div",
                      {
                        className: "row",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                          "div",
                          {
                            className: "col-md-12 main-container",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "table",
                              {
                                className: "table",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                  "tbody",
                                  {
                                    children: sports.map((sport) =>
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                        "tr",
                                        {
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "td",
                                            {
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_3__.CustomLink,
                                                {
                                                  to: `/${currentUrl}/${sport.sportId}`,
                                                  children: sport.name,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 36,
                                                  columnNumber: 23,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 35,
                                              columnNumber: 21,
                                            },
                                            undefined
                                          ),
                                        },
                                        sport._id,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 34,
                                          columnNumber: 19,
                                        },
                                        undefined
                                      )
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 32,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 31,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 30,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 29,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 28,
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
        _s(SportsPage, "dDBsltD5C2eSeFosDVGFIRyY46w=", false, function () {
          return [react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams];
        });
        _c = SportsPage;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SportsPage;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "SportsPage");

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

    /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/add-matches/sports.css":
      /*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/add-matches/sports.css ***!
  \**************************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
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
          `.thead-dark th {
  background-color: var(--theme1-bg) !important;
  border-color: var(--theme1-bg) !important;
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/admin-app/pages/add-matches/sports.css"],
            names: [],
            mappings: "AAAA;EACE,6CAA6C;EAC7C,yCAAyC;AAC3C",
            sourcesContent: [
              ".thead-dark th {\n  background-color: var(--theme1-bg) !important;\n  border-color: var(--theme1-bg) !important;\n}\n",
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

    /***/ "./src/admin-app/pages/add-matches/sports.css":
      /*!****************************************************!*\
  !*** ./src/admin-app/pages/add-matches/sports.css ***!
  \****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./sports.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/add-matches/sports.css"
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
            _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        if (true) {
          if (
            !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
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
              !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals;
            var oldLocals = isNamedExport
              ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__
              : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].locals;

            module.hot.accept(
              /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./sports.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/add-matches/sports.css",
              (__WEBPACK_OUTDATED_DEPENDENCIES__) => {
                /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__ =
                  __webpack_require__(
                    /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./sports.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/add-matches/sports.css"
                  );
                (function () {
                  if (
                    !isEqualLocals(
                      oldLocals,
                      isNamedExport
                        ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__
                        : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ].locals,
                      isNamedExport
                    )
                  ) {
                    module.hot.invalidate();

                    return;
                  }

                  oldLocals = isNamedExport
                    ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__
                    : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ].locals;

                  update(
                    _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
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
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sports_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },
  },
]);
//# sourceMappingURL=src_admin-app_pages_add-matches_sports_tsx.chunk.js.map
