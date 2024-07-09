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
} from './styles'
import { ReactComponent as LeftArrowIcon } from '../../assets/arrow-left-category.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart-details.svg'
import { ReactComponent as MagnifyingIcon } from '../../assets/magnifying-home.svg'
import { useCart } from '../../hooks/useCart'
import { Sidebar } from '../../components/Sidebar'
import { getAllProducts } from '../../services/api'
import { ProductData } from '../../interfaces/ProductData'

const Search: React.FC = () => {
  const { cart } = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState<ProductData[]>([])
  const [searchResults, setSearchResults] = useState<ProductData[]>([])

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
            <div>
              <h2>{product.name}</h2>
              <p>{`R$ ${product.price}`}</p>
            </div>
          </ProductItem>
        ))}
      </ResultsContainer>
      <Sidebar />
    </SearchContainer>
  )
}

export default Search
