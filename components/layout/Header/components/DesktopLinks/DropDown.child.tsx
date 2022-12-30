import React from 'react';
import * as S from './DesktopLinks.styles';
import { BlockElementType } from './useHeaderHoverRef.hook';

type Props = {
  type: BlockElementType;
};

export const DropDown: React.FC<Props> = (props) => {
  return (
    <S.DropDownContainer key={props.type}>
      <S.DropDownContent>
        <S.DropDownContentLatest>
          <S.B3 transform="capitalize" margin="none">
            {props.type}
          </S.B3>

          <S.DropDownContentLatestList>
            <S.DropDownContentLatestListItem>
              Test
            </S.DropDownContentLatestListItem>
            <S.DropDownContentLatestListItem>
              Test
            </S.DropDownContentLatestListItem>
            <S.DropDownContentLatestListItem>
              Test
            </S.DropDownContentLatestListItem>
            <S.DropDownContentLatestListItem>
              Test
            </S.DropDownContentLatestListItem>
          </S.DropDownContentLatestList>
        </S.DropDownContentLatest>

        {props.type === 'posts' && (
          <>
            <S.DropDownContentDivider />

            <S.DropDownContentCategories>
              <S.B3 transform="capitalize" margin="none">
                Categories
              </S.B3>

              <S.DropDownContentCategoriesList>
                <S.DropDownContentCategoriesListItem>
                  Test
                </S.DropDownContentCategoriesListItem>
                <S.DropDownContentCategoriesListItem>
                  Test
                </S.DropDownContentCategoriesListItem>
                <S.DropDownContentCategoriesListItem>
                  Test
                </S.DropDownContentCategoriesListItem>
                <S.DropDownContentCategoriesListItem>
                  Test
                </S.DropDownContentCategoriesListItem>
                <S.DropDownContentCategoriesListItem>
                  Test
                </S.DropDownContentCategoriesListItem>
                <S.DropDownContentCategoriesListItem>
                  Test
                </S.DropDownContentCategoriesListItem>
                <S.DropDownContentCategoriesListItem>
                  Test
                </S.DropDownContentCategoriesListItem>
              </S.DropDownContentCategoriesList>
            </S.DropDownContentCategories>
          </>
        )}
      </S.DropDownContent>

      <S.DropDownExtra>
        <S.B3 transform="capitalize" margin="none">
          Extra
        </S.B3>
      </S.DropDownExtra>
    </S.DropDownContainer>
  );
};
