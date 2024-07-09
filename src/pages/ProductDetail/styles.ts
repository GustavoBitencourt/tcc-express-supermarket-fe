import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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
`

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    width: 5.5rem;
    height: 2.5rem;
  }
`

export const CartCount = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  top: -0rem;
  right: 0.6rem; 
  padding: 0.2rem 0.5rem;
  z-index: 5;
`

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`

export const PriceRectangle = styled.div`
  background-color: #fffbd3;
  width: 90%;
  height: 5rem;
  padding: 20px;
  margin: 20px auto;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 2rem;
`

export const PriceButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const ExpandedPriceRectangle = styled.div`
  background-color: #fffbd3;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
`

export const ExpandedPriceContent = styled.div`
  text-align: center;
  transform: rotate(90deg);

  h2 {
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blackgray};
    margin-bottom: 5rem;
    margin-top: -5rem;    
  }

  p {
    font-size: 13rem;
    font-family: 'Baloo Bhai 2', cursive;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blackgray};
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  text-align: center;
  position: relative;

  img {
    width: 50%;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blackgray};
    margin-top: 0.8rem;
  }

  .rectangle {
    background-color: #fffbd3;
    width: 90%;
    height: 5rem;
    padding: 20px;
    margin: 20px auto;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }

  p {
    font-size: 4rem;
    font-family: 'Baloo Bhai 2', cursive;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blackgray};
    position: relative;
    z-index: 1;
  }

  .important-text {
    font-size: 12px;
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blackgray};
    text-align: left;
    margin-top: 1rem;
    margin-left: 5%;
    margin-right: 5%;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .disclaimer-text {
    font-size: 13px;
    font-family: 'Manrope', sans-serif;
    font-weight: regular;
    color: #606060;
    text-align: left;
    margin-top: 1rem;
    margin-left: 5%;
    margin-right: 5%;
  }

  .centralized-disclaimer-text {
    font-size: 12px;
    font-family: 'Manrope', sans-serif;
    font-weight: regular;
    color: #606060;
    text-align: center;
    margin-top: 0.5rem;
  }

  .search-store-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-top: 1rem;

    svg {
      margin-right: 8px;
    }
  }

  .add-cart-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.green};
    border: none;
    cursor: pointer;
    padding: 23px 20px;
    border-radius: 8px;
    margin-top: 1rem;
    width: 92%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5.5rem;

    p {
      font-size: 16px;
      font-family: 'Manrope', sans-serif;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
