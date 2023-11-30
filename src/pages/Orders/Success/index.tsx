import { useNavigate, useParams } from 'react-router-dom'
import { Head } from '../../../components/Head'
import { Sidebar } from '../../../components/Sidebar'

import { Container, Inner, SubTitle, Title, Header, Icon } from './styled'
import arrowIcon from '../../../assets/arrow-left-category.svg'
import homeIcon from '../../../assets/home-icon.svg'

export default function OrderSuccessPage() {
  const navigate = useNavigate()
  const { orderId } = useParams()

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <>
      <Header>
        <Icon src={arrowIcon} alt='Arrow Icon' onClick={handleGoBack} />
        <h1>Seu Pedido</h1>
        <Icon src={homeIcon} alt='Home Icon' onClick={handleGoHome} />
      </Header>
      <Container>
        <Head title='Compra Realizada com Sucesso!' />

        <Inner>
          <Title>Compra Realizada com Sucesso</Title>

          <p>
            Número de Pedido <code className='numberOrder'>#{orderId}</code>
          </p>

          <SubTitle>Dados de Contato da Loja</SubTitle>

          <ul>
            <li>Endereço: Rua Major Francisco Nunes de Souza, 4559</li>
            <br />
            <li>Tel: (53) 3228-1840</li>
          </ul>

          <br />
          <br />
          <a href='/tcc-express-supermarket-fe' className='underline'>
            Voltar para a página inicial
          </a>
        </Inner>
      </Container>
      <Sidebar />
    </>
  )
}
