//Global variables declarations
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

window.addEventListener("load", function () {
  displayHomeSlides(homeSlideIndex);
  // Autoplay
  homeSlideTimer = setInterval(function () {
    addHomeSlides(1)
  }, 4500);
})

// NEXT AND PREVIOUS CONTROL
let addHomeSlides = function(n) {
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
let currentHomeSlide = function(n) {
  clearInterval(homeSlideTimer);
  homeSlideTimer = setInterval(function () {
    addHomeSlides(n + 1)
  }, 4000);
  displayHomeSlides(homeSlideIndex = n);
}

let displayHomeSlides = function(n) {
  var i;
  var slides = document.getElementsByClassName("tt-homepage-slide");
  var dots = document.getElementsByClassName("homeslide-dot");
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



//Client carousel
let clientsCarousel = new Swiper('.clients-carousel', {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  autoplay: true,
  grabCursor: true,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  }
});

