import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
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

  const isLoggedIn = !!localStorage.getItem('token') // Verifica se o usuário está logado

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
            <NavLink to='/search' onClick={() => handleIconClick('search')}>
              <MagnifyingIcon className={activeIcon === 'search' ? 'active' : ''} />
              <span>Pesquisa</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/searchBarCode' onClick={() => handleIconClick('price')}>
              <PriceIcon className={activeIcon === 'price' ? 'active' : ''} />
              <span>Leitor de Preços</span>
            </NavLink>
          </li>
          <li>
            {isLoggedIn ? ( // Verifica se o usuário está logado
              <Link to='/account'>
                <AccountIcon className={activeIcon === 'account' ? 'active' : ''} />
                <span>Minha Conta</span>
              </Link>
            ) : (
              <Link to='/login'>
                <AccountIcon className={activeIcon === 'account' ? 'active' : ''} />
                <span>Fazer Login</span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Container>
  )
}
