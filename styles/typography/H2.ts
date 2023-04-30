import styled from 'styled-components';
import { Header } from './Default';

type Props = Header;

export const H2 = styled.h2<Props>`
  font-size: 4.8rem;
  line-height: 5.6rem;
  ${Header}
`;
