import styled from "styled-components";
import { Regular, IRegular } from "./Default";

type Props = IRegular;

export const Anchor = styled.a<Props>`
  font-size: 1.4rem;
  ${Regular}
`;
