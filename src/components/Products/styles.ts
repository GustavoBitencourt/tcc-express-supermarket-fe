import { darken } from 'polished'

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .product {
    position: relative;
    background: ${({ theme }) => theme.colors.blue};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    span {
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;

      background: ${({ theme }) => theme.colors.green};
      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 1.125rem;
    }

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0.875rem;
    }

    div {
      margin-top: 0.875rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        background: ${({ theme }) => theme.colors.green};
        width: 6rem;
        height: 2.5rem;
        border: none;
        border-radius: 7%;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          color: ${({ theme }) => theme.colors.white};
          margin-right: 0.1rem;
        }

        svg {
          stroke: ${({ theme }) => theme.colors.white};
          stroke-width: 0.23rem;
          width: 1.3rem;
          height: 1.3rem;
        }

        &:hover {
          background: ${darken(0.1, '#56BA50')};
        }
      }
    }
  }
`
