import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createRoutesFromChildren, matchRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Add future flags to resolve the React Router v7 warnings
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter {...router}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
