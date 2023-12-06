import React from 'react';
import { AdminContainer, TopBar } from './styles';
import Logo from '../../../assets/logo-admin.svg';
import ProductList from './productList';
// import ProductForm from './productForm';

function Products() {

  return (
    <AdminContainer>
      <TopBar>
        <img src={Logo} alt="Logo"  />
        <div>
          <h2>Controle de Produtos</h2>
        </div>
        <img src={Logo} alt="Logo"  />
      </TopBar>

      <ProductList />

      <hr />
{/*
       <ProductForm onSuccess={() => {}} /> */}
    </AdminContainer>
  );
}

export default Products;
