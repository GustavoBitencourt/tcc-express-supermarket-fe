import { Outlet } from 'react-router-dom';
import { MyOrder } from '../../components/MyOrder';
import { Sidebar } from '../../components/Sidebar';
import { Container, Header, LogoSvg } from './styles';
import logoSvg from '../../assets/logo.svg';

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <Header>
          <LogoSvg src={logoSvg} alt="Logo" />
        </Header>
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  );
}
