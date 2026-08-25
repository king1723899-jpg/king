import axios from 'axios';

// Use fan-server-stone endpoints (which proxy to super-node-server Diamond API)
// Remove trailing slashes and ensure proper URL format
const rawBaseUrl = process.env.REACT_APP_API_BASEURL || 'http://localhost:3010/api';
const FAN_SERVER_BASE_URL = rawBaseUrl.replace(/\/+$/, ''); // Remove trailing slashes

interface MatchDetailsResponse {
  success: boolean;
  msg: string;
  status: number;
  data: Array<{
    gmid: number;
    etid: number;
    m: number;
    gtv: number;
    ename: string;
    cid: number;
    cname: string;
    iplay: boolean;
    gtype: string;
    f1: boolean;
    f: boolean;
    bm: boolean;
    tv: boolean;
    scard: number;
    iscc: number;
    stime: string;
    mod: number;
    mname: string | null;
    oldgmid: string | null;
    port: number;
  }>;
  lastUpdatedaAt: string;
}

interface ScoreUrlResponse {
  score_url: string;
}

interface ScorecardDataResponse {
  success: boolean;
  data: {
    type: 'cricket' | 'iframe';
    oldgmid?: string;
    scoreUrl?: string;
    matchData?: any;
    streamingUrl?: string;
  };
  error?: string;
}

class ScorecardService {
  
