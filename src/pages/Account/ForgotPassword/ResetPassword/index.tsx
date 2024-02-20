import React, { useState, FormEvent } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import {
  ForgotContainer,
  Form,
  FormWrapper,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  GreenBackground,
  LogoSvgLogin,
} from './styles'
import { ReactComponent as LogoSvg } from '../../../../assets/logo.svg'
import { ReactComponent as CloseIcon } from '../../../../assets/close.svg'

function ResetPassword() {
  const location = useLocation()
  const { email } = location.state
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const navigate = useNavigate()

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCode(value)
    setIsFormValid(value.trim() !== '' && newPassword.trim().length >= 6)
  }

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setNewPassword(value)
    setIsFormValid(code.trim() !== '' && value.trim().length >= 6)
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      if (newPassword.length < 6) {
        toast.error('A senha deve ter pelo menos 6 caracteres.')
        return
      }

      const response = await axios.post('/reset-password', {
        email,
        code,
        newPassword,
      })

      if (response.status === 200) {
        toast.success('Senha alterada com sucesso!')
        navigate('/login')
      }
    } catch (error) {
      toast.error('Código inválido. Verifique e tente novamente.')
    }
  }

  return (
    <ForgotContainer>
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
            <Label htmlFor='code'>Digite o Código</Label>
            <Input type='text' id='code' name='code' value={code} onChange={handleCodeChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='newPassword'>Digite a Nova Senha</Label>
            <Input
              type='password'
              id='newPassword'
              name='newPassword'
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </FormGroup>

          <SubmitButton
            type='submit'
            style={{ backgroundColor: isFormValid ? '#56BA50' : '#ABABAB' }}
            disabled={!isFormValid}
          >
            Confirmar
          </SubmitButton>
        </Form>
      </FormWrapper>
    </ForgotContainer>
  )
}

export default ResetPassword
