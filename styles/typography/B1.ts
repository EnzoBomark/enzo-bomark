import styled from 'styled-components';
import { Regular } from './Default';

type Props = Regular;

export const B1 = styled.p<Props>`
  font-size: 1.6rem;
  line-height: 2.2rem;
  ${Regular}
`;
