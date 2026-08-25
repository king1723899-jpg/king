// import api from '../utils/api'

// class DepositWithdrawService {
//   addBankAccount(payload: any) {
//     return api.post(`add-bank-account`, payload)
//   }
//   addUpiAccount(payload: any) {
//     return api.post(`add-upi`, payload)
//   }
//   deleteUpiBank(payload: any) {
//     return api.post(`delete-upi-bank`, payload)
//   }
//   addDepositWithdraw(obj: any) {
//     return api.post(`add-deposit-withdraw`, obj, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Accept: 'application/json',
//       },
//     })
//   }
//   getDepositWithdrawLists(obj: {
//     type: string
//     username?: string
//     startDate?: string
//     endDate?: string
//     reportType?: string
//   }) {
//     return api.post(`get-deposit-withdraw-list`, obj)
//   }
//   getBankAndUpiLists() {
//     return api.get('get-bank-and-upi-list')
//   }
//   getSettingList() {
//     return api.get('get-setting-list')
//   }
//   getPaymentSetting() {
//     return api.get('get-payment-list')
//   }
//   updateDepositWithdrawStatus(obj: {
//     id?: string
//     narration?: string
//     balanceUpdateType?: string
//     status?: string
//   }) {
//     return api.post(`update-deposit-withdraw-status`, obj)
//   }
// }
// export default new DepositWithdrawService()



import api from '../utils/api'
import { prepareSecureDepositWithdrawRequest } from '../utils/requestSecurity'
import authService from './auth.service'

const HARDCODED_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3NTUxMDEzNDIsImV4cCI6MTc1NTEwODU0Mn0.l-1Z1yWz-joG1reNCX6q80iMBQutRGO8mWyYdbLheUc';

/**
 * Decode JWT token to get user info
 * Simple base64 decode without validation (backend validates)
 */
function decodeJWT(token: string): any {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('Failed to decode JWT:', error)
    return null
  }
}

class DepositWithdrawService {
  addBankAccount(payload: any) {
    return api.post(`add-bank-account`, payload)
  }
  addUpiAccount(payload: any) {
    return api.post(`add-upi`, payload)
  }
  // Removed addWhatsAppAccount as we now send details directly to admin WhatsApp
  // addWhatsAppAccount(payload: any) {
  //   return api.post(`add-phone`, payload)
  // }
  sendWhatsAppOtp(payload: any) {
    return api.post(`send-otp`, payload)
  }
  verifyWhatsAppOtp(payload: any) {
    return api.post(`verify-otp`, payload)
  }
  // Removed sendWhatsAppMessage as we now navigate to WhatsApp directly
  // sendWhatsAppMessage(payload: any) {
  //   return api.post(`send-whatsapp-message`, payload)
  // }
  deleteUpiBank(payload: any) {
    return api.post(`delete-upi-bank`, payload)
  }
  
  /**
   * 🔒 SECURE: Add deposit/withdraw with encryption + signature
   * Simple approach: Decode JWT token to get user ID (backend validates JWT anyway)
   * NO BETCODE - uses encryption instead
   */
  addDepositWithdraw(obj: any) {
    try {
      // Get JWT token from localStorage (same as before)
      const token = authService.getToken()
      if (!token) {
        console.error('❌ No authentication token found')
        throw new Error('User not authenticated. Please login again.')
      }
      
      // Decode JWT to get user info (for encryption signature only)
      const decodedToken = decodeJWT(token)
      if (!decodedToken) {
        console.error('❌ Invalid token - cannot decode')
        throw new Error('Authentication error. Please login again.')
      }
      
      // JWT can have userId, _id, or username - try all
      const userId = decodedToken.userId || decodedToken._id || decodedToken.id || decodedToken.username
      if (!userId) {
        console.error('❌ Cannot extract user ID from token:', decodedToken)
        throw new Error('Authentication error. Please login again.')
      }
      
      console.log('✅ User authenticated from JWT token:', userId)
      
      // Extract file if present
      const file = obj.get ? obj.get('imageUrl') : null
      
      // Extract data fields (non-file fields)
      const depositWithdrawData: any = {}
      if (obj.get) {
        // If obj is FormData
        obj.forEach((value: any, key: string) => {
          if (key !== 'imageUrl') { // Exclude file
            depositWithdrawData[key] = value
          }
        })
      } else {
        // If obj is regular object (shouldn't happen but handle it)
        Object.assign(depositWithdrawData, obj)
        delete depositWithdrawData.imageUrl
      }
      
      console.log('🔐 Encrypting deposit/withdraw request...')
      console.log('   Type:', depositWithdrawData.type)
      console.log('   Amount:', depositWithdrawData.amount)
      
      // Create secure encrypted request (NO BETCODE)
      const secureRequest = prepareSecureDepositWithdrawRequest(depositWithdrawData, userId)
      
      // Create new FormData with encrypted data
      const formData = new FormData()
      formData.append('payload', secureRequest.payload)
      formData.append('signature', secureRequest.signature)
      formData.append('userId', secureRequest.userId)
      formData.append('timestamp', secureRequest.timestamp.toString())
      
      // Add file if present
      if (file) {
        formData.append('imageUrl', file)
      }
      
      console.log('✅ Secure deposit/withdraw request created')
      
      return api.post(`add-deposit-withdraw`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      })
    } catch (error) {
      console.error('❌ Failed to create secure deposit/withdraw request:', error)
      throw error
    }
  }
  getDepositWithdrawLists(obj: {
    type: string
    username?: string
    startDate?: string
    endDate?: string
    reportType?: string
  }) {
    return api.post(`get-deposit-withdraw-list`, obj)
  }
  getBankAndUpiLists() {
    return api.get('get-bank-and-upi-list')
  }
  getSettingList() {
    return api.get('get-setting-list')
  }
  getPaymentSetting() {
    return api.get('get-payment-list')
  }
  
  
    getPayment2Settings() {
    return api.get('payment2-settings')
  }
  
  updateDepositWithdrawStatus(obj: {
    id?: string
    narration?: string
    balanceUpdateType?: string
    status?: string
  }) {
    return api.post(`update-deposit-withdraw-status`, obj)
  }
  sendOTP(payload: { phone: string }) {
    return api.post(`send-otp`, payload)
  }
  verifyOTP(payload: { phone: string; otp: string }) {
    return api.post(`verify-otp`, payload)
  }
  updatePassword(payload: { phone: string; password: string; userId: string }) {
    const headers = {
      'Authorization': `Bearer ${HARDCODED_TOKEN}`
    };
    console.log('Sending updatePassword API', { payload, headers });
    return api.post('/update-password', payload, { headers })
  }
  
  /////////analysis update///////////

  getAnalysisData() {
    return api.get('get-analysis-data')
  }
  getUserDetails(userId: string, type: string) {
    return api.get(`get-user-details/${userId}?type=${type}`)
  }

  searchUsers(searchTerm: string) {
    return api.get(`search-users?searchTerm=${encodeURIComponent(searchTerm)}`)
  }

  /////////analysis update///////////
  
}
export default new DepositWithdrawService()
