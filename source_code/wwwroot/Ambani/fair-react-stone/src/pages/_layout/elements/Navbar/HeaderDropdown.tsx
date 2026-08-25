

// import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
// import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
// import { logout, selectUserData } from '../../../../redux/actions/login/loginSlice'
// import { CustomLink, useNavigateCustom } from '../custom-link'
// import { isMobile } from 'react-device-detect'
// import { selectBalance } from '../../../../redux/actions/balance/balanceSlice'
// import {
//     hideBalExp,
//     HideBalExp,
//     selectHideBalExp,
// } from '../../../../redux/actions/balance/balanceSlice'
// import { CONSTANTS } from '../../../../utils/constants'
// import { HeaderHome } from './Header-pop-up'

// const HeaderDropdown: React.FC = () => {
//     const ref = useRef<any>(null)
//     //added new ref
//       const buttonRef = useRef<any>(null)
   
//     const dispatch = useAppDispatch()
//     const navigate = useNavigateCustom()

//     // Global state
//     const userState = useAppSelector(selectUserData)
//     const balance = useAppSelector(selectBalance)
//     const selectHideBal = useAppSelector<HideBalExp>(selectHideBalExp)

//     // Local state
//     const [showMenu, setShowMenu] = useState<boolean>(false)
//     const [hideExpBal, setHideExpBal] = useState<HideBalExp>({} as HideBalExp)

//     useEffect(() => {
//         setHideExpBal(selectHideBal)
//     }, [selectHideBal])
// //old code
//     //useEffect(() => {
//       //  const handleClickOutside = (event: any//) => {
//             //if (showMenu && ref.current && //!ref.current.contains(event//.target)) {
//                 //closeMenu()
//             //}
// //        }
//   //      document.addEventListener('mousedown', //handleClickOutside)
//         //return () => document//.removeEventListener('mousedown', //handleClickOutside)
// //    }, [showMenu])


// //new code

//   useEffect(() => {
//         const handleClickOutside = (event: any) => {
//             // Check if click is outside both the dropdown and the button
//             if (showMenu && 
//                 ref.current && 
//                 !ref.current.contains(event.target) && 
//                 buttonRef.current && 
//                 !buttonRef.current.contains(event.target)) {
//                 closeMenu()
//             }
//         }
//         document.addEventListener('mousedown', handleClickOutside)
//         return () => document.removeEventListener('mousedown', handleClickOutside)
//     }, [showMenu])
    
    
    

//  const closeMenu = () => setShowMenu(false)
     
//      //new code
//       const toggleMenu = (e: MouseEvent) => {
//         e.stopPropagation() // Prevent event bubbling
//         setShowMenu(prev => !prev)
//     }
    
//     const logoutUser = (e: MouseEvent<HTMLAnchorElement>) => {
//         e.preventDefault()
//         dispatch(logout())
//        navigate.go('/dash')
//     }

//     const onChangeBalExp = (e: ChangeEvent<HTMLInputElement>) => {
//         const expBal = { ...hideExpBal, [e.target.name]: e.target.checked }
//         dispatch(hideBalExp(expBal))
//         localStorage.setItem(CONSTANTS.HIDE_BAL_EXP, JSON.stringify(expBal))
//         setHideExpBal(expBal)
//     }

//     return (
//         <li className='account float-left' style={{ position: 'relative' }}>
//             {/* {isMobile && !selectHideBal.balance ? (
//                 <div>
//                     <span>
//                         <i className='tx-13 mrc-2 fa fa-university' aria-hidden='true'></i>
//                     </span>
//                     <span className='tx-13'>{balance.balance?.toFixed(2)}</span>
//                 </div>
//             ) : (
//                 ''
//             )} */}

//                <span
//                   className={isMobile ? 'profile-section tx-14' : ''}
//                 onClick={() => setShowMenu(!showMenu)} style={{fontSize:"10px"}}
//             >
//                 <i className="fa fa-user me-1" style={{fontSize:"10px"}} />
//                <span style={{fontSize:"12px"}}>
//                 {userState?.user?.username}
//                 </span> 
//                 <i className='fas fa-chevron-down' style={{fontSize:"10px"}}/>
//             </span>

