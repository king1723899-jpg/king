import { isMobile } from 'react-device-detect'
import api from '../utils/api'

class CasinoService {
  getCasinoList() {
    return api.get('get-casino-games')
  }

  getCasinoHomepageCategories() {
    return api.get('get-casino-homepage-categories')
  }

  getIntCasinoList(provider:any, type:any) {
    const query = new URLSearchParams()
    query.append('provider', String(provider ?? ''))
    query.append('type', String(type ?? ''))
    query.append('limit', 'all')
    return api.get(`get-casino-int-games?${query.toString()}`)
  }

  searchCasinoGames(searchQuery: string) {
    return api.get(`search-casino-games?query=${encodeURIComponent(searchQuery)}`)
  }

  getCasinoByHomepageCode(homepageCode: number) {
    return api.get(`get-casino-by-homepage/${homepageCode}`)
  }

  getplaycasino(data:any) {
    return api.post(`/GetGameUrl.php`, data)
  }

  getCasinoLaunchAvailability(gameCode: string, vendorCode?: string | number) {
    const query = new URLSearchParams()
    query.append('gameCode', String(gameCode || ''))
    if (vendorCode !== undefined && vendorCode !== null && String(vendorCode).trim() !== '') {
      query.append('vendorCode', String(vendorCode))
    }
    return api.get(`casino-launch-availability?${query.toString()}`)
  }

  getCasinoDataById(id: any) {
    return api.get(`get-casino-data-by-id/${id}`)
  }

  getLiveCasinoData(slug: any) {
    return api.get(`${process.env.REACT_APP_CASINO_SOCKET_URL}api/get-casino-market/${slug}`)
  }

  getResultByMid(type: string, mid: string) {
    return api.get(
      `html-cards/${type}/${mid}/?ismobile=${isMobile}`,
    )
  }

  getResultList(filterdata: { matchid: string; startDate: string; roundId: string }, page: number) {
    return api.get(
      `done-results/${filterdata.matchid}?filter_date=${filterdata.startDate}&roundId=${filterdata.roundId}&page=${page}`,
    )
  }

  disableCasino(matchId: string) {
    return api.get(`disable-casino-games?matchId=${matchId}`)
  }

  // Get casino bet history with provider information
  getCasinoBetHistory(params?: { page?: number; limit?: number; startDate?: string; endDate?: string }) {
    const queryParams = new URLSearchParams()
    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())
    if (params?.startDate) queryParams.append('startDate', params.startDate)
    if (params?.endDate) queryParams.append('endDate', params.endDate)
    
    return api.get(`casino-bet-history?${queryParams.toString()}`)
  }

  // Get casino account statement with provider breakdown
  getCasinoAccountStatement(params?: { startDate?: string; endDate?: string }) {
    const queryParams = new URLSearchParams()
    if (params?.startDate) queryParams.append('startDate', params.startDate)
    if (params?.endDate) queryParams.append('endDate', params.endDate)
    
    return api.get(`casino-account-statement?${queryParams.toString()}`)
  }
}
export default new CasinoService()
