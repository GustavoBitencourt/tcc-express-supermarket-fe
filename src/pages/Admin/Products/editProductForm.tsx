import React, { useState, useEffect } from 'react'
import { EditFormContainer, CloseIcon } from './styles'
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
    navigate('/admin/products') // Redireciona para a lista de produtos
  }

  const handleCancel = () => {
    onClose()
    navigate('/admin/products') // Redireciona para a lista de produtos
  }

  return (
    <form onSubmit={handleSubmit}>
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
            Preço:
            <br />
            <input type='number' name='price' value={formData.price} onChange={handleChange} />
          </label>
          <label style={{ marginRight: '2.3rem' }}>
            Imagem:
            <br />
            <input type='text' name='image' value={formData.image} onChange={handleChange} />
          </label>
        </div>

        <div className='input-row'>
          <label style={{ marginLeft: '2.3rem' }}>
            Estoque:
            <br />
            <input
              type='number'
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
          <button type='submit'>Salvar</button>
          <button type='button' onClick={handleCancel} style={{ marginLeft: '10px' }}>
            Cancelar
          </button>
        </div>
      </EditFormContainer>
    </form>
  )
}

export default EditProductForm
