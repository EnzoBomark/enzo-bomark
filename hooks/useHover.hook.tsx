import React, { useState } from "react";
import { useEventListener } from "./useEventListener.hook";

export function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: React.RefObject<T> | ReadonlyArray<React.RefObject<T>>
) {
  const [value, setValue] = useState<boolean>(false);
  const [activeRef, setActiveRef] = useState<React.RefObject<T> | null>(null);

  const mouseEnterSetup = (ref: React.RefObject<T>) => () => {
    setActiveRef(ref);
    setValue(true);
  };

  const mouseLeaveSetup = () => {
    setValue(false);
  };

  const refs = Array.isArray(elementRef) ? elementRef : [elementRef];

  refs.forEach((ref) => {
    const mouseEnterHandler = mouseEnterSetup(ref);
    const mouseLeaveHandler = mouseLeaveSetup;

    useEventListener("mouseenter", mouseEnterHandler, ref);
    useEventListener("mouseleave", mouseLeaveHandler, ref);
  });

  return [value, activeRef] as const;
}
