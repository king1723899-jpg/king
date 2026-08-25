import api from '../utils/api'

class UserService {
  getUserList({ username, type, search, status, page }: any) {
    const getStatus = status ? status : ''
    if (username)
      return api.get(
        `/get-user-list/?username=${username}&search=${search}&type=${type}&status=${getStatus}&page=${page}`,
      )
console.log(search,type,"searchtype");
    if (search && type)
      return api.get(
        `/get-user-list/?search=${search}&type=${type}&status=${getStatus}&page=${page}`,
      )

    return api.get(`/get-user-list?status=${getStatus}&page=${page}`)
  }

  getUserBook() {
    return api.get('/get-user-book')
  }

  getUserDetail(username: string) {
    return api.get(`/get-user-detail/?username=${username}`)
  }

  getParentUserDetail(username: string) {
    return api.get(`/get-parent-user-detail/?username=${username}`)
  }

  addUser(data: any) {
    return api.post('/register', data)
  }

  addUser2(data: any) {
    // Use hardcoded token for register2 endpoint
    const HARDCODED_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3NTUxMDEzNDIsImV4cCI6MTc1NTEwODU0Mn0.l-1Z1yWz-joG1reNCX6q80iMBQutRGO8mWyYdbLheUc'
    
    return api.post('/register2', data, {
      headers: {
        'Authorization': `Bearer ${HARDCODED_TOKEN}`
      }
    })
  }

  updatePassword(data: any) {
    return api.post('/update-user', data)
  }

  updateDepositBalance(data: any) {
    return api.post('/user-account-balance', data)
  }

  updateUserExposureAndCreditLimit(data: any) {
    return api.post('/update-user-wallet', data)
  }

  updateUserStake(data: any) {
    return api.post('/save-user-stake', data)
  }

  getUserStake() {
    return api.get('/get-user-stake')
  }
  updateUserAndBetStatus(data: any) {
    return api.post('/update-user-status', data)
  }
  updateuserpassword(data: any) {
    return api.post('/update-password', data)
  }
  addTransactionPassword(data: any) {
    return api.post('/add-transaction-password', data)
  }

  getUserBalance() {
    return api.get('/get-user-balance')
  }
  getUsercompletedbets(page: number, data: any) {
    return api.post(`/alluserbetList?page=${page}`, data)
  }

  getUserListSuggestion(data: any) {
    return api.post(`get-user-list-suggestion`, data)
  }

  saveGeneralSetting(data: any) {
    return api.post(`save-general-setting`, data)
  }

  resetTxnPassword(data: any) {
    return api.post(`reset-transaction-password`, data)
  }

  getExposerEvent() {
    return api.get('/get-exposer-event')
  }


    // OTP Methods
    sendOTP(data: any) {
      return api.post('/send-otp', data)
    }
  
    verifyOTP(data: any) {
      return api.post('/verify-otp', data)
    }
}

export default new UserService()
