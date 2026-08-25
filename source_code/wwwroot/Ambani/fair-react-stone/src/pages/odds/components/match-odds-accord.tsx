
// import React from 'react';
// import IMarket, { OddsType } from "../../../models/IMarket";
// import IRunner from "../../../models/IRunner";
// import { AvailableToBackLay } from './available-to-back-lay';
// import PnlCalculate from './pnl-calculate';

// interface MatchOddsAccordProps {
//   market: IMarket;
//   oddsData?: {
//     runners?: IRunner[];
//   };
//   isMobile: boolean;
//   classforheadingfirst: string;
//   classforheading: string;
//   runnersName: Record<string, string>;
//   getMarketBook: any;
//   selectionsPrev: any;
// }

// const MatchOddsAccord: React.FC<MatchOddsAccordProps> = ({
//   market,
//   oddsData,
//   isMobile,
//   classforheadingfirst,
//   classforheading,
//   runnersName,
//   getMarketBook,
//   selectionsPrev
// }) => {
//   return (
//     <div className=''>
//       {/* Header Section */}
//       <div className="table-header">
//         <div className={`float-left country-name ${classforheadingfirst} min-max`}>
//           <b />
//         </div>

//         {(() => {
//           // Check for 6 odds (3 back, 3 lay) in any market
//           const runners = oddsData?.runners || [];
//           const firstRunner = runners[0];
//           const backLen = firstRunner?.ex?.availableToBack?.length || 0;
//           const layLen = firstRunner?.ex?.availableToLay?.length || 0;
//           const isSixOdds = backLen === 3 && layLen === 3;

//           if (isSixOdds) {
//             // Render odds_market header style (3 BACK, 3 LAY columns)
//             return (
//               <>
//                 <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
//                 <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
//                 <div className={`box-1 float-left back text-center ${classforheading}`}><b>BACK</b></div>
//                 <div className={`box-1 float-left lay text-center ${classforheading}`}><b>LAY</b></div>
//                 <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
//                 <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
//               </>
//             );
//           }

//           // Fallback to previous logic for other cases
//           const isBookmaker = market.oddsType === OddsType.BM;
//           const hasOnlySingleValues =
//             isBookmaker ||
//             backLen === 1 ||
//             layLen === 1;

//           if (isBookmaker || hasOnlySingleValues) {
//             return (
//               <>
//                 <div className={`back ${classforheading} float-left text-center`}>
//                   <b>BACK</b>
//                 </div>
//                 <div className={`lay ${classforheading} float-left text-center`}>
//                   <b>LAY</b>
//                 </div>
//               </>
//             );
//           } else {
//             return (
//               <>
//                 {(!isMobile || market.oddsType != OddsType.F) && (
//                   <>
//                     <div className="box-1 float-left" />
//                     <div className="box-1 float-left" />
//                   </>
//                 )}

//                 <div className={` ${classforheading} float-left text-center`}>
//                   <b>BACK</b>
//                 </div>

//                 <div className={` ${classforheading} float-left text-center`}>
//                   <b>LAY</b>
//                 </div>
                
//                 {(!isMobile || market.oddsType != OddsType.F) && (
//                   <>
//                     <div className="box-1 float-left" />
//                     <div className="box-1 float-left" />
//                   </>
//                 )}
//               </>
//             );
//           }
//         })()}
//       </div>

//       {/* Runner Rows Section - Below the header */}
//       <div className="runner-rows-container ">
//         {oddsData?.runners
//           ?.sort((a: any, b: any) => a?.sortPriority - b?.sortPriority)
//           .map((runner: IRunner) => {
//             const runnerName = runnersName?.[market.marketId]?.[runner.selectionId] || runner.runnerName;
//             return (
//               <div key={runner.selectionId} className="runner-row ">
//                 <div
//                   data-title={runner.status}
//                   className={`table-row ${runner.status === "SUSPENDED" ? "suspended" : ""}`}
//                 >
//                   <div className={`country-name   ${classforheadingfirst}`}>
//                     <span className="team-name">
//                       <b>{runnerName}</b>
//                     </span>
//                     <p>
//                       {getMarketBook[`${market.marketId}_${runner.selectionId}`] ? (
//                         <span
//                           className={
//                             getMarketBook[`${market.marketId}_${runner.selectionId}`] > 0
//                               ? "green"
//                               : "red"
//                           }
//                         >
//                           {getMarketBook[`${market.marketId}_${runner.selectionId}`].toLocaleString()}
//                         </span>
//                       ) : (
//                         <span className="" style={{ color: "black" }}>
//                           {" "}
//                         </span>
//                       )}

//                       <PnlCalculate
//                         marketId={market.marketId}
//                         selectionId={runner.selectionId}
//                       />
//                     </p>
//                   </div>
//                   <AvailableToBackLay
//                     selections={runner.ex}
//                     selectionsPrev={selectionsPrev}
//                     market={market}
//                     runner={runner}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default MatchOddsAccord;




//namire updates 

