import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  SearchContainer,
  TopBar,
  CartCount,
  SearchForm,
  SearchInput,
  SearchButton,
  ResultsContainer,
  ProductItem,
  ProductDetails,
  ProductButtons,
} from './styles'
import { ReactComponent as LeftArrowIcon } from '../../assets/arrow-left-category.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart-details.svg'
import { ReactComponent as MagnifyingIcon } from '../../assets/magnifying-home.svg'
import { ReactComponent as MapProductIcon } from '../../assets/map-product.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg'
import { ReactComponent as ImageMap } from '../../assets/image-map.svg'
import { currencyFormat } from '../../helpers/currencyFormat'
import { useCart } from '../../hooks/useCart'
import { Sidebar } from '../../components/Sidebar'
import { getAllProducts } from '../../services/api'
import { ProductData } from '../../interfaces/ProductData'
import Modal from 'react-modal'

const Search: React.FC = () => {
  const { cart, addProductIntoCart } = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState<ProductData[]>([])
  const [searchResults, setSearchResults] = useState<ProductData[]>([])
  const [isMapModalOpen, setMapModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts()
        setProducts(response.data)
        setSearchResults(response.data)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setSearchResults(results)
  }, [searchTerm, products])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const openMapModal = (product: ProductData) => {
    setSelectedProduct(product)
    setMapModalOpen(true)
  }

  const closeMapModal = () => {
    setMapModalOpen(false)
  }

  return (
    <SearchContainer>
      <TopBar>
        <Link to='/' className='arrow-left'>
          <LeftArrowIcon />
        </Link>
        <h1>PESQUISA</h1>
        <Link to='/cart' className='cart-icon'>
          <div>
            <CartIcon />
            {cart.length > 0 && <CartCount>{`${cart.length}`.padStart(2, '0')}</CartCount>}
          </div>
        </Link>
      </TopBar>
      <SearchForm>
        <SearchInput
          type='text'
          placeholder='Digite sua pesquisa...'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SearchButton>
          <MagnifyingIcon />
        </SearchButton>
      </SearchForm>
      <ResultsContainer>
        {searchResults.map((product) => (
          <ProductItem key={product.id}>
            <img src={product.image} alt={product.name} />
            <ProductDetails>
              <h2>{product.name}</h2>
              <p>{currencyFormat(Number(product.price))}</p>
            </ProductDetails>
            <ProductButtons>
              <button className='search-store-button' onClick={() => openMapModal(product)}>
                <MapProductIcon />
              </button>
              <button className='add-cart-button' onClick={() => addProductIntoCart(product)}>
                <p className='text-add'>Adicionar</p>
                <PlusIcon />
              </button>
            </ProductButtons>
          </ProductItem>
        ))}
      </ResultsContainer>
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
        )}
      </Modal>
    </SearchContainer>
  )
}

export default Search
