import React, { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'

// import { ConfirmOrder } from '../../../../components/OrderCloseAction/ConfirmOrder'
import StatusIndicator from '../../../../components/StatusIndicator'
import { currencyFormat } from '../../../../helpers/currencyFormat'

import minusImg from '../../../../assets/circle-minus.svg'
import plusImg from '../../../../assets/circle-plus.svg'
import closeIcon from '../../../../assets/close-icon.svg'

import FormComponent from './formComponent'
import {
  Container,
  StatusTexts,
  AdditionalText,
  SubstituicaoText,
  LimparListaText,
  CartListText,
} from './style'

import TopBar from '../../TopBar'

export function TableMobile() {
  const { cart, removeProductFromCart, productCartIncrement, productCartDecrement } = useCart()
  const [activeStep] = useState(1)
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }
  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0)

  return (
    <>
      <TopBar />
      <Container>
        <StatusIndicator activeStep={activeStep} />
        <StatusTexts>
          <SubstituicaoText>Substituição</SubstituicaoText>
          <LimparListaText>Limpar lista</LimparListaText>
        </StatusTexts>
        <AdditionalText>Caso algum produto de sua compra esteja indisponível</AdditionalText>
        <p>Caso algum produto de sua compra esteja indisponível</p>
        <FormComponent onSelectOption={handleOptionSelect} selectedOption={selectedOption} />
        <CartListText>Lista do carrinho</CartListText>
        {cart.map((item) => (
          <div key={`${item.product}-${item.id}`} className='order-item'>
            <img className='imgProduct' src={item.image} alt={item.name} />
            <button className='closeIcon' type='button' onClick={() => removeProductFromCart(item)}>
              <img src={closeIcon} alt='Remover produto' />
            </button>
            <div className='divWidth'>
              <h4>{item.name}</h4>
              <div className='divWidth2'>
                <span className='price'>{currencyFormat(item.price)}</span>
                <div>
                  <div>
                    <button
                      className='buttonRemove'
                      type='button'
                      onClick={() => productCartDecrement(item)}
                    >
                      <img src={minusImg} alt='Remover quantidade' />
                    </button>
                    <span className='quantityBox'>{`${item.quantity}`.padStart(2)}</span>
                    <button
                      className='buttonAdd'
                      type='button'
                      onClick={() => productCartIncrement(item)}
                    >
                      <img src={plusImg} alt='Adicionar quantidade' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='subtotal'>
          <span style={{ color: 'black' }}>Subtotal:</span> {currencyFormat(totalAmount)}
          <div className='confirm-button'>
            <button>Confirmar itens</button>
          </div>
        </div>

        {/* <ConfirmOrder /> */}
      </Container>
    </>
  )
}
