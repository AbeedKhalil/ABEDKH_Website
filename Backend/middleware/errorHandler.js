function notFound(req, res) {
    res.status(404).json({ error: 'not_found', message: `Route not found: ${req.method} ${req.path}` });
}

function errorHandler(err, req, res, _next) {
    if (res.headersSent) return;
    const status = err.status || err.statusCode || 500;
    const code = err.code || (status === 500 ? 'internal_error' : 'error');
    const message = err.expose === false && status === 500
        ? 'Something went wrong.'
        : (err.message || 'Something went wrong.');
    if (status >= 500) {
        // eslint-disable-next-line no-console
        console.error('[error]', err);
    }
    res.status(status).json({ error: code, message });
}

module.exports = { notFound, errorHandler };
