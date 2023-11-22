import React from 'react'
import arrowIcon from '../../../assets/arrow-left-category.svg'
import shareIcon from '../../../assets/share-icon.svg'

import { TopBarContainer, Icon } from './styles'

const TopBar: React.FC = () => (
  <TopBarContainer>
    <Icon src={arrowIcon} alt='Arrow Icon' />
    <h1>Carrinho</h1>
    <Icon src={shareIcon} alt='Share Icon' />
  </TopBarContainer>
)

export default TopBar
