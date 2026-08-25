

// import { yupResolver } from '@hookform/resolvers/yup'
// import { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
// import * as Yup from 'yup'
// import depositWithdrawService from '../services/deposit-withdraw.service'
// import { useNavigate } from 'react-router-dom'
// type DepositInput = {
//   amount: number
//   imageUrl: string
//   utrno: number
// }

// const validationSchema = Yup.object().shape({
//   amount: Yup.number().required('Amount is required'),
//   imageUrl: Yup.string().required('Fill this field.'),
//   utrno: Yup.number().required('Fill this field.'),
// })

// const useDeposit = () => {
//   const [amount, setAmount] = useState(null)
//   const [bankUpiLists, setBankUpiLists] = useState<any>({})
//   const [preview, setPreview] = useState({ type: '', imagePath: '', utrno:"" })
//   const navigate = useNavigate()
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm<DepositInput>({ resolver: yupResolver(validationSchema) })

//   useEffect(() => {
//     depositWithdrawService.getPaymentSetting().then((res) => setBankUpiLists(res?.data?.data))
//   }, [])

//   const handleChange = (e: any) => {
//     e.preventDefault()
//     setAmount(e.target.value)
//   }

//   const handleUploadedFile = (event: any, type: string) => {
//     const file = event.target.files[0]
//     setPreview({ type, imagePath: file, utrno:preview.utrno })
//   }

//   const handleUploadedUTR = (event: any, type: string) => {
//     const file = event.target.value
//     console.log(file)
//     setPreview({ type, imagePath: preview.imagePath, utrno:file})
//   }
//    const onSubmit = async (data: any) => {
//     if (isSubmitting) return; // Prevent multiple submissions
    
//     if (!preview.imagePath) return toast.error('Image is required field')
    
//     setIsSubmitting(true);
    
//     try {
//       const formData = new FormData()
//       const amount = getValues('amount')
//       formData.append('remark', 'ok')
//       formData.append('type', 'deposit')
//       formData.append('imageUrl', preview.imagePath)
//       formData.append('accountType', preview.type)
//       formData.append('amount', amount.toString())
//       formData.append('utrno', preview.utrno)
      
//       const response = await depositWithdrawService.addDepositWithdraw(formData)
      
//       if (response?.data?.message) {
//         // Check if it's an "already created request" error (now comes as success=false)
//         if (response.data.success === false && response.data.message.includes('already created')) {
//           // API interceptor already showed the toast, just keep user on page
//           console.log('User already has a pending deposit request');
//           return; // Don't navigate or reset form
//         }
        
//         toast.success(response?.data?.message)
//         reset()
//         setAmount(null)
//         setPreview({ type: '', imagePath: '', utrno:"" })
//         // Navigate to match/888 after successful deposit
//         navigate('/match/888')
//       } else {
//         toast.error('Something went wrong. Please try again.');
//       }
//     } catch (error: any) {
//       console.error('Deposit submission error:', error);
      
//       // Check if it's the "already created request" error
//       const errorMessage = error?.response?.data?.message || error.message;
//       if (errorMessage && errorMessage.includes('already created')) {
//         // API interceptor already showed the toast, just prevent uncaught error
//         console.log('User already has a pending deposit request');
//       } else {
//         // For other errors, show a generic message
//         toast.error('Payment submission failed. Please try again.');
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   }
//   const generateTransactionId = () => {
//     return Math.floor(100000 + Math.random() * 900000); // Generates a number between 100000 and 999999
//   };
//   return {
//     register,
//     handleSubmit,
//     onSubmit,
//     errors,
//     setValue,
//     amount,
//     handleChange,
//     bankUpiLists,
//     handleUploadedFile,
//     preview,
//     generateTransactionId,
//     handleUploadedUTR,
//     isSubmitting,
//   }
// }

// export default useDeposit







import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import depositWithdrawService from '../services/deposit-withdraw.service'
import { useNavigate } from 'react-router-dom'
type DepositInput = {
  amount: number
  imageUrl: string
  utrno: number
}

const validationSchema = Yup.object().shape({
  amount: Yup.number().required('Amount is required'),
  imageUrl: Yup.string().required('Fill this field.'),
  utrno: Yup.number().required('Fill this field.'),
})

