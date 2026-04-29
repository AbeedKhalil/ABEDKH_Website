const fs = require('fs');
const path = require('path');
const express = require('express');
const db = require('../db/connection');
const { verifyJWT } = require('../middleware/auth');
const { upload } = require('../middleware/upload');
const { UPLOADS_DIR } = require('../config');

const router = express.Router();

router.use(verifyJWT);

const VALID_CATEGORIES = new Set(['web', 'vision', 'game', 'auto']);
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const TEXT_FIELDS = [
    'title_en', 'title_ar', 'title_he',
    'short_desc_en', 'short_desc_ar', 'short_desc_he',
    'long_desc_en', 'long_desc_ar', 'long_desc_he',
    'case_study_en', 'case_study_ar', 'case_study_he'
];

function rowToAdminDTO(row) {
    let techStack = [];
    try {
        const parsed = JSON.parse(row.tech_stack);
        if (Array.isArray(parsed)) techStack = parsed;
    } catch { /* ignore */ }
    return {
        id: row.id,
        slug: row.slug,
        category: row.category,
        year: row.year,
        featured: row.featured === 1,
        displayOrder: row.display_order,
        heroImage: row.hero_image,
        repoUrl: row.repo_url,
        demoUrl: row.demo_url,
        techStack,
        titleEn: row.title_en, titleAr: row.title_ar, titleHe: row.title_he,
        shortDescEn: row.short_desc_en, shortDescAr: row.short_desc_ar, shortDescHe: row.short_desc_he,
        longDescEn: row.long_desc_en, longDescAr: row.long_desc_ar, longDescHe: row.long_desc_he,
        caseStudyEn: row.case_study_en, caseStudyAr: row.case_study_ar, caseStudyHe: row.case_study_he,
        createdAt: row.created_at,
        updatedAt: row.updated_at
    };
}

function badRequest(message) {
    const err = new Error(message);
    err.status = 400;
    err.code = 'bad_request';
    return err;
}

function nullableText(value) {
    if (value == null) return null;
    if (typeof value !== 'string') return null;
    const trimmed = value.trim();
    return trimmed.length === 0 ? null : trimmed;
}

function validateAndNormalize(body, { partial = false } = {}) {
    const out = {};
    const need = (cond, msg) => { if (!cond) throw badRequest(msg); };

    if (!partial || body.slug !== undefined) {
        need(typeof body.slug === 'string' && SLUG_RE.test(body.slug),
            'slug must be lowercase letters, digits, and hyphens (e.g. "my-project").');
        out.slug = body.slug;
    }
    if (!partial || body.category !== undefined) {
        need(VALID_CATEGORIES.has(body.category),
            `category must be one of: ${Array.from(VALID_CATEGORIES).join(', ')}.`);
        out.category = body.category;
    }
    if (!partial || body.year !== undefined) {
        const y = parseInt(body.year, 10);
        need(Number.isInteger(y) && y >= 1900 && y <= 2100, 'year must be a 4-digit integer.');
        out.year = y;
    }
    if (!partial || body.featured !== undefined) {
        out.featured = body.featured ? 1 : 0;
    }
    if (!partial || body.displayOrder !== undefined) {
        const n = parseInt(body.displayOrder, 10);
        out.display_order = Number.isInteger(n) ? n : 0;
    }
    if (!partial || body.heroImage !== undefined) {
        out.hero_image = nullableText(body.heroImage);
    }
    if (!partial || body.repoUrl !== undefined) {
        out.repo_url = nullableText(body.repoUrl);
    }
    if (!partial || body.demoUrl !== undefined) {
        out.demo_url = nullableText(body.demoUrl);
    }
    if (!partial || body.techStack !== undefined) {
        const arr = Array.isArray(body.techStack)
            ? body.techStack.filter((s) => typeof s === 'string' && s.trim().length > 0).map((s) => s.trim())
            : [];
        out.tech_stack = JSON.stringify(arr);
    }

    const camelToSnake = (k) => k.replace(/[A-Z]/g, (c) => '_' + c.toLowerCase());
    for (const key of TEXT_FIELDS) {
        const camel = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
        if (!partial || body[camel] !== undefined) {
            out[key] = nullableText(body[camel]);
        }
        // also accept snake_case directly
        if (body[key] !== undefined) {
            out[key] = nullableText(body[key]);
        }
        // suppress unused var warning
        void camelToSnake;
    }

    if (out.title_en !== undefined) {
        need(out.title_en && out.title_en.length > 0, 'title (English) is required.');
    }
    if (out.short_desc_en !== undefined) {
        need(out.short_desc_en && out.short_desc_en.length > 0, 'short description (English) is required.');
    }

    return out;
}

