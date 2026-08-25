import { AxiosResponse } from 'axios'
import React, { useCallback } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LMatch from '../../models/LMatch'
import sportsServices from '../../services/sports.service'
import ISport from '../../models/ISport'
import { useAppSelector } from '../../redux/hooks'
import { selectSportList, setCurrentMatch } from '../../redux/actions/sports/sportSlice'
import IMatch from '../../models/IMatch'
import { useDispatch } from 'react-redux'
import { useNavigateCustom } from '../_layout/elements/custom-link'
import { useWebsocket } from '../../context/webSocket'
import GameTab from '../_layout/elements/game-tab'
import { isMobile } from 'react-device-detect'
import GameTabMobile from '../_layout/elements/game-tab-mobile'
import MatchList from './elements/match-list'

import MatchListMobile from './elements/match-list-mobile'
import CasinoListItem from '../CasinoList/CasinoListItem'
import casinoService from '../../services/casino.service'
import {
  selectCasinoMatchList,
  setHomePageCasinoMatch,
} from '../../redux/actions/casino/casinoSlice'
import Fav from '../_layout/elements/fav'
import { OddsType } from '../../models/IMarket'
import authService from '../../services/auth.service'
import { selectUserData } from '../../redux/actions/login/loginSlice'
// Helper to group matches by sport name (e.g., Cricket, Football)
function groupMatchesBySport(matchList: LMatch[], sportList: ISport[]): { category: string, matchList: LMatch[] }[] {
  if (!Array.isArray(matchList) || matchList.length === 0) return [];
  const sportIdToName: Record<string | number, string> = {};
  sportList.forEach(sport => {
    if (sport.sportId && sport.name) {
      sportIdToName[sport.sportId] = sport.name;
    }
  });
  const groups: Record<string, LMatch[]> = {};
  matchList.forEach(match => {
    const sportName = sportIdToName[match.sportId] || `Sport ${match.sportId}`;
    if (!groups[sportName]) groups[sportName] = [];
    groups[sportName].push(match);
  });
  return Object.entries(groups).map(([category, matchList]) => ({ category, matchList }));
}

