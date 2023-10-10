import React from 'react'
import {} from 'react-router-dom'

import { AccountMenuContainer, MenuItem, MenuIcon, MenuText, MenuDivider } from './styles'

import datasIcon from '../../assets/datas-icon.svg'
import historicIcon from '../../assets/historic-icon.svg'
import addressIcon from '../../assets/address-icon.svg'
import contactIcon from '../../assets/contact-icon.svg'
import logoutIcon from '../../assets/logout-icon.svg'

function AccountMenu() {
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = process.env.PUBLIC_URL
  }
  return (
    <AccountMenuContainer>
      <MenuItem to='/editAccount'>
        <MenuIcon src={datasIcon} alt='Meus Dados' />
        <MenuText>Meus Dados</MenuText>
      </MenuItem>
      <MenuDivider />
      <MenuItem to='#'>
        <MenuIcon src={historicIcon} alt='Histórico' />
        <MenuText>Histórico</MenuText>
      </MenuItem>
      <MenuDivider />
      <MenuItem to='#'>
        <MenuIcon src={addressIcon} alt='Meus Endereços' />
        <MenuText>Meus Endereços</MenuText>
      </MenuItem>
      <MenuDivider />
      <MenuItem to='#'>
        <MenuIcon src={contactIcon} alt='Contate-nos' />
        <MenuText>Contate-nos</MenuText>
      </MenuItem>
      <MenuDivider />
      <MenuItem to='#' onClick={handleLogout}>
        <MenuIcon src={logoutIcon} alt='Sair' />
        <MenuText>Sair</MenuText>
      </MenuItem>
      <MenuDivider />
    </AccountMenuContainer>
  )
}

export default AccountMenu
