import styled from 'styled-components'

interface IndicatorProps {
  isActive?: boolean
}

export const CarouselIndicators = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  margin-top: 1rem;
`

export const Indicator = styled.li`
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.blackgray};
  border-radius: 50%;
  margin: 0 5px;
`

export const SelectedIndicator = styled(Indicator)<IndicatorProps>`
  background-color: ${({ isActive, theme }) => (isActive ? 'black' : theme.colors.gray400)};
`

export const CarrouselContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blackgray};
  margin-top: 1rem;
`
export const TitleCategory = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blackgray};
  margin-top: -1.25rem;
`

export const ViewMoreLink = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.lightgreen};
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  margin-top: 1rem;

  img {
    margin-left: 0.75rem;
  }
`

export const ViewMoreLinkCategory = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.lightgreen};
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  margin-top: -1rem;

  img {
    margin-left: 0.75rem;
  }
`

export const CarrouselContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`
