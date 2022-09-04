import * as React from "react";
import * as S from "./Header.styled";
import Link from "next/link";
import Logo from "assets/icons/Logo.svg";
import NavLink from "components/navigation/NavLink";
import NavBlock from "components/navigation/NavBlock";
import Hamburger from "components/navigation/Hamburger";
import MobileMenu from "components/navigation/MobileMenu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onPressHandler = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

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
          <NavBlock href="/posts">Posts</NavBlock>
          <NavBlock href="/templates">Templates</NavBlock>
          <NavBlock href="/snippets">Snippets</NavBlock>
          <NavBlock href="/work">Work</NavBlock>
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

export default Header;
