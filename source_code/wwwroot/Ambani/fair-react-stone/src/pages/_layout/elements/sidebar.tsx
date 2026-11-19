// import { useParams } from 'react-router-dom'
// import ICasinoMatch from '../../../models/ICasinoMatch'
// import ISport from '../../../models/ISport'
// import { selectCasinoMatchList } from '../../../redux/actions/casino/casinoSlice'
// import { selectSportList } from '../../../redux/actions/sports/sportSlice'
// import { useAppSelector } from '../../../redux/hooks'
// import { CustomLink, useNavigateCustom } from './custom-link'
// import { MouseEvent } from 'react'
// import { toast } from 'react-toastify'

// const SideBar = () => {
//   const navigate = useNavigateCustom()
//   const sportListState = useAppSelector<{ sports: ISport[] }>(selectSportList)
//   const { sportId, matchId } = useParams()
//   const gamesList = useAppSelector<any>(selectCasinoMatchList)

//   const onCasinoClick = (e: MouseEvent<HTMLAnchorElement>, Item: ICasinoMatch) => {
//     e.preventDefault()
//     if (!Item.isDisable && Item.match_id!=-1 ) navigate.go(`/casino/${Item.slug}/${Item.match_id}`)
//       else toast.warn('This game is suspended by admin, please try again later')
//   }

//   return (
//     <div className='sidebar col-md-2'>
//       <div data-toggle='collapse' data-target='.racing' className='sidebar-title'>
//         <h5 className='d-inline-block m-b-0'>Racing</h5>
//       </div>
//       <nav className='collapse racing show'>
//         <ul>
//           {sportListState.sports.map((sport: ISport) => {
//           if (sport.sportId != 7 && sport.sportId != 4339) return
//           return  <li key={sport._id} className='nav-item'>
//               <CustomLink
//                 to={`/match/${sport.sportId}`}
//               className={`nav-link ${parseInt(sportId || "0") == sport.sportId ? 'router-link-active' : ''}`}
//               >
//                 <span className='new-launch-text'>{sport.name}</span>
//               </CustomLink>
//             </li>
//           }
//           )}
//         </ul>
//       </nav>

//       <div data-toggle='collapse' data-target='.casino' className='sidebar-title'>
//         <h5 className='d-inline-block m-b-0'>Others</h5>
//       </div>
//       <nav className='collapse casino show'>
//         <ul>
//           <li className='nav-item'>
//             <CustomLink
//               to={`/casino-in/live-dmd`}
//               className={`nav-link`}
//             >
//               <span className='new-launch-text blink_me'>Our Casino</span>
//             </CustomLink>
//           </li>
//           <li className='nav-item'>
//             <CustomLink
//               to={`/casino-int/virtual-casino`}
//               className={`nav-link`}
//             >
//               <span className='new-launch-text blink_me'>Our Virtual</span>
//             </CustomLink>
//           </li>
//           <li className='nav-item'>
//             <CustomLink
//               to={`/casino-int/live-casino`}
//               className={`nav-link`}
//             >
//               <span className='new-launch-text '>Live Casino</span>
//             </CustomLink>
//           </li>
//           <li className='nav-item'>
//             <CustomLink
//               to={`/casino-int/slots`}
//               className={`nav-link`}
//             >
//               <span className='new-launch-text'>Slot Game</span>
//             </CustomLink>
//           </li>
//           <li className='nav-item'>
//             <CustomLink
//               to={`/casino-int/fantasy`}
//               className={`nav-link`}
//             >
//               <span className='new-launch-text'>Fantasy Game</span>
//             </CustomLink>
//           </li>
//         </ul>
//       </nav>
//       <div data-toggle='collapse' data-target='.sports' className='sidebar-title'>
//         <h5 className='d-inline-block m-b-0'>Sports</h5>
//       </div>
//       <nav className='collapse sports show'>
//         <ul>
//           {sportListState.sports.map((sport: ISport) => (
//             <li key={sport._id} className='nav-item'>
//               <CustomLink
//                 to={`/match/${sport.sportId}`}
//                 className={`nav-link ${sportId == sport.sportId ? 'router-link-active' : ''}`}
//               >
//                 <i className="far fa-plus-square me-1"></i>
//                 <span className='new-launch-text'>{sport.name}</span>
//               </CustomLink>
//             </li>
//           ))}
//         </ul>
//       </nav>

//     </div>
//   )
// }
// export default SideBar


import React, { useEffect, useState } from "react";
import ISport from "../../../models/ISport";
import IMatch from "../../../models/IMatch";
import { selectSportList } from "../../../redux/actions/sports/sportSlice";
import { useAppSelector } from "../../../redux/hooks";
import { fetchCompetitions, fetchMatch } from "../../../admin-app/pages/_layout/elements/NavHelper";
import { useNavigate } from "react-router-dom";
interface ICompetition {
  competitionId: string;
  competitionName: string;
  sportId: number;
  matchCount: number;
  source: string;
  lastUpdated: string;
}

