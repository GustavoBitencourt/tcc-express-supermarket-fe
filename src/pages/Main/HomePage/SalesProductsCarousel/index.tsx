import React, { useState, useEffect } from 'react'
import { currencyFormat } from '../../../../helpers/currencyFormat'
import { ProductData } from '../../../../interfaces/ProductData'
import { useCart } from '../../../../hooks/useCart'
import { ReactComponent as MapIcon } from '../../../../assets/map-product.svg'
import { getProducts } from '../../../../services/api'
import { ReactComponent as PlusIcon } from '../../../../assets/plus-icon.svg'
import { Container } from './styles'

export default function SalesProductCarousel() {
  const [products, setProducts] = useState<ProductData[]>([])
  const { addProductIntoCart } = useCart()

  useEffect(() => {
    getProducts()
      .then((response) => {
        const data = response.data

        if (Array.isArray(data)) {
          const productsWithPrices = data.map((product) => ({
            ...product,
            price: parseFloat(product.price.toString()),
          }))

          productsWithPrices.sort((a, b) => a.price - b.price)

          const top8Products = productsWithPrices.slice(0, 8)

          setProducts(top8Products)
        } else {
          console.error('Dados de produtos não são um array:', data)
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error)
      })
  }, [])

  const openMapModal = (product: ProductData) => {
    // Implemente a lógica para mostrar o modal ou realizar a ação do mapa aqui
    console.log('Abrir modal do mapa para:', product.name)
  }

  return (
    <Container>
      {products.map((product) => (
        <div key={product.id} className='product'>
          <img src={product.image} alt={product.name} />
          <div className='product-info'>
            <h2>{product.name}</h2>
            <strong className='price'>{currencyFormat(product.price)}</strong>
            <div className='buttons'>
              <button type='button' className='map-button' onClick={() => openMapModal(product)}>
                <MapIcon />
              </button>
              <button type='button' onClick={() => addProductIntoCart(product)}>
                <p>Adicionar</p>
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Container>
  )
}
