import { Button, Container } from './styles'

import manAndLimpezaImg from '../../assets/man-and-limpeza.svg'

interface EmptyCartProps {
  title: string
}

export function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <img src={manAndLimpezaImg} alt='Homem com hambúrguer' />
    </Container>
  )
}
