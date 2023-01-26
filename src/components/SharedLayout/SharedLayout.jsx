import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Wrap } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrap>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrap>
  );
};
