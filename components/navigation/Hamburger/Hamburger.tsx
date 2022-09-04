import * as React from "react";
import * as S from "./Hamburger.styled";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const Hamburger: React.FC<Props> = (props) => {
  return (
    <S.Hamburger onClick={props.setIsOpen} isOpen={props.isOpen}>
      <S.BarOne />
      <S.BarTwo />
    </S.Hamburger>
  );
};

export default Hamburger;
