import { useCart } from '../../hooks/useCart';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import { Container, CartCount } from './styles';

export function MyOrder() {
  const { cart } = useCart();

  return (
    <Container to={'cart'}>
      <span>Meu Pedido</span>
      <CartIcon />
      {cart.length !== 0 && <CartCount>{`${cart.length}`.padStart(2, '0')}</CartCount>}
    </Container>
  );
}
