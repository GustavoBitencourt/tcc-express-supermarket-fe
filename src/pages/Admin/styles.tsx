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

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.green};
`

export const HeaderText = styled.h2`
  font-size: 20px;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`

export const LogoutIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const AdminButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
  text-align: center;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgreen};
  }

  img {
    width: 100%;
    height: 100%;
  }
`

export const PasswordModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  width: 400px;
  height: auto;
  border-radius: 15px;

  label {
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.blackgray};
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    text-align: center;
  }

  input {
    width: 80%;
    padding: 8px;
    margin: 0 auto 10px;
    border: 1px solid ${({ theme }) => theme.colors.green};
    display: block;
    border-radius: 4px;

    &:focus {
      border-color: ${({ theme }) => theme.colors.darkgreen};
      outline: none;
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.darkgreen};
    }
  }

  button {
    margin-top: 10px;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
    width: 80%;
    display: block;
    margin: 0 auto;
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
    text-align: center;
  }

  .panelText {
    text-align: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkgreen};
    margin-bottom: 2rem;
    margin-top: -1rem;
    font-size: 20px;
  }
`

export const LogoImage = styled.img`
  display: block;
  margin: 0 auto 10px;
  width: 200px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
