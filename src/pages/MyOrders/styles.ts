import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 60px;
  position: relative;
`

export const TopBar = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  height: 8.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  transition: background-color 0.3s;

  img {
    width: 4rem;
    height: 1.5rem;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
  }

  span {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    margin-left: auto;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blackgray};
  font-size: 14px;
  font-weight: 700;
  margin-top: 13vh;
  padding-bottom: 2vh;
  text-align: center;
`

export const OrdersContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const OrderCard = styled.div<{ status: string }>`
  border: 1px solid
    ${({ status, theme }) =>
      status === 'PAID'
        ? theme.colors.green
        : status === 'CANCELED'
        ? theme.colors.red
        : theme.colors.gray400};
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const OrderTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.blackgray};
`

export const OrderDetails = styled.div`
  p {
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.blackgray};
  }

  h4 {
    margin: 10px 0 5px;
    color: ${({ theme }) => theme.colors.blackgray};
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 5px 0;
      color: ${({ theme }) => theme.colors.blackgray};
    }
  }
`

export const ButtonGoShop = styled.div`
  color: ${({ theme }) => theme.colors.green};
  text-align: center;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`

export const NoOrdersMessage = styled.div`
  color: ${({ theme }) => theme.colors.gray450};
  margin-top: 1rem;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 124.6%;
`

export const SidebarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
`

export const EmptyCartIcon = styled.img`
  width: 96px;
  height: 84px;
  margin: 0 auto;
  display: block;
  margin-top: 1rem;
`
