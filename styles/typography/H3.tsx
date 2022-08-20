import styled from "styled-components";
import { Header, IHeader } from "./Default";

interface Props extends IHeader {}

export const H3 = styled.h3<Props>`
  font-size: 32px;
  ${Header}
`;
