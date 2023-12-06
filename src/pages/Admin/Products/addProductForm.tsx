// AddProductForm.tsx
import React, { useState } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import { useQueryClient } from 'react-query'
import { FaTimes } from 'react-icons/fa'
import { EditFormContainer, CloseIcon } from './styles'

interface AddProductFormProps {
  onClose: () => void
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onClose }) => {
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    price: 0,
    stockLevel: 0,
    image: '',
    description: '',
    imageMap: '#',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' || name === 'stockLevel' ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post('/products', formData)

      console.log('Product created:', response.data)

      queryClient.invalidateQueries('products')
      onClose()
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <Modal isOpen={true} onRequestClose={handleCancel} contentLabel='Adicionar Produto'>
      <EditFormContainer>
        <CloseIcon onClick={handleCancel}>
          <FaTimes />
        </CloseIcon>
        <div className='input-row'>
          <label style={{ marginLeft: '2.3rem' }}>
            Nome:
            <br />
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
          </label>
          <label style={{ marginRight: '2.3rem' }}>
            Categoria:
            <br />
            <input type='text' name='product' value={formData.product} onChange={handleChange} />
          </label>
        </div>
        <div className='input-row'>
          <label style={{ marginLeft: '2.3rem' }}>
            Imagem:
            <br />
            <input type='text' name='image' value={formData.image} onChange={handleChange} />
          </label>
          <label style={{ marginRight: '2.3rem' }}>
            Preço:
            <br />
            <input type='text' name='price' value={formData.price} onChange={handleChange} />
          </label>
        </div>
        <div className='input-row'>
          <label style={{ marginLeft: '2.3rem' }}>
            Estoque:
            <br />
            <input
              type='text'
              name='stockLevel'
              value={formData.stockLevel}
              onChange={handleChange}
            />
          </label>
          <label style={{ marginRight: '2.3rem' }}>
            Descrição:
            <br />
            <input
              type='text'
              name='description'
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>
            Salvar
          </button>
          <button type='button' onClick={handleCancel} style={{ marginLeft: '10px' }}>
            Cancelar
          </button>
        </div>
      </EditFormContainer>
    </Modal>
  )
}

export default AddProductForm
