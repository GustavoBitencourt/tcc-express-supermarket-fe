import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 3rem);
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
`
export const MainSection = styled.section`
  flex: 1;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 2rem 1.875rem;

  @media (max-width: 720px) {
    padding-bottom: 8rem;
  }
`

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
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
`

export const LogoContainer = styled.div`
  margin-left: 1rem;
`

export const LogoSvg = styled.img`
  width: 7rem;
`
