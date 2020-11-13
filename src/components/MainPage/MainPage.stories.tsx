import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { storiesOf } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/react'
import MainPage from './MainPage'
import { withKnobs } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/addon-knobs'
storiesOf('pages/MainPage', module)
  .addDecorator(withKnobs)
  .add('default', () => <MainPage />)
