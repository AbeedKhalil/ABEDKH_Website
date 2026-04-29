const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const db = require('../db/connection');
const { JWT_SECRET, JWT_TTL_SECONDS } = require('../config');
const { verifyJWT } = require('../middleware/auth');

const router = express.Router();

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
        res.status(429).json({
            error: 'too_many_requests',
            message: 'Too many login attempts. Please wait 15 minutes and try again.'
        });
    }
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

router.post('/login', loginLimiter, async (req, res, next) => {
    try {
        const { username, password } = req.body || {};
        if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
            return res.status(400).json({ error: 'bad_request', message: 'username and password are required.' });
        }

        const row = db.prepare('SELECT id, username, password_hash FROM users WHERE username = ?').get(username);
        const ok = row ? await bcrypt.compare(password, row.password_hash) : false;

        if (!ok) {
            await sleep(250);
            return res.status(401).json({ error: 'invalid_credentials', message: 'Invalid username or password.' });
        }

        const token = jwt.sign(
            { sub: row.id, username: row.username },
            JWT_SECRET,
            { expiresIn: JWT_TTL_SECONDS }
        );
        return res.json({ token, expiresIn: JWT_TTL_SECONDS, username: row.username });
    } catch (err) {
        return next(err);
    }
});

router.post('/change-password', verifyJWT, async (req, res, next) => {
    try {
        const { currentPassword, newPassword } = req.body || {};
        if (typeof currentPassword !== 'string' || typeof newPassword !== 'string') {
            return res.status(400).json({ error: 'bad_request', message: 'currentPassword and newPassword are required.' });
        }
        if (newPassword.length < 12) {
            return res.status(400).json({ error: 'weak_password', message: 'New password must be at least 12 characters.' });
        }

        const row = db.prepare('SELECT id, password_hash FROM users WHERE id = ?').get(req.user.id);
        if (!row) {
            return res.status(401).json({ error: 'unauthorized', message: 'User no longer exists.' });
        }

        const ok = await bcrypt.compare(currentPassword, row.password_hash);
        if (!ok) {
            await sleep(250);
            return res.status(401).json({ error: 'invalid_credentials', message: 'Current password is incorrect.' });
        }

        const hash = await bcrypt.hash(newPassword, 12);
        db.prepare("UPDATE users SET password_hash = ?, updated_at = datetime('now') WHERE id = ?").run(hash, row.id);
        return res.json({ ok: true });
    } catch (err) {
        return next(err);
    }
});

router.get('/me', verifyJWT, (req, res) => {
    res.json({ user: { id: req.user.id, username: req.user.username } });
});

module.exports = router;
