import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { storiesOf } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/react'
import Title from './Title'
import { withKnobs } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/addon-knobs'
storiesOf('text/Title', module)
  .addDecorator(withKnobs)
  .add('default', () => <Title />)
