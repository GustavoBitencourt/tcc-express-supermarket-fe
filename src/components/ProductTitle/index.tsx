import { ReactNode } from 'react'

import { Title } from './styles'

interface TitleProps {
  children: ReactNode
}

export function ProductTitle({ children }: TitleProps) {
  return <Title>{children}</Title>
}
