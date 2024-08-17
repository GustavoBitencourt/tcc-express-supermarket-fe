import React from 'react'
import { Link } from 'react-router-dom'
import { AdminContainer, TopBar, AdminTextContainer, AdminTitle, OrderControl } from './styles'
import Logo from '../../../assets/logo-admin.svg'
import MenuIcon from '../../../assets/menu-admin-icon.svg'
import LogoutIcon from '../../../assets/logout-admin-icon.svg'
import OrderList from './orderList'

function Orders() {
  return (
    <AdminContainer>
      <TopBar>
        <Link to='/admin'>
          <img src={MenuIcon} alt='Menu Icon' />
        </Link>
        <AdminTextContainer>
          <img src={Logo} alt='Logo Admin' />
          <AdminTitle>Painel Administrativo</AdminTitle>
          <OrderControl>&gt; Controle de pedidos</OrderControl>
        </AdminTextContainer>
        <Link to='/admin/logout'>
          <img src={LogoutIcon} alt='Logout Icon' />
        </Link>
      </TopBar>

      <OrderList />

      <hr />
    </AdminContainer>
  )
}

export default Orders
