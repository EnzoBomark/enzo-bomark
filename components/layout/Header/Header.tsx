import * as React from "react";
import * as S from "./Header.styled";
import Link from "next/link";
import Logo from "assets/icons/Logo.svg";
import useWindowSize from "hooks/useWindowSize";
import NavLink from "components/navigation/NavLink";
import NavBlock from "components/navigation/NavBlock";
import Hamburger from "components/navigation/Hamburger";
import MobileMenu from "components/navigation/MobileMenu";
import PostsBlockContent from "components/navigation/PostsBlockContent";
import TemplatesBlockContent from "components/navigation/TemplatesBlockContent";
import SnippetsBlockContent from "components/navigation/SnippetsBlockContent";
import WorkBlockContent from "components/navigation/WorkBlockContent";
import { mediaSize } from "styles";

const Header: React.FC = () => {
  const window = useWindowSize();
  const [isOpen, setIsOpen] = React.useState(false);

  const onPressHandler = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  React.useEffect(() => {
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
          <NavBlock href="/posts" blockContent={<PostsBlockContent />}>
            Posts
          </NavBlock>
          <NavBlock href="/templates" blockContent={<TemplatesBlockContent />}>
            Templates
          </NavBlock>
          <NavBlock href="/snippets" blockContent={<SnippetsBlockContent />}>
            Snippets
          </NavBlock>
          <NavBlock href="/work" blockContent={<WorkBlockContent />}>
            Work
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

export default Header;
