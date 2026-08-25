"use strict";
(globalThis["webpackChunkfair_react"] = globalThis["webpackChunkfair_react"] || []).push([["src_admin-app_pages_InplayMatch_InplayMatch_tsx"],{

/***/ "./src/admin-app/pages/InplayMatch/InplayMatch.tsx":
/*!*********************************************************!*\
  !*** ./src/admin-app/pages/InplayMatch/InplayMatch.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../redux/hooks */ "./src/redux/hooks.ts");
/* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts");
/* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/sports.service */ "./src/services/sports.service.ts");
/* harmony import */ var _elements_SportSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/SportSection */ "./src/admin-app/pages/InplayMatch/elements/SportSection.tsx");
/* harmony import */ var _context_webSocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/webSocket */ "./src/context/webSocket.tsx");
/* harmony import */ var _InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InplayMatch.css */ "./src/admin-app/pages/InplayMatch/InplayMatch.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/InplayMatch/InplayMatch.tsx",
  _s = __webpack_require__.$Refresh$.signature();









const InplayMatch = () => {
  _s();
  const [sportsData, setSportsData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [allMatches, setAllMatches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [odds, setOdds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const sportListState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(_redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_2__.selectSportList);
  const {
    socket
  } = (0,_context_webSocket__WEBPACK_IMPORTED_MODULE_5__.useWebsocket)();
  const {
    sportId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();

  // Hardcoded sport categories with actual images from public folder
  const hardcodedSportCategories = [{
    sportId: 'in-play',
    name: 'IN-PLAY',
    icon: '/assets/images/sports-icons/in-play.svg',
    color: '#dc3545',
    bgColor: '#003559',
    isInPlay: true,
    isImage: true
  }, {
    sportId: '4',
    name: 'CRICKET',
    icon: '/assets/images/sports-icons/icon-cricket.svg',
    color: '#ffffff',
    bgColor: '#003559',
    isImage: true
  }, {
    sportId: '2',
    name: 'TENNIS',
    icon: '/assets/images/sports-icons/tennis.gif',
    color: '#ffffff',
    bgColor: '#003559',
    isImage: true
  }, {
    sportId: '1',
    name: 'SOCCER',
    icon: '/assets/images/sports-icons/football.gif',
    color: '#ffffff',
    bgColor: '#003559',
    isImage: true
  }, {
    sportId: '7',
    name: 'HORSE RACE',
    icon: '/assets/images/sports-icons/13053.gif',
    color: '#ffffff',
    bgColor: '#003559',
    isImage: true
  }, {
    sportId: '4339',
    name: 'GREYHOUND',
    icon: '/assets/images/sports-icons/13054.gif',
    color: '#ffffff',
    bgColor: '#003559',
    isImage: true
  }, {
    sportId: '99',
    name: 'POLITICS',
    icon: 'ðŸ›ï¸',
    color: '#ffffff',
    bgColor: '#003559',
    isImage: false
  }, {
    sportId: '88',
    name: 'CASINO',
    icon: 'ðŸŽ°',
    color: '#ffffff',
    bgColor: '#003559',
    isImage: false
  }, {
    sportId: '888',
    name: 'ICASINO',
    icon: 'ðŸŽ²',
    color: '#ffffff',
    bgColor: '#003559',
    isImage: false
  }];

  // Sport configuration for API mapping
  const sportConfig = {
    '4': {
      name: 'CRICKET',
      icon: 'ðŸ'
    },
    '2': {
      name: 'TENNIS',
      icon: 'ðŸŽ¾'
    },
    '1': {
      name: 'SOCCER',
      icon: 'âš½'
    },
    '7': {
      name: 'HORSE RACE',
      icon: 'ðŸ‡'
    },
    '4339': {
      name: 'GREYHOUND',
      icon: 'ðŸ•'
    },
    '99': {
      name: 'POLITICS',
      icon: 'ðŸ›ï¸'
    },
    '88': {
      name: 'CASINO',
      icon: 'ðŸŽ°'
    },
    '888': {
      name: 'ICASINO',
      icon: 'ðŸŽ²'
    }
  };

  // Helper function to merge hardcoded categories with API data
  const mergeHardcodedWithApiData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(matchList => {
    // Group API matches by sport ID
    const apiMatchesBySport = {};
    let totalInPlayMatches = [];
    matchList.forEach(match => {
      var _match$sportId;
      const sportId = ((_match$sportId = match.sportId) === null || _match$sportId === void 0 ? void 0 : _match$sportId.toString()) || '0';
      if (!apiMatchesBySport[sportId]) {
        apiMatchesBySport[sportId] = [];
      }

      // For individual sport categories, exclude in-play matches
      if (!(match.inPlay || match.iplay)) {
        apiMatchesBySport[sportId].push(match);
      }

      // Collect in-play matches for the IN-PLAY category
      if (match.inPlay || match.iplay) {
        totalInPlayMatches.push(match);
      }
    });

    // Create display categories by merging hardcoded with API data
    return hardcodedSportCategories.map(category => {
      if (category.isInPlay) {
        // Special handling for IN-PLAY category - only in-play matches
        return {
          sportId: category.sportId,
          name: category.name,
          icon: category.icon,
          color: category.color,
          bgColor: category.bgColor,
          matches: totalInPlayMatches,
          count: totalInPlayMatches.length,
          isInPlay: true,
          isImage: category.isImage
        };
      } else {
        // Regular sport categories - exclude in-play matches
        const matches = apiMatchesBySport[category.sportId] || [];
        return {
          sportId: category.sportId,
          name: category.name,
          icon: category.icon,
          color: category.color,
          bgColor: category.bgColor,
          matches: matches,
          count: matches.length,
          isInPlay: false,
          isImage: category.isImage
        };
      }
    });
  }, [hardcodedSportCategories]);

  // Handle category click for filtering
  const handleCategoryClick = categoryId => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  // Filter sports data based on selected category
  const getFilteredSportsData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!selectedCategory) {
      return sportsData; // Show all if no category selected
    }
    return sportsData.filter(sport => sport.sportId === selectedCategory);
  }, [sportsData, selectedCategory]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchCurrentMatches();
  }, []);

  // WebSocket for live odds (same as dashboard)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    socket.on('getMarketData', marketData => {
      let firstIndexFirst = '-';
      let firstIndexTwo = '-';
      let secIndexFirst = '-';
      let secfirstIndexTwo = '-';
      let thirdIndexFirst = '-';
      let thirdfirstIndexTwo = '-';
      if (marketData.runners) {
        if (marketData.runners[0] && marketData.runners[0].ex.availableToBack[0]) {
          firstIndexFirst = marketData.runners[0].ex.availableToBack[0].price;
          firstIndexTwo = marketData.runners[0].ex.availableToLay[0].price;
        }
        if (marketData.runners[1] && marketData.runners[1].ex.availableToBack[0]) {
          secIndexFirst = marketData.runners[1].ex.availableToBack[0].price;
          secfirstIndexTwo = marketData.runners[1].ex.availableToLay[0].price;
        }
        if (marketData.runners[2] && marketData.runners[2].ex.availableToBack[0]) {
          thirdIndexFirst = marketData.runners[2].ex.availableToBack[0].price;
          thirdfirstIndexTwo = marketData.runners[2].ex.availableToLay[0].price;
        }
      }
      setOdds(prevOdds => ({
        ...prevOdds,
        [marketData.marketId]: [firstIndexFirst, firstIndexTwo, thirdIndexFirst, thirdfirstIndexTwo, secIndexFirst, secfirstIndexTwo]
      }));
    });
    return () => {
      socket.off('getMarketData');
    };
  }, [odds, socket]);
  const fetchCurrentMatches = async () => {
    setLoading(true);
    try {
      console.log('ðŸš€ InplayMatch: Fetching current matches from all sports');

      // Fetch matches from all sports - corrected sport IDs
      const allSports = ['1', '2', '4', '7', '4339', '99', '88', '888']; // 1=Soccer, 2=Tennis, 4=Cricket
      const matchPromises = allSports.map(sport => _services_sports_service__WEBPACK_IMPORTED_MODULE_3__["default"].getLiveMatches(sport).catch(error => {
        console.warn(`âš ï¸ Error fetching sport ${sport}:`, error);
        return {
          data: {
            data: []
          }
        };
      }));
      const responses = await Promise.all(matchPromises);
      console.log('âœ… InplayMatch: All sports responses received');

      // Combine all matches from different sports (same logic as dashboard)
      let combinedMatches = [];
      responses.forEach((res, index) => {
        var _res$data, _res$data2;
        const data = ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.sports) || res.data || [];
        const currentSportId = allSports[index];
        if (Array.isArray(data)) {
          // Filter matches to only include those that actually belong to this sport
          const filteredMatches = data.filter(match => {
            // If match has sportId, check if it matches current sport
            if (match.sportId) {
              return match.sportId.toString() === currentSportId;
            }
            if (match.etid) {
              return match.etid.toString() === currentSportId;
            }
            // If no sportId in match, assume it belongs to requested sport
            return true;
          });
          const sportMatches = filteredMatches.map(match => {
            var _match$eventid, _match$gmid;
            return {
              // Core match identification
              _id: match._id || ((_match$eventid = match.eventid) === null || _match$eventid === void 0 ? void 0 : _match$eventid.toString()) || ((_match$gmid = match.gmid) === null || _match$gmid === void 0 ? void 0 : _match$gmid.toString()),
              matchId: match.matchId || match.eventid || match.gmid,
              sportId: parseInt(currentSportId),
              // Use requested sportId since we filtered
              seriesId: match.competitionId || match.cid || '1',
              // IMPORTANT: Use actual match time from Diamond API, not cache time
              matchDateTime: match.openDate || match.stime || new Date().toISOString(),
              // Match details from Diamond API
              name: match.name || match.ename,
              // Status and flags
              active: match.active !== false,
              inPlay: match.inplay || match.iplay || false,
              // Market availability flags from Diamond API
              isBookMaker: match.hasBookmaker || match.bm || false,
              isFancy: match.hasFancy || match.f || false,
              isT10: false,
              tv: match.hasTV || match.tv || false,
              bm: match.hasBookmaker || match.bm || false,
              f: match.hasFancy || match.f || false,
              f1: match.hasFancy1 || match.f1 || false,
              // Diamond API specific fields
              ename: match.name || match.ename,
              etid: parseInt(currentSportId),
              // Force use currentSportId to fix mapping issue
              cid: match.competitionId || match.cid,
              cname: match.competitionName || match.cname,
              iplay: match.inplay || match.iplay || false,
              stime: match.openDate || match.stime,
              status: match.status || 'OPEN',
              gmid: match.eventid || match.gmid,
              // Required LMatch fields
              countryCode: '',
              result_delare: false,
              result: '',
              markets: match.markets || [],
              // Preserve external data for compatibility
              externalData: match.externalData || match
            };
          });
          combinedMatches = combinedMatches.concat(sportMatches);
        }
      });

      // Filter for current matches (not old ones) - prioritize in-play and recent matches
      const now = new Date();
      const currentMatches = combinedMatches.filter(match => {
        const matchTime = new Date(match.matchDateTime || match.stime || '1970-01-01');
        const timeDiff = now.getTime() - matchTime.getTime();
        const hoursDiff = timeDiff / (1000 * 60 * 60);

        // Include: in-play matches OR matches within 24 hours (future or past)
        return match.inPlay || match.iplay || Math.abs(hoursDiff) <= 24;
      });

      // Sort matches - in-play first, then by time (ascending)
      const sortedMatches = currentMatches.sort((a, b) => {
        // First priority: in-play matches come first
        const aInPlay = a.inPlay || a.iplay || false;
        const bInPlay = b.inPlay || b.iplay || false;
        if (aInPlay && !bInPlay) return -1;
        if (!aInPlay && bInPlay) return 1;

        // Second priority: sort by time (ascending - upcoming first)
        const aTime = new Date(a.matchDateTime || a.stime || '1970-01-01').getTime();
        const bTime = new Date(b.matchDateTime || b.stime || '1970-01-01').getTime();
        return aTime - bTime;
      });
      console.log(`ðŸ“Š InplayMatch: Processed ${sortedMatches.length} current matches (filtered from ${combinedMatches.length} total)`);

      // Merge hardcoded categories with API data
      const mergedSportsData = mergeHardcodedWithApiData(sortedMatches);
      setAllMatches(sortedMatches);
      setSportsData(mergedSportsData);

      // Setup market event listeners for live odds
      marketIdsEvent(sortedMatches);
    } catch (error) {
      console.error('âŒ InplayMatch: Error fetching current matches:', error);
      setSportsData([]);
    } finally {
      setLoading(false);
    }
  };

  // Market event handler for live odds (same as dashboard)
  const marketIdsEvent = data => {
    if (!Array.isArray(data)) {
      console.warn('marketIdsEvent: Expected array but got:', typeof data, data);
      return;
    }
    data.forEach(match => {
      if (match.markets && Array.isArray(match.markets)) {
        match.markets.forEach(market => {
          if (market.marketName === 'Match Odds' && !odds[market.marketId]) {
            setTimeout(() => {
              socket.emit('joinMarketRoom', market.marketId);
            }, 200);
          }
        });
      }
    });
  };
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "inplay-loading",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "loading-spinner",
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 7
    }, undefined);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "inplay-match-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "sports-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "welcome-banner",
        children: "WELCOME TO Reddy Anna NO 1 ONLINE GAMING EXCHANGE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "sports-tabs",
        children: sportsData.map(sport => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: `sport-tab ${sport.isInPlay ? 'in-play-active' : ''} ${selectedCategory === sport.sportId ? 'selected' : ''}`,
          style: {
            backgroundColor: sport.bgColor,
            color: sport.color
          },
          onClick: () => handleCategoryClick(sport.sportId.toString()),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "sport-icon",
            children: sport.isImage ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
              src: sport.icon,
              alt: sport.name,
              className: "sport-icon-image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 21
            }, undefined) : sport.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "sport-name",
            children: sport.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "sport-count",
            children: sport.count
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 17
          }, undefined)]
        }, sport.sportId, true, {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "sports-content",
      children: getFilteredSportsData().map(sport => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_elements_SportSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
        sport: sport
      }, sport.sportId, false, {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 7
    }, undefined), selectedCategory && getFilteredSportsData().length > 0 && getFilteredSportsData().every(sport => sport.count === 0) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "no-matches-selected",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
        children: "No matches available for selected category"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
        children: "Click on another category or clear selection to see other matches."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 400,
    columnNumber: 5
  }, undefined);
};
_s(InplayMatch, "pPSN2dgzWB0lp6r2QbzDwhBQpZg=", false, function () {
  return [_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector, _context_webSocket__WEBPACK_IMPORTED_MODULE_5__.useWebsocket, react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams];
});
_c = InplayMatch;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InplayMatch);
var _c;
__webpack_require__.$Refresh$.register(_c, "InplayMatch");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
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

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/admin-app/pages/InplayMatch/elements/SportSection.tsx":
/*!*******************************************************************!*\
  !*** ./src/admin-app/pages/InplayMatch/elements/SportSection.tsx ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/InplayMatch/elements/SportSection.tsx";



const SportSection = ({
  sport
}) => {
  const handleMatchClick = match => {
    // Navigate to match odds page
    const matchIdForNavigation = match.matchId || match.gmid || match._id;
    window.location.href = `/admin/odds/${matchIdForNavigation}`;
  };
  const formatMatchTime = dateTime => {
    const matchMoment = moment__WEBPACK_IMPORTED_MODULE_1___default()(dateTime);
    const now = moment__WEBPACK_IMPORTED_MODULE_1___default()();

    // If match is today, show time only
    if (matchMoment.isSame(now, 'day')) {
      return matchMoment.format('h:mm A');
    }

    // If match is tomorrow, show "Tomorrow HH:mm"
    if (matchMoment.isSame(now.clone().add(1, 'day'), 'day')) {
      return `Tomorrow ${matchMoment.format('h:mm A')}`;
    }

    // Otherwise show date and time
    return matchMoment.format('DD/MM/YYYY, h:mm A');
  };
  const isMatchCurrent = match => {
    const now = new Date();
    const matchTime = new Date(match.matchDateTime || match.stime || '1970-01-01');
    const timeDiff = now.getTime() - matchTime.getTime();
    const hoursDiff = timeDiff / (1000 * 60 * 60);

    // Current if in-play or within 24 hours
    return match.inPlay || match.iplay || Math.abs(hoursDiff) <= 24;
  };

  // Only render if there are matches to show
  const currentMatches = sport.matches.filter(match => isMatchCurrent(match));
  if (currentMatches.length === 0) {
    return null; // Don't render empty sections
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "sport-section",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "sport-section-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "sport-section-icon",
        children: sport.isImage ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: sport.icon,
          alt: sport.name,
          className: "sport-section-icon-image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, undefined) : sport.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: sport.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "match-count-badge",
        children: ["(", currentMatches.length, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "matches-list",
      children: currentMatches.map((match, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: `match-item ${match.inPlay || match.iplay ? 'live-match' : ''}`,
        onClick: () => handleMatchClick(match),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "match-lock-icon",
          children: match.inPlay || match.iplay ? 'ðŸŸ¢' : 'ðŸ”’'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "match-details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "match-name",
            children: match.name || match.ename
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "match-time",
            children: match.inPlay || match.iplay ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "live-text",
              children: "LIVE NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 21
            }, undefined) : formatMatchTime(match.matchDateTime || match.stime || new Date().toISOString())
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, undefined), match.cname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "match-series",
            children: match.cname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "match-indicators",
          children: [(match.inPlay || match.iplay) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: "match-indicator live-indicator",
            children: "LIVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 19
          }, undefined), (match.bm || match.isBookMaker) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: "match-indicator bm",
            children: "BM"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 19
          }, undefined), (match.f || match.isFancy) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: "match-indicator f",
            children: "F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 19
          }, undefined), match.tv && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: "match-indicator tv",
            children: "\uD83D\uDCFA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }, undefined)]
      }, `${match.matchId}_${index}`, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, undefined);
};
_c = SportSection;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SportSection);
var _c;
__webpack_require__.$Refresh$.register(_c, "SportSection");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
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

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/InplayMatch/InplayMatch.css":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/InplayMatch/InplayMatch.css ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.inplay-match-container {
  width: 100%;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.inplay-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.loading-spinner {
  font-size: 18px;
  color: #666;
}

/* Header Styles */
.sports-header {
  background: linear-gradient(135deg, #0088CC 0%, #033d5a 100%);
  color: white;
  padding: 0;
}

.welcome-banner {
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
}

.sports-tabs {
  display: flex;
  background-color: #000;
  border: none;
  margin: 0;
  padding: 0;
}

.sport-tab {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-height: 60px;
  justify-content: center;
  position: relative;
  text-align: center;
}

.sport-tab:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.sport-tab.in-play-active {
  animation: pulse-red 2s infinite;
}

.sport-tab.selected {
  box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.8);
  transform: scale(1.05);
}

