import React, { forwardRef } from 'react';
import { S } from './NavBlock.styles';
import { useNavBlockPosition } from './useNavBlockPosition.hook';
import { useShowNavBlock } from './useShowNavBlock.hook';

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
  const { position, child } = useNavBlockPosition(props.rect);
  const { isHidden, isHovering } = useShowNavBlock(props.isHovering);

  return (
    <S.NavBlockContainer isHidden={isHidden} isHovering={isHovering}>
      <S.NavBlockContent
        position={position.block}
        ref={ref}
        data-is-nav-block
        data-name="nav-block"
      >
        <S.NavBlockContentInner width={child?.width} height={child?.height}>
          <S.ChildrenContainer ref={child.ref}>
            {props.children}
          </S.ChildrenContainer>
        </S.NavBlockContentInner>
      </S.NavBlockContent>

      <S.NavBlockContentArrow position={position.arrow} />
    </S.NavBlockContainer>
  );
});
