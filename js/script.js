//Global variables declarations
let hamburger = document.getElementById('hamburger');
let menubar = document.getElementById('mainNav');


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
    duration: 0.5,
    opacity: 1,
    width: '100vw', //full-width menu
    ease: 'expo.inOut',
  }, 0)
  .to('.main-nav li', {
    duration: 0.5,
    width: '20%',
    stagger: 0.1,
    ease: 'expo.inOut',
  }, -0.2)
  .to('.main-nav li a', {
    duration: 0.5,
    opacity: 1,
  }, 0.2)

  .reverse();

hamburger.addEventListener('click', () => {
  tlMenu.reversed(!tlMenu.reversed());
});



//homeslider animation
let homeTextAnimation = function (slide) {
  gsap.set('.title', {
    autoAlpha: 0
  });
  gsap.to('.title', 3, {
    ease: Power4.easeOut,
    startAt: {
      autoAlpha: 0,
      y: "-150%",
      opacity: 0
    },

    autoAlpha: 1,
    y: "2%",
    display: "block",
    opacity: 1
  });
  gsap.to('.subtitle', 3, {
    ease: Power4.easeOut,
    startAt: {
      autoAlpha: 0,
      x: "-150%"
    },

    autoAlpha: 1,
    x: 0,
    display: "block"
  });
  gsap.to('.btn', 3, {
    ease: Power4.easeOut,
    startAt: {
      autoAlpha: 0,
      rotate: 0,
      opacity: 0,
      y: "300%"
    },

    autoAlpha: 1,
    rotate: 360,
    opacity: 1,
    y: "2%",
    display: "block"
  });
  gsap.to('.home-slide-img', 3, {
    ease: Power4.easeOut,
    startAt: {
      autoAlpha: 0,
      // x: "150%",
      scale: 0
    },

    autoAlpha: 1,
    // x: 0,
    scale: 1,
    display: "block"
  });
}

//Blog Slider animations
let blogSliderAnimation = function (slide) {
  gsap.set('h2', {
    autoAlpha: 0
  });
  gsap.to('h2', 3, {
    ease: Power4.easeOut,
    startAt: {
      autoAlpha: 0,
      scale: 0,
      opacity: 0
    },

    autoAlpha: 1,
    scale: 1,
    display: "block",
    opacity: 1
  });
}

//Landing pages animations
gsap.from(".land-text", {
  duration: 1,
  opacity: 0,
  scale: 0
});
gsap.from(".breadcrumb", {
  duration: 1,
  delay: 0.3,
  x: -100,
  opacity: 0,
});


// gsap.registerPlugin(ScrollTrigger);
// document.querySelectorAll('section').forEach(line => {
//   let inside = line.querySelector('.animate');
//   // let title = line.querySelector('.section-title')

//   ScrollTrigger.create({
//     trigger: line,
//     start: 'top top',
//     duration: 1,
//     // scrub: true,
//     // markers:true,
//     animation: gsap.from(inside, {
//       // paused: true,
//       opacity: 0,
//       y: +100,
//       ease: 'power',
//       stagger: 0.2
//     })
//   })
// })


// //Homepage service section pinning
// gsap.to(".services-inner", {
//   y: (i, target) => -2000 * target.dataset.speed,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".services-section",
//     pin: ".services-section",
//     end: "+=500%",
//     scrub: true,
//   }
// });



//Swiper
//Home page landing 
let homeSlider = new Swiper('.home-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 6000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  runCallbacksOnInit: true,
  on: {
    init: function () {
      let homeSlide = document.querySelectorAll('.home-slide');
      homeTextAnimation(homeSlide);
    },
    slideNextTransitionStart: function () {
      let homeSlide = document.querySelectorAll('.home-slide');
      homeTextAnimation(homeSlide);
    },
    slidePrevTransitionStart: function () {
      let homeSlide = document.querySelectorAll('.home-slide');
      homeTextAnimation(homeSlide);
    }
  }
});



//blog post section carousel
let postCarousel = new Swiper('.post-carousel', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

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

//Blog page slider
let blogSliderNav = new Swiper('.blog-slider-nav', {
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  direction: 'vertical',
  loopedSlides: 7, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
let blogSlider = new Swiper('.blog-slider', {
  spaceBetween: 0,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
  },
  loopedSlides: 7, //looped slides should be the same
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: {
    swiper: blogSliderNav,
  },
  runCallbacksOnInit: true,
  on: {
    init: function () {
      let homeSlide = document.querySelectorAll('.swiper-slide');
      blogSliderAnimation(homeSlide);
    },
    slideNextTransitionStart: function () {
      let homeSlide = document.querySelectorAll('.swiper-slide');
      blogSliderAnimation(homeSlide);
    },
    slidePrevTransitionStart: function () {
      let homeSlide = document.querySelectorAll('.swiper-slide');
      blogSliderAnimation(homeSlide);
    }
  }
});


// Demo by http://creative-punch.net

var items = document.querySelectorAll('.circle a');

for(var i = 0, l = items.length; i < l; i++) {
  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
  
  items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
}

document.querySelector('.menu-button').onclick = function(e) {
   e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
}