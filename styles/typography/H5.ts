import styled from 'styled-components';
import { Header } from './Default';

type Props = Header;

export const H5 = styled.h5<Props>`
  font-size: 1.8rem;
  line-height: 2.4rem;
  ${Header}
`;
