import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { betPopup, selectBetListUser } from '../redux/actions/bet/betSlice';
import { calculateCashout, RunnerOdds } from '../utils/cashout-calculator';
import IBet, { IBetType, IBetOn } from '../models/IBet';
import IMarket from '../models/IMarket';
import { selectCurrentMatch } from '../redux/actions/sports/sportSlice';

interface CashoutButtonProps {
  market: IMarket;
  oddsData: any;
  matchId: string | number;
}

const CashoutButton: React.FC<CashoutButtonProps> = ({ market, oddsData, matchId }) => {
  const dispatch = useAppDispatch();
  const userBets = useAppSelector(selectBetListUser);
  const currentMatch = useAppSelector(selectCurrentMatch);

  // Don't show for Fancy Market or Meter Market
  const marketName = market.marketName?.toLowerCase() || '';
  if (marketName.includes('fancy') || marketName.includes('meter')) {
    console.log('🚫 Cashout button hidden for market:', market.marketName);
    return null;
  }

  console.log('✅ Cashout button showing for market:', market.marketName);

  // Check if user has bets in this market
  const marketBets: IBet[] = Array.isArray(userBets) 
    ? userBets.filter((bet: IBet) => {
        // Handle both backend (marketId as string) and frontend formats
        const betMarketId = bet.marketId?.toString();
        const currentMarketId = market.marketId?.toString();
        const matches = betMarketId === currentMarketId;
        
        if (matches) {
          console.log('✅ Found matching bet:', {
            betMarketId,
            currentMarketId,
            betSelectionName: bet.selectionName,
            betGtype: bet.gtype
          });
        }
        
        return matches;
      })
    : [];

  const hasBets = marketBets.length > 0;

  console.log('🎯 Cashout Button State:', {
    marketId: market.marketId,
    marketName: market.marketName,
    marketGtype: market.gtype,
    totalUserBets: Array.isArray(userBets) ? userBets.length : 0,
    userBetsPreview: Array.isArray(userBets) ? userBets.slice(0, 2).map((b: any) => ({
      marketId: b.marketId,
      selectionName: b.selectionName,
      gtype: b.gtype,
      bet_on: b.bet_on
    })) : [],
    marketBets: marketBets.length,
    marketBetsDetails: marketBets.map((b: IBet) => ({
      selectionName: b.selectionName,
      odds: b.odds,
      stack: b.stack,
      isBack: b.isBack
    })),
    hasBets
  });

  const handleCashout = () => {
    // Don't allow cashout if no bets exist
    if (!hasBets) {
      alert('No bets placed in this market. Place a bet first to use cashout.');
      return;
    }

    try {
      console.log('🎯 Cashout button clicked for market:', market.marketName);

      // Get current odds for all runners
      const currentOdds: RunnerOdds[] = [];
      
      if (oddsData && oddsData.runners) {
        oddsData.runners.forEach((runner: any) => {
          // ✅ FIX: Get first NON-ZERO odds (important for bookmaker markets)
          let backOdds = 0;
          let layOdds = 0;
          
          // Try to get from ex.availableToBack/availableToLay first
          const availableToBack = runner.ex?.availableToBack || runner.back || [];
          const availableToLay = runner.ex?.availableToLay || runner.lay || [];
          
          // Find first non-zero back odds
          for (const odds of availableToBack) {
            const price = parseFloat(odds.price || odds.price1 || odds);
            if (price > 0) {
              backOdds = price;
              break;
            }
          }
          
          // Find first non-zero lay odds
          for (const odds of availableToLay) {
            const price = parseFloat(odds.price || odds.price1 || odds);
            if (price > 0) {
              layOdds = price;
              break;
            }
          }

          console.log(`📊 Extracted odds for ${runner.runnerName || runner.selectionName}: back=${backOdds}, lay=${layOdds}`);

          currentOdds.push({
            selectionId: runner.selectionId.toString(),
            selectionName: runner.runnerName || runner.selectionName,
            backOdds: backOdds,
            layOdds: layOdds
          });
        });
      }

      console.log('📊 Current odds:', currentOdds);
      console.log('🎲 User bets:', marketBets);

      // ✅ Check if any valid odds are available
      const hasValidOdds = currentOdds.some(odds => odds.backOdds > 0 || odds.layOdds > 0);
      if (!hasValidOdds) {
        alert('Market is suspended or odds are not available. Cannot calculate cashout.');
        return;
      }

      // Calculate cashout
      const cashoutResult = calculateCashout(
        marketBets,
        currentOdds,
        market.gtype as 'match' | 'match1'
      );

      if (!cashoutResult) {
        alert('Unable to calculate cashout. Please check if odds are available.');
        return;
      }

      console.log('💰 Cashout result:', cashoutResult);

      // No confirmation needed - directly open bet slip
      // PNL will be shown in the placebet box

      // Find the runner data
      const runner = oddsData.runners.find((r: any) => 
        r.selectionId.toString() === cashoutResult.selectionId
      );

      if (!runner) {
        alert('Runner not found. Please try again.');
        return;
      }

      // ✅ Calculate PnL and exposure using EXACT SAME logic as PlaceBetBox
      let calculatedPnl = 0;
      let calculatedExposure = 0;
      
      // ✅ Determine calculation type - EXACT SAME as PlaceBetBox.getCalculationType
      let calculationType = 'MATCH_ODDS';
      
      console.log(`🔍 Determining calculation type for cashout:`, {
        gtype: market.gtype,
        oddsType: market.oddsType,
        marketName: market.marketName
      });

      // Priority 1: Check gtype (most reliable)
      if (market.gtype === 'match1') {
        console.log(`✅ Using BOOKMAKER based on gtype: match1`);
        calculationType = 'BOOKMAKER';
      } else if (market.gtype === 'match') {
        console.log(`✅ Using MATCH_ODDS based on gtype: match`);
        calculationType = 'MATCH_ODDS';
      } else if (market.gtype === 'fancy') {
        console.log(`✅ Using FANCY based on gtype: fancy`);
        calculationType = 'FANCY';
      }
      // Priority 2: Fallback to market name patterns
      else {
        const marketName = market.marketName?.toUpperCase() || '';
        if (marketName.includes('BOOKMAKER') || marketName.includes('BM_')) {
          console.log(`✅ Using BOOKMAKER based on market name: ${market.marketName}`);
          calculationType = 'BOOKMAKER';
        } else if (marketName.includes('FANCY') || marketName.includes('SESSION')) {
          console.log(`✅ Using FANCY based on market name: ${market.marketName}`);
          calculationType = 'FANCY';
        } else {
          console.log(`✅ Using MATCH_ODDS as default for market: ${market.marketName}`);
          calculationType = 'MATCH_ODDS';
        }
      }
      
      // Calculate using same logic as PlaceBetBox's calculatePnlAndExposureByType
      switch (calculationType) {
        case 'BOOKMAKER':
          // Bookmaker logic: Odds are in percentage format (divide by 100)
          if (cashoutResult.betType === 'back') {
            // Back bet: profit = (odds / 100) × stake, exposure = -stake
            calculatedPnl = (cashoutResult.odds / 100) * cashoutResult.stake;
            calculatedExposure = -1 * cashoutResult.stake;
          } else {
            // Lay bet: profit = stake, liability = -(odds / 100) × stake
            calculatedPnl = cashoutResult.stake;
            calculatedExposure = -1 * ((cashoutResult.odds / 100) * cashoutResult.stake);
          }
          console.log(`📊 Bookmaker ${cashoutResult.betType} PnL calculated: pnl=${calculatedPnl}, exposure=${calculatedExposure}`);
          break;
        
        case 'MATCH_ODDS':
        default:
          // Match odds logic: Standard decimal odds calculation (exchange style)
          if (cashoutResult.betType === 'back') {
            // Back bet: profit = (odds - 1) × stake, exposure = -stake
            calculatedPnl = (cashoutResult.odds - 1) * cashoutResult.stake;
            calculatedExposure = -1 * cashoutResult.stake;
          } else {
            // Lay bet: profit = stake, liability = -(odds - 1) × stake
            calculatedPnl = cashoutResult.stake;
            calculatedExposure = -1 * ((cashoutResult.odds - 1) * cashoutResult.stake);
          }
          console.log(`📊 Match odds ${cashoutResult.betType} PnL calculated: pnl=${calculatedPnl}, exposure=${calculatedExposure}`);
          break;
      }

      console.log('💰 Calculated PnL and Exposure (using PlaceBetBox logic):', {
        calculationType,
        gtype: market.gtype,
        marketName: market.marketName,
        betType: cashoutResult.betType,
        odds: cashoutResult.odds,
        stake: cashoutResult.stake,
        pnl: calculatedPnl,
        exposure: calculatedExposure,
        finalOutcomeMin: cashoutResult.estimatedLoss,
        finalOutcomeMax: cashoutResult.estimatedProfit
      });

      // ✅ Determine betOn and oddsType based on calculationType (matches PlaceBetBox logic)
      let betOn: IBetOn;
      let oddsType: string;
      
      if (calculationType === 'BOOKMAKER') {
        betOn = IBetOn.BOOKMAKER;
        oddsType = 'BM';
      } else if (calculationType === 'FANCY') {
        betOn = IBetOn.FANCY;
        oddsType = 'FANCY';
      } else {
        betOn = IBetOn.MATCH_ODDS;
        oddsType = 'MATCH_ODDS';
      }

      console.log(`🎯 Setting betOn=${betOn}, oddsType=${oddsType} for ${calculationType} market`);

      // Prepare bet object
      const betData: IBet = {
        marketId: market.marketId?.toString() || '',
        matchId: typeof matchId === 'string' ? parseInt(matchId) : matchId,
        selectionId: parseInt(cashoutResult.selectionId),
        selectionName: cashoutResult.selectionName,
        marketName: market.marketName || '',
        odds: cashoutResult.odds,
        stack: cashoutResult.stake,
        isBack: cashoutResult.betType === 'back',
        betOn: betOn, // ✅ Set based on calculationType
        gtype: market.gtype || (calculationType === 'BOOKMAKER' ? 'match1' : 'match'),
        oddsType: oddsType, // ✅ Set based on calculationType ('BM' for bookmaker!)
        volume: 0,
        pnl: Math.round(calculatedPnl), // ✅ This bet's PnL
        exposure: Math.round(calculatedExposure), // ✅ This bet's exposure
        currentMarketOdds: cashoutResult.odds,
        type: IBetType.Match,
        suspended: runner.status === 'SUSPENDED',
        betLocked: false,
        // Required fields
        eventId: market.sportId ? (typeof market.sportId === 'string' ? parseInt(market.sportId) : market.sportId) : 0,
        ipAddress: '',
        matchName: currentMatch?.name || market.marketName || '',
        sportId: currentMatch?.sportId ? (typeof currentMatch.sportId === 'string' ? parseInt(currentMatch.sportId) : currentMatch.sportId) : undefined,
        // ✅ TOTAL OUTCOME: Show combined PnL (existing position + this cashout bet)
        // This is what the user will end up with after placing this bet
        profitLoss: Math.round((cashoutResult.estimatedProfit + cashoutResult.estimatedLoss) / 2) // Average of min/max outcome
      };

      console.log('📝 Opening bet slip with:', betData);
      console.log('💰 ═══════════════════════════════════════════════════');
      console.log('💰 CASHOUT SUMMARY:');
      console.log('💰 ═══════════════════════════════════════════════════');
      console.log(`   Market: ${market.marketName} (${calculationType})`);
      console.log(`   Cashout Bet: ${cashoutResult.betType.toUpperCase()} ${cashoutResult.selectionName} @ ${cashoutResult.odds}, Stake ₹${cashoutResult.stake}`);
      console.log('');
      console.log('   📊 This Bet\'s PnL (standalone):');
      console.log(`      PnL: ₹${calculatedPnl.toFixed(2)} (profit if ${cashoutResult.betType === 'back' ? 'wins' : 'loses'})`);
      console.log(`      Exposure: ₹${calculatedExposure.toFixed(2)} (risk)`);
      console.log('');
      console.log('   🎯 TOTAL FINAL OUTCOMES (Existing + Cashout):');
      console.log(`      Best case: ₹${cashoutResult.estimatedProfit} (any team)`);
      console.log(`      Worst case: ₹${cashoutResult.estimatedLoss} (any team)`);
      console.log(`      Average: ₹${Math.round((cashoutResult.estimatedProfit + cashoutResult.estimatedLoss) / 2)}`);
      console.log(`      All positive: ${cashoutResult.estimatedLoss >= 0 ? 'YES ✅' : 'NO ❌'}`);
      console.log('💰 ═══════════════════════════════════════════════════');

      // Open the place bet box with pre-filled data
      // ✅ Pass final outcome information as custom properties
      dispatch(betPopup({
        isOpen: true,
        betData: {
          ...betData,
          // Custom properties for cashout display - TOTAL outcomes
          isCashout: true,
          cashoutEstimatedMin: Math.round(cashoutResult.estimatedLoss), // TOTAL outcome (worst)
          cashoutEstimatedMax: Math.round(cashoutResult.estimatedProfit), // TOTAL outcome (best)
          cashoutIsBalanced: cashoutResult.isBalanced
        } as any
      }));

    } catch (error) {
      console.error('❌ Error in cashout:', error);
      alert('An error occurred while calculating cashout. Please try again.');
    }
  };

  // Calculate button display - just show "Cashout" text always
  const calculateDisplayValue = (): { text: string; color: string; hoverColor: string; isDisabled: boolean } => {
    // Orange theme colors (matching accordian-header.tsx)
    const orangeColor = '#f77801ff'; // Primary orange
    const orangeDark = '#d66901'; // Darker orange for hover
    const grayColor = '#9CA3AF'; // Gray-400
    const grayDark = '#6B7280'; // Gray-500
    
    // Always show "Cashout" text
    // If no bets, show disabled state
    if (!hasBets) {
      return { 
        text: 'cashout', 
        color: grayColor,
        hoverColor: grayDark,
        isDisabled: true 
      };
    }

    // If has bets, show enabled orange button with just "cashout" text
    return { 
      text: 'cashout', 
      color: orangeColor,
      hoverColor: orangeDark,
      isDisabled: false 
    };
  };

  const displayValue = calculateDisplayValue();

  return (
    <button
      onClick={handleCashout}
      disabled={displayValue.isDisabled}
      className="cashout-button"
      style={{
        padding: '0.25rem 0.55rem',
        fontSize: '0.7rem',
        fontWeight: '600',
        backgroundColor: displayValue.color,
        color: 'white',
        border: `1px solid ${displayValue.color}`,
        borderRadius: '4px',
        cursor: displayValue.isDisabled ? 'not-allowed' : 'pointer',
        marginLeft: '0px',
        transition: 'all 0.2s ease',
        opacity: displayValue.isDisabled ? 0.6 : 1,
        textTransform: 'none',
        position: 'relative',
        zIndex: 10,
        whiteSpace: 'nowrap',
        minWidth: 'auto',
        height: '20px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '1',
      }}
      onMouseEnter={(e) => {
        if (displayValue.isDisabled) return;
        e.currentTarget.style.backgroundColor = displayValue.hoverColor;
        e.currentTarget.style.borderColor = displayValue.hoverColor;
      }}
      onMouseLeave={(e) => {
        if (displayValue.isDisabled) return;
        e.currentTarget.style.backgroundColor = displayValue.color;
        e.currentTarget.style.borderColor = displayValue.color;
      }}
      title={displayValue.isDisabled 
        ? "Place a bet in this market to use cashout" 
        : "Click to balance your bets and secure profit/minimize loss"
      }
    >
      {displayValue.text}
    </button>
  );
};

export default CashoutButton;

