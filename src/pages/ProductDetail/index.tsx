import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { currencyFormat } from '../../helpers/currencyFormat'
import { ProductData } from '../../interfaces/ProductData'
import api from '../../services/api'
import { Sidebar } from '../../components/Sidebar'
import { TopBar, ProductContainer, ProductInfo } from './styles'
import { ReactComponent as LeftArrowIcon } from '../../assets/arrow-left-category.svg'
import { ReactComponent as MapProductIcon } from '../../assets/icon-map-product.svg'
import { ReactComponent as ShareIconProduct } from '../../assets/share-icon-product.svg'
import { ReactComponent as ImageMap } from '../../assets/image-map.svg'
import { useCart } from '../../hooks/useCart'
import Modal from 'react-modal'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<ProductData | null>(null)
  const { addProductIntoCart } = useCart()
  const [isMapModalOpen, setMapModalOpen] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/product/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error)
      }
    }

    fetchProduct()
  }, [id])

  if (!product) {
    return <div>Carregando...</div>
  }

  const openMapModal = () => {
    setMapModalOpen(true)
  }

  const closeMapModal = () => {
    setMapModalOpen(false)
  }

  return (
    <ProductContainer>
      <TopBar>
        <Link to='/' className='arrow-left'>
          <LeftArrowIcon />
        </Link>
        <Link to='/admin' className='arrow-left'></Link>
      </TopBar>
      <ProductInfo>
        <img src={product.image} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <div className='rectangle'>
            <p>{currencyFormat(Number(product.price))}</p>
          </div>
          <div className='important-text'>Importante</div>
          <div className='disclaimer-text'>
            As informações sobre o produto ou a embalagem exibidas podem não estar atualizadas ou
            completas. Por favor, consulte sempre o produto físico para obter informações e avisos
            mais precisos.
          </div>
          <div className='button-container'>
            <button className='search-store-button' onClick={openMapModal}>
              <MapProductIcon />
            </button>
            <button className='search-store-button'>
              <ShareIconProduct />
            </button>
          </div>
          <div className='centralized-disclaimer-text'>Máximo de 20 unidades por cliente (CPF)</div>
          <button className='add-cart-button' onClick={() => addProductIntoCart(product)}>
            <p>Adicionar</p>
          </button>
        </div>
      </ProductInfo>
      <Sidebar />
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
              src={product.image}
              alt={product.name}
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
                {product.name}
              </h3>
            </div>
          </div>
          <ImageMap style={{ width: '100vw', height: '100vh', marginTop: '-2.5rem' }} />
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
              fontFamily: 'Manrope',
              fontWeight: 600,
            }}
          >
            Confirmar
          </button>
        </div>
      </Modal>
    </ProductContainer>
  )
}

export default ProductDetail
