import axios from 'axios'

import { CustomerData } from '../interfaces/CustomerData'
import { Product } from '../interfaces/Product'
import { ProductData } from '../interfaces/ProductData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getProducts = (category?: string) => {
  const endpoint = category ? `/products?product=${category}` : '/products'
  return api.get<ProductData[]>(endpoint)
}

export const getCustomer = (customerId: number) => api.get<CustomerData>(`/customers/${customerId}`)

export const updateCustomer = (customerId: number, userData: any) =>
  api.put<CustomerData>(`/customer/${customerId}`, userData)

export const getLimpezas = () => api.get<ProductData[]>('/products?product=limpeza')
export const getCarnes = () => api.get<ProductData[]>('/products?product=carne')
export const getHortifrutis = () => api.get<ProductData[]>('/products?product=hortifruti')
export const getPadarias = () => api.get<ProductData[]>('/products?product=padaria')

export const processCheckout = (cart: Product[], customer: CustomerData) =>
  api.post('/checkout', {
    cart,
    customer: {
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      document: customer.document,
      zipCode: customer.zipCode,
      street: customer.street,
      number: customer.number,
      complement: customer.complement,
      neighborhood: customer.neighborhood,
      city: customer.city,
      state: customer.state,
    },
    payment: {
      creditCardNumber: customer.creditCardNumber,
      creditCardHolder: customer.creditCardHolder,
      creditCardExpiration: `${new Date(customer.creditCardExpiration).getMonth() + 1}/${new Date(
        customer.creditCardExpiration,
      ).getFullYear()}`,
      creditCardSecurityCode: customer.creditCardSecurityCode,
    },
  })

export const registerUser = (userData: CustomerData) => api.post('/auth/register', userData)

export const getAllProducts = () => api.get<ProductData[]>('/allproducts')

export default api
