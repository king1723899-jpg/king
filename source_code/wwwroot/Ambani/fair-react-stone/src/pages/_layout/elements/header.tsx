// import React, { ChangeEvent, MouseEvent, useRef } from 'react'
// import User from '../../../models/User'
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
// import { logout, selectUserData } from '../../../redux/actions/login/loginSlice'
// import NavMenu from './nav-menu'
// import {
//   hideBalExp,
//   HideBalExp,
//   selectBalance,
//   selectHideBalExp,
//   setExposer,
//   setSingleBal,
// } from '../../../redux/actions/balance/balanceSlice'
// import { CustomLink, useNavigateCustom } from './custom-link'
// import { isMobile } from 'react-device-detect'
// import Marqueemessge from '../../../admin-app/pages/_layout/elements/welcome'
// import NavMobileMenu from './nav-mobile-menu'
// import axios, { AxiosResponse } from 'axios'
// import { CONSTANTS } from '../../../utils/constants'
// import userService from '../../../services/user.service'
// import ReactModal from 'react-modal'
// import { useWebsocketUser } from '../../../context/webSocketUser'
// import AutocompleteComponent from '../../../components/AutocompleteComponent'
// import matchService from '../../../services/match.service'
// import IMatch from '../../../models/IMatch'
// import casinoSlugs from '../../../utils/casino-slugs.json'

// const Header = () => {
//   const ref = useRef<any>(null)
//   const userState = useAppSelector<{ user: User }>(selectUserData)
//   const balance = useAppSelector(selectBalance)
//   const selectHideBal = useAppSelector<HideBalExp>(selectHideBalExp)
//   const dispatch = useAppDispatch()

//   const navigate = useNavigateCustom()

//   const { socketUser } = useWebsocketUser()

//   const [showMenu, setShowMenu] = React.useState<boolean>(false)
//   const [showAuto, setShowAuto] = React.useState<boolean>(false)

//   const [userMessage, setUserMessage] = React.useState<string>('')

//   const [hideExpBal, setHideExpBal] = React.useState<HideBalExp>({} as HideBalExp)

//   const [isOpen, setIsOpen] = React.useState<any>(false)
//   const [getExposerEvent, setGetExposerEvent] = React.useState<any>([])

//   React.useEffect(() => {
//     // ✅ FIX: Use proper API base URL for message endpoint
//     const apiBaseUrl = process.env.REACT_APP_API_BASEURL || 'http://139.84.174.126:3010'
//     axios.get(`${apiBaseUrl}userMessage.json?v=${Date.now()}`).then((res: AxiosResponse) => {
//       setUserMessage(res.data.message)
//     }).catch(error => {
//       console.log('User message not available:', error)
//       setUserMessage('')
//     })
//   }, [])

//   // Rules modal removed from header

//   React.useEffect(() => {
//     const handlerExposer = ({ exposer, balance }: any) => {
//       if (balance !== undefined) dispatch(setSingleBal(balance))
//       if (exposer !== undefined) dispatch(setExposer(exposer))
//     }
//     socketUser.on('updateExposer', handlerExposer)

//     return () => {
//       socketUser.removeListener('updateExposer', handlerExposer)
//     }
//   }, [balance])

//   React.useEffect(() => {
//     setHideExpBal(selectHideBal)
//   }, [selectHideBal])

//   const logoutUser = (e: any) => {
//     e.preventDefault()
//     dispatch(logout())
//     navigate.go('/login')
//   }

//   const onChangeBalExp = (e: ChangeEvent<HTMLInputElement>) => {
//     const expBal = { ...hideExpBal, [e.target.name]: e.target.checked }
//     dispatch(hideBalExp(expBal))
//     localStorage.setItem(CONSTANTS.HIDE_BAL_EXP, JSON.stringify(expBal))
//     setHideExpBal(expBal)
//   }

//   const getExposer = (e: MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault()
//     setIsOpen(true)
//     userService.getExposerEvent().then((res: AxiosResponse) => {
//       setGetExposerEvent(res.data.data)
//     })
//   }

