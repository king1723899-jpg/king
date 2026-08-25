// import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
// import { toast } from 'react-toastify'
// import { setChangePassAndTxn, setLoader } from '../redux/actions/common/commonSlice'
// import { logout } from '../redux/actions/login/loginSlice'
// import { store } from '../redux/store'
// import authService from '../services/auth.service'

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_BASEURL,
//   timeout: 50000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })

// api.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     //store.dispatch(setLoader(true))
//     // Do something before request is sent
//     const token = authService.getToken()
//     config.headers.Authorization = token ? `Bearer ${token}` : ''
//     return config
//   },
//   (error: AxiosError) => {
//     // Do something with request error
//     return Promise.reject(error)
//   },
// )

// // Add a response interceptor to handle 401 errors globally
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle JWT expiration and redirect to appropriate login page
//     if (error.response?.status === 401) {
//       console.log('Unauthorized request - JWT expired:', error.config?.url)
      
//       // ✅ FIX: Redirect to appropriate login page based on current path
//       const currentPath = window.location.pathname
//       const isAdminPath = currentPath.startsWith('/admin')
      
//       // Clear auth data (both user and admin tokens)
//       localStorage.removeItem('token')
//       localStorage.removeItem('refreshToken')
//       localStorage.removeItem('token-admin')
//       localStorage.removeItem('refreshToken-admin')
      
//       // Redirect to appropriate login page
//       if (isAdminPath) {
//         console.log('🔄 Redirecting to admin login')
//         window.location.href = '/admin/login'
//       } else {
//         console.log('🔄 Redirecting to user login')
//         window.location.href = '/login'
//       }
      
//       // Silently reject without throwing to prevent uncaught promise errors
//       return Promise.reject(error)
//     }
//     return Promise.reject(error)
//   }
// )

// // Add a global error handler for uncaught promise rejections
// if (typeof window !== 'undefined') {
//   window.addEventListener('unhandledrejection', (event) => {
//     // Check if it's a network error we want to suppress
//     if (event.reason?.message?.includes('401') || 
//         event.reason?.message?.includes('Network Error') ||
//         event.reason?.response?.status === 401) {
//       console.log('Suppressed uncaught promise rejection:', event.reason.message)
//       event.preventDefault() // Prevent the error from showing in console
//     }
//   })
// }

// export const sportsApi = axios.create({
//   baseURL: process.env.REACT_APP_API_SPORTS_URL,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })

// export const fancyApi = axios.create({
//   baseURL: process.env.REACT_APP_PYTHON_SERVER,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
// fancyApi.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     store.dispatch(setLoader(true))
//     // Do something before request is sent
//     const token = authService.getToken()
//     config.headers.Authorization = token ? `Bearer ${token}` : ''
//     return config
//   },
//   (error: AxiosError) => {
//     // Do something with request error
//     return Promise.reject(error)
//   },
// )

// // Add a response interceptor
// fancyApi.interceptors.response.use(
//   (response: AxiosResponse) => {
//     store.dispatch(setLoader(false))
//     if (!response.data.changePassAndTxn) {
//       store.dispatch(setChangePassAndTxn(response.data.changePassAndTxn))
//     }

//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response
//   },
//   async (error: AxiosError<{ message: string; data: any }>) => {
//     store.dispatch(setLoader(false))
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     const token = authService.getRefreshToken()
//     const originalConfig: any = error.config

//     if (error.response?.data?.data && error.response?.data?.data.maintenance) {
//       setTimeout(() => {
//         store.dispatch(logout())
//         window.location.reload()
//       }, 1)
//     }

//     if (
//       (error.response?.status === 401 && error.response?.data?.message === 'jwt expired') ||
//       (error.response?.data?.message === 'jwt malformed' && !originalConfig._retry)
//     ) {
//       // ✅ FIX: Handle JWT expiration with proper redirection
//       console.log('🔄 JWT expired - redirecting to login')
      
//       // Dispatch logout action
//       store.dispatch(logout())
      
//       // Clear auth data
//       localStorage.removeItem('token')
//       localStorage.removeItem('refreshToken')
      
//       // Redirect to appropriate login page based on current path
//       const currentPath = window.location.pathname
//       const isAdminPath = currentPath.startsWith('/admin')
      
//       if (isAdminPath) {
//         window.location.href = '/admin/login'
//       } else {
//         window.location.href = '/login'
//       }
      
//       return true
//     }

//     if (error.response?.data?.message !== 'No auth token') {
//       if (!window.location.pathname.includes('/login')) toast.error(error.response?.data?.message)
//     }

