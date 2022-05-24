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
const spritesheet = document.querySelector('.spritesheet');
let isScrolling;

// ***** Instruction 2 ***** //
window.addEventListener('scroll', function () {
  window.clearTimeout(scroll);
  spritesheet.className = "is-scrolling";

  // ***** Instruction 3 ***** //
  isScrolling = setTimeout(function () {
    console.log('Scrolling has stopped.');
    spritesheet.className = "spritesheet";
  }, 150);
});

// ***** Instruction 1 ***** //
let anim = gsap.timeline({
  scrollTrigger: {
    trigger: '.main_website',

    onUpdate: (e) => {

      if (e.progress) {
        // ***** Instruction 4 ***** //
        if (e.direction == -1) {
          spritesheet.className = "direction-up";
          spritesheet.className = "direction-down";
        } else {
          // ***** Instruction 5 ***** //
          spritesheet.className = "direction-down";
          spritesheet.className = "direction-up";
        }
      }
    }
  }
});


// Changer les codes New line par des BR
const newLineToBr = function (str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

// Je Déclare des variables
let btn = document.querySelector('.btn-primary')
let spinner = document.querySelector('.spinner-border')
let paroles = document.querySelector('.paroles')
let recherche = document.querySelector('.recherche')

// Onclick
btn.addEventListener("click", function (e) {
  e.preventDefault()
  spinner.classList.remove('visually-hidden');

  // Si il n'y a rien dans ma recherche afficher un message
  if (recherche.value == '') {

    spinner.classList.add('visually-hidden');
    recherche.value = "Veuillez insérer le nom d'une chanson ici";
  }
  // Rechercher les paroles  
  else {
    fetch(`https://api.lyrics.ovh/v1/backstreet boys/${recherche.value}`)
      .then(actor => actor.json())
      .then(data => {
        console.log(data);
        const parolesChanson = newLineToBr(data.lyrics)

        // afficher les paroles dans le site
        paroles.innerHTML = `<br><h3> Paroles de: ${recherche.value} </h3><br> ${parolesChanson};`
        spinner.classList.add('visually-hidden');

      })

      .catch(error => {
        console.log(error);
        paroles.innerHTML = `Désolé, les paroles n'ont pu être trouvées. En voici la raison:${error}`

        // ajout de visually hidden lorsque les informations entre pour afficher une erreur ou les lyrics
        spinner.classList.add('visually-hidden');
      });
  }
});
