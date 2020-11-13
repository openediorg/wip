import { call, takeLeading, put, all } from 'typed-redux-saga'

import { actions } from '@reducers/price'
import { OracleProvider } from '@web3/Contracts/Oracle'
import { assets } from '@web3/Contracts/Oracle/oracleAddresses'

function* getAssetPrice(oracleProvider: OracleProvider, asset: assets): Generator {
  const result = yield* call(oracleProvider.getLatestPrice, asset)
  yield put(actions.setValue({ asset: asset, value: result }))
}
function* getPreviousAssetPrice(oracleProvider: OracleProvider, asset: assets): Generator {
  const result = yield* call(oracleProvider.getPreviousPrice, asset)
  yield put(actions.setPreviousValue({ asset: asset, value: result }))
}

function* getPrices(): Generator {
  const oracleProvider = yield* call(OracleProvider.getInstance)
  const getAssetPrices = Object.keys(assets).map(asset =>
    call(getAssetPrice, oracleProvider, asset as assets)
  )
  const getPreviousAssetPrices = Object.keys(assets).map(asset =>
    call(getPreviousAssetPrice, oracleProvider, asset as assets)
  )
  yield all(getAssetPrices.concat(getPreviousAssetPrices))
  yield put(actions.setInitialized(true))
}

export function* assetPriceSaga(): Generator {
  yield takeLeading(actions.initializePrices, getPrices)
}
