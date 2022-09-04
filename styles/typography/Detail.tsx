import styled from "styled-components";
import { Regular, IRegular } from "./Default";

interface Props extends IRegular {}

export const Detail = styled.p<Props>`
  font-size: 1.4rem;
  text-transform: capitalize;
  ${Regular}
`;
