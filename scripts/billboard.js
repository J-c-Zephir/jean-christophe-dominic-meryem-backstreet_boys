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

// Toutes les animations on scroll
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
      toggleActions: 'restart complete reverse reset',
      trigger: 'video',
    }
  })
    .from('video', { scale: 0 })
    .to('video', { scale: 1 })
});

// Callback
const body = document.querySelector('body');
let isScrolling;

// ***** Instruction 2 ***** //
window.addEventListener('scroll', function() {
	window.clearTimeout( isScrolling );
  body.classList.add("is-scrolling");
  
  // ***** Instruction 3 ***** //
	isScrolling = setTimeout(function() {
		console.log( 'Scrolling has stopped.' );
    body.classList.remove("is-scrolling");
	}, 250);
});

// ***** Instruction 1 ***** //
let anim = gsap.timeline({
  scrollTrigger: {
    trigger: '.level',
    
    onUpdate: (e) => {
      
      if(e.progress){
        // ***** Instruction 4 ***** //
         if(e.direction==-1){
          body.classList.add("direction-up");
          body.classList.remove("direction-down");
        }else{
          // ***** Instruction 5 ***** //
          body.classList.add("direction-down");
          body.classList.remove("direction-up");
        }
      }
    }
  
  }
});

