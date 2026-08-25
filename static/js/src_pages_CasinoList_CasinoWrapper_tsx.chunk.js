"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_CasinoList_CasinoWrapper_tsx"],
  {
    /***/ "./src/pages/CasinoList/CasinoWrapper.tsx":
      /*!*******************************************************!*\
  !*** ./src/pages/CasinoList/CasinoWrapper.tsx ***!
  \*******************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });

        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

        const parseRouteParams = () => {
          const pathname =
            typeof window !== "undefined" && window.location
              ? String(window.location.pathname || "")
              : "";
          const segments = pathname
            .split("/")
            .map((part) => part.trim())
            .filter(Boolean);
          const casinoIndex = segments.lastIndexOf("casino");
          const gameCode =
            casinoIndex >= 0
              ? decodeURIComponent(segments[casinoIndex + 1] || "")
              : "";
          const matchId =
            casinoIndex >= 0
              ? decodeURIComponent(segments[casinoIndex + 2] || "")
              : "";
          return { gameCode, matchId };
        };

        const extractLaunchUrl = (payload) => {
          const directUrl =
            payload && payload.data && payload.data.url
              ? String(payload.data.url).trim()
              : "";
          return /^https?:\/\//i.test(directUrl) ? directUrl : "";
        };

        const shellStyle = {
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        };
        const cardStyle = {
          background: "#fff",
          color: "#111",
          borderRadius: "8px",
          border: "1px solid #ddd",
          padding: "14px 18px",
          fontFamily: "Arial, sans-serif",
          fontSize: "15px",
          fontWeight: 600,
        };
        const frameWrapStyle = {
          width: "100%",
          minHeight: "86vh",
          background: "#000",
        };
        const frameStyle = {
          width: "100%",
          minHeight: "86vh",
          border: "0",
          background: "#000",
        };

        const CasinoWrapper = () => {
          const route = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () => parseRouteParams(),
            []
          );
          const [state, setState] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
            loading: true,
            url: "",
            error: "",
          });

          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            let cancelled = false;
            const run = async () => {
              if (!route.gameCode || route.gameCode.toLowerCase() === "undefined") {
                if (!cancelled) {
                  setState({ loading: false, url: "", error: "This is not currently available" });
                }
                return;
              }

              try {
                const token =
                  (typeof localStorage !== "undefined" &&
                    (localStorage.getItem("token") ||
                      localStorage.getItem("token-admin"))) ||
                  "";
                const payloadBody = {
                  gameCode: route.gameCode,
                  vendorCode: 18,
                  language: 1,
                  phonetype: 1,
                  random: Math.random().toString(36).slice(2),
                  signature: "NA",
                  timestamp: Date.now(),
                };
                if (route.matchId) {
                  payloadBody.matchId = route.matchId;
                }

                const response = await fetch("/GetGameUrl.php", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                  },
                  body: JSON.stringify(payloadBody),
                });
                const payload = await response.json().catch(() => ({}));
                const launchUrl = extractLaunchUrl(payload);

                if (cancelled) return;
                if (launchUrl) {
                  setState({ loading: false, url: launchUrl, error: "" });
                  return;
                }

                const errorText =
                  payload && payload.message
                    ? String(payload.message)
                    : "This is not currently available";
                setState({ loading: false, url: "", error: errorText });
              } catch (_error) {
                if (!cancelled) {
                  setState({ loading: false, url: "", error: "This is not currently available" });
                }
              }
            };

            run();
            return () => {
              cancelled = true;
            };
          }, [route.gameCode, route.matchId]);

          if (state.loading) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              "div",
              { style: shellStyle },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                "div",
                { style: cardStyle },
                "Loading game..."
              )
            );
          }

          if (!state.url) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              "div",
              { style: shellStyle },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                "div",
                { style: cardStyle },
                state.error || "This is not currently available"
              )
            );
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "div",
            { style: frameWrapStyle },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
              title: "Casino Game",
              src: state.url,
              style: frameStyle,
              allowFullScreen: true,
              referrerPolicy: "no-referrer-when-downgrade",
            })
          );
        };

        const __WEBPACK_DEFAULT_EXPORT__ = CasinoWrapper;

        /***/
      },
  },
]);
