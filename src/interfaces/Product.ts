import { ProductData } from './ProductData'

export interface Product extends ProductData {
  quantity: number
  subtotal: number
}
