import * as React from "react";

import Wrapper from "./H1.styled";

interface H1 {}

const H1: React.FC<React.PropsWithChildren<H1>> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default H1;
