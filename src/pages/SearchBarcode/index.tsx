import React, { useRef, useState, useEffect, useCallback } from 'react'
import Webcam from 'react-webcam'
import { BrowserMultiFormatReader } from '@zxing/library'
import { Container, BarcodeText, SearchCode } from './styles'

const SearchBarcode: React.FC = () => {
  const webcamRef = useRef<Webcam>(null)
  const [barcode, setBarcode] = useState<string | null>(null)
  const [cameraOn, setCameraOn] = useState<boolean>(true)
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([])
  const [deviceId, setDeviceId] = useState<string | undefined>()

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
            setBarcode(result.getText())
            setCameraOn(false)
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
      setDevices(devices.filter((device) => device.kind === 'videoinput'))
    })
  }, [])

  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeviceId(event.target.value)
  }

  return (
    <Container>
      <h1>Escaneie o Código de Barras</h1>
      <select onChange={handleDeviceChange}>
        {devices.map((device) => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label || device.deviceId}
          </option>
        ))}
      </select>
      {cameraOn ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          videoConstraints={{ deviceId: deviceId || devices[0]?.deviceId }}
          style={{ width: '100%' }}
        />
      ) : null}
      {barcode ? (
        <BarcodeText>Código de barras escaneado: {barcode}</BarcodeText>
      ) : (
        <SearchCode>Procurando código de barras...</SearchCode>
      )}
    </Container>
  )
}

export default SearchBarcode
