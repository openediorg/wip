import { combineReducers } from 'redux'
import { reducer as providerReducer } from './provider'
import { reducer as assetPriceReducer } from './price'

const combinedReducers = combineReducers({
  provider: providerReducer,
  assetPrice: assetPriceReducer
})
export default combinedReducers
