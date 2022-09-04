import styled from "styled-components";
import { Header, IHeader } from "./Default";

interface Props extends IHeader {}

export const H1 = styled.h1<Props>`
  font-size: 6.4rem;
  ${Header}
`;