const useDeposit = () => {
  const [amount, setAmount] = useState(null)
  const [bankUpiLists, setBankUpiLists] = useState<any>({})
  const [preview, setPreview] = useState({ type: '', imagePath: '', utrno:"" })
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<DepositInput>({ resolver: yupResolver(validationSchema) })

 useEffect(() => {
    // Try to get Payment2 settings first, fallback to old payment settings
    depositWithdrawService.getPayment2Settings()
      .then((res) => {
        if (res?.data?.paymentSettings) {
          // Transform Payment2 data to match expected format
          const transformedData = {
            settings: [res.data.paymentSettings]
          }
          setBankUpiLists({ data: transformedData })
          console.log('Using Payment2 settings:', res.data.paymentSettings)
        } else {
          // Fallback to old payment system
          return depositWithdrawService.getPaymentSetting()
        }
      })
      .then((res) => {
        if (res && res?.data?.data) {
          setBankUpiLists(res?.data?.data)
          console.log('Using old payment settings:', res?.data?.data)
        }
      })
      .catch((error) => {
        console.error('Error fetching payment settings:', error)
        // Fallback to old payment system
        depositWithdrawService.getPaymentSetting()
          .then((res) => {
            setBankUpiLists(res?.data?.data)
            console.log('Fallback to old payment settings:', res?.data?.data)
          })
          .catch((fallbackError) => {
            console.error('Error with fallback payment settings:', fallbackError)
          })
      })
  }, [])
  const handleChange = (e: any) => {
  e.preventDefault()
  setAmount(e.target.value)
  // Keep react-hook-form in sync so validation sees the value on submit
  setValue('amount', e.target.value)
  }
const onError = (errors: any) => {
  // Pick first error message and show toast
  Object.values(errors).forEach((err: any) => {
    if (err?.message) {
      toast.error(err.message)
    }
  })
}
  const handleUploadedFile = (event: any, type: string) => {
    const file = event.target.files[0]
  setPreview({ type, imagePath: file, utrno:preview.utrno })
  // update form value for file input so validation succeeds on first submit
  setValue('imageUrl', file)
  }

  const handleUploadedUTR = (event: any, type: string) => {
    const file = event.target.value
    console.log(file)
  setPreview({ type, imagePath: preview.imagePath, utrno:file})
  // update UTR form value as number/string
  setValue('utrno', file)
  }
   const onSubmit = async (data: any) => {
    if (isSubmitting) return; // Prevent multiple submissions
    
    if (!preview.imagePath) return toast.error('Image is required field')
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData()
      const amount = getValues('amount')
      formData.append('remark', 'ok')
      formData.append('type', 'deposit')
      formData.append('imageUrl', preview.imagePath)
      formData.append('accountType', preview.type)
      formData.append('amount', amount.toString())
      formData.append('utrno', preview.utrno)
      
      const response = await depositWithdrawService.addDepositWithdraw(formData)
      
      if (response?.data?.message) {
        // Check if it's an "already created request" error (now comes as success=false)
        if (response.data.success === false && response.data.message.includes('already created')) {
          // API interceptor already showed the toast, just keep user on page
          console.log('User already has a pending deposit request');
          return; // Don't navigate or reset form
        }
        
        toast.success(response?.data?.message)
  reset()
        setAmount(null)
  setPreview({ type: '', imagePath: '', utrno:"" })
  // clear form managed values
  setValue('amount', 0 as any)
  setValue('imageUrl', '')
  setValue('utrno', 0 as any)
        // Navigate to match/888 after successful deposit
        navigate('/match/888')
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error: any) {
      console.error('Deposit submission error:', error);
      
      // Check if it's the "already created request" error
      const errorMessage = error?.response?.data?.message || error.message;
      if (errorMessage && errorMessage.includes('already created')) {
        // API interceptor already showed the toast, just prevent uncaught error
        console.log('User already has a pending deposit request');
      } else {
        // For other errors, show a generic message
        toast.error('Payment submission failed. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }
  const generateTransactionId = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a number between 100000 and 999999
  };
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    onError,
    setValue,
    amount,
    handleChange,
    bankUpiLists,
    handleUploadedFile,
    preview,
    generateTransactionId,
    handleUploadedUTR,
    isSubmitting,
  }
}

export default useDeposit

