import api, { fancyApi } from '../utils/api'
import IBet from '../models/IBet'
import userService from './user.service'

class BetService {
  async getPlaceBet(betData: IBet) {
    try {
      const response = await fancyApi.post('placebet', betData)
      
      // ✅ Immediately call get-user-balance to update exposure after bet placement
      try {
        const balanceResponse = await userService.getUserBalance()
        console.log('🔄 Balance updated after bet placement:', balanceResponse.data)
        
        // Emit custom event to notify components about balance update
        window.dispatchEvent(new CustomEvent('balanceUpdated', { 
          detail: balanceResponse.data.data 
        }))
      } catch (balanceError) {
        console.warn('⚠️ Failed to update balance after bet placement:', balanceError)
      }
      
      return response
    } catch (error) {
      console.error('❌ Error placing bet:', error)
      throw error
    }
  }
//   getBets(matchId: number) {
//     return api.get(`bets?matchId=${matchId}`)
//   }
  getBets(matchId: number, targetUserId?: string) {
    const params = targetUserId ? `matchId=${matchId}&targetUserId=${targetUserId}` : `matchId=${matchId}`
    return api.get(`bets?${params}`)
  }
  
   getBets2(matchId: number) {
    return api.get(`adminprofitlossList?matchId=${matchId}`)
  }
  getMarketAnalysis() {
    return api.get(`get-market-analysis`)
  }
  getBetListByIds(betIds: Array<string>, page: number) {
    return api.post(`get-bet-list-by-ids`, { betIds, page })
  }
  deleteCurrentBet(id: string) {
    return api.delete(`delete-current-bet/${id}`)
  }
  betLock(data: any) {
    return api.post(`bet-lock`, data)
  }

  // New granular bet lock methods
  betLockGranular(data: any) {
    return api.post(`bet-lock-granular`, data)
  }

  getMatchBetLocks(matchId: string) {
    return api.get(`match-bet-locks/${matchId}`)
  }
  getChildUserList(matchId: number, username?: string) {
    return api.get(`get-child-user-list?username=${username}&matchId=${matchId}`)
  }
  deleteBets(data: { ids: Array<string> }) {
    return api.post(`delete-bets`, data)
  }

  usersLockClientList(data: { ids: Array<string>; lock: boolean; type: string }) {
    return api.post(`users-lock`, data)
  }

  // ✅ New methods for undeclared bets management
  getUndeclaredBets() {
    return api.get('undeclared-bets')
  }

  deleteBetsByMarket(marketId: string, matchId: number) {
    return api.delete(`bets-by-market?marketId=${marketId}&matchId=${matchId}`)
  }
  
    // ✅ NEW: Get users who placed bets in a specific match for admin dropdown
  getMatchBettingUsers(matchId: number) {
    console.log('🔄 BetService: Making API call to match-betting-users with matchId:', matchId)
    const url = `match-betting-users?matchId=${matchId}`
    console.log('🔄 BetService: Full API URL:', url)
    return api.get(url)
  }
}
export default new BetService()