interface ISeriesGroup {
  seriesName: string;
  matches: IMatch[];
}

const SideBar = () => {
  const sportListState = useAppSelector<{ sports: ISport[] }>(selectSportList);
  const [currentSport, setCurrentSport] = useState<string>("");
  const [competitions, setCompetitions] = useState<ICompetition[]>([]);
  const [groupedSeries, setGroupedSeries] = useState<ISeriesGroup[]>([]);
  const [expandedItems, setExpandedItems] = useState<{
    sports: string[];
    series: string[];
  }>({ sports: [], series: [] });
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const navigate = useNavigate();
  const toggleSport = (id: string, sportId?: number) => {

    // Check for casino sportIds ( 555)
    if (sportId === 555) {
      navigate("/casino-int/slots");
      return;
    }
    // Sportsbook: provider sportsbooks with their own live odds
    if (sportId === 556) {
      navigate("/casino-int/sportsbook");
      return;
    }
    setExpandedItems(prev => ({
      ...prev,
      sports: prev.sports.includes(id)
        ? prev.sports.filter(p => p !== id)
        : [...prev.sports, id]
    }));
    loadSportData(id);
  };

  const toggleSeries = (seriesName: string) => {

    setExpandedItems(prev => ({
      ...prev,
      series: prev.series.includes(seriesName)
        ? prev.series.filter(s => s !== seriesName)
        : [...prev.series, seriesName]
    }));
  };

  const loadSportData = async (id: string) => {
    const sport = sportListState.sports.find(s => s._id === id);
    if (!sport) return;

    setCurrentSport(sport.name);

    try {
      // Load competitions
      const sid = typeof sport.sportId === 'number' ? sport.sportId : parseInt(String(sport.sportId || 0), 10);
      const comps = await fetchCompetitions(sid).catch(() => []);
      setCompetitions(comps as any);

      // Load matches
      const { groupedSeries } = await fetchMatch(sid, () => { });
      setGroupedSeries(groupedSeries);
    } catch {
      setCompetitions([]);
      setGroupedSeries([]);
    }
  };
  useEffect(() => {

    console.log("sportId in sidebar is", sportListState)
  }, [])
  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {sportListState.sports.map((sport) => (
          <div key={sport._id}>
            {/* Sport Header */}
            <div
              className={`sidebar-item ${sport.name === currentSport ? "active" : ""}`}
              onClick={() => toggleSport(sport._id!, sport.sportId)}
            >
              <span>
                <img
                  src={`/icon/${sport.name?.toLowerCase()}.png`}
                  alt={sport.name}
                  className="sidebar-img-icon "
                />
              </span>
              <span className="sidebar-text">{sport.name}</span>
              {sport.sportId !== 555 && sport.sportId !== 556 && (
                <span
                  className={`sidebar-arrow ${expandedItems.sports.includes(sport._id!) ? "expanded" : ""
                    }`}
                >
                  🛆
                </span>
              )}
            </div>

            {/* Expanded Content */}
            {expandedItems.sports.includes(sport._id!) && (
              <div className="sidebar-submenu">
                {/* Competitions List */}
                {competitions.length > 0 && (
                  <div className="competitions-section">
                    {competitions.map((comp) => (
                      <div key={comp.competitionId} className="sidebar-subitem">
                        <span className="subitem-text">{comp.competitionName}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Series Groups Styled Like Parent */}
                {groupedSeries.map((series) => (
                  <div key={series.seriesName} className="series-group pl-4">
                    <div
                      className={`sidebar-item pl-3 series-header ${expandedItems.series.includes(series.seriesName) ? "expanded" : ""}`}
                      onClick={() => toggleSeries(series.seriesName)}
                    >
                      <span className="sidebar-text-other">{series.seriesName}</span>
                      {/* <span className="match-count">({series.matches.length})</span> */}
                      <span className={`sidebar-arrow-expand ${expandedItems.series.includes(series.seriesName) ? "expanded" : ""}`}>
                        🛆
                      </span>
                    </div>

                    {/* Matches List */}
                    {expandedItems.series.includes(series.seriesName) && (
                      <div className="matches-list">

                        {series.matches.map((match) => {


                          return (
                            <div
                              key={match.matchId}
                              className={`sidebar-item pl-4 series-header `}
                              onClick={() => {
                                setSelectedMatch(match.matchId);
                                navigate(`/odds/${match.matchId}`);
                              }}
                            >
                              <span className="sidebar-text-other ">{match.name}</span>

                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );

};

export default SideBar; 