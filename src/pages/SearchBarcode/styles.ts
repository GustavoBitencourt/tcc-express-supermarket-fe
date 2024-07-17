import styled from 'styled-components'

export const SearchBarcodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`

export const CameraContainer = styled.div`
  position: relative;
`

export const ScannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid red;
  box-sizing: border-box;
`

export const ResultText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const MessageText = styled.p`
  margin-top: 5rem;
  font-size: 38px;
  color: red;
`
