// /* eslint-disable */
// import IMarket, { OddsType } from '../../../models/IMarket'
// import React, { MouseEvent } from 'react'
// import IRunner from '../../../models/IRunner'
// import { SocketContext } from '../../../context/webSocket'
// import { AvailableToBackLay } from './available-to-back-lay'
// import { betPopup } from '../../../redux/actions/bet/betSlice'
// import { connect } from 'react-redux'
// import PnlCalculate from './pnl-calculate'
// // import { checkoddslength } from '../../../utils/helper'
// import { isMobile } from 'react-device-detect'
// import BookPopup from './fancy/book-popup'
// import IMatch from '../../../models/IMatch'
// import { setRules } from '../../../redux/actions/common/commonSlice'
// import UserBookPopup from './user-book-popup'
// import '../../../styles/market-layout.css'

// interface Props {
//   data: IMarket[]
//   getMarketBook?: any
//   bet?: any
//   fancySelectionId?: any
//   currentMatch?: IMatch
//   setRules: (data: { open: boolean; type: string }) => void
//   marketUserBookId?: any
// }

// class MatchOdds extends React.PureComponent<
//   Props,
//   {
//     runnersData: any
//     runnersDataPrev: any
//     profitLoss: any
//     getMarketBook: any
//     remarkMarket: any
//     runnersName: Record<string, string>
//   }
// > {
//   static contextType = SocketContext
//   context!: React.ContextType<typeof SocketContext>
//   pollInterval: any

//   constructor(props: Props) {
//     super(props)
//     const selections: any = {}
//     const profitLoss: any = {}
//     const remarkMarket: any = {}
//     let runnersName: any = {}
//     props.data.forEach(async (market: IMarket) => {
//       market.runners.forEach((runner: IRunner) => {
//         runnersName = {
//           ...runnersName,
//           [market.marketId]: {
//             ...runnersName[market.marketId],
//             [runner.selectionId]: runner.runnerName,
//           },
//         }
//         selections[market.marketId] = market
//         profitLoss[runner.selectionId] = 0
//       })
//       remarkMarket[market.marketId] = ''
//     })
//     this.state = {
//       runnersData: selections,
//       runnersDataPrev: JSON.parse(JSON.stringify(selections)),
//       profitLoss,
//       getMarketBook: props.getMarketBook,
//       remarkMarket: remarkMarket,
//       runnersName: runnersName,
//     }
//   }

//   componentDidMount(): void {
//     this.socketEvents()
//   }

//   componentWillUnmount(): void {
//     this.context.socket.off('getMarketData')
//     this.leaveMarketRoom()
//     if (this.pollInterval) {
//       clearInterval(this.pollInterval)
//     }
//   }

//   componentDidUpdate(prevProps: Readonly<Props>): void {
//     if (prevProps.data !== this.props.data) {
//       this.socketEvents()
//     }
//   }

//   socketEvents = () => {
//     // Since WebSocket real-time updates are not working properly, 
//     // we'll use polling to update match odds every 0.5 seconds
//     this.pollMarketData()
    
//     this.context.socket.emit('joinRoom', this.props.currentMatch?.matchId)
//     this.props.data.forEach(async (market: IMarket) => {
//       this.context.socket.emit('joinMarketRoom', market.marketId)
//     })
//     this.getSocketEvents()
//     this.context.socket.on('connect', () => {
//       this.joinMarketRoom()
//     })
//     this.context.socket.on('reconnect', () => {
//       this.joinMarketRoom()
//     })
//   }

//   pollMarketData = () => {
//     const handler = () => {
//       // Poll once per match instead of per market to avoid duplicate requests
//       // Use Array.from() to convert Set to array (avoids TypeScript downlevelIteration error)
//       const matchIds = Array.from(new Set(this.props.data.map(market => market.matchId)))
      
//       // Process matches sequentially to avoid race conditions and duplicates
//       matchIds.forEach(async (matchId) => {
//         try {
//           // Get the token from localStorage
//           const token = window.location.pathname.includes('admin') 
//             ? localStorage.getItem('token-admin')
//             : localStorage.getItem('token')
          
//           console.log(`🔄 Polling sessions for matchId: ${matchId}`)
          
//           // Fix URL construction to avoid double /api/ prefix
//           const baseUrl = process.env.REACT_APP_API_BASEURL || 'http://localhost:3010'
//           const apiUrl = baseUrl.endsWith('/api') 
//             ? `${baseUrl}sessions-data?MatchID=${matchId}`  // Base URL already includes /api
//             : `${baseUrl}sessions-data?MatchID=${matchId}` // Add /api to base URL
          
//           const response = await fetch(apiUrl, {
//             headers: {
//               'Authorization': token ? `Bearer ${token}` : '',
//               'Content-Type': 'application/json'
//             }
//           })
//           const data = await response.json()
          
//           console.log(`📊 Sessions response for match ${matchId}:`, data)
          
//           // Update response handling to match the standardized response format (same as fancy-data)
//           if (data && !data.error && Array.isArray(data.data)) {
//             // Filter only match and bookmaker data for faster processing
//             const matchAndBookmakerData = data.data.filter((market: any) => 
//               market.gtype === 'match' || market.gtype === 'match1'
//             );
            
//             console.log(`🎯 Filtered ${matchAndBookmakerData.length} match/bookmaker markets from ${data.data.length} total markets`);
//             console.log('🔍 Filtered markets:', matchAndBookmakerData.map((m: any) => ({ 
//               marketId: m.marketId, 
//               gtype: m.gtype, 
//               marketName: m.marketName,
//               runnersCount: m.runners?.length || 0
//             })));
            
//             // Batch update all markets for this match to avoid multiple setState calls
//             const updatedMarketsData: any = {}
            
//             matchAndBookmakerData.forEach((market: any) => {
//               // Transform the response to match the expected format for MatchOdds component
//               const transformedMarket = {
//                 _id: market.marketId?.toString() || market.externalData?.mid?.toString(),
//                 marketId: market.marketId?.toString() || market.externalData?.mid?.toString(),
//                 marketName: market.marketName || market.externalData?.mname,
//                 matchId: market.externalData?.gmid || matchId,
//                 gtype: market.gtype || market.externalData?.gtype,
//                 oddsType: market.gtype === 'match1' ? 'BM' : 'MATCH_ODDS',
//                 status: market.externalData?.status || 'OPEN',
//                 runners: (market.runners || []).map((runner: any) => {
//                   // Transform odds based on market type
//                   const isBookmaker = market.gtype === 'match1'
                  
//                   // ✅ ENHANCED: Better debugging for bookmaker markets
//                   console.log(`🔄 Processing ${market.marketName} (${market.gtype}):`, {
//                     isBookmaker,
//                     marketId: market.marketId,
//                     marketStatus: market.externalData?.status,
//                     runnersCount: market.runners?.length
//                   })
                  
//                   // For bookmaker markets, use the existing price values directly from API
//                   const transformOdds = (oddsArray: any[]) => {
//                     if (!oddsArray || !Array.isArray(oddsArray)) {
//                       console.log(`⚠️ Invalid odds array for ${market.marketName}:`, oddsArray)
//                       return []
//                     }
                    
