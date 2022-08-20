import * as React from "react";
import * as S from "./Main.styled";

const Main: React.FC = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
