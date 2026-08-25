// import React from 'react'
// import LMatch from '../../../models/LMatch'
// import moment from 'moment'
// import { dateFormat } from '../../../utils/helper'

// interface MatchListProps {
//   matchList: LMatch[];
//   currentMatch: (match: LMatch) => void;
//   memoOdds: (marketId: string | null) => React.ReactNode;
// }

// interface Runner {
//   selectionId: number;
//   runnerName: string;
//   handicap: number;
//   sortPriority: number;
//   ex?: {
//     availableToBack?: Array<{
//       price: number;
//       size: number;
//     }>;
//     availableToLay?: Array<{
//       price: number;
//       size: number;
//     }>;
//   };
// }

// interface ExternalDataSection {
//   sid: number;
//   sno: number;
//   gstatus: string;
//   gscode: number;
//   nat: string;
//   odds: Array<{
//     sid: number;
//     psid: number;
//     odds: number;
//     otype: string;
//     oname: string;
//     tno: number;
//     size: number;
//   }>;
// }

// const MatchList: React.FC<MatchListProps> = ({ matchList, currentMatch, memoOdds }) => {

//   // Helper function to extract odds from externalData section
//   const getOddsFromExternalData = (match: LMatch) => {
//     if (!match.externalData?.section || !Array.isArray(match.externalData.section)) {
//       return { odds1: { back: '-', lay: '-' }, oddsX: { back: '-', lay: '-' }, odds2: { back: '-', lay: '-' } };
//     }

//     const sections = match.externalData.section as ExternalDataSection[];

//     // Find sections by sno (1 = first team, 2 = draw, 3 = second team)
//     const team1Section = sections.find(s => s.sno === 1);
//     const drawSection = sections.find(s => s.sno === 2);
//     const team2Section = sections.find(s => s.sno === 3);

//     const extractOdds = (section: ExternalDataSection | undefined) => {
//       if (!section?.odds) return { back: '-', lay: '-' };

//       const backOdd = section.odds.find(o => o.otype === 'back');
//       const layOdd = section.odds.find(o => o.otype === 'lay');

//       return {
//         back: backOdd ? backOdd.odds.toFixed(2) : '-',
//         lay: layOdd ? layOdd.odds.toFixed(2) : '-'
//       };
//     };

//     return {
//       odds1: extractOdds(team1Section),
//       oddsX: extractOdds(drawSection),
//       odds2: extractOdds(team2Section)
//     };
//   };

//   // Helper function to get odds from market data (fallback)
//   const getOddsFromMarkets = (match: LMatch) => {
//     const market = match?.markets?.[0];
//     const runners = market?.runners || [];

//     // Find back/lay odds for each selection
//     const getOdds = (selectionId: number) => {
//       const runner = runners.find((r: Runner) => r.selectionId === selectionId);
//       if (!runner?.ex) return { back: '-', lay: '-' };

//       const back = runner.ex.availableToBack?.[0]?.price || '-';
//       const lay = runner.ex.availableToLay?.[0]?.price || '-';
//       return { 
//         back: back !== '-' ? parseFloat(back.toString()).toFixed(2) : '-',
//         lay: lay !== '-' ? parseFloat(lay.toString()).toFixed(2) : '-'
//       };
//     };

//     return {
//       odds1: getOdds(1),
//       oddsX: getOdds(2), // Draw is usually selection 2
//       odds2: getOdds(3)
//     };
//   };

//   return (
//     <div className='card-content'>
//       <table className='table coupon-table'>
//         <thead>
//           <tr>
//             <th style={{ width: '63%' }}>Game</th>
//             <th colSpan={2}>1</th>
//             <th colSpan={2}>X</th>
//             <th colSpan={2}>2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {matchList.map((match: LMatch, index: number) => {
//             // Try to get odds from externalData first, then fallback to markets
//             const externalOdds = getOddsFromExternalData(match);
//             const marketOdds = getOddsFromMarkets(match);

