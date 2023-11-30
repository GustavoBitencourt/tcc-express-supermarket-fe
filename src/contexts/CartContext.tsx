import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CustomerData } from '../interfaces/CustomerData'
import { Product } from '../interfaces/Product'
import { ProductData } from '../interfaces/ProductData'

import { productEmoji } from '../helpers/productEmoji'
import { processCheckout } from '../services/api'

interface CartContextProps {
  cart: Product[]
  addProductIntoCart: (product: ProductData) => void
  removeProductFromCart: (product: Product) => void
  productCartIncrement: (product: Product) => void
  productCartDecrement: (product: Product) => void
  confirmOrder: () => void
  payOrder: (customer: CustomerData) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

const localStorageKey = '@SupermarketExpress:cart'

export function CartProvider({ children }: CartProviderProps) {
  const navigate = useNavigate()
  const [cart, setCart] = useState<Product[]>(() => {
    const value = localStorage.getItem(localStorageKey)
    if (value) return JSON.parse(value)

    return []
  })

  function saveCart(items: Product[]) {
    setCart(items)
    localStorage.setItem(localStorageKey, JSON.stringify(items))
  }

  function clearCart() {
    localStorage.removeItem(localStorageKey)
  }

  function addProductIntoCart(product: ProductData): void {
    const productExistentInCart = cart.find(
      (item) => item.product === product.product && item.id === product.id,
    )

    if (productExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }

        return item
      })

      toast.success(
        `Outro(a) ${productEmoji(product.product)} ${product.name} adicionado nos pedidos!`,
      )
      saveCart(newCart)

      return
    }

    const newProduct = { ...product, quantity: 1, subtotal: product.price }
    const newCart = [...cart, newProduct] // push de um array

    toast.success(`${productEmoji(product.product)} ${product.name} adicionado nos pedidos!`)
    saveCart(newCart)
  }

  function removeProductFromCart(product: Product) {
    const newCart = cart.filter(
      (item) => !(item.id === product.id && item.product === product.product),
    )

    saveCart(newCart)
  }

  function updateProductQuantity(product: Product, newQuantity: number) {
    if (newQuantity <= 0) return

    const productExistentInCart = cart.find(
      (item) => item.id === product.id && item.product === product.product,
    )

    if (!productExistentInCart) return

    const newCart = cart.map((item) => {
      if (item.id === productExistentInCart.id && item.product === productExistentInCart.product) {
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity,
        }
      }

      return item
    })

    saveCart(newCart)
  }

  function productCartIncrement(product: Product) {
    updateProductQuantity(product, product.quantity + 1)
  }

  function productCartDecrement(product: Product) {
    updateProductQuantity(product, product.quantity - 1)
  }

  function confirmOrder() {
    navigate('/payment')
  }

  async function payOrder(customer: CustomerData) {
    try {
      const response = await processCheckout(cart, customer)

      if (response.data.status !== 'PAID') {
        toast.error('Erro ao processar o pagamento, por favor, tente novamente mais tarde.')
        return
      }

      clearCart()

      navigate(`/order/success/${response.data.id}`)
    } catch (error) {
      console.error(error)
      toast.error('Erro ao processar o pedido.')
    }
    return
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductIntoCart,
        removeProductFromCart,
        productCartIncrement,
        productCartDecrement,
        confirmOrder,
        payOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
