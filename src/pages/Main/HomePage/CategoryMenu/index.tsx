import React from 'react'
import { NavLink } from 'react-router-dom'
import { CategoryMenuContainer } from './styles'
import { ReactComponent as LimpezaIcon } from '../../../../assets/limpeza.svg'
import { ReactComponent as CarneIcon } from '../../../../assets/carne.svg'
import { ReactComponent as SodaPopIcon } from '../../../../assets/hortifruti.svg'
import { ReactComponent as PadariaIcon } from '../../../../assets/padaria.svg'

const CategoryMenu: React.FC = () => {
  return (
    <CategoryMenuContainer>
      <NavLink to='limpezas' className={'navLink'}>
        <LimpezaIcon />
        <p className='textgreen'>Limpeza</p>
      </NavLink>

      <NavLink to='padarias' className={'navLink'}>
        <PadariaIcon />
        <p className='textyellow'>Padaria</p>
      </NavLink>

      <NavLink to='carnes' className={'navLink'}>
        <CarneIcon />
        <p className='textgreen'>Carne</p>
      </NavLink>

      <NavLink to='hortifrutis' className={'navLink'}>
        <SodaPopIcon />
        <p className='textgreen'>Horti</p>
      </NavLink>
    </CategoryMenuContainer>
  )
}

export default CategoryMenu
