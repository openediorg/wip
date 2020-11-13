import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PayloadType } from './types'
export enum Status {
  Uninitialized = 'uninitialized',
  Init = 'init',
  Error = 'error',
  Initalized = 'initalized'
}
export interface IProviderStore {
  status: Status
  message: string
}

export const defaultState: IProviderStore = {
  status: Status.Uninitialized,
  message: ''
}
export const sliceName = 'provider'
const providerSlice = createSlice({
  name: sliceName,
  initialState: defaultState,
  reducers: {
    initProvider(state) {
      state.status = Status.Init
      return state
    },
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload
      return state
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload
      return state
    }
  }
})

export const actions = providerSlice.actions
export const reducer = providerSlice.reducer
export type PayloadTypes = PayloadType<typeof actions>
