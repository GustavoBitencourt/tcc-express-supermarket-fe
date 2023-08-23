import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CartProvider } from './contexts/CartContext'
import { ProductProvider } from './contexts/ProductContext'
import { AppRoutes } from './routes'

import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <ProductProvider>
          <CartProvider>
            <AppRoutes />
            <ToastContainer autoClose={2000} />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </ProductProvider>
      </Theme>
    </BrowserRouter>
  )
}
