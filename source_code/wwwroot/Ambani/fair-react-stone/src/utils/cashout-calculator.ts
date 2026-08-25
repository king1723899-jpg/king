/**
 * Cashout Calculator Utility
 * Calculates the optimal balancing bet for cashing out a position
 */

import IBet, { IBetOn, IBetType } from '../models/IBet';

export interface CashoutResult {
  shouldPlaceBet: boolean;
  betType: 'back' | 'lay';
  selectionId: string;
  selectionName: string;
  stake: number;
  odds: number;
  estimatedProfit: number;
  estimatedLoss: number;
  isBalanced: boolean;
}

export interface RunnerOdds {
  selectionId: string;
  selectionName: string;
  backOdds: number;
  layOdds: number;
}

/**
 * Calculate PnL for a specific bet based on gtype and bet type
 * Matches Python backend logic exactly
 */
function calculateBetPnL(
  bet: IBet,
  winningSelectionId: string,
  gtype: 'match' | 'match1'
): number {
  const selectionId = bet.selectionId.toString();
  const isCurrentSelection = selectionId === winningSelectionId;
  
  if (gtype === 'match1') {
    // BOOKMAKER logic (matches Python lines 905-925)
    if (isCurrentSelection) {
      // This selection wins
      if (bet.isBack) {
        // Back bet wins: profit = (odds / 100) × stake
        return (bet.odds / 100) * bet.stack;
      } else {
        // Lay bet loses: liability = -(odds / 100) × stake
        return -((bet.odds / 100) * bet.stack);
      }
    } else {
      // Other selection wins
      if (bet.isBack) {
        // Back bet loses: loss = -stake
        return -bet.stack;
      } else {
        // Lay bet wins: profit = stake
        return bet.stack;
      }
    }
  } else {
    // MATCH_ODDS logic (matches Python lines 949-969)
    if (isCurrentSelection) {
      // This selection wins
      if (bet.isBack) {
        // Back bet wins: profit = (odds - 1) × stake
        return (bet.odds - 1) * bet.stack;
      } else {
        // Lay bet loses: liability = -(odds - 1) × stake
        return -((bet.odds - 1) * bet.stack);
      }
    } else {
      // Other selection wins
      if (bet.isBack) {
        // Back bet loses: loss = -stake
        return -bet.stack;
      } else {
        // Lay bet wins: profit = stake
        return bet.stack;
      }
    }
  }
}

/**
 * Calculate current position for each selection
 * Position = PnL if that selection wins
 */
function calculateCurrentPositions(
  userBets: IBet[],
  allSelectionIds: string[],
  gtype: 'match' | 'match1'
): Record<string, number> {
  const positions: Record<string, number> = {};
  
  // Initialize all positions to 0
  allSelectionIds.forEach(id => {
    positions[id] = 0;
  });
  
  // Calculate PnL for each possible outcome
  allSelectionIds.forEach(winningSelectionId => {
    userBets.forEach(bet => {
      const pnl = calculateBetPnL(bet, winningSelectionId, gtype);
      positions[winningSelectionId] += pnl;
    });
  });
  
  return positions;
}

/**
 * Simulate a cashout bet and calculate new positions
 */
function simulateCashoutBet(
  currentPositions: Record<string, number>,
  cashoutSelectionId: string,
  betType: 'back' | 'lay',
  stake: number,
  odds: number,
  gtype: 'match' | 'match1',
  allSelectionIds: string[]
): Record<string, number> {
  const newPositions = { ...currentPositions };
  
  // Create a simulated bet object
  const simulatedBet: IBet = {
    selectionId: parseInt(cashoutSelectionId),
    odds: odds,
    stack: stake,
    isBack: betType === 'back',
    marketId: '',
    matchId: 0,
    selectionName: '',
    marketName: '',
    betOn: gtype === 'match1' ? IBetOn.BOOKMAKER : IBetOn.MATCH_ODDS,
    gtype: gtype,
    oddsType: gtype === 'match1' ? 'BM' : 'MATCH_ODDS',
    volume: 0,
    pnl: 0,
    exposure: 0,
    currentMarketOdds: odds,
    type: IBetType.Match,
    suspended: false,
    betLocked: false,
    eventId: 0,
    ipAddress: '',
    matchName: '',
    sportId: 0
  };
  
  // Calculate impact of simulated bet on each outcome
  allSelectionIds.forEach(winningSelectionId => {
    const pnl = calculateBetPnL(simulatedBet, winningSelectionId, gtype);
    newPositions[winningSelectionId] += pnl;
  });
  
  return newPositions;
}

