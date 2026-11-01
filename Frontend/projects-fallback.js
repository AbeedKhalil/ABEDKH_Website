/* Static catalog. Used when the Render API is down, and merged in for slugs the live DB does not have yet. Reseed Render for the API to match. */
window.FALLBACK_PROJECTS = [
  {
    "slug": "kaya-swim",
    "category": "web",
    "year": 2026,
    "featured": true,
    "displayOrder": 0,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/kaya-swim",
    "demoUrl": "https://abeedkhalil.github.io/kaya-swim/",
    "techStack": [
      "Astro",
      "Tailwind CSS",
      "TypeScript"
    ],
    "title": {
      "en": "KAYA SWIM",
      "ar": "كايا سويم",
      "he": "KAYA SWIM"
    },
    "shortDesc": {
      "en": "Bilingual site for Katrin Shafir’s swim school at the Givat Ela pool. Hebrew and English, static Astro, WhatsApp on every call to action.",
      "ar": "موقع ثنائي اللغة لمدرسة السباحة كايا سويم في بركة جفعات إيلا. عبري وإنجليزي، Astro ثابت، وواتساب في كل دعوة للإجراء.",
      "he": "אתר דו-לשוני לבית הספר לשחייה של קטרין שפיר בבריכת גבעת אלה. עברית ואנגלית, Astro סטטי, וואטסאפ בכל קריאה לפעולה."
    },
    "longDesc": {
      "en": "A course site and founder page for KAYA SWIM. Hebrew at the root, English at /en/, static HTML from Astro and Tailwind, with each call to action opening WhatsApp already addressed to that context.",
      "ar": "موقع دورات وصفحة المؤسسة لكايا سويم. العبرية في الجذر والإنجليزية في /en/، وHTML ثابت من Astro وTailwind، وكل دعوة للإجراء تفتح واتساب برسالة جاهزة.",
      "he": "אתר קורסים ועמוד מייסדת עבור KAYA SWIM. עברית בשורש, אנגלית ב-/en/, HTML סטטי מ-Astro ו-Tailwind, וכל קריאה לפעולה פותחת וואטסאפ עם הודעה מוכנה."
    }
  },
  {
    "slug": "truth-lens-ai",
    "category": "machine-learning-data-science",
    "year": 2025,
    "featured": false,
    "displayOrder": 1,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/TruthLensAI",
    "demoUrl": null,
    "techStack": [
      "React",
      "TypeScript",
      "Hugging Face"
    ],
    "title": {
      "en": "TruthLens AI",
      "ar": "تروث لنز",
      "he": "TruthLens AI"
    },
    "shortDesc": {
      "en": "A React and TypeScript app that scores short text for bias and misinformation cues with Hugging Face zero-shot classification.",
      "ar": "تطبيق React وTypeScript يقيّم النصوص القصيرة لإشارات التحيز والمعلومات المضللة عبر تصنيف صفري من Hugging Face.",
      "he": "אפליקציית React ו-TypeScript שמדרגת טקסט קצר לרמזי הטיה ומידע מטעה באמצעות סיווג zero-shot של Hugging Face."
    },
    "longDesc": {
      "en": "A single-page app. The reader pastes a headline or a short claim, and facebook/bart-large-mnli returns bias and fact-check labels with confidence, plus loading and error states.",
      "ar": "تطبيق صفحة واحدة. يلصق القارئ عنواناً أو ادعاءً قصيراً، ويعيد النموذج facebook/bart-large-mnli تسميات التحيز والتحقق مع درجة الثقة وحالات التحميل والخطأ.",
      "he": "אפליקציית עמוד יחיד. הקורא מדביק כותרת או טענה קצרה, ו-facebook/bart-large-mnli מחזיר תוויות הטיה ובדיקת עובדות עם ביטחון, ומצבי טעינה ושגיאה."
    }
  },
  {
    "slug": "fullstack-chatroom",
    "category": "web",
    "year": 2025,
    "featured": false,
    "displayOrder": 2,
    "heroImage": null,
    "repoUrl": "https://github.com/Solange-s-Courses/ex5-express-abed-rayan.git",
    "demoUrl": null,
    "techStack": [
      "Node.js",
      "Express",
      "Sequelize",
      "MariaDB"
    ],
    "title": {
      "en": "Full-Stack Chatroom",
      "ar": "تطبيق دردشة متكامل",
      "he": "אפליקציית צ'אט Full-Stack"
    },
    "shortDesc": {
      "en": "Session auth, REST messaging, and persistent storage with paranoid soft-deletion. DOM updates via polling.",
      "ar": "مصادقة بالجلسات، رسائل REST، وتخزين دائم مع حذف ناعم محمي. تحديثات DOM عبر الاستطلاع.",
      "he": "אימות סשן, הודעות REST, ואחסון מתמיד עם soft-deletion פרנואידי. עדכוני DOM באמצעות polling."
    },
    "longDesc": {
      "en": "A chatroom for an Internet Programming course. Multi-step registration, session authentication, REST messages with paranoid soft-deletion, and DOM updates on a 10 second poll. A user can edit only their own content.",
      "ar": "غرفة دردشة لمساق برمجة الإنترنت. تسجيل متعدد الخطوات، مصادقة بالجلسات، رسائل REST مع حذف ناعم، وتحديثات DOM كل 10 ثوانٍ. يعدّل المستخدم محتواه فقط.",
      "he": "חדר צ'אט לקורס תכנות אינטרנט. רישום רב-שלבי, אימות סשן, הודעות REST עם soft-deletion פרנואידי, ועדכוני DOM כל 10 שניות. משתמש עורך רק את התוכן שלו."
    }
  },
  {
    "slug": "adam-eve-perfumes",
    "category": "web",
    "year": 2026,
    "featured": false,
    "displayOrder": 3,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/AdamEvePerfumes",
    "demoUrl": "https://abeedkhalil.github.io/AdamEvePerfumes/",
    "techStack": [
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    "title": {
      "en": "Adam Eve Perfumes",
      "ar": "آدم وحواء للعطور",
      "he": "Adam Eve Perfumes"
    },
    "shortDesc": {
      "en": "Arabic and English storefront for Adam Eve Perfumes: a catalog, a house story, and a contact path. Live on GitHub Pages.",
      "ar": "واجهة عربية وإنجليزية لمتجر آدم وحواء للعطور: كتالوج، قصة الدار، ومسار تواصل. منشور على GitHub Pages.",
      "he": "חנות ערבית ואנגלית עבור Adam Eve Perfumes: קטלוג, סיפור הבית, ומסלול יצירת קשר. באוויר ב-GitHub Pages."
    },
    "longDesc": {
      "en": "A right-to-left storefront with Bootstrap. The page carries the house name, a scent catalog, and a contact path, in Arabic and English.",
      "ar": "واجهة من اليمين إلى اليسار بـ Bootstrap. تحمل الصفحة اسم الدار وكتالوج العطور ومسار التواصل بالعربية والإنجليزية.",
      "he": "חנות מימין לשמאל עם Bootstrap. העמוד נושא את שם הבית, קטלוג ניחוחות, ומסלול יצירת קשר, בערבית ובאנגלית."
    }
  },
  {
    "slug": "heart-disease-prediction",
    "category": "machine-learning-data-science",
    "year": 2026,
    "featured": false,
    "displayOrder": 4,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/heart-disease-prediction",
    "demoUrl": null,
    "techStack": [
      "Python",
      "pandas",
      "scikit-learn"
    ],
    "title": {
      "en": "Heart Disease Prediction",
      "ar": "التنبؤ بأمراض القلب",
      "he": "חיזוי מחלות לב"
    },
    "shortDesc": {
      "en": "A scikit-learn pipeline on clinical attributes. Logistic regression, k-nearest neighbors, and a random forest, compared on precision, recall, F1, and ROC-AUC.",
      "ar": "خط scikit-learn على صفات سريرية. انحدار لوجستي، أقرب الجيران، وغابة عشوائية، مقارنة بالدقة والاسترجاع وF1 وROC-AUC.",
      "he": "צינור scikit-learn על מאפיינים קליניים. רגרסיה לוגיסטית, שכנים קרובים, ויער אקראי, בהשוואת precision, recall, F1 ו-ROC-AUC."
    },
    "longDesc": {
      "en": "Exploratory analysis of 13 clinical features, scaling, a train and test split, then three classifiers. The notebook and the written report sit in the repository. No accuracy figure is claimed here.",
      "ar": "تحليل استكشافي لـ 13 صفة سريرية، ثم تحجيم وتقسيم تدريب واختبار، ثم ثلاثة مصنّفات. الدفتر والتقرير في المستودع. لا يُذكر رقم دقة هنا.",
      "he": "ניתוח של 13 מאפיינים קליניים, נרמול, פיצול אימון ומבחן, ואז שלושה מסווגים. המחברת והדוח במאגר. אין כאן טענת דיוק מספרית."
    }
  },
  {
    "slug": "dns-project",
    "category": "cybersecurity",
    "year": 2026,
    "featured": false,
    "displayOrder": 5,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/dns-project",
    "demoUrl": null,
    "techStack": [
      "Python",
      "pandas",
      "scikit-learn",
      "Jupyter"
    ],
    "title": {
      "en": "DNS Domain Classification",
      "ar": "تصنيف نطاقات DNS",
      "he": "סיווג דומיינים ב-DNS"
    },
    "shortDesc": {
      "en": "A notebook that labels domains as benign, malware, phishing, or spam, then compares a decision tree, logistic regression, and a class-balanced random forest.",
      "ar": "دفتر يصنّف النطاقات إلى سليم أو برمجية خبيثة أو تصيد أو بريد مزعج، ثم يقارن شجرة قرار وانحداراً لوجستياً وغابة عشوائية متوازنة.",
      "he": "מחברת שמתייגת דומיינים כתקינים, נוזקה, פישינג או ספאם, ואז משווה עץ החלטה, רגרסיה לוגיסטית, ויער אקראי מאוזן."
    },
    "longDesc": {
      "en": "Domain records are concatenated, labeled, and cleaned, then split. The notebook fits a decision tree, logistic regression, and a random forest with class_weight balanced, and plots feature importance. Scores stay in the notebook, not on this page.",
      "ar": "تُجمع سجلات النطاقات وتُوسَم وتُنظَّف ثم تُقسَّم. يدرّب الدفتر شجرة قرار وانحداراً لوجستياً وغابة عشوائية بأوزان فئات متوازنة، ويرسم أهمية الميزات. تبقى الأرقام في الدفتر لا في هذه الصفحة.",
      "he": "רשומות דומיין מאוחדות, מתויגות ומנוקות, ואז מפוצלות. המחברת מאמנת עץ החלטה, רגרסיה לוגיסטית, ויער אקראי עם class_weight מאוזן, ומציירת חשיבות מאפיינים. הציונים נשארים במחברת."
    }
  },
  {
    "slug": "currency-image-processing",
    "category": "vision",
    "year": 2024,
    "featured": false,
    "displayOrder": 6,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/CoinsAndBillsDetection",
    "demoUrl": null,
    "techStack": [
      "MATLAB",
      "Image Processing"
    ],
    "title": {
      "en": "Coins and Bills Detection",
      "ar": "كشف العملات المعدنية والورقية",
      "he": "זיהוי מטבעות ושטרות"
    },
    "shortDesc": {
      "en": "MATLAB pipeline that finds coins and notes in ILS, EUR, and USD, then totals the value. CLAHE, circle detection, HSV, and cross-correlation.",
      "ar": "خط MATLAB يلتقط العملات المعدنية والورقية بالشيكل واليورو والدولار ثم يجمع القيمة. CLAHE وكشف الدوائر وHSV والارتباط المتبادل.",
      "he": "צינור MATLAB שמאתר מטבעות ושטרות ב-ILS, EUR ו-USD ואז מסכם את הערך. CLAHE, זיהוי עיגולים, HSV וקורלציה."
    },
    "longDesc": {
      "en": "With Rayan Abd Alhalem. ILS uses circle detection and a size split for coins plus bill segmentation. EUR sorts notes by hue and saturation. USD uses normalized cross-correlation because the notes share a size and a palette. A mixed mode guesses the currency first.",
      "ar": "مع ريان عبد الحليم. الشيكل يستخدم كشف الدوائر وتقسيم الحجم للعملات المعدنية مع فصل الورق. اليورو يفرز الورق بالصبغة والتشبع. الدولار يستخدم الارتباط المتبادل لأن الأوراق تشترك في المقاس واللون. الوضع المختلط يخمن العملة أولاً.",
      "he": "עם ריאן עבד אלחלים. שקל משתמש בזיהוי עיגולים ופיצול גודל למטבעות, ובפילוח שטרות. אירו ממיין שטרות לפי גוון ורוויה. דולר משתמש בקורלציה מנורמלת כי השטרות חולקים גודל ופלטה. מצב מעורב מנחש את המטבע קודם."
    }
  },
  {
    "slug": "converter-automation",
    "category": "auto",
    "year": 2024,
    "featured": false,
    "displayOrder": 7,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/converter_automation",
    "demoUrl": null,
    "techStack": [
      "Ruby",
      "Appium",
      "Cucumber"
    ],
    "title": {
      "en": "Unit Converter Tests",
      "ar": "اختبارات محوّل الوحدات",
      "he": "בדיקות ממיר יחידות"
    },
    "shortDesc": {
      "en": "Appium and Cucumber scenarios in Ruby that drive the Ultimate Unit Converter Android app: headers, the swap control, and unit changes.",
      "ar": "سيناريوهات Appium وCucumber بلغة Ruby تقود تطبيق Ultimate Unit Converter على أندرويد: العناوين وزر التبديل وتغيير الوحدات.",
      "he": "תרחישי Appium ו-Cucumber ברובי שמניעים את אפליקציית Ultimate Unit Converter באנדרואיד: כותרות, כפתור ההחלפה, ושינוי יחידות."
    },
    "longDesc": {
      "en": "The public repository is a Cucumber suite on top of Appium. Steps click through the Android unit converter, then assert the From and To headers. It is a UI test suite for that app, not a file-conversion bot.",
      "ar": "المستودع العام مجموعة Cucumber فوق Appium. الخطوات تنقر في محوّل الوحدات على أندرويد ثم تتحقق من عناوين From وTo. هذه اختبارات واجهة لذلك التطبيق، لا بوت لتحويل الملفات.",
      "he": "המאגר הציבורי הוא סוויטת Cucumber מעל Appium. הצעדים לוחצים בממיר היחידות באנדרואיד ואז בודקים את כותרות From ו-To. זו סוויטת בדיקות ממשק לאותה אפליקציה, לא בוט להמרת קבצים."
    }
  },
  {
    "slug": "age-of-wars",
    "category": "game",
    "year": 2024,
    "featured": false,
    "displayOrder": 8,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/oop2_project",
    "demoUrl": null,
    "techStack": [
      "C++",
      "SFML",
      "Unit Testing"
    ],
    "title": {
      "en": "Age of Wars",
      "ar": "عصر الحروب",
      "he": "Age of Wars"
    },
    "shortDesc": {
      "en": "A strategy game with the testing treated as part of the design. Unit tests cover about 80% of the combat and progression logic.",
      "ar": "لعبة استراتيجية والاختبار جزء من التصميم. اختبارات الوحدة تغطي نحو 80% من منطق القتال والتقدم.",
      "he": "משחק אסטרטגיה שבו הבדיקות הן חלק מהעיצוב. בדיקות יחידה מכסות כ-80% מלוגיקת הקרב וההתקדמות."
    },
    "longDesc": {
      "en": "A C++ and SFML strategy game from an OOP course. The suite was written so combat and progression could be checked without playing a full match. Coverage of that logic landed near 80%.",
      "ar": "لعبة استراتيجية بـ C++ وSFML من مساق البرمجة الكائنية. كُتبت الاختبارات ليُفحص القتال والتقدم دون لعب مباراة كاملة. تغطية ذلك المنطق قاربت 80%.",
      "he": "משחק אסטרטגיה ב-C++ ו-SFML מקורס תכנות מונחה עצמים. הסוויטה נכתבה כדי לבדוק קרב והתקדמות בלי משחק מלא. הכיסוי של הלוגיקה הזו הגיע לכ-80%."
    }
  },
  {
    "slug": "feeding-frenzy",
    "category": "game",
    "year": 2024,
    "featured": false,
    "displayOrder": 9,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/oop2_project-Abed_Khalil-Rayan_Abdalhalem",
    "demoUrl": null,
    "techStack": [
      "C++",
      "SFML",
      "CMake"
    ],
    "title": {
      "en": "Feeding Frenzy",
      "ar": "فيدينغ فرينزي",
      "he": "Feeding Frenzy"
    },
    "shortDesc": {
      "en": "A C++ fish-eat-fish game with Rayan Abdalhalem. Growth, hazards, power-ups, and stages, saved high scores, a state machine.",
      "ar": "لعبة C++ سمكة تأكل سمكة مع ريان عبد الحليم. نمو ومخاطر وتعزيزات ومراحل، وأعلى نتيجة محفوظة، وآلة حالات.",
      "he": "משחק C++ של דג אוכל דג עם ריאן עבדאלחלים. גדילה, סכנות, חיזוקים ושלבים, שיא שמור, ומכונת מצבים."
    },
    "longDesc": {
      "en": "C++23 and SFML. The player grows by eating smaller fish, avoids bombs and jellyfish, and picks up power-ups. Biomes shift between reef, open ocean, and kelp. A small state machine and a light entity split keep rules out of the renderer.",
      "ar": "C++23 وSFML. ينمو اللاعب بأكل الأسماك الأصغر، ويتفادى القنابل وقناديل البحر، ويلتقط التعزيزات. تتبدل البيئات بين الشعاب والبحر المفتوح وعشب البحر. آلة حالات صغيرة تفصل القواعد عن الرسم.",
      "he": "C++23 ו-SFML. השחקן גדל מאכילת דגים קטנים, נמנע מפצצות ומדוזות, ואוסף חיזוקים. הביומות עוברות בין שונית, ים פתוח, ואצות. מכונת מצבים קטנה מפרידה את הכללים מהרינדור."
    }
  },
  {
    "slug": "mouse-vs-cats",
    "category": "game",
    "year": 2023,
    "featured": false,
    "displayOrder": 10,
    "heroImage": null,
    "repoUrl": "https://github.com/AbeedKhalil/oop1_project",
    "demoUrl": null,
    "techStack": [
      "C++",
      "SFML",
      "A*"
    ],
    "title": {
      "en": "Mouse vs Cats",
      "ar": "فأر ضد قطط",
      "he": "עכבר נגד חתולים"
    },
    "shortDesc": {
      "en": "A real-time game where cats chase with A* pathfinding. Game rules stay separate from the SFML drawing.",
      "ar": "لعبة آنية تطارد فيها القطط بمسار A*. تبقى قواعد اللعب منفصلة عن رسم SFML.",
      "he": "משחק בזמן אמת שבו החתולים רודפים עם מסלול A*. כללי המשחק נפרדים מציור ה-SFML."
    },
    "longDesc": {
      "en": "An OOP course game. Enemy cats plan around obstacles with A*. The point of the split was to keep pathfinding testable without the window open.",
      "ar": "لعبة من مساق البرمجة الكائنية. تخطط القطط حول العوائق بخوارزمية A*. الفصل يجعل إيجاد المسار قابلاً للاختبار دون فتح النافذة.",
      "he": "משחק מקורס תכנות מונחה עצמים. חתולים מתכננים סביב מכשולים עם A*. הפיצול מאפשר לבדוק את המסלול בלי חלון פתוח."
    }
  }
];