//                     const transformed = oddsArray.map((odd: any) => ({
//                       // For bookmaker: use existing price and price1 directly (API already has correct format)
//                       // For regular odds: use price as-is
//                       price: isBookmaker ? odd.price : odd.price,  // Use API price directly for bookmaker
//                       price1: isBookmaker ? odd.price1 || odd.price?.toFixed(2) : odd.price?.toFixed(2), // Use API price1 for bookmaker
//                       size: odd.size || 0
//                     }))
                    
//                     // ✅ DEBUG: Log the transformation
//                     if (isBookmaker) {
//                       console.log(`📊 Transformed ${market.marketName} odds:`, {
//                         original: oddsArray,
//                         transformed: transformed
//                       })
//                     }
                    
//                     return transformed
//                   }
                  
//                   const transformedRunner = {
//                     selectionId: runner.selectionId,
//                     runnerName: runner.selectionName,
//                     // FIX: For bookmaker markets, use individual runner status from externalData.gstatus
//                     // For match odds, use the runner status as-is
//                     status: (() => {
//                       if (market.gtype === 'match1') {
//                         // For bookmaker (match1), check individual runner gstatus from externalData
//                         const externalRunner = market.externalData?.section?.find((s: any) => 
//                           s.sid?.toString() === runner.selectionId?.toString() || 
//                           s.sno?.toString() === runner.sortPriority?.toString()
//                         );
                        
//                         if (externalRunner) {
//                           // Individual runner suspension for bookmaker
//                           return externalRunner.gstatus === 'SUSPENDED' ? 'SUSPENDED' : 'ACTIVE';
//                         }
//                       }
                      
//                       // For regular match odds, use runner status as-is
//                       return runner.status || 'ACTIVE';
//                     })(),
//                     sortPriority: runner.sortPriority,
//                     ex: {
//                       availableToBack: transformOdds(runner.back),
//                       availableToLay: transformOdds(runner.lay)
//                     },
//                     // Keep the original back/lay arrays for compatibility
//                     back: transformOdds(runner.back),
//                     lay: transformOdds(runner.lay),
//                     // Add gtype for bet validation
//                     gtype: market.gtype
//                   }
                  
//                   // ✅ DEBUG: Log runner transformation for bookmaker markets
//                   if (isBookmaker) {
//                     console.log(`🏃 Transformed runner ${transformedRunner.runnerName}:`, {
//                       selectionId: transformedRunner.selectionId,
//                       status: transformedRunner.status,
//                       backOddsCount: transformedRunner.ex.availableToBack?.length || 0,
//                       layOddsCount: transformedRunner.ex.availableToLay?.length || 0,
//                       backOdds: transformedRunner.ex.availableToBack,
//                       layOdds: transformedRunner.ex.availableToLay,
//                       originalBack: runner.back,
//                       originalLay: runner.lay
//                     })
//                   }
                  
//                   return transformedRunner
//                 }) || []
//               }
              
//               updatedMarketsData[market.marketId || market.externalData?.mid] = transformedMarket
//             })
            
//             // Single setState call for all markets of this match
//             this.setState((prev) => ({
//               runnersData: { 
//                 ...prev.runnersData, 
//                 ...updatedMarketsData
//               },
//             }))
            
//             console.log(`✅ Updated ${Object.keys(updatedMarketsData).length} match/bookmaker markets for match ${matchId}`)
//             console.log('📋 Updated market IDs:', Object.keys(updatedMarketsData))
//             console.log('🔄 Total markets in state:', Object.keys(this.state.runnersData).length)
//           } else {
//             console.log(`⚠️ No markets data in response for match ${matchId}`)
//           }
//         } catch (error) {
//           console.error(`❌ Error polling market data for match ${matchId}:`, error)
//           // Don't stop polling on error, just log it and continue
//         }
//       })
//     }
    
//     // Clear any existing polling interval
//     if (this.pollInterval) {
//       clearInterval(this.pollInterval)
//     }
    
//     // Poll every 300ms for ultra-fast match/bookmaker updates (optimized for high frequency trading)
//     this.pollInterval = setInterval(handler, 300)
    
//     // Also run once immediately
//     handler()
//   }

//   joinMarketRoom = () => {
//     if (this.props.currentMatch) {
//       this.context.socket.emit('joinRoom', this.props.currentMatch.matchId)
//     }
//     this.props.data.forEach(async (market: IMarket) => {
//       this.context.socket.emit('joinMarketRoom', market.marketId)
//     })
//   }

//   leaveMarketRoom = () => {
//     this.props.data.forEach(async (market: IMarket) => {
//       this.context.socket.emit('leaveRoom', market.marketId)
//       this.context.socket.emit('leaveRoom', market.matchId)
//     })
//   }

//   getSocketEvents = () => {
//     const handler = (market: IMarket) => {
//       this.setState((prev) => ({
//         runnersData: { ...prev.runnersData, [market.marketId]: market },
//       }))
//     }
//     this.context.socket.on('getMarketData', handler)
//   }

//   offplaylimit = (market: any) => {
//     const inplayl =
//       market.oddsType == OddsType.BM
//         ? this.props.currentMatch?.inPlayBookMaxLimit
//         : this.props.currentMatch?.inPlayMaxLimit
//     const offplayl =
//       market.oddsType == OddsType.BM
//         ? this.props.currentMatch?.offPlayBookMaxLimit
//         : this.props.currentMatch?.offPlayMaxLimit
//     return this.props.currentMatch?.inPlay ? inplayl : offplayl
//   }

//   render(): React.ReactNode {
//     const { data, getMarketBook } = this.props
//     ///console.log(data)
//     const { runnersData } = this.state
//     return (
//       <div>
//         {data &&
//           data.map((market: IMarket) => {
//             const selectionsPrev: any = {}
//             const oddsData = runnersData ? runnersData[market.marketId] : null
//             let setVisibleMarketStatus = false
//             if (oddsData) {
//               setVisibleMarketStatus = !!oddsData?.['runners']?.[0]?.ex
//             }
//             const classforheadingfirst =
//               isMobile && market.oddsType == OddsType.F ? 'box-6' : 'box-4'
//             const classforheading = isMobile && market.oddsType == OddsType.F ? 'box-2' : 'box-1'
//             if (!setVisibleMarketStatus) return null
//             return (
//               <div key={market._id}>
//                 <div className='market-title mt-1'>
//                   {market.marketName}
//                   <a
//                     href='#Bookmaker-market'
//                     onClick={(e: MouseEvent<HTMLAnchorElement>) => {
//                       e.preventDefault()
//                       this.props.setRules({
//                         open: true,
//                         type: market.oddsType === OddsType.BM ? 'Bookmaker' : market.oddsType,
//                       })
//                     }}
//                     className='m-r-5 game-rules-icon'
//                   >
//                     <span>
//                       <i className='fa fa-info-circle float-right' />
//                     </span>
//                   </a>
//                   <span className='float-right m-r-10'>
//                     Maximum Bet <span>{this.offplaylimit(market)}</span>
//                   </span>
//                 </div>
//                 <div className='table-header'>
//                   <div className={`float-left country-name ${classforheadingfirst} min-max`}>
//                     <b />
//                   </div>
                  
//                   {/* Check if bookmaker has single values to adjust header layout */}
//                   {(() => {
//                     const isBookmaker = market.oddsType === OddsType.BM
//                     const hasOnlySingleValues = isBookmaker && oddsData?.runners?.[0]?.ex?.availableToBack?.length === 1 && oddsData?.runners?.[0]?.ex?.availableToLay?.length === 1
                    
