import styled from "styled-components";
import NextLink from "next/link";
import { Regular, IRegular } from "./Default";

type Props = IRegular;

export const Link = styled(NextLink)<Props>`
  font-size: 1.4rem;
  ${Regular}
`;
