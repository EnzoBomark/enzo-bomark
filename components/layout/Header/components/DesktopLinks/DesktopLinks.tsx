import React from "react";
import { NavLink } from "components/navigation/NavLink";
import {
  useHeaderHoverRef,
  BlockElementType,
} from "../../hooks/useHeaderHoverRef";
import { NavBlock } from "components/navigation/NavBlock";

export const DesktopLinks = () => {
  const refs = useHeaderHoverRef();

  const blockContent: Record<BlockElementType, React.FC> = {
    posts: () => <div>Posts</div>,
    templates: () => <div>Templates</div>,
    snippets: () => <div>Snippets</div>,
    work: () => <div>Work</div>,
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

      {refs.element?.name && (
        <NavBlock
          parent={{
            x: refs.element.rect?.x || 0,
            y: refs.element.rect?.y || 0,
            width: refs.element.rect?.width || 0,
            height: refs.element.rect?.height || 0,
          }}
        >
          {React.createElement(blockContent[refs.element?.name])}
        </NavBlock>
      )}
    </>
  );
};
