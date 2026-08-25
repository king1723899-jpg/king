"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_Anaysis-pl_AnalysisProfitloss_tsx"],
  {
    /***/ "./src/admin-app/pages/Anaysis-pl/AnalysisProfitloss.tsx":
      /*!***************************************************************!*\
  !*** ./src/admin-app/pages/Anaysis-pl/AnalysisProfitloss.tsx ***!
  \***************************************************************/
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
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../services/deposit-withdraw.service */ "./src/services/deposit-withdraw.service.ts"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/admin-app/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../services/user.service */ "./src/services/user.service.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/Anaysis-pl/AnalysisProfitloss.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const AnalysisProfitloss = () => {
          _s();
          var _userBookData$availab2,
            _userBookData$downlin2,
            _userDetails$deposits3,
            _userDetails$deposits4,
            _userDetails$withdraw3,
            _userDetails$withdraw4,
            _userDetails$bets2;
          // Add CSS for modal blur effect
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const style = document.createElement("style");
            style.textContent = `
      .modal-blur-background {
        filter: blur(3px);
        transition: filter 0.3s ease;
      }
      .ReactModal__Overlay {
        background-color: rgba(0, 0, 0, 0.95) !important;
        backdrop-filter: blur(8px) !important;
        -webkit-backdrop-filter: blur(8px) !important;
      }
      .ReactModal__Content {
        box-shadow: 0 20px 60px rgba(0,0,0,0.7) !important;
      }
      .search-input-permanent {
        border: 2px solid rgb(181, 27, 27) !important;
        border-radius: 4px !important;
        outline: none !important;
        box-shadow: none !important;
      }
      .search-input-permanent:focus {
        border: 2px solid rgb(181, 27, 27) !important;
        outline: none !important;
        box-shadow: none !important;
      }
      .search-input-permanent:hover {
        border: 2px solid rgb(181, 27, 27) !important;
        outline: none !important;
        box-shadow: none !important;
      }
    `;
            document.head.appendChild(style);
            return () => {
              if (document.head.contains(style)) {
                document.head.removeChild(style);
              }
            };
          }, []);
          const [analysisData, setAnalysisData] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({
            totalDeposit: 0,
            totalWithdraw: 0,
            totalProfit: 0,
            totalLoss: 0,
            users: [],
          });
          const [loading, setLoading] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [selectedUser, setSelectedUser] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const [isModalOpen, setIsModalOpen] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [userDetails, setUserDetails] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const [modalType, setModalType] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("deposit");
          const [selectedMatch, setSelectedMatch] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const [matchList, setMatchList] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const [searchTerm, setSearchTerm] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [searchResults, setSearchResults] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const [showSearchDropdown, setShowSearchDropdown] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [filteredUsers, setFilteredUsers] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const [matchSearchTerm, setMatchSearchTerm] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [userBook, setUserBook] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [userBookData, setUserBookData] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          const normalizeNumber = (value) => {
            const n = Number(value);
            return Number.isFinite(n) ? n : 0;
          };
          const normalizeUser = (user) => {
            const base = user && typeof user === "object" ? user : {};
            return {
              ...base,
              balance: normalizeNumber(base.balance),
              exposure: normalizeNumber(base.exposure),
              availableBalance: normalizeNumber(base.availableBalance),
              downlineBalance: normalizeNumber(base.downlineBalance),
            };
          };
          const normalizeAnalysisData = (raw) => {
            const base = raw && typeof raw === "object" ? raw : {};
            const users = Array.isArray(base.users)
              ? base.users.map((user) => normalizeUser(user))
              : [];
            return {
              ...base,
              totalDeposit: normalizeNumber(base.totalDeposit),
              totalWithdraw: normalizeNumber(base.totalWithdraw),
              totalProfit: normalizeNumber(base.totalProfit),
              totalLoss: normalizeNumber(base.totalLoss),
              users,
            };
          };
          const normalizeUserDetailsData = (raw) => {
            const base = raw && typeof raw === "object" ? raw : {};
            const deposits = Array.isArray(base.deposits)
              ? base.deposits.map((deposit) => ({
                  ...(deposit && typeof deposit === "object" ? deposit : {}),
                  amount: normalizeNumber(
                    deposit && typeof deposit === "object"
                      ? deposit.amount
                      : 0
                  ),
                }))
              : [];
            const withdraws = Array.isArray(base.withdraws)
              ? base.withdraws.map((withdraw) => ({
                  ...(withdraw && typeof withdraw === "object" ? withdraw : {}),
                  amount: normalizeNumber(
                    withdraw && typeof withdraw === "object"
                      ? withdraw.amount
                      : 0
                  ),
                }))
              : [];
            const bets = Array.isArray(base.bets)
              ? base.bets.map((bet) => ({
                  ...(bet && typeof bet === "object" ? bet : {}),
                  stack: normalizeNumber(
                    bet && typeof bet === "object" ? bet.stack : 0
                  ),
                  profitLoss: normalizeNumber(
                    bet && typeof bet === "object" ? bet.profitLoss : 0
                  ),
                  totalStake: normalizeNumber(
                    bet && typeof bet === "object" ? bet.totalStake : 0
                  ),
                  totalPnl: normalizeNumber(
                    bet && typeof bet === "object" ? bet.totalPnl : 0
                  ),
                }))
              : [];
            return {
              ...base,
              deposits,
              withdraws,
              bets,
            };
          };
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            fetchAnalysisData();
            setuserresponse(); // Fetch user book data
          }, []);
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (analysisData.users) {
              setFilteredUsers(analysisData.users);
            }
          }, [analysisData.users]);

          // Apply blur effect to body when modal is open
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (isModalOpen) {
              document.body.style.overflow = "hidden";
              const mainContent = document.querySelector(".container-fluid");
              if (
                mainContent &&
                mainContent !==
                  document.querySelector(
                    ".ReactModal__Content .container-fluid"
                  )
              ) {
                mainContent.classList.add("modal-blur-background");
              }
            } else {
              document.body.style.overflow = "unset";
              const blurredElements = document.querySelectorAll(
                ".modal-blur-background"
              );
              blurredElements.forEach((el) =>
                el.classList.remove("modal-blur-background")
              );
            }
            return () => {
              document.body.style.overflow = "unset";
              const blurredElements = document.querySelectorAll(
                ".modal-blur-background"
              );
              blurredElements.forEach((el) =>
                el.classList.remove("modal-blur-background")
              );
            };
          }, [isModalOpen]);

          // Console log userBookData whenever it updates
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (Object.keys(userBookData).length > 0) {
              Object.entries(userBookData).forEach(([key, value]) => {
                console.log(`   📋 ${key}:`, value);
              });
            }
          }, [userBookData]);
          const handleSearch = async (term) => {
            setSearchTerm(term);
            if (term.length < 2) {
              setSearchResults([]);
              setShowSearchDropdown(false);
              setFilteredUsers(analysisData.users);
              return;
            }
            try {
              const response =
                await _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ].searchUsers(term);
              if (response.data && !response.data.error) {
                const searchData = Array.isArray(response.data.data)
                  ? response.data.data.map((user) => normalizeUser(user))
                  : [];
                // Sort search results by most recent activity
                if (Array.isArray(searchData)) {
                  searchData.sort((a, b) => {
                    const aDate = new Date(
                      a.updatedAt || a.createdAt || 0
                    ).getTime();
                    const bDate = new Date(
                      b.updatedAt || b.createdAt || 0
                    ).getTime();
                    return bDate - aDate; // Most recent first
                  });
                }
                setSearchResults(searchData);
                setShowSearchDropdown(true);
              } else {
                setSearchResults([]);
                setShowSearchDropdown(false);
              }
            } catch (error) {
              console.error("Error searching users:", error);
              setSearchResults([]);
              setShowSearchDropdown(false);
            }
          };
          const handleUserSelect = (user) => {
            setFilteredUsers([user]);
            setSearchTerm(user.username);
            setShowSearchDropdown(false);
          };
          const clearSearch = () => {
            setSearchTerm("");
            setSearchResults([]);
            setShowSearchDropdown(false);
            setFilteredUsers(analysisData.users);
          };
          const handleMatchSearch = (term) => {
            setMatchSearchTerm(term);
            // This will be used to filter matches in the match list modal
          };
          const setuserresponse = () => {
            if (!userBook) {
              _services_user_service__WEBPACK_IMPORTED_MODULE_6__["default"]
                .getUserBook()
                .then((res) => {
                  const data =
                    res &&
                    res.data &&
                    res.data.data &&
                    typeof res.data.data === "object"
                      ? res.data.data
                      : {};
                  setUserBookData(data);

                  // Console all userBookData properties as shown in match-setting.tsx
                  Object.keys(data).forEach((key) => {
                    console.log(`   ${key}:`, data[key]);
                  });
                  setUserBook(true);
                })
                .catch((error) => {
                  console.error("❌ Error fetching user book data:", error);
                  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                    "Failed to fetch user book data"
                  );
                });
            } else {
              setUserBook(false);
            }
          };
          const fetchAnalysisData = async () => {
            try {
              setLoading(true);
              const response =
                await _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ].getAnalysisData();
              if (response.data && !response.data.error) {
                const data = normalizeAnalysisData(response.data.data);
                // Sort users by most recent activity (if they have updatedAt/createdAt fields)
                if (data.users && Array.isArray(data.users)) {
                  data.users.sort((a, b) => {
                    // Sort by updatedAt first, then createdAt, then by username as fallback
                    const aDate = new Date(
                      a.updatedAt || a.createdAt || 0
                    ).getTime();
                    const bDate = new Date(
                      b.updatedAt || b.createdAt || 0
                    ).getTime();
                    return bDate - aDate; // Most recent first
                  });
                }
                setAnalysisData(data);
                setFilteredUsers(data.users);
              } else {
                var _response$data;
                setAnalysisData(
                  normalizeAnalysisData({
                    totalDeposit: 0,
                    totalWithdraw: 0,
                    totalProfit: 0,
                    totalLoss: 0,
                    users: [],
                  })
                );
                setFilteredUsers([]);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  ((_response$data = response.data) === null ||
                  _response$data === void 0
                    ? void 0
                    : _response$data.message) || "Failed to fetch analysis data"
                );
              }
            } catch (error) {
              console.error("Error fetching analysis data:", error);
              setAnalysisData(
                normalizeAnalysisData({
                  totalDeposit: 0,
                  totalWithdraw: 0,
                  totalProfit: 0,
                  totalLoss: 0,
                  users: [],
                })
              );
              setFilteredUsers([]);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Error fetching analysis data"
              );
            } finally {
              setLoading(false);
            }
          };
          const handleViewDetails = async (user, type) => {
            try {
              setSelectedUser(user);
              setModalType(type);
              setIsModalOpen(true);
              setUserDetails(null); // Clear previous data

              // Fetch data in background without blocking UI
              const response =
                await _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ].getUserDetails(user._id, type);
              if (response.data && !response.data.error) {
                const userDetailsData = normalizeUserDetailsData(
                  response.data.data
                );
                setUserDetails(userDetailsData);

                // If it's bet type, create unique match list
                if (
                  type === "bet" &&
                  userDetailsData.bets &&
                  userDetailsData.bets.length
                ) {
                  const uniqueMatches = userDetailsData.bets.reduce(
                    (acc, bet) => {
                      const existingMatch = acc.find(
                        (match) => match.matchName === bet.matchName
                      );
                      if (!existingMatch && bet.matchName) {
                        acc.push({
                          matchName: bet.matchName,
                          totalBets: userDetailsData.bets.filter(
                            (b) => b.matchName === bet.matchName
                          ).length,
                          totalStake: userDetailsData.bets
                            .filter((b) => b.matchName === bet.matchName)
                            .reduce((sum, b) => sum + (b.stack || 0), 0),
                          totalPnl: userDetailsData.bets
                            .filter((b) => b.matchName === bet.matchName)
                            .reduce((sum, b) => sum + (b.profitLoss || 0), 0),
                        });
                      }
                      return acc;
                    },
                    []
                  );
                  setMatchList(uniqueMatches);
                } else {
                  setMatchList([]);
                }
              } else {
                var _response$data2;
                setUserDetails(
                  normalizeUserDetailsData({
                    deposits: [],
                    withdraws: [],
                    bets: [],
                  })
                );
                setMatchList([]);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  ((_response$data2 = response.data) === null ||
                  _response$data2 === void 0
                    ? void 0
                    : _response$data2.message) || "Failed to fetch user details"
                );
              }
            } catch (error) {
              console.error("Error fetching user details:", error);
              setUserDetails(
                normalizeUserDetailsData({
                  deposits: [],
                  withdraws: [],
                  bets: [],
                })
              );
              setMatchList([]);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Error fetching user details"
              );
            }
          };
          const closeModal = () => {
            setIsModalOpen(false);
            setSelectedUser(null);
            setUserDetails(null);
            setSelectedMatch(null);
            setMatchList([]);
            setMatchSearchTerm("");
          };
          const handleMatchSelect = (matchName) => {
            setSelectedMatch(matchName);
          };
          const handleBackToMatches = () => {
            setSelectedMatch(null);
          };
          if (react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile) {
            var _userBookData$availab,
              _userBookData$downlin,
              _userDetails$deposits,
              _userDetails$deposits2,
              _userDetails$withdraw,
              _userDetails$withdraw2,
              _userDetails$bets;
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
              "div",
              {
                className: "container-fluid",
                children: [
                  _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ].subheader("Analysis Profit & Loss"),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                    "div",
                    {
                      className: "row",
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                        "div",
                        {
                          className: "col-12",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "div",
                            {
                              className: "card",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                  "div",
                                  {
                                    className: "card-header",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        "h5",
                                        {
                                          children: "Profit & Loss Analysis",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 304,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        "div",
                                        {
                                          className: "mt-3 position-relative",
                                          style: {
                                            width: "fit-content",
                                          },
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                className: "input-group",
                                                style: {
                                                  width: "180px",
                                                },
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "input",
                                                    {
                                                      type: "text",
                                                      className:
                                                        "form-control form-control-sm search-input-permanent",
                                                      placeholder:
                                                        "Search username...",
                                                      value: searchTerm,
                                                      onChange: (e) =>
                                                        handleSearch(
                                                          e.target.value
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 308,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  searchTerm &&
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "button",
                                                      {
                                                        className:
                                                          "btn btn-outline-secondary btn-sm",
                                                        type: "button",
                                                        onClick: clearSearch,
                                                        children: "\xD7",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 316,
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
                                                lineNumber: 307,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            showSearchDropdown &&
                                              searchResults.length > 0 &&
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "div",
                                                {
                                                  className:
                                                    "position-absolute bg-white border rounded shadow-sm mt-1",
                                                  style: {
                                                    zIndex: 1000,
                                                    width: "180px",
                                                  },
                                                  children: searchResults.map(
                                                    (user) =>
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "p-2 border-bottom cursor-pointer hover-bg-light",
                                                          onClick: () =>
                                                            handleUserSelect(
                                                              user
                                                            ),
                                                          style: {
                                                            cursor: "pointer",
                                                          },
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                              "div",
                                                              {
                                                                children:
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        user.username,
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 336,
                                                                      columnNumber: 32,
                                                                    },
                                                                    undefined
                                                                  ),
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 336,
                                                                columnNumber: 27,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                              "small",
                                                              {
                                                                className:
                                                                  "text-muted",
                                                                children: [
                                                                  "Balance: \u20B9",
                                                                  user.balance.toLocaleString(),
                                                                ],
                                                              },
                                                              void 0,
                                                              true,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 337,
                                                                columnNumber: 27,
                                                              },
                                                              undefined
                                                            ),
                                                          ],
                                                        },
                                                        user._id,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 330,
                                                          columnNumber: 25,
                                                        },
                                                        undefined
                                                      )
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 328,
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
                                          lineNumber: 306,
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
                                    lineNumber: 303,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                  "div",
                                  {
                                    className: "card-body",
                                    children: loading
                                      ? /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          "div",
                                          {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                className: "spinner-border",
                                                role: "status",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "span",
                                                  {
                                                    className: "sr-only",
                                                    children: "Loading...",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 348,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 347,
                                                columnNumber: 21,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 346,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        )
                                      : /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,
                                          {
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row mb-3 mt-3",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-12",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "card bg-info text-white",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "card-body text-center",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "h6",
                                                                      {
                                                                        className:
                                                                          "card-title mb-3",
                                                                        children:
                                                                          "\uD83D\uDCCA Admin Balance Details",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 358,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "row justify-content-center",
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "col-6 mb-3",
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "small",
                                                                                      {
                                                                                        children:
                                                                                          "Admin Balance:",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 361,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "div",
                                                                                      {
                                                                                        style:
                                                                                          {
                                                                                            fontSize:
                                                                                              "1.25rem",
                                                                                            fontWeight:
                                                                                              "bold",
                                                                                          },
                                                                                        children:
                                                                                          [
                                                                                            "\u20B9",
                                                                                            ((_userBookData$availab =
                                                                                              userBookData.availableB) ===
                                                                                              null ||
                                                                                            _userBookData$availab ===
                                                                                              void 0
                                                                                              ? void 0
                                                                                              : _userBookData$availab.toFixed(
                                                                                                  2
                                                                                                )) ||
                                                                                              "0.00",
                                                                                          ],
                                                                                      },
                                                                                      void 0,
                                                                                      true,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 362,
                                                                                        columnNumber: 33,
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
                                                                                lineNumber: 360,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "col-6 mb-3",
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "small",
                                                                                      {
                                                                                        children:
                                                                                          "Balance Down:",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 365,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "div",
                                                                                      {
                                                                                        style:
                                                                                          {
                                                                                            fontSize:
                                                                                              "1.25rem",
                                                                                            fontWeight:
                                                                                              "bold",
                                                                                          },
                                                                                        children:
                                                                                          [
                                                                                            "\u20B9",
                                                                                            ((_userBookData$downlin =
                                                                                              userBookData.downlineob) ===
                                                                                              null ||
                                                                                            _userBookData$downlin ===
                                                                                              void 0
                                                                                              ? void 0
                                                                                              : _userBookData$downlin.toFixed(
                                                                                                  2
                                                                                                )) ||
                                                                                              "0.00",
                                                                                          ],
                                                                                      },
                                                                                      void 0,
                                                                                      true,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 366,
                                                                                        columnNumber: 33,
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
                                                                                lineNumber: 364,
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
                                                                        lineNumber: 359,
                                                                        columnNumber: 29,
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
                                                                  lineNumber: 357,
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
                                                            lineNumber: 356,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 355,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 354,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "row mb-4 mt-4",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-6 mb-3",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "card bg-primary text-white",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "card-body text-center",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "h6",
                                                                        {
                                                                          children:
                                                                            "Total Deposit",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 379,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "h4",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "\u20B9",
                                                                              analysisData.totalDeposit.toLocaleString(),
                                                                            ],
                                                                        },
                                                                        void 0,
                                                                        true,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 380,
                                                                          columnNumber: 29,
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
                                                                    lineNumber: 378,
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
                                                              lineNumber: 377,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 376,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-6 mb-3",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "card bg-warning text-white",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "card-body text-center",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "h6",
                                                                        {
                                                                          children:
                                                                            "Total Withdraw",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 387,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "h4",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "\u20B9",
                                                                              analysisData.totalWithdraw.toLocaleString(),
                                                                            ],
                                                                        },
                                                                        void 0,
                                                                        true,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 388,
                                                                          columnNumber: 29,
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
                                                                    lineNumber: 386,
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
                                                              lineNumber: 385,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 384,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-6 mb-3",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "card bg-success text-white",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "card-body text-center",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "h6",
                                                                        {
                                                                          children:
                                                                            "Total Profit",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 395,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "h4",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "\u20B9",
                                                                              (() => {
                                                                                const netAmount =
                                                                                  analysisData.totalDeposit -
                                                                                  analysisData.totalWithdraw;
                                                                                return netAmount >
                                                                                  0
                                                                                  ? netAmount.toLocaleString()
                                                                                  : "0";
                                                                              })(),
                                                                            ],
                                                                        },
                                                                        void 0,
                                                                        true,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 396,
                                                                          columnNumber: 29,
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
                                                                    lineNumber: 394,
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
                                                              lineNumber: 393,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 392,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className: "col-6 mb-3",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "card bg-danger text-white",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "card-body text-center",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "h6",
                                                                        {
                                                                          children:
                                                                            "Total Loss",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 406,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "h4",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "\u20B9",
                                                                              (() => {
                                                                                const netAmount =
                                                                                  analysisData.totalDeposit -
                                                                                  analysisData.totalWithdraw;
                                                                                return netAmount <
                                                                                  0
                                                                                  ? Math.abs(
                                                                                      netAmount
                                                                                    ).toLocaleString()
                                                                                  : "0";
                                                                              })(),
                                                                            ],
                                                                        },
                                                                        void 0,
                                                                        true,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 407,
                                                                          columnNumber: 29,
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
                                                                    lineNumber: 405,
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
                                                              lineNumber: 404,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 403,
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
                                                  lineNumber: 375,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "table-responsive",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "table",
                                                    {
                                                      className:
                                                        "table table-striped",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "thead",
                                                          {
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "tr",
                                                                {
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "th",
                                                                      {
                                                                        children:
                                                                          "Username",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 421,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "th",
                                                                      {
                                                                        children:
                                                                          "Balance",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 422,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
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
                                                                        lineNumber: 423,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "th",
                                                                      {
                                                                        children:
                                                                          "Available",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 424,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "th",
                                                                      {
                                                                        children:
                                                                          "Phone",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 425,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "th",
                                                                      {
                                                                        children:
                                                                          "Deposit",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 426,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "th",
                                                                      {
                                                                        children:
                                                                          "Withdraw",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 427,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "th",
                                                                      {
                                                                        children:
                                                                          "Bets",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 428,
                                                                        columnNumber: 29,
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
                                                                  lineNumber: 420,
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
                                                            lineNumber: 419,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "tbody",
                                                          {
                                                            children:
                                                              filteredUsers ===
                                                                null ||
                                                              filteredUsers ===
                                                                void 0
                                                                ? void 0
                                                                : filteredUsers.map(
                                                                    (user) => {
                                                                      var _user$exposure;
                                                                      return /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "tr",
                                                                        {
                                                                          children:
                                                                            [
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "td",
                                                                                {
                                                                                  children:
                                                                                    user.username,
                                                                                },
                                                                                void 0,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 434,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "td",
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      "\u20B9",
                                                                                      user.balance.toLocaleString(),
                                                                                    ],
                                                                                },
                                                                                void 0,
                                                                                true,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 435,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "td",
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      "\u20B9",
                                                                                      ((_user$exposure =
                                                                                        user.exposure) ===
                                                                                        null ||
                                                                                      _user$exposure ===
                                                                                        void 0
                                                                                        ? void 0
                                                                                        : _user$exposure.toLocaleString()) ||
                                                                                        "0",
                                                                                    ],
                                                                                },
                                                                                void 0,
                                                                                true,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 436,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "td",
                                                                                {
                                                                                  children:
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "span",
                                                                                      {
                                                                                        className:
                                                                                          user.balance -
                                                                                            (user.exposure ||
                                                                                              0) >=
                                                                                          0
                                                                                            ? "text-success"
                                                                                            : "text-danger",
                                                                                        children:
                                                                                          [
                                                                                            "\u20B9",
                                                                                            (
                                                                                              user.balance -
                                                                                              (user.exposure ||
                                                                                                0)
                                                                                            ).toLocaleString(),
                                                                                          ],
                                                                                      },
                                                                                      void 0,
                                                                                      true,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 438,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                },
                                                                                void 0,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 437,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "td",
                                                                                {
                                                                                  children:
                                                                                    user.phone ||
                                                                                    "-",
                                                                                },
                                                                                void 0,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 442,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "td",
                                                                                {
                                                                                  children:
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "button",
                                                                                      {
                                                                                        className:
                                                                                          "btn btn-sm btn-primary",
                                                                                        onClick:
                                                                                          () =>
                                                                                            handleViewDetails(
                                                                                              user,
                                                                                              "deposit"
                                                                                            ),
                                                                                        children:
                                                                                          "View",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 444,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                },
                                                                                void 0,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 443,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "td",
                                                                                {
                                                                                  children:
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "button",
                                                                                      {
                                                                                        className:
                                                                                          "btn btn-sm btn-warning",
                                                                                        onClick:
                                                                                          () =>
                                                                                            handleViewDetails(
                                                                                              user,
                                                                                              "withdraw"
                                                                                            ),
                                                                                        children:
                                                                                          "View",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 452,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                },
                                                                                void 0,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 451,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "td",
                                                                                {
                                                                                  children:
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "button",
                                                                                      {
                                                                                        className:
                                                                                          "btn btn-sm btn-success",
                                                                                        onClick:
                                                                                          () =>
                                                                                            handleViewDetails(
                                                                                              user,
                                                                                              "bet"
                                                                                            ),
                                                                                        children:
                                                                                          "View",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 460,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                },
                                                                                void 0,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 459,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                            ],
                                                                        },
                                                                        user._id,
                                                                        true,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 433,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      );
                                                                    }
                                                                  ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 431,
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
                                                      lineNumber: 418,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 417,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true
                                        ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 344,
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
                              lineNumber: 302,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 301,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                    react_modal__WEBPACK_IMPORTED_MODULE_2___default(),
                    {
                      isOpen: isModalOpen,
                      onRequestClose: closeModal,
                      className: "modal-dialog modal-xl",
                      overlayClassName: "modal-backdrop",
                      style: {
                        overlay: {
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.95)",
                          backdropFilter: "blur(5px)",
                          WebkitBackdropFilter: "blur(5px)",
                          zIndex: 999999,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                        content: {
                          position: "relative",
                          top: "auto",
                          left: "auto",
                          right: "auto",
                          bottom: "auto",
                          border: "none",
                          background: "white",
                          borderRadius: "8px",
                          outline: "none",
                          padding: "0",
                          maxWidth: "90vw",
                          width: "1200px",
                          maxHeight: "90vh",
                          overflow: "auto",
                          zIndex: 1000000,
                          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                        },
                      },
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                        "div",
                        {
                          className: "modal-content",
                          style: {
                            border: "none",
                            borderRadius: "8px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                            margin: "0",
                            height: "auto",
                          },
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                              "div",
                              {
                                className: "modal-header",
                                style: {
                                  borderBottom: "1px solid #dee2e6",
                                  padding: "0.75rem 1rem",
                                  margin: "0",
                                  backgroundColor: "#007bff",
                                  color: "white",
                                },
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                    "h5",
                                    {
                                      className: "modal-title",
                                      children: [
                                        modalType === "deposit"
                                          ? "Deposit History"
                                          : modalType === "withdraw"
                                          ? "Withdraw History"
                                          : selectedMatch
                                          ? `Bet History - ${selectedMatch}`
                                          : "Match List",
                                        " - ",
                                        selectedUser === null ||
                                        selectedUser === void 0
                                          ? void 0
                                          : selectedUser.username,
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 522,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                    "button",
                                    {
                                      type: "button",
                                      className: "close",
                                      onClick: closeModal,
                                      style: {
                                        color: "white",
                                        opacity: 1,
                                      },
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        "span",
                                        {
                                          children: "\xD7",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 533,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 527,
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
                                lineNumber: 521,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                              "div",
                              {
                                className: "modal-body",
                                style: {
                                  padding: "1rem",
                                  maxHeight: "65vh",
                                  overflowY: "auto",
                                  margin: "0",
                                },
                                children: userDetails
                                  ? /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "div",
                                      {
                                        children: [
                                          modalType === "deposit" &&
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "alert alert-info mb-3",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "h6",
                                                          {
                                                            className: "mb-0",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "strong",
                                                                {
                                                                  children: [
                                                                    "Total Approved Deposits: \u20B9",
                                                                    ((_userDetails$deposits =
                                                                      userDetails.deposits) ===
                                                                      null ||
                                                                    _userDetails$deposits ===
                                                                      void 0
                                                                      ? void 0
                                                                      : _userDetails$deposits
                                                                          .filter(
                                                                            (
                                                                              d
                                                                            ) =>
                                                                              d.status ===
                                                                              "approved"
                                                                          )
                                                                          .reduce(
                                                                            (
                                                                              sum,
                                                                              d
                                                                            ) =>
                                                                              sum +
                                                                              (d.amount ||
                                                                                0),
                                                                            0
                                                                          )
                                                                          .toLocaleString()) ||
                                                                      "0",
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 544,
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
                                                            lineNumber: 543,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 542,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "table-responsive",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "table",
                                                          {
                                                            className:
                                                              "table table-striped",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "thead",
                                                                {
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "tr",
                                                                      {
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Date",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 556,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Amount",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 557,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Status",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 558,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "UTR No",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 559,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Account Type",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 560,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Remark",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 561,
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
                                                                        lineNumber: 555,
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
                                                                  lineNumber: 554,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "tbody",
                                                                {
                                                                  children:
                                                                    (_userDetails$deposits2 =
                                                                      userDetails.deposits) ===
                                                                      null ||
                                                                    _userDetails$deposits2 ===
                                                                      void 0
                                                                      ? void 0
                                                                      : _userDetails$deposits2.map(
                                                                          (
                                                                            deposit,
                                                                            index
                                                                          ) => {
                                                                            var _deposit$amount;
                                                                            return /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "tr",
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          new Date(
                                                                                            deposit.createdAt
                                                                                          ).toLocaleDateString(),
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 567,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            "\u20B9",
                                                                                            (_deposit$amount =
                                                                                              deposit.amount) ===
                                                                                              null ||
                                                                                            _deposit$amount ===
                                                                                              void 0
                                                                                              ? void 0
                                                                                              : _deposit$amount.toLocaleString(),
                                                                                          ],
                                                                                      },
                                                                                      void 0,
                                                                                      true,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 568,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ (0,
                                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                            "span",
                                                                                            {
                                                                                              className: `badge ${
                                                                                                deposit.status ===
                                                                                                "approved"
                                                                                                  ? "bg-success"
                                                                                                  : deposit.status ===
                                                                                                    "rejected"
                                                                                                  ? "bg-danger"
                                                                                                  : "bg-warning"
                                                                                              }`,
                                                                                              children:
                                                                                                deposit.status,
                                                                                            },
                                                                                            void 0,
                                                                                            false,
                                                                                            {
                                                                                              fileName:
                                                                                                _jsxFileName,
                                                                                              lineNumber: 570,
                                                                                              columnNumber: 35,
                                                                                            },
                                                                                            undefined
                                                                                          ),
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 569,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          deposit.utrno ||
                                                                                          "-",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 576,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          deposit.accountType ||
                                                                                          "-",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 577,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          deposit.remark ||
                                                                                          "-",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 578,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                              index,
                                                                              true,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 566,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            );
                                                                          }
                                                                        ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 564,
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
                                                            lineNumber: 553,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        (!userDetails.deposits ||
                                                          userDetails.deposits
                                                            .length === 0) &&
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-center",
                                                              children:
                                                                "No deposits found",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 584,
                                                              columnNumber: 27,
                                                            },
                                                            undefined
                                                          ),
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 552,
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
                                                lineNumber: 540,
                                                columnNumber: 21,
                                              },
                                              undefined
                                            ),
                                          modalType === "withdraw" &&
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "alert alert-warning mb-3",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "h6",
                                                          {
                                                            className: "mb-0",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "strong",
                                                                {
                                                                  children: [
                                                                    "Total Approved Withdrawals: \u20B9",
                                                                    ((_userDetails$withdraw =
                                                                      userDetails.withdrawals) ===
                                                                      null ||
                                                                    _userDetails$withdraw ===
                                                                      void 0
                                                                      ? void 0
                                                                      : _userDetails$withdraw
                                                                          .filter(
                                                                            (
                                                                              w
                                                                            ) =>
                                                                              w.status ===
                                                                              "approved"
                                                                          )
                                                                          .reduce(
                                                                            (
                                                                              sum,
                                                                              w
                                                                            ) =>
                                                                              sum +
                                                                              (w.amount ||
                                                                                0),
                                                                            0
                                                                          )
                                                                          .toLocaleString()) ||
                                                                      "0",
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 595,
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
                                                            lineNumber: 594,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 593,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "table-responsive",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "table",
                                                          {
                                                            className:
                                                              "table table-striped",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "thead",
                                                                {
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "tr",
                                                                      {
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Date",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 607,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Amount",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 608,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Status",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 609,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Account Type",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 610,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "th",
                                                                              {
                                                                                children:
                                                                                  "Remark",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 611,
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
                                                                        lineNumber: 606,
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
                                                                  lineNumber: 605,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "tbody",
                                                                {
                                                                  children:
                                                                    (_userDetails$withdraw2 =
                                                                      userDetails.withdrawals) ===
                                                                      null ||
                                                                    _userDetails$withdraw2 ===
                                                                      void 0
                                                                      ? void 0
                                                                      : _userDetails$withdraw2.map(
                                                                          (
                                                                            withdraw,
                                                                            index
                                                                          ) => {
                                                                            var _withdraw$amount;
                                                                            return /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "tr",
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          new Date(
                                                                                            withdraw.createdAt
                                                                                          ).toLocaleDateString(),
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 617,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            "\u20B9",
                                                                                            (_withdraw$amount =
                                                                                              withdraw.amount) ===
                                                                                              null ||
                                                                                            _withdraw$amount ===
                                                                                              void 0
                                                                                              ? void 0
                                                                                              : _withdraw$amount.toLocaleString(),
                                                                                          ],
                                                                                      },
                                                                                      void 0,
                                                                                      true,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 618,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ (0,
                                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                            "span",
                                                                                            {
                                                                                              className: `badge ${
                                                                                                withdraw.status ===
                                                                                                "approved"
                                                                                                  ? "bg-success"
                                                                                                  : withdraw.status ===
                                                                                                    "rejected"
                                                                                                  ? "bg-danger"
                                                                                                  : "bg-warning"
                                                                                              }`,
                                                                                              children:
                                                                                                withdraw.status,
                                                                                            },
                                                                                            void 0,
                                                                                            false,
                                                                                            {
                                                                                              fileName:
                                                                                                _jsxFileName,
                                                                                              lineNumber: 620,
                                                                                              columnNumber: 35,
                                                                                            },
                                                                                            undefined
                                                                                          ),
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 619,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          withdraw.accountType ||
                                                                                          "-",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 626,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "td",
                                                                                      {
                                                                                        children:
                                                                                          withdraw.remark ||
                                                                                          "-",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 627,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                              index,
                                                                              true,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 616,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            );
                                                                          }
                                                                        ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 614,
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
                                                            lineNumber: 604,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        (!userDetails.withdrawals ||
                                                          userDetails
                                                            .withdrawals
                                                            .length === 0) &&
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-center",
                                                              children:
                                                                "No withdrawals found",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 633,
                                                              columnNumber: 27,
                                                            },
                                                            undefined
                                                          ),
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 603,
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
                                                lineNumber: 591,
                                                columnNumber: 21,
                                              },
                                              undefined
                                            ),
                                          modalType === "bet" &&
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                children: !selectedMatch
                                                  ? /*#__PURE__*/
                                                    // Show match list
                                                    (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "div",
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "alert alert-info mb-3",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "h6",
                                                                  {
                                                                    className:
                                                                      "mb-0",
                                                                    children:
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Select a match to view bets",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 646,
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
                                                                    lineNumber: 645,
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
                                                              lineNumber: 644,
                                                              columnNumber: 27,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className: "mb-3",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "input",
                                                                  {
                                                                    type: "text",
                                                                    className:
                                                                      "form-control",
                                                                    placeholder:
                                                                      "Search matches...",
                                                                    value:
                                                                      matchSearchTerm,
                                                                    onChange: (
                                                                      e
                                                                    ) =>
                                                                      handleMatchSearch(
                                                                        e.target
                                                                          .value
                                                                      ),
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 652,
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
                                                              lineNumber: 651,
                                                              columnNumber: 27,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "table-responsive",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "table",
                                                                  {
                                                                    className:
                                                                      "table table-striped",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "thead",
                                                                        {
                                                                          children:
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "tr",
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Match Name",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 664,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Total Bets",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 665,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Total Stake",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 666,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Total P&L",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 667,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Action",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 668,
                                                                                        columnNumber: 35,
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
                                                                                lineNumber: 663,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 662,
                                                                          columnNumber: 31,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "tbody",
                                                                        {
                                                                          children:
                                                                            matchList ===
                                                                              null ||
                                                                            matchList ===
                                                                              void 0
                                                                              ? void 0
                                                                              : matchList
                                                                                  .filter(
                                                                                    (
                                                                                      match
                                                                                    ) =>
                                                                                      !matchSearchTerm ||
                                                                                      match.matchName
                                                                                        .toLowerCase()
                                                                                        .includes(
                                                                                          matchSearchTerm.toLowerCase()
                                                                                        )
                                                                                  )
                                                                                  .map(
                                                                                    (
                                                                                      match,
                                                                                      index
                                                                                    ) => {
                                                                                      var _match$totalStake,
                                                                                        _match$totalPnl;
                                                                                      return /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                        "tr",
                                                                                        {
                                                                                          children:
                                                                                            [
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    match.matchName,
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 676,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    match.totalBets,
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 677,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    [
                                                                                                      "\u20B9",
                                                                                                      ((_match$totalStake =
                                                                                                        match.totalStake) ===
                                                                                                        null ||
                                                                                                      _match$totalStake ===
                                                                                                        void 0
                                                                                                        ? void 0
                                                                                                        : _match$totalStake.toLocaleString()) ||
                                                                                                        "0",
                                                                                                    ],
                                                                                                },
                                                                                                void 0,
                                                                                                true,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 678,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    /*#__PURE__*/ (0,
                                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          match.totalPnl >
                                                                                                          0
                                                                                                            ? "text-success"
                                                                                                            : match.totalPnl <
                                                                                                              0
                                                                                                            ? "text-danger"
                                                                                                            : "text-muted",
                                                                                                        children:
                                                                                                          [
                                                                                                            "\u20B9",
                                                                                                            ((_match$totalPnl =
                                                                                                              match.totalPnl) ===
                                                                                                              null ||
                                                                                                            _match$totalPnl ===
                                                                                                              void 0
                                                                                                              ? void 0
                                                                                                              : _match$totalPnl.toLocaleString()) ||
                                                                                                              "0",
                                                                                                          ],
                                                                                                      },
                                                                                                      void 0,
                                                                                                      true,
                                                                                                      {
                                                                                                        fileName:
                                                                                                          _jsxFileName,
                                                                                                        lineNumber: 680,
                                                                                                        columnNumber: 39,
                                                                                                      },
                                                                                                      undefined
                                                                                                    ),
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 679,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    /*#__PURE__*/ (0,
                                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                      "button",
                                                                                                      {
                                                                                                        className:
                                                                                                          "btn btn-sm btn-primary",
                                                                                                        onClick:
                                                                                                          () =>
                                                                                                            handleMatchSelect(
                                                                                                              match.matchName
                                                                                                            ),
                                                                                                        children:
                                                                                                          "View Bets",
                                                                                                      },
                                                                                                      void 0,
                                                                                                      false,
                                                                                                      {
                                                                                                        fileName:
                                                                                                          _jsxFileName,
                                                                                                        lineNumber: 685,
                                                                                                        columnNumber: 39,
                                                                                                      },
                                                                                                      undefined
                                                                                                    ),
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 684,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                            ],
                                                                                        },
                                                                                        index,
                                                                                        true,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 675,
                                                                                          columnNumber: 35,
                                                                                        },
                                                                                        undefined
                                                                                      );
                                                                                    }
                                                                                  ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 671,
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
                                                                    lineNumber: 661,
                                                                    columnNumber: 29,
                                                                  },
                                                                  undefined
                                                                ),
                                                                (!matchList ||
                                                                  matchList.length ===
                                                                    0) &&
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-center",
                                                                      children:
                                                                        "No matches found",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 697,
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
                                                              lineNumber: 660,
                                                              columnNumber: 27,
                                                            },
                                                            undefined
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 643,
                                                        columnNumber: 25,
                                                      },
                                                      undefined
                                                    )
                                                  : /*#__PURE__*/
                                                    // Show bets for selected match
                                                    (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "div",
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "d-flex justify-content-between align-items-center mb-3",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "h6",
                                                                  {
                                                                    className:
                                                                      "mb-0",
                                                                    children: [
                                                                      "Bets for: ",
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            selectedMatch,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 705,
                                                                          columnNumber: 60,
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
                                                                    lineNumber: 705,
                                                                    columnNumber: 29,
                                                                  },
                                                                  undefined
                                                                ),
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "button",
                                                                  {
                                                                    className:
                                                                      "btn btn-sm btn-secondary",
                                                                    onClick:
                                                                      handleBackToMatches,
                                                                    children:
                                                                      "\u2190 Back to Matches",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 706,
                                                                    columnNumber: 29,
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
                                                              lineNumber: 704,
                                                              columnNumber: 27,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "table-responsive",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "table",
                                                                  {
                                                                    className:
                                                                      "table table-striped",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "thead",
                                                                        {
                                                                          children:
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "tr",
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Date",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 717,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Market",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 718,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Selection",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 719,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Odds",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 720,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Stake",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 721,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "P&L",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 722,
                                                                                        columnNumber: 35,
                                                                                      },
                                                                                      undefined
                                                                                    ),
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "th",
                                                                                      {
                                                                                        children:
                                                                                          "Status",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 723,
                                                                                        columnNumber: 35,
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
                                                                                lineNumber: 716,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 715,
                                                                          columnNumber: 31,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "tbody",
                                                                        {
                                                                          children:
                                                                            (_userDetails$bets =
                                                                              userDetails.bets) ===
                                                                              null ||
                                                                            _userDetails$bets ===
                                                                              void 0
                                                                              ? void 0
                                                                              : _userDetails$bets
                                                                                  .filter(
                                                                                    (
                                                                                      bet
                                                                                    ) =>
                                                                                      bet.matchName ===
                                                                                      selectedMatch
                                                                                  )
                                                                                  .map(
                                                                                    (
                                                                                      bet,
                                                                                      index
                                                                                    ) => {
                                                                                      var _bet$stack,
                                                                                        _bet$profitLoss;
                                                                                      return /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                        "tr",
                                                                                        {
                                                                                          children:
                                                                                            [
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    new Date(
                                                                                                      bet.createdAt
                                                                                                    ).toLocaleDateString(),
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 729,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    bet.marketName ||
                                                                                                    "-",
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 730,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    bet.selectionName ||
                                                                                                    "-",
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 731,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    bet.odds ||
                                                                                                    "-",
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 732,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    [
                                                                                                      "\u20B9",
                                                                                                      ((_bet$stack =
                                                                                                        bet.stack) ===
                                                                                                        null ||
                                                                                                      _bet$stack ===
                                                                                                        void 0
                                                                                                        ? void 0
                                                                                                        : _bet$stack.toLocaleString()) ||
                                                                                                        "0",
                                                                                                    ],
                                                                                                },
                                                                                                void 0,
                                                                                                true,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 733,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    /*#__PURE__*/ (0,
                                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          bet.profitLoss >
                                                                                                          0
                                                                                                            ? "text-success"
                                                                                                            : bet.profitLoss <
                                                                                                              0
                                                                                                            ? "text-danger"
                                                                                                            : "text-muted",
                                                                                                        children:
                                                                                                          [
                                                                                                            "\u20B9",
                                                                                                            ((_bet$profitLoss =
                                                                                                              bet.profitLoss) ===
                                                                                                              null ||
                                                                                                            _bet$profitLoss ===
                                                                                                              void 0
                                                                                                              ? void 0
                                                                                                              : _bet$profitLoss.toLocaleString()) ||
                                                                                                              "0",
                                                                                                          ],
                                                                                                      },
                                                                                                      void 0,
                                                                                                      true,
                                                                                                      {
                                                                                                        fileName:
                                                                                                          _jsxFileName,
                                                                                                        lineNumber: 735,
                                                                                                        columnNumber: 39,
                                                                                                      },
                                                                                                      undefined
                                                                                                    ),
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 734,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "td",
                                                                                                {
                                                                                                  children:
                                                                                                    /*#__PURE__*/ (0,
                                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className: `badge ${
                                                                                                          bet.status ===
                                                                                                          "completed"
                                                                                                            ? "bg-success"
                                                                                                            : "bg-warning"
                                                                                                        }`,
                                                                                                        children:
                                                                                                          bet.status ===
                                                                                                          "completed"
                                                                                                            ? "Settled"
                                                                                                            : "Pending",
                                                                                                      },
                                                                                                      void 0,
                                                                                                      false,
                                                                                                      {
                                                                                                        fileName:
                                                                                                          _jsxFileName,
                                                                                                        lineNumber: 740,
                                                                                                        columnNumber: 39,
                                                                                                      },
                                                                                                      undefined
                                                                                                    ),
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 739,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                            ],
                                                                                        },
                                                                                        index,
                                                                                        true,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 728,
                                                                                          columnNumber: 35,
                                                                                        },
                                                                                        undefined
                                                                                      );
                                                                                    }
                                                                                  ),
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 726,
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
                                                                    lineNumber: 714,
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
                                                              lineNumber: 713,
                                                              columnNumber: 27,
                                                            },
                                                            undefined
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 703,
                                                        columnNumber: 25,
                                                      },
                                                      undefined
                                                    ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 640,
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
                                        lineNumber: 538,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    )
                                  : /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "div",
                                      {
                                        className: "text-center",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                            "div",
                                            {
                                              className: "spinner-border",
                                              role: "status",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "span",
                                                {
                                                  className: "sr-only",
                                                  children: "Loading...",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 758,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 757,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                            "p",
                                            {
                                              className: "mt-2",
                                              children: "Loading details...",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 760,
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
                                        lineNumber: 756,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 536,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                              "div",
                              {
                                className: "modal-footer",
                                style: {
                                  borderTop: "1px solid #dee2e6",
                                  padding: "0.75rem 1rem",
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  margin: "0",
                                  backgroundColor: "#f8f9fa",
                                },
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                  "button",
                                  {
                                    type: "button",
                                    className: "btn btn-secondary",
                                    onClick: closeModal,
                                    children: "Close",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 765,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 764,
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
                          lineNumber: 520,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 480,
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
                lineNumber: 298,
                columnNumber: 7,
              },
              undefined
            );
          }
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
            "div",
            {
              className: "container-fluid",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                  "div",
                  {
                    className: "row",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                      "div",
                      {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                          "div",
                          {
                            className: "card",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "div",
                                {
                                  className: "card-header",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                    "h5",
                                    {
                                      children: "Profit & Loss Analysis",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 785,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 784,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "div",
                                {
                                  className: "card-body",
                                  children: loading
                                    ? /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        "div",
                                        {
                                          className: "text-center",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                            "div",
                                            {
                                              className: "spinner-border",
                                              role: "status",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "span",
                                                {
                                                  className: "sr-only",
                                                  children: "Loading...",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 793,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 792,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 791,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      )
                                    : /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,
                                        {
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                className: "row mb-3 mt-3",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-12",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "card bg-info text-white",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "card-body text-center",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "h6",
                                                                  {
                                                                    className:
                                                                      "card-title mb-3",
                                                                    children:
                                                                      "\uD83D\uDCCA Admin Balance Details",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 803,
                                                                    columnNumber: 27,
                                                                  },
                                                                  undefined
                                                                ),
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "row justify-content-center",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "col-md-6 mb-3",
                                                                          children:
                                                                            [
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "small",
                                                                                {
                                                                                  children:
                                                                                    "Admin Balance:",
                                                                                },
                                                                                void 0,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 806,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "div",
                                                                                {
                                                                                  style:
                                                                                    {
                                                                                      fontSize:
                                                                                        "1.5rem",
                                                                                      fontWeight:
                                                                                        "bold",
                                                                                    },
                                                                                  children:
                                                                                    [
                                                                                      "\u20B9",
                                                                                      ((_userBookData$availab2 =
                                                                                        userBookData.availableB) ===
                                                                                        null ||
                                                                                      _userBookData$availab2 ===
                                                                                        void 0
                                                                                        ? void 0
                                                                                        : _userBookData$availab2.toFixed(
                                                                                            2
                                                                                          )) ||
                                                                                        "0.00",
                                                                                    ],
                                                                                },
                                                                                void 0,
                                                                                true,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 807,
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
                                                                          lineNumber: 805,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "col-md-6 mb-3",
                                                                          children:
                                                                            [
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "small",
                                                                                {
                                                                                  children:
                                                                                    "Balance Down:",
                                                                                },
                                                                                void 0,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 810,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                "div",
                                                                                {
                                                                                  style:
                                                                                    {
                                                                                      fontSize:
                                                                                        "1.5rem",
                                                                                      fontWeight:
                                                                                        "bold",
                                                                                    },
                                                                                  children:
                                                                                    [
                                                                                      "\u20B9",
                                                                                      ((_userBookData$downlin2 =
                                                                                        userBookData.downlineob) ===
                                                                                        null ||
                                                                                      _userBookData$downlin2 ===
                                                                                        void 0
                                                                                        ? void 0
                                                                                        : _userBookData$downlin2.toFixed(
                                                                                            2
                                                                                          )) ||
                                                                                        "0.00",
                                                                                    ],
                                                                                },
                                                                                void 0,
                                                                                true,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 811,
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
                                                                          lineNumber: 809,
                                                                          columnNumber: 29,
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
                                                                    lineNumber: 804,
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
                                                              lineNumber: 802,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 801,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 800,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 799,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                className: "row mb-4 mt-4",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "col-md-3 mb-3",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "card bg-primary text-white",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "card-body text-center",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "h6",
                                                                      {
                                                                        children:
                                                                          "Total Deposit",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 824,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "h4",
                                                                      {
                                                                        children:
                                                                          [
                                                                            "\u20B9",
                                                                            analysisData.totalDeposit.toLocaleString(),
                                                                          ],
                                                                      },
                                                                      void 0,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 825,
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
                                                                  lineNumber: 823,
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
                                                            lineNumber: 822,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 821,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "col-md-3 mb-3",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "card bg-warning text-white",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "card-body text-center",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "h6",
                                                                      {
                                                                        children:
                                                                          "Total Withdraw",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 832,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "h4",
                                                                      {
                                                                        children:
                                                                          [
                                                                            "\u20B9",
                                                                            analysisData.totalWithdraw.toLocaleString(),
                                                                          ],
                                                                      },
                                                                      void 0,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 833,
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
                                                                  lineNumber: 831,
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
                                                            lineNumber: 830,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 829,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "col-md-3 mb-3",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "card bg-success text-white",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "card-body text-center",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "h6",
                                                                      {
                                                                        children:
                                                                          "Total Profit",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 840,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "h4",
                                                                      {
                                                                        children:
                                                                          [
                                                                            "\u20B9",
                                                                            (() => {
                                                                              const netAmount =
                                                                                analysisData.totalDeposit -
                                                                                analysisData.totalWithdraw;
                                                                              return netAmount >
                                                                                0
                                                                                ? netAmount.toLocaleString()
                                                                                : "0";
                                                                            })(),
                                                                          ],
                                                                      },
                                                                      void 0,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 841,
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
                                                                  lineNumber: 839,
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
                                                            lineNumber: 838,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 837,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "col-md-3 mb-3",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "card bg-danger text-white",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "card-body text-center",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "h6",
                                                                      {
                                                                        children:
                                                                          "Total Loss",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 851,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "h4",
                                                                      {
                                                                        children:
                                                                          [
                                                                            "\u20B9",
                                                                            (() => {
                                                                              const netAmount =
                                                                                analysisData.totalDeposit -
                                                                                analysisData.totalWithdraw;
                                                                              return netAmount <
                                                                                0
                                                                                ? Math.abs(
                                                                                    netAmount
                                                                                  ).toLocaleString()
                                                                                : "0";
                                                                            })(),
                                                                          ],
                                                                      },
                                                                      void 0,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 852,
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
                                                                  lineNumber: 850,
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
                                                            lineNumber: 849,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 848,
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
                                                lineNumber: 820,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                className:
                                                  "mt-3 position-relative",
                                                style: {
                                                  width: "fit-content",
                                                },
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "input-group",
                                                      style: {
                                                        width: "220px",
                                                      },
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "input",
                                                          {
                                                            type: "text",
                                                            className:
                                                              "form-control search-input-permanent",
                                                            placeholder:
                                                              "Search username...",
                                                            value: searchTerm,
                                                            onChange: (e) =>
                                                              handleSearch(
                                                                e.target.value
                                                              ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 864,
                                                            columnNumber: 21,
                                                          },
                                                          undefined
                                                        ),
                                                        searchTerm &&
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "button",
                                                            {
                                                              className:
                                                                "btn btn-outline-secondary btn-sm",
                                                              type: "button",
                                                              onClick:
                                                                clearSearch,
                                                              children: "\xD7",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 872,
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
                                                      lineNumber: 863,
                                                      columnNumber: 19,
                                                    },
                                                    undefined
                                                  ),
                                                  showSearchDropdown &&
                                                    searchResults.length > 0 &&
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "position-absolute bg-white border rounded shadow-sm mt-1",
                                                        style: {
                                                          zIndex: 1000,
                                                          width: "220px",
                                                        },
                                                        children:
                                                          searchResults.map(
                                                            (user) =>
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "p-2 border-bottom cursor-pointer hover-bg-light",
                                                                  onClick: () =>
                                                                    handleUserSelect(
                                                                      user
                                                                    ),
                                                                  style: {
                                                                    cursor:
                                                                      "pointer",
                                                                  },
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "strong",
                                                                            {
                                                                              children:
                                                                                user.username,
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 892,
                                                                              columnNumber: 32,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 892,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "small",
                                                                      {
                                                                        className:
                                                                          "text-muted",
                                                                        children:
                                                                          [
                                                                            "Balance: \u20B9",
                                                                            user.balance.toLocaleString(),
                                                                          ],
                                                                      },
                                                                      void 0,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 893,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                  ],
                                                                },
                                                                user._id,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 886,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              )
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 884,
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
                                                lineNumber: 862,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                className: "table-responsive",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "table",
                                                  {
                                                    className:
                                                      "table table-striped",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                        "thead",
                                                        {
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                              "tr",
                                                              {
                                                                children: [
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Username",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 905,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Balance",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 906,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
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
                                                                      lineNumber: 907,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Available",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 908,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Phone",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 909,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Deposit",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 910,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Withdraw",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 911,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Bets",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 912,
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
                                                                lineNumber: 904,
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
                                                          lineNumber: 903,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                        "tbody",
                                                        {
                                                          children:
                                                            filteredUsers ===
                                                              null ||
                                                            filteredUsers ===
                                                              void 0
                                                              ? void 0
                                                              : filteredUsers.map(
                                                                  (user) => {
                                                                    var _user$exposure2;
                                                                    return /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "tr",
                                                                      {
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  user.username,
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 918,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    "\u20B9",
                                                                                    user.balance.toLocaleString(),
                                                                                  ],
                                                                              },
                                                                              void 0,
                                                                              true,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 919,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    "\u20B9",
                                                                                    ((_user$exposure2 =
                                                                                      user.exposure) ===
                                                                                      null ||
                                                                                    _user$exposure2 ===
                                                                                      void 0
                                                                                      ? void 0
                                                                                      : _user$exposure2.toLocaleString()) ||
                                                                                      "0",
                                                                                  ],
                                                                              },
                                                                              void 0,
                                                                              true,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 920,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        user.balance -
                                                                                          (user.exposure ||
                                                                                            0) >=
                                                                                        0
                                                                                          ? "text-success"
                                                                                          : "text-danger",
                                                                                      children:
                                                                                        [
                                                                                          "\u20B9",
                                                                                          (
                                                                                            user.balance -
                                                                                            (user.exposure ||
                                                                                              0)
                                                                                          ).toLocaleString(),
                                                                                        ],
                                                                                    },
                                                                                    void 0,
                                                                                    true,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 922,
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
                                                                                lineNumber: 921,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  user.phone ||
                                                                                  "-",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 926,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "button",
                                                                                    {
                                                                                      className:
                                                                                        "btn btn-sm btn-primary",
                                                                                      onClick:
                                                                                        () =>
                                                                                          handleViewDetails(
                                                                                            user,
                                                                                            "deposit"
                                                                                          ),
                                                                                      children:
                                                                                        "View",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 928,
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
                                                                                lineNumber: 927,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "button",
                                                                                    {
                                                                                      className:
                                                                                        "btn btn-sm btn-warning",
                                                                                      onClick:
                                                                                        () =>
                                                                                          handleViewDetails(
                                                                                            user,
                                                                                            "withdraw"
                                                                                          ),
                                                                                      children:
                                                                                        "View",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 936,
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
                                                                                lineNumber: 935,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "button",
                                                                                    {
                                                                                      className:
                                                                                        "btn btn-sm btn-success",
                                                                                      onClick:
                                                                                        () =>
                                                                                          handleViewDetails(
                                                                                            user,
                                                                                            "bet"
                                                                                          ),
                                                                                      children:
                                                                                        "View",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 944,
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
                                                                                lineNumber: 943,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                          ],
                                                                      },
                                                                      user._id,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 917,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    );
                                                                  }
                                                                ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 915,
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
                                                    lineNumber: 902,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 901,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true
                                      ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 789,
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
                            lineNumber: 783,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 782,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 781,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                  react_modal__WEBPACK_IMPORTED_MODULE_2___default(),
                  {
                    isOpen: isModalOpen,
                    onRequestClose: closeModal,
                    className: "modal-dialog modal-xl",
                    overlayClassName: "modal-backdrop",
                    style: {
                      overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.95)",
                        backdropFilter: "blur(5px)",
                        WebkitBackdropFilter: "blur(5px)",
                        zIndex: 999999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      content: {
                        position: "relative",
                        top: "auto",
                        left: "auto",
                        right: "auto",
                        bottom: "auto",
                        border: "none",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                        padding: "0",
                        maxWidth: "90vw",
                        width: "1200px",
                        maxHeight: "90vh",
                        overflow: "auto",
                        zIndex: 1000000,
                        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                      },
                    },
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                      "div",
                      {
                        className: "modal-content",
                        style: {
                          border: "none",
                          borderRadius: "8px",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                          margin: "0",
                          height: "auto",
                        },
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "div",
                            {
                              className: "modal-header",
                              style: {
                                borderBottom: "1px solid #dee2e6",
                                padding: "0.75rem 1rem",
                                margin: "0",
                                backgroundColor: "#007bff",
                                color: "white",
                              },
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                  "h5",
                                  {
                                    className: "modal-title",
                                    children: [
                                      modalType === "deposit"
                                        ? "Deposit History"
                                        : modalType === "withdraw"
                                        ? "Withdraw History"
                                        : selectedMatch
                                        ? `Bet History - ${selectedMatch}`
                                        : "Match List",
                                      " - ",
                                      selectedUser === null ||
                                      selectedUser === void 0
                                        ? void 0
                                        : selectedUser.username,
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 1006,
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
                                    onClick: closeModal,
                                    style: {
                                      color: "white",
                                      opacity: 1,
                                    },
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "span",
                                      {
                                        children: "\xD7",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 1017,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 1011,
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
                              lineNumber: 1005,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "div",
                            {
                              className: "modal-body",
                              style: {
                                padding: "1rem",
                                maxHeight: "65vh",
                                overflowY: "auto",
                                margin: "0",
                              },
                              children: userDetails
                                ? /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                    "div",
                                    {
                                      children: [
                                        modalType === "deposit" &&
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                            "div",
                                            {
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "alert alert-info mb-3",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "h6",
                                                      {
                                                        className: "mb-0",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "strong",
                                                            {
                                                              children: [
                                                                "Total Approved Deposits: \u20B9",
                                                                ((_userDetails$deposits3 =
                                                                  userDetails.deposits) ===
                                                                  null ||
                                                                _userDetails$deposits3 ===
                                                                  void 0
                                                                  ? void 0
                                                                  : _userDetails$deposits3
                                                                      .filter(
                                                                        (d) =>
                                                                          d.status ===
                                                                          "approved"
                                                                      )
                                                                      .reduce(
                                                                        (
                                                                          sum,
                                                                          d
                                                                        ) =>
                                                                          sum +
                                                                          (d.amount ||
                                                                            0),
                                                                        0
                                                                      )
                                                                      .toLocaleString()) ||
                                                                  "0",
                                                              ],
                                                            },
                                                            void 0,
                                                            true,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 1028,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 1027,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 1026,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "table-responsive",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                        "table",
                                                        {
                                                          className:
                                                            "table table-striped",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                              "thead",
                                                              {
                                                                children:
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "tr",
                                                                    {
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Date",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1040,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Amount",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1041,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Status",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1042,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "UTR No",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1043,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Account Type",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1044,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Deposit By",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1045,
                                                                              columnNumber: 29,
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
                                                                      lineNumber: 1039,
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
                                                                lineNumber: 1038,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                              "tbody",
                                                              {
                                                                children:
                                                                  (_userDetails$deposits4 =
                                                                    userDetails.deposits) ===
                                                                    null ||
                                                                  _userDetails$deposits4 ===
                                                                    void 0
                                                                    ? void 0
                                                                    : _userDetails$deposits4.map(
                                                                        (
                                                                          deposit,
                                                                          index
                                                                        ) => {
                                                                          var _deposit$amount2;
                                                                          return /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "tr",
                                                                            {
                                                                              children:
                                                                                [
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        new Date(
                                                                                          deposit.createdAt
                                                                                        ).toLocaleDateString(),
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1051,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          "\u20B9",
                                                                                          (_deposit$amount2 =
                                                                                            deposit.amount) ===
                                                                                            null ||
                                                                                          _deposit$amount2 ===
                                                                                            void 0
                                                                                            ? void 0
                                                                                            : _deposit$amount2.toLocaleString(),
                                                                                        ],
                                                                                    },
                                                                                    void 0,
                                                                                    true,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1052,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        /*#__PURE__*/ (0,
                                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                          "span",
                                                                                          {
                                                                                            className: `badge ${
                                                                                              deposit.status ===
                                                                                              "approved"
                                                                                                ? "bg-success"
                                                                                                : deposit.status ===
                                                                                                  "rejected"
                                                                                                ? "bg-danger"
                                                                                                : "bg-warning"
                                                                                            }`,
                                                                                            children:
                                                                                              deposit.status,
                                                                                          },
                                                                                          void 0,
                                                                                          false,
                                                                                          {
                                                                                            fileName:
                                                                                              _jsxFileName,
                                                                                            lineNumber: 1054,
                                                                                            columnNumber: 33,
                                                                                          },
                                                                                          undefined
                                                                                        ),
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1053,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        deposit.utrno ||
                                                                                        "-",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1060,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        deposit.accountType ||
                                                                                        "-",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1061,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        deposit.remark
                                                                                          ? deposit.remark.toLowerCase() ===
                                                                                            "ok"
                                                                                            ? "User"
                                                                                            : deposit.remark
                                                                                          : "-",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1063,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                ],
                                                                            },
                                                                            index,
                                                                            true,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1050,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          );
                                                                        }
                                                                      ),
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 1048,
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
                                                          lineNumber: 1037,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      (!userDetails.deposits ||
                                                        userDetails.deposits
                                                          .length === 0) &&
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-center",
                                                            children:
                                                              "No deposits found",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 1073,
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
                                                    lineNumber: 1036,
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
                                              lineNumber: 1024,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        modalType === "withdraw" &&
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                            "div",
                                            {
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "alert alert-warning mb-3",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                      "h6",
                                                      {
                                                        className: "mb-0",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                            "strong",
                                                            {
                                                              children: [
                                                                "Total Approved Withdrawals: \u20B9",
                                                                ((_userDetails$withdraw3 =
                                                                  userDetails.withdrawals) ===
                                                                  null ||
                                                                _userDetails$withdraw3 ===
                                                                  void 0
                                                                  ? void 0
                                                                  : _userDetails$withdraw3
                                                                      .filter(
                                                                        (w) =>
                                                                          w.status ===
                                                                          "approved"
                                                                      )
                                                                      .reduce(
                                                                        (
                                                                          sum,
                                                                          w
                                                                        ) =>
                                                                          sum +
                                                                          (w.amount ||
                                                                            0),
                                                                        0
                                                                      )
                                                                      .toLocaleString()) ||
                                                                  "0",
                                                              ],
                                                            },
                                                            void 0,
                                                            true,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 1084,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 1083,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 1082,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "table-responsive",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                        "table",
                                                        {
                                                          className:
                                                            "table table-striped",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                              "thead",
                                                              {
                                                                children:
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "tr",
                                                                    {
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Date",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1096,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Amount",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1097,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Status",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1098,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Account Type",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1099,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "th",
                                                                            {
                                                                              children:
                                                                                "Withdraw By",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1100,
                                                                              columnNumber: 29,
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
                                                                      lineNumber: 1095,
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
                                                                lineNumber: 1094,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                              "tbody",
                                                              {
                                                                children:
                                                                  (_userDetails$withdraw4 =
                                                                    userDetails.withdrawals) ===
                                                                    null ||
                                                                  _userDetails$withdraw4 ===
                                                                    void 0
                                                                    ? void 0
                                                                    : _userDetails$withdraw4.map(
                                                                        (
                                                                          withdraw,
                                                                          index
                                                                        ) => {
                                                                          var _withdraw$amount2;
                                                                          return /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "tr",
                                                                            {
                                                                              children:
                                                                                [
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        new Date(
                                                                                          withdraw.createdAt
                                                                                        ).toLocaleDateString(),
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1106,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          "\u20B9",
                                                                                          (_withdraw$amount2 =
                                                                                            withdraw.amount) ===
                                                                                            null ||
                                                                                          _withdraw$amount2 ===
                                                                                            void 0
                                                                                            ? void 0
                                                                                            : _withdraw$amount2.toLocaleString(),
                                                                                        ],
                                                                                    },
                                                                                    void 0,
                                                                                    true,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1107,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        /*#__PURE__*/ (0,
                                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                          "span",
                                                                                          {
                                                                                            className: `badge ${
                                                                                              withdraw.status ===
                                                                                              "approved"
                                                                                                ? "bg-success"
                                                                                                : withdraw.status ===
                                                                                                  "rejected"
                                                                                                ? "bg-danger"
                                                                                                : "bg-warning"
                                                                                            }`,
                                                                                            children:
                                                                                              withdraw.status,
                                                                                          },
                                                                                          void 0,
                                                                                          false,
                                                                                          {
                                                                                            fileName:
                                                                                              _jsxFileName,
                                                                                            lineNumber: 1109,
                                                                                            columnNumber: 33,
                                                                                          },
                                                                                          undefined
                                                                                        ),
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1108,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        withdraw.accountType ||
                                                                                        "-",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1115,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "td",
                                                                                    {
                                                                                      children:
                                                                                        withdraw.remark
                                                                                          ? withdraw.remark.toLowerCase() ===
                                                                                            "ok"
                                                                                            ? "User"
                                                                                            : withdraw.remark
                                                                                          : "-",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1116,
                                                                                      columnNumber: 31,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                ],
                                                                            },
                                                                            index,
                                                                            true,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 1105,
                                                                              columnNumber: 29,
                                                                            },
                                                                            undefined
                                                                          );
                                                                        }
                                                                      ),
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 1103,
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
                                                          lineNumber: 1093,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      (!userDetails.withdrawals ||
                                                        userDetails.withdrawals
                                                          .length === 0) &&
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-center",
                                                            children:
                                                              "No withdrawals found",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 1126,
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
                                                    lineNumber: 1092,
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
                                              lineNumber: 1080,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        modalType === "bet" &&
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                            "div",
                                            {
                                              children: !selectedMatch
                                                ? /*#__PURE__*/
                                                  // Show match list
                                                  (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "alert alert-info mb-3",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "h6",
                                                                {
                                                                  className:
                                                                    "mb-0",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "strong",
                                                                      {
                                                                        children:
                                                                          "Select a match to view bets",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 1139,
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
                                                                  lineNumber: 1138,
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
                                                            lineNumber: 1137,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className: "mb-3",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  type: "text",
                                                                  className:
                                                                    "form-control",
                                                                  placeholder:
                                                                    "Search matches...",
                                                                  value:
                                                                    matchSearchTerm,
                                                                  onChange: (
                                                                    e
                                                                  ) =>
                                                                    handleMatchSearch(
                                                                      e.target
                                                                        .value
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 1145,
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
                                                            lineNumber: 1144,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "table-responsive",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "table",
                                                                {
                                                                  className:
                                                                    "table table-striped",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "thead",
                                                                      {
                                                                        children:
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "tr",
                                                                            {
                                                                              children:
                                                                                [
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Match Name",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1157,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Total Bets",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1158,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Total Stake",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1159,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Total P&L",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1160,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Action",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1161,
                                                                                      columnNumber: 33,
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
                                                                              lineNumber: 1156,
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
                                                                        lineNumber: 1155,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "tbody",
                                                                      {
                                                                        children:
                                                                          matchList ===
                                                                            null ||
                                                                          matchList ===
                                                                            void 0
                                                                            ? void 0
                                                                            : matchList
                                                                                .filter(
                                                                                  (
                                                                                    match
                                                                                  ) =>
                                                                                    !matchSearchTerm ||
                                                                                    match.matchName
                                                                                      .toLowerCase()
                                                                                      .includes(
                                                                                        matchSearchTerm.toLowerCase()
                                                                                      )
                                                                                )
                                                                                .map(
                                                                                  (
                                                                                    match,
                                                                                    index
                                                                                  ) => {
                                                                                    var _match$totalStake2,
                                                                                      _match$totalPnl2;
                                                                                    return /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "tr",
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  match.matchName,
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1169,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  match.totalBets,
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1170,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  [
                                                                                                    "\u20B9",
                                                                                                    ((_match$totalStake2 =
                                                                                                      match.totalStake) ===
                                                                                                      null ||
                                                                                                    _match$totalStake2 ===
                                                                                                      void 0
                                                                                                      ? void 0
                                                                                                      : _match$totalStake2.toLocaleString()) ||
                                                                                                      "0",
                                                                                                  ],
                                                                                              },
                                                                                              void 0,
                                                                                              true,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1171,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  /*#__PURE__*/ (0,
                                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                    "span",
                                                                                                    {
                                                                                                      className:
                                                                                                        match.totalPnl >
                                                                                                        0
                                                                                                          ? "text-success"
                                                                                                          : match.totalPnl <
                                                                                                            0
                                                                                                          ? "text-danger"
                                                                                                          : "text-muted",
                                                                                                      children:
                                                                                                        [
                                                                                                          "\u20B9",
                                                                                                          ((_match$totalPnl2 =
                                                                                                            match.totalPnl) ===
                                                                                                            null ||
                                                                                                          _match$totalPnl2 ===
                                                                                                            void 0
                                                                                                            ? void 0
                                                                                                            : _match$totalPnl2.toLocaleString()) ||
                                                                                                            "0",
                                                                                                        ],
                                                                                                    },
                                                                                                    void 0,
                                                                                                    true,
                                                                                                    {
                                                                                                      fileName:
                                                                                                        _jsxFileName,
                                                                                                      lineNumber: 1173,
                                                                                                      columnNumber: 37,
                                                                                                    },
                                                                                                    undefined
                                                                                                  ),
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1172,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  /*#__PURE__*/ (0,
                                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                    "button",
                                                                                                    {
                                                                                                      className:
                                                                                                        "btn btn-sm btn-primary",
                                                                                                      onClick:
                                                                                                        () =>
                                                                                                          handleMatchSelect(
                                                                                                            match.matchName
                                                                                                          ),
                                                                                                      children:
                                                                                                        "View Bets",
                                                                                                    },
                                                                                                    void 0,
                                                                                                    false,
                                                                                                    {
                                                                                                      fileName:
                                                                                                        _jsxFileName,
                                                                                                      lineNumber: 1178,
                                                                                                      columnNumber: 37,
                                                                                                    },
                                                                                                    undefined
                                                                                                  ),
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1177,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                          ],
                                                                                      },
                                                                                      index,
                                                                                      true,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 1168,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    );
                                                                                  }
                                                                                ),
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 1164,
                                                                        columnNumber: 29,
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
                                                                  lineNumber: 1154,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              (!matchList ||
                                                                matchList.length ===
                                                                  0) &&
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "text-center",
                                                                    children:
                                                                      "No matches found",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 1190,
                                                                    columnNumber: 29,
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
                                                            lineNumber: 1153,
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
                                                      lineNumber: 1136,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  )
                                                : /*#__PURE__*/
                                                  // Show bets for selected match
                                                  (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "div",
                                                    {
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "d-flex justify-content-between align-items-center mb-3",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "h6",
                                                                {
                                                                  className:
                                                                    "mb-0",
                                                                  children: [
                                                                    "Bets for: ",
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "strong",
                                                                      {
                                                                        children:
                                                                          selectedMatch,
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 1198,
                                                                        columnNumber: 58,
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
                                                                  lineNumber: 1198,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "button",
                                                                {
                                                                  className:
                                                                    "btn btn-sm btn-secondary",
                                                                  onClick:
                                                                    handleBackToMatches,
                                                                  children:
                                                                    "\u2190 Back to Matches",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 1199,
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
                                                            lineNumber: 1197,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "table-responsive",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                "table",
                                                                {
                                                                  className:
                                                                    "table table-striped",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "thead",
                                                                      {
                                                                        children:
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                            "tr",
                                                                            {
                                                                              children:
                                                                                [
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Date",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1210,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Market",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1211,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Selection",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1212,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Odds",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1213,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Stake",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1214,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "P&L",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1215,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Status",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 1216,
                                                                                      columnNumber: 33,
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
                                                                              lineNumber: 1209,
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
                                                                        lineNumber: 1208,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "tbody",
                                                                      {
                                                                        children:
                                                                          (_userDetails$bets2 =
                                                                            userDetails.bets) ===
                                                                            null ||
                                                                          _userDetails$bets2 ===
                                                                            void 0
                                                                            ? void 0
                                                                            : _userDetails$bets2
                                                                                .filter(
                                                                                  (
                                                                                    bet
                                                                                  ) =>
                                                                                    bet.matchName ===
                                                                                    selectedMatch
                                                                                )
                                                                                .map(
                                                                                  (
                                                                                    bet,
                                                                                    index
                                                                                  ) => {
                                                                                    var _bet$stack2,
                                                                                      _bet$profitLoss2;
                                                                                    return /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                      "tr",
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  new Date(
                                                                                                    bet.createdAt
                                                                                                  ).toLocaleDateString(),
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1222,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  bet.marketName ||
                                                                                                  "-",
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1223,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  bet.selectionName ||
                                                                                                  "-",
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1224,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  bet.odds ||
                                                                                                  "-",
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1225,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  [
                                                                                                    "\u20B9",
                                                                                                    ((_bet$stack2 =
                                                                                                      bet.stack) ===
                                                                                                      null ||
                                                                                                    _bet$stack2 ===
                                                                                                      void 0
                                                                                                      ? void 0
                                                                                                      : _bet$stack2.toLocaleString()) ||
                                                                                                      "0",
                                                                                                  ],
                                                                                              },
                                                                                              void 0,
                                                                                              true,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1226,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  /*#__PURE__*/ (0,
                                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                    "span",
                                                                                                    {
                                                                                                      className:
                                                                                                        bet.profitLoss >
                                                                                                        0
                                                                                                          ? "text-success"
                                                                                                          : bet.profitLoss <
                                                                                                            0
                                                                                                          ? "text-danger"
                                                                                                          : "text-muted",
                                                                                                      children:
                                                                                                        [
                                                                                                          "\u20B9",
                                                                                                          ((_bet$profitLoss2 =
                                                                                                            bet.profitLoss) ===
                                                                                                            null ||
                                                                                                          _bet$profitLoss2 ===
                                                                                                            void 0
                                                                                                            ? void 0
                                                                                                            : _bet$profitLoss2.toLocaleString()) ||
                                                                                                            "0",
                                                                                                        ],
                                                                                                    },
                                                                                                    void 0,
                                                                                                    true,
                                                                                                    {
                                                                                                      fileName:
                                                                                                        _jsxFileName,
                                                                                                      lineNumber: 1228,
                                                                                                      columnNumber: 37,
                                                                                                    },
                                                                                                    undefined
                                                                                                  ),
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1227,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                              "td",
                                                                                              {
                                                                                                children:
                                                                                                  /*#__PURE__*/ (0,
                                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                    "span",
                                                                                                    {
                                                                                                      className: `badge ${
                                                                                                        bet.status ===
                                                                                                        "completed"
                                                                                                          ? "bg-success"
                                                                                                          : "bg-warning"
                                                                                                      }`,
                                                                                                      children:
                                                                                                        bet.status ===
                                                                                                        "completed"
                                                                                                          ? "Settled"
                                                                                                          : "Pending",
                                                                                                    },
                                                                                                    void 0,
                                                                                                    false,
                                                                                                    {
                                                                                                      fileName:
                                                                                                        _jsxFileName,
                                                                                                      lineNumber: 1233,
                                                                                                      columnNumber: 37,
                                                                                                    },
                                                                                                    undefined
                                                                                                  ),
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 1232,
                                                                                                columnNumber: 35,
                                                                                              },
                                                                                              undefined
                                                                                            ),
                                                                                          ],
                                                                                      },
                                                                                      index,
                                                                                      true,
                                                                                      {
                                                                                        fileName:
                                                                                          _jsxFileName,
                                                                                        lineNumber: 1221,
                                                                                        columnNumber: 33,
                                                                                      },
                                                                                      undefined
                                                                                    );
                                                                                  }
                                                                                ),
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 1219,
                                                                        columnNumber: 29,
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
                                                                  lineNumber: 1207,
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
                                                            lineNumber: 1206,
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
                                                      lineNumber: 1196,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 1133,
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
                                      lineNumber: 1022,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  )
                                : /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                    "div",
                                    {
                                      className: "text-center",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          "div",
                                          {
                                            className: "spinner-border",
                                            role: "status",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "span",
                                              {
                                                className: "sr-only",
                                                children: "Loading...",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 1251,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 1250,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          "p",
                                          {
                                            className: "mt-2",
                                            children: "Loading details...",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 1253,
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
                                      lineNumber: 1249,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 1020,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "div",
                            {
                              className: "modal-footer",
                              style: {
                                borderTop: "1px solid #dee2e6",
                                padding: "0.75rem 1rem",
                                display: "flex",
                                justifyContent: "flex-end",
                                margin: "0",
                                backgroundColor: "#f8f9fa",
                              },
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: closeModal,
                                  children: "Close",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 1258,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 1257,
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
                        lineNumber: 1004,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 964,
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
              lineNumber: 780,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(AnalysisProfitloss, "YOsHlC3SJryX16uyxvcrPOh/CDI=");
        _c = AnalysisProfitloss;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          AnalysisProfitloss;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "AnalysisProfitloss");

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
//# sourceMappingURL=src_admin-app_pages_Anaysis-pl_AnalysisProfitloss_tsx.chunk.js.map
