import styled from 'styled-components';
import { UIElements } from 'styles';

const BarOne = styled.div`
  width: 20px;
  height: 1.5px;
  background-color: ${(props) => props.theme.color.g200};
  margin: 6px 0;
  transition: background-color 0.1s ease-in-out,
    transform 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
  border-radius: 1px;
`;

const BarTwo = styled.div`
  width: 20px;
  height: 1.5px;
  background-color: ${(props) => props.theme.color.g200};
  margin: 6px 0;
  border-radius: 2px;
  transition: background-color 0.1s ease-in-out,
    transform 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  padding: 12px 16px;

  ${BarOne} {
    transform: ${(props) =>
      props.isOpen
        ? 'rotate(45deg) translate(3px, 3px)'
        : 'rotate(0deg) translate(0px, 0px)'};
  }

  ${BarTwo} {
    transform: ${(props) =>
      props.isOpen
        ? 'rotate(-45deg) translate(2px, -2.5px)'
        : 'rotate(0deg) translate(0px, px)'};
  }

  &:hover {
    ${BarOne} {
      background-color: ${(props) => props.theme.color.g300};
    }

    ${BarTwo} {
      background-color: ${(props) => props.theme.color.g300};
    }
  }
`;

export const S = {
  ...UIElements,
  BarOne,
  BarTwo,
  Hamburger,
};
