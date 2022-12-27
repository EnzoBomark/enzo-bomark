import * as S from "./NavBlock.styled";
import React from "react";

type Props = React.PropsWithChildren;

export const NavBlock: React.FC<Props> = (props) => {
  return (
    <S.NavBlockWrapper>
      <S.NavBlockChildren>{props.children}</S.NavBlockChildren>
      <S.NavBlockContent>Test</S.NavBlockContent>
    </S.NavBlockWrapper>
  );
};
