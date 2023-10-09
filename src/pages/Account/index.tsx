import React from 'react'
import { Link } from 'react-router-dom'

import {
  AccountContainer,
  TopBar,
  Content,
  TopBarText,
  ProfileText,
  SettingsIcon,
  UserInfo,
  ProfileIcon,
  NotificationIcon,
} from './styles'

import { Sidebar } from '../../components/Sidebar'
import { ReactComponent as LeftArrowIcon } from '../../assets/arrow-left-category.svg'
import settingsIcon from '../../assets/settings.svg'
import profileIcon from '../../assets/profile-icon.svg'
import notificationIcon from '../../assets/notification.svg'

function Account() {
  const fullName = localStorage.getItem('name') || 'Usuário'
  const firstName = fullName.split(' ')[0] // Divide o nome completo em palavras e pega a primeira

  return (
    <AccountContainer>
      <Sidebar />
      <TopBar>
        <Link to='/' className='arrow-left'>
          <LeftArrowIcon />
        </Link>
        <TopBarText>Meu Perfil</TopBarText>
        <SettingsIcon src={settingsIcon} alt='Settings' />
      </TopBar>
      <Content>
        <UserInfo>
          <ProfileIcon src={profileIcon} alt='Profile' />
          <ProfileText>
            <span>Olá, {firstName}</span>
          </ProfileText>
          <NotificationIcon src={notificationIcon} alt='Notification' />
        </UserInfo>
        {/* Conteúdo da página de conta */}
        <h1>Minha Conta</h1>
        {/* Adicione aqui as informações da conta */}
      </Content>
    </AccountContainer>
  )
}

export default Account
