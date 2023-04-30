import styled from 'styled-components';
import { Header } from './Default';

type Props = Header;

export const H3 = styled.h3<Props>`
  font-size: 3.2rem;
  line-height: 3.6rem;
  ${Header}
`;
