
import React, { useMemo } from 'react'
import { selectBetPopup, selectMarketBook } from '../../../redux/actions/bet/betSlice'
import { useAppSelector } from '../../../redux/hooks'
import { IBetOn } from '../../../models/IBet'

// ROBUST: Helper function to determine calculation type based on gtype and market properties
const getCalculationType = (betValue: any) => {
  console.log(`🔍 PnL Calculate - Determining calculation type:`, {
    gtype: betValue.gtype,
    betOn: betValue.betOn,
    oddsType: betValue.oddsType,
    marketName: betValue.marketName
  })
  
  // Priority 1: Check gtype (most reliable)
  if (betValue.gtype === 'match1') {
    console.log(`✅ PnL Calculate - Using BOOKMAKER based on gtype: match1`)
    return 'BOOKMAKER'
  } else if (betValue.gtype === 'match') {
    console.log(`✅ PnL Calculate - Using MATCH_ODDS based on gtype: match`)
    return 'MATCH_ODDS'
  } else if (betValue.gtype === 'fancy') {
    console.log(`✅ PnL Calculate - Using FANCY based on gtype: fancy`)
    return 'FANCY'
  }
  
  // Priority 2: Fallback to betOn and oddsType for legacy compatibility
  if (betValue.betOn === IBetOn.FANCY) {
    console.log(`✅ PnL Calculate - Using FANCY based on betOn: FANCY`)
    return 'FANCY'
  } else if (betValue.betOn === IBetOn.BOOKMAKER) {
    console.log(`✅ PnL Calculate - Using BOOKMAKER based on betOn: BOOKMAKER`)
    return 'BOOKMAKER'
  } else if (betValue.oddsType === 'bookMaker' || betValue.oddsType === 'BM') {
    console.log(`✅ PnL Calculate - Using BOOKMAKER based on oddsType: ${betValue.oddsType}`)
    return 'BOOKMAKER'
  } else if (betValue.betOn === IBetOn.MATCH_ODDS || betValue.betOn === IBetOn.CASINO) {
    console.log(`✅ PnL Calculate - Using MATCH_ODDS based on betOn: ${betValue.betOn}`)
    return 'MATCH_ODDS'
  }

  // Priority 3: Default based on market name patterns
  const marketName = betValue.marketName?.toUpperCase() || ''
  if (marketName.includes('BOOKMAKER') || marketName.includes('BM_')) {
    console.log(`✅ PnL Calculate - Using BOOKMAKER based on market name: ${betValue.marketName}`)
    return 'BOOKMAKER'
  } else if (marketName.includes('FANCY') || marketName.includes('SESSION')) {
    console.log(`✅ PnL Calculate - Using FANCY based on market name: ${betValue.marketName}`)
    return 'FANCY'
  }

  // Default: Match odds logic for most markets (OVER_UNDER, MATCH_ODDS, etc.)
  console.log(`✅ PnL Calculate - Using MATCH_ODDS as default for market: ${betValue.marketName}`)
  return 'MATCH_ODDS'
}

