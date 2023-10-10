import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AccountMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin-left: 1rem;
  margin-top: 3vh;
`

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.35rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkgreen};
  transition: opacity 0.2s;
  font-size: 14px;

  &:hover {
    opacity: 0.7;
  }
`

export const MenuIcon = styled.img`
  width: 28px;
  height: 28px;
`

export const MenuText = styled.span`
  font-weight: 700;
`

export const MenuDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray450};
  margin: 1.2rem 0;
`
