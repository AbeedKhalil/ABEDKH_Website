/* ==========================================================================
   Abd AlRahman Khalil — Portfolio
   Site interactivity: i18n, theme, mobile nav, scroll reveal, filters,
   editorial motion (count-up, cursor spotlight, role rotator, tilt,
   magnetic buttons, scroll progress, marquee).
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
            "ey-portfolio": "Portfolio · 2026",
            "hero-name": "Abd AlRahman Khalil",
            "hero-stmt-1": "Engineering",
            "hero-stmt-accent": "at the seam",
            "hero-stmt-2": "of code & infrastructure.",
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
            "btn-open-repo": "Open repository",
            "btn-view-repo": "View on GitHub",
            "private-repo": "Private repo",
            "featured-tag": "Featured",

            // Stats
            "stat-1": "Users supported",
            "stat-2": "SLA compliance",
            "stat-3": "Shipped projects",
            "stat-4": "Test coverage",

            // About
            "ey-about": "About",
            "about-h2-1": "Hybrid",
            "about-h2-accent": "by design",
            "about-h2-2": ".",
            "quote-1": "“Stability is a feature. Observability is the other half.”",
            "about-p1": "I'm a detail-oriented Computer Science professional bridging the gap between software development and IT infrastructure. With a strong foundation in OOP, data structures, and algorithms, I approach software with a focus on stability and performance.",
            "about-p2": "My background managing L1/L2 technical support for thousands of users has instilled a rigorous QA mindset. I excel at root-cause analysis, log forensics, and automating away repetitive work — whether building full-stack apps, computer-vision scripts, or hardening enterprise environments.",
            "principle-1-t": "Stability first",
            "principle-1-d": "Stability and observability before features — production should fail loudly, not silently.",
            "principle-2-t": "Automate the boring",
            "principle-2-d": "Anything done twice gets a script. Anything done weekly gets a pipeline. Document the rest.",
            "principle-3-t": "Tests as hygiene",
            "principle-3-d": "Coverage isn't a metric, it's a habit — like washing your hands before surgery.",

            // Capabilities
            "ey-cap": "Capabilities",
            "cap-title-1": "What",
            "cap-title-accent": "I do",
            "cap-title-2": ".",
            "cap-sub": "A practical mix of building, testing, and supporting — across the stack and across the org.",
            "cap-1-t": "Full-stack development",
            "cap-1-d": "Node.js, Express, REST APIs, MariaDB / MySQL, Sequelize. Authentication, sessions, and persistent storage from the schema up.",
            "cap-2-t": "QA & automation",
            "cap-2-d": "Selenium, Playwright, Postman, Appium, unit testing. Build pipelines that fail loudly so production doesn't.",
            "cap-3-t": "Support & infra",
            "cap-3-d": "Active Directory, DNS/DHCP, TCP/IP, Windows Server, Linux. PowerShell automation and RCA-driven documentation.",

            // Featured work
            "ey-work": "Selected work",
            "work-title-1": "Recent",
            "work-title-accent": "projects",
            "work-title-2": ".",
            "work-sub": "A small slice — full-stack, computer vision, automation, and game engineering.",
            "proj-chat-title": "Full-Stack Chatroom",
            "proj-chat-desc": "Secure auth, REST messaging, and persistent storage with paranoid soft-deletion. Real-time DOM updates via polling.",
            "proj-chat-desc-long": "A robust chatroom built for an Internet Programming course. Multi-step registration, session-based authentication, REST messaging with paranoid soft-deletion, and dynamic DOM updates via 10s polling — designed so users can only edit their own content, even under concurrent load.",
            "proj-curr-title": "Currency Image Processing",
            "proj-curr-desc": "Computer-vision pipeline classifying ILS, USD, and EUR notes from varied images. Custom preprocessing & feature extraction.",
            "proj-conv-title": "Converter Automation",
            "proj-conv-desc": "Selenium-driven script that automates a manual file-conversion workflow, reclaiming hours of repetitive data entry per week.",

            // Toolkit
            "ey-toolkit": "Toolkit",
            "tool-title-1": "Tools that",
            "tool-title-accent": "earn their keep",
            "tool-title-2": ".",

            // Currently
            "ey-now": "Currently",
            "now-title-1": "What I'm",
            "now-title-accent": "on right now",
            "now-title-2": ".",
            "now-1-l": "Building",
            "now-1-t": "Automation toolkit at Hadassah",
            "now-1-d": "PowerShell pipelines for AD onboarding and recurring infra checks.",
            "now-2-l": "Reading",
            "now-2-t": "Designing Data-Intensive Applications",
            "now-2-d": "Kleppmann — chasing the parts about replication and consensus.",
            "now-3-l": "Learning",
            "now-3-t": "Playwright + Postman flows",
            "now-3-d": "Wiring API contract tests into CI to fail loudly before deploys.",

            // CTA
            "cta-stmt-1": "Let's build something",
            "cta-stmt-accent": "reliable",
            "cta-stmt-2": ".",
            "cta-sub": "Available for full-time roles in software, QA, and IT engineering. Open to remote and on-site work in Israel.",
            "cta-collab-1": "Have a project",
            "cta-collab-accent": "in mind",
            "cta-collab-2": "?",
            "cta-collab-sub": "Whether it's full-stack, automation, or QA-driven, I'd love to hear about it.",

            // Projects page
            "proj-page-title-1": "Projects",
            "proj-page-title-accent": ".",
            "proj-page-sub": "A working portfolio of academic and personal projects spanning full-stack web, computer vision, game engineering, and automation. Each one prioritizes correctness, observability, and clean execution.",
            "filter-all": "All", "filter-web": "Web", "filter-vision": "Vision",
            "filter-games": "Games", "filter-auto": "Automation",

            // Resume
            "ey-resume": "Curriculum Vitae · 2026",
            "resume-title-1": "Resume",
            "resume-title-accent": ".",
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
            "contact-title-1": "Let's",
            "contact-title-accent": "talk",
            "contact-title-2": ".",
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
            "ey-portfolio": "محفظة · 2026",
            "hero-name": "عبد الرحمن خليل",
            "hero-stmt-1": "هندسةٌ",
            "hero-stmt-accent": "على الحدود",
            "hero-stmt-2": "بين الكود والبنية التحتية.",
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
            "btn-open-repo": "فتح المستودع",
            "btn-view-repo": "عرض على GitHub",
            "private-repo": "مستودع خاص",
            "featured-tag": "مميز",

            "stat-1": "مستخدم مدعوم",
            "stat-2": "التزام SLA",
            "stat-3": "مشاريع منجزة",
            "stat-4": "تغطية اختبارات",

            "ey-about": "نبذة",
            "about-h2-1": "متعدد",
            "about-h2-accent": "بالتصميم",
            "about-h2-2": ".",
            "quote-1": "«الاستقرار ميزة. القابلية للمراقبة هي النصف الآخر.»",
            "about-p1": "متخصص في علوم الحاسوب دقيق الملاحظة، أعمل على سدّ الفجوة بين تطوير البرمجيات والبنية التحتية لتقنية المعلومات. بفضل أساس قوي في OOP وهياكل البيانات والخوارزميات، أتعامل مع المشاريع البرمجية بتركيز على الاستقرار والأداء.",
            "about-p2": "خلفيتي في إدارة الدعم التقني (L1/L2) لآلاف المستخدمين أكسبتني عقلية صارمة في ضمان الجودة. أتميز في تحليل الأسباب الجذرية، تحليل السجلات، وأتمتة المهام المتكررة — سواء عند تطوير تطبيقات الويب، خوارزميات الرؤية الحاسوبية، أو تحصين بيئات المؤسسات.",
            "principle-1-t": "الاستقرار أولاً",
            "principle-1-d": "الاستقرار والمراقبة قبل الميزات — يجب أن يفشل الإنتاج بصوتٍ عالٍ لا في صمت.",
            "principle-2-t": "أتمتة المهام المملة",
            "principle-2-d": "أي شيء يُنجز مرتين يستحق سكربتاً. وأي شيء يُنجز أسبوعياً يستحق pipeline. وثّق الباقي.",
            "principle-3-t": "الاختبارات كنظافة",
            "principle-3-d": "التغطية ليست رقماً، إنها عادة — كغسل اليدين قبل الجراحة.",

            "ey-cap": "القدرات",
            "cap-title-1": "ما",
            "cap-title-accent": "أُقدّمه",
            "cap-title-2": ".",
            "cap-sub": "مزيج عملي بين البناء والاختبار والدعم — عبر التقنيات وعبر فرق العمل.",
            "cap-1-t": "تطوير ويب متكامل",
            "cap-1-d": "Node.js، Express، REST APIs، MariaDB / MySQL، Sequelize. مصادقة، جلسات، وتخزين دائم من قاعدة البيانات للأعلى.",
            "cap-2-t": "ضمان الجودة والأتمتة",
            "cap-2-d": "Selenium، Playwright، Postman، Appium، اختبارات وحدة. أبني خطوط أنابيب تفشل بصوتٍ عالٍ كي لا يفعل ذلك الإنتاج.",
            "cap-3-t": "الدعم والبنية التحتية",
            "cap-3-d": "Active Directory، DNS/DHCP، TCP/IP، Windows Server، Linux. أتمتة بـPowerShell وتوثيق مبني على RCA.",

            "ey-work": "أعمال مختارة",
            "work-title-1": "أحدث",
            "work-title-accent": "المشاريع",
            "work-title-2": ".",
            "work-sub": "شريحة مختصرة — تطوير ويب، رؤية حاسوبية، أتمتة، وهندسة ألعاب.",
            "proj-chat-title": "تطبيق دردشة متكامل",
            "proj-chat-desc": "مصادقة آمنة، رسائل REST، وتخزين دائم مع حذف ناعم محمي. تحديثات DOM فورية عبر الاستطلاع الدوري.",
            "proj-chat-desc-long": "تطبيق دردشة متين بُني لمساق برمجة الإنترنت. تسجيل متعدد الخطوات، مصادقة بالجلسات، رسائل REST مع حذف ناعم محمي، وتحديثات DOM ديناميكية عبر استطلاع كل 10 ثوانٍ — مصمم بحيث يعدّل المستخدم محتواه فقط حتى تحت الحمل المتزامن.",
            "proj-curr-title": "معالجة صور وتمييز عملات",
            "proj-curr-desc": "خط معالجة بصري لتصنيف عملات ILS وUSD وEUR من صور متنوعة. معالجة مسبقة واستخراج ميزات مخصصة.",
            "proj-conv-title": "أتمتة تحويل الملفات",
            "proj-conv-desc": "أداة Selenium تؤتمت سير عمل تحويل الملفات يدوياً، وتوفّر ساعات من الإدخال المتكرر أسبوعياً.",

            "ey-toolkit": "الأدوات",
            "tool-title-1": "أدواتٌ",
            "tool-title-accent": "تستحق مكانها",
            "tool-title-2": ".",

            "ey-now": "حالياً",
            "now-title-1": "ما أعمل",
            "now-title-accent": "عليه الآن",
            "now-title-2": ".",
            "now-1-l": "أبني",
            "now-1-t": "حقيبة أتمتة في كلية هداسا",
            "now-1-d": "خطوط أنابيب PowerShell لإلحاق المستخدمين في AD وفحوصات بنية متكررة.",
            "now-2-l": "أقرأ",
            "now-2-t": "Designing Data-Intensive Applications",
            "now-2-d": "كليبمان — أركّز على فصول النسخ المتماثل والإجماع.",
            "now-3-l": "أتعلم",
            "now-3-t": "Playwright + Postman",
            "now-3-d": "ربط اختبارات عقود الـAPI بـCI لتفشل بصوت عالٍ قبل النشر.",

            "cta-stmt-1": "لنبنِ شيئاً",
            "cta-stmt-accent": "موثوقاً",
            "cta-stmt-2": ".",
            "cta-sub": "متاح لوظائف بدوام كامل في تطوير البرمجيات وضمان الجودة وهندسة تقنية المعلومات. متاح للعمل عن بُعد ومن المكتب في إسرائيل.",
            "cta-collab-1": "هل لديك مشروع",
            "cta-collab-accent": "بالفكر",
            "cta-collab-2": "؟",
            "cta-collab-sub": "سواء كان تطوير ويب، أتمتة، أو مشروعاً يقوده ضمان الجودة — يسعدني الحديث عنه.",

            "proj-page-title-1": "المشاريع",
            "proj-page-title-accent": ".",
            "proj-page-sub": "محفظة عمل تضم مشاريع أكاديمية وشخصية تشمل تطوير ويب متكامل، رؤية حاسوبية، هندسة ألعاب، وأتمتة. كل مشروع يقدم الصحة والمراقبة والتنفيذ النظيف على ما سواها.",
            "filter-all": "الكل", "filter-web": "ويب", "filter-vision": "رؤية",
            "filter-games": "ألعاب", "filter-auto": "أتمتة",

            "ey-resume": "السيرة الذاتية · 2026",
            "resume-title-1": "السيرة الذاتية",
            "resume-title-accent": ".",
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
            "contact-title-1": "لـِ",
            "contact-title-accent": "نتحدث",
            "contact-title-2": ".",
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
            "ey-portfolio": "תיק עבודות · 2026",
            "hero-name": "עבד אלרחמן חליל",
            "hero-stmt-1": "הנדסה",
            "hero-stmt-accent": "בנקודת התפר",
            "hero-stmt-2": "בין קוד לתשתיות.",
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
            "btn-open-repo": "פתיחת המאגר",
            "btn-view-repo": "צפייה ב-GitHub",
            "private-repo": "מאגר פרטי",
            "featured-tag": "מומלץ",

            "stat-1": "משתמשים נתמכים",
            "stat-2": "עמידה ב-SLA",
            "stat-3": "פרויקטים שהוגשו",
            "stat-4": "כיסוי בדיקות",

            "ey-about": "אודות",
            "about-h2-1": "היברידי",
            "about-h2-accent": "מתוך כוונה",
            "about-h2-2": ".",
            "quote-1": "״יציבות היא תכונה. נראות היא החצי השני.״",
            "about-p1": "איש מדעי המחשב יסודי, מגשר בין פיתוח תוכנה לתשתיות IT. עם בסיס חזק ב-OOP, מבני נתונים ואלגוריתמים, אני ניגש לאתגרי תוכנה תוך התמקדות ביציבות וביצועים.",
            "about-p2": "הרקע שלי בניהול תמיכה L1/L2 לאלפי משתמשים הקנה לי חשיבת QA קפדנית. אני מצטיין ב-RCA, ניתוח לוגים, ואוטומציה של עבודה חוזרת — בין אם מדובר באפליקציות Full-Stack, סקריפטי ראייה ממוחשבת, או חיזוק סביבות אנטרפרייז.",
            "principle-1-t": "יציבות קודם",
            "principle-1-d": "יציבות ונראות לפני תכונות — פרודקשן צריך ליפול בקול, לא בשקט.",
            "principle-2-t": "אוטומציה לחלקים המשעממים",
            "principle-2-d": "כל מה שנעשה פעמיים מקבל סקריפט. כל מה שנעשה שבועי מקבל pipeline. את השאר לתעד.",
            "principle-3-t": "בדיקות כהיגיינה",
            "principle-3-d": "כיסוי הוא לא מדד, הוא הרגל — כמו רחיצת ידיים לפני ניתוח.",

            "ey-cap": "יכולות",
            "cap-title-1": "מה",
            "cap-title-accent": "אני עושה",
            "cap-title-2": ".",
            "cap-sub": "תמהיל מעשי של בנייה, בדיקות ותמיכה — לרוחב הסטאק ולרוחב הארגון.",
            "cap-1-t": "פיתוח Full-Stack",
            "cap-1-d": "Node.js, Express, REST APIs, MariaDB / MySQL, Sequelize. אימות, סשנים ואחסון מתמיד מהסכמה ומעלה.",
            "cap-2-t": "QA ואוטומציה",
            "cap-2-d": "Selenium, Playwright, Postman, Appium, בדיקות יחידה. בונה pipelines שנופלים בקול — כדי שהפרודקשן לא ייפול בשקט.",
            "cap-3-t": "תמיכה ותשתיות",
            "cap-3-d": "Active Directory, DNS/DHCP, TCP/IP, Windows Server, Linux. אוטומציית PowerShell ותיעוד מוכוון RCA.",

            "ey-work": "עבודות נבחרות",
            "work-title-1": "פרויקטים",
            "work-title-accent": "אחרונים",
            "work-title-2": ".",
            "work-sub": "פרוסה קטנה — Full-Stack, ראייה ממוחשבת, אוטומציה והנדסת משחקים.",
            "proj-chat-title": "אפליקציית צ'אט Full-Stack",
            "proj-chat-desc": "אימות מאובטח, הודעות REST, ואחסון מתמיד עם soft-deletion פרנואידי. עדכוני DOM בזמן אמת באמצעות polling.",
            "proj-chat-desc-long": "אפליקציית צ'אט יציבה לקורס תכנות אינטרנט. רישום רב-שלבי, אימות מבוסס סשן, הודעות REST עם soft-deletion פרנואידי, ועדכוני DOM דינמיים ב-polling של 10 שניות — שתוכננה כך שמשתמש יוכל לערוך רק את התוכן שלו, גם תחת עומס מקבילי.",
            "proj-curr-title": "עיבוד תמונה וזיהוי מטבעות",
            "proj-curr-desc": "צינור ראייה ממוחשבת שמסווג ILS, USD, ו-EUR מתמונות מגוונות. עיבוד מקדים והוצאת מאפיינים מותאמים.",
            "proj-conv-title": "אוטומציית המרת קבצים",
            "proj-conv-desc": "סקריפט מבוסס Selenium שמאוטמט תהליך ידני של המרת קבצים, ומשחרר שעות של עבודה חוזרת בשבוע.",

            "ey-toolkit": "ארגז כלים",
            "tool-title-1": "כלים",
            "tool-title-accent": "ששווים את מקומם",
            "tool-title-2": ".",

            "ey-now": "כרגע",
            "now-title-1": "מה אני",
            "now-title-accent": "עושה עכשיו",
            "now-title-2": ".",
            "now-1-l": "בונה",
            "now-1-t": "ארגז אוטומציה בהדסה",
            "now-1-d": "Pipelines של PowerShell ל-onboarding ב-AD ובדיקות תשתית חוזרות.",
            "now-2-l": "קורא",
            "now-2-t": "Designing Data-Intensive Applications",
            "now-2-d": "קלפמן — מתמקד בפרקים על שכפול וקונצנזוס.",
            "now-3-l": "לומד",
            "now-3-t": "Playwright + Postman",
            "now-3-d": "חיבור בדיקות חוזה ל-API ל-CI כדי שייפלו בקול לפני deploy.",

            "cta-stmt-1": "בואו נבנה משהו",
            "cta-stmt-accent": "אמין",
            "cta-stmt-2": ".",
            "cta-sub": "פנוי למשרות מלאות בתוכנה, QA והנדסת IT. פתוח לעבודה מרחוק וביש\"ע.",
            "cta-collab-1": "יש לכם פרויקט",
            "cta-collab-accent": "בראש",
            "cta-collab-2": "?",
            "cta-collab-sub": "Full-Stack, אוטומציה, או מובל QA — אשמח לשמוע.",

            "proj-page-title-1": "פרויקטים",
            "proj-page-title-accent": ".",
            "proj-page-sub": "תיק עבודות פעיל הכולל פרויקטים אקדמיים ואישיים בתחומי Full-Stack, ראייה ממוחשבת, הנדסת משחקים ואוטומציה. כל אחד שם דגש על נכונות, נראות וביצוע נקי.",
            "filter-all": "הכל", "filter-web": "ווב", "filter-vision": "ראייה",
            "filter-games": "משחקים", "filter-auto": "אוטומציה",

            "ey-resume": "קורות חיים · 2026",
            "resume-title-1": "קורות חיים",
            "resume-title-accent": ".",
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
            "contact-title-1": "בואו",
            "contact-title-accent": "נדבר",
            "contact-title-2": ".",
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
    const reducedMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
        if (meta) meta.setAttribute('content', theme === 'light' ? '#faf8f3' : '#0a0a0d');
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
            select.addEventListener('change', (e) => {
                setLanguage(e.target.value);
                renderProjects();
            });
        }
        setLanguage(saved);
    }

    /* ------------------------------------------------------------------ */
    /*  Scroll reveal (IntersectionObserver)                               */
    /* ------------------------------------------------------------------ */
    function initReveal() {
        const targets = $$('[data-reveal]:not(.in)');
        if (!targets.length) return;
        if (!('IntersectionObserver' in window)) {
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
    let _filtersBound = false;
    function initFilters() {
        const buttons = $$('.filter-btn');
        if (!buttons.length) return;

        const applyActiveFilter = () => {
            const activeBtn = buttons.find(b => b.classList.contains('active')) || buttons[0];
            const filter = activeBtn ? activeBtn.dataset.filter : 'all';
            $$('.project-card, .project-featured').forEach(card => {
                const match = filter === 'all' || card.dataset.cat === filter;
                card.style.display = match ? '' : 'none';
            });
        };

        if (!_filtersBound) {
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    buttons.forEach(b => {
                        const active = b === btn;
                        b.classList.toggle('active', active);
                        b.setAttribute('aria-selected', String(active));
                    });
                    applyActiveFilter();
                });
            });
            _filtersBound = true;
        }

        applyActiveFilter();
    }

    /* ------------------------------------------------------------------ */
    /*  Dynamic project rendering (fed by /api/projects)                   */
    /* ------------------------------------------------------------------ */
    const PROJECT_CATEGORIES = ['web', 'vision', 'game', 'auto'];
    const CATEGORY_LABELS = {
        web: 'Web', vision: 'Vision', game: 'Game', auto: 'Automation'
    };
    const CATEGORY_ICONS = {
        web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="13" x2="13" y2="13"/></svg>',
        vision: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/></svg>',
        game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/></svg>',
        auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>'
    };
    const GITHUB_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>';
    const LOCK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
    const EXTERNAL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h7v7"/><path d="M10 14L21 3"/><path d="M21 14v7H3V3h7"/></svg>';

    let _projectCache = null; // { lang, projects }

    async function loadProjects(lang) {
        if (_projectCache && _projectCache.lang === lang) return _projectCache.projects;
        const res = await fetch('/api/projects?lang=' + encodeURIComponent(lang), { credentials: 'omit' });
        if (!res.ok) throw new Error('Failed to load projects: ' + res.status);
        const data = await res.json();
        const projects = Array.isArray(data.projects) ? data.projects : [];
        _projectCache = { lang, projects };
        return projects;
    }

    function categoryVisualHTML(project) {
        if (project.heroImage) {
            const safeUrl = String(project.heroImage).replace(/"/g, '%22');
            return '<img src="' + safeUrl + '" alt="" loading="lazy" />';
        }
        return CATEGORY_ICONS[project.category] || CATEGORY_ICONS.web;
    }

    function buildVisual(project) {
        const visual = document.createElement('div');
        visual.className = 'project-visual';
        visual.setAttribute('aria-hidden', 'true');
        visual.innerHTML = categoryVisualHTML(project);
        return visual;
    }

    function buildMeta(project) {
        const meta = document.createElement('div');
        meta.className = 'project-meta';
        const cat = document.createElement('span');
        cat.className = 'cat-label';
        const dot = document.createElement('span');
        dot.className = 'cat-dot';
        cat.appendChild(dot);
        cat.appendChild(document.createTextNode(' ' + (CATEGORY_LABELS[project.category] || project.category)));
        const year = document.createElement('span');
        year.textContent = String(project.year);
        meta.appendChild(cat);
        meta.appendChild(year);
        return meta;
    }

    function buildTechStack(project) {
        const wrap = document.createElement('div');
        wrap.className = 'tech-stack';
        (project.techStack || []).forEach((t) => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = t;
            wrap.appendChild(tag);
        });
        return wrap;
    }

    function buildActions(project, lang, opts) {
        const dict = i18n[lang] || i18n.en;
        const actions = document.createElement('div');
        actions.className = 'project-actions';
        const featured = !!opts && opts.featured;

        if (project.repoUrl) {
            const a = document.createElement('a');
            a.href = project.repoUrl;
            a.target = '_blank';
            a.rel = 'noopener';
            a.className = 'btn btn-sm ' + (featured ? 'btn-warm' : 'btn-outline');
            a.innerHTML = GITHUB_ICON;
            const label = document.createElement('span');
            label.textContent = featured ? (dict['btn-open-repo'] || 'Open repository')
                                          : (dict['btn-view-repo'] || 'View on GitHub');
            a.appendChild(label);
            actions.appendChild(a);
        } else {
            const a = document.createElement('a');
            a.href = '#';
            a.className = 'btn btn-outline btn-sm';
            a.setAttribute('aria-disabled', 'true');
            a.innerHTML = LOCK_ICON;
            const label = document.createElement('span');
            label.textContent = dict['private-repo'] || 'Private repo';
            a.appendChild(label);
            actions.appendChild(a);
        }

        if (project.demoUrl) {
            const a = document.createElement('a');
            a.href = project.demoUrl;
            a.target = '_blank';
            a.rel = 'noopener';
            a.className = 'btn btn-ghost btn-sm';
            a.innerHTML = EXTERNAL_ICON;
            const label = document.createElement('span');
            label.textContent = 'Live demo';
            a.appendChild(label);
            actions.appendChild(a);
        }

        return actions;
    }

    function buildBody(project, lang, opts) {
        const dict = i18n[lang] || i18n.en;
        const body = document.createElement('div');
        body.className = 'project-body';

        if (opts && opts.featured) {
            const tag = document.createElement('span');
            tag.className = 'featured-tag';
            tag.textContent = dict['featured-tag'] || 'Featured';
            body.appendChild(tag);
        }

        body.appendChild(buildMeta(project));

        const h3 = document.createElement('h3');
        h3.textContent = project.title || '';
        body.appendChild(h3);

        const p = document.createElement('p');
        const useLong = !!(opts && opts.featured) && project.longDesc;
        p.textContent = useLong ? project.longDesc : (project.shortDesc || '');
        body.appendChild(p);

        body.appendChild(buildTechStack(project));
        body.appendChild(buildActions(project, lang, opts));
        return body;
    }

    function buildFeaturedNode(project, lang) {
        const article = document.createElement('article');
        article.className = 'card project-featured';
        article.setAttribute('data-cat', project.category);
        article.setAttribute('data-reveal', '');
        article.appendChild(buildVisual(project));
        article.appendChild(buildBody(project, lang, { featured: true }));
        return article;
    }

    function buildCardNode(project, lang) {
        const article = document.createElement('article');
        article.className = 'card project-card';
        article.setAttribute('data-cat', project.category);
        article.setAttribute('data-reveal', '');
        article.appendChild(buildVisual(project));
        article.appendChild(buildBody(project, lang, { featured: false }));
        return article;
    }

    function updateFilterCounts(projects) {
        const buttons = $$('.filter-btn');
        if (!buttons.length) return;
        const pad = (n) => String(n).padStart(2, '0');
        buttons.forEach((btn) => {
            const f = btn.dataset.filter;
            const n = f === 'all' ? projects.length : projects.filter((p) => p.category === f).length;
            const countEl = btn.querySelector('.count');
            if (countEl) countEl.textContent = pad(n);
        });
    }

    function showEmptyState(slot, lang, retry) {
        if (!slot) return;
        slot.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'empty-state';
        const msg = document.createElement('p');
        msg.textContent = (lang === 'ar' ? 'تعذّر تحميل المشاريع.'
                          : lang === 'he' ? 'לא ניתן לטעון את הפרויקטים.'
                          : "Couldn't load projects.");
        div.appendChild(msg);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-outline btn-sm';
        btn.textContent = (lang === 'ar' ? 'إعادة المحاولة'
                          : lang === 'he' ? 'נסה שוב'
                          : 'Retry');
        btn.addEventListener('click', retry);
        div.appendChild(btn);
        slot.appendChild(div);
    }

    async function renderProjects() {
        const lang = document.documentElement.lang || localStorage.getItem('preferredLang') || 'en';

        const homeFeatured = $('#home-featured-slot');
        const homeGrid = $('#home-projects-grid');
        const projFeatured = $('#featured-slot');
        const projGrid = $('#projects-grid');

        if (!homeFeatured && !homeGrid && !projFeatured && !projGrid) return;

        let projects;
        try {
            projects = await loadProjects(lang);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('[projects] load failed', err);
            [homeFeatured, homeGrid, projFeatured, projGrid].forEach((slot) => {
                if (slot) showEmptyState(slot, lang, () => { _projectCache = null; renderProjects(); });
            });
            return;
        }

        const featured = projects.find((p) => p.featured);
        const rest = projects.filter((p) => !p.featured);

        if (homeFeatured) {
            homeFeatured.innerHTML = '';
            if (featured) homeFeatured.appendChild(buildFeaturedNode(featured, lang));
        }
        if (homeGrid) {
            homeGrid.innerHTML = '';
            rest.slice(0, 2).forEach((p, i) => {
                const node = buildCardNode(p, lang);
                if (i > 0) node.style.setProperty('--reveal-delay', (i * 80) + 'ms');
                homeGrid.appendChild(node);
            });
            homeGrid.removeAttribute('aria-busy');
        }
        if (projFeatured) {
            projFeatured.innerHTML = '';
            if (featured) projFeatured.appendChild(buildFeaturedNode(featured, lang));
        }
        if (projGrid) {
            projGrid.innerHTML = '';
            rest.forEach((p, i) => {
                const node = buildCardNode(p, lang);
                if (i > 0) node.style.setProperty('--reveal-delay', ((i % 3) * 80) + 'ms');
                projGrid.appendChild(node);
            });
            projGrid.removeAttribute('aria-busy');
        }

        updateFilterCounts(projects);
        initReveal();
        initFilters();
        initCursorSpotlight();
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
    /*  Stats count-up                                                     */
    /* ------------------------------------------------------------------ */
    function initStatsCountup() {
        const targets = $$('[data-count]');
        if (!targets.length) return;
        const reduced = reducedMotion();

        const animate = (el) => {
            const end = parseInt(el.dataset.count, 10);
            if (isNaN(end)) return;
            if (reduced) {
                el.textContent = end.toLocaleString();
                return;
            }
            const dur = 1400;
            const start = performance.now();
            const easeOut = (t) => 1 - Math.pow(1 - t, 3);
            const tick = (now) => {
                const t = Math.min(1, (now - start) / dur);
                const value = Math.round(end * easeOut(t));
                el.textContent = value.toLocaleString();
                if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };

        if (!('IntersectionObserver' in window)) {
            targets.forEach(animate);
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    animate(e.target);
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.5 });
        targets.forEach(t => io.observe(t));
    }

    /* ------------------------------------------------------------------ */
    /*  Cursor-tracked card spotlight                                      */
    /* ------------------------------------------------------------------ */
    function initCursorSpotlight() {
        if (reducedMotion()) return;
        const targets = $$('.card, .cap, .project-featured');
        targets.forEach(el => {
            if (el.dataset.spotlight === '1') return;
            el.dataset.spotlight = '1';
            el.addEventListener('pointermove', (e) => {
                const r = el.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                el.style.setProperty('--mx', x + '%');
                el.style.setProperty('--my', y + '%');
            });
        });
    }

    /* ------------------------------------------------------------------ */
    /*  Profile-card 3D tilt                                               */
    /* ------------------------------------------------------------------ */
    function initProfileTilt() {
        if (reducedMotion()) return;
        const card = $('#profile-card');
        if (!card) return;
        const max = 6; // degrees
        card.addEventListener('pointermove', (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            const rx = (-py * max).toFixed(2);
            const ry = (px * max).toFixed(2);
            card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
        card.addEventListener('pointerleave', () => {
            card.style.transform = '';
        });
    }

    /* ------------------------------------------------------------------ */
    /*  Hero role rotator                                                  */
    /* ------------------------------------------------------------------ */
    function initRoleRotator() {
        const el = $('#role-rotate');
        if (!el) return;
        if (reducedMotion()) return;
        const keys = ['hero-role-1', 'hero-role-2', 'hero-role-3'];
        let idx = 0;
        setInterval(() => {
            idx = (idx + 1) % keys.length;
            const lang = localStorage.getItem('preferredLang') || 'en';
            const dict = i18n[lang] || i18n.en;
            const next = dict[keys[idx]] || keys[idx];
            el.classList.add('fading');
            setTimeout(() => {
                el.textContent = next;
                el.setAttribute('data-i18n', keys[idx]);
                el.classList.remove('fading');
            }, 240);
        }, 2800);
    }

    /* ------------------------------------------------------------------ */
    /*  Magnetic buttons                                                   */
    /* ------------------------------------------------------------------ */
    function initMagneticButtons() {
        if (reducedMotion()) return;
        const buttons = $$('[data-magnetic]');
        if (!buttons.length) return;
        const radius = 70;
        const max = 6;
        buttons.forEach(btn => {
            const onMove = (e) => {
                const r = btn.getBoundingClientRect();
                const cx = r.left + r.width / 2;
                const cy = r.top + r.height / 2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const dist = Math.hypot(dx, dy);
                if (dist > radius) {
                    btn.style.transform = '';
                    return;
                }
                const factor = (1 - dist / radius) * max;
                const tx = (dx / radius) * factor;
                const ty = (dy / radius) * factor;
                btn.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
            };
            const reset = () => { btn.style.transform = ''; };
            window.addEventListener('pointermove', onMove, { passive: true });
            btn.addEventListener('pointerleave', reset);
            btn.addEventListener('blur', reset);
        });
    }

    /* ------------------------------------------------------------------ */
    /*  Scroll progress bar                                                */
    /* ------------------------------------------------------------------ */
    function initScrollProgress() {
        const bar = $('#scroll-progress');
        if (!bar) return;
        let raf = 0;
        const update = () => {
            const doc = document.documentElement;
            const h = (doc.scrollHeight - doc.clientHeight) || 1;
            const ratio = Math.max(0, Math.min(1, window.scrollY / h));
            bar.style.transform = `scaleX(${ratio})`;
            raf = 0;
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
    }

    /* ------------------------------------------------------------------ */
    /*  Marquee — duplicate track contents for seamless loop               */
    /* ------------------------------------------------------------------ */
    function initMarquee() {
        const track = $('#marquee-track');
        if (!track) return;
        // Duplicate children once so translateX(-50%) lines up.
        const originals = Array.from(track.children);
        originals.forEach(el => {
            const clone = el.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });
    }

    /* ------------------------------------------------------------------ */
    /*  Boot                                                               */
    /* ------------------------------------------------------------------ */
    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initNav();
        initLanguage();
        initReveal();
        initScrollspy();
        initStatsCountup();
        initCursorSpotlight();
        initProfileTilt();
        initRoleRotator();
        initMagneticButtons();
        initScrollProgress();
        initMarquee();
        renderProjects();
    });
})();
