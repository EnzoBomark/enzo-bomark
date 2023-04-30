import { useMemo, useRef } from 'react';
import { useResizeObserver } from 'hooks/useResizeObserver.hook';
import { useWindowSize } from 'hooks/useWindowSize.hook';
import { mediaSize } from 'styles';

const initialRect: DOMRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: () => {
    throw new Error('toJSON Cannot be called on initialRect');
  },
};

export const useNavBlockPosition = (args: DOMRect | undefined | null) => {
  const rect = args || initialRect;
  const window = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const childRect = useResizeObserver(ref);

  const block = useMemo(() => {
    const centerOfScreen = window.width / 2;
    const centerOfParent = rect.x + rect.width / 2;
    const offset =
      window.width > mediaSize.xl ? (window.width - mediaSize.xl) / 2 : 0;

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
  }, [rect, childRect]);

  const arrow = useMemo(() => {
    if (typeof window === 'undefined') return 0;

    const offset =
      window.width > mediaSize.xl ? (window.width - mediaSize.xl) / 2 : 0;
    return rect.x + rect.width / 2 - offset;
  }, [rect]);

  return {
    position: {
      block,
      arrow,
    },
    child: {
      ref,
      height: childRect?.height,
      width: childRect?.width,
    },
  };
};
