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
import AccountMenu from '../../components/AccountMenu'

import { Sidebar } from '../../components/Sidebar'
import { ReactComponent as LeftArrowIcon } from '../../assets/arrow-left-category.svg'
import settingsIcon from '../../assets/settings.svg'
import profileIcon from '../../assets/profile-icon.svg'
import notificationIcon from '../../assets/notification.svg'

function Account() {
  const fullName = localStorage.getItem('name') || 'Usuário'
  const firstName = fullName.split(' ')[0]

  return (
    <AccountContainer>
      <TopBar>
        <Link to='/' className='arrow-left'>
          <LeftArrowIcon />
        </Link>
        <TopBarText>Meu Perfil</TopBarText>
        <Link to='/admin' className='arrow-left'>
          <SettingsIcon src={settingsIcon} alt='Settings' />
        </Link>
      </TopBar>
      <Content>
        <UserInfo>
          <ProfileIcon src={profileIcon} alt='Profile' />
          <ProfileText>
            <span>Olá, {firstName}</span>
          </ProfileText>
          <NotificationIcon src={notificationIcon} alt='Notification' />
        </UserInfo>
        <AccountMenu />
      </Content>
      <Sidebar />
    </AccountContainer>
  )
}

export default Account
