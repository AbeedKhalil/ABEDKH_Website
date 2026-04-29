const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const repoRoot = path.join(__dirname, '..');
const backendRoot = __dirname;

const PORT = parseInt(process.env.PORT, 10) || 3000;
const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_TTL_SECONDS = 24 * 60 * 60;

const CORS_ORIGINS = (process.env.CORS_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

if (!JWT_SECRET || JWT_SECRET.length < 32) {
    throw new Error(
        'JWT_SECRET must be set in .env and at least 32 characters long. ' +
        'Copy .env.example to .env and replace the placeholder.'
    );
}

const dbPathRaw = process.env.DB_PATH || 'Backend/data/portfolio.sqlite';
const uploadsRaw = process.env.UPLOADS_DIR || 'Backend/uploads';

const DB_PATH = path.isAbsolute(dbPathRaw) ? dbPathRaw : path.join(repoRoot, dbPathRaw);
const UPLOADS_DIR = path.isAbsolute(uploadsRaw) ? uploadsRaw : path.join(repoRoot, uploadsRaw);
const FRONTEND_DIR = path.join(repoRoot, 'Frontend');

module.exports = {
    PORT,
    JWT_SECRET,
    JWT_TTL_SECONDS,
    CORS_ORIGINS,
    DB_PATH,
    UPLOADS_DIR,
    FRONTEND_DIR,
    BACKEND_ROOT: backendRoot,
    REPO_ROOT: repoRoot
};
