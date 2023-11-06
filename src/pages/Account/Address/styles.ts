import styled from 'styled-components'

export const AddressContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding-bottom: 20px;
  position: relative;
`

export const AddressTopBar = styled.div`
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

  svg {
    width: 4rem;
    height: 1.5rem;
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.green};
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

export const AddressTitle = styled.h2`
  color: ${({ theme }) => theme.colors.blackgray};
  font-size: 14px;
  font-weight: 700;
  margin-top: 13vh;
  padding-bottom: 2vh;
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin-top: 6rem;
`

export const AddressFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const AddressLabel = styled.label`
  align-self: flex-start;
  margin-left: 0.4rem;
  margin-bottom: 5px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackgray};
  text-align: left;
`

export const Input = styled.input`
  width: 90vw;
  height: 5vh;
  padding: 10px;
  color: ${({ theme }) => theme.colors.blackgray};
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 6px;
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

export const AddressButton = styled.button`
  width: 90vw;
  height: 7vh;
  padding: 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  position: fixed;
  bottom: 20px;

  @media screen and (min-width: 720px) {
    width: 500px;
    height: 50px;
    font-size: 24px;
  }
`

export const AddressSelect = styled.select`
  width: 90vw;
  height: 5vh;
  padding: 10px;
  color: ${({ theme }) => theme.colors.blackgray};
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 6px;
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
