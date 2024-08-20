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
import ShippingPage from './pages/Shipping'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'
import EditAccount from './pages/Account/EditAccount'
import MyOrders from './pages/MyOrders'
import Address from './pages/Account/Address'
import PrivateRoute from './components/PrivateRoute'
import AdminPanel from './pages/Admin'
import AdminMenu from './pages/Admin/Menu'
import Products from './pages/Admin/Products'
import Customers from './pages/Admin/Customers'
import ForgotPassword from './pages/Account/ForgotPassword'
import Orders from './pages/Admin/Orders'
import ResetPassword from './pages/Account/ForgotPassword/ResetPassword'
import ProductDetail from './pages/ProductDetail'
import SearchBarcode from './pages/SearchBarcode'
import Search from './pages/Search'

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
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/myOrders' element={<MyOrders />} />
      <Route path='/search' element={<Search />} />
      <Route path='/searchBarCode' element={<SearchBarcode />} />
      <Route path='cart' element={<MyCartPage />} />
      <Route
        path='shipping'
        element={
          <PrivateRoute>
            <ShippingPage />
          </PrivateRoute>
        }
      />
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
      <Route path='forgotPassword' element={<ForgotPassword />} />
      <Route path='resetPassword' element={<ResetPassword />} />
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
      <Route path='admin/menu' element={<AdminMenu />} />
      <Route path='admin/products' element={<Products />} />
      <Route path='admin/customers' element={<Customers />} />
      <Route path='admin/orders' element={<Orders />} />
    </Routes>
  )
}
