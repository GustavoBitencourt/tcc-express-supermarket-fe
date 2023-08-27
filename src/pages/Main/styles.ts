import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;

  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.875rem;

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;
    }
  }
`;

export const Header = styled.header`
  background-color: white;
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: none;

  @media (max-width: 720px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const LogoSvg = styled.img`
  width: 7rem;
  margin-right: 1rem;
`;
