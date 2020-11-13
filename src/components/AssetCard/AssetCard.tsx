/* eslint-disable @typescript-eslint/no-var-requires */
import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { Grid, Typography } from '@material-ui/core'
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDown'
import Skeleton from '@material-ui/lab/Skeleton'
import useStyles from './style'
export interface IProps {
  title: string
  currentPrice: number
  previousPrice: number
  currentPriceBTC: number
  initialized: boolean
}
// This should use number i changed my mind
export const AssetCard: React.FC<IProps> = ({
  title,
  currentPrice,
  previousPrice,
  currentPriceBTC,
  initialized
}) => {
  const classes = useStyles()
  const [icon, setIcon] = React.useState(require('cryptocurrency-icons/svg/color/generic.svg'))
  const trendingDown = currentPrice < previousPrice
  React.useEffect(() => {
    import(`cryptocurrency-icons/svg/color/${title.toLocaleLowerCase()}.svg`)
      .then(image => {
        setIcon(image.default)
      })
      .catch(() => {
        setIcon(require('cryptocurrency-icons/svg/color/generic.svg'))
      })
  }, [])
  return (
    <Grid>
      {initialized ? (
        <>
          <Grid container direction='column' className={classes.root}>
            <Grid item>
              <Grid container alignItems='center' justify='center'>
                <Grid item className={classes.assetIcon}>
                  {icon && <img src={icon} alt='' />}
                </Grid>
                <Grid item>
                  <Typography variant='body1' className={classes.title}>
                    {title}
                  </Typography>
                </Grid>
                <Grid item className={classes.arrowWrapper}>
                  <ArrowDropDownSharpIcon
                    className={trendingDown ? classes.trendDown : classes.trendUp}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.spacing30}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant='body2' className={classes.text}>
                    USD {currentPrice.toFixed(4).toString()}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body2' className={classes.text}>
                    BTC {currentPriceBTC.toString()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={trendingDown ? classes.markerDown : classes.marker} />
        </>
      ) : (
        <>
          <Grid container direction='column' className={classes.skeletonRoot}>
            <Grid item>
              <Grid container alignItems='center' justify='center'>
                <Grid item>
                  <Skeleton className={classes.skeletonTitle} variant='text' />
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.skeletonPrices}>
              <Grid container direction='column'>
                <Grid item>
                  <Skeleton className={classes.skeletonTitle} variant='text' />
                </Grid>
                <Grid item>
                  <Skeleton className={classes.skeletonTitle} variant='text' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Skeleton className={classes.skeletonMarker} variant='rect' />
        </>
      )}
    </Grid>
  )
}
export default AssetCard
