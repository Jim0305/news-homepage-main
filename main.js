const primaryNav = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('#mobile-nav-toggle');
const body = document.querySelector('body');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');
  if (visibility === 'false') {
    body.classList.add('nav-open');
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    body.classList.remove('nav-open');
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});
