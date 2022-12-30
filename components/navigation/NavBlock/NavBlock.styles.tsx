import styled, { css } from 'styled-components';
import { S as Styles } from 'styles';

const NavBlockContainer = styled.div<{
  isHovering: boolean;
  isHidden: boolean;
}>`
  transition: all 0.2s ease;

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

const NavBlockContentArrow = styled.div<{
  position: number;
}>`
  position: absolute;
  width: 0;
  height: 0;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${(props) => props.theme.color.g50};
  top: calc(100% + 4px);
  left: ${(props) => props.position}px;
  transition: all 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: -7px;
    left: var(--position);
    width: 12px;
    height: 1px;
    background-color: ${(props) => props.theme.color.g50};
    transform: translateX(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: var(--position);
    width: 10px;
    height: 10px;
    background-color: transparent;
    transform: translateX(-50%) rotate(45deg);
    border-top: 1px solid ${(props) => props.theme.color.g100};
    border-left: 1px solid ${(props) => props.theme.color.g100};
  }
`;

const NavBlockContent = styled.div<{
  position: number;
}>`
  position: absolute;
  top: 100%;
  left: ${(props) => props.position}px;

  transition: all 0.2s ease;
  transform: translateX(-50%);
  padding-top: 10px;
`;

const NavBlockContentInner = styled.div<{
  width: number | undefined;
  height: number | undefined;
}>`
  min-width: 15rem;
  min-height: 5rem;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  transition: all 0.2s ease;

  background-color: ${(props) => props.theme.color.g50};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.g100};
`;

const ChildrenContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const S = {
  ...Styles,
  NavBlockContainer,
  NavBlockContentArrow,
  NavBlockContent,
  NavBlockContentInner,
  ChildrenContainer,
};
