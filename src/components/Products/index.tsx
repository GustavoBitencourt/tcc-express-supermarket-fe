import { FiPlus } from 'react-icons/fi'

import { currencyFormat } from '../../helpers/currencyFormat'
import { useCart } from '../../hooks/useCart'
import { ProductData } from '../../interfaces/ProductData'

import { SkeletonProduct } from './SkeletonProduct'

import { Container } from './styles'

interface ProductsProps {
  products: ProductData[]
}

export function Products({ products }: ProductsProps) {
  const { cart, addProductIntoCart } = useCart()

  return (
    <Container>
      {!products.length
        ? [1, 2, 3, 4].map((n) => <SkeletonProduct key={n} />)
        : products.map((product) => {
            const productExistent = cart.find(
              (item) => item.product === product.product && item.id === product.id,
            )

            return (
              <div key={product.id} className='product'>
                {productExistent && <span>{productExistent.quantity}</span>}
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <div>
                  <strong>{currencyFormat(product.price)}</strong>
                  <button type='button' onClick={() => addProductIntoCart(product)}>
                    <p>Adicionar</p>
                    <FiPlus />
                  </button>
                </div>
              </div>
            )
          })}
    </Container>
  )
}