//             // Use external data if available, otherwise use market data
//             const odds1 = externalOdds.odds1.back !== '-' ? externalOdds.odds1 : marketOdds.odds1;
//             const oddsX = externalOdds.oddsX.back !== '-' ? externalOdds.oddsX : marketOdds.oddsX;
//             const odds2 = externalOdds.odds2.back !== '-' ? externalOdds.odds2 : marketOdds.odds2;

//             return (
//               <tr key={`${match.matchId}_${index}`}>
//                 <td>
//                   <div className='game-name'>
//                     <a
//                       onClick={() => currentMatch(match)}
//                       className='text-dark'
//                       href={undefined}
//                     >
//                       {match.name || match.ename} / {moment(match.matchDateTime).format(dateFormat)}
//                     </a>
//                   </div>
//                   <div className='game-icons'>
//                     {/* In-play indicator */}
//                     {(match.inPlay || 
//                       match.iplay || 
//                       new Date(match.matchDateTime).getTime() < new Date().getTime()) && (
//                       <span className='game-icon'>
//                         <span className='active' />
//                       </span>
//                     )}

//                     {/* TV icon - show if tv flag is true */}
//                     {match.tv === true && (
//                       <span className='game-icon'>
//                         <i className='fas fa-tv v-m icon-tv' />
//                       </span>
//                     )}

//                     {/* Fancy icon - show if f flag is true */}
//                     {(match.f === true || match.isFancy === true) && (
//                       <span className='game-icon'>
//                         <img
//                           src='/assets/images/icons/ic_fancy.png'
//                           className='fancy-icon'
//                           alt='Fancy'
//                         />
//                       </span>
//                     )}

//                     {/* Bookmaker icon - show if bm flag is true */}
//                     {(match.bm === true || match.isBookMaker === true) && (
//                       <span className='game-icon'>
//                         <img
//                           src='/assets/images/icons/ic_bm.png'
//                           className='bookmaker-icon'
//                           alt='Bookmaker'
//                         />
//                       </span>
//                     )}
//                   </div>
//                 </td>

//                 {/* 1 Odds */}
//                 <td className="back-1">
//                   <button className="back" disabled={odds1.back === '-'}>
//                     <span className="odd">{odds1.back}</span>
//                   </button>
//                 </td>
//                 <td className="lay-1">
//                   <button className="lay" disabled={odds1.lay === '-'}>
//                     <span className="odd">{odds1.lay}</span>
//                   </button>
//                 </td>

//                 {/* X Odds */}
//                 <td className="back-x">
//                   <button className="back" disabled={oddsX.back === '-'}>
//                     <span className="odd">{oddsX.back}</span>
//                   </button>
//                 </td>
//                 <td className="lay-x">
//                   <button className="lay" disabled={oddsX.lay === '-'}>
//                     <span className="odd">{oddsX.lay}</span>
//                   </button>
//                 </td>

//                 {/* 2 Odds */}
//                 <td className="back-2">
//                   <button className="back" disabled={odds2.back === '-'}>
//                     <span className="odd">{odds2.back}</span>
//                   </button>
//                 </td>
//                 <td className="lay-2">
//                   <button className="lay" disabled={odds2.lay === '-'}>
//                     <span className="odd">{odds2.lay}</span>
//                   </button>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default MatchList


import React from "react";
import LMatch from "../../../models/LMatch";
import moment from "moment";
import { dateFormat } from "../../../utils/helper";
import { current } from "@reduxjs/toolkit";
import { CustomLink } from "../../_layout/elements/custom-link";
import { useAppSelector } from "../../../redux/hooks";
import { selectCasinoMatchList } from "../../../redux/actions/casino/casinoSlice";
import CasinoListItem from "../../CasinoList/CasinoListItem";
import { useParams } from "react-router-dom";

interface MatchListProps {
  matchList: LMatch[];
  currentMatch: (match: LMatch) => void;
  memoOdds: (marketId: string | null) => React.ReactNode;
  category?: string;
}
interface Runner {
  selectionId: number;
  runnerName: string;
  handicap: number;
  sortPriority: number;
  ex?: {
    availableToBack?: Array<{
      price: number;
      size: number;
    }>;
    availableToLay?: Array<{
      price: number;
      size: number;
    }>;
  };
}

