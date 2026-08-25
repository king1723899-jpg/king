"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_settings_message_index_tsx"],
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

    /***/ "./src/admin-app/pages/settings/message/index.tsx":
      /*!********************************************************!*\
  !*** ./src/admin-app/pages/settings/message/index.tsx ***!
  \********************************************************/
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
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../../services/auth.service */ "./src/services/auth.service.ts"
          );
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../_layout/elements/mobile-subheader */ "./src/admin-app/pages/_layout/elements/mobile-subheader.tsx"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/settings/message/index.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const Message = () => {
          _s();
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_2__.useWebsocketUser)();
          const [settingList, setSettingList] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const [loading, setLoading] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            console.log("Loading settings...");
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"]
              .getSettingsList()
              .then((res) => {
                console.log("Settings response:", res.data);
                if (res.data && res.data.data && res.data.data.settings) {
                  // Transform the settings from backend format to frontend format
                  const transformedSettings = res.data.data.settings.map(
                    (setting) => ({
                      name: setting.name,
                      label:
                        setting.name === "welcomeMessage"
                          ? "Welcome Message"
                          : setting.name === "maintenanceMessage"
                          ? "Maintenance Message"
                          : setting.name === "userMaintenanceMessage"
                          ? "User Maintenance Message"
                          : setting.name === "adminMessage"
                          ? "Admin Message"
                          : setting.name === "userMessage"
                          ? "User Message"
                          : setting.name === "headerMessage"
                          ? "Header Message"
                          : setting.name === "headerMessageLink"
                          ? "Header Message Link"
                          : setting.name.charAt(0).toUpperCase() +
                            setting.name.slice(1),
                      value: setting.value || "",
                      active: setting.active || false,
                    })
                  );
                  console.log("Transformed settings:", transformedSettings);
                  setSettingList(transformedSettings);
                } else {
                  console.error(
                    "Invalid settings response structure:",
                    res.data
                  );
                  // Set default settings if none exist
                  setSettingList([
                    {
                      name: "welcomeMessage",
                      label: "Welcome Message",
                      value: "Welcome to our platform!",
                      active: true,
                    },
                    {
                      name: "maintenanceMessage",
                      label: "Maintenance Message",
                      value: "System is under maintenance",
                      active: false,
                    },
                    {
                      name: "userMaintenanceMessage",
                      label: "User Maintenance Message",
                      value: "User maintenance mode enabled",
                      active: false,
                    },
                    {
                      name: "adminMessage",
                      label: "Admin Message",
                      value: "Admin notification message",
                      active: true,
                    },
                    {
                      name: "userMessage",
                      label: "User Message",
                      value: "User notification message",
                      active: true,
                    },
                    {
                      name: "headerMessage",
                      label: "Header Message",
                      value: "Header notification",
                      active: false,
                    },
                    {
                      name: "headerMessageLink",
                      label: "Header Message Link",
                      value: "",
                      active: false,
                    },
                  ]);
                }
                setLoading(false);
              })
              .catch((error) => {
                console.error("Error loading settings:", error);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  "Failed to load settings"
                );
                // Set default settings on error
                setSettingList([
                  {
                    name: "welcomeMessage",
                    label: "Welcome Message",
                    value: "Welcome to our platform!",
                    active: true,
                  },
                  {
                    name: "maintenanceMessage",
                    label: "Maintenance Message",
                    value: "System is under maintenance",
                    active: false,
                  },
                  {
                    name: "userMaintenanceMessage",
                    label: "User Maintenance Message",
                    value: "User maintenance mode enabled",
                    active: false,
                  },
                  {
                    name: "adminMessage",
                    label: "Admin Message",
                    value: "Admin notification message",
                    active: true,
                  },
                  {
                    name: "userMessage",
                    label: "User Message",
                    value: "User notification message",
                    active: true,
                  },
                  {
                    name: "headerMessage",
                    label: "Header Message",
                    value: "Header notification",
                    active: false,
                  },
                  {
                    name: "headerMessageLink",
                    label: "Header Message Link",
                    value: "",
                    active: false,
                  },
                ]);
                setLoading(false);
              });
          }, []);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            socketUser.on("loggedOut", (msg) => {
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(msg);
            });
            return () => {
              socketUser.off("logoutAll");
              socketUser.off("loggedOut");
            };
          });
          const onChange = (e, index) => {
            const allSettingList = [...settingList];
            allSettingList[index]["value"] = e.target.value;
            setSettingList(allSettingList);
          };
          const onChangeActive = (e, index) => {
            const allSettingList = [...settingList];
            allSettingList[index]["active"] = e.target.checked;
            setSettingList(allSettingList);
          };
          const handleSettingSubmit = (e) => {
            e.preventDefault();
            console.log("Submitting settings:", settingList);
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"]
              .saveSettingList(settingList)
              .then((res) => {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                  res.data.message || "Settings saved successfully"
                );
              })
              .catch((error) => {
                console.error("Error saving settings:", error);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  "Failed to save settings"
                );
              });
          };
          if (loading) {
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
              {
                children: [
                  _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__[
                    "default"
                  ].subheaderdesktopadmin("Messages"),
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
                              className: "col-md-12 mt-1",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "div",
                                {
                                  className: "text-center",
                                  children: "Loading...",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 112,
                                  columnNumber: 15,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 111,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 110,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true
            );
          }
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ].subheaderdesktopadmin("Messages"),
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
                            className: "col-md-12 mt-1",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "div",
                              {
                                className: "add-account",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                  "form",
                                  {
                                    onSubmit: handleSettingSubmit,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "div",
                                      {
                                        className: "row",
                                        children: [
                                          settingList.length === 0
                                            ? /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                "div",
                                                {
                                                  className:
                                                    "col-12 text-center",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                    "p",
                                                    {
                                                      children:
                                                        "No settings found. Please contact administrator.",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 131,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 130,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              )
                                            : settingList.map(
                                                (setting, index) =>
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-lg-6",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "form-group",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                                "label",
                                                                {
                                                                  children: [
                                                                    setting.label,
                                                                    " *",
                                                                    " ",
                                                                    "active" in
                                                                      setting &&
                                                                    setting.name ===
                                                                      "userMaintenanceMessage"
                                                                      ? /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                                          "input",
                                                                          {
                                                                            type: "checkbox",
                                                                            checked:
                                                                              setting.active,
                                                                            onChange:
                                                                              (
                                                                                e
                                                                              ) =>
                                                                                onChangeActive(
                                                                                  e,
                                                                                  index
                                                                                ),
                                                                          },
                                                                          void 0,
                                                                          false,
                                                                          {
                                                                            fileName:
                                                                              _jsxFileName,
                                                                            lineNumber: 140,
                                                                            columnNumber: 31,
                                                                          },
                                                                          undefined
                                                                        )
                                                                      : "",
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 137,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-label-group",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        type: "text",
                                                                        name: setting.name,
                                                                        id: `setting_${index}`,
                                                                        required: true,
                                                                        className:
                                                                          "form-control",
                                                                        placeholder:
                                                                          setting.label,
                                                                        value:
                                                                          setting.value ||
                                                                          "",
                                                                        onChange:
                                                                          (e) =>
                                                                            onChange(
                                                                              e,
                                                                              index
                                                                            ),
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 150,
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
                                                                  lineNumber: 149,
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
                                                            lineNumber: 136,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    setting.name,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 135,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  )
                                              ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-lg-12",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "tr",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                    "button",
                                                    {
                                                      type: "submit",
                                                      className:
                                                        "btn btn-primary",
                                                      children: "Submit",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 168,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
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
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 126,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 125,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 123,
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
        _s(Message, "xfJTHzdH6terBSU8c31fSCcYXb4=", false, function () {
          return [
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_2__.useWebsocketUser,
          ];
        });
        _c = Message;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Message;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Message");

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
//# sourceMappingURL=src_admin-app_pages_settings_message_index_tsx.chunk.js.map
