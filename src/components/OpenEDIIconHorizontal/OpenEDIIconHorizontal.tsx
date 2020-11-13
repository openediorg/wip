import React from 'react'
import classNames from 'classnames'

import Logo from '../../static/svg/horizontal_green_white.svg'
import useStyles from './style'
export const OpenEDIIconHorizontal: React.FC<{ className?: string, onClick?: () => void }> = ({
  className,
  onClick
}) => {
  const classes = useStyles()
  // TODO split into separate
  return (
    <img
      onClick={onClick}
      src={Logo}
      alt='OpenEDI Logo'
      className={classNames(className, { [classes.iconRoot]: !className })}
    />
  )
}
export default OpenEDIIconHorizontal
