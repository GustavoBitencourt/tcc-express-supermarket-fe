import React, { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Modal from 'react-modal'
import EditProductForm from './editProductForm'
import AddProductForm from './addProductForm'
import { ProductListContainer, StyledTable, AddProductButton } from './styles'

interface Product {
  id: number
  name: string
  product: string
  price: number
  stockLevel: number
  image: string
  description: string
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

const fetchProducts = async () => {
  const response = await api.get('/allproducts')
  if (!response.data) {
    throw new Error('Failed to fetch products')
  }
  return response.data
}

const updateProduct = async (productId: number, updatedProductData: any) => {
  try {
    const response = await api.put(`/products/${productId}`, updatedProductData)
    console.log('Update response:', response.data)
    return response.data
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}

const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return formatter.format(value)
}

const ProductList: React.FC = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null)

  const { data: fetchedProducts, isLoading, isError } = useQuery('products', fetchProducts)
  const [editFormData, setEditFormData] = useState<any | null>(null)

  const handleAddProduct = () => {
    setIsAddModalOpen(true)
  }

  const handleEditProduct = (productId: number) => {
    const selectedProduct = fetchedProducts.find((product: Product) => product.id === productId)

    if (selectedProduct) {
      setEditFormData(selectedProduct)
      setIsEditModalOpen(true)
    }
  }

  const submitForm = async (updatedProductData: any) => {
    const product = {
      ...updatedProductData,
      stockLevel: Number(updatedProductData.stockLevel),
      price: parseFloat(updatedProductData.price),
    }
    await updateProduct(product.id, product)
    handleModalClose()
  }

  const handleUpdateProduct = async (updatedProductData: any) => {
    if (selectedProductId) {
      await updateProduct(selectedProductId, updatedProductData)
      queryClient.invalidateQueries('products')
    }
  }

  const handleModalClose = () => {
    setIsAddModalOpen(false)
    setIsEditModalOpen(false)
    setSelectedProductId(null)
    queryClient.invalidateQueries('products')
    navigate('/admin/products')
  }

  const handleDeleteProduct = async (productId: number) => {
    try {
      await api.delete(`/products/${productId}`)
      queryClient.invalidateQueries('products')
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading products</div>
  }

  return (
    <ProductListContainer>
      <div>
        <AddProductButton onClick={handleAddProduct}>Adicionar Novo Produto</AddProductButton>
        {isAddModalOpen && (
          <Modal
            isOpen={isAddModalOpen}
            onRequestClose={handleModalClose}
            contentLabel='Adicionar Produto'
          >
            <AddProductForm onClose={handleModalClose} />
          </Modal>
        )}
        <StyledTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th>Imagem</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {fetchedProducts.map((product: Product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.product}</td>
                <td>{product.stockLevel}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '45px', height: '36px' }}
                  />
                </td>
                <td style={{ color: 'green', fontFamily: 'Manrope', fontWeight: 'bold' }}>
                  {formatCurrency(product.price)}
                </td>
                <td>
                  <span
                    style={{ cursor: 'pointer', marginLeft: '10px', color: '#4a88da' }}
                    title='Editar Produto'
                    onClick={() => handleEditProduct(product.id)}
                  >
                    <FaEdit style={{ marginRight: '5px' }} />
                    Editar
                  </span>
                  <span
                    style={{ cursor: 'pointer', marginLeft: '10px', color: '#F34235' }}
                    title='Deletar Produto'
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <FaTrash style={{ marginRight: '5px' }} />
                    Excluir
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        {isEditModalOpen && (
          <Modal
            isOpen={isEditModalOpen}
            onRequestClose={handleModalClose}
            contentLabel='Editar Produto'
          >
            <EditProductForm
              onSubmit={handleUpdateProduct}
              initialData={editFormData}
              onClose={handleModalClose}
              onUpdate={submitForm}
            />
          </Modal>
        )}
      </div>
    </ProductListContainer>
  )
}

export default ProductList