//             <ul
//                 ref={ref}
//                 style={{
//                     display: showMenu ? 'block' : 'none',
//                     position: 'absolute',
//                     top: '100%',
//                     //left: '0',
//                     right:0,
//                     minWidth: '320px',
//                     maxHeight: '560px',
//                     overflowY: 'auto',
//                     background: '#fff',
//                     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
//                     zIndex: 1000,
//                 }}
//                 className='dropdown-menu-custom'
//             >
//                 <li className=" ">
//                     <p className='header-user uppercase' style={{ color: "white" }}>Hii, {userState?.user?.username}</p>
//                 </li>

//                 <li className='header-list px-3 '>
//                     {/* You can wire real values here if desired */}
//                     <HeaderHome label='Wallet' value={((balance.balance > 0 ? balance.balance : 0) - (balance.exposer > 0 ? balance.exposer : 0)).toFixed(2) ?? '0.00'}/>
//                     <HeaderHome label='Exposure' value={(balance.exposer > 0 ? balance.exposer?.toFixed(2) : 0) as any} />
//                     <HeaderHome label='Avaliable' value={((balance.balance > 0 ? balance.balance : 0) - (balance.exposer > 0 ? balance.exposer : 0)).toFixed(2) ?? '0.00'} />
//                 </li>

//               <li className='header-list  px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/' className='text-black'>
//                       <i className="bi bi-house mr-2"/>
//                         Home
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/accountstatement' className=''>
//                       <i className="bi bi-bar-chart-steps mr-2"/>
//                         Account Statement
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/depositstatement' className=''>
//                      <i className="bi bi-bank mr-2"/>
//                         Deposit Statement
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/withdrawstatement' className=''>
//                         <i className="bi bi-cash-stack mr-2" />
//                         Withdraw Statement
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/profitloss' className=''>
//                        <i className="bi bi-calculator-fill mr-2"/>
//                         Profit Loss Report
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/bethistory' className=''>
//                         <i className="bi bi-clock-history mr-2"></i>
//                         Bet History
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/unsettledbet' className=''>
//                        <i className="bi bi-exclamation-circle mr-2"></i>
//                         Unsettled Bet
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/casino/result' className=''>
//                         <i className="bi bi-dice-5 mr-2"></i>
//                        Casino Report History
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/button-values' className=''>
//                      <i className="bi bi-sliders mr-2"></i>
//                         Set Button Values
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/settings/security-auth' className=''>
//                         <i className="bi bi-shield-lock mr-2"></i>
//                         Security Auth Verification
//                     </CustomLink>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/changepassword' className=''>
//                       <i className="bi bi-key mr-2"></i>
//                         Change Password
//                     </CustomLink>
//                 </li>

//                 <li className='header-list px-3 '>
//                     <label className='mb-0'>
//                         <input
//                             type={'checkbox'}
//                             name={'balance'}
//                             checked={hideExpBal.balance || false}
//                             onChange={onChangeBalExp}
//                             className='mrc-5'
//                         />{' '}
//                         Balance
//                     </label>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <label className='mb-0'>
//                         <input
//                             type={'checkbox'}
//                             name={'exposer'}
//                             checked={hideExpBal.exposer || false}
//                             onChange={onChangeBalExp}
//                             className='mrc-5'
//                         />{' '}
//                         Exposer
//                     </label>
//                 </li>
//                 <li className='header-list px-3 '>
//                     <CustomLink onClick={() => closeMenu()} to='/rules' className=''>
//                       <i className="bi bi-file-text mr-2 text-primary"></i>
//                         Rules
//                     </CustomLink>
//                 </li>

