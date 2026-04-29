const db = require('./connection');

const projects = [
    {
        slug: 'fullstack-chatroom',
        category: 'web',
        year: 2025,
        featured: 1,
        display_order: 0,
        hero_image: null,
        repo_url: 'https://github.com/Solange-s-Courses/ex5-express-abed-rayan.git',
        demo_url: null,
        tech_stack: JSON.stringify(['Node.js', 'Express', 'Sequelize', 'MariaDB']),
        title_en: 'Full-Stack Chatroom',
        title_ar: 'تطبيق دردشة متكامل',
        title_he: "אפליקציית צ'אט Full-Stack",
        short_desc_en: 'Secure auth, REST messaging, and persistent storage with paranoid soft-deletion. Real-time DOM updates via polling.',
        short_desc_ar: 'مصادقة آمنة، رسائل REST، وتخزين دائم مع حذف ناعم محمي. تحديثات DOM فورية عبر الاستطلاع الدوري.',
        short_desc_he: 'אימות מאובטח, הודעות REST, ואחסון מתמיד עם soft-deletion פרנואידי. עדכוני DOM בזמן אמת באמצעות polling.',
        long_desc_en: 'A robust chatroom built for an Internet Programming course. Multi-step registration, session-based authentication, REST messaging with paranoid soft-deletion, and dynamic DOM updates via 10s polling — designed so users can only edit their own content, even under concurrent load.',
        long_desc_ar: 'تطبيق دردشة متين بُني لمساق برمجة الإنترنت. تسجيل متعدد الخطوات، مصادقة بالجلسات، رسائل REST مع حذف ناعم محمي، وتحديثات DOM ديناميكية عبر استطلاع كل 10 ثوانٍ — مصمم بحيث يعدّل المستخدم محتواه فقط حتى تحت الحمل المتزامن.',
        long_desc_he: "אפליקציית צ'אט יציבה לקורס תכנות אינטרנט. רישום רב-שלבי, אימות מבוסס סשן, הודעות REST עם soft-deletion פרנואידי, ועדכוני DOM דינמיים ב-polling של 10 שניות — שתוכננה כך שמשתמש יוכל לערוך רק את התוכן שלו, גם תחת עומס מקבילי.",
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'currency-image-processing',
        category: 'vision',
        year: 2024,
        featured: 0,
        display_order: 1,
        hero_image: null,
        repo_url: null,
        demo_url: null,
        tech_stack: JSON.stringify(['MATLAB', 'Image Processing', 'Algorithms']),
        title_en: 'Currency Image Processing',
        title_ar: 'معالجة صور وتمييز عملات',
        title_he: 'עיבוד תמונה וזיהוי מטבעות',
        short_desc_en: 'Computer-vision pipeline classifying ILS, USD, and EUR notes from varied images. Custom preprocessing & feature extraction.',
        short_desc_ar: 'خط معالجة بصري لتصنيف عملات ILS وUSD وEUR من صور متنوعة. معالجة مسبقة واستخراج ميزات مخصصة.',
        short_desc_he: 'צינור ראייה ממוחשבת שמסווג ILS, USD, ו-EUR מתמונות מגוונות. עיבוד מקדים והוצאת מאפיינים מותאמים.',
        long_desc_en: 'Computer-vision pipeline that detects and classifies ILS, USD, and EUR currencies from varied images. Emphasis on advanced preprocessing, feature extraction, and analytical problem-solving to isolate and identify targets reliably.',
        long_desc_ar: null, long_desc_he: null,
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'converter-automation',
        category: 'auto',
        year: 2024,
        featured: 0,
        display_order: 2,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/converter_automation.git',
        demo_url: null,
        tech_stack: JSON.stringify(['Python', 'Selenium', 'WebDriver']),
        title_en: 'Converter Automation',
        title_ar: 'أتمتة تحويل الملفات',
        title_he: 'אוטומציית המרת קבצים',
        short_desc_en: 'Selenium-driven script that automates a manual file-conversion workflow, reclaiming hours of repetitive data entry per week.',
        short_desc_ar: 'أداة Selenium تؤتمت سير عمل تحويل الملفات يدوياً، وتوفّر ساعات من الإدخال المتكرر أسبوعياً.',
        short_desc_he: 'סקריפט מבוסס Selenium שמאוטמט תהליך ידני של המרת קבצים, ומשחרר שעות של עבודה חוזרת בשבוע.',
        long_desc_en: 'Selenium-driven script that fully automates a manual online file-conversion workflow. Eliminates repetitive data entry, reclaims hours of operational time per week, and reduces input errors to zero.',
        long_desc_ar: null, long_desc_he: null,
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'age-of-wars',
        category: 'game',
        year: 2024,
        featured: 0,
        display_order: 3,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/oop2_project.git',
        demo_url: null,
        tech_stack: JSON.stringify(['C++', 'SFML', 'Unit Testing']),
        title_en: 'Age of Wars',
        title_ar: null, title_he: null,
        short_desc_en: 'A structured strategy game built with a strong focus on software reliability and QA engineering. Achieved 80% unit test coverage to ensure bug-free combat logic and progression systems.',
        short_desc_ar: null, short_desc_he: null,
        long_desc_en: null, long_desc_ar: null, long_desc_he: null,
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'mouse-vs-cats',
        category: 'game',
        year: 2023,
        featured: 0,
        display_order: 4,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/oop1_project.git',
        demo_url: null,
        tech_stack: JSON.stringify(['C++', 'SFML', 'A* Algorithm']),
        title_en: 'Mouse vs Cats',
        title_ar: null, title_he: null,
        short_desc_en: 'A real-time strategy game implementing the A* (A-Star) pathfinding algorithm for intelligent, obstacle-avoiding enemy AI. Focus on algorithmic correctness and clean OOP separation between game logic and rendering.',
        short_desc_ar: null, short_desc_he: null,
        long_desc_en: null, long_desc_ar: null, long_desc_he: null,
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'feeding-frenzy',
        category: 'game',
        year: 2024,
        featured: 0,
        display_order: 5,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/oop2_project-Abed_Khalil-Rayan_Abdalhalem.git',
        demo_url: null,
        tech_stack: JSON.stringify(['C++', 'SFML', 'OOP']),
        title_en: 'Feeding Frenzy',
        title_ar: null, title_he: null,
        short_desc_en: 'A 2D arcade game with smooth sprite animation, dynamic object spawning, and strict collision detection. Built around classical OOP design patterns with encapsulated entity behavior.',
        short_desc_ar: null, short_desc_he: null,
        long_desc_en: null, long_desc_ar: null, long_desc_he: null,
        case_study_en: null, case_study_ar: null, case_study_he: null
    }
];

