import styled from 'styled-components';
import { UIElements } from 'styles';

const DropDownContainer = styled.div`
  @keyframes fadeInWithDelay {
    0% {
      opacity: 0;
    }
    33% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeInWithDelay 0.6s ease;
`;

const DropDownContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DropDownContentDivider = styled.div`
  width: 1px;
  height: inherit;
  background-color: ${({ theme }) => theme.color.g100};

  margin: ${({ theme }) => theme.spacing.m} 0;
`;

const DropDownContentLatest = styled.div`
  width: 25rem;
  padding: ${({ theme }) => theme.spacing.m};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
`;

const DropDownContentLatestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

const DropDownContentLatestListItem = styled(UIElements.B3)`
  margin: 0;
  color: ${({ theme }) => theme.color.g500};
`;

const DropDownContentCategories = styled.div`
  width: 15rem;
  padding: ${({ theme }) => theme.spacing.m};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
`;

const DropDownContentCategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

const DropDownContentCategoriesListItem = styled(UIElements.B3)`
  margin: 0;
  color: ${({ theme }) => theme.color.g500};
`;

const DropDownExtra = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.g100};
  padding: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.color.g100}66;
`;

export const S = {
  ...UIElements,
  DropDownContainer,
  DropDownContent,
  DropDownContentDivider,
  DropDownContentLatest,
  DropDownContentLatestList,
  DropDownContentLatestListItem,
  DropDownContentCategories,
  DropDownContentCategoriesList,
  DropDownContentCategoriesListItem,
  DropDownExtra,
};
