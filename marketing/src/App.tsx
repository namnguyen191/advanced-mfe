import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Landing } from './components/Landing';
import {
  Route,
  Routes,
  unstable_HistoryRouter as Router
} from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { orange } from '@mui/material/colors';
import { Pricing } from './components/Pricing';
import { MemoryHistory, BrowserHistory } from 'history';

export const muiCache = createCache({
  key: 'mui',
  prepend: true
});

const theme = createTheme({
  status: {
    danger: orange[500]
  }
});

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Landing />
//   },
//   {
//     path: 'pricing',
//     element: <Pricing />
//   }
// ]);

export type AppProps = {
  history: MemoryHistory | BrowserHistory;
};

export const App: React.FC<AppProps> = (props) => {
  const { history } = props;
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="pricing" element={<Pricing />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
};
