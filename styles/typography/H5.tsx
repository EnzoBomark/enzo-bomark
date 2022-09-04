import styled from "styled-components";
import { Header, IHeader } from "./Default";

interface Props extends IHeader {}

export const H5 = styled.h5<Props>`
  font-size: 1.8rem;
  ${Header}
`;
