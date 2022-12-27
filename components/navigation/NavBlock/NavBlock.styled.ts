import styled from "styled-components";

export const NavBlockContent = styled.div`
  animation: fadeIn 0.4s;
  top: calc(100% + 10px);
  position: absolute;
  min-height: 30rem;
  min-width: 20rem;
  background-color: ${(props) => props.theme.color.g0};
  display: none;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.g100}99;

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

export const NavBlockChildren = styled.div`
  height: fit-content;
`;

export const NavBlockWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    ${NavBlockContent} {
      display: block;
    }
  }
`;

export * from "styles";
