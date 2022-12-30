import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { S } from './NavBlock.styles';
import { useResizeObserver } from 'hooks/useResizeObserver.hook';
import { mediaSize } from 'styles';

type Props = React.PropsWithChildren<{
  isHovering: boolean;
  rect: DOMRect | null | undefined;
}>;

interface NavBlockRef extends HTMLDivElement {
  attributes: NamedNodeMap & {
    'data-is-nav-block': Attr;
  };
}

export const NavBlock = forwardRef<NavBlockRef, Props>((props, ref) => {
  const [isHidden, setIsHidden] = useState(true);
  const childRef = React.useRef<HTMLDivElement>(null);
  const childRect = useResizeObserver(childRef);

  useEffect(() => {
    if (props.isHovering) return setIsHidden(false);

    const timeout = setTimeout(() => {
      setIsHidden(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [props.isHovering]);

  const blockPosition = useMemo(() => {
    if (typeof window === 'undefined') return 0;
    const width = window.innerWidth || 0;
    const centerOfScreen = width / 2;
    const centerOfParent = (props.rect?.x || 0) + (props.rect?.width || 0) / 2;
    const offset = width > mediaSize.xl ? (width - mediaSize.xl) / 2 : 0;

    const childWidth = childRect?.width || 0;

    const leftEdgeOfChild = centerOfParent - childWidth / 2 - offset;
    const rightEdgeOfChild = centerOfParent + childWidth / 2 - offset;

    if (Math.abs(centerOfScreen - centerOfParent) < 80)
      return centerOfParent - offset;
    else if (centerOfScreen < centerOfParent) {
      return centerOfParent - offset - (rightEdgeOfChild - centerOfScreen) / 8;
    } else if (centerOfScreen > centerOfParent) {
      return centerOfParent - offset - (leftEdgeOfChild - centerOfScreen) / 8;
    } else return 0;
  }, [props.rect, childRect]);

  const arrowPosition = useMemo(() => {
    if (typeof window === 'undefined') return 0;
    const width = window.innerWidth || 0;
    const offset = width > mediaSize.xl ? (width - mediaSize.xl) / 2 : 0;
    return (props.rect?.x || 0) + (props.rect?.width || 0) / 2 - offset;
  }, [props.rect]);

  return (
    <S.NavBlockContainer isHidden={isHidden} isHovering={props.isHovering}>
      <S.NavBlockContent
        position={blockPosition}
        ref={ref}
        data-is-nav-block
        data-name="nav-block"
      >
        <S.NavBlockContentInner
          width={childRect?.width}
          height={childRect?.height}
        >
          <S.ChildrenContainer ref={childRef}>
            {props.children}
          </S.ChildrenContainer>
        </S.NavBlockContentInner>
      </S.NavBlockContent>
      <S.NavBlockContentArrow position={arrowPosition} />
    </S.NavBlockContainer>
  );
});
