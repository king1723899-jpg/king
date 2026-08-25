// import React from 'react'
// import { IBetOn, IBetType } from '../../../models/IBet'
// import IRunner from '../../../models/IRunner'
// import IMarket, { OddsType } from '../../../models/IMarket'
// import { betPopup } from '../../../redux/actions/bet/betSlice'
// import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
// import authService from '../../../services/auth.service'
// import { nFormatter } from '../../../utils/helper'
// import { selectUserData } from '../../../redux/actions/login/loginSlice'
// import { RoleType } from '../../../models/User'
// import { isMobile } from 'react-device-detect'

// type Props = {
//   selections: any
//   selectionsPrev: any
//   runner: IRunner
//   market: IMarket
// }
// export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
//   const dispatch = useAppDispatch()
//   const getCurrentMatch = useAppSelector(selectCurrentMatch)
//   const userState = useAppSelector(selectUserData)

//   // ✅ DEBUG: Log data received for bookmaker markets
//   React.useEffect(() => {
//     if (market.oddsType === OddsType.BM) {
//       console.log(`🎯 AvailableToBackLay received data for bookmaker ${market.marketName}:`, {
//         marketId: market.marketId,
//         marketName: market.marketName,
//         oddsType: market.oddsType,
//         gtype: market.gtype,
//         runnerName: runner.runnerName,
//         runnerSelectionId: runner.selectionId,
//         selections: selections,
//         availableToBack: selections?.availableToBack,
//         availableToLay: selections?.availableToLay,
//         backCount: selections?.availableToBack?.length || 0,
//         layCount: selections?.availableToLay?.length || 0,
//         isBookmakerDetected: market.oddsType === OddsType.BM,
//         OddsTypeBM: OddsType.BM
//       })
      
//       // ✅ ADDITIONAL DEBUG: Check if data structure is as expected
//       if (selections?.availableToBack?.length === 0) {
//         console.log(`❌ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`)
//       }
//       if (selections?.availableToLay?.length === 0) {
//         console.log(`❌ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`)
//       }
//       if (!selections) {
//         console.log(`❌ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`)
//       }
//     }
//   }, [selections, market, runner])

//   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
//     const ipAddress = authService.getIpAddress()
//     if (market.oddsType == OddsType.BM && back.size == 0) return
    
//     // For bookmaker markets, use price1 if available, otherwise use price
//     let finalOdds = back.price;
//     if (market.oddsType === OddsType.BM && back.price1) {
//       finalOdds = parseFloat(back.price1);
//     }
    
//     // Determine betOn based on market type
//     let betOn = IBetOn.MATCH_ODDS;
//     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
//       betOn = 'BOOKMAKER' as any; // Set to BOOKMAKER for bookmaker markets
//       console.log(`🎯 Set betOn to 'BOOKMAKER' for market: ${market.marketName}`)
//     }
    
//     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
//       // ✅ ENHANCED: Improved gtype determination for better PnL calculation
//       let gtype = market.gtype
      
//       // If gtype is not set, determine it more robustly
//       if (!gtype) {
//         if (market.oddsType === OddsType.BM) {
//           gtype = 'match1'  // Bookmaker
//           console.log(`🎯 Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`)
//         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
//           gtype = 'fancy'
//           console.log(`🎯 Set gtype to 'fancy' based on market name: ${market.marketName}`)
//         } else {
//           gtype = 'match'  // Default to match odds
//           console.log(`🎯 Set gtype to 'match' as default for market: ${market.marketName}`)
//         }
//       }
      
//       console.log(`🎯 Bet popup data for ${market.marketName}:`, {
//         marketId: market.marketId,
//         oddsType: market.oddsType,
//         gtype: gtype,
//         betOn: betOn,
//         odds: finalOdds,
//         isBack,
//         selectionId: runner.selectionId,
//         selectionName: runner.runnerName
//       })
      
//       dispatch(
//         betPopup({
//           isOpen: true,
//           betData: {
//             isBack,
//             odds: parseFloat(finalOdds.toFixed(4)),
//             volume: back.size,
//             marketId: market.marketId,
//             marketName: market.marketName,
//             matchId: market.matchId,
//             selectionName: runner.runnerName,
//             selectionId: runner.selectionId,
//             pnl: 0,
//             stack: 0,
//             currentMarketOdds: finalOdds,
//             eventId: market.sportId,
//             exposure: -0,
//             ipAddress: ipAddress,
//             type: IBetType.Match,
//             matchName: getCurrentMatch.name,
//             betOn: betOn,
//             oddsType: market.oddsType,
//             gtype: gtype, // ✅ Use the improved gtype determination
//           },
//         }),
//       )
//     }
//   }

//   const availableToBack = () => {
//     // For bookmaker markets, check if we should show only single values
//     const isBookmaker = market.oddsType === OddsType.BM
//     const hasOnlySingleValues = isBookmaker && selections?.availableToBack?.length === 1
    
//     // ✅ DEBUG: Log availableToBack processing for bookmaker
//     if (isBookmaker) {
//       console.log(`📊 Processing availableToBack for ${market.marketName}:`, {
//         isBookmaker,
//         hasOnlySingleValues,
//         availableToBackLength: selections?.availableToBack?.length,
//         availableToBack: selections?.availableToBack,
//         isMobile: isMobile
//       })
//     }
    
//     if (!selections?.availableToBack || selections.availableToBack.length === 0) {
//       console.log(`⚠️ No back odds available for ${market.marketName}`)
//       return null
//     }
    
//     return selections?.availableToBack?.map((back: any, index: number) => {
//       const i = 2 - index
//       const cls = index === 2 ? 'back' : `back${i}`
//       const blinkCls = back.changed ? 'blink market-box-glow' : ''
      
//       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//       if (isMobile && market.oddsType == OddsType.F && index != 2) return
      
//       // ✅ FIX: For bookmaker with single values, show the FIRST available box (index 0) instead of index 2
//       if (isBookmaker && hasOnlySingleValues && index !== 0) {
//         console.log(`🚫 Skipping back box ${index} for bookmaker (single value mode, showing index 0)`)
//         return null
//       }
      
//       const classforbox =
//         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
//           ? 'box-1'
//           : 'box-2'
      
//       // ✅ DEBUG: Log each back box being rendered
//       if (isBookmaker) {
//         console.log(`✅ Rendering back box ${index} for ${runner.runnerName}:`, {
//           index,
//           cls,
//           price: back.price,
//           price1: back.price1,
//           size: back.size,
//           classforbox
//         })
//       }
      
//       return (
//         <div
//           onClick={() => onBet(true, back)}
//           key={index}
//           className={`${classforbox}  text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block'>
//             {market.oddsType == OddsType.BM
//               ? back.price1
//                 ? back.price1
//                 : '-'
//               : back.price
//               ? back.price
//               : '-'}
//           </span>
//           <span className='d-block'>{back.size ? nFormatter(back.size, 1) : '-'}</span>
//         </div>
//       )
//     })
//   }

//   const availableToLay = () => {
//     // For bookmaker markets, check if we should show only single values
//     const isBookmaker = market.oddsType === OddsType.BM
//     const hasOnlySingleValues = isBookmaker && selections?.availableToLay?.length === 1
    
//     // ✅ DEBUG: Log availableToLay processing for bookmaker
//     if (isBookmaker) {
//       console.log(`📊 Processing availableToLay for ${market.marketName}:`, {
//         isBookmaker,
//         hasOnlySingleValues,
//         availableToLayLength: selections?.availableToLay?.length,
//         availableToLay: selections?.availableToLay
//       })
//     }
    
//     if (!selections?.availableToLay || selections.availableToLay.length === 0) {
//       console.log(`⚠️ No lay odds available for ${market.marketName}`)
//       return null
//     }
    
//     return selections?.availableToLay?.map((lay: any, index: number) => {
//       const i = index
//       const cls = index === 0 ? 'lay' : `lay${i}`
//       const blinkCls = lay.changed ? 'blink market-box-glow' : ''
      
//       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//       if (isMobile && market.oddsType == OddsType.F && index != 0) return
      
//       // For bookmaker with single values, show only the main lay box (index 0)
//       if (isBookmaker && hasOnlySingleValues && index !== 0) {
//         console.log(`🚫 Skipping lay box ${index} for bookmaker (single value mode)`)
//         return null
//       }
      
//       const classforbox =
//         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
//           ? 'box-1'
//           : 'box-2'
      
//       // ✅ DEBUG: Log each lay box being rendered  
//       if (isBookmaker) {
//         console.log(`✅ Rendering lay box ${index} for ${runner.runnerName}:`, {
//           index,
//           cls,
//           price: lay.price,
//           price1: lay.price1,
//           size: lay.size,
//           classforbox
//         })
//       }

//       return (
//         <div
//           onClick={() => onBet(false, lay)}
//           key={index}
//           className={`${classforbox}   text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block'>
//             {market.oddsType == OddsType.BM
//               ? lay.price1
//                 ? lay.price1
//                 : '-'
//               : lay.price
//               ? lay.price
//               : '-'}
//           </span>
//           <span className='d-block'>{lay.size ? nFormatter(lay.size, 1) : '-'}</span>
//         </div>
//       )
//     })
//   }

//   return (
//     <>
//       {availableToBack()}
//       {availableToLay()}
//     </>
//   )
// })

// import React from "react";
// import { IBetOn, IBetType } from "../../../models/IBet";
// import IRunner from "../../../models/IRunner";
// import IMarket, { OddsType } from "../../../models/IMarket";
// import { betPopup } from "../../../redux/actions/bet/betSlice";
// import { selectCurrentMatch } from "../../../redux/actions/sports/sportSlice";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
// import authService from "../../../services/auth.service";
// import { nFormatter } from "../../../utils/helper";
// import { selectUserData } from "../../../redux/actions/login/loginSlice";
// import { RoleType } from "../../../models/User";
// import { isMobile } from "react-device-detect";

// type Props = {
//   selections: any;
//   selectionsPrev: any;
//   runner: IRunner;
//   market: IMarket;
// };

// export const AvailableToBackLay = React.memo(
//   ({ selections, market, runner }: Props) => {
//     const dispatch = useAppDispatch();
//     const getCurrentMatch = useAppSelector(selectCurrentMatch);
//     const userState = useAppSelector(selectUserData);
//     const isBookmaker = market.oddsType === OddsType.BM;

//     // ✅ DEBUG: Log data received for bookmaker markets
//     React.useEffect(() => {
//       if (isBookmaker) {
//         console.log(
//           `🎯 AvailableToBackLay received data for bookmaker ${market.marketName}:`,
//           {
//             marketId: market.marketId,
//             marketName: market.marketName,
//             oddsType: market.oddsType,
//             gtype: market.gtype,
//             runnerName: runner.runnerName,
//             runnerSelectionId: runner.selectionId,
//             selections: selections,
//             availableToBack: selections?.availableToBack,
//             availableToLay: selections?.availableToLay,
//             backCount: selections?.availableToBack?.length || 0,
//             layCount: selections?.availableToLay?.length || 0,
//             isBookmakerDetected: isBookmaker,
//             OddsTypeBM: OddsType.BM,
//           }
//         );

