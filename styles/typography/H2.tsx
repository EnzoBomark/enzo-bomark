import styled from "styled-components";

import { Header, IHeader } from "./Default";

interface Props extends IHeader {}

export const H2 = styled.h2<Props>`
  font-size: 4.8rem;
  ${Header}
`;
