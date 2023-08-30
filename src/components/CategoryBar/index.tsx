// components/CategoryBar/index.tsx
import React from 'react'
import { CategoryBarWrapper, CategoryTitle } from './styles'

interface CategoryBarProps {
  title: string
  show: boolean
}

export function CategoryBar({ title, show }: CategoryBarProps) {
  if (!show) {
    return null
  }

  return (
    <CategoryBarWrapper>
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryBarWrapper>
  )
}
