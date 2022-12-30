import React from 'react';
import { NavLink } from 'components/navigation/NavLink';

export const MobileLinks = () => {
  return (
    <>
      <NavLink href="/" arrow>
        Home
      </NavLink>
      <NavLink href="/posts" arrow>
        Posts
      </NavLink>
      <NavLink href="/projects" arrow>
        Projects
      </NavLink>
      <NavLink href="/snippets" arrow>
        Snippets
      </NavLink>
      <NavLink href="/about" arrow>
        About
      </NavLink>
      <NavLink href="/work" arrow>
        Work
      </NavLink>
    </>
  );
};
