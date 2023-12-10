import React from 'react'
import { Link } from 'react-router-dom'
import { AdminContainer, TopBar } from './styles'
import Logo from '../../../assets/logo-admin.svg'
import OrderList from './orderList'

function Orders() {
  return (
    <AdminContainer>
      <TopBar>
        <Link to='/admin'>
          <img src={Logo} alt='Logo' />
        </Link>
        <div>
          <h2>Controle de Pedidos</h2>
        </div>
        <Link to='/admin'>
          <img src={Logo} alt='Logo' />
        </Link>
      </TopBar>

      <OrderList />

      <hr />
    </AdminContainer>
  )
}

export default Orders
