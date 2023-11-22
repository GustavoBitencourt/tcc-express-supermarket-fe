import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useCart } from '../../../../hooks/useCart'

import { ConfirmOrder } from '../../../../components/OrderCloseAction/ConfirmOrder'
import StatusIndicator from '../../../../components/StatusIndicator'
import { currencyFormat } from '../../../../helpers/currencyFormat'

import minusImg from '../../../../assets/circle-minus.svg'
import plusImg from '../../../../assets/circle-plus.svg'

import { Container } from './style'

import TopBar from '../../TopBar'

export function TableMobile() {
  const { cart, removeProductFromCart, productCartIncrement, productCartDecrement } = useCart()
  const [activeStep, setActiveStep] = useState(1)

  return (
    <>
      <TopBar />
      <Container>
        <StatusIndicator activeStep={activeStep} />
        {cart.map((item) => (
          <div key={`${item.product}-${item.id}`} className='order-item'>
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <div>
              <h4>{item.name}</h4>
              <span>{currencyFormat(item.price)}</span>
              <div>
                <div>
                  <button type='button' onClick={() => productCartDecrement(item)}>
                    <img src={minusImg} alt='Remover quantidade' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => productCartIncrement(item)}>
                    <img src={plusImg} alt='Adicionar quantidade' />
                  </button>
                </div>
                <button type='button' onClick={() => removeProductFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </div>
              <h5>
                <span>Subtotal</span> {currencyFormat(item.subtotal)}
              </h5>
            </div>
          </div>
        ))}

        <ConfirmOrder />
      </Container>
    </>
  )
}
