import React from 'react';
import { S } from './Hero.styles';
import { Icon } from 'assets/icons';
import { FadeInOnScroll } from 'components/shared/FadeInOnScroll';

export const Hero: React.FC = () => {
  const scrollToHeroDetails = () => {
    const heroDetails = document.getElementById('hero-details');

    if (!heroDetails) return;

    window.scrollTo({
      top: heroDetails.offsetTop - 44,
      behavior: 'smooth',
    });
  };

  return (
    <S.HeroContainer id="hero">
      <FadeInOnScroll freezeOnceVisible>
        <S.HeroInnerContainer>
          <S.H1 regular align="center">
            Lorem ipsum dolor sit amet consectetur adipiscing.
          </S.H1>

          <S.B1 align="center" color="g300">
            Are you looking for TypeScript, React and NodeJS content? Thats
            great! Join me on my never ending journey learning Full stack
            development!
          </S.B1>

          <S.Margin spacing="xs" />

          <S.Button onClick={() => null}>Get in touch</S.Button>
        </S.HeroInnerContainer>
      </FadeInOnScroll>

      <S.BounceArrowContainer onClick={scrollToHeroDetails}>
        <Icon type="ArrowDown" width="s" />
      </S.BounceArrowContainer>
    </S.HeroContainer>
  );
};
