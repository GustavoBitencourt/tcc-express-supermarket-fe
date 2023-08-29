import styled from 'styled-components'

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
`

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
`
export const LogoContainer = styled.div`
  margin-left: 1rem;
`

export const LogoSvg = styled.img`
  width: 7rem;
`
export const CarrouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(200vh + 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -36rem;

  .carousel {
    width: 90%;
  }

  .carousel .slide img {
    width: 100%;
    height: auto;
  }
`
export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  right: -1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  z-index: 1;
  cursor: pointer;
`

export const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  left: -1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  z-index: 1;
  cursor: pointer;
`
