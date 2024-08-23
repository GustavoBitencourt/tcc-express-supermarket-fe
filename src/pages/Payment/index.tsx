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
import {
  Container,
  Form,
  Inner,
  AddressLabel,
  TitleText,
  PaymentOptions,
  PaymentButton,
  SubTitleText,
  QrCodeContainer,
} from './styles'
import TopBar from '../MyCart/TopBar'
import StatusIndicator from '../../components/StatusIndicator'
import { ReactComponent as CardIconUnselect } from '../../assets/card-icon-unselect.svg'
import { ReactComponent as CardIconSelect } from '../../assets/card-icon-select.svg'
import { ReactComponent as MoneyIconUnselect } from '../../assets/money-icon-unselect.svg'
import { ReactComponent as MoneyIconSelect } from '../../assets/money-icon-select.svg'
import { ReactComponent as PixIconUnselect } from '../../assets/pix-icon-unselect.svg'
import { ReactComponent as PixIconSelect } from '../../assets/pix-icon-select.svg'
import { ReactComponent as PixQrCode } from '../../assets/pix.svg'

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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    'card' | 'money' | 'pix' | null
  >(null)
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
    shippingMethod: '',
  })

  useEffect(() => {
    if (location.state && location.state.customer) {
      const customerData = location.state.customer
      setAddressData({
        ...customerData,
        creditCardNumber: '',
        creditCardHolder: '',
        creditCardExpiration: '',
        creditCardSecurityCode: '',
        shippingMethod: '',
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

              setAddressData({
                ...addressDataFromApi,
                creditCardNumber: '',
                creditCardHolder: '',
                creditCardExpiration: '',
                creditCardSecurityCode: '',
                shippingMethod: '',
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

  const handlePaymentMethodSelect = (method: 'card' | 'money' | 'pix') => {
    setSelectedPaymentMethod(method)
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (selectedPaymentMethod === 'pix') {
      data.paymentMethod = 'pix'
      data.creditCardNumber = 'pix'
    } else if (selectedPaymentMethod === 'money') {
      data.paymentMethod = 'money'
      data.creditCardNumber = 'pix'
    } else if (selectedPaymentMethod === 'card') {
      data.paymentMethod = 'card'
    }
    data.shippingMethod = location.state.shippingMethod
    payOrder(data as CustomerData)
  }

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
            <div className='field'>
              <Controller
                name='fullName'
                control={control}
                defaultValue={addressData.fullName}
                render={({ field: { onChange, onBlur, value } }) => (
                  <input
                    type='hidden'
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
                <Controller
                  name='email'
                  control={control}
                  defaultValue={addressData.email}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='hidden'
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
                <Controller
                  name='mobile'
                  control={control}
                  defaultValue={addressData.mobile}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <IMaskInput
                      type='hidden'
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
                <Controller
                  name='document'
                  control={control}
                  defaultValue={addressData.document}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <IMaskInput
                      type='hidden'
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

            <div className='field'>
              <Controller
                name='zipCode'
                control={control}
                defaultValue={addressData.zipCode}
                render={({ field: { onChange, onBlur, value } }) => (
                  <IMaskInput
                    type='hidden'
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
              <Controller
                name='street'
                control={control}
                defaultValue={addressData.street}
                render={({ field: { onChange, onBlur, value } }) => (
                  <input
                    type='hidden'
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
                <Controller
                  name='number'
                  control={control}
                  defaultValue={addressData.number}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='hidden'
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
                <Controller
                  name='complement'
                  control={control}
                  defaultValue={addressData.complement}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='hidden'
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
                <Controller
                  name='neighborhood'
                  control={control}
                  defaultValue={addressData.neighborhood}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='hidden'
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
                <Controller
                  name='city'
                  control={control}
                  defaultValue={addressData.city}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='hidden'
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
                <Controller
                  name='state'
                  control={control}
                  defaultValue={addressData.state}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <input
                      type='hidden'
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

            <TitleText>Escolha sua forma de pagamento:</TitleText>
            <PaymentOptions>
              <PaymentButton onClick={() => handlePaymentMethodSelect('card')}>
                {selectedPaymentMethod === 'card' ? <CardIconSelect /> : <CardIconUnselect />}
              </PaymentButton>
              <PaymentButton onClick={() => handlePaymentMethodSelect('money')}>
                {selectedPaymentMethod === 'money' ? <MoneyIconSelect /> : <MoneyIconUnselect />}
              </PaymentButton>
              <PaymentButton onClick={() => handlePaymentMethodSelect('pix')}>
                {selectedPaymentMethod === 'pix' ? <PixIconSelect /> : <PixIconUnselect />}
              </PaymentButton>
            </PaymentOptions>

            {selectedPaymentMethod === 'card' && (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='field' style={{ marginTop: '2rem' }}>
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

                  <div className='field' style={{ marginBottom: '10rem' }}>
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
            )}

            {selectedPaymentMethod === 'money' && (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <SubTitleText>
                  Pagamento será feito na mesma hora de receber o seu pedido
                </SubTitleText>
                <div className='field' style={{ marginTop: '2rem', marginBottom: '15rem' }}>
                  <Controller
                    name='creditCardNumber'
                    control={control}
                    defaultValue='111111111111'
                    render={({ field: { onChange, onBlur } }) => (
                      <input
                        type='hidden'
                        id='creditCardNumber'
                        onChange={onChange}
                        onBlur={onBlur}
                        value='111111111111'
                        className='custom-input-address'
                      />
                    )}
                  />
                </div>

                <div className='field'>
                  <Controller
                    name='creditCardHolder'
                    control={control}
                    defaultValue='nome generico'
                    render={({ field: { onChange, onBlur } }) => (
                      <input
                        type='hidden'
                        id='creditCardHolder'
                        onChange={onChange}
                        onBlur={onBlur}
                        value='nome generico'
                        className='custom-input-address'
                      />
                    )}
                  />
                </div>

                <div className='grouped'>
                  <div className='field'>
                    <Controller
                      name='creditCardExpiration'
                      control={control}
                      defaultValue='12/30'
                      render={({ field: { onChange, onBlur } }) => (
                        <IMaskInput
                          type='hidden'
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
                          value='12/30'
                          className='custom-input-address'
                        />
                      )}
                    />
                  </div>

                  <div className='field' style={{ marginBottom: '10rem' }}>
                    <Controller
                      name='creditCardSecurityCode'
                      control={control}
                      defaultValue='123'
                      render={({ field: { onChange, onBlur } }) => (
                        <IMaskInput
                          type='hidden'
                          id='creditCardSecurityCode'
                          mask={'0000'}
                          onChange={onChange}
                          onBlur={onBlur}
                          value='123'
                          className='custom-input-address'
                        />
                      )}
                    />
                  </div>
                </div>
                <PayOrder />
              </Form>
            )}

            {selectedPaymentMethod === 'pix' && (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <SubTitleText>Pagamento por pix via QR Code abaixo</SubTitleText>
                <QrCodeContainer>
                  <PixQrCode />
                </QrCodeContainer>
                <div className='field' style={{ marginTop: '2rem' }}>
                  <Controller
                    name='creditCardNumber'
                    control={control}
                    defaultValue='111111111111'
                    render={({ field: { onChange, onBlur } }) => (
                      <input
                        type='hidden'
                        id='creditCardNumber'
                        onChange={onChange}
                        onBlur={onBlur}
                        value='111111111111'
                        className='custom-input-address'
                      />
                    )}
                  />
                </div>

                <div className='field'>
                  <Controller
                    name='creditCardHolder'
                    control={control}
                    defaultValue='nome generico'
                    render={({ field: { onChange, onBlur } }) => (
                      <input
                        type='hidden'
                        id='creditCardHolder'
                        onChange={onChange}
                        onBlur={onBlur}
                        value='nome generico'
                        className='custom-input-address'
                      />
                    )}
                  />
                </div>

                <div className='grouped'>
                  <div className='field'>
                    <Controller
                      name='creditCardExpiration'
                      control={control}
                      defaultValue='12/30'
                      render={({ field: { onChange, onBlur } }) => (
                        <IMaskInput
                          type='hidden'
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
                          value='12/30'
                          className='custom-input-address'
                        />
                      )}
                    />
                  </div>

                  <div className='field' style={{ marginBottom: '10rem' }}>
                    <Controller
                      name='creditCardSecurityCode'
                      control={control}
                      defaultValue='123'
                      render={({ field: { onChange, onBlur } }) => (
                        <IMaskInput
                          type='hidden'
                          id='creditCardSecurityCode'
                          mask={'0000'}
                          onChange={onChange}
                          onBlur={onBlur}
                          value='123'
                          className='custom-input-address'
                        />
                      )}
                    />
                  </div>
                </div>
                <PayOrder />
              </Form>
            )}
          </Inner>
        )}
      </Container>
    </>
  )
}
