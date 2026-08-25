import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/devtools-detect/index.js'
import LogoutInactive from './components/LogoutInactive'
import ScrollToTop from './components/ScrollToTop'
import { useWebsocketUser } from './context/webSocketUser'
import User from './models/User'
import { setInitApp } from './redux/actions/common/commonSlice'
import { getUserInfoAction } from './redux/actions/login/login.action'
import { selectUserData } from './redux/actions/login/loginSlice'
import { getFilteredSportListAction, getSportListAction } from './redux/actions/sports/sport.action'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import Routers from './routes'
import WindowFocusHandler from './utils/check-browser-active'
import 'react-toastify/dist/ReactToastify.css'
import authService from './services/auth.service'

const App = () => {
  const dispatch = useAppDispatch()
  const { socketUser } = useWebsocketUser()
  const userState = useAppSelector<{ user: User }>(selectUserData)
  const tabIdRef = React.useRef(`tab-${Date.now()}-${Math.random()}`)

  React.useEffect(() => {
    if (!userState.user._id) return

    dispatch(getSportListAction())
    dispatch(getFilteredSportListAction())
    socketUser.emit('userRoomJoin', { userId: userState.user._id })

    const onConnect = () => socketUser.emit('userRoomJoin', { userId: userState.user._id })
    socketUser.on('connect', onConnect)

    return () => {
      socketUser.off('connect', onConnect)
    }
  }, [dispatch, socketUser, userState.user._id])

  React.useEffect(() => {
    sessionStorage.setItem('tabId', tabIdRef.current)
    if (authService.getRefreshToken()) {
      dispatch(getUserInfoAction({} as User))
    }
  }, [dispatch])

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      dispatch(setInitApp(!document.hidden))
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [dispatch])

  return (
    <Router>
      <ScrollToTop />
      <WindowFocusHandler />
      <LogoutInactive />
      <Routers />
    </Router>
  )
}

export default App
