"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_admin-app_pages_Rules_rules_tsx"],
  {
    /***/ "./src/admin-app/pages/Rules/rules.tsx":
      /*!*********************************************!*\
  !*** ./src/admin-app/pages/Rules/rules.tsx ***!
  \*********************************************/
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
        /* harmony import */ var _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_layout/elements/mobile-subheader */ "./src/admin-app/pages/_layout/elements/mobile-subheader.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
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
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/Rules/rules.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        // Static sports data array

        const sportsData = [
          {
            id: "horse-racing",
            name: "Horse Racing",
            content: [
              {
                title: "General",
                rules: [
                  "All individual race markets will be determined according to the official result at the time of the weigh-in announcement (or equivalent). Subsequent disqualifications, appeals or amendments to the result will be disregarded.",
                  "If a race is abandoned or otherwise declared void, or in the event of a walkover, all bets on that race will be void.",
                  "If the scheduled venue is changed after the market has been loaded by us, all bets will be void.",
                  "Where a race does not take part on its scheduled day, all bets will be void.",
                  "If a scheduled surface type is changed (e.g., turf to dirt) all bets will stand.",
                ],
              },
              {
                title: "Non-Runner Rule",
                rules: [
                  "Ours non-runner rule relates to the adjustment of odds-on bets already matched when a horse in a race is declared a non-runner. Toadjust We apply a reduction factor to the remaining runners. The reduction factor allocated to a non-runner is a calculation (the details of which are described below) of that horses chances of winning (or being placed, etc as appropriate) and is applied to bets already matched on the other runners in the relevant market or markets.",
                  "Any horse listed when the relevant market is loaded which does not subsequently come under the starters orders is deemed to be a non-runner.",
                  "When the market is loaded each horse is given a reduction factor, based on a forecast price, which is expressed as a percentage. These reduction factors may be updated periodically at the discretion of the Us based on trading in the market, but after approximately 15 minutes (approximately 5 minutes for Australian and US markets) from the scheduled off time of a given race, they will be updated only in exceptional circumstances. The current reduction factor percentage for each horse can be viewed on the info page on Our website or by asking the Helpdesk.",
                  "Accurate reduction factors will only be applied to selections in the event of a non-runner. Once a non-runner is declared each selection in the market will be given an appropriate reduction factor. Reduction factors can be amended at Our's discretion at any time throughout the market life cycle (including post-race).",
                  "For Australian racing, reduction factors may be updated periodically at the discretion of the Us based on trading in the market, but after approximately five minutes from the scheduled off time of a given race, they will be updated only in exceptional circumstances.",
                  "Reductions will be made to both win and place markets but applied differently (as described below), and horses will have a different reduction factor for each market.",
                  "As soon as We become aware that a horse is an official non-runner or a highly likely non-runner, following a statement to the press from connections, the following will happen: All matched bets on that horse will be void and the horse will be removed from the market. In the win market: if the reduction factor of the non-runner is 2.5% or greater, the traded price of all the matched bets on the remaining horses will be reduced by an amount equal to the non-runner final reduction factor and all the unmatched offers to lay will be cancelled. If the non-runners reduction factor is less than 2.5%, reductions will not be applied and unmatched bets will not be cancelled. In the place market, the reduction factor of all non-runners will be applied (even if less than 2.5%) and the potential winnings aboutmatched bets on the remaining horses will be reduced by an amount equal to the non-runners final reduction factor. Only if the non-runners reduction factor is 4.0% or greater will all the unmatched offers to lay be cancelled. All the reduction factors on the remaining horses will be adjusted to reflect their improved chance of winning.",
                  "Reduction factors are not applied to bets which are struck in play. However, if a market is turned in-play prematurely by error (or, for example, there is a false start), all bets matched during this time will be subject to any later reduction factor, provided the market is turned out of play before the race commences. In the event of a late withdrawal, wereserve the right to remove the runner after the completion of the race. In this case, only those bets matched before the off will be affected by a reduction factor.",
                  "In the event of a non-runner being removed from a race in error or following incorrect information regarding a runner's participation, we will reinstate both the runner and all previously matched bets associated with that runner. All bets made between the time of withdrawal and reinstatement will be void in both the place market and the win market. The reduction factor applied to matched bets at the time of withdrawal will be reversed and the original prices will become valid.",
                  "Any non-runners will be removed from the relevant markets in the order in which they are brought to our attention. If We become aware of more than one non-runner at the same time, it will remove the non-runners from the relevant markets in race card order.",
                  "If a runner is not included in a market because of an error or because of incorrect information regarding a runner's participation, we reserve the right to introduce the missing runner into the market at any time before settlement (even after the race has been run), provided that We are determined that the missing runner is not a material runner (i.e., a selection with a reduction factor of approx. 2.5% or less in the win market). In such circumstances, all pre-play unmatched and matched bets will stand, however, if the runner is not introduced before the start of the race, all in-play bets will be void. However, if the missing runner is deemed to be a material runner, then the malformed market will be void and a new market will be loaded where possible.",
                  "How the Reductions are applied to Exchange markets: In the win market, reductions will be made on the traded price. For example: if the non-runners final reduction factor is 25% the traded price on all previously matched bets on other horses will be reduced by 25% - the traded price of 8.0 would become 6.0 etc. And these might be further reduced if another horse is subsequently declared a non-runner.",
                  "In the EW Market, reductions will be made on the traded win price. The advertised place terms will then apply to the revised win prices. For example: if the non-runners final reduction factor is 25% the traded price on all previously matched bets on other horses will be reduced by 25% - - the traded price of 8.0 would become 6.0. If each Way terms were 1/5th odds for 3 places, the corresponding price for the Place portion of the bet would reduce from 2.4 to 2.0.",
                  "In the place market, reductions will be made to the potential winnings on the bet only, and not the traded price. For example: if the non-runners final reduction factor is 25% the potential winnings on all previously matched bets on the other horses will be reduced by 25% - a traded price of 8.0 would become 6.25. For example, a £10 bet on a horse to be placed at a traded price of 8.0 would provide winnings of £70. If there is a non-runner with a reduction factor of 25% in the race, that factor will be applied to the £70 of potential winnings leaving potential winnings of £52.50. Therefore, the revised traded price will be 6.25.",
                  "The traded price may be further reduced if any other horse(s) is subsequently declared a non-runner, however, odds cannot be reduced below 1.01.",
                  "Reserves: A reserve runner may appear in the relevant markets but will have a non-applicable reduction factor until we are received confirmation that it is a confirmed runner, in which case an applicable reduction factor may apply to it.",
                  "For the avoidance of doubt, any reduction factor applicable to a non-runner replaced by a reserve will be applied to all bets struck on the relevant markets, before the removal from those markets of such non-runner by Us. Likewise, should a reserve runner become a confirmed runner but subsequently become a non-runner, any reduction factor applicable to such non-runner will be applied to all bets struck on the relevant markets, before the removal from those markets of such non-runner by Us.",
                  "Additional rules: Card numbers are posted as a guide only: bets are placed on a named horse. Horses will not be coupled. Where any horse(s) runs for purse money only it is deemed a non-runner for betting purposes. Should this result in the number of possible winners stated in the relevant Market Information being equal to or greater than the number of runners in the relevant Betfair market, all bets in the market will be void.",
                  "propery",
                ],
              },
            ],
          },
          {
            id: "handball",
            name: "Handball",
            content: [
              {
                title: "Match",
                rules: [
                  "Match Odds: - Predict which team will be the winner. Bets will be void if the match is not completed.",
                  "Next Goal: - Predict which team will score the X-th goal.",
                  "Highest Scoring Half: - Predict which half will have the most goals scored (1st, 2nd, or Draw).",
                  "Halftime/Fulltime: - Predict the result of a match at halftime and at the end of regular time.",
                ],
              },
            ],
          },
          {
            id: "table-tennis",
            name: "Table Tennis",
            content: [
              {
                title: "Match",
                rules: [
                  "Match odds: -Predict which player will win the match. In the event of any of the named players in a match changing before the match starts then all bets are void.",
                  "Set Winner: - The specified set must be completed for bets to stand unless the specific market outcome is already determined.",
                  "Under / Over Points: -For example, a game is abandoned at 9-7: bets on Over/Under 16.5 Game - Total Points are settled as winners/losers respectively.",
                ],
              },
            ],
          },
          {
            id: "basketball",
            name: "Basketball",
            content: [
              {
                title: "Match",
                rules: [
                  "Match Odds :- Predict which team will be the winner. There must be 5 minutes or less of scheduled game time left for bets to have action.",
                  "Quarter Winner :- The quarter must be completed for bets to have action, unless settlement of bets is already determined.",
                  "1st Half Winner / 2nd Half Winner :- The first half must be completed for first half bets to stand.",
                  "Highest Scoring Half :- Predict in which half most points will be scored. OT is not included in 2nd Half.",
                ],
              },
            ],
          },
          {
            id: "volleyball",
            name: "Volleyball",
            content: [
              {
                title: "Match",
                rules: [
                  "Match odds: - Predict which team will be the winner. Bets will be void if the match is not completed.",
                  "Set Winner: - In the event of the set not being completed bets will be void. Exceptions are made for bets on sets that are already over, in this case, the bets will be settled.",
                ],
              },
            ],
          },
          {
            id: "ice-hockey",
            name: "Ice Hockey",
            content: [
              {
                title: "Match",
                rules: [
                  "Match Odds Including overtime/shootouts: - Predict the winner of the match including overtime and penalties. The game must be completed for bets to have action.",
                  "Period Winner: - Predict the winner of the relevant period. The relevant period must be completed for bets to have action unless the specific market outcome is already determined.",
                  "Highest Scoring Period: - If 2 or more periods have the same score Tie will be settled as the winner. (Exclude overtime/shootouts for settlement purposes)",
                ],
              },
            ],
          },
          {
            id: "football",
            name: "Football",
            content: [
              {
                title: "Bookmaker",
                rules: [
                  "If the match will not take place within 48 hours of the original kick-off time bets will be void.",
                  "If the selection is in a multiple bet or accumulator any refund must be requested before the kick-off of the first leg of the multiple bets.",
                  "Where a confirmed postponed match features as part of a multiple bet, the bet will stand on the remaining selections in the multiple.",
                ],
              },
              {
                title: "Match",
                rules: [
                  "Match Odds :- All bets apply to the relevant full regular time period including stoppage time. Any extra-time and/or penalty shoot-out is not included.",
                  "Under_Over Goals: - In the event of a match starting but not being completed, all bets will be void, unless the specific market outcome is already determined.",
                  "1st Period Winner: - Bets will be void if the match is abandoned before half-time.",
                  "Next Goal: - Own goals count to the side credited with the goal.",
                ],
              },
            ],
          },
          {
            id: "tennis",
            name: "Tennis",
            content: [
              {
                title: "Match",
                rules: [
                  "Match Odds: - If 1st set has been not completed at the time of the retirement or disqualification, then all bets relating to that individual match will be void.",
                  "Game Winner: - Predict which player will win the stated game. The nominated game will be featured in the name of the bet type.",
                  "Under / Over Games:- Finished set stand, the unfinished set can be played to its natural conclusion and settled as in the example.",
                ],
              },
            ],
          },
          {
            id: "snooker",
            name: "Snooker",
            content: [
              {
                title: "Match",
                rules: [
                  "Match Odds: -Predict which player will win the match. In the event of a match starting but not being completed the player progressing to the next round or being awarded the victory will be deemed the winner for settlement purposes.",
                  "Frame Winner: -If the nominated frame is not played bets will be void. Similarly, if the nominated frame is awarded to a player without a shot being played, then all bets will be void.",
                ],
              },
            ],
          },
          {
            id: "e-games",
            name: "E-Games",
            content: [
              {
                title: "Match",
                rules: [
                  "In the event of a match starting but not being completed, then all bets will be void.",
                ],
              },
            ],
          },
          {
            id: "futsal",
            name: "Futsal",
            content: [
              {
                title: "Match",
                rules: [
                  "Match Odds: - Bets will be void if the match is not completed.",
                  "Next Goal: - Predict which team will score the X-th goal.",
                  "1st Half Winner: -Half bets will be settled at the end of the 1sthalf. In the event of the 1st half not being completed bets will be void.",
                  "Highest Scoring Half: - Predict in which Event Part will be scored most.",
                ],
              },
            ],
          },
          {
            id: "big-bash-league",
            name: "Big Bash League",
            content: [
              {
                title: "General Rules",
                rules: [
                  "Total match 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid",
                  "Highest innings run - Only first innings is valid",
                  "Lowest innings run - Only first innings is valid",
                  "Total 1st 6 over run:- Average 46 runs will be given if total 20 overs is not played, This event is valid only for the 1st innings",
                  "Total Fours - Average 25 fours will be given in case match abandoned or over reduced",
                  "Total Sixes - Average 10 sixes will be given in case match abandoned or over reduced",
                  "Total Wickets - Average will 12 Wickets be given in case match abandoned or over reduced",
                ],
              },
            ],
          },
        ];
        const Rules = (props) => {
          _s();
          const { classData } = props;
          const [activeTab, setActiveTab] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)("horse-racing"); // Set first sport as default open

          // Ensure first sport is open on component mount
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            setActiveTab("horse-racing");
          }, []);
          const toggleTab = (sportId) => {
            // Always set the clicked sport as active (only one can be open at a time)
            setActiveTab(sportId);
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            {
              children: [
                _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ].subheader("Rules"),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                  "div",
                  {
                    className:
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isMobile
                        ? classData
                          ? "col-md-12 mt-1"
                          : "col-md-12 mt-1"
                        : "col-md-12 padding-custom",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                      "div",
                      {
                        className: "",
                        children: [
                          _layout_elements_mobile_subheader__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                          ].subheaderdesktop("Rules"),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                            "div",
                            {
                              className: "card-body p0",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                "div",
                                {
                                  className: "row row5 mt-2",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                    "div",
                                    {
                                      className: "col-12",
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                        "div",
                                        {
                                          role: "tablist",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                            "div",
                                            {
                                              id: "accordion",
                                              children: sportsData.map(
                                                (sport, index) =>
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                    "div",
                                                    {
                                                      className: "card",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                          "div",
                                                          {
                                                            id: `heading${index}`,
                                                            "data-toggle":
                                                              "collapse",
                                                            "data-target": `#collapse${index}`,
                                                            "aria-controls": `collapse${index}`,
                                                            className:
                                                              "card-header",
                                                            onClick: () =>
                                                              toggleTab(
                                                                sport.id
                                                              ),
                                                            style: {
                                                              cursor: "pointer",
                                                              background:
                                                                "linear-gradient(88.06deg, #111827 30%, #0088CC 86%)",
                                                            },
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                "h5",
                                                                {
                                                                  className:
                                                                    "mb-0",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                      "button",
                                                                      {
                                                                        className:
                                                                          "btn btn-link",
                                                                        style: {
                                                                          color:
                                                                            "white",
                                                                          fontWeight:
                                                                            "bold",
                                                                        },
                                                                        children:
                                                                          sport.name,
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 217,
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
                                                                  lineNumber: 216,
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
                                                            lineNumber: 204,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                          "div",
                                                          {
                                                            id: `collapse${index}`,
                                                            "aria-labelledby": `heading${index}`,
                                                            "data-parent":
                                                              "#accordion",
                                                            className:
                                                              activeTab ===
                                                              sport.id
                                                                ? "collapse show"
                                                                : "collapse",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "card-body",
                                                                  children:
                                                                    sport.content.map(
                                                                      (
                                                                        section,
                                                                        sectionIndex
                                                                      ) =>
                                                                        /*#__PURE__*/ (0,
                                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "mb-3",
                                                                            children:
                                                                              [
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                  "h6",
                                                                                  {
                                                                                    className:
                                                                                      "text-danger mb-2",
                                                                                    children:
                                                                                      section.title,
                                                                                  },
                                                                                  void 0,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      _jsxFileName,
                                                                                    lineNumber: 229,
                                                                                    columnNumber: 33,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                                /*#__PURE__*/ (0,
                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                  "table",
                                                                                  {
                                                                                    className:
                                                                                      "table table-bordered",
                                                                                    children:
                                                                                      /*#__PURE__*/ (0,
                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                        "tbody",
                                                                                        {
                                                                                          children:
                                                                                            section.rules.map(
                                                                                              (
                                                                                                rule,
                                                                                                ruleIndex
                                                                                              ) =>
                                                                                                /*#__PURE__*/ (0,
                                                                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                                  "tr",
                                                                                                  {
                                                                                                    children:
                                                                                                      /*#__PURE__*/ (0,
                                                                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                                        "td",
                                                                                                        {
                                                                                                          children:
                                                                                                            /*#__PURE__*/ (0,
                                                                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(
                                                                                                              "span",
                                                                                                              {
                                                                                                                children:
                                                                                                                  rule,
                                                                                                              },
                                                                                                              void 0,
                                                                                                              false,
                                                                                                              {
                                                                                                                fileName:
                                                                                                                  _jsxFileName,
                                                                                                                lineNumber: 234,
                                                                                                                columnNumber: 45,
                                                                                                              },
                                                                                                              undefined
                                                                                                            ),
                                                                                                        },
                                                                                                        void 0,
                                                                                                        false,
                                                                                                        {
                                                                                                          fileName:
                                                                                                            _jsxFileName,
                                                                                                          lineNumber: 234,
                                                                                                          columnNumber: 41,
                                                                                                        },
                                                                                                        undefined
                                                                                                      ),
                                                                                                  },
                                                                                                  ruleIndex,
                                                                                                  false,
                                                                                                  {
                                                                                                    fileName:
                                                                                                      _jsxFileName,
                                                                                                    lineNumber: 233,
                                                                                                    columnNumber: 39,
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
                                                                                          lineNumber: 231,
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
                                                                                    lineNumber: 230,
                                                                                    columnNumber: 29,
                                                                                  },
                                                                                  undefined
                                                                                ),
                                                                              ],
                                                                          },
                                                                          sectionIndex,
                                                                          true,
                                                                          {
                                                                            fileName:
                                                                              _jsxFileName,
                                                                            lineNumber: 228,
                                                                            columnNumber: 31,
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
                                                                  lineNumber: 226,
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
                                                            lineNumber: 220,
                                                            columnNumber: 23,
                                                          },
                                                          undefined
                                                        ),
                                                      ],
                                                    },
                                                    sport.id,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 203,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  )
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 201,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 200,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 199,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 198,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 197,
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
                        lineNumber: 195,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 190,
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
        _s(Rules, "mw8Mzj9yRy+ijwlIUK7LKjra+CA=");
        _c = Rules;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            Rules
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "Rules");
        __webpack_require__.$Refresh$.register(_c2, "%default%");

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
//# sourceMappingURL=src_admin-app_pages_Rules_rules_tsx.chunk.js.map
