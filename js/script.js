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



// HOMEPAGE ONBOARDING MESSAGES SLIDESHOW
let homeSlideIndex = 1;
let homeSlideTimer;
let clientCarouselTimer
window.addEventListener("load", function () {
  displayHomeSlides(homeSlideIndex);
  // Autoplay
  homeSlideTimer = setInterval(function () {
    addHomeSlides(1)
  }, 4500);
})

// next and previous control
let addHomeSlides = function (n) {
  clearInterval(homeSlideTimer);
  if (n < 0) {
    displayHomeSlides(homeSlideIndex -= 1);
  } else {
    displayHomeSlides(homeSlideIndex += 1);
  }

  if (n === -1) {
    homeSlideTimer = setInterval(function () {
      addHomeSlides(n + 2)
    }, 4000);
  } else {
    homeSlideTimer = setInterval(function () {
      addHomeSlides(n + 1)
    }, 4000);
  }
}

//Controls the current slide and resets interval if needed
let currentHomeSlide = function (n) {
  clearInterval(homeSlideTimer);
  homeSlideTimer = setInterval(function () {
    addHomeSlides(n + 1)
  }, 4000);
  displayHomeSlides(homeSlideIndex = n);
}

let displayHomeSlides = function (n) {
  let i;
  let slides = document.getElementsByClassName("tt-homepage-slide");
  let dots = document.getElementsByClassName("homeslide-dot");
  if (n > slides.length) {
    homeSlideIndex = 1
  }
  if (n < 1) {
    homeSlideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[homeSlideIndex - 1].style.opacity = "1";
  dots[homeSlideIndex - 1].className += " active";
}



// PIN SERVICES SECTION ON HOMEPAGE ON SCROLL TO VIEWPORT
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const navLinks = gsap.utils.toArray(".services-nav-cover a");

let serviceItem = gsap.utils.toArray(".services-nav-cover a");

navLinks.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#info" + (index + 1), offsetY: 0 }
    });
  });
});

ScrollTrigger.create({
  trigger: ".tt-services-wrapper",
 pin: ".services-nav-inner",
  start: "top top-=0",
  endTrigger: ".services-icon-wrapper",
  end: "bottom 0",
  pinSpacing: false,
  scrub: 1,
  toggleClass: { className: "fixed", targets: "#info" }
});

const serviceIcon = gsap.utils.toArray(".tt-services-icon");

serviceIcon.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top 50%",

    onEnter: () => {
      gsap.set(".services-nav-cover a", { color: "var(--tt-second-color)", fontWeight: "bold", opacity: "0.5" });
      gsap.set(serviceItem[i], { opacity: "1" });
    },
    onEnterBack: () => {
      gsap.set(".services-nav-cover a", { color: "var(--tt-second-color)", fontWeight: "bold", opacity: "0.5"  });
      gsap.set(serviceItem[i], { opacity: "1" });
    }
  });
});




//CLIENT CAROUSEL
let clientsCarousel = document.querySelector('.tt-clients-carousel-container');
let clientsCarouselInner = document.querySelector('.tt-clients-inner');

let pressed = false;
let startX;
let x;

clientsCarousel.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.clientX;
  clientsCarousel.style.cursor = 'grabbing';
  console.log(clientsCarouselInner.offsetleft)
});

clientsCarousel.addEventListener('mouseenter', () => {
  clientsCarousel.style.cursor = 'grab';
});

clientsCarousel.addEventListener('mouseup', () => {
  clientsCarousel.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
  pressed = false;
});

clientsCarousel.addEventListener('mousemove', (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.clientX;
  clientsCarouselInner.style.left = `${x - startX}px`;
});

