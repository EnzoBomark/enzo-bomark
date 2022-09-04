import styled from "styled-components";
import { Header, IHeader } from "./Default";

interface Props extends IHeader {}

export const H4 = styled.h4<Props>`
  font-size: 2.4rem;
  ${Header}
`;