//         // ✅ ADDITIONAL DEBUG: Check if data structure is as expected
//         if (selections?.availableToBack?.length === 0) {
//           console.log(
//             `❌ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`
//           );
//         }
//         if (selections?.availableToLay?.length === 0) {
//           console.log(
//             `❌ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`
//           );
//         }
//         if (!selections) {
//           console.log(
//             `❌ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`
//           );
//         }
//       }
//     }, [selections, market, runner, isBookmaker]);

//     const onBet = (
//       isBack = false,
//       back: { price: number; size: number; price1?: string }
//     ) => {
//       const ipAddress = authService.getIpAddress();
//       if (isBookmaker && back.size == 0) return;

//       // For bookmaker markets, use price1 if available, otherwise use price
//       let finalOdds = back.price;
//       if (isBookmaker && back.price1) {
//         finalOdds = parseFloat(back.price1);
//       }

//       // Determine betOn based on market type
//       let betOn = IBetOn.MATCH_ODDS;
//       if (
//         isBookmaker ||
//         market.marketName?.toLowerCase().includes("bookmaker")
//       ) {
//         betOn = "BOOKMAKER" as any;
//         console.log(
//           `🎯 Set betOn to 'BOOKMAKER' for market: ${market.marketName}`
//         );
//       }

//       if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
//         // ✅ ENHANCED: Improved gtype determination for better PnL calculation
//         let gtype = market.gtype;

//         // If gtype is not set, determine it more robustly
//         if (!gtype) {
//           if (isBookmaker) {
//             gtype = "match1"; // Bookmaker
//             console.log(
//               `🎯 Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`
//             );
//           } else if (
//             market.marketName?.toUpperCase().includes("FANCY") ||
//             market.marketName?.toUpperCase().includes("SESSION")
//           ) {
//             gtype = "fancy";
//             console.log(
//               `🎯 Set gtype to 'fancy' based on market name: ${market.marketName}`
//             );
//           } else {
//             gtype = "match"; // Default to match odds
//             console.log(
//               `🎯 Set gtype to 'match' as default for market: ${market.marketName}`
//             );
//           }
//         }

//         console.log(`🎯 Bet popup data for ${market.marketName}:`, {
//           marketId: market.marketId,
//           oddsType: market.oddsType,
//           gtype: gtype,
//           betOn: betOn,
//           odds: finalOdds,
//           isBack,
//           selectionId: runner.selectionId,
//           selectionName: runner.runnerName,
//         });

//         dispatch(
//           betPopup({
//             isOpen: true,
//             betData: {
//               isBack,
//               odds: parseFloat(finalOdds.toFixed(4)),
//               volume: back.size,
//               marketId: market.marketId,
//               marketName: market.marketName,
//               matchId: market.matchId,
//               selectionName: runner.runnerName,
//               selectionId: runner.selectionId,
//               pnl: 0,
//               stack: 0,
//               currentMarketOdds: finalOdds,
//               eventId: market.sportId,
//               exposure: -0,
//               ipAddress: ipAddress,
//               type: IBetType.Match,
//               matchName: getCurrentMatch.name,
//               betOn: betOn,
//               oddsType: market.oddsType,
//               gtype: gtype,
//             },
//           })
//         );
//       }
//     };

//     // ✅ CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
//     const isCricketBookmaker = isBookmaker && (market.sportId === 4 || getCurrentMatch?.sportId === 4);
    
//     // Common box style with proper TypeScript typing
//     const getBoxStyle = (isBack: boolean): React.CSSProperties => ({
//       display: "flex",
//       flexDirection: "column" as "column", // Type assertion
//       justifyContent: "endf",
//       alignItems: "center",
//       minHeight: "40px",
//       padding: "4px",
//       maxWidth: "33%",
//       boxSizing: "border-box",
//       backgroundColor: isBack ? "#72bbef" : "#faa9ba",
//       width: isCricketBookmaker ? "auto" : (isBookmaker ? "100%" : "auto"), // ✅ CRICKET: Use auto width like match odds
//       flex: isCricketBookmaker ? 1 : (isBookmaker ? undefined : 1), // ✅ CRICKET: Use flex like match odds
//     });

//     // Column container style with proper TypeScript typing
//     const columnStyleBack: React.CSSProperties = {
//       flex: 1,
//       display: "flex",
//       gap: "1px",
//       flexDirection: (isBookmaker && !isCricketBookmaker)
//         ? "column"
//         : ("row-reverse" as "column" | "row-reverse"), // ✅ CRICKET: Use row-reverse like match odds
//       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // ✅ CRICKET: Use wrap like match odds
//       alignItems: (isBookmaker && !isCricketBookmaker) ? "flex-end" : undefined, // ✅ CRICKET: No special alignment
//     };
//     const columnStyleLay: React.CSSProperties = {
//       flex: 1,
//       display: "flex",
//       gap: "1px",
//       // padding:"0px",
//       flexDirection: (isBookmaker && !isCricketBookmaker) ? "column" : ("row" as "column" | "row"), // ✅ CRICKET: Use row like match odds
//       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // ✅ CRICKET: Use wrap like match odds
//     };
//     const availableToBack = () => {
//       const hasOnlySingleValues =
//         isBookmaker && selections?.availableToBack?.length === 1;

//       if (
//         !selections?.availableToBack ||
//         selections.availableToBack.length === 0
//       ) {
//         console.log(`⚠️ No back odds available for ${market.marketName}`);
//         return null;
//       }

//       return selections?.availableToBack?.map((back: any, index: number) => {
//         const i = 2 - index;
//         const cls = index === 2 ? "back" : `back${i}`;
//         const blinkCls = back.changed ? "blink market-box-glow" : "";

//         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//         if (isMobile && market.oddsType == OddsType.F && index != 2) return;

//         // ✅ CRICKET FIX: For cricket bookmaker, show all boxes like match odds
//         // For non-cricket bookmaker with single values, show only the first box
//         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

//         return (
//           <div
//             onClick={() => onBet(true, back)}
//             key={index}
//             style={getBoxStyle(true)}
//             className={`text-center back ${cls} ${blinkCls}`}
//           >
//             <span className="odd d-block">
//               {isBookmaker ? back.price1 || "-" : back.price || "-"}
//             </span>
//             <span className="d-block">
//               {back.size ? nFormatter(back.size, 1) : "-"}
//             </span>
//           </div>
//         );
//       });
//     };

//     const availableToLay = () => {
//       const hasOnlySingleValues =
//         isBookmaker && selections?.availableToLay?.length === 1;

//       if (
//         !selections?.availableToLay ||
//         selections.availableToLay.length === 0
//       ) {
//         console.log(`⚠️ No lay odds available for ${market.marketName}`);
//         return null;
//       }

//       return selections?.availableToLay?.map((lay: any, index: number) => {
//         const i = index;
//         const cls = index === 0 ? "lay" : `lay${i}`;
//         const blinkCls = lay.changed ? "blink market-box-glow" : "";

//         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//         if (isMobile && market.oddsType == OddsType.F && index != 0) return;

//         // ✅ CRICKET FIX: For cricket bookmaker, show all boxes like match odds
//         // For non-cricket bookmaker with single values, show only the first box
//         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

//         return (
//           <div
//             onClick={() => onBet(false, lay)}
//             key={index}
//             style={getBoxStyle(false)}
//             className={`text-center ${cls} ${blinkCls}`}
//           >
//             <span className="odd d-block">
//               {isBookmaker ? lay.price1 || "-" : lay.price || "-"}
//             </span>
//             <span className="d-block">
//               {lay.size ? nFormatter(lay.size, 1) : "-"}
//             </span>
//           </div>
//         );
//       });
//     };

//     return (
//       <div
//         style={
//           {
//             display: "flex",
//             width: "100%",
//             // background: "green",
//             overflow: "hidden",
//             boxSizing: "border-box",
//             padding: "0px",
//             gap: "1px",
//           } as React.CSSProperties
//         }
//       >
//         {/* Back Boxes Column */}
//         <div style={columnStyleBack}>{availableToBack()}</div>

//         {/* Lay Boxes Column */}
//         <div style={columnStyleLay}>{availableToLay()}</div>
//       </div>
//     );
//   }
// );














// import React from 'react'
// import { IBetOn, IBetType } from '../../../models/IBet'
// import IRunner from '../../../models/IRunner'
// import IMarket, { OddsType } from '../../../models/IMarket'
// import { betPopup } from '../../../redux/actions/bet/betSlice'
// import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
// import authService from '../../../services/auth.service'
// import { nFormatter } from '../../../utils/helper'
// import { selectUserData } from '../../../redux/actions/login/loginSlice'
// import { RoleType } from '../../../models/User'
// import { isMobile } from 'react-device-detect'

// type Props = {
//   selections: any
//   selectionsPrev: any
//   runner: IRunner
//   market: IMarket
// }
// export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
//   const dispatch = useAppDispatch()
//   const getCurrentMatch = useAppSelector(selectCurrentMatch)
//   const userState = useAppSelector(selectUserData)

//   // ✅ DEBUG: Log data received for bookmaker markets
//   React.useEffect(() => {
//     if (market.oddsType === OddsType.BM) {
//       console.log(`🎯 AvailableToBackLay received data for bookmaker ${market.marketName}:`, {
//         marketId: market.marketId,
//         marketName: market.marketName,
//         oddsType: market.oddsType,
//         gtype: market.gtype,
//         runnerName: runner.runnerName,
//         runnerSelectionId: runner.selectionId,
//         selections: selections,
//         availableToBack: selections?.availableToBack,
//         availableToLay: selections?.availableToLay,
//         backCount: selections?.availableToBack?.length || 0,
//         layCount: selections?.availableToLay?.length || 0,
//         isBookmakerDetected: market.oddsType === OddsType.BM,
//         OddsTypeBM: OddsType.BM
//       })
      
//       // ✅ ADDITIONAL DEBUG: Check if data structure is as expected
//       if (selections?.availableToBack?.length === 0) {
//         console.log(`❌ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`)
//       }
//       if (selections?.availableToLay?.length === 0) {
//         console.log(`❌ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`)
//       }
//       if (!selections) {
//         console.log(`❌ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`)
//       }
//     }
//   }, [selections, market, runner])

//   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
//     const ipAddress = authService.getIpAddress()
//     if (market.oddsType == OddsType.BM && back.size == 0) return
    
//     // For bookmaker markets, use price1 if available, otherwise use price
//     let finalOdds = back.price;
//     if (market.oddsType === OddsType.BM && back.price1) {
//       finalOdds = parseFloat(back.price1);
//     }
    
//     // Determine betOn based on market type
//     let betOn = IBetOn.MATCH_ODDS;
//     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
//       betOn = 'BOOKMAKER' as any; // Set to BOOKMAKER for bookmaker markets
//       console.log(`🎯 Set betOn to 'BOOKMAKER' for market: ${market.marketName}`)
//     }
    
//     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
//       // ✅ ENHANCED: Improved gtype determination for better PnL calculation
//       let gtype = market.gtype
      
