import React, { useRef, useState, useEffect, useCallback } from 'react'
import Webcam from 'react-webcam'
import { BrowserMultiFormatReader } from '@zxing/library'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getAllProducts } from '../../services/api'
import { Container, BarcodeText, SearchCode } from './styles'

const SearchBarcode: React.FC = () => {
  const webcamRef = useRef<Webcam>(null)
  const navigate = useNavigate()
  const [cameraOn, setCameraOn] = useState<boolean>(true)
  const [description, setDescription] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([])
  const [deviceId, setDeviceId] = useState<string | undefined>()

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
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
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

  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeviceId(event.target.value)
  }

  return (
    <Container>
      <SearchCode>Escaneie o Código de Barras</SearchCode>
      <select onChange={handleDeviceChange} value={deviceId}>
        {devices.map((device) => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label || device.deviceId}
          </option>
        ))}
      </select>
      {cameraOn && deviceId ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          videoConstraints={{ deviceId }}
          style={{ width: '100%' }}
        />
      ) : null}
      {description ? (
        <BarcodeText>{description}</BarcodeText>
      ) : (
        <SearchCode>{error ? error : 'Procurando código de barras...'}</SearchCode>
      )}
    </Container>
  )
}

export default SearchBarcode
