import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './styles/index.css';

const rootEl = document.getElementById('root');
const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// Pages are pre-rendered to static HTML at build time (scripts/prerender.mjs), so in
// production #root already contains markup and we hydrate it. In dev (empty shell) we
// create a fresh root.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