const Dashboard = () => {
  const [matchList, setMatchList] = React.useState<LMatch[]>([])
  const sportListState = useAppSelector<{ sports: ISport[] }>(selectSportList)
  const navigate = useNavigateCustom()
  const dispatch = useDispatch()
  const { socket } = useWebsocket()
  const [odds, setOdds] = React.useState<Record<string, Array<any>>>({})
  const location = useLocation()
  const gamesList = useAppSelector<any>(selectCasinoMatchList)
  const userState = useAppSelector(selectUserData)

  const { sportId, status } = useParams()
  React.useEffect(() => {
    // Enhanced: Use live matches endpoint with support for all sports
    if (sportId) {
      console.log(`🚀 Dashboard: Fetching live matches for sportId: ${sportId}`)
      
      if (sportId === '888' || sportId === '9999') {
        // Fetch matches from all sports
        let allSports = [];
        if (sportId === '888') {
          // Home - show all sports + casino categories
          allSports = isMobile
            ? ['88', '1', '2', '4'] // Casino first for mobile
            : [ '88','1', '2', '4']; // Casino last for desktop
        } else if (sportId === '9999') {
          // Casino Providers - just show empty casino category
          allSports = ['88'];
        }
        
        const matchPromises = allSports.map(sport => 
          sportsServices.getLiveMatches(sport).catch(error => {
            console.warn(`⚠️ Error fetching sport ${sport}:`, error);
            return { data: { data: [] } };
          })
        );
        
        Promise.all(matchPromises)
          .then((responses) => {
            console.log(`✅ Dashboard: All sports responses received`);
            
            // Combine all matches from different sports
            let allMatches: LMatch[] = [];
            
            responses.forEach((res, index) => {
              const data = res.data?.data || res.data?.sports || res.data || [];
              const currentSportId = allSports[index];
              
              if (Array.isArray(data)) {
                const sportMatches = data.map((match: any): LMatch => ({
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
                }));
                
                allMatches = allMatches.concat(sportMatches);
              }
            });
            
            // Filter for in-play if status parameter is set
            if (status === 'in-play') {
              allMatches = allMatches.filter(match => match.inPlay || match.iplay);
              console.log(`🎯 Dashboard: Filtered ${allMatches.length} in-play matches from all sports`);
            } else {
              console.log(`📊 Dashboard: Processed ${allMatches.length} matches from all sports`);
            }
            
            // ✅ FIXED: Sort matches - in-play first, then by time (ascending)
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
            
            console.log(`📊 Dashboard: Sorted ${sortedMatches.length} matches (in-play first, then by time)`)
            
            const oddsData = { ...odds }
            marketIdsEvent(sortedMatches, oddsData, 'joinMarketRoom')
            setOdds(oddsData)
            setMatchList(sortedMatches)
          })
          .catch((error) => {
            console.error('❌ Dashboard: Error fetching all sports matches:', error);
            setMatchList([]);
          });
      } else {
        // Single sport fetch (existing logic)
        sportsServices.getLiveMatches(sportId)
          .then((res: AxiosResponse<any>) => {
            console.log(`✅ Dashboard: Live matches response:`, res.data)
            
            // Handle the new live matches response format
            const data = res.data?.data || res.data?.sports || res.data || [];
            let matchesArray: LMatch[] = [];
            
            if (Array.isArray(data)) {
              // Map the live matches data to LMatch format with correct Diamond API fields
              matchesArray = data.map((match: any): LMatch => ({
                // Core match identification
                _id: match._id || match.eventid?.toString() || match.gmid?.toString(),
                matchId: match.matchId || match.eventid || match.gmid,
                sportId: match.sportId || parseInt(sportId),
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
                etid: match.sportId || parseInt(sportId),
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
              }));
            } else {
              console.warn('Dashboard: Expected array but got:', data);
              matchesArray = [];
            }
            
            console.log(`📊 Dashboard: Processed ${matchesArray.length} live matches with correct Diamond API fields`)
            console.log('🔍 Sample match data:', matchesArray[0])
            
            // ✅ FIXED: Sort matches - in-play first, then by time (ascending)
            const sortedMatches = matchesArray.sort((a, b) => {
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
            
            console.log(`📊 Dashboard: Sorted ${sortedMatches.length} matches (in-play first, then by time)`)
            
            const oddsData = { ...odds }
            marketIdsEvent(sortedMatches, oddsData, 'joinMarketRoom')
            setOdds(oddsData)
            setMatchList(sortedMatches)
          })
          .catch((error) => {
            console.error('❌ Dashboard: Error fetching live matches:', error);
            setMatchList([]); // Set empty array on error
          })
      }
    } else {
      // Fallback for when no sportId is provided
      console.log('⚠️ Dashboard: No sportId provided, clearing match list')
      setMatchList([]);
    }
    
    return () => {
      const oddsData = { ...odds }
      // Ensure matchList is an array before calling marketIdsEvent
      if (Array.isArray(matchList)) {
      marketIdsEvent(matchList, oddsData, 'leaveMarketRoom')
      }
    }
  }, [sportId, status]) // Added 'status' dependency for in-play filtering

  React.useEffect(() => {
    // Fetch casino homepage categories if user is authenticated (12 categories max)
    // Refresh when sportId changes to 888
    if (userState.user._id && authService.isLoggedIn() && sportId === '888') {
      casinoService.getCasinoHomepageCategories()
        .then((res: AxiosResponse<any>) => {
          dispatch(setHomePageCasinoMatch(res.data.data))
        })
        .catch((error) => {
          console.log('Failed to fetch casino homepage categories:', error.message)
          // Don't show error to user, just log it
        })
    }
  }, [userState.user._id, sportId])
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

  const memoOdds = useCallback(
    (marketId: any) => {

      if (!marketId) {
        return (
          <>
            <td><button className="back"><span className="odd">-</span></button></td>
            <td><button className="lay"><span className="odd">-</span></button></td>
            <td><button className="back"><span className="odd">-</span></button></td>
            <td><button className="lay"><span className="odd">-</span></button></td>
            <td><button className="back"><span className="odd">-</span></button></td>
            <td><button className="lay"><span className="odd">-</span></button></td>
          </>
        );
      }
      const marketData = odds[marketId]
      return (
        <>
          <td>
            <button className='back'>
              <span className='odd'>{marketData && marketData[0] || '-'}</span>
            </button>
          </td>
          <td>
            <button className='lay'>
              <span className='odd'>{marketData && marketData[1] || '-'}</span>
            </button>
          </td>
          <td>
            <button className='back'>
              <span className='odd'>{marketData && marketData[2] || '-'}</span>
            </button>
          </td>
          <td>
            <button className='lay'>
              <span className='odd'>{marketData && marketData[3] || '-'}</span>
            </button>
          </td>
          <td>
            <button className='back'>
              <span className='odd'>{marketData && marketData[4] || '-'}</span>
            </button>
          </td>
          <td>
            <button className='lay'>
              <span className='odd'>{marketData && marketData[5] || '-'}</span>
            </button>
          </td>
        </>
      )
    },
    [odds],
  )

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
          // setOdds((prevOdds) => ({
          //   ...prevOdds,
          //   [market.marketId]:Array(6).fill('-'),
          // }));
        }
        setTimeout(() => {
          socket.emit(event, market.marketId)
        }, 200)
      })
      }
    })
  }

  const currentMatch = (match: LMatch) => {
    // Helper function to safely convert date
    const getSafeISOString = (dateValue: any): string => {
      if (!dateValue) {
        console.warn('Dashboard: No date value provided, using current time')
        return new Date().toISOString()
      }
      
      // If it's already a string, validate it's a proper ISO string
      if (typeof dateValue === 'string') {
        const testDate = new Date(dateValue)
        if (isNaN(testDate.getTime())) {
          console.warn('Dashboard: Invalid date string, using current time:', dateValue)
          return new Date().toISOString()
        }
        return testDate.toISOString()
      }
      
      // If it's a Date object, validate it
      if (dateValue instanceof Date) {
        if (isNaN(dateValue.getTime())) {
          console.warn('Dashboard: Invalid Date object, using current time:', dateValue)
          return new Date().toISOString()
        }
        return dateValue.toISOString()
      }
      
      // Try to create a new Date from the value
      try {
        const newDate = new Date(dateValue)
        if (isNaN(newDate.getTime())) {
          console.warn('Dashboard: Could not convert to Date, using current time:', dateValue)
          return new Date().toISOString()
        }
        return newDate.toISOString()
      } catch (error) {
        console.warn('Dashboard: Date conversion error, using current time:', error)
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
    
    console.log('🎯 Dashboard: Setting current match:', convertedMatch)
    dispatch(setCurrentMatch(convertedMatch))
    
    // Use correct property names for navigation
    const matchIdForNavigation = match.matchId || 
                                match.gmid || 
                                extendedMatch.eventid || 
                                match._id
    
    navigate.go(`/odds/${matchIdForNavigation}`)
  }

  return (
    <>
     <style>
        {`
          @keyframes blink {
            0%, 50% {
              opacity: 1;
              transform: scale(1);
            }
            25%, 75% {
              opacity: 0.7;
              transform: scale(1.05);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
      {' '}
      {console.log()}
      {isMobile ? <GameTabMobile sportId={sportId} sportListState={sportListState} /> : ''}
      <div className='pb-4 mtc-5'>
        {!isMobile ? <Fav /> : ""}
        {!isMobile ? <GameTab sportId={sportId} sportListState={sportListState} /> : ''}
        {/**/}
        <div className='tab-content'>
          <div className='tab-pane active'>
            <div className='matchlist coupon-card-first matchlist-coupon-card-first'>
              {/* {!isMobile ? (
                <>
                  
                </>
              ) : (
                <MatchListMobile
                  currentMatch={currentMatch}
                  memoOdds={memoOdds}
                  matchList={matchList}
                />
              )} */}
              {(() => {
                // Build grouped list
                const grouped = groupMatchesBySport(matchList, sportListState.sports);
                // For aggregated (888) OR direct casino (88) always ensure casino category exists so static UI renders
                if (sportId === '888' || sportId === '88') {
                  const hasCasino = grouped.some(g => g.category.toLowerCase() === 'casino');
                  if (!hasCasino) {
                    // Force uppercase name to align with static UI condition
                    const casinoName = 'CASINO';
                    grouped.push({ category: casinoName, matchList: [] });
                  } else {
                    // Normalize existing casino category name to uppercase for consistency
                    grouped.forEach(g => {
                      if (g.category.toLowerCase() === 'casino') g.category = 'CASINO';
                    });
                  }
                  // Sort grouped so casino is at top on mobile, last on desktop
                 grouped.sort((a, b) => {
                    if (a.category === 'CASINO' && b.category !== 'CASINO') {
                      return -1;
                    }
                    if (a.category !== 'CASINO' && b.category === 'CASINO') {
                      return 1;
                    }
                    return 0;
                  });
                }
                return grouped.map(({ category, matchList }) => (
                  <div key={category}>
                    <MatchList currentMatch={currentMatch} memoOdds={memoOdds} matchList={matchList} category={category} />
                  </div>
                ));
              })()}
              {/* Casino categories are now shown in MatchList under CASINO section */}
            </div>
            <div>
              <div className=""></div>
            </div>
          </div>
        </div>
           <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            cursor: "pointer"
          }}
        >
          <a
            href="https://wa.link/ambani"
            target="_blank"
            rel="noopener noreferrer"
            title="Contact us on WhatsApp"
            style={{
              display: "block",
              textDecoration: "none"
            }}
          >
            <img
              src="/wp_support.png"
              alt="WhatsApp Support"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
                animation: "blink 2s infinite"
              }}
            />
          </a>
        </div>
      </div>
    </>
  )
}
export default Dashboard
