// import React from 'react'
// import { useForm } from 'react-hook-form'
// import * as Yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { toast } from 'react-toastify'
// import depositWithdrawService from '../../services/deposit-withdraw.service'

// const AddAccountModalPari = ({ onSuccess }: { onSuccess: () => void }) => {
//   const validationSchema = Yup.object().shape({
//     accountHolderName: Yup.string().required('Account Holder Name is required'),
//     accountNumber: Yup.string().required('Account Number is required'),
//     ifscCode: Yup.string().required('IFSC Code is required'),
//   })
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({ resolver: yupResolver(validationSchema) })

//   const onSubmit = async (data: any) => {
//     const response = await depositWithdrawService.addBankAccount(data)
//     if (response?.data?.data?.success) {
//       onSuccess()
//       toast.success('Account successfully added.')
//       reset()
//       // eslint-disable-next-line
//       //@ts-expect-error
//       window.$('#accountModal').modal('hide')
//     }
//   }
//   return (
//     <div
//       className='modal fade popupcls'
//       id='accountModal'
//       tabIndex={-1}
//       role='dialog'
//       aria-labelledby='accountModalCenterTitle'
//       aria-hidden='true'
//     >
//       <div className='modal-dialog modal-login-new' role='document'>
//         <div className='modal-content'>
//           <div className='modal-header'>
//             <h5 className='modal-title' id='accountModalCenterTitle'>
//               Add Bank Detail
//             </h5>
//             <button
//               type='button'
//               className='btn-close loginpop'
//               data-dismiss='modal'
//               aria-label='Close'
//               onClick={() => reset()}
//             >
//               <span aria-hidden='true'>×</span>
//             </button>
//           </div>
//           <div className='modal-body'>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className='form-group' style={{ position: 'relative' }}>
//                 <label>Account Holder Name:</label>
//                 <input type='text' className='form-control' {...register('accountHolderName')} />
//                 {errors?.accountHolderName ? (
//                   // eslint-disable-next-line
//                   // @ts-expect-error
//                   <p className='error-message'>{errors.accountHolderName.message}</p>
//                 ) : (
//                   <p></p>
//                 )}
//               </div>
//               <div className='form-group' style={{ position: 'relative' }}>
//                 <label>Account Number:</label>
//                 <input {...register('accountNumber')} type='number' className='form-control' />
//                 {errors?.accountNumber ? (
//                   // eslint-disable-next-line
//                   // @ts-expect-error
//                   <p className='error-message'>{errors.accountNumber.message}</p>
//                 ) : (
//                   <p></p>
//                 )}
//               </div>
//               <div className='form-group' style={{ position: 'relative' }}>
//                 <label>IFSC Code:</label>
//                 <input {...register('ifscCode')} type='text' className='form-control' />
//                 {errors?.ifscCode ? (
//                   // eslint-disable-next-line
//                   // @ts-expect-error
//                   <p className='error-message'>{errors.ifscCode.message}</p>
//                 ) : (
//                   <p className='error'></p>
//                 )}
//               </div>
//               <button type='submit' className='btn btn-primary'>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddAccountModalPari

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import depositWithdrawService from '../../services/deposit-withdraw.service'

const AddAccountModalPari = ({ onSuccess }: { onSuccess: () => void }) => {
  const [showOtpField, setShowOtpField] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [otpVerified, setOtpVerified] = useState(false)

  const validationSchema = Yup.object().shape({
    accountHolderName: Yup.string().required('Account Holder Name is required'),
    accountNumber: Yup.string().required('Account Number is required'),
    ifscCode: Yup.string().required('IFSC Code is required'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) })

  const handleSendOTP = async () => {
    if (!phone) {
      toast.error('Please enter mobile number')
      return
    }
    
    setIsLoading(true)
    try {
      const response = await depositWithdrawService.sendOTP({ phone })
      if (response?.data?.data?.success) {
        setShowOtpField(true)
        setOtpVerified(false)
        toast.success('OTP sent successfully!')
      } else {
        toast.error(response?.data?.data?.message || 'Failed to send OTP')
      }
    } catch (error) {
      toast.error('Failed to send OTP')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    if (!otp) {
      toast.error('Please enter OTP')
      return
    }

    setIsLoading(true)
    try {
      const response = await depositWithdrawService.verifyOTP({ phone, otp })
      if (response?.data?.data?.success) {
        toast.success('OTP verified successfully!')
        setOtpVerified(true)
        setShowOtpField(false)
        setOtp('')
      } else {
        toast.error(response?.data?.data?.message || 'Invalid OTP')
      }
    } catch (error) {
      toast.error('Failed to verify OTP')
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (data: any) => {
    if (!phone) {
      toast.error('Please enter mobile number')
      return
    }
    
    if (!otpVerified) {
      toast.error('Please verify your mobile number with OTP first')
      return
    }

    const response = await depositWithdrawService.addBankAccount({ ...data, phone })
    if (response?.data?.data?.success) {
      onSuccess()
      toast.success('Account successfully added.')
      reset()
      setPhone('')
      setOtp('')
      setShowOtpField(false)
      setOtpVerified(false)
      // eslint-disable-next-line
      //@ts-expect-error
      window.$('#accountModal').modal('hide')
    }
  }

  const handleReset = () => {
    reset()
    setPhone('')
    setOtp('')
    setShowOtpField(false)
    setOtpVerified(false)
  }

  return (
    <div
      className='modal fade popupcls'
      id='accountModal'
      tabIndex={-1}
      role='dialog'
      aria-labelledby='accountModalCenterTitle'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-login-new' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='accountModalCenterTitle'>
              Add Bank Detail
            </h5>
            <button
              type='button'
              className='btn-close loginpop'
              data-dismiss='modal'
              aria-label='Close'
              onClick={handleReset}
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div className='modal-body'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-group' style={{ position: 'relative' }}>
                <label>Account Holder Name:</label>
                <input type='text' className='form-control' {...register('accountHolderName')} />
                {errors?.accountHolderName ? (
                  // eslint-disable-next-line
                  // @ts-expect-error
                  <p className='error-message'>{errors.accountHolderName.message}</p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className='form-group' style={{ position: 'relative' }}>
                <label>Account Number:</label>
                <input {...register('accountNumber')} type='number' className='form-control' />
                {errors?.accountNumber ? (
                  // eslint-disable-next-line
                  // @ts-expect-error
                  <p className='error-message'>{errors.accountNumber.message}</p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className='form-group' style={{ position: 'relative' }}>
                <label>IFSC Code:</label>
                <input {...register('ifscCode')} type='text' className='form-control' />
                {errors?.ifscCode ? (
                  // eslint-disable-next-line
                  // @ts-expect-error
                  <p className='error-message'>{errors.ifscCode.message}</p>
                ) : (
                  <p className='error'></p>
                )}
              </div>
              <div className='form-group' style={{ position: 'relative' }}>
                <label>MOBILE NO:</label>
                <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Enter Mobile No'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button 
                  type='button' 
                  className='btn btn-primary mt-2'
                  onClick={handleSendOTP}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Get OTP'}
                </button>
                {otpVerified && (
                  <p className='text-success mt-1' style={{ fontSize: '12px' }}>
                    ✓ Mobile number verified
                  </p>
                )}
              </div>
              {showOtpField && (
                <div className='form-group' style={{ position: 'relative' }}>
                  <label>Enter OTP:</label>
                  <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Enter OTP'
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button 
                    type='button' 
                    className='btn btn-success mt-2'
                    onClick={handleVerifyOTP}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Verifying...' : 'Verify OTP'}
                  </button>
                </div>
              )}
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAccountModalPari
