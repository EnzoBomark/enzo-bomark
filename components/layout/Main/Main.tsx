import React from 'react';
import { S } from './Main.styles';

type Props = React.PropsWithChildren;

export const Main: React.FC<Props> = (props) => {
  return <S.Main>{props.children}</S.Main>;
};
