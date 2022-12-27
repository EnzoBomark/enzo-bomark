import * as S from "./NavBlock.styled";
import React from "react";

type Props = React.PropsWithChildren<{
  parent: {
    y: number;
    x: number;
    width: number;
    height: number;
  };
}>;

export const NavBlock: React.FC<Props> = (props) => {
  return (
    <S.NavBlockContent parent={props.parent}>
      <S.B2>{props.children}</S.B2>
    </S.NavBlockContent>
  );
};
