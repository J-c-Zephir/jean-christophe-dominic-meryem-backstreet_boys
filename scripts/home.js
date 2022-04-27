gsap.registerPlugin(ScrollTrigger);

let swiper = new Swiper(".swiper", {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar'
  }
});


let sections = document.querySelectorAll('section')

sections.forEach(function (section) {

  gsap.timeline({
    scrollTrigger: {
      trigger: section,
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


const spritesheet = document.querySelector('.spritesheet');
let scroll

window.addEventListener('scroll', function () {
  window.clearTimeout(scroll);
  scroll = setTimeout(function () {
    spritesheet.className = 'spritesheet';
  }, 200);
});

let animation = gsap.timeline({
  scrollTrigger: {
    trigger: '.secondaire',
    onUpdate: (e) => {
      if (e.progress) {
        if (e.direction == -1) {
          spritesheet.className = 'haut'
        } else {
          spritesheet.className = 'bas'
        }
      }
    }

  }
});

let btnRecherche =  document.querySelector('.recherche');
let titreRecherche = document.querySelector('.titre');

btnRecherche.addEventListener('click', function(){
  e.preventDefault();
  
  if(titreRecherche.value != null){
    fetch(`https://api.lyrics.ovh/v1/backstreet boys/${titreRecherche.value}`) 
    .then(data => data.json()) 
    .then(actor => { 
      console.log(actor);
    }); 
  }
  else{
    titreRecherche.value = "Veuillez mettre le nom d'un titre"
  }

})