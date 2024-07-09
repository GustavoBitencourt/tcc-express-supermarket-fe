import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

export const TopBar = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  width: 100%;

  h1 {
    font-size: 16px;
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }

  .arrow-left {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .cart-icon {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      width: 5.5rem;
      height: 2.5rem;
    }
  }
`
export const CartCount = styled.span`
  color: ${({ theme }) => theme.colors.darkgreen};
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  top: -0rem;
  right: 0.6rem;
  padding: 0.2rem 0.5rem;
  z-index: 5;
`

export const SearchForm = styled.form`
  display: flex;
  width: 90%;
  margin-top: 2rem;
  position: relative;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px 0 0 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  font-size: 1rem;
`

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  padding: 1rem;
  border-radius: 0 8px 8px 0;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  }
`
