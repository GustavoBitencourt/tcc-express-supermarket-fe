import { currencyFormat } from '../../helpers/currencyFormat'
import { useCart } from '../../hooks/useCart'
import { ProductData } from '../../interfaces/ProductData'
import { SkeletonProduct } from './SkeletonProduct'
import { Container } from './styles'
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg'
import { ReactComponent as MapIcon } from '../../assets/map-product.svg'

interface ProductsProps {
  products: ProductData[]
}

export function Products({ products }: ProductsProps) {
  const { cart, addProductIntoCart } = useCart()

  const openMapModal = (product: ProductData) => {
    // Implemente a lógica para mostrar o modal ou realizar a ação do mapa aqui
    console.log('Abrir modal do mapa para:', product.name)
  }

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
                <div className='product-info'>
                  <h2>{product.name}</h2>
                  <strong className='price'>{currencyFormat(product.price)}</strong>
                  <div className='buttons'>
                    <button
                      type='button'
                      className='map-button'
                      onClick={() => openMapModal(product)}
                    >
                      <MapIcon />
                    </button>
                    <button type='button' onClick={() => addProductIntoCart(product)}>
                      <p>Adicionar</p>
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
    </Container>
  )
}
