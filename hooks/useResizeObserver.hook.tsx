import React, { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.hook";

export function useResizeObserver<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>
) {
  const [element, setElement] = useState<T | null>(null);
  const [rect, setRect] = useState<DOMRect>();
  const observer = useRef<ResizeObserver | null>(null);

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useIsomorphicLayoutEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useIsomorphicLayoutEffect(() => {
    if (!element) return;
    cleanOb();

    const ob = (observer.current = new ResizeObserver(([entry]) => {
      setRect(entry.target.getBoundingClientRect());
    }));
    ob.observe(element);

    return () => {
      cleanOb();
    };
  }, [element]);

  return rect;
}
