import styled from "styled-components";

export const Block = styled.div<{ left: number }>`
  visibility: hidden;

  position: absolute;
  top: 4.6rem;
  left: ${(props) => props.left}px;

  width: 100vw;
  height: 0px;
  opacity: 0;
  background-color: ${(props) => props.theme.color.g50};

  border-radius: 2px;
  border-top: 1px solid ${(props) => props.theme.color.g100};
  border-bottom: 1px solid ${(props) => props.theme.color.g100};

  transition: 0.2s ease-in-out;

  -webkit-box-shadow: 0px 10px 40px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 40px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 40px -7px rgba(0, 0, 0, 0.75);

  overflow: hidden;
`;

export const NavBlock = styled.div`
  &:hover {
    ${Block} {
      visibility: visible;
      height: 100%;
      opacity: 1;
    }
  }
`;

export * from "styles";
