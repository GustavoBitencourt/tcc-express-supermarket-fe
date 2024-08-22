import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import { getCustomer } from '../../services/api'
import { CustomerData } from '../../interfaces/CustomerData'
import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import { FieldValues, schema } from '../Payment/validationSchema'
import { Container, Form, Inner, AddressLabel, TitleText, ConfirmButton } from './styles'
import TopBar from '../MyCart/TopBar'
import StatusIndicator from '../../components/StatusIndicator'
import { useLocation, useNavigate } from 'react-router-dom'

export default function CustomerCartData() {
  const navigate = useNavigate()
  const location = useLocation()
  const {
    cart,
    shippingMethod,
    customer: initialCustomerData,
  } = location.state || { cart: [], shippingMethod: 'pickup', customer: {} }

  const {
    control,

    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const [activeStep] = useState(3)
  const [isLoading, setIsLoading] = useState(true)

  const [addressData, setAddressData] = useState<CustomerData>({
    fullName: '',
    document: '',
    mobile: '',
    email: '',
    ...initialCustomerData,
  })

  const watchFullName = useWatch({
    control,
    name: 'fullName',
  })
  const watchEmail = useWatch({
    control,
    name: 'email',
  })
  const watchDocument = useWatch({
    control,
    name: 'document',
  })
  const watchMobile = useWatch({
    control,
    name: 'mobile',
  })

  useEffect(() => {
    const userId = localStorage.getItem('id')
    if (userId) {
      const userIdAsNumber = parseInt(userId, 10)
      getCustomer(userIdAsNumber)
        .then((response) => {
          if (response.status === 200) {
            const addressDataFromApi = response.data
            fillFormData(addressDataFromApi)
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
  }, [])

  const fillFormData = (data: CustomerData) => {
    setAddressData((prevData: CustomerData) => ({
      ...prevData,
      fullName: watchFullName || data.fullName,
      email: watchEmail || data.email,
      mobile: watchMobile || data.mobile,
      document: watchDocument || data.document,
    }))
  }

  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const updatedCustomerData = {
      ...addressData,
      fullName: watchFullName || addressData.fullName,
      email: watchEmail || addressData.email,
      mobile: watchMobile || addressData.mobile,
      document: watchDocument || addressData.document,
    }

    navigate('/payment', {
      state: {
        cart: cart,
        customer: updatedCustomerData,
        shippingMethod: shippingMethod,
      },
    })
  }

  return (
    <>
      <TopBar />
      <Container>
        <StatusIndicator activeStep={activeStep} />
        <Head title='Pagamento' />
        <OrderHeader showHeader={false} />
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <Inner>
            <Form>
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
              <ConfirmButton onClick={handleConfirm}>Confirmar</ConfirmButton>
            </Form>
          </Inner>
        )}
      </Container>
    </>
  )
}
