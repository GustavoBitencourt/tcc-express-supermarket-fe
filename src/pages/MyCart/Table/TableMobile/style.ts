// style.ts
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .order-item {
    background: ${({ theme }) => theme.colors.white};
    padding: 0.5rem 0.5rem;
    border-radius: 8px;
    box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);
    align-items: center;
    display: flex;
    gap: 0.5rem;
    position: relative;
    margin: 1rem 1rem;
    margin: 0rem 1rem;

    .imgProduct {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }

    .divWidth {
      width: 100%;
    }

    .divWidth2 {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .price {
      color: ${({ theme }) => theme.colors.blackgray};
      font-family: 'Baloo Bhai 2', sans-serif;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }

    > div:first-child {
      img {
        width: 60px;
        height: auto;
        max-width: 100%;
        border-radius: 8px;
        margin-bottom: 0;
        margin-right: 1rem;
      }
    }
    .closeIcon {
      position: absolute;
      top: -1rem;
      right: 0;
      border: none;
      background: transparent;
    }

    > div:last-child {
      h4 {
        margin-bottom: 0.5rem;
        font-weight: 700;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.blackgray};
        text-transform: uppercase;
        font-family: 'Manrope' sans-serif;
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button {
          width: 20px;
          height: 20px;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .quantityBox {
        width: 40px;
        height: 34px;
        border: 1px solid ${({ theme }) => theme.colors.gray400};
        border-radius: 6px;
        color: ${({ theme }) => theme.colors.blackgray};
        text-align: center;
        font-family: Manrope;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .buttonRemove {
        background-color: ${({ theme }) => theme.colors.red};
        width: 40px;
        height: 36px;
        border-radius: 6px;
      }

      .buttonAdd {
        background-color: ${({ theme }) => theme.colors.green};
        width: 40px;
        height: 36px;
        border-radius: 6px;
      }
    }
  }
  .subtotal {
    position: sticky;
    bottom: 0;
    background: #fffbd3;
    border-radius: 8px;
    box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    font-family: 'Baloo Bhai 2', sans-serif;
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
    color: ${({ theme }) => theme.colors.blackgray};

    span {
      font-family: 'Manrope', sans-serif;
      font-weight: 500;
    }
  }
`

export const StatusTexts = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`

export const SubstituicaoText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.blackgray};
`

export const LimparListaText = styled.div`
  color: ${({ theme }) => theme.colors.redCart};
  font-size: 16px;
  font-style: normal;
  margin-right: 1rem;
  font-weight: 700;
`

export const AdditionalText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.blackgray};
  font-weight: 400;
  text-align: center;
  margin-top: -10px;
`

export const CartListText = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackgray};
  text-align: center;
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 1rem;
`
