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
    category        TEXT NOT NULL CHECK(category IN ('web','vision','game','auto')),
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

function runMigrations(db) {
    db.exec(SCHEMA);
}

module.exports = { runMigrations };