//       // If gtype is not set, determine it more robustly
//       if (!gtype) {
//         if (market.oddsType === OddsType.BM) {
//           gtype = 'match1'  // Bookmaker
//           console.log(`🎯 Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`)
//         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
//           gtype = 'fancy'
//           console.log(`🎯 Set gtype to 'fancy' based on market name: ${market.marketName}`)
//         } else {
//           gtype = 'match'  // Default to match odds
//           console.log(`🎯 Set gtype to 'match' as default for market: ${market.marketName}`)
//         }
//       }
      
//       console.log(`🎯 Bet popup data for ${market.marketName}:`, {
//         marketId: market.marketId,
//         oddsType: market.oddsType,
//         gtype: gtype,
//         betOn: betOn,
//         odds: finalOdds,
//         isBack,
//         selectionId: runner.selectionId,
//         selectionName: runner.runnerName
//       })
      
//       dispatch(
//         betPopup({
//           isOpen: true,
//           betData: {
//             isBack,
//             odds: parseFloat(finalOdds.toFixed(4)),
//             volume: back.size,
//             marketId: market.marketId,
//             marketName: market.marketName,
//             matchId: market.matchId,
//             selectionName: runner.runnerName,
//             selectionId: runner.selectionId,
//             pnl: 0,
//             stack: 0,
//             currentMarketOdds: finalOdds,
//             eventId: market.sportId,
//             exposure: -0,
//             ipAddress: ipAddress,
//             type: IBetType.Match,
//             matchName: getCurrentMatch.name,
//             betOn: betOn,
//             oddsType: market.oddsType,
//             gtype: gtype, // ✅ Use the improved gtype determination
//           },
//         }),
//       )
//     }
//   }

//   const availableToBack = () => {
//     // For bookmaker markets, check if we should show only single values
//     const isBookmaker = market.oddsType === OddsType.BM
//     const hasOnlySingleValues = isBookmaker && selections?.availableToBack?.length === 1
    
//     // ✅ DEBUG: Log availableToBack processing for bookmaker
//     if (isBookmaker) {
//       console.log(`📊 Processing availableToBack for ${market.marketName}:`, {
//         isBookmaker,
//         hasOnlySingleValues,
//         availableToBackLength: selections?.availableToBack?.length,
//         availableToBack: selections?.availableToBack,
//         isMobile: isMobile
//       })
//     }
    
//     if (!selections?.availableToBack || selections.availableToBack.length === 0) {
//       console.log(`⚠️ No back odds available for ${market.marketName}`)
//       return null
//     }
    
//     return selections?.availableToBack?.map((back: any, index: number) => {
//       const i = 2 - index
//       const cls = index === 2 ? 'back' : `back${i}`
//       const blinkCls = back.changed ? 'blink market-box-glow' : ''
      
//       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//       if (isMobile && market.oddsType == OddsType.F && index != 2) return
      
//       // ✅ FIX: For bookmaker with single values, show the FIRST available box (index 0) instead of index 2
//       if (isBookmaker && hasOnlySingleValues && index !== 0) {
//         console.log(`🚫 Skipping back box ${index} for bookmaker (single value mode, showing index 0)`)
//         return null
//       }
      
//       const classforbox =
//         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
//           ? 'box-1'
//           : 'box-2'
      
//       // ✅ DEBUG: Log each back box being rendered
//       if (isBookmaker) {
//         console.log(`✅ Rendering back box ${index} for ${runner.runnerName}:`, {
//           index,
//           cls,
//           price: back.price,
//           price1: back.price1,
//           size: back.size,
//           classforbox
//         })
//       }
      
//       return (
//         <div
//           onClick={() => onBet(true, back)}
//           key={index}
//           className={`${classforbox}  text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block'>
//             {market.oddsType == OddsType.BM
//               ? back.price1
//                 ? back.price1
//                 : '-'
//               : back.price
//               ? back.price
//               : '-'}
//           </span>
//           <span className='d-block'>{back.size ? nFormatter(back.size, 1) : '-'}</span>
//         </div>
//       )
//     })
//   }

//   const availableToLay = () => {
//     // For bookmaker markets, check if we should show only single values
//     const isBookmaker = market.oddsType === OddsType.BM
//     const hasOnlySingleValues = isBookmaker && selections?.availableToLay?.length === 1
    
//     // ✅ DEBUG: Log availableToLay processing for bookmaker
//     if (isBookmaker) {
//       console.log(`📊 Processing availableToLay for ${market.marketName}:`, {
//         isBookmaker,
//         hasOnlySingleValues,
//         availableToLayLength: selections?.availableToLay?.length,
//         availableToLay: selections?.availableToLay
//       })
//     }
    
//     if (!selections?.availableToLay || selections.availableToLay.length === 0) {
//       console.log(`⚠️ No lay odds available for ${market.marketName}`)
//       return null
//     }
    
//     return selections?.availableToLay?.map((lay: any, index: number) => {
//       const i = index
//       const cls = index === 0 ? 'lay' : `lay${i}`
//       const blinkCls = lay.changed ? 'blink market-box-glow' : ''
      
//       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//       if (isMobile && market.oddsType == OddsType.F && index != 0) return
      
//       // For bookmaker with single values, show only the main lay box (index 0)
//       if (isBookmaker && hasOnlySingleValues && index !== 0) {
//         console.log(`🚫 Skipping lay box ${index} for bookmaker (single value mode)`)
//         return null
//       }
      
//       const classforbox =
//         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
//           ? 'box-1'
//           : 'box-2'
      
//       // ✅ DEBUG: Log each lay box being rendered  
//       if (isBookmaker) {
//         console.log(`✅ Rendering lay box ${index} for ${runner.runnerName}:`, {
//           index,
//           cls,
//           price: lay.price,
//           price1: lay.price1,
//           size: lay.size,
//           classforbox
//         })
//       }

//       return (
//         <div
//           onClick={() => onBet(false, lay)}
//           key={index}
//           className={`${classforbox}   text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block'>
//             {market.oddsType == OddsType.BM
//               ? lay.price1
//                 ? lay.price1
//                 : '-'
//               : lay.price
//               ? lay.price
//               : '-'}
//           </span>
//           <span className='d-block'>{lay.size ? nFormatter(lay.size, 1) : '-'}</span>
//         </div>
//       )
//     })
//   }

//   return (
//     <>
//       {availableToBack()}
//       {availableToLay()}
//     </>
//   )
// })

// import React from "react";
// import { IBetOn, IBetType } from "../../../models/IBet";
// import IRunner from "../../../models/IRunner";
// import IMarket, { OddsType } from "../../../models/IMarket";
// import { betPopup } from "../../../redux/actions/bet/betSlice";
// import { selectCurrentMatch } from "../../../redux/actions/sports/sportSlice";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
// import authService from "../../../services/auth.service";
// import { nFormatter } from "../../../utils/helper";
// import { selectUserData } from "../../../redux/actions/login/loginSlice";
// import { RoleType } from "../../../models/User";
// import { isMobile } from "react-device-detect";

// type Props = {
//   selections: any;
//   selectionsPrev: any;
//   runner: IRunner;
//   market: IMarket;
// };

// export const AvailableToBackLay = React.memo(
//   ({ selections, market, runner }: Props) => {
//     const dispatch = useAppDispatch();
//     const getCurrentMatch = useAppSelector(selectCurrentMatch);
//     const userState = useAppSelector(selectUserData);
//     const isBookmaker = market.oddsType === OddsType.BM;

//     // ✅ DEBUG: Log data received for bookmaker markets
//     React.useEffect(() => {
//       if (isBookmaker) {
//         console.log(
//           `🎯 AvailableToBackLay received data for bookmaker ${market.marketName}:`,
//           {
//             marketId: market.marketId,
//             marketName: market.marketName,
//             oddsType: market.oddsType,
//             gtype: market.gtype,
//             runnerName: runner.runnerName,
//             runnerSelectionId: runner.selectionId,
//             selections: selections,
//             availableToBack: selections?.availableToBack,
//             availableToLay: selections?.availableToLay,
//             backCount: selections?.availableToBack?.length || 0,
//             layCount: selections?.availableToLay?.length || 0,
//             isBookmakerDetected: isBookmaker,
//             OddsTypeBM: OddsType.BM,
//           }
//         );

//         // ✅ ADDITIONAL DEBUG: Check if data structure is as expected
//         if (selections?.availableToBack?.length === 0) {
//           console.log(
//             `❌ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`
//           );
//         }
//         if (selections?.availableToLay?.length === 0) {
//           console.log(
//             `❌ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`
//           );
//         }
//         if (!selections) {
//           console.log(
//             `❌ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`
//           );
//         }
//       }
//     }, [selections, market, runner, isBookmaker]);

//     const onBet = (
//       isBack = false,
//       back: { price: number; size: number; price1?: string }
//     ) => {
//       const ipAddress = authService.getIpAddress();
//       if (isBookmaker && back.size == 0) return;

//       // For bookmaker markets, use price1 if available, otherwise use price
//       let finalOdds = back.price;
//       if (isBookmaker && back.price1) {
//         finalOdds = parseFloat(back.price1);
//       }

//       // Determine betOn based on market type
//       let betOn = IBetOn.MATCH_ODDS;
//       if (
//         isBookmaker ||
//         market.marketName?.toLowerCase().includes("bookmaker")
//       ) {
//         betOn = "BOOKMAKER" as any;
//         console.log(
//           `🎯 Set betOn to 'BOOKMAKER' for market: ${market.marketName}`
//         );
//       }

//       if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
//         // ✅ ENHANCED: Improved gtype determination for better PnL calculation
//         let gtype = market.gtype;

//         // If gtype is not set, determine it more robustly
//         if (!gtype) {
//           if (isBookmaker) {
//             gtype = "match1"; // Bookmaker
//             console.log(
//               `🎯 Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`
//             );
//           } else if (
//             market.marketName?.toUpperCase().includes("FANCY") ||
//             market.marketName?.toUpperCase().includes("SESSION")
//           ) {
//             gtype = "fancy";
//             console.log(
//               `🎯 Set gtype to 'fancy' based on market name: ${market.marketName}`
//             );
//           } else {
//             gtype = "match"; // Default to match odds
//             console.log(
//               `🎯 Set gtype to 'match' as default for market: ${market.marketName}`
//             );
//           }
//         }

//         console.log(`🎯 Bet popup data for ${market.marketName}:`, {
//           marketId: market.marketId,
//           oddsType: market.oddsType,
//           gtype: gtype,
//           betOn: betOn,
//           odds: finalOdds,
//           isBack,
//           selectionId: runner.selectionId,
//           selectionName: runner.runnerName,
//         });

//         dispatch(
//           betPopup({
//             isOpen: true,
//             betData: {
//               isBack,
//               odds: parseFloat(finalOdds.toFixed(4)),
//               volume: back.size,
//               marketId: market.marketId,
//               marketName: market.marketName,
//               matchId: market.matchId,
//               selectionName: runner.runnerName,
//               selectionId: runner.selectionId,
//               pnl: 0,
//               stack: 0,
//               currentMarketOdds: finalOdds,
//               eventId: market.sportId,
//               exposure: -0,
//               ipAddress: ipAddress,
//               type: IBetType.Match,
//               matchName: getCurrentMatch.name,
//               betOn: betOn,
//               oddsType: market.oddsType,
//               gtype: gtype,
//             },
//           })
//         );
//       }
//     };

