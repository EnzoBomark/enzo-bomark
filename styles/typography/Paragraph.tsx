import styled from "styled-components";
import { Regular, IRegular } from "./Default";

interface Props extends IRegular {}

export const Paragraph = styled.p<Props>`
  font-size: 16px;
  ${Regular}
`;
