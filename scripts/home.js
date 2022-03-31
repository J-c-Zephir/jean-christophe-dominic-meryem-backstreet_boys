gsap.registerPlugin(ScrollTrigger);

let swiper = new Swiper(".swiper", {
    direction:'horizontal',
    loop: false,

    pagination:{
        el: '.swiper-pagination',
    },
    
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar'
    }
});


let sections = document.querySelectorAll('section')

sections.forEach(function(section) {

    gsap.timeline({
        scrollTrigger: {
          trigger: section,
          toggleActions: 'restart complete reverse reset',
          }
        })
        .from(section, {opacity:0})
        .to(section, {opacity: 100})

    let images = section.querySelectorAll('section img');
      images.forEach(function(img) {
      gsap.timeline({
        scrollTrigger: {
            trigger: img,
            toggleActions: 'restart complete reverse reset',
            }
      })
      .from(img, {scale:0})
      .to(img, {scale: 1})
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: 'video',
          toggleActions: 'restart complete reverse reset',
          }
        })
        .from('video', {scale:0})
        .to('video', {scale: 1})
  });