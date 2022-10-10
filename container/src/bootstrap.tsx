import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CacheProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import createCache from '@emotion/cache';
import { AuthApp } from './components/AuthApp';
import { MarkettingApp } from './components/MarkettingApp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MarkettingApp />
      },
      {
        path: '/auth/*',
        element: <AuthApp />
      }
    ]
  }
]);

export const muiCache = createCache({
  key: 'mui',
  prepend: true
});

export const mount = (el: Element): void => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <CacheProvider value={muiCache}>
        <RouterProvider router={router} />
      </CacheProvider>
    </React.StrictMode>
  );
};