//                     if (isBookmaker && hasOnlySingleValues) {
//                       // For bookmaker with single values, show only main Back and Lay headers
//                       return (
//                         <>
//                           <div className={`back ${classforheading} float-left text-center`}>
//                             <b>BACK</b>
//                           </div>
//                           <div className={`lay ${classforheading} float-left text-center`}>
//                             <b>LAY</b>
//                           </div>
//                         </>
//                       )
//                     } else {
//                       // Standard layout with all boxes
//                       return (
//                         <>
//                           {/* Show header boxes for all markets except Fancy on mobile */}
//                           {(!isMobile || market.oddsType != OddsType.F) && (
//                             <>
//                               <div className='box-1 float-left' />
//                               <div className='box-1 float-left' />
//                             </>
//                           )}

//                           <div className={`back ${classforheading} float-left text-center`}>
//                             <b>BACK</b>
//                           </div>
//                           <div className={`lay ${classforheading} float-left text-center`}>
//                             <b>LAY</b>
//                           </div>
//                           {(!isMobile || market.oddsType != OddsType.F) && (
//                             <>
//                               <div className='box-1 float-left' />
//                               <div className='box-1 float-left' />
//                             </>
//                           )}
//                         </>
//                       )
//                     }
//                   })()}
//                 </div>
//                 {oddsData &&
//                   oddsData?.runners
//                     ?.sort((a: any, b: any) => a?.sortPriority - b?.sortPriority)
//                     /* .map((runner: IRunner) => {
//                       runner = {
//                         ...runner,
//                         runnerName: this.state.runnersName?.[market.marketId]?.[runner.selectionId],
//                       } */
//                      //back array reverse for odds
//                         .map((runner: IRunner) => {
//                           runner = {
//                             ...runner,
//                             runnerName:
//                               this.state.runnersName?.[market.marketId]?.[
//                                 runner.selectionId
//                               ],
//                             ex: {
//                               ...runner.ex,
//                               availableToBack: [
//                                 ...(runner.ex?.availableToBack || []),
//                               ].reverse(), 
//                               availableToLay: runner.ex?.availableToLay || [],
//                             },
//                           };
//                       return (
//                         <div key={runner.selectionId}>
//                           <div
//                             data-title={runner.status}
//                             className={`table-row ${runner.status === 'SUSPENDED' ? 'suspended' : ''
//                               }`}
//                           >
//                             <div className={` country-name ${classforheadingfirst}`}>
//                               <span className='team-name'>
//                                 <b>{runner.runnerName}</b>
//                               </span>
//                               <p>
//                                 {getMarketBook[`${market.marketId}_${runner.selectionId}`] ? (
//                                   <span
//                                     className={
//                                       getMarketBook[`${market.marketId}_${runner.selectionId}`] > 0
//                                         ? 'green'
//                                         : 'red'
//                                     }
//                                   >
//                                     {getMarketBook[
//                                       `${market.marketId}_${runner.selectionId}`
//                                     ].toLocaleString()}
//                                   </span>
//                                 ) : (
//                                   <span className='' style={{ color: 'black' }}>
//                                     {'0'}
//                                   </span>
//                                 )}