// ROBUST: Calculate PnL based on market type
const calculatePnlByType = (calculationType: string, betValue: any, isOpposite: boolean = false) => {
  let pnl = 0
  let colorVal = ''

  console.log(`🔄 Calculating PnL for ${calculationType} market`, {
    calculationType,
    isBack: betValue.isBack,
    odds: betValue.odds,
    stake: betValue.stack,
    volume: betValue.volume,
    isOpposite,
    gtype: betValue.gtype,
    oddsType: betValue.oddsType,
    marketName: betValue.marketName
  })

  switch (calculationType) {
    case 'BOOKMAKER':
      // ✅ ENHANCED: Bookmaker logic with better debugging
      if (isOpposite) {
        if (betValue.isBack) {
          pnl = -1 * betValue.stack  // Lose stake if opposite selection wins
          colorVal = 'red'
          console.log(`📊 Bookmaker opposite back: lose stake -${betValue.stack}`)
        } else {
          pnl = betValue.stack  // Keep stake if opposite selection wins  
          colorVal = 'green'
          console.log(`📊 Bookmaker opposite lay: keep stake +${betValue.stack}`)
        }
      } else {
        if (betValue.isBack) {
          // ✅ FIX: Back bet profit = (odds / 100) × stake (match backend exactly)
          pnl = (betValue.odds / 100) * betValue.stack
          colorVal = pnl > 0 ? 'green' : 'red'
          console.log(`📊 Bookmaker back profit: (${betValue.odds}/100) × ${betValue.stack} = ${pnl}`)
        } else {
          // ✅ FIX: Lay bet liability = (odds / 100) × stake (negative)
          pnl = -1 * ((betValue.odds / 100) * betValue.stack)
          colorVal = 'red'
          console.log(`📊 Bookmaker lay liability: -((${betValue.odds}/100) × ${betValue.stack}) = ${pnl}`)
        }
      }
      break

    case 'FANCY':
      // Fancy odds calculation (volume-based)
      if (isOpposite) {
        if (betValue.isBack) {
          pnl = -betValue.stack  // Lose stake if opposite selection wins
          colorVal = 'red'
        } else {
          pnl = betValue.stack  // Keep stake if opposite selection wins
          colorVal = 'green'
        }
      } else {
        if (betValue.isBack) {
          // Back bet: profit = (volume × stake) / 100, exposure = stake
          pnl = (betValue.volume * betValue.stack) / 100
          colorVal = pnl > 0 ? 'green' : 'red'
        } else {
          // Lay bet: liability = (volume × stake) / 100
          pnl = -((betValue.volume * betValue.stack) / 100)
          colorVal = 'red'
        }
      }
      break

    case 'MATCH_ODDS':
    default:
      // Match odds logic: Standard decimal odds calculation (exchange style)
      if (isOpposite) {
        if (betValue.isBack) {
          pnl = -betValue.stack  // Lose stake if opposite selection wins
          colorVal = 'red'
        } else {
          pnl = betValue.stack  // Keep stake if opposite selection wins
          colorVal = 'green'
        }
      } else {
        if (betValue.isBack) {
          // Back bet: profit = (odds - 1) × stake (match backend exactly)
          pnl = (betValue.odds - 1) * betValue.stack
          colorVal = pnl > 0 ? 'green' : 'red'
          console.log(`📊 Match odds back profit: (${betValue.odds}-1) × ${betValue.stack} = ${pnl}`)
        } else {
          // Lay bet: liability = (odds - 1) × stake
          pnl = -1 * ((betValue.odds - 1) * betValue.stack)
          colorVal = 'red'
          console.log(`📊 Match odds lay liability: -((${betValue.odds}-1) × ${betValue.stack}) = ${pnl}`)
        }
      }
      break
  }

  console.log(`✅ Final PnL calculation: ${pnl} (${colorVal})`)
  return { pnl, colorVal }
}

