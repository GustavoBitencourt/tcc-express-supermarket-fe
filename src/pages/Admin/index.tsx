import React from 'react';
import { AdminContainer, AdminButton, TopBar } from './styles';
import Logo from '../../assets/logo-admin.svg';

function AdminPanel() {
  return (
    <AdminContainer>
      <TopBar>
        <img src={Logo} alt="Logo"  />
        <div>
          <h2>Painel Administrativo</h2>
        </div>
        <img src={Logo} alt="Logo"  />
      </TopBar>
      <AdminButton to="/admin/orders">Pedidos</AdminButton>
      <AdminButton to="/admin/products">Produtos</AdminButton>
      <AdminButton to="/admin/customers">Clientes</AdminButton>
    </AdminContainer>
  );
}

export default AdminPanel;
