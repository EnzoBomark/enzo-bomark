import * as React from "react";

import Wrapper from "./Main.styled";

interface Main {}

const Main: React.FC<React.PropsWithChildren<Main>> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Main;
