import React from 'react'
import { storiesOf } from '@storybook/react'
import OpenEDIIconHorizontal from './OpenEDIIconHorizontal'
import { withKnobs } from '@storybook/addon-knobs'
storiesOf('Icons/OpenEDIIconHorizontal', module)
  .addDecorator(withKnobs)
  .add('default', () => <OpenEDIIconHorizontal />)
