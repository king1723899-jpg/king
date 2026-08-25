"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_add-user_add-user_tsx"],
  {
    /***/ "./src/admin-app/pages/add-user/add-user.tsx":
      /*!***************************************************!*\
  !*** ./src/admin-app/pages/add-user/add-user.tsx ***!
  \***************************************************/
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
        /* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs"
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../models/User */ "./src/models/User.ts"
          );
        /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../services/user.service */ "./src/services/user.service.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
        /* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.mjs"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../../components/SubmitButton */ "./src/components/SubmitButton.tsx"
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/add-user/add-user.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__
          .object()
          .shape({
            username: yup__WEBPACK_IMPORTED_MODULE_5__
              .string()
              .trim("User name cannot include leading and trailing spaces")
              .strict(true)
              .required("Username is required")
              .matches(/^[A-Z][a-z0-9_-]{3,19}$/, "Must Contain One Uppercase"),
            transactionPassword: yup__WEBPACK_IMPORTED_MODULE_5__
              .string()
              .required("Transaction Password is required"),
            password: yup__WEBPACK_IMPORTED_MODULE_5__
              .string()
              .required("Password is required")
              .min(8, "Password must be at least 8 characters")
              .matches(
                /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)[A-Za-z0-9]{8,32}$/,
                "contains at least one digit,one upper case,one lower case alphabet,"
              ),
            passwordConfirmation: yup__WEBPACK_IMPORTED_MODULE_5__
              .string()
              .required("Confirm password is required")
              .oneOf(
                [yup__WEBPACK_IMPORTED_MODULE_5__.ref("password")],
                "Passwords must match"
              ),
            role: yup__WEBPACK_IMPORTED_MODULE_5__
              .string()
              .required("Role is required"),
            fullname: yup__WEBPACK_IMPORTED_MODULE_5__
              .string()
              .required("Full name is required"),
            creditRefrences: yup__WEBPACK_IMPORTED_MODULE_5__
              .string()
              .required("Credit Reference is required"),
            exposerLimit: yup__WEBPACK_IMPORTED_MODULE_5__
              .string()
              .when("role", {
                is: "user",
                then: yup__WEBPACK_IMPORTED_MODULE_5__
                  .string()
                  .required("Exposer Limit is required"),
              }),
          });
        const AddUser = () => {
          _s();
          var _sportListState$sport,
            _sportListState$sport2,
            _sportListState$sport3,
            _sportListState$sport4,
            _sportListState$sport5,
            _sportListState$sport6,
            _sportListState$sport7,
            _sportListState$sport8,
            _sportListState$sport9;
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_4__.selectUserData
          );
          const [selectedUser, setSelectedUser] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState();
          const [isPartnership, setIsPartnership] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [isExposerAllow, setExposerAllow] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const sportListState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_9__.selectSportList
          );
          const { username } = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useParams)();
          const {
            register,
            handleSubmit,
            reset,
            getValues,
            setValue,
            // setError,
            formState: { errors },
          } = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm)({
            resolver: (0,
            _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__.yupResolver)(
              validationSchema
            ),
          });
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (username) {
              _services_user_service__WEBPACK_IMPORTED_MODULE_2__["default"]
                .getUserDetail(username)
                .then((res) => {
                  setSelectedUser(res.data.data);
                });
            }
          }, [username]);
          const onSubmit = handleSubmit((data) => {
            // Partenership
            if (
              data.role !==
              _models_User__WEBPACK_IMPORTED_MODULE_1__.RoleType.user
            ) {
              const partenershipValue = data.partnership;
              const partenershipArr = {};
              partenershipValue.forEach((element, index) => {
                if (element !== undefined) {
                  partenershipArr[index] = element;
                }
              });
              data.partnership = partenershipArr;
              // User Setting
              const userSettingArr = {};
              const minBetValue = data.minbet;
              minBetValue.forEach((element, index) => {
                if (element !== undefined) {
                  const minbetObj = {
                    minBet: element,
                  };
                  userSettingArr[index] = minbetObj;
                }
              });
              const maxBetValue = data.maxbet;
              maxBetValue.forEach((element, index) => {
                if (element !== undefined) {
                  const maxbetObj = {
                    maxBet: element,
                  };
                  userSettingArr[index] = Object.assign(
                    userSettingArr[index],
                    maxbetObj
                  );
                }
              });
              const delay = data.delay;
              delay.forEach((element, index) => {
                if (element !== undefined) {
                  const delayObj = {
                    delay: element,
                  };
                  userSettingArr[index] = Object.assign(
                    userSettingArr[index],
                    delayObj
                  );
                }
              });
              data.userSetting = userSettingArr;
            }

            // Parent Name
            data.parent =
              userData === null || userData === void 0
                ? void 0
                : userData.username;

            //Removing keys
            delete data.maxbet;
            delete data.minbet;
            delete data.delay;
            delete data.partnershipOur;
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["default"]
              .addUser(data)
              .then((response) => {
                var _response$data, _response$data2, _response$data2$messa;
                // Check if it's a transaction password error (now comes as success=false)
                if (
                  (response === null || response === void 0
                    ? void 0
                    : (_response$data = response.data) === null ||
                      _response$data === void 0
                    ? void 0
                    : _response$data.success) === false &&
                  response !== null &&
                  response !== void 0 &&
                  (_response$data2 = response.data) !== null &&
                  _response$data2 !== void 0 &&
                  (_response$data2$messa = _response$data2.message) !== null &&
                  _response$data2$messa !== void 0 &&
                  _response$data2$messa
                    .toLowerCase()
                    .includes("transaction password")
                ) {
                  // API interceptor already showed the toast, just keep user on page
                  console.log("Transaction password error in add user");
                  return; // Don't reset form or show success message
                }
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(
                  "User successfully created"
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
                  react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(
                    error
                  );
                }
              });
          });
          const roleOption = () => {
            const userRole = userData.role;
            const allRoles = JSON.parse(
              JSON.stringify(_models_User__WEBPACK_IMPORTED_MODULE_1__.RoleName)
            );
            delete allRoles.admin;
            const options = allRoles;
            if (userRole && userRole != "admin") {
              const allOptions = Object.keys(options);
              const startIndex = allOptions.indexOf(userRole);
              const newArray = allOptions.slice(startIndex + 1);
              return newArray.map((option, index) => {
                if (+userRole >= ++index) return false;
                return /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                  "option",
                  {
                    value: option,
                    children: options[option],
                  },
                  index,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 11,
                  },
                  undefined
                );
              });
            }
            return Object.keys(options).map((option, index) => {
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                "option",
                {
                  value: option,
                  children: options[option],
                },
                index,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 9,
                },
                undefined
              );
            });
          };
          const userData = selectedUser
            ? selectedUser
            : userState === null || userState === void 0
            ? void 0
            : userState.user;
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
            "div",
            {
              className: "container-fluid",
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                "div",
                {
                  className: "row",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                    "div",
                    {
                      className: "col-md-12 main-container",
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                        "div",
                        {
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "div",
                            {
                              className: "add-account",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "h2",
                                  {
                                    className: "m-b-20",
                                    children: "Add Accounts",
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
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  "form",
                                  {
                                    onSubmit: onSubmit,
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                              "div",
                                              {
                                                className:
                                                  "col-md-6 personal-detail",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                    "h4",
                                                    {
                                                      className:
                                                        "m-b-20 col-md-12",
                                                      children:
                                                        "Personal Detail",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 183,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "row",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "col-md-6",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "label",
                                                                      {
                                                                        htmlFor:
                                                                          "username",
                                                                        children:
                                                                          "Client Name:",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 187,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        placeholder:
                                                                          "Client Name",
                                                                        id: "username",
                                                                        ...register(
                                                                          "username"
                                                                        ),
                                                                        defaultValue:
                                                                          "",
                                                                        type: "text",
                                                                        className:
                                                                          "form-control",
                                                                        // required
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 188,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "span",
                                                                      {
                                                                        id: "username-error",
                                                                        className:
                                                                          "error",
                                                                        style: {
                                                                          display:
                                                                            "none",
                                                                        },
                                                                        children:
                                                                          "Username already taken",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 197,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    (errors ===
                                                                      null ||
                                                                    errors ===
                                                                      void 0
                                                                      ? void 0
                                                                      : errors.username) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          id: "username-required",
                                                                          className:
                                                                            "error",
                                                                          children:
                                                                            errors
                                                                              .username
                                                                              .message,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 201,
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
                                                                  lineNumber: 186,
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
                                                            lineNumber: 185,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "col-md-6",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "label",
                                                                      {
                                                                        htmlFor:
                                                                          "password",
                                                                        children:
                                                                          "User password:",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 209,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        maxLength: 45,
                                                                        placeholder:
                                                                          "Password",
                                                                        id: "password",
                                                                        ...register(
                                                                          "password"
                                                                        ),
                                                                        type: "password",
                                                                        className:
                                                                          "form-control",
                                                                        // required
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 210,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    (errors ===
                                                                      null ||
                                                                    errors ===
                                                                      void 0
                                                                      ? void 0
                                                                      : errors.password) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          id: "password-error",
                                                                          className:
                                                                            "error",
                                                                          children:
                                                                            errors
                                                                              .password
                                                                              .message,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 220,
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
                                                                  lineNumber: 208,
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
                                                            lineNumber: 207,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "col-md-6",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "label",
                                                                      {
                                                                        htmlFor:
                                                                          "password_confirmation",
                                                                        children:
                                                                          "Retype password:",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 228,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        maxLength: 45,
                                                                        placeholder:
                                                                          "Retype Password",
                                                                        id: "password_confirmation",
                                                                        ...register(
                                                                          "passwordConfirmation"
                                                                        ),
                                                                        type: "password",
                                                                        className:
                                                                          "form-control",
                                                                        // required
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 229,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    (errors ===
                                                                      null ||
                                                                    errors ===
                                                                      void 0
                                                                      ? void 0
                                                                      : errors.passwordConfirmation) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          id: "password_confirmation-error",
                                                                          className:
                                                                            "error",
                                                                          children:
                                                                            errors
                                                                              .passwordConfirmation
                                                                              .message,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 239,
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
                                                                  lineNumber: 227,
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
                                                            lineNumber: 226,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "col-md-6",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "label",
                                                                      {
                                                                        htmlFor:
                                                                          "fullname",
                                                                        children:
                                                                          "Full Name:",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 247,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        placeholder:
                                                                          "Full Name",
                                                                        ...register(
                                                                          "fullname"
                                                                        ),
                                                                        id: "fullname",
                                                                        defaultValue:
                                                                          "",
                                                                        type: "text",
                                                                        className:
                                                                          "form-control",
                                                                        // required
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 248,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    (errors ===
                                                                      null ||
                                                                    errors ===
                                                                      void 0
                                                                      ? void 0
                                                                      : errors.fullname) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          id: "fullname-error",
                                                                          className:
                                                                            "error",
                                                                          children:
                                                                            errors
                                                                              .fullname
                                                                              .message,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 258,
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
                                                                  lineNumber: 246,
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
                                                            lineNumber: 245,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "col-md-6",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "label",
                                                                      {
                                                                        htmlFor:
                                                                          "city",
                                                                        children:
                                                                          "City:",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 266,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        maxLength: 15,
                                                                        placeholder:
                                                                          "City",
                                                                        ...register(
                                                                          "city"
                                                                        ),
                                                                        id: "city",
                                                                        defaultValue:
                                                                          "",
                                                                        type: "text",
                                                                        className:
                                                                          "form-control",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 267,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    (errors ===
                                                                      null ||
                                                                    errors ===
                                                                      void 0
                                                                      ? void 0
                                                                      : errors.city) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          id: "city-error",
                                                                          className:
                                                                            "error",
                                                                          children:
                                                                            errors
                                                                              .city
                                                                              .message,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 277,
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
                                                                  lineNumber: 265,
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
                                                            lineNumber: 264,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "col-md-6",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "label",
                                                                      {
                                                                        htmlFor:
                                                                          "phone",
                                                                        children:
                                                                          "Phone:",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 285,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        maxLength: 10,
                                                                        placeholder:
                                                                          "Phone",
                                                                        ...register(
                                                                          "phone"
                                                                        ),
                                                                        id: "phone",
                                                                        type: "number",
                                                                        className:
                                                                          "form-control",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 286,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    (errors ===
                                                                      null ||
                                                                    errors ===
                                                                      void 0
                                                                      ? void 0
                                                                      : errors.phone) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          id: "phone-error",
                                                                          className:
                                                                            "error",
                                                                          children:
                                                                            errors
                                                                              .phone
                                                                              .message,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 295,
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
                                                                  lineNumber: 284,
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
                                                            lineNumber: 283,
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
                                                      lineNumber: 184,
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
                                                lineNumber: 182,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                              "div",
                                              {
                                                className:
                                                  "col-md-6 account-detail",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                    "h4",
                                                    {
                                                      className:
                                                        "m-b-20 col-md-12",
                                                      children:
                                                        "Account Detail",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 304,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "row",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "col-md-6",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "label",
                                                                      {
                                                                        htmlFor:
                                                                          "role",
                                                                        children:
                                                                          "Account Type:",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 308,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "select",
                                                                      {
                                                                        ...register(
                                                                          "role",
                                                                          {
                                                                            onChange:
                                                                              (
                                                                                e
                                                                              ) => {
                                                                                e
                                                                                  .target
                                                                                  .value ==
                                                                                _models_User__WEBPACK_IMPORTED_MODULE_1__
                                                                                  .RoleType
                                                                                  .user
                                                                                  ? setIsPartnership(
                                                                                      true
                                                                                    )
                                                                                  : setIsPartnership(
                                                                                      false
                                                                                    );
                                                                                e
                                                                                  .target
                                                                                  .value ==
                                                                                _models_User__WEBPACK_IMPORTED_MODULE_1__
                                                                                  .RoleType
                                                                                  .user
                                                                                  ? setExposerAllow(
                                                                                      true
                                                                                    )
                                                                                  : setExposerAllow(
                                                                                      false
                                                                                    );
                                                                              },
                                                                          }
                                                                        ),
                                                                        id: "role",
                                                                        className:
                                                                          "form-control",
                                                                        // required
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                              "option",
                                                                              {
                                                                                value:
                                                                                  "",
                                                                                children:
                                                                                  "- Select Your Account Type -",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 324,
                                                                                columnNumber: 29,
                                                                              },
                                                                              undefined
                                                                            ),
                                                                            roleOption(),
                                                                          ],
                                                                      },
                                                                      void 0,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 309,
                                                                        columnNumber: 27,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    (errors ===
                                                                      null ||
                                                                    errors ===
                                                                      void 0
                                                                      ? void 0
                                                                      : errors.role) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          id: "role-error",
                                                                          className:
                                                                            "error",
                                                                          children:
                                                                            errors
                                                                              .role
                                                                              .message,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 328,
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
                                                                  lineNumber: 307,
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
                                                            lineNumber: 306,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                          "div",
                                                          {
                                                            className:
                                                              "col-md-6",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "form-group",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "label",
                                                                      {
                                                                        htmlFor:
                                                                          "creditrefrence",
                                                                        children:
                                                                          "Credit Reference:",
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
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                      "input",
                                                                      {
                                                                        className:
                                                                          "form-control",
                                                                        placeholder:
                                                                          "Credit Reference",
                                                                        ...register(
                                                                          "creditRefrences"
                                                                        ),
                                                                        id: "creditRefrences",
                                                                        defaultValue:
                                                                          "",
                                                                        min: "0",
                                                                        // required
                                                                        type: "number",
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
                                                                    (errors ===
                                                                      null ||
                                                                    errors ===
                                                                      void 0
                                                                      ? void 0
                                                                      : errors.creditRefrences) &&
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "span",
                                                                        {
                                                                          id: "creditrefrence-error",
                                                                          className:
                                                                            "error",
                                                                          children:
                                                                            errors
                                                                              .creditRefrences
                                                                              .message,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 348,
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
                                                                  lineNumber: 335,
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
                                                            lineNumber: 334,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        isExposerAllow &&
                                                          /*#__PURE__*/ (0,
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                            "div",
                                                            {
                                                              className:
                                                                "col-md-6",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "form-group",
                                                                    id: "exposer-limit",
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "label",
                                                                        {
                                                                          htmlFor:
                                                                            "exposerLimit",
                                                                          children:
                                                                            "Exposer Limit:",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            _jsxFileName,
                                                                          lineNumber: 357,
                                                                          columnNumber: 29,
                                                                        },
                                                                        undefined
                                                                      ),
                                                                      /*#__PURE__*/ (0,
                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                        "input",
                                                                        {
                                                                          placeholder:
                                                                            "Exposer Limit",
                                                                          id: "exposerLimit",
                                                                          ...register(
                                                                            "exposerLimit"
                                                                          ),
                                                                          defaultValue:
                                                                            "",
                                                                          type: "number",
                                                                          className:
                                                                            "form-control",
                                                                          min: "0",
                                                                          // required
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
                                                                      (errors ===
                                                                        null ||
                                                                      errors ===
                                                                        void 0
                                                                        ? void 0
                                                                        : errors.exposerLimit) &&
                                                                        /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                          "span",
                                                                          {
                                                                            id: "exposerlimit-error",
                                                                            className:
                                                                              "error",
                                                                            children:
                                                                              errors
                                                                                .exposerLimit
                                                                                .message,
                                                                          },
                                                                          void 0,
                                                                          false,
                                                                          {
                                                                            fileName:
                                                                              _jsxFileName,
                                                                            lineNumber: 369,
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
                                                                    lineNumber: 356,
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
                                                              lineNumber: 355,
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
                                                      lineNumber: 305,
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
                                                lineNumber: 303,
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
                                          lineNumber: 181,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      !isExposerAllow &&
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                          "div",
                                          {
                                            className: "row m-t-20",
                                            id: "partnership-div",
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                              "div",
                                              {
                                                className: "col-md-12",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                    "h4",
                                                    {
                                                      className:
                                                        "m-b-20 col-md-12",
                                                      children: "Partnership",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 382,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
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
                                                            children:
                                                              /*#__PURE__*/ (0,
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
                                                                        lineNumber: 386,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    sportListState.sports.map(
                                                                      (
                                                                        sports
                                                                      ) =>
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
                                                                                lineNumber: 391,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            )
                                                                          : /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                              "th",
                                                                              {},
                                                                              sports._id,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 393,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            )
                                                                    ),
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 385,
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
                                                            lineNumber: 384,
                                                            columnNumber: 25,
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
                                                                          "Upline",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 400,
                                                                        columnNumber: 29,
                                                                      },
                                                                      undefined
                                                                    ),
                                                                    sportListState.sports.map(
                                                                      ({
                                                                        _id,
                                                                        sportId,
                                                                      }) => {
                                                                        var _userData$partnership;
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
                                                                                id: "taxpartnership-upline",
                                                                                children:
                                                                                  userData ===
                                                                                    null ||
                                                                                  userData ===
                                                                                    void 0
                                                                                    ? void 0
                                                                                    : (_userData$partnership =
                                                                                        userData.partnership) ===
                                                                                        null ||
                                                                                      _userData$partnership ===
                                                                                        void 0
                                                                                    ? void 0
                                                                                    : _userData$partnership[
                                                                                        sportId
                                                                                      ]
                                                                                        .ownRatio,
                                                                              },
                                                                              `upline-${_id}`,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 403,
                                                                                columnNumber: 33,
                                                                              },
                                                                              undefined
                                                                            )
                                                                          : /*#__PURE__*/ (0,
                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                              "td",
                                                                              {},
                                                                              _id,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  _jsxFileName,
                                                                                lineNumber: 407,
                                                                                columnNumber: 33,
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
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 399,
                                                                  columnNumber: 27,
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
                                                                          "Downline",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 412,
                                                                        columnNumber: 29,
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
                                                                          ({
                                                                            _id,
                                                                            sportId,
                                                                          }) => {
                                                                            var _userData$partnership3;
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
                                                                                            className:
                                                                                              "partnership",
                                                                                            ...register(
                                                                                              `partnership.${sportId}`,
                                                                                              {
                                                                                                onChange:
                                                                                                  (
                                                                                                    e
                                                                                                  ) => {
                                                                                                    var _userData$partnership2;
                                                                                                    const ownRatio =
                                                                                                      (_userData$partnership2 =
                                                                                                        userData.partnership) ===
                                                                                                        null ||
                                                                                                      _userData$partnership2 ===
                                                                                                        void 0
                                                                                                        ? void 0
                                                                                                        : _userData$partnership2[
                                                                                                            sportId
                                                                                                          ]
                                                                                                            .ownRatio;
                                                                                                    ownRatio
                                                                                                      ? setValue(
                                                                                                          `partnershipOur.${sportId}`,
                                                                                                          ownRatio -
                                                                                                            e
                                                                                                              .target
                                                                                                              .value
                                                                                                        )
                                                                                                      : setValue(
                                                                                                          `partnershipOur.${sportId}`,
                                                                                                          getValues(
                                                                                                            `partnershipOur.${sportId}`
                                                                                                          )
                                                                                                        );
                                                                                                  },
                                                                                              }
                                                                                            ),
                                                                                            id: `partnership.${sportId}`,
                                                                                            placeholder:
                                                                                              "",
                                                                                            max:
                                                                                              userData ===
                                                                                                null ||
                                                                                              userData ===
                                                                                                void 0
                                                                                                ? void 0
                                                                                                : (_userData$partnership3 =
                                                                                                    userData.partnership) ===
                                                                                                    null ||
                                                                                                  _userData$partnership3 ===
                                                                                                    void 0
                                                                                                ? void 0
                                                                                                : _userData$partnership3[
                                                                                                    sportId
                                                                                                  ]
                                                                                                    .ownRatio,
                                                                                            min: "0",
                                                                                            defaultValue: 0,
                                                                                            type: "number",
                                                                                            disabled:
                                                                                              isPartnership,
                                                                                          },
                                                                                          void 0,
                                                                                          false,
                                                                                          {
                                                                                            fileName:
                                                                                              _jsxFileName,
                                                                                            lineNumber: 416,
                                                                                            columnNumber: 35,
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
                                                                                            lineNumber: 440,
                                                                                            columnNumber: 35,
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
                                                                                    lineNumber: 415,
                                                                                    columnNumber: 33,
                                                                                  },
                                                                                  undefined
                                                                                )
                                                                              : /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                  "td",
                                                                                  {},
                                                                                  _id,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 443,
                                                                                    columnNumber: 33,
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
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 411,
                                                                  columnNumber: 27,
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
                                                                          "Our",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 448,
                                                                        columnNumber: 29,
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
                                                                            var _userData$partnership4;
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
                                                                                    id: `taxpartnership-our.${sportId}`,
                                                                                    children:
                                                                                      /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                        "input",
                                                                                        {
                                                                                          ...register(
                                                                                            `partnershipOur.${sportId}`
                                                                                          ),
                                                                                          value:
                                                                                            userData ===
                                                                                              null ||
                                                                                            userData ===
                                                                                              void 0
                                                                                              ? void 0
                                                                                              : (_userData$partnership4 =
                                                                                                  userData.partnership) ===
                                                                                                  null ||
                                                                                                _userData$partnership4 ===
                                                                                                  void 0
                                                                                              ? void 0
                                                                                              : _userData$partnership4[
                                                                                                  sportId
                                                                                                ]
                                                                                                  .ownRatio,
                                                                                          // min={0}
                                                                                          disabled: true,
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 452,
                                                                                          columnNumber: 35,
                                                                                        },
                                                                                        undefined
                                                                                      ),
                                                                                  },
                                                                                  _id,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 451,
                                                                                    columnNumber: 33,
                                                                                  },
                                                                                  undefined
                                                                                )
                                                                              : /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                  "td",
                                                                                  {},
                                                                                  _id,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 460,
                                                                                    columnNumber: 33,
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
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 447,
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
                                                            lineNumber: 398,
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
                                                      lineNumber: 383,
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
                                                lineNumber: 381,
                                                columnNumber: 21,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 380,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row m-t-20",
                                          id: "min-max-bet-div",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-md-12",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                  "h4",
                                                  {
                                                    className:
                                                      "m-b-20 col-md-12",
                                                    children: "Min Max Bet",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 471,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
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
                                                          children:
                                                            /*#__PURE__*/ (0,
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
                                                                      lineNumber: 475,
                                                                      columnNumber: 27,
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
                                                                        (
                                                                          sports
                                                                        ) =>
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
                                                                                  lineNumber: 478,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              )
                                                                            : /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                "th",
                                                                                {},
                                                                                sports._id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 480,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              )
                                                                      ),
                                                                ],
                                                              },
                                                              void 0,
                                                              true,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 474,
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
                                                          lineNumber: 473,
                                                          columnNumber: 23,
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
                                                                      lineNumber: 487,
                                                                      columnNumber: 27,
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
                                                                          var _userData$userSetting;
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
                                                                                  id: "minbet",
                                                                                  children:
                                                                                    userData ===
                                                                                      null ||
                                                                                    userData ===
                                                                                      void 0
                                                                                      ? void 0
                                                                                      : (_userData$userSetting =
                                                                                          userData.userSetting) ===
                                                                                          null ||
                                                                                        _userData$userSetting ===
                                                                                          void 0
                                                                                      ? void 0
                                                                                      : _userData$userSetting[
                                                                                          sportId
                                                                                        ]
                                                                                          .minBet,
                                                                                },
                                                                                _id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 490,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              )
                                                                            : /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                "td",
                                                                                {},
                                                                                _id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 494,
                                                                                  columnNumber: 31,
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
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 486,
                                                                columnNumber: 25,
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
                                                                        "Provide Min Bet",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 499,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  (_sportListState$sport5 =
                                                                    sportListState.sports) ===
                                                                    null ||
                                                                  _sportListState$sport5 ===
                                                                    void 0
                                                                    ? void 0
                                                                    : _sportListState$sport5.map(
                                                                        ({
                                                                          _id,
                                                                          sportId,
                                                                        }) => {
                                                                          var _userData$userSetting2;
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
                                                                                          id: `minbet.${sportId}`,
                                                                                          className: `minbet.${sportId}`,
                                                                                          ...register(
                                                                                            `minbet.${sportId}`
                                                                                          ),
                                                                                          placeholder:
                                                                                            "",
                                                                                          max:
                                                                                            userData ===
                                                                                              null ||
                                                                                            userData ===
                                                                                              void 0
                                                                                              ? void 0
                                                                                              : (_userData$userSetting2 =
                                                                                                  userData.userSetting) ===
                                                                                                  null ||
                                                                                                _userData$userSetting2 ===
                                                                                                  void 0
                                                                                              ? void 0
                                                                                              : _userData$userSetting2[
                                                                                                  sportId
                                                                                                ]
                                                                                                  .minBet,
                                                                                          min: 0,
                                                                                          defaultValue: 0,
                                                                                          disabled:
                                                                                            isPartnership,
                                                                                          type: "number",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 503,
                                                                                          columnNumber: 33,
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
                                                                                          lineNumber: 514,
                                                                                          columnNumber: 33,
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
                                                                                  lineNumber: 502,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              )
                                                                            : /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                "td",
                                                                                {},
                                                                                _id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 517,
                                                                                  columnNumber: 31,
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
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 498,
                                                                columnNumber: 25,
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
                                                                      lineNumber: 522,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  (_sportListState$sport6 =
                                                                    sportListState.sports) ===
                                                                    null ||
                                                                  _sportListState$sport6 ===
                                                                    void 0
                                                                    ? void 0
                                                                    : _sportListState$sport6.map(
                                                                        ({
                                                                          _id,
                                                                          sportId,
                                                                        }) => {
                                                                          var _userData$userSetting3;
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
                                                                                  id: "maxbet",
                                                                                  children:
                                                                                    userData ===
                                                                                      null ||
                                                                                    userData ===
                                                                                      void 0
                                                                                      ? void 0
                                                                                      : (_userData$userSetting3 =
                                                                                          userData.userSetting) ===
                                                                                          null ||
                                                                                        _userData$userSetting3 ===
                                                                                          void 0
                                                                                      ? void 0
                                                                                      : _userData$userSetting3[
                                                                                          sportId
                                                                                        ]
                                                                                          .maxBet,
                                                                                },
                                                                                _id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 525,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              )
                                                                            : /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                "td",
                                                                                {},
                                                                                _id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 529,
                                                                                  columnNumber: 31,
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
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 521,
                                                                columnNumber: 25,
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
                                                                        "Provide Min Bet",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 534,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  (_sportListState$sport7 =
                                                                    sportListState.sports) ===
                                                                    null ||
                                                                  _sportListState$sport7 ===
                                                                    void 0
                                                                    ? void 0
                                                                    : _sportListState$sport7.map(
                                                                        ({
                                                                          _id,
                                                                          sportId,
                                                                        }) => {
                                                                          var _userData$userSetting4;
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
                                                                                          id: `maxbet.${sportId}`,
                                                                                          className: `maxbet.${sportId}`,
                                                                                          ...register(
                                                                                            `maxbet.${sportId}`
                                                                                          ),
                                                                                          placeholder:
                                                                                            "",
                                                                                          max:
                                                                                            userData ===
                                                                                              null ||
                                                                                            userData ===
                                                                                              void 0
                                                                                              ? void 0
                                                                                              : (_userData$userSetting4 =
                                                                                                  userData.userSetting) ===
                                                                                                  null ||
                                                                                                _userData$userSetting4 ===
                                                                                                  void 0
                                                                                              ? void 0
                                                                                              : _userData$userSetting4[
                                                                                                  sportId
                                                                                                ]
                                                                                                  .maxBet,
                                                                                          defaultValue: 0,
                                                                                          disabled:
                                                                                            isPartnership,
                                                                                          min: 0,
                                                                                          type: "number",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 538,
                                                                                          columnNumber: 33,
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
                                                                                          lineNumber: 549,
                                                                                          columnNumber: 33,
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
                                                                                  lineNumber: 537,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              )
                                                                            : /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                "td",
                                                                                {},
                                                                                _id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 552,
                                                                                  columnNumber: 31,
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
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 533,
                                                                columnNumber: 25,
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
                                                                      lineNumber: 557,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  (_sportListState$sport8 =
                                                                    sportListState.sports) ===
                                                                    null ||
                                                                  _sportListState$sport8 ===
                                                                    void 0
                                                                    ? void 0
                                                                    : _sportListState$sport8.map(
                                                                        ({
                                                                          _id,
                                                                          sportId,
                                                                        }) => {
                                                                          var _userData$userSetting5;
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
                                                                                  id: "delay",
                                                                                  children:
                                                                                    userData ===
                                                                                      null ||
                                                                                    userData ===
                                                                                      void 0
                                                                                      ? void 0
                                                                                      : (_userData$userSetting5 =
                                                                                          userData.userSetting) ===
                                                                                          null ||
                                                                                        _userData$userSetting5 ===
                                                                                          void 0
                                                                                      ? void 0
                                                                                      : _userData$userSetting5[
                                                                                          sportId
                                                                                        ]
                                                                                          .delay,
                                                                                },
                                                                                _id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 560,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              )
                                                                            : /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                "td",
                                                                                {},
                                                                                _id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 564,
                                                                                  columnNumber: 31,
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
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 556,
                                                                columnNumber: 25,
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
                                                                        "Provide Delay",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 569,
                                                                      columnNumber: 27,
                                                                    },
                                                                    undefined
                                                                  ),
                                                                  (_sportListState$sport9 =
                                                                    sportListState.sports) ===
                                                                    null ||
                                                                  _sportListState$sport9 ===
                                                                    void 0
                                                                    ? void 0
                                                                    : _sportListState$sport9.map(
                                                                        ({
                                                                          _id,
                                                                          sportId,
                                                                        }) => {
                                                                          var _userData$userSetting6;
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
                                                                                            `delay.${sportId}`
                                                                                          ),
                                                                                          placeholder:
                                                                                            "",
                                                                                          max:
                                                                                            userData ===
                                                                                              null ||
                                                                                            userData ===
                                                                                              void 0
                                                                                              ? void 0
                                                                                              : (_userData$userSetting6 =
                                                                                                  userData.userSetting) ===
                                                                                                  null ||
                                                                                                _userData$userSetting6 ===
                                                                                                  void 0
                                                                                              ? void 0
                                                                                              : _userData$userSetting6[
                                                                                                  sportId
                                                                                                ]
                                                                                                  .delay,
                                                                                          defaultValue: 0,
                                                                                          disabled:
                                                                                            isPartnership,
                                                                                          type: "number",
                                                                                        },
                                                                                        void 0,
                                                                                        false,
                                                                                        {
                                                                                          fileName:
                                                                                            _jsxFileName,
                                                                                          lineNumber: 573,
                                                                                          columnNumber: 33,
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
                                                                                          lineNumber: 583,
                                                                                          columnNumber: 33,
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
                                                                                  lineNumber: 572,
                                                                                  columnNumber: 31,
                                                                                },
                                                                                undefined
                                                                              )
                                                                            : /*#__PURE__*/ (0,
                                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                                                "td",
                                                                                {},
                                                                                _id,
                                                                                false,
                                                                                {
                                                                                  fileName:
                                                                                    _jsxFileName,
                                                                                  lineNumber: 586,
                                                                                  columnNumber: 31,
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
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 568,
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
                                                    lineNumber: 472,
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
                                              lineNumber: 470,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 469,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row m-t-20",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-md-12",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                "div",
                                                {
                                                  className:
                                                    "form-group col-md-3 float-right",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                      "label",
                                                      {
                                                        htmlFor:
                                                          "transactionPassword",
                                                        children:
                                                          "Transaction Password:",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 597,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                      "input",
                                                      {
                                                        maxLength: 15,
                                                        placeholder:
                                                          "Transaction Password",
                                                        ...register(
                                                          "transactionPassword"
                                                        ),
                                                        defaultValue: "",
                                                        id: "transactionPassword",
                                                        type: "password",
                                                        className:
                                                          "form-control",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 598,
                                                        columnNumber: 23,
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
                                                          id: "transactionPassword-error",
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
                                                          lineNumber: 608,
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
                                                  lineNumber: 596,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 595,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 594,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                        "div",
                                        {
                                          className: "row m-t-20",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                            "div",
                                            {
                                              className: "col-md-12",
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                "div",
                                                {
                                                  className: "float-right",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                                    _components_SubmitButton__WEBPACK_IMPORTED_MODULE_10__[
                                                      "default"
                                                    ],
                                                    {
                                                      className:
                                                        "btn btn-submit",
                                                      type: "submit",
                                                      children: "Create User",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 618,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
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
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 616,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 615,
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
                                    lineNumber: 180,
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
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 177,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(AddUser, "jAufCayIE7u3b6t79PnF5SM63lA=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,
            react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useParams,
            react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm,
          ];
        });
        _c = AddUser;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = AddUser;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "AddUser");

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
//# sourceMappingURL=src_admin-app_pages_add-user_add-user_tsx.chunk.js.map
