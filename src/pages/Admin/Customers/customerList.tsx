import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import { StyledTable, StyledTableRow, ProductListContainer } from './styles'

interface Customer {
  id: number
  fullName: string
  email: string
  mobile: string
  street: string | null
  number: string | null
  neighborhood: string | null
  zipCode: string | null
  updatedAt: string
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

const fetchCustomers = async (): Promise<Customer[]> => {
  const response = await api.get('/customers')
  if (!response.data) {
    throw new Error('Failed to fetch customers')
  }
  return response.data.map(
    (customer: any): Customer => ({
      id: customer.id,
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      street: customer.street,
      number: customer.number,
      neighborhood: customer.neighborhood,
      zipCode: customer.zipCode,
      updatedAt: customer.updatedAt,
    }),
  )
}

const CustomerList: React.FC = () => {
  const { data: customers, isLoading, isError } = useQuery('customers', fetchCustomers)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading customers</div>
  }

  if (customers) {
    customers.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  }

  return (
    <ProductListContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer) => (
              <StyledTableRow key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.fullName}</td>
                <td>{customer.email}</td>
                <td>{customer.mobile}</td>
                <td>
                  {customer.street && customer.number && customer.neighborhood && customer.zipCode
                    ? `${customer.street}, ${customer.number}, ${customer.neighborhood}, ${customer.zipCode}`
                    : 'Não Cadastrado'}
                </td>
              </StyledTableRow>
            ))}
        </tbody>
      </StyledTable>
    </ProductListContainer>
  )
}

export default CustomerList
