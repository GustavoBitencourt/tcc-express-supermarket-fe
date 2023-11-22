import styled from 'styled-components'

export const TopBarContainer = styled.div`
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
  font-size: 0.6rem;
  height: 5.5rem;
  text-transform: uppercase;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`
