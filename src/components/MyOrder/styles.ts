import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;
  display: flex;
  align-items: center;
  transition: background 0.3s;

  &:hover {
    background: ${darken(0.1, '#56BA50')};
  }

  span:first-child {
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 5.5rem;
    height: 2.5rem;
    position: relative;
    z-index: 4;
  }

  @media (max-width: 720px) {
    top: 0.5rem;
    bottom: initial;

    span:first-child {
      display: none;
    }
  }
`;

export const CartCount = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  top: -0rem;
  right: 0.6rem;
  padding: 0.2rem 0.5rem;
  z-index: 5;
`;
