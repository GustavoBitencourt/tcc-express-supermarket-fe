import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLocation } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import IMask from 'imask'
import { getCustomer } from '../../services/api'
import { CustomerData } from '../../interfaces/CustomerData'
import { Head } from '../../components/Head'
import { PayOrder } from '../../components/OrderCloseAction/PayOrder'
import { OrderHeader } from '../../components/OrderHeader'
import { useCart } from '../../hooks/useCart'
import { FieldValues, schema } from './validationSchema'
import { Container, Form, Inner, AddressLabel, TitleText } from './styles'
import TopBar from '../MyCart/TopBar'
import StatusIndicator from '../../components/StatusIndicator'

export default function Payment() {
  const location = useLocation()
  const { payOrder } = useCart()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })

  const [isLoading, setIsLoading] = useState(true)
  const [addressData, setAddressData] = useState<CustomerData>({
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
  })

  useEffect(() => {
    if (location.state && location.state.customer) {
      const customerData = location.state.customer

      // Preenchendo os campos de endereço e mantendo os campos de pagamento vazios
      setAddressData({
        ...customerData,
        creditCardNumber: '',
        creditCardHolder: '',
        creditCardExpiration: '',
        creditCardSecurityCode: '',
      })
      setIsLoading(false)
    } else {
      const userId = localStorage.getItem('id')
      if (userId) {
        const userIdAsNumber = parseInt(userId, 10)
        getCustomer(userIdAsNumber)
          .then((response) => {
            if (response.status === 200) {
              const addressDataFromApi = response.data

              // Preenchendo os campos de endereço e mantendo os campos de pagamento vazios
              setAddressData({
                ...addressDataFromApi,
                creditCardNumber: '',
                creditCardHolder: '',
                creditCardExpiration: '',
                creditCardSecurityCode: '',
              })
            } else {
              console.error('Failed to fetch user data')
            }
          })
          .catch((error) => {
            console.error('Network or other error', error)
          })
          .finally(() => {
            setIsLoading(false)
          })
      }
    }
  }, [location.state])

  const onSubmit: SubmitHandler<FieldValues> = (data) => payOrder(data as CustomerData)

  return (
    <>
      <TopBar />
      <Container>
        <StatusIndicator activeStep={4} />
        <Head title='Pagamento' />
        <OrderHeader showHeader={false} />
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <Inner>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <TitleText>Informações pessoais</TitleText>

              <div className='field'>
                <AddressLabel htmlFor='fullName'>Nome e sobrenome</AddressLabel>
                <Controller
                  name='fullName'
                  control={control}
                  defaultValue={addressData.fullName}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='text'
                      id='fullName'
                      autoComplete='name'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      className='custom-input-address'
                    />
                  )}
                />
                {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
              </div>

              <div className='grouped'>
                <div className='field'>
                  <AddressLabel htmlFor='email'>E-mail</AddressLabel>
                  <Controller
                    name='email'
                    control={control}
                    defaultValue={addressData.email}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        type='email'
                        id='email'
                        autoComplete='email'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.email && <p className='error'>{errors.email.message}</p>}
                </div>

                <div className='field'>
                  <AddressLabel htmlFor='mobile'>Celular</AddressLabel>
                  <Controller
                    name='mobile'
                    control={control}
                    defaultValue={addressData.mobile}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <IMaskInput
                        type='tel'
                        id='mobile'
                        autoComplete='phone'
                        mask={'(00) 90000-0000'}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.mobile && <p className='error'>{errors.mobile.message}</p>}
                </div>

                <div className='field'>
                  <AddressLabel htmlFor='document'>CPF/CNPJ</AddressLabel>
                  <Controller
                    name='document'
                    control={control}
                    defaultValue={addressData.document}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <IMaskInput
                        type='text'
                        id='document'
                        mask={[
                          { mask: '000.000.000-00', maxLength: 11 },
                          { mask: '00.000.000/0000-00' },
                        ]}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.document && <p className='error'>{errors.document.message}</p>}
                </div>
              </div>

              <TitleText>Endereço de entrega</TitleText>

              <div className='field'>
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
              </div>

              <div className='field'>
                <AddressLabel htmlFor='street'>Endereço</AddressLabel>
                <Controller
                  name='street'
                  control={control}
                  defaultValue={addressData.street}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='text'
                      id='street'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      className='custom-input-address'
                    />
                  )}
                />
                {errors.street && <p className='error'>{errors.street.message}</p>}
              </div>

              <div className='grouped'>
                <div className='field'>
                  <AddressLabel htmlFor='number'>Número</AddressLabel>
                  <Controller
                    name='number'
                    control={control}
                    defaultValue={addressData.number}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        type='text'
                        id='number'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.number && <p className='error'>{errors.number.message}</p>}
                </div>

                <div className='field'>
                  <AddressLabel htmlFor='complement'>Complemento</AddressLabel>
                  <Controller
                    name='complement'
                    control={control}
                    defaultValue={addressData.complement}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        type='text'
                        id='complement'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.complement && <p className='error'>{errors.complement.message}</p>}
                </div>
              </div>

              <div className='grouped'>
                <div className='field'>
                  <AddressLabel htmlFor='neighborhood'>Bairro</AddressLabel>
                  <Controller
                    name='neighborhood'
                    control={control}
                    defaultValue={addressData.neighborhood}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        type='text'
                        id='neighborhood'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.neighborhood && <p className='error'>{errors.neighborhood.message}</p>}
                </div>

                <div className='field'>
                  <AddressLabel htmlFor='city'>Cidade</AddressLabel>
                  <Controller
                    name='city'
                    control={control}
                    defaultValue={addressData.city}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        type='text'
                        id='city'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.city && <p className='error'>{errors.city.message}</p>}
                </div>

                <div className='field'>
                  <AddressLabel htmlFor='state'>Estado</AddressLabel>
                  <Controller
                    name='state'
                    control={control}
                    defaultValue={addressData.state}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        type='text'
                        id='state'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.state && <p className='error'>{errors.state.message}</p>}
                </div>
              </div>
              <TitleText>Pagamento</TitleText>

              {/* Campos do formulário de pagamento */}
              <div className='field'>
                <AddressLabel htmlFor='creditCardNumber'>Número do cartão</AddressLabel>
                <Controller
                  name='creditCardNumber'
                  control={control}
                  defaultValue=''
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='text'
                      id='creditCardNumber'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      className='custom-input-address'
                    />
                  )}
                />
                {errors.creditCardNumber && (
                  <p className='error'>{errors.creditCardNumber.message}</p>
                )}
              </div>

              <div className='field'>
                <AddressLabel htmlFor='creditCardHolder'>Nome impresso no cartão</AddressLabel>
                <Controller
                  name='creditCardHolder'
                  control={control}
                  defaultValue=''
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='text'
                      id='creditCardHolder'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      className='custom-input-address'
                    />
                  )}
                />
                {errors.creditCardHolder && (
                  <p className='error'>{errors.creditCardHolder.message}</p>
                )}
              </div>

              <div className='grouped'>
                <div className='field'>
                  <AddressLabel htmlFor='creditCardExpiration'>Validade (MM/AA)</AddressLabel>
                  <Controller
                    name='creditCardExpiration'
                    control={control}
                    defaultValue=''
                    render={({ field: { onChange, onBlur, value } }) => (
                      <IMaskInput
                        type='text'
                        id='creditCardExpiration'
                        mask={[
                          {
                            mask: 'MM/YY',
                            blocks: {
                              MM: {
                                mask: IMask.MaskedRange,
                                from: 1,
                                to: 12,
                              },
                              YY: {
                                mask: IMask.MaskedRange,
                                from: new Date().getFullYear() - 2000,
                                to: 99,
                              },
                            },
                          },
                        ]}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.creditCardExpiration && (
                    <p className='error'>{errors.creditCardExpiration.message}</p>
                  )}
                </div>

                <div className='field' style={{ marginBottom: '8rem' }}>
                  <AddressLabel htmlFor='creditCardSecurityCode'>
                    Código de segurança (CVV)
                  </AddressLabel>
                  <Controller
                    name='creditCardSecurityCode'
                    control={control}
                    defaultValue=''
                    render={({ field: { onChange, onBlur, value } }) => (
                      <IMaskInput
                        type='text'
                        id='creditCardSecurityCode'
                        mask={'0000'}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        className='custom-input-address'
                      />
                    )}
                  />
                  {errors.creditCardSecurityCode && (
                    <p className='error'>{errors.creditCardSecurityCode.message}</p>
                  )}
                </div>
              </div>

              <PayOrder />
            </Form>
          </Inner>
        )}
      </Container>
    </>
  )
}
