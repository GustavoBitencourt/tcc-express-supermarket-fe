// styles.tsx
import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: gray;
`

export const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};

  h2 {
    margin: 3rem;
    font-size: 20px;

    @media (max-width: 500px) {
      margin: 0;
    }
  }

  img {
    width: 80px;
    height: 50px;
  }
`

export const ProductListContainer = styled.div`
  margin-top: 7rem;
  overflow-y: auto;
  max-height: calc(100vh - 80px);
`

export const EditFormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  width: 80%;

  label {
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkgreen};
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
  }
`

export const CloseIcon = styled.div`
  position: absolute;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`
