import React from 'react'
import User from '../../models/User'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { loginAction } from '../../redux/actions/login/login.action'
import { selectUserData } from '../../redux/actions/login/loginSlice'
import { useWebsocketUser } from '../../context/webSocketUser'
import { useNavigateCustom } from '../_layout/elements/custom-link'
import { isMobile } from 'react-device-detect'
import api from '../../utils/api'
import SubmitButton from '../../components/SubmitButton'
import { toast } from 'react-toastify'
import './login.css'

const Login = () => {
  const dispatch = useAppDispatch()
  const userState = useAppSelector(selectUserData)
  const { socketUser } = useWebsocketUser()

  const navigate = useNavigateCustom()

  const [loginForm, setLoginForm] = React.useState<User>({
    username: '',
    password: '',
    logs: '',
    isDemo: false,
    admin: window.location.pathname.includes('/admin')
  })
  const usernameInputRef = React.useRef<HTMLInputElement | null>(null)
  const passwordInputRef = React.useRef<HTMLInputElement | null>(null)
  const submitLockRef = React.useRef(false)
  const lastErrorRef = React.useRef('')

  React.useEffect(() => {
    // ✅ Clear any stuck session data on login page load
    console.log('🔄 Login page mounted - checking for stuck sessions')
    
    // If user is stuck (has token but can't proceed), clear everything
    const existingToken = localStorage.getItem('token')
    if (existingToken) {
      console.log('⚠️ Found existing token on login page - might be stuck session')
      console.log('   Token will be cleared if login fails or user clicks login button')
    }
    
    // Get IP address for logs - this is optional and shouldn't prevent login
    api.get(`${process.env.REACT_APP_IP_API_URL}`)
      .then((res) => {
        setLoginForm(prev => ({ ...prev, logs: res.data }))
      })
      .catch((error) => {
        // Handle rate limiting specifically
        if (error.response?.status === 429) {
          toast.warn('IP service rate limited. Please try again in a moment. Login will still work.')
          console.log('IP API rate limited (429) - continuing with login')
        } else {
          console.log('IP API failed:', error.message, '- continuing with login')
        }
        // Set empty logs to allow login to proceed
        setLoginForm(prev => ({ ...prev, logs: '' }))
      })
  }, [])

  React.useEffect(() => {
    if (userState.status === 'done') {
      const { _id } = userState.user
      
      // Generate unique tab ID for this login
      const newTabId = `tab-${Date.now()}-${Math.random()}`
      
      socketUser.emit('login', {
        role: userState.user.role,
        sessionId: userState.user.sessionId,
        _id,
      })
      
      // ✅ Store username:sessionId pair for account-specific detection
      const sessionData = `${userState.user.username}:${userState.user.sessionId}`
      localStorage.setItem('login-session', sessionData)
      localStorage.setItem('current-username', userState.user.username)
      sessionStorage.setItem('my-tab-id', newTabId)
      
      console.log('✅ Login successful!')
      console.log('   Username:', userState.user.username)
      console.log('   SessionId:', userState.user.sessionId)
      console.log('   Session Data:', sessionData)
      console.log('   Tab ID:', newTabId)
      console.log('   Broadcasting NEW_LOGIN to other tabs...')
      
      // ✅ Broadcast NEW_LOGIN event to other tabs in same browser
      try {
        const channel = new BroadcastChannel('session-channel')
        channel.postMessage({
          type: 'NEW_LOGIN',
          tabId: newTabId,
          sessionId: userState.user.sessionId,
          username: userState.user.username
        })
        console.log('   ✅ NEW_LOGIN event broadcasted')
        channel.close()
      } catch (error) {
        console.log('   ⚠️ BroadcastChannel not supported:', error)
      }

      const normalizedRole = String(userState.user.role || '').toLowerCase()
      if (normalizedRole && normalizedRole !== 'user') {
        return navigate.go('/')
      }

     window.location.href = isMobile ? '/match/888' : '/match/888'
    }
  }, [userState])

  React.useEffect(() => {
    const currentError = String(userState.error || '').trim()
    if (userState.status === 'failed' && currentError && currentError !== lastErrorRef.current) {
      toast.error(currentError)
      lastErrorRef.current = currentError
    }
    if (userState.status === 'loading' || userState.status === 'done') {
      lastErrorRef.current = ''
    }
  }, [userState.status, userState.error])

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }
  const handleSubmitDemoLogin = () => {
    const loginFormNew = { ...loginForm, isDemo: true };
    setLoginForm(loginFormNew)
    dispatch(loginAction(loginFormNew))
  }
  const getLoginFormData = (): User => ({
    ...loginForm,
    username: (usernameInputRef.current?.value || loginForm.username || '').trim(),
    password: passwordInputRef.current?.value || loginForm.password || '',
    admin: window.location.pathname.includes('/admin')
  })
  const handleSubmit = (event?: React.FormEvent<HTMLFormElement> | React.SyntheticEvent) => {
    if (event && typeof event.preventDefault === 'function') event.preventDefault()
    if (submitLockRef.current) return
    submitLockRef.current = true
    setTimeout(() => {
      submitLockRef.current = false
    }, 900)
    const formData = getLoginFormData()
    if (!formData.username || !formData.password) {
      toast.error('Please enter username and password')
      return
    }
    
    // ✅ Clear any existing auth data to prevent stuck sessions
    console.log('🔄 Login button clicked - clearing existing session data')
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('token-admin')
    localStorage.removeItem('refreshToken-admin')
    localStorage.removeItem('userType-admin')
    localStorage.removeItem('login-session')
    localStorage.removeItem('current-username')
    sessionStorage.clear()
    
    console.log('✅ Old session data cleared - proceeding with fresh login')
    dispatch(loginAction(formData))
  }
  
  return (
    <div className="p-0 bg-transparent">
      {/* Background Animation */}
      {/* <div className="mobile-login-bg-animation"></div> */}
      
      {/* Multiple Cursors */}
      {/* <div className="mobile-login-cursor mobile-login-cursor-1"></div>
      <div className="mobile-login-cursor mobile-login-cursor-2"></div>
      <div className="mobile-login-cursor mobile-login-cursor-3"></div>
      <div className="mobile-login-cursor mobile-login-cursor-4"></div> */}
      
      {/* Close Button */}
      {/* <div className="mobile-login-close-btn">
        <i className="fas fa-times"></i>
      </div> */}
      
      {/* Main Container */}
        <div className="mobile-login-form-container">
          <h1 className="mobile-login-title">LOGIN NOW</h1>
          
          <form onSubmit={handleSubmit} role="form" autoComplete="off" method="post">
            <div className="mobile-login-form-group">
              <label className="mobile-login-label">USERNAME / MOBILE NUMBER</label>
              <input
                name="username"
                placeholder="Enter your username or mobile number"
                type="text"
                className="mobile-login-input"
                ref={usernameInputRef}
                autoComplete="username"
                aria-required="true"
                aria-invalid="false"
                onChange={handleForm}
                required
              />
            </div>
            
            <div className="mobile-login-form-group">
              <label className="mobile-login-label">PASSWORD</label>
              <input
                name="password"
                placeholder="Enter your password"
                type="password"
                className="mobile-login-input"
                ref={passwordInputRef}
                autoComplete="current-password"
                aria-required="true"
                aria-invalid="false"
                onChange={handleForm}
                required
              />
              {userState.error && (
                <div className="mobile-login-error">{userState.error}</div>
              )}
            </div>
            
            <div className="mobile-login-options">
              <label className="mobile-login-remember">
                <input type="checkbox" />
                Remember Me?
              </label>
              <a href="/forgot-password" className="mobile-login-forgot">Forgot Password</a>
            </div>
            
            <SubmitButton
              type="submit"
              className="mobile-login-btn-primary"
              disabled={false}
              onClick={handleSubmit}
              onTouchEnd={handleSubmit}
            >
              {userState.status === 'loading' ? (
                <>
                  <span className="mobile-login-spinner"></span>
                  Logging in...
                </>
              ) : (
                'LOG IN'
              )}
            </SubmitButton>
            
            <SubmitButton type="button" onClick={handleSubmitDemoLogin} className="mobile-login-btn-demo">
              LOGIN WITH DEMO ID
            </SubmitButton>
            
         <button type="button" className="mobile-login-btn-apk" onClick={() => window.open('https://wa.link/ambani', '_blank')}>
              <i className="fab fa-whatsapp"></i>
             Get ID with WhatsApp
            </button>
            
            <div className="mobile-login-signup">
              <span>Don't have an account? </span>
              <a href="/signup">SignUp</a>
            </div>
          </form>
          
          <div className="mobile-login-footer">
            <div className="powered-by">Powered by <span className="ambaniexchange">ambaniexchange</span></div>
            <div className="email">ambaniexchange@gmail.com</div>
          </div>
        </div>
      
      
      {/* Footer Section */}
      {/* <section className="footer footer-login">
        <div className="footer-top">
          <div className="footer-links">
            <nav className="navbar navbar-expand-sm">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/terms-and-conditions" target="_blank"> Terms and Conditions </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/responsible-gaming" target="_blank"> Responsible Gaming </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="support-detail">
            <h2>24X7 Support</h2>
            <p></p>
          </div>
          <div className="social-icons-box"></div>
        </div>
      </section> */}
    </div>
  )
}

export default Login
