const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    username      TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at    TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS projects (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    slug            TEXT NOT NULL UNIQUE,
    category        TEXT NOT NULL CHECK(category IN ('web','vision','game','auto','cybersecurity','machine-learning-data-science','software-engineering')),
    year            INTEGER NOT NULL,
    featured        INTEGER NOT NULL DEFAULT 0 CHECK(featured IN (0,1)),
    display_order   INTEGER NOT NULL DEFAULT 0,
    hero_image      TEXT,
    repo_url        TEXT,
    demo_url        TEXT,
    tech_stack      TEXT NOT NULL DEFAULT '[]',

    title_en        TEXT NOT NULL,
    title_ar        TEXT,
    title_he        TEXT,
    short_desc_en   TEXT NOT NULL,
    short_desc_ar   TEXT,
    short_desc_he   TEXT,
    long_desc_en    TEXT,
    long_desc_ar    TEXT,
    long_desc_he    TEXT,
    case_study_en   TEXT,
    case_study_ar   TEXT,
    case_study_he   TEXT,

    created_at      TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at      TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_projects_order    ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
`;

const REBUILD_PROJECTS_SQL = `
CREATE TABLE projects_new (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    slug            TEXT NOT NULL UNIQUE,
    category        TEXT NOT NULL CHECK(category IN ('web','vision','game','auto','cybersecurity','machine-learning-data-science','software-engineering')),
    year            INTEGER NOT NULL,
    featured        INTEGER NOT NULL DEFAULT 0 CHECK(featured IN (0,1)),
    display_order   INTEGER NOT NULL DEFAULT 0,
    hero_image      TEXT,
    repo_url        TEXT,
    demo_url        TEXT,
    tech_stack      TEXT NOT NULL DEFAULT '[]',

    title_en        TEXT NOT NULL,
    title_ar        TEXT,
    title_he        TEXT,
    short_desc_en   TEXT NOT NULL,
    short_desc_ar   TEXT,
    short_desc_he   TEXT,
    long_desc_en    TEXT,
    long_desc_ar    TEXT,
    long_desc_he    TEXT,
    case_study_en   TEXT,
    case_study_ar   TEXT,
    case_study_he   TEXT,

    created_at      TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at      TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO projects_new (
    id, slug, category, year, featured, display_order, hero_image, repo_url, demo_url, tech_stack,
    title_en, title_ar, title_he,
    short_desc_en, short_desc_ar, short_desc_he,
    long_desc_en, long_desc_ar, long_desc_he,
    case_study_en, case_study_ar, case_study_he,
    created_at, updated_at
) SELECT
    id, slug, category, year, featured, display_order, hero_image, repo_url, demo_url, tech_stack,
    title_en, title_ar, title_he,
    short_desc_en, short_desc_ar, short_desc_he,
    long_desc_en, long_desc_ar, long_desc_he,
    case_study_en, case_study_ar, case_study_he,
    created_at, updated_at
FROM projects;

DROP TABLE projects;
ALTER TABLE projects_new RENAME TO projects;

CREATE INDEX IF NOT EXISTS idx_projects_order    ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
`;

function runMigrations(db) {
    db.exec(SCHEMA);

    const version = db.pragma('user_version', { simple: true });
    if (version < 1) {
        const migrate = db.transaction(() => {
            db.exec(REBUILD_PROJECTS_SQL);
            db.pragma('user_version = 1');
        });
        migrate();
    }
}

module.exports = { runMigrations };
