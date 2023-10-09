import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
import { toast } from 'react-toastify'
import {
  LoginContainer,
  Form,
  FormWrapper,
  FormGroup,
  Label,
  Input,
  ForgotPasswordLink,
  SubmitButton,
  NotAccountText,
  RegisterText,
  GreenBackground,
  LogoSvgLogin,
} from './styles'
import { ReactComponent as LogoSvg } from '../../assets/logo.svg'
import { ReactComponent as CloseIcon } from '../../assets/close.svg'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    checkFormValidity(e.target.value, password)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    checkFormValidity(email, e.target.value)
  }

  const checkFormValidity = (emailValue: string, passwordValue: string) => {
    if (emailValue.trim() !== '' && passwordValue.trim() !== '') {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.post('/auth/login', {
        email,
        password,
      })

      // Se o login for bem-sucedido, armazena o token, id e name no localStorage
      const { token, id, name } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('id', id)
      localStorage.setItem('name', name)

      navigate('/')
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      const errorMessage = 'Credenciais inválidas. Por favor, tente novamente.'

      toast.error(errorMessage)
    }
  }

  return (
    <LoginContainer>
      <GreenBackground />
      <Link to='/' className='close-button'>
        <CloseIcon />
      </Link>
      <LogoSvgLogin>
        <LogoSvg />
      </LogoSvgLogin>
      <FormWrapper>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Label htmlFor='email'>E-mail</Label>
            <Input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='password'>Senha</Label>
            <Input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </FormGroup>
          <ForgotPasswordLink to='/forgot-password'>Esqueceu a senha?</ForgotPasswordLink>
          <SubmitButton
            type='submit'
            style={{ backgroundColor: isFormValid ? '#56BA50' : '#ABABAB' }}
            disabled={!isFormValid}
          >
            Entrar
          </SubmitButton>
        </Form>
      </FormWrapper>
      <NotAccountText>
        Não possui conta? <RegisterText to='/register'>Cadastre-se</RegisterText>
      </NotAccountText>
    </LoginContainer>
  )
}

export default Login
