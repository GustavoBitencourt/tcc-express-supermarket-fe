import { createContext, ReactNode, useEffect, useState } from 'react'

import { ProductData } from '../interfaces/ProductData'

import { getLimpezas, getHortifrutis, getPadarias, getCarnes } from '../services/api'

interface ProductContextProps {
  limpezas: ProductData[]
  carnes: ProductData[]
  hortifrutis: ProductData[]
  padarias: ProductData[]
}

interface ProductProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextProps)

export function ProductProvider({ children }: ProductProviderProps) {
  const [limpezas, setLimpezas] = useState<ProductData[]>([])
  const [carnes, setCarnes] = useState<ProductData[]>([])
  const [hortifrutis, setHortifrutis] = useState<ProductData[]>([])
  const [padarias, setPadarias] = useState<ProductData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const limpezaRequest = await getLimpezas()
        const carneRequest = await getCarnes()
        const hortifrutiRequest = await getHortifrutis()
        const padariaRequest = await getPadarias()

        const requests = [limpezaRequest, carneRequest, hortifrutiRequest, padariaRequest]

        const [
          { data: limpezaResponse },
          { data: carneResponse },
          { data: hortifrutiResponse },
          { data: padariaResponse },
        ] = await Promise.all(requests)

        setLimpezas(limpezaResponse)
        setCarnes(carneResponse)
        setHortifrutis(hortifrutiResponse)
        setPadarias(padariaResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <ProductContext.Provider value={{ limpezas, carnes, hortifrutis, padarias }}>
      {children}
    </ProductContext.Provider>
  )
}
