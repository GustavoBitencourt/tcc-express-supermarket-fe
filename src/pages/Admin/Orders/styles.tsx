import styled from 'styled-components'

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
  justify-content: center;
  height: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};

  h2 {
    margin: 3rem;
    font-size: 20px;

    @media (max-width: 500px) {
      margin: 0;
    }
  }

  img {
    width: 80px;
    height: 50px;
  }
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
