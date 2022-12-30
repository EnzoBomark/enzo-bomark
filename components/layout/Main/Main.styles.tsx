import styled from 'styled-components';
import { S as Styles } from 'styles';

const Main = styled.main`
  height: 100vh;
  padding-top: 4.6rem;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const S = {
  ...Styles,
  Main,
};
