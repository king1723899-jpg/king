import { RootState } from '../../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getSportListAction, getFilteredSportListAction } from './sport.action'
import ISport from '../../../models/ISport'
import IMatch from '../../../models/IMatch'
import { IApiStatus } from '../../../models/IApiStatus'

export type SportState = {
  sportsList: { sports: ISport[]; status: string; error: any }
  filteredSportsList: { sports: ISport[]; status: string; error: any }
  currentMatch: IMatch
}

const initialState: SportState = {
  sportsList: {
    sports: [],
    status: '',
    error: '',
  },
  filteredSportsList: {
    sports: [],
    status: '',
    error: '',
  },
  currentMatch: {} as IMatch,
}

const sportSlice = createSlice({
  name: 'sport',
  initialState,
  reducers: {
    setCurrentMatch: (state, action: PayloadAction<IMatch>) => {
      state.currentMatch = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSportListAction.pending, (state) => {
        state.sportsList.status = IApiStatus.Loading
      })
      .addCase(getSportListAction.fulfilled, (state, action) => {
        state.sportsList.sports = action.payload
        state.sportsList.error = ''
        state.sportsList.status = IApiStatus.Done
      })
      .addCase(getSportListAction.rejected, (state, action) => {
        state.sportsList.error = action.payload
        state.sportsList.status = IApiStatus.Fail
      })
      .addCase(getFilteredSportListAction.pending, (state) => {
        state.filteredSportsList.status = IApiStatus.Loading
      })
      .addCase(getFilteredSportListAction.fulfilled, (state, action) => {
        state.filteredSportsList.sports = action.payload
        state.filteredSportsList.error = ''
        state.filteredSportsList.status = IApiStatus.Done
      })
      .addCase(getFilteredSportListAction.rejected, (state, action) => {
        state.filteredSportsList.error = action.payload
        state.filteredSportsList.status = IApiStatus.Fail
      })
  },
})

export const { setCurrentMatch } = sportSlice.actions

export const selectSportList = (state: RootState) => state.sportReducer.sportsList

export const selectFilteredSportList = (state: RootState) => state.sportReducer.filteredSportsList

export const selectCurrentMatch = (state: RootState) => state.sportReducer.currentMatch

export default sportSlice
