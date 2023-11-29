import { useCart } from '../../../hooks/useCart'

import { currencyFormat } from '../../../helpers/currencyFormat'

import { Container } from '../style'

export function PayOrder() {
  const { cart } = useCart()
  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0)
  const shippingCost = 5
  const total = totalAmount + shippingCost

  return (
    <Container>
      <div className='price'>
        <div className='subs'>
          <div className='subtotal'>
            <span>
              Subtotal: <strong>{currencyFormat(totalAmount)}</strong>
            </span>
          </div>
          <div className='shipping'>
            <span>
              Frete: <strong>{currencyFormat(shippingCost)}</strong>
            </span>
          </div>
        </div>
        <div className='total'>
          <span>
            Total: <strong>{currencyFormat(total)}</strong>
          </span>
        </div>
      </div>
      <div className='confirm-button'>
        <button type='submit'>Confirmar pagamento</button>
      </div>
    </Container>
  )
}
