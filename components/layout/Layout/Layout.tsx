import React from 'react';
import { S } from './Layout.styles';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { Header } from '../Header';

type Props = React.PropsWithChildren;

export const Layout: React.FC<Props> = (props) => {
  return (
    <S.Layout>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </S.Layout>
  );
};
