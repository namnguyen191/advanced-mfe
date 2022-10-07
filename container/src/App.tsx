import { CacheProvider } from '@emotion/react';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { MarkettingApp } from './components/MarkettingApp';
import createCache from '@emotion/cache';

const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <>
        <Header />
        <MarkettingApp />
      </>
    )
  }
]);

export const muiCache = createCache({
  key: 'mui',
  prepend: true
});

export const App: React.FC = () => {
  return (
    <CacheProvider value={muiCache}>
      <RouterProvider router={router} />
    </CacheProvider>
  );
};
