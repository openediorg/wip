import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { Typography, Grid } from '@material-ui/core'
import useStyles from './style'

export const Title: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container direction='row'>
      <Grid item>
        <Typography variant='h2' className={classes.title}>
          Decentralized
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h2' className={classes.titleAccent}>
          Price Reference
        </Typography>
      </Grid>
    </Grid>
  )
}
export default Title
