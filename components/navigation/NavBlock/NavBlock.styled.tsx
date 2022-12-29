import styled, { css } from "styled-components";

export const NavBlockContainer = styled.div<{
  isHovering: boolean;
  isHidden: boolean;
}>`
  animation: fadeIn 0.4s;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.isHovering
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  ${(props) =>
    props.isHidden
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;

export const NavBlockContentArrow = styled.div<{
  position: number;
}>`
  position: absolute;
  width: 0;
  height: 0;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${(props) => props.theme.color.g0}cc;
  backdrop-filter: blur(10px);
  top: calc(100% + 4px);
  left: ${(props) => props.position}px;
  transition: all 0.2s ease-in-out;

  /* &::after {
    content: "";
    position: absolute;
    top: -6px;
    left: var(--position);
    width: 10px;
    height: 10px;
    background-color: transparent;
    transform: translateX(-50%) rotate(45deg);
    border-top: 1px solid ${(props) => props.theme.color.g100}99;
    border-left: 1px solid ${(props) => props.theme.color.g100}99;
  } */
`;

export const NavBlockContent = styled.div<{
  position: number;
}>`
  position: absolute;
  top: 100%;
  left: ${(props) => props.position}px;

  transition: all 0.2s ease-in-out;
  transform: translateX(-50%);
  padding-top: 10px;
`;

export const NavBlockContentInner = styled.div<{
  width: number | undefined;
  height: number | undefined;
}>`
  min-width: 15rem;
  min-height: 5rem;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  transition: all 0.2s ease-in-out;

  background-color: ${(props) => props.theme.color.g0}cc;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.g100}99;
  backdrop-filter: blur(10px);
`;

export const ChildrenContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;

export * from "styles";
