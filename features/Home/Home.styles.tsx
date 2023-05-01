import styled from 'styled-components';
import { UIElements } from 'styles';

const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.color.g0};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const S = {
  ...UIElements,
  HomeContainer,
};
