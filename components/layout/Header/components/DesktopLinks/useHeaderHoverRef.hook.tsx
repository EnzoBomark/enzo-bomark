import { useHover } from "hooks/useHover.hook";
import { useRef, useState, useEffect } from "react";

export const BlockElement = {
  Posts: "posts",
  Templates: "templates",
  Snippets: "snippets",
  Work: "work",
} as const;

export type BlockElementType = typeof BlockElement[keyof typeof BlockElement];

type Element = {
  name: BlockElementType;
  rect: DOMRect | null;
};

export interface BlockElementRef extends HTMLDivElement {
  attributes: NamedNodeMap & {
    "data-is-nav-block": Attr;
    "data-name": Attr & {
      value: BlockElementType;
    };
  };
}

export const useHeaderHoverRef = () => {
  const [element, setElement] = useState<Element>();

  const navBlockRef = useRef<BlockElementRef>(null);
  const postsRef = useRef<BlockElementRef>(null);
  const templatesRef = useRef<BlockElementRef>(null);
  const snippetsRef = useRef<BlockElementRef>(null);
  const workRef = useRef<BlockElementRef>(null);

  const [isHovering, refElement] = useHover([
    navBlockRef,
    postsRef,
    templatesRef,
    snippetsRef,
    workRef,
  ]);

  useEffect(() => {
    if (
      refElement?.current?.attributes?.["data-is-nav-block"] ||
      !refElement?.current?.attributes?.["data-name"]?.value ||
      !refElement?.current?.getBoundingClientRect()
    )
      return;

    setElement({
      name: refElement?.current?.attributes?.["data-name"].value,
      rect: refElement?.current?.getBoundingClientRect(),
    });
  }, [refElement]);

  return {
    navBlockRef,
    postsRef,
    templatesRef,
    snippetsRef,
    workRef,
    element,
    isHovering,
  };
};
