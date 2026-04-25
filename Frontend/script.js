/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const currentLocation = location.pathname.split("/").slice(-1)[0] || "index.html";
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    const langSelect = document.getElementById('lang-select');

    const i18n = {
        en: {
            "nav-home": "Home", "nav-projects": "Projects", "nav-resume": "Resume", "nav-contact": "Contact",
            "badge-work": "Open to Opportunities",
            "hero-name": "Abd AlRahman Khalil",
            "hero-title": "Computer Science | Technical Support | QA & Automation",
            "hero-desc": "A motivated Computer Science candidate with hands-on experience in technical support, troubleshooting, automation, QA-oriented thinking, and software development. Strong problem-solving skills, experience supporting large-scale users, and a practical engineering mindset.",
            "btn-projects": "View Projects", "btn-cv": "Download CV", "btn-contact": "Contact Me", "btn-view-all": "View All Projects",

            "section-about": "Professional Summary",
            "about-p1": "I am a detail-oriented Computer Science professional bridging the gap between software development and IT infrastructure. With a strong foundation in Object-Oriented Programming, Data Structures, and Algorithms, I approach software challenges with a focus on stability and performance.",
            "about-p2": "My background in managing L1/L2 technical support for thousands of users has instilled a rigorous QA mindset. I excel at root cause analysis, logging, and automating repetitive tasks. Whether I am building full-stack web applications, developing computer vision scripts, or ensuring 100% SLA compliance in enterprise environments, I deliver solutions that are both practical and resilient.",

            "section-exp": "Experience", "section-edu": "Education", "section-skills": "Technical Skills",
            "exp-date-1": "2023 – 2026",
            "exp-title-1": "Technical Support / IT Support Engineer",
            "exp-place-1": "Hadassah Academic College, Jerusalem",
            "exp-b1": "Provide end-to-end support and advanced L1/L2 troubleshooting for an infrastructure of 4,500+ users.",
            "exp-b2": "Ensure 100% SLA compliance while resolving hardware, software, and complex network requests.",
            "exp-b3": "Administer Active Directory environments and provide comprehensive infrastructure-related support.",
            "exp-b4": "Develop PowerShell automation scripts to streamline routine administrative tasks and system checks.",
            "exp-b5": "Document recurring issues and conduct Root Cause Analysis (RCA) to improve workflows and overall system stability.",

            "edu-degree": "B.Sc. in Computer Science",
            "edu-place": "Hadassah Academic College, Jerusalem",

            "skill-prog": "Programming", "skill-web": "Web & Database", "skill-qa": "QA & Automation", "skill-infra": "Support & Infra", "skill-tools": "Tools & Core Concepts",

            "proj-chat-title": "Full-Stack Chatroom",
            "proj-chat-desc": "A complete web application featuring secure user authentication, persistent database storage, and REST API-based messaging.",
            "proj-curr-title": "Currency Image Processing",
            "proj-curr-desc": "A computer vision algorithm designed to detect and classify ILS, USD, and EUR currencies, emphasizing advanced image processing.",
            "proj-conv-title": "Converter Automation",
            "proj-conv-desc": "An automated script/tool built for online file conversions, significantly reducing manual data-entry work and improving operational efficiency.",

            "footer-rights": "© 2026 Abd AlRahman Khalil. All rights reserved."
        },
        ar: {
            "nav-home": "الرئيسية", "nav-projects": "المشاريع", "nav-resume": "السيرة الذاتية", "nav-contact": "اتصل بي",
            "badge-work": "متاح لفرص عمل جديدة",
            "hero-name": "عبد الرحمن خليل",
            "hero-title": "علوم حاسوب | دعم فني وتقني | ضمان الجودة (QA) والأتمتة",
            "hero-desc": "متخصص طموح في علوم الحاسوب، أمتلك خبرة عملية في الدعم التقني، تشخيص وحل الأعطال، الأتمتة، وتطوير البرمجيات. أتميز بمهارات تحليلية قوية لحل المشكلات المعقدة، وخبرة في تقديم الدعم لشبكات واسعة من المستخدمين بناءً على منهجية هندسية دقيقة.",
            "btn-projects": "استعراض المشاريع", "btn-cv": "تحميل السيرة الذاتية", "btn-contact": "تواصل معي", "btn-view-all": "عرض كل المشاريع",

            "section-about": "الملخص المهني",
            "about-p1": "أنا متخصص في علوم الحاسوب دقيق الملاحظة، أعمل على سد الفجوة بين تطوير البرمجيات والبنية التحتية لتقنية المعلومات. بفضل أساسي القوي في البرمجة كائنية التوجه (OOP)، وهياكل البيانات، والخوارزميات، أتعامل مع التحديات البرمجية بتركيز عالٍ على استقرار الأنظمة وأدائها.",
            "about-p2": "خلفيتي في إدارة الدعم التقني (L1/L2) لآلاف المستخدمين غرست فيّ عقلية صارمة تجاه ضمان الجودة (QA). أتميز في تحليل الأسباب الجذرية للأعطال (RCA)، تحليل السجلات (Logs)، وأتمتة المهام المتكررة. سواء كنت أقوم بتطوير تطبيقات ويب شاملة (Full-Stack) أو ضمان التوافق بنسبة 100% مع اتفاقيات مستوى الخدمة (SLA)، فإنني أقدم حلولاً هندسية عملية ومرنة.",

            "section-exp": "الخبرات العملية", "section-edu": "المؤهلات العلمية", "section-skills": "المهارات التقنية",
            "exp-date-1": "2023 – 2026",
            "exp-title-1": "مهندس دعم فني / تقني (IT)",
            "exp-place-1": "الكلية الأكاديمية هداسا، القدس",
            "exp-b1": "تقديم دعم شامل وتشخيص متقدم للأعطال التقنية (L1/L2) لبنية تحتية تخدم أكثر من 4,500 مستخدم.",
            "exp-b2": "ضمان الالتزام التام بنسبة 100% باتفاقيات مستوى الخدمة (SLA) لحل طلبات الأجهزة والبرمجيات والشبكات.",
            "exp-b3": "إدارة بيئات Active Directory وتقديم دعم شامل للبنية التحتية التقنية للمؤسسة.",
            "exp-b4": "تطوير نصوص أتمتة (Scripts) باستخدام PowerShell لتسهيل وتسريع المهام الإدارية الروتينية وفحوصات النظام.",
            "exp-b5": "توثيق المشكلات المتكررة وإجراء تحليل الأسباب الجذرية (RCA) لتحسين مسارات العمل واستقرار النظام.",

            "edu-degree": "لقب أول (B.Sc.) في علوم الحاسوب",
            "edu-place": "الكلية الأكاديمية هداسا، القدس",

            "skill-prog": "البرمجة", "skill-web": "الويب وقواعد البيانات", "skill-qa": "ضمان الجودة والأتمتة", "skill-infra": "الدعم الفني والبنية التحتية", "skill-tools": "أدوات ومفاهيم أساسية",

            "proj-chat-title": "تطبيق دردشة متكامل (Full-Stack)",
            "proj-chat-desc": "تطبيق ويب متكامل يحتوي على مصادقة آمنة للمستخدمين، وتخزين بيانات مستمر في قواعد البيانات، ومراسلة مبنية على واجهات REST API.",
            "proj-curr-title": "معالجة الصور وتمييز العملات",
            "proj-curr-desc": "خوارزمية رؤية حاسوبية مصممة لاكتشاف وتصنيف العملات، مع التركيز على تقنيات معالجة الصور والتصميم الخوارزمي.",
            "proj-conv-title": "أتمتة تحويل الملفات",
            "proj-conv-desc": "أداة برمجيّة مؤتمتة لتحويل الملفات عبر الإنترنت، مما يقلل بشكل كبير من إدخال البيانات اليدوي ويحسن كفاءة العمل.",

            "footer-rights": "© 2026 عبد الرحمن خليل. جميع الحقوق محفوظة."
        },
        he: {
            "nav-home": "בית", "nav-projects": "פרויקטים", "nav-resume": "קורות חיים", "nav-contact": "צור קשר",
            "badge-work": "פתוח להצעות עבודה",
            "hero-name": "עבד אלרחמן חליל",
            "hero-title": "מדעי המחשב | תמיכה טכנית | אבטחת איכות (QA) ואוטומציה",
            "hero-desc": "איש מדעי המחשב בעל מוטיבציה גבוהה וניסיון מעשי (Hands-on) בתמיכה טכנית, פתרון תקלות, אוטומציה, מתודולוגיות QA ופיתוח תוכנה. בעל יכולות אנליטיות חזקות, ניסיון מוכח בתמיכה במערך משתמשים רחב, וגישה הנדסית פרקטית.",
            "btn-projects": "צפייה בפרויקטים", "btn-cv": "הורדת קורות חיים", "btn-contact": "צור קשר", "btn-view-all": "צפה בכל הפרויקטים",

            "section-about": "תמצית מקצועית",
            "about-p1": "אני איש מדעי המחשב יסודי הדואג לגשר בין פיתוח תוכנה לתשתיות IT. עם בסיס חזק בתכנות מונחה עצמים (OOP), מבני נתונים ואלגוריתמים, אני ניגש לאתגרי פיתוח תוך התמקדות ביציבות וביצועי המערכת.",
            "about-p2": "הרקע שלי בניהול תמיכה טכנית (L1/L2) עבור אלפי משתמשים הקנה לי חשיבה אנליטית מחמירה מוכוונת QA. אני מתמחה בניתוח שורש הבעיה (RCA), ניתוח לוגים, ואוטומציה של משימות רפטטיביות. בין אם אני מפתח אפליקציות ווב (Full-Stack) או דואג לעמידה של 100% ביעדי SLA בסביבות אנטרפרייז, אני מספק פתרונות פרקטיים ועמידים.",

            "section-exp": "ניסיון תעסוקתי", "section-edu": "השכלה", "section-skills": "מיומנויות טכניות",
            "exp-date-1": "2023 – 2026",
            "exp-title-1": "מהנדס תמיכה טכנית / IT",
            "exp-place-1": "המכללה האקדמית הדסה, ירושלים",
            "exp-b1": "מתן תמיכה מקצה לקצה ופתרון תקלות מתקדם (L1/L2) עבור תשתית של מעל 4,500 משתמשים.",
            "exp-b2": "עמידה ביעדי SLA של 100% תוך טיפול בבעיות חומרה, תוכנה ותקלות רשת מורכבות.",
            "exp-b3": "ניהול סביבות Active Directory ומתן תמיכה מקיפה בתשתיות הארגון.",
            "exp-b4": "פיתוח סקריפטים לאוטומציה באמצעות PowerShell לייעול משימות אדמיניסטרטיביות שוטפות ובדיקות מערכת.",
            "exp-b5": "תיעוד תקלות חוזרות וביצוע חקירת שורש הבעיה (RCA) לשיפור תהליכי עבודה ויציבות המערכת הכוללת.",

            "edu-degree": "תואר ראשון (B.Sc.) במדעי המחשב",
            "edu-place": "המכללה האקדמית הדסה, ירושלים",

            "skill-prog": "תכנות", "skill-web": "ווב ומסדי נתונים", "skill-qa": "QA ואוטומציה", "skill-infra": "תמיכה טכנית ותשתיות", "skill-tools": "כלים ומושגי יסוד",

            "proj-chat-title": "אפליקציית צ'אט (Full-Stack)",
            "proj-chat-desc": "אפליקציית ווב מלאה הכוללת אימות משתמשים מאובטח, אחסון נתונים רציף במסד נתונים, והודעות מבוססות REST API.",
            "proj-curr-title": "עיבוד תמונה וזיהוי מטבעות",
            "proj-curr-desc": "אלגוריתם ראייה ממוחשבת שנועד לזהות ולסווג מטבעות, בדגש על עיבוד תמונה מתקדם ואלגוריתמיקה.",
            "proj-conv-title": "אוטומציה להמרת קבצים",
            "proj-conv-desc": "סקריפט/כלי אוטומציה מותאם אישית להמרת קבצים אונליין, המפחית משמעותית את הצורך בהזנת נתונים ידנית.",

            "footer-rights": "© 2026 עבד אלרחמן חליל. כל הזכויות שמורות."
        }
    };

    function setLanguage(lang) {
        if (lang === 'ar' || lang === 'he') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', lang);
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                el.innerText = i18n[lang][key];
            }
        });

        localStorage.setItem('preferredLang', lang);
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
        const savedLang = localStorage.getItem('preferredLang') || 'en';
        langSelect.value = savedLang;
        setLanguage(savedLang);
    }
});