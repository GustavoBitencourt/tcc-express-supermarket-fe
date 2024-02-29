// ProductDetail.tsx
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { currencyFormat } from '../../helpers/currencyFormat'
import { ProductData } from '../../interfaces/ProductData'
import api from '../../services/api'
import { Sidebar } from '../../components/Sidebar'
import { TopBar, ProductContainer, ProductInfo } from './styles'
import { ReactComponent as LeftArrowIcon } from '../../assets/arrow-left-category.svg'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<ProductData | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/product/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error)
      }
    }

    fetchProduct()
  }, [id])

  if (!product) {
    return <div>Carregando...</div>
  }

  return (
    <ProductContainer>
      <TopBar>
        <Link to='/' className='arrow-left'>
          <LeftArrowIcon />
        </Link>
        <Link to='/admin' className='arrow-left'></Link>
      </TopBar>
      <ProductInfo>
        <img src={product.image} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <div className='rectangle'></div>
          <p>{currencyFormat(Number(product.price))}</p>
          {/* Adicione outras informações do produto aqui */}
        </div>
        <div className='important-text'>Importante</div>
        <div className='disclaimer-text'>
          As informações sobre o produto ou a embalagem exibidas podem não estar atualizadas ou
          completas. Por favor, consulte sempre o produto físico para obter informações e avisos
          mais precisos.
        </div>
      </ProductInfo>
      <Sidebar />
    </ProductContainer>
  )
}

export default ProductDetail
