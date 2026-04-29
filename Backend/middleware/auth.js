const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function verifyJWT(req, res, next) {
    const header = req.headers.authorization || '';
    const match = header.match(/^Bearer\s+(.+)$/i);
    if (!match) {
        return res.status(401).json({ error: 'unauthorized', message: 'Missing or malformed Authorization header.' });
    }
    try {
        const payload = jwt.verify(match[1], JWT_SECRET);
        req.user = { id: payload.sub, username: payload.username };
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'unauthorized', message: 'Invalid or expired token.' });
    }
}

module.exports = { verifyJWT };
