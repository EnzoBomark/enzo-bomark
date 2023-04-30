import styled from 'styled-components';
import { Regular } from './Default';

type Props = Regular;

export const Detail = styled.p<Props>`
  font-size: 1.4rem;
  line-height: 2rem;
  text-transform: capitalize;
  ${Regular}
`;
