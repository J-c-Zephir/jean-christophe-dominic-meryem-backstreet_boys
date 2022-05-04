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



// Paroles d'une chanson me

// Changer les codes New line par des BR
const newLineToBr = function (str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

// Je Déclare des variables
let btn = document.querySelector('.btn-primary')
let div = document.querySelector('.divTP8')
let spinner = document.querySelector('.spinner-border')



btn.addEventListener("click", function (e) {
  e.preventDefault()
  spinner.classList.remove('visually-hidden');

  console.log('nais')
  fetch(`https://api.lyrics.ovh/v1/backstreet boys/${text.value}`)
  .then(actor => actor.json())
  .then(data => {
    console.log(data);
    div.innerHTML = newLineToBr(data)

    // ajout de visually hidden lorsque les informations entre pour afficher les lyrics
  spinner.classList.add('visually-hidden');
  })
  .catch(error => {
    console.log(error);
    div.innerHTML = `Désolé, les paroles n'ont pu être trouvées. En voici la raison:${error}`
    spinner.classList.add('visually-hidden');
  })

});


// let paroles = document.querySelector(".rechercher");

// paroles.addEventListener("click", function(e) {
//   e.preventDefault();
//   if(){
//     fetch("https://api.lyrics.ovh/v1/");
//   }

// });

// // Paroles d'une chanson mery
// const newLineToBr = function (str) {
//   return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
// }

// // Déclaration de variables
// let btn = document.querySelector('.btnForm')
// let div = document.querySelector('.divTP8')
// let spinner = document.querySelector('.spinner-border')

// btn.addEventListener('click', e => {
//   e.preventDefault()

//   spinner.style.display = 'inline-block';
//   let text = document.querySelector('.text')
//   console.log(text.value)

//   fetch(`https://api.lyrics.ovh/v1/backstreet boys/${text.value}`)
//     .then(data => data.json())
//     .then(data => {
//       spinner.style.display = 'none'
//       let paroles = newLineToBr(data.lyrics)
//       console.log(paroles)
//       div.innerHTML = paroles
//     })

//     .catch(error => {
//       spinner.style.display = 'none'
//       div.innerHTML = `Désolé, les paroles n'ont pu être trouvées. En voici la raison: ${error}`
//     })
// })