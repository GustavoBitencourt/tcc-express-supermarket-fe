import styled from 'styled-components'

export const RegisterContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding-bottom: 20px;
`

export const TopBar = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
  font-size: 18px;
  font-weight: bold;

  img {
    width: 4rem;
    height: 1.5rem;
    cursor: pointer;
  }

  span {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blackgray};
  font-size: 14px;
  font-weight: 700;
  margin-top: 8%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin-top: 20px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`

export const Label = styled.label`
  align-self: flex-start;
  margin-left: 0.4rem;
  margin-bottom: 5px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackgray};
`

export const Input = styled.input`
  width: 90vw;
  height: 48px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.blackgray};
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray400};
  box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green};
  }

  @media screen and (min-width: 720px) {
    width: 500px;
    height: 50px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.blackgray};
    font-weight: 400;
    font-size: 16px;
  }
`

export const Button = styled.button`
  width: 90vw;
  height: 12vw;
  padding: 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.gray450};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray400};
  cursor: pointer;
  margin-top: auto;

  @media screen and (min-width: 720px) {
    width: 500px;
    height: 50px;
    font-size: 24px;
  }
`
