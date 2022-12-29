import React from "react";
import { NavLink } from "components/navigation/NavLink";
import { useHeaderHoverRef, BlockElementType } from "./useHeaderHoverRef.hook";
import { NavBlock } from "components/navigation/NavBlock";
import { PostsBlock } from "./PostsBlock.child";
import { TemplatesBlock } from "./TemplatesBlock.child";
import { SnippetsBlock } from "./SnippetsBlock.child";
import { WorkBlock } from "./WorkBlock.child";

export const DesktopLinks = () => {
  const refs = useHeaderHoverRef();

  const blockContent: Record<BlockElementType, React.FC> = {
    posts: PostsBlock,
    templates: TemplatesBlock,
    snippets: SnippetsBlock,
    work: WorkBlock,
  };

  return (
    <>
      <NavLink href="/">Home</NavLink>

      <NavLink block name="posts" href="/posts" ref={refs.postsRef}>
        Posts
      </NavLink>

      <NavLink block name="templates" href="/templates" ref={refs.templatesRef}>
        Templates
      </NavLink>

      <NavLink block name="snippets" href="/snippets" ref={refs.snippetsRef}>
        Snippets
      </NavLink>

      <NavLink block name="work" href="/work" ref={refs.workRef}>
        Work
      </NavLink>

      <NavLink href="/about">About</NavLink>

      <NavBlock
        isHovering={refs.isHovering}
        ref={refs.navBlockRef}
        rect={refs.element?.rect}
      >
        {refs.element && React.createElement(blockContent[refs.element?.name])}
      </NavBlock>
    </>
  );
};
