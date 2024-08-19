import React, { useState } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import { useQueryClient } from 'react-query'
import { FaTimes } from 'react-icons/fa'
import { FormContainer, CloseIcon, StyledButton, InputRow, InputLabel, InputField } from './styles'

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
      <FormContainer>
        <CloseIcon onClick={handleCancel}>
          <FaTimes />
        </CloseIcon>
        <InputRow>
          <InputLabel>Nome:</InputLabel>
          <InputField type='text' name='name' value={formData.name} onChange={handleChange} />
        </InputRow>
        <InputRow>
          <InputLabel>Categoria:</InputLabel>
          <InputField type='text' name='product' value={formData.product} onChange={handleChange} />
        </InputRow>
        <InputRow>
          <InputLabel>Imagem:</InputLabel>
          <InputField type='text' name='image' value={formData.image} onChange={handleChange} />
        </InputRow>
        <InputRow>
          <InputLabel>Preço:</InputLabel>
          <InputField type='number' name='price' value={formData.price} onChange={handleChange} />
        </InputRow>
        <InputRow>
          <InputLabel>Estoque:</InputLabel>
          <InputField
            type='number'
            name='stockLevel'
            value={formData.stockLevel}
            onChange={handleChange}
          />
        </InputRow>
        <InputRow>
          <InputLabel>Descrição:</InputLabel>
          <InputField
            type='text'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
        </InputRow>
        <div>
          <StyledButton type='submit' onClick={handleSubmit}>
            Salvar
          </StyledButton>
          <StyledButton type='button' onClick={handleCancel} cancel>
            Cancelar
          </StyledButton>
        </div>
      </FormContainer>
    </Modal>
  )
}

export default AddProductForm
