import styled from "styled-components";
import { Regular, IRegular } from "./Default";

interface Props extends IRegular {}

export const Body = styled.p<Props>`
  font-size: 14px;
  ${Regular}
`;
