import React, { useState } from 'react'
import {
  AdminContainer,
  AdminButton,
  TopBar,
  AdminButtonContainer,
  AdminButtonAccess,
} from './styles'
import Logo from '../../assets/logo-admin.svg'

function AdminPanel() {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)

  const checkPassword = () => {
    const enteredPassword = prompt('Digite a senha:')

    if (enteredPassword === 'adminexpress') {
      setIsPasswordCorrect(true)
    } else {
      alert('Senha incorreta. Acesso negado.')
    }
  }

  return (
    <>
      {!isPasswordCorrect && (
        <AdminButtonContainer>
          <AdminButtonAccess onClick={checkPassword}>Acesso Administrador</AdminButtonAccess>
        </AdminButtonContainer>
      )}
      {isPasswordCorrect && (
        <AdminContainer>
          <TopBar>
            <img src={Logo} alt='Logo' />
            <div>
              <h2>Painel Administrativo</h2>
            </div>
            <img src={Logo} alt='Logo' />
          </TopBar>
          <AdminButton to='/admin/orders'>Pedidos</AdminButton>
          <AdminButton to='/admin/products'>Produtos</AdminButton>
          <AdminButton to='#'>Clientes</AdminButton>
        </AdminContainer>
      )}
    </>
  )
}

export default AdminPanel
