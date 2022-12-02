import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '~/styles/themes/default'
import { GlobalStyle } from '~/styles/global'
import { CoffeeContextProvider } from '~/contexts/CoffeeContext'
import { Router } from '~/Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
