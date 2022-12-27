import styled from "styled-components";

export const NavBlockContent = styled.div<{
  parent: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}>`
  animation: fadeIn 0.4s;
  top: calc(100% + 10px);
  position: absolute;
  min-height: 30rem;
  min-width: 40rem;
  background-color: ${(props) => props.theme.color.g0}cc;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.g100}99;
  backdrop-filter: blur(10px);
  left: ${(props) => props.parent.x + props.parent.width / 2}px;
  transform: translateX(-50%);
  transition: all 0.2s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    width: 100%;
    height: 12px;
    background-color: transparent;
  }

  &::after {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: red;
    transform: translateX(-50%) rotate(45deg);
    background-color: ${(props) => props.theme.color.g0};
    border-top: 1px solid ${(props) => props.theme.color.g100}99;
    border-left: 1px solid ${(props) => props.theme.color.g100}99;
  }
`;

export * from "styles";
