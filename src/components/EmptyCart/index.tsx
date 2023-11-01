import {
  Button,
  Container,
  TopBar,
  BackIcon,
  ShareIcon,
  Ruler,
  Text,
  Subtext,
  SecondText,
  NoItems,
  TextContainer,
  EmptyCartIcon,
  TextGreen,
} from './styles'

import { Link } from 'react-router-dom'

interface EmptyCartProps {
  title: string
}

import backIcon from '../../assets/arrow-left-category.svg'
import shareIcon from '../../assets/share-icon.svg'
import ruler from '../../assets/ruler-1.svg'
import noItems from '../../assets/empty-cart.svg'
import emptyCartIcon from '../../assets/empty-cart-icon.svg'

export function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <TopBar>
        <Link to='/'>
          <BackIcon src={backIcon} alt='Voltar' />
        </Link>
        <h2>Carrinho</h2>
        <ShareIcon src={shareIcon} alt='Compartilhar' />
      </TopBar>
      <Ruler src={ruler} alt='Ruler' />
      <TextContainer>
        <Text>Substituição</Text>
        <Subtext>Caso algum produto de sua compra esteja indisponível</Subtext>
      </TextContainer>
      <NoItems src={noItems} />
      <TextContainer>
        <SecondText>Lista do Carrinho</SecondText>
      </TextContainer>
      <EmptyCartIcon src={emptyCartIcon} alt='Empty Cart' />
      <h2 className='textEmpty'>{title}</h2>
      <Link to='/'>
        <TextGreen>comece suas compras.</TextGreen>
      </Link>
      <Button to='/'>Confirmar</Button>
    </Container>
  )
}
