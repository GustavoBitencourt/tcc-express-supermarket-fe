import styled from 'styled-components'

export const CategoryBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 0.75rem 0;
  height: 6rem;

  width: 100vw;
  max-width: 100vw;
  padding: 0.5rem;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
  margin-top: 2rem;

  @media (min-width: 721px) {
    position: fixed;
    margin-top: -2rem;
    left: 0;
    z-index: 2;
    margin-left: 0;
    width: 100%;
  }
`

export const CategoryIcon = styled.img`
  width: 4rem; /* Largura inicial */
  height: 4rem; /* Altura inicial */
  margin-left: 1rem;
  margin-right: 0.75rem;

  @media (min-width: 720px) {
    width: 2.5rem; /* Largura maior para telas maiores */
    height: 2.5rem; /* Altura maior para telas maiores */
  }
`
export const SmallArrowIcon = styled.img`
  width: 1.5rem; /* Largura menor para o ícone da seta */
  height: 1.5rem; /* Altura menor para o ícone da seta */
  margin-left: 1rem;
`

export const MagnifyGlassIcon = styled.img`
  width: 1.5rem; /* Largura do ícone de lupa */
  height: 1.5rem; /* Altura do ícone de lupa */
  margin-left: auto;
  margin-right: 1.5rem;
`

export const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`
