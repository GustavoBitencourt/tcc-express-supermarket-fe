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
  padding: 1.2rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.green};
  font-size: 1rem;
  padding-right: 2.5rem;
  box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);

  &:focus {
    border-color: ${({ theme }) => theme.colors.darkgreen};
    outline: none;
  }
`

export const SearchButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.blackgray};
  }
`

export const ResultsContainer = styled.div`
  width: 90%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.blackgray};
  text-align: left;
  border-radius: 1rem;
  box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);

  img {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: cover;
    margin-right: 1rem;
    margin-top: 1.2rem;
  }

  &:last-child {
    border-bottom: none;
  }
`

export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  h2 {
    font-family: 'Manrope', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    color: ${({ theme }) => theme.colors.blackgray};
  }

  p {
    font-family: 'Baloo Bhai 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    color: ${({ theme }) => theme.colors.blackgray};
    margin-top: 1rem;
  }
`

export const ProductButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  .search-store-button {
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    svg {
      width: 3rem;
      height: 3rem;
    }
  }

  .add-cart-button {
    flex: none;
    background: ${({ theme }) => theme.colors.green};
    border: none;
    width: 5.8rem;
    height: 2.5rem;
    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
  }

  .text-add {
    color: ${({ theme }) => theme.colors.white};
    margin-right: 0.5rem;
    font-size: 0.85rem;
  }
`
