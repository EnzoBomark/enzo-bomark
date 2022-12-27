import * as S from "./MobileMenu.styled";
import React from "react";

type Props = React.PropsWithChildren<{ isOpen: boolean }>;

export const MobileMenu: React.FC<Props> = (props) => {
  return (
    <S.MobileMenu isOpen={props.isOpen}>
      <S.NavLinksWrapper>{props.children}</S.NavLinksWrapper>
    </S.MobileMenu>
  );
};
