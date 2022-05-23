import * as React from "react";

import Wrapper from "./Paragraph.styled";

interface Paragraph {}

const Paragraph: React.FC<React.PropsWithChildren<Paragraph>> = ({
  children,
}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Paragraph;