//   React.useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     const handleClickOutside = (event: any) => {
//       if (showMenu && ref.current && !ref.current.contains(event.target)) {
//         closeMenu()
//       }
//     }
//     // Bind the event listener
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [ref, showMenu])

//   const closeMenu = () => {
//     setShowMenu(false)
//   }
//   const suggestion = ({ value }: any) => {
//     return matchService.getMatchListSuggestion({ name: value })
//   }

//   const onMatchClick = (match: IMatch | null) => {
//     if (match) {
//       window.location.href = `/odds/${match.matchId}`
//     }
//   }

//   return (
//     <header className='header'>
//       <div className='container-fluid'>
//         <div className='row'>
//           <div className='header-top col-md-12'>
//             <div className='flex05'>
//               {isMobile ? (
//                 <CustomLink to='/match/4/in-play'>
//                   <i className='fas fa-home' />
//                 </CustomLink>
//               ) : (
//                 ''
//               )}
//               <CustomLink
//                 to='/match/4/in-play'
//                 className='logo router-link-exact-active router-link-active'
//               >
//                 <img src='/imgs/logo.png' className='logo-icon' />
//               </CustomLink>
//             </div>

//             <ul className='flex05 justify-content-end d-flex profile-right-side'>
//               {!isMobile ? (
//                 <>
//                   <li className='search float-left row'>
//                     <AutocompleteComponent<IMatch>
//                       className={`search-input-show ${showAuto ? 'show' : ''}`}
//                       label={'Search'}
//                       optionKey={'name'}
//                       api={suggestion}
//                       onClick={onMatchClick}
//                     />

//                     <a
//                       href='#'
//                       onClick={(e: MouseEvent<HTMLAnchorElement>) => {
//                         e.preventDefault()
//                         setShowAuto(!showAuto)
//                       }}
//                       className={`search-input`}
//                     >
//                       <i className='fas fa-search-plus' />
//                     </a>
//                   </li>
//                   {/* Rules link removed from header */}
//                 </>
//               ) : (
//                 ''
//               )}
//               <li className='ballance float-left'>
//                 {!isMobile && !selectHideBal.balance ? (
//                   <div className='mby-5'>
//                     {!isMobile ? (
//                       <span>Balance: </span>
//                     ) : (
//                       <span>
//                         <i
//                           className={isMobile ? 'tx-14 fa fa-university' : 'fa fa-university'}
//                           aria-hidden='true'
//                         ></i>
//                       </span>
//                     )}
//                     <b>
//                       <span className={isMobile ? 'tx-14' : ''}>{balance.balance?.toFixed(2)}</span>
//                     </b>
//                   </div>
//                 ) : (
//                   ''
//                 )}
//                 {!selectHideBal.exposer ? (
//                   <div className='mty-5'>
//                     <a href='#' onClick={getExposer}>
//                       {!isMobile ? (
//                         <span className=''>Exp : </span>
//                       ) : (
//                         <span className='tx-14 mrc-2'>Exp : </span>
//                       )}

