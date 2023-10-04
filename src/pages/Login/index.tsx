import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <Form>
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
