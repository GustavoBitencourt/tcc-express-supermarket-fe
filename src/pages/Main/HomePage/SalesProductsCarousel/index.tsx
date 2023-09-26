import React, { useState, useEffect } from 'react'
import { currencyFormat } from '../../../../helpers/currencyFormat'
import { ProductData } from '../../../../interfaces/ProductData'
import { useCart } from '../../../../hooks/useCart'
import { ReactComponent as MapIcon } from '../../../../assets/map-product.svg'
import { getProducts } from '../../../../services/api'
import { ReactComponent as PlusIcon } from '../../../../assets/plus-icon.svg'
import { Container } from './styles'
import arrowLeftSvg from '../../../../assets/arrow-left.svg'
import arrowRightSvg from '../../../../assets/arrow-right.svg'

// Importe os componentes Swiper React
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation } from 'swiper/modules'

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
      {products.length > 0 ? (
        <div style={{ position: 'relative' }}>
          {' '}
          <div
            className='swiper-button-prev'
            style={{
              position: 'absolute',
              top: '50%',
              left: '-1.25rem',
              transform: 'translateY(-50%)',
              zIndex: 1000,
            }}
          >
            <img src={arrowLeftSvg} alt='Seta para a esquerda' />
          </div>
          <div
            className='swiper-button-next'
            style={{
              position: 'absolute',
              top: '50%',
              right: '-1.25rem',
              transform: 'translateY(-50%)',
              zIndex: 1000,
            }}
          >
            <img src={arrowRightSvg} alt='Seta para a direita' />
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={8}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            modules={[Pagination, Navigation]} // Importe o módulo de navegação
            className='mySwiper'
            style={{ width: '100%', height: '100%' }}
            navigation={{
              prevEl: '.swiper-button-prev', // Classe CSS da seta de navegação anterior
              nextEl: '.swiper-button-next', // Classe CSS da seta de navegação seguinte
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className='product'>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  )
}
