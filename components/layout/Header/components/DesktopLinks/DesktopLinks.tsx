import React from "react";
import { NavLink } from "components/navigation/NavLink";
import { useHeaderHoverRef } from "./useHeaderHoverRef.hook";
import { NavBlock } from "components/navigation/NavBlock";
import { DropDown } from "./DropDown.child";

export const DesktopLinks = () => {
  const refs = useHeaderHoverRef();

  return (
    <>
      <NavLink href="/">Home</NavLink>

      <NavLink block name="posts" href="/posts" ref={refs.postsRef}>
        Posts
      </NavLink>

      <NavLink block name="snippets" href="/snippets" ref={refs.snippetsRef}>
        Snippets
      </NavLink>

      <NavLink block name="projects" href="/projects" ref={refs.projectsRef}>
        Projects
      </NavLink>

      <NavLink block name="about" href="/about" ref={refs.aboutRef}>
        About
      </NavLink>

      <NavLink href="/work">Work</NavLink>

      <NavBlock
        isHovering={refs.isHovering}
        ref={refs.navBlockRef}
        rect={refs.element?.rect}
      >
        {refs.element && <DropDown type={refs.element.name} />}
      </NavBlock>
    </>
  );
};
