import { useEffect, useState } from 'react';

export const useShowNavBlock = (isHovering: boolean) => {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    if (isHovering) return setIsHidden(false);

    const timeout = setTimeout(() => {
      setIsHidden(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [isHovering]);

  return {
    isHidden,
    isHovering,
  };
};
