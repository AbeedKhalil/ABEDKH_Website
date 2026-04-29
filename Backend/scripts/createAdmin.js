const bcrypt = require('bcrypt');
const db = require('../db/connection');

function parseArgs(argv) {
    const out = {};
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === '--username' || a === '-u') out.username = argv[++i];
        else if (a === '--password' || a === '-p') out.password = argv[++i];
        else if (a === '--help' || a === '-h') out.help = true;
    }
    return out;
}

async function main() {
    const args = parseArgs(process.argv.slice(2));

    if (args.help || !args.username || !args.password) {
        console.log('Usage: npm run admin:create -- --username <name> --password <pass>');
        console.log('  Password must be at least 12 characters.');
        process.exit(args.help ? 0 : 1);
    }

    if (args.password.length < 12) {
        console.error('[admin:create] password must be at least 12 characters');
        process.exit(1);
    }

    const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(args.username);
    if (existing) {
        console.error(`[admin:create] user "${args.username}" already exists. Use change-password from the dashboard, or DELETE the row manually.`);
        process.exit(1);
    }

    const hash = await bcrypt.hash(args.password, 12);
    db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)').run(args.username, hash);
    console.log(`[admin:create] created admin user: ${args.username}`);
    process.exit(0);
}

main().catch((err) => {
    console.error('[admin:create] failed:', err);
    process.exit(1);
});