//     // ✅ CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
//     const isCricketBookmaker = isBookmaker && (market.sportId === 4 || getCurrentMatch?.sportId === 4);
    
//     // Common box style with proper TypeScript typing
//     const getBoxStyle = (isBack: boolean): React.CSSProperties => ({
//       display: "flex",
//       flexDirection: "column" as "column", // Type assertion
//       justifyContent: "endf",
//       alignItems: "center",
//       minHeight: "40px",
//       padding: "4px",
//       maxWidth: "33%",
//       boxSizing: "border-box",
//       backgroundColor: isBack ? "#72bbef" : "#faa9ba",
//       width: isCricketBookmaker ? "auto" : (isBookmaker ? "100%" : "auto"), // ✅ CRICKET: Use auto width like match odds
//       flex: isCricketBookmaker ? 1 : (isBookmaker ? undefined : 1), // ✅ CRICKET: Use flex like match odds
//     });

//     // Column container style with proper TypeScript typing
//     const columnStyleBack: React.CSSProperties = {
//       flex: 1,
//       display: "flex",
//       gap: "1px",
//       flexDirection: (isBookmaker && !isCricketBookmaker)
//         ? "column"
//         : ("row-reverse" as "column" | "row-reverse"), // ✅ CRICKET: Use row-reverse like match odds
//       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // ✅ CRICKET: Use wrap like match odds
//       alignItems: (isBookmaker && !isCricketBookmaker) ? "flex-end" : undefined, // ✅ CRICKET: No special alignment
//     };
//     const columnStyleLay: React.CSSProperties = {
//       flex: 1,
//       display: "flex",
//       gap: "1px",
//       // padding:"0px",
//       flexDirection: (isBookmaker && !isCricketBookmaker) ? "column" : ("row" as "column" | "row"), // ✅ CRICKET: Use row like match odds
//       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // ✅ CRICKET: Use wrap like match odds
//     };
//     const availableToBack = () => {
//       const hasOnlySingleValues =
//         isBookmaker && selections?.availableToBack?.length === 1;

//       if (
//         !selections?.availableToBack ||
//         selections.availableToBack.length === 0
//       ) {
//         console.log(`⚠️ No back odds available for ${market.marketName}`);
//         return null;
//       }

//       return selections?.availableToBack?.map((back: any, index: number) => {
//         const i = 2 - index;
//         const cls = index === 2 ? "back" : `back${i}`;
//         const blinkCls = back.changed ? "blink market-box-glow" : "";

//         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//         if (isMobile && market.oddsType == OddsType.F && index != 2) return;

//         // ✅ CRICKET FIX: For cricket bookmaker, show all boxes like match odds
//         // For non-cricket bookmaker with single values, show only the first box
//         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

//         return (
//           <div
//             onClick={() => onBet(true, back)}
//             key={index}
//             style={getBoxStyle(true)}
//             className={`text-center back ${cls} ${blinkCls}`}
//           >
//             <span className="odd d-block">
//               {isBookmaker ? back.price1 || "-" : back.price || "-"}
//             </span>
//             <span className="d-block">
//               {back.size ? nFormatter(back.size, 1) : "-"}
//             </span>
//           </div>
//         );
//       });
//     };

//     const availableToLay = () => {
//       const hasOnlySingleValues =
//         isBookmaker && selections?.availableToLay?.length === 1;

//       if (
//         !selections?.availableToLay ||
//         selections.availableToLay.length === 0
//       ) {
//         console.log(`⚠️ No lay odds available for ${market.marketName}`);
//         return null;
//       }

//       return selections?.availableToLay?.map((lay: any, index: number) => {
//         const i = index;
//         const cls = index === 0 ? "lay" : `lay${i}`;
//         const blinkCls = lay.changed ? "blink market-box-glow" : "";

//         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//         if (isMobile && market.oddsType == OddsType.F && index != 0) return;

//         // ✅ CRICKET FIX: For cricket bookmaker, show all boxes like match odds
//         // For non-cricket bookmaker with single values, show only the first box
//         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

//         return (
//           <div
//             onClick={() => onBet(false, lay)}
//             key={index}
//             style={getBoxStyle(false)}
//             className={`text-center ${cls} ${blinkCls}`}
//           >
//             <span className="odd d-block">
//               {isBookmaker ? lay.price1 || "-" : lay.price || "-"}
//             </span>
//             <span className="d-block">
//               {lay.size ? nFormatter(lay.size, 1) : "-"}
//             </span>
//           </div>
//         );
//       });
//     };

//     return (
//       <div
//         style={
//           {
//             display: "flex",
//             width: "100%",
//             // background: "green",
//             overflow: "hidden",
//             boxSizing: "border-box",
//             padding: "0px",
//             gap: "1px",
//           } as React.CSSProperties
//         }
//       >
//         {/* Back Boxes Column */}
//         <div style={columnStyleBack}>{availableToBack()}</div>

//         {/* Lay Boxes Column */}
//         <div style={columnStyleLay}>{availableToLay()}</div>
//       </div>
//     );
//   }
// );













// import React from 'react'
// import { IBetOn, IBetType } from '../../../models/IBet'
// import IRunner from '../../../models/IRunner'
// import IMarket, { OddsType } from '../../../models/IMarket'
// import { betPopup } from '../../../redux/actions/bet/betSlice'
// import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
// import authService from '../../../services/auth.service'
// import { nFormatter } from '../../../utils/helper'
// import { selectUserData } from '../../../redux/actions/login/loginSlice'
// import { RoleType } from '../../../models/User'
// import { isMobile } from 'react-device-detect'

// type Props = {
//   selections: any
//   selectionsPrev: any
//   runner: IRunner
//   market: IMarket
// }
// export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
//   const dispatch = useAppDispatch()
//   const getCurrentMatch = useAppSelector(selectCurrentMatch)
//   const userState = useAppSelector(selectUserData)

//   // ✅ DEBUG: Log data received for bookmaker markets
//   React.useEffect(() => {
//     if (market.oddsType === OddsType.BM) {
//       console.log(`🎯 AvailableToBackLay received data for bookmaker ${market.marketName}:`, {
//         marketId: market.marketId,
//         marketName: market.marketName,
//         oddsType: market.oddsType,
//         gtype: market.gtype,
//         runnerName: runner.runnerName,
//         runnerSelectionId: runner.selectionId,
//         selections: selections,
//         availableToBack: selections?.availableToBack,
//         availableToLay: selections?.availableToLay,
//         backCount: selections?.availableToBack?.length || 0,
//         layCount: selections?.availableToLay?.length || 0,
//         isBookmakerDetected: market.oddsType === OddsType.BM,
//         OddsTypeBM: OddsType.BM
//       })
      
//       // ✅ ADDITIONAL DEBUG: Check if data structure is as expected
//       if (selections?.availableToBack?.length === 0) {
//         console.log(`❌ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`)
//       }
//       if (selections?.availableToLay?.length === 0) {
//         console.log(`❌ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`)
//       }
//       if (!selections) {
//         console.log(`❌ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`)
//       }
//     }
//   }, [selections, market, runner])

//   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
//     const ipAddress = authService.getIpAddress()
//     if (market.oddsType == OddsType.BM && back.size == 0) return
    
//     // For bookmaker markets, use price1 if available, otherwise use price
//     let finalOdds = back.price;
//     if (market.oddsType === OddsType.BM && back.price1) {
//       finalOdds = parseFloat(back.price1);
//     }
    
//     // Determine betOn based on market type
//     let betOn = IBetOn.MATCH_ODDS;
//     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
//       betOn = 'BOOKMAKER' as any; // Set to BOOKMAKER for bookmaker markets
//       console.log(`🎯 Set betOn to 'BOOKMAKER' for market: ${market.marketName}`)
//     }
    
//     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
//       // ✅ ENHANCED: Improved gtype determination for better PnL calculation
//       let gtype = market.gtype
      
//       // If gtype is not set, determine it more robustly
//       if (!gtype) {
//         if (market.oddsType === OddsType.BM) {
//           gtype = 'match1'  // Bookmaker
//           console.log(`🎯 Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`)
//         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
//           gtype = 'fancy'
//           console.log(`🎯 Set gtype to 'fancy' based on market name: ${market.marketName}`)
//         } else {
//           gtype = 'match'  // Default to match odds
//           console.log(`🎯 Set gtype to 'match' as default for market: ${market.marketName}`)
//         }
//       }
      
//       console.log(`🎯 Bet popup data for ${market.marketName}:`, {
//         marketId: market.marketId,
//         oddsType: market.oddsType,
//         gtype: gtype,
//         betOn: betOn,
//         odds: finalOdds,
//         isBack,
//         selectionId: runner.selectionId,
//         selectionName: runner.runnerName
//       })
      
//       dispatch(
//         betPopup({
//           isOpen: true,
//           betData: {
//             isBack,
//             odds: parseFloat(finalOdds.toFixed(4)),
//             volume: back.size,
//             marketId: market.marketId,
//             marketName: market.marketName,
//             matchId: market.matchId,
//             selectionName: runner.runnerName,
//             selectionId: runner.selectionId,
//             pnl: 0,
//             stack: 0,
//             currentMarketOdds: finalOdds,
//             eventId: market.sportId,
//             exposure: -0,
//             ipAddress: ipAddress,
//             type: IBetType.Match,
//             matchName: getCurrentMatch.name,
//             betOn: betOn,
//             oddsType: market.oddsType,
//             gtype: gtype, // ✅ Use the improved gtype determination
//           },
//         }),
//       )
//     }
//   }

//   const availableToBack = () => {
//     // For bookmaker markets, check if we should show only single values
//     const isBookmaker = market.oddsType === OddsType.BM
//     const hasOnlySingleValues = isBookmaker && selections?.availableToBack?.length === 1
    
//     // ✅ DEBUG: Log availableToBack processing for bookmaker
//     if (isBookmaker) {
//       console.log(`📊 Processing availableToBack for ${market.marketName}:`, {
//         isBookmaker,
//         hasOnlySingleValues,
//         availableToBackLength: selections?.availableToBack?.length,
//         availableToBack: selections?.availableToBack,
//         isMobile: isMobile
//       })
//     }
    
//     if (!selections?.availableToBack || selections.availableToBack.length === 0) {
//       console.log(`⚠️ No back odds available for ${market.marketName}`)
//       return null
//     }
    
//     return selections?.availableToBack?.map((back: any, index: number) => {
//       const i = 2 - index
//       const cls = index === 2 ? 'back' : `back${i}`
//       const blinkCls = back.changed ? 'blink market-box-glow' : ''
      
//       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//       if (isMobile && market.oddsType == OddsType.F && index != 2) return
      
//       // ✅ FIX: For bookmaker with single values, show the FIRST available box (index 0) instead of index 2
//       if (isBookmaker && hasOnlySingleValues && index !== 0) {
//         console.log(`🚫 Skipping back box ${index} for bookmaker (single value mode, showing index 0)`)
//         return null
//       }
      
//       const classforbox =
//         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
//           ? 'box-1'
//           : 'box-2'
      
