const db = require('./connection');

const projects = [
    {
        slug: 'kaya-swim',
        category: 'web',
        year: 2026,
        featured: 1,
        display_order: 0,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/kaya-swim',
        demo_url: 'https://abeedkhalil.github.io/kaya-swim/',
        tech_stack: JSON.stringify(['Astro', 'Tailwind CSS', 'TypeScript']),
        title_en: 'KAYA SWIM',
        title_ar: 'كايا سويم',
        title_he: 'KAYA SWIM',
        short_desc_en: 'Bilingual site for Katrin Shafir’s swim school at the Givat Ela pool. Hebrew and English, static Astro, WhatsApp on every call to action.',
        short_desc_ar: 'موقع ثنائي اللغة لمدرسة السباحة كايا سويم في بركة جفعات إيلا. عبري وإنجليزي، Astro ثابت، وواتساب في كل دعوة للإجراء.',
        short_desc_he: 'אתר דו-לשוני לבית הספר לשחייה של קטרין שפיר בבריכת גבעת אלה. עברית ואנגלית, Astro סטטי, וואטסאפ בכל קריאה לפעולה.',
        long_desc_en: 'A course site and founder page for KAYA SWIM. Hebrew at the root, English at /en/, static HTML from Astro and Tailwind, with each call to action opening WhatsApp already addressed to that context.',
        long_desc_ar: 'موقع دورات وصفحة المؤسسة لكايا سويم. العبرية في الجذر والإنجليزية في /en/، وHTML ثابت من Astro وTailwind، وكل دعوة للإجراء تفتح واتساب برسالة جاهزة.',
        long_desc_he: 'אתר קורסים ועמוד מייסדת עבור KAYA SWIM. עברית בשורש, אנגלית ב-/en/, HTML סטטי מ-Astro ו-Tailwind, וכל קריאה לפעולה פותחת וואטסאפ עם הודעה מוכנה.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'truth-lens-ai',
        category: 'machine-learning-data-science',
        year: 2025,
        featured: 0,
        display_order: 1,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/TruthLensAI',
        demo_url: null,
        tech_stack: JSON.stringify(['React', 'TypeScript', 'Hugging Face']),
        title_en: 'TruthLens AI',
        title_ar: 'تروث لنز',
        title_he: 'TruthLens AI',
        short_desc_en: 'A React and TypeScript app that scores short text for bias and misinformation cues with Hugging Face zero-shot classification.',
        short_desc_ar: 'تطبيق React وTypeScript يقيّم النصوص القصيرة لإشارات التحيز والمعلومات المضللة عبر تصنيف صفري من Hugging Face.',
        short_desc_he: 'אפליקציית React ו-TypeScript שמדרגת טקסט קצר לרמזי הטיה ומידע מטעה באמצעות סיווג zero-shot של Hugging Face.',
        long_desc_en: 'A single-page app. The reader pastes a headline or a short claim, and facebook/bart-large-mnli returns bias and fact-check labels with confidence, plus loading and error states.',
        long_desc_ar: 'تطبيق صفحة واحدة. يلصق القارئ عنواناً أو ادعاءً قصيراً، ويعيد النموذج facebook/bart-large-mnli تسميات التحيز والتحقق مع درجة الثقة وحالات التحميل والخطأ.',
        long_desc_he: 'אפליקציית עמוד יחיד. הקורא מדביק כותרת או טענה קצרה, ו-facebook/bart-large-mnli מחזיר תוויות הטיה ובדיקת עובדות עם ביטחון, ומצבי טעינה ושגיאה.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'fullstack-chatroom',
        category: 'web',
        year: 2025,
        featured: 0,
        display_order: 2,
        hero_image: null,
        repo_url: 'https://github.com/Solange-s-Courses/ex5-express-abed-rayan.git',
        demo_url: null,
        tech_stack: JSON.stringify(['Node.js', 'Express', 'Sequelize', 'MariaDB']),
        title_en: 'Full-Stack Chatroom',
        title_ar: 'تطبيق دردشة متكامل',
        title_he: 'אפליקציית צ\'אט Full-Stack',
        short_desc_en: 'Session auth, REST messaging, and persistent storage with paranoid soft-deletion. DOM updates via polling.',
        short_desc_ar: 'مصادقة بالجلسات، رسائل REST، وتخزين دائم مع حذف ناعم محمي. تحديثات DOM عبر الاستطلاع.',
        short_desc_he: 'אימות סשן, הודעות REST, ואחסון מתמיד עם soft-deletion פרנואידי. עדכוני DOM באמצעות polling.',
        long_desc_en: 'A chatroom for an Internet Programming course. Multi-step registration, session authentication, REST messages with paranoid soft-deletion, and DOM updates on a 10 second poll. A user can edit only their own content.',
        long_desc_ar: 'غرفة دردشة لمساق برمجة الإنترنت. تسجيل متعدد الخطوات، مصادقة بالجلسات، رسائل REST مع حذف ناعم، وتحديثات DOM كل 10 ثوانٍ. يعدّل المستخدم محتواه فقط.',
        long_desc_he: 'חדר צ\'אט לקורס תכנות אינטרנט. רישום רב-שלבי, אימות סשן, הודעות REST עם soft-deletion פרנואידי, ועדכוני DOM כל 10 שניות. משתמש עורך רק את התוכן שלו.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'adam-eve-perfumes',
        category: 'web',
        year: 2026,
        featured: 0,
        display_order: 3,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/AdamEvePerfumes',
        demo_url: 'https://abeedkhalil.github.io/AdamEvePerfumes/',
        tech_stack: JSON.stringify(['HTML', 'CSS', 'Bootstrap']),
        title_en: 'Adam Eve Perfumes',
        title_ar: 'آدم وحواء للعطور',
        title_he: 'Adam Eve Perfumes',
        short_desc_en: 'Arabic and English storefront for Adam Eve Perfumes: a catalog, a house story, and a contact path. Live on GitHub Pages.',
        short_desc_ar: 'واجهة عربية وإنجليزية لمتجر آدم وحواء للعطور: كتالوج، قصة الدار، ومسار تواصل. منشور على GitHub Pages.',
        short_desc_he: 'חנות ערבית ואנגלית עבור Adam Eve Perfumes: קטלוג, סיפור הבית, ומסלול יצירת קשר. באוויר ב-GitHub Pages.',
        long_desc_en: 'A right-to-left storefront with Bootstrap. The page carries the house name, a scent catalog, and a contact path, in Arabic and English.',
        long_desc_ar: 'واجهة من اليمين إلى اليسار بـ Bootstrap. تحمل الصفحة اسم الدار وكتالوج العطور ومسار التواصل بالعربية والإنجليزية.',
        long_desc_he: 'חנות מימין לשמאל עם Bootstrap. העמוד נושא את שם הבית, קטלוג ניחוחות, ומסלול יצירת קשר, בערבית ובאנגלית.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'heart-disease-prediction',
        category: 'machine-learning-data-science',
        year: 2026,
        featured: 0,
        display_order: 4,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/heart-disease-prediction',
        demo_url: null,
        tech_stack: JSON.stringify(['Python', 'pandas', 'scikit-learn']),
        title_en: 'Heart Disease Prediction',
        title_ar: 'التنبؤ بأمراض القلب',
        title_he: 'חיזוי מחלות לב',
        short_desc_en: 'A scikit-learn pipeline on clinical attributes. Logistic regression, k-nearest neighbors, and a random forest, compared on precision, recall, F1, and ROC-AUC.',
        short_desc_ar: 'خط scikit-learn على صفات سريرية. انحدار لوجستي، أقرب الجيران، وغابة عشوائية، مقارنة بالدقة والاسترجاع وF1 وROC-AUC.',
        short_desc_he: 'צינור scikit-learn על מאפיינים קליניים. רגרסיה לוגיסטית, שכנים קרובים, ויער אקראי, בהשוואת precision, recall, F1 ו-ROC-AUC.',
        long_desc_en: 'Exploratory analysis of 13 clinical features, scaling, a train and test split, then three classifiers. The notebook and the written report sit in the repository. No accuracy figure is claimed here.',
        long_desc_ar: 'تحليل استكشافي لـ 13 صفة سريرية، ثم تحجيم وتقسيم تدريب واختبار، ثم ثلاثة مصنّفات. الدفتر والتقرير في المستودع. لا يُذكر رقم دقة هنا.',
        long_desc_he: 'ניתוח של 13 מאפיינים קליניים, נרמול, פיצול אימון ומבחן, ואז שלושה מסווגים. המחברת והדוח במאגר. אין כאן טענת דיוק מספרית.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'dns-project',
        category: 'cybersecurity',
        year: 2026,
        featured: 0,
        display_order: 5,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/dns-project',
        demo_url: null,
        tech_stack: JSON.stringify(['Python', 'pandas', 'scikit-learn', 'Jupyter']),
        title_en: 'DNS Domain Classification',
        title_ar: 'تصنيف نطاقات DNS',
        title_he: 'סיווג דומיינים ב-DNS',
        short_desc_en: 'A notebook that labels domains as benign, malware, phishing, or spam, then compares a decision tree, logistic regression, and a class-balanced random forest.',
        short_desc_ar: 'دفتر يصنّف النطاقات إلى سليم أو برمجية خبيثة أو تصيد أو بريد مزعج، ثم يقارن شجرة قرار وانحداراً لوجستياً وغابة عشوائية متوازنة.',
        short_desc_he: 'מחברת שמתייגת דומיינים כתקינים, נוזקה, פישינג או ספאם, ואז משווה עץ החלטה, רגרסיה לוגיסטית, ויער אקראי מאוזן.',
        long_desc_en: 'Domain records are concatenated, labeled, and cleaned, then split. The notebook fits a decision tree, logistic regression, and a random forest with class_weight balanced, and plots feature importance. Scores stay in the notebook, not on this page.',
        long_desc_ar: 'تُجمع سجلات النطاقات وتُوسَم وتُنظَّف ثم تُقسَّم. يدرّب الدفتر شجرة قرار وانحداراً لوجستياً وغابة عشوائية بأوزان فئات متوازنة، ويرسم أهمية الميزات. تبقى الأرقام في الدفتر لا في هذه الصفحة.',
        long_desc_he: 'רשומות דומיין מאוחדות, מתויגות ומנוקות, ואז מפוצלות. המחברת מאמנת עץ החלטה, רגרסיה לוגיסטית, ויער אקראי עם class_weight מאוזן, ומציירת חשיבות מאפיינים. הציונים נשארים במחברת.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'currency-image-processing',
        category: 'vision',
        year: 2024,
        featured: 0,
        display_order: 6,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/CoinsAndBillsDetection',
        demo_url: null,
        tech_stack: JSON.stringify(['MATLAB', 'Image Processing']),
        title_en: 'Coins and Bills Detection',
        title_ar: 'كشف العملات المعدنية والورقية',
        title_he: 'זיהוי מטבעות ושטרות',
        short_desc_en: 'MATLAB pipeline that finds coins and notes in ILS, EUR, and USD, then totals the value. CLAHE, circle detection, HSV, and cross-correlation.',
        short_desc_ar: 'خط MATLAB يلتقط العملات المعدنية والورقية بالشيكل واليورو والدولار ثم يجمع القيمة. CLAHE وكشف الدوائر وHSV والارتباط المتبادل.',
        short_desc_he: 'צינור MATLAB שמאתר מטבעות ושטרות ב-ILS, EUR ו-USD ואז מסכם את הערך. CLAHE, זיהוי עיגולים, HSV וקורלציה.',
        long_desc_en: 'With Rayan Abd Alhalem. ILS uses circle detection and a size split for coins plus bill segmentation. EUR sorts notes by hue and saturation. USD uses normalized cross-correlation because the notes share a size and a palette. A mixed mode guesses the currency first.',
        long_desc_ar: 'مع ريان عبد الحليم. الشيكل يستخدم كشف الدوائر وتقسيم الحجم للعملات المعدنية مع فصل الورق. اليورو يفرز الورق بالصبغة والتشبع. الدولار يستخدم الارتباط المتبادل لأن الأوراق تشترك في المقاس واللون. الوضع المختلط يخمن العملة أولاً.',
        long_desc_he: 'עם ריאן עבד אלחלים. שקל משתמש בזיהוי עיגולים ופיצול גודל למטבעות, ובפילוח שטרות. אירו ממיין שטרות לפי גוון ורוויה. דולר משתמש בקורלציה מנורמלת כי השטרות חולקים גודל ופלטה. מצב מעורב מנחש את המטבע קודם.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'converter-automation',
        category: 'auto',
        year: 2024,
        featured: 0,
        display_order: 7,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/converter_automation',
        demo_url: null,
        tech_stack: JSON.stringify(['Ruby', 'Appium', 'Cucumber']),
        title_en: 'Unit Converter Tests',
        title_ar: 'اختبارات محوّل الوحدات',
        title_he: 'בדיקות ממיר יחידות',
        short_desc_en: 'Appium and Cucumber scenarios in Ruby that drive the Ultimate Unit Converter Android app: headers, the swap control, and unit changes.',
        short_desc_ar: 'سيناريوهات Appium وCucumber بلغة Ruby تقود تطبيق Ultimate Unit Converter على أندرويد: العناوين وزر التبديل وتغيير الوحدات.',
        short_desc_he: 'תרחישי Appium ו-Cucumber ברובי שמניעים את אפליקציית Ultimate Unit Converter באנדרואיד: כותרות, כפתור ההחלפה, ושינוי יחידות.',
        long_desc_en: 'The public repository is a Cucumber suite on top of Appium. Steps click through the Android unit converter, then assert the From and To headers. It is a UI test suite for that app, not a file-conversion bot.',
        long_desc_ar: 'المستودع العام مجموعة Cucumber فوق Appium. الخطوات تنقر في محوّل الوحدات على أندرويد ثم تتحقق من عناوين From وTo. هذه اختبارات واجهة لذلك التطبيق، لا بوت لتحويل الملفات.',
        long_desc_he: 'המאגר הציבורי הוא סוויטת Cucumber מעל Appium. הצעדים לוחצים בממיר היחידות באנדרואיד ואז בודקים את כותרות From ו-To. זו סוויטת בדיקות ממשק לאותה אפליקציה, לא בוט להמרת קבצים.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'age-of-wars',
        category: 'game',
        year: 2024,
        featured: 0,
        display_order: 8,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/oop2_project',
        demo_url: null,
        tech_stack: JSON.stringify(['C++', 'SFML', 'Unit Testing']),
        title_en: 'Age of Wars',
        title_ar: 'عصر الحروب',
        title_he: 'Age of Wars',
        short_desc_en: 'A strategy game with the testing treated as part of the design. Unit tests cover about 80% of the combat and progression logic.',
        short_desc_ar: 'لعبة استراتيجية والاختبار جزء من التصميم. اختبارات الوحدة تغطي نحو 80% من منطق القتال والتقدم.',
        short_desc_he: 'משחק אסטרטגיה שבו הבדיקות הן חלק מהעיצוב. בדיקות יחידה מכסות כ-80% מלוגיקת הקרב וההתקדמות.',
        long_desc_en: 'A C++ and SFML strategy game from an OOP course. The suite was written so combat and progression could be checked without playing a full match. Coverage of that logic landed near 80%.',
        long_desc_ar: 'لعبة استراتيجية بـ C++ وSFML من مساق البرمجة الكائنية. كُتبت الاختبارات ليُفحص القتال والتقدم دون لعب مباراة كاملة. تغطية ذلك المنطق قاربت 80%.',
        long_desc_he: 'משחק אסטרטגיה ב-C++ ו-SFML מקורס תכנות מונחה עצמים. הסוויטה נכתבה כדי לבדוק קרב והתקדמות בלי משחק מלא. הכיסוי של הלוגיקה הזו הגיע לכ-80%.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'feeding-frenzy',
        category: 'game',
        year: 2024,
        featured: 0,
        display_order: 9,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/oop2_project-Abed_Khalil-Rayan_Abdalhalem',
        demo_url: null,
        tech_stack: JSON.stringify(['C++', 'SFML', 'CMake']),
        title_en: 'Feeding Frenzy',
        title_ar: 'فيدينغ فرينزي',
        title_he: 'Feeding Frenzy',
        short_desc_en: 'A C++ fish-eat-fish game with Rayan Abdalhalem. Growth, hazards, power-ups, and stages, saved high scores, a state machine.',
        short_desc_ar: 'لعبة C++ سمكة تأكل سمكة مع ريان عبد الحليم. نمو ومخاطر وتعزيزات ومراحل، وأعلى نتيجة محفوظة، وآلة حالات.',
        short_desc_he: 'משחק C++ של דג אוכל דג עם ריאן עבדאלחלים. גדילה, סכנות, חיזוקים ושלבים, שיא שמור, ומכונת מצבים.',
        long_desc_en: 'C++23 and SFML. The player grows by eating smaller fish, avoids bombs and jellyfish, and picks up power-ups. Biomes shift between reef, open ocean, and kelp. A small state machine and a light entity split keep rules out of the renderer.',
        long_desc_ar: 'C++23 وSFML. ينمو اللاعب بأكل الأسماك الأصغر، ويتفادى القنابل وقناديل البحر، ويلتقط التعزيزات. تتبدل البيئات بين الشعاب والبحر المفتوح وعشب البحر. آلة حالات صغيرة تفصل القواعد عن الرسم.',
        long_desc_he: 'C++23 ו-SFML. השחקן גדל מאכילת דגים קטנים, נמנע מפצצות ומדוזות, ואוסף חיזוקים. הביומות עוברות בין שונית, ים פתוח, ואצות. מכונת מצבים קטנה מפרידה את הכללים מהרינדור.',
        case_study_en: null, case_study_ar: null, case_study_he: null
    },
    {
        slug: 'mouse-vs-cats',
        category: 'game',
        year: 2023,
        featured: 0,
        display_order: 10,
        hero_image: null,
        repo_url: 'https://github.com/AbeedKhalil/oop1_project',
        demo_url: null,
        tech_stack: JSON.stringify(['C++', 'SFML', 'A*']),
        title_en: 'Mouse vs Cats',
        title_ar: 'فأر ضد قطط',
        title_he: 'עכבר נגד חתולים',
        short_desc_en: 'A real-time game where cats chase with A* pathfinding. Game rules stay separate from the SFML drawing.',
        short_desc_ar: 'لعبة آنية تطارد فيها القطط بمسار A*. تبقى قواعد اللعب منفصلة عن رسم SFML.',
        short_desc_he: 'משחק בזמן אמת שבו החתולים רודפים עם מסלול A*. כללי המשחק נפרדים מציור ה-SFML.',
        long_desc_en: 'An OOP course game. Enemy cats plan around obstacles with A*. The point of the split was to keep pathfinding testable without the window open.',
        long_desc_ar: 'لعبة من مساق البرمجة الكائنية. تخطط القطط حول العوائق بخوارزمية A*. الفصل يجعل إيجاد المسار قابلاً للاختبار دون فتح النافذة.',
        long_desc_he: 'משחק מקורס תכנות מונחה עצמים. חתולים מתכננים סביב מכשולים עם A*. הפיצול מאפשר לבדוק את המסלול בלי חלון פתוח.',
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
