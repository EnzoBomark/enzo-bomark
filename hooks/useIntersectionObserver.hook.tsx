import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.hook";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(args?: Args) {
  const ref = useRef<HTMLDivElement>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [isVisible, setVisible] = useState(false);
  const frozen = entry?.isIntersecting && args?.freezeOnceVisible;

  const updateEntry = ([item]: IntersectionObserverEntry[]): void => {
    setEntry(item);
    setVisible(!!item.isIntersecting);
  };

  useIsomorphicLayoutEffect(() => {
    const node = ref?.current;

    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = {
      threshold: args?.threshold,
      root: args?.root,
      rootMargin: args?.rootMargin,
    };

    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref?.current, frozen]);

  return {
    isVisible,
    ref,
    entry,
  };
}

export default useIntersectionObserver;
