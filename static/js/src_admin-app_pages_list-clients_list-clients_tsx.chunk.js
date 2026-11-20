"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_list-clients_list-clients_tsx"],
  {
    /***/ "./src/admin-app/pages/list-clients/list-clients.tsx":
      /*!***********************************************************!*\
  !*** ./src/admin-app/pages/list-clients/list-clients.tsx ***!
  \***********************************************************/
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
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../models/User */ "./src/models/User.ts"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css"
          );
        /* harmony import */ var _modals_DepositModal__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./modals/DepositModal */ "./src/admin-app/pages/list-clients/modals/DepositModal.tsx"
          );
        /* harmony import */ var _modals_StatusModal__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./modals/StatusModal */ "./src/admin-app/pages/list-clients/modals/StatusModal.tsx"
          );
        /* harmony import */ var _modals_WithdrawModal__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./modals/WithdrawModal */ "./src/admin-app/pages/list-clients/modals/WithdrawModal.tsx"
          );
        /* harmony import */ var _modals_PasswordModal__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./modals/PasswordModal */ "./src/admin-app/pages/list-clients/modals/PasswordModal.tsx"
          );
        /* harmony import */ var _modals_ExposureCreditModal__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./modals/ExposureCreditModal */ "./src/admin-app/pages/list-clients/modals/ExposureCreditModal.tsx"
          );
        /* harmony import */ var _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../../pages/_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var react_to_pdf__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! react-to-pdf */ "./node_modules/react-to-pdf/umd/react-to-pdf.js"
          );
        /* harmony import */ var react_to_pdf__WEBPACK_IMPORTED_MODULE_12___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_to_pdf__WEBPACK_IMPORTED_MODULE_12__
          );
        /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js"
          );
        /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_13___default =
          /*#__PURE__*/ __webpack_require__.n(
            file_saver__WEBPACK_IMPORTED_MODULE_13__
          );
        /* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_27__ =
          __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.mjs");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_14__
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _modals_GeneralSettingsModal__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! ./modals/GeneralSettingsModal */ "./src/admin-app/pages/list-clients/modals/GeneralSettingsModal.tsx"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_18___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_18__
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_28__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_29__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_30__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_31__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js"
          );
        /* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! ../../../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts"
          );
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(
            /*! ../../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
          );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_21___default =
          /*#__PURE__*/ __webpack_require__.n(
            lodash__WEBPACK_IMPORTED_MODULE_21__
          );
        /* harmony import */ var _services_bet_service__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(
            /*! ../../../services/bet.service */ "./src/services/bet.service.ts"
          );
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(
            /*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js"
          );
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_23___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_paginate__WEBPACK_IMPORTED_MODULE_23__
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/list-clients/list-clients.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const ListClients = () => {
          _s();
          var _userBookData$uplevel,
            _userBookData$downlin,
            _userBookData$downcr,
            _userBookData$totalma,
            _userBookData$upperlv,
            _userBookData$downpl,
            _userBookData$availab,
            _userBookData$avpl,
            _userBookData$mypl,
            _users$items;
          const ref =
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_15__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_16__.selectUserData
          );
          const loading = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_15__.useAppSelector)(
            _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_19__.selectLoader
          );
          const [page, setPage] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(1);
          const [users, setUserList] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState();
          const [usersTotal, setUserListTotal] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({
              totalcr: 0,
              totalbalance: 0,
              clientpl: 0,
              exposer: 0,
              totalExposer: 0,
              avl: 0,
            });
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_11__.useWebsocketUser)();
          const [userbook, setUserBook] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const { username, search } = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useParams)();
          const [searchParams] = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useSearchParams)();
          const [depositUser, setDepositUser] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [userBookData, setUserBookData] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [modalType, setModalType] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState("EXP");
          const [callbacklist, setcallbacklist] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [txnPassword, setTxnPassword] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
          const [searchClient, setSearchClient] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
          const [debouncedValue, setDebouncedValue] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(searchClient);
          const [selectAll, setSelectAll] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [activeDeactive, setActiveDeactive] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
          const [showDialog, setDialog] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({
              d: false,
              p: false,
              s: false,
              w: false,
              e: false,
              gs: false,
            });
          const [show, setShow] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [searchObj, setSearchObj] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({
              type: "",
              username: "",
              status: "",
              search: "",
            });
          const roles =
            react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
              const { user } = userState;
              const allOptions = Object.keys(
                _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleType
              );
              const startIndex = allOptions.indexOf(user.role);
              return allOptions
                .slice(startIndex + 1)
                .filter((role) => role !== "admin");
            }, [userState]);
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            react_modal__WEBPACK_IMPORTED_MODULE_18___default().setAppElement(
              "body"
            );
            const ac = new AbortController();
            return () => ac.abort();
          }, []);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            setSearchObj({
              ...searchObj,
              username: username,
            });
          }, [username]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const search = searchParams.get("search")
              ? searchParams.get("search")
              : "";
            getList({
              username: username,
              search: search,
              type: "",
            });
            setPage(1);
          }, [username, searchParams.get("search"), callbacklist]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            clientlistdata(users);
          }, [users]);
          const handlePageClick = (event) => {
            //
            setPage(event.selected + 1);
            getList({
              ...searchObj,
              page: event.selected + 1,
            });
          };
          const openModal = (type) => {
            const types = {
              ...showDialog,
              [type]: true,
            };
            setcallbacklist(false);
            setDialog(types);
          };
          const closeModal = (type) => {
            const types = {
              ...showDialog,
              [type]: false,
            };
            setDialog(types);
          };
          const refreshClientList = (type) => {
            setcallbacklist(type);
          };
          const getUserDetail = (user) => {
            const username = user.username;
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["default"]
              .getParentUserDetail(username)
              .then((res) => {
                setDepositUser(res.data.data[0]);
              });
          };
          const getList = (obj) => {
            if (!obj.page) obj.page = 1;
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["default"]
              .getUserList(obj)
              .then((res) => {
                setSearchObj(obj);
                console.log(res.data.data);
                setUserList(res.data.data);
                clientlistdata(res.data.data.items);
              });
          };

          /***** UPDATE USER AND BAT STATUS ****/

          const updateStatus = (itemIndex, value, type) => {
            const updateListOfItems =
              users && users.items.length > 0 ? [...users.items] : [];
            const item = updateListOfItems[itemIndex];
            type === "user" ? (item.isLogin = value) : (item.betLock = value);
            setUserList({
              ...users,
              items: updateListOfItems,
            });
            const formData = {
              isUserActive: item.isLogin ? item.isLogin : false,
              isUserBetActive: item.betLock ? item.betLock : false,
              username: item.username,
              single: true,
            };
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["default"]
              .updateUserAndBetStatus(formData)
              .then(() => {
                closeModal("s");
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(
                  "Status Updated Successfully"
                );
              })
              .catch((e) => {
                const error = e.response.data.message;
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(error);
              });
          };

          /******** UPDATE LIST DATA ********/

          const updateListUser = (user) => {
            // if (user.balance) {
            //   console.log(user)
            //   const updateListOfItems = [...users]
            //   const index = updateListOfItems.findIndex((u) => u.username === user.username)
            //   updateListOfItems[index].balance = user.balance
            //   //updateListOfItems[index].profitLoss = user.amount
            //   clientlistdata(updateListOfItems)
            //   setUserList(updateListOfItems)
            // }
            getList({
              ...searchObj,
              search: "false",
            });
          };
          const logOutAllUsers = () => {
            socketUser.emit("logoutAll");
          };
          const exportExcel = () => {
            // export pdf
            const usersData =
              users === null || users === void 0
                ? void 0
                : users.items.map((user) => {
                    var _balance$exposer;
                    const {
                      username,
                      creditRefrences,
                      balance,
                      isLogin,
                      betLock,
                      exposerLimit,
                      role,
                    } = user;
                    return {
                      Username: username,
                      "Credit Refrences": creditRefrences,
                      Balance:
                        balance === null || balance === void 0
                          ? void 0
                          : balance.balance.toFixed(2),
                      "Client Pnl": getclientpl(user),
                      Exposer:
                        balance === null || balance === void 0
                          ? void 0
                          : (_balance$exposer = balance.exposer) === null ||
                            _balance$exposer === void 0
                          ? void 0
                          : _balance$exposer.toFixed(2),
                      "Available Balance": (
                        ((balance === null || balance === void 0
                          ? void 0
                          : balance.balance) || 0) -
                        ((balance === null || balance === void 0
                          ? void 0
                          : balance.exposer) || 0)
                      ).toFixed(2),
                      "Is Login": isLogin,
                      "Bet Lock": betLock,
                      "Exposer Limit": exposerLimit,
                      Percentage: 0,
                      Role: _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleName[
                        role
                      ],
                    };
                  });
            exportToExcel(usersData);
          };
          const setuserresponse = () => {
            if (!userbook) {
              _services_user_service__WEBPACK_IMPORTED_MODULE_1__["default"]
                .getUserBook()
                .then((res) => {
                  setUserBook(true);
                  setUserBookData(res.data.data);
                });
            } else {
              setUserBook(false);
            }
          };
          const getclientpl = (row) => {
            var _row$balance;
            const clientpl =
              ((_row$balance = row.balance) === null || _row$balance === void 0
                ? void 0
                : _row$balance.profitLoss) || 0;
            // if (row) {
            //   clientpl = (parseFloat(row?.creditRefrences) - parseFloat(row?.balance?.balance)).toFixed(2)
            // }
            return clientpl;
          };
          const exportToExcel = (data) => {
            // Create a new workbook
            const workbook =
              xlsx__WEBPACK_IMPORTED_MODULE_27__.utils.book_new();

            // Convert the data into a worksheet
            const worksheet =
              xlsx__WEBPACK_IMPORTED_MODULE_27__.utils.json_to_sheet(data);

            // Add the worksheet to the workbook
            xlsx__WEBPACK_IMPORTED_MODULE_27__.utils.book_append_sheet(
              workbook,
              worksheet,
              "Sheet1"
            );

            // Generate an Excel file
            const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_27__.write(
              workbook,
              {
                bookType: "xlsx",
                type: "array",
              }
            );

            // Convert the Excel buffer to a Blob
            const blob = new Blob([excelBuffer], {
              type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            // Save the Blob as a file
            (0, file_saver__WEBPACK_IMPORTED_MODULE_13__.saveAs)(
              blob,
              `users-${moment__WEBPACK_IMPORTED_MODULE_14___default()().format(
                "MMMM-Do-YYYY-h:mm:ss-a"
              )}.xlsx`
            );
          };
          const clientlistdata = (userd) => {
            let objTotal = {
              totalcr: 0,
              totalbalance: 0,
              clientpl: 0,
              exposer: 0,
              totalExposer: 0,
              avl: 0,
            };
            if (userd) {
              var _userd$items, _userd$items$filter;
              (_userd$items = userd.items) === null || _userd$items === void 0
                ? void 0
                : (_userd$items$filter = _userd$items.filter(
                    (user) => user.isLogin === activeDeactive
                  )) === null || _userd$items$filter === void 0
                ? void 0
                : _userd$items$filter.map((user, index) => {
                    const balance = mainBalance(user);
                    const casinoexposer =
                      user && user.balance && user.balance.casinoexposer
                        ? user.balance.casinoexposer
                        : 0;
                    const exposer =
                      user && user.balance && user.balance.exposer
                        ? user.balance.exposer + +casinoexposer
                        : 0 + +casinoexposer;
                    const mainbalance =
                      user && user.balance && user.balance.balance
                        ? user.balance.balance
                        : 0;
                    const totalcr =
                      objTotal.totalcr +
                      +(user && user.creditRefrences
                        ? user.creditRefrences
                        : 0);
                    const totalbalance = objTotal.totalbalance + +balance;
                    const clientpl = objTotal.clientpl + +getclientpl(user);
                    const totalExposer = objTotal.totalExposer + +exposer;
                    const avl = objTotal.avl + +(mainbalance - exposer);
                    objTotal = {
                      ...objTotal,
                      ...{
                        totalbalance,
                        totalcr,
                        clientpl,
                        exposer,
                        totalExposer,
                        avl,
                      },
                    };
                  });
            }
            setUserListTotal(objTotal);
          };
          const resetTxnPassword = (user) => {
            setDepositUser(user);
            handleShow();
          };
          const resetTxnPasswordSubmit = (e) => {
            e.preventDefault();
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["default"]
              .resetTxnPassword({
                userId: depositUser._id,
                transactionPassword: txnPassword,
              })
              .then((res) => {
                var _res$data, _res$data2, _res$data2$message;
                // Check if it's a transaction password error (now comes as success=false)
                if (
                  (res === null || res === void 0
                    ? void 0
                    : (_res$data = res.data) === null || _res$data === void 0
                    ? void 0
                    : _res$data.success) === false &&
                  res !== null &&
                  res !== void 0 &&
                  (_res$data2 = res.data) !== null &&
                  _res$data2 !== void 0 &&
                  (_res$data2$message = _res$data2.message) !== null &&
                  _res$data2$message !== void 0 &&
                  _res$data2$message
                    .toLowerCase()
                    .includes("transaction password")
                ) {
                  // API interceptor already showed the toast, just keep user on page
                  console.log("Transaction password error in reset password");
                  return; // Don't show success message or close modal
                }
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(
                  res.data.message
                );
                handleClose();
              })
              .catch((e) => {
                var _e$response, _e$response$data;
                // Handle any other errors that weren't caught by the interceptor
                const error =
                  ((_e$response = e.response) === null || _e$response === void 0
                    ? void 0
                    : (_e$response$data = _e$response.data) === null ||
                      _e$response$data === void 0
                    ? void 0
                    : _e$response$data.message) || "An error occurred";
                if (!error.toLowerCase().includes("transaction password")) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(
                    error
                  );
                }
              });
          };
          const handleSearch = (e) => {
            e.preventDefault();
            //setSearchClient('')
            getList({
              ...searchObj,
              search: "true",
            });
          };
          const getcurrentpartnership = (users) => {
            const userp =
              (users === null || users === void 0
                ? void 0
                : users.partnership) || {};
            const ownration = userp[4] ? userp[4].ownRatio : "0";
            return ownration;
          };
          const SHAREHOLDER_MODAL_ID = "king777-shareholder-modal";
          const closeShareholderModal = () => {
            const existing = document.getElementById(SHAREHOLDER_MODAL_ID);
            if (existing) existing.remove();
          };
          const showShareholders = (user) => {
            closeShareholderModal();
            const list = Array.isArray(user && user.shareholders) ? user.shareholders : [];
            const total = list.reduce((s, p) => s + (Number(p.sharePercentage) || 0), 0);
            const remaining = Math.max(0, 100 - total);
            const esc = (v) =>
              String(v === undefined || v === null ? "" : v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
            const roleLabel = (r) => (_models_User__WEBPACK_IMPORTED_MODULE_2__.RoleName && _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleName[r]) || r || "";
            const rows = list
              .map((p) => `<tr><td>${esc(p.username)}</td><td>${esc(roleLabel(p.role))}</td><td style="text-align:right">${esc(Number(p.sharePercentage) || 0)}%</td></tr>`)
              .join("");
            const segments = list
              .map((p, i) => `<div title="${esc(p.username)}" style="width:${Math.min(100, Number(p.sharePercentage) || 0)}%;background:hsl(${(i * 67) % 360},60%,45%)"></div>`)
              .join("");
            const overlay = document.createElement("div");
            overlay.id = SHAREHOLDER_MODAL_ID;
            overlay.setAttribute("style", "position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:12px");
            overlay.innerHTML =
              `<div role="dialog" aria-modal="true" style="background:#fff;color:#111;border-radius:6px;max-width:460px;width:100%;max-height:90vh;overflow:auto;padding:16px">` +
              `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><strong>Master Shares - ${esc(user && user.username)}</strong><button type="button" data-close style="border:0;background:none;font-size:22px;line-height:1;cursor:pointer" aria-label="Close">&times;</button></div>` +
              (list.length
                ? `<table class="table table-bordered table-sm"><thead><tr><th>Master</th><th>Role</th><th style="text-align:right">Share</th></tr></thead><tbody>${rows}</tbody><tfoot><tr><th colspan="2">Masters total</th><th style="text-align:right">${esc(Number(total.toFixed(2)))}%</th></tr></tfoot></table>` +
                  `<div style="display:flex;height:14px;background:#e5e7eb;border-radius:7px;overflow:hidden">${segments}</div>` +
                  `<div style="font-size:12px;margin-top:6px">${esc(Number(total.toFixed(2)))}% to Master &middot; ${esc(Number(remaining.toFixed(2)))}% to parent</div>`
                : `<p style="margin:0">No Master share. 100% stays with the parent account.</p>`) +
              `</div>`;
            overlay.addEventListener("click", (e) => {
              if (e.target === overlay || (e.target.closest && e.target.closest("[data-close]"))) closeShareholderModal();
            });
            document.body.appendChild(overlay);
          };
          const k7Cols = (arr, pend) => [arr[0], arr[1], pend, arr[2], arr[5], arr[3], arr[4]].concat(arr.slice(6));
          const renderShareholdersCell = (user) => {
            const list = Array.isArray(user && user.shareholders) ? user.shareholders : [];
            const first = list.length ? list[0] : null;
            const sharedPct = Math.round(list.reduce((s, p) => s + (Number(p.sharePercentage) || 0), 0) * 100) / 100;
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              "a",
              {
                href: "#",
                className: "badge badge-info",
                style: { cursor: "pointer" },
                onClick: (e) => {
                  e.preventDefault();
                  showShareholders(user);
                },
              },
              list.length > 1 ? `${list.length} Masters · ${sharedPct}%` : first ? `${Number(first.sharePercentage) || 0}% ${first.username}` : "No Share"
            );
          };
          const ROLE_BADGES = { super_admin: ["SA", "Super Admin"], admin: ["A", "Admin"], master: ["M", "Master"], user: ["U", "User"] };
          const renderRoleBadge = (role) => {
            const key = String(role || "user").toLowerCase();
            const [short, title] = ROLE_BADGES[key] || [key.slice(0, 3).toUpperCase(), key];
            return (0, react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("span", { className: "role-badge role-" + key, title, children: short }, "role-" + key, false, { fileName: _jsxFileName, lineNumber: 0, columnNumber: 0 }, undefined);
          };
          const renderBreadcrumb = () => {
            const crumbs = (users && users.breadcrumb) || [];
            if (!crumbs.length) return null;
            const React = react__WEBPACK_IMPORTED_MODULE_0___default();
            const CustomLink = _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_10__.CustomLink;
            const roleName = _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleName || {};
            const parts = [];
            crumbs.forEach((c, i) => {
              const label = `${roleName[c.role] || c.role || "Account"} [${c.username}]`;
              if (i > 0) parts.push(React.createElement("span", { key: `sep${i}`, className: "mx-1" }, ">"));
              if (i === crumbs.length - 1) {
                parts.push(React.createElement("strong", { key: `c${i}` }, label));
              } else {
                parts.push(
                  React.createElement(CustomLink, { key: `c${i}`, to: i === 0 ? "/list-clients" : `/list-clients/${c.username}` }, label)
                );
              }
            });
            return React.createElement("nav", { className: "m-b-10", "aria-label": "breadcrumb" }, parts);
          };
          const isAdmin = () => true;
          const _k7UnusedIsAdmin =
            react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(
              (user) => {
                if (
                  userState.user.role !==
                    _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleType.admin &&
                  userState.user.role !==
                    _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleType.sadmin
                ) {
                  var _user$parentStr, _user$parentStr2;
                  return (
                    (user === null || user === void 0
                      ? void 0
                      : (_user$parentStr = user.parentStr) === null ||
                        _user$parentStr === void 0
                      ? void 0
                      : _user$parentStr[
                          (user === null || user === void 0
                            ? void 0
                            : (_user$parentStr2 = user.parentStr) === null ||
                              _user$parentStr2 === void 0
                            ? void 0
                            : _user$parentStr2.length) - 1
                        ]) === userState.user._id
                  );
                }
                return true;
              },
              [userState]
            );
          // Balance column = the account's real wallet balance.
          const mainBalance = (row) =>
            (Number(row && row.balance ? row.balance.balance : 0) || 0).toFixed(2);
          /* Checkbox functionality */
          const handleSelectItem = (user) => {
            if (users && users.items.length > 0) {
              const updatedUsers = users.items.map((u) =>
                u === user
                  ? {
                      ...u,
                      selected: !u.selected,
                    }
                  : u
              );
              setUserList({
                ...users,
                items: updatedUsers,
              });
            }
          };
          const handleSelectAll = () => {
            setSelectAll(!selectAll); // Toggle the state of "Select All" checkbox
            if (users) {
              const updatedHistory = users.items.map((user) => ({
                ...user,
                selected: !selectAll,
              }));
              setUserList({
                ...users,
                items: updatedHistory,
              });
            }
          };
          const lock = (e, lock, type) => {
            e.preventDefault();
            const select =
              users === null || users === void 0
                ? void 0
                : users.items.reduce((selected, item) => {
                    if (item.selected) {
                      selected = true;
                    }
                    return selected;
                  }, false);
            if (selectAll || select) {
              const selectedItems =
                users === null || users === void 0
                  ? void 0
                  : users.items
                      .filter((item) => item.selected)
                      .map((item) => item._id);
              if (selectedItems.length > 0 && users) {
                _services_bet_service__WEBPACK_IMPORTED_MODULE_22__["default"]
                  .usersLockClientList({
                    ids: selectedItems,
                    lock,
                    type,
                  })
                  .then((res) => {
                    if (res.data.data.success) {
                      const updatedUsers = users.items.map((u) => ({
                        ...u,
                        selected: !u.selected,
                        [type === "betLock" ? "betLock" : "isLogin"]: lock,
                      }));
                      setUserList({
                        ...users,
                        items: updatedUsers,
                      });
                      setSelectAll(false);
                      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(
                        res.data.message
                      );
                    }
                  });
              }
            } else {
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(
                "Please select one item"
              );
            }
          };
          const onSearch = (e) => {
            if (e)
              getList({
                username: e,
                search: "true",
                type: "",
              });
            else if (username)
              getList({
                username: username,
                search: "false",
                type: "",
              });
            else
              getList({
                username: "",
                search: "false",
                type: "",
              });
          };
          const typesOfClients = (e, status) => {
            e.preventDefault();
            setActiveDeactive(status === "true");
            getList({
              username: username,
              search: "false",
              type: "",
              status,
            });
          };
          const debouncedChangeHandler =
            react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(
              (0, lodash__WEBPACK_IMPORTED_MODULE_21__.debounce)(onSearch, 500),
              [username]
            );
          const finalExposer = (userB) => {
            var _userB$exposer, _userB$casinoexposer;
            const ex =
              (userB === null || userB === void 0
                ? void 0
                : (_userB$exposer = userB.exposer) === null ||
                  _userB$exposer === void 0
                ? void 0
                : _userB$exposer.toString()) || "0";
            const cex =
              (userB === null || userB === void 0
                ? void 0
                : (_userB$casinoexposer = userB.casinoexposer) === null ||
                  _userB$casinoexposer === void 0
                ? void 0
                : _userB$casinoexposer.toString()) || "0";
            console.log(ex);
            const finalE = parseFloat(ex) + +parseFloat(cex);
            return finalE.toFixed(2);
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                "div",
                {
                  className: "container-fluid",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                      "div",
                      {
                        className: "row",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                          "div",
                          {
                            className: "master-balance",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                "div",
                                {
                                  className: "text-center",
                                  onClick: () => {
                                    setuserresponse();
                                  },
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                      "span",
                                      {
                                        className:
                                          "far fa-arrow-alt-circle-down",
                                        id: "user-balance",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 445,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                      "span",
                                      {
                                        className: "far fa-arrow-alt-circle-up",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 446,
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
                                  lineNumber: 439,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              userbook &&
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                  "div",
                                  {
                                    className: "master-balance-detail m-t-20",
                                    id: "master-balance-detail",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                      "div",
                                      {
                                        className: "master-balance",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                          "div",
                                          {
                                            className:
                                              "master-balance-detail m-t-20",
                                            id: "master-balance-detail",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                              "ul",
                                              {
                                                className: "row",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "li",
                                                    {
                                                      className: "col-md-4",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "label",
                                                          {
                                                            className:
                                                              "col-md-8 text-left  p-0",
                                                            children:
                                                              "Upper Level Credit Referance:",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 454,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-right col-md-4  p-0",
                                                            children:
                                                              (_userBookData$uplevel =
                                                                userBookData.uplevelcr) ===
                                                                null ||
                                                              _userBookData$uplevel ===
                                                                void 0
                                                                ? void 0
                                                                : _userBookData$uplevel.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 457,
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
                                                      lineNumber: 453,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "li",
                                                    {
                                                      className: "col-md-4",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "label",
                                                          {
                                                            className:
                                                              "col-md-8 text-left p-0",
                                                            children:
                                                              "Down level Occupy Balance:",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 462,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-right col-md-4  p-0",
                                                            children:
                                                              (_userBookData$downlin =
                                                                userBookData.downlineob) ===
                                                                null ||
                                                              _userBookData$downlin ===
                                                                void 0
                                                                ? void 0
                                                                : _userBookData$downlin.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 463,
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
                                                      lineNumber: 461,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "li",
                                                    {
                                                      className: "col-md-4",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "label",
                                                          {
                                                            className:
                                                              "col-md-8 text-left p-0 ",
                                                            children:
                                                              "Down Level Credit Referance:",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 468,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-right col-md-4  p-0",
                                                            children:
                                                              (_userBookData$downcr =
                                                                userBookData.downcr) ===
                                                                null ||
                                                              _userBookData$downcr ===
                                                                void 0
                                                                ? void 0
                                                                : _userBookData$downcr.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 471,
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
                                                      lineNumber: 467,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "li",
                                                    {
                                                      className: "col-md-4",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "label",
                                                          {
                                                            className:
                                                              "col-md-8 text-left p-0",
                                                            children:
                                                              "Total Master Balance",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 476,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-right col-md-4 p-0",
                                                            children:
                                                              (_userBookData$totalma =
                                                                userBookData.totalmasterb) ===
                                                                null ||
                                                              _userBookData$totalma ===
                                                                void 0
                                                                ? void 0
                                                                : _userBookData$totalma.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 477,
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
                                                      lineNumber: 475,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "li",
                                                    {
                                                      className: "col-md-4",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "label",
                                                          {
                                                            className:
                                                              "col-md-8 text-left p-0",
                                                            children:
                                                              "Upper Level:",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 482,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-right col-md-4 p-0",
                                                            children:
                                                              (_userBookData$upperlv =
                                                                userBookData.upperlvell) ===
                                                                null ||
                                                              _userBookData$upperlv ===
                                                                void 0
                                                                ? void 0
                                                                : _userBookData$upperlv.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 483,
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
                                                      lineNumber: 481,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "li",
                                                    {
                                                      className: "col-md-4",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "label",
                                                          {
                                                            className:
                                                              "col-md-8 text-left p-0",
                                                            children:
                                                              "Down Level Profit/Loss :",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 488,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-right col-md-4 p-0",
                                                            children:
                                                              (_userBookData$downpl =
                                                                userBookData.downpl) ===
                                                                null ||
                                                              _userBookData$downpl ===
                                                                void 0
                                                                ? void 0
                                                                : _userBookData$downpl.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 489,
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
                                                      lineNumber: 487,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "li",
                                                    {
                                                      className: "col-md-4",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "label",
                                                          {
                                                            className:
                                                              "col-md-8 text-left p-0",
                                                            children:
                                                              "Available Balance:",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 494,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-right col-md-4 p-0",
                                                            children:
                                                              (_userBookData$availab =
                                                                userBookData.availableB) ===
                                                                null ||
                                                              _userBookData$availab ===
                                                                void 0
                                                                ? void 0
                                                                : _userBookData$availab.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 495,
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
                                                      lineNumber: 493,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "li",
                                                    {
                                                      className: "col-md-4",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "label",
                                                          {
                                                            className:
                                                              "col-md-8 text-left p-0",
                                                            children:
                                                              "Available Balance With Profit/Loss:",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 500,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-right col-md-4 p-0",
                                                            children:
                                                              (_userBookData$avpl =
                                                                userBookData.avpl) ===
                                                                null ||
                                                              _userBookData$avpl ===
                                                                void 0
                                                                ? void 0
                                                                : _userBookData$avpl.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 503,
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
                                                      lineNumber: 499,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "li",
                                                    {
                                                      className: "col-md-4",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "label",
                                                          {
                                                            className:
                                                              "col-md-8 text-left p-0",
                                                            children:
                                                              "My Profit/Loss:",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 508,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-right col-md-4 p-0",
                                                            children:
                                                              (_userBookData$mypl =
                                                                userBookData.mypl) ===
                                                                null ||
                                                              _userBookData$mypl ===
                                                                void 0
                                                                ? void 0
                                                                : _userBookData$mypl.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 509,
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
                                                      lineNumber: 507,
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
                                                lineNumber: 452,
                                                columnNumber: 21,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 451,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 450,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 449,
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
                            lineNumber: 438,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 437,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                      "div",
                      {
                        className: "row",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                          "div",
                          {
                            className: "col-md-12 main-container",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                "div",
                                {
                                  className: "listing-grid",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                      "div",
                                      {
                                        className: "detail-row ",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                          "div",
                                          {
                                            className: " row",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-10 ",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "h2",
                                                          {
                                                            className:
                                                              "d-inline-block",
                                                            children: [
                                                              "Account List",
                                                              " - Logged in: ",
                                                              userState?.user?.username || "Unknown",
                                                            ],
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 527,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "p",
                                                          {
                                                            children: [
                                                              (userState.user
                                                                .role ==
                                                                _models_User__WEBPACK_IMPORTED_MODULE_2__
                                                                  .RoleType
                                                                  .admin ||
                                                                userState.user
                                                                  .role ==
                                                                  _models_User__WEBPACK_IMPORTED_MODULE_2__
                                                                    .RoleType
                                                                    .sadmin) &&
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                  "button",
                                                                  {
                                                                    type: "submit",
                                                                    onClick:
                                                                      logOutAllUsers,
                                                                    className:
                                                                      "btn btn-primary",
                                                                    children:
                                                                      "Logout All Users",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 531,
                                                                    columnNumber: 29,
                                                                  },
                                                                  undefined
                                                                ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                "button",
                                                                {
                                                                  type: "submit",
                                                                  onClick:
                                                                    exportExcel,
                                                                  className:
                                                                    "btn btn-small bg-green mrc-5 mlc-5",
                                                                  children:
                                                                    "Excel",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 540,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                react_to_pdf__WEBPACK_IMPORTED_MODULE_12___default(),
                                                                {
                                                                  targetRef:
                                                                    ref,
                                                                  filename: `users-${moment__WEBPACK_IMPORTED_MODULE_14___default()().format(
                                                                    "MMMM-Do-YYYY-h:mm:ss-a"
                                                                  )}.pdf`,
                                                                  children: ({
                                                                    toPdf,
                                                                  }) =>
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                      "button",
                                                                      {
                                                                        className:
                                                                          "btn btn-small bg-red",
                                                                        onClick:
                                                                          toPdf,
                                                                        children:
                                                                          "PDF",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 549,
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
                                                                  lineNumber: 544,
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
                                                            lineNumber: 528,
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
                                                      lineNumber: 526,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 525,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                "div",
                                                {
                                                  className:
                                                    "float-right col-md-2 m-b-10",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                      "p",
                                                      {
                                                        className: "text-right",
                                                        children: username
                                                          ? /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                              "a",
                                                              {
                                                                href: "/admin/add-user",
                                                                className:
                                                                  "btn btn-diamond",
                                                                children:
                                                                  "Add Account",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 630,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            )
                                                          : /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                              "a",
                                                              {
                                                                href: "/admin/add-user",
                                                                className:
                                                                  "btn btn-diamond",
                                                                children:
                                                                  "Add Account",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 634,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 628,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "text",
                                                        placeholder:
                                                          "Search client",
                                                        className:
                                                          "mx-input mt-2",
                                                        onChange: (e) =>
                                                          debouncedChangeHandler(
                                                            e.target.value
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 639,
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
                                                  lineNumber: 627,
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
                                            lineNumber: 524,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 523,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                      "ul",
                                      {
                                        className: "nav nav-tabs",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                            "li",
                                            {
                                              className: "nav-item",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                "a",
                                                {
                                                  className: `nav-link ${
                                                    activeDeactive
                                                      ? "active"
                                                      : ""
                                                  }`,
                                                  "aria-current": "page",
                                                  href: "#",
                                                  onClick: (e) =>
                                                    typesOfClients(e, "true"),
                                                  children: "Active",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 650,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 649,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                            "li",
                                            {
                                              className: "nav-item",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                "a",
                                                {
                                                  className: `nav-link ${
                                                    !activeDeactive
                                                      ? "active"
                                                      : ""
                                                  }`,
                                                  href: "#",
                                                  onClick: (e) =>
                                                    typesOfClients(e, "false"),
                                                  children: "Deactive",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 660,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 659,
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
                                        lineNumber: 648,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
renderBreadcrumb(),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                      "div",
                                      {
                                        className:
                                          "table-responsive data-table",
                                        ref: ref,
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                          "table",
                                          {
                                            id: "clientListTable",
                                            className:
                                              "table table-striped  table-bordered ",
                                            style: {
                                              width: "100%",
                                            },
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                "thead",
                                                {
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    "tr",
                                                    {
                                                      children: k7Cols([
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            children:
                                                              "User Name",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 684,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            children:
                                                              "Credit Referance",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 685,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            children: "Balance",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 686,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            children:
                                                              "Current P/L",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 687,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            children:
                                                              "Exposure",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 688,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            children:
                                                              "Available Balance",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 689,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            className:
                                                              "noExport",
                                                            children: "U Lock",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 690,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            className:
                                                              "noExport",
                                                            children: "B Lock",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 691,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            children:
                                                              "Exposure Limit",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 692,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            children:
                                                              "Master Share",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 693,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            children:
                                                              "Type",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 694,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          "th",
                                                          {
                                                            className:
                                                              "noExport",
                                                            children: "Actions",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 695,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                      ], (0, react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("th", { children: "Pending Balance" }, void 0, false, { fileName: _jsxFileName, lineNumber: 0, columnNumber: 0 }, undefined)),
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 676,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 675,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                "tbody",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                      "tr",
                                                      {
                                                        children: k7Cols([
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {
                                                              children: "Total",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 701,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {
                                                              children:
                                                                usersTotal.totalcr.toFixed(
                                                                  2
                                                                ),
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 702,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {
                                                              children:
                                                                usersTotal.totalbalance.toFixed(
                                                                  2
                                                                ),
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 703,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {
                                                              children:
                                                                usersTotal.clientpl.toFixed(
                                                                  2
                                                                ),
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 704,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {
                                                              children:
                                                                usersTotal.totalExposer.toFixed(
                                                                  2
                                                                ),
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 705,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {
                                                              children:
                                                                usersTotal.avl.toFixed(
                                                                  2
                                                                ),
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 706,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {
                                                              className:
                                                                "noExport",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 707,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {
                                                              className:
                                                                "noExport",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 708,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {},
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 709,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {},
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 710,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {},
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 711,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                            "th",
                                                            {
                                                              className:
                                                                "noExport",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 712,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                        ], (0, react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("th", { children: "" }, void 0, false, { fileName: _jsxFileName, lineNumber: 0, columnNumber: 0 }, undefined)),
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 699,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    users === null ||
                                                    users === void 0
                                                      ? void 0
                                                      : (_users$items =
                                                          users.items) ===
                                                          null ||
                                                        _users$items === void 0
                                                      ? void 0
                                                      : _users$items.map(
                                                          (user, index) => {
                                                            var _user$balance,
                                                              _user$balance2,
                                                              _user$balance3,
                                                              _user$balance4,
                                                              _user$balance5,
                                                              _user$balance5$profit,
                                                              _user$balance6,
                                                              _user$balance7,
                                                              _user$balance8;
                                                            if (
                                                              activeDeactive !==
                                                                user.isLogin &&
                                                              user.role !==
                                                                _models_User__WEBPACK_IMPORTED_MODULE_2__
                                                                  .RoleType
                                                                  .admin
                                                            )
                                                              return null;
                                                            return /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                              "tr",
                                                              {
                                                                children: k7Cols([
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        [
                                                                          renderRoleBadge(user.role),
                                                                          user.role !==
                                                                            _models_User__WEBPACK_IMPORTED_MODULE_2__
                                                                              .RoleType
                                                                              .user &&
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                              _pages_layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_10__.CustomLink,
                                                                              {
                                                                                to: `/list-clients/${user.username}`,
                                                                                title: `Open ${user.username}'s downline`,
                                                                                style: { color: "#0d6efd", textDecoration: "underline", fontWeight: 600, cursor: "pointer" },
                                                                                children:
                                                                                  user.username,
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 728,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                          user.role ===
                                                                            _models_User__WEBPACK_IMPORTED_MODULE_2__
                                                                              .RoleType
                                                                              .user &&
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                              "a",
                                                                              {
                                                                                className:
                                                                                  "bg-success",
                                                                                children:
                                                                                  user.username,
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 733,
                                                                                columnNumber: 31,
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
                                                                      lineNumber: 726,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        user !==
                                                                          null &&
                                                                        user !==
                                                                          void 0 &&
                                                                        user.creditRefrences
                                                                          ? user.creditRefrences
                                                                          : 0,
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 736,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        mainBalance(
                                                                          user
                                                                        ),
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 737,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      style: {
                                                                        color:
                                                                          user !==
                                                                            null &&
                                                                          user !==
                                                                            void 0 &&
                                                                          (_user$balance =
                                                                            user.balance) !==
                                                                            null &&
                                                                          _user$balance !==
                                                                            void 0 &&
                                                                          _user$balance.profitLoss &&
                                                                          (user ===
                                                                            null ||
                                                                          user ===
                                                                            void 0
                                                                            ? void 0
                                                                            : (_user$balance2 =
                                                                                user.balance) ===
                                                                                null ||
                                                                              _user$balance2 ===
                                                                                void 0
                                                                            ? void 0
                                                                            : _user$balance2.profitLoss) >
                                                                            0
                                                                            ? "red" // ✅ Positive P/L in red (admin owes client)
                                                                            : user !==
                                                                                null &&
                                                                              user !==
                                                                                void 0 &&
                                                                              (_user$balance3 =
                                                                                user.balance) !==
                                                                                null &&
                                                                              _user$balance3 !==
                                                                                void 0 &&
                                                                              _user$balance3.profitLoss &&
                                                                              (user ===
                                                                                null ||
                                                                              user ===
                                                                                void 0
                                                                                ? void 0
                                                                                : (_user$balance4 =
                                                                                    user.balance) ===
                                                                                    null ||
                                                                                  _user$balance4 ===
                                                                                    void 0
                                                                                ? void 0
                                                                                : _user$balance4.profitLoss) <
                                                                                0
                                                                            ? "green" // ✅ Negative P/L in green (client owes admin)
                                                                            : "black",
                                                                        // Zero or undefined
                                                                        fontWeight:
                                                                          "bold",
                                                                      },
                                                                      children:
                                                                        (user ===
                                                                          null ||
                                                                        user ===
                                                                          void 0
                                                                          ? void 0
                                                                          : (_user$balance5 =
                                                                              user.balance) ===
                                                                              null ||
                                                                            _user$balance5 ===
                                                                              void 0
                                                                          ? void 0
                                                                          : (_user$balance5$profit =
                                                                              _user$balance5.profitLoss) ===
                                                                              null ||
                                                                            _user$balance5$profit ===
                                                                              void 0
                                                                          ? void 0
                                                                          : _user$balance5$profit.toFixed(
                                                                              2
                                                                            )) ||
                                                                        0,
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 738,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        finalExposer(
                                                                          user ===
                                                                            null ||
                                                                            user ===
                                                                              void 0
                                                                            ? void 0
                                                                            : user.balance
                                                                        ),
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 750,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        (
                                                                          (((_user$balance6 =
                                                                            user.balance) ===
                                                                            null ||
                                                                          _user$balance6 ===
                                                                            void 0
                                                                            ? void 0
                                                                            : _user$balance6.balance) ||
                                                                            0) -
                                                                          (((_user$balance7 =
                                                                            user.balance) ===
                                                                            null ||
                                                                          _user$balance7 ===
                                                                            void 0
                                                                            ? void 0
                                                                            : _user$balance7.exposer) ||
                                                                            0) -
                                                                          (((_user$balance8 =
                                                                            user.balance) ===
                                                                            null ||
                                                                          _user$balance8 ===
                                                                            void 0
                                                                            ? void 0
                                                                            : _user$balance8.casinoexposer) ||
                                                                            0)
                                                                        ).toFixed(
                                                                          2
                                                                        ),
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 751,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        user.role !==
                                                                          _models_User__WEBPACK_IMPORTED_MODULE_2__
                                                                            .RoleType
                                                                            .admin &&
                                                                        /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                          "input",
                                                                          {
                                                                            className:
                                                                              "form-control",
                                                                            type: "checkbox",
                                                                            name: "U Lock",
                                                                            checked:
                                                                              user ===
                                                                                null ||
                                                                              user ===
                                                                                void 0
                                                                                ? void 0
                                                                                : user.isLogin,
                                                                            onChange:
                                                                              () =>
                                                                                updateStatus(
                                                                                  index,
                                                                                  !(
                                                                                    user !==
                                                                                      null &&
                                                                                    user !==
                                                                                      void 0 &&
                                                                                    user.isLogin
                                                                                  ),
                                                                                  "user"
                                                                                ),
                                                                          },
                                                                          void 0,
                                                                          false,
                                                                          {
                                                                            fileName:
                                                                              _jsxFileName,
                                                                            lineNumber: 760,
                                                                            columnNumber: 31,
                                                                          },
                                                                          undefined
                                                                        ),
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 758,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        user.role !==
                                                                          _models_User__WEBPACK_IMPORTED_MODULE_2__
                                                                            .RoleType
                                                                            .admin &&
                                                                        /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                          "input",
                                                                          {
                                                                            className:
                                                                              "form-control",
                                                                            type: "checkbox",
                                                                            name: "B Lock",
                                                                            checked:
                                                                              user ===
                                                                                null ||
                                                                              user ===
                                                                                void 0
                                                                                ? void 0
                                                                                : user.betLock,
                                                                            onChange:
                                                                              () =>
                                                                                updateStatus(
                                                                                  index,
                                                                                  !(
                                                                                    user !==
                                                                                      null &&
                                                                                    user !==
                                                                                      void 0 &&
                                                                                    user.betLock
                                                                                  ),
                                                                                  "bet"
                                                                                ),
                                                                          },
                                                                          void 0,
                                                                          false,
                                                                          {
                                                                            fileName:
                                                                              _jsxFileName,
                                                                            lineNumber: 771,
                                                                            columnNumber: 31,
                                                                          },
                                                                          undefined
                                                                        ),
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 769,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        user.exposerLimit
                                                                          ? user.exposerLimit
                                                                          : 0,
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 780,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
children: renderShareholdersCell(user),
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 781,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        _models_User__WEBPACK_IMPORTED_MODULE_2__
                                                                          .RoleName[
                                                                          user
                                                                            .role
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 782,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                    "td",
                                                                    {
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                            "a",
                                                                            {
                                                                              onClick:
                                                                                () => {
                                                                                  openModal(
                                                                                    "d"
                                                                                  );
                                                                                  getUserDetail(
                                                                                    user
                                                                                  );
                                                                                },
                                                                              children:
                                                                                "D",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 784,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                            "a",
                                                                            {
                                                                              onClick:
                                                                                () => {
                                                                                  openModal(
                                                                                    "w"
                                                                                  );
                                                                                  getUserDetail(
                                                                                    user
                                                                                  );
                                                                                },
                                                                              children:
                                                                                "W",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 792,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          true &&
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                              "a",
                                                                              {
                                                                                onClick:
                                                                                  () => {
                                                                                    openModal(
                                                                                      "e"
                                                                                    );
                                                                                    getUserDetail(
                                                                                      user
                                                                                    );
                                                                                    setModalType(
                                                                                      "EXP"
                                                                                    );
                                                                                  },
                                                                                children:
                                                                                  "L",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 802,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                          true &&
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                              "a",
                                                                              {
                                                                                onClick:
                                                                                  () => {
                                                                                    openModal(
                                                                                      "e"
                                                                                    );
                                                                                    getUserDetail(
                                                                                      user
                                                                                    );
                                                                                    setModalType(
                                                                                      "CRD"
                                                                                    );
                                                                                  },
                                                                                children:
                                                                                  "C",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 813,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                          true &&
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                              "a",
                                                                              {
                                                                                onClick:
                                                                                  () => {
                                                                                    openModal(
                                                                                      "p"
                                                                                    );
                                                                                    getUserDetail(
                                                                                      user
                                                                                    );
                                                                                  },
                                                                                children:
                                                                                  "P",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 824,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                          true &&
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                              "a",
                                                                              {
                                                                                onClick:
                                                                                  () => {
                                                                                    openModal(
                                                                                      "s"
                                                                                    );
                                                                                    getUserDetail(
                                                                                      user
                                                                                    );
                                                                                  },
                                                                                children:
                                                                                  "S",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 834,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                          isAdmin(
                                                                            user
                                                                          ) &&
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                              "a",
                                                                              {
                                                                                onClick:
                                                                                  () => {
                                                                                    openModal(
                                                                                      "gs"
                                                                                    );
                                                                                    getUserDetail(
                                                                                      user
                                                                                    );
                                                                                  },
                                                                                children:
                                                                                  "GS",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 844,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                          isAdmin(
                                                                            user
                                                                          ) &&
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                              "a",
                                                                              {
                                                                                onClick:
                                                                                  () => {
                                                                                    resetTxnPassword(
                                                                                      user
                                                                                    );
                                                                                  },
                                                                                children:
                                                                                  "T",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 854,
                                                                                columnNumber: 31,
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
                                                                      lineNumber: 783,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                ], (0, react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("td", { children: Math.max(0, (Number(user && user.creditRefrences) || 0) - (Number(user && user.balance && user.balance.balance) || 0)).toFixed(2) }, void 0, false, { fileName: _jsxFileName, lineNumber: 0, columnNumber: 0 }, undefined)),
                                                              },
                                                              user._id,
                                                              true,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 718,
                                                                columnNumber: 25,
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
                                                  fileName: _jsxFileName,
                                                  lineNumber: 698,
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
                                            lineNumber: 670,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 669,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                      react_paginate__WEBPACK_IMPORTED_MODULE_23___default(),
                                      {
                                        breakLabel: "...",
                                        nextLabel: ">>",
                                        forcePage: page - 1,
                                        onPageChange: handlePageClick,
                                        pageRangeDisplayed: 5,
                                        pageCount:
                                          (users === null || users === void 0
                                            ? void 0
                                            : users.totalPages) || 0,
                                        containerClassName: "pagination",
                                        activeClassName: "active",
                                        previousLabel: "<<",
                                        breakClassName: "break-me",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 869,
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
                                  lineNumber: 522,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                _modals_DepositModal__WEBPACK_IMPORTED_MODULE_5__[
                                  "default"
                                ],
                                {
                                  showDialog: showDialog.d,
                                  closeModal: (status, balance) => {
                                    closeModal(status);
                                    updateListUser({
                                      ...depositUser,
                                    });
                                  },
                                  depositUser: depositUser,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 883,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                _modals_StatusModal__WEBPACK_IMPORTED_MODULE_6__[
                                  "default"
                                ],
                                {
                                  showDialog: showDialog.s,
                                  closeModal: () => {
                                    closeModal("s");
                                    updateListUser({
                                      ...depositUser,
                                    });
                                  },
                                  userDetails: depositUser,
                                  refreshClientList: refreshClientList,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 891,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                _modals_WithdrawModal__WEBPACK_IMPORTED_MODULE_7__[
                                  "default"
                                ],
                                {
                                  showDialog: showDialog.w,
                                  closeModal: (status, balance) => {
                                    closeModal(status);
                                    updateListUser({
                                      ...depositUser,
                                    });
                                  },
                                  userDetails: depositUser,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 900,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                _modals_PasswordModal__WEBPACK_IMPORTED_MODULE_8__[
                                  "default"
                                ],
                                {
                                  showDialog: showDialog.p,
                                  closeModal: () => {
                                    closeModal("p");
                                    updateListUser({
                                      ...depositUser,
                                    });
                                  },
                                  userDetails: depositUser,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 908,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                _modals_ExposureCreditModal__WEBPACK_IMPORTED_MODULE_9__[
                                  "default"
                                ],
                                {
                                  showDialog: showDialog.e,
                                  closeModal: () => {
                                    closeModal("e");
                                    updateListUser({
                                      ...depositUser,
                                    });
                                  },
                                  userDetails: depositUser,
                                  modalType: modalType,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 916,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                _modals_GeneralSettingsModal__WEBPACK_IMPORTED_MODULE_17__[
                                  "default"
                                ],
                                {
                                  showDialog: showDialog.gs,
                                  closeModal: (status, balance) => {
                                    closeModal(status);
                                    updateListUser({
                                      ...depositUser,
                                      balance,
                                    });
                                  },
                                  depositUser: depositUser,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 925,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                react_bootstrap__WEBPACK_IMPORTED_MODULE_28__[
                                  "default"
                                ],
                                {
                                  show: show,
                                  onHide: handleClose,
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                      react_bootstrap__WEBPACK_IMPORTED_MODULE_28__[
                                        "default"
                                      ].Header,
                                      {
                                        closeButton: true,
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                          react_bootstrap__WEBPACK_IMPORTED_MODULE_28__[
                                            "default"
                                          ].Title,
                                          {
                                            children:
                                              "Reset User Transaction Password",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 934,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 933,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                      react_bootstrap__WEBPACK_IMPORTED_MODULE_28__[
                                        "default"
                                      ].Body,
                                      {
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                          react_bootstrap__WEBPACK_IMPORTED_MODULE_29__[
                                            "default"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                              "form",
                                              {
                                                onSubmit:
                                                  resetTxnPasswordSubmit,
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    react_bootstrap__WEBPACK_IMPORTED_MODULE_30__[
                                                      "default"
                                                    ],
                                                    {
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          react_bootstrap__WEBPACK_IMPORTED_MODULE_31__[
                                                            "default"
                                                          ].Group,
                                                          {
                                                            className:
                                                              "form-group col-md-12",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                react_bootstrap__WEBPACK_IMPORTED_MODULE_31__[
                                                                  "default"
                                                                ].Control,
                                                                {
                                                                  onChange: (
                                                                    e
                                                                  ) =>
                                                                    setTxnPassword(
                                                                      e.target
                                                                        .value
                                                                    ),
                                                                  type: "text",
                                                                  placeholder:
                                                                    "Type Your Transaction Password",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 941,
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
                                                            lineNumber: 940,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 939,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                    react_bootstrap__WEBPACK_IMPORTED_MODULE_28__[
                                                      "default"
                                                    ].Footer,
                                                    {
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                          _components_SubmitButton__WEBPACK_IMPORTED_MODULE_20__[
                                                            "default"
                                                          ],
                                                          {
                                                            type: "submit",
                                                            className:
                                                              "btn btn-submit",
                                                            disabled: loading,
                                                            children: [
                                                              "Submit",
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(
                                                                "i",
                                                                {
                                                                  className:
                                                                    "fas fa-sign-in-alt",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 954,
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
                                                            lineNumber: 952,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 951,
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
                                                lineNumber: 938,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 937,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 936,
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
                                  lineNumber: 932,
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
                            lineNumber: 521,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 520,
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
                  lineNumber: 436,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(ListClients, "TuK9itgWd4V8orYV/gpYA9Rq6eA=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_15__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_15__.useAppSelector,
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_11__.useWebsocketUser,
            react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useParams,
            react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useSearchParams,
          ];
        });
        _c = ListClients;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ListClients;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "ListClients");

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

    /***/ "./src/admin-app/pages/list-clients/modals/DepositModal.tsx":
      /*!******************************************************************!*\
  !*** ./src/admin-app/pages/list-clients/modals/DepositModal.tsx ***!
  \******************************************************************/
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
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
        /* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.mjs"
          );
        /* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
          );
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/list-clients/modals/DepositModal.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const DepositModal = (props) => {
          _s();
          var _props$depositUser,
            _props$depositUser2,
            _props$depositUser2$p,
            _props$depositUser3,
            _props$depositUser3$p,
            _props$depositUser8,
            _props$depositUser8$p,
            _props$depositUser9,
            _props$depositUser9$p,
            _props$depositUser0,
            _props$depositUser0$p,
            _props$depositUser0$p2,
            _props$depositUser1,
            _props$depositUser1$p,
            _ref,
            _props$depositUser10,
            _props$depositUser10$,
            _props$depositUser11,
            _props$depositUser12,
            _props$depositUser12$,
            _props$depositUser13,
            _props$depositUser13$,
            _props$depositUser13$2,
            _props$depositUser14,
            _props$depositUser14$,
            _ref2,
            _props$depositUser15,
            _props$depositUser15$;
          const depositValidationSchema = yup__WEBPACK_IMPORTED_MODULE_2__
            .object()
            .shape({
              narration: yup__WEBPACK_IMPORTED_MODULE_2__
                .string()
                .required("Remark is required"),
              transactionPassword: yup__WEBPACK_IMPORTED_MODULE_2__
                .string()
                .required("Transaction Password is required"),
              amount:
                ((_props$depositUser = props.depositUser) === null ||
                _props$depositUser === void 0
                  ? void 0
                  : _props$depositUser.role) === "admin"
                  ? yup__WEBPACK_IMPORTED_MODULE_2__
                      .number()
                      .required("Amount is required")
                      .transform((value) => (isNaN(value) ? 0 : +value))
                      .min(1, "Amount is required")
                  : yup__WEBPACK_IMPORTED_MODULE_2__
                      .number()
                      .required("Amount is required")
                      .transform((value) => (isNaN(value) ? 0 : +value))
                      .min(1, "Amount is required")
                      .max(
                        (_props$depositUser2 = props.depositUser) === null ||
                          _props$depositUser2 === void 0
                          ? void 0
                          : (_props$depositUser2$p =
                              _props$depositUser2.parentBalance) === null ||
                            _props$depositUser2$p === void 0
                          ? void 0
                          : (_props$depositUser2$p.unlimited ? Number.MAX_SAFE_INTEGER : _props$depositUser2$p.balance),
                        `Max ${
                          (_props$depositUser3 = props.depositUser) === null ||
                          _props$depositUser3 === void 0
                            ? void 0
                            : (_props$depositUser3$p =
                                _props$depositUser3.parentBalance) === null ||
                              _props$depositUser3$p === void 0
                            ? void 0
                            : _props$depositUser3$p.balance
                        } limit`
                      ),
            });
          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
            getValues,
            watch,
          } = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
            resolver: (0,
            _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(
              depositValidationSchema
            ),
          });
          const onSubmit = handleSubmit((data) => {
            var _props$depositUser4,
              _props$depositUser5,
              _props$depositUser6,
              _props$depositUser7;
            const formData = {
              ...data,
              userId:
                (_props$depositUser4 = props.depositUser) === null ||
                _props$depositUser4 === void 0
                  ? void 0
                  : _props$depositUser4._id,
              parentUserId:
                ((_props$depositUser5 = props.depositUser) === null ||
                _props$depositUser5 === void 0
                  ? void 0
                  : _props$depositUser5.role) === "admin"
                  ? (_props$depositUser6 = props.depositUser) === null ||
                    _props$depositUser6 === void 0
                    ? void 0
                    : _props$depositUser6._id
                  : (_props$depositUser7 = props.depositUser) === null ||
                    _props$depositUser7 === void 0
                  ? void 0
                  : _props$depositUser7.parentId,
              balanceUpdateType: "D",
            };
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["default"]
              .updateDepositBalance(formData)
              .then((res) => {
                var _res$data, _res$data2, _res$data2$message;
                // Check if it's a transaction password error (now comes as success=false)
                if (
                  (res === null || res === void 0
                    ? void 0
                    : (_res$data = res.data) === null || _res$data === void 0
                    ? void 0
                    : _res$data.success) === false &&
                  res !== null &&
                  res !== void 0 &&
                  (_res$data2 = res.data) !== null &&
                  _res$data2 !== void 0 &&
                  (_res$data2$message = _res$data2.message) !== null &&
                  _res$data2$message !== void 0 &&
                  _res$data2$message
                    .toLowerCase()
                    .includes("transaction password")
                ) {
                  // API interceptor already showed the toast, just keep user on page
                  console.log("Transaction password error in deposit modal");
                  return; // Don't close modal or show success message
                }
                props.closeModal("d", res.data.data);
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(
                  "Deposit Balance Updated Successfully"
                );
                reset();
              })
              .catch((e) => {
                var _e$response, _e$response$data;
                // Handle any other errors that weren't caught by the interceptor
                const error =
                  ((_e$response = e.response) === null || _e$response === void 0
                    ? void 0
                    : (_e$response$data = _e$response.data) === null ||
                      _e$response$data === void 0
                    ? void 0
                    : _e$response$data.message) || "An error occurred";
                if (!error.toLowerCase().includes("transaction password")) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(
                    error
                  );
                }
              });
          });
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                react_modal__WEBPACK_IMPORTED_MODULE_1___default(),
                {
                  isOpen: props.showDialog,
                  onRequestClose: () => {
                    props.closeModal("d");
                    reset();
                  },
                  contentLabel: "Deposit",
                  className: "modal-dialog",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                          "div",
                          {
                            className: "modal-header",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "h4",
                                {
                                  className: "modal-title",
                                  children: "Deposit",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 88,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "button",
                                {
                                  type: "button",
                                  className: "close",
                                  "data-dismiss": "modal",
                                  onClick: () => {
                                    props.closeModal("d");
                                    reset();
                                  },
                                  children: "\xD7",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 89,
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
                            lineNumber: 87,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                          "form",
                          {
                            id: "DepositForm",
                            method: "post",
                            autoComplete: "off",
                            onSubmit: onSubmit,
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-body",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    "div",
                                    {
                                      className: "container-fluid",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      className:
                                                        "deposite-user-first",
                                                      children:
                                                        (_props$depositUser8 =
                                                          props.depositUser) ===
                                                          null ||
                                                        _props$depositUser8 ===
                                                          void 0
                                                          ? void 0
                                                          : (_props$depositUser8$p =
                                                              _props$depositUser8.parent) ===
                                                              null ||
                                                            _props$depositUser8$p ===
                                                              void 0
                                                          ? void 0
                                                          : _props$depositUser8$p.username,
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 106,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 105,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "span",
                                                      {
                                                        className: "popup-box",
                                                        id: "deposite-first",
                                                        children:
                                                          (_props$depositUser9 =
                                                            props.depositUser) !==
                                                            null &&
                                                          _props$depositUser9 !==
                                                            void 0 &&
                                                          (_props$depositUser9$p =
                                                            _props$depositUser9.parentBalance) !==
                                                            null &&
                                                          _props$depositUser9$p !==
                                                            void 0 &&
                                                          _props$depositUser9$p.balance
                                                            ? (_props$depositUser0 =
                                                                props.depositUser) ===
                                                                null ||
                                                              _props$depositUser0 ===
                                                                void 0
                                                              ? void 0
                                                              : (_props$depositUser0$p =
                                                                  _props$depositUser0.parentBalance) ===
                                                                  null ||
                                                                _props$depositUser0$p ===
                                                                  void 0
                                                              ? void 0
                                                              : (_props$depositUser0$p2 =
                                                                  _props$depositUser0$p.balance) ===
                                                                  null ||
                                                                _props$depositUser0$p2 ===
                                                                  void 0
                                                              ? void 0
                                                              : _props$depositUser0$p2.toFixed(
                                                                  2
                                                                )
                                                            : 0,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 111,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "span",
                                                      {
                                                        className: "popup-box",
                                                        id: "deposite-first-diff",
                                                        children:
                                                          (_props$depositUser1 =
                                                            props.depositUser) !==
                                                            null &&
                                                          _props$depositUser1 !==
                                                            void 0 &&
                                                          (_props$depositUser1$p =
                                                            _props$depositUser1.parentBalance) !==
                                                            null &&
                                                          _props$depositUser1$p !==
                                                            void 0 &&
                                                          _props$depositUser1$p.balance &&
                                                          watch("amount")
                                                            ? (_ref =
                                                                ((_props$depositUser10 =
                                                                  props.depositUser) ===
                                                                  null ||
                                                                _props$depositUser10 ===
                                                                  void 0
                                                                  ? void 0
                                                                  : (_props$depositUser10$ =
                                                                      _props$depositUser10.parentBalance) ===
                                                                      null ||
                                                                    _props$depositUser10$ ===
                                                                      void 0
                                                                  ? void 0
                                                                  : _props$depositUser10$.balance) -
                                                                +watch(
                                                                  "amount"
                                                                )) === null ||
                                                              _ref === void 0
                                                              ? void 0
                                                              : _ref.toFixed(2)
                                                            : 0,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 116,
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
                                                  lineNumber: 110,
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
                                            lineNumber: 104,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      className:
                                                        "deposite-user-second",
                                                      children:
                                                        (_props$depositUser11 =
                                                          props.depositUser) ===
                                                          null ||
                                                        _props$depositUser11 ===
                                                          void 0
                                                          ? void 0
                                                          : _props$depositUser11.username,
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 125,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 124,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "span",
                                                      {
                                                        className: "popup-box",
                                                        id: "deposite-second",
                                                        children:
                                                          (_props$depositUser12 =
                                                            props.depositUser) !==
                                                            null &&
                                                          _props$depositUser12 !==
                                                            void 0 &&
                                                          (_props$depositUser12$ =
                                                            _props$depositUser12.balance) !==
                                                            null &&
                                                          _props$depositUser12$ !==
                                                            void 0 &&
                                                          _props$depositUser12$.balance
                                                            ? (_props$depositUser13 =
                                                                props.depositUser) ===
                                                                null ||
                                                              _props$depositUser13 ===
                                                                void 0
                                                              ? void 0
                                                              : (_props$depositUser13$ =
                                                                  _props$depositUser13.balance) ===
                                                                  null ||
                                                                _props$depositUser13$ ===
                                                                  void 0
                                                              ? void 0
                                                              : (_props$depositUser13$2 =
                                                                  _props$depositUser13$.balance) ===
                                                                  null ||
                                                                _props$depositUser13$2 ===
                                                                  void 0
                                                              ? void 0
                                                              : _props$depositUser13$2.toFixed(
                                                                  2
                                                                )
                                                            : 0,
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
                                                      "span",
                                                      {
                                                        className: "popup-box",
                                                        id: "deposite-second-diff",
                                                        children:
                                                          (_props$depositUser14 =
                                                            props.depositUser) !==
                                                            null &&
                                                          _props$depositUser14 !==
                                                            void 0 &&
                                                          (_props$depositUser14$ =
                                                            _props$depositUser14.balance) !==
                                                            null &&
                                                          _props$depositUser14$ !==
                                                            void 0 &&
                                                          _props$depositUser14$.balance &&
                                                          watch("amount")
                                                            ? (_ref2 =
                                                                ((_props$depositUser15 =
                                                                  props.depositUser) ===
                                                                  null ||
                                                                _props$depositUser15 ===
                                                                  void 0
                                                                  ? void 0
                                                                  : (_props$depositUser15$ =
                                                                      _props$depositUser15.balance) ===
                                                                      null ||
                                                                    _props$depositUser15$ ===
                                                                      void 0
                                                                  ? void 0
                                                                  : _props$depositUser15$.balance) +
                                                                +watch(
                                                                  "amount"
                                                                )) === null ||
                                                              _ref2 === void 0
                                                              ? void 0
                                                              : _ref2.toFixed(2)
                                                            : 0,
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
                                                  lineNumber: 127,
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
                                            lineNumber: 123,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children: "Amount",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 142,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 141,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "number",
                                                        className:
                                                          "text-right maxlength10",
                                                        id: "deposite-amount",
                                                        ...register("amount"),
                                                        min: 0,
                                                        step: "0.01",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 145,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.amount) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                        "span",
                                                        {
                                                          className: "error",
                                                          children:
                                                            errors.amount
                                                              .message,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 153,
                                                          columnNumber: 40,
                                                        },
                                                        undefined
                                                      ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 144,
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
                                            lineNumber: 140,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children: "Remark",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 158,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 157,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "textarea",
                                                      {
                                                        id: "deposit-remark",
                                                        defaultValue: "",
                                                        ...register(
                                                          "narration"
                                                        ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 161,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.narration) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                        "span",
                                                        {
                                                          className: "error",
                                                          children:
                                                            errors.narration
                                                              .message,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 162,
                                                          columnNumber: 43,
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
                                            lineNumber: 156,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children:
                                                        "Transaction Password",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 167,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 166,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "Password",
                                                        id: "mpassword",
                                                        ...register(
                                                          "transactionPassword"
                                                        ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 170,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.transactionPassword) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                        "span",
                                                        {
                                                          className: "error",
                                                          children:
                                                            errors
                                                              .transactionPassword
                                                              .message,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 172,
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
                                                  lineNumber: 169,
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
                                            lineNumber: 165,
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
                                      lineNumber: 103,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 102,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-footer",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      "input",
                                      {
                                        type: "hidden",
                                        name: "uid",
                                        id: "uid",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 179,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      "button",
                                      {
                                        type: "button",
                                        className: "btn btn-back",
                                        "data-dismiss": "modal",
                                        onClick: () => {
                                          props.closeModal("d");
                                          reset();
                                        },
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-undo",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 189,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          "Back",
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 180,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      _components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__[
                                        "default"
                                      ],
                                      {
                                        type: "submit",
                                        className: "btn btn-submit",
                                        children: [
                                          "Submit",
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-sign-in-alt",
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
                                  lineNumber: 178,
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
                            lineNumber: 101,
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
                      lineNumber: 86,
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
            false
          );
        };
        _s(DepositModal, "FEceT9fZ2IqW1gtH2LJ+ut6+p4k=", false, function () {
          return [react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm];
        });
        _c = DepositModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DepositModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "DepositModal");

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

    /***/ "./src/admin-app/pages/list-clients/modals/ExposureCreditModal.tsx":
      /*!*************************************************************************!*\
  !*** ./src/admin-app/pages/list-clients/modals/ExposureCreditModal.tsx ***!
  \*************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.mjs"
          );
        /* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../../services/user.service */ "./src/services/user.service.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/list-clients/modals/ExposureCreditModal.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const ExposureCreditModal = ({
          userDetails,
          showDialog,
          closeModal,
          modalType,
        }) => {
          _s();
          const exposureValidationSchema = yup__WEBPACK_IMPORTED_MODULE_3__
            .object()
            .shape({
              amount: yup__WEBPACK_IMPORTED_MODULE_3__
                .number()
                .required(
                  `New ${modalType === "EXP" ? "limit" : "credit"} is required`
                )
                .transform((value) => (isNaN(value) ? 0 : +value))
                .min(
                  0,
                  `New ${modalType === "EXP" ? "limit" : "credit"} is required`
                ),
              transactionPassword: yup__WEBPACK_IMPORTED_MODULE_3__
                .string()
                .required("Transaction Password is required"),
            });
          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({
            resolver: (0,
            _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__.yupResolver)(
              exposureValidationSchema
            ),
          });
          const onSubmit = handleSubmit((data) => {
            const formData = {
              ...data,
              username:
                userDetails === null || userDetails === void 0
                  ? void 0
                  : userDetails.username,
              walletUpdateType: modalType,
            };
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["default"]
              .updateUserExposureAndCreditLimit(formData)
              .then((res) => {
                var _res$data, _res$data2, _res$data2$message;
                // Check if it's a transaction password error (now comes as success=false)
                if (
                  (res === null || res === void 0
                    ? void 0
                    : (_res$data = res.data) === null || _res$data === void 0
                    ? void 0
                    : _res$data.success) === false &&
                  res !== null &&
                  res !== void 0 &&
                  (_res$data2 = res.data) !== null &&
                  _res$data2 !== void 0 &&
                  (_res$data2$message = _res$data2.message) !== null &&
                  _res$data2$message !== void 0 &&
                  _res$data2$message
                    .toLowerCase()
                    .includes("transaction password")
                ) {
                  // API interceptor already showed the toast, just keep user on page
                  console.log(
                    "Transaction password error in exposure/credit modal"
                  );
                  return; // Don't close modal or show success message
                }
                closeModal("e");
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(
                  `${
                    modalType === "EXP" ? "Limit" : "Credit Referance"
                  } Updated Successfully`
                );
                reset();
              })
              .catch((e) => {
                var _e$response, _e$response$data;
                // Handle any other errors that weren't caught by the interceptor
                const error =
                  ((_e$response = e.response) === null || _e$response === void 0
                    ? void 0
                    : (_e$response$data = _e$response.data) === null ||
                      _e$response$data === void 0
                    ? void 0
                    : _e$response$data.message) || "An error occurred";
                if (!error.toLowerCase().includes("transaction password")) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(
                    error
                  );
                }
              });
          });
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                react_modal__WEBPACK_IMPORTED_MODULE_1___default(),
                {
                  isOpen: showDialog,
                  onRequestClose: () => {
                    closeModal("e");
                    reset();
                  },
                  contentLabel: "Exposure",
                  className: "modal-dialog",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                          "div",
                          {
                            className: "modal-header",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                "h4",
                                {
                                  className: "modal-title",
                                  children:
                                    modalType === "EXP"
                                      ? "Exposure Limit"
                                      : "Credit",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 84,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                "button",
                                {
                                  type: "button",
                                  className: "close",
                                  "data-dismiss": "modal",
                                  onClick: () => {
                                    closeModal("e");
                                    reset();
                                  },
                                  children: "\xD7",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 85,
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
                            lineNumber: 83,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                          "form",
                          {
                            id: "LimitForm",
                            method: "post",
                            autoComplete: "off",
                            onSubmit: onSubmit,
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-body",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                    "div",
                                    {
                                      className: "container-fluid",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children: [
                                                        "Old ",
                                                        modalType === "EXP"
                                                          ? "Limit"
                                                          : "Credit",
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
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
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "span",
                                                    {
                                                      className:
                                                        "popup-box popup-box-full",
                                                      id: "old-limit",
                                                      children:
                                                        modalType === "EXP"
                                                          ? userDetails ===
                                                              null ||
                                                            userDetails ===
                                                              void 0
                                                            ? void 0
                                                            : userDetails.exposerLimit
                                                          : userDetails ===
                                                              null ||
                                                            userDetails ===
                                                              void 0
                                                          ? void 0
                                                          : userDetails.creditRefrences,
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
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children: [
                                                        "New ",
                                                        modalType === "EXP"
                                                          ? "Limit"
                                                          : "Credit",
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 114,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 113,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "number",
                                                        className:
                                                          "text-right maxlength10",
                                                        id: "new-limit",
                                                        ...register("amount"),
                                                        min: 0,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 117,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.amount) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                        "span",
                                                        {
                                                          className: "error",
                                                          children:
                                                            errors.amount
                                                              .message,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 124,
                                                          columnNumber: 40,
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
                                            lineNumber: 112,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children:
                                                        "Transaction Password",
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
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 129,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "Password",
                                                        id: "mpassword",
                                                        ...register(
                                                          "transactionPassword"
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
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.transactionPassword) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                        "span",
                                                        {
                                                          className: "error",
                                                          children:
                                                            errors
                                                              .transactionPassword
                                                              .message,
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
                                                  lineNumber: 132,
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
                                            lineNumber: 128,
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
                                      lineNumber: 99,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 98,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-footer",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                      "input",
                                      {
                                        type: "hidden",
                                        name: "uid",
                                        id: "limit-uid",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 142,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                      "button",
                                      {
                                        type: "button",
                                        className: "btn btn-back",
                                        "data-dismiss": "modal",
                                        onClick: () => {
                                          closeModal("e");
                                          reset();
                                        },
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-undo",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 152,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          "Back",
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 143,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                      _components_SubmitButton__WEBPACK_IMPORTED_MODULE_4__[
                                        "default"
                                      ],
                                      {
                                        type: "submit",
                                        className: "btn btn-submit",
                                        children: [
                                          "Submit",
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-sign-in-alt",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 157,
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
                                        lineNumber: 155,
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
                                  lineNumber: 141,
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
                            lineNumber: 97,
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
                  lineNumber: 73,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(
          ExposureCreditModal,
          "s4ydKAPISlraMtU6SLcI0IdTqMk=",
          false,
          function () {
            return [react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm];
          }
        );
        _c = ExposureCreditModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ExposureCreditModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "ExposureCreditModal");

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

    /***/ "./src/admin-app/pages/list-clients/modals/GeneralSettingsModal.tsx":
      /*!**************************************************************************!*\
  !*** ./src/admin-app/pages/list-clients/modals/GeneralSettingsModal.tsx ***!
  \**************************************************************************/
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
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
        /* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.mjs"
          );
        /* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs"
          );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../../../models/User */ "./src/models/User.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/list-clients/modals/GeneralSettingsModal.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const GeneralSettingsModal = (props) => {
          _s();
          var _props$depositUser,
            _props$depositUser2,
            _props$depositUser3,
            _props$depositUser3$p,
            _sportListState$sport,
            _sportListState$sport2,
            _sportListState$sport3,
            _sportListState$sport4;
          const sportListState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_6__.selectSportList
          );
          const depositValidationSchema = yup__WEBPACK_IMPORTED_MODULE_2__
            .object()
            .shape({
              transactionPassword: yup__WEBPACK_IMPORTED_MODULE_2__
                .string()
                .required("Transaction Password is required"),
            });
          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
            setValue,
          } = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({
            defaultValues: {
              userId: "",
              userSetting:
                props !== null &&
                props !== void 0 &&
                (_props$depositUser = props.depositUser) !== null &&
                _props$depositUser !== void 0 &&
                _props$depositUser.userSetting
                  ? props === null || props === void 0
                    ? void 0
                    : (_props$depositUser2 = props.depositUser) === null ||
                      _props$depositUser2 === void 0
                    ? void 0
                    : _props$depositUser2.userSetting
                  : props === null || props === void 0
                  ? void 0
                  : (_props$depositUser3 = props.depositUser) === null ||
                    _props$depositUser3 === void 0
                  ? void 0
                  : (_props$depositUser3$p = _props$depositUser3.parent) ===
                      null || _props$depositUser3$p === void 0
                  ? void 0
                  : _props$depositUser3$p.userSetting,
              transactionPassword: "",
            },
            resolver: (0,
            _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(
              depositValidationSchema
            ),
          });
          console.log(
            props === null || props === void 0 ? void 0 : props.depositUser
          );
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            var _props$depositUser4, _props$depositUser5, _props$depositUser5$p;
            const userSettings =
              props === null || props === void 0
                ? void 0
                : (_props$depositUser4 = props.depositUser) === null ||
                  _props$depositUser4 === void 0
                ? void 0
                : _props$depositUser4.userSetting;
            const parentSettings =
              props === null || props === void 0
                ? void 0
                : (_props$depositUser5 = props.depositUser) === null ||
                  _props$depositUser5 === void 0
                ? void 0
                : (_props$depositUser5$p = _props$depositUser5.parent) ===
                    null || _props$depositUser5$p === void 0
                ? void 0
                : _props$depositUser5$p.userSetting;
            const settings = userSettings || parentSettings;
            if (settings && Object.keys(settings).length > 0) {
              setValue(
                "userId",
                props === null || props === void 0
                  ? void 0
                  : props.depositUser._id
              );
              const keys = Object.keys(settings);
              keys.map((key) => {
                setValue(`userSetting.${key}.minBet`, settings[key]["minBet"]);
                setValue(`userSetting.${key}.maxBet`, settings[key]["maxBet"]);
                setValue(`userSetting.${key}.delay`, settings[key]["delay"]);
              });
            }
          }, [props.depositUser]);
          const onSubmit = handleSubmit((data) => {
            const userSettingsObject = {};
            data.userSetting.forEach((userSettings, index) => {
              if (userSettings !== null) {
                userSettingsObject[index] = userSettings;
              }
            });
            data.userSetting = userSettingsObject;
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["default"]
              .saveGeneralSetting(data)
              .then((res) => {
                var _res$data, _res$data2, _res$data2$message;
                // Check if it's a transaction password error (now comes as success=false)
                if (
                  (res === null || res === void 0
                    ? void 0
                    : (_res$data = res.data) === null || _res$data === void 0
                    ? void 0
                    : _res$data.success) === false &&
                  res !== null &&
                  res !== void 0 &&
                  (_res$data2 = res.data) !== null &&
                  _res$data2 !== void 0 &&
                  (_res$data2$message = _res$data2.message) !== null &&
                  _res$data2$message !== void 0 &&
                  _res$data2$message
                    .toLowerCase()
                    .includes("transaction password")
                ) {
                  // API interceptor already showed the toast, just keep user on page
                  console.log(
                    "Transaction password error in general settings modal"
                  );
                  return; // Don't close modal or show success message
                }
                props.closeModal("gs");
                reset();
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(
                  res.data.message
                );
              })
              .catch((e) => {
                var _e$response, _e$response$data;
                // Handle any other errors that weren't caught by the interceptor
                const error =
                  ((_e$response = e.response) === null || _e$response === void 0
                    ? void 0
                    : (_e$response$data = _e$response.data) === null ||
                      _e$response$data === void 0
                    ? void 0
                    : _e$response$data.message) || "An error occurred";
                if (!error.toLowerCase().includes("transaction password")) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(
                    error
                  );
                }
              });
          });
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                react_modal__WEBPACK_IMPORTED_MODULE_1___default(),
                {
                  isOpen: props.showDialog,
                  onRequestClose: () => {
                    props.closeModal("gs");
                    reset();
                  },
                  contentLabel: "General Settings",
                  className: "modal-dialog",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                          "div",
                          {
                            className: "modal-header",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                "h4",
                                {
                                  className: "modal-title",
                                  children: "General Settings",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 102,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                "button",
                                {
                                  type: "button",
                                  className: "close",
                                  "data-dismiss": "modal",
                                  onClick: () => {
                                    props.closeModal("gs");
                                    reset();
                                  },
                                  children: "\xD7",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 103,
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
                            lineNumber: 101,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                          "form",
                          {
                            id: "DepositForm",
                            method: "post",
                            autoComplete: "off",
                            onSubmit: onSubmit,
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-body row",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                      "div",
                                      {
                                        className:
                                          "card-header col-md-12 mb-20",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                          "h4",
                                          {
                                            className: "mb-0",
                                            children: "Sport Settings",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 118,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 117,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                      "div",
                                      {
                                        className: "container-fluid",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                            "table",
                                            {
                                              className:
                                                "table table-striped table-bordered",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "thead",
                                                  {
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                      "tr",
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                            "th",
                                                            {},
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 124,
                                                              columnNumber: 23,
                                                            },
                                                            undefined
                                                          ),
                                                          (_sportListState$sport =
                                                            sportListState.sports) ===
                                                            null ||
                                                          _sportListState$sport ===
                                                            void 0
                                                            ? void 0
                                                            : _sportListState$sport.map(
                                                                (sports) =>
                                                                  sports.sportId ===
                                                                    1 ||
                                                                  sports.sportId ===
                                                                    2 ||
                                                                  sports.sportId ===
                                                                    4
                                                                    ? /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "th",
                                                                        {
                                                                          children:
                                                                            sports.name,
                                                                        },
                                                                        sports._id,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 127,
                                                                          columnNumber: 27,
                                                                        },
                                                                        undefined
                                                                      )
                                                                    : null
                                                              ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 123,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 122,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "tbody",
                                                  {
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        "tr",
                                                        {
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                              "td",
                                                              {
                                                                children:
                                                                  "Min Bet",
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
                                                            (_sportListState$sport2 =
                                                              sportListState.sports) ===
                                                              null ||
                                                            _sportListState$sport2 ===
                                                              void 0
                                                              ? void 0
                                                              : _sportListState$sport2.map(
                                                                  ({
                                                                    _id,
                                                                    sportId,
                                                                  }) => {
                                                                    var _props$depositUser6,
                                                                      _props$depositUser6$p,
                                                                      _props$depositUser6$p2;
                                                                    return sportId ==
                                                                      1 ||
                                                                      sportId ==
                                                                        2 ||
                                                                      sportId ==
                                                                        4
                                                                      ? /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                          "td",
                                                                          {
                                                                            children:
                                                                              [
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                  "input",
                                                                                  {
                                                                                    id: `minBet.${sportId}`,
                                                                                    className: `minBet.${sportId}`,
                                                                                    ...register(
                                                                                      `userSetting.${sportId}.minBet`
                                                                                    ),
                                                                                    placeholder:
                                                                                      "",
                                                                                    max:
                                                                                      (props ===
                                                                                        null ||
                                                                                      props ===
                                                                                        void 0
                                                                                        ? void 0
                                                                                        : props
                                                                                            .depositUser
                                                                                            .role) !==
                                                                                      _models_User__WEBPACK_IMPORTED_MODULE_10__
                                                                                        .RoleType
                                                                                        .admin
                                                                                        ? (_props$depositUser6 =
                                                                                            props.depositUser) ===
                                                                                            null ||
                                                                                          _props$depositUser6 ===
                                                                                            void 0
                                                                                          ? void 0
                                                                                          : (_props$depositUser6$p =
                                                                                              _props$depositUser6.parent) ===
                                                                                              null ||
                                                                                            _props$depositUser6$p ===
                                                                                              void 0
                                                                                          ? void 0
                                                                                          : (_props$depositUser6$p2 =
                                                                                              _props$depositUser6$p.userSetting) ===
                                                                                              null ||
                                                                                            _props$depositUser6$p2 ===
                                                                                              void 0
                                                                                          ? void 0
                                                                                          : _props$depositUser6$p2[
                                                                                              sportId
                                                                                            ]
                                                                                              .minBet
                                                                                        : null,
                                                                                    min: 0,
                                                                                    type: "number",
                                                                                  },
                                                                                  void 0,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 138,
                                                                                    columnNumber: 29,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                  "span",
                                                                                  {
                                                                                    className:
                                                                                      "error",
                                                                                  },
                                                                                  void 0,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 151,
                                                                                    columnNumber: 29,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                              ],
                                                                          },
                                                                          _id,
                                                                          true,
                                                                          {
                                                                            fileName:
                                                                              _jsxFileName,
                                                                            lineNumber: 137,
                                                                            columnNumber: 27,
                                                                          },
                                                                          undefined
                                                                        )
                                                                      : null;
                                                                  }
                                                                ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 133,
                                                          columnNumber: 21,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        "tr",
                                                        {
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                              "td",
                                                              {
                                                                children:
                                                                  "Max Bet",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 157,
                                                                columnNumber: 23,
                                                              },
                                                              undefined
                                                            ),
                                                            (_sportListState$sport3 =
                                                              sportListState.sports) ===
                                                              null ||
                                                            _sportListState$sport3 ===
                                                              void 0
                                                              ? void 0
                                                              : _sportListState$sport3.map(
                                                                  ({
                                                                    _id,
                                                                    sportId,
                                                                  }) => {
                                                                    var _props$depositUser7,
                                                                      _props$depositUser7$p,
                                                                      _props$depositUser7$p2;
                                                                    return sportId ==
                                                                      1 ||
                                                                      sportId ==
                                                                        2 ||
                                                                      sportId ==
                                                                        4
                                                                      ? /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                          "td",
                                                                          {
                                                                            children:
                                                                              [
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                  "input",
                                                                                  {
                                                                                    id: `maxBet.${sportId}`,
                                                                                    className: `maxBet.${sportId}`,
                                                                                    ...register(
                                                                                      `userSetting.${sportId}.maxBet`
                                                                                    ),
                                                                                    placeholder:
                                                                                      "",
                                                                                    max:
                                                                                      (props ===
                                                                                        null ||
                                                                                      props ===
                                                                                        void 0
                                                                                        ? void 0
                                                                                        : props
                                                                                            .depositUser
                                                                                            .role) !==
                                                                                      _models_User__WEBPACK_IMPORTED_MODULE_10__
                                                                                        .RoleType
                                                                                        .admin
                                                                                        ? (_props$depositUser7 =
                                                                                            props.depositUser) ===
                                                                                            null ||
                                                                                          _props$depositUser7 ===
                                                                                            void 0
                                                                                          ? void 0
                                                                                          : (_props$depositUser7$p =
                                                                                              _props$depositUser7.parent) ===
                                                                                              null ||
                                                                                            _props$depositUser7$p ===
                                                                                              void 0
                                                                                          ? void 0
                                                                                          : (_props$depositUser7$p2 =
                                                                                              _props$depositUser7$p.userSetting) ===
                                                                                              null ||
                                                                                            _props$depositUser7$p2 ===
                                                                                              void 0
                                                                                          ? void 0
                                                                                          : _props$depositUser7$p2[
                                                                                              sportId
                                                                                            ]
                                                                                              .maxBet
                                                                                        : null,
                                                                                    min: 0,
                                                                                    type: "number",
                                                                                  },
                                                                                  void 0,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 161,
                                                                                    columnNumber: 29,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                  "span",
                                                                                  {
                                                                                    className:
                                                                                      "error",
                                                                                  },
                                                                                  void 0,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 174,
                                                                                    columnNumber: 29,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                              ],
                                                                          },
                                                                          _id,
                                                                          true,
                                                                          {
                                                                            fileName:
                                                                              _jsxFileName,
                                                                            lineNumber: 160,
                                                                            columnNumber: 27,
                                                                          },
                                                                          undefined
                                                                        )
                                                                      : null;
                                                                  }
                                                                ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 156,
                                                          columnNumber: 21,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        "tr",
                                                        {
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                              "td",
                                                              {
                                                                children:
                                                                  "Delay",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 180,
                                                                columnNumber: 23,
                                                              },
                                                              undefined
                                                            ),
                                                            (_sportListState$sport4 =
                                                              sportListState.sports) ===
                                                              null ||
                                                            _sportListState$sport4 ===
                                                              void 0
                                                              ? void 0
                                                              : _sportListState$sport4.map(
                                                                  ({
                                                                    _id,
                                                                    sportId,
                                                                  }) => {
                                                                    var _props$depositUser8,
                                                                      _props$depositUser8$p,
                                                                      _props$depositUser8$p2;
                                                                    return sportId ==
                                                                      1 ||
                                                                      sportId ==
                                                                        2 ||
                                                                      sportId ==
                                                                        4
                                                                      ? /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                          "td",
                                                                          {
                                                                            children:
                                                                              [
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                  "input",
                                                                                  {
                                                                                    id: `delay.${sportId}`,
                                                                                    className: `delay.${sportId}`,
                                                                                    ...register(
                                                                                      `userSetting.${sportId}.delay`
                                                                                    ),
                                                                                    placeholder:
                                                                                      "",
                                                                                    max:
                                                                                      (props ===
                                                                                        null ||
                                                                                      props ===
                                                                                        void 0
                                                                                        ? void 0
                                                                                        : props
                                                                                            .depositUser
                                                                                            .role) !==
                                                                                      _models_User__WEBPACK_IMPORTED_MODULE_10__
                                                                                        .RoleType
                                                                                        .admin
                                                                                        ? (_props$depositUser8 =
                                                                                            props.depositUser) ===
                                                                                            null ||
                                                                                          _props$depositUser8 ===
                                                                                            void 0
                                                                                          ? void 0
                                                                                          : (_props$depositUser8$p =
                                                                                              _props$depositUser8.parent) ===
                                                                                              null ||
                                                                                            _props$depositUser8$p ===
                                                                                              void 0
                                                                                          ? void 0
                                                                                          : (_props$depositUser8$p2 =
                                                                                              _props$depositUser8$p.userSetting) ===
                                                                                              null ||
                                                                                            _props$depositUser8$p2 ===
                                                                                              void 0
                                                                                          ? void 0
                                                                                          : _props$depositUser8$p2[
                                                                                              sportId
                                                                                            ]
                                                                                              .delay
                                                                                        : null,
                                                                                    type: "number",
                                                                                  },
                                                                                  void 0,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 184,
                                                                                    columnNumber: 29,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                  "span",
                                                                                  {
                                                                                    className:
                                                                                      "error",
                                                                                  },
                                                                                  void 0,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 196,
                                                                                    columnNumber: 29,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                              ],
                                                                          },
                                                                          _id,
                                                                          true,
                                                                          {
                                                                            fileName:
                                                                              _jsxFileName,
                                                                            lineNumber: 183,
                                                                            columnNumber: 27,
                                                                          },
                                                                          undefined
                                                                        )
                                                                      : null;
                                                                  }
                                                                ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 179,
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
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 121,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                            "div",
                                            {
                                              className: "row m-t-20",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-md-4",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                      "label",
                                                      {
                                                        children:
                                                          "Transaction Password",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 206,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 205,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-md-8",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                        "input",
                                                        {
                                                          type: "password",
                                                          id: "mpassword",
                                                          ...register(
                                                            "transactionPassword"
                                                          ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 209,
                                                          columnNumber: 21,
                                                        },
                                                        undefined
                                                      ),
                                                      (errors === null ||
                                                      errors === void 0
                                                        ? void 0
                                                        : errors.transactionPassword) &&
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className: "error",
                                                            children:
                                                              errors
                                                                .transactionPassword
                                                                .message,
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 211,
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
                                                    lineNumber: 208,
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
                                              lineNumber: 204,
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
                                        lineNumber: 120,
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
                                  lineNumber: 116,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-footer",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                      "input",
                                      {
                                        type: "hidden",
                                        name: "uid",
                                        id: "uid",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 218,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                      "button",
                                      {
                                        type: "button",
                                        className: "btn btn-back",
                                        "data-dismiss": "modal",
                                        onClick: () => {
                                          props.closeModal("gs");
                                          reset();
                                        },
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-undo",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 228,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          "Back",
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 219,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                      _components_SubmitButton__WEBPACK_IMPORTED_MODULE_9__[
                                        "default"
                                      ],
                                      {
                                        type: "submit",
                                        className: "btn btn-submit",
                                        children: [
                                          "Submit",
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-sign-in-alt",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 233,
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
                                        lineNumber: 231,
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
                                  lineNumber: 217,
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
                            lineNumber: 115,
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
                      lineNumber: 100,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(
          GeneralSettingsModal,
          "mLxPF3zE1Xyl1gsY+zN1k9vn2Gs=",
          false,
          function () {
            return [
              _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,
              react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm,
            ];
          }
        );
        _c = GeneralSettingsModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          GeneralSettingsModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "GeneralSettingsModal");

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

    /***/ "./src/admin-app/pages/list-clients/modals/PasswordModal.tsx":
      /*!*******************************************************************!*\
  !*** ./src/admin-app/pages/list-clients/modals/PasswordModal.tsx ***!
  \*******************************************************************/
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
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
        /* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.mjs"
          );
        /* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
          );
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/list-clients/modals/PasswordModal.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const PasswordModal = ({ userDetails, showDialog, closeModal }) => {
          _s();
          const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__
            .object()
            .shape({
              password: yup__WEBPACK_IMPORTED_MODULE_2__
                .string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters")
                .matches(
                  /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)[A-Za-z0-9]{8,32}$/,
                  "contains at least one digit,one upper case,one lower case alphabet,"
                ),
              confirmPassword: yup__WEBPACK_IMPORTED_MODULE_2__
                .string()
                .required("Confirm password is required")
                .oneOf(
                  [yup__WEBPACK_IMPORTED_MODULE_2__.ref("password")],
                  "Passwords must match"
                ),
              transactionPassword: yup__WEBPACK_IMPORTED_MODULE_2__
                .string()
                .required("Transaction Password is required"),
            });
          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
            resolver: (0,
            _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(
              validationSchema
            ),
          });
          const onSubmit = handleSubmit((data) => {
            const formData = {
              ...data,
              username:
                userDetails === null || userDetails === void 0
                  ? void 0
                  : userDetails.username,
            };
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["default"]
              .updatePassword(formData)
              .then((res) => {
                var _res$data, _res$data2, _res$data2$message;
                // Check if it's a transaction password error (now comes as success=false)
                if (
                  (res === null || res === void 0
                    ? void 0
                    : (_res$data = res.data) === null || _res$data === void 0
                    ? void 0
                    : _res$data.success) === false &&
                  res !== null &&
                  res !== void 0 &&
                  (_res$data2 = res.data) !== null &&
                  _res$data2 !== void 0 &&
                  (_res$data2$message = _res$data2.message) !== null &&
                  _res$data2$message !== void 0 &&
                  _res$data2$message
                    .toLowerCase()
                    .includes("transaction password")
                ) {
                  // API interceptor already showed the toast, just keep user on page
                  console.log("Transaction password error in password modal");
                  return; // Don't close modal or show success message
                }
                closeModal("p");
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(
                  "Password Updated Successfully"
                );
                reset();
              })
              .catch((e) => {
                var _e$response, _e$response$data;
                // Handle any other errors that weren't caught by the interceptor
                const error =
                  ((_e$response = e.response) === null || _e$response === void 0
                    ? void 0
                    : (_e$response$data = _e$response.data) === null ||
                      _e$response$data === void 0
                    ? void 0
                    : _e$response$data.message) || "An error occurred";
                if (!error.toLowerCase().includes("transaction password")) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(
                    error
                  );
                }
              });
          });
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                react_modal__WEBPACK_IMPORTED_MODULE_1___default(),
                {
                  isOpen: showDialog,
                  onRequestClose: () => {
                    closeModal("p");
                    reset();
                  },
                  contentLabel: "Password",
                  className: "modal-dialog",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                          "div",
                          {
                            className: "modal-header",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "h4",
                                {
                                  className: "modal-title",
                                  children: "Password",
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
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "button",
                                {
                                  type: "button",
                                  className: "close",
                                  "data-dismiss": "modal",
                                  onClick: () => {
                                    closeModal("p");
                                    reset();
                                  },
                                  children: "\xD7",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 84,
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
                            lineNumber: 82,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                          "form",
                          {
                            id: "PasswordForm",
                            onSubmit: onSubmit,
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-body",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    "div",
                                    {
                                      className: "container-fluid",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children: "New Password",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 101,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 100,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "Password",
                                                        className:
                                                          "form-control",
                                                        id: "new-password",
                                                        ...register("password"),
                                                        maxLength: 20,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 104,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.password) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                        "span",
                                                        {
                                                          id: "password-error",
                                                          className: "error",
                                                          children:
                                                            errors.password
                                                              .message,
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
                                                  lineNumber: 103,
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
                                            lineNumber: 99,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children:
                                                        "Confirm Password",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 120,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 119,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "Password",
                                                        className:
                                                          "form-control",
                                                        id: "confirm-password",
                                                        ...register(
                                                          "confirmPassword"
                                                        ),
                                                        maxLength: 20,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 123,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.confirmPassword) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                        "span",
                                                        {
                                                          id: "password_confirmation-error",
                                                          className: "error",
                                                          children:
                                                            errors
                                                              .confirmPassword
                                                              .message,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 131,
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
                                                  lineNumber: 122,
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
                                            lineNumber: 118,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children:
                                                        "Transaction Password",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 140,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 139,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "Password",
                                                        id: "mpassword",
                                                        ...register(
                                                          "transactionPassword"
                                                        ),
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
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.transactionPassword) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                        "span",
                                                        {
                                                          className: "error",
                                                          children:
                                                            errors
                                                              .transactionPassword
                                                              .message,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 145,
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
                                            lineNumber: 138,
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
                                      lineNumber: 98,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 97,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-footer",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      "input",
                                      {
                                        type: "hidden",
                                        id: "password-uid",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 152,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      "button",
                                      {
                                        type: "button",
                                        className: "btn btn-back",
                                        "data-dismiss": "modal",
                                        onClick: () => {
                                          closeModal("p");
                                          reset();
                                        },
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-undo",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 162,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          "Back",
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 153,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      _components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__[
                                        "default"
                                      ],
                                      {
                                        type: "submit",
                                        className: "btn btn-submit",
                                        children: [
                                          "Submit",
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-sign-in-alt",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 167,
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
                                        lineNumber: 165,
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
                                  lineNumber: 151,
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
                            lineNumber: 96,
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
                      lineNumber: 81,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(PasswordModal, "s4ydKAPISlraMtU6SLcI0IdTqMk=", false, function () {
          return [react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm];
        });
        _c = PasswordModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PasswordModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "PasswordModal");

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

    /***/ "./src/admin-app/pages/list-clients/modals/StatusModal.tsx":
      /*!*****************************************************************!*\
  !*** ./src/admin-app/pages/list-clients/modals/StatusModal.tsx ***!
  \*****************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.mjs"
          );
        /* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/list-clients/modals/StatusModal.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const StatusModal = ({
          userDetails,
          showDialog,
          closeModal,
          refreshClientList,
        }) => {
          _s();
          const statusValidationSchema = yup__WEBPACK_IMPORTED_MODULE_3__
            .object()
            .shape({
              isUserActive: yup__WEBPACK_IMPORTED_MODULE_3__.boolean(),
              isUserBetActive: yup__WEBPACK_IMPORTED_MODULE_3__.boolean(),
              transactionPassword: yup__WEBPACK_IMPORTED_MODULE_3__
                .string()
                .required("Transaction Password is required"),
            });
          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
            setValue,
          } = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
            defaultValues: {
              isUserActive:
                userDetails === null || userDetails === void 0
                  ? void 0
                  : userDetails.isLogin,
              isUserBetActive:
                userDetails === null || userDetails === void 0
                  ? void 0
                  : userDetails.betLock,
            },
            resolver: (0,
            _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__.yupResolver)(
              statusValidationSchema
            ),
          });
          (0, react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
            setValue(
              "isUserBetActive",
              userDetails !== null &&
                userDetails !== void 0 &&
                userDetails.betLock
                ? true
                : false
            );
            setValue(
              "isUserActive",
              userDetails !== null &&
                userDetails !== void 0 &&
                userDetails.isLogin
                ? true
                : false
            );
          }, [userDetails]);
          const onSubmit = handleSubmit((data) => {
            const formData = {
              ...data,
              username:
                userDetails === null || userDetails === void 0
                  ? void 0
                  : userDetails.username,
            };
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["default"]
              .updateUserAndBetStatus(formData)
              .then((res) => {
                var _res$data, _res$data2, _res$data2$message;
                // Check if it's a transaction password error (now comes as success=false)
                if (
                  (res === null || res === void 0
                    ? void 0
                    : (_res$data = res.data) === null || _res$data === void 0
                    ? void 0
                    : _res$data.success) === false &&
                  res !== null &&
                  res !== void 0 &&
                  (_res$data2 = res.data) !== null &&
                  _res$data2 !== void 0 &&
                  (_res$data2$message = _res$data2.message) !== null &&
                  _res$data2$message !== void 0 &&
                  _res$data2$message
                    .toLowerCase()
                    .includes("transaction password")
                ) {
                  // API interceptor already showed the toast, just keep user on page
                  console.log("Transaction password error in status modal");
                  return; // Don't close modal or show success message
                }
                closeModal("s");
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(
                  "Status Updated Successfully"
                );
                refreshClientList(true);
                reset();
              })
              .catch((e) => {
                var _e$response, _e$response$data;
                // Handle any other errors that weren't caught by the interceptor
                const error =
                  ((_e$response = e.response) === null || _e$response === void 0
                    ? void 0
                    : (_e$response$data = _e$response.data) === null ||
                      _e$response$data === void 0
                    ? void 0
                    : _e$response$data.message) || "An error occurred";
                if (!error.toLowerCase().includes("transaction password")) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(
                    error
                  );
                }
              });
          });
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                react_modal__WEBPACK_IMPORTED_MODULE_1___default(),
                {
                  isOpen: showDialog,
                  onRequestClose: () => {
                    closeModal("s");
                    reset();
                  },
                  contentLabel: "Status",
                  className: "modal-dialog",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                          "div",
                          {
                            className: "modal-header",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "h4",
                                {
                                  className: "modal-title",
                                  children: "Change Status",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 90,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "button",
                                {
                                  type: "button",
                                  className: "close",
                                  "data-dismiss": "modal",
                                  onClick: () => {
                                    closeModal("s");
                                    reset();
                                  },
                                  children: "\xD7",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 91,
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
                            lineNumber: 89,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                          "div",
                          {
                            className: "m-t-20",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                              "div",
                              {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                  "div",
                                  {
                                    className: "float-right user-status",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        "p",
                                        {
                                          className: "text-success",
                                          id: "user-active-diff-s",
                                          style: {
                                            display: "none",
                                          },
                                          children: "Active",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 106,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        "p",
                                        {
                                          className: "text-danger",
                                          id: "user-active-diff-f",
                                          style: {
                                            display: "none",
                                          },
                                          children: "Inactive",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 109,
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
                                    lineNumber: 105,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 104,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 103,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                          "form",
                          {
                            id: "StatusForm",
                            method: "post",
                            autoComplete: "off",
                            onSubmit: onSubmit,
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "ul",
                                {
                                  className:
                                    "status col-md-12 text-center m-t-20",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                    "div",
                                    {
                                      className: "row",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          "li",
                                          {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "label",
                                              {
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "span",
                                                    {
                                                      children: "User Active",
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
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "input",
                                                    {
                                                      type: "checkbox",
                                                      ...register(
                                                        "isUserActive"
                                                      ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 122,
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
                                                lineNumber: 120,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 119,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          "li",
                                          {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "label",
                                              {
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "span",
                                                    {
                                                      children: "Bet Lock",
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
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "input",
                                                    {
                                                      type: "checkbox",
                                                      ...register(
                                                        "isUserBetActive"
                                                      ),
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
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 118,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 117,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "div",
                                {
                                  className: "row m-b-20",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "div",
                                      {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          "label",
                                          {
                                            children: "Transaction Password",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 136,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
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
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "div",
                                      {
                                        className: "col-md-8",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                            "input",
                                            {
                                              type: "Password",
                                              id: "mpassword",
                                              ...register(
                                                "transactionPassword"
                                              ),
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
                                          (errors === null || errors === void 0
                                            ? void 0
                                            : errors.transactionPassword) &&
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "span",
                                              {
                                                className: "error",
                                                children:
                                                  errors.transactionPassword
                                                    .message,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 141,
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
                                        lineNumber: 138,
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
                                  lineNumber: 134,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-body m-t-20",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 145,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-footer",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "input",
                                      {
                                        type: "hidden",
                                        id: "status-uid",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 147,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "button",
                                      {
                                        type: "button",
                                        className: "btn btn-back",
                                        "data-dismiss": "modal",
                                        onClick: () => {
                                          closeModal("s");
                                          reset();
                                        },
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-undo",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 157,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          "Back",
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 148,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      _components_SubmitButton__WEBPACK_IMPORTED_MODULE_6__[
                                        "default"
                                      ],
                                      {
                                        type: "submit",
                                        className: "btn btn-submit",
                                        children: [
                                          "Submit",
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-sign-in-alt",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 162,
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
                                        lineNumber: 160,
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
                                  lineNumber: 146,
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
                            lineNumber: 116,
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
                      lineNumber: 88,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(StatusModal, "Od0AdctC4W+COo6VYNezgan/YEQ=", false, function () {
          return [react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm];
        });
        _c = StatusModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          StatusModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "StatusModal");

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

    /***/ "./src/admin-app/pages/list-clients/modals/WithdrawModal.tsx":
      /*!*******************************************************************!*\
  !*** ./src/admin-app/pages/list-clients/modals/WithdrawModal.tsx ***!
  \*******************************************************************/
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
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
        /* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.mjs"
          );
        /* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
          );
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/list-clients/modals/WithdrawModal.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const WithdrawModal = (props) => {
          _s();
          var _props$userDetails,
            _props$userDetails$ba,
            _props$userDetails2,
            _props$userDetails2$b,
            _props$userDetails7,
            _props$userDetails7$p,
            _props$userDetails8,
            _props$userDetails8$p,
            _props$userDetails9,
            _props$userDetails9$p,
            _props$userDetails9$p2,
            _props$userDetails0,
            _props$userDetails0$p,
            _ref,
            _props$userDetails1,
            _props$userDetails1$p,
            _props$userDetails10,
            _props$userDetails11,
            _props$userDetails11$,
            _props$userDetails12,
            _props$userDetails12$,
            _props$userDetails12$2,
            _props$userDetails13,
            _props$userDetails13$,
            _ref2,
            _props$userDetails14,
            _props$userDetails14$;
          const withdrawValidationSchema = yup__WEBPACK_IMPORTED_MODULE_2__
            .object()
            .shape({
              narration: yup__WEBPACK_IMPORTED_MODULE_2__
                .string()
                .required("Remark is required")
                .trim(),
              transactionPassword: yup__WEBPACK_IMPORTED_MODULE_2__
                .string()
                .required("Transaction Password is required"),
              amount: yup__WEBPACK_IMPORTED_MODULE_2__
                .number()
                .required("Amount is required")
                .transform((value) => (isNaN(value) ? 0 : +value))
                .min(1, "Amount is required")
                .max(
                  (_props$userDetails = props.userDetails) === null ||
                    _props$userDetails === void 0
                    ? void 0
                    : (_props$userDetails$ba = _props$userDetails.balance) ===
                        null || _props$userDetails$ba === void 0
                    ? void 0
                    : _props$userDetails$ba.balance,
                  `Max ${
                    (_props$userDetails2 = props.userDetails) === null ||
                    _props$userDetails2 === void 0
                      ? void 0
                      : (_props$userDetails2$b =
                          _props$userDetails2.balance) === null ||
                        _props$userDetails2$b === void 0
                      ? void 0
                      : _props$userDetails2$b.balance
                  } limit`
                ),
            });
          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
            watch,
          } = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
            resolver: (0,
            _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(
              withdrawValidationSchema
            ),
          });
          const onSubmit = handleSubmit((data) => {
            var _props$userDetails3,
              _props$userDetails4,
              _props$userDetails5,
              _props$userDetails6;
            const formData = {
              ...data,
              userId:
                (_props$userDetails3 = props.userDetails) === null ||
                _props$userDetails3 === void 0
                  ? void 0
                  : _props$userDetails3._id,
              parentUserId:
                ((_props$userDetails4 = props.userDetails) === null ||
                _props$userDetails4 === void 0
                  ? void 0
                  : _props$userDetails4.role) === "admin"
                  ? (_props$userDetails5 = props.userDetails) === null ||
                    _props$userDetails5 === void 0
                    ? void 0
                    : _props$userDetails5._id
                  : (_props$userDetails6 = props.userDetails) === null ||
                    _props$userDetails6 === void 0
                  ? void 0
                  : _props$userDetails6.parentId,
              balanceUpdateType: "W",
            };
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["default"]
              .updateDepositBalance(formData)
              .then((res) => {
                var _res$data, _res$data2, _res$data2$message;
                // Check if it's a transaction password error (now comes as success=false)
                if (
                  (res === null || res === void 0
                    ? void 0
                    : (_res$data = res.data) === null || _res$data === void 0
                    ? void 0
                    : _res$data.success) === false &&
                  res !== null &&
                  res !== void 0 &&
                  (_res$data2 = res.data) !== null &&
                  _res$data2 !== void 0 &&
                  (_res$data2$message = _res$data2.message) !== null &&
                  _res$data2$message !== void 0 &&
                  _res$data2$message
                    .toLowerCase()
                    .includes("transaction password")
                ) {
                  // API interceptor already showed the toast, just keep user on page
                  console.log("Transaction password error in withdraw modal");
                  return; // Don't close modal or show success message
                }
                props.closeModal("w", res.data.data);
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(
                  "Balance Withdrawal Successfully"
                );
                reset();
              })
              .catch((e) => {
                var _e$response, _e$response$data;
                // Handle any other errors that weren't caught by the interceptor
                const error =
                  ((_e$response = e.response) === null || _e$response === void 0
                    ? void 0
                    : (_e$response$data = _e$response.data) === null ||
                      _e$response$data === void 0
                    ? void 0
                    : _e$response$data.message) || "An error occurred";
                if (!error.toLowerCase().includes("transaction password")) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(
                    error
                  );
                }
              });
          });
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                react_modal__WEBPACK_IMPORTED_MODULE_1___default(),
                {
                  isOpen: props.showDialog,
                  onRequestClose: () => {
                    props.closeModal("w");
                    reset();
                  },
                  contentLabel: "Withdraw",
                  className: "modal-dialog",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                          "div",
                          {
                            className: "modal-header",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "h4",
                                {
                                  className: "modal-title",
                                  children: "Withdraw",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 78,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "button",
                                {
                                  type: "button",
                                  className: "close",
                                  "data-dismiss": "modal",
                                  onClick: () => {
                                    props.closeModal("w");
                                    reset();
                                  },
                                  children: "\xD7",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 79,
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
                            lineNumber: 77,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                          "form",
                          {
                            action: "",
                            id: "WithdrawForm",
                            method: "post",
                            autoComplete: "off",
                            onSubmit: onSubmit,
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-body",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    "div",
                                    {
                                      className: "container-fluid",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      className:
                                                        "withdraw-user-first",
                                                      children: [
                                                        " ",
                                                        (_props$userDetails7 =
                                                          props.userDetails) ===
                                                          null ||
                                                        _props$userDetails7 ===
                                                          void 0
                                                          ? void 0
                                                          : (_props$userDetails7$p =
                                                              _props$userDetails7.parent) ===
                                                              null ||
                                                            _props$userDetails7$p ===
                                                              void 0
                                                          ? void 0
                                                          : _props$userDetails7$p.username,
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 96,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 95,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "span",
                                                      {
                                                        className: "popup-box",
                                                        id: "withdraw-first",
                                                        children:
                                                          (_props$userDetails8 =
                                                            props.userDetails) !==
                                                            null &&
                                                          _props$userDetails8 !==
                                                            void 0 &&
                                                          (_props$userDetails8$p =
                                                            _props$userDetails8.parentBalance) !==
                                                            null &&
                                                          _props$userDetails8$p !==
                                                            void 0 &&
                                                          _props$userDetails8$p.balance
                                                            ? (_props$userDetails9 =
                                                                props.userDetails) ===
                                                                null ||
                                                              _props$userDetails9 ===
                                                                void 0
                                                              ? void 0
                                                              : (_props$userDetails9$p =
                                                                  _props$userDetails9.parentBalance) ===
                                                                  null ||
                                                                _props$userDetails9$p ===
                                                                  void 0
                                                              ? void 0
                                                              : (_props$userDetails9$p2 =
                                                                  _props$userDetails9$p.balance) ===
                                                                  null ||
                                                                _props$userDetails9$p2 ===
                                                                  void 0
                                                              ? void 0
                                                              : _props$userDetails9$p2.toFixed(
                                                                  2
                                                                )
                                                            : 0,
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
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "span",
                                                      {
                                                        className: "popup-box",
                                                        id: "withdraw-first-diff",
                                                        children:
                                                          (_props$userDetails0 =
                                                            props.userDetails) !==
                                                            null &&
                                                          _props$userDetails0 !==
                                                            void 0 &&
                                                          (_props$userDetails0$p =
                                                            _props$userDetails0.parentBalance) !==
                                                            null &&
                                                          _props$userDetails0$p !==
                                                            void 0 &&
                                                          _props$userDetails0$p.balance &&
                                                          watch("amount")
                                                            ? (_ref =
                                                                ((_props$userDetails1 =
                                                                  props.userDetails) ===
                                                                  null ||
                                                                _props$userDetails1 ===
                                                                  void 0
                                                                  ? void 0
                                                                  : (_props$userDetails1$p =
                                                                      _props$userDetails1.parentBalance) ===
                                                                      null ||
                                                                    _props$userDetails1$p ===
                                                                      void 0
                                                                  ? void 0
                                                                  : _props$userDetails1$p.balance) +
                                                                +watch(
                                                                  "amount"
                                                                )) === null ||
                                                              _ref === void 0
                                                              ? void 0
                                                              : _ref.toFixed(2)
                                                            : 0,
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
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 101,
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
                                            lineNumber: 94,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      className:
                                                        "withdraw-user-second",
                                                      children:
                                                        (_props$userDetails10 =
                                                          props.userDetails) ===
                                                          null ||
                                                        _props$userDetails10 ===
                                                          void 0
                                                          ? void 0
                                                          : _props$userDetails10.username,
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 116,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 115,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "span",
                                                      {
                                                        className: "popup-box",
                                                        id: "withdraw-second",
                                                        children:
                                                          (_props$userDetails11 =
                                                            props.userDetails) !==
                                                            null &&
                                                          _props$userDetails11 !==
                                                            void 0 &&
                                                          (_props$userDetails11$ =
                                                            _props$userDetails11.balance) !==
                                                            null &&
                                                          _props$userDetails11$ !==
                                                            void 0 &&
                                                          _props$userDetails11$.balance
                                                            ? (_props$userDetails12 =
                                                                props.userDetails) ===
                                                                null ||
                                                              _props$userDetails12 ===
                                                                void 0
                                                              ? void 0
                                                              : (_props$userDetails12$ =
                                                                  _props$userDetails12.balance) ===
                                                                  null ||
                                                                _props$userDetails12$ ===
                                                                  void 0
                                                              ? void 0
                                                              : (_props$userDetails12$2 =
                                                                  _props$userDetails12$.balance) ===
                                                                  null ||
                                                                _props$userDetails12$2 ===
                                                                  void 0
                                                              ? void 0
                                                              : _props$userDetails12$2.toFixed(
                                                                  2
                                                                )
                                                            : 0,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 119,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "span",
                                                      {
                                                        className: "popup-box",
                                                        id: "withdraw-second-diff",
                                                        children:
                                                          (_props$userDetails13 =
                                                            props.userDetails) !==
                                                            null &&
                                                          _props$userDetails13 !==
                                                            void 0 &&
                                                          (_props$userDetails13$ =
                                                            _props$userDetails13.balance) !==
                                                            null &&
                                                          _props$userDetails13$ !==
                                                            void 0 &&
                                                          _props$userDetails13$.balance &&
                                                          watch("amount")
                                                            ? (_ref2 =
                                                                ((_props$userDetails14 =
                                                                  props.userDetails) ===
                                                                  null ||
                                                                _props$userDetails14 ===
                                                                  void 0
                                                                  ? void 0
                                                                  : (_props$userDetails14$ =
                                                                      _props$userDetails14.balance) ===
                                                                      null ||
                                                                    _props$userDetails14$ ===
                                                                      void 0
                                                                  ? void 0
                                                                  : _props$userDetails14$.balance) -
                                                                +watch(
                                                                  "amount"
                                                                )) === null ||
                                                              _ref2 === void 0
                                                              ? void 0
                                                              : _ref2.toFixed(2)
                                                            : 0,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 124,
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
                                                  lineNumber: 118,
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
                                            lineNumber: 114,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children: "Amount",
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
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 132,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "number",
                                                        className:
                                                          "text-right maxlength10",
                                                        id: "withdraw-amount",
                                                        ...register("amount"),
                                                        min: 0,
                                                        step: "0.01",
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
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.amount) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                        "span",
                                                        {
                                                          className: "error",
                                                          children:
                                                            errors.amount
                                                              .message,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 144,
                                                          columnNumber: 40,
                                                        },
                                                        undefined
                                                      ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 135,
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
                                            lineNumber: 131,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children: "Remark",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 149,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 148,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "textarea",
                                                      {
                                                        id: "withdraw-remark",
                                                        defaultValue: "",
                                                        ...register(
                                                          "narration"
                                                        ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 152,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.narration) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                        "span",
                                                        {
                                                          className: "error",
                                                          children:
                                                            errors.narration
                                                              .message,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 153,
                                                          columnNumber: 43,
                                                        },
                                                        undefined
                                                      ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 151,
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
                                            lineNumber: 147,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-b-20",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                    "label",
                                                    {
                                                      children:
                                                        "Transaction Password",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 158,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 157,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-8",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      "input",
                                                      {
                                                        type: "Password",
                                                        id: "mpassword",
                                                        ...register(
                                                          "transactionPassword"
                                                        ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 161,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    (errors === null ||
                                                    errors === void 0
                                                      ? void 0
                                                      : errors.transactionPassword) &&
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                        "span",
                                                        {
                                                          className: "error",
                                                          children:
                                                            errors
                                                              .transactionPassword
                                                              .message,
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
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 160,
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
                                            lineNumber: 156,
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
                                      lineNumber: 93,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 92,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                "div",
                                {
                                  className: "modal-footer",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      "input",
                                      {
                                        type: "hidden",
                                        name: "uid",
                                        id: "withdraw-uid",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 170,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      "button",
                                      {
                                        type: "button",
                                        className: "btn btn-back",
                                        "data-dismiss": "modal",
                                        onClick: () => {
                                          props.closeModal("w");
                                          reset();
                                        },
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-undo",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 180,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          "Back",
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 171,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      _components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__[
                                        "default"
                                      ],
                                      {
                                        type: "submit",
                                        className: "btn btn-submit",
                                        children: [
                                          "Submit",
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            "i",
                                            {
                                              className: "fas fa-sign-in-alt",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 185,
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
                                        lineNumber: 183,
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
                                  lineNumber: 169,
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
                            lineNumber: 91,
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
                      lineNumber: 76,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(WithdrawModal, "HLYITYGsF8xln5fNKwzBAoUH5MA=", false, function () {
          return [react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm];
        });
        _c = WithdrawModal;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          WithdrawModal;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "WithdrawModal");

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
  },
]);
//# sourceMappingURL=src_admin-app_pages_list-clients_list-clients_tsx.chunk.js.map
