import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterContainer, Form, FormGroup, Label, Input, Button, TopBar, Title } from './styles'

import arrowLeftCategory from '../../assets/arrow-left-category.svg'
import closeIcon from '../../assets/close.svg'

function Register() {
  const [fullName, setFullName] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [currentStep, setCurrentStep] = useState<string>('dataEntry') // Etapa inicial é a de entrada de dados pessoais
  const [buttonStyle, setButtonStyle] = useState<{
    backgroundColor: string
    color: string
  }>({
    backgroundColor: '#ABABAB',
    color: '#CBCBCB',
  })
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState<string>('') // Alterado para string
  const [fieldsFilled, setFieldsFilled] = useState<boolean>(false)

  const navigate = useNavigate()

  const fieldStateMap: { [key: string]: React.Dispatch<React.SetStateAction<string>> } = {
    fullName: setFullName,
    cpf: setCpf,
    number: setNumber,
    email: setEmail,
    password: setPassword,
    isPasswordConfirmed: setIsPasswordConfirmed,
  }

  const handleFieldChange = (fieldName: string, value: string) => {
    if (fieldStateMap[fieldName]) {
      fieldStateMap[fieldName](value)
    }

    // Verifique se todos os campos obrigatórios estão preenchidos
    if (
      fullName &&
      cpf &&
      number &&
      email &&
      (currentStep !== 'passwordEntry' || (password && isPasswordConfirmed))
    ) {
      setButtonStyle({ backgroundColor: '#56BA50', color: 'white' }) // Botão verde se todos os campos estiverem preenchidos
      setFieldsFilled(true)
    } else {
      setButtonStyle({ backgroundColor: '#ABABAB', color: '#CBCBCB' }) // Cinza se algum campo obrigatório estiver vazio
      setFieldsFilled(false)
    }
  }

  const handleContinueClick = () => {
    if (currentStep === 'dataEntry') {
      if (fieldsFilled) {
        setCurrentStep('passwordEntry') // Mudar para a etapa de entrada de senha
      }
    } else if (currentStep === 'passwordEntry' && password && isPasswordConfirmed) {
      // Pode exibir uma mensagem de sucesso ou fazer algo adequado aqui
      // Por exemplo, enviar os dados para o backend para registrar o usuário
    } else {
      // Pode exibir uma mensagem de erro ou fazer algo adequado aqui
    }
  }

  const goBack = () => {
    navigate(-1)
  }

  const goToHome = () => {
    navigate('/')
  }

  return (
    <RegisterContainer>
      <TopBar>
        <div>
          <img src={arrowLeftCategory} alt='Voltar' onClick={goBack} />
        </div>
        <div>
          <span>CADASTRO</span>
        </div>
        <div>
          <img src={closeIcon} alt='Fechar' onClick={goToHome} />
        </div>
      </TopBar>
      <Title>{currentStep === 'dataEntry' ? 'Insira seus dados:' : 'Crie sua senha:'}</Title>
      <Form>
        {currentStep === 'dataEntry' && (
          <>
            <FormGroup>
              <Label>Nome:</Label>
              <Input
                type='text'
                value={fullName}
                onChange={(e) => handleFieldChange('fullName', e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>CPF:</Label>
              <Input
                type='text'
                value={cpf}
                onChange={(e) => handleFieldChange('cpf', e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Número do seu Whatsapp:</Label>
              <Input
                type='text'
                value={number}
                onChange={(e) => handleFieldChange('number', e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>E-mail:</Label>
              <Input
                type='email'
                value={email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
              />
            </FormGroup>
          </>
        )}
        {currentStep === 'passwordEntry' && (
          <>
            <FormGroup>
              <Label>Senha:</Label>
              <Input
                type='password'
                value={password}
                onChange={(e) => handleFieldChange('password', e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirme sua senha:</Label>
              <Input
                type='password'
                value={isPasswordConfirmed}
                onChange={(e) => handleFieldChange('isPasswordConfirmed', e.target.value)}
              />
            </FormGroup>
          </>
        )}
      </Form>
      <Button
        type='button'
        onClick={handleContinueClick}
        style={fieldsFilled ? { backgroundColor: '#56BA50', color: 'white' } : buttonStyle}
        disabled={!fieldsFilled}
      >
        {currentStep === 'dataEntry' ? 'Continuar' : 'Confirmar'}
      </Button>
    </RegisterContainer>
  )
}

export default Register
