import api from '../utils/api'
class MatchService {
  getActiveMatches(sportId: string, type: string, searchByMatch?: string, page?: number) {
    // ENHANCED: Use new URL format /admin/active-matches/{sportId}/{type}
    let url = `admin/active-matches/${sportId}`
    
    // Add type to URL path if it's not default/empty
    if (type && type !== 'default' && type !== '') {
      url += `/${type}`
    }
    
    // Add query parameters
    const params = new URLSearchParams()
    if (page) params.append('page', page.toString())
    if (searchByMatch) params.append('search', searchByMatch)
    
    if (params.toString()) {
      url += `?${params.toString()}`
    }
    
    console.log(`🌐 Fetching active matches: ${url}`)
    return api.get(url)
  }
  changeStatusMatch(matchId: number | string) {
    return api.get(`change-status-match?matchId=${matchId}`)
  }

  deleteMatch(matchId: number | string) {
    return api.get(`delete-match?matchId=${matchId}`)
  }

  rollbackResultMarket(matchId: number | string) {
    return api.get(`rollback-result-market?matchId=${matchId}`)
  }

  getMatchListSuggestion(data: any) {
    return api.post(`get-match-list-suggestion`, data)
  }
}
export default new MatchService()
