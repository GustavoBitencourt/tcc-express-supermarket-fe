import { ProductData } from './ProductData'

export interface OrderItem {
  id: number
  quantity: number
  subTotal: string
  orderId: number
  productId: number
  product: ProductData
}

export interface OrderData {
  id: number
  status: string
  total: string
  transactionId: string
  createdAt: string
  updatedAt: string
  customerId: number
  paymentMethod?: string | null
  orderItems: OrderItem[]
}
