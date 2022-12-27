import { useHover } from "hooks/ueeHover";
import { useRef } from "react";

export const BlockElement = {
  Posts: "posts",
  Templates: "templates",
  Snippets: "snippets",
  Work: "work",
} as const;

export type BlockElementType = typeof BlockElement[keyof typeof BlockElement];

export interface BlockElementRef extends HTMLDivElement {
  attributes: NamedNodeMap & {
    "data-name": Attr & {
      value: BlockElementType;
    };
  };
}

export const useHeaderHoverRef = () => {
  const postsRef = useRef<BlockElementRef>(null);
  const templatesRef = useRef<BlockElementRef>(null);
  const snippetsRef = useRef<BlockElementRef>(null);
  const workRef = useRef<BlockElementRef>(null);

  const [isHovering, refElement] = useHover([
    postsRef,
    templatesRef,
    snippetsRef,
    workRef,
  ]);

  const element = {
    name: refElement?.current?.attributes?.["data-name"].value,
    rect: refElement?.current?.getBoundingClientRect(),
  };

  return {
    postsRef,
    templatesRef,
    snippetsRef,
    workRef,
    element: isHovering ? element : null,
  };
};