//import React from 'react';
// import IMarket, { OddsType } from "../../../models/IMarket";
// import IRunner from "../../../models/IRunner";
// import { AvailableToBackLay } from './available-to-back-lay';
// import PnlCalculate from './pnl-calculate';

// interface MatchOddsAccordProps {
//   market: IMarket;
//   oddsData?: {
//     runners?: IRunner[];
//   };
//   isMobile: boolean;
//   classforheadingfirst: string;
//   classforheading: string;
//   runnersName: Record<string, string>;
//   getMarketBook: any;
//   selectionsPrev: any;
// }

// const MatchOddsAccord: React.FC<MatchOddsAccordProps> = ({
//   market,
//   oddsData,
//   isMobile,
//   classforheadingfirst,
//   classforheading,
//   runnersName,
//   getMarketBook,
//   selectionsPrev
// }) => {
//   return (
//     <div className=''>
//       {/* Header Section */}
//       <div className="table-header">
//         <div className={`float-left country-name ${classforheadingfirst} min-max`}>
//           <b />
//         </div>

//         {(() => {
//           // Check for 6 odds (3 back, 3 lay) in any market
//           const runners = oddsData?.runners || [];
//           const firstRunner = runners[0];
//           const backLen = firstRunner?.ex?.availableToBack?.length || 0;
//           const layLen = firstRunner?.ex?.availableToLay?.length || 0;
//           const isSixOdds = backLen === 3 && layLen === 3;

//         if (isSixOdds) {
//   if (isMobile) {
//     // Mobile header (simplified view)
//     return (
//       <>
//         <div className={`box-2 float-left back text-center ${classforheading}`}>
//           <b>BACK</b>
//         </div>
//         <div className={`box-2 float-left lay text-center ${classforheading}`}>
//           <b>LAY</b>
//         </div>
//       </>
//     );
//   }

//   // Desktop header (3 BACK, 3 LAY columns)
//   return (
//     <>
//       <div className={`box-1 float-left text-center ${classforheading}`} />
//       <div className={`box-1 float-left text-center ${classforheading}`} />
//       <div className={`box-1 float-left back text-center ${classforheading}`}><b>BACK</b></div>
//       <div className={`box-1 float-left lay text-center ${classforheading}`}><b>LAY</b></div>
//       <div className={`box-1 float-left text-center ${classforheading}`} />
//       <div className={`box-1 float-left text-center ${classforheading}`} />
//     </>
//   );
// }


//           // Fallback to previous logic for other cases
//           const isBookmaker = market.oddsType === OddsType.BM;
//           const hasOnlySingleValues =
//             isBookmaker ||
//             backLen === 1 ||
//             layLen === 1;

//           if (isBookmaker || hasOnlySingleValues) {
//             return (
//               <>
//                 <div className={`back ${classforheading} float-left text-center`}>
//                   <b>BACK</b>
//                 </div>
//                 <div className={`lay ${classforheading} float-left text-center`}>
//                   <b>LAY</b>
//                 </div>
//               </>
//             );
//           } else {
//             return (
//               <>
//                 {(!isMobile || market.oddsType != OddsType.F) && (
//                   <>
//                     <div className="box-1 float-left" />
//                     <div className="box-1 float-left" />
//                   </>
//                 )}

//                 <div className={` ${classforheading} float-left text-center`}>
//                   <b>BACK</b>
//                 </div>

//                 <div className={` ${classforheading} float-left text-center`}>
//                   <b>LAY</b>
//                 </div>

//                 {(!isMobile || market.oddsType != OddsType.F) && (
//                   <>
//                     <div className="box-1 float-left" />
//                     <div className="box-1 float-left" />
//                   </>
//                 )}
//               </>
//             );
//           }
//         })()}
//       </div>

//       {/* Runner Rows Section - Below the header */}
//       <div className="runner-rows-container ">
//         {oddsData?.runners
//           ?.sort((a: any, b: any) => a?.sortPriority - b?.sortPriority)
//           .map((runner: IRunner) => {
//             const runnerName = runnersName?.[market.marketId]?.[runner.selectionId] || runner.runnerName;
//             return (
//               <div key={runner.selectionId} className="runner-row ">
//                 <div
//                   data-title={runner.status}
//                   className={`table-row ${runner.status === "SUSPENDED" ? "suspended" : ""}`}
//                 >
//                   <div className={`country-name   ${classforheadingfirst}`}>
//                     <span className="team-name">
//                       <b>{runnerName}</b>
//                     </span>
//                     <p>
//                       {getMarketBook[`${market.marketId}_${runner.selectionId}`] ? (
//                         <span
//                           className={
//                             getMarketBook[`${market.marketId}_${runner.selectionId}`] > 0
//                               ? "green"
//                               : "red"
//                           }
//                         >
//                           {getMarketBook[`${market.marketId}_${runner.selectionId}`].toLocaleString()}
//                         </span>
//                       ) : (
//                         <span className="" style={{ color: "black" }}>
//                           {" "}
//                         </span>
//                       )}

