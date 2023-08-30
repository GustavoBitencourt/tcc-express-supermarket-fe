import styled from 'styled-components';

interface IndicatorProps {
  isActive?: boolean;
}

export const CarouselIndicators = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  margin-top: 1rem;
`;

export const Indicator = styled.li`
  width: 10px;
  height: 10px;
  background-color: rgba(128, 128, 128, 0.5);
  border-radius: 50%;
  margin: 0 5px;
`;

export const SelectedIndicator = styled(Indicator)<IndicatorProps>`
  background-color: ${({ isActive }) => (isActive ? 'black' : 'rgba(128, 128, 128, 0.5)')};
`;
