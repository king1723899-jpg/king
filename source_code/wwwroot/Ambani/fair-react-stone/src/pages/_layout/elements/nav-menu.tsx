// import { useParams } from 'react-router-dom'
// import ISport from '../../../models/ISport'
// import { useAppSelector } from '../../../redux/hooks'
// import { selectFilteredSportList } from '../../../redux/actions/sports/sportSlice'
// import { CustomLink } from './custom-link'

// const NavMenu = () => {
//   const sportListState = useAppSelector<{ sports: ISport[] }>(selectFilteredSportList)
//   const { sportId } = useParams()
//   return (
//     <div className='header-bottom m-t-10 col-md-12'>
//       <nav className='navbar navbar-expand-md btco-hover-menu'>
//         <button
//           type='button'
//           data-toggle='collapse'
//           data-target='#navbarNavDropdown'
//           aria-controls='navbarNavDropdown'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           className='navbar-toggler'
//         >
//           <span className='navbar-toggler-icon' />
//         </button>
//         <div className='collapse navbar-collapse'>
//           <ul className='list-unstyled navbar-nav'>
//             <li className='nav-item active'>
//               <CustomLink to={'/match/4'} className='router-link-exact-active router-link-active'>
//                 <b>Home</b>
//               </CustomLink>
//             </li>
//             {/* <li className='nav-item active'>
//               <CustomLink to={'/match/all/in-play'} className='router-link-exact-active router-link-active'>
//                 <b>In-Play</b>
//               </CustomLink>
//             </li> */}
//             {/* <li className='nav-item'>
//               <CustomLink to={'/match/all'} className='router-link-exact-active router-link-active'>
//                 <b>All</b>
//               </CustomLink>
//             </li> */}

//             {sportListState.sports.map((sport: ISport) => (
//               <li key={sport._id} className='nav-item'>
//                 <CustomLink
//                   to={`/match/${sport.sportId}`}
//                   className={`nav-link ${sportId == sport.sportId ? 'router-link-active' : ''}`}
//                 >
//                   {sport.name}
//                 </CustomLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }
// export default NavMenu



import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ISport from "../../../models/ISport";
import { useAppSelector } from "../../../redux/hooks";
import { selectSportList } from "../../../redux/actions/sports/sportSlice";
import { CustomLink } from "./custom-link";

const NavMenu = () => {
  const sportListState = useAppSelector<{ sports: ISport[] }>(selectSportList);
  const { sportId } = useParams();
  const location = useLocation();

  const isActiveSport = (sport: ISport) => {
    if (String(sport.sportId) === "555") {
      return location.pathname.startsWith("/casino-int");
    }
    return String(sport.sportId) === String(sportId || "");
  };

  return (
    <nav className="main-nav">
      {sportListState.sports.map((sport) => {
        const to = String(sport.sportId) === "555" ? "/casino-int/slots" : `/match/${sport.sportId}`;
        const activeClass = isActiveSport(sport) ? "active" : "";
        return (
          <CustomLink key={sport._id} to={to} className={`nav-tab ${activeClass}`}>
            <span className="nav-icon">
              <img
                src={`/icon/${sport.name.toLowerCase()}.png`}
                alt={`${sport.name} icon`}
                className="nav-icon-img"
                loading="lazy"
              />
            </span>
            <span className="nav-text">{sport.name}</span>
          </CustomLink>
        );
      })}
    </nav>

    // <div className='header-bottom m-t-10 col-md-12'>
    //   <nav className='navbar navbar-expand-md btco-hover-menu'>
    //     <button
    //       type='button'
    //       data-toggle='collapse'
    //       data-target='#navbarNavDropdown'
    //       aria-controls='navbarNavDropdown'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //       className='navbar-toggler'
    //     >
    //       <span className='navbar-toggler-icon' />
    //     </button>
    //     <div className='collapse navbar-collapse'>
    //       <ul className='list-unstyled navbar-nav'>
    //         <li className='nav-item active'>
    //           <CustomLink to={'/match/4'} className='router-link-exact-active router-link-active'>
    //             <b>Home</b>
    //           </CustomLink>
    //         </li>
    //         {/* <li className='nav-item active'>
    //           <CustomLink to={'/match/all/in-play'} className='router-link-exact-active router-link-active'>
    //             <b>In-Play</b>
    //           </CustomLink>
    //         </li> */}
    //         {/* <li className='nav-item'>
    //           <CustomLink to={'/match/all'} className='router-link-exact-active router-link-active'>
    //             <b>All</b>
    //           </CustomLink>
    //         </li> */}

    //         {sportListState.sports.map((sport: ISport) => (
    //           <li key={sport._id} className='nav-item'>
    //             <CustomLink
    //               to={`/match/${sport.sportId}`}
    //               className={`nav-link ${sportId == sport.sportId ? 'router-link-active' : ''}`}
    //             >
    //               {sport.name}
    //             </CustomLink>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  );
};
export default NavMenu;