//                 <li className='border-top text-white p-10 bg-orange-gradient px-3'>
//                     <a
//                         onClick={logoutUser}
//                         href={'#'}
//                         style={{ fontWeight: 'bold', color: 'white', textTransform: 'uppercase', textDecoration: "none" }}
//                     >
//                         <i className="bi bi-box-arrow-right mr-2 "></i>
//                         signout
//                     </a>
//                 </li>
//             </ul>
//         </li>
//     )
// }
// export default HeaderDropdown





//namire update 

import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { logout, selectUserData } from '../../../../redux/actions/login/loginSlice'
import { CustomLink, useNavigateCustom } from '../custom-link'
import { isMobile } from 'react-device-detect'
import { selectBalance } from '../../../../redux/actions/balance/balanceSlice'
import {
    hideBalExp,
    HideBalExp,
    selectHideBalExp,
} from '../../../../redux/actions/balance/balanceSlice'
import { CONSTANTS } from '../../../../utils/constants'
import { HeaderHome } from './Header-pop-up'

const HeaderDropdown: React.FC = () => {
    const ref = useRef<any>(null)
    //added new ref
      const buttonRef = useRef<any>(null)
   
    const dispatch = useAppDispatch()
    const navigate = useNavigateCustom()

    // Global state
    const userState = useAppSelector(selectUserData)
    const balance = useAppSelector(selectBalance)
    const selectHideBal = useAppSelector<HideBalExp>(selectHideBalExp)

    // Local state
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [hideExpBal, setHideExpBal] = useState<HideBalExp>({} as HideBalExp)

    useEffect(() => {
        setHideExpBal(selectHideBal)
    }, [selectHideBal])
//old code
    //useEffect(() => {
      //  const handleClickOutside = (event: any//) => {
            //if (showMenu && ref.current && //!ref.current.contains(event//.target)) {
                //closeMenu()
            //}
//        }
  //      document.addEventListener('mousedown', //handleClickOutside)
        //return () => document//.removeEventListener('mousedown', //handleClickOutside)
//    }, [showMenu])


//new code

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // Check if click is outside both the dropdown and the button.
            // Treat missing buttonRef as "outside" so we still close the menu.
            if (showMenu &&
                ref.current &&
                !ref.current.contains(event.target) &&
                (!buttonRef.current || !buttonRef.current.contains(event.target))) {
                closeMenu()
            }
        }
        const eventName = typeof window !== 'undefined' && 'PointerEvent' in window ? 'pointerdown' : 'mousedown'
        document.addEventListener(eventName, handleClickOutside)
        return () => document.removeEventListener(eventName, handleClickOutside)
    }, [showMenu])
    
    
    

 const closeMenu = () => setShowMenu(false)
     
     //new code
      const toggleMenu = (e: MouseEvent) => {
        e.stopPropagation() // Prevent event bubbling
        setShowMenu(prev => !prev)
    }
    
    const logoutUser = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        dispatch(logout())
       navigate.go('/dash')
    }

    const onChangeBalExp = (e: ChangeEvent<HTMLInputElement>) => {
        const expBal = { ...hideExpBal, [e.target.name]: e.target.checked }
        dispatch(hideBalExp(expBal))
        localStorage.setItem(CONSTANTS.HIDE_BAL_EXP, JSON.stringify(expBal))
        setHideExpBal(expBal)
    }

    return (
        <li className='account float-left' style={{ position: 'relative' }}>
            {/* {isMobile && !selectHideBal.balance ? (
                <div>
                    <span>
                        <i className='tx-13 mrc-2 fa fa-university' aria-hidden='true'></i>
                    </span>
                    <span className='tx-13'>{balance.balance?.toFixed(2)}</span>
                </div>
            ) : (
                ''
            )} */}

           <span
            ref={buttonRef}
            className={isMobile ? 'profile-section tx-14' : ''}
            onClick={(e) => toggleMenu(e)}
            style={{fontSize:"10px"}}
        >
                <i className="fa fa-user me-1" style={{fontSize:"10px"}} />
               <span style={{fontSize:"12px"}}>
                {userState?.user?.username}
                </span> 
                <i className='fas fa-chevron-down' style={{fontSize:"10px"}}/>
            </span>

            <ul
                ref={ref}
                style={{
                    display: showMenu ? 'block' : 'none',
                    position: 'absolute',
                    top: '100%',
                    //left: '0',
                    right:0,
                    minWidth: '320px',
                    maxHeight: '560px',
                    overflowY: 'auto',
                    background: '#fff',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    zIndex: 1000,
                }}
                className='dropdown-menu-custom'
            >
                <li className=" ">
                    <p className='header-user uppercase' style={{ color: "white" }}>Hii, {userState?.user?.username}</p>
                </li>

                <li className='header-list px-3 '>
                    {/* You can wire real values here if desired */}
                    <HeaderHome label='Wallet' value={((balance.balance > 0 ? balance.balance : 0) - (balance.exposer > 0 ? balance.exposer : 0)).toFixed(2) ?? '0.00'}/>
                    <HeaderHome label='Exposure' value={(balance.exposer > 0 ? balance.exposer?.toFixed(2) : 0) as any} />
                    <HeaderHome label='Avaliable' value={((balance.balance > 0 ? balance.balance : 0) - (balance.exposer > 0 ? balance.exposer : 0)).toFixed(2) ?? '0.00'} />
                </li>

              <li className='header-list  px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/' className='text-black'>
                      <i className="bi bi-house mr-2"/>
                        Home
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/accountstatement' className=''>
                      <i className="bi bi-bar-chart-steps mr-2"/>
                        Account Statement
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/depositstatement' className=''>
                     <i className="bi bi-bank mr-2"/>
                        Deposit Statement
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/withdrawstatement' className=''>
                        <i className="bi bi-cash-stack mr-2" />
                        Withdraw Statement
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/profitloss' className=''>
                       <i className="bi bi-calculator-fill mr-2"/>
                        Profit Loss Report
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/bethistory' className=''>
                        <i className="bi bi-clock-history mr-2"></i>
                        Bet History
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/unsettledbet' className=''>
                       <i className="bi bi-exclamation-circle mr-2"></i>
                        Unsettled Bet
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/casino/result' className=''>
                        <i className="bi bi-dice-5 mr-2"></i>
                       Casino Report History
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/button-values' className=''>
                     <i className="bi bi-sliders mr-2"></i>
                        Set Button Values
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/settings/security-auth' className=''>
                        <i className="bi bi-shield-lock mr-2"></i>
                        Security Auth Verification
                    </CustomLink>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/changepassword' className=''>
                      <i className="bi bi-key mr-2"></i>
                        Change Password
                    </CustomLink>
                </li>

                <li className='header-list px-3 '>
                    <label className='mb-0'>
                        <input
                            type={'checkbox'}
                            name={'balance'}
                            checked={hideExpBal.balance || false}
                            onChange={onChangeBalExp}
                            className='mrc-5'
                        />{' '}
                        Balance
                    </label>
                </li>
                <li className='header-list px-3 '>
                    <label className='mb-0'>
                        <input
                            type={'checkbox'}
                            name={'exposer'}
                            checked={hideExpBal.exposer || false}
                            onChange={onChangeBalExp}
                            className='mrc-5'
                        />{' '}
                        Exposer
                    </label>
                </li>
                <li className='header-list px-3 '>
                    <CustomLink onClick={() => closeMenu()} to='/rules' className=''>
                      <i className="bi bi-file-text mr-2 text-primary"></i>
                        Rules
                    </CustomLink>
                </li>

                <li className='border-top text-white p-10 bg-orange-gradient px-3'>
                    <a
                        onClick={logoutUser}
                        href={'#'}
                        style={{ fontWeight: 'bold', color: 'white', textTransform: 'uppercase', textDecoration: "none" }}
                    >
                        <i className="bi bi-box-arrow-right mr-2 "></i>
                        signout
                    </a>
                </li>
            </ul>
        </li>
    )
}

export default HeaderDropdown
