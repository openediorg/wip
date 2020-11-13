import { BigNumber } from 'ethers'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { assets } from '@web3/Contracts/Oracle/oracleAddresses'
import { PayloadType } from './types'

export type IPriceStore = {
  [key in assets]: { currentValue: BigNumber, previousValue: BigNumber }
}
export interface IAssetPriceStore {
  initialized: boolean
  assetsPrices: IPriceStore
}

const defaultStatus: IAssetPriceStore = {
  assetsPrices: Object.fromEntries(
    Object.entries(assets).map(([asset, _]) => [
      asset,
      { currentValue: BigNumber.from(0), previousValue: BigNumber.from(0) }
    ])
  ) as IPriceStore,
  initialized: false
}

export const sliceName = 'assetPrice'
const priceSlice = createSlice({
  name: sliceName,
  initialState: defaultStatus,
  reducers: {
    setValue(state, action: PayloadAction<{ asset: assets, value: BigNumber }>) {
      state.assetsPrices[action.payload.asset].currentValue = action.payload.value
      return state
    },
    setPreviousValue(state, action: PayloadAction<{ asset: assets, value: BigNumber }>) {
      state.assetsPrices[action.payload.asset].previousValue = action.payload.value
      return state
    },
    initializePrices(state) {
      return state
    },
    setInitialized(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload
      return state
    }
  }
})

export const actions = priceSlice.actions
export const reducer = priceSlice.reducer
export type PayloadTypes = PayloadType<typeof actions>
