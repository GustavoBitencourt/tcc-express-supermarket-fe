import React from 'react'
import { CategoryBarWrapper, CategoryTitle, CategoryIcon } from './styles'

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
      <CategoryIcon src={icon} alt={title} />
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryBarWrapper>
  )
}
