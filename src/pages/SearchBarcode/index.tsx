import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Webcam from 'react-webcam'
import Quagga from 'quagga'
import {
  SearchBarcodeContainer,
  TopBar,
  CameraContainer,
  ResultText,
  CloseButton,
  ScannerOverlay,
  MessageText,
} from './styles'
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg'

const SearchBarcode: React.FC = () => {
  const [barcode, setBarcode] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const webcamRef = useRef<Webcam>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleDetected = (result: string | null) => {
    setLoading(false)
    if (result) {
      setBarcode(result)
      setMessage('Código de barras detectado!')
      console.log(`Código de barras detectado: ${result}`)
      navigate(`/product/${result}`)
    } else {
      setMessage('Código de barras inválido ou não encontrado.')
      console.log('Código de barras inválido ou não encontrado.')
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (barcode) {
        // Se um código de barras válido foi encontrado, pare a captura
        return
      }
      const imageSrc = webcamRef.current?.getScreenshot()
      if (imageSrc && canvasRef.current) {
        setLoading(true)
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const img = new Image()
        img.src = imageSrc
        img.onload = () => {
          context?.drawImage(img, 0, 0, canvas.width, canvas.height)
          const imageData = context?.getImageData(0, 0, canvas.width, canvas.height)
          if (imageData) {
            Quagga.decodeSingle(
              {
                src: imageSrc,
                numOfWorkers: 0,
                inputStream: {
                  size: 800, // restringir o tamanho da entrada para 800px de largura (lado longo)
                },
                decoder: {
                  readers: ['code_128_reader'], // Lista de leitores ativos
                },
              },
              function (result: any) {
                if (result && result.codeResult) {
                  handleDetected(result.codeResult.code)
                } else {
                  handleDetected(null)
                }
              },
            )
          }
        }
      }
    }, 500) // Aumentar a frequência para 500ms
    return () => clearInterval(interval)
  }, [navigate, barcode]) // Adicione 'barcode' às dependências do useEffect

  return (
    <SearchBarcodeContainer>
      <TopBar>
        <CloseButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </CloseButton>
        <h1>Escanear Código de Barras</h1>
      </TopBar>
      <CameraContainer>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width={300}
          height={300}
        />
        <ScannerOverlay>
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </ScannerOverlay>
      </CameraContainer>
      {loading && <MessageText>Lendo o código de barras...</MessageText>}
      {message && <MessageText>{message}</MessageText>}
      {barcode && <ResultText>Código de Barras: {barcode}</ResultText>}
    </SearchBarcodeContainer>
  )
}

export default SearchBarcode
