import styled from "styled-components";
import { NavLink, Anchor } from "../NavLink/NavLink.styled";
import { mediaSize } from "styles";

export const ContentDiver = styled.div`
  top: 5%;
  left: 20%;
  position: absolute;
  height: 90%;
  width: 1px;
  background-color: ${(props) => props.theme.color.g100};
`;

export const CategoriesWrapper = styled.div`
  height: 100%;
  width: 20%;

  display: flex;
  flex-direction: column;
`;

export const LatestWrapper = styled.div`
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PostsBlockContent = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: ${mediaSize.xl}px;
  height: 100%;
  padding: 16px;

  display: flex;
  align-items: flex-start;

  ${NavLink} {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 8px 12px;
  }

  ${Anchor} {
    margin: 0 6px;
  }
`;

export * from "styles";
