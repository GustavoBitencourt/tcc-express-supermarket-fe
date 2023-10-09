import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CartProvider } from './contexts/CartContext'
import { ProductProvider } from './contexts/ProductContext'
import { AppRoutes } from './routes'
import './styles/styles.css'

import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

export default function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
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
