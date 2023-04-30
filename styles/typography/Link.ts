import styled from 'styled-components';
import NextLink from 'next/link';
import { Regular } from './Default';

type Props = Regular;

export const Link = styled(NextLink)<Props>`
  font-size: 1.4rem;
  line-height: 2rem;
  ${Regular}
`;
