"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_undeclared-bets_undeclared-bets_tsx"],
  {
    /***/ "./src/admin-app/pages/undeclared-bets/undeclared-bets.tsx":
      /*!*****************************************************************!*\
  !*** ./src/admin-app/pages/undeclared-bets/undeclared-bets.tsx ***!
  \*****************************************************************/
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
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _services_bet_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../services/bet.service */ "./src/services/bet.service.ts"
          );
        /* harmony import */ var _services_fancy_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../services/fancy.service */ "./src/services/fancy.service.ts"
          );
        /* harmony import */ var _services_market_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../services/market.service */ "./src/services/market.service.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/undeclared-bets/undeclared-bets.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const UndeclaredBets = () => {
          _s();
          var _selectedBet$totalSta;
          const [undeclaredBets, setUndeclaredBets] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
          const [filteredBets, setFilteredBets] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
          const [selectedBet, setSelectedBet] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
          const [selectedResult, setSelectedResult] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
          const [isOpen, setIsOpen] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
          const [loading, setLoading] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
          const [filter, setFilter] =
            react__WEBPACK_IMPORTED_MODULE_1___default().useState({
              eventType: "all",
              marketType: "all",
              search: "",
            });
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            getUndeclaredBets();
          }, []);
          react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            filterBets();
          }, [undeclaredBets, filter]);
          const getUndeclaredBets = async () => {
            try {
              var _response$data;
              setLoading(true);
              // API call to get undeclared bets (we'll implement this endpoint)
              const response =
                await _services_bet_service__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ].getUndeclaredBets();
              const betsData =
                (response === null || response === void 0
                  ? void 0
                  : (_response$data = response.data) === null ||
                    _response$data === void 0
                  ? void 0
                  : _response$data.data) || [];
              setUndeclaredBets(Array.isArray(betsData) ? betsData : []);
            } catch (error) {
              console.error("Error fetching undeclared bets:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(
                "Failed to fetch undeclared bets"
              );
              setUndeclaredBets([]);
            } finally {
              setLoading(false);
            }
          };
          const filterBets = () => {
            let filtered = [...undeclaredBets];
            if (filter.eventType !== "all") {
              filtered = filtered.filter(
                (bet) => bet.eventType === filter.eventType
              );
            }
            if (filter.marketType !== "all") {
              filtered = filtered.filter(
                (bet) => bet.bet_on === filter.marketType
              );
            }
            if (filter.search) {
              const searchLower = filter.search.toLowerCase();
              filtered = filtered.filter(
                (bet) =>
                  bet.matchName.toLowerCase().includes(searchLower) ||
                  bet.marketName.toLowerCase().includes(searchLower) ||
                  bet.selectionName.toLowerCase().includes(searchLower)
              );
            }
            setFilteredBets(filtered);
          };
          const openResultModal = (bet) => {
            setSelectedBet(bet);
            setSelectedResult("");
            setIsOpen(true);
          };
          const handleDeclareResult = async (e) => {
            e.preventDefault();
            if (!selectedResult) {
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(
                "Please select/enter a result"
              );
              return;
            }
            try {
              setLoading(true);
              if (selectedBet.bet_on === "FANCY") {
                // For fancy bets, use numeric result
                await _services_fancy_service__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ].declareFancyResult(
                  selectedBet.marketId,
                  selectedBet.matchId,
                  selectedResult
                );
              } else {
                // For match odds/bookmaker, use selection ID
                await _services_market_service__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].marketResult(
                  selectedBet.marketId,
                  selectedBet.matchId,
                  selectedResult
                );
              }
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(
                "Result declared successfully"
              );
              setIsOpen(false);

              // ✅ NEW: Update the local state to mark bet as declared
              const updatedBets = undeclaredBets.map((bet) => {
                if (
                  bet.matchId === selectedBet.matchId &&
                  bet.marketId === selectedBet.marketId &&
                  bet.selectionId === selectedBet.selectionId
                ) {
                  return {
                    ...bet,
                    isDeclared: true,
                    declaredAt: new Date().toISOString(),
                    declaredResult: selectedResult,
                  };
                }
                return bet;
              });
              setUndeclaredBets(updatedBets);
              // getUndeclaredBets() // Optional: uncomment if you want to refresh from server
            } catch (error) {
              var _error$response, _error$response$data;
              console.error("Error declaring result:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(
                (error === null || error === void 0
                  ? void 0
                  : (_error$response = error.response) === null ||
                    _error$response === void 0
                  ? void 0
                  : (_error$response$data = _error$response.data) === null ||
                    _error$response$data === void 0
                  ? void 0
                  : _error$response$data.message) || "Failed to declare result"
              );
            } finally {
              setLoading(false);
            }
          };
          const handleRollback = async (bet) => {
            if (
              !window.confirm(
                `Are you sure you want to rollback ${bet.marketName}?`
              )
            ) {
              return;
            }
            try {
              setLoading(true);
              if (bet.bet_on === "FANCY") {
                await _services_fancy_service__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ].rollbackFancyResult(bet.marketId, bet.matchId);
              } else {
                await _services_market_service__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].rollbackmarketResult(bet.marketId, bet.matchId);
              }
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(
                "Result rolled back successfully"
              );
              getUndeclaredBets(); // Refresh the list
            } catch (error) {
              var _error$response2, _error$response2$data;
              console.error("Error rolling back:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(
                (error === null || error === void 0
                  ? void 0
                  : (_error$response2 = error.response) === null ||
                    _error$response2 === void 0
                  ? void 0
                  : (_error$response2$data = _error$response2.data) === null ||
                    _error$response2$data === void 0
                  ? void 0
                  : _error$response2$data.message) ||
                  "Failed to rollback result"
              );
            } finally {
              setLoading(false);
            }
          };
          const handleDeleteBets = async (bet) => {
            if (
              !window.confirm(
                `Are you sure you want to delete all bets for ${bet.marketName}? This will remove stakes from user exposure.`
              )
            ) {
              return;
            }
            try {
              setLoading(true);

              // API call to delete all bets for this market and update user exposures
              await _services_bet_service__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ].deleteBetsByMarket(bet.marketId, bet.matchId);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(
                "Bets deleted successfully and stakes removed from exposure"
              );
              getUndeclaredBets(); // Refresh the list
            } catch (error) {
              var _error$response3, _error$response3$data;
              console.error("Error deleting bets:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(
                (error === null || error === void 0
                  ? void 0
                  : (_error$response3 = error.response) === null ||
                    _error$response3 === void 0
                  ? void 0
                  : (_error$response3$data = _error$response3.data) === null ||
                    _error$response3$data === void 0
                  ? void 0
                  : _error$response3$data.message) || "Failed to delete bets"
              );
            } finally {
              setLoading(false);
            }
          };
          const getEventTypeDisplay = (sportId) => {
            switch (sportId) {
              case 1:
                return "Football";
              case 2:
                return "Tennis";
              case 4:
                return "Cricket";
              case 5000:
                return "Casino";
              default:
                return "Sports";
            }
          };
          const getMarketTypeDisplay = (bet_on) => {
            switch (bet_on) {
              case "MATCH_ODDS":
                return "Match Odds";
              case "BOOKMAKER":
                return "Bookmaker";
              case "FANCY":
                return "Fancy";
              case "CASINO":
                return "Casino";
              default:
                return bet_on;
            }
          };
          const renderResultInput = () => {
            if (selectedBet.bet_on === "FANCY") {
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                "input",
                {
                  type: "number",
                  className: "form-control",
                  placeholder: "Enter result value (e.g., 85)",
                  value: selectedResult,
                  onChange: (e) => setSelectedResult(e.target.value),
                  required: true,
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 9,
                },
                undefined
              );
            } else {
              // ✅ For match odds/bookmaker, show all available selections
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                "div",
                {
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                      "select",
                      {
                        className: "form-control",
                        value: selectedResult,
                        onChange: (e) => setSelectedResult(e.target.value),
                        required: true,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "option",
                            {
                              value: "",
                              children: "Select Winner",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 245,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          selectedBet.runners && selectedBet.runners.length > 0
                            ? selectedBet.runners.map((runner) =>
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                  "option",
                                  {
                                    value:
                                      runner.selectionId || runner.runnerId,
                                    children:
                                      runner.runnerName || runner.selectionName,
                                  },
                                  runner.selectionId || runner.runnerId,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 248,
                                    columnNumber: 17,
                                  },
                                  undefined
                                )
                              )
                            : /*#__PURE__*/
                              // Fallback options for common selections
                              (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,
                                {
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "option",
                                      {
                                        value: "1",
                                        children: "Team 1 / Home / Yes",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 255,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "option",
                                      {
                                        value: "2",
                                        children: "Team 2 / Away / No",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 256,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "option",
                                      {
                                        value: "3",
                                        children: "Draw / Tie",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 257,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "option",
                                      {
                                        value: "OVER",
                                        children: "Over",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 258,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "option",
                                      {
                                        value: "UNDER",
                                        children: "Under",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 259,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true
                              ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "option",
                            {
                              value: "-1",
                              children: "Abandoned/Void",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 262,
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
                        lineNumber: 239,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                      "div",
                      {
                        className: "mt-3",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "label",
                            {
                              className: "form-label",
                              children: "Or enter Selection ID manually:",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 267,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "input",
                            {
                              type: "text",
                              className: "form-control",
                              placeholder: "Enter selection ID",
                              value: selectedResult,
                              onChange: (e) =>
                                setSelectedResult(e.target.value),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 268,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "small",
                            {
                              className: "form-text text-muted",
                              children:
                                "Enter the exact selection ID of the winner or result value",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 275,
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
                        lineNumber: 266,
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
                  lineNumber: 238,
                  columnNumber: 9,
                },
                undefined
              );
            }
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
            "div",
            {
              className: "content-wrapper",
              style: {
                marginLeft: "35px",
              },
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                  "section",
                  {
                    className: "content-header",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                      "h1",
                      {
                        children: "Undeclared Bets Management",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 287,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                  "section",
                  {
                    className: "content",
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
                              className: "col-xs-12",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "div",
                                {
                                  className: "box",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "div",
                                      {
                                        className: "box-header",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          "h3",
                                          {
                                            className: "box-title",
                                            children: "Filter Undeclared Bets",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 295,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 294,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "div",
                                      {
                                        className: "box-body",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-3",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "select",
                                                    {
                                                      className: "form-control",
                                                      value: filter.eventType,
                                                      onChange: (e) =>
                                                        setFilter({
                                                          ...filter,
                                                          eventType:
                                                            e.target.value,
                                                        }),
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "all",
                                                            children:
                                                              "All Event Types",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 305,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "Football",
                                                            children:
                                                              "Football",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 306,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "Tennis",
                                                            children: "Tennis",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 307,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "Cricket",
                                                            children: "Cricket",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 308,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "Casino",
                                                            children: "Casino",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 309,
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
                                                      lineNumber: 300,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 299,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-3",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "select",
                                                    {
                                                      className: "form-control",
                                                      value: filter.marketType,
                                                      onChange: (e) =>
                                                        setFilter({
                                                          ...filter,
                                                          marketType:
                                                            e.target.value,
                                                        }),
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "all",
                                                            children:
                                                              "All Market Types",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 318,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "MATCH_ODDS",
                                                            children:
                                                              "Match Odds",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 319,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "BOOKMAKER",
                                                            children:
                                                              "Bookmaker",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 320,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "FANCY",
                                                            children: "Fancy",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 321,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                          "option",
                                                          {
                                                            value: "CASINO",
                                                            children: "Casino",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 322,
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
                                                      lineNumber: 313,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 312,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-4",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "input",
                                                    {
                                                      type: "text",
                                                      className: "form-control",
                                                      placeholder:
                                                        "Search match, market, or selection...",
                                                      value: filter.search,
                                                      onChange: (e) =>
                                                        setFilter({
                                                          ...filter,
                                                          search:
                                                            e.target.value,
                                                        }),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 326,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 325,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-2",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "button",
                                                    {
                                                      className:
                                                        "btn btn-primary btn-block",
                                                      onClick:
                                                        getUndeclaredBets,
                                                      disabled: loading,
                                                      children: loading
                                                        ? "Loading..."
                                                        : "Refresh",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 335,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 334,
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
                                            lineNumber: 298,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 297,
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
                                  lineNumber: 293,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 292,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 291,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                        "div",
                        {
                          className: "row",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "div",
                            {
                              className: "col-xs-12",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                "div",
                                {
                                  className: "box",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "div",
                                      {
                                        className: "box-header",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                          "h3",
                                          {
                                            className: "box-title",
                                            children: [
                                              "Undeclared Bets (",
                                              filteredBets.length,
                                              " markets)",
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 353,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 352,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                      "div",
                                      {
                                        className: "box-body",
                                        children: loading
                                          ? /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                className: "text-center",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                    "i",
                                                    {
                                                      className:
                                                        "fa fa-spinner fa-spin",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 360,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  " Loading...",
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 359,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            )
                                          : /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "div",
                                              {
                                                className: "table-responsive",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "table",
                                                  {
                                                    className:
                                                      "table table-bordered table-hover",
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
                                                                        "Status",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 367,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Event Type",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 368,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
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
                                                                      lineNumber: 369,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Market Type",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 370,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Market Name",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 371,
                                                                      columnNumber: 27,
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
                                                                      lineNumber: 372,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Bet Count",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 373,
                                                                      columnNumber: 27,
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
                                                                      lineNumber: 374,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Created At",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 375,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                    "th",
                                                                    {
                                                                      children:
                                                                        "Actions",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 376,
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
                                                                lineNumber: 366,
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
                                                          lineNumber: 365,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                        "tbody",
                                                        {
                                                          children:
                                                            filteredBets.length ===
                                                            0
                                                              ? /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                  "tr",
                                                                  {
                                                                    children:
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                        "td",
                                                                        {
                                                                          colSpan: 10,
                                                                          className:
                                                                            "text-center",
                                                                          children:
                                                                            "No undeclared bets found",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 382,
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
                                                                    lineNumber: 381,
                                                                    columnNumber: 27,
                                                                  },
                                                                  undefined
                                                                )
                                                              : filteredBets.map(
                                                                  (bet) =>
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                      "tr",
                                                                      {
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                className:
                                                                                  "text-center",
                                                                                children:
                                                                                  bet.isDeclared
                                                                                    ? /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "text-success",
                                                                                          title: `Declared at ${
                                                                                            bet.declaredAt
                                                                                              ? new Date(
                                                                                                  bet.declaredAt
                                                                                                ).toLocaleString()
                                                                                              : "Unknown"
                                                                                          }`,
                                                                                          children:
                                                                                            [
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "i",
                                                                                                {
                                                                                                  className:
                                                                                                    "fa fa-check-circle",
                                                                                                  style:
                                                                                                    {
                                                                                                      fontSize:
                                                                                                        "16px",
                                                                                                    },
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 393,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "small",
                                                                                                {
                                                                                                  className:
                                                                                                    "text-muted d-block",
                                                                                                  children:
                                                                                                    "Declared",
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 394,
                                                                                                  columnNumber: 37,
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
                                                                                          lineNumber: 392,
                                                                                          columnNumber: 35,
                                                                                        },
                                                                                        undefined
                                                                                      )
                                                                                    : /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "text-warning",
                                                                                          title:
                                                                                            "Awaiting declaration",
                                                                                          children:
                                                                                            [
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "i",
                                                                                                {
                                                                                                  className:
                                                                                                    "fa fa-clock-o",
                                                                                                  style:
                                                                                                    {
                                                                                                      fontSize:
                                                                                                        "16px",
                                                                                                    },
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 398,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                "small",
                                                                                                {
                                                                                                  className:
                                                                                                    "text-muted d-block",
                                                                                                  children:
                                                                                                    "Pending",
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 399,
                                                                                                  columnNumber: 37,
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
                                                                                          lineNumber: 397,
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
                                                                                lineNumber: 389,
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
                                                                                      className: `label ${
                                                                                        bet.eventType ===
                                                                                        "Cricket"
                                                                                          ? "label-success"
                                                                                          : bet.eventType ===
                                                                                            "Football"
                                                                                          ? "label-info"
                                                                                          : bet.eventType ===
                                                                                            "Tennis"
                                                                                          ? "label-warning"
                                                                                          : "label-default"
                                                                                      }`,
                                                                                      children:
                                                                                        bet.eventType,
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 404,
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
                                                                                lineNumber: 403,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  bet.matchName,
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 413,
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
                                                                                      className: `label ${
                                                                                        bet.bet_on ===
                                                                                        "FANCY"
                                                                                          ? "label-primary"
                                                                                          : bet.bet_on ===
                                                                                            "MATCH_ODDS"
                                                                                          ? "label-success"
                                                                                          : bet.bet_on ===
                                                                                            "BOOKMAKER"
                                                                                          ? "label-info"
                                                                                          : "label-default"
                                                                                      }`,
                                                                                      children:
                                                                                        getMarketTypeDisplay(
                                                                                          bet.bet_on
                                                                                        ),
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 415,
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
                                                                                lineNumber: 414,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  bet.marketName,
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 424,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  bet.selectionName,
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 425,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                className:
                                                                                  "text-center",
                                                                                children:
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "badge bg-blue",
                                                                                      children:
                                                                                        bet.betCount,
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 427,
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
                                                                                lineNumber: 426,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                className:
                                                                                  "text-right",
                                                                                children:
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                    "strong",
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          "\u20B9",
                                                                                          bet.totalStake.toLocaleString(),
                                                                                        ],
                                                                                    },
                                                                                    void 0,
                                                                                    true,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 430,
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
                                                                                lineNumber: 429,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                              "td",
                                                                              {
                                                                                children:
                                                                                  moment__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                                    bet.createdAt
                                                                                  ).format(
                                                                                    "DD/MM/YYYY HH:mm"
                                                                                  ),
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 432,
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
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "btn-group",
                                                                                      children:
                                                                                        [
                                                                                          /*#__PURE__*/ (0,
                                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                            "button",
                                                                                            {
                                                                                              className:
                                                                                                "btn btn-success btn-xs",
                                                                                              onClick:
                                                                                                () =>
                                                                                                  openResultModal(
                                                                                                    bet
                                                                                                  ),
                                                                                              title:
                                                                                                "Declare Result",
                                                                                              children:
                                                                                                [
                                                                                                  /*#__PURE__*/ (0,
                                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                    "i",
                                                                                                    {
                                                                                                      className:
                                                                                                        "fa fa-check",
                                                                                                    },
                                                                                                    void 0,
                                                                                                    false,
                                                                                                    {
                                                                                                      fileName:
                                                                                                        _jsxFileName,
                                                                                                      lineNumber: 440,
                                                                                                      columnNumber: 37,
                                                                                                    },
                                                                                                    undefined
                                                                                                  ),
                                                                                                  " Declare",
                                                                                                ],
                                                                                            },
                                                                                            void 0,
                                                                                            true,
                                                                                            {
                                                                                              fileName:
                                                                                                _jsxFileName,
                                                                                              lineNumber: 435,
                                                                                              columnNumber: 35,
                                                                                            },
                                                                                            undefined
                                                                                          ),
                                                                                          /*#__PURE__*/ (0,
                                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                            "button",
                                                                                            {
                                                                                              className:
                                                                                                "btn btn-warning btn-xs",
                                                                                              onClick:
                                                                                                () =>
                                                                                                  handleRollback(
                                                                                                    bet
                                                                                                  ),
                                                                                              title:
                                                                                                "Rollback Result",
                                                                                              children:
                                                                                                [
                                                                                                  /*#__PURE__*/ (0,
                                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                    "i",
                                                                                                    {
                                                                                                      className:
                                                                                                        "fa fa-undo",
                                                                                                    },
                                                                                                    void 0,
                                                                                                    false,
                                                                                                    {
                                                                                                      fileName:
                                                                                                        _jsxFileName,
                                                                                                      lineNumber: 447,
                                                                                                      columnNumber: 37,
                                                                                                    },
                                                                                                    undefined
                                                                                                  ),
                                                                                                  " Rollback",
                                                                                                ],
                                                                                            },
                                                                                            void 0,
                                                                                            true,
                                                                                            {
                                                                                              fileName:
                                                                                                _jsxFileName,
                                                                                              lineNumber: 442,
                                                                                              columnNumber: 35,
                                                                                            },
                                                                                            undefined
                                                                                          ),
                                                                                          /*#__PURE__*/ (0,
                                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                            "button",
                                                                                            {
                                                                                              className:
                                                                                                "btn btn-danger btn-xs",
                                                                                              onClick:
                                                                                                () =>
                                                                                                  handleDeleteBets(
                                                                                                    bet
                                                                                                  ),
                                                                                              title:
                                                                                                "Delete All Bets",
                                                                                              children:
                                                                                                [
                                                                                                  /*#__PURE__*/ (0,
                                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                                                                    "i",
                                                                                                    {
                                                                                                      className:
                                                                                                        "fa fa-trash",
                                                                                                    },
                                                                                                    void 0,
                                                                                                    false,
                                                                                                    {
                                                                                                      fileName:
                                                                                                        _jsxFileName,
                                                                                                      lineNumber: 454,
                                                                                                      columnNumber: 37,
                                                                                                    },
                                                                                                    undefined
                                                                                                  ),
                                                                                                  " Delete",
                                                                                                ],
                                                                                            },
                                                                                            void 0,
                                                                                            true,
                                                                                            {
                                                                                              fileName:
                                                                                                _jsxFileName,
                                                                                              lineNumber: 449,
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
                                                                                      lineNumber: 434,
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
                                                                                lineNumber: 433,
                                                                                columnNumber: 31,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                          ],
                                                                      },
                                                                      `${bet.matchId}-${bet.marketId}-${bet.selectionId}`,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 388,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    )
                                                                ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 379,
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
                                                    lineNumber: 364,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 363,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 357,
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
                                  lineNumber: 351,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 350,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 349,
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
                    lineNumber: 290,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                  react_modal__WEBPACK_IMPORTED_MODULE_2___default(),
                  {
                    isOpen: isOpen,
                    onRequestClose: () => setIsOpen(false),
                    contentLabel: "Declare Result",
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
                                    children: [
                                      "Declare Result - ",
                                      selectedBet.marketName,
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 480,
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
                                    onClick: () => setIsOpen(false),
                                    children: "\xD7",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 483,
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
                              lineNumber: 479,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                            "form",
                            {
                              onSubmit: handleDeclareResult,
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                  "div",
                                  {
                                    className: "modal-body",
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
                                              className: "col-md-12",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "h5",
                                                  {
                                                    children: [
                                                      "Match: ",
                                                      selectedBet.matchName,
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 495,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "h6",
                                                  {
                                                    children: [
                                                      "Market: ",
                                                      selectedBet.marketName,
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 496,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "h6",
                                                  {
                                                    children: [
                                                      "Selection: ",
                                                      selectedBet.selectionName,
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 497,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "h6",
                                                  {
                                                    children: [
                                                      "Bet Count: ",
                                                      selectedBet.betCount,
                                                      " bets",
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 498,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                                  "h6",
                                                  {
                                                    children: [
                                                      "Total Stake: \u20B9",
                                                      (_selectedBet$totalSta =
                                                        selectedBet.totalStake) ===
                                                        null ||
                                                      _selectedBet$totalSta ===
                                                        void 0
                                                        ? void 0
                                                        : _selectedBet$totalSta.toLocaleString(),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 499,
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
                                              lineNumber: 494,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 493,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        "hr",
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 502,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        "div",
                                        {
                                          className: "form-group",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                              "label",
                                              {
                                                children:
                                                  selectedBet.bet_on === "FANCY"
                                                    ? "Result Value:"
                                                    : "Select Winner:",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 504,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            ),
                                            renderResultInput(),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 503,
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
                                    lineNumber: 492,
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
                                        "button",
                                        {
                                          type: "button",
                                          className: "btn btn-default",
                                          onClick: () => setIsOpen(false),
                                          children: "Cancel",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 511,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(
                                        "button",
                                        {
                                          type: "submit",
                                          className: "btn btn-success",
                                          disabled: loading,
                                          children: loading
                                            ? "Declaring..."
                                            : "Declare Result",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 518,
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
                                    lineNumber: 510,
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
                              lineNumber: 491,
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
                        lineNumber: 478,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 472,
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
              lineNumber: 285,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(UndeclaredBets, "HKZfsmPKG1BNuyqW1C2M3J0fIEc=");
        _c = UndeclaredBets;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UndeclaredBets;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "UndeclaredBets");

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

    /***/ "./src/services/fancy.service.ts":
      /*!***************************************!*\
  !*** ./src/services/fancy.service.ts ***!
  \***************************************/
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

        class FancyService {
          getActiveFancies(matchId, status) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `active-fancies?matchId=${matchId}&gtype=${status}`
            );
          }
          suspendFancy(marketId, matchId, type) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `suspend-fancy?marketId=${marketId}&matchId=${matchId}&type=${type}`
            );
          }
          fancyResult(marketId, matchId, result) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `result-fancy?marketId=${marketId}&matchId=${matchId}&result=${result}`
            );
          }
          fancyResultRollback(marketId, matchId) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `fancy-result-rollback?marketId=${marketId}&matchId=${matchId}`
            );
          }

          // ✅ NEW: Alias methods for undeclared bets management (for consistency)
          declareFancyResult(marketId, matchId, result) {
            return this.fancyResult(marketId, matchId, result);
          }
          rollbackFancyResult(marketId, matchId) {
            return this.fancyResultRollback(marketId, matchId);
          }
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          new FancyService();

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

    /***/ "./src/services/market.service.ts":
      /*!****************************************!*\
  !*** ./src/services/market.service.ts ***!
  \****************************************/
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

        class MarketService {
          getActiveMarkets(matchId) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `active-markets?matchId=${matchId}`
            );
          }
          changeStatusMarket(marketId, matchId) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `change-status-markets?marketId=${marketId}&matchId=${matchId}`
            );
          }
          deleteMarket(marketId, matchId) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `delete-market?marketId=${marketId}&matchId=${matchId}`
            );
          }
          marketResult(marketId, matchId, result) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `result-market?marketId=${marketId}&matchId=${matchId}&selectionId=${result}`
            );
          }
          rollbackmarketResult(marketId, matchId) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].get(
              `rollback-result-market-wise?marketId=${marketId}&matchId=${matchId}`
            );
          }
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          new MarketService();

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
//# sourceMappingURL=src_admin-app_pages_undeclared-bets_undeclared-bets_tsx.chunk.js.map
