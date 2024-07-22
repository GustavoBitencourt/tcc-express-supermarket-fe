import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`

export const BarcodeText = styled.p`
  color: blue; /* Texto em azul */
  font-size: 24px;
  font-weight: bold;
`

export const SearchCode = styled.p`
  color: black;
  font-size: 24px;
  font-weight: bold;
`

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgreen};
  }
`
