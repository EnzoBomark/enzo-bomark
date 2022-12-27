import styled from "styled-components";
import { Header, IHeader } from "./Default";

type Props = IHeader;

export const H5 = styled.h5<Props>`
  font-size: 1.8rem;
  line-height: 2.4rem;
  ${Header}
`;
