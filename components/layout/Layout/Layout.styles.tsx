import styled from 'styled-components';
import { S as Styles } from 'styles';

const Layout = styled.span`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const S = {
  ...Styles,
  Layout,
};
