// styles.ts
import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100vw;
`

export const TopBar = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  width: 100%;
`

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  text-align: center;
  position: relative; /* Adicionando posição relativa */

  img {
    width: 50%;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blackgray};
  }

  .rectangle {
    background-color: #fffbd3;
    width: 90%;
    height: 5rem;
    padding: 20px; /* Aumentando o padding */
    position: absolute;
    bottom: 0; /* Alinhando ao fundo do container */
    left: 50%; /* Centralizando horizontalmente */
    transform: translateX(-50%); /* Ajustando a centralização horizontal */
    z-index: -1; /* Colocando o retângulo ao fundo */
    border-radius: 1rem;
  }

  p {
    font-size: 4rem;
    font-family: 'Baloo Bhai 2', cursive;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blackgray};
    position: relative; /* Adicionando posição relativa */
    z-index: 1; /* Colocando o texto sobre o retângulo */
  }

  .important-text {
    font-size: 12px;
    font-family: 'Manrope', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blackgray};
    text-align: left;
    margin-top: 1rem;
    margin-left: 10%; /* Alinhando à esquerda */
  }

  .disclaimer-text {
    font-size: 12px;
    font-family: 'Manrope', sans-serif;
    font-weight: regular;
    color: #606060;
    text-align: left;
    margin-top: 1rem;
    margin-left: 10%; /* Alinhando à esquerda */
  }
`
