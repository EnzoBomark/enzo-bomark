import React from 'react';
import { S } from './MobileMenu.styles';

type Props = React.PropsWithChildren<{ isOpen: boolean }>;

export const MobileMenu: React.FC<Props> = (props) => {
  return (
    <S.MobileMenu isOpen={props.isOpen}>
      <S.NavLinksWrapper>{props.children}</S.NavLinksWrapper>
    </S.MobileMenu>
  );
};