@keyframes pulse-red {
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
}

.sport-icon {
  font-size: 24px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
}

.sport-icon-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Removed white filter to show full colors */
}

.sport-name {
  font-size: 9px;
  font-weight: bold;
  text-align: center;
  line-height: 1.1;
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sport-count {
  background-color: rgba(255, 255, 255, 0.2);
  color: inherit;
  border-radius: 10px;
  padding: 1px 6px;
  font-size: 11px;
  font-weight: bold;
  min-width: 18px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Sports Content */
.sports-content {
  padding: 0;
}

/* Sport Section Styles */
.sport-section {
  margin-bottom: 0;
  background: white;
  border-bottom: 1px solid #ddd;
}

.sport-section-header {
  background-color: #2c3e50;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sport-section-icon {
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
}

.sport-section-icon-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Removed white filter to show full colors */
}

.match-count-badge {
  margin-left: auto;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
}

.matches-list {
  padding: 0;
}

.match-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.match-item:hover {
  background-color: #f8f9fa;
}

.match-item:last-child {
  border-bottom: none;
}

.match-lock-icon {
  margin-right: 12px;
  color: #28a745;
  font-size: 16px;
}

.match-details {
  flex: 1 1;
}

.match-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  font-size: 14px;
}

.match-time {
  color: #666;
  font-size: 12px;
}

