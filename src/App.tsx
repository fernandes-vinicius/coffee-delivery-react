import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '~/styles/themes/default'
import { GlobalStyle } from '~/styles/global'
import { CartProvider } from '~/contexts/CartContext'
import { Router } from '~/Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
