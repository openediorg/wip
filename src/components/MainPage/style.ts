import { makeStyles } from '@components/OpenEDIIconHorizontal/node_modules/@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 30,
    maxWidth: 1360,
    paddingBottom: 140,
    paddingLeft: 40,
    paddingRight: 40
  },
  logo: {
    height: 36,
    cursor: 'pointer'

  },
  titleTop: {
    marginTop: 80
  },
  textWrapper: {
    marginTop: 20,
    marginBottom: 120,
    color: colors.white.main
  },
  cardsRow: {
    paddingTop: 80
  }
}))

export default useStyles