//                       <PnlCalculate
//                         marketId={market.marketId}
//                         selectionId={runner.selectionId}
//                       />
//                     </p>
//                   </div>
//                   <AvailableToBackLay
//                     selections={runner.ex}
//                     selectionsPrev={selectionsPrev}
//                     market={market}
//                     runner={runner}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default MatchOddsAccord;




import React from 'react';
import IMarket, { OddsType } from "../../../models/IMarket";
import IRunner from "../../../models/IRunner";
import { AvailableToBackLay } from './available-to-back-lay';
import PnlCalculate from './pnl-calculate';

interface MatchOddsAccordProps {
  market: IMarket;
  oddsData?: {
    runners?: IRunner[];
  };
  isMobile: boolean;
  classforheadingfirst: string;
  classforheading: string;
  runnersName: Record<string, string>;
  getMarketBook: any;
  selectionsPrev: any;
}

const MatchOddsAccord: React.FC<MatchOddsAccordProps> = ({
  market,
  oddsData,
  isMobile,
  classforheadingfirst,
  classforheading,
  runnersName,
  getMarketBook,
  selectionsPrev
}) => {
  return (
    <div className=''>
      {/* Header Section */}
      <div className="table-header">
        <div className={`float-left country-name ${classforheadingfirst} min-max`}>
          <b />
        </div>

        {(() => {
          // Check for 6 odds (3 back, 3 lay) in any market
          const runners = oddsData?.runners || [];
          const firstRunner = runners[0];
          const backLen = firstRunner?.ex?.availableToBack?.length || 0;
          const layLen = firstRunner?.ex?.availableToLay?.length || 0;
          const isSixOdds = backLen === 3 && layLen === 3;

          if (isSixOdds && !isMobile) {
            // Render odds_market header style (3 BACK, 3 LAY columns)
            return (
              <>
                <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
                <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
                <div className={`box-1 float-left back text-center ${classforheading}`}><b>BACK</b></div>
                <div className={`box-1 float-left lay text-center ${classforheading}`}><b>LAY</b></div>
                <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
                <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
              </>
            );

          }
          if ( isMobile) {
            return (
              <>
                <div className={`box-1 float-left back text-center ${classforheading}`}><b>BACK</b></div>
                <div className={`box-1 float-left lay text-center ${classforheading}`}><b>LAY</b></div>
              </>
            );
          }
          // Fallback to previous logic for other cases
          const isBookmaker = market.oddsType === OddsType.BM;
          const hasOnlySingleValues =
            isBookmaker ||
            backLen === 1 ||
            layLen === 1;

          if (isBookmaker || hasOnlySingleValues) {
            return (
              <>
                <div className={`back ${classforheading} float-left text-center`}>
                  <b>BACK</b>
                </div>
                <div className={`lay ${classforheading} float-left text-center`}>
                  <b>LAY</b>
                </div>
              </>
            );
          } else {
            return (
              <>
                {(!isMobile || market.oddsType != OddsType.F) && (
                  <>
                    <div className="box-1 float-left" />
                    <div className="box-1 float-left" />
                  </>
                )}

                <div className={` ${classforheading} float-left text-center`}>
                  <b>BACK</b>
                </div>

                <div className={` ${classforheading} float-left text-center`}>
                  <b>LAY</b>
                </div>

                {(!isMobile || market.oddsType != OddsType.F) && (
                  <>
                    <div className="box-1 float-left" />
                    <div className="box-1 float-left" />
                  </>
                )}
              </>
            );
          }
        })()}
      </div>

      {/* Runner Rows Section - Below the header */}
      <div className="runner-rows-container ">
        {oddsData?.runners
          ?.sort((a: any, b: any) => a?.sortPriority - b?.sortPriority)
          .map((runner: IRunner) => {
            const runnerName = runnersName?.[market.marketId]?.[runner.selectionId] || runner.runnerName;
            return (
              <div key={runner.selectionId} className="runner-row ">
                <div
                  data-title={runner.status}
                  className={`table-row ${runner.status === "SUSPENDED" ? "suspended" : ""}`}
                >
                  <div className={`country-name   ${classforheadingfirst}`}>
                    <span className="team-name">
                      <b>{runnerName}</b>
                    </span>
                    <p>
                      {getMarketBook[`${market.marketId}_${runner.selectionId}`] ? (
                        <span
                          className={
                            getMarketBook[`${market.marketId}_${runner.selectionId}`] > 0
                              ? "green"
                              : "red"
                          }
                        >
                          {getMarketBook[`${market.marketId}_${runner.selectionId}`].toLocaleString()}
                        </span>
                      ) : (
                        <span className="" style={{ color: "black" }}>
                          {" "}
                        </span>
                      )}

                      <PnlCalculate
                        marketId={market.marketId}
                        selectionId={runner.selectionId}
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
          })}
      </div>
    </div>
  );
};

export default MatchOddsAccord;





