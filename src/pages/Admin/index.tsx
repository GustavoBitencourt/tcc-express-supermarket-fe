import React, { useState } from 'react'
import { AdminContainer, AdminButton, TopBar, PasswordModal, LoginField } from './styles'
import Logo from '../../assets/logo-admin.svg'

function AdminPanel() {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [loginInput, setLoginInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
  }

  // const handleModalClose = () => {
  //   setIsModalOpen(false)
  // }

  const handlePasswordSubmit = () => {
    if (loginInput === 'admin' && passwordInput === 'adminexpress') {
      setIsPasswordCorrect(true)
      setIsModalOpen(false)
    } else {
      alert('Login ou senha incorretos. Acesso negado.')
      setPasswordInput('')
    }
  }

  return (
    <AdminContainer>
      <TopBar>
        <img src={Logo} alt='Logo' />
        <div>
          <h2>Painel Administrativo</h2>
        </div>
        <img src={Logo} alt='Logo' />
      </TopBar>
      {!isPasswordCorrect && (
        <>
          {isModalOpen && (
            <PasswordModal>
              <LoginField>
                <p className='panelText'>Painel Administrativo</p>
                <label htmlFor='login'>Login:</label>
                <input
                  type='text'
                  id='login'
                  value={loginInput}
                  onChange={handleLoginChange}
                  placeholder='Digite o login'
                />
              </LoginField>
              <LoginField>
                <label htmlFor='password'>Senha:</label>
                <input
                  type='password'
                  id='password'
                  value={passwordInput}
                  onChange={handlePasswordChange}
                  placeholder='Digite a senha'
                />
              </LoginField>
              <button type='button' onClick={handlePasswordSubmit}>
                Acessar
              </button>
            </PasswordModal>
          )}
        </>
      )}
      {isPasswordCorrect && (
        <>
          <AdminButton to='/admin/orders'>Pedidos</AdminButton>
          <AdminButton to='/admin/products'>Produtos</AdminButton>
          <AdminButton to='#'>Clientes</AdminButton>
        </>
      )}
    </AdminContainer>
  )
}

export default AdminPanel
