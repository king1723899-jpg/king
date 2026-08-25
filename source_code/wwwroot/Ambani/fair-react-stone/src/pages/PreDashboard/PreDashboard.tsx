import { AxiosResponse } from 'axios'
import React, { useCallback, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./PreDashboard.css";
import { CiVolumeHigh } from "react-icons/ci";
import { IoTriangleOutline } from "react-icons/io5";
//import { fixResizeObserverError } from "../../utils/resizeObserverFix";
import ReusableAccordian from "./Rules/ReusableAccordian";
import Modal from '../../components/Modal/Modal'
import RulesModal from "./Rules/RulesModal";
import LoginModal from "../login/LoginModal";
import Navbar from "../../components/Navbar/Navbar";
import { isMobile } from "react-device-detect";
import { useAppSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { useNavigateCustom } from '../_layout/elements/custom-link'
import { useWebsocket } from '../../context/webSocket'
import LMatch from '../../models/LMatch'
import sportsServices from '../../services/sports.service'
import ISport from '../../models/ISport'
import { selectSportList, setCurrentMatch } from '../../redux/actions/sports/sportSlice'
import IMatch from '../../models/IMatch'
import { OddsType } from '../../models/IMarket'
import authService from '../../services/auth.service'
import { selectUserData } from '../../redux/actions/login/loginSlice'
import moment from 'moment';

// Add the grouping function from Dashboard
function groupMatchesBySport(
  matchList: LMatch[],
  sportList: ISport[],
  sportsCategories: { id: number; name: string }[]
): { category: string; matchList: LMatch[] }[] {
  if (!Array.isArray(matchList) || matchList.length === 0) return [];
  const sportIdToName: Record<string | number, string> = {};
  sportList.forEach((sport) => {
    if (sport.sportId && sport.name) {
      sportIdToName[sport.sportId] = sport.name;
    }
  });
  // Add fallback from sportsCategories
  sportsCategories.forEach((cat) => {
    if (cat.id && cat.name && !sportIdToName[cat.id]) {
      sportIdToName[cat.id] = cat.name;
    }
  });
  const groups: Record<string, LMatch[]> = {};
  matchList.forEach((match) => {
    const sportName = sportIdToName[match.sportId] || `Sport ${match.sportId}`;
    if (!groups[sportName]) groups[sportName] = [];
    groups[sportName].push(match);
  });
  return Object.entries(groups).map(([category, matchList]) => ({
    category,
    matchList,
  }));
}

// Function to extract odds from externalData
const extractOddsFromExternalData = (externalData: any) => {
  if (!externalData || !externalData.section) return null;

  const sections = externalData.section;
  // Sort by sno to ensure correct order (1, X, 2)
  sections.sort((a: any, b: any) => a.sno - b.sno);

  const oddsData = [];

  for (const section of sections) {
    const backOdds = section.odds.find((odd: any) => odd.otype === 'back');
    const layOdds = section.odds.find((odd: any) => odd.otype === 'lay');

    oddsData.push(backOdds ? backOdds.odds : '-');
    oddsData.push(layOdds ? layOdds.odds : '-');
  }

  return oddsData;
};

const PreDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const [expandedSidebarItems, setExpandedSidebarItems] = useState<number[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [currentSport, setCurrentSport] = useState<number>(88);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [isHomeView, setIsHomeView] = useState(false);

  // Move sportsCategories inside the component as state
  const [sportsCategories, setSportsCategories] = useState([
    {
      id: 88,
      name: "HOME",
      icon: "home",
      active: true,
      subcategories: ["Featured", "Popular", "Recent"],
    },
    {
      id: 4,
      name: "CRICKET",
      icon: "cricket",
      active: false,
      subcategories: [
        "T20",
        "ODI",
        "Test",
        "IPL",
        "Big Bash",
        "Caribbean Premier League",
      ],
    },
    {
      id: 1,
      name: "FOOTBALL",
      icon: "football",
      active: false,
      subcategories: [
        "Premier League",
        "La Liga",
        "Bundesliga",
        "Serie A",
        "Champions League",
      ],
    },
    {
      id: 2,
      name: "TENNIS",
      icon: "tennis",
      active: false,
      subcategories: ["Grand Slams", "ATP", "WTA", "Davis Cup", "Fed Cup"],
    },
    {
      id: 6,
      name: "POLITICS",
      icon: "politics",
      active: false,
      subcategories: ["Elections", "Referendums", "Polls"],
    },
    {
      id: 7,
      name: "CASINO",
      icon: "casino",
      active: false,
      subcategories: ["Slots", "Table Games", "Live Casino", "Jackpots"],
    },
 
    {
      id: 9,
      name: "HORSE RACING",
      icon: "horse",
      active: false,
      subcategories: ["Flat Racing", "Jump Racing", "Harness Racing"],
    },
    {
      id: 10,
      name: "GREYHOUND RACING",
      icon: "greyhound",
      active: false,
      subcategories: ["UK Racing", "Irish Racing", "Australian Racing"],
    },
    {
      id: 11,
      name: "BINARY",
      icon: "binary",
      active: false,
      subcategories: ["High/Low", "One Touch", "Range"],
    },
 
    {
      id: 13,
      name: "BASKETBALL",
      icon: "basketball",
      active: false,
      subcategories: ["NBA", "EuroLeague", "NCAA", "FIBA"],
    },
    {
      id: 14,
      name: "BASEBALL",
      icon: "baseball",
      active: false,
      subcategories: ["MLB", "NPB", "KBO", "Minor Leagues"],
    },
   
    {
      id: 16,
      name: "VOLLEYBALL",
      icon: "volleyball",
      active: false,
      subcategories: ["FIVB", "European League", "Asian Games"],
    },
    {
      id: 17,
      name: "ICE HOCKEY",
      icon: "rugby",
      active: false,
      subcategories: ["NHL", "KHL", "IIHF", "European Leagues"],
    },
  ]);

  // Add state and hooks from Dashboard
  const [matchList, setMatchList] = React.useState<LMatch[]>([])
  const sportListState = useAppSelector<{ sports: ISport[] }>(selectSportList)
  const navigateCustom = useNavigateCustom()
  const dispatch = useDispatch()
  const { socket } = useWebsocket()
  const [odds, setOdds] = React.useState<Record<string, Array<any>>>({})
  const userState = useAppSelector(selectUserData)

  // Fix ResizeObserver loop error
 // useEffect(() => {
 //   const cleanup = fixResizeObserverError();
 //   return cleanup;
 // }, []);

  useEffect(() => {
    // Automatically trigger HOME sport selection
    handleSportClick(88);
  }, []);

  // Auto-open login modal if query param ?login=1 (or any value)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.has('login')) {
      setShowLoginModal(true);
      // Clean URL (retain other params if needed later)
      if (window?.history?.replaceState) {
        window.history.replaceState({}, '', location.pathname);
      }
    }
  }, [location.pathname, location.search]);

  // Add useEffect from Dashboard to fetch matches
  React.useEffect(() => {
    // Fetch matches for all sports
    console.log(`ðŸš€ PreDashboard: Fetching live matches for all sports`)

    const allSports = isMobile
      ? ['88', '1', '2', '4']
      : ['1', '2', '4', '88'];

    const matchPromises = allSports.map(sport =>
      sportsServices.getLiveMatches(sport).catch(error => {
        console.warn(`âš ï¸ Error fetching sport ${sport}:`, error);
        return { data: { data: [] } };
      })
    );

    Promise.all(matchPromises)
      .then((responses) => {
        console.log(`âœ… PreDashboard: All sports responses received`);

        // Combine all matches from different sports
        let allMatches: LMatch[] = [];
        const initialOddsData: Record<string, Array<any>> = {};

        responses.forEach((res, index) => {
          const data = res.data?.data || res.data?.sports || res.data || [];
          const currentSportId = allSports[index];

          if (Array.isArray(data)) {
            const sportMatches = data.map((match: any): LMatch => {
              // Extract odds from externalData if available
              if (match.externalData) {
                const extractedOdds = extractOddsFromExternalData(match.externalData);
                if (extractedOdds && match.externalData.mid) {
                  initialOddsData[match.externalData.mid] = extractedOdds;
                }
              }

              return {
                // Core match identification
                _id: match._id || match.eventid?.toString() || match.gmid?.toString(),
                matchId: match.matchId || match.eventid || match.gmid,
                sportId: match.sportId || parseInt(currentSportId),
                seriesId: match.competitionId || match.cid || '1',

                // IMPORTANT: Use actual match time from Diamond API, not cache time
                matchDateTime: match.openDate || match.stime || new Date().toISOString(),

                // Match details from Diamond API
                name: match.name || match.ename,

                // Status and flags - filter for in-play if status parameter is set
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
                etid: match.sportId || parseInt(currentSportId),
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

            allMatches = allMatches.concat(sportMatches);
          }
        });

        console.log(`ðŸ“Š PreDashboard: Processed ${allMatches.length} matches from all sports`);

        // âœ… FIXED: Sort matches - in-play first, then by time (ascending)
        const sortedMatches = allMatches.sort((a, b) => {
          // First priority: in-play matches come first
          const aInPlay = a.inPlay || a.iplay || false
          const bInPlay = b.inPlay || b.iplay || false

          if (aInPlay && !bInPlay) return -1
          if (!aInPlay && bInPlay) return 1

          // Second priority: sort by time (ascending - old first)
          const aTime = new Date(a.matchDateTime || a.stime || '1970-01-01').getTime()
          const bTime = new Date(b.matchDateTime || b.stime || '1970-01-01').getTime()

          return aTime - bTime
        })

        console.log(`ðŸ“Š PreDashboard: Sorted ${sortedMatches.length} matches (in-play first, then by time)`)

        // Set initial odds from externalData
        setOdds(prevOdds => ({ ...prevOdds, ...initialOddsData }));

        const oddsData = { ...odds, ...initialOddsData }
        marketIdsEvent(sortedMatches, oddsData, 'joinMarketRoom')
        setMatchList(sortedMatches)
      })
      .catch((error) => {
        console.error('âŒ PreDashboard: Error fetching all sports matches:', error);
        setMatchList([]);
      });

    return () => {
      const oddsData = { ...odds }
      // Ensure matchList is an array before calling marketIdsEvent
      if (Array.isArray(matchList)) {
        marketIdsEvent(matchList, oddsData, 'leaveMarketRoom')
      }
    }
  }, []) // Empty dependency array to run only on mount

  // Add WebSocket listener from Dashboard
  React.useEffect(() => {
    socket.on('getMarketData', (marketData: any) => {
      let firstIndexFirst = '-'
      let firstIndexTwo = '-'
      let secIndexFirst = '-'
      let secfirstIndexTwo = '-'
      let thirdIndexFirst = '-'
      let thirdfirstIndexTwo = '-'

      if (marketData.runners) {
        if (marketData.runners[0] && marketData.runners[0].ex.availableToBack[0]) {
          firstIndexFirst = marketData.runners[0].ex.availableToBack[0].price
          firstIndexTwo = marketData.runners[0].ex.availableToLay[0].price
        }

        if (marketData.runners[1] && marketData.runners[1].ex.availableToBack[0]) {
          secIndexFirst = marketData.runners[1].ex.availableToBack[0].price
          secfirstIndexTwo = marketData.runners[1].ex.availableToLay[0].price
        }

        if (marketData.runners[2] && marketData.runners[2].ex.availableToBack[0]) {
          thirdIndexFirst = marketData.runners[2].ex.availableToBack[0].price
          thirdfirstIndexTwo = marketData.runners[2].ex.availableToLay[0].price
        }
      }

      setOdds((prevOdds) => ({
        ...prevOdds,
        [marketData.marketId]: [
          firstIndexFirst,
          firstIndexTwo,
          thirdIndexFirst,
          thirdfirstIndexTwo,
          secIndexFirst,
          secfirstIndexTwo,
        ],
      }));
    })

    return () => {
      socket.off('getMarketData')
    }
  }, [odds])

  // Add marketIdsEvent function from Dashboard
  const marketIdsEvent = (data: any, oddsData: any, event: string) => {
    // Ensure data is an array before trying to map
    if (!Array.isArray(data)) {
      console.warn('marketIdsEvent: Expected array but got:', typeof data, data);
      return;
    }

    data.map((match: IMatch) => {
      if (match.markets && Array.isArray(match.markets)) {
        match.markets.map((market) => {
          if (market.marketName == 'Match Odds' && !odds[market.marketId]) {
            // Initialize odds if needed
          }
          setTimeout(() => {
            socket.emit(event, market.marketId)
          }, 200)
        })
      }
    })
  }

  // Add currentMatch function from Dashboard
  const currentMatch = (match: LMatch) => {
    // Helper function to safely convert date
    const getSafeISOString = (dateValue: any): string => {
      if (!dateValue) {
        console.warn('PreDashboard: No date value provided, using current time')
        return new Date().toISOString()
      }

      // If it's already a string, validate it's a proper ISO string
      if (typeof dateValue === 'string') {
        const testDate = new Date(dateValue)
        if (isNaN(testDate.getTime())) {
          console.warn('PreDashboard: Invalid date string, using current time:', dateValue)
          return new Date().toISOString()
        }
        return testDate.toISOString()
      }

      // If it's a Date object, validate it
      if (dateValue instanceof Date) {
        if (isNaN(dateValue.getTime())) {
          console.warn('PreDashboard: Invalid Date object, using current time:', dateValue)
          return new Date().toISOString()
        }
        return dateValue.toISOString()
      }

      // Try to create a new Date from the value
      try {
        const newDate = new Date(dateValue)
        if (isNaN(newDate.getTime())) {
          console.warn('PreDashboard: Could not convert to Date, using current time:', dateValue)
          return new Date().toISOString()
        }
        return newDate.toISOString()
      } catch (error) {
        console.warn('PreDashboard: Date conversion error, using current time:', error)
        return new Date().toISOString()
      }
    }

    // Convert LMatch to IMatch with proper date handling
    // Handle both old and new data formats
    const extendedMatch = match as any // Type assertion for new properties

    const convertedMatch: IMatch = {
      ...match,
      matchDateTime: getSafeISOString(
        match.matchDateTime ||
        match.stime ||
        extendedMatch.openDate ||
        new Date()
      ),
      sportId: match.sportId?.toString() || '4', // Default to cricket if missing
      seriesId: match.seriesId?.toString() ||
        match.cid?.toString() ||
        extendedMatch.competitionId?.toString() ||
        '1',
      markets: match.markets?.map(market => ({
        ...market,
        __v: 0, // Add required __v field
        isActive: market.isActive,
        isDelete: market.isDelete,
        marketId: market.marketId,
        marketName: market.marketName,
        matchId: market.matchId,
        oddsType: market.oddsType === 'berFair' ? OddsType.B :
          market.oddsType === 'bookMaker' ? OddsType.BM :
            market.oddsType === 'Fancy' ? OddsType.F : OddsType.B,
        seriesId: match.seriesId?.toString() ||
          match.cid?.toString() ||
          extendedMatch.competitionId?.toString() ||
          '1',
        sportId: market.sportId,
        runners: market.runners
      })) || [] // Provide empty array if no markets
    }

    console.log('ðŸŽ¯ PreDashboard: Setting current match:', convertedMatch)
    dispatch(setCurrentMatch(convertedMatch))

    // Use correct property names for navigation
    const matchIdForNavigation = match.matchId ||
      match.gmid ||
      extendedMatch.eventid ||
      match._id

    navigateCustom.go(`/odds/${matchIdForNavigation}`)
  }

  // Add memoOdds function from Dashboard
  const memoOdds = useCallback(
    (marketId: any, matchData: any) => {
      // First check if we have odds from WebSocket
      if (odds[marketId]) {
        const marketData = odds[marketId];
        return (
          <>
            <div className="odds-cell odds-blue">
              <span className='new-odd'>{marketData?.[0] || '-'}</span>

             


            </div>
            <div className="odds-cell odds-pink">
              <span className='new-odd'>{marketData?.[1] || '-'}</span>

            </div>
            <div className="odds-cell odds-blue">
              <span className='new-odd'>{marketData?.[2] || '-'}</span>

            </div>
            <div className="odds-cell odds-pink">
              <span className='new-odd'>{marketData?.[3] || '-'}</span>

            </div>
            <div className="odds-cell odds-blue">
              <span className='new-odd'>{marketData?.[4] || '-'}</span>

            </div>
            <div className="odds-cell odds-pink">
              <span className='new-odd'>{marketData?.[5] || '-'}</span>

            </div>
          </>
        );
      }

      // If no WebSocket odds, check for externalData odds
      if (matchData.externalData) {
        const extractedOdds = extractOddsFromExternalData(matchData.externalData);
        if (extractedOdds) {
          return (
            <>
              <div className="odds-cell odds-blue">
                <span className='new-odd'>{extractedOdds[0] || '-'}</span>

              </div>
              <div className="odds-cell odds-pink">
                <span className='new-odd'>{extractedOdds[1] || '-'}</span>

              </div>
              <div className="odds-cell odds-blue">
                <span className='new-odd'>{extractedOdds[2] || '-'}</span>

              </div>
              <div className="odds-cell odds-pink">
                <span className='new-odd'>{extractedOdds[3] || '-'}</span>

              </div>
              <div className="odds-cell odds-blue">
                <span className='new-odd'>{extractedOdds[4] || '-'}</span>

              </div>
              <div className="odds-cell odds-pink">
                <span className='new-odd'>{extractedOdds[5] || '-'}</span>

              </div>
            </>
          );
        }
      }

      // Fallback if no odds data
      return (
        <>
          <div className="odds-cell odds-blue">
            <span className="odd">-</span>
          </div>
          <div className="odds-cell odds-pink">
            <span className="odd">-</span>
          </div>
          <div className="odds-cell odds-blue">
            <span className="odd">-</span>
          </div>
          <div className="odds-cell odds-blue">
            <span className="odd">-</span>
          </div>
          <div className="odds-cell odds-pink">
            <span className="odd">-</span>
          </div>
          <div className="odds-cell odds-blue">
            <span className="odd">-</span>
          </div>
          <div className="odds-cell odds-pink">
            <span className="odd">-</span>
          </div>
        </>
      );
    },
    [odds],
  )

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleRules = () => {
    setShowRulesModal(true);
  };

  const toggleSidebarItem = (itemId: number) => {
    setExpandedSidebarItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleMatchClick = (matchId: number) => {
    setSelectedMatch(matchId);
    console.log(`Match clicked: ${matchId}`);
  };

  // Responsive category order state
  const getOrder = () =>
    (window.innerWidth <= 768 || isMobile)
      ? [7, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
      : [3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 7];

  const [categoryOrder, setCategoryOrder] = useState<number[]>(getOrder());

  useEffect(() => {
    function updateOrder() {
      setCategoryOrder(getOrder());
    }
    window.addEventListener('resize', updateOrder);
    return () => window.removeEventListener('resize', updateOrder);
  }, []);

  // Accept sportId for navigation
  const handleSportClick = (sportId: number) => {
    setCurrentSport(sportId);
    setIsHomeView(sportId === 88);
    setSportsCategories(prev =>
      prev.map(sport => ({ ...sport, active: sport.id === sportId }))
    );
  };

  const getCurrentSportData = () => {
    return (
      sportsCategories.find((sport) => sport.id === currentSport) ||
      sportsCategories[0]
    );
  };

  const currentSportData = getCurrentSportData();

  // Group matches by sport for display
  const groupedMatches = groupMatchesBySport(matchList, sportListState.sports, sportsCategories);

  const filteredGroups =
    currentSport === 88
      ? groupedMatches
      : groupedMatches.filter(
        (g) => g.matchList.some(m => Number(m.sportId) === currentSport)
      );

  return (
    <>
      <div className="dashboard-container">
        {/* Header */}
        <header className="dashboard-header">
          {/* Fixed header layout matching the image */}
          <div className="fixed-header">
            {/* Original layout for desktop */}
            <div className="header-desktop">
              <div className="header-left">
                <div className="logo-container">
                  <img
                    src="/logo.png"
                    alt="REDDY.CLUB Logo"
                    className="logo-image"
                  />
                </div>
              </div>

              <div className="header-center">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search Events"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <span className="search-icon">ðŸ”</span>
                </div>
                <button className="rules-btn" onClick={handleRules}>
                  RULES
                </button>
              </div>

              <div className="header-right">
                <button className="signup-btn" onClick={handleSignup}>
                  SIGNUP
                </button>
                <button className="login-btn" onClick={handleLogin}>
                  LOGIN
                </button>
              </div>
            </div>

            {/* Mobile layout (hidden on desktop) */}
            <div className="header-mobile">
              <div className="header-top-row">
                <div className="logo-container">
                  <img
                    src="/darklogo.png"
                    alt="REDDY.CLUB Logo"
                    className="logo-image"
                  />
                </div>
                <div className="header-auth-buttons">
                  <button className="signup-btn" onClick={handleSignup}>
                    SIGNUP
                  </button>
                  <button className="login-btn" onClick={handleLogin}>
                    LOGIN
                  </button>
                </div>
              </div>

              <div className="header-bottom-row">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search Events"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <span className="search-icon">ðŸ”</span>
                </div>
                <button className="rules-btn d-none d-md-block" onClick={handleRules}>
                  RULES
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Navigation Tabs */}
        <nav className="main-nav">
          {sportsCategories.map((sport) => (
            <div
              key={sport.id}
              className={`nav-tab ${sport.id === currentSport ? "active" : ""}`}
              onClick={() => handleSportClick(sport.id)}
            >
               <span className="nav-icon">
              <img
                src={`/icon/${sport.name.toLowerCase()}.png`}
                alt={`${sport.name} icon`}
                className="nav-icon-img"
              />
            </span>
            <span className="nav-text">{sport.name}</span>
            </div>
          ))}
        </nav>

        <div className="dashboard-content">
          <aside className="sidebar">
            <div className="sidebar-menu">
              {sportsCategories.map((sport) => (
                <div key={sport.id}>
                  <div
                    className={`sidebar-item ${sport.id === currentSport ? "active" : ""}`}
                    onClick={() => {
                      toggleSidebarItem(sport.id);
                      handleSportClick(sport.id);
                    }}
                  >
                    <span>
                      <img
                        src={`/icon/${sport.icon}.png`}
                        alt="Sport Icon"
                        className="sidebar-icon-img"
                      />
                    </span>
                    <span className="sidebar-text">{sport.name}</span>
                    <span
                      className={`sidebar-arrow ${expandedSidebarItems.includes(sport.id)
                        ? "expanded"
                        : ""}`}
                    >
                      ðŸ›†
                    </span>
                  </div>
                  {expandedSidebarItems.includes(sport.id) && (
                    <div className="sidebar-submenu">
                      {sport.subcategories.map((subcategory, index) => (
                        <div key={index} className="sidebar-subitem">
                          <span className="subitem-text">{subcategory}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}

          <main className="main-content">
            <div className="announcement-bar">ðŸ”Š</div>

            {/* Show Casino UI when on Home tab (sportId 88) */}
            {currentSport === 88 && isMobile && (
              <div className="category-group">
                <div className="content-header casino-no-margin" style={{ marginBottom: 0 }}>
                  <div className="sport-banner-section">
                    <div className="sport-banner-wrapper">
                      <div className="sport-banner">
                        <h6 className="sport-banner-title">
                          <img
                            src="/icon/casino.png"
                            alt="Casino Icon"
                            className="sport-banner-icon"
                          />
                          CASINO GAMES
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="casino-games-style mb-2">
                  {Array.from({ length: 6 }, (_, index) => (
                    <div key={index} className="casino-game-box m-0">
                      <img
                        src={`/icon/game-${index + 1}.gif`}
                        alt={`Game ${index + 1}`}
                        className="casino-game-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredGroups.map(({ category, matchList }) => (
              <div key={category} className="category-group">
                <div className={"content-header" + (category.toLowerCase() === 'casino' ? ' casino-no-margin' : '')} style={category.toLowerCase() === 'casino' ? { marginBottom: 0 } : {}}>
                  <div className="sport-banner-section">
                    <div className="sport-banner-wrapper">
                      <div className="sport-banner">
                        <h6 className="sport-banner-title">
                          <img
                            src={`/icon/${category.toLowerCase()}.png`}
                            alt="Sport Icon"
                            className="sport-banner-icon"
                          />
                          {category.toUpperCase()}
                        </h6>
                      </div>
                    </div>
                  </div>
                  {category.toLowerCase() !== 'casino' && (
                    <div className="odds-header">
                      <div className="odds-header-content">
                        <div className="odds-header-item">1</div>
                        <div className="odds-header-item">x</div>
                        <div className="odds-header-item">2</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Special layout for casino category: grid of games */}
                {category.toLowerCase() === 'casino'
                  ? (
                    <div className="casino-games-style mb-2">
                      {Array.from({ length: 6 }, (_, index) => (
                        <div key={index} className="casino-game-box m-0">
                          <img
                            src={`/icon/game-${index + 1}.${index % 2 === 0 ? 'gif' : 'webp'}`}
                            alt={`Game ${index + 1}`}
                            className="casino-game-image"
                          />
                        </div>
                      ))}
                    </div>
                  )
                    : matchList.map((match) => {
                    // Get market ID for this match
                    let marketId = null;
                    if (match.markets && match.markets.length > 0) {
                      const matchOddsMarket = match.markets.find(m => m.marketName === 'Match Odds');
                      marketId = matchOddsMarket ? matchOddsMarket.marketId : null;
                    }

                    // Use externalData mid as fallback market ID
                    if (!marketId && match.externalData && match.externalData.mid) {
                      marketId = match.externalData.mid;
                    }

                    return (
                      <div className="match-row" key={match.matchId} onClick={() => setShowLoginModal(true)} style={{ cursor: "pointer" }}>
                        <div className="match-info-section">
                          <div className="match-info">
                            <div className="team-text">
                              <h2
                                className="team-name truncated-text"
                                onClick={(e) => { e.stopPropagation(); setShowLoginModal(true); }}
                              >
                                {" "}
                                {match.name || match.ename}
                              </h2>
                              <h3 className="league-name truncated-text">
                                {match.cname}
                              </h3>
                            </div>
                          </div>
                          <div
                            className={`match-time ${match.inPlay || match.iplay ? "live-label" : ""
                              }`}
                          >
                            {match.inPlay || match.iplay ? (
                              <span className="">LIVE</span>
                            ) : (
                              <div className="match-date-time">
                                <span>
                                  {moment(match?.matchDateTime).format("DD MMM")}
                                </span>
                                <span>
                                  {moment(match?.matchDateTime).format("hh:mm A")}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="match-date-replica">
                            {match.inPlay || match.iplay ? (
                              <div className="match-date-time">
                                <span>
                                  {moment(match?.matchDateTime).format("DD MMM")}
                                </span>
                                <span>
                                  {moment(match?.matchDateTime).format("hh:mm A")}
                                </span>
                              </div>
                            ) : (
                              <span className="empty-time" />
                            )}
                          </div>
                          <div className="match-broadcast ">
                            {match.tv === true && (
                              <span className="pre-game-icon">
                                <i className="fas fa-tv v-m icon-tv" />
                              </span>
                            )}

                            {/* Fancy icon - show if f flag is true */}
                            {(match.f === true || match.isFancy === true) && (
                              <span className="pre-game-icon">
                                <img
                                  src="/assets/images/icons/ic_fancy.png"
                                  className="fancy-icon"
                                  alt="Fancy"
                                />
                              </span>
                            )}

                            {/* Bookmaker icon - show if bm flag is true */}
                            {(match.bm === true || match.isBookMaker === true) && (
                              <span className="pre-game-icon">
                                <img
                                  src="/assets/images/icons/ic_bm.png"
                                  className="bookmaker-icon"
                                  alt="Bookmaker"
                                />
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="match-odds-section">
                          {/* odds details */}
                          <div className="odds-grid">
                            {memoOdds(marketId, match)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ))}
            {currentSport === 88 && !isMobile && (
              <div className="category-group">
                <div className="content-header casino-no-margin" style={{ marginBottom: 0 }}>
                  <div className="sport-banner-section">
                    <div className="sport-banner-wrapper">
                      <div className="sport-banner">
                        <h6 className="sport-banner-title">
                          <img
                            src="/icon/casino.png"
                            alt="Casino Icon"
                            className="sport-banner-icon"
                          />
                          CASINO GAMES
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="casino-games-style mb-2">
                  {Array.from({ length: 6 }, (_, index) => (
                    <div key={index} className="casino-game-box m-0">
                      <img
                        src={`/icon/game-${index + 1}.gif`}
                        alt={`Game ${index + 1}`}
                        className="casino-game-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
  
         {/* WhatsApp Support Image - Bottom Right Corner */}
      <div className="whatsapp-support-container">
        <a 
          href="https://wa.link/ambani" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-support-link"
          title="Contact us on WhatsApp"
        >
          <img 
            src="/wp_support.png"
            alt="WhatsApp Support" 
            className="whatsapp-support-image"
          />
        </a>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
      {showRulesModal && (
        <RulesModal onClose={() => setShowRulesModal(false)} />
      )}
    </>
  );
};
export default PreDashboard; 

