import React, { forwardRef } from 'react';
import { S } from './NavLink.styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = React.PropsWithChildren<{
  href: string;
  name?: string;
  arrow?: boolean;
  icon?: React.ReactNode;
  block?: boolean;
}>;

interface NavLinkRef extends HTMLDivElement {
  attributes: NamedNodeMap & {
    'data-name': Attr;
  };
}

export const NavLink = forwardRef<NavLinkRef, Props>((props, ref) => {
  const router = useRouter();
  const activeLink = router.pathname === props.href;

  return (
    <Link href={props.href} passHref legacyBehavior>
      <S.NavLinkWrapper>
        <S.NavLink ref={ref} data-name={props.name || props.href}>
          {!props.icon && props.arrow && (
            <S.ChevronRight color="white" className="icon-xs" />
          )}

          {props.icon && <S.IconWrapper>{props.icon}</S.IconWrapper>}

          <S.B3 active={activeLink}>{props.children}</S.B3>

          {props.block && <S.ChevronDown color="white" />}
        </S.NavLink>
      </S.NavLinkWrapper>
    </Link>
  );
});
