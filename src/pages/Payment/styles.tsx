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

  @media (max-width: 540px) {
    .grouped {
      flex-direction: column;
    }
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

export const IconWrapper = styled.div`
  cursor: pointer;
  margin: 0 0.4rem;

  &:hover {
    opacity: 0.8;
  }
`
