import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { storiesOf } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/react'
import InfoBar from './InfoBar'
import { withKnobs } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/addon-knobs'
storiesOf('Bars/InfoBar', module)
  .addDecorator(withKnobs)
  .add('default', () => <InfoBar message='To access this page you need MetaMask extension' />)