const INSERT_SQL = `
INSERT INTO projects (
    slug, category, year, featured, display_order, hero_image, repo_url, demo_url, tech_stack,
    title_en, title_ar, title_he,
    short_desc_en, short_desc_ar, short_desc_he,
    long_desc_en, long_desc_ar, long_desc_he,
    case_study_en, case_study_ar, case_study_he
) VALUES (
    @slug, @category, @year, @featured, @display_order, @hero_image, @repo_url, @demo_url, @tech_stack,
    @title_en, @title_ar, @title_he,
    @short_desc_en, @short_desc_ar, @short_desc_he,
    @long_desc_en, @long_desc_ar, @long_desc_he,
    @case_study_en, @case_study_ar, @case_study_he
)
`;

function seed({ force = false } = {}) {
    const count = db.prepare('SELECT COUNT(*) AS n FROM projects').get().n;

    if (count > 0 && !force) {
        return { skipped: true, count };
    }

    const insert = db.prepare(INSERT_SQL);
    const tx = db.transaction(() => {
        if (force) db.exec('DELETE FROM projects');
        for (const p of projects) insert.run(p);
    });
    tx();

    return { skipped: false, count: projects.length };
}

if (require.main === module) {
    const force = process.argv.includes('--force');
    const result = seed({ force });
    if (result.skipped) {
        console.log(`[seed] skipped (${result.count} projects already in DB; use --force to reseed)`);
    } else {
        console.log(`[seed] inserted ${result.count} projects${force ? ' (force-reset)' : ''}`);
    }
    process.exit(0);
}

module.exports = { seed };
