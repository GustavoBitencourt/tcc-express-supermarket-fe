import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { getCustomer } from '../../services/api'
import { CustomerData } from '../../interfaces/CustomerData'
import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import { useCart } from '../../hooks/useCart'
import { FieldValues, schema } from '../Payment/validationSchema'
import {
  Container,
  Form,
  Inner,
  AddressLabel,
  TitleText,
  ConfirmButton,
  IconButton,
  TextCenter,
  IconWrapper,
} from './styles'
import TopBar from '../MyCart/TopBar'
import StatusIndicator from '../../components/StatusIndicator'
import { useLocation, useNavigate } from 'react-router-dom'

import { ReactComponent as PickupIconUnselect } from '../../assets/pickup-icon-unselect.svg'
import { ReactComponent as DeliveryIconUnselect } from '../../assets/delivery-icon-unselect.svg'
import { ReactComponent as PickupIconSelect } from '../../assets/pickup-icon-select.svg'
import { ReactComponent as DeliveryIconSelect } from '../../assets/delivery-icon-select.svg'

export default function Shipping() {
  const { payOrder } = useCart()
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const [activeStep] = useState(2)
  const [pickupTimeMessage, setPickupTimeMessage] = useState<string>('')

  const onSubmit: SubmitHandler<FieldValues> = (data) => payOrder(data as CustomerData)
  const [isLoading, setIsLoading] = useState(true)

  const location = useLocation()
  const { cart, selectedOption } = location.state || { cart: [], selectedOption: '' }

  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<'pickup' | 'delivery'>(
    selectedOption || 'pickup',
  )

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

  const watchZipCode = useWatch({
    control,
    name: 'zipCode',
  })
  const watchStreet = useWatch({
    control,
    name: 'street',
  })
  const watchComplement = useWatch({
    control,
    name: 'complement',
  })
  const watchNeighborhood = useWatch({
    control,
    name: 'neighborhood',
  })
  const watchNumber = useWatch({
    control,
    name: 'number',
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
      zipCode: watchZipCode || data.zipCode,
      street: watchStreet || data.street,
      number: watchNumber || data.number,
      complement: watchComplement || data.complement,
      neighborhood: watchNeighborhood || data.neighborhood,
      city: watchCity || data.city,
      state: watchState || data.state,
    }))
  }

  const handleDeliveryMethodChange = (method: 'pickup' | 'delivery') => {
    setSelectedDeliveryMethod(method)
    if (method === 'pickup') {
      calculatePickupTime()
    }
  }

  const calculatePickupTime = () => {
    const now = new Date()
    const currentHour = now.getHours()
    const currentMinutes = now.getMinutes()

    if (currentHour >= 23 || currentHour < 9 || (currentHour === 9 && currentMinutes < 30)) {
      setPickupTimeMessage('Seu pedido estará disponível para retirada amanhã a partir das 10:00.')
    } else {
      const pickupTime = new Date(now.getTime() + 30 * 60000)
      const pickupHour = pickupTime.getHours().toString().padStart(2, '0')
      const pickupMinutes = pickupTime.getMinutes().toString().padStart(2, '0')
      setPickupTimeMessage(
        `Seu pedido estará disponível para retirada a partir das ${pickupHour}:${pickupMinutes}.`,
      )
    }
  }

  interface NavigationState {
    cart: any
    shippingMethod: 'pickup' | 'delivery'
    customer:
      | CustomerData
      | {
          zipCode: string
          street: string
          number: string
          complement: string
          neighborhood: string
          city: string
          state: string
          creditCardNumber: string
          creditCardHolder: string
          creditCardExpiration: string
          creditCardSecurityCode: string
        }
  }

  const handleConfirm = () => {
    const getFormData = () => {
      return {
        zipCode: getValues('zipCode') || '',
        street: getValues('street') || '',
        number: getValues('number') || '',
        complement: getValues('complement') || '',
        neighborhood: getValues('neighborhood') || '',
        city: getValues('city') || '',
        state: getValues('state') || '',
        creditCardNumber: '',
        creditCardHolder: '',
        creditCardExpiration: '',
        creditCardSecurityCode: '',
      } as CustomerData
    }

    const isFormValid =
      selectedDeliveryMethod === 'pickup' ||
      (getValues('zipCode') &&
        getValues('street') &&
        getValues('number') &&
        getValues('neighborhood') &&
        getValues('city') &&
        getValues('state'))

    if (!isFormValid) {
      trigger()
      return
    }

    const stateData: NavigationState = {
      cart,
      shippingMethod: selectedDeliveryMethod,
      customer:
        selectedDeliveryMethod === 'delivery'
          ? getFormData()
          : {
              zipCode: '96045000',
              street: 'Retira na Loja',
              number: 'Retira na Loja',
              complement: 'Retira na Loja',
              neighborhood: 'Fragata',
              city: 'Pelotas',
              state: 'RS',
              creditCardNumber: '',
              creditCardHolder: '',
              creditCardExpiration: '',
              creditCardSecurityCode: '',
            },
    }

    navigate('/customerCartData', { state: stateData })
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
            <TextCenter>Deseja receber como sua compra?</TextCenter>
            <IconWrapper>
              <IconButton onClick={() => handleDeliveryMethodChange('pickup')}>
                {selectedDeliveryMethod === 'pickup' ? (
                  <PickupIconSelect />
                ) : (
                  <PickupIconUnselect />
                )}
              </IconButton>

              <IconButton onClick={() => handleDeliveryMethodChange('delivery')}>
                {selectedDeliveryMethod === 'delivery' ? (
                  <DeliveryIconSelect />
                ) : (
                  <DeliveryIconUnselect />
                )}
              </IconButton>
            </IconWrapper>

            {selectedDeliveryMethod === 'pickup' && pickupTimeMessage && (
              <TextCenter>{pickupTimeMessage}</TextCenter>
            )}

            {selectedDeliveryMethod === 'pickup' || selectedDeliveryMethod === 'delivery' ? (
              <ConfirmButton
                onClick={handleConfirm}
                disabled={selectedDeliveryMethod === 'delivery' && !isValid}
              >
                Confirmar
              </ConfirmButton>
            ) : null}

            {selectedDeliveryMethod === 'delivery' && (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <TitleText>Endereço de entrega</TitleText>

                <div className='field'>
                  <AddressLabel htmlFor='zipCode'>CEP</AddressLabel>
                  <Controller
                    name='zipCode'
                    control={control}
                    defaultValue={addressData.zipCode}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        type='text'
                        id='zipCode'
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

                <div className='grouped'>
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

                  <div className='field' style={{ marginBottom: '7rem' }}>
                    <AddressLabel htmlFor='state'>Estado</AddressLabel>
                    <Controller
                      name='state'
                      control={control}
                      defaultValue={addressData.state}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <select
                          id='state'
                          className='custom-input-address'
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                        >
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
                        </select>
                      )}
                    />
                    {errors.state && <p className='error'>{errors.state.message}</p>}
                  </div>
                </div>
                <ConfirmButton onClick={handleConfirm}>Confirmar</ConfirmButton>
              </Form>
            )}
          </Inner>
        )}
      </Container>
    </>
  )
}
