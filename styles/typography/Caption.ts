import styled from 'styled-components';
import { Regular } from './Default';

type Props = Regular;

export const Caption = styled.p<Props>`
  font-size: 1.4rem;
  line-height: 2rem;
  font-style: italic;
  ${Regular}

  ::before {
    content: '“';
  }

  ::after {
    content: '”';
  }
`;
