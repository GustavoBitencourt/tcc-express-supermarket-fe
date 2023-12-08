import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { currencyFormat } from '../../../../helpers/currencyFormat'
import { ProductData } from '../../../../interfaces/ProductData'
import { useCart } from '../../../../hooks/useCart'
import { ReactComponent as MapIcon } from '../../../../assets/map-product.svg'
import { getProducts } from '../../../../services/api'
import { ReactComponent as PlusIcon } from '../../../../assets/plus-icon.svg'
import { Container } from './styles'
import arrowLeftSvg from '../../../../assets/arrow-left.svg'
import arrowRightSvg from '../../../../assets/arrow-right.svg'
import { ReactComponent as ImageMap } from '../../../../assets/image-map.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation } from 'swiper/modules'

Modal.setAppElement('#root')

export default function SalesProductCarousel() {
  const [products, setProducts] = useState<ProductData[]>([])
  const { addProductIntoCart } = useCart()
  const [isMapModalOpen, setMapModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null)

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
    setSelectedProduct(product)
    setMapModalOpen(true)
  }

  const closeMapModal = () => {
    setSelectedProduct(null)
    setMapModalOpen(false)
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
              cursor: 'pointer',
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
              cursor: 'pointer',
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
            modules={[Pagination, Navigation]}
            className='mySwiper'
            style={{
              width: '100%',
              height: '100%',
              paddingBottom: '15%',
              paddingRight: '3%',
              paddingLeft: '3%',
            }}
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
        <p>Aguarde...</p>
      )}
      <Modal
        isOpen={isMapModalOpen}
        onRequestClose={closeMapModal}
        contentLabel='Map Modal'
        style={{
          overlay: { zIndex: 1000 },
          content: {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            border: 'none',
            padding: 0,
            background: 'transparent',
          },
        }}
      >
        {selectedProduct && (
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                background: '#FFF',
                borderRadius: '8px',
                boxShadow: '0px 8px 24px 0px rgba(112, 144, 176, 0.20)',
                display: 'flex',
                alignItems: 'center',
                width: '90%',
                position: 'absolute',
                marginTop: '5rem',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{ width: '98px', height: '86px', marginRight: '20px' }}
              />
              <div>
                <h3
                  style={{
                    color: '#393939',
                    fontFamily: 'Manrope',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  {selectedProduct.name}
                </h3>
              </div>
            </div>
            <ImageMap style={{ width: '100vw', height: '100vh', marginTop: '-2.5rem' }} />
            {/* Adicione aqui quaisquer informações adicionais do produto se necessário */}
            <button
              type='button'
              onClick={closeMapModal}
              style={{
                position: 'absolute',
                bottom: '3%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '3.2rem',
                backgroundColor: '#56BA50',
                color: 'white',
                padding: '10px',
                border: 'none',
                borderRadius: '8px',
                zIndex: 2000,
                fontSize: '16px',
              }}
            >
              Confirmar
            </button>
          </div>
        )}
      </Modal>
    </Container>
  )
}
