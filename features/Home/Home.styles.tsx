import styled from 'styled-components';
import { S as Styles } from 'styles';

const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.color.g0};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const S = {
  ...Styles,
  HomeContainer,
};
