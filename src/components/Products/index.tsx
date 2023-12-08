import React, { useState } from 'react'
import Modal from 'react-modal'
import { currencyFormat } from '../../helpers/currencyFormat'
import { useCart } from '../../hooks/useCart'
import { ProductData } from '../../interfaces/ProductData'
import { SkeletonProduct } from './SkeletonProduct'
import { Container } from './styles'
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg'
import { ReactComponent as MapIcon } from '../../assets/map-product.svg'
import { ReactComponent as ImageMap } from '../../assets/image-map.svg'

interface ProductsProps {
  products: ProductData[]
}

Modal.setAppElement('#root')

export function Products({ products }: ProductsProps) {
  const { cart, addProductIntoCart } = useCart()
  const [isMapModalOpen, setMapModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null)

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
