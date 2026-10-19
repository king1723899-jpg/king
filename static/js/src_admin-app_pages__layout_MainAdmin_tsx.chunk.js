"use strict";
(globalThis["webpackChunkfair_react"] = globalThis["webpackChunkfair_react"] || []).push([["src_admin-app_pages__layout_MainAdmin_tsx"],{

/***/ "./src/admin-app/pages/_layout/MainAdmin.tsx":
/*!***************************************************!*\
  !*** ./src/admin-app/pages/_layout/MainAdmin.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ "./src/models/User.ts");
/* harmony import */ var _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx");
/* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts");
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/hooks */ "./src/redux/hooks.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/footer */ "./src/admin-app/pages/_layout/elements/footer.tsx");
/* harmony import */ var _elements_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/sidebar */ "./src/admin-app/pages/_layout/elements/sidebar.tsx");
/* harmony import */ var _elements_sidebar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/sidebar.css */ "./src/admin-app/pages/_layout/elements/sidebar.css");
/* harmony import */ var _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/deposit-withdraw.service */ "./src/services/deposit-withdraw.service.ts");
/* harmony import */ var _Modal_NotificationModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modal/NotificationModal */ "./src/admin-app/pages/_layout/Modal/NotificationModal.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/_layout/MainAdmin.tsx",
  _s = __webpack_require__.$Refresh$.signature();
// import React from 'react'
// import { Outlet, useLocation } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import User, { RoleType } from '../../../models/User'
// import { useNavigateCustom } from '../../../pages/_layout/elements/custom-link'
// import { selectUserData } from '../../../redux/actions/login/loginSlice'
// import { useAppSelector } from '../../../redux/hooks'
// import authService from '../../../services/auth.service'
// import Footer from './elements/footer'
// import Sidebar from './elements/sidebar'
// import './elements/sidebar.css'

// const MainAdmin = () => {
//   const userState = useAppSelector<{ user: User }>(selectUserData)
//   const navigate = useNavigateCustom()

//   // React.useEffect(() => {
//   //   const currentUserRole = localStorage.getItem('userType')
//   //   const rolesWithOutUser = JSON.parse(JSON.stringify(RoleType))
//   //   delete rolesWithOutUser.user
//   //   console.log("heree")
//   //   if (currentUserRole && !Object.keys(rolesWithOutUser).includes(currentUserRole)) {
//   //     return navigate.go('/')
//   //   }
//   // }, [])

//   React.useEffect(() => {
//     const auth = authService.isLoggedIn()
//     if (!auth || userState.user.role === RoleType.user) {
//       return navigate.go('/admin/login')
//     }
//   }, [userState.user])
//   const location = useLocation();
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false)
//   const [isSidebarHidden, setIsSidebarHidden] = React.useState(false)

//   return (
//     <div className={`admin ${isSidebarCollapsed ? 'sidebar-collapsed' : ''} ${isSidebarHidden ? 'sidebar-hidden' : ''}`}>
//       <Sidebar onToggleCollapse={setIsSidebarCollapsed} onToggleHidden={setIsSidebarHidden} />
//       <ToastContainer />
//       <div className='main'>
//         {(location.pathname.includes('odds/') || location.pathname.includes('casino/')) &&
//           <div className='container-fluid'>
//             <div className='row'>
//               <div className='col-md-12 mt-1'>
//                 <Outlet></Outlet>
//               </div>
//             </div>
//           </div>
//         }
//         {(!location.pathname.includes('odds/') && !location.pathname.includes('casino/')) &&
//           <Outlet></Outlet>
//         }
//       </div>
//       <Footer />
//     </div>
//   )
// }
// export default MainAdmin













 // ðŸ‘ˆ bring back Toastify


