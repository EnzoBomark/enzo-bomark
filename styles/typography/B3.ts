import styled from 'styled-components';
import { Regular } from './Default';

type Props = Regular;

export const B3 = styled.p<Props>`
  font-size: 1.2rem;
  line-height: 1.8rem;
  ${Regular}
`;
