// ── LOADER ─────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 1800);
});

// ── CUSTOM CURSOR ──────────────────────
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform =
    `translate(${e.clientX}px, ${e.clientY}px)`;
});

// ── NAV SCROLL ─────────────────────────
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ── REVEAL ANIMATION ───────────────────
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }

  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => {
  observer.observe(el);
});

// ── FILTER TABS ────────────────────────
const tabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.work-card');

tabs.forEach(tab => {

  tab.addEventListener('click', () => {

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    cards.forEach(card => {

      const match =
        filter === 'all' ||
        card.dataset.filter === filter;

      card.style.display = match ? 'block' : 'none';

    });

  });

});

// ── LIGHTBOX ───────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

cards.forEach(card => {

  card.addEventListener('click', () => {

    const img = card.querySelector('img');

    if (img) {
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
    }

  });

});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('open');
});

lightbox.addEventListener('click', (e) => {

  if (e.target === lightbox) {
    lightbox.classList.remove('open');
  }

});

// ── PARALLAX HERO ──────────────────────
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {

  const y = window.scrollY;

  heroBg.style.transform =
    `translateY(${y * 0.3}px)`;

});