const MainAdmin = () => {
  _s();
  const userState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_3__.selectUserData);
  const navigate = (0,_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_2__.useNavigateCustom)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useLocation)();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);

  // modal state
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [pendingRequests, setPendingRequests] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  const prevIdsRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(new Set());
  const isFirstRun = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(true);

  // âœ… auth check
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const auth = _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["default"].isLoggedIn();
    if (!auth || userState.user.role === _models_User__WEBPACK_IMPORTED_MODULE_1__.RoleType.user) {
      return navigate.go('/admin/login');
    }
  }, [userState.user]);

  // âœ… poll for both deposits & withdrawals
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    var _userState$user;
    const role = userState === null || userState === void 0 ? void 0 : (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.role;
    if (!(role === _models_User__WEBPACK_IMPORTED_MODULE_1__.RoleType.admin || role === _models_User__WEBPACK_IMPORTED_MODULE_1__.RoleType.sadmin)) return;
    let mounted = true;
    const fetchCounts = async () => {
      try {
        var _depRes$data, _wdRes$data;
        const depRes = await _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_9__["default"].getDepositWithdrawLists({
          type: 'deposit'
        });
        const deposits = (depRes === null || depRes === void 0 ? void 0 : (_depRes$data = depRes.data) === null || _depRes$data === void 0 ? void 0 : _depRes$data.data) || [];
        const pendingDeposits = deposits.filter(d => d.status === 'pending');
        const wdRes = await _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_9__["default"].getDepositWithdrawLists({
          type: 'withdraw'
        });
        const withdrawals = (wdRes === null || wdRes === void 0 ? void 0 : (_wdRes$data = wdRes.data) === null || _wdRes$data === void 0 ? void 0 : _wdRes$data.data) || [];
        const pendingWithdrawals = withdrawals.filter(w => w.status === 'pending');
        const combined = [...pendingDeposits, ...pendingWithdrawals];
        if (mounted) {
          const newIds = new Set(combined.map(r => r._id));
          const prevIds = prevIdsRef.current;
          let hasNew = false;
          if (!isFirstRun.current) {
            hasNew = Array.from(newIds).some(id => !prevIds.has(id));
          }
          setPendingRequests(combined);
          if (hasNew) {
            setShowModal(true); // ðŸ”” show popup only if new request
          }
          prevIdsRef.current = newIds;
          isFirstRun.current = false;
        }
      } catch (e) {
        if (mounted) console.warn('Error polling deposit/withdraw counts', e);
      }
    };
    fetchCounts();
    const id = setInterval(fetchCounts, 15000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [userState]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
    className: `admin ${isSidebarCollapsed ? 'sidebar-collapsed' : ''} ${isSidebarHidden ? 'sidebar-hidden' : ''}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_elements_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onToggleCollapse: setIsSidebarCollapsed,
      onToggleHidden: setIsSidebarHidden
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_11__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_Modal_NotificationModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      show: showModal,
      requests: pendingRequests,
      onClose: () => {
        setShowModal(false);
        setPendingRequests([]);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "main",
      children: location.pathname.includes('odds/') || location.pathname.includes('casino/') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: "col-md-12 mt-1",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Outlet, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Outlet, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 5
  }, undefined);
};
_s(MainAdmin, "Ok/Wr6V4Mj+tdn1jn8tUEXnGI7w=", false, function () {
  return [_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector, _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_2__.useNavigateCustom, react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useLocation];
});
_c = MainAdmin;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainAdmin);
var _c;
__webpack_require__.$Refresh$.register(_c, "MainAdmin");

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

/***/ }),

/***/ "./src/admin-app/pages/_layout/Modal/NotificationModal.tsx":
/*!*****************************************************************!*\
  !*** ./src/admin-app/pages/_layout/Modal/NotificationModal.tsx ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/_layout/Modal/NotificationModal.tsx";




const NotificationModal = ({
  show,
  requests,
  onClose
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: show,
    onHide: onClose,
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Title, {
        children: "New Notification"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Body, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        style: {
          maxHeight: "300px",
          overflowY: "auto"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
          className: "table table-bordered",
          id: "customers1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                className: "bg2 text-white",
                style: {
                  width: "25%",
                  textAlign: "center"
                },
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                className: "bg2 text-white",
                style: {
                  width: "25%",
                  textAlign: "center"
                },
                children: "User Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                className: "bg2 text-white",
                style: {
                  width: "25%",
                  textAlign: "center"
                },
                children: "Request Type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                className: "bg2 text-white",
                style: {
                  width: "25%",
                  textAlign: "center"
                },
                children: "Amount"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
            children: requests.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 10).map(r => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
                style: {
                  textAlign: "center"
                },
                children: moment__WEBPACK_IMPORTED_MODULE_1___default()(r.createdAt).format("DD/MM/YYYY h:mm:ss A")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 41
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
                style: {
                  textAlign: "center"
                },
                children: r.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 41
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
                style: {
                  textAlign: "center"
                },
                children: r.type
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 41
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
                style: {
                  textAlign: "center"
                },
                children: r.amount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 41
              }, undefined)]
            }, r._id, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 37
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Footer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "primary",
        className: "bg2 text-white",
        onClick: onClose,
        children: "Okay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};
_c = NotificationModal;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationModal);
var _c;
__webpack_require__.$Refresh$.register(_c, "NotificationModal");

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

/***/ }),

/***/ "./src/admin-app/pages/_layout/elements/footer.tsx":
/*!*********************************************************!*\
  !*** ./src/admin-app/pages/_layout/elements/footer.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/_layout/elements/footer.tsx";

const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade",
      id: "modal-user-detail",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modal-dialog modal-lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: "modal-title",
              children: "User Detail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 8,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 9,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 7,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            id: "search-user-details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};
_c = Footer;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
var _c;
__webpack_require__.$Refresh$.register(_c, "Footer");

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

/***/ }),

/***/ "./src/admin-app/pages/_layout/elements/sidebar.tsx":
/*!**********************************************************!*\
  !*** ./src/admin-app/pages/_layout/elements/sidebar.tsx ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tree/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_modern_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modern-drawer */ "./node_modules/react-modern-drawer/dist/index.modern.js");
/* harmony import */ var react_modern_drawer_dist_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modern-drawer/dist/index.css */ "./node_modules/react-modern-drawer/dist/index.css");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/User */ "./src/models/User.ts");
/* harmony import */ var _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pages/_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx");
/* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts");
/* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts");
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../redux/hooks */ "./src/redux/hooks.ts");
/* harmony import */ var _services_casino_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/casino.service */ "./src/services/casino.service.ts");
/* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/sports.service */ "./src/services/sports.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/_layout/elements/sidebar.tsx",
  _s = __webpack_require__.$Refresh$.signature();

















const Sidebar = ({
  onToggleCollapse,
  onToggleHidden
}) => {
  _s();
  var _userState$user, _userState$user2, _userState$user3;
  const userState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(_redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__.selectUserData);
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();
  const navigate = (0,_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.useNavigateCustom)();
  const [showMenu, setShowMenu] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [treeData, setTreeData] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  const [isCollapsed, setIsCollapsed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(() => typeof window === 'undefined' || !window.matchMedia('(max-width: 768px)').matches);
  const [openDropdowns, setOpenDropdowns] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    reports: false,
    transactions: false,
    liveCasino: false,
    settings: false
  });
  const sportsList = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(_redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_6__.selectSportList);
  const [userMessage, setUserMessage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [gameList, setGameList] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const syncSidebarForViewport = () => {
      const shouldOpen = !mobileQuery.matches;
      setIsSidebarOpen(shouldOpen);
      onToggleHidden === null || onToggleHidden === void 0 ? void 0 : onToggleHidden(!shouldOpen);
    };
    const closeAfterNavigation = event => {
      const link = event.target && event.target.closest ? event.target.closest('.admin-sidebar a[href]') : null;
      if (!link || !mobileQuery.matches || link.getAttribute('href') === '#') return;
      setIsSidebarOpen(false);
      onToggleHidden === null || onToggleHidden === void 0 ? void 0 : onToggleHidden(true);
    };
    const closeOnOutsideClick = event => {
      const target = event.target;
      if (!mobileQuery.matches || !target || !target.closest) return;
      if (target.closest('.admin-sidebar') || target.closest('[class*="menu-btn"]')) return;
      setIsSidebarOpen(false);
      onToggleHidden === null || onToggleHidden === void 0 ? void 0 : onToggleHidden(true);
    };
    window.addEventListener('resize', syncSidebarForViewport);
    document.addEventListener('click', closeAfterNavigation, true);
    document.addEventListener('click', closeOnOutsideClick, true);
    return () => {
      window.removeEventListener('resize', syncSidebarForViewport);
      document.removeEventListener('click', closeAfterNavigation, true);
      document.removeEventListener('click', closeOnOutsideClick, true);
    };
  }, [onToggleHidden]);

  // React.useEffect(() => {

  //     // Only fetch admin message if user is authenticated

  //     if (userState.user._id && authService.isLoggedIn()) {

  //       const apiBaseUrl = process.env.REACT_APP_API_BASEURL || 'http://139.84.174.126:3010'

  //       axios.get(`${apiBaseUrl}adminMessage.json?v=${Date.now()}`).then((res: AxiosResponse) => {

  //         setUserMessage(res.data.message)

  //       }).catch(error => {

  //         console.log('Admin message not available:', error)

  //         setUserMessage('')

  //       })

  //     }

  //   }, [userState.user._id])

  //   React.useEffect(() => {

  //     // Only fetch casino games if user is authenticated

  //     if (gameList.length <= 0 && userState.user._id && authService.isLoggedIn()) {

  //       casinoService.getCasinoList()

  //         .then((res: AxiosResponse<any>) => {

  //           setGameList(res.data.data)

  //         })

  //         .catch((error) => {

  //           console.log('Failed to fetch casino games:', error.message)

  //           // Don't show error to user, just log it

  //         })

  //     }

  //   }, [userState.user._id])

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    // Only fetch admin message if user is authenticated

    if (userState.user._id && _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["default"].isLoggedIn()) {
      const apiBaseUrl = "/api/" || 0;
      axios__WEBPACK_IMPORTED_MODULE_14__["default"].get(`${apiBaseUrl}adminMessage.json?v=${Date.now()}`).then(res => {
        setUserMessage(res.data.message);
      }).catch(error => {
        console.log('Admin message not available:', error);
        setUserMessage('');
      });
    }
  }, [userState.user._id]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    // Only fetch casino games if user is authenticated

    if (gameList.length <= 0 && userState.user._id && _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["default"].isLoggedIn()) {
      _services_casino_service__WEBPACK_IMPORTED_MODULE_8__["default"].getCasinoList().then(res => {
        setGameList(res.data.data);
      }).catch(error => {
        console.log('Failed to fetch casino games:', error.message);

        // Don't show error to user, just log it
      });
    }
  }, [userState.user._id]);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
    setTreeData(sportsList.sports.map(sport => ({
      title: sport.name,
      key: sport.sportId
    })));
  };
  const logoutUser = e => {
    e.preventDefault();
    dispatch((0,_redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__.userUpdate)({}));
    setTimeout(() => {
      dispatch((0,_redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_5__.logout)());
      navigate.go('/login');
    }, 1);
  };
  const onSuggestionsFetchRequested = ({
    value
  }) => {
    return _services_user_service__WEBPACK_IMPORTED_MODULE_10__["default"].getUserListSuggestion({
      username: value
    });
  };
  const onSelectUser = user => {
    navigate.go(`/list-clients/${user.username}?search=true`);
  };
  const selectExpend = item => {
    if (item.matchId) {
      setIsOpen(false);
      window.location.href = `/admin/odds/${item.matchId}`;
    }
  };
  const updateTreeData = (list, key, children) => list.map(node => {
    if (node.key === key) {
      return {
        ...node,
        children
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children)
      };
    }
    return node;
  });
  const onLoadData = data => {
    if (data.matchId) {
      selectExpend(data);
      return Promise.resolve();
    }
    return _services_sports_service__WEBPACK_IMPORTED_MODULE_9__["default"].getSeriesWithMatch(data.key).then(series => {
      const items = series.data.data.map(series => {
        const {
          id,
          name
        } = series.competition;
        const matchNodes = series.matches.map(match => {
          return {
            key: match.event.id,
            title: match.event.name,
            matchId: match.event.id
          };
        });
        return {
          key: id,
          title: name,
          children: matchNodes
        };
      });
      setTreeData(origin => {
        return updateTreeData(origin, data.key, items);
      });
      return items;
    });
  };
  const toggleDropdown = dropdownName => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };
  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    onToggleHidden === null || onToggleHidden === void 0 ? void 0 : onToggleHidden(!newState);
  };
  const menuItems = [{
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChartBar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }, undefined),
    text: 'Dashboard',
    link: '/dashboard',
    color: '#55efc4'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faUsers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }, undefined),
    text: 'Users',
    link: '/list-clients',
    color: '#74b9ff'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faUserCog
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }, undefined),
    text: 'Add User',
    link: '/add-user',
    color: '#74b9ff'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChartBar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }, undefined),
    text: 'Market Analysis',
    link: '/market-analysis',
    color: '#fdcb6e'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faExchangeAlt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }, undefined),
    text: 'Payment Details',
    link: '/payment-method',
    color: '#fdcb6e'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faExchangeAlt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }, undefined),
    text: 'Deposit Tokens',
    link: '/tokens',
    color: '#fdcb6e'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faExchangeAlt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }, undefined),
    text: 'Coin Ledger',
    link: '/coin-ledger',
    color: '#fdcb6e'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faExchangeAlt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 13
    }, undefined),
    text: 'Result Declaration',
    link: '/undeclared-bets',
    color: '#fdcb6e'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faUserCog
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }, undefined),
    text: 'Admin P&L',
    link: '/analysis-pl',
    color: '#fdcb6e'
  }];
  const bottomMenuItems = [{
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faGavel
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }, undefined),
    text: 'Rules',
    link: '/rules',
    color: '#74b9ff'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faFileContract
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }, undefined),
    text: 'T & C',
    link: '/terms',
    color: '#74b9ff'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faUserCog
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }, undefined),
    text: 'Change Password',
    link: '/change-password',
    color: '#74b9ff'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faSignOutAlt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 13
    }, undefined),
    text: 'Logout',
    onClick: logoutUser,
    color: '#ff6b6b'
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "desktop-menu-btn",
      onClick: toggleSidebar,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "bar1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "bar2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "bar3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: `admin-sidebar ${isCollapsed ? 'collapsed' : ''} ${!isSidebarOpen ? 'hidden' : ''}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "sidebar-header"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "sidebar-content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "logo-section",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: "custom-logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
              className: "text-logo logo-image",
              children: "KING777"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "sidebar-main",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("nav", {
            className: "sidebar-nav",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("ul", {
              className: "nav-list",
              children: menuItems.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(item.external ? "a" : _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                  ...(item.external ? {
                    href: item.external
                  } : {
                    to: item.link
                  }),
                  className: "nav-link",
                  style: {
                    color: item.color
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                    className: "nav-icon",
                    children: item.icon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
                    columnNumber: 23
                  }, undefined), !isCollapsed && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                    className: "nav-text",
                    children: item.text
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 382,
                    columnNumber: 40
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 21
                }, undefined)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 375,
                columnNumber: 19
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: "sidebar-dropdowns",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
              className: `dropdown-section ${openDropdowns.reports ? 'open' : ''}`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                className: "dropdown-header",
                onClick: () => toggleDropdown('reports'),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faFileInvoiceDollar,
                  style: {
                    color: '#ff7675'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
                  columnNumber: 19
                }, undefined), !isCollapsed && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                  children: "Reports"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 36
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                  icon: openDropdowns.reports ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronDown : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronUp,
                  style: {
                    marginLeft: 'auto',
                    fontSize: '12px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 399,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 17
              }, undefined), openDropdowns.reports && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("ul", {
                className: "dropdown-menu",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                    to: "/accountstatement",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faFileAlt,
                      style: {
                        color: '#fdcb6e'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 408,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                      children: "Account's Statement"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 409,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                    to: "/unsettledbet",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTicketAlt,
                      style: {
                        color: '#ff7675'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 414,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                      children: "Current Bets"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 415,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 413,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
                  columnNumber: 21
                }, undefined), (userState === null || userState === void 0 ? void 0 : (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.role) === _models_User__WEBPACK_IMPORTED_MODULE_3__.RoleType.admin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                    to: "/unsettledbet/deleted",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTicketAlt,
                      style: {
                        color: '#ff7675'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 421,
                      columnNumber: 27
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                      children: "Deleted Bets"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 422,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 420,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 419,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                    to: "/game-reports",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faFileInvoiceDollar,
                      style: {
                        color: '#ff7675'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 428,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                      children: "Game Reports"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 429,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 427,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                    to: "/profitloss",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faCalculator,
                      style: {
                        color: '#74b9ff'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 434,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                      children: "Profit And Loss"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 435,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 433,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 432,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
              className: `dropdown-section ${openDropdowns.transactions ? 'open' : ''}`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                className: "dropdown-header",
                onClick: () => toggleDropdown('transactions'),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faExchangeAlt,
                  style: {
                    color: '#fdcb6e'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 448,
                  columnNumber: 19
                }, undefined), !isCollapsed && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                  children: "Transactions"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 449,
                  columnNumber: 36
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                  icon: openDropdowns.transactions ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronDown : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronUp,
                  style: {
                    marginLeft: 'auto',
                    fontSize: '12px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 450,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 17
              }, undefined), openDropdowns.transactions && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("ul", {
                className: "dropdown-menu",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                    to: "/depositstatement",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faFileAlt,
                      style: {
                        color: '#fdcb6e'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 459,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                      children: "Deposit"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 460,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 458,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 457,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                    to: "/withdrawstatement",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faFileAlt,
                      style: {
                        color: '#fdcb6e'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 465,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                      children: "Withdraw"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 466,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 464,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 463,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 456,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
              className: `dropdown-section ${openDropdowns.liveCasino ? 'open' : ''}`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                className: "dropdown-header",
                onClick: () => toggleDropdown('liveCasino'),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTicketAlt,
                  style: {
                    color: '#ff7675'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 479,
                  columnNumber: 19
                }, undefined), !isCollapsed && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                  children: "Live Casino"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 480,
                  columnNumber: 36
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                  icon: openDropdowns.liveCasino ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronDown : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronUp,
                  style: {
                    marginLeft: 'auto',
                    fontSize: '12px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 481,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 475,
                columnNumber: 17
              }, undefined), openDropdowns.liveCasino && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("ul", {
                className: "dropdown-menu casino-menu",
                children: (gameList === null || gameList === void 0 ? void 0 : gameList.length) > 0 && gameList.map((Item, key) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                    to: `/casino/${Item.slug}`,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTicketAlt,
                      style: {
                        color: '#ff7675'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 492,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                      children: Item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 493,
                      columnNumber: 29
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 491,
                    columnNumber: 27
                  }, undefined)
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 490,
                  columnNumber: 25
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 487,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 474,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
              className: `dropdown-section ${openDropdowns.settings ? 'open' : ''}`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                className: "dropdown-header",
                onClick: () => toggleDropdown('settings'),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faUserCog,
                  style: {
                    color: '#74b9ff'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 507,
                  columnNumber: 19
                }, undefined), !isCollapsed && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                  children: "Settings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 508,
                  columnNumber: 36
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                  icon: openDropdowns.settings ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronDown : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronUp,
                  style: {
                    marginLeft: 'auto',
                    fontSize: '12px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 509,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 503,
                columnNumber: 17
              }, undefined), openDropdowns.settings && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("ul", {
                className: "dropdown-menu",
                children: (userState === null || userState === void 0 ? void 0 : (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.role) === _models_User__WEBPACK_IMPORTED_MODULE_3__.RoleType.admin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                      to: "/sports-list/active-matches",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faGavel,
                        style: {
                          color: '#74b9ff'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 520,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                        children: "Block Markets"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 521,
                        columnNumber: 29
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 519,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 518,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                      to: "/messages",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faFileAlt,
                        style: {
                          color: '#74b9ff'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 526,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                        children: "Messages"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 527,
                        columnNumber: 29
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 525,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 524,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                      to: '/sports-list/matches',
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faFileAlt,
                        style: {
                          color: '#74b9ff'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 532,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                        children: "Add Match List"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 533,
                        columnNumber: 29
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 531,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 530,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                      to: "/casino-list",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTicketAlt,
                        style: {
                          color: '#ff7675'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 538,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                        children: "Casino List"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 539,
                        columnNumber: 29
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 537,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 536,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                      to: "/unsettledbet/undeclared",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTicketAlt,
                        style: {
                          color: '#ff7675'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 544,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                        children: "Undeclared Bets"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 545,
                        columnNumber: 29
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 543,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 542,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                      to: "/series-settings",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faFileAlt,
                        style: {
                          color: '#74b9ff'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 550,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                        children: "Series Settings"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 551,
                        columnNumber: 29
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 549,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 548,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 515,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 502,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("nav", {
            className: "bottom-nav",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("ul", {
              className: "bottom-nav-list",
              children: bottomMenuItems.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("li", {
                className: "bottom-nav-item",
                children: item.onClick ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
                  href: "#",
                  onClick: item.onClick,
                  className: "nav-link",
                  style: {
                    color: item.color
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                    className: "nav-icon",
                    children: item.icon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 586,
                    columnNumber: 25
                  }, undefined), !isCollapsed && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                    className: "nav-text",
                    children: item.text
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 587,
                    columnNumber: 42
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 580,
                  columnNumber: 23
                }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.CustomLink, {
                  to: item.link,
                  className: "nav-link",
                  style: {
                    color: item.color
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                    className: "nav-icon",
                    children: item.icon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 595,
                    columnNumber: 25
                  }, undefined), !isCollapsed && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                    className: "nav-text",
                    children: item.text
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 596,
                    columnNumber: 42
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 590,
                  columnNumber: 23
                }, undefined)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 578,
                columnNumber: 19
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 576,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 575,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: "user-section",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
              className: "user-info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
                className: "username",
                children: userState === null || userState === void 0 ? void 0 : (_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 607,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 606,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 605,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "mobile-menu-btn",
      onClick: toggleSidebar,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "bar1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "bar2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "bar3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_modern_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      open: isOpen,
      onClose: toggleDrawer,
      direction: "left",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "drawer-header",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "text-logo wd-100",
          children: "KING777"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "drawer-content",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_16__["default"], {
          loadData: onLoadData,
          treeData: treeData,
          onSelect: (selectedKeys, e) => {
            selectExpend(e.node);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 626,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
_s(Sidebar, "RYDyLwXOUM8VVyVPuiSsIbM/qRU=", false, function () {
  return [_redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector, _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch, _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_4__.useNavigateCustom, _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector];
});
_c = Sidebar;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);
var _c;
__webpack_require__.$Refresh$.register(_c, "Sidebar");

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/_layout/elements/sidebar.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/_layout/elements/sidebar.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Admin Sidebar Styles */
  .admin-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    background: #111827;
    color: white;
    z-index: 1000;
    transition: all 0.3s ease;
    overflow-y: auto;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .admin-sidebar.collapsed {
    width: 70px;
  }
  
  .admin-sidebar.hidden {
    transform: translateX(-100%);
  }
  
  /* Sidebar Header */
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: #1A202C;
  }
  
  .sidebar-header .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
  
  .sidebar-header .logo img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .sidebar-header .logo-text {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  
  .toggle-btn {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .toggle-btn:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  /* Sidebar Content */
  .sidebar-content {
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .sidebar-main {
    flex: 1 1;
    overflow: visible;
  }
  
  /* Logo Section */
  .logo-section {
    padding: 15px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }
  
  .custom-logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .logo-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    object-fit: contain;
  }
  
  /* Search Section */
  .search-section {
    padding: 0 15px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Navigation */
  .sidebar-nav {
    padding: 0;
  }
  
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-item {
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
    background: transparent;
  }
  
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.05);
    border-left-color: #ff6b6b;
    text-decoration: none;
    color: white;
  }
  
  .nav-icon {
    margin-right: 15px;
    font-size: 16px;
    min-width: 20px;
    text-align: center;
  }
  
  .nav-text {
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
  }
  
  /* Dropdown Sections */
  .sidebar-dropdowns {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 0;
  }

  /* Bottom Navigation */
  .bottom-nav {
    padding: 0;
  }

  .bottom-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .bottom-nav-item {
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .dropdown-section {
    margin-bottom: 0;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .dropdown-header {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    font-weight: bold;
    font-size: 14px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-user-select: none;
            user-select: none;
    background: transparent;
    width: 100%;
    box-sizing: border-box;
  }
  
  .dropdown-header:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .dropdown-section.open .dropdown-header {
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .dropdown-header span {
    margin-left: 15px;
    flex: 1 1;
  }
  
  .dropdown-header svg {
    transition: transform 0.3s ease;
  }
  
  .dropdown-section.open .dropdown-header svg {
    transform: rotate(180deg);
  }
  
  .dropdown-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    background: transparent;
    display: none;
    z-index: 1000;
    position: relative;
    width: 100%;
    max-height: none;
    overflow: visible;
  }
  
  .dropdown-section.open .dropdown-menu {
    display: block;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
  }
  
  .dropdown-menu li {
    margin: 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .dropdown-menu a {
    display: flex;
    align-items: center;
    padding: 15px 20px 15px 55px;
    text-decoration: none;
    color: white;
    font-size: 13px;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
    background: transparent;
    width: 100%;
    box-sizing: border-box;
  }
  
  .dropdown-menu a:hover {
    background: rgba(255, 255, 255, 0.05);
    border-left-color: #ff6b6b;
    text-decoration: none;
    color: white;
    transform: translateX(5px);
    width: 100%;
  }
  
  .dropdown-menu a span:first-child {
    margin-right: 10px;
    font-size: 14px;
  }
  
  .casino-menu {
    max-height: none;
    overflow: visible;
  }
  
  /* User Section */
  .user-section {
    padding: 15px 15px;
    background: #1A202C;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .username {
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
  }
  
  /* Desktop Menu Button */
  .desktop-menu-btn {
    display: block;
    position: fixed;
    top: 6px;
    left: 20px;
    z-index: 1001;
    cursor: pointer;
    background: #3c4188;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .desktop-menu-btn:hover {
    background: #fff;
  }
  
  /* Mobile Menu Button */
  .mobile-menu-btn {
    display: none;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1001;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
    border-radius: 4px;
  }
  
  .mobile-menu-btn .bar1,
  .mobile-menu-btn .bar2,
  .mobile-menu-btn .bar3 {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;
  }
  
  /* Collapsed State Styles */
  .admin-sidebar.collapsed .logo-text,
  .admin-sidebar.collapsed .nav-text,
  .admin-sidebar.collapsed .dropdown-header span,
  .admin-sidebar.collapsed .username,
  .admin-sidebar.collapsed .custom-logo {
    display: none;
  }
  
  
  
  /* Keep dropdown menu visible when open, even in collapsed state */
  .admin-sidebar.collapsed .dropdown-menu {
    display: none;
  }
  
  .admin-sidebar.collapsed .dropdown-section.open .dropdown-menu {
    display: block;
    position: static;
    width: 100%;
    background: #1A202C;
    border-radius: 0;
    box-shadow: none;
    z-index: auto;
  }
  
  .admin-sidebar.collapsed .nav-link {
    justify-content: center;
    padding: 15px 10px;
  }
  
  .admin-sidebar.collapsed .nav-icon {
    margin-right: 0;
    font-size: 18px;
  }
  
  .admin-sidebar.collapsed .dropdown-header {
    justify-content: center;
    padding: 15px 10px;
  }
  
  .admin-sidebar.collapsed .dropdown-header span:first-child {
    margin-left: 0;
  }
  
  /* Main Content Adjustment */
  .admin {
    margin-left: 280px;
    transition: margin-left 0.3s ease;
  }
  
  .admin.sidebar-collapsed {
    margin-left: 70px;
  }

  .admin > .main {
    min-width: 0;
    width: auto;
    max-width: none;
    overflow-x: hidden;
  }
  
  .admin.sidebar-hidden {
    margin-left: 0;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .desktop-menu-btn {
      display: none;
    }
    
    .admin-sidebar {
      transform: translateX(-100%);
    }
    
    .admin-sidebar.mobile-open {
      transform: translateX(0);
    }
    
    .mobile-menu-btn {
      display: block;
    }
    
    .admin {
      margin-left: 0;
      width: 100%;
    }

    .admin > .main {
      width: 100%;
      overflow-x: hidden;
    }
    
    .admin.sidebar-collapsed {
      margin-left: 0;
    }
    
    /* Remove gaps in mobile view */
    .sidebar-content {
      padding: 0;
    }
    
    .logo-section {
      padding: 8px 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .sidebar-main {
      padding: 0;
    }
    
    .sidebar-nav {
      padding: 0;
    }
    
    .sidebar-dropdowns {
      padding-top: 0;
      border-top: none;
    }
    
    .nav-item, .bottom-nav-item {
      margin: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .nav-link {
      padding: 10px 20px;
    }
    
    .dropdown-header {
      padding: 10px 20px;
    }
    
    .dropdown-menu {
      margin-top: 0;
      margin-bottom: 0;
      max-height: none;
      overflow: visible;
    }
    
    .dropdown-menu a {
      padding: 10px 20px 10px 50px;
    }
    
    .dropdown-section {
      margin-bottom: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    

    
    .user-section {
      padding: 10px 15px;
    }
  }
  
  /* Scrollbar Styling */
  .admin-sidebar::-webkit-scrollbar {
    width: 6px;
  }
  
  .admin-sidebar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .admin-sidebar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
  
  .admin-sidebar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  
  /* Active State */
  .nav-link.active,
  .dropdown-menu a.active {
    background: rgba(255, 255, 255, 0.05);
    border-left-color: #ff6b6b;
  }
  
  /* Animation for dropdowns */
  .dropdown-section.open .dropdown-menu {
    animation: slideDown 0.4s ease-out;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-15px);
      max-height: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
      max-height: 500px;
    }
  }
  `, "",{"version":3,"sources":["webpack://./src/admin-app/pages/_layout/elements/sidebar.css"],"names":[],"mappings":"AAAA,yBAAyB;EACvB;IACE,eAAe;IACf,OAAO;IACP,MAAM;IACN,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,yCAAyC;EAC3C;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,4BAA4B;EAC9B;;EAEA,mBAAmB;EACnB;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;IAClB,iDAAiD;IACjD,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,sCAAsC;EACxC;;EAEA;IACE,oCAAoC;EACtC;;EAEA,oBAAoB;EACpB;IACE,UAAU;IACV,iBAAiB;IACjB,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,SAAO;IACP,iBAAiB;EACnB;;EAEA,iBAAiB;EACjB;IACE,kBAAkB;IAClB,iDAAiD;IACjD,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;EACrB;;EAEA,mBAAmB;EACnB;IACE,oBAAoB;IACpB,iDAAiD;EACnD;;EAEA,eAAe;EACf;IACE,UAAU;EACZ;;EAEA;IACE,gBAAgB;IAChB,UAAU;IACV,SAAS;EACX;;EAEA;IACE,SAAS;IACT,iDAAiD;EACnD;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,yBAAyB;IACzB,kCAAkC;IAClC,uBAAuB;EACzB;;EAEA;IACE,qCAAqC;IACrC,0BAA0B;IAC1B,qBAAqB;IACrB,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,eAAe;IACf,cAAc;EAChB;;EAEA,sBAAsB;EACtB;IACE,8CAA8C;IAC9C,cAAc;EAChB;;EAEA,sBAAsB;EACtB;IACE,UAAU;EACZ;;EAEA;IACE,gBAAgB;IAChB,UAAU;IACV,SAAS;EACX;;EAEA;IACE,SAAS;IACT,iDAAiD;EACnD;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,iDAAiD;EACnD;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,yBAAiB;YAAjB,iBAAiB;IACjB,uBAAuB;IACvB,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,qCAAqC;IACrC,iDAAiD;EACnD;;EAEA;IACE,iBAAiB;IACjB,SAAO;EACT;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,SAAS;IACT,WAAW;IACX,iDAAiD;EACnD;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,4BAA4B;IAC5B,qBAAqB;IACrB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,kCAAkC;IAClC,uBAAuB;IACvB,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,qCAAqC;IACrC,0BAA0B;IAC1B,qBAAqB;IACrB,YAAY;IACZ,0BAA0B;IAC1B,WAAW;EACb;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA,iBAAiB;EACjB;IACE,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,iBAAiB;IACjB,eAAe;IACf,cAAc;EAChB;;EAEA,wBAAwB;EACxB;IACE,cAAc;IACd,eAAe;IACf,QAAQ;IACR,UAAU;IACV,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA,uBAAuB;EACvB;IACE,aAAa;IACb,eAAe;IACf,SAAS;IACT,UAAU;IACV,aAAa;IACb,eAAe;IACf,8BAA8B;IAC9B,aAAa;IACb,kBAAkB;EACpB;;EAEA;;;IAGE,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,gBAAgB;EAClB;;EAEA,2BAA2B;EAC3B;;;;;IAKE,aAAa;EACf;;;;EAIA,kEAAkE;EAClE;IACE,aAAa;EACf;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,YAAY;IACZ,mBAAmB;IACnB,0BAA0B;IAC1B,yCAAyC;IACzC,aAAa;EACf;;EAEA;IACE,uBAAuB;IACvB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,uBAAuB;IACvB,kBAAkB;EACpB;;EAEA;IACE,cAAc;EAChB;;EAEA,4BAA4B;EAC5B;IACE,kBAAkB;IAClB,iCAAiC;EACnC;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,cAAc;EAChB;;EAEA,sBAAsB;EACtB;IACE;MACE,aAAa;IACf;;IAEA;MACE,4BAA4B;IAC9B;;IAEA;MACE,wBAAwB;IAC1B;;IAEA;MACE,cAAc;IAChB;;IAEA;MACE,cAAc;IAChB;;IAEA;MACE,cAAc;IAChB;;IAEA,+BAA+B;IAC/B;MACE,UAAU;IACZ;;IAEA;MACE,iBAAiB;MACjB,iDAAiD;IACnD;;IAEA;MACE,UAAU;IACZ;;IAEA;MACE,UAAU;IACZ;;IAEA;MACE,cAAc;MACd,gBAAgB;IAClB;;IAEA;MACE,SAAS;MACT,iDAAiD;IACnD;;IAEA;MACE,kBAAkB;IACpB;;IAEA;MACE,kBAAkB;IACpB;;IAEA;MACE,aAAa;MACb,gBAAgB;MAChB,gBAAgB;MAChB,iBAAiB;IACnB;;IAEA;MACE,4BAA4B;IAC9B;;IAEA;MACE,gBAAgB;MAChB,iDAAiD;IACnD;;;;IAIA;MACE,kBAAkB;IACpB;EACF;;EAEA,sBAAsB;EACtB;IACE,UAAU;EACZ;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,oCAAoC;IACpC,kBAAkB;EACpB;;EAEA;IACE,oCAAoC;EACtC;;EAEA,iBAAiB;EACjB;;IAEE,qCAAqC;IACrC,0BAA0B;EAC5B;;EAEA,4BAA4B;EAC5B;IACE,kCAAkC;EACpC;;EAEA;IACE;MACE,UAAU;MACV,4BAA4B;MAC5B,aAAa;IACf;IACA;MACE,UAAU;MACV,wBAAwB;MACxB,iBAAiB;IACnB;EACF","sourcesContent":["/* Admin Sidebar Styles */\n  .admin-sidebar {\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    width: 280px;\n    background: #111827;\n    color: white;\n    z-index: 1000;\n    transition: all 0.3s ease;\n    overflow-y: auto;\n    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);\n  }\n  \n  .admin-sidebar.collapsed {\n    width: 70px;\n  }\n  \n  .admin-sidebar.hidden {\n    transform: translateX(-100%);\n  }\n  \n  /* Sidebar Header */\n  .sidebar-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px 15px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    background: #1A202C;\n  }\n  \n  .sidebar-header .logo {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: white;\n  }\n  \n  .sidebar-header .logo img {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n  }\n  \n  .sidebar-header .logo-text {\n    font-size: 18px;\n    font-weight: bold;\n    color: white;\n  }\n  \n  .toggle-btn {\n    background: none;\n    border: none;\n    color: white;\n    font-size: 16px;\n    cursor: pointer;\n    padding: 5px;\n    border-radius: 4px;\n    transition: background-color 0.3s ease;\n  }\n  \n  .toggle-btn:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n  \n  /* Sidebar Content */\n  .sidebar-content {\n    padding: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .sidebar-main {\n    flex: 1;\n    overflow: visible;\n  }\n  \n  /* Logo Section */\n  .logo-section {\n    padding: 15px 15px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    text-align: center;\n  }\n  \n  .custom-logo {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .logo-image {\n    width: 100%;\n    max-width: 200px;\n    height: auto;\n    object-fit: contain;\n  }\n  \n  /* Search Section */\n  .search-section {\n    padding: 0 15px 20px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  \n  /* Navigation */\n  .sidebar-nav {\n    padding: 0;\n  }\n  \n  .nav-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  \n  .nav-item {\n    margin: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  \n  .nav-link {\n    display: flex;\n    align-items: center;\n    padding: 15px 20px;\n    text-decoration: none;\n    color: white;\n    transition: all 0.3s ease;\n    border-left: 3px solid transparent;\n    background: transparent;\n  }\n  \n  .nav-link:hover {\n    background: rgba(255, 255, 255, 0.05);\n    border-left-color: #ff6b6b;\n    text-decoration: none;\n    color: white;\n  }\n  \n  .nav-icon {\n    margin-right: 15px;\n    font-size: 16px;\n    min-width: 20px;\n    text-align: center;\n  }\n  \n  .nav-text {\n    font-weight: bold;\n    font-size: 14px;\n    color: #FFFFFF;\n  }\n  \n  /* Dropdown Sections */\n  .sidebar-dropdowns {\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    padding-top: 0;\n  }\n\n  /* Bottom Navigation */\n  .bottom-nav {\n    padding: 0;\n  }\n\n  .bottom-nav-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .bottom-nav-item {\n    margin: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  \n  .dropdown-section {\n    margin-bottom: 0;\n    position: relative;\n    border-radius: 4px;\n    overflow: hidden;\n    width: 100%;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  \n  .dropdown-header {\n    display: flex;\n    align-items: center;\n    padding: 15px 20px;\n    font-weight: bold;\n    font-size: 14px;\n    color: white;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    user-select: none;\n    background: transparent;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  \n  .dropdown-header:hover {\n    background: rgba(255, 255, 255, 0.05);\n  }\n  \n  .dropdown-section.open .dropdown-header {\n    background: rgba(255, 255, 255, 0.05);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  \n  .dropdown-header span {\n    margin-left: 15px;\n    flex: 1;\n  }\n  \n  .dropdown-header svg {\n    transition: transform 0.3s ease;\n  }\n  \n  .dropdown-section.open .dropdown-header svg {\n    transform: rotate(180deg);\n  }\n  \n  .dropdown-menu {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    background: transparent;\n    display: none;\n    z-index: 1000;\n    position: relative;\n    width: 100%;\n    max-height: none;\n    overflow: visible;\n  }\n  \n  .dropdown-section.open .dropdown-menu {\n    display: block;\n    margin-top: 0;\n    margin-bottom: 0;\n    width: 100%;\n  }\n  \n  .dropdown-menu li {\n    margin: 0;\n    width: 100%;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  \n  .dropdown-menu a {\n    display: flex;\n    align-items: center;\n    padding: 15px 20px 15px 55px;\n    text-decoration: none;\n    color: white;\n    font-size: 13px;\n    transition: all 0.3s ease;\n    border-left: 3px solid transparent;\n    background: transparent;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  \n  .dropdown-menu a:hover {\n    background: rgba(255, 255, 255, 0.05);\n    border-left-color: #ff6b6b;\n    text-decoration: none;\n    color: white;\n    transform: translateX(5px);\n    width: 100%;\n  }\n  \n  .dropdown-menu a span:first-child {\n    margin-right: 10px;\n    font-size: 14px;\n  }\n  \n  .casino-menu {\n    max-height: none;\n    overflow: visible;\n  }\n  \n  /* User Section */\n  .user-section {\n    padding: 15px 15px;\n    background: #1A202C;\n  }\n  \n  .user-info {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .username {\n    font-weight: bold;\n    font-size: 14px;\n    color: #FFFFFF;\n  }\n  \n  /* Desktop Menu Button */\n  .desktop-menu-btn {\n    display: block;\n    position: fixed;\n    top: 6px;\n    left: 20px;\n    z-index: 1001;\n    cursor: pointer;\n    background: #3c4188;\n    padding: 4px;\n    border-radius: 4px;\n    transition: all 0.3s ease;\n  }\n  \n  .desktop-menu-btn:hover {\n    background: #fff;\n  }\n  \n  /* Mobile Menu Button */\n  .mobile-menu-btn {\n    display: none;\n    position: fixed;\n    top: 20px;\n    left: 20px;\n    z-index: 1001;\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.8);\n    padding: 10px;\n    border-radius: 4px;\n  }\n  \n  .mobile-menu-btn .bar1,\n  .mobile-menu-btn .bar2,\n  .mobile-menu-btn .bar3 {\n    width: 25px;\n    height: 3px;\n    background-color: white;\n    margin: 4px 0;\n    transition: 0.4s;\n  }\n  \n  /* Collapsed State Styles */\n  .admin-sidebar.collapsed .logo-text,\n  .admin-sidebar.collapsed .nav-text,\n  .admin-sidebar.collapsed .dropdown-header span,\n  .admin-sidebar.collapsed .username,\n  .admin-sidebar.collapsed .custom-logo {\n    display: none;\n  }\n  \n  \n  \n  /* Keep dropdown menu visible when open, even in collapsed state */\n  .admin-sidebar.collapsed .dropdown-menu {\n    display: none;\n  }\n  \n  .admin-sidebar.collapsed .dropdown-section.open .dropdown-menu {\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 0;\n    width: 200px;\n    background: #1A202C;\n    border-radius: 0 4px 4px 0;\n    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);\n    z-index: 1001;\n  }\n  \n  .admin-sidebar.collapsed .nav-link {\n    justify-content: center;\n    padding: 15px 10px;\n  }\n  \n  .admin-sidebar.collapsed .nav-icon {\n    margin-right: 0;\n    font-size: 18px;\n  }\n  \n  .admin-sidebar.collapsed .dropdown-header {\n    justify-content: center;\n    padding: 15px 10px;\n  }\n  \n  .admin-sidebar.collapsed .dropdown-header span:first-child {\n    margin-left: 0;\n  }\n  \n  /* Main Content Adjustment */\n  .admin {\n    margin-left: 280px;\n    transition: margin-left 0.3s ease;\n  }\n  \n  .admin.sidebar-collapsed {\n    margin-left: 70px;\n  }\n  \n  .admin.sidebar-hidden {\n    margin-left: 0;\n  }\n  \n  /* Responsive Design */\n  @media (max-width: 768px) {\n    .desktop-menu-btn {\n      display: none;\n    }\n    \n    .admin-sidebar {\n      transform: translateX(-100%);\n    }\n    \n    .admin-sidebar.mobile-open {\n      transform: translateX(0);\n    }\n    \n    .mobile-menu-btn {\n      display: block;\n    }\n    \n    .admin {\n      margin-left: 0;\n    }\n    \n    .admin.sidebar-collapsed {\n      margin-left: 0;\n    }\n    \n    /* Remove gaps in mobile view */\n    .sidebar-content {\n      padding: 0;\n    }\n    \n    .logo-section {\n      padding: 8px 15px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    }\n    \n    .sidebar-main {\n      padding: 0;\n    }\n    \n    .sidebar-nav {\n      padding: 0;\n    }\n    \n    .sidebar-dropdowns {\n      padding-top: 0;\n      border-top: none;\n    }\n    \n    .nav-item, .bottom-nav-item {\n      margin: 0;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    }\n    \n    .nav-link {\n      padding: 10px 20px;\n    }\n    \n    .dropdown-header {\n      padding: 10px 20px;\n    }\n    \n    .dropdown-menu {\n      margin-top: 0;\n      margin-bottom: 0;\n      max-height: none;\n      overflow: visible;\n    }\n    \n    .dropdown-menu a {\n      padding: 10px 20px 10px 50px;\n    }\n    \n    .dropdown-section {\n      margin-bottom: 0;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    }\n    \n\n    \n    .user-section {\n      padding: 10px 15px;\n    }\n  }\n  \n  /* Scrollbar Styling */\n  .admin-sidebar::-webkit-scrollbar {\n    width: 6px;\n  }\n  \n  .admin-sidebar::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.1);\n  }\n  \n  .admin-sidebar::-webkit-scrollbar-thumb {\n    background: rgba(255, 255, 255, 0.3);\n    border-radius: 3px;\n  }\n  \n  .admin-sidebar::-webkit-scrollbar-thumb:hover {\n    background: rgba(255, 255, 255, 0.5);\n  }\n  \n  /* Active State */\n  .nav-link.active,\n  .dropdown-menu a.active {\n    background: rgba(255, 255, 255, 0.05);\n    border-left-color: #ff6b6b;\n  }\n  \n  /* Animation for dropdowns */\n  .dropdown-section.open .dropdown-menu {\n    animation: slideDown 0.4s ease-out;\n  }\n  \n  @keyframes slideDown {\n    from {\n      opacity: 0;\n      transform: translateY(-15px);\n      max-height: 0;\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n      max-height: 500px;\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/admin-app/pages/_layout/elements/sidebar.css":
/*!**********************************************************!*\
  !*** ./src/admin-app/pages/_layout/elements/sidebar.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/_layout/elements/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/_layout/elements/sidebar.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/_layout/elements/sidebar.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_admin-app_pages__layout_MainAdmin_tsx.chunk.js.map


