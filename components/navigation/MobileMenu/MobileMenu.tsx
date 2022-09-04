import * as React from "react";
import * as S from "./MobileMenu.styled";

type Props = React.PropsWithChildren<{ isOpen: boolean }>;

const MobileMenu: React.FC<Props> = (props) => {
  return (
    <S.MobileMenu isOpen={props.isOpen}>
      <S.NavLinksWrapper>{props.children}</S.NavLinksWrapper>
    </S.MobileMenu>
  );
};

export default MobileMenu;
