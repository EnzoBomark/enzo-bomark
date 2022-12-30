import styled, { css } from 'styled-components';
import { S as Styles, device } from 'styles';

const isOpen = css`
  transform: translateX(0);
  visibility: visible;
  opacity: 1;
`;

const isClosed = css`
  transform: translateX(-100%);
  visibility: hidden;
  opacity: 0;
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 4.6rem;
  left: 0;
  width: 100vw;
  height: calc(100vh - 4.6rem);
  backdrop-filter: blur(8px);
  background-color: ${(props) => props.theme.color.g50};
  border-top: 1px solid ${(props) => props.theme.color.g100};
  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => (props.isOpen ? isOpen : isClosed)};
  transition: opacity 0.4s, transform 0.4s, visibility 0.4s;

  @media ${device.m} {
    display: none;
  }
`;

const NavLinksWrapper = styled.div`
  min-height: 300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const S = {
  ...Styles,
  MobileMenu,
  NavLinksWrapper,
};
