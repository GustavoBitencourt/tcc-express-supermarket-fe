import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: gray;
`

export const AdminButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
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

export const AdminButton = styled(Link)`
  margin: 10px;
  padding: 20px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  transition: background-color 0.3s;
  text-align: center;
`

export const AdminButtonAccess = styled.button`
  margin: 10px;
  padding: 20px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  transition: background-color 0.3s;
  text-align: center;
`

export const PasswordModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  label {
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.blackgray};
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.colors.green};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.green};
    }
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  .cancelButton {
    background-color: ${({ theme }) => theme.colors.redCart};
    margin-left: 10px;
    &:hover {
      background-color: #ff0000;
    }
  }
`
