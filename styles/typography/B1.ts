import styled from 'styled-components';
import { Regular, IRegular } from './Default';

type Props = IRegular;

export const B1 = styled.p<Props>`
  font-size: 1.6rem;
  line-height: 2.2rem;
  ${Regular}
`;
