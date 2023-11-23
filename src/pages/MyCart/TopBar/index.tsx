import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowIcon from '../../../assets/arrow-left-category.svg'
import shareIcon from '../../../assets/share-icon.svg'
import { TopBarContainer, Icon } from './styles'

const TopBar: React.FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <TopBarContainer>
      <Icon src={arrowIcon} alt='Arrow Icon' onClick={handleGoBack} />
      <h1>Carrinho</h1>
      <Icon src={shareIcon} alt='Share Icon' />
    </TopBarContainer>
  )
}

export default TopBar
