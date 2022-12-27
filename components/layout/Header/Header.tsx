import * as S from "./Header.styled";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "assets/icons/Logo.svg";
import { useWindowSize } from "hooks/useWindowSize";
import { NavLink } from "components/navigation/NavLink";
import { NavBlock } from "components/navigation/NavBlock";
import { Hamburger } from "components/navigation/Hamburger";
import { MobileMenu } from "components/navigation/MobileMenu";
import { mediaSize } from "styles";

export const Header = () => {
  const window = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const onPressHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (window.width > mediaSize.m) setIsOpen(false);
  }, [window.width]);

  return (
    <S.Header isOpen={isOpen}>
      <S.Container>
        <S.HamburgerWrapper>
          <Hamburger isOpen={isOpen} setIsOpen={onPressHandler} />
        </S.HamburgerWrapper>

        <S.IconWrapper>
          <Link href="/">
            <Logo color="white" className="icon-m" />
          </Link>
        </S.IconWrapper>

        <S.NavLinksWrapper>
          <NavLink href="/">Home</NavLink>

          <NavBlock>
            <NavLink href="/posts" block>
              Posts
            </NavLink>
          </NavBlock>

          <NavBlock>
            <NavLink href="/templates" block>
              Templates
            </NavLink>
          </NavBlock>

          <NavBlock>
            <NavLink href="/snippets" block>
              Snippets
            </NavLink>
          </NavBlock>

          <NavBlock>
            <NavLink href="/work" block>
              Work
            </NavLink>
          </NavBlock>

          <NavLink href="/about">About</NavLink>
        </S.NavLinksWrapper>

        <S.SpecialLinksWrapper>
          <S.B3>Contact</S.B3>
        </S.SpecialLinksWrapper>
      </S.Container>

      <MobileMenu isOpen={isOpen}>
        <NavLink href="/" arrow>
          Home
        </NavLink>
        <NavLink href="/posts" arrow>
          Posts
        </NavLink>
        <NavLink href="/templates" arrow>
          Templates
        </NavLink>
        <NavLink href="/snippets" arrow>
          Snippets
        </NavLink>
        <NavLink href="/about" arrow>
          About
        </NavLink>
      </MobileMenu>
    </S.Header>
  );
};
