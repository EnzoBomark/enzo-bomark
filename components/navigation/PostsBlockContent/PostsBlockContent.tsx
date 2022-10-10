import * as React from "react";
import * as S from "./PostsBlockContent.styled";
import NavLink from "../NavLink";
import ReactIcon from "assets/icons/React.svg";
import NodeIcon from "assets/icons/Node.svg";

const PostBlockContent = () => {
  return (
    <S.PostsBlockContent>
      <S.CategoriesWrapper>
        <S.B2>Categories</S.B2>

        <NavLink
          href="/posts/react"
          icon={<ReactIcon color="white" className="icon-xs" />}
        >
          React
        </NavLink>
        <NavLink
          href="/posts/react-native"
          icon={<ReactIcon color="white" className="icon-xs" />}
        >
          React Native
        </NavLink>
        <NavLink
          href="/posts/typescript"
          icon={<NodeIcon color="white" className="icon-xs" />}
        >
          TypeScript
        </NavLink>
        <NavLink
          href="/posts/express"
          icon={<NodeIcon color="white" className="icon-xs" />}
        >
          Express
        </NavLink>
      </S.CategoriesWrapper>

      <S.ContentDiver />

      <S.LatestWrapper>
        <S.B2>Latest</S.B2>

        <NavLink href="/posts/react/test" arrow>
          How to create a custom React hook
        </NavLink>
      </S.LatestWrapper>
    </S.PostsBlockContent>
  );
};

export default PostBlockContent;
