import styled from 'styled-components';
import { UIElements } from 'styles';

const ThemePickerContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ThemePickerButton = styled.button`
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.color.g0};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const S = {
  ...UIElements,
  ThemePickerContainer,
  ThemePickerButton,
};
