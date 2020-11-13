import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { Typography, Grid } from '@material-ui/core'
// You should use aliases for imports aka @components
import OpenEDIIconHorizontal from '../OpenEDIIconHorizontal/OpenEDIIconHorizontal'
import Title from '../Title/Title'
import AssetCardsWrapper from '@containers/AssetCardsWrapper/AssetCardsWrapper'
import useStyles from './style'

export const MainPage: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container justify='center'>
      <Grid container className={classes.root} direction='column'>
        <Grid item>
          <OpenEDIIconHorizontal
            className={classes.logo}
            // not perfect but its small project
            onClick={() => window.open('https://openedi.org')}
          />
        </Grid>
        <Grid item className={classes.titleTop}>
          <Title />
        </Grid>
        <Grid item className={classes.textWrapper}>
          <Typography variant='body1'>
            To ensure security and validity of operations of our protocol, OpenEDI uses multiple
            decentralized price oracles provided by Chainlink and maintained by community.
          </Typography>
        </Grid>
        <Grid item>
          <AssetCardsWrapper />
        </Grid>
      </Grid>
    </Grid>
  )
}
export default MainPage
