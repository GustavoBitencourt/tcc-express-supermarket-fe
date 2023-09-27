import { darken } from 'polished'

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Tamanho mínimo do produto */
  gap: 1rem; /* Espaçamento entre os produtos */

  .product {
    background: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    border-radius: 3%;
    display: flex;
    flex-direction: column; /* Alterado para flex-direction: column */
    justify-content: space-between; /* Alinha os elementos no início e no final do card */
    margin-top: 1rem;
    overflow: hidden;

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
      font-size: 2rem; /* Tamanho do valor principal */
      color: ${({ theme }) => theme.colors.blackgray};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2.5rem;
    }

    .buttons {
      display: flex;
      justify-content: flex-start; /* Alinhar à esquerda */
      align-items: center; /* Alinhar verticalmente no centro */
    }

    .map-button {
      background: transparent; /* Fundo transparente para o botão de mapa */
      border: none;
      width: 3.5rem; /* largura do botão de mapa */
      height: 3.5rem; /* altura do botão de mapa */
      margin-right: 0.5rem; /* Espaçamento entre os botões */

      svg {
        width: 100%; /* Tamanho do ícone do mapa */
        height: 100%; /* Tamanho do ícone do mapa */
      }
    }

    button {
      flex: none; /* Para dividir o espaço igualmente entre os botões */
      background: ${({ theme }) => theme.colors.green};
      border: none;
      width: 5.8rem;
      height: 2.8rem; /* altura dos botões */
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

      &:hover {
        background: ${darken(0.1, '#56BA50')};
      }
    }
  }
`