//                                 {/* ✅ UNIFIED: Use same PnlCalculate component for all market types (match odds, bookmaker, fancy) */}
//                                 <PnlCalculate
//                                   marketId={market.marketId}
//                                   selectionId={runner.selectionId}
//                                 />
//                               </p>
//                             </div>
//                             <AvailableToBackLay
//                               selections={runner.ex}
//                               selectionsPrev={selectionsPrev}
//                               market={market}
//                               runner={runner}
//                             />
//                           </div>
//                         </div>
//                       )
//                     })}
//                 {this.state.remarkMarket[market.marketId] ? (
//                   <div className='table-remark text-right remark'>
//                     {this.state.remarkMarket[market.marketId]}
//                   </div>
//                 ) : (
//                   ''
//                 )}
//               </div>
//             )
//           })}
//         {this.props.fancySelectionId && <BookPopup />}
//         {this.props.marketUserBookId && <UserBookPopup />}
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state: any) => ({
//   bet: state.betReducer.bet,
//   getMarketBook: state.betReducer.userBookMarketList,
//   fancySelectionId: state.betReducer.fancyMatchAndSelectionId,
//   currentMatch: state.sportReducer.currentMatch,
//   marketUserBookId: state.betReducer.marketBookAndSelectionId,
// })

// const actionCreators = {
//   betPopup,
//   setRules,
// }
// export default connect(mapStateToProps, actionCreators)(MatchOdds)
/* eslint-disable */




// import IMarket, { OddsType } from "../../../models/IMarket";
// import React, { MouseEvent } from "react";
// import IRunner from "../../../models/IRunner";
// import { SocketContext } from "../../../context/webSocket";
// import { AvailableToBackLay } from "./available-to-back-lay";
// import { betPopup } from "../../../redux/actions/bet/betSlice";
// import { connect } from "react-redux";
// import PnlCalculate from "./pnl-calculate";
// import { isMobile } from "react-device-detect";
// import BookPopup from "./fancy/book-popup";
// import IMatch from "../../../models/IMatch";
// import { setRules } from "../../../redux/actions/common/commonSlice";
// import UserBookPopup from "./user-book-popup";
// import "../../../styles/market-layout.css";

// // Standardized Header Component for all market types
// // ... (previous imports and code)

// // Updated Header Component for all market types
// interface MarketHeaderProps {
//   market: IMarket;
//   hasSingleValues: boolean;
//   currentMatch?: IMatch;
// }

// const MarketHeader: React.FC<MarketHeaderProps> = ({
//   market,
//   hasSingleValues,
//   currentMatch,
// }) => {
//   const teamNameClass =
//     isMobile && market.oddsType === OddsType.F ? "box-6" : "box-4";
//   const backLayClass =
//     isMobile && market.oddsType === OddsType.F ? "box-2" : "box-1";
//   const isBookmaker = market.oddsType === OddsType.BM;
  
//   // ✅ CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
//   const isCricketBookmaker = isBookmaker && (market.sportId === 4 || currentMatch?.sportId === 4);

//   // Determine if we should show spacing boxes
//   const showSpacingBoxes = isCricketBookmaker ? true : (!isBookmaker || (isBookmaker && !hasSingleValues));

//   // Special case for Bookmaker with single values (but not cricket)
//   const isBookmakerSingle = isBookmaker && hasSingleValues && !isCricketBookmaker;

//   return (
//     <div className="table-header">
//       <div className={`float-left country-name ${teamNameClass} min-max`}>
//         <b />
//       </div>

//       {/* Left spacing boxes */}
//       {showSpacingBoxes && (
//         <>
//           <div className="box-1 float-left" />
//           <div className="box-1 float-left" />
//         </>
//       )}

//       {/* Bookmaker with single values: Two extra boxes (Left) */}
//       {isBookmakerSingle && (
//         <>
//           <div className="box-1 float-left" />
//           <div className="box-1 float-left" />
//         </>
//       )}

//       {/* BACK and LAY boxes */}
//       <div className={`back ${backLayClass} float-left text-center`}>
//         <b>BACK</b>
//       </div>

//       <div className={`lay ${backLayClass} float-left text-center`}>
//         <b>LAY</b>
//       </div>

//       {/* Right spacing boxes */}
//       {showSpacingBoxes && (
//         <>
//           <div className="box-1 bg-red-500 float-left" />
//           <div className="box-1 float-left" />
//         </>
//       )}

//       {/* Bookmaker with single values: Two extra boxes (Right) */}
//       {isBookmakerSingle && (
//         <>
//           <div className="box-1 float-left" />
//           <div className="box-1 float-left" />
//         </>
//       )}
//     </div>
//   );
// };


// interface Props {
//   data: IMarket[];
//   getMarketBook?: any;
//   bet?: any;
//   fancySelectionId?: any;
//   currentMatch?: IMatch;
//   setRules: (data: { open: boolean; type: string }) => void;
//   marketUserBookId?: any;
// }

// class MatchOdds extends React.PureComponent<
//   Props,
//   {
//     runnersData: any;
//     runnersDataPrev: any;
//     profitLoss: any;
//     getMarketBook: any;
//     remarkMarket: any;
//     runnersName: Record<string, string>;
//   }
// > {
//   static contextType = SocketContext;
//   context!: React.ContextType<typeof SocketContext>;
//   pollInterval: any;

//   constructor(props: Props) {
//     super(props);
//     const selections: any = {};
//     const profitLoss: any = {};
//     const remarkMarket: any = {};
//     let runnersName: any = {};
//     props.data.forEach(async (market: IMarket) => {
//       market.runners.forEach((runner: IRunner) => {
//         runnersName = {
//           ...runnersName,
//           [market.marketId]: {
//             ...runnersName[market.marketId],
//             [runner.selectionId]: runner.runnerName,
//           },
//         };
//         selections[market.marketId] = market;
//         profitLoss[runner.selectionId] = 0;
//       });
//       remarkMarket[market.marketId] = "";
//     });
//     this.state = {
//       runnersData: selections,
//       runnersDataPrev: JSON.parse(JSON.stringify(selections)),
//       profitLoss,
//       getMarketBook: props.getMarketBook,
//       remarkMarket: remarkMarket,
//       runnersName: runnersName,
//     };
//   }

//   componentDidMount(): void {
//     this.socketEvents();
//   }

//   componentWillUnmount(): void {
//     this.context.socket.off("getMarketData");
//     this.leaveMarketRoom();
//     if (this.pollInterval) {
//       clearInterval(this.pollInterval);
//     }
//   }

//   componentDidUpdate(prevProps: Readonly<Props>): void {
//     if (prevProps.data !== this.props.data) {
//       this.socketEvents();
//     }
//   }

//   socketEvents = () => {
//     // Since WebSocket real-time updates are not working properly,
//     // we'll use polling to update match odds every 0.5 seconds
//     this.pollMarketData();

//     this.context.socket.emit("joinRoom", this.props.currentMatch?.matchId);
//     this.props.data.forEach(async (market: IMarket) => {
//       this.context.socket.emit("joinMarketRoom", market.marketId);
//     });
//     this.getSocketEvents();
//     this.context.socket.on("connect", () => {
//       this.joinMarketRoom();
//     });
//     this.context.socket.on("reconnect", () => {
//       this.joinMarketRoom();
//     });
//   };

//   pollMarketData = () => {
//     const handler = () => {
//       // Poll once per match instead of per market to avoid duplicate requests
//       // Use Array.from() to convert Set to array (avoids TypeScript downlevelIteration error)
//       const matchIds = Array.from(
//         new Set(this.props.data.map((market) => market.matchId))
//       );

//       // Process matches sequentially to avoid race conditions and duplicates
//       matchIds.forEach(async (matchId) => {
//         try {
//           // Get the token from localStorage
//           const token = window.location.pathname.includes("admin")
//             ? localStorage.getItem("token-admin")
//             : localStorage.getItem("token");

//           console.log(`🔄 Polling sessions for matchId: ${matchId}`);

//           // Fix URL construction to avoid double /api/ prefix
//           const baseUrl =
//             process.env.REACT_APP_API_BASEURL || "http://localhost:3010";
//           const apiUrl = baseUrl.endsWith("/api")
//             ? `${baseUrl}sessions-data?MatchID=${matchId}` // Base URL already includes /api
//             : `${baseUrl}sessions-data?MatchID=${matchId}`; // Add /api to base URL

//           const response = await fetch(apiUrl, {
//             headers: {
//               Authorization: token ? `Bearer ${token}` : "",
//               "Content-Type": "application/json",
//             },
//           });
//           const data = await response.json();

//           console.log(`📊 Sessions response for match ${matchId}:`, data);

//           // Update response handling to match the standardized response format (same as fancy-data)
//           if (data && !data.error && Array.isArray(data.data)) {
//             // Filter only match and bookmaker data for faster processing
//             const matchAndBookmakerData = data.data.filter(
//               (market: any) =>
//                 market.gtype === "match" || market.gtype === "match1"
//             );

//             console.log(
//               `🎯 Filtered ${matchAndBookmakerData.length} match/bookmaker markets from ${data.data.length} total markets`
//             );
//             console.log(
//               "🔍 Filtered markets:",
//               matchAndBookmakerData.map((m: any) => ({
//                 marketId: m.marketId,
//                 gtype: m.gtype,
//                 marketName: m.marketName,
//                 runnersCount: m.runners?.length || 0,
//               }))
//             );

//             // Batch update all markets for this match to avoid multiple setState calls
//             const updatedMarketsData: any = {};

//             matchAndBookmakerData.forEach((market: any) => {
//               // Transform the response to match the expected format for MatchOdds component
//               const transformedMarket = {
//                 _id:
//                   market.marketId?.toString() ||
//                   market.externalData?.mid?.toString(),
//                 marketId:
//                   market.marketId?.toString() ||
//                   market.externalData?.mid?.toString(),
//                 marketName: market.marketName || market.externalData?.mname,
//                 matchId: market.externalData?.gmid || matchId,
//                 gtype: market.gtype || market.externalData?.gtype,
//                 oddsType: market.gtype === "match1" ? "BM" : "MATCH_ODDS",
//                 status: market.externalData?.status || "OPEN",
//                 runners:
//                   (market.runners || []).map((runner: any) => {
//                     // Transform odds based on market type
//                     const isBookmaker = market.gtype === "match1";

//                     // ✅ ENHANCED: Better debugging for bookmaker markets
//                     console.log(
//                       `🔄 Processing ${market.marketName} (${market.gtype}):`,
//                       {
//                         isBookmaker,
//                         marketId: market.marketId,
//                         marketStatus: market.externalData?.status,
//                         runnersCount: market.runners?.length,
//                       }
//                     );

//                     // For bookmaker markets, use the existing price values directly from API
//                     const transformOdds = (oddsArray: any[]) => {
//                       if (!oddsArray || !Array.isArray(oddsArray)) {
//                         console.log(
//                           `⚠️ Invalid odds array for ${market.marketName}:`,
//                           oddsArray
//                         );
//                         return [];
//                       }

//                       const transformed = oddsArray.map((odd: any) => ({
//                         // For bookmaker: use existing price and price1 directly (API already has correct format)
//                         // For regular odds: use price as-is
//                         price: isBookmaker ? odd.price : odd.price, // Use API price directly for bookmaker
//                         price1: isBookmaker
//                           ? odd.price1 || odd.price?.toFixed(2)
//                           : odd.price?.toFixed(2), // Use API price1 for bookmaker
//                         size: odd.size || 0,
//                       }));

//                       // ✅ DEBUG: Log the transformation
//                       if (isBookmaker) {
//                         console.log(
//                           `📊 Transformed ${market.marketName} odds:`,
//                           {
//                             original: oddsArray,
//                             transformed: transformed,
//                           }
//                         );
//                       }

//                       return transformed;
//                     };

//                     const transformedRunner = {
//                       selectionId: runner.selectionId,
//                       runnerName: runner.selectionName,
//                       // FIX: For bookmaker markets, use individual runner status from externalData.gstatus
//                       // For match odds, use the runner status as-is
//                       status: (() => {
//                         if (market.gtype === "match1") {
//                           // For bookmaker (match1), check individual runner gstatus from externalData
//                           const externalRunner =
//                             market.externalData?.section?.find(
//                               (s: any) =>
//                                 s.sid?.toString() ===
//                                   runner.selectionId?.toString() ||
//                                 s.sno?.toString() ===
//                                   runner.sortPriority?.toString()
//                             );

//                           if (externalRunner) {
//                             // Individual runner suspension for bookmaker
//                             return externalRunner.gstatus === "SUSPENDED"
//                               ? "SUSPENDED"
//                               : "ACTIVE";
//                           }
//                         }

//                         // For regular match odds, use runner status as-is
//                         return runner.status || "ACTIVE";
//                       })(),
//                       sortPriority: runner.sortPriority,
//                       ex: {
//                         availableToBack: transformOdds(runner.back),
//                         availableToLay: transformOdds(runner.lay),
//                       },
//                       // Keep the original back/lay arrays for compatibility
//                       back: transformOdds(runner.back),
//                       lay: transformOdds(runner.lay),
//                       // Add gtype for bet validation
//                       gtype: market.gtype,
//                     };

//                     // ✅ DEBUG: Log runner transformation for bookmaker markets
//                     if (isBookmaker) {
//                       console.log(
//                         `🏃 Transformed runner ${transformedRunner.runnerName}:`,
//                         {
//                           selectionId: transformedRunner.selectionId,
//                           status: transformedRunner.status,
//                           backOddsCount:
//                             transformedRunner.ex.availableToBack?.length || 0,
//                           layOddsCount:
//                             transformedRunner.ex.availableToLay?.length || 0,
//                           backOdds: transformedRunner.ex.availableToBack,
//                           layOdds: transformedRunner.ex.availableToLay,
//                           originalBack: runner.back,
//                           originalLay: runner.lay,
//                         }
//                       );
//                     }

//                     return transformedRunner;
//                   }) || [],
//               };

//               updatedMarketsData[market.marketId || market.externalData?.mid] =
//                 transformedMarket;
//             });

//             // Single setState call for all markets of this match
//             this.setState((prev) => ({
//               runnersData: {
//                 ...prev.runnersData,
//                 ...updatedMarketsData,
//               },
//             }));

//             console.log(
//               `✅ Updated ${
//                 Object.keys(updatedMarketsData).length
//               } match/bookmaker markets for match ${matchId}`
//             );
//             console.log(
//               "📋 Updated market IDs:",
//               Object.keys(updatedMarketsData)
//             );
//             console.log(
//               "🔄 Total markets in state:",
//               Object.keys(this.state.runnersData).length
//             );
//           } else {
//             console.log(`⚠️ No markets data in response for match ${matchId}`);
//           }
//         } catch (error) {
//           console.error(
//             `❌ Error polling market data for match ${matchId}:`,
//             error
//           );
//           // Don't stop polling on error, just log it and continue
//         }
//       });
//     };

//     // Clear any existing polling interval
//     if (this.pollInterval) {
//       clearInterval(this.pollInterval);
//     }

//     // Poll every 300ms for ultra-fast match/bookmaker updates (optimized for high frequency trading)
//     this.pollInterval = setInterval(handler, 300);

//     // Also run once immediately
//     handler();
//   };

//   joinMarketRoom = () => {
//     if (this.props.currentMatch) {
//       this.context.socket.emit("joinRoom", this.props.currentMatch.matchId);
//     }
//     this.props.data.forEach(async (market: IMarket) => {
//       this.context.socket.emit("joinMarketRoom", market.marketId);
//     });
//   };

//   leaveMarketRoom = () => {
//     this.props.data.forEach(async (market: IMarket) => {
//       this.context.socket.emit("leaveRoom", market.marketId);
//       this.context.socket.emit("leaveRoom", market.matchId);
//     });
//   };

//   getSocketEvents = () => {
//     const handler = (market: IMarket) => {
//       this.setState((prev) => ({
//         runnersData: { ...prev.runnersData, [market.marketId]: market },
//       }));
//     };
//     this.context.socket.on("getMarketData", handler);
//   };

//   offplaylimit = (market: any) => {
//     const inplayl =
//       market.oddsType == OddsType.BM
//         ? this.props.currentMatch?.inPlayBookMaxLimit
//         : this.props.currentMatch?.inPlayMaxLimit;
//     const offplayl =
//       market.oddsType == OddsType.BM
//         ? this.props.currentMatch?.offPlayBookMaxLimit
//         : this.props.currentMatch?.offPlayMaxLimit;
//     return this.props.currentMatch?.inPlay ? inplayl : offplayl;
//   };

//   render(): React.ReactNode {
//     const { data, getMarketBook } = this.props;
//     const { runnersData } = this.state;
//     return (
//       <div>
//         {data &&
//           data.map((market: IMarket) => {
//             const selectionsPrev: any = {};
//             const oddsData = runnersData ? runnersData[market.marketId] : null;
//             let setVisibleMarketStatus = false;
//             if (oddsData) {
//               setVisibleMarketStatus = !!oddsData?.["runners"]?.[0]?.ex;
//             }
//             if (!setVisibleMarketStatus) return null;

//             // Check if bookmaker market has single values
//             const isBookmakerMarket = market.oddsType === OddsType.BM;
//             const hasSingleValues =
//               isBookmakerMarket &&
//               oddsData?.runners?.[0]?.ex?.availableToBack?.length === 1 &&
//               oddsData?.runners?.[0]?.ex?.availableToLay?.length === 1;

//             return (
//               <div key={market._id}>
//                 <div className="market-title mt-1">
//                   {market.marketName}
//                   <a
//                     href="#Bookmaker-market"
//                     onClick={(e: MouseEvent<HTMLAnchorElement>) => {
//                       e.preventDefault();
//                       this.props.setRules({
//                         open: true,
//                         type:
//                           market.oddsType === OddsType.BM
//                             ? "Bookmaker"
//                             : market.oddsType,
//                       });
//                     }}
//                     className="m-r-5 game-rules-icon"
//                   >
//                     <span>
//                       <i className="fa fa-info-circle float-right" />
//                     </span>
//                   </a>
//                   <span className="float-right m-r-10">
//                     Maximum Bet <span>{this.offplaylimit(market)}</span>
//                   </span>
//                 </div>

//                 {/* Use standardized header for all market types */}
//                 <MarketHeader
//                   market={market}
//                   hasSingleValues={hasSingleValues}
//                   currentMatch={this.props.currentMatch}
//                 />

//                 {oddsData &&
//                   oddsData?.runners
//                     ?.sort(
//                       (a: any, b: any) => a?.sortPriority - b?.sortPriority
//                     )
//                     .map((runner: IRunner) => {
//                       runner = {
//                                             ...runner,
//                                             runnerName:
//                                               this.state.runnersName?.[market.marketId]?.[
//                                                 runner.selectionId
//                                               ],
//                                             ex: {
//                                               ...runner.ex,
//                                               availableToBack: [
//                                                 ...(runner.ex?.availableToBack || []),
//                                               ].reverse(), 
//                                               availableToLay: runner.ex?.availableToLay || [],
//                                             },
//                                           };
//                       return (
//                         <div key={runner.selectionId}>
//                           <div
//                             data-title={runner.status}
//                             className={`table-row ${
//                               runner.status === "SUSPENDED" ? "suspended" : ""
//                             }`}
//                           >
//                             <div
//                               className={`country-name ${
//                                 isMobile && market.oddsType === OddsType.F
//                                   ? "box-6"
//                                   : "box-4"
//                               }`}
//                             >
//                               <span className="team-name">
//                                 <b>{runner.runnerName}</b>
//                               </span>
//                               <p>
//                                 {getMarketBook[
//                                   `${market.marketId}_${runner.selectionId}`
//                                 ] ? (
//                                   <span
//                                     className={
//                                       getMarketBook[
//                                         `${market.marketId}_${runner.selectionId}`
//                                       ] > 0
//                                         ? "green"
//                                         : "red"
//                                     }
//                                   >
//                                     {getMarketBook[
//                                       `${market.marketId}_${runner.selectionId}`
//                                     ].toLocaleString()}
//                                   </span>
//                                 ) : (
//                                   <span className="" style={{ color: "black" }}>
//                                     {"0"}
//                                   </span>
//                                 )}

//                                 {/* Unified PNL calculation for all market types */}
//                                 <PnlCalculate
//                                   marketId={market.marketId}
//                                   selectionId={runner.selectionId}
//                                 />
//                               </p>
//                             </div>
//                             <AvailableToBackLay
//                               selections={runner.ex}
//                               selectionsPrev={selectionsPrev}
//                               market={market}
//                               runner={runner}
//                             />
//                           </div>
//                         </div>
//                       );
//                     })}
//                 {this.state.remarkMarket[market.marketId] ? (
//                   <div className="table-remark text-right remark">
//                     {this.state.remarkMarket[market.marketId]}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             );
//           })}
//         {this.props.fancySelectionId && <BookPopup />}
//         {this.props.marketUserBookId && <UserBookPopup />}
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state: any) => ({
//   bet: state.betReducer.bet,
//   getMarketBook: state.betReducer.userBookMarketList,
//   fancySelectionId: state.betReducer.fancyMatchAndSelectionId,
//   currentMatch: state.sportReducer.currentMatch,
//   marketUserBookId: state.betReducer.marketBookAndSelectionId,
// });

// const actionCreators = {
//   betPopup,
//   setRules,
// };
// export default connect(mapStateToProps, actionCreators)(MatchOdds);



/* eslint-disable */
import IMarket, { OddsType } from "../../../models/IMarket";
import React, { MouseEvent } from "react";
import IRunner from "../../../models/IRunner";
import { SocketContext } from "../../../context/webSocket";
import { AvailableToBackLay } from "./available-to-back-lay";
import { betPopup } from "../../../redux/actions/bet/betSlice";
import { connect } from "react-redux";
import PnlCalculate from "./pnl-calculate";
// import { checkoddslength } from '../../../utils/helper'
import { isMobile } from "react-device-detect";
import BookPopup from "./fancy/book-popup";
import IMatch from "../../../models/IMatch";
import { setRules } from "../../../redux/actions/common/commonSlice";
import UserBookPopup from "./user-book-popup";
import "../../../styles/market-layout.css";
import AccordianHeader from "./accordian-header";
import MatchOddsAccord from "./match-odds-accord";

interface Props {
  data: IMarket[];
  getMarketBook?: any;
  bet?: any;
  fancySelectionId?: any;
  currentMatch?: IMatch;
  setRules: (data: { open: boolean; type: string }) => void;
  marketUserBookId?: any;
}

class MatchOdds extends React.PureComponent<
  Props,
  {
    runnersData: any;
    runnersDataPrev: any;
    profitLoss: any;
    getMarketBook: any;
    remarkMarket: any;
    runnersName: Record<string, string>;
  }
> {
  static contextType = SocketContext;
  context!: React.ContextType<typeof SocketContext>;
  pollInterval: any;
  safeMarkets = (input?: IMarket[] | null) =>
    Array.isArray(input) ? input.filter((m: any) => m && m.marketId) : [];

  constructor(props: Props) {
    super(props);
    const selections: any = {};
    const profitLoss: any = {};
    const remarkMarket: any = {};
    let runnersName: any = {};
    this.safeMarkets(props.data).forEach((market: IMarket) => {
      const runners = Array.isArray((market as any)?.runners) ? market.runners : [];
      runners.forEach((runner: IRunner) => {
        runnersName = {
          ...runnersName,
          [market.marketId]: {
            ...runnersName[market.marketId],
            [runner.selectionId]: runner.runnerName,
          },
        };
        selections[market.marketId] = market;
        profitLoss[runner.selectionId] = 0;
      });
      remarkMarket[market.marketId] = "";
    });
    this.state = {
      runnersData: selections,
      runnersDataPrev: JSON.parse(JSON.stringify(selections)),
      profitLoss,
      getMarketBook: props.getMarketBook,
      remarkMarket: remarkMarket,
      runnersName: runnersName,
    };
  }

  componentDidMount(): void {
    this.socketEvents();
  }

  componentWillUnmount(): void {
    this.context.socket.off("getMarketData");
    this.leaveMarketRoom();
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.data !== this.props.data) {
      this.socketEvents();
    }
  }

  socketEvents = () => {
    // Since WebSocket real-time updates are not working properly,
    // we'll use polling to update match odds every 0.5 seconds
    this.pollMarketData();

    this.context.socket.emit("joinRoom", this.props.currentMatch?.matchId);
    this.safeMarkets(this.props.data).forEach((market: IMarket) => {
      this.context.socket.emit("joinMarketRoom", market.marketId);
    });
    this.getSocketEvents();
    this.context.socket.on("connect", () => {
      this.joinMarketRoom();
    });
    this.context.socket.on("reconnect", () => {
      this.joinMarketRoom();
    });
  };

  pollMarketData = () => {
    const handler = () => {
      const markets = this.safeMarkets(this.props.data);
      if (!markets.length) return;
      // Poll once per match instead of per market to avoid duplicate requests
      // Use Array.from() to convert Set to array (avoids TypeScript downlevelIteration error)
      const matchIds = Array.from(
        new Set(markets.map((market) => market.matchId).filter(Boolean))
      );

      // Process matches sequentially to avoid race conditions and duplicates
      matchIds.forEach(async (matchId) => {
        try {
          // Get the token from localStorage
          const token = window.location.pathname.includes("admin")
            ? localStorage.getItem("token-admin")
            : localStorage.getItem("token");

          console.log(`🔄 Polling sessions for matchId: ${matchId}`);

          // Fix URL construction to avoid double /api/ prefix
          const baseUrl =
            process.env.REACT_APP_API_BASEURL || "http://139.84.174.126:3010";
          const apiUrl = baseUrl.endsWith("/api")
            ? `${baseUrl}sessions-data?MatchID=${matchId}` // Base URL already includes /api
            : `${baseUrl}sessions-data?MatchID=${matchId}`; // Add /api to base URL

          const response = await fetch(apiUrl, {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();

          console.log(`📊 Sessions response for match ${matchId}:`, data);

          // Update response handling to match the standardized response format (same as fancy-data)
          if (data && !data.error && Array.isArray(data.data)) {
            // Filter only match and bookmaker data for faster processing
            const matchAndBookmakerData = data.data.filter(
              (market: any) =>
                market.gtype === "match" || market.gtype === "match1"
            );

            console.log(
              `🎯 Filtered ${matchAndBookmakerData.length} match/bookmaker markets from ${data.data.length} total markets`
            );
            console.log(
              "🔍 Filtered markets:",
              matchAndBookmakerData.map((m: any) => ({
                marketId: m.marketId,
                gtype: m.gtype,
                marketName: m.marketName,
                runnersCount: m.runners?.length || 0,
              }))
            );

            // Batch update all markets for this match to avoid multiple setState calls
            const updatedMarketsData: any = {};

            matchAndBookmakerData.forEach((market: any) => {
              // Transform the response to match the expected format for MatchOdds component
              const transformedMarket = {
                _id:
                  market.marketId?.toString() ||
                  market.externalData?.mid?.toString(),
                marketId:
                  market.marketId?.toString() ||
                  market.externalData?.mid?.toString(),
                marketName: market.marketName || market.externalData?.mname,
                matchId: market.externalData?.gmid || matchId,
                gtype: market.gtype || market.externalData?.gtype,
                oddsType: market.gtype === "match1" ? "BM" : "MATCH_ODDS",
                status: market.externalData?.status || "OPEN",
                runners:
                  (market.runners || []).map((runner: any) => {
                    // Transform odds based on market type
                    const isBookmaker = market.gtype === "match1";

                    // ✅ ENHANCED: Better debugging for bookmaker markets
                    console.log(
                      `🔄 Processing ${market.marketName} (${market.gtype}):`,
                      {
                        isBookmaker,
                        marketId: market.marketId,
                        marketStatus: market.externalData?.status,
                        runnersCount: market.runners?.length,
                      }
                    );

                    // For bookmaker markets, use the existing price values directly from API
                    const transformOdds = (oddsArray: any[]) => {
                      if (!oddsArray || !Array.isArray(oddsArray)) {
                        console.log(
                          `⚠️ Invalid odds array for ${market.marketName}:`,
                          oddsArray
                        );
                        return [];
                      }

                      const transformed = oddsArray.map((odd: any) => ({
                        // For bookmaker: use existing price and price1 directly (API already has correct format)
                        // For regular odds: use price as-is
                        price: isBookmaker ? odd.price : odd.price, // Use API price directly for bookmaker
                        price1: isBookmaker
                          ? odd.price1 || odd.price?.toFixed(2)
                          : odd.price?.toFixed(2), // Use API price1 for bookmaker
                        size: odd.size || 0,
                      }));

                      // ✅ DEBUG: Log the transformation
                      if (isBookmaker) {
                        console.log(
                          `📊 Transformed ${market.marketName} odds:`,
                          {
                            original: oddsArray,
                            transformed: transformed,
                          }
                        );
                      }

                      return transformed;
                    };

                    const transformedRunner = {
                      selectionId: runner.selectionId,
                      runnerName: runner.selectionName,
                      // FIX: For bookmaker markets, use individual runner status from externalData.gstatus
                      // For match odds, use the runner status as-is
                      status: (() => {
                        if (market.gtype === "match1") {
                          // For bookmaker (match1), check individual runner gstatus from externalData
                          const externalRunner =
                            market.externalData?.section?.find(
                              (s: any) =>
                                s.sid?.toString() ===
                                runner.selectionId?.toString() ||
                                s.sno?.toString() ===
                                runner.sortPriority?.toString()
                            );

                          if (externalRunner) {
                            // Individual runner suspension for bookmaker
                            return externalRunner.gstatus === "SUSPENDED"
                              ? "SUSPENDED"
                              : "ACTIVE";
                          }
                        }

                        // For regular match odds, use runner status as-is
                        return runner.status || "ACTIVE";
                      })(),
                      sortPriority: runner.sortPriority,
                      ex: {
                        availableToBack: transformOdds(runner.back),
                        availableToLay: transformOdds(runner.lay),
                      },
                      // Keep the original back/lay arrays for compatibility
                      back: transformOdds(runner.back),
                      lay: transformOdds(runner.lay),
                      // Add gtype for bet validation
                      gtype: market.gtype,
                    };

                    // ✅ DEBUG: Log runner transformation for bookmaker markets
                    if (isBookmaker) {
                      console.log(
                        `🏃 Transformed runner ${transformedRunner.runnerName}:`,
                        {
                          selectionId: transformedRunner.selectionId,
                          status: transformedRunner.status,
                          backOddsCount:
                            transformedRunner.ex.availableToBack?.length || 0,
                          layOddsCount:
                            transformedRunner.ex.availableToLay?.length || 0,
                          backOdds: transformedRunner.ex.availableToBack,
                          layOdds: transformedRunner.ex.availableToLay,
                          originalBack: runner.back,
                          originalLay: runner.lay,
                        }
                      );
                    }

                    return transformedRunner;
                  }) || [],
              };

              updatedMarketsData[market.marketId || market.externalData?.mid] =
                transformedMarket;
            });

            // Single setState call for all markets of this match
            this.setState((prev) => ({
              runnersData: {
                ...prev.runnersData,
                ...updatedMarketsData,
              },
            }));

            console.log(
              `✅ Updated ${Object.keys(updatedMarketsData).length
              } match/bookmaker markets for match ${matchId}`
            );
            console.log(
              "📋 Updated market IDs:",
              Object.keys(updatedMarketsData)
            );
            console.log(
              "🔄 Total markets in state:",
              Object.keys(this.state.runnersData).length
            );
          } else {
            console.log(`⚠️ No markets data in response for match ${matchId}`);
          }
        } catch (error) {
          console.error(
            `❌ Error polling market data for match ${matchId}:`,
            error
          );
          // Don't stop polling on error, just log it and continue
        }
      });
    };

    // Clear any existing polling interval
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }

    // Poll every 300ms for ultra-fast match/bookmaker updates (optimized for high frequency trading)
    this.pollInterval = setInterval(handler, 300);

    // Also run once immediately
    handler();
  };

  joinMarketRoom = () => {
    if (this.props.currentMatch) {
      this.context.socket.emit("joinRoom", this.props.currentMatch.matchId);
    }
    this.safeMarkets(this.props.data).forEach((market: IMarket) => {
      this.context.socket.emit("joinMarketRoom", market.marketId);
    });
  };

  leaveMarketRoom = () => {
    this.safeMarkets(this.props.data).forEach((market: IMarket) => {
      this.context.socket.emit("leaveRoom", market.marketId);
      this.context.socket.emit("leaveRoom", market.matchId);
    });
  };

  getSocketEvents = () => {
    const handler = (market: IMarket) => {
      this.setState((prev) => ({
        runnersData: { ...prev.runnersData, [market.marketId]: market },
      }));
    };
    this.context.socket.on("getMarketData", handler);
  };

  offplaylimit = (market: any) => {
    const inplayl =
      market.oddsType == OddsType.BM
        ? this.props.currentMatch?.inPlayBookMaxLimit
        : this.props.currentMatch?.inPlayMaxLimit;
    const offplayl =
      market.oddsType == OddsType.BM
        ? this.props.currentMatch?.offPlayBookMaxLimit
        : this.props.currentMatch?.offPlayMaxLimit;
    return this.props.currentMatch?.inPlay ? inplayl : offplayl;
  };

  render(): React.ReactNode {
    const { data, getMarketBook } = this.props;
    console.log(data)
    // {console.log(data)}
    const { runnersData } = this.state;
    const safeData = this.safeMarkets(data);
    return (
      <div>
        {safeData.map((market: IMarket) => {
            const selectionsPrev: any = {};
            const oddsData = runnersData ? runnersData[market.marketId] : null;
            let setVisibleMarketStatus = false;
            if (oddsData) {
              setVisibleMarketStatus =  !!oddsData?.["runners"]?.[0]?.ex;
            }
            // changed this code to my code which i have written 

            //   const classforheadingfirst =
            //   isMobile && market.oddsType == OddsType.F ? "box-6" : "box-4";
            // const classforheading =
            //   isMobile && market.oddsType == OddsType.F ? "box-2" : "box-1";
            const classforheadingfirst =
              isMobile ? "box-6" : "box-4";
            const classforheading =
              isMobile ? "box-2" : "box-1";
            if (!setVisibleMarketStatus) return null;
            return (
              <div key={market._id}>
                <AccordianHeader
                  market={market}
                  offplaylimit={this.offplaylimit(market)}
                  oddsData={oddsData}
                  setRules={this.props.setRules}
                  runnersName={this.state.runnersName}
                  getMarketBook={this.props.getMarketBook}
                  selectionsPrev={selectionsPrev}
                  isMobile={isMobile}
                  matchId={this.props.currentMatch?.matchId}
                />

                {/* the header of the back and lay where it has max bet and other stuffs in order to change the ui of the header it the main part */}



                {/* till here */}
                {/* <MatchOddsAccord
                  market={market}
                  oddsData={oddsData}
                  isMobile={isMobile}
                  classforheadingfirst={classforheadingfirst}
                  classforheading={classforheading}
                  runnersName={this.state.runnersName}
                  getMarketBook={this.state.getMarketBook}
                  selectionsPrev={selectionsPrev}
                /> */}
                {/* <div className="table-header">
                  <div
                    className={`float-left country-name ${classforheadingfirst} min-max`}
                  >
                    <b />
                  </div>

                  {/* Check if bookmaker has single values to adjust header layout */}
                {(() => {
                  const isBookmaker = market.oddsType === OddsType.BM;
                  const hasOnlySingleValues =
                    isBookmaker &&
                    oddsData?.runners?.[0]?.ex?.availableToBack?.length ===
                    1 &&
                    oddsData?.runners?.[0]?.ex?.availableToLay?.length === 1;

                  if (isBookmaker && hasOnlySingleValues) {
                    // For bookmaker with single values, show only main Back and Lay headers
                    // return (
                    //   <>
                    //     <div
                    //       className={`back ${classforheading} float-left text-center`}
                    //     >
                    //       <b>BACK</b>
                    //     </div>
                    //     <div
                    //       className={`lay ${classforheading} float-left text-center`}
                    //     >
                    //       <b>LAY</b>
                    //     </div>
                    //   </>
                    // );
                  } else {
                    // Standard layout with all boxes
                    return (
                      <>
                        {/* Show header boxes for all markets except Fancy on mobile */}

                        {/* used to keep the back and lay heading in the center */}
                        {/* {(!isMobile || market.oddsType != OddsType.F) && (
                            <>
                              <div className="box-1 float-left" />
                              <div className="box-1 float-left" />
                            </>
                          )} */}

                        {/* back heading */}

                        {/* <div
                            className={`back ${classforheading} float-left text-center`}
                          >
                            <b>BACK</b>
                          </div> */}

                        {/* lay heading */}
                        {/* <div
                            className={`lay ${classforheading} float-left text-center`}
                          >
                            <b>LAY</b>
                          </div> */}
                        {/* {(!isMobile || market.oddsType != OddsType.F) && (
                            <>
                              <div className="box-1 float-left" />
                              <div className="box-1 float-left" />
                            </>
                          )} */}
                      </>
                    );
                  }
                })()}
                {/* </div> */}
                {/* {oddsData &&
                  oddsData?.runners
                    ?.sort(
                      (a: any, b: any) => a?.sortPriority - b?.sortPriority
                    )
                    .map((runner: IRunner) => {
                      runner = {
                        ...runner,
                        runnerName:
                          this.state.runnersName?.[market.marketId]?.[
                            runner.selectionId
                          ],
                      };
                      return (
                        <div key={runner.selectionId}>
                          <div
                            data-title={runner.status}
                            className={`table-row ${
                              runner.status === "SUSPENDED" ? "suspended" : ""
                            }`}
                          >
                            <div
                              className={` country-name ${classforheadingfirst}`}
                            >
                              <span className="team-name">
                                <b>{runner.runnerName}</b>
                              </span>
                              <p>
                                {getMarketBook[
                                  `${market.marketId}_${runner.selectionId}`
                                ] ? (
                                  <span
                                    className={
                                      getMarketBook[
                                        `${market.marketId}_${runner.selectionId}`
                                      ] > 0
                                        ? "green"
                                        : "red"
                                    }
                                  >
                                    {getMarketBook[
                                      `${market.marketId}_${runner.selectionId}`
                                    ].toLocaleString()}
                                  </span>
                                ) : (
                                  <span className="" style={{ color: "black" }}>
                                    {"0"}
                                  </span>
                                )}

                                <PnlCalculate
                                  marketId={market.marketId}
                                  selectionId={runner.selectionId}
                                  pnlValue={parseFloat(Number(getMarketBook[`${market.marketId}_${runner.selectionId}`] || 0).toFixed(2))}
                                />
                              </p>
                            </div>
                            <AvailableToBackLay
                              selections={runner.ex}
                              selectionsPrev={selectionsPrev}
                              market={market}
                              runner={runner}
                            />
                          </div>
                        </div>
                      );
                    })} */}
                {/* {this.state.remarkMarket[market.marketId] ? (
                  <div className="table-remark text-right remark">
                    {this.state.remarkMarket[market.marketId]}
                  </div>
                ) : (
                  ""
                )} */}
              </div>
            );
          })}
        {this.props.fancySelectionId && <BookPopup />}
        {this.props.marketUserBookId && <UserBookPopup />}
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  bet: state.betReducer.bet,
  getMarketBook: state.betReducer.userBookMarketList,
  fancySelectionId: state.betReducer.fancyMatchAndSelectionId,
  currentMatch: state.sportReducer.currentMatch,
  marketUserBookId: state.betReducer.marketBookAndSelectionId,
});

const actionCreators = {
  betPopup,
  setRules,
};
export default connect(mapStateToProps, actionCreators)(MatchOdds);
