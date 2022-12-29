import * as S from "./Header.styled";
import React from "react";
import Link from "next/link";
import Logo from "assets/icons/Logo.svg";
import { Hamburger } from "components/navigation/Hamburger";
import { MobileMenu } from "components/navigation/MobileMenu";
import { useHamburger } from "./useHamburger.hook";
import { MobileLinks } from "./components/MobileLinks";
import { DesktopLinks } from "./components/DesktopLinks";

export const Header = () => {
  const [isHamburgerActive, toggleHamburger] = useHamburger();

  return (
    <S.HeaderContainer isOpen={isHamburgerActive}>
      <S.HeaderInner>
        <S.HamburgerWrapper>
          <Hamburger isOpen={isHamburgerActive} setIsOpen={toggleHamburger} />
        </S.HamburgerWrapper>

        <S.IconWrapper>
          <Link href="/">
            <Logo color="white" className="icon-m" />
          </Link>
        </S.IconWrapper>

        <S.NavLinksWrapper>
          <DesktopLinks />
        </S.NavLinksWrapper>

        <S.SpecialLinksWrapper>
          <S.B3>Contact</S.B3>
        </S.SpecialLinksWrapper>
      </S.HeaderInner>

      <MobileMenu isOpen={isHamburgerActive}>
        <MobileLinks />
      </MobileMenu>
    </S.HeaderContainer>
  );
};
