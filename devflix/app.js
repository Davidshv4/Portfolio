/* DevFlix App - vanilla JS */

const state = {
  theme: localStorage.getItem('theme') || 'dark',
  query: '',
  projects: Array.isArray(window.PROJECTS) ? window.PROJECTS : [],
};

const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

const YEAR = new Date().getFullYear();

function setTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
  state.theme = theme;
  localStorage.setItem('theme', theme);
  const icon = state.theme === 'light' ? '☼' : '☾';
  const btn = qs('#themeToggle .icon');
  if (btn) btn.textContent = icon;
}

function toggleTheme() {
  setTheme(state.theme === 'light' ? 'dark' : 'light');
}

function createBadge(text) {
  const span = document.createElement('span');
  span.className = 'badge';
  span.textContent = text;
  return span;
}

function createCard(project) {
  const card = document.createElement('article');
  card.className = 'card';

  const outer = document.createElement('div');
  outer.className = 'card-outer';

  const img = document.createElement('img');
  img.className = 'thumb';
  img.alt = project.title;
  img.loading = 'lazy';
  img.src = project.thumb;

  const body = document.createElement('div');
  body.className = 'card-body';

  const title = document.createElement('h3');
  title.className = 'card-title';
  title.title = project.title;
  title.textContent = project.title;

  const desc = document.createElement('p');
  desc.className = 'card-desc';
  desc.textContent = project.description;

  const badges = document.createElement('div');
  badges.className = 'badges';
  (project.badges || []).slice(0, 6).forEach(b => badges.appendChild(createBadge(b)));

  const viewBtn = document.createElement('button');
  viewBtn.className = 'btn view-btn';
  viewBtn.textContent = 'View More';
  viewBtn.addEventListener('click', () => openModal(project));

  body.append(title, desc, badges);
  outer.append(img, body);
  card.append(outer, viewBtn);
  card.addEventListener('click', (e) => {
    // Prevent duplicate open when clicking the button
    if (e.target === viewBtn) return;
    openModal(project);
  });
  return card;
}

function createSection(titleText, projects) {
  const wrapper = document.createElement('section');
  wrapper.className = 'section';

  const header = document.createElement('div');
  header.className = 'section-header';

  const h2 = document.createElement('h2');
  h2.textContent = titleText;

  const controls = document.createElement('div');
  controls.className = 'controls';
  const prev = document.createElement('button');
  prev.className = 'icon-btn'; prev.setAttribute('aria-label', 'Scroll left'); prev.textContent = '←';
  const next = document.createElement('button');
  next.className = 'icon-btn'; next.setAttribute('aria-label', 'Scroll right'); next.textContent = '→';

  header.append(h2);

  const row = document.createElement('div');
  row.className = 'row';
  row.setAttribute('tabindex', '0');
  projects.forEach(p => row.appendChild(createCard(p)));

  // Controls wired after row exists
  prev.addEventListener('click', () => row.scrollBy({ left: -row.clientWidth * 0.9, behavior: 'smooth' }));
  next.addEventListener('click', () => row.scrollBy({ left: row.clientWidth * 0.9, behavior: 'smooth' }));
  controls.append(prev, next);
  header.append(controls);

  wrapper.append(header, row);
  return wrapper;
}

function groupProjects(projects, query) {
  const q = (query || '').trim().toLowerCase();
  const filtered = projects.filter(p => {
    if (!q) return true;
    const hay = [p.title, p.description, (p.category||''), ...(p.badges||[])].join(' ').toLowerCase();
    return hay.includes(q);
  });

  const featured = filtered.filter(p => p.featured);
  const byCategory = filtered.reduce((acc, p) => {
    const c = p.category || 'Misc';
    (acc[c] ||= []).push(p);
    return acc;
  }, {});
  return { featured, byCategory };
}

function render() {
  const mount = qs('#projects');
  if (!mount) return;
  mount.innerHTML = '';

  const { featured, byCategory } = groupProjects(state.projects, state.query);
  if (featured.length) mount.appendChild(createSection('Featured Projects', featured));
  Object.entries(byCategory).forEach(([cat, items]) => {
    mount.appendChild(createSection(cat, items));
  });
}

// Modal
function openModal(project) {
  const modal = qs('#modal');
  qs('#modalTitle').textContent = project.title;
  qs('#modalDescription').textContent = project.longDescription || project.description || '';
  const badges = qs('#modalBadges'); badges.innerHTML='';
  (project.badges||[]).forEach(b => badges.appendChild(createBadge(b)));

  const images = qs('#modalImages'); images.innerHTML='';
  (project.images || [project.thumb]).forEach(src => {
    const img = document.createElement('img'); img.src = src; img.alt = project.title; img.loading='lazy';
    images.appendChild(img);
  });

  const gh = qs('#modalGithub'); gh.href = project.github || '#'; gh.style.display = project.github ? '' : 'none';
  const demo = qs('#modalDemo'); demo.href = project.demo || '#'; demo.style.display = project.demo ? '' : 'none';

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = qs('#modal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function bindEvents() {
  // Theme
  qs('#themeToggle')?.addEventListener('click', toggleTheme);

  // Search
  const search = qs('#searchInput');
  if (search) {
    search.addEventListener('input', (e) => {
      state.query = e.target.value;
      render();
    });
  }

  // Modal close
  qsa('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Keyboard left/right to scroll the last focused row
  let activeRow = null;
  document.addEventListener('focusin', (e) => {
    activeRow = e.target?.closest?.('.row') || activeRow;
  });
  window.addEventListener('keydown', (e) => {
    if (!activeRow) return;
    if (e.key === 'ArrowRight') activeRow.scrollBy({ left: activeRow.clientWidth * 0.9, behavior: 'smooth' });
    if (e.key === 'ArrowLeft') activeRow.scrollBy({ left: -activeRow.clientWidth * 0.9, behavior: 'smooth' });
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const year = document.getElementById('year'); if (year) year.textContent = YEAR;
  // Theme
  setTheme(state.theme);
  // Render
  render();
  // Events
  bindEvents();
});


