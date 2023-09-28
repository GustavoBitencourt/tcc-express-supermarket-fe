import styled, { css } from 'styled-components'

interface ContainerProps {
  isMenuOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.gray100};
  box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.1);

  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          width: 16.3rem;
        `
      : css`
          width: 7.75rem;
        `}

  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: width 0.3s;

  button {
    background: none;
    width: 100%;
    border: none;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem; /* Espaçamento entre os itens do menu */
    }

    li {
      a {
        width: fit-content;
        position: relative;
        padding-left: 1rem; /* espaçamento esquerdo */
        padding-right: 1rem; /* espaçamento direito */

        display: flex;
        flex-direction: column; /* texto abaixo do ícone */
        align-items: center;
        gap: 0.75rem; /* Espaçamento entre o ícone e o texto */

        svg {
          width: 2rem; /* Tamanho dos ícones */
          height: 2rem; /* Tamanho dos ícones */
          transition: fill 0.3s;
        }

        svg.active path {
          stroke: ${({ theme }) => theme.colors.primary};
        }

        span {
          font-size: 0.8rem; /* Tamanho menor para o texto */
          font-weight: 700;
          color: ${({ theme }) => theme.colors.blackgray};
          transition: color 0.3s;
        }

        &.active {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);
            width: 5px;
            height: calc(100% + 10px);

            border-radius: 0 5px 5px 0;
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    overflow-y: auto;
    padding: 0 0;

    button {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        flex-direction: row;
        align-items: center;
      }

      li {
        a {
          flex-direction: column;
          padding: 0;

          svg {
            width: 1.5rem; /* Tamanho dos ícones em telas menores */
            height: 1.5rem; /* Tamanho dos ícones em telas menores */
          }

          span {
            display: block; /* Mostrar o texto abaixo do ícone em telas menores */
            font-size: 0.8rem; /* Tamanho menor para o texto em telas menores */
          }

          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
`
