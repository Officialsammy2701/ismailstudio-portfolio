/* ============================================================
   ISMAIL STUDIO — index.js
   Theme toggle (mirrors ThemeToggle.tsx) + mobile nav
============================================================ */

// ── Theme Toggle ─────────────────────────────────────────────
// Mirrors the logic in ThemeToggle.tsx:
//   - Reads localStorage 'theme' or falls back to system preference
//   - Toggles .light on <html> (same as ThemeToggle's document.documentElement)
//   - Persists choice to localStorage

function applyTheme(isDark) {
  document.documentElement.classList.toggle('light', !isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function syncIcons(isDark) {
  // Header toggle
  const sunIcons  = document.querySelectorAll('[id^="iconSun"]');
  const moonIcons = document.querySelectorAll('[id^="iconMoon"]');
  sunIcons.forEach(el  => { el.style.display = isDark  ? '' : 'none'; });
  moonIcons.forEach(el => { el.style.display = !isDark ? '' : 'none'; });
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'dark' : prefersDark;
  applyTheme(isDark);
  syncIcons(isDark);
  return isDark;
}

let currentIsDark = initTheme();

function handleToggleClick() {
  currentIsDark = !currentIsDark;
  applyTheme(currentIsDark);
  syncIcons(currentIsDark);
}

// Attach to all theme-toggle buttons on the page
document.querySelectorAll('.theme-toggle, [id^="themeToggle"]').forEach(btn => {
  btn.addEventListener('click', handleToggleClick);
});

// Listen for OS-level preference changes (no saved preference only)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    currentIsDark = e.matches;
    applyTheme(currentIsDark);
    syncIcons(currentIsDark);
  }
});

// ── Mobile Navigation Toggle ──────────────────────────────────
// Guards against missing element (design system page may not have toggle)

const nav       = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isVisible = nav.getAttribute('data-visible') === 'true';
    nav.setAttribute('data-visible', String(!isVisible));
    navToggle.setAttribute('aria-expanded', String(!isVisible));
  });
}