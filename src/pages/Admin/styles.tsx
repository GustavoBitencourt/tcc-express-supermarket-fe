import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.green};
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
    font-family: 'Manrope', sans-serif;
    font-weight: 800;

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
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  max-width: 200px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  transition: background-color 0.3s;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgreen};
  }
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
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
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
    margin-top: 10px;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
    width: 100%;
    max-width: 200px;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightgreen};
    }
  }
`

export const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
  }

  .panelText {
    text-align: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkgreen};
    margin-bottom: 15px;
    font-size: 20px;
  }
`
