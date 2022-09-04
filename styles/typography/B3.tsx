import styled from "styled-components";
import { Regular, IRegular } from "./Default";

interface Props extends IRegular {}

export const B3 = styled.p<Props>`
  font-size: 1.2rem;
  ${Regular}
`;
