import styled from 'styled-components'

export const Container = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #fffbd3;
  box-shadow: 0px 8.29091px 24.87273px 0px rgba(112, 144, 176, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .subs {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-left: 2rem;
  }

  .price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;

    .subtotal,
    .shipping {
      flex: 1;
      text-align: left;
      margin-right: 10px;

      span {
        color: ${({ theme }) => theme.colors.blackgray};
        font-family: 'Manrope';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
      }

      span strong {
        font-weight: 800;
        font-size: 16px;
      }
    }

    .total {
      margin-right: 3rem;
      text-align: right;
      span {
        color: ${({ theme }) => theme.colors.blackgray};
        font-family: 'Manrope';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
      }
    }

    .total span {
      color: ${({ theme }) => theme.colors.blackgray};
      font-family: 'Manrope';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .total span strong {
      color: ${({ theme }) => theme.colors.blackgray};
      font-family: 'Baloo Bhai 2';
      font-size: 25.227px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .confirm-button {
    width: 100%;
    text-align: center;

    button {
      background: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      padding: 10px;
      cursor: pointer;
      transition: background 0.3s;
      width: 90vw;

      &:hover {
        background-color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`
