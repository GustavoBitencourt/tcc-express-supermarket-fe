import React, { useState, useEffect } from 'react'
import { FormContainer, CloseIcon, StyledButton, InputRow, InputLabel, InputField } from './styles'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

interface EditProductFormProps {
  onSubmit: (updatedProductData: any) => void
  initialData: any
  onClose: () => void
  onUpdate: (updatedData: any) => void
}

const EditProductForm: React.FC<EditProductFormProps> = ({ initialData, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(initialData)
  const navigate = useNavigate()

  useEffect(() => {
    setFormData(initialData)
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData: any) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onUpdate(formData)
    navigate('/admin/products')
  }

  const handleCancel = () => {
    onClose()
    navigate('/admin/products')
  }

  return (
    <form onSubmit={handleSubmit}>
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
          <StyledButton type='submit'>Salvar</StyledButton>
          <StyledButton type='button' onClick={handleCancel} cancel>
            Cancelar
          </StyledButton>
        </div>
      </FormContainer>
    </form>
  )
}

export default EditProductForm
