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
`

export const CategoryIcon = styled.img`
  width: 4rem; /* Initial width */
  height: 4rem; /* Initial height */
  margin-right: 0.5rem;

  @media (min-width: 720px) {
    width: 2.5rem; /* Larger width for larger screens */
    height: 2.5rem; /* Larger height for larger screens */
  }
`

export const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`
