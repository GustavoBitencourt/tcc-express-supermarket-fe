import React from 'react'
import { Link } from 'react-router-dom'
import { AdminContainer, TopBar, AdminTextContainer, AdminTitle, ProductControl } from './styles'
import Logo from '../../../assets/logo-admin.svg'
import MenuIcon from '../../../assets/menu-admin-icon.svg'
import LogoutIcon from '../../../assets/logout-admin-icon.svg'
import ProductList from './productList'

function Products() {
  return (
    <AdminContainer>
      <TopBar>
        <Link to='/admin/menu'>
          <img src={MenuIcon} alt='Menu Icon' />
        </Link>
        <AdminTextContainer>
          <img src={Logo} alt='Logo Admin' />
          <AdminTitle>Painel Administrativo</AdminTitle>
          <ProductControl>&gt; Controle de produtos</ProductControl>
        </AdminTextContainer>
        <Link to='/admin'>
          <img src={LogoutIcon} alt='Logout Icon' />
        </Link>
      </TopBar>

      <ProductList />

      <hr />
    </AdminContainer>
  )
}

export default Products
