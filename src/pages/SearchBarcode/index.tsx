import React, { useRef, useState, useEffect, useCallback } from 'react'
import Webcam from 'react-webcam'
import { BrowserMultiFormatReader } from '@zxing/library'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getAllProducts } from '../../services/api'
import {
  Container,
  Overlay,
  IconContainer,
  BarcodeText,
  ErrorMessage,
  Button,
  ManualButton,
  InputContainer,
  Input,
  ButtonContainer,
} from './styles'
import { ReactComponent as LeftArrowIcon } from '../../assets/arrow-left-category.svg'
import { ReactComponent as CamIcon } from '../../assets/cam-icon.svg'

const SearchBarcode: React.FC = () => {
  const webcamRef = useRef<Webcam>(null)
  const navigate = useNavigate()
  const [cameraOn, setCameraOn] = useState<boolean>(true)
  const [description, setDescription] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([])
  const [deviceId, setDeviceId] = useState<string | undefined>()
  const [manualInput, setManualInput] = useState<string>('')
  const [manualMode, setManualMode] = useState<boolean>(false)

  const fetchProductDescription = async (code: string) => {
    try {
      const response = await axios.get(`https://api.cosmos.bluesoft.com.br/gtins/${code}.json`, {
        headers: {
          'User-Agent': 'Cosmos-API-Request',
          'Content-Type': 'application/json',
          'X-Cosmos-Token': '57Cj2rhSthh5WkOUMrDqmA',
        },
      })
      if (response.status === 200) {
        const desc = response.data.description
        setDescription(desc)
        setError(null)
        searchProductByDescription(desc)
      }
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setDescription(null)
        setError('Produto não encontrado')
      } else {
        setDescription(null)
        setError('Produto não encontrado, procure um funcionário para verificar o preço')
      }
    }
  }

  const searchProductByDescription = async (desc: string) => {
    try {
      const productsResponse = await getAllProducts()
      const products = productsResponse.data

      const words = desc.split(' ').filter((word) => word.length > 3)
      for (const word of words) {
        const regex = new RegExp(`\\b${word.toLowerCase()}\\b`)
        const foundProduct = products.find((product: any) => regex.test(product.name.toLowerCase()))
        if (foundProduct) {
          console.log(`Palavra encontrada: ${word}`)
          console.log(`Produto correspondente: ${foundProduct.name}`)
          navigate(`/product/${foundProduct.id}`)
          return
        }
      }
      setDescription(null)
      setError('Produto não encontrado, procure um funcionário para verificar o preço')
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
      setDescription(null)
      setError('Erro ao buscar produtos')
    }
  }

  const handleScan = useCallback(async () => {
    if (!cameraOn) return

    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      const img = new Image()
      img.src = imageSrc
      img.onload = async () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0, img.width, img.height)
        const imageData = canvas.toDataURL('image/jpeg')

        try {
          const codeReader = new BrowserMultiFormatReader()
          const result = await codeReader.decodeFromImage(undefined, imageData)
          if (result) {
            const scannedBarcode = result.getText()
            setCameraOn(false)
            fetchProductDescription(scannedBarcode)
          }
        } catch (err) {
          console.log('Erro ao escanear o código de barras:', err)
        }
      }
    }
  }, [webcamRef, cameraOn])

  useEffect(() => {
    const interval = setInterval(handleScan, 1000)
    return () => clearInterval(interval)
  }, [handleScan])

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter((device) => device.kind === 'videoinput')
      setDevices(videoDevices)
      setDeviceId(videoDevices[videoDevices.length - 1]?.deviceId)
    })
  }, [])

  const handleDeviceChange = () => {
    if (devices.length > 1) {
      const currentIndex = devices.findIndex((device) => device.deviceId === deviceId)
      const nextIndex = (currentIndex + 1) % devices.length
      setDeviceId(devices[nextIndex].deviceId)
    }
  }

  const handleRetryScan = () => {
    setDescription(null)
    setError(null)
    setCameraOn(true)
    setManualMode(false)
  }

  const handleManualInput = async () => {
    if (manualInput) {
      setCameraOn(false)
      await fetchProductDescription(manualInput)
    }
  }

  const handleManualMode = () => {
    setCameraOn(false)
    setManualMode(true)
  }

  const handleRetryManualInput = () => {
    setManualInput('')
    setError(null)
    setManualMode(true)
  }

  return (
    <Container>
      {cameraOn && deviceId && !manualMode ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            videoConstraints={{ deviceId }}
            style={{ width: '100%', height: '100%' }}
          />
          <Overlay>
            <IconContainer onClick={() => navigate(-1)}>
              <LeftArrowIcon />
            </IconContainer>
            <IconContainer onClick={handleDeviceChange}>
              <CamIcon />
            </IconContainer>
          </Overlay>
        </>
      ) : manualMode ? (
        <>
          <InputContainer>
            <Input
              type='text'
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              placeholder='Digite o código de barras'
            />
            <Button onClick={handleManualInput}>Confirmar</Button>
          </InputContainer>
          <Overlay>
            <IconContainer onClick={() => navigate(-1)}>
              <LeftArrowIcon />
            </IconContainer>
          </Overlay>
        </>
      ) : null}
      {error ? (
        <>
          <ErrorMessage>{error}</ErrorMessage>
          <ButtonContainer>
            <Button onClick={handleRetryScan}>Scanear Outro Produto</Button>
            <Button onClick={handleRetryManualInput}>Digitar Outro Código</Button>
          </ButtonContainer>
        </>
      ) : description ? (
        <BarcodeText>{description}</BarcodeText>
      ) : (
        !manualMode && (
          <ManualButton onClick={handleManualMode}>Digite o código de barras</ManualButton>
        )
      )}
      {!cameraOn && !manualMode && !error && (
        <Button onClick={handleRetryScan}>Scanear Outro Produto</Button>
      )}
    </Container>
  )
}

export default SearchBarcode