const PnlCalculate = ({
  selectionId,
  marketId,
  pnlValue,

}: {
  selectionId: number | string
  marketId: string
  pnlValue?: number
}) => {
  const betValues = useAppSelector(selectBetPopup)
  const marketBook = useAppSelector(selectMarketBook) as Record<string, number>
  
  // Console log PNL values with descriptive names
  console.log('🔍 PnlCalculate Props:', {
    value1: pnlValue,

  })
 
  
  // 🎯 ENHANCED: Force re-render every 2 seconds for dynamic updates
  const [, setForceUpdate] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setForceUpdate(prev => prev + 1)
    }, 2000) // Force update every 2 seconds
    
    return () => clearInterval(interval)
  }, [])
  
  const pnl = useMemo(() => {
    const betValue = betValues.betData
    let current = 0,
      oppsite = 0,
      colorVal = ''
    
    // ✅ ENHANCED: Better debugging for bookmaker markets
    console.log(`🎯 PnL Calculate - Selection ${selectionId}, Market ${marketId}`, {
      hasActiveBet: Object.keys(betValue).length > 0,
      activeBetMarketId: betValue.marketId,
      activeBetSelectionId: betValue.selectionId,
      gtype: betValue.gtype,
      oddsType: betValue.oddsType,
      marketName: betValue.marketName,
      isMarketMatch: marketId === betValue.marketId,
      marketBookSize: Object.keys(marketBook).length,
      timestamp: new Date().toISOString()
    })
    
    // Check if there's an active bet being placed for this market
    const hasActiveBet = Object.keys(betValue).length > 0 && marketId === betValue.marketId
    
    if (hasActiveBet) {
      // ✅ ENHANCED: More detailed logging for active bet calculation
      const calculationType = getCalculationType(betValue)
      console.log(`🔄 Active bet PnL calculation:`, {
        calculationType,
        selectionId,
        betSelectionId: betValue.selectionId,
        isCurrentSelection: selectionId === betValue.selectionId
      })
      
      if (selectionId === betValue.selectionId) {
        // Current selection calculation
        const result = calculatePnlByType(calculationType, betValue, false)
        current = result.pnl
        colorVal = result.colorVal
        console.log(`✅ Current selection PnL: ${current} (${colorVal})`)
      } else {
        // Opposite selection calculation
        const result = calculatePnlByType(calculationType, betValue, true)
        oppsite = result.pnl
        colorVal = result.colorVal
        console.log(`✅ Opposite selection PnL: ${oppsite} (${colorVal})`)
      }
    } else {
      // ✅ ENHANCED: Better debugging for persistent PnL from market book
      const marketKey = `${marketId}_${selectionId}`
      const persistentPnl = marketBook[marketKey]
      
      console.log(`📊 Checking persistent PnL:`, {
        marketKey,
        persistentPnl,
        marketBookKeys: Object.keys(marketBook).slice(0, 10),
        marketBookSize: Object.keys(marketBook).length
      })
      
      if (persistentPnl !== undefined && persistentPnl !== null) {
        current = persistentPnl
        colorVal = current > 0 ? 'green' : current < 0 ? 'red' : 'black'
        console.log(`✅ Using persistent PnL for ${marketKey}: ${current} (${colorVal})`)
      } else {
        console.log(`⚠️ No persistent PnL found for ${marketKey}`)
        
        // ✅ DEBUG: Show what keys ARE available for this market
        const marketKeys = Object.keys(marketBook).filter(key => key.startsWith(`${marketId}_`))
        if (marketKeys.length > 0) {
          console.log(`🔍 Available keys for market ${marketId}:`, marketKeys)
        } else {
          console.log(`❌ No PnL data available for market ${marketId}`)
          
          // ✅ FALLBACK: Check if this might be a bookmaker market that needs time to load
          // Force a refresh of bet data for bookmaker markets if no PnL found
          console.log(`🔄 Checking if this is a bookmaker market requiring data refresh...`)
        }
      }
    }
    
    const result = { current: current.toFixed(), oppsite: oppsite.toFixed(), colorVal }
    console.log(`🎯 Final PnL result for ${marketId}_${selectionId}:`, result)
    
    return result
  }, [betValues, selectionId, marketId, marketBook])

  // Show PnL only when odds are clicked (active bet exists)
  const hasActiveBet = Object.keys(betValues.betData).length > 0 && marketId === betValues.betData.marketId
  const marketKey = `${marketId}_${selectionId}`
  
  // Only show PnL when there's an active bet (odds clicked)
  if (!hasActiveBet) return null
  
/////////////////////////////////////////////color display changes /////////////////////////////////
  // Calculate final values for display
  const finalCurrentValue = hasActiveBet && betValues.betData.selectionId === selectionId
    ? Number(pnl.current) + Number(pnlValue || 0)
    : Number(pnl.current) + Number(pnlValue || 0)
  
  const finalOppositeValue = hasActiveBet && betValues.betData.selectionId !== selectionId
    ? Number(pnl.oppsite) + Number(pnlValue || 0)
    : 0

  // Determine which value to display and its color
  let displayValue = 0
  let displayColor = 'black'

  if (hasActiveBet) {
    if (betValues.betData.selectionId === selectionId) {
      displayValue = finalCurrentValue
    } else {
      displayValue = finalOppositeValue
    }
  } else {
    displayValue = finalCurrentValue
  }

  // Check if final value equals pnlValue (no change)
  const isNoChange = Math.abs(displayValue - Number(pnlValue || 0)) < 0.01

  // If no change, don't show anything
  if (isNoChange) {
    return null
  }

  // Set color based on final value: green for >= 0, red for negative
  if (displayValue > 0) {
    displayColor = 'green'
  } else if (displayValue < 0) {
    displayColor = 'red'
  } else {
    displayColor = 'black'
  }

  return (
    <span
      className='float-right'
      style={{
        color: displayColor,
      }}
    >
      {displayValue}
    </span>
  )
}
/////////////////////////////////////////////color display changes /////////////////////////////////

export default PnlCalculate



