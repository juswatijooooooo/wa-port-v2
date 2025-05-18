window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('main')?.classList.add('loaded');
  document.querySelector('header')?.classList.add('loaded');
  document.querySelector('#about-me')?.classList.add('loaded');
  document.querySelector('#skills')?.classList.add('loaded');
  document.querySelector('#project')?.classList.add('loaded');
  document.querySelector('#contact')?.classList.add('loaded');
  document.querySelector('footer')?.classList.add('loaded');
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('open');
});
