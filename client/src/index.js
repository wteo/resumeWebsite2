import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.scss';
import App from './App';

const rootElement = document.getElementById('root');

const tree = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, tree);
} else {
  ReactDOM.createRoot(rootElement).render(tree);
}

