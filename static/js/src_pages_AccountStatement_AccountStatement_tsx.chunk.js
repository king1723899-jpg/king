"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_AccountStatement_AccountStatement_tsx"],
  {
    /***/ "./src/pages/AccountStatement/AccountStatement.tsx":
      /*!*********************************************************!*\
  !*** ./src/pages/AccountStatement/AccountStatement.tsx ***!
  \*********************************************************/
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
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../services/account.service */ "./src/services/account.service.ts"
          );
        /* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../utils/helper */ "./src/utils/helper.ts"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var _services_bet_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../services/bet.service */ "./src/services/bet.service.ts"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_8__
          );
        /* harmony import */ var _admin_app_pages_UnsetteleBetHistory_bet_list_component__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../admin-app/pages/UnsetteleBetHistory/bet-list.component */ "./src/admin-app/pages/UnsetteleBetHistory/bet-list.component.tsx"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts"
          );
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js"
          );
        /* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_12___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_paginate__WEBPACK_IMPORTED_MODULE_12__
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ =
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
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/AccountStatement/AccountStatement.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        // import ReactPaginate from 'react-paginate'

        const AccountStatement = () => {
          _s();
          const loadingState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)(
            _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_11__.selectLoader
          );
          const [accountStmt, setAccountStmt] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
          const [parseAccountStmt, setparseAccountStmt] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
          const [isOpen, setIsOpen] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
          const [betHistory, setBetHistory] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
          const [selectedStmt, setSelectedStmt] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
          const [pageBet, setPageBet] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
          const [openBalance, setOpenBalance] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
          const [closeBalance, setCloseBalance] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
          const [filterdata, setfilterdata] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState({
              startDate: "",
              endDate: "",
              reportType: "All",
            });
          const [page, setPage] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
          const [currentItems, setCurrentItems] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
          const [pageCount, setPageCount] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
          const [itemOffset, setItemOffset] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
          const [itemsPerPage] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(50);
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            const filterObj = filterdata;
            filterObj.startDate =
              moment__WEBPACK_IMPORTED_MODULE_0___default()()
                .subtract(7, "days")
                .format("YYYY-MM-DD");
            filterObj.endDate =
              moment__WEBPACK_IMPORTED_MODULE_0___default()().format(
                "YYYY-MM-DD"
              );
            setfilterdata(filterObj);
            getAccountStmt(0);
          }, []);
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(parseAccountStmt.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(parseAccountStmt.length / itemsPerPage));
          }, [itemOffset, itemsPerPage, parseAccountStmt]);
          const handlePageClick = (event) => {
            const newOffset =
              (event.selected * itemsPerPage) % parseAccountStmt.length;
            setItemOffset(newOffset);
            setPage(event.selected);
          };
          const getAccountStmt = (page) => {
            _services_account_service__WEBPACK_IMPORTED_MODULE_3__["default"]
              .getAccountList(page, filterdata)
              .then((res) => {
                var _res$data,
                  _res$data2,
                  _res$data2$data,
                  _res$data3,
                  _res$data3$data,
                  _res$data4,
                  _res$data4$data,
                  _res$data5,
                  _res$data5$data,
                  _res$data6,
                  _res$data6$data;
                if (
                  res !== null &&
                  res !== void 0 &&
                  (_res$data = res.data) !== null &&
                  _res$data !== void 0 &&
                  _res$data.data
                )
                  setAccountStmt(
                    (res === null || res === void 0
                      ? void 0
                      : (_res$data2 = res.data) === null ||
                        _res$data2 === void 0
                      ? void 0
                      : (_res$data2$data = _res$data2.data) === null ||
                        _res$data2$data === void 0
                      ? void 0
                      : _res$data2$data.items) || []
                  );
                if (
                  res !== null &&
                  res !== void 0 &&
                  (_res$data3 = res.data) !== null &&
                  _res$data3 !== void 0 &&
                  (_res$data3$data = _res$data3.data) !== null &&
                  _res$data3$data !== void 0 &&
                  _res$data3$data.items &&
                  page == 0
                )
                  setOpenBalance(
                    (res === null || res === void 0
                      ? void 0
                      : (_res$data4 = res.data) === null ||
                        _res$data4 === void 0
                      ? void 0
                      : (_res$data4$data = _res$data4.data) === null ||
                        _res$data4$data === void 0
                      ? void 0
                      : _res$data4$data.openingBalance) || 0
                  );
                setparseAccountStmt(
                  dataformat(
                    (res === null || res === void 0
                      ? void 0
                      : (_res$data5 = res.data) === null ||
                        _res$data5 === void 0
                      ? void 0
                      : (_res$data5$data = _res$data5.data) === null ||
                        _res$data5$data === void 0
                      ? void 0
                      : _res$data5$data.items) || [],
                    (res === null || res === void 0
                      ? void 0
                      : (_res$data6 = res.data) === null ||
                        _res$data6 === void 0
                      ? void 0
                      : (_res$data6$data = _res$data6.data) === null ||
                        _res$data6$data === void 0
                      ? void 0
                      : _res$data6$data.openingBalance) || 0
                  )
                );
                setPage(page);
              })
              .catch((e) => {
                console.log(e);
                // const error = e.response.data.message
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(
                  "error"
                );
              });
          };
          const handleformchange = (event) => {
            const filterObj = filterdata;
            filterObj[event.target.name] = event.target.value;
            setfilterdata(filterObj);
          };
          const handleSubmitform = (event) => {
            event.preventDefault();
            getAccountStmt(0);
          };
          const createSrNo = (index) => {
            return (page - 1) * itemsPerPage || 0 + index + 1;
          };
          const handlePageClickBets = (event) => {
            getBetsData(selectedStmt, event.selected + 1);
          };
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            if (isOpen) getBetsData(selectedStmt, pageBet);
          }, [selectedStmt, pageBet, isOpen]);
          const getBetsData = (stmt, pageNumber) => {
            const allBetsid = [];
            const allbets =
              (stmt === null || stmt === void 0 ? void 0 : stmt.allBets) || [];
            if (allbets.length > 0) {
              allbets.map((Item) => {
                allBetsid.push(Item.betId);
              });
              const betIds = allBetsid;
              _services_bet_service__WEBPACK_IMPORTED_MODULE_7__["default"]
                .getBetListByIds(betIds, pageNumber)
                .then((res) => {
                  setBetHistory(res.data.data);
                  setPageBet(pageNumber);
                });
            }
          };
          const getBets = (e, stmt) => {
            e.preventDefault();
            setSelectedStmt(stmt);
            setPageBet(1);
            setIsOpen(true);
          };
          const getAcHtml = () => {
            let closingbalance = page == 1 ? openBalance : closeBalance;
            const achtml =
              currentItems &&
              currentItems.map((stmt, index) => {
                closingbalance = closingbalance + stmt.amount;
                return /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                  "tr",
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                        "td",
                        {
                          children: stmt.sr_no,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 127,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                        "td",
                        {
                          className: "wnwrap",
                          children: stmt.date,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                        "td",
                        {
                          className: "green wnwrap",
                          children: stmt.credit >= 0 && stmt.credit.toFixed(2),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                        "td",
                        {
                          className: "red wnwrap",
                          children: stmt.credit < 0 && stmt.credit.toFixed(2),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 130,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                        "td",
                        {
                          className: "green wnwrap",
                          children: stmt.closing,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 131,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                        "td",
                        {
                          className: "",
                          onClick: (e) => getBets(e, stmt.stmt),
                          children: stmt.narration,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 132,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                    ],
                  },
                  `${stmt._id}${index}`,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 11,
                  },
                  undefined
                );
              });
            return achtml;
          };
          const dataformat = (response, closingbalance) => {
            const aryNewFormat = [];
            response &&
              response.map((stmt, index) => {
                closingbalance = closingbalance + stmt.amount;
                aryNewFormat.push({
                  _id: stmt._id,
                  // eslint-disable-next-line camelcase
                  sr_no: index + 1,
                  date: moment__WEBPACK_IMPORTED_MODULE_0___default()(
                    stmt.createdAt
                  ).format("lll"),
                  credit: stmt.amount,
                  debit: stmt.amount,
                  closing: closingbalance.toFixed(2),
                  narration: stmt.narration,
                  stmt: stmt,
                });
              });
            return aryNewFormat;
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].subheader("Account Statements"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                  "div",
                  {
                    className:
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile
                        ? " mt-1"
                        : "padding-custom",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                      "div",
                      {
                        className: "",
                        children: [
                          _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ].subheaderdesktop("Account Statements"),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                            "div",
                            {
                              className: "card-body p0",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                  "form",
                                  {
                                    className:
                                      "ng-pristine ng-valid ng-touched mb-0",
                                    method: "post",
                                    onSubmit: handleSubmitform,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                      "div",
                                      {
                                        className: "row row5",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-6 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "mx-datepicker",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "mx-input-wrapper",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
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
                                                                  lineNumber: 182,
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
                                                            lineNumber: 181,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
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
                                                },
                                                void 0,
                                                false,
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
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-6 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "mx-datepicker",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "mx-input-wrapper",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
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
                                                                  lineNumber: 199,
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
                                                            lineNumber: 198,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 197,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 196,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 195,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "col-12 col-lg-2 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "form-group mb-0",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                    "select",
                                                    {
                                                      name: "reportType",
                                                      onChange:
                                                        handleformchange,
                                                      className:
                                                        "custom-select ng-untouched ng-pristine ng-valid",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "ALL",
                                                            children: "All ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 219,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "chip",
                                                            children:
                                                              "Deposit/Withdraw ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 220,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "game",
                                                            children:
                                                              "Game Report ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 221,
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
                                                      lineNumber: 214,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 213,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 212,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "col-12 col-lg-1 mbc-5",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
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
                                                  lineNumber: 226,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 225,
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
                                    lineNumber: 172,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                  "div",
                                  {
                                    className: "table-responsive",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                      "table",
                                      {
                                        className: "text-center",
                                        id: "customers1",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "thead",
                                            {
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                "tr",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                      "th",
                                                      {
                                                        style: {
                                                          width: "10%",
                                                          textAlign: "center",
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: "Sr No.",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 236,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                      "th",
                                                      {
                                                        style: {
                                                          width: "20%",
                                                          textAlign: "center",
                                                          whiteSpace: "nowrap",
                                                        },
                                                        children: ["Date", " "],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 239,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                      "th",
                                                      {
                                                        style: {
                                                          width: "10%",
                                                          textAlign: "center",
                                                        },
                                                        children: "Credit ",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 242,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                      "th",
                                                      {
                                                        style: {
                                                          width: "10%",
                                                          textAlign: "center",
                                                        },
                                                        children: "Debit",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 243,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                      "th",
                                                      {
                                                        style: {
                                                          width: "10%",
                                                          textAlign: "center",
                                                        },
                                                        children: "Balance",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 244,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                      "th",
                                                      {
                                                        style: {
                                                          width: "45%",
                                                          textAlign: "center",
                                                        },
                                                        children: "Remark",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 245,
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
                                                  lineNumber: 235,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 234,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "tbody",
                                            {
                                              children: [
                                                parseAccountStmt.length <= 0 ||
                                                  (parseAccountStmt.length >
                                                    0 &&
                                                    parseAccountStmt.length <=
                                                      0 &&
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                      "tr",
                                                      {
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                            "td",
                                                            {
                                                              colSpan: 8,
                                                              className:
                                                                "text-center",
                                                              children:
                                                                "No Result Found",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 252,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 251,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    )),
                                                parseAccountStmt.length > 0 &&
                                                  parseAccountStmt.length > 0 &&
                                                  page == 0 &&
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                    "tr",
                                                    {
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "td",
                                                          {
                                                            children: "-",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 259,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "td",
                                                          {
                                                            className: "wnwrap",
                                                            children:
                                                              moment__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                parseAccountStmt[0]
                                                                  .createdAt
                                                              ).format(
                                                                _utils_helper__WEBPACK_IMPORTED_MODULE_4__.dateFormat
                                                              ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 260,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "td",
                                                          {
                                                            children: "-",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 263,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "td",
                                                          {
                                                            children: "-",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 264,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "td",
                                                          {
                                                            className: "wnwrap",
                                                            children:
                                                              openBalance ===
                                                                null ||
                                                              openBalance ===
                                                                void 0
                                                                ? void 0
                                                                : openBalance.toFixed(
                                                                    2
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 265,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "td",
                                                          {
                                                            className: "wnwrap",
                                                            children:
                                                              "Opening Balance",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 266,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                      ],
                                                    },
                                                    parseAccountStmt[0]._id,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 258,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                getAcHtml(),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 248,
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
                                        lineNumber: 233,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 232,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                  react_paginate__WEBPACK_IMPORTED_MODULE_12___default(),
                                  {
                                    breakLabel: "...",
                                    nextLabel: ">>",
                                    onPageChange: handlePageClick,
                                    pageRangeDisplayed: 5,
                                    pageCount: pageCount,
                                    containerClassName: "pagination",
                                    activeClassName: "active",
                                    previousLabel: "<<",
                                    breakClassName: "break-me",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 274,
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
                              lineNumber: 171,
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
                        lineNumber: 169,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                  react_modal__WEBPACK_IMPORTED_MODULE_8___default(),
                  {
                    isOpen: isOpen,
                    onAfterClose: () => setIsOpen(false),
                    onRequestClose: (e) => {
                      setIsOpen(false);
                    },
                    contentLabel: "Set Max Bet Limit",
                    className: "col-md-12",
                    ariaHideApp: false,
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                      "div",
                      {
                        className: "modal-content",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                            "div",
                            {
                              className: "modal-header",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                  "h5",
                                  {
                                    children: "Bets",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 301,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                  "button",
                                  {
                                    onClick: () => setIsOpen(false),
                                    className: "close float-right",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                      "i",
                                      {
                                        className: "fa fa-times-circle",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 303,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 302,
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
                              lineNumber: 300,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                            "div",
                            {
                              className: "modal-body",
                              children:
                                !loadingState &&
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                  _admin_app_pages_UnsetteleBetHistory_bet_list_component__WEBPACK_IMPORTED_MODULE_9__[
                                    "default"
                                  ],
                                  {
                                    bethistory: betHistory,
                                    handlePageClick: handlePageClickBets,
                                    page: page,
                                    isTrash: false,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 308,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 306,
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
                        lineNumber: 299,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 289,
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
          AccountStatement,
          "bhdH7E8sHGlw4MvD6gZyaob7W0w=",
          false,
          function () {
            return [_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector];
          }
        );
        _c = AccountStatement;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          AccountStatement;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "AccountStatement");

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

    /***/ "./src/utils/helper.ts":
      /*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ T10MatchStreamingChannel: () =>
            /* binding */ T10MatchStreamingChannel,
          /* harmony export */ betDateFormat: () => /* binding */ betDateFormat,
          /* harmony export */ calculateTotalNumbersFromString: () =>
            /* binding */ calculateTotalNumbersFromString,
          /* harmony export */ checkoddslength: () =>
            /* binding */ checkoddslength,
          /* harmony export */ dateFormat: () => /* binding */ dateFormat,
          /* harmony export */ nFormatter: () => /* binding */ nFormatter,
          /* harmony export */ replacecardstring: () =>
            /* binding */ replacecardstring,
          /* harmony export */ replacecardstringSuperover: () =>
            /* binding */ replacecardstringSuperover,
          /* harmony export */
        });
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        const nFormatter = (num, digits) => {
          const lookup = [
            {
              value: 1,
              symbol: "",
            },
            {
              value: 1e3,
              symbol: "k",
            },
            {
              value: 1e6,
              symbol: "M",
            },
            {
              value: 1e9,
              symbol: "G",
            },
            {
              value: 1e12,
              symbol: "T",
            },
            {
              value: 1e15,
              symbol: "P",
            },
            {
              value: 1e18,
              symbol: "E",
            },
          ];
          const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
          const item = lookup
            .slice()
            .reverse()
            .find((item) => {
              return num >= item.value;
            });
          return item
            ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
            : "0";
        };
        const dateFormat = "MMMM Do YYYY, h:mm A";
        const betDateFormat = "MMMM Do, h:mm:ss A";
        const checkoddslength =
          react_device_detect__WEBPACK_IMPORTED_MODULE_0__.isMobile ? 1 : 3;
        const calculateTotalNumbersFromString = (inputString) => {
          const letterValues = {
            K: 13,
            Q: 12,
            A: 1,
            J: 11,
          };

          // Define a regular expression to match card values (e.g., "JHH" or "QSS")
          const cardRegex = /[A-Z]+/g;
          const cardMatches = inputString.match(cardRegex);

          // Calculate the total value of cards
          let total = 0;
          if (cardMatches) {
            cardMatches.forEach((card) => {
              for (let i = 0; i < card.length; i++) {
                const value = letterValues[card[i]];
                if (value) {
                  total += value;
                }
              }
            });
          }

          // Use a regular expression to match all numbers in the input string
          const numberRegex = /\d+/g;
          const numberMatches = inputString.match(numberRegex);

          // Calculate the sum of numeric values
          if (numberMatches) {
            const numericTotal = numberMatches.reduce(
              (acc, num) => acc + parseInt(num),
              0
            );
            total += numericTotal;
          }
          return total;
        };
        const replacecardstring = (card) => {
          return card
            .replace("DD", "")
            .replace("CC", "")
            .replace("HH", "")
            .replace("SS", "");
        };
        const replacecardstringSuperover = (card) => {
          return card
            .replace("DD", "")
            .replace("CC", "")
            .replace("HH", "")
            .replace("SS", "")
            .replace("1", "")
            .replace("A", "1")
            .replace("K", "wicket");
        };
        const T10MatchStreamingChannel = {
          "australia t10 v new zealand t10": 1036,
          "india t10 v south africa t10": 1035,
          "pakistan t10 v south africa t10": 1033,
          "bangladesh t10 v sri lanka t10": 1034,
          "england t10 vs india t10": 1035,
          "new zealand t10 v india t10": 1033,
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
//# sourceMappingURL=src_pages_AccountStatement_AccountStatement_tsx.chunk.js.map
