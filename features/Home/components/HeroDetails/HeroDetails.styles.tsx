import styled from 'styled-components';
import { UIElements } from 'styles';

const HeroDetailsContainer = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.color.g25};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroDetailsInnerContainer = styled.div`
  width: 100vw;
  max-width: 996px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  padding: 4.2rem 0;
  margin-bottom: 1.6rem;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  max-width: 220px;
`;

export const S = {
  ...UIElements,
  HeroDetailsContainer,
  HeroDetailsInnerContainer,
  DetailWrapper,
};
