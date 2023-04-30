import styled from 'styled-components';
import { Header } from './Default';

type Props = Header;

export const H4 = styled.h4<Props>`
  font-size: 2.4rem;
  line-height: 3rem;
  ${Header}
`;
