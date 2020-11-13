import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { Grid } from '@material-ui/core'
import PricesSelectors from '@selectors/price'
import { actions } from '@reducers/provider'
import { useSelector, useDispatch } from 'react-redux'
import AssetCard from '@components/AssetCard/AssetCard'
import useStyles from './style'

export interface IProps {
  title?: string
}
export const AssetCardsWrapper: React.FC<IProps> = () => {
  const classes = useStyles()
  // Added for testing
  // Create container for production and pass prices using props
  const assetsPrices = useSelector(PricesSelectors.allPrices)
  const initializedPrices = useSelector(PricesSelectors.initialized)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(actions.initProvider())
  }, [dispatch])
  return (
    <Grid container justify='center'>
      <Grid container justify='center' className={classes.root} spacing={4}>
        {assetsPrices.map(asset => {
          return (
            <Grid item>
              <AssetCard
                title={asset.name}
                currentPrice={asset.priceUsd.currentValue}
                previousPrice={asset.priceUsd.previousValue}
                currentPriceBTC={asset.priceBtc.currentValue}
                initialized={initializedPrices}
              />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
export default AssetCardsWrapper
