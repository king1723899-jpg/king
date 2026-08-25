import React, { useState } from 'react'
import { toast } from 'react-toastify'
import depositWithdrawService from '../../services/deposit-withdraw.service'
import SubmitButton from '../../components/SubmitButton'
import './forgotPassword.css'
import userService from '../../services/user.service'
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'phone' | 'otp' | 'password'>('phone')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Debug render
  React.useEffect(() => {
    console.log('ForgotPassword render, step:', step);
  });

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Clean phone number (remove +91 if present)
      let cleanPhoneNumber = phoneNumber.replace(/^\+91/, '').replace(/^91/, '')
      
      // Validate 10 digits
      if (cleanPhoneNumber.length !== 10) {
        toast.error('Please enter a valid 10-digit number')
        setIsLoading(false)
        return
      }

      const response = await depositWithdrawService.sendOTP({ phone: cleanPhoneNumber })
      
      if (response?.data?.success || response?.data?.data?.success) {
        toast.success('OTP sent successfully to your WhatsApp number!')
        setStep('otp')
      } else {
        toast.error('Failed to send OTP. Please try again.')
      }
    } catch (error) {
      console.error('Send OTP Error:', error)
      toast.error('Failed to send OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      let cleanPhoneNumber = phoneNumber.replace(/^\+91/, '').replace(/^91/, '')
      
      const response = await depositWithdrawService.verifyOTP({ 
        phone: cleanPhoneNumber,
        otp: otp 
      })
      
      if (response?.data?.success || response?.data?.data?.success) {
        toast.success('OTP verified successfully!')
        setStep('password')
      } else {
        toast.error('Invalid OTP. Please try again.')
      }
    } catch (error) {
      console.error('Verify OTP Error:', error)
      toast.error('Invalid OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    console.log('handleUpdatePassword called', { password, confirmPassword, isLoading });
    e.preventDefault()
    setIsLoading(true)
    // Test toast to confirm toast system is working
    toast.info('Test toast: handleUpdatePassword triggered');
    // Validate password
    if (password.length < 6) {
      console.log('Validation failed: password too short', password);
      toast.error('Password must be at least 6 characters long')
      setIsLoading(false)
      return
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      console.log('Validation failed: password not alphanumeric', password);
      toast.error('Password must contain both letters and numbers')
      setIsLoading(false)
      return
    }
    if (password !== confirmPassword) {
      console.log('Validation failed: passwords do not match', password, confirmPassword);
      toast.error('Passwords do not match')
      setIsLoading(false)
      return
    }
    try {
      let cleanPhoneNumber = phoneNumber.replace(/^\+91/, '').replace(/^91/, '')
      // Debug log to confirm API call
      console.log('Calling updatePassword', { phone: cleanPhoneNumber, password, userId: '' });
      const response = await depositWithdrawService.updatePassword({
        phone: cleanPhoneNumber,
        password,
        userId: ''
      })
      // Log the API response for debugging
      console.log('Update password response:', response);
      if (response?.data?.error === false) {
        toast.success(response?.data?.message || 'Password updated successfully!')
        setPhoneNumber('')
        setOtp('')
        setPassword('')
        setConfirmPassword('')
        setTimeout(() => {
         navigate('/dash?login=1');
        }, 1500)
      } else {
        toast.error(response?.data?.message || 'Failed to update password. Please try again.')
      }
    } catch (error: any) {
      console.error('Update Password Error:', error)
      toast.error(error?.response?.data?.message || 'Failed to update password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackToPhone = () => {
    setStep('phone')
    setOtp('')
  }

  const handleBackToOtp = () => {
    setStep('otp')
    setPassword('')
    setConfirmPassword('')
  }

  const handleClose = () => {
    // Navigate back to login or close modal
    window.history.back()
  }

  return (
    <div className="forgot-password-modal-overlay">
      <div className="forgot-password-modal">
        {/* Close Button */}
        <button className="forgot-password-close-btn" onClick={handleClose}>
          ×
        </button>
        
        {/* Logo */}
        <div className="forgot-password-logo">
          <img 
            src="/goldlogo.png" 
            alt="ambaniexchange" 
            className="logo-image"
          />
      
        </div>
        
        {/* Success Message for OTP */}
        {step === 'otp' && (
          <div className="success-banner">
            OTP sent success !
          </div>
        )}
        
        {/* Form Content */}
        <div className="forgot-password-content">
          {step === 'phone' ? (
            <form onSubmit={handleSendOtp} className="forgot-password-form">
              <div className="phone-input-container">
                <div className="country-code-selector">
                  <span className="flag">🇮🇳</span>
                  <span className="code">+91</span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                <input
                  type="text"
                  placeholder="Mobile no"
                  className="phone-input"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength={10}
                  required
                />
              </div>
              
              <div className="input-separator"></div>
              
              <SubmitButton type="submit" className="get-otp-btn" disabled={isLoading}>
                {isLoading ? 'SENDING...' : 'GET OTP'}
              </SubmitButton>
            </form>
          ) : step === 'otp' ? (
            <form onSubmit={handleVerifyOtp} className="forgot-password-form">
              <div className="otp-input-container">
                <label className="otp-label">OTP</label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  className="otp-input"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  required
                />
                <small className="otp-help-text">
                  OTP sent to +91 {phoneNumber}
                </small>
              </div>
              
              <SubmitButton type="submit" className="verify-otp-btn" disabled={isLoading}>
                {isLoading ? 'VERIFYING...' : 'VERIFY OTP'}
              </SubmitButton>
              
              <button 
                type="button" 
                onClick={handleBackToPhone}
                className="back-btn"
              >
                ← Back to Phone Number
              </button>
            </form>
          ) : (
            <form onSubmit={handleUpdatePassword} className="forgot-password-form">
              <div className="password-validation-hint">
                (Must be contains alphanumeric and more than 6 letters)
              </div>
              
              <div className="password-input-container">
                <label className="password-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="password-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="password-input-container">
                <label className="password-label">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="password-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              
              <SubmitButton type="submit" className="update-password-btn" disabled={isLoading}>
                {isLoading ? 'UPDATING...' : 'UPDATE PASSWORD'}
              </SubmitButton>
              
              <button 
                type="button" 
                onClick={handleBackToOtp}
                className="back-btn"
              >
                ← Back to OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword