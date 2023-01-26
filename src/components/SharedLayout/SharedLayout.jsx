import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Wrap, ContentContainer } from './SharedLayout.styled';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <Wrap>
      <ContentContainer>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer />
      </ContentContainer>
    </Wrap>
  );
};
