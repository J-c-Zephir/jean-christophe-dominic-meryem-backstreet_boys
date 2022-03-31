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


let section = document.querySelectorAll('section')

section.forEach(function (section) {

  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 90%',
      end: 'bottom 90%',
      toggleActions: 'restart complete reverse reset',
    }
  })
    .from(section, { opacity: 0 })
    .to(section, { opacity: 100 })

  let images = section.querySelectorAll('section img');
  images.forEach(function (img) {
    gsap.timeline({
      scrollTrigger: {
        trigger: img,
        toggleActions: 'restart complete reverse reset',
      }
    })
      .from(img, { scale: 0 })
      .to(img, { scale: 1 })
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: 'video',
      toggleActions: 'restart complete reverse reset',
    }
  })
    .from('video', { scale: 0 })
    .to('video', { scale: 1 })
});