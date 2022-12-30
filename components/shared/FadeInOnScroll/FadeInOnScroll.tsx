import React from 'react';
import * as S from './FadeInOnScroll.styles';
import useIntersectionObserver from 'hooks/useIntersectionObserver.hook';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

type Props = React.PropsWithChildren<Args>;

export const FadeInOnScroll: React.FC<Props> = (props) => {
  const intersectionObserver = useIntersectionObserver(props);

  return (
    <S.FadeInOnScrollContainer
      isVisible={intersectionObserver.isVisible}
      ref={intersectionObserver.ref}
    >
      {props.children}
    </S.FadeInOnScrollContainer>
  );
};
