import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import Grid from '@material-ui/core/Grid'

import MainPage from '@components/MainPage/MainPage'
import InfoBar from '@components/InfoBar/InfoBar'
import useStyles from './style'
import { useSelector } from 'react-redux'
import providerSelectors from '@selectors/providers'

const WelcomePage: React.FC = () => {
  const classes = useStyles()
  const initialized = useSelector(providerSelectors.status)
  const message = useSelector(providerSelectors.message)
  return (
    <Grid className={classes.background}>
      <InfoBar message={message} initialized={initialized} />
      <MainPage />
    </Grid>
  )
}

export default WelcomePage
