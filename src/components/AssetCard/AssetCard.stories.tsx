import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { storiesOf } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/react'
import AssetCard from './AssetCard'
import { withKnobs } from '@components/OpenEDIIconHorizontal/node_modules/@storybook/addon-knobs'
storiesOf('cards/AssetCard', module)
  .addDecorator(withKnobs)
  .add('trendingUp', () => (
    <AssetCard
      title='ETH'
      currentPrice={120}
      previousPrice={110}
      currentPriceBTC={0.8}
      initialized={true}
    />
  ))
  .add('trendingDown', () => (
    <AssetCard
      title='ADA'
      currentPrice={120}
      previousPrice={130}
      currentPriceBTC={0.8}
      initialized={true}
    />
  ))
  .add('notInitialized', () => (
    <AssetCard
      title='ADA'
      currentPrice={120}
      previousPrice={130}
      currentPriceBTC={0.8}
      initialized={false}
    />
  ))
