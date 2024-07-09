import React from 'react'
import { Link } from 'react-router-dom'
import { SearchContainer, TopBar, CartCount, SearchForm, SearchInput, SearchButton } from './styles'

import { ReactComponent as LeftArrowIcon } from '../../assets/arrow-left-category.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart-details.svg'
import { ReactComponent as MagnifyingIcon } from '../../assets/magnifying-home.svg'
import { useCart } from '../../hooks/useCart'

const Search: React.FC = () => {
  const { cart } = useCart()

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
        <SearchInput type='text' placeholder='Digite sua pesquisa...' />
        <SearchButton>
          <MagnifyingIcon />
        </SearchButton>
      </SearchForm>
    </SearchContainer>
  )
}

export default Search
