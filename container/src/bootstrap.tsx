import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CacheProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import createCache from '@emotion/cache';

const MarkettingApp = React.lazy(() => import('./components/MarkettingApp'));
const AuthApp = React.lazy(() => import('./components/AuthApp'));

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
        <Suspense fallback={<div>Loading stuffs...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </CacheProvider>
    </React.StrictMode>
  );
};
