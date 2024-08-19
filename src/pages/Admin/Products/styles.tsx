import styled from 'styled-components'

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 40px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.darkgreen};
  margin: 5rem auto;
  width: 60%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
  align-items: center;
`

export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  width: 15%;
  color: ${({ theme }) => theme.colors.blackgray};
  margin-bottom: 0.2rem;
`

export const InputField = styled.input`
  width: 60%;
  font-size: 14px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  transition: border-color 0.3s ease;
  margin-top: 0.2rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.darkgreen};
    outline: none;
  }
`

export const StyledButton = styled.button<{ cancel?: boolean }>`
  background-color: ${({ cancel, theme }) => (cancel ? '#8D3E3E' : theme.colors.green)};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 20px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Manrope', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ cancel, theme }) => (cancel ? '#7C2F2F' : theme.colors.darkgreen)};
  }
`

export const CloseIcon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 15px;

  svg {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const FormLabel = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  width: 40%;
  font-size: 12px;
`

export const FormInput = styled.input`
  width: 60%;
  padding: 0.5rem;
  border: 1px solid #ababab;
  border-radius: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.blackgray};
`

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  margin-right: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`

export const ActionIcon = styled.span<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 100%;

  cursor: pointer;

  svg {
    width: 5rem;
    height: 5rem;
  }
`

export const ActionTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    text-align: center;
    padding: 0;
    border: none;

    &:first-child {
      border-left: none;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }
`

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: gray;
  overflow-x: hidden;
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

  a:first-child img {
    width: 35px;
    height: auto;
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

export const ProductControl = styled.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Manrope', sans-serif;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
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

export const ProductListContainer = styled.div`
  margin-top: 7rem;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;
  box-sizing: border-box;
`

export const StyledTable = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 1rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.blackgray};
  border-radius: 10px;
  overflow: hidden;
  table-layout: fixed;

  th,
  td {
    border: 0.5px solid #ababab;
    padding: 15px;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }

  th {
    background-color: ${({ theme }) => theme.colors.darkgreen};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    height: 4rem;

    &:last-child {
      background-color: ${({ theme }) => theme.colors.gray450};
    }
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  th:first-child,
  td:first-child {
    width: 30rem;
  }

  @media (max-width: 768px) {
    width: 100%;
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

export const AddProductButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 5rem;
  width: 200px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgreen};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 150px;
    font-size: 14px;
    padding: 8px;
    bottom: 15px;
    right: 15px;
  }
`
