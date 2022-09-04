import * as React from "react";
import * as S from "./Main.styled";

type Props = {
  children: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
