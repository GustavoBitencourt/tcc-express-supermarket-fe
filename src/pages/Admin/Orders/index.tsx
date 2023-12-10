import React from 'react'
import { AdminContainer, TopBar } from './styles'
import Logo from '../../../assets/logo-admin.svg'
import OrderList from './orderList'

function Orders() {
  return (
    <AdminContainer>
      <TopBar>
        <img src={Logo} alt='Logo' />
        <div>
          <h2>Controle de Pedidos</h2>
        </div>
        <img src={Logo} alt='Logo' />
      </TopBar>

      <OrderList />

      <hr />
    </AdminContainer>
  )
}

export default Orders
