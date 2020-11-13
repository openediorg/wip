import { IAssetPriceStore, sliceName } from '../reducers/price'
import { keySelectors, AnyProps } from './helpers'
import { assets } from '@web3/Contracts/Oracle/oracleAddresses'
import { createSelector } from '@reduxjs/toolkit'
import { BigNumber } from 'ethers'

const store = (s: AnyProps) => s[sliceName] as IAssetPriceStore

// This solution will scale into multiple Assets
export const { assetsPrices, initialized } = keySelectors(store, ['assetsPrices', 'initialized'])

export const BTC = createSelector(assetsPrices, prices => prices.BTC)
// We should export it in Number format instead of BigNumber it will save a lot of operation.
export const priceInBTC = (asset: assets) =>
  createSelector(assetsPrices, BTC, (prices, b) => {
    const currentAsset = prices[asset]
    if (!b.currentValue.isZero()) {
      // Prices from oracle are multiplied by 1000000
      const priceBTC = currentAsset.currentValue.div(b.currentValue.div(1000000))
      return priceBTC.toNumber() / 1000000
    } else {
      return 0
    }
  })

export const priceInUSD = (asset: assets) =>
  createSelector(assetsPrices, prices => {
    const currentAsset = prices[asset]
    return toUsd(currentAsset)
  })

// This is just helper not selector
export const toUsd = (asset: { currentValue: BigNumber, previousValue: BigNumber }) => {
  // Prices from oracle are multiplied by 100000000
  return {
    currentValue: asset.currentValue.toNumber() / 100000000,
    previousValue: asset.previousValue.toNumber() / 100000000
  }
}

export const toBtc = (
  asset: { currentValue: BigNumber, previousValue: BigNumber },
  priceBTC: { currentValue: BigNumber, previousValue: BigNumber }
) => {
  if (!priceBTC.currentValue.isZero() && !priceBTC.previousValue.isZero()) {
    // Prices from oracle are multiplied by 1000000
    const curPriceInBTC = asset.currentValue.div(priceBTC.currentValue.div(1000000))
    const prevPriceInBTC = asset.previousValue.div(priceBTC.previousValue.div(1000000))
    return {
      currentValue: curPriceInBTC.toNumber() / 1000000,
      previousValue: prevPriceInBTC.toNumber() / 1000000
    }
  } else {
    return {
      currentValue: 0,
      previousValue: 0
    }
  }
}

export const allPricesInUSD = createSelector(assetsPrices, prices => {
  const pricesInUsd = Object.entries(prices).map(([asset, values]) => {
    return {
      name: asset,
      price: toUsd(values)
    }
  })
  return pricesInUsd
})

export const allPricesInBTC = createSelector(assetsPrices, prices => {
  const pricesInBTC = Object.entries(prices).map(([asset, values]) => {
    return {
      name: asset,
      price: toBtc(values, prices.BTC)
    }
  })
  return pricesInBTC
})

export const allPrices = createSelector(allPricesInUSD, allPricesInBTC, (pricesUSD, pricesBTC) =>
  pricesUSD.map((value, index) => {
    return { name: value.name, priceUsd: value.price, priceBtc: pricesBTC[index].price }
  })
)

export const priceSelector = { assetsPrices, initialized, allPricesInUSD, allPricesInBTC, allPrices }

export default priceSelector