//                       <b>
//                         <span className={isMobile ? 'tx-14 ' : ''}>
//                           {balance.exposer > 0 ? balance.exposer?.toFixed(2) : 0}
//                         </span>
//                       </b>
//                     </a>
//                   </div>
//                 ) : (
//                   ''
//                 )}
//               </li>
//               <li className='account float-left'>
//                 {isMobile && !selectHideBal.balance ? (
//                   <div>
//                     <span>
//                       <i className='tx-13 mrc-2 fa fa-university' aria-hidden='true'></i>
//                     </span>
//                     <span className='tx-13'>{balance.balance?.toFixed(2)}</span>
//                   </div>
//                 ) : (
//                   ''
//                 )}
//                 <span
//                   className={isMobile ? 'profile-section tx-14' : ''}
//                   onClick={() => setShowMenu(!showMenu)}
//                 >
//                   {userState?.user?.username}
//                   <i className='fas fa-chevron-down' />
//                 </span>
//                 <ul ref={ref} style={{ display: showMenu ? 'block' : 'none' }} className=''>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/' className=''>
//                       Home
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/accountstatement' className=''>
//                       Account Statement
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/depositstatement' className=''>
//                       Deposit Statement
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/withdrawstatement' className=''>
//                       Withdraw Statement
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/profitloss' className=''>
//                       Profit Loss Report
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/bethistory' className=''>
//                       Bet History
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/unsettledbet' className=''>
//                       Unsettled Bet
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/casino/result' className=''>
//                       Casino Report History
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/button-values' className=''>
//                       Set Button Values
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/settings/security-auth' className=''>
//                       Security Auth Verification
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/changepassword' className=''>
//                       Change Password
//                     </CustomLink>
//                   </li>
//                   <li>
//                     <label className='mb-0'>
//                       <input
//                         type={'checkbox'}
//                         name={'balance'}
//                         checked={hideExpBal.balance || false}
//                         onChange={onChangeBalExp}
//                         className='mrc-5'
//                       />{' '}
//                       Balance
//                     </label>
//                   </li>
//                   <li>
//                     <label className='mb-0'>
//                       <input
//                         type={'checkbox'}
//                         name={'exposer'}
//                         checked={hideExpBal.exposer || false}
//                         onChange={onChangeBalExp}
//                         className='mrc-5'
//                       />{' '}
//                       Exposer
//                     </label>
//                   </li>
//                   <li>
//                     <CustomLink onClick={() => closeMenu()} to='/rules' className=''>
//                       Rules
//                     </CustomLink>
//                   </li>

//                   <li className='border-top'>
//                     <a
//                       onClick={logoutUser}
//                       href={'#'}
//                       style={{ fontWeight: 'bold', color: 'red', textTransform: 'uppercase' }}
//                     >
//                       signout
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//           {isMobile ? <Marqueemessge message={userMessage} /> : ""}
//           {!isMobile ? <NavMenu /> : <NavMobileMenu />}
//         </div>
//       </div>
//       <div />
//       <div className='modal-market' />
     
//       <ReactModal
//         isOpen={isOpen}
//         onRequestClose={(e: any) => {
//           console.log('🚫 My Market: Modal close requested')
//           setIsOpen(false)
//         }}
//         shouldCloseOnOverlayClick={true}
//         shouldCloseOnEsc={true}
//         contentLabel='My Market'
//         className={'modal-dialog'}
//         ariaHideApp={false}
//       >
//         <div className='modal-content' style={{ border: 'none', borderRadius: '8px' }}>
//           <div className='modal-header' style={{ 
//             backgroundColor: '#6f42c1', 
//             color: 'white', 
//             padding: '15px 20px',
//             borderBottom: 'none',
//             borderRadius: '8px 8px 0 0',
//             fontSize: '18px',
//             fontWeight: '600'
//           }}>
//             My Market
//             <button 
//               onClick={(e: React.MouseEvent) => {
//                 e.preventDefault()
//                 e.stopPropagation()
//                 console.log('❌ My Market: Close button clicked')
//                 setIsOpen(false)
//               }} 
//               className='close float-right'
//               style={{ 
//                 color: 'white', 
//                 opacity: 1,
//                 fontSize: '24px',
//                 background: 'none',
//                 border: 'none',
//                 cursor: 'pointer',
//                 zIndex: 9999,
//                 position: 'relative'
//               }}
//               type="button"
//               aria-label="Close"
//             >
//               <i className='fas fa-times'></i>
//             </button>
//           </div>
//           <div className='modal-body' style={{ padding: '0' }}>
//             <table className='table table-striped table-bordered mb-0' style={{ 
//               width: '100%', 
//               borderCollapse: 'collapse',
//               fontSize: '14px'
//             }}>
//               <thead style={{ backgroundColor: '#f8f9fa' }}>
//                 <tr>
//                   <th style={{ 
//                     padding: '12px 15px', 
//                     fontWeight: '600',
//                     borderBottom: '2px solid #dee2e6',
//                     width: '15%',
//                     textAlign: 'left'
//                   }}>Event Type</th>
//                   <th style={{ 
//                     padding: '12px 15px', 
//                     fontWeight: '600',
//                     borderBottom: '2px solid #dee2e6',
//                     width: '35%',
//                     textAlign: 'left'
//                   }}>Event Name</th>
//                   <th style={{ 
//                     padding: '12px 15px', 
//                     fontWeight: '600',
//                     borderBottom: '2px solid #dee2e6',
//                     width: '35%',
//                     textAlign: 'left'
//                   }}>Match Name</th>
//                   <th style={{ 
//                     padding: '12px 15px', 
//                     fontWeight: '600',
//                     borderBottom: '2px solid #dee2e6',
//                     width: '15%',
//                     textAlign: 'center'
//                   }}>Trade</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {getExposerEvent.length === 0 ? (
//                   <tr>
//                     <td colSpan={4} style={{ 
//                       padding: '30px 15px', 
//                       textAlign: 'center',
//                       color: '#6c757d',
//                       fontSize: '16px'
//                     }}>
//                       No active markets found
//                     </td>
//                   </tr>
//                 ) : getExposerEvent.map((exposer: any) => {
//                   let casinoSlug = ''
//                   let eventType = ''
                  
