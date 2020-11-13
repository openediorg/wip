import React from '@components/OpenEDIIconHorizontal/node_modules/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core'

import { store } from './store'
import { theme } from './static/theme'

import WelcomePage from '@containers/WelcomePage/WelcomePage'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <WelcomePage />
      </ThemeProvider>
    </Provider>
  )
}

export default App
