import { all, spawn } from 'redux-saga/effects'
import { providerSaga } from './loadProvider'
import { assetPriceSaga } from './price'

export function* rootSaga(): Generator {
  yield all([providerSaga, assetPriceSaga].map(spawn))
}
export default rootSaga