//       // ✅ DEBUG: Log each back box being rendered
//       if (isBookmaker) {
//         console.log(`✅ Rendering back box ${index} for ${runner.runnerName}:`, {
//           index,
//           cls,
//           price: back.price,
//           price1: back.price1,
//           size: back.size,
//           classforbox
//         })
//       }
      
//       return (
//         <div
//           onClick={() => onBet(true, back)}
//           key={index}
//           className={`${classforbox}  text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block'>
//             {market.oddsType == OddsType.BM
//               ? back.price1
//                 ? back.price1
//                 : '-'
//               : back.price
//               ? back.price
//               : '-'}
//           </span>
//           <span className='d-block'>{back.size ? nFormatter(back.size, 1) : '-'}</span>
//         </div>
//       )
//     })
//   }

//   const availableToLay = () => {
//     // For bookmaker markets, check if we should show only single values
//     const isBookmaker = market.oddsType === OddsType.BM
//     const hasOnlySingleValues = isBookmaker && selections?.availableToLay?.length === 1
    
//     // ✅ DEBUG: Log availableToLay processing for bookmaker
//     if (isBookmaker) {
//       console.log(`📊 Processing availableToLay for ${market.marketName}:`, {
//         isBookmaker,
//         hasOnlySingleValues,
//         availableToLayLength: selections?.availableToLay?.length,
//         availableToLay: selections?.availableToLay
//       })
//     }
    
//     if (!selections?.availableToLay || selections.availableToLay.length === 0) {
//       console.log(`⚠️ No lay odds available for ${market.marketName}`)
//       return null
//     }
    
//     return selections?.availableToLay?.map((lay: any, index: number) => {
//       const i = index
//       const cls = index === 0 ? 'lay' : `lay${i}`
//       const blinkCls = lay.changed ? 'blink market-box-glow' : ''
      
//       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//       if (isMobile && market.oddsType == OddsType.F && index != 0) return
      
//       // For bookmaker with single values, show only the main lay box (index 0)
//       if (isBookmaker && hasOnlySingleValues && index !== 0) {
//         console.log(`🚫 Skipping lay box ${index} for bookmaker (single value mode)`)
//         return null
//       }
      
//       const classforbox =
//         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
//           ? 'box-1'
//           : 'box-2'
      
//       // ✅ DEBUG: Log each lay box being rendered  
//       if (isBookmaker) {
//         console.log(`✅ Rendering lay box ${index} for ${runner.runnerName}:`, {
//           index,
//           cls,
//           price: lay.price,
//           price1: lay.price1,
//           size: lay.size,
//           classforbox
//         })
//       }

//       return (
//         <div
//           onClick={() => onBet(false, lay)}
//           key={index}
//           className={`${classforbox}   text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block'>
//             {market.oddsType == OddsType.BM
//               ? lay.price1
//                 ? lay.price1
//                 : '-'
//               : lay.price
//               ? lay.price
//               : '-'}
//           </span>
//           <span className='d-block'>{lay.size ? nFormatter(lay.size, 1) : '-'}</span>
//         </div>
//       )
//     })
//   }

//   return (
//     <>
//       {availableToBack()}
//       {availableToLay()}
//     </>
//   )
// })

// import React from "react";
// import { IBetOn, IBetType } from "../../../models/IBet";
// import IRunner from "../../../models/IRunner";
// import IMarket, { OddsType } from "../../../models/IMarket";
// import { betPopup } from "../../../redux/actions/bet/betSlice";
// import { selectCurrentMatch } from "../../../redux/actions/sports/sportSlice";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
// import authService from "../../../services/auth.service";
// import { nFormatter } from "../../../utils/helper";
// import { selectUserData } from "../../../redux/actions/login/loginSlice";
// import { RoleType } from "../../../models/User";
// import { isMobile } from "react-device-detect";

// type Props = {
//   selections: any;
//   selectionsPrev: any;
//   runner: IRunner;
//   market: IMarket;
// };

// export const AvailableToBackLay = React.memo(
//   ({ selections, market, runner }: Props) => {
//     const dispatch = useAppDispatch();
//     const getCurrentMatch = useAppSelector(selectCurrentMatch);
//     const userState = useAppSelector(selectUserData);
//     const isBookmaker = market.oddsType === OddsType.BM;

//     // ✅ DEBUG: Log data received for bookmaker markets
//     React.useEffect(() => {
//       if (isBookmaker) {
//         console.log(
//           `🎯 AvailableToBackLay received data for bookmaker ${market.marketName}:`,
//           {
//             marketId: market.marketId,
//             marketName: market.marketName,
//             oddsType: market.oddsType,
//             gtype: market.gtype,
//             runnerName: runner.runnerName,
//             runnerSelectionId: runner.selectionId,
//             selections: selections,
//             availableToBack: selections?.availableToBack,
//             availableToLay: selections?.availableToLay,
//             backCount: selections?.availableToBack?.length || 0,
//             layCount: selections?.availableToLay?.length || 0,
//             isBookmakerDetected: isBookmaker,
//             OddsTypeBM: OddsType.BM,
//           }
//         );

//         // ✅ ADDITIONAL DEBUG: Check if data structure is as expected
//         if (selections?.availableToBack?.length === 0) {
//           console.log(
//             `❌ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`
//           );
//         }
//         if (selections?.availableToLay?.length === 0) {
//           console.log(
//             `❌ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`
//           );
//         }
//         if (!selections) {
//           console.log(
//             `❌ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`
//           );
//         }
//       }
//     }, [selections, market, runner, isBookmaker]);

//     const onBet = (
//       isBack = false,
//       back: { price: number; size: number; price1?: string }
//     ) => {
//       const ipAddress = authService.getIpAddress();
//       if (isBookmaker && back.size == 0) return;

//       // For bookmaker markets, use price1 if available, otherwise use price
//       let finalOdds = back.price;
//       if (isBookmaker && back.price1) {
//         finalOdds = parseFloat(back.price1);
//       }

//       // Determine betOn based on market type
//       let betOn = IBetOn.MATCH_ODDS;
//       if (
//         isBookmaker ||
//         market.marketName?.toLowerCase().includes("bookmaker")
//       ) {
//         betOn = "BOOKMAKER" as any;
//         console.log(
//           `🎯 Set betOn to 'BOOKMAKER' for market: ${market.marketName}`
//         );
//       }

//       if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
//         // ✅ ENHANCED: Improved gtype determination for better PnL calculation
//         let gtype = market.gtype;

//         // If gtype is not set, determine it more robustly
//         if (!gtype) {
//           if (isBookmaker) {
//             gtype = "match1"; // Bookmaker
//             console.log(
//               `🎯 Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`
//             );
//           } else if (
//             market.marketName?.toUpperCase().includes("FANCY") ||
//             market.marketName?.toUpperCase().includes("SESSION")
//           ) {
//             gtype = "fancy";
//             console.log(
//               `🎯 Set gtype to 'fancy' based on market name: ${market.marketName}`
//             );
//           } else {
//             gtype = "match"; // Default to match odds
//             console.log(
//               `🎯 Set gtype to 'match' as default for market: ${market.marketName}`
//             );
//           }
//         }

//         console.log(`🎯 Bet popup data for ${market.marketName}:`, {
//           marketId: market.marketId,
//           oddsType: market.oddsType,
//           gtype: gtype,
//           betOn: betOn,
//           odds: finalOdds,
//           isBack,
//           selectionId: runner.selectionId,
//           selectionName: runner.runnerName,
//         });

//         dispatch(
//           betPopup({
//             isOpen: true,
//             betData: {
//               isBack,
//               odds: parseFloat(finalOdds.toFixed(4)),
//               volume: back.size,
//               marketId: market.marketId,
//               marketName: market.marketName,
//               matchId: market.matchId,
//               selectionName: runner.runnerName,
//               selectionId: runner.selectionId,
//               pnl: 0,
//               stack: 0,
//               currentMarketOdds: finalOdds,
//               eventId: market.sportId,
//               exposure: -0,
//               ipAddress: ipAddress,
//               type: IBetType.Match,
//               matchName: getCurrentMatch.name,
//               betOn: betOn,
//               oddsType: market.oddsType,
//               gtype: gtype,
//             },
//           })
//         );
//       }
//     };

//     // ✅ CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
//     const isCricketBookmaker = isBookmaker && (market.sportId === 4 || getCurrentMatch?.sportId === 4);
    
//     // Common box style with proper TypeScript typing
//     const getBoxStyle = (isBack: boolean): React.CSSProperties => ({
//       display: "flex",
//       flexDirection: "column" as "column", // Type assertion
//       justifyContent: "endf",
//       alignItems: "center",
//       minHeight: "40px",
//       padding: "4px",
//       maxWidth: "33%",
//       boxSizing: "border-box",
//       backgroundColor: isBack ? "#72bbef" : "#faa9ba",
//       width: isCricketBookmaker ? "auto" : (isBookmaker ? "100%" : "auto"), // ✅ CRICKET: Use auto width like match odds
//       flex: isCricketBookmaker ? 1 : (isBookmaker ? undefined : 1), // ✅ CRICKET: Use flex like match odds
//     });

//     // Column container style with proper TypeScript typing
//     const columnStyleBack: React.CSSProperties = {
//       flex: 1,
//       display: "flex",
//       gap: "1px",
//       flexDirection: (isBookmaker && !isCricketBookmaker)
//         ? "column"
//         : ("row-reverse" as "column" | "row-reverse"), // ✅ CRICKET: Use row-reverse like match odds
//       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // ✅ CRICKET: Use wrap like match odds
//       alignItems: (isBookmaker && !isCricketBookmaker) ? "flex-end" : undefined, // ✅ CRICKET: No special alignment
//     };
//     const columnStyleLay: React.CSSProperties = {
//       flex: 1,
//       display: "flex",
//       gap: "1px",
//       // padding:"0px",
//       flexDirection: (isBookmaker && !isCricketBookmaker) ? "column" : ("row" as "column" | "row"), // ✅ CRICKET: Use row like match odds
//       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // ✅ CRICKET: Use wrap like match odds
//     };
//     const availableToBack = () => {
//       const hasOnlySingleValues =
//         isBookmaker && selections?.availableToBack?.length === 1;

//       if (
//         !selections?.availableToBack ||
//         selections.availableToBack.length === 0
//       ) {
//         console.log(`⚠️ No back odds available for ${market.marketName}`);
//         return null;
//       }

//       return selections?.availableToBack?.map((back: any, index: number) => {
//         const i = 2 - index;
//         const cls = index === 2 ? "back" : `back${i}`;
//         const blinkCls = back.changed ? "blink market-box-glow" : "";

//         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//         if (isMobile && market.oddsType == OddsType.F && index != 2) return;

//         // ✅ CRICKET FIX: For cricket bookmaker, show all boxes like match odds
//         // For non-cricket bookmaker with single values, show only the first box
//         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

//         return (
//           <div
//             onClick={() => onBet(true, back)}
//             key={index}
//             style={getBoxStyle(true)}
//             className={`text-center back ${cls} ${blinkCls}`}
//           >
//             <span className="odd d-block">
//               {isBookmaker ? back.price1 || "-" : back.price || "-"}
//             </span>
//             <span className="d-block">
//               {back.size ? nFormatter(back.size, 1) : "-"}
//             </span>
//           </div>
//         );
//       });
//     };

