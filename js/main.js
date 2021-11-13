// Global variables declarations
let hamburger = document.getElementById('hamburger');
let menubar = document.getElementById('mainMenu');


//GSAP ANIMATIONS
//Toggling of menu bar
let tlMenu = gsap.timeline({
  paused: true
});
tlMenu
  .to('.line03', 0.5, {
    attr: {
      x1: 20,
      x2: 80,
      y2: 3,
      y1: 60
    },
  }, 0)
  .to('.line01', 0.5, {
    x: '+=40'
  }, 0)
  .to('.line02', 0.5, {
    attr: {
      x1: 20,
      y1: 3,
      y2: 60
    },
  }, 0)
  .to(menubar, {
    duration: 0.7,
    opacity: 1,
    height: "100vh",
    ease: 'expo.inOut',
  }, 0)
  .to('.tt-main-menu li', {
    duration: 0.5,
    stagger: 0.1,
    opacity: 1,
    ease: 'expo.inOut',
  }, 0.1)
  .to('.tt-logo', {
    duration: 0.5,
    opacity: 0,
  }, 0.1)

  .reverse();

hamburger.addEventListener('click', () => {
  tlMenu.reversed(!tlMenu.reversed());
});
