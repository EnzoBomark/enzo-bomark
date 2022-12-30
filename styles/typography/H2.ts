import styled from 'styled-components';

import { Header, IHeader } from './Default';

type Props = IHeader;

export const H2 = styled.h2<Props>`
  font-size: 4.8rem;
  line-height: 5.6rem;
  ${Header}
`;
