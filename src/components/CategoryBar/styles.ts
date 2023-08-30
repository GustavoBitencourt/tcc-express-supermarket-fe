import styled from 'styled-components'

export const CategoryBarWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 0.75rem 0;

  width: 100vw;
  padding-left: 0.5rem;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;

  @media (min-width: 721px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    margin-left: 0;
  }
`

export const CategoryTitle = styled.h1`
  margin-left: 1.875rem;
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`
