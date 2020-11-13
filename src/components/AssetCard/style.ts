import { makeStyles, Theme } from '@components/OpenEDIIconHorizontal/node_modules/@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 180,
    width: 220,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: colors.white.main,
    borderRadius: '10px 10px 0px 0px'
  },
  trendUp: {
    width: 44,
    height: 44,
    marginRight: -5,
    transform: 'rotate(-180deg)',
    color: colors.green.main
  },
  trendDown: {
    width: 44,
    height: 44,
    marginRight: -5,
    color: colors.red.main
  },
  arrowWrapper: {
    maxWidth: 44,
    maxHeight: 44
  },
  title: {
    fontWeight: 'bold',
    color: colors.blue.accent
  },
  text: {
    color: colors.black.background,
    paddingBottom: 10
  },
  marker: {
    height: 10,
    width: 220,
    marginTop: -10,
    backgroundColor: theme.palette.primary.main
  },
  markerDown: {
    height: 10,
    width: 220,
    marginTop: -10,
    backgroundColor: colors.red.main
  },
  skeletonTitle: {
    backgroundColor: colors.gray.skeletonField,
    borderRadius: 10,
    width: 150,
    height: 30
  },
  skeletonRoot: {
    height: 180,
    width: 220,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: colors.gray.skeletonBackground,
    borderRadius: '10px 10px 0px 0px'
  },
  skeletonPrices: {
    marginTop: 30
  },
  skeletonMarker: {
    height: 10,
    width: 220,
    marginTop: -10,
    backgroundColor: colors.gray.skeletonField
  },
  spacing30: {
    marginTop: 20
  },
  assetIcon: {
    marginRight: 8,
    width: 32,
    height: 32
  }
}))

export default useStyles
