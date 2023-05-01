import { useHover } from 'hooks/useHover';
import { useRef, useState, useEffect } from 'react';

export const BlockElement = {
  Posts: 'posts',
  Projects: 'projects',
  Snippets: 'snippets',
  About: 'about',
} as const;

export type BlockElementType = typeof BlockElement[keyof typeof BlockElement];

type Element = {
  name: BlockElementType;
  rect: DOMRect | null;
};

export interface BlockElementRef extends HTMLDivElement {
  attributes: NamedNodeMap & {
    'data-is-nav-block': Attr;
    'data-name': Attr & {
      value: BlockElementType;
    };
  };
}

export const useHeaderHoverRef = () => {
  const [element, setElement] = useState<Element>();

  const navBlockRef = useRef<BlockElementRef>(null);
  const postsRef = useRef<BlockElementRef>(null);
  const projectsRef = useRef<BlockElementRef>(null);
  const snippetsRef = useRef<BlockElementRef>(null);
  const aboutRef = useRef<BlockElementRef>(null);

  const [isHovering, refElement] = useHover([
    navBlockRef,
    postsRef,
    projectsRef,
    snippetsRef,
    aboutRef,
  ]);

  useEffect(() => {
    if (
      refElement?.current?.attributes?.['data-is-nav-block'] ||
      !refElement?.current?.attributes?.['data-name']?.value ||
      !refElement?.current?.getBoundingClientRect()
    )
      return;

    setElement({
      name: refElement?.current?.attributes?.['data-name'].value,
      rect: refElement?.current?.getBoundingClientRect(),
    });
  }, [refElement]);

  return {
    navBlockRef,
    postsRef,
    projectsRef,
    snippetsRef,
    aboutRef,
    element,
    isHovering,
  };
};
