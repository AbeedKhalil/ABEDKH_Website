const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const { UPLOADS_DIR } = require('../config');

fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']);
const EXT_BY_MIME = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
    'image/svg+xml': '.svg'
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOADS_DIR),
    filename: (req, file, cb) => {
        const id = crypto.randomUUID();
        const ext = EXT_BY_MIME[file.mimetype] || path.extname(file.originalname).toLowerCase() || '.bin';
        cb(null, `${id}${ext}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 3 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (!ALLOWED_MIME.has(file.mimetype)) {
            const err = new Error('Unsupported image type. Allowed: jpg, png, webp, svg.');
            err.status = 415;
            err.code = 'unsupported_media_type';
            return cb(err, false);
        }
        cb(null, true);
    }
});

module.exports = { upload };
