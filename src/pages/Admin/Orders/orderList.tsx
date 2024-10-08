import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { format } from 'date-fns'
import {
  StyledTable,
  StyledTableRow,
  ProductListContainer,
  ExpandButton,
  StyledShrinkIcon,
  StyledExpandIconColumn,
} from './styles'
import { ReactComponent as ExpandIcon } from '../../../assets/expand-icon.svg'

interface Order {
  id: number
  status: string
  total: number
  updatedAt: string
  customerId: number
  paymentMethod?: string
  shippingMethod?: string
  customer: {
    fullName: string
    mobile: string
    zipCode: string
    street: string
    number: number
    neighborhood: string
  }
  orderItems: {
    id: number
    quantity: number
    product: {
      name: string
      price: number
    }
  }[]
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return formatter.format(value)
}

const fetchOrders = async (): Promise<Order[]> => {
  const response = await api.get('/orders')
  if (!response.data) {
    throw new Error('Failed to fetch orders')
  }
  return response.data.map(
    (order: any): Order => ({
      id: order.id,
      status: order.status,
      total: order.total,
      updatedAt: order.updatedAt,
      customerId: order.customerId,
      paymentMethod: order.paymentMethod,
      shippingMethod: order.shippingMethod,
      customer: {
        fullName: order.customer.fullName,
        mobile: order.customer.mobile,
        zipCode: order.customer.zipCode,
        street: order.customer.street,
        number: order.customer.number,
        neighborhood: order.customer.neighborhood,
      },
      orderItems: order.orderItems.map((item: any) => ({
        id: item.id,
        quantity: item.quantity,
        product: {
          name: item.product.name,
          price: item.product.price,
        },
      })),
    }),
  )
}

const ListOrders: React.FC = () => {
  const { data: orders, isLoading, isError } = useQuery('orders', fetchOrders)
  const [expandedOrderId, setExpandedOrderId] = useState<number | null>(null)

  const handleToggleExpansion = (orderId: number) => {
    setExpandedOrderId((prevId) => (prevId === orderId ? null : orderId))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading orders</div>
  }

  if (orders) {
    orders.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  }

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'PAID':
        return 'Confirmado'
      case 'CANCELED':
        return 'Cancelado'
      default:
        return status
    }
  }

  const getPaymentMethodText = (paymentMethod?: string): string => {
    switch (paymentMethod) {
      case 'money':
        return 'Dinheiro'
      case 'pix':
        return 'Pix'
      case 'card':
        return 'Cartão'
      default:
        return paymentMethod || ''
    }
  }

  const getShippingMethodText = (shippingMethod?: string): string => {
    switch (shippingMethod) {
      case 'pickup':
        return 'Retirada'
      case 'delivery':
        return 'Entrega'
      default:
        return shippingMethod || ''
    }
  }

  return (
    <ProductListContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>ID do Pedido</th>
            <th>Status</th>
            <th>Forma de Pagamento</th>
            <th>Método de Entrega</th>
            <th>Valor Total</th>
            <th>Data e Hora</th>
            <th>ID do Cliente</th>
            <th>Nome do Cliente</th>
            <th>Telefone do Cliente</th>
            <th>CEP</th>
            <th>Rua</th>
            <th>Número</th>
            <th>Bairro</th>

            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order: Order) => (
              <React.Fragment key={order.id}>
                <StyledTableRow onClick={() => handleToggleExpansion(order.id)}>
                  <td>{order.id}</td>
                  <td>{getStatusText(order.status)}</td>
                  <td>{getPaymentMethodText(order.paymentMethod)}</td>
                  <td>{getShippingMethodText(order.shippingMethod)}</td>
                  <td>{formatCurrency(order.total)}</td>
                  <td>{format(new Date(order.updatedAt), 'dd/MM/yyyy HH:mm:ss')}</td>
                  <td>{order.customerId}</td>
                  <td>{order.customer.fullName}</td>
                  <td>{order.customer.mobile}</td>
                  <td>{order.customer.zipCode}</td>
                  <td>{order.customer.street}</td>
                  <td>{order.customer.number}</td>
                  <td>{order.customer.neighborhood}</td>
                  <StyledExpandIconColumn isExpanded={expandedOrderId === order.id}>
                    <ExpandButton isExpanded={expandedOrderId === order.id}>
                      {expandedOrderId === order.id ? <StyledShrinkIcon /> : <ExpandIcon />}
                    </ExpandButton>
                  </StyledExpandIconColumn>
                </StyledTableRow>
                {expandedOrderId === order.id && (
                  <StyledTableRow>
                    <td colSpan={17}>
                      <table>
                        <thead>
                          <tr>
                            <th>ID do Produto</th>
                            <th>Quantidade do Produto</th>
                            <th>Nome do Produto</th>
                            <th style={{ backgroundColor: '#125C40', color: '#fff' }}>
                              Preço do Produto
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.orderItems.map((item) => (
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.quantity}</td>
                              <td>{item.product.name}</td>
                              <td>{formatCurrency(item.product.price)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </StyledTableRow>
                )}
              </React.Fragment>
            ))}
        </tbody>
      </StyledTable>
    </ProductListContainer>
  )
}

export default ListOrders
