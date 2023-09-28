import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { Container } from './styles'

import { ReactComponent as HomeIcon } from '../../assets/home-page.svg'
import { ReactComponent as MagnifyingIcon } from '../../assets/magnifying-home.svg'
import { ReactComponent as PriceIcon } from '../../assets/price-reader.svg'
import { ReactComponent as AccountIcon } from '../../assets/my-account.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeIcon, setActiveIcon] = useState<string | null>(null)
  const location = useLocation()

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName)
  }

  useEffect(() => {
    setActiveIcon(null)
  }, [location.pathname])

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrir e fechar o menu' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/' onClick={() => handleIconClick('home')}>
              <HomeIcon className={activeIcon === 'home' ? 'active' : ''} />
              <span>Página Inicial</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='#' onClick={() => handleIconClick('search')}>
              <MagnifyingIcon className={activeIcon === 'search' ? 'active' : ''} />
              <span>Pesquisa</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='#' onClick={() => handleIconClick('price')}>
              <PriceIcon className={activeIcon === 'price' ? 'active' : ''} />
              <span>Leitor de Preços</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='#' onClick={() => handleIconClick('account')}>
              <AccountIcon className={activeIcon === 'account' ? 'active' : ''} />
              <span>Minha Conta</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
