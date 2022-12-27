import styled from "styled-components";
import { Header, IHeader } from "./Default";

type Props = IHeader;

export const H4 = styled.h4<Props>`
  font-size: 2.4rem;
  ${Header}
`;
