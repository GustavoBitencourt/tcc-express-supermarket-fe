import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import { useForm, Controller } from 'react-hook-form'
import { FieldValues, schema } from './validationSchema'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  EditAccountContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  TopBar,
  Title,
} from './styles'
import { getCustomer, updateCustomer } from '../../../services/api'
import arrowLeftCategory from '../../../assets/arrow-left-category.svg'
import closeIcon from '../../../assets/close.svg'

import { CustomerData } from '../../../interfaces/CustomerData'

function EditAccount() {
  const initialUserData: CustomerData = {
    fullName: '',
    document: '',
    mobile: '',
    email: '',
    password: '',
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

  const {
    control,

    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })

  const [userData, setUserData] = useState<CustomerData>(initialUserData)
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    // Buscar os dados do usuário quando o componente é montado
    const userId = localStorage.getItem('id')
    if (userId) {
      const userIdAsNumber = parseInt(userId, 10)
      getCustomer(userIdAsNumber)
        .then((response) => {
          if (response.status === 200) {
            const userDataFromApi = response.data
            // Atualiza o estado com os dados do usuário da API
            setUserData(userDataFromApi)
          } else {
            console.error('Falha ao buscar dados do usuário')
          }
        })
        .catch((error) => {
          console.error('Erro de rede ou outros', error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submit button clicked')
    console.log('userData:', userData)
    // Enviar os dados atualizados para o backend
    const userId = localStorage.getItem('id')

    if (userId) {
      const userIdAsNumber = parseInt(userId, 10)
      updateCustomer(userIdAsNumber, userData)
        .then((response) => {
          if (response.status === 200) {
            // Extrair os dados atualizados do corpo da resposta
            const updatedUserData = response.data

            // Atualize o estado do usuário com os novos dados
            setUserData(updatedUserData)

            console.log('Perfil atualizado com sucesso')
            navigate('/account')
          } else {
            console.error('Falha ao atualizar o perfil')
          }
        })
        .catch((error) => {
          console.error('Erro de rede ou outros', error)
        })
    }
  }
  const goBack = () => {
    navigate(-1)
  }

  return (
    <EditAccountContainer>
      <TopBar>
        <div>
          <img src={arrowLeftCategory} alt='Voltar' onClick={goBack} />
        </div>
        <div>
          <span>Meus Dados</span>
        </div>
        <div>
          <img src={closeIcon} alt='Voltar' onClick={goBack} />
        </div>
      </TopBar>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Title>Altere seus dados:</Title>
          {userData && (
            <FormGroup>
              <Label>Nome:</Label>
              <Controller
                name='fullName'
                control={control}
                defaultValue={userData.fullName}
                render={({ field }) => (
                  <Input
                    type='text'
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      setUserData({ ...userData, fullName: e.target.value })
                    }}
                  />
                )}
              />
              {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
            </FormGroup>
          )}

          <FormGroup>
            <Label>CPF:</Label>
            <Controller
              name='document'
              control={control}
              defaultValue={userData.document || ''}
              render={({ field: { onChange, onBlur, value } }) => (
                <IMaskInput
                  type='text'
                  id='document'
                  mask={[{ mask: '000.000.000-00', maxLength: 11 }]}
                  onChange={(e) => {
                    onChange(e)
                    setUserData({ ...userData, document: e.currentTarget.value })
                  }}
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
              defaultValue={userData.mobile || ''}
              render={({ field: { onChange, onBlur, value } }) => (
                <IMaskInput
                  type='tel'
                  id='mobile'
                  mask={'(00) 90000-0000'}
                  onChange={(e) => {
                    onChange(e)
                    setUserData({ ...userData, mobile: e.currentTarget.value })
                  }}
                  onBlur={onBlur}
                  value={value}
                  className='custom-input'
                />
              )}
            />
            {errors.mobile && <p className='error'>{errors.mobile.message}</p>}
          </FormGroup>

          {userData && (
            <FormGroup>
              <Label>E-mail:</Label>
              <Controller
                name='email'
                control={control}
                defaultValue={userData.email || ''}
                render={({ field }) => (
                  <Input
                    type='email'
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      setUserData({ ...userData, email: e.target.value })
                    }}
                  />
                )}
              />
              {errors.email && <p className='error'>{errors.email.message}</p>}
            </FormGroup>
          )}

          <Button type='submit'>Confirmar</Button>
        </Form>
      )}
    </EditAccountContainer>
  )
}

export default EditAccount
