import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { MyOrder } from '../../components/MyOrder'
import { Header, LogoContainer, LogoSvg, Container, MainSection } from './styles'
import logoSvg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <MainSection>
        <Header>
          <LogoContainer>
            <Link to='/'>
              <LogoSvg src={logoSvg} alt='Logo' />
            </Link>
          </LogoContainer>
        </Header>
        <Outlet />
      </MainSection>
      <MyOrder />
    </Container>
  )
}
