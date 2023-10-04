import React from 'react'
import {
  CategoryBarWrapper,
  CategoryTitle,
  CategoryIcon,
  SmallArrowIcon,
  MagnifyGlassIcon,
} from './styles'
import arrowLeftIcon from '../../assets/arrow-left-category.svg'
import magnifyGlassIcon from '../../assets/magnifying-glass.svg'
import { Link } from 'react-router-dom'

interface CategoryBarProps {
  title: string
  show: boolean
  icon: string
}

export function CategoryBar({ title, show, icon }: CategoryBarProps) {
  if (!show) {
    return null
  }

  return (
    <CategoryBarWrapper>
      <Link to='/'>
        <SmallArrowIcon src={arrowLeftIcon} alt='Back' />
      </Link>
      <CategoryIcon src={icon} alt={title} />
      <CategoryTitle>{title}</CategoryTitle>
      <MagnifyGlassIcon src={magnifyGlassIcon} alt='Search' />
    </CategoryBarWrapper>
  )
}
