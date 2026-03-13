/* ═══════════════════════════════════════════════
   Z&B Athletic – Centro de Treinamento
   main.js
═══════════════════════════════════════════════ */

// ─── NAVBAR SCROLL EFFECT ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── MOBILE MENU TOGGLE ───
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    menu.classList.remove('open');
  }
});

// ─── SCROLL REVEAL ───
const revealEls = document.querySelectorAll('.reveal');

function activateVisible() {
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 60 && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });
}

// Observer como reforço
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px 60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// Checa na carga, scroll e resize
activateVisible();
window.addEventListener('load', activateVisible);
window.addEventListener('scroll', activateVisible, { passive: true });
window.addEventListener('resize', activateVisible, { passive: true });