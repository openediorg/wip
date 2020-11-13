import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { Button, PropTypes } from '@material-ui/core'
import classNames from '@components/OpenEDIIconHorizontal/node_modules/classnames'
import useStyles from './style'

export interface IProps {
  name: string
  onClick: () => void
  className?: string
  color?: PropTypes.Color
}
export const CommonButton: React.FC<IProps> = ({ name, onClick, className, color = 'primary' }) => {
  const classes = useStyles()
  return (
    <Button
      className={classNames(className, { [classes.button]: !className })}
      color={color}
      variant='outlined'
      onClick={onClick}>
      {name}
    </Button>
  )
}
export default CommonButton
