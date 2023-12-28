import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterContainer, Form, FormGroup, Label, Input, Button, TopBar, Title } from './styles'
import arrowLeftCategory from '../../assets/arrow-left-category.svg'
import closeIcon from '../../assets/close.svg'
import { registerUser } from '../../services/api'
import { useForm, Controller } from 'react-hook-form'
import { FieldValues, schema } from './validationSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMaskInput } from 'react-imask'

function Register() {
  const [emailExistsError, setEmailExistsError] = useState<string | null>(null)

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })
  const navigate = useNavigate()

  const onSubmit = async (data: FieldValues) => {
    try {
      // Verificar se a senha e a confirmação da senha coincidem
      if (data.password !== data.confirmPassword) {
        setError('confirmPassword', {
          type: 'manual',
          message: 'As senhas não coincidem. Por favor, verifique.',
        })
        console.log('As senhas não coincidem. Por favor, verifique.')
        return
      }

      // Cria um objeto contendo apenas os campos necessários para o registro
      const registrationData = {
        fullName: data.fullName,
        email: data.email,
        mobile: data.mobile,
        document: data.document,
        password: data.password,
        zipCode: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        creditCardNumber: '',
        creditCardHolder: '',
        creditCardExpiration: '',
        creditCardSecurityCode: '',
      }

      // Enviar os dados para o backend usando a função registerUser da API
      const response = await registerUser(registrationData)

      if (response.status === 200) {
        console.log('Cadastro realizado com sucesso')
        navigate('/')
      } else {
        if (response.status === 400 && response.data.error === 'Email already exists') {
          console.log('Email já cadastrado')
          setEmailExistsError('Este e-mail já está cadastrado. Por favor, escolha outro.')
        } else {
          console.log(
            'Ocorreu um erro ao criar a conta. Por favor, revise os dados e tente novamente.',
          )
        }
      }
    } catch (error) {
      if (
        (error as any).response &&
        (error as any).response.status === 400 &&
        (error as any).response.data.error === 'Email already exists'
      ) {
        console.log('Email já cadastrado')
        setEmailExistsError('Este e-mail já está cadastrado. Por favor, escolha outro.')
      } else {
        console.log('Erro de rede ou outros')
        console.log('Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.')
      }
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
      <Title>Insira seus dados:</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Nome:</Label>
          <Controller
            name='fullName'
            control={control}
            defaultValue=''
            render={({ field }) => <Input type='text' {...field} />}
          />
          {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
        </FormGroup>
        <FormGroup>
          <Label>CPF:</Label>
          <Controller
            name='document'
            control={control}
            defaultValue=''
            render={({ field: { onChange, onBlur, value } }) => (
              <IMaskInput
                type='text'
                id='document'
                mask={[{ mask: '000.000.000-00', maxLength: 11 }]}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className='custom-input'
              />
            )}
          />
          {errors.document && <p className='error'>{errors.document.message}</p>}
        </FormGroup>
        <FormGroup>
          <Label>Número do seu Whatsapp:</Label>
          <Controller
            name='mobile'
            control={control}
            defaultValue=''
            render={({ field: { onChange, onBlur, value } }) => (
              <IMaskInput
                type='tel'
                id='mobile'
                autoComplete='phone'
                mask={'(00) 90000-0000'}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className='custom-input'
              />
            )}
          />
          {errors.mobile && <p className='error'>{errors.mobile.message}</p>}
        </FormGroup>
        <FormGroup>
          <Label>E-mail:</Label>
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field }) => <Input type='email' {...field} />}
          />
          {errors.email && <p className='error'>{errors.email.message}</p>}
          {emailExistsError && <p className='error'>{emailExistsError}</p>}
        </FormGroup>
        <FormGroup>
          <Label>Senha:</Label>
          <Controller
            name='password'
            control={control}
            defaultValue=''
            render={({ field }) => <Input type='password' {...field} />}
          />
          {errors.password && <p className='error'>{errors.password.message}</p>}
        </FormGroup>
        <FormGroup>
          <Label>Confirme sua senha:</Label>
          <Controller
            name='confirmPassword'
            control={control}
            defaultValue=''
            render={({ field }) => <Input type='password' {...field} />}
          />
          {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
        </FormGroup>
        <Button
          type='submit'
          style={{
            backgroundColor: isValid ? '#56ba50' : 'gray',
            color: 'white',
          }}
        >
          Confirmar
        </Button>
      </Form>
    </RegisterContainer>
  )
}

export default Register
