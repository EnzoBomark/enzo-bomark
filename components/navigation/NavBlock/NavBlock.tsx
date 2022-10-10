import * as React from "react";
import * as S from "./NavBlock.styled";
import { mediaSize } from "styles";
import NavLink from "../NavLink";
import useWindowSize from "@/hooks/useWindowSize";

type Props = React.PropsWithChildren<{
  href: string;
  blockContent: React.ReactNode;
}>;

const NavBlock: React.FC<Props> = (props) => {
  const window = useWindowSize();
  const left = Math.max((window.width - mediaSize.xl) / 2, 0);

  return (
    <S.NavBlock>
      <NavLink href={props.href} block>
        {props.children}
      </NavLink>

      <S.Block left={-left}>{props.blockContent}</S.Block>
    </S.NavBlock>
  );
};

export default NavBlock;
