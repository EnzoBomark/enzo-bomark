import styled from "styled-components";
import { Regular, IRegular } from "./Default";

interface Props extends IRegular {}

export const Caption = styled.p<Props>`
  font-size: 16px;
  font-style: italic;
  ${Regular}

  ::before {
    content: "“";
  }

  ::after {
    content: "”";
  }
`;
