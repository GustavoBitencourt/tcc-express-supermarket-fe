import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: gray;
`

export const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};

  img {
    width: 80px;
    height: 50px;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`

export const AdminTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 + h2 {
    margin-left: 0.5rem;
  }
`

export const AdminTitle = styled.h2`
  font-weight: 200;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`

export const OrderControl = styled.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Manrope', sans-serif;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.blackgray};

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }

  th {
    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    th,
    td {
      display: block;
      width: 100%;
    }

    th {
      text-align: left;
    }
  }
`

export const StyledTableRow = styled.tr`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const ProductListContainer = styled.div`
  margin-top: 7rem;
  overflow-y: auto;
  max-height: calc(100vh - 80px);
`

export const AccessProducts = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  font-size: 10px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  position: fixed;
  left: 20rem;
  top: 4.7rem;
  cursor: pointer;
`
