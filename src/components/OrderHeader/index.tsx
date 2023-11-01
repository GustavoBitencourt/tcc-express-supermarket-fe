import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'

import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

interface OrderHeaderProps {
  showHeader: boolean
}

export function OrderHeader({ showHeader }: OrderHeaderProps) {
  const { cart } = useCart()

  if (!showHeader) {
    return null
  }

  return (
    <Container>
      <Link to='/'>
        <img src={logoImg} alt='Mercado Expresso' />
      </Link>
      <div>
        <div>
          <h3>Meus pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> produto(s)
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  )
}
