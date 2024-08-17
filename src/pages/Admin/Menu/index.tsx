import React from 'react'
import {
  HeaderContainer,
  PurchasesButtonStyled,
  ProductsButtonStyled,
  CustomersButtonStyled,
  ButtonsContainer,
} from './styles'
import { ReactComponent as PurchasesButton } from '../../../assets/purchases-button.svg'
import { ReactComponent as ProductsButton } from '../../../assets/products-button.svg'
import { ReactComponent as CustomersButton } from '../../../assets/customers-button.svg'
import { ReactComponent as Logo } from '../../../assets/logo-admin.svg'
import { ReactComponent as LogoutButton } from '../../../assets/logout-admin.svg'
import { useNavigate } from 'react-router-dom'

function AdminMenu() {
  const navigate = useNavigate()

  return (
    <>
      <HeaderContainer>
        <Logo />
        <h1>Painel Administrativo</h1>
        <LogoutButton onClick={() => navigate('/admin')} />
      </HeaderContainer>
      <ButtonsContainer>
        <PurchasesButtonStyled to='/admin/orders'>
          <PurchasesButton />
        </PurchasesButtonStyled>
        <ProductsButtonStyled to='/admin/products'>
          <ProductsButton />
        </ProductsButtonStyled>
        <CustomersButtonStyled to='#'>
          <CustomersButton />
        </CustomersButtonStyled>
      </ButtonsContainer>
    </>
  )
}

export default AdminMenu
