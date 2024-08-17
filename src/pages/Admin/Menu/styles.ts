import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20rem;
  background-color: ${({ theme }) => theme.colors.green};

  svg {
    width: 10rem;
    height: auto;
    cursor: pointer;
  }

  h1 {
    margin: 0;
  }
`

export const AdminButton = styled(Link)`
  border: none;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  background-color: cadetblue;
  border-radius: 5px;
  cursor: pointer;
  background: none;
  transition: background-color 0.3s;
  text-align: center;
  width: 25rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PurchasesButtonStyled = styled(AdminButton)`
  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    svg {
      margin-left: 0;
      width: 60%;
      height: 60%;
    }
  }
`

export const ProductsButtonStyled = styled(AdminButton)`
  svg {
    width: 100%;
    height: 100%;
    margin-left: -5rem;
  }

  @media (max-width: 600px) {
    svg {
      margin-top: -5rem;
      margin-left: 0;
      width: 60%;
      height: 60%;
    }
  }
`

export const CustomersButtonStyled = styled(AdminButton)`
  svg {
    width: 100%;
    height: 100%;
    margin-left: -16rem;
  }

  @media (max-width: 600px) {
    svg {
      margin-top: -5rem;
      margin-left: 0;
      width: 60%;
      height: 60%;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  padding-top: 6rem;
  padding-bottom: 30rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
