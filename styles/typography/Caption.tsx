import styled from "styled-components";
import { Regular, IRegular } from "./Default";

interface Props extends IRegular {}

export const Caption = styled.p<Props>`
  font-size: 1.4rem;
  font-style: italic;
  ${Regular}

  ::before {
    content: "“";
  }

  ::after {
    content: "”";
  }
`;
