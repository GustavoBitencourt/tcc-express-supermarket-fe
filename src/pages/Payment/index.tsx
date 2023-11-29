import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'

import { CustomerData } from '../../interfaces/CustomerData'

import { Head } from '../../components/Head'
import { PayOrder } from '../../components/OrderCloseAction/PayOrder'
import { OrderHeader } from '../../components/OrderHeader'

import { useCart } from '../../hooks/useCart'

import { FieldValues, schema } from './validationSchema'

import IMask from 'imask'
import { Container, Form, Inner, AddressLabel, TitleText } from './styles'
import TopBar from '../MyCart/TopBar'
import StatusIndicator from '../../components/StatusIndicator'

export default function Payment() {
  const { payOrder } = useCart()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })
  const [activeStep] = useState(4)
  const onSubmit: SubmitHandler<FieldValues> = (data) => payOrder(data as CustomerData)

  return (
    <>
      <TopBar />
      <Container>
        <StatusIndicator activeStep={activeStep} />
        <Head title='Pagamento' />
        <OrderHeader showHeader={false} />
        <Inner>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TitleText>Informações pessoais</TitleText>

            <div className='field'>
              <AddressLabel htmlFor='fullName'>Nome e sobrenome</AddressLabel>
              <Controller
                name='fullName'
                control={control}
                defaultValue=''
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
                  defaultValue=''
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
                  defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                  defaultValue=''
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
                  defaultValue=''
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
                  defaultValue=''
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
                  defaultValue=''
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
                  defaultValue=''
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

            <TitleText>Pagamento</TitleText>

            <div className='field'>
              <AddressLabel htmlFor='creditCardNumber'>Número do cartão</AddressLabel>
              <Controller
                name='creditCardNumber'
                control={control}
                defaultValue=''
                render={({ field: { onChange, onBlur, value } }) => (
                  <IMaskInput
                    type='text'
                    id='creditCardNumber'
                    mask={[
                      {
                        mask: '0000 000000 0000',
                        maxLength: 14,
                      },
                      {
                        mask: '0000 000000 00000',
                        maxLength: 15,
                      },
                      {
                        mask: '0000 0000 0000 0000',
                      },
                    ]}
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

              <div className='field'>
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
      </Container>
    </>
  )
}
