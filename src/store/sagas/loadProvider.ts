import { call, put, takeLeading } from 'typed-redux-saga'

import { actions, Status } from '@reducers/provider'
import { getProvider } from '@web3/access'
import { actions as priceActions } from '@reducers/price'

export function* initProvider(): Generator {
  if (!window.ethereum) {
    console.log('error install metamask of browser with metamask support')
    yield put(actions.setStatus(Status.Error))
    yield put(actions.setMessage('To access this page you need MetaMask extension'))
    return
  }
  const response = yield* call(getProvider)

  // This does not work why ? We have to write wrappers functions to use them in sagas for web3
  // const address = yield* call(response.getAddress)
  // console.log(address)
  if (response.network.chainId === 1) {
    // initialize asset prices
    yield put(priceActions.initializePrices())
    yield put(actions.setStatus(Status.Initalized))
  } else {
    yield put(actions.setStatus(Status.Initalized))
    yield put(actions.setMessage(`You are on ${response.network.name} testnet.`))
    yield put(priceActions.initializePrices())
  }
}

export function* providerSaga(): Generator {
  yield takeLeading(actions.initProvider, initProvider)
}
