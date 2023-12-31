import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/Main'
import LimpezasPage from './pages/Main/Limpezas'
import HortifrutisPage from './pages/Main/Hortifrutis'
import PadariasPage from './pages/Main/Padarias'
import CarnesPage from './pages/Main/Carnes'
import HomePage from './pages/Main/HomePage/index'

import MyCartPage from './pages/MyCart'
import OrderSuccessPage from './pages/Orders/Success'
import PaymentPage from './pages/Payment'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'
import EditAccount from './pages/Account/EditAccount'
import Address from './pages/Account/Address'
import PrivateRoute from './components/PrivateRoute'
import AdminPanel from './pages/Admin'
import Products from './pages/Admin/Products'
import Orders from './pages/Admin/Orders'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainPage />}>
        <Route path='/' element={<HomePage />} />
        <Route path='limpezas' element={<LimpezasPage />} />
        <Route path='carnes' element={<CarnesPage />} />
        <Route path='hortifrutis' element={<HortifrutisPage />} />
        <Route path='padarias' element={<PadariasPage />} />
      </Route>
      <Route path='cart' element={<MyCartPage />} />
      <Route
        path='payment'
        element={
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        }
      />
      <Route path='order'>
        <Route
          path='success/:orderId'
          element={
            <PrivateRoute>
              <OrderSuccessPage />{' '}
            </PrivateRoute>
          }
        />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route
        path='account'
        element={
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        }
      />
      <Route
        path='editAccount'
        element={
          <PrivateRoute>
            <EditAccount />
          </PrivateRoute>
        }
      />
      <Route
        path='address'
        element={
          <PrivateRoute>
            <Address />
          </PrivateRoute>
        }
      />
      <Route path='admin' element={<AdminPanel />} />
      <Route path='admin/products' element={<Products />} />
      <Route path='admin/orders' element={<Orders />} />
    </Routes>
  )
}
