import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
`

export const Button = styled(Link)`
  position: fixed;
  bottom: 1rem;
  width: 90vw;
  height: 3rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray450};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5%;
  @media (min-width: 475px) {
    max-width: 35%;
  }
`

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  font-weight: 700;
  font-size: 0.8rem;
  height: 5.5rem;
  text-transform: uppercase;
  @media (min-width: 475px) {
    max-width: 35%;
  }
`

export const Ruler = styled.img`
  width: 100%;
  position: fixed;
  margin-top: 1.7rem;

  @media (min-width: 475px) {
    max-width: 35%;
  }
`

export const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 0.8rem;
`

export const ShareIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.8rem;
`
export const TextContainer = styled.div`
  text-align: left;
`

export const Text = styled.div`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackgray};
  margin-top: 13rem;
`
export const Subtext = styled.div`
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blackgray};
  margin-top: 0.5rem;
`

export const SecondText = styled.div`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackgray};
  margin-top: 1rem;
  margin-left: -11rem;
`

export const NoItems = styled.img`
  width: 100%;

  @media (min-width: 475px) {
    max-width: 35%;
    margin-top: 3rem;
  }
`

export const EmptyCartIcon = styled.img`
  width: 96px;
  height: 84px;
  margin: 0 auto;
  display: block;
  margin-top: 4rem;
`

export const TextGreen = styled.div`
  color: ${({ theme }) => theme.colors.green};
  text-align: center;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`
