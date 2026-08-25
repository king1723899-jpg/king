import React from 'react'
import IMarket from '../../models/IMarket'
import LFancy from '../../models/LFancy'
import sportsService from '../../services/sports.service'
import scorecardService from '../../services/scorecard.service'
import { useParams } from 'react-router-dom'
import IMatch from '../../models/IMatch'
import { IUserBetStake } from '../../models/IUserStake'
import { useDispatch } from 'react-redux'
import { betPopup, selectFancyType } from '../../redux/actions/bet/betSlice'
import IBet from '../../models/IBet'
import { setCurrentMatch } from '../../redux/actions/sports/sportSlice'
import Score from './components/score'
import CricketScorecard from './components/cricket-scorecard'
import { useWebsocketUser } from '../../context/webSocketUser'
import { useAppSelector } from '../../redux/hooks'
import { selectUserData } from '../../redux/actions/login/loginSlice'
import { isMobile } from 'react-device-detect'
import MatchDetail from './components/match-detail'
import MatchDetailMobile from './components/match-detail-mobile'
import axios from 'axios'
import { RoleType } from '../../models/User'
import authService from '../../services/auth.service'
import { selectInitApp } from '../../redux/actions/common/commonSlice'

type MarketData = {
  markets: IMarket[]
  fancies: LFancy[]
  currentMatch: IMatch
  stake: IUserBetStake
}

interface ScorecardData {
  type: 'cricket' | 'iframe';
  oldgmid?: string;
  scoreUrl?: string;
  matchData?: any;
}

