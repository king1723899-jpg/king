"use strict";
(globalThis["webpackChunkfair_react"] = globalThis["webpackChunkfair_react"] || []).push([["src_pages__layout_CheckTransactionPassword_tsx"],{

/***/ "./src/pages/_layout/CheckTransactionPassword.tsx":
/*!********************************************************!*\
  !*** ./src/pages/_layout/CheckTransactionPassword.tsx ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts");
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
/* harmony import */ var _elements_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/www/wwwroot/Ambani/fair-react-stone/src/pages/_layout/CheckTransactionPassword.tsx",
  _s = __webpack_require__.$Refresh$.signature();






const CheckTransactionPassword = () => {
  _s();
  const selectTxn = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_1__.selectChangePassAndTxn);
  const navigate = (0,_elements_custom_link__WEBPACK_IMPORTED_MODULE_3__.useNavigateCustom)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const ac = new AbortController();
    // if (selectTxn !== undefined && !selectTxn) navigate.go('/transaction-password')

    return () => ac.abort();
  }, [selectTxn]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Outlet, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};
_s(CheckTransactionPassword, "uGvsjGRlooCHzLDNyx5xN6UxSNs=", false, function () {
  return [_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector, _elements_custom_link__WEBPACK_IMPORTED_MODULE_3__.useNavigateCustom];
});
_c = CheckTransactionPassword;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckTransactionPassword);
var _c;
__webpack_require__.$Refresh$.register(_c, "CheckTransactionPassword");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
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

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=src_pages__layout_CheckTransactionPassword_tsx.chunk.js.map