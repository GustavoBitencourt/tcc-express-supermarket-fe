import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: gray;
`;

export const AdminButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};

  h2 {
    margin: 3rem;
    font-size: 20px;

    @media (max-width: 500px) {
      margin: 0;
    }
  }

  img {
    width:80px;
    height:50px;
  }
`;

export const AdminButton = styled(Link)`
  margin: 10px;
  padding: 20px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  transition: background-color 0.3s;
  text-align: center;
`;

export const AdminButtonAccess = styled.button`
  margin: 10px;
  padding: 20px;
  width: 300px; /* Tamanho maior */
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  transition: background-color 0.3s;
  text-align: center;
`;
