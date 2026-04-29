/* ==========================================================================
   Portfolio Admin Dashboard — vanilla JS, hash-routed SPA.
   ========================================================================== */
(function () {
    'use strict';

    const TOKEN_KEY = 'adminToken';
    const VIEW = document.getElementById('view');
    const NAV = document.getElementById('admin-nav');
    const TOAST = document.getElementById('toast');
    const LOGOUT_BTN = document.getElementById('logout-btn');

    const CATEGORIES = ['web', 'vision', 'game', 'auto'];
    const CATEGORY_LABELS = { web: 'Web', vision: 'Vision', game: 'Game', auto: 'Automation' };
    const LANGS = [
        { code: 'en', label: 'EN', name: 'English', dir: 'ltr' },
        { code: 'ar', label: 'AR', name: 'Arabic', dir: 'rtl' },
        { code: 'he', label: 'HE', name: 'Hebrew', dir: 'rtl' }
    ];

    /* ---------------- Token / fetch wrapper --------------- */
    function getToken() { return localStorage.getItem(TOKEN_KEY) || null; }
    function setToken(t) { localStorage.setItem(TOKEN_KEY, t); }
    function clearToken() { localStorage.removeItem(TOKEN_KEY); }

    async function api(method, path, body, opts) {
        const headers = {};
        const token = getToken();
        if (token) headers['Authorization'] = 'Bearer ' + token;

        const init = { method, headers };
        if (body !== undefined && body !== null) {
            if (opts && opts.multipart) {
                init.body = body;
            } else {
                headers['Content-Type'] = 'application/json';
                init.body = JSON.stringify(body);
            }
        }

        const base = window.PORTFOLIO_API_BASE || '';
        const res = await fetch(base + path, init);
        if (res.status === 401 && path.startsWith('/api/admin')) {
            clearToken();
            navigateTo('#/login');
            throw new ApiError('Session expired. Please log in again.', 401, 'unauthorized');
        }
        if (res.status === 204) return null;

        let data = null;
        try { data = await res.json(); } catch { /* may be empty */ }

        if (!res.ok) {
            const msg = (data && data.message) || ('Request failed (' + res.status + ')');
            throw new ApiError(msg, res.status, data && data.error);
        }
        return data;
    }

    function ApiError(message, status, code) {
        const e = new Error(message);
        e.status = status;
        e.code = code;
        return e;
    }

    /* ---------------- Toast --------------- */
    let _toastTimer = null;
    function toast(message, type) {
        TOAST.hidden = false;
        TOAST.textContent = message;
        TOAST.className = 'toast toast-' + (type || 'info');
        if (_toastTimer) clearTimeout(_toastTimer);
        _toastTimer = setTimeout(() => { TOAST.hidden = true; }, type === 'error' ? 4500 : 2500);
    }

    /* ---------------- DOM helpers --------------- */
    function el(tag, attrs, children) {
        const node = document.createElement(tag);
        if (attrs) {
            for (const k of Object.keys(attrs)) {
                const v = attrs[k];
                if (v === null || v === undefined || v === false) continue;
                if (k === 'class') node.className = v;
                else if (k === 'html') node.innerHTML = v;
                else if (k === 'text') node.textContent = v;
                else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
                else if (k === 'dataset' && typeof v === 'object') for (const dk of Object.keys(v)) node.dataset[dk] = v[dk];
                else if (typeof v === 'boolean') { if (v) node.setAttribute(k, ''); }
                else node.setAttribute(k, v);
            }
        }
        if (children) {
            const arr = Array.isArray(children) ? children : [children];
            arr.forEach((c) => {
                if (c == null || c === false) return;
                if (typeof c === 'string') node.appendChild(document.createTextNode(c));
                else node.appendChild(c);
            });
        }
        return node;
    }
    function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

    /* ---------------- Routing --------------- */
    function navigateTo(hash) {
        if (location.hash === hash) {
            renderRoute();
        } else {
            location.hash = hash;
        }
    }

    function setNavActive(route) {
        const links = NAV.querySelectorAll('a[data-route]');
        links.forEach((a) => a.classList.toggle('active', a.dataset.route === route));
    }

    async function renderRoute() {
        const hash = location.hash || '#/projects';
        const isAuthed = !!getToken();

        if (!isAuthed && hash !== '#/login') {
            navigateTo('#/login');
            return;
        }
        NAV.hidden = !isAuthed;

        if (hash === '#/login') {
            setNavActive('');
            renderLogin();
            return;
        }
        if (hash === '#/projects' || hash === '#/' || hash === '') {
            setNavActive('projects');
            await renderProjectList();
            return;
        }
        if (hash === '#/projects/new') {
            setNavActive('projects');
            renderProjectForm(null);
            return;
        }
        const editMatch = hash.match(/^#\/projects\/(\d+)\/edit$/);
        if (editMatch) {
            setNavActive('projects');
            await renderProjectFormForId(parseInt(editMatch[1], 10));
            return;
        }
        if (hash === '#/account') {
            setNavActive('account');
            renderAccount();
            return;
        }

        // Unknown route
        navigateTo('#/projects');
    }

    /* ---------------- Login screen --------------- */
    function renderLogin() {
        clear(VIEW);
        const errEl = el('p', { class: 'field-error', hidden: true });
        const submitBtn = el('button', { type: 'submit', class: 'btn btn-warm' }, 'Sign in');

        const form = el('form', {
            class: 'admin-form',
            onsubmit: async (e) => {
                e.preventDefault();
                errEl.hidden = true;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner"></span>';
                try {
                    const username = form.querySelector('[name=username]').value.trim();
                    const password = form.querySelector('[name=password]').value;
                    const res = await api('POST', '/api/auth/login', { username, password });
                    setToken(res.token);
                    toast('Welcome back, ' + res.username, 'success');
                    navigateTo('#/projects');
                } catch (err) {
                    errEl.hidden = false;
                    errEl.textContent = err.message || 'Login failed.';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Sign in';
                }
            }
        }, [
            el('label', null, [
                'Username',
                el('input', { type: 'text', name: 'username', autocomplete: 'username', required: true })
            ]),
            el('label', null, [
                'Password',
                el('input', { type: 'password', name: 'password', autocomplete: 'current-password', required: true })
            ]),
            errEl,
            submitBtn
        ]);

        const card = el('div', { class: 'admin-login' }, [
            el('h1', null, 'Sign in'),
            el('p', { class: 'login-sub' }, 'Manage your portfolio projects.'),
            form
        ]);
        VIEW.appendChild(card);
    }

    /* ---------------- Project list --------------- */
    let _projects = [];

    async function renderProjectList() {
        clear(VIEW);
        VIEW.appendChild(el('div', null, [
            el('div', { class: 'project-list-header' }, [
                el('div', null, [
                    el('h1', null, 'Projects'),
                    el('p', null, 'All projects shown on the public site. Reorder with ↑/↓, edit or delete inline.')
                ]),
                el('a', { class: 'btn btn-warm', href: '#/projects/new' }, '+ New project')
            ]),
            el('div', { id: 'project-table-wrap' }, [
                el('p', { class: 'upload-status' }, [el('span', { class: 'spinner' }), ' Loading...'])
            ])
        ]));

        try {
            const res = await api('GET', '/api/admin/projects');
            _projects = res.projects || [];
            renderProjectTable();
        } catch (err) {
            const wrap = document.getElementById('project-table-wrap');
            clear(wrap);
            wrap.appendChild(el('div', { class: 'empty-list' }, err.message || 'Failed to load projects.'));
        }
    }

    function renderProjectTable() {
        const wrap = document.getElementById('project-table-wrap');
        if (!wrap) return;
        clear(wrap);

        if (_projects.length === 0) {
            wrap.appendChild(el('div', { class: 'empty-list' }, [
                'No projects yet. ',
                el('a', { href: '#/projects/new' }, 'Create your first one →')
            ]));
            return;
        }

        const table = el('table', { class: 'project-table' });
        const thead = el('thead', null, el('tr', null, [
            el('th', null, ''),
            el('th', null, 'Title'),
            el('th', null, 'Category'),
            el('th', null, 'Year'),
            el('th', null, 'Featured'),
            el('th', null, 'Order'),
            el('th', { style: 'text-align:end' }, '')
        ]));
        const tbody = el('tbody');

        _projects.forEach((p, idx) => {
            const thumb = el('div', { class: 'row-thumb' });
            if (p.heroImage) {
                thumb.appendChild(el('img', { src: p.heroImage, alt: '' }));
            } else {
                thumb.innerHTML = categoryIconSVG(p.category);
            }

            const upBtn = el('button', {
                type: 'button', class: 'btn btn-outline btn-sm',
                title: 'Move up',
                disabled: idx === 0,
                onclick: () => moveProject(p.id, -1)
            }, '↑');
            const downBtn = el('button', {
                type: 'button', class: 'btn btn-outline btn-sm',
                title: 'Move down',
                disabled: idx === _projects.length - 1,
                onclick: () => moveProject(p.id, +1)
            }, '↓');
            const editBtn = el('a', { class: 'btn btn-outline btn-sm', href: '#/projects/' + p.id + '/edit' }, 'Edit');
            const deleteBtn = el('button', {
                type: 'button', class: 'btn-danger',
                onclick: () => deleteProjectPrompt(p)
            }, 'Delete');

            const row = el('tr', null, [
                el('td', null, thumb),
                el('td', null, [
                    el('strong', null, p.titleEn),
                    el('div', { style: 'color:var(--text-muted);font-size:0.82rem;margin-top:0.2rem' }, p.slug)
                ]),
                el('td', null, el('span', { class: 'cat-pill', dataset: { cat: p.category } }, CATEGORY_LABELS[p.category] || p.category)),
                el('td', null, String(p.year)),
                el('td', null, p.featured ? el('span', { class: 'featured-badge' }, '★ Featured') : ''),
                el('td', null, String(p.displayOrder)),
                el('td', { class: 'row-actions' }, [upBtn, downBtn, editBtn, deleteBtn])
            ]);
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        wrap.appendChild(table);
    }

    async function moveProject(id, delta) {
        const idx = _projects.findIndex((p) => p.id === id);
        if (idx < 0) return;
        const target = idx + delta;
        if (target < 0 || target >= _projects.length) return;

        const reordered = _projects.slice();
        const [moved] = reordered.splice(idx, 1);
        reordered.splice(target, 0, moved);
        _projects = reordered.map((p, i) => Object.assign({}, p, { displayOrder: i }));
        renderProjectTable();

        try {
            await api('POST', '/api/admin/projects/reorder', { orderedIds: _projects.map((p) => p.id) });
            toast('Order saved', 'success');
        } catch (err) {
            toast(err.message || 'Reorder failed', 'error');
            renderProjectList();
        }
    }

    async function deleteProjectPrompt(p) {
        if (!confirm('Delete project "' + p.titleEn + '"? This also removes its hero image. This cannot be undone.')) return;
        try {
            await api('DELETE', '/api/admin/projects/' + p.id);
            toast('Project deleted', 'success');
            _projects = _projects.filter((x) => x.id !== p.id);
            renderProjectTable();
        } catch (err) {
            toast(err.message || 'Delete failed', 'error');
        }
    }

    /* ---------------- Project edit / new form --------------- */
    async function renderProjectFormForId(id) {
        clear(VIEW);
        VIEW.appendChild(el('p', { class: 'upload-status' }, [el('span', { class: 'spinner' }), ' Loading...']));
        try {
            const res = await api('GET', '/api/admin/projects/' + id);
            renderProjectForm(res.project);
        } catch (err) {
            clear(VIEW);
            VIEW.appendChild(el('div', { class: 'empty-list' }, err.message || 'Project not found.'));
        }
    }

    function renderProjectForm(project) {
        clear(VIEW);
        const isNew = !project;
        const data = project ? Object.assign({}, project) : {
            id: null, slug: '', category: 'web', year: new Date().getFullYear(),
            featured: false, displayOrder: nextDisplayOrder(),
            heroImage: null, repoUrl: '', demoUrl: '', techStack: [],
            titleEn: '', titleAr: '', titleHe: '',
            shortDescEn: '', shortDescAr: '', shortDescHe: '',
            longDescEn: '', longDescAr: '', longDescHe: '',
            caseStudyEn: '', caseStudyAr: '', caseStudyHe: ''
        };

        let heroState = data.heroImage || null;
        let activeLang = 'en';
        const formError = el('p', { class: 'field-error', hidden: true });

        // ----- Section: Basics -----
        const slugInput = el('input', { type: 'text', name: 'slug', value: data.slug || '', placeholder: 'e.g. my-cool-project', required: true });
        const categorySelect = el('select', { name: 'category' },
            CATEGORIES.map((c) => el('option', { value: c, selected: c === data.category }, CATEGORY_LABELS[c]))
        );
        const yearInput = el('input', { type: 'number', name: 'year', value: data.year, min: '1900', max: '2100', required: true });
        const featuredCheck = el('input', { type: 'checkbox', name: 'featured', checked: !!data.featured });
        const orderInput = el('input', { type: 'number', name: 'displayOrder', value: data.displayOrder, min: '0' });
        const repoInput = el('input', { type: 'url', name: 'repoUrl', value: data.repoUrl || '', placeholder: 'https://github.com/...' });
        const demoInput = el('input', { type: 'url', name: 'demoUrl', value: data.demoUrl || '', placeholder: 'https://demo.example.com' });
        const techInput = el('input', { type: 'text', name: 'techStack', value: (data.techStack || []).join(', '), placeholder: 'Node.js, Express, MariaDB' });

        const titleEnRef = { input: null };

        const basicsSection = el('div', { class: 'form-section' }, [
            el('h3', null, 'Basics'),
            el('div', { class: 'form-grid' }, [
                el('label', null, ['Slug', slugInput]),
                el('label', null, ['Category', categorySelect]),
                el('label', null, ['Year', yearInput]),
                el('label', null, ['Display order', orderInput])
            ]),
            el('div', { class: 'field-row' }, [featuredCheck, el('label', { for: '' }, [
                el('span', { onclick: () => { featuredCheck.checked = !featuredCheck.checked; } }, 'Mark as featured (only one project can be featured at a time — server enforces this)')
            ])])
        ]);

        // ----- Section: Hero image -----
        const heroPreview = el('div', { class: 'hero-preview' });
        const heroFileInput = el('input', { type: 'file', name: 'image', accept: 'image/jpeg,image/png,image/webp,image/svg+xml', style: 'display:none' });
        const heroFilePicker = el('button', { type: 'button', class: 'btn btn-outline btn-sm', onclick: () => heroFileInput.click() }, 'Choose file...');
        const heroRemoveBtn = el('button', { type: 'button', class: 'btn btn-ghost btn-sm', onclick: () => { heroState = null; refreshHeroPreview(); } }, 'Remove');
        const heroStatus = el('span', { class: 'upload-status' });

        function refreshHeroPreview() {
            clear(heroPreview);
            if (heroState) heroPreview.appendChild(el('img', { src: heroState, alt: '' }));
            else heroPreview.appendChild(el('span', null, 'No image'));
            heroRemoveBtn.disabled = !heroState;
        }
        refreshHeroPreview();

        heroFileInput.addEventListener('change', async () => {
            const file = heroFileInput.files && heroFileInput.files[0];
            if (!file) return;
            heroStatus.innerHTML = '<span class="spinner"></span> Uploading...';
            try {
                const fd = new FormData();
                fd.append('image', file);
                const res = await api('POST', '/api/admin/projects/upload', fd, { multipart: true });
                heroState = res.url;
                refreshHeroPreview();
                heroStatus.textContent = 'Uploaded';
                setTimeout(() => { heroStatus.textContent = ''; }, 2000);
            } catch (err) {
                heroStatus.textContent = '';
                toast(err.message || 'Upload failed', 'error');
            } finally {
                heroFileInput.value = '';
            }
        });

        const heroSection = el('div', { class: 'form-section' }, [
            el('h3', null, ['Hero image', el('small', null, 'Optional. JPG/PNG/WebP/SVG, up to 3 MB. If empty, the category icon is shown.')]),
            el('div', { class: 'hero-upload' }, [
                heroPreview,
                el('div', { class: 'hero-upload-controls' }, [heroFilePicker, heroRemoveBtn, heroStatus]),
                heroFileInput
            ])
        ]);

        // ----- Section: Links + tech -----
        const linksSection = el('div', { class: 'form-section' }, [
            el('h3', null, 'Links & tech stack'),
            el('label', null, ['Repository URL', repoInput]),
            el('label', null, ['Live demo URL', demoInput]),
            el('label', null, [
                'Tech stack',
                techInput,
                el('span', { class: 'upload-status' }, 'Comma-separated. Example: Node.js, Express, MariaDB')
            ])
        ]);

        // ----- Section: Content (i18n tabs) -----
        const tabBtns = LANGS.map((L) => el('button', {
            type: 'button',
            class: 'lang-tab' + (L.code === activeLang ? ' active' : ''),
            dataset: { lang: L.code },
            onclick: () => switchLang(L.code)
        }, L.label + ' · ' + L.name));

        const langPanes = LANGS.map((L) => {
            const titleVal = data['title' + L.code.toUpperCase()[0] + L.code.slice(1)] || data['title' + capitalize(L.code)] || '';
            const shortVal = data['shortDesc' + capitalize(L.code)] || '';
            const longVal = data['longDesc' + capitalize(L.code)] || '';
            const csVal = data['caseStudy' + capitalize(L.code)] || '';
            const isEN = L.code === 'en';
            const fallbackHint = isEN ? '' : ' (falls back to English if blank)';

            const titleI = el('input', { type: 'text', name: 'title_' + L.code, value: titleVal, required: isEN, placeholder: 'Project title' + fallbackHint });
            if (isEN) titleEnRef.input = titleI;
            const shortI = el('textarea', { name: 'shortDesc_' + L.code, rows: '3', required: isEN, placeholder: 'One- or two-sentence summary' + fallbackHint }, shortVal);
            const longI = el('textarea', { name: 'longDesc_' + L.code, rows: '5', placeholder: 'Used on the featured card' + fallbackHint }, longVal);
            const csI = el('textarea', { name: 'caseStudy_' + L.code, rows: '10', placeholder: 'Optional markdown for a future case-study page' + fallbackHint }, csVal);

            return el('div', { class: 'lang-pane' + (L.code === activeLang ? ' active' : ''), dataset: { lang: L.code } }, [
                el('label', null, ['Title' + (isEN ? ' *' : ''), titleI]),
                el('label', null, ['Short description' + (isEN ? ' *' : ''), shortI]),
                el('label', null, ['Long description (featured card body)', longI]),
                el('label', null, ['Case study (markdown, optional)', csI])
            ]);
        });

        function switchLang(code) {
            activeLang = code;
            tabBtns.forEach((b) => b.classList.toggle('active', b.dataset.lang === code));
            langPanes.forEach((p) => p.classList.toggle('active', p.dataset.lang === code));
        }

        const contentSection = el('div', { class: 'form-section' }, [
            el('h3', null, ['Content', el('small', null, 'Edit per language. EN is required; AR/HE fall back to EN if blank.')]),
            el('div', { class: 'lang-tabs' }, tabBtns),
            ...langPanes
        ]);

        // Auto-suggest slug from title_en (only when creating new and slug is empty)
        if (isNew && titleEnRef.input) {
            titleEnRef.input.addEventListener('input', () => {
                if (!slugInput.dataset.touched) {
                    slugInput.value = slugify(titleEnRef.input.value);
                }
            });
            slugInput.addEventListener('input', () => { slugInput.dataset.touched = '1'; });
        }

        const submitBtn = el('button', { type: 'submit', class: 'btn btn-warm' }, isNew ? 'Create project' : 'Save changes');
        const cancelBtn = el('a', { class: 'btn btn-ghost', href: '#/projects' }, 'Cancel');

        const form = el('form', {
            class: 'admin-form',
            onsubmit: async (e) => {
                e.preventDefault();
                formError.hidden = true;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner"></span>';

                const techValues = techInput.value.split(',').map((s) => s.trim()).filter(Boolean);
                const payload = {
                    slug: slugInput.value.trim().toLowerCase(),
                    category: categorySelect.value,
                    year: parseInt(yearInput.value, 10),
                    featured: featuredCheck.checked,
                    displayOrder: parseInt(orderInput.value, 10) || 0,
                    heroImage: heroState,
                    repoUrl: repoInput.value.trim() || null,
                    demoUrl: demoInput.value.trim() || null,
                    techStack: techValues
                };
                LANGS.forEach((L) => {
                    const C = capitalize(L.code);
                    payload['title' + C] = form.querySelector('[name=title_' + L.code + ']').value.trim() || null;
                    payload['shortDesc' + C] = form.querySelector('[name=shortDesc_' + L.code + ']').value.trim() || null;
                    payload['longDesc' + C] = form.querySelector('[name=longDesc_' + L.code + ']').value.trim() || null;
                    payload['caseStudy' + C] = form.querySelector('[name=caseStudy_' + L.code + ']').value.trim() || null;
                });

                try {
                    if (isNew) {
                        await api('POST', '/api/admin/projects', payload);
                        toast('Project created', 'success');
                    } else {
                        await api('PUT', '/api/admin/projects/' + data.id, payload);
                        toast('Project saved', 'success');
                    }
                    navigateTo('#/projects');
                } catch (err) {
                    formError.hidden = false;
                    formError.textContent = err.message || 'Save failed.';
                    submitBtn.disabled = false;
                    submitBtn.textContent = isNew ? 'Create project' : 'Save changes';
                }
            }
        }, [
            basicsSection,
            heroSection,
            linksSection,
            contentSection,
            formError,
            el('div', { class: 'form-actions' }, [submitBtn, cancelBtn])
        ]);

        VIEW.appendChild(el('div', null, [
            el('div', { class: 'project-list-header' }, [
                el('div', null, [
                    el('h1', null, isNew ? 'New project' : 'Edit project'),
                    el('p', null, isNew ? 'Add a new project to the portfolio.' : ('Editing: ' + data.titleEn))
                ]),
                el('a', { class: 'btn btn-ghost', href: '#/projects' }, '← Back to list')
            ]),
            form
        ]));
    }

    function nextDisplayOrder() {
        if (!_projects.length) return 0;
        return Math.max.apply(null, _projects.map((p) => p.displayOrder)) + 1;
    }

    function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

    function slugify(s) {
        return String(s || '')
            .toLowerCase()
            .normalize('NFKD').replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 60);
    }

    function categoryIconSVG(cat) {
        const ICONS = {
            web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="10" x2="16" y2="10"/></svg>',
            vision: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>',
            game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/></svg>',
            auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/></svg>'
        };
        return ICONS[cat] || ICONS.web;
    }

    /* ---------------- Account / change password --------------- */
    function renderAccount() {
        clear(VIEW);
        const errEl = el('p', { class: 'field-error', hidden: true });
        const submitBtn = el('button', { type: 'submit', class: 'btn btn-warm' }, 'Update password');

        const form = el('form', {
            class: 'admin-form',
            onsubmit: async (e) => {
                e.preventDefault();
                errEl.hidden = true;

                const cur = form.querySelector('[name=current]').value;
                const next = form.querySelector('[name=next]').value;
                const confirmVal = form.querySelector('[name=confirm]').value;
                if (next.length < 12) {
                    errEl.hidden = false;
                    errEl.textContent = 'New password must be at least 12 characters.';
                    return;
                }
                if (next !== confirmVal) {
                    errEl.hidden = false;
                    errEl.textContent = 'New password and confirmation do not match.';
                    return;
                }
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner"></span>';
                try {
                    await api('POST', '/api/auth/change-password', { currentPassword: cur, newPassword: next });
                    toast('Password updated', 'success');
                    form.reset();
                } catch (err) {
                    errEl.hidden = false;
                    errEl.textContent = err.message || 'Update failed.';
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Update password';
                }
            }
        }, [
            el('label', null, ['Current password',
                el('input', { type: 'password', name: 'current', autocomplete: 'current-password', required: true })]),
            el('label', null, ['New password (min 12 characters)',
                el('input', { type: 'password', name: 'next', autocomplete: 'new-password', required: true, minlength: '12' })]),
            el('label', null, ['Confirm new password',
                el('input', { type: 'password', name: 'confirm', autocomplete: 'new-password', required: true, minlength: '12' })]),
            errEl,
            submitBtn
        ]);

        VIEW.appendChild(el('div', null, [
            el('div', { class: 'project-list-header' }, [
                el('div', null, [
                    el('h1', null, 'Account'),
                    el('p', null, 'Change your admin password.')
                ])
            ]),
            el('div', { class: 'form-section', style: 'max-width:480px' }, form)
        ]));
    }

    /* ---------------- Logout --------------- */
    LOGOUT_BTN.addEventListener('click', () => {
        clearToken();
        toast('Signed out', 'success');
        navigateTo('#/login');
    });

    /* ---------------- Boot --------------- */
    window.addEventListener('hashchange', renderRoute);
    if (!location.hash) location.hash = getToken() ? '#/projects' : '#/login';
    renderRoute();
})();
