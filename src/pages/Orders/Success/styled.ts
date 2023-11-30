import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 0 auto;
`

export const Inner = styled.main`
  background: #fffbd3;
  box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);
  color: ${({ theme }) => theme.colors.blackgray};
  font-family: 'Manrope';
  font-weight: 700;
  padding: 2rem 2.5rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 5rem;
`

export const Title = styled.h1``

export const SubTitle = styled.h4`
  margin: 1rem 0;
`

export const Table = styled.table`
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem;
  color: white;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 100;
  font-weight: 700;
  font-size: 0.6rem;
  height: 5.5rem;
  text-transform: uppercase;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`
