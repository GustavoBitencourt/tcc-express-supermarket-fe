import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  pointer-events: none;
`

export const IconContainer = styled.div`
  pointer-events: auto;
  cursor: pointer;
`

export const BarcodeText = styled.p`
  color: blue;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.blackgray};
  font-size: 16px;
  font-weight: bold;
  background-color: #fffbd3;
  width: 80%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 5px;
  text-align: center;
  font-family: 'Manrope', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
`

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgreen};
  }
  width: 80%;
  max-width: 300px;
`

export const ManualButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  width: 80%;
  max-width: 300px;
`