function deleteUploadedFile(relUrl) {
    if (!relUrl || typeof relUrl !== 'string') return;
    if (!relUrl.startsWith('/uploads/')) return;
    const filename = path.basename(relUrl);
    const full = path.join(UPLOADS_DIR, filename);
    fs.unlink(full, () => { /* swallow ENOENT */ });
}

router.get('/', (req, res, next) => {
    try {
        const rows = db.prepare(`
            SELECT * FROM projects
            ORDER BY featured DESC, display_order ASC, year DESC, id ASC
        `).all();
        res.json({ projects: rows.map(rowToAdminDTO) });
    } catch (err) { next(err); }
});

router.get('/:id(\\d+)', (req, res, next) => {
    try {
        const row = db.prepare('SELECT * FROM projects WHERE id = ?').get(parseInt(req.params.id, 10));
        if (!row) return res.status(404).json({ error: 'not_found', message: 'Project not found.' });
        res.json({ project: rowToAdminDTO(row) });
    } catch (err) { next(err); }
});

router.post('/', (req, res, next) => {
    try {
        const data = validateAndNormalize(req.body || {}, { partial: false });

        const exists = db.prepare('SELECT id FROM projects WHERE slug = ?').get(data.slug);
        if (exists) return res.status(409).json({ error: 'slug_conflict', message: 'A project with that slug already exists.' });

        const tx = db.transaction(() => {
            if (data.featured === 1) {
                db.prepare('UPDATE projects SET featured = 0').run();
            }
            const fields = Object.keys(data);
            const placeholders = fields.map((f) => `@${f}`).join(', ');
            const insert = db.prepare(
                `INSERT INTO projects (${fields.join(', ')}) VALUES (${placeholders})`
            );
            const result = insert.run(data);
            return result.lastInsertRowid;
        });
        const id = tx();
        const row = db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
        res.status(201).json({ project: rowToAdminDTO(row) });
    } catch (err) { next(err); }
});

router.put('/:id(\\d+)', (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const existing = db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
        if (!existing) return res.status(404).json({ error: 'not_found', message: 'Project not found.' });

        const data = validateAndNormalize(req.body || {}, { partial: false });

        if (data.slug && data.slug !== existing.slug) {
            const dupe = db.prepare('SELECT id FROM projects WHERE slug = ? AND id != ?').get(data.slug, id);
            if (dupe) return res.status(409).json({ error: 'slug_conflict', message: 'A project with that slug already exists.' });
        }

        const oldHero = existing.hero_image;
        const newHero = data.hero_image !== undefined ? data.hero_image : existing.hero_image;

        const tx = db.transaction(() => {
            if (data.featured === 1) {
                db.prepare('UPDATE projects SET featured = 0 WHERE id != ?').run(id);
            }
            const fields = Object.keys(data);
            const setClause = fields.map((f) => `${f} = @${f}`).join(', ');
            db.prepare(
                `UPDATE projects SET ${setClause}, updated_at = datetime('now') WHERE id = @__id`
            ).run({ ...data, __id: id });
        });
        tx();

        if (oldHero && oldHero !== newHero) deleteUploadedFile(oldHero);

        const row = db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
        res.json({ project: rowToAdminDTO(row) });
    } catch (err) { next(err); }
});

router.delete('/:id(\\d+)', (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const existing = db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
        if (!existing) return res.status(404).json({ error: 'not_found', message: 'Project not found.' });

        db.prepare('DELETE FROM projects WHERE id = ?').run(id);
        if (existing.hero_image) deleteUploadedFile(existing.hero_image);

        res.status(204).end();
    } catch (err) { next(err); }
});

router.post('/reorder', (req, res, next) => {
    try {
        const { orderedIds } = req.body || {};
        if (!Array.isArray(orderedIds) || orderedIds.some((v) => !Number.isInteger(v))) {
            return res.status(400).json({ error: 'bad_request', message: 'orderedIds must be an array of integers.' });
        }
        const update = db.prepare("UPDATE projects SET display_order = ?, updated_at = datetime('now') WHERE id = ?");
        const tx = db.transaction(() => {
            orderedIds.forEach((id, idx) => update.run(idx, id));
        });
        tx();
        res.json({ ok: true, count: orderedIds.length });
    } catch (err) { next(err); }
});

router.post('/upload', upload.single('image'), (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'bad_request', message: 'No image file provided (field name: "image").' });
        }
        const url = `/uploads/${req.file.filename}`;
        res.json({ url });
    } catch (err) { next(err); }
});

module.exports = router;
