/* ==========================================================================
   Runtime config — loaded BEFORE script.js / admin.js.

   PORTFOLIO_API_BASE: where the backend API lives.
     - Empty string  → same-origin (local dev: Backend serves Frontend on
                       :3000, so /api/* resolves to localhost:3000/api/*).
     - Absolute URL  → cross-origin (production: Netlify serves the static
                       site, Render hosts the API). No trailing slash.

   To deploy on Netlify pointing at a Render-hosted API, change the line below
   to the Render service URL:
     window.PORTFOLIO_API_BASE = 'https://your-service.onrender.com';
   ========================================================================== */
window.PORTFOLIO_API_BASE = '';
