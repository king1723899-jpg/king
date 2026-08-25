
import moment from 'moment'
import React from 'react'
import { useWebsocketUser } from '../../../context/webSocketUser'
import IBet from '../../../models/IBet'
import { RoleType } from '../../../models/User'
import { selectPlaceBet, setBetCount, setbetlist, setBookMarketList } from '../../../redux/actions/bet/betSlice'
import { selectUserData } from '../../../redux/actions/login/loginSlice'
import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import betService from '../../../services/bet.service'
import { betDateFormat } from '../../../utils/helper'
import { isMobile } from 'react-device-detect'
import { selectCasinoCurrentMatch } from '../../../redux/actions/casino/casinoSlice'
import { useLocation } from 'react-router-dom'

interface MyBetComponentProps {
  selectedUserId?: string;
  onUserChange?: (userId: string) => void;
}

const MyBetComponent = ({ selectedUserId, onUserChange }: MyBetComponentProps = {}) => {
  const [getMyAllBet, setMyAllBet] = React.useState<IBet[]>([])
  const [bettingUsers, setBettingUsers] = React.useState<any[]>([])
  const [currentSelectedUserId, setCurrentSelectedUserId] = React.useState<string>('')
  const getPlaceBet = useAppSelector(selectPlaceBet)
  const getCurrentMatch = useAppSelector(selectCurrentMatch)
  const getCasinoCurrentMatch = useAppSelector(selectCasinoCurrentMatch)
  const userState = useAppSelector(selectUserData)
  const { socketUser } = useWebsocketUser()
  const dispatch = useAppDispatch()
  const [betRefresh, setRefreshStatus] = React.useState<any>(false)
  const location = useLocation();
  const prevMatchId = React.useRef<any>(null) // Move useRef outside useEffect
  
  // ✅ NEW: Fetch betting users for admin dropdown
  React.useEffect(() => {
    console.log('🔍 Checking betting users fetch conditions:', {
      isAdmin: userState.user.role !== RoleType.user,
      matchId: getCurrentMatch?.matchId,
      userRole: userState.user.role
    })
    
    if (userState.user.role !== RoleType.user && getCurrentMatch?.matchId) {
      console.log('🔄 Fetching betting users for match:', getCurrentMatch.matchId)
      betService.getMatchBettingUsers(getCurrentMatch.matchId)
        .then((response) => {
          console.log('📊 Betting users API response:', response.data)
          if (response.data && response.data.data) {
            const users = response.data.data.users || []
            console.log('👥 Setting betting users:', users)
            setBettingUsers(users)
          }
        })
        .catch((error) => {
          console.error('❌ Error fetching betting users:', error)
        })
    }
  }, [getCurrentMatch?.matchId, userState.user.role])

  // ✅ NEW: Handle external selectedUserId prop changes
  React.useEffect(() => {
    if (selectedUserId !== undefined) {
      setCurrentSelectedUserId(selectedUserId)
    }
  }, [selectedUserId])

  // Throttle bet refreshes to avoid constant DOM churn and network polling
  React.useEffect(() => {
    if (!getCurrentMatch?.matchId) return

    const pnlRefreshInterval = setInterval(() => {
      setRefreshStatus((prev: boolean) => !prev)
    }, 20000)

    return () => {
      clearInterval(pnlRefreshInterval)
    }
  }, [getCurrentMatch?.matchId])
  
  React.useEffect(() => {
    if (getCurrentMatch && getCurrentMatch.matchId) {
      const dataMatchId: any = getCurrentMatch && getCurrentMatch.matchId && location.pathname.includes('/odds') ? getCurrentMatch.matchId : (getCasinoCurrentMatch && getCasinoCurrentMatch.match_id ? getCasinoCurrentMatch.match_id : 0)
      
      // Only clear market book when match actually changes, not on every refresh
      if (prevMatchId.current !== dataMatchId && prevMatchId.current !== null) {
        dispatch(setBookMarketList({})) // Clear previous match data only when switching matches
        prevMatchId.current = dataMatchId
      } else if (prevMatchId.current === null) {
        prevMatchId.current = dataMatchId
      }
      
      betService
        .getBets(dataMatchId, currentSelectedUserId || undefined)
        .then((bets) => {
          if (bets && bets.data && bets.data.data) {
            // 🎯 ENHANCED: Better debugging for all bet types including bookmaker
            console.log('🎲 Current bets data:', bets.data.data.bets)
            const fancyBets = bets.data.data.bets.filter((bet: IBet) => {
              const betOnField = (bet as any).bet_on || bet.betOn
              return betOnField === 'FANCY'
            })
            const matchOddsBets = bets.data.data.bets.filter((bet: IBet) => {
              const betOnField = (bet as any).bet_on || bet.betOn
              return betOnField === 'MATCH_ODDS'
            })
            const bookmakerBets = bets.data.data.bets.filter((bet: IBet) => {
              // Handle both backend field naming (bet_on) and frontend field naming (betOn)
              const betOnField = (bet as any).bet_on || bet.betOn
              return (
                betOnField === 'BOOKMAKER' ||
                bet.gtype === 'match1' ||
                bet.oddsType === 'BM' ||
                bet.oddsType === 'bookMaker' ||
                (bet.marketName && bet.marketName.toLowerCase().includes('bookmaker'))
              )
            })
            const casinoBets = bets.data.data.bets.filter((bet: IBet) => {
              const betOnField = (bet as any).bet_on || bet.betOn
              return betOnField === 'CASINO'
            })
            
            console.log('📊 Bet type breakdown:', {
              fancy: fancyBets.length,
              matchOdds: matchOddsBets.length,
              bookmaker: bookmakerBets.length,
              casino: casinoBets.length,
              total: bets.data.data.bets.length
            })
            
            // 🎯 DEBUG: Log bookmaker bets specifically
            if (bookmakerBets.length > 0) {
              console.log('🏦 Bookmaker bets found:', bookmakerBets.map((bet: IBet) => ({
                marketId: bet.marketId,
                selectionId: bet.selectionId,
                marketName: bet.marketName,
                gtype: bet.gtype,
                betOn: bet.betOn,
                oddsType: bet.oddsType
              })))
            }
            
            // Set all bets including bookmaker bets
            setMyAllBet(bets.data.data.bets)
            dispatch(setbetlist(bets.data.data.bets))
            
            // 🎯 ENHANCED: Better profit list handling with debugging
            if (bets.data.data.odds_profit) {
              const profitKeys = Object.keys(bets.data.data.odds_profit)
              console.log('💰 Profit list received:', {
                totalKeys: profitKeys.length,
                keys: profitKeys.slice(0, 10), // Show first 10 keys
                sampleValues: profitKeys.slice(0, 5).map(key => ({
                  key,
                  value: bets.data.data.odds_profit[key]
                }))
              })
              
                          // 🎯 ENHANCED: Check for bookmaker market keys with better debugging
            const bookmakerKeys = profitKeys.filter((key: string) => {
              const bet = bets.data.data.bets.find((b: IBet) => 
                key.includes(b.marketId?.toString()) && key.includes(b.selectionId?.toString())
              )
              if (bet) {
                const betOnField = (bet as any).bet_on || bet.betOn
                return (
                  bet.gtype === 'match1' || 
                  bet.oddsType === 'BM' || 
                  bet.oddsType === 'bookMaker' ||
                  betOnField === 'BOOKMAKER'
                )
              }
              return false
            })
            
            // ✅ ENHANCED: Debug bookmaker bet and PnL key analysis  
            const matchOddsBets = bets.data.data.bets.filter((b: IBet) => {
              const betOnField = (b as any).bet_on || b.betOn
              return betOnField === 'MATCH_ODDS'
            })
            
            const bookmakerBets = bets.data.data.bets.filter((b: IBet) => {
              const betOnField = (b as any).bet_on || b.betOn
              return (
                b.gtype === 'match1' || 
                b.oddsType === 'BM' || 
                b.oddsType === 'bookMaker' ||
                betOnField === 'BOOKMAKER'
              )
            })
            
            // ✅ COMPARE: Data format analysis between match odds and bookmaker
            console.log('🔍 DATA FORMAT COMPARISON:')
            
            if (matchOddsBets.length > 0) {
              console.log('📊 MATCH ODDS Sample:', {
                count: matchOddsBets.length,
                sample: matchOddsBets[0],
                keys: Object.keys(matchOddsBets[0]),
                expectedPnLKey: `${matchOddsBets[0].marketId}_${matchOddsBets[0].selectionId}`
              })
            }
            
            if (bookmakerBets.length > 0) {
              console.log('🏦 BOOKMAKER Sample:', {
                count: bookmakerBets.length,
                sample: bookmakerBets[0],
                keys: Object.keys(bookmakerBets[0]),
                expectedPnLKey: `${bookmakerBets[0].marketId}_${bookmakerBets[0].selectionId}`
              })
            }
            
            const expectedBookmakerKeys = bookmakerBets.map((bet: IBet) => `${bet.marketId}_${bet.selectionId}`)
            const actualBookmakerKeys = expectedBookmakerKeys.filter((key: string) => 
              profitKeys.includes(key)
            )
            
            console.log('🏦 Bookmaker bet analysis:', {
              totalBets: bets.data.data.bets.length,
              bookmakerBets: bookmakerBets.length,
              totalProfitKeys: profitKeys.length,
              bookmakerProfitKeys: bookmakerKeys.length,
              expectedBookmakerKeys,
              actualBookmakerKeys,
              missingKeys: expectedBookmakerKeys.filter((key: string) => !profitKeys.includes(key)),
              sampleBookmakerBets: bookmakerBets.slice(0, 3).map((b: IBet) => ({
                marketId: b.marketId,
                selectionId: b.selectionId,
                gtype: b.gtype,
                betOn: (b as any).bet_on || b.betOn,
                oddsType: b.oddsType,
                expectedKey: `${b.marketId}_${b.selectionId}`,
                keyExists: profitKeys.includes(`${b.marketId}_${b.selectionId}`)
              }))
            })
            
            // ✅ ENHANCED: Analyze profit keys by market type
            const matchOddsKeys = profitKeys.filter((key: string) => {
              const matchOddsBet = matchOddsBets.find((bet: IBet) => 
                key.includes(bet.marketId?.toString()) && key.includes(bet.selectionId?.toString())
              )
              return !!matchOddsBet
            })
            
            console.log('💰 PROFIT KEYS ANALYSIS:', {
              totalProfitKeys: profitKeys.length,
              matchOddsKeys: matchOddsKeys.length,
              bookmakerKeys: bookmakerKeys.length,
              sampleMatchOddsKeys: matchOddsKeys.slice(0, 3),
              sampleBookmakerKeys: bookmakerKeys.slice(0, 3),
              allKeysPattern: profitKeys.slice(0, 10).map((key: string) => ({
                key,
                hasUnderscore: key.includes('_'),
                isNumeric: /^\d+$/.test(key),
                value: bets.data.data.odds_profit[key]
              }))
            })
            
            if (bookmakerKeys.length > 0) {
              console.log('🏦 Bookmaker PnL keys found:', bookmakerKeys.map((key: string) => ({
                key,
                value: bets.data.data.odds_profit[key]
              })))
            } else {
              console.log('⚠️ No bookmaker PnL keys found in profit data')
            }
            
            if (matchOddsKeys.length > 0) {
              console.log('📊 Match odds PnL keys found:', matchOddsKeys.map((key: string) => ({
                key,
                value: bets.data.data.odds_profit[key]
              })))
            }
              
              // ✅ ENHANCED: Debug what gets stored in Redux  
              console.log('💾 Storing PnL data in Redux:', {
                totalKeys: Object.keys(bets.data.data.odds_profit).length,
                bookmakerSpecificKeys: Object.keys(bets.data.data.odds_profit).filter(key => 
                  expectedBookmakerKeys.includes(key)
                ),
                sampleAllKeys: Object.keys(bets.data.data.odds_profit).slice(0, 10),
                bookmakerExpectedKeys: expectedBookmakerKeys
              })
              
              // Merge with existing profit data instead of replacing to ensure persistence
              dispatch(setBookMarketList(bets.data.data.odds_profit))
              console.log('✅ Market book updated with profit data')
            } else {
              console.log('⚠️ No odds_profit data in API response')
            }
            
            dispatch(setBetCount(bets.data.data.bets.length))
          }
        })
        .catch((e) => {
          console.log('❌ Error fetching bets:', e.message)
          // Don't clear profit data on error
        })
    }
  }, [getCurrentMatch, getCasinoCurrentMatch, betRefresh, currentSelectedUserId])

  React.useEffect(() => {
    if (getPlaceBet && getPlaceBet.bet && getPlaceBet.bet.marketId) {
      console.log('🎯 Bet placed successfully, refreshing PnL data in 1 second...', {
        marketId: getPlaceBet.bet.marketId,
        selectionId: getPlaceBet.bet.selectionId,
        gtype: getPlaceBet.bet.gtype,
        isBookmaker: getPlaceBet.bet.gtype === 'match1' || (getPlaceBet.bet as any).bet_on === 'BOOKMAKER'
      })
      
      // ✅ ENHANCED: Add slight delay for bookmaker bets to ensure backend calculation is complete
      const isBookmaker = getPlaceBet.bet.gtype === 'match1' || (getPlaceBet.bet as any).bet_on === 'BOOKMAKER'
      const delay = isBookmaker ? 1500 : 500 // 1.5s for bookmaker, 0.5s for others
      
      setTimeout(() => {
        console.log(`🔄 Triggering bet data refresh after ${delay}ms delay`)
        setRefreshStatus(betRefresh ? false : true)
      }, delay)
    }
  }, [getPlaceBet.bet])

  React.useEffect(() => {
    socketUser.on('placedBet', (bet: IBet) => {
      console.log('🔌 Socket: Bet placed event received', {
        marketId: bet.marketId,
        selectionId: bet.selectionId,
        gtype: bet.gtype,
        isBookmaker: bet.gtype === 'match1' || (bet as any).bet_on === 'BOOKMAKER'
      })
      
      // ✅ ENHANCED: Add delay for bookmaker bets via socket too
      const isBookmaker = bet.gtype === 'match1' || (bet as any).bet_on === 'BOOKMAKER'
      const delay = isBookmaker ? 1500 : 500
      
      setTimeout(() => {
        console.log(`🔄 Socket: Triggering bet refresh after ${delay}ms`)
        setRefreshStatus(betRefresh ? false : true)
      }, delay)
    })
    return () => {
      socketUser.off('placedBet')
    }
  }, [getMyAllBet])

  React.useEffect(() => {
    socketUser.on('betDelete', ({ betId }: { betId: string }) => {
      ///setMyAllBet(getMyAllBet.filter((bet: IBet) => bet._id !== betId))
      setRefreshStatus(betRefresh ? false : true)
      ///dispatch(setBookMarketList({}))
    })
    return () => {
      socketUser.off('betDelete')
    }
  }, [getMyAllBet])

  // ✅ ENHANCED: Listen for market result declarations to refresh PnL data
  React.useEffect(() => {
    console.log('🔌 Setting up marketResultDeclared socket listener')
    
    socketUser.on('marketResultDeclared', ({ marketId, matchId, selectionId, message }: { 
      marketId: string; 
      matchId: string; 
      selectionId: string; 
      message: string 
    }) => {
      console.log(`🎯 Market result declared via socket: ${message}`, {
        marketId, matchId, selectionId
      })
      // Refresh bet data to get updated PnL after result declaration
      setRefreshStatus(betRefresh ? false : true)
      // Clear existing market book data to force refresh
      dispatch(setBookMarketList({}))
    })
    
    // Also listen for general socket connection events
    socketUser.on('connect', () => {
      console.log('🔌 Socket connected - ready to receive result notifications')
    })
    
    socketUser.on('disconnect', () => {
      console.log('🔌 Socket disconnected - result notifications may not work')
    })
    
    return () => {
      socketUser.off('marketResultDeclared')
      socketUser.off('connect')
      socketUser.off('disconnect')
    }
  }, [])

  // ✅ NEW: Handle user selection change
  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = event.target.value
    setCurrentSelectedUserId(selectedUserId)
    if (onUserChange) {
      onUserChange(selectedUserId)
    }
  }

  // Debug dropdown visibility
  console.log('🎨 Dropdown visibility check:', {
    isAdmin: userState.user.role !== RoleType.user,
    bettingUsersCount: bettingUsers.length,
    bettingUsers: bettingUsers,
    shouldShowDropdown: userState.user.role !== RoleType.user && bettingUsers.length > 0
  })

  return (
    <div>
      {/* ✅ NEW: User dropdown for admin - TEMP: Always show for debugging */}
      {userState.user.role !== RoleType.user && (
        <div className="mb-3">
          <select 
            className="form-control form-control-sm"
            value={currentSelectedUserId}
            onChange={handleUserChange}
            style={{ fontSize: '12px' }}
          >
            <option value="">All Users Combined</option>
            {bettingUsers.length === 0 && (
              <option value="" disabled>Loading users...</option>
            )}
            {bettingUsers.map((user) => (
              <option key={user.userId} value={user.userId}>
                {user.userName} ({user.betCount} bets, ₹{user.totalStake})
              </option>
            ))}
          </select>
        </div>
      )}
      
      <div className='table-responsive-new' style={{height:"200px", overflowY:"scroll"}}>
        <table className='table coupon-table scorall mybet'>
        <thead>
          <tr>
            <th> No</th>
            {userState.user.role !== RoleType.user && !currentSelectedUserId && <th>Username</th>}
            <th className='text-left'> Runner / Odds</th>
            <th > Stake</th>
            <th> Rate</th>
            {!isMobile && <th> Place Date</th>}
            {!isMobile && <th> Match Date</th>}
            {userState.user.role !== RoleType.user && <th> IP</th>}
          </tr>
        </thead>
        <tbody className='scorall'>
          {getMyAllBet.map((bet: IBet, index: number) => (
            <tr className={bet.isBack ? 'back' : 'lay'} key={bet._id}>
              <td className='no-wrap'> {index + 1} </td>
              {userState.user.role !== RoleType.user && !currentSelectedUserId && <td>{bet.userName}</td>}
              <td className='no-wrap'>
                {' '}
                {bet.selectionName} /{' '}
                {bet.marketName === 'Fancy' && bet.gtype !== 'fancy1' ? bet.volume : bet.odds}{' '}
              </td>
              <td className='no-wrap'> {bet.stack} </td>
              <td className='no-wrap text-center' > {bet.odds} </td>
              {!isMobile && (
                <td className='no-wrap'> {moment(bet.betClickTime).format(betDateFormat)} </td>
              )}
              {!isMobile && (
                <td className='no-wrap'> {moment(bet.createdAt).format(betDateFormat)} </td>
              )}
              {userState.user.role !== RoleType.user && <td className='no-wrap'>{bet.userIp} </td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default MyBetComponent
