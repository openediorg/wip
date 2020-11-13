import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { storiesOf } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/react'
import CommonButton from './CommonButton'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/addon-knobs'
storiesOf('buttons/CommonButton', module)
  .addDecorator(withKnobs)
  .add('default', () => <CommonButton name='Read litepaper' onClick={action('clicked')} />)
