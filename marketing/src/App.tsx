import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Landing } from './components/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { orange } from '@mui/material/colors';
import { Pricing } from './components/Pricing';

export const muiCache = createCache({
  key: 'mui',
  prepend: true
});

const theme = createTheme({
  status: {
    danger: orange[500]
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: 'pricing',
    element: <Pricing />
  }
]);

export const App: React.FC = () => {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CacheProvider>
  );
};
