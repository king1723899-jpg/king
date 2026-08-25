import { AxiosResponse } from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import casinoService from '../../services/casino.service'
import {
  selectCasinoMatchList,
} from '../../redux/actions/casino/casinoSlice'

import { useParams, useSearchParams } from 'react-router-dom'
import { CustomLink } from '../_layout/elements/custom-link'
import CasinoListItemInt from '../CasinoList/CasinoListItemInt'
import authService from '../../services/auth.service'
import { isMobile } from 'react-device-detect'

const launchOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(5, 10, 24, 0.72)',
  backdropFilter: 'blur(2px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 99999,
  padding: '20px',
}

const launchCardStyle: React.CSSProperties = {
  minWidth: '240px',
  maxWidth: '92vw',
  borderRadius: '14px',
  background: 'linear-gradient(135deg, #0b1f3f 0%, #11345f 100%)',
  color: '#fff',
  boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
  border: '1px solid rgba(255,255,255,0.16)',
  padding: '18px 20px',
  textAlign: 'center',
}

const CASINO_UNAVAILABLE_MESSAGE = 'This game is currently not available'
const CASINO_LAUNCH_TOAST_ID = 'casino-launch-error'
const ENABLE_PRE_LAUNCH_AVAILABILITY_CHECK = false

const getLaunchErrorMessage = (payload: any): string => {
  const raw = String(payload?.msg || payload?.message || payload?.error || '').trim()
  if (!raw) return CASINO_UNAVAILABLE_MESSAGE
  if (/insufficient user balance/i.test(raw)) {
    return 'Insufficient balance. Please add funds to play this game.'
  }
  return raw
}

const forceHideGlobalLaunchLoader = () => {
  try {
    ;(window as any).__forceHideCasinoLaunchLoader?.()
  } catch {
    // no-op
  }
}

