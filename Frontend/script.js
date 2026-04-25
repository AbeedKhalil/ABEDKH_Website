/* ==========================================================================
   Abd AlRahman Khalil — Portfolio
   Site interactivity: i18n, theme, mobile nav, scroll reveal, filters
   ========================================================================== */

(function () {
    'use strict';

    /* ------------------------------------------------------------------ */
    /*  i18n dictionary                                                    */
    /* ------------------------------------------------------------------ */
    const i18n = {
        en: {
            "nav-home": "Home", "nav-projects": "Projects", "nav-resume": "Resume", "nav-contact": "Contact",

            // Hero
            "status-open": "Open to new opportunities",
            "hero-name": "Abd AlRahman Khalil",
            "hero-role-1": "Computer Science",
            "hero-role-2": "QA & Automation",
            "hero-role-3": "IT Engineering",
            "hero-desc": "I build dependable software and operate the systems behind it — full-stack web apps, QA automation, and L1/L2 support for thousands of users. Engineering with a bias for stability, observability, and clean execution.",
            "card-available": "Available",
            "btn-projects": "View Projects",
            "btn-cv": "Download CV",
            "btn-resume": "Read my resume",
            "btn-contact": "Get in touch",
            "btn-view-all": "View all projects",
            "btn-print": "Print",
            "btn-send": "Send message",

            // Stats
            "stat-1": "Users supported",
            "stat-2": "SLA compliance",
            "stat-3": "Shipped projects",
            "stat-4": "Test coverage",

            // About
            "ey-about": "About",
            "section-about": "Engineering at the seam of code and infrastructure.",
            "about-p1": "I'm a detail-oriented Computer Science professional bridging the gap between software development and IT infrastructure. With a strong foundation in OOP, data structures, and algorithms, I approach software with a focus on stability and performance.",
            "about-p2": "My background managing L1/L2 technical support for thousands of users has instilled a rigorous QA mindset. I excel at root-cause analysis, log forensics, and automating away repetitive work — whether building full-stack apps, computer-vision scripts, or hardening enterprise environments.",
            "val-1": "Stability and observability before features",
            "val-2": "Automate the boring parts; document the rest",
            "val-3": "Test coverage as engineering hygiene",

            // Capabilities
            "ey-cap": "Capabilities",
            "cap-title": "What I do",
            "cap-sub": "A practical mix of building, testing, and supporting — across the stack and across the org.",
            "cap-1-t": "Full-stack development",
            "cap-1-d": "Node.js, Express, REST APIs, MariaDB / MySQL, Sequelize. Authentication, sessions, and persistent storage from the schema up.",
            "cap-2-t": "QA & automation",
            "cap-2-d": "Selenium, Playwright, Postman, Appium, unit testing. Build pipelines that fail loudly so production doesn't.",
            "cap-3-t": "Support & infra",
            "cap-3-d": "Active Directory, DNS/DHCP, TCP/IP, Windows Server, Linux. PowerShell automation and RCA-driven documentation.",

            // Featured work
            "ey-work": "Selected work",
            "work-title": "Recent projects",
            "work-sub": "A small slice — full-stack, computer vision, automation, and game engineering.",
            "proj-chat-title": "Full-Stack Chatroom",
            "proj-chat-desc": "Secure auth, REST messaging, and persistent storage with paranoid soft-deletion. Real-time DOM updates via polling.",
            "proj-curr-title": "Currency Image Processing",
            "proj-curr-desc": "Computer-vision pipeline classifying ILS, USD, and EUR notes from varied images. Custom preprocessing & feature extraction.",
            "proj-conv-title": "Converter Automation",
            "proj-conv-desc": "Selenium-driven script that automates a manual file-conversion workflow, reclaiming hours of repetitive data entry per week.",

            // CTA
            "cta-title": "Let's build something reliable.",
            "cta-sub": "Available for full-time roles in software, QA, and IT engineering. Open to remote and on-site work in Israel.",
            "cta-collab": "Have a project in mind?",
            "cta-collab-sub": "Whether it's full-stack, automation, or QA-driven, I'd love to hear about it.",

            // Projects page
            "proj-page-title": "Projects",
            "proj-page-sub": "A working portfolio of academic and personal projects spanning full-stack web, computer vision, game engineering, and automation. Each one prioritizes correctness, observability, and clean execution.",
            "filter-all": "All", "filter-web": "Web", "filter-vision": "Vision",
            "filter-games": "Games", "filter-auto": "Automation",

            // Resume
            "ey-resume": "Curriculum Vitae",
            "resume-title": "Resume",
            "resume-sub": "A condensed view of my engineering experience, education, and toolkit. The full PDF version is available below.",
            "aside-sections": "On this page",
            "aside-summary": "Summary",
            "aside-contact": "Contact",
            "section-exp": "Experience",
            "section-edu": "Education",
            "section-skills": "Skills",
            "resume-summary": "Computer Science engineer with hands-on experience in technical support, automation, and full-stack development. Proven background managing L1/L2 support for 4,500+ users with 100% SLA compliance, and a strong QA mindset rooted in real production troubleshooting. Comfortable across the stack — from Active Directory and PowerShell scripting to Node.js APIs and Python automation.",
            "exp-date-1": "2023 — Present",
            "exp-title-1": "Technical Support / IT Engineer",
            "exp-place-1": "Hadassah Academic College · Jerusalem",
            "exp-b1": "Provide end-to-end support and advanced L1/L2 troubleshooting for an infrastructure of 4,500+ users.",
            "exp-b2": "Maintain 100% SLA compliance while resolving hardware, software, and complex network requests.",
            "exp-b3": "Administer Active Directory environments and provide comprehensive infrastructure-related support.",
            "exp-b4": "Develop PowerShell automation scripts to streamline routine administrative tasks and system checks.",
            "exp-b5": "Document recurring issues and run Root Cause Analysis (RCA) to improve workflows and system stability.",
            "edu-degree": "B.Sc. in Computer Science",
            "edu-place": "Hadassah Academic College · Jerusalem",
            "edu-b1": "Coursework: OOP, Data Structures, Algorithms, Internet Programming, Databases, Computer Vision, Operating Systems.",
            "edu-b2": "Project-driven curriculum spanning C++ game engineering, Node.js full-stack apps, and MATLAB image processing.",

            "skill-prog": "Programming",
            "skill-web": "Web & Database",
            "skill-qa": "QA & Automation",
            "skill-infra": "Support & Infra",
            "skill-tools": "Tools & Core Concepts",

            // Contact
            "ey-contact": "Get in touch",
            "contact-title": "Let's talk.",
            "contact-sub": "Open to opportunities in software development, QA, and IT engineering. The fastest channels are listed on the left — or send a message directly using the form.",
            "status-replies": "Typically replies within 24 hours",
            "lbl-email": "Email", "lbl-phone": "Phone",
            "form-title": "Send a message",
            "form-sub": "Tell me a bit about the role or project. I'll get back to you within a day.",
            "form-name": "Name",
            "form-email": "Email",
            "form-subject": "Subject",
            "form-message": "Message",

            // Footer
            "footer-tag": "Computer Science · QA & Automation · IT Engineering. Building dependable systems out of Jerusalem.",
            "footer-nav": "Navigate",
            "footer-elsewhere": "Elsewhere",
            "footer-rights": "© 2026 Abd AlRahman Khalil. All rights reserved."
        },

        ar: {
            "nav-home": "الرئيسية", "nav-projects": "المشاريع", "nav-resume": "السيرة الذاتية", "nav-contact": "تواصل",

            "status-open": "متاح لفرص عمل جديدة",
            "hero-name": "عبد الرحمن خليل",
            "hero-role-1": "علوم حاسوب",
            "hero-role-2": "ضمان الجودة والأتمتة",
            "hero-role-3": "هندسة تقنية المعلومات",
            "hero-desc": "أُطوّر برمجيات موثوقة وأُشغّل الأنظمة التي تقف وراءها — تطبيقات ويب متكاملة، أتمتة اختبارات الجودة، ودعم فني (L1/L2) لآلاف المستخدمين. أُهندس البرمجيات بانحياز واضح نحو الاستقرار، القابلية للمراقبة، والتنفيذ النظيف.",
            "card-available": "متاح",
            "btn-projects": "استعراض المشاريع",
            "btn-cv": "تحميل السيرة الذاتية",
            "btn-resume": "قراءة السيرة الذاتية",
            "btn-contact": "تواصل معي",
            "btn-view-all": "عرض كل المشاريع",
            "btn-print": "طباعة",
            "btn-send": "إرسال الرسالة",

            "stat-1": "مستخدم مدعوم",
            "stat-2": "التزام SLA",
            "stat-3": "مشاريع منجزة",
            "stat-4": "تغطية اختبارات",

            "ey-about": "نبذة",
            "section-about": "هندسة على الحدود بين الكود والبنية التحتية.",
            "about-p1": "متخصص في علوم الحاسوب دقيق الملاحظة، أعمل على سدّ الفجوة بين تطوير البرمجيات والبنية التحتية لتقنية المعلومات. بفضل أساس قوي في OOP وهياكل البيانات والخوارزميات، أتعامل مع المشاريع البرمجية بتركيز على الاستقرار والأداء.",
            "about-p2": "خلفيتي في إدارة الدعم التقني (L1/L2) لآلاف المستخدمين أكسبتني عقلية صارمة في ضمان الجودة. أتميز في تحليل الأسباب الجذرية، تحليل السجلات، وأتمتة المهام المتكررة — سواء عند تطوير تطبيقات الويب، خوارزميات الرؤية الحاسوبية، أو تحصين بيئات المؤسسات.",
            "val-1": "الاستقرار والمراقبة قبل الميزات",
            "val-2": "أتمتة المهام المملة، وتوثيق ما تبقى",
            "val-3": "تغطية الاختبارات كنظافة هندسية",

            "ey-cap": "القدرات",
            "cap-title": "ما أُقدّمه",
            "cap-sub": "مزيج عملي بين البناء والاختبار والدعم — عبر التقنيات وعبر فرق العمل.",
            "cap-1-t": "تطوير ويب متكامل",
            "cap-1-d": "Node.js، Express، REST APIs، MariaDB / MySQL، Sequelize. مصادقة، جلسات، وتخزين دائم من قاعدة البيانات للأعلى.",
            "cap-2-t": "ضمان الجودة والأتمتة",
            "cap-2-d": "Selenium، Playwright، Postman، Appium، اختبارات وحدة. أبني خطوط أنابيب تفشل بصوتٍ عالٍ كي لا يفعل ذلك الإنتاج.",
            "cap-3-t": "الدعم والبنية التحتية",
            "cap-3-d": "Active Directory، DNS/DHCP، TCP/IP، Windows Server، Linux. أتمتة بـPowerShell وتوثيق مبني على RCA.",

            "ey-work": "أعمال مختارة",
            "work-title": "أحدث المشاريع",
            "work-sub": "شريحة مختصرة — تطوير ويب، رؤية حاسوبية، أتمتة، وهندسة ألعاب.",
            "proj-chat-title": "تطبيق دردشة متكامل",
            "proj-chat-desc": "مصادقة آمنة، رسائل REST، وتخزين دائم مع حذف ناعم محمي. تحديثات DOM فورية عبر الاستطلاع الدوري.",
            "proj-curr-title": "معالجة صور وتمييز عملات",
            "proj-curr-desc": "خط معالجة بصري لتصنيف عملات ILS وUSD وEUR من صور متنوعة. معالجة مسبقة واستخراج ميزات مخصصة.",
            "proj-conv-title": "أتمتة تحويل الملفات",
            "proj-conv-desc": "أداة Selenium تؤتمت سير عمل تحويل الملفات يدوياً، وتوفّر ساعات من الإدخال المتكرر أسبوعياً.",

            "cta-title": "لنبنِ شيئاً موثوقاً.",
            "cta-sub": "متاح لوظائف بدوام كامل في تطوير البرمجيات وضمان الجودة وهندسة تقنية المعلومات. متاح للعمل عن بُعد ومن المكتب في إسرائيل.",
            "cta-collab": "هل لديك مشروع بالفكر؟",
            "cta-collab-sub": "سواء كان تطوير ويب، أتمتة، أو مشروعاً يقوده ضمان الجودة — يسعدني الحديث عنه.",

            "proj-page-title": "المشاريع",
            "proj-page-sub": "محفظة عمل تضم مشاريع أكاديمية وشخصية تشمل تطوير ويب متكامل، رؤية حاسوبية، هندسة ألعاب، وأتمتة. كل مشروع يقدم الصحة والمراقبة والتنفيذ النظيف على ما سواها.",
            "filter-all": "الكل", "filter-web": "ويب", "filter-vision": "رؤية",
            "filter-games": "ألعاب", "filter-auto": "أتمتة",

            "ey-resume": "السيرة الذاتية",
            "resume-title": "السيرة الذاتية",
            "resume-sub": "نظرة موجزة على خبراتي الهندسية، تعليمي، ومجموعة أدواتي. النسخة الكاملة بصيغة PDF متاحة أدناه.",
            "aside-sections": "في هذه الصفحة",
            "aside-summary": "ملخص",
            "aside-contact": "اتصال",
            "section-exp": "الخبرات",
            "section-edu": "التعليم",
            "section-skills": "المهارات",
            "resume-summary": "مهندس علوم حاسوب يمتلك خبرة عملية في الدعم التقني والأتمتة وتطوير الويب المتكامل. سجل مثبت في إدارة دعم L1/L2 لأكثر من 4,500 مستخدم بالتزام كامل بـSLA، مع عقلية QA راسخة نابعة من حلول الإنتاج الواقعية. مرتاح في كل المراحل — من Active Directory وPowerShell إلى Node.js وأتمتة Python.",
            "exp-date-1": "2023 — الآن",
            "exp-title-1": "مهندس دعم فني / IT",
            "exp-place-1": "الكلية الأكاديمية هداسا · القدس",
            "exp-b1": "تقديم دعم شامل وتشخيص متقدم (L1/L2) لبنية تحتية تخدم أكثر من 4,500 مستخدم.",
            "exp-b2": "الحفاظ على التزام بنسبة 100% بـSLA أثناء حل طلبات الأجهزة والبرمجيات والشبكات المعقدة.",
            "exp-b3": "إدارة بيئات Active Directory وتقديم دعم شامل للبنية التحتية.",
            "exp-b4": "تطوير سكربتات أتمتة بـPowerShell لتسريع المهام الإدارية الروتينية وفحوصات النظام.",
            "exp-b5": "توثيق المشكلات المتكررة وإجراء تحليل الأسباب الجذرية (RCA) لتحسين الأداء والاستقرار.",
            "edu-degree": "بكالوريوس في علوم الحاسوب",
            "edu-place": "الكلية الأكاديمية هداسا · القدس",
            "edu-b1": "المساقات: OOP، هياكل البيانات، الخوارزميات، برمجة الإنترنت، قواعد البيانات، الرؤية الحاسوبية، أنظمة التشغيل.",
            "edu-b2": "منهج قائم على المشاريع يشمل هندسة ألعاب C++، تطبيقات Node.js متكاملة، ومعالجة صور MATLAB.",

            "skill-prog": "البرمجة",
            "skill-web": "الويب وقواعد البيانات",
            "skill-qa": "ضمان الجودة والأتمتة",
            "skill-infra": "الدعم والبنية التحتية",
            "skill-tools": "أدوات ومفاهيم أساسية",

            "ey-contact": "تواصل",
            "contact-title": "لنتحدث.",
            "contact-sub": "متاح لفرص في تطوير البرمجيات، ضمان الجودة، وهندسة IT. أسرع القنوات على اليسار، أو يمكنك إرسال رسالة مباشرة من النموذج.",
            "status-replies": "عادةً ما أرد خلال 24 ساعة",
            "lbl-email": "البريد الإلكتروني", "lbl-phone": "الهاتف",
            "form-title": "أرسل رسالة",
            "form-sub": "أخبرني قليلاً عن الدور أو المشروع. سأرد خلال يوم.",
            "form-name": "الاسم",
            "form-email": "البريد الإلكتروني",
            "form-subject": "الموضوع",
            "form-message": "الرسالة",

            "footer-tag": "علوم حاسوب · ضمان الجودة والأتمتة · هندسة IT. بناء أنظمة موثوقة من القدس.",
            "footer-nav": "تنقل",
            "footer-elsewhere": "في أماكن أخرى",
            "footer-rights": "© 2026 عبد الرحمن خليل. جميع الحقوق محفوظة."
        },

        he: {
            "nav-home": "בית", "nav-projects": "פרויקטים", "nav-resume": "קורות חיים", "nav-contact": "צור קשר",

            "status-open": "פתוח להצעות עבודה",
            "hero-name": "עבד אלרחמן חליל",
            "hero-role-1": "מדעי המחשב",
            "hero-role-2": "QA ואוטומציה",
            "hero-role-3": "הנדסת IT",
            "hero-desc": "אני בונה תוכנה אמינה ומפעיל את המערכות שמאחוריה — אפליקציות Full-Stack, אוטומציית QA, ותמיכה L1/L2 לאלפי משתמשים. הנדסה עם הטיה לעבר יציבות, נראות ויישום נקי.",
            "card-available": "זמין",
            "btn-projects": "צפייה בפרויקטים",
            "btn-cv": "הורדת קורות חיים",
            "btn-resume": "לקריאת קורות החיים",
            "btn-contact": "צור קשר",
            "btn-view-all": "כל הפרויקטים",
            "btn-print": "הדפסה",
            "btn-send": "שליחת הודעה",

            "stat-1": "משתמשים נתמכים",
            "stat-2": "עמידה ב-SLA",
            "stat-3": "פרויקטים שהוגשו",
            "stat-4": "כיסוי בדיקות",

            "ey-about": "אודות",
            "section-about": "הנדסה בנקודת התפר בין קוד לתשתיות.",
            "about-p1": "איש מדעי המחשב יסודי, מגשר בין פיתוח תוכנה לתשתיות IT. עם בסיס חזק ב-OOP, מבני נתונים ואלגוריתמים, אני ניגש לאתגרי תוכנה תוך התמקדות ביציבות וביצועים.",
            "about-p2": "הרקע שלי בניהול תמיכה L1/L2 לאלפי משתמשים הקנה לי חשיבת QA קפדנית. אני מצטיין ב-RCA, ניתוח לוגים, ואוטומציה של עבודה חוזרת — בין אם מדובר באפליקציות Full-Stack, סקריפטי ראייה ממוחשבת, או חיזוק סביבות אנטרפרייז.",
            "val-1": "יציבות ונראות לפני תכונות",
            "val-2": "אוטומציה לחלקים המשעממים, תיעוד לכל השאר",
            "val-3": "כיסוי בדיקות כהיגיינה הנדסית",

            "ey-cap": "יכולות",
            "cap-title": "מה אני עושה",
            "cap-sub": "תמהיל מעשי של בנייה, בדיקות ותמיכה — לרוחב הסטאק ולרוחב הארגון.",
            "cap-1-t": "פיתוח Full-Stack",
            "cap-1-d": "Node.js, Express, REST APIs, MariaDB / MySQL, Sequelize. אימות, סשנים ואחסון מתמיד מהסכמה ומעלה.",
            "cap-2-t": "QA ואוטומציה",
            "cap-2-d": "Selenium, Playwright, Postman, Appium, בדיקות יחידה. בונה pipelines שנופלים בקול — כדי שהפרודקשן לא ייפול בשקט.",
            "cap-3-t": "תמיכה ותשתיות",
            "cap-3-d": "Active Directory, DNS/DHCP, TCP/IP, Windows Server, Linux. אוטומציית PowerShell ותיעוד מוכוון RCA.",

            "ey-work": "עבודות נבחרות",
            "work-title": "פרויקטים אחרונים",
            "work-sub": "פרוסה קטנה — Full-Stack, ראייה ממוחשבת, אוטומציה והנדסת משחקים.",
            "proj-chat-title": "אפליקציית צ'אט Full-Stack",
            "proj-chat-desc": "אימות מאובטח, הודעות REST, ואחסון מתמיד עם soft-deletion פרנואידי. עדכוני DOM בזמן אמת באמצעות polling.",
            "proj-curr-title": "עיבוד תמונה וזיהוי מטבעות",
            "proj-curr-desc": "צינור ראייה ממוחשבת שמסווג ILS, USD, ו-EUR מתמונות מגוונות. עיבוד מקדים והוצאת מאפיינים מותאמים.",
            "proj-conv-title": "אוטומציית המרת קבצים",
            "proj-conv-desc": "סקריפט מבוסס Selenium שמאוטמט תהליך ידני של המרת קבצים, ומשחרר שעות של עבודה חוזרת בשבוע.",

            "cta-title": "בואו נבנה משהו אמין.",
            "cta-sub": "פנוי למשרות מלאות בתוכנה, QA והנדסת IT. פתוח לעבודה מרחוק וביש\"ע.",
            "cta-collab": "יש לכם פרויקט בראש?",
            "cta-collab-sub": "Full-Stack, אוטומציה, או מובל QA — אשמח לשמוע.",

            "proj-page-title": "פרויקטים",
            "proj-page-sub": "תיק עבודות פעיל הכולל פרויקטים אקדמיים ואישיים בתחומי Full-Stack, ראייה ממוחשבת, הנדסת משחקים ואוטומציה. כל אחד שם דגש על נכונות, נראות וביצוע נקי.",
            "filter-all": "הכל", "filter-web": "ווב", "filter-vision": "ראייה",
            "filter-games": "משחקים", "filter-auto": "אוטומציה",

            "ey-resume": "קורות חיים",
            "resume-title": "קורות חיים",
            "resume-sub": "מבט מתומצת על הניסיון ההנדסי, ההשכלה והכלים שלי. הגרסה המלאה ב-PDF זמינה למטה.",
            "aside-sections": "בעמוד הזה",
            "aside-summary": "תקציר",
            "aside-contact": "צור קשר",
            "section-exp": "ניסיון",
            "section-edu": "השכלה",
            "section-skills": "מיומנויות",
            "resume-summary": "מהנדס מדעי המחשב עם ניסיון מעשי בתמיכה טכנית, אוטומציה ופיתוח Full-Stack. רקע מוכח בניהול תמיכת L1/L2 ל-4,500+ משתמשים בעמידה של 100% ב-SLA, וחשיבת QA חזקה הנובעת מפתרון תקלות פרודקשן בפועל. נוח לרוחב הסטאק — מ-Active Directory ו-PowerShell ועד Node.js ואוטומציית Python.",
            "exp-date-1": "2023 — היום",
            "exp-title-1": "מהנדס תמיכה טכנית / IT",
            "exp-place-1": "המכללה האקדמית הדסה · ירושלים",
            "exp-b1": "מתן תמיכה מקצה לקצה ופתרון תקלות מתקדם (L1/L2) עבור תשתית של 4,500+ משתמשים.",
            "exp-b2": "שמירה על עמידה של 100% ב-SLA תוך טיפול בבעיות חומרה, תוכנה ורשת מורכבות.",
            "exp-b3": "ניהול סביבות Active Directory ומתן תמיכה רחבה בתשתיות.",
            "exp-b4": "פיתוח סקריפטים ב-PowerShell לייעול משימות אדמיניסטרציה ובדיקות מערכת.",
            "exp-b5": "תיעוד תקלות חוזרות וביצוע RCA לשיפור תהליכים ויציבות.",
            "edu-degree": "B.Sc. במדעי המחשב",
            "edu-place": "המכללה האקדמית הדסה · ירושלים",
            "edu-b1": "קורסים: OOP, מבני נתונים, אלגוריתמים, תכנות אינטרנט, מסדי נתונים, ראייה ממוחשבת, מערכות הפעלה.",
            "edu-b2": "תוכנית מבוססת פרויקטים: הנדסת משחקים ב-C++, אפליקציות Node.js, ועיבוד תמונה ב-MATLAB.",

            "skill-prog": "תכנות",
            "skill-web": "ווב ומסדי נתונים",
            "skill-qa": "QA ואוטומציה",
            "skill-infra": "תמיכה ותשתיות",
            "skill-tools": "כלים ומושגי יסוד",

            "ey-contact": "צור קשר",
            "contact-title": "בואו נדבר.",
            "contact-sub": "פתוח להזדמנויות בפיתוח תוכנה, QA והנדסת IT. הערוצים המהירים מופיעים מימין — או שלחו הודעה ישירה דרך הטופס.",
            "status-replies": "בדרך כלל אענה תוך 24 שעות",
            "lbl-email": "אימייל", "lbl-phone": "טלפון",
            "form-title": "שליחת הודעה",
            "form-sub": "ספרו לי קצת על המשרה או הפרויקט. אחזור אליכם תוך יום.",
            "form-name": "שם",
            "form-email": "אימייל",
            "form-subject": "נושא",
            "form-message": "הודעה",

            "footer-tag": "מדעי המחשב · QA ואוטומציה · הנדסת IT. בונה מערכות אמינות מירושלים.",
            "footer-nav": "ניווט",
            "footer-elsewhere": "במקומות אחרים",
            "footer-rights": "© 2026 עבד אלרחמן חליל. כל הזכויות שמורות."
        }
    };

    /* ------------------------------------------------------------------ */
    /*  Helpers                                                            */
    /* ------------------------------------------------------------------ */
    const $  = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    /* ------------------------------------------------------------------ */
    /*  Theme                                                              */
    /* ------------------------------------------------------------------ */
    const sunIcon  = '<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/><circle cx="12" cy="12" r="4"/>';
    const moonIcon = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = $('#theme-icon');
        if (icon) icon.innerHTML = theme === 'light' ? sunIcon : moonIcon;
        const meta = $('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'light' ? '#fafaf7' : '#08090c');
    }

    function initTheme() {
        const stored = localStorage.getItem('theme');
        const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        const theme = stored || (prefersLight ? 'light' : 'dark');
        applyTheme(theme);

        const btn = $('#theme-toggle');
        if (btn) {
            btn.addEventListener('click', () => {
                const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
                applyTheme(next);
                localStorage.setItem('theme', next);
            });
        }
    }

    /* ------------------------------------------------------------------ */
    /*  Navigation: active link, mobile toggle, scroll shadow              */
    /* ------------------------------------------------------------------ */
    function initNav() {
        const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
        $$('.nav-links a').forEach(a => {
            const href = (a.getAttribute('href') || '').toLowerCase();
            if (href === here) a.classList.add('active');
        });

        const toggle = $('#mobile-toggle');
        const menu = $('#nav-links');
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                const open = menu.classList.toggle('open');
                toggle.setAttribute('aria-expanded', String(open));
            });
            menu.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                    menu.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        }

        const header = $('#site-header');
        if (header) {
            const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }
    }

    /* ------------------------------------------------------------------ */
    /*  Language                                                           */
    /* ------------------------------------------------------------------ */
    function setLanguage(lang) {
        const dict = i18n[lang] || i18n.en;
        const isRTL = lang === 'ar' || lang === 'he';
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);

        $$('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] != null) el.textContent = dict[key];
        });

        localStorage.setItem('preferredLang', lang);
    }

    function initLanguage() {
        const select = $('#lang-select');
        const saved = localStorage.getItem('preferredLang') || 'en';
        if (select) {
            select.value = saved;
            select.addEventListener('change', (e) => setLanguage(e.target.value));
        }
        setLanguage(saved);
    }

    /* ------------------------------------------------------------------ */
    /*  Scroll reveal (IntersectionObserver)                               */
    /* ------------------------------------------------------------------ */
    function initReveal() {
        const targets = $$('[data-reveal]');
        if (!('IntersectionObserver' in window) || !targets.length) {
            targets.forEach(t => t.classList.add('in'));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        targets.forEach(t => io.observe(t));
    }

    /* ------------------------------------------------------------------ */
    /*  Project filter                                                     */
    /* ------------------------------------------------------------------ */
    function initFilters() {
        const buttons = $$('.filter-btn');
        const cards = $$('.project-card');
        if (!buttons.length || !cards.length) return;

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                buttons.forEach(b => {
                    const active = b === btn;
                    b.classList.toggle('active', active);
                    b.setAttribute('aria-selected', String(active));
                });
                cards.forEach(card => {
                    const match = filter === 'all' || card.dataset.cat === filter;
                    card.style.display = match ? '' : 'none';
                });
            });
        });
    }

    /* ------------------------------------------------------------------ */
    /*  Resume aside scrollspy                                             */
    /* ------------------------------------------------------------------ */
    function initScrollspy() {
        const links = $$('#resume-nav a');
        if (!links.length) return;
        const sections = links
            .map(a => document.getElementById(a.getAttribute('href').slice(1)))
            .filter(Boolean);
        if (!sections.length) return;

        const setActive = (id) => {
            links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
        };

        const io = new IntersectionObserver((entries) => {
            const visible = entries
                .filter(e => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible[0]) setActive(visible[0].target.id);
        }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.6, 1] });
        sections.forEach(s => io.observe(s));
    }

    /* ------------------------------------------------------------------ */
    /*  Boot                                                               */
    /* ------------------------------------------------------------------ */
    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initNav();
        initLanguage();
        initReveal();
        initFilters();
        initScrollspy();
    });
})();
