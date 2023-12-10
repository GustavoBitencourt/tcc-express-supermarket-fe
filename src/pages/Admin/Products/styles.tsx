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

export const ProductListContainer = styled.div`
  margin-top: 7rem;
  overflow-y: auto;
  max-height: calc(100vh - 80px);
`

export const EditFormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  width: 60%;

  label {
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 5px;
  }

  .input-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.3rem;
  }

  input {
    width: 10rem;
    font-size: 11px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: 800;
    font-family: 'Manrope', sans-serif;
    color: ${({ theme }) => theme.colors.black};
  }

  button {
    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Manrope', sans-serif;

    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }
`

export const CloseIcon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px; /* Posicionei o ícone no canto superior direito */

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra em cada linha */
`

export const AddProductButton = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  font-size: 10px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  position: fixed;
  right: 20rem;
  top: 4.7rem;
  cursor: pointer;
  z-index: 100;
`

export const AccessOrdersButton = styled.div`
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
  z-index: 100;
`
