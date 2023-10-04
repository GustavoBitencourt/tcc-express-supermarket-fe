import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`

export const GreenBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  height: 12rem;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`

export const LogoSvgLogin = styled.div`
  display: flex;
  justify-content: flex-end; /* Alinhe o ícone à direita */
  svg {
    width: 272px;
    height: 152px;
    margin-top: 5rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);
  }
`

export const FormWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 0;
  margin-top: 10rem;

  &::before {
    content: '';
    position: absolute;
    top: -3rem;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #fffbd3, #fffbd3);
    filter: blur(50px);
    z-index: -1;
    border-radius: 8px;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackgray};
  text-align: center;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
  box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);
  margin-bottom: 8px;
  margin-top: 0.5rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green}; /* Cor da borda quando selecionado */
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.gray450};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 3rem;
`

export const ForgotPasswordLink = styled(RouterLink)`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkgreen};
`

export const NotAccountText = styled.p`
  color: ${({ theme }) => theme.colors.darkgreen};
  font-weight: 400;
  margin-top: 4rem;
`

export const SignupLink = styled(RouterLink)`
  font-size: 14px;
  margin-top: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkgreen};
`

export const RegisterText = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.darkgreen};
  text-decoration: none;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`
