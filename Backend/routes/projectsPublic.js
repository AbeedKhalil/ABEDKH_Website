const express = require('express');
const db = require('../db/connection');

const router = express.Router();

const SUPPORTED_LANGS = new Set(['en', 'ar', 'he']);

function pickLang(rawLang) {
    if (typeof rawLang === 'string' && SUPPORTED_LANGS.has(rawLang.toLowerCase())) {
        return rawLang.toLowerCase();
    }
    return 'en';
}

function safeJSON(value, fallback) {
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : fallback;
    } catch {
        return fallback;
    }
}

function rowToPublicDTO(row, lang) {
    const pick = (key) => {
        const localized = row[`${key}_${lang}`];
        return localized && localized.length > 0 ? localized : row[`${key}_en`];
    };
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
        techStack: safeJSON(row.tech_stack, []),
        title: pick('title'),
        shortDesc: pick('short_desc'),
        longDesc: pick('long_desc'),
        caseStudy: pick('case_study'),
        lang
    };
}

router.get('/', (req, res, next) => {
    try {
        const lang = pickLang(req.query.lang);
        const rows = db.prepare(`
            SELECT * FROM projects
            ORDER BY featured DESC, display_order ASC, year DESC, id ASC
        `).all();
        res.json({ projects: rows.map((r) => rowToPublicDTO(r, lang)) });
    } catch (err) {
        next(err);
    }
});

router.get('/:slug', (req, res, next) => {
    try {
        const lang = pickLang(req.query.lang);
        const row = db.prepare('SELECT * FROM projects WHERE slug = ?').get(req.params.slug);
        if (!row) {
            return res.status(404).json({ error: 'not_found', message: 'Project not found.' });
        }
        res.json({ project: rowToPublicDTO(row, lang) });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
