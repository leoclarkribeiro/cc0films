/**
 * Smooth scroll-triggered animations
 * Uses Intersection Observer for performant, buttery reveals
 */

const ANIMATE_ATTR = 'data-animate';
const VISIBLE_CLASS = 'is-visible';

// Easing: elements animate when they're ~12% into viewport
const ROOT_MARGIN = '0px 0px -12% 0px';
const THRESHOLD = 0;

function initScrollAnimations() {
  const elements = document.querySelectorAll(`[${ANIMATE_ATTR}]`);
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
  );

  elements.forEach((el) => observer.observe(el));
}

// Trigger hero animation immediately on load (avoids flash of invisible content)
function revealAboveFold() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.9) {
    hero.querySelectorAll(`[${ANIMATE_ATTR}]`).forEach((el) => {
      el.classList.add(VISIBLE_CLASS);
    });
  }
}

// Subtle header background on scroll
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 50);
  };
  onScroll(); // Initial check
  window.addEventListener('scroll', onScroll, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
      revealAboveFold();
      initScrollAnimations();
      initHeaderScroll();
    });
  });
} else {
  requestAnimationFrame(() => {
    revealAboveFold();
    initScrollAnimations();
    initHeaderScroll();
  });
}
