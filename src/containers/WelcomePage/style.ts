import { makeStyles, createStyles } from '@components/OpenEDIIconHorizontal/node_modules/@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      minHeight: '100vh',
      position: 'relative',
      background: '#030313',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  })
)
export default useStyles
