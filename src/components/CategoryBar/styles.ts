import styled from 'styled-components'

export const CategoryBarWrapper = styled.div`
display: flex;
align-items: center; /* Vertically center items */
background-color: ${({ theme }) => theme.colors.green};
padding: 0.75rem 0;

width: 100vw;
padding-left: 0.5rem;
margin-left: calc(-50vw + 50%);
box-sizing: border-box;
margin-top: 2rem;

@media (min-width: 721px) {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  margin-left: 0;
}
}
`

export const CategoryIcon = styled.img`
width: 4rem; /* Largura inicial */
height: 4rem; /* Altura inicial */
margin-right: 0.5rem;

@media (min-width: 720px) {
  width: 2.5rem; /* Largura maior para telas maiores */
  height: 2.5rem; /* Altura maior para telas maiores */
}
}
`
export const SmallArrowIcon = styled.img`
  width: 2rem; /* Largura menor para o ícone da seta */
  height: 2rem; /* Altura menor para o ícone da seta */
}`

export const MagnifyGlassIcon = styled.img`
  width: 2rem; /* Largura do ícone de lupa */
  height: 2rem; /* Altura do ícone de lupa */
  margin-left: auto; /* Empurre o ícone de lupa para a direita */
}`

export const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`
