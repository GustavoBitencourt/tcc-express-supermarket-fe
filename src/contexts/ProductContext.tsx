import { createContext, ReactNode, useEffect, useState } from 'react'

import { ProductData } from '../interfaces/ProductData'

import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/api'

interface ProductContextProps {
  burgers: ProductData[]
  pizzas: ProductData[]
  drinks: ProductData[]
  iceCreams: ProductData[]
}

interface ProductProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextProps)

export function ProductProvider({ children }: ProductProviderProps) {
  const [burgers, setBurgers] = useState<ProductData[]>([])
  const [pizzas, setPizzas] = useState<ProductData[]>([])
  const [drinks, setDrinks] = useState<ProductData[]>([])
  const [iceCreams, setIceCreams] = useState<ProductData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const drinkRequest = await getDrinks()
        const iceCreamRequest = await getIceCreams()

        const requests = [burgerRequest, pizzaRequest, drinkRequest, iceCreamRequest]

        const [
          { data: burgerResponse },
          { data: pizzaResponse },
          { data: drinkResponse },
          { data: iceCreamResponse },
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinkResponse)
        setIceCreams(iceCreamResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <ProductContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </ProductContext.Provider>
  )
}