//     const availableToLay = () => {
//       const hasOnlySingleValues =
//         isBookmaker && selections?.availableToLay?.length === 1;

//       if (
//         !selections?.availableToLay ||
//         selections.availableToLay.length === 0
//       ) {
//         console.log(`⚠️ No lay odds available for ${market.marketName}`);
//         return null;
//       }

//       return selections?.availableToLay?.map((lay: any, index: number) => {
//         const i = index;
//         const cls = index === 0 ? "lay" : `lay${i}`;
//         const blinkCls = lay.changed ? "blink market-box-glow" : "";

//         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//         if (isMobile && market.oddsType == OddsType.F && index != 0) return;

//         // ✅ CRICKET FIX: For cricket bookmaker, show all boxes like match odds
//         // For non-cricket bookmaker with single values, show only the first box
//         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

//         return (
//           <div
//             onClick={() => onBet(false, lay)}
//             key={index}
//             style={getBoxStyle(false)}
//             className={`text-center ${cls} ${blinkCls}`}
//           >
//             <span className="odd d-block">
//               {isBookmaker ? lay.price1 || "-" : lay.price || "-"}
//             </span>
//             <span className="d-block">
//               {lay.size ? nFormatter(lay.size, 1) : "-"}
//             </span>
//           </div>
//         );
//       });
//     };

//     return (
//       <div
//         style={
//           {
//             display: "flex",
//             width: "100%",
//             // background: "green",
//             overflow: "hidden",
//             boxSizing: "border-box",
//             padding: "0px",
//             gap: "1px",
//           } as React.CSSProperties
//         }
//       >
//         {/* Back Boxes Column */}
//         <div style={columnStyleBack}>{availableToBack()}</div>

//         {/* Lay Boxes Column */}
//         <div style={columnStyleLay}>{availableToLay()}</div>
//       </div>
//     );
//   }
// );














// import React from 'react'
// import { IBetOn, IBetType } from '../../../models/IBet'
// import IRunner from '../../../models/IRunner'
// import IMarket, { OddsType } from '../../../models/IMarket'
// import { betPopup } from '../../../redux/actions/bet/betSlice'
// import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
// import authService from '../../../services/auth.service'
// import { nFormatter } from '../../../utils/helper'
// import { selectUserData } from '../../../redux/actions/login/loginSlice'
// import { RoleType } from '../../../models/User'
// import { isMobile } from 'react-device-detect'

// type Props = {
//   selections: any
//   selectionsPrev: any
//   runner: IRunner
//   market: IMarket
// }
// export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
//   const dispatch = useAppDispatch()
//   const getCurrentMatch = useAppSelector(selectCurrentMatch)
//   const userState = useAppSelector(selectUserData)

//   // ✅ DEBUG: Log data received for bookmaker markets
//   React.useEffect(() => {
//     if (market.oddsType === OddsType.BM) {
//       console.log(`🎯 AvailableToBackLay received data for bookmaker ${market.marketName}:`, {
//         marketId: market.marketId,
//         marketName: market.marketName,
//         oddsType: market.oddsType,
//         gtype: market.gtype,
//         runnerName: runner.runnerName,
//         runnerSelectionId: runner.selectionId,
//         selections: selections,
//         availableToBack: selections?.availableToBack,
//         availableToLay: selections?.availableToLay,
//         backCount: selections?.availableToBack?.length || 0,
//         layCount: selections?.availableToLay?.length || 0,
//         isBookmakerDetected: market.oddsType === OddsType.BM,
//         OddsTypeBM: OddsType.BM
//       })
      
//       // ✅ ADDITIONAL DEBUG: Check if data structure is as expected
//       if (selections?.availableToBack?.length === 0) {
//         console.log(`❌ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`)
//       }
//       if (selections?.availableToLay?.length === 0) {
//         console.log(`❌ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`)
//       }
//       if (!selections) {
//         console.log(`❌ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`)
//       }
//     }
//   }, [selections, market, runner])

//   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
//     const ipAddress = authService.getIpAddress()
//     if (market.oddsType == OddsType.BM && back.size == 0) return
    
//     // For bookmaker markets, use price1 if available, otherwise use price
//     let finalOdds = back.price;
//     if (market.oddsType === OddsType.BM && back.price1) {
//       finalOdds = parseFloat(back.price1);
//     }
    
//     // Determine betOn based on market type
//     let betOn = IBetOn.MATCH_ODDS;
//     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
//       betOn = 'BOOKMAKER' as any; // Set to BOOKMAKER for bookmaker markets
//       console.log(`🎯 Set betOn to 'BOOKMAKER' for market: ${market.marketName}`)
//     }
    
//     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
//       // ✅ ENHANCED: Improved gtype determination for better PnL calculation
//       let gtype = market.gtype
      
//       // If gtype is not set, determine it more robustly
//       if (!gtype) {
//         if (market.oddsType === OddsType.BM) {
//           gtype = 'match1'  // Bookmaker
//           console.log(`🎯 Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`)
//         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
//           gtype = 'fancy'
//           console.log(`🎯 Set gtype to 'fancy' based on market name: ${market.marketName}`)
//         } else {
//           gtype = 'match'  // Default to match odds
//           console.log(`🎯 Set gtype to 'match' as default for market: ${market.marketName}`)
//         }
//       }
      
//       console.log(`🎯 Bet popup data for ${market.marketName}:`, {
//         marketId: market.marketId,
//         oddsType: market.oddsType,
//         gtype: gtype,
//         betOn: betOn,
//         odds: finalOdds,
//         isBack,
//         selectionId: runner.selectionId,
//         selectionName: runner.runnerName
//       })
      
//       dispatch(
//         betPopup({
//           isOpen: true,
//           betData: {
//             isBack,
//             odds: parseFloat(finalOdds.toFixed(4)),
//             volume: back.size,
//             marketId: market.marketId,
//             marketName: market.marketName,
//             matchId: market.matchId,
//             selectionName: runner.runnerName,
//             selectionId: runner.selectionId,
//             pnl: 0,
//             stack: 0,
//             currentMarketOdds: finalOdds,
//             eventId: market.sportId,
//             exposure: -0,
//             ipAddress: ipAddress,
//             type: IBetType.Match,
//             matchName: getCurrentMatch.name,
//             betOn: betOn,
//             oddsType: market.oddsType,
//             gtype: gtype, // ✅ Use the improved gtype determination
//           },
//         }),
//       )
//     }
//   }

//   const availableToBack = () => {
//     // For bookmaker markets, check if we should show only single values
//     const isBookmaker = market.oddsType === OddsType.BM
//     const hasOnlySingleValues = isBookmaker && selections?.availableToBack?.length === 1
    
//     // ✅ DEBUG: Log availableToBack processing for bookmaker
//     if (isBookmaker) {
//       console.log(`📊 Processing availableToBack for ${market.marketName}:`, {
//         isBookmaker,
//         hasOnlySingleValues,
//         availableToBackLength: selections?.availableToBack?.length,
//         availableToBack: selections?.availableToBack,
//         isMobile: isMobile
//       })
//     }
    
//     if (!selections?.availableToBack || selections.availableToBack.length === 0) {
//       console.log(`⚠️ No back odds available for ${market.marketName}`)
//       return null
//     }
    
//     return selections?.availableToBack?.map((back: any, index: number) => {
//       const i = 2 - index
//       const cls = index === 2 ? 'back' : `back${i}`
//       const blinkCls = back.changed ? 'blink market-box-glow' : ''
      
//       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//       if (isMobile && market.oddsType == OddsType.F && index != 2) return
      
//       // ✅ FIX: For bookmaker with single values, show the FIRST available box (index 0) instead of index 2
//       if (isBookmaker && hasOnlySingleValues && index !== 0) {
//         console.log(`🚫 Skipping back box ${index} for bookmaker (single value mode, showing index 0)`)
//         return null
//       }
      
//       const classforbox =
//         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
//           ? 'box-1'
//           : 'box-2'
      
//       // ✅ DEBUG: Log each back box being rendered
//       if (isBookmaker) {
//         console.log(`✅ Rendering back box ${index} for ${runner.runnerName}:`, {
//           index,
//           cls,
//           price: back.price,
//           price1: back.price1,
//           size: back.size,
//           classforbox
//         })
//       }
      
//       return (
//         <div
//           onClick={() => onBet(true, back)}
//           key={index}
//           className={`${classforbox}  text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block'>
//             {market.oddsType == OddsType.BM
//               ? back.price1
//                 ? back.price1
//                 : '-'
//               : back.price
//               ? back.price
//               : '-'}
//           </span>
//           <span className='d-block'>{back.size ? nFormatter(back.size, 1) : '-'}</span>
//         </div>
//       )
//     })
//   }

//   const availableToLay = () => {
//     // For bookmaker markets, check if we should show only single values
//     const isBookmaker = market.oddsType === OddsType.BM
//     const hasOnlySingleValues = isBookmaker && selections?.availableToLay?.length === 1
    
//     // ✅ DEBUG: Log availableToLay processing for bookmaker
//     if (isBookmaker) {
//       console.log(`📊 Processing availableToLay for ${market.marketName}:`, {
//         isBookmaker,
//         hasOnlySingleValues,
//         availableToLayLength: selections?.availableToLay?.length,
//         availableToLay: selections?.availableToLay
//       })
//     }
    
//     if (!selections?.availableToLay || selections.availableToLay.length === 0) {
//       console.log(`⚠️ No lay odds available for ${market.marketName}`)
//       return null
//     }
    
//     return selections?.availableToLay?.map((lay: any, index: number) => {
//       const i = index
//       const cls = index === 0 ? 'lay' : `lay${i}`
//       const blinkCls = lay.changed ? 'blink market-box-glow' : ''
      
//       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//       if (isMobile && market.oddsType == OddsType.F && index != 0) return
      
//       // For bookmaker with single values, show only the main lay box (index 0)
//       if (isBookmaker && hasOnlySingleValues && index !== 0) {
//         console.log(`🚫 Skipping lay box ${index} for bookmaker (single value mode)`)
//         return null
//       }
      
//       const classforbox =
//         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
//           ? 'box-1'
//           : 'box-2'
      
//       // ✅ DEBUG: Log each lay box being rendered  
//       if (isBookmaker) {
//         console.log(`✅ Rendering lay box ${index} for ${runner.runnerName}:`, {
//           index,
//           cls,
//           price: lay.price,
//           price1: lay.price1,
//           size: lay.size,
//           classforbox
//         })
//       }

//       return (
//         <div
//           onClick={() => onBet(false, lay)}
//           key={index}
//           className={`${classforbox}   text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block'>
//             {market.oddsType == OddsType.BM
//               ? lay.price1
//                 ? lay.price1
//                 : '-'
//               : lay.price
//               ? lay.price
//               : '-'}
//           </span>
//           <span className='d-block'>{lay.size ? nFormatter(lay.size, 1) : '-'}</span>
//         </div>
//       )
//     })
//   }

