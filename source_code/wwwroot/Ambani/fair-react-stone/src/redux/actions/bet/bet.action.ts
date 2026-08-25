import { createAsyncThunk } from '@reduxjs/toolkit'
import IBet from '../../../models/IBet'
import betService from '../../../services/bet.service'
import { setExposer } from '../balance/balanceSlice'
import { setbetlist, setBookMarketList } from './betSlice'
import { toast } from 'react-toastify'

export const getPlaceBetAction = createAsyncThunk(
  'bet/placebet',
  async (data: IBet, { rejectWithValue, dispatch }) => {
    return betService
      .getPlaceBet(data)
      .then((res) => {
        // ✅ ENHANCED: Add comprehensive error checking and logging
        console.log('🎯 Bet placement response:', {
          status: res.status,
          data: res.data,
          hasData: !!res.data?.data,
          hasExposer: !!res.data?.data?.exposer,
          hasProfitlist: !!res.data?.data?.profitlist,
          hasBet: !!res.data?.data?.bet
        })
        
        // Check if response indicates an error
        if (res.data?.error === true) {
          throw new Error(res.data?.message || 'Bet placement failed on server')
        }
        
        try {
          // Update exposure first
          if (res.data?.data?.exposer !== undefined) {
            console.log('🎯 EXPOSURE UPDATE:')
            console.log('  - Previous exposure (if any): unknown') 
            console.log('  - New exposure value:', res.data.data.exposer)
            console.log('  - Exposure type:', typeof res.data.data.exposer)
            
            dispatch(setExposer(res.data.data.exposer))
            console.log('✅ Exposure dispatched to Redux store:', res.data.data.exposer)
          } else {
            console.log('⚠️ NO EXPOSURE IN RESPONSE - Exposure field:', res.data?.data?.exposer)
          }
          
          // Update profit list with proper merging - this ensures fancy bet profits persist
          if (res.data?.data?.profitlist) {
            console.log('🎯 PROFITLIST RECEIVED:')
            console.log('  - Type:', typeof res.data.data.profitlist)
            console.log('  - Keys:', Object.keys(res.data.data.profitlist))
            console.log('  - Content:', res.data.data.profitlist)
            console.log('  - Market keys for bookmaker 6247246525727:', Object.keys(res.data.data.profitlist).filter(k => k.includes('6247246525727')))
            
            dispatch(setBookMarketList(res.data.data.profitlist))
            console.log('✅ Profit list dispatched to Redux store')
            console.log('✅ Profit list updated:', Object.keys(res.data.data.profitlist).length, 'items')
          } else {
            console.log('⚠️ NO PROFITLIST IN RESPONSE - Response structure:')
            console.log('  - res.data:', res.data)
            console.log('  - res.data.data:', res.data?.data)
            console.log('  - Available keys in data:', res.data?.data ? Object.keys(res.data.data) : 'No data object')
          }
          
          // Update bet list
          if (res.data?.data?.bet) {
            dispatch(setbetlist(res.data.data.bet))
            console.log('✅ Bet list updated')
          }
          
          toast.success('Bet Placed Successfully')
          return res.data?.data?.bet || {}
          
        } catch (processingError) {
          console.error('❌ Error processing successful bet response:', processingError)
          // Even if processing fails, bet was placed successfully on backend
          toast.success('Bet Placed Successfully (refresh to see updates)')
          return res.data?.data?.bet || {}
        }
      })
      .catch((e) => {
        console.error('❌ Bet placement error:', {
          status: e.response?.status,
          statusText: e.response?.statusText,
          data: e.response?.data,
          message: e.response?.data?.message,
          error: e.message
        })
        
        const errorMessage = e.response?.data?.message || e.message || 'Bet placement failed'
        toast.error(errorMessage)
        return rejectWithValue(errorMessage)
      })
  },
)
