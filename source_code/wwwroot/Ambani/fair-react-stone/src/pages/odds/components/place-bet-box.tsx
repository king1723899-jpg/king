import React, { MouseEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {
  betPopup,
  selectBetCount,
  selectBetPopup,
  selectPlaceBet,
  setBetCount,
  setBookMarketList,
} from '../../../redux/actions/bet/betSlice'
import { IUserBetStake } from '../../../models/IUserStake'
import IBet, { IBetOn, IBetType } from '../../../models/IBet'
import { getPlaceBetAction } from '../../../redux/actions/bet/bet.action'
import { IApiStatus } from '../../../models/IApiStatus'
import { useWebsocketUser } from '../../../context/webSocketUser'
import { OddsType } from '../../../models/IMarket'
import userService from '../../../services/user.service'
import { setSingleBal, setExposer } from '../../../redux/actions/balance/balanceSlice'

const PlaceBetBox = ({ stake }: { stake: IUserBetStake }) => {
  const [betObj, setBetObj] = React.useState<IBet>({} as IBet)
  const betValues = useAppSelector(selectBetPopup)
  const getPlaceBet = useAppSelector(selectPlaceBet)
  const betCount = useAppSelector(selectBetCount)
  const { socketUser } = useWebsocketUser()

  const dispatch = useAppDispatch()

  // ✅ NEW: Check current odds before placing bet to detect changes
  const checkOddsBeforePlacing = async (finalBetObj: IBet) => {
    try {
      console.log('🔍 Fetching current odds to compare with clicked odds...', {
        clickedOdds: finalBetObj.odds,
        marketId: finalBetObj.marketId,
        selectionId: finalBetObj.selectionId,
        gtype: finalBetObj.gtype
      })

      // Fetch current odds from API
      let currentOddsResponse: any = null
      
      if (finalBetObj.gtype === 'fancy' || finalBetObj.betOn === 'FANCY') {
        // For fancy markets, get odds from fancy API
        const fancyResponse = await fetch(`${process.env.REACT_APP_API_BASEURL}sessions-data/fancy/${finalBetObj.marketId}/${finalBetObj.matchId}`)
        if (fancyResponse.ok) {
          currentOddsResponse = await fancyResponse.json()
        }
      } else {
        // For match odds and bookmaker, get odds from market API 
        const marketResponse = await fetch(`${process.env.REACT_APP_API_BASEURL}sessions-data/market/${finalBetObj.marketId}/${finalBetObj.matchId}`)
        if (marketResponse.ok) {
          currentOddsResponse = await marketResponse.json()
        }
      }

      if (!currentOddsResponse || currentOddsResponse.error) {
        console.warn('⚠️ Could not fetch current odds, proceeding with bet placement')
        dispatch(getPlaceBetAction(finalBetObj))
        return
      }

      // Find current odds for the selected runner
      let currentOdds: number | null = null
      const runners = currentOddsResponse.data?.runners || []
      
      for (const runner of runners) {
        if ((runner.selectionId === finalBetObj.selectionId || runner.id === finalBetObj.selectionId)) {
          if (finalBetObj.isBack) {
            currentOdds = parseFloat(runner.back?.[0]?.price || runner.backPrice1 || runner.back1 || 0)
          } else {
            currentOdds = parseFloat(runner.lay?.[0]?.price || runner.layPrice1 || runner.lay1 || 0)
          }
          break
        }
      }

      console.log('📊 Odds comparison:', {
        clickedOdds: finalBetObj.odds,
        currentOdds: currentOdds,
        difference: currentOdds ? Math.abs(finalBetObj.odds - currentOdds) : 'N/A'
      })

      // Check if odds have changed significantly (more than 0.01 difference)
      if (currentOdds && Math.abs(finalBetObj.odds - currentOdds) > 0.01) {
        const confirmMessage = `⚠️ Odds have changed!\n\nYou clicked: ${finalBetObj.odds}\nCurrent odds: ${currentOdds}\n\nDo you want to place the bet at current odds?`
        
        if (window.confirm(confirmMessage)) {
          // User accepts current odds, update bet object and place bet
          finalBetObj.odds = currentOdds
          console.log('✅ User accepted new odds, placing bet with updated odds:', currentOdds)
          dispatch(getPlaceBetAction(finalBetObj))
        } else {
          console.log('❌ User rejected odds change, bet cancelled')
          alert('Bet cancelled due to odds change')
        }
      } else {
        // Odds haven't changed significantly, proceed with bet
        console.log('✅ Odds unchanged, proceeding with bet placement')
        dispatch(getPlaceBetAction(finalBetObj))
      }

    } catch (error) {
      console.error('❌ Error checking odds:', error)
      // If odds check fails, proceed with original bet (don't block user)
      console.log('⚠️ Odds check failed, proceeding with original bet')
      dispatch(getPlaceBetAction(finalBetObj))
    }
  }

  React.useEffect(() => {
    setBetObj({
      ...betValues.betData,
      odds:
        typeof betValues.betData.odds === 'string'
          ? parseFloat(betValues.betData.odds)
          : betValues.betData.odds,
    })
  }, [betValues.betData])

  React.useEffect(() => {
    if (getPlaceBet.status === IApiStatus.Done) {
      socketUser.emit('place-bet', getPlaceBet.bet)
      
      // Calculate and persist PnL data for the placed bet
      const placedBet = getPlaceBet.bet
      if (placedBet && placedBet.marketId && placedBet.selectionId) {
        const pnlData = calculatePersistentPnl(placedBet)
        
        // ✅ ENHANCED: Better debugging for bookmaker PnL persistence
        const isBookmakerBet = placedBet.gtype === 'match1' || placedBet.betOn === 'BOOKMAKER' || placedBet.oddsType === 'BM'
        console.log('🎯 Bet placed successfully - Details:', {
          isBookmakerBet,
          gtype: placedBet.gtype,
          betOn: placedBet.betOn,
          oddsType: placedBet.oddsType,
          marketName: placedBet.marketName,
          marketId: placedBet.marketId,
          selectionId: placedBet.selectionId,
          pnlData,
          marketKey: Object.keys(pnlData)[0],
          pnlValue: Object.values(pnlData)[0]
        })
        
        // Update market book with persistent PnL data
        dispatch(setBookMarketList(pnlData))
        console.log('✅ PnL data persisted to Redux store')
      }
            // 🔄 CRITICAL FIX: Immediately refresh user balance and exposure after successful bet placement
            console.log('🔄 Refreshing user balance after bet placement...')
            userService.getUserBalance()
              .then((response) => {
                if (response.data && response.data.data) {
                  dispatch(setSingleBal(response.data.data.balance))
                  dispatch(setExposer(response.data.data.exposer + (response.data.data.casinoexposer || 0)))
                  console.log('✅ User balance and exposure updated:', {
                    balance: response.data.data.balance,
                    exposer: response.data.data.exposer,
                    casinoexposer: response.data.data.casinoexposer,
                    totalExposer: response.data.data.exposer + (response.data.data.casinoexposer || 0)
                  })
                }
              })
              .catch((error) => {
                console.error('❌ Error refreshing user balance after bet placement:', error)
              })
      // Clear the bet popup after successful placement
      dispatch(betPopup({ isOpen: false, betData: {} as IBet }))
      dispatch(setBetCount(betCount + 1))
    }
  }, [getPlaceBet.status])

  // ROBUST: Helper function to determine calculation type based on gtype and market properties
  const getCalculationType = (betValue: IBet) => {
    console.log(`🔍 Determining calculation type for:`, {
      gtype: betValue.gtype,
      betOn: betValue.betOn,
      oddsType: betValue.oddsType,
      marketName: betValue.marketName
    })
    
    // Priority 1: Check gtype (most reliable)
    if (betValue.gtype === 'match1') {
      console.log(`✅ Using BOOKMAKER based on gtype: match1`)
      return 'BOOKMAKER'
    } else if (betValue.gtype === 'match') {
      console.log(`✅ Using MATCH_ODDS based on gtype: match`)
      return 'MATCH_ODDS'
    } else if (betValue.gtype === 'fancy') {
      console.log(`✅ Using FANCY based on gtype: fancy`)
      return 'FANCY'
    }
    
    // Priority 2: Fallback to betOn and oddsType for legacy compatibility
    if (betValue.betOn === IBetOn.FANCY) {
      console.log(`✅ Using FANCY based on betOn: FANCY`)
      return 'FANCY'
    } else if (betValue.betOn === IBetOn.BOOKMAKER) {
      console.log(`✅ Using BOOKMAKER based on betOn: BOOKMAKER`)
      return 'BOOKMAKER'
    } else if (betValue.oddsType === 'bookMaker' || betValue.oddsType === 'BM') {
      console.log(`✅ Using BOOKMAKER based on oddsType: ${betValue.oddsType}`)
      return 'BOOKMAKER'
    } else if (betValue.betOn === IBetOn.MATCH_ODDS || betValue.betOn === IBetOn.CASINO) {
      console.log(`✅ Using MATCH_ODDS based on betOn: ${betValue.betOn}`)
      return 'MATCH_ODDS'
    }

    // Priority 3: Default based on market name patterns
    const marketName = betValue.marketName?.toUpperCase() || ''
    if (marketName.includes('BOOKMAKER') || marketName.includes('BM_')) {
      console.log(`✅ Using BOOKMAKER based on market name: ${betValue.marketName}`)
      return 'BOOKMAKER'
    } else if (marketName.includes('FANCY') || marketName.includes('SESSION')) {
      console.log(`✅ Using FANCY based on market name: ${betValue.marketName}`)
      return 'FANCY'
    }

    // Default: Match odds logic for most markets (OVER_UNDER, MATCH_ODDS, etc.)
    console.log(`✅ Using MATCH_ODDS as default for market: ${betValue.marketName}`)
    return 'MATCH_ODDS'
  }

  // ROBUST: Calculate PnL and exposure based on market type
  const calculatePnlAndExposureByType = (calculationType: string, betValue: IBet) => {
    let pnl = 0
    let exposure = 0

    console.log(`🔄 Calculating PnL and exposure for ${calculationType} market`, {
      calculationType,
      isBack: betValue.isBack,
      odds: betValue.odds,
      stack: betValue.stack,
      volume: betValue.volume
    })

    switch (calculationType) {
      case 'BOOKMAKER':
        // Bookmaker logic: Odds are in percentage format (divide by 100)
        if (betValue.isBack) {
          // Back bet: profit = (odds / 100) × stake, exposure = stake
          pnl = (betValue.odds / 100) * betValue.stack
          exposure = -1 * betValue.stack
        } else {
          // Lay bet: profit = stake, liability = (odds / 100) × stake  
          pnl = betValue.stack
          exposure = -1 * ((betValue.odds / 100) * betValue.stack)
        }
        break

      case 'FANCY':
        // Fancy odds calculation (volume-based)
        if (betValue.isBack) {
          // Back bet: profit = (volume × stake) / 100, exposure = stake
          pnl = (betValue.volume * betValue.stack) / 100
          exposure = -betValue.stack
        } else {
          // Lay bet: liability = (volume × stake) / 100, profit = stake
          exposure = -((betValue.volume * betValue.stack) / 100)
          pnl = betValue.stack
        }
        break

      case 'MATCH_ODDS':
      default:
        // Match odds logic: Standard decimal odds calculation (exchange style)
        if (betValue.isBack) {
          // Back bet: profit = (odds - 1) × stake, exposure = stake
          pnl = (betValue.odds - 1) * betValue.stack
          exposure = -1 * betValue.stack
        } else {
          // Lay bet: profit = stake, liability = (odds - 1) × stake
          pnl = betValue.stack
          exposure = -1 * ((betValue.odds - 1) * betValue.stack)
        }
        break
    }

    console.log(`✅ PnL and exposure calculated for ${calculationType}:`, { pnl, exposure })
    return { pnl: parseInt(pnl.toFixed()), exposure: parseInt(exposure.toFixed()) }
  }

  // Calculate persistent PnL data after bet placement - ROBUST: Use dynamic gtype logic
  const calculatePersistentPnl = (placedBet: IBet): Record<string, number> => {
    const marketKey = `${placedBet.marketId}_${placedBet.selectionId}`
    let pnlValue = 0

    console.log(`🔄 Calculating persistent PnL for market:`, {
      marketKey,
      gtype: placedBet.gtype,
      marketName: placedBet.marketName,
      oddsType: placedBet.oddsType,
      betOn: placedBet.betOn,
      isBack: placedBet.isBack,
      odds: placedBet.odds,
      stack: placedBet.stack
    })

    const calculationType = getCalculationType(placedBet)
    console.log(`🎯 Using calculation type: ${calculationType} for market ${placedBet.marketName}`)
    
    switch (calculationType) {
      case 'BOOKMAKER':
        // ✅ ENHANCED: Bookmaker PnL with better debugging
        if (placedBet.isBack) {
          pnlValue = (placedBet.odds / 100) * placedBet.stack
          console.log(`📊 Bookmaker back PnL: (${placedBet.odds}/100) × ${placedBet.stack} = ${pnlValue}`)
        } else {
          pnlValue = -((placedBet.odds / 100) * placedBet.stack)
          console.log(`📊 Bookmaker lay PnL: -((${placedBet.odds}/100) × ${placedBet.stack}) = ${pnlValue}`)
        }
        break

      case 'FANCY':
        // Fancy calculation (match backend)
        if (placedBet.isBack) {
          pnlValue = (placedBet.volume * placedBet.stack) / 100
          console.log(`📊 Fancy back PnL: (${placedBet.volume} × ${placedBet.stack})/100 = ${pnlValue}`)
        } else {
          pnlValue = -((placedBet.volume * placedBet.stack) / 100)
          console.log(`📊 Fancy lay PnL: -((${placedBet.volume} × ${placedBet.stack})/100) = ${pnlValue}`)
        }
        break

      case 'MATCH_ODDS':
      default:
        // ✅ ENHANCED: Match odds PnL with better debugging
        if (placedBet.isBack) {
          pnlValue = (placedBet.odds - 1) * placedBet.stack
          console.log(`📊 Match odds back PnL: (${placedBet.odds}-1) × ${placedBet.stack} = ${pnlValue}`)
        } else {
          pnlValue = -((placedBet.odds - 1) * placedBet.stack)
          console.log(`📊 Match odds lay PnL: -((${placedBet.odds}-1) × ${placedBet.stack}) = ${pnlValue}`)
        }
        break
    }

    console.log(`✅ Persistent PnL calculated for ${calculationType}: ${pnlValue}`, { marketKey, pnlValue })
    return { [marketKey]: pnlValue }
  }

  const reset = () => {
    setBetObj({ ...betObj, stack: 0, pnl: 0 })
    dispatch(betPopup({ ...betValues, betData: { ...betValues.betData, stack: 0, pnl: 0 } }))
  }

  const onStack = (stack: number) => {
    const betObjItem = { ...betObj }
    betObjItem.stack = betObjItem.stack + stack
    const calPnl = calculatePnlF(betObjItem)

    betObjItem.pnl = calPnl.pnl
    betObjItem.exposure = calPnl.exposure
    setBetObj(betObjItem)
    dispatch(betPopup({ ...betValues, betData: { ...betObjItem } }))
  }

  const incrementDecrementOdds = (type = 'inc') => {
    const betObjItem = { ...betObj }

    if (betObjItem.oddsType === OddsType.BM || betObjItem.oddsType === OddsType.F) {
      return true
    }
    switch (type) {
      case 'inc':
        betObjItem.odds = parseFloat((betObjItem.odds + 0.01).toFixed(4))
        break
      case 'dec':
        betObjItem.odds = parseFloat((betObjItem.odds - 0.01).toFixed(4))
        break
    }
    const calPnl = calculatePnlF(betObjItem)
    betObjItem.pnl = calPnl.pnl
    betObjItem.exposure = calPnl.exposure
    betObjItem.type =
      betObjItem.odds !== betObjItem.currentMarketOdds ? IBetType.UnMatch : IBetType.Match
    dispatch(betPopup({ ...betValues, betData: { ...betObjItem } }))

    setBetObj(betObjItem)
  }

  const calculatePnlF = (betValue: IBet) => {
    if (Object.keys(betValue).length === 0) {
      return { pnl: 0, exposure: 0 }
    }

    const calculationType = getCalculationType(betValue)
    console.log(`🎯 Calculating PnL for ${calculationType} - gtype: ${betValue.gtype}`)

    // Handle special casino conditions
    if (betValue.betOn == IBetOn.CASINO) {
      if (betValue.matchId == 33) {
        //// specific condition for cmeter game
        return { pnl: 0, exposure: -50 * betValue.stack * 1.0 }
      } else if (betValue.matchId == 9) {
        //// specific condition for tp1day game
        if (betValue.isBack) {
          return { 
            pnl: parseInt((betValue.odds * betValue.stack).toFixed()), 
            exposure: parseInt((-betValue.stack).toFixed())
          }
        } else {
          return { 
            pnl: parseInt(betValue.stack.toFixed()), 
            exposure: parseInt((-1 * (betValue.odds * betValue.stack - betValue.stack)).toFixed())
          }
        }
      } else if (betValue.fancystatus == 'yes') {
        //// specific condition for casino fancy
        if (betValue.isBack) {
          return { 
            pnl: parseInt(((betValue.volume * betValue.stack) / 100).toFixed()), 
            exposure: parseInt((-betValue.stack).toFixed())
          }
        } else {
          return { 
            pnl: parseInt(betValue.stack.toFixed()), 
            exposure: parseInt((-((betValue.volume * betValue.stack) / 100)).toFixed())
          }
        }
      } else {
        // Default casino logic (match odds)
        return calculatePnlAndExposureByType('MATCH_ODDS', betValue)
      }
    }

    // Use robust calculation for all other markets
    return calculatePnlAndExposureByType(calculationType, betValue)
  }

  const onChangeStack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBetObj({ ...betObj, stack: parseInt(e.target.value) })
  }

  const onBlurStack = () => {
    onStack(0)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // ENHANCED VALIDATION: Check market type and status
    console.log('🎯 Bet submission validation starting...', {
      gtype: betObj.gtype,
      oddsType: betObj.oddsType,
      suspended: betObj.suspended,
      betLocked: betObj.betLocked,
      odds: betObj.odds
    })
    
    // Check if betting is locked for this market type
    if (betObj.betLocked) {
      alert('Betting is currently locked for this market by the administrator.');
      return;
    }
    
    // CRITICAL: Check if market is suspended due to bet lock or market status
    if (betObj.suspended) {
      alert('This market is currently suspended. Betting not allowed.');
      return;
    }
    
    // Enhanced validation for different market types
    const isBookmaker = betObj.oddsType === 'BM' || betObj.gtype === 'match1'
    const isFancy = betObj.gtype && ['fancy', 'meter', 'ballrun', 'overballno', 'session'].includes(betObj.gtype.toLowerCase())
    
    // Validate odds format based on market type
    if (isBookmaker) {
      // Bookmaker: use odds as-is from API (already in correct format)
      if (betObj.odds < 1 || betObj.odds > 10000) {
        alert('Bookmaker odds must be between 1 and 10000.');
        return;
      }
      console.log(`📊 Bookmaker bet - using odds as-is: ${betObj.odds}`)
      
    } else if (isFancy) {
      // Fancy markets: validate odds range
      if (betObj.odds < 0.01 || betObj.odds > 1000) {
        alert('Fancy odds must be between 0.01 and 1000.');
        return;
      }
      console.log(`🎯 Fancy bet - odds validated: ${betObj.odds}`)
      
    } else {
      // Match odds: validate decimal range
      if (betObj.odds < 1.01 || betObj.odds > 1000) {
        alert('Match odds must be between 1.01 and 1000.');
        return;
      }
      console.log(`⚽ Match odds bet - odds validated: ${betObj.odds}`)
    }
    
    // Additional validation: ensure minimum stake
    if (!betObj.stack || betObj.stack <= 0) {
      alert('Please enter a valid stake amount.');
      return;
    }
    
    // 🎯 CRITICAL FIX: Set correct betOn value based on market type before submission
    const finalBetObj = { ...betObj }
    if (isBookmaker) {
      finalBetObj.betOn = IBetOn.BOOKMAKER
      console.log(`🎯 Set betOn to 'BOOKMAKER' for bookmaker market`)
    } else if (isFancy) {
      finalBetObj.betOn = IBetOn.FANCY
      console.log(`🎯 Set betOn to 'FANCY' for fancy market`)
    } else {
      finalBetObj.betOn = IBetOn.MATCH_ODDS
      console.log(`🎯 Set betOn to 'MATCH_ODDS' for match odds market`)
    }
    
    // ✅ NEW: Check if odds have changed since user clicked
    console.log('🔍 Checking if odds have changed since click...')
    await checkOddsBeforePlacing(finalBetObj)
  }

  const renderStakeButtons = () => {
    const buttons = []
    for (let i = 1; i <= 10; i++) {
      const nameKey = `name${i}` as keyof IUserBetStake
      const valueKey = `value${i}` as keyof IUserBetStake
      if (stake && stake[nameKey] && stake[valueKey]) {
        buttons.push(
          <button
            key={i}
            type='button'
            onClick={() => onStack(stake[valueKey] as number)}
          className='btn  m-l-5 m-b-5'
          >
             <span className='' style={{color:"green"}}>+</span>
            {stake[nameKey]}
          </button>,
        )
      }
    }
    return buttons
  }

  const closeBetPopup = () => {
    dispatch(
      betPopup({
        ...betValues,
        isOpen: false,
        betData: { ...betValues.betData, stack: 0, pnl: 0 },
      }),
    )
  }
  const onBackDrop = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(
      betPopup({
        ...betValues,
        isOpen: false,
        betData: { ...betValues.betData, stack: 0, pnl: 0 },
      }),
    )
  }

  return (
    <>
      {betValues.isOpen && (
        <>
          <div onClick={onBackDrop} className='backdrop-custom'></div>

          <div className='card m-b-10 place-bet'>
            <div className='card-header'>
              <h6 className='card-title d-inline-block col-10'>Place Bet</h6>
              <span className='card-title d-inline-block col-2' onClick={closeBetPopup}>
                X
              </span>
            </div>
            <div className={`table-responsive ${betObj.isBack ? 'back' : 'lay'}`}>
              <form onSubmit={onSubmit}>
                <table className='coupon-table table table-borderedless'>
                  <thead>
                    <tr>
                      <th style={{ width: '35%', textAlign: 'left' }}>(Bet for)</th>
                      <th style={{ width: '25%', textAlign: 'left' }}>Odds</th>
                      <th style={{ width: '15%', textAlign: 'left' }}>Stake</th>
                      <th style={{ width: '15%', textAlign: 'right' }}>Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-center'>
                        <a onClick={closeBetPopup} className='text-danger'>
                          <i className='fa fa-times' />
                        </a>
                        {betObj.selectionName}
                      </td>
                      <td className='bet-odds'>
                        <div className='form-group'>
                          <input
                            value={parseFloat(betObj?.odds?.toFixed(4)) || ''}
                            type='text'
                            required
                            maxLength={4}
                            readOnly
                            className='amountint'
                            style={{ width: 60, verticalAlign: 'middle' }}
                            onChange={() => {}}
                          />
                          <div className='spinner-buttons input-group-btn btn-group-vertical'>
                            <button
                              type='button'
                              className='custom-btn-spinner btn btn-xs btn-default'
                              onClick={() => incrementDecrementOdds('inc')}
                            >
                              <i className='fa fa-angle-up' />
                            </button>
                            <button
                              type='button'
                              className='custom-btn-spinner btn btn-xs btn-default'
                              onClick={() => incrementDecrementOdds('dec')}
                            >
                              <i className='fa fa-angle-down' />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className='bet-stakes'>
                        <div className='form-group bet-stake'>
                          <input
                            maxLength={10}
                            required
                            type='number'
                            value={betObj.stack || ''}
                            onBlur={onBlurStack}
                            onChange={onChangeStack}
                          />
                        </div>
                      </td>
                      <td className='text-right bet-profit'>{betValues.betData.pnl}</td>
                    </tr>
                    <tr>
                      <td colSpan={5} className='value-buttons' style={{ padding: 5 }}>
                        {renderStakeButtons()}
                      </td>
                    </tr>
                  </tbody>
                </table>
                  <div className=' bet-button-main'>
                  <button
                    onClick={reset}
                    type='button'
                    // style={{borderRadius:"0px"}}
                     style={{borderRadius:"0px"}}
                    className='btn  btn-danger w-100 rounded-none'
                  >
                    Reset
                  </button>
                  <button
                    type='submit'
                    // style={{borderRadius:"0px"}}

                    disabled={getPlaceBet.status === IApiStatus.Loading || betObj.betLocked}
                    className={`btn w-100  ${betObj.betLocked ? 'btn-secondary ' : 'btn-success'} float-right `}
                    title={betObj.betLocked ? 'Betting is locked by administrator' : 'Place bet'}
                    style={{borderRadius:"0px"}}
                  >
                    {betObj.betLocked ? 'Locked' : 'Submit'}
                    {getPlaceBet.status === IApiStatus.Loading ? (
                      <i className='mx-5 fas fa-spinner fa-spin'></i>
                    ) : betObj.betLocked ? (
                      <i className='mx-5 fas fa-lock'></i>
                    ) : (
                      ''
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default PlaceBetBox
