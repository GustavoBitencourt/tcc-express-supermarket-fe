import { darken } from 'polished'

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Tamanho mínimo do produto */
  gap: 1rem; /* Espaçamento entre os produtos */

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr); /* Exibir dois produtos por linha em telas menores */
  }

  .product {
    background: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column; /* Alterado para flex-direction: column */
    justify-content: space-between; /* Alinha os elementos no início e no final do card */
    margin-top: 1rem;

    span {
      position: absolute;
      top: -0.25rem;
      left: -0.25rem;

      background: ${({ theme }) => theme.colors.green};
      width: 1.5rem; /* Tamanho do círculo */
      height: 1.5rem; /* Tamanho do círculo */
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 0.875rem; /* Tamanho da fonte */
    }

    h2 {
      margin-bottom: 0.5rem; /* Margem inferior reduzida */
      font-weight: 700;
      font-size: 1rem; /* Tamanho da fonte */
      text-align: center;
      color: ${({ theme }) => theme.colors.blackgray};
    }

    .product-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 7.5rem; /* Altura da imagem */
      border-radius: 4px;
      margin-bottom: 0.25rem; /* Margem inferior */
    }

    p {
      font-size: 0.75rem;
    }

    .price {
      font-family: 'Baloo Bhai 2', cursive;
      font-style: normal;
      font-weight: 700;
      font-size: 2rem; /* Tamanho da fonte */
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2.5rem;
      color: ${({ theme }) => theme.colors.blackgray};
    }

    strong {
      font-size: 1.5rem;
      font-weight: 500;
    }

    .buttons {
      display: flex;
      justify-content: flex-start; /* Alinhar à esquerda */
      align-items: center; /* Alinhar verticalmente no centro */
      margin-top: 1rem;

      .map-button {
        background: transparent; /* Fundo transparente para o botão de mapa */
        border: none;
        width: 2rem; /* Largura do botão de mapa (ajuste conforme necessário) */
        height: 1.75rem; /* Altura do botão de mapa (ajuste conforme necessário) */
        margin-right: 0.5rem; /* Espaçamento entre os botões */

        svg {
          width: 100%; /* Tamanho do ícone do mapa */
          height: 100%; /* Tamanho do ícone do mapa */
        }
      }
    }

    button {
      flex: 1; /* Para dividir o espaço igualmente entre os botões */
      background: ${({ theme }) => theme.colors.green};
      border: none;
      width: 5.8rem;
      height: 1.75rem;
      border-radius: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.5rem; /* Espaçamento entre os botões */

      p {
        color: ${({ theme }) => theme.colors.white};
        margin-right: 0.5rem;
        font-size: 0.85rem; /* Tamanho da fonte */
      }

      svg {
        stroke: ${({ theme }) => theme.colors.white};
        stroke-width: 0.23rem;
        width: 1rem; /* Tamanho do ícone */
        height: 1rem; /* Tamanho do ícone */
      }

      &:hover {
        background: ${darken(0.1, '#56BA50')};
      }
    }
  }
  @media (min-width: 721px) {
    margin-top: 5rem;
  }
`
