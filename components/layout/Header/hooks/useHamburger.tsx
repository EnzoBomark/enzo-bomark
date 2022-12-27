import { useWindowSize } from "hooks/useWindowSize";
import { useEffect, useState } from "react";
import { mediaSize } from "../Header.styled";

export const useHamburger = () => {
  const window = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.width > mediaSize.m) setIsOpen(false);
  }, [window.width]);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, toggleHandler] as const;
};
