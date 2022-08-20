import styled from "styled-components";
import { Regular, IRegular } from "./Default";

interface Props extends IRegular {}

export const Label = styled.p<Props>`
  font-size: 20px;
  ${Regular}
`;