//                   // ✅ Set Event Type to "Sports" for all sports, "Casino" for casino games
//                   console.log('🏅 My Market exposer data:', { 
//                     matchName: exposer.matchName, 
//                     sportId: exposer.sportId, 
//                     marketName: exposer.marketName 
//                   })
                  
//                   if (Number(exposer.sportId) === 5000) {
//                     eventType = 'Casino'
//                     if (exposer?.matchId && casinoSlugs) {
//                       casinoSlug = (casinoSlugs as any)[exposer.matchId] || ''
//                     }
//                   } else {
//                     // For all sports (Cricket, Football, Tennis, etc.), just show "Sports"
//                     eventType = 'Sports'
//                   }

//                   // ✅ Extract market name from bet data (as requested)
//                   const getMarketName = (exposer: any) => {
//                     // Use the actual market name from the bet data
//                     return exposer.marketName || exposer.selectionName || 'Unknown Market'
//                   }

//                   return (
//                     <tr key={`${exposer.matchName}-${exposer._id}`} style={{ 
//                       borderBottom: '1px solid #dee2e6'
//                     }}>
//                       <td style={{ 
//                         padding: '12px 15px', 
//                         borderRight: '1px solid #dee2e6',
//                         fontWeight: '500',
//                         color: '#495057'
//                       }}>{eventType}</td>
//                       <td style={{ 
//                         padding: '12px 15px', 
//                         borderRight: '1px solid #dee2e6'
//                       }}>
//                         <CustomLink
//                           to={
//                             exposer.sportId &&
//                             Number.isInteger(+exposer.sportId) &&
//                             exposer.sportId != 5000
//                               ? `/odds/${exposer._id}`
//                               : `/casino/${casinoSlug}/${exposer._id}`
//                           }
//                           onClick={(e: React.MouseEvent) => {
//                             // Ensure modal closes properly before navigation
//                             console.log('🔗 My Market: Link clicked, closing modal')
//                             setIsOpen(false)
                            
//                             // Small delay to ensure state is updated before navigation
//                             e.preventDefault()
//                             setTimeout(() => {
//                               const targetUrl = exposer.sportId &&
//                                 Number.isInteger(+exposer.sportId) &&
//                                 exposer.sportId != 5000
//                                   ? `/odds/${exposer._id}`
//                                   : `/casino/${casinoSlug}/${exposer._id}`
                              
//                               // Use window.location for guaranteed navigation
//                               window.location.href = targetUrl
//                             }, 100)
//                           }}
//                           style={{ 
//                             color: '#007bff', 
//                             textDecoration: 'none',
//                             fontWeight: '500',
//                             cursor: 'pointer'
//                           }}
//                         >
//                           {exposer.matchName}
//                         </CustomLink>
//                       </td>
//                       <td style={{ 
//                         padding: '12px 15px', 
//                         borderRight: '1px solid #dee2e6',
//                         fontWeight: '500',
//                         color: '#495057'
//                       }}>{getMarketName(exposer)}</td>
//                       <td style={{ 
//                         padding: '12px 15px', 
//                         textAlign: 'center',
//                         fontWeight: '600',
//                         color: '#28a745'
//                       }}>
//                         {exposer.totalBets || exposer.myCount}
//                       </td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </ReactModal>