//   return (
//     <>
//       {availableToBack()}
//       {availableToLay()}
//     </>
//   )
// })

// import React from "react";
// import { IBetOn, IBetType } from "../../../models/IBet";
// import IRunner from "../../../models/IRunner";
// import IMarket, { OddsType } from "../../../models/IMarket";
// import { betPopup } from "../../../redux/actions/bet/betSlice";
// import { selectCurrentMatch } from "../../../redux/actions/sports/sportSlice";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
// import authService from "../../../services/auth.service";
// import { nFormatter } from "../../../utils/helper";
// import { selectUserData } from "../../../redux/actions/login/loginSlice";
// import { RoleType } from "../../../models/User";
// import { isMobile } from "react-device-detect";

// type Props = {
//   selections: any;
//   selectionsPrev: any;
//   runner: IRunner;
//   market: IMarket;
// };

// export const AvailableToBackLay = React.memo(
//   ({ selections, market, runner }: Props) => {
//     const dispatch = useAppDispatch();
//     const getCurrentMatch = useAppSelector(selectCurrentMatch);
//     const userState = useAppSelector(selectUserData);
//     const isBookmaker = market.oddsType === OddsType.BM;

//     // ✅ DEBUG: Log data received for bookmaker markets
//     React.useEffect(() => {
//       if (isBookmaker) {
//         console.log(
//           `🎯 AvailableToBackLay received data for bookmaker ${market.marketName}:`,
//           {
//             marketId: market.marketId,
//             marketName: market.marketName,
//             oddsType: market.oddsType,
//             gtype: market.gtype,
//             runnerName: runner.runnerName,
//             runnerSelectionId: runner.selectionId,
//             selections: selections,
//             availableToBack: selections?.availableToBack,
//             availableToLay: selections?.availableToLay,
//             backCount: selections?.availableToBack?.length || 0,
//             layCount: selections?.availableToLay?.length || 0,
//             isBookmakerDetected: isBookmaker,
//             OddsTypeBM: OddsType.BM,
//           }
//         );

//         // ✅ ADDITIONAL DEBUG: Check if data structure is as expected
//         if (selections?.availableToBack?.length === 0) {
//           console.log(
//             `❌ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`
//           );
//         }
//         if (selections?.availableToLay?.length === 0) {
//           console.log(
//             `❌ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`
//           );
//         }
//         if (!selections) {
//           console.log(
//             `❌ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`
//           );
//         }
//       }
//     }, [selections, market, runner, isBookmaker]);

//     const onBet = (
//       isBack = false,
//       back: { price: number; size: number; price1?: string }
//     ) => {
//       const ipAddress = authService.getIpAddress();
//       if (isBookmaker && back.size == 0) return;

//       // For bookmaker markets, use price1 if available, otherwise use price
//       let finalOdds = back.price;
//       if (isBookmaker && back.price1) {
//         finalOdds = parseFloat(back.price1);
//       }

//       // Determine betOn based on market type
//       let betOn = IBetOn.MATCH_ODDS;
//       if (
//         isBookmaker ||
//         market.marketName?.toLowerCase().includes("bookmaker")
//       ) {
//         betOn = "BOOKMAKER" as any;
//         console.log(
//           `🎯 Set betOn to 'BOOKMAKER' for market: ${market.marketName}`
//         );
//       }

//       if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
//         // ✅ ENHANCED: Improved gtype determination for better PnL calculation
//         let gtype = market.gtype;

//         // If gtype is not set, determine it more robustly
//         if (!gtype) {
//           if (isBookmaker) {
//             gtype = "match1"; // Bookmaker
//             console.log(
//               `🎯 Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`
//             );
//           } else if (
//             market.marketName?.toUpperCase().includes("FANCY") ||
//             market.marketName?.toUpperCase().includes("SESSION")
//           ) {
//             gtype = "fancy";
//             console.log(
//               `🎯 Set gtype to 'fancy' based on market name: ${market.marketName}`
//             );
//           } else {
//             gtype = "match"; // Default to match odds
//             console.log(
//               `🎯 Set gtype to 'match' as default for market: ${market.marketName}`
//             );
//           }
//         }

//         console.log(`🎯 Bet popup data for ${market.marketName}:`, {
//           marketId: market.marketId,
//           oddsType: market.oddsType,
//           gtype: gtype,
//           betOn: betOn,
//           odds: finalOdds,
//           isBack,
//           selectionId: runner.selectionId,
//           selectionName: runner.runnerName,
//         });

//         dispatch(
//           betPopup({
//             isOpen: true,
//             betData: {
//               isBack,
//               odds: parseFloat(finalOdds.toFixed(4)),
//               volume: back.size,
//               marketId: market.marketId,
//               marketName: market.marketName,
//               matchId: market.matchId,
//               selectionName: runner.runnerName,
//               selectionId: runner.selectionId,
//               pnl: 0,
//               stack: 0,
//               currentMarketOdds: finalOdds,
//               eventId: market.sportId,
//               exposure: -0,
//               ipAddress: ipAddress,
//               type: IBetType.Match,
//               matchName: getCurrentMatch.name,
//               betOn: betOn,
//               oddsType: market.oddsType,
//               gtype: gtype,
//             },
//           })
//         );
//       }
//     };

//     // ✅ CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
//     const isCricketBookmaker = isBookmaker && (market.sportId === 4 || getCurrentMatch?.sportId === 4);
    
//     // Common box style with proper TypeScript typing
//     const getBoxStyle = (isBack: boolean): React.CSSProperties => ({
//       display: "flex",
//       flexDirection: "column" as "column", // Type assertion
//       justifyContent: "endf",
//       alignItems: "center",
//       minHeight: "40px",
//       padding: "4px",
//       maxWidth: "33%",
//       boxSizing: "border-box",
//       backgroundColor: isBack ? "#72bbef" : "#faa9ba",
//       width: isCricketBookmaker ? "auto" : (isBookmaker ? "100%" : "auto"), // ✅ CRICKET: Use auto width like match odds
//       flex: isCricketBookmaker ? 1 : (isBookmaker ? undefined : 1), // ✅ CRICKET: Use flex like match odds
//     });

//     // Column container style with proper TypeScript typing
//     const columnStyleBack: React.CSSProperties = {
//       flex: 1,
//       display: "flex",
//       gap: "1px",
//       flexDirection: (isBookmaker && !isCricketBookmaker)
//         ? "column"
//         : ("row-reverse" as "column" | "row-reverse"), // ✅ CRICKET: Use row-reverse like match odds
//       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // ✅ CRICKET: Use wrap like match odds
//       alignItems: (isBookmaker && !isCricketBookmaker) ? "flex-end" : undefined, // ✅ CRICKET: No special alignment
//     };
//     const columnStyleLay: React.CSSProperties = {
//       flex: 1,
//       display: "flex",
//       gap: "1px",
//       // padding:"0px",
//       flexDirection: (isBookmaker && !isCricketBookmaker) ? "column" : ("row" as "column" | "row"), // ✅ CRICKET: Use row like match odds
//       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // ✅ CRICKET: Use wrap like match odds
//     };
//     const availableToBack = () => {
//       const hasOnlySingleValues =
//         isBookmaker && selections?.availableToBack?.length === 1;

//       if (
//         !selections?.availableToBack ||
//         selections.availableToBack.length === 0
//       ) {
//         console.log(`⚠️ No back odds available for ${market.marketName}`);
//         return null;
//       }

//       return selections?.availableToBack?.map((back: any, index: number) => {
//         const i = 2 - index;
//         const cls = index === 2 ? "back" : `back${i}`;
//         const blinkCls = back.changed ? "blink market-box-glow" : "";

//         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//         if (isMobile && market.oddsType == OddsType.F && index != 2) return;

//         // ✅ CRICKET FIX: For cricket bookmaker, show all boxes like match odds
//         // For non-cricket bookmaker with single values, show only the first box
//         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

//         return (
//           <div
//             onClick={() => onBet(true, back)}
//             key={index}
//             style={getBoxStyle(true)}
//             className={`text-center back ${cls} ${blinkCls}`}
//           >
//             <span className="odd d-block">
//               {isBookmaker ? back.price1 || "-" : back.price || "-"}
//             </span>
//             <span className="d-block">
//               {back.size ? nFormatter(back.size, 1) : "-"}
//             </span>
//           </div>
//         );
//       });
//     };

//     const availableToLay = () => {
//       const hasOnlySingleValues =
//         isBookmaker && selections?.availableToLay?.length === 1;

//       if (
//         !selections?.availableToLay ||
//         selections.availableToLay.length === 0
//       ) {
//         console.log(`⚠️ No lay odds available for ${market.marketName}`);
//         return null;
//       }

//       return selections?.availableToLay?.map((lay: any, index: number) => {
//         const i = index;
//         const cls = index === 0 ? "lay" : `lay${i}`;
//         const blinkCls = lay.changed ? "blink market-box-glow" : "";

//         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
//         if (isMobile && market.oddsType == OddsType.F && index != 0) return;

//         // ✅ CRICKET FIX: For cricket bookmaker, show all boxes like match odds
//         // For non-cricket bookmaker with single values, show only the first box
//         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

//         return (
//           <div
//             onClick={() => onBet(false, lay)}
//             key={index}
//             style={getBoxStyle(false)}
//             className={`text-center ${cls} ${blinkCls}`}
//           >
//             <span className="odd d-block">
//               {isBookmaker ? lay.price1 || "-" : lay.price || "-"}
//             </span>
//             <span className="d-block">
//               {lay.size ? nFormatter(lay.size, 1) : "-"}
//             </span>
//           </div>
//         );
//       });
//     };

//     return (
//       <div
//         style={
//           {
//             display: "flex",
//             width: "100%",
//             // background: "green",
//             overflow: "hidden",
//             boxSizing: "border-box",
//             padding: "0px",
//             gap: "1px",
//           } as React.CSSProperties
//         }
//       >
//         {/* Back Boxes Column */}
//         <div style={columnStyleBack}>{availableToBack()}</div>

//         {/* Lay Boxes Column */}
//         <div style={columnStyleLay}>{availableToLay()}</div>
//       </div>
//     );
//   }
// );
















// import React from 'react';
// import { IBetOn, IBetType } from '../../../models/IBet';
// import IRunner from '../../../models/IRunner';
// import IMarket, { OddsType } from '../../../models/IMarket';
// import { betPopup } from '../../../redux/actions/bet/betSlice';
// import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice';
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
// import authService from '../../../services/auth.service';
// import { nFormatter } from '../../../utils/helper';
// import { selectUserData } from '../../../redux/actions/login/loginSlice';
// import { RoleType } from '../../../models/User';
// import { isMobile } from 'react-device-detect';

// type Props = {
//   selections: any;
//   selectionsPrev: any;
//   runner: IRunner;
//   market: IMarket;
// };

// export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
//   const dispatch = useAppDispatch();
//   const getCurrentMatch = useAppSelector(selectCurrentMatch);
//   const userState = useAppSelector(selectUserData);

