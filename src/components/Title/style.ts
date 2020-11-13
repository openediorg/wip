import { makeStyles } from '@components/OpenEDIIconHorizontal/node_modules/@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 'bold',
    color: colors.white.main,
    marginRight: 10
  },
  titleAccent: {
    fontWeight: 'bold',
    color: colors.green.main
  }
}))

export default useStyles