//     </header>
//   )
// }

// export default Header



import React, { ChangeEvent, MouseEvent, useRef } from 'react'
import User from '../../../models/User'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { logout, selectUserData } from '../../../redux/actions/login/loginSlice'
import NavMenu from './nav-menu'
import {
  hideBalExp,
  HideBalExp,
  selectBalance,
  selectHideBalExp,
  setExposer,
  setSingleBal,
} from '../../../redux/actions/balance/balanceSlice'
import { CustomLink, useNavigateCustom } from './custom-link'
import { isMobile } from 'react-device-detect'
import Marqueemessge from '../../../admin-app/pages/_layout/elements/welcome'
import NavMobileMenu from './nav-mobile-menu'
import axios, { AxiosResponse } from 'axios'
import { CONSTANTS } from '../../../utils/constants'
import userService from '../../../services/user.service'
import ReactModal from 'react-modal'
import { useWebsocketUser } from '../../../context/webSocketUser'
import AutocompleteComponent from '../../../components/AutocompleteComponent'
import matchService from '../../../services/match.service'
import IMatch from '../../../models/IMatch'
import casinoSlugs from '../../../utils/casino-slugs.json'
import Navbar from './Navbar/Navbar'
import { HeaderHome } from './Navbar/Header-pop-up'
import HeaderDropdown from './Navbar/HeaderDropdown'
import Button from "@mui/material/Button";

