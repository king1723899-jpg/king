"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_settings_paymethod_index_tsx"],
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

    /***/ "./src/admin-app/pages/settings/paymethod/index.tsx":
      /*!**********************************************************!*\
  !*** ./src/admin-app/pages/settings/paymethod/index.tsx ***!
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
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../../services/auth.service */ "./src/services/auth.service.ts"
          );
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../_layout/elements/mobile-subheader */ "./src/admin-app/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../../config/config */ "./src/config/config.ts"
          );
        /* harmony import */ var _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../../services/deposit-withdraw.service */ "./src/services/deposit-withdraw.service.ts"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/settings/paymethod/index.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // import { AxiosResponse } from 'axios'
        // import React, { ChangeEvent, FormEvent, useRef } from 'react'
        // import { toast } from 'react-toastify'
        // import { useWebsocketUser } from '../../../../context/webSocketUser'
        // import authService from '../../../../services/auth.service'
        // import mobileSubheader from '../../_layout/elements/mobile-subheader'

        // const Message = () => {
        //   const { socketUser } = useWebsocketUser()
        //   const formRef = useRef(null)
        //   const [settingList, setSettingList] = React.useState<
        //     {
        //       name: string
        //       label: string
        //       value: any
        //       active: boolean
        //       inputType: string
        //       category: string
        //       index: number
        //     }[]
        //   >([])

        //   React.useEffect(() => {
        //     getSettings()
        //   }, [])

        //   React.useEffect(() => {
        //     socketUser.on('loggedOut', (msg) => {
        //       toast.success(msg)
        //     })
        //     return () => {
        //       socketUser.off('logoutAll')
        //       socketUser.off('loggedOut')
        //     }
        //   })

        //   const getSettings = () => {
        //     authService.getpymentSettingsList().then((res: AxiosResponse<any>) => {
        //       setSettingList(res.data.data.settings)
        //     })
        //   }

        //   const onChange = (e: any, index: number) => {
        //     const allSettingList: any = [...settingList]
        //     const file = e.target.files ? e.target.files[0] : null

        //     console.log('e.target.value', e.target.value)

        //     allSettingList[index]['value'] = e.target.value
        //     if (file) allSettingList[index][`${allSettingList[index]['name']}-file`] = file

        //     setSettingList(allSettingList)
        //   }

        //   const onChangeActive = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        //     const allSettingList: any = [...settingList]
        //     allSettingList[index]['active'] = e.target.checked
        //     setSettingList(allSettingList)
        //   }

        //   const handleSettingSubmit = (e: FormEvent<HTMLFormElement>) => {
        //     e.preventDefault()
        //     const formData = new FormData()
        //     for (const key in settingList) {
        //       formData.append(settingList[key].name, JSON.stringify(settingList[key]))
        //     }
        //     authService.savepaymentSettingList(settingList).then((res: AxiosResponse<any>) => {
        //       // eslint-disable-next-line
        //       //@ts-expect-error
        //       if (formRef?.current) formRef.current.reset()
        //       getSettings()
        //       toast.success(res.data.message)
        //     })
        //   }

        //   const getCategorize = () => {
        //     return settingList.reduce((acc: any, setting, currentIndex) => {
        //       if (!acc[setting.category]) acc[setting.category] = []
        //       setting.index = currentIndex
        //       acc[setting.category].push(setting)
        //       return acc
        //     }, {})
        //   }

        //   console.log('getCategorize', settingList)

        //   return (
        //     <>
        //       {mobileSubheader.subheaderdesktopadmin('Messages')}
        //       <div className='container-fluid'>
        //         <div className='row'>
        //           <div className='col-md-12 mt-1'>
        //             <div className='add-account'>
        //               <form onSubmit={handleSettingSubmit} ref={formRef}>
        //                 <div className='row'>
        //                   {Object.keys(getCategorize()).map((key) => {
        //                     return (
        //                       <div key={key} className='col-md-12'>
        //                         <h4 className='text-capitalize p-2'>{key}</h4>
        //                         <div key={key} className='row'>
        //                           {getCategorize()[key].map((setting: any) => (
        //                             <div key={setting.name} className='col-lg-6'>
        //                               <div className='form-group'>
        //                                 <label>
        //                                   {setting.label} *{' '}
        //                                   {'active' in setting &&
        //                                     setting.name == 'userMaintenanceMessage' ? (
        //                                     <input
        //                                       type={'checkbox'}
        //                                       checked={setting.active}
        //                                       onChange={(e) => onChangeActive(e, setting.index)}
        //                                     />
        //                                   ) : (
        //                                     ''
        //                                   )}
        //                                   {setting.value && setting.inputType === 'file' && (
        //                                     <a
        //                                       href={process.env.REACT_APP_SITE_URL + setting.value}
        //                                       target='__blank'
        //                                     >
        //                                       <img
        //                                         src={process.env.REACT_APP_SITE_URL + setting.value}
        //                                         width={20}
        //                                       />
        //                                     </a>
        //                                   )}
        //                                 </label>
        //                                 <div className='form-label-group'>
        //                                   {!setting.inputType ? (
        //                                     <input
        //                                       type={'text'}
        //                                       name={setting.name}
        //                                       id='user_name'
        //                                       className='form-control'
        //                                       placeholder={setting?.label}
        //                                       value={setting.value}
        //                                       onChange={(e) => onChange(e, setting.index)}
        //                                     />
        //                                   ) : (
        //                                     <>
        //                                       <input
        //                                         type={setting.inputType}
        //                                         name={setting.name}
        //                                         id='user_name'
        //                                         className='form-control'
        //                                         placeholder={setting?.label}
        //                                         onChange={(e) => onChange(e, setting.index)}
        //                                       />
        //                                     </>
        //                                   )}
        //                                   {/* {JSON.stringify(setting.active)} */}
        //                                 </div>
        //                               </div>
        //                             </div>
        //                           ))}
        //                         </div>
        //                       </div>
        //                     )
        //                   })}
        //                   <div className='col-lg-12'>
        //                     <div className='tr'>
        //                       <button type='submit' className='btn btn-primary'>
        //                         Submit
        //                       </button>
        //                     </div>
        //                   </div>
        //                 </div>
        //               </form>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </>
        //   )
        // }
        // export default Message

        const PaymentMethod = () => {
          _s();
          var _bankUpiLists$data2, _bankUpiLists$data2$s;
          const [loading, setLoading] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [saving, setSaving] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [activeOption, setActiveOption] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const [paymentData, setPaymentData] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          const [currentForm, setCurrentForm] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({
            upiId: "",
            qrCodeImage: "",
            bankAccountNumber: "",
            bankName: "",
            ifscCode: "",
            accountHolderName: "",
          });
          const [qrCodeImageFile, setQrCodeImageFile] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const [qrCodeImagePreview, setQrCodeImagePreview] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [transactionPassword, setTransactionPassword] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
          const [bankUpiLists, setBankUpiLists] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            // Try to get Payment2 settings first, fallback to old payment settings
            _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ]
              .getPayment2Settings()
              .then((res) => {
                var _res$data;
                if (
                  res !== null &&
                  res !== void 0 &&
                  (_res$data = res.data) !== null &&
                  _res$data !== void 0 &&
                  _res$data.paymentSettings
                ) {
                  // Transform Payment2 data to match expected format
                  const transformedData = {
                    settings: [res.data.paymentSettings],
                  };
                  setBankUpiLists({
                    data: transformedData,
                  });
                  console.log(
                    "Using Payment2 settings:",
                    res.data.paymentSettings
                  );
                } else {
                  // Fallback to old payment system
                  return _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ].getPaymentSetting();
                }
              })
              .then((res) => {
                var _res$data2;
                if (
                  res &&
                  res !== null &&
                  res !== void 0 &&
                  (_res$data2 = res.data) !== null &&
                  _res$data2 !== void 0 &&
                  _res$data2.data
                ) {
                  var _res$data3, _res$data4;
                  setBankUpiLists(
                    res === null || res === void 0
                      ? void 0
                      : (_res$data3 = res.data) === null ||
                        _res$data3 === void 0
                      ? void 0
                      : _res$data3.data
                  );
                  console.log(
                    "Using old payment settings:",
                    res === null || res === void 0
                      ? void 0
                      : (_res$data4 = res.data) === null ||
                        _res$data4 === void 0
                      ? void 0
                      : _res$data4.data
                  );
                }
              })
              .catch((error) => {
                console.error("Error fetching payment settings:", error);
                // Fallback to old payment system
                _services_deposit_withdraw_service__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ]
                  .getPaymentSetting()
                  .then((res) => {
                    var _res$data5, _res$data6;
                    setBankUpiLists(
                      res === null || res === void 0
                        ? void 0
                        : (_res$data5 = res.data) === null ||
                          _res$data5 === void 0
                        ? void 0
                        : _res$data5.data
                    );
                    console.log(
                      "Fallback to old payment settings:",
                      res === null || res === void 0
                        ? void 0
                        : (_res$data6 = res.data) === null ||
                          _res$data6 === void 0
                        ? void 0
                        : _res$data6.data
                    );
                  })
                  .catch((fallbackError) => {
                    console.error(
                      "Error with fallback payment settings:",
                      fallbackError
                    );
                  });
              });
          }, []);
          console.log(bankUpiLists, "bankUpiLists");
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            loadPaymentSettings();
          }, []);
          const loadPaymentSettings = async () => {
            setLoading(true);
            try {
              var _response$data;
              const response =
                await _services_auth_service__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].getPayment2Settings();
              if (
                (_response$data = response.data) !== null &&
                _response$data !== void 0 &&
                _response$data.paymentSettings
              ) {
                setPaymentData(response.data.paymentSettings);
              }
            } catch (error) {
              console.error("Error loading payment settings:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to load payment settings"
              );
            } finally {
              setLoading(false);
            }
          };
          const handleOptionSelect = (option) => {
            setActiveOption(option);
            setTransactionPassword("");
            setQrCodeImageFile(null);
            setQrCodeImagePreview("");
            const existingData = paymentData[option];
            if (existingData) {
              setCurrentForm(existingData);
              // Set preview for existing QR code image
              if (existingData.qrCodeImage) {
                const cleanPath = existingData.qrCodeImage.replace(/\\/g, "/");
                setQrCodeImagePreview(
                  `${_config_config__WEBPACK_IMPORTED_MODULE_4__.config.UPLOAD_SERVER_URL}/${cleanPath}`
                );
              }
            } else {
              setCurrentForm({
                upiId: "",
                qrCodeImage: "",
                bankAccountNumber: "",
                bankName: "",
                ifscCode: "",
                accountHolderName: "",
              });
            }
          };
          const handleInputChange = (field, value) => {
            setCurrentForm((prev) => ({
              ...prev,
              [field]: value,
            }));
          };
          const handleQrCodeImageChange = (e) => {
            var _e$target$files;
            const file =
              (_e$target$files = e.target.files) === null ||
              _e$target$files === void 0
                ? void 0
                : _e$target$files[0];
            if (file) {
              // Validate file type
              if (!file.type.startsWith("image/")) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  "Please select a valid image file"
                );
                return;
              }

              // Validate file size (max 5MB)
              if (file.size > 5 * 1024 * 1024) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                  "Image size should be less than 5MB"
                );
                return;
              }
              setQrCodeImageFile(file);

              // Create preview
              const reader = new FileReader();
              reader.onload = (event) => {
                var _event$target;
                setQrCodeImagePreview(
                  (_event$target = event.target) === null ||
                    _event$target === void 0
                    ? void 0
                    : _event$target.result
                );
              };
              reader.readAsDataURL(file);
            }
          };
          const removeQrCodeImage = () => {
            setQrCodeImageFile(null);
            setQrCodeImagePreview("");
            // Clear the file input
            const fileInput = document.getElementById("qrCodeImageInput");
            if (fileInput) {
              fileInput.value = "";
            }
          };
          const handleSubmit = async (e) => {
            e.preventDefault();
            if (!activeOption) return;
            if (!transactionPassword) {
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Transaction password is required"
              );
              return;
            }
            setSaving(true);
            try {
              const response =
                await _services_auth_service__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].savePayment2Settings({
                  option: activeOption,
                  optionData: currentForm,
                  transactionPassword: transactionPassword,
                  qrCodeImageFile: qrCodeImageFile,
                });

              // Update local state
              setPaymentData((prev) => ({
                ...prev,
                [activeOption]: currentForm,
              }));
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(
                `Payment Details ${activeOption.slice(
                  -1
                )} settings saved successfully!`
              );
              setActiveOption(null);
              setTransactionPassword(""); // Clear transaction password after successful save
            } catch (error) {
              console.error("Error saving payment settings:", error);
              react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(
                "Failed to save payment settings"
              );
            } finally {
              setSaving(false);
            }
          };
          const getOptionStatus = (option) => {
            var _bankUpiLists$data, _bankUpiLists$data$se;
            // Check both paymentData and bankUpiLists for option status
            let data = paymentData[option];

            // If no data in paymentData, check bankUpiLists
            if (
              !data &&
              (bankUpiLists === null || bankUpiLists === void 0
                ? void 0
                : (_bankUpiLists$data = bankUpiLists.data) === null ||
                  _bankUpiLists$data === void 0
                ? void 0
                : (_bankUpiLists$data$se = _bankUpiLists$data.settings) ===
                    null || _bankUpiLists$data$se === void 0
                ? void 0
                : _bankUpiLists$data$se.length) > 0
            ) {
              data = bankUpiLists.data.settings[0][option];
            }
            if (!data) return "Not configured";
            const hasUpi = data.upiId && data.upiId !== `${option}@py`;
            const hasBank =
              (data.bankAccountNumber &&
                data.bankAccountNumber !== `${option}@py`) ||
              (data.bankName && data.bankName !== `${option}@py`) ||
              (data.ifscCode &&
                data.ifscCode !== `${option.toUpperCase()}@PY`) ||
              (data.accountHolderName &&
                data.accountHolderName !== `${option}@py`);
            if (hasUpi && hasBank) return "UPI & Bank - Configured";
            if (hasUpi) return "UPI - Configured";
            if (hasBank) return "Bank - Configured";
            return "Not configured";
          };
          if (loading) {
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,
              {
                children: [
                  _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                  ].subheaderdesktopadmin("Payment Method"),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                    "div",
                    {
                      className: "container-fluid",
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                        "div",
                        {
                          className: "text-center p-4",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                            "div",
                            {
                              children: "Loading payment settings...",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 417,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 416,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 415,
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
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ].subheaderdesktopadmin("Payment Method"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                  "div",
                  {
                    className: "container-fluid",
                    children: [
                      !activeOption &&
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                          "div",
                          {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                              "div",
                              {
                                className: "col-md-10 mt-3",
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                    "h4",
                                    {
                                      className: "text-center mb-4",
                                      children:
                                        "Select Payment Option to Configure",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 433,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                    "div",
                                    {
                                      className:
                                        "d-flex justify-content-center flex-wrap",
                                      style: {
                                        gap: "2rem",
                                      },
                                      children: [
                                        "option1",
                                        "option2",
                                        "option3",
                                      ].map((option) =>
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                          "div",
                                          {
                                            className: "text-center",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                "button",
                                                {
                                                  className:
                                                    "btn btn-primary btn-lg mb-2 px-5 py-3",
                                                  onClick: () =>
                                                    handleOptionSelect(option),
                                                  style: {
                                                    minWidth: "310px",
                                                  },
                                                  children: [
                                                    "Payment Details ",
                                                    option.slice(-1),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 437,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "small text-muted",
                                                  children:
                                                    getOptionStatus(option),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 444,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          option,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 436,
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
                                      lineNumber: 434,
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
                                lineNumber: 432,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 431,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      !activeOption &&
                        (bankUpiLists === null || bankUpiLists === void 0
                          ? void 0
                          : (_bankUpiLists$data2 = bankUpiLists.data) ===
                              null || _bankUpiLists$data2 === void 0
                          ? void 0
                          : (_bankUpiLists$data2$s =
                              _bankUpiLists$data2.settings) === null ||
                            _bankUpiLists$data2$s === void 0
                          ? void 0
                          : _bankUpiLists$data2$s.length) > 0 &&
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                          "div",
                          {
                            className: "row justify-content-center mt-4",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                              "div",
                              {
                                className: "col-md-10",
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                    "h4",
                                    {
                                      className: "text-center mb-4 ",
                                      children: "Current Payment Details",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 458,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                    "div",
                                    {
                                      className: "row",
                                      children: [
                                        "option1",
                                        "option2",
                                        "option3",
                                      ].map((option) => {
                                        const optionData =
                                          bankUpiLists.data.settings[0][option];
                                        if (!optionData) return null;
                                        return /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                          "div",
                                          {
                                            className: "col-md-4 mb-4",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "div",
                                              {
                                                className: "card h-100",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className:
                                                        "card-header bg-primary text-white",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "h5",
                                                          {
                                                            className: "mb-0",
                                                            children: [
                                                              "Payment Details ",
                                                              option.slice(-1),
                                                            ],
                                                          },
                                                          void 0,
                                                          true,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 468,
                                                            columnNumber: 27,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 467,
                                                      columnNumber: 25,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "card-body",
                                                      style: {
                                                        border:
                                                          "1.5px solid #0c7bf2",
                                                      },
                                                      children: [
                                                        optionData.upiId &&
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "mb-3 ml-3 mt-2",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "h6",
                                                                  {
                                                                    className:
                                                                      "text-primary",
                                                                    children:
                                                                      "UPI Details:",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 474,
                                                                    columnNumber: 31,
                                                                  },
                                                                  undefined
                                                                ),
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "mb-1",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "UPI ID:",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 475,
                                                                          columnNumber: 51,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      " ",
                                                                      optionData.upiId,
                                                                    ],
                                                                  },
                                                                  void 0,
                                                                  true,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 475,
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
                                                              lineNumber: 473,
                                                              columnNumber: 29,
                                                            },
                                                            undefined
                                                          ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "hr",
                                                          {
                                                            style: {
                                                              border: "none",
                                                              height: "2px",
                                                              backgroundColor:
                                                                "black",
                                                              margin: "20px 0",
                                                            },
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 478,
                                                            columnNumber: 27,
                                                          },
                                                          undefined
                                                        ),
                                                        optionData.qrCodeImage &&
                                                          optionData.qrCodeImage !==
                                                            `${option}@py` &&
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "mb-3 ml-3",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "h6",
                                                                  {
                                                                    className:
                                                                      "text-primary",
                                                                    children:
                                                                      "QR Code:",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 482,
                                                                    columnNumber: 31,
                                                                  },
                                                                  undefined
                                                                ),
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "img",
                                                                  {
                                                                    src: `${
                                                                      _config_config__WEBPACK_IMPORTED_MODULE_4__
                                                                        .config
                                                                        .UPLOAD_SERVER_URL
                                                                    }/${optionData.qrCodeImage.replace(
                                                                      /\\/g,
                                                                      "/"
                                                                    )}`,
                                                                    alt: `QR Code for ${option}`,
                                                                    className:
                                                                      "img-fluid",
                                                                    style: {
                                                                      maxWidth:
                                                                        "150px",
                                                                      maxHeight:
                                                                        "150px",
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      borderRadius:
                                                                        "4px",
                                                                      padding:
                                                                        "5px",
                                                                    },
                                                                    onError: (
                                                                      e
                                                                    ) => {
                                                                      e.currentTarget.style.display =
                                                                        "none";
                                                                    },
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 483,
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
                                                              lineNumber: 481,
                                                              columnNumber: 29,
                                                            },
                                                            undefined
                                                          ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "hr",
                                                          {
                                                            style: {
                                                              border: "none",
                                                              height: "2px",
                                                              backgroundColor:
                                                                "black",
                                                              margin: "20px 0",
                                                            },
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 500,
                                                            columnNumber: 27,
                                                          },
                                                          undefined
                                                        ),
                                                        (optionData.bankAccountNumber ||
                                                          optionData.bankName ||
                                                          optionData.ifscCode ||
                                                          optionData.accountHolderName) &&
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "mb-3 ml-3",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "h6",
                                                                  {
                                                                    className:
                                                                      "text-success",
                                                                    children:
                                                                      "Bank Details:",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 504,
                                                                    columnNumber: 31,
                                                                  },
                                                                  undefined
                                                                ),
                                                                optionData.accountHolderName &&
                                                                  optionData.accountHolderName !==
                                                                    `${option}@py` &&
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "mb-1",
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                            "strong",
                                                                            {
                                                                              children:
                                                                                "Account Holder:",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 506,
                                                                              columnNumber: 53,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          " ",
                                                                          optionData.accountHolderName,
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    true,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 506,
                                                                      columnNumber: 33,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                optionData.bankAccountNumber &&
                                                                  optionData.bankAccountNumber !==
                                                                    `${option}@py` &&
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "mb-1",
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                            "strong",
                                                                            {
                                                                              children:
                                                                                "Account Number:",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 509,
                                                                              columnNumber: 53,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          " ",
                                                                          optionData.bankAccountNumber,
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    true,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 509,
                                                                      columnNumber: 33,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                optionData.bankName &&
                                                                  optionData.bankName !==
                                                                    `${option}@py` &&
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "mb-1",
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                            "strong",
                                                                            {
                                                                              children:
                                                                                "Bank Name:",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 512,
                                                                              columnNumber: 53,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          " ",
                                                                          optionData.bankName,
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    true,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 512,
                                                                      columnNumber: 33,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                optionData.ifscCode &&
                                                                  optionData.ifscCode !==
                                                                    `OPTION3@PY` &&
                                                                  optionData.ifscCode !==
                                                                    `${option.toUpperCase()}@PY` &&
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "mb-1",
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                            "strong",
                                                                            {
                                                                              children:
                                                                                "IFSC Code:",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                _jsxFileName,
                                                                              lineNumber: 515,
                                                                              columnNumber: 53,
                                                                            },
                                                                            undefined
                                                                          ),
                                                                          " ",
                                                                          optionData.ifscCode,
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    true,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 515,
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
                                                              lineNumber: 503,
                                                              columnNumber: 29,
                                                            },
                                                            undefined
                                                          ),
                                                        bankUpiLists.data
                                                          .settings[0]
                                                          .updatedAt &&
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "mt-3 pt-2 border-top ml-3",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "small",
                                                                  {
                                                                    className:
                                                                      "text-muted",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Last Updated:",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 524,
                                                                          columnNumber: 33,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      " ",
                                                                      new Date(
                                                                        bankUpiLists.data.settings[0].updatedAt
                                                                      ).toLocaleString(),
                                                                    ],
                                                                  },
                                                                  void 0,
                                                                  true,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 523,
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
                                                              lineNumber: 522,
                                                              columnNumber: 29,
                                                            },
                                                            undefined
                                                          ),
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 470,
                                                      columnNumber: 25,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "card-footer",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "button",
                                                          {
                                                            className:
                                                              "btn btn-outline-primary btn-sm w-100",
                                                            onClick: () =>
                                                              handleOptionSelect(
                                                                option
                                                              ),
                                                            children: [
                                                              "Edit Payment Details ",
                                                              option.slice(-1),
                                                            ],
                                                          },
                                                          void 0,
                                                          true,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 530,
                                                            columnNumber: 27,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 529,
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
                                                lineNumber: 466,
                                                columnNumber: 23,
                                              },
                                              undefined
                                            ),
                                          },
                                          option,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 465,
                                            columnNumber: 21,
                                          },
                                          undefined
                                        );
                                      }),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 459,
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
                                lineNumber: 457,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 456,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      activeOption &&
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                          "div",
                          {
                            className: "row",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                              "div",
                              {
                                className: "col-md-12 mt-3",
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                  "div",
                                  {
                                    className: "add-account",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                        "div",
                                        {
                                          className:
                                            "d-flex justify-content-between align-items-center mb-4",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "h4",
                                              {
                                                className: "text-primary",
                                                children: [
                                                  "Configure Payment Details ",
                                                  activeOption.slice(-1),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 552,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "button",
                                              {
                                                className: "btn btn-secondary",
                                                onClick: () =>
                                                  setActiveOption(null),
                                                children: "Back to Options",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 555,
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
                                          lineNumber: 551,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                        "form",
                                        {
                                          onSubmit: handleSubmit,
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "div",
                                              {
                                                className: "row",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-md-12",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "h5",
                                                          {
                                                            className:
                                                              "text-primary p-2 border-bottom",
                                                            children:
                                                              "UPI Payment Details",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 568,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 567,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-lg-6",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "form-group mb-3",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "label",
                                                                {
                                                                  className:
                                                                    "form-label",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "strong",
                                                                      {
                                                                        children:
                                                                          "UPI ID",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 574,
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
                                                                  lineNumber: 573,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  type: "text",
                                                                  className:
                                                                    "form-control",
                                                                  placeholder:
                                                                    "Enter UPI ID (e.g., user@paytm)",
                                                                  value:
                                                                    currentForm.upiId ||
                                                                    "",
                                                                  onChange: (
                                                                    e
                                                                  ) =>
                                                                    handleInputChange(
                                                                      "upiId",
                                                                      e.target
                                                                        .value
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 576,
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
                                                            lineNumber: 572,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 571,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-lg-6",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "form-group mb-3",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "label",
                                                                {
                                                                  className:
                                                                    "form-label",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "strong",
                                                                      {
                                                                        children:
                                                                          "QR Code Image",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 589,
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
                                                                  lineNumber: 588,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  id: "qrCodeImageInput",
                                                                  type: "file",
                                                                  className:
                                                                    "form-control",
                                                                  accept:
                                                                    "image/*",
                                                                  onChange:
                                                                    handleQrCodeImageChange,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 591,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "small",
                                                                {
                                                                  className:
                                                                    "form-text text-muted",
                                                                  children:
                                                                    "Upload QR code image (Max size: 5MB, Format: JPG, PNG, GIF)",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 598,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              qrCodeImagePreview &&
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "mt-3",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "d-flex align-items-center justify-content-between mb-2",
                                                                          children:
                                                                            [
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                                "strong",
                                                                                {
                                                                                  children:
                                                                                    "Preview:",
                                                                                },
                                                                                void 0,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 606,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              ),
                                                                              /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                                "button",
                                                                                {
                                                                                  type: "button",
                                                                                  className:
                                                                                    "btn btn-sm btn-danger",
                                                                                  onClick:
                                                                                    removeQrCodeImage,
                                                                                  children:
                                                                                    "Remove Image",
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
                                                                            ],
                                                                        },
                                                                        void 0,
                                                                        true,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 605,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                        "img",
                                                                        {
                                                                          src: qrCodeImagePreview,
                                                                          alt: "QR Code Preview",
                                                                          style:
                                                                            {
                                                                              maxWidth:
                                                                                "200px",
                                                                              maxHeight:
                                                                                "200px",
                                                                              border:
                                                                                "1px solid #ddd",
                                                                              borderRadius:
                                                                                "4px",
                                                                              padding:
                                                                                "5px",
                                                                            },
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 615,
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
                                                                    lineNumber: 604,
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
                                                            lineNumber: 587,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 586,
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
                                                lineNumber: 566,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "div",
                                              {
                                                className: "row mt-4",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-md-12",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "h5",
                                                          {
                                                            className:
                                                              "text-success p-2 border-bottom",
                                                            children:
                                                              "Bank Transfer Details",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 635,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 634,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-lg-6",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "form-group mb-3",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "label",
                                                                {
                                                                  className:
                                                                    "form-label",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "strong",
                                                                      {
                                                                        children:
                                                                          "Bank Account Number",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 641,
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
                                                                  lineNumber: 640,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  type: "text",
                                                                  className:
                                                                    "form-control",
                                                                  placeholder:
                                                                    "Enter bank account number",
                                                                  value:
                                                                    currentForm.bankAccountNumber ||
                                                                    "",
                                                                  onChange: (
                                                                    e
                                                                  ) =>
                                                                    handleInputChange(
                                                                      "bankAccountNumber",
                                                                      e.target
                                                                        .value
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 643,
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
                                                            lineNumber: 639,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 638,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-lg-6",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "form-group mb-3",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "label",
                                                                {
                                                                  className:
                                                                    "form-label",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "strong",
                                                                      {
                                                                        children:
                                                                          "Bank Name",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 656,
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
                                                                  lineNumber: 655,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  type: "text",
                                                                  className:
                                                                    "form-control",
                                                                  placeholder:
                                                                    "Enter bank name",
                                                                  value:
                                                                    currentForm.bankName ||
                                                                    "",
                                                                  onChange: (
                                                                    e
                                                                  ) =>
                                                                    handleInputChange(
                                                                      "bankName",
                                                                      e.target
                                                                        .value
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 658,
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
                                                            lineNumber: 654,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 653,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-lg-6",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "form-group mb-3",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "label",
                                                                {
                                                                  className:
                                                                    "form-label",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "strong",
                                                                      {
                                                                        children:
                                                                          "IFSC Code",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 671,
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
                                                                  lineNumber: 670,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  type: "text",
                                                                  className:
                                                                    "form-control",
                                                                  placeholder:
                                                                    "Enter IFSC code",
                                                                  value:
                                                                    currentForm.ifscCode ||
                                                                    "",
                                                                  onChange: (
                                                                    e
                                                                  ) =>
                                                                    handleInputChange(
                                                                      "ifscCode",
                                                                      e.target
                                                                        .value
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 673,
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
                                                            lineNumber: 669,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 668,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "col-lg-6",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "form-group mb-3",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "label",
                                                                {
                                                                  className:
                                                                    "form-label",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                      "strong",
                                                                      {
                                                                        children:
                                                                          "Account Holder Name",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 686,
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
                                                                  lineNumber: 685,
                                                                  columnNumber: 25,
                                                                },
                                                                undefined
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  type: "text",
                                                                  className:
                                                                    "form-control",
                                                                  placeholder:
                                                                    "Enter account holder name",
                                                                  value:
                                                                    currentForm.accountHolderName ||
                                                                    "",
                                                                  onChange: (
                                                                    e
                                                                  ) =>
                                                                    handleInputChange(
                                                                      "accountHolderName",
                                                                      e.target
                                                                        .value
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 688,
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
                                                            lineNumber: 684,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 683,
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
                                                lineNumber: 633,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "div",
                                              {
                                                className: "row mt-4",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "form-group mb-3",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                            "label",
                                                            {
                                                              className:
                                                                "form-label",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                                  "strong",
                                                                  {
                                                                    children:
                                                                      "Transaction Password",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      _jsxFileName,
                                                                    lineNumber: 704,
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
                                                              lineNumber: 703,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                            "input",
                                                            {
                                                              type: "password",
                                                              className:
                                                                "form-control",
                                                              placeholder:
                                                                "Enter transaction password",
                                                              value:
                                                                transactionPassword,
                                                              onChange: (e) =>
                                                                setTransactionPassword(
                                                                  e.target.value
                                                                ),
                                                              required: true,
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 706,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                            "small",
                                                            {
                                                              className:
                                                                "form-text text-muted",
                                                              children:
                                                                "Required to save payment settings",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 714,
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
                                                        lineNumber: 702,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 701,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 700,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                              "div",
                                              {
                                                className: "row mt-4",
                                                children: /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                      "div",
                                                      {
                                                        className:
                                                          "text-center",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
                                                            "button",
                                                            {
                                                              type: "submit",
                                                              className:
                                                                "btn btn-primary btn-lg px-5",
                                                              disabled: saving,
                                                              children: saving
                                                                ? "Saving..."
                                                                : `Save Payment Details ${activeOption.slice(
                                                                    -1
                                                                  )} Settings`,
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                _jsxFileName,
                                                              lineNumber: 725,
                                                              columnNumber: 25,
                                                            },
                                                            undefined
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 724,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 723,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 722,
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
                                          lineNumber: 563,
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
                                    lineNumber: 550,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 549,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 548,
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
                    lineNumber: 427,
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
        _s(PaymentMethod, "9K1Q4OTC+bydgRAhDzbQf2RrOXI=");
        _c = PaymentMethod;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PaymentMethod;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "PaymentMethod");

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
//# sourceMappingURL=src_admin-app_pages_settings_paymethod_index_tsx.chunk.js.map
