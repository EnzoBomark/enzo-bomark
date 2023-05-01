import styled from 'styled-components';
import { UIElements } from 'styles';

const Layout = styled.span`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const S = {
  ...UIElements,
  Layout,
};
