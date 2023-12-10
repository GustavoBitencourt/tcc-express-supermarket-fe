import React, { useState } from 'react'
import {
  AdminContainer,
  AdminButton,
  TopBar,
  AdminButtonContainer,
  AdminButtonAccess,
  PasswordModal,
} from './styles'
import Logo from '../../assets/logo-admin.svg'

function AdminPanel() {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')

  const checkPassword = () => {
    setIsModalOpen(true)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handlePasswordSubmit = () => {
    if (passwordInput === 'adminexpress') {
      setIsPasswordCorrect(true)
      setIsModalOpen(false)
    } else {
      alert('Senha incorreta. Acesso negado.')
      setPasswordInput('')
    }
  }

  return (
    <>
      {!isPasswordCorrect && (
        <>
          <AdminButtonContainer>
            <AdminButtonAccess onClick={checkPassword}>Acesso Administrador</AdminButtonAccess>
          </AdminButtonContainer>
          {isModalOpen && (
            <PasswordModal>
              <label htmlFor='password'>Digite a senha:</label>
              <input
                type='password'
                id='password'
                value={passwordInput}
                onChange={handlePasswordChange}
                placeholder='Senha'
              />
              <button type='button' onClick={handlePasswordSubmit}>
                Confirmar
              </button>
              <button type='button' onClick={handleModalClose} className='cancelButton'>
                Cancelar
              </button>
            </PasswordModal>
          )}
        </>
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
