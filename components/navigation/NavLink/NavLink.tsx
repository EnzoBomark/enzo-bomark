import * as S from "./NavLink.styled";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = React.PropsWithChildren<{
  href: string;
  arrow?: boolean;
  icon?: React.ReactNode;
  block?: boolean;
}>;

export const NavLink: React.FC<Props> = (props) => {
  const router = useRouter();
  const activeLink = router.pathname === props.href;

  return (
    <Link href={props.href} passHref legacyBehavior>
      <S.NavLinkWrapper>
        <S.NavLink>
          {!props.icon && props.arrow && (
            <S.ChevronRight color="white" className="icon-xs" />
          )}

          {props.icon && <S.IconWrapper>{props.icon}</S.IconWrapper>}

          <S.B3 active={activeLink}>{props.children}</S.B3>

          {props.block && <S.ChevronDown color="white" className="icon-3xs" />}
        </S.NavLink>
      </S.NavLinkWrapper>
    </Link>
  );
};
