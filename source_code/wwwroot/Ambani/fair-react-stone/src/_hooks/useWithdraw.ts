import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import depositWithdrawService from '../services/deposit-withdraw.service'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
type WithdrawInput = {
  amount: number
  bankDetail: string
  remark: string
  type: string
  accountType: string
}

const validationSchema = Yup.object().shape({
  amount: Yup.string().required('Amount is required'),
  bankDetail: Yup.object().required('Select one option from bank details or Upi').nullable(),
})

const useWithdraw = () => {
  // const [bankUpiLists, setBankUpiLists] = useState({ upi: [], bank: [] })
  const [bankUpiLists, setBankUpiLists] = useState({ upi: [], bank: [], whatsapp: [] })
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<WithdrawInput>({ resolver: yupResolver(validationSchema) })

  useEffect(() => {
    getBankAndUpiList()
  }, [])

  const getBankAndUpiList = () => {
    depositWithdrawService?.getBankAndUpiLists().then((res) => setBankUpiLists(res?.data?.data))
  }

  const handleDelete = (type: string, id: any) => {
    depositWithdrawService?.deleteUpiBank({ type: type, id: id }).then(() => {
      getBankAndUpiList()
    })
  }

//   const onSubmit: SubmitHandler<WithdrawInput> = async (data) => {
//     data.remark = 'ok'
//     data.type = 'withdraw'
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     //@ts-expect-error
//     // data.accountType = data?.bankDetail?.accountHolderName ? 'bank' : 'upi'
//     data.accountType = data?.bankDetail?.accountHolderName ? 'bank' : data?.bankDetail?.whatsappNumber ? 'whatsapp' : 'upi'
//     console.log('data...', data)
//     if (data.bankDetail) {
//       const response = await depositWithdrawService.addDepositWithdraw(data)
//       if (response?.data?.message) {
//         toast.success(response?.data?.message)
//         reset()
//         navigate('/match/888')
//       }
//     }
//   }


 const onSubmit: SubmitHandler<WithdrawInput> = async (data) => {
    try {
      data.remark = 'ok'
      data.type = 'withdraw'
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      // data.accountType = data?.bankDetail?.accountHolderName ? 'bank' : 'upi'
      data.accountType = data?.bankDetail?.accountHolderName ? 'bank' : data?.bankDetail?.whatsappNumber ? 'whatsapp' : 'upi'
      console.log('data...', data)
      if (data.bankDetail) {
        const response = await depositWithdrawService.addDepositWithdraw(data)
        if (response?.data?.message) {
          // Check if it's an "already created request" error (now comes as success=false)
          if (response.data.success === false && response.data.message.includes('already created')) {
            // API interceptor already showed the toast, just keep user on page
            console.log('User already has a pending withdraw request');
            return; // Don't navigate or reset form
          }
          
          toast.success(response?.data?.message)
          
          reset()
          navigate('/match/888')
        }
      }
    } catch (error: any) {
      console.error('Withdraw submission error:', error);
      
      // Check if it's the "already created request" error
      const errorMessage = error?.response?.data?.message || error.message;
      if (errorMessage && errorMessage.includes('already created')) {
        // API interceptor already showed the toast, just prevent uncaught error
        console.log('User already has a pending withdraw request');
      } else {
        // For other errors, show a generic message
        toast.error('Withdrawal submission failed. Please try again.');
      }
    }
  }
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setValue,
    bankUpiLists,
    handleDelete,
    getBankAndUpiList,
  }
}

export default useWithdraw
