import { FadeInOnScroll } from 'components/shared/FadeInOnScroll';
import React from 'react';
import { S } from './HeroDetails.styles';

export const HeroDetails: React.FC = () => {
  return (
    <S.HeroDetailsContainer id="hero-details">
      <S.Underline maxWidth={1200} />
      <FadeInOnScroll freezeOnceVisible>
        <S.HeroDetailsInnerContainer>
          <S.DetailWrapper>
            <S.H5 regular>Development</S.H5>

            <S.B2 color="g300">
              In our strategy process, we analyze customer needs, identify
              general product problems and advise on important future decisions.
            </S.B2>
          </S.DetailWrapper>

          <S.DetailWrapper>
            <S.H5 regular>Design</S.H5>

            <S.B2 color="g300">
              Our design process is about making complex solutions, simple. We
              combine thoughtful user experience with a clear visual identity.
            </S.B2>
          </S.DetailWrapper>

          <S.DetailWrapper>
            <S.H5 regular>Improvement</S.H5>

            <S.B2 color="g300">
              In an ever-changing digital world, there is always space for
              growth. We test, analyze and optimize your product to make it even
              better.
            </S.B2>
          </S.DetailWrapper>

          <S.DetailWrapper>
            <S.H5 regular>Strategy</S.H5>

            <S.B2 color="g300">
              In our strategy process, we analyze customer needs, identify
              general product problems and advise on important future decisions.
            </S.B2>
          </S.DetailWrapper>
        </S.HeroDetailsInnerContainer>
      </FadeInOnScroll>
    </S.HeroDetailsContainer>
  );
};
