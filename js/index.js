function clock() {
  const clockFace = document.querySelector('.clock__time-wrapper');
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  const currentTime = `${hours}:${minutes}`;

  if (currentTime === clockFace.innerHTML || clockFace.innerHTML !== '') {
    return;
  }

  clockFace.innerHTML = currentTime;

  return clock;
}

clock();
setInterval(clock, 1000);

const closeBtn = document.querySelector('.close-burger-btn');
const openBtn = document.querySelector('.open-burger-btn');
const burgerCasesMenu = document.querySelector('.burger-menu__cases-nav-list-wrapper');
const burgerPartnersMenu = document.querySelector('.burger-menu__to-partners-nav-list-wrapper');
const burgerSocialList = document.querySelector('.burger-menu__social-list');
const header = document.querySelector('.header');
const headerHeight = window.getComputedStyle(header).height;
const tlBurger = gsap.timeline({ paused: true });

tlBurger.to('.nav__burger-menu', { zIndex: 40, opacity: 1, visibility: 'visible', duration: 0.3, })
  .to('.burger-menu__head', { y: headerHeight, opacity: 1, visibility: 'visible', duration: 0.3, })
  .from('.burger-menu__body', { y: '100vh', duration: 0.25 }, '-=0.17')
  .to('.burger-menu__body', { opacity: 1, visibility: 'visible', duration: 0.25 }, '<')
  .from(closeBtn, { opacity: 0, duration: 0.05 })
  .from('.burger-menu__main-nav-list', { y: 55, opacity: 0, duration: 0.25 })
  .from([burgerSocialList, burgerPartnersMenu, burgerCasesMenu], { y: 25, opacity: 0, duration: 0.25 });

openBtn.addEventListener('click', () => {
  tlBurger.play();
  document.body.classList.toggle('non-scroll');
});

closeBtn.addEventListener('click', () => {
  tlBurger.reverse();
  document.body.classList.toggle('non-scroll');
});

document.addEventListener('DOMContentLoaded', () => {
  const tlLoading = gsap.timeline({ paused: false });
  tlLoading.from('.hero__title', { opacity: 0, y: 70, duration: 1.2, ease: 'power4.out' })
    .from('.hero__familiarize-link', { opacity: 0, y: 100, duration: 0.3 }, '<')
    .from('.hero__text', { opacity: 0, duration: 1 }, '-=0.5')
    .from('.img-wrapper__large-photo', { opacity: 0, scale: 0.9, duration: 0.8 }, '-=0.8')
    .from('.small-photo-1', { opacity: 0, scale: 0.9, duration: 0.8 }, '-=0.7')
    .from('.small-photo-2', { opacity: 0, scale: 0.9, duration: 1 }, '-=0.5')
    .from('.hero__author-info', { opacity: 0, duration: 1 }, '<+=0.45');
});