const CasinoOther = () => {
  const dispatch = useDispatch()
  const gamesList = useAppSelector<any>(selectCasinoMatchList)
  const [searchParams] = useSearchParams();
  const queryp = useParams();
  const category = searchParams.get("category")
  const [games, setGames] = React.useState<any>([])
  const [provider, setProvider] = React.useState<any>([])
  const [categorylist, setCategoryList] = React.useState<any>([])
  const [gamePlay, setGamePlay] = React.useState<any>()
  const [gameUrl, setGameUrl] = React.useState<string>('')
  const [catName, setCatName] = React.useState<string>('')
  const showSlotCategories = false
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown visibility
  const dropdownRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState<string>(provider?.[0]?._id || "");
  const [isLaunchingGame, setIsLaunchingGame] = useState(false);
  const launchInFlightRef = useRef(false)

  const showLaunchError = (message: string) => {
    forceHideGlobalLaunchLoader()
    setIsLaunchingGame(false)
    toast.dismiss(CASINO_LAUNCH_TOAST_ID)
    toast.error(message || CASINO_UNAVAILABLE_MESSAGE, {
      position: 'top-center',
      autoClose: 3000,
      toastId: CASINO_LAUNCH_TOAST_ID,
    })
  }

  console.log(queryp)
  console.log(category)
  React.useEffect(() => {
    casinoService.getIntCasinoList(category, queryp.type).then((res: AxiosResponse<any>) => {
      ///dispatch(setHomePageCasinoMatch(res.data.data))
      const data = res.data
      setGames(data.result)
      setProvider(data.providers)
      setCategoryList(data.category)
      setCatName(data?.category?.["0"]?._id || "")
    })
  }, [category, queryp.type])
  useEffect(() => {
    setActiveCategory(category || "");
  }, [category]);
  const launchCasinoGame = async (game: any) => {
    if (!game || isLaunchingGame || launchInFlightRef.current) return
    launchInFlightRef.current = true
    const gameCode = String(game?.identifier || '').trim()
    const vendorCode = game?.vendorCode || game?.provider_id || 18

    if (!gameCode || gameCode.toLowerCase() === 'undefined' || gameCode.toLowerCase() === 'null') {
      launchInFlightRef.current = false
      showLaunchError(CASINO_UNAVAILABLE_MESSAGE)
      return
    }

    if (ENABLE_PRE_LAUNCH_AVAILABILITY_CHECK) {
      try {
        const availabilityRes = await casinoService.getCasinoLaunchAvailability(gameCode, vendorCode)
        const availabilityData = availabilityRes?.data?.data || {}
        if (availabilityData?.available === false) {
          launchInFlightRef.current = false
          showLaunchError(String(availabilityData?.message || CASINO_UNAVAILABLE_MESSAGE))
          return
        }
      } catch {
        // Fail open: if quick check fails, continue to launch API.
      }
    }

    setIsLaunchingGame(true)
    setGamePlay(undefined)
    setGameUrl('')

    const payload: any = {
      gameCode,
      lobby_url: gameCode,
      vendorCode,
      language: 1,
      phonetype: 1,
      random: Math.random().toString(36).slice(2),
      signature: "NA",
      timestamp: Date.now(),
      ipAddress: authService.getIpAddress(),
      isMobile: isMobile,
    }

    try {
      const res = await casinoService.getplaycasino(payload)
      const responsePayload = res?.data || {}
      const launchUrl = res?.data?.data?.url || ''
      if (!launchUrl) {
        showLaunchError(getLaunchErrorMessage(responsePayload))
        return
      }
      setGameUrl(launchUrl)
      setGamePlay(game)
      forceHideGlobalLaunchLoader()
    } catch (error: any) {
      console.log('Casino play error:', error)
      showLaunchError(getLaunchErrorMessage(error?.response?.data))
      setGamePlay(undefined)
      setGameUrl('')
    } finally {
      forceHideGlobalLaunchLoader()
      launchInFlightRef.current = false
      setIsLaunchingGame(false)
    }
  }
  useEffect(() => {
    if (categorylist.length > 0 && !catName) {
      setCatName(categorylist[0]._id);
    }
  }, [categorylist]);

  // Search functionality
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        setIsLoading(true)
        setIsDropdownOpen(true)
        
        casinoService.searchCasinoGames(searchQuery)
          .then((res: AxiosResponse<any>) => {
            setSuggestions(res.data.result || [])
            setIsLoading(false)
          })
          .catch((error) => {
            console.error('Search error:', error)
            setSuggestions([])
            setIsLoading(false)
          })
      } else {
        setSuggestions([])
        setIsDropdownOpen(false)
      }
    }, 300) // Debounce 300ms

    return () => clearTimeout(delayDebounceFn)
  }, [searchQuery])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    const eventName =
      typeof window !== 'undefined' && 'PointerEvent' in window ? 'pointerdown' : 'mousedown'
    document.addEventListener(eventName, handleClickOutside)
    return () => document.removeEventListener(eventName, handleClickOutside)
  }, [])

  const handleSuggestionClick = (game: any) => {
    setSearchQuery('')
    setSuggestions([])
    setIsDropdownOpen(false)
    launchCasinoGame(game)
  }

  console.log(provider)
  return (
    <>
      {isLaunchingGame && (
        <div style={launchOverlayStyle}>
          <div style={launchCardStyle}>
            <div
              className="spinner-border text-light"
              role="status"
              style={{ width: '2.4rem', height: '2.4rem' }}
            >
              <span className="sr-only">Loading...</span>
            </div>
            <div style={{ marginTop: '12px', fontWeight: 700, letterSpacing: '0.2px' }}>
              Launching game...
            </div>
            <div style={{ marginTop: '6px', fontSize: '12px', opacity: 0.85 }}>
              Please wait
            </div>
          </div>
        </div>
      )}
      <div className="w-100  mb-4">
        <div className="nav-search-main mb-1">
          <div className="nav-search-input-wrapper w-100" ref={dropdownRef}>
            <input
              type="text"
              placeholder="Search Casino Games"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setIsDropdownOpen(true)}
              className="nav-search-input w-100"
            />
            <span className="nav-search-icon">
              {isLoading ? "⌛" : "🔍"}
            </span>

            {/* Suggestions dropdown */}
            {isDropdownOpen && searchQuery && suggestions.length > 0 && (
              <div className="nav-search-suggestions">
                {suggestions.map((game: any, index: number) => (
                  <div
                    key={index}
                    className="search-suggestion-item"
                    onClick={() => handleSuggestionClick(game)}
                    style={{ 
                      cursor: 'pointer',
                      padding: '10px',
                      borderBottom: '1px solid #eee',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <img 
                      src={game.image_url} 
                      alt={game.game_name}
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        objectFit: 'cover',
                        borderRadius: '4px'
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        {game.game_name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        {game.provider}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No results message */}
            {isDropdownOpen && searchQuery && suggestions.length === 0 && !isLoading && (
              <div className="nav-search-suggestions">
                <div className="no-results">No matches found</div>
              </div>
            )}
          </div>
        </div>

        <div className="w-100">
          <nav className="main-nav">
            {provider.map((Item: any, key: number) => {
              const isActive =
                Item._id === activeCategory ||
                (!category && key === 0);

              return (
                // <li className="nav-item" key={key}>
                <CustomLink
                  className={`nav-tab ${isActive ? "active" : ""}`}
                  to={`/casino-int/${queryp.type}?category=${Item._id}`}
                  onClick={() => setActiveCategory(Item._id)} // ✅ update local state
                >
                  <div
                    className={`nav-tab ${isActive ? "active" : ""}`}
                  >
                    <span className="nav-text">{Item._id}</span>
                  </div>
                </CustomLink>
                // </li>
              );
            })}
          </nav>
        </div>
        {showSlotCategories && (
          <div className="w-100 mt-2">
            <nav className="main-nav ">
              {categorylist?.map((Item: any, key: number) => {
                const isCategoryActive =
                  catName === Item._id || (!catName && key === 0);

                return (
                  <a
                    key={key}
                    onClick={() => setCatName(Item._id)}
                    href="javascript:void(0);"
                    className={`nav-tab py-2 transition-all ${isCategoryActive ? "active text-white" : "bg-background text-foreground"
                      }`}
                  >
                    <span className="nav-text">{Item._id}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}


        <div className="casino-list mt-2"
        //  style={{ marginLeft: "-6px" }}
         >
          {games.length > 0 && (
            <CasinoListItemInt games={games} onGameClick={launchCasinoGame} isLaunchingGame={isLaunchingGame} />
          )}
        </div>
        {gamePlay?.game_name && <div className="slot-iframe show">
          <div className="slot-header">
            <div className="title"><h4 className='mb-0' style={{ fontSize: "20px", fontWeight: "400" }}>{gamePlay?.game_name}</h4></div>
            <div className="close-slot-frame" onClick={() => setGamePlay(undefined)}>EXIT</div>
          </div>
          <iframe scrolling="no" allow="fullscreen;" src={gameUrl} style={{ width: "100%", border: "0px" }}></iframe>
        </div>}
      </div >




      {/* old code */}
      {/* <div className='container-fluid container-fluid-5 cas-in-list'>
        <div className='row row5'>
          <div className='col-xl-2 d-none d-xl-flex ' style={{marginTop:"5px"}}>
            <ul className="nav nav-pills casino-sub-tab">
              {provider.map((Item:any, key:number)=>{
                return <li className="nav-item" key={key}>
                  <CustomLink className={`nav-link ${Item._id == category || (!category && key == 0) ? 'active' : ""}`} to={`/casino-int/${queryp.type}?category=${Item._id}`}><span>{Item._id}</span></CustomLink>
                </li>
              })}             
            </ul>

            </div>
          <div className='col-xl-10 col-12'>
            <div className="casino-sub-tab-list" style={{marginTop:"5px"}}>
              <ul className="nav nav-pills casino-sub-tab" id="casino-sub-tab">
                {categorylist?.map((Item:any, key:number)=>{
                  return  <li className="nav-item" key={key}>
                  <a className={`nav-link ${catName==Item._id?'active':''}`} onClick={()=>{
                    setCatName(Item._id)
                  }} href="javascript:void(0);"><span>{Item._id}</span></a>
                </li>
                })}
               
              </ul>
            </div>
              <div className='casino-list mt-2' style={{ marginLeft: "-6px" }}>
              {games.length > 0 && <CasinoListItemInt games={games} setGamePlay={setGamePlay}/>}
              </div>
            </div>
          </div>
        </div>
      {gamePlay?.game_name && <div className="slot-iframe show">
        <div className="slot-header">
          <div className="title"><h4 className='mb-0' style={{fontSize:"20px", fontWeight:"400"}}>{gamePlay?.game_name}</h4></div>
          <div className="close-slot-frame" onClick={()=>setGamePlay(undefined)}>EXIT</div>
          </div>
          <iframe scrolling="no" allow="fullscreen;" src={gameUrl} style={{width:"100%",border:"0px"}}></iframe>
      </div>} */}
    </>
  )
}
export default CasinoOther
