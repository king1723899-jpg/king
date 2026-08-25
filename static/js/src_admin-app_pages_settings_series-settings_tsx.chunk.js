"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_settings_series-settings_tsx"],
  {
    /***/ "./src/admin-app/pages/settings/series-settings.tsx":
      /*!**********************************************************!*\
  !*** ./src/admin-app/pages/settings/series-settings.tsx ***!
  \**********************************************************/
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
        /* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.ts");
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/settings/series-settings.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        // Extend window interface for TypeScript

        const SeriesSettings = () => {
          _s();
          const [competitions, setCompetitions] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const [seriesSettings, setSeriesSettings] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const [selectedSportId, setSelectedSportId] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(4); // Default to Cricket
          const [loading, setLoading] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [saving, setSaving] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [selectedSeries, setSelectedSeries] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
          const [editMode, setEditMode] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [seriesMatches, setSeriesMatches] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const [loadingMatches, setLoadingMatches] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [lastUpdated, setLastUpdated] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
          const [error, setError] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
          const sports = [
            {
              id: 1,
              name: "Football",
            },
            {
              id: 2,
              name: "Tennis",
            },
            {
              id: 4,
              name: "Cricket",
            },
          ];
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const loadData = async () => {
              console.log("🔄 Loading data for sportId:", selectedSportId);
              const loadedCompetitions = await loadCompetitions();
              console.log(
                "🏆 Competitions loaded, now loading series settings..."
              );
              await loadSeriesSettings(loadedCompetitions); // Pass competitions directly
            };
            loadData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [selectedSportId]);

          // ✅ NEW: Watch competitions state changes
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            console.log("🔍 Competitions state changed:", {
              competitions,
              isArray: Array.isArray(competitions),
              length:
                competitions === null || competitions === void 0
                  ? void 0
                  : competitions.length,
            });
          }, [competitions]);
          const loadCompetitions = async () => {
            try {
              var _response$data$data;
              setLoading(true);
              setError(null);
              // ✅ FIX: Use proper API utility with automatic JWT handling
              const response = await _utils_api__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ].get(`competitions/${selectedSportId}`);
              console.log("🏆 Competitions API Response:", response.data);
              // ✅ FIX: Access correct nested data structure: response.data.data.data
              const competitionsData =
                ((_response$data$data = response.data.data) === null ||
                _response$data$data === void 0
                  ? void 0
                  : _response$data$data.data) ||
                response.data.data ||
                [];
              console.log("🏆 Extracted competitions data:", competitionsData);

              // Store globally for loadSeriesMatches to access matches
              window.lastCompetitionsData = competitionsData;
              setCompetitions(competitionsData);
              setLastUpdated(new Date());
              return competitionsData; // Return the data
            } catch (error) {
              var _error$response, _error$response$data;
              console.error("Error loading competitions:", error);
              setError(
                ((_error$response = error.response) === null ||
                _error$response === void 0
                  ? void 0
                  : (_error$response$data = _error$response.data) === null ||
                    _error$response$data === void 0
                  ? void 0
                  : _error$response$data.message) ||
                  "Failed to load competitions"
              );
              setCompetitions([]);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to load competitions"
              );
              return []; // Return empty array on error
            } finally {
              setLoading(false);
            }
          };
          const loadSeriesSettings = async (competitionsData) => {
            try {
              // ✅ FIX: Use proper API utility with automatic JWT handling
              const response = await _utils_api__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ].get(`series-settings?sportId=${selectedSportId}`);
              console.log("⚙️ Series Settings API Response:", response.data);
              // Access nested data structure: response.data.data.data
              const existingSettings = response.data.data.data || [];

              // ✅ FIX: Use passed competitions data or fallback to state
              const compsToUse = competitionsData || competitions;
              console.log(
                "🔍 loadSeriesSettings - checking competitions data:",
                {
                  competitionsData,
                  competitions,
                  compsToUse,
                  isArray: Array.isArray(compsToUse),
                  length:
                    compsToUse === null || compsToUse === void 0
                      ? void 0
                      : compsToUse.length,
                  type: typeof compsToUse,
                }
              );
              if (!Array.isArray(compsToUse) || compsToUse.length === 0) {
                console.warn(
                  "⚠️ Competitions not loaded yet, skipping series settings load",
                  {
                    competitionsData,
                    competitions,
                    compsToUse,
                    isArray: Array.isArray(compsToUse),
                    length:
                      compsToUse === null || compsToUse === void 0
                        ? void 0
                        : compsToUse.length,
                  }
                );
                return;
              }

              // Use match counts already provided by the competitions API
              const settingsWithMatchCounts = compsToUse.map((comp) => {
                const existing = existingSettings.find(
                  (s) => s.seriesId === comp.competitionId
                );

                // Use match count from competition data (no additional API calls needed)
                const matchCount = comp.matchCount || 0;
                console.log(
                  `📊 Using match count from API for ${comp.competitionName}: ${matchCount}`
                );
                if (existing && existing.seriesId) {
                  return {
                    ...existing,
                    matchCount,
                  };
                }
                return {
                  seriesId: comp.competitionId,
                  seriesName: comp.competitionName,
                  sportId: comp.sportId,
                  minBet: {
                    match: 0,
                    match1: 0,
                    fancy: 0,
                  },
                  maxBet: {
                    match: 0,
                    match1: 0,
                    fancy: 0,
                  },
                  maxProfit: {
                    match: 0,
                    match1: 0,
                    fancy: 0,
                  },
                  active: true,
                  matchCount,
                };
              });
              setSeriesSettings(settingsWithMatchCounts);
            } catch (error) {
              console.error("Error loading series settings:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to load series settings"
              );
            }
          };
          const loadSeriesMatches = (seriesId) => {
            try {
              setLoadingMatches(true);

              // Find the competition data from already loaded data - no additional API call needed
              let targetCompetition = null;

              // First, try to find from recently loaded competitions data
              if (window.lastCompetitionsData) {
                targetCompetition = window.lastCompetitionsData.find(
                  (comp) => comp.competitionId === seriesId
                );
              }

              // If not found, try to find from series settings (which may have been populated with competition data)
              if (!targetCompetition) {
                targetCompetition = seriesSettings.find(
                  (setting) => setting.seriesId === seriesId
                );
              }
              if (targetCompetition && targetCompetition.matches) {
                const matches = targetCompetition.matches || [];
                console.log(
                  `✅ Found ${matches.length} matches for series ${seriesId} from loaded data`
                );
                setSeriesMatches(matches);
              } else {
                console.warn(
                  `No matches found for series ${seriesId} in loaded data`
                );
                setSeriesMatches([]);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info(
                  "No matches available for this series"
                );
              }
            } catch (error) {
              console.error("Error loading series matches:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to load series matches"
              );
              setSeriesMatches([]);
            } finally {
              setLoadingMatches(false);
            }
          };
          const saveSettings = async () => {
            try {
              setSaving(true);

              // ✅ FIX: Save to actual API endpoint
              const savePromises = seriesSettings.map(async (setting) => {
                // Only save if any values are set (not all zeros)
                const hasValues =
                  Object.values(setting.minBet).some((v) => v > 0) ||
                  Object.values(setting.maxBet).some((v) => v > 0) ||
                  Object.values(setting.maxProfit).some((v) => v > 0);
                if (!hasValues) return Promise.resolve();
                const response = await _utils_api__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].post("series-settings", setting);
                return response.data;
              });
              await Promise.all(savePromises);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                "Series settings saved successfully!"
              );
            } catch (error) {
              console.error("Error saving settings:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to save series settings"
              );
            } finally {
              setSaving(false);
            }
          };
          const handleEditSeries = async (series) => {
            setSelectedSeries(series);
            setEditMode(true);
            await loadSeriesMatches(series.seriesId);
          };
          const handleBackToList = () => {
            setSelectedSeries(null);
            setEditMode(false);
            loadSeriesSettings(); // Reload to get fresh data - will use state competitions
          };
          const handleRefresh = async () => {
            setLoading(true);
            try {
              const loadedCompetitions = await loadCompetitions();
              await loadSeriesSettings(loadedCompetitions); // Pass competitions directly
            } finally {
              setLoading(false);
            }
          };
          const updateSeriesSetting = (field, marketType, value) => {
            if (!selectedSeries) return;
            const fieldValue = selectedSeries[field];
            const updatedSeries = {
              ...selectedSeries,
              [field]: {
                ...(typeof fieldValue === "object" && fieldValue !== null
                  ? fieldValue
                  : {}),
                [marketType]: value,
              },
            };
            setSelectedSeries(updatedSeries);

            // Also update in the main array
            setSeriesSettings((prev) =>
              prev.map((s) =>
                s.seriesId === updatedSeries.seriesId ? updatedSeries : s
              )
            );
          };
          const saveSelectedSeries = async () => {
            if (!selectedSeries) return;
            try {
              setSaving(true);
              await _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].post(
                "series-settings",
                selectedSeries
              );
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                "Series setting saved successfully!"
              );
              handleBackToList();
            } catch (error) {
              console.error("Error saving series setting:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to save series setting"
              );
            } finally {
              setSaving(false);
            }
          };

          // Render edit mode for selected series
          if (editMode && selectedSeries) {
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
              "div",
              {
                className: "content-wrapper",
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                    "section",
                    {
                      className: "content-header",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                          "h1",
                          {
                            children: [
                              selectedSeries.seriesName,
                              " - Betting Limits",
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 305,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                          "ol",
                          {
                            className: "breadcrumb",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                "li",
                                {
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                    "button",
                                    {
                                      type: "button",
                                      className: "btn-link",
                                      style: {
                                        border: "none",
                                        background: "none",
                                        padding: 0,
                                        color: "inherit",
                                      },
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                          "i",
                                          {
                                            className: "fa fa-dashboard",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 307,
                                            columnNumber: 135,
                                          },
                                          undefined
                                        ),
                                        " Home",
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 307,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 307,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                "li",
                                {
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                    "button",
                                    {
                                      type: "button",
                                      className: "btn-link",
                                      style: {
                                        border: "none",
                                        background: "none",
                                        padding: 0,
                                        color: "inherit",
                                      },
                                      children: "Settings",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 308,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 308,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                "li",
                                {
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                    "button",
                                    {
                                      type: "button",
                                      className: "btn-link",
                                      style: {
                                        border: "none",
                                        background: "none",
                                        padding: 0,
                                        color: "inherit",
                                      },
                                      onClick: handleBackToList,
                                      children: "Series Settings",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 309,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 309,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                "li",
                                {
                                  className: "active",
                                  children: "Edit Series",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 310,
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
                      lineNumber: 304,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                    "section",
                    {
                      className: "content",
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                        "div",
                        {
                          className: "row",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "div",
                            {
                              className: "col-md-12",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                "div",
                                {
                                  className: "box box-primary",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                      "div",
                                      {
                                        className: "box-header with-border",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "h3",
                                            {
                                              className: "box-title",
                                              children: [
                                                "Edit: ",
                                                selectedSeries.seriesName,
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 319,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "box-tools pull-right",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                "button",
                                                {
                                                  className:
                                                    "btn btn-default btn-sm",
                                                  onClick: handleBackToList,
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      "i",
                                                      {
                                                        className:
                                                          "fa fa-arrow-left",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 325,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    " Back to List",
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 321,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 320,
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
                                        lineNumber: 318,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                      "div",
                                      {
                                        className: "box-body",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "row",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-12",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      "h4",
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "i",
                                                            {
                                                              className:
                                                                "fa fa-list",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 334,
                                                              columnNumber: 27,
                                                            },
                                                            undefined
                                                          ),
                                                          " Matches in this Series (",
                                                          selectedSeries.matchCount ||
                                                            0,
                                                          ")",
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 334,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    loadingMatches
                                                      ? /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "text-center",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                "i",
                                                                {
                                                                  className:
                                                                    "fa fa-spinner fa-spin",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 337,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              " Loading matches...",
                                                            ],
                                                          },
                                                          void 0,
                                                          true,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 336,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        )
                                                      : seriesMatches.length > 0
                                                      ? /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "table-responsive",
                                                            style: {
                                                              maxHeight:
                                                                "200px",
                                                              overflowY: "auto",
                                                            },
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                "table",
                                                                {
                                                                  className:
                                                                    "table table-condensed table-striped",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                      "thead",
                                                                      {
                                                                        children:
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                            "tr",
                                                                            {
                                                                              children:
                                                                                [
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
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
                                                                                      lineNumber: 344,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
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
                                                                                      lineNumber: 345,
                                                                                      columnNumber: 33,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                    "th",
                                                                                    {
                                                                                      children:
                                                                                        "Start Time",
                                                                                    },
                                                                                    void 0,
                                                                                    false,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 346,
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
                                                                              lineNumber: 343,
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
                                                                        lineNumber: 342,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                      "tbody",
                                                                      {
                                                                        children:
                                                                          seriesMatches.map(
                                                                            (
                                                                              match,
                                                                              index
                                                                            ) =>
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                "tr",
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "td",
                                                                                        {
                                                                                          children:
                                                                                            [
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                                "strong",
                                                                                                {
                                                                                                  children:
                                                                                                    match.matchName ||
                                                                                                    match.name ||
                                                                                                    `Match ${
                                                                                                      match.matchId ||
                                                                                                      match.gmid
                                                                                                    }`,
                                                                                                },
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 353,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                                "br",
                                                                                                {},
                                                                                                void 0,
                                                                                                false,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _jsxFileName,
                                                                                                  lineNumber: 354,
                                                                                                  columnNumber: 37,
                                                                                                },
                                                                                                undefined
                                                                                              ),
                                                                                              /*#__PURE__*/ (0,
                                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                                "small",
                                                                                                {
                                                                                                  className:
                                                                                                    "text-muted",
                                                                                                  children:
                                                                                                    [
                                                                                                      "Game ID: ",
                                                                                                      match.matchId ||
                                                                                                        match.gmid ||
                                                                                                        "N/A",
                                                                                                      match.etid &&
                                                                                                        /*#__PURE__*/ (0,
                                                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                                          "span",
                                                                                                          {
                                                                                                            children:
                                                                                                              [
                                                                                                                " | Sport: ",
                                                                                                                match.etid,
                                                                                                              ],
                                                                                                          },
                                                                                                          void 0,
                                                                                                          true,
                                                                                                          {
                                                                                                            fileName:
                                                                                                              _jsxFileName,
                                                                                                            lineNumber: 357,
                                                                                                            columnNumber: 54,
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
                                                                                                  lineNumber: 355,
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
                                                                                          lineNumber: 352,
                                                                                          columnNumber: 35,
                                                                                        },
                                                                                        undefined
                                                                                      ),
                                                                                      /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "td",
                                                                                        {
                                                                                          children:
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                              "span",
                                                                                              {
                                                                                                className: `label ${
                                                                                                  match.iscc ===
                                                                                                  0
                                                                                                    ? "label-success"
                                                                                                    : match.iscc ===
                                                                                                      1
                                                                                                    ? "label-warning"
                                                                                                    : "label-info"
                                                                                                }`,
                                                                                                children:
                                                                                                  match.iscc ===
                                                                                                  0
                                                                                                    ? "Active"
                                                                                                    : match.iscc ===
                                                                                                      1
                                                                                                    ? "Complete"
                                                                                                    : "Upcoming",
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 361,
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
                                                                                          lineNumber: 360,
                                                                                          columnNumber: 35,
                                                                                        },
                                                                                        undefined
                                                                                      ),
                                                                                      /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "td",
                                                                                        {
                                                                                          children:
                                                                                            /*#__PURE__*/ (0,
                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                              "small",
                                                                                              {
                                                                                                className:
                                                                                                  "text-muted",
                                                                                                children:
                                                                                                  match.openDate
                                                                                                    ? new Date(
                                                                                                        match.openDate
                                                                                                      ).toLocaleString()
                                                                                                    : match.lastUpdated
                                                                                                    ? new Date(
                                                                                                        match.lastUpdated
                                                                                                      ).toLocaleString()
                                                                                                    : "TBD",
                                                                                              },
                                                                                              void 0,
                                                                                              false,
                                                                                              {
                                                                                                fileName:
                                                                                                  _jsxFileName,
                                                                                                lineNumber: 366,
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
                                                                                          lineNumber: 365,
                                                                                          columnNumber: 35,
                                                                                        },
                                                                                        undefined
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                                match.matchId ||
                                                                                  match.gmid ||
                                                                                  index,
                                                                                true,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 351,
                                                                                  columnNumber: 33,
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
                                                                        lineNumber: 349,
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
                                                                  lineNumber: 341,
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
                                                            lineNumber: 340,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        )
                                                      : /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "alert alert-info",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                "i",
                                                                {
                                                                  className:
                                                                    "fa fa-info-circle",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 378,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              " No matches found for this series.",
                                                            ],
                                                          },
                                                          void 0,
                                                          true,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 377,
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
                                                  lineNumber: 333,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 332,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "hr",
                                            {},
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 384,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "row",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "col-md-12",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      "h4",
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "i",
                                                            {
                                                              className:
                                                                "fa fa-cogs",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 389,
                                                              columnNumber: 27,
                                                            },
                                                            undefined
                                                          ),
                                                          " Betting Limits Configuration",
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 389,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      "p",
                                                      {
                                                        className: "text-muted",
                                                        children:
                                                          "Configure min/max bet limits and max profit for this series. Leave 0 to use global settings.",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 390,
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
                                                  lineNumber: 388,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 387,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "row",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-md-4",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "h4",
                                                        {
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "i",
                                                              {
                                                                className:
                                                                  "fa fa-exchange",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 396,
                                                                columnNumber: 27,
                                                              },
                                                              undefined
                                                            ),
                                                            " Match Odds",
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 396,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "label",
                                                              {
                                                                children:
                                                                  "Min Bet",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 398,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                className:
                                                                  "form-control",
                                                                value:
                                                                  selectedSeries
                                                                    .minBet
                                                                    .match,
                                                                onChange: (e) =>
                                                                  updateSeriesSetting(
                                                                    "minBet",
                                                                    "match",
                                                                    parseInt(
                                                                      e.target
                                                                        .value
                                                                    ) || 0
                                                                  ),
                                                                placeholder:
                                                                  "Leave 0 for global setting",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 399,
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
                                                          lineNumber: 397,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "label",
                                                              {
                                                                children:
                                                                  "Max Bet",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 408,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                className:
                                                                  "form-control",
                                                                value:
                                                                  selectedSeries
                                                                    .maxBet
                                                                    .match,
                                                                onChange: (e) =>
                                                                  updateSeriesSetting(
                                                                    "maxBet",
                                                                    "match",
                                                                    parseInt(
                                                                      e.target
                                                                        .value
                                                                    ) || 0
                                                                  ),
                                                                placeholder:
                                                                  "Leave 0 for global setting",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 409,
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
                                                          lineNumber: 407,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "label",
                                                              {
                                                                children:
                                                                  "Max Profit",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 418,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                className:
                                                                  "form-control",
                                                                value:
                                                                  selectedSeries
                                                                    .maxProfit
                                                                    .match,
                                                                onChange: (e) =>
                                                                  updateSeriesSetting(
                                                                    "maxProfit",
                                                                    "match",
                                                                    parseInt(
                                                                      e.target
                                                                        .value
                                                                    ) || 0
                                                                  ),
                                                                placeholder:
                                                                  "Leave 0 for global setting",
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
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 417,
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
                                                    lineNumber: 395,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-md-4",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "h4",
                                                        {
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "i",
                                                              {
                                                                className:
                                                                  "fa fa-book",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 430,
                                                                columnNumber: 27,
                                                              },
                                                              undefined
                                                            ),
                                                            " Bookmaker",
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 430,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "label",
                                                              {
                                                                children:
                                                                  "Min Bet",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 432,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                className:
                                                                  "form-control",
                                                                value:
                                                                  selectedSeries
                                                                    .minBet
                                                                    .match1,
                                                                onChange: (e) =>
                                                                  updateSeriesSetting(
                                                                    "minBet",
                                                                    "match1",
                                                                    parseInt(
                                                                      e.target
                                                                        .value
                                                                    ) || 0
                                                                  ),
                                                                placeholder:
                                                                  "Leave 0 for global setting",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 433,
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
                                                          lineNumber: 431,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "label",
                                                              {
                                                                children:
                                                                  "Max Bet",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 442,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                className:
                                                                  "form-control",
                                                                value:
                                                                  selectedSeries
                                                                    .maxBet
                                                                    .match1,
                                                                onChange: (e) =>
                                                                  updateSeriesSetting(
                                                                    "maxBet",
                                                                    "match1",
                                                                    parseInt(
                                                                      e.target
                                                                        .value
                                                                    ) || 0
                                                                  ),
                                                                placeholder:
                                                                  "Leave 0 for global setting",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 443,
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
                                                          lineNumber: 441,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "label",
                                                              {
                                                                children:
                                                                  "Max Profit",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 452,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                className:
                                                                  "form-control",
                                                                value:
                                                                  selectedSeries
                                                                    .maxProfit
                                                                    .match1,
                                                                onChange: (e) =>
                                                                  updateSeriesSetting(
                                                                    "maxProfit",
                                                                    "match1",
                                                                    parseInt(
                                                                      e.target
                                                                        .value
                                                                    ) || 0
                                                                  ),
                                                                placeholder:
                                                                  "Leave 0 for global setting",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 453,
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
                                                          lineNumber: 451,
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
                                                    lineNumber: 429,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-md-4",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "h4",
                                                        {
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "i",
                                                              {
                                                                className:
                                                                  "fa fa-line-chart",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 464,
                                                                columnNumber: 27,
                                                              },
                                                              undefined
                                                            ),
                                                            " Fancy",
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 464,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "label",
                                                              {
                                                                children:
                                                                  "Min Bet",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 466,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                className:
                                                                  "form-control",
                                                                value:
                                                                  selectedSeries
                                                                    .minBet
                                                                    .fancy,
                                                                onChange: (e) =>
                                                                  updateSeriesSetting(
                                                                    "minBet",
                                                                    "fancy",
                                                                    parseInt(
                                                                      e.target
                                                                        .value
                                                                    ) || 0
                                                                  ),
                                                                placeholder:
                                                                  "Leave 0 for global setting",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 467,
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
                                                          lineNumber: 465,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "label",
                                                              {
                                                                children:
                                                                  "Max Bet",
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
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                className:
                                                                  "form-control",
                                                                value:
                                                                  selectedSeries
                                                                    .maxBet
                                                                    .fancy,
                                                                onChange: (e) =>
                                                                  updateSeriesSetting(
                                                                    "maxBet",
                                                                    "fancy",
                                                                    parseInt(
                                                                      e.target
                                                                        .value
                                                                    ) || 0
                                                                  ),
                                                                placeholder:
                                                                  "Leave 0 for global setting",
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
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 475,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          className:
                                                            "form-group",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "label",
                                                              {
                                                                children:
                                                                  "Max Profit",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 486,
                                                                columnNumber: 25,
                                                              },
                                                              undefined
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                className:
                                                                  "form-control",
                                                                value:
                                                                  selectedSeries
                                                                    .maxProfit
                                                                    .fancy,
                                                                onChange: (e) =>
                                                                  updateSeriesSetting(
                                                                    "maxProfit",
                                                                    "fancy",
                                                                    parseInt(
                                                                      e.target
                                                                        .value
                                                                    ) || 0
                                                                  ),
                                                                placeholder:
                                                                  "Leave 0 for global setting",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 487,
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
                                                          lineNumber: 485,
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
                                                    lineNumber: 463,
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
                                              lineNumber: 394,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "row",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                "div",
                                                {
                                                  className:
                                                    "col-md-12 text-center",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      "button",
                                                      {
                                                        className:
                                                          "btn btn-primary btn-lg",
                                                        onClick:
                                                          saveSelectedSeries,
                                                        disabled: saving,
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "i",
                                                            {
                                                              className:
                                                                "fa fa-save",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 505,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          " ",
                                                          saving
                                                            ? "Saving..."
                                                            : "Save Series Settings",
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 500,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      "button",
                                                      {
                                                        className:
                                                          "btn btn-default btn-lg",
                                                        onClick:
                                                          handleBackToList,
                                                        style: {
                                                          marginLeft: "10px",
                                                        },
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "i",
                                                            {
                                                              className:
                                                                "fa fa-times",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 512,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          " Cancel",
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
                                                  lineNumber: 499,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 498,
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
                                        lineNumber: 330,
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
                                  lineNumber: 317,
                                  columnNumber: 15,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 316,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 315,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 314,
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
                lineNumber: 303,
                columnNumber: 7,
              },
              undefined
            );
          }
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                "div",
                {
                  className: "container-fluid",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                    "div",
                    {
                      className: "row",
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                        "div",
                        {
                          className: "col-md-12",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "div",
                            {
                              className: "card",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                  "div",
                                  {
                                    className:
                                      "card-header d-flex justify-content-between align-items-center",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                        "h4",
                                        {
                                          children: "Series Betting Limits",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 532,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                        "div",
                                        {
                                          className:
                                            "d-flex align-items-center",
                                          children: [
                                            lastUpdated &&
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                "small",
                                                {
                                                  className: "text-muted mr-3",
                                                  children: [
                                                    "Last updated: ",
                                                    lastUpdated.toLocaleTimeString(),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 535,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                              "button",
                                              {
                                                className:
                                                  "btn btn-primary btn-sm mr-2",
                                                onClick: handleRefresh,
                                                disabled: loading,
                                                children: loading
                                                  ? /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "i",
                                                            {
                                                              className:
                                                                "fas fa-spinner fa-spin mr-1",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 546,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          "Loading...",
                                                        ],
                                                      },
                                                      void 0,
                                                      true
                                                    )
                                                  : /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "i",
                                                            {
                                                              className:
                                                                "fas fa-refresh mr-1",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 551,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          "Refresh",
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
                                                lineNumber: 539,
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
                                          lineNumber: 533,
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
                                    lineNumber: 531,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                  "div",
                                  {
                                    className: "card-body",
                                    children: [
                                      error &&
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                          "div",
                                          {
                                            className: "alert alert-danger",
                                            role: "alert",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                "i",
                                                {
                                                  className:
                                                    "fas fa-exclamation-triangle mr-2",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 562,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              error,
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 561,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row mb-4",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                              "div",
                                              {
                                                className: "col-md-4",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "form-group",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "label",
                                                        {
                                                          children:
                                                            "Select Sport:",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 571,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "select",
                                                        {
                                                          className:
                                                            "form-control",
                                                          value:
                                                            selectedSportId,
                                                          onChange: (e) =>
                                                            setSelectedSportId(
                                                              parseInt(
                                                                e.target.value
                                                              )
                                                            ),
                                                          children: sports.map(
                                                            (sport) =>
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                "option",
                                                                {
                                                                  value:
                                                                    sport.id,
                                                                  children:
                                                                    sport.name,
                                                                },
                                                                sport.id,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 578,
                                                                  columnNumber: 27,
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
                                                          lineNumber: 572,
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
                                                    lineNumber: 570,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 569,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                              "div",
                                              {
                                                className: "col-md-4",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "form-group",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "label",
                                                        {
                                                          children: "\xA0",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 587,
                                                          columnNumber: 23,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "div",
                                                        {
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                              "button",
                                                              {
                                                                className:
                                                                  "btn btn-info",
                                                                onClick:
                                                                  loadCompetitions,
                                                                disabled:
                                                                  loading,
                                                                children:
                                                                  loading
                                                                    ? "Loading..."
                                                                    : "Refresh Competitions",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 589,
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
                                                          lineNumber: 588,
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
                                                    lineNumber: 586,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 585,
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
                                          lineNumber: 568,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-md-12",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "h4",
                                                  {
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                        "i",
                                                        {
                                                          className:
                                                            "fa fa-list",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 604,
                                                          columnNumber: 25,
                                                        },
                                                        undefined
                                                      ),
                                                      " Available Series (",
                                                      seriesSettings.length,
                                                      ")",
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 604,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "p",
                                                  {
                                                    className: "text-muted",
                                                    children:
                                                      "Click on a series name to configure its betting limits",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 605,
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
                                              lineNumber: 603,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 602,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      loading && seriesSettings.length === 0
                                        ? /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "text-center py-5",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "i",
                                                  {
                                                    className:
                                                      "fas fa-spinner fa-spin fa-2x mb-3",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 611,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "p",
                                                  {
                                                    children:
                                                      "Loading series data...",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 612,
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
                                              lineNumber: 610,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          )
                                        : seriesSettings.length === 0
                                        ? /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "text-center py-5",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "i",
                                                  {
                                                    className:
                                                      "fas fa-chart-line fa-2x mb-3 text-muted",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 616,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "p",
                                                  {
                                                    children:
                                                      "No series found for this sport",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 617,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                  "button",
                                                  {
                                                    className:
                                                      "btn btn-primary",
                                                    onClick: handleRefresh,
                                                    children: "Try Again",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 618,
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
                                              lineNumber: 615,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          )
                                        : /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "list-group",
                                              children: seriesSettings.map(
                                                (setting) => {
                                                  var _sports$find;
                                                  const hasSettings =
                                                    Object.values(
                                                      setting.minBet
                                                    ).some((v) => v > 0) ||
                                                    Object.values(
                                                      setting.maxBet
                                                    ).some((v) => v > 0) ||
                                                    Object.values(
                                                      setting.maxProfit
                                                    ).some((v) => v > 0);
                                                  return /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: `list-group-item ${
                                                        hasSettings
                                                          ? "list-group-item-success"
                                                          : ""
                                                      }`,
                                                      style: {
                                                        cursor: "pointer",
                                                        marginBottom: "5px",
                                                        borderRadius: "4px",
                                                      },
                                                      onClick: () =>
                                                        handleEditSeries(
                                                          setting
                                                        ),
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className: "row",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "col-md-8",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                      "h4",
                                                                      {
                                                                        className:
                                                                          "list-group-item-heading",
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                              "i",
                                                                              {
                                                                                className: `fa ${
                                                                                  hasSettings
                                                                                    ? "fa-check-circle text-success"
                                                                                    : "fa-circle-o text-muted"
                                                                                }`,
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 640,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            " ",
                                                                            setting.seriesName,
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-primary",
                                                                                children:
                                                                                  /*#__PURE__*/ (0,
                                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                    "strong",
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          "(",
                                                                                          setting.matchCount ||
                                                                                            0,
                                                                                          ")",
                                                                                        ],
                                                                                    },
                                                                                    void 0,
                                                                                    true,
                                                                                    {
                                                                                      fileName:
                                                                                        _jsxFileName,
                                                                                      lineNumber: 642,
                                                                                      columnNumber: 64,
                                                                                    },
                                                                                    undefined
                                                                                  ),
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 642,
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
                                                                        lineNumber: 639,
                                                                        columnNumber: 31,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                      "p",
                                                                      {
                                                                        className:
                                                                          "list-group-item-text text-muted",
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                              "i",
                                                                              {
                                                                                className:
                                                                                  "fa fa-trophy",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 645,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            " Sport: ",
                                                                            (_sports$find =
                                                                              sports.find(
                                                                                (
                                                                                  s
                                                                                ) =>
                                                                                  s.id ===
                                                                                  selectedSportId
                                                                              )) ===
                                                                              null ||
                                                                            _sports$find ===
                                                                              void 0
                                                                              ? void 0
                                                                              : _sports$find.name,
                                                                            hasSettings &&
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      " • ",
                                                                                      /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "i",
                                                                                        {
                                                                                          className:
                                                                                            "fa fa-cog",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 648,
                                                                                          columnNumber: 44,
                                                                                        },
                                                                                        undefined
                                                                                      ),
                                                                                      " Custom limits configured",
                                                                                    ],
                                                                                },
                                                                                void 0,
                                                                                true
                                                                              ),
                                                                          ],
                                                                      },
                                                                      void 0,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 644,
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
                                                                  lineNumber: 638,
                                                                  columnNumber: 29,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "col-md-4 text-right",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                      "div",
                                                                      {
                                                                        style: {
                                                                          marginTop:
                                                                            "10px",
                                                                        },
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                              "span",
                                                                              {
                                                                                className: `label ${
                                                                                  hasSettings
                                                                                    ? "label-success"
                                                                                    : "label-default"
                                                                                }`,
                                                                                style:
                                                                                  {
                                                                                    marginRight:
                                                                                      "5px",
                                                                                  },
                                                                                children:
                                                                                  hasSettings
                                                                                    ? "Configured"
                                                                                    : "Default",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 655,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                              "button",
                                                                              {
                                                                                className:
                                                                                  "btn btn-primary btn-sm",
                                                                                onClick:
                                                                                  (
                                                                                    e
                                                                                  ) => {
                                                                                    e.stopPropagation();
                                                                                    handleEditSeries(
                                                                                      setting
                                                                                    );
                                                                                  },
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                      "i",
                                                                                      {
                                                                                        className:
                                                                                          "fa fa-edit",
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
                                                                                    " Configure",
                                                                                  ],
                                                                              },
                                                                              void 0,
                                                                              true,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 658,
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
                                                                        lineNumber: 654,
                                                                        columnNumber: 31,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                      "div",
                                                                      {
                                                                        style: {
                                                                          marginTop:
                                                                            "5px",
                                                                        },
                                                                        children:
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                            "small",
                                                                            {
                                                                              className:
                                                                                "text-muted",
                                                                              children:
                                                                                [
                                                                                  "M: ",
                                                                                  setting
                                                                                    .minBet
                                                                                    .match >
                                                                                  0
                                                                                    ? /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "i",
                                                                                        {
                                                                                          className:
                                                                                            "fa fa-check text-success",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 670,
                                                                                          columnNumber: 66,
                                                                                        },
                                                                                        undefined
                                                                                      )
                                                                                    : /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "i",
                                                                                        {
                                                                                          className:
                                                                                            "fa fa-minus text-muted",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 670,
                                                                                          columnNumber: 113,
                                                                                        },
                                                                                        undefined
                                                                                      ),
                                                                                  " ",
                                                                                  "B: ",
                                                                                  setting
                                                                                    .minBet
                                                                                    .match1 >
                                                                                  0
                                                                                    ? /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "i",
                                                                                        {
                                                                                          className:
                                                                                            "fa fa-check text-success",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 671,
                                                                                          columnNumber: 72,
                                                                                        },
                                                                                        undefined
                                                                                      )
                                                                                    : /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "i",
                                                                                        {
                                                                                          className:
                                                                                            "fa fa-minus text-muted",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 671,
                                                                                          columnNumber: 119,
                                                                                        },
                                                                                        undefined
                                                                                      ),
                                                                                  " ",
                                                                                  "F: ",
                                                                                  setting
                                                                                    .minBet
                                                                                    .fancy >
                                                                                  0
                                                                                    ? /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "i",
                                                                                        {
                                                                                          className:
                                                                                            "fa fa-check text-success",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 672,
                                                                                          columnNumber: 71,
                                                                                        },
                                                                                        undefined
                                                                                      )
                                                                                    : /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "i",
                                                                                        {
                                                                                          className:
                                                                                            "fa fa-minus text-muted",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 672,
                                                                                          columnNumber: 118,
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
                                                                              lineNumber: 669,
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
                                                                        lineNumber: 668,
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
                                                                  lineNumber: 653,
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
                                                            lineNumber: 637,
                                                            columnNumber: 27,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    setting.seriesId,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 631,
                                                      columnNumber: 25,
                                                    },
                                                    undefined
                                                  );
                                                }
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 623,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "col-md-12 text-center",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                "button",
                                                {
                                                  className:
                                                    "btn btn-success btn-lg",
                                                  onClick: saveSettings,
                                                  disabled:
                                                    saving ||
                                                    seriesSettings.length === 0,
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      "i",
                                                      {
                                                        className: "fa fa-save",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 691,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    " ",
                                                    saving
                                                      ? "Saving..."
                                                      : "Save All Modified Settings",
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 686,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 685,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 684,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-md-12",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "alert alert-info",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      "h4",
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "i",
                                                            {
                                                              className:
                                                                "icon fa fa-info",
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
                                                          " Note:",
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 738,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                      "ul",
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "li",
                                                            {
                                                              children:
                                                                "These limits apply to individual matches within each series separately",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 740,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "li",
                                                            {
                                                              children:
                                                                "Maximum profit limits prevent the total profit for any single market from exceeding the set amount",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 741,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "li",
                                                            {
                                                              children:
                                                                "User exposure limits and individual bet limits still apply in addition to these series limits",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 742,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                            "li",
                                                            {
                                                              children:
                                                                "Setting a limit of 0 will disable that specific limit",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 743,
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
                                                        lineNumber: 739,
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
                                                  lineNumber: 737,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 736,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 735,
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
                                    lineNumber: 559,
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
                              lineNumber: 530,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 529,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 528,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 527,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(SeriesSettings, "7nwR4NcYuTreXCJxQwGKMzXB6TA=");
        _c = SeriesSettings;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SeriesSettings;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "SeriesSettings");

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
//# sourceMappingURL=src_admin-app_pages_settings_series-settings_tsx.chunk.js.map