//     return Promise.reject(error)
//   },
// )

// export default api


// import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
// import { toast } from 'react-toastify'
// import { setChangePassAndTxn, setLoader } from '../redux/actions/common/commonSlice'
// import { logout } from '../redux/actions/login/loginSlice'
// import { store } from '../redux/store'
// import authService from '../services/auth.service'

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_BASEURL,
//   timeout: 50000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })

// api.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     // Only add Authorization for non-OTP endpoints and non-register2 endpoint
//     if (
//       !config.url?.includes('/send-otp') &&
//       !config.url?.includes('/verify-otp') &&
//       !config.url?.includes('/signup-with-otp') &&
//       !config.url?.includes('/register2') &&
//       !config.url?.includes('/update-password') // <-- Do not overwrite for update-password
//     ) {
//       const token = authService.getToken()
//       config.headers.Authorization = token ? `Bearer ${token}` : ''
//     }
//     // Do NOT delete Authorization header in else block, so custom headers are preserved
//     return config
//   },
//   (error: AxiosError) => {
//     // Do something with request error
//     return Promise.reject(error)
//   },
// )

// // Add a response interceptor
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     store.dispatch(setLoader(false))
//     if (!response.data.changePassAndTxn) {
//       store.dispatch(setChangePassAndTxn(response.data.changePassAndTxn))
//     }

//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response
//   },
//   async (error: AxiosError<{ message: string; data: any }>) => {
//     store.dispatch(setLoader(false))
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     const token = authService.getRefreshToken()
//     const originalConfig: any = error.config

//     if (error.response?.data?.data && error.response?.data?.data.maintenance) {
//       setTimeout(() => {
//         store.dispatch(logout())
//         window.location.reload()
//       }, 1)
//     }

//     if (
//       (error.response?.status === 401 && error.response?.data?.message === 'jwt expired') ||
//       (error.response?.data?.message === 'jwt malformed' && !originalConfig._retry)
//     ) {
//       // const refreshTokenApi = await authService.refreshToken(token)
//       // const accessToken = refreshTokenApi.data.data.newToken
//       // originalConfig._retry = true
//       // api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
//       // localStorage.setItem('token', accessToken)
//       // return api(originalConfig)
//       store.dispatch(logout())
//       window.location.reload()
//       return true
//     }

//     if (error.response?.data?.message !== 'No auth token') {
//       if (!window.location.pathname.includes('/login')) toast.error(error.response?.data?.message)
//     }

//     return Promise.reject(error)
//   },
// )

// export const sportsApi = axios.create({
//   baseURL: process.env.REACT_APP_API_SPORTS_URL,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })

// export const fancyApi = axios.create({
//   baseURL: process.env.REACT_APP_PYTHON_SERVER,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
// fancyApi.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     store.dispatch(setLoader(true))
//     // Do something before request is sent
//     const token = authService.getToken()
//     config.headers.Authorization = token ? `Bearer ${token}` : ''
//     return config
//   },
//   (error: AxiosError) => {
//     // Do something with request error
//     return Promise.reject(error)
//   },
// )

// // Add a response interceptor
// fancyApi.interceptors.response.use(
//   (response: AxiosResponse) => {
//     store.dispatch(setLoader(false))
//     if (!response.data.changePassAndTxn) {
//       store.dispatch(setChangePassAndTxn(response.data.changePassAndTxn))
//     }

//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response
//   },
//   async (error: AxiosError<{ message: string; data: any }>) => {
//     store.dispatch(setLoader(false))
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     const token = authService.getRefreshToken()
//     const originalConfig: any = error.config

//     if (error.response?.data?.data && error.response?.data?.data.maintenance) {
//       setTimeout(() => {
//         store.dispatch(logout())
//         window.location.reload()
//       }, 1)
//     }

//     if (
//       (error.response?.status === 401 && error.response?.data?.message === 'jwt expired') ||
//       (error.response?.data?.message === 'jwt malformed' && !originalConfig._retry)
//     ) {
//       // const refreshTokenApi = await authService.refreshToken(token)
//       // const accessToken = refreshTokenApi.data.data.newToken
//       // originalConfig._retry = true
//       // api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
//       // localStorage.setItem('token', accessToken)
//       // return api(originalConfig)
//       store.dispatch(logout())
//       window.location.reload()
//       return true
//     }

//     if (error.response?.data?.message !== 'No auth token') {
//       if (!window.location.pathname.includes('/login')) toast.error(error.response?.data?.message)
//     }

//     return Promise.reject(error)
//   },
// )

// export default api










import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { toast } from 'react-toastify'

