import styled from 'styled-components';
import { Header } from './Default';

type Props = Header;

export const H1 = styled.h1<Props>`
  font-size: 6.4rem;
  line-height: 7.2rem;
  ${Header}
`;
