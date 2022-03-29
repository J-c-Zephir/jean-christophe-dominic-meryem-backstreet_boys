// Jay See

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20
    },

  }
});


gsap.registerPlugin(ScrollTrigger);

gsap.to('section', {
  scrollTrigger: {
    markers: true,
    start: 'top 75%',
    end: 'bottom 25%',
    toggleActions: 'restart complete reverse reset',
    trigger: 'section',
  },
  x: '100%',
  duration: 4,
});