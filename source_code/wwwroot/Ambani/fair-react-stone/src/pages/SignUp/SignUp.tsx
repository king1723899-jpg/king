import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import userService from '../../services/user.service'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { loginAction } from '../../redux/actions/login/login.action'
import { selectUserData } from '../../redux/actions/login/loginSlice'
import { useWebsocketUser } from '../../context/webSocketUser'
import { isMobile } from 'react-device-detect'
import api from '../../utils/api'
import './SignUp.css'

const FIXED_REFERRAL_CODE =
  (process.env.REACT_APP_FIXED_REGISTRATION_CODE || 'AMBANIEXCHANGEWINN').trim()

const SignUp = () => {
  const dispatch = useAppDispatch()
  const userState = useAppSelector(selectUserData)
  const { socketUser } = useWebsocketUser()
  const navigate = useNavigate();
  const [form, setForm] = useState({
    mobile: '',
    password: '',
    referralCode: FIXED_REFERRAL_CODE,
    countryCode: '+91',
    otp: '',
    logs: ''
  })

  const [showOtp, setShowOtp] = useState(false)
  const [timer, setTimer] = useState(55)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [otpError, setOtpError] = useState('')
  const [signupCompleted, setSignupCompleted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  // Get IP address for logs (same as login) - this is optional and shouldn't prevent signup
  useEffect(() => {
    api.get(`${process.env.REACT_APP_IP_API_URL}`)
      .then((res) => {
        setForm(prev => ({ ...prev, logs: res.data }))
      })
      .catch((error) => {
        // Handle rate limiting specifically
        if (error.response?.status === 429) {
          toast.warn('IP service rate limited. Please try again in a moment. Signup will still work.')
          console.log('IP API rate limited (429) - continuing with signup')
        } else {
          console.log('IP API failed:', error.message, '- continuing with signup')
        }
        // Set empty logs to allow signup to proceed
        setForm(prev => ({ ...prev, logs: '' }))
      })
  }, [])

  // Handle login state after signup (same as login component)
  useEffect(() => {
    if (signupCompleted) {
      if (userState.status === 'done') {
        const { _id } = userState.user
        socketUser.emit('login', {
          role: userState.user.role,
          sessionId: userState.user.sessionId,
          _id,
        })
        const sessionData = `${userState.user.username}:${userState.user.sessionId}`
        localStorage.setItem('login-session', sessionData)
        localStorage.setItem('current-username', userState.user.username)

        toast.success('Login successful!')

        const normalizedRole = String(userState.user.role || '').toLowerCase()
        if (normalizedRole && normalizedRole !== 'user') {
          return navigate('/') 
        }

        // Navigate to match page for regular users
        setTimeout(() => {
          window.location.href = isMobile ? '/match/888' : '/match/888'
        }, 1000)
      } else if (userState.status === 'error' || userState.status === 'failed') {
        // If auto-login fails, redirect to login page
        toast.error('Auto-login failed. Please login manually.')
        setTimeout(() => {
          navigate('/dash?login=1');
        }, 1000)
      }
    }
  }, [userState, signupCompleted, socketUser, navigate])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.name === 'referralCode') return
    setForm({ ...form, [e.target.name]: e.target.value })
    
    // Clear OTP error when user starts typing new OTP
    if (e.target.name === 'otp' && otpError) {
      setOtpError('');
    }
  }
  
  // Direct API call to OTP backend
  const sendOTPDirect = async () => {
    try {
      // Clear any existing OTP errors
      setOtpError('');
      setForm(prev => ({ ...prev, otp: '' }));
      
      const response = await userService.sendOTP({
        countryCode: form.countryCode,
        mobile: form.mobile
      })

      const data = response.data || {}

      if (data.success) {
        setShowOtp(true)
        setTimer(55)
        setIsTimerRunning(true)
        toast.success('OTP sent successfully!')
        return true
      } else {
        toast.error(data.error || data.message || 'Failed to send OTP')
        return false
      }
    } catch (error) {
      console.error('Error sending OTP:', error)
      const err: any = error
      toast.error(err?.response?.data?.error || 'Failed to send OTP')
      return false
    }
  }
 const handleLogin = () => {
    navigate('/dash?login=1');
  };
  // Direct API call to verify OTP
  const verifyOTPDirect = async () => {
    try {
      // Clear any previous errors
      setOtpError('');
      
      const response = await userService.verifyOTP({
        countryCode: form.countryCode,
        mobile: form.mobile,
        code: form.otp
      })

      const data = response.data || {}

      if (data.success) {
        setOtpVerified(true)
        setOtpError('')
        toast.success('OTP verified successfully!')
        return true
      } else {
        // Handle specific error messages from backend
        let errorMessage = data.error || 'Invalid OTP';
        
        // Set error state for display
        setOtpError(errorMessage);
        
        // Show specific error messages based on backend response
        if (data.error === 'No OTP found. Please request a new OTP.') {
          toast.error('No OTP found. Please request a new OTP.');
          setShowOtp(false); // Reset to first step
          setOtpVerified(false);
        } else if (data.error === 'OTP has expired. Please request a new OTP.') {
          toast.error('OTP has expired. Please request a new OTP.');
          setShowOtp(false); // Reset to first step
          setOtpVerified(false);
        } else if (data.error === 'Too many failed attempts. Please request a new OTP.') {
          toast.error('Too many failed attempts. Please request a new OTP.');
          setShowOtp(false); // Reset to first step
          setOtpVerified(false);
        } else {
          toast.error(errorMessage);
        }
        
        // Clear OTP input for invalid attempts
        setForm(prev => ({ ...prev, otp: '' }));
        return false
      }
    } catch (error) {
      console.error('Error verifying OTP:', error)
      const err: any = error
      const message = err?.response?.data?.error || 'Failed to verify OTP. Please try again.'
      setOtpError(message);
      toast.error(message)
      return false
    }
  }

  const completeSignup = async (): Promise<boolean> => {
    try {
      const signupData = {
        mobile: form.mobile,
        password: form.password,
        referralCode: FIXED_REFERRAL_CODE,
        registrationCode: FIXED_REFERRAL_CODE,
        countryCode: form.countryCode,
        otpVerified: true,
      }

      const response = await userService.addUser2(signupData)

      if (response.data.status) {
        toast.success('Registration successful!')
        setSignupCompleted(true)

        try {
          await dispatch(loginAction({
            username: form.mobile,
            password: form.password,
            logs: form.logs,
            isDemo: false,
          })).unwrap()
          return true
        } catch (loginError: any) {
          setSignupCompleted(false)
          toast.error(loginError || 'Auto-login failed. Please login manually.')
          navigate('/dash?login=1')
          return false
        }
      } else {
        toast.error(response.data.message || 'Registration failed')
        return false
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Registration failed'
      toast.error(errorMessage)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isProcessing || userState.status === 'loading') {
      return
    }

    setIsProcessing(true)
    let keepDisabled = false

    try {
      keepDisabled = await completeSignup()
    } finally {
      if (!keepDisabled) {
        setIsProcessing(false)
      }
    }
  }

  const handleResendOtp = async () => {
    // Clear any existing OTP errors
    setOtpError('');
    setForm(prev => ({ ...prev, otp: '' }));
    await sendOTPDirect()
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1)
      }, 1000)
    } else if (timer === 0) {
      setIsTimerRunning(false)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timer])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const countryCodes = [
    { code: '+91', flag: '🇮🇳', country: 'India' },
    { code: '+1', flag: '🇺🇸', country: 'USA' },
    { code: '+44', flag: '🇬🇧', country: 'UK' },
    { code: '+61', flag: '🇦🇺', country: 'Australia' },
    { code: '+86', flag: '🇨🇳', country: 'China' },
    { code: '+81', flag: '🇯🇵', country: 'Japan' },
    { code: '+49', flag: '🇩🇪', country: 'Germany' },
    { code: '+33', flag: '🇫🇷', country: 'France' },
    { code: '+39', flag: '🇮🇹', country: 'Italy' },
    { code: '+34', flag: '🇪🇸', country: 'Spain' }
  ]

  return (
    <div className="signup-wrapper">
      {/* Blinking Cursors */}

      {/* Main Container */}
      <div className="signup-container">
        <div className="signup-form-container">
          {/* Logo Section */}
          <div className="signup-logo">
            <img
               src="/imgs/logo.png"
              alt="ambaniexchange"
              className="signup-logo-img"
            />
          </div>

          <form onSubmit={handleSubmit} role="form" autoComplete="off" method="post">
            {/* Mobile Number Input */}
            {/* <div className="signup-form-group">
              <label className="signup-label">Mobile no</label>
              <div className="signup-mobile-container">
                <div className="signup-country-code">
                  <select
                    name="countryCode"
                    className="signup-country-select"
                    value={form.countryCode}
                    onChange={handleChange}
                    disabled={showOtp}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  name="mobile"
                  placeholder="Enter mobile number"
                  type="tel"
                  className="signup-mobile-input"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                  disabled={showOtp}
                />
            
              </div>
            </div> */}
            <div className="main-inputdiv mb-3 g-1 d-flex border-bottom ">
              <div className=''><div className="signup-country-code">
                <select
                  name="countryCode"
                  className="signup-country-select"
                  value={form.countryCode}
                  onChange={handleChange}
                  disabled={showOtp}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
              </div></div>
              <div className='flex-grow-1'>
                <input
                  name="mobile"
                  placeholder="Enter mobile number"
                  type="tel"
                  className="signup-mobile-input"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                  disabled={showOtp}
                />
              </div>

            </div>

            {/* Password Input */}
            <div className='mb-2'>

              <div className="main-inputdiv  d-flex border-bottom ">
                <div className="signup-form-group">
                  {/* <label className="signup-label">Choose your password</label> */}
                  <input
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    className="signup-password-input"
                    value={form.password}
                    onChange={handleChange}
                    required
                    disabled={showOtp}
                  />
                </div>
              </div>
              <div className="signup-password-hint text-white">
                (Must be contained alphanumeric and more than 6 letters)
              </div>
            </div>

            {/* <div className="signup-form-group">
              <label className="signup-label">Choose your password</label>
                              <input
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  className="signup-password-input"
                  value={form.password}
                  onChange={handleChange}
                  required
                  disabled={showOtp}
                />
              <div className="signup-password-hint">
                (Must be contained alphanumeric and more than 6 letters)
              </div>
            </div> */}

            {/* Referral Code Input */}
            <div className="main-inputdiv mb-6  d-flex border-bottom ">

              <div className="signup-form-group">
                {/* <label className="signup-label">Referral Code (Optional)</label> */}
                <input
                  name="referralCode"
                  placeholder="Referral code"
                  type="text"
                  className="signup-referral-input"
                  value={FIXED_REFERRAL_CODE}
                  onChange={handleChange}
                  readOnly
                  disabled
                />
              </div>
            </div>

            {/* OTP Section - Only show when OTP is requested */}
            {showOtp && (
              <>
                {/* Informational Text */}
                <div className="signup-info-text">
                  {otpVerified ?
                    "✅ OTP verified successfully! Completing your signup..." :
                    "By continuing you will receive a one-time verification code to your phone number by SMS."
                  }
                </div>

                {/* OTP Input */}
                {!otpVerified && (
                  <div className="signup-form-group">
                    <label className="signup-label">OTP</label>
                    <input
                      name="otp"
                      placeholder="Enter OTP"
                      type="text"
                      className={`signup-otp-input ${otpError ? 'signup-input-error' : ''}`}
                      value={form.otp}
                      onChange={handleChange}
                      required
                      maxLength={6}
                    />
                    {otpError && (
                      <div className="signup-error-message">
                        {otpError}
                      </div>
                    )}
                    <div className="signup-resend-timer">
                      {isTimerRunning ? (
                        `Resend OTP in : ${formatTime(timer)}`
                      ) : (
                        <button
                          type="button"
                          onClick={handleResendOtp}
                          className="signup-resend-btn"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#007bff',
                            textDecoration: 'underline',
                            cursor: 'pointer'
                          }}
                        >
                          Resend OTP
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Informational Text - Only show in first step */}
            {!showOtp && (
              <div className="signup-info-text text-start">
                Create your account with mobile number and password.
              </div>
            )}

            {/* Action Button */}
           <button type="submit" className="signup-otp-btn" disabled={isProcessing || userState.status === 'loading'}>
              {userState.status === 'loading'
                ? 'LOGGING IN...'
                : (isProcessing ? 'SIGNING UP...' : 'SIGN-UP')}
            </button>

            {/* WhatsApp Button - Only show in first step */}
            {!showOtp && (
              <button 
                type="button" 
                onClick={() => window.open('https://wa.link/ambani', '_blank')}
                className="signup-whatsapp-btn"
                style={{
                  width: '100%',
                  padding: '12px',
                  marginTop: '15px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                📱 Get ID with WhatsApp
              </button>
            )}

            {/* Login Link */}
            <div className="signup-login-link">
              <span>Already have account? </span>
              <span  onClick={handleLogin} style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}>LOG IN</span>
            </div>
          </form>

          {/* <div className="signup-footer">
            <div className="powered-by">Powered by <span className="ambaniexchange">ambaniexchange</span></div>
            <div className="email">ambaniexchange@gmail.com</div>
          </div> */}
        </div>
      </div>

      {/* Footer Section */}
      <section className="footer footer-login">
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
      </section>
    </div>
  )
}

export default SignUp
 
