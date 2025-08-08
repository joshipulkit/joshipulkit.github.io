
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
  if(saved === 'dark' || (!saved && prefersDark)){
    root.classList.add('dark');
  }
  toggle && toggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });

  // Mobile nav
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu && navMenu.classList.toggle('show');
  });

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
})();
