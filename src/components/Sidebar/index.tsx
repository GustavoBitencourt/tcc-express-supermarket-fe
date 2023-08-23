import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'

import { ReactComponent as LimpezaIcon } from '../../assets/limpeza.svg'
import { ReactComponent as CarneIcon } from '../../assets/carne.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as PadariaIcon } from '../../assets/padaria.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrir e fechar o menu' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <LimpezaIcon />
              <span>Hambúrgueres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='carnes'>
              <CarneIcon />
              <span>Carnes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='hortifrutis'>
              <SodaPopIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='padarias'>
              <PadariaIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