const Odds = () => {
  const [marketDataList, setMarketDataList] = React.useState<MarketData>({} as MarketData)
  const [scorecardData, setScorecardData] = React.useState<ScorecardData | null>(null)
  const [t10Channel, setT10Chanel] = React.useState<any>()
  const [isTvShow, setIsTvShow] = React.useState<boolean>(false)
  const [isScorecardShow, setIsScorecardShow] = React.useState<boolean>(false)
  const userState = useAppSelector(selectUserData)
  const { matchId } = useParams()
  const dispatch = useDispatch()
  const selectFancyT = useAppSelector(selectFancyType)
  const initApp = useAppSelector(selectInitApp)

  const { socketUser } = useWebsocketUser()

  const fetchOddsDetail = async () => {
    try {
      axios
        .all([
          sportsService.getMatchById(matchId!),
          sportsService.getMarketList(matchId!),
          sportsService.getFancyList(matchId!),
        ])
        .then(
          axios.spread((currentMatch, marketData, fancyData) => {
            dispatch(setCurrentMatch(currentMatch.data.data.match))
            
            // Transform new fancy API response format to expected format
            let fancySessions = [];
            if (fancyData.data.data && Array.isArray(fancyData.data.data)) {
              // New format: markets with sections
              fancySessions = fancyData.data.data.flatMap((market: any) => 
                market.section?.map((section: any) => ({
                  _id: section.sid,
                  marketId: section.sid.toString(),
                  fancyName: section.nat,
                  gtype: market.gtype,
                  active: section.gscode === 1,
                  suspended: section.gstatus === 'SUSPENDED' || section.gstatus === 'Ball Running',
                  GameStatus: section.gstatus,
                  BackPrice1: section.odds?.find((o: any) => o.otype === 'back')?.odds || 0,
                  BackSize1: section.odds?.find((o: any) => o.otype === 'back')?.size || 0,
                  LayPrice1: section.odds?.find((o: any) => o.otype === 'lay')?.odds || 0,
                  LaySize1: section.odds?.find((o: any) => o.otype === 'lay')?.size || 0,
                  BackPrice2: 0,
                  BackSize2: 0,
                  LayPrice2: 0,
                  LaySize2: 0,
                  BackPrice3: 0,
                  BackSize3: 0,
                  LayPrice3: 0,
                  LaySize3: 0,
                  min: section.min,
                  max: section.max,
                  sr_no: section.sno,
                  rem: section.rem,
                  ballsess: '',
                  status: section.gscode === 1 ? 'active' : 'inactive',
                  SelectionId: section.sid,
                  RunnerName: section.nat,
                  matchId: parseInt(matchId!),
                  sportId: 4
                })) || []
              );
            } else if (fancyData.data.sessions) {
              // Old format: direct sessions (fallback)
              fancySessions = fancyData.data.sessions;
            }
            
            setMarketDataList({
              currentMatch: currentMatch.data.data.match,
              fancies: fancySessions,
              markets: marketData.data.data.markets,
              stake: currentMatch.data.data.stake,
            })
          }),
        )
    } catch (error) {
      console.log(error)
      fetchOddsDetail()
    }
  }

  React.useEffect(() => {
    return () => {
      dispatch(betPopup({ isOpen: false, betData: {} as IBet }))
    }
  }, [])

  React.useEffect(() => {
    if (initApp.event) {
      sportsService
        .getFancyList(matchId!, selectFancyT)
        .then((fancyData) => {
          //setMarketDataList({ ...marketDataList, fancies: fancyData.data.data })
        })
        .catch((e) => console.log(e.message))
    }
  }, [initApp])

  React.useEffect(() => {
    fetchOddsDetail()
  }, [matchId])

  const fetchT10Stream = async () => {
    if (currentMatch?.isT10) {
      const resp = await authService.gett10Streams()
      if (resp?.data) {
        const dataFilter = resp?.data?.filter(
          (Item: any) => parseInt(Item.gameId) == currentMatch?.matchId,
        )
        setT10Chanel(dataFilter?.[0]?.channel)
      }
    }
  }

  React.useEffect(() => {
    ; (async () => {
      if (selectFancyT && Object.keys(marketDataList).length > 0) {
        const fancyData = await sportsService.getFancyList(matchId!, selectFancyT)
        
        // Transform new fancy API response format to expected format
        let fancySessions = [];
        if (fancyData.data.data && Array.isArray(fancyData.data.data)) {
          // New format: markets with sections
          fancySessions = fancyData.data.data.flatMap((market: any) => 
            market.section?.map((section: any) => ({
              _id: section.sid,
              marketId: section.sid.toString(),
              fancyName: section.nat,
              gtype: market.gtype,
              active: section.gscode === 1,
              suspended: section.gstatus === 'SUSPENDED' || section.gstatus === 'Ball Running',
              GameStatus: section.gstatus,
              BackPrice1: section.odds?.find((o: any) => o.otype === 'back')?.odds || 0,
              BackSize1: section.odds?.find((o: any) => o.otype === 'back')?.size || 0,
              LayPrice1: section.odds?.find((o: any) => o.otype === 'lay')?.odds || 0,
              LaySize1: section.odds?.find((o: any) => o.otype === 'lay')?.size || 0,
              BackPrice2: 0,
              BackSize2: 0,
              LayPrice2: 0,
              LaySize2: 0,
              BackPrice3: 0,
              BackSize3: 0,
              LayPrice3: 0,
              LaySize3: 0,
              min: section.min,
              max: section.max,
              sr_no: section.sno,
              rem: section.rem,
              ballsess: '',
              status: section.gscode === 1 ? 'active' : 'inactive',
              SelectionId: section.sid,
              RunnerName: section.nat,
              matchId: parseInt(matchId!),
              sportId: 4
            })) || []
          );
        } else if (fancyData.data.sessions) {
          // Old format: direct sessions (fallback)
          fancySessions = fancyData.data.sessions;
        }
        
        setMarketDataList({ ...marketDataList, fancies: fancySessions })
      }
    })()
  }, [selectFancyT])

  React.useEffect(() => {
    if (userState.user._id) {
      socketUser.emit('joinRoomMatchIdWUserId', `${userState.user._id}-${matchId}`)
      socketUser.on('connect', () => {
        socketUser.emit('joinRoomMatchIdWUserId', `${userState.user._id}-${matchId}`)
      })
    }
  }, [userState.user])

  React.useEffect(() => {
    fetchT10Stream()
  }, [marketDataList])

  const fetchScorecardData = async (match: IMatch) => {
    if (!match?.matchId || !match?.sportId) {
      console.log('Missing match ID or sport ID for scorecard');
      return;
    }

    try {
      console.log(`ðŸ† Fetching scorecard data for match ${match.matchId}, sport ${match.sportId}`);
      const sportId = typeof match.sportId === 'string' ? parseInt(match.sportId) : match.sportId;
      const data = await scorecardService.getScorecardData(match.matchId, sportId);
      
      if (data) {
        // Type assertion to ensure compatibility with ScorecardData interface
        const typedData: ScorecardData = {
          type: data.type as 'cricket' | 'iframe',
          oldgmid: data.oldgmid || undefined,
          scoreUrl: data.scoreUrl || undefined,
          matchData: data.matchData
        };
        setScorecardData(typedData);
        console.log(`âœ… Scorecard data loaded:`, typedData);
      } else {
        console.log('âš ï¸ No scorecard data available');
        setScorecardData(null);
      }
    } catch (error) {
      console.error('âŒ Error fetching scorecard data:', error);
      setScorecardData(null);
    }
  };

  const scoreBoard = () => {
    if (!currentMatch) {
      return <div>Loading scorecard...</div>;
    }

    // Togglable scorecard like the live TV
    return (
      <div className='card m-b-10' style={{ border: '0px none' }}>
        {!isMobile ? (
          <div className='card-header'>
            <h6 onClick={() => setIsScorecardShow(!isScorecardShow)} className='card-title' style={{ cursor: 'pointer' }}>
              Live Scorecard
              <span className='float-right'>
                <i className='fa fa-chart-line' /> {currentMatch.name}
              </span>
            </h6>
          </div>
        ) : (
          ''
        )}
        {!isMobile && isScorecardShow && (
          <div className='card-body p0'>
            <Score matchId={currentMatch.matchId} sportId={currentMatch.sportId} isT10={currentMatch.isT10 || false} />
          </div>
        )}
        {isMobile && (
          <div className='card-body p0'>
            <Score matchId={currentMatch.matchId} sportId={currentMatch.sportId} isT10={currentMatch.isT10 || false} />
          </div>
        )}
      </div>
    );
  };
  const { currentMatch, markets, fancies } = marketDataList

  // Add useEffect for scorecard data after currentMatch is available
  React.useEffect(() => {
    if (currentMatch) {
      fetchScorecardData(currentMatch);
    }
  }, [currentMatch])

  const t10Tv = (height: string) => {
    if (currentMatch && currentMatch.isT10)
      return (
        <div className='t10-iframe'>
          <iframe
            style={{ height: `${height}px` }}
            src={`https://alpha-n.qnsports.live/route/rih.php?id=${t10Channel}`}
          ></iframe>
        </div>
      )
    else <div></div>
  }

  const otherTv = () => {
    // Use new streaming service with proper gmid and sid parameters
    const streamingUrl = `/stream/test.html?gmid=${currentMatch?.matchId}&sid=${currentMatch?.sportId || 4}`;
    
    return (
      !currentMatch?.isT10 && (
        <div className='card m-b-10' style={{ border: '0px none' }}>
          {!isMobile ? (
            <div className='card-header'>
              <h6 onClick={() => setIsTvShow(!isTvShow)} className='card-title' style={{ cursor: 'pointer' }}>
                Live Match
                <span className='float-right'>
                  <i className='fa fa-tv' /> live stream started
                </span>
              </h6>
            </div>
          ) : (
            ''
          )}
          {!isMobile && isTvShow && (
            <div className='card-body p0'>
              <iframe
                style={{ width: '100%', height: '250px' }}
                src={streamingUrl}
                title="Live Match Stream"
              ></iframe>
            </div>
          )}
          {isMobile && (
            <div className='card-body p0'>
              <iframe
                style={{ width: '100%', height: '250px' }}
                src={streamingUrl}
                title="Live Match Stream"
              ></iframe>
            </div>
          )}
        </div>
      )
    )
  }

  return !isMobile || (isMobile && userState?.user?.role != RoleType.user) ? (
    <MatchDetail
      currentMatch={currentMatch}
      fancies={fancies}
      scoreBoard={scoreBoard}
      marketDataList={marketDataList}
      matchId={matchId}
      markets={markets}
      t10Tv={t10Tv}
      otherTv={otherTv}
    />
  ) : (
    <MatchDetailMobile
      currentMatch={currentMatch}
      fancies={fancies}
      scoreBoard={scoreBoard}
      marketDataList={marketDataList}
      matchId={matchId}
      t10Tv={t10Tv}
      markets={markets}
      otherTv={otherTv}
    />
  )
}
export default React.memo(Odds)


