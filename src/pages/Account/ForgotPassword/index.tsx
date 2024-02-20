import React, { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import { ReactComponent as LogoSvg } from '../../../assets/logo.svg'
import { ReactComponent as CloseIcon } from '../../../assets/close.svg'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setEmail(value)
    setIsFormValid(value.trim() !== '')
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post('/forgot-password', { email })

      if (response.status === 200) {
        toast.success('Código de redefinição enviado com sucesso!')
        navigate('/resetPassword', { state: { email } })
      }
    } catch (error) {
      toast.error('O email não foi encontrado. Verifique e tente novamente.')
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
            <Label htmlFor='email'>Digite seu E-mail</Label>
            <Input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
            />
          </FormGroup>

          <SubmitButton
            type='submit'
            style={{ backgroundColor: isFormValid ? '#56BA50' : '#ABABAB' }}
            disabled={!isFormValid}
          >
            Enviar Código
          </SubmitButton>
        </Form>
      </FormWrapper>
    </ForgotContainer>
  )
}

export default ForgotPassword
