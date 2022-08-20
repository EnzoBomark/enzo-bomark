import styled from "styled-components";
import NextLink from "next/link";
import { Regular, IRegular } from "./Default";

interface Props extends IRegular {}

export const Link = styled(NextLink)<Props>`
  font-size: 16px;
  ${Regular}
`;
