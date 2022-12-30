import React from 'react';
import * as S from './Main.styles';

type Props = {
  children: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};