import { setChangePassAndTxn, setLoader } from '../redux/actions/common/commonSlice'

import { logout } from '../redux/actions/login/loginSlice'

import { store } from '../redux/store'

import authService from '../services/auth.service'


const inferSameOriginApiBase = (): string => {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin.replace(/\/+$/, '')}/api/`
  }
  return '/api/'
}

const normalizeBaseUrl = (value: string | undefined, fallback: string): string => {
  const base = String(value || '').trim() || fallback
  return base.endsWith('/') ? base : `${base}/`
}

const DEFAULT_API_BASE = inferSameOriginApiBase()


const api = axios.create({

  baseURL: normalizeBaseUrl(process.env.REACT_APP_API_BASEURL, DEFAULT_API_BASE),

  timeout: 50000,

  headers: {

    'Content-Type': 'application/json',

  },

})



api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Endpoints that do NOT require Authorization
    const noAuthEndpoints = [
      '/send-otp',
      '/verify-otp',
      '/register2',
      '/update-password'
    ];

    // Check if current request matches any no-auth endpoint
    const isNoAuth = noAuthEndpoints.some(endpoint =>
      config.url?.includes(endpoint)
    );

    if (!isNoAuth) {
      const token = authService.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // 🔒 SECURITY: BETCODE removed - deposit/withdraw now uses encryption + signature
    // Requests are encrypted using prepareSecureDepositWithdrawRequest() before calling API
    // This prevents BETCODE exposure in browser devtools

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);


// Add a response interceptor
// ✅ REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Endpoints that do NOT require Authorization
    const noAuthEndpoints = [
      '/send-otp',
      '/verify-otp',
      '/register2',
      '/update-password'
    ];

    const isNoAuth = noAuthEndpoints.some(endpoint =>
      config.url?.includes(endpoint)
    );

    if (!isNoAuth) {
      const token = authService.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// ✅ RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Stop loader on successful response
    store.dispatch(setLoader(false));

    // Update changePassAndTxn if available
    if (!response.data.changePassAndTxn) {
      store.dispatch(setChangePassAndTxn(response.data.changePassAndTxn));
    }

    return response;
  },
  async (error: AxiosError<{ message: string; data: any }>) => {
    store.dispatch(setLoader(false));

    const token = authService.getRefreshToken();
    const originalConfig: any = error.config;

    // Maintenance Mode Handling
    if (error.response?.data?.data && error.response?.data?.data.maintenance) {
      setTimeout(() => {
        store.dispatch(logout());
        window.location.reload();
      }, 1);
      return Promise.reject(error);
    }
    

    // ✅ Session Expired (Logged in elsewhere)
    const errorData = error.response?.data?.data || {};
    if (error.response?.status === 401 && errorData.code === 'SESSION_EXPIRED') {
      console.log('🔴 Session expired - logged in from another device/browser');
      
      // Clear all tokens and session data
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('token-admin');
      localStorage.removeItem('refreshToken-admin');
      localStorage.removeItem('login-session');
      
      // Dispatch logout
      store.dispatch(logout());
      
      // Show alert to user
      toast.error('You have been logged out because your account was signed in from another device.', {
        autoClose: 5000,
        position: 'top-center'
      });
      
      // Redirect to login
      setTimeout(() => {
        const currentPath = window.location.pathname;
        const isAdminPath = currentPath.startsWith('/admin');
        window.location.href = isAdminPath ? '/admin/login' : '/login';
      }, 1000);
      
      return Promise.reject(error);
    }

    // JWT Expired / Malformed / 401 Unauthorized
    const errorMsg1 = error.response?.data?.message || '';
    const isAlreadyCreatedErr1 = errorMsg1.toLowerCase().includes('already created') && errorMsg1.toLowerCase().includes('request');
    const isTransactionPasswordErr1 = errorMsg1.toLowerCase().includes('transaction password');
    
    // ✅ Don't logout for casino play URL - show friendly message instead
    const requestUrl = String(originalConfig?.url || '').toLowerCase();
    const isCasinoPlayUrl = requestUrl.includes('get-cas-casino-play-url') || requestUrl.includes('getgameurl.php');
    const isLoginEndpoint =
      requestUrl === 'login' ||
      requestUrl.startsWith('login?') ||
      requestUrl.endsWith('/login') ||
      requestUrl.includes('/api/login') ||
      requestUrl === 'login-admin' ||
      requestUrl.startsWith('login-admin?') ||
      requestUrl.endsWith('/login-admin') ||
      requestUrl.includes('/api/login-admin');
    
    if (
      (error.response?.status === 401 ||
      error.response?.data?.message === 'jwt expired' ||
      (error.response?.data?.message === 'jwt malformed' && !originalConfig._retry)) &&
     !isAlreadyCreatedErr1 && !isTransactionPasswordErr1 &&   // Don't logout for "already created request" or "transaction password" errors
     !isCasinoPlayUrl && // Don't logout for casino play URL errors
     !isLoginEndpoint // Don't redirect on invalid login credentials
    ) {
      console.log('Unauthorized request - JWT expired or malformed:', error.config?.url);

      const currentPath = window.location.pathname;
      const isAdminPath = currentPath.startsWith('/admin');

      // Clear all tokens
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('token-admin');
      localStorage.removeItem('refreshToken-admin');
      localStorage.removeItem('login-session');

      // 🔄 If you want token refresh, uncomment:
      // const refreshTokenApi = await authService.refreshToken(token);
      // const accessToken = refreshTokenApi.data.data.newToken;
      // originalConfig._retry = true;
      // api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      // localStorage.setItem('token', accessToken);
      // return api(originalConfig);

      // Redirect to correct login page
      if (isAdminPath) {
        console.log('🔄 Redirecting to admin login');
        window.location.href = '/admin/login';
      } else {
        console.log('🔄 Redirecting to user login');
        window.location.href = '/dash';
      }

      return Promise.reject(error);
    }

    // ✅ For casino play URL, silently reject to let component handle it
    if (isCasinoPlayUrl) {
      console.log('Casino play URL error - handled by component:', error.response?.status);
      return Promise.reject(error);
    }

    // Toast for other errors (but not casino play URL - handled separately)
    if (error.response?.data?.message !== 'No auth token') {
      if (!window.location.pathname.includes('/dash')) {
        toast.error(error.response?.data?.message);
      }
    }
        const errorMsg2 = error.response?.data?.message || '';
    const isAlreadyCreatedErr2 = errorMsg2.toLowerCase().includes('already created') && errorMsg2.toLowerCase().includes('request');
     const isTransactionPasswordErr2 = errorMsg2.toLowerCase().includes('transaction password');
    
   if (isAlreadyCreatedErr2 || isTransactionPasswordErr2) {
      // Return a resolved promise to prevent uncaught error
      return Promise.resolve({
        data: { 
          success: false, 
          message: errorMsg2 
        }
      });
    }

    return Promise.reject(error);
  }
);




export const sportsApi = axios.create({

  baseURL: normalizeBaseUrl(process.env.REACT_APP_API_SPORTS_URL, DEFAULT_API_BASE),

  timeout: 10000,

  headers: {

    'Content-Type': 'application/json',

  },

})



export const fancyApi = axios.create({

  baseURL: normalizeBaseUrl(process.env.REACT_APP_PYTHON_SERVER, DEFAULT_API_BASE),

  timeout: 10000,

  headers: {

    'Content-Type': 'application/json',

  },

})

fancyApi.interceptors.request.use(

  async (config: InternalAxiosRequestConfig) => {

    store.dispatch(setLoader(true))

    // Do something before request is sent

    const token = authService.getToken()

    config.headers.Authorization = token ? `Bearer ${token}` : ''

    // 🔐 AUTO-ENCRYPT BET REQUESTS
    if (config.url === 'placebet' && config.data) {
      try {
        console.log('🔐 Auto-encrypting bet request...')
        
        // Import encryption utility
        const security = await import('./requestSecurity')
        const userState = store.getState().userReducer
        const userId = userState.userData?.user?._id
        
        if (userId) {
          const secureRequest = security.prepareSecureBetRequest(config.data, userId)
          config.data = secureRequest
          console.log('✅ Bet request encrypted automatically')
          console.log('📦 Encrypted payload sample:', JSON.stringify(secureRequest).substring(0, 200))
        } else {
          console.warn('⚠️ No user ID found, sending unencrypted')
        }
      } catch (error) {
        console.error('❌ Error in auto-encryption:', error)
        // Continue with original request as fallback
      }
    }

    return config

  },

  (error: AxiosError) => {

    // Do something with request error

    return Promise.reject(error)

  },

)



// Add a response interceptor

fancyApi.interceptors.response.use(

  (response: AxiosResponse) => {

    store.dispatch(setLoader(false))

    if (!response.data.changePassAndTxn) {

      store.dispatch(setChangePassAndTxn(response.data.changePassAndTxn))

    }



    // Any status code that lie within the range of 2xx cause this function to trigger

    // Do something with response data

    return response

  },

  async (error: AxiosError<{ message: string; data: any }>) => {

    store.dispatch(setLoader(false))

    // Any status codes that falls outside the range of 2xx cause this function to trigger

    // Do something with response error

    const token = authService.getRefreshToken()

    const originalConfig: any = error.config



    if (error.response?.data?.data && error.response?.data?.data.maintenance) {

      setTimeout(() => {

        store.dispatch(logout())

        window.location.reload()

      }, 1)

    }

  // ✅ Check for SESSION_EXPIRED from Python backend
    const errorData3: any = error.response?.data || {};
    if (error.response?.status === 401 && errorData3.code === 'SESSION_EXPIRED') {
      console.log('🔴 Session expired (Python) - logged in from another device/browser');
      
      store.dispatch(logout());
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('login-session');
      
      toast.error('You have been logged out because your account was signed in from another device.', {
        autoClose: 5000,
        position: 'top-center'
      });
      
      setTimeout(() => {
        window.location.href = '/login';
      }, 1000);
      
      return Promise.reject(error);
    }

  const errorMsg3 = error.response?.data?.message || '';
    const isAlreadyCreatedErr3 = errorMsg3.toLowerCase().includes('already created') && errorMsg3.toLowerCase().includes('request');
    const isTransactionPasswordErr3 = errorMsg3.toLowerCase().includes('transaction password');

    if (

       ((error.response?.status === 401 && error.response?.data?.message === 'jwt expired') ||

      (error.response?.data?.message === 'jwt malformed' && !originalConfig._retry)) &&
      
       !isAlreadyCreatedErr3 && !isTransactionPasswordErr3  // Don't logout for "already created request" or "transaction password" errors

    ) {

      // const refreshTokenApi = await authService.refreshToken(token)

      // const accessToken = refreshTokenApi.data.data.newToken

      // originalConfig._retry = true

      // api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

      // localStorage.setItem('token', accessToken)

      // return api(originalConfig)

      store.dispatch(logout())

      window.location.reload()

      return true

    }



    if (error.response?.data?.message !== 'No auth token') {

      if (!window.location.pathname.includes('/dash')) toast.error(error.response?.data?.message)

    }
    
     const errorMsg4 = error.response?.data?.message || '';
    const isAlreadyCreatedErr4 = errorMsg4.toLowerCase().includes('already created') && errorMsg4.toLowerCase().includes('request');
      const isTransactionPasswordErr4 = errorMsg4.toLowerCase().includes('transaction password');
    
     if (isAlreadyCreatedErr4 || isTransactionPasswordErr4) {
      // Return a resolved promise to prevent uncaught error
      return Promise.resolve({
        data: { 
          success: false, 
          message: errorMsg4 
        }
      });
    }

    return Promise.reject(error)

  },

)

// ✅ Global handler for uncaught casino play URL errors
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    // Check if it's a casino play URL error
    const rejectUrl = String(event.reason?.config?.url || '').toLowerCase()
    if (rejectUrl.includes('get-cas-casino-play-url') || rejectUrl.includes('getgameurl.php')) {
      console.log('Suppressed uncaught casino play URL error:', event.reason)
      event.preventDefault() // Prevent the error from showing in console
    }
  })
}

const shouldSkipSessionHeartbeatPath = (pathname: string) => {
  const p = String(pathname || '').toLowerCase()
  return (
    p === '/login' ||
    p === '/dash' ||
    p === '/admin/login' ||
    p.startsWith('/register') ||
    p.startsWith('/forgot-password')
  )
}

const getActiveAuthTokenForPath = (pathname: string) => {
  const isAdminPath = String(pathname || '').toLowerCase().startsWith('/admin')
  if (isAdminPath) {
    return localStorage.getItem('token-admin') || ''
  }
  return localStorage.getItem('token') || ''
}

const startSessionHeartbeat = () => {
  if (typeof window === 'undefined') return
  const scope = window as any
  if (scope.__codexSessionHeartbeatStarted) return
  scope.__codexSessionHeartbeatStarted = true

  const checkSession = () => {
    try {
      const pathname = window.location.pathname || ''
      if (shouldSkipSessionHeartbeatPath(pathname)) return
      const token = getActiveAuthTokenForPath(pathname)
      if (!token || navigator.onLine === false) return
      api.get('user-info').catch(() => {})
    } catch {
      // no-op
    }
  }

  window.addEventListener('focus', () => setTimeout(checkSession, 150))
  window.addEventListener('online', () => setTimeout(checkSession, 150))
  setInterval(checkSession, 8000)
  setTimeout(checkSession, 1200)
}

startSessionHeartbeat()

export default api
