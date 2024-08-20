import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Inner = styled.main`
  padding: 2rem 2.5rem 0;
  border-radius: 8px;
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

export const AddressFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const TitleText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.blackgray};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 540px) {
    .grouped {
      flex-direction: column;
    }
  }
`

export const ConfirmButton = styled.button`
  width: 90vw;
  height: 5vh;
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

export const SelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`

export const IconButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  margin-top: 1rem;

  &:focus {
    outline: none;
  }
`

export const TextCenter = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 0rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.blackgray};
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`
