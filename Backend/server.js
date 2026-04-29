const path = require('path');
const express = require('express');

const { PORT, FRONTEND_DIR, UPLOADS_DIR } = require('./config');
const db = require('./db/connection');
const { seed } = require('./db/seed');

const authRoutes = require('./routes/auth');
const projectsPublicRoutes = require('./routes/projectsPublic');
const projectsAdminRoutes = require('./routes/projectsAdmin');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();
app.disable('x-powered-by');

app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: false, limit: '256kb' }));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsPublicRoutes);
app.use('/api/admin/projects', projectsAdminRoutes);

app.use('/uploads', express.static(UPLOADS_DIR, {
    immutable: true,
    maxAge: '365d',
    fallthrough: true,
    setHeaders: (res) => {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
}));

app.use(express.static(FRONTEND_DIR, {
    extensions: ['html'],
    index: 'index.html'
}));

app.use('/api', notFound);
app.use(errorHandler);

const initialCount = db.prepare('SELECT COUNT(*) AS n FROM projects').get().n;
if (initialCount === 0) {
    const result = seed();
    if (!result.skipped) {
        // eslint-disable-next-line no-console
        console.log(`[boot] auto-seeded ${result.count} projects`);
    }
}

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`[boot] portfolio backend listening on http://localhost:${PORT}`);
    // eslint-disable-next-line no-console
    console.log(`[boot] public site: http://localhost:${PORT}/`);
    // eslint-disable-next-line no-console
    console.log(`[boot] admin:        http://localhost:${PORT}/admin/`);
});