/**
 * Find the optimal stake that makes ALL outcomes as EQUAL as possible
 * Goal: Make all team outcomes the same (perfect balance)
 */
function findOptimalStake(
  currentPositions: Record<string, number>,
  cashoutSelectionId: string,
  betType: 'back' | 'lay',
  odds: number,
  gtype: 'match' | 'match1',
  allSelectionIds: string[]
): number {
  // Start with a rough estimate based on the imbalance
  const positionValues = Object.values(currentPositions);
  const maxPosition = Math.max(...positionValues);
  const minPosition = Math.min(...positionValues);
  const imbalance = maxPosition - minPosition;
  
  // Calculate profit factor based on bet type and gtype
  let profitFactor = 1;
  if (gtype === 'match1') {
    profitFactor = odds / 100;
  } else {
    profitFactor = odds - 1;
  }
  
  // Initial estimate
  let stake = Math.round(imbalance / (profitFactor + 1));
  
  // ✅ MINIMUM STAKE: 100 (as per user requirement)
  stake = Math.max(100, stake);
  
  // ✅ ENHANCED: Two-pass search for optimal stake that makes outcomes EQUAL
  let bestStake = stake;
  let bestMeanDeviation = Infinity; // PRIMARY goal: minimize this (make outcomes equal)
  let bestVariance = Infinity; // SECONDARY goal
  
  const minStake = 100; // ✅ MINIMUM 100
  const maxStake = Math.max(30000, Math.ceil(stake * 3)); // Search wider range
  
  // ✅ PASS 1: Coarse search (bigger steps) to find approximate optimal
  const coarseStep = Math.max(100, Math.floor((maxStake - minStake) / 100));
  
  for (let testStake = minStake; testStake <= maxStake; testStake += coarseStep) {
    const testPositions = simulateCashoutBet(
      currentPositions,
      cashoutSelectionId,
      betType,
      testStake,
      odds,
      gtype,
      allSelectionIds
    );
    
    const testValues = Object.values(testPositions);
    const testMean = testValues.reduce((sum, val) => sum + val, 0) / testValues.length;
    const testMeanDeviation = testValues.reduce((sum, val) => sum + Math.abs(val - testMean), 0) / testValues.length;
    
    // PRIMARY: Find stake with minimum mean deviation (most equal outcomes)
    if (testMeanDeviation < bestMeanDeviation) {
      bestMeanDeviation = testMeanDeviation;
      bestStake = testStake;
      
      // If we found near-perfect equality, no need to search further
      if (testMeanDeviation < 5) {
        break;
      }
    }
  }
  
  // ✅ PASS 2: Fine search around the best stake found (±500, step 10)
  const fineSearchMin = Math.max(minStake, bestStake - 500);
  const fineSearchMax = Math.min(maxStake, bestStake + 500);
  const fineStep = 10;
  
  bestMeanDeviation = Infinity;
  bestVariance = Infinity;
  let finalBestStake = bestStake;
  
  for (let testStake = fineSearchMin; testStake <= fineSearchMax; testStake += fineStep) {
    const testPositions = simulateCashoutBet(
      currentPositions,
      cashoutSelectionId,
      betType,
      testStake,
      odds,
      gtype,
      allSelectionIds
    );
    
    const testValues = Object.values(testPositions);
    const testMax = Math.max(...testValues);
    const testMin = Math.min(...testValues);
    const testVariance = testMax - testMin;
    const testMean = testValues.reduce((sum, val) => sum + val, 0) / testValues.length;
    const testMeanDeviation = testValues.reduce((sum, val) => sum + Math.abs(val - testMean), 0) / testValues.length;
    
    // ✅ Selection criteria:
    // 1. PRIMARY: Minimize mean deviation (makes outcomes equal)
    // 2. SECONDARY: If mean deviation is similar, minimize variance
    const isSignificantlyMoreEqual = testMeanDeviation < bestMeanDeviation - 1;
    const isSimilarEquality = Math.abs(testMeanDeviation - bestMeanDeviation) <= 1;
    const isBetterVariance = testVariance < bestVariance - 5;
    
    if (isSignificantlyMoreEqual || (isSimilarEquality && isBetterVariance)) {
      bestMeanDeviation = testMeanDeviation;
      bestVariance = testVariance;
      finalBestStake = testStake;
    }
    
    // Early exit for near-perfect balance
    if (testVariance < 5 && testMeanDeviation < 2) {
      finalBestStake = testStake;
      break;
    }
  }
  
  // Round to nearest 10 for cleaner stakes
  finalBestStake = Math.round(finalBestStake / 10) * 10;
  finalBestStake = Math.max(100, finalBestStake); // ✅ Ensure minimum 100
  
  return finalBestStake;
}

