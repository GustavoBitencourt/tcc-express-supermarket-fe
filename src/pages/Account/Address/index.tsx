import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMaskInput } from 'react-imask'
import { FieldValues, schema } from './validationSchema'
import { getCustomer, updateCustomer } from '../../../services/api'
import { CustomerData } from '../../../interfaces/CustomerData'

import {
  AddressContainer,
  AddressForm,
  AddressFormGroup,
  AddressLabel,
  Input,
  AddressButton,
  AddressTopBar,
  AddressSelect,
} from './styles'

import arrowLeftCategory from '../../../assets/arrow-left-category.svg'
import closeIcon from '../../../assets/close.svg'

function Address() {
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

  const [addressData, setAddressData] = useState<CustomerData>(initialUserData)
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  const watchZipCode = useWatch({
    control,
    name: 'zipCode',
  })
  const watchStreet = useWatch({
    control,
    name: 'street',
  })
  const watchNumber = useWatch({
    control,
    name: 'number',
  })
  const watchComplement = useWatch({
    control,
    name: 'complement',
  })
  const watchNeighborhood = useWatch({
    control,
    name: 'neighborhood',
  })
  const watchCity = useWatch({
    control,
    name: 'city',
  })
  const watchState = useWatch({
    control,
    name: 'state',
  })

  useEffect(() => {
    setAddressData((data) => ({
      ...data,
      zipCode: watchZipCode || addressData.zipCode,
      street: watchStreet || addressData.street,
      number: watchNumber || addressData.number,
      complement: watchComplement || addressData.complement,
      neighborhood: watchNeighborhood || addressData.neighborhood,
      city: watchCity || addressData.city,
      state: watchState || addressData.state,
    }))
  }, [
    watchZipCode,
    watchStreet,
    watchNumber,
    watchComplement,
    watchNeighborhood,
    watchCity,
    watchState,
  ])

  useEffect(() => {
    const userId = localStorage.getItem('id')
    if (userId) {
      const userIdAsNumber = parseInt(userId, 10)
      getCustomer(userIdAsNumber)
        .then((response) => {
          if (response.status === 200) {
            const addressDataFromApi = response.data
            // Preenche os campos de endereço com os valores da API
            setAddressData(addressDataFromApi)
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

    const userId = localStorage.getItem('id')
    if (userId) {
      const userIdAsNumber = parseInt(userId, 10)
      const userData = { ...addressData }
      updateCustomer(userIdAsNumber, userData)
        .then((response) => {
          if (response.status === 200) {
            const updatedAddressData = response.data
            setAddressData(updatedAddressData)
            navigate('/account')
          } else {
            console.error('Falha ao atualizar o endereço')
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
    <AddressContainer>
      <AddressTopBar>
        <div>
          <img src={arrowLeftCategory} alt='Voltar' onClick={goBack} />
        </div>
        <div>
          <span>Meu Endereço</span>
        </div>
        <div>
          <img src={closeIcon} alt='Voltar' onClick={goBack} />
        </div>
      </AddressTopBar>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        // ...

        <AddressForm onSubmit={handleSubmit}>
          <h4>Endereço de entrega</h4>

          <AddressFormGroup>
            <AddressLabel htmlFor='zipCode'>CEP</AddressLabel>
            <Controller
              name='zipCode'
              control={control}
              defaultValue={addressData.zipCode}
              render={({ field: { onChange, onBlur, value } }) => (
                <IMaskInput
                  type='text'
                  id='zipCode'
                  mask={'00000-000'}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  className='custom-input-address'
                />
              )}
            />
            {errors.zipCode && <p className='error'>{errors.zipCode.message}</p>}
          </AddressFormGroup>

          <AddressFormGroup>
            <AddressLabel htmlFor='street'>Nome da Rua</AddressLabel>
            <Controller
              name='street'
              control={control}
              defaultValue={addressData.street}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input type='text' id='street' onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
            {errors.street && <p className='error'>{errors.street.message}</p>}
          </AddressFormGroup>

          <div className='grouped'>
            <AddressFormGroup>
              <AddressLabel htmlFor='number'>Número</AddressLabel>
              <Controller
                name='number'
                control={control}
                defaultValue={addressData.number}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    type='text'
                    id='number'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.number && <p className='error'>{errors.number.message}</p>}
            </AddressFormGroup>

            <AddressFormGroup>
              <AddressLabel htmlFor='complement'>Complemento</AddressLabel>
              <Controller
                name='complement'
                control={control}
                defaultValue={addressData.complement}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    type='text'
                    id='complement'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.complement && <p className='error'>{errors.complement.message}</p>}
            </AddressFormGroup>

            <AddressFormGroup>
              <AddressLabel htmlFor='neighborhood'>Bairro</AddressLabel>
              <Controller
                name='neighborhood'
                control={control}
                defaultValue={addressData.neighborhood}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    type='text'
                    id='neighborhood'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.neighborhood && <p className='error'>{errors.neighborhood.message}</p>}
            </AddressFormGroup>
          </div>

          <div className='grouped'>
            <AddressFormGroup>
              <AddressLabel htmlFor='state'>Estado</AddressLabel>
              <Controller
                name='state'
                control={control}
                defaultValue={addressData.state}
                render={({ field: { onChange, onBlur, value } }) => (
                  <AddressSelect id='state' onChange={onChange} onBlur={onBlur} value={value}>
                    <option value=''>Selecione</option>
                    <option value='AC'>Acre</option>
                    <option value='AL'>Alagoas</option>
                    <option value='AP'>Amapá</option>
                    <option value='AM'>Amazonas</option>
                    <option value='BA'>Bahia</option>
                    <option value='CE'>Ceará</option>
                    <option value='ES'>Espírito Santo</option>
                    <option value='GO'>Goiás</option>
                    <option value='MA'>Maranhão</option>
                    <option value='MT'>Mato Grosso</option>
                    <option value='MS'>Mato Grosso do Sul</option>
                    <option value='MG'>Minas Gerais</option>
                    <option value='PA'>Pará</option>
                    <option value='PB'>Paraíba</option>
                    <option value='PR'>Paraná</option>
                    <option value='PE'>Pernambuco</option>
                    <option value='PI'>Piauí</option>
                    <option value='RJ'>Rio de Janeiro</option>
                    <option value='RN'>Rio Grande do Norte</option>
                    <option value='RS'>Rio Grande do Sul</option>
                    <option value='RO'>Rondônia</option>
                    <option value='RR'>Roraima</option>
                    <option value='SC'>Santa Catarina</option>
                    <option value='SP'>São Paulo</option>
                    <option value='SE'>Sergipe</option>
                    <option value='TO'>Tocantins</option>
                    <option value='DF'>Distrito Federal</option>
                  </AddressSelect>
                )}
              />
              {errors.state && <p className='error'>{errors.state.message}</p>}
            </AddressFormGroup>

            <AddressFormGroup>
              <AddressLabel htmlFor='city'>Cidade</AddressLabel>
              <Controller
                name='city'
                control={control}
                defaultValue={addressData.city}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input type='text' id='city' onChange={onChange} onBlur={onBlur} value={value} />
                )}
              />
              {errors.city && <p className='error'>{errors.city.message}</p>}
            </AddressFormGroup>
          </div>
          <AddressButton type='submit'>Confirmar</AddressButton>
        </AddressForm>
      )}
    </AddressContainer>
  )
}

export default Address
