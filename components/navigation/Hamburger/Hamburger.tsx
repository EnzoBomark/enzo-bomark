import { S } from './Hamburger.styles';
import React from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const Hamburger: React.FC<Props> = (props) => {
  return (
    <S.Hamburger onClick={props.setIsOpen} isOpen={props.isOpen}>
      <S.BarOne />
      <S.BarTwo />
    </S.Hamburger>
  );
};