.match-indicators {
  display: flex;
  gap: 8px;
  align-items: center;
}

.match-indicator {
  background-color: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
}

.match-indicator.bm {
  background-color: #28a745;
}

.match-indicator.f {
  background-color: #ffc107;
  color: #333;
}

/* Live match styles */
.live-match {
  background-color: #fff;
  border-left: 4px solid #49dc35;
}

.live-match:hover {
  background-color: #e5f0e0;
}

.live-text {
  color: #3cc12a;
  font-weight: bold;
  font-size: 12px;
}

.match-series {
  color: #888;
  font-size: 11px;
  margin-top: 2px;
}

.live-indicator {
  background-color: #43dc35 !important;
  animation: pulse 2s infinite;
}

.match-indicator.tv {
  background-color: #6f42c1;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

/* Empty state */
.no-matches {
  padding: 20px;
  text-align: center;
  color: #666;
  font-style: italic;
}

.no-matches-selected {
  text-align: center;
  padding: 40px 20px;
  color: #666;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 20px;
}

.no-matches-selected h3 {
  color: #333;
  margin-bottom: 10px;
}

.no-matches-selected p {
  margin: 0;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sport-tab {
    padding: 8px 4px;
    min-height: 70px;
  }
  
  .sport-icon {
    font-size: 20px;
  }
  
  .sport-name {
    font-size: 10px;
  }
  
  .sport-count {
    font-size: 10px;
    padding: 1px 6px;
  }
  
  .welcome-banner {
    font-size: 12px;
    padding: 6px;
  }
  
  .match-item {
    padding: 10px 12px;
  }
  
  .match-name {
    font-size: 13px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/admin-app/pages/InplayMatch/InplayMatch.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA,kBAAkB;AAClB;EACE,6DAA6D;EAC7D,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,SAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,oDAAoD;EACpD,sBAAsB;AACxB;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,MAAM,YAAY,EAAE;EACpB,OAAO,UAAU,EAAE;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,6CAA6C;AAC/C;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,0CAA0C;EAC1C,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA,mBAAmB;AACnB;EACE,UAAU;AACZ;;AAEA,yBAAyB;AACzB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,6CAA6C;AAC/C;;AAEA;EACE,iBAAiB;EACjB,0CAA0C;EAC1C,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA,sBAAsB;AACtB;EACE,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,kBAAkB;AACpB;;AAEA,sBAAsB;AACtB;EACE;IACE,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":[".inplay-match-container {\n  width: 100%;\n  background-color: #f5f5f5;\n  min-height: 100vh;\n}\n\n.inplay-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50vh;\n}\n\n.loading-spinner {\n  font-size: 18px;\n  color: #666;\n}\n\n/* Header Styles */\n.sports-header {\n  background: linear-gradient(135deg, #0088CC 0%, #033d5a 100%);\n  color: white;\n  padding: 0;\n}\n\n.welcome-banner {\n  background-color: rgba(0, 0, 0, 0.2);\n  text-align: center;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\n.sports-tabs {\n  display: flex;\n  background-color: #000;\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n.sport-tab {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  min-height: 60px;\n  justify-content: center;\n  position: relative;\n  text-align: center;\n}\n\n.sport-tab:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n\n.sport-tab.in-play-active {\n  animation: pulse-red 2s infinite;\n}\n\n.sport-tab.selected {\n  box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.8);\n  transform: scale(1.05);\n}\n\n@keyframes pulse-red {\n  0% { opacity: 1; }\n  50% { opacity: 0.8; }\n  100% { opacity: 1; }\n}\n\n.sport-icon {\n  font-size: 24px;\n  margin-bottom: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  width: 32px;\n}\n\n.sport-icon-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  /* Removed white filter to show full colors */\n}\n\n.sport-name {\n  font-size: 9px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1.1;\n  margin-bottom: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.sport-count {\n  background-color: rgba(255, 255, 255, 0.2);\n  color: inherit;\n  border-radius: 10px;\n  padding: 1px 6px;\n  font-size: 11px;\n  font-weight: bold;\n  min-width: 18px;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n/* Sports Content */\n.sports-content {\n  padding: 0;\n}\n\n/* Sport Section Styles */\n.sport-section {\n  margin-bottom: 0;\n  background: white;\n  border-bottom: 1px solid #ddd;\n}\n\n.sport-section-header {\n  background-color: #2c3e50;\n  color: white;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.sport-section-icon {\n  font-size: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n}\n\n.sport-section-icon-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  /* Removed white filter to show full colors */\n}\n\n.match-count-badge {\n  margin-left: auto;\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n}\n\n.matches-list {\n  padding: 0;\n}\n\n.match-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.match-item:hover {\n  background-color: #f8f9fa;\n}\n\n.match-item:last-child {\n  border-bottom: none;\n}\n\n.match-lock-icon {\n  margin-right: 12px;\n  color: #28a745;\n  font-size: 16px;\n}\n\n.match-details {\n  flex: 1;\n}\n\n.match-name {\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 4px;\n  font-size: 14px;\n}\n\n.match-time {\n  color: #666;\n  font-size: 12px;\n}\n\n.match-indicators {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.match-indicator {\n  background-color: #007bff;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.match-indicator.bm {\n  background-color: #28a745;\n}\n\n.match-indicator.f {\n  background-color: #ffc107;\n  color: #333;\n}\n\n/* Live match styles */\n.live-match {\n  background-color: #fff;\n  border-left: 4px solid #49dc35;\n}\n\n.live-match:hover {\n  background-color: #e5f0e0;\n}\n\n.live-text {\n  color: #3cc12a;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.match-series {\n  color: #888;\n  font-size: 11px;\n  margin-top: 2px;\n}\n\n.live-indicator {\n  background-color: #43dc35 !important;\n  animation: pulse 2s infinite;\n}\n\n.match-indicator.tv {\n  background-color: #6f42c1;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Empty state */\n.no-matches {\n  padding: 20px;\n  text-align: center;\n  color: #666;\n  font-style: italic;\n}\n\n.no-matches-selected {\n  text-align: center;\n  padding: 40px 20px;\n  color: #666;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  margin: 20px;\n}\n\n.no-matches-selected h3 {\n  color: #333;\n  margin-bottom: 10px;\n}\n\n.no-matches-selected p {\n  margin: 0;\n  font-style: italic;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .sport-tab {\n    padding: 8px 4px;\n    min-height: 70px;\n  }\n  \n  .sport-icon {\n    font-size: 20px;\n  }\n  \n  .sport-name {\n    font-size: 10px;\n  }\n  \n  .sport-count {\n    font-size: 10px;\n    padding: 1px 6px;\n  }\n  \n  .welcome-banner {\n    font-size: 12px;\n    padding: 6px;\n  }\n  \n  .match-item {\n    padding: 10px 12px;\n  }\n  \n  .match-name {\n    font-size: 13px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/admin-app/pages/InplayMatch/InplayMatch.css":
/*!*********************************************************!*\
  !*** ./src/admin-app/pages/InplayMatch/InplayMatch.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./InplayMatch.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/InplayMatch/InplayMatch.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./InplayMatch.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/InplayMatch/InplayMatch.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./InplayMatch.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/admin-app/pages/InplayMatch/InplayMatch.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_InplayMatch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_admin-app_pages_InplayMatch_InplayMatch_tsx.chunk.js.map
