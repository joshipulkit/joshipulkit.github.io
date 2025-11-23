
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('year');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Theme
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const startDark = saved === 'dark' || (!saved && prefersDark);
  root.classList.toggle('dark', startDark);
  toggle && toggle.setAttribute('aria-pressed', String(startDark));
  toggle && toggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    toggle.setAttribute('aria-pressed', String(isDark));
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });

  // Mobile nav
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu && navMenu.classList.toggle('show');
  });
  if(navMenu){
    const current = window.location.pathname.split('/').pop() || 'index.html';
    navMenu.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      if(href === current || (current === '' && href === 'index.html')){
        link.setAttribute('aria-current', 'page');
      }
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        navToggle && navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Publications filter
  const yearFilter = document.getElementById('year-filter');
  if(yearFilter){
    yearFilter.addEventListener('change', () => {
      const val = yearFilter.value;
      document.querySelectorAll('.pub').forEach(el => {
        if(val === 'all' || el.getAttribute('data-year') === val){
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    });
  }

  // Notes search and rendering (markdown + metadata)
  const notesIndex = window.notesIndex || [];
  const notesList = document.getElementById('notes-list');
  const noteSearch = document.getElementById('note-search');
  const noteCache = new Map();
  let noteModal, noteModalContent, noteModalClose;
  const sortedNotes = [...notesIndex];
  let activeTag = null;

  const escapeHtml = str => str
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\"/g,'&quot;').replace(/'/g,'&#39;');

  const markdownParser = typeof window.markdownit === 'function'
    ? window.markdownit({
        html:false, linkify:true, typographer:true, breaks:true
      }).disable('html_block').use(md => {
        // Strip HTML comments
        const original = md.renderer.render;
        md.renderer.render = function(tokens, options, env){
          const filtered = tokens.filter(t => !(t.type === 'html_block' && /^<!--/.test(t.content)));
          return original.call(this, filtered, options, env);
        };
      })
    : { render: escapeHtml };

  const markdownToHtml = md => {
    if(!md) return '';
    return markdownParser.render(md);
  };

  const parseFrontMatter = raw => {
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if(!fmMatch) return { meta:{}, body: raw };
    const [, fm, body] = fmMatch;
    const meta = {};
    fm.split(/\n/).forEach(line => {
      const [k,...rest] = line.split(':');
      if(!k) return;
      const key = k.trim();
      const val = rest.join(':').trim();
      if(!val) return;
      if(key === 'tags'){
        const tags = val.replace(/[\[\]]/g,'').split(',').map(t => t.trim()).filter(Boolean);
        meta.tags = tags;
      } else {
        meta[key] = val;
      }
    });
    return { meta, body };
  };

  const formatDate = val => {
    if(!val) return '';
    const d = new Date(val);
    if(!isNaN(d)){
      return d.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' });
    }
    return val;
  };

  const ensureContent = note => {
    if(noteCache.has(note.href)){ return Promise.resolve(noteCache.get(note.href)); }
    return fetch(note.href).then(r => r.ok ? r.text() : '').then(text => {
      const { meta, body } = parseFrontMatter(text);
      const combinedMeta = { ...note, ...meta };
      const words = body.split(/\s+/).filter(Boolean).length;
      const readingTime = Math.max(1, Math.round(words / 200));
      const excerpt = body.split(/\n\n/)[0] || body.slice(0,200);
      const html = markdownToHtml(body);
      const cached = { text: body.toLowerCase(), html, excerpt, meta: { ...combinedMeta, readingTime } };
      noteCache.set(note.href, cached);
      return cached;
    }).catch(() => {
      const cached = { text:'', html:'', excerpt:'', meta: note };
      noteCache.set(note.href, cached);
      return cached;
    });
  };

  const buildNoteMetaLine = meta => {
    const bits = [];
    const formatted = formatDate(meta.date);
    if(formatted) bits.push(formatted);
    if(meta.readingTime) bits.push(`${meta.readingTime} min read`);
    if(meta.tags && meta.tags.length) bits.push(meta.tags.join(', '));
    return bits.join(' • ');
  };

  const renderNotes = items => {
    if(!notesList) return;
    if(!items.length){
      notesList.innerHTML = '<p>No notes found.</p>';
      return;
    }
    notesList.innerHTML = items.map(note => {
      const cache = noteCache.get(note.href) || {};
      const meta = cache.meta || note;
      const metaLine = buildNoteMetaLine(meta);
      return `
        <article class="note-card" data-note="${note.href}">
          <div class="note-meta-line">${metaLine}</div>
          <h3>${meta.title || note.title}</h3>
          <div class="note-meta">
            ${(meta.tags || []).map(tag => `<button class="pill tag-pill" data-tag="${tag}" type="button">${tag}</button>`).join('')}
          </div>
        </article>
      `;
    }).join('');
  };

  const filterNotes = async () => {
    if(!notesList) return;
    const q = (noteSearch?.value || '').trim().toLowerCase();
    await Promise.all(sortedNotes.map(ensureContent));
    if(!q && !activeTag){
      renderNotes(sortedNotes);
      return;
    }
    const results = sortedNotes.filter(note => {
      const cache = noteCache.get(note.href);
      const meta = cache?.meta || note;
      const tagMatch = !activeTag || (meta.tags || []).map(t => t.toLowerCase()).includes(activeTag.toLowerCase());
      if(!tagMatch) return false;
      const haystack = [
        meta.title || '',
        meta.summary || '',
        (meta.tags || []).join(' '),
        cache?.text || ''
      ].join(' ').toLowerCase();
      return haystack.includes(q);
    });
    renderNotes(results);
  };

  const openNoteModal = href => {
    const cache = noteCache.get(href);
    if(!cache) return;
    if(!noteModal){
      noteModal = document.createElement('div');
      noteModal.className = 'note-modal';
      noteModal.innerHTML = `
        <div class="note-modal-inner">
          <button class="note-modal-close" aria-label="Close note">
            <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
          <div class="note-modal-body"></div>
        </div>
      `;
      document.body.appendChild(noteModal);
      noteModalContent = noteModal.querySelector('.note-modal-body');
      noteModalClose = noteModal.querySelector('.note-modal-close');
      noteModalClose.addEventListener('click', () => noteModal.classList.remove('show'));
      noteModal.addEventListener('click', e => { if(e.target === noteModal) noteModal.classList.remove('show'); });
      document.addEventListener('keydown', e => {
        if(e.key === 'Escape' && noteModal?.classList.contains('show')){
          noteModal.classList.remove('show');
        }
      });
    }
    const meta = cache.meta || {};
    const metaLine = buildNoteMetaLine(meta);
    noteModalContent.innerHTML = `
      <div class="note-meta-line">${metaLine}</div>
      <h2>${meta.title || ''}</h2>
      <div class="note-contents">${cache.html || ''}</div>
    `;
    if(window.MathJax && window.MathJax.typesetPromise){
      window.MathJax.typesetPromise([noteModalContent]).catch(() => {});
    }
    noteModal.classList.add('show');
  };

  if(notesList && sortedNotes.length){
    Promise.all(sortedNotes.map(ensureContent)).then(() => {
      sortedNotes.sort((a,b) => {
        const ca = noteCache.get(a.href);
        const cb = noteCache.get(b.href);
        const da = Date.parse(ca?.meta?.date || a.date || '') || 0;
        const db = Date.parse(cb?.meta?.date || b.date || '') || 0;
        return db - da;
      });
      renderNotes(sortedNotes);
      noteSearch && noteSearch.addEventListener('input', () => { activeTag = null; filterNotes(); });
      notesList.addEventListener('click', e => {
        const card = e.target.closest('.note-card');
        if(card){
          e.preventDefault();
          if(e.target.closest('.read-more')){ return; }
          const tagBtn = e.target.closest('.tag-pill');
          if(tagBtn){
            activeTag = tagBtn.getAttribute('data-tag');
            if(noteSearch) noteSearch.value = '';
            filterNotes();
            return;
          }
          const href = card.getAttribute('data-note');
          openNoteModal(href);
        }
      });
    });
  }

  // Gallery grid + lightbox
  const galleryItems = window.galleryItems || [];
  const galleryGrid = document.getElementById('gallery-grid');
  let lightbox, lightboxImg, lightboxCaption, currentIndex = 0;

  const renderGallery = () => {
    if(!galleryGrid) return;
    if(!galleryItems.length){
      galleryGrid.innerHTML = '<p>No gallery items yet.</p>';
      return;
    }
    galleryGrid.innerHTML = galleryItems.map((item, idx) => `
      <article class="gallery-card" data-index="${idx}">
        <div class="gallery-visual">
          ${item.src ? `<img src="${item.src}" alt="${item.alt || item.caption || 'Gallery image'}">` : ''}
        </div>
        <div class="gallery-body">
          <h3>${item.title || 'Untitled'}</h3>
          <p>${item.caption || ''}</p>
          <div class="note-meta"><span class="pill">${item.tag || 'Visual'}</span></div>
        </div>
      </article>
    `).join('');
  };

  const buildLightbox = () => {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-inner">
        <button class="lightbox-close" aria-label="Close gallery">
          <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
          <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <button class="lightbox-nav lightbox-next" aria-label="Next image">
          <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <img alt="">
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
    lightboxImg = lightbox.querySelector('img');
    lightboxCaption = lightbox.querySelector('.lightbox-caption');
    lightbox.querySelector('.lightbox-close')?.addEventListener('click', () => toggleLightbox(false));
    lightbox.querySelector('.lightbox-prev')?.addEventListener('click', () => stepLightbox(-1));
    lightbox.querySelector('.lightbox-next')?.addEventListener('click', () => stepLightbox(1));
    lightbox.addEventListener('click', e => {
      if(e.target === lightbox){ toggleLightbox(false); }
    });
    document.addEventListener('keydown', e => {
      if(!lightbox || !lightbox.classList.contains('show')) return;
      if(e.key === 'Escape') toggleLightbox(false);
      if(e.key === 'ArrowLeft') stepLightbox(-1);
      if(e.key === 'ArrowRight') stepLightbox(1);
    });
  };

  const renderLightboxItem = idx => {
    if(!lightboxImg || !lightboxCaption) return;
    const item = galleryItems[idx];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt || item.caption || 'Gallery image';
    lightboxCaption.textContent = item.caption || '';
  };

  const toggleLightbox = show => {
    if(!lightbox) return;
    lightbox.classList.toggle('show', show);
  };

  const openLightbox = idx => {
    if(!lightbox) buildLightbox();
    currentIndex = idx;
    renderLightboxItem(currentIndex);
    toggleLightbox(true);
  };

  const stepLightbox = delta => {
    currentIndex = (currentIndex + delta + galleryItems.length) % galleryItems.length;
    renderLightboxItem(currentIndex);
  };

  if(galleryGrid){
    renderGallery();
    if(galleryItems.length){
      galleryGrid.addEventListener('click', e => {
        const card = e.target.closest('.gallery-card');
        if(!card) return;
        const idx = Number(card.getAttribute('data-index'));
        openLightbox(idx);
      });
    }
  }

  // News ordering (reverse by date)
  const newsList = document.getElementById('news-list');
  if(newsList){
    const items = Array.from(newsList.querySelectorAll('.news-item'));
    items.sort((a,b) => {
      const da = Date.parse(a.getAttribute('data-date') || '') || 0;
      const db = Date.parse(b.getAttribute('data-date') || '') || 0;
      return db - da;
    });
    items.forEach(item => newsList.appendChild(item));
  }
})();