const Header = () => {
  const ref = useRef<any>(null)
  const userState = useAppSelector<{ user: User }>(selectUserData)
  const balance = useAppSelector(selectBalance)
  const selectHideBal = useAppSelector<HideBalExp>(selectHideBalExp)
  const dispatch = useAppDispatch()

  const navigate = useNavigateCustom()

  const { socketUser } = useWebsocketUser()

  const [showMenu, setShowMenu] = React.useState<boolean>(false)
  const [showAuto, setShowAuto] = React.useState<boolean>(true)

  const [userMessage, setUserMessage] = React.useState<string>('')

  const [hideExpBal, setHideExpBal] = React.useState<HideBalExp>({} as HideBalExp)

  const [isOpen, setIsOpen] = React.useState<any>(false)
  const [getExposerEvent, setGetExposerEvent] = React.useState<any>([])

  React.useEffect(() => {
    // ✅ FIX: Use proper API base URL for message endpoint
    const apiBaseUrl = process.env.REACT_APP_API_BASEURL || 'http://139.84.174.126:3010'
    axios.get(`${apiBaseUrl}userMessage.json?v=${Date.now()}`).then((res: AxiosResponse) => {
      setUserMessage(res.data.message)
    }).catch(error => {
      console.log('User message not available:', error)
      setUserMessage('')
    })
  }, [])

  // Rules modal removed from header

  React.useEffect(() => {
    const handlerExposer = ({ exposer, balance }: { exposer: any, balance: any }) => {
      if (balance !== undefined) dispatch(setSingleBal(balance))
      if (exposer !== undefined) dispatch(setExposer(exposer))
    }
    socketUser.on('updateExposer', handlerExposer)

    return () => {
      socketUser.off('updateExposer', handlerExposer)
    }
  }, [balance])

  React.useEffect(() => {
    setHideExpBal(selectHideBal)
  }, [selectHideBal])

  const logoutUser = (e: any) => {
    e.preventDefault()
    dispatch(logout())
    navigate.go('/login')
  }

  const onChangeBalExp = (e: ChangeEvent<HTMLInputElement>) => {
    const expBal = { ...hideExpBal, [e.target.name]: e.target.checked }
    dispatch(hideBalExp(expBal))
    localStorage.setItem(CONSTANTS.HIDE_BAL_EXP, JSON.stringify(expBal))
    setHideExpBal(expBal)
  }

  const getExposer = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(true)
    userService.getExposerEvent().then((res: AxiosResponse) => {
      setGetExposerEvent(res.data.data)
    })
  }

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        closeMenu()
      }
    }
    // Bind the event listener
    const eventName =
      typeof window !== 'undefined' && 'PointerEvent' in window ? 'pointerdown' : 'mousedown'
    document.addEventListener(eventName, handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener(eventName, handleClickOutside)
    }
  }, [ref, showMenu])

  const closeMenu = () => {
    setShowMenu(false)
  }
  const suggestion = ({ value }: any) => {
    return matchService.getMatchListSuggestion({ name: value })
  }

  const onMatchClick = (match: IMatch | null) => {
    if (match) {
      window.location.href = `/odds/${match.matchId}`
    }
  }
  const walletItems = [
    { label: "Wallet Amount", value: "0.00", className: "bg-danger" },
    { label: "Bonus", value: "5.00", className: "bg-success" },
    { label: "Total", value: "5.00" }
  ];
  return (
    <>
      {/* <header className='header'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='header-top col-md-12'>
              <div className='flex05'>
                {isMobile ? (
                  <CustomLink to='/match/4/in-play'>
                    <i className='fas fa-home' />
                  </CustomLink>
                ) : (
                  ''
                )}
                <CustomLink
                  to='/match/4/in-play'
                  className='logo router-link-exact-active router-link-active'
                >
                  <img src='/imgs/logo.png' className='logo-icon' />
                </CustomLink>
              </div>

              <ul className='flex05 justify-content-end d-flex profile-right-side'>
                {!isMobile ? (
                  <>
                    <li className='search float-left row'>
                      <AutocompleteComponent<IMatch>
                        className={`search-input-show ${showAuto ? 'show' : ''}`}
                        label={'Search'}
                        optionKey={'name'}
                        api={suggestion}
                        onClick={onMatchClick}
                      />

                      <a
                        href='#'
                        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault()
                    
                        }}
                        className={`search-input`}
                      >
                        <i className='fas fa-search-plus' />
                      </a>
                    </li>
               
                  </>
                ) : (
                  ''
                )}
                <li className='ballance float-left'>
                  {!isMobile && !selectHideBal.balance ? (
                    <div className='mby-5'>
                      {!isMobile ? (
                        <span>Balance: </span>
                      ) : (
                        <span>
                          <i
                            className={isMobile ? 'tx-14 fa fa-university' : 'fa fa-university'}
                            aria-hidden='true'
                          ></i>
                        </span>
                      )}
                      <b>
                        <span className={isMobile ? 'tx-14' : ''}>{balance.balance?.toFixed(2)}</span>
                      </b>
                    </div>
                  ) : (
                    ''
                  )}
                  {!selectHideBal.exposer ? (
                    <div className='mty-5'>
                      <a href='#' onClick={getExposer}>
                        {!isMobile ? (
                          <span className=''>Exp0 : </span>
                        ) : (
                          <span className='tx-14 mrc-2'>Exp0 : </span>
                        )}

                        <b>
                          <span className={isMobile ? 'tx-14 ' : ''}>
                            {balance.exposer > 0 ? balance.exposer?.toFixed(2) : 0}
                          </span>
                        </b>
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                </li>
              </ul>
            </div>
                
            {isMobile ? <Marqueemessge message={userMessage} /> : ""}
            {!isMobile ? <NavMenu /> : <NavMobileMenu />}
          </div>
        </div>
        <div />
        <div className='modal-market' />

        <ReactModal
          isOpen={isOpen}
          onRequestClose={(e: any) => {
            setIsOpen(false)
          }}
          contentLabel='Set Max Bet Limit'
          className={'modal-dialog'}
          ariaHideApp={false}
        >
          <div className='modal-content'>
            <div className='modal-header'>
              My Market
              <button onClick={() => setIsOpen(false)} className='close float-right'>
                <i className='fas fa-times-circle'></i>
              </button>
            </div>
            <div className='modal-body'>
              <table className='reponsive table col-12'>
                <thead>
                  <tr>
                    <th>Event Type</th>
                    <th>Event Name</th>
                    <th>Match Name</th>
                    <th style={{ textAlign: 'center' }}>Trade</th>
                  </tr>
                </thead>
                <tbody>
                  {getExposerEvent.map((exposer: any) => {
                    let casinoSlug = ''
                    let eventType = ''

                
                    console.log('🏅 My Market exposer data:', {
                      matchName: exposer.matchName,
                      sportId: exposer.sportId,
                      marketName: exposer.marketName
                    })

                    switch (Number(exposer.sportId)) {
                      case 1:
                        eventType = 'Football'
                        break
                      case 2:
                        eventType = 'Tennis'
                        break
                      case 4:
                        eventType = 'Cricket'
                        break
                      case 5000:
                        eventType = 'Casino'
                        if (exposer?.matchId && casinoSlugs) {
                          casinoSlug = (casinoSlugs as any)[exposer.matchId] || ''
                        }
                        break
                      default:
                        console.warn('⚠️ Unknown sportId in My Market:', exposer.sportId, 'for match:', exposer.matchName)
                        eventType = 'Unknown Sport'
                    }

                
                    const getMarketName = (exposer: any) => {
                  
                      return exposer.marketName || exposer.selectionName || 'Unknown Market'
                    }

                    return (
                      <tr key={`${exposer.matchName}-${exposer._id}`}>
                        <td>{eventType}</td>
                        <td>
                          <CustomLink
                            to={
                              exposer.sportId &&
                                Number.isInteger(+exposer.sportId) &&
                                exposer.sportId != 5000
                                ? `/odds/${exposer._id}`
                                : `/casino/${casinoSlug}/${exposer._id}`
                            }
                            onClick={() => {
                              setIsOpen(false)
                            }}
                            style={{ color: '#007bff', textDecoration: 'none' }}
                          >
                            {exposer.matchName}
                          </CustomLink>
                        </td>
                        <td>{getMarketName(exposer)}</td>
                        <td style={{ textAlign: 'center' }}>
                          <strong>{exposer.totalBets || exposer.myCount}</strong>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </ReactModal>

      </header> */}

      {<Navbar />}
      {<NavMenu />}
<div className="d-flex justify-content-between w-100 d-md-none">

    {/* Deposit Button */}
    <Button
    
      variant="contained"
      onClick={() => navigate.go("/deposit")}
      sx={{
         display: { xs: 'flex', md: 'none' },
        flex: 1, // Take equal width
        alignItems: "center",
        // gap: "0.5rem",
        background: "darkgreen",
        color: "#fff",
        // borderBottom: "4px solid #8b0000",
        // padding: "0.25rem 1rem",
        borderRadius: "0px",
        textTransform: "none",
        // "&:hover": {
        //   backgroundColor: "#5a0000",
        //   borderBottom: "4px solid darkgreen",
        // },
      }}
    >
      <img
        src="/icon/deposit-icon.png"
        alt="Deposit Icon"
        className="btn-logged-header-img"
      />
      <span>Deposit</span>
    </Button>

    {/* Withdrawal Button */}
    <Button
      variant="contained"
      onClick={() => navigate.go("/withdraw")}
      sx={{
         display: { xs: 'flex', md: 'none' },
        flex: 1, // Take equal width
        alignItems: "center",
        // gap: "0.5rem",
        background: "#8b0000",
        color: "#fff",
        // borderBottom: "4px solid darkgreen",
        // padding: "0.25rem 1rem",
        borderRadius: "0px",
        textTransform: "none",
        // "&:hover": {
        //   backgroundColor: "#5a0000",
        //   borderBottom: "4px solid #8b0000",
        // },
      }}
    >
      <img
        src="/icon/withdrawal-icon.png"
        alt="Withdrawal Icon"
        className="btn-logged-header-img"
      />
      <span>Withdrawal</span>
    </Button>
  </div>
     
    </>
  );
}

export default Header
