import styled from 'styled-components';
import { Regular } from './Default';

type Props = Regular;

export const Anchor = styled.a<Props>`
  font-size: 1.4rem;
  line-height: 2rem;
  ${Regular}
`;
