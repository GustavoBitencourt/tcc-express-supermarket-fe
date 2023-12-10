import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { StyledTable, StyledTableRow, ProductListContainer } from './styles'

interface Order {
  id: number
  customerName: string
  totalAmount: number
  status: string
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

const fetchOrders = async (): Promise<Order[]> => {
  const response = await api.get('/orders')
  if (!response.data) {
    throw new Error('Failed to fetch orders')
  }
  return response.data.map(
    (order: any): Order => ({
      id: order.id,
      customerName: order.customer.fullName,
      totalAmount: order.total,
      status: order.status,
    }),
  )
}

const ListOrders: React.FC = () => {
  const { data: orders, isLoading, isError } = useQuery('orders', fetchOrders)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading orders</div>
  }

  return (
    <ProductListContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order: Order) => (
              <StyledTableRow key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.totalAmount}</td>
                <td>{order.status}</td>
              </StyledTableRow>
            ))}
        </tbody>
      </StyledTable>
    </ProductListContainer>
  )
}

export default ListOrders