//   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
//     const ipAddress = authService.getIpAddress();
//     if (market.oddsType == OddsType.BM && back.size == 0) return;
//     let finalOdds = back.price;
//     if (market.oddsType === OddsType.BM && back.price1) {
//       finalOdds = parseFloat(back.price1);
//     }
//     let betOn = IBetOn.MATCH_ODDS;
//     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
//       betOn = 'BOOKMAKER' as any;
//     }
//     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
//       let gtype = market.gtype;
//       if (!gtype) {
//         if (market.oddsType === OddsType.BM) {
//           gtype = 'match1';
//         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
//           gtype = 'fancy';
//         } else {
//           gtype = 'match';
//         }
//       }
//       dispatch(
//         betPopup({
//           isOpen: true,
//           betData: {
//             isBack,
//             odds: parseFloat(finalOdds.toFixed(4)),
//             volume: back.size,
//             marketId: market.marketId,
//             marketName: market.marketName,
//             matchId: market.matchId,
//             selectionName: runner.runnerName,
//             selectionId: runner.selectionId,
//             pnl: 0,
//             stack: 0,
//             currentMarketOdds: finalOdds,
//             eventId: market.sportId,
//             exposure: -0,
//             ipAddress: ipAddress,
//             type: IBetType.Match,
//             matchName: getCurrentMatch.name,
//             betOn: betOn,
//             oddsType: market.oddsType,
//             gtype: gtype,
//           },
//         })
//       );
//     }
//   };

//   // --- SHIFT & REVERSE LOGIC FOR BACK ODDS ---
//   const availableToBack = () => {
//     let oddsArr = selections.availableToBack ? [...selections.availableToBack] : [];
//     if (oddsArr.length > 1) {
//       oddsArr = oddsArr.filter(o => o && (o.price1 || o.price));
//       while (oddsArr.length < 3) {
//         oddsArr.unshift(null);
//       }
//       // oddsArr = oddsArr.reverse();
//     }
//     if (oddsArr.length === 0) {
//       const classforbox = (!isMobile) ? 'box-1' : 'box-2';
//       return (
//         <div className={`${classforbox} text-center back no-odds-box`}>
//           <span className='odd d-block' style={{ fontSize: '13px' }}>-</span>
//           <span className='d-block'>-</span>
//         </div>
//       );
//     }
//     return oddsArr.map((back: any, index: number) => {
//       const i = index;
//       // Always use 'box-1 back' for all boxes (so all have first box color)
//       const classforbox = 'box-1 back';
//       const cls = `back${i}`;
//       const blinkCls = back && back.changed ? 'blink market-box-glow' : '';
//       if (isMobile && index !== 0) return null;
//       return (
//         <div
//           onClick={() => back ? onBet(true, back) : null}
//           key={index}
//           className={`${classforbox} text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block' style={{fontSize:'13px'}}>
//             {back
//               ? (market.oddsType == OddsType.BM
//                   ? back.price1
//                     ? back.price1
//                     : '-'
//                   : back.price
//                   ? back.price
//                   : '-')
//               : '-'}
//           </span>
//           <span className='d-block'>{back && back.size ? nFormatter(back.size, 1) : '-'}</span>
//         </div>
//       );
//     });
//   };

//   // --- LAY ODDS (left shift logic, reversed row) ---
//   const availableToLay = () => {
//     let oddsArr = selections.availableToLay ? [...selections.availableToLay] : [];
//     if (oddsArr.length > 1) {
//       oddsArr = oddsArr.filter(o => o && (o.price1 || o.price));
//       while (oddsArr.length < 3) {
//         oddsArr.push(null);
//       }
//       oddsArr = oddsArr.reverse(); // Reverse the row for lay odds
//     }
//     if (oddsArr.length === 0) {
//       const classforbox = (!isMobile) ? 'box-1' : 'box-2';
//       return (
//         <div className={`${classforbox} text-center lay no-odds-box`}>
//           <span className='odd d-block' style={{ fontSize: '13px' }}>-</span>
//           <span className='d-block'>-</span>
//         </div>
//       );
//     }
//     return oddsArr.map((lay: any, index: number) => {
//       const i = index;
//       const cls = index === 0 ? 'lay' : `lay${i}`;
//       const blinkCls = lay && lay.changed ? 'blink market-box-glow' : '';
//       if (isMobile && index !== 0) return null;
//       const classforbox = (!isMobile) ? 'box-1' : 'box-2';
//       return (
//         <div
//           onClick={() => lay ? onBet(false, lay) : null}
//           key={index}
//           className={`${classforbox} text-center ${cls} ${blinkCls}`}
//         >
//           <span className='odd d-block' style={{fontSize:'13px'}}>
//             {lay
//               ? (market.oddsType == OddsType.BM
//                   ? lay.price1
//                     ? lay.price1
//                     : '-'
//                   : lay.price
//                   ? lay.price
//                   : '-')
//               : '-'}
//           </span>
//           <span className='d-block'>{lay && lay.size ? nFormatter(lay.size, 1) : '-'}</span>
//         </div>
//       );
//     });
//   };

//   return (
//     <>
//       {availableToBack()}
//       {availableToLay()}
//     </>
//   );
// });



//namire update

import React from 'react';
import { IBetOn, IBetType } from '../../../models/IBet';
import IRunner from '../../../models/IRunner';
import IMarket, { OddsType } from '../../../models/IMarket';
import { betPopup } from '../../../redux/actions/bet/betSlice';
import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import authService from '../../../services/auth.service';
import { nFormatter } from '../../../utils/helper';
import { selectUserData } from '../../../redux/actions/login/loginSlice';
import { RoleType } from '../../../models/User';
import { isMobile } from 'react-device-detect';

type Props = {
  selections: any;
  selectionsPrev: any;
  runner: IRunner;
  market: IMarket;
};

export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
  const dispatch = useAppDispatch();
  const getCurrentMatch = useAppSelector(selectCurrentMatch);
  const userState = useAppSelector(selectUserData);

  const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
    const ipAddress = authService.getIpAddress();
    if (market.oddsType == OddsType.BM && back.size == 0) return;
    let finalOdds = back.price;
    if (market.oddsType === OddsType.BM && back.price1) {
      finalOdds = parseFloat(back.price1);
    }
    let betOn = IBetOn.MATCH_ODDS;
    if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
      betOn = 'BOOKMAKER' as any;
    }
    if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
      let gtype = market.gtype;
      if (!gtype) {
        if (market.oddsType === OddsType.BM) {
          gtype = 'match1';
        } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
          gtype = 'fancy';
        } else {
          gtype = 'match';
        }
      }
      dispatch(
        betPopup({
          isOpen: true,
          betData: {
            isBack,
            odds: parseFloat(finalOdds.toFixed(4)),
            volume: back.size,
            marketId: market.marketId,
            marketName: market.marketName,
            matchId: market.matchId,
            selectionName: runner.runnerName,
            selectionId: runner.selectionId,
            pnl: 0,
            stack: 0,
            currentMarketOdds: finalOdds,
            eventId: market.sportId,
            exposure: -0,
            ipAddress: ipAddress,
            type: IBetType.Match,
            matchName: getCurrentMatch.name,
            betOn: betOn,
            oddsType: market.oddsType,
            gtype: gtype,
          },
        })
      );
    }
  };

  // --- SHIFT & REVERSE LOGIC FOR BACK ODDS ---
  const availableToBack = () => {
    let oddsArr = selections.availableToBack ? [...selections.availableToBack] : [];
    if (oddsArr.length > 1) {
      oddsArr = oddsArr.filter(o => o && (o.price1 || o.price));
      while (oddsArr.length < 3) {
        oddsArr.push(null);
      }
      if (isMobile) {
         oddsArr = oddsArr.reverse();
      }
    }
    if (oddsArr.length === 0) {
      const classforbox = (!isMobile) ? 'box-1 back' : 'box-2 back';
      return (
        <div className={`${classforbox} text-center back no-odds-box`}>
          <span className='odd d-block' style={{ fontSize: '13px' }}>-</span>
          <span className='d-block'>-</span>
        </div>
      );
    }
    return oddsArr.map((back: any, index: number) => {
      const i = index;
      // Always use 'box-1 back' for all boxes (so all have first box color)
      // const classforbox = 'box-1 back';
      // const cls = index === 2 ? 'back' : `back${2-i}`;
      const cls = isMobile ? 'back' : (index === 2 ? 'back' : `back${2 - index}`);

      const blinkCls = back && back.changed ? 'blink market-box-glow' : '';
       const classforbox = (!isMobile) ? 'box-1' : 'box-2';
      if (isMobile && index !== 0) return null;
      return (
        <div
          onClick={() => back ? onBet(true, back) : null}
          key={index}
          className={`${classforbox} text-center ${cls} ${blinkCls}`}
        >
          <span className='odd d-block' style={{ fontSize: '13px' }}>
            {back
              ? (market.oddsType == OddsType.BM
                ? back.price1
                  ? back.price1
                  : '-'
                : back.price
                  ? back.price
                  : '-')
              : '-'}
          </span>
          <span className='d-block'>{back && back.size ? nFormatter(back.size, 1) : '-'}</span>
        </div>
      );
    });
  };

  // --- LAY ODDS (left shift logic, reversed row) ---
  const availableToLay = () => {
    let oddsArr = selections.availableToLay ? [...selections.availableToLay] : [];
    if (oddsArr.length > 1) {
      oddsArr = oddsArr.filter(o => o && (o.price1 || o.price));
      while (oddsArr.length < 3) {
        oddsArr.push(null);
      }
      // Don't reverse for Match Odds markets (reversing causes first/third values to swap)
      const isMatchOddsMarket = /match[_-\s]?odds/i.test(market.marketName || '') || market.gtype === 'match';
      if (!isMatchOddsMarket) {
        oddsArr = oddsArr.reverse(); // Reverse the row for lay odds
      }
    }
    if (oddsArr.length === 0) {
      const classforbox = (!isMobile) ? 'box-1 lay' : 'box-2 lay';
      return (
        <div className={`${classforbox} text-center lay no-odds-box`}>
          <span className='odd d-block' style={{ fontSize: '13px' }}>-</span>
          <span className='d-block'>-</span>
        </div>
      );
    }
    return oddsArr.map((lay: any, index: number) => {
      const i = index;
      const cls = index === 0 ? 'lay' : `lay${i}`;
      const blinkCls = lay && lay.changed ? 'blink market-box-glow' : '';
      if (isMobile && index !== 0) return null;
      const classforbox = (!isMobile) ? 'box-1' : 'box-2';
      return (
        <div
          onClick={() => lay ? onBet(false, lay) : null}
          key={index}
          className={`${classforbox} text-center ${cls} ${blinkCls}`}
        >
          <span className='odd d-block' style={{ fontSize: '13px' }}>
            {lay
              ? (market.oddsType == OddsType.BM
                ? lay.price1
                  ? lay.price1
                  : '-'
                : lay.price
                  ? lay.price
                  : '-')
              : '-'}
          </span>
          <span className='d-block'>{lay && lay.size ? nFormatter(lay.size, 1) : '-'}</span>
        </div>
      );
    });
  };

  return (
    <>
   <div className="new-container">
  <div className="new-child new-back">
    {availableToBack()}
  </div>
  <div className="new-child new-lay">
    {availableToLay()}
  </div>
</div>

    </>
  );
});
