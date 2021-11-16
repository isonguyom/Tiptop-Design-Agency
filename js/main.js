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
  .to('.tt-main-menu', {
    duration: 0.5,
    stagger: 0.1,
    width: "100%",
    height: "100%",
    ease: 'expo.inOut',
  }, -0.1)
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



// CUSTOM CURSOR
let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
})



// gsap.registerPlugin(ScrollTrigger);
// usage:
batch(".opacity-animate", {
  interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
  batchMax: 3, // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {
    autoAlpha: 1,
    stagger: 0.3,
    overwrite: true
  }),
  onLeave: batch => gsap.set(batch, {
    autoAlpha: 0,
    overwrite: true
  }),
  onEnterBack: batch => gsap.to(batch, {
    autoAlpha: 1,
    stagger: 0.3,
    overwrite: true
  }),
  onLeaveBack: batch => gsap.set(batch, {
    autoAlpha: 0,
    overwrite: true
  })
  // you can also define things like start, end, etc.
});




// the magical helper function (no longer necessary in GSAP 3.3.1 because it was added as ScrollTrigger.batch())...
function batch(targets, vars) {
  let varsCopy = {},
    interval = vars.interval || 0.1,
    proxyCallback = (type, callback) => {
      let batch = [],
        delay = gsap.delayedCall(interval, () => {
          callback(batch);
          batch.length = 0;
        }).pause();
      return self => {
        batch.length || delay.restart(true);
        batch.push(self.trigger);
        vars.batchMax && vars.batchMax <= batch.length && delay.progress(1);
      };
    },
    p;
  for (p in vars) {
    varsCopy[p] = (~p.indexOf("Enter") || ~p.indexOf("Leave")) ? proxyCallback(p, vars[p]) : vars[p];
  }
  gsap.utils.toArray(targets).forEach(target => {
    let config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    ScrollTrigger.create(config);
  });
}