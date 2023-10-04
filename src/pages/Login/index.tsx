import React from 'react'
import { Link } from 'react-router-dom' // Importe o Link
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
            <Input type='email' id='email' name='email' />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='password'>Senha</Label>
            <Input type='password' id='password' name='password' />
          </FormGroup>
          <ForgotPasswordLink to='/forgot-password'>Esqueceu a senha?</ForgotPasswordLink>
          <SubmitButton type='submit'>Entrar</SubmitButton>
        </Form>
      </FormWrapper>
      <NotAccountText>
        Não possui conta? <RegisterText to='/signup'>Cadastre-se</RegisterText>
      </NotAccountText>
    </LoginContainer>
  )
}

export default Login
