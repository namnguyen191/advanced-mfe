import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createMemoryHistory, Location, BrowserHistory } from 'history';

export const mount = (
  el: Element,
  opts: { onNavigate: () => void; defaultBrowserHistory?: BrowserHistory }
): { onParentNavigate: (location: Location) => void } => {
  const { onNavigate, defaultBrowserHistory } = opts;
  const root = ReactDOM.createRoot(el);
  const history = defaultBrowserHistory ?? createMemoryHistory();

  history.listen(onNavigate);

  root.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>
  );

  return {
    onParentNavigate: (location: Location) => {
      if (history.location.pathname !== location.pathname) {
        history.push(location.pathname);
      }
    }
  };
};
