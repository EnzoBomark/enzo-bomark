import styled from "styled-components";
import { Header, IHeader } from "./Default";

type Props = IHeader;

export const H3 = styled.h3<Props>`
  font-size: 3.2rem;
  line-height: 3.6rem;
  ${Header}
`;