/**
 * Calculate the best cashout option for a given market
 * ENHANCED: Analyzes ALL possible back/lay options on ALL runners
 * @param userBets - User's current bets in the market
 * @param currentOdds - Current odds for all runners
 * @param gtype - Market type ('match' or 'match1')
 * @returns Cashout calculation result
 */
export function calculateCashout(
  userBets: IBet[],
  currentOdds: RunnerOdds[],
  gtype: 'match' | 'match1'
): CashoutResult | null {
  if (!userBets || userBets.length === 0 || !currentOdds || currentOdds.length === 0) {
    return null;
  }

  console.log('💰 ENHANCED Cashout Calculation Started');
  console.log('📊 User bets:', userBets.length);
  console.log('📊 Available runners:', currentOdds.length);
  console.log('📊 Market type:', gtype);

  // Get all selection IDs
  const allSelectionIds = currentOdds.map(r => r.selectionId.toString());
  
  // Calculate current positions (PnL if each selection wins)
  const currentPositions = calculateCurrentPositions(userBets, allSelectionIds, gtype);
  
  console.log('📊 ═══════════════════════════════════════════════════');
  console.log('📊 CURRENT POSITION (Before Cashout):');
  console.log('📊 ═══════════════════════════════════════════════════');
  
  // Show current position for each team
  allSelectionIds.forEach(selectionId => {
    const runner = currentOdds.find(r => r.selectionId.toString() === selectionId);
    const outcome = currentPositions[selectionId];
    const name = runner ? runner.selectionName : selectionId;
    const status = outcome >= 0 ? '✅' : '❌';
    console.log(`   ${status} ${name}: ₹${outcome.toFixed(2)}`);
  });
  
  // Calculate current imbalance
  const currentValues = Object.values(currentPositions);
  const currentMax = Math.max(...currentValues);
  const currentMin = Math.min(...currentValues);
  const currentVariance = currentMax - currentMin;
  
  console.log('');
  console.log(`📊 Analysis:`);
  console.log(`   Best case (max): ₹${currentMax.toFixed(2)}`);
  console.log(`   Worst case (min): ₹${currentMin.toFixed(2)}`);
  console.log(`   Variance (range): ₹${currentVariance.toFixed(2)}`);
  console.log('📊 ═══════════════════════════════════════════════════');
  console.log('');
  
  console.log('🔍 ═══════════════════════════════════════════════════');
  console.log('🔍 ANALYZING ALL CASHOUT OPTIONS:');
  console.log('🔍 ═══════════════════════════════════════════════════');
  console.log('');

  // Try ALL possible cashout options (back and lay on each runner)
  interface CashoutOption {
    selectionId: string;
    selectionName: string;
    betType: 'back' | 'lay';
    odds: number;
    stake: number;
    newPositions: Record<string, number>;
    variance: number;
    minProfit: number;
    maxProfit: number;
  }
  
  const options: CashoutOption[] = [];
  
  currentOdds.forEach(runner => {
    // Try BACK bet on this runner
    if (runner.backOdds && runner.backOdds > 0) {
      const stake = findOptimalStake(
        currentPositions,
        runner.selectionId.toString(),
        'back',
        runner.backOdds,
        gtype,
        allSelectionIds
      );
      
      const newPositions = simulateCashoutBet(
        currentPositions,
        runner.selectionId.toString(),
        'back',
        stake,
        runner.backOdds,
        gtype,
        allSelectionIds
      );
      
      const values = Object.values(newPositions);
      const maxProfit = Math.max(...values);
      const minProfit = Math.min(...values);
      const variance = maxProfit - minProfit;
      
      options.push({
        selectionId: runner.selectionId.toString(),
        selectionName: runner.selectionName,
        betType: 'back',
        odds: runner.backOdds,
        stake,
        newPositions,
        variance,
        minProfit,
        maxProfit
      });
      
      // Calculate mean deviation for this option
      const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
      const meanDeviation = values.reduce((sum, val) => sum + Math.abs(val - mean), 0) / values.length;
      const allPositive = values.every(v => v >= 0);
      
      console.log(`🔍 BACK ${runner.selectionName} @ ${runner.backOdds}, Stake: ₹${stake}`);
      console.log(`   Final outcomes:`);
      allSelectionIds.forEach(selId => {
        const runnerName = currentOdds.find(r => r.selectionId.toString() === selId)?.selectionName || selId;
        const outcome = newPositions[selId];
        const change = outcome - currentPositions[selId];
        const status = outcome >= 0 ? '✅' : '❌';
        console.log(`      ${status} ${runnerName}: ₹${outcome.toFixed(2)} (${change >= 0 ? '+' : ''}${change.toFixed(2)})`);
      });
      console.log(`   Variance: ${variance.toFixed(2)}, Mean Dev: ${meanDeviation.toFixed(2)}, All +ve: ${allPositive ? 'YES ✅' : 'NO ❌'}`);
    }
    
    // Try LAY bet on this runner
    if (runner.layOdds && runner.layOdds > 0) {
      const stake = findOptimalStake(
        currentPositions,
        runner.selectionId.toString(),
        'lay',
        runner.layOdds,
        gtype,
        allSelectionIds
      );
      
      const newPositions = simulateCashoutBet(
        currentPositions,
        runner.selectionId.toString(),
        'lay',
        stake,
        runner.layOdds,
        gtype,
        allSelectionIds
      );
      
      const values = Object.values(newPositions);
      const maxProfit = Math.max(...values);
      const minProfit = Math.min(...values);
      const variance = maxProfit - minProfit;
      
      options.push({
        selectionId: runner.selectionId.toString(),
        selectionName: runner.selectionName,
        betType: 'lay',
        odds: runner.layOdds,
        stake,
        newPositions,
        variance,
        minProfit,
        maxProfit
      });
      
      // Calculate mean deviation for this option
      const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
      const meanDeviation = values.reduce((sum, val) => sum + Math.abs(val - mean), 0) / values.length;
      const allPositive = values.every(v => v >= 0);
      
      console.log(`🔍 LAY ${runner.selectionName} @ ${runner.layOdds}, Stake: ₹${stake}`);
      console.log(`   Final outcomes:`);
      allSelectionIds.forEach(selId => {
        const runnerName = currentOdds.find(r => r.selectionId.toString() === selId)?.selectionName || selId;
        const outcome = newPositions[selId];
        const change = outcome - currentPositions[selId];
        const status = outcome >= 0 ? '✅' : '❌';
        console.log(`      ${status} ${runnerName}: ₹${outcome.toFixed(2)} (${change >= 0 ? '+' : ''}${change.toFixed(2)})`);
      });
      console.log(`   Variance: ${variance.toFixed(2)}, Mean Dev: ${meanDeviation.toFixed(2)}, All +ve: ${allPositive ? 'YES ✅' : 'NO ❌'}`);
    }
  });
  
  if (options.length === 0) {
    console.log('❌ No valid cashout options found');
    return null;
  }
  
  console.log('');
  console.log('✅ Total options analyzed: ' + options.length);
  console.log('');
  console.log('⚖️ ═══════════════════════════════════════════════════');
  console.log('⚖️ SELECTING BEST OPTION:');
  console.log('⚖️ ═══════════════════════════════════════════════════');
  console.log('');

  // Use the already calculated currentVariance and add max loss/profit variables
  const currentMaxLoss = currentMin;
  const currentMaxProfit = currentMax;
  
  console.log('📊 Current Position Analysis:');
  console.log(`   Max loss: ₹${currentMaxLoss.toFixed(2)} (worst case before cashout)`);
  console.log(`   Max profit: ₹${currentMaxProfit.toFixed(2)} (best case before cashout)`);
  console.log(`   Variance: ₹${currentVariance.toFixed(2)} (difference between best and worst)`);
  console.log('');

  // ✅ ENHANCED SELECTION: Best cashout that makes outcomes equal and reduces max loss
  const bestOption = options.reduce((best, current) => {
    // Calculate metrics for current option
    const currentValues = Object.values(current.newPositions);
    const currentMin = Math.min(...currentValues);
    const currentMax = Math.max(...currentValues);
    const currentMean = currentValues.reduce((sum, val) => sum + val, 0) / currentValues.length;
    const currentAllPositive = currentValues.every(val => val >= 0);
    const currentMeanDeviation = currentValues.reduce((sum, val) => sum + Math.abs(val - currentMean), 0) / currentValues.length;
    const currentMaxLossImprovement = currentMin - currentMaxLoss; // How much we reduce max loss
    
    // Calculate metrics for best option
    const bestValues = Object.values(best.newPositions);
    const bestMin = Math.min(...bestValues);
    const bestMax = Math.max(...bestValues);
    const bestMean = bestValues.reduce((sum, val) => sum + val, 0) / bestValues.length;
    const bestAllPositive = bestValues.every(val => val >= 0);
    const bestMeanDeviation = bestValues.reduce((sum, val) => sum + Math.abs(val - bestMean), 0) / bestValues.length;
    const bestMaxLossImprovement = bestMin - currentMaxLoss;
    
    console.log(`⚖️ Comparing options:
      Current: ${current.selectionName} ${current.betType.toUpperCase()} @ ${current.odds}, Stake ₹${current.stake}
        - Outcomes: [${currentValues.map(v => v.toFixed(2)).join(', ')}]
        - Range: ₹${currentMin.toFixed(2)} to ₹${currentMax.toFixed(2)} (Variance: ${current.variance.toFixed(2)})
        - Mean: ₹${currentMean.toFixed(2)}, Mean Deviation: ${currentMeanDeviation.toFixed(2)}
        - Max loss improvement: ${currentMaxLossImprovement >= 0 ? '+' : ''}₹${currentMaxLossImprovement.toFixed(2)}
        - All positive: ${currentAllPositive ? 'YES ✅' : 'NO ❌'}
      
      Best: ${best.selectionName} ${best.betType.toUpperCase()} @ ${best.odds}, Stake ₹${best.stake}
        - Outcomes: [${bestValues.map(v => v.toFixed(2)).join(', ')}]
        - Range: ₹${bestMin.toFixed(2)} to ₹${bestMax.toFixed(2)} (Variance: ${best.variance.toFixed(2)})
        - Mean: ₹${bestMean.toFixed(2)}, Mean Deviation: ${bestMeanDeviation.toFixed(2)}
        - Max loss improvement: ${bestMaxLossImprovement >= 0 ? '+' : ''}₹${bestMaxLossImprovement.toFixed(2)}
        - All positive: ${bestAllPositive ? 'YES ✅' : 'NO ❌'}`);
    
    // ✅ PRIORITY 1: Most equal outcomes (lowest mean deviation AND variance)
    // This is the PRIMARY goal - make all outcomes the same
    const equalityThreshold = 20; // Consider "equal" if mean deviation < 20
    const currentIsEqual = currentMeanDeviation < equalityThreshold;
    const bestIsEqual = bestMeanDeviation < equalityThreshold;
    
    if (currentIsEqual && !bestIsEqual) {
      console.log(`  🎯 Current WINS: Outcomes are nearly EQUAL! (MeanDev: ${currentMeanDeviation.toFixed(2)} < ${equalityThreshold})`);
      return current;
    }
    if (bestIsEqual && !currentIsEqual) {
      console.log(`  🎯 Best WINS: Outcomes are nearly EQUAL! (MeanDev: ${bestMeanDeviation.toFixed(2)} < ${equalityThreshold})`);
      return best;
    }
    
    // Both are equal, prefer the one with lower variance (tighter range)
    if (currentIsEqual && bestIsEqual) {
      if (current.variance < best.variance - 5) { // 5 rupee tolerance
        console.log(`  ⚖️ Current wins: Tighter range (Variance: ${current.variance.toFixed(2)} vs ${best.variance.toFixed(2)})`);
        return current;
      } else if (best.variance < current.variance - 5) {
        console.log(`  ⚖️ Best wins: Tighter range (Variance: ${best.variance.toFixed(2)} vs ${current.variance.toFixed(2)})`);
        return best;
      }
      
      // If variance is similar, prefer all positive
      if (currentAllPositive && !bestAllPositive) {
        console.log(`  💰 Current wins: All outcomes positive`);
        return current;
      }
      if (bestAllPositive && !currentAllPositive) {
        console.log(`  💰 Best wins: All outcomes positive`);
        return best;
      }
      
      // If both positive or both negative, prefer higher mean
      if (currentMean > bestMean + 5) {
        console.log(`  💵 Current wins: Higher mean (₹${currentMean.toFixed(2)} vs ₹${bestMean.toFixed(2)})`);
        return current;
      } else {
        console.log(`  💵 Best wins: Higher mean (₹${bestMean.toFixed(2)} vs ₹${currentMean.toFixed(2)})`);
        return best;
      }
    }
    
    // ✅ PRIORITY 2: Neither is perfectly equal - prefer the one with lower mean deviation
    // (closer to equal outcomes)
    const deviationDiff = currentMeanDeviation - bestMeanDeviation;
    
    if (Math.abs(deviationDiff) > 5) { // Significant difference in equality
      if (currentMeanDeviation < bestMeanDeviation) {
        console.log(`  ⚖️ Current wins: More equal outcomes (MeanDev: ${currentMeanDeviation.toFixed(2)} vs ${bestMeanDeviation.toFixed(2)})`);
        return current;
      } else {
        console.log(`  ⚖️ Best wins: More equal outcomes (MeanDev: ${bestMeanDeviation.toFixed(2)} vs ${currentMeanDeviation.toFixed(2)})`);
        return best;
      }
    }
    
    // ✅ PRIORITY 3: Similar equality - prefer the one that reduces max loss more
    if (Math.abs(currentMaxLossImprovement - bestMaxLossImprovement) > 10) {
      if (currentMaxLossImprovement > bestMaxLossImprovement) {
        console.log(`  📈 Current wins: Better reduces max loss (${currentMaxLossImprovement >= 0 ? '+' : ''}₹${currentMaxLossImprovement.toFixed(2)} vs ${bestMaxLossImprovement >= 0 ? '+' : ''}₹${bestMaxLossImprovement.toFixed(2)})`);
        return current;
      } else {
        console.log(`  📈 Best wins: Better reduces max loss (${bestMaxLossImprovement >= 0 ? '+' : ''}₹${bestMaxLossImprovement.toFixed(2)} vs ${currentMaxLossImprovement >= 0 ? '+' : ''}₹${currentMaxLossImprovement.toFixed(2)})`);
        return best;
      }
    }
    
    // ✅ PRIORITY 4: Prefer lower variance (tighter outcome range)
    if (Math.abs(current.variance - best.variance) > 10) {
      if (current.variance < best.variance) {
        console.log(`  📊 Current wins: Lower variance (${current.variance.toFixed(2)} vs ${best.variance.toFixed(2)})`);
        return current;
      } else {
        console.log(`  📊 Best wins: Lower variance (${best.variance.toFixed(2)} vs ${current.variance.toFixed(2)})`);
        return best;
      }
    }
    
    // ✅ PRIORITY 5: Prefer all positive outcomes
    if (currentAllPositive && !bestAllPositive) {
      console.log(`  ✅ Current wins: All outcomes positive`);
      return current;
    }
    if (bestAllPositive && !currentAllPositive) {
      console.log(`  ✅ Best wins: All outcomes positive`);
      return best;
    }
    
    // ✅ PRIORITY 6: Fallback - prefer higher mean (more profit or less loss)
    if (currentMean > bestMean) {
      console.log(`  💰 Current wins: Higher mean outcome (₹${currentMean.toFixed(2)} vs ₹${bestMean.toFixed(2)})`);
      return current;
    } else {
      console.log(`  💰 Best wins: Higher mean outcome (₹${bestMean.toFixed(2)} vs ₹${currentMean.toFixed(2)})`);
      return best;
    }
  });
  
  // Calculate final metrics
  const finalValues = Object.values(bestOption.newPositions);
  const finalMin = Math.min(...finalValues);
  const finalMax = Math.max(...finalValues);
  const finalMean = finalValues.reduce((sum, val) => sum + val, 0) / finalValues.length;
  const finalAllPositive = finalValues.every(val => val >= 0);
  const finalMeanDeviation = finalValues.reduce((sum, val) => sum + Math.abs(val - finalMean), 0) / finalValues.length;
  const finalIsEqual = finalMeanDeviation < 20;
  
  // Calculate improvements
  const maxLossImprovement = finalMin - currentMaxLoss;
  const varianceImprovement = currentVariance - bestOption.variance;
  const varianceReductionPercent = (varianceImprovement / currentVariance) * 100;
  
  console.log('');
  console.log('🎯 ═══════════════════════════════════════════════════════════════');
  console.log('🎯 BEST CASHOUT OPTION SELECTED:');
  console.log('🎯 ═══════════════════════════════════════════════════════════════');
  console.log(`   💜 Cashout Bet: ${bestOption.betType.toUpperCase()} ${bestOption.selectionName} @ ${bestOption.odds}`);
  console.log(`   💵 Stake: ₹${bestOption.stake}`);
  console.log('');
  console.log('   📊 OUTCOMES COMPARISON:');
  console.log('   ┌─────────────────────────────────────────────────────────┐');
  console.log('   │ Before Cashout (Current Position)                      │');
  console.log('   ├─────────────────────────────────────────────────────────┤');
  
  // Show current position for each team
  const selectionNames = allSelectionIds.map(id => {
    const runner = currentOdds.find(r => r.selectionId.toString() === id);
    return runner ? runner.selectionName : id;
  });
  
  allSelectionIds.forEach((id, index) => {
    const currentOutcome = currentPositions[id];
    const selectionName = selectionNames[index];
    const color = currentOutcome >= 0 ? '✅' : '❌';
    console.log(`   │ ${color} ${selectionName.padEnd(35)}: ₹${currentOutcome.toFixed(2).padStart(10)} │`);
  });
  
  console.log(`   │ Range: ₹${currentMaxLoss.toFixed(2)} to ₹${currentMaxProfit.toFixed(2)} (Variance: ₹${currentVariance.toFixed(2)})    │`);
  console.log('   └─────────────────────────────────────────────────────────┘');
  console.log('');
  console.log('   ┌─────────────────────────────────────────────────────────┐');
  console.log('   │ After Cashout (New Position)                           │');
  console.log('   ├─────────────────────────────────────────────────────────┤');
  
  allSelectionIds.forEach((id, index) => {
    const newOutcome = bestOption.newPositions[id];
    const currentOutcome = currentPositions[id];
    const change = newOutcome - currentOutcome;
    const selectionName = selectionNames[index];
    const color = newOutcome >= 0 ? '✅' : '❌';
    const changeColor = change >= 0 ? '⬆️' : '⬇️';
    const changeSign = change >= 0 ? '+' : '';
    console.log(`   │ ${color} ${selectionName.padEnd(35)}: ₹${newOutcome.toFixed(2).padStart(10)} ${changeColor} (${changeSign}₹${change.toFixed(2)}) │`);
  });
  
  console.log(`   │ Range: ₹${finalMin.toFixed(2)} to ₹${finalMax.toFixed(2)} (Variance: ₹${bestOption.variance.toFixed(2)})    │`);
  console.log('   └─────────────────────────────────────────────────────────┘');
  console.log('');
  console.log('   📈 IMPROVEMENTS:');
  console.log(`      🎯 Max loss improved: ${maxLossImprovement >= 0 ? '✅' : '❌'} ${maxLossImprovement >= 0 ? '+' : ''}₹${maxLossImprovement.toFixed(2)} (${currentMaxLoss.toFixed(2)} → ${finalMin.toFixed(2)})`);
  console.log(`      📊 Variance reduced: ${varianceImprovement >= 0 ? '✅' : '❌'} ₹${varianceImprovement.toFixed(2)} (-${varianceReductionPercent.toFixed(1)}%)`);
  console.log(`      ⚖️ Mean deviation: ${finalMeanDeviation.toFixed(2)} ${finalIsEqual ? '✅ (Nearly equal!)' : '⚠️ (Could be more equal)'}`);
  console.log(`      💰 All outcomes positive: ${finalAllPositive ? 'YES ✅ (Guaranteed profit!)' : 'NO ❌'}`);
  console.log(`      💵 Average outcome: ₹${finalMean.toFixed(2)}`);
  console.log('');
  
  if (finalIsEqual && finalAllPositive) {
    console.log('   🏆 PERFECT CASHOUT: All outcomes are equal AND positive!');
  } else if (finalIsEqual) {
    console.log('   ⚖️ BALANCED CASHOUT: All outcomes are nearly equal!');
  } else if (finalAllPositive) {
    console.log('   ✅ PROFITABLE CASHOUT: All outcomes are positive!');
  } else if (maxLossImprovement > 0) {
    console.log('   📈 RISK-REDUCING CASHOUT: Max loss has been reduced!');
  } else {
    console.log('   📊 OPTIMIZED CASHOUT: Best available balance achieved!');
  }
  
  console.log('🎯 ═══════════════════════════════════════════════════════════════');

  return {
    shouldPlaceBet: true,
    betType: bestOption.betType,
    selectionId: bestOption.selectionId,
    selectionName: bestOption.selectionName,
    stake: bestOption.stake,
    odds: bestOption.odds,
    estimatedProfit: Math.round(bestOption.maxProfit),
    estimatedLoss: Math.round(bestOption.minProfit),
    isBalanced: finalIsEqual // ✅ Balanced if outcomes are nearly equal
  };
}

