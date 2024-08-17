import React, { useState } from 'react'
import { AdminContainer, PasswordModal, LoginField, LogoImage } from './styles'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo-admin.svg'

function AdminPanel() {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [loginInput, setLoginInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const navigate = useNavigate()

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
  }

  const handlePasswordSubmit = () => {
    if (loginInput === 'admin' && passwordInput === 'adminexpress') {
      setIsPasswordCorrect(true)
      setIsModalOpen(false)
      navigate('/admin/menu')
    } else {
      alert('Login ou senha incorretos. Acesso negado.')
      setPasswordInput('')
    }
  }

  return (
    <AdminContainer>
      {!isPasswordCorrect && (
        <>
          {isModalOpen && (
            <PasswordModal>
              <LogoImage src={Logo} alt='Logo' />
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
    </AdminContainer>
  )
}

export default AdminPanel
