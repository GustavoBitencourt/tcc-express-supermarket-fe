import styled from 'styled-components'
import { ReactComponent as ShrinkIcon } from '../../../assets/shrink-icon.svg'

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: gray;
  overflow-x: hidden;
`

export const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};

  img {
    width: 80px;
    height: 50px;
    margin-left: 5rem;
    margin-right: 5rem;
  }

  a:first-child img {
    width: 35px;
    height: auto;
  }
`

export const AdminTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 + h2 {
    margin-left: 0.5rem;
  }
`

export const AdminTitle = styled.h2`
  font-weight: 200;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`

export const OrderControl = styled.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Manrope', sans-serif;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`

export const StyledTable = styled.table`
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.blackgray};
  border-radius: 1rem;
  overflow: hidden;

  th,
  td {
    border: 1px solid #ababab;
    padding: 13px;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    height: 5rem;
    color: ${({ theme }) => theme.colors.black};
  }

  th {
    background-color: ${({ theme }) => theme.colors.darkgreen};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;

    &:last-child {
      background-color: ${({ theme }) => theme.colors.gray450};
    }
  }

  th:nth-child(9),
  td:nth-child(9) {
    width: 15%;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    th,
    td {
      display: block;
      width: 100%;
    }

    th {
      text-align: left;
    }
  }
`

export const StyledTableRow = styled.tr`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const ProductListContainer = styled.div`
  margin-top: 7rem;
  max-height: calc(100vh - 80px);
`

export const ExpandButton = styled.button<{ isExpanded: boolean }>`
  background-color: ${({ isExpanded, theme }) => (isExpanded ? '#8d3e3e' : theme.colors.green)};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${({ isExpanded, theme }) =>
      isExpanded ? '#552525' : theme.colors.darkgreen};
  }

  &:focus {
    outline: none;
  }
`

export const StyledShrinkIcon = styled(ShrinkIcon)`
  background-color: #8d3e3e;
`

export const StyledExpandIconColumn = styled.td<{ isExpanded: boolean }>`
  background-color: ${({ isExpanded, theme }) => (isExpanded ? '#8d3e3e' : theme.colors.green)};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  button {
    color: inherit;
  }

  &:hover {
    background-color: ${({ isExpanded, theme }) =>
      isExpanded ? '#552525' : theme.colors.darkgreen};
  }
`
