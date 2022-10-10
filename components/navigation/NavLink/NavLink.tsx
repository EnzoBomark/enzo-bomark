import * as React from "react";
import * as S from "./NavLink.styled";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = React.PropsWithChildren<{
  href: string;
  arrow?: boolean;
  icon?: React.ReactNode;
  block?: boolean;
}>;

const NavLink: React.FC<Props> = (props) => {
  const router = useRouter();
  const activeLink = router.pathname === props.href;

  return (
    <Link href={props.href}>
      <S.NavLink>
        {!props.icon && props.arrow && (
          <S.ChevronRight color="white" className="icon-xs" />
        )}

        {props.icon && <S.IconWrapper>{props.icon}</S.IconWrapper>}

        <S.Anchor active={activeLink}>{props.children}</S.Anchor>

        {props.block && <S.ChevronDown color="white" className="icon-3xs" />}
      </S.NavLink>
    </Link>
  );
};

export default NavLink;