interface ExternalDataSection {
  sid: number;
  sno: number;
  gstatus: string;
  gscode: number;
  nat: string;
  odds: Array<{
    sid: number;
    psid: number;
    odds: number;
    otype: string;
    oname: string;
    tno: number;
    size: number;
  }>;
}

const MatchList: React.FC<MatchListProps> = ({
  matchList,
  currentMatch,
  memoOdds,
  category,
}) => {
  const { sportId } = useParams();
  const gamesList = useAppSelector<any>(selectCasinoMatchList);
  
  // Helper function to extract odds from externalData section
  const getOddsFromExternalData = (match: LMatch) => {
    if (
      !match.externalData?.section ||
      !Array.isArray(match.externalData.section)
    ) {
      return {
        odds1: { back: "-", lay: "-", backSize: "-", laySize: "-" },
        oddsX: { back: "-", lay: "-", backSize: "-", laySize: "-" },
        odds2: { back: "-", lay: "-", backSize: "-", laySize: "-" },
      };
    }

    const sections = match.externalData.section as ExternalDataSection[];

    // Find sections by sno (1 = first team, 2 = draw, 3 = second team)
    const team1Section = sections.find((s) => s.sno === 1);
    const drawSection = sections.find((s) => s.sno === 2);
    const team2Section = sections.find((s) => s.sno === 3);

    const extractOdds = (section: ExternalDataSection | undefined) => {
      if (!section?.odds) {
        return { back: "-", lay: "-", backSize: "-", laySize: "-" };
      }

      const backOdd = section.odds.find((o) => o.otype === "back");
      const layOdd = section.odds.find((o) => o.otype === "lay");

      return {
        back: backOdd ? backOdd.odds.toFixed(2) : "-",
        lay: layOdd ? layOdd.odds.toFixed(2) : "-",
        backSize: backOdd ? backOdd.size.toFixed(2) : "-",
        laySize: layOdd ? layOdd.size.toFixed(2) : "-",
      };
    };

    return {
      odds1: extractOdds(team1Section),
      oddsX: extractOdds(drawSection),
      odds2: extractOdds(team2Section),
    };
  };

  // Helper function to get odds from market data (fallback)
  const getOddsFromMarkets = (match: LMatch) => {
    const market = match?.markets?.[0];
    const runners = market?.runners || [];

    // Find back/lay odds for each selection
    const getOdds = (selectionId: number) => {
      const runner = runners.find((r: Runner) => r.selectionId === selectionId);
      if (!runner?.ex) {
        return {
          back: "-",
          lay: "-",
          backSize: "-",
          laySize: "-",
        };
      }
      const back = runner.ex.availableToBack?.[0];
      const lay = runner.ex.availableToLay?.[0];

      return {
        back: back?.price ? parseFloat(back.price.toString()).toFixed(2) : "-",
        lay: lay?.price ? parseFloat(lay.price.toString()).toFixed(2) : "-",
        backSize: back?.size
          ? parseFloat(back.size.toString()).toFixed(2)
          : "-",
        laySize: lay?.size ? parseFloat(lay.size.toString()).toFixed(2) : "-",
      };
    };

    return {
      odds1: getOdds(1),
      oddsX: getOdds(2),
      odds2: getOdds(3),
    };
  };


  return (
    <main className="main-content p-1 md:p-4 bg-gray-300">
      <div className="main-div-to-scroll">

        <div
          className=" mb-1 px-1 bg-[#6D081D]"
          style={{ marginBottom: "4px", padding: "4px", background: "#6D081D" }}
        >
          ðŸ”Š
        </div>

        <div
          style={
            {
              // display: "grid",
              // gap: "0.25rem", // gap-1
              // gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            }
          }
          className="grid-responsive"
        >
          <div style={{ width: "100%" }}>
            <div style={{ width: "fit-content" }}>
              <div
                style={{
                  backgroundColor: "#c10930",
                  color: "white",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "10rem", // Adjust for md:pr-40, approx 160px
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                }}
              >
                <h6
                  style={{
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  <img
                    src={`/icon/${category ? category.toLowerCase() : ''}.png`}
                    alt="Sport Icon"
                    style={{ width: "1rem", height: "1rem" }}
                  />
                  {category ? category.toUpperCase() : ''}
                </h6>
              </div>
            </div>
            {/* <div
            style={{
              paddingLeft: "7rem",
              marginBottom: "0.5rem",
              marginTop: "0.25rem",
            }}
          >
            <div
              style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
            >
              <button className="filter-btn" style={{ fontSize: "0.75rem" }}>
                + LIVE
              </button>
              <button className="filter-btn" style={{ fontSize: "0.75rem" }}>
                + VIRTUAL
              </button>
              <button className="filter-btn" style={{ fontSize: "0.75rem" }}>
                + PREMIUM
              </button>
            </div>
          </div> */}
          </div>

          {/* 1 x 2 div  */}
          {category !== 'CASINO' && (
            <div
              style={{
                display: "flex",
                // background: "red",
                marginBottom: "0.5rem",
              }}
              className="md:flex"
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    fontSize: "0.75rem",
                    textAlign: "center",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    flex: 1,
                    fontSize: "0.75rem",
                    textAlign: "center",
                  }}
                >
                  x
                </div>
                <div
                  style={{
                    flex: 1,
                    fontSize: "0.75rem",
                    textAlign: "center",
                  }}
                >
                  2
                </div>
              </div>
            </div>

          )}
        </div>
        <div className="matches-container">
          <div className="matches-list">
            {/* new grid layout  */}
            {category !== 'CASINO' ? (<>
              {matchList.map((match: LMatch, index: number) => {

                const externalOdds = getOddsFromExternalData(match);
                const marketOdds = getOddsFromMarkets(match);
                const odds1 =
                  externalOdds.odds1.back !== "-"
                    ? externalOdds.odds1
                    : marketOdds.odds1;
                const oddsX =
                  externalOdds.oddsX.back !== "-"
                    ? externalOdds.oddsX
                    : marketOdds.oddsX;
                const odds2 =
                  externalOdds.odds2.back !== "-"
                    ? externalOdds.odds2
                    : marketOdds.odds2;

                const oddsArray = [
                  {
                    odds:
                      externalOdds.odds1.back !== "-"
                        ? externalOdds.odds1.back
                        : marketOdds.odds1.back,
                    size:
                      externalOdds.odds1.back !== "-"
                        ? externalOdds.odds1.backSize
                        : marketOdds.odds1.backSize,
                  },
                  {
                    odds:
                      externalOdds.odds1.lay !== "-"
                        ? externalOdds.odds1.lay
                        : marketOdds.odds1.lay,
                    size:
                      externalOdds.odds1.lay !== "-"
                        ? externalOdds.odds1.laySize
                        : marketOdds.odds1.laySize,
                  },
                  {
                    odds:
                      externalOdds.oddsX.back !== "-"
                        ? externalOdds.oddsX.back
                        : marketOdds.oddsX.back,
                    size:
                      externalOdds.oddsX.back !== "-"
                        ? externalOdds.oddsX.backSize
                        : marketOdds.oddsX.backSize,
                  },
                  {
                    odds:
                      externalOdds.oddsX.lay !== "-"
                        ? externalOdds.oddsX.lay
                        : marketOdds.oddsX.lay,
                    size:
                      externalOdds.oddsX.lay !== "-"
                        ? externalOdds.oddsX.laySize
                        : marketOdds.oddsX.laySize,
                  },
                  {
                    odds:
                      externalOdds.odds2.back !== "-"
                        ? externalOdds.odds2.back
                        : marketOdds.odds2.back,
                    size:
                      externalOdds.odds2.back !== "-"
                        ? externalOdds.odds2.backSize
                        : marketOdds.odds2.backSize,
                  },
                  {
                    odds:
                      externalOdds.odds2.lay !== "-"
                        ? externalOdds.odds2.lay
                        : marketOdds.odds2.lay,
                    size:
                      externalOdds.odds2.lay !== "-"
                        ? externalOdds.odds2.laySize
                        : marketOdds.odds2.laySize,
                  },
                ];

                return (
                  <div className="match-wrapper" key={`${match.matchId}_${index}`}>
                    <div className="match-info">
                      <div className="team-details">
                        {/* <Link to={`/details/${item.id}`} className="team-link"> */}
                        <div className="team-text">
                          <h2
                            className="team-name truncated-text"
                            onClick={() => currentMatch(match)}
                          // className="text-dark"
                          // href={undefined}
                          >
                            {" "}
                            {match.name || match.ename}
                          </h2>
                          <h3 className="league-name truncated-text">
                            {match.cname}
                          </h3>
                        </div>
                        {/* </Link> */}
                      </div>
                      <div
                        className={`match-time ${match.inPlay || match.iplay ? "live-label" : ""
                          }`}
                      >
                        {match.inPlay || match.iplay ? (
                          <span className="">LIVE</span>
                        ) : (
                          <div className="match-date-time">
                            <span>
                              {moment(match?.matchDateTime).format("DD MMM")}
                            </span>
                            <span>
                              {moment(match?.matchDateTime).format("hh:mm A")}
                            </span>
                            {/* <span>{item.time}</span> */}
                          </div>
                        )}
                      </div>
                      <div className="match-date-replica">
                        {match.inPlay || match.iplay ? (
                          <div className="match-date-time">
                            <span>
                              {moment(match?.matchDateTime).format("DD MMM")}
                            </span>
                            <span>
                              {moment(match?.matchDateTime).format("hh:mm A")}
                            </span>
                          </div>
                        ) : (
                          <span className="empty-time" />
                        )}
                      </div>
                      <div className="match-broadcast gap-[0.25rem]">
                        {match.tv === true && (
                          <span className="game-icon">
                            <i className="fas fa-tv v-m icon-tv" />
                          </span>
                        )}

                        {/* Fancy icon - show if f flag is true */}
                        {(match.f === true || match.isFancy === true) && (
                          <span className="game-icon">
                            <img
                              src="/assets/images/icons/ic_fancy.png"
                              className="fancy-icon"
                              alt="Fancy"
                            />
                          </span>
                        )}

                        {/* Bookmaker icon - show if bm flag is true */}
                        {(match.bm === true || match.isBookMaker === true) && (
                          <span className="game-icon">
                            <img
                              src="/assets/images/icons/ic_bm.png"
                              className="bookmaker-icon"
                              alt="Bookmaker"
                            />
                          </span>
                        )}
                      </div>
                    </div>
                    {
                      <div className="odds-container">
                        <div className="odds-grid">
                          {oddsArray.map((value, index) => (
                            <div
                              key={index}
                              className={`odds-box ${index % 2 === 0 ? "odd-blue" : "odd-pink"
                                }`}
                            >
                              <div className="bet-button-price">
                                {/* {console.log(value)} */}
                                <span className="b">{value.odds}</span>
                                <em>{value.size}</em>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                  </div>
                );
              })}
            </>) : (
              // Casino category section
              <>
                {sportId === '9999' ? (
                  // Casino Providers (9999) - Show 20 static casino images leading to /casino-int/slots
                  <div className="mb-2">
                    <div className="casino-games-scroll">
                      {Array.from({ length: 20 }, (_, index) => (
                        <CustomLink
                          key={index}
                          to={"/casino-int/slots"}
                          className='text-decoration-none'
                        >
                          <div className="casino-game-box">
                            <img
                              src={`/icon/game-${(index % 20) + 1}.gif`}
                              alt={`Casino Provider ${index + 1}`}
                              className="casino-game-image"
                            />
                          </div>
                        </CustomLink>
                      ))}
                    </div>
                  </div>
                ) : sportId === '888' ? (
                  // Home (888) - Show homepage categories (12 max)
                  <div className="mb-2">
                    <div className="casino-games-scroll">
                      <CasinoListItem />
                    </div>
                  </div>
                ) : null}
              </>
            )}

          </div>
        </div>
      </div>
    </main>
  );
};

export default MatchList;
// <div className='card-content'>
//   <table className='table coupon-table'>
//     <thead>
//       <tr>
//         <th style={{ width: '63%' }}>Game</th>
//         <th colSpan={2}>1</th>
//         <th colSpan={2}>X</th>
//         <th colSpan={2}>2</th>
//       </tr>
//     </thead>
//     <tbody>
//       {matchList.map((match: LMatch, index: number) => {
//         // Try to get odds from externalData first, then fallback to markets
//         const externalOdds = getOddsFromExternalData(match);
//         const marketOdds = getOddsFromMarkets(match);

//         // Use external data if available, otherwise use market data
//         const odds1 = externalOdds.odds1.back !== '-' ? externalOdds.odds1 : marketOdds.odds1;
//         const oddsX = externalOdds.oddsX.back !== '-' ? externalOdds.oddsX : marketOdds.oddsX;
//         const odds2 = externalOdds.odds2.back !== '-' ? externalOdds.odds2 : marketOdds.odds2;

//         return (
//           <tr key={`${match.matchId}_${index}`}>
//             <td>
//               <div className='game-name'>
//                 <a
//                   onClick={() => currentMatch(match)}
//                   className='text-dark'
//                   href={undefined}
//                 >
//                   {match.name || match.ename} / {moment(match.matchDateTime).format(dateFormat)}
//                 </a>
//               </div>
//               <div className='game-icons'>
//                 {/* In-play indicator */}
//                 {(match.inPlay ||
//                   match.iplay ||
//                   new Date(match.matchDateTime).getTime() < new Date().getTime()) && (
//                   <span className='game-icon'>
//                     <span className='active' />
//                   </span>
//                 )}

//                 {/* TV icon - show if tv flag is true */}
//                 {match.tv === true && (
//                   <span className='game-icon'>
//                     <i className='fas fa-tv v-m icon-tv' />
//                   </span>
//                 )}

//                 {/* Fancy icon - show if f flag is true */}
//                 {(match.f === true || match.isFancy === true) && (
//                   <span className='game-icon'>
//                     <img
//                       src='/assets/images/icons/ic_fancy.png'
//                       className='fancy-icon'
//                       alt='Fancy'
//                     />
//                   </span>
//                 )}

//                 {/* Bookmaker icon - show if bm flag is true */}
//                 {(match.bm === true || match.isBookMaker === true) && (
//                   <span className='game-icon'>
//                     <img
//                       src='/assets/images/icons/ic_bm.png'
//                       className='bookmaker-icon'
//                       alt='Bookmaker'
//                     />
//                   </span>
//                 )}
//               </div>
//             </td>

//             {/* 1 Odds */}
//             <td className="back-1">
//               <button className="back" disabled={odds1.back === '-'}>
//                 <span className="odd">{odds1.back}</span>
//               </button>
//             </td>
//             <td className="lay-1">
//               <button className="lay" disabled={odds1.lay === '-'}>
//                 <span className="odd">{odds1.lay}</span>
//               </button>
//             </td>

//             {/* X Odds */}
//             <td className="back-x">
//               <button className="back" disabled={oddsX.back === '-'}>
//                 <span className="odd">{oddsX.back}</span>
//               </button>
//             </td>
//             <td className="lay-x">
//               <button className="lay" disabled={oddsX.lay === '-'}>
//                 <span className="odd">{oddsX.lay}</span>
//               </button>
//             </td>

//             {/* 2 Odds */}
//             <td className="back-2">
//               <button className="back" disabled={odds2.back === '-'}>
//                 <span className="odd">{odds2.back}</span>
//               </button>
//             </td>
//             <td className="lay-2">
//               <button className="lay" disabled={odds2.lay === '-'}>
//                 <span className="odd">{odds2.lay}</span>
//               </button>
//             </td>
//           </tr>
//         )
//       })}
//     </tbody>
//   </table>
// </div>