  /**
   * Get match details including oldgmid for cricket and gtv for other sports
   */
  async getMatchDetails(gmid: number, sid: number): Promise<MatchDetailsResponse> {
    try {
      // Get the token from localStorage
      const token = window.location.pathname.includes('admin') 
        ? localStorage.getItem('token-admin')
        : localStorage.getItem('token')
      
      const response = await axios.get(`${FAN_SERVER_BASE_URL}/match-details`, {
        params: {
          gmid: gmid,
          sid: sid
        },
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });
      
      console.log(`📊 Match details fetched from fan-server for gmid: ${gmid}, sid: ${sid}`, response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching match details from fan-server:', error);
      throw error;
    }
  }

  /**
   * Get scorecard iframe URL for non-cricket sports via fan-server
   */
  async getScoreUrl(gtv: number, sportid: number): Promise<ScoreUrlResponse> {
    try {
      // Get the token from localStorage
      const token = window.location.pathname.includes('admin') 
        ? localStorage.getItem('token-admin')
        : localStorage.getItem('token')
      
      const response = await axios.get(`${FAN_SERVER_BASE_URL}/score`, {
        params: {
          gtv: gtv,
          sportid: sportid
        },
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });
      
      console.log(`🎯 Score URL fetched from fan-server for gtv: ${gtv}, sportid: ${sportid}`, response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching score URL from fan-server:', error);
      throw error;
    }
  }

  /**
   * Check if a sport is cricket (sport ID 4)
   */
  isCricket(sportId: string | number): boolean {
    return parseInt(sportId.toString()) === 4;
  }

  /**
   * Get the appropriate scorecard data based on sport type
   * UPDATED: Now calls the backend /scorecard-data endpoint which handles:
   *   - Sport 1 (Football) & 2 (Tennis): Diamond API with gtv
   *   - Sport 4 (Cricket): Zplay scorecard with oldgmid
   */
  async getScorecardData(matchId: number, sportId: number) {
    try {
      console.log(`🎯 Getting scorecard data for match ${matchId}, sport ${sportId}`);
      
      // Get the token from localStorage
      const token = window.location.pathname.includes('admin') 
        ? localStorage.getItem('token-admin')
        : localStorage.getItem('token')
      
      // Call the backend /scorecard-data endpoint which handles all sports correctly
      const response = await axios.get(`${FAN_SERVER_BASE_URL}/scorecard-data`, {
        params: {
          gmid: matchId,
          sid: sportId
        },
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        },
        timeout: 15000
      });
      
      if (response.data?.success && response.data?.data) {
        const data = response.data.data;
        console.log(`✅ Scorecard data from backend:`, data);
        console.log(`   Source: ${data.source}, Type: ${data.type}, ScoreUrl: ${data.scoreUrl}`);
        
        return {
          type: data.type || 'iframe',
          oldgmid: data.oldgmid,
          scoreUrl: data.scoreUrl,
          streamingUrl: data.streamingUrl,
          gtv: data.gtv,
          source: data.source,
          matchData: data.matchData
        };
      }
      
      console.warn(`⚠️ Backend returned no scorecard data for match ${matchId}`);
      return null;
    } catch (error: any) {
      console.error('❌ Error getting scorecard data from backend:', error.message);
      // Fallback to direct zplay method if backend fails
      return await this.getScorecardFromZplayDirect(matchId, sportId);
    }
  }
  
  /**
   * FALLBACK: Direct zplay scorecard fetch (used if backend fails)
   * This is a backup method in case the backend is unavailable
   */
  async getScorecardFromZplayDirect(matchId: number, sportId: number) {
    try {
      console.log(`🔄 Fallback: Fetching scorecard directly for match ${matchId}, sport ${sportId}`);
      
      // Get the token from localStorage
      const token = window.location.pathname.includes('admin') 
        ? localStorage.getItem('token-admin')
        : localStorage.getItem('token')
      
      // Get match details to get oldgmid and gtv
      const matchDetailsResponse = await axios.get(`${FAN_SERVER_BASE_URL}/match-details`, {
        params: {
          gmid: matchId,
          sid: sportId
        },
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });

      const matchData = matchDetailsResponse.data?.data?.[0];
      const oldgmid = matchData?.oldgmid;
      const gtv = matchData?.gtv;
      
      let scoreUrl = null;
      let source = 'fallback';
      
      if (sportId === 4 && oldgmid) {
        // Cricket: Try zplay
        try {
          const zplayResponse = await axios.get(
            `https://zplay1.in/pb/api/v1/events/matchDetails/${oldgmid}`,
            {
              headers: {
                Accept: "application/json",
                Origin: "https://zplay1.in",
                Referer: "https://zplay1.in/",
              },
              timeout: 10000
            }
          );
          const radarId = zplayResponse.data?.data?.match?.sportsradar_id;
          if (radarId && radarId !== 0) {
            scoreUrl = `https://live.ckex.xyz/lmt/#/?matchId=${radarId}&language=en`;
            source = 'zplay';
          }
        } catch (err) {
          console.warn('Zplay fallback failed:', err);
        }
      } else if ((sportId === 1 || sportId === 2) && gtv && gtv !== 0) {
        // Football/Tennis: Try Diamond API
        try {
          const diamondResponse = await axios.get(
            'https://diamond-api.softgamingapi.com/score',
            {
              params: { gtv, sportid: sportId, key: 'wwdiamond_mainkey01' },
              timeout: 10000
            }
          );
          if (diamondResponse.data?.score_url) {
            scoreUrl = diamondResponse.data.score_url;
            source = 'diamond';
          }
        } catch (err) {
          console.warn('Diamond API fallback failed:', err);
        }
      }
      
      // NO FALLBACK to turnkeyxgaming - return null if no scorecard available
      if (!scoreUrl) {
        console.log(`⚠️ No scorecard available for match ${matchId}, sport ${sportId}`);
      }

      return {
        type: 'iframe' as 'cricket' | 'iframe',
        oldgmid: oldgmid,
        scoreUrl: scoreUrl,  // Will be null if not found
        gtv: gtv,
        source: scoreUrl ? source : 'unavailable',
        matchData: matchData
      };

    } catch (error: any) {
      console.error('❌ Fallback scorecard fetch also failed:', error);
      return {
        type: 'iframe' as 'cricket' | 'iframe',
        oldgmid: null,
        scoreUrl: null,  // NO FALLBACK - return null
        source: 'error',
        error: error.message
      };
    }
  }

  /**
   * @deprecated Use getScorecardData instead - now works for all sports
   * Kept for backward compatibility, but redirects to new unified method
   */
  async getCricketScorecardFromZplay(matchId: number) {
    // Redirect to unified method with sport ID 4 (Cricket)
    return this.getScorecardData(matchId, 4);
  }
  
  /**
   * @deprecated Renamed to getScorecardFromZplayDirect
   * Kept for backward compatibility
   */
  async getScorecardFromZplay(matchId: number, sportId: number) {
    return this.getScorecardFromZplayDirect(matchId, sportId);
  }

  /**
   * Get streaming URL for any sport
   */
  getStreamingUrl(matchId: number, sportId: number): string {
    return `https://www.d247.site/stream/directStream?gmid=${matchId}&sid=${sportId}`;
  }
}

export default new ScorecardService(); 