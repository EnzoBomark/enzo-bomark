import styled from "styled-components";

export const BarOne = styled.div`
  width: 20px;
  height: 1.5px;
  background-color: ${(props) => props.theme.color.g200};
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 1px;
`;

export const BarTwo = styled.div`
  width: 20px;
  height: 1.5px;
  background-color: ${(props) => props.theme.color.g200};
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 2px;
`;

export const Hamburger = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  padding: 12px 16px;

  ${BarOne} {
    transform: ${(props) =>
      props.isOpen
        ? "rotate(45deg) translate(3px, 3px)"
        : "rotate(0deg) translate(0px, 0px)"};
  }

  ${BarTwo} {
    transform: ${(props) =>
      props.isOpen
        ? "rotate(-45deg) translate(2px, -2.5px)"
        : "rotate(0deg) translate(0px, px)"};
  }
`;

export * from "@/styles/index";
